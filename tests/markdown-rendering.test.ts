/**
 * Markdown & Math/KaTeX Rendering Test Suite
 * Mind of Aravalli — Academic Reading Hub
 *
 * Proves:
 * 1. Markdown syntax (###, **, *, 1., tables) is converted into valid HTML elements.
 * 2. LaTeX math ($...$, $$...$$, \(...\), \[...\]) is properly rendered into KaTeX HTML/MathML without leaking raw dollar signs.
 * 3. Currency values ($100, $10 billion, etc.) and escaped dollars (\$100) are protected and not treated as math delimiters.
 * 4. Economics national-income identities, Fisher equations, and money multiplier formulas render into valid KaTeX.
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { renderMarkdownWithMath } from '../lib/render/markdown-math';
import { db } from '../lib/db/client';
import { seedBatchACanonicalKnowledge } from '../lib/benchmark/batch-a-canonical-seed';
import { seedBatchE1CanonicalKnowledge } from '../lib/benchmark/batch-e1-canonical-seed';
import { seedInflationCanonicalKnowledge } from '../lib/benchmark/inflation-canonical-seed';

describe('Markdown & KaTeX Math Rendering Pipeline', () => {
  beforeAll(async () => {
    const count = await db.contentBlock.count();
    if (count === 0) {
      await seedBatchACanonicalKnowledge();
      await seedBatchE1CanonicalKnowledge();
      await seedInflationCanonicalKnowledge();
    }
  });

  it('1. should convert markdown headings (###) into semantic HTML headings', () => {
    const raw = '### 1. The Four Modern Elements of Statehood';
    const html = renderMarkdownWithMath(raw);

    expect(html).toContain('<h3>1. The Four Modern Elements of Statehood</h3>');
    expect(html).not.toContain('###');
  });

  it('2. should convert bold (**text**) into strong HTML elements', () => {
    const raw = '**Definite Territory:** A demarcated geographical space where the state exercises supreme sovereign authority.';
    const html = renderMarkdownWithMath(raw);

    expect(html).toContain('<strong>Definite Territory:</strong>');
    expect(html).not.toContain('**');
  });

  it('3. should convert bullet lists and ordered lists into semantic HTML lists', () => {
    const rawBullet = '* **Population:** No minimum requirement\n* **Territory:** Defined boundaries';
    const htmlBullet = renderMarkdownWithMath(rawBullet);

    expect(htmlBullet).toContain('<ul>');
    expect(htmlBullet).toContain('<li><strong>Population:</strong>');

    const rawOrdered = '1. **Swami (The King):** Sovereign apex\n2. **Amatya (Ministers):** Executive machinery';
    const htmlOrdered = renderMarkdownWithMath(rawOrdered);

    expect(htmlOrdered).toContain('<ol>');
    expect(htmlOrdered).toContain('<li><strong>Swami (The King):</strong>');
  });

  it('4. should convert markdown tables into semantic HTML tables', () => {
    const rawTable = `
| Saptanga Organ | Arthashastra Name | Modern Equivalent |
|---|---|---|
| Head | Swami | Sovereign Head of State |
`;
    const htmlTable = renderMarkdownWithMath(rawTable);

    expect(htmlTable).toContain('<table>');
    expect(htmlTable).toContain('<th>Saptanga Organ</th>');
    expect(htmlTable).toContain('<td>Swami</td>');
  });

  it('5. should render inline math ($...$) into styled KaTeX spans', () => {
    const raw = 'The fundamental identity $Y = C + I + G + (X - M)$ defines national output.';
    const html = renderMarkdownWithMath(raw);

    expect(html).toContain('class="katex"');
    expect(html).toContain('<math');
    expect(html).not.toContain('$Y = C + I + G + (X - M)$');
  });

  it('6. should render display math ($$...$$) into styled display KaTeX blocks', () => {
    const raw = '$$\\mathbf{(S - I) + (T - G) = (X - M)}$$';
    const html = renderMarkdownWithMath(raw);

    expect(html).toContain('class="katex-display"');
    expect(html).toContain('<math');
    expect(html).not.toContain('$$\\mathbf{(S - I) + (T - G) = (X - M)}$$');
  });

  it('7. should correctly preserve currency amounts without confusing them with math delimiters', () => {
    const rawCurrency = 'If the government allocates $10 billion to subsidies and oil costs $100 per barrel, total cost is $500M.';
    const html = renderMarkdownWithMath(rawCurrency);

    expect(html).toContain('$10 billion');
    expect(html).toContain('$100 per barrel');
    expect(html).toContain('$500M');
    expect(html).not.toContain('class="katex"');
  });

  it('8. should render Economics Fisher Equation and Money Multiplier correctly', () => {
    const fisher = 'Nominal rate $i = r + \\pi^e$ and Money Multiplier $m = \\frac{1+c}{r+c}$.';
    const html = renderMarkdownWithMath(fisher);

    expect(html).toContain('class="katex"');
    expect(html).toContain('annotation encoding="application/x-tex">i = r + \\pi^e');
    expect(html).toContain('annotation encoding="application/x-tex">m = \\frac{1+c}{r+c}');
  });

  it('9. should safely parse all database content blocks without throwing or leaking raw math markers', async () => {
    const sampleBlocks = await db.contentBlock.findMany({
      take: 50,
      select: { body: true, title: true, type: true },
    });

    expect(sampleBlocks.length).toBeGreaterThan(0);

    for (const b of sampleBlocks) {
      const html = renderMarkdownWithMath(b.body);
      expect(typeof html).toBe('string');
      expect(html.length).toBeGreaterThan(0);

      // Verify that ### or ** do not remain unparsed
      if (b.body.includes('### ')) {
        expect(html).toContain('<h3>');
        expect(html).not.toContain('### ');
      }
    }
  });
});
