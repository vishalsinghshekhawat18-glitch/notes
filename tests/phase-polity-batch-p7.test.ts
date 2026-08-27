/**
 * Phase Polity Batch P7 Regression & Content Test Suite
 * Mind of Aravalli — Academic Reading Hub
 *
 * Validates:
 * 1. Semantic Inventory Coverage (6 legacy units, 6 canonical concepts across Topics 4, 11, 19, 20, 22, 23).
 * 2. District Administration & Citizen Charters (CON-T23-06: Warren Hastings 1772, Revenue Board Ajmer 1949, RJ 2011 Act, Sevottam IS 15700).
 * 3. Coalition Governments & Pressure Groups (CON-T11-07: Sarkaria/Punchhi hung assembly priority, CMP, Almond-Finer typology).
 * 4. Voting Behavior & EVM-VVPAT Reforms (CON-T22-05: Standalone EVM, VVPAT 7s, ADR 2024 SC verdict, cVIGIL).
 * 5. National Integration & Internal Security (CON-T20-05: Inter-State Council Art 263, Zonal Councils 1956 Act, Art 355, NIA/UAPA).
 * 6. Official Language & Constitutional Morality (CON-T04-09: Part XVII Arts 343-351, 8th Schedule, Arts 350A/350B, Constitutional Morality).
 * 7. Inter-State River Disputes & Sub-Classification (CON-T19-06: Art 262 ISRWD Act 1956, Art 131, Davinder Singh 2024 7-judge SC ruling).
 * 8. Registration of all Batch P7 concepts in static-concept-index.
 * 9. Crosswalk ledger integrity (58/58 fully migrated, 100% effective coverage).
 */

import { describe, it, expect } from 'vitest';
import { BATCH_P7_CONCEPTS } from '../lib/benchmark/batch-p7-canonical-seed';
import { BATCH_P7_SEMANTIC_UNITS } from '../lib/ingestion/batch-p7-semantic-inventory';
import { STATIC_CONCEPT_INDEX } from '../components/navigation/static-concept-index';
import crosswalk from '../polity-final-58-unit-crosswalk.json';

describe('Phase Polity Batch P7: Deepening Substantially Migrated Units', () => {
  it('1. should contain 6 deep canonical concepts in Batch P7 seed', () => {
    expect(BATCH_P7_CONCEPTS).toHaveLength(6);
  });

  it('2. should map all 6 semantic units with valid target concepts and temporal status', () => {
    expect(BATCH_P7_SEMANTIC_UNITS.length).toBe(6);
    for (const unit of BATCH_P7_SEMANTIC_UNITS) {
      expect(unit.targetConceptId).toMatch(/^CON-T(04|11|19|20|22|23)-\d{2}$/);
      expect(unit.verifiedYear).toBe(2026);
      expect(['CURRENT_DATA', 'CENSUS_HISTORICAL', 'CONSTITUTIONAL_TEXT', 'STATUTORY_RULE']).toContain(unit.temporalStatus);
    }
  });

  it('3. should properly register all Batch P7 concepts in static-concept-index', () => {
    const p7Slugs = BATCH_P7_CONCEPTS.map((c) => c.slug);
    const registeredSlugs = STATIC_CONCEPT_INDEX.map((c) => c.slug);

    for (const slug of p7Slugs) {
      expect(registeredSlugs).toContain(slug);
    }
  });

  it('4. should verify District Administration & Citizen Charters (CON-T23-06 / LEG-POL-009)', () => {
    const concept = BATCH_P7_CONCEPTS.find((c) => c.id === 'CON-T23-06');
    expect(concept).toBeDefined();
    expect(concept?.slug).toBe('district-administration-citizen-charters-sevottam-model-public-service-guarantee-acts');

    const claimTexts = concept?.claims.map((c) => c.statement).join(' ') || '';
    expect(claimTexts).toContain('Warren Hastings in 1772');
    expect(claimTexts).toContain('Board of Revenue for Rajasthan');
    expect(claimTexts).toContain('Rajasthan Guaranteed Delivery of Public Services Act');
    expect(claimTexts).toContain('Sevottam Model');

    const blockBodies = concept?.contentBlocks.map((b) => b.body).join(' ') || '';
    expect(blockBodies).toContain('Khatauni');
    expect(blockBodies).toContain('Khasra');
    expect(blockBodies).toContain('Girdawari');
    expect(blockBodies).toContain('Right to Hearing Act 2012');
  });

  it('5. should verify Coalition Politics & Pressure Groups (CON-T11-07 / LEG-POL-010)', () => {
    const concept = BATCH_P7_CONCEPTS.find((c) => c.id === 'CON-T11-07');
    expect(concept).toBeDefined();
    expect(concept?.slug).toBe('coalition-governments-common-minimum-programme-hung-assemblies-pressure-groups');

    const claimTexts = concept?.claims.map((c) => c.statement).join(' ') || '';
    expect(claimTexts).toContain('Common Minimum Programme');
    expect(claimTexts).toContain('Sarkaria Commission');
    expect(claimTexts).toContain('Gabriel Almond');

    const blockBodies = concept?.contentBlocks.map((b) => b.body).join(' ') || '';
    expect(blockBodies).toContain('Pre-Poll Alliance');
    expect(blockBodies).toContain('Associational Groups');
    expect(blockBodies).toContain('Anomic Groups');
  });

  it('6. should verify Voting Behavior & EVM-VVPAT Reforms (CON-T22-05 / LEG-POL-012)', () => {
    const concept = BATCH_P7_CONCEPTS.find((c) => c.id === 'CON-T22-05');
    expect(concept).toBeDefined();
    expect(concept?.slug).toBe('determinants-voting-behavior-evm-vvpat-architecture-electoral-technology-reforms');

    const claimTexts = concept?.claims.map((c) => c.statement).join(' ') || '';
    expect(claimTexts).toContain('7 seconds');
    expect(claimTexts).toContain('Association for Democratic Reforms (ADR) v. Election Commission of India (2024)');
    expect(claimTexts).toContain('Bharat Electronics Limited (BEL)');

    const blockBodies = concept?.contentBlocks.map((b) => b.body).join(' ') || '';
    expect(blockBodies).toContain('cVIGIL');
    expect(blockBodies).toContain('ENCORE');
    expect(blockBodies).toContain('Suvidha');
  });

  it('7. should verify National Integration & Internal Security (CON-T20-05 / LEG-POL-018)', () => {
    const concept = BATCH_P7_CONCEPTS.find((c) => c.id === 'CON-T20-05');
    expect(concept).toBeDefined();
    expect(concept?.slug).toBe('national-integration-mechanisms-inter-state-council-internal-security-framework');

    const claimTexts = concept?.claims.map((c) => c.statement).join(' ') || '';
    expect(claimTexts).toContain('Article 263');
    expect(claimTexts).toContain('States Reorganisation Act 1956');
    expect(claimTexts).toContain('Article 355');

    const blockBodies = concept?.contentBlocks.map((b) => b.body).join(' ') || '';
    expect(blockBodies).toContain('Union Home Minister');
    expect(blockBodies).toContain('National Investigation Agency');
    expect(blockBodies).toContain('UAPA');
    expect(blockBodies).toContain('AFSPA');
  });

  it('8. should verify Official Language & Constitutional Morality (CON-T04-09 / LEG-POL-028)', () => {
    const concept = BATCH_P7_CONCEPTS.find((c) => c.id === 'CON-T04-09');
    expect(concept).toBeDefined();
    expect(concept?.slug).toBe('official-language-constitutional-scheme-part-xvii-special-directives-constitutional-morality');

    const claimTexts = concept?.claims.map((c) => c.statement).join(' ') || '';
    expect(claimTexts).toContain('Article 343(1)');
    expect(claimTexts).toContain('Article 348(1)');
    expect(claimTexts).toContain('Article 350A');
    expect(claimTexts).toContain('Constitutional Morality');

    const blockBodies = concept?.contentBlocks.map((b) => b.body).join(' ') || '';
    expect(blockBodies).toContain('Munshi-Ayyangar Formula');
    expect(blockBodies).toContain('Navtej Singh Johar');
    expect(blockBodies).toContain('Govt. of NCT of Delhi');
    expect(blockBodies).toContain('22 Languages');
  });

  it('9. should verify Inter-State Water Disputes & Sub-Classification Jurisprudence (CON-T19-06 / LEG-POL-039)', () => {
    const concept = BATCH_P7_CONCEPTS.find((c) => c.id === 'CON-T19-06');
    expect(concept).toBeDefined();
    expect(concept?.slug).toBe('inter-state-river-water-disputes-boundary-adjudication-sub-classification-jurisprudence');

    const claimTexts = concept?.claims.map((c) => c.statement).join(' ') || '';
    expect(claimTexts).toContain('Article 262');
    expect(claimTexts).toContain('State of Punjab v. Davinder Singh (2024)');
    expect(claimTexts).toContain('Article 131');

    const blockBodies = concept?.contentBlocks.map((b) => b.body).join(' ') || '';
    expect(blockBodies).toContain('Inter-State River Water Disputes');
    expect(blockBodies).toContain('E.V. Chinnaiah');
    expect(blockBodies).toContain('Article 136 (Special Leave Petition)');
    expect(blockBodies).toContain('2nd Administrative Reforms Commission');
  });

  it('10. should verify 100% full migration in crosswalk ledger', () => {
    expect(crosswalk.totalLegacyUnits).toBe(58);
    expect(crosswalk.scoring.fullyMigrated).toBe(58);
    expect(crosswalk.scoring.substantiallyMigrated).toBe(0);
    expect(crosswalk.scoring.partiallyMigrated).toBe(0);
    expect(crosswalk.scoring.genuinelyMissing).toBe(0);
    expect(crosswalk.scoring.effectiveCoveragePercentage).toBe(100.0);
    expect(crosswalk.canonicalPolityConcepts).toBe(128);
    expect(crosswalk.canonicalTotalConcepts).toBe(133);
  });
});
