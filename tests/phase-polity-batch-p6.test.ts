/**
 * Phase Polity Batch P6 Regression & Content Test Suite
 * Mind of Aravalli — Academic Reading Hub
 *
 * Validates:
 * 1. Semantic Inventory Coverage (4 legacy units, 7 canonical concepts across Topics 24 and 25).
 * 2. Rajasthan Political Demography (Census 2011 baseline, 200 Assembly seats, 25 Lok Sabha seats).
 * 3. Rajasthan State Executive (1 Nov 1956 Governor creation, Gurumukh Nihal Singh, 4 dead Governors, Hiralal Shastri vs Tikaram Paliwal).
 * 4. Rajasthan Vidhan Sabha (Seat growth 160 -> 200 in 1977 6th Assembly, 4 financial committees).
 * 5. Rajasthan High Court & RPSC (29 Aug 1949 Jodhpur HC, Satyanarayan Rao Committee Jaipur bench, RPSC Art 317 removal by President).
 * 6. Comparative Constitutional Models (UK Parliamentary Sovereignty vs US Judicial Supremacy vs Indian Basic Structure synthesis).
 * 7. Comparative Federalism (USA dual federalism vs Canada strong-centre Art 248/155 vs Germany administrative federalism).
 * 8. Swiss Direct Democracy & Plural Executive (Mandatory/Optional Referendum, Initiative, 7-member Federal Council).
 * 9. Revision Layers (30s, 2m, 5m) & Active Recall Quizzes.
 */

import { describe, it, expect } from 'vitest';
import { BATCH_P6_CONCEPTS } from '../lib/benchmark/batch-p6-canonical-seed';
import { BATCH_P6_SEMANTIC_UNITS } from '../lib/ingestion/batch-p6-semantic-inventory';
import { STATIC_CONCEPT_INDEX } from '../components/navigation/static-concept-index';

describe('Phase Polity Batch P6: Rajasthan State Polity & Comparative Constitutions', () => {
  it('should contain 7 canonical concepts in Batch P6 seed', () => {
    expect(BATCH_P6_CONCEPTS).toHaveLength(7);
  });

  it('should map all semantic units with valid target concepts and temporal status', () => {
    expect(BATCH_P6_SEMANTIC_UNITS.length).toBe(7);
    for (const unit of BATCH_P6_SEMANTIC_UNITS) {
      expect(unit.targetConceptId).toMatch(/^CON-T(24|25)-\d{2}$/);
      expect(unit.verifiedYear).toBe(2026);
      expect(['CURRENT_DATA', 'CENSUS_HISTORICAL', 'CONSTITUTIONAL_TEXT', 'STATUTORY_RULE']).toContain(unit.temporalStatus);
    }
  });

  it('should properly register all Batch P6 concepts in static-concept-index', () => {
    const p6Slugs = BATCH_P6_CONCEPTS.map((c) => c.slug);
    const registeredSlugs = STATIC_CONCEPT_INDEX.map((c) => c.slug);

    for (const slug of p6Slugs) {
      expect(registeredSlugs).toContain(slug);
    }
  });

  it('should verify Rajasthan political demography baseline facts', () => {
    const demoConcept = BATCH_P6_CONCEPTS.find((c) => c.id === 'CON-T24-01');
    expect(demoConcept).toBeDefined();
    const censusClaim = demoConcept?.claims.find((cl) => cl.claimType === 'CENSUS_DATA');
    expect(censusClaim?.statement).toContain('6.85 Crore');
    expect(censusClaim?.statement).toContain('200 persons per sq km');
    expect(censusClaim?.statement).toContain('928');

    const seatsClaim = demoConcept?.claims.find((cl) => cl.id === 'CLM-T24-01-02');
    expect(seatsClaim?.statement).toContain('200 Legislative Assembly');
    expect(seatsClaim?.statement).toContain('34 SC reserved');
    expect(seatsClaim?.statement).toContain('25 ST reserved');
    expect(seatsClaim?.statement).toContain('25 Lok Sabha');
  });

  it('should verify Rajasthan State Executive milestones', () => {
    const execConcept = BATCH_P6_CONCEPTS.find((c) => c.id === 'CON-T24-02');
    expect(execConcept).toBeDefined();
    const govClaim = execConcept?.claims.find((cl) => cl.id === 'CLM-T24-02-01');
    expect(govClaim?.statement).toContain('1 November 1956');
    expect(govClaim?.statement).toContain('Rajpramukh');
    expect(govClaim?.statement).toContain('Gurumukh Nihal Singh');

    const cmClaim = execConcept?.claims.find((cl) => cl.id === 'CLM-T24-02-02');
    expect(cmClaim?.statement).toContain('Hiralal Shastri');
    expect(cmClaim?.statement).toContain('Tikaram Paliwal');
    expect(cmClaim?.statement).toContain('Mohan Lal Sukhadia');
  });

  it('should verify Rajasthan Vidhan Sabha seat evolution and committees', () => {
    const vsConcept = BATCH_P6_CONCEPTS.find((c) => c.id === 'CON-T24-03');
    expect(vsConcept).toBeDefined();
    const seatClaim = vsConcept?.claims.find((cl) => cl.id === 'CLM-T24-03-01');
    expect(seatClaim?.statement).toContain('160 seats');
    expect(seatClaim?.statement).toContain('200 seats in the 6th Assembly');

    const officerClaim = vsConcept?.claims.find((cl) => cl.id === 'CLM-T24-03-02');
    expect(officerClaim?.statement).toContain('Narottam Lal Joshi');
    expect(officerClaim?.statement).toContain('Lal Singh Shaktawat');
    expect(officerClaim?.statement).toContain('Jaswant Singh');
  });

  it('should verify Rajasthan High Court and RPSC architecture', () => {
    const hcRpscConcept = BATCH_P6_CONCEPTS.find((c) => c.id === 'CON-T24-04');
    expect(hcRpscConcept).toBeDefined();
    const hcClaim = hcRpscConcept?.claims.find((cl) => cl.id === 'CLM-T24-04-01');
    expect(hcClaim?.statement).toContain('29 August 1949');
    expect(hcClaim?.statement).toContain('Kamala Kant Verma');
    expect(hcClaim?.statement).toContain('Satyanarayan Rao Committee');
    expect(hcClaim?.statement).toContain('Jaipur');

    const rpscClaim = hcRpscConcept?.claims.find((cl) => cl.id === 'CLM-T24-04-02');
    expect(rpscClaim?.statement).toContain('Ajmer');
    expect(rpscClaim?.statement).toContain('Governor');
    expect(rpscClaim?.statement).toContain('President of India');
  });

  it('should verify UK vs USA vs Indian Constitutional Synthesis', () => {
    const synConcept = BATCH_P6_CONCEPTS.find((c) => c.id === 'CON-T25-01');
    expect(synConcept).toBeDefined();
    const diceyClaim = synConcept?.claims.find((cl) => cl.id === 'CLM-T25-01-01');
    expect(diceyClaim?.statement).toContain('Parliament is sovereign');
    expect(diceyClaim?.statement).toContain('Marbury v. Madison');

    const basicStructClaim = synConcept?.claims.find((cl) => cl.id === 'CLM-T25-01-02');
    expect(basicStructClaim?.statement).toContain('Basic Structure Doctrine');
    expect(basicStructClaim?.statement).toContain('Kesavananda Bharati');
  });

  it('should verify Comparative Federalism architectures', () => {
    const fedConcept = BATCH_P6_CONCEPTS.find((c) => c.id === 'CON-T25-02');
    expect(fedConcept).toBeDefined();
    const canadaClaim = fedConcept?.claims.find((cl) => cl.id === 'CLM-T25-02-01');
    expect(canadaClaim?.statement).toContain('Canadian Constitution');
    expect(canadaClaim?.statement).toContain('Article 248');
    expect(canadaClaim?.statement).toContain('Article 155');

    const germanClaim = fedConcept?.claims.find((cl) => cl.id === 'CLM-T25-02-02');
    expect(germanClaim?.statement).toContain('Bundesrat');
    expect(germanClaim?.statement).toContain('Länder');
  });

  it('should verify Swiss Direct Democracy and Plural Executive', () => {
    const swissConcept = BATCH_P6_CONCEPTS.find((c) => c.id === 'CON-T25-03');
    expect(swissConcept).toBeDefined();
    const ddClaim = swissConcept?.claims.find((cl) => cl.id === 'CLM-T25-03-01');
    expect(ddClaim?.statement).toContain('Mandatory Referendum');
    expect(ddClaim?.statement).toContain('Optional Referendum');
    expect(ddClaim?.statement).toContain('Popular Initiative');

    const execClaim = swissConcept?.claims.find((cl) => cl.id === 'CLM-T25-03-02');
    expect(execClaim?.statement).toContain('7-member');
    expect(execClaim?.statement).toContain('Federal Council');
    expect(execClaim?.statement).toContain('rotates annually');
  });

  it('should guarantee pedagogical content, exam mappings, and revision units on all 7 concepts', () => {
    for (const c of BATCH_P6_CONCEPTS) {
      expect(c.contentBlocks.length).toBeGreaterThanOrEqual(2);
      expect(c.examMappings.length).toBeGreaterThanOrEqual(2);
      expect(c.revisionUnits.length).toBe(3);
      expect(c.questions.length).toBeGreaterThanOrEqual(1);

      const revTypes = c.revisionUnits.map((r) => r.type);
      expect(revTypes).toContain('FLASH_30S');
      expect(revTypes).toContain('SUMMARY_2M');
      expect(revTypes).toContain('ARCHITECTURE_5M');
    }
  });
});
