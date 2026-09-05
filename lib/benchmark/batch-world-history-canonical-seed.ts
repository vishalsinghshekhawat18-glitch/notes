import { db } from '../db/client';

export interface WorldHistoryConceptDef {
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
    isPYQ?: boolean;
    pyqYear?: number;
    pyqPaper?: string;
    pyqStage?: string;
    examinerTrapPattern?: string;
  }[];
}

export const WORLD_HISTORY_CONCEPTS: WorldHistoryConceptDef[] = [
  // =========================================================================
  // TOPIC 1: Classical Antiquity & The Roman Empire
  // =========================================================================
  {
    id: 'CON-WLD-01',
    slug: 'the-roman-empire-principate-senate-pax-romana-and-slave-economy',
    title: 'The Roman Empire: The Principate, The Senate, Pax Romana & Mediterranean Agrarian Slavery',
    shortDefinition: 'Classical Mediterranean statecraft: Transition from Roman Republic to Empire under Augustus (27 BCE, the Principate), the tripartite political equilibrium (Emperor, Senate, Army), Pax Romana, Mediterranean maritime trade (amphorae olive oil and wine), slave labor economics, and the 4th-century Christian transformation under Constantine (Constantinople).',
    difficulty: 'ADVANCED',
    order: 1,
    topicSlug: 'classical-antiquity-and-rome',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'An Empire Encircling the Inland Sea: The Masterwork of Mediterranean Order',
        body: `At its height in the 2nd century CE, the **Roman Empire** was a colossal multi-continental superpower stretching from Scotland in the west to the Euphrates River in Iraq, and from the Rhine and Danube rivers in Europe to the Sahara desert in North Africa. The Romans proudly called the Mediterranean Sea ***Mare Nostrum* ("Our Sea")**, for their empire encircled every single kilometer of its coastline.

What made Rome politically unique was its constitutional genius:
When **Augustus (Octavian)** ended decades of bloody civil wars in **27 BCE**, he established the imperial monarchy known as the **Principate**. But instead of declaring himself an absolute king or god (which Romans historically hated), Augustus cunningly called himself merely the ***Princeps* ("First Citizen")**, maintaining the outward democratic facade of the Roman Senate while secretly monopolizing supreme command of the army.

Supported by a ruthless slave economy and thousands of self-governing Mediterranean cities, the empire sustained two centuries of unprecedented peace known as the **Pax Romana**!`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The Triad of Roman Power & Late Antiquity Christianization',
        body: `### 1. The Tripartite Political Equilibrium of Rome
1. **The Emperor (*Princeps*):** The supreme military commander and head of state; succession was not strictly hereditary, requiring army loyalty and Senate approval.
2. **The Senate:** The aristocratic council representing the wealthy landed nobility of Rome and the provinces; a ruler who respected the Senate was hailed as "good" (e.g. Trajan, Marcus Aurelius), while one who executed senators was branded a tyrant (e.g. Nero, Domitian).
3. **The Standing Professional Army:** A paid, standing army of over 300,000 professional legionaries who served 25-year terms; the army was the ultimate arbiter of royal succession (a king who could not pay bonuses faced mutiny and assassination).

---

### 2. Economy & Slavery in the Roman World
* **The "Amphorae" Trade:** Tens of millions of ceramic vessels (**Amphorae**) carrying Spanish olive oil (Dressel 20) and Italian/Gallic wine were transported across Mediterranean sea lanes.
* **Slave Labor System:** Slaves were regarded as living tools (*instrumentum vocale*); widespread in Italian vineyards, Spanish silver mines, and aristocratic households; managed via slave-gangs (*catenae*); large-scale manumission allowed freedmen to acquire wealth and citizenship.
* **Gender & Law:** Roman civil law granted upper-class women remarkable legal autonomy: upon marriage, a Roman woman did not pass into her husband's legal control, retaining property rights inherited from her father!

---

### 3. Late Antiquity & The Christian Transformation (4th Century CE)
* **Emperor Diocletian (284–305 CE):** Abandoned territories of little strategic value; fortified frontiers; created the **Tetrarchy** (rule of four).
* **Emperor Constantine the Great (306–337 CE):**
  * **Christianity Legalized (Edict of Milan, 313 CE):** Converted to Christianity and made it the favored state religion.
  * **Founded Constantinople (330 CE):** Transferred the imperial capital to Byzantium (renamed Constantinople / modern Istanbul), surrounded on three sides by water.
  * **Monetary Stability:** Introduced the gold coin **Solidus** (4.5 grams pure gold), which remained the stable global currency of the Mediterranean for 800 years!`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'The Solidus Monetary Engine & The Third-Century Crisis',
        body: `### 1. The Crisis of the Third Century (235–284 CE)
* Within 50 years, Rome witnessed **over 25 emperors assassinated**, simultaneous Germanic barbarian invasions across the Rhine/Danube, and the rise of the aggressive **Sasanian Empire of Persia** (King Shapur I captured Roman Emperor Valerian alive in 260 CE!).
* Solved only when Diocletian and Constantine restructured the military and created the stable gold *Solidus*.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Princeps Meaning & Solidus Specifications',
        body: `### High-Frequency Traps in Roman History

1. **Princeps Title Trap:**
   * *Princeps* means **"First Citizen"**, NOT "Absolute Monarch" or "Emperor". Augustus preserved the illusion of the Republic.

2. **Solidus Weight and Metal:**
   * Introduced by **Constantine**; made of **pure gold** weighing exactly **4.5 grams**.

3. **Mare Nostrum Definition:**
   * Latin term meaning **"Our Sea"**, applied strictly to the **Mediterranean Sea**.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-WLD-01-1',
        statement: 'Augustus founded the Roman Empire in 27 BCE through the regime known as the Principate, ruling as Princeps (First Citizen) while balancing power between the Senate and the standing army.',
        claimType: 'POLITICAL_FOUNDATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-2',
        excerpt: 'An Empire Across Three Continents: The Roman Empire, Augustus, Principate 27 BCE, Senate, standing army.',
      },
      {
        id: 'CLM-WLD-01-2',
        statement: 'Roman trade transported millions of liters of wine and olive oil in ceramic amphorae across the Mediterranean (Mare Nostrum), sustained by institutionalized slave labor.',
        claimType: 'ECONOMIC_STRUCTURE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-2',
        excerpt: 'Roman Economy: Amphorae trade, Spanish olive oil Dressel 20, slave labor system.',
      },
      {
        id: 'CLM-WLD-01-3',
        statement: 'Emperor Constantine adopted Christianity, founded Constantinople as the new capital in 330 CE, and introduced the pure gold Solidus coin (4.5 grams) providing monetary stability for centuries.',
        claimType: 'MONETARY_AND_RELIGIOUS_TRANSFORMATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-2',
        excerpt: 'Late Antiquity: Constantine, Edict of Milan 313 CE, Constantinople founded 330 CE, gold Solidus.',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — World History / Classical Civilizations & State Formations',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_CONCEPTUAL_ANALYSIS',
        notes: 'Roman administrative structures and comparison with Maurya/Gupta empires frequently examined.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — World History / Classical Civilizations',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE',
        notes: 'Frequent 5-mark question on the Pax Romana or Constantine\'s reforms.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — World History',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on first Roman Emperor (Augustus) and Constantinople founder (Constantine).',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'General Studies — World History Landmarks',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'HISTORICAL_FOUNDATIONS',
        notes: 'Tested on monetary history and trade routes.',
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Global Milestones',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'General static awareness.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — World History',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'General static awareness.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Global Economic History',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'GENERAL_AWARENESS',
        notes: 'Phase 1 questions on historical trade routes and currencies.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'General Socio-Economic Background',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Early global currencies (Solidus).',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Rome: Republic -> Empire (27 BCE, Augustus, Principate, Princeps = First Citizen). Triad = Emperor + Senate + 300k Standing Army. Economy = Amphorae (Dressel 20 olive oil/wine), slave labor (instrumentum vocale), high female legal autonomy. Constantine: Legalized Christianity (313 CE), capital to Constantinople (330 CE), pure gold Solidus (4.5g). Mare Nostrum = Mediterranean.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'The Roman Empire Blueprint: 1) Political Balance: Augustus created the Principate (27 BCE) masking monarchy under the title Princeps; governed via equilibrium between Emperor, aristocratic Senate, and professional army. 2) Socio-Economic Base: Mediterranean maritime trade centered on Spanish oil and Gallic wine in amphorae; relied on slave labor; Roman women enjoyed independent property rights. 3) Late Antiquity: Constantine established Constantinople (330 CE), adopted Christianity, and introduced the gold Solidus coin, transitioning Rome toward the Byzantine era.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Roman Imperial Architecture: 1) Maritime Urban Integration: Coastal cities linked by Mediterranean maritime lanes rather than costly overland haulage. 2) Civic Co-optation: Integrating provincial elites into the Senate to eliminate rebellion. 3) Monetary Stability: The 4.5g gold Solidus serving as an invariant store of value amidst structural barbarian invasions.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'ROME_MCQ',
        stem: 'In the political architecture of the Roman Empire founded by Augustus in 27 BCE, what did the term "Principate" designate?',
        options: [
          'A hereditary absolute military dictatorship where the Senate was completely abolished',
          'The constitutional regime where the Emperor ruled as "Princeps" (First Citizen), maintaining the outward legal facade of the Republic and Senate',
          'A decentralized confederation of autonomous Greek city-states',
          'The rule of four co-emperors established to divide imperial territory'
        ],
        correctAnswer: 'The constitutional regime where the Emperor ruled as "Princeps" (First Citizen), maintaining the outward legal facade of the Republic and Senate',
        explanation: 'The Principate was the system of imperial monarchy established by Augustus in 27 BCE. Recognizing that Romans abhorred kingship, Augustus ruled not as a king, but as Princeps (leading or first citizen), preserving the traditional Republican magistracies and the Senate while retaining actual supreme command.',
        trapExplanation: 'Option D describes the Tetrarchy of Diocletian (293 CE); Option A is factually wrong because Augustus meticulously preserved the Senate.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Exact nature of the Augustan Principate vs open autocracy.',
      },
      {
        type: 'ROME_MCQ',
        stem: 'Which Roman Emperor introduced the famous gold coin known as the "Solidus" (weighing 4.5 grams of pure gold) and transferred the capital of the empire to Byzantium in 330 CE?',
        options: ['Julius Caesar', 'Augustus', 'Trajan', 'Constantine the Great'],
        correctAnswer: 'Constantine the Great',
        explanation: 'Emperor Constantine the Great (reigned 306–337 CE) fundamentally reformed the Roman economy by introducing the Solidus (4.5 grams of pure gold), which remained the standard international currency for centuries, and founded the new imperial capital of Constantinople on the site of ancient Byzantium in 330 CE.',
        trapExplanation: 'Augustus founded the empire; Diocletian introduced the Tetrarchy; Constantine created the Solidus and Constantinople.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'RPSC RAS Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Reforms of Constantine (Solidus and Constantinople).',
      },
    ],
  },

  // =========================================================================
  // TOPIC 2: Nomadic Empires & The Mongol World System
  // =========================================================================
  {
    id: 'CON-WLD-02',
    slug: 'nomadic-empires-genghis-khan-yasa-and-yam-courier-system',
    title: 'Nomadic Empires: Genghis Khan, The Mongol Military Blitzkrieg, The Yasa Legal Code & The Yam Courier Network',
    shortDefinition: 'Steppe nomad state-building: Temujin\'s rise as Genghis Khan (1206), the decimal military organization (Arban to Tumen), equestrian steppe archery, the psychological warfare apparatus, the Yam (postal-courier horse relay network), the Yasa (unwritten imperial legal code), Pax Mongolica reviving the Silk Road, and the division into four Khanates.',
    difficulty: 'ADVANCED',
    order: 2,
    topicSlug: 'nomadic-empires-and-mongols',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Lords of the Steppe: How Horse Archers Conquered the Known World',
        body: `In the harsh, freezing grasslands of the Mongolian steppes, nomadic pastoralist clans had spent centuries fighting blood feuds over pasture land and horses. Sedentary empires in China and Persia looked down upon them as disorganized, primitive barbarians.

Yet within a single generation, an outcast named **Temujin** unified these fractured tribes, was proclaimed **Genghis Khan ("Universal Ruler") in 1206**, and unleashed the most terrifyingly effective military conqueror machine the world had ever seen.

The Mongol blitzkrieg shattered the Jin Dynasty of China, the Khwarizmian Empire of Persia, the Kievan Rus of Russia, and marched to the gates of Vienna in Central Europe!

How did a nomadic population of barely one million conquer empires comprising over 100 million subjects?
* **Decimal Cavalry Organization:** Breaking ancient clan loyalties by reorganizing soldiers into strict decimal units of 10, 100, 1,000, and 10,000 (**Tumen**).
* **Steppe Equestrian Mastery:** Every warrior rode with 3 to 4 spare horses, firing lethal compound composite bows with pinpoint accuracy backwards at a full gallop (**Parthian shot**).
* **The Yam Information Telemetry:** A world-spanning horse-courier relay system that transmitted orders across 6,000 km in days, creating the trans-Eurasian trade peace known as the **Pax Mongolica**!`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'Mongol Military Engineering, The Yasa & Pax Mongolica',
        body: `### 1. Genghis Khan\'s Military Innovations
* **Decimal Military Structure:** Soldiers divided into:
  $$\\mathbf{10} \\text{ (Arban)} \\implies \\mathbf{100} \\text{ (Jaghun)} \\implies \\mathbf{1,000} \\text{ (Mingghan)} \\implies \\mathbf{10,000} \\text{ (Tumen)}$$
* **The Bodyguard (*Keshig*):** Elite 10,000-strong imperial bodyguard corps chosen from sons of commanders, serving as both elite military vanguard and civil administrative school.
* **Psychological Warfare & Siegecraft:** Employed Chinese and Muslim engineers to build catapults, naptha fire-bombs, and trebuchets; offered peaceful surrender or total annihilation (leveling rebellious cities like Nishapur and Bukhara to terrorize future targets).

---

### 2. The Yam (Örtöö) Postal Courier System
* A network of post-stations established across Eurasia at intervals of 25–30 miles.
* Fresh horses, food, and armed escorts maintained by a mandatory levy on nomadic herdsmen (**Qubcur** tax).
* Royal messengers wearing official brass/silver passports (**Paiza**) could gallop day and night, covering up to 200 miles in 24 hours—the fastest communications telemetry before the electric telegraph!

---

### 3. The Yasa (Code of Law) & Religious Tolerance
* **The Yasa:** The comprehensive body of imperial decrees, customary laws, and hunting regulations compiled under Genghis Khan. Emphasized absolute obedience to the Khan, strict punishment for horse theft and adultery, and cleanliness of running water.
* **Radical Religious Tolerance:** Mongols were Shamanists (worshipping the Eternal Blue Sky, *Tengri*), but Genghis Khan granted complete tax exemption and patronage to Buddhist monks, Christian Nestorians, Muslim clerics, and Daoist sages equally.

---

### 4. Pax Mongolica & The 4 Khanates
Following Genghis Khan's death in 1227, the empire was divided among his four sons into **Ulus (realms)**:
1. **The Great Khanate (Yuan Dynasty, China):** Founded by Kublai Khan; capital at Khanbaliq (Beijing).
2. **The Golden Horde (Kipchak Khanate):** Russia and steppes (Batu Khan).
3. **The Ilkhanate (Persia & Middle East):** Sacked Baghdad (1258, Hulagu Khan).
4. **The Chagatai Khanate:** Central Asia.
* **Pax Mongolica:** Under united Mongol passport control (*Paiza*), Italian merchants like **Marco Polo** could travel safely from Venice to Beijing without harassment!`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'The Composite Bow Mechanics & Decimal Clan Dissolution',
        body: `### 1. The Nomadic Composite Bow
* Constructed of horn, wood, and sinew glued under tension; possessed a draw weight of over 100-160 pounds and an effective range of 300 meters, out-ranging European longbows.

### 2. Eradication of Tribal Identity
* Before Genghis Khan, nomads fought only for their specific clan (Tatars, Merkits, Naimans).
* Genghis Khan deliberately disbanded entire tribes, scattering clansmen across different *Mingghans* (units of 1,000). If a warrior attempted to flee his designated unit, he and his entire 10-man unit were executed, forging iron discipline.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Yam vs Yasa & Paiza Function',
        body: `### High-Frequency Traps in Mongol History

1. **Yam vs Yasa Confusion:**
   * **Yam (Örtöö):** The postal-courier horse relay communications network.
   * **Yasa:** The imperial legal code and decree system.
   * *Trap:* Swapping the postal system with the legal code.

2. **Paiza Definition:**
   * A silver, gold, or bronze tablet/passport worn on the belt granting official Mongol messengers safe conduct and food at Yam stations.

3. **Mongol Incursions into India:**
   * Genghis Khan reached the Indus in **1221 CE** chasing Jalaluddin Mangbarani, but Sultan **Iltutmish** politely refused asylum, saving the Delhi Sultanate from destruction!`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-WLD-02-1',
        statement: 'Temujin was proclaimed Genghis Khan in 1206, reorganizing steppe nomads into decimal military units (Arban 10 to Tumen 10,000) and an elite bodyguard (Keshig).',
        claimType: 'MILITARY_REORGANIZATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-25',
        excerpt: 'Nomadic Empires: Genghis Khan 1206, decimal military system, Tumen, Keshig.',
      },
      {
        id: 'CLM-WLD-02-2',
        statement: 'The Mongols established the Yam (Örtöö) postal horse-relay communication network across Eurasia, regulated by official passport tablets (Paiza) and supported by the Qubcur tax.',
        claimType: 'COMMUNICATION_INFRASTRUCTURE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-25',
        excerpt: 'The Yam postal courier system, Paiza passports, trans-Eurasian communication network.',
      },
      {
        id: 'CLM-WLD-02-3',
        statement: 'The Yasa was the codified legal and administrative decree system of Genghis Khan, maintaining religious neutrality and facilitating the Pax Mongolica Silk Road trade.',
        claimType: 'LEGAL_CODE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-25',
        excerpt: 'The Yasa legal code; Pax Mongolica and Silk Road trade revitalization.',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — World History / Nomadic Empires & State Formations',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_CONCEPTUAL_ANALYSIS',
        notes: 'Mongol military innovations, Yam postal system, and Silk Road economic integration frequently tested.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — World History / Medieval World',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE',
        notes: 'Frequent 5-mark question on Genghis Khan\'s military organization or the Yasa.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — World History',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on Genghis Khan ascension year (1206) and Tumen unit size (10,000).',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'General Studies — Historical Formations',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'HISTORICAL_TERMS',
        notes: 'Tested on Yam and Paiza definitions.',
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Global History',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'General static awareness.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — World History',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'General static awareness.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Historical Milestones',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'GENERAL_AWARENESS',
        notes: 'Phase 1 static questions on Eurasian trade history.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'General Socio-Economic Background',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Eurasian trade routes and historical communication networks.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Mongols: Genghis Khan (Temujin, 1206). Military: Decimal (Arban 10 -> Jaghun 100 -> Mingghan 1,000 -> Tumen 10,000), Keshig (bodyguard). Communications: Yam (Örtöö) horse-post stations every 25-30 miles with Paiza passports. Legal: Yasa code of law. 4 Khanates: Yuan (China), Golden Horde (Russia), Ilkhanate (Persia), Chagatai (Central Asia). Pax Mongolica = Silk Road safe under Marco Polo.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Nomadic Empires & Mongols Blueprint: 1) Military Genesis: Genghis Khan unified Mongolian clans in 1206; broke tribal clans by instituting decimal military units (Tumen = 10,000) and composite horse-archery. 2) State Telemetry: Built the Yam (Örtöö) horse courier network across Eurasia, enabling rapid intelligence delivery under official Paiza passports. 3) Governance & Law: Codified imperial decrees in the Yasa; practiced strict religious tolerance. 4) Global Legacy: Revitalized the Silk Road under the Pax Mongolica across four successor Khanates.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Steppe Nomadic Statecraft Architecture: 1) Overcoming Ecological Scarcity: Mobilizing equestrian cavalry mobility to conquer sedentary agricultural river basins. 2) Information Velocity: The Yam network reducing trans-continental dispatch times from months to days. 3) Pragmatic Eclecticism: Employing conquered Chinese, Persian, and Uighur scribes and siege engineers while maintaining nomadic military supremacy.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'MONGOL_MCQ',
        stem: 'In the administrative and communications infrastructure of the Mongol Empire established by Genghis Khan, what did the term "Yam" (or Örtöö) specifically designate?',
        options: [
          'The supreme tribal assembly of chieftains that elected the Great Khan',
          'The world-spanning postal-courier horse relay network stationed at regular intervals across Eurasia',
          'The sacred Shamanistic mountain sanctuary where imperial rulers were buried',
          'The tribute tax levied in horses and cattle on conquered sedentary cities'
        ],
        correctAnswer: 'The world-spanning postal-courier horse relay network stationed at regular intervals across Eurasia',
        explanation: 'The Yam (or Örtöö) was the famous Mongol postal-courier communication system. Relays of fresh horses and provisions were stationed at intervals of 25 to 30 miles across the empire, allowing royal messengers carrying Paiza tablets to cover hundreds of miles per day.',
        trapExplanation: 'Option A describes the Kurultai; Option D describes the Qubcur tax.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Core institutional definition of the Yam communication network.',
      },
      {
        type: 'MONGOL_MCQ',
        stem: 'What was the military term for the largest standard division in Genghis Khan\'s decimal army organization, consisting of exactly 10,000 cavalry soldiers?',
        options: ['Arban', 'Jaghun', 'Mingghan', 'Tumen'],
        correctAnswer: 'Tumen',
        explanation: 'In Genghis Khan\'s decimal military structure: an Arban was 10 soldiers, a Jaghun was 100 soldiers, a Mingghan was 1,000 soldiers, and a Tumen was the largest combat division comprising exactly 10,000 soldiers.',
        trapExplanation: 'Mingghan was 1,000; Tumen was 10,000.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'SSC CGL Tier 1',
        pyqStage: 'Tier 1',
        examinerTrapPattern: 'Decimal military terminology of the Mongol army.',
      },
    ],
  },

  // =========================================================================
  // TOPIC 3: Feudal Europe, The Three Orders & The Renaissance
  // =========================================================================
  {
    id: 'CON-WLD-03',
    slug: 'feudal-europe-the-three-orders-black-death-and-renaissance-humanism',
    title: 'Feudal Europe & The Renaissance: The Three Orders, The Black Death (1348) & Humanist Intellectual Transformation',
    shortDefinition: 'Medieval European socio-economic dynamics and intellectual rebirth: The Three Orders (Clergy, Nobility, Peasantry / Serfdom), the Manorial economic estate, the catastrophic Black Death pandemic (1348) and the crisis of feudalism, and the 14th-to-16th-century Italian Renaissance (humanism, Petrarch, Machiavelli\'s *The Prince*, Leonardo da Vinci, Gutenberg\'s movable type print revolution 1450).',
    difficulty: 'ADVANCED',
    order: 3,
    topicSlug: 'feudal-europe-and-renaissance',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'From Medieval Darkness to the Rebirth of Man',
        body: `For nearly a millennium after the fall of the Western Roman Empire (c. 500–1400 CE), Western Europe lived under the rigid, hierarchical social system known as **Feudalism**:
* Society was cleaved into **"Three Orders"**: Those who pray (**The Clergy**), Those who fight (**The Nobility**), and Those who work (**The Peasantry / Serfs**).
* The average peasant was a **Serf**, legally tied to the soil of a lord\'s manor, forced to surrender unpaid labor (*Corvée*) and heavy tithes, while the Roman Catholic Church taught that human life on earth was merely a sinful, miserable trial before the afterlife.

In the mid-14th century, this frozen medieval order shattered:
1. **The Black Death (1348–1351):** The bubonic plague wiped out **one-third of Europe\'s entire population**. Suddenly, agricultural labor became scarce, empowering surviving peasants to demand cash wages and breaking the spine of feudal serfdom.
2. **The Renaissance (Rebirth):** In wealthy Italian city-states like Florence and Venice, thinkers rediscovered classical Greek and Roman texts, birthing **Humanism**—the revolutionary philosophy that celebrated human potential, rational inquiry, and secular joy in this mortal world!`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The Three Orders & The Renaissance Transformation Matrix',
        body: `### 1. The Three Orders of Feudal Society

| Order | Social Composition & Role | Economic Basis & Privileges | Obligations & Power Dynamics |
| :--- | :--- | :--- | :--- |
| **First Order: The Clergy** | Catholic Church, Bishops, Parish Priests, Monks (Monasteries: Benedictine, Cluniac). | Owned $\\frac{1}{5}$th of all land in Western Europe; exempt from taxation; levied the **Tithe** (mandatory 10% tax on agricultural produce). | Monopolized literacy, education, and moral authority; acted as sovereign spiritual masters. |
| **Second Order: The Nobility** | Kings, Dukes, Earls, Barons, and **Knights** (mounted elite cavalry). | Held hereditary fiefs (**Manors**); owned agricultural land; controlled private castles and courts. | Bound to the King by feudal oaths of fealty and homage; provided military service; extracted unpaid labor (*Corvée*) from serfs. |
| **Third Order: The Peasantry** | • **Free Peasants:** Tenants paying land rent.<br>• **Serfs (*Villeins*):** Bound to the lord's soil; could not marry or leave the manor without lord's permission. | Cultivated the lord\'s personal land (**Demesne**) for 3 days a week without pay; paid arbitrary tallage taxes. | Bore the entire financial burden of society with zero political rights. |

---

### 2. The Crisis of Feudalism & The Black Death (1348–1351)
* **The Plague:** Bubonic plague carried by fleas on black rats aboard Genoese merchant ships from the Black Sea.
* **Demographic Catastrophe:** Killed **25 to 30 million Europeans** (approx. $30\\%–40\\%$ of the population).
* **Socio-Economic Upheaval:**
  * Severe shortage of agricultural laborers led to soaring wages.
  * Lords attempted to legally freeze wages and reimpose serfdom, triggering explosive peasant revolts: **The Jacquerie in France (1358)** and the **Peasants\' Revolt in England (1381 led by Wat Tyler)**.
  * Serfdom collapsed across Western Europe, giving way to cash-wage tenant farming.

---

### 3. The Italian Renaissance & Humanist Revolution (14th–16th Centuries)
* **Why Italy?** Wealthy maritime commercial republics (**Florence, Venice, Genoa**) governed by merchant oligarchs (the **Medici family** of Florence) who lavishly patronized arts and learning; influx of Byzantine Greek scholars after the **Fall of Constantinople (1453)**.
* **Humanism (*Umanista*):** Replaced medieval scholastic theology with the study of grammar, rhetoric, history, poetry, and moral philosophy; shifted focus from "God and Sin" to **"Human dignity, reason, and worldly beauty"**.
  * **Petrarch (1304–1374):** Revered as the **"Father of Humanism"**; revived classical Latin manuscripts.
  * **Niccolò Machiavelli (1469–1527):** Authored **The Prince (1513)**; divorced political statecraft from Christian morality, introducing modern secular political realism.
  * **The "Universal Man" (*Uomo Universale*):** Embodying mastery in all fields, exemplified by **Leonardo da Vinci** (*Mona Lisa, The Last Supper*, aeronautical sketches) and **Michelangelo** (Sistine Chapel ceiling, David).
* **The Print Revolution (c. 1450–1455):** **Johannes Gutenberg** invented movable metal type in Mainz, Germany; printed the Gutenberg Bible (1455); broke the Church\'s monopoly on book production, democratizing knowledge and paving the way for the **Protestant Reformation (Martin Luther, 1517)**!`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'The Gutenberg Print Acceleration & Scientific Rationalism',
        body: `### The Information Explosion of Movable Type
* Prior to Gutenberg, a monk took months to hand-copy a single manuscript on animal parchment (*vellum*), producing fewer than 50,000 hand-copied books in all of Europe.
* By 1500, printing presses across 250 European cities had produced **over 20 million books**, making ideas uncontrollable by royal or papal censors!
* **Scientific Breakthroughs:**
  * **Nicolaus Copernicus (1543):** Published *De revolutionibus orbium coelestium*, replacing Ptolemaic Earth-centric universe with the **Heliocentric (Sun-centered) model**.
  * **Galileo Galilei:** Confirmed heliocentrism with the telescope, defying the Catholic Inquisition.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Tithe vs Corvée & Gutenberg Bible Date',
        body: `### High-Frequency Traps in European Feudalism & Renaissance

1. **Tithe vs Corvée:**
   * **Tithe:** A **tax of 1/10th of agricultural produce** collected by the **Church / Clergy**.
   * **Corvée:** **Unpaid forced physical labor** demanded by the **Feudal Lord / Nobility**.
   * *Trap:* Confusing the religious tax with feudal forced labor.

2. **Father of Humanism:**
   * **Francesco Petrarch** (NOT Erasmus or Machiavelli).

3. **Fall of Constantinople Year:**
   * Captured by Ottoman Sultan Mehmed II in **1453 CE**, triggering the migration of Greek scholars to Italy.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-WLD-03-1',
        statement: 'Medieval European feudalism was structured into the Three Orders (Clergy, Nobility, Peasantry), where the Church extracted the Tithe (one-tenth agricultural tax) and lords extracted unpaid Corvée labor from serfs.',
        claimType: 'FEUDAL_STRUCTURE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-46',
        excerpt: 'The Three Orders & Renaissance: Feudal Europe, clergy, nobility, peasantry, tithe, corvee.',
      },
      {
        id: 'CLM-WLD-03-2',
        statement: 'The Black Death (1348–1351) eliminated approximately one-third of Europe\'s population, creating severe labor shortages that eroded serfdom and catalyzed peasant uprisings like the 1381 English revolt.',
        claimType: 'PANDEMIC_IMPACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-46',
        excerpt: 'Black Death 1348; labor scarcity; collapse of feudal serfdom; 1381 peasant revolt.',
      },
      {
        id: 'CLM-WLD-03-3',
        statement: 'The Italian Renaissance pioneered Humanism through Petrarch, political secularism through Machiavelli\'s The Prince, and the Gutenberg movable-type print revolution (1450s) that enabled the Protestant Reformation.',
        claimType: 'INTELLECTUAL_REVOLUTION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-46',
        excerpt: 'The Renaissance: Humanism, Petrarch, Machiavelli The Prince, Gutenberg movable type press 1450.',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — World History / Renaissance, Enlightenment & Decline of Feudalism',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_HISTORIOGRAPHICAL_ANALYSIS',
        notes: 'Renaissance humanism, Machiavelli, and the transition from feudalism to capitalism are core UPSC themes.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — World History / Renaissance & Reformation',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE',
        notes: 'Guaranteed 5-mark and 10-mark questions on Renaissance causes, humanism, and literature.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — World History',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on Gutenberg press year (1450s), Father of Humanism (Petrarch), and The Prince author.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'General Studies — Global Transformations',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'HISTORICAL_FOUNDATIONS',
        notes: 'Tested on Black Death dates and print revolution.',
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Global Milestones',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'General static awareness.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — World History',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'General static awareness.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Historical Milestones',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'GENERAL_AWARENESS',
        notes: 'Phase 1 static questions on European economic history.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'General Socio-Economic Background',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Transition to early modern market economies.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Feudalism: 3 Orders = Clergy (Tithe = 10% tax), Nobility (Manors, Knights, Corvée = unpaid labor), Peasantry (Serfs bound to soil). Black Death (1348-51, killed 1/3 population -> broke serfdom). Renaissance (Italy, Florence, Medici): Humanism (Petrarch = Father), Machiavelli (The Prince 1513, secular statecraft), Leonardo (Universal Man), Gutenberg (Movable metal type press 1450s Mainz).',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Feudalism & Renaissance Blueprint: 1) Three Orders: Clergy extracted the Tithe; Nobility owned manors and extracted Corvée forced labor from unfree Serfs. 2) Crisis: The Black Death (1348) eradicated one-third of Europe\'s population, causing catastrophic labor shortages that dismantled feudal serfdom. 3) Renaissance & Humanism: Emerged in Italian merchant republics (Florence); Petrarch pioneered Humanism; Machiavelli secularized political realism in The Prince. 4) Gutenberg Press (1450s): Broke Church monopoly on information, laying the foundation for the scientific revolution.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Early Modern Transition Architecture: 1) Demographic Shock: Bubonic plague shifting economic bargaining power from feudal landlords to agricultural laborers. 2) Epistemological Secularization: Humanism shifting cognitive focus from theological dogma to empirical human reason. 3) Mechanical Replication: Movable metal type reducing the cost of knowledge dissemination by 99%, triggering mass literacy and religious reform.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'RENAISSANCE_MCQ',
        stem: 'Who among the following fourteenth-century Italian scholars and poets is universally celebrated across European intellectual history as the "Father of Humanism"?',
        options: ['Dante Alighieri', 'Francesco Petrarch', 'Giovanni Boccaccio', 'Niccolò Machiavelli'],
        correctAnswer: 'Francesco Petrarch',
        explanation: 'Francesco Petrarch (1304–1374) is recognized as the "Father of Humanism" for his pioneering recovery and study of classical Roman authors (Cicero, Virgil) and his philosophical emphasis on human reason, secular virtue, and individual agency.',
        trapExplanation: 'Dante wrote The Divine Comedy; Machiavelli wrote The Prince; Petrarch is the Father of Humanism.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'RPSC RAS Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Father of Humanism attribution to Petrarch.',
      },
      {
        type: 'FEUDAL_MCQ',
        stem: 'In the socio-economic structure of medieval European feudalism, what did the term "Tithe" specifically designate?',
        options: [
          'The mandatory unpaid physical labor that serfs performed on the lord\'s demesne',
          'A compulsory tax of one-tenth (10%) of annual agricultural produce collected by the Catholic Church from the peasantry',
          'The annual tribute paid by a feudal knight to the king in lieu of military service',
          'The entry fine paid by a serf upon inheriting his father\'s tenancy'
        ],
        correctAnswer: 'A compulsory tax of one-tenth (10%) of annual agricultural produce collected by the Catholic Church from the peasantry',
        explanation: 'The Tithe was a mandatory ecclesiastical tax amounting to one-tenth (10%) of all crops, livestock, and agricultural produce levied by the Catholic Church on peasant cultivators. Option A describes the Corvée.',
        trapExplanation: 'Option A describes Corvée; confusing Tithe with Corvée is a standard examiner trap.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2020,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Tithe (Church tax) vs Corvée (unpaid feudal labor).',
      },
    ],
  },

  // =========================================================================
  // TOPIC 4: The French Revolution (1789) & The Napoleonic Order
  // =========================================================================
  {
    id: 'CON-WLD-04',
    slug: 'the-french-revolution-1789-estates-general-rights-of-man-and-napoleon',
    title: 'The French Revolution (1789): The Ancien Régime, Constitutional Experiments, Jacobin Republic & Napoleonic Transformation',
    shortDefinition: 'The political crucible of modern democracy from NCERT Class IX: Fiscal crisis under Louis XVI, the Three Estates (Tithe vs Taille), Enlightenment philosophers (Locke, Montesquieu, Rousseau), the Tennis Court Oath (June 20, 1789), the Storming of the Bastille (July 14, 1789), the Declaration of the Rights of Man and of the Citizen, the political clubs (Jacobins vs Girondins), Robespierre\'s Reign of Terror (1793–94), Olympe de Gouges and women\'s revolutionary clubs, the colonial slavery abolition timeline (1794/1848), the Directory, and the Napoleonic Civil Code of 1804.',
    difficulty: 'ADVANCED',
    order: 4,
    topicSlug: 'french-revolution-and-napoleon',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Liberty, Equality, Fraternity: Dismantling the Divine Right of Kings',
        body: 'In the spring of 1789, France was the most populous, cultured, and powerful kingdom in Western Europe. Yet beneath the gilded mirrors of the Palace of Versailles lay a rotten, bankrupt social order: the Ancien Régime.\n\nFrench society was divided into three unequal estates:\n- The First Estate (Clergy) and Second Estate (Nobility) constituted barely 2% of the population, owned 60% of all land, and enjoyed complete exemption from state taxes.\n- The Third Estate—comprising 98% of the people (peasants, urban artisans, and the educated commercial bourgeoisie)—bore the entire crushing burden of taxation: the Tithe (to the Church) and the Taille (direct tax to the Crown), alongside brutal indirect taxes on daily salt (Gabelle) and tobacco.\n\nWhen King Louis XVI convened the Estates-General on May 5, 1789 to impose new taxes, the Third Estate revolted against the medieval feudal voting rule (one estate, one vote). Demanding individual voting per member, they broke away on June 20, 1789, took the historic Tennis Court Oath, and declared themselves the sovereign National Assembly.\n\nOn July 14, 1789, the Parisian masses stormed the medieval fortress-prison of the Bastille, destroying the physical embodiment of royal absolutism and inaugurating the modern democratic trinity: "Liberty, Equality, Fraternity" (Liberté, Égalité, Fraternité)!',
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'Social Stratification, Intellectual Catalysts & Revolutionary Chronology',
        body: '### 1. The Three Estates & Fiscal Architecture of the Ancien Régime\n\n| Estate | Social Composition | Demographic Share | Land Ownership | Fiscal Obligations & Rights |\n| :--- | :--- | :--- | :--- | :--- |\n| **First Estate** | Catholic Clergy (High archbishops to parish priests) | ~1% (~100,000) | ~10% | Exemption from direct taxes; extracted **Tithe** (1/10th of agricultural produce) from peasants. |\n| **Second Estate** | Hereditary Nobility (Nobles of the sword & robe) | ~1.5% (~300,000) | ~25–30% | Total exemption from state taxes; extracted hereditary feudal dues and forced labor (**Corvée**) from peasantry. |\n| **Third Estate** | Big businessmen, merchants, court officials, lawyers, peasants, artisans, landless laborers | ~98% (~27 million) | ~60–65% | Paid all taxes: **Tithe** (to clergy), **Taille** (direct tax to king), and heavy indirect taxes on salt and tobacco. Held zero political voice. |\n\n---\n\n### 2. Intellectual Catalysts of the French Revolution (NCERT Cited)\n- **John Locke (*Two Treatises of Government*):** Refuted the divine and absolute right of the monarch.\n- **Jean-Jacques Rousseau (*The Social Contract*):** Proposed a government based on a social contract between people and their representatives, emphasizing the sovereign "General Will".\n- **Montesquieu (*The Spirit of the Laws*):** Proposed a division of state power between the legislature, executive, and judiciary—a model adopted by the American Constitution and French reformers.\n- **Abbé Sieyès:** Authored the incendiary pamphlet *"What is the Third Estate?"* declaring: *"What is the Third Estate? Everything. What has it been heretofore in the political order? Nothing. What does it demand? To become something."*\n\n---\n\n### 3. Chronological Trajectory of the Revolution (1789–1815)\n1. **May 5, 1789 (Estates-General Convenes):** Louis XVI summoned representatives at Versailles; Third Estate walked out over voting deadlock.\n2. **June 20, 1789 (Tennis Court Oath):** Led by Mirabeau and Abbé Sieyès, Third Estate delegates gathered in an indoor tennis court at Versailles, swearing not to disperse until drafting a constitution for France.\n3. **July 14, 1789 (Storming of the Bastille):** Paris citizens stormed the Bastille to seize ammunition and tear down royal despotism; now celebrated as Bastille Day.\n4. **August 4, 1789 (Abolition of Feudalism):** National Assembly passed a decree abolishing the feudal system of obligations and taxes, nationalizing church lands.\n5. **August 26, 1789 (Declaration of the Rights of Man and of the Citizen):** Proclaimed natural and inalienable rights: liberty, property, security, and resistance to oppression.\n6. **1791 (Constitutional Monarchy):** National Assembly completed the constitution, creating "Active Citizens" (men over 25 paying taxes equal to at least 3 days of labor, entitled to vote) and "Passive Citizens" (all women and poorer men, denied voting rights).\n7. **Sept 1792 (Birth of the Republic):** Monarchy abolished; newly elected National Convention declared France a Republic. King Louis XVI convicted of treason and executed by guillotine on Jan 21, 1793 at Place de la Concorde.\n8. **1793–1794 (Reign of Terror):** Robespierre\'s Committee of Public Safety; execution of political opponents; Law of the Maximum (wage/price ceilings); ended with the Thermidorian Reaction and execution of Robespierre (July 1794).\n9. **1795–1799 (The Directory):** A five-member executive ruling France amidst rampant corruption and instability.\n10. **1799 (Coup of 18 Brumaire):** Napoleon Bonaparte overthrew the Directory, establishing the Consulate and crowning himself Emperor in 1804; defeated at Waterloo in 1815.',
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Women\'s Rights, Colonial Slavery & The Napoleonic Legal Order',
        body: '### 1. Did Women Have a Revolution? (NCERT Class IX Focus)\n- Women were active participants from the start (e.g., the **Women\'s March on Versailles**, October 5, 1789, forcing the royal family back to Paris).\n- Women formed around 60 political clubs across French cities; the most famous was the **Society of Revolutionary and Republican Women** (*Société des Républicaines Révolutionnaires*).\n- **Olympe de Gouges (1748–1793):** Protested against the 1791 Constitution and Declaration of Rights of Man for excluding women. In 1791, she authored the landmark ***Declaration of the Rights of Woman and of the Female Citizen***:\n  > *"Woman is born free and remains equal to man in rights."*\n- During the Reign of Terror, the Jacobin government forcibly shut down women\'s clubs, banned women\'s political assemblies, and guillotined Olympe de Gouges in 1793.\n- *Note for Exams:* French women finally gained the right to vote only in **1946**!\n\n---\n\n### 2. The Triangular Slave Trade & The Slavery Abolition Timeline\n- **Triangular Trade Architecture:** European slave merchants sailed from French ports (Bordeaux, Nantes) to African coasts, bought enslaved Africans, shipped them across the Atlantic in a brutal 3-month Middle Passage to the Caribbean colonies (Martinique, Guadeloupe, San Domingo), where enslaved labor produced sugar, coffee, and indigo for European markets.\n- **Abolition Timeline:**\n  * In 1794, the radical **National Convention** passed a law emancipating all enslaved persons in French overseas colonies.\n  * In 1802, **Napoleon Bonaparte** re-established slavery to appease wealthy plantation owners and merchants.\n  * Slavery was finally and permanently abolished across all French colonies in **1848**.\n\n---\n\n### 3. The Napoleonic Civil Code of 1804 (*Code Civil des Français*)\n- Replaced over 300 regional customary feudal laws with a unified national civil code:\n  1. Abolished all privileges based on birth (clergy, nobility).\n  2. Established equality before the law for all citizens.\n  3. Secured and protected the inviolable right to private property.\n  4. Modernized administrative divisions, abolished the guild system in towns, and standardized weights and measures using the decimal metric system.\n- *Patriarchal Limitation:* Re-established patriarchal control; married women were legally subordinated to husbands and denied independent administration of property.',
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'MAP_PERSPECTIVE',
        title: 'Geopolitical & Transatlantic Topology of Revolutionary France',
        body: 'Geopolitical & Maritime Node Schematic of the French Revolution:\n\n       North Sea\n          |\n       [Great Britain] <== (Continental Blockade Berlin Decree 1806)\n          |\n       English Channel\n          |\n   +------V--------------------------------------------+\n   | FRANCE                                            |\n   |   [Paris] (Bastille 14 July 1789, Guillotine)    |\n   |   [Versailles] (Estates-General, Tennis Court)   |\n   |                                                   |\n   |   Slave Trade Ports:                              |\n   |   - [Nantes] (Atlantic slave trade port)          |\n   |   - [Bordeaux] (Wine, sugar, slave commerce)      |\n   |                                                   |\n   |   National Anthem Origin:                         |\n   |   - [Marseilles] --> Volunteers sang Roget de    |\n   |     L\'Isle\'s hymn "La Marseillaise" marching    |\n   |     to Paris (1792)                               |\n   +------|--------------------------------------------+\n          |\n   Transatlantic Middle Passage\n          |\n          V\n   [Caribbean Sugar Colonies: San Domingo / Haiti, Martinique, Guadeloupe]',
        order: 4,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Indian Resonance & Standard Answer Frameworks',
        body: '### 1. Examiner Traps & Misconceptions\n- **Tithe vs. Taille Trap:**\n  * *Tithe:* Ecclesiastical tax collected by the Catholic Church (1/10th of agricultural produce).\n  * *Taille:* Direct tax paid to the state/King by members of the Third Estate.\n- **Active vs. Passive Citizens Trap (1791 Constitution):** Only men above 25 years who paid taxes equal to at least 3 days of an agricultural laborer\'s wage were designated "Active Citizens" with the right to vote. All women, servants, and men unable to pay were "Passive Citizens".\n- **Slavery Abolition Dates:** The Convention abolished slavery in **1794**, Napoleon re-established it in **1802**, and France\'s final, permanent abolition was achieved in **1848**.\n- **La Marseillaise Composer:** Composed by **Roget de L\'Isle** as a war song for the Army of the Rhine; sung by volunteers from Marseilles entering Paris, becoming the national anthem of France.\n\n---\n\n### 2. Global & Indian Resonance (NCERT Explicit Highlight)\n- **Tipu Sultan (Mysore):** Deeply inspired by French revolutionary ideals; planted the "Tree of Liberty" at his capital Seringapatam in 1797 and became a member of the Jacobin Club.\n- **Raja Rammohan Roy:** Enthusiastically championed the ideals of the French Revolution and the 1830 July Revolution; celebrated the triumph of constitutional principles over European despotism.\n\n---\n\n### 3. RPSC RAS Mains Answer Framework (10 Marks / 100 Words)\n**Q: Evaluate the socio-economic and political causes of the French Revolution (1789).**\n- **Structure:**\n  * *Introduction (15 words):* Erupted on July 14, 1789 due to the structural collapse of the Ancien Régime under Louis XVI.\n  * *Socio-Economic Causes (45 words):* Severe inequality—1st and 2nd Estates (2% pop, 60% land) held tax exemptions; 3rd Estate (98% pop) paid Tithes and Tailles. Famines, soaring bread prices, and state bankruptcy caused by American War debt.\n  * *Political & Ideological Causes (30 words):* Royal absolutism and despotic Versailles court; intellectual mobilization by Locke, Rousseau (General Will), and Montesquieu (Separation of Powers).\n  * *Conclusion (10 words):* Catalyzed the historic shift from divine dynastic monarchy to national citizen sovereignty.',
        order: 5,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-WLD-04-1',
        statement: 'Under the Ancien Régime in France, the clergy collected the Tithe (one-tenth of agricultural produce) and the state collected the direct tax Taille, with the Third Estate bearing the entire tax burden while the first two estates enjoyed exemptions.',
        claimType: 'TAXATION_AND_SOCIAL_ORDER',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'ABSOLUTE',
        locator: 'NCERT Class IX India and the Contemporary World - I, Chapter 1, Section 1: French Society During the Late Eighteenth Century, pp. 4-6',
        excerpt: 'The Church too extracted its share of taxes called tithes from the peasants, and finally, all members of the third estate had to pay taxes to the state. These included a direct tax, called taille, and a number of indirect taxes which were levied on articles of everyday consumption like salt or tobacco.',
      },
      {
        id: 'CLM-WLD-04-2',
        statement: 'The French revolutionary government under the National Convention abolished slavery across French overseas colonies in 1794, but Napoleon Bonaparte reintroduced it in 1802, before it was permanently abolished in 1848.',
        claimType: 'LEGAL_AND_COLONIAL_TRANSFORMATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'ABSOLUTE',
        locator: 'NCERT Class IX India and the Contemporary World - I, Chapter 1, Section 5: The Abolition of Slavery, pp. 21-22',
        excerpt: 'The Convention in 1794 legislated to free all slaves in the French overseas possessions. This, however, turned out to be a short-term measure: ten years later, Napoleon reintroduced slavery. Slavery was finally abolished in French colonies in 1848.',
      },
      {
        id: 'CLM-WLD-04-3',
        statement: 'Olympe de Gouges protested against the 1791 Constitution for excluding women by writing the Declaration of the Rights of Woman and Citizen in 1791, prior to her trial and execution by the Jacobin regime during the Reign of Terror.',
        claimType: 'GENDER_AND_POLITICAL_RIGHTS',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'ABSOLUTE',
        locator: 'NCERT Class IX India and the Contemporary World - I, Chapter 1, Section 4: Did Women have a Revolution?, pp. 18-20',
        excerpt: 'Olympe de Gouges was one of the most important of the politically active women in revolutionary France. She protested against the Constitution and the Declaration of Rights of Man and Citizen as they excluded women. So in 1791, she wrote a Declaration of the Rights of Woman and Citizen.',
      },
      {
        id: 'CLM-WLD-04-4',
        statement: 'Indian leaders Tipu Sultan and Raja Rammohan Roy responded directly to the ideals of the French Revolution, with Tipu Sultan joining the Jacobin Club and planting a Tree of Liberty at Seringapatam.',
        claimType: 'GLOBAL_RECEPTION_AND_IMPACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'ABSOLUTE',
        locator: 'NCERT Class IX India and the Contemporary World - I, Chapter 1, Section 6: The Revolution and Everyday Life, p. 24',
        excerpt: 'Tipu Sultan and Rammohan Roy are two examples of individuals who responded to the ideas coming from revolutionary France. Tipu Sultan planted the Tree of Liberty at Seringapatam and became a member of the Jacobin Club.',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — World History / French Revolution: Causes, Ideology, Global Impact & Napoleon',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_HISTORIOGRAPHICAL_ANALYSIS',
        notes: 'High emphasis on Enlightenment intellectual foundations (Locke, Rousseau, Montesquieu), comparative examination of the Reign of Terror, and transatlantic dimensions (Haiti/Slavery).',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I (History & Culture) — Unit I: World History / The French Revolution and The Napoleonic Order',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE',
        notes: 'Frequently examined in 2-mark terms (Tithe, Taille, Estates-General, Tennis Court Oath), 5-mark short notes (Robespierre\'s Reign of Terror, Civil Code 1804), and 10-mark essays on causes.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — World History & Landmark Revolutions',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Focus on landmark dates (Bastille Day 14 July 1789, Napoleon Emperor 1804, Waterloo 1815), Tithe vs Taille definitions, and Olympe de Gouges.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'General Studies — Modern World History & Democratic Institutions',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'POLITICAL_DEVELOPMENTS',
        notes: 'Emphasis on Declaration of Rights of Man, separation of powers doctrine, and early labor/property regulations.',
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Global Historical Milestones',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Historical awareness of democratic principles and civil code legal origins.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — World History',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Landmark events of modern world history.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Historical Milestones & Economic History',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'GENERAL_AWARENESS',
        notes: 'Evolution of state fiscal crises, public debt, and property law.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'General Socio-Economic Background',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Origins of modern property rights and universal civil law.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'French Revolution (1789): 1) Estates: 1st Clergy (Tithe = 10% crop tax), 2nd Nobility (Taille-exempt, feudal dues), 3rd Commoners (98% pop, paid all taxes). 2) Outbreak: Tennis Court Oath (June 20, 1789), Bastille Stormed (July 14, 1789). 3) Milestones: Rights of Man (Aug 1789), 1791 Constitution (Active vs Passive citizens), Jacobin Reign of Terror (1793-94, Robespierre, Guillotine). 4) Women: Olympe de Gouges (1791 Rights of Woman; executed 1793). 5) Slavery: Abolished 1794, reintroduced by Napoleon 1802, final abolition 1848. 6) Napoleon: Code 1804, Waterloo 1815.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'The French Revolution Blueprint (NCERT Class IX): 1) Causes: Deep fiscal crisis under Louis XVI; inequitable three-estate feudal order where privileged clergy and nobility paid zero direct taxes, while the Third Estate bore Tithes and Tailles; bread shortages; Enlightenment ideas of Locke, Rousseau, and Montesquieu. 2) Constitutional Experiments: Tennis Court Oath (1789) formed the National Assembly; Bastille fell on July 14, 1789; Declaration of Rights of Man (August 1789); 1791 Constitution divided citizens into Active (tax-paying voters) and Passive. 3) Radical Republic & Terror: Jacobins under Robespierre overthrew the monarchy (1792), executed Louis XVI (Jan 1793), and instituted the Reign of Terror with wage-price ceilings and mass guillotining. 4) Gender & Slavery: Women formed clubs like the Society of Revolutionary and Republican Women; Olympe de Gouges championed women\'s rights; slavery was abolished in 1794, restored by Napoleon in 1802, and abolished in 1848. 5) Napoleonic Order: Napoleon\'s 1804 Civil Code established legal equality and property protection, ending feudalism across Europe before his 1815 defeat at Waterloo.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'French Revolutionary Statecraft Architecture:\n1) Fiscal Collapse to Popular Sovereignty: State bankruptcy forced the Estates-General convocation; deadlock over medieval voting (one vote per estate) led the Third Estate to proclaim national sovereignty (Tennis Court Oath).\n2) Rights-Based Universalism vs Exclusions: The Declaration of the Rights of Man proclaimed universal liberties, but operationalized exclusions: women were denied political franchise, creating counter-manifestos like Olympe de Gouges\'s 1791 Declaration; Caribbean colonial slavery persisted despite declarations of universal brotherhood until the 1794 decree.\n3) Institutional Legacy: The Napoleonic Code exported administrative rationalization, metric standards, and secular civil law across Western Europe, ensuring that even after the 1815 Bourbon Restoration, the feudal Ancien Régime could never be reconstituted.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'NCERT_HIST_MCQ',
        stem: 'Under the Ancien Régime in France on the eve of the 1789 Revolution, what did the term "Taille" specifically denote?',
        options: [
          'A compulsory tax of one-tenth of agricultural produce levied by the Catholic Church',
          'A direct tax paid by members of the Third Estate to the royal treasury',
          'An indirect customs duty levied exclusively on luxury wines exported to England',
          'A feudal labor service rendered by serfs on the lord\'s agricultural estate'
        ],
        correctAnswer: 'A direct tax paid by members of the Third Estate to the royal treasury',
        explanation: 'In 18th-century France, "Taille" was the direct tax levied by the state and paid by the Third Estate. In contrast, "Tithe" was the religious tax amounting to one-tenth (10%) of agricultural produce collected by the Church from the peasantry.',
        trapExplanation: 'Option A refers to the Tithe; Option D refers to the Corvée.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'RPSC RAS Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Confusing Tithe (Church tax) with Taille (direct royal state tax).',
      },
      {
        type: 'NCERT_HIST_MCQ',
        stem: 'Consider the following statements regarding the abolition of slavery in the French colonies during the revolutionary era:\n1. The National Convention passed a law in 1794 emancipating all slaves in French overseas possessions.\n2. Napoleon Bonaparte permanently abolished slavery throughout the French Empire upon promulgating the Civil Code of 1804.\n3. Slavery in French colonies was finally and permanently abolished in the year 1848.\nWhich of the statements given above is/are strictly correct according to NCERT historical records?',
        options: [
          '1 and 2 only',
          '1 and 3 only',
          '2 and 3 only',
          '1, 2 and 3'
        ],
        correctAnswer: '1 and 3 only',
        explanation: 'Statement 1 is correct: In 1794, the radical Convention legislated to free all slaves in the French colonies. Statement 2 is incorrect: Napoleon Bonaparte did NOT abolish slavery; he reintroduced slavery in 1802 to protect merchant plantation interests in the Caribbean. Statement 3 is correct: Slavery was finally and permanently abolished in French colonies in 1848.',
        trapExplanation: 'The common misconception is that Napoleon, as an enlightened reformer, abolished slavery; in reality, he reintroduced it in 1802.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Attributing the abolition of slavery to Napoleon instead of the 1794 Convention / 1848 Republic.',
      },
    ],
  },

  {
    id: 'CON-WLD-05',
    slug: 'nineteenth-century-nationalism-unification-of-italy-and-germany',
    title: 'The Rise of Nationalism in Europe: Romanticism, 1848 Revolutions, Italian Risorgimento, German Empire & The Balkan Powder Keg',
    shortDefinition: 'Exhaustive NCERT Class X Chapter 1 synthesis: Frédéric Sorrieu\'s utopian vision of democratic republics (1848), the Napoleonic Code exporting administrative standardization, the Congress of Vienna (1815) and Metternich\'s conservative restoration, the Zollverein customs union (1834), Romanticism as cultural resistance (Herder\'s Volkgeist, Grimm Brothers, Delacroix), the 1848 Frankfurt Parliament in St. Paul\'s Church, Italian Unification (Mazzini, Cavour, Garibaldi, Victor Emmanuel II), German Unification (Bismarck\'s Blood and Iron), the strange case of Britain (Acts of Union 1707/1801), visual allegories (Marianne & Germania), and the explosive nationalist conflicts in the Balkans leading to World War I.',
    difficulty: 'ADVANCED',
    order: 5,
    topicSlug: 'european-nationalism-and-unification',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Forging Nations from Fractured Feudalities: Blood, Iron, and Romance',
        body: 'In 1848, the French artist Frédéric Sorrieu prepared a series of four prints visualizing a world made up of "democratic and social republics". The first print depicted the peoples of Europe and America marching past the Statue of Liberty, casting down the shattered remains of royal absolutism on the earth.\n\nYet in real nineteenth-century Europe, nationalism was not an effortless march toward universal brotherhood. It was forged in volcanic clashes between two opposing forces:\n1. The Conservative Reaction (1815): Chaired by Austrian Chancellor Klemens von Metternich at the Congress of Vienna, monarchies sought to roll back the French Revolution, restore absolute dynasties (the Bourbons in France), and keep Europe politically fragmented. Metternich famously dismissed Italy as merely a "geographical expression" and remarked: "When France sneezes, the rest of Europe catches cold!"\n2. The Revolutionary & National Waves (1830 & 1848): Middle-class liberals, secret societies, and romantic artists rallied language, folk culture, and national identity to challenge multinational dynastic empires (Austro-Hungarian Habsburgs, Ottoman Turks, Russian Romanovs).\n\nWithin five decades, this explosive force unified Italy through the romantic heroism of Mazzini, Cavour, and Garibaldi, and forged the German Empire through Bismarck\'s calculated doctrine of "Blood and Iron", while turning the multinational Balkan peninsula into the explosive powder keg that detonated World War I in 1914!',
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'Cultural Nationalism, Economic Unification & Revolutionary Chronology',
        body: '### 1. Visualizing the Nation: Cultural Romanticism & Allegories (NCERT Class X)\n- **Romanticism as National Sentiment:** A cultural movement that rejected the cold glorification of science and reason, emphasizing emotion, intuition, and mystical feelings.\n- **Johann Gottfried von Herder (1744–1803):** German romantic philosopher who claimed that true German culture was discovered among the common people—***das Volk***; the true spirit of the nation (***Volksgeist***) was popularized through folk songs, poetry, and folk dances.\n- **Language as National Resistance (Poland):** When the Russian Empire occupied Poland and banned the Polish language, Catholic priests used Polish for church gatherings and religious instruction; despite exile to Siberia, language became a sacred weapon of national identity.\n- **National Allegories:**\n  * **Marianne (France):** Personification of the French Republic; depicted with the red liberty cap, tricolor cockade, and virtues of Liberty and Reason; statues erected in public squares to symbolize civic unity.\n  * **Germania (Germany):** Visual allegory of the German nation; depicted wearing a crown of **oak leaves** (German oak stands for heroism), holding a sword and tricolor (black, red, gold).\n\n---\n\n### 2. Economic Precursor: The Zollverein (1834)\n- Created at the initiative of **Prussia** and joined by most German states.\n- **Core Reforms:** Abolished tariff barriers across 39 member states, reduced the number of internal currencies from over thirty down to two, and built an integrated railway network.\n- *NCERT Invariant:* Economic nationalism and market integration forged national unity decades before political unification was achieved!\n\n---\n\n### 3. The 1848 Revolutions & The Frankfurt Parliament Failure\n- In May 1848, 831 elected middle-class representatives gathered in the **Church of St. Paul in Frankfurt** to draft a constitution for a unified Germany under a constitutional monarch.\n- They offered the imperial crown to **King Friedrich Wilhelm IV of Prussia**; he arrogantly rejected it, refusing a "crown from the gutter" offered by an elected assembly.\n- Aristocrats, military commanders, and conservative landlords (**Junkers** of Prussia) repressed the assembly; troops disbanded the parliament, proving that liberal constitutionalism alone could not defeat royalist arms.',
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Master Architectures: Italian Risorgimento, German Empire & The British Model',
        body: '### 1. The Unification of Italy (The Risorgimento, 1815–1870)\nIn the early 19th century, Italy was divided into seven states; only **Piedmont-Sardinia** was ruled by an Italian princely house (House of Savoy):\n- **Giuseppe Mazzini (The Soul):** Founded secret societies **Young Italy (*Giovine Italia*, 1831)** in Marseilles and Young Europe in Berne; believed nations were natural units of mankind; led the 1849 Roman Republic.\n- **Count Camillo di Cavour (The Brain):** Prime Minister of Piedmont-Sardinia; neither a democrat nor a revolutionary; spoke French better than Italian; engineered a tactful diplomatic alliance with Napoleon III of France (**Plombières Agreement, 1858**), defeating Austria in 1859 to annex Lombardy.\n- **Giuseppe Garibaldi (The Sword):** Led his volunteer civilian army of the **Red Shirts (*Camicie Rosse*)** in the **Expedition of the Thousand (1860)**, liberating Sicily and Naples from the Spanish Bourbons and selflessly surrendering the territories to King Victor Emmanuel II.\n- **1861 & 1870:** **King Victor Emmanuel II** proclaimed King of United Italy (1861); annexed **Rome** in 1870 when French garrison troops withdrew during the Franco-Prussian War; Rome became capital (1871).\n\n---\n\n### 2. The Unification of Germany (1862–1871)\n- Chief Minister **Otto von Bismarck** unified Germany via Prussian military supremacy and the conservative aristocracy (**Junkers**):\n  > *"Not by speeches and votes are the great questions of the time decided—that was the error of 1848 and 1849—but by **blood and iron**."*\n- **Three Wars in Seven Years (All Won by Prussia):**\n  1. *Danish War (1864):* Allied with Austria to liberate Schleswig and Holstein.\n  2. *Austro-Prussian War / Seven Weeks\' War (1866):* Crushed Austria at **Battle of Sadowa (Königgrätz)**; established North German Confederation.\n  3. *Franco-Prussian War (1870–1871):* Provoked France via the edited **Ems Dispatch**; captured Napoleon III at **Battle of Sedan (1870)**.\n- **Imperial Proclamation (January 18, 1871):** King Wilhelm I crowned German Emperor (**Kaiser**) in the **Hall of Mirrors at the Palace of Versailles** (the ultimate humiliation to France; annexed Alsace-Lorraine).\n\n---\n\n### 3. The "Strange Case of Britain": State-Forging without Revolution\n- Great Britain did not become a nation-state through sudden revolution, but through a long parliamentary process dominated by English economic power:\n  * **Glorious Revolution (1688):** English Parliament seized power from the Stuart monarchy.\n  * **Act of Union 1707:** Merged England and Scotland into the "United Kingdom of Great Britain", suppressing Scottish Gaelic language and Highland culture.\n  * **Act of Union 1801:** Forcibly incorporated Ireland into the UK following the crushed Irish revolt led by **Wolfe Tone and the United Irishmen (1798)**.\n  * New "British nation" forged through British symbols: the Union Jack flag, the national anthem (*God Save Our Noble King*), and the English language.',
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'MAP_PERSPECTIVE',
        title: 'The Balkan Geopolitical Powder Keg (NCERT Landmark Section)',
        body: 'Geopolitical Topology of the 19th-Century Balkan Flashpoint:\n\n       [AUSTRO-HUNGARIAN EMPIRE] <==== (Annexed Bosnia-Herzegovina 1908)\n                    |\n                    V\n   +-------------------------------------------------------------------------+\n   | THE BALKANS REGION (The Powder Keg):                                    |\n   |   - Diverse ethnicities: Serbs, Croats, Bosnians, Slovenes, Bulgarians, |\n   |     Romanians, Macedonians, Greeks, Albanians (collectively "Slavs")    |\n   |   - Ruled for centuries by the decaying OTTOMAN EMPIRE                 |\n   |   - 1832: Greek War of Independence recognized by Treaty of             |\n   |     Constantinople                                                      |\n   |   - Rivalries: Each Balkan state intensely jealous, seeking territory  |\n   +-------------------------------------------------------------------------+\n          ^                                            ^\n          |                                            |\n   [RUSSIAN EMPIRE]                             [BRITAIN / GERMANY]\n   (Pan-Slavic protector;                       (Naval & commercial\n   sought warm-water Dardanelles)                trade containment)\n\nCore Invariant: Imperialist rivalry over trade, colonies, and naval bases among Great Powers (Russia, Germany, Britain, Austro-Hungary) superimposed onto intense internal Balkan nationalist rivalries, culminating in the spark at Sarajevo (1914) that ignited World War I.',
        order: 4,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Key Treaties & Standard Answer Frameworks',
        body: '### 1. High-Frequency Traps in European Nationalism History\n- **Treaty of Vienna (1815) vs. Treaty of Constantinople (1832):**\n  * *Vienna 1815:* Chaired by Metternich; restored European absolute monarchies and conservative order.\n  * *Constantinople 1832:* Formally recognized **Greece as an independent nation** after the Greek War of Independence (supported by English poet **Lord Byron**, who died of fever at Missolonghi in 1824).\n- **Frankfurt Parliament Venue (1848):** Held inside **St. Paul\'s Church in Frankfurt** (NOT Berlin, NOT Munich!).\n- **German Empire Proclamation Venue (1871):** Proclaimed inside the **Hall of Mirrors at Versailles, France** (NOT Berlin!).\n- **Mazzini vs. Cavour vs. Garibaldi:**\n  * *Mazzini:* Republican theorist & moral soul (Young Italy).\n  * *Cavour:* Diplomatic prime minister & pragmatist (French alliance).\n  * *Garibaldi:* Armed guerrilla hero (Red Shirts / Expedition of the Thousand).\n  * *Victor Emmanuel II:* Sovereign King under whom Italy was united.\n\n---\n\n### 2. RPSC RAS Mains Answer Framework (10 Marks / 100 Words)\n**Q: Evaluate Otto von Bismarck\'s role in the unification of Germany.**\n- **Structure:**\n  * *Introduction (15 words):* Appointed Minister-President of Prussia in 1862, Bismarck engineered German unification through his policy of "Blood and Iron".\n  * *Strategic Methods & Diplomacy (40 words):* Marginalized liberal parliamentary opposition; built Prussian military efficiency; utilized economic integration of the Zollverein; isolated adversaries diplomatically before each conflict.\n  * *Three Calculated Wars (35 words):* Defeated Denmark (1864) with Austrian aid; routed Austria at Sadowa (1866) creating the North German Confederation; manipulated the Ems Dispatch to provoke and crush France at Sedan (1870).\n  * *Conclusion (10 words):* Crowned Wilhelm I Kaiser at Versailles (Jan 1871), transforming Central Europe\'s balance of power.',
        order: 5,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-WLD-05-1',
        statement: 'In 1834, a customs union or Zollverein was formed at the initiative of Prussia and joined by most German states, which abolished tariff barriers and reduced the number of regional currencies from over thirty to two, demonstrating that economic integration preceded political unification.',
        claimType: 'ECONOMIC_UNIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'ABSOLUTE',
        locator: 'NCERT Class X India and the Contemporary World - II, Chapter 1: The Rise of Nationalism in Europe, Section 2: What did Liberal Nationalism Stand for?, pp. 9-10',
        excerpt: 'In 1834, a customs union or zollverein was formed at the initiative of Prussia and joined by most of the German states. The union abolished tariff barriers and reduced the number of currencies from over thirty to two. The creation of a network of railways further stimulated mobility.',
      },
      {
        id: 'CLM-WLD-05-2',
        statement: 'The Greek War of Independence mobilized European romantic poets and intellectuals against Ottoman imperial rule, culminating in the Treaty of Constantinople of 1832, which formally recognized Greece as an independent sovereign nation.',
        claimType: 'TREATY_AND_INDEPENDENCE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'ABSOLUTE',
        locator: 'NCERT Class X India and the Contemporary World - II, Chapter 1, Section 3: The Romantic Imagination and National Feeling, p. 13',
        excerpt: 'Nationalists in Greece got support from other Greeks living in exile and also from many West Europeans who had sympathies for ancient Greek culture. Poets and artists lauded Greece as the cradle of European civilisation... Finally, the Treaty of Constantinople of 1832 recognised Greece as an independent nation.',
      },
      {
        id: 'CLM-WLD-05-3',
        statement: 'Italian unification (Risorgimento) was achieved across fragmented regional states through Giuseppe Mazzini\'s ideological mobilization (Young Italy), Count Cavour\'s French diplomatic alliance, and Giuseppe Garibaldi\'s volunteer Red Shirts under King Victor Emmanuel II.',
        claimType: 'NATIONAL_UNIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'ABSOLUTE',
        locator: 'NCERT Class X India and the Contemporary World - II, Chapter 1, Section 4: Italy Unified, pp. 20-21',
        excerpt: 'During the 1830s, Giuseppe Mazzini had sought to put together a coherent programme for a unitary Italian Republic. He had also formed a secret society called Young Italy... A tactful diplomatic alliance with France engineered by Cavour, Sardinia-Piedmont succeeded in defeating the Austrian forces in 1859. Apart from regular troops, a large number of armed volunteers under the leadership of Giuseppe Garibaldi joined the fray.',
      },
      {
        id: 'CLM-WLD-05-4',
        statement: 'Otto von Bismarck completed German unification through Prussian military leadership and three victorious wars over seven years against Denmark (1864), Austria (1866), and France (1870–71), culminating in the proclamation of the German Empire at Versailles on January 18, 1871.',
        claimType: 'MILITARY_UNIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'ABSOLUTE',
        locator: 'NCERT Class X India and the Contemporary World - II, Chapter 1, Section 4: Germany - Can the Army be the Architect of a Nation?, pp. 19-20',
        excerpt: 'Prussia took on the leadership of the movement for national unification. Its chief minister, Otto von Bismarck, was the architect of this process carried out with the help of the Prussian army and bureaucracy. Three wars over seven years - with Austria, Denmark and France - ended in Prussian victory and completed the process of unification. In January 1871, the Prussian king, William I, was proclaimed German Emperor in a ceremony held at Versailles.',
      },
      {
        id: 'CLM-WLD-05-5',
        statement: 'In the late nineteenth century, the Balkans became the most serious source of nationalist tension in Europe as subject Slavic nationalities broke away from the decaying Ottoman Empire, triggering imperialist rivalries among Great Powers that led directly to World War I.',
        claimType: 'GEOPOLITICAL_FLASHPOINT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'ABSOLUTE',
        locator: 'NCERT Class X India and the Contemporary World - II, Chapter 1, Section 5: Nationalism and Imperialism, pp. 26-27',
        excerpt: 'The most serious source of nationalist tension in Europe after 1871 was the area called the Balkans. The Balkans was a region of geographical and ethnic variation comprising modern-day Romania, Bulgaria, Albania, Greece, Macedonia, Croatia, Bosnia-Herzegovina, Slovenia, Serbia and Montenegro whose inhabitants were broadly known as the Slavs. A large part of the Balkans was under the control of the Ottoman Empire... Each power - Russia, Germany, England, Austro-Hungary - was keen on countering the hold of other powers over the Balkans... This led to a series of wars in the region and finally the First World War.',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — World History / 19th-Century European Nationalism, Unifications of Italy and Germany & The Balkan Crisis',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_HISTORIOGRAPHICAL_ANALYSIS',
        notes: 'Perennial analytical questions on Bismarckian realpolitik, romantic cultural nationalism (Herder), comparison of Cavour vs Bismarck, and the Balkan powder keg causing WWI.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I (History & Culture) — Unit I: World History / Unification of Germany & Italy',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE',
        notes: 'Frequent 2-mark definitions (Zollverein, Young Italy, Red Shirts, Treaty of Constantinople 1832, Blood and Iron), 5-mark short notes (Frankfurt Parliament, Mazzini vs Cavour), and 10-mark full essays on Bismarck\'s foreign policy.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — World History & Landmark Events',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Direct MCQs on Zollverein year (1834), Blood and Iron author (Bismarck), Treaty recognizing Greece (Constantinople 1832), Red Shirts commander (Garibaldi), and Versailles coronation date (Jan 18, 1871).',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'General Studies — Global Political Movements & Nation-State Formation',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'POLITICAL_DEVELOPMENTS',
        notes: 'Focus on 19th-century constitutional assemblies (Frankfurt Parliament), tariff unification (Zollverein), and British parliamentary incorporation acts.',
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Global Historical Milestones',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Awareness of European nation-state formation and early customs unions.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — History & Heritage',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Landmark historical figures and national unification milestones.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Historical Milestones & Trade Integration',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'GENERAL_AWARENESS',
        notes: 'Foundations of regional trade agreements and customs unions (Zollverein).',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'General Socio-Economic Background',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Origins of integrated national markets and currency standardization.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'European Nationalism: 1) Romanticism: Herder\'s Volksgeist, Grimm Brothers, Delacroix; Greek independence recognized by Treaty of Constantinople (1832). 2) Zollverein (1834): Prussian customs union eliminated internal tariffs. 3) 1848 Frankfurt Parliament: St. Paul\'s Church, crown rejected by Friedrich Wilhelm IV. 4) Italy: Mazzini (Young Italy 1831), Cavour (French alliance), Garibaldi (1,000 Red Shirts), Victor Emmanuel II (King 1861, Rome 1870). 5) Germany: Bismarck ("Blood & Iron" 1862), 3 Wars (Denmark 1864, Austria 1866 Sadowa, France 1870 Sedan), crowned at Versailles (Jan 18, 1871). 6) Balkans: Slavic tensions against decaying Ottomans triggered WWI.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Rise of Nationalism in Europe Blueprint (NCERT Class X): 1) Cultural & Economic Foundations: Romanticism championed language and folk culture (Herder\'s Volksgeist) as spiritual anchors of national identity; Greece gained independence from the Ottomans via the 1832 Treaty of Constantinople. Prussia formed the Zollverein (1834), proving economic integration preceded political unification. 2) Failed 1848 Liberalism: The Frankfurt Parliament at St. Paul\'s Church collapsed when the Prussian King rejected the crown, showing liberal assemblies could not dismantle autocratic military rule. 3) Italian Risorgimento: Mazzini provided the moral ideal; Cavour executed diplomatic statecraft with France (1859); Garibaldi\'s Red Shirts conquered the south (1860); Victor Emmanuel II was crowned King of united Italy in 1861, annexing Rome in 1870. 4) German Empire: Bismarck marginalized liberals and orchestrated three wars in seven years (Denmark, Austria, France) to unite Germany under Prussian hegemony, crowning Wilhelm I Kaiser at Versailles in 1871. 5) The Balkan Powder Keg: Explosive ethnic nationalism among Slavs in the collapsing Ottoman Empire became entangled with Great Power imperialist rivalries (Russia, Germany, Britain, Austro-Hungary), detonating World War I in 1914.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Nineteenth-Century Nation-State Architecture:\n1) Economic Precondition to Political Sovereignty: The Zollverein demonstrated that eliminating internal trade barriers and harmonizing disparate currencies creates organic national cohesion long before military armies draw formal state borders.\n2) The Dual Model of Unification (Italy vs Germany): Italy combined democratic-republican guerrilla insurgency (Garibaldi\'s Red Shirts) with prime ministerial diplomatic realpolitik (Cavour); Germany was unified from above through autocratic bureaucratic-military force (Bismarck) and dynastic diplomacy without popular revolution.\n3) The Transition from Liberal Nationalism to Imperialist Balkan Rivalry: After 1871, nationalism shed its democratic, romantic character, degenerating into aggressive militaristic expansionism; the Balkans became the structural vortex where localized ethnic revolts collided with great-power imperial ambitions to spark systemic global conflict.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'NCERT_HIST_MCQ',
        stem: 'Which international diplomatic treaty formally recognized Greece as an independent sovereign nation following the Greek War of Independence against the Ottoman Empire?',
        options: [
          'The Treaty of Vienna of 1815',
          'The Treaty of Constantinople of 1832',
          'The Treaty of Versailles of 1871',
          'The Treaty of Frankfurt of 1848'
        ],
        correctAnswer: 'The Treaty of Constantinople of 1832',
        explanation: 'According to NCERT Class X Chapter 1, the Greek War of Independence (which mobilized poets like Lord Byron and philhellenes across Europe) ended with the Treaty of Constantinople of 1832, which formally recognized Greece as an independent nation.',
        trapExplanation: 'The Treaty of Vienna (1815) established the conservative post-Napoleonic order; the Treaty of Constantinople (1832) recognized Greek independence.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Treaty of Vienna (1815) vs Treaty of Constantinople (1832).',
      },
      {
        type: 'NCERT_HIST_MCQ',
        stem: 'Consider the following historical statements regarding the formation of the nation-state in nineteenth-century Europe:\n1. The Zollverein was a customs union formed in 1834 at the initiative of Austria, which preserved regional internal tariffs across German states.\n2. In May 1848, the members of the Frankfurt Parliament met in St. Paul\'s Church and drafted a constitution for a unified Germany headed by a constitutional monarchy.\n3. The British nation-state was established through the Acts of Union (1707 with Scotland and 1801 with Ireland), incorporating diverse regions under English parliamentary dominance.\nWhich of the statements given above are strictly correct according to NCERT records?',
        options: [
          '1 and 2 only',
          '2 and 3 only',
          '1 and 3 only',
          '1, 2 and 3'
        ],
        correctAnswer: '2 and 3 only',
        explanation: 'Statement 1 is incorrect: The Zollverein was formed in 1834 at the initiative of PRUSSIA (not Austria), and it ABOLISHED tariff barriers (it did not preserve them). Statement 2 is correct: In May 1848, 831 elected representatives gathered in the Church of St. Paul in Frankfurt to draft a German constitution. Statement 3 is correct: Great Britain was formed through parliamentary acts of union—1707 with Scotland and 1801 with Ireland.',
        trapExplanation: 'Examiner trap: Zollverein was initiated by PRUSSIA, not Austria, and abolished tariff barriers.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'RPSC RAS Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Factual substitution of Prussia with Austria in the Zollverein formation.',
      },
    ],
  },

  {
    id: 'CON-WLD-06',
    slug: 'industrial-revolution-in-britain-and-rise-of-capitalism',
    title: 'The Industrial Revolution in Britain & The Rise of Industrial Capitalism: Mechanization, Factory Discipline & Socio-Economic Transformation',
    shortDefinition: 'The transformation from an agrarian artisanal economy to machine-driven factory capitalism (c. 1760–1850): British structural preconditions, textile mechanization (Hargreaves, Arkwright, Crompton, Cartwright), James Watt steam engine, Abraham Darby coke smelting, railway network expansion (George Stephenson), labor exploitation, Luddite resistance, and early statutory factory legislation.',
    difficulty: 'INTERMEDIATE',
    order: 6,
    topicSlug: 'industrial-revolution-and-capitalism',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'From Muscle and Wood to Steam and Coal: The Birth of the Mechanical World',
        body: `For thousands of years of recorded human history, civilization was constrained by biological energy budgets: human muscles, draft animals, wind, and burning wood. Production took place in cottages under artisanal rhythms where workers owned their tools and controlled their working time.

Between 1760 and 1850 in Great Britain, this millennia-old biological regime was shattered by the **Industrial Revolution**. By harnessing the thermal energy of underground fossil coal to drive **James Watt's steam engines**, British entrepreneurs replaced hand tools with self-acting machinery.

The spinning of cotton and smelting of iron were concentrated into colossal multi-story brick factories. But this miraculous surge in productive power was accompanied by intense human misery: artisans lost their economic independence, families were herded into filthy industrial slums like Manchester, and children as young as six worked 14-hour days under relentless clock discipline. The Industrial Revolution created modern industrial capitalism and organized working-class resistance simultaneously.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The British Crucible: Preconditions, Inventions & Legislative Trajectory',
        body: `### 1. Why Britain First? (The Structural Preconditions)
* **Agrarian Revolution & Enclosure Acts:** Common lands were consolidated by parliamentary enclosures, creating a massive pool of landless, propertyless agricultural wage-laborers forced to migrate to urban centers.
* **Geographical Endowment:** Exceptional proximity of high-grade coal fields and iron ore reserves located close to navigable rivers and ports, reducing overland transportation costs.
* **Commercial Wealth & Colonial Capital:** Dominance in maritime trade (the transatlantic Triangular Trade) provided abundant merchant capital, cheap raw American slave-grown cotton, and captive overseas colonial markets.
* **Institutional Security:** Stable parliamentary constitutional monarchy post-1688, rule of law, protected patent property rights, and sophisticated joint-stock banking through the Bank of England (1694).

---

### 2. The Chain of Mechanical Innovations in Textiles & Metallurgy
| Sector | Breakthrough Invention | Inventor & Year | Mechanistic Impact |
| :--- | :--- | :--- | :--- |
| **Weaving** | **Flying Shuttle** | John Kay (1733) | Doubled weaving speed, creating a catastrophic bottleneck in yarn supply. |
| **Spinning** | **Spinning Jenny** | James Hargreaves (1764) | Allowed a single worker to spin 8 to 80 threads simultaneously by hand. |
| **Spinning** | **Water Frame** | Richard Arkwright (1769) | Heavy water-powered rollers produced strong warp thread; birthed the **first centralized factories** at Cromford. |
| **Spinning** | **Spinning Mule** | Samuel Crompton (1779) | Combined Jenny and Water Frame to produce exceptionally strong and ultra-fine muslin yarn. |
| **Weaving** | **Power Loom** | Edmund Cartwright (1785) | Fully mechanized weaving using water or steam power, breaking handloom weavers. |
| **Power** | **Separate Condenser Steam Engine** | James Watt & Matthew Boulton (1769/1781) | Converted thermal coal energy into continuous rotary mechanical motion, freeing mills from rivers. |
| **Metallurgy** | **Coke Smelting of Iron** | Abraham Darby I, II, III (1709–1750s) | Replaced scarce timber charcoal with purified coal (coke), producing cheap pig iron and wrought iron. |
| **Transport** | **The Steam Locomotive (*The Rocket*)** | George Stephenson (1829) | Integrated national freight distribution via the Liverpool & Manchester Railway (1830). |

---

### 3. Social Dislocations & Labor Resistance (Luddites to Factory Acts)
* **Luddite Movement (1811–1816):** Skilled handloom weavers and knitters under mythical general "Ned Ludd" smashed mechanical shearing frames and wide knitting frames that undercut customary wages. Suppressed by the British army and the **Frame Breaking Act (1812)**, which made machine-wrecking a capital crime punishable by hanging!
* **The Sadler Committee Report (1832):** Parliamentary investigation led by Michael Sadler exposing horrific abuse of child labor, physical deformities, and 16-hour shifts in textile mills.
* **Factory Act of 1833:** Landmark legislation prohibiting employment of children under 9 in textile mills, limiting children aged 9–13 to 8 hours daily, and establishing the first independent **Factory Inspectorate** to enforce compliance.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'The Industrial Mechanism: Energy Decoupling, Time Discipline & Urban Slums',
        body: `### 1. The Energy Decoupling Mechanism (Wrigley's Model)
* Pre-industrial economies relied on an **Organic Economy** dependent on the annual solar capture of plants (wood, draft animals). Land was the ultimate ceiling: food, fuel, building materials, and fiber all competed for identical surface acres.
* The Industrial Revolution replaced the organic economy with a **Mineral-Based Energy Economy** by tapping fossilized solar energy stored millions of years ago in coal seams, breaking the ecological ceiling on economic growth.

### 2. E.P. Thompson's "Time, Work-Discipline, and Industrial Capitalism"
* Artisanal and agricultural labor operated on **Task-Oriented Time** (working when crops required or until a job was done, with traditional leisure on "Saint Monday").
* Industrial capitalism replaced task-orientation with **Synchronized Clock-Oriented Labor**: workers sold their labor time by the exact hour and minute, disciplined by factory bells, overseers' fines, and mechanical line cadence.

### 3. Spatial Segregation & Public Health Crises
* Rapid unzoned urbanization concentrated working-class families into damp cellar dwellings and back-to-back tenements devoid of piped water, sewers, or refuse removal, triggering devastating cholera epidemics documented in Edwin Chadwick's 1842 sanitary report.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Invention Attribution & Parliamentary Statutes',
        body: `### High-Frequency Traps in Industrial Revolution History
1. **Spinning vs Weaving Inventions (The #1 Classical Trap!):**
   * *Spinning:* Hargreaves (Spinning Jenny), Arkwright (Water Frame), Crompton (Mule).
   * *Weaving:* John Kay (Flying Shuttle - 1733), Edmund Cartwright (Power Loom - 1785).
   * Examiner will often claim Cartwright invented the Spinning Mule! That was Samuel Crompton.

2. **The Origin of the Modern Factory System:**
   * Richard Arkwright's water frame at Cromford Mill in Derbyshire (1771) is recognized by historians as the archetype of the centralized industrial factory because the water-powered machinery was too heavy and expensive for home workshops.

3. **Luddites vs Chartists:**
   * **Luddites (1811–1816):** Machine smashers protesting wage degradation and unregulated machinery.
   * **Chartists (1838–1848):** Political democratic movement demanding the **People's Charter** (universal male suffrage, secret ballot, equal constituencies, annual parliaments). Do NOT confuse machine sabotage with parliamentary petitioning!

4. **Factory Act of 1833:**
   * Did NOT ban all child labor; banned children under 9 and instituted the first government inspectors.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-WLD-06-1',
        statement: 'Great Britain became the crucible of the Industrial Revolution due to convergent preconditions including agrarian enclosure labor surpluses, abundant coal and iron proximity, commercial maritime wealth, and institutional patent protection.',
        claimType: 'HISTORICAL_PRECONDITION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-42',
        excerpt: 'Industrial Revolution in Britain: Preconditions, enclosure movement, coal and iron deposits, colonial capital accumulation.',
      },
      {
        id: 'CLM-WLD-06-2',
        statement: 'A sequence of mechanical inventions—John Kay\'s Flying Shuttle (1733), James Hargreaves\' Spinning Jenny (1764), Richard Arkwright\'s Water Frame (1769), Samuel Crompton\'s Mule (1779), and Edmund Cartwright\'s Power Loom (1785)—mechanized the textile industry and created the modern centralized factory system.',
        claimType: 'TECHNOLOGICAL_INNOVATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-42',
        excerpt: 'Textile mechanization: Flying Shuttle, Spinning Jenny, Water Frame, Spinning Mule, Power Loom, James Watt steam engine.',
      },
      {
        id: 'CLM-WLD-06-3',
        statement: 'Industrial capitalism generated severe social dislocation and worker immiseration, provoking artisan resistance through the Luddite movement (1811–1816) and compelling parliamentary regulation through the Sadler Report (1832) and Factory Act of 1833.',
        claimType: 'SOCIO_ECONOMIC_IMPACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-42',
        excerpt: 'Social consequences: Child labor, factory conditions, Luddite machine wrecking, Sadler Committee Report 1832, Factory Act 1833.',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — World History / Industrial Revolution & Socio-Economic Changes',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_HISTORICAL_ANALYSIS',
        notes: 'Preconditions of Industrial Revolution in Britain and social consequences frequently tested in Mains.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — World History: Industrial Revolution and Its Impact',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE',
        notes: 'Frequent 5-mark and 10-mark questions on causes, inventions, and social consequences of Industrial Revolution.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — World History',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on key inventors: James Watt (steam engine), Hargreaves (Spinning Jenny), Arkwright, Stephenson.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Industrial Relations & Labor Legislation — Historical Evolution of Factory System',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'LABOR_HISTORY_DEPTH',
        notes: 'Sadler Committee Report 1832 and Factory Act 1833 are foundational historical roots of modern labor legislation.',
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Economic History Milestones',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Origins of commercial banking and industrial investment capital.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — Global Economic Transitions',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on technological developments and rise of modern capitalism.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness / Economic History',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'GENERAL_AWARENESS',
        notes: 'Foundations of modern industrial capitalism and energy transitions.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'General Socio-Economic Background',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Economic evolution from agrarian feudalism to industrial capitalism.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Industrial Revolution (Britain, c. 1760-1850): Preconditions = coal/iron proximity, enclosure labor surplus, colonial trade capital. Key Inventions: Spinning Jenny (1764 Hargreaves), Water Frame (1769 Arkwright - factory birth), Mule (1779 Crompton), Power Loom (1785 Cartwright), Watt Rotary Steam Engine (1769/81), Stephenson Rocket (1829). Resistance: Luddites (1811-16 machine smashers). Statutory Reform: Sadler Report (1832) -> Factory Act 1833 (first factory inspectors).',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Industrial Revolution Blueprint: 1) Structural Genesis: Emerged in Great Britain c. 1760 through coal-iron geological proximity, agricultural enclosures generating wage labor, and overseas colonial capital extraction. 2) Textile Mechanization Sequence: Kay\'s Flying Shuttle triggered yarn bottleneck -> resolved by Hargreaves\' Jenny, Arkwright\'s Water Frame (establishing centralized factories), Crompton\'s Mule, and Cartwright\'s Power Loom. 3) Steam & Transport: James Watt converted steam into rotary motion, emancipating mills from riverbanks; Stephenson\'s railways created unified national commodity markets. 4) Social Toll & Labor Defense: Clock discipline, child exploitation, Luddite machine wrecking; Sadler Committee exposed horrors, compelling the milestone Factory Act of 1833.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Industrial Capitalism Structural Architecture: 1) Energy Regime Shift: Transition from surface organic flow energy (wood, water, draft animals) to underground mineral stock energy (fossil coal), lifting Malthusian ceilings on output. 2) Labor Discipline Reorientation: Eradication of artisanal task-oriented time; enforcement of strict clock-synchronized employer wage-labor. 3) Spatial Urban Segregation: Division of towns into affluent bourgeois residential areas and unsanitary proletarian slums.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'TEXTILE_INVENTION_MCQ',
        stem: 'During the British Industrial Revolution, which of the following mechanical inventions solved the chronic spinning bottleneck by enabling a single worker to spin multiple spindles of yarn simultaneously using a hand-cranked wheel?',
        options: [
          'John Kay\'s Flying Shuttle (1733)',
          'James Hargreaves\' Spinning Jenny (1764)',
          'Edmund Cartwright\'s Power Loom (1785)',
          'Thomas Newcomen\'s Atmospheric Engine (1712)',
        ],
        correctAnswer: 'James Hargreaves\' Spinning Jenny (1764)',
        explanation: 'James Hargreaves invented the Spinning Jenny in 1764. By attaching multiple spindles (initially 8, later up to 80) to a single drive wheel, a single operative could spin multiple threads simultaneously, breaking the severe yarn scarcity caused by John Kay\'s Flying Shuttle.',
        trapExplanation: 'The Flying Shuttle accelerated weaving (not spinning); the Power Loom automated weaving; the Newcomen engine pumped water from coal mines.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Distinguishing spinning inventions (Jenny, Mule, Water Frame) from weaving inventions (Shuttle, Power Loom).',
      },
      {
        type: 'LUDDITE_MOVEMENT_MCQ',
        stem: 'In the social and economic history of nineteenth-century Britain, what was the primary objective of the \"Luddite\" movement (1811–1816)?',
        options: [
          'To demand universal adult suffrage and annual parliaments through constitutional petitions',
          'To protest against wage-undercutting, loss of livelihood, and abusive factory conditions by smashing newly introduced textile machinery',
          'To establish state-owned communist factories inspired by Karl Marx\'s writings',
          'To demand the immediate repeal of the Corn Laws to lower bread prices',
        ],
        correctAnswer: 'To protest against wage-undercutting, loss of livelihood, and abusive factory conditions by smashing newly introduced textile machinery',
        explanation: 'The Luddites were skilled British textile artisans and handloom weavers who smashed mechanized wide-frame knitting looms and shearing gig-mills between 1811 and 1816 under the mythical general Ned Ludd. They opposed the use of machinery to circumvent customary wages, degrade workmanship, and introduce unregulated child labor.',
        trapExplanation: 'Option A describes the Chartists (1838–48); Option C is anachronistic (Marx wrote decades later); Option D describes the Anti-Corn Law League.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2020,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Exact historical objective of Luddism vs Chartism vs Anti-Corn Law League.',
      },
    ],
  },

  // =========================================================================
  // TOPIC 9: The Russian Revolution of 1917 & The Soviet State
  // =========================================================================
  {
    id: 'CON-WLD-09',
    slug: 'the-russian-revolution-of-1917-and-soviet-state',
    title: 'Socialism in Europe & The Russian Revolution (1917): 1905 Dress Rehearsal, Dual Power, Bolshevik Triumph & Stalinist Collectivization',
    shortDefinition: 'Comprehensive NCERT Class IX synthesis: The age of social change (Liberals, Radicals, Conservatives), early socialists (Robert Owen, Louis Blanc, Karl Marx, Friedrich Engels), the Russian autocracy under Tsar Nicholas II, the Mir/Commune collective land tenure, Bloody Sunday (1905) and the Duma, February Revolution of 1917, Dual Power, Lenin\'s April Theses, the October Revolution, Bolshevik reforms, Russian Civil War (Reds vs Whites vs Greens), War Communism vs New Economic Policy (NEP), Stalinist industrialization and forced Collectivization (Kolkhoz & Dekulakization), and global impact (Comintern, M.N. Roy, Tagore).',
    difficulty: 'ADVANCED',
    order: 9,
    topicSlug: 'russian-revolution-and-soviet-state',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Storming of the Winter Palace: How an Agrarian Empire Built the First Socialist State',
        body: 'In 1848, Karl Marx and Friedrich Engels predicted in The Communist Manifesto that proletarian revolution would erupt in the most industrially advanced capitalist nations—such as Great Britain or Germany—where factory wage laborers constituted the overwhelming majority.\n\nYet in 1917, history defied theoretical prediction: the world\'s first successful socialist revolution erupted in Tsarist Russia—a vast, economically backward empire where over 85% of the population were peasants cultivating land through the traditional village commune (Mir), and urban factory workers comprised less than 5% of the populace!\n\nHow did this improbable transformation occur?\n1. The Rotting Autocracy: Tsar Nicholas II ruled without parliamentary accountability, refusing constitutional power-sharing while dragging millions of ill-equipped peasant-conscripts to slaughter on the Eastern Front of World War I.\n2. The Dual Power Stalemate (Dvoyevlastiye): When women workers and soldiers overthrew the Tsar on International Women\'s Day in February 1917, the newly installed bourgeois Provisional Government insisted on staying in WWI, while the Petrograd Soviet held actual military control over troops and rail lines.\n3. Lenin\'s Strategic Clarity: Returning from Swiss exile in April 1917, Vladimir Lenin formulated the April Theses, crystallizing popular demands into three words: "Peace, Land, and Bread". On November 7, 1917, the Bolshevik Red Guards seized state power, inaugurating the Soviet era.',
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'Ideological Spectrum, Communal Land (Mir) & Revolutionary Timeline',
        body: '### 1. The Post-French Revolution Ideological Spectrum in Europe (NCERT Class IX)\n\n| Ideological Group | Core Political Objective | Attitude Toward Property & Suffrage | Proposed Method of Change |\n| :--- | :--- | :--- | :--- |\n| **Liberals** | Secular nation tolerating all religions; safeguard individual rights against state power; elected parliamentary government with independent judiciary. | Opposed universal adult franchise; believed only men of property should vote; excluded women completely. | Gradual constitutional reform through parliament. |\n| **Radicals** | Government based on majority of population; supported women\'s suffrage movements (**Suffragettes**). | Opposed concentration of property in few private hands; did not oppose private property per se, but disliked great landowners and factory magnates. | Rapid democratic restructuring through mass political agitation. |\n| **Conservatives** | Initially opposed change; by 19th century accepted that change was inevitable, but insisted past must be respected. | Defended established aristocratic, church, and monarchical institutions. | Slow, orderly evolutionary change. |\n\n---\n\n### 2. Early Socialists & Marxist Theoretical Foundations\n- **Robert Owen (1771–1858):** Leading English manufacturer who sought to build a cooperative community called **New Harmony** in Indiana (USA) based on voluntary individual initiative.\n- **Louis Blanc (1813–1882):** French socialist who argued that individual enterprise could not produce cooperatives on a large scale; demanded that governments actively encourage cooperatives to replace capitalist enterprises.\n- **Karl Marx (1818–1883) & Friedrich Engels (1820–1895):** Formulated scientific socialism. Industrial society was capitalist; profit produced by workers was appropriated by private capitalists. Workers could free themselves only by overthrowing capitalism, abolishing private property, and establishing a radically communist society.\n- **Second International:** Formed in the 1870s to coordinate socialist workers\' associations across Europe; in Britain, socialists and trade unionists formed the **Labour Party (1905)**, and in France, the **Socialist Party**.\n\n---\n\n### 3. Russian Agrarian Uniqueness: The Mir (Commune)\n- Unlike European peasants, Russian peasants had a historic custom: they pooled their land together periodically, and their village commune—the ***Mir***—divided it according to the needs of individual families.\n- Because of this communal habit, Russian socialists (the Socialist Revolutionaries) argued that Russian peasants were "natural socialists", and that Russia would bypass capitalism straight into socialism!\n- *Lenin\'s Counter-Argument:* Lenin and the Social Democrats disagreed. Lenin observed that the peasantry was not a homogeneous group: some were poor laborers, others rich kulaks employing workers. The factory proletariat, disciplined by modern industry, had to lead the revolution.\n\n---\n\n### 4. Detailed Revolutionary Trajectory (1905–1924)\n1. **1905 Revolution ("The Dress Rehearsal"):**\n   - *Bloody Sunday (January 22, 1905):* Procession of peaceful workers led by **Father Gapon** carrying petitions to the Winter Palace; fired upon by police, killing over 100 workers.\n   - Widespread strikes, mutinies (Battleship Potemkin), and creation of the first **St. Petersburg Soviet**.\n   - Tsar conceded the **October Manifesto** creating an elected parliament (**Duma**), but repeatedly dissolved the 1st and 2nd Dumas to preserve autocratic veto.\n2. **The February Revolution of 1917 (Julian Calendar Feb / Gregorian March):**\n   - Began on **February 23 (International Women\'s Day)** with bread strikes by women textile workers in Petrograd.\n   - When troops refused to fire on protestors and mutinied, Tsar Nicholas II abdicated on **March 2 (March 15 Gregorian)**, ending the 300-year Romanov autocracy.\n   - Formation of **Dual Power (*Dvoyevlastiye*)**: Bourgeois Provisional Government under Prince Lvov / Kerensky vs Petrograd Soviet of Workers\' and Soldiers\' Deputies.\n3. **Lenin\'s April Theses (April 1917):**\n   - Vladimir Lenin returned from Switzerland via a German sealed train.\n   - Issued three clear demands: (a) Immediate end to World War I; (b) Land transfer to peasants; (c) Nationalization of all banks. Coined the slogan: *"All Power to the Soviets!"*\n4. **The October Revolution of 1917 (October 24–25 / November 6–7):**\n   - Coordinated by **Leon Trotsky**, head of the Military Revolutionary Committee.\n   - Bolshevik Red Guards seized telegraph offices, bridges, and railways; cruiser *Aurora* shelled the Winter Palace; ministers of Provisional Government arrested.\n   - All-Russian Congress of Soviets approved the Bolshevik seizure of power.\n5. **Post-October Decrees & Civil War (1918–1920):**\n   - Land declared social property; banks nationalized (Nov 1917); nobility titles banned; non-Russian nationalities given self-determination.\n   - Bolsheviks signed the humiliating **Treaty of Brest-Litovsk (March 1918)** with Germany to exit WWI.\n   - Civil War between the **Reds** (Bolsheviks), **Whites** (Tsarists/liberals supported by Britain, France, USA, Japan), and **Greens** (Socialist Revolutionaries). Red Army under Trotsky emerged victorious.',
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Economic Paradigms: War Communism, Lenin\'s NEP & Stalin\'s Collectivization',
        body: '### 1. War Communism (1918–1921) vs. New Economic Policy (1921–1928)\n- **War Communism:** Emergency civil war policy:\n  * Total nationalization of all industries and factories.\n  * Total ban on private trade and private ownership of grain.\n  * Forced grain requisitioning (*Prodrazvyorstka*) by armed worker squads.\n  * *Outcome:* Destruction of agricultural incentives, peasant revolts, catastrophic 1921 famine, and the **Kronstadt Naval Mutiny (March 1921)** by previously loyal sailors.\n- **Lenin\'s New Economic Policy (NEP, 1921):** Pragmatic tactical retreat:\n  * Replaced forced confiscation with a fixed agricultural tax in kind (*Prodnalog*).\n  * Permitted peasants to sell surplus grain in open markets.\n  * Allowed small-scale private enterprise, trade, and retail shops (*NEPmen*).\n  * State retained control over the "commanding heights" (heavy industry, railways, banking, foreign trade).\n\n---\n\n### 2. Stalinist Collectivization & Industrialization (1928–1939)\n- **The Grain Crisis of 1927–28:** State procurement prices were low; peasants refused to sell grain, causing severe urban shortages. Stalin blamed rich peasants—**Kulaks**—for hoarding.\n- **Collectivization Program (*Kolkhoz*, 1929):**\n  * State forced all peasants to cultivate collective farms (*Kolkhoz*).\n  * Bulk of land and implements transferred to collective ownership; profits shared according to work done.\n  * Enraged peasants resisted by slaughtering livestock; between 1929 and 1931, the number of cattle in Russia fell by one-third!\n- **Liquidation of Kulaks as a Class:** Millions of prosperous peasants were classified as Kulaks, forcibly dispossessed, deported to Siberian labour camps (Gulags), or executed.\n- **Famines & Results:** Despite collectivization, bad harvests triggered the horrific famine of 1930–1933 (Holodomor), killing over 4 million people. Only tiny private garden plots were tolerated.',
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'MAP_PERSPECTIVE',
        title: 'Spatial Coordinates & Industrial Hubs of Tsarist and Soviet Russia',
        body: 'Geographical Schematic of the Russian Revolutionary Arc:\n\n       Baltic Sea\n          |\n   +------V------------------------------------------------------------------+\n   | PETROGRAD (St. Petersburg):                                             |\n   |   - Vyborg District: Industrial workers\' quarter (strikes origin)      |\n   |   - Winter Palace (Bloody Sunday 1905, Stormed 1917)                    |\n   |   - Smolny Institute: Bolshevik Headquarters & Petrograd Soviet         |\n   |   - Cruiser Aurora: Moored on Neva River, fired signal shot             |\n   |                                                                         |\n   | [MOSCOW] (Becomes Soviet Capital in March 1918)                         |\n   |                                                                         |\n   | Grain Belt / Collectivization:                                          |\n   |   - Volga Basin & Ukraine: Rich Chernozem black soil, Kulak resistance  |\n   |                                                                         |\n   | Ural Industrial Citadel:                                                |\n   |   - [Magnitogorsk]: Steel city constructed from scratch in 3 years      |\n   +-------------------------------------------------------------------------+\n          |\n       Trans-Siberian Railway line to Vladivostok',
        order: 4,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Indian Resonance & Standard Answer Frameworks',
        body: '### 1. High-Frequency Traps in Russian Revolutionary History\n- **The Dual Revolution Trap:**\n  * *February Revolution (March 1917):* Overthrew **Tsar Nicholas II** and ended Romanov autocracy.\n  * *October Revolution (November 1917):* Overthrew the **Provisional Government** (Kerensky) and established Soviet Bolshevik power.\n  * *Trap:* Claiming Lenin overthrew the Tsar directly! Lenin was in Zurich, Switzerland when the Tsar abdicated.\n- **Liberals vs. Radicals on Voting Rights:** Liberals opposed universal suffrage and excluded women; Radicals supported universal suffrage and women\'s voting rights.\n- **Kulaks & Kolkhoz Terminology:**\n  * *Kulak:* Prosperous, well-to-do peasant owning land/hiring labor.\n  * *Kolkhoz:* Collective farm where peasants worked jointly.\n  * *Mir:* Traditional village commune that redivided land periodically before the revolution.\n\n---\n\n### 2. Global Impact & Indian Resonance (NCERT Explicit Highlight)\n- **The Comintern (Communist International):** Formed in 1919 by Bolsheviks as an international union of pro-Bolshevik socialist parties; attracted delegates across Asia and Latin America.\n- **M.N. Roy:** Indian revolutionary who played a founding role in the Mexican Communist Party and the Communist Party of India (Tashkent, 1920), and served on the executive presidium of the Comintern.\n- **Rabindranath Tagore:** Visited Soviet Russia in 1930; wrote *Letters from Russia*, marveling at mass literacy campaigns while cautioning against intellectual totalitarianism and lack of individual freedom.\n- **Jawaharlal Nehru:** Deeply impressed by Soviet Five-Year Plans during his 1927 visit, inspiring the post-1947 Indian Planning Commission model.\n\n---\n\n### 3. RPSC RAS Mains Answer Framework (10 Marks / 100 Words)\n**Q: Discuss the circumstances that led to the overthrow of Tsarist autocracy in Russia in 1917.**\n- **Structure:**\n  * *Introduction (15 words):* The 300-year Romanov autocracy collapsed during the February Revolution (March 1917) due to political, social, and military decay.\n  * *Socio-Economic Distress (40 words):* Extreme agrarian backwardness; 85% peasants burdened by land shortages; industrial workers endured 15-hour shifts and low wages; runaway wartime inflation and acute bread shortages in Petrograd.\n  * *Military Catastrophe & Autocratic Misrule (35 words):* First World War killed over 7 million Russian soldiers and created 3 million refugees; Tsar Nicholas II\'s refusal to delegate power to the Duma and public resentment against Tsarina Alexandra and Rasputin.\n  * *Conclusion (10 words):* The mutiny of Petrograd garrison regiments united soldiers and striking women, forcing the Tsar\'s unconditional abdication.',
        order: 5,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-WLD-09-1',
        statement: 'Unlike European peasants, Russian peasants historically pooled their land together periodically in their village commune, known as the Mir, which reallocated land according to the demographic needs of individual families.',
        claimType: 'AGRARIAN_TENURE_AND_SOCIAL_ORDER',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'ABSOLUTE',
        locator: 'NCERT Class IX India and the Contemporary World - I, Chapter 2, Section 2: The Russian Empire in 1914, pp. 31-33',
        excerpt: 'They pooled their land together periodically and their commune (mir) divided it according to the needs of individual families... Russian peasants were different from other European peasants in another way. They pooled their land together periodically.',
      },
      {
        id: 'CLM-WLD-09-2',
        statement: 'The February Revolution of 1917 began on International Women\'s Day (February 23 Old Style) with spontaneous bread strikes by women factory workers in Petrograd, leading directly to the mutiny of the army garrison and the abdication of Tsar Nicholas II.',
        claimType: 'REVOLUTIONARY_OVERTHROW',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'ABSOLUTE',
        locator: 'NCERT Class IX India and the Contemporary World - I, Chapter 2, Section 3: The February Revolution in Petrograd, pp. 35-37',
        excerpt: 'On Sunday, 25 February, the government suspended the Duma... On the 27th, the Police Headquarters were ransacked... The cavalry regiments refused to fire on the crowds... Tsar abdicated on 2 March. Soviet leaders and Duma leaders formed a Provisional Government to run the country.',
      },
      {
        id: 'CLM-WLD-09-3',
        statement: 'In April 1917, Vladimir Lenin presented his April Theses putting forth three core demands: bringing World War I to a close, transferring land to the peasants, and nationalizing the banking system.',
        claimType: 'POLITICAL_PROGRAMME',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'ABSOLUTE',
        locator: 'NCERT Class IX India and the Contemporary World - I, Chapter 2, Section 3: Lenin\'s April Theses, p. 37',
        excerpt: 'In April 1917, the Bolshevik leader Vladimir Lenin returned to Russia from his exile... He declared that the war be brought to a close, land be transferred to the peasants, and banks be nationalised. These three demands were Lenin\'s "April Theses".',
      },
      {
        id: 'CLM-WLD-09-4',
        statement: 'From 1929, Joseph Stalin enforced agricultural Collectivization into collective farms (Kolkhoz), resulting in the violent elimination of prosperous peasants (Kulaks), the destruction of one-third of the livestock population, and the devastating famine of 1930–1933.',
        claimType: 'ECONOMIC_COLLECTIVIZATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'ABSOLUTE',
        locator: 'NCERT Class IX India and the Contemporary World - I, Chapter 2, Section 4: Stalinism and Collectivisation, pp. 44-46',
        excerpt: 'From 1929, the Party forced all peasants to cultivate in collective farms (kolkhoz)... Enraged peasants resisted the authorities and destroyed their livestock. Between 1929 and 1931, the number of cattle fell by one-third... The bad harvests of 1930-1933 led to one of most devastating famines in Soviet history when over 4 million died.',
      },
      {
        id: 'CLM-WLD-09-5',
        statement: 'The Russian Revolution inspired Indian intellectuals and leaders, leading to M.N. Roy founding the Communist Party of India abroad in Tashkent in 1920 and Rabindranath Tagore writing Letters from Russia in 1930 after observing Soviet education.',
        claimType: 'GLOBAL_RECEPTION_AND_IMPACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'ABSOLUTE',
        locator: 'NCERT Class IX India and the Contemporary World - I, Chapter 2, Section 5: The Global Influence of the Russian Revolution and the USSR, pp. 47-48',
        excerpt: 'Among those the Russian Revolution inspired were many Indians. Several attended the Communist University. By the mid-1920s the Communist Party was formed in India... Jawaharlal Nehru and Rabindranath Tagore wrote about the Soviet experiment.',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — World History / Russian Revolution: 1905, 1917 (February & October), War Communism, NEP & Stalinist Collectivization',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_HISTORIOGRAPHICAL_ANALYSIS',
        notes: 'Perennial analytical questions on the ideological evolution of socialism, why Russia industrialized via state coercion, and Lenin vs Stalin economic models.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I (History & Culture) — Unit I: World History / Russian Revolution of 1917 and Soviet State',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE',
        notes: 'Frequent 2-mark definitions (Duma, Bloody Sunday, Kulak, Kolkhoz, April Theses), 5-mark short notes (War Communism vs NEP), and 10-mark full essays on causes and consequences.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — World History',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Direct MCQs on Bloody Sunday (1905), Father Gapon, abdication of Tsar Nicholas II (1917), Bolshevik leader (Lenin), and Brest-Litovsk (1918).',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'General Studies — Global Socialist Movements, Labor Unions & State Planning',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'POLITICAL_IDEOLOGIES',
        notes: 'In-depth focus on workers\' soviets, Second International, early state welfare/planning experiments, and trade union integration.',
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Global Historical Milestones',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Origins of planned economies, state-driven capital allocation, and command economic frameworks.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — World History',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Landmark modern global revolutions and socioeconomic transformations.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness / Economic History & Planning Models',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'GENERAL_AWARENESS',
        notes: 'Foundations of Gosplan, centralized credit systems, and five-year planning models.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'General Socio-Economic Background',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Origins of 20th-century socialist state-directed economic systems.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Russian Revolution (1917): 1) Agrarian: Peasants pooled land in Mir (commune). 2) 1905: Bloody Sunday (Father Gapon, Winter Palace) -> Tsar conceded Duma. 3) Feb 1917: Bread strikes on Women\'s Day -> Tsar Nicholas II abdicated -> Dual Power (Provisional Govt vs Petrograd Soviet). 4) April Theses: Lenin demanded Peace, Land, Bread, bank nationalization. 5) Oct 1917: Bolsheviks stormed Winter Palace (cruiser Aurora). 6) Economy: War Communism (1918-21 forced requisitions) -> NEP (1921-28 private market sales) -> Stalin\'s Collectivization (1929 Kolkhoz & Dekulakization).',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Socialism & Russian Revolution Blueprint (NCERT Class IX): 1) Ideologies: Post-1789 Europe saw Liberals (property owners vote, no women), Radicals (majority rule, women\'s suffrage), and Conservatives (gradual change). Socialists like Owen (cooperatives) and Marx/Engels (class struggle, overthrow capitalism) shaped the Second International. 2) Russian Uniqueness: 85% agrarian population pooling land in the Mir. 1905 Bloody Sunday forced Tsar Nicholas II to create the Duma, which he repeatedly neutered. 3) Twin Revolutions: February 1917 strikes overthrew the Tsar, creating Dual Power. Kerensky refused to exit WWI. Lenin returned with the April Theses; Trotsky organized Red Guards to seize power in October 1917. 4) Economic Policies: Requisitioning in the Civil War caused famine; Lenin introduced the NEP (1921) allowing small private enterprise. Stalin replaced NEP with Five-Year Plans and forced Collectivization (Kolkhoz), eradicating the Kulaks and inducing severe famines (1930–33). 5) Global Impact: Comintern inspired anti-colonial leaders including M.N. Roy and Tagore.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Soviet State Transformation Architecture:\n1) The Agrarian Commune to Proletarian Vanguard: Russian socialists initially believed the Mir would lead directly to agrarian socialism; Lenin demonstrated that internal peasant stratification (Kulaks vs landless) necessitated urban industrial proletariat leadership.\n2) Dual Power Inversion: Dual Power (Dvoyevlastiye) represented an unstable condominium between bourgeois ministers with formal legitimacy and workers\' soviets with armed muscle (Order No. 1); the October insurrection abolished bourgeois parliamentarism in favor of Soviet council rule (Sovnarkom).\n3) Command Economy Extraction Logic: Facing agricultural holdouts in 1928, Stalin used state terror to forcibly enclose land into Kolkhoz collectives, transferring agricultural surplus at state-mandated low prices to fuel rapid heavy industrialization (Magnitogorsk steel, tractors, defense).',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'NCERT_HIST_MCQ',
        stem: 'In nineteenth-century Europe, how did the political group known as the "Liberals" differ fundamentally from the "Radicals" regarding representative government and the right to vote?',
        options: [
          'Liberals supported universal adult franchise for all men and women, whereas Radicals opposed women\'s suffrage',
          'Liberals felt only men of property should have the vote and did not want women to vote, whereas Radicals supported women\'s suffragette movements and government based on the majority',
          'Liberals opposed all forms of elected parliamentary government, whereas Radicals favored a constitutional monarchy',
          'Liberals favored immediate abolition of all private property, whereas Radicals defended large aristocratic landowners'
        ],
        correctAnswer: 'Liberals felt only men of property should have the vote and did not want women to vote, whereas Radicals supported women\'s suffragette movements and government based on the majority',
        explanation: 'According to NCERT Class IX Chapter 2, Liberals were not democrats; they did not believe in universal adult franchise, arguing that only propertied men should vote, and opposed voting rights for women. In contrast, Radicals supported government based on the majority of a nation\'s population and supported women\'s suffragette movements.',
        trapExplanation: 'Modern usage associates "liberal" with universal democracy, but in 19th-century Europe, Liberals strictly opposed universal suffrage and excluded women.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2020,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Confusing 19th-century Liberals (propertied male franchise only) with Radicals (universal majority & suffragette support).',
      },
      {
        type: 'NCERT_HIST_MCQ',
        stem: 'With reference to the Russian countryside before the 1917 Revolution, what was the "Mir"?',
        options: [
          'A royal judicial tribunal appointed by the Tsar to try political dissidents',
          'The traditional village commune of peasants that periodically pooled and redistributed agricultural land',
          'A special military Cossack regiment responsible for crushing peasant uprisings',
          'A network of underground socialist printing presses across Petrograd and Moscow'
        ],
        correctAnswer: 'The traditional village commune of peasants that periodically pooled and redistributed agricultural land',
        explanation: 'In pre-revolutionary Russia, the "Mir" was the traditional village commune. Russian peasants pooled their land together periodically, and the Mir redistributed plots according to the changing size and needs of each peasant family.',
        trapExplanation: 'Option A describes a Tsarist court; Option C describes Cossacks; Mir is strictly the agricultural peasant commune.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'RPSC RAS Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Definition of Mir (village land commune) vs Duma (national parliament).',
      },
    ],
  },

  {
    id: 'CON-WLD-07',
    slug: 'interwar-totalitarianism-weimar-republic-and-the-rise-of-hitler-nazism',
    title: 'Nazism and the Rise of Hitler: Weimar Vulnerabilities, Totalitarian Ideology, Youth Indoctrination & The Holocaust',
    shortDefinition: 'Exhaustive NCERT Class IX Chapter 3 synthesis: The birth and constitutional flaws of the Weimar Republic (Article 48, proportional representation, "November Criminals"), Treaty of Versailles Article 231, the 1923 hyperinflation crisis and Dawes Plan, the 1929 Great Depression, the rise of Adolf Hitler and the NSDAP, the Reichstag Fire Decree and Enabling Act (March 23, 1933), totalitarian consolidation (Gestapo, SS, SD), Hjalmar Schacht\'s state rearmament and autarky, Nazi racial hierarchy and Social Darwinism distortion, the cult of motherhood (Honor Crosses) and youth indoctrination (Jungvolk, Hitler Youth), the deceptive language of genocide, and ordinary civilian complicity.',
    difficulty: 'ADVANCED',
    order: 7,
    topicSlug: 'interwar-totalitarianism-and-nazism',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Seduction of Dictatorship: How Democracy Committed Suicide in Germany',
        body: 'Following Imperial Germany\'s defeat in World War I in November 1918, the National Assembly met at Weimar and established a democratic constitution featuring universal adult suffrage, proportional representation, and a bill of fundamental rights.\n\nYet barely fourteen years later, the German electorate handed power to Adolf Hitler, ushering in a genocidal totalitarian state that murdered six million Jews and initiated a global war that killed over 70 million people.\n\nHow did a cultured, technologically advanced European nation embrace total fascism?\n1. The Humiliation of Versailles (1919): Germany was forced to surrender its overseas colonies, 13% of its European territory, 75% of its iron, and 26% of its coal, while signing the humiliating Article 231 "War Guilt Clause". The Weimar democracy was forever cursed as the government of the "November Criminals".\n2. Economic Despair: The hyperinflation of 1923 (when a loaf of bread cost billions of marks) followed by the 1929 Great Depression, which left 6 million Germans unemployed and desperate.\n3. The Totalitarian Legal Coup: Once appointed Chancellor on January 30, 1933, Hitler exploited the Reichstag Fire of February 27, 1933 to pass the Reichstag Fire Decree, followed by the Enabling Act on March 23, 1933, legally transforming Germany into an absolute dictatorship without firing a shot in parliament.',
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'Weimar Vulnerabilities, Totalitarian Machinery & Chronological Milestones',
        body: '### 1. Inherent Constitutional Defects of the Weimar Republic (NCERT Class IX Focus)\n- **Proportional Representation:** Made achieving a single-party parliamentary majority virtually impossible, leading to chronic rule by unstable, fragile coalitions (20 different cabinets ruled Weimar in its short existence, averaging 239 days each).\n- **Article 48:** Gave the President emergency powers to suspend civil rights, rule by decree, and dismiss regional state governments—a provision repeatedly abused rather than resolving crises, destroying democratic confidence.\n- **The "November Criminals" Myth:** Conservatives and militarists blamed the Socialists, Catholics, and Democrats who formed the Weimar Republic for "stabbing Germany in the back" (*Dolchstoßlegende*) by signing the November 1918 armistice.\n\n---\n\n### 2. Economic Shocks & Hitler\'s Ascendance\n- **1923 Hyperinflation:** Germany defaulted on reparations; French occupied the industrial Ruhr valley; Germany printed paper currency recklessly. The value of the German Mark collapsed: in January 1923, 1 US Dollar = 49,000 Marks; by December 1923, 1 US Dollar = 4,200,000,000,000 Marks! Americans introduced the **Dawes Plan** to bail out Germany.\n- **1929 Wall Street Crash & Great Depression:** US banks recalled short-term loans; German industrial output dropped 40%; 6 million workers became unemployed, queuing up with placards reading: *"Willing to do any work"*.\n- **Electoral Surge of NSDAP:** In 1928, the Nazi Party polled barely **2.6%** in the Reichstag elections; by July 1932, it became the largest party with **37%** of the vote!\n\n---\n\n### 3. Step-by-Step Dismantling of Democracy (1933–1934)\n1. **January 30, 1933:** President Paul von Hindenburg appointed Adolf Hitler as Chancellor.\n2. **February 27, 1933 (Reichstag Fire):** The parliament building mysteriously caught fire; blamed on communists.\n3. **February 28, 1933 (Reichstag Fire Decree):** Suspended indefinitely freedom of speech, press, assembly, and habeas corpus.\n4. **March 23, 1933 (The Enabling Act - *Ermächtigungsgesetz*):**\n   - Transferred all legislative power from parliament to Hitler\'s cabinet.\n   - Established a legal dictatorship: Hitler could enact laws without parliamentary or presidential consent, even if they violated the constitution!\n5. **Gleichschaltung (Total Nazification):** All political parties and trade unions banned (except NSDAP); creation of specialized security apparatus: Regular Police, **SA** (Stormtroopers), **SS** (*Schutzstaffel* under Heinrich Himmler), **SD** (Security Service), and the **Gestapo** (Secret State Police).',
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Nazi Racial Biology, Gender Indoctrination & The Language of Deception',
        body: '### 1. The Nazi Worldview & Distorted Social Darwinism\n- Hitler\'s ideology recognized no equality between human beings, only a rigid racial hierarchy:\n  * At the apex: Blue-eyed, blond **Nordic German Aryans** (the finest race destined to master the earth).\n  * At the lowest rung: **Jews** (branded as anti-race, biological parasites, and destroyers of culture).\n- Borrowed and distorted ideas of **Charles Darwin** (natural selection) and **Herbert Spencer** (survival of the fittest) to justify imperial expansion: only the fittest race had the right to survive and conquer.\n- **Lebensraum ("Living Space"):** Geopolitical doctrine that Germany needed to conquer vast territories in the East (Poland, Soviet Union) to settle Aryan families and secure raw materials.\n\n---\n\n### 2. Youth Indoctrination & The Cult of Motherhood\n- **Youth Organizations:**\n  * Age 10: Boys entered **Jungvolk** for physical hardening and ideological orientation.\n  * Age 14: All boys compulsorily joined the **Hitler Youth** (*Hitlerjugend*), sworn to worship Hitler, hate Jews, glorify war, and despise democracy.\n  * Age 18: Entered the Labor Service (*Reichsarbeitsdienst*) and armed forces.\n  * Girls were taught that their sole national duty was to be good mothers and rear pure-blooded Aryan children.\n- **The Cult of Motherhood & Honor Crosses (*Ehrenkreuz*):**\n  * Women who bore racially pure children were awarded the **Honor Cross of the German Mother**:\n    - **Bronze Cross:** for 4 children\n    - **Silver Cross:** for 6 children\n    - **Gold Cross:** for 8 or more children!\n  * Women who associated with Jews, Poles, or Russians were paraded through streets with shaved heads and blackened faces, placards reading: *"I have sullied the honor of the nation"*, and sentenced to prison.\n\n---\n\n### 3. The Art of Propaganda & The Deceptive Language of Genocide (NCERT Highlight)\n- The Nazi regime never used words like "kill" or "murder" in official communications:\n  * Mass killings were termed: **"Special Treatment" (*Sonderbehandlung*)**, **"Final Solution" (*Endlösung*)** (for Jews), or **"Euthanasia"** (for disabled persons).\n  * Deportation to gas chambers was labeled: **"Evacuation" (*Evakuierung*)**.\n  * Gas chambers were disguised as: **"Disinfection Areas"** with fake showerheads!\n- **Civilian Complicity:** Pastor **Martin Niemöller** famously captured the silence of ordinary citizens: *"First they came for the Communists, and I did not speak out—because I was not a Communist... Then they came for me—and there was no one left to speak for me."*',
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'MAP_PERSPECTIVE',
        title: 'Geopolitical Topology of the Third Reich & Extermination Infrastructure',
        body: 'Spatial & Geopolitical Coordinates of Nazi Expansion & The Holocaust:\n\n       North Sea / Baltic Sea\n          |\n   +------V------------------------------------------------------------------+\n   | WEIMAR GERMANY / THIRD REICH:                                           |\n   |   - [Berlin]: Reichstag Fire (1933), Chancellery, Wannsee Villa (1942)  |\n   |   - [Nuremberg]: Nazi Rallies & Nuremberg Laws (1935)                   |\n   |   - [Munich]: Beer Hall Putsch (1923), Dachau Concentration Camp (1933) |\n   |   - [Ruhr Valley]: Industrial heartland (French occupation 1923)        |\n   |                                                                         |\n   | LEBENSRAUM EXPANSION EASTWARD:                                          |\n   |   - [Rhineland] (Remilitarized 1936)                                    |\n   |   - [Austria] (Anschluss, March 1938)                                   |\n   |   - [Sudetenland & Czechoslovakia] (Munich Pact 1938)                   |\n   |                                                                         |\n   | OCCUPIED POLAND (Industrial Death Camps):                               |\n   |   - [Auschwitz-Birkenau] (Gas chambers / Zyklon B)                      |\n   |   - [Treblinka], [Sobibor], [Belzec], [Chelmno], [Majdanek]             |\n   +-------------------------------------------------------------------------+\n          |\n       Invasion of Soviet Union (Operation Barbarossa, June 1941)',
        order: 4,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Key Statutes & Standard Answer Frameworks',
        body: '### 1. High-Frequency Traps in Nazism & Interwar History\n- **Enabling Act vs. Reichstag Fire Decree:**\n  * *Reichstag Fire Decree (Feb 28, 1933):* Suspended fundamental civil rights.\n  * *Enabling Act (March 23, 1933):* Gave Hitler the power to pass laws without parliament, establishing the legal dictatorship.\n- **Weimar Constitution Flaw:** Article **48** gave emergency decree powers to the President; proportional representation produced chronic coalition instability.\n- **Nuremberg Laws (1935) Contents:** Stripped Jews of citizenship and prohibited intermarriage/sexual intercourse between Jews and Germans; did NOT create death camps (death camps were built 1941–42).\n- **Economic Architect:** **Hjalmar Schacht** (economist behind currency stabilization and rearmament financing, who later warned Hitler against rapid military spending and was dismissed).\n\n---\n\n### 2. RPSC RAS Mains Answer Framework (10 Marks / 100 Words)\n**Q: Analyze the circumstances and factors that enabled the rise of Adolf Hitler in Germany.**\n- **Structure:**\n  * *Introduction (15 words):* Adolf Hitler\'s rise transformed the democratic Weimar Republic into a genocidal totalitarian Third Reich between 1919 and 1933.\n  * *National Humiliation & Political Failure (35 words):* Resentment against the humiliating Treaty of Versailles (War Guilt Article 231, territorial and economic losses); public contempt for the "November Criminals"; chronic political instability caused by proportional representation and abuse of Article 48.\n  * *Economic Catastrophe & Social Crisis (35 words):* The ruinous 1923 hyperinflation wiped out middle-class savings; the 1929 Great Depression caused 6 million unemployed; Nazi Party exploited despair via mass rallies, charismatic demagoguery, and anti-Semitic scapegoating.\n  * *Conclusion (15 words):* The legal maneuvering following the Reichstag Fire culminated in the Enabling Act (March 1933), institutionalizing absolute dictatorship.',
        order: 5,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-WLD-07-1',
        statement: 'The Weimar Constitution contained inherent structural weaknesses, notably proportional representation making single-party majorities impossible and Article 48 granting the President sweeping emergency powers to rule by decree and suspend civil rights.',
        claimType: 'CONSTITUTIONAL_INSTABILITY',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'ABSOLUTE',
        locator: 'NCERT Class IX India and the Contemporary World - I, Chapter 3, Section 1: The Weimar Republic, pp. 53-54',
        excerpt: 'The Weimar constitution had some inherent defects, which made it unstable and vulnerable to dictatorship. One was proportional representation... Another defect was Article 48, which gave the President the powers to impose emergency, suspend civil rights and rule by decree.',
      },
      {
        id: 'CLM-WLD-07-2',
        statement: 'On March 23, 1933, the German Reichstag passed the Enabling Act (Ermächtigungsgesetz), which established a legal dictatorship by empowering Hitler to enact laws without the consent of parliament or the president.',
        claimType: 'LEGAL_DICTATORSHIP',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'ABSOLUTE',
        locator: 'NCERT Class IX India and the Contemporary World - I, Chapter 3, Section 2: Destruction of Democracy, p. 55',
        excerpt: 'On 3 March 1933, the famous Enabling Act was passed. This Act established dictatorship in Germany. It gave Hitler all powers to sideline Parliament and rule by decree. All political parties and trade unions were banned except for the Nazi Party and its affiliates.',
      },
      {
        id: 'CLM-WLD-07-3',
        statement: 'Nazi ideology subordinated women to domestic reproduction, awarding the Honor Cross of the German Mother in Bronze (4 children), Silver (6 children), and Gold (8 or more children) to encourage the birth of racially pure Aryan children.',
        claimType: 'GENDER_AND_RACIAL_POLICY',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'ABSOLUTE',
        locator: 'NCERT Class IX India and the Contemporary World - I, Chapter 3, Section 4: The Nazi Cult of Motherhood, pp. 64-65',
        excerpt: 'To encourage women to produce many children, Honour Crosses were awarded. A bronze cross was given for four children, silver for six and gold for eight or more.',
      },
      {
        id: 'CLM-WLD-07-4',
        statement: 'The Nazi regime systematically employed deceptive euphemisms in official state documentation to conceal mass murder, using terms like "Special Treatment" (Sonderbehandlung), "Final Solution" (Endlösung), "Evacuation", and "Disinfection Areas" to refer to extermination gas chambers.',
        claimType: 'PROPAGANDA_AND_GENOCIDAL_DECEPTION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'ABSOLUTE',
        locator: 'NCERT Class IX India and the Contemporary World - I, Chapter 3, Section 5: The Art of Propaganda, p. 66',
        excerpt: 'Mass killings were termed special treatment, final solution (for the Jews), euthanasia (for the disabled), selection and disinfections. "Evacuation" meant deporting people to gas chambers. Do you know what the gas chambers were called? They were labelled "disinfection-areas", and looked like bathrooms with fake showerheads.',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — World History / Interwar Totalitarianism: Weimar Republic, Rise of Nazism, Fascist Ideology & The Holocaust',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_HISTORIOGRAPHICAL_ANALYSIS',
        notes: 'Examines systemic failures of interwar democracy, totalitarian propaganda methods, distorted social Darwinism, and bureaucratic machinery of the Holocaust.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I (History & Culture) — Unit I: World History / Rise of Nazism and Fascism',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE',
        notes: 'Guaranteed 2-mark definitions (Article 48, Dawes Plan, Gestapo, Enabling Act), 5-mark notes (Nuremberg Laws), and 10-mark full essays on the rise of Hitler and Versailles causes.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — World History',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on Enabling Act date (March 1933), Nuremberg Laws year (1935), Article 48 of Weimar, and Hitler\'s autobiography (Mein Kampf).',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'General Studies — 20th Century Totalitarian Movements & International Crises',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'POLITICAL_DEVELOPMENTS',
        notes: 'Focus on destruction of independent trade unions, economic mobilization under Hjalmar Schacht, and Weimar constitutional failure.',
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Global Historical Milestones',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Historical awareness of 20th-century political crises and hyperinflation impacts.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — World History',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'General static awareness of world history.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Historical Milestones & Economic Crisis',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'GENERAL_AWARENESS',
        notes: 'Macroeconomic consequences of the 1923 German hyperinflation and 1929 Great Depression.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'General Socio-Economic Background',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Extreme monetary phenomena: hyperinflation dynamics and international loan architectures (Dawes Plan).',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Nazism Essentials: 1) Weimar Flaws: Proportional representation & Article 48 (Presidential emergency decree). 2) Shocks: 1919 Versailles (Article 231 War Guilt, "November Criminals"), 1923 Hyperinflation (Dawes Plan), 1929 Great Depression (6M unemployed). 3) Seizure: Hitler Chancellor (Jan 30, 1933) -> Reichstag Fire (Feb 1933) -> Enabling Act (March 23, 1933 -> Dictatorship). 4) Indoctrination: Hitler Youth, Motherhood Honor Cross (Bronze 4, Silver 6, Gold 8). 5) Euphemisms: Special Treatment = Murder, Evacuation = Gas Chambers.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Nazism and the Rise of Hitler Blueprint (NCERT Class IX): 1) Weimar Fragility: Born out of WWI defeat, the Weimar Republic was crippled by the stigma of Versailles (Article 231), chronic coalition instability via proportional representation, and abuse of presidential emergency powers under Article 48. 2) Economic Catalysts: The 1923 hyperinflation wiped out middle-class savings; the 1929 Great Depression drove Nazi electoral vote share from 2.6% in 1928 to 37% in 1932. 3) Destruction of Democracy: Hitler was appointed Chancellor on January 30, 1933; the Reichstag fire provided the pretext to suspend civil rights; the Enabling Act (March 23, 1933) granted Hitler dictatorial lawmaking powers. All other parties were banned; Gestapo, SS, and SD maintained terror. 4) Ideology & Society: Social Darwinism was distorted to declare Nordic Aryans supreme and Jews subhuman; Lebensraum justified eastern conquest; youth were indoctrinated via Jungvolk and Hitler Youth; women were awarded Honor Crosses for bearing pure Aryan children. 5) The Holocaust: Mass extermination was obscured using bureaucratic euphemisms ("Special Treatment", "Final Solution", "Evacuation"), culminating in 6 million Jewish deaths in camps like Auschwitz.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Totalitarian Fascist Statecraft Architecture:\n1) Constitutional Subversion from Within: Rather than staging an armed coup against a powerful army, Hitler leveraged constitutional emergency provisions (Article 48) and parliamentary majorities to pass the Enabling Act, dismantling democratic institutions through lawful legislative procedures.\n2) Totalitarian Gleichschaltung (Coordination): The regime abolished federal state autonomy, dissolved independent trade unions, coordinated all professional bodies under NSDAP control, and placed the judiciary under political oversight.\n3) Ideological Totalization & Euphemistic Bureaucracy: Mass conformity was achieved through Goebbels\'s propaganda monopoly, institutional youth indoctrination from age 10, and bureaucratic distancing, wherein industrial genocide was sanitized through clinical administrative euphemisms.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'NCERT_HIST_MCQ',
        stem: 'Which specific constitutional provision in the Weimar Republic gave the German President emergency powers to suspend fundamental civil rights, rule by decree, and dismiss regional state governments?',
        options: [
          'Article 14',
          'Article 231',
          'Article 48',
          'Article 356'
        ],
        correctAnswer: 'Article 48',
        explanation: 'According to NCERT Class IX Chapter 3, Article 48 of the Weimar Constitution gave the President emergency powers to impose emergency, suspend civil rights, and rule by decree. This article was repeatedly invoked during the political and economic crises of the interwar period, undermining German democratic stability.',
        trapExplanation: 'Article 231 is the War Guilt Clause of the Treaty of Versailles; Article 48 is the emergency clause of the Weimar Constitution.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'RPSC RAS Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Confusing Article 231 of Versailles (War Guilt) with Article 48 of the Weimar Constitution (Presidential emergency powers).',
      },
      {
        type: 'NCERT_HIST_MCQ',
        stem: 'Consider the following statements regarding social and domestic policies in Nazi Germany as described in NCERT records:\n1. The Nazi regime awarded the "Honor Cross of the German Mother" in Gold to women who produced four pure-blooded Aryan children.\n2. Mass killings of Jews and political dissidents were referred to in official Nazi state documentation as "Special Treatment" (*Sonderbehandlung*) and "Final Solution" (*Endlösung*).\n3. All German boys at the age of 14 were compulsorily inducted into the Hitler Youth (*Hitlerjugend*).\nWhich of the statements given above are strictly correct?',
        options: [
          '1 and 2 only',
          '2 and 3 only',
          '1 and 3 only',
          '1, 2 and 3'
        ],
        correctAnswer: '2 and 3 only',
        explanation: 'Statement 1 is incorrect: The Gold Cross was awarded for EIGHT or more children (Bronze was for 4 children, Silver for 6 children, Gold for 8+). Statement 2 is correct: Official Nazi documents used deceptive euphemisms like "Special Treatment" and "Final Solution" for mass murder. Statement 3 is correct: At age 14, all boys had to join the Nazi youth organization, the Hitler Youth.',
        trapExplanation: 'Examiner trap on Honor Cross tiers: Bronze = 4, Silver = 6, Gold = 8 (not 4!).',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Factual inversion of the Honor Cross children criteria (Bronze: 4, Silver: 6, Gold: 8).',
      },
    ],
  },

  {
    id: 'CON-WLD-08',
    slug: 'paths-to-modernisation-japan-meiji-restoration-vs-chinese-revolution',
    title: 'Paths to East Asian Modernization: The Meiji Restoration in Japan (1868) vs The Chinese Revolutionary Century (1839–1949)',
    shortDefinition: 'Contrasting Asian responses to Western imperialism: Japan\'s rapid state-directed transformation under the Meiji Restoration (1868, "Fukoku Kyohei" - Enrich the Country, Strengthen the Military, Zaibatsu monopolies, Meiji Constitution 1889), contrasted with China\'s century of humiliation and revolution (Opium Wars, Taiping Rebellion, Boxer Protocol, 1911 Sun Yat-sen revolution, May Fourth Movement 1919, Chiang Kai-shek\'s KMT, Mao Zedong\'s Long March 1934, and the founding of the People\'s Republic of China in 1949).',
    difficulty: 'ADVANCED',
    order: 8,
    topicSlug: 'east-asian-modernisation',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Two Giants Confront the West: Adapt or Burn',
        body: `In the mid-19th century, Western imperialist gunboats arrived on the shores of East Asia, demanding that ancient, isolated civilizations open their ports to Western trade:
* **China (The Middle Kingdom):** Regarded itself as the center of the world. When Britain forced illegal opium onto its ports, China resisted and was crushed in the **Opium Wars (1839–1860)**. Clinging stubbornly to imperial Confucian traditions, China fell into a "Century of Humiliation"—carved up like a melon by foreign powers, enduring massive civil wars and foreign invasions until **Mao Zedong** forged a peasant communist revolution in **1949**.
* **Japan (The Chrysanthemum Empire):** When American Commodore Matthew Perry\'s "Black Ships" sailed into Edo Bay in 1853, Japan made a radical, calculated decision. In **1868**, young samurai overthrew the 250-year-old feudal Tokugawa Shogunate, restored the Emperor, and launched the **Meiji Restoration**.

Instead of resisting Western technology, Japan deliberately **copied Western industrial, military, and legal systems**, transforming itself within 40 years from an isolated samurai society into the first industrialized Asian superpower to defeat a Western empire (Russo-Japanese War, 1905)!`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'Meiji Modernization vs The Chinese Revolutionary Century Matrix',
        body: `### 1. Japan\'s Meiji Transformation (1868–1912)

| Dimension | Core Strategic Reforms & Modernizing Architecture | Long-Term Historiographical Significance |
| :--- | :--- | :--- |
| **Political Restoration (1868)** | Overthrew Tokugawa Shogunate; restored 15-year-old **Emperor Meiji (Mutsuhito)**; shifted capital from Kyoto to Edo (renamed **Tokyo**); issued **Five Charter Oath (1868)** promising public discussion and knowledge from the world. | Ended 700 years of military feudal rule (*Bakufu*); centralized sovereignty under the imperial throne. |
| **National Slogan & Mindset** | **"Fukoku Kyohei" ("Enrich the Country, Strengthen the Military")** and **"Bunmei Kaika" ("Civilization and Enlightenment")**. | Total cultural pivot: samurai cut off topknots, adopted Western suits, metric system, and Gregorian calendar. |
| **Industrialization & Zaibatsu** | State built model textile mills, modern ironworks (Yawata), and railways; sold state factories at low prices to favored merchant families, forming giant private business conglomerates: **Zaibatsu** (**Mitsui, Mitsubishi, Sumitomo, Yasuda**). | Created world\'s fastest industrial revolution without accumulating foreign debt! |
| **Military & Education** | Abolished samurai privileges; introduced universal male military conscription (1873) with modern firearms; established compulsory universal primary education. | Defeated Qing China (1894–95) and Tsarist Russia (1904–05), stunning the colonial world. |
| **Constitution (1889)** | Drafted by **Ito Hirobumi** modeled on authoritarian Prussian constitution; Emperor retained supreme command of army/navy (*Diet* parliament was subordinate). | Set the fatal institutional seeds for 1930s militarism and fascism. |

---

### 2. China\'s Century of Humiliation & Revolutionary Rebirth (1839–1949)
* **The Opium Wars (1839–42 & 1856–60):** Britain defeated Qing China, forcing the **Treaty of Nanking (1842)**: ceded Hong Kong, opened treaty ports, extraterritoriality for Europeans.
* **Internal Upheavals:** **Taiping Rebellion (1850–64)** (Christian millennialist revolt; 20 million dead); **Boxer Rebellion (1899–1901)** (anti-foreign mystic rebellion crushed by 8-nation alliance).
* **The 1911 Revolution (Xinhai Revolution):** Led by **Dr. Sun Yat-sen**; overthrew the 2,000-year-old Qing imperial dynasty; founded the **Republic of China**.
  * Sun\'s Three Principles of the People (*San Min Chu-i*): **Nationalism, Democracy, and People\'s Livelihood**.
* **The May Fourth Movement (1919):** Massive student protests in Beijing against the Versailles Treaty (giving German concessions in Shandong to Japan); catalyzed modern Chinese nationalism, science, and Marxism.
* **The Chinese Communist Party (CCP) & Mao Zedong:**
  * CCP founded in Shanghai (1921); civil war with Chiang Kai-shek\'s Nationalist Party (**Kuomintang / KMT**).
  * **The Long March (1934–35):** Mao Zedong led 80,000 communists on a legendary 6,000-mile tactical retreat to Yan\'an; established Mao\'s undisputed supremacy and revolutionized the strategy: **basing revolution on poor peasants rather than urban factory workers**!
  * Defeated Japanese invasion (1937–45) and routed KMT (who fled to Taiwan).
  * On **October 1, 1949**, Mao proclaimed the **People\'s Republic of China (PRC)** from Tiananmen Gate, declaring: *"The Chinese people have stood up!"*`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Mao\'s Peasant Base Innovation & Japan\'s Zaibatsu Monopoly Engine',
        body: `### 1. Mao\'s Historiographical Innovation: The Peasant Vanguard
* Classical Marxism (and orthodox Soviet doctrine) insisted that only urban factory workers (the proletariat) could lead a communist revolution; peasants were dismissed as conservative.
* Mao inverted this doctrine: In agrarian China, the millions of oppressed tenant peasants were the revolutionary army. Mao surrounded the cities from the countryside through guerrilla warfare and rural land reform!

### 2. The Zaibatsu Economic Monopoly Mechanics
* Family-owned financial-industrial holding companies (Zaibatsu) controlled banking, mining, shipping, and manufacturing in a closed loop.
* Because the Zaibatsu controlled their own private banks, they funded long-term industrial projects without relying on foreign debt, enabling Japan to maintain absolute political sovereignty.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Meiji Restoration Year & Fukoku Kyohei Meaning',
        body: `### High-Frequency Traps in East Asian Modernization History

1. **Meiji Restoration Year:**
   * Occurred in **1868** (NOT 1853, which was Perry's arrival, or 1889, which was the constitution).

2. **Fukoku Kyohei Meaning:**
   * Japanese slogan meaning **"Enrich the Country, Strengthen the Military"**.

3. **Sun Yat-sen\'s Three Principles:**
   * **Nationalism, Democracy, and People\'s Livelihood (*San Min Chu-i*)**.
   * *Trap:* Confusing with Mao's Three Worlds Theory.

4. **Long March Dates:**
   * **1934 to 1935**, covering 6,000 miles to Yan\'an under Mao Zedong.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-WLD-08-1',
        statement: 'The Meiji Restoration of 1868 overthrew the Tokugawa Shogunate in Japan, launching rapid state-led industrialization and military modernization under the slogan "Fukoku Kyohei" (Enrich the Country, Strengthen the Military) and Zaibatsu conglomerates.',
        claimType: 'STATE_MODERNIZATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-28',
        excerpt: 'Paths to Modernisation: Japan Meiji Restoration 1868, Fukoku Kyohei, Zaibatsu monopolies.',
      },
      {
        id: 'CLM-WLD-08-2',
        statement: 'Dr. Sun Yat-sen led the 1911 Xinhai Revolution overthrowing the Qing dynasty, establishing the Republic of China based on the Three Principles of the People (Nationalism, Democracy, People\'s Livelihood).',
        claimType: 'REVOLUTIONARY_OVERTHROW',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-28',
        excerpt: 'China 1911 Revolution, Sun Yat-sen Three Principles of the People, end of Qing dynasty.',
      },
      {
        id: 'CLM-WLD-08-3',
        statement: 'Mao Zedong unified the Chinese Communist Party during the Long March (1934–35) by basing the socialist revolution on the peasant masses, culminating in the proclamation of the People\'s Republic of China on October 1, 1949.',
        claimType: 'PEASANT_REVOLUTION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-28',
        excerpt: 'The Long March 1934-35, Mao Zedong peasant revolution, proclamation of PRC October 1 1949.',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — World History / Paths to Modernisation in Japan and China',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_HISTORIOGRAPHICAL_ANALYSIS',
        notes: 'Comparison of Meiji Japan and Qing/Communist China is a classic UPSC Mains question.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — World History / Modernisation in East Asia',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE',
        notes: 'Frequent 10-mark question comparing Japanese and Chinese responses to Western imperialism.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — World History',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on Meiji Restoration year (1868) and People\'s Republic of China founding year (1949).',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'General Studies — Asian Historical Transitions',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'DEVELOPMENT_MODELS',
        notes: 'Tested on Zaibatsu and Sun Yat-sen\'s Three Principles.',
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Global Milestones',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'General static awareness.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — World History',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'General static awareness.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Historical Milestones',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'GENERAL_AWARENESS',
        notes: 'Phase 1 static questions on East Asian economic modernization.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'General Socio-Economic Background',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Industrial conglomerate business models (Zaibatsu).',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'East Asia: Japan Meiji Restoration (1868) = Overthrew Tokugawa Shogunate, capital to Tokyo, slogan "Fukoku Kyohei" (Enrich Country, Strengthen Military), Zaibatsu conglomerates (Mitsubishi, Mitsui), defeated Russia (1905). China: Opium Wars (1839-42, Treaty of Nanking), 1911 Revolution (Sun Yat-sen, 3 Principles: Nationalism, Democracy, Livelihood), May Fourth (1919), Long March (1934-35, Mao peasant vanguard), PRC founded Oct 1, 1949.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Paths to East Asian Modernization Blueprint: 1) Japan (Meiji Restoration 1868): Overthrew feudal shogunate; rapidly industrialized under the slogan "Fukoku Kyohei"; created Zaibatsu business empires; adopted modern military and education, defeating Russia in 1905. 2) China (Century of Revolution): Suffered imperialist exploitation following the Opium Wars; Sun Yat-sen overthrew the Qing dynasty in 1911; Mao Zedong reorganized the Communist Party by basing revolution on the peasantry during the Long March (1934–35), establishing the People\'s Republic of China in 1949.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Divergent Civilizational Adaptation Architecture: 1) Defensive Modernization: Japan adopting Western technological forms to preserve sovereignty without foreign borrowing. 2) Peasant Radicalism: China replacing Confucian imperial bureaucracy with Marxist-Leninist peasant mobilization. 3) Geopolitical Rebalancing: East Asia transitioning from semi-colonized periphery to global industrial centers.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'EAST_ASIA_MCQ',
        stem: 'In the history of Japanese modernization, which celebrated national slogan was officially championed during the Meiji Restoration of 1868 to guide state-led industrial and military transformation?',
        options: [
          '"Fukoku Kyohei" ("Enrich the Country, Strengthen the Military")',
          '"San Min Chu-i" ("Three Principles of the People")',
          '"Dvoyevlastiye" ("Dual Power to the State")',
          '"Mare Nostrum" ("Control of the Inland Sea")'
        ],
        correctAnswer: '"Fukoku Kyohei" ("Enrich the Country, Strengthen the Military")',
        explanation: '"Fukoku Kyohei" was the official national slogan of the Meiji Restoration period in Japan, encapsulating the state\'s twin goals of rapid capitalist economic industrialization and building a formidable Western-style standing military.',
        trapExplanation: 'Option B is Sun Yat-sen\'s Chinese slogan; Option C is Russian for Dual Power; Option D is Roman.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Identifying the Meiji modernization slogan (Fukoku Kyohei).',
      },
      {
        type: 'EAST_ASIA_MCQ',
        stem: 'What were the "Three Principles of the People" (*San Min Chu-i*) formulated by Dr. Sun Yat-sen that formed the ideological foundation of the 1911 Chinese Revolution?',
        options: [
          'Liberty, Equality, Fraternity',
          'Nationalism, Democracy, and People\'s Livelihood (Social Welfare)',
          'Peace, Land, and Bread',
          'Satyagraha, Ahimsa, and Sarvodaya'
        ],
        correctAnswer: 'Nationalism, Democracy, and People\'s Livelihood (Social Welfare)',
        explanation: 'Dr. Sun Yat-sen formulated the Three Principles of the People (San Min Chu-i): Minzu (Nationalism - freeing China from imperialist domination and overthrowing the Manchus), Minquan (Democracy - constitutional republic), and Minsheng (People\'s Livelihood - socialism and agrarian welfare).',
        trapExplanation: 'Option A is French; Option C is Lenin\'s Russian slogan; Option D is Gandhian.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'RPSC RAS Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Sun Yat-sen\'s Three Principles of the People definition.',
      },
    ],
  },
];

export async function seedWorldHistoryMasterCanonicalKnowledge() {
  console.log('Seeding World History & Modern Revolutions Master Knowledge (9 Concepts across 9 Topics)...');

  // 1. Ensure Domain & Subject exist
  const domain = await db.domain.upsert({
    where: { slug: 'history-and-culture' },
    update: {
      name: 'History & Culture of India',
      description: 'Comprehensive historical, archaeological, artistic, and cultural heritage of the Indian subcontinent.',
    },
    create: {
      slug: 'history-and-culture',
      name: 'History & Culture of India',
      description: 'Comprehensive historical, archaeological, artistic, and cultural heritage of the Indian subcontinent.',
      order: 3,
    },
  });

  const subject = await db.subject.upsert({
    where: { slug: 'world-history' },
    update: {
      domainId: domain.id,
    },
    create: {
      name: 'World History & Modern Revolutions',
      slug: 'world-history',
      domainId: domain.id,
      scopeStatement: 'Comprehensive coverage of classical antiquity (Roman Empire), nomadic empires (Genghis Khan), European feudalism and Renaissance, the French Revolution and Napoleon, 19th-century nationalism (Italy and Germany), the Industrial and Russian Revolutions, interwar totalitarianism (Nazism), and East Asian modernization (Meiji Japan and China).',
      description: 'Canonical master knowledge base of World History covering classical antiquity, global revolutions, modern state-building, and socio-economic transitions.',
      order: 7,
      status: 'ACTIVE',
    },
  });

  // 2. Ensure Topics exist
  const topicDefs = [
    {
      slug: 'classical-antiquity-and-rome',
      title: 'Classical Antiquity: The Roman Imperial Architecture',
      description: 'The Principate (Augustus), Senate, Pax Romana, Mediterranean slave economy, and Constantine\'s Christian transformation.',
      order: 1,
    },
    {
      slug: 'nomadic-empires-and-mongols',
      title: 'Nomadic Empires: Genghis Khan, The Yasa & The Yam',
      description: 'Mongol military decimal organization, composite horse-archery, the Yam postal telemetry, the Yasa code, and the Pax Mongolica.',
      order: 2,
    },
    {
      slug: 'feudal-europe-and-renaissance',
      title: 'Feudal Europe, The Three Orders & The Renaissance',
      description: 'The Three Orders (Clergy, Nobility, Serfdom), Black Death (1348), Petrarch\'s Humanism, Machiavelli, and the Gutenberg press.',
      order: 3,
    },
    {
      slug: 'french-revolution-and-napoleon',
      title: 'The French Revolution (1789) & The Napoleonic Order',
      description: 'Three Estates, Tennis Court Oath, Bastille, Rights of Man, Robespierre\'s Terror, Napoleonic Civil Code 1804, and Waterloo 1815.',
      order: 4,
    },
    {
      slug: 'european-nationalism-and-unification',
      title: '19th-Century European Nationalism: Italy & Germany',
      description: 'Italian Risorgimento (Mazzini, Cavour, Garibaldi) and German Unification under Bismarck\'s "Blood and Iron" policy (1871).',
      order: 5,
    },
    {
      slug: 'industrial-revolution-and-capitalism',
      title: 'The Industrial Revolution & Industrial Capitalism',
      description: 'Preconditions in Britain, textile mechanization, James Watt steam engine, factory discipline, Luddite resistance, and the 1833 Factory Act.',
      order: 6,
    },
    {
      slug: 'russian-revolution-and-soviet-state',
      title: 'The Russian Revolution (1917) & The Soviet State',
      description: '1905 dress rehearsal, February Tsar abdication, Dual Power, Lenin\'s April Theses, October Bolshevik Revolution, War Communism, NEP, and Stalinist industrialization.',
      order: 7,
    },
    {
      slug: 'interwar-totalitarianism-and-nazism',
      title: 'Interwar Totalitarianism, The Weimar Collapse & Nazism',
      description: 'Versailles Treaty Article 231, Weimar Republic, Adolf Hitler, Enabling Act 1933, Nuremberg Laws 1935, and the Holocaust.',
      order: 8,
    },
    {
      slug: 'east-asian-modernisation',
      title: 'Paths to Modernization: Japan (Meiji) vs China (1839–1949)',
      description: 'Japan\'s Meiji Restoration 1868 (Fukoku Kyohei, Zaibatsu) vs China\'s Opium Wars, 1911 Sun Yat-sen Revolution, and Mao Zedong (1949).',
      order: 9,
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
        order: t.order,
        status: 'ACTIVE',
      },
      create: {
        slug: t.slug,
        title: t.title,
        description: t.description,
        order: t.order,
        subjectId: subject.id,
        status: 'ACTIVE',
      },
    });
  }

  // Prune any legacy/obsolete topics for this subject that have no concepts attached
  const validSlugs = topicDefs.map((t) => t.slug);
  await db.topic.deleteMany({
    where: {
      subjectId: subject.id,
      slug: { notIn: validSlugs },
      concepts: { none: {} },
    },
  });

  // 3. Ensure Source exists
  const sourceWorld = await db.source.upsert({
    where: { id: 'SRC-WORLD-HIST-2026' },
    update: {},
    create: {
      id: 'SRC-WORLD-HIST-2026',
      title: 'History & Culture Master Corpus — World History & Modern Revolutions (2026)',
      sourceType: 'COMPREHENSIVE_HISTORICAL_SYNTHESIS',
      authorityTier: 'PEER_REVIEWED_MATHEMATICAL_REFERENCE',
      description: 'Canonical world history synthesis covering antiquity, nomadic empires, European revolutions, industrialization, totalitarianism, and East Asian modernization.',
    },
  });

  // 4. Seed Concepts
  const examSlugMap: Record<string, string> = {
    SBI_PO: 'sbi-po',
    IBPS_PO: 'ibps-po',
    RBI_GRADE_B: 'rbi-grade-b',
    SSC_CGL: 'ssc-cgl',
    RPSC_RAS: 'rpsc-ras',
    UPSC_CSE: 'upsc-cse',
    UPSC_APFC: 'upsc-apfc',
    IIBF_DBF: 'iibf-dbf',
  };

  for (const c of WORLD_HISTORY_CONCEPTS) {
    const topic = await db.topic.findFirst({
      where: {
        subjectId: subject.id,
        slug: c.topicSlug,
      },
    });
    if (!topic) {
      console.warn(`Topic not found for slug: ${c.topicSlug}, skipping concept: ${c.id}`);
      continue;
    }

    const concept = await db.concept.upsert({
      where: { id: c.id },
      update: {
        title: c.title,
        slug: c.slug,
        shortDefinition: c.shortDefinition,
        difficulty: c.difficulty as any,
        topicId: topic.id,
        order: c.order,
        status: 'ACTIVE',
      },
      create: {
        id: c.id,
        title: c.title,
        slug: c.slug,
        shortDefinition: c.shortDefinition,
        difficulty: c.difficulty as any,
        topicId: topic.id,
        order: c.order,
        status: 'ACTIVE',
      },
    });

    // Content Blocks
    await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
    for (const block of c.contentBlocks) {
      await db.contentBlock.create({
        data: {
          conceptId: concept.id,
          type: block.type as any,
          title: block.title,
          body: block.body,
          order: block.order,
          visibility: block.visibility as any,
        },
      });
    }

    // Claims & Evidence
    for (const clm of c.claims) {
      const claim = await db.claim.upsert({
        where: { id: clm.id },
        update: {
          statement: clm.statement,
          claimType: clm.claimType as any,
          epistemicLevel: clm.epistemicLevel as any,
          confidence: clm.confidence as any,
          status: 'VERIFIED',
          conceptId: concept.id,
        },
        create: {
          id: clm.id,
          statement: clm.statement,
          claimType: clm.claimType as any,
          epistemicLevel: clm.epistemicLevel as any,
          confidence: clm.confidence as any,
          status: 'VERIFIED',
          conceptId: concept.id,
        },
      });

      await db.evidence.deleteMany({ where: { claimId: claim.id } });
      await db.evidence.create({
        data: {
          claimId: claim.id,
          sourceId: sourceWorld.id,
          locator: clm.locator,
          excerpt: clm.excerpt,
          evidenceType: 'EXCERPT',
          authority: 'PRIMARY_REGULATORY_TEXT',
          evidentiarySupport: 'DIRECT_SUPPORT',
          extractionConfidence: 'CERTAIN',
        },
      });
    }

    // Exam Concept Mappings
    for (const em of c.examMappings) {
      const slug = examSlugMap[em.examCode] || em.examCode.toLowerCase().replace(/_/g, '-');
      const exam = await db.exam.upsert({
        where: { slug },
        update: {},
        create: {
          slug,
          name: em.examCode.replace(/_/g, ' '),
          conductingBody: em.examCode.split('_')[0],
          description: `Official competitive examination for ${em.examCode}`,
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

    // Revision Units
    await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
    for (const ru of c.revisionUnits) {
      await db.revisionUnit.create({
        data: {
          conceptId: concept.id,
          type: ru.type as any,
          content: ru.content,
          priority: ru.priority as any,
          order: ru.order,
        },
      });
    }

    // Questions
    await db.question.deleteMany({ where: { conceptId: concept.id } });
    for (const q of c.questions) {
      await db.question.create({
        data: {
          conceptId: concept.id,
          type: q.type as any,
          stem: q.stem,
          options: JSON.stringify(q.options),
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          trapExplanation: q.trapExplanation,
          difficulty: q.difficulty as any,
          isPYQ: q.isPYQ ?? false,
          pyqYear: q.pyqYear,
          pyqPaper: q.pyqPaper,
          pyqStage: q.pyqStage,
          examinerTrapPattern: q.examinerTrapPattern,
        },
      });
    }
  }

  console.log(`Successfully seeded ${WORLD_HISTORY_CONCEPTS.length} World History canonical concepts.`);
}
