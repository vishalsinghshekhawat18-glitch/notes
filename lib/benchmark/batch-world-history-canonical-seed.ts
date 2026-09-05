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
    title: 'The French Revolution (1789): The Three Estates, Declaration of the Rights of Man & The Napoleonic Code',
    shortDefinition: 'The political crucible of modern democracy: Financial bankruptcy of the Ancien Régime under Louis XVI, the Three Estates (Abbé Sieyès), the Tennis Court Oath, the Storming of the Bastille (July 14, 1789), the Declaration of the Rights of Man and of the Citizen, the Jacobins and Robespierre\'s Reign of Terror (1793–94), and the rise of Napoleon Bonaparte (Coup of 18 Brumaire 1799, Napoleonic Civil Code of 1804, Battle of Waterloo 1815).',
    difficulty: 'ADVANCED',
    order: 4,
    topicSlug: 'french-revolution-and-napoleon',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Liberty, Equality, Fraternity: Dismantling the Divine Right of Kings',
        body: `In the spring of 1789, France was the most populous, cultured, and powerful kingdom in Western Europe. Yet beneath the gilded mirrors of the Palace of Versailles lay a rotten, bankrupt social order: the ***Ancien Régime***.

French society was divided into three unequal castes:
* The **First Estate (Clergy)** and **Second Estate (Nobility)** constituted barely $2\\%$ of the population, owned $40\\%$ of all land, and paid **ZERO direct taxes**.
* The **Third Estate**—comprising $98\\%$ of the people (peasants, urban workers, and educated merchants/bourgeoisie)—bore the entire crushing burden of state taxation, while facing starvation due to catastrophic wheat crop failures.

When King **Louis XVI** convened the **Estates-General** in May 1789 to impose new taxes, the Third Estate revolted. They swore the **Tennis Court Oath**, declaring themselves the sovereign **National Assembly**. On **July 14, 1789**, the Parisian masses stormed the medieval fortress-prison of the **Bastille**, destroying the physical symbol of royal despotism!

Out of this volcanic explosion emerged the modern world\'s defining political creed: **"Liberty, Equality, Fraternity" (*Liberté, Égalité, Fraternité*)**!`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'Chronological Phases of the Revolution & The Napoleonic Legacy',
        body: `### 1. The 4 Distinct Chronological Phases of the French Revolution

| Phase & Timeline | Dominant Faction | Decisive Events & Milestones | Core Historical Legacy |
| :--- | :--- | :--- | :--- |
| **Phase 1: Constitutional Monarchy (1789–1792)** | Moderate Bourgeoisie (National Assembly / Girondins). | • **Tennis Court Oath (June 20, 1789)**.<br>• **Storming of the Bastille (July 14, 1789)**.<br>• **Declaration of the Rights of Man and of the Citizen (August 26, 1789)**: Proclaimed universal natural rights: liberty, property, security, and resistance to oppression.<br>• Civil Constitution of the Clergy (1790); King attempted flight to Varennes (1791). | Abolished feudalism, tithes, and noble exemptions; established constitutional monarchy. |
| **Phase 2: Radical Republic & Reign of Terror (1792–1794)** | Radical **Jacobins** led by **Maximilien Robespierre** and Louis de Saint-Just. | • Monarchy abolished; French Republic declared (Sept 1792).<br>• Execution of **Louis XVI (Jan 1793)** and Marie Antoinette by Guillotine.<br>• **Committee of Public Safety** formed.<br>• **Reign of Terror (1793–94):** Over 40,000 "enemies of revolution" executed by Guillotine; Law of Maximum (price ceilings). | Defended France against invading European monarchical coalitions; destroyed internal counter-revolution; ended with Robespierre's own execution (**Thermidorian Reaction, July 1794**). |
| **Phase 3: The Directory (1795–1799)** | Conservative Executive of 5 Directors. | Widespread corruption, financial instability, inflation; reliance on the military to crush royalist and jacobin revolts. | Created power vacuum exploited by young artillery general **Napoleon Bonaparte**. |
| **Phase 4: The Napoleonic Era (1799–1815)** | **Napoleon Bonaparte** (First Consul 1799; Emperor of the French 1804). | • **Coup of 18 Brumaire (Nov 9, 1799):** Napoleon seized power.<br>• **Civil Code of 1804 (Napoleonic Code)**.<br>• Subjugated continental Europe (Battles of Austerlitz 1805, Jena 1806).<br>• Catastrophic invasion of Russia (1812); defeated at **Battle of Leipzig (1813)** and final defeat at **Battle of Waterloo (June 18, 1815)**. | Exported the principles of the French Revolution (equality before law, abolition of feudalism) across Europe. |

---

### 2. The Napoleonic Civil Code of 1804 (*Code Civil des Français*)
Even after Napoleon was exiled to Saint Helena, he remarked: *"My real glory is not having won 40 battles; Waterloo will wipe out the memory of my victories. But what will live forever is my Civil Code."*
* **Key Provisions:**
  1. **Equality before the Law:** Abolished all birth privileges of the nobility and clergy.
  2. **Freedom of Religion & Secular State:** Confirmed the secular character of state courts.
  3. **Right to Property:** Guaranteed absolute, inviolable private property rights.
  4. **Universal Standardized Law:** Replaced over 300 conflicting regional feudal legal systems across France and conquered Europe with a single uniform code.
  5. *Patriarchal Limitation:* Reduced the legal status of women, placing wives under total legal subordination to their husbands.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'The Continental System & The Anatomy of Napoleon\'s Downfall',
        body: `### The Continental System (Berlin Decree, 1806)
* Unable to defeat the British Royal Navy at sea (Battle of Trafalgar, 1805), Napoleon launched an economic embargo: **The Continental Blockade**.
* Prohibited all European nations from trading with Great Britain, attempting to bankrupt British commercial manufacturing.
* **Why it Backfired:** Britain possessed maritime supremacy and found alternative markets in the Americas. Continental Europe suffered acute shortages of coffee, sugar, and industrial goods, triggering widespread smuggling and driving Tsar Alexander I of Russia to break the blockade, provoking Napoleon's fatal 1812 invasion of Russia!`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Bastille Day Date & Napoleonic Code Date',
        body: `### High-Frequency Traps in French Revolution History

1. **Bastille Day Landmark:**
   * Stormed on **July 14, 1789** (celebrated annually as France\'s National Day).

2. **Napoleonic Code Enactment Year:**
   * Enacted in **1804** (the exact year Napoleon crowned himself Emperor).

3. **Battle of Waterloo Date & Defeater:**
   * Fought on **June 18, 1815**; Napoleon defeated by the **Duke of Wellington (Britain)** and **Gebhard von Blücher (Prussia)**.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-WLD-04-1',
        statement: 'The French Revolution erupted in 1789 with the Storming of the Bastille on July 14, followed by the National Assembly adopting the Declaration of the Rights of Man and of the Citizen on August 26, 1789.',
        claimType: 'REVOLUTIONARY_EVENT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-40',
        excerpt: 'The French Revolution (1789): Storming of the Bastille July 14 1789, Declaration of Rights of Man.',
      },
      {
        id: 'CLM-WLD-04-2',
        statement: 'The radical phase of the French Revolution (1793–1794) was dominated by Robespierre\'s Committee of Public Safety executing thousands during the Reign of Terror until the Thermidorian reaction.',
        claimType: 'POLITICAL_TERROR',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-40',
        excerpt: 'Reign of Terror: Robespierre, Jacobins, Committee of Public Safety 1793-94.',
      },
      {
        id: 'CLM-WLD-04-3',
        statement: 'Napoleon Bonaparte seized power in the Coup of 18 Brumaire (1799) and promulgated the Civil Code of 1804 (Napoleonic Code), standardizing equality before the law and property rights before his defeat at Waterloo in 1815.',
        claimType: 'LEGAL_AND_MILITARY_TRANSFORMATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-45',
        excerpt: 'The Rise of Nationalism in Europe: Napoleonic Code 1804, Battle of Waterloo 1815.',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — World History / French Revolution & Napoleonic Era',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_HISTORIOGRAPHICAL_ANALYSIS',
        notes: 'Causes, phases of the French Revolution, and Napoleonic Code are among UPSC\'s most repeated World History themes.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — World History / French Revolution & Napoleon',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE',
        notes: 'Guaranteed 10-mark question on the causes of the French Revolution or evaluation of Napoleon.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — World History',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on Bastille Day (14 July 1789), Napoleonic Code year (1804), and Waterloo year (1815).',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'General Studies — Modern World History',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'POLITICAL_DEVELOPMENTS',
        notes: 'Tested on Rights of Man declaration and Estates-General.',
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Global Milestones',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on landmark democratic milestones.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — History & Heritage',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on key European revolutions.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Historical Milestones',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'GENERAL_AWARENESS',
        notes: 'Phase 1 static questions on world revolutions.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'General Socio-Economic Background',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Origins of modern constitutional rights and property law.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'French Revolution (1789): 3 Estates (1st Clergy, 2nd Nobility - no tax; 3rd Commoners - paid all taxes). Tennis Court Oath (June 20, 1789). Storming of Bastille (July 14, 1789). Declaration of Rights of Man (Aug 26, 1789). Reign of Terror (1793-94, Robespierre, Jacobins, Guillotine). Napoleon: Coup of 18 Brumaire (1799), Napoleonic Code (1804, equality before law, property rights), Waterloo defeat (June 18, 1815).',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'The French Revolution Blueprint: 1) Causes: Fiscal bankruptcy under Louis XVI; unfair privileges where the 1st and 2nd Estates paid no tax while the 3rd Estate bore all levies. 2) Constitutional Phase: Tennis Court Oath; Storming of Bastille (July 14, 1789); Declaration of the Rights of Man and Citizen (August 1789). 3) Radical Phase: Monarchy abolished; King executed; Robespierre\'s Jacobin Reign of Terror (1793–94). 4) Napoleonic Order: Napoleon seized power (1799); issued the Civil Code of 1804 establishing equality before law and inviolable property; defeated at Waterloo in 1815.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Modern Democratic Sovereignty Architecture: 1) Sovereign Relocation: Shifting legitimate authority from the divine body of the monarch to the abstract "Nation" and "Citizens". 2) Legal Universalism: Napoleonic Code dismantling centuries of feudal exemptions in favor of meritocratic civil law. 3) Dialectic of Imperial Liberation: French revolutionary armies exporting liberation across Europe while provoking anti-French nationalist reactions (Germany, Spain).',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'FRENCH_REV_MCQ',
        stem: 'On which historic date did the revolutionary citizens of Paris storm the medieval fortress and prison known as the "Bastille", marking the violent beginning of the French Revolution?',
        options: ['May 5, 1789', 'June 20, 1789', 'July 14, 1789', 'August 26, 1789'],
        correctAnswer: 'July 14, 1789',
        explanation: 'The Storming of the Bastille took place on July 14, 1789, when an armed crowd seized the fortress-prison looking for gunpowder, symbolizing the collapse of royal absolutism. July 14 is celebrated as France\'s National Day (Bastille Day).',
        trapExplanation: 'May 5 is the meeting of Estates-General; June 20 is the Tennis Court Oath; August 26 is the Declaration of Rights of Man.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'SSC CGL Tier 1',
        pyqStage: 'Tier 1',
        examinerTrapPattern: 'Exact landmark date of the Storming of the Bastille (14 July 1789).',
      },
      {
        type: 'NAPOLEON_MCQ',
        stem: 'Which of the following was a fundamental principle codified into law across Europe by the "Napoleonic Civil Code of 1804"?',
        options: [
          'Restoration of the feudal rights and tax exemptions of the hereditary nobility',
          'Establishment of legal equality of all citizens before the law and protection of the right to property',
          'Grant of equal legal and inheritance rights to married women independent of their husbands',
          'Mandatory state enforcement of the Catholic faith as the sole religion of the Empire'
        ],
        correctAnswer: 'Establishment of legal equality of all citizens before the law and protection of the right to property',
        explanation: 'The Napoleonic Code of 1804 abolished hereditary feudal privileges, established absolute equality before the law for all male citizens, and secured the inviolability of private property rights. (However, it severely restricted women\'s legal rights, placing them under patriarchal authority).',
        trapExplanation: 'Option C is a common misconception; the Napoleonic Code actually subordinated married women to their husbands.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2020,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Core provisions and patriarchal limitations of the 1804 Napoleonic Code.',
      },
    ],
  },

  // =========================================================================
  // TOPIC 5: 19th Century European Nationalism & State Unification
  // =========================================================================
  {
    id: 'CON-WLD-05',
    slug: 'nineteenth-century-nationalism-unification-of-italy-and-germany',
    title: '19th-Century European Nationalism: The Italian Risorgimento (Cavour, Garibaldi, Mazzini) & German Unification (Bismarck\'s Blood and Iron)',
    shortDefinition: 'The rise of the nation-state in 19th-century Europe: Reaction to the Congress of Vienna (1815), the Revolutions of 1848, the Italian Unification (Risorgimento: Giuseppe Mazzini\'s Young Italy, Count Cavour\'s diplomacy, Garibaldi\'s Red Shirts, King Victor Emmanuel II, 1861/1870), and German Unification (Otto von Bismarck\'s "Blood and Iron" policy, Three Wars of Unification 1864–1871, proclamation of the German Empire at Versailles 1871).',
    difficulty: 'ADVANCED',
    order: 5,
    topicSlug: 'european-nationalism-and-unification',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Forging Nations from Fractured Feudalities: Blood, Iron, and Romance',
        body: `Following the defeat of Napoleon at Waterloo in 1815, the conservative crowned heads of Europe met at the **Congress of Vienna (1815)** chaired by Austrian Chancellor **Klemens von Metternich**. Their goal was to roll back the clock: restore absolute monarchies, suppress liberalism, and keep Central and Southern Europe fractured:
* The Italian peninsula was dismissed by Metternich as merely a *"geographical expression"*, carved into eight separate autocracies ruled by Austrian Habsburgs, the Pope, and Spanish Bourbons.
* The German-speaking lands were fragmented into 39 sovereign principalities dominated by the conservative Austrian Empire.

Yet within fifty years, two powerful nation-states erupted onto the European stage through two contrasting geniuses:
1. **Italy (The Romantic Risorgimento):** Unified through the spiritual soul of **Mazzini**, the Machiavellian diplomatic brain of **Cavour**, and the swashbuckling sword of **Garibaldi**.
2. **Germany (The Realpolitik Machine):** Unified not by speeches and majority resolutions, but through Prussian Chancellor **Otto von Bismarck\'s** ruthless doctrine of **"Blood and Iron" (*Blut und Eisen*)**!`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'Italian Risorgimento & German Unification Master Matrix',
        body: `### 1. The Unification of Italy (The Risorgimento, 1815–1870)

| Master Architect | Role / Persona | Core Contribution & Modus Operandi | Historic Milestones |
| :--- | :--- | :--- | :--- |
| **Giuseppe Mazzini (1805–1872)** | **"The Heart / Soul of Italy"** | Founded secret societies: **Young Italy (*Giovine Italia*, 1831)** in Marseilles and Young Europe in Berne; inspired youth with democratic republican idealism. | Led the short-lived Roman Republic (1849); insisted that Italy must be unified by the moral will of its people. |
| **Count Camillo di Cavour (1810–1861)** | **"The Brain / Mind of Italy"** | Prime Minister of **Piedmont-Sardinia**; pragmatic diplomat who realized Italy could not expel Austria without foreign great-power help. | Formed secret alliance with Napoleon III of France (**Plombières Agreement, 1858**); defeated Austria in 1859, annexing Lombardy. |
| **Giuseppe Garibaldi (1807–1882)** | **"The Sword of Italy"** | Charismatic military guerrilla leader; led his 1,000 volunteer civilian army: **The Red Shirts (*Camicie Rosse*)**. | **Expedition of the Thousand (1860):** Landed in Sicily, swept through southern Italy, overthrowing the Bourbon kingdom of the Two Sicilies; selflessly surrendered southern Italy to Victor Emmanuel II! |
| **King Victor Emmanuel II** | Monarch of Piedmont-Sardinia. | The constitutional sovereign anchor of Italian unification. | Proclaimed **King of United Italy (March 17, 1861)** in Turin; annexed Venetia (1866) and **Rome (1870)** after French troops withdrew during Franco-Prussian War; Rome became capital (1871). |

---

### 2. The Unification of Germany (1862–1871)
* **Otto von Bismarck:** Appointed Minister-President of **Prussia** in 1862 by King Wilhelm I.
* **The "Blood and Iron" Philosophy (Speech, Sept 30, 1862):**
  > *"The great questions of the day will not be settled by speeches and majority decisions—that was the great mistake of 1848 and 1849—but by **blood and iron**."*
* **The Three Calculated Wars of Unification:**
  1. **Danish War (1864):** Prussia and Austria teamed up to defeat Denmark, seizing Schleswig (Prussia) and Holstein (Austria).
  2. **Austro-Prussian War / Seven Weeks\' War (1866):** Bismarck isolated Austria diplomatically; Prussian modernized railway-and-breech-loading army routed Austria at **Battle of Sadowa (Königgrätz)**; expelled Austria from German affairs and created the **North German Confederation**.
  3. **Franco-Prussian War (1870–1871):** Bismarck manipulated the **Ems Dispatch** telegram to provoke French Emperor Napoleon III into declaring war. Prussia routed France at the **Battle of Sedan (Sept 1870)**, capturing Napoleon III.
* **Proclamation of the German Empire (January 18, 1871):**
  * In the ultimate humiliation to France, King Wilhelm I was proclaimed **German Emperor (*Kaiser*)** in the **Hall of Mirrors at the Palace of Versailles**!
  * Annexed the rich industrial provinces of **Alsace and Lorraine**, planting the geopolitical seeds of World War I.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'The Zollverein Economic Engine & The Ems Dispatch Catalyst',
        body: `### 1. The Zollverein (Customs Union, 1834)
* Created under Prussian leadership decades before political unification:
* Abolished internal tariff barriers among 39 German states, standardizing weights, currencies, and connecting the states via a unified railway network.
* Proved that economic unification preceded and laid the indispensable foundation for political unification!

### 2. The Ems Dispatch Manipulation (July 1870)
* Bismarck edited a diplomatic telegram between King Wilhelm I and the French ambassador at Bad Ems, making it appear that both leaders had insulted each other.
* He leaked the edited text to the press on Bastille Day, inflaming public opinion in Paris and Berlin, expertly provoking France into declaring war so Prussia would appear as the victim of French aggression!`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Italian Roles & Versailles Proclamation Year',
        body: `### High-Frequency Traps in European Unification History

1. **Italian Unification Personalities (UPSC Favorite!):**
   * **Mazzini:** The Soul (Young Italy).
   * **Cavour:** The Brain (Prime Minister, Diplomacy).
   * **Garibaldi:** The Sword (Red Shirts).
   * **Victor Emmanuel II:** The King.

2. **German Empire Proclamation Venue:**
   * Proclaimed on **January 18, 1871** inside the **Hall of Mirrors at Versailles, France** (NOT Berlin!).

3. **Blood and Iron Author:**
   * **Otto von Bismarck** (NOT Kaiser Wilhelm I or Adolf Hitler).`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-WLD-05-1',
        statement: 'Italian unification (Risorgimento) was achieved through the philosophical inspiration of Giuseppe Mazzini (Young Italy), the diplomatic alliances of Count Cavour, and the military campaigns of Giuseppe Garibaldi\'s Red Shirts under King Victor Emmanuel II (1861/1870).',
        claimType: 'NATIONAL_UNIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-45',
        excerpt: 'The Rise of Nationalism in Europe: Italian unification, Mazzini, Cavour, Garibaldi, Victor Emmanuel II.',
      },
      {
        id: 'CLM-WLD-05-2',
        statement: 'Otto von Bismarck orchestrated German unification through his "Blood and Iron" policy and three calculated wars against Denmark (1864), Austria (1866), and France (1870–71).',
        claimType: 'MILITARY_UNIFICATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-45',
        excerpt: 'German Unification: Otto von Bismarck, Blood and Iron speech 1862, Franco-Prussian War.',
      },
      {
        id: 'CLM-WLD-05-3',
        statement: 'The German Empire was officially proclaimed on January 18, 1871 in the Hall of Mirrors at Versailles, with King Wilhelm I of Prussia crowned as German Emperor (Kaiser).',
        claimType: 'IMPERIAL_PROCLAMATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-45',
        excerpt: 'Proclamation of German Empire: Hall of Mirrors at Versailles, January 18 1871, Kaiser Wilhelm I.',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — World History / 19th Century European Nationalism & Unification of Italy and Germany',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_HISTORIOGRAPHICAL_ANALYSIS',
        notes: 'Bismarck\'s diplomacy and comparison of Cavour vs Bismarck are perennial UPSC Mains questions.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — World History / Unification of Germany & Italy',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE',
        notes: 'Guaranteed 10-mark question on Bismarck\'s foreign policy or Garibaldi/Mazzini.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — World History',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on "Blood and Iron" author (Bismarck), Red Shirts leader (Garibaldi), and Young Italy (Mazzini).',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'General Studies — Global Political Movements',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'POLITICAL_DEVELOPMENTS',
        notes: 'Tested on 19th-century nationalist milestones.',
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Global Milestones',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on landmark historical figures.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — History & Heritage',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on European historical figures.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Historical Milestones',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'GENERAL_AWARENESS',
        notes: 'Phase 1 static questions on global history.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'General Socio-Economic Background',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Economic origins of European customs unions (Zollverein).',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'European Unification: Italy (Risorgimento) = Mazzini (Soul, Young Italy 1831), Cavour (Brain, PM Piedmont, diplomacy), Garibaldi (Sword, 1,000 Red Shirts), Victor Emmanuel II (King 1861, Rome capital 1870). Germany = Zollverein (1834 customs union), Bismarck (Prussian Chancellor, "Blood & Iron" 1862), 3 Wars: Denmark (1864), Austria (1866 Sadowa), France (1870 Sedan). Proclaimed German Empire on Jan 18, 1871 in Hall of Mirrors, Versailles.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: '19th-Century European Nationalism Blueprint: 1) Italian Unification: Mazzini inspired youth with Young Italy; Count Cavour engineered French alliance to drive out Austria; Garibaldi\'s Red Shirts liberated southern Italy; Victor Emmanuel II crowned King (1861), annexing Rome in 1870. 2) German Unification: Initiated economically via the Zollverein customs union (1834); executed militarily by Otto von Bismarck via "Blood and Iron" in three calculated wars against Denmark (1864), Austria (1866), and France (1870); Kaiser Wilhelm I crowned at Versailles in January 1871.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Realpolitik & Statecraft Architecture: 1) Economic Integration Precursor: Customs unions eliminating tariff friction before political borders are merged. 2) Diplomatic Isolation: Bismarck\'s formula of isolating adversaries one by one to fight short, localized wars. 3) Geopolitical Realignment: The creation of a powerful unified Germany upsetting the European balance of power established in 1815.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'UNIFICATION_MCQ',
        stem: 'Who among the following delivered the famous "Blood and Iron" (*Blut und Eisen*) speech in September 1862, asserting that great national questions are decided by military force rather than speeches and majority parliamentary votes?',
        options: ['Klemens von Metternich', 'Otto von Bismarck', 'Kaiser Wilhelm II', 'Count Cavour'],
        correctAnswer: 'Otto von Bismarck',
        explanation: 'Otto von Bismarck, upon being appointed Minister-President of Prussia in 1862, delivered his legendary "Blood and Iron" speech to the Prussian budget commission, arguing that Germany could only be unified through military might and industrial strength rather than liberal parliamentary debate.',
        trapExplanation: 'Metternich was the conservative Austrian Chancellor; Cavour was the Italian statesman.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Authorship of the "Blood and Iron" doctrine (Bismarck).',
      },
      {
        type: 'UNIFICATION_MCQ',
        stem: 'In the Italian Risorgimento, who was the charismatic military revolutionary who led the volunteer army of the "Red Shirts" (*Camicie Rosse*) in the celebrated "Expedition of the Thousand" (1860) to liberate Sicily and Naples?',
        options: ['Giuseppe Mazzini', 'Count Camillo di Cavour', 'Giuseppe Garibaldi', 'Victor Emmanuel II'],
        correctAnswer: 'Giuseppe Garibaldi',
        explanation: 'Giuseppe Garibaldi was the renowned military hero and "Sword of Italy" who organized 1,000 volunteer civilian fighters known as the "Red Shirts" in 1860, landing in Sicily, overthrowing the Bourbon monarchy of Naples, and handing southern Italy to King Victor Emmanuel II.',
        trapExplanation: 'Mazzini was the intellectual founder of Young Italy; Garibaldi was the military commander of the Red Shirts.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'RPSC RAS Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Attribution of the Red Shirts to Giuseppe Garibaldi.',
      },
    ],
  },

  // =========================================================================
  // TOPIC 6: The Industrial Revolution & Industrial Capitalism
  // =========================================================================
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
    title: 'The Russian Revolution of 1917 & The Soviet State: From Tsarist Autocracy to Lenin\'s Bolshevik Triumph & Stalinist Command Economy',
    shortDefinition: 'The collapse of the 300-year Romanov autocracy and the birth of the world\'s first socialist state: 1905 Bloody Sunday dress rehearsal, February 1917 popular uprising and Tsar Nicholas II\'s abdication, Dual Power (Provisional Government vs Petrograd Soviet), Vladimir Lenin\'s April Theses, the October Bolshevik seizure of power (November 7, 1917), War Communism, Lenin\'s New Economic Policy (NEP), and Joseph Stalin\'s Five-Year Plans, collectivization, and liquidation of the Kulaks.',
    difficulty: 'ADVANCED',
    order: 9,
    topicSlug: 'russian-revolution-and-soviet-state',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Storming of the Winter Palace: How an Impoverished Peasant Empire Built the First Socialist State',
        body: `In 1848, Karl Marx and Friedrich Engels predicted in *The Communist Manifesto* that the proletarian revolution would erupt in the most technologically advanced capitalist countries—such as Great Britain or Germany—where millions of factory workers formed the majority of society.

Yet in **1917**, amidst the catastrophic bloodbath and mass starvation of World War I, history defied theoretical prediction: the world\'s first successful socialist revolution took place in **Tsarist Russia**—a vast, economically backward empire where over $80\\%$ of the population were illiterate, impoverished peasants, and the urban factory working class comprised less than $5\\%$ of the populace!

How did this impossible revolution succeed?
1. **The Rotting Tsarist Autocracy:** Tsar Nicholas II ruled as an absolute monarch, refusing meaningful constitutional reform while dragging millions of ill-equipped peasant soldiers to their slaughter on the Eastern Front of World War I.
2. **The Dual Power Stalemate (*Dvoyevlastiye*):** When women workers and soldiers overthrew the Tsar in February 1917, the newly formed bourgeois **Provisional Government** foolishly decided to stay in World War I, bleeding the nation dry while the **Petrograd Soviet** of workers and soldiers held actual military control on the ground.
3. **Lenin\'s Revolutionary Genius:** Arriving from Swiss exile in April 1917, **Vladimir Lenin** recognized what other socialist intellectuals missed: the masses did not care about liberal constitutionalism; they demanded three existential things: **\"Peace, Land, and Bread\"**. On the night of November 6–7, 1917, Lenin\'s Bolshevik Red Guards seized Petrograd\'s key infrastructure and stormed the Winter Palace, inaugurating the Soviet era.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The Dual Revolutions Matrix & Soviet Economic Trajectory',
        body: `### 1. The Twin Revolutions of 1917: February vs October
| Dimension | 1905 Revolution (\"Dress Rehearsal\") | February Revolution (March 1917) | October Revolution (November 1917) |
| :--- | :--- | :--- | :--- |
| **Direct Trigger** | **Bloody Sunday (Jan 22, 1905)**: Imperial guards shot peaceful workers led by Father Gapon at Winter Palace. | Severe bread shortages; strikes on **International Women\'s Day (March 8)**; soldiers mutinied. | Kerensky launched failed military offensive; Kornilov military coup attempt armed the Bolsheviks. |
| **Key Leaders** | Spontaneous strikes; Leon Trotsky led the first Petrograd Soviet. | Spontaneous mass mobilization; Duma liberals formed **Provisional Government** under Prince Lvov and Alexander Kerensky. | **Vladimir Lenin** provided ideological command (**April Theses**); **Leon Trotsky** organized Military Revolutionary Committee. |
| **Immediate Outcome** | Tsar Nicholas II forced to concede the **October Manifesto** granting civil liberties and an elected parliament (**Duma**). | **Tsar Nicholas II abdicated (March 15, 1917)**, ending the 300-year Romanov Dynasty. Created **Dual Power (*Dvoyevlastiye*)**. | Provisional Government overthrown; Bolsheviks seized power; Lenin formed the Council of People\'s Commissars (**Sovnarkom**). |

---

### 2. Vladimir Lenin\'s Strategic Milestones (1917–1924)
* **The April Theses (April 1917):** Lenin returned in a German sealed train and startled moderate socialists by demanding:
  1. Immediate withdrawal from World War I (imperialist war).
  2. Confiscation of noble landed estates and transfer of all land to peasant soviets.
  3. Immediate transfer of all state power to the Soviets (\"*All Power to the Soviets!*\").
  4. Nationalization of all banks and merging into a single state bank.
* **Decree on Peace & Decree on Land (November 1917):** First acts of Soviet power: proposed an immediate armistice without annexations (**Treaty of Brest-Litovsk, March 1918**, surrendering Ukraine and Baltic lands to exit WW1) and abolished private land ownership forever.
* **War Communism (1918–1921):** Extreme emergency economic regime during the Russian Civil War against the White Armies and foreign intervention:
  * Nationalized all factories down to small workshops.
  * Banned private trade and abolished currency (barter economy).
  * Enforced **Prodrazvyorstka** (forced grain requisitioning squads seizing grain from peasants at gunpoint).
  * Result: Catastrophic 1921 Volga famine and the **Kronstadt sailors\' rebellion (March 1921)** against Bolshevik dictatorship.
* **The New Economic Policy (NEP, 1921–1928):** Lenin\'s pragmatic \"temporary retreat\":
  * Replaced grain requisitioning with a predictable tax-in-kind (**Prodnalog**).
  * Allowed peasants to sell surplus grain in open markets.
  * Permitted small private trade and light workshops (*NEPmen*).
  * The Soviet state retained control over the \"**commanding heights of the economy**\" (heavy industry, coal, steel, railways, foreign trade, and banking).

---

### 3. Joseph Stalin\'s Era: Industrialization & Collectivization (1928–1953)
* **Five-Year Plans (*Pyatiletka*, initiated 1928):** Abolished NEP; instituted centralized Gosplan command economy prioritizing heavy industry (steel mills at Magnitogorsk, hydroelectricity, tractors, chemicals) at breakneck pace to survive imperialist encirclement.
* **Forced Agricultural Collectivization (*Kolkhoz*, 1929):** Abolished private peasant holdings; merged peasant lands into state-directed collective farms to extract cheap grain for urban workers and export machinery purchases.
* **Liquidation of the Kulaks (\"Dekulakization\"):** Branded wealthier peasants who owned livestock or employed labor as \"Kulaks\"; over 5 million Kulaks were executed, deported to Siberian Gulag camps, or starved in the manufactured famine of 1932–33 (**Holodomor** in Ukraine).`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'The Revolutionary Mechanics: Dual Power Breakdown & Gosplan Command Economy',
        body: `### 1. The Dual Power (*Dvoyevlastiye*) Paralyzing Mechanism (March–October 1917)
* The **Provisional Government** possessed legal sovereign recognition, the state treasury, and diplomatic embassies, but zero armed loyal troops.
* The **Petrograd Soviet** possessed the loyalty of the armed garrison and factory workers through **Order No. 1** (which decreed that military units obeyed the Provisional Government *only* so long as its orders did not contradict Soviet decisions).
* This structural paralysis meant whoever mobilized the Petrograd Soviet could topple the state overnight—which Lenin and Trotsky executed with surgical precision on October 25 (Nov 7), 1917.

### 2. The Gosplan Command Economy Allocative Mechanism
* Replaced market price signals ($Supply = Demand$) with physical material balances calculated by the State Planning Committee (**Gosplan**).
* Prices and wages were fixed by administrative fiat rather than scarcity.
* Directed capital accumulation by forcibly depressing rural living standards and consumption to channel over $40\\%$ of national output into capital goods and military hardware.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, February vs October Revolutions & Economic Policies',
        body: `### High-Frequency Traps in Russian History
1. **Who Overthrew Whom? (The #1 Universal Trap!):**
   * **February Revolution (March 1917):** Overthrew **Tsar Nicholas II** and established the Provisional Government.
   * **October Revolution (Nov 1917):** Overthrew the **Provisional Government** (Kerensky) and established the **Bolshevik Soviet state** under Lenin.
   * *Trap:* Claiming Lenin overthrew Tsar Nicholas II directly! Lenin was in Zurich, Switzerland when the Tsar fell.

2. **War Communism vs New Economic Policy (NEP):**
   * *War Communism (1918–21):* Complete ban on private trade, forced grain confiscation (*Prodrazvyorstka*), catastrophic famine.
   * *NEP (1921–28):* Tax-in-kind (*Prodnalog*), market sales of surplus, private small business, state kept commanding heights.

3. **Treaty of Brest-Litovsk (March 1918):**
   * Treaty between Soviet Russia and the Central Powers (Germany, Austria-Hungary) taking Russia out of WWI; surrendered Baltic territories, Poland, and Ukraine.

4. **Kulaks Definition:**
   * Relatively prosperous peasant landowners targeted for physical liquidation during Stalin\'s 1929 Collectivization campaign.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-WLD-09-1',
        statement: 'The February Revolution of March 1917 forced Tsar Nicholas II to abdicate, ending the Romanov dynasty and establishing a fragile Dual Power regime between the bourgeois Provisional Government and the Petrograd Soviet.',
        claimType: 'REVOLUTIONARY_OVERTHROW',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-36',
        excerpt: 'Socialism in Europe and the Russian Revolution: February 1917 Tsar abdication, Provisional Government, Petrograd Soviet Dual Power.',
      },
      {
        id: 'CLM-WLD-09-2',
        statement: 'Vladimir Lenin returned to Russia in April 1917, formulating the April Theses demanding \"Peace, Land, and Bread\", leading the Bolsheviks under Leon Trotsky\'s Military Revolutionary Committee to seize state power in the October Revolution of November 7, 1917.',
        claimType: 'BOLSHEVIK_SEIZURE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-36',
        excerpt: 'Lenin April Theses, Peace Land Bread, October Revolution 1917, Bolshevik seizure of power.',
      },
      {
        id: 'CLM-WLD-09-3',
        statement: 'After the failure of War Communism and the interim recovery under the New Economic Policy (NEP), Joseph Stalin launched rapid state-directed industrialization via Five-Year Plans and enforced agricultural Collectivization, liquidating the Kulaks as a class.',
        claimType: 'ECONOMIC_COLLECTIVIZATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-36',
        excerpt: 'Soviet economic transitions: War Communism, NEP, Stalin Five-Year Plans, forced agrarian collectivization, Kulak liquidation.',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — World History / Russian Revolution & Emergence of the Soviet Socialist State',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_HISTORIOGRAPHICAL_ANALYSIS',
        notes: 'Causes of the Russian Revolution, April Theses, War Communism vs NEP, and Stalinist industrialization are standard Mains questions.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — World History / Russian Revolution of 1917 and Soviet State',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE',
        notes: 'High-frequency 10-mark question on causes, major phases (February vs October), and global impact of the 1917 Revolution.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — World History',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on Russian Revolution year (1917), Bolshevik leader (Lenin), Bloody Sunday (1905), and Brest-Litovsk (1918).',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'General Studies — Global Political & Socialist Movements',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'POLITICAL_IDEOLOGIES',
        notes: 'Tested on Communist Manifesto, workers\' soviets, and early Soviet economic planning structures.',
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Global Historical Milestones',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Origins of planned state socialist economies and five-year planning models.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — History & Heritage',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on landmark modern global revolutions.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness / Global Economic History',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'GENERAL_AWARENESS',
        notes: 'Phase 1 static questions on centralized state planning origins.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'General Socio-Economic Background',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Foundations of 20th-century state-directed socialist economic systems.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Russian Revolution (1917): 1905 Bloody Sunday dress rehearsal -> Feb 1917 strike overthrew Tsar Nicholas II (abdicated), creating Dual Power (Provisional Govt vs Petrograd Soviet). Lenin April Theses (\"Peace, Land, Bread\") -> Oct 1917 (Nov 7) Bolshevik Red Guards stormed Winter Palace. Treaty of Brest-Litovsk (1918) exited WW1. Economic Policy: War Communism (1918-21 forced requisitions) -> NEP (1921-28 private trade permitted) -> Stalin Five-Year Plans (1928) & forced Collectivization (liquidation of Kulaks).',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Russian Revolution Blueprint: 1) February Milestone: WWI disasters and bread shortages provoked mass strikes in Petrograd; Tsar Nicholas II abdicated in March 1917, establishing Romanov collapse and Dual Power between Kerensky\'s Provisional Government and the Petrograd Soviet. 2) Bolshevik Seizure: Lenin\'s April Theses captured mass longing for Peace, Land, and Bread; Trotsky coordinated Red Guards to overthrow the Provisional Government on November 7 (Oct 25 OS), 1917. 3) War Communism to NEP: Requisitioning squads caused 1921 famine; Lenin engineered a temporary tactical retreat with NEP, allowing private market sales of grain while retaining commanding heights. 4) Stalinist Transformation: From 1928, Stalin introduced Gosplan Five-Year Plans for heavy industry and forced agricultural collectivization (Kolkhoz), eradicating the Kulaks.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Soviet State Transformation Architecture: 1) Dual Power Inversion: Transition of Soviet power from an advisory workers\' council checking bourgeois ministries to the sole legislative and executive authority (Sovnarkom). 2) Gosplan Command System: Elimination of price signals; state determination of physical production targets and quota allocation. 3) Agrarian Extraction Telemetry: Squeezing peasant agricultural surplus through collective farming to capitalize rapid heavy industrialization.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'REVOLUTION_PHASE_MCQ',
        stem: 'In the history of the Russian Revolution of 1917, which specific revolution resulted directly in the abdication of Tsar Nicholas II and the termination of Romanov autocratic rule?',
        options: [
          'The 1905 Bloody Sunday Revolution',
          'The February Revolution of March 1917',
          'The October Revolution of November 1917',
          'The Kronstadt Rebellion of 1921',
        ],
        correctAnswer: 'The February Revolution of March 1917',
        explanation: 'The February Revolution (which occurred in March 1917 according to the Gregorian calendar) began with spontaneous bread protests and mass strikes in Petrograd on International Women\'s Day. When garrison troops joined the protestors, Tsar Nicholas II was forced to abdicate on March 15, 1917, ending three centuries of Romanov dynasty rule.',
        trapExplanation: 'The October Revolution overthrew the Provisional Government (Kerensky), NOT the Tsar. The 1905 revolution produced the October Manifesto but retained the monarchy.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Confusing the direct political target of the February Revolution (Tsar) with that of the October Revolution (Provisional Government).',
      },
      {
        type: 'LENIN_ECONOMIC_POLICY_MCQ',
        stem: 'Why did Vladimir Lenin introduce the New Economic Policy (NEP) in March 1921, departing temporarily from pure socialist economic principles?',
        options: [
          'To prepare the Russian economy for entry into the League of Nations',
          'To overcome catastrophic economic collapse, peasant discontent, and famine caused by the forced grain requisitions of War Communism',
          'To fulfill conditional financial loan agreements mandated by the Treaty of Brest-Litovsk',
          'To assist Adolf Hitler\'s Weimar Germany during the hyperinflation crisis',
        ],
        correctAnswer: 'To overcome catastrophic economic collapse, peasant discontent, and famine caused by the forced grain requisitions of War Communism',
        explanation: 'The extreme measures of War Communism (1918–1921)—especially the forced requisition of grain (*Prodrazvyorstka*)—led to catastrophic peasant uprisings, widespread famine, and the Kronstadt naval mutiny in March 1921. Lenin pragmatically introduced the New Economic Policy (NEP) as a \"temporary tactical retreat\", replacing grain confiscation with a fixed tax (*Prodnalog*) and permitting peasants to sell surplus produce in open markets.',
        trapExplanation: 'The NEP was driven entirely by internal Soviet economic devastation and peasant resistance, not foreign treaties or German alliances.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'RPSC RAS Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Causal motivation for Lenin\'s NEP: tactical domestic survival vs international agreements.',
      },
    ],
  },

  // =========================================================================
  // TOPIC 7: Interwar Totalitarianism & The Rise of Nazism
  // =========================================================================
  {
    id: 'CON-WLD-07',
    slug: 'interwar-totalitarianism-weimar-republic-and-the-rise-of-hitler-nazism',
    title: 'Interwar Totalitarianism & The Third Reich: The Weimar Collapse, Adolf Hitler\'s Nazism, and the Holocaust',
    shortDefinition: 'The collapse of European democracy between the World Wars: The Treaty of Versailles (1919, Article 231 War Guilt Clause), the fragile Weimar Republic, hyperinflation of 1923, the Great Depression of 1929, Adolf Hitler\'s National Socialist German Workers\' Party (NSDAP), the Reichstag Fire (1933), the Enabling Act, totalitarian Gleichschaltung, the Nuremberg Laws of 1935, and the Holocaust (The Final Solution / Shoah).',
    difficulty: 'ADVANCED',
    order: 7,
    topicSlug: 'interwar-totalitarianism-and-nazism',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Seduction of Dictatorship: How Democracy Committed Suicide in Germany',
        body: `Following Germany\'s defeat in World War I in November 1918, the German people established the **Weimar Republic**—one of the most progressive, democratic constitutions in the world, featuring universal adult suffrage, proportional representation, and an extensive bill of civil rights.

Yet just fourteen years later, the German electorate voted into power **Adolf Hitler**, handing absolute autocratic power to a totalitarian fascist regime that murdered six million Jews and unleashed a global war that killed over 70 million human beings.

How did a cultured, educated European nation surrender its freedom to a genocidal dictator?
1. **The Humiliation of Versailles (1919):** Stripped Germany of its colonies, $13\\%$ of its European territory, its military, and forced it to sign the humiliating **Article 231 "War Guilt Clause"**, creating the toxic myth that the army had been "stabbed in the back" (*Dolchstoßlegende*) by socialists and Jews.
2. **Economic Collapse:** The catastrophic hyperinflation of 1923 followed by the **Great Depression of 1929** (when US loans were abruptly recalled), leaving 6 million Germans unemployed and desperate.
3. **The Totalitarian Machinery:** Once appointed Chancellor in January 1933, Hitler exploited the **Reichstag Fire** to suspend civil liberties, passing the **Enabling Act** to eliminate all opposition parties and establish the Third Reich!`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The Rise of Nazism & The Holocaust Architecture Matrix',
        body: `### 1. Step-by-Step Dismantling of the Weimar Democracy (1933–1934)
* **January 30, 1933:** President Paul von Hindenburg appointed Adolf Hitler as Chancellor of Germany.
* **The Reichstag Fire (February 27, 1933):** The German parliament building was mysteriously burned; Hitler blamed the Communist Party and issued the **Reichstag Fire Decree**, indefinitely suspending freedom of speech, press, assembly, and habeas corpus!
* **The Enabling Act (*Ermächtigungsgesetz*, March 23, 1933):**
  * Transferred all legislative power from the Reichstag directly to Hitler's Cabinet.
  * Officially transformed Germany into a legal dictatorship: Hitler could enact laws violating the constitution without parliamentary or presidential consent!
* **Gleichschaltung (Total Nazification):** Banned all other political parties and trade unions; established the secret police (**Gestapo**) and paramilitary stormtroopers (**SS** under Heinrich Himmler); purged civil servants and judiciary.

---

### 2. Nazi Ideology & Racial Persecution
* **Ideological Tenets (Mein Kampf, 1925):**
  * **Racial Hierarchy:** Glorified the mythical **Nordic Aryan** as the master race (*Herrenvolk*); characterized Jews, Roma, Slavs, and disabled people as "sub-humans" (*Untermenschen*).
  * **Lebensraum (Living Space):** The belief that Germany required vast agricultural and mineral territories in Eastern Europe and Russia to sustain the Aryan race.
* **The Nuremberg Laws (September 15, 1935):**
  1. **Reich Citizenship Law:** Stripped German Jews of their citizenship, reducing them to state subjects.
  2. **Law for the Protection of German Blood and German Honor:** Prohibited marriages and sexual relations between Jews and German citizens.
* **Kristallnacht (Night of Broken Glass, Nov 9–10, 1938):** State-sponsored pogrom destroying hundreds of synagogues and thousands of Jewish businesses, arresting 30,000 Jews.

---

### 3. The Holocaust / "The Final Solution" (*Endlösung*, 1941–1945)
* At the **Wannsee Conference (January 1942)** chaired by Reinhard Heydrich, the Nazi leadership formalized the industrial extermination of all 11 million European Jews.
* **Industrial Mass Murder:** Constructed specialized death camps equipped with poison gas chambers (**Zyklon B**) and crematoria in occupied Poland: **Auschwitz-Birkenau, Treblinka, Sobibor, Belzec, Chelmno, Majdanek**.
* Systematically murdered **six million Jews (two-thirds of European Jewry)** alongside millions of Soviet prisoners of war, Roma, disabled people, and political dissidents.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Propaganda Telemetry & Economic Rearmament (Hjalmar Schacht)',
        body: `### 1. Totalitarian Propaganda (Joseph Goebbels)
* Created the Ministry of Public Enlightenment and Propaganda:
* Monopolized radio broadcasts (*Volksempfänger*), cinema (Leni Riefenstahl\'s *Triumph of the Will*), press, and school textbooks to indoctrinate German youth into blind obedience to the *Führer*.

### 2. Economic Recovery via Rearmament
* Finance Minister **Hjalmar Schacht** created the "Mefo bills" credit system to secretly finance rearmament, building the **Autobahn** highway network and the "People\'s Car" (**Volkswagen**).
* Unemployment dropped from 6 million to under 1 million, deceiving the German public into celebrating economic "miracles" that were actually preparing the state for catastrophic aggressive war.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Enabling Act Year & Nuremberg Laws Provisions',
        body: `### High-Frequency Traps in Nazism History

1. **Enabling Act Year (UPSC Landmark!):**
   * Passed on **March 23, 1933**, granting Hitler dictatorial powers.

2. **Nuremberg Laws (1935) Provisions:**
   * Stripped Jews of citizenship and banned inter-marriage.
   * Did NOT establish death camps yet (death camps began in 1941–42!).

3. **Article 231 of Versailles Treaty:**
   * The **"War Guilt Clause"**, forcing Germany to accept sole moral and financial responsibility for World War I.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-WLD-07-1',
        statement: 'The Treaty of Versailles (1919) imposed the Article 231 War Guilt Clause and massive reparations on Germany, breeding resentment that fueled the rise of Adolf Hitler and the Nazi Party.',
        claimType: 'HISTORICAL_PRECONDITION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-21',
        excerpt: 'Nazism and the Rise of Hitler: Treaty of Versailles Article 231, Weimar Republic collapse.',
      },
      {
        id: 'CLM-WLD-07-2',
        statement: 'Following the Reichstag Fire of February 1933, the Enabling Act was passed on March 23, 1933, giving Hitler power to enact laws without parliamentary approval and establishing the Nazi dictatorship.',
        claimType: 'DICTATORIAL_CONSOLIDATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-21',
        excerpt: 'The Enabling Act of March 1933 established Hitler\'s legal dictatorship in Germany.',
      },
      {
        id: 'CLM-WLD-07-3',
        statement: 'The Nazi regime instituted the Nuremberg Laws in 1935 stripping Jews of citizenship, culminating in the Wannsee Conference (1942) and the Holocaust, which murdered six million European Jews in death camps like Auschwitz.',
        claimType: 'GENOCIDAL_HOLOCAUST',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-21',
        excerpt: 'Nuremberg Laws 1935, Wannsee Conference 1942, and the Holocaust extermination camps.',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — World History / Interwar Totalitarianism, Nazism & Fascism',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_HISTORIOGRAPHICAL_ANALYSIS',
        notes: 'Causes of the Weimar collapse, Nazi propaganda mechanisms, and Holocaust are premier UPSC topics.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — World History / Rise of Nazism and Fascism',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE',
        notes: 'Guaranteed 10-mark question on factors leading to the rise of Hitler or the Treaty of Versailles.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — World History',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on Enabling Act year (1933), Nuremberg Laws year (1935), and Hitler\'s book (Mein Kampf).',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'General Studies — 20th Century World History',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'TOTALITARIAN_STRUCTURES',
        notes: 'Tested on Weimar Republic and Great Depression impact.',
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
        notes: 'Phase 1 static questions on interwar economic collapse.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'General Socio-Economic Background',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Economic consequences of the 1923 hyperinflation and 1929 Great Depression.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Nazism: Versailles Treaty (1919, Article 231 War Guilt). Weimar Republic (1919-1933) collapsed due to 1923 hyperinflation & 1929 Great Depression. Hitler appointed Chancellor (Jan 30, 1933). Reichstag Fire (Feb 1933) -> Enabling Act (March 23, 1933 -> Dictatorship). Nuremberg Laws (1935, stripped Jews of citizenship). Kristallnacht (1938). Holocaust: Wannsee Conference (1942, Final Solution), 6 million Jews killed in camps (Auschwitz).',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Rise of Nazism & Holocaust Blueprint: 1) Preconditions: Humiliation of Versailles Treaty (Article 231 War Guilt clause) and economic devastation of the 1929 Great Depression. 2) Seizure of Power: Hitler appointed Chancellor (Jan 1933); Reichstag fire exploited to suspend civil rights; Enabling Act (March 23, 1933) created legal dictatorship. 3) Totalitarian Control: Gestapo and SS eliminated opposition; Joseph Goebbels monopolized propaganda. 4) Racial Persecution: Nuremberg Laws (1935) stripped Jews of citizenship; culminated in the Holocaust (1941–45) exterminating 6 million European Jews.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Fascist Totalitarian State Architecture: 1) Structural Demagoguery: Exploiting economic despair and nationalist humiliation to scapegoat internal ethnic minorities. 2) Legal Destruction of Democracy: Using constitutional emergency powers (Enabling Act) to permanently extinguish constitutional rule. 3) Industrialized Annihilation: Applying assembly-line factory efficiency to genocidal state extermination.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'NAZISM_MCQ',
        stem: 'Which landmark statute passed by the German parliament on March 23, 1933 officially dismantled the democratic Weimar Republic by giving Adolf Hitler\'s cabinet the power to enact laws without the consent of the Reichstag?',
        options: [
          'The Reichstag Fire Decree',
          'The Enabling Act (*Ermächtigungsgesetz*)',
          'The Nuremberg Citizenship Law',
          'The Treaty of Versailles Ratification Act'
        ],
        correctAnswer: 'The Enabling Act (*Ermächtigungsgesetz*)',
        explanation: 'The Enabling Act (officially titled the "Law to Remedy the Distress of the People and the Reich") was passed on March 23, 1933. It gave Hitler the constitutional authority to issue decrees having the force of law without the approval of parliament, completing the creation of his legal dictatorship.',
        trapExplanation: 'The Reichstag Fire Decree suspended civil liberties in Feb 1933; the Enabling Act in March 1933 gave full dictatorial lawmaking powers.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Exact statute establishing Hitler\'s legal dictatorship (The Enabling Act).',
      },
      {
        type: 'NAZISM_MCQ',
        stem: 'The anti-Semitic "Nuremberg Laws" promulgated by the Nazi regime in September 1935 specifically provided for which of the following measures?',
        options: [
          'The immediate construction of extermination gas chambers in Poland',
          'Depriving German Jews of their citizenship and prohibiting intermarriage or sexual relations between Jews and citizens of German blood',
          'The compulsory deportation of all German Jews to the island of Madagascar',
          'The total nationalization of all private industrial corporations in Germany'
        ],
        correctAnswer: 'Depriving German Jews of their citizenship and prohibiting intermarriage or sexual relations between Jews and citizens of German blood',
        explanation: 'The Nuremberg Laws of September 1935 comprised two primary decrees: the Reich Citizenship Law (which stripped Jews of German citizenship) and the Law for the Protection of German Blood and German Honor (which strictly criminalized marriages and sexual relations between Jews and Germans).',
        trapExplanation: 'Extermination gas chambers were introduced later during the Second World War (1941–42), not in the 1935 Nuremberg Laws.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2020,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Provisions of the 1935 Nuremberg Laws (Citizenship & Intermarriage).',
      },
    ],
  },

  // =========================================================================
  // TOPIC 8: Paths to Modernization: Japan (Meiji) vs China
  // =========================================================================
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
