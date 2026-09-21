/**
 * Rajasthan Studies & Regional Heritage Track — Batch R-ECO
 *
 * Subject: Rajasthan Economy, Economic Review & Flagship Welfare Schemes
 * Source: Rajasthan Economic Review, Directorate of Economics & Statistics, GoR
 * Domain: Rajasthan Studies & Regional Heritage (`rajasthan-studies`)
 *
 * Epistemic Standards:
 * - High-Yield RPSC RAS & Sub-Inspector Mapping (`examMappings`).
 * - 4-Layer Architecture: Source Truth -> Claims/Evidence -> Canonical Concepts -> Content/Revision/Assessment Blocks.
 * - Typographic Safety: Zero unescaped single $ symbols (use ₹, USD, or KaTeX).
 */

import { db } from '../db/client';

export interface ExamConceptMappingDef {
  examCode: string;
  syllabusUnit: string;
  relevance: 'VERY_HIGH' | 'HIGH' | 'MEDIUM';
  priority: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  requiredDepth: 'EXHAUSTIVE' | 'DETAILED' | 'SURVEY';
  notes: string;
}

export interface RajasthanEcoConceptSeed {
  id: string;
  topicOrder: number;
  topicSlug: string;
  topicTitle: string;
  topicDescription: string;
  slug: string;
  title: string;
  shortDefinition: string;
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  claims: {
    id: string;
    statement: string;
    claimType: 'CORE_PRINCIPLE' | 'HISTORICAL_FACT' | 'STATUTORY_RULE';
    epistemicLevel: 'ESTABLISHED_FACT' | 'SCHOLARLY_CONSENSUS';
    confidence: 'HIGH' | 'MEDIUM';
    locator: string;
    excerpt: string;
  }[];
  contentBlocks: {
    type: 'INTUITION' | 'CORE_IDEA' | 'MECHANISM' | 'EXAM_APPLICATION';
    title: string;
    body: string;
    order: number;
  }[];
  revisionUnits: {
    type: 'FLASH_30S' | 'SUMMARY_2M' | 'ARCHITECTURE_5M';
    content: string;
  }[];
  questions: {
    type: 'CONCEPT_CHECK' | 'APPLIED_SCENARIO';
    difficulty: 'EASY' | 'MEDIUM' | 'HARD';
    stem: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
    trapExplanation?: string;
    examinerTrapPattern?: string;
  }[];
  examMappings: ExamConceptMappingDef[];
}

export const RAJASTHAN_ECO_SCHEMES_CONCEPTS: RajasthanEcoConceptSeed[] = [
  {
    "id": "CON-RAJ-ECO-01",
    "topicOrder": 1,
    "topicSlug": "rajasthan-economic-review-and-flagship-schemes",
    "topicTitle": "Rajasthan Economic Review, Public Finance, Flagship Welfare & Regional Development",
    "topicDescription": "Authoritative macroeconomic indicators, public finance structures, sectoral GSVA composition, price indices, social security pension architecture, maternal-child nutrition initiatives, MSME entrepreneurship, and ecological projects of Rajasthan.",
    "slug": "rajasthan-macroeconomic-aggregates-gsdp-gsva-per-capita-income",
    "title": "Macroeconomic Aggregates of Rajasthan: GSDP, GSVA Sectoral Shares & Per Capita Income",
    "shortDefinition": "The foundational macroeconomic aggregates of Rajasthan's economy as reported in the official Rajasthan Economic Review, encompassing GSDP at constant (2011-12) vs. current prices, sectoral GSVA composition (Agriculture, Industry, Services), Per Capita Income dynamics, and state-specific price index metrics (WPI base 1999-2000).",
    "difficulty": "INTERMEDIATE",
    "claims": [
      {
        "id": "CLM-RAJ-ECO-01-01",
        "statement": "According to the official Rajasthan Economic Review, Rajasthan's Gross State Value Added (GSVA) at constant (2011-12) prices exhibits a sectoral composition of approximately 27-28% for Agriculture, 27-28% for Industry, and 44-45% for Services, reflecting a significantly higher agricultural dependence compared to the national average of around 18%.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Rajasthan Economic Review 2024-25 / 2025-26, Chapter 1: Macro-Economic Aggregates",
        "excerpt": "The sectoral contribution in GSVA at constant (2011-12) prices shows Agriculture contributing ~27%, Industry ~28%, and Services ~45%."
      },
      {
        "id": "CLM-RAJ-ECO-01-02",
        "statement": "Per Capita Income (PCI) in Rajasthan at constant (2011-12) prices has grown steadily to surpass ₹86,000, while at current prices it exceeds ₹1,56,000, reflecting expanding economic output though remaining moderately below the all-India per capita income benchmark.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Rajasthan Economic Review, Directorate of Economics & Statistics, GoR",
        "excerpt": "Per Capita Income at current prices reflects the average earning power of state citizens, registering continuous nominal growth across successive fiscal years."
      },
      {
        "id": "CLM-RAJ-ECO-01-03",
        "statement": "Rajasthan utilizes a state-specific Wholesale Price Index (WPI) with base year 1999-2000 = 100 covering 154 commodities across three major groups: Primary Articles (75 items), Fuel, Power, Light & Lubricants (10 items), and Manufactured Products (69 items).",
        "claimType": "STATUTORY_RULE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Rajasthan Economic Review, Chapter 2: Price Statistics",
        "excerpt": "The Directorate of Economics & Statistics compiles monthly WPI of Rajasthan with base year 1999-2000=100 comprising 154 items."
      },
      {
        "id": "CLM-RAJ-ECO-01-04",
        "statement": "In public finance classification under Rajasthan state accounts, interest payments, administrative salaries, social security pensions, and power/food subsidies constitute Revenue Expenditure, whereas capital outlays on irrigation canals, highways, and hospital infrastructure represent Capital Expenditure.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Rajasthan Budget Study & Comptroller and Auditor General (CAG) State Finance Audit Report",
        "excerpt": "Subsidies and pension payments are classified strictly as revenue expenditure because they do not result in the creation of physical capital assets."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Three Engines of the Desert State",
        "body": "Imagine evaluating a family's financial health. You wouldn't just count the gross cash in their bank account; you would ask: How much comes from farming seasonal crops that depend on the monsoon? How much comes from family-run manufacturing workshops? How much comes from services like transport, tourism, and healthcare? And critically, are they spending their income on daily maintenance and food subsidies (Revenue Expenditure) or on building a permanent borewell and house extension (Capital Expenditure)?\n\nThis is precisely how the Rajasthan Economic Review dissects the state's economy. While the national economy has shifted overwhelmingly toward services, Rajasthan retains a muscular, high-stakes agrarian and livestock base (~27% of GSVA). Understanding these macro aggregates allows an administrator to diagnose drought vulnerability, industrial tax buoyancy, and fiscal sustainability.",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "Sectoral Breakdown, Price Indices & Fiscal Architecture",
        "body": "The core economic metrics governing Rajasthan's state policy and RPSC examinations:\n\n1. Gross State Domestic Product (GSDP) & Sectoral GSVA:\n   - Constant vs. Current Prices: Constant prices measure real physical volume of output using 2011-12 as the anchor base year (eliminating inflation), while Current prices reflect nominal values at prevailing market rates.\n   - GSVA Sectoral Triad:\n     * Agriculture & Allied Sector: ~27% (Includes crops, livestock, forestry, and fisheries; livestock alone contributes over 45% of agricultural GSVA, making milk and meat vital stabilizers against crop failures).\n     * Industry Sector: ~27-28% (Includes manufacturing, mining & quarrying, electricity, gas, water supply, and construction).\n     * Services Sector: ~45% (Includes trade, hotels, transport, financial services, real estate, public administration, education, and healthcare).\n\n2. Price Metrics of Rajasthan:\n   - Wholesale Price Index (WPI): Unique base year of 1999-2000 = 100. Comprises 154 items (Primary: 75, Fuel: 10, Manufactured: 69). Primary articles carry a heavyweight in the state basket (~33.9%), making food production fluctuations immediately visible in WPI.\n   - Consumer Price Index for Industrial Workers (CPI-IW): New base year 2016 = 100; tracked across three designated centers in Rajasthan: Jaipur, Alwar, and Bhilwara (replacing Ajmer).\n\n3. Fiscal Deficit & Expenditure Classification:\n   - Revenue Expenditure: Consumption spending that creates no physical assets—pensions, interest on state debt, salaries, and welfare subsidies.\n   - Capital Expenditure: Asset-creating investment—highways, dams (ERCP, IGNP), medical colleges, and electricity transmission grids.",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "The Macroeconomic Architecture of Rajasthan",
        "body": "The flow and classification of Rajasthan's state economy:\n\n```\n+-------------------------------------------------------------------------+\n|                   RAJASTHAN MACROECONOMIC ARCHITECTURE                  |\n+-------------------------------------------------------------------------+\n\n               [GROSS STATE DOMESTIC PRODUCT (GSDP)]\n                     /                  \\\n      Constant Prices (2011-12)      Current Prices (Nominal)\n                     \\                  /\n               [GROSS STATE VALUE ADDED (GSVA)]\n           +-----------------+-----------------+\n           |                 |                 |\n           v                 v                 v\n     [AGRICULTURE]      [INDUSTRY]        [SERVICES]\n       (~27-28%)         (~27-28%)         (~44-45%)\n     * Crops: ~46%      * Mfg: ~36%       * Real Estate & Trade\n     * Livestock: ~46%! * Construction    * Tourism & Hospitality\n     * Forestry: ~8%    * Mining (Marble, * Public Admin & IT\n                          Lignite, Zinc)  \n===========================================================================\n                       STATE EXPENDITURE DICHOTOMY                         \n===========================================================================\n REVENUE EXPENDITURE (Consumptive):   CAPITAL EXPENDITURE (Asset-Creating):\n - Pension Payments (e.g. ₹1,500/mo)  - Irrigation Projects (ERCP/IGNP)\n - Agricultural & Power Subsidies     - Renewable Solar Energy Parks\n - Government Salaries & Debt Interest - Medical College Construction\n```",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC Examination Traps & Policy Insights",
        "body": "Key examination traps regularly set by RPSC in Sub-Inspector and RAS Prelims:\n\n1. The Subsidy Capitalization Trap:\n   - Examiners frequently state: 'Expenditure on power and food subsidies is classified as capital expenditure.' This is false. Subsidies are unrequited transfers to consumers/firms and form part of Revenue Expenditure.\n\n2. The WPI Base Year Trap:\n   - National WPI uses base year 2011-12 = 100. However, Rajasthan's state-specific WPI compiled by the DES still uses 1999-2000 = 100 with 154 items.\n\n3. The CPI-IW Center Replacement Trap:\n   - Under the revised 2016 series of CPI-IW, Bhilwara and Alwar were included alongside Jaipur, while the historic Ajmer center was dropped.",
        "order": 4
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Rajasthan GSVA breakdown at constant prices: Agriculture ~27%, Industry ~28%, Services ~45%. Livestock provides ~46% of farm output. State WPI uses base 1999-2000 (154 items). CPI-IW centers are Jaipur, Alwar, Bhilwara. Government subsidies and pensions are Revenue Expenditure, not Capital!"
      },
      {
        "type": "SUMMARY_2M",
        "content": "The Rajasthan Economic Review provides the definitive factual baseline for state exams. Rajasthan's GSVA shows an agrarian share (~27%) far higher than India's national average (~18%), stabilized by a massive livestock subsector contributing ~46% of agricultural output. The state WPI retains a 1999-2000 base with 154 commodities, while the industrial CPI tracks Jaipur, Alwar, and Bhilwara. In public budgeting, expenditures on interest, pensions, and subsidies are classified as revenue spending, while infrastructure creation constitutes capital outlays."
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Macroeconomic Foundations of Rajasthan:\n1. Sectoral Distribution: Services leads at ~45%, while Industry and Agriculture contribute ~28% and ~27% respectively.\n2. Price Tracking: WPI (Base 1999-2000=100, 154 items) and CPI-IW (Base 2016=100 for Jaipur, Alwar, Bhilwara).\n3. Budgetary Classification: Revenue expenditure covers pensions and subsidies, whereas capital expenditure creates physical state infrastructure."
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "Read the following statements regarding the classification of Government expenditure in Rajasthan and select the correct answer:\n(a) Expenditure on pension payment is a part of revenue expenditure of Government.\n(b) Expenditure on subsidy is a part of capital expenditure of Government.",
        "options": [
          "Only (a) is correct",
          "Both (a) and (b) are correct",
          "Only (b) is correct",
          "Neither (a) nor (b) is correct"
        ],
        "correctAnswer": "Only (a) is correct",
        "explanation": "Pension payments are unrequited transfers for current consumption and are correctly classified under Revenue Expenditure. Subsidies (whether on power, fertilizer, or food) do not create any tangible capital assets and therefore also constitute Revenue Expenditure, making statement (b) incorrect.",
        "trapExplanation": "Subsidies are often thought of as government assistance to capital projects, but in public accounting standard rules, subsidies are strictly revenue expenditure (B). Statement (b) is false, eliminating options 2 and 3.",
        "examinerTrapPattern": "Confusing government capital creation with welfare subsidies and revenue transfer payments."
      },
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "Which of the following represents the correct base year and total number of commodities in the Wholesale Price Index (WPI) compiled specifically by the Directorate of Economics and Statistics, Rajasthan?",
        "options": [
          "Base Year: 1999-2000 = 100; Total Commodities: 154 items",
          "Base Year: 2011-2012 = 100; Total Commodities: 697 items",
          "Base Year: 2004-2005 = 100; Total Commodities: 100 items",
          "Base Year: 2016 = 100; Total Commodities: 250 items"
        ],
        "correctAnswer": "Base Year: 1999-2000 = 100; Total Commodities: 154 items",
        "explanation": "While the National WPI uses base 2011-12 with 697 items, the Government of Rajasthan continues to compile its state WPI with base year 1999-2000 = 100 covering 154 commodities (75 primary articles, 10 fuel/power items, and 69 manufactured products).",
        "trapExplanation": "2011-12 with 697 items is the national All-India WPI base, not Rajasthan's state index (B). 2016 is the base year for the Consumer Price Index for Industrial Workers (CPI-IW) (D).",
        "examinerTrapPattern": "Conflating All-India WPI series parameters with Rajasthan state-specific WPI index architecture."
      },
      {
        "type": "APPLIED_SCENARIO",
        "difficulty": "HARD",
        "stem": "According to the official Rajasthan Economic Review, which sub-sector accounts for nearly half (~45-46%) of the total Gross State Value Added (GSVA) within the Agriculture & Allied Sector in Rajasthan?",
        "options": [
          "Livestock (Animal Husbandry)",
          "Forestry and Logging",
          "Fishing and Aquaculture",
          "Horticultural Floriculture"
        ],
        "correctAnswer": "Livestock (Animal Husbandry)",
        "explanation": "In Rajasthan, livestock (animal husbandry) constitutes ~45-46% of the agricultural sector's GSVA, rivaling crop production (~46%). This unique structural feature cushions the rural economy against frequent droughts and crop failures.",
        "trapExplanation": "Forestry accounts for only ~8% of the agriculture sector (B). Fisheries accounts for less than 1% due to arid continental geography (C). Crops and livestock together form over 90% of agricultural GSVA.",
        "examinerTrapPattern": "Underestimating the economic weight of pastoral animal husbandry relative to arable field crops in Rajasthan."
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Economy of Rajasthan - Major Economic Aggregates & Public Finance",
        "relevance": "VERY_HIGH",
        "priority": "HIGH",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Directly tested in RAS Prelims and Mains Paper I."
      },
      {
        "examCode": "RPSC_SUB_INSPECTOR",
        "syllabusUnit": "Economy of Rajasthan & Economic Review Data",
        "relevance": "VERY_HIGH",
        "priority": "HIGH",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Tested in Paper II GK & GS (e.g. Q60 in 2026 SI paper)."
      }
    ]
  },
  {
    "id": "CON-RAJ-ECO-02",
    "topicOrder": 1,
    "topicSlug": "rajasthan-economic-review-and-flagship-schemes",
    "topicTitle": "Rajasthan Economic Review, Public Finance, Flagship Welfare & Regional Development",
    "topicDescription": "Authoritative macroeconomic indicators, public finance structures, sectoral GSVA composition, price indices, social security pension architecture, maternal-child nutrition initiatives, MSME entrepreneurship, and ecological projects of Rajasthan.",
    "slug": "rajasthan-social-security-pensions-vishesh-yogyajan-silicosis-policy",
    "title": "Flagship Social Security & Disability Architecture: Mukhyamantri Vishesh Yogyajan & Silicosis Policy",
    "shortDefinition": "The comprehensive social security architecture of Rajasthan under the Social Justice & Empowerment Department, featuring statutory minimum pension guarantees, enhanced disability payouts under the Mukhyamantri Vishesh Yogyajan Samman Pension Yojana, and the pioneering Rajasthan Silicosis Policy.",
    "difficulty": "INTERMEDIATE",
    "claims": [
      {
        "id": "CLM-RAJ-ECO-02-01",
        "statement": "Under the Mukhyamantri Vishesh Yogyajan Samman Pension Yojana of Rajasthan, specially-abled individuals with 40% or more disability receive a baseline pension of ₹1,500 per month across all age categories, following the state's statutory enhancement of social security floors.",
        "claimType": "STATUTORY_RULE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Rajasthan Economic Review, Social Justice & Empowerment Section; Directorate of Social Justice, GoR",
        "excerpt": "The scheme provides a monthly pension of ₹1,500 to specially-abled persons from birth to all age groups meeting eligibility criteria."
      },
      {
        "id": "CLM-RAJ-ECO-02-02",
        "statement": "The Mukhyamantri Vishesh Yogyajan Samman Pension Yojana provides an enhanced monthly pension of ₹2,500 per month specifically to leprosy-cured individuals, recognizing their severe socioeconomic stigmatization and ongoing clinical needs.",
        "claimType": "STATUTORY_RULE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Rajasthan Economic Review 2025-26; Social Security Rules, GoR",
        "excerpt": "This scheme provides a monthly pension of ₹2,500 to leprosy-cured individuals residing in the state."
      },
      {
        "id": "CLM-RAJ-ECO-02-03",
        "statement": "Under the Rajasthan Pneumoconiosis & Silicosis Policy, certified silicosis victims certified by a designated Pneumoconiosis Medical Board receive a monthly pension of ₹2,000 per month, in addition to lump-sum rehabilitation assistance of ₹3 Lakh upon certification and ₹2 Lakh to nominees upon death.",
        "claimType": "STATUTORY_RULE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Rajasthan Silicosis Policy 2019 & Rajasthan Economic Review",
        "excerpt": "Certified silicosis victims receive ₹2,000 monthly pension and ₹3 lakh one-time relief, establishing Rajasthan as the first state with a dedicated legal silicosis framework."
      },
      {
        "id": "CLM-RAJ-ECO-02-04",
        "statement": "Rajasthan became the first state in India to enact the Minimum Guaranteed Income Act (2023), establishing a statutory right to 125 days of guaranteed employment per year and an automatic annual 15% increment in social security pensions (5% in July, 10% in January).",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Rajasthan Minimum Guaranteed Income Act, 2023; Official Gazette of Rajasthan",
        "excerpt": "The Act mandates an annual compounding increment of 15% on all basic social security pension entitlements in two distinct seasonal tranches."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Safety Net as an Inviolable Right",
        "body": "Imagine working in a sandstone or quartz quarry in Jodhpur or Karauli for twenty years. Fine silica dust penetrates your lungs, scarring the alveolar tissues until you can barely walk up three stairs without gasping for breath. Traditional welfare systems would treat you as merely 'unemployed'. You would receive no pension, no medical certification, and your family would descend into destitution.\n\nRajasthan's social security architecture fundamentally restructured this reality. By introducing the nation's first statutory Silicosis Policy and standardizing disability pensions under the Mukhyamantri Vishesh Yogyajan Yojana, the state transformed welfare from an arbitrary discretionary grant into a legal, rights-based entitlement with explicit financial slabs.",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "Pension Slabs, Silicosis Rehabilitation & Statutory Entitlements",
        "body": "The concrete architecture of social security pensions in Rajasthan:\n\n1. Mukhyamantri Vishesh Yogyajan Samman Pension Yojana:\n   - Eligibility: Any specially-abled person with 40% or higher disability (blindness, locomotor disability, mental illness, dwarfism) whose family annual income is within prescribed limits (exemption from income limit is granted if the applicant is certified by the medical board).\n   - Benefit Slabs:\n     * General Specially-Abled (Birth to all ages): ₹1,500 per month.\n     * Leprosy-Cured Individuals: Enhanced rate of ₹2,500 per month.\n     * Silicosis Patients (Certified): ₹2,000 per month.\n\n2. The Rajasthan Silicosis Policy (2019):\n   - Institutional Screening: Pneumoconiosis Medical Boards set up at medical colleges and district hospitals with digital chest X-ray integration through the Silicosis Portal.\n   - Financial Relief Package:\n     * Upon Diagnosis/Certification: ₹3 Lakh lump-sum assistance for medical care and livelihood rehabilitation.\n     * Monthly Pension: ₹2,000 per month through the Vishesh Yogyajan scheme.\n     * Upon Death: ₹2 Lakh paid to the legal dependents + ₹10,000 for funeral expenses.\n     * Dependent Social Security: Widow receives Mukhyamantri Ekal Nari Pension (~₹1,500/month), and children receive Palanhar Yojana benefits (₹1,500/month per child plus annual school uniform/shoe allowance).\n\n3. The Statutory 15% Annual Escalation:\n   - Under the Rajasthan Minimum Guaranteed Income Act, pensions cannot remain frozen. An automated 15% annual raise is enacted in two phases: 5% in July and 10% in January.",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "The Social Protection Matrix of Rajasthan",
        "body": "The institutional structure of social security disability and silicosis relief:\n\n```\n+-------------------------------------------------------------------------+\n|             RAJASTHAN SOCIAL SECURITY & DISABILITY MATRIX               |\n+-------------------------------------------------------------------------+\n\n               [SOCIAL JUSTICE & EMPOWERMENT DEPARTMENT (SJED)]\n                                      |\n         +----------------------------+---------------------------+\n         |                                                        |\n         v                                                        v\n  [VISHESH YOGYAJAN SAMMAN PENSION]                  [RAJASTHAN SILICOSIS POLICY]\n  * 40%+ Disability (All ages) -> ₹1,500 / Month     * Designated Medical Board Exam\n  * Leprosy-Cured Individuals  -> ₹2,500 / Month     * Certification Portal Record\n  * Certified Silicosis Victims -> ₹2,000 / Month                 |\n                                                     +------------+------------+\n                                                     |                         |\n                                                     v                         v\n                                             LUMP-SUM RELIEF:          POST-MORTEM AID:\n                                             - ₹3 Lakh on Diagnosis    - ₹2 Lakh to Nominee\n                                             - ₹2,000 / Month Pension  - ₹10,000 Funeral\n                                                                       - Palanhar for kids\n===========================================================================\n                 THE 15% COMPOUNDING STATUTORY ESCALATION                  \n===========================================================================\n Minimum Guaranteed Income Act, 2023 -> 5% Raise in July + 10% Raise in January\n```",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Exam Application: RPSC Question Traps on Pension Slabs",
        "body": "How RPSC framed Question 49 in the September 2026 Sub-Inspector Paper:\n\n1. The Exact Slab Verification:\n   - Statement A: 'Provides monthly pension of ₹1,500 to specially-abled persons from birth to all age groups.' (Correct).\n   - Statement B: 'Provides monthly pension of ₹2,500 to leprosy-cured individuals.' (Correct).\n   - Statement C: 'Provides monthly pension of ₹2,000 to silicosis victims certified by designated Medical Board.' (Correct).\n   - Correct Answer: (A), (B) and (C) all are correct.\n\n2. The Palanhar Integration Trap:\n   - Examiners often confuse the silicosis patient's personal pension (₹2,000) with the Palanhar allowance given to their minor children (₹1,500 per month). Ensure clear distinction between patient-level and child-level support.",
        "order": 4
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Mukhyamantri Vishesh Yogyajan Pension Slabs: General specially-abled get ₹1,500/month; leprosy-cured individuals get ₹2,500/month; certified silicosis victims get ₹2,000/month. Silicosis Policy also awards ₹3 Lakh on certification and ₹2 Lakh on death. All state pensions escalate 15% annually by law!"
      },
      {
        "type": "SUMMARY_2M",
        "content": "Rajasthan's social security pension framework under the Social Justice and Empowerment Department is a high-yield topic for RPSC exams. The Mukhyamantri Vishesh Yogyajan Samman Pension provides ₹1,500 per month for general disability (≥40%), ₹2,500 for leprosy-cured individuals, and ₹2,000 for silicosis victims. Under the pioneering 2019 Silicosis Policy, victims receive ₹3 Lakh on certification, ₹2,000/month pension, and ₹2 Lakh upon death. The Minimum Guaranteed Income Act 2023 legally mandates an annual 15% compounding pension increment."
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Social Security & Silicosis Architecture:\n1. Pension Slabs: ₹1,500 (General disability), ₹2,500 (Leprosy-cured), ₹2,000 (Certified Silicosis).\n2. Silicosis Relief: ₹3 Lakh upfront diagnosis grant, ₹2 Lakh survivor benefit, ₹10,000 funeral assistance, plus Palanhar Yojana for orphans/dependents.\n3. Legal Guarantee: Minimum Guaranteed Income Act mandates 125 days work and an annual 15% statutory pension hike (5% July, 10% January)."
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "As per the Economic Review and state social welfare rules, consider the following statements regarding the Mukhyamantri Vishesh Yogyajan Samman Pension Yojana of Rajasthan:\n(A) This scheme provides a monthly pension of ₹1,500 to specially-abled persons from birth to all age groups.\n(B) This scheme provides a monthly pension of ₹2,500 to leprosy-cured individuals.\n(C) This scheme provides a monthly pension of ₹2,000 to silicosis victims certified by a designated Medical Board.\nWhich of the statements given above is/are correct?",
        "options": [
          "(A), (B) and (C) all are correct",
          "Only (A) and (B) are correct",
          "Only (B) is correct",
          "Only (A) and (C) are correct"
        ],
        "correctAnswer": "(A), (B) and (C) all are correct",
        "explanation": "All three statements accurately state the statutory benefit amounts under the Mukhyamantri Vishesh Yogyajan Samman Pension Yojana: ₹1,500/month baseline for specially-abled individuals across all age brackets, an enhanced ₹2,500/month for leprosy-cured citizens, and ₹2,000/month for medical-board-certified silicosis patients.",
        "trapExplanation": "A common mistake is assuming leprosy-cured individuals receive the standard ₹1,500 rather than the higher specialized slab of ₹2,500, or that silicosis victims receive ₹3,000 monthly rather than ₹2,000.",
        "examinerTrapPattern": "Testing fine numeric distinctions between different sub-categories of disability pensions in Rajasthan."
      },
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "Under the Rajasthan Policy on Pneumoconiosis and Silicosis, what lump-sum financial assistance is provided by the state to an affected worker upon medical certification?",
        "options": [
          "₹3.00 Lakh upon certification, followed by ₹2,000 monthly pension",
          "₹1.00 Lakh upon certification, followed by ₹5,000 monthly pension",
          "₹10.00 Lakh in equity shares of mining cooperatives",
          "₹50,000 one-time reimbursement for respiratory inhalers"
        ],
        "correctAnswer": "₹3.00 Lakh upon certification, followed by ₹2,000 monthly pension",
        "explanation": "Under the Rajasthan Silicosis Policy (2019), a worker certified with silicosis by the designated Pneumoconiosis Board receives ₹3 Lakh one-time rehabilitation assistance, a monthly pension of ₹2,000, and upon death, the family receives ₹2 Lakh plus ₹10,000 for funeral expenses.",
        "trapExplanation": "Candidates often confuse the ₹3 Lakh upfront certification aid with the ₹2 Lakh survivor benefit paid on death.",
        "examinerTrapPattern": "Swapping the diagnosis compensation amount (₹3 Lakh) with the post-mortem death relief amount (₹2 Lakh)."
      },
      {
        "type": "APPLIED_SCENARIO",
        "difficulty": "HARD",
        "stem": "Under the provisions of the Rajasthan Minimum Guaranteed Income Act, 2023, what is the mandatory compounding annual increment rate applied to basic social security pensions in the state?",
        "options": [
          "15 percent per annum (split into 5% in July and 10% in January)",
          "10 percent per annum (effective 1st April each fiscal year)",
          "5 percent per annum linked directly to the wholesale food inflation rate",
          "20 percent per annum subject to state legislative budget approval"
        ],
        "correctAnswer": "15 percent per annum (split into 5% in July and 10% in January)",
        "explanation": "The Rajasthan Minimum Guaranteed Income Act, 2023 statutorily establishes an automatic 15% compounding annual increase on basic social security pensions, delivered in two semi-annual installments: 5% in July and 10% in January.",
        "trapExplanation": "Candidates commonly guess 10% or a single annual adjustment in April, missing the distinctive statutory split of 5% in July and 10% in January.",
        "examinerTrapPattern": "Testing statutory compounding increments versus standard discretionary inflation dearness adjustments."
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Welfare Schemes & Social Justice in Rajasthan",
        "relevance": "VERY_HIGH",
        "priority": "HIGH",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Directly asked in RAS Mains Paper I, Paper III, and Prelims."
      },
      {
        "examCode": "RPSC_SUB_INSPECTOR",
        "syllabusUnit": "Flagship Government Schemes of Rajasthan",
        "relevance": "VERY_HIGH",
        "priority": "HIGH",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Verbatim tested in 2026 SI Paper II Question 49."
      }
    ]
  },
  {
    "id": "CON-RAJ-ECO-03",
    "topicOrder": 1,
    "topicSlug": "rajasthan-economic-review-and-flagship-schemes",
    "topicTitle": "Rajasthan Economic Review, Public Finance, Flagship Welfare & Regional Development",
    "topicDescription": "Authoritative macroeconomic indicators, public finance structures, sectoral GSVA composition, price indices, social security pension architecture, maternal-child nutrition initiatives, MSME entrepreneurship, and ecological projects of Rajasthan.",
    "slug": "rajasthan-child-maternal-nutrition-amrit-aahar-maa-voucher-kalika",
    "title": "Child & Maternal Health Architecture: Mukhyamantri Amrit Aahar, MAA Voucher & Kalika Units",
    "shortDefinition": "The integrated child malnutrition and maternal health architecture of Rajasthan, featuring daily skimmed milk supplementation under the Mukhyamantri Amrit Aahar Yojana (launched Dec 14, 2024), universal sonography vouchers under the MAA Voucher Scheme, and Kalika Patrolling Units for women's security.",
    "difficulty": "INTERMEDIATE",
    "claims": [
      {
        "id": "CLM-RAJ-ECO-03-01",
        "statement": "The Mukhyamantri Amrit Aahar Yojana was launched on 14th December 2024 across all Anganwadi Centres of Rajasthan to tackle childhood malnutrition among children aged 3 to 6 years.",
        "claimType": "HISTORICAL_FACT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Directorate of Women and Child Development (WCD), GoR; Rajasthan Economic Review",
        "excerpt": "The scheme was implemented across all anganwadi centres from 14th December 2024 to address malnutrition in children aged 3-6 years."
      },
      {
        "id": "CLM-RAJ-ECO-03-02",
        "statement": "Under the Mukhyamantri Amrit Aahar Yojana, standard-grade skimmed milk powder is procured from the Rajasthan Co-operative Dairy Federation (RCDF), providing 100 ml of sweet, warm milk per child per day for all eligible Anganwadi attendees.",
        "claimType": "STATUTORY_RULE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "WCD Guidelines & RCDF Procurement Agreements, GoR",
        "excerpt": "Under this scheme, standard-grade skimmed milk powder is supplied by RCDF, providing 100 ml of sweet warm milk per child per day."
      },
      {
        "id": "CLM-RAJ-ECO-03-03",
        "statement": "The MAA Voucher Scheme (Maternal Aid & Assessment) provides free ultrasound/sonography e-vouchers to pregnant women in their second and third trimesters, empaneling both government healthcare institutions and accredited private sonography centers to ensure zero out-of-pocket antenatal screening costs.",
        "claimType": "STATUTORY_RULE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Department of Medical, Health and Family Welfare, GoR; Official Guidelines for MAA Vouchers",
        "excerpt": "Both government and private sonography centres have been included in the MAA Voucher Scheme to facilitate cashless diagnostic sonography."
      },
      {
        "id": "CLM-RAJ-ECO-03-04",
        "statement": "The Government of Rajasthan constituted specialized Kalika Patrolling Units—all-women two-wheeler police squads equipped with emergency communication gear—specifically to safeguard girls and women in public transit, educational campuses, and coaching zones.",
        "claimType": "STATUTORY_RULE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Rajasthan Police / Directorate of Women Safety, Home Department, GoR",
        "excerpt": "The Rajasthan Government constituted the Kalika Patrolling Unit to enhance the safety and security of girls and women in public spaces."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Nurturing the First 1,000 Days and Safeguarding the Public Sphere",
        "body": "Suppose a village has an Anganwadi centre, but families living in extreme poverty cannot afford dairy milk for their growing toddlers. The consequence is chronic stunting, wasting, and anemia that permanently reduces the child's cognitive potential. At the same time, if a pregnant mother cannot afford an ultrasound scan at a private clinic when the local government hospital machine is broken, high-risk obstetric complications go undetected until emergency labor.\n\nRajasthan's integrated women and child welfare initiatives bridge both diagnostic and nutritional divides. By partnering with the state dairy cooperative (RCDF) for daily warm milk in Anganwadis and issuing electronic diagnostic vouchers valid in private sonography clinics, the state eliminates structural barriers to maternal-child survival, while dedicated all-women police units (Kalika) protect their physical mobility in public spaces.",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "Amrit Aahar Mechanics, MAA Sonography Vouchers & Kalika Patrols",
        "body": "Detailed analysis of Rajasthan's maternal, child, and women empowerment schemes:\n\n1. Mukhyamantri Amrit Aahar Yojana (Dec 14, 2024):\n   - Launch Date: 14th December 2024.\n   - Target Demographic: Children aged 3 to 6 years registered at all operational Anganwadi centres across Rajasthan.\n   - Nutritional Delivery: 100 ml of warm, sweet milk per day per child.\n   - Sourcing Partner: Rajasthan Co-operative Dairy Federation (RCDF), supplying fortified skimmed milk powder to guarantee hygiene, shelf-life, and protein content.\n   - Clinical Objective: Reversing severe acute malnutrition (SAM) and moderate acute malnutrition (MAM) during the critical pre-school growth window.\n\n2. The MAA Voucher Scheme (Sonography Diagnostic Network):\n   - Problem Addressed: In many community health centers (CHCs) and sub-district hospitals, sonography radiologists are unavailable, forcing pregnant mothers to pay ₹1,000-₹1,500 at commercial private clinics.\n   - Policy Mechanism: The Medical & Health Department issues QR-code based electronic vouchers (MAA Vouchers). Pregnant women in their 2nd and 3rd trimester redeem these vouchers for free anomaly scans at either government hospitals or empanelled private sonography diagnostic centers.\n   - Reimbursement: The state treasury directly reimburses the private sonologist via Direct Benefit Transfer (DBT), ensuring completely cashless care.\n\n3. Kalika Patrolling Units (Women's Safety Directorate):\n   - Structure: Two-wheeler patrol squads staffed exclusively by trained female police constables.\n   - Deployment: Stationed around colleges, universities, girls' schools, transit hubs, and private coaching clusters (Kota, Jaipur, Jodhpur).\n   - Function: Deterrence of street harassment, eve-teasing, instant response to SOS alerts, and confidence-building among young female students.",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "The Integrated Child & Maternal Welfare Delivery Mechanism",
        "body": "How nutritional and diagnostic welfare interventions are delivered across Rajasthan:\n\n```\n+-------------------------------------------------------------------------+\n|               RAJASTHAN MATERNAL & CHILD WELFARE ENGINE                 |\n+-------------------------------------------------------------------------+\n\n [MUKHYAMANTRI AMRIT AAHAR YOJANA]         [MAA VOUCHER SCHEME]\n (Launched 14 Dec 2024 | Anganwadis)       (Prenatal Sonography Screening)\n             |                                             |\n             v                                             v\n   RCDF supplies Skimmed Milk Powder            QR-Code Electronic Vouchers Issued\n             |                                  to 2nd/3rd Trimester Mothers\n             v                                             |\n   100 ml Sweet Warm Milk / Day / Child                    +---------------+---------------+\n   Target: 3-6 Year Old Children                           |                               |\n   Result: Reverses Stunting & Wasting                     v                               v\n                                                  Government Hospitals       Empanelled Private\n                                                  Sonography Centers         Sonography Centers\n                                                  (100% Cashless)            (Direct DBT Reimbursement)\n===========================================================================\n                   KALIKA PATROLLING UNITS (POLICE SAFETY)                 \n===========================================================================\n All-Women Motorcycle Units -> Patrolling Schools, Colleges & Coaching Hubs\n                            -> Instant SOS Response & Anti-Harassment Deterrence\n```",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC Examination Breakdown: Questions 44 & 52",
        "body": "How RPSC tested these exact schemes in the September 2026 Sub-Inspector Examination:\n\n1. Question 52 Analysis (Mukhyamantri Amrit Aahar Yojana):\n   - Statement (I): Implemented across all Anganwadi Centres from 14th December 2024. (True).\n   - Statement (II): Implemented to address malnutrition among children aged 3-6 years. (True).\n   - Statement (III): Standard-grade skimmed milk powder supplied by RCDF providing 100 ml sweet warm milk. (True).\n   - Result: All three statements (I), (II) and (III) are correct.\n\n2. Question 44 Analysis (Women's Empowerment Policies):\n   - Statement (I): Both government and private sonography centres have been included in the MAA Voucher Scheme. (True).\n   - Statement (II): The Rajasthan Government has constituted the Kalika Patrolling Unit to enhance safety of girls and women. (True).\n   - Result: Both (I) and (II) are correct.",
        "order": 4
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Mukhyamantri Amrit Aahar (launched Dec 14, 2024) feeds 100 ml warm sweet milk daily to children aged 3-6 in all Anganwadis using RCDF skimmed milk powder. MAA Voucher gives free sonography scans in both government and private diagnostic centers. Kalika Patrolling Units are all-women police squads protecting public spaces!"
      },
      {
        "type": "SUMMARY_2M",
        "content": "Rajasthan's child and maternal health architecture tackles malnutrition and healthcare costs through targeted partnerships. The Mukhyamantri Amrit Aahar Yojana, launched 14 Dec 2024, provides 100 ml of sweet milk per day to 3-6 year-olds in Anganwadis using RCDF skimmed milk powder. The MAA Voucher scheme provides pregnant women with cashless sonography screening at both government hospitals and accredited private clinics via digital vouchers. Public safety for women is enforced by the Kalika Patrolling Unit, an all-women mobile police squad."
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Child & Maternal Health Delivery Architecture:\n1. Amrit Aahar: Launched Dec 14, 2024 for 3-6 year-olds, supplying 100 ml daily sweet milk prepared from RCDF skimmed milk powder.\n2. MAA Vouchers: Cashless 2nd and 3rd trimester sonography vouchers redeemable at both government and empanelled private clinics.\n3. Kalika Squads: Dedicated women-police motorcycle patrolling units safeguarding educational institutions and coaching clusters."
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "Consider the following statements related to the Mukhyamantri Amrit Aahar Scheme of Rajasthan:\n(I) This scheme has been implemented across all Anganwadi Centres from 14th December 2024.\n(II) This scheme has been implemented to address malnutrition among children aged 3-6 years.\n(III) Under this scheme, standard-grade skimmed milk powder is supplied by the Rajasthan Co-operative Dairy Federation, providing 100 ml of sweet warm milk per child per day.\nWhich of the statements given above is/are correct?",
        "options": [
          "(I), (II) and (III) all are correct",
          "Only (I) and (II) are correct",
          "Only (I) and (III) are correct",
          "Only (II) and (III) are correct"
        ],
        "correctAnswer": "(I), (II) and (III) all are correct",
        "explanation": "All three statements are factually accurate. The Mukhyamantri Amrit Aahar Scheme was rolled out on December 14, 2024 across Anganwadi centers in Rajasthan for children aged 3-6 years, providing 100 ml of sweet milk daily using RCDF skimmed milk powder.",
        "trapExplanation": "Candidates may suspect the volume (100 ml vs 150 ml) or the agency (RCDF vs Mother Dairy), but all parameters stated in the question are official government specifications.",
        "examinerTrapPattern": "Verifying exact launch dates, target age brackets, and partner public-sector dairy cooperatives."
      },
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "Consider the following statements regarding the schemes and policies for women's empowerment in Rajasthan:\n(I) Both government and private sonography centres have been included in the MAA Voucher Scheme.\n(II) The Rajasthan Government has constituted the Kalika Patrolling Unit to enhance the safety of girls and women.\nWhich of the above statements is/are correct?",
        "options": [
          "Both (I) and (II) are correct",
          "Only (I) is correct",
          "Only (II) is correct",
          "Neither (I) nor (II) is correct"
        ],
        "correctAnswer": "Both (I) and (II) are correct",
        "explanation": "Statement (I) is correct because the MAA Voucher Scheme explicitly empaneled both government facilities and accredited private sonography clinics to ensure seamless access. Statement (II) is correct as Kalika Patrolling Units were established as all-women police squads for public safety.",
        "trapExplanation": "A common misconception is that government welfare vouchers can only be redeemed at government hospitals; the hallmark of the MAA Voucher scheme is its private diagnostic clinic empanelment.",
        "examinerTrapPattern": "Assuming state welfare diagnostic vouchers exclude private sector diagnostic centers."
      },
      {
        "type": "APPLIED_SCENARIO",
        "difficulty": "HARD",
        "stem": "Which cooperative institution serves as the sole procurement and processing partner for the supply of fortified skimmed milk powder under the Mukhyamantri Amrit Aahar Yojana in Rajasthan?",
        "options": [
          "Rajasthan Co-operative Dairy Federation (RCDF)",
          "Amul (Gujarat Co-operative Milk Marketing Federation)",
          "National Dairy Development Board (NDDB)",
          "Rajasthan State Warehousing Corporation (RSWC)"
        ],
        "correctAnswer": "Rajasthan Co-operative Dairy Federation (RCDF)",
        "explanation": "The Rajasthan Co-operative Dairy Federation (RCDF), which operates the renowned 'Saras' milk brand, is the authorized government partner providing standardized skimmed milk powder across all district Anganwadi networks.",
        "trapExplanation": "Amul and NDDB are national giants, but Rajasthan state welfare schemes prioritize the domestic cooperative federation RCDF (Saras).",
        "examinerTrapPattern": "Distracting with prominent national dairy brands instead of state-level cooperative apex federations."
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Women & Child Development Schemes in Rajasthan",
        "relevance": "VERY_HIGH",
        "priority": "HIGH",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Directly tested in RAS Prelims and Paper II/III."
      },
      {
        "examCode": "RPSC_SUB_INSPECTOR",
        "syllabusUnit": "Welfare Policies and Women Empowerment in Rajasthan",
        "relevance": "VERY_HIGH",
        "priority": "HIGH",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Tested verbatim in 2026 SI Paper II Questions 44 and 52."
      }
    ]
  },
  {
    "id": "CON-RAJ-ECO-04",
    "topicOrder": 1,
    "topicSlug": "rajasthan-economic-review-and-flagship-schemes",
    "topicTitle": "Rajasthan Economic Review, Public Finance, Flagship Welfare & Regional Development",
    "topicDescription": "Authoritative macroeconomic indicators, public finance structures, sectoral GSVA composition, price indices, social security pension architecture, maternal-child nutrition initiatives, MSME entrepreneurship, and ecological projects of Rajasthan.",
    "slug": "rajasthan-youth-entrepreneurship-msme-rajasthali-industrial-parks",
    "title": "Youth Self-Employment, Industry & Artisan Marketing: Yuva Swarozgar, RAJASTHALI & Industrial Clusters",
    "shortDefinition": "The industrial ecosystem and self-employment framework of Rajasthan, including interest-free credit under Mukhyamantri Yuva Swarozgar Yojana, handicraft marketing through RSIC's RAJASTHALI emporia, and specialized industrial clusters (Stone, Solar, Furniture, and Resource Recovery parks).",
    "difficulty": "INTERMEDIATE",
    "claims": [
      {
        "id": "CLM-RAJ-ECO-04-01",
        "statement": "The Mukhyamantri Yuva Swarozgar Yojana provides interest-free collateral-subsidized loans to eligible youth aged 18 to 35 years who are permanent residents of Rajasthan to establish or expand self-employment enterprises, implemented by the Industries and Commerce Department.",
        "claimType": "STATUTORY_RULE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Department of Industries and Commerce, GoR; Official Guidelines for Yuva Swarozgar",
        "excerpt": "The scheme offers interest-free financial assistance to permanent resident youth aged 18-35 years through the Industries and Commerce Department."
      },
      {
        "id": "CLM-RAJ-ECO-04-02",
        "statement": "The Rajasthan Small Industries Corporation Limited (RSIC) markets the handicraft and handloom products of state artisans through its official flagship brand outlets named 'RAJASTHALI' located in Jaipur, Udaipur, Delhi, and Kolkata.",
        "claimType": "HISTORICAL_FACT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Rajasthan Economic Review, Chapter 4: Industrial Development; RSIC Corporate Profile",
        "excerpt": "RSIC markets handicraft items of state artisans through 'RAJASTHALI' retail emporia in Jaipur, Udaipur, Delhi, and Kolkata."
      },
      {
        "id": "CLM-RAJ-ECO-04-03",
        "statement": "The Integrated Resource Recovery Park (electronic waste and hazardous material recycling) is established at Tholai (Jamwa Ramgarh, Jaipur), whereas Chittorgarh is renowned for cement manufacturing clusters and Kota for Stone Parks (Gundi-Fatehpur).",
        "claimType": "HISTORICAL_FACT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Rajasthan State Pollution Control Board (RSPCB) & RIICO Industrial Park Directories",
        "excerpt": "The first Integrated Resource Recovery Park was set up at Tholai in Jamwa Ramgarh tehsil of Jaipur district."
      },
      {
        "id": "CLM-RAJ-ECO-04-04",
        "statement": "Rajasthan's specialized industrial parks developed by RIICO include the Solar Panel Manufacturing Park at Kankani Industrial Area (Jodhpur), the Handicraft and Mega Furniture Park at Boranada (Jodhpur), and Stone Parks at Gundi-Fatehpur (Kota) and Mandore (Jodhpur).",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "RIICO (Rajasthan State Industrial Development and Investment Corporation) Annual Project Compendium",
        "excerpt": "RIICO has developed specialized clusters including Kankani for solar equipment and Boranada for handicrafts and furniture."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "From Raw Craftsmanship to Global Supply Chains",
        "body": "Imagine you are an artisan in Barmer carving exquisite sheesham wood furniture, or a young graduate in Sikar wanting to launch a solar installation enterprise. If commercial banks demand 14% interest and real-estate collateral you don't own, your enterprise dies in infancy. Even if you manage to produce fine lac bangles, blue pottery, or leather mojaris, where do you sell them if middleman traders take 70% of your retail margins?\n\nRajasthan addresses this through twin industrial conduits: Mukhyamantri Yuva Swarozgar provides interest-free seed capital directly to young entrepreneurs, while the state government's official retail corporation (RSIC) uses the 'RAJASTHALI' brand to sell authentic crafts at prime showrooms in Delhi, Kolkata, Jaipur, and Udaipur.",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "MSME Financing, RSIC Branding & RIICO Cluster Geography",
        "body": "Key institutional mechanisms driving industrial development in Rajasthan:\n\n1. Mukhyamantri Yuva Swarozgar Yojana:\n   - Eligibility: Permanent residents of Rajasthan aged between 18 and 35 years.\n   - Benefit: Interest-free loans (interest subvention provided by state government) to help youth establish new manufacturing or service units.\n   - Nodal Department: Department of Industries & Commerce, Government of Rajasthan.\n\n2. Rajasthan Small Industries Corporation Limited (RSIC):\n   - Established: 1961 to assist and promote MSMEs and artisans.\n   - Brand Identity: 'RAJASTHALI' outlets.\n   - Showroom Network: Flagship showrooms operate in Jaipur (M.I. Road), Udaipur (Chetak Circle), New Delhi (Baba Kharak Singh Marg), and Kolkata (Gariahat/Park Street).\n   - Trade Fair Presence: Rajasthan Pavilion at the annual India International Trade Fair (IITF, Pragati Maidan, New Delhi) regularly wins awards (including silver medals) for exhibiting rural artisans under national themes.\n\n3. Industrial Parks Mapping (RIICO):\n   - Integrated Resource Recovery Park: Located at Tholai, Jamwa Ramgarh (Jaipur) — built for scientific dismantling, recycling, and disposal of electronic waste and hazardous industrial scraps.\n   - Solar Panel Manufacturing Park: Kankani Industrial Area, Jodhpur.\n   - Handicraft & Furniture Park: Jodhpur (Boranada), capitalizing on Jodhpur's status as India's premier wooden furniture export hub.\n   - Stone Park: Gundi-Fatehpur (Kota), Vishwakarma (Jaipur), and Mandore (Jodhpur), supporting the processing of sandstone, limestone, and Kota stone.",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "The Industrial and Artisan Promotion Mechanism",
        "body": "How credit and marketing infrastructure support regional industry in Rajasthan:\n\n```\n+-------------------------------------------------------------------------+\n|               RAJASTHAN INDUSTRIAL & MSME PROMOTION ENGINE              |\n+-------------------------------------------------------------------------+\n\n   YOUTH ENTREPRENEURS (18-35 Yrs)         STATE ARTISANS & HANDICRAFTS\n             |                                          |\n             v                                          v\n [MUKHYAMANTRI YUVA SWAROZGAR]                 [RSIC 'RAJASTHALI' NETWORK]\n * Industries & Commerce Dept                   * Flagship Outlets:\n * 100% Interest-Free Loans                       Jaipur, Udaipur, Delhi, Kolkata\n * Expansion of MSME Projects                  * Global Exhibitions (IITF Pragati Maidan)\n             |                                          |\n             +--------------------+---------------------+ \n                                  |\n                                  v\n                 [RIICO SPECIALIZED INDUSTRIAL CLUSTERS]\n   +---------------------------------------------------------------------+\n   | PARK TYPE                           | LOCATION                      |\n   |-------------------------------------|-------------------------------|\n   | Integrated Resource Recovery Park   | Tholai (Jamwa Ramgarh, Jaipur)|\n   | Solar Panel Manufacturing Park      | Kankani Industrial Area (Jodhpur)|\n   | Handicraft & Furniture Park         | Boranada Industrial Hub (Jodhpur)|\n   | Stone Park                          | Gundi-Fatehpur (Kota) / Mandore|\n   +---------------------------------------------------------------------+\n```",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC Examination Traps: Questions 16, 53 & 57",
        "body": "How RPSC tested these concepts in the September 2026 Sub-Inspector Paper:\n\n1. Question 16 Analysis (NOT Matched Correctly - Industrial Parks):\n   - Integrated Resource Recovery Park — Chittorgarh (INCORRECT match, correct is Tholai, Jaipur).\n   - Solar Panel Mfg Park — Kankani, Jodhpur (Correct).\n   - Handicraft and Furniture Park — Jodhpur (Correct).\n   - Stone Park — Gundi-Fatehpur, Kota (Correct).\n   - Answer: Option (1) is the false pair.\n\n2. Question 53 Analysis (Mukhyamantri Yuva Swarozgar Yojana):\n   - Statement (a): Interest-free loans to eligible youth. (True).\n   - Statement (b): Age bracket 18 to 35 years permanent residents. (True).\n   - Statement (c): Implemented by Industries and Commerce Department. (True).\n   - Answer: (a), (b) and (c) all are correct.\n\n3. Question 57 Analysis (RSIC RAJASTHALI):\n   - Statement (a): RAJASTHALI outlets market handicrafts in Jaipur, Udaipur, Delhi, and Kolkata. (True).",
        "order": 4
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Mukhyamantri Yuva Swarozgar gives interest-free loans to youth aged 18-35 via Industries Dept. RSIC markets crafts through RAJASTHALI outlets in Jaipur, Udaipur, Delhi, Kolkata. Key RIICO Parks: Resource Recovery at Tholai (Jaipur), Solar Panel at Kankani (Jodhpur), Handicrafts at Jodhpur, Stone at Gundi-Fatehpur (Kota)."
      },
      {
        "type": "SUMMARY_2M",
        "content": "Rajasthan fosters youth entrepreneurship and traditional craftsmanship through targeted institutional vehicles. The Mukhyamantri Yuva Swarozgar Yojana delivers interest-free financing to youth aged 18-35 through the Industries & Commerce Department. Traditional artisans receive market access via RSIC's RAJASTHALI showrooms in Jaipur, Udaipur, New Delhi, and Kolkata. RIICO has developed specialized clusters: Tholai (Jaipur) for Integrated Resource Recovery, Kankani (Jodhpur) for Solar Panels, Boranada (Jodhpur) for Furniture, and Gundi-Fatehpur (Kota) for Stone."
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Industrial & Artisan Promotion Framework:\n1. Youth Financing: Mukhyamantri Yuva Swarozgar (18-35 age bracket, interest-free credit, Industries Department).\n2. Artisan Marketing: RSIC RAJASTHALI network spanning Jaipur, Udaipur, Delhi, and Kolkata, winning awards at IITF Pragati Maidan.\n3. RIICO Specialized Parks: Tholai (Resource Recovery/E-waste), Kankani (Solar panels), Boranada (Furniture), Gundi-Fatehpur (Stone processing)."
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "Which among the following pairs of specialized industrial parks in Rajasthan is NOT matched correctly with its designated location?",
        "options": [
          "Integrated Resource Recovery Park — Chittorgarh",
          "Solar Panel Manufacturing Park — Kankani Industrial Area, Jodhpur",
          "Handicraft and Furniture Park — Jodhpur",
          "Stone Park — Gundi-Fatehpur, Kota"
        ],
        "correctAnswer": "Integrated Resource Recovery Park — Chittorgarh",
        "explanation": "The Integrated Resource Recovery Park is established at Tholai in Jamwa Ramgarh tehsil of Jaipur district, NOT Chittorgarh. All other pairs are correctly matched.",
        "trapExplanation": "Candidates often associate Chittorgarh with heavy industry (cement and zinc) and fail to realize that the state's dedicated e-waste Resource Recovery Park is in Jaipur (Tholai).",
        "examinerTrapPattern": "Pairing a well-known industrial district (Chittorgarh) with a facility situated in a specialized rural tehsil of Jaipur."
      },
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "Consider the following statements regarding the Mukhyamantri Yuva Swarozgar Yojana of Rajasthan:\n(a) Under this scheme, the Rajasthan Government is offering interest-free loans to eligible youth to help them establish or expand entrepreneurial projects.\n(b) Permanent residents of Rajasthan between 18 and 35 years of age are eligible to apply for financial assistance under this scheme.\n(c) It is being implemented by the Industries and Commerce Department of Government of Rajasthan.\nWhich of the above statements are correct?",
        "options": [
          "(a), (b) and (c) all are correct",
          "(a) and (b) are correct",
          "(b) and (c) are correct",
          "(a) and (c) are correct"
        ],
        "correctAnswer": "(a), (b) and (c) all are correct",
        "explanation": "All three statements are factually correct. The scheme targets permanent resident youth aged 18-35, provides interest-free credit, and is managed directly by the Department of Industries and Commerce.",
        "trapExplanation": "Some candidates mistakenly believe the scheme is administered by the Department of Skill & Employment or that the age limit extends to 40 or 45 years.",
        "examinerTrapPattern": "Testing knowledge of the implementing nodal department and strict age brackets."
      },
      {
        "type": "APPLIED_SCENARIO",
        "difficulty": "HARD",
        "stem": "The Rajasthan Small Industries Corporation Limited (RSIC) markets the handicraft and handloom products of state artisans through designated 'RAJASTHALI' emporia. In which set of cities are these official emporia currently operational?",
        "options": [
          "Jaipur, Udaipur, Delhi and Kolkata",
          "Jaipur, Jodhpur, Mumbai and Ahmedabad",
          "Jaipur, Bikaner, Lucknow and Chennai",
          "Jaipur, Ajmer, Bhopal and Bengaluru"
        ],
        "correctAnswer": "Jaipur, Udaipur, Delhi and Kolkata",
        "explanation": "RSIC's official RAJASTHALI handicraft showrooms are located in Jaipur (M.I. Road), Udaipur (Chetak Circle), New Delhi (Baba Kharak Singh Marg), and Kolkata (Gariahat / Dakshinapan).",
        "trapExplanation": "Candidates often expect major metropolitan hubs like Mumbai or neighbouring Ahmedabad, missing the historic presence in Kolkata and New Delhi.",
        "examinerTrapPattern": "Testing exact geographic locations of state corporation retail outlets outside Rajasthan."
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Industrial Development & MSME Ecosystem of Rajasthan",
        "relevance": "VERY_HIGH",
        "priority": "HIGH",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Directly tested in RAS Prelims and Mains Paper I."
      },
      {
        "examCode": "RPSC_SUB_INSPECTOR",
        "syllabusUnit": "Industrial Development & Schemes of Rajasthan",
        "relevance": "VERY_HIGH",
        "priority": "HIGH",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Tested verbatim in 2026 SI Paper II Questions 16, 53, and 57."
      }
    ]
  },
  {
    "id": "CON-RAJ-ECO-05",
    "topicOrder": 1,
    "topicSlug": "rajasthan-economic-review-and-flagship-schemes",
    "topicTitle": "Rajasthan Economic Review, Public Finance, Flagship Welfare & Regional Development",
    "topicDescription": "Authoritative macroeconomic indicators, public finance structures, sectoral GSVA composition, price indices, social security pension architecture, maternal-child nutrition initiatives, MSME entrepreneurship, and ecological projects of Rajasthan.",
    "slug": "rajasthan-ecological-missions-rfbdp-afd-panch-gaurav-conservation",
    "title": "Ecological Forestry, Regional Identity & Wildlife: RFBDP-AFD Project, Panch Gaurav & Endangered Species",
    "shortDefinition": "The contemporary ecological forestry and cultural identity frameworks of Rajasthan, including the AFD-funded Rajasthan Forestry and Biodiversity Development Project (RFBDP), the district-level 'Panch Gaurav' identity framework, and specialized captive breeding centers for endangered avifauna (Kharmor and Godawan).",
    "difficulty": "INTERMEDIATE",
    "claims": [
      {
        "id": "CLM-RAJ-ECO-05-01",
        "statement": "The Rajasthan Forestry and Biodiversity Development Project (RFBDP) is an externally aided ecological initiative supported by the Agence Française de Développement (AFD) running from 2023-24 to 2029-30 across 23 districts of Rajasthan to enhance forest cover, biodiversity, and community agro-forestry.",
        "claimType": "HISTORICAL_FACT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Rajasthan Forest Department Annual Progress Report & Rajasthan Economic Review",
        "excerpt": "RFBDP is supported by Agence Francaise de Developpement spanning from 2023-24 to 2029-30 across 23 districts of Rajasthan."
      },
      {
        "id": "CLM-RAJ-ECO-05-02",
        "statement": "Under the 'Panch Gaurav' Programme launched in 2025-26, the Government of Rajasthan identified five signature elements for each district—Crop (उपज), Botanical Species (वनस्पति प्रजाति), Manufactured/Artisan Product (उत्पाद), Tourist Destination (पर्यटन स्थल), and Sport (खेल)—to drive localized economic branding and cultural heritage preservation.",
        "claimType": "STATUTORY_RULE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Planning Department, Government of Rajasthan; Panch Gaurav District Handbooks",
        "excerpt": "Panch Gaurav identifies five key elements per district: crop, flora, product, tourism site, and sport."
      },
      {
        "id": "CLM-RAJ-ECO-05-03",
        "statement": "Under the Panch Gaurav botanical species assignments, Ajmer is designated Neem, Barmer is designated Rohida, Baran is designated Chironji, Chittorgarh is designated Bilva Patra, Balotra is designated Khejri, and Jaisalmer is designated Jaal.",
        "claimType": "STATUTORY_RULE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Planning Department District Classification Compendium 2025-26, GoR",
        "excerpt": "Botanical allocations designate Rohida for Barmer, Chironji for Baran, Bilva Patra for Chittorgarh, and Neem for Ajmer."
      },
      {
        "id": "CLM-RAJ-ECO-05-04",
        "statement": "Rajasthan has established specialized captive breeding centers for critically endangered avifauna, including the breeding center for the Lesser Florican (Kharmor / Sypheotides indicus) at Arwar in Ajmer district, and the Great Indian Bustard (Godawan) captive breeding facilities at Sam and Ramdevra in Jaisalmer.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Wildlife Institute of India (WII) & Rajasthan Forest Department Wildlife Wing Reports",
        "excerpt": "A dedicated breeding centre for the conservation of Lesser Florican (Kharmor) was established at Arwar of Ajmer district."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "From Aravalli Afforestation to Micro-District Branding",
        "body": "Imagine looking at Rajasthan's vast map. To an outsider, it may seem like a uniform expanse of sand dunes and rocky ridges. But an administrator sees immense micro-diversity: Balotra grows pomegranates and weaves textiles around the ancient Nakoda Jain temple, Jaisalmer harvests dates from desert oases alongside yellow sandstone quarries, Baran harvests wild forest Chironji seeds, and the grasslands of Ajmer shelter the world's most threatened grassland birds like the Lesser Florican.\n\nRajasthan's ecological and regional policy harmonizes international multilateral conservation with grassroots identity. Through the French-funded RFBDP project, 23 districts receive systematic afforestation funding, while the innovative 'Panch Gaurav' program equips every district collector with a five-point branding mandate to champion local farmers, indigenous trees, traditional craftsmen, and rural athletes.",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "The RFBDP-AFD Architecture & The Panch Gaurav Matrix",
        "body": "Deep dive into Rajasthan's ecological and regional branding frameworks:\n\n1. Rajasthan Forestry & Biodiversity Development Project (RFBDP):\n   - External Funding Agency: Agence Française de Développement (AFD, France).\n   - Implementation Period: 8-year span from fiscal year 2023-24 to 2029-30.\n   - Geographic Coverage: 23 districts across the state.\n   - Core Components:\n     * Afforestation and restoration of degraded Aravalli and desert forest patches.\n     * Eco-tourism infrastructure development in sanctuaries and wetland habitats.\n     * Livelihood generation for forest-dwelling tribal communities through Van Dhan Vikas Kendras.\n\n2. The Panch Gaurav Framework (District Identity Triad):\n   - Launched: Fiscal Year 2025-26 by the Planning Department.\n   - Five Pillars per District:\n     * Crop (उपज): Promoting local agro-climatic specialty crops.\n     * Botanical Species (वनस्पति प्रजाति): Re-establishing native tree cover.\n     * Local Product (उत्पाद): Linking with One District One Product (ODOP).\n     * Tourist Destination (पर्यटन स्थल): Dispersing tourism beyond Jaipur/Udaipur.\n     * Sport (खेल): Reviving grassroots traditional sports.\n   - High-Yield District Combinations:\n     * Balotra: Crop: Pomegranate | Flora: Khejri | Product: Textile Products | Tourism: Nakoda Jain Temple | Sport: Basketball.\n     * Jaisalmer: Crop: Dates (Khajoor) | Flora: Jaal | Product: Yellow Stone Products | Tourism: Jaisalmer Fort | Sport: Gymnastics.\n     * Bharatpur: Crop: Mustard | Flora: Kadamba | Product: Agri-based products | Tourism: Keoladeo National Park | Sport: Kabaddi.\n     * Dausa: Crop: Fennel (Saunf) | Flora: Neem | Product: Stone products | Tourism: Mehandipur Balaji Temple | Sport: Hockey.\n\n3. Avian Conservation Centers:\n   - Lesser Florican (Kharmor / खरमोर): Dedicated breeding centre established at Arwar (Ajmer district).\n   - Great Indian Bustard (Godawan / गोडावण): State Bird of Rajasthan; captive breeding project operated with WII at Sam (Jaisalmer).",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "The Ecological and Regional Identity Ecosystem",
        "body": "The institutional architecture of forestry projects and district branding in Rajasthan:\n\n```\n+-------------------------------------------------------------------------+\n|          RAJASTHAN FORESTRY, BIODIVERSITY & PANCH GAURAV ENGINE         |\n+-------------------------------------------------------------------------+\n\n   INTERNATIONAL FORESTRY AID               DISTRICT-LEVEL IDENTITY BRANDING\n             |                                             |\n             v                                             v\n   [RFBDP PROJECT (2023-2030)]                    [PANCH GAURAV PROGRAMME (2025-26)]\n   * Funded by: AFD (France)                      Every District Assigned 5 Pillars:\n   * Implemented in: 23 Districts                 1. Crop (Pomegranate, Dates, Mustard)\n   * Mission: Aravalli Reforestation              2. Botanical Flora (Rohida, Neem, Jaal)\n     & Eco-Tourism Infrastructure                 3. Industrial/Craft Product (Stone, Cloth)\n             |                                    4. Tourist Site (Nakoda, Keoladeo)\n             |                                    5. Sport (Basketball, Kabaddi, Hockey)\n             v\n   [CRITICAL AVIAN CONSERVATION SITES]\n   +---------------------------------------------------------------------+\n   | SPECIES                             | CONSERVATION CENTER           |\n   |-------------------------------------|-------------------------------|\n   | Lesser Florican (Kharmor)           | Arwar (Ajmer District)        |\n   | Great Indian Bustard (Godawan)      | Sam & Ramdevra (Jaisalmer)    |\n   +---------------------------------------------------------------------+\n```",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC Examination Traps: Questions 25, 59, 65 & 67",
        "body": "How RPSC tested these concepts in the September 2026 Sub-Inspector Paper:\n\n1. Question 25 Analysis (RFBDP Project):\n   - Statement (A): Initiative supported by Agence Francaise de Developpement. (True).\n   - Statement (B): Spanning from 2023-24 to 2029-30. (True).\n   - Statement (C): Implemented across 23 districts of Rajasthan. (True).\n   - Answer: (A), (B) and (C) all are correct.\n\n2. Question 65 Analysis (Avian Breeding Center):\n   - Breeding centre for conservation at Arwar of Ajmer district: Lesser Florican (Kharmor). Option (2).\n\n3. Question 67 Analysis (Panch Gaurav Botanical Species Matching):\n   - Ajmer $\\to$ Neem (ii)\n   - Barmer $\\to$ Rohida (i)\n   - Baran $\\to$ Chironji (iii)\n   - Chittorgarh $\\to$ Bilva Patra (iv)\n   - Answer: (A)-(ii), (B)-(i), (C)-(iii), (D)-(iv).\n\n4. Question 59 Analysis (Panch Gaurav District Combination):\n   - Balotra: Pomegranate, Khejri, Textile products, Nakoda Jain Temple, Basketball. Option (1) is the correct complete combination.",
        "order": 4
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "RFBDP forestry project is funded by France's AFD (2023-24 to 2029-30) across 23 districts. Panch Gaurav assigns 5 pillars per district: Crop, Flora, Product, Tourism, Sport (e.g. Balotra: Pomegranate/Khejri/Textiles/Nakoda/Basketball). Endangered bird breeding: Kharmor at Arwar (Ajmer), Godawan at Sam (Jaisalmer)!"
      },
      {
        "type": "SUMMARY_2M",
        "content": "Rajasthan's environmental and regional planning combines external multilateral assistance with hyper-local heritage branding. The Rajasthan Forestry and Biodiversity Development Project (RFBDP), backed by France's AFD, covers 23 districts from 2023-24 to 2029-30. The Panch Gaurav framework establishes five distinct identity pillars for each district. In wildlife conservation, the state operates a specialized captive breeding center for the Lesser Florican (Kharmor) at Arwar in Ajmer, complementing Great Indian Bustard (Godawan) conservation centers in Jaisalmer."
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Forestry, Biodiversity & Regional Framework:\n1. RFBDP Project: AFD France funded, 2023-24 to 2029-30 duration, implemented across 23 districts.\n2. Panch Gaurav Matrix: Five pillars per district (Crop, Flora, Product, Tourism, Sport) creating standardized district branding.\n3. Conservation Centers: Arwar (Ajmer) for Lesser Florican (Kharmor); Sam/Ramdevra (Jaisalmer) for Godawan."
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "Which among the following facts is/are correct about the Rajasthan Forestry and Biodiversity Development Project (RFBDP)?\n(A) This project is an initiative supported by the Agence Francaise de Developpement.\n(B) The spanning of this project is from 2023-24 to 2029-30.\n(C) This project is being implemented across 23 districts of Rajasthan.\nSelect the correct answer using the code given below:",
        "options": [
          "(A), (B) and (C) all are correct",
          "Only (A) and (C) are correct",
          "Only (B) is correct",
          "Only (A) is correct"
        ],
        "correctAnswer": "(A), (B) and (C) all are correct",
        "explanation": "All three statements are factually accurate. RFBDP is co-financed by the French development agency AFD, runs for 8 years (2023-24 to 2029-30), and spans 23 districts across Rajasthan.",
        "trapExplanation": "Candidates often confuse the funding partner with the Japan International Cooperation Agency (JICA, which funded earlier phases) or assume the project covers all 33 or 50 districts.",
        "examinerTrapPattern": "Verifying the external bilateral funding agency (AFD vs JICA vs World Bank) and district coverage count."
      },
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "A dedicated breeding centre for the conservation of which endangered avian species has been established at Arwar in Ajmer district of Rajasthan?",
        "options": [
          "Lesser Florican (Kharmor)",
          "Great Indian Bustard (Godawan)",
          "Demoiselle Crane (Kurja)",
          "Black Drongo (Kotwal)"
        ],
        "correctAnswer": "Lesser Florican (Kharmor)",
        "explanation": "A specialized captive breeding and conservation facility for the Lesser Florican (Kharmor / Sypheotides indicus) has been set up at Arwar in Ajmer district to halt the steep population decline of this critically endangered grassland bird.",
        "trapExplanation": "The Great Indian Bustard (Godawan) has its breeding center at Sam and Ramdevra in Jaisalmer, NOT Ajmer (B). Kurja is a migratory winter visitor to Kichan (Phalodi), not a captive breeding subject (C).",
        "examinerTrapPattern": "Confusing the Lesser Florican (Kharmor in Ajmer) with the Great Indian Bustard (Godawan in Jaisalmer)."
      },
      {
        "type": "APPLIED_SCENARIO",
        "difficulty": "HARD",
        "stem": "Under the 'Panch Gaurav' Programme launched by the Government of Rajasthan, select the correctly matched complete combination of five key elements identified for Balotra district:",
        "options": [
          "Crop: Pomegranate | Botanical Species: Khejri | Product: Textile products | Tourist Destination: Nakoda Jain Temple | Sport: Basketball",
          "Crop: Dates | Botanical Species: Jaal | Product: Yellow stone products | Tourist Destination: Jaisalmer Fort | Sport: Gymnastics",
          "Crop: Mustard | Botanical Species: Kadamba | Product: Agriculture-based products | Tourist Destination: Keoladeo National Park | Sport: Kabaddi",
          "Crop: Fennel | Botanical Species: Neem | Product: Stone products | Tourist Destination: Mehandipur Balaji Temple | Sport: Hockey"
        ],
        "correctAnswer": "Crop: Pomegranate | Botanical Species: Khejri | Product: Textile products | Tourist Destination: Nakoda Jain Temple | Sport: Basketball",
        "explanation": "Option (1) represents the exact official Panch Gaurav combination for Balotra district. Option (2) corresponds to Jaisalmer, Option (3) corresponds to Bharatpur, and Option (4) corresponds to Dausa.",
        "trapExplanation": "Each distractor represents another real district in Rajasthan (Jaisalmer, Bharatpur, Dausa). Only Option 1 maps precisely to Balotra.",
        "examinerTrapPattern": "Testing fine multi-variable matching across district agrarian crops, craft products, temples, and sports."
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Geography, Environment & Ecological Missions of Rajasthan",
        "relevance": "VERY_HIGH",
        "priority": "HIGH",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Tested in RAS Prelims and Mains Paper I & II."
      },
      {
        "examCode": "RPSC_SUB_INSPECTOR",
        "syllabusUnit": "Environmental Forestry Projects & District Schemes",
        "relevance": "VERY_HIGH",
        "priority": "HIGH",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Tested verbatim in 2026 SI Paper II Questions 25, 59, 65, and 67."
      }
    ]
  }
];

export async function seedRajasthanEcoSchemes(): Promise<void> {
  console.log('[Batch R-ECO] Seeding Rajasthan Economic Review & Flagship Welfare Schemes...');

  // 1. Ensure Domain Exists (rajasthan-studies)
  const domain = await db.domain.upsert({
    where: { slug: 'rajasthan-studies' },
    update: {
      name: 'Rajasthan Studies & Regional Heritage',
      description: 'Comprehensive historical, cultural, linguistic, geographical, and economic knowledge base for Rajasthan state civil services examinations.',
    },
    create: {
      slug: 'rajasthan-studies',
      name: 'Rajasthan Studies & Regional Heritage',
      description: 'Comprehensive historical, cultural, linguistic, geographical, and economic knowledge base for Rajasthan state civil services examinations.',
      order: 7,
    },
  });

  // 2. Ensure Subject Exists
  let subject = await db.subject.findFirst({ where: { slug: 'rajasthan-economy-and-flagship-schemes' } });
  if (!subject) {
    subject = await db.subject.create({
      data: {
        slug: 'rajasthan-economy-and-flagship-schemes',
        name: 'Rajasthan Economy, Economic Review & Flagship Welfare Schemes',
        description: 'First-principles synthesis of Rajasthan macroeconomic aggregates, GSDP, GSVA sectoral distribution, price statistics, social security pensions, nutrition missions, industrial parks, and environmental schemes.',
        scopeStatement: 'Comprehensive syllabus synthesis derived from the official Rajasthan Economic Review, DES reports, Budget announcements, and RPSC RAS/SI examination blueprints.',
        domainId: domain.id,
        order: 3,
      },
    });
  }

  // 3. Ensure Canonical Source Exists
  const sourceEco = await db.source.upsert({
    where: { id: 'SRC-RAJASTHAN-ECONOMIC-REVIEW' },
    update: {},
    create: {
      id: 'SRC-RAJASTHAN-ECONOMIC-REVIEW',
      title: 'Rajasthan Economic Review & Flagship Government Schemes Compendium (DES, GoR)',
      sourceType: 'PRIMARY_REGULATORY_TEXT',
      authorityTier: 'PRIMARY_REGULATORY_TEXT',
      description: 'Official annual economic review, budget documents, and policy notifications published by the Directorate of Economics and Statistics and Planning Department, Government of Rajasthan.',
    },
  });

  // 4. Ensure Topic Exists
  let topic = await db.topic.findFirst({
    where: {
      subjectId: subject.id,
      slug: 'rajasthan-economic-review-and-flagship-schemes',
    },
  });

  if (!topic) {
    topic = await db.topic.create({
      data: {
        slug: 'rajasthan-economic-review-and-flagship-schemes',
        title: 'Rajasthan Economic Review, Public Finance, Flagship Welfare & Regional Development',
        description: 'Authoritative macroeconomic indicators, public finance structures, sectoral GSVA composition, price indices, social security pension architecture, maternal-child nutrition initiatives, MSME entrepreneurship, and ecological projects of Rajasthan.',
        subjectId: subject.id,
        order: 1,
      },
    });
  }

  const examSlugMap: Record<string, string> = {
    RPSC_RAS: 'rpsc-ras',
    RPSC_SUB_INSPECTOR: 'rpsc-sub-inspector',
  };

  // 5. Upsert Concepts, Claims, Blocks, Revision Units, Questions, and Exam Mappings
  for (let i = 0; i < RAJASTHAN_ECO_SCHEMES_CONCEPTS.length; i++) {
    const cDef = RAJASTHAN_ECO_SCHEMES_CONCEPTS[i];
    let concept = await db.concept.findUnique({ where: { id: cDef.id } });

    if (concept) {
      await db.claim.deleteMany({ where: { conceptId: concept.id } });
      await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
      await db.examConceptMapping.deleteMany({ where: { conceptId: concept.id } });
      await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
      await db.question.deleteMany({ where: { conceptId: concept.id } });

      concept = await db.concept.update({
        where: { id: cDef.id },
        data: {
          title: cDef.title,
          slug: cDef.slug,
          shortDefinition: cDef.shortDefinition,
          difficulty: cDef.difficulty,
          topicId: topic.id,
          order: i + 1,
        },
      });
    } else {
      concept = await db.concept.create({
        data: {
          id: cDef.id,
          title: cDef.title,
          slug: cDef.slug,
          shortDefinition: cDef.shortDefinition,
          difficulty: cDef.difficulty,
          topicId: topic.id,
          order: i + 1,
        },
      });
    }

    for (const cl of cDef.claims) {
      const claim = await db.claim.create({
        data: {
          id: cl.id,
          conceptId: concept.id,
          statement: cl.statement,
          claimType: cl.claimType,
          epistemicLevel: cl.epistemicLevel,
          confidence: cl.confidence,
          status: 'VERIFIED',
        },
      });

      await db.evidence.create({
        data: {
          claimId: claim.id,
          sourceId: sourceEco.id,
          locator: cl.locator,
          excerpt: cl.excerpt,
          evidenceType: 'EXCERPT',
          authority: 'PRIMARY_REGULATORY_TEXT',
          evidentiarySupport: 'DIRECT_SUPPORT',
          extractionConfidence: 'CERTAIN',
        },
      });
    }

    for (let bIdx = 0; bIdx < cDef.contentBlocks.length; bIdx++) {
      const cb = cDef.contentBlocks[bIdx];
      await db.contentBlock.create({
        data: {
          conceptId: concept.id,
          type: cb.type,
          title: cb.title,
          body: cb.body,
          order: cb.order || bIdx + 1,
          visibility: 'CANONICAL_FULL',
        },
      });
    }

    for (let rIdx = 0; rIdx < cDef.revisionUnits.length; rIdx++) {
      const ru = cDef.revisionUnits[rIdx];
      await db.revisionUnit.create({
        data: {
          conceptId: concept.id,
          type: ru.type,
          content: ru.content,
          order: rIdx + 1,
        },
      });
    }

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
          isPYQ: true,
          pyqYear: 2026,
          pyqPaper: 'RPSC Sub Inspector Paper II (GK & GS)',
          examinerTrapPattern: q.examinerTrapPattern,
        },
      });
    }

    for (const em of cDef.examMappings) {
      const slug = examSlugMap[em.examCode] || em.examCode.toLowerCase().replace(/_/g, '-');
      const exam = await db.exam.upsert({
        where: { slug },
        update: {},
        create: {
          slug,
          name: em.examCode.replace(/_/g, ' '),
          conductingBody: 'RPSC',
          description: `Competitive examination for ${em.examCode}`,
          syllabusSummary: `Syllabus for ${em.examCode}`,
        },
      });

      await db.examConceptMapping.upsert({
        where: {
          examId_conceptId: {
            examId: exam.id,
            conceptId: concept.id,
          },
        },
        update: {
          syllabusUnit: em.syllabusUnit,
          relevance: em.relevance as any,
          priority: em.priority as any,
          requiredDepth: em.requiredDepth as any,
          notes: em.notes,
        },
        create: {
          examId: exam.id,
          conceptId: concept.id,
          syllabusUnit: em.syllabusUnit,
          relevance: em.relevance as any,
          priority: em.priority as any,
          requiredDepth: em.requiredDepth as any,
          notes: em.notes,
        },
      });
    }
  }

  console.log('[Batch R-ECO] Successfully seeded ' + RAJASTHAN_ECO_SCHEMES_CONCEPTS.length + ' Rajasthan Economic Review & Schemes Canonical Concepts.');
}
