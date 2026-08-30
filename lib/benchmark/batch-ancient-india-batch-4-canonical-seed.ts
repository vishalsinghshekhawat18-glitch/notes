import { db } from '../db/client';

export interface Batch4CanonicalConceptDef {
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

export const ANCIENT_INDIA_BATCH_4_CONCEPTS: Batch4CanonicalConceptDef[] = [
  // =========================================================================
  // TOPIC 75: Indo-Greeks & Post-Mauryan Transformations
  // =========================================================================
  {
    id: 'CON-HIST-30',
    slug: 'post-mauryan-political-landscape-shungas-kanvas-and-regionalization',
    title: 'Post-Mauryan Political Landscape: Shungas, Kanvas & Regionalization',
    shortDefinition: 'The political transition following the collapse of the Mauryan Empire in 185 BCE, the Shunga dynasty under Pushyamitra, the Kanvas, and the shift to regional state systems.',
    difficulty: 'INTERMEDIATE',
    order: 30,
    topicSlug: 'indo-greeks-and-post-mauryan-transformations',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Post-Mauryan Political Transformation (c. 185 BCE – 300 CE)',
        body: `The assassination of the last Mauryan emperor Brihadratha in **185 BCE** by his commander-in-chief (**Senapati Pushyamitra Shunga**) shattered pan-subcontinental political centralization. 

The next five centuries (c. 200 BCE – 300 CE) were not an era of "dark age chaos", but a dynamic period of **political regionalization, intense trans-regional trade, monetisation, and cultural synthesis**:
1. **Magadha and Central India:** Governed by indigenous dynasties—the **Shungas (c. 185–73 BCE)** and the **Kanvas (c. 73–28 BCE)**.
2. **North-Western Frontier:** Inundated by successive waves of Central Asian and Hellenistic invaders—the **Indo-Greeks, Shakas (Indo-Scythians), Parthians (Indo-Parthians), and Kushanas**.
3. **The Deccan:** Unified under the powerful indigenous **Satavahana dynasty**.
4. **The Far South (Tamilakam):** Flourished under the **Cheras, Cholas, and Pandyas** of the Sangam Age.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'The Shunga & Kanva Dynasties in Northern India',
        body: `### 1. The Shunga Dynasty (c. 185–73 BCE)
- **Pushyamitra Shunga (c. 185–149 BCE):**
  - A Brahmana commander who established his capital at **Pataliputra**, with a secondary royal seat at **Vidisha (Besnagar, MP)**.
  - Performed two Vedic **Ashvamedha (Horse Sacrifice)** rituals to legitimize his imperial sovereignty (corroborated by the **Ayodhya Inscription of King Dhanadeva** and Patanjali's *Mahabhasya*).
  - Repelled invasions from the Indo-Greeks (led by Demetrius or Menander) on the banks of the Sindhu River, celebrated in Kalidasa's classical Sanskrit play *Malavikagnimitram*.
  - **Historiographical Nuance on Buddhist Patronage:** While later Buddhist chronicles (*Divyavadana*) portray Pushyamitra as a persecutor of monks, archaeological evidence proves substantial Buddhist architectural expansion during the Shunga era—notably the stone railings and sculpted gateways (*Toranas*) of the **Bharhut Stupa** and **Sanchi Stupa I**.
- **Agnimitra:** Son of Pushyamitra; viceroy at Vidisha and hero of Kalidasa's drama *Malavikagnimitram*.
- **Devabhuti (Last Shunga Ruler):** Overthrown in 73 BCE in a palace conspiracy orchestrated by his Brahmana minister **Vasudeva Kanva**.

### 2. The Kanva Dynasty (c. 73–28 BCE)
- Founded by **Vasudeva Kanva**; comprised four rulers (Vasudeva, Bhumimitra, Narayana, Susarman) reigning for 45 years.
- Ruled a diminished territory confined primarily to Magadha and parts of central India, before being overthrown around 28 BCE by the Satavahanas (or Central Indian local powers).`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Target Exam Anchors & Invariants',
        body: `### Key Exam Distinctions
- **Founder of Shunga Dynasty:** **Pushyamitra Shunga** (185 BCE).
- **Secondary Shunga Capital:** **Vidisha (Besnagar, MP)**.
- **Ayodhya Inscription of Dhanadeva:** Primary epigraphic record confirming Pushyamitra performed **two Ashvamedha sacrifices**.
- **Malavikagnimitram by Kalidasa:** Historical Sanskrit play detailing the Shunga-Greek conflict on the Sindhu river.
- **Last Shunga King:** **Devabhuti** (killed by Vasudeva Kanva).`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-30-01',
        statement: 'Pushyamitra Shunga founded the Shunga dynasty in 185 BCE following the overthrow of Brihadratha, performed two Ashvamedha sacrifices confirmed by the Ayodhya inscription of Dhanadeva, and maintained capitals at Pataliputra and Vidisha.',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Ayodhya Inscription of Dhanadeva, Mahabhasya (Patanjali) & NCERT Class 11/12',
        excerpt: 'Pushyamitra established the Shunga dynasty c. 185 BCE; the Ayodhya inscription records his performance of two Ashvamedha sacrifices (dvirasvamedhayajinah).',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Post-Mauryan Political Transition & Shunga Dynasty',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'POLITICAL_AND_CULTURAL_SYNTHESIS',
        notes: 'Shunga-Greek conflict, Bharhut stupa railings, and Ayodhya inscription of Dhanadeva.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Post-Mauryan Dynasties (Shungas and Kanvas)',
        relevance: 'HIGH',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_PRECISION',
        notes: 'Pushyamitra Shunga, Vidisha capital, and Malavikagnimitram references.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Shungas (185–73 BCE) | Founder = Pushyamitra Shunga | Capitals = Pataliputra & Vidisha | 2 Ashvamedha sacrifices (Ayodhya Inscription of Dhanadeva) | Greek conflict = Malavikagnimitram | Art = Bharhut & Sanchi stone gateways | Overthrown by Vasudeva Kanva (73 BCE).',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which ancient stone inscription explicitly corroborates that the founder of the Shunga dynasty, Pushyamitra Shunga, performed two Vedic Ashvamedha (horse sacrifice) rituals?',
        options: ['Ayodhya Inscription of King Dhanadeva', 'Besnagar Pillar Inscription of Heliodorus', 'Junagadh Rock Inscription of Rudradaman', 'Hathigumpha Inscription of Kharavela'],
        correctAnswer: 'Ayodhya Inscription of King Dhanadeva',
        explanation: 'The Ayodhya stone inscription of King Dhanadeva (a descendant of Pushyamitra) explicitly mentions Pushyamitra as "dviraśvamedhayājinaḥ" (the performer of two Ashvamedha sacrifices).',
        trapExplanation: 'Besnagar inscription records Heliodorus as a Bhagavata; Junagadh records the repair of Sudarshana Lake; Hathigumpha records Kharavela\'s campaigns.',
        difficulty: 'MEDIUM',
      },
    ],
  },

  {
    id: 'CON-HIST-31',
    slug: 'indo-greeks-political-geography-menander-and-milindapanha',
    title: 'Indo-Greeks: Political Expansion, Menander I Soter & The Milindapanha Tradition',
    shortDefinition: 'The political expansion of the Bactrian Greeks into northwestern India, King Menander I Soter (c. 165/155–130 BCE), and the philosophical dialogue of the Milindapanha.',
    difficulty: 'INTERMEDIATE',
    order: 31,
    topicSlug: 'indo-greeks-and-post-mauryan-transformations',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Yavana Expansion: Greeks in North-Western India',
        body: `Following the decline of the Mauryan border defense, the **Greco-Bactrian kings** (descendants of Alexander\'s Macedonian and Greek settlements in Bactria, modern northern Afghanistan) crossed the Hindukush mountains into the northwestern Indian subcontinent around **190–180 BCE**, establishing the **Indo-Greek (or Yavana) kingdoms**.

The Indo-Greeks ruled across modern Afghanistan, Pakistan, Punjab, and Gandhara for more than two centuries, acting as a profound conduit for **Hellenistic artistic, philosophical, and numismatic interaction with Indian culture**.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Rulers, Geography & King Menander I (*Milinda*)',
        body: `### 1. Early Expansion: Demetrius I & Apollodotus
- **Demetrius I (c. 200–180 BCE):** King of Bactria who led the first major invasion into the Punjab and Indus valley, earning the Greek title *Aniketos* ("Invincible").
- **Political Fragmentation:** The Indo-Greeks were never a single unified empire, but a shifting network of rival Hellenistic dynastic houses ruling from capitals like **Taxila (Sirkap)**, **Pushkalavati (Charsadda)**, and **Sakala (Sialkot)**.

### 2. King Menander I Soter (Pali: *Milinda* — c. 165/155–130 BCE)
- The most celebrated and powerful of all Indo-Greek rulers.
- **Capital:** Established his imperial seat at **Sakala** (modern Sialkot in Punjab, Pakistan), praised in texts as a thriving commercial and cultural metropolis.
- **Territorial Reach:** Extended control from the Kabul valley across Gandhara, Punjab, and the Swat valley, leading military raids eastwards towards Mathura and the Ganga-Yamuna Doab.

### 3. The *Milindapanha* ("Questions of King Menander")
- **The Text:** A renowned non-canonical Buddhist philosophical treatise composed originally in Prakrit/Pali (c. 1st Century BCE – 1st Century CE).
- **The Dialogue:** Records a rigorous intellectual debate between **King Milinda (Menander)** and the erudite Buddhist sage **Nagasena**.
- **Philosophical Debates:** Explores profound metaphysical dilemmas:
  1. *Anatta (The Simile of the Chariot):* Nagasena explains that just as a "chariot" is merely a practical name for an assembly of wheels, axle, and chassis rather than an independent entity, a "person" is merely a conventional label for the five changing aggregates (*Skandhas*).
  2. *Karma & Rebirth:* How rebirth occurs without a transmigrating eternal soul.
- **Historiographical Nuance on Conversion:** While the *Milindapanha* asserts that King Menander was so convinced that he abdicated his throne and became a Buddhist Arhat, numismatic evidence confirms that Menander adopted Buddhist symbols (**the Eight-Spoke Dharma Chakra**) on his coins alongside traditional Greek deities (Athena Alkidemos), reflecting royal patronage of Buddhism without necessarily abandoning Hellenistic kingship.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Key Examination Anchors & Traps',
        body: `### Critical Exam Distinctions
- **Most Famous Indo-Greek King:** **Menander I (Milinda)**; capital at **Sakala (Sialkot)**.
- **Milindapanha Interlocutors:** **King Milinda** and **Buddhist monk Nagasena**.
- **Chariot Analogy:** Nagasena\'s classic demonstration of **Anatta (No-Self)** using the components of a chariot in the *Milindapanha*.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-31-01',
        statement: 'King Menander I (Milinda) was the most prominent Indo-Greek ruler with his capital at Sakala (Sialkot), whose philosophical dialogues with Buddhist sage Nagasena are preserved in the Milindapanha.',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Milindapanha, Strabo (Geographica XI) & NCERT Class 12',
        excerpt: 'Menander (Milinda), ruling from Sakala, engaged in philosophical discourse with Nagasena as recorded in the Milindapanha, issuing coins with the title Soter and Athena/Chakra emblems.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Indo-Greeks, Menander & Milindapanha Tradition',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'PHILOSOPHICAL_AND_HISTORICAL',
        notes: 'Milindapanha dialogue on Anatta, Menander\'s capital at Sakala, and numismatic evidence.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Foreign Dynasties in Ancient India (Indo-Greeks)',
        relevance: 'HIGH',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_PRECISION',
        notes: 'Menander (Milinda), Nagasena, Sakala capital, and Greek coins.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Indo-Greeks (c. 190 BCE – 10 CE) | Demetrius I invaded Punjab | King Menander I = Milinda (c. 165–130 BCE) | Capital = Sakala (Sialkot) | Milindapanha = Dialogues between King Milinda and Buddhist monk Nagasena | Chariot simile = Anatta doctrine.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'The celebrated ancient Buddhist text "Milindapanha" (Questions of King Menander) records a profound philosophical dialogue between Indo-Greek King Menander and which Buddhist monk?',
        options: ['Nagasena', 'Moggaliputta Tissa', 'Ashvaghosha', 'Vasumitra'],
        correctAnswer: 'Nagasena',
        explanation: 'The Milindapanha records the philosophical dialogue between the Indo-Greek King Menander I (Milinda) and the Buddhist sage Nagasena, resolving intricate questions on Buddhist doctrine including Anatta, karma, and rebirth.',
        trapExplanation: 'Moggaliputta Tissa presided over the 3rd Council; Ashvaghosha was at Kanishka\'s court; Vasumitra presided over the 4th Council.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-HIST-32',
    slug: 'indo-greek-coinage-heliodorus-pillar-and-cultural-interaction',
    title: 'Indo-Greek Coinage, The Heliodorus Pillar & Cultural Interaction',
    shortDefinition: 'The numismatic revolution of bilingual portrait coinage introduced by the Indo-Greeks and the Besnagar Heliodorus Pillar inscription evidencing early Bhagavata Vaishnavism.',
    difficulty: 'INTERMEDIATE',
    order: 32,
    topicSlug: 'indo-greeks-and-post-mauryan-transformations',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Great Cultural Synthesis: Coins and Religious Syncresis',
        body: `The Indo-Greek presence in northwestern India catalyzed two revolutionary cultural transformations in Indian history:
1. **The Numismatic Revolution:** The transition from anonymous indigenous punch-marked coins to **die-struck, dynamic royal portrait coinage with bilingual and bi-script inscriptions**.
2. **Religious Assimilation:** The voluntary adoption of Indian religious traditions (**Buddhism and Bhagavata Vaishnavism**) by Hellenistic elites, epitomized by the **Heliodorus Garuda Pillar at Besnagar (Vidisha)**.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Numismatic Innovation & The Heliodorus Inscription',
        body: `### 1. The Indo-Greek Coinage Revolution
- **First Portrait Coins in India:** The Indo-Greeks were the **first rulers in Indian history to issue coins bearing realistic royal portraits and the explicit names of reigning monarchs**.
- **Bilingual & Bi-Script System:**
  - *Obverse (Front):* Royal portrait with Greek royal title (e.g. *Basileos Soteros Menandrou* — "Of King Menander, the Savior") in **Greek script and language**.
  - *Reverse (Back):* Greek or Indian deity (Athena, Herakles, Zeus, or Buddhist Dharma Chakra) with the exact Prakrit translation in **Kharosthi script** (e.g. *Maharajasa tratarasa Menamdrasa*).
- **First Gold Coinage in India:** The Indo-Greeks were the **first rulers in India to issue regular gold coins**, setting metrological standards later expanded by the Kushanas and Guptas.

### 2. The Besnagar Heliodorus Pillar Inscription (c. 113 BCE)
- **Discovery & Location:** Discovered at **Besnagar (ancient Vidisha, Madhya Pradesh)** by Alexander Cunningham.
- **The Monument:** A polished stone monolithic **Garuda-dhvaja (Pillar surmounted by Garuda, the vehicle of Vishnu)** erected in front of a temple of Vasudeva.
- **The Inscription Details:**
  - Written in **Prakrit language using Brahmi script**.
  - Erected by **Heliodorus**, son of Dion, a resident of Taxila, who describes himself as an **ambassador sent by the Indo-Greek King Antialcidas to King Kasiputra Bhagabhadra of Vidisha (Shunga dynasty)**.
  - **Self-Declaration of Faith:** Heliodorus explicitly proclaims himself a **Bhagavata** (devotee of Vishnu/Krishna) and dedicates the pillar to **Devadeva Vasudeva** (God of Gods, Vasudeva-Krishna).
  - **Moral Precepts:** Concludes by teaching three immortal steps to heaven: **Dama (self-restraint), Tyaga (renunciation), and Apramada (vigilance/mindfulness)**.
- **Historiographical Significance:** Provides the earliest undisputed epigraphic evidence of the **Bhagavata cult of Vasudeva-Krishna worship** and proves that foreigners of Greek origin embraced indigenous devotional Hinduism.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Key Examination Anchors & Traps',
        body: `### Critical Exam Traps
- **First Gold Coins in India:** Issued by the **Indo-Greeks** (highest purity gold coins later issued by the Kushanas; largest number of gold coins issued by the Guptas).
- **First Inscribed / Portrait Coins:** Issued by the **Indo-Greeks**.
- **Heliodorus Pillar Location:** **Besnagar (Vidisha, MP)**.
- **Heliodorus Ambassador Details:** Sent by **King Antialcidas** (Indo-Greek) to **King Bhagabhadra** (Shunga).
- **Religion of Heliodorus:** **Bhagavatism / Vaishnavism** (worship of *Devadeva Vasudeva*), not Buddhism.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-32-01',
        statement: 'The Indo-Greeks introduced the first regular royal portrait and gold coinage in India, while the Besnagar pillar inscription records Greek ambassador Heliodorus as a Bhagavata devotee of Devadeva Vasudeva c. 113 BCE.',
        claimType: 'EPIGRAPHIC_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Besnagar Garuda Pillar Inscription & NCERT Class 12 Themes in Indian History I',
        excerpt: 'The Besnagar inscription records the erection of a Garuda pillar to Devadeva Vasudeva by Heliodorus, an ambassador of Indo-Greek King Antialcidas to King Bhagabhadra.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Indo-Greek Coinage & Besnagar Heliodorus Pillar',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'EPIGRAPHIC_AND_NUMISMATIC_RIGOR',
        notes: 'Heliodorus pillar text (Bhagavatism), bilingual coin features, and first gold coins in India.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims & Mains: Ancient Epigraphy & Foreign Travelers',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'SITE_AND_RULER_PRECISION',
        notes: 'Besnagar pillar site (Vidisha), King Antialcidas, King Bhagabhadra, and Bhagavata cult.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Indo-Greek Coins = 1st portrait coins + 1st gold coins in India + Bilingual (Greek & Kharosthi) | Besnagar Pillar (Vidisha, MP) = Heliodorus (Ambassador of King Antialcidas to Shunga King Bhagabhadra) | Religion = Bhagavata devotee of Devadeva Vasudeva (earliest Vaishnava epigraph).',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'The famous Garuda Pillar inscription at Besnagar (Vidisha, Madhya Pradesh) records that a Greek ambassador named Heliodorus dedicated a pillar to "Devadeva Vasudeva". Who sent Heliodorus as an ambassador to the Shunga court?',
        options: ['King Menander I', 'King Antialcidas', 'King Demetrius I', 'King Apollodotus'],
        correctAnswer: 'King Antialcidas',
        explanation: 'The Besnagar inscription explicitly states that Heliodorus, son of Dion, was sent as an envoy by the Indo-Greek King Antialcidas of Taxila to the court of King Kasiputra Bhagabhadra of the Shunga dynasty at Vidisha.',
        trapExplanation: 'Menander I is associated with the Milindapanha; Demetrius was the early invader; Antialcidas sent Heliodorus.',
        difficulty: 'MEDIUM',
      },
    ],
  },

  // =========================================================================
  // TOPIC 76: Shakas & Western Kshatrapas
  // =========================================================================
  {
    id: 'CON-HIST-33',
    slug: 'shaka-expansion-and-western-kshatrapa-political-formation',
    title: 'Shaka Expansion & Western Kshatrapa Political Formation',
    shortDefinition: 'The nomadic migration of the Shakas (Indo-Scythians) from Central Asia, their settlement across five branches in India, the Kshaharata dynasty under Nahapana, and the Jogalthambi hoard.',
    difficulty: 'INTERMEDIATE',
    order: 33,
    topicSlug: 'shakas-and-western-kshatrapas',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Scythian Wave: The Shakas (*Indo-Scythians*)',
        body: `Around the **2nd–1st Century BCE**, nomadic pastoralist tribes known in Indian sources as the **Shakas** (the *Scythians* of Greco-Roman records and *Sai* of Chinese chronicles) migrated from Central Asia into the Indian subcontinent, having been pushed out of the Syr Darya basin by the Yuezhi.

The Shakas destroyed Greek rule in Bactria and northwestern India, establishing several autonomous regional principalities governed by military viceroys bearing the Persian title **Kshatrapa (Satrap / Governor)** and **Mahakshatrapa (Great Satrap)**.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'The Five Shaka Branches & The Kshaharata Dynasty',
        body: `### 1. The Five Traditional Branches of the Shakas in India
1. **Afghanistan Branch:** Settled in modern Arachosia/Seistan (*Shakastan*).
2. **Punjab Branch (Taxila):** Led by early rulers like *Maues (Moga)* and *Azes I* (who founded the Vikrama Era of 57 BCE according to some numismatists).
3. **Mathura Branch:** Famous for the **Mathura Lion Capital Inscription** mentioning Mahakshatrapa *Rajuvula* and *Sodasa*.
4. **Western India Branch (Gujarat & Malwa):** The most enduring Shaka power, known as the **Western Kshatrapas**, ruling for over three centuries (c. 1st Century CE to 4th Century CE).
5. **Upper Deccan Branch:** In northwestern Maharashtra.

### 2. The Kshaharata Lineage of Western Kshatrapas
- **Bhumaka:** First known Kshaharata ruler, issuing coins in Gujarat, Saurashtra, and Malwa.
- **Nahapana (c. 1st–2nd Century CE):**
  - The most powerful Kshaharata ruler; held vast territories across Gujarat, Saurashtra, Konkan, and northern Maharashtra.
  - Inscriptions of his son-in-law **Ushavadata (Rishabhadatta)** in the Nasik and Karle caves record extensive royal charities: constructing rest houses, donating cows to Brahmanas, and funding Buddhist rock-cut monasteries.
  - **Conflict with the Satavahanas:** Engaged in a fierce territorial war with the rising Satavahana king **Gautamiputra Satakarni**.
- **The Jogalthambi Coin Hoard (Nashik, Maharashtra):**
  - Discovered in 1906, containing over **13,000 silver coins of Nahapana, of which more than 9,000 were counter-struck/re-stamped by Gautamiputra Satakarni**.
  - Provides dramatic, indisputable numismatic proof of Gautamiputra Satakarni's total military victory over Nahapana and the extinction of the Kshaharata lineage.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Key Examination Anchors & Traps',
        body: `### Key Exam Anchors
- **Persian Title Used by Shakas:** **Kshatrapa** (Governor) and **Mahakshatrapa**.
- **Jogalthambi Hoard:** Nahapana's coins **counter-struck by Gautamiputra Satakarni** (Nashik district).
- **Ushavadata Inscriptions:** Found at **Nasik and Karle caves**, detailing Shaka charities to both Brahmanas and Buddhist monks.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-33-01',
        statement: 'The Shakas established regional satrapies across northern and western India, where Kshaharata ruler Nahapana was decisively defeated by Satavahana King Gautamiputra Satakarni, as proven by the Jogalthambi coin hoard.',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Jogalthambi Coin Hoard, Nasik Cave Inscriptions & NCERT Class 12',
        excerpt: 'The Jogalthambi hoard contained thousands of Nahapana\'s silver coins restruck with the emblems of Gautamiputra Satakarni, confirming the destruction of the Kshaharata dynasty.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Shakas, Western Kshatrapas & Satavahana Conflicts',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'NUMISMATIC_AND_EPIGRAPHIC_PRECISION',
        notes: 'Jogalthambi hoard, Ushavadata inscriptions, and Shaka satrapal system.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Foreign Dynasties (Shakas and Western Kshatrapas)',
        relevance: 'HIGH',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_PRECISION',
        notes: 'Nahapana, Gautamiputra Satakarni, and Western Kshatrapa territories.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Shakas (Scythians) | 5 branches in India | Titles: Kshatrapa & Mahakshatrapa | Kshaharata Dynasty = Bhumaka & Nahapana | Son-in-law = Ushavadata (Nasik/Karle gifts) | Overthrown by Gautamiputra Satakarni (Jogalthambi coin hoard).',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which famous numismatic hoard discovered in Maharashtra provided decisive physical proof that Satavahana ruler Gautamiputra Satakarni defeated and eliminated Western Kshatrapa King Nahapana?',
        options: ['Jogalthambi Hoard', 'Bayana Hoard', 'Pewter Hoard', 'Bairat Coin Hoard'],
        correctAnswer: 'Jogalthambi Hoard',
        explanation: 'The Jogalthambi hoard discovered near Nashik contained over 13,000 silver coins of Western Kshatrapa ruler Nahapana, with thousands of them counter-struck by Gautamiputra Satakarni, celebrating his victory.',
        trapExplanation: 'Bayana Hoard contains Gupta gold coins; Bairat contains punch-marked and Greek coins.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-HIST-34',
    slug: 'rudradaman-i-junagadh-inscription-and-western-kshatrapa-state',
    title: 'Rudradaman I, The Junagadh Rock Inscription & Classical Sanskrit Statecraft',
    shortDefinition: 'The Kardamaka dynasty under Mahakshatrapa Rudradaman I (c. 130–150 CE), the landmark Junagadh Rock Inscription of 150 CE, the engineering history of Sudarshana Lake, and the rise of classical Sanskrit in royal epigraphy.',
    difficulty: 'ADVANCED',
    order: 34,
    topicSlug: 'shakas-and-western-kshatrapas',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Champion of Classical Sanskrit: Mahakshatrapa Rudradaman I',
        body: `Following the fall of the Kshaharatas, a second Western Kshatrapa lineage—the **Kardamaka Dynasty** (founded by *Chashtana* at Ujjain)—achieved imperial prominence under **Mahakshatrapa Rudradaman I (reigned c. 130–150 CE)**.

Rudradaman I is celebrated in ancient Indian history for his military conquests across Gujarat, Malwa, and the Konkan, but above all for his **Junagadh Rock Inscription (dated 150 CE)**, which represents the **earliest extensive royal inscription written in ornate Classical Sanskrit prose (*Kavya* style)** in South Asian history.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'The Junagadh Inscription (150 CE) & Sudarshana Lake Chronicle',
        body: `### 1. The Junagadh Inscription Landmark (Girnar, Gujarat)
- **Language & Script:** Written in **pure, elaborate Classical Sanskrit** using the **Brahmi script**.
- **Significance:** Prior to Rudradaman I, all royal epigraphy (Mauryan, Shunga, Satavahana) was composed in vernacular **Prakrit**. Rudradaman—a ruler of foreign Scythian descent—deliberately adopted high Sanskrit *Kavya* to assert his cultural legitimacy and patronage of classical Indian learning.

### 2. The Comprehensive Engineering History of Sudarshana Lake
The Junagadh inscription is an unprecedented historical document preserving a **500-year continuous civil engineering record** of the *Sudarshana Lake* (reservoir dam) on Mount Raivataka at Girnar:

| Chronological Era | Reigning Emperor / King | Royal Governor / Engineer | Civil Engineering Work Executed |
| :--- | :--- | :--- | :--- |
| **Mauryan Empire (c. 321 BCE)** | **Chandragupta Maurya** | **Pushyagupta Vaishya** (*Rashtriya*) | **Originally constructed** the earthen dam and reservoir on the Suvarnasikata and Palasini rivers. |
| **Mauryan Empire (c. 250 BCE)** | **Emperor Ashoka** | **Yavanaraja Tushaspha** (Greek governor) | Added canal irrigation channels (*Pranalis*) to distribute water to surrounding fields. |
| **Western Kshatrapa (150 CE)** | **Mahakshatrapa Rudradaman I** | **Suvisakha** (Pahlava governor of Anarta/Saurashtra) | A catastrophic storm and flood burst the dam; Rudradaman **rebuilt the dam three times stronger and wider entirely from his private treasury**, without levying forced labor (*Vishti*) or emergency taxes (*Pranaya*). |
| **Gupta Empire (455–456 CE)** | **Skandagupta** | **Chakrapalita** (son of Governor Parnadatta) | Repaired the dam a second time after destructive floods in the Gupta era and built a temple to Vishnu on its banks. |

### 3. Political & Military Achievements of Rudradaman I
- Reclaimed all territories lost by the Kshaharatas: Saurashtra, Kachchh, Malwa, Sindh, and northern Maharashtra.
- **Satavahana Conflicts:** The inscription records that Rudradaman **twice defeated Satakarni, the Lord of the Deccan (*Dakshinapathapati*) in open battle, but spared his life on both occasions because of close matrimonial relations** (Rudradaman\'s daughter was married to Vashishthiputra Pulumavi / Satavahana prince).`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Key Examination Anchors & Traps',
        body: `### Critical Exam Distinctions
- **First Major Sanskrit Inscription:** **Junagadh Inscription of Rudradaman I (150 CE)** (earlier inscriptions were in Prakrit).
- **Four Rulers of Sudarshana Lake:** **Chandragupta Maurya** (Pushyagupta) $\rightarrow$ **Ashoka** (Tushaspha) $\rightarrow$ **Rudradaman I** (Suvisakha) $\rightarrow$ **Skandagupta** (Chakrapalita).
- **Taxes NOT Levied by Rudradaman:** He specifically boasts of repairing the lake **without *Vishti* (forced labor) or *Pranaya* (emergency tax)** from his citizens.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-34-01',
        statement: 'Mahakshatrapa Rudradaman I of the Kardamaka dynasty issued the earliest major classical Sanskrit inscription at Junagadh in 150 CE, recording the repair of Sudarshana Lake originally built under Chandragupta Maurya.',
        claimType: 'EPIGRAPHIC_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Junagadh Rock Inscription of Rudradaman I (Epigraphia Indica VIII) & NCERT Class 12',
        excerpt: 'The Junagadh Sanskrit inscription records Rudradaman repairing the Sudarshana Lake dam at his own expense without forced labor, chronicling Pushyagupta, Tushaspha, and Suvisakha.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Rudradaman I, Junagadh Inscription & Classical Sanskrit Epigraphy',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'EPIGRAPHIC_AND_ENGINEERING_RIGOR',
        notes: 'Four rulers of Sudarshana lake, Kavya style Sanskrit, and Satavahana marriage ties.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims & Mains: Ancient Inscriptions & Sudarshana Lake History',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'HIGH_PRECISION_FACTS',
        notes: 'Junagadh inscription date (150 CE), Rudradaman I, Pushyagupta, and Tushaspha.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Rudradaman I (130–150 CE, Kardamaka Shaka) | Capital = Ujjain | Inscription = Junagadh Rock Inscription (150 CE) in pure classical Sanskrit | Sudarshana Lake history: Chandragupta (Pushyagupta) $\rightarrow$ Ashoka (Tushaspha) $\rightarrow$ Rudradaman (Suvisakha) $\rightarrow$ Skandagupta (Chakrapalita) | Repaired without Vishti (forced labor) or Pranaya tax.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which ancient Indian ruler issued the earliest extensive royal inscription composed in ornate, chaste Classical Sanskrit prose at Junagadh (Girnar) in 150 CE?',
        options: ['Mahakshatrapa Rudradaman I', 'Samudragupta', 'Chandragupta II Vikramaditya', 'Gautamiputra Satakarni'],
        correctAnswer: 'Mahakshatrapa Rudradaman I',
        explanation: 'The Junagadh Rock Inscription (150 CE) of Western Kshatrapa ruler Mahakshatrapa Rudradaman I is the earliest long royal inscription composed in pure Classical Sanskrit prose (Kavya style) in Indian epigraphy.',
        trapExplanation: 'Samudragupta\'s Prayag Prashasti is later (4th Century CE); Gautamiputra Satakarni\'s inscriptions are in Prakrit.',
        difficulty: 'EASY',
      },
    ],
  },

  // =========================================================================
  // TOPIC 77: The Kushana Empire
  // =========================================================================
  {
    id: 'CON-HIST-35',
    slug: 'formation-of-the-kushana-empire-kujula-kadphises-to-kanishka',
    title: 'Formation of the Kushana Empire: From Kujula Kadphises to Kanishka',
    shortDefinition: 'The Central Asian origins of the Yuezhi, the unification under Kujula Kadphises, the gold currency of Vima Kadphises, and the trans-continental imperial zenith under Kanishka I.',
    difficulty: 'INTERMEDIATE',
    order: 35,
    topicSlug: 'the-kushana-empire',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Imperial Bridge of Eurasia: The Kushana Empire',
        body: `In the **1st Century CE**, the **Kushanas** established one of the four great contemporary empires of the ancient world (alongside the Roman Empire, the Parthian Empire of Persia, and the Han Empire of China).

Originally a nomadic Central Asian pastoralist tribe known in Chinese chronicles as the **Yuezhi (Da Yuezhi)**, they united the five Yuezhi principalities in Bactria and expanded across the Hindukush into northwestern India and the Indo-Gangetic basin, creating a **trans-continental empire linking Central Asia, the Silk Road, and northern India**.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Dynastic Trajectory: Kujula, Vima & Imperial Kanishka I',
        body: `### 1. Kujula Kadphises (Kadphises I — c. 30–80 CE)
- United the five autonomous Yuezhi clans into a single political confederacy.
- Crossed the Hindukush into Gandhara and the Kabul valley, minting copper coins imitating Roman coins of Augustus and Greek kings.

### 2. Vima Kadphises (Kadphises II — c. 90–110 CE)
- Extended Kushana hegemony into Punjab and the Gangetic plain (Mathura).
- **Introduction of Gold Currency:** Issued the first extensive, high-purity **Kushana Gold Coinage (*Dinaras*)** standardizing weights to match the Roman *Aureus*.
- **Religious Affiliation:** A devout follower of Shiva; adopted the Sanskrit/Prakrit titles **Mahisvara / Maheshvara (Lord of the Universe)** and *Sarvaloka-Ishvara*, depicting Shiva with his trident (*Trishula*) and Nandi the bull on his coins.

### 3. Kanishka I (c. 78 CE / c. 127 CE — The Imperial Zenith)
- **The Accession Dating Debate:**
  - *Traditional View:* Accession in **78 CE**, identifying the start of his regnal era with the **Shaka Era (Saka Samvat)** adopted as India\'s National Civil Calendar.
  - *Modern Scholarly Consensus (The Rabatak Inscription):* The discovery of the **Rabatak Inscription (Bactrian language in Greek script)** in Baghlan, Afghanistan (1993) has led leading modern epigraphists (e.g. Nicholas Sims-Williams, Harry Falk) to place Kanishka\'s year 1 at **c. 127 CE**.
- **Twin Imperial Capitals:**
  1. **Purushapura (Peshawar, Pakistan):** The primary northwestern capital; famous for Kanishka\'s stupendous multi-story wooden pagoda stupa described by Chinese pilgrims Faxian and Xuanzang.
  2. **Mathura (Uttar Pradesh):** The primary southern/eastern Gangetic capital, serving as the hub of imperial trade and indigenous art workshops.
- **Imperial Geography:** Stretched from the Oxus River and Ferghana (Uzbekistan/Tajikistan) in Central Asia through Afghanistan, Gandhara, Punjab, and Rajasthan, deep into the Gangetic valley up to Varanasi and Pataliputra.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Key Examination Anchors & Traps',
        body: `### Key Exam Anchors
- **Yuezhi Tribe:** The Kushanas were a branch of the **Da Yuezhi** nomadic tribe.
- **Rabatak Inscription:** Discovered in Afghanistan; written in **Bactrian language using Greek script**, providing the definitive Kushana dynastic genealogy: *Kujula Kadphises $\rightarrow$ Vima Taktu $\rightarrow$ Vima Kadphises $\rightarrow$ Kanishka I*.
- **Twin Capitals:** **Purushapura (Peshawar)** and **Mathura**.
- **Shaka Era (78 CE):** Traditionally associated with Kanishka\'s accession.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-35-01',
        statement: 'The Kushanas (Yuezhi origin) established a trans-continental empire under Kujula Kadphises, Vima Kadphises, and Kanishka I, with twin imperial capitals at Purushapura (Peshawar) and Mathura, documented in the Rabatak inscription.',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Rabatak Inscription, Hou Hanshu & NCERT Class 11/12',
        excerpt: 'The Rabatak inscription records Kanishka\'s genealogy from Kujula Kadphises and Vima Kadphises, ruling an empire from Central Asia to Pataliputra with capitals at Purushapura and Mathura.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Kushana Empire Formation, Geography & Rabatak Inscription',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'EPIGRAPHIC_AND_GEOPOLITICAL',
        notes: 'Rabatak inscription genealogy, twin capitals (Purushapura/Mathura), and Kanishka era debates.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Foreign Dynasties (Kushanas & Kanishka)',
        relevance: 'HIGH',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_PRECISION',
        notes: 'Kujula Kadphises, Vima Kadphises (Maheshvara title), and Shaka Era (78 CE).',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Kushanas (Yuezhi tribe) | Kujula Kadphises (unification) $\rightarrow$ Vima Kadphises (Gold Dinaras, Shaiva/Maheshvara) $\rightarrow$ Kanishka I (c. 78/127 CE) | Capitals = Purushapura (Peshawar) & Mathura | Rabatak Inscription (Bactrian language in Greek script) confirms genealogy.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'The landmark Rabatak Inscription discovered in Afghanistan, which confirmed the four-generation genealogy of the Kushana imperial lineage (Kujula Kadphises, Vima Taktu, Vima Kadphises, Kanishka), is composed in which language and script?',
        options: [
          'Bactrian language in Greek script',
          'Sanskrit language in Brahmi script',
          'Prakrit language in Kharosthi script',
          'Aramaic language in Aramaic script',
        ],
        correctAnswer: 'Bactrian language in Greek script',
        explanation: 'The Rabatak inscription discovered in 1993 in Baghlan, Afghanistan is composed in the Bactrian language (an Eastern Iranian language called "Aryan" by the Kushanas) written using the Greek alphabet.',
        trapExplanation: 'While Ashoka used Prakrit and Aramaic, the Kushana official royal epigraphs at Rabatak were in Bactrian using the Greek script.',
        difficulty: 'MEDIUM',
      },
    ],
  },

  {
    id: 'CON-HIST-36',
    slug: 'kushana-economy-silk-routes-cities-and-trade',
    title: 'Kushana Economy: Silk Road Transit, Urban Networks & Subcontinental Monetization',
    shortDefinition: 'The economic prosperity of the Kushana Empire derived from controlling the Overland Silk Road branches, thriving Indo-Roman trade, high-purity gold coinage, and urban market networks.',
    difficulty: 'INTERMEDIATE',
    order: 36,
    topicSlug: 'the-kushana-empire',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Commercial Super-Power: Silk Road Mastery',
        body: `The economic power and legendary wealth of the Kushana Empire rested on its strategic geopolitical location: **it sat astride the primary land junctions of the ancient Silk Road**.

By controlling the mountain passes and trade routes connecting Han China, Central Asia, India, and the Roman Mediterranean, the Kushanas transformed northwestern India into a **global commercial clearinghouse, generating unprecedented customs toll revenues and driving subcontinental urban expansion**.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Silk Road Commerce, Currency Purity & Urban Centers',
        body: `### 1. Silk Road Transit & Indo-Roman Trade Arteries
- **Control of Silk Road Branches:** The northern route from China passed through the Tarim Basin (Kashgar, Yarkand, Khotan) directly into Kushana-controlled Bactria (Balkh/Begram) and Gandhara (Taxila), before descending down the Indus valley to ports like **Barbarikon (Indus delta)** and **Barygaza (Bharuch, Gujarat)**.
- **Export Commodities:**
  - *From India:* Fine textiles (muslins), spices (black pepper), ivory, precious gemstones (lapis lazuli, beryl, agates), iron/steel (*Wootz*), and dynamic Buddhist art images.
  - *From China:* Raw and woven silk, porcelain, jade.
  - *From Rome:* High-purity gold and silver coins, Mediterranean wine in amphorae, Italian glass, red coral, and copper.
- **Tolls & Wealth Accumulation:** The Kushana state collected lucrative tolls (*Shulka*) and protection duties on transit merchant caravans.

### 2. The Kushana Numismatic Standard: High Purity Gold Dinaras
- The Kushanas issued the **highest purity gold coins in ancient Indian history** (averaging over $95\text{--}98\%$ pure gold under Vima Kadphises and Kanishka).
- Standardized to the Roman *Aureus* weight of approximately **8 grams (120–124 grains)**, enabling seamless international currency exchange with Roman merchants.
- **Massive Copper Coinage:** The Kushanas also issued a vast quantity of copper coins for everyday domestic market transactions, proving that monetisation deeply permeated common urban life.

### 3. Urban Hubs & Excavated Craft Centers
- **Begram (Kapisa, Afghanistan):** Royal summer residence; excavations yielded the famous **Begram Treasure** (Roman glassware, Chinese Han lacquered boxes, and exquisite Indian ivory carvings, illustrating tripartite global trade).
- **Taxila (Sirkap & Sirsukh):** A massive fortified grid city and university center of international learning.
- **Mathura:** The primary inland trade emporium connecting the northwestern trade route with the Gangetic valley and the Deccan.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Key Examination Anchors & Traps',
        body: `### Critical Exam Distinctions
- **First Gold Coins:** **Indo-Greeks**.
- **Highest Purity Gold Coins:** **Kushanas** (Vima Kadphises and Kanishka).
- **Largest Quantity of Gold Coins:** **Guptas**.
- **Begram Treasure:** Famous excavated site in Afghanistan demonstrating the intersection of Indian, Roman, and Chinese trade goods.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-36-01',
        statement: 'The Kushana economy prospered by controlling the Overland Silk Road transit trade and minting high-purity gold Dinaras pegged to the Roman Aureus standard, with major commercial hubs at Begram, Taxila, and Mathura.',
        claimType: 'ECONOMIC_HISTORY',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'B.N. Mukherjee, The Rise and Fall of the Kushana Empire & NCERT Class 12',
        excerpt: 'Kushana prosperity was powered by Silk Road control, widespread copper monetization, and gold Dinaras matching the Roman Aureus weight standard.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Silk Road Trade, Kushana Economy & Monetization',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'TRADE_AND_NUMISMATIC_PRECISION',
        notes: 'Gold coin purity vs quantity (Kushanas vs Guptas) and Silk Road junctions.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Ancient Indian Trade & Currency Standards',
        relevance: 'HIGH',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_PRECISION',
        notes: 'Kushana gold coins, Begram treasure, and Barbarikon/Barygaza ports.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Kushana Economy | Silk Road junctions | Gold Coins: Highest purity in ancient India (pegged to Roman Aureus, 8g) | Extensive copper coins for masses | Key Trade Hubs = Begram (Ivory/Glass/Silk), Taxila, Mathura | Export = Pepper, spices, muslin, gems.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which ancient dynasty in Indian history is credited with issuing the highest purity gold coins (Dinaras) to facilitate flourishing long-distance trade along the Silk Road?',
        options: ['Indo-Greeks', 'Kushanas', 'Guptas', 'Satavahanas'],
        correctAnswer: 'Kushanas',
        explanation: 'While the Indo-Greeks introduced gold coinage and the Guptas issued the largest total number of gold coins, the Kushanas (under Vima Kadphises and Kanishka) minted gold coins with the highest metallurgical purity, pegged to the Roman Aureus.',
        trapExplanation: 'Guptas issued the most gold coins, but their later issues were significantly debased; Kushana gold was the purest.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-HIST-37',
    slug: 'kanishka-buddhism-and-the-fourth-buddhist-council',
    title: 'Kanishka, Buddhism & Historiography of the Fourth Buddhist Council',
    shortDefinition: 'Kanishka I\'s patronage of Buddhism, the Fourth Buddhist Council at Kundalvana (Kashmir), the rise of Mahayana Buddhism, court luminaries (Ashvaghosha, Nagarjuna, Charaka), and council historiography.',
    difficulty: 'ADVANCED',
    order: 37,
    topicSlug: 'the-kushana-empire',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Great Patron of the North: Kanishka & Mahayana Buddhism',
        body: `Emperor **Kanishka I** holds a status in Northern Buddhist history second only to Emperor Ashoka. 

Under his royal aegis, the **Fourth Buddhist Council** was convened at **Kundalvana in Kashmir**, marking the canonical formalization of **Mahayana Buddhism**, the composition of massive Sanskrit commentaries (**Mahavibhasha**), and the rapid trans-Himalayan transmission of Buddhism into Central Asia and China.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'The Fourth Buddhist Council & Court Luminaries',
        body: `### 1. The Fourth Buddhist Council (c. 72 CE / c. 2nd Century CE)
- **Venue:** **Kundalvana** (identified with Harwan / Srinagar region in Kashmir, or Jalandhar in Punjab according to some traditions).
- **Patron:** Emperor **Kanishka I**.
- **Presiding Dignitaries:** Presided over by the venerable monk **Vasumitra**, with the celebrated poet-philosopher **Ashvaghosha** serving as Vice-President.
- **Accomplishments & Canonization:**
  1. Systematic compilation of the **Mahavibhasha-shastra** (an encyclopedic Sanskrit commentary on the *Sarvastivada Abhidharma*). The commentaries were engraved on copper plates and sealed inside a stone stupa.
  2. Formalization of **Mahayana Buddhism** as an institutional reality:
     - The **Bodhisattva Ideal:** Universal compassionate salvation for all sentient beings.
     - **Buddha as Divine Deity (*Trikaya*):** Anthropomorphic image worship of Gautama Buddha and celestial Bodhisattvas (*Avalokiteshvara, Manjushri, Maitreya*).
     - **Sanskrit as Canonical Medium:** Replacing vernacular Pali/Prakrit with high literary Sanskrit.
- **Historiographical Nuance Across Traditions:**
  - *Northern Tradition (Sarvastivada / Chinese / Tibetan):* Highly celebrated as the definitive 4th Council.
  - *Southern Tradition (Theravada of Sri Lanka):* Does **not recognize the Kashmir Council**, counting the **Aluvihara Council (c. 1st Century BCE in Sri Lanka)** where the Pali Tipitaka was first written on palm leaves as their Fourth Council.

### 2. The Illustrious Court Intellectuals of Kanishka
Kanishka assembled a dazzling galaxy of scholars at his court:
1. **Ashvaghosha:** Greatest Sanskrit dramatist and poet before Kalidasa; author of:
   - *Buddhacharita* (celebrated Sanskrit epic biography of the Buddha).
   - *Saundarananda* (Sanskrit poem on the conversion of Buddha\'s half-brother Nanda).
   - *Sariputraprakarana* (the oldest surviving Sanskrit dramatic play).
2. **Nagarjuna:** The legendary founder of the **Madhyamaka (Middle Way) school of Mahayana philosophy** and formulator of the doctrine of **Shunyata (Emptiness / Relativity)**; composed the *Mulamadhyamakakarika*; often called the "Einstein of India".
3. **Vasumitra:** Author of *Mahavibhasha* and *Samayabhedoparacanacakra* (chronicle of early Buddhist sectarian divisions).
4. **Charaka:** Celebrated royal physician and author of the foundational Ayurvedic medical treatise **Charaka Samhita**.
5. **Parsva:** Senior Buddhist philosopher who advised Kanishka to convene the council.
6. **Agesilaos:** Greek engineer and architect who designed Kanishka\'s colossal stupa at Peshawar.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Key Examination Anchors & Traps',
        body: `### Critical Exam Traps
- **President & Vice-President of 4th Council:** President = **Vasumitra**; Vice-President = **Ashvaghosha**.
- **Fourth Council Venue:** **Kundalvana (Kashmir)**.
- **Author of Buddhacharita:** **Ashvaghosha** (written in Sanskrit).
- **Author of Charaka Samhita:** **Charaka** (court physician of Kanishka).
- **Father of Madhyamaka / Shunyata:** **Nagarjuna** (contemporary of Kanishka).`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-37-01',
        statement: 'Kanishka I convened the Fourth Buddhist Council at Kundalvana (Kashmir) presided over by Vasumitra and Ashvaghosha, which compiled the Mahavibhasha and marked the formalization of Mahayana Buddhism and the golden age of court scholars (Ashvaghosha, Nagarjuna, Charaka).',
        claimType: 'CANONICAL_HISTORY',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Xuanzang (Si-Yu-Ki), Taranatha & NCERT Class 12 Themes in Indian History I',
        excerpt: 'Kanishka convened the 4th Council at Kundalvana in Kashmir under Vasumitra and Ashvaghosha, finalizing the Mahavibhasha and patronizing luminaries Ashvaghosha, Nagarjuna, and Charaka.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Fourth Buddhist Council, Mahayana Buddhism & Kanishka\'s Court',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'DEEP_PHILOSOPHICAL_AND_LITERARY',
        notes: 'Fourth council officials, Ashvaghosha works (Buddhacharita), Nagarjuna (Shunyata), Charaka.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Buddhist Councils & Ancient Sanskrit Literature',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'HIGH_PRECISION_FACTS',
        notes: 'Kundalvana council, Vasumitra, Ashvaghosha, Nagarjuna, and Charaka.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Fourth Buddhist Council (Kundalvana, Kashmir) | Patron = Kanishka I | President = Vasumitra | Vice-President = Ashvaghosha | Text = Mahavibhasha (Sanskrit) | Outcome = Mahayana Buddhism formalized | Court Scholars: Ashvaghosha (Buddhacharita), Nagarjuna (Shunyata/Madhyamaka), Charaka (Charaka Samhita).',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Who served as the Vice-President of the Fourth Buddhist Council held at Kundalvana (Kashmir) during the reign of Kanishka I, and authored the celebrated Sanskrit epic "Buddhacharita"?',
        options: ['Ashvaghosha', 'Vasumitra', 'Nagarjuna', 'Charaka'],
        correctAnswer: 'Ashvaghosha',
        explanation: 'Ashvaghosha, the eminent Buddhist poet and philosopher at Kanishka\'s court, served as the Vice-President of the Fourth Buddhist Council and authored the classic Sanskrit epic Buddhacharita and the drama Sariputraprakarana.',
        trapExplanation: 'Vasumitra was the President; Nagarjuna was the Madhyamaka philosopher; Charaka was the royal physician.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-HIST-38',
    slug: 'gandhara-mathura-coins-and-kushana-cultural-synthesis',
    title: 'Kushana Art & Cultural Synthesis: Gandhara & Mathura Schools',
    shortDefinition: 'The aesthetic revolution under the Kushanas: emergence of the anthropomorphic Buddha image, comparative analysis of Gandhara and Mathura art schools, and multi-pantheon numismatic syncretism.',
    difficulty: 'ADVANCED',
    order: 38,
    topicSlug: 'the-kushana-empire',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Visual Awakening: The First Human Images of the Buddha',
        body: `During the early centuries of the Common Era under the Kushana Empire, Indian art underwent its most momentous revolution: **the emergence of the anthropomorphic (human) representation of the Buddha**, replacing earlier aniconic symbols (stupa, footprints, umbrella, empty throne).

This artistic flourishing unfolded simultaneously across two brilliant regional art ateliers: **The Gandhara School** in the northwest and **The Mathura School** in the Gangetic heartland.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Master Comparative Matrix: Gandhara vs. Mathura School of Art',
        body: `| Dimension | Gandhara School of Art | Mathura School of Art |
| :--- | :--- | :--- |
| **Geographical Zone** | North-Western Frontier (Peshawar, Taxila, Swat valley, Begram). | Central India / Gangetic basin (Mathura, Sonkh, Kankali Tila). |
| **Foreign Influence** | Heavy **Greco-Roman / Hellenistic aesthetic influence** (hence called *Greco-Buddhist art*). | **Purely Indigenous Indian aesthetic tradition** (evolved from earlier Bharhut and Sanchi styles). |
| **Material / Medium** | **Grey Schist Stone**, green phyllite, stucco (lime plaster), and terracotta. | **Spotted / Mottled Red Sandstone** quarried from Sikri (near Agra). |
| **Religious Scope** | Almost exclusively **Buddhist** (Buddha and Bodhisattva sculptures). | **All Three Major Faiths:** **Buddhism, Jainism** (Ayagapatas / Tirthankaras at Kankali Tila), and **Hinduism** (earliest images of Vishnu, Shiva-Lingas, Surya, Kartikeya, Durga). |
| **Depiction of Buddha** | - Hellenistic Apollo-like features.<br>- **Wavy curly hair** tied in an elaborate top-knot (*Ushnisha*).<br>- **Heavy, realistic Roman toga-style drapery** with thick, naturalistic folds covering both shoulders.<br>- Bearded/mustachioed in some forms, sharp Greek nose, calm introspective expression.<br>- Realistic anatomical musculature. | - Robust, energetic, fleshy, muscular Indian body.<br>- **Shaven head or spiraled snail-shell curls**.<br>- **Transparent, clinging drapery** (*wet-drapery effect*) leaving the right shoulder bare (*Ekanshika*).<br>- Open smiling eyes, prominent chest, seated in Padmasana on a lion throne.<br>- Abhaya Mudra (gesture of fearlessness) with auspicious marks (*Chakras, Triratnas*) on palms and soles. |
| **Royal Secular Statuary** | Few royal portraits. | **Monumental secular royal portrait statues** of Kushana kings (e.g. the famous **Headless Statue of Kanishka** at Mat near Mathura, inscribed with his royal title). |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'HISTORICAL_ANALYSIS',
        title: 'Multi-Pantheon Numismatic Syncretism',
        body: `The coins of the Kushana emperors (especially Kanishka and Huvishka) represent an astonishing **eclectic religious synthesis** incorporating deities from four distinct civilizational traditions:
1. **Iranian / Zoroastrian Deities:** *Miiro* (Mithra / Sun), *Mao* (Moon), *Nana* (Mother Goddess / Anahita), *Athsho* (Fire), *Pharro* (Royal Glory).
2. **Greek Deities:** *Helios* (Sun), *Selene* (Moon), *Herakles*.
3. **Indian / Brahmanical Deities:** *Oesho* (Shiva with trident and Nandi bull), *Skanda-Kumara, Vishakha, Mahasena*.
4. **Buddhist Figures:** Explicit images of **BODDO (The Buddha)** seated or standing in Abhaya Mudra, and **METRAU BODDO (Bodhisattva Maitreya)** on gold and copper coins.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Target Exam Anchors & Traps',
        body: `### Key Exam Anchors (UPSC / RPSC)
- **Stone Types:** Gandhara = **Grey Schist / Stucco**; Mathura = **Mottled Red Sandstone**.
- **Religious Inclusivity:** Gandhara was almost purely **Buddhist**; Mathura produced images for **Buddhism, Jainism, and Hinduism**.
- **Headless Statue of Kanishka:** Discovered at **Mat near Mathura**, carved in red sandstone.
- **Kankali Tila (Mathura):** Famous archaeological site yielding ancient **Jain Ayagapatas (votive tablets)** and Tirthankara sculptures.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-38-01',
        statement: 'Under the Kushanas, anthropomorphic Buddha images emerged across the Greco-Roman influenced Gandhara school (grey schist) and indigenous Mathura school (mottled red sandstone), with Mathura also producing the earliest Hindu and Jain deities.',
        claimType: 'ART_AND_ARCHAEOLOGY',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'NCERT Class 11 An Introduction to Indian Art & Class 12 Themes in Indian History I',
        excerpt: 'Gandhara art used grey schist with Hellenistic drapery for Buddhist imagery, while Mathura used mottled red sandstone to sculpt Buddhist, Jain (Kankali Tila), and Brahmanical deities alongside the headless Kanishka statue.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Comparison of Gandhara, Mathura & Amaravati Schools of Art',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'ART_AND_ICONOGRAPHIC_RIGOR',
        notes: 'Detailed material, stylistic, and religious contrasts between Gandhara and Mathura.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims & Mains: Ancient Indian Art & Sculpture Schools',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'STRUCTURED_POINTS',
        notes: 'Grey schist vs red sandstone, headless statue of Kanishka at Mat, and Kankali Tila.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Gandhara School: Grey Schist, Greco-Roman influence, Apollo-like Buddha, wavy hair, thick toga drapery, Buddhist only | Mathura School: Spotted Red Sandstone, indigenous style, fleshy smiling Buddha, transparent clinging drapery, Buddhist + Jain (Kankali Tila) + Hindu + Headless Kanishka statue | Coins: Syncretic (Greek, Iranian, Hindu Oesho/Shiva, Buddha).',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which primary geological material was characteristically utilized by sculptors of the indigenous Mathura School of Art during the Kushana period to produce Buddhist, Jain, and Brahmanical statues?',
        options: ['Mottled / Spotted Red Sandstone', 'Grey Schist Stone', 'White Crystalline Limestone', 'Black Basalt'],
        correctAnswer: 'Mottled / Spotted Red Sandstone',
        explanation: 'The Mathura School of Art exclusively used locally quarried spotted or mottled red sandstone (from Sikri) to produce its robust, energetic sculptures of the Buddha, Jain Tirthankaras, Hindu deities, and royal portraits.',
        trapExplanation: 'Grey Schist was used by the Gandhara school; White Limestone/Marble was used by the Amaravati school in Andhra.',
        difficulty: 'EASY',
      },
    ],
  },

  // =========================================================================
  // TOPIC 78: The Satavahanas & The Deccan
  // =========================================================================
  {
    id: 'CON-HIST-39',
    slug: 'the-satavahana-state-political-evolution-and-gautamiputra-satakarni',
    title: 'The Satavahana State: Political Evolution & Gautamiputra Satakarni',
    shortDefinition: 'The political rise of the Satavahanas in the Deccan, royal capitals at Pratishthana and Amaravati, the zenith under Gautamiputra Satakarni, the Nasik Prasasti, and conflicts with Western Kshatrapas.',
    difficulty: 'INTERMEDIATE',
    order: 39,
    topicSlug: 'satavahanas-and-the-deccan',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Sovereign Masters of the Deccan: The Satavahanas',
        body: `Following the collapse of the Mauryan Empire, the **Satavahana dynasty** (termed **Andhras / Andhrabhrityas** in the Puranas) emerged in the **1st Century BCE** as the supreme imperial power of the Deccan plateau, bridging northern and southern India for over three centuries (c. 1st Century BCE – 3rd Century CE).

Ruling from their primary western capital at **Pratishthana (modern Paithan on the Godavari River in Maharashtra)** and later eastern capital at **Dhanyakataka / Amaravati (Andhra Pradesh)**, the Satavahanas built a wealthy agrarian and maritime empire.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Dynastic Chronicles & Gautamiputra Satakarni',
        body: `### 1. Early Rulers
- **Simuka:** Founder of the dynasty, overthrowing the remnants of the Kanvas and local chieftains.
- **Satakarni I:** Expanded the empire across central India; celebrated in the **Nanaghat Cave Inscription** (issued by his queen *Nayanika / Naganika*) for performing two Ashvamedha sacrifices, Rajasuya, and donating vast wealth and cows to priests.

### 2. The Zenith: Gautamiputra Satakarni (c. 106–130 CE / 23rd Ruler)
- Revived the collapsing fortunes of the Satavahanas after periods of Shaka incursions.
- **The Nasik Cave Prasasti (Inscribed in Year 19 of his son Pulumavi):**
  - Composed by his mother, the Queen Mother **Gautami Balashri**.
  - Celebrates him with formidable royal titles:
    1. **Ekabrahmana:** The Peerless / Incomparable Brahmana.
    2. **Khatiyadapa-manamada:** Destroyer of the pride and arrogance of the Kshatriyas.
    3. **Trisamudra-toya-pita-vahana:** *He whose horses drank the waters of the three oceans* (Bay of Bengal, Arabian Sea, Indian Ocean).
    4. **Saka-Yavana-Pahlava-nisudana:** Destroyer of the Shakas, Greeks, and Parthians.
  - **Decisive Victory Over Nahapana:** Destroyed the Kshaharata dynasty, as proven by the **Jogalthambi coin hoard** where Nahapana's coins were counter-struck by Gautamiputra Satakarni.

### 3. Later Prominent Rulers
- **Vashishthiputra Pulumavi (c. 130–154 CE):** Expanded the empire eastwards into coastal Andhra (capital at Dhanyakataka/Amaravati); conflicted with Rudradaman I of Junagadh.
- **Vashishthiputra Satakarni:** Married the daughter of Western Kshatrapa Mahakshatrapa Rudradaman I (confirmed by Kanheri cave inscriptions).
- **Yajna Sri Satakarni (c. 165–194 CE):** Recovered western territories; issued celebrated **ship-marked coins (bearing two-masted seafaring vessels)**, reflecting vigorous Satavahana naval strength and maritime Indian Ocean commerce.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Key Examination Anchors & Traps',
        body: `### Critical Exam Anchors
- **Nasik Inscription Author:** **Gautami Balashri** (mother of Gautamiputra Satakarni).
- **Nanaghat Inscription Author:** **Queen Nayanika** (wife of Satakarni I).
- **Ship-Marked Coins:** Issued by **Yajna Sri Satakarni**, demonstrating maritime commerce.
- **Capital Cities:** **Pratishthana / Paithan (Maharashtra)** and **Amaravati / Dhanyakataka (Andhra Pradesh)**.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-39-01',
        statement: 'The Satavahana empire ruled the Deccan from capitals at Pratishthana and Amaravati, reaching its zenith under Gautamiputra Satakarni, who was celebrated as Ekabrahmana in the Nasik Prasasti of Gautami Balashri after defeating Western Kshatrapa Nahapana.',
        claimType: 'EPIGRAPHIC_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Nasik Cave Inscription No. 3 (Epigraphia Indica VIII) & NCERT Class 12',
        excerpt: 'The Nasik inscription of Gautami Balashri records Gautamiputra Satakarni as Ekabrahmana, destroyer of the Shakas, and trisamu-dratoyapitavahana, reigning from Paithan.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Satavahanas, Gautamiputra Satakarni & Nasik Prasasti',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'EPIGRAPHIC_AND_POLITICAL_PRECISION',
        notes: 'Titles in Nasik Prasasti (Ekabrahmana, Trisamudrapitapoya), Jogalthambi hoard, Yajna Sri coins.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Deccan Dynasties (Satavahanas)',
        relevance: 'HIGH',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_PRECISION',
        notes: 'Capitals (Paithan/Amaravati), Gautami Balashri, and ship-marked coins.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Satavahanas (Deccan) | Founder = Simuka | Capitals = Pratishthana (Paithan) & Amaravati | Satakarni I = Nanaghat Inscription (Queen Nayanika) | Gautamiputra Satakarni = Nasik Prasasti (by mother Gautami Balashri; titles Ekabrahmana, Trisamudrapitapoya) | Defeated Nahapana (Jogalthambi hoard) | Yajna Sri Satakarni = Ship-marked coins.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'In the celebrated Nasik Cave Prasasti composed by Queen Mother Gautami Balashri, which Satavahana emperor is extolled as "Ekabrahmana" (the Incomparable Brahmana) and "Trisamudra-toya-pita-vahana"?',
        options: ['Simuka', 'Satakarni I', 'Gautamiputra Satakarni', 'Yajna Sri Satakarni'],
        correctAnswer: 'Gautamiputra Satakarni',
        explanation: 'The Nasik Cave Inscription composed by Queen Mother Gautami Balashri in regnal year 19 of Pulumavi extols Gautamiputra Satakarni with the royal epithets "Ekabrahmana" and "Trisamudrapitavahana".',
        trapExplanation: 'Simuka was the founder; Satakarni I is celebrated in Nanaghat; Yajna Sri is famous for ship coins.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-HIST-40',
    slug: 'satavahana-administration-economy-land-grants-and-society',
    title: 'Satavahana Administration, Economy, Land Grants & Deccan Society',
    shortDefinition: 'The administrative architecture of the Satavahanas, royal matronymics, the historical origin of tax-free royal land grants (Brahmadeya/Agrahara), and flourishing western maritime trade.',
    difficulty: 'ADVANCED',
    order: 40,
    topicSlug: 'satavahanas-and-the-deccan',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Institutional Innovations: Matronymics and Royal Land Grants',
        body: `The Satavahanas developed an administrative and socio-economic framework that left an enduring legacy on peninsular Indian statecraft:
1. **Royal Matronymics:** The practice of kings prefixing their personal names with maternal names (*Gautamiputra = son of Gautami; Vashishthiputra = son of Vashishthi*).
2. **The Origin of Royal Land Grants:** The Satavahanas were the **first rulers in Indian history to issue epigraphically recorded tax-free land grants to Brahmanas and Buddhist monks**, initiating a structural shift toward early medieval agrarian relations.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Matronymics, Land Grants & Deccan Trade Economy',
        body: `### 1. The Matronymic System in Satavahana Society
- Kings styled themselves after their mothers (*Gautamiputra, Vashishthiputra, Kausikiputra*).
- **Historiographical Clarification on Matriarchy:** This practice did **not indicate a matriarchal society**. The throne passed strictly from father to son (patrilineal succession). However, it reflects the high social prestige, political influence, and property rights enjoyed by royal women in Deccan society (who independently donated caves, land, and cisterns).

### 2. The Genesis of Tax-Free Royal Land Grants (*Brahmadeya / Agrahara*)
- The earliest surviving epigraphic record of a land grant is found in the **Nanaghat Inscription of Queen Nayanika (1st Century BCE)**, recording the grant of village revenues to priests on the occasion of Vedic sacrifices.
- **Fiscal Immunities (*Pariharas*):** Inscriptions in Nasik and Karle caves show that granted lands were transferred with full immunities:
  - Free from all state taxes (*Akaradayi*).
  - Immune from inspection or interference by royal police or administrative soldiers (*Apraveshya*).
  - Granted in perpetuity (*"to endure as long as the moon and the sun shine"*).
- **Historical Significance:** This practice decentralized state authority, creating autonomous agrarian landholders and laying the foundation for early medieval feudal agrarian formations.

### 3. Administrative Organization
- The empire was partitioned into administrative districts called **Aharas**, governed by civil officers called **Amatyas / Mahamatras**.
- Rural and border areas were administered by military chieftains called **Gaulmikas** (commanders of a *Gulma* military unit: 9 chariots, 9 elephants, 25 horses, 45 foot soldiers), who maintained security and collected agricultural dues.

### 4. Economic Prosperity & Guilds (*Srenis*)
- **Flourishing Craft Guilds:** Potters (*Kularika*), weavers (*Kolika*), oil-pressers (*Tilapisaka*), and bamboo workers were organized into prosperous self-regulating *Srenis*.
- Guilds functioned as **banking institutions**: royal patrons and merchants deposited permanent endowments (*Akshaya-nivi*) with guilds, with the annual interest dedicated to feeding Buddhist monks or providing medicines.
- **Thriving Seaports:** Controlled dynamic western Arabian Sea ports (**Kalyan, Sopara, Chaul, Bharuch**) handling trade in textiles, spices, Roman wine, and bullion.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Key Examination Anchors & Traps',
        body: `### Critical Exam Distinctions
- **First Dynasty to Give Land Grants in India:** **Satavahanas** (Nanaghat and Nasik inscriptions).
- **Gaulmika:** Satavahana rural military administrator.
- **Akshaya-nivi:** Permanent financial deposit with craft guilds acting as banks.
- **Matronymics Reality:** Reflects high female status, but **succession remained patrilineal** (father to son).`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-40-01',
        statement: 'The Satavahanas introduced the earliest epigraphically recorded tax-free royal land grants with fiscal exemptions (Pariharas) in India and practiced royal matronymics while maintaining patrilineal succession.',
        claimType: 'SOCIO_ECONOMIC_HISTORY',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Nanaghat Inscription, Nasik Cave Inscription No. 11 & NCERT Class 12',
        excerpt: 'Satavahana inscriptions provide the earliest evidence of land grants to Brahmanas and Buddhist monks with tax immunities (pariharas), alongside royal matronymics.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Satavahana Administration, Land Grants & Guild Banking',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'SOCIO_ECONOMIC_SYNTHESIS',
        notes: 'Origins of land grants, Pariharas, Gaulmika system, and Akshaya-nivi guild deposits.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Ancient Land Grant System & Trade Guilds',
        relevance: 'HIGH',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_PRECISION',
        notes: 'First land grants in India, Amatyas, and western seaports (Kalyan/Sopara).',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Satavahana Innovations | First royal tax-free land grants (Brahmadeya) in India (Nanaghat/Nasik) with Pariharas (tax immunities) | Matronymics (Gautamiputra) = high female status, but patrilineal succession | District = Ahara (under Amatya) | Rural military chief = Gaulmika | Guilds (Srenis) = Banks for Akshaya-nivi deposits.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which ancient Indian ruling dynasty is credited with issuing the earliest epigraphically documented tax-free royal land grants (with administrative exemptions) to Buddhist monks and Brahmanas?',
        options: ['Mauryas', 'Satavahanas', 'Guptas', 'Vakatakas'],
        correctAnswer: 'Satavahanas',
        explanation: 'The Satavahanas were the first rulers in Indian history to issue epigraphically recorded tax-exempt land grants (as attested in the Nanaghat and Nasik inscriptions of the 1st Century BCE–2nd Century CE).',
        trapExplanation: 'While the Guptas issued the largest number of copper-plate land grants later, the practice originated with the Satavahanas.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-HIST-41',
    slug: 'satavahana-epigraphy-prakrit-literature-religion-and-amaravati-art',
    title: 'Satavahana Epigraphy, Prakrit Literature, Religion & Amaravati Art',
    shortDefinition: 'Satavahana cultural synthesis: official Prakrit language, King Hala\'s Gatha Saptasati, religious syncretism, rock-cut Western Ghats chaityas (Karle), and the narrative marble reliefs of the Amaravati School of Art.',
    difficulty: 'ADVANCED',
    order: 41,
    topicSlug: 'satavahanas-and-the-deccan',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Cultural Flowering of the Deccan: Prakrit and Marble Stupas',
        body: `The Satavahana era witnessed a magnificent cultural synthesis across the Deccan:
1. **Prakrit Literary Golden Age:** The royal adoption and patronage of **Prakrit (Maharashtri dialect in Brahmi script)** as the official language of government and high literature.
2. **Rock-Cut Cave Architecture:** Monumental Buddhist rock-cut chaitya halls and viharas carved into the basalt cliffs of the Western Ghats (**Karle, Kanheri, Bhaja, Nasik, Ajanta**).
3. **The Amaravati School of Art:** The rise of a dynamic, narrative sculptural school in coastal Andhra on the banks of the Krishna River.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Prakrit Literature, Western Ghats Caves & Amaravati Art',
        body: `### 1. Prakrit Language & King Hala\'s *Gatha Saptasati*
- The Satavahanas used **Prakrit as their official administrative language** and royal inscriptional medium.
- **Gatha Saptasati (Sattasai — "Seven Hundred Verses"):**
  - A celebrated literary anthology compiled by **Satavahana King Hala (17th ruler)**.
  - Written in **Maharashtri Prakrit** verse (*Arya metre*).
  - Depicts vibrant rural life, romance, agricultural landscapes, and social customs of ordinary Deccan villagers and peasant women.
- **Gunadhya\'s *Brihatkatha*:** Composed in the lost *Paisachi Prakrit* at the Satavahana court (the original source for the later *Kathasaritsagara*).

### 2. Rock-Cut Cave Architecture in the Western Ghats
- Supported by merchant guilds and royal patronage, monks and artisans excavated monumental Buddhist rock-cut complexes:
  - **Karle Great Chaitya Hall (Pune, Maharashtra):** The **largest and most magnificent rock-cut chaitya hall in India**, featuring a majestic ribbed wooden ceiling, 37 octagonal pillars with sculpted couples on elephants, and a monolithic stone stupa.
  - **Kanheri Caves (Mumbai):** Over 100 rock-cut caves serving as a massive monastic university connected to the port of Sopara.
  - **Bhaja, Bedsa, Nasik (*Pandavleni*), and early Ajanta Caves (Caves 9 and 10).**

### 3. The Amaravati School of Art (Andhra Pradesh)
- **Geographical Focus:** Flourished in the lower Krishna-Godavari valley at **Amaravati, Nagarjunakonda, Jaggayyapeta, and Goli**.
- **Material Used:** Distinctive **White Limestone (often called Amaravati White Marble)**.
- **Key Stylistic & Iconographic Characteristics:**
  1. **Dynamic Narrative Panels:** Specialized in complex narrative relief medallions and friezes depicting Jataka tales and events of the Buddha\'s life.
  2. **Intense Human Movement & Emotion:** Figures are carved in graceful, slender, elongated postures with animated expressions, celebrating human life, courtly elegance, and spiritual devotion.
  3. **Transition from Aniconic to Iconic:** Early phases (c. 2nd Century BCE) depicted Buddha through symbols (empty throne, footprints); later phases (c. 1st–2nd Century CE) incorporated sublime anthropomorphic Buddha figures.
  4. **Famous Masterpieces:** *Queen Maya\'s Dream of the White Elephant*, *The Taming of the Wild Elephant Nalagiri in Rajgir*, *The Great Renunciation*.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Key Examination Anchors & Traps',
        body: `### Key Exam Anchors (UPSC / RPSC)
- **Author of Gatha Saptasati:** **Satavahana King Hala** (composed in **Maharashtri Prakrit**).
- **Largest Rock-Cut Chaitya in India:** **Karle Chaitya Hall (Maharashtra)**.
- **Stone of Amaravati School:** **White Limestone / White Marble**.
- **Location of Amaravati School:** **Krishna River Valley (Andhra Pradesh)** under Satavahana and Ikshvaku patronage.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-41-01',
        statement: 'The Satavahana period produced King Hala\'s Prakrit classic Gatha Saptasati, the Karle rock-cut Chaitya, and the white limestone narrative relief art of the Amaravati school in the Krishna valley.',
        claimType: 'ART_AND_LITERATURE',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Gatha Saptasati (Hala), NCERT Class 11 Indian Art & Class 12 Themes in Indian History I',
        excerpt: 'Satavahana culture flourished through Hala\'s Maharashtri Prakrit Gatha Saptasati, the Karle Chaitya, and the white limestone relief panels of Amaravati depicting Jatakas.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Amaravati School of Art, Karle Caves & Prakrit Literature',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'ART_AND_LITERARY_PRECISION',
        notes: 'Comparison of Amaravati with Gandhara/Mathura, Karle chaitya features, and Gatha Saptasati.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Ancient Literature & Rock-Cut Architecture',
        relevance: 'HIGH',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_PRECISION',
        notes: 'King Hala (Gatha Saptasati), Karle cave site (Maharashtra), and Amaravati white limestone.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Prakrit Classic = Gatha Saptasati by King Hala (Maharashtri Prakrit, 700 verses) | Karle Chaitya (Maharashtra) = Largest rock-cut Buddhist chaitya hall in India | Amaravati School (Krishna Valley, AP) = White Limestone / Marble, dynamic narrative relief panels (Jatakas, Nalagiri elephant).',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which Satavahana king is universally celebrated for compiling the famous ancient Prakrit literary anthology "Gatha Saptasati" (Sattasai), comprising 700 romantic and pastoral verses?',
        options: ['Simuka', 'King Hala', 'Satakarni I', 'Gautamiputra Satakarni'],
        correctAnswer: 'King Hala',
        explanation: 'King Hala, the 17th Satavahana ruler, compiled the Gatha Saptasati (Sattasai), a masterly collection of 700 verses in Maharashtri Prakrit celebrating the everyday life, love, and countryside of ancient Maharashtra.',
        trapExplanation: 'Simuka was the founder; Satakarni I performed sacrifices; Gautamiputra was the military conqueror.',
        difficulty: 'EASY',
      },
    ],
  },

  // =========================================================================
  // TOPIC 79: Sangam Age & Early Tamilakam
  // =========================================================================
  {
    id: 'CON-HIST-42',
    slug: 'sangam-literature-early-tamil-polities-and-the-tinai-framework',
    title: 'Sangam Literature, Early Tamil Polities & The Tinai Framework',
    shortDefinition: 'The socio-political organization of early Tamilakam (c. 3rd BCE – 3rd CE), the Sangam literary corpus (Tolkappiyam, Ettuthokai, Pattuppattu), the Tinai eco-cultural landscape framework, and the Three Crowned Monarchs (Muventar).',
    difficulty: 'ADVANCED',
    order: 42,
    topicSlug: 'sangam-age-and-early-tamilakam',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Dawn of Peninsular History: Early Tamilakam and the Sangams',
        body: `The period approximately spanning **300 BCE to 300 CE** marks the **Sangam Age** in the southern tip of the Indian subcontinent—the land south of the Tirupati hills (*Venkatam*) known as **Tamilakam**.

The era derives its name from the legendary **Sangams (literary academies or assemblies of poets)** held at **Madurai** under the royal patronage of the **Pandya kings**. The surviving corpus of early Old Tamil poems provides an extraordinarily vivid, firsthand window into early southern state formation, heroic values, ecological adaptation, and social structures.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Classification of Sangam Corpus & The Five Eco-Zones (*Aintinai*)',
        body: `### 1. The Classical Sangam Literary Corpus
The surviving literature is classified into distinct functional and thematic strata:
1. **Tolkappiyam (by Tolkappiyar):** The earliest surviving Old Tamil work; an encyclopedic treatise on **Grammar, Poetics, and Social Conventions**. It divides human life into **Agam** (inner, private romantic life) and **Puram** (outer, public life of war, heroism, kingship, and charity).
2. **The Eight Anthologies (*Ettuthokai*):** Collections of short lyrical poems, including:
   - *Purananuru* (400 heroic poems on kings, wars, and ethics).
   - *Akananuru* (400 love poems).
   - *Kuruntokai*, *Narrinai*, *Aingurunuru*, *Padirruppattu* (praising Chera kings), *Paripadal*, *Kalittokai*.
3. **The Ten Long Idylls (*Pattuppattu*):** Longer descriptive narrative poems, including *Tirumurukarruppatai* (dedicated to God Murugan), *Porunararruppatai*, *Pattinappalai* (describing the great Chola seaport of Puhar).
4. **The Twin Post-Sangam Epics (c. 5th–6th Century CE):**
   - **Silappadikaram ("The Jeweled Anklet" by Ilango Adigal):** Tragic tale of *Kovalan*, his faithful wife *Kannagi*, and courtesan *Madhavi* in Puhar, Madurai, and Vanji; established the famous **Pattini (Chaste Wife) Cult**.
   - **Manimekalai (by Sittalai Sattanar):** Buddhist philosophical epic following the spiritual quest of Kovalan and Madhavi\'s daughter *Manimekalai*.

### 2. The Five Eco-Cultural Landscapes (*Aintinai*)
Sangam poetry organized all human emotion, economic activity, and geography into **Five Tinais (Ecological Landscapes)**:

| Tinai (Eco-Zone) | Physical Landscape | Primary Economic Subsistence | Chief Deity | Poetic Mood (*Agam*) |
| :--- | :--- | :--- | :--- | :--- |
| **1. Kurinji** | Hilly / Mountainous terrain | Hunting and Honey-gathering | **Murugan / Seyon** | Clandestine union of lovers |
| **2. Mullai** | Forest / Pastoral pastureland | Cattle-rearing and shifting agriculture | **Mayon (Krishna/Vishnu)** | Patient waiting of the wife |
| **3. Marudham** | Fertile Alluvial river valleys | Settled wet-paddy agriculture | **Vendan (Indra)** | Lovers\' quarrel / sulking |
| **4. Neydal** | Coastal / Littoral seacoast | Fishing, Pearl diving, Salt manufacturing | **Varunan (Sea God)** | Anxious lamentation |
| **5. Palai** | Parched Arid wasteland / Desert | Highway robbery, cattle raiding, warfare | **Kotravai (Goddess of War)** | Dangerous journey / separation |

### 3. The Three Crowned Monarchs (*Muventar*) & Velir Chieftains
1. **The Cheras (Symbol: Bow & Arrow):**
   - Ruled central/northern Kerala and western Tamil Nadu (Kongu region); capital at **Vanji / Karur**; primary seaports at **Muziris** and **Tondi**.
   - Greatest King: **Cheran Senguttuvan** ("Red Chera"), who according to the *Silappadikaram* led a military expedition to the Himalayas to bring stone for the idol of Goddess Kannagi (*Pattini cult*).
2. **The Cholas (Symbol: Tiger):**
   - Ruled the fertile Kaveri delta (*Chola-mandalam*); capital at **Uraiyur** (famed for cotton textiles); primary international seaport at **Puhar / Kaveripattinam**.
   - Greatest King: **Karikala Chola** (defeated a confederacy of Cheras and Pandyas at the **Battle of Venni**; constructed the **Kallanai Dam / Grand Anicut** on the Kaveri River).
3. **The Pandyas (Symbol: Carp / Twin Fish):**
   - Ruled southern Tamil Nadu (Madurai/Tirunelveli); capital at **Madurai** (famed for pearl markets); primary port at **Korkai**.
   - Greatest King: **Nedunjeliyan** (defeated a combined army at the **Battle of Talaiyalanganam**; the king in the *Silappadikaram* who mistakenly executed Kovalan and died of grief).
4. **The Velir Chieftains:** Autonomous local warlords/chiefs ruling hill tracts, celebrated for lavish generosity to wandering Sangam bards (*e.g. King Pari, who offered his golden chariot as support to a fragile jasmine vine*).`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Key Examination Anchors & Traps',
        body: `### Critical Exam Distinctions
- **Three Dynastic Symbols:** Cheras = **Bow**; Cholas = **Tiger**; Pandyas = **Fish**.
- **Kallanai / Grand Anicut on Kaveri:** Built by **Karikala Chola**.
- **Pattini Cult / Kannagi:** Instituted by Chera King **Senguttuvan**.
- **Tolkappiyam Themes:** Divided into **Agam** (inner love) and **Puram** (outer war/heroism).
- **Five Tinais:** Kurinji (Hills), Mullai (Pasture), Marudham (Paddy), Neydal (Coast), Palai (Wasteland).`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-42-01',
        statement: 'Sangam literature (Tolkappiyam, Ettuthokai, Pattuppattu) records the socio-political organization of Tamilakam based on the five ecological Tinais and the rule of the Three Crowned Kings: Cheras (Bow), Cholas (Tiger), and Pandyas (Fish).',
        claimType: 'HISTORICAL_LITERATURE',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Tolkappiyam, Purananuru, Silappadikaram & NCERT Class 11/12',
        excerpt: 'Sangam texts categorize Tamilakam across five eco-zones (Tinais) under the Muventar: Cheras (Vanji), Cholas (Uraiyur/Puhar under Karikala), and Pandyas (Madurai under Nedunjeliyan).',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Sangam Literature, Tinais Framework & Early Tamil State Formation',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'ECOLOGICAL_AND_LITERARY_RIGOR',
        notes: 'Five Tinais matrix, Muventar symbols/capitals, Karikala, Senguttuvan, and Tolkappiyam.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Sangam Age Literature & Dynasties',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'FACTUAL_PRECISION',
        notes: 'Muventar (Chera/Chola/Pandya), symbols, Silappadikaram, and Kallanai Dam.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Sangam Age (c. 300 BCE – 300 CE) | Grammar = Tolkappiyam (Agam = Love, Puram = War) | Anthologies = Ettuthokai & Pattuppattu | Epics = Silappadikaram (Kannagi, Pattini cult) & Manimekalai | 5 Tinais = Kurinji (Hills), Mullai (Forest), Marudham (Paddy), Neydal (Coast), Palai (Desert) | Muventar = Cheras (Bow, Vanji, Senguttuvan), Cholas (Tiger, Puhar, Karikala/Kallanai dam), Pandyas (Fish, Madurai, Nedunjeliyan).',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'In the ancient Sangam literary tradition of South India, the "Tinai" eco-cultural classification system designated fertile, alluvial, agricultural river-valley wetlands by which term?',
        options: ['Kurinji', 'Mullai', 'Marudham', 'Neydal'],
        correctAnswer: 'Marudham',
        explanation: 'In the Sangam Tinai framework, "Marudham" represented the fertile, irrigated agricultural river-valley plains where settled wet-paddy farming was practiced under the patronage of the god Vendan (Indra).',
        trapExplanation: 'Kurinji was mountainous hunting land; Mullai was pastoral land; Neydal was coastal fishing land.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-HIST-43',
    slug: 'tamilakam-economy-indo-roman-maritime-trade-and-archaeology',
    title: 'Tamilakam Economy, Indo-Roman Maritime Trade & Archaeological Correlates',
    shortDefinition: 'The booming Indian Ocean maritime trade between Tamilakam and the Roman Empire, major ports (Muziris, Puhar, Arikamedu), monsoon navigation, and archaeological excavations at Arikamedu and Keeladi.',
    difficulty: 'ADVANCED',
    order: 43,
    topicSlug: 'sangam-age-and-early-tamilakam',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Indian Ocean Maritime Boom: Tamilakam and the Roman Empire',
        body: `Between the **1st Century BCE and 2nd Century CE**, Tamilakam emerged as the central pivot of **global Indian Ocean maritime commerce**, driven by the discovery of regular monsoon winds and insatiable Roman aristocratic demand for Indian luxury commodities.

This international commerce poured colossal quantities of **Roman gold and silver bullion** into southern India, transforming coastal fishing villages into cosmopolitan international emporia.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Trade Mechanics, Export Commodities & Major Seaports',
        body: `### 1. The Monsoon Navigation Breakthrough
- Around **45–47 CE**, the Greek navigator **Hippalus** charted the seasonal monsoon winds across the Arabian Sea (South-West monsoon for outward voyages from the Red Sea to India in July; North-East monsoon for return voyages in November).
- Enabled direct, rapid open-sea trans-oceanic navigation between Roman Egyptian ports (**Berenike and Myos Hormos**) and Indian ports, cutting travel time to under 40 days.

### 2. Trade Goods & The Roman Bullion Drain
- **Indian Exports to Rome:**
  - **Black Pepper (*Yavanapriya* — "The Beloved of the Greeks/Romans"):** The supreme spice export, weighed and sold for its weight in silver in Rome.
  - **Fine Textiles:** Translucent muslins and dyed silks from Uraiyur and Madurai.
  - **Precious Stones & Pearls:** Fine natural pearls from the Gulf of Mannar (**Korkai**), beryl for Roman jewelry from **Kodumanal (Erode)**, diamonds, and sapphires.
  - Exotic animals (tigers, lions, leopards, peacocks) for Roman gladiatorial amphitheaters.
- **Roman Imports to India:**
  - **Gold and Silver Bullion (Aurei and Denarii):** Hundreds of hoards containing thousands of Roman gold coins have been unearthed across Tamil Nadu, Kerala, and Andhra (bearing heads of Augustus, Tiberius, Nero).
  - Mediterranean wine stored in two-handled terracotta **Amphorae**.
  - **Arretine & Rouletted Ware:** Red glazed Roman pottery.
  - Italian glassware, red Mediterranean coral, tin, lead, and Greek female slave courtesans (*Yavanis*).
- **Pliny\'s Lament:** Roman natural historian **Pliny the Elder (c. 77 CE)** lamented in his *Naturalis Historia* that the Roman Empire was being financially drained of over **100 million sesterces annually** to purchase luxury commodities from India, China, and Arabia: *"So dearly do we pay for our luxuries and our women!"*

### 3. Major International Seaports of Tamilakam
1. **Muziris / Muciri (modern Pattanam / Kodungallur, Kerala):**
   - The greatest port of the Cheras on the Malabar coast, described in the *Periplus Maris Erythraei* and *Tamil Sangam poems*: *"The beautifully built ships of the Yavanas arrived with gold and departed with pepper."*
   - Excavations revealed a Roman trading warehouse, wharf, and evidence of a temple dedicated to Roman Emperor Augustus.
2. **Puhar / Kaveripattinam (Tamil Nadu):**
   - The supreme port of the Cholas at the mouth of the Kaveri River.
   - Vividly described in the Sangam poem *Pattinappalai* as having separate quarters for foreign *Yavana* merchants, bustling customs warehouses stamped with the royal Chola tiger seal, and lighthouses.
3. **Korkai (Tuticorin, Tamil Nadu):**
   - The ancient Pandya seaport celebrated globally for its **pearl fishery**.
4. **Arikamedu (near Puducherry):**
   - Identified with the **Podouke emporium** of the *Periplus*.
   - Excavated by **Sir Mortimer Wheeler (1945)**, revealing a permanent Roman trading factory (*emporion*), brick warehouses, dyeing vats, Roman amphora fragments, and Arretine rouletted pottery.

### 4. Recent Archaeological Landmark: Keeladi Excavations
- Located on the banks of the **Vaigai River (near Madurai, Tamil Nadu)**.
- Stratigraphic excavations by the Archaeological Survey of India (ASI) and Tamil Nadu State Archaeology Department revealed:
  - An **urbanized, literate settlement dating back to the 6th–5th Century BCE**, pushing the chronological antiquity of Sangam urbanization centuries earlier.
  - Large brick structures, drainage systems, weaving tools, dyeing vats, carnelian beads, and hundreds of **potsherds inscribed with Tamil-Brahmi script**, proving widespread literacy among ordinary artisans and merchants.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Key Examination Anchors & Traps',
        body: `### Critical Exam Traps
- **Yavanapriya:** Sanskrit/Prakrit term for **Black Pepper** ("beloved of the Yavanas/Romans").
- **Arikamedu Excavator:** **Sir Mortimer Wheeler (1945)**; ancient name = **Podouke**.
- **Pliny\'s Work:** **Naturalis Historia** (lamenting Roman gold drain to India).
- **Periplus Maris Erythraei:** Anonymous 1st Century CE Greek navigator guide to Indian Ocean ports.
- **Keeladi Site:** Urban Sangam settlement on the **Vaigai River near Madurai**.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-43-01',
        statement: 'Indo-Roman maritime trade in the Sangam era flourished through ports like Muziris, Puhar, and Arikamedu (Podouke), exporting pepper (Yavanapriya) and pearls in exchange for Roman gold coinage and amphorae, corroborated by Pliny and excavations at Arikamedu and Keeladi.',
        claimType: 'ARCHAEOLOGICAL_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Periplus Maris Erythraei, Pliny (Naturalis Historia VI), Wheeler (Arikamedu 1945) & ASI Keeladi Reports',
        excerpt: 'Indo-Roman commerce exported pepper (Yavanapriya) and pearls from Muziris and Korkai for Roman gold coins and amphorae, confirmed at Arikamedu and Keeladi on the Vaigai river.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Indo-Roman Maritime Trade, Seaports & Archaeological Correlates (Arikamedu, Keeladi)',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'ARCHAEOLOGICAL_AND_TRADE_RIGOR',
        notes: 'Monsoon navigation (Hippalus), Roman coin hoards, Arikamedu excavations, and Keeladi findings.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims & Mains: Ancient Maritime Trade & Roman Contacts',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'FACTUAL_PRECISION',
        notes: 'Yavanapriya (pepper), Muziris, Arikamedu, Pliny, and Periplus Maris Erythraei.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Indo-Roman Trade (1st BCE – 2nd CE) | Navigation = Hippalus monsoon discovery (c. 45 CE) | Exports = Black Pepper (Yavanapriya), pearls (Korkai), muslins, beryl | Imports = Roman Gold coins (Augustus/Tiberius), Wine amphorae, Arretine pottery | Ports = Muziris (Kerala), Puhar (Kaveripattinam, Chola), Korkai (Pandya), Arikamedu (Podouke, excavated by Mortimer Wheeler) | Keeladi (Vaigai river, Madurai) = Urban literate Tamil-Brahmi settlement | Author = Pliny (Naturalis Historia: 100M sesterces drain).',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'In ancient Indian and Classical Western literature, which highly valued export commodity shipped in vast quantities from the ports of Malabar (Muziris) to Rome was specifically designated as "Yavanapriya"?',
        options: ['Fine Silk Fabric', 'Black Pepper', 'Cardamom', 'Pearl Oysters'],
        correctAnswer: 'Black Pepper',
        explanation: 'Black Pepper was termed "Yavanapriya" (literally "beloved of the Greeks/Romans / Yavanas") because of the insatiable Roman demand for it as a culinary spice and food preservative, for which Romans paid in gold bullion.',
        trapExplanation: 'While pearls and silks were exported, the specific term "Yavanapriya" universally designates Black Pepper.',
        difficulty: 'EASY',
      },
    ],
  },
];

export async function seedBatchAncientIndiaBatch4CanonicalKnowledge(): Promise<void> {
  console.log('Seeding Ancient India (Batch 4: Post-Mauryan India to Sangam Age) Canonical Benchmark...');

  // 1. Ensure Target Subject exists
  const subject = await db.subject.findUnique({
    where: { slug: 'ancient-indian-history' },
  });
  if (!subject) {
    throw new Error('Subject "ancient-indian-history" must exist before seeding Batch 4.');
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
      description: 'Authoritative first-principles academic synthesis integrating Archaeological Survey of India (ASI) site reports, Epigraphia Indica, Corpus Inscriptionum Indicarum, Sangam textual concordances, and peer-reviewed epigraphic and numismatic records.',
    },
  });

  // 4. Ensure Topics exist (Topics 75 to 79)
  const topicDefs = [
    {
      slug: 'indo-greeks-and-post-mauryan-transformations',
      title: 'Indo-Greeks & Post-Mauryan Transformations',
      description: 'Post-Mauryan political regionalization under the Shungas and Kanvas, Indo-Greek expansion, King Menander (Milinda), the Milindapanha, bilingual portrait coinage, and the Besnagar Heliodorus Garuda pillar.',
      scope: 'Shunga-Kanva dynasties, Pushyamitra Shunga, Menander at Sakala, Indo-Greek numismatics, and Bhagavata Vaishnavism.',
      order: 75,
    },
    {
      slug: 'shakas-and-western-kshatrapas',
      title: 'Shakas & Western Kshatrapas',
      description: 'Central Asian Shaka migrations, satrapal administration, Kshaharata dynasty under Nahapana, Jogalthambi hoard, Kardamaka dynasty under Rudradaman I, and the Junagadh classical Sanskrit inscription (150 CE).',
      scope: 'Five Shaka branches, Nahapana vs Gautamiputra Satakarni, Rudradaman I, and Sudarshana lake civil engineering chronicle.',
      order: 76,
    },
    {
      slug: 'the-kushana-empire',
      title: 'The Kushana Empire: Silk Road, Art & Buddhism',
      description: 'Yuezhi origins, Kujula and Vima Kadphises, Kanishka I, twin capitals (Peshawar and Mathura), Silk Road commerce, high-purity gold Dinaras, Fourth Buddhist Council, Gandhara and Mathura art schools.',
      scope: 'Rabatak inscription, Silk Road transit trade, Mahayana Buddhism, Ashvaghosha, Nagarjuna, Charaka, and anthropomorphic Buddha sculptures.',
      order: 77,
    },
    {
      slug: 'satavahanas-and-the-deccan',
      title: 'The Satavahanas & The Deccan',
      description: 'Satavahana state formation, capitals at Paithan and Amaravati, Gautamiputra Satakarni, Nasik Prasasti, royal matronymics, earliest tax-free royal land grants, Prakrit literature (Gatha Saptasati), Karle Chaitya, and Amaravati marble relief art.',
      scope: 'Nanaghat and Nasik inscriptions, land grants with Pariharas, Gaulmikas, guild banking, King Hala, and white limestone Amaravati art.',
      order: 78,
    },
    {
      slug: 'sangam-age-and-early-tamilakam',
      title: 'Sangam Age & Early Tamilakam',
      description: 'Early Tamilakam, Sangam literary corpus (Tolkappiyam, Ettuthokai, Pattuppattu, Silappadikaram), the five ecological Tinais, Three Crowned Kings (Cheras, Cholas, Pandyas), Indo-Roman maritime trade, Muziris, Arikamedu, and Keeladi excavations.',
      scope: 'Sangam poetics (Agam/Puram), Karikala Chola, Senguttuvan, Yavanapriya pepper export, Pliny\'s bullion drain, and urban Tamil-Brahmi archaeology.',
      order: 79,
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
  for (const c of ANCIENT_INDIA_BATCH_4_CONCEPTS) {
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

  console.log(`Successfully seeded ${ANCIENT_INDIA_BATCH_4_CONCEPTS.length} Ancient India (Batch 4: Post-Mauryan to Sangam Age) canonical concepts.`);
}
