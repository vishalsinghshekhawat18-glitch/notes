import { db } from '../db/client';
import { seedBatchP1SemanticInventory } from '../ingestion/batch-p1-semantic-inventory';

export interface BatchP1ConceptSeedDefinition {
  id: string;
  slug: string;
  topicSlug: string;
  topicTitle: string;
  topicOrder: number;
  title: string;
  shortDefinition: string;
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  semanticUnitIds: string[];
  claims: {
    id: string;
    statement: string;
    claimType: string;
    epistemicLevel: 'ESTABLISHED_FACT' | 'INTERPRETATION' | 'DEBATED_CLAIM';
    confidence: 'HIGH' | 'MEDIUM';
    evidenceLocator: string;
  }[];
  contentBlocks: {
    type: 'CORE_IDEA' | 'MECHANISM' | 'DISTINCTION' | 'TIMELINE' | 'MISCONCEPTION_SHIELD' | 'CASE_LAW';
    title: string;
    body: string;
    order: number;
    visibility: 'STANDARD' | 'DEEP_DIVE' | 'EXAM_ONLY';
  }[];
  examMappings: {
    examCode: 'UPSC_CSE' | 'RPSC_RAS' | 'IIBF_DBF';
    examName: string;
    relevance: 'CORE_HIGH_YIELD' | 'IMPORTANT' | 'BACKGROUND';
    weightage: 'HIGH' | 'MEDIUM' | 'LOW';
    syllabusSection: string;
    examNotes: string;
  }[];
  revisionUnits: {
    type: 'FLASH_30S' | 'SUMMARY_2M' | 'ARCHITECTURE_5M';
    content: string;
    priority: 'ESSENTIAL' | 'HIGH_YIELD' | 'DEEP_DIVE';
    order: number;
  }[];
  questions: {
    id: string;
    type: 'CONCEPT_CHECK' | 'EXAM_TRAP' | 'APPLICATION';
    stem: string;
    options: Record<string, string>;
    correctAnswer: string;
    explanation: string;
    trapExplanation?: string;
    difficulty: 'EASY' | 'MEDIUM' | 'HARD';
    isPYQ: boolean;
    pyqYear?: number;
    pyqPaper?: string;
  }[];
}

export const BATCH_P1_CONCEPTS: BatchP1ConceptSeedDefinition[] = [
  // =========================================================================
  // TOPIC 11: THE UNION EXECUTIVE (6 CONCEPTS: CON-T11-01 to CON-T11-06)
  // =========================================================================
  {
    id: 'CON-T11-01',
    slug: 'president-constitutional-status-electoral-college-impeachment',
    topicSlug: 'the-union-executive',
    topicTitle: 'Part V: The Union Executive (President, Vice-President, PM & AG)',
    topicOrder: 11,
    title: 'President of India: Constitutional Status, Electoral College & Impeachment',
    shortDefinition: 'The President as the formal Head of State and supreme commander of armed forces (Art 52-53), the proportional representation electoral college formula (Arts 54-55), and the strict quasi-judicial impeachment procedure for violation of the Constitution (Art 61).',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T11-01', 'SEM-T11-02', 'SEM-T11-03'],
    claims: [
      {
        id: 'CLM-T11-01.1',
        statement: 'Under Article 54, the Presidential Electoral College consists strictly of the elected members of both Houses of Parliament and the elected members of the Legislative Assemblies of States and Union Territories (Delhi, Puducherry via 70th CAA 1992, and J&K), completely excluding all nominated members and all members of State Legislative Councils.',
        claimType: 'CONSTITUTIONAL_ELECTORAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 56, Arts 54-55)',
      },
      {
        id: 'CLM-T11-01.2',
        statement: 'Under Article 61, the President can be impeached only on the sole ground of "Violation of the Constitution" by a Special Majority of not less than two-thirds of the TOTAL MEMBERSHIP of each House of Parliament, in which nominated MPs participate while State MLAs do not.',
        claimType: 'CONSTITUTIONAL_IMPEACHMENT_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 56, Art 61)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The De Jure Head of State in a Parliamentary Republic',
        body: 'In the Indian constitutional architecture, the **President of India (Article 52)** is the **Head of State**, the First Citizen of the Republic, and the Supreme Commander of the Defence Forces (Art 53(2)).\n\nHowever, because India adopted the British parliamentary executive system, the President is a **De Jure (nominal/titular) executive**, while the Prime Minister heading the Council of Ministers is the **De Facto (real) executive**. All executive actions of the Government of India are formally expressed to be taken in the name of the President (Article 77).',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Electoral College Architecture & Parity Formula (Arts 54–55)',
        body: '### Who Votes vs Who Does NOT Vote:\n• **VOTES:**\n  1. **Elected MPs** of Lok Sabha and Rajya Sabha.\n  2. **Elected MLAs** of all 28 State Legislative Assemblies.\n  3. **Elected MLAs** of Union Territories with assemblies (Delhi & Puducherry added by the **70th Constitutional Amendment Act, 1992**).\n• **DOES NOT VOTE:**\n  1. Nominated members of Lok Sabha and Rajya Sabha (12 in RS).\n  2. Nominated members of State Assemblies.\n  3. **All members (elected & nominated) of State Legislative Councils (Vidhan Parishad)**.\n\n### The Value of Votes (Federal Parity Formula):\n1. **Value of 1 MLA Vote:**\n   $$\\text{Value of MLA Vote} = \\frac{\\text{Total Population of State (1971 Census)}}{\\text{Total Elected MLAs in State Assembly}} \\times \\frac{1}{1000}$$\n2. **Value of 1 MP Vote:**\n   $$\\text{Value of MP Vote} = \\frac{\\text{Total Value of Votes of all MLAs of all States}}{\\text{Total Number of Elected MPs (LS + RS)}}$$\n3. **Electoral Quota Required to Win:**\n   $$\\text{Electoral Quota} = \\left( \\frac{\\text{Total Number of Valid Votes Polled}}{2} \\right) + 1$$\n\n• **Dispute Resolution (Article 71):** All doubts and disputes arising in connection with the election of the President are inquired into and decided exclusively by the **Supreme Court of India**, whose decision is final.',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Election vs Impeachment Composition Asymmetry',
        body: '| Dimension | Presidential Election (Art 54) | Presidential Impeachment (Art 61) |\n| :--- | :--- | :--- |\n| **Nominated MPs (LS/RS)** | **NO** (Cannot vote in election) | **YES** (Can vote in impeachment) |\n| **Elected State MLAs** | **YES** (Vote with weighted value) | **NO** (Do not participate) |\n| **MLCs (Legislative Councils)**| **NO** | **NO** |\n| **Ground for Action** | Periodic 5-year vacancy / resignation | Only **"Violation of the Constitution"** |\n| **Majority Required** | Single Transferable Vote Quota ($>50\\%$) | **2/3rd of TOTAL MEMBERSHIP** of each House |',
        order: 3,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'GS Paper II: Union Executive, Election of President & Impeachment.',
        examNotes: 'Repeated UPSC trap: Nominated MPs participate in impeachment but not in election; State MLAs participate in election but not in impeachment. Art 61 requires 2/3rd of TOTAL membership (unique across entire Constitution).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Union Executive, President Election Formula & Powers.',
        examNotes: 'High yield for MLA vote value formula and Rajasthan MLA vote value (129 votes based on 1971 census).',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Constitutional Head of Sovereign Appointments.',
        examNotes: 'President formally appoints RBI Governor and Central Vigilance Commissioner on Government advice.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'President = De jure Head of State. Electoral College = Elected MPs + Elected MLAs (incl. Delhi/Puducherry 70th CAA). Impeachment (Art 61) = Only for "Violation of Constitution", passed by 2/3rd TOTAL membership in both Houses (Nominated MPs vote; MLAs do not). SC decides election disputes (Art 71).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Electoral College:** Only ELECTED MPs and MLAs. No nominated members; no MLCs.\n• **Parity:** 1971 census population used for state vote values; total MLA votes = total MP votes.\n• **Impeachment (Art 61):** 14-day notice signed by 1/4th House -> Passed by 2/3rd TOTAL membership -> Investigating House passes by 2/3rd TOTAL membership -> Removed.\n• **Asymmetry Trap:** Nominated MPs vote in impeachment but not election; MLAs vote in election but not impeachment.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The Presidential election mechanism balances two constitutional imperatives: maintaining national federal parity between the Union and the States through weighted vote values, while ensuring that the President represents the collective federal will rather than a simple Parliamentary majority, reflecting the non-partisan dignity of the head of state.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T11-01-01',
        type: 'CONCEPT_CHECK',
        stem: 'With reference to the election and impeachment of the President of India, which of the following statements is CORRECT?',
        options: {
          A: 'Nominated members of both Houses of Parliament do not participate in either the election or the impeachment of the President.',
          B: 'Elected members of State Legislative Assemblies participate in the election as well as the impeachment of the President.',
          C: 'Nominated members of Parliament participate in the impeachment of the President even though they do not vote in the Presidential election.',
          D: 'An impeachment resolution under Article 61 requires a majority of 2/3rd of members present and voting in each House of Parliament.',
        },
        correctAnswer: 'C',
        explanation: 'Under Article 61, nominated members of either House of Parliament participate in the impeachment process even though they do not have the right to vote in the Presidential election under Article 54. Statement D is incorrect because Art 61 requires 2/3rd of the TOTAL membership of the House, not merely present and voting.',
        trapExplanation: 'Article 61 is the ONLY provision in the Indian Constitution requiring a special majority of 2/3rd of the TOTAL membership of the House.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2018,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T11-02',
    slug: 'president-powers-veto-and-ordinance-making-power',
    topicSlug: 'the-union-executive',
    topicTitle: 'Part V: The Union Executive (President, Vice-President, PM & AG)',
    topicOrder: 11,
    title: "President's Powers: Veto Powers (Art 111) & Ordinance-Making Power (Art 123)",
    shortDefinition: 'The tripartite presidential veto powers over Parliamentary legislation (Absolute, Suspensive, Pocket Veto) and the exceptional legislative power to promulgate Ordinances under Article 123 with strict judicial limitations against re-promulgation (D.C. Wadhwa, Krishna Kumar Singh).',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T11-04'],
    claims: [
      {
        id: 'CLM-T11-02.1',
        statement: 'Under Article 111, the President possesses three types of veto over ordinary Parliamentary bills (Absolute Veto, Suspensive Veto overridden by simple majority, and Pocket Veto), but has no veto over Constitutional Amendment Bills (24th CAA 1971 makes assent mandatory) and cannot use Suspensive Veto for Money Bills.',
        claimType: 'CONSTITUTIONAL_VETO_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 56, Art 111)',
      },
      {
        id: 'CLM-T11-02.2',
        statement: 'Under Article 123, the President can promulgate an Ordinance only when at least one House of Parliament is not in session and immediate action is required; an Ordinance has a maximum validity of 6 months and 6 weeks from reassembly and cannot be re-promulgated repeatedly to bypass the legislature (D.C. Wadhwa 1987, Krishna Kumar Singh 2017).',
        claimType: 'JUDICIAL_ORDINANCE_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 56, Art 123)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Executive Checks on Legislative Enactments',
        body: 'The Constitution equips the President with crucial legislative powers to prevent hasty, ill-considered, or unconstitutional legislation passed by Parliament (Veto power under Article 111) and to handle urgent legislative contingencies when Parliament is in recess (Ordinance-making power under Article 123).',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Three Types of Presidential Veto (Article 111)',
        body: 'When a bill is passed by Parliament and presented to the President under Article 111, the President has three constitutional options:\n\n1. **Absolute Veto:** Withholding assent to the bill, causing it to die completely. Typically exercised regarding private members’ bills, or government bills when the cabinet resigns before presidential assent and the new cabinet advises against it.\n2. **Suspensive Veto:** Returning the bill (if it is **NOT a Money Bill**) for reconsideration of Parliament. If Parliament passes the bill again (with or without amendments) by a **Simple Majority**, the President **MUST give assent**.\n3. **Pocket Veto:** Neither ratifying nor rejecting nor returning the bill, simply keeping it pending on the desk indefinitely. Unlike the US President who must return a bill within 10 days, the Indian Constitution prescribes **no time limit** ("the pocket of the Indian President is larger than that of the American President").\n   - *Historical Landmark:* President **Giani Zail Singh** exercised Pocket Veto in 1986 regarding the controversial *Indian Post Office (Amendment) Bill*.\n\n• **Constitutional Amendment Bills:** The **24th Constitutional Amendment Act, 1971** made it **obligatory** for the President to give assent to an Article 368 Constitutional Amendment Bill (no veto permitted).',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'CASE_LAW',
        title: 'Ordinance Power (Article 123) & Landmark Judicial Checks',
        body: '### Constitutional Conditions for Promulgation:\n1. Promulgated **ONLY when both Houses or either House is NOT in session** (an ordinance cannot be issued when both Houses are in session).\n2. President must be satisfied that circumstances exist which render it **necessary for him to take immediate action**.\n3. Co-extensive with Parliamentary powers (cannot violate Fundamental Rights or Basic Structure).\n4. Maximum duration = **6 Months + 6 Weeks (42 days)** from the reassembly of Parliament.\n\n### Landmark Supreme Court Jurisprudence:\n• ***R.C. Cooper v. Union of India (1970) (Bank Nationalisation Case):*** President’s satisfaction under Article 123 is not final; it can be challenged in court on grounds of *mala fides* or political expediency.\n• ***D.C. Wadhwa v. State of Bihar (1987):*** The Supreme Court held that the **re-promulgation of ordinances** year after year without placing them before the legislature is a **"fraud on the Constitution"** and subversion of democratic governance (in Bihar, 256 ordinances were re-promulgated between 1967 and 1981, some lasting 14 years).\n• ***Krishna Kumar Singh v. State of Bihar (2017, 7-Judge Bench):*** The SC ruled that the requirement to lay an ordinance before the legislature is **mandatory**. Failure to lay it before Parliament is an abuse of constitutional power. An ordinance does not create an irreversible right.',
        order: 3,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'GS Paper II: Executive Legislation (Art 123), Veto Powers & Judicial Review.',
        examNotes: 'UPSC frequently tests the limits of Article 123 (D.C. Wadhwa and Krishna Kumar Singh 2017 judgments) and Pocket Veto mechanics.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Ordinance Making Power of President (Art 123) vs Governor (Art 213).',
        examNotes: 'High yield for comparative tables of Article 123 vs 213 and Suspensive Veto exceptions.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Emergency Banking Enactments.',
        examNotes: 'Banking Regulation (Amendment) Ordinance 2020 was promulgated under Art 123 to bring UCBs under RBI oversight.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Veto (Art 111): Absolute (kills bill), Suspensive (overridden by simple majority; NOT for Money Bills), Pocket (indefinite hold, no time limit). 24th CAA: Assent mandatory for CAAs. Ordinance (Art 123): Only when Parliament in recess; max life 6m + 6w. DC Wadhwa & Krishna Kumar Singh: Re-promulgation is fraud on Constitution.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Veto Powers:** Absolute veto (withhold assent); Suspensive veto (send back; overridden by simple majority; cannot send back Money Bills); Pocket veto (hold indefinitely; used in 1986 Post Office Bill).\n• **24th CAA 1971:** President cannot veto a Constitutional Amendment Bill.\n• **Ordinance Power (123):** Co-extensive with Parliament. Must be laid before Parliament upon reassembly; lapses 6 weeks from meeting date.\n• **Judicial Check:** Satisfaction of President is reviewable; continuous re-promulgation without legislative vote is unconstitutional (DC Wadhwa 1987).',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The ordinance power was conceived by framers not as a parallel source of executive legislation, but as an extraordinary emergency bridge for unforeseen administrative exigencies during legislative recess. Judicial doctrines have systematically ring-fenced Article 123 to prevent executive encroachment upon the primary law-making prerogative of Parliament.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T11-02-01',
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following statements regarding the Ordinance-making power of the President under Article 123 of the Constitution is INCORRECT?',
        options: {
          A: 'An Ordinance can be promulgated only when both Houses of Parliament are not in session, or when either of the two Houses is not in session.',
          B: 'An Ordinance promulgated by the President has the same force and effect as an Act of Parliament.',
          C: 'The President can re-promulgate an Ordinance repeatedly without laying it before Parliament if the executive considers it necessary.',
          D: 'The satisfaction of the President regarding the necessity of immediate action can be questioned in a court of law on grounds of mala fides.',
        },
        correctAnswer: 'C',
        explanation: 'Statement C is incorrect. The Supreme Court in D.C. Wadhwa (1987) and Krishna Kumar Singh (2017) explicitly held that repeated re-promulgation of ordinances without legislative approval is a fraud on the Constitution and subverts parliamentary democracy.',
        trapExplanation: 'An ordinance can be issued even if ONE House is in session, because a bill requires the assent of BOTH Houses to become law.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2017,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T11-03',
    slug: 'president-judicial-and-pardoning-powers-article-72',
    topicSlug: 'the-union-executive',
    topicTitle: 'Part V: The Union Executive (President, Vice-President, PM & AG)',
    topicOrder: 11,
    title: "President's Judicial & Pardoning Powers (Article 72)",
    shortDefinition: 'The executive clemency powers of the President under Article 72 across five forms of mercy (Pardon, Commutation, Remission, Respite, Reprieve) and the judicial review jurisprudence governing executive discretion (Kehar Singh, Maru Ram, Epuru Sudhakar, Shatrughan Chauhan).',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-T11-05'],
    claims: [
      {
        id: 'CLM-T11-03.1',
        statement: 'Under Article 72, the President has the power to grant pardons, reprieves, respites, or remissions of punishment, or to suspend, remit, or commute the sentence of any person convicted of any offence by a Court Martial, against any Union law, or in all cases where the sentence is a sentence of death.',
        claimType: 'CONSTITUTIONAL_CLEMENCY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 56, Art 72)',
      },
      {
        id: 'CLM-T11-03.2',
        statement: 'The pardoning power under Article 72 is an executive power exercised strictly on the aid and advice of the Union Council of Ministers (Maru Ram 1980, Kehar Singh 1989), and is subject to limited judicial review on grounds of mala fides, extraneous considerations, or arbitrary delay violating Article 21 (Epuru Sudhakar 2006, Shatrughan Chauhan 2014).',
        claimType: 'JUDICIAL_CLEMENCY_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 56, Art 72)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Executive Clemency: Correcting Judicial Errors & Humanizing Justice',
        body: 'Article 72 empowers the President to grant executive clemency independent of the judiciary. The purpose of this power is two-fold:\n1. To keep the door open for correcting possible judicial errors or miscarriages of justice which no court of law is competent to admit.\n2. To afford relief from an unduly harsh sentence on compassionate or humanitarian grounds.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The Five Forms of Clemency under Article 72',
        body: '1. **Pardon:** Completely removes both the **punishment** and the **guilt (conviction)** of the offender, restoring them to the legal status of an innocent person as if the offence had never been committed.\n2. **Commutation:** Substitutes a **heavier form of punishment with a lighter form** (e.g. commuting death sentence to life imprisonment, or rigorous imprisonment to simple imprisonment).\n3. **Remission:** Reduces the **quantum/period of sentence without changing its legal character** (e.g. reducing sentence from 10 years rigorous imprisonment to 5 years rigorous imprisonment).\n4. **Respite:** Awards a **lesser sentence than prescribed** on special humanitarian grounds (e.g. pregnancy of a female convict, mental illness, or severe physical disability).\n5. **Reprieve:** Grants a **temporary stay/suspension** on the execution of a sentence (especially a death sentence) for a temporary period to allow the convict time to seek pardon or commutation.',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'CASE_LAW',
        title: 'Landmark Principles Governing Article 72',
        body: '1. ***Maru Ram v. Union of India (1980) & Kehar Singh v. Union of India (1989):***\n   • The President does NOT sit as a court of appeal, but has the sovereign power to scrutinize the evidence afresh and come to a different conclusion from the courts.\n   • **Crucial Rule:** The President does NOT act in personal discretion; Article 72 power must be exercised **strictly on the aid and advice of the Council of Ministers (Ministry of Home Affairs)**.\n   • The petitioner has **no constitutional right to an oral hearing** before the President.\n2. ***Epuru Sudhakar v. Govt of Andhra Pradesh (2006):***\n   • The grant of pardon is not beyond the reach of the judiciary. It is **subject to limited judicial review** if the order was passed without application of mind, with *mala fides*, on extraneous/caste/political considerations, or ignoring relevant materials.\n3. ***Shatrughan Chauhan v. Union of India (2014, 3-Judge Bench):***\n   • Inordinate, unexplained, and unreasonable delay by the executive in deciding mercy petitions constitutes a violation of **Article 21 (Right to Life with Dignity)**, entitling the death row convict to have their sentence commuted to life imprisonment.',
        order: 3,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'GS Paper II: Executive Clemency (Art 72 vs 161) & Judicial Review.',
        examNotes: 'UPSC frequently contrasts Article 72 (President can pardon death sentences and Court Martial) with Article 161 (Governor cannot pardon death sentences or Court Martial).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Pardoning Powers of President & Governor.',
        examNotes: 'High yield for 20-word definitions of Pardon vs Commutation vs Remission vs Respite.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'General Constitutional Framework.',
        examNotes: 'Constitutional power background.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Art 72 Clemency: Pardon (erases guilt + punishment), Commutation (lighter penalty), Remission (lesser duration, same type), Respite (lesser penalty on special ground like pregnancy), Reprieve (temporary stay). Exercised on MHA/Cabinet aid and advice. Subject to limited judicial review for mala fides (Epuru Sudhakar) and undue delay (Shatrughan Chauhan).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **5 Forms:** Pardon (complete clean slate), Commutation (death to life), Remission (10 yrs to 5 yrs), Respite (pregnancy/disability relief), Reprieve (stay of execution).\n• **Scope:** Covers Court Martial, Union laws, and Death sentences.\n• **Cabinet Advice:** President cannot pardon on personal whim; advice of Union Cabinet is binding (Maru Ram 1980).\n• **Judicial Review:** Clemency orders can be reviewed for arbitrariness, corruption, or unexplained inordinate delay (Shatrughan Chauhan 2014).',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Article 72 establishes an essential constitutional equilibrium between the finality of judicial judgments and the sovereign mercy of the republic, ensuring that the judicial system retains integrity while the executive preserves the humanitarian power to remediate sentencing harshness and evidential anomalies.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T11-03-01',
        type: 'CONCEPT_CHECK',
        stem: 'Consider the following statements regarding the pardoning power of the President under Article 72 of the Indian Constitution:\n1. The President exercises the pardoning power on the binding aid and advice of the Union Council of Ministers.\n2. A death convict has a fundamental right to an oral hearing before the President in a mercy petition.\n3. The President’s order granting or rejecting a mercy petition is completely immune from judicial review.\nWhich of the statements given above is/are CORRECT?',
        options: {
          A: '1 only',
          B: '1 and 2 only',
          C: '2 and 3 only',
          D: '1, 2 and 3',
        },
        correctAnswer: 'A',
        explanation: 'Statement 1 is correct (established in Maru Ram 1980 and Kehar Singh 1989). Statement 2 is incorrect because the SC held that there is no right to an oral hearing before the President. Statement 3 is incorrect because the SC held in Epuru Sudhakar (2006) and Shatrughan Chauhan (2014) that clemency orders are subject to limited judicial review on grounds of mala fides, arbitrariness, or inordinate delay.',
        trapExplanation: 'Pardoning is an executive function, not personal prerogative; hence cabinet advice is mandatory.',
        difficulty: 'HARD',
        isPYQ: true,
        pyqYear: 2019,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T11-04',
    slug: 'vice-president-constitutional-status-election-removal',
    topicSlug: 'the-union-executive',
    topicTitle: 'Part V: The Union Executive (President, Vice-President, PM & AG)',
    topicOrder: 11,
    title: 'Vice-President of India: Status, Election (Art 66), Removal (Art 67) & Role',
    shortDefinition: 'The Vice-President as the second-highest constitutional dignitary (Art 63), ex-officio Chairman of Rajya Sabha (Art 64), electoral college comprising all MPs (Art 66), and unique removal procedure by Effective Majority in Rajya Sabha (Art 67).',
    difficulty: 'BEGINNER',
    semanticUnitIds: ['SEM-T11-06'],
    claims: [
      {
        id: 'CLM-T11-04.1',
        statement: 'Under Article 66, the Vice-Presidential Electoral College consists of all members of both Houses of Parliament (both elected and nominated MPs), completely excluding State Legislative Assemblies, and is elected by proportional representation by single transferable vote.',
        claimType: 'CONSTITUTIONAL_ELECTORAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 57, Art 66)',
      },
      {
        id: 'CLM-T11-04.2',
        statement: 'Under Article 67, the Vice-President can be removed from office by a resolution initiated only in the Rajya Sabha and passed by an Effective Majority (majority of all the then members) and agreed to by a Simple Majority in the Lok Sabha, with no formal impeachment or constitutionally specified grounds.',
        claimType: 'CONSTITUTIONAL_REMOVAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 57, Art 67)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Second-Highest Dignitary & Ex-Officio Parliamentary Presiding Officer',
        body: 'The office of the **Vice-President of India (Article 63)** is modeled on the lines of the American Vice-President. The Vice-President occupies the second highest constitutional rank in India.\n\nHowever, the Vice-President holds a dual constitutional persona:\n1. **Ex-Officio Chairman of the Council of States (Rajya Sabha - Article 64):** In normal times, the VP acts as the presiding officer of Rajya Sabha. The VP does NOT draw a salary as Vice-President, but draws the salary and allowances of the **Chairman of Rajya Sabha (Article 97)**.\n2. **Acting President (Article 65):** In the event of a vacancy in the office of the President (death, resignation, removal), the VP acts as President for a maximum period of **6 months** until a new President is elected.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'President vs Vice-President Electoral & Removal Matrix',
        body: '| Parameter | President of India | Vice-President of India |\n| :--- | :--- | :--- |\n| **Electoral College (MPs)** | **Elected MPs ONLY** | **ALL MPs (Elected + Nominated)** |\n| **Electoral College (MLAs)**| **Elected MLAs of States & UTs** | **NO State MLAs** |\n| **Qualifications** | 35 yrs, qualified for **Lok Sabha** | 35 yrs, qualified for **Rajya Sabha** |\n| **Removal Procedure** | Impeachment (Art 61) initiated in either House | Resolution initiated **ONLY in Rajya Sabha** |\n| **Removal Majority** | **2/3rd of TOTAL MEMBERSHIP** of both Houses | **Effective Majority in RS** + **Simple Majority in LS** |\n| **Constitutional Grounds** | "Violation of the Constitution" | **No grounds specified** in Constitution |',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Removal Procedure under Article 67',
        body: '1. **14 Days Notice:** A formal notice of intention to move the resolution must be given at least 14 days in advance.\n2. **Initiation in Rajya Sabha:** The removal resolution can originate **ONLY in the Rajya Sabha** (cannot be introduced in Lok Sabha).\n3. **Effective Majority in Rajya Sabha:** Must be passed by a **"majority of all the then members"** of Rajya Sabha (i.e. Total Membership minus Vacancies).\n4. **Simple Majority in Lok Sabha:** Must be agreed to by the Lok Sabha by a **Simple Majority** (majority of members present and voting).\n5. Upon agreement by Lok Sabha, the Vice-President stands removed from office.',
        order: 3,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'GS Paper II: Vice-President Status, Election & Removal.',
        examNotes: 'Classic UPSC Prelims question: Electoral college differences between President and VP, and Effective Majority removal rule.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Vice-President & Rajya Sabha Chairman Powers.',
        examNotes: 'High yield for casting vote under Art 100 and removal procedure stages.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Constitutional Offices.',
        examNotes: 'Constitutional structure background.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Vice-President (Art 63): Ex-officio Chairman of Rajya Sabha (draws RS Chairman salary). Electoral College = ALL MPs (Elected + Nominated, NO MLAs). Removal (Art 67): Initiated ONLY in RS; Effective Majority in RS + Simple Majority in LS. Acts as President max 6 months.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Dual Role:** Presides over Rajya Sabha; acts as President during vacancy (max 6 months).\n• **Election:** All MPs vote (both elected and nominated). No state assembly participation.\n• **Removal:** 14-day notice -> Initiated ONLY in RS -> Passed by Effective Majority (all then members) in RS -> Passed by Simple Majority in LS -> Removed. No formal impeachment; no grounds in Constitution.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'By vesting the Vice-President with the ex-officio Chairmanship of the Rajya Sabha, the framers ensured continuous executive utility for the second-highest office while embedding an institutional succession bridge that guarantees zero constitutional vacuum in the Head of State.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T11-04-01',
        type: 'CONCEPT_CHECK',
        stem: 'With reference to the Vice-President of India, consider the following statements:\n1. The electoral college for the Vice-President includes nominated members of Parliament but excludes members of State Legislative Assemblies.\n2. A resolution for the removal of the Vice-President can be initiated in either House of Parliament.\n3. The Vice-President draws a salary in the capacity of the Ex-Officio Chairman of the Rajya Sabha.\nWhich of the statements given above are CORRECT?',
        options: {
          A: '1 and 2 only',
          B: '1 and 3 only',
          C: '2 and 3 only',
          D: '1, 2 and 3',
        },
        correctAnswer: 'B',
        explanation: 'Statements 1 and 3 are correct. Statement 2 is incorrect because under Article 67(b), a resolution for the removal of the Vice-President can originate ONLY in the Rajya Sabha, not in the Lok Sabha.',
        trapExplanation: 'Unlike Presidential impeachment which can start in either House, VP removal can ONLY start in Rajya Sabha.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2016,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T11-05',
    slug: 'prime-minister-and-central-council-of-ministers-architecture',
    topicSlug: 'the-union-executive',
    topicTitle: 'Part V: The Union Executive (President, Vice-President, PM & AG)',
    topicOrder: 11,
    title: 'Prime Minister & Central Council of Ministers: Architecture & Collective Responsibility',
    shortDefinition: 'The Prime Minister as the real executive (De Facto), Council of Ministers aiding and advising the President (Arts 74-75), 42nd/44th Amendments binding advice, 91st Amendment 15% size ceiling, and collective responsibility to Lok Sabha (Art 75(3)).',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T11-07', 'SEM-T11-08', 'SEM-T11-09'],
    claims: [
      {
        id: 'CLM-T11-05.1',
        statement: 'Under Article 74(1) as modified by the 42nd and 44th Constitutional Amendments, the President is constitutionally bound to act in accordance with the aid and advice of the Council of Ministers headed by the Prime Minister, with the sole power to require the Council to reconsider such advice once, after which the reconsidered advice must be accepted.',
        claimType: 'CONSTITUTIONAL_AID_ADVICE_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 40, Art 74)',
      },
      {
        id: 'CLM-T11-05.2',
        statement: 'Under Article 75(3), the Council of Ministers is collectively responsible exclusively to the Lok Sabha (House of the People), meaning that the passage of a No-Confidence Motion forces the entire ministry to resign, while individual ministers hold office during the pleasure of the President under Article 75(2).',
        claimType: 'COLLECTIVE_RESPONSIBILITY_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 40, Art 75)',
      },
      {
        id: 'CLM-T11-05.3',
        statement: 'Under the 91st Constitutional Amendment Act 2003 (Article 75(1A)), the total number of Ministers, including the Prime Minister, in the Central Council of Ministers shall not exceed 15% of the total strength of the Lok Sabha.',
        claimType: 'STATUTORY_CABINET_SIZE_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 40, Art 75(1A))',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Real Executive & Westminster Cabinet Governance',
        body: 'While the President is the formal Head of State, the **Prime Minister** is the **Head of Government** and the **De Facto (real) executive** in India. The Prime Minister is the *Keystone of the Cabinet Arch* (Ivor Jennings), coordinating national policy, commanding the majority in the Lok Sabha, and serving as the primary constitutional channel of communication between the Cabinet and the President (Article 78).',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Constitutional Architecture: Articles 74, 75 & 78',
        body: '### 1. Aid and Advice Mechanism (Article 74):\n• **Article 74(1):** There shall be a Council of Ministers with the Prime Minister at the head to **aid and advise the President**.\n• **42nd Amendment (1976):** Made the advice of the Council of Ministers **strictly binding** on the President.\n• **44th Amendment (1978):** Added a proviso allowing the President to send back the advice **once for reconsideration**; but if the Cabinet re-submits the same advice, the President **MUST accept it**.\n• **Article 74(2):** The question whether any, and if so what, advice was tendered by Ministers to the President **shall NOT be inquired into in any court**.\n\n### 2. Appointment, Size & 6-Month Rule (Article 75):\n• PM appointed by President; other ministers appointed by President on PM’s advice.\n• **91st Amendment (2003):** Total ministers (incl. PM) in Union Council of Ministers **cannot exceed 15% of Lok Sabha total strength** (max approx. 81 ministers).\n• **Article 75(5):** A Minister who is not a member of either House of Parliament for **6 consecutive months** ceases to be a Minister.\n\n### 3. Collective Responsibility vs Individual Responsibility:\n• **Collective Responsibility (Art 75(3)):** Council of Ministers is collectively responsible to the **Lok Sabha**. All ministers swim and sink together. If a No-Confidence Motion is passed, the whole ministry resigns.\n• **Cabinet Solidarity:** A minister who disagrees with a Cabinet decision must either defend it publicly in Parliament or resign from the Cabinet (e.g. Dr. B.R. Ambedkar resigned in 1951 over the Hindu Code Bill).\n• **Individual Responsibility (Art 75(2)):** Ministers hold office during the **pleasure of the President** (exercised on the advice of the PM). The PM can dismiss any minister by advising the President to remove them.',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Council of Ministers vs The Cabinet',
        body: '| Parameter | Council of Ministers (COM) | The Cabinet |\n| :--- | :--- | :--- |\n| **Body Size** | Wider body (60–80 Ministers) | Smaller core inner circle (15–20 Ministers) |\n| **Hierarchy** | Includes Cabinet Ministers, Ministers of State, Deputy Ministers | Consists of **Cabinet Ministers ONLY** |\n| **Policy Role** | Implements policy decisions | Shapes and dictates all national policy decisions |\n| **Constitutional Text** | Mentioned in original Constitution (Arts 74, 75) | Not in original text; inserted in **Article 352** by 44th CAA 1978 |\n| **Meetings** | Rarely meets as a collective whole | Meets regularly (weekly) to decide government business |',
        order: 3,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'GS Paper II: Prime Minister, Council of Ministers, Collective Responsibility & Art 74.',
        examNotes: 'UPSC tests the exact phrasing of Article 75(3) (responsible to LOK SABHA, NOT Parliament as a whole) and Article 74(2) judicial bar.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Union Executive & Cabinet Committees.',
        examNotes: 'High yield for 91st Amendment 15% ceiling and 4 extra-constitutional Cabinet Committees.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Cabinet Committee on Economic Affairs (CCEA).',
        examNotes: 'CCEA chaired by PM approves major banking disinvestment and public sector financial policies.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'PM = Real Executive (De Facto). Art 74: Council of Ministers aids and advises President (44th CAA: 1 reconsideration, then binding; Art 74(2) advice immune from judicial inquiry). Art 75(3): Collective responsibility to Lok Sabha only. 91st CAA: Max 15% of Lok Sabha strength.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **PM Status:** Head of government, head of COM, channel of communication (Art 78).\n• **Binding Advice:** 42nd CAA made advice binding; 44th CAA added 1-time reconsideration.\n• **Size Limit:** 91st CAA capped Union COM at 15% of Lok Sabha.\n• **Responsibilities:** Collective to Lok Sabha (Art 75(3)); Individual to President on PM advice (Art 75(2)).\n• **Cabinet vs COM:** Cabinet is inner core of top ministers; inserted into Art 352 by 44th CAA 1978.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The principle of collective responsibility under Article 75(3) forms the bedrock of parliamentary democracy, subordinating executive survival to the continuous confidence of the directly elected Lok Sabha, while Article 74 harmonizes titular presidential authority with democratic cabinet supremacy.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T11-05-01',
        type: 'CONCEPT_CHECK',
        stem: 'Under the Constitution of India, the Council of Ministers is collectively responsible to:',
        options: {
          A: 'The President of India',
          B: 'The Prime Minister of India',
          C: 'The House of the People (Lok Sabha)',
          D: 'Both Houses of Parliament',
        },
        correctAnswer: 'C',
        explanation: 'Under Article 75(3) of the Constitution, the Council of Ministers is collectively responsible strictly to the House of the People (Lok Sabha), not to Parliament as a whole or to the President.',
        trapExplanation: 'Option D is a frequent exam trap; Rajya Sabha cannot pass a No-Confidence Motion.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2013,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T11-06',
    slug: 'attorney-general-of-india-constitutional-status-and-powers',
    topicSlug: 'the-union-executive',
    topicTitle: 'Part V: The Union Executive (President, Vice-President, PM & AG)',
    topicOrder: 11,
    title: 'Attorney General of India (Article 76) & Law Officers Architecture',
    shortDefinition: 'The Attorney General as the highest law officer of India (Art 76), qualified as a Supreme Court Judge, holding office during presidential pleasure, with unique rights to participate in Parliamentary proceedings without voting (Art 88).',
    difficulty: 'BEGINNER',
    semanticUnitIds: ['SEM-T11-10'],
    claims: [
      {
        id: 'CLM-T11-06.1',
        statement: 'Under Article 76, the Attorney General for India is appointed by the President, must be qualified to be appointed a Judge of the Supreme Court, holds office during the pleasure of the President with remuneration determined by the President, and has the right of audience in all courts in the territory of India.',
        claimType: 'CONSTITUTIONAL_LAW_OFFICER_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 21, Art 76)',
      },
      {
        id: 'CLM-T11-06.2',
        statement: 'Under Article 88, the Attorney General has the right to speak and take part in proceedings of both Houses of Parliament, joint sittings, and any Parliamentary Committee of which named a member, but does NOT have the right to vote.',
        claimType: 'CONSTITUTIONAL_PARLIAMENTARY_RIGHT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 21, Art 88)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Chief Legal Advisor to the Government of India',
        body: 'The **Attorney General for India (Article 76)** is the highest law officer of the Government of India. The AG acts as the chief legal counsel to the Union Government, representing the State in major constitutional litigations before the Supreme Court and High Courts, and advising the President on complex legal questions referred under Article 143.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Appointment, Tenure, Privileges & Limitations',
        body: '### Qualifications & Appointment (Article 76):\n• Appointed by the **President of India** on the advice of the Union Cabinet.\n• Must be qualified to be appointed a **Judge of the Supreme Court** (Indian citizen, 5 years HC Judge or 10 years HC Advocate or an eminent jurist).\n• **Tenure & Removal:** Not fixed by Constitution. Holds office during the **pleasure of the President**. Resigns conventionally when the Government resigns.\n• **Remuneration:** Determined by the President (not charged on Consolidated Fund of India).\n\n### Rights in Parliament (Article 88):\n• Has the right to speak and take part in the proceedings of **Lok Sabha, Rajya Sabha, Joint Sittings**, and any Parliamentary Committee of which appointed a member.\n• ⚠️ **CRUCIAL LIMITATION:** Does **NOT have the right to vote** in Parliament.\n• Enjoys all **Parliamentary Privileges and Immunities (Article 105(4))** available to an MP.\n\n### Judicial Audience & Private Practice Rules:\n• Has the **right of audience in all courts** across India.\n• **NOT a full-time government servant:** Is not debarred from private legal practice.\n• **Restrictions:** Cannot advise or hold brief against the Government of India; cannot defend an accused in criminal cases without the permission of the Government of India; cannot accept directorship in any company without government permission.\n\n### Solicitor General of India:\n• The **Solicitor General** and **Additional Solicitors General** assist the AG. They are purely **statutory/administrative posts** and are **NOT mentioned in the Constitution**.',
        order: 2,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'GS Paper II: Constitutional Bodies & Law Officers.',
        examNotes: 'UPSC repeatedly tests Article 88 (right to speak in Parliament without voting) and the non-constitutional status of the Solicitor General.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Constitutional Law Officers (AG vs Advocate General).',
        examNotes: 'High yield for 20-word definitions of Article 76 and Article 88.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Union Legal Counsel.',
        examNotes: 'Represents Union in apex regulatory litigations.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Attorney General (Art 76): Highest law officer. SC Judge qualifications, pleasure of President. Art 88: Right to speak and attend LS/RS/Committees WITHOUT right to vote. Enjoys MP privileges (Art 105(4)). Private practice permitted with restrictions. Solicitor General is NOT in Constitution.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Status:** Chief legal advisor to GoI; qualified as SC Judge; appointed by President.\n• **Tenure:** Pleasure of President; resigns conventionally with Cabinet.\n• **Parliamentary Right (Art 88):** Can attend and speak in both Houses & Committees, but CANNOT VOTE.\n• **Court Rights:** Right of audience in all Indian courts; private practice allowed (cannot sue GoI).\n• **Solicitor General:** Statutory assistance only; not a constitutional post.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Article 76 and Article 88 create a specialized hybrid legal office that bridges the executive and legislature, ensuring that the sovereign legal representative of the Union Government can directly participate in Parliamentary deliberations and committee scrutiny without breaching the doctrine of representative electoral mandate.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T11-06-01',
        type: 'CONCEPT_CHECK',
        stem: 'Consider the following statements regarding the Attorney General of India:\n1. The Attorney General is appointed by the President and must be qualified to be appointed a Judge of the Supreme Court.\n2. The Attorney General has the right to speak in both Houses of Parliament and vote on constitutional amendment bills.\n3. The office of the Solicitor General of India is explicitly mentioned in Article 76 of the Constitution.\nWhich of the statements given above is/are CORRECT?',
        options: {
          A: '1 only',
          B: '1 and 2 only',
          C: '2 and 3 only',
          D: '1, 2 and 3',
        },
        correctAnswer: 'A',
        explanation: 'Statement 1 is correct (Article 76(1)). Statement 2 is incorrect because under Article 88, the Attorney General has no right to vote in Parliament. Statement 3 is incorrect because the Solicitor General is a statutory/administrative office and is not mentioned in the Constitution.',
        trapExplanation: 'The Attorney General can speak in Parliament but NEVER has the right to vote on any bill or resolution.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2013,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },

  // =========================================================================
  // TOPIC 12: THE STATE EXECUTIVE (4 CONCEPTS: CON-T12-01 to CON-T12-04)
  // =========================================================================
  {
    id: 'CON-T12-01',
    slug: 'governor-constitutional-dual-role-appointment-and-removal',
    topicSlug: 'the-state-executive',
    topicTitle: 'Part VI: The State Executive (Governor, Chief Minister & Advocate General)',
    topicOrder: 12,
    title: 'Governor of the State: Constitutional Dual Role, Appointment & Removal',
    shortDefinition: 'The Governor as the constitutional Head of State and representative of the Centre (Art 153-154), appointment under presidential warrant (Art 155), pleasure tenure (Art 156), and landmark judicial restraints against arbitrary removal (B.P. Singhal 2010).',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T12-01'],
    claims: [
      {
        id: 'CLM-T12-01.1',
        statement: 'Under Articles 153 to 156, the Governor of a State is appointed by the President by warrant under hand and seal and holds office during the pleasure of the President, with the 7th Constitutional Amendment Act 1956 permitting the appointment of the same person as Governor for two or more States.',
        claimType: 'CONSTITUTIONAL_GOVERNOR_APPOINTMENT_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 50, Arts 153-156)',
      },
      {
        id: 'CLM-T12-01.2',
        statement: 'In B.P. Singhal v. Union of India (2010), a 5-Judge Constitution Bench ruled that while the President can remove a Governor without showing cause, the power cannot be exercised arbitrarily, capriciously, or merely due to a change of political party at the Centre, and is subject to judicial review.',
        claimType: 'JUDICIAL_GOVERNOR_REMOVAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 50, BP Singhal 2010)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Dual Persona of the State Governor',
        body: 'The **Governor of a State (Article 153)** occupies a unique dual role in Indian asymmetric federalism:\n1. **Constitutional Head of the State Executive (Article 154):** Acts on the aid and advice of the State Council of Ministers headed by the Chief Minister.\n2. **Representative / Agent of the Union Government:** Acts as a constitutional link between the Centre and the State, reporting on the constitutional machinery of the State under Article 356.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Appointment, Qualifications & Pleasure Doctrine',
        body: '### Constitutional Provisions (Articles 153–158):\n• **Article 153:** There shall be a Governor for each State (7th CAA 1956 allows same person for 2+ states).\n• **Article 155:** Appointed by the **President of India** by warrant under hand and seal (Canadian model of appointed Governor, rejecting the US elected model to prevent dual power centers in the state).\n• **Article 156 (Tenure):** Holds office during the **pleasure of the President**. Normal term is 5 years, but no security of tenure is guaranteed by the text.\n• **Qualifications (Article 157):** Citizen of India, completed **35 years of age**.\n• **Conventions (Sarkaria & Punchhi Commissions):** Should be an outsider to the state; should not be intimately connected with local state politics; Chief Minister of the state should be consulted before appointment.\n\n### Landmark Removal Jurisprudence (*B.P. Singhal v. UOI, 2010*):\n• A change in the central government cannot be a valid ground to remove Governors en masse.\n• The President need not state reasons in the removal order, but must have valid, compelling, and non-arbitrary reasons.\n• If a removed Governor challenges the removal alleging *mala fides*, the Court can call upon the Union Government to produce the records justifying the removal.',
        order: 2,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'GS Paper II: Role of Governor in Federalism, Pleasure Doctrine & BP Singhal.',
        examNotes: 'UPSC tests the Canadian appointment model vs US elected model, and Sarkaria Commission recommendations on Governor appointments.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Governor of Rajasthan, Appointment, Powers & Conventions.',
        examNotes: 'High yield for Rajasthan Governor history (Gurumukh Nihal Singh first Governor 1956) and Article 156 pleasure doctrine.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'State Regulatory Architecture.',
        examNotes: 'State executive background.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Governor (Art 153): Dual role (State Head + Centre Agent). Appointed by President (Art 155; Canadian model). 7th CAA: Same person for 2+ states. Pleasure of President (Art 156). BP Singhal (2010): Arbitrary removal unconstitutional; reviewable for mala fides. 35 yrs age.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Dual Capacity:** Head of State + Agent of Centre.\n• **Appointment:** President by warrant under hand and seal; 7th CAA allows dual-state charge.\n• **Pleasure Doctrine:** No impeachment; holds office during presidential pleasure.\n• **BP Singhal (2010):** Removal cannot be arbitrary or based on political change at Centre.\n• **Conventions:** Outsider to state; CM consultation (Sarkaria Commission).',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The appointment of Governors by the President rather than by state-level elections was a deliberate constitutional choice by the Constituent Assembly to safeguard national unity, prevent state separatist tendencies, and preserve the smooth operation of cabinet governance without conflicting mandates between Governor and Chief Minister.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T12-01-01',
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following statements regarding the office of the Governor in India is CORRECT according to the Supreme Court ruling in B.P. Singhal v. Union of India (2010)?',
        options: {
          A: 'A Governor has a constitutionally guaranteed fixed tenure of five years and cannot be removed before that under any circumstances.',
          B: 'The President can remove a Governor at any time without any reason, and such removal is completely immune from judicial review.',
          C: 'A Governor cannot be removed arbitrarily or merely because the political party in power at the Centre has changed.',
          D: 'A Governor can be removed only through an impeachment process identical to that of the President of India.',
        },
        correctAnswer: 'C',
        explanation: 'In B.P. Singhal (2010), the Supreme Court ruled that while the President holds the power to remove a Governor, it cannot be exercised arbitrarily, capriciously, or on political whims upon a change of government at the Centre, and is subject to limited judicial review.',
        trapExplanation: 'Governors have no fixed tenure and no impeachment process, but executive removal power is not absolute and cannot be arbitrary.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2019,
        pyqPaper: 'RPSC RAS Prelims',
      },
    ],
  },
  {
    id: 'CON-T12-02',
    slug: 'governor-discretionary-powers-bill-reservation-and-ordinance',
    topicSlug: 'the-state-executive',
    topicTitle: 'Part VI: The State Executive (Governor, Chief Minister & Advocate General)',
    topicOrder: 12,
    title: "Governor's Discretionary Powers (Art 163), Bill Reservation (Arts 200–201) & Ordinance (Art 213)",
    shortDefinition: 'The explicit constitutional and situational discretion of the Governor under Article 163, mandatory floor test jurisprudence (S.R. Bommai), reservation of state bills for Presidential consideration (Arts 200-201), and state ordinance power (Art 213).',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-T12-02', 'SEM-T12-03'],
    claims: [
      {
        id: 'CLM-T12-02.1',
        statement: 'Unlike the President of India who has no explicit constitutional discretion, Article 163(1) explicitly grants the Governor constitutional discretion, with Article 163(2) establishing that the Governor’s decision on whether a matter falls within discretion is final and cannot be questioned.',
        claimType: 'CONSTITUTIONAL_DISCRETION_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 50, Art 163)',
      },
      {
        id: 'CLM-T12-02.2',
        statement: 'Under Article 200, the Governor can reserve any state bill for the consideration of the President, and is constitutionally mandated to reserve any bill that derogates from the powers of the High Court so as to endanger its constitutional position.',
        claimType: 'CONSTITUTIONAL_BILL_RESERVATION_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 50, Arts 200-201)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Explicit Discretion in State Governance vs Presidential Model',
        body: 'A fundamental distinction between the Union and State executive is that the **President of India has no express constitutional discretionary powers** (Art 74 has no discretionary clause), whereas **Article 163(1) explicitly recognizes the Governor’s discretion**.\n\nThis explicit discretion empowers the Governor to act independently of the State Cabinet when national unity, constitutional machinery, or institutional integrity are at stake.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Constitutional vs Situational Discretion (Article 163)',
        body: '### 1. Constitutional Discretion (Explicit in Text):\n• **Reservation of a Bill for President (Article 200):** Governor can reserve any state bill for presidential assent.\n• **Recommending President’s Rule (Article 356):** Sending reports to the President on the breakdown of constitutional machinery.\n• **Sixth Schedule Tribal Districts:** Determining royalties from mineral licenses in Assam, Meghalaya, Tripura, Mizoram.\n• **Special Responsibilities (Articles 371–371J):** Maharashtra/Gujarat (development boards), Nagaland (law & order), Manipur (hill areas), etc.\n\n### 2. Situational Discretion (Emergent Political Scenarios):\n• **Appointment of Chief Minister:** In a *hung assembly* when no party has a clear majority.\n• **Dismissal of Council of Ministers:** When the ministry loses majority in the Assembly and refuses to resign.\n• **Dissolution of Legislative Assembly:** When the council of ministers loses its majority.\n\n### Landmark Judicial Restraints:\n• ***S.R. Bommai v. Union of India (1994):*** The Supreme Court held that the **floor of the Legislative Assembly (Floor Test) is the ONLY legitimate arena** to test majority, not the subjective assessment of the Governor in Raj Bhavan.\n• ***Nabam Rebia v. Deputy Speaker (2016):*** Governor cannot summon, prorogue, or dissolve the Assembly without the aid and advice of the Council of Ministers under Article 174, unless the government’s majority is in active doubt.',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'DISTINCTION',
        title: 'Bill Assent (Arts 200–201), Ordinance (Art 213) & Pardoning (Art 161)',
        body: '### Article 200 & 201 (State Bill Assent):\n• Governor has 4 choices under Art 200: (1) Give assent, (2) Withhold assent, (3) Return for reconsideration (if not Money Bill), (4) **Reserve for President**.\n• **Mandatory Reservation:** A bill that endangers the constitutional position of the **High Court** MUST be reserved for the President.\n• **President’s Action under Art 201:** The President may give assent, withhold assent, or return the bill. **Crucial Rule:** Even if the State Legislature re-passes the bill, the President is **NOT BOUND to give assent** (unlike the Union Suspensive Veto under Art 111).\n\n### Article 213 (State Ordinance Power):\n• Promulgated when state legislature is in recess; max life 6 weeks from reassembly.\n• **Presidential Instruction Needed:** If the bill would have required Presidential previous sanction or reservation under Article 200.\n\n### Article 161 vs Article 72 (Pardoning Power):\n• **Death Sentence:** The Governor **CANNOT pardon a death sentence** (only the President can under Art 72). The Governor can only suspend, remit, or commute a death sentence.\n• **Court Martial:** The Governor has **no power** regarding punishment by Court Martial.',
        order: 3,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'GS Paper II: Discretionary Powers of Governor (Art 163), Bommai Judgment & Bill Reservation.',
        examNotes: 'UPSC frequently tests Article 201 (President is NOT bound by re-passed state bill) and Article 161 death penalty limits.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Powers of Governor of Rajasthan, Ordinance (Art 213) & Reservation (Art 200).',
        examNotes: 'High yield for 50-word and 100-word questions on Governor discretionary powers and S.R. Bommai floor test.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'State Legislation Powers.',
        examNotes: 'State finance acts reserved for presidential assent.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Governor Discretion (Art 163): Explicit in text (Art 163(2) finality). Situational: Hung assembly, dismissal of minority CM. Bommai (1994): Floor test mandatory. Art 200: Reserve bill for President (mandatory if High Court power endangered). Art 201: President NOT bound by re-passed state bill. Art 161: Cannot pardon death.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Discretion:** Explicit under Art 163(1); decision final under 163(2). Constitutional (356 report, bill reservation) + Situational (hung assembly).\n• **Floor Test:** Bommai case mandated floor test on assembly floor as sole test of majority.\n• **Bill Reservation (Arts 200-201):** Mandatory if HC power endangered. President has pocket/absolute veto over state bills (not bound by re-enactment).\n• **Pardoning (161):** Cannot pardon death penalty (only suspend/remit/commute); no Court Martial power.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Article 163 and Articles 200-201 equip the Governor with discretionary leverage designed as a federal safety valve against rogue or unconstitutional state legislation, ensuring that state legislative autonomy remains harmonized with the constitutional supremacy of the Union.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T12-02-01',
        type: 'CONCEPT_CHECK',
        stem: 'Under Article 200 of the Constitution of India, in which of the following cases is the Governor OBLIGATED to reserve a bill passed by the State Legislature for the consideration of the President?',
        options: {
          A: 'When the bill imposes taxes on agricultural income.',
          B: 'When the bill in the opinion of the Governor endangers the position of the High Court.',
          C: 'When the bill alters the official language of the State.',
          D: 'When the bill is passed during an election year.',
        },
        correctAnswer: 'B',
        explanation: 'Under the second proviso to Article 200, the Governor is constitutionally mandated to reserve for the consideration of the President any bill which, in the opinion of the Governor, would, if it became law, so derogate from the powers of the High Court as to endanger the position which that Court is designed to fill by the Constitution.',
        trapExplanation: 'Other reservations under Art 200 are discretionary; High Court power protection is strictly mandatory.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2017,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T12-03',
    slug: 'chief-minister-and-state-council-of-ministers-architecture',
    topicSlug: 'the-state-executive',
    topicTitle: 'Part VI: The State Executive (Governor, Chief Minister & Advocate General)',
    topicOrder: 12,
    title: 'Chief Minister & State Council of Ministers: Constitutional Architecture',
    shortDefinition: 'The Chief Minister as the real state executive, collective responsibility to the Legislative Assembly (Art 164), 91st Amendment size limits (15% ceiling, minimum 12), and aid & advice jurisprudence (Shamsher Singh, S.R. Bommai).',
    difficulty: 'BEGINNER',
    semanticUnitIds: ['SEM-T12-05'],
    claims: [
      {
        id: 'CLM-T12-03.1',
        statement: 'Under Article 164(1A) inserted by the 91st Constitutional Amendment Act 2003, the total number of Ministers, including the Chief Minister, in the State Council of Ministers shall not exceed 15% of the total strength of the Legislative Assembly, and shall not be less than 12 Ministers.',
        claimType: 'STATUTORY_CABINET_SIZE_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 8, Art 164(1A))',
      },
      {
        id: 'CLM-T12-03.2',
        statement: 'Under Article 164(2), the State Council of Ministers is collectively responsible strictly to the Legislative Assembly (Vidhan Sabha) of the State, and under Shamsher Singh (1974), the Governor must exercise all executive powers on their aid and advice except where discretionary powers are explicitly provided.',
        claimType: 'COLLECTIVE_RESPONSIBILITY_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 8, Art 164(2))',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Real Executive Head of State Administration',
        body: 'The **Chief Minister** is the **Head of Government at the State level** and the real executive (*De Facto*), while the Governor is the constitutional Head of State (*De Jure*). The Chief Minister commands the majority in the Legislative Assembly (Vidhan Sabha), leads the Council of Ministers, and acts as the sole constitutional link between the State Cabinet and the Governor (Article 167).',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Constitutional Architecture: Articles 163, 164 & 167',
        body: '### 1. Appointment and Size (Article 164):\n• **Article 164(1):** The Chief Minister is appointed by the **Governor**, and other Ministers are appointed by the Governor on the **advice of the Chief Minister**.\n• **91st Amendment (2003) — Dual Threshold (Article 164(1A)):**\n  1. **Maximum Ceiling:** Total Ministers (incl. CM) **shall not exceed 15%** of the total strength of the Legislative Assembly.\n  2. **Minimum Floor:** Number of Ministers (incl. CM) **shall NOT be less than 12 Ministers**.\n  *(Example: In Rajasthan with 200 MLAs, max ministers = $200 \\times 15\\% = 30$; min ministers = 12).* \n• **Article 164(4):** A minister who is not a member of the State Legislature for **6 consecutive months** ceases to be a minister.\n\n### 2. Collective Responsibility (Article 164(2)):\n• The State Council of Ministers is **collectively responsible strictly to the Legislative Assembly (Vidhan Sabha)**.\n• In bicameral states, ministers can be from either Assembly or Council, but the ministry is responsible **ONLY to the Assembly** (the Legislative Council cannot pass a No-Confidence Motion).\n\n### 3. Duties of Chief Minister (Article 167):\n• Communicate all decisions of the Council of Ministers to the Governor.\n• Furnish information regarding state administration and legislative proposals as the Governor calls for.\n• Submit for the consideration of the Council of Ministers any matter on which a decision has been taken by an individual minister without Cabinet consideration.',
        order: 2,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'MEDIUM',
        syllabusSection: 'GS Paper II: State Executive, Chief Minister & 91st CAA Rules.',
        examNotes: 'UPSC tests the minimum limit of 12 ministers in States (which does NOT exist for Union Council of Ministers).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Chief Minister of Rajasthan, Cabinet Architecture & Article 167.',
        examNotes: 'Repeatedly tested: Rajasthan cabinet maximum strength (30) and minimum strength (12) under 91st CAA.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'State Government Administration.',
        examNotes: 'State administration framework.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Chief Minister = Real State Executive. Art 164: Appointed by Governor. 91st CAA: Max 15% of Assembly strength, MINIMUM 12 ministers. Art 164(2): Collective responsibility to Legislative Assembly only. Art 167: Duties to Governor. Shamsher Singh (1974): Governor bound by aid/advice.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Real Executive:** CM leads state government and advises Governor on all appointments.\n• **91st CAA Limits:** Max 15% of Assembly; Minimum 12 ministers in state (differs from Union where no min limit exists).\n• **Responsibility:** Collective to Legislative Assembly (Vidhan Sabha); Individual to Governor on CM advice.\n• **Art 167:** CM communicates cabinet decisions and furnishes administrative information to Governor.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'The dual limit under Article 164(1A) (15% ceiling and 12-member floor) balances executive efficiency by preventing jumbo cabinets for political patronage while ensuring that smaller states maintain a viable minimum ministerial team capable of managing modern multi-departmental governance.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T12-03-01',
        type: 'CONCEPT_CHECK',
        stem: 'Under the 91st Constitutional Amendment Act, 2003, what is the MAXIMUM and MINIMUM number of Ministers (including the Chief Minister) permitted in the State Council of Ministers for Rajasthan (having 200 Legislative Assembly seats)?',
        options: {
          A: 'Maximum 30, Minimum 12',
          B: 'Maximum 30, Minimum No limit',
          C: 'Maximum 20, Minimum 10',
          D: 'Maximum 15%, Minimum 15',
        },
        correctAnswer: 'A',
        explanation: 'Under Article 164(1A), the maximum strength is 15% of the Legislative Assembly ($200 \\times 15\\% = 30$), and the minimum strength in any State shall not be less than 12 Ministers. Hence, for Rajasthan, the range is 12 to 30.',
        trapExplanation: 'While the Union COM has a 15% ceiling with NO minimum floor, States have an explicit minimum floor of 12 ministers.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2018,
        pyqPaper: 'RPSC RAS Prelims',
      },
    ],
  },
  {
    id: 'CON-T12-04',
    slug: 'advocate-general-for-the-state-constitutional-status-and-powers',
    topicSlug: 'the-state-executive',
    topicTitle: 'Part VI: The State Executive (Governor, Chief Minister & Advocate General)',
    topicOrder: 12,
    title: 'Advocate General for the State (Article 165) & Rights in Legislature (Art 177)',
    shortDefinition: 'The Advocate General as the highest law officer in the State (Art 165), qualified as a High Court Judge, holding office during governor’s pleasure, with the constitutional right to participate in State Legislature proceedings without voting (Art 177).',
    difficulty: 'BEGINNER',
    semanticUnitIds: ['SEM-T12-04'],
    claims: [
      {
        id: 'CLM-T12-04.1',
        statement: 'Under Article 165, the Governor appoints a person who is qualified to be appointed a Judge of a High Court as the Advocate General for the State, who holds office during the pleasure of the Governor and receives such remuneration as the Governor may determine.',
        claimType: 'CONSTITUTIONAL_LAW_OFFICER_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 21, Art 165)',
      },
      {
        id: 'CLM-T12-04.2',
        statement: 'Under Article 177, the Advocate General has the right to speak in, and take part in the proceedings of, the State Legislative Assembly (and Legislative Council where existing) and any legislative committee of which named a member, but does NOT have the right to vote.',
        claimType: 'CONSTITUTIONAL_PARLIAMENTARY_RIGHT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 21, Art 177)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Highest Legal Officer of the State Government',
        body: 'The **Advocate General for the State (Article 165)** is the highest law officer in the State executive. Corresponding to the Attorney General of India at the federal level, the Advocate General acts as the chief legal counsel to the State Government, advising on legal matters and representing the State in litigations before the High Court and the Supreme Court.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Appointment, Functions & Legislative Rights (Article 177)',
        body: '### Qualifications & Appointment (Article 165):\n• Appointed by the **Governor** on the advice of the State Cabinet.\n• Must be qualified to be appointed a **Judge of a High Court** (Citizen of India, held judicial office in India for 10 years or been an advocate in a High Court for 10 years).\n• **Tenure & Removal:** Holds office during the **pleasure of the Governor** (no fixed term in Constitution). Resigns conventionally when the State Ministry resigns.\n• **Remuneration:** Determined by the **Governor** (not fixed by Constitution).\n\n### Rights in State Legislature (Article 177):\n• Has the right to speak and take part in the proceedings of the **State Legislative Assembly (Vidhan Sabha)** and **State Legislative Council (Vidhan Parishad)**, and any Assembly committee of which named a member.\n• ⚠️ **CRUCIAL LIMITATION:** Has **NO RIGHT TO VOTE**.\n• Enjoys all privileges and immunities of an MLA (Article 194(4)).',
        order: 2,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'IMPORTANT',
        weightage: 'MEDIUM',
        syllabusSection: 'GS Paper II: Constitutional Law Officers (AG vs Advocate General).',
        examNotes: 'UPSC contrasts Article 76/88 (AGI) with Article 165/177 (Advocate General).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Advocate General of Rajasthan, Appointment & Functions.',
        examNotes: 'High yield for 20-word definitions of Article 165 and Article 177 in RPSC RAS Mains.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'State Legal Representation.',
        examNotes: 'State legal officer background.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Advocate General (Art 165): Highest law officer of State. High Court Judge qualifications, pleasure of Governor. Art 177: Right to speak and participate in Vidhan Sabha/Parishad WITHOUT right to vote. Enjoys MLA privileges (Art 194(4)).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Office:** State counterpart of Attorney General.\n• **Appointment:** Governor on Cabinet advice; HC Judge qualifications.\n• **Tenure:** Pleasure of Governor; resigns when Cabinet falls.\n• **Legislative Right (Art 177):** Right to speak and participate in Assembly & Committees; NO VOTE.\n• **Privileges:** Enjoys full MLA privileges under Article 194(4).',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Article 165 and Article 177 replicate the federal law officer design at the state level, ensuring that state legislative processes and cabinet governance have access to expert constitutional counsel on the floor of the legislature without diluting representative voting power.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T12-04-01',
        type: 'CONCEPT_CHECK',
        stem: 'Under Article 165 of the Constitution of India, the Advocate General for a State is appointed by:',
        options: {
          A: 'The Chief Justice of the High Court',
          B: 'The President of India',
          C: 'The Governor of the State',
          D: 'The Chief Minister of the State',
        },
        correctAnswer: 'C',
        explanation: 'Under Article 165(1), the Governor of each State shall appoint a person who is qualified to be appointed a Judge of a High Court to be Advocate General for the State.',
        trapExplanation: 'High Court Judges are appointed by the President, but the Advocate General is appointed by the Governor.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2016,
        pyqPaper: 'RPSC RAS Prelims',
      },
    ],
  },

  // =========================================================================
  // TOPIC 13: CIVIL SERVICES & PUBLIC SERVICES (2 CONCEPTS: CON-T13-01 to CON-T13-02)
  // =========================================================================
  {
    id: 'CON-T13-01',
    slug: 'all-india-services-and-constitutional-framework-of-public-services',
    topicSlug: 'civil-services-and-public-services',
    topicTitle: 'Part XIV: Civil Services, Doctrine of Pleasure & Constitutional Safeguards',
    topicOrder: 13,
    title: 'All-India Services (Article 312) & Framework of Public Services (Arts 308–309)',
    shortDefinition: 'The constitutional classification of civil services in India (Part XIV), the creation of All-India Services under Article 312 via Rajya Sabha special federal resolution, and the dual-control administrative framework (IAS, IPS, IFS).',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-T13-01', 'SEM-T13-02'],
    claims: [
      {
        id: 'CLM-T13-01.1',
        statement: 'Under Article 312, Parliament can create a new All-India Service common to the Union and the States ONLY if the Rajya Sabha passes a resolution supported by not less than two-thirds of the members present and voting declaring that it is necessary in the national interest.',
        claimType: 'CONSTITUTIONAL_FEDERAL_POWER',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 42, Art 312)',
      },
      {
        id: 'CLM-T13-01.2',
        statement: 'All-India Services (IAS, IPS, and IFS created in 1966 under the All-India Services Act 1951) operate under a dual control mechanism: immediate administrative control lies with the State Government where the officer is cadre-allocated, while ultimate disciplinary control (dismissal/removal) lies strictly with the Central Government.',
        claimType: 'ADMINISTRATIVE_CONTROL_STATUTE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 42, Art 312)',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Federal Steel Frame of Indian Administration',
        body: 'Sardar Vallabhbhai Patel conceptualized the **All-India Services (AIS)** as the *"Steel Frame"* of the Indian Republic. Unlike typical federal systems (like the United States) where the federal and state governments maintain completely separate civil services, India maintains three distinct tiers of public services under **Part XIV (Articles 308–323)**:\n1. **All-India Services (AIS):** Common to Union and States (IAS, IPS, IFS).\n2. **Central Civil Services (CCS):** Serve the Union Government exclusively (e.g. IFS-Foreign Service, IRS, IAAS).\n3. **State Civil Services (SCS):** Serve the State Government exclusively (e.g. RAS, RPS, Commercial Taxes).',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Article 312 & Rajya Sabha Exclusive Federal Prerogative',
        body: '### Creation of a New All-India Service (Article 312):\n• **Rajya Sabha Exclusive Power:** Parliament cannot create an All-India Service on its own initiative. The process **MUST originate in the Rajya Sabha**.\n• **Special Majority:** Rajya Sabha must pass a resolution supported by **NOT LESS THAN 2/3rd of the members present and voting** declaring that it is necessary or expedient in the national interest.\n• **Parliamentary Law:** After Rajya Sabha passes the resolution, Parliament enacts an ordinary law establishing the new service.\n• **Three Existing All-India Services:**\n  1. **Indian Administrative Service (IAS)** (Replaced ICS in 1947).\n  2. **Indian Police Service (IPS)** (Replaced IP in 1948).\n  3. **Indian Forest Service (IFS)** (Created in **1966** under the *All-India Services Act, 1951*).\n  *(⚠️ EXAM TRAP: The Indian Foreign Service is a CENTRAL Service, NOT an All-India Service!).*\n\n### Dual Control Mechanism:\n• **Recruitment & Training:** Conducted by the Central Government (UPSC & LBSNAA/SVPNPA/IGNFA).\n• **Immediate Control:** Exercised by the **State Government** (transfers, postings, leave, suspension).\n• **Ultimate Control:** Vested strictly in the **Central Government** (only the Centre can impose major penalties of dismissal, removal, or compulsory retirement under DoPT/MHA/MoEFCC).',
        order: 2,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'GS Paper II: Role of Civil Services in Democracy & Article 312.',
        examNotes: 'UPSC frequently tests the exclusive power of Rajya Sabha under Article 312 (2/3rd present and voting) and the 3 All-India Services (IAS, IPS, Indian Forest Service).',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: All India Services vs State Services (RAS) & Article 312.',
        examNotes: 'High yield for dual control mechanism and Indian Forest Service creation year (1966).',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Public Administration.',
        examNotes: 'Civil service framework background.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Article 312 (All-India Services): Common to Centre & States (IAS, IPS, IFS-Forest 1966). Creation requires Rajya Sabha resolution by 2/3rd present & voting. Dual control: State has immediate control (postings); Centre has ultimate control (dismissal). Indian Foreign Service is CCS, NOT AIS.',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Three Tiers:** All-India Services (IAS, IPS, IFS), Central Services (IRS, IAAS), State Services (RAS).\n• **Article 312:** Rajya Sabha exclusive power to initiate new AIS by 2/3rd present & voting.\n• **Dual Control:** Immediate control = State; Ultimate disciplinary control = Centre.\n• **Trap:** IFS stands for Indian Forest Service (created 1966) in AIS; Indian Foreign Service is a Central Service.',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Article 312 embodies the cooperative federalist architecture of the Indian administration, where assigning the exclusive initiating power to the Rajya Sabha ensures that the states voluntarily consent to central administrative standards and elite national recruitment while preserving state-level operational governance.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T13-01-01',
        type: 'CONCEPT_CHECK',
        stem: 'Under Article 312 of the Constitution of India, a new All-India Service can be created only if:',
        options: {
          A: 'The President of India issues an Ordinance on the recommendation of the Union Cabinet.',
          B: 'The Rajya Sabha passes a resolution supported by not less than two-thirds of members present and voting.',
          C: 'The Lok Sabha passes a resolution supported by a special majority of total membership.',
          D: 'A majority of State Legislative Assemblies pass resolutions requesting the creation of such service.',
        },
        correctAnswer: 'B',
        explanation: 'Under Article 312(1), if the Council of States (Rajya Sabha) has declared by resolution supported by not less than two-thirds of the members present and voting that it is necessary or expedient in the national interest, Parliament may by law create one or more All-India Services.',
        trapExplanation: 'Article 312 is an exclusive federal power of the Rajya Sabha, requiring 2/3rd of members present and voting.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2015,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
  {
    id: 'CON-T13-02',
    slug: 'doctrine-of-pleasure-and-article-311-constitutional-safeguards',
    topicSlug: 'civil-services-and-public-services',
    topicTitle: 'Part XIV: Civil Services, Doctrine of Pleasure & Constitutional Safeguards',
    topicOrder: 13,
    title: 'Doctrine of Pleasure (Art 310) & Article 311 Safeguards with Exceptions',
    shortDefinition: 'The British common-law Doctrine of Pleasure embodied in Article 310, constitutional safeguards against arbitrary dismissal under Article 311 (opportunity of hearing), and the three critical statutory exceptions (conviction, impracticability, state security) upheld in Tulsiram Patel (1985).',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-T13-03'],
    claims: [
      {
        id: 'CLM-T13-02.1',
        statement: 'Under Article 310, civil servants of the Union hold office during the pleasure of the President and civil servants of a State hold office during the pleasure of the Governor, but this pleasure is strictly qualified and restricted by the constitutional safeguards provided in Article 311.',
        claimType: 'CONSTITUTIONAL_PLEASURE_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 42, Arts 310-311)',
      },
      {
        id: 'CLM-T13-02.2',
        statement: 'Under Article 311(2), no civil servant can be dismissed, removed, or reduced in rank without an inquiry and reasonable opportunity of being heard, except under three explicit constitutional exceptions: (a) criminal conviction, (b) where the disciplinary authority records in writing that an inquiry is not reasonably practicable, and (c) where the President or Governor is satisfied that the security of the State makes an inquiry inexpedient (Union of India v. Tulsiram Patel, 1985).',
        claimType: 'JUDICIAL_CIVIL_SERVICE_SAFEGUARD_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        evidenceLocator: '05_Polity_Governance_Master.md (Chapter 42, Art 311(2))',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Balancing Executive Control with Civil Service Security of Tenure',
        body: 'To prevent civil servants from becoming either arbitrary autocrats or vulnerable political pawns, the Constitution creates a delicate institutional balance:\n1. **Doctrine of Pleasure (Article 310):** Reaffirms executive supremacy (servants hold office during pleasure of President/Governor).\n2. **Constitutional Shield (Article 311):** Protects civil servants from arbitrary, vindictive, or summary dismissal by politicians.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Two Core Safeguards under Article 311',
        body: 'Article 311 applies exclusively to members of **All-India Services, Central Civil Services, State Civil Services**, and holders of civil posts under Union/State (does NOT apply to Defence personnel / military officers):\n\n1. **Article 311(1) — Subordinate Authority Bar:**\n   - No civil servant shall be dismissed or removed by an authority **subordinate to that by which they were appointed**.\n   - *(Example: An IAS officer appointed by the President of India cannot be dismissed or removed by a Governor or Chief Minister, even while serving in a State cadre).* \n2. **Article 311(2) — Natural Justice & Right to Hearing:**\n   - No civil servant shall be **dismissed, removed, or reduced in rank** except after an inquiry in which they have been informed of the charges and given a **reasonable opportunity of being heard** (Principle of *Audi Alteram Partem*).',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'CASE_LAW',
        title: 'The Three Exceptions to Article 311(2) & Tulsiram Patel (1985)',
        body: 'The Second Proviso to Article 311(2) lays down **THREE EXCEPTIONS** where a civil servant can be dismissed, removed, or reduced in rank **WITHOUT ANY INQUIRY OR OPPORTUNITY OF BEING HEARD**:\n\n1. **Clause 2(a) — Criminal Conviction:** Where a person is dismissed, removed, or reduced in rank on the ground of conduct which has led to their **conviction on a criminal charge** by a court of law.\n2. **Clause 2(b) — Impracticability:** Where the authority empowered to dismiss or remove is satisfied that, for some reason to be **recorded by that authority in writing**, it is **not reasonably practicable to hold such inquiry** (e.g. witnesses terrorized, widespread riots).\n3. **Clause 2(c) — Security of the State:** Where the **President or Governor** is satisfied that in the **interest of the security of the State**, it is not expedient to hold such inquiry.\n   - *Rule:* The satisfaction of the President/Governor under clause (c) is subjective, but is subject to limited judicial review if challenged on grounds of *mala fides*.\n\n### Landmark Jurisprudence (*Union of India v. Tulsiram Patel, 1985 - 5 Judges*):\n• The Supreme Court upheld the constitutional validity of the second proviso to Article 311(2).\n• The Court held that public interest, administrative efficiency, and the security of the State override individual procedural rights when the specific conditions of the three exceptions are met in good faith.',
        order: 3,
        visibility: 'STANDARD',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        examName: 'UPSC Civil Services Examination',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'GS Paper II: Article 311 Safeguards, Doctrine of Pleasure & Tulsiram Patel.',
        examNotes: 'UPSC frequently tests the 3 exceptions under the second proviso to Article 311(2) and the exclusion of military personnel from Article 311.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper III: Rights of Civil Servants, Article 311 & Disciplinary Inquiries.',
        examNotes: 'High yield for 50-word and 20-word questions on Article 311 safeguards and exceptions.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'BACKGROUND',
        weightage: 'LOW',
        syllabusSection: 'Public Service Rules.',
        examNotes: 'Disciplinary procedure background.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Art 310: Doctrine of Pleasure (President/Governor). Art 311 Safeguards: (1) No dismissal by subordinate authority; (2) Inquiry & reasonable hearing before dismissal/removal/reduction in rank. 3 Exceptions to inquiry: 2(a) Criminal conviction, 2(b) Impracticable to hold inquiry (reasons in writing), 2(c) Security of State (President/Governor satisfaction). Tulsiram Patel (1985).',
        priority: 'ESSENTIAL',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '• **Pleasure vs Safeguards:** Art 310 pleasure doctrine is qualified by Art 311 safeguards.\n• **Art 311(1):** Officer cannot be dismissed by an authority subordinate to appointing authority.\n• **Art 311(2):** Mandatory departmental inquiry with right to be heard.\n• **Three Exceptions (No Inquiry):** (a) Convicted on criminal charge; (b) Impracticable to hold inquiry (written reasons); (c) Security of State.\n• **Tulsiram Patel (1985):** SC confirmed that principles of natural justice can be excluded under the second proviso to Art 311(2).',
        priority: 'HIGH_YIELD',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Article 311 constitutionalizes administrative fairness by embedding procedural natural justice directly into the supreme law of the land, while the second proviso provides sovereign emergency exceptions that allow the State to purge corrupt or subversive elements without endangering public order or state security.',
        priority: 'DEEP_DIVE',
        order: 3,
      },
    ],
    questions: [
      {
        id: 'Q-T13-02-01',
        type: 'CONCEPT_CHECK',
        stem: 'Under Article 311 of the Constitution of India, under which of the following circumstances can a civil servant be dismissed or removed WITHOUT holding a departmental inquiry?',
        options: {
          A: 'When the civil servant has been absent from duty without leave for more than thirty days.',
          B: 'Where the civil servant is dismissed or removed on the ground of conduct which has led to conviction on a criminal charge.',
          C: 'When the civil servant criticizes government policies in the public media.',
          D: 'When the civil servant fails to pass the mandatory departmental probation examination.',
        },
        correctAnswer: 'B',
        explanation: 'Under clause (a) of the second proviso to Article 311(2), where a person is dismissed or removed or reduced in rank on the ground of conduct which has led to their conviction on a criminal charge, no departmental inquiry or opportunity of being heard is required.',
        trapExplanation: 'Absence or probation failure requires normal departmental proceedings; only criminal conviction, impracticability, or state security allows bypassing the inquiry.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2014,
        pyqPaper: 'UPSC Prelims GS-I',
      },
    ],
  },
];

export async function seedBatchP1CanonicalKnowledge() {
  console.log(`Seeding Batch P1 Canonical Knowledge (${BATCH_P1_CONCEPTS.length} concepts)...`);

  // First seed semantic units
  await seedBatchP1SemanticInventory();

  let domain = await db.domain.findFirst({
    where: {
      OR: [
        { slug: 'indian-governance-administration' },
        { slug: 'constitutional-law-governance' },
        { name: 'Indian Governance & Administration' },
      ],
    },
  });

  if (!domain) {
    domain = await db.domain.create({
      data: {
        name: 'Indian Governance & Administration',
        slug: 'indian-governance-administration',
        description: 'Constitutional, administrative, and public policy framework of India.',
      },
    });
  }

  let subject = await db.subject.findFirst({
    where: { slug: 'indian-polity' },
  });

  if (!subject) {
    subject = await db.subject.create({
      data: {
        name: 'Indian Polity',
        slug: 'indian-polity',
        domainId: domain.id,
        scopeStatement: 'Constitutional law, state institutions, political dynamics, and governance.',
        description: 'Constitutional law, state institutions, political dynamics, and governance.',
      },
    });
  }

  // Ensure exams exist
  const upsc = await db.exam.upsert({
    where: { slug: 'upsc-cse' },
    update: {},
    create: {
      slug: 'upsc-cse',
      name: 'UPSC Civil Services Examination',
      conductingBody: 'Union Public Service Commission',
      description: 'Premier national civil services examination.',
    },
  });

  const rpsc = await db.exam.upsert({
    where: { slug: 'rpsc-ras' },
    update: {},
    create: {
      slug: 'rpsc-ras',
      name: 'RPSC Rajasthan Administrative Services',
      conductingBody: 'Rajasthan Public Service Commission',
      description: 'Apex state civil services examination for Rajasthan.',
    },
  });

  const iibf = await db.exam.upsert({
    where: { slug: 'iibf-dbf' },
    update: {},
    create: {
      slug: 'iibf-dbf',
      name: 'IIBF Diploma in Banking & Finance',
      conductingBody: 'Indian Institute of Banking & Finance',
      description: 'Professional banking qualification.',
    },
  });

  const examMap: Record<string, string> = {
    UPSC_CSE: upsc.id,
    RPSC_RAS: rpsc.id,
    IIBF_DBF: iibf.id,
  };

  // Group concepts by topic
  const topicsMap: Record<string, { title: string; order: number; concepts: BatchP1ConceptSeedDefinition[] }> = {};
  for (const c of BATCH_P1_CONCEPTS) {
    if (!topicsMap[c.topicSlug]) {
      topicsMap[c.topicSlug] = {
        title: c.topicTitle,
        order: c.topicOrder,
        concepts: [],
      };
    }
    topicsMap[c.topicSlug].concepts.push(c);
  }

  for (const [topicSlug, topicData] of Object.entries(topicsMap)) {
    const topic = await db.topic.upsert({
      where: {
        subjectId_slug: {
          subjectId: subject.id,
          slug: topicSlug,
        },
      },
      update: {
        title: topicData.title,
        order: topicData.order,
        status: 'ACTIVE',
      },
      create: {
        subjectId: subject.id,
        slug: topicSlug,
        title: topicData.title,
        order: topicData.order,
        status: 'ACTIVE',
      },
    });

    for (const cDef of topicData.concepts) {
      const concept = await db.concept.upsert({
        where: { id: cDef.id },
        update: {
          title: cDef.title,
          shortDefinition: cDef.shortDefinition,
          difficulty: cDef.difficulty,
          status: 'ACTIVE',
          topicId: topic.id,
        },
        create: {
          id: cDef.id,
          slug: cDef.slug,
          topicId: topic.id,
          title: cDef.title,
          shortDefinition: cDef.shortDefinition,
          difficulty: cDef.difficulty,
          status: 'ACTIVE',
        },
      });

      // Clear existing child relations to allow idempotent re-seeding
      await db.claim.deleteMany({ where: { conceptId: concept.id } });
      await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
      await db.examConceptMapping.deleteMany({ where: { conceptId: concept.id } });
      await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
      await db.question.deleteMany({ where: { conceptId: concept.id } });

      // Claims & Evidence
      for (const cl of cDef.claims) {
        const claim = await db.claim.create({
          data: {
            id: cl.id,
            conceptId: concept.id,
            statement: cl.statement,
            claimType: cl.claimType,
            epistemicLevel: cl.epistemicLevel,
            confidence: cl.confidence,
            status: 'CANONICAL_CLAIM',
          },
        });

        await db.evidence.create({
          data: {
            claimId: claim.id,
            sourceId: 'LEGACY-POLITY-VAULT-2026',
            locator: cl.evidenceLocator,
            excerpt: cl.statement,
            evidenceType: 'SECONDARY_COMPILATION',
            authority: 'TIER_C_EDUCATIONAL',
            evidentiarySupport: 'STRONG_SUPPORT',
            extractionConfidence: 'HIGH',
          },
        });
      }

      // Content Blocks
      for (const cb of cDef.contentBlocks) {
        await db.contentBlock.create({
          data: {
            conceptId: concept.id,
            type: cb.type,
            title: cb.title,
            body: cb.body,
            order: cb.order,
            visibility: cb.visibility,
          },
        });
      }

      // Exam Mappings
      for (const em of cDef.examMappings) {
        const examId = examMap[em.examCode];
        if (examId) {
          await db.examConceptMapping.create({
            data: {
              examId,
              conceptId: concept.id,
              syllabusUnit: em.syllabusSection,
              relevance: em.relevance,
              priority: em.weightage,
              requiredDepth: 'PROFICIENT',
              notes: em.examNotes,
            },
          });
        }
      }

      // Revision Units
      for (const ru of cDef.revisionUnits) {
        await db.revisionUnit.create({
          data: {
            conceptId: concept.id,
            type: ru.type,
            content: ru.content,
            priority: ru.priority,
            order: ru.order,
          },
        });
      }

      // Questions
      for (const q of cDef.questions) {
        await db.question.create({
          data: {
            id: q.id,
            conceptId: concept.id,
            type: q.type,
            stem: q.stem,
            options: JSON.stringify(q.options),
            correctAnswer: q.correctAnswer,
            explanation: q.explanation,
            trapExplanation: q.trapExplanation || null,
            difficulty: q.difficulty,
            isPYQ: q.isPYQ,
            pyqYear: q.pyqYear || null,
            pyqPaper: q.pyqPaper || null,
          },
        });
      }
    }
  }

  console.log(`Successfully seeded Batch P1 knowledge base. Total concepts: ${BATCH_P1_CONCEPTS.length}.`);
  return BATCH_P1_CONCEPTS.length;
}
