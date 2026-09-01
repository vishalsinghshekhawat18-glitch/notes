import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { BATCH_E7_CONCEPTS, seedBatchE7CanonicalKnowledge } from '../lib/benchmark/batch-e7-canonical-seed';

describe('Economics Master — Batch 7: Growth, Development, Poverty, Labour, Wages, Social Security, Demography, Health, Education & Rajasthan Social Economics', () => {
  beforeAll(async () => {
    await seedBatchE7CanonicalKnowledge();
  });

  describe('Structural & Quantitative Verification', () => {
    it('should contain exactly 18 canonical concepts across Topics 86 to 94', () => {
      expect(BATCH_E7_CONCEPTS.length).toBe(18);

      const topicOrders = new Set(BATCH_E7_CONCEPTS.map((c) => c.topicOrder));
      expect(topicOrders.size).toBe(9);
      for (let order = 86; order <= 94; order++) {
        expect(topicOrders.has(order)).toBe(true);
      }

      const expectedIds = Array.from({ length: 18 }, (_, i) => {
        const num = (125 + i).toString().padStart(3, '0');
        return `CON-ECO-${num}`;
      });
      const actualIds = BATCH_E7_CONCEPTS.map((c) => c.id);
      expect(actualIds).toEqual(expectedIds);
    });

    it('should verify each concept has at least 3 claims with authoritative locators', () => {
      let totalClaims = 0;
      for (const concept of BATCH_E7_CONCEPTS) {
        expect(concept.claims.length).toBeGreaterThanOrEqual(3);
        totalClaims += concept.claims.length;
        for (const claim of concept.claims) {
          expect(claim.statement.length).toBeGreaterThan(30);
          expect(claim.locator.length).toBeGreaterThan(5);
          expect(claim.excerpt.length).toBeGreaterThan(5);
          expect(['STATUTORY_RULE', 'CORE_PRINCIPLE', 'HISTORICAL_FACT', 'CENSUS_DATA', 'JUDICIAL_DOCTRINE']).toContain(claim.claimType);
          expect(claim.confidence).toBe('HIGH');
        }
      }
      expect(totalClaims).toBeGreaterThanOrEqual(54);
    });

    it('should verify each concept has exactly 4 content blocks with INTUITION, CORE_IDEA, MECHANISM, EXAM_APPLICATION', () => {
      let totalBlocks = 0;
      for (const concept of BATCH_E7_CONCEPTS) {
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
      for (const concept of BATCH_E7_CONCEPTS) {
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
      for (const concept of BATCH_E7_CONCEPTS) {
        expect(concept.revisionUnits.length).toBe(3);
        totalRevUnits += concept.revisionUnits.length;
        const types = concept.revisionUnits.map((r) => r.type);
        expect(types).toEqual(['FLASH_30S', 'SUMMARY_2M', 'ARCHITECTURE_5M']);
      }
      expect(totalRevUnits).toBe(54);
    });

    it('should verify each concept has at least 2 practice questions with full explanations', () => {
      let totalQuestions = 0;
      for (const concept of BATCH_E7_CONCEPTS) {
        expect(concept.questions.length).toBeGreaterThanOrEqual(2);
        totalQuestions += concept.questions.length;
        for (const q of concept.questions) {
          expect(q.stem.length).toBeGreaterThan(20);
          expect(q.options.length).toBe(4);
          expect(q.options).toContain(q.correctAnswer);
          expect(q.explanation.length).toBeGreaterThan(30);
          expect(['EASY', 'MEDIUM', 'HARD']).toContain(q.difficulty);
        }
      }
      expect(totalQuestions).toBeGreaterThanOrEqual(36);
    });
  });

  describe('Factual & Economic Theory Accuracy Checks', () => {
    it('should verify Harrod-Domar vs Solow growth mechanics (CON-ECO-126)', () => {
      const c = BATCH_E7_CONCEPTS.find((x) => x.id === 'CON-ECO-126')!;
      expect(c).toBeDefined();
      const allText = c.contentBlocks.map((b) => b.body).join(' ');
      expect(allText).toContain('ICOR');
      expect(allText).toContain('Golden Rule');
      expect(allText).toContain('Solow Residual');
    });

    it('should verify Arthur Lewis dual sector model & Lewis Turning Point (CON-ECO-127)', () => {
      const c = BATCH_E7_CONCEPTS.find((x) => x.id === 'CON-ECO-127')!;
      expect(c).toBeDefined();
      const allText = c.contentBlocks.map((b) => b.body).join(' ');
      expect(allText).toContain('Lewis Turning Point');
      expect(allText).toContain('SUBSISTENCE SECTOR');
      expect(allText).toContain('CAPITALIST SECTOR');
    });

    it('should verify HDI and NITI Aayog National MPI 12-indicator formula (CON-ECO-128)', () => {
      const c = BATCH_E7_CONCEPTS.find((x) => x.id === 'CON-ECO-128')!;
      expect(c).toBeDefined();
      const allText = c.contentBlocks.map((b) => b.body).join(' ');
      expect(allText).toContain('Maternal Health');
      expect(allText).toContain('Bank Accounts');
      expect(allText).toContain('Geometric Mean');
    });

    it('should verify Piketty r > g and Lorenz/Gini mathematics (CON-ECO-129)', () => {
      const c = BATCH_E7_CONCEPTS.find((x) => x.id === 'CON-ECO-129')!;
      expect(c).toBeDefined();
      const allText = c.contentBlocks.map((b) => b.body).join(' ');
      expect(allText).toContain('r > g');
      expect(allText).toContain('Palma Ratio');
      expect(allText).toContain('Lorenz Curve');
    });

    it('should verify FGT poverty measures and World Bank 2017 PPP lines (CON-ECO-130)', () => {
      const c = BATCH_E7_CONCEPTS.find((x) => x.id === 'CON-ECO-130')!;
      expect(c).toBeDefined();
      const allText = c.contentBlocks.map((b) => b.body).join(' ');
      expect(allText).toContain('P_0');
      expect(allText).toContain('P_1');
      expect(allText).toContain('P_2');
      expect(allText).toContain('Monotonicity');
    });

    it('should verify Indian Poverty Line Committees: Tendulkar vs Rangarajan (CON-ECO-131)', () => {
      const c = BATCH_E7_CONCEPTS.find((x) => x.id === 'CON-ECO-131')!;
      expect(c).toBeDefined();
      const allText = c.contentBlocks.map((b) => b.body).join(' ');
      expect(allText).toContain('Tendulkar');
      expect(allText).toContain('Rangarajan');
      expect(allText).toContain('816');
      expect(allText).toContain('1000');
      expect(allText).toContain('21.9%');
    });

    it('should verify PLFS Labour Activity Statuses: UPSS, CWS, CDS (CON-ECO-133)', () => {
      const c = BATCH_E7_CONCEPTS.find((x) => x.id === 'CON-ECO-133')!;
      expect(c).toBeDefined();
      const allText = c.contentBlocks.map((b) => b.body).join(' ');
      expect(allText).toContain('UPSS');
      expect(allText).toContain('CWS');
      expect(allText).toContain('CDS');
      expect(allText).toContain('LFPR');
      expect(allText).toContain('WPR');
    });

    it('should verify 15th ILC Needs-Based Minimum Wage & Express Newspapers doctrine (CON-ECO-135)', () => {
      const c = BATCH_E7_CONCEPTS.find((x) => x.id === 'CON-ECO-135')!;
      expect(c).toBeDefined();
      const allText = c.contentBlocks.map((b) => b.body).join(' ');
      expect(allText).toContain('3.0 Consumption Units');
      expect(allText).toContain('2,700 Calories');
      expect(allText).toContain('Raptakos Brett');
    });

    it('should verify Code on Wages 2019 and MGNREGA Section 7 statutory provisions (CON-ECO-136)', () => {
      const c = BATCH_E7_CONCEPTS.find((x) => x.id === 'CON-ECO-136')!;
      expect(c).toBeDefined();
      const allText = c.contentBlocks.map((b) => b.body).join(' ');
      expect(allText).toContain('National Floor Wage');
      expect(allText).toContain('Unemployment Allowance');
      expect(allText).toContain('15 days');
    });

    it('should verify EPFO 12% split and EDLI maximum benefit (CON-ECO-137)', () => {
      const c = BATCH_E7_CONCEPTS.find((x) => x.id === 'CON-ECO-137')!;
      expect(c).toBeDefined();
      const allText = c.contentBlocks.map((b) => b.body).join(' ');
      expect(allText).toContain('8.33%');
      expect(allText).toContain('3.67%');
      expect(allText).toContain('7.0 Lakh');
    });

    it('should verify ESIC 3.25%+0.75% contribution rates and Code on Social Security 2020 (CON-ECO-138)', () => {
      const c = BATCH_E7_CONCEPTS.find((x) => x.id === 'CON-ECO-138')!;
      expect(c).toBeDefined();
      const allText = c.contentBlocks.map((b) => b.body).join(' ');
      expect(allText).toContain('3.25%');
      expect(allText).toContain('0.75%');
      expect(allText).toContain('e-Shram');
      expect(allText).toContain('Maternity Benefit');
    });

    it('should verify Demography NFHS-5 vital statistics & Demographic Dividend (CON-ECO-139)', () => {
      const c = BATCH_E7_CONCEPTS.find((x) => x.id === 'CON-ECO-139')!;
      expect(c).toBeDefined();
      const allText = c.contentBlocks.map((b) => b.body).join(' ');
      expect(allText).toContain('2.0');
      expect(allText).toContain('Demographic Dividend');
      expect(allText).toContain('Year of Great Divide');
    });

    it('should verify NEP 2020 5+3+3+4 and PM-JAY health financing (CON-ECO-140)', () => {
      const c = BATCH_E7_CONCEPTS.find((x) => x.id === 'CON-ECO-140')!;
      expect(c).toBeDefined();
      const allText = c.contentBlocks.map((b) => b.body).join(' ');
      expect(allText).toContain('5+3+3+4');
      expect(allText).toContain('47.1%');
      expect(allText).toContain('5,00,000');
    });

    it('should verify Rajasthan Census 2011 & Gender Literacy parameters (CON-ECO-141)', () => {
      const c = BATCH_E7_CONCEPTS.find((x) => x.id === 'CON-ECO-141')!;
      expect(c).toBeDefined();
      const allText = c.contentBlocks.map((b) => b.body).join(' ');
      expect(allText).toContain('928');
      expect(allText).toContain('888');
      expect(allText).toContain('66.11%');
      expect(allText).toContain('27.07%');
      expect(allText).toContain('Dungarpur');
    });

    it('should verify Rajasthan Minimum Guaranteed Income Act 2023 & Gig Workers Act 2023 (CON-ECO-142)', () => {
      const c = BATCH_E7_CONCEPTS.find((x) => x.id === 'CON-ECO-142')!;
      expect(c).toBeDefined();
      const allText = c.contentBlocks.map((b) => b.body).join(' ');
      expect(allText).toContain('125 Days');
      expect(allText).toContain('15% annual automatic hike');
      expect(allText).toContain('Welfare Cess');
    });
  });

  describe('Database Integrity & Relational Verification', () => {
    it('should confirm 18 concepts exist in the database with correct topic relations', async () => {
      for (const c of BATCH_E7_CONCEPTS) {
        const dbConcept = await db.concept.findUnique({
          where: { id: c.id },
          include: {
            topic: true,
            claims: true,
            contentBlocks: true,
            examMappings: true,
            revisionUnits: true,
            questions: true,
          },
        });
        expect(dbConcept).toBeDefined();
        expect(dbConcept!.topic.order).toBe(c.topicOrder);
        expect(dbConcept!.claims.length).toBeGreaterThanOrEqual(3);
        expect(dbConcept!.contentBlocks.length).toBe(4);
        expect(dbConcept!.examMappings.length).toBe(8);
        expect(dbConcept!.revisionUnits.length).toBe(3);
        expect(dbConcept!.questions.length).toBeGreaterThanOrEqual(2);
      }
    });

    it('should verify all 9 topics (Topics 86 to 94) exist in database', async () => {
      const subject = await db.subject.findFirst({ where: { slug: 'indian-economy' } });
      expect(subject).toBeDefined();

      const topics = await db.topic.findMany({
        where: {
          subjectId: subject!.id,
          order: { gte: 86, lte: 94 },
        },
      });
      expect(topics.length).toBe(9);
    });
  });
});
