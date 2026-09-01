import { describe, it, expect, beforeAll } from 'vitest';
import { getLibrarySubjectsOverview, getSubjectWithTopics } from '../lib/knowledge/web-data';
import { UNIFIED_SEARCH_INDEX } from '../components/navigation/static-concept-index';
import { seedBatchACanonicalKnowledge } from '../lib/benchmark/batch-a-canonical-seed';
import { seedBatchBCanonicalKnowledge } from '../lib/benchmark/batch-b-canonical-seed';
import { seedTopic10CanonicalKnowledge } from '../lib/benchmark/topic-10-canonical-seed';
import { seedBatchP1CanonicalKnowledge } from '../lib/benchmark/batch-p1-canonical-seed';
import { seedBatchP2CanonicalKnowledge } from '../lib/benchmark/batch-p2-canonical-seed';
import { seedBatchP3CanonicalKnowledge } from '../lib/benchmark/batch-p3-canonical-seed';
import { seedBatchP4CanonicalKnowledge } from '../lib/benchmark/batch-p4-canonical-seed';
import { seedBatchP5CanonicalKnowledge } from '../lib/benchmark/batch-p5-canonical-seed';
import { seedBatchP6CanonicalKnowledge } from '../lib/benchmark/batch-p6-canonical-seed';
import { seedBatchP7CanonicalKnowledge } from '../lib/benchmark/batch-p7-canonical-seed';
import { seedBatchE1CanonicalKnowledge } from '../lib/benchmark/batch-e1-canonical-seed';
import { seedBatchE2CanonicalKnowledge } from '../lib/benchmark/batch-e2-canonical-seed';
import { seedBatchE3CanonicalKnowledge } from '../lib/benchmark/batch-e3-canonical-seed';
import { seedBatchB1IIBFCanonicalKnowledge } from '../lib/benchmark/batch-b1-iibf-canonical-seed';
import { seedBatchB2IIBFCanonicalKnowledge } from '../lib/benchmark/batch-b2-iibf-canonical-seed';
import { seedBatchB3IIBFCanonicalKnowledge } from '../lib/benchmark/batch-b3-iibf-canonical-seed';

describe('Homepage & Subject Navigation Scaling Redesign', () => {
  beforeAll(async () => {
    // Database is primed via seed-all
  });
  it('1. should verify that getLibrarySubjectsOverview returns all active domains and subjects', async () => {
    const domains = await getLibrarySubjectsOverview();

    expect(domains.length).toBeGreaterThanOrEqual(3);

    const subjectSlugs = domains.flatMap((d) => d.subjects.map((s) => s.slug));
    expect(subjectSlugs).toContain('indian-polity');
    expect(subjectSlugs).toContain('indian-economy');
    expect(subjectSlugs).toContain('iibf-banking-regulations');

    for (const domain of domains) {
      for (const subject of domain.subjects) {
        expect(subject.name).toBeTruthy();
        expect(subject.topicsCount).toBeGreaterThan(0);
        expect(subject.conceptsCount).toBeGreaterThan(0);
        expect(subject.firstTopicSlug).toBeTruthy();
      }
    }
  });

  it('2. should verify getSubjectWithTopics returns complete structured topics for IIBF', async () => {
    const iibf = await getSubjectWithTopics('iibf-banking-regulations');
    expect(iibf).toBeDefined();
    expect(iibf?.topics.length).toBeGreaterThanOrEqual(14);

    const totalConcepts = iibf?.topics.reduce((acc, t) => acc + t.concepts.length, 0);
    expect(totalConcepts).toBeGreaterThanOrEqual(51);
  });

  it('3. should verify getSubjectWithTopics returns complete structured topics for Indian Economy', async () => {
    const econ = await getSubjectWithTopics('indian-economy');
    expect(econ).toBeDefined();
    expect(econ?.topics.length).toBeGreaterThanOrEqual(25);

    const totalConcepts = econ?.topics.reduce((acc, t) => acc + t.concepts.length, 0);
    expect(totalConcepts).toBeGreaterThanOrEqual(100);
  });

  it('4. should verify getSubjectWithTopics returns complete structured topics for Indian Polity', async () => {
    const polity = await getSubjectWithTopics('indian-polity');
    expect(polity).toBeDefined();
    expect(polity?.topics.length).toBeGreaterThanOrEqual(25);

    const totalConcepts = polity?.topics.reduce((acc, t) => acc + t.concepts.length, 0);
    expect(totalConcepts).toBeGreaterThanOrEqual(100);
  });

  it('5. should verify UNIFIED_SEARCH_INDEX contains indexed Subjects, Topics, and Concepts', () => {
    expect(UNIFIED_SEARCH_INDEX.length).toBeGreaterThan(200);

    const subjects = UNIFIED_SEARCH_INDEX.filter((i) => i.type === 'SUBJECT');
    const topics = UNIFIED_SEARCH_INDEX.filter((i) => i.type === 'TOPIC');
    const concepts = UNIFIED_SEARCH_INDEX.filter((i) => i.type === 'CONCEPT');

    expect(subjects.length).toBeGreaterThanOrEqual(3);
    expect(topics.length).toBeGreaterThanOrEqual(50);
    expect(concepts.length).toBeGreaterThanOrEqual(233);

    // Verify breadcrumb hierarchy
    for (const c of concepts) {
      expect(c.hierarchy.subject).toBeTruthy();
      expect(c.hierarchy.topic).toBeTruthy();
      expect(c.url).toContain('/topics/');
    }
  });
});
