/**
 * READING HUB — STATIC GA & GOVERNMENT SCHEMES CANONICAL BENCHMARK SEED
 *
 * Subject 4: General Awareness & Global Institutions (`general-awareness`)
 *   - Topic 52: International Organizations & Multilateral Headquarters
 *     - Concept 1: Global Multilateral Organizations & Headquarters Directory (CON-GA-01)
 *     - Concept 2: Multilateral Development Banks & Global Financial Architecture (CON-GA-02)
 *   - Topic 53: Global Indices, Reports & Publishing Bodies
 *     - Concept 3: Apex International Reports, Global Indices & Nodal Organizations (CON-GA-03)
 *
 * Subject 5: Government Schemes & Welfare Architecture (`government-schemes`)
 *   - Topic 54: Public Policy & Scheme Implementation Framework
 *     - Concept 4: Government Schemes Architecture: Classification, Funding Ratios & Nodal Delivery (CON-SCH-01)
 *   - Topic 55: Financial Inclusion, Social Security & Enterprise Schemes
 *     - Concept 5: Core Financial Inclusion & Social Security Schemes (PMJDY, PMJJBY, PMSBY, APY) (CON-SCH-02)
 *     - Concept 6: Micro-Enterprise & Street Vendor Credit Frameworks (PMMY MUDRA, PM SVANidhi, PM Vishwakarma) (CON-SCH-03)
 *   - Topic 56: Rural Development, Agriculture & Employment Guarantees
 *     - Concept 7: Rural Livelihood & Self-Help Group Credit (DAY-NRLM, Interest Subvention, CGFMU) (CON-SCH-04)
 *     - Concept 8: Employment Guarantee & Agricultural Income Support (MGNREGA 2005, PM-KISAN, PMFBY) (CON-SCH-05)
 */

import { db } from '../db/client';

export interface CanonicalConceptDefinition {
  id: string;
  topicOrder: number;
  topicSlug: string;
  topicTitle: string;
  topicDescription: string;
  subjectSlug: string;
  slug: string;
  title: string;
  shortDefinition: string;
  difficulty: 'FOUNDATIONAL' | 'INTERMEDIATE' | 'ADVANCED';
  claims: Array<{
    id: string;
    statement: string;
    claimType: string;
    epistemicLevel: string;
    confidence: string;
    locator: string;
    excerpt: string;
  }>;
  contentBlocks: Array<{
    type: string;
    title: string;
    body: string;
    order: number;
    visibility: string;
  }>;
  examMappings: Array<{
    examCode: 'upsc-cse' | 'rpsc-ras' | 'iibf-dbf';
    syllabusUnit: string;
    relevance: 'DIRECT_SYLLABUS' | 'HIGH_YIELD_PERIPHERAL' | 'BACKGROUND_CONTEXT';
    priority: 'HIGH' | 'MEDIUM' | 'LOW';
    requiredDepth: 'EXAM_STANDARD' | 'DEEP_DIVE' | 'SURVEY';
    notes?: string;
    frequentTraps?: string;
  }>;
  revisionUnits: Array<{
    type: 'FLASHCARD' | 'HIGH_YIELD_SUMMARY' | 'MNEMONIC_FORMULA';
    content: string;
    order: number;
  }>;
  questions: Array<{
    type: 'MCQ_SINGLE' | 'MCQ_MULTI';
    stem: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
    trapExplanation?: string;
    difficulty: 'EASY' | 'MODERATE' | 'HARD';
    isPYQ: boolean;
  }>;
}

export const GA_SCHEMES_CONCEPTS: CanonicalConceptDefinition[] = [
  // ==========================================
  // SUBJECT 4: GENERAL AWARENESS & GLOBAL INSTITUTIONS
  // ==========================================
  {
    id: 'CON-GA-01',
    topicOrder: 52,
    topicSlug: 'international-organizations-and-headquarters',
    topicTitle: 'International Organizations & Multilateral Headquarters',
    topicDescription: 'Geographical clustering of apex global governance bodies, United Nations specialized agencies, and international treaty secretariats across major diplomatic hubs.',
    subjectSlug: 'general-awareness',
    slug: 'global-multilateral-organizations-and-headquarters-directory',
    title: 'Global Multilateral Organizations & Headquarters Directory: Geneva, Vienna, Paris, Rome & Diplomatic Clusters',
    shortDefinition: 'A systematic architectural directory of apex international organizations, United Nations specialized agencies, and global governance bodies categorized by their geographical diplomatic hubs: Geneva (WHO, WTO, ILO, WIPO, UNCTAD), Vienna (IAEA, OPEC, UNIDO, UNODC), Paris (UNESCO, OECD, FATF), Rome (FAO, WFP, IFAD), Washington D.C. (World Bank, IMF), The Hague (ICJ, ICC, OPCW), London (IMO), Montreal (ICAO, WADA), Madrid (UN Tourism), and Nairobi (UNEP, UN-Habitat).',
    difficulty: 'FOUNDATIONAL',
    claims: [
      {
        id: 'CLM-GA-01-01',
        statement: 'Geneva (Switzerland) serves as the primary global hub for trade, health, intellectual property, and humanitarian agencies, hosting the WHO, WTO, ILO, WIPO, WMO, UNCTAD, ITU, and UNHCR.',
        claimType: 'INSTITUTIONAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'UN System Directory & Headquarters Agreements',
        excerpt: 'Geneva hosts WHO, WTO, ILO, WIPO, WMO, UNCTAD, ITU, and UNHCR.',
      },
      {
        id: 'CLM-GA-01-02',
        statement: 'Rome (Italy) hosts the United Nations food security, agriculture, and emergency nutritional assistance cluster: the Food and Agriculture Organization (FAO), World Food Programme (WFP), and International Fund for Agricultural Development (IFAD).',
        claimType: 'INSTITUTIONAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'UN Specialized Agencies Directory',
        excerpt: 'Rome hosts FAO, WFP, and IFAD.',
      },
      {
        id: 'CLM-GA-01-03',
        statement: 'The International Court of Justice (ICJ - principal judicial organ of the UN) and the International Criminal Court (ICC - independent judicial body established by the Rome Statute) are both headquartered at The Hague, Netherlands.',
        claimType: 'INSTITUTIONAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'UN Charter Article 92 & Rome Statute Article 3',
        excerpt: 'The Hague hosts the ICJ and ICC.',
      },
      {
        id: 'CLM-GA-01-04',
        statement: 'The United Nations Environment Programme (UNEP) and UN-Habitat are headquartered in Nairobi, Kenya, making Nairobi the apex UN hub headquartered in the Global South.',
        claimType: 'INSTITUTIONAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'UN General Assembly Resolution 2997 (XXVII)',
        excerpt: 'UNEP established in Nairobi in 1972.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Geographic Clustering of Global Multilateral Governance',
        body: 'Multilateral governance does not disperse haphazardly across the globe; international organizations cluster strategically within neutral, well-connected diplomatic epicenters established through post-WWII host treaties and specialized mandates.\n\nMastering global organizations requires organizing them by **geographic diplomatic clusters** rather than memorizing isolated acronyms.',
        order: 1,
        visibility: 'CANONICAL_FULL',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Master City-by-City Headquarters Directory',
        body: `### 1. Geneva, Switzerland (The Regulatory & Humanitarian Epicenter)
* **WHO (World Health Organization):** Directs international health action and sanitary conventions.
* **WTO (World Trade Organization):** Successor to GATT (1995); enforces multilateral trade rules and dispute settlements.
* **ILO (International Labour Organization):** Tripartite UN agency (Govt, Employers, Workers) founded in 1919 (Treaty of Versailles).
* **WIPO (World Intellectual Property Organization):** Administers international patents, trademarks, and copyright treaties.
* **WMO (World Meteorological Organization):** Weather, climate, and hydrological monitoring.
* **UNCTAD (UN Conference on Trade and Development):** Promotes development-friendly integration of developing countries into world trade.
* **UNHCR (UN High Commissioner for Refugees):** Global protection of refugees and displaced persons.
* **ITU (International Telecommunication Union):** Allocates global radio spectrum and satellite orbits (oldest UN specialized agency, founded 1865).
* **WEF (World Economic Forum):** Non-profit international foundation (headquartered in Cologny/Geneva).

---

### 2. Vienna, Austria (Nuclear, Industrial & Energy Security)
* **IAEA (International Atomic Energy Agency):** "Atoms for Peace"; autonomous UN-related nuclear watchdog (Nobel Peace Prize 2005).
* **OPEC (Organization of the Petroleum Exporting Countries):** Coordinates petroleum policies of member nations (Note: Austria is not an OPEC member).
* **UNIDO (UN Industrial Development Organization):** Sustainable industrial development.
* **UNODC (UN Office on Drugs and Crime):** Illicit trafficking, crime prevention, and terrorism.
* **CTBTO PrepCom (Comprehensive Nuclear-Test-Ban Treaty Organization):** Verifies global nuclear test bans.

---

### 3. Paris, France (Culture, Economics & Financial Integrity)
* **UNESCO (UN Educational, Scientific and Cultural Organization):** World Heritage Sites and global educational standards.
* **OECD (Organisation for Economic Co-operation and Development):** Intergovernmental economic organization of high-income democracies.
* **FATF (Financial Action Task Force):** Global money laundering and terrorist financing watchdog (Grey List / Black List).
* **IEA (International Energy Agency):** Autonomous energy policy adviser under OECD framework.
* **ESA (European Space Agency):** Intergovernmental space exploration agency.

---

### 4. Rome, Italy (The Agri-Food & Nutrition Cluster)
* **FAO (Food and Agriculture Organization):** Leads international efforts to defeat hunger and modernize agriculture.
* **WFP (World Food Programme):** World's largest humanitarian agency for emergency food assistance (Nobel Peace Prize 2020).
* **IFAD (International Fund for Agricultural Development):** Specialized UN financial institution financing rural agricultural poverty alleviation.

---

### 5. Washington D.C. & New York, USA (Finance & Apex Political Bodies)
* **Washington D.C.:** World Bank Group (IBRD, IDA, IFC, MIGA), International Monetary Fund (IMF), Inter-American Development Bank (IDB).
* **New York City:** United Nations Headquarters (UN Secretariat, General Assembly, Security Council, ECOSOC, Trusteeship Council), UNICEF (Children's Fund), UNDP (Development Programme), UN Women, UNFPA (Population Fund).

---

### 6. Other Apex Specialized Centers
* **The Hague, Netherlands:** **ICJ** (International Court of Justice - principal UN judicial organ) and **ICC** (International Criminal Court - independent treaty body under Rome Statute); **OPCW** (Organisation for the Prohibition of Chemical Weapons).
* **London, UK:** **IMO** (International Maritime Organization - maritime safety and marine pollution prevention); Commonwealth Secretariat; Amnesty International.
* **Nairobi, Kenya:** **UNEP** (United Nations Environment Programme) and **UN-Habitat** (Human Settlements).
* **Montreal, Canada:** **ICAO** (International Civil Aviation Organization) and **WADA** (World Anti-Doping Agency).
* **Madrid, Spain:** **UN Tourism** (formerly UNWTO - World Tourism Organization).
* **Bern, Switzerland:** **UPU** (Universal Postal Union - postal policies).
* **Lyon, France:** **INTERPOL** (International Criminal Police Organization).`,
        order: 2,
        visibility: 'CANONICAL_FULL',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Headquarters Traps',
        body: `1. **UN Tourism vs WTO:** Candidates confuse *UN Tourism* (World Tourism Organization - headquartered in **Madrid, Spain**) with the *World Trade Organization* (WTO - headquartered in **Geneva, Switzerland**).
2. **ICJ vs ICC in The Hague:** Both are in The Hague, but **ICJ is a principal UN organ** (15 judges elected for 9-year terms by UNGA & UNSC), whereas **ICC is an independent judicial body** established by the 1998 Rome Statute (India is not a party to the Rome Statute).
3. **UNEP in the Global South:** A favourite civil services question: UNEP was created following the 1972 Stockholm Conference and headquartered in **Nairobi, Kenya**, making it the first UN agency based in a developing country.
4. **OPEC in Vienna:** Note that Vienna hosts OPEC even though Austria itself is not an oil-producing member state.`,
        order: 3,
        visibility: 'CANONICAL_FULL',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper II: Important International Institutions, Agencies and Fora - their Structure, Mandate',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Frequent source of matching and factual prelims MCQs.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'Paper III: Current Affairs & International Organisations',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Direct 2-mark and 5-mark questions on global headquarters and mandates.',
      },
      {
        examCode: 'iibf-dbf',
        syllabusUnit: 'Paper 1: IE&IFS - International Financial Institutions and Global Bodies',
        relevance: 'HIGH_YIELD_PERIPHERAL',
        priority: 'MEDIUM',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Covers WTO, FATF, and Bretton Woods organizations.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASHCARD',
        content: 'Q: Which UN bodies are headquartered in Rome, Italy?\nA: FAO (Food and Agriculture Organization), WFP (World Food Programme), and IFAD (International Fund for Agricultural Development).',
        order: 1,
      },
      {
        type: 'HIGH_YIELD_SUMMARY',
        content: 'GENEVA = WHO, WTO, ILO, WIPO, WMO, UNCTAD, ITU, UNHCR.\nVIENNA = IAEA, OPEC, UNIDO, UNODC, CTBTO.\nPARIS = UNESCO, OECD, FATF, IEA.\nROME = FAO, WFP, IFAD.\nWASHINGTON = World Bank, IMF.\nTHE HAGUE = ICJ, ICC, OPCW.\nNAIROBI = UNEP, UN-Habitat.\nMADRID = UN Tourism.',
        order: 2,
      },
      {
        type: 'MNEMONIC_FORMULA',
        content: 'Rome Feeds (FAO, WFP, IFAD), Vienna Radiates (IAEA, OPEC, UNIDO), Paris Refines (UNESCO, OECD, FATF), Geneva Regulates (WHO, WTO, ILO, WIPO).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'MCQ_SINGLE',
        stem: 'Which of the following international organizations is headquartered in Madrid, Spain?',
        options: [
          'World Trade Organization (WTO)',
          'UN Tourism (formerly World Tourism Organization)',
          'Universal Postal Union (UPU)',
          'International Maritime Organization (IMO)',
        ],
        correctAnswer: 'UN Tourism (formerly World Tourism Organization)',
        explanation: 'UN Tourism (formerly UNWTO) is headquartered in Madrid, Spain. WTO is in Geneva, UPU is in Bern, and IMO is in London.',
        trapExplanation: 'Do not confuse the World Trade Organization (WTO - Geneva) with the World Tourism Organization (UN Tourism - Madrid).',
        difficulty: 'EASY',
        isPYQ: false,
      },
    ],
  },

  {
    id: 'CON-GA-02',
    topicOrder: 52,
    topicSlug: 'international-organizations-and-headquarters',
    topicTitle: 'International Organizations & Multilateral Headquarters',
    topicDescription: 'Architecture of Multilateral Development Banks (MDBs), Bretton Woods twins, regional development banks, and emerging South-South financial institutions.',
    subjectSlug: 'general-awareness',
    slug: 'multilateral-development-banks-architecture',
    title: 'Multilateral Development Banks (MDBs): Bretton Woods, Regional Banks & South-South Institutions',
    shortDefinition: 'A comparative analysis of Multilateral Development Banks (MDBs) and international financial institutions: the Bretton Woods twins (World Bank Group and IMF), regional banks (ADB, EIB, IDB, AfDB), and modern South-South institutions (AIIB and NDB). Analyzes founding charters, headquarters, capital subscriptions, voting share structures, and India’s institutional relationship.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-GA-02-01',
        statement: 'The World Bank Group consists of five institutions (IBRD, IDA, IFC, MIGA, and ICSID); India is a member of all institutions except ICSID (International Centre for Settlement of Investment Disputes).',
        claimType: 'INSTITUTIONAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'World Bank Group Membership Directory',
        excerpt: 'India is not a signatory to the 1965 ICSID Convention.',
      },
      {
        id: 'CLM-GA-02-02',
        statement: 'The Asian Development Bank (ADB - established 1966 in Manila) has Japan and the United States as its largest shareholders (15.6% each), followed by China (6.4%) and India (6.3%).',
        claimType: 'INSTITUTIONAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'ADB Annual Report & Shareholder Directory',
        excerpt: 'ADB largest shareholders: Japan and US, followed by PRC and India.',
      },
      {
        id: 'CLM-GA-02-03',
        statement: 'The Asian Infrastructure Investment Bank (AIIB - 2016, Beijing) has China as its largest shareholder (26.6% voting power) and India as its second-largest shareholder (7.6% voting power) and largest borrower.',
        claimType: 'INSTITUTIONAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'AIIB Articles of Agreement & Voting Share Table',
        excerpt: 'China 26.6% voting power, India 7.6% voting power.',
      },
      {
        id: 'CLM-GA-02-04',
        statement: 'The New Development Bank (NDB / BRICS Bank - 2015, Shanghai) was established by the BRICS nations with equal initial capital subscription ($10 billion each) and equal voting rights among founding members, without unilateral veto power.',
        claimType: 'INSTITUTIONAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Agreement on the New Development Bank (Fortaleza Declaration 2014)',
        excerpt: 'Founding BRICS members held equal 20% shares.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Evolution of Global Development Finance',
        body: 'Multilateral Development Banks (MDBs) are supranational financial institutions established by sovereign states to fund infrastructure, social programs, and macroeconomic stabilization.\n\nThe global architecture has evolved across three waves:\n1. **Post-WWII Bretton Woods (1944):** World Bank Group & IMF (US/European dominance).\n2. **Post-Colonial Regional Banks (1960s):** ADB, IDB, AfDB (Regional focus, dominant OECD anchors).\n3. **21st-Century South-South Institutions (2015–2016):** AIIB & NDB (Emerging market leadership, alternative voting formulas).',
        order: 1,
        visibility: 'CANONICAL_FULL',
      },
      {
        type: 'COMPARATIVE_MATRIX',
        title: 'Comparative Matrix of Major Multilateral Development Banks',
        body: `| Institution | Year Est. | Headquarters | Member Count | Largest Shareholders | Key Focus / Characteristics |
|---|---|---|---|---|---|
| **World Bank Group** | 1944 | Washington D.C., USA | 189 | United States, Japan, China, Germany, UK | 5 arms: IBRD (middle-income), IDA (concessional), IFC (private sector), MIGA (political risk), ICSID (disputes - India not a member). |
| **IMF** | 1944 | Washington D.C., USA | 190 | United States (16.5% - veto over 85% decisions), Japan, China, Germany | Macroeconomic stability, Balance of Payments (BoP) emergency support, SDR basket (USD, EUR, CNY, JPY, GBP). |
| **Asian Development Bank (ADB)** | 1966 | Manila (Mandaluyong), Philippines | 69 (49 regional) | Japan (15.6%), USA (15.6%), China (6.4%), India (6.3%) | Poverty reduction and infrastructure in Asia-Pacific. President conventionally Japanese. |
| **Asian Infrastructure Investment Bank (AIIB)** | 2016 | Beijing, China | 109 approved | China (26.6% voting power), India (7.6%), Russia (5.9%), Germany (4.1%) | Energy, transport, sustainable infrastructure. India is the largest cumulative borrower. |
| **New Development Bank (NDB)** | 2015 | Shanghai, China | 9 (BRICS + UAE, Egypt, Bangladesh, etc.) | Equal initial 20% voting power among original 5 BRICS founders | Sustainable infrastructure. First President was K.V. Kamath (India). |
| **European Investment Bank (EIB)** | 1958 | Luxembourg | 27 (EU Member States) | Germany, France, Italy (equal major shares) | Long-term lending arm of the European Union; world's largest multilateral borrower/lender. |`,
        order: 2,
        visibility: 'CANONICAL_FULL',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield MDB Exam Distinctions',
        body: `1. **India and ICSID:** India is a founding/active member of IBRD, IDA, IFC, and MIGA, but has consistently **refused to sign the ICSID Convention**. Rationale: ICSID arbitral awards cannot be reviewed by domestic courts, infringing on sovereign jurisdiction.
2. **AIIB Voting Structure:** China holds over 25% voting power in AIIB, giving it effective veto power over major constitutional amendments (which require a 75% supermajority). India is the second-largest shareholder (7.6%) and highest project borrower.
3. **NDB Equality Principle:** Unlike the World Bank or ADB where voting power strictly reflects capital contributed, NDB was designed so that no single founding member holds veto power or permanent dominant shareholding.`,
        order: 3,
        visibility: 'CANONICAL_FULL',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper II: International Relations - Multilateral financial institutions',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Regular questions on AIIB, NDB, and World Bank arms.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'Paper I: World Economy - World Bank, IMF, ADB, BRICS NDB',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Covers headquarters, objectives, and India’s role in MDBs.',
      },
      {
        examCode: 'iibf-dbf',
        syllabusUnit: 'Paper 1: IE&IFS - International Financial Architecture & MDBs',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Core banking awareness topic.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASHCARD',
        content: 'Q: Which arm of the World Bank Group is India NOT a member of, and why?\nA: ICSID (International Centre for Settlement of Investment Disputes), because its awards cannot be challenged in domestic courts.',
        order: 1,
      },
      {
        type: 'HIGH_YIELD_SUMMARY',
        content: '• World Bank & IMF: 1944, Washington D.C.\n• ADB: 1966, Manila (Japan & US largest shareholders).\n• AIIB: 2016, Beijing (China #1, India #2 shareholder).\n• NDB: 2015, Shanghai (Equal voting rights among BRICS founders).\n• EIB: 1958, Luxembourg (EU lending arm).',
        order: 2,
      },
    ],
    questions: [
      {
        type: 'MCQ_SINGLE',
        stem: 'With reference to the Asian Infrastructure Investment Bank (AIIB), consider the following statements:\n1. AIIB is headquartered in Shanghai.\n2. India is the second-largest shareholder in AIIB.\nWhich of the statements given above is/are correct?',
        options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
        correctAnswer: '2 only',
        explanation: 'Statement 1 is incorrect because AIIB is headquartered in Beijing (NDB is in Shanghai). Statement 2 is correct as India holds 7.6% voting power, second only to China (26.6%).',
        trapExplanation: 'Candidates frequently confuse the headquarters of AIIB (Beijing) with NDB (Shanghai).',
        difficulty: 'MODERATE',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-GA-03',
    topicOrder: 53,
    topicSlug: 'global-indices-and-reports',
    topicTitle: 'Global Indices, Reports & Publishing Bodies',
    topicDescription: 'Apex international benchmark reports, governance and socio-economic indices, publishing bodies, parameter structures, and institutional distinctions.',
    subjectSlug: 'general-awareness',
    slug: 'apex-international-reports-and-indices',
    title: 'Apex International Reports, Global Indices & Nodal Publishing Organizations',
    shortDefinition: 'A canonical catalog of flagship global socioeconomic, governance, economic, and environmental reports mapped to their authoritative publishing organizations (UNDP, WIPO, WEF, World Bank, IMF, Transparency International, UNEP). Examines core structural parameters, the Human Development Index (HDI) methodology, and key institutional traps.',
    difficulty: 'FOUNDATIONAL',
    claims: [
      {
        id: 'CLM-GA-03-01',
        statement: 'The Global Innovation Index (GII) is published annually by the World Intellectual Property Organization (WIPO) in partnership with the Portulans Institute.',
        claimType: 'INSTITUTIONAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'WIPO Global Innovation Index Report',
        excerpt: 'GII published by WIPO benchmarked across innovation inputs and outputs.',
      },
      {
        id: 'CLM-GA-03-02',
        statement: 'The Human Development Index (HDI) is published by the United Nations Development Programme (UNDP) based on three geometric-mean dimensions: a long and healthy life (Life Expectancy), knowledge (Mean & Expected Years of Schooling), and a decent standard of living (GNI per capita PPP).',
        claimType: 'METHODOLOGICAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'UNDP Human Development Report Technical Notes',
        excerpt: 'HDI geometric mean of normalized indices measuring three basic dimensions.',
      },
      {
        id: 'CLM-GA-03-03',
        statement: 'The World Economic Forum (WEF) publishes the Global Gender Gap Report, the Global Competitiveness Report, the Energy Transition Index, and the Global Risks Report.',
        claimType: 'INSTITUTIONAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'WEF Flagship Reports Directory',
        excerpt: 'WEF publishes Global Gender Gap, Global Risks, Energy Transition Index.',
      },
      {
        id: 'CLM-GA-03-04',
        statement: 'The World Bank publishes the World Development Report, Global Economic Prospects, Logistics Performance Index (LPI), and the Business Ready (B-READY) project (which replaced the discontinued Ease of Doing Business report in 2021).',
        claimType: 'INSTITUTIONAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'World Bank Publications & B-READY Project Launch Announcement',
        excerpt: 'Ease of Doing Business discontinued Sept 2021; replaced by B-READY.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Global Measurement Architecture',
        body: 'Multilateral indices translate complex socio-economic, environmental, and governance dynamics into standardized, comparable cross-country indicators.\n\nIn competitive examinations, reports and indices are tested on three dimensions:\n1. **Publishing Organization** (Which apex body compiles it?).\n2. **Core Pillars/Parameters** (What dimensions are measured?).\n3. **India\'s Performance Trend & Institutional Context**.',
        order: 1,
        visibility: 'CANONICAL_FULL',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Master Directory of Global Reports & Publishing Bodies',
        body: `### 1. United Nations Specialized Agencies & Programs
* **UNDP (UN Development Programme):** Human Development Report (HDI), Gender Inequality Index (GII), Multidimensional Poverty Index (MPI - with Oxford OPHI), Gender Social Norms Index.
* **WIPO (World Intellectual Property Organization):** Global Innovation Index (GII), World Intellectual Property Indicators.
* **UNEP (UN Environment Programme):** Emissions Gap Report, Adaptation Gap Report, Global Environment Outlook (GEO).
* **FAO (Food & Agriculture Organization):** The State of Food and Agriculture (SOFA), State of Food Security and Nutrition in the World (SOFI - joint with IFAD, UNICEF, WFP, WHO).
* **UNODC (UN Office on Drugs and Crime):** World Drug Report, Global Report on Trafficking in Persons.
* **UNCTAD:** World Investment Report (tracks global FDI inflows).
* **UNESCO:** Global Education Monitoring (GEM) Report.

---

### 2. Bretton Woods & Financial Institutions
* **World Bank:** World Development Report (WDR), Global Economic Prospects (GEP), Logistics Performance Index (LPI), Worldwide Governance Indicators (WGI), Business Ready (B-READY - replacing Ease of Doing Business).
* **IMF (International Monetary Fund):** World Economic Outlook (WEO), Global Financial Stability Report (GFSR), Fiscal Monitor.
* **Bank for International Settlements (BIS):** Triennial Central Bank Survey, Global Liquidity Indicators.

---

### 3. World Economic Forum (WEF)
* **Global Gender Gap Report:** Measures gender parity across 4 sub-indices: Economic Participation, Educational Attainment, Health and Survival, Political Empowerment.
* **Global Risks Report:** Top short-term and long-term global risks (published ahead of Davos Annual Meeting).
* **Energy Transition Index (ETI):** Energy system performance and readiness for energy transition.
* **Travel & Tourism Development Index (TTDI)**.

---

### 4. Independent Global Watchdogs & Think Tanks
* **Transparency International (Berlin):** Corruption Perceptions Index (CPI - scores public sector corruption from 0 = highly corrupt to 100 = very clean).
* **Reporters Without Borders (RSF - Paris):** World Press Freedom Index.
* **Economist Intelligence Unit (EIU - London):** Democracy Index (categorizes regimes as Full Democracy, Flawed Democracy, Hybrid Regime, Authoritarian), Global Liveability Index.
* **Institute for Economics and Peace (IEP - Sydney):** Global Peace Index (GPI), Global Terrorism Index (GTI).
* **Germanwatch:** Climate Change Performance Index (CCPI).
* **Stockholm International Peace Research Institute (SIPRI):** SIPRI Yearbook (Global Arms Transfers & Military Expenditure).`,
        order: 2,
        visibility: 'CANONICAL_FULL',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Trap Analysis in Reports',
        body: `1. **The Double "GII" Trap:**
   - **Global Innovation Index:** Published by **WIPO**.
   - **Gender Inequality Index:** Published by **UNDP** (part of Human Development Report).
2. **Discontinuation of Ease of Doing Business (EoDB):** The World Bank officially **discontinued** the Ease of Doing Business ranking in September 2021 following internal data irregularities. Its successor corporate benchmarking tool is **B-READY (Business Ready)**.
3. **WPI vs CPI Compiling Agencies in India:**
   - **WPI (Wholesale Price Index):** Compiled by **Office of Economic Adviser, DPIIT** (Ministry of Commerce & Industry).
   - **CPI (Consumer Price Index):** Compiled by **National Statistical Office (NSO), MoSPI**.`,
        order: 3,
        visibility: 'CANONICAL_FULL',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper II & III: Important Reports, Indices, Socio-Economic Development',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'High-frequency area in Prelims matching questions.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'Paper I & III: Economic Concepts, International Reports & Current Affairs',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Direct MCQs on report publishers and indices.',
      },
      {
        examCode: 'iibf-dbf',
        syllabusUnit: 'Paper 1: IE&IFS - Global Economic Indicators and Surveys',
        relevance: 'HIGH_YIELD_PERIPHERAL',
        priority: 'MEDIUM',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Covers WEO, GFSR, and World Investment Report.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASHCARD',
        content: 'Q: Name the 4 sub-indices of the WEF Global Gender Gap Index.\nA: 1. Economic Participation & Opportunity, 2. Educational Attainment, 3. Health & Survival, 4. Political Empowerment.',
        order: 1,
      },
      {
        type: 'HIGH_YIELD_SUMMARY',
        content: '• WIPO -> Global Innovation Index\n• UNDP -> Human Development Index, Multidimensional Poverty Index\n• WEF -> Global Gender Gap, Global Risks, Energy Transition Index\n• World Bank -> World Development Report, Logistics Performance Index, B-READY\n• IMF -> World Economic Outlook, Global Financial Stability Report\n• Transparency International -> Corruption Perceptions Index',
        order: 2,
      },
    ],
    questions: [
      {
        type: 'MCQ_SINGLE',
        stem: 'Which of the following organizations publishes the "World Economic Outlook" report?',
        options: [
          'World Bank',
          'International Monetary Fund (IMF)',
          'World Economic Forum (WEF)',
          'United Nations Conference on Trade and Development (UNCTAD)',
        ],
        correctAnswer: 'International Monetary Fund (IMF)',
        explanation: 'The World Economic Outlook (WEO) is published biannually by the International Monetary Fund (IMF). The World Bank publishes Global Economic Prospects and World Development Report.',
        trapExplanation: 'Do not confuse the IMF\'s World Economic Outlook with the World Bank\'s Global Economic Prospects.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  // ==========================================
  // SUBJECT 5: GOVERNMENT SCHEMES & WELFARE ARCHITECTURE
  // ==========================================
  {
    id: 'CON-SCH-01',
    topicOrder: 54,
    topicSlug: 'public-policy-and-scheme-framework',
    topicTitle: 'Public Policy & Scheme Implementation Framework',
    topicDescription: 'Constitutional taxonomy of Indian welfare delivery, Central Sector vs Centrally Sponsored Schemes (CSS), funding ratio matrices, Single Nodal Agency (SNA) governance, and Direct Benefit Transfer (DBT) architecture.',
    subjectSlug: 'government-schemes',
    slug: 'government-schemes-classification-and-funding-architecture',
    title: 'Government Schemes Architecture: Classification, Funding Ratios & Nodal Delivery Systems',
    shortDefinition: 'The structural taxonomy of public policy schemes in India: the statutory and budgetary distinction between Central Sector Schemes (100% centrally funded) and Centrally Sponsored Schemes (CSS - Core of Core, Core, and Optional sharing models), standard Center-State funding ratios (60:40, 90:10, 100:0), the Single Nodal Agency (SNA) fund flow mechanism, and Direct Benefit Transfer (DBT) conduits.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-SCH-01-01',
        statement: 'Central Sector Schemes are funded 100% by the Central Government and directly implemented by Central Ministries or their designated nodal agencies on subjects within the Union List or national priorities.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Union Budget Expenditure Profile & Department of Expenditure Guidelines',
        excerpt: 'Central Sector schemes are 100% funded through Union budget allocation.',
      },
      {
        id: 'CLM-SCH-01-02',
        statement: 'Core Centrally Sponsored Schemes (CSS) are funded jointly by the Centre and States and implemented by State Governments, following a standard 60:40 ratio for General States, 90:10 for 8 North Eastern and 3 Himalayan States, and 100% Central funding for UTs without legislature.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NITI Aayog Sub-Group of Chief Ministers on Rationalisation of CSS (2015)',
        excerpt: 'Core schemes funding pattern: 60:40 for general states; 90:10 for NE & Himalayan states.',
      },
      {
        id: 'CLM-SCH-01-03',
        statement: 'Under the Single Nodal Agency (SNA) model notified by the Department of Expenditure in 2021, each State must designate a single bank account per CSS to ensure Just-in-Time fund release and prevent unspent balances in State treasuries.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Ministry of Finance Office Memorandum F.No. 1(8)/PFMS/FCD/2020',
        excerpt: 'SNA model ensures CSS funds are released based on actual expenditure.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Federal Matrix of Welfare Delivery in India',
        body: 'Public welfare in India operates across a federal division of powers (Seventh Schedule). Because crucial socio-economic subjects (health, agriculture, rural development, sanitation, education) fall within the **State List** or **Concurrent List**, the Union Government deploys specific fiscal transfer mechanisms to drive national welfare priorities.\n\nSchemes are classified into two broad categories:\n1. **Central Sector Schemes (CS)**: Direct Central action.\n2. **Centrally Sponsored Schemes (CSS)**: Cooperative federal partnerships.',
        order: 1,
        visibility: 'CANONICAL_FULL',
      },
      {
        type: 'CLASSIFICATION_AND_FINANCIAL_ARCHITECTURE',
        title: 'Scheme Classification, Sub-Categories & Funding Matrix',
        body: `### 1. Central Sector Schemes (100% Centre)
* **Funding:** **100% funded by Union Government**.
* **Implementation:** Direct implementation by Central Ministries, public sector enterprises, or specialized central agencies.
* **Examples:** PM-KISAN, PMMY (MUDRA), PM Vishwakarma, PLI (Production Linked Incentive) Schemes, Central Sector Scholarship Schemes.

---

### 2. Centrally Sponsored Schemes (CSS - Shared Centre-State)
Following the recommendations of the **NITI Aayog Sub-Group of Chief Ministers on Rationalisation of CSS (2015)**, CSS programs are grouped into three tiers:

| Tier | Category Name | Nature & Scope | Standard Centre : State Funding Ratio | Key Flagship Examples |
|---|---|---|---|---|
| **Tier 1** | **Core of the Core** | Indispensable statutory or social protection schemes. | **Standard: 60:40** (General States) / **90:10** (NE & Hills). 100% Central funding for designated wage components. | MGNREGS (wages 100% Centre), National Social Assistance Programme (NSAP), Umbrella Scheme for SCs/STs. |
| **Tier 2** | **Core Schemes** | Major national development programs aligned with Sustainable Development Goals (SDGs). | • **60 : 40** (General States with legislature)<br>• **90 : 10** (8 NE States + 3 Himalayan States: HP, UK, J&K)<br>• **100 : 0** (UTs without legislature) | Pradhan Mantri Awas Yojana (PMAY-G & PMAY-U), Jal Jeevan Mission, Samagra Shiksha, National Health Mission (NHM), PMGSY. |
| **Tier 3** | **Optional Schemes** | State-prioritized development interventions where states choose whether to participate. | • **50 : 50** (General States)<br>• **80 : 20** (NE & Himalayan States) | Border Area Development Programme (BADP), National River Conservation Plan. |`,
        order: 2,
        visibility: 'CANONICAL_FULL',
      },
      {
        type: 'NODAL_DELIVERY_AND_MECHANISMS',
        title: 'Modern Delivery Architecture: SNA Model & DBT Conduits',
        body: `### 1. The Single Nodal Agency (SNA) Model (2021)
* **Historic Challenge:** Prior to 2021, Central funds transferred to State Consolidated Funds often remained parked in state treasuries without reaching implementation agencies, causing tracking blindspots.
* **SNA Mechanism:** Every State Government must designate a **Single Nodal Agency (SNA)** for each CSS and open a single dedicated bank account in a commercial bank. Central releases are directly credited to this SNA account and released to implementing child agencies strictly on a **Just-In-Time (JIT)** basis upon submission of electronic Utilization Certificates (e-UCs).

### 2. Direct Benefit Transfer (DBT) via JAM Trinity
* **Mechanism:** Bypasses administrative intermediaries by routing cash subsidies directly into beneficiaries' bank accounts using the **Aadhaar Payment Bridge (APB)** system.
* **Platform:** Coordinated through the **PFMS (Public Financial Management System)** under the Controller General of Accounts (CGA), Ministry of Finance.`,
        order: 3,
        visibility: 'CANONICAL_FULL',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Top Nodal Ministry & Classification Traps',
        body: `| Scheme | Common Misconception | Correct Statutory Fact |
|---|---|---|
| **PM-KISAN** | Centrally Sponsored (60:40) | **Central Sector Scheme (100% Centre funded)** |
| **PM-KUSUM (Solar Pumps)** | Ministry of Agriculture | **Ministry of New and Renewable Energy (MNRE)** |
| **SVAMITVA (Drone Land Mapping)** | Ministry of Rural Development | **Ministry of Panchayati Raj** |
| **PM SVANidhi (Street Vendors)** | Ministry of Finance / MSME | **Ministry of Housing and Urban Affairs (MoHUA)** |
| **ONDC (Digital Commerce)** | MeitY (IT Ministry) | **DPIIT, Ministry of Commerce & Industry** |
| **BharatNet (Telecom Optical Fibre)** | MeitY | **Department of Telecommunications (DoT), Ministry of Communications** |`,
        order: 4,
        visibility: 'CANONICAL_FULL',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper II: Government Policies and Interventions for Development, Issues Arising out of their Design and Implementation',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Foundational framework tested in both Prelims and Mains.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'Paper I & III: Public Finance, Centre-State Financial Relations & State Schemes',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Crucial for understanding Rajasthan funding patterns in CSS programs.',
      },
      {
        examCode: 'iibf-dbf',
        syllabusUnit: 'Paper 1: IE&IFS - Government Welfare Schemes and Financial Transfer Mechanisms',
        relevance: 'HIGH_YIELD_PERIPHERAL',
        priority: 'MEDIUM',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Covers DBT, PFMS, and priority government accounts.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASHCARD',
        content: 'Q: What is the standard funding sharing pattern for Core Centrally Sponsored Schemes between Centre and General States vs Himalayan/NE States?\nA: 60:40 for General States; 90:10 for North Eastern and Himalayan States (HP, UK, J&K).',
        order: 1,
      },
      {
        type: 'HIGH_YIELD_SUMMARY',
        content: '• Central Sector (CS) = 100% Centre funded, Central execution (e.g. PM-KISAN, MUDRA).\n• Centrally Sponsored (CSS) = Joint funding, State execution.\n  - General States = 60:40\n  - NE & 3 Himalayan States = 90:10\n  - UTs without legislature = 100:0\n• SNA Model = Single bank account per CSS per State to eliminate idle treasury float.',
        order: 2,
      },
    ],
    questions: [
      {
        type: 'MCQ_SINGLE',
        stem: 'Which of the following is a Central Sector Scheme (100% funded by the Central Government)?',
        options: [
          'Pradhan Mantri Awas Yojana - Gramin (PMAY-G)',
          'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
          'National Health Mission (NHM)',
          'Jal Jeevan Mission (JJM)',
        ],
        correctAnswer: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
        explanation: 'PM-KISAN is a 100% Central Sector Scheme. PMAY-G, NHM, and Jal Jeevan Mission are Centrally Sponsored Schemes funded on a 60:40 ratio (90:10 for NE/Hills).',
        trapExplanation: 'Candidates frequently mistake agricultural income transfers (PM-KISAN) for a shared Centrally Sponsored Scheme.',
        difficulty: 'MODERATE',
        isPYQ: false,
      },
    ],
  },

  {
    id: 'CON-SCH-02',
    topicOrder: 55,
    topicSlug: 'financial-inclusion-and-enterprise-schemes',
    topicTitle: 'Financial Inclusion, Social Security & Enterprise Schemes',
    topicDescription: 'Universal banking access, low-cost term life insurance, accidental disability coverage, and guaranteed pension architecture under the Jan Dhan-Aadhaar-Mobile (JAM) ecosystem.',
    subjectSlug: 'government-schemes',
    slug: 'core-financial-inclusion-and-social-security-schemes',
    title: 'Core Financial Inclusion & Social Security Schemes: PMJDY, PMJJBY, PMSBY & Atal Pension Yojana',
    shortDefinition: 'The statutory framework and operational parameters of India\'s core universal social security safety net: Pradhan Mantri Jan Dhan Yojana (PMJDY - zero-balance banking and overdraft), Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY - ₹2 Lakh life insurance at ₹436/year), Pradhan Mantri Suraksha Bima Yojana (PMSBY - ₹2 Lakh accidental cover at ₹20/year), and Atal Pension Yojana (APY - guaranteed pension of ₹1,000–₹5,000/month).',
    difficulty: 'FOUNDATIONAL',
    claims: [
      {
        id: 'CLM-SCH-02-01',
        statement: 'Pradhan Mantri Jan Dhan Yojana (PMJDY) provides Basic Savings Bank Deposit (BSBD) accounts with zero minimum balance, an Overdraft (OD) facility up to ₹10,000 (for ages 18–65), and a RuPay Debit Card with ₹2 Lakh accidental insurance cover.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Department of Financial Services (DFS) PMJDY Guidelines',
        excerpt: 'PMJDY OD limit ₹10,000; RuPay accident cover ₹2 Lakh for accounts opened after Aug 2018.',
      },
      {
        id: 'CLM-SCH-02-02',
        statement: 'Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY) offers a one-year renewable life insurance cover of ₹2 Lakh for death due to any cause to individuals aged 18–50 years at an annual premium of ₹436.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'DFS Notification on Revised PMJJBY Premium Rates',
        excerpt: 'PMJJBY age 18-50, annual premium ₹436, ₹2 Lakh life cover.',
      },
      {
        id: 'CLM-SCH-02-03',
        statement: 'Pradhan Mantri Suraksha Bima Yojana (PMSBY) provides accidental death and full disability insurance cover of ₹2 Lakh (and ₹1 Lakh for partial disability) to individuals aged 18–70 years at an annual premium of ₹20.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'DFS Notification on Revised PMSBY Premium Rates',
        excerpt: 'PMSBY age 18-70, annual premium ₹20, ₹2 Lakh accident cover.',
      },
      {
        id: 'CLM-SCH-02-04',
        statement: 'Atal Pension Yojana (APY) provides a guaranteed monthly pension of ₹1,000 to ₹5,000 from age 60 for unorganized sector workers entering between ages 18–40; since October 1, 2022, income-tax payers are legally barred from enrolling in APY.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'PFRDA (Atal Pension Yojana) Regulations & MoF Gazette Notification August 2022',
        excerpt: 'From Oct 1, 2022, any citizen who is or has been an income-tax payer is not eligible to join APY.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Universal Financial Safety Net Ecosystem',
        body: 'Launched by the Ministry of Finance (Department of Financial Services), the Jan Dhan-Aadhaar-Mobile (**JAM Trinity**) and social security triad transform unorganized citizens from unbanked, uninsured, and unpensioned vulnerability into formal institutional participants.\n\nMastering these flagship programs requires precise command over **eligibility ages, premium figures, benefit thresholds, and recent regulatory amendments**.',
        order: 1,
        visibility: 'CANONICAL_FULL',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Core Social Security Schemes Matrix',
        body: `### 1. Pradhan Mantri Jan Dhan Yojana (PMJDY)
* **Launch Date:** August 28, 2014 | **Nodal Department:** DFS, Ministry of Finance.
* **Core Entitlements:**
  - Zero minimum balance BSBD account without fee penalties.
  - **RuPay Debit Card:** Built-in **₹2 Lakh accidental insurance cover** (for cards issued to accounts opened after 28.08.2018; ₹1 Lakh earlier) provided the card was used at least once in 90 days.
  - **Overdraft (OD) Facility:** Up to **₹10,000** per eligible adult household member (age 18–65 years). Overdraft up to ₹2,000 requires no conditions.

---

### 2. Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY - Life Cover)
* **Launch Date:** May 9, 2015 | **Administered by:** LIC and other life insurers via banks.
* **Eligible Age Group:** **18 to 50 years** (Coverage continues up to age 55 provided premium is paid).
* **Benefit Amount:** **₹2,00,000** on death of the insured due to **ANY cause** (natural, accidental, disease).
* **Premium:** **₹436 per annum** per subscriber (auto-debited from bank account in May/June).

---

### 3. Pradhan Mantri Suraksha Bima Yojana (PMSBY - Accident Cover)
* **Launch Date:** May 9, 2015 | **Administered by:** General insurance companies via banks.
* **Eligible Age Group:** **18 to 70 years**.
* **Benefit Amount:**
  - **₹2,00,000** for accidental death or permanent total disability (loss of both eyes/hands/feet).
  - **₹1,00,000** for permanent partial disability (loss of one eye/hand/foot).
* **Premium:** **₹20 per annum** per subscriber (auto-debited).

---

### 4. Atal Pension Yojana (APY - Guaranteed Old-Age Pension)
* **Launch Date:** May 9, 2015 | **Regulator:** PFRDA.
* **Target Audience:** Unorganized sector workers.
* **Entry Age:** **18 to 40 years** (requires minimum 20 years of active contribution before age 60).
* **Pension Slabs:** Guaranteed monthly pension of **₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000** starting at age 60 for life.
* **Spouse & Nominee Protection:** On subscriber's demise, exact same pension is paid to spouse for life; on demise of both, total accumulated corpus is returned to the nominee.
* **Income Tax Payer Exclusion (Landmark 2022 Amendment):** Effective **October 1, 2022**, any citizen who is or has been an **income-tax payer** under the Income-tax Act, 1961 is **NOT eligible** to join APY.`,
        order: 2,
        visibility: 'CANONICAL_FULL',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Trap Analysis in Financial Inclusion Schemes',
        body: `1. **PMJJBY vs PMSBY Confusion:**
   - **PMJJBY:** Age **18–50**, Premium **₹436/yr**, covers **ANY CAUSE OF DEATH (Life Insurance)**.
   - **PMSBY:** Age **18–70**, Premium **₹20/yr**, covers **ACCIDENTS & DISABILITY ONLY**.
2. **APY Age Upper Limit Trap:** The maximum entry age for APY is **40 years** (NOT 50 or 60), because the scheme requires a minimum contribution duration of 20 years before the pension matures at age 60.
3. **APY Taxpayer Exclusion:** In UPSC/Banking MCQs, options stating "Any Indian citizen aged 18-40 can join APY" are now **INCORRECT** unless they explicitly qualify "non-income-tax payers".`,
        order: 3,
        visibility: 'CANONICAL_FULL',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper II & III: Social Justice, Welfare Schemes for Vulnerable Sections, Inclusive Growth',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Core financial inclusion safety net tested regularly.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'Paper I: Social Sector Development, Financial Inclusion & Pension Schemes',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'High-yield for 2-mark and 5-mark factual questions.',
      },
      {
        examCode: 'iibf-dbf',
        syllabusUnit: 'Paper 2 & 4: PPB & RBWM - Government Sponsored Financial Inclusion Schemes',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Mandatory exam questions on PMJDY, PMJJBY, PMSBY, and APY.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASHCARD',
        content: 'Q: What are the age eligibility brackets and annual premiums for PMJJBY and PMSBY?\nA: PMJJBY = 18–50 years, ₹436/yr. PMSBY = 18–70 years, ₹20/yr.',
        order: 1,
      },
      {
        type: 'HIGH_YIELD_SUMMARY',
        content: '• PMJDY: ₹10,000 Overdraft (18-65 yrs), ₹2 Lakh RuPay accidental cover.\n• PMJJBY: Life cover ₹2 Lakh (any death), 18-50 yrs, ₹436/yr.\n• PMSBY: Accidental cover ₹2 Lakh, 18-70 yrs, ₹20/yr.\n• APY: ₹1k–₹5k/mo pension from age 60, entry age 18-40 yrs (Income tax payers barred since Oct 2022).',
        order: 2,
      },
    ],
    questions: [
      {
        type: 'MCQ_SINGLE',
        stem: 'With reference to the Atal Pension Yojana (APY), which of the following statements is correct?',
        options: [
          'The maximum entry age to join the scheme is 50 years.',
          'Income-tax payers are eligible to join the scheme if their income is below ₹10 Lakh.',
          'The minimum guaranteed monthly pension ranges between ₹1,000 and ₹5,000 per month from age 60.',
          'The scheme is administered by the Reserve Bank of India.',
        ],
        correctAnswer: 'The minimum guaranteed monthly pension ranges between ₹1,000 and ₹5,000 per month from age 60.',
        explanation: 'APY guarantees a monthly pension of ₹1,000 to ₹5,000 from age 60. The entry age is 18–40 years (not 50). Income-tax payers are completely barred since Oct 1, 2022. It is administered by PFRDA (not RBI).',
        trapExplanation: 'Candidates often forget that PFRDA administers APY and that tax payers are excluded regardless of tax slab.',
        difficulty: 'MODERATE',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-SCH-03',
    topicOrder: 55,
    topicSlug: 'financial-inclusion-and-enterprise-schemes',
    topicTitle: 'Financial Inclusion, Social Security & Enterprise Schemes',
    topicDescription: 'Collateral-free institutional credit delivery to micro-enterprises, traditional artisans, and informal street vendors under MUDRA, PM SVANidhi, and PM Vishwakarma.',
    subjectSlug: 'government-schemes',
    slug: 'micro-enterprise-and-street-vendor-credit-frameworks',
    title: 'Micro-Enterprise & Street Vendor Credit Frameworks: PMMY MUDRA, PM SVANidhi & PM Vishwakarma',
    shortDefinition: 'A comparative statutory and financial analysis of institutional micro-credit delivery: Pradhan Mantri MUDRA Yojana (PMMY - Shishu, Kishore, Tarun, and the Budget 2024–25 Tarun Plus category up to ₹20 Lakh), PM SVANidhi (MoHUA street vendor credit up to ₹50,000 with 7% interest subsidy), and PM Vishwakarma (₹13,000 Crore scheme for 18 traditional trades with ₹3 Lakh collateral-free credit at 5% interest and toolkit support).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-SCH-03-01',
        statement: 'Pradhan Mantri MUDRA Yojana (PMMY) provides collateral-free institutional refinancing for non-corporate small business loans across four tiers: Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 Lakh), Tarun (₹5 Lakh to ₹10 Lakh), and Tarun Plus (₹10 Lakh to ₹20 Lakh for prompt repayers).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Union Budget 2024-25 Speech & DFS Notification on PMMY Tarun Plus',
        excerpt: 'MUDRA loan limit enhanced from ₹10 lakh to ₹20 lakh under Tarun Plus category.',
      },
      {
        id: 'CLM-SCH-03-02',
        statement: 'PM SVANidhi is a Central Sector Scheme administered by the Ministry of Housing and Urban Affairs (MoHUA) through SIDBI, providing collateral-free working capital micro-credit to urban street vendors in three tranches (₹10,000, ₹20,000, and ₹50,000) with a 7% per annum interest subsidy.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'MoHUA PM SVANidhi Scheme Guidelines',
        excerpt: 'PM SVANidhi under MoHUA provides 1st tranche ₹10k, 2nd tranche ₹20k, 3rd tranche ₹50k with 7% interest subsidy.',
      },
      {
        id: 'CLM-SCH-03-03',
        statement: 'PM Vishwakarma is a Central Sector Scheme (outlay ₹13,000 Crore) covering 18 traditional artisan and craftsman trades, providing skill training with a ₹500/day stipend, a ₹15,000 toolkit e-voucher, and collateral-free enterprise credit up to ₹3 Lakh (Tranche 1: ₹1 Lakh, Tranche 2: ₹2 Lakh) at a concessional interest rate of 5%.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Ministry of MSME PM Vishwakarma Operational Guidelines',
        excerpt: 'PM Vishwakarma covers 18 trades, ₹15,000 toolkit incentive, ₹3 Lakh loan at 5% interest.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Democratizing Formal Enterprise Credit',
        body: 'Historically, micro-enterprises, street vendors, and traditional artisans were trapped in exploitative informal credit cycles due to lack of physical collateral, credit histories, and banking access.\n\nThrough government-backed **credit guarantee mechanisms, interest subventions, and graduated loan tranches**, PMMY, PM SVANidhi, and PM Vishwakarma enable banks to lend collateral-free to the bottom of the economic pyramid.',
        order: 1,
        visibility: 'CANONICAL_FULL',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Comparative Framework of Enterprise Credit Schemes',
        body: `### 1. Pradhan Mantri MUDRA Yojana (PMMY)
* **Launch Date:** April 8, 2015 | **Nodal Agency:** MUDRA Ltd. (wholly-owned subsidiary of SIDBI).
* **Institutional Architecture:** MUDRA does **NOT lend directly to individuals**; it refinances Commercial Banks, RRBs, Small Finance Banks, and NBFC-MFIs. Loans are covered under the **Credit Guarantee Fund for Micro Units (CGFMU)**.
* **Loan Categories:**
  1. **Shishu:** Loans up to **₹50,000** (for initial setup/seed requirements).
  2. **Kishore:** Loans from **₹50,001 to ₹5,00,000** (for business expansion).
  3. **Tarun:** Loans from **₹5,00,001 to ₹10,00,000** (for established micro units).
  4. **Tarun Plus (Budget 2024–25 Enhancement):** Loans from **₹10,00,001 to ₹20,00,000** for entrepreneurs who have availed and successfully repaid previous loans under the Tarun category.

---

### 2. PM SVANidhi (PM Street Vendor's AtmaNirbhar Nidhi)
* **Launch Date:** June 1, 2020 | **Nodal Ministry:** **Ministry of Housing and Urban Affairs (MoHUA)** | **Implementation Partner:** SIDBI.
* **Target Beneficiaries:** Urban street vendors vending on or before March 24, 2020.
* **Graduated Working Capital Tranches:**
  - **1st Tranche:** Up to **₹10,000** (1-year tenure, collateral-free).
  - **2nd Tranche:** Up to **₹20,000** (eligible upon timely/early repayment of 1st tranche).
  - **3rd Tranche:** Up to **₹50,000** (eligible upon timely/early repayment of 2nd tranche).
* **Incentives:**
  - **Interest Subsidy:** **7% per annum** credited quarterly directly into the borrower's bank account through DBT.
  - **Digital Cashback:** Up to **₹1,200 per annum** (₹100/month) for conducting digital transactions.

---

### 3. PM Vishwakarma Scheme
* **Launch Date:** September 17, 2023 | **Outlay:** **₹13,000 Crore** (FY24 to FY28).
* **Joint Nodal Ministries:** Ministry of MSME (Nodal), Ministry of Skill Development and Entrepreneurship (MSDE), Department of Financial Services (DFS).
* **Coverage:** **18 Traditional Trades** (Carpenters, Boat Makers, Blacksmiths, Hammer/Tool Kit Makers, Locksmiths, Sculptors/Stone Carvers, Goldsmiths, Potters, Cobblers, Masons, Basket/Mat/Broom Makers, Doll/Toy Makers, Barbers, Garland Makers, Washermen, Tailors, Fishing Net Makers).
* **Three-Pillar Support Package:**
  1. **Recognition & Skill Development:** PM Vishwakarma Certificate & ID Card; Basic Training (5–7 days) and Advanced Training (15 days) with a **₹500/day stipend**.
  2. **Toolkit Incentive:** **₹15,000 e-voucher** provided on skill verification.
  3. **Enterprise Credit Support:** Collateral-free enterprise development loan up to **₹3,00,000** in two tranches:
     - **Tranche 1:** Up to **₹1,00,000** (18-month tenure).
     - **Tranche 2:** Up to **₹2,00,000** (30-month tenure, available after standard performance on Tranche 1).
     - **Concessional Interest:** Fixed at **5% per annum** (Ministry of MSME subvents up to 8% interest to banks).`,
        order: 2,
        visibility: 'CANONICAL_FULL',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Master Trap Table in Enterprise Schemes',
        body: `1. **MUDRA Direct Lending Myth:** MUDRA is an NBFC refinancing institution, NOT a direct retail lender.
2. **PM SVANidhi Nodal Ministry:** A classic exam trap: candidates assume street vendor loans belong to the Ministry of Finance or MSME; it is strictly governed by **MoHUA (Housing & Urban Affairs)**.
3. **PM Vishwakarma Loan Limit vs MUDRA:** PM Vishwakarma provides up to **₹3 Lakh** at 5% interest across 2 tranches (₹1L + ₹2L), whereas MUDRA Shishu is up to ₹50k, Kishore up to ₹5L, Tarun up to ₹10L, and Tarun Plus up to ₹20L.`,
        order: 3,
        visibility: 'CANONICAL_FULL',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper III: Indian Economy - Micro Enterprises, Informal Sector, Employment Generation',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Crucial for both Prelims and Mains questions on informal economy formalization.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'Paper I: MSME Policy, Cottage & Traditional Industries, Street Vendor Programs',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'High-frequency area in RAS Mains economic development questions.',
      },
      {
        examCode: 'iibf-dbf',
        syllabusUnit: 'Paper 2 & 4: PPB & RBWM - MSME Financing, Priority Sector Credit, MUDRA & SVANidhi',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Core syllabus area with mandatory numerical and operational MCQs.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASHCARD',
        content: 'Q: What are the loan limits for MUDRA Shishu, Kishore, Tarun, and Tarun Plus?\nA: Shishu ≤ ₹50,000; Kishore = ₹50,001 to ₹5 Lakh; Tarun = ₹5,00,001 to ₹10 Lakh; Tarun Plus = ₹10,00,001 to ₹20 Lakh.',
        order: 1,
      },
      {
        type: 'HIGH_YIELD_SUMMARY',
        content: '• PMMY: Refinance via SIDBI/CGFMU (Shishu ₹50k, Kishore ₹5L, Tarun ₹10L, Tarun Plus ₹20L).\n• PM SVANidhi: MoHUA + SIDBI; 3 tranches (₹10k, ₹20k, ₹50k) with 7% interest subsidy.\n• PM Vishwakarma: 18 trades, ₹500/day stipend, ₹15,000 toolkit voucher, ₹3 Lakh loan at 5% interest (Tranche 1: ₹1L, Tranche 2: ₹2L).',
        order: 2,
      },
    ],
    questions: [
      {
        type: 'MCQ_SINGLE',
        stem: 'Which Ministry is the nodal authority for the implementation of the PM SVANidhi scheme for urban street vendors?',
        options: [
          'Ministry of Finance',
          'Ministry of Micro, Small and Medium Enterprises (MSME)',
          'Ministry of Housing and Urban Affairs (MoHUA)',
          'Ministry of Rural Development',
        ],
        correctAnswer: 'Ministry of Housing and Urban Affairs (MoHUA)',
        explanation: 'PM SVANidhi is administered by the Ministry of Housing and Urban Affairs (MoHUA) in partnership with SIDBI.',
        trapExplanation: 'Candidates frequently select Ministry of Finance or MSME due to the banking credit nature of the scheme.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-SCH-04',
    topicOrder: 56,
    topicSlug: 'rural-development-and-employment-guarantees',
    topicTitle: 'Rural Development, Agriculture & Employment Guarantees',
    topicDescription: 'Women Self-Help Group (SHG) mobilization, revolving funds, interest subvention mechanics, CGFMU collateral relaxations, and rural livelihood generation under DAY-NRLM.',
    subjectSlug: 'government-schemes',
    slug: 'rural-livelihood-and-self-help-group-credit',
    title: 'Rural Livelihood & Self-Help Group Credit: DAY-NRLM, Interest Subvention & CGFMU Architecture',
    shortDefinition: 'The institutional framework of Deendayal Antyodaya Yojana - National Rural Livelihoods Mission (DAY-NRLM): women SHG mobilization, Panchasutra discipline, Revolving Fund (₹20,000–₹30,000), Community Investment Fund, Interest Subvention Scheme (delivering credit at 7% p.a. with 4.5% subvention up to ₹3 Lakh), RBI collateral relaxation up to ₹20 Lakh under CGFMU, and the Lakhpati Didi mandate.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-SCH-04-01',
        statement: 'DAY-NRLM operates an Interest Subvention Scheme that delivers credit to women Self-Help Groups (SHGs) at an effective rate of 7% per annum for loans up to ₹3 Lakh, with the Central Government providing up to 4.5% interest subvention to lending banks.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Circular on DAY-NRLM Interest Subvention Scheme',
        excerpt: 'Interest subvention of 4.5% provides credit at 7% to SHGs for loans up to ₹3 Lakh.',
      },
      {
        id: 'CLM-SCH-04-02',
        statement: 'Under RBI regulations and CGFMU guidelines, no collateral and no margin is required for loans to women SHGs up to ₹10 Lakh, and no collateral is demanded for loans from ₹10 Lakh to ₹20 Lakh (covered under CGFMU guarantee with max 10% margin).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Directions - Priority Sector Lending & DAY-NRLM Credit Guidelines',
        excerpt: 'No collateral for SHG loans up to ₹20 Lakh; CGFMU covers ₹10L-₹20L bracket.',
      },
      {
        id: 'CLM-SCH-04-03',
        statement: 'The Lakhpati Didi initiative under DAY-NRLM aims to economically empower 3 Crore rural women SHG members to earn a sustainable annual household income of at least ₹1 Lakh through diversified livelihood activities.',
        claimType: 'POLICY_MANDATE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Ministry of Rural Development Lakhpati Didi Mission Document',
        excerpt: 'Target to create 3 Crore Lakhpati Didis across rural SHGs.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Women SHGs as the Cornerstone of Rural Transformation',
        body: 'Deendayal Antyodaya Yojana - National Rural Livelihoods Mission (**DAY-NRLM**), launched in 2011 by the Ministry of Rural Development, organizes rural poor women into democratic, self-managed Self-Help Groups (SHGs) and federations.\n\nIt replaces old capital subsidy models (like SGSY) with **continuous institutional credit linkage, interest subvention, and capacity building**.',
        order: 1,
        visibility: 'CANONICAL_FULL',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Institutional & Financial Architecture of DAY-NRLM',
        body: `### 1. Community Institution Hierarchy & Panchasutra
* **The Panchasutra (Five Golden Principles):**
  1. Regular weekly meetings.
  2. Regular internal savings.
  3. Regular internal lending among members.
  4. Timely repayment of loans.
  5. Up-to-date maintenance of books of accounts.
* **Community Capitalization Support:**
  - **Revolving Fund (RF):** **₹20,000 to ₹30,000** per eligible SHG (practicing Panchasutra for 3–6 months) to establish financial management habits. (Note: No upfront capital subsidy is given).
  - **Community Investment Support Fund (CIF):** Up to **₹1.5 Lakh** per SHG routed through Village Organizations (VOs) as a loan to support livelihood investments.

---

### 2. Credit Linkage & Interest Subvention Scheme (ISS)
* **Loans up to ₹3 Lakh:**
  - Banks lend to SHGs at **7% per annum**.
  - Central Government subvents the difference between the bank's weighted average lending rate and 7% (subject to a **maximum subvention of 4.5%**).
  - In 250 Category-I (backward/intensive) districts, an additional **3% subvention** is given for prompt repayment, reducing the effective interest rate to **4% per annum**.
* **Loans above ₹3 Lakh and up to ₹5 Lakh:**
  - Banks lend at their benchmark rate; Central Government provides a flat **5% per annum interest subvention** to lower borrowing costs.

---

### 3. Collateral-Free Credit & Guarantee Thresholds
* **Loans up to ₹10 Lakh:** **Zero collateral and zero margin** required by banks under RBI Master Directions.
* **Loans above ₹10 Lakh and up to ₹20 Lakh:**
  - **Zero physical collateral** required.
  - Credit is backed by the **Credit Guarantee Fund for Micro Units (CGFMU)**.
  - Maximum **10% margin** applicable strictly on the portion exceeding ₹10 Lakh.

---

### 4. The Lakhpati Didi Initiative
* **Target:** Empower **3 Crore rural SHG women** across India to achieve a sustained net household income of **≥ ₹1,00,000 per year** (averaging ₹10,000+ per month).
* **Strategy:** Convergence of micro-credit, value-chain partnerships, drone operations (Namo Drone Didi), agri-nutri hubs, and digital marketing.`,
        order: 2,
        visibility: 'CANONICAL_FULL',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Key Exam Traps in DAY-NRLM',
        body: `1. **Subsidy vs Credit Subvention:** DAY-NRLM is NOT a capital subsidy program. Revolving Fund (RF) is seed capital; interest subvention (4.5% to bring rate to 7%) is an operational subsidy.
2. **Collateral Limits (₹10L vs ₹20L):** No collateral is demanded up to **₹20 Lakh** (CGFMU covers ₹10L–₹20L; zero margin up to ₹10L, max 10% margin on the excess).
3. **Nodal Ministry:** Strictly **Ministry of Rural Development (MoRD)**.`,
        order: 3,
        visibility: 'CANONICAL_FULL',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper II & III: SHGs, Microfinance, Rural Development & Women Empowerment',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Directly tested in Mains GS-2/3 and Prelims economy/schemes.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'Paper I & III: Rural Development, SHG Federations, Women Empowerment in Rajasthan',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Highly relevant for Rajivika (Rajasthan Grameen Aajeevika Vikas Parishad).',
      },
      {
        examCode: 'iibf-dbf',
        syllabusUnit: 'Paper 1 & 2: Priority Sector Lending to SHGs & NRLM Master Circulars',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Mandatory questions on subvention rates and CGFMU guarantee caps.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASHCARD',
        content: 'Q: What is the collateral-free loan ceiling for women SHGs under DAY-NRLM?\nA: Up to ₹20 Lakh (Zero collateral; CGFMU guarantee cover applies between ₹10L and ₹20L).',
        order: 1,
      },
      {
        type: 'HIGH_YIELD_SUMMARY',
        content: '• DAY-NRLM (MoRD): Panchasutra, Revolving Fund (₹20k–₹30k), Community Investment Fund (up to ₹1.5L).\n• Interest Subvention: Loans ≤ ₹3L at 7% p.a. (4.5% Govt subvention; 4% in Category-I districts on prompt repayment).\n• Collateral: No collateral up to ₹20 Lakh (CGFMU).\n• Lakhpati Didi: 3 Crore women earning ≥ ₹1 Lakh/yr.',
        order: 2,
      },
    ],
    questions: [
      {
        type: 'MCQ_SINGLE',
        stem: 'Under the revised guidelines for DAY-NRLM, what is the maximum collateral-free loan limit available to women Self-Help Groups (backed by CGFMU)?',
        options: ['₹5 Lakh', '₹10 Lakh', '₹20 Lakh', '₹50 Lakh'],
        correctAnswer: '₹20 Lakh',
        explanation: 'Under RBI guidelines and CGFMU framework, no collateral is required for loans to women SHGs up to ₹20 Lakh (with CGFMU guarantee covering the ₹10L–₹20L slab).',
        trapExplanation: 'Candidates often select ₹10 Lakh because that was the old ceiling prior to the RBI/CGFMU enhancement to ₹20 Lakh.',
        difficulty: 'MODERATE',
        isPYQ: false,
      },
    ],
  },

  {
    id: 'CON-SCH-05',
    topicOrder: 56,
    topicSlug: 'rural-development-and-employment-guarantees',
    topicTitle: 'Rural Development, Agriculture & Employment Guarantees',
    topicDescription: 'Statutory employment guarantee under MGNREGA 2005, agricultural direct income transfers under PM-KISAN, and comprehensive crop insurance under PMFBY.',
    subjectSlug: 'government-schemes',
    slug: 'employment-guarantee-and-agricultural-income-support',
    title: 'Employment Guarantee & Agricultural Income Support: MGNREGA 2005, PM-KISAN & PMFBY',
    shortDefinition: 'The legal and financial architecture of India’s rural safety nets: the statutory framework of the Mahatma Gandhi National Rural Employment Guarantee Act, 2005 (MGNREGA - legal entitlement to 100 days of wage employment per household, 15-day work guarantee, and Section 7 unemployment allowance), direct agricultural income transfers under PM-KISAN (₹6,000/year in 3 installments), and multi-peril crop insurance under PMFBY (capped farmer premiums: 2% Kharif, 1.5% Rabi, 5% Commercial).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-SCH-05-01',
        statement: 'MGNREGA 2005 legally guarantees at least 100 days of unskilled manual wage employment in every financial year to every rural household whose adult members volunteer to do unskilled manual work.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Mahatma Gandhi National Rural Employment Guarantee Act, 2005 (Act No. 42 of 2005), Section 3',
        excerpt: 'Guarantee of 100 days of wage employment in a financial year to every household.',
      },
      {
        id: 'CLM-SCH-05-02',
        statement: 'Under Section 7 of MGNREGA 2005, if an applicant is not provided employment within 15 days of submitting their application, they are entitled to a statutory daily Unemployment Allowance paid by the State Government (not less than 25% of the wage rate for the first 30 days, and not less than 50% thereafter).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'MGNREGA 2005, Section 7(1) & (2)',
        excerpt: 'Unemployment allowance payable if employment not provided within fifteen days.',
      },
      {
        id: 'CLM-SCH-05-03',
        statement: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a 100% Central Sector Scheme providing direct income support of ₹6,000 per year in three equal installments of ₹2,000 every four months to all landholding farmer families via DBT.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Ministry of Agriculture & Farmers Welfare PM-KISAN Operational Guidelines',
        excerpt: '₹6,000 per year payable in three 4-monthly installments of ₹2,000 each.',
      },
      {
        id: 'CLM-SCH-05-04',
        statement: 'Pradhan Mantri Fasal Bima Yojana (PMFBY) caps the insurance premium payable by farmers at 2.0% for all Kharif foodgrain/oilseed crops, 1.5% for all Rabi crops, and 5.0% for Annual Commercial and Horticultural crops, with the remaining actuarial premium shared equally by Centre and States.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Ministry of Agriculture Revised Operational Guidelines on PMFBY',
        excerpt: 'Maximum premium payable by farmers: 2% Kharif, 1.5% Rabi, 5% annual horticultural/commercial.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Statutory Entitlement vs Sovereign Income Support',
        body: 'Rural resilience in India rests on two complementary pillars:\n1. **Rights-Based Legal Entitlements:** **MGNREGA 2005** legally empowers rural citizens with an enforceable statutory right to work.\n2. **Direct Financial Transfers & Risk Mitigation:** **PM-KISAN** (universal income support) and **PMFBY** (subsidized yield insurance) insulate agricultural households against price and weather shocks.',
        order: 1,
        visibility: 'CANONICAL_FULL',
      },
      {
        type: 'STATUTORY_MGNREGA_FRAMEWORK',
        title: 'Statutory Architecture of MGNREGA 2005',
        body: `### 1. Legal Pillars & Key Statutory Features
* **Statutory Basis:** Enacted under Article 41 of the Constitution (Right to Work) as **Act No. 42 of 2005**.
* **Household vs Individual:** The guarantee is **100 days per rural HOUSEHOLD** (NOT per individual), shared among adult members volunteering for unskilled manual labor.
* **Drought / Disaster Extension:** Central Government may notify an additional **50 days** (total 150 days) in drought or disaster-affected rural areas.
* **The 15-Day Rule & Unemployment Allowance (Section 7):**
  - Employment must be provided within **15 days** of application.
  - If the State fails to provide work within 15 days, it must pay a daily **Unemployment Allowance**:
    - **First 30 days:** Not less than **1/4th (25%)** of the statutory wage rate.
    - **Beyond 30 days:** Not less than **1/2 (50%)** of the statutory wage rate.
* **Worksite Distance:** Work must be within a **5 km radius** of the applicant's residence; if beyond 5 km, an additional **10% wage** is mandatory to cover transport and living expenses.
* **Wage-to-Material Ratio:** Strict **60:40 ratio** (60% labor wages, 40% material costs) must be maintained at the Gram Panchayat / Block level.
* **Gender Inclusivity:** At least **one-third (33%)** of beneficiaries must be women; equal wages for men and women are legally mandatory.
* **Social Audit (Section 17):** Mandatory periodic social audit conducted by the **Gram Sabha**.`,
        order: 2,
        visibility: 'CANONICAL_FULL',
      },
      {
        type: 'AGRICULTURAL_SAFETY_NETS',
        title: 'Flagship Agricultural Support: PM-KISAN & PMFBY',
        body: `### 1. PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)
* **Launch Date:** February 24, 2019 (effective retrospectively from Dec 1, 2018).
* **Funding:** **100% Central Sector Scheme** (Ministry of Agriculture & Farmers Welfare).
* **Benefit Amount:** **₹6,000 per financial year** paid directly via DBT in **3 equal installments of ₹2,000** every 4 months (April–July, August–November, December–March).
* **Eligibility:** All landholding farmer families with cultivable landholdings in their names (subject to structural exclusions: institutional landholders, holding constitutional posts, serving/retired government employees, income tax payers, professionals).

---

### 2. PMFBY (Pradhan Mantri Fasal Bima Yojana)
* **Launch Date:** February 18, 2016 (replaced NAIS & Modified NAIS) | **Nodal Ministry:** Ministry of Agriculture & Farmers Welfare.
* **Uniform Subsidized Premium Slabs for Farmers:**
  - **Kharif Crops (Foodgrains & Oilseeds):** **2.0%** of sum insured.
  - **Rabi Crops (Foodgrains & Oilseeds):** **1.5%** of sum insured.
  - **Commercial & Horticultural Crops:** **5.0%** of sum insured.
* **Subsidy Sharing:** The remaining balance between actuarial premium and farmer's share is shared **50:50** between Centre and State (**90:10** for North-Eastern States).
* **Risk Coverage:** Comprehensive coverage from pre-sowing (prevented sowing), localized post-harvest losses, mid-season adversity, to post-harvest perils up to 14 days (cyclones, unseasonal rains).`,
        order: 3,
        visibility: 'CANONICAL_FULL',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Master Traps in Rural & Agricultural Schemes',
        body: `1. **Fictional Replacement Trap:** Be vigilant against unverified coaching materials or raw notes claiming "VB-G RAM G Act 2025 repealed MGNREGA". MGNREGA 2005 remains the active statutory law in India.
2. **Household vs Person:** MGNREGA provides 100 days per **household**, NOT per person.
3. **PMFBY Premium Numbers:** UPSC and Banking exams frequently swap the 2.0% (Kharif) and 1.5% (Rabi) numbers, or claim horticultural crops are 10% (correct: 5.0%).
4. **PM-KISAN Scheme Type:** PM-KISAN is a **Central Sector Scheme (100% Centre)**; it is NOT shared 60:40 with States.`,
        order: 4,
        visibility: 'CANONICAL_FULL',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper II & III: Welfare Schemes, Agricultural Subsidies, Rural Employment & Food Security',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Perennial topic in UPSC Prelims and Mains GS-2/3.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'Paper I & III: Rural Development Programs, MGNREGA Implementation, Agricultural Insurance in Rajasthan',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Crucial for RAS questions on rural wages and drought relief.',
      },
      {
        examCode: 'iibf-dbf',
        syllabusUnit: 'Paper 1 & 2: Agricultural Credit, PM-KISAN Direct Transfers & Crop Insurance (PMFBY)',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Standard banking operations syllabus.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASHCARD',
        content: 'Q: What are the statutory MGNREGA unemployment allowance rates if work is not given within 15 days?\nA: First 30 days = min 25% of wage rate; Beyond 30 days = min 50% of wage rate.',
        order: 1,
      },
      {
        type: 'HIGH_YIELD_SUMMARY',
        content: '• MGNREGA 2005: 100 days/household/yr, 15-day guarantee, Sec 7 unemployment allowance (25%/50%), 5 km radius (+10% wage if exceeded), 60:40 wage:material ratio.\n• PM-KISAN: ₹6,000/yr in 3 installments of ₹2,000 (100% Central Sector Scheme).\n• PMFBY: Farmer premium = 2% Kharif, 1.5% Rabi, 5% Commercial/Horticultural.',
        order: 2,
      },
    ],
    questions: [
      {
        type: 'MCQ_SINGLE',
        stem: 'Under the Pradhan Mantri Fasal Bima Yojana (PMFBY), what is the maximum uniform insurance premium payable by farmers for Rabi foodgrain and oilseed crops?',
        options: ['1.0%', '1.5%', '2.0%', '5.0%'],
        correctAnswer: '1.5%',
        explanation: 'Under PMFBY, the maximum premium payable by farmers is 1.5% for Rabi crops, 2.0% for Kharif crops, and 5.0% for Annual Commercial/Horticultural crops.',
        trapExplanation: 'Candidates often confuse the 1.5% Rabi premium with the 2.0% Kharif premium.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },
];

export async function seedBatchGASchemesCanonicalKnowledge() {
  console.log(`Seeding Static GA & Government Schemes Canonical Knowledge (8 concepts)...`);

  // 1. Ensure Exams exist
  const upsc = await db.exam.upsert({
    where: { slug: 'upsc-cse' },
    update: {},
    create: {
      slug: 'upsc-cse',
      name: 'UPSC Civil Services Examination',
      conductingBody: 'Union Public Service Commission',
      description: 'National civil services examination.',
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
    'upsc-cse': upsc.id,
    'rpsc-ras': rpsc.id,
    'iibf-dbf': iibf.id,
  };

  // 2. Ensure Sources exist
  const sourceGA = await db.source.upsert({
    where: { id: 'SRC-STATIC-GA-MASTER-2026' },
    update: {},
    create: {
      id: 'SRC-STATIC-GA-MASTER-2026',
      title: 'Static GA Superbook Master Corpus (2026)',
      sourceType: 'STATUTORY_REPORTS',
      authorityTier: 'PRIMARY_GOVERNMENT_RECORD',
      description: 'Authoritative international organizational directories, treaties, and global benchmark reports.',
    },
  });

  const sourceSchemes = await db.source.upsert({
    where: { id: 'SRC-GOVT-SCHEMES-MASTER-2026' },
    update: {},
    create: {
      id: 'SRC-GOVT-SCHEMES-MASTER-2026',
      title: 'Government Schemes & Welfare Architecture Master Corpus (2026)',
      sourceType: 'STATUTORY_REPORTS',
      authorityTier: 'PRIMARY_GOVERNMENT_RECORD',
      description: 'Authoritative public policy guidelines, Central Sector and Centrally Sponsored scheme frameworks.',
    },
  });

  // 3. Ensure Domains and Subjects exist
  let domainGA = await db.domain.findFirst({
    where: {
      OR: [
        { slug: 'general-awareness-global-affairs' },
        { name: 'General Awareness & Global Affairs' },
      ],
    },
  });

  if (!domainGA) {
    domainGA = await db.domain.create({
      data: {
        name: 'General Awareness & Global Affairs',
        slug: 'general-awareness-global-affairs',
        description: 'Comprehensive repository for multilateral institutions, international financial architecture, global treaties, and apex institutional directories.',
      },
    });
  }

  let subjectGA = await db.subject.findFirst({
    where: { slug: 'general-awareness' },
  });

  if (!subjectGA) {
    subjectGA = await db.subject.create({
      data: {
        name: 'General Awareness & Global Institutions',
        slug: 'general-awareness',
        domainId: domainGA.id,
        scopeStatement: 'International organizations, multilateral development banks, global reports and indices, and apex institutional knowledge.',
        description: 'Universal canonical directory for global multilateral governance, development finance, and international reporting systems.',
      },
    });
  }

  let domainSchemes = await db.domain.findFirst({
    where: {
      OR: [
        { slug: 'public-policy-welfare-administration' },
        { name: 'Public Policy & Welfare Administration' },
      ],
    },
  });

  if (!domainSchemes) {
    domainSchemes = await db.domain.create({
      data: {
        name: 'Public Policy & Welfare Administration',
        slug: 'public-policy-welfare-administration',
        description: 'Comprehensive public policy architecture, welfare delivery mechanisms, central sector and centrally sponsored schemes, and social protection programs.',
      },
    });
  }

  let subjectSchemes = await db.subject.findFirst({
    where: { slug: 'government-schemes' },
  });

  if (!subjectSchemes) {
    subjectSchemes = await db.subject.create({
      data: {
        name: 'Government Schemes & Welfare Architecture',
        slug: 'government-schemes',
        domainId: domainSchemes.id,
        scopeStatement: 'Master curriculum of Indian government welfare programs, funding ratios, nodal ministries, and rights-based safety nets.',
        description: 'Authoritative analysis of flagship central sector and centrally sponsored welfare schemes across financial inclusion, livelihoods, and agriculture.',
      },
    });
  }

  const subjectsMap: Record<string, typeof subjectGA> = {
    'general-awareness': subjectGA,
    'government-schemes': subjectSchemes,
  };

  // 4. Group Concepts by Topic
  const topicsMap: Record<
    string,
    {
      title: string;
      order: number;
      description: string;
      subjectSlug: string;
      concepts: CanonicalConceptDefinition[];
    }
  > = {};

  for (const c of GA_SCHEMES_CONCEPTS) {
    if (!topicsMap[c.topicSlug]) {
      topicsMap[c.topicSlug] = {
        title: c.topicTitle,
        order: c.topicOrder,
        description: c.topicDescription,
        subjectSlug: c.subjectSlug,
        concepts: [],
      };
    }
    topicsMap[c.topicSlug].concepts.push(c);
  }

  // 5. Seed Topics and Concepts
  for (const [topicSlug, topicData] of Object.entries(topicsMap)) {
    const parentSubject = subjectsMap[topicData.subjectSlug];
    const topic = await db.topic.upsert({
      where: {
        subjectId_slug: {
          subjectId: parentSubject.id,
          slug: topicSlug,
        },
      },
      update: {
        title: topicData.title,
        order: topicData.order,
        description: topicData.description,
        status: 'ACTIVE',
      },
      create: {
        subjectId: parentSubject.id,
        slug: topicSlug,
        title: topicData.title,
        order: topicData.order,
        description: topicData.description,
        status: 'ACTIVE',
      },
    });

    for (const cDef of topicData.concepts) {
      const concept = await db.concept.upsert({
        where: { id: cDef.id },
        update: {
          topicId: topic.id,
          slug: cDef.slug,
          title: cDef.title,
          shortDefinition: cDef.shortDefinition,
          difficulty: cDef.difficulty,
          status: 'ACTIVE',
        },
        create: {
          id: cDef.id,
          topicId: topic.id,
          slug: cDef.slug,
          title: cDef.title,
          shortDefinition: cDef.shortDefinition,
          difficulty: cDef.difficulty,
          status: 'ACTIVE',
        },
      });

      // Clear child entities for idempotent reseeding
      await db.claim.deleteMany({ where: { conceptId: concept.id } });
      await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
      await db.examConceptMapping.deleteMany({ where: { conceptId: concept.id } });
      await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
      await db.question.deleteMany({ where: { conceptId: concept.id } });

      const currentSource = cDef.subjectSlug === 'general-awareness' ? sourceGA : sourceSchemes;

      // Seed Claims & Evidence
      for (const clm of cDef.claims) {
        const claim = await db.claim.create({
          data: {
            id: clm.id,
            conceptId: concept.id,
            statement: clm.statement,
            claimType: clm.claimType,
            epistemicLevel: clm.epistemicLevel,
            confidence: clm.confidence,
            status: 'CANONICAL_CLAIM',
          },
        });

        await db.evidence.create({
          data: {
            claimId: claim.id,
            sourceId: currentSource.id,
            locator: clm.locator,
            excerpt: clm.excerpt,
            evidenceType: 'PRIMARY_TREATY_OR_STATUTE',
            authority: 'TIER_A_STATUTORY_AUTHORITY',
            evidentiarySupport: 'STRONG_SUPPORT',
            extractionConfidence: 'HIGH',
          },
        });
      }

      // Seed ContentBlocks
      for (const cb of cDef.contentBlocks) {
        await db.contentBlock.create({
          data: {
            conceptId: concept.id,
            type: cb.type,
            title: cb.title,
            body: cb.body,
            order: cb.order,
            visibility: 'CANONICAL_FULL',
          },
        });
      }

      // Seed ExamConceptMappings
      for (const em of cDef.examMappings) {
        const examId = examMap[em.examCode];
        if (examId) {
          const examExists = await db.exam.findUnique({ where: { id: examId } });
          if (examExists) {
            await db.examConceptMapping.create({
              data: {
                examId,
                conceptId: concept.id,
                syllabusUnit: em.syllabusUnit,
                relevance: em.relevance,
                priority: em.priority,
                requiredDepth: em.requiredDepth,
                notes: em.notes,
                frequentTraps: em.frequentTraps,
              },
            });
          }
        }
      }

      // Seed RevisionUnits
      for (const ru of cDef.revisionUnits) {
        await db.revisionUnit.create({
          data: {
            conceptId: concept.id,
            type: ru.type,
            content: ru.content,
            order: ru.order,
          },
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
          },
        });
      }
    }
  }

  console.log(`Successfully seeded 8 Static GA & Government Schemes canonical concepts.`);
}
