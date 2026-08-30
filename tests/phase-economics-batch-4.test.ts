import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { BATCH_E4_CONCEPTS, seedBatchE4CanonicalKnowledge } from '../lib/benchmark/batch-e4-canonical-seed';

describe('Economics Master — Batch 4: Fiscal Policy, Public Finance, Taxation & Government Budget', () => {
  beforeAll(async () => {
    await seedBatchE4CanonicalKnowledge();
  });

  describe('Structural & Quantitative Verification', () => {
    it('should contain exactly 26 canonical concepts across Topics 49 to 61', () => {
      expect(BATCH_E4_CONCEPTS.length).toBe(26);

      const topicOrders = new Set(BATCH_E4_CONCEPTS.map((c) => c.topicOrder));
      expect(topicOrders.size).toBe(13);
      for (let order = 49; order <= 61; order++) {
        expect(topicOrders.has(order)).toBe(true);
      }

      const expectedIds = Array.from({ length: 26 }, (_, i) => {
        const num = (54 + i).toString().padStart(2, '0');
        return `CON-ECO-${num}`;
      });
      const actualIds = BATCH_E4_CONCEPTS.map((c) => c.id);
      expect(actualIds).toEqual(expectedIds);
    });

    it('should verify each concept has at least 3 claims with Class A/B locators', () => {
      let totalClaims = 0;
      for (const concept of BATCH_E4_CONCEPTS) {
        expect(concept.claims.length).toBeGreaterThanOrEqual(3);
        totalClaims += concept.claims.length;
        for (const claim of concept.claims) {
          expect(claim.statement.length).toBeGreaterThan(30);
          expect(claim.locator.length).toBeGreaterThan(5);
          expect(claim.excerpt.length).toBeGreaterThan(5);
          expect(['STATUTORY_RULE', 'CORE_PRINCIPLE', 'EMPIRICAL_REGULARITY', 'HISTORICAL_FACT']).toContain(claim.claimType);
          expect(claim.confidence).toBe('HIGH');
        }
      }
      expect(totalClaims).toBeGreaterThanOrEqual(78);
    });

    it('should verify each concept has exactly 4 content blocks with INTUITION, CORE_IDEA, MECHANISM, EXAM_APPLICATION', () => {
      let totalBlocks = 0;
      for (const concept of BATCH_E4_CONCEPTS) {
        expect(concept.contentBlocks.length).toBe(4);
        totalBlocks += concept.contentBlocks.length;
        const types = concept.contentBlocks.map((b) => b.type);
        expect(types).toEqual(['INTUITION', 'CORE_IDEA', 'MECHANISM', 'EXAM_APPLICATION']);
      }
      expect(totalBlocks).toBe(104);
    });

    it('should verify each concept maps to all 8 target examinations', () => {
      const requiredExams = [
        'RBI_GRADE_B',
        'SEBI_GRADE_A',
        'NABARD_GRADE_A',
        'SBI_PO',
        'IBPS_PO',
        'RPSC_RAS',
        'IIBF_DBF',
        'UPSC_APFC',
      ];
      let totalMappings = 0;
      for (const concept of BATCH_E4_CONCEPTS) {
        expect(concept.examMappings.length).toBe(8);
        totalMappings += concept.examMappings.length;
        const examCodes = concept.examMappings.map((m) => m.examCode);
        for (const req of requiredExams) {
          expect(examCodes).toContain(req);
        }
      }
      expect(totalMappings).toBe(208);
    });

    it('should verify each concept has 3 revision units: FLASH_30S, SUMMARY_2M, ARCHITECTURE_5M', () => {
      let totalRevUnits = 0;
      for (const concept of BATCH_E4_CONCEPTS) {
        expect(concept.revisionUnits.length).toBe(3);
        totalRevUnits += concept.revisionUnits.length;
        const types = concept.revisionUnits.map((r) => r.type);
        expect(types).toEqual(['FLASH_30S', 'SUMMARY_2M', 'ARCHITECTURE_5M']);
      }
      expect(totalRevUnits).toBe(78);
    });

    it('should verify each concept has at least 2 graded questions with trap explanations and options', () => {
      let totalQuestions = 0;
      for (const concept of BATCH_E4_CONCEPTS) {
        expect(concept.questions.length).toBeGreaterThanOrEqual(2);
        totalQuestions += concept.questions.length;
        for (const q of concept.questions) {
          expect(q.stem.length).toBeGreaterThan(20);
          expect(q.options.length).toBe(4);
          expect(q.options).toContain(q.correctAnswer);
          expect(q.explanation.length).toBeGreaterThan(20);
          expect(q.trapExplanation?.length).toBeGreaterThan(10);
          expect(['EASY', 'MEDIUM', 'HARD']).toContain(q.difficulty);
        }
      }
      expect(totalQuestions).toBeGreaterThanOrEqual(52);
    });
  });

  describe('Substantive Economic & Statutory Precision Verification', () => {
    it('Topic 49: should verify Musgrave three functions and Public vs Merit vs Demerit goods', () => {
      const c54 = BATCH_E4_CONCEPTS.find((c) => c.id === 'CON-ECO-54');
      const c55 = BATCH_E4_CONCEPTS.find((c) => c.id === 'CON-ECO-55');
      expect(c54?.shortDefinition).toContain('Musgrave');
      expect(c54?.shortDefinition).toContain('Allocation');
      expect(c54?.shortDefinition).toContain('Distribution');
      expect(c54?.shortDefinition).toContain('Stabilization');
      expect(c55?.shortDefinition.toLowerCase()).toContain('non-rival');
      expect(c55?.shortDefinition.toLowerCase()).toContain('non-excludable');
      expect(c55?.shortDefinition).toContain('Merit');
      expect(c55?.shortDefinition).toContain('Demerit');
    });

    it('Topic 50: should verify Revenue Receipts vs Capital Receipts and NDCR', () => {
      const c56 = BATCH_E4_CONCEPTS.find((c) => c.id === 'CON-ECO-56');
      const c57 = BATCH_E4_CONCEPTS.find((c) => c.id === 'CON-ECO-57');
      expect(c56?.shortDefinition).toContain('Revenue Receipts');
      expect(c56?.claims[1].statement).toContain('Non-Tax Revenue');
      expect(c57?.shortDefinition).toContain('Non-Debt Capital Receipts');
      expect(c57?.claims[1].statement).toContain('Disinvestment');
    });

    it('Topic 51: should verify Tax Incidence, Deadweight Loss, Smith Canons and Buoyancy vs Elasticity', () => {
      const c58 = BATCH_E4_CONCEPTS.find((c) => c.id === 'CON-ECO-58');
      const c59 = BATCH_E4_CONCEPTS.find((c) => c.id === 'CON-ECO-59');
      expect(c58?.claims[1].statement.toLowerCase()).toContain('elasticit');
      expect(c58?.claims[2].statement).toContain('Deadweight Loss');
      expect(c59?.claims[1].statement).toContain('Adam Smith');
      expect(c59?.claims[2].statement).toContain('Tax Buoyancy');
      expect(c59?.claims[2].statement).toContain('Tax Elasticity');
    });

    it('Topic 52: should verify Direct Tax Slabs, Corporate Tax, and 7th Schedule List I/II distribution', () => {
      const c60 = BATCH_E4_CONCEPTS.find((c) => c.id === 'CON-ECO-60');
      const c61 = BATCH_E4_CONCEPTS.find((c) => c.id === 'CON-ECO-61');
      expect(c60?.claims[0].statement).toContain('115BAC');
      expect(c60?.claims[1].statement).toContain('115BAA');
      expect(c61?.claims[1].statement).toContain('Entry 82');
      expect(c61?.claims[1].statement).toContain('Entry 46');
      expect(c61?.claims[2].statement).toContain('Article 271');
    });

    it('Topic 53: should verify GST destination-based principle, ITC, GST Council (Art 279A) voting weights and alcohol/petroleum exclusions', () => {
      const c62 = BATCH_E4_CONCEPTS.find((c) => c.id === 'CON-ECO-62');
      const c63 = BATCH_E4_CONCEPTS.find((c) => c.id === 'CON-ECO-63');
      expect(c62?.claims[0].statement.toLowerCase()).toContain('destination-based');
      expect(c62?.claims[1].statement).toContain('Input Tax Credit');
      expect(c62?.claims[2].statement).toContain('Article 366(12A)');
      expect(c63?.claims[1].statement).toContain('Article 279A');
      expect(c63?.claims[1].statement).toContain('3/4th');
      expect(c63?.claims[1].statement).toContain('1/3rd');
      expect(c63?.claims[1].statement).toContain('2/3rd');
    });

    it('Topic 54: should verify Revenue vs Capital Expenditure, Plan/Non-Plan abolition, and Multipliers', () => {
      const c64 = BATCH_E4_CONCEPTS.find((c) => c.id === 'CON-ECO-64');
      const c65 = BATCH_E4_CONCEPTS.find((c) => c.id === 'CON-ECO-65');
      expect(c64?.claims[2].statement).toContain('2017-18');
      expect(c64?.claims[2].statement).toContain('Rangarajan');
      expect(c65?.claims[0].statement.toLowerCase()).toContain('interest payments');
      expect(c65?.claims[1].statement.toLowerCase()).toContain('food subsidy');
      expect(c65?.claims[2].statement).toContain('Crowding-Out');
      expect(c65?.claims[2].statement).toContain('Crowding-In');
    });

    it('Topic 55: should verify Three Constitutional Funds (Art 266/267), Charged Expenditure, and Budget Stages/Grants', () => {
      const c66 = BATCH_E4_CONCEPTS.find((c) => c.id === 'CON-ECO-66');
      const c67 = BATCH_E4_CONCEPTS.find((c) => c.id === 'CON-ECO-67');
      expect(c66?.claims[0].statement).toContain('Article 266(1)');
      expect(c66?.claims[1].statement).toContain('₹30,000 Crore');
      expect(c66?.claims[2].statement).toContain('Article 112(3)');
      expect(c66?.claims[2].statement).toContain('NON-VOTABLE');
      expect(c67?.claims[0].statement).toContain('Annual Financial Statement');
      expect(c67?.claims[1].statement).toContain('Appropriation Bill');
      expect(c67?.claims[1].statement).toContain('Finance Bill');
      expect(c67?.claims[2].statement).toContain('Public Accounts Committee');
    });

    it('Topic 56: should verify Deficit taxonomy (FD, RD, PD, ERD, Monetized) and Structural vs Cyclical deficits', () => {
      const c68 = BATCH_E4_CONCEPTS.find((c) => c.id === 'CON-ECO-68');
      const c69 = BATCH_E4_CONCEPTS.find((c) => c.id === 'CON-ECO-69');
      expect(c68?.claims[0].statement).toContain('Gross Fiscal Deficit');
      expect(c68?.claims[1].statement).toContain('Primary Deficit');
      expect(c68?.claims[2].statement).toContain('Effective Revenue Deficit');
      expect(c69?.claims[0].statement).toContain('Structural Deficit');
      expect(c69?.claims[0].statement).toContain('Cyclical Deficit');
      expect(c69?.claims[1].statement).toContain('Net Fiscal Deficit');
    });

    it('Topic 57: should verify Automatic Stabilizers, Multiplier derivations (k_G, k_T, k_BB), and Fiscal Dominance', () => {
      const c70 = BATCH_E4_CONCEPTS.find((c) => c.id === 'CON-ECO-70');
      const c71 = BATCH_E4_CONCEPTS.find((c) => c.id === 'CON-ECO-71');
      expect(c70?.claims[1].statement).toContain('Automatic Stabilizers');
      expect(c70?.claims[1].statement).toContain('MGNREGA');
      expect(c71?.claims[0].statement).toContain('Government Spending Multiplier');
      expect(c71?.claims[1].statement).toContain('Haavelmo');
      expect(c71?.claims[2].statement).toContain('Fiscal Dominance');
    });

    it('Topic 58: should verify FRBM Act 2003, 4 statements, Escape clauses, N.K. Singh 60:40:20 rule and EBR elimination', () => {
      const c72 = BATCH_E4_CONCEPTS.find((c) => c.id === 'CON-ECO-72');
      const c73 = BATCH_E4_CONCEPTS.find((c) => c.id === 'CON-ECO-73');
      expect(c72?.claims[1].statement).toContain('Macroeconomic Framework Statement');
      expect(c72?.claims[2].statement).toContain('0.5%');
      expect(c73?.claims[0].statement).toContain('60%');
      expect(c73?.claims[0].statement).toContain('40%');
      expect(c73?.claims[0].statement).toContain('20%');
      expect(c73?.claims[1].statement).toContain('Food Corporation of India');
      expect(c73?.claims[1].statement).toContain('National Small Savings Fund');
      expect(c73?.claims[2].statement).toContain('4.5%');
    });

    it('Topic 59: should verify Public Debt architecture (Art 292/293), Domar Condition (g > r), and Debt dynamics', () => {
      const c74 = BATCH_E4_CONCEPTS.find((c) => c.id === 'CON-ECO-74');
      const c75 = BATCH_E4_CONCEPTS.find((c) => c.id === 'CON-ECO-75');
      expect(c74?.claims[0].statement).toContain('Article 292');
      expect(c74?.claims[1].statement).toContain('95%');
      expect(c75?.claims[0].statement).toContain('Domar');
      expect(c75?.claims[0].statement).toContain('g > r');
      expect(c75?.claims[1].statement).toContain('Fundamental Equation of Debt Dynamics');
    });

    it('Topic 60: should verify Fiscal Federalism, Divisible pool, CSS 60:40/90:10, and 15th FC 41% + 6 horizontal criteria', () => {
      const c76 = BATCH_E4_CONCEPTS.find((c) => c.id === 'CON-ECO-76');
      const c77 = BATCH_E4_CONCEPTS.find((c) => c.id === 'CON-ECO-77');
      expect(c76?.claims[1].statement).toContain('Article 270');
      expect(c76?.claims[2].statement).toContain('Centrally Sponsored Schemes');
      expect(c77?.claims[0].statement).toContain('Article 280');
      expect(c77?.claims[1].statement).toContain('41%');
      expect(c77?.claims[2].statement).toContain('Income Distance');
      expect(c77?.claims[2].statement).toContain('45%');
      expect(c77?.claims[2].statement).toContain('Demographic Performance');
    });

    it('Topic 61: should verify Rajasthan SOTR, Mining royalties, Rajasthan FRBM 2005 3% ceiling, and 6th SFC 6.75% devolution', () => {
      const c78 = BATCH_E4_CONCEPTS.find((c) => c.id === 'CON-ECO-78');
      const c79 = BATCH_E4_CONCEPTS.find((c) => c.id === 'CON-ECO-79');
      expect(c78?.claims[0].statement).toContain('State GST');
      expect(c78?.claims[1].statement.toLowerCase()).toContain('mining royalties');
      expect(c78?.claims[1].statement).toContain('Barmer');
      expect(c79?.claims[0].statement).toContain('3%');
      expect(c79?.claims[2].statement).toContain('6.75%');
      expect(c79?.claims[2].statement).toContain('75.1%');
      expect(c79?.claims[2].statement).toContain('24.9%');
    });
  });

  describe('Database Persistence Verification', () => {
    it('should verify all 26 concepts are queried from the database', async () => {
      const dbConcepts = await db.concept.findMany({
        where: {
          id: {
            startsWith: 'CON-ECO-',
          },
        },
      });
      const batchE4DbConcepts = dbConcepts.filter((c) => {
        const num = parseInt(c.id.replace('CON-ECO-', ''), 10);
        return num >= 54 && num <= 79;
      });
      expect(batchE4DbConcepts.length).toBe(26);
    });
  });
});
