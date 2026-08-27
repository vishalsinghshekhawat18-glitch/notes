import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { getTopicWithConcepts, getTopicWithFullConcepts, getConceptWithFullContext } from '../lib/knowledge/web-data';
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

describe('Phase UX-READ-01: Continuous Topic Reading Mode', () => {
  beforeAll(async () => {
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
  }, 180000);

  it('1. Every topic should have a continuous reading data loader with all canonical concepts', async () => {
    const topics = await db.topic.findMany({
      select: { slug: true, title: true },
    });

    expect(topics.length).toBeGreaterThanOrEqual(21);

    for (const t of topics) {
      const fullTopic = await getTopicWithFullConcepts(t.slug);
      expect(fullTopic).not.toBeNull();
      expect(fullTopic?.concepts.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('2. Topic Reader should load all concepts belonging to that topic without omission', async () => {
    // Representative topics across subjects
    const testTopicSlugs = [
      'basic-concepts-of-polity',
      'part-3-fundamental-rights',
      'part-4-directive-principles-of-state-policy',
      'the-union-executive',
      'the-union-judiciary',
      'centre-state-relations-and-federalism',
      'emergency-provisions-and-safeguards',
      'inflation-dynamics-measurement-policy',
    ];

    for (const slug of testTopicSlugs) {
      const topic = await getTopicWithFullConcepts(slug);
      expect(topic).not.toBeNull();

      const dbConceptsCount = await db.concept.count({
        where: { topicId: topic!.id },
      });

      expect(topic!.concepts.length).toBe(dbConceptsCount);
      expect(topic!.concepts.length).toBeGreaterThan(0);
    }
  });

  it('3. Concepts in Topic Reader should appear in strict canonical sequence order', async () => {
    const topic = await getTopicWithFullConcepts('basic-concepts-of-polity');
    expect(topic).not.toBeNull();

    const expectedSlugs = [
      'state-and-nation-constituent-elements-saptanga-theory',
      'theories-of-origin-of-state-divine-social-contract-marxist',
      'systems-of-governance-parliamentary-presidential-constitutional-supremacy',
      'constitution-and-constitutionalism-nature-functions-pillars',
    ];

    const actualSlugs = topic!.concepts.map((c) => c.slug);
    expect(actualSlugs).toEqual(expectedSlugs);
  });

  it('4. Full pedagogical depth (content blocks, claims, evidence, exam mappings, revision, MCQs) is preserved in reader', async () => {
    const topic = await getTopicWithFullConcepts('part-3-fundamental-rights');
    expect(topic).not.toBeNull();

    for (const concept of topic!.concepts) {
      expect(concept.contentBlocks.length).toBeGreaterThanOrEqual(2);
      expect(concept.claims.length).toBeGreaterThanOrEqual(1);
      expect(concept.examMappings.length).toBeGreaterThanOrEqual(1);
      expect(concept.revisionUnits.length).toBe(3); // 30s, 2m, 5m
      expect(concept.questions.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('5. Standalone concept routes and full context queries remain 100% functional', async () => {
    const concept = await getConceptWithFullContext('state-and-nation-constituent-elements-saptanga-theory');
    expect(concept).not.toBeNull();
    expect(concept?.topic.slug).toBe('basic-concepts-of-polity');
    expect(concept?.contentBlocks.length).toBeGreaterThanOrEqual(3);
    expect(concept?.claims.length).toBeGreaterThanOrEqual(2);
    expect(concept?.revisionUnits.length).toBe(3);
  });

  it('6. Canonical data is single source of truth (no second knowledge database created)', async () => {
    const topic = await getTopicWithConcepts('emergency-provisions-and-safeguards');
    const fullTopic = await getTopicWithFullConcepts('emergency-provisions-and-safeguards');

    expect(topic?.concepts.map((c) => c.id)).toEqual(fullTopic?.concepts.map((c) => c.id));
  });
});
