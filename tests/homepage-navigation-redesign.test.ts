import { describe, it, expect, beforeAll } from 'vitest';
import { getLibrarySubjectsOverview, getSubjectWithTopics } from '../lib/knowledge/web-data';
import { UNIFIED_SEARCH_INDEX } from '../components/navigation/static-concept-index';

describe('Homepage & Subject Navigation Scaling Redesign — Shelves of Knowledge', () => {
  beforeAll(async () => {
    // Database is primed via seed-all
  });

  it('1. should verify that getLibrarySubjectsOverview returns all active domains and subjects', async () => {
    const domains = await getLibrarySubjectsOverview();

    expect(domains.length).toBeGreaterThanOrEqual(6);

    const subjectSlugs = domains.flatMap((d) => d.subjects.map((s) => s.slug));
    expect(subjectSlugs).toContain('indian-polity');
    expect(subjectSlugs).toContain('indian-economy');
    expect(subjectSlugs).toContain('basic-science');
    expect(subjectSlugs).toContain('iibf-banking-regulations');
    expect(subjectSlugs).toContain('ancient-indian-history');
    expect(subjectSlugs).toContain('quantitative-aptitude-and-data-interpretation');

    for (const domain of domains) {
      for (const subject of domain.subjects) {
        expect(subject.name).toBeTruthy();
        expect(subject.topicsCount).toBeGreaterThan(0);
        expect(subject.conceptsCount).toBeGreaterThan(0);
        expect(subject.firstTopicSlug).toBeTruthy();
      }
    }
  });

  it('2. should verify getSubjectWithTopics returns complete structured topics for Basic Science', async () => {
    const science = await getSubjectWithTopics('basic-science');
    expect(science).toBeDefined();
    expect(science?.topics.length).toBe(25);

    const totalConcepts = science?.topics.reduce((acc, t) => acc + t.concepts.length, 0);
    expect(totalConcepts).toBe(115);
  });

  it('3. should verify getSubjectWithTopics returns complete structured topics for Indian Polity', async () => {
    const polity = await getSubjectWithTopics('indian-polity');
    expect(polity).toBeDefined();
    expect(polity?.topics.length).toBeGreaterThanOrEqual(25);

    const totalConcepts = polity?.topics.reduce((acc, t) => acc + t.concepts.length, 0);
    expect(totalConcepts).toBeGreaterThanOrEqual(136);
  });

  it('4. should verify getSubjectWithTopics returns complete structured topics for Indian Economy', async () => {
    const econ = await getSubjectWithTopics('indian-economy');
    expect(econ).toBeDefined();
    expect(econ?.topics.length).toBeGreaterThanOrEqual(25);

    const totalConcepts = econ?.topics.reduce((acc, t) => acc + t.concepts.length, 0);
    expect(totalConcepts).toBeGreaterThanOrEqual(160);
  });

  it('5. should verify getSubjectWithTopics returns complete structured topics for IIBF Banking', async () => {
    const iibf = await getSubjectWithTopics('iibf-banking-regulations');
    expect(iibf).toBeDefined();
    expect(iibf?.topics.length).toBeGreaterThanOrEqual(14);

    const totalConcepts = iibf?.topics.reduce((acc, t) => acc + t.concepts.length, 0);
    expect(totalConcepts).toBeGreaterThanOrEqual(80);
  });

  it('6. should verify UNIFIED_SEARCH_INDEX contains all indexed Subjects, Topics, and Concepts', () => {
    expect(UNIFIED_SEARCH_INDEX.length).toBeGreaterThanOrEqual(800);

    const subjects = UNIFIED_SEARCH_INDEX.filter((i) => i.type === 'SUBJECT');
    const topics = UNIFIED_SEARCH_INDEX.filter((i) => i.type === 'TOPIC');
    const concepts = UNIFIED_SEARCH_INDEX.filter((i) => i.type === 'CONCEPT');

    expect(subjects.length).toBeGreaterThanOrEqual(9);
    expect(topics.length).toBeGreaterThanOrEqual(190);
    expect(concepts.length).toBeGreaterThanOrEqual(600);

    // Verify breadcrumb hierarchy
    for (const c of concepts) {
      expect(c.hierarchy.subject).toBeTruthy();
      expect(c.hierarchy.topic).toBeTruthy();
      expect(c.url).toContain('/topics/');
    }
  });
});
