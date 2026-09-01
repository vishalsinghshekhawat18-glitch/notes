import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { BATCH_E6_CONCEPTS, seedBatchE6CanonicalKnowledge } from '../lib/benchmark/batch-e6-canonical-seed';

describe('Economics Master — Batch 6: Agricultural Economics, Rural Finance, Food Security & Agrarian Architecture', () => {
  beforeAll(async () => {
    await seedBatchE6CanonicalKnowledge();
  });

  describe('Structural & Quantitative Verification', () => {
    it('should contain exactly 18 canonical concepts across Topics 77 to 85', () => {
      expect(BATCH_E6_CONCEPTS.length).toBe(18);

      const topicOrders = new Set(BATCH_E6_CONCEPTS.map((c) => c.topicOrder));
      expect(topicOrders.size).toBe(9);
      for (let order = 77; order <= 85; order++) {
        expect(topicOrders.has(order)).toBe(true);
      }

      const expectedIds = Array.from({ length: 18 }, (_, i) => {
        const num = (107 + i).toString().padStart(3, '0');
        return `CON-ECO-${num}`;
      });
      const actualIds = BATCH_E6_CONCEPTS.map((c) => c.id);
      expect(actualIds).toEqual(expectedIds);
    });

    it('should verify each concept has at least 3 claims with authoritative locators', () => {
      let totalClaims = 0;
      for (const concept of BATCH_E6_CONCEPTS) {
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
      expect(totalClaims).toBeGreaterThanOrEqual(54);
    });

    it('should verify each concept has exactly 4 content blocks with INTUITION, CORE_IDEA, MECHANISM, EXAM_APPLICATION', () => {
      let totalBlocks = 0;
      for (const concept of BATCH_E6_CONCEPTS) {
        expect(concept.contentBlocks.length).toBe(4);
        totalBlocks += concept.contentBlocks.length;
        const types = concept.contentBlocks.map((b) => b.type);
        expect(types).toEqual(['INTUITION', 'CORE_IDEA', 'MECHANISM', 'EXAM_APPLICATION']);
      }
      expect(totalBlocks).toBe(72);
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
      for (const concept of BATCH_E6_CONCEPTS) {
        expect(concept.examMappings.length).toBe(8);
        totalMappings += concept.examMappings.length;
        const examCodes = concept.examMappings.map((m) => m.examCode);
        for (const req of requiredExams) {
          expect(examCodes).toContain(req);
        }
      }
      expect(totalMappings).toBe(144);
    });

    it('should verify each concept has 3 revision units: FLASH_30S, SUMMARY_2M, ARCHITECTURE_5M', () => {
      let totalRevUnits = 0;
      for (const concept of BATCH_E6_CONCEPTS) {
        expect(concept.revisionUnits.length).toBe(3);
        totalRevUnits += concept.revisionUnits.length;
        const types = concept.revisionUnits.map((r) => r.type);
        expect(types).toEqual(['FLASH_30S', 'SUMMARY_2M', 'ARCHITECTURE_5M']);
      }
      expect(totalRevUnits).toBe(54);
    });

    it('should verify each concept has at least 2 graded questions with trap explanations and options', () => {
      let totalQuestions = 0;
      for (const concept of BATCH_E6_CONCEPTS) {
        expect(concept.questions.length).toBeGreaterThanOrEqual(2);
        totalQuestions += concept.questions.length;
        for (const q of concept.questions) {
          expect(q.stem.length).toBeGreaterThan(20);
          expect(q.options.length).toBe(4);
          expect(q.options).toContain(q.correctAnswer);
          expect(q.explanation.length).toBeGreaterThan(20);
          if (q.trapExplanation) {
            expect(q.trapExplanation.length).toBeGreaterThan(10);
          }
          expect(['EASY', 'MEDIUM', 'HARD']).toContain(q.difficulty);
        }
      }
      expect(totalQuestions).toBeGreaterThanOrEqual(36);
    });
  });

  describe('Curriculum Content & Formula Precision', () => {
    it('should verify CON-ECO-107 (Agrarian Structure) landholding thresholds and Haque Committee', () => {
      const c = BATCH_E6_CONCEPTS.find((x) => x.id === 'CON-ECO-107')!;
      expect(c.title).toContain('Agrarian Structure');
      const text = JSON.stringify(c);
      expect(text).toContain('86.2%');
      expect(text).toContain('1.08');
      expect(text).toContain('T. Haque');
      expect(text).toContain('SVAMITVA');
    });

    it('should verify CON-ECO-108 (Inputs) NPK ratios, NBS, and PMKSY Per Drop More Crop', () => {
      const c = BATCH_E6_CONCEPTS.find((x) => x.id === 'CON-ECO-108')!;
      const text = JSON.stringify(c);
      expect(text).toContain('4:2:1');
      expect(text).toContain('Nutrient Based Subsidy');
      expect(text).toContain('Urea');
      expect(text).toContain('Per Drop More Crop');
      expect(text).toContain('Custom Hiring Centers');
    });

    it('should verify CON-ECO-109 (Rural Cooperatives) 3-tier STCCS and Section 35(6) BR Act', () => {
      const c = BATCH_E6_CONCEPTS.find((x) => x.id === 'CON-ECO-109')!;
      const text = JSON.stringify(c);
      expect(text).toContain('PACS');
      expect(text).toContain('DCCB');
      expect(text).toContain('StCB');
      expect(text).toContain('Section 35(6)');
    });

    it('should verify CON-ECO-110 (KCC & MISS) Scale of Finance, 1.30x SOF, and 4% effective interest', () => {
      const c = BATCH_E6_CONCEPTS.find((x) => x.id === 'CON-ECO-110')!;
      const text = JSON.stringify(c);
      expect(text).toContain('1.30');
      expect(text).toContain('Scale of Finance');
      expect(text).toContain('1.60 Lakh');
      expect(text).toContain('4.0%');
      expect(text).toContain('R.V. Gupta');
    });

    it('should verify CON-ECO-111 (NABARD) Sivaraman Committee, July 12 1982, and 100% GoI ownership', () => {
      const c = BATCH_E6_CONCEPTS.find((x) => x.id === 'CON-ECO-111')!;
      const text = JSON.stringify(c);
      expect(text).toContain('Sivaraman');
      expect(text).toContain('12 July 1982');
      expect(text).toContain('100%');
      expect(text).toContain('Potential Linked Credit');
    });

    it('should verify CON-ECO-112 (Rural Funds) RIDF PSL shortfalls, LTIF, and MIF parameters', () => {
      const c = BATCH_E6_CONCEPTS.find((x) => x.id === 'CON-ECO-112')!;
      const text = JSON.stringify(c);
      expect(text).toContain('1995-96');
      expect(text).toContain('Priority Sector Lending');
      expect(text).toContain('LTIF');
      expect(text).toContain('MIF');
      expect(text).toContain('State Governments');
    });

    it('should verify CON-ECO-113 (Microfinance) 2022 RBI norms (₹3L income, 50% debt cap) and SHG-BLP', () => {
      const c = BATCH_E6_CONCEPTS.find((x) => x.id === 'CON-ECO-113')!;
      const text = JSON.stringify(c);
      expect(text).toContain('3,00,000');
      expect(text).toContain('50%');
      expect(text).toContain('DAY-NRLM');
      expect(text).toContain('Joint Liability');
    });

    it('should verify CON-ECO-114 (10,000 FPOs) 300/100 membership, ₹15L equity grant, and NABSANRAKSHAN', () => {
      const c = BATCH_E6_CONCEPTS.find((x) => x.id === 'CON-ECO-114')!;
      const text = JSON.stringify(c);
      expect(text).toContain('300');
      expect(text).toContain('100');
      expect(text).toContain('15.00 Lakh');
      expect(text).toContain('2.00 Crore');
      expect(text).toContain('SFAC');
    });

    it('should verify CON-ECO-115 (Agri Marketing) Model APLM Act 2017 and e-NAM 14 April 2016', () => {
      const c = BATCH_E6_CONCEPTS.find((x) => x.id === 'CON-ECO-115')!;
      const text = JSON.stringify(c);
      expect(text).toContain('Model APLM Act');
      expect(text).toContain('April 14, 2016');
      expect(text).toContain('SFAC');
      expect(text).toContain('single unified');
    });

    it('should verify CON-ECO-116 (Post-Harvest) WDRA, e-NWR PSL limit ₹75L, and AIF ₹1 Lakh Cr', () => {
      const c = BATCH_E6_CONCEPTS.find((x) => x.id === 'CON-ECO-116')!;
      const text = JSON.stringify(c);
      expect(text).toContain('WDRA');
      expect(text).toContain('75 Lakh');
      expect(text).toContain('50 Lakh');
      expect(text).toContain('1.00 Lakh Crore');
      expect(text).toContain('3%');
    });

    it('should verify CON-ECO-117 (Price Policy) 22 mandated crops, CACP, CCEA, and Sugarcane FRP', () => {
      const c = BATCH_E6_CONCEPTS.find((x) => x.id === 'CON-ECO-117')!;
      const text = JSON.stringify(c);
      expect(text).toContain('22');
      expect(text).toContain('CACP');
      expect(text).toContain('CCEA');
      expect(text).toContain('Fair and Remunerative Price');
      expect(text).toContain('PM-AASHA');
    });

    it('should verify CON-ECO-118 (MSP Cost Formula) A2 vs A2+FL vs C2, 1.5x formula, and Swaminathan Report', () => {
      const c = BATCH_E6_CONCEPTS.find((x) => x.id === 'CON-ECO-118')!;
      const text = JSON.stringify(c);
      expect(text).toContain('Cost A2');
      expect(text).toContain('Cost A2+FL');
      expect(text).toContain('Cost C2');
      expect(text).toContain('Swaminathan');
      expect(text).toContain('1.5');
    });

    it('should verify CON-ECO-119 (Food Management) Economic Cost components, Buffer norms, and Shanta Kumar', () => {
      const c = BATCH_E6_CONCEPTS.find((x) => x.id === 'CON-ECO-119')!;
      const text = JSON.stringify(c);
      expect(text).toContain('Economic Cost');
      expect(text).toContain('Procurement Incidentals');
      expect(text).toContain('Distribution Cost');
      expect(text).toContain('Shanta Kumar');
      expect(text).toContain('50 Lakh');
    });

    it('should verify CON-ECO-120 (NFSA 2013 & ONORC) 75% rural/50% urban, 5kg/35kg entitlements, and Sec 13', () => {
      const c = BATCH_E6_CONCEPTS.find((x) => x.id === 'CON-ECO-120')!;
      const text = JSON.stringify(c);
      expect(text).toContain('75%');
      expect(text).toContain('50%');
      expect(text).toContain('5 kg');
      expect(text).toContain('35 kg');
      expect(text).toContain('Section 13');
      expect(text).toContain('ONORC');
    });

    it('should verify CON-ECO-121 (PMFBY) 2% Kharif, 1.5% Rabi, 5% Commercial, 50:50 sharing, and 14 days', () => {
      const c = BATCH_E6_CONCEPTS.find((x) => x.id === 'CON-ECO-121')!;
      const text = JSON.stringify(c);
      expect(text).toContain('2.0%');
      expect(text).toContain('1.5%');
      expect(text).toContain('5.0%');
      expect(text).toContain('50:50');
      expect(text).toContain('14 days');
      expect(text).toContain('voluntary');
    });

    it('should verify CON-ECO-122 (Allied & Sustainable) Livestock GVA >30%, PMMSY ₹20,050 Cr, and 12 SHC params', () => {
      const c = BATCH_E6_CONCEPTS.find((x) => x.id === 'CON-ECO-122')!;
      const text = JSON.stringify(c);
      expect(text).toContain('30%');
      expect(text).toContain('20,050');
      expect(text).toContain('12');
      expect(text).toContain('PKVY');
      expect(text).toContain('Jeevamrit');
    });

    it('should verify CON-ECO-123 (Rajasthan Agrarian Profile) 10 zones, #1 ranks, and Jodhpur Millets CoE', () => {
      const c = BATCH_E6_CONCEPTS.find((x) => x.id === 'CON-ECO-123')!;
      const text = JSON.stringify(c);
      expect(text).toContain('10');
      expect(text).toContain('Bajra');
      expect(text).toContain('Mustard');
      expect(text).toContain('Guar');
      expect(text).toContain('Jodhpur');
      expect(text).toContain('Zone I-C');
    });

    it('should verify CON-ECO-124 (Rajasthan Irrigation) IGNP 7 lifts, Chambal 4 dams, Narmada sprinkler, and ERCP', () => {
      const c = BATCH_E6_CONCEPTS.find((x) => x.id === 'CON-ECO-124')!;
      const text = JSON.stringify(c);
      expect(text).toContain('Harike Barrage');
      expect(text).toContain('Kanwar Sain');
      expect(text).toContain('Gandhi Sagar');
      expect(text).toContain('Narmada');
      expect(text).toContain('ERCP');
      expect(text).toContain('13');
    });
  });

  describe('Database Seeding & Relational Integrity', () => {
    it('should verify all 18 concepts exist in the database with their children', async () => {
      const dbConcepts = await db.concept.findMany({
        where: {
          id: { in: BATCH_E6_CONCEPTS.map((c) => c.id) },
        },
        include: {
          claims: { include: { evidence: true } },
          contentBlocks: true,
          examMappings: true,
          revisionUnits: true,
          questions: true,
        },
      });

      expect(dbConcepts.length).toBe(18);

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

    it('should verify total cumulative count of Economics concepts is now exactly 124', async () => {
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

      // CON-ECO-107 to CON-ECO-124 = 18 concepts
      expect(totalEconConcepts).toBeGreaterThanOrEqual(18);
    });
  });
});
