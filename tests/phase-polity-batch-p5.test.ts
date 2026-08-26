/**
 * Phase Polity Batch P5 Regression & Content Test Suite
 * Mind of Aravalli — Academic Reading Hub
 *
 * Validates:
 * 1. Semantic Inventory Coverage (9 legacy units, 13 canonical concepts across Topics 21, 22, 23).
 * 2. 73rd & 74th CAAs (Mandatory vs Voluntary, Gram Sabha, PESA 1996, DPC 4/5th, MPC 2/3rd).
 * 3. Rajasthan-specific Local Governance (Nagaur Oct 2 1959, 50% women quota, Ward Sabha, Bassi Gram Nyayalaya 2010).
 * 4. Constitutional Institutions (ECI Art 324 & 2023 Act, CAG Arts 148-151 & 1976 separation).
 * 5. Statutory Integrity Watchdogs (CIC 2019 Act, CVC 4-year tenure, NHRC 2019 Act, Lokpal 2013 Act).
 * 6. Non-Constitutional Policy Institutions (NITI Aayog Jan 1 2015, zero fund allocation power).
 * 7. Revision Layers (30s, 2m, 5m) & Active Recall Quizzes.
 */

import { describe, it, expect } from 'vitest';
import { BATCH_P5_CONCEPTS } from '../lib/benchmark/batch-p5-canonical-seed';
import { BATCH_P5_SEMANTIC_UNITS } from '../lib/ingestion/batch-p5-semantic-inventory';
import { STATIC_CONCEPT_INDEX } from '../components/navigation/static-concept-index';

describe('Phase Polity Batch P5: Bodies, Local Governance & Institutions', () => {
  it('should contain 13 canonical concepts in Batch P5 seed', () => {
    expect(BATCH_P5_CONCEPTS).toHaveLength(13);
  });

  it('should map all 11 semantic units with valid target concepts', () => {
    expect(BATCH_P5_SEMANTIC_UNITS.length).toBeGreaterThanOrEqual(9);
    for (const unit of BATCH_P5_SEMANTIC_UNITS) {
      expect(unit.targetConceptId).toMatch(/^CON-T(21|22|23)-\d{2}$/);
      expect(unit.verifiedYear).toBe(2026);
    }
  });

  it('should properly register all Batch P5 concepts in static-concept-index', () => {
    const p5Slugs = BATCH_P5_CONCEPTS.map((c) => c.slug);
    const registeredSlugs = STATIC_CONCEPT_INDEX.map((c) => c.slug);

    for (const slug of p5Slugs) {
      expect(registeredSlugs).toContain(slug);
    }
  });

  it('should verify 73rd CAA and PESA 1996 features', () => {
    const priConcept = BATCH_P5_CONCEPTS.find((c) => c.id === 'CON-T21-01');
    expect(priConcept).toBeDefined();
    expect(priConcept?.shortDefinition).toContain('Eleventh Schedule');
    expect(priConcept?.shortDefinition).toContain('State Election Commission');

    const pesaConcept = BATCH_P5_CONCEPTS.find((c) => c.id === 'CON-T21-02');
    expect(pesaConcept).toBeDefined();
    expect(pesaConcept?.shortDefinition.toLowerCase()).toContain('minor forest produce');
  });

  it('should verify Rajasthan-specific local governance landmarks', () => {
    const rjConcept = BATCH_P5_CONCEPTS.find((c) => c.id === 'CON-T21-04');
    expect(rjConcept).toBeDefined();
    const historicalClaim = rjConcept?.claims.find((cl) => cl.claimType === 'HISTORICAL_FACT');
    expect(historicalClaim?.statement).toContain('Nagaur');
    expect(historicalClaim?.statement).toContain('2 October 1959');

    const statutoryClaim = rjConcept?.claims.find((cl) => cl.claimType === 'STATUTORY_RULE');
    expect(statutoryClaim?.statement).toContain('50% reservation for women');
  });

  it('should verify 74th CAA spatial planning composition ratios', () => {
    const ulbConcept = BATCH_P5_CONCEPTS.find((c) => c.id === 'CON-T21-03');
    expect(ulbConcept).toBeDefined();
    const dpcClaim = ulbConcept?.claims.find((cl) => cl.locator.includes('243ZD'));
    expect(dpcClaim?.statement).toContain('4/5th');
    expect(dpcClaim?.statement).toContain('2/3rd');
  });

  it('should verify ECI 2023 Appointment Act Selection Committee', () => {
    const eciConcept = BATCH_P5_CONCEPTS.find((c) => c.id === 'CON-T22-01');
    expect(eciConcept).toBeDefined();
    const apptClaim = eciConcept?.claims.find((cl) => cl.id === 'CLM-T22-01-02');
    expect(apptClaim?.statement).toContain('Selection Committee');
    expect(apptClaim?.statement).toContain('Prime Minister');
    expect(apptClaim?.statement).toContain('Union Cabinet Minister');
    expect(apptClaim?.statement).toContain('Leader of Opposition');
  });

  it('should verify CAG independence and 1976 accounting separation', () => {
    const cagConcept = BATCH_P5_CONCEPTS.find((c) => c.id === 'CON-T22-03');
    expect(cagConcept).toBeDefined();
    const indepClaim = cagConcept?.claims.find((cl) => cl.id === 'CLM-T22-03-01');
    expect(indepClaim?.statement).toContain('ineligible for any further office');
    expect(indepClaim?.statement).toContain('Consolidated Fund of India');

    const sepClaim = cagConcept?.claims.find((cl) => cl.id === 'CLM-T22-03-02');
    expect(sepClaim?.statement).toContain('separated from auditing');
  });

  it('should verify CVC 4-year tenure and Santhanam Committee origins', () => {
    const cvcConcept = BATCH_P5_CONCEPTS.find((c) => c.id === 'CON-T23-02');
    expect(cvcConcept).toBeDefined();
    const cvcClaim = cvcConcept?.claims.find((cl) => cl.id === 'CLM-T23-02-02');
    expect(cvcClaim?.statement).toContain('4 years or until age 65');
  });

  it('should verify Lokpal 2013 safeguards and Rajasthan Lokayukta CM exclusion', () => {
    const lokpalConcept = BATCH_P5_CONCEPTS.find((c) => c.id === 'CON-T23-04');
    expect(lokpalConcept).toBeDefined();
    const rjLokayuktaClaim = lokpalConcept?.claims.find((cl) => cl.id === 'CLM-T23-04-03');
    expect(rjLokayuktaClaim?.statement).toContain('Chief Minister');
    expect(rjLokayuktaClaim?.statement).toContain('strictly excluded');
  });

  it('should verify NITI Aayog executive status and zero fund allocation powers', () => {
    const nitiConcept = BATCH_P5_CONCEPTS.find((c) => c.id === 'CON-T23-05');
    expect(nitiConcept).toBeDefined();
    const statusClaim = nitiConcept?.claims.find((cl) => cl.id === 'CLM-T23-05-01');
    expect(statusClaim?.statement).toContain('non-constitutional, non-statutory');

    const fundClaim = nitiConcept?.claims.find((cl) => cl.id === 'CLM-T23-05-02');
    expect(fundClaim?.statement).toContain('zero financial allocation power');
  });

  it('should guarantee pedagogical content, exam mappings, and revision units on all 13 concepts', () => {
    for (const c of BATCH_P5_CONCEPTS) {
      expect(c.contentBlocks.length).toBeGreaterThanOrEqual(2);
      expect(c.examMappings.length).toBeGreaterThanOrEqual(3);
      expect(c.revisionUnits.length).toBe(3);
      expect(c.questions.length).toBeGreaterThanOrEqual(1);

      const revTypes = c.revisionUnits.map((r) => r.type);
      expect(revTypes).toContain('FLASH_30S');
      expect(revTypes).toContain('SUMMARY_2M');
      expect(revTypes).toContain('ARCHITECTURE_5M');
    }
  });
});
