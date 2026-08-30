import { db } from '../db/client';

export interface Batch2CanonicalConceptDef {
  id: string;
  slug: string;
  title: string;
  shortDefinition: string;
  difficulty: string;
  order: number;
  topicSlug: string;
  contentBlocks: {
    type: string;
    title: string;
    body: string;
    order: number;
    visibility: string;
  }[];
  claims: {
    id: string;
    statement: string;
    claimType: string;
    epistemicLevel: string;
    confidence: string;
    locator: string;
    excerpt: string;
  }[];
  examMappings: {
    examCode: string;
    syllabusUnit: string;
    relevance: string;
    priority: string;
    requiredDepth: string;
    notes: string;
  }[];
  revisionUnits: {
    type: string;
    content: string;
    priority: string;
    order: number;
  }[];
  questions: {
    type: string;
    stem: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
    trapExplanation: string;
    difficulty: string;
  }[];
}

export const ANCIENT_INDIA_BATCH_2_CONCEPTS: Batch2CanonicalConceptDef[] = [
  // =========================================================================
  // TOPIC 66: Mahajanapadas & Second Urbanisation
  // =========================================================================
  {
    id: 'CON-HIST-10',
    slug: 'from-janapadas-to-mahajanapadas-second-urbanisation-and-economy',
    title: 'From Janapadas to Mahajanapadas: Second Urbanisation, Iron & Agrarian Expansion',
    shortDefinition: 'The socio-economic transition from Later Vedic Janapadas to 6th Century BCE Mahajanapadas driven by iron technology, NBPW, monetization, and the Second Urbanisation.',
    difficulty: 'INTERMEDIATE',
    order: 10,
    topicSlug: 'mahajanapadas-and-second-urbanisation',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Great Material Leap: The Second Urbanisation (c. 600 BCE)',
        body: `Around the **6th Century BCE**, the northern Indian subcontinent witnessed its **Second Urbanisation**—the re-emergence of monumental fortified cities more than a millennium after the collapse of the Bronze Age Harappan urban network. 

Unlike the Indus civilization which was centered in the semi-arid north-west and based on bronze, the Second Urbanisation was centered in the humid, fertile **Middle Gangetic Basin** (eastern Uttar Pradesh and Bihar) and was propelled by **Iron Metallurgy (*Krishna-Ayas*)** and sedentary agriculture.

### Key Material Drivers of the Transition
1. **Iron Technology & Agricultural Colonization:** Heavy iron socketed axes enabled the clearing of dense tropical hardwood monsoon forests in the Gangetic plains, while iron-tipped ploughshares enabled deep tilling of alluvial soils.
2. **Paddy Transplantation (*Ropa*):** The revolutionary shift from broadcasting seeds to **wet-rice seedling transplantation** doubled and tripled crop yields, producing unprecedented food grain surplus.
3. **Northern Black Polished Ware (NBPW):** Deluxe, glossy, mirror-like ceramic tableware that served as the hallmark material culture of urban elites across the 6th to 3rd centuries BCE.
4. **Monetization & Punch-Marked Coins:** Regular metallic coinage appeared for the first time in Indian history—**Punch-Marked Coins (*Ahat Sikke / Karshapana / Pana*)** made of silver and copper, stamped with symbols of trees, hills, bulls, and suns.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Institutional Structures: Trade Guilds, Urban Centers & Regularized Taxation',
        body: `### The Rise of Merchant Guilds (*Srenis*) & Long-Distance Trade
- **Guild Organization:** Craftsmen and merchants organized into autonomous self-regulating guilds (**Srenis**), headed by an apex merchant leader (**Sreshthin / Jettaka**). Guilds maintained their own customary laws (*Sreni-Dharma*), quality controls, training academies, and banking functions.
- **Great Trade Arteries:**
  - **Uttarapatha (Northern Highway):** Stretched from Taxila in Gandhara across the Gangetic plain through Mathura, Kausambi, Varanasi, and Pataliputra to the port of Tamralipti in Bengal.
  - **Dakshinapatha (Southern Highway):** Connected Pataliputra and Varanasi to Vidisha, Ujjain, Pratishthana (Paithan), and the Deccan ports.

### State Formation & The Regularized Fiscal Apparatus
- **Statutory Taxation (*Bhaga*):** The king was no longer dependent on voluntary tribal gifts. The standard tax was fixed at **1/6th of agricultural produce (*Shadbhaga*)**, assessed by field surveyors (*Rajjugahaka*) and collected by royal tax gatherers.
- **Commercial Levies & Tolls:** Custom duties (*Shulka*) collected at city gates by toll superintendents (*Shaulkika*).
- **Corvee Labor (*Vishti*):** Compulsory unpaid labor demanded from artisans and landless peasants for state fortification and road construction.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'HISTORICAL_ANALYSIS',
        title: 'The Causal Nexus: From Tribal Lineage to Territorial Statehood',
        body: `The transformation from the tribal *Jana* to the territorial *Janapada* and finally the consolidated *Mahajanapada* represents a structural evolution:
1. **Sedentary Anchoring:** Intensive wet-rice agriculture tied human populations permanently to specific geographic parcels of land, replacing tribal kinship allegiance with territorial loyalty.
2. **Class Differentiation:** The emergence of landless agricultural laborers (**Dasa-Karmakaras**) and wealthy landowners (**Gahapatis / Setthis**) shattered the egalitarian social bonds of the Early Vedic clan.
3. **Standing Military & Fiscal Compulsion:** To protect vast agricultural frontiers and tax revenues, monarchs created permanent **Standing Armies (*Sena*)**, which in turn required perpetual taxation and administrative bureaucracy.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Target Exam Anchors & Distinctions',
        body: `### Key Exam Distinctions (UPSC / RPSC)
- **First vs Second Urbanisation:** 
  - *First Urbanisation (Harappan):* Bronze Age, North-West (Indus valley), burnt-brick grid cities, barter/weights metrology, no regular coinage.
  - *Second Urbanisation (6th BCE):* Iron Age, Middle Ganga valley, fortified mud/burnt-brick cities, Punch-Marked Coinage, NBPW pottery, written scripts (Brahmi/Kharosthi).
- **Punch-Marked Coins:** Oldest coins in India; stamped on one side with multiple punches (no royal portraits or written inscriptions until Indo-Greek coins).`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-10-01',
        statement: 'The Second Urbanisation of the 6th Century BCE was concentrated in the Middle Gangetic basin and was archaeologically characterized by Northern Black Polished Ware (NBPW), iron technology, and silver punch-marked coinage.',
        claimType: 'ARCHAEOLOGICAL_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'R.S. Sharma, The Urban Decay in India & NCERT Class 11/12',
        excerpt: 'The second urbanisation unfolded in the middle Ganga valley around 600 BCE, marked by the use of iron tools, NBPW deluxe pottery, and punch-marked coins (Karshapanas).',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Second Urbanisation, Economy & State Formation in 6th BCE',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'SOCIO_ECONOMIC_SYNTHESIS',
        notes: 'Drivers of Second Urbanisation, role of wet-rice transplantation and NBPW.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Ancient Indian Economy & Trade Routes',
        relevance: 'HIGH',
        priority: 'HIGH',
        requiredDepth: 'TRADE_AND_COINAGE',
        notes: 'Punch-marked coins, Uttarapatha and Dakshinapatha trade routes.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Second Urbanisation = 6th BCE | Middle Ganga Basin | Iron axes + Paddy transplantation (Ropa) | Pottery = NBPW | Coinage = Punch-Marked Coins (Karshapana) | Tax = 1/6th (Bhaga) | Trade routes = Uttarapatha & Dakshinapatha.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which deluxe ceramic ware is considered the diagnostic archaeological hallmark of the Second Urbanisation in northern India during the 6th to 3rd centuries BCE?',
        options: ['Ochre Coloured Pottery (OCP)', 'Painted Grey Ware (PGW)', 'Northern Black Polished Ware (NBPW)', 'Black and Red Ware (BRW)'],
        correctAnswer: 'Northern Black Polished Ware (NBPW)',
        explanation: 'Northern Black Polished Ware (NBPW), with its lustrous mirror-like gloss and fine fabric, is the definitive ceramic marker of the Second Urbanisation and early historical urban elites in the Gangetic plains.',
        trapExplanation: 'Painted Grey Ware (PGW) corresponds to the Later Vedic period (c. 1000–600 BCE); NBPW corresponds to the Mahajanapada and Mauryan epochs (c. 600–200 BCE).',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-HIST-11',
    slug: 'the-sixteen-mahajanapadas-political-geography-and-gana-sanghas',
    title: 'The Sixteen Mahajanapadas: Political Geography, Monarchies & Gana-Sanghas',
    shortDefinition: 'Textual concordances of the traditional 16 Mahajanapadas, their geographical distribution, and the constitutional dichotomy between Monarchies (Rajyas) and Oligarchic Republics (Gana-Sanghas).',
    difficulty: 'INTERMEDIATE',
    order: 11,
    topicSlug: 'mahajanapadas-and-second-urbanisation',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Political Landscape: The Sixteen Great States (*Solasa Mahajanapada*)',
        body: `By the 6th Century BCE, the political map of northern and central India was partitioned among **Sixteen Great States (*Solasa Mahajanapada*)**. 

Our primary canonical sources for this classical roster are the Buddhist text **Anguttara Nikaya** (part of the *Sutta Pitaka*) and the Jain canonical text **Bhagavati Sutra** (which presents a slightly modified regional variant).

### The Classical 16 Mahajanapadas & Capitals Matrix

| Mahajanapada | Capital City | Geographical Location | Political System | Notable Rulers / Historical Significance |
| :--- | :--- | :--- | :--- | :--- |
| **Magadha** | Girivraja / Rajagriha (later Pataliputra) | Modern Patna & Gaya districts (South Bihar) | Monarchy | Bimbisara, Ajatashatru; ultimate victor among all states. |
| **Kosala** | Shravasti (earlier Ayodhya / Saketa) | Eastern Uttar Pradesh (Awadh region) | Monarchy | King Prasenjit; annexed Kasi; contained the Sakya clan. |
| **Vatsa** | Kaushambi (on Yamuna) | Allahabad / Prayagraj region (UP) | Monarchy | King Udayana; crucial junction of Uttarapatha & Dakshinapatha. |
| **Avanti** | Ujjain (North) & Mahishmati (South) | Malwa region (Madhya Pradesh) | Monarchy | King Chanda Pradyota; fierce rival of Magadha; master of iron ore. |
| **Anga** | Champa (at confluence of Ganga & Champa) | Bhagalpur & Munger (East Bihar) | Monarchy | Wealthy international river port; conquered by Bimbisara. |
| **Kasi** | Varanasi (between Varuna & Asi rivers) | Eastern Uttar Pradesh | Monarchy | Renowned textile and horse market; early hegemony, later annexed by Kosala. |
| **Vajji** | Vaishali | North Bihar (north of the Ganga) | **Gana-Sangha** | Confederacy of 8 clans (led by Lichchhavis; Chetaka as leader). |
| **Malla** | Kushinara & Pava (twin capitals) | Deoria & Gorakhpur (Eastern UP) | **Gana-Sangha** | Buddha attained Mahaparinirvana at Kushinara; Mahavira at Pava. |
| **Chedi** | Suktimati / Sotthivati | Bundelkhand (MP/UP border) | Monarchy | King Shishupala of Mahabharata fame. |
| **Kuru** | Indraprastha / Hastinapur | Meerut, Delhi & Thanesar region | Monarchy | Shifted capital to Kaushambi after floods in Hastinapur. |
| **Panchala** | Ahichchhatra (North) & Kampilya (South) | Rohilkhand & central UP (Bareilly, Badaun) | Monarchy | Famous center of Vedic scholarship and early urban crafts. |
| **Surasena** | Mathura (on Yamuna) | Braj region (Western UP) | Monarchy | King Avantiputra (devout disciple of the Buddha). |
| **Matsya** | Viratnagar (modern Bairat, Jaipur district) | Eastern Rajasthan (Jaipur, Alwar, Bharatpur) | Monarchy | King Virata; Pandavas spent their 13th year of exile in disguise here. |
| **Ashmaka (Assaka)** | Potali / Podana | Nizamabad & Maharashtra (Godavari River) | Monarchy | **ONLY Mahajanapada located south of the Vindhya range** in South India. |
| **Gandhara** | Taxila (Takshashila) & Pushkalavati | Rawalpindi & Peshawar (Pakistan/NW) | Monarchy | King Pushkarasarin; global center of higher learning and overland trade. |
| **Kamboja** | Rajauri / Poonch | Pamir & Hindukush border (NW frontier) | Monarchy / Republic | Famous for superior cavalry war horses and martial warrior clans. |`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'HISTORICAL_ANALYSIS',
        title: 'Constitutional Dichotomy: Monarchies (*Rajyas*) vs. Oligarchic Republics (*Gana-Sanghas*)',
        body: `The 6th Century BCE political world was defined by a profound constitutional division between **Monarchies (*Rajyas*)** and **Oligarchic Republics (*Gana-Sanghas*)**:

### 1. Monarchical Kingdoms (*Rajyas* — e.g. Magadha, Kosala, Vatsa, Avanti)
- **Centralized Autocracy:** Hereditary kingship supported by orthodox Brahmana priests and permanent standing armies.
- **Class Stratification:** Strict adherence to the four-fold hereditary *Varna* hierarchy.
- **Geographic Placement:** Located predominantly in the alluvial floodplains of the central Ganga valley, where vast agricultural surplus favored centralized state taxation.

### 2. Oligarchic Republics (*Gana-Sanghas* — e.g. Vajji, Lichchhavis, Mallas, Sakyas of Kapilavastu, Koliyas)
- **Oligarchic Governance:** Power was vested in a collective assembly of Kshatriya clan chiefs (*Rajas*). The Buddhist text *Ekapanna Jataka* notes that in Vaishali, there were **7,707 Rajas** who ruled collectively.
- **Deliberative Procedure:** Met regularly in the public council hall (**Santhagara**). Decisions were reached through consensus or voting using colored wooden sticks (**Salakas**), managed by a voting officer (**Salaka-Gahapaka**).
- **Exclusionary Citizenship:** While egalitarian among ruling Kshatriya clans, citizenship was **strictly exclusionary**—landless laborers (*Dasa-Karmakaras*), women, and Shudras had no political rights or assembly representation.
- **Geographic Placement:** Located predominantly in the Himalayan foothills (terai belt) or marginal northwestern frontiers, where mixed pastoralism and clan lineages persisted.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Target Exam Anchors & Invariants',
        body: `### Critical Exam Traps (UPSC / RPSC)
- **Southernmost Mahajanapada:** **Ashmaka (Assaka)** on the Godavari river is the **ONLY** Mahajanapada situated south of the Vindhyas.
- **Rajasthan Mahajanapada:** **Matsya** (Capital: *Viratnagar / Bairat*) is the primary Mahajanapada located in Rajasthan.
- **Primary Source Roster:** The canonical list of 16 is found in the Buddhist text **Anguttara Nikaya** and the Jain text **Bhagavati Sutra**.
- **Gana-Sangha Voting Device:** The voting sticks in the Santhagara were called **Salakas**; the voting officer was the **Salaka-Gahapaka**.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-11-01',
        statement: 'The Buddhist canon Anguttara Nikaya and the Jain canon Bhagavati Sutra provide the primary traditional listings of the sixteen Mahajanapadas of the 6th Century BCE.',
        claimType: 'TEXTUAL_EVIDENCE',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Anguttara Nikaya (Sutta Pitaka) & Bhagavati Sutra',
        excerpt: 'The Anguttara Nikaya enumerates the sixteen Mahajanapadas: Kasi, Kosala, Anga, Magadha, Vajji, Malla, Chedi, Vamsa, Kuru, Panchala, Maccha, Surasena, Assaka, Avanti, Gandhara, and Kamboja.',
      },
      {
        id: 'CLM-HIST-11-02',
        statement: 'Ashmaka (Assaka) on the Godavari River was the only Mahajanapada located south of the Vindhya mountains in the Deccan.',
        claimType: 'GEOGRAPHICAL_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Raychaudhuri, Political History of Ancient India & NCERT Class 11',
        excerpt: 'Among the sixteen Mahajanapadas, Assaka (capital Potali/Podana) situated on the banks of the Godavari was the sole southern state.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Political Geography of Mahajanapadas & Gana-Sanghas',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'GEOGRAPHICAL_AND_CONSTITUTIONAL',
        notes: 'Constitutional structure of Gana-Sanghas, Santhagara voting, and geographic boundaries.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Ancient Janapadas & Matsya Janapada of Rajasthan',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'SITE_AND_CAPITAL_PRECISION',
        notes: 'Matsya Janapada (Viratnagar/Bairat), its boundaries, and Ashmaka as the southern outlier.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: '16 Mahajanapadas = Anguttara Nikaya (Pali) & Bhagavati Sutra (Prakrit) | Southernmost = Ashmaka (Godavari) | Rajasthan = Matsya (Viratnagar) | Republics = Vajji (Vaishali, Lichchhavis) & Malla (Kushinara/Pava) | Santhagara = Assembly hall, Salaka = voting sticks.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which of the following was the ONLY Mahajanapada out of the sixteen classical states situated south of the Vindhyas on the banks of the Godavari river?',
        options: ['Matsya', 'Chedi', 'Ashmaka (Assaka)', 'Surasena'],
        correctAnswer: 'Ashmaka (Assaka)',
        explanation: 'Ashmaka (or Assaka), with its capital at Potali or Podana on the Godavari River, was the only Mahajanapada situated in the Deccan south of the Vindhya mountain range.',
        trapExplanation: 'Matsya was in Rajasthan (Bairat); Chedi was in Bundelkhand; Surasena was in Mathura (UP).',
        difficulty: 'EASY',
      },
    ],
  },

  // =========================================================================
  // TOPIC 67: The Rise of Magadha & Pre-Mauryan Dynasties
  // =========================================================================
  {
    id: 'CON-HIST-12',
    slug: 'magadhas-geo-strategic-hegemony-geography-forests-and-war-elephants',
    title: "Magadha's Geo-Strategic Hegemony: Geography, Forests, Minerals & Warfare Innovations",
    shortDefinition: 'Multi-causal first-principles analysis of the geographical, mineral, agricultural, military, and sociological factors that enabled Magadha to establish subcontinental supremacy.',
    difficulty: 'INTERMEDIATE',
    order: 12,
    topicSlug: 'rise-of-magadha',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Triumph of Magadha: An Overdetermined Geopolitical Ascent',
        body: `Between the 6th and 4th centuries BCE, a fierce multi-cornered struggle for subcontinental hegemony unfolded among the four major monarchies: **Magadha, Kosala, Vatsa, and Avanti**. Ultimately, **Magadha emerged as the supreme imperial power**, annexing all rival kingdoms and Gana-Sanghas.

Magadha's victory was not accidental, but the result of a formidable convergence of **geographical, mineralogical, agricultural, military, and sociological advantages**.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'The Five Structural Pillars of Magadhan Hegemony',
        body: `### 1. Inexpugnable Strategic Capitals
- **Girivraja / Rajagriha (Old Capital):** Encircled by a **natural fortress of five steep hills** (*Vaibhara, Vipula, Ratna, Giri, and Chaitya*), making it impervious to external cavalry siege.
- **Pataliputra (New Capital founded by Udayin):** A true **Water Fortress (*Jaladurga*)** strategically positioned at the confluence of four major navigable rivers: **Ganga, Son, Gandak, and Ghaghra**. It controlled all subcontinental riverine trade and allowed rapid amphibious troop mobilization across eastern India.

### 2. Proximity to Rich Iron Ore Deposits
- Magadha held direct, unhindered access to the rich **iron ore deposits of Rajgir and the Chota Nagpur plateau (Singhbhum/Gaya)**.
- Unlike western kingdoms which relied on distant trade, Magadha forged superior, heavy **iron offensive weaponry** (swords, spearheads) and forest-clearing axes in local state-supervised arsenals.

### 3. Agricultural Soil Fertility & Surplus Revenue
- Located at the heart of the Middle Gangetic alluvium, receiving abundant monsoon rainfall ($>120\text{ cm}$ annually).
- Deep, fertile silt replenished annually by river floods produced high-density rice crops without requiring expensive artificial canal irrigation, generating huge fiscal revenues to finance imperial armies.

### 4. Pioneering Military Innovation: The War Elephant
- Magadha's eastern peripheral forests (Jharkhand, Bengal, Assam) teemed with vast herds of wild Asian elephants.
- Magadha was the **first state in Indian history to deploy war elephants systematically on a massive scale**. Elephants served as ancient heavy armor: smashing fortress timber stockades, terrorizing enemy infantry/cavalry formations, and crossing flooded marshy rivers where chariots stalled.

### 5. Heterodox Societal Flexibility & Pragmatism
- Situated on the eastern periphery of orthodox Vedic *Aryavarta*, Magadhan society was regarded by orthodox texts as *Bratya* (impure/unorthodox).
- This lack of rigid Brahmana orthodoxy allowed Magadha's rulers (Bimbisara, Ajatashatru, Mahapadma Nanda) to recruit talent irrespective of caste, pursue aggressive realpolitik, assimilate tribal populations, and welcome dynamic Shramana merchant classes.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Exam Invariants & Synthesis Framework',
        body: `### Answer-Writing Scaffold for UPSC / State PCS Mains
When answering: *"Analyze the factors responsible for the rise of Magadha as an imperial power"*, organize the answer around **Five Intersecting Advantages**:
1. **Geographical/Strategic:** Natural hill defense at Rajgir + Water fortress at Pataliputra.
2. **Resource/Metallurgical:** Direct access to Chota Nagpur iron ore mines.
3. **Agrarian/Fiscal:** Fertile Gangetic alluvium generating sustainable agricultural tax surplus.
4. **Military Innovation:** Systematic deployment of war elephants + siege engines (*Mahashilakantaka & Rathamusala*).
5. **Political/Sociological:** Unorthodox society + ruthless ambitious rulers (Haryanka, Shishunaga, Nanda).`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-12-01',
        statement: 'Magadha\'s imperial hegemony was underpinned by its natural hill and river fortifications at Rajgir and Pataliputra, proximity to rich Chota Nagpur iron ore deposits, and pioneering deployment of war elephants.',
        claimType: 'HISTORICAL_SYNTHESIS',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'R.S. Sharma, Ancient India & Romila Thapar, Early India',
        excerpt: 'Magadha possessed distinct advantages: strategic capitals at Rajagriha and Pataliputra, control over rich iron mines of south Bihar, fertile alluvial soil, and access to wild elephant forests.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Factors Behind the Rise of Magadha',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'MULTI_CAUSAL_ANALYSIS',
        notes: 'Geographical, metallurgical, and military drivers of Magadhan hegemony.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Mains Paper I: Emergence of Magadha Imperialism',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'STRUCTURED_POINTS',
        notes: 'Strategic importance of Rajgir hills, Pataliputra Jaladurga, and iron mines.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Magadha Advantages: 1. Capitals: Rajgir (5 hills) + Pataliputra (Jaladurga) | 2. Iron ore: Chota Nagpur/Singhbhum | 3. Agriculture: Fertile Middle Ganga alluvium | 4. Military: War elephants + siege weapons | 5. Society: Unorthodox/flexible.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which unique military asset was systematically deployed for the first time on a massive scale by Magadhan rulers in ancient Indian warfare?',
        options: ['Composite Horseback Archery', 'War Elephants', 'Bronze Chariots with 4 Horses', 'Gunpowder Siege Trebuchets'],
        correctAnswer: 'War Elephants',
        explanation: 'Magadha was the first Indian state to utilize war elephants on a vast military scale, capturing them from the eastern forests of Bihar and Bengal to breach wooden fortifications and trample infantry.',
        trapExplanation: 'Horseback archery became prominent with the Scythians/Kushanas; gunpowder arrived in medieval times.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-HIST-13',
    slug: 'from-haryankas-to-nandas-pre-mauryan-dynastic-consolidation',
    title: 'From Haryankas to Nandas: Pre-Mauryan Dynastic Consolidation',
    shortDefinition: 'The political, diplomatic, and military consolidation of Magadha under the Haryanka, Shishunaga, and Nanda dynasties prior to the Maurya empire.',
    difficulty: 'INTERMEDIATE',
    order: 13,
    topicSlug: 'rise-of-magadha',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Pre-Mauryan Dynastic Trajectory (c. 544–321 BCE)',
        body: `The imperial expansion of Magadha unfolded across three successive ruling dynasties before the rise of the Mauryas:
1. **The Haryanka Dynasty (c. 544–413 BCE):** Laid the territorial and institutional foundation through aggressive diplomacy, matrimonial alliances, and military annexations.
2. **The Shishunaga Dynasty (c. 413–345 BCE):** Decisively crushed Magadha's 100-year arch-rival, the Kingdom of Avanti.
3. **The Nanda Dynasty (c. 345–321 BCE):** Created South Asia's first centralized, non-Kshatriya pan-north Indian empire, backed by a colossal standing army.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Dynastic Chronicles: Rulers, Policies & Military Innovations',
        body: `### 1. Haryanka Dynasty (c. 544–413 BCE)
- **Bimbisara (*Seniya* — c. 544–492 BCE):**
  - First Indian monarch known to have maintained a permanent **Standing Army (*Seniya*)**.
  - **Tripartite Matrimonial Diplomacy:** Married *Kosala Devi* (sister of King Prasenjit of Kosala, receiving Kasi as annual revenue dowry), *Chellana* (Lichchhavi princess of Vaishali), and *Khema* (Madra clan of central Punjab).
  - **Annexation of Anga:** Defeated King Brahmadatta and annexed Anga (capital Champa), securing access to international maritime trade.
  - Patronized royal physician **Jivaka**, sending him to Ujjain to treat his rival King Chanda Pradyota of Avanti for jaundice.
- **Ajatashatru (*Kunika* — c. 492–460 BCE):**
  - Usurped the throne after imprisoning and starving his father Bimbisara.
  - Waged a bitter war with Kosala (annexing Kasi permanently) and a **16-year war with the Vajji Confederacy**.
  - **Infiltration & Military Innovations (Textual Accounts):** According to Jain canonical accounts in the *Bhagavati Sutra* and Buddhist commentaries, Ajatashatru used his minister **Vassakara** to sow internal discord among the Lichchhavis and deployed two formidable military siege devices:
    1. **Mahashilakantaka:** A giant war catapult capable of hurling massive stone boulders against fortified stockades.
    2. **Rathamusala:** An armored scythed chariot equipped with rotating blades that operated as a mechanized weapon against enemy infantry.
  - Fortified the village of *Pataligrama* (future Pataliputra); patronized the **First Buddhist Council (483 BCE)** at Rajgir.
- **Udayin (c. 460–444 BCE):**
  - Formally shifted the capital from Rajgir to **Pataliputra** at the confluence of the Ganga and Son rivers.

### 2. Shishunaga Dynasty (c. 413–345 BCE)
- **Shishunaga:** People of Magadha overthrew the parricidal Haryankas; Shishunaga **annexed the Kingdom of Avanti (Ujjain)**, ending a century-long hostility.
- **Kalashoka (*Kakavarna*):** Shifted capital permanently to Pataliputra; convened the **Second Buddhist Council (383 BCE)** at Vaishali.

### 3. Nanda Dynasty (c. 345–321 BCE)
- **Mahapadma Nanda (*Ekarat / Sarvakshatrantaka*):**
  - First great historical empire-builder of India, of non-Kshatriya (*Shudra*) origin.
  - Assumed titles: **Ekarat** (Sole Sovereign Monarch) and **Sarvakshatrantaka** (Destroyer of all Kshatriyas). Annexed Kalinga, Panchala, Kasi, Mithila, and Matsya.
- **Dhana Nanda (Greek *Agrammes / Xandrames*):**
  - Last Nanda ruler; commanded a gigantic standing military of **200,000 infantry, 20,000 cavalry, 2,000 chariots, and 3,000–6,000 war elephants**.
  - Highly unpopular due to extortionate taxation on minor commodities; the formidable reputation of his army caused Alexander the Great's mutinous soldiers to refuse to cross the Beas River (Hyphasis) in 326 BCE. Overthrown by **Chandragupta Maurya** and **Chanakya** in 321 BCE.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Key Examination Invariants & Traps',
        body: `### Crucial Exam Distinctions
- **Founder of Pataliputra:** **Udayin** (Haryanka Dynasty) founded Pataliputra (not Bimbisara or Ajatashatru, though Ajatashatru built the initial fort of Pataligrama).
- **First Standing Army (*Seniya*):** Title of **Bimbisara**.
- **First Buddhist Council Host:** **Ajatashatru** (483 BCE at Rajgir).
- **Second Buddhist Council Host:** **Kalashoka** (383 BCE at Vaishali).
- **First Pan-Indian Empire Builder:** **Mahapadma Nanda** (*Ekarat*).`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-13-01',
        statement: 'King Bimbisara of the Haryanka dynasty laid the foundation of Magadhan imperialism through matrimonial alliances and the annexation of Anga, while his successor Ajatashatru defeated the Vajji confederacy using Mahashilakantaka and Rathamusala.',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Digha Nikaya, Mahavamsa & NCERT Class 11 Ancient India',
        excerpt: 'Bimbisara used marriage alliances with Kosala and Lichchhavi to consolidate power and annexed Anga. Ajatashatru utilized Vassakara to divide the Lichchhavis and deployed Mahashilakantaka and Rathamusala.',
      },
      {
        id: 'CLM-HIST-13-02',
        statement: 'Udayin formally transferred the capital of Magadha from Rajagriha to Pataliputra at the confluence of the Ganga and Son rivers.',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Vayu Purana, Parishishtaparvan & NCERT Class 11',
        excerpt: 'Udayin built the city of Pataliputra at the confluence of the Ganga and Son and shifted the seat of government there from Rajgir.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Pre-Mauryan Dynastic History & Political Consolidation',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'CHRONOLOGY_AND_MILITARY',
        notes: 'Haryanka, Shishunaga, and Nanda rulers, warfare technologies, and councils.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Pre-Mauryan Dynasties & Capital Transitions',
        relevance: 'HIGH',
        priority: 'HIGH',
        requiredDepth: 'RULER_SPECIFIC_FACTS',
        notes: 'Bimbisara (Seniya), Udayin (Pataliputra), Mahapadma Nanda (Ekarat).',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Haryankas: Bimbisara (Seniya, annexed Anga) → Ajatashatru (1st Council 483 BCE, Mahashilakantaka/Rathamusala) → Udayin (Pataliputra founder). Shishunagas: Shishunaga (annexed Avanti) → Kalashoka (2nd Council 383 BCE). Nandas: Mahapadma Nanda (Ekarat, Shudra origin) → Dhana Nanda (Greek Agrammes, overthrown by Chandragupta Maurya).',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Who among the following Magadhan rulers formally shifted the royal capital of Magadha from Rajagriha (Girivraja) to Pataliputra?',
        options: ['Bimbisara', 'Ajatashatru', 'Udayin', 'Mahapadma Nanda'],
        correctAnswer: 'Udayin',
        explanation: 'Udayin (son and successor of Ajatashatru) established the new fortified capital of Pataliputra at the strategic confluence of the Ganga and Son rivers, moving the capital permanently from Rajagriha.',
        trapExplanation: 'Ajatashatru initiated the military post at Pataligrama, but Udayin formally constructed the capital city and shifted the government.',
        difficulty: 'EASY',
      },
    ],
  },

  // =========================================================================
  // TOPIC 68: Buddhism: Philosophy, Doctrines & Monastic Expansion
  // =========================================================================
  {
    id: 'CON-HIST-14',
    slug: 'siddhartha-gautama-and-the-shramana-intellectual-milieu',
    title: 'Siddhartha Gautama & The Shramana Intellectual Milieu',
    shortDefinition: 'The 6th Century BCE Shramana ascetic movement, the Six Heterodox Teachers, and the historical life landmarks of Siddhartha Gautama (The Buddha).',
    difficulty: 'INTERMEDIATE',
    order: 14,
    topicSlug: 'buddhism-philosophy-and-spread',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Shramana Intellectual Ferment (6th Century BCE)',
        body: `The **6th Century BCE** in northern India was a period of intense philosophical churning known as the **Shramana (*Samanas*) Movement**. Wandering ascetics, recluses, and philosophers broke away from the Vedic sacrificial tradition, rejecting the infallible authority of the Vedas, animal sacrifice (*Yajnas*), and hereditary priestly privilege.

### The Six Heterodox Philosophers (*Samaññaphala Sutta* Roster)
The Buddhist *Digha Nikaya* records six prominent contemporary wandering teachers:
1. **Makkhali Gosala (Ajivika Sect):** Propounded absolute **Fatalism / Determinism (*Niyati*)**. Believed human effort (*Purushakara*) has zero efficacy; cosmic destiny determines all suffering and transmigration across fixed cycles.
2. **Ajita Kesakambali (Charvaka / Lokayata Materialism):** Complete **Materialism and Annihilationism (*Ucchedavada*)**. Denied soul, karma, rebirth, and afterlife: *"A human being is made of four elements; when he dies, earth returns to earth, water to water, fire to fire, air to air... Fools and wise alike are annihilated upon death."*
3. **Purana Kassapa (Akriyavada — Non-Action):** Denied moral consequence of actions; performing charity or killing generates neither merit (*Punya*) nor demerit (*Papa*).
4. **Pakudha Kaccayana (Sasvatavada — Eternalism):** Seven immutable, uncreated elements (Earth, Water, Fire, Air, Pleasure, Pain, Soul) that never interact; killing is merely a sword passing through empty space between elements.
5. **Sanjaya Belatthiputta (Ajnadavada — Radical Agnosticism / Skepticism):** Refused to make any definitive truth claims about the afterlife or moral reality (*"eel-wriggling"* philosophy).
6. **Nigantha Nataputta (Vardhamana Mahavira — Jainism):** Path of extreme self-restraint, non-possession, and non-violence (*Ahimsa*).`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'The Historical Life Landmarks of Siddhartha Gautama',
        body: `### Chronology & Clan Origin
- **Birth (c. 563 BCE / alternative c. 486 BCE):** Born as Prince **Siddhartha** in the sacred Sal grove at **Lumbini** (near Kapilavastu, modern southern Nepal).
- **Clan:** Belonged to the **Sakya Kshatriya clan** of the Kapilavastu Gana-Sangha (hence called *Sakyamuni*). Father: *Suddhodana* (elected chief of Sakyas); Mother: *Maya Devi* (died 7 days after birth); raised by foster mother and aunt *Mahapajapati Gotami*.

### The Four Great Sights (*Cattari Nimittani*)
While driving through the city with his charioteer *Channa*, Prince Siddhartha encountered the existential reality of human frailty:
1. An **Old Man** (frailty of youth)
2. A **Sick Man** (frailty of health)
3. A **Dead Corpse** (inevitability of mortality)
4. A Serene **Ascetic Monk** (the peaceful quest for liberation from suffering).

### The Five Sacred Landmarks of the Buddha\'s Life
1. **The Great Renunciation (*Mahabhinishkramana* — Age 29):** Left palace, wife *Yashodhara*, and son *Rahula* on his horse *Kanthaka* into the forest. Studied meditation under yogic masters **Alara Kalama** and **Uddaka Ramaputta**.
2. **Supreme Enlightenment (*Sambodhi* — Age 35):** After 6 years of severe, futile austerities at Uruvela, sat under a Pipal tree (*Ficus religiosa*) on the banks of the **Niranjana River** at **Bodh Gaya**. Overcame the temptations of *Mara* (delusion/desire) and attained Supreme Awakening, becoming **The Buddha** (The Enlightened One).
3. **The First Sermon (*Dhammacakkappavattana* — Setting the Wheel of Law in Motion):** Delivered at the **Deer Park in Sarnath (Isipatana, near Varanasi)** to his five former ascetic companions (*Pancavaggiya*), expounding the Four Noble Truths and Eightfold Path.
4. **Forty-Five Years of Ministry:** Walked across Magadha, Kosala, and Vajji, establishing the *Sangha* and converting kings (Bimbisara, Ajatashatru, Prasenjit), merchants (*Anathapindika*), and commoners.
5. **The Great Decease (*Mahaparinirvana* — Age 80 at c. 483 BCE):** Attained final release at **Kushinara** (capital of the Mallas, UP) after eating a meal offered by the blacksmith *Chunda*. His last words were: *"All compounded things are subject to decay; strive diligently for your own liberation (*Appamadena sampadetha*)."*`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Key Buddhist Symbolic Conventions',
        body: `### The Five Traditional Symbols of Buddha's Life Events
- **Birth:** *Lotus and Bull*
- **Great Renunciation (*Mahabhinishkramana*):** *Horse (Kanthaka)*
- **Enlightenment (*Sambodhi*):** *Bodhi Tree (Pipal)*
- **First Sermon (*Dhammacakkappavattana*):** *Dharma Wheel (Chakra with 8 or 24 spokes)*
- **Mahaparinirvana:** *Stupa / Footprints*`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-14-01',
        statement: 'Siddhartha Gautama was born in the Sakya clan at Lumbini, attained enlightenment at Bodh Gaya, delivered his first sermon at Sarnath, and attained Mahaparinirvana at Kushinagar around 483 BCE.',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Mahaparinibbana Sutta (Digha Nikaya), Ashokan Rummindei Pillar Inscription & NCERT Class 12',
        excerpt: 'Ashoka\'s Rummindei pillar inscription explicitly records "Hida Budhe jate Sakyamuni ti" (Here the Buddha Sakyamuni was born) at Lumbini.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Shramana Movement & Life of the Buddha',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'CONCEPTUAL_AND_SYMBOLIC',
        notes: 'Six heterodox teachers (Makkhali Gosala, Ajita Kesakambali) and 5 life symbols.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Buddhism Life Landmarks & Symbols',
        relevance: 'HIGH',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_PRECISION',
        notes: 'Sites of Lumbini, Bodh Gaya, Sarnath, Kushinagar, and five life symbols.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Birth = Lumbini (Lotus/Bull) | Renunciation = Mahabhinishkramana (Horse) | Enlightenment = Bodh Gaya (Bodhi Tree) | 1st Sermon = Sarnath (Dharma Wheel) | Death = Kushinagar (Stupa) | 6 Heterodox Teachers: Makkhali Gosala (Niyati/Ajivika), Ajita Kesakambali (Materialism).',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which ancient philosopher and contemporary of Gautama Buddha was the founder of the fatalist Ajivika sect, advocating the absolute doctrine of cosmic destiny (Niyati)?',
        options: ['Ajita Kesakambali', 'Makkhali Gosala', 'Purana Kassapa', 'Pakudha Kaccayana'],
        correctAnswer: 'Makkhali Gosala',
        explanation: 'Makkhali Gosala was the leader of the Ajivika sect, which held that human effort has no impact on human fate, and that all beings are strictly subject to unalterable cosmic destiny (Niyati).',
        trapExplanation: 'Ajita Kesakambali was the materialist who denied karma; Makkhali Gosala was the determinist (Niyati).',
        difficulty: 'MEDIUM',
      },
    ],
  },

  {
    id: 'CON-HIST-15',
    slug: 'core-buddhist-philosophy-four-noble-truths-eightfold-path-pratityasamutpada-and-nirvana',
    title: 'Core Buddhist Philosophy: Four Noble Truths, Eightfold Path, Pratityasamutpada & Nirvana',
    shortDefinition: 'Analytical exposition of Buddhist metaphysics and ethics: Cattari Ariyasaccani, Majjhima Patipada, Dependent Origination (Pratityasamutpada), Anatta (No-Self), and Nirvana.',
    difficulty: 'ADVANCED',
    order: 15,
    topicSlug: 'buddhism-philosophy-and-spread',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Four Noble Truths (*Cattari Ariyasaccani*): The Diagnostic Framework',
        body: `The Buddha approached the existential problem of human suffering not through speculative metaphysical theology, but as a **physician diagnosing an illness**:
1. **Dukkha (The Truth of Suffering):** All conditioned existence is permeated by unsatisfactoriness and suffering (*birth, aging, sickness, death, separation from the loved, association with the unloved, unfulfilled desires*).
2. **Samudaya (The Truth of the Origin of Suffering):** The root cause of suffering is **Craving / Trishna (*Tanha*)**—the insatiable thirst for sensual pleasures (*Kama-Tanha*), continued existence (*Bhava-Tanha*), and non-existence (*Vibhava-Tanha*), fueled by fundamental ignorance (*Avidya*).
3. **Nirodha (The Truth of the Cessation of Suffering):** Suffering can be completely eliminated through the total extinction and relinquishment of craving (**Nirvana**).
4. **Magga (The Truth of the Path):** The practical spiritual discipline leading to the cessation of suffering is the **Noble Eightfold Path (*Ariya Atthangika Magga*)**, also termed the **Middle Way (*Majjhima Patipada*)** because it steers between extreme sensory indulgence and self-mortifying asceticism.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'The Noble Eightfold Path & The Threefold Training (*Trishiksha*)',
        body: `The Eightfold Path is systematically categorized into three interconnected pedagogical pillars (**Trishiksha**):

| Division (*Shiksha*) | Path Factor (*Anga*) | Practical Pedagogical Meaning |
| :--- | :--- | :--- |
| **Prajna (Wisdom / Discernment)** | 1. **Right View (*Samma Ditthi*)** | Understanding the Four Noble Truths, impermanence, and dependent origination. |
| | 2. **Right Resolve (*Samma Sankappa*)** | Cultivating intentions of renunciation, loving-kindness (*Metta*), and non-harming (*Ahimsa*). |
| **Sila (Ethical Conduct)** | 3. **Right Speech (*Samma Vaca*)** | Abstaining from lying, slanderous speech, harsh language, and idle gossip. |
| | 4. **Right Action (*Samma Kammanta*)** | Abstaining from killing living beings, stealing, and sexual misconduct. |
| | 5. **Right Livelihood (*Samma Ajiva*)** | Earning a living through harmless professions (avoiding trade in weapons, living beings, meat, alcohol, poisons). |
| **Samadhi (Mental Cultivation)** | 6. **Right Effort (*Samma Vayama*)** | Preventing unwholesome mental states from arising; cultivating and maintaining wholesome states. |
| | 7. **Right Mindfulness (*Samma Sati*)** | Continuous aware contemplation of body (*Kaya*), feelings (*Vedana*), mind (*Citta*), and phenomena (*Dhamma*). |
| | 8. **Right Concentration (*Samma Samadhi*)** | Unification of mind culminating in the four progressive meditative absorptions (**Dhyanas / Jhanas**). |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'HISTORICAL_ANALYSIS',
        title: 'Metaphysical Pillars: Pratityasamutpada, Anatta & The Concept of Nirvana',
        body: `### 1. Pratityasamutpada (Dependent Origination)
The central ontological formula of Buddhism: **"When this exists, that comes to be; with the arising of this, that arises. When this does not exist, that does not come to be; with the cessation of this, that ceases."**
- Illustrated as the **Twelve Links of Dependent Origination (Twelve Nidanas)**, tracing how Ignorance (*Avidya*) $\rightarrow$ Karmic formations (*Sankhara*) $\rightarrow$ Consciousness (*Vinnana*) $\rightarrow$ Name & Form $\rightarrow$ Six Senses $\rightarrow$ Contact $\rightarrow$ Feeling $\rightarrow$ Craving $\rightarrow$ Clinging $\rightarrow$ Becoming $\rightarrow$ Birth $\rightarrow$ Old age and Death (*Dukkha*).

### 2. The Three Marks of Existence (*Tilakkhana*)
1. **Anicca (Impermanence):** All compounded phenomena are in a state of continuous flux and momentary arising and passing away.
2. **Dukkha (Unsatisfactoriness):** Because all conditioned things are impermanent, clinging to them inevitably produces suffering.
3. **Anatta (No-Self / Non-Soul):** The revolutionary Buddhist doctrine denying the existence of a permanent, eternal, immutable Self or Soul (*Atman*). The human individual is merely a dynamic composite of **Five Aggregates (*Pancha Skandhas*)**:
   - *Rupa* (Physical form/body)
   - *Vedana* (Feelings/Sensations)
   - *Sanna* (Perceptions)
   - *Sankhara* (Mental volitions/constructs)
   - *Vinnana* (Consciousness).
   *Rebirth without Transmigrating Soul:* Rebirth is not a permanent soul migrating into a new body, but a continuous stream of karmic causation—like a flame transferring from one candle to another.

### 3. The Meaning of Nirvana
- Literally meaning **"Blowing out / Extinguishing"** (the three toxic fires of Greed *Raga*, Hatred *Dvesha*, and Delusion *Moha*).
- Not physical annihilation or nothingness, but the supreme unconditioned state of peace and liberation from the cycle of rebirth (*Samsara*).`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Exam Invariants & Core Traps',
        body: `### Critical Exam Traps (UPSC / State PCS)
- **Anatta vs Upanishadic Atman:** The Upanishads teach that the individual soul (*Atman*) is eternal and identical with *Brahman*; Buddhism explicitly **rejects an eternal Atman** (*Anatta*), asserting that the self is an impermanent bundle of 5 Skandhas.
- **Middle Way (*Majjhima Patipada*):** Buddhism avoids both extreme luxury and extreme Jain-style bodily mortification.
- **Nirvana is NOT Death:** Nirvana can be attained during life (**Sopadhisesa-Nirvana**, as the Buddha attained at age 35); physical death of an enlightened being is **Parinirvana / Anupadhisesa-Nirvana**.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-15-01',
        statement: 'Buddhist philosophy is founded on the Four Noble Truths, the Middle Way (Noble Eightfold Path), Pratityasamutpada (Dependent Origination), and the doctrine of Anatta (denial of an immutable permanent soul).',
        claimType: 'PHILOSOPHICAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Dhammacakkappavattana Sutta (Samyutta Nikaya) & Anattalakkhana Sutta',
        excerpt: 'The Buddha expounded the Middle Path avoiding the extremes of indulgence and self-mortification, the Four Truths, and that all five aggregates are Anatta (not self).',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Core Doctrines of Buddhism (Pratityasamutpada, Anatta, Nirvana)',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'DEEP_PHILOSOPHICAL_RIGOR',
        notes: 'Pratityasamutpada as causal principle, 3 marks of existence, and 5 Skandhas.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Four Noble Truths & Eightfold Path',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'DOCTRINAL_STRUCTURE',
        notes: 'Threefold division of Eightfold Path (Prajna, Sila, Samadhi) and Twelve Nidanas.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: '4 Noble Truths: Dukkha, Samudaya (Tanha), Nirodha (Nirvana), Magga (8-Fold Path) | 8-Fold Path Divisions: Prajna (View, Resolve), Sila (Speech, Action, Livelihood), Samadhi (Effort, Mindfulness, Concentration) | Anatta = No permanent Soul | 5 Skandhas = Rupa, Vedana, Sanna, Sankhara, Vinnana.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'In Buddhist philosophy, which core ontological doctrine asserts that all mental and physical phenomena arise in mutual dependence upon causes and conditions, without an uncaused first cause?',
        options: ['Anekantavada', 'Pratityasamutpada', 'Syadvada', 'Vivartavada'],
        correctAnswer: 'Pratityasamutpada',
        explanation: 'Pratityasamutpada (Dependent Origination / Interdependent Co-Arising) is the cornerstone causal doctrine of Buddhism, asserting that everything arises in dependence upon conditions and ceases when those conditions cease.',
        trapExplanation: 'Anekantavada and Syadvada are Jain doctrines of multi-sided reality; Vivartavada is Advaita Vedanta\'s theory of apparent transformation.',
        difficulty: 'MEDIUM',
      },
    ],
  },

  {
    id: 'CON-HIST-16',
    slug: 'the-buddhist-sangha-canonical-councils-pali-tipitaka-and-sectarian-evolution',
    title: 'The Buddhist Sangha, Canonical Councils, Pali Tipitaka & Sectarian Evolution',
    shortDefinition: 'The democratic monastic organization of the Buddhist Sangha, the Four Buddhist Councils, the compilation of the Pali Tipitaka, and the Hinayana-Mahayana schism.',
    difficulty: 'ADVANCED',
    order: 16,
    topicSlug: 'buddhism-philosophy-and-spread',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Monastic Engine: The Buddhist Sangha',
        body: `The long-term institutional survival and international spread of Buddhism were powered by the **Sangha** (the monastic order of monks *Bhikkhus* and nuns *Bhikkhunis*). The Sangha functioned as an egalitarian, democratic commonwealth modeled after the political procedures of ancient *Gana-Sanghas*.

### Monastic Architecture & Ceremonies
1. **Universal Admission:** Open to individuals of all castes and classes without social discrimination. (Slaves, debtors, and active soldiers were barred unless emancipated).
2. **Initiation Stages:** 
   - *Pabbajja:* Preliminary initiation (minimum age 8, novice status / *Samanera*).
   - *Upasampada:* Full ordination as a Bhikkhu (minimum age 20).
3. **Monastic Observances:**
   - **Uposatha:** Fortnightly assembly on full moon and new moon days to recite the monastic disciplinary code (**Patimokkha**) and confess violations.
   - **Vassavasa (Vassa):** Three-month rainy season retreat (July–October) where wandering ceased and monks resided in rain shelters (**Viharas**).
   - **Pavarana:** Ceremonial conclusion of the Vassa retreat where monks invited peers to point out any errors committed during the retreat.
   - **Kathina:** Annual robe-offering ceremony by lay devotees at the end of Vassa.
4. **Admission of Women (The Bhikkhuni Sangha):** Initiated at Vaishali when the Buddha's foster mother **Mahapajapati Gotami** was ordained following the persistent intercession of **Ananda**, subject to accepting the **Eight Strict Rules (*Garudhammas*)**.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'The Four Great Buddhist Councils (*Sangitis*)',
        body: `### Master Buddhist Councils Matrix

| Council | Year & Venue | Royal Patron | Presiding Monk | Canonical Accomplishment & Tradition Records |
| :--- | :--- | :--- | :--- | :--- |
| **First Council** | **483 BCE** (immediately after Parinirvana) at **Rajagriha** (Sattapanni Cave) | King **Ajatashatru** (Haryanka Dynasty) | **Mahakassapa** | Compiled the foundational oral canon: **Vinaya Pitaka** (recited by *Upali*) and **Sutta Pitaka** (recited by *Ananda*). Preserved across both Theravada and Northern traditions. |
| **Second Council** | **383 BCE** (100 years after Parinirvana) at **Vaishali** (Valukarama monastery) | King **Kalashoka** (*Kakavarna* — Shishunaga Dynasty) | **Sabbakami** | Dispute over 10 lax monastic rules (*Dasa Vatthuni*). Resulted in the **First Major Schism**: **Sthaviravadins** (Orthodox elders) vs **Mahasanghikas** (Reformist majority). |
| **Third Council** | **c. 250 BCE** at **Pataliputra** (Asokarama) | Emperor **Ashoka** (Maurya Empire) | **Moggaliputta Tissa** | Expelled corrupt elements; codified the **Abhidhamma Pitaka**; Moggaliputta Tissa composed the *Kathavatthu*; sent international Dhamma missions. *(Recorded in Southern Theravada chronicles Dipavamsa/Mahavamsa; omitted in Northern Sanskrit/Tibetan records)*. |
| **Fourth Council (Northern)** | **72 CE** at **Kundalvana** (Kashmir) | Emperor **Kanishka** (Kushana Empire) | **Vasumitra** (Vice-President: **Ashvaghosha**) | Compiled exhaustive Sanskrit commentaries (**Mahavibhasha**); formalized the rise of **Mahayana Buddhism**. *(Theravada tradition instead counts the 1st BCE Aluvihara Council in Sri Lanka as its 4th Council)*. |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'HISTORICAL_ANALYSIS',
        title: 'The Canonical Literature: The Pali Tipitaka & Sectarian Evolution',
        body: `### The Pali Tipitaka (The Three Baskets)
1. **Vinaya Pitaka (Basket of Discipline):** Contains rules of monastic discipline for monks and nuns (*Suttavibhanga, Khandhaka, Parivara*).
2. **Sutta Pitaka (Basket of Discourses):** The foundational doctrinal sermons of the Buddha, organized into **Five Nikayas**:
   - *Digha Nikaya:* Long discourses (includes *Mahaparinibbana Sutta*, *Samaññaphala Sutta*).
   - *Majjhima Nikaya:* Middle-length discourses.
   - *Samyutta Nikaya:* Thematically connected discourses (includes *Dhammacakkappavattana Sutta*).
   - *Anguttara Nikaya:* Numerical groupings of doctrines (contains the roster of 16 Mahajanapadas).
   - *Khuddaka Nikaya:* Diverse collection (includes *Dhammapada, Jataka tales* of Buddha's past lives, *Theragatha, Therigatha* — verses of elder nuns).
3. **Abhidhamma Pitaka (Basket of Higher Philosophy):** Advanced psychological and philosophical categorization of cosmic phenomena (7 treatises including *Dhammasangani, Kathavatthu, Patthana*).

### Sectarian Evolution: Theravada vs. Mahayana vs. Vajrayana
- **Theravada (Teaching of the Elders / Sravakayana):** Adheres strictly to the Pali canon; views Gautama Buddha as an enlightened human historical teacher; individual liberation achieved as an **Arhat**; prevalent in Sri Lanka, Myanmar, Thailand, Cambodia. *(Note: The term **"Hinayana" / Lesser Vehicle** was an historical polemical label applied by emergent Mahayana texts; modern scholarship and practitioners use **Theravada**)*.
- **Mahayana (Great Vehicle):** Evolved around 1st Century BCE–1st Century CE; utilizes Sanskrit texts; deification of Buddha into cosmic dimensions (*Trikaya* doctrine: Dharmakaya, Sambhogakaya, Nirmanakaya); ideal of the compassionate **Bodhisattva** (who postpones final Nirvana to liberate all suffering beings, e.g. *Avalokiteshvara, Manjushri, Maitreya*); widespread across China, Korea, Japan, Vietnam.
- **Vajrayana (Tantric / Diamond Vehicle):** Developed in eastern India (c. 8th Century CE under Palas); employs esoteric mantras, mudras, mandalas, and yogic rituals to attain enlightenment rapidly; center at Vikramashila; spread to Tibet, Bhutan, and Mongolia.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Key Examination Invariants & Traps',
        body: `### Critical Exam Traps
- **Tipitaka Languages:** Original Theravada Tipitaka is in **Pali**; Mahayana scriptures are primarily in **Sanskrit**.
- **Therigatha:** Part of Khuddaka Nikaya; **earliest anthology of women's religious poetry in world literature**, composed by senior Buddhist nuns (*Theris*).
- **Bodhisattva Maitreya:** The **Future Buddha** who is yet to appear in the world.
- **Council Traditions:** Third Council at Pataliputra is prominent in **Theravada chronicles**; Fourth Council in Kashmir is prominent in **Northern/Kushana Sanskrit traditions**.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-16-01',
        statement: 'The Buddhist canonical literature was codified in Pali as the Tipitaka (Vinaya, Sutta, Abhidhamma), while four major councils presided by Mahakassapa, Sabbakami, Moggaliputta Tissa, and Vasumitra shaped its doctrinal and sectarian history.',
        claimType: 'CANONICAL_HISTORY',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Mahavamsa, Dipavamsa & NCERT Class 12 Themes in Indian History I',
        excerpt: 'The teachings were compiled into three baskets: Vinaya (discipline), Sutta (discourses), and Abhidhamma (philosophical matters) across councils convened at Rajgir, Vaishali, Pataliputra, and Kashmir.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Buddhist Councils, Literature & Mahayana Evolution',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'CANONICAL_AND_INSTITUTIONAL',
        notes: 'Four Buddhist councils (patrons, venues, presidents) and Bodhisattva concepts.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Buddhist Literature & Councils',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'COUNCILS_AND_TEXTS',
        notes: 'Council chronology (AKAK mnemonic), Tipitaka components, and Therigatha.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: '1st Council (483 BCE, Rajgir, Ajatashatru, Mahakassapa) $\rightarrow$ Vinaya & Sutta | 2nd Council (383 BCE, Vaishali, Kalashoka, Sabbakami) $\rightarrow$ Sthaviras vs Mahasanghikas | 3rd Council (250 BCE, Pataliputra, Ashoka, Moggaliputta Tissa) $\rightarrow$ Abhidhamma | 4th Council (72 CE, Kashmir, Kanishka, Vasumitra/Ashvaghosha) $\rightarrow$ Hinayana vs Mahayana | Future Buddha = Maitreya.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'During the Third Buddhist Council held at Pataliputra under the patronage of Emperor Ashoka, which section of the Pali Tipitaka was finalized and added to the canon?',
        options: ['Vinaya Pitaka', 'Sutta Pitaka', 'Abhidhamma Pitaka', 'Jataka Tales'],
        correctAnswer: 'Abhidhamma Pitaka',
        explanation: 'The Abhidhamma Pitaka, dealing with philosophical and psychological systematization, was completed and added to the canon during the Third Buddhist Council presided over by Moggaliputta Tissa at Pataliputra.',
        trapExplanation: 'Vinaya and Sutta were compiled during the First Council at Rajgir; Abhidhamma was finalized during the Third Council.',
        difficulty: 'MEDIUM',
      },
    ],
  },

  // =========================================================================
  // TOPIC 69: Jainism: Tirthankaras, Philosophy & Ascetic Traditions
  // =========================================================================
  {
    id: 'CON-HIST-17',
    slug: 'vardhamana-mahavira-and-the-tirthankara-lineage',
    title: 'Vardhamana Mahavira & The Tirthankara Lineage',
    shortDefinition: 'The traditional lineage of the 24 Tirthankaras, Parshvanatha\'s historical 4-vow reform, and the historical biography of Vardhamana Mahavira.',
    difficulty: 'INTERMEDIATE',
    order: 17,
    topicSlug: 'jainism-philosophy-and-tradition',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Eternal Dharma: The Tirthankara Tradition',
        body: `In Jain tradition, Jainism is not regarded as an originated religion founded by a single mortal, but an **eternal universal truth (*Sanatana Dharma*)** revealed in every cosmic cycle by **24 Tirthankaras** (literally *"Ford-Makers"*—spiritual conquerors who create a bridge/ford across the ocean of worldly rebirth *Samsara*).

### The Historical Foundations: From Parshvanatha to Mahavira
- Modern historical scholarship recognizes that **Vardhamana Mahavira was the 24th Tirthankara and reformer**, not the original creator of the religion.
- **1st Tirthankara:** **Rishabhanatha / Adinatha** (Symbol: *Bull*). Regarded as the traditional founder; revered in Hindu Puranas (Bhagavata Purana) as an avatar of Vishnu.
- **22nd Tirthankara:** **Arishtanemi / Neminatha** (Symbol: *Conch*); associated in traditional lore as a cousin of Krishna.
- **23rd Tirthankara (Historical):** **Parshvanatha (c. 8th Century BCE — c. 250 years before Mahavira):**
  - Prince of Varanasi (son of King Ashvasena); attained enlightenment on **Mount Sammed Shikhar** (Giridih, Jharkhand).
  - Taught the **Four-Fold Restraint (*Chaturyama Dharma*)**:
    1. *Ahimsa* (Non-violence)
    2. *Satya* (Truthfulness)
    3. *Asteya* (Non-stealing)
    4. *Aparigraha* (Non-possession).`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'The Historical Life of Vardhamana Mahavira (c. 540–468 BCE)',
        body: `### Birth & Royal Lineage
- **Birth (c. 540 BCE / traditional Svetambara date 599 BCE):** Born at **Kundagrama** (suburb of Vaishali, North Bihar).
- **Lineage:** Belonged to the **Jnatrika Kshatriya clan**. Father: *Siddhartha* (chief of the Jnatrika clan); Mother: *Trishala / Priyakarini* (Lichchhavi princess, sister of *Chetaka*, chief of Vaishali); Wife: *Yashoda*; Daughter: *Anvojja / Priyadarsana*.

### Ascetic Quest & Supreme Enlightenment (*Kevala Jnana*)
- **Renunciation (Age 30):** Following his parents' death, renounced worldly royal life with the permission of his elder brother *Nandivardhana*.
- **Twelve Years of Severe Penance:** Wandered for 12 years practicing extreme asceticism and bodily mortification; abandoned all clothing after 13 months, observing complete nudity. Accompanied for 6 years by *Makkhali Gosala* (who later broke away to found the Ajivika sect).
- **Kevala Jnana (Supreme Enlightenment — Age 42):** Attained Omniscience outside the town of **Jimbhikagrama** under a **Sal tree** (*Shorea robusta*) on the banks of the **Rijupalika River**.
- **Titles Attained:**
  - **Jina:** The Spiritual Conqueror (victor over passions, desires, and senses; followers called *Jains*).
  - **Mahavira:** The Great Hero.
  - **Kevalin:** Possessor of absolute omniscience.
  - **Nirgrantha:** Free from all outer and inner worldly bonds.

### Teaching Ministry & Nirvana
- **First Sermon & The 11 Gandharas:** Delivered his first sermon at Mount Vipulachala near Rajgir; converted **11 chief Brahmana disciples (**Gandharas**)**, led by **Indrabhuti Gautama** (who preserved the oral teachings).
- **The Fifth Vow Addition:** Mahavira reformed Parshvanatha's 4-vow system by adding **Brahmacharya (Celibacy / Chastity)** as the mandatory Fifth Vow.
- **Nirvana (Age 72 at c. 468 BCE / traditional 527 BCE):** Attained final liberation at **Pavapuri** (near Rajgir, Bihar) in the palace of King *Hastipala*.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Key Examination Invariants & Traps',
        body: `### Critical Exam Traps
- **Parshvanatha vs Mahavira Vows:** Parshvanatha taught **4 Vows (*Chaturyama*)**; Mahavira added the **5th Vow: Brahmacharya (Celibacy)**.
- **Tree of Enlightenment:** Buddha attained Bodhi under a **Pipal tree** (Niranjana river, Bodh Gaya); Mahavira attained Kevala Jnana under a **Sal tree** (Rijupalika river, Jimbhikagrama).
- **First Gandhara:** **Indrabhuti Gautama** was the senior-most disciple who survived Mahavira and led the community.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-17-01',
        statement: 'Vardhamana Mahavira was the 24th Tirthankara of Jainism who reformed the 4-fold vows of the 23rd Tirthankara Parshvanatha by adding Brahmacharya as the fifth vow.',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Acharanga Sutra, Kalpa Sutra (Bhadrabahu) & NCERT Class 11/12',
        excerpt: 'Mahavira was born at Kundagrama in the Jnatrika clan, attained Kevala Jnana on the Rijupalika River, added celibacy to Parshva\'s four vows, and died at Pavapuri.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Tirthankara Tradition & Biography of Mahavira',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'HISTORICAL_AND_DOCTRINAL',
        notes: 'Parshvanatha 4 vows vs Mahavira 5 vows, Kevala Jnana landmarks.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Tirthankaras & Life of Mahavira',
        relevance: 'HIGH',
        priority: 'HIGH',
        requiredDepth: 'BIOGRAPHICAL_PRECISION',
        notes: 'Parentage (Siddhartha/Trishala), Jnatrika clan, Pavapuri Nirvana.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: '24 Tirthankaras | 1st = Rishabhanatha (Bull) | 23rd = Parshvanatha (Snake, 4 Vows) | 24th = Mahavira (Lion, 5th Vow Brahmacharya) | Birth = Kundagrama | Enlightenment = Jimbhikagrama (Sal Tree, Rijupalika River) | Death = Pavapuri | 11 Disciples = Gandharas (Indrabhuti Gautama).',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which specific moral vow was added by Vardhamana Mahavira to the existing Four Vows (Chaturyama Dharma) taught by the 23rd Tirthankara Parshvanatha?',
        options: ['Ahimsa (Non-violence)', 'Asteya (Non-stealing)', 'Aparigraha (Non-possession)', 'Brahmacharya (Celibacy)'],
        correctAnswer: 'Brahmacharya (Celibacy)',
        explanation: 'Parshvanatha taught four vows: Ahimsa, Satya, Asteya, and Aparigraha. Vardhamana Mahavira added the fifth vow of Brahmacharya (chastity/celibacy) to complete the Pancha Maha-Vratas.',
        trapExplanation: 'Ahimsa, Asteya, and Aparigraha were already integral parts of Parshvanatha\'s Four-Fold Restraint.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-HIST-18',
    slug: 'core-jain-metaphysics-triratna-ahimsa-anekantavada-syadvada-and-moksha',
    title: 'Core Jain Metaphysics: Triratna, Ahimsa, Anekantavada, Syadvada & Moksha',
    shortDefinition: 'In-depth philosophical exposition of Jain dualism (Jiva-Ajiva), Triratna, the Five Vows, epistemology (Anekantavada & Syadvada), and the mechanics of karmic liberation (Moksha).',
    difficulty: 'ADVANCED',
    order: 18,
    topicSlug: 'jainism-philosophy-and-tradition',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Dualistic Universe: Jiva and Ajiva',
        body: `Jain philosophy is fundamentally **dualistic, realistic, and non-theistic**. It divides all cosmic reality into two eternal, uncreated categories:
1. **Jiva (Living Soul / Conscious Substance):** Every entity—humans, animals, insects, plants, air, water, fire, and earth—possesses an eternal, conscious soul (*Jiva*) inherently characterized by infinite knowledge (*Ananta Jnana*), infinite perception (*Ananta Darshana*), and infinite bliss (*Ananta Sukha*).
2. **Ajiva (Non-living Inanimate Matter):** Composed of five categories:
   - *Pudgala:* Physical matter/atoms.
   - *Dharma:* Principle of motion.
   - *Adharma:* Principle of rest.
   - *Akasha:* Space.
   - *Kala:* Time.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'The Moral Path: The Three Jewels (*Triratna*) & Five Great Vows',
        body: `### The Three Jewels (*Ratnatraya*) of Jainism
The unified vehicle for spiritual liberation:
1. **Samyak Darshana (Right Faith / Perception):** Unshakable conviction in the true nature of reality as taught by the Tirthankaras.
2. **Samyak Jnana (Right Knowledge):** Flawless understanding of the self, karma, and cosmos without doubt or delusion.
3. **Samyak Charitra (Right Conduct):** Living in strict accordance with ethical vows to stop the influx of karma.

### The Five Vows (*Pancha Vratas*)
- Practiced rigorously by monks as **Maha-Vratas (Great Vows)**, and in modified, milder form by lay householders as **Anu-Vratas (Lesser Vows)**:
  1. **Ahimsa (Non-violence):** Absolute non-injury in thought (*Manasa*), word (*Vachana*), and action (*Karmana*) towards all living beings.
  2. **Satya (Truth):** Speaking wholesome truth without anger or greed.
  3. **Asteya (Non-stealing):** Not taking anything that is not freely given.
  4. **Brahmacharya (Chastity):** Absolute celibacy for monks; strict marital fidelity for laypeople.
  5. **Aparigraha (Non-possession):** Complete detachment from material possessions and wealth.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'HISTORICAL_ANALYSIS',
        title: 'Jain Epistemology: Anekantavada & Syadvada',
        body: `### 1. Anekantavada (The Doctrine of Non-Absolutism / Manifold Aspects)
- Ontological principle asserting that **reality is infinitely complex and multi-faceted (*Ananta-dharmatmakam eva tattvam*)**.
- An object possesses infinite attributes; human intellect, bound by sensory limitations, can only perceive a fraction of reality at any single moment.
- Illustrated by the famous ancient parable of the **Six Blind Men and the Elephant** (each man touches one part—leg, trunk, tail, ear—and claims it is a pillar, snake, rope, fan, capturing only a partial perspective).

### 2. Syadvada (The Theory of Conditional Predication / Seven-Fold Logic)
- Epistemological methodology: Every truth statement must be qualified with the prefix **"Syat"** (*"May be / From a certain relative perspective"*), avoiding dogmatic absolutism.
- Formulated as the **Saptabhangi Naya (Seven-Fold Judgment)**:
  1. *Syad-asti:* From a certain point of view, it is.
  2. *Syad-nasti:* From a certain point of view, it is not.
  3. *Syad-asti-nasti:* From a certain point of view, it is and it is not.
  4. *Syad-avaktavya:* From a certain point of view, it is inexpressible.
  5. *Syad-asti-avaktavya:* From a certain point of view, it is and is inexpressible.
  6. *Syad-nasti-avaktavya:* From a certain point of view, it is not and is inexpressible.
  7. *Syad-asti-nasti-avaktavya:* From a certain point of view, it is, is not, and is inexpressible.

### 3. The Karmic Mechanics of Liberation (*Moksha*)
In Jainism, **Karma is physical atomic matter (*Karmic Pudgala*)** that flows into and sticks to the luminous soul:
- **Asrava (Inflow):** Influx of karmic particles into the soul through physical, verbal, and mental actions.
- **Bandha (Bondage):** Karmic particles sticking to the soul like dust on an oily cloth, obscuring its natural brilliance.
- **Samvara (Stoppage):** Halting the influx of new karma through self-discipline, vows, and mindfulness.
- **Nirjara (Exhaustion / Shedding):** Burning away and shedding accumulated past karma through severe physical penance (**Tapas**).
- **Moksha (Liberation):** Complete freedom from all karmic weight; the pure luminous Jiva ascends to the apex of the universe (**Siddhashila**).
- Extreme ascetic practice: **Sallekhana / Santhara** (voluntary, peaceful spiritual fasting unto death when life purposes are fulfilled).`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Exam Invariants & Core Distinctions',
        body: `### Critical Exam Distinctions
- **Anekantavada vs Syadvada:** *Anekantavada* is the **metaphysical theory** (reality has infinite aspects); *Syadvada* is the **linguistic/epistemological method** (expressing truth relatively through seven-fold 'Syat' statements).
- **Karma is Material in Jainism:** Unlike Hinduism and Buddhism where karma is predominantly psychological/cosmic law, in Jainism **karma is tangible physical matter (*Pudgala*)** that literally binds to the soul.
- **Sallekhana:** Fasting unto death practiced by Mahavira and later historical monarchs (e.g. Chandragupta Maurya at Shravanabelagola).`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-18-01',
        statement: 'Jain philosophy is defined by the Triratna (Right Faith, Knowledge, Conduct), Anekantavada (doctrine of multi-sided reality), Syadvada (seven-fold conditional predication), and the physical nature of karmic bondage.',
        claimType: 'PHILOSOPHICAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Tattvartha Sutra (Umaswati) & NCERT Class 11/12',
        excerpt: 'Umaswati\'s Tattvartha Sutra establishes Samyag-darsana-jnana-caritrani moksamargah (Right faith, knowledge, and conduct constitute the path to liberation) alongside Anekantavada and Syadvada.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Core Philosophy of Jainism (Anekantavada, Syadvada, Jiva/Ajiva)',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'DEEP_PHILOSOPHICAL_RIGOR',
        notes: 'Distinction between Anekantavada and Syadvada, mechanics of Asrava/Samvara/Nirjara.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Jain Philosophy, Triratna & Sallekhana',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'DOCTRINAL_PRECISION',
        notes: 'Triratna components, Saptabhangi Naya, and Sallekhana practice.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Triratna = Samyak Darshana, Samyak Jnana, Samyak Charitra | Anekantavada = Multi-sided reality (Elephant parable) | Syadvada = 7-fold conditional truth (Syat) | Karmic sequence = Asrava (inflow) $\rightarrow$ Bandha (bondage) $\rightarrow$ Samvara (stoppage) $\rightarrow$ Nirjara (shedding) $\rightarrow$ Moksha | Sallekhana = Fasting unto death.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'With reference to the religious and philosophical systems of ancient India, the profound doctrine of "Anekantavada" (non-absolutism) is a core metaphysical tenet of which school?',
        options: ['Buddhism', 'Jainism', 'Lokayata / Charvaka', 'Advaita Vedanta'],
        correctAnswer: 'Jainism',
        explanation: 'Anekantavada (the doctrine of manifold aspects of reality and non-absolutism) is the foundational metaphysical pillar of Jain philosophy, asserting that truth and reality are multi-dimensional.',
        trapExplanation: 'Buddhism asserts Pratityasamutpada and Anatta; Lokayata is materialist; Advaita Vedanta asserts non-dual Brahman.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-HIST-19',
    slug: 'the-jain-community-sects-councils-and-historical-expansion',
    title: 'Jain Community, Agamas, Digambara-Svetambara Schism & Historical Legacy',
    shortDefinition: 'The Digambara-Svetambara schism, the Jain canonical councils at Pataliputra and Vallabhi, Ardhamagadhi Agamas, and historical royal patronage.',
    difficulty: 'ADVANCED',
    order: 19,
    topicSlug: 'jainism-philosophy-and-tradition',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Great Schism: Digambaras and Svetambaras',
        body: `The division of the Jain community into **Digambaras ("Sky-Clad")** and **Svetambaras ("White-Clad")** represents the central sectarian divergence in Jain history. 

### The Traditional Famine & Migration Narrative
According to prominent Jain literary tradition (recorded in texts like Hemachandra's *Parishishtaparvan*, Harishena's *Brihatkathakosha*, and later epigraphs at Shravanabelagola):
1. **The Southern Migration (Digambara Tradition):** Around the **3rd Century BCE**, a catastrophic **12-year famine** struck Magadha during the reign of Chandragupta Maurya. Senior pontiff **Bhadrabahu** led a large group of monks south to **Shravanabelagola (Karnataka)**. Chandragupta Maurya accompanied Bhadrabahu as a disciple and ended his life by spiritual fasting unto death (**Sallekhana**).
2. **The Magadhan Remnants (Svetambara Tradition):** Monks who remained in Magadha under **Sthulabhadra** adopted white unstitched robes (*Svetambara*) to cope with social disruptions and convened the First Council at Pataliputra.
3. **The Doctrinal Hardening:** Upon returning, the southern monks rejected the monastic attire and textual redaction of the northern monks.

### Modern Scholarly View: A Gradual Historical Process
Modern historical scholarship (e.g. Paul Dundas, Padmanabh Jaini) emphasizes that rather than a sudden overnight split caused solely by the famine, the Digambara-Svetambara divergence was a **gradual regional and monastic evolution** spanning several centuries, which crystallized formally by the 5th Century CE at the Council of Vallabhi.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Doctrinal Differences between Digambaras and Svetambaras',
        body: `| Doctrinal Issue | Digambara Tradition ("Sky-Clad") | Svetambara Tradition ("White-Clad") |
| :--- | :--- | :--- |
| **Monastic Attire** | Complete nudity required for male monks as the ultimate test of non-possession (*Aparigraha*). | Simple unstitched white robes permitted for monks and nuns. |
| **Spiritual Status of Women** | Women **cannot attain direct Moksha / Kevala Jnana**; must be reborn as a man first. | Women **can attain direct Moksha**; 19th Tirthankara **Mallinatha** is recognized as a woman. |
| **Food Intake of Kevalin** | An enlightened Omniscient being (*Kevalin*) requires **no physical food** to sustain life. | A *Kevalin* still requires physical morsels of food for bodily sustenance. |
| **Status of Canonical Texts** | The original 14 Purvas and 12 Angas were lost; canonical authority rests on later treatises (*Shatkhandagama*). | Accepts the canonical **12 Angas** compiled at Pataliputra and finalized at Vallabhi. |
| **Idol Iconography** | Tirthankara idols are unadorned, completely naked, with downcast contemplative eyes. | Tirthankara idols wear loincloths, are adorned with crowns/jewels, and have open glass eyes. |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'HISTORICAL_ANALYSIS',
        title: 'Jain Canonical Councils & Sacred Literature',
        body: `### The Two Canonical Jain Councils
1. **First Jain Council (c. 300 BCE at Pataliputra):**
   - Convened under the leadership of **Sthulabhadra**.
   - Reconstructed the sacred teachings into **12 Angas** in **Ardhamagadhi Prakrit** to replace the lost 14 Purvas. (Rejected by Digambaras).
2. **Second Jain Council (512 CE at Vallabhi, Gujarat):**
   - Presided over by **Devardhi Kshamasramana**.
   - Final systematic redaction and written recording of the Svetambara canon (**12 Angas, 12 Upangas, 10 Prakirnakas, 6 Chedasutras, 4 Mulasutras**).

### Royal Patronage & Architectural Heritage
- **Early Patronage:** Bimbisara and Ajatashatru (Haryankas); Udayin; Mahapadma Nanda.
- **Kharavela of Kalinga (1st Century BCE):** Celebrated Jain monarch; his **Hathigumpha Inscription** (Udayagiri, Odisha) records defeating Magadha and reclaiming the stolen sacred Jina image (*Kalinga Jina*).
- **Deccan & Western India:**
  - **Gommateshwara (Bahubali) Colossus (57 ft):** Carved in 981 CE at **Shravanabelagola (Karnataka)** by Chamundaraya (minister of Western Ganga King Rachamalla); site of the *Mahamastakabhisheka* festival.
  - **Dilwara Temples (Mount Abu, Rajasthan):** World-renowned marble temples; **Vimal Vasahi** (built 1031 CE by Vimal Shah) and **Luna Vasahi** (built 1230 CE by Vastupala & Tejpala).
  - **Ranakpur Jain Temple (Pali, Rajasthan):** 1444 intricately carved marble pillars built under Maharana Kumbha (1439 CE) by merchant Dharna Shah.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Target Exam Anchors & Invariants',
        body: `### Key Exam Anchors (UPSC / RPSC)
- **Language of Jain Canon:** The primary Jain canonical texts (**Agamas**) were written in **Ardhamagadhi Prakrit**.
- **First Council:** Pataliputra under Sthulabhadra (c. 300 BCE).
- **Second Council:** Vallabhi under Devardhi Kshamasramana (512 CE).
- **Female Tirthankara:** **Mallinatha** (19th Tirthankara) regarded as female in Svetambara tradition.
- **Rajasthan Jain Heritage:** **Dilwara Temples (Mount Abu)** and **Ranakpur Temple (Pali)** are premier national art anchors.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-19-01',
        statement: 'The Jain canon was codified in Ardhamagadhi Prakrit across councils at Pataliputra (c. 300 BCE) and Vallabhi (512 CE), while the Digambara-Svetambara schism crystallized following the 12-year Magadha famine.',
        claimType: 'CANONICAL_HISTORY',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Kalpa Sutra, Parishishtaparvan & NCERT Class 12',
        excerpt: 'The Jain canon was compiled in Ardhamagadhi at the Vallabhi council in 512 CE under Devardhi Kshamasramana, following the historic schism between Bhadrabahu\'s Digambaras and Sthulabhadra\'s Svetambaras.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Jain Councils, Literature & Art Heritage',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'SECTARIAN_AND_ARCHITECTURAL',
        notes: 'Digambara-Svetambara differences, Gommateshwara statue, and Hathigumpha inscription.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims & Mains: Jain Councils & Rajasthan Jain Architecture',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'HIGH_PRECISION_FACTS',
        notes: 'Dilwara (Mount Abu), Ranakpur, Vallabhi council, and Ardhamagadhi Agamas.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Famine Migration: Bhadrabahu + Chandragupta Maurya $\rightarrow$ Shravanabelagola (Digambaras, Sky-clad) vs Sthulabhadra $\rightarrow$ Magadha (Svetambaras, White-clad) | 1st Council: Pataliputra (Sthulabhadra, 300 BCE) | 2nd Council: Vallabhi (Devardhi, 512 CE) | Language: Ardhamagadhi Prakrit | Monuments: Gommateshwara (981 CE), Dilwara (Mount Abu), Ranakpur.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'In which ancient Indian city was the Second Jain Council held in 512 CE under the presidency of Devardhi Kshamasramana, where the Jain Agamas were finally committed to writing?',
        options: ['Pataliputra', 'Vallabhi', 'Vaishali', 'Ujjain'],
        correctAnswer: 'Vallabhi',
        explanation: 'The Second Jain Council was held at Vallabhi (Gujarat) in 512 CE under the leadership of Devardhi Kshamasramana, where the Svetambara canonical corpus (12 Angas, Upangas) was definitively recorded in written manuscripts.',
        trapExplanation: 'Pataliputra was the venue of the First Jain Council (c. 300 BCE); Vaishali was the venue of the Second Buddhist Council.',
        difficulty: 'EASY',
      },
    ],
  },

  // =========================================================================
  // TOPIC 70: Buddhism & Jainism: Comparative Historical Synthesis
  // =========================================================================
  {
    id: 'CON-HIST-20',
    slug: 'buddhism-and-jainism-comparative-historical-synthesis',
    title: 'Buddhism and Jainism: Comparative Synthesis, Socio-Economic Drivers & Historical Impact',
    shortDefinition: 'Comprehensive comparative matrix synthesizing the doctrines, sociological drivers, linguistic mediums, and long-term historical impact of Buddhism and Jainism.',
    difficulty: 'ADVANCED',
    order: 20,
    topicSlug: 'buddhism-vs-jainism-comparative-synthesis',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Dual Shramana Renaissance: Shared Roots & Divergent Trajectories',
        body: `Both **Buddhism and Jainism** emerged in the 6th Century BCE Middle Gangetic basin as part of the broader **Shramana Renaissance**. They shared common ground in rejecting the infallible authority of the Vedas, animal sacrifice (*Yajnas*), and hereditary Brahmana ritual supremacy.

However, their underlying **metaphysical foundations, ethical disciplines, concepts of self, and global trajectories** diverged sharply.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Master Comparative Matrix: Buddhism vs. Jainism',
        body: `| Dimension | Buddhism (The Middle Path) | Jainism (The Path of Asceticism) | Historical Significance & Contrast |
| :--- | :--- | :--- | :--- |
| **Founder / Tradition** | **Siddhartha Gautama** (Single historical founder, c. 563–483 BCE). | **Vardhamana Mahavira** (24th Tirthankara, reforming Parshvanatha's 4-vow tradition). | Buddhism represents a new foundation; Jainism represents the revival of an ancient ascetic lineage. |
| **Concept of Self / Soul** | **Anatta (No-Self):** Denies permanent soul; human identity is a dynamic flux of 5 Skandhas. | **Jiva (Plurality of Souls):** Every living entity (including rocks, water, plants) has an eternal conscious Jiva. | Fundamental ontological divergence: Process flux (Buddhism) vs Spiritual animism (Jainism). |
| **Attitude to Asceticism** | **Majjhima Patipada (Middle Way):** Explicitly rejects self-mortification as spiritually useless. | **Extreme Ascetic Penance (*Tapas*):** Essential to burn past karma; includes fasting unto death (*Sallekhana*). | Monastic rigor: Buddhism allows moderate comfort; Jainism demands rigorous sensory austerity. |
| **Ahimsa (Non-violence)** | Central moral virtue, but practical (*monks could consume meat if not killed specifically for them*). | **Absolute, non-negotiable Ahimsa:** Monks wear face masks (*Muhapatti*), filter water, and avoid agriculture to protect micro-organisms. | Jain Ahimsa restricted followers predominantly to commerce and trade rather than farming. |
| **God & Creation** | Non-theistic / Agnostic; universe operates on **Pratityasamutpada** (Causality). | Non-theistic; cosmos is uncreated and eternal; Tirthankaras revered above deities. | Both reject a supreme creator God (*Ishvara*). |
| **Varna & Social Status** | Rejects Vedic caste superiority; character and virtue define true nobility; open Sangha. | Rejects Vedic ritual supremacy; interprets Varna as a social consequence of past karma. | Both welcomed Kshatriyas, Vaishyas, and Shudras into their spiritual communities. |
| **Canonical Language** | **Pali** (Vernacular dialect of common masses) $\rightarrow$ later Sanskrit in Mahayana. | **Ardhamagadhi Prakrit** (Popular vernacular) $\rightarrow$ later Sanskrit and Kannada. | Both deliberately abandoned elite priestly Sanskrit to communicate directly with common people. |
| **Geographic Spread** | Pan-Asian World Religion (Sri Lanka, China, Japan, Tibet, SE Asia) through state patronage. | Remained primarily within the Indian subcontinent (Gujarat, Rajasthan, Karnataka). | Buddhism expanded globally via Ashoka/Kanishka; Jainism developed deep local roots via merchant communities. |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'HISTORICAL_ANALYSIS',
        title: 'Historiographical Analysis: The Socio-Economic Matrix of the Shramana Renaissance',
        body: `In modern historical scholarship (notably D.D. Kosambi, R.S. Sharma, and Romila Thapar), the rapid spread and enduring social appeal of Buddhism and Jainism are understood not in isolation, but within the broader **socio-economic transformation of the Second Urbanisation**:

1. **Agrarian Economy & Cattle Capital:** The spread of intensive iron-plough agriculture in the Middle Ganga plain required immense draft animal power. The large-scale slaughter of cattle in orthodox Vedic animal sacrifices (*Pashuyajnas*) directly depleted livestock assets. The Shramana emphasis on **Ahimsa (Non-violence)** offered an ideological protection for cattle, preserving critical agricultural wealth.
2. **The Urban Mercantile Class (*Vaishyas / Sreshthins*):** Monetization (punch-marked coins) and long-distance trade generated wealthy merchant guilds. However, orthodox Brahmanical texts (*Dharmasutras*) viewed money-lending for interest (*Kusida/Usury*) and sea voyages as religiously polluting. In contrast, Buddhism and Jainism **welcomed trade, placed high ethical value on honest enterprise, and offered social dignity to merchants**.
3. **Kshatriya Intellectual Hegemony:** Both Gautama Buddha and Vardhamana Mahavira were Kshatriya princes from autonomous *Gana-Sanghas*. Their philosophies provided an intellectual counterweight enabling rulers and Kshatriyas to contest the hereditary ritual monopoly of the Brahmana priesthood.
4. **Universal Ethical Code for Cosmopolitan Centers:** Commercial cities (Pataliputra, Ujjain, Kaushambi) brought together diverse ethnic populations across traditional tribal lines. The universal moral frameworks of **Karma and individual ethical conduct** replaced localized tribal rituals with a functional code for an interconnected urban society.

*(Note: While these material factors explain why heterodox teachings found fertile social and economic ground, historians recognize that deep spiritual, philosophical, and existential questions were equally fundamental catalysts for the renouncers themselves)*.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Mains Comparative Framework & Traps',
        body: `### Answer-Writing Scaffold for UPSC / State PCS Mains
When addressing: *"Discuss the socio-economic factors responsible for the rise of heterodox religions in the 6th Century BCE"*, structure the analysis across **4 Material Pillars**:
1. **Agrarian Catalyst:** Preservation of cattle draft wealth through Ahimsa against Vedic sacrificial slaughter.
2. **Commercial Resonance:** High social status accorded to urban merchants (*Setthis*) and monetization vs orthodox usury taboos.
3. **Political Dynamics:** Kshatriya assertion against Brahmana ritual hegemony in Gana-Sanghas and monarchies.
4. **Linguistic Democracy:** Use of popular vernaculars (Pali and Ardhamagadhi Prakrit) breaking Sanskrit exclusivity.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-20-01',
        statement: 'The rise of Buddhism and Jainism in the 6th Century BCE was materially driven by the expansion of iron-plough agriculture, the economic empowerment of urban merchant classes (Vaishyas), and the adoption of vernacular languages (Pali and Ardhamagadhi).',
        claimType: 'HISTORICAL_SYNTHESIS',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'R.S. Sharma, Material Culture and Social Formations in Ancient India & Romila Thapar, Early India',
        excerpt: 'The heterodox movements responded to the demands of the new iron-age agrarian and urban economy, protecting cattle through Ahimsa and providing social dignity to the burgeoning mercantile class.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Socio-Economic Causes of the Rise of Heterodox Sects',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'COMPARATIVE_AND_CAUSAL_SYNTHESIS',
        notes: 'Comparative matrix of Buddhism vs Jainism and material drivers of the Shramana revolution.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Mains Paper I: Comparison of Buddhism and Jainism',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'STRUCTURED_COMPARISON',
        notes: 'Doctrinal contrasts on Soul (Anatta vs Jiva), Ahimsa, and languages (Pali vs Ardhamagadhi).',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Buddhism vs Jainism: Soul = Anatta (No-Self) vs Jiva (Omnipresent soul) | Asceticism = Middle Way (Majjhima) vs Extreme Tapas (Sallekhana) | Ahimsa = Practical vs Absolute | Languages = Pali vs Ardhamagadhi Prakrit | Causes = Cattle preservation + Merchant dignity + Kshatriya assertion + Vernacular communication.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which of the following was a primary economic factor that facilitated the widespread social acceptance of Buddhism and Jainism among the mercantile trading community (Vaishyas) in 6th Century BCE northern India?',
        options: [
          'Both religions mandated state subsidies for foreign export merchants',
          'Both religions rejected orthodox Vedic taboos against money-lending and praised ethical wealth creation',
          'Both religions required all converts to engage exclusively in agricultural tilling',
          'Both religions established state monopolies over mineral iron ore deposits',
        ],
        correctAnswer: 'Both religions rejected orthodox Vedic taboos against money-lending and praised ethical wealth creation',
        explanation: 'Orthodox Brahmanical Dharmasutras condemned money-lending (usury) and sea travel as socially degrading and polluting. Buddhism and Jainism, by contrast, imposed no religious taboos on commerce, welcomed merchants into the lay community, and praised righteous wealth creation.',
        trapExplanation: 'Jainism actually discouraged agricultural tilling due to its strict Ahimsa doctrine towards soil micro-organisms.',
        difficulty: 'MEDIUM',
      },
    ],
  },
];

export async function seedBatchAncientIndiaBatch2CanonicalKnowledge(): Promise<void> {
  console.log('Seeding Ancient India (Batch 2: Mahajanapadas, Magadha, Buddhism, Jainism) Canonical Benchmark...');

  // 1. Ensure Target Subject exists
  const subject = await db.subject.findUnique({
    where: { slug: 'ancient-indian-history' },
  });
  if (!subject) {
    throw new Error('Subject "ancient-indian-history" must exist before seeding Batch 2.');
  }

  // 2. Ensure Exams
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

  const examMap: Record<string, string> = {
    'upsc-cse': upsc.id,
    'rpsc-ras': rpsc.id,
  };

  // 3. Ensure Source exists for Provenance
  const sourceHist = await db.source.upsert({
    where: { id: 'SRC-ANCIENT-INDIA-CANONICAL-2026' },
    update: {},
    create: {
      id: 'SRC-ANCIENT-INDIA-CANONICAL-2026',
      title: 'Ancient Indian History Canonical Reference Corpus (2026)',
      sourceType: 'ACADEMIC_CANONICAL_SYNTHESIS',
      authorityTier: 'PEER_REVIEWED_ARCHAEOLOGICAL_REFERENCE',
      description: 'Authoritative first-principles academic synthesis integrating Archaeological Survey of India (ASI) site reports, NCERT Ancient India (R.S. Sharma), and peer-reviewed epigraphic concordances.',
    },
  });

  // 4. Ensure Topics exist (Topics 66 to 70)
  const topicDefs = [
    {
      slug: 'mahajanapadas-and-second-urbanisation',
      title: 'Mahajanapadas & Second Urbanisation',
      description: 'The emergence of the sixteen Mahajanapadas, iron-plough agriculture, NBPW pottery, monetization with punch-marked coins, and the constitutional dichotomy between monarchies and Gana-Sanghas.',
      scope: 'Transition from Janapadas to Mahajanapadas, political geography of 16 states, and oligarchic republics.',
      order: 66,
    },
    {
      slug: 'rise-of-magadha',
      title: 'The Rise of Magadha & Pre-Mauryan Dynasties',
      description: 'Geographical, metallurgical, and military drivers of Magadhan hegemony, and the dynastic chronicles of the Haryankas, Shishunagas, and Nandas.',
      scope: 'Strategic advantages of Rajgir and Pataliputra, iron mines, war elephants, and pre-Mauryan rulers.',
      order: 67,
    },
    {
      slug: 'buddhism-philosophy-and-spread',
      title: 'Buddhism: Historical Context, Doctrines & Monastic Institutions',
      description: 'Siddhartha Gautama, Shramana movement, Four Noble Truths, Eightfold Path, Pratityasamutpada, Anatta, Buddhist councils, Tipitaka, and sectarian evolution.',
      scope: 'Early Buddhist philosophy, Sangha administration, four Buddhist councils, and Hinayana-Mahayana-Vajrayana divisions.',
      order: 68,
    },
    {
      slug: 'jainism-philosophy-and-tradition',
      title: 'Jainism: Tirthankaras, Philosophy & Ascetic Traditions',
      description: 'The 24 Tirthankaras, Vardhamana Mahavira, Triratna, Five Vows, Anekantavada, Syadvada, Digambara-Svetambara schism, and canonical councils.',
      scope: 'Jain metaphysics of Jiva-Ajiva, karma and liberation, Sallekhana, Ardhamagadhi Agamas, and architectural heritage.',
      order: 69,
    },
    {
      slug: 'buddhism-vs-jainism-comparative-synthesis',
      title: 'Buddhism & Jainism: Comparative Historical Synthesis',
      description: 'Multi-dimensional comparative synthesis contrasting the doctrines, ascetic rigor, concepts of self, sociological drivers, and historical legacies of Buddhism and Jainism.',
      scope: 'Comparative matrix across philosophy, Ahimsa, languages, merchant patronage, and the material catalysts of the Shramana revolution.',
      order: 70,
    },
  ];

  for (const t of topicDefs) {
    await db.topic.upsert({
      where: {
        subjectId_slug: {
          subjectId: subject.id,
          slug: t.slug,
        },
      },
      update: {
        title: t.title,
        description: t.description,
        scope: t.scope,
        order: t.order,
        status: 'ACTIVE',
      },
      create: {
        slug: t.slug,
        title: t.title,
        description: t.description,
        scope: t.scope,
        order: t.order,
        subjectId: subject.id,
        status: 'ACTIVE',
      },
    });
  }

  // 5. Seed Concepts
  for (const c of ANCIENT_INDIA_BATCH_2_CONCEPTS) {
    const topic = await db.topic.findFirst({
      where: {
        subjectId: subject.id,
        slug: c.topicSlug,
      },
    });
    if (!topic) continue;

    const concept = await db.concept.upsert({
      where: { id: c.id },
      update: {
        topicId: topic.id,
        slug: c.slug,
        title: c.title,
        shortDefinition: c.shortDefinition,
        difficulty: c.difficulty,
        status: 'CANONICAL',
        order: c.order,
      },
      create: {
        id: c.id,
        topicId: topic.id,
        slug: c.slug,
        title: c.title,
        shortDefinition: c.shortDefinition,
        difficulty: c.difficulty,
        status: 'CANONICAL',
        order: c.order,
      },
    });

    // Clear child relations
    await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
    await db.examConceptMapping.deleteMany({ where: { conceptId: concept.id } });
    await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
    await db.question.deleteMany({ where: { conceptId: concept.id } });

    // Seed Content Blocks
    for (const cb of c.contentBlocks) {
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

    // Seed Claims & Evidence
    for (const clm of c.claims) {
      const claim = await db.claim.upsert({
        where: { id: clm.id },
        update: {
          statement: clm.statement,
          claimType: clm.claimType,
          epistemicLevel: clm.epistemicLevel,
          confidence: clm.confidence,
          conceptId: concept.id,
          status: 'CANONICAL_CLAIM',
        },
        create: {
          id: clm.id,
          statement: clm.statement,
          claimType: clm.claimType,
          epistemicLevel: clm.epistemicLevel,
          confidence: clm.confidence,
          conceptId: concept.id,
          status: 'CANONICAL_CLAIM',
        },
      });

      const existingEvidence = await db.evidence.findFirst({
        where: { claimId: claim.id, locator: clm.locator },
      });
      if (!existingEvidence) {
        await db.evidence.create({
          data: {
            claimId: claim.id,
            sourceId: sourceHist.id,
            locator: clm.locator,
            excerpt: clm.excerpt,
            evidenceType: 'PRIMARY_HISTORICAL_REFERENCE',
            authority: 'ACADEMIC_PEER_REVIEWED',
            evidentiarySupport: 'STRONG_SUPPORT',
            extractionConfidence: 'HIGH',
          },
        });
      }
    }

    // Seed Exam Mappings
    for (const em of c.examMappings) {
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
            notes: em.notes,
          },
        });
      }
    }

    // Seed Revision Units
    for (const ru of c.revisionUnits) {
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

    // Seed Questions
    for (const q of c.questions) {
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
          isPYQ: false,
        },
      });
    }
  }

  console.log(`Successfully seeded ${ANCIENT_INDIA_BATCH_2_CONCEPTS.length} Ancient India (Batch 2) canonical concepts.`);
}
