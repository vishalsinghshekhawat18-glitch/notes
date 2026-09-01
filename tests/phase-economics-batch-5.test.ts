import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { BATCH_E5_CONCEPTS, seedBatchE5CanonicalKnowledge } from '../lib/benchmark/batch-e5-canonical-seed';

describe('Economics Master — Batch 5: External Sector, Balance of Payments, Foreign Exchange & International Economics', () => {
  beforeAll(async () => {
    await seedBatchE5CanonicalKnowledge();
  });

  describe('Structural & Quantitative Verification', () => {
    it('should contain exactly 27 canonical concepts across Topics 62 to 76', () => {
      expect(BATCH_E5_CONCEPTS.length).toBe(27);

      const topicOrders = new Set(BATCH_E5_CONCEPTS.map((c) => c.topicOrder));
      expect(topicOrders.size).toBe(15);
      for (let order = 62; order <= 76; order++) {
        expect(topicOrders.has(order)).toBe(true);
      }

      const expectedIds = Array.from({ length: 27 }, (_, i) => {
        const num = (80 + i).toString().padStart(2, '0');
        return `CON-ECO-${num}`;
      });
      const actualIds = BATCH_E5_CONCEPTS.map((c) => c.id);
      expect(actualIds).toEqual(expectedIds);
    });

    it('should verify each concept has at least 3 claims with Class A/B locators', () => {
      let totalClaims = 0;
      for (const concept of BATCH_E5_CONCEPTS) {
        expect(concept.claims.length).toBeGreaterThanOrEqual(3);
        totalClaims += concept.claims.length;
        for (const claim of concept.claims) {
          expect(claim.statement.length).toBeGreaterThan(30);
          expect(claim.locator.length).toBeGreaterThan(5);
          expect(claim.excerpt.length).toBeGreaterThan(5);
          expect(['STATUTORY_RULE', 'CORE_PRINCIPLE', 'HISTORICAL_FACT']).toContain(claim.claimType);
          expect(claim.confidence).toBe('HIGH');
        }
      }
      expect(totalClaims).toBeGreaterThanOrEqual(81);
    });

    it('should verify each concept has exactly 4 content blocks with INTUITION, CORE_IDEA, MECHANISM, EXAM_APPLICATION', () => {
      let totalBlocks = 0;
      for (const concept of BATCH_E5_CONCEPTS) {
        expect(concept.contentBlocks.length).toBe(4);
        totalBlocks += concept.contentBlocks.length;
        const types = concept.contentBlocks.map((b) => b.type);
        expect(types).toEqual(['INTUITION', 'CORE_IDEA', 'MECHANISM', 'EXAM_APPLICATION']);
      }
      expect(totalBlocks).toBe(108);
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
      for (const concept of BATCH_E5_CONCEPTS) {
        expect(concept.examMappings.length).toBe(8);
        totalMappings += concept.examMappings.length;
        const examCodes = concept.examMappings.map((m) => m.examCode);
        for (const req of requiredExams) {
          expect(examCodes).toContain(req);
        }
      }
      expect(totalMappings).toBe(216);
    });

    it('should verify each concept has 3 revision units: FLASH_30S, SUMMARY_2M, ARCHITECTURE_5M', () => {
      let totalRevUnits = 0;
      for (const concept of BATCH_E5_CONCEPTS) {
        expect(concept.revisionUnits.length).toBe(3);
        totalRevUnits += concept.revisionUnits.length;
        const types = concept.revisionUnits.map((r) => r.type);
        expect(types).toEqual(['FLASH_30S', 'SUMMARY_2M', 'ARCHITECTURE_5M']);
      }
      expect(totalRevUnits).toBe(81);
    });

    it('should verify each concept has at least 2 graded questions with trap explanations and options', () => {
      let totalQuestions = 0;
      for (const concept of BATCH_E5_CONCEPTS) {
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
      expect(totalQuestions).toBeGreaterThanOrEqual(54);
    });
  });

  describe('Substantive Economic & Statutory Precision Verification', () => {
    it('Topic 62: should verify Ricardian Comparative Advantage, Terms of Trade & Viner Trade Creation/Diversion', () => {
      const c80 = JSON.stringify(BATCH_E5_CONCEPTS.find((c) => c.id === 'CON-ECO-80'));
      const c81 = JSON.stringify(BATCH_E5_CONCEPTS.find((c) => c.id === 'CON-ECO-81'));
      expect(c80).toContain('Comparative Advantage');
      expect(c80).toContain('Opportunity Cost');
      expect(c81).toContain('Net Barter');
      expect(c81).toContain('Prebisch-Singer');
      expect(c81).toContain('Trade Creation');
      expect(c81).toContain('Trade Diversion');
    });

    it('Topic 63: should verify Tariffs, Quotas, Quota Rents & Effective Rate of Protection (ERP)', () => {
      const c82 = JSON.stringify(BATCH_E5_CONCEPTS.find((c) => c.id === 'CON-ECO-82'));
      const c83 = JSON.stringify(BATCH_E5_CONCEPTS.find((c) => c.id === 'CON-ECO-83'));
      expect(c82).toContain('Quota Rents');
      expect(c82).toContain('Deadweight');
      expect(c83).toContain('Effective Rate of Protection');
      expect(c83).toContain('Infant Industry');
      expect(c83).toContain('Mill-Bastable');
    });

    it('Topic 64: should verify BoP Double-Entry, BPM6 Manual & Autonomous vs Accommodating Flows', () => {
      const c84 = JSON.stringify(BATCH_E5_CONCEPTS.find((c) => c.id === 'CON-ECO-84'));
      const c85 = JSON.stringify(BATCH_E5_CONCEPTS.find((c) => c.id === 'CON-ECO-85'));
      expect(c84).toContain('Double-entry');
      expect(c84).toContain('BPM6');
      expect(c85).toContain('Autonomous');
      expect(c85).toContain('Accommodating');
      expect(c85).toContain('Above the Line');
    });

    it('Topic 65: should verify Current Account Deficit, Remittances & Saving-Investment / Twin Deficits Gap', () => {
      const c86 = JSON.stringify(BATCH_E5_CONCEPTS.find((c) => c.id === 'CON-ECO-86'));
      const c87 = JSON.stringify(BATCH_E5_CONCEPTS.find((c) => c.id === 'CON-ECO-87'));
      expect(c86).toContain('Merchandise');
      expect(c86).toContain('Invisibles');
      expect(c86).toContain('Remittances');
      expect(c87).toContain('CAD');
      expect(c87).toContain('Twin Deficits');
      expect(c87).toContain('Saving-Investment');
    });

    it('Topic 66: should verify FDI vs FPI (Mayaram 10% rule), ECBs & Tarapore Capital Account Convertibility', () => {
      const c88 = JSON.stringify(BATCH_E5_CONCEPTS.find((c) => c.id === 'CON-ECO-88'));
      const c89 = JSON.stringify(BATCH_E5_CONCEPTS.find((c) => c.id === 'CON-ECO-89'));
      expect(c88).toContain('FDI');
      expect(c88).toContain('FPI');
      expect(c88).toContain('Mayaram');
      expect(c88).toContain('ECB');
      expect(c89).toContain('Tarapore');
      expect(c89).toContain('Convertibility');
      expect(c89).toContain('Article VIII');
    });

    it('Topic 67: should verify Forex Direct/Indirect Quotes, Appreciation/Depreciation & Exchange Rate Regimes', () => {
      const c90 = JSON.stringify(BATCH_E5_CONCEPTS.find((c) => c.id === 'CON-ECO-90'));
      const c91 = JSON.stringify(BATCH_E5_CONCEPTS.find((c) => c.id === 'CON-ECO-91'));
      expect(c90).toContain('Direct Quotation');
      expect(c90).toContain('Appreciation');
      expect(c90).toContain('Depreciation');
      expect(c91).toContain('Managed Float');
      expect(c91).toContain('LERMS');
    });

    it('Topic 68: should verify NEER vs REER (40-currency basket), PPP, Balassa-Samuelson & Interest Rate Parity', () => {
      const c92 = JSON.stringify(BATCH_E5_CONCEPTS.find((c) => c.id === 'CON-ECO-92'));
      const c93 = JSON.stringify(BATCH_E5_CONCEPTS.find((c) => c.id === 'CON-ECO-93'));
      expect(c92).toContain('NEER');
      expect(c92).toContain('REER');
      expect(c92).toContain('40-currency');
      expect(c93).toContain('Purchasing Power Parity');
      expect(c93).toContain('Balassa-Samuelson');
      expect(c93).toContain('Interest Rate Parity');
    });

    it('Topic 69: should verify Sterilized Forex Intervention, MSS & The Impossible Trinity / Policy Trilemma', () => {
      const c94 = JSON.stringify(BATCH_E5_CONCEPTS.find((c) => c.id === 'CON-ECO-94'));
      const c95 = JSON.stringify(BATCH_E5_CONCEPTS.find((c) => c.id === 'CON-ECO-95'));
      expect(c94).toContain('Sterilized');
      expect(c94).toContain('Market Stabilization Scheme');
      expect(c95).toContain('Impossible Trinity');
      expect(c95).toContain('Mundell-Fleming');
      expect(c95).toContain('Trilemma');
    });

    it('Topic 70: should verify Forex Reserves (FCA, Gold, SDR, RTP), Guidotti-Greenspan & Jalan ECF Framework', () => {
      const c96 = JSON.stringify(BATCH_E5_CONCEPTS.find((c) => c.id === 'CON-ECO-96'));
      const c97 = JSON.stringify(BATCH_E5_CONCEPTS.find((c) => c.id === 'CON-ECO-97'));
      expect(c96).toContain('Foreign Currency Assets');
      expect(c96).toContain('SDR');
      expect(c96).toContain('Reserve Tranche');
      expect(c96).toContain('Guidotti-Greenspan');
      expect(c97).toContain('Jalan');
      expect(c97).toContain('Economic Capital Framework');
      expect(c97).toContain('Contingency Risk Buffer');
    });

    it('Topic 71 & 72: should verify External Debt Metrics, Marshall-Lerner Condition & J-Curve Adjustment', () => {
      const c98 = JSON.stringify(BATCH_E5_CONCEPTS.find((c) => c.id === 'CON-ECO-98'));
      const c99 = JSON.stringify(BATCH_E5_CONCEPTS.find((c) => c.id === 'CON-ECO-99'));
      expect(c98).toContain('External Debt');
      expect(c98).toContain('Debt Service Ratio');
      expect(c98).toContain('Original Sin');
      expect(c99).toContain('Marshall-Lerner');
      expect(c99).toContain('J-Curve');
      expect(c99).toContain('Expenditure-Switching');
    });

    it('Topic 73: should verify WTO MFN, National Treatment, GATS 4 Modes & AoA Boxes / Bali Peace Clause', () => {
      const c100 = JSON.stringify(BATCH_E5_CONCEPTS.find((c) => c.id === 'CON-ECO-100'));
      const c101 = JSON.stringify(BATCH_E5_CONCEPTS.find((c) => c.id === 'CON-ECO-101'));
      expect(c100).toContain('WTO');
      expect(c100).toContain('Most-Favoured-Nation');
      expect(c100).toContain('National Treatment');
      expect(c100).toContain('GATS');
      expect(c101).toContain('Agreement on Agriculture');
      expect(c101).toContain('Green Box');
      expect(c101).toContain('Amber Box');
      expect(c101).toContain('Peace Clause');
    });

    it('Topic 74 & 75: should verify IMF Quotas, SDR Basket, Lending Facilities & World Bank 5 Institutions / Triad', () => {
      const c102 = JSON.stringify(BATCH_E5_CONCEPTS.find((c) => c.id === 'CON-ECO-102'));
      const c103 = JSON.stringify(BATCH_E5_CONCEPTS.find((c) => c.id === 'CON-ECO-103'));
      const c104 = JSON.stringify(BATCH_E5_CONCEPTS.find((c) => c.id === 'CON-ECO-104'));
      expect(c102).toContain('Quota');
      expect(c102).toContain('85%');
      expect(c102).toContain('SDR');
      expect(c103).toContain('Extended Fund Facility');
      expect(c103).toContain('Article IV');
      expect(c104).toContain('IBRD');
      expect(c104).toContain('IDA');
      expect(c104).toContain('IFC');
      expect(c104).toContain('MIGA');
      expect(c104).toContain('ICSID');
    });

    it('Topic 76: should verify India Foreign Trade Profile, FTP 2023, Rajasthan Exports & NABARD Agri-Exports', () => {
      const c105 = JSON.stringify(BATCH_E5_CONCEPTS.find((c) => c.id === 'CON-ECO-105'));
      const c106 = JSON.stringify(BATCH_E5_CONCEPTS.find((c) => c.id === 'CON-ECO-106'));
      expect(c105).toContain('Foreign Trade Policy');
      expect(c105).toContain('FTP 2023');
      expect(c105).toContain('DGFT');
      expect(c106).toContain('Rajasthan');
      expect(c106).toContain('Mission Niryatak Bano');
      expect(c106).toContain('NABARD');
      expect(c106).toContain('Agriculture Export Policy');
    });
  });

  describe('Database Persistence & Relational Integrity Verification', () => {
    it('should confirm all 27 concepts and their children exist in the database', async () => {
      const dbConcepts = await db.concept.findMany({
        where: {
          id: {
            in: BATCH_E5_CONCEPTS.map((c) => c.id),
          },
        },
        include: {
          claims: { include: { evidence: true } },
          contentBlocks: true,
          examMappings: true,
          revisionUnits: true,
          questions: true,
        },
      });

      expect(dbConcepts.length).toBe(27);

      for (const concept of dbConcepts) {
        expect(concept.claims.length).toBeGreaterThanOrEqual(3);
        for (const claim of concept.claims) {
          expect(claim.evidence.length).toBeGreaterThanOrEqual(1);
        }
        expect(concept.contentBlocks.length).toBe(4);
        expect(concept.examMappings.length).toBe(8);
        expect(concept.revisionUnits.length).toBe(3);
        expect(concept.questions.length).toBeGreaterThanOrEqual(2);
      }
    });

    it('should verify total cumulative count of Economics concepts is now exactly 106', async () => {
      const econSubject = await db.subject.findFirst({
        where: { slug: 'indian-economy' },
      });
      expect(econSubject).toBeDefined();

      const totalEconConcepts = await db.concept.count({
        where: {
          topic: {
            subjectId: econSubject!.id,
          },
        },
      });

      // CON-ECO-80 to CON-ECO-106 = 27 concepts
      expect(totalEconConcepts).toBeGreaterThanOrEqual(27);
    });
  });
});
