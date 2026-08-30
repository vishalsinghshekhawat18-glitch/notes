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

  // Match $ followed by a number, and optional unit/scale words (e.g. $100, $150B, $2.15, $10 billion, $5.50)
  // Negative lookahead to ensure it's not a math expression like $1 + x$ or $10 \times 20$
  const currencyRegex = /\$(?=\d)([0-9]+([.,][0-9]+)?(\s*(billion|million|trillion|lakh|crore|k|M|B|USD|dollars?|per\s+\w+))?(\+)?)(?![a-zA-Z0-9_\\]*[\+\-\*\/\=\^\_\{\}\\])/gi;

  const processed = text.replace(currencyRegex, (match, p1) => {
    const placeholder = `___CURRENCY_TOKEN_${currencyTokens.length}___`;
    currencyTokens.push(`$${p1}`);
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

  // Step 1: Protect escaped dollars \$ -> temporary token
  const ESCAPED_DOLLAR = '___ESCAPED_DOLLAR___';
  let processed = content.replace(/\\\$/g, ESCAPED_DOLLAR);

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

  // Step 7: Parse markdown with marked
  const parsed = marked.parse(processed, { async: false, gfm: true, breaks: true }) as string;
  return parsed;
}
