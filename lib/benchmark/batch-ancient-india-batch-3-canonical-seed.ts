import { db } from '../db/client';

export interface Batch3CanonicalConceptDef {
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

export const ANCIENT_INDIA_BATCH_3_CONCEPTS: Batch3CanonicalConceptDef[] = [
  // =========================================================================
  // TOPIC 71: Mauryan Sources & Imperial Foundation
  // =========================================================================
  {
    id: 'CON-HIST-21',
    slug: 'sources-for-mauryan-history-inscriptions-texts-and-archaeology',
    title: 'Sources for Mauryan History: Inscriptions, Texts, Archaeology & Historiographical Limits',
    shortDefinition: 'Systematic source criticism evaluating Ashokan contemporary epigraphy, the dating and composite nature of Kautilya\'s Arthashastra, Megasthenes\' Indica fragments, Buddhist-Jain traditions, and archaeological material.',
    difficulty: 'ADVANCED',
    order: 21,
    topicSlug: 'mauryan-sources-and-imperial-foundation',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Epistemic Bedrock: How Do We Reconstruct Mauryan History?',
        body: `The Mauryan Empire (c. 321–185 BCE) is the first imperial epoch in Indian history for which historians possess **contemporary primary epigraphic evidence** directly issued by the reigning sovereign, alongside foreign eyewitness fragments, normative political treatises, and archaeological excavations.

However, rigorous historiography requires distinguishing between **contemporary primary records**, **theoretical normative models**, and **later sectarian religious traditions**.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Classification & Critical Evaluation of Mauryan Sources',
        body: `### 1. Ashokan Epigraphy (Primary Contemporary Evidence)
- **Nature:** 33 inscriptions categorized into Major Rock Edicts, Minor Rock Edicts, Separate Kalinga Edicts, Major Pillar Edicts, Minor Pillar Edicts, and Cave Inscriptions.
- **Value:** The gold standard of primary historical evidence; records Ashoka's voice, policies, remorse after Kalinga, welfare measures, and administrative orders directly without later redactions.
- **Limitation:** Focuses on the reign of Ashoka and his ideological projections; silent on earlier dynastic details of Chandragupta or Bindusara.

### 2. Kautilya\'s *Arthashastra* (Normative Theoretical Political Treatise)
- **Nature:** A Sanskrit treatise on statecraft, political economy, espionage, and military strategy across 15 books (*Adhikaranas*), 150 chapters, and 6,000 verses.
- **Historiographical Dating Debate:** While traditional belief attributes the entire work to Chanakya/Kautilya (prime minister of Chandragupta Maurya in the 4th Century BCE), modern scholarly consensus (e.g. Thomas Trautmann, Patrick Olivelle, R.P. Kangle) establishes that the surviving text is a **composite work with an early Mauryan core redacted and expanded between the 3rd Century BCE and 2nd Century CE**.
- **Critical Caution:** The *Arthashastra* presents a **theoretical normative blueprint** of an ideal centralized state; it must not be treated as a direct transcript of everyday Mauryan administrative reality unless corroborated by epigraphy or archaeology.

### 3. Megasthenes\' *Indica* (Foreign Eyewitness Account)
- **Nature:** Observations recorded by Megasthenes, the Seleucid ambassador sent by Seleucus I Nicator to the court of Chandragupta Maurya at Pataliputra (c. 302 BCE).
- **Survival & Distortion:** The original manuscript is lost; surviving fragments exist as quotations in later Greek and Roman authors (Strabo, Arrian, Diodorus Siculus, Pliny).
- **Hellenistic Distortions & Limitations:**
  - Megasthenes observed Indian society through Greek cognitive frameworks, leading to notable misunderstandings:
    1. *Seven-Class Division:* Claimed Indian society was partitioned into 7 classes (Philosophers, Farmers, Soldiers, Herdsmen, Artisans, Magistrates, Councillors), confusing occupational groups and administration with hereditary *Varna/Jati*.
    2. *Denial of Slavery:* Claimed all Indians were free and slavery did not exist (missing subtle domestic and debt bondage like *Dasa-Karmakaras* which differed from brutal Greek chattel slavery).
    3. *Denial of Usury & Famine:* Asserted Indians did not know the art of writing, never took loans with interest, and never suffered famines.

### 4. Later Literary & Religious Traditions
- **Buddhist Chronicles:** *Dipavamsa, Mahavamsa* (Sri Lankan Pali chronicles), *Divyavadana, Ashokavadana* (Sanskrit texts) provide extensive biographical lore on Ashoka, his conversion, and the Third Buddhist Council. *(Must be qualified: written centuries later with explicit theological motivation to contrast a "wicked Chandashoka" with a "pious Dhammashoka")*.
- **Jain Texts:** Hemachandra\'s *Parishishtaparvan* (12th Century CE) preserves traditions of Chandragupta\'s Jain conversion, famine migration with Bhadrabahu, and death by Sallekhana at Shravanabelagola.
- **Puranas:** Provide dynastic King-lists, reign lengths (137 years total Mauryan rule), and confirm the Shudra origin of the Nandas and overthrow by Chandragupta.
- **Mudrarakshasa:** 5th Century CE historical drama by Vishakhadatta detailing Chanakya\'s diplomatic realpolitik in overthrowing the Nandas.

### 5. Archaeological & Numismatic Evidence
- **Kumrahar & Bulandi Bagh (Patna):** Excavations revealing the monumental **80-Pillared Hypostyle Wooden Hall** of Pataliputra and defensive wooden palisades described by Megasthenes.
- **Punch-Marked Coins (*Karshapanas*):** Imperial silver coinage bearing royal symbols (crescent-on-hill, peacock, sun, wheel), showing widespread monetization and later debasement under declining Mauryas.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Target Exam Anchors & Historiographical Traps',
        body: `### Critical Exam Traps (UPSC / State PCS)
- **Arthashastra Authorship:** Never claim the surviving text was composed entirely in 321 BCE without acknowledging its **composite 3rd BCE–2nd CE redaction**.
- **Megasthenes 7 Castes:** Megasthenes listed **7 classes**, NOT 4 Varnas.
- **Slavery in Mauryan Era:** Megasthenes stated there was no slavery, but both the *Arthashastra* (Book III on *Dasas*) and Ashoka\'s inscriptions (mentioning *Dasa-Bhatakas / Dasa-Karmakaras*) prove that domestic slavery and bonded labor existed.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-21-01',
        statement: 'Mauryan history is reconstructed from contemporary Ashokan epigraphy, the composite political treatise Arthashastra, surviving fragments of Megasthenes\' Indica, Buddhist/Jain chronicles, and archaeological excavations at Pataliputra.',
        claimType: 'HISTORICAL_METHODOLOGY',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Romila Thapar, Asoka and the Decline of the Mauryas & Upinder Singh',
        excerpt: 'The reconstruction of Mauryan history relies on Ashokan edicts, the Arthashastra, Megasthenes\' fragments, and Buddhist/Jain traditions, each requiring careful source criticism.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Sources of Mauryan History & Historiography',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'SOURCE_CRITICISM_AND_ANALYSIS',
        notes: 'Critical evaluation of Arthashastra dating, Megasthenes distortions, and Ashokan epigraphy.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Ancient Historical Sources & Megasthenes Account',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'FACTUAL_PRECISION',
        notes: 'Megasthenes 7 classes, Pataliputra municipal committees, and Arthashastra adhikaranas.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Sources: 1. Ashokan Inscriptions (Primary contemporary) | 2. Arthashastra (Kautilya, composite 3rd BCE–2nd CE normative text) | 3. Indica (Megasthenes fragments; 7 classes, denied slavery) | 4. Buddhist/Jain texts (Mahavamsa, Parishishtaparvan) | 5. Archaeology: Kumrahar 80-pillar hall & silver Karshapanas.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'According to surviving classical Greek fragments of Megasthenes\' "Indica", which of the following erroneous observations was made regarding Indian society under Chandragupta Maurya?',
        options: [
          'Society was divided into four rigid endogamous Varnas',
          'Slavery did not exist and society was partitioned into seven occupational classes',
          'Punch-marked coins were the exclusive medium of foreign trade',
          'The state possessed no standing military army',
        ],
        correctAnswer: 'Slavery did not exist and society was partitioned into seven occupational classes',
        explanation: 'Megasthenes erroneously reported that all Indians were free and that slavery did not exist, and categorized society into seven classes (Philosophers, Farmers, Soldiers, Herdsmen, Artisans, Magistrates, Councillors) through a Hellenistic lens.',
        trapExplanation: 'The 4-Varna system is the indigenous Indian model; Megasthenes specifically claimed there were 7 classes and no slavery.',
        difficulty: 'MEDIUM',
      },
    ],
  },

  {
    id: 'CON-HIST-22',
    slug: 'chandragupta-maurya-imperial-expansion-and-seleucid-settlement',
    title: 'Chandragupta Maurya, Imperial Expansion & The Seleucid Settlement',
    shortDefinition: 'The political foundation of the Mauryan Empire by Chandragupta Maurya (c. 321 BCE), overthrow of the Nandas, territorial expansion, the 305 BCE treaty with Seleucus I Nicator, and later Jain traditions.',
    difficulty: 'INTERMEDIATE',
    order: 22,
    topicSlug: 'mauryan-sources-and-imperial-foundation',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Architect of India\'s First Subcontinental Empire',
        body: `Around **321 BCE**, **Chandragupta Maurya** (known in Greek records as *Sandrokottos* or *Androcottus*) established the **Mauryan Empire**, creating the first politically unified subcontinental state in Indian history.

With the diplomatic and strategic guidance of his mentor **Chanakya / Kautilya / Vishnugupta**, Chandragupta overthrew the corrupt Nanda dynasty at Pataliputra, liberated northwestern India from Macedonian garrisons left by Alexander, and established an empire stretching from the Hindukush mountains to Bengal and the Deccan.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Dynastic Foundation, Seleucid Treaty & Territorial Consolidation',
        body: `### 1. Overthrow of the Nandas (c. 321 BCE)
- Exploited popular dissatisfaction with the oppressive taxation of King Dhana Nanda.
- Combined mercenary recruits, northwestern frontier warriors, and forest tribes to capture Pataliputra.

### 2. The Seleucid-Mauryan Conflict & Settlement (c. 305–303 BCE)
- **The Invasion:** In c. 305 BCE, **Seleucus I Nicator** (Alexander's general and founder of the Seleucid Empire) crossed the Indus River attempting to reclaim Alexander's Indian conquests.
- **The Defeat & Peace Settlement:** Chandragupta checked or defeated Seleucus, culminating in a historic geopolitical settlement (c. 305–303 BCE):
  1. **Territorial Cession:** Seleucus ceded four vital eastern satrapies (**The Trans-Indus Provinces**):
     - **Aria** (modern Herat, Afghanistan)
     - **Arachosia** (modern Kandahar, Afghanistan)
     - **Gedrosia** (modern Baluchistan, Pakistan/Iran)
     - **Paropamisadae** (modern Kabul / Gandhara valley, Afghanistan).
  2. **500 War Elephants:** In exchange, Chandragupta gifted Seleucus **500 trained war elephants**, which proved decisive in Seleucus\' victory at the Battle of Ipsus (301 BCE) in Phrygia.
  3. **Matrimonial Alliance (*Epigamia*):** A dynastic marriage alliance was concluded between the royal families.
  4. **Diplomatic Relations:** Seleucus dispatched **Megasthenes** as a permanent resident ambassador to the Mauryan capital at Pataliputra.

### 3. Geographical Extent of Chandragupta\'s Empire
- **North-West:** Reached the natural defensive barrier of the **Hindukush Mountains** (the scientific frontier of India).
- **West:** Stretched across Gujarat and Saurashtra (confirmed by the Junagadh rock inscription of Rudradaman, recording that Chandragupta\'s governor *Pushyagupta* constructed the **Sudarshana Lake**).
- **East:** Extended across the Gangetic valley to the Bay of Bengal.
- **South:** Extended into the northern Deccan plateau (Karnataka).

### 4. Later Jain Tradition & Death (Historiographical Context)
- According to later Jain texts (*Parishishtaparvan, Brihatkathakosha*) and 7th–12th century epigraphs at **Shravanabelagola (Karnataka)**:
  - Chandragupta abdicated his imperial throne in favor of his son Bindusara.
  - Converted to Jainism and accompanied pontiff **Bhadrabahu** to the south during the 12-year Magadhan famine.
  - Ended his life through voluntary spiritual fasting unto death (**Sallekhana**) on Chandragiri hill at Shravanabelagola.
  - *(Historiographical Note: While widely celebrated in traditional Jain history, this account was recorded several centuries later and lacks direct contemporary 3rd Century BCE epigraphic corroboration)*.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Key Examination Anchors & Traps',
        body: `### Critical Exam Distinctions
- **4 Ceded Satrapies:** Aria (Herat), Arachosia (Kandahar), Gedrosia (Baluchistan), Paropamisadae (Kabul).
- **Greek Names:** Chandragupta = *Sandrokottos / Androcottus*; Bindusara = *Amitrochates / Amitraghata*.
- **Sudarshana Lake:** Built by **Pushyagupta** (governor of Chandragupta Maurya) in Saurashtra (Gujarat); later repaired by Tushaspha (Ashoka), Suvisakha (Rudradaman I), and Chakrapalita (Skandagupta).`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-22-01',
        statement: 'Chandragupta Maurya established the Mauryan Empire c. 321 BCE and concluded a peace treaty with Seleucus I Nicator in 305 BCE, gaining the satrapies of Aria, Arachosia, Gedrosia, and Paropamisadae in exchange for 500 war elephants.',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Appian (Syrian Wars), Strabo (Geographica) & NCERT Class 11/12',
        excerpt: 'Seleucus ceded the satrapies of Aria, Arachosia, Gedrosia, and Paropamisadai to Chandragupta Maurya, receiving 500 war elephants and establishing diplomatic ties through Megasthenes.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Foundation of Mauryan Empire & Seleucid Treaty',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'GEOPOLITICAL_PRECISION',
        notes: 'Terms of 305 BCE treaty, Sudarshana lake inscription, and territorial extent.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Chandragupta Maurya & Seleucid Conflict',
        relevance: 'HIGH',
        priority: 'HIGH',
        requiredDepth: 'SATELLITE_REGIONS_AND_RULERS',
        notes: 'Sudarshana lake construction (Pushyagupta) and 4 satrapies.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Chandragupta Maurya (321 BCE) | Overthrew Nandas with Chanakya | Defeated Seleucus I (305 BCE) $\rightarrow$ Ceded Aria (Herat), Arachosia (Kandahar), Gedrosia (Baluchistan), Paropamisadae (Kabul) | Gifted 500 war elephants | Ambassador = Megasthenes | Sudarshana Lake = Pushyagupta | Death = Sallekhana at Shravanabelagola (Jain tradition).',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which ancient reservoir in Saurashtra (Gujarat) was originally constructed during the reign of Chandragupta Maurya by his provincial governor Pushyagupta Vaishya?',
        options: ['Sudarshana Lake', 'Bhojtal Reservoir', 'Pushkar Lake', 'Anasagar Lake'],
        correctAnswer: 'Sudarshana Lake',
        explanation: 'The Junagadh Rock Inscription of Saka ruler Rudradaman I (150 CE) explicitly records that the Sudarshana Lake was originally constructed by Pushyagupta Vaishya, the Rashtriya (provincial governor) of Chandragupta Maurya.',
        trapExplanation: 'Bhojtal was built by Paramara King Bhoja in MP; Anasagar was built by Arnoraja Chauhan in Ajmer.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-HIST-23',
    slug: 'bindusara-amitraghata-and-imperial-continuity',
    title: 'Bindusara Amitraghata & Imperial Continuity',
    shortDefinition: 'The reign of Bindusara (c. 297–273 BCE), the Greek title Amitraghata, preservation of the empire, diplomatic exchanges with Hellenistic rulers, and patronage of the Ajivika sect.',
    difficulty: 'INTERMEDIATE',
    order: 23,
    topicSlug: 'mauryan-sources-and-imperial-foundation',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Sovereign Bridge: Reign of Bindusara (c. 297–273 BCE)',
        body: `Following Chandragupta\'s abdication, his son **Bindusara** ascended the Mauryan throne (c. 297–273 BCE). In classical Greek texts, Bindusara is known by the epithet **Amitrochates** or **Allitrochades**, representing the Sanskrit title **Amitraghata** ("Slayer of Foes" or "Destroyer of Enemies").

While historical records for Bindusara are sparser than those for Chandragupta and Ashoka, his 24-year reign was pivotal for **preserving imperial territorial integrity, consolidating peninsular control, and maintaining diplomatic ties with the Hellenistic Mediterranean world**.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Diplomatic Exchanges, Southern Campaigns & Sectarian Affiliation',
        body: `### 1. Diplomatic Relations with the Hellenistic Kingdoms
- **Seleucid Empire (Syria):**
  - King **Antiochus I Soter** maintained cordial relations with Bindusara.
  - According to classical author Athenaeus, Bindusara wrote to Antiochus I requesting three items: **sweet wine, dried figs, and a Greek philosopher/sophist**. Antiochus sent the wine and figs, but replied politely that *"Greek law does not permit philosophers to be bought and sold."*
  - Antiochus I replaced Megasthenes by sending **Deimachus** as ambassador to Pataliputra.
- **Ptolemaic Egypt:**
  - King **Ptolemy II Philadelphus** sent an ambassador named **Dionysius** to the Mauryan court.

### 2. Territorial Consolidation & Suppression of Rebellions
- Tibetan historian Taranatha (16th Century CE) credits Chanakya and Bindusara with conquering the territory between the eastern and western seas (the Deccan peninsula), maintaining all territories except Kalinga and the extreme southern kingdoms (Cholas, Pandyas, Cheras, Satyaputras).
- Buddhist texts (*Divyavadana*) record that when a violent revolt broke out in the provincial capital of **Taxila (Uttarpatha)** against oppressive royal ministers, Bindusara dispatched his son **Prince Ashoka** (then governor of Ujjain), who successfully pacified the region without bloodshed.

### 3. Religious Patronage: The Ajivika Sect
- Unlike his father (Jain tradition) and his son (Buddhism), Bindusara patronized the **Ajivika sect** (founded by Makkhali Gosala, propounding *Niyati* / determinism).
- An Ajivika fortune-teller named **Pingalavatsa** (or *Janasana*) resided at Bindusara\'s court and famously prophesied that Prince Ashoka would become the supreme sovereign of India.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Key Examination Invariants & Traps',
        body: `### Critical Exam Anchors
- **Greek Title:** Bindusara = *Amitrochates / Amitraghata* (Destroyer of Foes).
- **Ambassadors:** Seleucid ambassador = **Deimachus** (under Bindusara) vs **Megasthenes** (under Chandragupta). Egyptian ambassador = **Dionysius**.
- **Ajivika Court Astrologer:** **Pingalavatsa** at Bindusara\'s court.
- **Revolt at Taxila:** Suppressed by **Prince Ashoka** during Bindusara\'s reign.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-23-01',
        statement: 'Bindusara (Amitraghata) maintained the territorial integrity of the Mauryan Empire, hosted Hellenistic ambassadors Deimachus and Dionysius, and patronized the Ajivika sect.',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Athenaeus (Deipnosophistae), Divyavadana & NCERT Class 11',
        excerpt: 'Bindusara, titled Amitraghata, maintained diplomatic contact with Antiochus I (who sent Deimachus) and Ptolemy II (who sent Dionysius), and patronized Ajivika philosophers.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Bindusara & Hellenistic Foreign Relations',
        relevance: 'MEDIUM',
        priority: 'STANDARD',
        requiredDepth: 'DIPLOMATIC_CONTACTS',
        notes: 'Greek ambassadors (Deimachus, Dionysius) and Ajivika sect patronage.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Pre-Ashokan Mauryan Chronology',
        relevance: 'HIGH',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_PRECISION',
        notes: 'Titles (Amitraghata) and Taxila pacification by Prince Ashoka.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Bindusara (297–273 BCE) | Title = Amitraghata (Amitrochates) | Ambassadors = Deimachus (Syria), Dionysius (Egypt) | Requested wine, figs, philosopher | Religion = Ajivika (Pingalavatsa) | Suppressed Taxila rebellion via Prince Ashoka.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which Greek ambassador was dispatched by Seleucid King Antiochus I Soter to the court of Mauryan Emperor Bindusara at Pataliputra?',
        options: ['Megasthenes', 'Deimachus', 'Dionysius', 'Heliodorus'],
        correctAnswer: 'Deimachus',
        explanation: 'Deimachus was sent by Syrian Seleucid King Antiochus I to the court of Bindusara, succeeding Megasthenes who had served at Chandragupta\'s court.',
        trapExplanation: 'Megasthenes was under Chandragupta; Dionysius was from Ptolemaic Egypt; Heliodorus was at the Sunga court in Vidisha centuries later.',
        difficulty: 'EASY',
      },
    ],
  },

  // =========================================================================
  // TOPIC 72: Mauryan Administration, Economy & Society
  // =========================================================================
  {
    id: 'CON-HIST-24',
    slug: 'mauryan-imperial-administration-centre-provinces-officials-and-control',
    title: 'Mauryan Imperial Administration: Centralization, Bureaucracy & Espionage',
    shortDefinition: 'The administrative architecture of the Mauryan Empire: central monarchy, Mantriparishad, Tirthas and Adhyakshas, provincial administration, Megasthenes\' municipal boards, and the espionage network.',
    difficulty: 'ADVANCED',
    order: 24,
    topicSlug: 'mauryan-administration-and-economy',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Machinery of an Imperial Super-State',
        body: `The Mauryan Empire established South Asia\'s first **highly organized, centralized bureaucratic imperial administration**. 

To govern a massive continental territory spanning diverse ecological and cultural zones, the Mauryas created a multi-tiered administrative structure combining **supreme central monarchical authority, professional salaried civil officials, provincial royal viceroys, and a pervasive intelligence network**.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Administrative Architecture: From Imperial Palace to Village',
        body: `### 1. Central Government & High Functionaries
- **The King:** The supreme executive, legislative, judicial, and military head of the state. Guided by the principle of royal paternalism (reflected in Ashoka\'s declaration: *"All men are my children"*).
- **Mantriparishad (Council of Ministers):** Advisory council assisting the king in daily governance, war policy, and official appointments.
- **Top Bureaucrats (*Tirthas* — 18 Highest Officials):**
  - *Mantrin:* Prime Minister / Chief Adviser.
  - *Purohita:* Chief Priest.
  - *Senapati:* Supreme Commander of the Armed Forces.
  - *Yuvaraja:* Crown Prince.
  - **Samaharta:** **Chief Collector General of Revenue** (responsible for assessing taxes across the entire empire).
  - **Sannidhata:** **Chief Superintendent of the Royal Treasury and Storehouses**.
- **Superintendents of Departments (*Adhyakshas* — 27 Departmental Heads):**
  - *Sitadhyaksha:* Superintendent of Crown Agricultural Lands.
  - *Pautavadhyaksha:* Superintendent of Weights and Measures.
  - *Panyadhyaksha:* Superintendent of Commerce and Market Prices.
  - *Lavanadhyaksha:* Superintendent of Salt (State Monopoly).
  - *Suradhyaksha:* Superintendent of Liquor and Distilleries.
  - *Mudradhyaksha:* Superintendent of Passports and Border Control.
  - *Akaradhyaksha:* Superintendent of Mines.
- **Salaried Bureaucracy:** Officials were paid cash salaries in silver **Panas** (ranging from 48,000 Panas for ministers to 60 Panas for entry-level clerks annually).

### 2. Provincial & District Administration
- **Five Great Provinces (*Chakras*):**
  1. **Uttarpatha (Northern Province):** Capital at **Taxila** (controlled northwestern frontier and Central Asian trade).
  2. **Avantiratha (Western Province):** Capital at **Ujjain** (controlled Malwa and western ports like Bharuch).
  3. **Dakshinapatha (Southern Province):** Capital at **Suvarnagiri** (near gold mines of Karnataka).
  4. **Prachya / Magadha (Central/Eastern Province):** Capital at **Pataliputra** (imperial headquarters).
  5. **Kalinga (Eastern Coastal Province):** Capital at **Tosali / Dhauli** (added by Ashoka).
- **Provincial Viceroys (*Kumaras / Aryaputras*):** Governed by royal princes assisted by provincial ministers (*Mahamatras*).
- **District Level (*Ahara / Vishaya*):**
  - Headed by **Rajukas** (responsible for land survey, revenue assessment, and judicial administration, empowered extensively by Ashoka).
  - Assisted by **Yuktas** (subordinate revenue and accounting clerks).
- **Village Administration (Base Unit):**
  - Headed by the **Gramika** (village headman chosen by village elders).
  - Supervised by the **Gopa** (overseeing clusters of 5 to 10 villages, keeping registers of land, livestock, and population) and **Sthanika** (overseeing a quarter of a district).

### 3. Urban Municipal Administration (Pataliputra Model)
According to Megasthenes, the administration of Pataliputra was managed by a **City Commission of 30 members divided into 6 Committees of 5 members each**:
1. *First Committee:* Industrial arts and craft regulation.
2. *Second Committee:* Care, accommodation, and surveillance of foreign visitors.
3. *Third Committee:* Registration of vital statistics (births and deaths for tax census).
4. *Fourth Committee:* Trade, commerce, and inspection of weights and measures.
5. *Fifth Committee:* Supervision of manufactured goods and sale of old vs new products.
6. *Sixth Committee:* Collection of the **1/10th Sales Tax** on goods sold (evasion punishable by death).

### 4. The Intelligence & Espionage Network (*Gudhapurushas*)
- The *Arthashastra* details a pervasive intelligence apparatus headed by the *Mahamatyapasarpa*:
  - **Sanstha (Stationary Spies):** Operating covertly inside institutions as monks, ascetics, merchants, or courtesans.
  - **Sanchara (Roving / Mobile Agents):** Disguised wandering spies gathering intelligence across provincial borders.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Key Examination Invariants & Traps',
        body: `### Crucial Exam Distinctions
- **Samaharta vs Sannidhata:** **Samaharta** = *Tax Collector General* (assesses revenue); **Sannidhata** = *Treasury Custodian* (stores cash/grain).
- **Sitadhyaksha:** Officer in charge of **Crown agricultural lands (*Sita*)**, not private lands.
- **Rajukas:** Mauryan district officers handling both **revenue survey and rural justice** (explicitly praised in Ashoka\'s Pillar Edict IV).
- **Municipal Committees:** 6 committees with 5 members each = **30 members total** in Pataliputra.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-24-01',
        statement: 'Mauryan administration was organized hierarchically under the King and Mantriparishad, with Samaharta managing revenue, Rajukas administering districts, and Pataliputra governed by 6 municipal committees of 5 members each.',
        claimType: 'ADMINISTRATIVE_HISTORY',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Arthashastra (Book II), Megasthenes (Fragment XXVI) & Ashokan Pillar Edict IV',
        excerpt: 'The empire was partitioned into provinces under Kumaras, districts under Rajukas and Yuktas, and cities governed by boards of thirty, with revenue assessed by the Samaharta.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Mauryan Administration & Municipal Governance',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'STRUCTURAL_HIERARCHY',
        notes: 'Roles of Samaharta, Sannidhata, Rajukas, and Megasthenes 6 municipal committees.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims & Mains: Mauryan Administrative Hierarchy',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'FUNCTIONARY_TERMINOLOGY',
        notes: 'Departmental Adhyakshas (Sitadhyaksha, Panyadhyaksha) and provincial capitals.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'King $\rightarrow$ Mantriparishad | Revenue: Samaharta (Collector), Sannidhata (Treasurer) | Crown Land = Sitadhyaksha | 5 Provinces: Taxila (North), Ujjain (West), Suvarnagiri (South), Tosali (East), Pataliputra (Centre) | District = Rajukas + Yuktas | Municipal = 30 members (6 boards $\\times$ 5 members) | Spies = Gudhapurushas (Sanstha + Sanchara).',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'In the administrative system described in Kautilya\'s Arthashastra, which official held the supreme responsibility as the Collector-General of Revenue for the entire empire?',
        options: ['Sannidhata', 'Samaharta', 'Sitadhyaksha', 'Pautavadhyaksha'],
        correctAnswer: 'Samaharta',
        explanation: 'In the Arthashastra, the Samaharta was the Chief Collector General of Revenue responsible for assessment and collection of all imperial revenues across agriculture, mines, forests, and customs.',
        trapExplanation: 'Sannidhata was the Treasurer who guarded the revenue; Sitadhyaksha managed crown lands; Pautavadhyaksha supervised weights and measures.',
        difficulty: 'MEDIUM',
      },
    ],
  },

  {
    id: 'CON-HIST-25',
    slug: 'mauryan-economy-revenue-trade-and-state-activity',
    title: 'Mauryan Economy, Revenue System, Trade & State Enterprise',
    shortDefinition: 'The economic foundations of the Mauryan state: crown lands (Sita) versus private peasant lands (Bhaga), irrigation taxes, state monopolies over mining and forests, guild commerce, and subcontinental monetization.',
    difficulty: 'ADVANCED',
    order: 25,
    topicSlug: 'mauryan-administration-and-economy',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Imperial Political Economy: Agrarian Base & State Regulation',
        body: `The Mauryan economy was an **agrarian-based state system** supported by thriving internal and maritime commerce, deep monetization, and strategic state enterprise.

Rather than exercising total totalitarian control over all economic life, the Mauryan state pursued a **selective interventionist model**: directly managing critical strategic sectors (**crown agricultural farms, mines, forests, armaments, and salt monopolies**) while heavily taxing and regulating private peasant agriculture, artisan guilds, and merchant caravans.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Agrarian Base, Revenue Streams & Commercial Arteries',
        body: `### 1. Dual Agrarian Structure: Crown Lands (*Sita*) vs. Peasant Lands (*Bhaga*)
- **Sita Lands (Direct State Agriculture):** Crown lands cultivated under the supervision of the *Sitadhyaksha* using hired laborers, state-owned slaves (*Dasas*), and prisoners of war. All output flowed directly into state granaries.
- **Rashtra / Private Peasant Lands:** Independent peasant villages where farmers owned/cultivated land and paid regular taxes to the state:
  - **Bhaga (Land Revenue):** The standard royal share, traditionally **1/6th (*Shadbhaga*)**, but often raised to 1/4th in fertile Gangetic zones.
  - **Bali:** An additional religious/tributary land levy.
  - **Udakabhaga (Water / Irrigation Cess):** Ranging from 1/5th to 1/3rd of the produce levied on state-provided irrigation networks (e.g. Sudarshana Lake).
  - **Hiranya:** Direct tax paid in cash on specific cash crops or livestock.
  - **Vishti:** Compulsory unpaid labor demanded from village artisans and peasants for public state works.

### 2. State Monopolies & Strategic Enterprises
- **Mining & Metallurgy (*Akara*):** Complete state monopoly supervised by the *Akaradhyaksha*. Mines were regarded as the source of state treasury: *"From the mines comes the treasury; from the treasury comes the army; with treasury and army the earth is acquired"* (*Arthashastra*).
- **Salt Monopoly (*Lavana*):** Salt production and licensing were state-controlled.
- **Forests (*Kupa*):** Classified into timber forests and **Elephant Forests (*Hastivana*)**, protected by severe penalties against unauthorized poaching.
- **Liquor & Prostitution:** Strictly supervised and taxed by the *Suradhyaksha* and *Ganikadhyaksha*.

### 3. Trade Routes, Guilds (*Srenis*) & Monetization
- **Imperial Trade Highways:**
  - *The Royal Highway (Northern Uttarapatha):* Stretched from Pushkalavati/Taxila across the Indo-Gangetic plain through Mathura, Kausambi, Varanasi, and Pataliputra to the delta port of **Tamralipti** in Bengal. (This corridor was the direct precursor to Sher Shah Suri\'s Grand Trunk Road).
  - *Dakshinapatha:* Connected northern hubs to western ports like **Bharukachchha / Barygaza (Bharuch)** and southern gold centers.
- **Monetary System:** Silver **Punch-Marked Coins (*Pana / Karshapana*)** and copper coins (*Mashaka, Kakini*) circulated across the entire subcontinent, standardizing prices and market transactions. Later Mauryan coins show silver debasement, indicating fiscal stress.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'HISTORICAL_ANALYSIS',
        title: 'Historiographical Nuance: Totalitarianism vs. Differentiated Control',
        body: `### Debunking the Myth of Total State Control
Early nationalist and colonial historians often depicted the Mauryan state as an all-encompassing totalitarian police state controlling every economic transaction.

Modern historians (notably **Romila Thapar** in *The Mauryas Revisited* and **Gerard Fussman**) demonstrate that Mauryan control was **geographically differentiated**:
1. **Metropolitan / Core Zone (Magadha & Ganga Valley):** Highly centralized direct state supervision over agriculture, trade, and craft guilds.
2. **Core Resource Zones (Karnataka goldfields, Kalinga ports, Malwa trade routes):** Controlled through fortified garrisons and communication outposts.
3. **Peripheral / Forest Zones (Tribal hinterlands of central and eastern India):** Light indirect control; left largely autonomous as long as they paid tribute and did not disrupt imperial highways.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Key Examination Anchors & Traps',
        body: `### Key Exam Anchors
- **Sita vs Bhaga:** **Sita** = Income/yield from *crown lands*; **Bhaga** = Tax from *private peasant cultivation*.
- **Rummindei Inscription:** Emperor Ashoka visited Buddha\'s birthplace at Lumbini and **exempted it from Bali (religious tax) and reduced Bhaga from 1/6th to 1/8th (Atthabhagiya)**.
- **Major Seaport:** **Tamralipti** (in modern West Bengal) was the primary eastern international seaport during the Mauryan epoch.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-25-01',
        statement: 'The Mauryan economy featured a dual agrarian system of crown lands (Sita) and taxed peasant holdings (Bhaga), state monopolies over mining and forests, punch-marked silver coinage, and differentiated imperial control.',
        claimType: 'ECONOMIC_HISTORY',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'R.S. Sharma, Perspectives in Social and Economic History of Early India & Romila Thapar',
        excerpt: 'State revenue drew from crown lands (Sita), peasant land tax (Bhaga), mining monopolies, and trade tolls, with control varying between core Gangetic areas and peripheral zones.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Mauryan Economy, Revenue & Differentiated Imperial Control',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'ANALYTICAL_SYNTHESIS',
        notes: 'Sita vs Bhaga, Rummindei tax relief, and Romila Thapar\'s differentiated control model.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Ancient Economy & Coinage',
        relevance: 'HIGH',
        priority: 'HIGH',
        requiredDepth: 'TAX_TERMINOLOGY',
        notes: 'Terms: Sita, Bhaga, Bali, Hiranya, Udakabhaga, and Tamralipti port.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Agrarian: Sita (Crown land) vs Bhaga (1/6th peasant tax) | Bali = religious levy | Udakabhaga = water tax | Hiranya = cash tax | Vishti = forced labor | Monopolies = Mines (Akara), Salt, Forests | Coin = Silver Pana/Karshapana | Port = Tamralipti | Rummindei = Bali remitted, Bhaga reduced to 1/8th.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'In which famous epigraphic edict did Emperor Ashoka record specific fiscal concessions, completely remitting the "Bali" tax and reducing the "Bhaga" (land revenue) to one-eighth for the local inhabitants?',
        options: ['Rummindei Minor Pillar Inscription', 'Major Rock Edict XIII at Girnar', 'Bhabru Minor Rock Edict', 'Allahabad Pillar Inscription'],
        correctAnswer: 'Rummindei Minor Pillar Inscription',
        explanation: 'The Rummindei Minor Pillar Inscription (Lumbini, Nepal) commemorates Ashoka\'s royal pilgrimage to Buddha\'s birthplace in his 20th regnal year, declaring the village free of Bali tax and reducing its Bhaga to 1/8th (atthabhagiya).',
        trapExplanation: 'Rock Edict XIII describes Kalinga; Bhabru affirms faith in the Buddhist Triratna; Allahabad pillar contains Ashoka\'s schism edict alongside later Samudragupta and Jahangir inscriptions.',
        difficulty: 'MEDIUM',
      },
    ],
  },

  // =========================================================================
  // TOPIC 73: Ashoka: Emperor, Inscriptions & Dhamma
  // =========================================================================
  {
    id: 'CON-HIST-26',
    slug: 'ashokas-accession-kalinga-war-and-transformation-of-imperial-policy',
    title: 'Ashoka\'s Accession, Kalinga War & The Transformation of Imperial Policy',
    shortDefinition: 'Ashoka\'s accession (c. 269 BCE), the 4-year interregnum debate, the Kalinga War (c. 261 BCE) recorded in Major Rock Edict XIII, and the transition from Bherighosha (war drums) to Dhammaghosha (sound of Dhamma).',
    difficulty: 'INTERMEDIATE',
    order: 26,
    topicSlug: 'ashoka-inscriptions-and-dhamma',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Sovereign Watershed: From Accession to Kalinga',
        body: `**Ashoka the Great** (reigned c. 269–232 BCE) is one of world history\'s most extraordinary sovereigns. 

Ascending the Mauryan throne around **269 BCE** after an apparent four-year succession struggle, his conquest of **Kalinga (modern coastal Odisha) in his 8th regnal year (c. 261 BCE)** caused a profound moral and ideological transformation, leading him to renounce aggressive military conquest in favor of moral persuasion (**Dhamma**).`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Accession, The Kalinga War & Primary Inscriptional Evidence',
        body: `### 1. Succession & The 4-Year Interregnum (c. 273–269 BCE)
- Bindusara died around 273 BCE, but Ashoka\'s formal coronation (*Abhisheka*) occurred four years later in **269 BCE**.
- **The Fratricidal Succession Lore vs. Epigraphic Evidence:**
  - Later Sri Lankan Buddhist chronicles (*Mahavamsa, Dipavamsa*) claim Ashoka killed **99 half-brothers**, sparing only his younger uterine brother *Tissa (Vigatasoka)*, to secure the throne with the aid of minister *Radhagupta*.
  - **Contemporary Epigraphic Reality:** Ashoka's own contemporary inscriptions (**Major Rock Edict V**) explicitly instruct Dhamma Mahamatras to attend to the households and welfare of his living brothers and sisters in Pataliputra and provincial cities (*"bhatinam cha me bhaginīnam cha"*). This demonstrates that the 99-brother complete massacre is an uncorroborated later theological motif designed to dramatically contrast "Wicked Ashoka" (*Chandashoka*) with "Righteous Ashoka" (*Dhammashoka*).

### 2. The Kalinga War (c. 261 BCE / 8th Regnal Year)
- **Geopolitical Motivation:** Kalinga (modern coastal Odisha) occupied a strategic position controlling maritime trade routes with Southeast Asia (Suvarnabhumi) and overland roads to the Deccan. It was the only independent pocket within the Mauryan perimeter.
- **The Carnage & Casualty Figures (Major Rock Edict XIII):**
  - Ashoka records the devastation with unmatched directness:
    - **150,000 people were deported / captured.**
    - **100,000 people were slain in battle.**
    - Many times that number perished from famine, disease, and collateral dislocation.

### 3. The Moral Crisis & Transition: *Bherighosha* to *Dhammaghosha*
- **Major Rock Edict XIII (Direct Inscriptional Testimony):**
  - *"Directly after the Kalinga war, the Beloved of the Gods felt a strong inclination towards Dhamma, a love for Dhamma, and for instruction in Dhamma. Now the Beloved of the Gods sorrows for having conquered Kalinga... The slaughter, death, and carrying away of people that take place there are considered very grievous and painful by the Beloved of the Gods."*
  - **Bherighosha to Dhammaghosha (MRE IV):** The sound of the war drum (**Bherighosha**) was permanently replaced by the sound of moral law (**Dhammaghosha**).
  - **Dhammavijaya (Conquest by Righteousness):** Replaced military conquest (*Digvijaya / Asuravijaya*) with moral conquest, dispatching peace and welfare embassies across South Asia and the Hellenistic kingdoms.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'HISTORICAL_ANALYSIS',
        title: 'Historiographical Reality: Did Ashoka Become a Total Pacifist?',
        body: `### Debunking the Myth of Total Disarmament
A widespread textbook misconception claims that after Kalinga, Ashoka became an absolute pacifist who disbanded the army and abolished state violence.

Historical and epigraphic evidence decisively disproves this:
1. **Retention of the Standing Army:** Ashoka **never disbanded his imperial army**. He renounced *aggressive unprovoked wars of expansion*, but retained the armed forces to preserve domestic law, order, and territorial frontiers.
2. **Stern Warning to Forest Tribes (*Atavikas* in MRE XIII):** Ashoka explicitly warned the unruly forest tribes that while he preferred forgiveness, *"the King possesses power even in his remorse, and they should repent lest they be slain."*
3. **Retention of Capital Punishment:** Ashoka did **not abolish the death penalty**, though in Pillar Edict IV he introduced a humane 3-day reprieve for condemned prisoners to appeal or spiritually prepare for death.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Key Examination Anchors & Traps',
        body: `### Critical Exam Traps
- **Primary Kalinga Edict:** The Kalinga war is recorded in **Major Rock Edict XIII** (not in the Separate Kalinga Edicts at Dhauli/Jaugada, where MRE XI–XIII were omitted to avoid painful memories for the newly conquered Kalinga subjects).
- **Abhisheka vs Accession:** Accession = c. 273 BCE; Coronation (*Abhisheka*) = c. 269 BCE; Kalinga War = c. 261 BCE (8th regnal year).
- **Pacifism Boundary:** Ashoka abandoned aggressive conquest (*Dhammavijaya* instead of *Digvijaya*), but **retained the standing army and the death penalty**.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-26-01',
        statement: 'Ashoka conquered Kalinga in his 8th regnal year (c. 261 BCE), recording the 100,000 casualties and his subsequent transition from Bherighosha to Dhammaghosha in Major Rock Edict XIII, while retaining his standing army and state authority.',
        claimType: 'EPIGRAPHIC_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Major Rock Edict XIII (Girnar, Kalsi, Shahbazgarhi) & NCERT Class 12',
        excerpt: 'Major Rock Edict XIII records that 150,000 were captured, 100,000 slain, and Ashoka turned to Dhammavijaya while warning the forest tribes of royal coercive power.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Kalinga War, Major Rock Edict XIII & Transformation of Policy',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'EPIGRAPHIC_AND_HISTORIOGRAPHICAL',
        notes: 'MRE XIII text, Bherighosha to Dhammaghosha, and realistic limits of Ashokan pacifism.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Ashokan Chronology & Kalinga War Edicts',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'CHRONOLOGY_AND_EDICT_NUMBERS',
        notes: 'MRE XIII location, regnal years (8th year Kalinga, 20th year Lumbini).',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Coronation = 269 BCE | Kalinga War = 261 BCE (8th regnal year) | Inscription = Major Rock Edict XIII | Casualties = 100,000 dead, 150,000 deported | Shift = Bherighosha (war drums) $\rightarrow$ Dhammaghosha (Dhamma sound) | Dhammavijaya = Moral conquest | Did NOT abolish army or death penalty.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'In which famous inscriptional edict did Emperor Ashoka provide a direct, remorseful account of the devastating human casualties of the Kalinga War and announce his transition from Bherighosha to Dhammaghosha?',
        options: ['Major Rock Edict XIII', 'Major Rock Edict I', 'Major Pillar Edict VII', 'Bairat-Bhabru Minor Rock Edict'],
        correctAnswer: 'Major Rock Edict XIII',
        explanation: 'Major Rock Edict XIII contains Ashoka\'s personal, moving testimony of the horrors of the Kalinga War (100,000 killed, 150,000 captured) and his declaration of Dhammavijaya (conquest through moral law).',
        trapExplanation: 'MRE I prohibits animal sacrifice; MPE VII summarizes his Dhamma works; Bhabru expresses devotion to the Buddhist Triratna.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-HIST-27',
    slug: 'ashokas-dhamma-ethics-tolerance-and-welfare',
    title: 'Ashoka\'s Dhamma: Ethical Code, Religious Harmony & Moral Governance',
    shortDefinition: 'In-depth analysis of Ashoka\'s Dhamma as a universal civic and moral ethic, distinguished from Buddhist monastic doctrine, centered on Ahimsa, filial respect, humane social conduct, and religious tolerance (Major Rock Edict XII).',
    difficulty: 'ADVANCED',
    order: 27,
    topicSlug: 'ashoka-inscriptions-and-dhamma',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'What Was Ashoka\'s Dhamma? The Great Imperial Synthesis',
        body: `One of the most crucial concepts in ancient Indian history is **Ashoka\'s Dhamma** (Prakrit form of the Sanskrit *Dharma*).

**Dhamma was NOT a formal religion, a Buddhist theological catechism, or a monastic doctrine.** Rather, it was a **universal, secular civic ethic and code of moral governance** designed by Ashoka to preserve social harmony, religious peace, and ethical responsibility across a vast, multi-cultural empire.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'HISTORICAL_ANALYSIS',
        title: 'Ashoka\'s Personal Buddhism vs. The Public Policy of Dhamma',
        body: `### The Crucial Historiographical Distinction
To understand Ashoka, historians distinguish between two separate spheres:
1. **Ashoka\'s Personal Faith (Buddhism):** In personal life, Ashoka was an ardent Buddhist (*Upasaka* / lay devotee). He went on pilgrimage to Bodh Gaya and Lumbini, patronized the Sangha, and in the **Bhabru / Bairat Edict**, explicitly proclaimed his reverence for the **Buddha, the Dhamma, and the Sangha (The Triratna)**.
2. **Ashoka\'s Public State Policy (Dhamma):** In his public rock and pillar edicts addressed to the entire empire, Ashoka **never mentions the Four Noble Truths, the Eightfold Path, Pratityasamutpada, or Nirvana**. Instead, his public Dhamma was formulated in universal ethical values acceptable to all subjects—Brahmanas, Buddhists, Jains, Ajivikas, and householders alike.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'The Core Precepts of Ashoka\'s Dhamma',
        body: `From a comprehensive analysis of the Major Rock and Pillar Edicts, Ashoka\'s Dhamma consists of four fundamental pillars:

### 1. Ahimsa (Non-Violence & Protection of Life)
- Prohibition and dramatic reduction of animal slaughter in the royal kitchen (MRE I reduced daily slaughter from hundreds of birds/deer to two peacocks and one deer, eventually abolishing it completely).
- Banned sacrificial slaughter of animals (*Pashu-bali*) in capitals.
- In **Pillar Edict V**, Ashoka issued a comprehensive game law listing protected species (parrots, geese, bats, tortoises, queen ants) and banning the burning of forests or castration of animals on sacred days.

### 2. Social Ethics, Filial Piety & Humane Treatment
- **Mātā-pitusu sussūsā:** Deep obedience and reverence to parents, elders, teachers, and preceptors (MRE III, IV, VII).
- **Humane Treatment of the Subordinate:** Kindness and just treatment towards servants, slaves (**Dasa-Bhatakas / Dasa-Karmakaras**), prisoners, and the impoverished (MRE IX, XI).
- **Generosity (*Dāna*):** Liberality towards friends, acquaintances, ascetics (*Samanas*), and Brahmanas.
- **Moderation (*Aparavyatā & Aparabhāndatā*):** Moderation in expenditure and moderation in accumulating possessions (MRE III).

### 3. Universal Religious Concord (*Samavāya*) — Major Rock Edict XII
- **Major Rock Edict XII** contains the world\'s oldest and most profound royal declaration on religious tolerance:
  - *"The Beloved of the Gods does not value gifts or honors as much as the growth of the essential spirit of all religions (*Sara-vaddhi*)..."*
  - **Condemnation of Sectarian Chauvinism:** Condemned praising one\'s own religious sect (**Atmapasanda**) while disparaging others (**Parapasanda**) out of sectarian pride: *"Whosoever praises his own sect or disparages another\'s sect simply out of devotion to his own, severely damages his own sect."*
  - **Concord (*Samavāya*):** Concluded that concord alone is meritorious—that people should listen to and respect the doctrines professed by others.

### 4. Moral Self-Examination & Virtue
- Defined positive virtues (*Dayā* compassion, *Dāna* charity, *Sacca* truthfulness, *Soce* purity, *Mādave* gentleness, *Sādhave* goodness) in Pillar Edict II (*"Kiyam chu dhamme ti? Apasinave, bahu kayane..."* — *What is Dhamma? Little sin, many good deeds, compassion, charity, truth, and purity*).`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Key Examination Anchors & Traps',
        body: `### Critical Exam Traps
- **Religious Tolerance Edict:** Religious harmony, *Samavāya*, and condemnation of sectarianism are in **Major Rock Edict XII** (the most tested edict in UPSC/RAS).
- **Definition of Dhamma:** Found in **Major Pillar Edict II & VII** (*Apasinave, bahu kayane*).
- **Dhamma vs Buddhism:** Dhamma was **not Buddhism imposed on subjects**; it contained zero sectarian Buddhist theology, acting as a universal moral code.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-27-01',
        statement: 'Ashoka\'s Dhamma was a universal civic and ethical code distinct from Buddhist sectarian dogma, emphasizing Ahimsa, filial respect, humane treatment of servants, and mutual religious tolerance (Samavaya in Major Rock Edict XII).',
        claimType: 'PHILOSOPHICAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Major Rock Edicts I, III, VII, XII & Pillar Edicts II, VII',
        excerpt: 'Ashoka\'s Dhamma emphasized non-violence, respect for parents, humane treatment of slaves, and religious harmony in MRE XII (Samavaya eva sadhuh), without reciting Buddhist metaphysical tenets.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Philosophy and Content of Ashoka\'s Dhamma',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'DEEP_ANALYTICAL_RIGOR',
        notes: 'Difference between personal Buddhism and public Dhamma, MRE XII religious tolerance.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Mains Paper I: Ashoka\'s Dhamma & Major Rock Edict XII',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'STRUCTURED_POINTS',
        notes: 'Precepts of Dhamma: Ahimsa, Sara-vaddhi, Samavaya, and welfare measures.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Dhamma = Universal civic ethic (NOT Buddhist dogma) | Key Precepts: 1. Ahimsa (MRE I & PE V) | 2. Filial piety & kindness to slaves/servants (MRE IX/XI) | 3. Religious Tolerance (MRE XII: Samavaya / Concord, Atmapasanda vs Parapasanda) | 4. Definition (PE II: Apasinave, bahu kayane).',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which Major Rock Edict of Emperor Ashoka contains his celebrated declaration of religious tolerance, asserting that honoring other sects enhances one\'s own sect, and concluding with the famous phrase "Samavaya eva sadhuh" (Concord alone is commendable)?',
        options: ['Major Rock Edict XII', 'Major Rock Edict XIII', 'Major Rock Edict I', 'Major Rock Edict VIII'],
        correctAnswer: 'Major Rock Edict XII',
        explanation: 'Major Rock Edict XII is the world-renowned edict on religious harmony, in which Ashoka condemned sectarian pride (Atmapasanda) and taught that mutual understanding and concord (Samavaya) among different religious sects is the supreme virtue.',
        trapExplanation: 'MRE XIII deals with the Kalinga War; MRE I prohibits animal sacrifice; MRE VIII describes Dhamma-yatras.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-HIST-28',
    slug: 'ashokan-edicts-inscriptions-scripts-languages-and-historical-evidence',
    title: 'The Epigraphic Corpus: Major & Minor Edicts, Scripts, Languages & Geography',
    shortDefinition: 'The complete classification of Ashoka\'s inscriptional corpus, decipherment by James Prinsep (1837), linguistic and palaeographical geography (Brahmi, Kharosthi, Aramaic, Greek), and landmark edict locations.',
    difficulty: 'ADVANCED',
    order: 28,
    topicSlug: 'ashoka-inscriptions-and-dhamma',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Inscriptional Voice of an Empire: The Ashokan Corpus',
        body: `Emperor Ashoka was the **first monarch in Indian history to communicate directly with his subjects and posterity through monumental stone inscriptions** engraved on natural cliff faces, polished monolithic sandstone pillars, and rock-cut cave walls across the subcontinent.

These inscriptions provide an unprecedented contemporary window into Mauryan statecraft, administrative geography, ethics, and linguistic diversity.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Decipherment, Scripts, Languages & Geographical Matrix',
        body: `### 1. Decipherment & Royal Identification
- **James Prinsep (1837):** A founding genius of Indian epigraphy and mint-master of the Asiatic Society of Bengal, who successfully **deciphered the ancient Ashokan Brahmi script in 1837**.
- **The Identity Puzzle:** The inscriptions referred to the king as **Devanampiya Piyadassi** (*"Beloved of the Gods, He who regards everyone with affection"*).
- **The Breakthroughs:** In **1915, C. Beadon discovered the Maski Minor Rock Edict (Karnataka)**, which explicitly joined the title with the name: **"Devanampiya Asoka"**. Later discoveries at **Gujarra (MP), Nittur (Karnataka), and Udegolam (Karnataka)** confirmed that *Piyadassi* was Emperor Ashoka.

### 2. Multi-Lingual & Multi-Script Epigraphic Geography
Ashoka deliberately matched script and language to local populations:

| Region | Language Used | Script Used | Exemplary Inscriptional Sites |
| :--- | :--- | :--- | :--- |
| **Central, Eastern, Western & Southern India** | **Prakrit (Magadhi dialect)** | **Brahmi** (written left-to-right; ancestor of all modern Indian scripts) | Girnar, Kalsi, Sarnath, Dhauli, Sanchi, Maski, Bairat, Brahmagiri. |
| **North-Western Frontier (Pakistan)** | **Prakrit (North-Western dialect)** | **Kharosthi** (written right-to-left; derived from Aramaic) | **Shahbazgarhi** (Mardan district) & **Mansehra** (Hazara district). |
| **Afghanistan Frontier** | **Aramaic & Greek** (Bilingual / Bi-script) | **Aramaic & Greek Scripts** | **Kandahar (Shar-i-Kuna Bilingual Inscription)**, Laghman, Taxila. |

### 3. Master Classification of the Epigraphic Corpus
1. **14 Major Rock Edicts (MRE I to XIV):** Inscribed on massive boulders at the perimeter of the empire:
   - *Girnar* (Gujarat), *Kalsi* (Uttarakhand), *Sopara* (Maharashtra), *Yerragudi* (Andhra Pradesh), *Shahbazgarhi* & *Mansehra* (Pakistan).
   - *Kalinga Sites (Dhauli & Jaugada in Odisha):* MRE XI, XII, and XIII are omitted and replaced by the **Two Separate Kalinga Edicts** (addressing local judges and proclaiming *"All men are my children"*).
2. **Minor Rock Edicts (MRE):** Earliest inscriptions (issued in 10th–11th regnal year); personal religious tone:
   - *Maski, Gujarra, Nittur, Udegolam* (mentioning the name 'Ashoka').
   - **Bairat / Bhabru Edict (Viratnagar, Jaipur, Rajasthan):** Ashoka proclaims faith in the Buddhist *Triratna* (Buddha, Dhamma, Sangha) and recommends 7 specific Buddhist texts for study by monks and laypeople.
3. **7 Major Pillar Edicts (MPE I to VII):** Inscribed exclusively on tall, polished Chunar sandstone pillars in the Gangetic plain:
   - *Delhi-Topra & Delhi-Meerut* (both transported to Delhi by Sultan Firoz Shah Tughlaq in the 14th Century).
   - *Lauriya Nandangarh, Lauriya Araraj, Rampurva* (Champaran, Bihar).
   - *Allahabad-Kosam Pillar* (contains Ashoka\'s Schism Edict, Samudragupta\'s *Prayag Prashasti*, and Jahangir\'s inscription).
4. **Minor Pillar & Commemorative Inscriptions:**
   - *Rummindei Pillar (Nepal):* Marks Buddha\'s birthplace (tax exemption).
   - *Nigali Sagar (Nepal):* Records enlarging the stupa of Konakamana Buddha.
   - *Sarnath & Sanchi Pillars:* Schism Edicts warning monks against dividing the Sangha.
5. **Barabar Cave Inscriptions (Gaya, Bihar):** Four rock-cut caves (*Sudama, Lomas Rishi, Karan Chaupar, Visva Zopri*) dedicated by Ashoka in his 12th and 19th regnal years to the **Ajivika ascetics**.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Target Exam Anchors & Invariants',
        body: `### Key Exam Anchors (UPSC / RPSC)
- **Decipherer:** **James Prinsep (1837)**.
- **Name 'Ashoka' Edicts:** **Maski, Gujarra, Nittur, Udegolam** (Mnemonic: **MGNU**).
- **Kharosthi Sites:** **Shahbazgarhi and Mansehra** (written right-to-left).
- **Bilingual Greek-Aramaic Site:** **Kandahar (Shar-i-Kuna)**.
- **Rajasthan Edict:** **Bairat / Bhabru Minor Rock Edict** (found at Bairat/Viratnagar, Jaipur).
- **Transported Pillars:** Firoz Shah Tughlaq moved pillars from **Topra (Haryana)** and **Meerut (UP)** to Delhi.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-28-01',
        statement: 'Ashokan inscriptions were deciphered by James Prinsep in 1837; written in Brahmi, Kharosthi, Greek, and Aramaic scripts across 14 Major Rock Edicts, 7 Pillar Edicts, Minor Edicts (Maski, Bhabru), and Barabar cave dedications to Ajivikas.',
        claimType: 'EPIGRAPHIC_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'E. Hultzsch, Corpus Inscriptionum Indicarum (Vol. I) & NCERT Class 12',
        excerpt: 'James Prinsep deciphered Brahmi in 1837. Ashoka used Brahmi across India, Kharosthi at Shahbazgarhi/Mansehra, and Greek-Aramaic at Kandahar, with his name confirmed at Maski and Gujarra.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Ashokan Epigraphy, Scripts, Languages & Decipherment',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'GEOGRAPHICAL_AND_EPIGRAPHIC_RIGOR',
        notes: 'Prinsep decipherment, 4 scripts, Kandahar bilingual, and 4 name-bearing edicts.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims & Mains: Bairat / Bhabru Inscription of Rajasthan',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'HIGH_PRECISION_FACTS',
        notes: 'Bairat/Bhabru edict (discovery by Captain Burt, Triratna reference) and Maski.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Deciphered = James Prinsep (1837) | Scripts = Brahmi (L-to-R), Kharosthi (R-to-L: Shahbazgarhi/Mansehra), Greek & Aramaic (Kandahar) | Name Ashoka = Maski, Gujarra, Nittur, Udegolam | Rajasthan = Bairat/Bhabru (Triratna) | Pillars to Delhi = Topra & Meerut (by Firoz Shah Tughlaq) | Barabar Caves = Donated to Ajivikas.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'At which of the following archaeological sites was the celebrated Minor Rock Edict discovered in 1915 by C. Beadon that for the first time explicitly mentioned the personal name "Devanampiya Asoka" instead of merely the title "Piyadassi"?',
        options: ['Maski', 'Girnar', 'Kalsi', 'Sarnath'],
        correctAnswer: 'Maski',
        explanation: 'The Maski Minor Rock Edict in Raichur district (Karnataka) was discovered in 1915, containing the explicit text "Devanampiya Asoka", conclusively confirming that the epithet Piyadassi belonged to Ashoka Maurya.',
        trapExplanation: 'Girnar and Kalsi contain Major Rock Edicts referring to Devanampiya Piyadassi; Sarnath contains the Schism Pillar Edict.',
        difficulty: 'EASY',
      },
    ],
  },

  // =========================================================================
  // TOPIC 74: Ashokan State, Imperial Decline & Legacy
  // =========================================================================
  {
    id: 'CON-HIST-29',
    slug: 'ashokan-state-policy-mauryan-art-decline-and-historiography',
    title: 'Ashokan State Policy, Mauryan Art, Imperial Decline & Historiography',
    shortDefinition: 'Ashoka\'s welfare institutions (Dhamma Mahamatras, public works), Mauryan court art and polished stone pillars, multi-causal theories of Mauryan decline, and the 185 BCE Sunga coup.',
    difficulty: 'ADVANCED',
    order: 29,
    topicSlug: 'ashokan-state-decline-and-legacy',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Welfare Imperialism, Artistic Brilliance & The Dynamics of Decline',
        body: `In the later decades of his reign, Ashoka translated his moral vision into **concrete welfare institutions, public infrastructure, and monumental court art**.

However, within half a century of Ashoka\'s death (c. 232 BCE), the colossal Mauryan Empire disintegrated. The collapse was not caused by a single simplistic factor, but by a complex interplay of **administrative over-centralization, fiscal exhaustion, succession crises, and regional fragmentation, culminating in the coup of 185 BCE**.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Welfare Machinery, Public Works & International Embassies',
        body: `### 1. The Institution of *Dhamma Mahamatras*
- Created in Ashoka\'s **14th regnal year (13 years after coronation / c. 256 BCE)**, recorded in Major Rock Edict V.
- **Functions:** Special cadre of senior moral officers dispatched throughout the empire to supervise the propagation of Dhamma, protect prisoners from unjust torture, provide financial relief to families of convicts, and ensure harmonious relations among all religious sects.

### 2. Public Welfare Infrastructure (Major Rock Edict II & Pillar Edict VII)
- **Medical Treatment (*Chikitsa*):** Established two types of medical centers—for **human beings and for animals**—importing and planting medicinal herbs, roots, and fruits wherever they were absent.
- **Roadside Amenities:** Planted banyan trees for shade, dug wells at every half-*kos* (mile), constructed rest houses (**Nimishidhyas**), and planted watering troughs along imperial highways.
- **Diplomatic Humanitarian Missions (MRE II & XIII):** Dispatched medical and moral welfare missions to neighboring southern Tamil kingdoms (**Cholas, Pandyas, Satyaputras, Keralaputras, Tamraparni/Sri Lanka**) and five contemporary Hellenistic kings:
  1. **Antiochus II Theos** of Syria
  2. **Ptolemy II Philadelphus** of Egypt
  3. **Antigonus Gonatas** of Macedonia
  4. **Magas** of Cyrene (North Africa)
  5. **Alexander** of Epirus (or Corinth).

### 3. Mauryan Art & Monumental Polish
- **Mauryan Polish:** Highly distinctive, lustrous, mirror-like glassy polish applied to Chunar sandstone pillars and Barabar rock-cut caves.
- **Monolithic Sandstone Pillars:** Single shafts of buff-colored Chunar sandstone ($40\text{--}50\text{ ft}$ tall, weighing up to 50 tons) erected without mortar or joints, topped by an inverted bell-shaped lotus, an abacus, and animal capitals (Lions at Sarnath/Sanchi/Nandangarh, Bull at Rampurva, Elephant at Sankisa).
- **The Sarnath Lion Capital (National Emblem of India):** Four Asiatic lions seated back-to-back symbolizing sovereignty and moral law; circular abacus carved with four animals (**Elephant, Horse, Bull, Lion**) separated by four 24-spoke **Dharma Chakras** (Wheel of Law).`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'HISTORICAL_ANALYSIS',
        title: 'Historiography of Mauryan Decline: Debating the Causes of Collapse',
        body: `The Mauryan Empire rapidly fragmented after Ashoka\'s death (c. 232 BCE) and collapsed in **185 BCE** when the last ruler **Brihadratha** was assassinated during a military parade by his Brahmin commander-in-chief, **Pushyamitra Sunga**.

### Critical Evaluation of Historiographical Theories

| Historiographical Theory | Proponent Scholar | Core Argument & Evidence | Modern Critical Evaluation / Refutation |
| :--- | :--- | :--- | :--- |
| **Brahmanical Reaction** | **Mahamahopadhyaya Haraprasad Sastri** | Claimed Ashoka\'s ban on animal sacrifice (*Yajnas*) and appointment of Dhamma Mahamatras offended orthodox Brahmanas, leading to a violent Brahmanical counter-revolution led by Pushyamitra Sunga. | **Largely Refuted:** Ashoka repeatedly patronized and protected Brahmanas (MRE III, IX); Pushyamitra\'s coup was a conventional dynastic military coup, not a popular religious crusade (*Hemchandra Raychaudhuri*). |
| **Military Weakness / Ashokan Pacifism** | **V.A. Smith & H.C. Raychaudhuri** | Argued that Ashoka\'s adoption of *Ahimsa* and abandonment of war destroyed the martial spirit of the army, leaving India defenseless against Greco-Bactrian invasions. | **Nuanced / Rejected:** Ashoka never disbanded his army, never abolished the death penalty, and maintained coercive warnings against forest tribes. |
| **Fiscal & Economic Crisis** | **D.D. Kosambi** | Argued that the enormous expense of maintaining a vast standing army and colossal bureaucracy exhausted state finances, evidenced by severe debasement (reduced silver content) in late Mauryan punch-marked coins. | **Partially Accepted:** Significant factor, but economic strain was a symptom of broader administrative failure rather than sole cause. |
| **Excessive Centralization & Weak Successors** | **Romila Thapar** | The Mauryan state was **hyper-centralized around the personal charisma and efficiency of the monarch**, lacking institutional checks, representative bodies, or a modern concept of national identity. Incompetent, rival successors (Dasharatha, Samprati, Kunala) could not govern a vast continental empire across primitive communications. | **Widely Accepted Modern Consensus:** High centralization + succession conflicts + vast distances + rising regional forces led naturally to disintegration. |`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Key Examination Invariants & Traps',
        body: `### Critical Exam Traps
- **Last Mauryan Ruler:** **Brihadratha** (assassinated in 185 BCE by Pushyamitra Sunga).
- **Dhamma Mahamatras Created:** In the **14th regnal year (13 years after coronation)**, recorded in Major Rock Edict V.
- **Sarnath Capital Animals:** **Elephant, Horse, Bull, Lion** on the abacus (Mnemonic: **EHBL** / Elephant, Horse, Bull, Lion).
- **Hellenistic Kings in Inscriptions:** Antiochus II, Ptolemy II, Antigonus, Magas, Alexander (recorded in MRE XIII).`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-29-01',
        statement: 'Ashoka created Dhamma Mahamatras in his 14th regnal year and sponsored public welfare works, while the Mauryan empire disintegrated by 185 BCE due to hyper-centralization, fiscal strain, and weak successors, ending with Brihadratha\'s assassination by Pushyamitra Sunga.',
        claimType: 'HISTORICAL_SYNTHESIS',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Romila Thapar, Asoka and the Decline of the Mauryas, Harshacharita (Banabhatta) & NCERT Class 12',
        excerpt: 'Dhamma Mahamatras were created in the 14th regnal year. The empire declined due to central structural weaknesses, culminating in 185 BCE when Senapati Pushyamitra Sunga assassinated Brihadratha.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Ashokan Welfare State, Mauryan Art & Theories of Decline',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'HISTORIOGRAPHICAL_EVALUATION',
        notes: 'Critical comparison of decline theories (H.P. Sastri, Kosambi, Thapar) and Sarnath capital.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Mains Paper I: Mauryan Art & Causes of Imperial Decline',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'STRUCTURED_POINTS',
        notes: 'Dhamma Mahamatras, Sarnath lion capital animals, and Brihadratha 185 BCE coup.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Dhamma Mahamatras = 14th regnal year (MRE V) | Welfare = Medical centres for humans & animals (MRE II), wells & banyans (PE VII) | Art = Chunar sandstone, Mauryan polish, Sarnath Capital (4 lions + Elephant, Horse, Bull, Lion) | Decline theories = HP Sastri (Brahmanical reaction - refuted), Kosambi (Fiscal crisis), Thapar (Hyper-centralization & weak successors) | End = 185 BCE, Brihadratha killed by Pushyamitra Sunga.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Who was the last Mauryan emperor who was assassinated in 185 BCE during an army parade by his Commander-in-Chief Pushyamitra Sunga, marking the end of the Mauryan dynasty?',
        options: ['Dasharatha', 'Brihadratha', 'Samprati', 'Kunala'],
        correctAnswer: 'Brihadratha',
        explanation: 'Brihadratha was the last Mauryan ruler. According to Banabhatta\'s Harshacharita and the Puranas, he was overthrown and slain in 185 BCE by his Senapati (Commander-in-Chief) Pushyamitra Sunga, who founded the Sunga dynasty.',
        trapExplanation: 'Dasharatha and Samprati were earlier post-Ashokan Mauryan rulers; Kunala was Ashoka\'s blinded son.',
        difficulty: 'EASY',
      },
    ],
  },
];

export async function seedBatchAncientIndiaBatch3CanonicalKnowledge(): Promise<void> {
  console.log('Seeding Ancient India (Batch 3: Mauryan Empire & Ashoka) Canonical Benchmark...');

  // 1. Ensure Target Subject exists
  const subject = await db.subject.findUnique({
    where: { slug: 'ancient-indian-history' },
  });
  if (!subject) {
    throw new Error('Subject "ancient-indian-history" must exist before seeding Batch 3.');
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
      description: 'Authoritative first-principles academic synthesis integrating Archaeological Survey of India (ASI) site reports, Corpus Inscriptionum Indicarum (Vol I: Inscriptions of Asoka), NCERT Ancient India (R.S. Sharma), and peer-reviewed epigraphic concordances.',
    },
  });

  // 4. Ensure Topics exist (Topics 71 to 74)
  const topicDefs = [
    {
      slug: 'mauryan-sources-and-imperial-foundation',
      title: 'Mauryan Sources & Imperial Foundation',
      description: 'Critical source evaluation (Ashokan epigraphy, Arthashastra dating, Megasthenes fragments), Chandragupta Maurya, Seleucid treaty of 305 BCE, and Bindusara Amitraghata.',
      scope: 'Source criticism, foundation of Mauryan dynasty, 4 ceded satrapies, and Hellenistic diplomacy.',
      order: 71,
    },
    {
      slug: 'mauryan-administration-and-economy',
      title: 'Mauryan Administration, Economy & Society',
      description: 'Centralized administration, Mantriparishad, Samaharta, Rajukas, Megasthenes municipal boards, Sita vs Bhaga land tenure, state monopolies, and trade arteries.',
      scope: 'Administrative hierarchy, Pataliputra 6 committees, taxation, revenue departments, and differentiated imperial control.',
      order: 72,
    },
    {
      slug: 'ashoka-inscriptions-and-dhamma',
      title: 'Ashoka: Emperor, Inscriptions & Dhamma',
      description: 'Ashoka\'s accession, Kalinga War (MRE XIII), transformation to Dhammaghosha, Ashoka\'s Dhamma vs Buddhism, Major Rock Edict XII religious harmony, and Prinsep decipherment.',
      scope: 'Kalinga war casualties, Dhamma principles, multilingual epigraphy (Brahmi, Kharosthi, Greek, Aramaic), and inscriptional geography.',
      order: 73,
    },
    {
      slug: 'ashokan-state-decline-and-legacy',
      title: 'Ashokan State Policy, Mauryan Art & Decline',
      description: 'Dhamma Mahamatras, public welfare works, Mauryan polished stone art, Sarnath lion capital, historiographical theories of decline, and 185 BCE Sunga coup.',
      scope: 'Welfare administration, Chunar sandstone pillars, decline historiography (Thapar, Kosambi, Sastri), and Brihadratha.',
      order: 74,
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
  for (const c of ANCIENT_INDIA_BATCH_3_CONCEPTS) {
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

  console.log(`Successfully seeded ${ANCIENT_INDIA_BATCH_3_CONCEPTS.length} Ancient India (Batch 3: Mauryan Empire & Ashoka) canonical concepts.`);
}
