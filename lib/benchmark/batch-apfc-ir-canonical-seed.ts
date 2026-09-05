/**
 * APFC, Industrial Relations, Social Security & Governance Canonical Knowledge Seed
 * Concepts: CON-IRL-001 to CON-IRL-005 (Topics 1 to 5)
 * Mind of Aravalli — Academic Reading Hub
 */

import { db } from '../db/client';
import { CanonicalConceptDefinition } from './batch-e1-canonical-seed';

export const APFC_IR_CANONICAL_CONCEPTS: CanonicalConceptDefinition[] = [
  {
    "id": "CON-IRL-001",
    "topicOrder": 1,
    "topicSlug": "industrial-relations-statutory-foundations-and-dispute-settlement",
    "topicTitle": "Industrial Relations: Statutory Foundations & Dispute Settlement",
    "topicDescription": "Trade Unions Act 1926 registration norms and immunities, Industrial Disputes Act 1947 tripartite mechanisms, and layoff/retrenchment/closure rules.",
    "slug": "trade-unions-act-and-industrial-disputes-architecture",
    "title": "Industrial Relations Foundations: Trade Unions Act 1926 Immunities & ID Act 1947 Settlement Triad",
    "shortDefinition": "Statutory guardrails of Indian industrial relations: Trade Unions Act 1926 (registration thresholds, voluntary Political Fund under Section 16, Section 17 criminal conspiracy immunity, Section 18 civil suit immunity) and Industrial Disputes Act 1947 dispute resolution machinery (Works Committee, Conciliation, Voluntary Arbitration, Adjudication Labour Courts/Tribunals, and Sections 25C/25F layoff and retrenchment compensation).",
    "difficulty": "ADVANCED",
    "claims": [
      {
        "id": "CLM-IRL-001-01",
        "statement": "Under the Trade Unions Act 1926 (Sections 4 & 9A), a minimum of 7 workers can apply for registration, but a registered trade union must maintain at least 10% of workers or 100 workers (whichever is less) engaged or employed in the establishment; Section 16 mandates that political funds must be constituted from strictly voluntary contributions without being a condition of membership.",
        "claimType": "STATUTORY_RULE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Trade Unions Act, 1926, Sections 4, 9A, and 16, Government of India",
        "excerpt": "No Trade Union of workmen shall be registered unless at least ten per cent. or one hundred of the workmen, whichever is less, engaged or employed in the establishment or industry with which it is connected are the members... No member shall be compelled to contribute to the political fund."
      },
      {
        "id": "CLM-IRL-001-02",
        "statement": "Sections 17 and 18 of the Trade Unions Act 1926 grant registered trade unions statutory legal immunities: Section 17 confers immunity from criminal conspiracy under Section 120B IPC for agreements made in furtherance of a trade dispute, while Section 18 confers immunity from civil suits for acts inducing breach of contract of employment or interfering with trade/business.",
        "claimType": "STATUTORY_RULE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Trade Unions Act, 1926, Sections 17 and 18, Ministry of Labour and Employment",
        "excerpt": "Section 17: Immunity from criminal conspiracy in trade disputes... Section 18: Immunity from civil suit in certain cases to any registered Trade Union or any office-bearer or member thereof in respect of any act done in contemplation or furtherance of a trade dispute."
      },
      {
        "id": "CLM-IRL-001-03",
        "statement": "Under the Industrial Disputes Act 1947, retrenchment compensation under Section 25F requires 1 month written notice (or wages in lieu) plus compensation equivalent to 15 days' average pay for every completed year of continuous service or part thereof exceeding 6 months; whereas under Chapter V-B (establishments with ≥100 workers), 3 months notice and prior government permission are mandatory for layoff, retrenchment, or closure.",
        "claimType": "STATUTORY_RULE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Industrial Disputes Act, 1947, Section 25F and Section 25N/25O (Chapter V-B)",
        "excerpt": "Section 25F: The workman has been paid, at the time of retrenchment, compensation which shall be equivalent to fifteen days' average pay for every completed year of continuous service... Chapter V-B applies to an industrial establishment in which not less than one hundred workmen were employed."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Legal Shield for Worker Collectives and the Industrial Peace Treaty",
        "body": "Industrial relations is the delicate legal contract between Capital and Labour mediated by the State:\n1. **The Conspiracy Trap:** In 19th-century common law, if five factory workers banded together and refused to work unless wages were raised, judges threw them into prison for \"criminal conspiracy to harm the employer's business\". The Trade Unions Act of 1926 created a legal armor (Sections 17 and 18): workers can organize strikes and induce breach of contract without being sued for civil damages or prosecuted for criminal conspiracy.\n2. **The Settlement Escalation Ladder:** If a dispute breaks out, the ID Act 1947 creates an escalating dispute resolution ladder: first, bipartite talking in a factory Works Committee; next, mediation by a neutral Conciliation Officer; then, mutual Voluntary Arbitration; and finally, formal judicial trial in Labour Courts and Industrial Tribunals.",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "Master Architecture: Trade Union Immunities & ID Act Dispute Machinery",
        "body": "### Statutory Immunities: Trade Unions Act, 1926\n\n| Statutory Section | Legal Subject Matter | Precise Statutory Requirement / Legal Immunity |\n|---|---|---|\n| **Section 4 & 9A** | Registration Thresholds | Minimum **7 members** can apply; registered union must retain **≥10% or 100 workers** (whichever is less) |\n| **Section 16** | Political Fund | Separate voluntary fund; **STRICTLY VOLUNTARY**; refusing to pay cannot lead to expulsion or discrimination |\n| **Section 17** | **Criminal Immunity** | Immunity from criminal conspiracy (Sec 120B IPC) for acts done in furtherance of a trade dispute |\n| **Section 18** | **Civil Immunity** | Immunity from civil tort liability for inducing breach of contract of employment in a trade dispute |\n| **Section 21A** | Office-Bearer Disqualification | Conviction involving moral turpitude with imprisonment; Minimum age: **18 years** (15 years for general member) |\n\n### Industrial Disputes Act, 1947 Settlement Architecture\n- **Works Committee (Section 3):** Mandatory in establishments with **≥100 workers**. Equal employer-worker representation; promotes day-to-day bipartite cordiality (consultative).\n- **Conciliation Officer (Section 4):** Appointed by appropriate Government; investigates dispute and facilitates settlement; submits conciliation failure report within **14 days**.\n- **Board of Conciliation (Section 5):** Independent Chairman + 2 or 4 equal representatives; submits report within **2 months**.\n- **Voluntary Arbitration (Section 10A):** Mutual written agreement prior to reference to court; arbitrator's award is legally binding after government gazette publication (within 30 days).\n- **Labour Court (Section 7):** Adjudicates Schedule II matters (legality of strikes, dismissal, standing orders).\n- **Industrial Tribunal (Section 7A):** Presiding officer qualified as High Court judge; adjudicates Schedule II and III matters (wages, hours of work, bonus, retrenchment, closure).\n- **National Tribunal (Section 7B):** Appointed by Central Government for disputes of national importance across multiple states.",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "Layoff, Retrenchment & Chapter V-B Special Provisions Formulas",
        "body": "### 1. Layoff Compensation (Section 25C)\n- **Applicability:** Units employing $\\ge 50$ workmen.\n- **Eligibility:** Workman with $\\ge 1$ year continuous service.\n- **Compensation Formula:** **50% of Basic Wages + Dearness Allowance (DA)** for the period of layoff (up to 45 days in a 12-month period).\n\n### 2. Retrenchment Compensation (Section 25F)\n- **Notice:** 1 month written notice stating reasons (or wages in lieu of notice).\n- **Statutory Severance Pay:**\n  $$\\text{Compensation} = 15\\text{ Days' Average Pay} \\times \\text{Completed Years of Continuous Service}$$\n  *(Any period exceeding 6 months is rounded up to a full completed year).*\n\n### 3. Chapter V-B Special Provisions (Mines, Factories, Plantations)\n- **Threshold:** Establishments employing **$\\ge 100$ workmen** on an average working day.\n- **Mandatory Government Clearance:** Prior permission from the appropriate Government is mandatory **before** executing any layoff, retrenchment (Section 25N), or closure (Section 25O).\n- **Notice:** 3 months written notice required for closure.",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Competitive Examination Traps & Statutory Thresholds",
        "body": "### Frequent Examiner Traps\n1. **Section 17 vs 18 Inversion:** Section 17 is **CRIMINAL Immunity**; Section 18 is **CIVIL Immunity**. Examiners constantly invert these two sections in UPSC APFC and EPFO EO/AO questions.\n2. **Political Fund Voluntariness:** Contribution to the Political Fund under Section 16 is **STRICTLY VOLUNTARY**. A trade union cannot deduct it from general dues or expel a member for non-payment.\n3. **Trade Union Age Slabs:** A person must be **at least 15 years old** to be an ordinary member of a registered trade union, but must be **at least 18 years old** to be elected as an office-bearer.\n4. **Works Committee Mandate:** Works Committees are legally constituted in establishments employing **100 or more workers** (Section 3), NOT 50 or 20.\n5. **Retrenchment Pay Fraction:** Retrenchment compensation is **15 days' average pay** (not 30 days or 1 month).\n\n### Exam Alignment\n- **UPSC APFC & EPFO EO/AO:** Industrial Relations & Labour Laws. Forms 20–25% of the total question paper. Highest yield topic in the APFC syllabus.",
        "order": 4
      }
    ],
    "examMappings": [
      {
        "examCode": "UPSC_APFC",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "EXPERT",
        "syllabusUnit": "Industrial Relations & Labour Laws: Statutory Framework",
        "notes": "Core topic. Exhaustive coverage of Trade Unions Act 1926, ID Act 1947, Chapter V-B, retrenchment formula."
      },
      {
        "examCode": "UPSC_EPFO_EOAO",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "EXPERT",
        "syllabusUnit": "Industrial Relations & Labour Laws",
        "notes": "Sections 17 & 18 immunities, Works Committee 100 threshold, 15 days retrenchment pay."
      },
      {
        "examCode": "UPSC_CSE",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "PROFICIENT",
        "syllabusUnit": "GS Paper 3: Employment, Labour Reforms & Industrial Disputes",
        "notes": "Labour market rigidity, Chapter V-B threshold debate, hire-and-fire controversies."
      },
      {
        "examCode": "RBI_GRADE_B",
        "relevance": "DIRECT_OVERLAY",
        "priority": "HIGH",
        "requiredDepth": "PROFICIENT",
        "syllabusUnit": "Economic & Social Issues: Industrial & Labour Policy",
        "notes": "Ease of doing business vs labour security, dispute resolution impact on FDI."
      },
      {
        "examCode": "NABARD_GRADE_A",
        "relevance": "ANCILLARY_COVERAGE",
        "priority": "MEDIUM",
        "requiredDepth": "AWARENESS",
        "syllabusUnit": "Rural Development: Agro-Industrial Relations",
        "notes": "Labour laws in food processing and plantation sectors."
      },
      {
        "examCode": "RPSC_RAS",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "PROFICIENT",
        "syllabusUnit": "Mains Paper 1: Management - Industrial Relations",
        "notes": "Labour dispute settlement machinery, trade union role in Rajasthan industries (Bhiwadi, Neemrana)."
      },
      {
        "examCode": "IBPS_PO",
        "relevance": "ANCILLARY_COVERAGE",
        "priority": "MEDIUM",
        "requiredDepth": "AWARENESS",
        "syllabusUnit": "General Awareness",
        "notes": "Trade unions in banking sector (AIBEA)."
      },
      {
        "examCode": "SBI_PO",
        "relevance": "ANCILLARY_COVERAGE",
        "priority": "MEDIUM",
        "requiredDepth": "AWARENESS",
        "syllabusUnit": "General Awareness",
        "notes": "Industrial disputes and banking operations."
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "IR Foundations: Trade Unions Act 1926: Min 7 to apply; retains 10% or 100 workers; Sec 16 = voluntary political fund; Sec 17 = Criminal immunity (120B IPC); Sec 18 = Civil immunity. ID Act 1947: Works Committee = 100+ workers. Layoff (Sec 25C) = 50% basic+DA (50+ workers). Retrenchment (Sec 25F) = 1 month notice + 15 days avg pay per year. Chapter V-B (100+ workers) = prior Govt nod needed.",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Indian industrial relations jurisprudence is anchored in the Trade Unions Act 1926 and the Industrial Disputes Act 1947. The Trade Unions Act allows 7 workers to apply for registration, requiring registered bodies to represent at least 10% or 100 workers in the establishment. Section 16 establishes that contributions to the political fund are strictly voluntary. Sections 17 and 18 provide vital immunities: Section 17 confers criminal immunity against Section 120B IPC conspiracy charges for trade disputes, while Section 18 shields office-bearers from civil liability for inducing contractual breaches during strikes. The Industrial Disputes Act 1947 institutes a tiered dispute settlement machinery: Works Committees in units with ≥100 workers, Conciliation Officers (reporting in 14 days), Voluntary Arbitration, and adjudication via Labour Courts and Industrial Tribunals. Section 25F guarantees retrenchment compensation equal to 15 days' average pay per year of service with 1 month notice, while Chapter V-B mandates 3 months notice and prior government clearance for layoff, retrenchment, or closure in factories, mines, and plantations employing 100 or more workers.",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "# Architecture of Industrial Relations & Dispute Resolution\n\n1. **Trade Unions Act 1926 Statutory Architecture:**\n   - Application: Minimum 7 workers.\n   - Sustained Registration: 10% of workers or 100 workers (whichever is less).\n   - Section 16: Voluntary Political Fund (no penalty for non-contribution).\n   - **Section 17: Criminal Conspiracy Immunity (Section 120B IPC).**\n   - **Section 18: Civil Suits Immunity (Tortious breach of employment contract).**\n   - Age Bounds: 15 years for member, 18 years for office-bearer.\n2. **ID Act 1947 Dispute Settlement Escalation:**\n   - Bipartite: Works Committee (Section 3, ≥100 workers).\n   - Conciliation: Conciliation Officer (Sec 4, 14-day report) -> Board of Conciliation (Sec 5, 2-month report).\n   - Voluntary: Arbitration (Section 10A, award published in 30 days).\n   - Adjudication: Labour Court (Sec 7, Sched II) -> Industrial Tribunal (Sec 7A, Sched II & III) -> National Tribunal (Sec 7B).\n3. **Compensation & Chapter V-B Thresholds:**\n   - Layoff (Sec 25C, ≥50 workers): 50% Basic + DA for first 45 days.\n   - Retrenchment (Sec 25F): 1 month notice + 15 days' average pay per completed year.\n   - Chapter V-B (≥100 workers): Mandatory prior Government permission for layoff, retrenchment, or closure.",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "stem": "Under the Trade Unions Act, 1926, which specific section confers immunity upon registered trade unions and their office-bearers from CRIMINAL CONSPIRACY charges under Section 120B of the Indian Penal Code for acts done in furtherance of a trade dispute?",
        "options": [
          "Section 16",
          "Section 17",
          "Section 18",
          "Section 21A"
        ],
        "correctAnswer": "Section 17",
        "explanation": "Section 17 of the Trade Unions Act 1926 provides immunity from criminal conspiracy under Section 120B IPC to office-bearers and members of a registered trade union in respect of any agreement made between them for the purpose of furthering any trade dispute. (Section 18 provides immunity from civil suits; Section 16 governs Political Funds).",
        "trapExplanation": "Candidates frequently invert Section 17 (Criminal) with Section 18 (Civil).",
        "difficulty": "MEDIUM",
        "isPYQ": true,
        "pyqYear": 2015,
        "pyqPaper": "UPSC APFC",
        "examinerTrapPattern": "Inverting Section 17 (Criminal Immunity) and Section 18 (Civil Immunity)."
      },
      {
        "type": "APPLIED_SCENARIO",
        "stem": "An industrial factory employing 250 workmen decides to retrench 20 permanent workers due to automation. Under Chapter V-B of the Industrial Disputes Act 1947, what mandatory procedural step MUST the employer take before retrenching these workers?",
        "options": [
          "Give 24 hours verbal notice to the workers and pay 5 days average wages.",
          "Obtain prior permission from the appropriate Government and serve at least 3 months written notice stating clearly the reasons for retrenchment.",
          "Simply publish a notice in a local daily newspaper without informing the government.",
          "Refer the retrenchment decision to voluntary arbitration under Section 10A."
        ],
        "correctAnswer": "Obtain prior permission from the appropriate Government and serve at least 3 months written notice stating clearly the reasons for retrenchment.",
        "explanation": "Under Chapter V-B of the Industrial Disputes Act 1947 (applicable to factories, mines, and plantations employing 100 or more workmen), Section 25N mandates that no workman can be retrenched without giving 3 months notice in writing (or wages in lieu) AND obtaining the prior permission of the appropriate Government.",
        "trapExplanation": "Candidates assume the general Section 25F rules (1 month notice and no govt permission) apply, forgetting that Chapter V-B applies to units with 100 or more workers.",
        "difficulty": "HARD",
        "isPYQ": false,
        "examinerTrapPattern": "Failing to apply Chapter V-B special government permission rules for units with ≥100 workers."
      }
    ]
  },
  {
    "id": "CON-IRL-002",
    "topicOrder": 2,
    "topicSlug": "the-four-new-labour-codes-and-legislative-reforms",
    "topicTitle": "The 4 New Labour Codes & Legislative Reforms",
    "topicDescription": "Amalgamation of 29 central laws into 4 Labour Codes (Wages 2019, IR 2020, Social Security 2020, OSHWC 2020), 300 worker threshold, 50% wage cap, and strike notice.",
    "slug": "the-four-new-labour-codes-synthesis-and-comparative-matrix",
    "title": "The 4 New Labour Codes: Legislative Codification, 300-Worker Thresholds & Structural Reforms",
    "shortDefinition": "The landmark consolidation of 29 archaic central labour statutes into 4 modern Labour Codes: Code on Wages 2019 (universal floor wage, 50% allowance cap), Industrial Relations Code 2020 (Standing Orders and retrenchment threshold raised to 300 workers, 14-day strike notice), Code on Social Security 2020 (gig and platform worker statutory recognition), and OSHWC Code 2020.",
    "difficulty": "ADVANCED",
    "claims": [
      {
        "id": "CLM-IRL-002-01",
        "statement": "The Government of India consolidated 29 Central Labour Laws into 4 simplified Labour Codes: 1. Code on Wages 2019 (subsumes 4 Acts); 2. Industrial Relations Code 2020 (subsumes 3 Acts); 3. Code on Social Security 2020 (subsumes 9 Acts); and 4. Occupational Safety, Health and Working Conditions (OSHWC) Code 2020 (subsumes 13 Acts).",
        "claimType": "STATUTORY_RULE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Ministry of Labour and Employment, Report on Codification of Labour Laws & Gazette of India Extraordinary, 2019-2020",
        "excerpt": "The 29 central labour laws have been amalgamated, rationalized and simplified into four Labour Codes: Code on Wages, 2019; Industrial Relations Code, 2020; Code on Social Security, 2020; and Occupational Safety, Health and Working Conditions Code, 2020."
      },
      {
        "id": "CLM-IRL-002-02",
        "statement": "Under the Industrial Relations Code 2020, the threshold for mandatory preparation of Standing Orders and prior government permission for Layoff, Retrenchment, or Closure is elevated from 100 workers (under the 1946/1947 Acts) to 300 workers, while a mandatory 14-day notice is instituted before going on strike or declaring a lockout across ALL industrial establishments (not just public utility services).",
        "claimType": "STATUTORY_RULE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Industrial Relations Code, 2020, Section 28 (Standing Orders), Section 62 (Strikes), Section 77 (Layoff/Retrenchment)",
        "excerpt": "The provisions of this Chapter shall apply to an industrial establishment wherein three hundred or more workers were employed... No person employed in an industrial establishment shall go on strike without giving to the employer notice of strike within six weeks before striking."
      },
      {
        "id": "CLM-IRL-002-03",
        "statement": "The Code on Wages 2019 standardizes the definition of 'Wages' across all 4 codes into a 3-part structure (Basic Pay + DA + Retaining Allowance) and caps excluded allowances (HRA, Overtime, Conveyance, Bonus, EPF) at 50% of total remuneration, mandating that any excess allowance above 50% must be added back to calculate statutory Provident Fund, Gratuity, and ESI contributions.",
        "claimType": "STATUTORY_RULE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Code on Wages, 2019, Section 2(y) (Definition of Wages), Ministry of Law and Justice",
        "excerpt": "Provided that for calculating the wages under this clause, if payments made by the employer to the employee under clauses (a) to (i) exceeds one-half, or such other per cent. as may be notified... the amount which exceeds one-half shall be deemed to be calculated as part of wages."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Replacing the 29-Room Labyrinth with a Modern 4-Tower Complex",
        "body": "For 70 years, an Indian factory manager operated inside a bureaucratic nightmare:\n1. **The 29 Definitions of a 'Worker':** One law said a worker is someone earning under ₹10,000; another law said under ₹21,000; a third law said anyone working with their hands. An HR department spent more time navigating 29 archaic statutes from the 1930s and 1940s than running the business.\n2. **The 4-Code Overhaul:** The Government demolished the 29 old laws and consolidated them into 4 modern codes: Wages, Relations, Social Security, and Safety.\n3. **The 50% Allowance Crackdown:** Historically, companies paid a worker a tiny basic salary (e.g. ₹5,000) and stuffed ₹35,000 into 'special travel allowances' to avoid paying retirement EPF and gratuity. The new Code on Wages shuts this loophole: if allowances exceed 50% of total pay, the excess is taxed for EPF, protecting worker retirement savings.",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "Master Comparative Matrix: The 4 New Labour Codes",
        "body": "### Synthesis Matrix: The 4 Labour Codes\n\n| Labour Code | Subsumed Acts (Count) | Landmark Structural Breakthroughs | Critical Numerical Thresholds |\n|---|---|---|---|\n| **1. Code on Wages, 2019** | **4 Acts** (Payment of Wages 1936, Minimum Wages 1948, Payment of Bonus 1965, Equal Remuneration 1976) | Universal minimum wage for **100% of workers**; Statutory National Floor Wage; Standardized **50% cap on allowances**; Final wage settlement within **2 working days** of exit | Floor Wage fixed by Centre; Bonus minimum 8.33% / max 20% |\n| **2. Industrial Relations Code, 2020** | **3 Acts** (Trade Unions Act 1926, Standing Orders Act 1946, ID Act 1947) | Prior Govt nod for Layoff/Retrenchment/Closure raised; Formalizes **Fixed-Term Employment (FTE)**; Sole Negotiating Union threshold; Mandatory **14-day strike notice across ALL units** | Threshold raised from 100 to **300 workers**; Sole negotiating union needs **≥51% worker support** (or council with ≥20% reps) |\n| **3. Code on Social Security, 2020** | **9 Acts** (EPF Act 1952, ESI Act 1948, Maternity 1961, Gratuity 1972, Cine Workers, Building Workers, etc.) | First statutory recognition of **Gig and Platform Workers**; National Social Security Board; Aggregator contributions; Gratuity for Fixed-Term Employees after **1 year** | Aggregators contribute **1% to 2% of annual turnover** (capped at 5% of amount paid to gig workers); Gratuity threshold = **1 year** for FTE |\n| **4. OSHWC Code, 2020** | **13 Acts** (Factories Act 1948, Mines Act 1952, Contract Labour Act 1970, Inter-State Migrant Act 1979, Plantations, etc.) | Standard **8-hour day / 48-hour week** with double pay for overtime; Women permitted in **all sectors & night shifts (19:00 to 06:00)** with safety consent; Journey allowance for inter-state migrants | Contract labour applicability raised from 20 to **50 workers**; Inter-state migrant worker wage cap = **₹18,000/month** |",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "The 50% Wage Cap Mathematical Formula & Take-Home Salary Impact",
        "body": "### The Section 2(y) 50% Allowance Rule\nLet Total Gross Remuneration be $R$:\n$$R = \\text{Basic Pay} + \\text{DA} + \\text{Retaining Allowance} + \\sum \\text{Excluded Allowances (HRA, Conveyance, Bonus, Overtime)}$$\n- If $\\sum \\text{Excluded Allowances} \\le 0.50 \\times R$: Then $\\text{Wages for EPF/Gratuity} = \\text{Basic} + \\text{DA} + \\text{Retaining Allowance}$.\n- If $\\sum \\text{Excluded Allowances} > 0.50 \\times R$: The excess amount $(\\sum \\text{Excluded} - 0.50 \\times R)$ is mandatorily added to Basic+DA:\n  $$\\text{Deemed Statutory Wages} = 0.50 \\times R$$\n\n*Direct Consequence:* Employers cannot suppress retirement savings by keeping basic pay artificially low. It increases worker retirement gratuity and EPF accumulations, while slightly reducing net monthly in-hand take-home pay.",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Competitive Examination Traps & Codification Timelines",
        "body": "### Frequent Examiner Traps\n1. **The 300-Worker Threshold Trap:** Under IR Code 2020, the threshold for mandatory Standing Orders and Government permission for retrenchment/closure is **300 WORKERS** (raised from 100 in the 1947 Act).\n2. **Fixed-Term Gratuity Threshold:** Regular employees require 5 years of continuous service for Gratuity; Fixed-Term Employees (FTE) are eligible for pro-rata gratuity on completing just **1 YEAR OF SERVICE**.\n3. **Universal Strike Notice:** Under the 1947 Act, a 14-day strike notice was mandatory *only in Public Utility Services* (railways, water, electricity). Under the IR Code 2020, a **14-day strike notice is mandatory in ALL industrial establishments**!\n4. **Aggregator Turnover Contribution:** Aggregators (e.g. Swiggy, Zomato, Uber) contribute **1% to 2% of annual turnover**, subject to a maximum cap of **5% of the total amount payable to gig workers**.\n\n### Exam Alignment\n- **UPSC APFC & EPFO EO/AO:** The single highest-scoring topic in the current exam cycle. Direct questions on threshold numbers, subsumed acts, and statutory definitions.\n- **UPSC CSE:** GS Paper 3. Labour market flexibility, employment generation, and social security for unorganized workers.",
        "order": 4
      }
    ],
    "examMappings": [
      {
        "examCode": "UPSC_APFC",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "EXPERT",
        "syllabusUnit": "Labour Codes: 4 New Labour Codes Synthesis",
        "notes": "Core topic. Exhaustive coverage of all 4 codes, 300 worker threshold, 50% wage cap, gig worker definitions."
      },
      {
        "examCode": "UPSC_EPFO_EOAO",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "EXPERT",
        "syllabusUnit": "Industrial Relations & Labour Codes",
        "notes": "Repeated questions on subsumed acts counts (4, 3, 9, 13), 14-day strike notice, FTE gratuity."
      },
      {
        "examCode": "UPSC_CSE",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "EXPERT",
        "syllabusUnit": "GS Paper 3: Labour Market Reforms & Codification",
        "notes": "Balance between ease of doing business and worker welfare, gig worker social security, formalization of labour."
      },
      {
        "examCode": "RBI_GRADE_B",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "PROFICIENT",
        "syllabusUnit": "Economic & Social Issues: Labour Policy & Industrial Performance",
        "notes": "Macroeconomic impact of 300-worker threshold on plant size, manufacturing scale, and FDI."
      },
      {
        "examCode": "NABARD_GRADE_A",
        "relevance": "ANCILLARY_COVERAGE",
        "priority": "MEDIUM",
        "requiredDepth": "AWARENESS",
        "syllabusUnit": "Rural Development: Plantation Labour Reforms",
        "notes": "OSHWC Code applicability to plantations and agro-processing."
      },
      {
        "examCode": "RPSC_RAS",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "EXPERT",
        "syllabusUnit": "Mains Paper 1: Management - New Labour Codes",
        "notes": "Direct 5 and 10-mark questions on 4 Labour Codes and Rajasthan State rules draft."
      },
      {
        "examCode": "IBPS_PO",
        "relevance": "ANCILLARY_COVERAGE",
        "priority": "MEDIUM",
        "requiredDepth": "AWARENESS",
        "syllabusUnit": "General Awareness: Labour Reforms",
        "notes": "Basic provisions of Code on Wages."
      },
      {
        "examCode": "SBI_PO",
        "relevance": "ANCILLARY_COVERAGE",
        "priority": "MEDIUM",
        "requiredDepth": "AWARENESS",
        "syllabusUnit": "General Awareness",
        "notes": "Labour code financial impact on corporate balance sheets."
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "4 Labour Codes: 29 Acts subsumed. 1. Wages 2019 (4 Acts): Universal floor wage, 50% allowance cap. 2. IR Code 2020 (3 Acts): Standing orders & retrenchment threshold raised from 100 to 300 workers; 14-day strike notice across ALL units; 51% negotiating union. 3. Social Security 2020 (9 Acts): Gig/platform workers recognized (1-2% aggregator turnover); Gratuity after 1 year for fixed-term staff. 4. OSHWC 2020 (13 Acts): 8hr/day, 48hr/week, women night shifts allowed.",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "India's historic labour reform consolidated 29 complex Central Labour Laws into 4 simplified modern Labour Codes. The Code on Wages 2019 subsumes 4 acts, establishing a universal minimum wage for 100% of workers, a statutory National Floor Wage, a standardized 50% cap on non-basic allowances for calculating statutory benefits, and mandatory final wage disbursement within 2 working days of exit. The Industrial Relations Code 2020 subsumes 3 acts, raising the threshold for mandatory Standing Orders and prior government clearance for Layoff, Retrenchment, or Closure from 100 to 300 workers, mandating a 14-day advance strike/lockout notice across all industrial establishments, and setting a 51% worker threshold for Sole Negotiating Unions. The Code on Social Security 2020 subsumes 9 acts, providing the first statutory recognition of Gig and Platform Workers funded by a 1%–2% aggregator turnover levy and reducing the gratuity eligibility threshold for Fixed-Term Employees to just 1 year. The OSHWC Code 2020 amalgamates 13 acts, codifying 48-hour workweeks and permitting women to work in all establishments and night shifts with safety consent.",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "# Architecture of the 4 New Labour Codes\n\n1. **Legislative Subsumption Breakdown:**\n   - Code on Wages, 2019: Subsumes 4 Acts.\n   - Industrial Relations Code, 2020: Subsumes 3 Acts.\n   - Code on Social Security, 2020: Subsumes 9 Acts.\n   - OSHWC Code, 2020: Subsumes 13 Acts.\n   - **Total Central Acts Subsumed: 29 Acts.**\n2. **Critical Structural Invariants:**\n   - Retrenchment Threshold: **300 Workers** (Raised from 100 in ID Act 1947).\n   - Strike Notice: **Mandatory 14 days** across ALL industrial sectors.\n   - Allowance Cap: **50% Maximum** of total remuneration under Section 2(y).\n   - Gig Worker Funding: **1% to 2% of aggregator turnover** (capped at 5% of gig payout).\n   - Fixed-Term Gratuity: **1 Year Service** (vs 5 years for regular staff).",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "stem": "Under the Industrial Relations Code 2020, what is the revised employee threshold above which an industrial establishment MUST obtain prior permission from the appropriate Government before executing a Layoff, Retrenchment, or Closure?",
        "options": [
          "50 or more workers",
          "100 or more workers",
          "300 or more workers",
          "500 or more workers"
        ],
        "correctAnswer": "300 or more workers",
        "explanation": "Under Chapter IX (Section 77) of the Industrial Relations Code 2020, the threshold requiring an industrial establishment (factory, mine, or plantation) to obtain prior permission from the government for layoff, retrenchment, or closure was raised from 100 workers (under Chapter V-B of the erstwhile ID Act 1947) to 300 or more workers.",
        "trapExplanation": "Candidates often pick 100 workers, which was the legacy threshold under the Industrial Disputes Act 1947.",
        "difficulty": "MEDIUM",
        "isPYQ": false,
        "examinerTrapPattern": "Confusing the legacy 100-worker threshold under ID Act 1947 with the 300-worker threshold under IR Code 2020."
      },
      {
        "type": "APPLIED_SCENARIO",
        "stem": "Under the Code on Social Security 2020, what is the minimum tenure of continuous service required for a FIXED-TERM EMPLOYEE (FTE) to become eligible for statutory gratuity payments on a pro-rata basis?",
        "options": [
          "5 years of continuous service",
          "3 years of continuous service",
          "1 year of continuous service",
          "6 months of continuous service"
        ],
        "correctAnswer": "1 year of continuous service",
        "explanation": "Under the Code on Social Security 2020, while regular permanent employees must complete 5 years of continuous service to qualify for gratuity, Fixed-Term Employees (FTE) are granted the special benefit of receiving pro-rata gratuity on completion of just 1 year of continuous service.",
        "trapExplanation": "Candidates frequently pick 5 years (the general gratuity rule under the 1972 Act) instead of the 1-year exception for Fixed-Term Employees.",
        "difficulty": "HARD",
        "isPYQ": false,
        "examinerTrapPattern": "Failing to identify the 1-year gratuity exception for Fixed-Term Employees under the Social Security Code."
      }
    ]
  },
  {
    "id": "CON-IRL-003",
    "topicOrder": 3,
    "topicSlug": "core-social-security-statutes-epf-esi-and-gratuity",
    "topicTitle": "Core Social Security Statutes: EPF, ESI, Gratuity & Maternity",
    "topicDescription": "EPF & MP Act 1952 contribution split (12% = 8.33% EPS + 3.67% EPF + 0.5% EDLI), ESI Act 1948 (4.0% rate), Gratuity formula (15/26), and Maternity Benefit 2017 (26 weeks).",
    "slug": "core-social-security-statutes-epf-esi-gratuity-and-maternity",
    "title": "Core Social Security Statutes: EPF 12% Split, ESI 4% Premium, Gratuity (15/26) & Maternity Benefit",
    "shortDefinition": "The mathematical and legal mechanics of India's core formal social security statutes: Employees' Provident Funds & Miscellaneous Provisions Act 1952 (EPF, EPS 1995, EDLI 1976 contribution split), Employees' State Insurance Act 1948 (4.0% contribution w.e.f. 2019), Payment of Gratuity Act 1972 (15/26 formula, ₹20 Lakh cap), and Maternity Benefit Act 2017 (26 weeks paid leave, crèche mandate).",
    "difficulty": "ADVANCED",
    "claims": [
      {
        "id": "CLM-IRL-003-01",
        "statement": "Under the Employees' Provident Funds and Miscellaneous Provisions Act 1952 (applicable to establishments with ≥20 employees earning up to ₹15,000/month), the employee contributes 12% of Basic+DA fully to EPF; the employer contributes 12%, which is statutorily split into 8.33% to the Employees' Pension Scheme (EPS 1995, capped at ₹1,250/month) and 3.67% to EPF, plus 0.50% to EDLI (providing life cover up to ₹7 Lakh).",
        "claimType": "STATUTORY_RULE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Employees' Provident Funds and Miscellaneous Provisions Act, 1952, Section 6, and EPFO Master Directives",
        "excerpt": "The contribution which shall be paid by the employer to the Fund shall be twelve per cent. of the basic wages, dearness allowance... Out of the 12% employer contribution, 8.33% is remitted to the Employees' Pension Scheme and 3.67% to the Provident Fund."
      },
      {
        "id": "CLM-IRL-003-02",
        "statement": "Under the Employees' State Insurance (ESI) Act 1948 (applicable to non-seasonal factories/units with ≥10 employees earning up to ₹21,000/month), the statutory contribution rate is 4.0% of wages w.e.f. July 1, 2019 (comprising 3.25% by the employer and 0.75% by the employee; employees earning daily wages ≤₹176 are exempt from employee contribution).",
        "claimType": "STATUTORY_RULE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Employees' State Insurance (Central) Rules, Rule 50, Ministry of Labour and Employment Notification, 2019",
        "excerpt": "The rates of contribution were reduced w.e.f. 01.07.2019: Employer's share reduced from 4.75% to 3.25% and Employee's share reduced from 1.75% to 0.75%, making total contribution 4.0%."
      },
      {
        "id": "CLM-IRL-003-03",
        "statement": "Under the Payment of Gratuity Act 1972, gratuity is calculated as [Gratuity = (15 / 26) × Last Drawn Wage × Tenure in Years] after minimum 5 years continuous service, capped at a statutory ceiling of ₹20,00,000 (₹20 Lakh); whereas under the Maternity Benefit (Amendment) Act 2017, paid leave is 26 weeks for up to 2 surviving children (12 weeks for 3rd child), and establishments with ≥50 employees must provide a crèche facility with 4 daily visits.",
        "claimType": "STATUTORY_RULE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Payment of Gratuity Act 1972, Section 4, and Maternity Benefit (Amendment) Act 2017, Section 5 & 11A",
        "excerpt": "For every completed year of service, the employer shall pay gratuity at the rate of fifteen days' wages based on the rate of wages last drawn... The amount of gratuity payable shall not exceed twenty lakh rupees... Every establishment having fifty or more employees shall have the facility of crèche."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Four Pillars of Worker Contingency Insurance",
        "body": "A worker faces four great life hazards: becoming too old to work (EPF/EPS), sudden sickness or factory accident (ESIC), lifelong employment termination (Gratuity), and pregnancy/childbirth (Maternity):\n1. **The EPF 12% Split:** Both the worker and boss put 12% into the pot. But the employer's 12% is cleverly split: 8.33% is directed into a pension pool to pay monthly pensions after age 58, while 3.67% goes into the lump-sum provident fund.\n2. **The 26-Day Month Gratuity Formula:** When calculating gratuity severance, why does the formula divide by 26 instead of 30? Because a standard working month contains 26 working days (excluding 4 Sundays), giving the worker a higher daily wage multiplier for each of the 15 days.\n3. **Maternity Protection:** The 2017 amendment elevated India's paid maternity leave from 12 weeks to 26 weeks, placing India among the top 3 countries globally in paid maternity protection.",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "Master Architecture: EPF Contribution Split & Social Security Matrix",
        "body": "### EPF & MP Act, 1952: Master Contribution Architecture\n\n| Scheme Under EPF Act | Coverage Threshold / Wage Cap | Employee Contribution | Employer Contribution Split | Central Govt Contribution |\n|---|---|---|---|---|\n| **1. EPF Scheme, 1952** (Provident Fund) | Units with **≥20 employees** earning up to **₹15,000/month** | **12%** of Basic+DA | **3.67%** to EPF Account | NIL |\n| **2. EPS, 1995** (Pension Scheme) | All EPF members | NIL | **8.33%** (capped at wage ceiling of ₹15,000 = max ₹1,250/month) | **1.16%** of wage up to ₹15,000 |\n| **3. EDLI, 1976** (Deposit Linked Insurance) | All EPF members | NIL | **0.50%** of wages (Life insurance min **₹2.5 Lakh**, max **₹7.0 Lakh**) | NIL |\n| **4. Admin Charges** | Administration costs | NIL | **0.50%** of wages | NIL |\n| **Total Statutory Split** | | **12.00%** | **13.00%** (12% fund + 0.5% EDLI + 0.5% admin) | 1.16% to Pension |\n\n### ESI, Gratuity & Maternity Benefit Comparison\n- **ESI Act 1948:** Applicability = **≥10 employees** earning up to **₹21,000/month** (₹25,000 for PwD). Total contribution = **4.0%** (Employer: **3.25%**, Employee: **0.75%**). Low-wage workers earning $\\le ₹176\\text{/day}$ exempt.\n- **Payment of Gratuity Act 1972:** Eligibility = **5 years continuous service** (waived in case of death/disability). Formula: $\\text{Gratuity} = \\frac{15}{26} \\times \\text{Last Wage} \\times \\text{Years}$. Statutory Ceiling = **₹20,00,000 (₹20 Lakh)**.\n- **Maternity Benefit Act 2017:** Eligibility = worked $\\ge 80\\text{ days}$ in preceding 12 months. Paid leave = **26 weeks** (for up to 2 surviving children); **12 weeks** for 3+ children or commissioning/adoptive mothers. Mandatory **crèche facility in units with ≥50 employees**.",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "Gratuity Denominator Mathematics & EDLI Life Cover Calculation",
        "body": "### 1. The 15/26 Gratuity Mathematical Mechanism\n$$\\text{Gratuity Amount} = \\frac{15}{26} \\times \\text{Last Drawn Basic Wage + DA} \\times N$$\nWhere $N$ is completed years of service (fractions $>6\\text{ months}$ count as 1 full year).\n- *Why 26?* Under Section 4(2), the monthly wage must be converted to a daily wage by dividing by 26 working days (not 30), yielding a higher daily rate ($W/26$), which is then multiplied by 15 days.\n\n### 2. EDLI Insurance Formula (2021 Notification)\n$$\\text{EDLI Benefit} = [35 \\times \\text{Average Monthly Wages (Max ₹15,000)}] + 50\\% \\text{ of Average Balance in PF (Max ₹1.75 Lakh)}$$\n- **Minimum Benefit:** **₹2,50,000 (₹2.5 Lakh)**.\n- **Maximum Benefit:** **₹7,00,000 (₹7.0 Lakh)**.",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Competitive Examination Traps & Statutory Thresholds",
        "body": "### Frequent Examiner Traps\n1. **The 12% Employer Split Trap:** Out of the employer's 12% contribution, **8.33% goes to Pension (EPS)** and **3.67% goes to Provident Fund (EPF)**. (Examiners often reverse these numbers: 3.67% to pension and 8.33% to PF!).\n2. **ESI Current Rates:** The total ESI rate is **4.00%** (Employer: 3.25%, Employee: 0.75%), reduced from the legacy 6.5% rate (4.75% + 1.75%) in 2019.\n3. **Gratuity Ceiling:** The current statutory gratuity limit is **₹20,00,000 (₹20 Lakh)**, raised from the earlier ₹10 Lakh ceiling.\n4. **Crèche Threshold:** Crèche facility is mandatory in establishments employing **50 or more employees** (not 30 or 100).\n5. **Maternity Duration Slabs:** 26 weeks for **first two surviving children**; strictly **12 weeks** for the third child onwards.\n\n### Exam Alignment\n- **UPSC APFC & EPFO EO/AO:** Social Security & Labour Legislation. The core subject of the exam; direct numerical questions on all contribution splits and thresholds.\n- **UPSC CSE:** GS Paper 2 & 3. Social security coverage, gender equality in labour markets.",
        "order": 4
      }
    ],
    "examMappings": [
      {
        "examCode": "UPSC_APFC",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "EXPERT",
        "syllabusUnit": "Social Security Laws: EPF, ESI, Gratuity & Maternity",
        "notes": "Highest priority. 12% split (8.33% EPS / 3.67% EPF), ESI 4%, Gratuity 15/26 and ₹20L cap, Crèche 50 threshold."
      },
      {
        "examCode": "UPSC_EPFO_EOAO",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "EXPERT",
        "syllabusUnit": "Social Security in India",
        "notes": "Core topic. Direct MCQs on contribution rates, EDLI ₹7L cap, 26 weeks maternity leave."
      },
      {
        "examCode": "UPSC_CSE",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "PROFICIENT",
        "syllabusUnit": "GS Paper 2: Welfare Schemes for Vulnerable Sections",
        "notes": "Maternity benefit implementation gaps, social security formalization via EPFO."
      },
      {
        "examCode": "RBI_GRADE_B",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "PROFICIENT",
        "syllabusUnit": "Finance: Pension Funds & Social Security Architecture",
        "notes": "EPFO corpus management, equity investments by EPFO, NPS vs EPS."
      },
      {
        "examCode": "NABARD_GRADE_A",
        "relevance": "ANCILLARY_COVERAGE",
        "priority": "MEDIUM",
        "requiredDepth": "AWARENESS",
        "syllabusUnit": "Rural Development: Social Security Schemes",
        "notes": "PMRPY and ABRY employment subsidy schemes."
      },
      {
        "examCode": "RPSC_RAS",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "EXPERT",
        "syllabusUnit": "Mains Paper 1: Social Security Legislation",
        "notes": "EPF, ESI, Maternity Benefit Act amendments, Gratuity provisions."
      },
      {
        "examCode": "IBPS_PO",
        "relevance": "ANCILLARY_COVERAGE",
        "priority": "MEDIUM",
        "requiredDepth": "AWARENESS",
        "syllabusUnit": "General Awareness: Social Security",
        "notes": "EPFO interest rates, ESI wage limits (₹21,000)."
      },
      {
        "examCode": "SBI_PO",
        "relevance": "ANCILLARY_COVERAGE",
        "priority": "MEDIUM",
        "requiredDepth": "AWARENESS",
        "syllabusUnit": "General Awareness",
        "notes": "EPFO subscriber additions, social security funds."
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Social Security: EPF (≥20 staff, ₹15,000 wage cap): Employee = 12% to EPF; Employer = 12% (split: 8.33% EPS pension + 3.67% EPF) + 0.5% EDLI (life cover ₹2.5L to ₹7L). ESI (≥10 staff, ₹21,000 wage cap): Total 4% (Employer 3.25%, Employee 0.75%). Gratuity: 5 yrs service, formula = (15/26) * Wage * Years, capped at ₹20 Lakh. Maternity: 26 weeks (≤2 kids), 12 weeks (3+ kids); Crèche mandatory for ≥50 staff.",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "India's formal social security framework is governed by four landmark statutes: The Employees' Provident Funds & Miscellaneous Provisions Act 1952 applies to establishments with ≥20 employees earning up to ₹15,000/month; the employee contributes 12% of Basic+DA to EPF, while the employer's 12% is bifurcated into 8.33% to the Employees' Pension Scheme (EPS 1995, capped at ₹1,250/month) and 3.67% to EPF, alongside 0.50% to EDLI (providing life insurance cover between ₹2.5 Lakh and ₹7 Lakh). The Employees' State Insurance (ESI) Act 1948 covers non-seasonal units with ≥10 employees earning up to ₹21,000/month with a reduced 4.0% combined contribution rate (Employer: 3.25%, Employee: 0.75%). The Payment of Gratuity Act 1972 provides severance pay on completion of 5 years of service, calculated as (15 / 26) × Last Drawn Wages × Tenure in Years, capped at ₹20,00,000 (₹20 Lakh). The Maternity Benefit Act 2017 provides 26 weeks of paid leave for up to 2 children (12 weeks for 3+ children) and mandates crèche facilities with 4 daily visits in establishments with 50 or more employees.",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "# Architecture of Core Social Security Statutes\n\n1. **EPF Act 1952 Contribution Architecture:**\n   - Employee: 12% Basic+DA -> 100% to EPF.\n   - Employer: 12% Basic+DA -> **8.33% to Pension (EPS)** + **3.67% to Provident Fund (EPF)**.\n   - Central Government: 1.16% of wages up to ₹15,000 to EPS.\n   - EDLI (Life Insurance): 0.50% by employer (Min ₹2.5L, Max ₹7.0L benefit).\n2. **ESI Act 1948 Rates:**\n   - Applicability: Units with ≥10 employees earning up to ₹21,000/month.\n   - Total Premium: **4.00%** (Employer: 3.25%, Employee: 0.75%).\n3. **Gratuity & Maternity Parameters:**\n   - Gratuity: Minimum 5 years service; Formula: $\\frac{15}{26} \\times \\text{Wage} \\times \\text{Years}$; Maximum Limit = **₹20,00,000 (₹20 Lakh)**.\n   - Maternity: 26 Weeks paid leave (for $\\le 2$ surviving children); 12 Weeks (for $3+$ children or commissioning mother).\n   - Crèche Mandate: Establishments with **≥50 employees** (4 visits permitted per day).",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "stem": "Under the Employees' Provident Funds and Miscellaneous Provisions Act, 1952, how is the EMPLOYER'S 12% statutory contribution split between the Employees' Pension Scheme (EPS) and the Employees' Provident Fund (EPF)?",
        "options": [
          "6.00% to EPS and 6.00% to EPF",
          "8.33% to EPS and 3.67% to EPF",
          "3.67% to EPS and 8.33% to EPF",
          "10.00% to EPS and 2.00% to EPF"
        ],
        "correctAnswer": "8.33% to EPS and 3.67% to EPF",
        "explanation": "Under the statutory provisions of the EPF & MP Act 1952, while the employee's entire 12% contribution goes to the Provident Fund (EPF), the employer's 12% contribution is bifurcated: 8.33% is remitted into the Employees' Pension Scheme (EPS 1995, capped at the wage ceiling of ₹15,000), and the remaining 3.67% is credited to the employee's EPF account.",
        "trapExplanation": "Examiners frequently invert the numbers, giving 3.67% to EPS and 8.33% to EPF as a trap option.",
        "difficulty": "MEDIUM",
        "isPYQ": true,
        "pyqYear": 2017,
        "pyqPaper": "EPFO EO/AO",
        "examinerTrapPattern": "Inverting the employer's EPF (3.67%) and EPS (8.33%) contribution split."
      },
      {
        "type": "APPLIED_SCENARIO",
        "stem": "Under the Maternity Benefit (Amendment) Act 2017, what is the employee threshold at which an establishment is STATUTORILY REQUIRED to provide an in-house or accessible CRÈCHE facility for female employees?",
        "options": [
          "20 or more employees",
          "30 or more employees",
          "50 or more employees",
          "100 or more employees"
        ],
        "correctAnswer": "50 or more employees",
        "explanation": "Under Section 11A of the Maternity Benefit (Amendment) Act 2017, every establishment employing 50 or more employees is statutorily mandated to have a crèche facility within a prescribed distance, and female workers are permitted four visits a day to the crèche.",
        "trapExplanation": "Candidates confuse the crèche threshold of 50 with Factories Act canteen thresholds (250) or Works Committee thresholds (100).",
        "difficulty": "MEDIUM",
        "isPYQ": false,
        "examinerTrapPattern": "Confusing the crèche threshold (50 employees) with other welfare thresholds like canteens (250) or works committees (100)."
      }
    ]
  },
  {
    "id": "CON-IRL-004",
    "topicOrder": 4,
    "topicSlug": "principles-of-insurance-and-flagship-social-security-schemes",
    "topicTitle": "Principles of Insurance & Flagship Social Security Schemes",
    "topicDescription": "6 Core Principles of Insurance (Uberrimae Fidei, Insurable Interest, Indemnity, Subrogation, Contribution, Proximate Cause) and Flagship Schemes (PMJJBY, PMSBY, APY, PM-SYM, e-Shram).",
    "slug": "principles-of-insurance-and-flagship-social-schemes",
    "title": "Insurance Jurisprudence: The 6 Core Doctrines & Flagship National Social Security Initiatives",
    "shortDefinition": "Fundamental legal doctrines governing insurance contracts (Uberrimae Fidei, Insurable Interest timing, Indemnity, Subrogation, Contribution, Causa Proxima) and the operational architecture of India's flagship social welfare initiatives (PMJJBY, PMSBY, Atal Pension Yojana, PM-SYM, and e-Shram).",
    "difficulty": "INTERMEDIATE",
    "claims": [
      {
        "id": "CLM-IRL-004-01",
        "statement": "Insurance contracts are governed by six core doctrines: Utmost Good Faith (Uberrimae Fidei - full disclosure of material facts); Insurable Interest (must exist at inception in Life insurance, at time of loss in Marine insurance, and at BOTH inception and loss in Fire insurance); Indemnity (restoring insured to exact pre-loss financial position, strictly applicable to General/Property insurance, NEVER Life insurance); Subrogation; Contribution; and Proximate Cause (Causa Proxima).",
        "claimType": "JUDICIAL_DOCTRINE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Insurance Regulatory and Development Authority of India (IRDAI), IC-38 Handbook on Principles of Insurance & Dalby v. The India and London Life-Assurance Co. (1854)",
        "excerpt": "The fundamental principles of insurance are: Uberrima Fides, Insurable Interest, Indemnity, Subrogation, Contribution, Proximate Cause. Life insurance is a contingent contract and not a contract of indemnity."
      },
      {
        "id": "CLM-IRL-004-02",
        "statement": "The Central Government's social security insurance triad operates under standardized benchmarks: Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY: age 18-50, annual premium ₹436, ₹2 Lakh life cover); Pradhan Mantri Suraksha Bima Yojana (PMSBY: age 18-70, annual premium ₹20, ₹2 Lakh accidental death / ₹1 Lakh partial disability); and Atal Pension Yojana (APY: age 18-40, non-taxpayers, guaranteed monthly pension ₹1,000 to ₹5,000 from age 60).",
        "claimType": "STATUTORY_RULE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Department of Financial Services (DFS), Ministry of Finance, Master Schemes Guidelines on PMJJBY, PMSBY and APY, Updated 2023",
        "excerpt": "The revised annual premium for PMJJBY is Rs 436 and for PMSBY is Rs 20... Atal Pension Yojana is open to all bank account holders between 18 and 40 years to provide guaranteed pension of Rs 1,000 to 5,000 per month."
      },
      {
        "id": "CLM-IRL-004-03",
        "statement": "The e-Shram Portal (launched August 2021 by Ministry of Labour & Employment) is the national database of unorganised workers (age 16-59) issuing a 12-digit Universal Account Number (UAN) with embedded PMSBY accidental insurance cover, registering over 29 crore unorganised workers to enable portable social protection delivery.",
        "claimType": "STATUTORY_RULE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Ministry of Labour and Employment, e-Shram Portal Comprehensive Progress Report, 2024",
        "excerpt": "e-Shram is a comprehensive National Database of Unorganised Workers (NDUW)... Workers are provided an e-Shram card with a 12-digit Universal Account Number (UAN) with accidental insurance under PMSBY."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Why Insurance is Not Gambling and Life Cannot be Measured in Cash",
        "body": "If you bet ₹1,000 on a horse race, you hope to walk away richer than when you entered. Insurance is the exact opposite:\n1. **The Principle of Indemnity:** You insure your car for ₹5,00,000. If an accident damages the bumper costing ₹15,000 to repair, the insurer pays exactly ₹15,000. You cannot make a profit from insurance; indemnity merely restores you to where you were a second before the disaster struck.\n2. **Why Life Insurance is NOT Indemnity:** Can a court assign an exact rupee value to a mother's life? No. Therefore, Life Insurance is a **Contingent Contract**, NOT a contract of indemnity. The insurer agrees to pay a fixed pre-agreed sum on death.\n3. **Insurable Interest Timing:** You can buy a life insurance policy on your spouse during marriage; even if you divorce later, the policy remains legally valid because insurable interest is tested **strictly at the time the policy was signed**.",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "Master Matrix: The 6 Core Insurance Principles & Flagship Welfare Schemes",
        "body": "### The 6 Core Principles of Insurance\n\n| Principle Name | Latin / Legal Term | Core Statutory Rule | Application: Life vs General Insurance |\n|---|---|---|---|\n| **1. Utmost Good Faith** | *Uberrimae Fidei* | Duty of full, transparent disclosure of all material facts without concealment | Applies to **BOTH Life and General Insurance** |\n| **2. Insurable Interest** | Insurable Interest | Financial relationship where survival benefits insured and destruction causes pecuniary loss | **Life:** Must exist **at inception**.<br>**Marine:** Must exist **at time of loss**.<br>**Fire:** Must exist **both at inception AND at loss** |\n| **3. Indemnity** | Indemnity | Insured cannot recover more than the actual financial loss suffered (no profit) | Applies **ONLY to General / Property Insurance** (NEVER Life insurance) |\n| **4. Subrogation** | Subrogation | Transfer of legal claims from insured to insurer against third parties after claim settlement | Applies **ONLY to General Insurance (Indemnity contracts)** |\n| **5. Contribution** | Contribution | Right of an insurer to compel co-insurers under double insurance to share the loss ratably | Applies **ONLY to General Insurance (Indemnity contracts)** |\n| **6. Proximate Cause** | *Causa Proxima* | The active, efficient cause that sets in motion a train of events determines liability | Applies to **All Insurance claims** |\n\n### Flagship Social Security Initiatives Matrix\n- **PMJJBY (Jeevan Jyoti Bima):** Age **18 to 50 years**; Annual premium = **₹436**; Benefit = **₹2,00,000 (₹2 Lakh)** on death due to ANY cause.\n- **PMSBY (Suraksha Bima):** Age **18 to 70 years**; Annual premium = **₹20**; Benefit = **₹2,00,000** for accidental death/total disability, ₹1,00,000 for partial disability.\n- **Atal Pension Yojana (APY):** Entry age **18 to 40 years** (Non-taxpayers); Monthly pension = **₹1,000 to ₹5,000** from age 60 for life.\n- **e-Shram Portal:** Age **16 to 59 years**; Issues 12-digit **Universal Account Number (UAN)** for unorganized workers.",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "The Subrogation Mechanism & Insurable Interest Timing Case Law",
        "body": "### 1. Subrogation Mechanics in Property Insurance\nSuppose an arsonist sets fire to your factory warehouse causing ₹10,00,000 damage:\n- The insurer indemnifies you and pays the full ₹10,00,000 claim.\n- Under the **Doctrine of Subrogation**, your legal right to sue the arsonist for damages transfers entirely to the insurance company.\n- *Rationale:* If you could collect ₹10,00,000 from the insurer AND sue the arsonist for another ₹10,00,000, you would collect ₹20,00,000, violating the fundamental principle of Indemnity.\n\n### 2. Landmark Precedent on Insurable Interest Timing\n*Dalby v. The India and London Life-Assurance Company (1854):*\n- The court ruled that under the Life Assurance Act 1774, **insurable interest in Life Insurance is required strictly at the moment the contract is entered into**. It need not continue to exist at the time of death.",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Competitive Examination Traps & Scheme Thresholds",
        "body": "### Frequent Examiner Traps\n1. **Insurable Interest Timing Triad:**\n   - **Life Insurance:** At **INCEPTION** only.\n   - **Marine Insurance:** At **TIME OF LOSS** only.\n   - **Fire Insurance:** At **BOTH inception AND loss**.\n   Examiners repeatedly test this exact comparative triad in UPSC APFC papers!\n2. **Is Life Insurance a Contract of Indemnity?** **NO!** A human life cannot be financially valued. Life insurance is a **contingent contract**.\n3. **PMJJBY vs PMSBY Premiums:**\n   - PMJJBY = **₹436/year** (revised from ₹330 in 2022).\n   - PMSBY = **₹20/year** (revised from ₹12 in 2022).\n4. **APY Age Eligibility:** Minimum entry age is **18 years**, maximum entry age is **40 years** (w.e.f. Oct 2022, income taxpayers are barred from joining APY).\n5. **e-Shram Age Limits:** Age eligibility is **16 to 59 years** (not 18 to 60).\n\n### Exam Alignment\n- **UPSC APFC & EPFO EO/AO:** Principles of Insurance & Social Security Schemes. Dedicated unit in syllabus; repeated direct questions.\n- **RBI Grade B & IBPS PO:** General insurance and government financial inclusion initiatives.",
        "order": 4
      }
    ],
    "examMappings": [
      {
        "examCode": "UPSC_APFC",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "EXPERT",
        "syllabusUnit": "Principles of Insurance & Social Security Schemes",
        "notes": "Core topic. 6 principles, insurable interest timing, PMJJBY/PMSBY premium numbers, APY rules."
      },
      {
        "examCode": "UPSC_EPFO_EOAO",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "EXPERT",
        "syllabusUnit": "Social Security in India: Insurance Schemes",
        "notes": "PMJJBY (₹436), PMSBY (₹20), APY slabs, e-Shram portal UAN registration."
      },
      {
        "examCode": "UPSC_CSE",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "PROFICIENT",
        "syllabusUnit": "GS Paper 2: Social Security & Insurance Penetration",
        "notes": "Insurance density vs penetration in India, social safety nets for informal economy."
      },
      {
        "examCode": "RBI_GRADE_B",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "PROFICIENT",
        "syllabusUnit": "Finance: Insurance Sector & Social Security",
        "notes": "IRDAI regulations, micro-insurance, pension fund architecture (PFRDA)."
      },
      {
        "examCode": "NABARD_GRADE_A",
        "relevance": "ANCILLARY_COVERAGE",
        "priority": "MEDIUM",
        "requiredDepth": "AWARENESS",
        "syllabusUnit": "Rural Development: Financial Inclusion Schemes",
        "notes": "PMJJBY, PMSBY and PMFBY crop insurance in rural areas."
      },
      {
        "examCode": "RPSC_RAS",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "PROFICIENT",
        "syllabusUnit": "Mains Paper 1: Social Security Schemes",
        "notes": "Central vs State insurance schemes (Chiranjeevi / Ayushman Bharat)."
      },
      {
        "examCode": "IBPS_PO",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "EXPERT",
        "syllabusUnit": "General Awareness: Banking & Insurance",
        "notes": "PMJJBY and PMSBY premiums, APY age limits."
      },
      {
        "examCode": "SBI_PO",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "EXPERT",
        "syllabusUnit": "General Awareness: Insurance Products",
        "notes": "Bancassurance channels, PMSBY accidental cover."
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Insurance: 6 Principles: Uberrimae Fidei (good faith), Insurable Interest (Life = inception only; Marine = loss only; Fire = both), Indemnity (Property only, NEVER life), Subrogation, Contribution, Causa Proxima. Schemes: PMJJBY (18-50 yrs, ₹436/yr, ₹2L life cover), PMSBY (18-70 yrs, ₹20/yr, ₹2L accident), APY (18-40 yrs, ₹1k-₹5k pension at 60), e-Shram (16-59 yrs, 12-digit UAN).",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Insurance contracts are grounded in six core legal doctrines: Utmost Good Faith (Uberrimae Fidei), requiring total disclosure of material facts; Insurable Interest, which must exist strictly at inception in Life insurance, at the time of loss in Marine insurance, and at both inception and loss in Fire insurance; Indemnity, which prevents an insured from profiting from loss (strictly restricted to property and general insurance, as Life insurance is a contingent contract); Subrogation, transferring recovery rights against third parties to the insurer; Contribution, ratably dividing losses among co-insurers; and Proximate Cause (Causa Proxima). In public policy, India protects the vulnerable through a standardized social security triad: Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY: ages 18–50, ₹436 annual premium, ₹2 Lakh life cover); Pradhan Mantri Suraksha Bima Yojana (PMSBY: ages 18–70, ₹20 annual premium, ₹2 Lakh accidental cover); Atal Pension Yojana (APY: ages 18–40, guaranteed pension of ₹1,000–₹5,000 from age 60); and the e-Shram Portal (ages 16–59), issuing 12-digit Universal Account Numbers (UAN) to unorganized workers.",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "# Architecture of Insurance Jurisprudence & Social Security Schemes\n\n1. **Insurable Interest Timing Matrix:**\n   - Life Insurance: At **Inception** only (Dalby v. India & London Life, 1854).\n   - Marine Insurance: At **Time of Loss** only.\n   - Fire Insurance: At **Both Inception AND Loss**.\n2. **Doctrine of Indemnity Guardrails:**\n   - General Insurance = Strictly Indemnity (Restoring pre-loss financial position).\n   - Life Insurance = Contingent Contract (Fixed capital sum, NOT indemnity).\n   - Secondary Doctrines: Subrogation and Contribution arise strictly from Indemnity.\n3. **National Social Security Financial Standards:**\n   - PMJJBY: Age 18–50 | Premium ₹436 p.a. | Cover ₹2,00,000 (Any cause of death).\n   - PMSBY: Age 18–70 | Premium ₹20 p.a. | Cover ₹2,00,000 (Accidental death).\n   - APY: Entry Age 18–40 | Pension ₹1,000 to ₹5,000 at age 60 (Non-taxpayers only).\n   - e-Shram: Age 16–59 | 12-digit UAN | Portable social security database.",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "stem": "Under insurance law, at what precise point in time must INSURABLE INTEREST exist in a contract of LIFE INSURANCE compared to a contract of MARINE INSURANCE?",
        "options": [
          "Life: At the time of loss/death only; Marine: At the time of inception only",
          "Life: At the time of inception only; Marine: At the time of loss only",
          "Life: Both at inception and at death; Marine: Both at inception and at loss",
          "Insurable interest is not required in either life or marine insurance"
        ],
        "correctAnswer": "Life: At the time of inception only; Marine: At the time of loss only",
        "explanation": "In Life Insurance, under the landmark ruling in Dalby v. India & London Life-Assurance Co. (1854), insurable interest must exist strictly at the time of taking the policy (inception); it need not exist at the time of death. In Marine Insurance, insurable interest must exist at the time of loss, because cargo is bought and sold during voyages. In Fire Insurance, it must exist at both inception and loss.",
        "trapExplanation": "Candidates frequently swap the requirements between life and marine insurance, or assume all insurance requires insurable interest at loss.",
        "difficulty": "HARD",
        "isPYQ": true,
        "pyqYear": 2012,
        "pyqPaper": "UPSC APFC",
        "examinerTrapPattern": "Inverting the timing requirement of insurable interest between life insurance (inception) and marine insurance (loss)."
      },
      {
        "type": "APPLIED_SCENARIO",
        "stem": "What is the current revised ANNUAL PREMIUM payable by a subscriber for life insurance coverage of ₹2 Lakh under the PRADHAN MANTRI JEEVAN JYOTI BIMA YOJANA (PMJJBY)?",
        "options": [
          "₹12 per annum",
          "₹20 per annum",
          "₹330 per annum",
          "₹436 per annum"
        ],
        "correctAnswer": "₹436 per annum",
        "explanation": "Effective June 1, 2022, the Central Government revised the annual premium for PMJJBY from the earlier ₹330 to ₹436 per annum for a life insurance cover of ₹2 Lakh. (PMSBY was revised from ₹12 to ₹20 per annum).",
        "trapExplanation": "Candidates frequently pick ₹330 (the old obsolete premium) or ₹20 (the accidental PMSBY premium).",
        "difficulty": "MEDIUM",
        "isPYQ": false,
        "examinerTrapPattern": "Testing outdated pre-2022 premium rates (₹330) versus current notified rates (₹436)."
      }
    ]
  },
  {
    "id": "CON-IRL-005",
    "topicOrder": 5,
    "topicSlug": "auditing-principles-and-corporate-governance",
    "topicTitle": "Auditing Principles & Corporate Governance",
    "topicDescription": "Auditing definitions (True & Fair view), Companies Act 2013 Sec 139-148, auditor rotation (1 term 5 yrs / firm 2 terms 10 yrs), 4 audit opinions, and CARO 2020.",
    "slug": "auditing-principles-and-auditor-corporate-governance",
    "title": "Auditing Jurisprudence: True & Fair View, Companies Act 2013 Governance & Audit Reports",
    "shortDefinition": "Foundational auditing principles (True and Fair View, Independence), statutory auditor governance under Companies Act 2013 (Section 139 appointment and mandatory rotation: individual 1 term of 5 yrs, firm 2 terms of 10 yrs with 5-yr cooling; Section 141 disqualifications including ₹5 Lakh indebtedness), the four audit report opinions (Unqualified, Qualified, Adverse, Disclaimer), and Companies (Auditor's Report) Order (CARO 2020).",
    "difficulty": "ADVANCED",
    "claims": [
      {
        "id": "CLM-IRL-005-01",
        "statement": "Auditing is an independent examination of financial information of any entity (profit-oriented or not, irrespective of size or legal form) conducted to express an informed professional opinion on whether the financial statements present a 'True and Fair View' in conformity with the applicable Financial Reporting Framework (Ind AS / GAAP).",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Institute of Chartered Accountants of India (ICAI), Standard on Auditing (SA) 200: Overall Objectives of the Independent Auditor, & Companies Act 2013 Sec 143",
        "excerpt": "The objective of an audit of financial statements is to enable the auditor to express an opinion whether the financial statements are prepared, in all material respects, in accordance with an applicable financial reporting framework to show a true and fair view."
      },
      {
        "id": "CLM-IRL-005-02",
        "statement": "Under Section 139(2) of the Companies Act 2013, listed and prescribed unlisted companies cannot appoint an individual auditor for more than 1 term of 5 consecutive years, or an audit firm for more than 2 terms of 5 consecutive years (10 consecutive years), followed by a mandatory 5-year cooling-off period; while Section 141(3) disqualifies any person indebted to the company for an amount exceeding ₹5,00,000 (₹5 Lakh).",
        "claimType": "STATUTORY_RULE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Companies Act, 2013, Section 139(2) and Section 141(3)(d)(ii), Ministry of Corporate Affairs",
        "excerpt": "No listed company shall appoint or re-appoint: (a) an individual as auditor for more than one term of five consecutive years; and (b) an audit firm as auditor for more than two terms of five consecutive years... Disqualification: a person who is indebted to the company in excess of five lakh rupees."
      },
      {
        "id": "CLM-IRL-005-03",
        "statement": "Auditors issue four distinct types of audit opinions under ICAI Standards on Auditing (SA 700/705): 1. Clean / Unqualified Opinion (statements present true and fair view); 2. Qualified Opinion (misstatements are material but NOT pervasive); 3. Adverse Opinion (misstatements are BOTH material AND pervasive, rendering accounts misleading); and 4. Disclaimer of Opinion (auditor is unable to obtain sufficient evidence and possible effects are BOTH material AND pervasive).",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "ICAI Standard on Auditing (SA) 705: Modifications to the Opinion in the Independent Auditor's Report, Paragraphs 6-10",
        "excerpt": "The auditor shall express a qualified opinion when misstatements are material, but not pervasive... An adverse opinion when misstatements are both material and pervasive... A disclaimer of opinion when unable to obtain sufficient appropriate audit evidence and the possible effects are both material and pervasive."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Financial Watchdog and the Four Grades of Corporate Truth",
        "body": "If a student graded their own exam paper, they would give themselves 100% every single time. That is why companies cannot audit their own balance sheets:\n1. **The Watchdog, Not a Bloodhound:** As Justice Lopes famously ruled in *Kingston Cotton Mill (1896)*, an auditor is a watchdog to protect shareholders, not a detective hunting for fraud unless suspicious clues appear.\n2. **True and Fair View:** An auditor does not guarantee that a company is profitable or well-managed. They only certify that the financial accounts are free from material lies (they show a 'True and Fair View').\n3. **The Four Grades of Audit Opinion:**\n   - *Clean / Unqualified:* Everything looks good.\n   - *Qualified:* There is a problem with one specific inventory item, but the rest of the company's books are sound (material, but NOT pervasive).\n   - *Adverse:* The whole balance sheet is fabricated and completely unreliable (both material AND pervasive).\n   - *Disclaimer of Opinion:* Management locked the auditor out of the records and refused to provide bank statements; the auditor cannot verify anything (unable to obtain evidence, pervasive impact).",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "Master Architecture: Audit Types, Rotation Rules & The 4 Opinions",
        "body": "### Types of Audits in the Indian Corporate Framework\n\n| Audit Type | Governing Statute / Mandate | Primary Scope / Objective | Appointment Authority |\n|---|---|---|---|\n| **Statutory Financial Audit** | Companies Act 2013 (Section 139) | Verifies compliance with Ind AS / GAAP; expresses opinion on True & Fair view | Shareholders in AGM (or CAG for Government Companies under Sec 139(5)) |\n| **Internal Audit** | Companies Act 2013 (Section 138) | Evaluates internal financial controls, risk management, operational workflows | Board of Directors / Audit Committee |\n| **Cost Audit** | Companies Act 2013 (Section 148) | Verifies cost records in manufacturing companies to prevent predatory pricing | Board on recommendation of Audit Committee |\n| **Secretarial Audit** | Companies Act 2013 (Section 204) | Verifies compliance with corporate, labour, SEBI, and FEMA laws | Practicing Company Secretary (PCS) appointed by Board |\n| **Social Audit** | Statutory under MGNREGA / CSR rules | Assesses community impact of public schemes and corporate CSR expenditure | Gram Sabha / Independent Social Audit Units |\n\n### The 4 Types of Audit Opinions (SA 700 / SA 705)\n\n| Audit Opinion Type | Nature of Financial Misstatement | Pervasiveness in Financial Statements | Auditor's Verdict Summary |\n|---|---|---|---|\n| **1. Unqualified (Clean)** | Financial statements comply with GAAP in all material aspects | None | Statements reflect a True & Fair view |\n| **2. Qualified Opinion** | Misstatements exist or evidence is lacking for specific items | **Material, but NOT Pervasive** | \"Except for the effects of matter X, statements give a True & Fair view\" |\n| **3. Adverse Opinion** | Misstatements are severe, widespread, and misleading | **BOTH Material AND Pervasive** | Financial statements DO NOT present a True and Fair view |\n| **4. Disclaimer of Opinion** | Auditor is prevented from obtaining sufficient appropriate audit evidence | **Pervasive limitation of scope** | Auditor refrains from expressing any opinion due to inability to verify |",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "Auditor Disqualifications & CARO 2020 Reporting Clauses",
        "body": "### Statutory Disqualifications: Section 141(3) Companies Act 2013\nA person CANNOT be appointed as company auditor if:\n1. It is a Body Corporate (other than a Limited Liability Partnership - LLP).\n2. An officer or employee of the company.\n3. A person who is a partner or employee of an officer/employee of the company.\n4. A person (or partner/relative) who:\n   - Holds security/shares in the company (relative may hold shares up to face value of **₹1,00,000 / ₹1 Lakh**).\n   - Is indebted to the company in excess of **₹5,00,000 (₹5 Lakh)**.\n   - Has given a guarantee/security in excess of **₹1,00,000 (₹1 Lakh)**.\n5. A person convicted of an offence involving fraud (disqualified for **10 years** from conviction date).\n\n### CARO 2020 (Companies Auditor's Report Order)\nMandates reporting on 21 specific operational clauses: physical inventory verification, benami property proceedings, undisclosed income, Evergreening of loans, and internal audit compliance.",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Competitive Examination Traps & Statutory Governance",
        "body": "### Frequent Examiner Traps\n1. **Auditor Rotation Slabs Trap:**\n   - Individual Auditor: Maximum **1 term of 5 consecutive years**.\n   - Audit Firm: Maximum **2 terms of 5 consecutive years (10 consecutive years)**.\n   - Cooling-off Period: Mandatory **5 years** before reappointment.\n2. **Indebtedness Disqualification Ceiling:** A person indebted to the company for more than **₹5,00,000 (₹5 Lakh)** is disqualified.\n3. **Qualified vs Adverse vs Disclaimer:**\n   - Material but NOT pervasive = **Qualified Opinion**.\n   - Material AND pervasive = **Adverse Opinion**.\n   - Scope limitation preventing evidence collection with pervasive impact = **Disclaimer of Opinion**.\n4. **Removal of Auditor Before Expiry of Term (Section 140(1)):** Requires a **Special Resolution** of the company AND the **prior approval of the Central Government**.\n\n### Exam Alignment\n- **UPSC APFC & EPFO EO/AO:** Auditing Fundamentals & Corporate Governance. Core unit in APFC syllabus; repeated questions on auditor disqualifications, opinions, and Sec 139-141.",
        "order": 4
      }
    ],
    "examMappings": [
      {
        "examCode": "UPSC_APFC",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "EXPERT",
        "syllabusUnit": "Auditing: Statutory Provisions & Auditor Governance",
        "notes": "Core topic. Companies Act 2013 Sections 139-148, auditor rotation (1 term 5 yrs / 2 terms 10 yrs), 4 opinions, Sec 141."
      },
      {
        "examCode": "UPSC_EPFO_EOAO",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "EXPERT",
        "syllabusUnit": "Principles of Accounting & Auditing",
        "notes": "Auditor qualifications, True & Fair view, qualified vs adverse opinions, CARO 2020."
      },
      {
        "examCode": "UPSC_CSE",
        "relevance": "ANCILLARY_COVERAGE",
        "priority": "MEDIUM",
        "requiredDepth": "PROFICIENT",
        "syllabusUnit": "GS Paper 4: Corporate Governance & Ethics",
        "notes": "Independence of auditors, NFRA (National Financial Reporting Authority), corporate fraud."
      },
      {
        "examCode": "RBI_GRADE_B",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "PROFICIENT",
        "syllabusUnit": "Finance: Corporate Governance & Financial Reporting",
        "notes": "Auditor rotation rules, statutory audit of banks, asset quality reviews."
      },
      {
        "examCode": "NABARD_GRADE_A",
        "relevance": "ANCILLARY_COVERAGE",
        "priority": "MEDIUM",
        "requiredDepth": "AWARENESS",
        "syllabusUnit": "Rural Banking: Audit of Cooperatives",
        "notes": "Social audit, statutory audit of PACS and RRBs."
      },
      {
        "examCode": "RPSC_RAS",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "EXPERT",
        "syllabusUnit": "Mains Paper 1: Accounting & Auditing",
        "notes": "Direct 5 and 10-mark questions on True and Fair view, types of audit opinions, Social audit."
      },
      {
        "examCode": "IBPS_PO",
        "relevance": "ANCILLARY_COVERAGE",
        "priority": "MEDIUM",
        "requiredDepth": "AWARENESS",
        "syllabusUnit": "General Awareness: Corporate Law",
        "notes": "Auditor rotation, CAG audit of public sector undertakings."
      },
      {
        "examCode": "SBI_PO",
        "relevance": "ANCILLARY_COVERAGE",
        "priority": "MEDIUM",
        "requiredDepth": "AWARENESS",
        "syllabusUnit": "General Awareness",
        "notes": "Auditor independence, bank statutory audits."
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Auditing: Independent examination to give True & Fair view opinion. Companies Act 2013: Sec 139 rotation: Individual = 1 term of 5 yrs; Firm = 2 terms of 5 yrs (10 yrs), 5-yr cooling period. Sec 141: Disqualified if indebted >₹5 Lakh. 4 Opinions: Unqualified (clean), Qualified (material but NOT pervasive), Adverse (BOTH material AND pervasive), Disclaimer (cannot get evidence, pervasive effect).",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Auditing is an independent examination of financial information conducted to express an informed opinion on whether financial statements reflect a 'True and Fair View' in compliance with GAAP/Ind AS. Under the Companies Act 2013, statutory auditor governance is strictly regulated: Section 139(2) mandates that listed companies cannot retain an individual auditor for more than 1 term of 5 consecutive years, or an audit firm for more than 2 terms of 5 consecutive years (10 years), accompanied by a mandatory 5-year cooling-off period. Under Section 141(3), a person indebted to the company for more than ₹5,00,000 (₹5 Lakh) is disqualified from appointment. Under ICAI Standard on Auditing 705, auditors express one of four opinions: an Unqualified Opinion when accounts are clean; a Qualified Opinion when misstatements are material but NOT pervasive; an Adverse Opinion when misstatements are both material AND pervasive, rendering the accounts misleading; and a Disclaimer of Opinion when a pervasive limitation of scope prevents the auditor from obtaining sufficient evidence.",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "# Architecture of Auditing Jurisprudence & Corporate Governance\n\n1. **Companies Act 2013 Statutory Framework:**\n   - Section 139: Appointment & Mandatory Rotation (Individual: 1x5 yrs; Firm: 2x5 yrs; 5-yr cooling).\n   - Section 140: Removal before term requires Special Resolution + Central Government approval.\n   - Section 141: Qualifications (CA with COP) & Disqualifications (Indebtedness >₹5 Lakh, shares >₹1 Lakh face value).\n   - Section 143: Powers and Duties of Auditors (CAG supplementary audit under Sec 143(6)).\n   - Section 148: Cost Audit.\n2. **The 4 Audit Opinions Grid (SA 700 / 705):**\n   - Unqualified: Clean True & Fair view.\n   - Qualified: Material, but NOT Pervasive error.\n   - Adverse: BOTH Material AND Pervasive error.\n   - Disclaimer of Opinion: Severe scope limitation; evidence unobtainable; pervasive impact.\n3. **CARO 2020 Reporting Invariants:**\n   - 21 Diagnostic reporting clauses.\n   - Physical inventory verification, benami properties, loan evergreening, and internal audit.",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "stem": "Under Section 139(2) of the Companies Act, 2013, what is the MAXIMUM statutory period for which an AUDIT FIRM can be appointed as the statutory auditor of a listed company before a mandatory cooling-off period of 5 years is triggered?",
        "options": [
          "One term of 5 consecutive years",
          "Two terms of 5 consecutive years (10 consecutive years)",
          "Three terms of 3 consecutive years (9 consecutive years)",
          "One term of 7 consecutive years"
        ],
        "correctAnswer": "Two terms of 5 consecutive years (10 consecutive years)",
        "explanation": "Under Section 139(2) of the Companies Act 2013, an individual auditor can hold office for a maximum of 1 term of 5 consecutive years, whereas an audit firm can hold office for a maximum of 2 terms of 5 consecutive years (10 consecutive years), followed by a mandatory 5-year cooling-off period during which the firm cannot be reappointed by the same company.",
        "trapExplanation": "Candidates confuse the individual auditor limit (1 term of 5 years) with the audit firm limit (2 terms of 5 years, totaling 10 years).",
        "difficulty": "MEDIUM",
        "isPYQ": false,
        "examinerTrapPattern": "Confusing the mandatory rotation limits of an individual auditor (5 years) with an audit firm (10 years)."
      },
      {
        "type": "APPLIED_SCENARIO",
        "stem": "An independent auditor examining the financial statements of a corporation discovers that misstatements in inventory valuation are MATERIAL to the balance sheet, but they do NOT pervade the financial statements as a whole (i.e. all other revenue, payroll, and asset accounts are completely sound). Which type of audit report opinion should the auditor issue under ICAI Standard on Auditing (SA) 705?",
        "options": [
          "Unqualified (Clean) Opinion",
          "Qualified Opinion",
          "Adverse Opinion",
          "Disclaimer of Opinion"
        ],
        "correctAnswer": "Qualified Opinion",
        "explanation": "Under SA 705, when an auditor identifies misstatements that are material to the financial statements, but are NOT pervasive (they affect only a specific isolated account and do not undermine the overall reliability of the statements as a whole), the auditor issues a Qualified Opinion ('except for the effects of matter X, statements present a true and fair view'). An Adverse Opinion is issued only when misstatements are BOTH material AND pervasive.",
        "trapExplanation": "Candidates often pick Adverse Opinion, failing to note that Adverse opinions strictly require the misstatement to be both material AND pervasive.",
        "difficulty": "HARD",
        "isPYQ": false,
        "examinerTrapPattern": "Failing to distinguish between 'Material but NOT Pervasive' (Qualified) and 'Material AND Pervasive' (Adverse)."
      }
    ]
  }
];

export async function seedAPFCIRCanonicalKnowledge() {
  console.log('Seeding APFC / Industrial Relations & Governance Canonical Knowledge (CON-IRL-001 to CON-IRL-005)...');

  // 1. Ensure Domain exists
  let domain = await db.domain.findFirst({ where: { slug: 'indian-governance-administration' } });
  if (!domain) {
    domain = await db.domain.create({
      data: {
        slug: 'indian-governance-administration',
        name: 'Indian Governance, Law & Public Administration',
        description: 'Constitutional law, statutory bodies, labour codes, social security architecture, and regulatory auditing frameworks.',
        order: 7,
        status: 'ACTIVE'
      }
    });
  }

  // 2. Ensure Subject exists
  let subject = await db.subject.findFirst({ where: { slug: 'industrial-relations-and-labour-laws' } });
  if (!subject) {
    subject = await db.subject.create({
      data: {
        slug: 'industrial-relations-and-labour-laws',
        name: 'Industrial Relations, Labour Codes, Social Security & Corporate Governance',
        domainId: domain.id,
        description: 'Universal first-principles foundation in Trade Unions Act, Industrial Disputes, 4 Labour Codes, EPFO/ESIC Social Security, Insurance Principles, and Auditing Standards.',
        scopeStatement: 'Canonical coverage across 5 core topics from statutory trade union immunities to corporate audit opinions.',
        order: 1,
        status: 'ACTIVE'
      }
    });
  }

  // 3. Ensure Topics exist matching concept topicSlugs
  const topicDefs = [
    { order: 1, slug: 'industrial-relations-statutory-foundations-and-dispute-settlement', title: 'Industrial Relations: Statutory Foundations & Dispute Settlement', description: 'Trade Unions Act 1926 registration norms and immunities, Industrial Disputes Act 1947 dispute machinery, Works Committee, and Sections 25C/25F layoff/retrenchment.' },
    { order: 2, slug: 'the-four-new-labour-codes-and-legislative-reforms', title: 'The Four Labour Codes: Architecture & Structural Shifts', description: 'Consolidation of 29 central labour acts into 4 codes: Wages (2019), Industrial Relations (2020), Social Security (2020), and OSH (2020).' },
    { order: 3, slug: 'core-social-security-statutes-epf-esi-and-gratuity', title: 'Social Security Architecture: EPFO, ESIC & Welfare Statutes', description: 'EPF & MP Act 1952 contribution split, ESI Act 1948 health coverage, Payment of Gratuity Act 1972 formula, and Maternity Benefit Act 2017 amendments.' },
    { order: 4, slug: 'principles-of-insurance-and-flagship-social-security-schemes', title: 'Insurance Principles, Risk Governance & Social Insurance Schemes', description: 'Doctrine of uberrima fides, insurable interest, indemnity, subrogation, proximate cause, and national schemes (PMJJBY, PMSBY, APY, e-Shram).' },
    { order: 5, slug: 'auditing-principles-and-corporate-governance', title: 'Auditing Principles, Statutory Governance & Audit Opinions', description: 'Companies Act 2013 auditor appointment, tenure rotation under Sec 139, disqualification under Sec 141, and SA 700/705 audit report opinions.' }
  ];

  const topicMap: Record<string, string> = {};
  for (const t of topicDefs) {
    let topic = await db.topic.findFirst({ where: { slug: t.slug, subjectId: subject.id } });
    if (!topic) {
      topic = await db.topic.create({
        data: {
          slug: t.slug,
          title: t.title,
          description: t.description,
          order: t.order,
          subjectId: subject.id,
          status: 'ACTIVE'
        }
      });
    }
    topicMap[t.slug] = topic.id;
  }

  // 4. Ensure Canonical Source exists
  let source = await db.source.findUnique({ where: { id: 'SRC-APFC-CANONICAL-2026' } });
  if (!source) {
    source = await db.source.create({
      data: {
        id: 'SRC-APFC-CANONICAL-2026',
        title: 'Master UPSC APFC & EPFO Labour Laws, Social Security, Insurance and Auditing Benchmark',
        sourceType: 'STATUTORY_COMPILATION',
        authorityTier: 'CLASS_A_STATUTORY',
        description: 'Official Gazettes, Central Labour Enactments, ICAI Standards on Auditing, and IRDAI Insurance Directives'
      }
    });
  }

  // 5. Ensure Target Examinations exist in examMap
  const examCodes = [
    'UPSC_CSE', 'UPSC_APFC', 'UPSC_EPFO_EOAO', 'RPSC_RAS',
    'IBPS_PO', 'SBI_PO', 'RBI_GRADE_B', 'NABARD_GRADE_A'
  ];
  const examMap: Record<string, string> = {};
  for (const code of examCodes) {
    let exam = await db.exam.findFirst({
      where: { slug: code.toLowerCase().replace(/_/g, '-') }
    });
    if (!exam) {
      exam = await db.exam.create({
        data: {
          slug: code.toLowerCase().replace(/_/g, '-'),
          name: code.replace(/_/g, ' '),
          conductingBody: code.split('_')[0],
          description: `Target examination suite for ${code}`,
          syllabusSummary: `APFC, Industrial Relations and Labour Law modules for ${code}`
        }
      });
    }
    examMap[code] = exam.id;
  }

  // 6. Iterate through Concepts and seed
  for (let i = 0; i < APFC_IR_CANONICAL_CONCEPTS.length; i++) {
    const cDef = APFC_IR_CANONICAL_CONCEPTS[i];
    const topicId = topicMap[cDef.topicSlug];
    if (!topicId) {
      console.warn(`[APFC Seed] Topic slug not found: ${cDef.topicSlug}`);
      continue;
    }

    // Upsert Concept
    let concept = await db.concept.findUnique({ where: { id: cDef.id } });
    if (concept) {
      // Clean child records to enable clean idempotent re-seed
      await db.question.deleteMany({ where: { conceptId: concept.id } });
      await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
      await db.examConceptMapping.deleteMany({ where: { conceptId: concept.id } });
      await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
      const existingClaims = await db.claim.findMany({ where: { conceptId: concept.id } });
      for (const cl of existingClaims) {
        await db.evidence.deleteMany({ where: { claimId: cl.id } });
      }
      await db.claim.deleteMany({ where: { conceptId: concept.id } });

      concept = await db.concept.update({
        where: { id: cDef.id },
        data: {
          title: cDef.title,
          slug: cDef.slug,
          shortDefinition: cDef.shortDefinition,
          difficulty: cDef.difficulty,
          topicId,
          order: i + 1
        }
      });
    } else {
      concept = await db.concept.create({
        data: {
          id: cDef.id,
          title: cDef.title,
          slug: cDef.slug,
          shortDefinition: cDef.shortDefinition,
          difficulty: cDef.difficulty,
          topicId,
          order: i + 1
        }
      });
    }

    // Seed Claims & Evidence
    for (const cl of cDef.claims) {
      const claim = await db.claim.create({
        data: {
          id: cl.id,
          conceptId: concept.id,
          statement: cl.statement,
          claimType: cl.claimType,
          epistemicLevel: cl.epistemicLevel,
          confidence: cl.confidence,
          status: 'VERIFIED'
        }
      });

      await db.evidence.create({
        data: {
          claimId: claim.id,
          sourceId: source.id,
          locator: cl.locator,
          excerpt: cl.excerpt,
          evidenceType: 'STATUTORY_BENCHMARK',
          authority: 'AUTHORITATIVE_BODY',
          evidentiarySupport: 'DIRECT_SUPPORT',
          extractionConfidence: 'HIGH'
        }
      });
    }

    // Seed Content Blocks
    for (const cb of cDef.contentBlocks) {
      await db.contentBlock.create({
        data: {
          conceptId: concept.id,
          type: cb.type,
          title: cb.title,
          body: cb.body,
          order: cb.order,
          visibility: 'CANONICAL_FULL'
        }
      });
    }

    // Seed Exam Concept Mappings
    for (const em of cDef.examMappings) {
      const examId = examMap[em.examCode];
      if (examId) {
        await db.examConceptMapping.create({
          data: {
            examId,
            conceptId: concept.id,
            syllabusUnit: em.syllabusUnit,
            relevance: em.relevance,
            priority: em.priority,
            requiredDepth: em.requiredDepth,
            notes: em.notes
          }
        });
      }
    }

    // Seed Revision Units
    for (const ru of cDef.revisionUnits) {
      await db.revisionUnit.create({
        data: {
          conceptId: concept.id,
          type: ru.type,
          content: ru.content,
          order: ru.order
        }
      });
    }

    // Seed Questions
    for (const q of cDef.questions) {
      await db.question.create({
        data: {
          conceptId: concept.id,
          type: q.type,
          stem: q.stem,
          options: JSON.stringify(q.options),
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          trapExplanation: q.trapExplanation,
          difficulty: q.difficulty,
          isPYQ: q.isPYQ,
          examinerTrapPattern: q.examinerTrapPattern
        }
      });
    }
  }

  console.log(`[APFC Seed] Successfully seeded ${APFC_IR_CANONICAL_CONCEPTS.length} APFC / IR concepts (CON-IRL-001 to CON-IRL-005).`);
}
