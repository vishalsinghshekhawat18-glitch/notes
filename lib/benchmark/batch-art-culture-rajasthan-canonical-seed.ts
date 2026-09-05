import { db } from '../db/client';

export interface ArtCultureRajasthanConceptDef {
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

export const ART_CULTURE_RAJASTHAN_CONCEPTS: ArtCultureRajasthanConceptDef[] = [
  // =========================================================================
  // TOPIC 1: Indian Classical Temple & Stupa Architecture
  // =========================================================================
  {
    id: 'CON-ART-01',
    slug: 'buddhist-stupa-architecture-and-sanchi-morphology',
    title: 'Buddhist Sacred Architecture: Stupa Morphology, Relic Worship & Sanchi Symbolism',
    shortDefinition: 'Architectural evolution and sacred geometry of the Buddhist Stupa: The transition from Vedic burial tumuli to Ashokan brick mounds enshrining bodily relics (Dhatu-Garbha), and the classical anatomical structure exemplified by the Great Stupa at Sanchi: Anda (cosmic egg), Harmika (abode of devas), Yashti (axis mundi), Chhatra (Three Jewels: Buddha, Dharma, Sangha), Medhi (elevated terrace), Vedika (stone railing), and the four carved Torana gateways depicting Jataka narratives and aniconic symbols.',
    difficulty: 'ADVANCED',
    order: 1,
    topicSlug: 'indian-temple-and-stupa-architecture',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Cosmic Mound: Transforming Mortal Remains into an Axis of Enlightenment',
        body: `Why did ancient Indian Buddhists erect colossal solid stone domes instead of hollow halls for communal congregational worship?

In Buddhist cosmology, the **Stupa** is not a temple to enter; it is a **solid architectural reliquary** and an embodied symbol of the Parinirvana of the Buddha:
* **The Origin:** Pre-Buddhist Vedic burial mounds (*Thupa*) were simple earthen tumuli piled over the ashes of kings. Following the Mahaparinirvana of Gautama Buddha at Kushinagar, his bodily relics were divided into eight portions among contemporary kingdoms.
* **The Ashokan Transformation:** In the 3rd century BCE, Emperor Ashoka redistributed these relics across thousands of stupas across the subcontinent to anchor imperial Buddhist dharma.
* **The Pilgrim\'s Journey:** Because the stupa interior is completely solid, worship is exclusively external through **Pradakshina (circumambulation)** in a clockwise direction, symbolically aligning the pilgrim with the cosmic rotation of the sun and celestial spheres around the central World Mountain.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'Anatomy of the Buddhist Stupa (The Great Stupa at Sanchi) Matrix',
        body: `### 1. Structural Anatomy of a Classical Stupa
* **Relic Casket (*Dhatu-Garbha*):** Sealed deep within the core, holding Buddha's corporeal relics (bone, tooth, ash) or those of revered Arhats (Sariputta and Mahamoggallana).
* **Anda (Egg):** The solid hemispherical stone and brick dome representing the cosmic egg, the dome of the heavens, and the cycle of existence.
* **Harmika:** The square railed balcony situated immediately atop the summit of the Anda, symbolizing the sacred dwelling place of the devas (gods).
* **Yashti:** The central central spire/mast anchored into the Anda and rising through the Harmika, representing the cosmic axis (*Axis Mundi*) connecting earth to heaven.
* **Chhatras (Triple Umbrellas):** Three layered stone discs crowning the Yashti, symbolizing imperial protection and the **Three Jewels (Triratna: Buddha, Dharma, Sangha)**.
* **Medhi:** An elevated circular stone circumambulatory terrace surrounding the base of the Anda, accessed via double staircases (*Sopana*).
* **Vedika:** The surrounding monumental stone railing isolating sacred space from the profane world, composed of pillars (*Thaba*), cross-bars (*Suchi*), and coping stones (*Ushnisha*).
* **Toranas:** Four monumental carved stone gateways facing the cardinal directions (North, South, East, West), intricately carved with narrative reliefs.

---

### 2. Aniconic Buddhist Art on the Torana Gateways
* Early Buddhist art at Sanchi (Shunga and early Satavahana periods, 1st century BCE to 1st century CE) was **strictly aniconic**: the Buddha himself was never portrayed in human form.
* **Symbolic Representations:**
  1. **Wheel (*Dharmachakra*):** Represents the First Sermon at Sarnath (*Dhammacakkappavattana Sutta*).
  2. **Bodhi Tree / Empty Throne:** Represents Enlightenment at Bodh Gaya.
  3. **Footprints (*Buddhapaduka*):** Represents the Buddha's physical presence and spiritual path.
  4. **The Stupa Motif:** Represents the final Great Decease (*Mahaparinirvana*).
  5. **Salabhanjikas:** Sensuous female tree-spirits (Yakshis) grasping branch of a flowering tree, representing fertility and auspicious protection.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'The Architectural Transition: Ashokan Brick to Shunga-Satavahana Stone',
        body: `### The Stratigraphic Evolution of Sanchi Stupa No. 1
1. **The Ashokan Phase (c. 250 BCE):**
   * Built of burnt bricks, roughly half the diameter of the present monument, accompanied by an Ashokan polished sandstone pillar with a lion capital.
2. **The Shunga Expansion (2nd Century BCE):**
   * The original brick dome was encased in dressed sandstone blocks, doubling its diameter, and the upper and lower stone Vedikas were constructed.
3. **The Satavahana / Guild Gateways (1st Century BCE):**
   * The four magnificent Toranas were erected. Inscriptions reveal they were financed not only by royalty but by trade guilds, notably the **Ivory Carvers Guild of Vidisha** (*Dantakaras*), whose micro-carving precision transformed massive sandstone beams into delicate stone lace!`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Stupa Terms & Aniconism vs Anthropomorphism',
        body: `### High-Frequency Traps in Buddhist Architecture

1. **Harmika vs Yashti:**
   * **Harmika:** The square railed balcony atop the Anda.
   * **Yashti:** The central umbrella mast rising through the Harmika.
   * *Trap:* Stating the Harmika represents the umbrella discs (those are the Chhatras).

2. **Aniconism Trap (UPSC Classic):**
   * In early Hinayana/Theravada art at Sanchi and Bharhut, the Buddha is **NEVER portrayed as a human figure**.
   * Anthropomorphic human representations of the Buddha appeared centuries later under the **Kushanas** (Mathura and Gandhara schools, 1st-2nd century CE).

3. **Torana Funding Attribution:**
   * Inscriptions at Sanchi explicitly record donations by the **Ivory Carvers of Vidisha**, demonstrating the deep role of urban merchant/craft guilds in religious architecture.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-ART-01-1',
        statement: 'The Buddhist Stupa architecture comprises the relic casket (Dhatu-Garbha), hemispherical dome (Anda), square balcony (Harmika), central mast (Yashti) with triple umbrellas (Chhatra), and circumambulatory paths with carved stone gateways (Toranas) as seen at Sanchi.',
        claimType: 'ARCHITECTURAL_MORPHOLOGY',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-6',
        excerpt: 'Buildings, Paintings and Books: Stupa morphology, Anda, Harmika, Yashti, Sanchi stupa.',
      },
      {
        id: 'CLM-ART-01-2',
        statement: 'The Great Stupa at Sanchi originated under Ashoka in the 3rd century BCE as a brick mound, was encased in stone and doubled in size under the Shungas, and received four monumental carved Toranas funded partly by the Ivory Carvers of Vidisha under the Satavahanas.',
        claimType: 'HISTORICAL_EVOLUTION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-6',
        excerpt: 'Sanchi Stupa: Ashokan origin, Shunga casing, Satavahana Toranas, Ivory Carvers of Vidisha inscription.',
      },
      {
        id: 'CLM-ART-01-3',
        statement: 'Early Buddhist art on the Sanchi and Bharhut Torana gateways adhered to strict aniconic representation, depicting Gautama Buddha exclusively through symbols including the Dharmachakra, Buddhapaduka, empty throne, and Stupa.',
        claimType: 'AESTHETIC_CONVENTION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-6',
        excerpt: 'Aniconic early Buddhist art: Sanchi reliefs represent the Buddha through symbols like wheel, footprints, umbrella.',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — Indian Art & Culture / Buddhist Stupa Architecture & Aniconic Art',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_ARCHITECTURAL_ANALYSIS',
        notes: 'Harmika, Anda, Torana symbolism, and early aniconic depiction are high-yield UPSC Prelims topics.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — Ancient Indian Architecture & Religious Monuments',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE',
        notes: 'Descriptive questions on Sanchi Stupa components and architectural evolution.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Indian Art & Heritage',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on Sanchi stupa location (Madhya Pradesh), builder (Ashoka), and Harmika meaning.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Indian Culture & Heritage — Buddhist Monuments',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'ARCHITECTURAL_TERMS',
        notes: 'Tested on Stupa terminology and symbolism.',
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Static Indian Heritage',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on UNESCO World Heritage Buddhist sites.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — Culture & Monuments',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on Sanchi Stupa and Ashokan pillars.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Historical Milestones',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'GENERAL_AWARENESS',
        notes: 'Phase 1 questions on architectural heritage.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'General Socio-Economic Background',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Cultural background of ancient India.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Buddhist Stupa: Anda (solid hemispherical dome), Harmika (square balcony for gods atop Anda), Yashti (central umbrella shaft), Chhatras (3 umbrellas: Buddha, Dharma, Sangha), Medhi (elevated pradakshina terrace), Vedika (stone boundary railing), Toranas (4 carved cardinal gateways). Early Sanchi art is 100% aniconic (wheel, footprints, empty throne).',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Stupa Architecture Blueprint: 1) Origin: Reliquary tumulus housing Buddha corporeal relics (Dhatu-Garbha). 2) Core Morphology: Solid Anda dome crowned by Harmika balcony, Yashti axis, and Chhatra umbrella discs. 3) Worship: Clockwise circumambulation (Pradakshina) along Medhi and ground path. 4) Sanchi Evolution: Ashokan brick original encased in stone under Shungas; four carved Toranas added by Satavahana-era guilds (Vidisha ivory carvers). 5) Art Style: Aniconic symbolic depiction prior to Kushana anthropomorphic Gandhara/Mathura Buddha images.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Sacred Buddhist Stupa Spatial Geometry: 1) Cosmic Mandala: Ground circle (Anda) inscribed within square railing (Vedika) aligning with four cardinal gateways (Toranas). 2) Axis Mundi: Yashti penetrating the celestial zenith representing the transcendence of Samsara. 3) Guild Patronage: Demonstration of democratic commercial financing of sacred monuments by artisanal trade guilds.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'STUPA_ARCH_MCQ',
        stem: 'In the architectural terminology of a classical Buddhist Stupa such as the Great Stupa at Sanchi, what does the term "Harmika" specifically designate?',
        options: [
          'The monumental carved stone entrance gateway facing the cardinal points',
          'The square balcony-like railing structure situated immediately atop the hemispherical dome (Anda), representing the abode of the gods',
          'The circular elevated terrace used by monks for circumambulation',
          'The underground stone vault holding the corporeal relics of the Buddha'
        ],
        correctAnswer: 'The square balcony-like railing structure situated immediately atop the hemispherical dome (Anda), representing the abode of the gods',
        explanation: 'In Stupa architecture, the Harmika is the square balcony-like structure positioned directly atop the hemispherical dome (Anda). It symbolizes the sacred dwelling of the gods and supports the central pillar (Yashti) carrying the triple umbrellas (Chhatras).',
        trapExplanation: 'Option A describes the Torana; Option C describes the Medhi; Option D describes the Dhatu-Garbha.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Exact structural component of the Buddhist Stupa (Harmika vs Torana vs Medhi).',
      },
      {
        type: 'ANICONIC_ART_MCQ',
        stem: 'Which of the following artistic conventions characterises the early Buddhist narrative reliefs on the Toranas of the Great Stupa at Sanchi?',
        options: [
          'The Buddha is depicted prominently as an anthropomorphic human prince wearing flowing Greek drapery',
          'The Buddha is depicted exclusively through aniconic symbols such as the Dharmachakra, footprints (Buddhapaduka), empty throne, and the Bodhi tree',
          'The narratives focus exclusively on Hindu deities like Shiva and Vishnu to appeal to royal patrons',
          'The reliefs depict battle scenes from the Mahabharata instead of Jataka tales'
        ],
        correctAnswer: 'The Buddha is depicted exclusively through aniconic symbols such as the Dharmachakra, footprints (Buddhapaduka), empty throne, and the Bodhi tree',
        explanation: 'In the early Hinayana/Theravada Buddhist art of Sanchi and Bharhut, the Buddha was never depicted in human anthropomorphic form. Instead, artists employed aniconic symbols: the wheel (Dharmachakra) for his First Sermon, the Bodhi tree and empty throne for his Enlightenment, footprints for his presence, and the Stupa for his Mahaparinirvana.',
        trapExplanation: 'Anthropomorphic images of the Buddha with Greco-Roman drapery emerged later under the Kushana-era Gandhara school.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2019,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Aniconic vs anthropomorphic depiction in early Buddhist art.',
      },
    ],
  },

  // =========================================================================
  // TOPIC 2: Indian Classical Dances & Natyashastra Aesthetics
  // =========================================================================
  {
    id: 'CON-ART-02',
    slug: 'indian-classical-dances-sangeet-natak-akademi-and-natyashastra-rasa',
    title: 'Indian Classical Dance & Performing Arts: The 8 Sangeet Natak Akademi Dances & Natyashastra Aesthetics (Rasa-Bhava)',
    shortDefinition: 'Classical performing arts of India rooted in Bharata Muni\'s *Natyashastra* (5th Veda): The 8 classical dance traditions officially recognized by the Sangeet Natak Akademi (Bharatanatyam, Kathak, Kathakali, Mohiniyattam, Odissi, Kuchipudi, Manipuri, Sattriya), the triad of dance mechanics (Nritta, Nritya, Natya), Tandava vs Lasya, and the Navarasa (Nine Cosmic Emotions) aesthetic framework.',
    difficulty: 'ADVANCED',
    order: 2,
    topicSlug: 'indian-classical-dances-and-natyashastra',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Fifth Veda: Translating Cosmic Energy into Mudras and Rasas',
        body: `According to Indian tradition, when the Treta Yuga began, the gods approached Lord Brahma pleading that society had become consumed by lust and conflict, requesting a new scripture that could educate and elevate all humanity without caste barriers. In response, Brahma synthesized elements from the four Vedas—**Pathya (words)** from Rigveda, **Gita (music)** from Samaveda, **Abhinaya (gestures)** from Yajurveda, and **Rasa (emotional essence)** from Atharvaveda—creating the **Natyaveda (The Fifth Veda)**, codified by the sage **Bharata Muni in the *Natyashastra***.

In Indian aesthetics, dance is not mere rhythmic physical exercise. It is a visual prayer and an emotional science where the dancer uses 24 basic hand gestures (**Asamyutta Hastas**), micro-expressions of the eyes and eyebrows, and footwork to evoke a transcendent aesthetic bliss (**Rasa**) in the spectator.

Today, the **Sangeet Natak Akademi recognizes 8 Classical Dance Forms**, each deeply rooted in a distinct geographical, devotional, and theatrical tradition across the subcontinent.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The 8 Sangeet Natak Akademi Classical Dances Master Matrix',
        body: `### 1. The 8 Classical Dance Traditions of India

| Classical Dance Form | State of Origin | Historical Heritage & Devotional Context | Key Technical Stylistic Hallmarks |
| :--- | :--- | :--- | :--- |
| **1. Bharatanatyam** | **Tamil Nadu** | Ancient temple dance of **Devadasis** (earlier called *Sadir* or *Dasi Attam*); revived by Rukmini Devi Arundale and E. Krishna Iyer. | **Fire Dance (*Agni*)**; crisp geometric body lines; triangle posture (**Araimandi**); Alarippu to Tillana progression; Ekaharya (one dancer plays multiple roles). |
| **2. Kathak** | **Uttar Pradesh / Northern India** | Originated with **Kathakars** (village storytellers reciting epics); blossomed in Mughal and Awadh royal courts (Nawab Wajid Ali Shah). | Intricate mathematical footwork (**Tatkar**); rapid pirouettes (**Chakkars**); musical ghungroos; Lucknow, Jaipur, and Banaras Gharanas. |
| **3. Kathakali** | **Kerala** | All-male dance-drama depicting battles from Ramayana and Mahabharata; performed all night in temple courtyards. | **Sky / Ether Dance**; elaborate painted facial makeup (**Chutti**): Green (*Pacha* = noble heroes), Red/Black (*Katti/Kari* = evil demons); expressive eye-movements. |
| **4. Mohiniyattam** | **Kerala** | Dance of the Enchantress (**Mohini** - Vishnu\'s feminine avatar); solo female dance; revived by poet Vallathol Narayana Menon. | **Air Dance**; graceful, swaying wave-like movements (*Lasya* dominance); Kasavu white-and-gold bordered saree; hair tied in side bun (*Kuduma*). |
| **5. Odissi** | **Odisha** | Temple dance of **Maharis** at the Jagannatha Temple; chronicled in 1st-century BCE Hathigumpha inscription. | **Water Dance**; signature **Tribhanga posture** (three-bend body deflection: neck, torso, knee); lyrical hip movements (*Chowk* square stance); silver filigree jewelry. |
| **6. Kuchipudi** | **Andhra Pradesh** | Originated in Kuchipudi village; formalized by 17th-century Vaishnava poet **Siddhendra Yogi**; dance-drama tradition. | **Earth Dance**; dancer dances atop the rim of a **brass plate (*Tarangam*)** balancing a pitcher of water on head; spoken dialogue; Manduk Shabdam. |
| **7. Manipuri (Jagoi)** | **Manipur** | Ancient ritual dance; merged with Gaudiya Vaishnavism; celebrated for **Raas Leela** (Radha-Krishna devotion). | Subtle, serpentine, floating footwork; knees kept close together; cylindrical stiff skirt (**Kumil / Polloi**); transparent face veil; Pung Cholom drum dance. |
| **8. Sattriya** | **Assam** | Created in the 15th century by Vaishnava saint **Srimanta Sankaradeva** as part of *Ekasarana Dharma* in monastic retreats (**Sattras**). | Recognized as Classical in **2000 CE**; male monks (*Bhokots*) performing spiritual dance-dramas (*Ankiya Nat*); Khol drum and Bor-taal cymbals. |

---

### 2. The Triad of Performing Mechanics (Natyashastra)
* **Nritta:** Pure rhythmic dance devoid of any mood or narrative meaning; focus on pure technique, posture, and rhythm (*Tala*).
* **Nritya:** Expressive dance conveying emotional theme, sentiment, and story through gestures (*Mudras*) and facial mime (*Abhinaya*).
* **Natya:** Full dramatic theatrical representation with character dialogue and collective drama.

### 3. The Navarasa (Nine Cosmic Aesthetic Essences)
Codified in the *Natyashastra*, every artistic performance aims to evoke one or more of the 9 Rasas:
1. **Shringara:** Love, beauty, romance (The King of Rasas).
2. **Hasya:** Laughter, comic mirth.
3. **Karuna:** Pathos, compassion, sorrow.
4. **Raudra:** Fury, divine anger.
5. **Vira:** Heroism, chivalry, courage.
6. **Bhayanaka:** Fear, terror.
7. **Bibhatsa:** Disgust, aversion.
8. **Adbhuta:** Wonder, astonishment.
9. **Shanta:** Serenity, cosmic peace (added later by Abhinavagupta).`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'The Pancha Mahabhuta Elements & The Tribhanga Kinetic Geometry',
        body: `### 1. The Dance-Element Alignment (Pancha Mahabhutas)
* **Bharatanatyam:** Incarnation of **Fire (*Agni*)** — dynamic movements resembling flickering flames.
* **Kathakali:** Incarnation of **Sky / Ether (*Akasha*)** — vast theatrical gestures mirroring the cosmos.
* **Mohiniyattam:** Incarnation of **Air (*Vayu*)** — gentle, swaying breeze-like motions.
* **Odissi:** Incarnation of **Water (*Jala*)** — fluid, serpentine waves of the body.
* **Kuchipudi:** Incarnation of **Earth (*Prithvi*)** — firm grounding and dancing on the soil/brass plate.

### 2. The Tribhanga Kinetic Geometry in Odissi
* In the *Tribhanga* stance, the body forms an \'S\'-curve with opposite bends at the neck, torso, and knees, replicating the graceful posture of classical temple sculptures seen at Konark and Puri.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Chhau Status & Tarangam Brass Plate Technique',
        body: `### High-Frequency Traps in Classical Dances

1. **The Number of Classical Dances (8 vs 9 Trap!):**
   * The **Sangeet Natak Akademi recognizes strictly 8 Classical Dance Forms**.
   * The **Ministry of Culture** occasionally lists **Chhau** as a 9th classical dance, but the apex body (SNA) officially registers strictly 8!

2. **Tarangam Brass Plate Attribution:**
   * Dancing on the edge of a **brass plate** is unique to **Kuchipudi** (NOT Bharatanatyam or Odissi!).

3. **Sattriya Inception:**
   * Created by **Srimanta Sankaradeva** in 15th-century Assam (recognized by SNA in 2000 CE), performed in *Sattras* (Vaishnavite monasteries).`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-ART-02-1',
        statement: 'The Sangeet Natak Akademi recognizes eight classical dance traditions: Bharatanatyam (Tamil Nadu), Kathak (Uttar Pradesh), Kathakali (Kerala), Mohiniyattam (Kerala), Odissi (Odisha), Kuchipudi (Andhra Pradesh), Manipuri (Manipur), and Sattriya (Assam).',
        claimType: 'CULTURAL_HERITAGE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-42',
        excerpt: 'The Making of Regional Cultures: Classical dance forms, Kathak, Bharatanatyam, regional traditions.',
      },
      {
        id: 'CLM-ART-02-2',
        statement: 'Bharata Muni\'s Natyashastra defines the foundational performance triad of Nritta (pure rhythmic movement), Nritya (expressive gesture and emotion), and Natya (theatrical drama), alongside the Navarasa aesthetic framework.',
        claimType: 'AESTHETIC_THEORY',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-6',
        excerpt: 'Natyashastra aesthetics: Nritta, Nritya, Natya, Navarasa emotion framework.',
      },
      {
        id: 'CLM-ART-02-3',
        statement: 'Sattriya dance was introduced in 15th-century Assam by Vaishnavite saint Srimanta Sankaradeva as part of Ekasarana Dharma and performed in Sattras, being recognized as a classical dance in 2000 CE.',
        claimType: 'HISTORICAL_ORIGIN',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-42',
        excerpt: 'Sattriya of Assam: Srimanta Sankaradeva, Ekasarana Dharma, Sattras.',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — Indian Art & Culture / Performing Arts & Classical Dances',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_AESTHETIC_ANALYSIS',
        notes: 'Sattriya, Kuchipudi Tarangam, and Tribhanga posture appear repeatedly in UPSC Prelims.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — Performing Arts & Indian Classical Heritage',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE',
        notes: 'Frequent 5-mark question on Kathak (Jaipur Gharana) and classical dance classification.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Indian Classical Dance',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on matching dance to state: Sattriya (Assam), Mohiniyattam (Kerala), Kuchipudi (AP).',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Indian Culture & Heritage — Performing Arts',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'CULTURAL_TERMINOLOGY',
        notes: 'Tested on Natyashastra terms: Nritta, Nritya, Natya.',
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Static Indian Culture',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on classical dances and famous exponents.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — History & Culture',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on dance origins and Gharanas.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Cultural Heritage',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'GENERAL_AWARENESS',
        notes: 'Phase 1 static questions on dance traditions.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'General Socio-Economic Background',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Cultural diversity of India.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: '8 Classical Dances: Bharatanatyam (TN, Fire, Devadasi, Araimandi). Kathak (UP, Chakkars, Tatkar, Wajid Ali Shah). Kathakali (Kerala, Ether, male dance-drama, Chutti makeup). Mohiniyattam (Kerala, Air, Lasya, white-gold Kasavu). Odissi (Odisha, Water, Tribhanga S-curve). Kuchipudi (AP, Earth, brass plate Tarangam, Siddhendra Yogi). Manipuri (Manipur, Raas Leela, cylindrical Kumil skirt). Sattriya (Assam, Srimanta Sankaradeva, Sattras, 2000 CE). Nritta (pure rhythm), Nritya (expression/mudras), Natya (drama).',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Indian Classical Dances Blueprint: 1) 8 Sangeet Natak Akademi Dances: Bharatanatyam (TN temple origins); Kathak (North Indian storyteller tradition, Jaipur/Lucknow gharanas); Kathakali (Kerala epic dance-drama with green/red Chutti facial makeup); Mohiniyattam (Kerala graceful Lasya dance); Odissi (Tribhanga posture); Kuchipudi (AP dance on brass plate rim); Manipuri (Radha-Krishna Raas Leela with Kumil skirt); Sattriya (15th-century Assam monastic dance by Sankaradeva). 2) Natyashastra Triad: Nritta (rhythm without meaning) vs Nritya (emotional mime) vs Natya (theatre). 3) Aesthetic Goal: Evoking the Navarasas.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Classical Dance Philosophical Architecture: 1) Textual Codification: Bharata Muni\'s Natyashastra establishing codified hand gestures (Mudras) and body bends (Bhangas). 2) Pancha Mahabhuta Symbolism: Embodying the cosmic elements through stylized body mechanics. 3) Revival Movement: 20th-century institutional rescue from anti-nautch colonial stigma by pioneers (Rukmini Devi, Vallathol, E. Krishna Iyer).',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'DANCE_MCQ',
        stem: 'In which classical Indian dance form does the performer perform a virtuoso rhythmic sequence called "Tarangam", dancing deftly atop the sharp rim of a brass plate while balancing a vessel of water on the head?',
        options: ['Bharatanatyam', 'Kuchipudi', 'Odissi', 'Kathakali'],
        correctAnswer: 'Kuchipudi',
        explanation: 'The "Tarangam" is a signature climax of the Kuchipudi dance of Andhra Pradesh, where the dancer stands on the brass rim of a plate, executing intricate rhythmic footwork in sync with percussion while balancing a pot of water on the head.',
        trapExplanation: 'Candidates frequently confuse Kuchipudi with Bharatanatyam due to South Indian costume similarities.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Brass plate Tarangam technique exclusive to Kuchipudi.',
      },
      {
        type: 'DANCE_MCQ',
        stem: 'The classical dance form "Sattriya", recognized as the eighth classical dance of India by the Sangeet Natak Akademi in the year 2000, was developed in the 15th century by which revered spiritual reformer?',
        options: ['Chaitanya Mahaprabhu', 'Srimanta Sankaradeva', 'Vallabhacharya', 'Tulsidas'],
        correctAnswer: 'Srimanta Sankaradeva',
        explanation: 'Sattriya dance was created in 15th-century Assam by the great Vaishnavite reformer Mahapurusha Srimanta Sankaradeva as a powerful medium for propagating his Ekasarana Dharma (Neo-Vaishnavism) within monasteries known as Sattras.',
        trapExplanation: 'Chaitanya founded Gaudiya Vaishnavism in Bengal, whereas Sankaradeva founded Sattriya in Assam.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2020,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Creator and origin of Sattriya dance (Sankaradeva in Assam).',
      },
    ],
  },

  // =========================================================================
  // TOPIC 3: The 6 UNESCO Hill Forts of Rajasthan
  // =========================================================================
  {
    id: 'CON-ART-03',
    slug: 'six-unesco-hill-forts-of-rajasthan-military-architecture-and-jauhars',
    title: 'The 6 UNESCO Hill Forts of Rajasthan: Military Architecture, Hydraulic Fortification & Historic Jauhars',
    shortDefinition: 'The pinnacle of Rajput military fort architecture inscribed as UNESCO World Heritage in 2013: Chittorgarh (3 historic Jauhars, Vijay Stambha), Kumbhalgarh (36 km perimeter wall, Katargarh), Ranthambore (forest fort, 1301 Jauhar, Trinetra Ganesha), Gagron (Jal Durg / water fort with zero foundation), Amber (Rajput-Mughal fusion, Sheesh Mahal), and Jaisalmer (living desert fort, Dhai Shaka / 2.5 Jauhars).',
    difficulty: 'ADVANCED',
    order: 3,
    topicSlug: 'unesco-hill-forts-of-rajasthan',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Stone Sentinels of the Aravallis: The Art of Unyielding Defiance',
        body: `Across the rugged, arid ridges of the Aravalli Range and the sands of the Thar Desert stand the most formidable military fortresses ever erected on the Indian subcontinent: the **Hill Forts of Rajasthan**.

In 2013, UNESCO inscribed six of these monumental fortresses as a collective **World Heritage Site**, recognizing their extraordinary military engineering, indigenous water harvesting systems, and heroic cultural traditions.

These forts were not merely royal residences; they were **self-contained fortified cities** engineered to withstand multi-year military sieges:
* They integrated towering natural cliffs directly into masonry defensive ramparts.
* They pioneered sophisticated rainwater catchment systems (storing millions of liters of water in stepped reservoirs amidst arid deserts).
* When all military hope was extinguished, they witnessed the supreme tragic sacrifice of Rajput chivalry: **Saka** (warriors donning saffron robes to fight to the death) and **Jauhar** (queens and women stepping into sacred flames to preserve their honor).`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The 6 UNESCO Hill Forts Master Comparison Matrix',
        body: `### The 6 UNESCO Hill Forts of Rajasthan (Mnemonic: "Chiku Gajar Aam")

| UNESCO Fort & District | Founder & Key Builders | Architectural & Military Peculiarities | Historic Jauhars / Shakas |
| :--- | :--- | :--- | :--- |
| **1. Chittorgarh Fort** *(Chittorgarh)* | Founded by Chitrangada Mori; capital of **Mewar**. Largest fort in India (700 acres). | Massive plateau fortress on Mesha plateau; contains **Vijay Stambha (Tower of Victory)** built by Maharana Kumbha (1448) to celebrate victory over Mahmud Khilji; Kirti Stambha; Padmini Palace. | **3 Historic Jauhars:**<br>• **1301/1303:** Rani Padmini against Alauddin Khalji.<br>• **1535:** Rani Karnavati against Bahadur Shah of Gujarat.<br>• **1568:** Jaimal & Patta against Mughal Emperor Akbar. |
| **2. Kumbhalgarh Fort** *(Rajsamand)* | Built by **Maharana Kumbha (1443–1458)**; chief architect **Mandan**. | Encircled by a **36 km continuous defensive stone wall** (2nd longest wall in the world after the Great Wall of China; width permits 4 horsemen abreast). Upper fortified citadel: **Katargarh ("The Eye of Mewar")**; **birthplace of Maharana Pratap (May 9, 1540 at Badal Mahal)**. | Captured only once in history (by Akbar\'s general Shahbaz Khan in 1578 after water supply was poisoned). |
| **3. Ranthambore Fort** *(Sawai Madhopur)* | Chauhan rulers; zenith under **Hammir Dev Chauhan** ("Hammir Hath"). | Forest hill fort (*Vana Durg*) inside dense tiger jungle; features the unique **Trinetra Ganesha Temple** and the 32-Pillared Cenotaph (*Battis Khambon ki Chhatri*). | **1301 CE:** Besieged by Alauddin Khalji; witnessed Rajasthan\'s first recorded Jauhar (**Jal Jauhar** led by Rani Ranga Devi). Amir Khusro wrote: *"Today the bastion of infidelity has become the home of Islam."* |
| **4. Gagron Fort** *(Jhalawar)* | Built by Dod Rajputs; developed by **Khichi Chauhans** (Achaldas Khichi). | **Masterpiece of Water Fort (*Jal Durg*)**: Surrounded on three sides by the confluence of **Ahu and Kali Sindh rivers**; unique feature: built with **ZERO foundation** (rests directly on natural living bedrock!). | **2 Jauhars:**<br>• **1423:** Under Achaldas Khichi against Hoshang Shah of Mandu (recorded in *Achaldas Khichi ri Vachanika*).<br>• **1444:** Under Palhansi against Mahmud Khilji. |
| **5. Amber Fort** *(Jaipur)* | Built by **Raja Man Singh I (1592)** on Cheel ka Teela; expanded by Sawai Jai Singh. | Masterpiece of **Rajput-Mughal architectural synthesis**; contains the **Sheesh Mahal (Mirror Palace)**, Diwan-i-Aam, Kesar Kyari floating garden in Maota Lake; houses the idol of **Shila Devi** brought from Jessore (Bengal). | Avoided destructive sieges due to early strategic diplomatic matrimonial alliance with Akbar (1562). |
| **6. Jaisalmer Fort / Sonar Qila** *(Jaisalmer)* | Founded by Bhati Rajput ruler **Rao Jaisal (1156)** on Trikuta Hill. | **Living Desert Fort (*Dhanva Durg*)**: Home to 25% of the city\'s population; built of golden yellow sandstone using **interlocking dry-stone masonry with ZERO mortar or lime**! | **Dhai Shaka (2.5 Jauhars):**<br>• 1st under Alauddin Khalji.<br>• 2nd under Firuz Shah Tughlaq.<br>• **Half Jauhar (1550):** Under Rawal Lunkaran against Amir Ali of Kandahar (Rajputs fought to death, but women could not perform Jauhar in time). |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'The "Chiku Gajar Aam" Formula & The 2.5 Jauhars (Dhai Shaka)',
        body: `### 1. The UNESCO Fort Exclusion Invariant
* **The Inscribed 6:** **Chi**ttorgarh, **Ku**mbhalgarh, **Ga**gron, **Ja**isalmer, **R**anthambore, **Aam**ber (**Chiku Gajar Aam**).
* *Exclusions:* **Mehrangarh Fort (Jodhpur)**, **Taragarh Fort (Bundi)**, and **Junagarh Fort (Bikaner)** are NOT UNESCO World Heritage Hill Forts!

### 2. The Anatomy of the Half-Jauhar (*Ardh Shaka*, 1550 CE)
* In a complete Rajput *Shaka*, two rituals must occur: **Jauhar** (women self-immolate in fire) followed by **Saka** (warriors charge the enemy wearing saffron robes to die in combat).
* In 1550 at Jaisalmer, Afghan ruler Amir Ali launched a treacherous surprise attack inside the fort. Realizing defeat was certain, Rawal Lunkaran and his warriors decapitated their own queens to prevent capture and charged into battle, perishing to the last man. But because there was no time to prepare the sacred fire pyre, the event is recorded in Rajasthani history as **Ardh Shaka (Half Jauhar)**!`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Zero Foundation Fort & The 36 km Wall',
        body: `### High-Frequency Traps in Rajasthan Fort Architecture

1. **The Water Fort with Zero Foundation:**
   * **Gagron Fort (Jhalawar)** is situated at the confluence of the **Ahu and Kali Sindh rivers** and has **no excavated foundation**.

2. **Birthplace of Maharana Pratap:**
   * Born on **May 9, 1540** in **Badal Mahal of Katargarh citadel inside Kumbhalgarh Fort** (NOT Chittorgarh or Udaipur!).

3. **Mehrangarh UNESCO Trap:**
   * *Trap:* Believing Mehrangarh (Jodhpur) is a UNESCO Hill Fort.
   * *Truth:* Despite its magnificence, Mehrangarh was NOT included in the 2013 UNESCO Hill Forts of Rajasthan inscription!`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-ART-03-1',
        statement: 'In 2013, UNESCO inscribed six Hill Forts of Rajasthan as World Heritage Sites: Chittorgarh, Kumbhalgarh, Ranthambore, Gagron, Amber, and Jaisalmer.',
        claimType: 'UNESCO_HERITAGE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-30',
        excerpt: '6 UNESCO Hill Forts of Rajasthan: Chittorgarh, Kumbhalgarh, Ranthambore, Gagron, Amber, Jaisalmer.',
      },
      {
        id: 'CLM-ART-03-2',
        statement: 'Kumbhalgarh Fort, built by Maharana Kumbha under architect Mandan, features a 36 km continuous defensive wall and the Katargarh citadel, the birthplace of Maharana Pratap (May 9, 1540).',
        claimType: 'ARCHITECTURAL_LANDMARK',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-30',
        excerpt: 'Kumbhalgarh Fort: Built by Maharana Kumbha, architect Mandan, 36 km wall, Katargarh, birth of Pratap.',
      },
      {
        id: 'CLM-ART-03-3',
        statement: 'Gagron Fort in Jhalawar is a unique Jal Durg (water fort) with zero foundation resting directly on bedrock at the confluence of the Ahu and Kali Sindh rivers, having witnessed two historic Jauhars.',
        claimType: 'MILITARY_ARCHITECTURE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-30',
        excerpt: 'Gagron Fort: Jal Durg on Ahu and Kali Sindh rivers, zero foundation, two Jauhars.',
      },
    ],
    examMappings: [
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — Forts, Monuments & Architectural Heritage of Rajasthan',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_ARCHITECTURAL_ANALYSIS',
        notes: 'Guaranteed 5-mark and 10-mark questions on UNESCO Hill Forts in RPSC RAS Prelims and Mains.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — Indian Architecture / UNESCO World Heritage Sites',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'CONCEPTUAL_AND_MILITARY',
        notes: 'Water harvesting systems and military design of Rajasthan forts frequently tested.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Indian Heritage & Monuments',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on Kumbhalgarh wall length (36 km) and Gagron fort location (Jhalawar).',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Indian Culture & Heritage — Medieval Architecture',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'MILITARY_TERMINOLOGY',
        notes: 'Tested on Jal Durg, Giri Durg, and Dhanva Durg definitions.',
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Static Indian Heritage',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on UNESCO World Heritage Sites.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — Culture & Monuments',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on fort locations and historical builders.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Historical Milestones',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'GENERAL_AWARENESS',
        notes: 'Phase 1 static questions on heritage sites.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'General Socio-Economic Background',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Regional architectural heritage.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: '6 UNESCO Forts (2013) = "Chiku Gajar Aam": Chittorgarh (3 Jauhars: 1303 Padmini, 1535 Karnavati, 1568 Jaimal/Patta; Vijay Stambha), Kumbhalgarh (Kumbha, architect Mandan, 36 km wall, Katargarh - Pratap born 9 May 1540), Gagron (Jhalawar, Jal Durg, Ahu+Kali Sindh rivers, zero foundation), Jaisalmer (Sonar Qila, yellow sandstone, zero mortar, Dhai Shaka / 2.5 Jauhars in 1550), Ranthambore (1301 Jal Jauhar, Hammir), Amber (Man Singh 1592, Sheesh Mahal). Mehrangarh NOT in UNESCO!',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'UNESCO Hill Forts of Rajasthan Blueprint: 1) Inscription: 6 Hill Forts inscribed in 2013 (Chittorgarh, Kumbhalgarh, Ranthambore, Gagron, Amber, Jaisalmer). 2) Military Engineering: Kumbhalgarh features a 36 km perimeter wall (2nd longest in world) and Katargarh citadel; Gagron is an un-excavated Jal Durg resting directly on river bedrock; Jaisalmer is built of dry interlocking sandstone without mortar. 3) Heroic History: Chittorgarh experienced 3 major Jauhars; Ranthambore witnessed the 1301 Jal Jauhar; Jaisalmer recorded the 1550 Ardh Shaka (Half-Jauhar).',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Rajput Military Architecture: 1) Typological Classification: Giri Durg (Hill: Kumbhalgarh/Chittor), Jal Durg (Water: Gagron), Vana Durg (Forest: Ranthambore), Dhanva Durg (Desert: Jaisalmer). 2) Hydraulic Self-Sufficiency: Multi-tiered stepwells (Baoris), kunds, and talaos sustaining garrisons during prolonged imperial sieges. 3) Socio-Chivalric Defense: Fort as community sanctuary terminating in Jauhar/Saka when walls were breached.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'RAJASTHAN_FORT_MCQ',
        stem: 'Which of the following famous forts of Rajasthan is a "Jal Durg" (water fort) resting directly on solid bedrock with ZERO excavated foundation at the confluence of the Ahu and Kali Sindh rivers?',
        options: ['Gagron Fort (Jhalawar)', 'Taragarh Fort (Bundi)', 'Mehrangarh Fort (Jodhpur)', 'Kumbhalgarh Fort (Rajsamand)'],
        correctAnswer: 'Gagron Fort (Jhalawar)',
        explanation: 'Gagron Fort in Jhalawar district is the premier masterpiece of a Jal Durg (Water Fort) in India. It is surrounded on three sides by the waters of the Ahu and Kali Sindh rivers and is famously constructed without any foundation, standing directly on natural rock bedrock.',
        trapExplanation: 'Taragarh is a hill fort in Bundi; Mehrangarh is on a hill in Jodhpur.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'RPSC RAS Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Identifying Gagron Fort as the zero-foundation Jal Durg.',
      },
      {
        type: 'RAJASTHAN_FORT_MCQ',
        stem: 'Which of the following forts of Rajasthan was NOT included in the collective inscription of the "Hill Forts of Rajasthan" as a UNESCO World Heritage Site in 2013?',
        options: ['Kumbhalgarh Fort', 'Gagron Fort', 'Mehrangarh Fort', 'Jaisalmer Fort'],
        correctAnswer: 'Mehrangarh Fort',
        explanation: 'The six hill forts inscribed as UNESCO World Heritage Sites in 2013 are Chittorgarh, Kumbhalgarh, Ranthambore, Gagron, Amber, and Jaisalmer (mnemonic: "Chiku Gajar Aam"). Mehrangarh Fort of Jodhpur was NOT included in this UNESCO list.',
        trapExplanation: 'Mehrangarh Fort is one of the most magnificent forts in Rajasthan, making it the most tempting wrong option for candidates.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'RPSC RAS Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Exclusion of Mehrangarh Fort from the 2013 UNESCO inscription.',
      },
    ],
  },

  // =========================================================================
  // TOPIC 4: Rajasthan Miniature Painting Schools
  // =========================================================================
  {
    id: 'CON-ART-04',
    slug: 'rajasthan-miniature-painting-schools-mewar-kishangarh-bani-thani-bundi-kota',
    title: 'Rajasthan Miniature Painting Schools: Mewar (Sahibdin), Kishangarh (Bani Thani by Nihal Chand), Bundi Nature & Kota Hunting Murals',
    shortDefinition: 'The 4 canonical schools of Rajasthani miniature painting classified by Anand Coomaraswamy: Mewar School (Chawand Ragamala 1605, Sahibdin\'s Chitaron ki Ovari, Nathdwara Pichwai art), Marwar School (Kishangarh style, Sawant Singh/Nagridas, Nihal Chand\'s Bani Thani - "Mona Lisa of India", Bikaner Usta Kala), Hadoti School (Bundi bird/nature specialization & Chitrashala, Kota hunting frescoes with women hunting), and Dhundhar School (Sheesh Mahal & Shekhawati open-air haveli frescoes).',
    difficulty: 'ADVANCED',
    order: 4,
    topicSlug: 'rajasthan-miniature-paintings',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Colors of Devotion and Desert: The Renaissance of Rajput Miniature Art',
        body: `While Mughal court painters focused on realistic portraits of emperors, military durbars, and historical chronicles, the royal ateliers of Rajasthan created an entirely different visual universe: **pure lyrical emotion, ardent Vaishnava devotion (*Bhakti*), and the wild rhythms of the desert landscape**.

Classified by the pioneering art historian **Anand Kentish Coomaraswamy in his 1916 classic *"Rajput Painting"***, Rajasthani miniature painting is structured into four distinct regional schools:
* In **Mewar**, painters depicted the eternal love of Radha and Krishna amidst dense green foliage and crimson skies.
* In **Kishangarh**, the mystic poet-king Sawant Singh and his court master **Nihal Chand** painted the immortal portrait of **Bani Thani**, whose exaggerated fish-like eyes and radiant beauty earned her the global title of the **"Mona Lisa of India"**.
* In **Bundi**, artists became obsessed with nature, painting monkeys jumping across mango groves and peacocks dancing in monsoon downpours.
* In **Kota**, royal artists painted thrilling, dynamic jungle expeditions where **queens and court ladies rode horses and shot wild tigers**!`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The 4 Principal Schools of Rajasthani Painting Master Matrix',
        body: `### The 4 Major Schools of Rajasthani Painting

| School & Sub-Styles | Golden Age Patron | Master Artists & Masterpieces | Distinctive Visual & Thematic Signatures |
| :--- | :--- | :--- | :--- |
| **1. Mewar School** *(The Mother School)* | **Maharana Jagat Singh I (1628–1652)**; earlier Chawand style under Maharana Amar Singh I. | • **Nisardin:** Painted the famous *Ragamala* at Chawand (1605).<br>• **Sahibdin:** Court painter who illustrated *Ragamala (1628)*, *Geet Govind*, and *Arsha Ramayana*. | Established the painting department **Chitaron ki Ovari** (also called *Tasveera ro Karkhano*). Bright primary colors (red, yellow, saffron); expressive fish-shaped eyes.<br>• **Nathdwara Sub-Style:** Centered on Shrinathji temple; world-famous for **Pichwai paintings** (intricate paintings on cloth hung behind the Krishna idol); women painters: **Kamala and Ilaichi**. |
| **2. Marwar School** *(Kishangarh & Bikaner)* | **Raja Sawant Singh (pen name Nagridas, 1748–1757)** of Kishangarh. | Master painter **Nihal Chand** painted **Bani Thani** (court singer Rasik Bihari). | **Bani Thani ("Mona Lisa of India" - Eric Dickinson):** Radically elongated arched eyebrows, lotus/fish-shaped eyes, sharp pointed nose, thin curved lips, holding two lotus buds, wearing a transparent odhani. Government of India issued a postage stamp in 1973.<br>• **Bikaner Sub-Style:** Famous for **Usta Kala** (delicate gold embossing on camel hide) and **Matheerna Kala** (religious frescoes on wet plaster). |
| **3. Hadoti School** *(Bundi & Kota)* | **Bundi:** Maharao Ummed Singh (1749–1773).<br>**Kota:** Maharao Umed Singh (18th c). | Bundi palace **Chitrashala (Picture Gallery)** is called a *"Paradise of Wall Paintings"*. | • **Bundi Style (Bird & Nature Specialist):** World-famous for lush jungle vegetation, lotus-filled water ponds, storm clouds, and dancing peacocks.<br>• **Kota Style (Hunting Scenes):** Characterized by dynamic hunting expeditions (*Shikar scenes*); **the ONLY school where women and queens are depicted hunting wild tigers and boars** alongside kings! |
| **4. Dhundhar School** *(Jaipur, Alwar, Shekhawati)* | Sawai Jai Singh & Sawai Pratap Singh (Jaipur). | Master painter **Sahib Ram** (painted life-size portraits). | Extensively used emerald green and gold leaf; **Shekhawati Haveli Frescoes:** Known as the **"Open Air Art Gallery of Rajasthan"** using the Italian-Rajasthani wet-plaster fresco technique (*Arayash / Morakasi*) in Mandawa and Nawalgarh. |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'The Arayash Fresco Technique & Pichwai Sacred Art',
        body: `### 1. The Arayash / Morakasi Fresco Technique
* Pioneered in Jaipur and Shekhawati:
* Slaked lime mixed with marble dust and curd was applied to wet walls. Mineral pigments were brushed onto the wet plaster, followed by polishing with agate stones, bonding the pigment chemically with the lime wall to remain vivid for centuries without fading!

### 2. Pichwai Sacred Art of Nathdwara
* Large textile hangings painted with natural stone pigments depicting Shrinathji (child Krishna) celebrating festivals (Sharad Purnima, Annakuta, Govardhan Puja) surrounded by sacred cows and Kadamba trees.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Women Hunting & Bani Thani Attribution',
        body: `### High-Frequency Traps in Rajasthani Painting

1. **Women Hunting Shikar Scenes Trap:**
   * *Trap:* Believing women hunting wild animals was depicted in Mewar or Bundi.
   * *Truth:* **Kota style is the ONLY school** that explicitly depicted queens and court women actively hunting wild beasts in forests!

2. **Bani Thani Attribution:**
   * King: **Sawant Singh (Nagridas)**.
   * Artist: **Nihal Chand**.
   * Critic who termed it "Mona Lisa of India": **Eric Dickinson**.

3. **Bird & Animal Dominance:**
   * World-renowned in **Bundi painting** (Chitrashala).`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-ART-04-1',
        statement: 'Anand Coomaraswamy classified Rajasthani painting into four major schools in his 1916 work Rajput Painting: Mewar, Marwar, Hadoti, and Dhundhar.',
        claimType: 'ART_HISTORIOGRAPHY',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-31',
        excerpt: 'Rajasthan Miniature Painting Schools: Anand Coomaraswamy Rajput Painting 1916, Mewar, Marwar, Hadoti, Dhundhar.',
      },
      {
        id: 'CLM-ART-04-2',
        statement: 'The Kishangarh painting of Bani Thani was created by Nihal Chand under Raja Sawant Singh (Nagridas), acclaimed by Eric Dickinson as the "Mona Lisa of India" and commemorated on a 1973 Indian postage stamp.',
        claimType: 'ARTISTIC_MASTERPIECE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-31',
        excerpt: 'Kishangarh style: Bani Thani by Nihal Chand, Sawant Singh (Nagridas), Mona Lisa of India.',
      },
      {
        id: 'CLM-ART-04-3',
        statement: 'Bundi style specialized in lush bird and animal landscapes (Chitrashala), while Kota style uniquely specialized in dynamic hunting scenes depicting women and queens hunting wild beasts.',
        claimType: 'STYLISTIC_HALLMARK',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-31',
        excerpt: 'Hadoti School: Bundi bird and nature specialization; Kota style hunting scenes with women hunting.',
      },
    ],
    examMappings: [
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — Miniature Painting Schools of Rajasthan',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_STYLISTIC_ANALYSIS',
        notes: 'Bani Thani, Bundi Chitrashala, and Mewar Sahibdin are tested in every RAS Prelims and Mains.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — Indian Painting / Miniature Traditions',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'CONCEPTUAL_AND_THEMATIC',
        notes: 'Bani Thani and regional miniature painting styles frequently tested.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Indian Art & Heritage',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on Bani Thani painter (Nihal Chand) and state (Rajasthan).',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Indian Culture & Heritage — Visual Arts',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'ARTISTIC_TRADITIONS',
        notes: 'Tested on Pichwai art and miniature schools.',
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Static Indian Culture',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on famous Indian paintings.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — History & Culture',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on traditional painting styles.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Historical Milestones',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'GENERAL_AWARENESS',
        notes: 'Phase 1 static questions on cultural heritage.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'General Socio-Economic Background',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Traditional arts and craft clusters of Western India.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Rajasthani Paintings (Coomaraswamy 1916): 1) Mewar: Chawand Ragamala (1605, Nisardin), Sahibdin (Chitaron ki Ovari), Nathdwara (Pichwai Krishna cloth art; Kamala/Ilaichi). 2) Kishangarh: Bani Thani by Nihal Chand, patron Sawant Singh (Nagridas), "Mona Lisa of India" (Eric Dickinson), 1973 stamp. 3) Bundi: Birds, lush nature, Chitrashala. 4) Kota: Hunting (Shikar) scenes where WOMEN HUNT. 5) Shekhawati: Open-air art gallery haveli frescoes (Arayash).',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Rajasthani Miniature Painting Blueprint: 1) Classification: Categorized by Anand Coomaraswamy into 4 schools (Mewar, Marwar, Hadoti, Dhundhar). 2) Mewar: Mother school; Sahibdin established Chitaron ki Ovari; Nathdwara sub-style famous for sacred Pichwai paintings. 3) Kishangarh: World-renowned for Bani Thani, painted by Nihal Chand for Raja Sawant Singh (Nagridas); labeled the "Mona Lisa of India". 4) Hadoti: Bundi specialized in lush nature and birds; Kota uniquely specialized in dramatic hunting frescoes depicting women hunting wild animals.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Rajasthani Visual Aesthetics Architecture: 1) Devotional Synthesis: Vaishnava Bhakti (Geet Govind, Bhagavata Purana) as the primary narrative engine. 2) Local Stylization: Radical elongation of facial anatomy (Kishangarh fish-eyes) representing divine transcendent emotion. 3) Technical Durability: Indigenous mineral pigments and Arayash fresco plaster surviving centuries of desert climate.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'RAJASTHAN_ART_MCQ',
        stem: 'The world-famous Rajasthani miniature painting "Bani Thani", celebrated as the "Mona Lisa of India", belongs to which painting style and was created by which master painter?',
        options: [
          'Mewar Style; painted by Sahibdin',
          'Kishangarh Style; painted by Nihal Chand',
          'Bundi Style; painted by Surjan',
          'Kota Style; painted by Dalu'
        ],
        correctAnswer: 'Kishangarh Style; painted by Nihal Chand',
        explanation: 'Bani Thani was painted by master artist Nihal Chand under the royal patronage of Raja Sawant Singh (who wrote devotional poetry under the pen name Nagridas) of the Kishangarh princely state. Art critic Eric Dickinson christened it the "Mona Lisa of India".',
        trapExplanation: 'Sahibdin was the premier artist of Mewar, not Kishangarh.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'RPSC RAS Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Kishangarh style and artist Nihal Chand pairing.',
      },
      {
        type: 'RAJASTHAN_ART_MCQ',
        stem: 'Which distinctive school of Rajasthani miniature painting is UNIQUE in depicting royal queens and court women actively participating in hunting expeditions (*Shikar*) and shooting wild animals in dense forests?',
        options: ['Bundi School', 'Kota School', 'Mewar School', 'Jaipur School'],
        correctAnswer: 'Kota School',
        explanation: 'The Kota school of painting is renowned across Indian art history for its dynamic hunting (Shikar) scenes. It is the only school in India where court women, princesses, and queens are depicted mounted on horseback or in shooting hides actively hunting tigers and wild boars alongside kings.',
        trapExplanation: 'Bundi is famous for birds, animals, and vegetation, but hunting scenes with women hunting is the exclusive signature of Kota.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2020,
        pyqPaper: 'RPSC RAS Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Women hunting in Kota style vs nature depiction in Bundi style.',
      },
    ],
  },

  // =========================================================================
  // TOPIC 5: Subaltern Resistance & Prajamandal Movement in Rajasthan
  // =========================================================================
  {
    id: 'CON-ART-05',
    slug: 'rajasthan-peasant-revolts-bijolia-movement-and-prajamandals',
    title: 'Subaltern Awakening in Rajasthan: The 44-Year Bijolia Peasant Movement (Vijay Singh Pathik) & The Prajamandal Democratic Struggle',
    shortDefinition: 'Peasant emancipation and democratic mass movements in princely Rajasthan: The historic 44-year Bijolia Peasant Movement (1897–1941, Bhilwara) against 84 feudal cesses (Chawri Kar, Talwar Bandhai) led by Sadhu Sitaram Das, Vijay Singh Pathik (Uparmal Panch Board), and Manikya Lal Verma; the Begun Peasant Movement (Trench Commission, Govindpura martyrs); and the Prajamandal Movement chronological matrix fighting for responsible governance (Jaipur 1931, Bikaner at Calcutta 1936, Sirohi at Bombay 1939).',
    difficulty: 'ADVANCED',
    order: 5,
    topicSlug: 'rajasthan-peasant-movements-and-prajamandals',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Defying the Jagirdars: The Longest Non-Violent Peasant Strike in World History',
        body: `While the mainstream freedom struggle in British India fought against direct British colonial rule, the people of Rajasthan lived under a double yoke of oppression: the **Dual Bondage (*Dohri Ghulami*)**. They were ruled by autocratic native Maharajas and predatory feudal landlords (**Jagirdars / Thikanedars**), who were in turn protected by British colonial bayonets.

In 1897, in the Thikana of **Bijolia (Mewar)**, Dhakad peasants faced an unbearable nightmare: the Jagirdar extorted **84 different types of arbitrary cesses (*Lag-Bag*)** on every aspect of daily life!
* When a peasant wanted to marry off his daughter, he had to pay **Chawri Kar** (₹5 marriage tax).
* When a new Jagirdar inherited the estate, the peasants had to pay for his ceremonial sword-girding tax (**Talwar Bandhai**)!

In response, the peasants of Bijolia launched a historic resistance that lasted **44 continuous years (1897 to 1941)** without a single act of peasant violence—the longest organized non-violent agrarian movement in modern world history!

Guided by the legendary revolutionary **Vijay Singh Pathik (Bhup Singh)**, Bijolia inspired peasant uprisings across Begun, Bundi, and Alwar, culminating in the **Prajamandal Movement** that forced the princely rulers to grant responsible democratic governance!`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'Bijolia 3-Phase Progression & The Prajamandal Master Chronology',
        body: `### 1. The Bijolia Peasant Movement (1897–1941) — 3 Phases

| Operational Phase | Key Leadership | Core Agrarian Strategy & Mobilization | Historic Milestones & Achievements |
| :--- | :--- | :--- | :--- |
| **Phase 1 (1897–1915): Local Spontaneous Phase** | **Sadhu Sitaram Das**, Nanji Patel, Thakari Patel. | Peasants refused to cultivate Jagirdar\'s personal lands; sent delegations to Maharana Fateh Singh of Mewar (inquiry officer Hamid Hussain confirmed grievances, but Jagirdar Rao Krishna Singh retaliated). | Imposition of **Chawri Kar (1903, ₹5)** and **Talwar Bandhai (1906, Prithvi Singh)**; established local solidarity. |
| **Phase 2 (1916–1927): The Golden Organized Phase** | **Vijay Singh Pathik (original name Bhup Singh)**, Manikya Lal Verma, Prem Chand Bhil. | Established **Uparmal Panch Board (1917)** with Manna Patel as Sarpanch; launched youth wing *Uparmal Seva Samiti*; created national publicity via Ganesh Shankar Vidyarthi\'s newspaper **Pratap** (Kanpur). | Manikya Lal Verma composed motivational folk anthem **Panchhida**; Tilak supported Bijolia in *Maratha*; Mahatma Gandhi sent Mahadev Desai to investigate and praised Pathik. Agreement signed in 1922 with AGG Robert Holland abolishing 35 taxes. |
| **Phase 3 (1927–1941): Institutional Resolution** | **Jamnalal Bajaj**, Haribhau Upadhyaya. | Satyagraha resumed when Jagirdar violated Holland agreement; peasants surrendered land leases in mass protest. | Successfully concluded in **1941** when Mewar Prime Minister Sir T. Vijayaraghavachari and Revenue Minister Dr. Mohan Singh Mehta restored all peasant lands. |

---

### 2. Begun Peasant Movement (1921–1923, Chittorgarh)
* Led by **Ramnarayan Chaudhary** at Menal.
* Rawat Anoop Singh of Begun signed the **Bolshevik Agreement** with peasants (annulled by Mewar Maharana).
* **Govindpura Massacre (July 13, 1923):** British Commissioner Trench opened indiscriminate fire on a peaceful peasant gathering; **Rupa ji Dhakad and Kripa ji Dhakad** were martyred.

---

### 3. The Prajamandal Movement Master Chronological Matrix

| Year Established | Prajamandal State | Primary Founders & Presidents | Historical Peculiarity & Exam Anchor |
| :--- | :--- | :--- | :--- |
| **1931** | **Jaipur Prajamandal** | Founded by **Kapurchand Patni**; reorganized in 1936 by **Jamnalal Bajaj & Hiralal Shastri**. | **First Prajamandal established in Rajasthan!** Signed Gentlemen\'s Agreement (1942) with PM Mirza Ismail. |
| **1931** | **Bundi Prajamandal** | Kanti Lal. | Established early responsible governance awareness in Hadoti. |
| **1934** | **Marwar Prajamandal** *(Jodhpur)* | **Jai Narayan Vyas ("Sher-e-Rajasthan")**, Bhanwarlal Saraf. | Published *Peep* (English) and *Akhand Bharat* (Bombay); Anandraj Surana; Marwar Youth League. |
| **1936** | **Bikaner Prajamandal** | **Magharam Vaidya**, Laxmidas Swami. | **Founded OUTSIDE Rajasthan in CALCUTTA!** |
| **1938** | **Mewar Prajamandal** *(Udaipur)* | **Manikya Lal Verma** (Founder); **Balwant Singh Mehta** (First President). | Banned immediately by state; Verma operated from Ajmer; J.B. Kripalani and Vijaya Lakshmi Pandit attended 1st session. |
| **1938** | **Bharatpur Prajamandal** | Gopi Lal Yadav, Master Adityendra. | **Founded OUTSIDE native state in REWARI (Haryana)!** |
| **1939** | **Kota Prajamandal** | **Pandit Nayanuram Sharma**, Abhay Ali. | Formed out of Hadoti Prajamandal. |
| **1939** | **Sirohi Prajamandal** | **Gokulbhai Bhatt ("Gandhi of Rajasthan")**. | **Founded OUTSIDE native state in BOMBAY!** |
| **1944** | **Dungarpur Prajamandal** | **Bhogilal Pandya ("Gandhi of Vagad")**. | Famous for **Rastapal Incident (1947)** where 13-year-old Bhil girl **Kalibai** sacrificed her life to save her teacher Nana Bhai Khant. |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'The Gentlemen\'s Agreement (1942) & The Azad Morcha Split',
        body: `### The Gentlemen's Agreement of 1942 (Jaipur)
* During the Quit India Movement (1942), Jaipur Prajamandal President **Hiralal Shastri** signed an agreement with Jaipur Prime Minister **Sir Mirza Ismail**:
  * The Maharaja promised not to assist the British war effort and assured responsible government.
  * In return, **Jaipur Prajamandal agreed NOT to launch Quit India satyagraha** in Jaipur!
* **The Azad Morcha Revolt:** Radical young nationalists led by **Baba Harish Chandra, Ramkaran Joshi, and Daulatmal Bhandari** revolted against Shastri, formed the **Azad Morcha**, and actively launched the Quit India Movement in Jaipur (later merged back into Congress by Jawaharlal Nehru in 1945).`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Prajamandals Founded Outside Native States & Martyrs',
        body: `### High-Frequency Traps in Rajasthan Modern History

1. **Prajamandals Founded OUTSIDE Native States (Top RPSC RAS Trap!):**
   * **Bikaner Prajamandal (1936):** Founded in **Calcutta** by Magharam Vaidya.
   * **Sirohi Prajamandal (1939):** Founded in **Bombay** by Gokulbhai Bhatt.
   * **Bharatpur Prajamandal (1938):** Founded in **Rewari (Haryana)** by Gopi Lal Yadav.

2. **First Prajamandal in Rajasthan:**
   * **Jaipur Prajamandal (1931)** was the very first.

3. **Govindpura vs Rastapal Martyrs:**
   * **Govindpura (Begun, 1923):** **Rupa ji & Kripa ji Dhakad**.
   * **Rastapal (Dungarpur, 1947):** **Kalibai** (Bhil girl) and Nana Bhai Khant.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-ART-05-1',
        statement: 'The Bijolia Peasant Movement (1897–1941) in Mewar was an epic 44-year non-violent agrarian struggle spanning three phases against 84 arbitrary feudal cesses (lag-bag) and begar, led by Sadhu Sitaram Das, Vijay Singh Pathik (Uparmal Panch Board 1917), and Manikya Lal Verma.',
        claimType: 'PEASANT_MOVEMENT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-32',
        excerpt: 'Bijolia Peasant Movement: 44-year struggle (1897-1941), Vijay Singh Pathik, Uparmal Panch Board 1917.',
      },
      {
        id: 'CLM-ART-05-2',
        statement: 'The Begun Peasant Movement led by Ramnarayan Chaudhary witnessed the martyrdom of Rupa ji and Kripa ji Dhakad in the Govindpura police firing on July 13, 1923 under Commissioner Trench.',
        claimType: 'PEASANT_UPRISING',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-32',
        excerpt: 'Begun Peasant Movement: Trench Commission, Govindpura firing 1923, martyrs Rupa ji and Kripa ji Dhakad.',
      },
      {
        id: 'CLM-ART-05-3',
        statement: 'The Prajamandal movement fought for responsible governance, with Jaipur (1931) being the first, and specific Prajamandals founded outside native territories including Bikaner (Calcutta, 1936), Sirohi (Bombay, 1939), and Bharatpur (Rewari, 1938).',
        claimType: 'POLITICAL_ORGANIZATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-32',
        excerpt: 'Prajamandal Movements: Jaipur 1931 first; Bikaner in Calcutta, Sirohi in Bombay, Bharatpur in Rewari.',
      },
    ],
    examMappings: [
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — Peasant Revolts, Tribal Movements & Prajamandals in Rajasthan',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_HISTORICAL_ANALYSIS',
        notes: 'Bijolia, Begun, and Prajamandals are tested in every RPSC RAS exam without exception (10-mark guarantee).',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — Modern Indian History / Peasant Movements & Freedom Struggle in Princely States',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Bijolia movement and Prajamandal agitations in princely states frequently tested.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Modern Indian History',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on Vijay Singh Pathik (Bhup Singh) and Bijolia movement.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Indian Freedom Struggle — Peasant & State Peoples\' Movements',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'PEASANT_ORGANIZATIONS',
        notes: 'Tested on All India States Peoples\' Conference (AISPC) and Prajamandals.',
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Static Indian History',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on famous agrarian struggles.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — History & Culture',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on regional freedom movements.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Historical Milestones',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'GENERAL_AWARENESS',
        notes: 'Phase 1 static questions on freedom struggle in princely states.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'General Socio-Economic Background',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Agrarian history and feudal taxation systems.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Bijolia (Bhilwara, 1897-1941, 44 yrs non-violent): Phase 1 (Sadhu Sitaram Das, Chawri Kar 1903, Talwar Bandhai 1906). Phase 2 (Vijay Singh Pathik/Bhup Singh, Uparmal Panch Board 1917, Pratap newspaper, Panchhida song by Manikya Lal Verma). Phase 3 (Jamnalal Bajaj, 1941 settlement by Vijayaraghavachari). Begun: Ramnarayan Chaudhary, Govindpura firing (13 July 1923, martyrs Rupa ji & Kripa ji Dhakad). Prajamandals: 1st = Jaipur (1931). Bikaner founded Calcutta (1936), Sirohi founded Bombay (1939), Bharatpur founded Rewari (1938).',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Rajasthan Peasant & Prajamandal Movements Blueprint: 1) Bijolia Movement (1897–1941): 44-year non-violent peasant strike against 84 feudal cesses; Vijay Singh Pathik established Uparmal Panch Board (1917); publicized in Kanpur via Ganesh Shankar Vidyarthi\'s Pratap; Manikya Lal Verma wrote Panchhida; resolved 1941. 2) Begun Movement: Led by Ramnarayan Chaudhary; Rupa ji and Kripa ji Dhakad martyred in Govindpura firing (1923). 3) Prajamandals: Established for responsible government in princely states. Jaipur (1931) was first. Crucial exam invariant: Bikaner formed in Calcutta, Sirohi formed in Bombay, Bharatpur formed in Rewari.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Princely Subaltern Resistance Architecture: 1) Dual Hegemony: Peasant rebellion operating simultaneously against British colonial overlords and native feudal Jagirdars. 2) Communication Channels: Vernacular newspapers (Pratap, Tarun Rajasthan) breaking regional princely censorship. 3) Institutional Transformation: From local caste panchayats (Dhakad) -> Regional Prajamandals -> All India States Peoples\' Conference (AISPC).',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'RAJASTHAN_PEASANT_MCQ',
        stem: 'During the famous Begun Peasant Movement in Chittorgarh, which two brave peasant leaders were martyred when British Commissioner Trench ordered firing on a peaceful gathering at Govindpura on July 13, 1923?',
        options: [
          'Nanji Patel and Thakari Patel',
          'Rupa ji Dhakad and Kripa ji Dhakad',
          'Sadhu Sitaram Das and Manna Patel',
          'Bhogilal Pandya and Nana Bhai Khant'
        ],
        correctAnswer: 'Rupa ji Dhakad and Kripa ji Dhakad',
        explanation: 'On July 13, 1923, during the Begun Peasant Movement, Commissioner Trench surrounded a gathering of farmers at Govindpura village and opened fire, resulting in the heroic martyrdom of Rupa ji Dhakad and Kripa ji Dhakad.',
        trapExplanation: 'Nanji and Thakari Patel were early delegates in Bijolia; Nana Bhai Khant was martyred at Rastapal.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'RPSC RAS Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Martyrs of Govindpura firing in Begun (Rupa ji and Kripa ji Dhakad).',
      },
      {
        type: 'RAJASTHAN_PRAJAMANDAL_MCQ',
        stem: 'Which of the following Prajamandals of Rajasthan was established in the year 1936 OUTSIDE the boundaries of its native princely state, specifically in the city of CALCUTTA?',
        options: [
          'Sirohi Prajamandal',
          'Bikaner Prajamandal',
          'Bharatpur Prajamandal',
          'Jaisalmer Prajamandal'
        ],
        correctAnswer: 'Bikaner Prajamandal',
        explanation: 'Due to severe autocratic repression by Maharaja Ganga Singh of Bikaner, the Bikaner Prajamandal was founded in 1936 outside the state in Calcutta by Magharam Vaidya and Laxmidas Swami. (Sirohi was founded in Bombay in 1939; Bharatpur was founded in Rewari in 1938).',
        trapExplanation: 'Sirohi was founded in Bombay; Bharatpur was founded in Rewari; Bikaner was founded in Calcutta. Swapping these cities is a classic RPSC trap.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'RPSC RAS Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Prajamandals founded outside native territories (Bikaner in Calcutta vs Sirohi in Bombay).',
      },
    ],
  },
  // =========================================================================
  // TOPIC 1 (CONCEPT 2): Hindu Temple Architecture: Nagara, Dravida & Vesara
  // =========================================================================
  {
    id: 'CON-ART-06',
    slug: 'tripartite-hindu-temple-architecture-nagara-dravida-vesara',
    title: 'The Tripartite Hindu Temple Traditions: Nagara, Dravida & Vesara Architectural Orders',
    shortDefinition: 'Classical sacred temple architecture of India: Morphological evolution from Gupta flat-roofed stone shrines to the three grand pan-Indian architectural orders: Nagara (curvilinear Shikhara, Amalaka, Kalasha, absence of compound boundary walls), Dravida (diminishing pyramidal Vimana, monumental Gopuram gateways, high perimeter walls, sacred Kalyani water tank), and Vesara (hybrid Deccan style under Chalukyas and Hoysalas with stellate star-shaped plinths).',
    difficulty: 'ADVANCED',
    order: 6,
    topicSlug: 'indian-temple-and-stupa-architecture',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Cosmic Mountains on Earth: The Sacred Geometry of the Hindu Temple',
        body: `Why did ancient Indian builders spend decades carving entire mountain cliffs into temples or piling millions of sandstone blocks into colossal sky-scraping spires?

In Hindu architectural theory (*Vastu-Shastra*), a temple is never merely a hall for congregational assembly; it is an **architectural model of the Cosmos (Mount Meru)** and an embodied representation of the Cosmic Being (*Vastu-Purusha-Mandala*):
* **The Garbhagriha (Womb-Chamber):** A small, dark, unadorned cubical cell holding the principal deity\'s murti or linga, symbolizing the cosmic primordial cave from which all creation springs.
* **The Mandapa:** The pillared hall preceding the sanctum where devotees gather.
* **The Vertical Spire:** Towering directly above the Garbhagriha, connecting the subterranean earth to the celestial heavens.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The 3 Great Orders of Hindu Temple Architecture Master Matrix',
        body: `### Comparative Structural Matrix of Temple Orders

| Feature | Nagara Style (Northern India) | Dravida Style (Southern India) | Vesara Style (Hybrid Deccan) |
| :--- | :--- | :--- | :--- |
| **Geographical Distribution** | North of the Vindhyas (Odisha, Khajuraho, Gujarat/Rajasthan). | South of the Krishna River to Kanyakumari (Tamil Nadu, Kerala). | Between the Vindhyas and Krishna (Karnataka, Deccan: Badami, Aihole, Pattadakal, Belur, Halebidu). |
| **Sanctum Superstructure** | **Shikhara:** Curvilinear beehive-shaped spire gently curving inward near the top. | **Vimana:** Stepped pyramidal tower rising geometrically in diminishing horizontal storeys (*talas*). | Blended: Combines Nagara Shikhara contour with Dravidian stepped tiering; often **Stellate (star-shaped)** plan. |
| **Apex Finial** | Crowning ribbed stone disc called **Amalaka** surmounted by a **Kalasha** (water pot). | Crowning monolithic dome called **Shikhara / Stupika** (octagonal or circular cupola). | Hybrid kalasha and stupika motifs on low spires. |
| **Entrance Gateways** | Modest entry gates; Shikhara dominates the entire skyline. | **Gopurams:** Colossal, towering multi-storeyed entrance gateways that dwarf the inner Vimana! | Moderate gateways with ornate stone carvings. |
| **Boundary Walls & Water** | Typically built on a high plinth (*Jagati*); **NO compound boundary wall**; no mandatory water tank inside. | **High boundary perimeter walls** enclosing the entire complex; mandatory **Sacred Water Tank (*Kalyani / Teerthakund*)** inside. | Enclosed courtyards; elaborately carved soapstone plinths (*Jagati*). |
| **Famous Masterpieces** | Sun Temple Konark, Kandariya Mahadeva (Khajuraho), Modhera Sun Temple, Dilwara (Abu). | Brihadisvara Temple (Thanjavur), Meenakshi Temple (Madurai), Shore Temple (Mamallapuram). | Chennakeshava Temple (Belur), Hoysaleswara Temple (Halebidu - Hoysalas, UNESCO 2023). |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Regional Sub-Schools of Nagara & The Hoysala Stellate Geometry',
        body: `### 1. The Three Distinct Regional Sub-Schools of Nagara
1. **Odisha School (Kalinga):**
   * Superstructure divided into two halls: **Deula** (sanctum with soaring Rekha Deula spire) and **Jagamohana** (pyramidal assembly hall / Pidha Deula).
   * Plain interior sanctum contrasted with lavishly carved exterior stone friezes (Konark, Jagannath Puri).
2. **Khajuraho School (Chandelas):**
   * Integrated single stone complex on a high plinth; multiple subsidiary spires (*Urushringas*) clustered around the central Shikhara like a mountain range.
   * Famous for erotic sculptures (*Mithuna*) symbolizing spiritual union and fertility.
3. **Solanki / Maru-Gurjara School (Gujarat & Rajasthan):**
   * Meticulously carved white marble interiors (Dilwara Temples, Mount Abu).
   * Presence of a **Surya Kund (stepped water tank)** with miniature shrines along steps (Modhera Sun Temple).

### 2. The Hoysala Vesara Innovation
* Employed soft **chloritic schist (soapstone)** that hardened upon air exposure, permitting jewel-like microscopic carving.
* Designed ground plans as a multi-pointed **star (stellate plan)**, multiplying the surface area for relief friezes depicting war elephants, lions, cavalry, and mythological epics.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Shikhara Nomenclature & Boundary Wall Invariants',
        body: `### High-Frequency Traps in Temple Architecture

1. **Shikhara Nomenclature Trap (The #1 Repeated Art Trap!):**
   * In **Nagara style**, the entire soaring spire over the sanctum is called the **Shikhara**.
   * In **Dravida style**, the soaring pyramidal tower is called the **Vimana**, while ONLY the small crowning dome at the very top is called the **Shikhara**!
   * *Trap:* Assuming Shikhara means the same component in both styles.

2. **Compound Walls and Water Tanks:**
   * High compound perimeter walls and inner temple tanks are **strictly Dravidian features**. Nagara temples rarely feature high boundary walls or integrated water tanks!

3. **Gopuram vs Vimana Height:**
   * In early Dravida temples (Brihadisvara at Thanjavur), the Vimana dominated. In later Nayaka and Pandya periods, the entrance **Gopurams grew so gigantic that they dwarfed the central Vimana**!`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-ART-06-1',
        statement: 'The Nagara temple style of Northern India is distinguished by a curvilinear beehive-shaped tower (Shikhara) crowned by a fluted stone disc (Amalaka) and water pot (Kalasha), typically raised on a high plinth (Jagati) without enclosing compound walls or mandatory water tanks.',
        claimType: 'ARCHITECTURAL_TYPOLOGY',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-6',
        excerpt: 'Temple Architecture: Nagara style curvilinear Shikhara, Amalaka, Kalasha, no boundary walls.',
      },
      {
        id: 'CLM-ART-06-2',
        statement: 'The Dravida temple style of Southern India features a diminishing stepped pyramidal tower (Vimana) crowned by a cupola (Stupika/Shikhara), monumental entrance gateways (Gopurams) that frequently dwarf the sanctum, high perimeter walls, and an internal sacred water tank (Kalyani).',
        claimType: 'ARCHITECTURAL_TYPOLOGY',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-6',
        excerpt: 'Dravida temple style: Pyramidal Vimana, Gopuram gateways, high perimeter walls, sacred water tanks.',
      },
      {
        id: 'CLM-ART-06-3',
        statement: 'The Vesara style developed in the Deccan under the Badami Chalukyas, Rashtrakutas, and Hoysalas as an architectural synthesis of Nagara and Dravida traditions, characterized by star-shaped (stellate) ground plans and intricate chloritic schist soapstone carvings.',
        claimType: 'ARCHITECTURAL_TRADITION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-6',
        excerpt: 'Vesara style: Hybrid Deccan architecture, Chalukyas and Hoysala temples at Belur and Halebidu with star-shaped plans.',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — Indian Art & Culture / Temple Architecture: Nagara, Dravida, Vesara',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_ARCHITECTURAL_ANALYSIS',
        notes: 'Amalaka, Gopuram, Vimana vs Shikhara nomenclature, and Hoysala temples (UNESCO 2023) frequently tested.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — Indian Art & Architecture: Temple Styles & Heritage',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE',
        notes: '5-mark and 10-mark questions comparing Nagara, Dravida, and Solanki/Maru-Gurjara temple architecture.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Indian Art & Heritage',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on Gopuram definition, Brihadisvara builder (Rajaraja Chola), and Konark Sun temple.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Indian Culture & Heritage — Temple Architecture',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'ARCHITECTURAL_TERMS',
        notes: 'Tested on structural features of South Indian and North Indian temples.',
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Static Indian Heritage',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on UNESCO World Heritage temple sites in India.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — Culture & Monuments',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on temple styles and locations.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Historical Milestones',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'GENERAL_AWARENESS',
        notes: 'Phase 1 questions on architectural monuments.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'General Socio-Economic Background',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Cultural foundations of classical India.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Temple Styles: Nagara = North, curvilinear Shikhara, Amalaka (finial disc), no boundary walls. Dravida = South, pyramidal stepped Vimana, colossal Gopurams (gateways), high perimeter walls, sacred water tanks (Kalyani). Vesara = Deccan hybrid (Chalukyas, Hoysala star-shaped temples Belur/Halebidu in soapstone).',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Hindu Temple Architecture Blueprint: 1) Sanctum: Dark cubical Garbhagriha housing deity, preceded by Mandapa assembly hall. 2) Nagara: Curvilinear Shikhara crowned by Amalaka/Kalasha; sub-schools: Odisha (Deula + Jagamohana), Khajuraho (Urushringa clusters), Solanki (stepwell tanks, Dilwara marble). 3) Dravida: Pyramidal stepped Vimana, colossal multi-storey Gopurams dwarfing inner sanctum, boundary walls, Kalyani tank. 4) Vesara: Deccan synthesis; Hoysala star-shaped (stellate) plans with soapstone reliefs.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Sacred Hindu Temple Structural Philosophy: 1) Vastu-Purusha Mandala: Geometric cosmological grid anchoring sanctum as unmanifest Brahman. 2) Vertical Transcendence: Microcosmic dark womb (Garbhagriha) escalating outward to cosmic mountain spire (Shikhara/Vimana). 3) Regional Evolution: Material constraints shaping aesthetics (Hard granite -> monolithic Gopurams; Soft chloritic schist -> microscopic filigree relief).',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'TEMPLE_ARCH_MCQ',
        stem: 'Which of the following architectural features is considered an INVARIANT and defining characteristic of the "Dravida" temple style of South India, but is typically ABSENT in the "Nagara" style of North India?',
        options: [
          'A dark inner sanctum sanctorum (Garbhagriha) housing the principal deity',
          'An elaborately carved curvilinear beehive-shaped tower crowned by a notched disc (Amalaka)',
          'Colossal multi-storeyed entrance gateways (Gopurams) and high boundary perimeter walls enclosing a sacred water tank',
          'The construction of the temple on an elevated stone plinth (Jagati)'
        ],
        correctAnswer: 'Colossal multi-storeyed entrance gateways (Gopurams) and high boundary perimeter walls enclosing a sacred water tank',
        explanation: 'High boundary perimeter walls, soaring entrance gateways called Gopurams (which frequently dwarf the inner temple sanctuary), and the inclusion of a sacred water tank (Kalyani) inside the compound are distinctive hallmarks of Dravida temple architecture. Nagara temples rarely feature elaborate boundary walls or colossal gateways.',
        trapExplanation: 'Garbhagriha and Jagati plinths are shared across both styles. Option B describes Nagara style.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2020,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Dravida vs Nagara distinguishing structural invariants.',
      },
      {
        type: 'VESARA_HOYSALA_MCQ',
        stem: 'The Hoysala temples of Belur and Halebidu (inscribed as UNESCO World Heritage Sites in 2023) exemplify which of the following architectural traditions and structural features?',
        options: [
          'Pure Nagara style with uncarved granite exterior boundary walls',
          'The Vesara (Deccan hybrid) tradition, characterized by star-shaped (stellate) ground plans and intricate chloritic schist (soapstone) relief sculptures',
          'Dravida rock-cut monolithic rathas identical to Mamallapuram',
          'Gupta-era flat-roofed brick shrines without any superstructure'
        ],
        correctAnswer: 'The Vesara (Deccan hybrid) tradition, characterized by star-shaped (stellate) ground plans and intricate chloritic schist (soapstone) relief sculptures',
        explanation: 'The 12th-century Hoysala temples of Belur, Halebidu, and Somanathapura belong to the Vesara hybrid tradition. They are famous for their star-shaped (stellate) platforms and the use of soft chloritic schist (soapstone), which allowed sculptors to execute astonishingly intricate friezes.',
        trapExplanation: 'Hoysala temples are not granite, nor pure Nagara; their hallmark is the stellate plan and soapstone carving.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2023,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Hoysala architecture specifics: soapstone, stellate plan, Vesara hybrid classification.',
      },
    ],
  },
];

export async function seedArtCultureRajasthanMasterCanonicalKnowledge() {
  console.log('Seeding Indian Art, Heritage & Rajasthan History Master Knowledge (6 Concepts across 5 Topics)...');

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
    where: { slug: 'art-culture-rajasthan' },
    update: {
      domainId: domain.id,
    },
    create: {
      name: 'Indian Art, Heritage & Rajasthan History',
      slug: 'art-culture-rajasthan',
      domainId: domain.id,
      scopeStatement: 'Comprehensive coverage of Indian temple and stupa architecture, classical dances, UNESCO Hill Forts of Rajasthan, Rajasthani miniature painting schools, and the Bijolia/Prajamandal freedom movements.',
      description: 'Canonical master knowledge base of Indian Art, Architecture, Heritage and specialized Rajasthan History for UPSC CSE and RPSC RAS.',
      order: 6,
      status: 'ACTIVE',
    },
  });

  // 2. Ensure Topics exist
  const topicDefs = [
    {
      slug: 'indian-temple-and-stupa-architecture',
      title: 'Indian Temple & Stupa Architecture: Nagara, Dravida & Vesara',
      description: 'Sanchi Stupa morphology (Anda, Harmika, Toranas) and Nagara, Dravida, and Vesara temple architectural styles.',
      order: 1,
    },
    {
      slug: 'indian-classical-dances-and-natyashastra',
      title: 'Indian Classical Dances & Natyashastra Aesthetics',
      description: 'The 8 Sangeet Natak Akademi classical dances, Natyashastra performance triad (Nritta, Nritya, Natya), and the Navarasas.',
      order: 2,
    },
    {
      slug: 'unesco-hill-forts-of-rajasthan',
      title: 'The 6 UNESCO Hill Forts of Rajasthan & Military Architecture',
      description: 'Chittorgarh, Kumbhalgarh (36 km wall), Ranthambore, Gagron (Jal Durg), Amber, and Jaisalmer (Dhai Shaka).',
      order: 3,
    },
    {
      slug: 'rajasthan-miniature-paintings',
      title: 'Rajasthan Miniature Painting Schools: Mewar, Kishangarh, Bundi & Kota',
      description: 'Coomaraswamy classification: Sahibdin (Mewar), Bani Thani by Nihal Chand (Kishangarh), Bundi nature, and Kota hunting frescoes.',
      order: 4,
    },
    {
      slug: 'rajasthan-peasant-movements-and-prajamandals',
      title: 'Rajasthan Peasant Revolts & Prajamandal Movements',
      description: 'Bijolia (44-year struggle, Vijay Singh Pathik), Begun (Govindpura firing), and Prajamandal matrix (Jaipur, Bikaner, Sirohi).',
      order: 5,
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

  // 3. Ensure Source exists
  const sourceArt = await db.source.upsert({
    where: { id: 'SRC-ART-RAJASTHAN-2026' },
    update: {},
    create: {
      id: 'SRC-ART-RAJASTHAN-2026',
      title: 'History & Culture Master Corpus — Indian Art, Heritage & Rajasthan History (2026)',
      sourceType: 'COMPREHENSIVE_HISTORICAL_SYNTHESIS',
      authorityTier: 'PEER_REVIEWED_MATHEMATICAL_REFERENCE',
      description: 'Canonical art history and Rajasthan regional synthesis covering sacred architecture, classical performing arts, hill fort engineering, miniature painting schools, and subaltern peasant struggles.',
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

  for (const c of ART_CULTURE_RAJASTHAN_CONCEPTS) {
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
          sourceId: sourceArt.id,
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

  console.log(`Successfully seeded ${ART_CULTURE_RAJASTHAN_CONCEPTS.length} Art, Heritage & Rajasthan History canonical concepts.`);
}
