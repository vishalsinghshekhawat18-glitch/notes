import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { seedIIBFMasterCanonicalKnowledge } from '../lib/benchmark/batch-iibf-master-canonical-seed';

describe('IIBF & Banking Regulations Master Modernization Certification Suite', () => {
  beforeAll(async () => {
    await seedIIBFMasterCanonicalKnowledge();
  });
  it('A: Subject & Domain Integrity — iibf-banking-regulations in banking-and-finance', async () => {
    const subject = await db.subject.findUnique({
      where: { slug: 'iibf-banking-regulations' },
      include: { domain: true },
    });

    expect(subject).toBeDefined();
    expect(subject?.name).toBe('IIBF & Banking Regulations');
    expect(subject?.domain.slug).toBe('banking-and-finance');
    expect(subject?.scopeStatement).toContain('Canonical knowledge base for IIBF & Banking Regulations');
  });

  it('B: Topic Architecture — Exactly 25 Canonical Topics (Order 38 to 62)', async () => {
    const topics = await db.topic.findMany({
      where: { subject: { slug: 'iibf-banking-regulations' } },
      orderBy: { order: 'asc' },
    });

    expect(topics.length).toBe(25);
    expect(topics[0].order).toBe(38);
    expect(topics[24].order).toBe(62);

    const expectedSlugs = [
      'rbi-constitution-governance-statutory-powers',
      'banking-regulation-act-licensing-governance-operations',
      'liquidity-reserve-requirements-crr-slr-assets',
      'banker-customer-relationship-legal-foundations-rights',
      'special-types-customers-account-operations',
      'nomination-deceased-claims-inoperative-accounts',
      'garnishee-attachment-orders-statutory-claims',
      'negotiable-instruments-characteristics-types-parties',
      'endorsement-crossing-material-alteration-instruments',
      'paying-banker-collecting-banker-statutory-protection',
      'cheque-dishonour-section-138-ni-act-remedies',
      'principles-sound-lending-credit-appraisal-working-capital',
      'non-fund-based-facilities-letters-of-credit-guarantees',
      'securities-bank-advances-mortgages-charge-creation',
      'securities-bank-advances-hypothecation-pledge-assignment',
      'sarfaesi-act-enforcement-security-interest',
      'debt-recovery-tribunals-commercial-recovery-mechanisms',
      'insolvency-bankruptcy-code-bankers',
      'prudential-norms-asset-classification-provisioning-stressed-assets',
      'basel-iii-framework-capital-adequacy-leverage-liquidity',
      'kyc-aml-pmla-framework-banking-operations',
      'payment-settlement-systems-act-digital-banking-cyber-security',
      'customer-protection-fair-lending-ombudsman-schemes',
      'foreign-exchange-management-act-fema-nri-banking',
      'specialized-banking-institutions-psl-dicgc-coverage',
    ];

    for (let i = 0; i < 25; i++) {
      expect(topics[i].slug).toBe(expectedSlugs[i]);
      expect(topics[i].title.length).toBeGreaterThan(10);
      expect(topics[i].description?.length).toBeGreaterThan(20);
    }
  });

  it('C: Concept Completeness — Exactly 80 Canonical Concepts (CON-BNK-001 to CON-BNK-080)', async () => {
    const concepts = await db.concept.findMany({
      where: {
        topic: { subject: { slug: 'iibf-banking-regulations' } },
      },
      orderBy: { id: 'asc' },
    });

    expect(concepts.length).toBe(80);

    for (let i = 1; i <= 80; i++) {
      const expectedId = `CON-BNK-${i.toString().padStart(3, '0')}`;
      const c = concepts.find((item) => item.id === expectedId);
      expect(c, `Missing concept ${expectedId}`).toBeDefined();
      expect(c?.title.length).toBeGreaterThan(10);
      expect(c?.shortDefinition.length).toBeGreaterThan(25);
    }
  });

  it('D: 4-Block Content Architecture — 320 Total Blocks (INTUITION, CORE_IDEA, MECHANISM, EXAM_APPLICATION)', async () => {
    const concepts = await db.concept.findMany({
      where: {
        topic: { subject: { slug: 'iibf-banking-regulations' } },
      },
      include: {
        contentBlocks: {
          orderBy: { order: 'asc' },
        },
      },
    });

    for (const c of concepts) {
      expect(c.contentBlocks.length, `Concept ${c.id} should have exactly 4 content blocks`).toBe(4);
      const types = c.contentBlocks.map((b) => b.type);
      expect(types).toContain('INTUITION');
      expect(types).toContain('CORE_IDEA');
      expect(types).toContain('MECHANISM');
      expect(types).toContain('EXAM_APPLICATION');

      for (const b of c.contentBlocks) {
        expect(b.title?.length || 0).toBeGreaterThan(5);
        expect(b.body?.length || 0).toBeGreaterThan(50);
      }
    }
  });

  it('E: 8-Exam Differentiation — Exactly 640 Mappings across 8 Exams', async () => {
    const mappings = await db.examConceptMapping.findMany({
      where: {
        concept: {
          topic: { subject: { slug: 'iibf-banking-regulations' } },
        },
      },
      include: { exam: true },
    });

    expect(mappings.length).toBe(640); // 80 concepts * 8 exams

    const expectedExamSlugs = [
      'upsc-apfc',
      'rpsc-ras',
      'rbi-grade-b',
      'nabard-grade-a',
      'sbi-po',
      'ibps-po',
      'sebi-grade-a',
      'iibf-dbf',
    ];

    for (const slug of expectedExamSlugs) {
      const count = mappings.filter((m) => m.exam.slug === slug).length;
      expect(count, `Exam ${slug} should have 80 mappings`).toBe(80);
    }
  });

  it('F: 3-Speed Revision Layer — Exactly 240 Units (FLASH_30S, SUMMARY_2M, ARCHITECTURE_5M)', async () => {
    const revisionUnits = await db.revisionUnit.findMany({
      where: {
        concept: {
          topic: { subject: { slug: 'iibf-banking-regulations' } },
        },
      },
    });

    expect(revisionUnits.length).toBe(240); // 80 concepts * 3 speeds

    const concepts = await db.concept.findMany({
      where: {
        topic: { subject: { slug: 'iibf-banking-regulations' } },
      },
      include: { revisionUnits: true },
    });

    for (const c of concepts) {
      expect(c.revisionUnits.length).toBe(3);
      const types = c.revisionUnits.map((r) => r.type);
      expect(types).toContain('FLASH_30S');
      expect(types).toContain('SUMMARY_2M');
      expect(types).toContain('ARCHITECTURE_5M');
      for (const r of c.revisionUnits) {
        expect(r.content.length).toBeGreaterThan(20);
      }
    }
  });

  it('G: Practice Bank Quality — >= 160 Questions with Complete Explanations & Mandatory Traps', async () => {
    const questions = await db.question.findMany({
      where: {
        concept: {
          topic: { subject: { slug: 'iibf-banking-regulations' } },
        },
      },
    });

    expect(questions.length).toBeGreaterThanOrEqual(160);

    for (const q of questions) {
      expect(q.stem.length).toBeGreaterThan(15);
      expect(q.options).toBeDefined();
      expect(q.correctAnswer.length).toBeGreaterThanOrEqual(1);
      expect(q.explanation.length).toBeGreaterThan(15);
      expect(q.trapExplanation).toBeDefined();
      expect(q.trapExplanation?.length).toBeGreaterThan(10);
    }
  });

  it('H: Claims & Evidence Provenance — >= 240 Claims with Valid Locators & Excerpts', async () => {
    const concepts = await db.concept.findMany({
      where: {
        topic: { subject: { slug: 'iibf-banking-regulations' } },
      },
      include: {
        claims: {
          include: { evidence: true },
        },
      },
    });

    for (const c of concepts) {
      expect(c.claims.length).toBeGreaterThanOrEqual(3);
      for (const cl of c.claims) {
        expect(cl.statement.length).toBeGreaterThan(15);
        expect(cl.evidence.length).toBeGreaterThanOrEqual(1);
        expect(cl.evidence[0]?.locator).toBeDefined();
        expect(cl.evidence[0]?.excerpt?.length || 0).toBeGreaterThan(5);
      }
    }
  });

  it('I: 2026 Regulatory Freshness — Fair Lending 2024 (Penal Charges Ban)', async () => {
    const fairLendingConcept = await db.concept.findFirst({
      where: { id: 'CON-BNK-075' },
      include: { contentBlocks: true, claims: true },
    });

    expect(fairLendingConcept).toBeDefined();
    const blocksText = fairLendingConcept?.contentBlocks.map((b) => b.body).join(' ') || '';
    expect(blocksText).toContain('Fair Lending');
    expect(blocksText).toContain('compounding');
    expect(blocksText).toMatch(/penal charges/i);
  });

  it('J: 2026 Regulatory Freshness — SBR for NBFCs (Base, Middle, Upper, Top)', async () => {
    const sbrConcept = await db.concept.findFirst({
      where: { id: 'CON-BNK-079' },
      include: { contentBlocks: true },
    });

    expect(sbrConcept).toBeDefined();
    const blocksText = sbrConcept?.contentBlocks.map((b) => b.body).join(' ') || '';
    expect(blocksText).toContain('Scale-Based Regulation');
    expect(blocksText).toContain('Base Layer');
    expect(blocksText).toContain('Middle Layer');
    expect(blocksText).toContain('Upper Layer');
  });

  it('K: 2026 Regulatory Freshness — DICGC 90-Day ₹5L Mandate (Sec 18A)', async () => {
    const dicgcConcept = await db.concept.findFirst({
      where: { id: 'CON-BNK-080' },
      include: { contentBlocks: true, claims: true },
    });

    expect(dicgcConcept).toBeDefined();
    const blocksText = dicgcConcept?.contentBlocks.map((b) => b.body).join(' ') || '';
    expect(blocksText).toMatch(/90[- ]day/i);
    expect(blocksText).toContain('5,00,000');
    expect(blocksText).toContain('Section 18A');
  });

  it('L: 2026 Regulatory Freshness — KYC 6 OVDs, CKYCR & V-CIP 2024 Updates', async () => {
    const kycConcept = await db.concept.findFirst({
      where: { id: 'CON-BNK-067' },
      include: { contentBlocks: true, claims: true },
    });

    expect(kycConcept).toBeDefined();
    const blocksText = kycConcept?.contentBlocks.map((b) => b.body).join(' ') || '';
    expect(blocksText).toContain('Officially Valid Documents');
    expect(blocksText).toContain('CKYCR');
    expect(blocksText).toContain('V-CIP');
  });

  it('M: 2026 Regulatory Freshness — RBI Integrated Ombudsman Scheme 2021 (CRPC Chandigarh, ₹20L/₹1L)', async () => {
    const ombudsmanConcept = await db.concept.findFirst({
      where: { id: 'CON-BNK-073' },
      include: { contentBlocks: true },
    });

    expect(ombudsmanConcept).toBeDefined();
    const blocksText = ombudsmanConcept?.contentBlocks.map((b) => b.body).join(' ') || '';
    expect(blocksText).toContain('Integrated Ombudsman');
    expect(blocksText).toContain('CRPC');
    expect(blocksText).toContain('20 Lakh');
  });

  it('N: 2026 Regulatory Freshness — Digital Lending Guidelines (REs vs LSPs, KFS, APR)', async () => {
    const digitalLendingConcept = await db.concept.findFirst({
      where: { id: 'CON-BNK-071' },
      include: { contentBlocks: true },
    });

    expect(digitalLendingConcept).toBeDefined();
    const blocksText = digitalLendingConcept?.contentBlocks.map((b) => b.body).join(' ') || '';
    expect(blocksText).toContain('Digital Lending Guidelines');
    expect(blocksText).toContain('Key Fact Statement');
    expect(blocksText).toContain('Lending Service Provider');
  });

  it('O: 2026 Regulatory Freshness — PSSA 2007 Section 23 Settlement Finality & Netting', async () => {
    const pssaConcept = await db.concept.findFirst({
      where: { id: 'CON-BNK-069' },
      include: { contentBlocks: true },
    });

    expect(pssaConcept).toBeDefined();
    const blocksText = pssaConcept?.contentBlocks.map((b) => b.body).join(' ') || '';
    expect(blocksText).toContain('Payment and Settlement Systems Act');
    expect(blocksText).toContain('Section 23');
    expect(blocksText).toContain('netting');
  });

  it('P: Statutory Recovery & Resolution — SARFAESI Sec 31, DRT ₹20L & IBC CIRP/PPIRP', async () => {
    // SARFAESI Sec 31
    const sarfaesiConcept = await db.concept.findFirst({
      where: { id: 'CON-BNK-046' },
      include: { contentBlocks: true },
    });
    expect(sarfaesiConcept).toBeDefined();
    const sarfaesiText = sarfaesiConcept?.contentBlocks.map((b) => b.body).join(' ') || '';
    expect(sarfaesiText).toContain('Section 31');
    expect(sarfaesiText).toContain('Agricultural Land');

    // DRT ₹20L
    const drtConcept = await db.concept.findFirst({
      where: { id: 'CON-BNK-051' },
      include: { contentBlocks: true },
    });
    expect(drtConcept).toBeDefined();
    const drtText = drtConcept?.contentBlocks.map((b) => b.body).join(' ') || '';
    expect(drtText).toContain('20 Lakh');

    // IBC PPIRP
    const ppirpConcept = await db.concept.findFirst({
      where: { id: 'CON-BNK-057' },
      include: { contentBlocks: true },
    });
    expect(ppirpConcept).toBeDefined();
    const ppirpText = ppirpConcept?.contentBlocks.map((b) => b.body).join(' ') || '';
    expect(ppirpText).toContain('Pre-Packaged');
    expect(ppirpText).toContain('120');
    expect(ppirpText).toContain('MSME');
  });
});
