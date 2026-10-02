import katex from 'katex';
import { marked } from 'marked';

/**
 * Clean up LaTeX string before KaTeX rendering:
 * 1. Restores JS string literal escape corruptions (\f, \t, \b, \r).
 * 2. Normalizes unicode Rupee symbol ₹ to clean formatted text.
 * 3. Escapes unescaped `%` (so LaTeX doesn't treat it as a comment).
 * 4. Masks \text{...} blocks to prevent math command injection into plain text.
 * 5. Repairs missing backslashes on standard math operators in math mode.
 */
export function sanitizeLatex(mathStr: string): string {
  let cleaned = mathStr;

  // 0. Repair JS escaped control characters resulting from unescaped backslashes in source strings
  cleaned = cleaned
    .replace(/\x0crac/g, '\\frac')
    .replace(/\x09ext/g, '\\text')
    .replace(/\x09imes/g, '\\times')
    .replace(/\x09heta/g, '\\theta')
    .replace(/\x09o\b/g, '\\to')
    .replace(/\x09au\b/g, '\\tau')
    .replace(/\x08f\b/g, '\\bf')
    .replace(/\x08ar\b/g, '\\bar')
    .replace(/\x08eta\b/g, '\\beta')
    .replace(/\x08egin/g, '\\begin')
    .replace(/\x08(mathbf|bmatrix|bmod|binom)/g, '\\$1')
    .replace(/\x0dight/g, '\\right')
    .replace(/(^|[^\\a-zA-Z])ight([)\]\}])/g, '$1\\right$2')
    .replace(/(^|[^\\a-zA-Z0-9])left([(–\[\{])/g, '$1\\left$2')
    .replace(/([a-zA-Z0-9])left([(–\[\{])/g, '$1\\left$2')
    .replace(/(^|[^\\a-zA-Z])Pleft\(/g, '$1P\\left(');

  // Specific corrupted token repairs in legacy formulas
  cleaned = cleaned.replace(/[-+]\s*eta_([0-9])/g, (m, d) => `${m[0]} \\beta_${d}`);

  // 1. Unicode Indian Rupee symbol -> \text{₹} (without triggering recursive expansion)
  cleaned = cleaned.replace(/₹/g, '\\text{₹}');

  // 2. Escape unescaped percent sign % -> \%
  cleaned = cleaned.replace(/(^|[^\\])%/g, '$1\\%');

  // 3. Mask \text{...} blocks so we don't accidentally insert math commands inside plain text
  const textBlocks: string[] = [];
  cleaned = cleaned.replace(/\\text\{([^{}]*)\}/g, (_, inner) => {
    const placeholder = `___LATEX_TEXT_${textBlocks.length}___`;
    textBlocks.push(inner);
    return placeholder;
  });

  // 4. Fix missing leading backslash for standard keywords ONLY in math mode (outside \text)
  cleaned = cleaned.replace(/(^|[^\\a-zA-Z])(sqrt|leftrightarrow|pm|approx|times|div|dots|rightarrow|leftarrow|implies|iff|left|right|quad|qquad|sum|prod|int|alpha|beta|gamma|delta|pi|sigma|omega|mu|lambda|theta|cdot|circ|mathbf|frac)\b/g, (match, prefix, kw) => {
    return prefix + '\\' + kw;
  });

  // Fix any accidental double backslashes
  cleaned = cleaned.replace(/\\\\(sqrt|leftrightarrow|pm|approx|times|div|dots|rightarrow|leftarrow|implies|iff|left|right|quad|qquad|sum|prod|int|alpha|beta|gamma|delta|pi|sigma|omega|mu|lambda|theta|cdot|circ|mathbf|frac)/g, '\\$1');

  // 5. Restore \text{...} blocks
  cleaned = cleaned.replace(/___LATEX_TEXT_(\d+)___/g, (_, idx) => {
    return `\\text{${textBlocks[Number(idx)]}}`;
  });

  return cleaned;
}

/**
 * Currency Protection Preprocessor:
 * Identifies currency mentions like $100, $150B, $2.15 per day, $10 billion, $500k, $120 Crore, $10,000
 * and protects them with a safe placeholder so they never pair up as math delimiters.
 */
export function protectCurrency(text: string): { text: string; currencyTokens: string[] } {
  const currencyTokens: string[] = [];

  // 1. Explicit currency with units/scales (e.g. $100 billion, $150B, $2.15 per day, $10M, $500k, $50 USD)
  const explicitCurrencyRegex = /\$(?=\d)[0-9,]+(\.[0-9]+)?\s*(billion|million|trillion|lakh|crore|k|M|B|USD|dollars?|per\s+[a-zA-Z]+)(\+)?/gi;

  // 2. Standalone currency (e.g. $100, $50, $10,000) that is NOT followed by a closing $ on the same line
  // (Prevents capturing math tokens like $0.5$, $50%$, $10$, or $1/2$)
  const standaloneCurrencyRegex = /\$(?=\d)([0-9,]+(\.[0-9]+)?)(?!\$)(?![^$\n]*\$)/g;

  let processed = text.replace(explicitCurrencyRegex, (match) => {
    const placeholder = `___CURRENCY_TOKEN_${currencyTokens.length}___`;
    currencyTokens.push(match);
    return placeholder;
  });

  processed = processed.replace(standaloneCurrencyRegex, (match) => {
    const placeholder = `___CURRENCY_TOKEN_${currencyTokens.length}___`;
    currencyTokens.push(match);
    return placeholder;
  });

  return { text: processed, currencyTokens };
}

export function restoreCurrency(text: string, tokens: string[]): string {
  return text.replace(/___CURRENCY_TOKEN_(\d+)___/g, (_, idx) => {
    return tokens[Number(idx)];
  });
}

const KATEX_OPTIONS: katex.KatexOptions = {
  throwOnError: false,
  strict: false,
  trust: true,
};

/**
 * Main Markdown + KaTeX rendering engine.
 * Converts markdown text containing LaTeX math formulas and currency values into semantic, styled HTML.
 */
export function renderMarkdownWithMath(content: string | null | undefined): string {
  if (!content || typeof content !== 'string') return '';

  // Step 0: Unescape literal escaped newlines (e.g. "\\n" strings from double-escaped JSON/DB imports)
  let normalized = content.replace(/\\n/g, '\n');

  // Step 1: Protect escaped dollars \$ -> temporary token
  const ESCAPED_DOLLAR = '___ESCAPED_DOLLAR___';
  let processed = normalized.replace(/\\\$/g, ESCAPED_DOLLAR);

  // Step 2: Protect explicit currency patterns ($100, $10 billion, etc.)
  const { text: currencyProtected, currencyTokens } = protectCurrency(processed);
  processed = currencyProtected;

  // Step 3: Handle Display Math ($$...$$ or \[...\] or \begin{...}...\end{...})
  processed = processed.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => {
    try {
      const restored = restoreCurrency(math.trim(), currencyTokens);
      const sanitized = sanitizeLatex(restored);
      return katex.renderToString(sanitized, { ...KATEX_OPTIONS, displayMode: true });
    } catch {
      return `<div class="katex-display">${math}</div>`;
    }
  });

  processed = processed.replace(/\\\[([\s\S]*?)\\\]/g, (_, math) => {
    try {
      const restored = restoreCurrency(math.trim(), currencyTokens);
      const sanitized = sanitizeLatex(restored);
      return katex.renderToString(sanitized, { ...KATEX_OPTIONS, displayMode: true });
    } catch {
      return `<div class="katex-display">${math}</div>`;
    }
  });

  // Step 4: Handle inline math \(...\)
  processed = processed.replace(/\\\(([\s\S]*?)\\\)/g, (_, math) => {
    try {
      const restored = restoreCurrency(math.trim(), currencyTokens);
      const sanitized = sanitizeLatex(restored);
      return katex.renderToString(sanitized, { ...KATEX_OPTIONS, displayMode: false });
    } catch {
      return math;
    }
  });

  // Step 5: Handle inline math $...$
  processed = processed.replace(/\$([^\s$](?:[^\n$]*?[^\s$])?)\$/g, (fullMatch, math) => {
    const trimmed = math.trim();

    // Guard against single delimiters or mispaired text
    if (trimmed === '{' || trimmed === '}' || trimmed === '>' || trimmed.startsWith('> \\')) {
      return fullMatch;
    }

    try {
      const restored = restoreCurrency(trimmed, currencyTokens);
      const sanitized = sanitizeLatex(restored);
      return katex.renderToString(sanitized, { ...KATEX_OPTIONS, displayMode: false });
    } catch {
      return fullMatch;
    }
  });

  // Step 6: Restore currency tokens and escaped dollars
  processed = restoreCurrency(processed, currencyTokens);
  processed = processed.replace(new RegExp(ESCAPED_DOLLAR, 'g'), '$');

  // Step 6.5: Convert ASCII box-drawing tables into clean GFM tables
  processed = transformAsciiBoxTables(processed);

  // Step 7: Parse markdown with marked
  const parsed = marked.parse(processed, { async: false, gfm: true, breaks: true }) as string;
  return parsed;
}

/**
 * Automatically transforms Unicode ASCII box-drawing tables (e.g. ┌───┬───┐)
 * into semantic GitHub Flavored Markdown (GFM) tables so they render as clean,
 * responsive, publication-grade HTML tables.
 */
export function transformAsciiBoxTables(markdown: string): string {
  return markdown.replace(/```(?:[a-zA-Z]*)?\n([\s\S]*?)\n```/g, (fullMatch, blockContent) => {
    // If it contains flowchart arrows or graph indicators, preserve as code diagram
    if (/[▼▲►◄→←↓↑]|(?:──►)|(?:───►)|(?:\.\.\.>)/.test(blockContent)) {
      return fullMatch;
    }

    // Must have box-drawing characters
    if (!blockContent.includes('┌') || !blockContent.includes('┐')) {
      return fullMatch;
    }

    const lines = blockContent.split('\n').map((l: string) => l.trimEnd());
    if (lines.length < 3) return fullMatch;

    const topBorderIdx = lines.findIndex((l: string) => /[┌][─┬]+[┐]/.test(l));
    if (topBorderIdx === -1) return fullMatch;

    const topBorderLine = lines[topBorderIdx];
    const startBoxIdx = topBorderLine.indexOf('┌');
    const endBoxIdx = topBorderLine.lastIndexOf('┐');
    if (startBoxIdx === -1 || endBoxIdx === -1 || startBoxIdx >= endBoxIdx) return fullMatch;

    // Must have middle divider or bottom border
    const hasDivider = lines.some((l: string) => /[├][─┼]+[┤]/.test(l));
    const hasBottom = lines.some((l: string) => /[└][─┴]+[┘]/.test(l));
    if (!hasDivider && !hasBottom) return fullMatch;

    // Extract column cuts
    const colCuts: number[] = [];
    for (let i = startBoxIdx; i <= endBoxIdx; i++) {
      const char = topBorderLine[i];
      if (char === '┌' || char === '┬' || char === '┐') {
        colCuts.push(i);
      }
    }

    if (colCuts.length < 2) return fullMatch;
    const numCols = colCuts.length - 1;

    // Outer column headers above top border
    let outerColHeaders: string[] = [];
    if (topBorderIdx > 0) {
      const linesAbove = lines.slice(0, topBorderIdx).filter((l: string) => l.trim().length > 0);
      if (linesAbove.length > 0) {
        const topText = linesAbove[linesAbove.length - 1];
        const chunks: string[] = [];
        for (let c = 0; c < numCols; c++) {
          const cStart = colCuts[c];
          const cEnd = colCuts[c + 1];
          if (topText.length > cStart) {
            const chunk = topText.substring(cStart, Math.min(topText.length, cEnd)).trim();
            if (chunk) chunks.push(chunk);
          }
        }
        if (chunks.length === numCols) {
          outerColHeaders = chunks;
        }
      }
    }

    interface RowData {
      cells: string[];
      rowLabel?: string;
    }

    const rows: RowData[] = [];
    let currentCellLines: string[][] = Array.from({ length: numCols }, () => []);
    let currentRowLabel = '';

    const formatCell = (cl: string[]): string => {
      if (cl.length === 0) return '';
      let result = '';
      for (const item of cl) {
        const clean = item.trim();
        if (!clean) continue;
        if (clean.startsWith('•') || clean.startsWith('-')) {
          result += (result ? '<br>' : '') + clean;
        } else {
          result += (result ? ' ' : '') + clean;
        }
      }
      return result;
    };

    for (let i = topBorderIdx + 1; i < lines.length; i++) {
      const line = lines[i];

      if (/[└][─┴]+[┘]/.test(line)) {
        if (currentCellLines.some((c) => c.length > 0)) {
          rows.push({
            cells: currentCellLines.map(formatCell),
            rowLabel: currentRowLabel.trim(),
          });
        }
        break;
      }

      if (/[├][─┼]+[┤]/.test(line)) {
        if (currentCellLines.some((c) => c.length > 0)) {
          rows.push({
            cells: currentCellLines.map(formatCell),
            rowLabel: currentRowLabel.trim(),
          });
          currentCellLines = Array.from({ length: numCols }, () => []);
          currentRowLabel = '';
        }
        continue;
      }

      if (line.includes('│')) {
        const firstBar = line.indexOf('│');
        if (firstBar > 0) {
          const preText = line.substring(0, firstBar).trim();
          if (preText) {
            currentRowLabel += (currentRowLabel ? ' ' : '') + preText;
          }
        }

        for (let c = 0; c < numCols; c++) {
          const cStart = colCuts[c];
          const cEnd = colCuts[c + 1];
          if (line.length > cStart) {
            let chunk = line.substring(cStart + 1, Math.min(line.length, cEnd)).trim();
            chunk = chunk.replace(/│/g, '').trim();
            if (chunk) {
              currentCellLines[c].push(chunk);
            }
          }
        }
      }
    }

    if (rows.length === 0) return fullMatch;

    const hasRowLabels = rows.some((r) => r.rowLabel && r.rowLabel.length > 0);

    // 2x2 matrix with outer headers
    if (outerColHeaders.length === numCols) {
      const headerRowCells = [hasRowLabels ? 'Classification' : 'Category', ...outerColHeaders];
      const mdLines: string[] = [];
      mdLines.push('\n| ' + headerRowCells.join(' | ') + ' |');
      mdLines.push('| ' + headerRowCells.map(() => ':---').join(' | ') + ' |');
      rows.forEach((r) => {
        const rowPrefix = hasRowLabels ? (r.rowLabel ? `**${r.rowLabel}**` : '-') : '';
        const cells = hasRowLabels ? [rowPrefix, ...r.cells] : r.cells;
        mdLines.push('| ' + cells.map((c) => c || '-').join(' | ') + ' |');
      });
      mdLines.push('\n');
      return mdLines.join('\n');
    }

    // Standard table
    let headerRow = rows[0];
    let bodyRows = rows.slice(1);
    if (bodyRows.length === 0 && rows.length > 1) {
      headerRow = rows[0];
      bodyRows = rows.slice(1);
    }

    const mdLines: string[] = [];
    const headerCells = hasRowLabels
      ? ['Dimension', ...headerRow.cells.map((c) => c || '-')]
      : headerRow.cells.map((c) => c || '-');

    mdLines.push('\n| ' + headerCells.join(' | ') + ' |');
    mdLines.push('| ' + headerCells.map(() => ':---').join(' | ') + ' |');

    bodyRows.forEach((r) => {
      const cells = hasRowLabels
        ? [r.rowLabel ? `**${r.rowLabel}**` : '-', ...r.cells.map((c) => c || '-')]
        : r.cells.map((c) => c || '-');
      mdLines.push('| ' + cells.join(' | ') + ' |');
    });
    mdLines.push('\n');

    return mdLines.join('\n');
  });
}
