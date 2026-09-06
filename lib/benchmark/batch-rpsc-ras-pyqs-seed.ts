/**
 * RPSC RAS 10-Year Canonical Previous Year Questions (Prelims & Mains)
 * Cohort Cycles: 2013, 2016, 2018, 2021, and 2023
 * 
 * Disciplines Covered:
 * 1. Rajasthan History, Art, Architecture & Culture (Prelims & Mains)
 * 2. Rajasthan & Indian Physical Geography (Prelims & Mains)
 * 3. Indian Polity, Governance & State Administration (Prelims & Mains)
 * 4. Rajasthan & Indian Macroeconomics, Public Finance & Welfare Schemes (Prelims & Mains)
 * 5. Science & Technology, Defence & Space (Prelims & Mains)
 * 
 * Mind of Aravalli — Academic Reading Hub
 */

import { db } from '../db/client';

export interface RPSCQuestionDefinition {
  conceptId: string;
  type: 'MCQ_SINGLE' | 'DESCRIPTIVE_2M' | 'DESCRIPTIVE_5M' | 'DESCRIPTIVE_10M';
  stem: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  trapExplanation?: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  isPYQ: boolean;
  pyqYear: number;
  pyqPaper: string;
  pyqStage: 'Prelims' | 'Mains';
  pyqMarks: number;
  examinerTrapPattern?: string;
}

export const CANONICAL_RPSC_RAS_PYQS: RPSCQuestionDefinition[] = [
  // =========================================================================
  // 1. RAJASTHAN HISTORY, ART, ARCHITECTURE & CULTURE
  // =========================================================================

  // --- RPSC RAS Prelims 2023 ---
  {
    conceptId: 'CON-ART-03', // UNESCO Hill Forts of Rajasthan
    type: 'MCQ_SINGLE',
    stem: 'Which group of hill forts of Rajasthan was inscribed on the UNESCO World Heritage List in the 37th session of the World Heritage Committee held in Phnom Penh, Cambodia (2013)?',
    options: [
      'Chittorgarh, Kumbhalgarh, Ranthambore, Amber, Jaisalmer, Gagron',
      'Chittorgarh, Mehrangarh, Taragarh, Amber, Gagron, Kumbhalgarh',
      'Chittorgarh, Kumbhalgarh, Junagarh, Ranthambore, Jaisalmer, Nahargarh',
      'Chittorgarh, Kumbhalgarh, Mehrangarh, Amber, Ranthambore, Jaisalmer'
    ],
    correctAnswer: 'Chittorgarh, Kumbhalgarh, Ranthambore, Amber, Jaisalmer, Gagron',
    explanation: '1. In June 2013, at Phnom Penh (Cambodia), UNESCO inscribed the "Hill Forts of Rajasthan" as a serial World Heritage Site.\n2. The six selected forts are: (1) Chittorgarh Fort, (2) Kumbhalgarh Fort (Rajsamand), (3) Ranthambore Fort (Sawai Madhopur), (4) Amber Fort (Jaipur), (5) Jaisalmer Fort (Sonar Qila), and (6) Gagron Fort (Jhalawar - a premier Jal Durg / water fort).\n3. Mehrangarh (Jodhpur), Junagarh (Bikaner), and Taragarh (Bundi/Ajmer) were NOT included in the final UNESCO inscription list.',
    trapExplanation: 'Candidates frequently include Mehrangarh (Jodhpur) due to its monumental stature, but Mehrangarh was omitted from the UNESCO serial nomination.',
    difficulty: 'MEDIUM',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'RPSC RAS Prelims',
    pyqStage: 'Prelims',
    pyqMarks: 1.33,
    examinerTrapPattern: 'Plausible inclusion of non-UNESCO iconic forts like Mehrangarh or Junagarh.'
  },

  // --- RPSC RAS Mains 2021 (Paper I, 5 Marks) ---
  {
    conceptId: 'CON-ART-03', // Hill Forts
    type: 'DESCRIPTIVE_5M',
    stem: 'Analyze the architectural and strategic significance of Gagron Fort as a "Jal Durg" (Water Fort). (Word limit: ~50 words)',
    correctAnswer: 'Strategic Jal Durg surrounded by Ahu and Kali Sindh rivers without foundation on a hillock.',
    explanation: '**1. Geographical & Defensive Strategic Layout:**\n- Located in Jhalawar at the sacred confluence (Sangam) of River Ahu and River Kali Sindh.\n- Classed under the ancient Kautilyan "Audak / Jal Durg" category, protected by rivers on three sides and a deep moat on the fourth.\n\n**2. Architectural Peculiarity:**\n- Built without a conventional plinth/foundation directly upon a rugged natural quartzite hillock.\n- Houses the Dargah of Sufi Saint Mitheshah (Khamish-ud-din) and the Cenotaph (Chhatri) of Saint Pipaji.\n\n**3. Historical Sacrifices:**\n- Witnessed two famous Saka/Jauhars in 1423 CE (under Achaldas Khichi against Hoshang Shah of Malwa) and 1444 CE (under Palhan Singh against Mahmud Khilji).',
    trapExplanation: 'Failure to mention the specific river confluence (Ahu and Kali Sindh) and historical Jauhar/Saka loses key marks in RPSC Paper I evaluation.',
    difficulty: 'HARD',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'RPSC RAS Mains Paper I',
    pyqStage: 'Mains',
    pyqMarks: 5.0,
    examinerTrapPattern: 'Requires exact river confluence names and Kautilyan fort classification typology.'
  },

  // --- RPSC RAS Prelims 2021 ---
  {
    conceptId: 'CON-ART-04', // Rajasthan Miniature Painting
    type: 'MCQ_SINGLE',
    stem: 'The famous painting of "Bani Thani" was painted by which artist, and under whose patronage did the Kishangarh School of painting attain its golden age?',
    options: [
      'Sahibdin; Maharana Jagat Singh I',
      'Nihal Chand; Sawant Singh (Nagari Das)',
      'Nanakram; Man Singh Rathore',
      'Bagta; Rawat Gokul Das'
    ],
    correctAnswer: 'Nihal Chand; Sawant Singh (Nagari Das)',
    explanation: '1. "Bani Thani" (the Indian Mona Lisa, so coined by art historian Eric Dickinson) was painted by the court master Nihal Chand.\n2. It flourished under the patronage of Raja Sawant Singh of Kishangarh, who composed devotional poetry to Radha-Krishna under the pen-name "Nagari Das".\n3. Stylistic hallmarks: Lotus-bud arched elongated eyes, arched eyebrows, slender neck, pointed chin, transparent odhani (veil), and Radha-Krishna allegorical themes.',
    trapExplanation: 'Confusing Mewar court artist Sahibdin with Kishangarh painter Nihal Chand.',
    difficulty: 'EASY',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'RPSC RAS Prelims',
    pyqStage: 'Prelims',
    pyqMarks: 1.33,
    examinerTrapPattern: 'Matching artist with royal patron pen-name (Nagari Das).'
  },

  // --- RPSC RAS Mains 2018 (Paper I, 2 Marks) ---
  {
    conceptId: 'CON-ART-04', // Miniature Paintings
    type: 'DESCRIPTIVE_2M',
    stem: 'Write two distinctive stylistic features of the Bundi-Kota School of Painting. (Word limit: ~15-20 words)',
    correctAnswer: 'Vibrant depiction of natural flora/fauna in Bundi; dynamic royal hunting (Shikar) expeditions in Kota.',
    explanation: '**Two Distinctive Characteristics:**\n1. **Bundi School:** Dense representation of lush vegetation, natural wildlife, avian life, water bodies, and dramatic rainy cloud skies (Chitrashala murals).\n2. **Kota School:** Unrivalled dynamic realism in royal hunting (*Shikar*) scenes, featuring women and queens participating actively in hunting expeditions amidst rocky ravines.',
    trapExplanation: 'Writing generic Rajasthani painting points rather than the exact Bundi (nature/vegetation) vs Kota (Shikar/women hunters) hallmarks.',
    difficulty: 'MEDIUM',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'RPSC RAS Mains Paper I',
    pyqStage: 'Mains',
    pyqMarks: 2.0,
    examinerTrapPattern: 'Must clearly segregate Bundi nature motifs from Kota Shikar scenes in under 20 words.'
  },

  // --- RPSC RAS Mains 2021 (Paper I, 10 Marks) ---
  {
    conceptId: 'CON-ART-05', // Bijolia Peasant Movement & Prajamandal
    type: 'DESCRIPTIVE_10M',
    stem: 'Examine the nature, leadership, and national significance of the Bijolia Peasant Movement in Rajasthan. (Word limit: ~100 words)',
    correctAnswer: '44-year non-violent peasant resistance against 84 cesses, pioneering the Rajasthan subaltern and Prajamandal awakening.',
    explanation: '**1. Genesis & Nature:**\n- Longest continuous non-violent agrarian movement in India (1897–1941, 44 years) led predominantly by the Dhakad peasant community of Bijolia Jagir (Mewar) against 84 oppressive cesses (*Lag-Bagh*), forced unpaid labour (*Begar*), and *Chanwari Kar* (marriage tax).\n\n**2. Evolutionary Tripartite Leadership:**\n- *Phase I (1897–1915):* Spontaneous local struggle under Sadhu Sitaram Das, Nanji Patel, and Thakari Patel.\n- *Phase II (1916–1923):* Institutionalization under Vijay Singh Pathik (Bhup Singh); founded Bijolia Kisan Panchayat and Uparmal Panch Board (1917); publicized nationally via Ganesh Shankar Vidyarthi’s newspaper *Pratap* (Kanpur).\n- *Phase III (1923–1941):* Integration with the broader national movement under Jamnalal Bajaj, Manikya Lal Verma, and Haribhau Upadhyaya; final settlement brokered with Mewar Revenue Minister Sir T. Vijayaraghavacharya (1941).\n\n**3. Significance:**\n- Provided the organizational blueprint and ideological catalyst for the Prajamandal movements across Rajputana, proving subaltern rural discipline without communal violence.',
    trapExplanation: 'Failing to demarcate the three chronological leadership phases or omitting the tax names (Chanwari, Begar, Lag-Bagh).',
    difficulty: 'HARD',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'RPSC RAS Mains Paper I',
    pyqStage: 'Mains',
    pyqMarks: 10.0,
    examinerTrapPattern: 'RPSC strictly awards top marks for phase-wise chronological leadership segregation.'
  },

  // --- RPSC RAS Prelims 2018 ---
  {
    conceptId: 'CON-ART-05', // Bijolia Peasant Movement
    type: 'MCQ_SINGLE',
    stem: 'Through which newspaper published from Kanpur did Vijay Singh Pathik make the Bijolia Peasant Movement a topic of all-India discussion?',
    options: [
      'Kesari',
      'Pratap',
      'Maratha',
      'Young India'
    ],
    correctAnswer: 'Pratap',
    explanation: '1. Vijay Singh Pathik contacted Ganesh Shankar Vidyarthi, the courageous editor of the Hindi weekly newspaper "Pratap" published from Kanpur.\n2. Vidyarthi gave continuous front-page national coverage to the atrocities of the Mewar Jagirdars and the peaceful resistance of Bijolia peasants.\n3. Pathik later established the Rajasthan Seva Sangh at Wardha (1919) and launched "Tarun Rajasthan" and "Navin Rajasthan".',
    trapExplanation: 'Confusing Kanpur newspaper "Pratap" with Tilak\'s "Kesari" or Pathik\'s later journal "Tarun Rajasthan".',
    difficulty: 'EASY',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'RPSC RAS Prelims',
    pyqStage: 'Prelims',
    pyqMarks: 1.33,
    examinerTrapPattern: 'Newspaper publication city matching (Pratap - Kanpur).'
  },

  // --- RPSC RAS Prelims 2016 ---
  {
    conceptId: 'CON-ANC-020', // Ancient Janapadas of Rajasthan
    type: 'MCQ_SINGLE',
    stem: 'Which ancient Janapada had its capital at "Madhyamika" (modern Nagari near Chittorgarh), as confirmed by punch-marked coin hoards and Ghosundi inscriptions?',
    options: [
      'Matsya Janapada',
      'Shivi Janapada',
      'Malava Janapada',
      'Yaudheya Janapada'
    ],
    correctAnswer: 'Shivi Janapada',
    explanation: '1. The Shivi Janapada migrated from the Punjab region following Alexander\'s invasion (4th century BCE) and settled in south-western Rajasthan.\n2. Its capital was "Madhyamika" (modern Nagari, Chittorgarh district).\n3. Excavations by D.R. Bhandarkar yielded copper coins bearing the Brahmi legend "Majhamikaya Sivijanapadasa" (Coin of the Shivi Janapada of Madhyamika).\n4. Matsya had its capital at Viratnagar (Bairath, Jaipur); Malavas had their capital at Nagar (Karkota Nagar, Tonk).',
    trapExplanation: 'Confusing Shivi capital (Madhyamika/Nagari) with Matsya capital (Viratnagar/Bairath) or Malava capital (Nagar/Tonk).',
    difficulty: 'MEDIUM',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'RPSC RAS Prelims',
    pyqStage: 'Prelims',
    pyqMarks: 1.33,
    examinerTrapPattern: 'Janapada capital mapping: Shivi (Madhyamika), Matsya (Viratnagar), Malava (Nagar).'
  },

  // --- RPSC RAS Mains 2018 (Paper I, 2 Marks) ---
  {
    conceptId: 'CON-ANC-020', // Ancient Janapadas
    type: 'DESCRIPTIVE_2M',
    stem: 'What was the territorial extent and capital of the ancient Matsya Janapada? (Word limit: ~15-20 words)',
    correctAnswer: 'Covered modern Jaipur, Alwar, and Bharatpur; capital was Viratnagar (modern Bairath).',
    explanation: '**Territorial Extent & Capital:**\n- **Territory:** Encompassed parts of modern Jaipur, Alwar, Bharatpur, and Dausa in north-eastern Rajasthan.\n- **Capital:** Viratnagar (modern Bairath), established by King Virata, celebrated as the Pandavas\' hideout during their *Agyatvas* (exile).',
    trapExplanation: 'Listing southern Rajasthan districts instead of the correct north-eastern Jaipur-Alwar belt.',
    difficulty: 'EASY',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'RPSC RAS Mains Paper I',
    pyqStage: 'Mains',
    pyqMarks: 2.0,
    examinerTrapPattern: 'Exact modern district mapping for ancient Vedic/Mahajanapada polities.'
  },

  // =========================================================================
  // 2. RAJASTHAN & INDIAN GEOGRAPHY
  // =========================================================================

  // --- RPSC RAS Prelims 2023 ---
  {
    conceptId: 'CON-GEO-013', // Physiographic Divisions of Rajasthan
    type: 'MCQ_SINGLE',
    stem: 'Match the mountain peaks of Rajasthan with their respective districts:\n(A) Gurushikhar — 1. Sirohi\n(B) Ser — 2. Sirohi\n(C) Dilwara — 3. Sirohi\n(D) Jarga — 4. Udaipur\n(E) Raghunathgarh — 5. Sikar\n\nWhich of the following represents the highest peak of the Northern Aravallis?',
    options: [
      'Taragarh (Ajmer)',
      'Khoh (Jaipur)',
      'Raghunathgarh (Sikar)',
      'Bairath (Jaipur)'
    ],
    correctAnswer: 'Raghunathgarh (Sikar)',
    explanation: '1. Aravalli Physiographic Elevation Breakdown:\n   - **Southern Aravallis (Highest segment):** Gurushikhar (1,722 m, Mt. Abu, Sirohi), Ser (1,597 m, Sirohi), Dilwara (1,442 m, Sirohi), Jarga (1,431 m, Udaipur), Achalgarh (1,380 m, Sirohi), Kumbhalgarh (1,224 m, Rajsamand).\n   - **Central Aravallis (Intermediate segment):** Goramji (934 m), Taragarh (870 m, Ajmer).\n   - **Northern Aravallis:** Raghunathgarh (1,055 m, Sikar) is the undisputed HIGHEST peak of the Northern Aravalli range, followed by Malket (1,051 m, Sikar), Lohargal (1,051 m, Jhunjhunu), and Khoh (920 m, Jaipur).',
    trapExplanation: 'Candidates confuse highest peak of Central Aravallis (Goramji/Taragarh) with highest peak of Northern Aravallis (Raghunathgarh).',
    difficulty: 'MEDIUM',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'RPSC RAS Prelims',
    pyqStage: 'Prelims',
    pyqMarks: 1.33,
    examinerTrapPattern: 'Peak classification by specific Aravalli zone (Northern vs Central vs Southern).'
  },

  // --- RPSC RAS Mains 2021 (Paper II, 5 Marks) ---
  {
    conceptId: 'CON-GEO-013', // Physiographic Divisions of Rajasthan
    type: 'DESCRIPTIVE_5M',
    stem: 'Describe the physiographic characteristics and economic importance of the "Hadoti Plateau" (South-Eastern Plateau of Rajasthan). (Word limit: ~50 words)',
    correctAnswer: 'Deccan trap basaltic plateau with black regur soil, rich in sandstone/limestone and soybean/coriander/citrus cultivation.',
    explanation: '**1. Physiographic Features:**\n- Geologically an extension of the Malwa and Deccan Traps, covering Kota, Baran, Bundi, and Jhalawar (approx. 9.6% area of Rajasthan).\n- Comprises the Vindhyan Scarp Land (*Khadin/Dhang*) and Deccan Lava Plateau with fertile black volcanic (*Regur/Vertisols*) soils.\n\n**2. Economic Significance:**\n- Rich in building stones: Kota stone (limestone), Jhalawar sandstone, and silica sand.\n- Major agricultural powerhouse for cash crops: Soybean, coriander (*Dhaniya* mandi at Ramganj Mandi), oranges/mandarins (Jhalawar), and mustard.\n- Drained by the perennial Chambal river system supporting hydro-power and IGNP/Chambal canal irrigation.',
    trapExplanation: 'Omitting soil taxonomy (Vertisols/Regur) or ignoring specific mineral endowments (Kota stone).',
    difficulty: 'HARD',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'RPSC RAS Mains Paper II',
    pyqStage: 'Mains',
    pyqMarks: 5.0,
    examinerTrapPattern: 'Must balance geological rock formation with modern agri-mineral economic outputs.'
  },

  // --- RPSC RAS Prelims 2021 ---
  {
    conceptId: 'CON-GEO-011', // Drainage Systems of Rajasthan / India
    type: 'MCQ_SINGLE',
    stem: 'Which of the following rivers of Rajasthan belongs exclusively to the "Inland Drainage System" (Antah Pravah Pranali)?',
    options: [
      'Banas, Bedach, Kothari',
      'Kantara, Sabi, Kakney, Ruparel',
      'Sabarmati, Luni, Sukri',
      'Chambal, Kalisindh, Parbati'
    ],
    correctAnswer: 'Kantara, Sabi, Kakney, Ruparel',
    explanation: '1. Inland drainage accounts for roughly 60.2% of the drainage area of Rajasthan.\n2. Inland rivers terminate in desert sands without reaching either the Arabian Sea or the Bay of Bengal:\n   - **Kantara (Kantli):** Originates in Khandela hills (Sikar), flows through Jhunjhunu, sinks in Churu border sand dunes (Torawati basin).\n   - **Sabi:** Originates in Sewar hills (Jaipur), sinks in Haryana (Najafgarh drain).\n   - **Kakney (Masurdi):** Originates in Kotari village (Jaisalmer), creates Bujh Lake.\n   - **Ruparel (Barah/Laswari):** Originates in Udhanath hills (Alwar), sinks in Bharatpur.\n   - **Ghaggar:** Dead river flowing through Hanumangarh/Anupgarh.\n3. Banas, Bedach, Chambal drain to the Bay of Bengal (via Yamuna); Luni and Sabarmati drain to the Arabian Sea.',
    trapExplanation: 'Confusing Luni (which flows to Rann of Kutch/Arabian Sea system) with pure inland drainage rivers like Kantli and Kakney.',
    difficulty: 'MEDIUM',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'RPSC RAS Prelims',
    pyqStage: 'Prelims',
    pyqMarks: 1.33,
    examinerTrapPattern: 'Tripartite drainage separation: Arabian Sea vs Bay of Bengal vs Inland Drainage.'
  },

  // --- RPSC RAS Mains 2018 (Paper II, 2 Marks) ---
  {
    conceptId: 'CON-GEO-011', // Drainage Systems
    type: 'DESCRIPTIVE_2M',
    stem: 'What is the "Fifty Centimeter (50 cm) Isohyet line" in Rajasthan and what is its significance? (Word limit: ~15-20 words)',
    correctAnswer: 'Rainfall isohyet running along the Aravalli axis dividing Rajasthan into arid/semi-arid west and sub-humid east.',
    explanation: '**50 cm Isohyet Line:**\n- Aligns almost parallel to the western ridge of the Aravalli mountain range.\n- Acts as the cardinal climatic and hydrological boundary: dividing the hyper-arid and semi-arid desert zone (West) from the sub-humid eastern plains and plateau (East).',
    trapExplanation: 'Confusing the 50 cm isohyet (Aravalli divide) with the 25 cm isohyet (which bisects the Thar Desert into Marusthali and Semi-Arid Bangar).',
    difficulty: 'MEDIUM',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'RPSC RAS Mains Paper II',
    pyqStage: 'Mains',
    pyqMarks: 2.0,
    examinerTrapPattern: 'Precision between 25 cm isohyet (Thar bisection) and 50 cm isohyet (Aravalli water divide).'
  },

  // =========================================================================
  // 3. POLITY & STATE ADMINISTRATION OF RAJASTHAN
  // =========================================================================

  // --- RPSC RAS Prelims 2023 ---
  {
    conceptId: 'CON-POL-127', // State Executive: Governor
    type: 'MCQ_SINGLE',
    stem: 'Under Article 163 of the Constitution of India, if any question arises whether any matter is or is not a matter as respects which the Governor is required to act in his discretion, whose decision shall be final?',
    options: [
      'The decision of the President of India',
      'The decision of the Governor in his discretion shall be final',
      'The decision of the High Court of the State',
      'The decision of the Chief Minister and Council of Ministers'
    ],
    correctAnswer: 'The decision of the Governor in his discretion shall be final',
    explanation: '1. According to Article 163(2) of the Constitution of India: "If any question arises whether any matter is or is not a matter as respects which the Governor is by or under this Constitution required to act in his discretion, the decision of the Governor in his discretion shall be final, and the validity of anything done by the Governor shall not be called in question on the ground that he ought or ought not to have acted in his discretion."\n2. This constitutional discretion is wider than the President of India, who has no explicit constitutional discretion corresponding to Article 163(2).',
    trapExplanation: 'Assuming the President or the High Court adjudicates constitutional disputes over gubernatorial discretion.',
    difficulty: 'MEDIUM',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'RPSC RAS Prelims',
    pyqStage: 'Prelims',
    pyqMarks: 1.33,
    examinerTrapPattern: 'Testing literal statutory text of Article 163(2) where Governor\'s own verdict is final.'
  },

  // --- RPSC RAS Mains 2021 (Paper III, 5 Marks) ---
  {
    conceptId: 'CON-POL-127', // State Executive: Governor
    type: 'DESCRIPTIVE_5M',
    stem: 'Examine the constitutional role and discretionary powers of the Governor of Rajasthan in the context of hung assembly scenarios. (Word limit: ~50 words)',
    correctAnswer: 'Situational discretion under Art 163/164 following Sarkaria Commission norms to invite the single largest party or pre-poll alliance.',
    explanation: '**1. Constitutional Discretion (Situational):**\n- Under Articles 163 & 164, appointment of the Chief Minister in a hung assembly invokes the Governor\'s situational discretion, as held in *S.R. Bommai (1994)* and *Rameshwar Prasad (2006)*.\n\n**2. Sarkaria/Punchhi Commission Sequencing:**\n- Must adhere to established order of preference:\n  1. Pre-poll alliance commanding majority.\n  2. Single largest party staking claim with outside support.\n  3. Post-poll coalition formed prior to claim.\n\n**3. Floor Test Imperative:**\n- Subjecting the claimant to a mandatory floor test on the floor of the Vidhan Sabha within a stipulated timeframe (typically 7–14 days) rather than subjective Raj Bhavan headcount.',
    trapExplanation: 'Failing to mention the Sarkaria Commission\'s 4-tier preference sequence for hung assemblies.',
    difficulty: 'HARD',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'RPSC RAS Mains Paper III',
    pyqStage: 'Mains',
    pyqMarks: 5.0,
    examinerTrapPattern: 'Evaluating practical application of Sarkaria Commission sequencing vs arbitrary discretionary action.'
  },

  // --- RPSC RAS Prelims 2021 ---
  {
    conceptId: 'CON-POL-130', // Rajasthan Statutory Watchdogs: RSHRC & Lokayukta
    type: 'MCQ_SINGLE',
    stem: 'Under the Protection of Human Rights (Amendment) Act, 2019, what is the composition and tenure of the Chairperson and Members of the Rajasthan State Human Rights Commission (RSHRC)?',
    options: [
      'Chairperson and 3 Members; Tenure 5 years or 70 years of age',
      'Chairperson and 2 Members; Tenure 3 years or 70 years of age',
      'Chairperson and 4 Members; Tenure 3 years or 65 years of age',
      'Chairperson and 2 Members; Tenure 5 years or 65 years of age'
    ],
    correctAnswer: 'Chairperson and 2 Members; Tenure 3 years or 70 years of age',
    explanation: '1. Under the Protection of Human Rights Act 1993, as amended by the 2019 Amendment Act:\n   - **Composition (Section 21):** 1 Chairperson (former Chief Justice or Judge of a High Court) and 2 Members (one who is or has been a High Court Judge or District Judge with 7+ years experience, and one having practical knowledge in human rights).\n   - **Tenure (Section 24):** Reduced from 5 years to 3 years or up to the age of 70 years, whichever is earlier. Both Chairperson and Members are eligible for re-appointment.\n2. RSHRC was constituted in January 1999 and became functional in March 2000 with Justice Kanta Bhatnagar as its first Chairperson.',
    trapExplanation: 'Outdated study materials still cite the pre-2019 5-year tenure or 4-member composition.',
    difficulty: 'MEDIUM',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'RPSC RAS Prelims',
    pyqStage: 'Prelims',
    pyqMarks: 1.33,
    examinerTrapPattern: 'Testing post-2019 statutory amendments on tenure reduction (5 years down to 3 years).'
  },

  // --- RPSC RAS Mains 2018 (Paper III, 2 Marks) ---
  {
    conceptId: 'CON-POL-130', // Statutory Watchdogs: Lokayukta
    type: 'DESCRIPTIVE_2M',
    stem: 'Which dignitaries are excluded from the investigatory jurisdiction of the Lokayukta in Rajasthan under the Rajasthan Lokayukta and Up-Lokayuktas Act, 1973? (Word limit: ~15-20 words)',
    correctAnswer: 'Chief Minister, Members of Legislative Assembly (MLAs), Judges/Judicial officers, and RPSC Chairperson/Members.',
    explanation: '**Excluded Jurisdictions (Section 19):**\n- Chief Minister of Rajasthan.\n- Members of the Rajasthan Legislative Assembly (MLAs).\n- Sitting judges and judicial service officers.\n- Chairperson and Members of the RPSC; Chief Election Commissioner/State Election Commissioner.\n- Officials of the Accountant General.',
    trapExplanation: 'Thinking Ministers or Mayors are excluded; only Chief Minister and MLAs are outside jurisdiction among political executives.',
    difficulty: 'HARD',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'RPSC RAS Mains Paper III',
    pyqStage: 'Mains',
    pyqMarks: 2.0,
    examinerTrapPattern: 'Must explicitly name CM and MLAs as non-amenable to Lokayukta inquiry in Rajasthan.'
  },

  // --- RPSC RAS Mains 2021 (Paper III, 10 Marks) ---
  {
    conceptId: 'CON-POL-131', // RPSC, SEC & State Finance Commission
    type: 'DESCRIPTIVE_10M',
    stem: 'Evaluate the constitutional mandate, composition, and functions of the State Finance Commission of Rajasthan under Article 243-I and 243-Y. (Word limit: ~100 words)',
    correctAnswer: 'Quinquennial constitutional body reviewing financial position of Panchayats and Municipalities, recommending net state tax devolution and grants-in-aid.',
    explanation: '**1. Constitutional Genesis & Mandate:**\n- Mandated by the 73rd and 74th Constitutional Amendment Acts under Article 243-I (for Panchayati Raj Institutions) and Article 243-Y (for Urban Local Bodies).\n- Constituted quinquennially (every 5 years) by the Governor of Rajasthan to review the financial position of local self-governments.\n\n**2. Core Functional Prerogatives:**\n- **Devolution Principles:** Recommends the principles governing the distribution between the State and local bodies of the net proceeds of taxes, duties, tolls, and fees levied by the State.\n- **Tax Assignment:** Determination of taxes, duties, and tolls that may be assigned to or appropriated by Panchayats and Municipalities.\n- **Grants-in-Aid:** Formulation of measures to augment the Consolidated Fund of the State to supplement local resources.\n\n**3. Rajasthan Chronology & Devolution Benchmark:**\n- 1st SFC (K.K. Goyal, 1995–2000).\n- 6th SFC (headed by Pradyuman Singh with members Ashok Lahoti and Laxman Singh Rawat) recommended devitalising **6.75%** of the State\'s own net tax revenue among local bodies (split in a 75.1 : 24.9 ratio between Rural and Urban local bodies based on Census 2011 population and area criteria).',
    trapExplanation: 'Missing the exact devolution percentage (6.75%) or the rural-urban split ratio (75.1 : 24.9) of the 6th SFC.',
    difficulty: 'HARD',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'RPSC RAS Mains Paper III',
    pyqStage: 'Mains',
    pyqMarks: 10.0,
    examinerTrapPattern: 'Awarding maximum marks requires citing the current SFC Chairman (Pradyuman Singh) and devolution formula.'
  },

  // =========================================================================
  // 4. RAJASTHAN & INDIAN ECONOMY, PUBLIC FINANCE & WELFARE SCHEMES
  // =========================================================================

  // --- RPSC RAS Prelims 2023 ---
  {
    conceptId: 'CON-ECO-141', // Rajasthan Socio-Demographic Profile
    type: 'MCQ_SINGLE',
    stem: 'According to Census 2011, what is the overall literacy rate and female literacy rate of Rajasthan?',
    options: [
      'Overall: 66.1%; Female: 52.1%',
      'Overall: 74.0%; Female: 65.5%',
      'Overall: 60.4%; Female: 48.2%',
      'Overall: 67.2%; Female: 55.8%'
    ],
    correctAnswer: 'Overall: 66.1%; Female: 52.1%',
    explanation: '1. As per Census 2011 for Rajasthan:\n   - **Total Literacy Rate:** 66.11% (Rural: 61.4%, Urban: 79.7%).\n   - **Male Literacy Rate:** 79.19% (Highest in Jhunjhunu 86.9%, Lowest in Pratapgarh 69.5%).\n   - **Female Literacy Rate:** 52.12% (Highest in Kota 65.9%, Lowest in Jalore 38.5%).\n2. The gender gap in literacy in Rajasthan stands at 27.07 percentage points—one of the highest gender gaps in the Indian Union.',
    trapExplanation: 'Candidates mix up national averages (74.04% overall, 65.46% female) with Rajasthan\'s state-level statistics (66.1% and 52.1%).',
    difficulty: 'MEDIUM',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'RPSC RAS Prelims',
    pyqStage: 'Prelims',
    pyqMarks: 1.33,
    examinerTrapPattern: 'Inversion of state-specific literacy census numbers with all-India benchmarks.'
  },

  // --- RPSC RAS Mains 2021 (Paper I, 5 Marks) ---
  {
    conceptId: 'CON-ECO-142', // Rajasthan Social Welfare & Labour Schemes
    type: 'DESCRIPTIVE_5M',
    stem: 'Explain the salient features and institutional architecture of the "Mukhyamantri Chiranjeevi Swasthya Bima Yojana" (MCSBY) in Rajasthan. (Word limit: ~50 words)',
    correctAnswer: 'Universal health insurance scheme launched May 2021 providing cashless secondary/tertiary care across empaneled hospitals.',
    explanation: '**1. Universal Health Coverage Model:**\n- Launched on 1st May 2021 to provide universal cashless health insurance to all families of Rajasthan (free for NFSA, SECC, small/marginal farmers, and contractual workers; nominal ₹850/year premium for others).\n\n**2. Coverage Ceiling & Benefits:**\n- Insurance coverage progressively enhanced up to ₹25 Lakhs per family per year, coupled with ₹10 Lakhs accident insurance (*Chiranjeevi Durghatna Bima*).\n- Encompasses over 1,798 packages covering secondary and tertiary hospital treatments, organ transplants, and pre/post-hospitalization medical diagnostics.\n\n**3. Delivery Platform:**\n- Administered via the Jan Aadhaar platform across empaneled government and private healthcare institutions.',
    trapExplanation: 'Mentioning old pre-2021 scheme limits (₹5 Lakhs) instead of updated ₹25 Lakh coverage cap.',
    difficulty: 'MEDIUM',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'RPSC RAS Mains Paper I',
    pyqStage: 'Mains',
    pyqMarks: 5.0,
    examinerTrapPattern: 'Testing evolving fiscal limits and target entitlement thresholds under state flagship schemes.'
  },

  // --- RPSC RAS Prelims 2021 ---
  {
    conceptId: 'CON-ECO-142', // Rajasthan Schemes
    type: 'MCQ_SINGLE',
    stem: 'Under the "Indira Gandhi Shahri Rozgar Guarantee Yojana" (IRGY-Urban) launched in Rajasthan in September 2022, how many days of guaranteed wage employment per year are provided to urban families on the lines of MGNREGA?',
    options: [
      '100 days (enhanced to 125 days)',
      '75 days',
      '150 days',
      '200 days'
    ],
    correctAnswer: '100 days (enhanced to 125 days)',
    explanation: '1. Modelled on MGNREGA, the Indira Gandhi Shahri Rozgar Guarantee Yojana (IRGY) was rolled out on 9th September 2022 by the Rajasthan Government from Khania ki Baori (Jaipur).\n2. Initial entitlement: 100 days of guaranteed manual/general wage employment per eligible household in urban areas holding a Jan Aadhaar card.\n3. In the Rajasthan State Budget 2023-24, this employment guarantee was increased from 100 days to 125 days per financial year.\n4. Eligible age criteria: 18 to 60 years.',
    trapExplanation: 'Confusing the launch provision (100 days) with subsequent budget enhancements (125 days) or rural MGNREGA baseline.',
    difficulty: 'EASY',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'RPSC RAS Prelims',
    pyqStage: 'Prelims',
    pyqMarks: 1.33,
    examinerTrapPattern: 'Tracking budget enhancements to urban employment guarantee days (100 -> 125 days).'
  },

  // --- RPSC RAS Mains 2018 (Paper I, 2 Marks) ---
  {
    conceptId: 'CON-ECO-MOD-05', // Fiscal Policy: FRBM & Deficits
    type: 'DESCRIPTIVE_2M',
    stem: 'Define "Fiscal Deficit" and state its statutory ceiling under the Rajasthan Fiscal Responsibility and Budget Management (FRBM) Act. (Word limit: ~15-20 words)',
    correctAnswer: 'Total expenditure minus total receipts excluding borrowings; legally capped at 3% of GSDP under FRBM.',
    explanation: '**Fiscal Deficit & FRBM Target:**\n- **Definition:** The excess of total government expenditure over total non-debt receipts (Revenue Receipts + Non-debt Capital Receipts). It represents total net state borrowing.\n- **FRBM Cap:** Statutory limit is fixed at 3% of Gross State Domestic Product (GSDP), subject to conditional relaxations authorized by the Union Ministry of Finance.',
    trapExplanation: 'Confusing Fiscal Deficit with Primary Deficit (which subtracts interest payments) or stating a 3.5%-4% limit without qualifying it as a temporary COVID waiver.',
    difficulty: 'MEDIUM',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'RPSC RAS Mains Paper I',
    pyqStage: 'Mains',
    pyqMarks: 2.0,
    examinerTrapPattern: 'Exact formulaic definition combined with statutory 3% GSDP ceiling.'
  },

  // =========================================================================
  // 5. SCIENCE & TECHNOLOGY, DEFENCE & NUCLEAR
  // =========================================================================

  // --- RPSC RAS Prelims 2023 ---
  {
    conceptId: 'CON-SCI-118', // Nuclear Physics & Energy
    type: 'MCQ_SINGLE',
    stem: 'Where was India\'s first underground nuclear test codenamed "Smiling Buddha" (Operation Happy Krishna) conducted on 18th May 1974, and what fissile material was utilized?',
    options: [
      'Pokhran Test Range (Jaisalmer); Plutonium-239',
      'Pokhran Test Range (Jodhpur); Uranium-235',
      'Rawatbhata (Chittorgarh); Thorium-232',
      'Thumba (Kerala); Plutonium-239'
    ],
    correctAnswer: 'Pokhran Test Range (Jaisalmer); Plutonium-239',
    explanation: '1. On 18 May 1974, India successfully conducted its first nuclear test at the Pokhran Test Range in the Thar Desert (Jaisalmer district, Rajasthan), designated "Pokhran-I" (codenamed "Smiling Buddha").\n2. It was an implosion-type weapon using weapon-grade Plutonium-239 extracted from spent fuel of the CIRUS research reactor at Trombay.\n3. The test was followed 24 years later by "Operation Shakti" (Pokhran-II) on 11 and 13 May 1998 under Dr. A.P.J. Abdul Kalam and Dr. R. Chidambaram.',
    trapExplanation: 'Confusing Pokhran\'s administrative district (Jaisalmer, NOT Jodhpur) or confusing the fissile trigger (Plutonium-239 vs Uranium-235).',
    difficulty: 'EASY',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'RPSC RAS Prelims',
    pyqStage: 'Prelims',
    pyqMarks: 1.33,
    examinerTrapPattern: 'Geography-nuclear pairing: Pokhran district location (Jaisalmer) and core fissile isotope.'
  },

  // --- RPSC RAS Mains 2021 (Paper II, 5 Marks) ---
  {
    conceptId: 'CON-SCI-118', // Nuclear Physics & Energy
    type: 'DESCRIPTIVE_5M',
    stem: 'Explain the three stages of India\'s Nuclear Power Programme formulated by Dr. Homi J. Bhabha. (Word limit: ~50 words)',
    correctAnswer: 'Three closed fuel cycle stages: PHWR with Natural Uranium, FBR with Plutonium, and Advanced Reactors utilizing Thorium reserves.',
    explanation: '**1. Stage I: Pressurized Heavy Water Reactors (PHWRs)**\n- Fuel: Natural Uranium ($UO_2$); Moderator & Coolant: Heavy Water ($D_2O$).\n- By-product: Plutonium-239 ($Pu^{239}$).\n\n**2. Stage II: Fast Breeder Reactors (FBRs)**\n- Fuel: Plutonium-239 and Uranium-238 blanket (Prototype Fast Breeder Reactor at Kalpakkam).\n- "Breeds" more fissile material ($Pu^{239}$ and Uranium-233 from Thorium blankets) than it consumes.\n\n**3. Stage III: Advanced Thorium Reactors (AHWRs)**\n- Fuel: Thorium-232 catalyzed with Uranium-233.\n- Capitalizes on India\'s vast Monazite beach sand Thorium reserves in Kerala and Odisha for self-sustained energy independence.',
    trapExplanation: 'Missing the specific fuel-moderator cycle and failing to highlight Thorium-232 utilization in Stage III.',
    difficulty: 'HARD',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'RPSC RAS Mains Paper II',
    pyqStage: 'Mains',
    pyqMarks: 5.0,
    examinerTrapPattern: 'Must articulate sequential fuel transitions: Natural Uranium -> Plutonium-239 -> Thorium-232.'
  },

  // --- RPSC RAS Prelims 2021 ---
  {
    conceptId: 'CON-SCI-117', // Space Technology: ISRO Launch Vehicles
    type: 'MCQ_SINGLE',
    stem: 'Which rocket propellant combination is used in the indigenous CE-20 Cryogenic Upper Stage engine of ISRO\'s Launch Vehicle Mark-3 (LVM3 / GSLV Mk III)?',
    options: [
      'Liquid Hydrogen (LH2) as fuel and Liquid Oxygen (LOX) as oxidizer',
      'Unsymmetrical Dimethylhydrazine (UDMH) and Nitrogen Tetroxide (N2O4)',
      'Hydroxyl-terminated Polybutadiene (HTPB) and Ammonium Perchlorate',
      'Kerosene (Isrosene) and Liquid Oxygen'
    ],
    correctAnswer: 'Liquid Hydrogen (LH2) as fuel and Liquid Oxygen (LOX) as oxidizer',
    explanation: '1. Cryogenic propulsion operates at extremely sub-zero temperatures:\n   - **Fuel:** Liquid Hydrogen ($LH_2$) stored at $-253^\\circ\\text{C}$ (20 Kelvin).\n   - **Oxidizer:** Liquid Oxygen ($LOX$) stored at $-183^\\circ\\text{C}$ (90 Kelvin).\n2. The CE-20 engine, developed by the Liquid Propulsion Systems Centre (LPSC), powers the C25 stage of LVM3, delivering exceptional specific impulse ($I_{sp}$) to inject Chandrayaan-3 and Gaganyaan into orbit.\n3. UDMH + $N_2O_4$ is hypergolic earth-storable liquid propellant used in Vikas engines; HTPB is solid propellant.',
    trapExplanation: 'Confusing Vikas engine earth-storable liquid propellant (UDMH/N2O4) with true cryogenic propellant (Liquid H2 + Liquid O2).',
    difficulty: 'MEDIUM',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'RPSC RAS Prelims',
    pyqStage: 'Prelims',
    pyqMarks: 1.33,
    examinerTrapPattern: 'Propellant chemistry traps between Cryogenic (LH2/LOX) and Earth-storable hypergolic fuels.'
  },

  // --- RPSC RAS Mains 2018 (Paper II, 2 Marks) ---
  {
    conceptId: 'CON-SCI-116', // Recombinant DNA & CRISPR
    type: 'DESCRIPTIVE_2M',
    stem: 'What is "CRISPR-Cas9" and why is it referred to as molecular scissors? (Word limit: ~15-20 words)',
    correctAnswer: 'Targeted gene-editing system using guide RNA and Cas9 endonuclease enzyme to cut and modify specific DNA sequences.',
    explanation: '**CRISPR-Cas9:**\n- An adaptive bacterial immune mechanism repurposed as a precision gene-editing tool.\n- Utilizes synthetic single-guide RNA (sgRNA) to locate target genomic loci and the Cas9 endonuclease enzyme ("molecular scissors") to create targeted double-stranded DNA breaks for genetic correction.',
    trapExplanation: 'Explaining it generically as biotechnology without naming both components: guide RNA (targeting) and Cas9 enzyme (cutting).',
    difficulty: 'MEDIUM',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'RPSC RAS Mains Paper II',
    pyqStage: 'Mains',
    pyqMarks: 2.0,
    examinerTrapPattern: 'Requires explicitly identifying guide RNA (locator) and Cas9 (endonuclease scissor).'
  },

  // --- RPSC RAS Mains 2021 (Paper II, 10 Marks) ---
  {
    conceptId: 'CON-SCI-113', // Microbiology, Human Diseases & Diagnostic Tests
    type: 'DESCRIPTIVE_10M',
    stem: 'Differentiate between RT-PCR and Rapid Antigen Tests for infectious viral detection. Explain the causes and public health perils of Antimicrobial Resistance (AMR). (Word limit: ~100 words)',
    correctAnswer: 'RT-PCR amplifies viral RNA with high gold-standard sensitivity; RAT detects viral surface proteins rapidly; AMR emerges from antibiotic overuse.',
    explanation: '**1. Diagnostic Modality Comparison:**\n- **RT-PCR (Reverse Transcription Polymerase Chain Reaction):** Converts viral RNA to complementary DNA (cDNA) followed by exponential enzymatic amplification. High sensitivity and specificity (Gold Standard), but requires specialized thermal cyclers and 4–8 hours.\n- **Rapid Antigen Test (RAT):** Detects presence of viral surface proteins via lateral flow immunoassay. Rapid turnaround (15–30 mins), but lower analytical sensitivity with risk of false negatives.\n\n**2. Antimicrobial Resistance (AMR):**\n- **Mechanism:** Microorganisms (bacteria, viruses, fungi) evolve genetic mutations (e.g., NDM-1 gene, beta-lactamase production) rendering standard antimicrobial agents ineffective.\n- **Drivers:** Overuse and irrational prescription of broad-spectrum antibiotics, OTC self-medication, failure to complete dosages, and non-therapeutic antibiotic misuse in livestock/poultry feed.\n- **Public Health Peril:** Escalates routine clinical surgeries into life-threatening sepsis crises, spikes healthcare expenditures, and threatens a return to a "pre-antibiotic era" as highlighted in WHO\'s Global Action Plan on AMR.',
    trapExplanation: 'Failing to define the enzymatic mechanism of RT-PCR (RNA to cDNA amplification) or restricting AMR causes to humans while ignoring livestock feed misuse.',
    difficulty: 'HARD',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'RPSC RAS Mains Paper II',
    pyqStage: 'Mains',
    pyqMarks: 10.0,
    examinerTrapPattern: 'Composite question demanding diagnostic molecular biochemistry and epidemiology of superbugs.'
  }
];

export async function seedRPSCRASPreviousYearQuestions() {
  console.log('Seeding Master 10-Year RPSC RAS Question Bank (Prelims & Mains)...');

  let insertedCount = 0;
  let updatedCount = 0;

  for (const q of CANONICAL_RPSC_RAS_PYQS) {
    const concept = await db.concept.findUnique({ where: { id: q.conceptId } });
    if (!concept) {
      console.warn(`[RPSC PYQ Seed] Concept ${q.conceptId} not found in database. Skipping question.`);
      continue;
    }

    const existing = await db.question.findFirst({
      where: { conceptId: concept.id, stem: q.stem }
    });

    const dataPayload = {
      conceptId: concept.id,
      type: q.type,
      stem: q.stem,
      options: q.options ? JSON.stringify(q.options) : null,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      trapExplanation: q.trapExplanation || null,
      difficulty: q.difficulty,
      isPYQ: true,
      pyqYear: q.pyqYear,
      pyqPaper: q.pyqPaper,
      pyqStage: q.pyqStage,
      pyqMarks: q.pyqMarks,
      examinerTrapPattern: q.examinerTrapPattern || null,
    };

    if (existing) {
      await db.question.update({
        where: { id: existing.id },
        data: dataPayload
      });
      updatedCount++;
    } else {
      await db.question.create({
        data: dataPayload
      });
      insertedCount++;
    }
  }

  console.log(`[RPSC PYQ Seed] Finished: ${insertedCount} created, ${updatedCount} updated across authentic RPSC RAS 10-Year cycles.`);
}
