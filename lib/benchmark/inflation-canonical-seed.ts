import { db } from '../db/client';

export interface InflationConceptDefinition {
  id: string;
  slug: string;
  title: string;
  shortDefinition: string;
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  semanticUnitIds: string[];
  economicSphere: {
    macroeconomicDomain: string;
    primaryVariables: string[];
    institutionalActor: string;
    examTrap: string;
  };
  claims: Array<{
    id: string;
    statement: string;
    claimType: string;
    epistemicLevel: 'ESTABLISHED_FACT' | 'INTERPRETATION' | 'INFERENCE';
    confidence: 'HIGH' | 'MEDIUM' | 'DEBATED';
    temporalStatus: 'STRUCTURAL' | 'CURRENT' | 'TIME_SENSITIVE' | 'HISTORICAL';
    scopeConditions?: string;
    evidenceLocator: string;
    verbatimQuote?: string;
  }>;
  contentBlocks: Array<{
    type: string;
    title?: string;
    body: string;
    order: number;
    visibility: 'STANDARD' | 'DEEP_DIVE' | 'ADVANCED_REFERENCE';
  }>;
  examMappings: Array<{
    examCode: 'UPSC_CSE' | 'RPSC_RAS' | 'IIBF_DBF';
    examName: string;
    relevance: 'CORE_HIGH_YIELD' | 'SECONDARY' | 'BACKGROUND';
    weightage: 'HIGH' | 'MEDIUM' | 'LOW';
    syllabusSection: string;
    prelimsFocus: string;
    mainsFocus: string;
    examNotes: string;
  }>;
  revisionUnits: Array<{
    tier: 'FLASH_30S' | 'SUMMARY_2M' | 'ARCHITECTURE_5M';
    timeBudgetSeconds: number;
    summary: string;
    keyTakeaways: string[];
    order: number;
  }>;
  questions: Array<{
    stem: string;
    type: 'CONCEPTUAL' | 'APPLICATION' | 'ANALYTICAL';
    difficulty: 'EASY' | 'MEDIUM' | 'HARD';
    explanation: string;
    options: Array<{
      text: string;
      isCorrect: boolean;
      distractorExplanation?: string;
    }>;
  }>;
}

export const INFLATION_SOURCE_SEMANTIC_UNITS = [
  {
    semanticUnitId: 'SEM-ECON-INF-01',
    pdfPage: 1,
    printedPage: 1,
    localHeading: 'Definition of Inflation — Sustained Generalized Price Level Rise',
    contentType: 'DEFINITION',
    shortDescription: 'Inflation is a sustained, generalized increase in the aggregate price level of goods and services over time, resulting in a persistent decline in the purchasing power of money.',
  },
  {
    semanticUnitId: 'SEM-ECON-INF-02',
    pdfPage: 2,
    printedPage: 2,
    localHeading: 'Typology by Speed / Magnitude (Creeping, Walking, Running, Hyperinflation)',
    contentType: 'CONCEPT',
    shortDescription: 'Classification by rate: Creeping (1–3%), Walking (3–7%), Running (10–20%), Galloping/Hyperinflation (>50% per month with breakdown of monetary trust).',
  },
  {
    semanticUnitId: 'SEM-ECON-INF-03',
    pdfPage: 3,
    printedPage: 3,
    localHeading: 'Related Terminologies (Disinflation vs Deflation vs Reflation vs Stagflation vs Skewflation)',
    contentType: 'COMPARISON',
    shortDescription: 'Disinflation is a slowdown in the rate of price increase; Deflation is an absolute drop in price level; Stagflation combines high inflation with stagnant growth; Skewflation is sector-concentrated price rise.',
  },
  {
    semanticUnitId: 'SEM-ECON-INF-04',
    pdfPage: 4,
    printedPage: 4,
    localHeading: 'Real vs Nominal Variables & Fisher Equation',
    contentType: 'LEGAL_RULE',
    shortDescription: 'Nominal values reflect current prices; Real values adjust for inflation. The Fisher approximation states Real Interest Rate = Nominal Interest Rate - Expected Inflation (r ≈ i - π).',
  },
  {
    semanticUnitId: 'SEM-ECON-INF-05',
    pdfPage: 5,
    printedPage: 5,
    localHeading: 'Consumer Price Index (CPI-Combined) in India',
    contentType: 'FACT',
    shortDescription: 'CPI-Combined (Base 2012) published monthly by NSO (MoSPI). Measures retail basket; highest weightage is Food & Beverages (45.86%); serves as official monetary policy anchor.',
  },
  {
    semanticUnitId: 'SEM-ECON-INF-06',
    pdfPage: 6,
    printedPage: 6,
    localHeading: 'Wholesale Price Index (WPI) in India',
    contentType: 'FACT',
    shortDescription: 'WPI (Base 2011-12) published monthly by DPIIT (Ministry of Commerce). Measures wholesale transactions; Manufactured Products (64.23%), Primary Articles (22.62%), Fuel & Power (13.15%); excludes services entirely.',
  },
  {
    semanticUnitId: 'SEM-ECON-INF-07',
    pdfPage: 7,
    printedPage: 7,
    localHeading: 'Headline Inflation vs Core Inflation',
    contentType: 'COMPARISON',
    shortDescription: 'Headline inflation measures total CPI index changes; Core inflation strips out volatile Food and Fuel components to capture underlying persistent demand pressures.',
  },
  {
    semanticUnitId: 'SEM-ECON-INF-08',
    pdfPage: 8,
    printedPage: 8,
    localHeading: 'Demand-Pull Inflation Causal Mechanism',
    contentType: 'CONCEPT',
    shortDescription: 'Occurs when Aggregate Demand exceeds Aggregate Supply (AD > AS) at full employment ("too much money chasing too few goods"), driven by fiscal deficit, credit expansion, or consumption surges.',
  },
  {
    semanticUnitId: 'SEM-ECON-INF-09',
    pdfPage: 9,
    printedPage: 9,
    localHeading: 'Cost-Push Inflation Causal Mechanism',
    contentType: 'CONCEPT',
    shortDescription: 'Driven by supply-side disruptions, raw material cost surges, energy price spikes, or wage increases that shift the Short-Run Aggregate Supply (SRAS) curve upward/leftward.',
  },
  {
    semanticUnitId: 'SEM-ECON-INF-10',
    pdfPage: 10,
    printedPage: 10,
    localHeading: 'Imported Inflation & Exchange Rate Pass-Through',
    contentType: 'CONCEPT',
    shortDescription: 'Transmission of global commodity price surges (especially crude oil, edible oils, fertilizers) into domestic prices, exacerbated by domestic currency depreciation.',
  },
  {
    semanticUnitId: 'SEM-ECON-INF-11',
    pdfPage: 11,
    printedPage: 11,
    localHeading: 'Structural & Bottleneck Inflation in India',
    contentType: 'CONCEPT',
    shortDescription: 'Inelastic agricultural supply, cold storage deficits, cartelization in APMC mandis, and seasonal monsoon vagaries causing recurring episodic spikes in perishables (e.g. TOP vegetables).',
  },
  {
    semanticUnitId: 'SEM-ECON-INF-12',
    pdfPage: 12,
    printedPage: 12,
    localHeading: 'Distributional Impacts & Socio-Economic Consequences',
    contentType: 'COMPARISON_TABLE',
    shortDescription: 'Inflation acts as a regressive tax on the poor; Debtors gain while Creditors lose; Fixed-income earners lose; Equity/Asset holders hedge; Disincentivizes long-term productive investment.',
  },
  {
    semanticUnitId: 'SEM-ECON-INF-13',
    pdfPage: 13,
    printedPage: 13,
    localHeading: 'Inflation-Growth Trade-off & The Phillips Curve',
    contentType: 'JUDICIAL_DOCTRINE',
    shortDescription: 'Short-run inverse relationship between inflation and unemployment (Phillips Curve); in the long run, the curve is vertical at NAIRU / potential output; high inflation impairs long-run growth.',
  },
  {
    semanticUnitId: 'SEM-ECON-INF-14',
    pdfPage: 14,
    printedPage: 14,
    localHeading: 'Monetary Policy & Flexible Inflation Targeting (FIT) in India',
    contentType: 'FACT',
    shortDescription: 'Adopted in 2016 per Urjit Patel Committee; RBI Act Section 45ZA mandates CPI inflation target of 4% with a ±2% tolerance band (2% to 6%); 6-member Monetary Policy Committee (MPC).',
  },
  {
    semanticUnitId: 'SEM-ECON-INF-15',
    pdfPage: 15,
    printedPage: 15,
    localHeading: 'Fiscal & Supply-Side Administrative Management',
    contentType: 'FACT',
    shortDescription: 'Government interventions: Open Market Sales Scheme (OMSS), buffer stock releases (FCI), export restrictions/tariffs on essentials, import duty cuts, and PM Gati Shakti logistics upgrades.',
  },
];

export const INFLATION_CANONICAL_CONCEPTS: InflationConceptDefinition[] = [
  // 1. Definition, Measurement & Distinctions
  {
    id: 'CON-ECON-INF-01',
    slug: 'inflation-definition-distinctions-real-nominal',
    title: 'Core Concept of Inflation, Terminological Distinctions & Real vs Nominal Values',
    shortDefinition:
      'Inflation is a sustained, generalized rise in an economy\'s aggregate price level that erodes the purchasing power of money. It must be rigorously distinguished from episodic price spikes in isolated goods, and contrasted with disinflation, deflation, reflation, and stagflation.',
    difficulty: 'BEGINNER',
    semanticUnitIds: ['SEM-ECON-INF-01', 'SEM-ECON-INF-02', 'SEM-ECON-INF-03', 'SEM-ECON-INF-04'],
    economicSphere: {
      macroeconomicDomain: 'Macroeconomic Aggregates & Price Theory',
      primaryVariables: ['Aggregate Price Level (P)', 'Purchasing Power of Money', 'Nominal vs Real Interest Rates'],
      institutionalActor: 'Statistical Agencies (NSO/MoSPI) & Central Bank (RBI)',
      examTrap: 'Confusing Disinflation with Deflation. Disinflation is prices rising at a slower rate (inflation rate is positive but falling). Deflation is prices actually falling (inflation rate is negative).',
    },
    claims: [
      {
        id: 'CLM-ECON-INF-01.1',
        statement: 'Inflation is defined as a persistent and generalized increase in the aggregate price level of goods and services across an economy over time, which simultaneously reduces the purchasing power of a unit of currency.',
        claimType: 'DEFINITION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        temporalStatus: 'STRUCTURAL',
        evidenceLocator: 'Treatise on Indian Economy (2026), Chapter 4, p. 1',
        verbatimQuote: 'Inflation represents a sustained, generalized increase in the overall price level, rather than a transient rise in the price of a single commodity.',
      },
      {
        id: 'CLM-ECON-INF-01.2',
        statement: 'Disinflation represents a deceleration in the rate of inflation (prices are still rising, but at a slower pace), whereas Deflation represents a persistent absolute decrease in the aggregate price level (negative inflation rate).',
        claimType: 'COMPARISON',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        temporalStatus: 'STRUCTURAL',
        evidenceLocator: 'Treatise on Indian Economy (2026), Chapter 4, p. 3',
      },
      {
        id: 'CLM-ECON-INF-01.3',
        statement: 'Stagflation is a macroeconomic condition characterized by stagnant economic growth, high unemployment, and persistently high inflation, breaking the traditional short-run Phillips curve relationship.',
        claimType: 'CONCEPT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        temporalStatus: 'STRUCTURAL',
        evidenceLocator: 'Treatise on Indian Economy (2026), Chapter 4, p. 3',
      },
      {
        id: 'CLM-ECON-INF-01.4',
        statement: 'Under the Fisher approximation, the Real Interest Rate is calculated as the Nominal Interest Rate minus the Expected Rate of Inflation: r ≈ i - π. When inflation exceeds the nominal rate, real interest rates turn negative.',
        claimType: 'LEGAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        temporalStatus: 'STRUCTURAL',
        evidenceLocator: 'Treatise on Indian Economy (2026), Chapter 4, p. 4',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'What Inflation Actually Means in Plain Terms',
        body: 'Imagine your wallet contains ₹100. If an apple costs ₹10 today, your ₹100 buys 10 apples. If generalized inflation is 10% over the year, that same apple costs ₹11 next year, meaning your ₹100 now only buys ~9 apples.\n\n*Crucial Point*: Inflation does not mean one specific product became expensive due to a bad harvest. It means the entire average price level across a broad basket of goods and services rose, diminishing the real buying power of money.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'COMPARISON',
        title: 'The Core Inflation Terminological Matrix',
        body: '| Economic Term | Price Level Direction | Inflation Rate Value | Real Economic Meaning |\n| :--- | :---: | :---: | :--- |\n| **Inflation** | Rising ($\\uparrow$) | Positive ($\\pi > 0$) | General purchasing power is declining |\n| **Disinflation** | Rising at a slower rate ($\\uparrow$) | Positive but falling ($0 < \\pi_t < \\pi_{t-1}$) | Inflation is cooling down (e.g. falling from 7% to 4%) |\n| **Deflation** | Falling ($\\downarrow$) | Negative ($\\pi < 0$) | General price level is contracting; consumers postpone spending |\n| **Reflation** | Rising intentionally ($\\uparrow$) | Rising after a slump | Deliberate monetary/fiscal stimulus to revive depressed output |\n| **Stagflation** | Rising ($\\uparrow$) | Persistently High | Economic stagnation/recession coupled with high inflation |\n| **Skewflation** | Skewed rise in isolated sectors | High in specific basket | Episodic inflation concentrated in 1–2 sectors (e.g. onion/tomato shock) |',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Nominal vs Real Dynamics (The Fisher Equation)',
        body: 'When lenders lend money or savers deposit in banks, they receive a **Nominal Interest Rate ($i$)**.\nHowever, what matters for living standards is **Real Purchasing Power ($r$)**.\n\n$$\\text{Real Interest Rate } (r) \\approx \\text{Nominal Rate } (i) - \\text{Inflation Rate } (\\pi)$$\n\n*Worked Example*:\n• If your Fixed Deposit offers $i = 6.5\\%$ nominal interest,\n• And CPI inflation is $\\pi = 7.0\\%$,\n• Your **Real Return is $r = 6.5\\% - 7.0\\% = -0.5\\%$ (Negative real return)**.\n• You are effectively losing purchasing power despite nominal earnings.',
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
        syllabusSection: 'GS Paper III: Macroeconomics, Inflation concepts, Trends, Real vs Nominal variables.',
        prelimsFocus: 'Distinction between Disinflation, Deflation, and Stagflation; Calculation of Real Interest Rates; Concept of Skewflation.',
        mainsFocus: 'Macroeconomic instability caused by sustained inflation; Impact on household savings and financialization of assets.',
        examNotes: 'UPSC frequently tests the exact meaning of Disinflation vs Deflation in statement-based questions.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper I (Unit II - Economics): Inflation, Basic Concepts & Terminology.',
        prelimsFocus: 'Direct definitions (Creeping vs Hyperinflation, Stagflation, Fisher relation).',
        mainsFocus: 'Short 20-word definitions of Disinflation and Stagflation; 50-word explanations of real vs nominal returns.',
        examNotes: 'High-frequency 2-mark definitions in RPSC Mains Paper I.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Principles & Practices of Banking: Macroeconomics, Real Interest Rates, Money Supply.',
        prelimsFocus: 'Impact of negative real interest rates on bank deposit mobilization and asset-liability management (ALM).',
        mainsFocus: 'N/A (Objective format).',
        examNotes: 'Critical for understanding deposit flight from bank FDs to physical assets (gold, real estate) during high inflation.',
      },
    ],
    revisionUnits: [
      {
        tier: 'FLASH_30S',
        timeBudgetSeconds: 30,
        summary: 'Inflation Core Concepts Rapid Pegs:\n• Inflation = Sustained rise in aggregate price level (erodes money purchasing power).\n• Disinflation vs Deflation: Disinflation = rate slowing down (e.g. 6% -> 4%); Deflation = prices falling (negative rate < 0%).\n• Fisher Equation: Real Rate = Nominal Rate - Inflation (r ≈ i - π). Negative real rate erodes saver wealth.',
        keyTakeaways: ['Definition of Aggregate Inflation', 'Disinflation (cooling rate) vs Deflation (negative rate)', 'Fisher Equation (r ≈ i - π)'],
        order: 1,
      },
      {
        tier: 'SUMMARY_2M',
        timeBudgetSeconds: 120,
        summary: 'Inflation measures aggregate price level rises, not individual supply shocks. Classified by speed: Creeping (1-3%), Walking (3-7%), Running (10-20%), Hyperinflation (>50%/month). Disinflation is positive but falling inflation; Deflation is negative inflation. Stagflation combines stagnation with inflation. Fisher relation shows real returns turn negative when inflation outpaces nominal interest.',
        keyTakeaways: ['Speed typology', 'Disinflation vs Deflation vs Stagflation vs Skewflation', 'Nominal vs Real interest rates and purchasing power'],
        order: 2,
      },
      {
        tier: 'ARCHITECTURE_5M',
        timeBudgetSeconds: 300,
        summary: 'Comprehensive foundational architecture: Classical Quantity Theory of Money ($MV = PY$), Keynesian inflationary gap, calculation of Price Indices using Laspeyres and Paasche formulas, Fisher effect dynamics on real debt contracts, and economic distortions created by hyperinflationary collapse of currency velocity.',
        keyTakeaways: ['Quantity Theory of Money mechanics', 'Laspeyres base-weighted price index formula', 'Macroeconomic distortions of hyperinflation'],
        order: 3,
      },
    ],
    questions: [
      {
        stem: 'Which of the following statements correctly distinguishes "Disinflation" from "Deflation"?',
        type: 'CONCEPTUAL',
        difficulty: 'EASY',
        explanation: 'Disinflation refers to a decrease in the rate of inflation (prices are still increasing, but at a slower rate, such as falling from 6% to 3%), whereas Deflation is an actual decline in the aggregate price level (a negative inflation rate, where prices are lower than the previous period).',
        options: [
          { text: 'Disinflation means the price level is falling, whereas Deflation means the inflation rate is declining.', isCorrect: false, distractorExplanation: 'This reverses the definitions.' },
          { text: 'Disinflation is a slowdown in the rate of price increase, while Deflation is an absolute drop in the aggregate price level.', isCorrect: true },
          { text: 'Disinflation is caused solely by monetary policy, while Deflation is caused solely by fiscal policy.', isCorrect: false, distractorExplanation: 'Both can arise from varied macroeconomic forces.' },
          { text: 'Disinflation always leads to economic depression, whereas Deflation indicates rapid economic growth.', isCorrect: false, distractorExplanation: 'Deflation often leads to demand depression as consumers delay purchases.' },
        ],
      },
    ],
  },

  // 2. Price Indices & Measurement in India (CPI vs WPI vs Core)
  {
    id: 'CON-ECON-INF-02',
    slug: 'price-indices-measurement-cpi-wpi-core-headline',
    title: 'Price Indices & Measurement in India: CPI, WPI, Core vs Headline & Base Effects',
    shortDefinition:
      'India measures inflation primarily through two indices: the Consumer Price Index (CPI-Combined, base 2012, published by NSO), which serves as the official monetary policy anchor, and the Wholesale Price Index (WPI, base 2011-12, published by DPIIT), which tracks producer-level commodity transactions without services.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-ECON-INF-05', 'SEM-ECON-INF-06', 'SEM-ECON-INF-07'],
    economicSphere: {
      macroeconomicDomain: 'Statistical Measurement & Price Indices',
      primaryVariables: ['CPI-Combined (Base 2012)', 'WPI (Base 2011-12)', 'Core Inflation vs Headline Inflation', 'Base Effect'],
      institutionalActor: 'NSO (MoSPI), DPIIT (Ministry of Commerce), RBI',
      examTrap: 'Assuming WPI includes services. WPI includes ZERO services. Only CPI includes services (transport, education, health, recreation).',
    },
    claims: [
      {
        id: 'CLM-ECON-INF-02.1',
        statement: 'The Consumer Price Index (CPI-Combined, Base 2012 = 100) is released monthly by the National Statistical Office (NSO), Ministry of Statistics and Programme Implementation (MoSPI), with the highest weight assigned to Food and Beverages (45.86%).',
        claimType: 'FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        temporalStatus: 'CURRENT',
        scopeConditions: 'Base year 2012 is currently in operational use; revision to new base year is under committee review.',
        evidenceLocator: 'Treatise on Indian Economy (2026), Chapter 4, p. 5',
      },
      {
        id: 'CLM-ECON-INF-02.2',
        statement: 'The Wholesale Price Index (WPI, Base 2011-12 = 100) is released monthly by the Office of the Economic Adviser, DPIIT, Ministry of Commerce and Industry, with weights: Manufactured Products (64.23%), Primary Articles (22.62%), and Fuel & Power (13.15%), and completely excludes services.',
        claimType: 'FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        temporalStatus: 'CURRENT',
        evidenceLocator: 'Treatise on Indian Economy (2026), Chapter 4, p. 6',
      },
      {
        id: 'CLM-ECON-INF-02.3',
        statement: 'Headline inflation reflects the full price change of the entire standard CPI basket, while Core inflation strips out volatile Food and Fuel components to measure underlying, persistent generalized demand pressures.',
        claimType: 'COMPARISON',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        temporalStatus: 'STRUCTURAL',
        evidenceLocator: 'Treatise on Indian Economy (2026), Chapter 4, p. 7',
      },
      {
        id: 'CLM-ECON-INF-02.4',
        statement: 'The "Base Effect" refers to the distorting impact of the price level in the corresponding base period of the previous year on the current year-on-year inflation rate calculation.',
        claimType: 'CONCEPT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        temporalStatus: 'STRUCTURAL',
        evidenceLocator: 'Treatise on Indian Economy (2026), Chapter 4, p. 7',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Why Multiple Price Indices Exist: Retail vs Wholesale Perspectives',
        body: 'A consumer does not buy steel billets or raw cotton; a consumer buys shirts and pays school fees. Therefore, the **Wholesale Price Index (WPI)** measures price pressures at the early production and wholesale commodity stage, while the **Consumer Price Index (CPI)** measures the actual retail price pressures experienced by households.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'COMPARISON',
        title: 'Comprehensive Comparison: CPI vs WPI in India',
        body: '| Feature | Consumer Price Index (CPI-Combined) | Wholesale Price Index (WPI) |\n| :--- | :--- | :--- |\n| **Publishing Body** | National Statistical Office (NSO), MoSPI | Office of Economic Adviser, DPIIT, Min of Commerce |\n| **Base Year** | **2012 = 100** | **2011–12 = 100** |\n| **Stage of Transaction** | Final Retail / Consumer level | First Point of Bulk Wholesale Sale |\n| **Services Included?** | **YES** (Housing, Transport, Education, Health) | **NO** (Zero services included) |\n| **Food Weightage** | **High: 45.86%** (Food & Beverages) | **Moderate: 24.38%** (Primary Food 15.26% + Mfg Food 9.12%) |\n| **Manufacturing Weight** | ~17.4% (clothing, footwear, etc.) | **Highest: 64.23%** (Manufactured Products) |\n| **Fuel Weightage** | 6.84% (Fuel & Light) | 13.15% (Fuel & Power) |\n| **Monetary Policy Role** | **Official Anchor for RBI (FIT Framework)** | Formerly used prior to 2014; now secondary indicator |',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Headline vs Core Inflation & The Base Effect',
        body: '• **Headline CPI** = All 6 Groups in CPI Basket (Food & Beverages, Pan/Tobacco, Clothing/Footwear, Housing, Fuel & Light, Miscellaneous Services).\n• **Core CPI** = Headline CPI *minus* (Food and Beverages + Fuel and Light).\n\n*Why Core Inflation Matters*:\nFood and crude oil prices fluctuate violently due to monsoon weather and geopolitical events. A temporary tomato price spike does not mean the entire economy is overheating. Core inflation strips away these transient supply shocks to reveal sticky, underlying demand-driven inflation.\n\n*The Base Effect Mechanics*:\n$$\\text{Inflation Rate}_t = \\left( \\frac{\\text{Index}_t - \\text{Index}_{t-12}}{\\text{Index}_{t-12}} \\right) \\times 100$$\n• If $\\text{Index}_{t-12}$ was abnormally high (e.g. during a drought), current calculated inflation will appear deceptively low (**Favourable Base Effect**).\n• If $\\text{Index}_{t-12}$ was abnormally depressed, current inflation will appear elevated (**Unfavourable Base Effect**).',
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
        syllabusSection: 'GS Paper III: Price Indices (CPI vs WPI), GDP Deflator, Base year revisions.',
        prelimsFocus: 'Weightage ranking in CPI and WPI; Services exclusion in WPI; Base years and publishing ministries; Urjit Patel committee shift from WPI to CPI.',
        mainsFocus: 'Why CPI-Combined is a superior monetary policy anchor compared to WPI; Divergence between CPI and WPI trends.',
        examNotes: 'UPSC has asked direct Prelims questions on CPI vs WPI weights in 2015, 2019, 2020, and 2021.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper I (Economics): Price indices, Inflation trends in Rajasthan.',
        prelimsFocus: 'Base year of CPI (2012) and WPI in Rajasthan (1999-2000 state base vs 2011-12 national base).',
        mainsFocus: 'Differences between CPI and WPI in a 50-word table format.',
        examNotes: 'Rajasthan Economic Survey data on State CPI vs National CPI.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Economics & Banking: Inflation Indices and RBI Monetary Policy Stance.',
        prelimsFocus: 'Which index guides the Repo Rate decision (CPI-Combined) and weightage of food.',
        mainsFocus: 'N/A (Objective format).',
        examNotes: 'Core inflation understanding is essential for banking credit risk appraisals.',
      },
    ],
    revisionUnits: [
      {
        tier: 'FLASH_30S',
        timeBudgetSeconds: 30,
        summary: 'CPI vs WPI Rapid Pegs:\n• CPI-Combined: NSO (MoSPI), Base 2012, Includes Services, Food is highest (45.86%), RBI Anchor.\n• WPI: DPIIT (Commerce), Base 2011-12, ZERO Services, Manufacturing is highest (64.23%).\n• Core Inflation: Headline CPI minus volatile Food & Fuel (captures underlying sticky demand).',
        keyTakeaways: ['CPI (NSO, 2012, Food 45.86%, Services YES)', 'WPI (DPIIT, 2011-12, Mfg 64.23%, Services NO)', 'Core Inflation = Headline - Food/Fuel'],
        order: 1,
      },
      {
        tier: 'SUMMARY_2M',
        timeBudgetSeconds: 120,
        summary: 'India uses CPI-Combined (Base 2012, NSO) as its headline monetary anchor because it reflects retail consumption and includes services. WPI (Base 2011-12, DPIIT) tracks wholesale goods only. CPI gives 45.86% weight to Food & Beverages, making it sensitive to crop shocks. Core inflation strips Food/Fuel to identify persistent price trends. Base effects explain statistical surges or dips caused by previous-year reference levels.',
        keyTakeaways: ['CPI vs WPI administrative and structural comparison', 'Why RBI adopted CPI per Urjit Patel Committee', 'Base Effect mechanics in inflation calculation'],
        order: 2,
      },
      {
        tier: 'ARCHITECTURE_5M',
        timeBudgetSeconds: 300,
        summary: 'Detailed statistical decomposition of price indices: CPI basket groups (Food 45.86%, Miscellaneous 28.32%, Housing 10.07%, Fuel 6.84%, Clothing 6.53%, Pan 2.38%), GDP Deflator ($(\\text{Nominal GDP} / \\text{Real GDP}) \\times 100$) covering entire production, PPI (Producer Price Index) transition roadmap, and structural reasons for persistent CPI-WPI divergence.',
        keyTakeaways: ['Full CPI subgroup weighting', 'GDP Deflator vs CPI/WPI', 'Producer Price Index (PPI) roadmap'],
        order: 3,
      },
    ],
    questions: [
      {
        stem: 'With reference to the Wholesale Price Index (WPI) and Consumer Price Index (CPI) in India, consider the following statements:\n1. WPI includes manufactured goods, fuel, and primary articles, but excludes services entirely.\n2. In the CPI-Combined basket, the weight of Food and Beverages is over 45%.\n3. The Reserve Bank of India uses WPI as the primary headline index to determine its monetary policy interest rates.\nWhich of the statements given above are correct?',
        type: 'APPLICATION',
        difficulty: 'MEDIUM',
        explanation: 'Statements 1 and 2 are correct. WPI excludes services completely (only CPI covers services), and Food & Beverages carries a weight of 45.86% in CPI-Combined. Statement 3 is incorrect because RBI switched from WPI to CPI-Combined as its headline inflation anchor in 2014 per the Urjit Patel Committee recommendations.',
        options: [
          { text: '1 and 2 only', isCorrect: true },
          { text: '2 and 3 only', isCorrect: false, distractorExplanation: 'Statement 3 is false: RBI uses CPI-Combined, not WPI.' },
          { text: '1 and 3 only', isCorrect: false, distractorExplanation: 'Statement 3 is false.' },
          { text: '1, 2 and 3', isCorrect: false, distractorExplanation: 'Statement 3 is false.' },
        ],
      },
    ],
  },

  // 3. Causes & Causal Mechanisms (Demand-Pull, Cost-Push, Imported, Structural)
  {
    id: 'CON-ECON-INF-03',
    slug: 'inflation-causes-mechanisms-demand-cost-structural',
    title: 'Causes & Causal Mechanisms of Inflation: Demand-Pull, Cost-Push, Imported & Structural Shocks',
    shortDefinition:
      'Inflation arises from fundamental macroeconomic imbalances: Demand-Pull pressures when Aggregate Demand exceeds productive capacity, Cost-Push shocks when input costs shift the aggregate supply curve upward, Imported inflation through exchange rate pass-through, and Structural bottlenecks in agricultural supply chains.',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-ECON-INF-08', 'SEM-ECON-INF-09', 'SEM-ECON-INF-10', 'SEM-ECON-INF-11'],
    economicSphere: {
      macroeconomicDomain: 'Macroeconomic Equilibrium & Supply-Demand Dynamics',
      primaryVariables: ['Aggregate Demand (AD)', 'Short-Run Aggregate Supply (SRAS)', 'Imported Shocks', 'Supply Chain Bottlenecks'],
      institutionalActor: 'Ministry of Finance (Fiscal policy), Commercial Supply Chain, Global Energy Markets',
      examTrap: 'Assuming monetary policy can easily fix Cost-Push or Structural food inflation. Rate hikes dampen aggregate demand; they cannot grow more tomatoes or lower global crude oil prices.',
    },
    claims: [
      {
        id: 'CLM-ECON-INF-03.1',
        statement: 'Demand-Pull inflation occurs when Aggregate Demand (AD = C + I + G + NX) outpaces Aggregate Supply (AS) near potential output, driven by expansionary fiscal deficits, rapid money supply/credit growth, or sudden consumption booms.',
        claimType: 'CONCEPT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        temporalStatus: 'STRUCTURAL',
        evidenceLocator: 'Treatise on Indian Economy (2026), Chapter 4, p. 8',
      },
      {
        id: 'CLM-ECON-INF-03.2',
        statement: 'Cost-Push inflation is triggered by supply-side shocks—such as spikes in international crude oil, fertilizer costs, raw material shortages, or wage hikes—shifting the Short-Run Aggregate Supply (SRAS) curve upward/leftward, leading to lower real output alongside higher prices (stagflationary pressure).',
        claimType: 'CONCEPT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        temporalStatus: 'STRUCTURAL',
        evidenceLocator: 'Treatise on Indian Economy (2026), Chapter 4, p. 9',
      },
      {
        id: 'CLM-ECON-INF-03.3',
        statement: 'Imported inflation in India is driven primarily by international crude oil price spikes (given >85% import dependency) and edible oil imports, amplified whenever the Indian Rupee depreciates against the US Dollar (Exchange Rate Pass-Through).',
        claimType: 'CONCEPT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        temporalStatus: 'STRUCTURAL',
        evidenceLocator: 'Treatise on Indian Economy (2026), Chapter 4, p. 10',
      },
      {
        id: 'CLM-ECON-INF-03.4',
        statement: 'Structural inflation in India stems from agricultural supply bottlenecks, cold chain and logistics deficits, fragmented market intermediaries (APMC mandis), and cyclical climate events (monsoon vagaries, El Niño), causing episodic volatility in perishables like tomatoes, onions, and potatoes (TOP).',
        claimType: 'CONCEPT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        temporalStatus: 'STRUCTURAL',
        evidenceLocator: 'Treatise on Indian Economy (2026), Chapter 4, p. 11',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Two Engines of Inflation: Demand vs Cost',
        body: 'Inflation is always caused by a mismatch between buyers and producers:\n1. **Demand-Pull ("Too much money chasing too few goods")**: Buyers want to purchase 120 cars, but factories can only build 100. Buyers bid up prices.\n2. **Cost-Push ("Expensive inputs forcing higher selling prices")**: Steel, electricity, and shipping become twice as expensive. The factory must raise car prices just to avoid going bankrupt, even if buyer demand has not increased.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Causal Flowcharts of Economic Transmission',
        body: '```\n[ DEMAND-PULL TRANSMISSION CHAIN ]\nFiscal Stimulus / Low Interest Rates \n  ──> Surge in Private Consumption & Investment (AD ↑)\n  ──> Capacity Utilization reaches ceiling (Output Gap closes)\n  ──> Firms face labour/material shortages and raise prices\n  ──> Workers demand higher wages to preserve living standards\n  ──> Wage-Price Spiral locks in generalized inflation\n\n[ COST-PUSH / IMPORTED TRANSMISSION CHAIN ]\nGlobal Crude Oil Shock / Rupee Depreciation\n  ──> Landed Import Costs Surge (Landed INR Cost ↑)\n  ──> Freight, Logistics & Petrochemical Costs Rise\n  ──> Upward Shift in Short-Run Aggregate Supply (SRAS shifts Left)\n  ──> Higher Final Prices + Squeezed Corporate Profit Margins + Slower Output Growth\n```',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'CASE_ANALYSIS',
        title: 'Structural Food Inflation in India & The TOP Vulnerability',
        body: 'Food constitutes **45.86% of the CPI basket**. Therefore, agricultural supply shocks immediately drive headline inflation.\n• **The "Cobweb Phenomenon"**: When tomato prices crash, farmers plant less the next season $\\rightarrow$ severe supply deficit occurs $\\rightarrow$ prices skyrocket $\\rightarrow$ farmers over-plant $\\rightarrow$ prices crash again.\n• **Logistics Frictions**: Lack of cold storage and processing infrastructure means up to 15–20% of perishable horticulture rots before reaching retail mandis, amplifying retail price shocks during unseasonal heatwaves or El Niño droughts.',
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
        syllabusSection: 'GS Paper III: Issues relating to planning, mobilization of resources, growth, development and inflation.',
        prelimsFocus: 'Causes of Demand-Pull vs Cost-Push; Effects of Rupee depreciation on domestic inflation; Food inflation components.',
        mainsFocus: 'Why monetary policy has limited efficacy against structural food supply shocks; Multi-pronged strategies for structural agricultural reform.',
        examNotes: 'Frequent Mains questions on "Is inflation in India driven by demand-pull or supply bottlenecks?"',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper I: Inflation causes, Demand & Supply management.',
        prelimsFocus: 'Direct identification of demand-pull factors (deficit financing, credit) vs cost-push factors (taxes, oil prices).',
        mainsFocus: '50-word explanation of imported inflation and structural supply bottlenecks in agriculture.',
        examNotes: 'Crucial for analyzing state-level supply bottlenecks in arid agricultural produce.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Economic Environment: Cost Push vs Demand Pull and Credit Cycle.',
        prelimsFocus: 'Impact of credit growth on demand-pull inflation; How rising crude oil prices impact corporate working capital borrowing.',
        mainsFocus: 'N/A (Objective format).',
        examNotes: 'Understanding how input cost shocks impair corporate debt-servicing capacity.',
      },
    ],
    revisionUnits: [
      {
        tier: 'FLASH_30S',
        timeBudgetSeconds: 30,
        summary: 'Causes of Inflation Rapid Pegs:\n• Demand-Pull: AD > AS ("too much money chasing few goods", fiscal deficits, credit booms).\n• Cost-Push: SRAS shifts left (crude oil spikes, wage hikes, raw material cost surges).\n• India Specifics: Imported Inflation (>85% crude import dependency + Rupee depreciation) + Structural Food Bottlenecks (45.86% CPI food weight).',
        keyTakeaways: ['Demand-Pull (AD > AS)', 'Cost-Push (Supply Shocks)', 'Imported & Structural Food Bottlenecks'],
        order: 1,
      },
      {
        tier: 'SUMMARY_2M',
        timeBudgetSeconds: 120,
        summary: 'Demand-pull inflation is caused by expansionary fiscal policy, excess money supply, or rapid consumption pushing AD beyond potential output. Cost-push inflation results from supply-side cost increases (energy, wages, commodities). India is heavily exposed to imported inflation via crude oil dependency and currency depreciation, and structural inflation via agricultural perishability and APMC mandi frictions.',
        keyTakeaways: ['Demand-Pull vs Cost-Push mechanisms', 'Exchange Rate Pass-Through', 'Structural food inflation dynamics (TOP crops)'],
        order: 2,
      },
      {
        tier: 'ARCHITECTURE_5M',
        timeBudgetSeconds: 300,
        summary: 'Comprehensive macroeconomic equilibrium analysis: AD-AS framework under Keynesian vs Monetarist models, Wage-Price Spiral and Expectation-augmented Aggregate Supply, second-round transmission effects of food/fuel spikes into core services, and structural reforms required (Operation Greens, e-NAM, National Logistics Policy).',
        keyTakeaways: ['AD-AS macroeconomic model', 'Second-round effects transmission', 'Structural supply-side remedies'],
        order: 3,
      },
    ],
    questions: [
      {
        stem: 'Which of the following factors would directly contribute to "Cost-Push Inflation" in an economy like India?',
        type: 'APPLICATION',
        difficulty: 'MEDIUM',
        explanation: 'A sharp rise in global crude oil prices and depreciation of the domestic currency increase the cost of imported inputs and transportation, shifting the Aggregate Supply curve upward/leftward, directly causing Cost-Push inflation.',
        options: [
          { text: 'A cut in personal income taxes that boosts consumer spending.', isCorrect: false, distractorExplanation: 'This increases aggregate demand (Demand-Pull).' },
          { text: 'A sharp increase in international crude oil prices combined with currency depreciation.', isCorrect: true },
          { text: 'Aggressive lowering of the RBI repo rate to encourage private borrowing.', isCorrect: false, distractorExplanation: 'This fuels credit and aggregate demand (Demand-Pull).' },
          { text: 'A surge in foreign tourist inflows leading to high domestic hotel bookings.', isCorrect: false, distractorExplanation: 'This increases demand for services (Demand-Pull).' },
        ],
      },
    ],
  },

  // 4. Distributional Consequences & Macroeconomic Trade-offs
  {
    id: 'CON-ECON-INF-04',
    slug: 'inflation-distributional-impacts-growth-tradeoffs-phillips-curve',
    title: 'Distributional Impacts, Winners vs Losers & The Inflation-Growth Trade-off',
    shortDefinition:
      'Inflation creates sharp redistributional effects across society: borrowers gain while lenders and fixed-income savers lose, functioning as an unlegislated regressive tax on the poor. While a short-run trade-off between inflation and growth exists (Phillips Curve), high inflation in the long run dampens investment and destroys economic growth.',
    difficulty: 'INTERMEDIATE',
    semanticUnitIds: ['SEM-ECON-INF-12', 'SEM-ECON-INF-13'],
    economicSphere: {
      macroeconomicDomain: 'Distributional Economics & Macro Trade-offs',
      primaryVariables: ['Income & Wealth Redistribution', 'Phillips Curve', 'NAIRU', 'Tax Bracket Creep'],
      institutionalActor: 'Society, Fixed-Income Households, Corporate Borrowers, Government Revenue',
      examTrap: 'Believing everyone loses during inflation. Debtors (borrowers) GAIN because they repay loans in currency with reduced real purchasing power.',
    },
    claims: [
      {
        id: 'CLM-ECON-INF-04.1',
        statement: 'Inflation redistributes wealth from creditors (lenders) to debtors (borrowers), because debt contracts are fixed in nominal terms and borrowers repay loans in currency that has diminished purchasing power.',
        claimType: 'LEGAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        temporalStatus: 'STRUCTURAL',
        evidenceLocator: 'Treatise on Indian Economy (2026), Chapter 4, p. 12',
      },
      {
        id: 'CLM-ECON-INF-04.2',
        statement: 'Inflation operates as a regressive tax on the poor and fixed-income earners (pensioners, daily wage labourers) because lower-income households spend a vastly higher proportion of their total income on essential food and fuel items and lack inflation-hedged financial assets.',
        claimType: 'CONCEPT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        temporalStatus: 'STRUCTURAL',
        evidenceLocator: 'Treatise on Indian Economy (2026), Chapter 4, p. 12',
      },
      {
        id: 'CLM-ECON-INF-04.3',
        statement: 'The short-run Phillips Curve suggests an inverse relationship between inflation and unemployment, but in the long run, the curve is vertical at the Non-Accelerating Inflation Rate of Unemployment (NAIRU), meaning sustained high inflation does not yield higher output.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        temporalStatus: 'STRUCTURAL',
        evidenceLocator: 'Treatise on Indian Economy (2026), Chapter 4, p. 13',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Why Inflation Is the Most Regressive Tax',
        body: 'When Parliament levies an income tax, it can exempt the poor and tax the rich progressively. But when prices rise by 10%, every citizen pays 10% more for bread and milk.\nBecause a poor household spends 60% of its budget on food while a wealthy household spends only 10%, inflation severely erodes the real disposable income of the most vulnerable.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'COMPARISON',
        title: 'Comprehensive Matrix of Inflation Winners vs Losers',
        body: '| Economic Group | Impact Status | Causal Reason |\n| :--- | :---: | :--- |\n| **Debtors / Borrowers** | **GAIN (Winner)** | Repay fixed nominal debt using depreciated money with lower real purchasing power |\n| **Creditors / Lenders / Savers** | **LOSE (Loser)** | Receive fixed nominal repayments that buy fewer real goods; real returns turn negative |\n| **Fixed-Income / Pensioners** | **LOSE (Loser)** | Incomes adjust sluggishly or not at all; real purchasing power steadily declines |\n| **Equity Holders / Business Owners** | **GAIN / HEDGE** | Can pass price increases to consumers; asset values (real estate, equities) tend to rise with inflation |\n| **Government (as Borrower)** | **GAINS Short-Term** | Real debt burden shrinks; tax revenues expand nominally via "bracket creep" |\n| **Importers** | **LOSE (Loser)** | Must spend more domestic currency to buy foreign goods |\n| **Exporters** | **MIXED** | May gain if currency depreciates, but lose if domestic input costs rise faster |',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'The Phillips Curve & The Inflation-Growth Threshold',
        body: '• **Short-Run Phillips Curve (SRPC)**: In the short run, higher aggregate demand can temporarily boost output and lower unemployment at the cost of higher inflation.\n• **Long-Run Phillips Curve (LRPC)**: Workers and firms adjust their **Inflation Expectations**. Wages rise, profit margins shrink, and unemployment returns to its natural rate (NAIRU) at a permanently higher price level.\n• **Growth Threshold**: Empirical research by RBI indicates that in India, inflation above **6%** actively harms long-term GDP growth by creating price uncertainty, reducing domestic household financial savings, and dampening corporate private capital expenditure (Capex).',
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
        syllabusSection: 'GS Paper III: Inclusive growth and issues arising from it; Effects of inflation on poverty.',
        prelimsFocus: 'Who gains and who loses during inflation (Debtors vs Creditors, Exporters vs Importers); Phillips curve concepts.',
        mainsFocus: 'Why price stability is a prerequisite for sustained inclusive growth and poverty alleviation; Household savings shift from financial to physical assets.',
        examNotes: 'Classic UPSC Prelims question: "Who among the following benefits the most from inflation? (a) Bondholders (b) Debtors (c) Fixed wage earners (d) Exporters".',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper I (Economics): Impact of inflation on various sections of society.',
        prelimsFocus: 'Direct questions on Debtors gaining vs Creditors losing.',
        mainsFocus: '50-word question on social and economic consequences of sustained inflation.',
        examNotes: 'High-frequency 5-mark question in RAS Mains.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Banking Operations: Impact on Bank Balance Sheets and Credit Risks.',
        prelimsFocus: 'How inflation affects bond yields (Bond prices fall as yields rise) and bank loan portfolios.',
        mainsFocus: 'N/A (Objective format).',
        examNotes: 'Bond duration risk: Inflation surges cause bond portfolio mark-to-market (MTM) losses for banks.',
      },
    ],
    revisionUnits: [
      {
        tier: 'FLASH_30S',
        timeBudgetSeconds: 30,
        summary: 'Inflation Impacts Rapid Pegs:\n• Winners: Debtors/Borrowers (repay cheaper money), Asset/Equity Owners, Government as borrower.\n• Losers: Creditors/Lenders, Fixed-income Pensioners, Cash Savers, Poor households (regressive food tax).\n• Macro Trade-off: Short-run Phillips curve trade-off vanishes in long run; Inflation >6% actively hurts Indian GDP growth.',
        keyTakeaways: ['Debtors Gain vs Creditors Lose', 'Regressive consumption tax on poor', 'Long-run Vertical Phillips Curve at NAIRU'],
        order: 1,
      },
      {
        tier: 'SUMMARY_2M',
        timeBudgetSeconds: 120,
        summary: 'Inflation redistributes purchasing power: borrowers benefit by repaying debt in cheaper money, while lenders and fixed-income earners suffer real wealth erosion. It acts as an unlegislated regressive tax because the poor spend a larger share of income on necessities. The Phillips curve shows short-run employment gains from inflation, but in the long run, inflation expectations adjust and inflation above 6% destroys productive investment.',
        keyTakeaways: ['Winners and Losers matrix', 'Regressive impact on lower income deciles', 'Inflation-growth threshold (6% cap for India)'],
        order: 2,
      },
      {
        tier: 'ARCHITECTURE_5M',
        timeBudgetSeconds: 300,
        summary: 'Deep architectural evaluation of redistributional macroeconomics: Olivera-Tanzi effect (fiscal revenue lag eroding real tax collections), bracket creep in progressive income tax systems, Tobin-Mundell effect on capital accumulation, inflation expectations formation (Adaptive vs Rational expectations), and structural impact on household financial savings.',
        keyTakeaways: ['Olivera-Tanzi effect', 'Adaptive vs Rational expectations', 'Household financial savings dynamics'],
        order: 3,
      },
    ],
    questions: [
      {
        stem: 'With reference to the economic effects of inflation, who among the following typically benefits the most from persistent inflation?',
        type: 'CONCEPTUAL',
        difficulty: 'EASY',
        explanation: 'Debtors (borrowers) benefit from inflation because their loan contracts are fixed in nominal amounts, allowing them to repay their debts using currency that has a lower real purchasing power than when the money was borrowed.',
        options: [
          { text: 'Bondholders and fixed-deposit holders', isCorrect: false, distractorExplanation: 'They receive fixed nominal returns that buy fewer real goods (Losers).' },
          { text: 'Debtors (Borrowers)', isCorrect: true },
          { text: 'Retired pensioners with fixed pensions', isCorrect: false, distractorExplanation: 'Their fixed income loses real buying power (Losers).' },
          { text: 'Creditors and financial lenders', isCorrect: false, distractorExplanation: 'They receive depreciated currency in repayment (Losers).' },
        ],
      },
    ],
  },

  // 5. Policy Response & Indian Institutional Framework
  {
    id: 'CON-ECON-INF-05',
    slug: 'inflation-policy-framework-rbi-mpc-flexible-targeting-supply-side',
    title: 'Policy Framework: RBI Flexible Inflation Targeting (FIT), The MPC & Supply-Side Coordination',
    shortDefinition:
      'India controls inflation through a coordinated policy architecture: Monetary Policy operated by the 6-member Monetary Policy Committee (MPC) under the Flexible Inflation Targeting (FIT) framework (4% ± 2% CPI target under Section 45ZA of the RBI Act), coupled with Fiscal and Supply-Side market interventions by the Central Government.',
    difficulty: 'ADVANCED',
    semanticUnitIds: ['SEM-ECON-INF-14', 'SEM-ECON-INF-15'],
    economicSphere: {
      macroeconomicDomain: 'Monetary Governance & Macroeconomic Coordination',
      primaryVariables: ['Policy Repo Rate', 'CPI Target (4% ± 2%)', 'Monetary Transmission', 'Buffer Stocks (OMSS)'],
      institutionalActor: 'Monetary Policy Committee (RBI), Ministry of Finance, Food Corporation of India (FCI)',
      examTrap: 'Assuming the MPC target is set by RBI alone. The inflation target (4% ± 2%) is determined by the Central Government in consultation with the RBI once every five years (Section 45ZA).',
    },
    claims: [
      {
        id: 'CLM-ECON-INF-05.1',
        statement: 'Under Section 45ZA of the Reserve Bank of India Act, 1934 (inserted by Finance Act 2016), the Central Government, in consultation with the RBI, determines the inflation target in terms of Consumer Price Index (CPI) once every five years, fixed at 4% with an upper tolerance limit of 6% and a lower tolerance limit of 2%.',
        claimType: 'LEGAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        temporalStatus: 'CURRENT',
        scopeConditions: 'Target of 4% (±2% band) is notified for the 5-year period from April 1, 2021 to March 31, 2026.',
        evidenceLocator: 'Treatise on Indian Economy (2026), Chapter 4, p. 14',
      },
      {
        id: 'CLM-ECON-INF-05.2',
        statement: 'The Monetary Policy Committee (MPC) consists of 6 members: the RBI Governor (Chairperson, ex-officio), the RBI Deputy Governor in charge of monetary policy, one RBI officer, and three external members appointed by the Central Government for a non-renewable 4-year term.',
        claimType: 'FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        temporalStatus: 'CURRENT',
        evidenceLocator: 'Treatise on Indian Economy (2026), Chapter 4, p. 14',
      },
      {
        id: 'CLM-ECON-INF-05.3',
        statement: 'A failure of monetary policy is legally defined when average headline CPI inflation remains outside the tolerance band (above 6% or below 2%) for three consecutive quarters, requiring the RBI to submit a formal explanatory report to the Central Government detailing reasons, remedial actions, and estimated time to restore the target.',
        claimType: 'LEGAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        temporalStatus: 'CURRENT',
        evidenceLocator: 'Treatise on Indian Economy (2026), Chapter 4, p. 14',
      },
      {
        id: 'CLM-ECON-INF-05.4',
        statement: 'Because monetary policy is primarily effective against demand-pull pressures and cannot resolve supply bottlenecks, the government employs supply-side administrative tools: Open Market Sale Scheme (OMSS) via FCI buffer stocks, export curbs on wheat/rice/onions, reduction of import duties on edible oils, and strategic logistics streamlining.',
        claimType: 'FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        temporalStatus: 'STRUCTURAL',
        evidenceLocator: 'Treatise on Indian Economy (2026), Chapter 4, p. 15',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Two Hands of Inflation Management: The Brake and The Supply Lever',
        body: 'When inflation surges, two separate authorities act:\n1. **The Central Bank (RBI)** steps on the *Monetary Brake*: It raises the Repo Rate, making borrowing expensive. This cools down excessive credit and consumer spending.\n2. **The Central Government** operates the *Supply Lever*: It releases wheat and rice from FCI godowns, slashes import tariffs on cooking oils, or cracks down on hoarding to physically increase food supply in the market.',
        order: 1,
        visibility: 'STANDARD',
      },
      {
        type: 'MECHANISM',
        title: 'Monetary Policy Transmission Mechanism in India',
        body: '```\n[ POLICY REPO RATE HIKE ]\nRBI increases Policy Repo Rate (e.g. by 50 bps)\n  ──> Commercial Banks pay more to borrow from RBI\n  ──> Marginal Cost of Funds-based Lending Rate (MCLR) & External Benchmark Lending Rates (EBLR) Rise\n  ──> Home, Auto & Business Loan Interest Rates Increase\n  ──> Monthly EMIs Rise; Households & Corporates Borrow Less\n  ──> Aggregate Demand Cools & Discretionary Spending Moderates\n  ──> Firms Find It Harder to Pass Price Hikes to Consumers\n  ──> Headline Inflation Decelerates Toward the 4% Target\n```\n\n*Transmission Impediments in India*:\n• Incomplete transmission due to high share of fixed-rate small savings schemes (PPF, Sukanya Samriddhi) setting a floor on bank deposit rates.\n• EBLR mandate (since 2019) linked retail loans directly to Repo Rate, dramatically speeding up transmission.',
        order: 2,
        visibility: 'STANDARD',
      },
      {
        type: 'COMPARISON',
        title: 'Monetary Policy vs Fiscal / Supply-Side Tools Comparison',
        body: '| Dimension | Monetary Policy (RBI / MPC) | Fiscal & Supply-Side Tools (Central Govt) |\n| :--- | :--- | :--- |\n| **Primary Instruments** | Policy Repo Rate, SDF, MSF, CRR, Open Market Operations | Import duty adjustments, export bans, OMSS food releases, subsidies |\n| **Primary Target** | **Aggregate Demand & Inflation Expectations** | **Direct Supply Availability & Input Costs** |\n| **Speed of Action** | Immediate rate announcement | Administrative notifications, physical logistics |\n| **Transmission Lag** | 2 to 4 quarters to affect real economy | Immediate physical supply impact at mandis |\n| **Efficacy on Food/Fuel** | Indirect / Limited (cannot fix crop loss) | **Direct & Highly Effective for specific commodities** |',
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
        syllabusSection: 'GS Paper III: Monetary Policy, Central Bank Governance, Inflation Targeting, Food Security Management.',
        prelimsFocus: 'Statutory provisions of Section 45ZA; Composition, voting rules, and tenure of the MPC; Definition of failure (3 consecutive quarters).',
        mainsFocus: 'Evaluating the 8-year performance of Flexible Inflation Targeting in India; Coordinated monetary-fiscal management during supply shocks.',
        examNotes: 'UPSC asked about the Monetary Policy Committee in Prelims 2017 and 2021.',
      },
      {
        examCode: 'RPSC_RAS',
        examName: 'RPSC Rajasthan Administrative Services',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'Paper I (Economics): Monetary Policy of RBI, Instruments of Credit Control.',
        prelimsFocus: 'Quantitative credit control tools (Repo, Reverse Repo, CRR, SLR); Current inflation target numbers (4% ± 2%).',
        mainsFocus: '50-word note on the structure and functions of the Monetary Policy Committee (MPC).',
        examNotes: 'Direct 5-mark question in RAS Mains Paper I.',
      },
      {
        examCode: 'IIBF_DBF',
        examName: 'IIBF Diploma in Banking & Finance',
        relevance: 'CORE_HIGH_YIELD',
        weightage: 'HIGH',
        syllabusSection: 'RBI Operations: Liquidity Adjustment Facility (LAF), SDF, MSF, and Monetary Policy Transmission.',
        prelimsFocus: 'Functioning of the Standing Deposit Facility (SDF) and Marginal Standing Facility (MSF) corridors around the Repo Rate.',
        mainsFocus: 'N/A (Objective format).',
        examNotes: 'Core operational knowledge for Treasury and ALM banking officers.',
      },
    ],
    revisionUnits: [
      {
        tier: 'FLASH_30S',
        timeBudgetSeconds: 30,
        summary: 'Inflation Policy Rapid Pegs:\n• Flexible Inflation Targeting (FIT): Section 45ZA RBI Act, 4% target (±2% band, 2-6% range), 5-year notification (2021-2026).\n• MPC: 6 members (3 RBI + 3 Govt), 4-year non-renewable term for externals, Governor has casting vote.\n• Failure Rule: 3 consecutive quarters outside 2-6% band -> RBI must submit formal explanatory report to Government.',
        keyTakeaways: ['FIT 4% ± 2% under Section 45ZA', '6-member MPC structure and voting rules', 'Failure defined as 3 consecutive quarters breach'],
        order: 1,
      },
      {
        tier: 'SUMMARY_2M',
        timeBudgetSeconds: 120,
        summary: 'India transitioned to Flexible Inflation Targeting in 2016 per Urjit Patel Committee recommendations. The statutory target is 4% CPI with a 2–6% tolerance band. The 6-member MPC meets bi-monthly to set the Policy Repo Rate. Failure occurs if inflation breaches the band for 3 consecutive quarters. Because monetary policy targets demand, the government deploys supply-side tools (OMSS grain release, export duties, tariff cuts) to manage food and fuel shocks.',
        keyTakeaways: ['Section 45ZA statutory framework', 'Monetary transmission chain (Repo -> EBLR -> Credit)', 'Monetary-fiscal coordination balance'],
        order: 2,
      },
      {
        tier: 'ARCHITECTURE_5M',
        timeBudgetSeconds: 300,
        summary: 'Comprehensive institutional analysis: Evolution from Chakravarty Committee (1985) money supply targeting to Multiple Indicator Approach (1998) and FIT (2016); Operational framework of the Liquidity Adjustment Facility (LAF) corridor with Standing Deposit Facility (SDF) at floor and MSF at ceiling; International comparison with US Fed dual mandate vs ECB single mandate.',
        keyTakeaways: ['Evolution of Indian monetary frameworks', 'SDF/MSF corridor dynamics', 'Global central banking mandates comparison'],
        order: 3,
      },
    ],
    questions: [
      {
        stem: 'With reference to the Monetary Policy Committee (MPC) in India, consider the following statements:\n1. The MPC consists of six members, including the Governor of the Reserve Bank of India as the ex-officio Chairperson.\n2. The inflation target of 4% with a tolerance band of ±2% is set independently by the RBI Governor.\n3. A failure of monetary policy is legally defined when the average inflation breaches the tolerance band for three consecutive quarters.\nWhich of the statements given above is/are correct?',
        type: 'APPLICATION',
        difficulty: 'MEDIUM',
        explanation: 'Statements 1 and 3 are correct. Statement 2 is incorrect because under Section 45ZA of the RBI Act 1934, the inflation target is determined by the Central Government in consultation with the RBI, not unilaterally by the RBI Governor.',
        options: [
          { text: '1 and 3 only', isCorrect: true },
          { text: '1 and 2 only', isCorrect: false, distractorExplanation: 'Statement 2 is false: Target is set by Central Govt in consultation with RBI.' },
          { text: '2 and 3 only', isCorrect: false, distractorExplanation: 'Statement 2 is false.' },
          { text: '1, 2 and 3', isCorrect: false, distractorExplanation: 'Statement 2 is false.' },
        ],
      },
    ],
  },
];

/**
 * Seeds the complete cross-domain Economics canonical knowledge graph for Inflation.
 */
export async function seedInflationCanonicalKnowledge() {
  // 1. Create/Retrieve Source
  const source = await db.source.upsert({
    where: { id: 'source-econ-inflation-2026' },
    update: {
      title: 'Treatise on Indian Macroeconomics & Monetary Policy [2026 Edition]',
      author: 'Department of Economic Analysis & Policy',
      publisher: 'National Institute of Public Finance & Macroeconomics',
      sourceType: 'EDUCATIONAL_NOTES',
      authorityTier: 'TIER_B_SCHOLARLY',
      edition: '2026 Comprehensive Edition',
      identifier: 'ECON-MACRO-INFLATION-2026',
      language: 'en',
      description: 'Authoritative macroeconomic treatise on inflation dynamics, price measurement, monetary transmission, and institutional frameworks in India.',
    },
    create: {
      id: 'source-econ-inflation-2026',
      title: 'Treatise on Indian Macroeconomics & Monetary Policy [2026 Edition]',
      author: 'Department of Economic Analysis & Policy',
      publisher: 'National Institute of Public Finance & Macroeconomics',
      sourceType: 'EDUCATIONAL_NOTES',
      authorityTier: 'TIER_B_SCHOLARLY',
      edition: '2026 Comprehensive Edition',
      identifier: 'ECON-MACRO-INFLATION-2026',
      language: 'en',
      description: 'Authoritative macroeconomic treatise on inflation dynamics, price measurement, monetary transmission, and institutional frameworks in India.',
    },
  });

  // 2. Create Domain -> Subject -> Topic Hierarchy
  let domain = await db.domain.findFirst({ where: { slug: 'economics-public-policy' } });
  if (!domain) {
    domain = await db.domain.create({
      data: {
        slug: 'economics-public-policy',
        name: 'Economics & Public Policy',
        description: 'Macroeconomics, development economics, monetary theory, and fiscal policy.',
      },
    });
  }

  let subject = await db.subject.findFirst({ where: { slug: 'indian-economy' } });
  if (!subject) {
    subject = await db.subject.create({
      data: {
        slug: 'indian-economy',
        name: 'Indian Economy & Macroeconomic Policy',
        domainId: domain.id,
        scopeStatement: 'Macroeconomic aggregates, price dynamics, banking system, fiscal policy, and external sector.',
        description: 'Comprehensive study of Indian economic growth, monetary transmission, and structural reforms.',
      },
    });
  }

  let topic = await db.topic.findFirst({
    where: { subjectId: subject.id, slug: 'inflation-dynamics-measurement-policy' },
  });
  if (!topic) {
    topic = await db.topic.create({
      data: {
        slug: 'inflation-dynamics-measurement-policy',
        title: 'Inflation: Dynamics, Price Measurement & Policy Framework',
        subjectId: subject.id,
        order: 1,
        description: 'Comprehensive study of inflation concepts, price indices, causes, distributional effects, and the RBI monetary policy framework.',
      },
    });
  }

  // 3. Create Source Section & Coverage Unit
  const section = await db.sourceSection.create({
    data: {
      sourceId: source.id,
      title: 'Chapter 4: Inflation Dynamics, Measurement & Monetary Policy in India',
      sectionType: 'CHAPTER',
      pageStart: 1,
      pageEnd: 15,
      locator: 'Treatise pp. 1-15',
      order: 1,
    },
  });

  const cu = await db.coverageUnit.create({
    data: {
      sourceId: source.id,
      sourceSectionId: section.id,
      label: 'Coverage Unit: Macroeconomic Inflation & Policy Framework',
      scopeDescription: 'Covers price theory, CPI vs WPI indices, demand/cost-push mechanisms, Phillips curve, and RBI FIT regime.',
      status: 'EXTRACTED',
      extractionStatus: 'COMPLETE',
      verificationStatus: 'CHECKED',
      canonicalMappingStatus: 'MAPPED',
      order: 1,
    },
  });

  // 4. Seed Ingestion Items
  for (const semItem of INFLATION_SOURCE_SEMANTIC_UNITS) {
    await db.ingestionItem.create({
      data: {
        sourceId: source.id,
        coverageUnitId: cu.id,
        rawInput: `Page ${semItem.pdfPage} (Treatise p. ${semItem.printedPage}) - ${semItem.localHeading}`,
        extractedContent: JSON.stringify(semItem),
        status: 'EXTRACTED',
      },
    });
  }

  // 5. Seed Canonical Concepts
  const seededConcepts = [];

  for (const def of INFLATION_CANONICAL_CONCEPTS) {
    const concept = await db.concept.upsert({
      where: {
        topicId_slug: {
          topicId: topic.id,
          slug: def.slug,
        },
      },
      update: {
        title: def.title,
        shortDefinition: def.shortDefinition,
        difficulty: def.difficulty,
        status: 'CANONICAL',
      },
      create: {
        id: def.id,
        slug: def.slug,
        title: def.title,
        shortDefinition: def.shortDefinition,
        difficulty: def.difficulty,
        topicId: topic.id,
        status: 'CANONICAL',
      },
    });

    // Clear old dependent records
    await db.evidence.deleteMany({ where: { claim: { conceptId: concept.id } } });
    await db.claim.deleteMany({ where: { conceptId: concept.id } });
    await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
    await db.examConceptMapping.deleteMany({ where: { conceptId: concept.id } });
    await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
    await db.question.deleteMany({ where: { conceptId: concept.id } });

    // Seed Claims & Evidence
    for (const c of def.claims) {
      const claim = await db.claim.create({
        data: {
          id: c.id,
          conceptId: concept.id,
          statement: c.statement,
          claimType: c.claimType as any,
          epistemicLevel: c.epistemicLevel,
          confidence: c.confidence,
          scopeConditions: c.scopeConditions || null,
          status: 'VERIFIED',
        },
      });

      await db.evidence.create({
        data: {
          claimId: claim.id,
          sourceId: source.id,
          sourceSectionId: section.id,
          locator: c.evidenceLocator,
          excerpt: c.verbatimQuote || c.statement,
          notes: `Temporal Status: ${c.temporalStatus}; Verified against Macroeconomics Treatise (2026).`,
        },
      });
    }

    // Seed Content Blocks
    for (const b of def.contentBlocks) {
      await db.contentBlock.create({
        data: {
          conceptId: concept.id,
          type: b.type,
          title: b.title || null,
          body: b.body,
          order: b.order,
          visibility: b.visibility,
        },
      });
    }

    // Seed Exam Mappings
    for (const em of def.examMappings) {
      const examSlug = em.examCode.toLowerCase().replace(/_/g, '-');
      let exam = await db.exam.findFirst({ where: { slug: examSlug } });
      if (!exam) {
        exam = await db.exam.create({
          data: {
            slug: examSlug,
            name: em.examName,
            description: `${em.examName} competitive examination.`,
          },
        });
      }

      await db.examConceptMapping.create({
        data: {
          examId: exam.id,
          conceptId: concept.id,
          relevance: em.relevance,
          priority: em.weightage === 'HIGH' ? 'HIGH_YIELD' : 'MEDIUM_YIELD',
          syllabusUnit: em.syllabusSection,
          notes: `[Prelims]: ${em.prelimsFocus} | [Mains]: ${em.mainsFocus} | ${em.examNotes}`,
        },
      });
    }

    // Seed Revision Units
    for (const ru of def.revisionUnits) {
      await db.revisionUnit.create({
        data: {
          conceptId: concept.id,
          type: ru.tier,
          content: `${ru.summary}\n\nKey Takeaways:\n${ru.keyTakeaways.map((t) => `- ${t}`).join('\n')}`,
          priority: 'HIGH',
          order: ru.order,
        },
      });
    }

    // Seed Active Recall Questions
    for (const q of def.questions) {
      const correctOption = q.options.find((o) => o.isCorrect)?.text || q.options[0].text;
      await db.question.create({
        data: {
          conceptId: concept.id,
          stem: q.stem,
          type: q.type === 'APPLICATION' ? 'MCQ_APPLICATION' : 'MCQ_SINGLE',
          difficulty: q.difficulty === 'EASY' ? 'BASIC' : q.difficulty === 'HARD' ? 'ADVANCED' : 'MODERATE',
          explanation: q.explanation,
          options: JSON.stringify(q.options),
          correctAnswer: correctOption,
        },
      });
    }

    seededConcepts.push(concept);
  }

  return {
    sourceId: source.id,
    coverageUnitId: cu.id,
    topicId: topic.id,
    conceptsCount: seededConcepts.length,
    concepts: seededConcepts,
  };
}
