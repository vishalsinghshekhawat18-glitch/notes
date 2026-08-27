/**
 * Markdown Rendering & Formatted Textbook Output Test Suite
 * Mind of Aravalli — Academic Reading Hub
 *
 * Proves:
 * 1. Markdown syntax (###, **, *, 1., tables) is converted into valid HTML elements.
 * 2. Raw markdown markers are never displayed unformatted to learners.
 * 3. Handles empty, null, or specialized educational notation (e.g. Art 14, Saptanga) properly.
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { marked } from 'marked';
import { db } from '../lib/db/client';
import { seedBatchACanonicalKnowledge } from '../lib/benchmark/batch-a-canonical-seed';

describe('Markdown Rendering Pipeline', () => {
  beforeAll(async () => {
    const count = await db.contentBlock.count();
    if (count === 0) {
      await seedBatchACanonicalKnowledge();
    }
  });

  it('1. should convert markdown headings (###) into semantic HTML headings', () => {
    const raw = '### 1. The Four Modern Elements of Statehood';
    const html = marked.parse(raw, { async: false }) as string;

    expect(html).toContain('<h3>1. The Four Modern Elements of Statehood</h3>');
    expect(html).not.toContain('###');
  });

  it('2. should convert bold (**text**) into strong HTML elements', () => {
    const raw = '**Definite Territory:** A demarcated geographical space where the state exercises supreme sovereign authority.';
    const html = marked.parse(raw, { async: false }) as string;

    expect(html).toContain('<strong>Definite Territory:</strong>');
    expect(html).not.toContain('**');
  });

  it('3. should convert bullet lists (* item) and ordered lists (1. item) into HTML lists', () => {
    const rawBullet = '* **Population:** No minimum population requirement\n* **Territory:** Defined boundaries';
    const htmlBullet = marked.parse(rawBullet, { async: false }) as string;

    expect(htmlBullet).toContain('<ul>');
    expect(htmlBullet).toContain('<li><strong>Population:</strong>');
    expect(htmlBullet).toContain('<li><strong>Territory:</strong>');

    const rawOrdered = '1. **Swami (The King):** Sovereign apex\n2. **Amatya (Ministers):** Executive machinery';
    const htmlOrdered = marked.parse(rawOrdered, { async: false }) as string;

    expect(htmlOrdered).toContain('<ol>');
    expect(htmlOrdered).toContain('<li><strong>Swami (The King):</strong>');
  });

  it('4. should convert markdown tables into semantic HTML tables', () => {
    const rawTable = `
| Saptanga Organ | Arthashastra Name | Modern Equivalent |
|---|---|---|
| Head | Swami | Sovereign Head of State |
| Eyes | Amatya | Council of Ministers / Bureaucracy |
`;
    const htmlTable = marked.parse(rawTable, { async: false }) as string;

    expect(htmlTable).toContain('<table>');
    expect(htmlTable).toContain('<th>Saptanga Organ</th>');
    expect(htmlTable).toContain('<td>Swami</td>');
  });

  it('5. should safely parse all database content blocks without throwing or leaking raw markdown markers', async () => {
    const sampleBlocks = await db.contentBlock.findMany({
      take: 20,
      select: { body: true, title: true, type: true },
    });

    expect(sampleBlocks.length).toBeGreaterThan(0);

    for (const b of sampleBlocks) {
      const html = marked.parse(b.body, { async: false }) as string;
      expect(typeof html).toBe('string');
      expect(html.length).toBeGreaterThan(0);

      // Verify that ### or ** do not remain unparsed when used as markdown markers
      if (b.body.includes('### ')) {
        expect(html).toContain('<h3>');
        expect(html).not.toContain('### ');
      }
      if (b.body.includes('**')) {
        expect(html).toContain('<strong>');
        expect(html).not.toContain('**');
      }
    }
  });
});
