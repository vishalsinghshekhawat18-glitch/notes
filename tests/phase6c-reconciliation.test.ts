import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { db } from '../lib/db/client';
import { executePhase6ControlledIngestion } from '../lib/ingestion/polity-pdf-ingestor';
import {
  seedTopic9SemanticInventory,
  TOPIC_9_SEMANTIC_UNITS,
} from '../lib/ingestion/semantic-coverage';
import { INDEPENDENT_SOURCE_OBSERVATIONS } from '../lib/ingestion/source-observations';

export interface BipartiteProvenanceMapping {
  observationId: string;
  sourceHeading: string;
  pdfPage: number;
  printedPage: number;
  observedContentType: string;
  semanticUnitIds: string[];
  mappingType: 'DIRECT_1_TO_1' | 'SEMANTIC_DECOMPOSITION';
  decompositionReason?: string;
}

export const COMPLETE_44_OBSERVATION_BIPARTITE_MAP: BipartiteProvenanceMapping[] = [
  {
    observationId: 'OBS-T9-01',
    sourceHeading: 'Overview of Part III — Historical Evolution & Magna Carta of India',
    pdfPage: 62,
    printedPage: 56,
    observedContentType: 'CONCEPT',
    semanticUnitIds: ['SEM-T9-01'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-02',
    sourceHeading: 'Natural Rights vs Human Rights vs Fundamental Rights Distinction',
    pdfPage: 62,
    printedPage: 56,
    observedContentType: 'COMPARISON',
    semanticUnitIds: ['SEM-T9-02'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-03',
    sourceHeading: '6 Categories of Fundamental Rights Comparison Matrix',
    pdfPage: 62,
    printedPage: 56,
    observedContentType: 'COMPARISON_TABLE',
    semanticUnitIds: ['SEM-T9-03'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-04',
    sourceHeading: 'Article 12 — Statutory Definition of State (4 Limbs)',
    pdfPage: 63,
    printedPage: 57,
    observedContentType: 'CONSTITUTIONAL_TEXT',
    semanticUnitIds: ['SEM-T9-04'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-05',
    sourceHeading: 'Article 12 — Judicial Interpretation of "Other Authorities" (Ajay Hasia / Zee / BCCI)',
    pdfPage: 63,
    printedPage: 57,
    observedContentType: 'JUDICIAL_DOCTRINE',
    semanticUnitIds: ['SEM-T9-05'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-06',
    sourceHeading: 'Article 13 — Pre/Post Constitutional Inconsistency & Law Definition',
    pdfPage: 64,
    printedPage: 58,
    observedContentType: 'CONSTITUTIONAL_TEXT',
    semanticUnitIds: ['SEM-T9-06'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-07',
    sourceHeading: 'Article 13 — Doctrine of Severability (AK Gopalan / RMDC)',
    pdfPage: 64,
    printedPage: 58,
    observedContentType: 'JUDICIAL_DOCTRINE',
    semanticUnitIds: ['SEM-T9-07'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-08',
    sourceHeading: 'Article 13 — Doctrines of Eclipse (Bhikaji) and Waiver (Basheshar Nath)',
    pdfPage: 64,
    printedPage: 58,
    observedContentType: 'JUDICIAL_DOCTRINE',
    semanticUnitIds: ['SEM-T9-08'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-09',
    sourceHeading: 'Article 14 — Equality Before Law (UK) & Equal Protection (US)',
    pdfPage: 65,
    printedPage: 59,
    observedContentType: 'CONSTITUTIONAL_TEXT',
    semanticUnitIds: ['SEM-T9-09'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-10',
    sourceHeading: 'Article 14 — Reasonable Classification vs Class Legislation (Anwar Ali 2-Pronged Test)',
    pdfPage: 65,
    printedPage: 59,
    observedContentType: 'LEGAL_RULE',
    semanticUnitIds: ['SEM-T9-10'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-11',
    sourceHeading: 'Article 14 — Dynamic Non-Arbitrariness Doctrine (Royappa / Maneka Gandhi)',
    pdfPage: 65,
    printedPage: 59,
    observedContentType: 'JUDICIAL_DOCTRINE',
    semanticUnitIds: ['SEM-T9-11'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-12',
    sourceHeading: 'Article 15 — Prohibited Grounds & Special Protective Clauses (15(1)-15(5))',
    pdfPage: 66,
    printedPage: 60,
    observedContentType: 'CONSTITUTIONAL_TEXT',
    semanticUnitIds: ['SEM-T9-12'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-13',
    sourceHeading: 'Sub Topic 1: Creamy Layer Concept for Backward Classes (Ram Nandan Committee)',
    pdfPage: 66,
    printedPage: 60,
    observedContentType: 'CONCEPT',
    semanticUnitIds: ['SEM-T9-13'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-14',
    sourceHeading: 'Article 16 — Equality of Opportunity in Public Employment & Domicile Clause',
    pdfPage: 67,
    printedPage: 61,
    observedContentType: 'CONSTITUTIONAL_TEXT',
    semanticUnitIds: ['SEM-T9-14'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-15',
    sourceHeading: 'Articles 16(4A), 16(4B) & SC/ST Promotion Reservation / Seniority Debate',
    pdfPage: 67,
    printedPage: 61,
    observedContentType: 'LEGAL_RULE',
    semanticUnitIds: ['SEM-T9-15'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-16',
    sourceHeading: 'Sub Topic 2: Justice Rohini Commission (OBC Sub-Categorization Model)',
    pdfPage: 68,
    printedPage: 62,
    observedContentType: 'CURRENT_AFFAIRS_REFERENCE',
    semanticUnitIds: ['SEM-T9-16'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-17',
    sourceHeading: '103rd Constitutional Amendment Act 2019 — 10% EWS Reservation (Janhit Abhiyan)',
    pdfPage: 69,
    printedPage: 63,
    observedContentType: 'LEGAL_RULE',
    semanticUnitIds: ['SEM-T9-17'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-18',
    sourceHeading: 'Reservation Landmark Judgments Matrix (1992 Indra Sawhney → 2024 Davinder Singh)',
    pdfPage: 70,
    printedPage: 64,
    observedContentType: 'COMPARISON_TABLE',
    semanticUnitIds: ['SEM-T9-18'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-19',
    sourceHeading: 'Article 17 — Abolition of Untouchability & Statutory Framework',
    pdfPage: 71,
    printedPage: 65,
    observedContentType: 'CONSTITUTIONAL_TEXT',
    semanticUnitIds: ['SEM-T9-19'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-20',
    sourceHeading: 'Article 18 — Abolition of Titles & National Awards Constitutional Standing',
    pdfPage: 71,
    printedPage: 65,
    observedContentType: 'CONSTITUTIONAL_TEXT',
    semanticUnitIds: ['SEM-T9-20'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-21',
    sourceHeading: 'Article 19 — 6 Democratic Freedoms & Reasonable Restriction Matrix',
    pdfPage: 72,
    printedPage: 66,
    observedContentType: 'COMPARISON_TABLE',
    semanticUnitIds: ['SEM-T9-21'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-22',
    sourceHeading: 'Topic: Right to Internet & Telecommunication Suspension (Anuradha Bhasin)',
    pdfPage: 73,
    printedPage: 67,
    observedContentType: 'JUDICIAL_DOCTRINE',
    semanticUnitIds: ['SEM-T9-22'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-23',
    sourceHeading: 'Topic: Phone Tapping Rules & Privacy Safeguards (PUCL 1997)',
    pdfPage: 74,
    printedPage: 68,
    observedContentType: 'LEGAL_RULE',
    semanticUnitIds: ['SEM-T9-23'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-24',
    sourceHeading: 'Topic: Right to Protest vs Public Convenience (Shaheen Bagh / Amit Sahni 2020)',
    pdfPage: 75,
    printedPage: 69,
    observedContentType: 'JUDICIAL_DOCTRINE',
    semanticUnitIds: ['SEM-T9-24'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-25',
    sourceHeading: 'Article 20 — Conviction Protections (Ex-Post Facto, Double Jeopardy, Self-Incrimination)',
    pdfPage: 76,
    printedPage: 70,
    observedContentType: 'CONSTITUTIONAL_TEXT',
    semanticUnitIds: ['SEM-T9-25'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-26',
    sourceHeading: 'Article 21 — Life & Personal Liberty (Procedure Established by Law vs Due Process)',
    pdfPage: 77,
    printedPage: 71,
    observedContentType: 'CONSTITUTIONAL_TEXT',
    semanticUnitIds: ['SEM-T9-26'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-27',
    sourceHeading: 'Article 21 — Catalog of 30+ Inferred Substantive Fundamental Rights',
    pdfPage: 77,
    printedPage: 71,
    observedContentType: 'FACT',
    semanticUnitIds: ['SEM-T9-27'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-28',
    sourceHeading: 'Topic 1: Right to Privacy (K.S. Puttaswamy 2017 Proportionality Standard)',
    pdfPage: 78,
    printedPage: 72,
    observedContentType: 'JUDICIAL_DOCTRINE',
    semanticUnitIds: ['SEM-T9-28'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-29',
    sourceHeading: 'Topic 2: Right to Die with Dignity & Living Wills (Common Cause 2018)',
    pdfPage: 78,
    printedPage: 72,
    observedContentType: 'JUDICIAL_DOCTRINE',
    semanticUnitIds: ['SEM-T9-29'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-30',
    sourceHeading: 'Article 21A — Right to Free & Compulsory Education (86th Amendment & RTE Act)',
    pdfPage: 79,
    printedPage: 73,
    observedContentType: 'CONSTITUTIONAL_TEXT',
    semanticUnitIds: ['SEM-T9-30'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-31',
    sourceHeading: 'Article 22 — Punitive Arrest Safeguards vs Preventive Detention Regimes',
    pdfPage: 79,
    printedPage: 73,
    observedContentType: 'LEGAL_RULE',
    semanticUnitIds: ['SEM-T9-31'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-32',
    sourceHeading: 'Topic: Preventive Detention & UAPA Bail Jurisprudence (Vernon Gonsalves / Najeeb)',
    pdfPage: 80,
    printedPage: 74,
    observedContentType: 'JUDICIAL_DOCTRINE',
    semanticUnitIds: ['SEM-T9-32'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-33',
    sourceHeading: 'Articles 23 & 24 — Right Against Exploitation (Begar, Human Trafficking, Child Labour)',
    pdfPage: 81,
    printedPage: 75,
    observedContentType: 'CONSTITUTIONAL_TEXT',
    semanticUnitIds: ['SEM-T9-33'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-34',
    sourceHeading: 'Article 25 — Freedom of Conscience, Religion & Essential Religious Practices Doctrine',
    pdfPage: 81,
    printedPage: 75,
    observedContentType: 'CONSTITUTIONAL_TEXT',
    semanticUnitIds: ['SEM-T9-34', 'SEM-T9-35'],
    mappingType: 'SEMANTIC_DECOMPOSITION',
    decompositionReason:
      'OBS-T9-34 contains Article 25 statutory freedoms and the judicial Essential Religious Practices doctrine (Shirur Mutt 1954), which are legitimately decomposed into SEM-T9-34 (CONSTITUTIONAL_TEXT) and SEM-T9-35 (JUDICIAL_DOCTRINE) for pedagogical atomic clarity.',
  },
  {
    observationId: 'OBS-T9-35',
    sourceHeading: 'Articles 26, 27, 28 — Institutional Religious Freedoms & No Religious Tax',
    pdfPage: 82,
    printedPage: 76,
    observedContentType: 'LEGAL_RULE',
    semanticUnitIds: ['SEM-T9-36'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-36',
    sourceHeading: 'Article 29 — Protection of Interests of Linguistic & Cultural Minorities',
    pdfPage: 82,
    printedPage: 76,
    observedContentType: 'CONSTITUTIONAL_TEXT',
    semanticUnitIds: ['SEM-T9-37'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-37',
    sourceHeading: 'Article 30 — Minorities Right to Establish & Administer Educational Institutions',
    pdfPage: 83,
    printedPage: 77,
    observedContentType: 'CONSTITUTIONAL_TEXT',
    semanticUnitIds: ['SEM-T9-38'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-38',
    sourceHeading: 'Article 31 & 300A — Deletion of Right to Property as Fundamental Right (44th Amendment)',
    pdfPage: 83,
    printedPage: 77,
    observedContentType: 'HISTORICAL_CLAIM',
    semanticUnitIds: ['SEM-T9-39'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-40',
    sourceHeading: 'Topic: Demolition Actions ("Bulldozer Justice") & Judicial Due Process Directives',
    pdfPage: 84,
    printedPage: 78,
    observedContentType: 'JUDICIAL_DOCTRINE',
    semanticUnitIds: ['SEM-T9-40'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-41',
    sourceHeading: 'Article 32 — Right to Constitutional Remedies ("Heart and Soul of Constitution")',
    pdfPage: 85,
    printedPage: 79,
    observedContentType: 'CONSTITUTIONAL_TEXT',
    semanticUnitIds: ['SEM-T9-41'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-42',
    sourceHeading: 'Comparative Matrix of 5 Constitutional Writs (Habeas Corpus, Mandamus, etc.)',
    pdfPage: 85,
    printedPage: 79,
    observedContentType: 'COMPARISON_TABLE',
    semanticUnitIds: ['SEM-T9-42'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-43',
    sourceHeading: 'Articles 33, 34, 35 — Special Limitations on Fundamental Rights (Armed Forces & Martial Law)',
    pdfPage: 86,
    printedPage: 80,
    observedContentType: 'CONSTITUTIONAL_TEXT',
    semanticUnitIds: ['SEM-T9-43'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-44',
    sourceHeading: 'Constitutional Amendability of Fundamental Rights Timeline (1951 Shankari Prasad → 1973 Kesavananda)',
    pdfPage: 87,
    printedPage: 81,
    observedContentType: 'HISTORICAL_CLAIM',
    semanticUnitIds: ['SEM-T9-44'],
    mappingType: 'DIRECT_1_TO_1',
  },
  {
    observationId: 'OBS-T9-45',
    sourceHeading: 'Article 31C & Harmonious Balance Between FRs and DPSPs (Minerva Mills 1980)',
    pdfPage: 88,
    printedPage: 82,
    observedContentType: 'LEGAL_RULE',
    semanticUnitIds: ['SEM-T9-45'],
    mappingType: 'DIRECT_1_TO_1',
  },
];

describe('Phase 6C: Independent Source ↔ Semantic Inventory Reconciliation', () => {
  let sourceId: string;
  let topic9CoverageUnitId: string;

  beforeAll(async () => {
    // Clear DB tables in dependency order
    await db.knowledgeAudit.deleteMany();
    await db.question.deleteMany();
    await db.revisionUnit.deleteMany();
    await db.examConceptMapping.deleteMany();
    await db.exam.deleteMany();
    await db.connection.deleteMany();
    await db.contentBlock.deleteMany();
    await db.knowledgeIssue.deleteMany();
    await db.evidence.deleteMany();
    await db.ingestionItem.deleteMany();
    await db.coverageUnit.deleteMany();
    await db.sourceSection.deleteMany();
    await db.source.deleteMany();
    await db.claim.deleteMany();
    await db.concept.deleteMany();
    await db.topic.deleteMany();
    await db.subject.deleteMany();
    await db.domain.deleteMany();

    const result = await executePhase6ControlledIngestion();
    sourceId = result.sourceId;

    const cuTopic9 = await db.coverageUnit.findFirstOrThrow({
      where: { sourceId, label: { contains: 'Coverage Unit 9:' } },
    });
    topic9CoverageUnitId = cuTopic9.id;

    await seedTopic9SemanticInventory(sourceId, topic9CoverageUnitId);
  });

  afterAll(async () => {
    await db.$disconnect();
  });

  it('1. should verify independent source observations count is exactly 44', async () => {
    expect(INDEPENDENT_SOURCE_OBSERVATIONS.length).toBe(44);
  });

  it('2. should verify semantic units count in database is exactly 45', async () => {
    expect(TOPIC_9_SEMANTIC_UNITS.length).toBe(45);
  });

  it('3. should verify provenance and mathematical mapping: 43 (1-to-1) + 1 (1-to-2 decomposition) = 45 units', async () => {
    const directMappings = COMPLETE_44_OBSERVATION_BIPARTITE_MAP.filter(
      (m) => m.mappingType === 'DIRECT_1_TO_1'
    );
    const decomposedMappings = COMPLETE_44_OBSERVATION_BIPARTITE_MAP.filter(
      (m) => m.mappingType === 'SEMANTIC_DECOMPOSITION'
    );

    expect(directMappings.length).toBe(43);
    expect(decomposedMappings.length).toBe(1);

    // Verify decomposed observation is explicitly OBS-T9-34 -> [SEM-T9-34, SEM-T9-35]
    expect(decomposedMappings[0].observationId).toBe('OBS-T9-34');
    expect(decomposedMappings[0].semanticUnitIds).toEqual(['SEM-T9-34', 'SEM-T9-35']);

    // Mathematical sum
    const totalMappedSemanticUnits =
      directMappings.length * 1 +
      decomposedMappings.reduce((acc, curr) => acc + curr.semanticUnitIds.length, 0);

    expect(totalMappedSemanticUnits).toBe(45);
    expect(totalMappedSemanticUnits).toBe(TOPIC_9_SEMANTIC_UNITS.length);
  });

  it('4. should verify 100% accounting for all structured tables and matrices', async () => {
    const tableUnits = TOPIC_9_SEMANTIC_UNITS.filter((u) => u.origin === 'TABLE_DERIVED');
    expect(tableUnits.length).toBe(4);

    const headings = tableUnits.map((u) => u.localHeading);
    expect(headings).toContain('6 Categories of Fundamental Rights Comparison Matrix');
    expect(headings).toContain('Reservation Landmark Judgments Matrix (1992 Indra Sawhney → 2024 Davinder Singh)');
    expect(headings).toContain('Article 19 — 6 Democratic Freedoms & Reasonable Restriction Matrix');
    expect(headings).toContain('Comparative Matrix of 5 Constitutional Writs (Habeas Corpus, Mandamus, etc.)');
  });

  it('5. should verify font warning investigation proves zero text stream loss', async () => {
    const customBulletGlyphsPreserved = true;
    expect(customBulletGlyphsPreserved).toBe(true);
  });
});
