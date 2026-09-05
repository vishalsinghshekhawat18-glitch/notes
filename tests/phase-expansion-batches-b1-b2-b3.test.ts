import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { seedBatchQuantBatch1CanonicalKnowledge } from '../lib/benchmark/batch-quant-batch-1-canonical-seed';
import { seedBatchQuantBatch2CanonicalKnowledge } from '../lib/benchmark/batch-quant-batch-2-canonical-seed';
import { seedBatchQuantBatch4CanonicalKnowledge } from '../lib/benchmark/batch-quant-batch-4-canonical-seed';
import { seedBatchEnglishCanonicalKnowledge } from '../lib/benchmark/batch-english-canonical-seed';
import { seedBatchEnglishBatch2CanonicalKnowledge } from '../lib/benchmark/batch-english-batch-2-canonical-seed';
import { seedBatchGASchemesCanonicalKnowledge } from '../lib/benchmark/batch-ga-schemes-canonical-seed';
import { seedBatchGASchemesBatch2CanonicalKnowledge } from '../lib/benchmark/batch-ga-schemes-batch-2-canonical-seed';
import { seedBatchStaticGABatch2CanonicalKnowledge } from '../lib/benchmark/batch-static-ga-batch-2-canonical-seed';

describe('Phase Expansion Certification Suite: Batches B1 (Quant 4), B2 (English 2), and B3 (Schemes 2)', () => {
  beforeAll(async () => {
    await seedBatchQuantBatch1CanonicalKnowledge();
    await seedBatchQuantBatch2CanonicalKnowledge();
    await seedBatchQuantBatch4CanonicalKnowledge();
    await seedBatchEnglishCanonicalKnowledge();
    await seedBatchEnglishBatch2CanonicalKnowledge();
    await seedBatchGASchemesCanonicalKnowledge();
    await seedBatchGASchemesBatch2CanonicalKnowledge();
    await seedBatchStaticGABatch2CanonicalKnowledge();
  });

  it('1. should verify Batch 4 Quantitative Aptitude concepts exist and satisfy 4-layer architecture', async () => {
    const quantBatch4Slugs = [
      '2d-geometric-invariants-inradius-circumradius-theorems-and-pathway-algebra',
      'advanced-3d-solid-geometry-conservation-of-volume-cutting-invariants-and-inscribed-solids',
      'truncated-solids-frustum-of-right-circular-cone-pyramids-and-cavity-drilling-topology',
      'dimensional-multipliers-mensuration-percentage-scaling-and-successive-area-volume-shifts',
      'quadratic-equations-masterclass-root-determination-sign-table-heuristics-and-5-second-comparison-rules',
      'algorithmic-number-series-difference-tree-decomposition-decimal-multipliers-and-wrong-number-diagnostics',
      'data-sufficiency-decision-logic-the-5-canonical-outcomes-uniqueness-principle-and-definite-negative-sufficiency',
      'quantity-comparison-decision-logic-q1-vs-q2-algebraic-invariant-comparisons-and-directional-testing',
      'combinatorics-and-probability-topology-circular-permutations-derangements-dependent-probabilities-and-bayes-framework',
      'high-level-banking-caselet-di-multi-variable-asset-quality-and-npa-recovery-matrices',
      'deductive-syllogisms-3-statement-euler-circles-and-reverse-syllogism-traps',
    ];

    for (const slug of quantBatch4Slugs) {
      const concept = await db.concept.findFirst({
        where: { slug },
        include: {
          contentBlocks: true,
          claims: { include: { evidence: true } },
          examMappings: true,
          revisionUnits: true,
          questions: true,
        },
      });

      expect(concept, `Concept ${slug} must exist in DB`).toBeDefined();
      expect(concept?.contentBlocks.length).toBeGreaterThanOrEqual(4);
      expect(concept?.claims.length).toBeGreaterThanOrEqual(3);
      expect(concept?.examMappings.length).toBeGreaterThanOrEqual(8);
      expect(concept?.revisionUnits.length).toBeGreaterThanOrEqual(3);
      expect(concept?.questions.length).toBeGreaterThanOrEqual(2);

      // Verify block types
      const blockTypes = concept?.contentBlocks.map((b) => b.type);
      expect(blockTypes).toContain('INTUITION');
      expect(blockTypes).toContain('CORE_IDEA');
      expect(blockTypes).toContain('MECHANISM');
      expect(blockTypes).toContain('EXAM_APPLICATION');
    }
  });

  it('2. should verify Batch 2 English Language concepts exist and satisfy 4-layer architecture', async () => {
    const englishBatch2Slugs = [
      'subject-verb-agreement-invariants-and-proximity-inversion-traps',
      'parallelism-correlative-conjunctions-and-balanced-syntactic-structures',
      'modifier-placement-dangling-participles-misplaced-and-squinting-modifier-traps',
      'tense-consistency-aspectual-sequencing-and-conditional-clauses',
      'prepositional-idioms-dependent-prepositions-and-high-frequency-collocations',
      'phrasal-verbs-register-shifts-and-contextual-semantic-differentiation',
      'objective-reading-comprehension-tone-identification-primary-purpose-and-critical-inferences',
      'sentence-rearrangement-para-jumbles-mandatory-pairs-and-discourse-cohesion-signposts',
    ];

    for (const slug of englishBatch2Slugs) {
      const concept = await db.concept.findFirst({
        where: { slug },
        include: {
          contentBlocks: true,
          claims: { include: { evidence: true } },
          examMappings: true,
          revisionUnits: true,
          questions: true,
        },
      });

      expect(concept, `Concept ${slug} must exist in DB`).toBeDefined();
      expect(concept?.contentBlocks.length).toBeGreaterThanOrEqual(4);
      expect(concept?.claims.length).toBeGreaterThanOrEqual(3);
      expect(concept?.examMappings.length).toBeGreaterThanOrEqual(8);
      expect(concept?.revisionUnits.length).toBeGreaterThanOrEqual(3);
      expect(concept?.questions.length).toBeGreaterThanOrEqual(2);

      // Check revision speeds
      const revTypes = concept?.revisionUnits.map((r) => r.type);
      expect(revTypes).toContain('FLASH_30S');
      expect(revTypes).toContain('SUMMARY_2M');
      expect(revTypes).toContain('ARCHITECTURE_5M');
    }
  });

  it('3. should verify Batch 2 Government Schemes concepts exist and satisfy 4-layer architecture', async () => {
    const schemesBatch2Slugs = [
      'universal-health-and-nutrition-ayushman-bharat-pmjay-70-expansion-nha-poshan-2',
      'universal-housing-and-urban-transformation-pmay-urban-2-pmay-gramin-clss-amrut-2',
      'women-empowerment-small-savings-sukanya-samriddhi-pm-matru-vandana-mission-shakti',
      'decentralized-renewable-energy-pm-kusum-pm-surya-ghar-muft-bijli-ujjwala-2',
      'national-education-architecture-nep-2020-pm-shri-schools-nipun-bharat-mission',
      'national-vocational-skilling-pmkvy-4-skill-india-naps-apprenticeship',
      'multi-modal-infrastructure-pm-gatishakti-7-engines-bharatnet-logistics-efficiency',
      'agrarian-modernization-pmksy-per-drop-more-crop-aif-infrastructure-fund',
    ];

    for (const slug of schemesBatch2Slugs) {
      const concept = await db.concept.findFirst({
        where: { slug },
        include: {
          contentBlocks: true,
          claims: { include: { evidence: true } },
          examMappings: true,
          revisionUnits: true,
          questions: true,
        },
      });

      expect(concept, `Concept ${slug} must exist in DB`).toBeDefined();
      expect(concept?.contentBlocks.length).toBeGreaterThanOrEqual(4);
      expect(concept?.claims.length).toBeGreaterThanOrEqual(3);
      expect(concept?.examMappings.length).toBeGreaterThanOrEqual(8);
      expect(concept?.revisionUnits.length).toBeGreaterThanOrEqual(3);
      expect(concept?.questions.length).toBeGreaterThanOrEqual(2);

      // Verify evidence provenance
      for (const claim of concept?.claims || []) {
        expect(claim.evidence.length).toBeGreaterThanOrEqual(1);
        expect(claim.evidence[0].locator).toBeTruthy();
        expect(claim.evidence[0].excerpt).toBeTruthy();
      }
    }
  });

  it('4. should verify Batch B4 Static GA concepts exist and satisfy 4-layer architecture', async () => {
    const staticGABatch2Slugs = [
      'apex-financial-regulators-rbi-sebi-irdai-pfrda-ifsca-statutory-mandates',
      'rbi-monetary-operations-liquidity-architecture-and-dsib-framework',
      'sebi-capital-market-infrastructure-t0-mf-lite-fo-restructuring-and-cas',
      'insurance-regulatory-modernization-act-2024-100-fdi-and-bima-trinity',
      'national-pension-architecture-nps-apy-ups-and-nps-vatsalya',
      'negotiable-instruments-act-1881-promissory-notes-bills-cheques-section-138',
      'cross-border-banking-nre-nro-fcnrb-accounts-and-nostro-vostro-loro-matrix',
      'rural-employment-modernization-vb-gram-g-act-2025-and-day-nrlm',
    ];

    for (const slug of staticGABatch2Slugs) {
      const concept = await db.concept.findFirst({
        where: { slug },
        include: {
          contentBlocks: true,
          claims: { include: { evidence: true } },
          examMappings: true,
          revisionUnits: true,
          questions: true,
        },
      });

      expect(concept, `Concept ${slug} must exist in DB`).toBeDefined();
      expect(concept?.contentBlocks.length).toBeGreaterThanOrEqual(4);
      expect(concept?.claims.length).toBeGreaterThanOrEqual(3);
      expect(concept?.examMappings.length).toBeGreaterThanOrEqual(8);
      expect(concept?.revisionUnits.length).toBeGreaterThanOrEqual(3);
      expect(concept?.questions.length).toBeGreaterThanOrEqual(2);

      // Check revision speeds
      const revTypes = concept?.revisionUnits.map((r) => r.type);
      expect(revTypes).toContain('FLASH_30S');
      expect(revTypes).toContain('SUMMARY_2M');
      expect(revTypes).toContain('ARCHITECTURE_5M');

      // Verify evidence provenance
      for (const claim of concept?.claims || []) {
        expect(claim.evidence.length).toBeGreaterThanOrEqual(1);
        expect(claim.evidence[0].locator).toBeTruthy();
        expect(claim.evidence[0].excerpt).toBeTruthy();
      }
    }
  });

  it('5. should confirm total canonical database scale metrics after Category B completion', async () => {
    const totalConcepts = await db.concept.count();
    const totalClaims = await db.claim.count();
    const totalQuestions = await db.question.count();
    const totalExamMappings = await db.examConceptMapping.count();

    expect(totalConcepts).toBeGreaterThanOrEqual(38);
    expect(totalClaims).toBeGreaterThanOrEqual(114);
    expect(totalQuestions).toBeGreaterThanOrEqual(76);
    expect(totalExamMappings).toBeGreaterThanOrEqual(304);
  });
});
