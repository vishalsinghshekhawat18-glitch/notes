/**
 * Batch P6 Canonical Knowledge Base Seeder
 * Mind of Aravalli — Academic Reading Hub
 *
 * Covers 7 Canonical Concepts across Topics 24 and 25:
 * - Topic 24: Rajasthan State Polity: Executive, Assembly, Demography & Apex Institutions (4 concepts)
 * - Topic 25: Comparative Constitutional Systems: UK, USA, Canada, Germany & Switzerland (3 concepts)
 */

import { db } from '../db/client';
import { BATCH_P6_SEMANTIC_UNITS } from '../ingestion/batch-p6-semantic-inventory';

export interface BatchP6ConceptDef {
  id: string;
  topicOrder: number;
  topicSlug: string;
  topicTitle: string;
  topicDescription: string;
  slug: string;
  title: string;
  shortDefinition: string;
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  claims: Array<{
    id: string;
    statement: string;
    claimType: 'CONSTITUTIONAL_PROVISION' | 'STATUTORY_RULE' | 'JUDICIAL_DOCTRINE' | 'HISTORICAL_FACT' | 'PROCEDURAL_RULE' | 'CENSUS_DATA';
    epistemicLevel: 'ESTABLISHED_FACT';
    confidence: 'HIGH';
    locator: string;
    excerpt: string;
  }>;
  contentBlocks: Array<{
    type: 'INTUITION' | 'CORE_IDEA' | 'MECHANISM' | 'COMPARISON' | 'LEGAL_DISTINCTION' | 'CASE_LAW' | 'EXAM_APPLICATION';
    title: string;
    body: string;
    order: number;
  }>;
  examMappings: Array<{
    examCode: 'upsc-cse' | 'rpsc-ras' | 'iibf-dbf';
    relevance: 'CORE_SYLLABUS' | 'DIRECT_OVERLAY' | 'APPLIED_ANALYTICAL';
    priority: 'HIGH' | 'MEDIUM';
    requiredDepth: 'EXPERT' | 'PROFICIENT' | 'CONCEPTUAL';
    syllabusUnit: string;
    notes: string;
    frequentTraps?: string;
  }>;
  revisionUnits: Array<{
    type: 'FLASH_30S' | 'SUMMARY_2M' | 'ARCHITECTURE_5M';
    content: string;
    order: number;
  }>;
  questions: Array<{
    type: 'CONCEPT_CHECK' | 'EXAM_PYQ';
    stem: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
    trapExplanation?: string;
    difficulty: 'EASY' | 'MEDIUM' | 'HARD';
    isPYQ: boolean;
  }>;
}

export const BATCH_P6_CONCEPTS: BatchP6ConceptDef[] = [
  // =========================================================================
  // TOPIC 24: RAJASTHAN STATE POLITY & GOVERNANCE
  // =========================================================================
  {
    id: 'CON-T24-01',
    topicOrder: 24,
    topicSlug: 'rajasthan-state-polity-and-governance',
    topicTitle: 'Rajasthan State Polity: Executive, Assembly, Demography & Apex Institutions',
    topicDescription: 'Constitutional, administrative, and political architecture of Rajasthan: political geography, demographic patterns, Governor, Chief Minister, Legislative Assembly, High Court, and RPSC.',
    slug: 'political-demography-electoral-geography-social-stratification-rajasthan',
    title: 'Political Demography, Electoral Geography & Social Stratification of Rajasthan',
    shortDefinition: 'Structural demographic and electoral geography of Rajasthan based on Census 2011 baseline data (6.85 Cr population, density 200/km2, sex ratio 928, literacy 66.1%), regional divisions (Marwar, Mewar, Dhundhar, Hadoti, Shekhawati), 200 Assembly seats (34 SC, 25 ST), and 25 Lok Sabha seats (4 SC, 3 ST).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-T24-01-01',
        statement: 'According to Census 2011 baseline data, Rajasthan has a total population of 6.85 Crore (5.66% of India), population density of 200 persons per sq km (ranging from 17 in Jaisalmer to 595 in Jaipur), overall sex ratio of 928 (child sex ratio 888), literacy rate of 66.11% (male 79.19%, female 52.12%), with Scheduled Castes comprising 17.83% and Scheduled Tribes comprising 13.48% of the state population.',
        claimType: 'CENSUS_DATA',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Census of India 2011, Primary Census Abstract: Rajasthan',
        excerpt: 'Census 2011: RJ pop 6.85 Cr, density 200, sex ratio 928, literacy 66.11% (female 52.12%), SC 17.83%, ST 13.48%.',
      },
      {
        id: 'CLM-T24-01-02',
        statement: 'Under Delimitation Order 2008 and Article 170/332, Rajasthan has 200 Legislative Assembly constituencies (141 General, 34 SC reserved, 25 ST reserved), 25 Lok Sabha seats (18 General, 4 SC reserved: Bharatpur, Bikaner, Ganganagar, Karauli-Dholpur, and 3 ST reserved: Banswara, Dausa, Udaipur), and 10 Rajya Sabha seats.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Delimitation Commission Order 2008; Representation of the People Act 1950',
        excerpt: 'RJ Assembly: 200 seats (34 SC, 25 ST); Lok Sabha: 25 seats (4 SC, 3 ST); Rajya Sabha: 10 seats.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Geographical Dichotomy & Political Geography',
        body: 'Rajasthan is India’s largest state by area (3.42 lakh sq km, comprising 10.41% of India’s geographical area). The Aravalli Range runs diagonally from southwest (Khedbrahma/Mount Abu) to northeast (Khetri/Delhi), dividing Rajasthan into two distinct geographical and demographic zones:\n\n1. Western Arid Zone (Thar Desert — ~61% area, ~40% population): Sparse density, pastoral/arid settlement patterns, water scarcity politics (Indira Gandhi Canal project).\n2. Eastern Semi-Arid & Sub-Humid Plains (~39% area, ~60% population): High agricultural productivity, dense population settlement, industrial corridors.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Five Historical-Cultural Political Regions of Rajasthan',
        body: 'Rajasthan\'s electoral behavior and political mobilization operate across five historical-cultural sub-regions:\n\n1. Marwar (Western Desert: Jodhpur, Jaisalmer, Barmer, Nagaur, Pali, Bikaner, Jalore):\n   • Largest landmass, agrarian-pastoral politics, border security dynamics.\n2. Mewar / Vagad (Southern Aravalli & TSP Zone: Udaipur, Rajsamand, Chittorgarh, Bhilwara, Banswara, Dungarpur, Pratapgarh):\n   • High concentration of Scheduled Tribes (Bhil, Meena, Damor, Garasia), tribal sub-plan governance, PESA implementation.\n3. Dhundhar & Matsya (Eastern Plains: Jaipur, Dausa, Alwar, Bharatpur, Dholpur, Karauli):\n   • High demographic density, rapid urbanisation (Jaipur), Eastern Rajasthan Canal Project (ERCP) water politics.\n4. Hadoti (Southeastern Plateau: Kota, Bundi, Baran, Jhalawar):\n   • Industrial/education hubs (Kota), fertile Chambal river basin, tribal presence in Sahariya pocket (Baran).\n5. Shekhawati (North-Central: Sikar, Jhunjhunu, Churu):\n   • Highest rural education/defence recruitment belt, cooperative banking networks.',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'RPSC RAS High-Yield Demographic & Electoral Matrix',
        body: '| Parameter | Census 2011 Verified Value | Highest District | Lowest District |\n| :--- | :--- | :--- | :--- |\n| **Total Population** | 6.85 Crore (68,548,437) | Jaipur (66.26 Lakhs) | Jaisalmer (6.69 Lakhs) |\n| **Population Density** | 200 persons / sq km | Jaipur (595) | Jaisalmer (17) |\n| **Decadal Growth Rate** | 21.31% (2001–2011) | Barmer (32.5%) | Ganganagar (10.0%) |\n| **Sex Ratio** | 928 females / 1000 males | Dungarpur (994) | Dholpur (846) |\n| **Child Sex Ratio (0–6)** | 888 females / 1000 males | Banswara (934) | Jhunjhunu (837) |\n| **Overall Literacy** | 66.11% | Kota (76.6%) | Jalore (54.9%) |\n| **Female Literacy** | 52.12% | Kota (65.9%) | Jalore (38.5%) |\n| **SC Population Share** | 17.83% | Ganganagar (36.6%) | Dungarpur (3.8%) |\n| **ST Population Share** | 13.48% | Banswara (76.4%) | Bikaner / Nagaur (~0.3%) |',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'rpsc-ras',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Polity and Economy of Rajasthan: Demographic Features & Electoral Dynamics',
        notes: 'Extremely high yield for RAS Prelims and Mains: 200 Assembly seats (34 SC, 25 ST), 25 Lok Sabha seats (4 SC, 3 ST), Kota highest literacy, Jalore lowest, Dungarpur highest sex ratio, Dholpur lowest.',
        frequentTraps: 'Confusing SC reserved Lok Sabha seats (4: Bharatpur, Bikaner, Ganganagar, Karauli-Dholpur) with ST reserved Lok Sabha seats (3: Banswara, Dausa, Udaipur).',
      },
      {
        examCode: 'upsc-cse',
        relevance: 'APPLIED_ANALYTICAL',
        priority: 'MEDIUM',
        requiredDepth: 'CONCEPTUAL',
        syllabusUnit: 'GS Paper I & II: Regional Demography, Tribal Pockets & Electoral Geography',
        notes: 'Arid settlement patterns, TSP tribal demographics in southern Rajasthan, and federal water sharing issues.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Rajasthan Demography (Census 2011): Pop 6.85 Cr, Density 200 (Jaisalmer 17 vs Jaipur 595), Sex Ratio 928 (Dungarpur 994 vs Dholpur 846), Literacy 66.1% (Kota 76.6% vs Jalore 54.9%). Seats: 200 Assembly (34 SC, 25 ST), 25 Lok Sabha (4 SC, 3 ST), 10 Rajya Sabha.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Rajasthan covers 10.41% of India\'s area with 6.85 Cr population (Census 2011). Divided by Aravallis into western desert (sparse, Jaisalmer 17/km2) and eastern plains (dense, Jaipur 595/km2). Key metrics: Sex ratio 928, literacy 66.11% (female 52.12%), SC 17.83% (Ganganagar highest), ST 13.48% (Banswara 76.4%). Representation: 200 Vidhan Sabha seats (34 SC, 25 ST), 25 Lok Sabha seats (4 SC, 3 ST), and 10 Rajya Sabha seats.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Rajasthan Political Geography Framework:\n1. 5 Cultural-Political Sub-Regions: Marwar (Desert), Mewar/Vagad (Tribal/TSP), Dhundhar/Matsya (Eastern Plains), Hadoti (Plateau), Shekhawati (North-Central).\n2. Constitutional Representation:\n   • Vidhan Sabha: 200 seats (141 Gen, 34 SC, 25 ST).\n   • Lok Sabha: 25 seats (18 Gen, 4 SC: Bharatpur, Bikaner, Ganganagar, Karauli-Dholpur; 3 ST: Banswara, Dausa, Udaipur).\n   • Rajya Sabha: 10 seats.\n3. Tribal Demography (TSP Area): Banswara, Dungarpur, Pratapgarh, and tehsils of Udaipur and Sirohi (PESA Act applicable).\n4. Critical Indicators: Decadal growth 21.31% (Barmer 32.5% highest), child sex ratio 888 (Jhunjhunu 837 lowest).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'EXAM_PYQ',
        stem: 'In the context of Rajasthan\'s parliamentary representation, how many Lok Sabha constituencies are reserved for Scheduled Castes (SC) and Scheduled Tribes (ST) respectively?',
        options: [
          '4 SC seats and 3 ST seats',
          '3 SC seats and 4 ST seats',
          '5 SC seats and 2 ST seats',
          '34 SC seats and 25 ST seats',
        ],
        correctAnswer: '4 SC seats and 3 ST seats',
        explanation: 'Out of 25 Lok Sabha seats in Rajasthan, 4 seats are reserved for Scheduled Castes (Bharatpur, Bikaner, Ganganagar, Karauli-Dholpur) and 3 seats are reserved for Scheduled Tribes (Banswara, Dausa, Udaipur). (Note: 34 SC and 25 ST seats are reserved in the 200-member Legislative Assembly).',
        trapExplanation: 'Examiner trap: Confusing the Assembly seat reservations (34 SC, 25 ST) with Lok Sabha parliamentary seat reservations (4 SC, 3 ST).',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-T24-02',
    topicOrder: 24,
    topicSlug: 'rajasthan-state-polity-and-governance',
    topicTitle: 'Rajasthan State Polity: Executive, Assembly, Demography & Apex Institutions',
    topicDescription: 'Constitutional, administrative, and political architecture of Rajasthan: political geography, demographic patterns, Governor, Chief Minister, Legislative Assembly, High Court, and RPSC.',
    slug: 'state-executive-rajasthan-governor-chief-minister-council-of-ministers',
    title: 'State Executive of Rajasthan: Governor, Chief Minister & Council of Ministers',
    shortDefinition: 'The institutional evolution and constitutional operational dynamics of the State Executive in Rajasthan under Articles 153–167, transitioning on 1 November 1956 from Rajpramukh to Governor (First Governor: Gurumukh Nihal Singh), Chief Ministership milestones, CM Secretariat, and discretionary gubernatorial governance.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-T24-02-01',
        statement: 'The constitutional office of the Governor of Rajasthan was instituted on 1 November 1956 following the 7th Constitutional Amendment Act 1956 and the State Reorganisation Act 1956 (replacing the office of Rajpramukh held by Maharaja Sawai Man Singh II of Jaipur), with Sardar Gurumukh Nihal Singh appointed as the first Governor of Rajasthan.',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: '7th Constitutional Amendment Act 1956; Rajasthan State Archives',
        excerpt: 'Governor office created 1 Nov 1956 replacing Rajpramukh; Gurumukh Nihal Singh 1st Governor.',
      },
      {
        id: 'CLM-T24-02-02',
        statement: 'In Rajasthan\'s executive history, Pandit Hiralal Shastri was the first nominated Chief Minister (1949), Tikaram Paliwal was the first democratically elected Chief Minister (1952), Jai Narayan Vyas was the only person to serve as both nominated and elected CM, and Mohan Lal Sukhadia was the longest-serving Chief Minister (approx. 17 years across four terms: 1954–1971).',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Rajasthan Legislative Assembly Official Records; Chief Minister Secretariat Archives',
        excerpt: 'First nominated CM Hiralal Shastri; first elected CM Tikaram Paliwal; longest serving CM Mohan Lal Sukhadia.',
      },
      {
        id: 'CLM-T24-02-03',
        statement: 'Under Article 164(1A) inserted by the 91st Constitutional Amendment Act 2003, the total number of Ministers, including the Chief Minister, in the Council of Ministers in Rajasthan shall not exceed 15% (30 Ministers) and shall not be less than 12 Ministers.',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India, Article 164(1A); 91st CAA 2003',
        excerpt: 'Art 164(1A) limits Rajasthan Council of Ministers to max 15% of 200 = 30 ministers (min 12 ministers).',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Transition from Rajpramukh to Governor (1956)',
        body: 'During the integration of Rajasthan (1948–1956), Rajasthan was classified as a "Part B State" headed by a *Rajpramukh* (Maharaja Sawai Man Singh II of Jaipur, with Maharana Bhopal Singh of Mewar as *Maharajpramukh*).\n\nKey Constitutional Watershed:\n• The 7th Constitutional Amendment Act (1956) abolished the distinction between Part A, Part B, and Part C states.\n• On November 1, 1956, the institution of Rajpramukh was abolished, and Sardar Gurumukh Nihal Singh took oath as Rajasthan’s first Governor.\n• Historical Landmarks of Rajasthan Governors:\n  - Longest-Serving Governor: Gurumukh Nihal Singh (1956–1962).\n  - First Woman Governor: Pratibha Devisingh Patil (Nov 2004 – Jun 2007; later became India\'s first woman President).\n  - Four Governors who died during tenure: Darbara Singh (1998), Nirmal Chandra Jain (2003), S.K. Singh (2009), and Prabha Rau (2010).\n  - Four Invocations of President\'s Rule (Art 356) in Rajasthan: 1967 (Dr. Sampurnanand), 1977 (Veda Pal Tyagi), 1980 (Raghukul Tilak), and 1992 (M. Chenna Reddy).',
        order: 1,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'Chief Ministership Milestones & Cabinet Ceiling in Rajasthan',
        body: '1. Executive Inception Trajectory:\n   • First Nominated CM: Pandit Hiralal Shastri (7 Apr 1949 – 5 Jan 1951).\n   • First Democratically Elected CM: Tikaram Paliwal (3 Mar 1952 – 31 Oct 1952, elected from Mahuwa).\n   • First Nominated AND Elected CM: Jai Narayan Vyas.\n   • Architect of Modern Rajasthan: Mohan Lal Sukhadia (sworn in at age 38, served ~17 years from 1954 to 1971 across 4 assemblies).\n   • First Minority CM: Barkatullah Khan (1971–1973; only CM of Rajasthan to die in office).\n   • First Scheduled Caste CM: Jagannath Pahadia (1980–1981).\n   • First Woman CM: Vasundhara Raje (2003–2008, 2013–2018).\n\n2. 91st CAA Council Size Ceiling (Art 164(1A)):\n   • Maximum strength: 15% of 200 Assembly seats = **30 Ministers** (including CM).\n   • Minimum constitutional strength: **12 Ministers** (including CM).',
        order: 2,
      },
    ],
    examMappings: [
      {
        examCode: 'rpsc-ras',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Polity of Rajasthan: Governor, Chief Minister & Council of Ministers',
        notes: 'Extremely high yield for RAS Prelims and Mains Paper III: Rajpramukh transition 1 Nov 1956, 4 Governors who died in office, 4 President\'s Rule dates, Tikaram Paliwal vs Hiralal Shastri, 15% (30 ministers) limit.',
        frequentTraps: 'Confusing Hiralal Shastri (nominated) with Tikaram Paliwal (elected); forgetting Barkatullah Khan was the only CM to die in office.',
      },
      {
        examCode: 'upsc-cse',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'GS Paper II: State Executive, Governor Discretion (Articles 153-164) & Cabinet Limits',
        notes: '91st Amendment 15% ceiling, Governor discretionary powers under Art 163, and floor test jurisprudence.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Rajasthan Executive: Governor created 1 Nov 1956 (7th CAA, replaced Rajpramukh; 1st = Gurumukh Nihal Singh). 4 Governors died in office. 4 President\'s Rules (1967, 1977, 1980, 1992). CM: 1st Nominated = Hiralal Shastri (1949); 1st Elected = Tikaram Paliwal (1952); Longest = Sukhadia (17 yrs). Max Cabinet size = 30 (15% of 200).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'The Rajasthan State Executive transitioned on Nov 1, 1956 from Rajpramukh (Maharaja Sawai Man Singh II) to Governor (first: Gurumukh Nihal Singh). Four Governors died in office (Darbara Singh, Nirmal Jain, SK Singh, Prabha Rau). Four President\'s Rules occurred in 1967, 1977, 1980, 1992. CM milestones: Hiralal Shastri (nominated), Tikaram Paliwal (elected), Mohan Lal Sukhadia (longest, 17 yrs), Barkatullah Khan (only CM dying in office), Vasundhara Raje (1st woman CM). Under 91st CAA, Rajasthan Council of Ministers has a maximum of 30 and minimum of 12 ministers.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Rajasthan State Executive Matrix:\n1. Office of Governor:\n   • Established: 1 Nov 1956 (7th CAA abolished Part B status).\n   • 1st Governor: Gurumukh Nihal Singh (1956–1962).\n   • 1st Woman Governor: Pratibha Patil (2004–2007).\n   • Died in Office: Darbara Singh (1998), Nirmal Chandra Jain (2003), S.K. Singh (2009), Prabha Rau (2010).\n2. Office of Chief Minister:\n   • 1st Nominated: Hiralal Shastri (1949).\n   • 1st Elected: Tikaram Paliwal (1952).\n   • Nominated + Elected: Jai Narayan Vyas.\n   • Longest Tenure: Mohan Lal Sukhadia (1954–1971, 17 years).\n   • 1st SC Chief Minister: Jagannath Pahadia (1980).\n   • 1st Woman CM: Vasundhara Raje (2003).\n3. Cabinet Size Constraint (Art 164(1A)):\n   • Total Assembly seats = 200 $\\rightarrow$ Max 15% = 30 Ministers (including CM); Min = 12 Ministers.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'EXAM_PYQ',
        stem: 'Who was the first democratically elected Chief Minister of Rajasthan?',
        options: [
          'Tikaram Paliwal',
          'Pandit Hiralal Shastri',
          'Jai Narayan Vyas',
          'Mohan Lal Sukhadia',
        ],
        correctAnswer: 'Tikaram Paliwal',
        explanation: 'Tikaram Paliwal was the first democratically elected Chief Minister of Rajasthan, assuming office on March 3, 1952 after the first general elections. Pandit Hiralal Shastri was the first nominated Chief Minister (1949).',
        trapExplanation: 'Examiner trap: Students frequently confuse the first nominated CM (Hiralal Shastri) with the first democratically elected CM (Tikaram Paliwal).',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-T24-03',
    topicOrder: 24,
    topicSlug: 'rajasthan-state-polity-and-governance',
    topicTitle: 'Rajasthan State Polity: Executive, Assembly, Demography & Apex Institutions',
    topicDescription: 'Constitutional, administrative, and political architecture of Rajasthan: political geography, demographic patterns, Governor, Chief Minister, Legislative Assembly, High Court, and RPSC.',
    slug: 'rajasthan-legislative-assembly-evolution-committees-unicameral-procedure',
    title: 'Rajasthan Legislative Assembly (Vidhan Sabha): Evolution, Committees & Unicameral Procedure',
    shortDefinition: 'The constitutional architecture and procedural mechanics of the unicameral Rajasthan Legislative Assembly under Articles 168–212, its historical seat growth from 160 (1952) to 200 (1977 6th Assembly), legislative committees (PAC, Estimates, PUC), Speaker prerogatives, and assembly quorum.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-T24-03-01',
        statement: 'The Rajasthan Legislative Assembly is a unicameral legislature (Articles 168 and 170) whose membership expanded in stages: 160 seats in the 1st Assembly (1952), 176 in the 2nd Assembly (1957), 184 in the 4th Assembly (1967), and reached its current strength of 200 seats in the 6th Assembly (1977).',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Rajasthan Legislative Assembly Official Historical Annals',
        excerpt: 'Vidhan Sabha seats grew from 160 (1952) -> 176 (1957) -> 184 (1967) -> 200 (1977 6th Assembly).',
      },
      {
        id: 'CLM-T24-03-02',
        statement: 'In the 1st Rajasthan Legislative Assembly (1952–1957), Narottam Lal Joshi (Jhunjhunu) served as the first Speaker, Lal Singh Shaktawat served as the first Deputy Speaker, and Jaswant Singh (Bikaner) served as the first Leader of the Opposition.',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Rajasthan Vidhan Sabha Secretariat Annals',
        excerpt: '1st Speaker Narottam Lal Joshi; 1st Deputy Speaker Lal Singh Shaktawat; 1st LoP Jaswant Singh.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Seat Expansion Trajectory & Assembly Architecture',
        body: 'The Rajasthan Vidhan Sabha has remained strictly unicameral since inception (the Rajasthan Assembly passed a resolution for creating a Legislative Council under Article 169 in 2012, but Parliamentary enactment has not been passed).\n\nSeat Growth Trajectory:\n• 1st Assembly (1952): 160 seats (inaugurated on March 29, 1952 at Town Hall, Jaipur).\n• 2nd Assembly (1957): 176 seats (following merger of Ajmer-Merwara on 1 Nov 1956).\n• 4th Assembly (1967): 184 seats.\n• 6th Assembly (1977): **200 seats** (delimited based on 1971 Census, frozen until first census post-2026 under 84th CAA 2001).\n• Current Reserved Seats: **34 SC** and **25 ST** (141 Unreserved).\n• Quorum (Article 189(3)): 10 members or 1/10th of total membership, whichever is greater = **20 members** in Rajasthan.',
        order: 1,
      },
      {
        type: 'MECHANISM',
        title: 'Four Key Financial Standing Committees of Rajasthan Vidhan Sabha',
        body: 'Rajasthan Assembly operates 4 distinct Financial Standing Committees (elected annually via Proportional Representation by Single Transferable Vote):\n\n1. Public Accounts Committee (PAC / Jan Lekha Samiti):\n   • Examines the CAG audit reports on state accounts (Appropriation & Finance Accounts).\n   • Convention: Chaired by a senior Leader of Opposition.\n2. Estimates Committee \'A\' (Prakkalan Samiti \'Ka\'):\n   • Examines budget estimates and suggested economies for administrative departments.\n3. Estimates Committee \'B\' (Prakkalan Samiti \'Kha\'):\n   • Examines budget estimates for infrastructure, education, and development departments.\n4. Public Undertakings Committee (PUC / Sarvajanik Upkram Samiti):\n   • Examines commercial efficiency and CAG audit reports on State PSUs (e.g. RVPNL, RSRTC, RIICO).',
        order: 2,
      },
    ],
    examMappings: [
      {
        examCode: 'rpsc-ras',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Polity of Rajasthan: Rajasthan Legislative Assembly & Parliamentary Committees',
        notes: 'High yield for RAS: 200 seats milestone (6th Assembly 1977), 1st Speaker Narottam Lal Joshi, 1st Deputy Speaker Lal Singh Shaktawat, Quorum (20 members), 4 Financial Committees (PAC, Estimates A & B, PUC).',
        frequentTraps: 'Confusing 6th Assembly (1977 - 200 seats) with 5th Assembly; assuming Rajasthan has 3 financial committees instead of 4 (Estimates divided into A and B).',
      },
      {
        examCode: 'upsc-cse',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'GS Paper II: State Legislatures: Structure, Functioning, Conduct of Business & Powers',
        notes: 'Unicameral vs bicameral state legislatures, Article 169 abolition/creation procedure, and legislative committee scrutiny.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Rajasthan Vidhan Sabha: Unicameral. 160 seats (1952) → 176 (1957) → 184 (1967) → 200 seats (1977 6th Assembly). Quorum = 20 (1/10th). 1st Speaker = Narottam Lal Joshi; 1st Deputy Speaker = Lal Singh Shaktawat. 4 Financial Committees: PAC, Estimates A, Estimates B, PUC.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'The unicameral Rajasthan Legislative Assembly expanded from 160 seats in 1952 to 200 seats in the 6th Assembly (1977) with 34 SC and 25 ST reserved seats. Quorum is 20 members (1/10th). Key officers in 1st Assembly: Speaker Narottam Lal Joshi, Deputy Speaker Lal Singh Shaktawat, LoP Jaswant Singh. Rajasthan uniquely operates four financial committees: Public Accounts Committee, Estimates Committee A, Estimates Committee B, and Public Undertakings Committee.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Rajasthan Legislative Assembly Evolution:\n• 1st Assembly (1952–57): 160 seats.\n• 2nd Assembly (1957–62): 176 seats (Ajmer merger).\n• 3rd Assembly (1962–67): 176 seats.\n• 4th Assembly (1967–72): 184 seats.\n• 5th Assembly (1972–77): 184 seats.\n• 6th Assembly (1977–80): 200 seats (Current strength).\n• Quorum (Art 189(3)): 20 members.\n• Financial Committees: PAC (chaired by opposition), Estimates Committee A, Estimates Committee B, Public Undertakings Committee (PUC).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'EXAM_PYQ',
        stem: 'In which Legislative Assembly of Rajasthan was the member strength increased to 200 for the first time?',
        options: [
          'Sixth Legislative Assembly (1977)',
          'Fourth Legislative Assembly (1967)',
          'Fifth Legislative Assembly (1972)',
          'Seventh Legislative Assembly (1980)',
        ],
        correctAnswer: 'Sixth Legislative Assembly (1977)',
        explanation: 'The strength of the Rajasthan Legislative Assembly was increased from 184 to 200 seats in the Sixth Legislative Assembly constituted in 1977 following the delimitation based on the 1971 Census.',
        trapExplanation: 'Examiner trap: Students frequently pick the 5th Assembly (1972) or 7th Assembly (1980). The 200 seats threshold was reached in the 6th Assembly (1977).',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-T24-04',
    topicOrder: 24,
    topicSlug: 'rajasthan-state-polity-and-governance',
    topicTitle: 'Rajasthan State Polity: Executive, Assembly, Demography & Apex Institutions',
    topicDescription: 'Constitutional, administrative, and political architecture of Rajasthan: political geography, demographic patterns, Governor, Chief Minister, Legislative Assembly, High Court, and RPSC.',
    slug: 'judicial-and-constitutional-bodies-rajasthan-high-court-rpsc',
    title: 'Judicial & Constitutional Bodies of Rajasthan: High Court (Jodhpur/Jaipur) & RPSC (Ajmer)',
    shortDefinition: 'The constitutional architecture and operational dynamics of apex state institutions: Rajasthan High Court under Article 214 (inaugurated 29 Aug 1949 at Jodhpur, Satyanarayan Rao Committee Jaipur Bench 1977, 50 judges) and Rajasthan Public Service Commission under Article 315 (constituted 20 Aug 1949, shifted to Ajmer 1956, 1 Chair + 7 Members, appointment by Governor vs removal by President).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-T24-04-01',
        statement: 'The Rajasthan High Court was inaugurated on 29 August 1949 at Jodhpur by Rajpramukh Maharaja Sawai Man Singh II with Justice Kamala Kant Verma as the first Chief Justice, and a Permanent Bench was established at Jaipur on 31 January 1977 following the recommendations of the P. Satyanarayan Rao Committee (1957), with a sanctioned judge strength of 50 (38 Permanent + 12 Additional).',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Rajasthan High Court Ordinance 1949; High Court at Rajasthan (Establishment of Permanent Bench at Jaipur) Order 1976',
        excerpt: 'Rajasthan HC inaugurated 29 Aug 1949 Jodhpur; 1st CJ Kamala Kant Verma; Jaipur Bench 31 Jan 1977; 50 judges.',
      },
      {
        id: 'CLM-T24-04-02',
        statement: 'The Rajasthan Public Service Commission (RPSC) was constituted under Article 315 on 20 August 1949 at Jaipur (later shifted to Ajmer in 1956 on the recommendation of the Satyanarayan Rao Committee), comprising 1 Chairman and 7 Members (total 8) who are appointed by the Governor under Article 316 for a tenure of 6 years or 62 years of age, but can be removed ONLY by the President of India under Article 317.',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India, Arts 315-317; RPSC Regulations 1963',
        excerpt: 'RPSC established 20 Aug 1949, shifted to Ajmer 1956; 1 Chair + 7 Members; appointed by Governor, removed ONLY by President.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Rajasthan High Court Setup & The Satyanarayan Rao Committee',
        body: '1. Inception & Seat:\n   • Promulgated via Rajasthan High Court Ordinance, 1949.\n   • Inaugurated on **29 August 1949** at Jodhpur by Rajpramukh Maharaja Sawai Man Singh.\n   • First Chief Justice: **Justice Kamala Kant Verma** (sworn in with 11 judges from integrating princely states).\n\n2. Permanent Bench at Jaipur (1977):\n   • The P. Satyanarayan Rao Committee (1957) was formed to allocate state capitals and apex institutions post-merger (recommended Capital at Jaipur, High Court Principal Seat at Jodhpur, RPSC and Board of Revenue at Ajmer, Mining Department at Udaipur, Agriculture at Bharatpur, Education at Bikaner).\n   • A permanent bench at Jaipur was established on **31 January 1977** under Presidential order.\n   • Sanctioned Judge Strength: **50 Judges** (38 Permanent + 12 Additional).',
        order: 1,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'RPSC Architecture & The Critical Removal Asymmetry (Article 317)',
        body: '1. Constitutional Mandate (Articles 315–323):\n   • Constituted: 20 August 1949 (effective 22 Dec 1949) at Jaipur; shifted to **Ghooghra Ghati, Ajmer** in 1956.\n   • First Chairman: **Sir S.K. Ghosh** (Chief Justice of Rajasthan High Court held concurrent additional charge).\n   • Composition: 1 Chairman + 7 Members (Total 8 members; at least 50% must have held government office for at least 10 years).\n   • Tenure: **6 years or until attaining 62 years of age** (whichever is earlier).\n\n2. Top Examination Trap: Appointment vs Removal Asymmetry:\n   • **Appointed by:** The **Governor of Rajasthan** (Article 316).\n   • **Resignation addressed to:** The **Governor of Rajasthan**.\n   • **Suspension power:** The **Governor** may suspend the Chairman/Member pending inquiry.\n   • **REMOVED EXCLUSIVELY BY:** The **President of India** (Article 317) on grounds of misbehavior after a mandatory inquiry report by the Supreme Court of India under Article 145!',
        order: 2,
      },
    ],
    examMappings: [
      {
        examCode: 'rpsc-ras',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Polity of Rajasthan: Rajasthan High Court & RPSC',
        notes: 'Top RAS Trap: RPSC members appointed by Governor, but removed ONLY by President (Art 317). Satyanarayan Rao Committee institutional allocations (Jodhpur HC, Ajmer RPSC/BoR, Jaipur Capital). 1st CJ Kamala Kant Verma, 1st RPSC Chair Sir SK Ghosh.',
        frequentTraps: 'Assuming Governor can remove RPSC members; confusing High Court inauguration date (29 Aug 1949) with RPSC constitution date (20 Aug 1949).',
      },
      {
        examCode: 'upsc-cse',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'GS Paper II: Structure, Organization & Functioning of High Courts & State PSCs',
        notes: 'High Court jurisdiction (Articles 226/227), State PSC constitutional independence safeguards under Article 317.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Rajasthan HC: 29 Aug 1949 Jodhpur (1st CJ Kamala Kant Verma). Jaipur Bench: 31 Jan 1977 (Satyanarayan Rao Committee). 50 judges. RPSC: 20 Aug 1949 (Jaipur → Ajmer 1956). 1 Chair + 7 Members. 6yr/62yr term. Appointed by Governor, REMOVED ONLY BY PRESIDENT (Art 317).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Rajasthan High Court was inaugurated on 29 August 1949 at Jodhpur (1st CJ: Justice Kamala Kant Verma). Satyanarayan Rao Committee (1957) allocated the Capital to Jaipur and High Court to Jodhpur; a permanent Jaipur Bench was created on 31 Jan 1977. Judge strength is 50. RPSC was established on 20 Aug 1949 (1st Chair: Sir SK Ghosh) and shifted to Ajmer in 1956. Comprises 1 Chairman + 7 Members serving 6 yrs or age 62. Crucial rule: Appointed by Governor, but removable ONLY by the President under Article 317.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Apex Institutions of Rajasthan Architecture:\n1. Rajasthan High Court:\n   • Inauguration: 29 Aug 1949 at Jodhpur by Rajpramukh Sawai Man Singh.\n   • First Chief Justice: Justice Kamala Kant Verma.\n   • Jaipur Permanent Bench: 31 Jan 1977.\n   • Bench Strength: 50 Judges (38 Permanent, 12 Additional).\n2. RPSC (Ajmer):\n   • Constituted: 20 Aug 1949 at Jaipur $\\rightarrow$ shifted to Ajmer 1956.\n   • First Chairman: Sir S.K. Ghosh.\n   • Composition: 1 Chairman + 7 Members (Total 8).\n   • Service Terms: 6 years or 62 years of age.\n   • Article 317 Removal: President of India only (after Supreme Court reference).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'EXAM_PYQ',
        stem: 'Who has the constitutional power to REMOVE the Chairman or a Member of the Rajasthan Public Service Commission (RPSC) on the grounds of misbehavior?',
        options: [
          'The President of India, after an inquiry by the Supreme Court of India',
          'The Governor of Rajasthan, on the advice of the Chief Minister',
          'The Chief Justice of the Rajasthan High Court',
          'The State Legislative Assembly, by a special majority resolution',
        ],
        correctAnswer: 'The President of India, after an inquiry by the Supreme Court of India',
        explanation: 'Under Article 317(1) of the Constitution of India, the Chairman or any member of a State Public Service Commission can be removed from office ONLY by order of the President of India on the ground of misbehavior after the Supreme Court, on reference being made to it by the President, has held an inquiry and reported that the member ought to be removed.',
        trapExplanation: 'Examiner trap: Although the Governor APPOINTS RPSC members (Art 316), the Governor CANNOT remove them. Removal is the exclusive constitutional prerogative of the President of India (Art 317).',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  // =========================================================================
  // TOPIC 25: COMPARATIVE CONSTITUTIONAL SYSTEMS
  // =========================================================================
  {
    id: 'CON-T25-01',
    topicOrder: 25,
    topicSlug: 'comparative-constitutional-systems',
    topicTitle: 'Comparative Constitutional Systems: UK, USA, Canada, Germany & Switzerland',
    topicDescription: 'Doctoral comparative jurisprudence contrasting parliamentary sovereignty, judicial supremacy, federal architectures, direct democracy, and constitutional synthesis.',
    slug: 'constitutional-models-sovereignty-uk-usa-indian-synthesis',
    title: 'Constitutional Models & Sovereignty: UK Parliamentary Sovereignty vs USA Judicial Supremacy vs Indian Synthesis',
    shortDefinition: 'Comparative constitutional analysis of the British unwritten constitution and Diceyan Parliamentary Sovereignty, the American rigid written constitution and judicial supremacy with substantive Due Process, and the Indian constitutional synthesis of parliamentary executive with judicial review bound by the Basic Structure Doctrine.',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-T25-01-01',
        statement: 'Under the British constitutional model analyzed by A.V. Dicey, Parliament is sovereign and omnipotent with no distinction between constitutional and ordinary laws, meaning courts cannot declare an Act of Parliament unconstitutional; whereas under the US constitutional model (1787), the Constitution is supreme and the Supreme Court exercises full judicial review over legislative acts (Marbury v. Madison 1803) under the "Due Process of Law" doctrine.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'A.V. Dicey, Law of the Constitution; Marbury v. Madison, 5 U.S. 137 (1803)',
        excerpt: 'UK has Parliamentary Sovereignty and no judicial invalidation of Acts; US has Constitutional Supremacy and judicial review.',
      },
      {
        id: 'CLM-T25-01-02',
        statement: 'The Constitution of India synthesizes British Parliamentary Sovereignty and American Judicial Supremacy by establishing a parliamentary system of government (executive accountable to legislature) while subjecting Parliament’s constituent and legislative powers to judicial review under the Basic Structure Doctrine (Kesavananda Bharati 1973) and procedural-substantive justice under Article 21 (Maneka Gandhi 1978).',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Kesavananda Bharati v. State of Kerala (1973); Maneka Gandhi v. UOI (1978)',
        excerpt: 'India synthesizes UK parliamentary model and US judicial review via Constitutional Supremacy & Basic Structure.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Great Constitutional Crossroads (1947–1950)',
        body: 'When India\'s Constituent Assembly convened, it faced a fundamental philosophical dilemma:\n• Should India adopt the British model of Parliamentary Sovereignty, trusting elected representatives with absolute legislative power?\n• Or should India adopt the American model of Judicial Supremacy, where a written constitution severely restricts legislative majorities and unelected judges can strike down laws?\n\nThe framers chose an ingenious middle path: India adopted the British parliamentary executive (to ensure responsible government) but rejected Parliamentary Sovereignty in favour of **Constitutional Supremacy**, empowering the judiciary with written judicial review (Article 13) while checking judicial overreach through parliamentary amendment powers (Article 368).',
        order: 1,
      },
      {
        type: 'COMPARISON',
        title: 'Comparative Triad Matrix: UK vs USA vs India',
        body: '| Constitutional Dimension | United Kingdom (UK) | United States of America (USA) | India (Synthesis) |\n| :--- | :--- | :--- | :--- |\n| **Nature of Constitution** | Uncodified / Unwritten (Statutes, Conventions, Common Law) | Rigid Written (7 Articles, 27 Amendments in 235+ yrs) | Detailed Written (395 Articles, 12 Schedules) |\n| **Sovereignty / Supremacy** | **Parliamentary Sovereignty** (Parliament can make/unmake any law) | **Constitutional Supremacy** + Judicial Supremacy | **Constitutional Supremacy** (Parliament is a created creature of the Constitution) |\n| **Form of Government** | Constitutional Monarchy + Westminster Parliamentary System | Presidential Republic (Strict Separation of Powers) | Parliamentary Republic (President as Head of State, PM as Head of Govt) |\n| **Executive-Legislature** | **Fusion of Powers** (Ministers must be MPs) | **Strict Separation of Powers** (Cabinet secretaries cannot be Congressmen) | **Fusion of Powers** (Ministers must be MPs under Art 75(5)) |\n| **Judicial Review Scope** | Zero judicial review of primary Acts of Parliament | Full Judicial Review (*Marbury v. Madison 1803*) under "Due Process" | Full Judicial Review (Art 13, 32, 226) checked by **Basic Structure Doctrine** |\n| **Fundamental Rights** | Common law liberties + Human Rights Act 1998 (no entrenchment) | Entrenched Bill of Rights (1791) | Entrenched Part III Rights + Directive Principles (Part IV) |',
        order: 2,
      },
    ],
    examMappings: [
      {
        examCode: 'rpsc-ras',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'RAS Mains Paper III (Unit I): Comparative Constitutions (UK, USA, Canada, Germany & Switzerland)',
        notes: 'Core 10-marker model question: "The Indian Constitution synthesizes British Parliamentary Sovereignty with American Judicial Supremacy." Explain with landmark cases (Kesavananda, Maneka Gandhi).',
      },
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper II: Comparison of the Indian Constitutional Scheme with that of Other Countries',
        notes: 'Analytical comparison: Procedure Established by Law vs Due Process, separation of powers (USA) vs responsible government (India/UK), and Basic Structure as an Indian indigenous innovation.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'UK: Unwritten, Parliamentary Sovereignty (Dicey), Fusion of Powers, Zero judicial review of Acts. USA: Written (1787), Strict Separation (Montesquieu), Due Process, Judicial Supremacy (Marbury 1803). India: Constitutional Supremacy synthesis (Parliamentary Govt + Judicial Review + Basic Structure Doctrine).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'UK operates on Parliamentary Sovereignty where Parliament is omnipotent and courts cannot invalidate primary laws. USA operates on strict separation of powers and judicial supremacy under substantive Due Process of Law. India synthesizes both: adopting British Westminster parliamentary executive (responsible government) while embracing American written constitutional supremacy and judicial review, harmonized through the indigenous Basic Structure Doctrine (Kesavananda Bharati 1973).',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Comparative Sovereignty Architecture:\n1. UK Doctrine: Dicey\'s 3 principles of Parliamentary Sovereignty (Parliament can make any law; no person can override Parliament; no court can question parliamentary validity).\n2. US Doctrine: Constitutional Supremacy + Judicial Review (Chief Justice John Marshall in Marbury v. Madison 1803: "It is emphatically the province and duty of the judicial department to say what the law is").\n3. Indian Synthesis:\n   • Rejection of British Parliamentary Sovereignty: Indian Parliament is bound by written fundamental rights and cannot alter the Basic Structure.\n   • Rejection of US Absolute Judicial Supremacy: Indian judges cannot act as a third legislative chamber; Parliament retains constituent amending powers under Art 368.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following statements correctly characterizes the doctrine of "Parliamentary Sovereignty" as it operates in the United Kingdom?',
        options: [
          'Courts in the UK have no power to declare an Act of Parliament unconstitutional or strike it down',
          'The UK Supreme Court can strike down any parliamentary law that violates natural justice',
          'The British Monarch possesses absolute veto over all acts passed by Parliament',
          'Acts of the UK Parliament must be approved by a national referendum before taking effect',
        ],
        correctAnswer: 'Courts in the UK have no power to declare an Act of Parliament unconstitutional or strike it down',
        explanation: 'In the United Kingdom, under the doctrine of Parliamentary Sovereignty (articulated by A.V. Dicey), Parliament is legally omnipotent. No court of law has the constitutional power to declare an Act of Parliament invalid or unconstitutional.',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },

  {
    id: 'CON-T25-02',
    topicOrder: 25,
    topicSlug: 'comparative-constitutional-systems',
    topicTitle: 'Comparative Constitutional Systems: UK, USA, Canada, Germany & Switzerland',
    topicDescription: 'Doctoral comparative jurisprudence contrasting parliamentary sovereignty, judicial supremacy, federal architectures, direct democracy, and constitutional synthesis.',
    slug: 'comparative-federal-architectures-usa-canada-australia-germany-india',
    title: 'Comparative Federal Architectures: USA, Canada, Australia, Germany & Indian Asymmetric Federalism',
    shortDefinition: 'Comparative analysis of major federal systems: American Dual Federalism (indestructible states, dual citizenship), Canadian Strong-Centre Federalism (Governor appointment, central residuary powers), Australian Cooperative Federalism (Concurrent list, trade commerce), German Administrative Federalism (Bundesrat), and India\'s Quasi-Federal model with asymmetric constitutional provisions.',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-T25-02-01',
        statement: 'While the US Constitution created a classical federation of "an indestructible Union composed of indestructible States" with residuary powers vested in States (10th Amendment) and dual citizenship, the Canadian Constitution (British North America Act 1867) created a federation with a strong centre with residuary powers vested in the Centre and central appointment of Provincial Governors, which India adopted in Article 248 and Article 155.',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'US Constitution, 10th Amendment; BNA Act 1867, Sec 91; Constitution of India Arts 155, 248',
        excerpt: 'US vests residuary powers in States; Canada vests residuary powers in Centre (borrowed by India in Art 248).',
      },
      {
        id: 'CLM-T25-02-02',
        statement: 'Under German Administrative Federalism (Basic Law 1949), federal laws are primarily executed and administered by State (Länder) bureaucracies, and the upper house (Bundesrat) consists not of directly elected senators but of appointed delegates of State Governments who vote en bloc as instructed by their cabinets.',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'German Basic Law (Grundgesetz 1949), Arts 50-53, 83-85',
        excerpt: 'Germany features administrative federalism where Länder execute federal laws; Bundesrat comprises state cabinet delegates.',
      },
    ],
    contentBlocks: [
      {
        type: 'COMPARISON',
        title: 'Global Federal Matrix: USA vs Canada vs Germany vs India',
        body: '| Federal Dimension | United States (USA) | Canada | Germany | India |\n| :--- | :--- | :--- | :--- | :--- |\n| **Federal Origin** | Aggregation of 13 sovereign colonies (Bottom-up contract) | Aggregation under British Crown (BNA Act 1867) | Post-WWII Basic Law 1949 (Cooperative Federalism) | Holding together unitary union divided into administrative states (Top-down) |\n| **Nature of Union** | Indestructible Union of Indestructible States | Indestructible Union with strong central overrides | Cooperative Administrative Federalism | **Indestructible Union of Destructible States** (Article 3) |\n| **Residuary Powers** | Vested in the **States** (10th Amendment) | Vested in the **Centre** (Section 91) | Vested in the **Länder (States)** (Art 30/70) | Vested in the **Centre / Parliament** (Article 248) |\n| **Citizenship** | **Dual Citizenship** (Federal + State) | Single Citizenship | Single Citizenship | **Single Citizenship** (Article 9) |\n| **Upper House Representation** | **Senate:** Strict equal representation (2 per state = 100) | **Senate:** Regional representation by appointment | **Bundesrat:** State cabinet delegates voting en bloc (3 to 6 votes per Land) | **Rajya Sabha:** Population-based proportional representation (4th Schedule) |\n| **Emergency Powers** | Zero constitutional provision for suspending state govts | Limited federal emergencies | Detailed constitutional emergency provisions | **Extensive Part XVIII** (Arts 352, 356, 360) |',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'What India Borrowed & Adapted from Global Federal Models',
        body: 'India’s constitutional architects pragmatically curated features from global federal systems:\n\n1. From Canada (The Primary Structural Template):\n   • Federation with a Strong Centre (Unitary bias).\n   • Vesting of Residuary Powers in the Centre (Article 248).\n   • Appointment of State Governors by the Centre (Article 155).\n   • Advisory Jurisdiction of the Supreme Court (Article 143).\n\n2. From Australia:\n   • Concurrent List (Seventh Schedule List III).\n   • Freedom of Inter-State Trade, Commerce and Intercourse (Part XIII, Articles 301–307).\n   • Joint Sitting of both Houses of Parliament to resolve deadlocks (Article 108).\n\n3. From the USA:\n   • Written Fundamental Rights (Part III).\n   • Independence of the Judiciary & Judicial Review (Article 13).\n   • Impeachment procedure of the President (Article 61) & removal of SC/HC Judges.\n   • Office of the Vice-President as ex-officio Chairman of Upper House (Article 64).\n\n4. From Germany (Weimar / Basic Law):\n   • Suspension of Fundamental Rights during National Emergency (Article 359).',
        order: 2,
      },
    ],
    examMappings: [
      {
        examCode: 'rpsc-ras',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'RAS Mains Paper III: Comparative Federalism (USA, Canada, Germany & India)',
        notes: 'High yield for RAS Mains: Canadian influence on Indian strong centre and residuary powers (Art 248), US dual federalism vs Indian single citizenship, German Bundesrat delegate structure.',
      },
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper II: Comparison of Indian Federalism with USA and Canada; Asymmetric Federalism',
        notes: 'K.C. Wheare\'s "Quasi-Federal" thesis, asymmetric constitutional arrangements (Art 371A-J, 5th/6th Schedules), and cooperative vs competitive federalism.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Federal Comparison: USA = Bottom-up, Indestructible States, Residuary with States, Dual Citizenship, Equal Senate (2/state). Canada = Strong Centre, Residuary with Centre (borrowed by India in Art 248), Governor appointment. Germany = Länder execute federal laws, Bundesrat delegates vote en bloc. India = Indestructible Union of Destructible States (Art 3).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Global federal models diverge on sovereignty and residuary powers. The US is a bottom-up classical federation with dual citizenship and state residuary powers. Canada established a strong-centre model with central residuary powers and central appointment of governors—features directly borrowed by India in Articles 248 and 155. Germany features administrative federalism where states execute federal laws. India represents an "Indestructible Union of Destructible States" (Article 3) characterized by single citizenship and asymmetric federalism.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Comparative Federal Structural Schema:\n• US Model (1787): Bottom-up federation, 10th Amendment residuary powers to states, dual citizenship, equal Senate representation (2 per state regardless of population).\n• Canadian Model (1867): Top-down federation, Section 91 central residuary powers, federally appointed Lieutenant Governors, advisory Supreme Court jurisdiction.\n• Australian Model (1900): Concurrent legislative list, inter-state trade freedoms, joint sittings mechanism.\n• German Model (1949): Administrative federalism (Länder civil services enforce federal statutes), Bundesrat upper house composed of state cabinet delegations.\n• Indian Model (1950): Quasi-federal synthesis (Ambedkar: "Federal in normal times, unitary in emergency").',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'From which country\'s constitutional architecture did India borrow the principle of vesting "Residuary Powers" of legislation in the Union Parliament (Article 248)?',
        options: [
          'Canada',
          'United States of America',
          'Australia',
          'Switzerland',
        ],
        correctAnswer: 'Canada',
        explanation: 'Under the Canadian Constitution (British North America Act 1867), residuary legislative powers are vested in the Central Parliament. The framers of the Indian Constitution adopted this strong-centre Canadian feature in Article 248, unlike the US and Australian models where residuary powers belong to the States.',
        trapExplanation: 'Examiner trap: In the USA and Australia, residuary powers belong to the States. In Canada and India, residuary powers belong to the Centre.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-T25-03',
    topicOrder: 25,
    topicSlug: 'comparative-constitutional-systems',
    topicTitle: 'Comparative Constitutional Systems: UK, USA, Canada, Germany & Switzerland',
    topicDescription: 'Doctoral comparative jurisprudence contrasting parliamentary sovereignty, judicial supremacy, federal architectures, direct democracy, and constitutional synthesis.',
    slug: 'instruments-direct-democracy-plural-executive-swiss-model',
    title: 'Instruments of Direct Democracy & Plural Executive: The Swiss Constitutional Model',
    shortDefinition: 'The constitutional architecture of the Swiss Confederation (Federal Constitution of 1999), the four instruments of Direct Democracy (Mandatory/Optional Referendum, Popular Initiative, Recall, Landsgemeinde), and the unique 7-member collegial Plural Executive (Federal Council) with an annually rotating Federal President.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-T25-03-01',
        statement: 'Under the Swiss Federal Constitution of 1999, citizens exercise direct sovereign power through four instruments of direct democracy: Mandatory Referendum (compulsory vote on constitutional amendments), Optional Referendum (popular vote on parliamentary statutes requested by 50,000 citizens within 100 days), Popular Initiative (constitutional amendments proposed by 100,000 citizens within 18 months), and Recall (removal of elected officials in several Cantons).',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Federal Constitution of the Swiss Confederation 1999, Articles 138-142',
        excerpt: 'Swiss direct democracy instruments: Referendum (mandatory/optional), Popular Initiative (100k signatures), and Recall.',
      },
      {
        id: 'CLM-T25-03-02',
        statement: 'Under Article 174–177 of the Swiss Constitution, executive power is vested not in a single President or Prime Minister, but in a 7-member collegial Plural Executive called the Federal Council (Bundesrat) elected by the Federal Assembly for 4 years, where the Federal President is merely a "first among equals" (primus inter pares) whose office rotates annually among the seven councillors.',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Federal Constitution of the Swiss Confederation 1999, Articles 174-179',
        excerpt: 'Switzerland has a 7-member Plural Executive (Federal Council); Presidency rotates annually among the 7 members.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Direct Democracy vs Representative Democracy',
        body: 'While almost all modern democracies (including India, UK, USA) operate as *Representative (Indirect) Democracies* where citizens delegate decision-making power to elected legislators, Switzerland operates a hybrid model heavily anchored in **Direct Democracy**:\n\n1. Instruments of Direct Citizen Law-Making:\n   • **Mandatory Referendum:** Any constitutional amendment passed by Parliament or accession to international collective security bodies MUST be submitted to a nationwide vote (requires a "double majority": a majority of the popular vote AND a majority of the 26 Cantons).\n   • **Optional Referendum:** Any ordinary federal statute passed by Parliament can be subjected to a popular vote if **50,000 citizens** sign a petition within 100 days.\n   • **Popular Initiative:** **100,000 citizens** can propose a total or partial revision of the Federal Constitution within 18 months.\n   • **Landsgemeinde:** Traditional open-air direct democratic assemblies of all eligible citizens voting by show of hands (preserved in Cantons of Appenzell Innerrhoden and Glarus).\n   • **Recall:** The constitutional power of the electorate to remove an elected official or dissolve a cantonal parliament before the expiry of their term.',
        order: 1,
      },
      {
        type: 'MECHANISM',
        title: 'The Swiss Plural Executive (Federal Council / Bundesrat)',
        body: 'Switzerland rejects both the British single Prime Ministerial executive and the American singular Presidential executive:\n\n• Composition: A collegial council of **7 members** (Federal Council) elected by the bicameral Federal Assembly for a 4-year term.\n• Consensual Power-Sharing (Magic Formula / Zauberformel): Seats in the 7-member council are distributed among the four largest political parties across linguistic groups (German, French, Italian).\n• Rotating Presidency: The Parliament elects one of the 7 councillors as President of the Confederation for a term of **ONE YEAR ONLY**. The Swiss President has no extra executive powers over other councillors and remains the head of their respective administrative department.',
        order: 2,
      },
    ],
    examMappings: [
      {
        examCode: 'rpsc-ras',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'RAS Mains Paper III: Comparative Constitutions: Switzerland (Direct Democracy & Plural Executive)',
        notes: 'High yield for RAS Mains: 4 instruments of direct democracy (Referendum, Initiative, Recall, Plebiscite/Landsgemeinde) and 7-member rotating Federal Council plural executive.',
      },
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'GS Paper II: Comparative Democratic Systems: Direct vs Indirect Democracy Instruments',
        notes: 'Feasibility of direct democracy instruments (Referendum, Recall) in large diverse democracies like India (Gram Sabha as micro-direct democracy under Art 243A).',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Switzerland Model: Direct Democracy = Mandatory Referendum (double majority), Optional Referendum (50k signatures), Popular Initiative (100k signatures), Recall, Landsgemeinde (open-air voting). Executive = 7-member Plural Executive (Federal Council) with 1-year rotating presidency (no single PM/President).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Switzerland is the world\'s premier direct democracy. Citizens directly vote on laws via Mandatory Referendum (constitutional changes), Optional Referendum (laws challenged by 50,000 citizens), and Popular Initiative (100,000 citizens proposing constitutional amendments). Executive power is vested in a 7-member collegial Plural Executive (Federal Council) where the presidency rotates annually with zero special executive powers.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Swiss Constitutional Architecture:\n1. Direct Democracy Matrix:\n   • Mandatory Referendum: Required for constitutional revisions, international treaties. Requires Double Majority (National majority + Cantonal majority).\n   • Optional Referendum: 50,000 signatures in 100 days to challenge any parliamentary law.\n   • Popular Initiative: 100,000 signatures in 18 months for constitutional amendments.\n   • Recall: Cantonal procedure to unseat elected representatives.\n2. Plural Executive Matrix:\n   • 7-member Federal Council elected by Federal Assembly.\n   • Multi-party "Magic Formula" broad coalition representation.\n   • Annual 1-year rotating President of the Confederation (Primus inter pares).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under the Swiss constitutional system, what is the nature of the federal executive?',
        options: [
          'A 7-member collegial Plural Executive (Federal Council) with an annually rotating Presidency',
          'A singular executive President with absolute veto power over Parliament',
          'A Prime Minister drawn from the single largest party in Parliament',
          'A hereditary constitutional monarch advised by a privy council',
        ],
        correctAnswer: 'A 7-member collegial Plural Executive (Federal Council) with an annually rotating Presidency',
        explanation: 'Under the Swiss Constitution, executive authority is vested in a 7-member collegial body known as the Federal Council (Plural Executive), where all seven members share equal executive power and the office of Federal President rotates annually among them.',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },
];

export async function seedBatchP6CanonicalKnowledge() {
  console.log(`Seeding Batch P6 Canonical Knowledge (${BATCH_P6_CONCEPTS.length} concepts)...`);

  // 1. Ensure Domain & Subject exist
  const polityDomain = await db.domain.upsert({
    where: { slug: 'indian-polity-and-governance' },
    update: {},
    create: {
      name: 'Indian Polity & Governance',
      slug: 'indian-polity-and-governance',
      description: 'Comprehensive canonical study of the Constitution of India, administrative frameworks, and governance doctrines.',
      order: 1,
    },
  });

  const politySubject = await db.subject.upsert({
    where: { slug: 'indian-polity' },
    update: {},
    create: {
      name: 'Indian Polity',
      slug: 'indian-polity',
      description: 'Systematic study of the Indian Constitutional Architecture, Organs of State, and Democratic Institutions.',
      scopeStatement: 'Constitutional law, state institutions, political dynamics, and governance.',
      domainId: polityDomain.id,
      order: 1,
    },
  });

  // Ensure Exams exist
  const exams = [
    { slug: 'upsc-cse', name: 'UPSC Civil Services Examination', conductingBody: 'UPSC' },
    { slug: 'rpsc-ras', name: 'RPSC Rajasthan Administrative Services', conductingBody: 'RPSC' },
    { slug: 'iibf-dbf', name: 'IIBF Diploma in Banking & Finance', conductingBody: 'IIBF' },
  ];

  const examMap: Record<string, string> = {};
  for (const ex of exams) {
    const record = await db.exam.upsert({
      where: { slug: ex.slug },
      update: {},
      create: {
        slug: ex.slug,
        name: ex.name,
        conductingBody: ex.conductingBody,
        status: 'ACTIVE',
      },
    });
    examMap[ex.slug] = record.id;
  }

  // 2. Ensure Source exists for Batch P6
  const source = await db.source.upsert({
    where: { id: 'LEGACY-POLITY-VAULT-2026' },
    update: {},
    create: {
      id: 'LEGACY-POLITY-VAULT-2026',
      title: 'Polity & Governance Master Markdown Vault (2026)',
      sourceType: 'STATUTORY_COMPILATION',
      authorityTier: 'STANDARD_AUTHORITY',
      description: '05_Polity_Governance_Master.md, Mind of Aravalli Knowledge Base, 2026',
    },
  });

  // 3. Seed Semantic Units / Coverage Units
  console.log(`Seeding Batch P6 semantic units (${BATCH_P6_SEMANTIC_UNITS.length} units)...`);
  for (const sUnit of BATCH_P6_SEMANTIC_UNITS) {
    const coverageUnitId = `CU-${sUnit.semanticUnitId}`;
    const cu = await db.coverageUnit.upsert({
      where: { id: coverageUnitId },
      update: {
        status: 'PROCESSED',
        notes: `Batch P6 mapped to Concept: ${sUnit.targetConceptId}`,
      },
      create: {
        id: coverageUnitId,
        sourceId: source.id,
        label: `${sUnit.semanticUnitId}: ${sUnit.title}`,
        scopeDescription: sUnit.scope,
        status: 'PROCESSED',
        notes: `Batch P6 mapped to Concept: ${sUnit.targetConceptId}`,
      },
    });

    await db.ingestionItem.upsert({
      where: { id: `ING-${sUnit.semanticUnitId}` },
      update: {
        status: 'MAPPED',
        extractedContent: sUnit.scope,
      },
      create: {
        id: `ING-${sUnit.semanticUnitId}`,
        sourceId: source.id,
        coverageUnitId: cu.id,
        rawInput: `Legacy Chapter ${sUnit.legacyChapterNumber}: ${sUnit.title}`,
        extractedContent: sUnit.scope,
        status: 'MAPPED',
      },
    });
  }

  // 4. Seed Topics & Concepts
  const topicMap: Record<number, string> = {};

  for (const cDef of BATCH_P6_CONCEPTS) {
    if (!topicMap[cDef.topicOrder]) {
      const topicRecord = await db.topic.upsert({
        where: {
          subjectId_slug: {
            subjectId: politySubject.id,
            slug: cDef.topicSlug,
          },
        },
        update: {
          title: cDef.topicTitle,
          description: cDef.topicDescription,
          order: cDef.topicOrder,
        },
        create: {
          title: cDef.topicTitle,
          slug: cDef.topicSlug,
          description: cDef.topicDescription,
          subjectId: politySubject.id,
          order: cDef.topicOrder,
        },
      });
      topicMap[cDef.topicOrder] = topicRecord.id;
    }

    const topicId = topicMap[cDef.topicOrder];

    // Upsert Concept
    const concept = await db.concept.upsert({
      where: { id: cDef.id },
      update: {
        title: cDef.title,
        slug: cDef.slug,
        shortDefinition: cDef.shortDefinition,
        difficulty: cDef.difficulty,
        topicId: topicId,
      },
      create: {
        id: cDef.id,
        title: cDef.title,
        slug: cDef.slug,
        shortDefinition: cDef.shortDefinition,
        difficulty: cDef.difficulty,
        status: 'CANONICAL',
        topicId: topicId,
      },
    });

    // Clear child relations for idempotent re-seeding
    await db.claim.deleteMany({ where: { conceptId: concept.id } });
    await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
    await db.examConceptMapping.deleteMany({ where: { conceptId: concept.id } });
    await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
    await db.question.deleteMany({ where: { conceptId: concept.id } });

    // Seed Claims & Evidence
    for (const claimDef of cDef.claims) {
      const claim = await db.claim.create({
        data: {
          id: claimDef.id,
          conceptId: concept.id,
          statement: claimDef.statement,
          claimType: claimDef.claimType,
          confidence: claimDef.confidence,
          epistemicLevel: claimDef.epistemicLevel,
          status: 'CANONICAL_CLAIM',
        },
      });

      const evidenceId = `EVD-${claimDef.id}`;
      await db.evidence.upsert({
        where: { id: evidenceId },
        update: {
          locator: claimDef.locator,
          excerpt: claimDef.excerpt,
        },
        create: {
          id: evidenceId,
          claimId: claim.id,
          sourceId: source.id,
          locator: claimDef.locator,
          excerpt: claimDef.excerpt,
          evidenceType: 'STATUTORY_PROVISION',
          authority: 'STATUTORY_AUTHORITY',
          evidentiarySupport: 'DIRECT_STATUTORY',
        },
      });
    }

    // Seed Content Blocks
    for (const block of cDef.contentBlocks) {
      const blockId = `CB-${concept.id}-${block.order}`;
      await db.contentBlock.create({
        data: {
          id: blockId,
          conceptId: concept.id,
          type: block.type,
          title: block.title,
          body: block.body,
          order: block.order,
          visibility: 'PUBLIC',
        },
      });
    }

    // Seed Exam Mappings
    for (const em of cDef.examMappings) {
      const examId = examMap[em.examCode];
      if (examId) {
        await db.examConceptMapping.create({
          data: {
            examId,
            conceptId: concept.id,
            relevance: em.relevance,
            priority: em.priority,
            requiredDepth: em.requiredDepth,
            syllabusUnit: em.syllabusUnit,
            notes: em.notes,
            frequentTraps: em.frequentTraps || null,
          },
        });
      }
    }

    // Seed Revision Units
    for (const ru of cDef.revisionUnits) {
      const ruId = `RU-${concept.id}-${ru.type}`;
      await db.revisionUnit.create({
        data: {
          id: ruId,
          conceptId: concept.id,
          type: ru.type,
          content: ru.content,
          priority: 'CORE',
          order: ru.order,
        },
      });
    }

    // Seed Questions
    for (let qIdx = 0; qIdx < cDef.questions.length; qIdx++) {
      const q = cDef.questions[qIdx];
      const qId = `Q-${concept.id}-${qIdx + 1}`;
      await db.question.create({
        data: {
          id: qId,
          conceptId: concept.id,
          type: 'MULTIPLE_CHOICE',
          stem: q.stem,
          options: JSON.stringify(q.options),
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          trapExplanation: q.trapExplanation || null,
          difficulty: q.difficulty,
          isPYQ: q.isPYQ,
        },
      });
    }
  }

  console.log(`Successfully seeded Batch P6 knowledge base. Total concepts: ${BATCH_P6_CONCEPTS.length}.`);
}
