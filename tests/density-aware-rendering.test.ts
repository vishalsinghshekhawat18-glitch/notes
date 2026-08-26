/**
 * Density-Aware Concept Rendering Policy Test Suite
 * Mind of Aravalli — Academic Reading Hub
 *
 * Verifies:
 * 1. Very small concept (compact, suppresses redundant panels).
 * 2. Medium concept (natural textbook flow).
 * 3. Large concept (full canonical content + all substantive supporting sections).
 * 4. Concept with strong exam material (renders focused exam pitfalls).
 * 5. Concept with weak/trivial exam material (suppresses empty exam lens box).
 */

import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ExamLensViewer } from '../components/learning/exam-lens-viewer';
import { RevisionViewer } from '../components/learning/revision-viewer';
import { ActiveRecallViewer } from '../components/learning/active-recall-viewer';

describe('Concept Page Density-Aware Rendering Policy', () => {
  it('1. Very small concept: suppresses empty/trivial revision and recall boxes', () => {
    // Trivial/empty revision
    const trivialRevisionHtml = renderToStaticMarkup(
      React.createElement(RevisionViewer, {
        revisionUnits: [
          { id: '1', type: 'FLASH_30S', content: 'Short', priority: 'HIGH' },
        ],
      })
    );
    expect(trivialRevisionHtml).toBe(''); // Returns null when content is trivial (< 25 chars)

    // Trivial recall with empty stem/explanation
    const trivialRecallHtml = renderToStaticMarkup(
      React.createElement(ActiveRecallViewer, {
        questions: [
          { id: 'q1', difficulty: 'EASY', stem: 'What is X?', correctAnswer: 'X', explanation: 'It is X.' },
        ],
      })
    );
    expect(trivialRecallHtml).toBe(''); // Suppressed
  });

  it('2. Concept with strong exam material: renders actionable focus & traps', () => {
    const strongExamHtml = renderToStaticMarkup(
      React.createElement(ExamLensViewer, {
        examLenses: [
          {
            examSlug: 'rpsc-ras',
            examName: 'RPSC RAS',
            syllabusUnit: 'State Legislature',
            relevance: 'HIGH',
            priority: 'CRITICAL',
            requiredDepth: 'EXPERT',
            frequentTraps: 'Confusing 1/6th total members threshold for Vidhan Parishad nomination with Governor discretionary assent rules under Art 200.',
            questionStyle: 'Analytical questions on legislative council abolition and constitutional deadlock resolution.',
          },
        ],
      })
    );

    expect(strongExamHtml).toContain('Target Exam Focus &amp; Pitfalls');
    expect(strongExamHtml).toContain('Confusing 1/6th total members threshold');
  });

  it('3. Concept with weak/trivial exam material: suppresses exam lens section', () => {
    const weakExamHtml = renderToStaticMarkup(
      React.createElement(ExamLensViewer, {
        examLenses: [
          {
            examSlug: 'upsc-cse',
            examName: 'UPSC Civil Services',
            syllabusUnit: 'Polity',
            relevance: 'LOW',
            priority: 'LOW',
            requiredDepth: 'BASIC',
            frequentTraps: null,
            questionStyle: null,
            notes: null,
          },
        ],
      })
    );

    expect(weakExamHtml).toBe(''); // Returns null because no substantive trap or question pattern exists
  });

  it('4. Medium and large concepts: render substantive revision layers cleanly', () => {
    const substantiveRevisionHtml = renderToStaticMarkup(
      React.createElement(RevisionViewer, {
        revisionUnits: [
          {
            id: 'r1',
            type: 'SUMMARY_2M',
            content: 'Article 14 guarantees equality before the law and equal protection of laws. The Supreme Court in EP Royappa introduced the non-arbitrariness doctrine.',
            priority: 'HIGH',
          },
        ],
      })
    );

    expect(substantiveRevisionHtml).toContain('Key Revision &amp; Architecture');
    expect(substantiveRevisionHtml).toContain('Article 14 guarantees equality before the law');
  });

  it('5. Substantive Active Recall: renders mental prompt and doctrinal explanation trigger', () => {
    const substantiveRecallHtml = renderToStaticMarkup(
      React.createElement(ActiveRecallViewer, {
        questions: [
          {
            id: 'q1',
            difficulty: 'HARD',
            stem: 'Under Article 200, which specific category of Bills passed by a State Legislature MUST be reserved by the Governor for the consideration of the President?',
            options: JSON.stringify(['Any money bill', 'Bills derogating High Court powers under Art 200 2nd Proviso', 'Any ordinary bill']),
            correctAnswer: 'Bills derogating High Court powers under Art 200 2nd Proviso',
            explanation: 'Under the second proviso to Article 200, the Governor is mandatorily required to reserve any Bill which, in their opinion, would derogate from the powers of the High Court.',
            trapExplanation: 'Examiners often test whether Article 200 reservation is always discretionary or if there is a mandatory constitutional duty.',
          },
        ],
      })
    );

    expect(substantiveRecallHtml).toContain('Active Recall Check');
    expect(substantiveRecallHtml).toContain('Under Article 200');
    expect(substantiveRecallHtml).toContain('Reveal Answer &amp; Doctrine');
  });
});
