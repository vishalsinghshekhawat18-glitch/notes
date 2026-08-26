import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { seedBatchBCanonicalKnowledge, BATCH_B_CONCEPTS } from '../lib/benchmark/batch-b-canonical-seed';
import { seedBatchACanonicalKnowledge } from '../lib/benchmark/batch-a-canonical-seed';
import { seedTopic9CanonicalKnowledge } from '../lib/benchmark/topic-9-canonical-seed';
import { seedTopic10CanonicalKnowledge } from '../lib/benchmark/topic-10-canonical-seed';
import { seedInflationCanonicalKnowledge } from '../lib/benchmark/inflation-canonical-seed';
import {
  getTopicWithConcepts,
  getConceptWithFullContext,
  searchConcepts,
} from '../lib/knowledge/web-data';
import { BATCH_B_SEMANTIC_UNITS } from '../lib/ingestion/batch-b-semantic-inventory';

describe('Phase 12: Indian Polity Batch B Canonical Knowledge Expansion', () => {
  beforeAll(async () => {
    // Clear and seed complete knowledge base
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
    await seedInflationCanonicalKnowledge();
  }, 60000);

  it('1. should verify complete zero-omission coverage ledger for Batch B (25 semantic units)', async () => {
    const coverageUnits = await db.coverageUnit.findMany({
      where: {
        id: {
          startsWith: 'CU-SEM-T5-',
        },
      },
    });
    expect(coverageUnits.length).toBe(7);

    const topic6Units = await db.coverageUnit.findMany({
      where: {
        id: {
          startsWith: 'CU-SEM-T6-',
        },
      },
    });
    expect(topic6Units.length).toBe(4);

    const topic7Units = await db.coverageUnit.findMany({
      where: {
        id: {
          startsWith: 'CU-SEM-T7-',
        },
      },
    });
    expect(topic7Units.length).toBe(5);

    const topic8Units = await db.coverageUnit.findMany({
      where: {
        id: {
          startsWith: 'CU-SEM-T8-',
        },
      },
    });
    expect(topic8Units.length).toBe(9);

    expect(BATCH_B_SEMANTIC_UNITS.length).toBe(25);
  });

  it('2. should verify all 18 Batch B concepts and structural components', async () => {
    expect(BATCH_B_CONCEPTS.length).toBe(18);

    for (const cDef of BATCH_B_CONCEPTS) {
      const concept = await getConceptWithFullContext(cDef.slug);
      expect(concept).toBeDefined();
      expect(concept?.title).toBe(cDef.title);
      expect(concept?.claims.length).toBeGreaterThanOrEqual(2);
      expect(concept?.contentBlocks.length).toBeGreaterThanOrEqual(2);
      expect(concept?.examMappings.length).toBeGreaterThanOrEqual(2);
      expect(concept?.revisionUnits.length).toBe(3);
      expect(concept?.questions.length).toBeGreaterThanOrEqual(1);

      // Verify claim evidence locators
      for (const claim of concept!.claims) {
        expect(claim.evidence.length).toBeGreaterThanOrEqual(1);
        expect(claim.evidence[0].locator).toContain('PDF Page');
      }
    }
  });

  it('3. should verify Topic 5 (Part I: Union and its Territory) concepts and doctrines', async () => {
    const topic5 = await getTopicWithConcepts('part-1-union-and-its-territory');
    expect(topic5).toBeDefined();
    expect(topic5?.concepts.length).toBe(4);

    // Verify Article 1 & Ambedkar rationale
    const art1Concept = await getConceptWithFullContext('article-1-union-of-states-federal-nature-territory-of-india');
    expect(art1Concept).toBeDefined();
    const art1Text = art1Concept?.contentBlocks.map((b: { body: string }) => b.body).join(' ');
    expect(art1Text).toContain('India, that is Bharat');
    expect(art1Text).toContain('Union of States');
    expect(art1Text).toContain('Territory of India');

    // Verify Article 3 internal reorganisation & USA contrast
    const art3Concept = await getConceptWithFullContext('articles-2-and-3-admission-vs-internal-reorganisation-of-states');
    expect(art3Concept).toBeDefined();
    const art3Text = art3Concept?.contentBlocks.map((b: { body: string }) => b.body).join(' ');
    expect(art3Text).toContain('Indestructible Union of Destructible States');
    expect(art3Text).toContain('Simple Majority');

    // Verify Berubari Doctrine
    const berubariConcept = await getConceptWithFullContext('article-4-and-cession-of-territory-the-berubari-doctrine');
    expect(berubariConcept).toBeDefined();
    const berubariText = berubariConcept?.contentBlocks.map((b: { body: string }) => b.body).join(' ');
    expect(berubariText).toContain('Berubari Union');
    expect(berubariText).toContain('Article 368');
    expect(berubariText).toContain('9th Constitutional Amendment');
    expect(berubariText).toContain('Maganbhai Ishwarbhai Patel');

    // Verify 100th Amendment Enclaves
    const utConcept = await getConceptWithFullContext('union-territories-architecture-and-100th-amendment-enclaves-exchange');
    expect(utConcept).toBeDefined();
    const utText = utConcept?.contentBlocks.map((b: { body: string }) => b.body).join(' ');
    expect(utText).toContain('100th Constitutional Amendment Act, 2015');
    expect(utText).toContain('111 enclaves');
    expect(utText).toContain('51 enclaves');
  });

  it('4. should verify Topic 6 (Unification of India) integration mechanisms and states', async () => {
    const topic6 = await getTopicWithConcepts('unification-of-india');
    expect(topic6).toBeDefined();
    expect(topic6?.concepts.length).toBe(4);

    // Verify Patel-Menon Architecture
    const patelConcept = await getConceptWithFullContext('lapse-of-paramountcy-and-patel-menon-integration-architecture');
    expect(patelConcept).toBeDefined();
    const patelText = patelConcept?.contentBlocks.map((b: { body: string }) => b.body).join(' ');
    expect(patelText).toContain('Paramountcy lapsed');
    expect(patelText).toContain('Defence');
    expect(patelText).toContain('External Affairs');
    expect(patelText).toContain('Communications');

    // Verify Difficult States: Junagadh, Hyderabad, J&K
    const diffConcept = await getConceptWithFullContext('integration-of-challenging-states-junagadh-hyderabad-and-jammu-kashmir');
    expect(diffConcept).toBeDefined();
    const diffText = diffConcept?.contentBlocks.map((b: { body: string }) => b.body).join(' ');
    expect(diffText).toContain('Operation Polo');
    expect(diffText).toContain('Major General J.N. Chaudhuri');
    expect(diffText).toContain('Razakars');
    expect(diffText).toContain('plebiscite was held in February 1948');
    expect(diffText).toContain('October 26, 1947');

    // Verify Foreign Enclaves: French and Portuguese
    const enclaveConcept = await getConceptWithFullContext('liberation-of-foreign-enclaves-french-and-portuguese-territories');
    expect(enclaveConcept).toBeDefined();
    const enclaveText = enclaveConcept?.contentBlocks.map((b: { body: string }) => b.body).join(' ');
    expect(enclaveText).toContain('Operation Vijay');
    expect(enclaveText).toContain('14th Constitutional Amendment');
    expect(enclaveText).toContain('56th Constitutional Amendment');

    // Verify Sikkim Integration and 1950 classification
    const sikkimConcept = await getConceptWithFullContext('integration-of-sikkim-from-associate-state-to-full-statehood');
    expect(sikkimConcept).toBeDefined();
    const sikkimText = sikkimConcept?.contentBlocks.map((b: { body: string }) => b.body).join(' ');
    expect(sikkimText).toContain('35th Constitutional Amendment');
    expect(sikkimText).toContain('Associate State');
    expect(sikkimText).toContain('36th Constitutional Amendment');
    expect(sikkimText).toContain('Article 371F');
    expect(sikkimText).toContain('Part B States');
  });

  it('5. should verify Topic 7 (Reorganisation of States) evolution and Zonal Councils', async () => {
    const topic7 = await getTopicWithConcepts('reorganisation-of-states');
    expect(topic7).toBeDefined();
    expect(topic7?.concepts.length).toBe(4);

    // Verify Dhar and JVP Committees
    const dharConcept = await getConceptWithFullContext('linguistic-demands-and-early-commissions-dhar-and-jvp');
    expect(dharConcept).toBeDefined();
    const dharText = dharConcept?.contentBlocks.map((b: { body: string }) => b.body).join(' ');
    expect(dharText).toContain('S.K. Dhar Commission');
    expect(dharText).toContain('JVP Committee');
    expect(dharText).toContain('Sitaramayya');

    // Verify Fazal Ali SRC (1953–55) and Andhra creation
    const srcConcept = await getConceptWithFullContext('andhra-crisis-and-fazal-ali-commission-src-1953-1955');
    expect(srcConcept).toBeDefined();
    const srcText = srcConcept?.contentBlocks.map((b: { body: string }) => b.body).join(' ');
    expect(srcText).toContain('Potti Sreeramulu');
    expect(srcText).toContain('October 1, 1953');
    expect(srcText).toContain('Justice Fazal Ali');
    expect(srcText).toContain('K.M. Panikkar');
    expect(srcText).toContain('Hriday Nath Kunzru');

    // Verify State Evolution Chronology
    const evoConcept = await getConceptWithFullContext('states-reorganisation-act-1956-and-historical-evolution-of-indian-states');
    expect(evoConcept).toBeDefined();
    const evoText = evoConcept?.contentBlocks.map((b: { body: string }) => b.body).join(' ');
    expect(evoText).toContain('14 States');
    expect(evoText).toContain('6 Union Territories');
    expect(evoText).toContain('Gujarat');
    expect(evoText).toContain('Nagaland');
    expect(evoText).toContain('Haryana');
    expect(evoText).toContain('Chhattisgarh');
    expect(evoText).toContain('Telangana');
    expect(evoText).toContain('28 States and 8 Union Territories');

    // Verify Zonal Councils vs Inter-State Council
    const zonalConcept = await getConceptWithFullContext('zonal-councils-and-north-eastern-council-inter-state-cooperative-architecture');
    expect(zonalConcept).toBeDefined();
    const zonalText = zonalConcept?.contentBlocks.map((b: { body: string }) => b.body).join(' ');
    expect(zonalText).toContain('States Reorganisation Act, 1956');
    expect(zonalText).toContain('Union Home Minister');
    expect(zonalText).toContain('North-Eastern Council Act, 1971');
  });

  it('6. should verify Topic 8 (Citizenship) articles, acquisition, loss, OCI, and policy analysis', async () => {
    const topic8 = await getTopicWithConcepts('part-2-citizenship');
    expect(topic8).toBeDefined();
    expect(topic8?.concepts.length).toBe(6);

    // Verify Exclusive Rights and Articles 5-11
    const citRightsConcept = await getConceptWithFullContext('citizenship-meaning-civil-rights-and-constitutional-articles-5-to-11');
    expect(citRightsConcept).toBeDefined();
    const citRightsText = citRightsConcept?.contentBlocks.map((b: { body: string }) => b.body).join(' ');
    expect(citRightsText).toContain('Article 15');
    expect(citRightsText).toContain('Article 16');
    expect(citRightsText).toContain('Article 19');
    expect(citRightsText).toContain('Articles 29 & 30');
    expect(citRightsText).toContain('Article 326');
    expect(citRightsText).toContain('Article 11');

    // Verify Acquisition Modes
    const acqConcept = await getConceptWithFullContext('acquisition-of-indian-citizenship-under-citizenship-act-1955');
    expect(acqConcept).toBeDefined();
    const acqText = acqConcept?.contentBlocks.map((b: { body: string }) => b.body).join(' ');
    expect(acqText).toContain('Jus Soli');
    expect(acqText).toContain('Jus Sanguinis');
    expect(acqText).toContain('Registration');
    expect(acqText).toContain('Naturalisation');
    expect(acqText).toContain('Incorporation of Territory');

    // Verify Loss of Citizenship (Renunciation, Termination, Deprivation)
    const lossConcept = await getConceptWithFullContext('loss-of-indian-citizenship-renunciation-termination-and-deprivation');
    expect(lossConcept).toBeDefined();
    const lossText = lossConcept?.contentBlocks.map((b: { body: string }) => b.body).join(' ');
    expect(lossText).toContain('Renunciation');
    expect(lossText).toContain('Termination');
    expect(lossText).toContain('Deprivation');
    expect(lossText).toContain('minor child');

    // Verify Single Citizenship vs USA
    const singleCitConcept = await getConceptWithFullContext('single-citizenship-vs-dual-citizenship-and-constitutional-unity');
    expect(singleCitConcept).toBeDefined();
    const singleCitText = singleCitConcept?.contentBlocks.map((b: { body: string }) => b.body).join(' ');
    expect(singleCitText).toContain('Single Citizenship');
    expect(singleCitText).toContain('Article 16(3)');

    // Verify OCI Scheme & Section 7B(2) Exclusions
    const ociConcept = await getConceptWithFullContext('overseas-citizen-of-india-oci-scheme-and-rights-framework');
    expect(ociConcept).toBeDefined();
    const ociText = ociConcept?.contentBlocks.map((b: { body: string }) => b.body).join(' ');
    expect(ociText).toContain('L.M. Singhvi Committee');
    expect(ociText).toContain('Section 7B');
    expect(ociText).toContain('Section 7B(2)');
    expect(ociText).toContain('No Voting Rights');
    expect(ociText).toContain('No Contesting Elections');

    // Verify Contemporary Renunciation Trends and Dual Citizenship Debate
    const renuncConcept = await getConceptWithFullContext('citizenship-policy-renunciation-trends-and-dual-citizenship-debate');
    expect(renuncConcept).toBeDefined();
    const renuncText = renuncConcept?.contentBlocks.map((b: { body: string }) => b.body).join(' ');
    expect(renuncText).toContain('1.6 million');
    expect(renuncText).toContain('225,620');
    expect(renuncText).toContain('Dual Citizenship');
  });

  it('7. should verify search indexing and system-wide concept count (66 total concepts)', async () => {
    const berubariResults = await searchConcepts('Berubari');
    expect(berubariResults.length).toBeGreaterThanOrEqual(1);

    const poloResults = await searchConcepts('Polo');
    expect(poloResults.length).toBeGreaterThanOrEqual(1);

    const fazalResults = await searchConcepts('Fazal Ali');
    expect(fazalResults.length).toBeGreaterThanOrEqual(1);

    const ociResults = await searchConcepts('Overseas Citizen');
    expect(ociResults.length).toBeGreaterThanOrEqual(1);

    const totalConcepts = await db.concept.count();
    expect(totalConcepts).toBe(66); // 22 (Batch A) + 18 (Batch B) + 16 (T9) + 5 (T10) + 5 (Inflation)
  });
});
