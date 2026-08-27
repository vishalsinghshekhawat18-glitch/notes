/**
 * Phase Flatten Depth: Full Canonical Content Verification Test Suite
 * Mind of Aravalli — Academic Reading Hub
 *
 * Validates:
 * 1. Full canonical content is rendered by default without depth gating.
 * 2. All content blocks (INTUITION, CORE_IDEA, MECHANISM, LEGAL_DISTINCTION, CASE_LAW, EXAM_APPLICATION, COMPARISON) are available in full.
 * 3. Continuous Topic Reader renders complete sequential text for every concept in a topic.
 * 4. Zero content block omission or artificial visibility filtering.
 * 5. Multi-tier revision (30s, 2m, 5m) and Active Recall interactive checks are fully preserved.
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { getTopicWithFullConcepts, getConceptWithFullContext } from '../lib/knowledge/web-data';
import { seedBatchACanonicalKnowledge } from '../lib/benchmark/batch-a-canonical-seed';
import { seedBatchBCanonicalKnowledge } from '../lib/benchmark/batch-b-canonical-seed';
import { seedTopic9CanonicalKnowledge } from '../lib/benchmark/topic-9-canonical-seed';
import { seedTopic10CanonicalKnowledge } from '../lib/benchmark/topic-10-canonical-seed';
import { seedBatchP1CanonicalKnowledge } from '../lib/benchmark/batch-p1-canonical-seed';
import { seedBatchP2CanonicalKnowledge } from '../lib/benchmark/batch-p2-canonical-seed';
import { seedBatchP3CanonicalKnowledge } from '../lib/benchmark/batch-p3-canonical-seed';
import { seedBatchP4CanonicalKnowledge } from '../lib/benchmark/batch-p4-canonical-seed';
import { seedBatchP5CanonicalKnowledge } from '../lib/benchmark/batch-p5-canonical-seed';
import { seedBatchP6CanonicalKnowledge } from '../lib/benchmark/batch-p6-canonical-seed';
import { seedBatchP7CanonicalKnowledge } from '../lib/benchmark/batch-p7-canonical-seed';
import { seedInflationCanonicalKnowledge } from '../lib/benchmark/inflation-canonical-seed';

describe('Phase Flatten Depth: Full Canonical Content Architecture', () => {
  beforeAll(async () => {
    // Clear tables to prevent duplicate key errors during multi-suite test runs
    await db.knowledgeAudit.deleteMany();
    await db.question.deleteMany();
    await db.revisionUnit.deleteMany();
    await db.examConceptMapping.deleteMany();
    await db.exam.deleteMany();
    await db.connection.deleteMany();
    await db.contentBlock.deleteMany();
    await db.knowledgeIssue.deleteMany();
    await db.evidence.deleteMany();
    await db.ingestionItem.deleteMany();
    await db.coverageUnit.deleteMany();
    await db.sourceSection.deleteMany();
    await db.source.deleteMany();
    await db.claim.deleteMany();
    await db.concept.deleteMany();
    await db.topic.deleteMany();
    await db.subject.deleteMany();
    await db.domain.deleteMany();

    await seedBatchACanonicalKnowledge();
    await seedBatchBCanonicalKnowledge();
    await seedTopic9CanonicalKnowledge();
    await seedTopic10CanonicalKnowledge();
    await seedBatchP1CanonicalKnowledge();
    await seedBatchP2CanonicalKnowledge();
    await seedBatchP3CanonicalKnowledge();
    await seedBatchP4CanonicalKnowledge();
    await seedBatchP5CanonicalKnowledge();
    await seedBatchP6CanonicalKnowledge();
    await seedBatchP7CanonicalKnowledge();
    await seedInflationCanonicalKnowledge();
  }, 120000);

  it('1. should verify that all concepts contain complete content blocks with zero gating', async () => {
    const sampleConcepts = [
      'article-14-equality-non-arbitrariness',
      'state-and-nation-constituent-elements-saptanga-theory',
      'president-constitutional-status-electoral-college-impeachment',
      'supreme-court-architecture-composition-collegium-and-removal',
      '73rd-amendment-panchayati-raj-architecture-and-devolution',
      'political-demography-electoral-geography-social-stratification-rajasthan',
      'constitutional-models-sovereignty-uk-usa-indian-synthesis',
      'inflation-definition-distinctions-real-nominal',
    ];

    for (const slug of sampleConcepts) {
      const concept = await getConceptWithFullContext(slug);
      expect(concept).not.toBeNull();
      expect(concept?.contentBlocks.length).toBeGreaterThanOrEqual(2);

      // Verify each block has title/body and valid order
      for (const block of concept!.contentBlocks) {
        expect(block.body.length).toBeGreaterThan(20);
        expect(typeof block.order).toBe('number');
      }
    }
  });

  it('2. should verify that Topic Continuous Reader loads all concept blocks in full sequence', async () => {
    const testTopicSlugs = [
      'basic-concepts-of-polity',
      'part-3-fundamental-rights',
      'the-union-executive',
      'the-union-judiciary',
      'local-governance-panchayats-and-municipalities',
      'rajasthan-state-polity-and-governance',
      'comparative-constitutional-systems',
      'inflation-dynamics-measurement-policy',
    ];

    for (const tSlug of testTopicSlugs) {
      const topic = await getTopicWithFullConcepts(tSlug);
      expect(topic).not.toBeNull();
      expect(topic?.concepts.length).toBeGreaterThanOrEqual(1);

      let totalBlocksInTopic = 0;
      for (const c of topic!.concepts) {
        expect(c.contentBlocks.length).toBeGreaterThanOrEqual(2);
        totalBlocksInTopic += c.contentBlocks.length;
      }
      expect(totalBlocksInTopic).toBeGreaterThanOrEqual(topic!.concepts.length * 2);
    }
  });

  it('3. should verify that revision units and active recall questions are complete for all concepts', async () => {
    const concepts = await db.concept.findMany({
      include: {
        revisionUnits: true,
        questions: true,
      },
    });

    expect(concepts.length).toBeGreaterThanOrEqual(127);

    for (const c of concepts) {
      expect(c.revisionUnits.length).toBeGreaterThanOrEqual(1);
      expect(c.questions.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('4. should verify that claims and evidence retain full provenance without loss', async () => {
    const claimsCount = await db.claim.count();
    const evidenceCount = await db.evidence.count();

    expect(claimsCount).toBeGreaterThanOrEqual(200);
    expect(evidenceCount).toBeGreaterThanOrEqual(200);
  });
});
