import { describe, it, expect } from 'vitest';
import { BATCH_E8_CONCEPTS } from '../lib/benchmark/batch-e8-canonical-seed';

describe('Phase Economics Batch 8: Final Capstone Canonical Knowledge Suite', () => {
  it('should contain exactly 18 canonical concepts numbered CON-ECO-143 through CON-ECO-160', () => {
    expect(BATCH_E8_CONCEPTS).toHaveLength(18);
    const ids = BATCH_E8_CONCEPTS.map((c) => c.id);
    for (let i = 143; i <= 160; i++) {
      const expectedId = `CON-ECO-${i.toString().padStart(3, '0')}`;
      expect(ids).toContain(expectedId);
    }
  });

  it('should span Topics 95 through 102 covering complete capstone economics curriculum', () => {
    const topicOrders = new Set(BATCH_E8_CONCEPTS.map((c) => c.topicOrder));
    expect(topicOrders).toEqual(new Set([95, 96, 97, 98, 99, 100, 101, 102]));
  });

  it('should articulate comprehensive claims and evidence with at least 3 claims per concept', () => {
    let totalClaims = 0;
    for (const c of BATCH_E8_CONCEPTS) {
      expect(c.claims.length).toBeGreaterThanOrEqual(3);
      totalClaims += c.claims.length;
      for (const cl of c.claims) {
        expect(cl.statement).toBeTruthy();
        expect(cl.locator).toBeTruthy();
        expect(cl.excerpt).toBeTruthy();
        expect(cl.confidence).toBe('HIGH');
      }
    }
    expect(totalClaims).toBeGreaterThanOrEqual(54);
  });

  it('should provide exactly 4 pedagogical content blocks per concept in strict order', () => {
    const expectedOrder = ['INTUITION', 'CORE_IDEA', 'MECHANISM', 'EXAM_APPLICATION'];
    for (const c of BATCH_E8_CONCEPTS) {
      expect(c.contentBlocks).toHaveLength(4);
      c.contentBlocks.forEach((cb, idx) => {
        expect(cb.type).toBe(expectedOrder[idx]);
        expect(cb.title).toBeTruthy();
        expect(cb.body.length).toBeGreaterThan(100);
      });
    }
  });

  it('should map each concept to all 8 target examinations with differentiated depths', () => {
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

    for (const c of BATCH_E8_CONCEPTS) {
      expect(c.examMappings).toHaveLength(8);
      const mappedExams = c.examMappings.map((m) => m.examCode);
      for (const exam of requiredExams) {
        expect(mappedExams).toContain(exam);
      }
    }
  });

  it('should include 3 revision units per concept in strict order (FLASH_30S, SUMMARY_2M, ARCHITECTURE_5M)', () => {
    const expectedOrder = ['FLASH_30S', 'SUMMARY_2M', 'ARCHITECTURE_5M'];
    for (const c of BATCH_E8_CONCEPTS) {
      expect(c.revisionUnits).toHaveLength(3);
      c.revisionUnits.forEach((ru, idx) => {
        expect(ru.type).toBe(expectedOrder[idx]);
        expect(ru.content.length).toBeGreaterThan(50);
      });
    }
  });

  it('should provide at least 2 rigorous practice questions per concept with valid schemas', () => {
    let totalQuestions = 0;
    for (const c of BATCH_E8_CONCEPTS) {
      expect(c.questions.length).toBeGreaterThanOrEqual(2);
      totalQuestions += c.questions.length;
      for (const q of c.questions) {
        expect(q.stem).toBeTruthy();
        expect(q.options.length).toBeGreaterThanOrEqual(4);
        expect(q.options).toContain(q.correctAnswer);
        expect(q.explanation.length).toBeGreaterThan(30);
        expect(['EASY', 'MEDIUM', 'HARD']).toContain(q.difficulty);
      }
    }
    expect(totalQuestions).toBeGreaterThanOrEqual(36);
  });

  // Topic 95: Planning & NITI Aayog
  it('should accurately capture Five-Year Plan models and NITI Aayog institutional framework in Topic 95', () => {
    const planning = BATCH_E8_CONCEPTS.find((c) => c.id === 'CON-ECO-143');
    expect(planning?.title).toContain('Five-Year Plan Models');
    expect(planning?.contentBlocks.find((b) => b.type === 'CORE_IDEA')?.body).toContain('Harrod-Domar');
    expect(planning?.contentBlocks.find((b) => b.type === 'CORE_IDEA')?.body).toContain('Mahalanobis');

    const niti = BATCH_E8_CONCEPTS.find((c) => c.id === 'CON-ECO-144');
    expect(niti?.title).toContain('NITI Aayog');
    expect(niti?.claims.some((cl) => cl.statement.includes('January 1, 2015'))).toBe(true);
    expect(niti?.claims.some((cl) => cl.statement.includes('Aspirational Districts Programme'))).toBe(true);
  });

  // Topic 96: CPSEs & Disinvestment
  it('should accurately capture Maharatna eligibility criteria, New PSE Policy 2021, and NMP in Topic 96', () => {
    const cpse = BATCH_E8_CONCEPTS.find((c) => c.id === 'CON-ECO-145');
    expect(cpse?.title).toContain('Maharatna');
    expect(cpse?.claims.some((cl) => cl.statement.includes('₹25,000 Crore'))).toBe(true);
    expect(cpse?.claims.some((cl) => cl.statement.includes('₹5,000 Crore'))).toBe(true);
    expect(cpse?.claims.some((cl) => cl.statement.includes('New Public Sector Enterprise (PSE) Policy'))).toBe(true);

    const disinv = BATCH_E8_CONCEPTS.find((c) => c.id === 'CON-ECO-146');
    expect(disinv?.title).toContain('Disinvestment');
    expect(disinv?.claims.some((cl) => cl.statement.includes('DIPAM'))).toBe(true);
    expect(disinv?.claims.some((cl) => cl.statement.includes('₹6.0 Lakh Crore'))).toBe(true);
  });

  // Topic 97: IBC 2016 & GST Architecture
  it('should accurately capture IBC 2016 creditor-in-control, CIRP timelines, and GST federal voting math in Topic 97', () => {
    const ibc = BATCH_E8_CONCEPTS.find((c) => c.id === 'CON-ECO-147');
    expect(ibc?.title).toContain('Insolvency and Bankruptcy Code');
    expect(ibc?.claims.some((cl) => cl.statement.includes('Creditor-in-Control'))).toBe(true);
    expect(ibc?.claims.some((cl) => cl.statement.includes('180 days'))).toBe(true);
    expect(ibc?.claims.some((cl) => cl.statement.includes('Section 53'))).toBe(true);

    const gst = BATCH_E8_CONCEPTS.find((c) => c.id === 'CON-ECO-148');
    expect(gst?.title).toContain('Goods & Services Tax');
    expect(gst?.claims.some((cl) => cl.statement.includes('Article 279A'))).toBe(true);
    expect(gst?.claims.some((cl) => cl.statement.includes('75%'))).toBe(true);
    expect(gst?.claims.some((cl) => cl.statement.includes('14%'))).toBe(true);
  });

  // Topic 98: DPI, India Stack, ONDC, AA & CBDC
  it('should accurately capture DPI India Stack layers, ONDC Beckn protocol, and CBDC pilots in Topic 98', () => {
    const dpi = BATCH_E8_CONCEPTS.find((c) => c.id === 'CON-ECO-149');
    expect(dpi?.title).toContain('Digital Public Infrastructure');
    expect(dpi?.claims.some((cl) => cl.statement.includes('80%'))).toBe(true);
    expect(dpi?.claims.some((cl) => cl.statement.includes('NPCI'))).toBe(true);

    const nextGen = BATCH_E8_CONCEPTS.find((c) => c.id === 'CON-ECO-150');
    expect(nextGen?.title).toContain('ONDC');
    expect(nextGen?.claims.some((cl) => cl.statement.includes('Beckn'))).toBe(true);
    expect(nextGen?.claims.some((cl) => cl.statement.includes('Account Aggregator'))).toBe(true);
    expect(nextGen?.claims.some((cl) => cl.statement.includes('Wholesale CBDC'))).toBe(true);
  });

  // Topic 99: Environmental Economics & Climate Finance
  it('should accurately capture Pigouvian taxes, Coase Theorem, CCTS 2023, and Sovereign Green Bonds in Topic 99', () => {
    const env = BATCH_E8_CONCEPTS.find((c) => c.id === 'CON-ECO-151');
    expect(env?.title).toContain('Environmental Economics');
    expect(env?.claims.some((cl) => cl.statement.includes('Pigouvian Tax'))).toBe(true);
    expect(env?.claims.some((cl) => cl.statement.includes('Coase Theorem'))).toBe(true);

    const climate = BATCH_E8_CONCEPTS.find((c) => c.id === 'CON-ECO-152');
    expect(climate?.title).toContain('Carbon Markets');
    expect(climate?.claims.some((cl) => cl.statement.includes('CCTS'))).toBe(true);
    expect(climate?.claims.some((cl) => cl.statement.includes('₹16,000 Crore'))).toBe(true);
    expect(climate?.claims.some((cl) => cl.statement.includes('Physical Risks'))).toBe(true);
  });

  // Topic 100: Energy Economics & Renewable Transition
  it('should accurately capture crude import dependency, ISPRL SPRs, Panchamrit targets, and Green Hydrogen in Topic 100', () => {
    const energy = BATCH_E8_CONCEPTS.find((c) => c.id === 'CON-ECO-153');
    expect(energy?.title).toContain('Energy Economics');
    expect(energy?.claims.some((cl) => cl.statement.includes('87.7%'))).toBe(true);
    expect(energy?.claims.some((cl) => cl.statement.includes('5.33 Million Metric Tonnes'))).toBe(true);

    const re = BATCH_E8_CONCEPTS.find((c) => c.id === 'CON-ECO-154');
    expect(re?.title).toContain('Renewable Energy Transition');
    expect(re?.claims.some((cl) => cl.statement.includes('500 GW'))).toBe(true);
    expect(re?.claims.some((cl) => cl.statement.includes('2070'))).toBe(true);
    expect(re?.claims.some((cl) => cl.statement.includes('₹19,744 Crore'))).toBe(true);
  });

  // Topic 101: Contemporary International Geo-Economics
  it('should accurately capture G20 deliverables, BRICS expansion, SRVA Rupee settlement, Model BIT 2015, and KABIL in Topic 101', () => {
    const geo = BATCH_E8_CONCEPTS.find((c) => c.id === 'CON-ECO-155');
    expect(geo?.title).toContain('Geo-Economic Diplomacy');
    expect(geo?.claims.some((cl) => cl.statement.includes('African Union'))).toBe(true);
    expect(geo?.claims.some((cl) => cl.statement.includes('Special Rupee Vostro Accounts'))).toBe(true);
    expect(geo?.claims.some((cl) => cl.statement.includes('Egypt, Ethiopia, Iran'))).toBe(true);

    const bits = BATCH_E8_CONCEPTS.find((c) => c.id === 'CON-ECO-156');
    expect(bits?.title).toContain('Bilateral Investment Treaties');
    expect(bits?.claims.some((cl) => cl.statement.includes('5 years'))).toBe(true);
    expect(bits?.claims.some((cl) => cl.statement.includes('Supply Chain Resilience Initiative'))).toBe(true);
    expect(bits?.claims.some((cl) => cl.statement.includes('KABIL'))).toBe(true);
  });

  // Topic 102: Rajasthan Industry, Minerals, Energy & Tourism
  it('should accurately capture Rajasthan industrial structure, mineral monopolies, solar leadership, and tourism policy in Topic 102', () => {
    const rjInd = BATCH_E8_CONCEPTS.find((c) => c.id === 'CON-ECO-157');
    expect(rjInd?.title).toContain('Rajasthan Industrial Economy');
    expect(rjInd?.claims.some((cl) => cl.statement.includes('27.7%'))).toBe(true);
    expect(rjInd?.claims.some((cl) => cl.statement.includes('RIICO'))).toBe(true);
    expect(rjInd?.claims.some((cl) => cl.statement.includes('39%'))).toBe(true);

    const rjMin = BATCH_E8_CONCEPTS.find((c) => c.id === 'CON-ECO-158');
    expect(rjMin?.title).toContain('Rajasthan Minerals');
    expect(rjMin?.claims.some((cl) => cl.statement.includes('Lead-Zinc'))).toBe(true);
    expect(rjMin?.claims.some((cl) => cl.statement.includes('20%'))).toBe(true);
    expect(rjMin?.claims.some((cl) => cl.statement.includes('DMFT'))).toBe(true);

    const rjEng = BATCH_E8_CONCEPTS.find((c) => c.id === 'CON-ECO-159');
    expect(rjEng?.title).toContain('Rajasthan Energy Economy');
    expect(rjEng?.claims.some((cl) => cl.statement.includes('20,000 MW'))).toBe(true);
    expect(rjEng?.claims.some((cl) => cl.statement.includes('Bhadla Solar Park'))).toBe(true);
    expect(rjEng?.claims.some((cl) => cl.statement.includes('81.2'))).toBe(true);

    const rjTour = BATCH_E8_CONCEPTS.find((c) => c.id === 'CON-ECO-160');
    expect(rjTour?.title).toContain('Rajasthan Tourism Economy');
    expect(rjTour?.claims.some((cl) => cl.statement.includes('43.7%'))).toBe(true);
    expect(rjTour?.claims.some((cl) => cl.statement.includes('Industry Status'))).toBe(true);
    expect(rjTour?.claims.some((cl) => cl.statement.includes('Rajasthan Rural Tourism Scheme'))).toBe(true);
  });
});
