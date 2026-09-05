import { db } from '../db/client';

export interface MedievalHistoryConceptDef {
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

export const MEDIEVAL_HISTORY_CONCEPTS: MedievalHistoryConceptDef[] = [
  // =========================================================================
  // TOPIC 1: Early Medieval Polities, Tripartite Struggle & Imperial Cholas
  // =========================================================================
  {
    "id": "CON-MED-01",
    "slug": "early-medieval-tripartite-struggle-and-chola-village-autonomy",
    "title": "Early Medieval Polities: The Tripartite Struggle for Kannauj, Imperial Chola State Architecture & Uttaramerur Democratic Inscriptions",
    "shortDefinition": "Exhaustive NCERT Class VII Chapter 2 (*New Kings and Kingdoms*) & Class XII Theme synthesis: The early medieval geopolitical matrix (750–1200 CE) characterized by regional state formation, the 200-year Tripartite Struggle for Kannauj (Kanyakubja) between the Gurjara-Pratiharas, the Palas of Bengal, and the Rashtrakutas of Manyakheta; the rise of the Imperial Chola maritime empire founded by Vijayalaya (850 CE), the conquests of Raja Raja I (Brihadisvara Temple 1010 CE, conquest of Sri Lanka) and Rajendra I (Gangaikondachola expedition 1022 CE, Srivijaya maritime campaign 1025 CE); the administrative pyramid (Mandalams, Valanadus, Nadus, Kurrams), the three village corporate assemblies (Ur, Sabha/Mahasabha, Nagaram), the lost-wax (*cire perdue*) bronze Nataraja sculpture, and the democratic Kudavolai pot-lottery election mechanism and strict committee (*Variyam*) qualifications recorded on the stone walls of the Uttaramerur Inscriptions (919 and 921 CE) under Parantaka I.",
    "difficulty": "ADVANCED",
    "order": 1,
    "topicSlug": "early-medieval-polities-and-cholas",
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Battle for the Imperial Pivot & The World's First Democratic Village Council",
        "body": "Following the collapse of Harsha's empire in the 7th century CE, the city of **Kannauj (Kanyakubja)** in the fertile Gangetic valley became the supreme symbolic prize of North Indian sovereignty. Whoever controlled Kannauj controlled the agricultural surplus of the Doab and the lucrative trade routes connecting Bengal to the Silk Road. For two centuries, three massive regional superpowers—the **Gurjara-Pratiharas** from the northwest, the **Palas** from Bengal, and the **Rashtrakutas** marching up from the Deccan—locked horns in an exhausting, multi-generational conflict known as the **Tripartite Struggle**, which ultimately weakened all three and paved the way for foreign invasions.\n\nSimultaneously in the fertile Kaveri delta of Southern India, the **Imperial Cholas (founded by Vijayalaya in 850 CE)** constructed a vastly different state architecture. While Raja Raja I and Rajendra I built an invincible blue-water navy that conquered Sri Lanka and the Srivijaya Empire in Southeast Asia, their greatest genius was **radically decentralized village democracy**.\n\nAs immortalized on the stone walls of the **Uttaramerur Inscriptions (919 and 921 CE)** under Parantaka I, Chola villages functioned as self-governing republics governed by specialized executive committees (*Variyams*), where village elders were selected by lottery (*Kudavolai*) under strict educational, moral, and asset qualification rules!",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Tripartite Matrix & Chola Village Assemblies (Sabha vs Ur)",
        "body": "### 1. The Tripartite Struggle for Kannauj (8th–10th Centuries CE)\n\n| Contender Empire | Core Power Base & Geography | Notable Rulers in Conflict | Strategic Legacy & Eventual Outcome |\n| :--- | :--- | :--- | :--- |\n| **Gurjara-Pratiharas** | Western India, Malwa, and Rajasthan (capital at Kannauj eventually). | **Vatsaraja, Nagabhata II, Mihira Bhoja, Mahendrapala I**. | Acted as a military bulwark against early Arab incursions from Sindh. |\n| **Palas** | Bengal and Bihar (capital at Pataliputra / Gauda). | **Dharmapala, Devapala**. | Great patrons of Mahayana/Vajrayana Buddhism; founded Vikramashila, Odantapuri, and Somapura Mahaviharas. |\n| **Rashtrakutas** | Deccan / Karnataka (capital at Manyakheta / Malkhed). | **Dhruva, Govinda III, Amoghavarsha I, Krishna III**. | Possessed the most lethal military cavalry; repeatedly crossed the Vindhyas, captured Kannauj, but retreated back to the Deccan. Built the rock-cut Kailash Temple at Ellora. |\n\n---\n\n### 2. Imperial Chola Administrative Hierarchy\n$$\\mathbf{\\text{Mandalams (Provinces)}} \\implies \\mathbf{\\text{Valanadus (Districts)}} \\implies \\mathbf{\\text{Nadus (Sub-districts)}} \\implies \\mathbf{\\text{Kurrams / Gramams (Village Clusters)}}$$\n\n---\n\n### 3. Chola Village Governance: The Three Assemblies\n* **Ur:** The general assembly of the common agrarian village, consisting of tax-paying landholders (*Vellanvagai*).\n* **Sabha / Mahasabha:** The autonomous assembly of **Brahmadeya villages** (tax-free land granted to learned Brahmins). Handled justice, irrigation, temple endowments, and revenue collection.\n* **Nagaram:** The assembly of merchants and artisans in commercial urban centres.\n\n---\n\n### 4. The Uttaramerur Inscriptions (919 & 921 CE) — The Kudavolai Electoral System\n* **Eligibility Criteria for Sabha Membership:**\n  * Must own at least $\\frac{1}{4}$ *veli* of taxable land.\n  * Must reside in a house built on own land.\n  * Age restriction: **Between 35 and 70 years**.\n  * Must possess knowledge of the **Vedas and Dharmashastras**.\n* **Disqualifications:** Those who failed to submit village accounts, those guilty of theft or murder (*Pancha-maha-patakas*), and their close relatives.\n* **Kudavolai (Pot-Ticket) Ballot Method:** Names of eligible candidates were written on palm leaves, placed inside an earthen pot (*Kuda*), and drawn out by a young boy before the assembled village. Selected members served on executive committees (*Variyams*):\n  * *Samvatsara-variyam* (Annual General Committee)\n  * *Eri-variyam* (Tank / Water Harvesting Committee)\n  * *Totta-variyam* (Garden & Agriculture Committee)\n  * *Pon-variyam* (Gold / Currency Assay Committee)",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "Maritime Blue-Water Navy & Brihadisvara Temple Architectural Engineering",
        "body": "### 1. The Chola Maritime Hegemony\n* **Raja Raja I (985–1014 CE):** Annexed Northern Sri Lanka (*Mummudi-Chola-mandalam*) and Maldives; constructed the colossal **Brihadisvara Temple at Thanjavur (1010 CE)**, featuring a monolithic granite 80-tonne *Kumbam* cupola.\n* **Rajendra I (1014–1044 CE):**\n  * Marched north to the Ganga, defeating Mahipala I of Bengal; assumed the title **Gangaikondachola** and built a new capital: **Gangaikondacholapuram**.\n  * Launched a massive naval expedition across the Bay of Bengal (1025 CE) against the **Srivijaya Empire** (Sumatra, Malaya, Java), securing unhindered maritime passage for Tamil merchant guilds (*Manigramam, Ayyavole-500*) to China (Song Dynasty).\n\n---\n\n### 2. Lost-Wax (Cire Perdue) Bronze Sculptures\n* Chola artisans perfected the *cire perdue* technique, creating world-renowned masterpieces such as **Nataraja (Lord of the Cosmic Dance)** inside a fiery arch (*Prabha-mandala*), symbolizing creation, preservation, destruction, illusion (*Maya*), and liberation.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "MAP_PERSPECTIVE",
        "title": "Geopolitical Topology of Early Medieval India: The Tripartite Arena & Chola Thalassocracy",
        "body": "Spatial Topology of Early Medieval Superpowers & Maritime Corridors:\n\n          [NORTHWEST: Gurjara-Pratiharas] --------> [KANNAUJ] <-------- [EAST: Palas of Bengal]\n          (Bhinmal, Jodhpur, Ujjain;                 (Kanyakubja:        (Gauda, Pataliputra;\n           Bulwark against Arab incursions)           Doab Agrarian       Vikramashila, Nalanda)\n                        \\                               Prize)                     /\n                         \\                                |                       /\n                          \\                               |                      /\n                           +------------------------------+---------------------+\n                                                          ^\n                                                          |\n                                            [DECCAN: Rashtrakutas]\n                                            (Manyakheta, Ellora Kailash Temple;\n                                             Cavalry raids across Vindhyas)\n                                                          |\n                                                          v\n                                            [SOUTH: Imperial Cholas]\n                                            (Thanjavur, Gangaikondacholapuram,\n                                             Kaveri Delta agrarian core)\n                                                          |\n                               +--------------------------+--------------------------+\n                               |                                                     |\n                               v (Naval Expeditions 1017-1025 CE)                    v\n                   [SRI LANKA: Anuradhapura]                             [BAY OF BENGAL: \"Chola Lake\"]\n                   (Mummudi-Chola-mandalam)                                          |\n                                                                                     v\n                                                                       [MALACCA STRAIT: Srivijaya Empire]\n                                                                       (Sumatra, Kedah, Java; Route to Song China)\n\nSpatial Dynamics:\n1. Kannauj Pivotal Nexus: Located at the confluence of the Ganga and Yamuna transport corridors, forming the political magnet for three non-contiguous regional empires.\n2. The Kaveri Delta Hydraulic Base: Massive perennial irrigation network enabling dense population clusters, temple-centered urbanism, and agrarian revenues fueling naval construction.\n3. The \"Chola Lake\": Naval supremacy converting the Bay of Bengal into a patrolled maritime highway, protecting Tamil mercantile guilds (Ayyavole-500, Manigramam).",
        "order": 4,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Examiner Traps, Age Brackets & Kudavolai Disqualification Rules",
        "body": "### High-Frequency Traps in Early Medieval History\n\n1. **Uttaramerur Age Bracket Trap (Very Frequent in UPSC!):**\n   * *Trap:* Believing the age bracket for Sabha membership was 21–60 years or 25–50 years.\n   * *Truth:* The mandatory age bracket was strictly **35 to 70 years**!\n\n2. **Sabha vs Ur Composition:**\n   * *Sabha:* Exclusively an assembly of **Brahmins in Brahmadeya villages**.\n   * *Ur:* An assembly of **ordinary non-Brahmin peasant landholders** (*Vellanvagai*).\n\n3. **Brihadisvara vs Gangaikondacholapuram Builders:**\n   * **Brihadisvara Temple at Thanjavur:** Built by **Raja Raja I** (completed 1010 CE).\n   * **Brihadisvara Temple at Gangaikondacholapuram:** Built by **Rajendra I** (to commemorate his march to the Ganga).\n\n4. **Kudavolai Process Invariant:**\n   * Names written on palm leaves (*Olais*) placed in a pot (*Kuda*), and picked by a **young boy** (symbolizing innocence/absence of bias), NOT by a village elder or royal officer!",
        "order": 5,
        "visibility": "PUBLIC"
      }
    ],
    "claims": [
      {
        "id": "CLM-MED-01-1",
        "statement": "The Tripartite Struggle was an eighth-to-tenth-century multi-generational conflict over the control of Kannauj fought between the Gurjara-Pratiharas, the Palas of Bengal, and the Rashtrakutas of the Deccan.",
        "claimType": "HISTORICAL_EVENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "NCERT Class VII Our Pasts – II, Chapter 2: New Kings and Kingdoms, Section: Warfare for Wealth, pp. 20-22",
        "excerpt": "For centuries, rulers belonging to the Gurjara-Pratihara, Rashtrakuta and Pala dynasties fought for control over Kanauj. Because there were three parties in this long-drawn conflict, historians often describe it as the \"tripartite struggle\"."
      },
      {
        "id": "CLM-MED-01-2",
        "statement": "The Uttaramerur Inscriptions (919 and 921 CE) of Parantaka I detail the democratic Kudavolai lottery system, committee structures (Variyams), and strict qualifications (age 35–70, Vedic knowledge, property) for Chola village Sabhas.",
        "claimType": "EPIGRAPHIC_RECORD",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "NCERT Class VII Our Pasts – II, Chapter 2: New Kings and Kingdoms, Section: A Closer Look – The Cholas / Inscriptions and Texts, pp. 27-28",
        "excerpt": "The inscriptions from Uttaramerur in Chingleput district, Tamil Nadu, provide details of the way in which the sabha was organised... All those who wish to become members of the sabha should be owners of land from which land revenue is collected, should have their own homes, should be between 35 and 70 years of age, and should have knowledge of the Vedas."
      },
      {
        "id": "CLM-MED-01-3",
        "statement": "Rajendra I assumed the title Gangaikondachola after his victorious expedition to the River Ganga, founded Gangaikondacholapuram, and launched a naval campaign against the Srivijaya Empire in 1025 CE.",
        "claimType": "HISTORICAL_EVENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "NCERT Class VII Our Pasts – II, Chapter 2: New Kings and Kingdoms, Section: From Uraiyur to Thanjavur, pp. 23-26",
        "excerpt": "Rajaraja I, considered the most powerful Chola ruler, became king in 985 and expanded control over most of these areas... Rajaraja's son Rajendra I continued his policies and even raided the Ganga valley, Sri Lanka and countries of Southeast Asia, developing a navy for these expeditions."
      },
      {
        "id": "CLM-MED-01-4",
        "statement": "Chola bronze sculptures, particularly the iconic Nataraja cast using the lost-wax (cire perdue) technique, represent the pinnacle of medieval Indian metal sculpture, patronized by the royal court and temple authorities.",
        "claimType": "CULTURAL_HERITAGE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "NCERT Class VII Our Pasts – II, Chapter 2: New Kings and Kingdoms, Section: Splendid Temples and Bronze Sculpture, pp. 24-25",
        "excerpt": "Chola bronze images are considered amongst the finest in the world. While most images were of deities, sometimes images were made of devotees as well. The making of bronze images was done using the \"lost-wax\" technique."
      }
    ],
    "examMappings": [
      {
        "examCode": "UPSC_CSE",
        "syllabusUnit": "GS Paper I — Ancient & Early Medieval Indian History / Art & Culture",
        "relevance": "CORE",
        "priority": "VERY_HIGH",
        "requiredDepth": "EXHAUSTIVE_EPIGRAPHIC_ANALYSIS",
        "notes": "Uttaramerur inscription qualifications, Kudavolai lottery, and Chola bronzes are among UPSC's most repeated history themes."
      },
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Mains Paper I — History & Culture of Ancient and Medieval India",
        "relevance": "CORE",
        "priority": "VERY_HIGH",
        "requiredDepth": "COMPREHENSIVE_DESCRIPTIVE",
        "notes": "Direct 5-mark and 10-mark questions on Chola administration and temple architecture."
      },
      {
        "examCode": "SSC_CGL",
        "syllabusUnit": "General Awareness — Medieval Indian History",
        "relevance": "CORE",
        "priority": "HIGH",
        "requiredDepth": "FACTUAL_RETRIEVAL",
        "notes": "Tested on Brihadisvara temple builder (Raja Raja I) and Gangaikondachola title."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Indian Culture & Heritage — Medieval Institutions",
        "relevance": "CORE",
        "priority": "HIGH",
        "requiredDepth": "ADMINISTRATIVE_TERMINOLOGY",
        "notes": "Tested on Variyams, Sabha, and Ur definitions."
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Awareness — Static Indian Heritage",
        "relevance": "SUPPORTING",
        "priority": "MEDIUM",
        "requiredDepth": "FACTUAL_HIGHLIGHTS",
        "notes": "Occasional questions on UNESCO heritage sites (Brihadisvara at Thanjavur)."
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness — Culture & Monuments",
        "relevance": "SUPPORTING",
        "priority": "MEDIUM",
        "requiredDepth": "FACTUAL_HIGHLIGHTS",
        "notes": "Tested on temple architecture and dynastic founders."
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Awareness — Historical Milestones of India",
        "relevance": "SUPPORTING",
        "priority": "MEDIUM",
        "requiredDepth": "GENERAL_AWARENESS",
        "notes": "Phase 1 general awareness on Chola maritime influence and local self-governance."
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Socio-Economic Background of India",
        "relevance": "SUPPORTING",
        "priority": "LOW",
        "requiredDepth": "CONCEPTUAL_OVERVIEW",
        "notes": "Foundational history of South Indian commercial guilds and maritime trade."
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Early Medieval: Tripartite Struggle (Kannauj) = Pratiharas + Palas + Rashtrakutas. Cholas: Raja Raja I (Thanjavur Brihadisvara), Rajendra I (Gangaikonda Chola, Srivijaya naval raid 1025). Uttaramerur Inscription: Sabha qualifications (Age 35–70, Vedic learning, land), Kudavolai pot-lottery system, Variyams (committees). Ur = non-Brahmin village, Sabha = Brahmadeya assembly.",
        "priority": "HIGH",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Early Medieval & Chola Blueprint: 1) Tripartite Struggle: 200-year conflict for Kannauj between Gurjara-Pratiharas, Palas, and Rashtrakutas. 2) Chola Administration: Mandalams -> Valanadus -> Nadus -> Kurrams. Three assemblies: Ur (ordinary taxpaying peasants), Sabha (Brahmins in Brahmadeya grants), Nagaram (merchants). 3) Uttaramerur (919/921 CE): Detailed democratic election rules for Sabha executive committees (Variyams: Eri, Garden, Gold) via Kudavolai palm-leaf lottery for candidates aged 35–70. 4) Art: Lost-wax Nataraja bronze and Thanjavur Vimana.",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Chola State Structure & Geopolitics: 1) Geopolitical Core: Kaveri delta agrarian surplus driving blue-water maritime conquest. 2) Multi-Tiered Assemblies: Centralized imperial kingship at the apex harmoniously coexisting with autonomous corporate bodies (Ur, Sabha, Ayyavole trade guilds). 3) Agrarian Ecology: Tank irrigation managed by Eri-Variyam financed by land revenue assessments.",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "CHOLA_MCQ",
        "stem": "According to the Uttaramerur Inscription of Parantaka I, which of the following was a mandatory eligibility criterion for membership in the Chola village executive assembly (Sabha)?",
        "options": [
          "The candidate must be aged between 21 and 50 years",
          "The candidate must be aged between 35 and 70 years and possess knowledge of the Vedas",
          "The candidate must belong to the merchant guild (Nagaram)",
          "The candidate must have served in the imperial Chola army"
        ],
        "correctAnswer": "The candidate must be aged between 35 and 70 years and possess knowledge of the Vedas",
        "explanation": "The Uttaramerur Inscriptions (919 and 921 CE) laid down strict qualification rules for Sabha committee membership: candidate must be aged between 35 and 70 years, own at least 1/4 veli of taxable land, reside in a house on their own land, be proficient in the Vedas, and have clean accounts.",
        "trapExplanation": "Standard modern democratic age brackets (21 or 25 years) are common distractors. The ancient Chola requirement was mature age 35 to 70.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": true,
        "pyqYear": 2021,
        "pyqPaper": "UPSC CSE Prelims",
        "pyqStage": "Prelims",
        "examinerTrapPattern": "Exact age qualification requirement in the Uttaramerur Inscription."
      },
      {
        "type": "CHOLA_MCQ",
        "stem": "Which Chola ruler assumed the title of \"Gangaikondachola\" and sent a victorious maritime expedition against the Srivijaya kingdom in Southeast Asia in 1025 CE?",
        "options": [
          "Vijayalaya Chola",
          "Parantaka I",
          "Raja Raja I",
          "Rajendra I"
        ],
        "correctAnswer": "Rajendra I",
        "explanation": "Rajendra I (1014–1044 CE), son of Raja Raja I, assumed the title \"Gangaikondachola\" (the Chola who brought the Ganga) after marching to Bengal. In 1025 CE, he launched a massive naval campaign across the Bay of Bengal, subduing the Srivijaya kingdom to secure trade routes to China.",
        "trapExplanation": "Confusing Rajendra I with his father Raja Raja I (who built the Thanjavur Brihadisvara temple and conquered Sri Lanka) is the primary trap.",
        "difficulty": "EASY",
        "isPYQ": true,
        "pyqYear": 2022,
        "pyqPaper": "RPSC RAS Prelims",
        "pyqStage": "Prelims",
        "examinerTrapPattern": "Attribution between Raja Raja I and Rajendra I."
      }
    ]
  },

  // =========================================================================
  // TOPIC 2: The Delhi Sultanate: Dynastic Succession & Political Institutions
  // =========================================================================
  {
    "id": "CON-MED-02",
    "slug": "delhi-sultanate-dynastic-succession-balban-kingship-and-iqta-system",
    "title": "The Delhi Sultanate: Dynastic Succession (1206–1526 CE), Balban's Theory of Kingship, and the Iqta Administrative Framework",
    "shortDefinition": "Exhaustive NCERT Class VII Chapter 3 (*The Delhi Sultans*) synthesis: Foundations and governance of the Delhi Sultanate: 5 ruling dynasties (Mamluk 1206–1290, Khalji 1290–1320, Tughlaq 1320–1414, Sayyid 1414–1451, Lodi 1451–1526), the transition from fortified military garrison towns (*hinterland-garrison dynamic*) to empire under internal and external frontier campaigns; Iltutmish's institutionalization of the Turkish elite slave-nobles (*Bandagan / Turkan-i-Chahalgani*) and coinage (silver *Tanka*, copper *Jital*); the accession of Raziyya Sultan (1236 CE) and chronicler Minhaj-i Siraj's ideological critique of gender; Ghiyasuddin Balban's authoritarian theory of divine kingship (*Zill-i-Ilahi*, *Niyabat-i-Khudai*, Persian ceremonials of *Sijda*, *Paibos*, and *Nauroz*, crushing the Forty); and the institutional mechanics of the Iqta system (assignment of land revenue rights to *Muqtis/Iqtadars*, audits, non-hereditary transfers, and remittance of surplus *Fawazil* to the imperial Diwan-i-Wizarat).",
    "difficulty": "ADVANCED",
    "order": 2,
    "topicSlug": "delhi-sultanate-governance-and-institutions",
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Consolidating an Islamic Sultanate in an Alien Subcontinent",
        "body": "When Muhammad Ghori was assassinated in 1206 CE, his Turkish military slave (**Mamluk**), **Qutbuddin Aibak**, took charge of North Indian conquests, establishing the **Delhi Sultanate**. For the next 320 years (1206–1526 CE), five successive dynasties ruled from Delhi.\n\nHowever, the early sultans faced existential perils:\n1. **The Garrison vs Hinterland Dilemma:** In the early 13th century, Sultanate authority rarely extended beyond heavily fortified garrison towns (*qasbas*) occupied by Turkish soldiers. Rebellions, monsoon washouts, and severed communications constantly cut garrisons off from their rural hinterlands.\n2. **The Mongol Terror:** The unstoppable horse-archers of **Genghis Khan** reached the Indus River in 1221, repeatedly probing the Punjab and laying siege to Delhi itself.\n3. **The Slave-Noble Oligarchy (*Turkan-i-Chahalgani*):** Powerful Turkish elite slave-officers (**Bandagan** / The Corp of Forty) continually conspired to dethrone, blind, and assassinate monarchs at will.\n\nTo survive, the Delhi Sultanate instituted two revolutionary structural systems:\n* **Ideological Legitimacy via Divine Kingship:** Sultan **Ghiyasuddin Balban** solved the factional chaos by elevating the monarch above humanity, declaring the Sultan to be the **Shadow of God on Earth (*Zill-i-Ilahi*)** and demanding complete physical prostration.\n* **Fiscal-Military Integration via the Iqta:** The state institutionalized the **Iqta System**, transferring territorial revenue-collection rights to military commanders (*Muqtis*) in exchange for maintaining ready contingents of cavalry, while strictly auditing and extracting all surplus funds (**Fawazil**) into the central imperial treasury!",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "The 5 Dynasties & Balban's Divine Kingship Architecture",
        "body": "### 1. Chronological Sequence of the 5 Delhi Sultanate Dynasties\n\n| Dynasty | Reign Period | Key Imperial Architects | Decisive Historical Milestones |\n| :--- | :--- | :--- | :--- |\n| **1. Mamluk / Ilbari / Slave Dynasty** | **1206–1290 CE** | Qutbuddin Aibak, Iltutmish, Raziyya Sultan, Ghiyasuddin Balban. | Turkish slave (*mamluk*) origin; Qutb Minar begun; Iltutmish introduces Silver *Tanka* (175 grains) and Copper *Jital*; Raziyya becomes first female sultan (1236); Balban crushes the Chahalgani. |\n| **2. Khalji Dynasty** | **1290–1320 CE** | Jalaluddin Khalji, **Alauddin Khalji**. | \"Khalji Revolution\" breaking Turkish ethnic monopoly; massive southern military campaigns (Malik Kafur); market price control; Dag & Chehra military reforms. |\n| **3. Tughlaq Dynasty** | **1320–1414 CE** | Ghiyasuddin Tughlaq, **Muhammad bin Tughlaq**, Firuz Shah Tughlaq. | Longest ruling dynasty; Muhammad bin Tughlaq's visionary experimental projects; Firuz Shah's canal networks, Diwan-i-Khairat, and Diwan-i-Bandagan. |\n| **4. Sayyid Dynasty** | **1414–1451 CE** | Khizr Khan, Mubarak Shah. | Established following Timur's sack of Delhi (1398); ruled nominally as Timurid vassals. |\n| **5. Lodi Dynasty** | **1451–1526 CE** | Bahlul Lodi, Sikandar Lodi, Ibrahim Lodi. | **First Afghan dynasty**; Sikandar Lodi founds Agra (1504) and introduces *Gaz-i-Sikandari*; defeated by Babur at First Battle of Panipat (1526). |\n\n---\n\n### 2. Raziyya Sultan & Minhaj-i Siraj's Gender Historiography (1236–1240 CE)\n* In 1236, Sultan Iltutmish's daughter, **Raziyya**, was placed on the throne because her brothers were incompetent.\n* The contemporary chronicler **Minhaj-i Siraj** recognized that she was more capable and qualified than all her brothers.\n* *NCERT Invariant:* Minhaj-i Siraj lamented that a woman's rule violated the \"ideal social order created by God, in which women were supposed to be subordinate to men.\" Raziyya abandoned the veil (*purdah*), rode elephants, and led armies, triggering violent aristocratic conspiracies that resulted in her overthrow and murder in 1240.\n\n---\n\n### 3. Ghiyasuddin Balban's (1266–1287 CE) Theory of Kingship\nBalban restored royal awe through a systematic doctrine of **\"Blood and Iron\" (*Lauh aur Rakt*)**:\n* **Niyabat-i-Khudai:** The Sultan is the Vicegerent / Deputy of God on earth; royal office is divinely ordained.\n* **Zill-i-Ilahi (Zilullah):** The Sultan is the Shadow of God on earth.\n* **Iranian Court Etiquette:** Introduced non-Islamic Persian ceremonial practices into the Delhi court:\n  * **Sijda:** Complete prostration before the Sultan.\n  * **Paibos (Zaminbos):** Kissing the feet of the Sultan.\n  * **Nauroz:** Grand public celebration of the Persian spring New Year festival.\n* **Espionage Network (*Barids*):** Deployed secret news-writers across all provinces reporting directly to him.\n* Destruction of the *Chahalgani* to consolidate absolute autocratic sovereignty.",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "The Iqta System: Fiscal Decentralization & Fawazil Accounting",
        "body": "### How the Iqta System Operated (NCERT Class VII Chapter 3)\nOriginating in West Asia (Abbasid and Seljuk empires), the Iqta was institutionalized in India by **Shamsuddin Iltutmish**:\n1. **Assignment of Land Revenue:** The empire was divided into revenue tracts called **Iqtas**. An Iqta was **NOT private ownership of land**, but strictly the **right to collect land revenue** from that territory.\n2. **The Iqtadar / Muqti / Wali:** The military commander assigned an Iqta was responsible for:\n   * Maintaining law, order, and crushing local rebellions.\n   * Collecting land revenue according to state rates.\n   * Maintaining a stipulated contingent of cavalry and infantry for imperial service.\n3. **The Fawazil Surplus Rule:**\n   $$\\mathbf{\\text{Total Iqta Revenue}} - (\\mathbf{\\text{Administrative Expenses}} + \\mathbf{\\text{Troop Maintenance Cost}} + \\mathbf{\\text{Muqti's Personal Salary}}) = \\mathbf{\\text{Fawazil (Surplus)}}$$\n   * The *Fawazil* (excess surplus balance) was **mandatorily remitted to the central imperial treasury (*Diwan-i-Wizarat*)**.\n   * Under Balban and Alauddin Khalji, royal accountants (*mutasarrifs*) strictly audited the revenue collections to prevent Muqtis from keeping excess troops or pocketing the *Fawazil*.\n4. **Transferability & State Control:**\n   * Under early strong sultans, the office of Muqti was strictly **transferable and non-hereditary**. Muqtis were reassigned every few years to prevent them from building deep local feudal roots.\n   * *The Decline:* Later, under **Firuz Shah Tughlaq (1351–1388 CE)**, Iqtas were made hereditary, directly accelerating the feudal decentralization and eventual collapse of the Sultanate.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "MAP_PERSPECTIVE",
        "title": "Geopolitical Topology of the Delhi Sultanate: Expansion Frontiers & Garrison Corridors",
        "body": "Spatial Topology of the Delhi Sultanate Expansion:\n\n          [NORTHWEST FRONTIER: Indus River, Lahore, Multan]\n          (Frontier marches against Mongol Incursions: 1221, 1298, 1303 CE)\n                        |\n                        v\n          [THE SEAT OF EMPIRE: Delhi / Mehrauli / Siri / Tughlaqabad]\n          (The Imperial Garrison Hub & Coinage Mint)\n                        |\n          +-------------+-------------+\n          |                           |\n          v (Internal Frontier:       v (External Frontier:\n             Doab & Forests)             Deccan Expeditions)\n   [GANGA-YAMUNA DOAB]         [RAJASTHAN: Ranthambore 1301, Chittor 1303]\n   (Clearance of forests;                   |\n    Peasant settlements;                    v\n    Direct 50% Kharaj)         [MALWA & GUJARAT: Cambay, Surat ports]\n                                            |\n                                            v\n                               [DECCAN: Devagiri / Daulatabad] (Yadavas)\n                                            |\n                                            v\n                               [WARANGAL] (Kakatiyas / Koh-i-Noor diamond)\n                                            |\n                                            v\n                               [DWARASAMUDRA] (Hoysalas)\n                                            |\n                                            v\n                               [MADURAI] (Pandyas / Far South Reach)\n\nSpatial Vectors:\n1. The \"Internal Frontier\" (Hinterland Integration): Consolidation of the fertile Ganga-Yamuna Doab by clearing dense forests, expelling pastoralists, building garrison forts (*qasbas*), and settling Afghan/Turkish peasant colonies.\n2. The \"External Frontier\" (Military Plunder): Spearheaded by Alauddin Khalji's general **Malik Kafur** (1307–1311 CE), extracting immense tribute in war elephants, gold, and jewels from southern kingdoms without direct administrative annexation.",
        "order": 4,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Examiner Traps, Hereditary Iqtas & Balban Etiquette Attribution",
        "body": "### High-Frequency Traps in Delhi Sultanate History\n\n1. **Sijda & Paibos Attribution Trap:**\n   * *Trap:* Attributing Sijda, Paibos, and Nauroz to Alauddin Khalji or Akbar.\n   * *Truth:* They were introduced by **Ghiyasuddin Balban** to re-establish royal prestige!\n\n2. **Iqta Ownership vs Revenue Rights:**\n   * *Trap:* Assuming the Muqti owned the soil of the Iqta.\n   * *Truth:* The Iqta was an assignment of **revenue rights only**; the peasant retained land possession.\n\n3. **Firuz Shah Tughlaq's Fatal Hereditary Iqta Blunder:**\n   * *Trap:* Believing all sultans kept Iqtas non-hereditary.\n   * *Truth:* **Firuz Shah Tughlaq made Iqtas hereditary**, which accelerated the feudal decentralization and collapse of the Sultanate!\n\n4. **Raziyya Sultan Chronology & Chronicler:**\n   * Ruled 1236–1240 CE. Chronicler who evaluated her reign was **Minhaj-i Siraj** in *Tabaqat-i Nasiri*.",
        "order": 5,
        "visibility": "PUBLIC"
      }
    ],
    "claims": [
      {
        "id": "CLM-MED-02-1",
        "statement": "The Delhi Sultanate was ruled by five successive dynasties between 1206 and 1526 CE: Mamluk/Ilbari (1206–1290), Khalji (1290–1320), Tughlaq (1320–1414), Sayyid (1414–1451), and Lodi (1451–1526).",
        "claimType": "CHRONOLOGICAL_SEQUENCE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "NCERT Class VII Our Pasts – II, Chapter 3: The Delhi Sultans, Section: The Rulers of Delhi, pp. 30-31",
        "excerpt": "Delhi first became the capital of a kingdom under the Tomara Rajputs... Under the Tomaras and Chauhans, Delhi became an important commercial centre... The transformation of Delhi into a capital that controlled vast areas of the subcontinent started with the foundation of the Delhi Sultanate in the beginning of the thirteenth century."
      },
      {
        "id": "CLM-MED-02-2",
        "statement": "Ghiyasuddin Balban propagated the divine theory of kingship designating the Sultan as Zill-i-Ilahi (Shadow of God) and Niyabat-i-Khudai (Vicegerent of God), introducing Persian court etiquettes of Sijda and Paibos.",
        "claimType": "POLITICAL_IDEOLOGY",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "NCERT Class VII Our Pasts – II, Chapter 3: The Delhi Sultans, Section: Finding Out about the Delhi Sultans, pp. 32-35",
        "excerpt": "In the thirteenth century, the control of the Delhi Sultans rarely went beyond heavily fortified towns occupied by garrisons... Ghiyasuddin Balban consolidated the hinterlands of the garrison towns... and instituted strict court etiquette asserting imperial prestige."
      },
      {
        "id": "CLM-MED-02-3",
        "statement": "Under the Iqta system institutionalized by Iltutmish, military commanders (Muqtis) collected agricultural revenue, maintained troop contingents, and were legally bound to remit the net surplus balance (Fawazil) to the central treasury.",
        "claimType": "ADMINISTRATIVE_MECHANISM",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "NCERT Class VII Our Pasts – II, Chapter 3: The Delhi Sultans, Section: A Closer Look – Administration and Consolidation, pp. 38-40",
        "excerpt": "Like earlier Sultans, the Khalji and Tughluq monarchs appointed military commanders as governors of territories of varying sizes. These lands were called iqta and their holder was called iqtadar or muqti. The duty of the muqtis was to lead military campaigns and maintain law and order in their iqtas. In exchange for their military services, the muqtis collected the revenues of their assignments as salary... Accountants were appointed by the state to check the amount of revenue collected by the muqtis."
      },
      {
        "id": "CLM-MED-02-4",
        "statement": "Raziyya Sultan, daughter of Iltutmish, reigned from 1236 to 1240 CE as the first female Sultan of Delhi, facing resistance from conservative Turkish nobles and chronicler Minhaj-i Siraj on patriarchal gender grounds.",
        "claimType": "HISTORICAL_EVENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "NCERT Class VII Our Pasts – II, Chapter 3: The Delhi Sultans, Section: Raziyya, p. 33",
        "excerpt": "Minhaj-i Siraj thought that the queen's rule went against the ideal social order created by God, in which women were supposed to be subordinate to men. He therefore asked: \"In the register of God's creation, since her account did not fall under the column of men, how did she gain from all of her excellent qualities?\""
      }
    ],
    "examMappings": [
      {
        "examCode": "UPSC_CSE",
        "syllabusUnit": "GS Paper I — Medieval Indian History / Administrative Systems & State Formation",
        "relevance": "CORE",
        "priority": "VERY_HIGH",
        "requiredDepth": "EXHAUSTIVE_CONCEPTUAL_ANALYSIS",
        "notes": "Iqta system, Fawazil surplus, Bandagan, and Balban's kingship are standard UPSC Prelims questions."
      },
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Mains Paper I — Medieval Indian Administration & Society",
        "relevance": "CORE",
        "priority": "VERY_HIGH",
        "requiredDepth": "COMPREHENSIVE_DESCRIPTIVE",
        "notes": "Frequent 5-mark question on Balban's theory of kingship or Iqta system."
      },
      {
        "examCode": "SSC_CGL",
        "syllabusUnit": "General Awareness — Medieval Indian History",
        "relevance": "CORE",
        "priority": "VERY_HIGH",
        "requiredDepth": "FACTUAL_RETRIEVAL",
        "notes": "Tested on dynastic order, Sijda/Paibos introduced by Balban, and silver Tanka introduced by Iltutmish."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Indian Culture & Heritage — Medieval Institutions",
        "relevance": "CORE",
        "priority": "HIGH",
        "requiredDepth": "ADMINISTRATIVE_TERMINOLOGY",
        "notes": "Tested on Barid (spy), Muqti, and Fawazil terms."
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Awareness — Static Indian History",
        "relevance": "SUPPORTING",
        "priority": "MEDIUM",
        "requiredDepth": "FACTUAL_HIGHLIGHTS",
        "notes": "Occasional questions on Delhi Sultanate monuments and chronology."
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness — History & Culture",
        "relevance": "SUPPORTING",
        "priority": "MEDIUM",
        "requiredDepth": "FACTUAL_HIGHLIGHTS",
        "notes": "Tested on dynastic sequence and key rulers."
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Awareness — Historical Milestones",
        "relevance": "SUPPORTING",
        "priority": "MEDIUM",
        "requiredDepth": "GENERAL_AWARENESS",
        "notes": "Phase 1 static history questions."
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Socio-Economic Background",
        "relevance": "SUPPORTING",
        "priority": "LOW",
        "requiredDepth": "CONCEPTUAL_OVERVIEW",
        "notes": "Evolution of Indian agrarian revenue systems."
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Delhi Sultanate: 5 Dynasties = Mamluk (1206-90), Khalji (1290-1320), Tughlaq (1320-1414), Sayyid (1414-51), Lodi (1451-1526). Raziyya (1236-40, Minhaj-i Siraj gender critique). Balban: \"Blood and Iron\", Zill-i-Ilahi (Shadow of God), Niyabat-i-Khudai, crushed Chahalgani, Sijda & Paibos, Nauroz. Iqta: Revenue assignment to Muqti; surplus balance (Fawazil) remitted to central treasury.",
        "priority": "HIGH",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Delhi Sultanate Foundations Blueprint: 1) Five Dynasties: Established 1206 by Qutbuddin Aibak; Iltutmish created Turkan-i-Chahalgani (The Forty) and silver Tanka/copper Jital; Raziyya ruled 1236-40; dynasty ended 1526 with First Battle of Panipat. 2) Balban (1266-87): Restored royal terror through divine kingship (Zill-i-Ilahi), eliminated the Forty, created Barid espionage network, instituted Iranian court rituals Sijda and Paibos. 3) Iqta System: Institutionalized by Iltutmish; assigned land revenue rights to Muqtis to fund cavalry; excess balance (Fawazil) paid to imperial treasury; non-hereditary under strong rulers.",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Delhi Sultanate Institutional Architecture: 1) Sovereign Legitimacy: Caliphate recognition + Persian divine kingship. 2) Central Ministries: Diwan-i-Wizarat (Finance/Wazir), Diwan-i-Arz (Military/Ariz-i-Mamalik), Diwan-i-Insha (Royal Correspondence), Diwan-i-Risasat (Foreign Affairs/Markets). 3) Provincial & Revenue: Iqta tract -> Muqti extraction -> Fawazil audit -> Standing central army (Hashm-i-Qalb).",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SULTANATE_MCQ",
        "stem": "In the context of the administrative vocabulary of the Delhi Sultanate, what did the term \"Fawazil\" denote?",
        "options": [
          "The hereditary land grant given to religious scholars and saints",
          "The surplus revenue balance remitted to the central treasury by an Iqtadar after meeting sanctioned military and administrative expenses",
          "The extra cess levied on agricultural produce during times of famine",
          "The royal cavalry contingent stationed permanently at the imperial capital"
        ],
        "correctAnswer": "The surplus revenue balance remitted to the central treasury by an Iqtadar after meeting sanctioned military and administrative expenses",
        "explanation": "Under the Iqta administrative system of the Delhi Sultanate, an Iqtadar (or Muqti) was entitled to collect revenue from his assigned territory, deduct sanctioned expenses for his troops, administrative overheads, and personal salary, and was obligated to remit the remaining surplus balance, known as \"Fawazil\", to the central treasury (Diwan-i-Wizarat).",
        "trapExplanation": "Confusing Fawazil with religious land grants (Inam/Waqf) or extra cesses (Abwabs) is a frequent error.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": true,
        "pyqYear": 2019,
        "pyqPaper": "UPSC CSE Prelims",
        "pyqStage": "Prelims",
        "examinerTrapPattern": "Exact technical definition of Sultanate revenue term (Fawazil)."
      },
      {
        "type": "SULTANATE_MCQ",
        "stem": "Which Sultan of Delhi systematically introduced the court ceremonials of \"Sijda\" (prostration) and \"Paibos\" (kissing the feet of the monarch), and propagated the doctrine that the King is the \"Shadow of God on Earth\" (Zill-i-Ilahi)?",
        "options": [
          "Iltutmish",
          "Ghiyasuddin Balban",
          "Alauddin Khalji",
          "Muhammad bin Tughlaq"
        ],
        "correctAnswer": "Ghiyasuddin Balban",
        "explanation": "Ghiyasuddin Balban introduced the strict Persian court ceremonials of Sijda and Paibos to elevate the prestige of the Sultan above the Turkish nobility. He also propagated the ideological doctrine that the Sultan is Zill-i-Ilahi (Shadow of God) and Niyabat-i-Khudai (Deputy of God).",
        "trapExplanation": "Many candidates incorrectly select Alauddin Khalji or Muhammad bin Tughlaq due to their radical administrative fame.",
        "difficulty": "EASY",
        "isPYQ": true,
        "pyqYear": 2021,
        "pyqPaper": "SSC CGL Tier 1",
        "pyqStage": "Tier 1",
        "examinerTrapPattern": "Balban court etiquette attribution."
      }
    ]
  },

  // =========================================================================
  // TOPIC 3: Sultanate Agrarian Reforms & Tughlaq Administrative Experiments
  // =========================================================================
  {
    id: 'CON-MED-03',
    slug: 'alauddin-khalji-market-reforms-and-muhammad-bin-tughlaq-experiments',
    title: 'Sultanate Economic & Military Modernization: Alauddin Khalji\'s Market Control Regulations & Muhammad bin Tughlaq\'s Imperial Innovations',
    shortDefinition: 'Radical economic and administrative modernization under the Delhi Sultanate: Alauddin Khalji\'s market control apparatus (Shahna-i-Mandi, Diwan-i-Riyasat, fixed price schedules), Dag & Chehra military reforms, and Muhammad bin Tughlaq\'s visionary experimental projects (Daulatabad capital transfer, copper/brass token currency, Khurasan expedition, and Diwan-i-Kohi agricultural loan department).',
    difficulty: 'ADVANCED',
    order: 3,
    topicSlug: 'delhi-sultanate-governance-and-institutions',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Price Controller and the Misunderstood Visionary',
        body: `During the late 13th and early 14th centuries, the Delhi Sultanate confronted unprecedented geopolitical transformations.

First, **Alauddin Khalji (1296–1316 CE)** faced an immense mathematical dilemma: to crush relentless Mongol invasions (who repeatedly laid siege to Delhi itself) and simultaneously conquer the wealthy kingdoms of the Deccan and Rajasthan (Chittor, Ranthambore, Devagiri), he required a massive, permanent **standing army (*Hashm-i-Qalb*)**. But paying market salaries to hundreds of thousands of soldiers would exhaust the royal treasury within years.
Alauddin's brilliant solution was not to pay soldiers more, but to **artificially force down the cost of living** through the world's first comprehensive state-enforced **Price Control System**!

Decades later, **Muhammad bin Tughlaq (1325–1351 CE)**—one of the most learned scholars of astronomy, mathematics, medicine, and philosophy ever to sit on the Delhi throne—confronted an empire that had expanded to encompass almost the entire subcontinent. Recognizing that a vast subcontinental empire could not be administered from Delhi, he attempted bold structural reforms: **transferring the capital to Daulatabad**, replacing scarce silver coins with **token bronze currency**, and creating an agricultural ministry. However, while his conceptual ideas were centuries ahead of their time, their clumsy execution earned him the unfair historical label of the "Mad King".`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'Alauddin Khalji\'s Market Regulations & Tughlaq\'s 5 Projects Matrix',
        body: `### 1. Alauddin Khalji\'s Market Control System (Detailed by Ziauddin Barani)
Alauddin established four distinct centralized markets in Delhi, each strictly regulated:
1. **Central Grain Market (*Mandi*):** Food grains sold strictly at government-fixed tariff rates. Hoarding was criminalized; peasants in the Doab were forced to pay 50% land tax (*Kharaj*) in kind to maintain vast state buffer granaries.
2. **Cloth & Luxury Goods Market (*Sarai Adl*):** All imported textiles, silks, sugar, herbs, and oil were sold here.
3. **Slaves and Cattle Market:** Price of horses, bullocks, and enslaved captives fixed by quality grade, eliminating middlemen (*Dallals*).
4. **General Commodities Market.**

### The Administrative Enforcement Machinery
* **Diwan-i-Riyasat:** Ministry of commerce and economic regulation headed by Malik Yaqub.
* **Shahna-i-Mandi:** Market superintendent who maintained the register of authorized merchants, monitored weights, and brutally punished shortfalls by cutting an equivalent weight of flesh from the merchant's body.
* **Munhiyan:** Secret child intelligence agents deployed by the Sultan to buy sweets and check weights.

### Alauddin's Military Innovations
* **Cash Salaries:** Soldiers paid fixed cash salaries (234 *tankas* per year for a single-horse trooper; additional 78 *tankas* for a two-horse trooper).
* **Dag (Branding of Horses):** Imperial seal branded on cavalry mounts to prevent troopers from presenting borrowed or substandard horses during muster.
* **Chehra / Huliya (Descriptive Rolls):** Detailed physical description of each soldier recorded in imperial registers to prevent proxy impersonation.

---

### 2. Muhammad bin Tughlaq's (1325–1351 CE) 5 Legendary Experimental Projects

| Project | Rational Strategic Objective | Flawed Implementation / Reality | Historiographical Outcome & Legacy |
| :--- | :--- | :--- | :--- |
| **1. Taxation in the Doab (1326)** | Increase revenue from the most fertile agricultural region to fund imperial defense. | Assessment coincided with a catastrophic famine and drought; peasants revolted and fled into jungles. | Heavy agrarian distress; later compensated by distributing relief loans (*Sondhar / Taccavi*). |
| **2. Transfer of Capital to Daulatabad (1327)** | Relocate administrative hub to **Devagiri (renamed Daulatabad)** in Maharashtra to centrally govern South India and escape Mongol raids. | Entire population of Delhi forcibly marched 1,500 km in summer heat; immense loss of life. | Vulnerability of North India exposed; within 2 years, the court marched back to Delhi. |
| **3. Token Currency Experiment (1329–30)** | Introduce copper and brass coins on par with silver *Tanka* to overcome global silver scarcity (modeled on Kublai Khan's paper currency in China). | Royal mint had no secret watermark/seal; every citizen's house became a private mint, churning out forged brass coins. | Silver fled the market; foreign trade collapsed; Sultan redeemed all brass coins with genuine royal silver, emptying the treasury. |
| **4. Khurasan & Qarachil Expeditions** | Intervene in Persian geopolitics and secure Himalayan frontier against Chinese/Mongol raids. | Khurasan army paid 1 year advance salary, then disbanded; Qarachil army perished in Himalayan rains and guerrilla warfare. | Heavy drain on imperial prestige and military treasury. |
| **5. Agricultural Department (*Diwan-i-Kohi*)** | Reclaim fallow land and promote crop rotation through direct state-sponsored agricultural loans. | Corrupt officials misspent funds; stony infertile tracts chosen; project failed after spending 70 lakh *tankas*. | Pioneered modern agricultural credit (*Taccavi*) institutional models. |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Barani\'s Tariff Schedule & The Diwan-i-Kohi Credit Pipeline',
        body: `### 1. Alauddin\'s Fixed Grain Tariffs (From Tarikh-i-Firuz Shahi)
* Wheat: **7.5 Jitals per maund**
* Barley: **4 Jitals per maund**
* Rice / Gram: **5 Jitals per maund**
* Sugar: **1.5 Jitals per seer**
* *Invariant:* Prices remained frozen at these exact rates throughout Alauddin's 20-year reign, even during severe regional droughts, because royal granaries released stored grain directly into the Mandi!

### 2. The Diwan-i-Kohi Agricultural Loan Pipeline
1. Land divided into development blocks of 30 *krohs* (approx. 60 miles).
2. State distributed advance cash loans (**Sondhar / Taccavi**) directly to peasants for purchasing seeds, digging wells, and transitioning from low-value crops (barley) to high-value cash crops (wheat, sugarcane, grapes).`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Diwan-i-Kohi vs Diwan-i-Khairat & Token Metals',
        body: `### Critical Traps in Sultanate Administrative Reforms

1. **Token Currency Metal Trap:**
   * *Trap:* Believing Muhammad bin Tughlaq introduced *paper* or *leather* currency.
   * *Truth:* His token coins were struck in **Bronze and Copper**, made legal tender on par with the silver *Tanka*!

2. **Sultanate Ministries Attribution Trap (Crucial for UPSC/PCS!):**
   * **Diwan-i-Kohi (Agriculture):** Created by **Muhammad bin Tughlaq**.
   * **Diwan-i-Riyasat (Market Ministry):** Created by **Alauddin Khalji**.
   * **Diwan-i-Khairat (Charity) & Diwan-i-Bandagan (Slaves):** Created by **Firuz Shah Tughlaq**.
   * **Diwan-i-Arz (Military):** Created by **Balban**.

3. **Dag & Chehra Attribution:**
   * Introduced by **Alauddin Khalji** (and later modernized by Sher Shah Suri and Akbar).`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-MED-03-1',
        statement: 'Alauddin Khalji established four centralized price-controlled markets in Delhi supervised by the Diwan-i-Riyasat and Shahna-i-Mandi, enforced fixed grain tariffs, and introduced Dag (horse branding) and Chehra (descriptive rolls).',
        claimType: 'ECONOMIC_REFORM',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-39',
        excerpt: 'Market Reforms of Alauddin Khalji: Shahna-i-Mandi, price control of grains, Dag and Chehra.',
      },
      {
        id: 'CLM-MED-03-2',
        statement: 'Muhammad bin Tughlaq launched five controversial experimental projects: Doab taxation, capital transfer to Daulatabad (1327), copper/brass token currency (1329–30), Qarachil expedition, and the Diwan-i-Kohi agricultural loan department.',
        claimType: 'HISTORICAL_EVENT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-39',
        excerpt: 'Muhammad bin Tughlaq experiments: Daulatabad transfer, token currency, Diwan-i-Kohi.',
      },
      {
        id: 'CLM-MED-03-3',
        statement: 'Diwan-i-Kohi was a dedicated ministry for agricultural improvement established by Muhammad bin Tughlaq to provide Sondhar/Taccavi loans and reclaim uncultivated land.',
        claimType: 'INSTITUTIONAL_CREATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-39',
        excerpt: 'Sultanate Administration: Diwan-i-Kohi created by Muhammad bin Tughlaq for agriculture.',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — Medieval Economic History / Administration of Delhi Sultanate',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_CONCEPTUAL_ANALYSIS',
        notes: 'Market reforms and Muhammad bin Tughlaq projects are premier questions in UPSC Prelims and Mains.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — Medieval Indian History & Administrative Experiments',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE',
        notes: 'Frequent 10-mark question evaluating Muhammad bin Tughlaq\'s character and failures.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Medieval Indian History',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on Shahna-i-Mandi, Dag/Chehra, and Daulatabad capital transfer.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Indian Culture & Heritage — Medieval Institutions',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'ADMINISTRATIVE_TERMINOLOGY',
        notes: 'Tested on Diwan-i-Kohi and Taccavi loans.',
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Static Indian History',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on medieval currency innovations and key rulers.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — History & Culture',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on economic history and dynasties.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Historical Milestones',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'GENERAL_AWARENESS',
        notes: 'Phase 1 general awareness questions on market price stabilization history.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'General Socio-Economic Background',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Early history of fiat token currency and state credit (Taccavi).',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Alauddin Khalji: Market Control (Shahna-i-Mandi, Diwan-i-Riyasat, frozen grain tariffs), cash military pay, Dag (branding horses) & Chehra (descriptive rolls). Muhammad bin Tughlaq: 5 Projects (Doab tax hike, Daulatabad capital transfer 1327, token copper/brass currency 1329–30, Qarachil raid, Diwan-i-Kohi agricultural ministry with Sondhar loans).',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Sultanate Economic Modernization Blueprint: 1) Alauddin Khalji: Created a permanent standing army by freezing retail prices across four Delhi markets (Grains, Cloth, Cattle/Slaves, General); eliminated hoarders via Shahna-i-Mandi and secret spies (Munhiyan); instituted Dag (horse branding) and Chehra (soldier rolls). 2) Muhammad bin Tughlaq: Brilliant visionary with disastrous execution. Shifted capital to Daulatabad (1327) and back; token bronze/copper currency failed due to mass counterfeiting; created Diwan-i-Kohi to advance Taccavi agricultural loans to farmers.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Economic & Fiscal Architecture of High Sultanate: 1) Market Command: State monopsony in grain collection (50% Kharaj in kind) feeding buffer granaries -> fixed urban prices. 2) Military Accounting: Dag & Chehra biometric verification linked to fixed cash annual salary. 3) Agrarian Credit Cycle: Diwan-i-Kohi state capital advances -> land reclamation -> crop upgrading.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'SULTANATE_MCQ',
        stem: 'The department of "Diwan-i-Kohi" established during the Delhi Sultanate was associated with which of the following administrative functions?',
        options: [
          'Supervision of royal espionage and secret intelligence',
          'Development and modernization of agriculture',
          'Enforcement of market prices and trade regulation',
          'Management of imperial charity and pensions for the poor'
        ],
        correctAnswer: 'Development and modernization of agriculture',
        explanation: 'Diwan-i-Kohi was a specialized agricultural department created by Sultan Muhammad bin Tughlaq to bring fallow land under cultivation, encourage crop substitution, and disburse agricultural loans (Sondhar/Taccavi) directly to peasants.',
        trapExplanation: 'Confusing Diwan-i-Kohi with Diwan-i-Riyasat (market control) or Diwan-i-Insha (correspondence) is the standard error.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2020,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Function of Sultanate administrative department (Diwan-i-Kohi).',
      },
      {
        type: 'SULTANATE_MCQ',
        stem: 'Which Delhi Sultan introduced the military administrative regulations known as "Dag" (branding of war horses) and "Chehra" (descriptive rolls of soldiers)?',
        options: ['Ghiyasuddin Balban', 'Alauddin Khalji', 'Firuz Shah Tughlaq', 'Sikandar Lodi'],
        correctAnswer: 'Alauddin Khalji',
        explanation: 'Alauddin Khalji introduced the system of "Dag" (branding the imperial insignia on cavalry horses to prevent fraud) and "Chehra" or "Huliya" (maintaining a descriptive register of every soldier\'s physical characteristics to prevent proxy attendance).',
        trapExplanation: 'Balban introduced court rituals (Sijda/Paibos), whereas Alauddin introduced military verification (Dag/Chehra).',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'RPSC RAS Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Attribution of Dag and Chehra to Alauddin Khalji.',
      },
    ],
  },

  // =========================================================================
  // TOPIC 4: The Vijayanagara Empire & The Deccan Sultanates
  // =========================================================================
  {
    id: 'CON-MED-04',
    slug: 'vijayanagara-empire-dynasties-krishnadevaraya-and-amaranayaka-system',
    title: 'The Vijayanagara Empire: Dynastic Architecture, The Amaranayaka Military System, and Imperial Urban Morphology at Hampi',
    shortDefinition: 'The southern imperial fortress of Hindu revivalism (1336–1646 CE): The four dynasties (Sangama, Saluva, Tuluva, Aravidu), Krishnadevaraya\'s golden age (*Amuktamalyada*), the Amaranayaka feudal military administrative system, imperial urban architecture at Hampi (Mahanavami Dibba, Hazara Rama, Vittala temple), the Battle of Talikota (1565), and relations with the Deccan Sultanates.',
    difficulty: 'ADVANCED',
    order: 4,
    topicSlug: 'vijayanagara-empire-and-deccan-sultanates',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The "Forgotten Empire": A Jewel of Water, Granite, and Cavalry',
        body: `In 1336 CE, on the rugged south bank of the rocky Tungabhadra River, two brothers—**Harihara and Bukka**, disciples of the sage Vidyaranya—founded the **Vijayanagara Empire (City of Victory)**. For over two centuries, Vijayanagara stood as the paramount southern bastion of Hindu statecraft, arts, and religion, checking the southward expansion of the Delhi Sultanate and the Bahmani Sultanate.

When European travellers like **Domingo Paes** and **Fernão Nuniz** (Portugal) and **Abdur Razzaq** (Persia) walked into its capital at **Hampi**, they were stunned into disbelief. Paes recorded that the city was *"as large as Rome and very beautiful to the sight"*, with royal markets spilling over with diamonds, pearls, and imported Arabian war-horses.

The empire\'s power rested on three pillars:
1. **Hydraulic Engineering:** Massive dams across the Tungabhadra, the Kamalapuram tank, and the Hiriya canal that sustained agriculture amidst arid granite boulders.
2. **The Amaranayaka System:** A sophisticated military tenure system where military commanders governed territories in exchange for maintaining war contingents.
3. **Sacred Imperial Urbanism:** Synthesizing royal authority with devotion to the patron deity **Lord Virupaksha** and the mother goddess **Pampa Devi**.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The 4 Dynasties, Krishnadevaraya & The Amaranayaka Framework',
        body: `### 1. The 4 Ruling Dynasties of Vijayanagara

| Dynasty | Reign Period | Legendary Sovereigns | Historical & Cultural Significance |
| :--- | :--- | :--- | :--- |
| **1. Sangama Dynasty** | **1336–1485 CE** | Harihara I, Bukka I, Deva Raya II. | Founded the empire; established control over Krishna-Tungabhadra Doab; Deva Raya II enlisted Muslim archers to modernize cavalry. |
| **2. Saluva Dynasty** | **1485–1505 CE** | Saluva Narasimha. | Short military usurpation to prevent imperial collapse after weak Sangama successors. |
| **3. Tuluva Dynasty** | **1505–1570 CE** | Vira Narasimha, **Krishnadevaraya**, Achyuta Deva Raya. | **The Golden Age of Vijayanagara**; Portuguese trade alliance; military zenith; Battle of Talikota (1565). |
| **4. Aravidu Dynasty** | **1570–1646 CE** | Tirumala, Venkata II. | Ruled from Penukonda and Chandragiri after the destruction of Hampi; gradual decline. |

### 2. Krishnadevaraya\'s Reign (1509–1529 CE) — The Golden Age
* **Military Triumphs:** Subdued the rebellious chiefs of Ummattur; captured the Raichur Doab (1512); defeated the Sultan of Bijapur (Ismail Adil Shah) and the Gajapati ruler of Odisha (Prataparudra Deva).
* **Literary Patronage:**
  * Composed the Telugu political masterpiece **Amuktamalyada** (treatise on statecraft, royal duty, and public welfare).
  * Composed Sanskrit drama **Jambavati Kalyanam**.
  * His royal court (*Bhuvana Vijayam*) was graced by the **Ashtadiggajas** (Eight Literary Giants), including Allasani Peddana and Tenali Ramakrishna.
* **Monuments:** Built the eastern *gopuram* of the Virupaksha Temple, added the Hall of Thousand Pillars, founded the suburban city of **Nagalapuram** (named after his mother Nagala Devi).

### 3. The Amaranayaka Feudal Military System
* **Definition:** Derived from the Sanskrit root *Samara* (battle). The **Amaranayakas** were military commanders who were granted territories to govern by the *Raya* (king).
* **Fiscal & Military Responsibilities:**
  * Collected taxes and dues from peasants, craftspersons, and traders in their territory.
  * Retained a portion of revenue for personal maintenance, palace upkeep, and temple donations.
  * **Maintained a fixed quota of elephants, cavalry, and infantry** for imperial mobilization whenever the Raya marched to war.
* **Imperial Control Mechanisms:**
  * Sent annual tribute directly to the king.
  * Personally attended the royal court during the **Mahanavami festival** bearing expensive gifts (*Kani*) to demonstrate fealty.
  * The king could transfer them to other territories at will (though later Nayakas became hereditary, weakening central control).`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Hampi Urban Architecture & The Cataclysmic Battle of Talikota (1565)',
        body: `### 1. Sacred & Royal Architecture at Hampi (UNESCO World Heritage Site)
* **Mahanavami Dibba:** A massive 40-foot-high, 11,000-sq-ft elevated stone platform where the Raya observed wrestling matches, military parades, state sacrifices, and worship of state horses during the 10-day Dussehra festival.
* **Lotus Mahal:** Indo-Islamic secular pavilion with nine vaulted domes and cusped arches.
* **Vittala Temple Complex:** Celebrated for its monolithic **Stone Chariot (*Ratha*)** and the 56 **Musical Pillars (*Sa-Re-Ga-Ma* Pillars)** that emit musical notes when struck.

### 2. The Battle of Talikota / Rakshasi-Tangadi (January 23, 1565)
* **Background:** The regent **Aliya Rama Raya** engaged in dangerous Machiavellian diplomacy, pitting the rival Deccan Sultanates against each other.
* **The Grand Alliance:** The 4 Deccan Sultanates—**Bijapur, Golconda, Ahmadnagar, and Bidar** (Berar did not join)—formed an unprecedented grand coalition, cemented by matrimonial ties.
* **The Climax:** At the battlefield between Rakshasi and Tangadi villages, Rama Raya was routed, captured, and beheaded by the Sultan of Ahmadnagar. The triumphant sultanate armies sacked and pillaged Hampi for six months, reducing one of the world's most glorious cities to ruins.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Foreign Travellers & Battle of Talikota Coalitions',
        body: `### High-Frequency Traps in Vijayanagara History

1. **Foreign Travellers Chronology & Attribution (UPSC Favorite!):**
   * **Nicolo de Conti (Italian):** Visited under Deva Raya I (Sangama).
   * **Abdur Razzaq (Persian ambassador):** Visited under Deva Raya II (Sangama); described 7 concentric fortification walls.
   * **Duarte Barbosa (Portuguese):** Visited under Krishnadevaraya.
   * **Domingo Paes (Portuguese):** Visited under Krishnadevaraya; compared Hampi to Rome.
   * **Fernão Nuniz (Portuguese horse-trader):** Visited under Achyuta Deva Raya; chronicled the Amaranayaka system.

2. **Battle of Talikota Deccan Sultanate Exclusion Trap:**
   * *Trap:* Assuming all 5 Deccan Sultanates fought at Talikota.
   * *Truth:* **Berar did NOT participate** in the coalition against Vijayanagara! The alliance comprised Bijapur, Ahmadnagar, Golconda, and Bidar.

3. **Krishnadevaraya Dynasty:**
   * *Trap:* Assuming Krishnadevaraya belonged to the Sangama dynasty.
   * *Truth:* He belonged to the **Tuluva dynasty** (the 3rd dynasty)!`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-MED-04-1',
        statement: 'The Vijayanagara Empire (1336–1646 CE) was ruled by four dynasties: Sangama, Saluva, Tuluva, and Aravidu, reaching its zenith under Krishnadevaraya (1509–1529 CE) of the Tuluva dynasty.',
        claimType: 'CHRONOLOGICAL_SEQUENCE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-4',
        excerpt: 'Bhakti-Sufi Traditions & Vijayanagara Imperial Capital: Dynasties Sangama, Saluva, Tuluva, Aravidu; Krishnadevaraya.',
      },
      {
        id: 'CLM-MED-04-2',
        statement: 'The Amaranayaka system was a key military-administrative feature of Vijayanagara where commanders were assigned territories to collect taxes and maintain designated troop contingents for the king.',
        claimType: 'FEUDAL_MECHANISM',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-4',
        excerpt: 'Amaranayaka System: Military commanders given territories to govern, maintaining army contingents.',
      },
      {
        id: 'CLM-MED-04-3',
        statement: 'The Battle of Talikota (Rakshasi-Tangadi) in 1565 resulted in the defeat of Aliya Rama Raya by a combined alliance of Bijapur, Golconda, Ahmadnagar, and Bidar, leading to the sacking of Hampi.',
        claimType: 'HISTORICAL_EVENT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-4',
        excerpt: 'Battle of Talikota (1565): Defeat of Vijayanagara by combined Deccan Sultanate coalition (Bijapur, Golconda, Ahmadnagar, Bidar).',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — Medieval Indian History / Art & Architecture (Hampi)',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_ARCHITECTURAL_AND_INSTITUTIONAL',
        notes: 'Amaranayaka system, foreign travellers, and Hampi monuments appear almost every year in UPSC Prelims.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — Medieval Indian History & Culture',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE',
        notes: 'Frequent 5-mark and 10-mark questions on Krishnadevaraya and Vijayanagara art.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Medieval Indian History',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on Amuktamalyada author, Hampi location, and Battle of Talikota year (1565).',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Indian Culture & Heritage — Medieval Architecture',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'HISTORICAL_TERMINOLOGY',
        notes: 'Tested on Mahanavami Dibba, Amaranayakas, and Ashtadiggajas.',
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Static Indian Heritage',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'UNESCO World Heritage Sites (Hampi ruins, Vittala stone chariot on ₹50 note).',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — Culture & Monuments',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Currency note monuments (₹50 note depicts Hampi Stone Chariot).',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Historical Milestones',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'GENERAL_AWARENESS',
        notes: 'Phase 1 static history questions.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'General Socio-Economic Background',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Trade guilds and foreign commerce in medieval South India.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Vijayanagara (1336-1646): 4 Dynasties = Sangama, Saluva, Tuluva, Aravidu. Krishnadevaraya (Tuluva): Amuktamalyada (Telugu), Ashtadiggajas, Nagalapuram. Amaranayaka: Military commanders granted revenue lands to maintain troop quotas. Hampi: Mahanavami Dibba, Vittala Temple (musical pillars & Stone Chariot). Battle of Talikota (1565): Defeated by Bijapur + Golconda + Ahmadnagar + Bidar (Berar excluded!).',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Vijayanagara Imperial Blueprint: 1) Foundation & Zeniths: Founded 1336 by Harihara and Bukka (Sangama); golden age under Krishnadevaraya (1509-29, Tuluva) who wrote Amuktamalyada. 2) Amaranayaka System: Military commanders (Nayakas) collected revenue, maintained standing troop quotas for the Raya, and offered gifts at the annual Mahanavami festival. 3) Hampi Architecture: Sacred & royal centres, Kamalapuram tank, Mahanavami Dibba, Lotus Mahal, Vittala stone chariot. 4) Downfall: Battle of Talikota (1565, Rakshasi-Tangadi); 4 Deccan Sultanates routed Aliya Rama Raya and destroyed Hampi.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Vijayanagara Statecraft Architecture: 1) Geopolitical Engine: Tungabhadra irrigation canals + Portuguese horse monopoly via Goa. 2) Dual Power Structure: Centralized Raya in Royal Centre <-> Amaranayaka militarized regional warlords. 3) International Validation: Chronicled by Nicolo Conti, Abdur Razzaq (7 concentric walls), Domingo Paes, and Fernão Nuniz. 4) Devotional Imperialism: Rule in the name of God Virupaksha (*Sri Virupaksha* royal signet).',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'VIJAYANAGARA_MCQ',
        stem: 'Regarding the taxation and administrative system of the Vijayanagara Empire, which of the following statements about the "Amaranayaka" system is correct?',
        options: [
          'Amaranayakas were Buddhist monks entrusted with maintaining royal libraries',
          'Amaranayakas were military commanders who were given territories to govern and were obligated to maintain fixed contingents of cavalry and foot soldiers for the king',
          'Amaranayakas were hereditary village accountants who could never be transferred by the king',
          'Amaranayakas collected taxes exclusively for the maintenance of mosques in the Deccan'
        ],
        correctAnswer: 'Amaranayakas were military commanders who were given territories to govern and were obligated to maintain fixed contingents of cavalry and foot soldiers for the king',
        explanation: 'Under the Amaranayaka system of Vijayanagara, the Amaranayakas were military commanders granted territories (Amara) by the Raya. They collected taxes, retained a portion for personal use and horses, and maintained a specified contingent of troops and elephants for imperial military service.',
        trapExplanation: 'Confusing Amaranayakas with village accountants (Ayagars) or assuming hereditary un-transferable tenure are common errors.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2020,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Core institutional definition of the Amaranayaka system.',
      },
      {
        type: 'VIJAYANAGARA_MCQ',
        stem: 'Which fifteenth-century Persian ambassador and traveller visited the Vijayanagara Empire during the reign of Deva Raya II and documented that the capital city was encircled by seven concentric rings of fortified stone walls encompassing agricultural fields and irrigation canals?',
        options: [
          'Nicolo de Conti (Venetian merchant)',
          'Abdur Razzaq Samarqandi (Ambassador of Shahrukh of Persia)',
          'Duarte Barbosa (Portuguese writer)',
          'Fernão Nuniz (Portuguese horse-trader)'
        ],
        correctAnswer: 'Abdur Razzaq Samarqandi (Ambassador of Shahrukh of Persia)',
        explanation: 'Abdur Razzaq Samarqandi, sent by the ruler of Persia (Shahrukh) to Calicut and Vijayanagara in the 1440s, was astonished by the defensive fortifications of Vijayanagara. He explicitly recorded seven concentric lines of fortresses that enclosed not only the royal and sacred quarters but also cultivated agricultural fields, orchards, and water channels to withstand long sieges.',
        trapExplanation: 'Nicolo de Conti visited earlier (c. 1420); Domingo Paes and Fernão Nuniz visited later in the 16th century during the Tuluva period. The specific "seven concentric walls" observation belongs to Abdur Razzaq.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2019,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Chronology and specific eyewitness accounts of foreign travellers at Vijayanagara.',
      },
    ],
  },

  // =========================================================================
  // TOPIC 5: Religious & Devotional Synthesis: Bhakti and Sufi Movements
  // =========================================================================
  {
    id: 'CON-MED-05',
    slug: 'bhakti-and-sufi-movements-saguna-nirguna-and-silsila-traditions',
    title: 'The Devotional Revolution: Saguna vs Nirguna Bhakti, Virashaivism, and the Major Sufi Silsilas (Chishti & Suhrawardi)',
    shortDefinition: 'Medieval devotional reform traditions: Tamil Alvar (Vaishnava) and Nayanar (Shaiva) origins, Saguna (form) vs Nirguna (formless) Bhakti duality, Basavanna\'s Virashaiva/Lingayat reform, North Indian saint-poets (Kabir, Guru Nanak, Mirabai, Chaitanya), and Islamic Sufism (Khanqah, Silsilas: Chishti, Suhrawardi, Qadiri, Naqshbandi; Ziyarat & Sama).',
    difficulty: 'ADVANCED',
    order: 5,
    topicSlug: 'bhakti-and-sufi-movements',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Bypassing the Priestly Middlemen: Direct Love for the Divine',
        body: `For over a millennium, institutional religion across the Indian subcontinent was locked behind rigid barriers:
* High-caste Brahmin priests conducted esoteric rituals in classical Sanskrit, a language ordinary peasants and weavers could not understand.
* Orthodoxy enforced strict untouchability, shutting lower castes and women out of temple sanctums.
* In Islamic lands, orthodox clerics (*Ulama*) focused heavily on strict legalism (*Shariat*) and scholastic jurisprudence.

Between the 6th and 17th centuries, an immense spiritual tidal wave crashed over India: the **Bhakti and Sufi Movements**.

The revolutionary core of both movements was identical:
1. **Direct Personal Love (*Bhakti / Ishq*):** God does not require temple sacrifices, animal slaughter, or Sanskrit mantras; God requires pure, unadorned inner devotion.
2. **Vernacular Democratization:** Saints abandoned elite languages (Sanskrit and Arabic) and composed passionate poetry in everyday spoken tongues: Tamil, Hindi, Punjabi, Bengali, Marathi, and Awadhi.
3. **Universal Egalitarianism:** God makes no distinction between king and cobbler, Brahmin and untouchable. A cobbler saint like Ravidas or a weaver saint like Kabir stood equal to any learned pandit.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'Saguna vs Nirguna Matrix & The 4 Major Sufi Silsilas',
        body: `### 1. South Indian Genesis: Alvars and Nayanars (6th–9th Centuries CE)
* **Alvars (12 Saints):** Devotees of **Vishnu**; wandered from shrine to shrine singing praises. Master scripture: **Nalayira Divya Prabandham** (compiled by Nathamuni; hailed as the "Tamil Veda"). Famous saints: Nammalvar, Periyalvar, and **Andal** (the only female Alvar, who saw herself as the bride of Ranganatha).
* **Nayanars (63 Saints):** Devotees of **Shiva**. Master scripture: **Tevaram** (compiled by Nambiyandar Nambi). Famous saints: Appar, Sambandar, Sundarar, and **Karaikkal Ammaiyar** (ascetic female saint who renounced physical beauty).

### 2. The Virashaiva / Lingayat Movement (Karnataka, 12th Century)
* Initiated by **Basavanna** (a minister in Kalachuri court) alongside Allama Prabhu and Akka Mahadevi.
* **Radical Reform:** Questioned the caste system, rejected Brahminical ritual superiority, rejected rebirth (*Karma*), permitted widow remarriage and post-puberty marriage, and buried their dead instead of cremating.
* Devotees wear a small linga in a silver capsule on a cord around their neck. Taught via Kannada devotional prose poems called **Vachanas**.

### 3. The Dual Paths: Saguna vs Nirguna Bhakti

| Parameter | Saguna Bhakti (Devotion with Form & Attributes) | Nirguna Bhakti (Devotion without Form / Abstract) |
| :--- | :--- | :--- |
| **Philosophical View of God** | Manifests as an anthropomorphic deity with human emotions, avatars (*Avatara*), and heroic narratives. | Transcendent, unmanifest, omnipresent, formless Supreme Reality (*Shabda, Satnam, Brahman*). |
| **Idol Worship & Rituals** | Endorses temple worship, image contemplation, and singing liturgical hymns (*Kirtans*). | **Vehemently rejects idol worship**, caste segregation, sacred threads, pilgrimages, and priestly rituals. |
| **Key Saint-Philosophers** | **Tulsidas** (Ramcharitmanas), **Surdas** (Sursagar), **Mirabai** (Krishna devotee), **Chaitanya Mahaprabhu** (Gaudiya Vaishnavism), **Shankaradeva** (Assam, Ekasarana Dharma). | **Kabir** (Bijak, dohas in Sakhis and Sabads), **Guru Nanak** (Adi Granth, founder of Sikhism), **Dadu Dayal**, **Sant Ravidas**. |

### 4. The Sufi Silsilas (Orders) in India
Sufism (*Tasawwuf*) emphasized mystical communion with God through *Zikr* (chanting God's names), *Sama* (musical audition), and living in monastic hospices (*Khanqahs*):

| Sufi Silsila | Founding / Pioneering Masters in India | Core Theological Philosophy & Practice | Political Stance Toward Sultans |
| :--- | :--- | :--- | :--- |
| **Chishti** | **Khwaja Moinuddin Chishti** (Ajmer, 1192 CE), Bakhtiyar Kaki, Baba Farid, **Nizamuddin Auliya** (Delhi), Nasiruddin Chirag-i-Delhi. | Extreme poverty, simplicity, pantheistic unity of existence (*Wahdat al-Wujud*), embrace of local languages (*Hindavi*), and musical sessions (*Sama*). | **Strict avoidance of court politics**; rejected royal titles and cash grants. |
| **Suhrawardi** | **Shaikh Bahauddin Zakariya** (Multan). | Held that a Sufi must possess sufficient worldly wealth to avoid poverty and protect the poor. | **Close association with the Sultanate court**; accepted state posts like *Shaikh-ul-Islam*. |
| **Qadiri** | Shaikh Abdul Qadir Jilani (Baghdad); popular in Punjab and Sindh; patronized by Prince Dara Shikoh. | Moderate, orthodox adherence to Sharia alongside mystical interiority. | Maintained amicable relations with Mughal royalty. |
| **Naqshbandi** | Khwaja Bahauddin Naqshband; introduced by **Khwaja Baqi Billah**; spearheaded by **Shaikh Ahmad Sirhindi** (*Mujaddid Alf-i-Sani*). | **Fiercely orthodox revivalism**; vehemently opposed *Wahdat al-Wujud* (substituted it with *Wahdat ash-Shuhud*); attacked Akbar\'s liberal religious policies. | Actively sought to influence royal policy to enforce strict Islamic orthodoxy. |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'The Khanqah Ecosystem, Ziyarat & Vernacular Syncretism',
        body: `### 1. Life in a Chishti Khanqah (Shaikh Nizamuddin Auliya's Ghiyaspur Hospice)
* **The Open Kitchen (*Langar*):** Financed by unsolicited voluntary donations (*Futuh*); fed rich and poor alike at the same floor mats without caste/religious discrimination.
* **The Master-Disciple (*Pir-Murid*) Bond:** Novices shaved their head, wore patched frocks (*Khirqa*), and received spiritual transmission (*Khilafat*).
* **Ziyarat (Pilgrimage):** Visiting the tomb (*Dargah*) of a saint on his death anniversary (*Urs*—symbolizing the saint's marriage union with God).

### 2. Musical Syncretism & Amir Khusrau
* **Amir Khusrau (1253–1325 CE):** Chief disciple of Nizamuddin Auliya; hailed as *Tuti-i-Hind* (Parrot of India).
* Invented **Qawwali** by blending Persian melody with Indian ragas; pioneered *Hindavi* poetry; developed musical instruments like the Sitar and Tabla.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Female Mystics & Silsila Political Polarities',
        body: `### High-Frequency Traps in Bhakti and Sufi Movements

1. **Saguna vs Nirguna Classification Trap:**
   * **Nirguna:** Kabir, Guru Nanak, Ravidas, Dadu Dayal.
   * **Saguna:** Mirabai, Tulsidas, Surdas, Chaitanya, Shankaradeva.
   * *Trap:* Classifying Kabir as a worshipper of the mythological Rama. (Kabir's "Rama" was a non-anthropomorphic name for the formless transcendent Divine!).

2. **Chishti vs Suhrawardi State Relations:**
   * **Chishtis:** Shunning the state, rejecting imperial gifts, living in voluntary poverty.
   * **Suhrawardis:** Accepting state employment (*Shaikh-ul-Islam*), living in comfortable wealth.
   * *Trap:* Claiming all Sufis renounced wealth and politics.

3. **Female Bhakti Saints Attribution:**
   * **Andal:** The only female **Alvar** (Vaishnavite, Tamil Nadu).
   * **Karaikkal Ammaiyar:** Prominent **Nayanar** (Shaivite, Tamil Nadu).
   * **Akka Mahadevi:** **Virashaiva/Lingayat** mystic (Kannada).
   * **Lalleshwari (Lal Ded):** Kashmiri Shaivite mystic (Vakhs).
   * **Mirabai:** Rajput princess, Krishna devotee (Rajasthan/Gujarat).`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-MED-05-1',
        statement: 'The South Indian Bhakti movement originated with the Alvars (12 Vaishnavite saints, Nalayira Divya Prabandham) and Nayanars (63 Shaivite saints, Tevaram), including prominent women mystics Andal and Karaikkal Ammaiyar.',
        claimType: 'RELIGIOUS_TRADITION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-10',
        excerpt: 'Devotional Paths to the Divine: Alvars and Nayanars in South India; Nalayira Divya Prabandham.',
      },
      {
        id: 'CLM-MED-05-2',
        statement: 'The Virashaiva or Lingayat movement was launched in 12th-century Karnataka by Basavanna, rejecting the caste system, Brahminical ritual hegemony, and rebirth, expressing philosophy through Kannada Vachanas.',
        claimType: 'RELIGIOUS_TRADITION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-10',
        excerpt: 'Virashaiva Movement: Basavanna, Allama Prabhu, Akka Mahadevi; Vachana literature.',
      },
      {
        id: 'CLM-MED-05-3',
        statement: 'The Chishti Sufi order, established in India by Khwaja Moinuddin Chishti of Ajmer, maintained strict separation from political power and embraced musical audition (Sama), in contrast to the wealth-accepting Suhrawardi order.',
        claimType: 'SUFI_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-4',
        excerpt: 'Bhakti-Sufi Traditions: Chishti order of Moinuddin Chishti, Nizamuddin Auliya; contrast with Suhrawardi order.',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — Indian Culture / Bhakti & Sufi Movements',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_PHILOSOPHICAL_COMPARISON',
        notes: 'Guaranteed questions in UPSC Prelims and Mains on Nirguna/Saguna, Basavanna, and Chishti practices.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — Religious Movements in Medieval India & Rajasthan',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE',
        notes: 'Moinuddin Chishti Dargah at Ajmer and Mirabai are cornerstone RAS exam topics.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Medieval Indian Culture',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on Basavanna (Virashaiva), Andal (Alvar), and Kabir (Nirguna).',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Indian Culture & Heritage — Devotional Traditions',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'CULTURAL_CONCEPTS',
        notes: 'Tested on Khanqah, Sama, and saint-poet compilations.',
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Static Indian Culture',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on key saints and literary works.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — Culture & Heritage',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Occasional questions on medieval poets and shrines.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Historical Milestones',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'GENERAL_AWARENESS',
        notes: 'Phase 1 static questions on social reform movements.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'General Socio-Economic Background',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Cultural evolution of medieval Indian society.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Bhakti: Alvars (12, Vishnu, Nalayira Divya Prabandham, Andal), Nayanars (63, Shiva, Tevaram, Karaikkal Ammaiyar). Basavanna: Lingayat/Virashaiva (12th c Karnataka, Vachanas, anti-caste, burial). Saguna = Form (Mirabai, Tulsidas, Chaitanya). Nirguna = Formless (Kabir, Nanak). Sufi: Chishti (Moinuddin Ajmer, Nizamuddin Delhi, avoided politics, Sama music), Suhrawardi (accepted state wealth).',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Bhakti & Sufi Synthesis Blueprint: 1) South Indian Roots: Alvars (Vaishnava) and Nayanars (Shaiva) pioneered vernacular devotional songs. 2) Lingayats: Basavanna challenged orthodoxy, prohibited child marriage, and rejected Vedic hierarchy. 3) Dual Bhakti Streams: Saguna (concrete idol worship of Rama/Krishna) vs Nirguna (abstract formless monotheism championed by Kabir and Guru Nanak). 4) Sufism: Mystical Islam centered on the Khanqah; Chishti silsila emphasized poverty, Langar, and Qawwali (Amir Khusrau); Naqshbandi spearheaded orthodox reaction.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Devotional Movement Socio-Religious Architecture: 1) Sociological Function: Vernacular literature as a vehicle for subaltern social mobility against Sanskrit/Arabic elitism. 2) Ritual Dissolution: Internal emotional communion (*Ishq/Bhakti*) replacing expensive animal sacrifices. 3) Interfaith Syncretism: Common devotional vocabulary between Kabir\'s Sakhis and Sufi *Wahdat al-Wujud* (unity of all existence).',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'BHAKTI_MCQ',
        stem: 'With reference to the religious history of medieval India, the "Virashaiva" movement was initiated in twelfth-century Karnataka by which of the following personalities?',
        options: ['Ramanuja', 'Basavanna', 'Madhvacharya', 'Shankaradeva'],
        correctAnswer: 'Basavanna',
        explanation: 'The Virashaiva (or Lingayat) movement was launched in the 12th century in Karnataka by Basavanna and his companions (Allama Prabhu and Akka Mahadevi). They worshipped Shiva in his manifestation as a linga, rejected caste distinctions and Brahminical ritualism, and composed poetry in Kannada called Vachanas.',
        trapExplanation: 'Ramanuja founded Vishishtadvaita Vedanta in Tamil Nadu, whereas Basavanna founded the Virashaiva movement in Karnataka.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Founder of the 12th-century Virashaiva movement.',
      },
      {
        type: 'SUFI_MCQ',
        stem: 'Which Sufi Silsila (order) in India strictly prohibited its saints and disciples from associating with kings and accepting state employment or royal titles, in contrast to the Suhrawardi order?',
        options: ['Chishti Order', 'Suhrawardi Order', 'Naqshbandi Order', 'Qadiri Order'],
        correctAnswer: 'Chishti Order',
        explanation: 'The Chishti order (represented by Khwaja Moinuddin Chishti, Baba Farid, and Nizamuddin Auliya) maintained a strict policy of keeping aloof from worldly power, refusing royal jagirs, and avoiding sultanate courts. By contrast, the Suhrawardis of Multan openly accepted state titles and wealth.',
        trapExplanation: 'Confusing the ascetic Chishti order with the politically active Naqshbandi or wealthy Suhrawardi orders is common.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2019,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Political attitude of the Chishti vs Suhrawardi Sufi orders.',
      },
    ],
  },

  // =========================================================================
  // TOPIC 6: The Mughal Empire: Agrarian & Administrative Institutions
  // =========================================================================
  {
    id: 'CON-MED-06',
    slug: 'mughal-empire-mansabdari-system-jagirdari-and-todar-mal-zabt-dahsala',
    title: 'The Mughal Empire: Mansabdari System, Jagirdari Assignment, and Todar Mal\'s Zabt/Dahsala Land Revenue System',
    shortDefinition: 'Core institutional engines of the Mughal Empire (1526–1707 CE): Sher Shah Suri\'s structural precursors, Akbar\'s Mansabdari military-administrative hierarchy (Zat status vs Sawar cavalry rank, Dah-Bishi rule, Naqdi vs Jagirdar), the Jagirdari tenure system, and Raja Todar Mal\'s Ain-i-Dahsala/Zabt land revenue settlement (soil classifications Polaj, Parauti, Chachar, Banjar).',
    difficulty: 'ADVANCED',
    order: 6,
    topicSlug: 'mughal-empire-institutions-mansab-zabt',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Steel Frame of the Mughal Empire: Ranking Every Noble by Math',
        body: `How did the Mughal emperors govern over 100 million subjects across an empire stretching from Kabul in Afghanistan to the Kaveri delta in South India without a modern standing army or computerized banking?

Earlier medieval dynasties suffered from perpetual warlord rebellions: whenever a provincial governor assembled a large private cavalry force, he declared independence and marched to overthrow the capital.

Under the architectural genius of **Emperor Akbar (reigned 1556–1605 CE)**, aided by brilliant administrators like **Raja Todar Mal**, the Mughal state constructed a mathematical, unified civil-military administrative machine:
1. **The Mansabdari System:** Every single officer in the empire—from a provincial viceroy down to a royal veterinarian—was incorporated into a single, decimal hierarchy called a **Mansab (Rank)**. Your status, protocol, salary, and military obligations were calculated to the exact rupee and cavalry horse.
2. **The Zabt / Dahsala System:** Eliminating arbitrary tax extraction, the state meticulously surveyed fields, calculated the **10-year rolling average yield**, and fixed revenue demand in cash, transforming agricultural surplus into reliable imperial revenue.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The Mansabdari Dual Rank (Zat & Sawar) & Todar Mal\'s Dahsala System',
        body: `### 1. Sher Shah Suri\'s (1540–1545 CE) Administrative Precursors
Before Akbar, the Afghan emperor **Sher Shah Suri** laid the foundational infrastructure of modern Indian administration:
* Standardized silver currency: introduced the **Rupiya** (178 grains pure silver, dividing into 64 copper *Dams*), which became the direct precursor of the modern Indian Rupee!
* Constructed the **Grand Trunk Road (Sadak-i-Azam)** from Sonargaon (Bengal) to the Indus, building **1,700 Sarais** (inns with separate quarters for Hindus and Muslims) and postal stations.
* Surveyed land using rope measures and introduced the **Zabt** system based on crop schedules (*Ray*).

---

### 2. Akbar\'s Mansabdari System: The Dual Rank Structure (Zat and Sawar)
Introduced around 1571–1574 CE, every imperial officer held a **Mansab** comprising two numbers:

$$\\mathbf{\\text{Mansab Ranking}} = \\mathbf{\\text{Zat Rank}} \\quad \\text{and} \\quad \\mathbf{\\text{Sawar Rank}}$$

* **Zat (Personal Status & Pay):** Determined the noble\'s personal standing in the imperial court hierarchy and his personal salary. Ranks ranged from 10 to 10,000 (ranks above 5,000 were initially reserved for royal princes).
* **Sawar (Military Contingent):** Dictated the exact number of cavalrymen and horses the noble was legally required to maintain for imperial service.
* **The Mathematical Hierarchy Rule:**
  * **Sawar can NEVER exceed Zat!**
  * **1st Class Mansabdar:** Sawar = Zat (e.g. 5,000 Zat / 5,000 Sawar).
  * **2nd Class Mansabdar:** Sawar $\\ge \\frac{1}{2}$ Zat (e.g. 5,000 Zat / 3,000 Sawar).
  * **3rd Class Mansabdar:** Sawar $< \\frac{1}{2}$ Zat (e.g. 5,000 Zat / 2,000 Sawar).
* **The Dah-Bishi (10-to-20) Rule:** For every 10 cavalrymen (*Sawar*), a noble was required to maintain **20 horses** (2 horses per trooper to ensure mobility during desert and mountain warfare).
* **Mode of Payment:**
  * **Naqdi:** Paid in cash directly from the imperial treasury.
  * **Jagirdar:** Assigned the revenue of an agricultural estate (**Jagir**) calculated to match his sanctioned salary (*Talab*).

---

### 3. Raja Todar Mal\'s Ain-i-Dahsala / Zabt System (1580 CE)
* **Measurement Standard:** Replaced hemp ropes with bamboo sticks linked by iron rings (**Tanab / Ilahi Gaz**).
* **Dahsala Assessment (10-Year Average):** Meticulously calculated the **average crop yield and average market prices over the past 10 years (1571 to 1580 CE / 15th to 24th regnal years)**.
* **State Demand:** Fixed at **one-third ($\\frac{1}{3}$) of the average produce**, converted into cash based on local price schedules (*Dastur*).
* **4-Fold Soil Classification:**
  1. **Polaj:** Annually cultivated land, never left fallow; pays full revenue every year.
  2. **Parauti:** Left fallow for 1 or 2 years to recover fertility; pays full rate when cultivated.
  3. **Chachar:** Fallow for 3 to 4 years; taxed at concessional rising rates upon reclamation.
  4. **Banjar:** Uncultivated for 5 or more years; nominal tax to encourage reclamation.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'The Jagirdari Crisis: Jama vs Hasil & The Paibaqi Shortage',
        body: `### The Mathematical Breakdown of the Jagirdari Mechanism
* **Jama (Assessed Value):** The estimated revenue potential of a Jagir calculated by the imperial revenue ministry.
* **Hasil (Actual Realization):** The actual revenue collected from the peasants.
* **The Jagirdari Crisis (Late 17th Century under Aurangzeb):**
  * As Aurangzeb conquered the Deccan, he inducted thousands of Maratha and Deccani nobles into the Mansabdari system to buy their loyalty.
  * Number of Mansabdars surged exponentially, while the available land reserved for assignment (**Paibaqi**) was exhausted.
  * Noble salaries existed on paper (*Jama*), but actual collections (*Hasil*) fell drastically due to constant warfare. Jagirdars squeezed the peasantry mercilessly, triggering widespread agrarian revolts (Jats, Satnamis, Sikhs).`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Zat/Sawar Rules & Soil Classification Order',
        body: `### High-Frequency Traps in Mughal Administration

1. **The Sawar Exceeding Zat Trap (Repeated in UPSC!):**
   * *Trap:* Claiming a noble could have 3,000 Zat and 4,000 Sawar.
   * *Truth:* **Sawar can NEVER exceed Zat!** Maximum Sawar rank was equal to the Zat rank.

2. **Hereditary Mansab Trap:**
   * *Trap:* Assuming Mansabs were inherited by the eldest son.
   * *Truth:* Mansabs were **strictly non-hereditary**. Upon a noble's death, all his property was seized by the state (**Escheat System / *Zabti***), and his sons had to earn their own ranks through service.

3. **Polaj vs Parauti vs Chachar:**
   * Polaj = cultivated every year.
   * Parauti = left fallow 1-2 years.
   * Chachar = fallow 3-4 years.
   * Banjar = uncultivated 5+ years.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-MED-06-1',
        statement: 'Sher Shah Suri introduced the standard silver Rupiya (178 grains), constructed the Grand Trunk Road (Sadak-i-Azam) with 1,700 Sarais, and established the prototype of the Zabt land revenue system.',
        claimType: 'HISTORICAL_INNOVATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-44',
        excerpt: 'The Mughal Empire: Sher Shah Suri administrative innovations, Rupiya, Grand Trunk Road.',
      },
      {
        id: 'CLM-MED-06-2',
        statement: 'Akbar\'s Mansabdari system integrated civil and military bureaucracy through dual Zat (personal status and pay) and Sawar (cavalry quota) ranks, governed by the rule that Sawar could never exceed Zat.',
        claimType: 'ADMINISTRATIVE_MECHANISM',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-44',
        excerpt: 'Mughal Mansabdari System: Zat and Sawar ranks, non-hereditary, Dah-Bishi rule.',
      },
      {
        id: 'CLM-MED-06-3',
        statement: 'Raja Todar Mal introduced the Ain-i-Dahsala land revenue settlement in 1580 CE, calculating state tax at one-third of the 10-year rolling average yield across Polaj, Parauti, Chachar, and Banjar soils.',
        claimType: 'ECONOMIC_REFORM',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-1',
        excerpt: 'Agrarian Society under Mughals: Todar Mal Dahsala system, 10-year average yield, Polaj, Parauti, Chachar, Banjar.',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — Medieval Indian History / Mughal Administration & Agrarian Economy',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_CONCEPTUAL_ANALYSIS',
        notes: 'Mansabdari mechanics, Dahsala settlement, and Jagirdari crisis are premier UPSC essay and prelims topics.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — Mughal Administrative Institutions',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE',
        notes: 'Frequent 10-mark question analyzing the Mansabdari system and Todar Mal\'s revenue reforms.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Medieval Indian History',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on silver Rupiya (Sher Shah), Todar Mal (Finance Minister), and Polaj soil definition.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Indian Culture & Heritage — Medieval Land Revenue Systems',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'ADMINISTRATIVE_TERMINOLOGY',
        notes: 'Tested on Jama vs Hasil and Paibaqi land.',
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Static Indian History',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on currency origins (Sher Shah Rupiya) and key Mughal institutions.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — History & Culture',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on agrarian history and administrative terminology.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Historical Milestones',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'GENERAL_AWARENESS',
        notes: 'Phase 1 static history questions on revenue systems.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'General Socio-Economic Background',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Historical evolution of Indian land revenue and taxation instruments.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Mughal Institutions: Sher Shah = Silver Rupiya (178 grains), GT Road (1700 Sarais). Mansabdari: Zat = personal rank/pay; Sawar = cavalry quota. Rule: Sawar CANNOT exceed Zat. Non-hereditary (Escheat). Dahsala/Zabt (1580, Todar Mal): 10-yr rolling average, tax = 1/3 in cash. Soils: Polaj (annual), Parauti (1-2 yrs fallow), Chachar (3-4 yrs fallow), Banjar (5+ yrs fallow).',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Mughal Administrative Blueprint: 1) Sher Shah Suri: Created the silver Rupiya, built the Grand Trunk Road, and surveyed land. 2) Mansabdari System: Akbar\'s unified civil-military decimal hierarchy. Every noble held a Zat rank (status/salary) and Sawar rank (cavalry obligation; Dah-Bishi 10:20 ratio); Sawar never exceeded Zat; non-hereditary. Paid in cash (Naqdi) or land revenue assignment (Jagir). 3) Ain-i-Dahsala (1580): Raja Todar Mal fixed state land tax at 1/3 of the 10-year rolling average crop yield in cash across Polaj, Parauti, Chachar, and Banjar soils.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Mughal Fiscal-Military Architecture: 1) Agrarian Foundation: Standardized survey (*Tanab/Ilahi Gaz*) -> 10-year price indexing (*Dastur*) -> 1/3 state revenue demand. 2) Bureaucratic Machinery: Diwan (Finance), Mir Bakshi (Military/Mansabdars), Mir Saman (Imperial Stores), Chief Qazi (Justice). 3) Structural Decay: Aurangzeb Deccan influx -> Jagirdari crisis (*Jama* outstripping *Hasil*) -> Paibaqi exhaustion -> Agrarian revolt.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'MUGHAL_MCQ',
        stem: 'In the Mansabdari system of the Mughal Empire introduced by Emperor Akbar, which of the following statements is mathematically and legally ACCURATE?',
        options: [
          'The Sawar rank of a noble could exceed his Zat rank in times of war',
          'The Sawar rank of a noble could never exceed his Zat rank',
          'Mansabs were strictly hereditary and automatically passed to the eldest son',
          'Mansabdars were prohibited from receiving cash salaries (Naqdi)'
        ],
        correctAnswer: 'The Sawar rank of a noble could never exceed his Zat rank',
        explanation: 'Under Akbar\'s Mansabdari regulations, the Sawar rank (cavalry contingent obligation) could never exceed the Zat rank (personal status and pay). A noble\'s Sawar rank could be equal to, half of, or less than his Zat rank, determining whether he was a 1st, 2nd, or 3rd class Mansabdar.',
        trapExplanation: 'Assuming exceptional wartime provisions allowed Sawar to exceed Zat, or believing Mansabs were hereditary, are common traps.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Mathematical constraint rule of the Mansabdari system (Sawar <= Zat).',
      },
      {
        type: 'MUGHAL_MCQ',
        stem: 'Under Raja Todar Mal\'s "Ain-i-Dahsala" (Zabt) land revenue system in the Mughal Empire, what did the term "Polaj" designate?',
        options: [
          'Land that was left fallow for three to four years to recover natural fertility',
          'Land that was cultivated annually without ever being left fallow',
          'Uncultivated barren land that had not been plowed for five or more years',
          'Land reserved exclusively for the royal gardens of the Emperor'
        ],
        correctAnswer: 'Land that was cultivated annually without ever being left fallow',
        explanation: 'Under the Dahsala settlement, land was categorized into four soil types based on cultivation frequency: Polaj was ideal, fertile land cultivated continuously every single year without being left fallow, paying full state revenue annually.',
        trapExplanation: 'Option A describes Chachar; Option C describes Banjar; Option B is Polaj.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2020,
        pyqPaper: 'RPSC RAS Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Mughal soil classification vocabulary (Polaj vs Parauti vs Chachar vs Banjar).',
      },
    ],
  },

  // =========================================================================
  // TOPIC 7: Mughal Statecraft, Rajput Alliances & Religious Policy
  // =========================================================================
  {
    id: 'CON-MED-07',
    slug: 'mughal-statecraft-rajput-policy-ibadat-khana-and-sulh-i-kul',
    title: 'Mughal Imperial Statecraft & Ideology: Rajput Alliances, The Ibadat Khana, The 1579 Mahzar, and Sulh-i Kul (Universal Peace)',
    shortDefinition: 'Ideological and diplomatic foundations of the Mughal Empire: Akbar\'s strategic Rajput alliance policy (matrimonial diplomacy, high Mansabs, Watan Jagirs, abolition of Jizya and Pilgrim Tax), the evolution of his religious thought (Ibadat Khana debates at Fatehpur Sikri 1575), the 1579 Mahzar (Infallibility Decree), Tauhid-i-Ilahi (Din-i-Ilahi), Sulh-i Kul (Absolute Peace), and the religious transitions under Jahangir, Shah Jahan, and Aurangzeb.',
    difficulty: 'ADVANCED',
    order: 7,
    topicSlug: 'mughal-statecraft-rajput-policy-sulhikul',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Building an Empire of Consent: The Genius of Sulh-i Kul',
        body: `When the young Akbar ascended the throne at age 13 in 1556, the Mughal presence in India was precarious. His grandfather Babur had won military battles with superior artillery, and his father Humayun had been chased into exile by Sher Shah Suri. Previous Delhi Sultans had ruled primarily as foreign military garrisons, treating the vast Hindu majority as subjugated subjects.

Akbar realized a profound political truth: **An Islamic empire in India could never survive by brute sword alone; it had to be anchored in the emotional, political, and cultural consent of the indigenous ruling martial aristocracy—the Rajputs.**

Instead of destroying defeated Rajput rulers, Akbar offered them an irresistible partnership: matrimonial alliances, top military commands in the imperial army, and complete internal autonomy over their ancestral lands (**Watan Jagirs**).

Concurrently, at his new capital of **Fatehpur Sikri**, Akbar embarked on an unprecedented intellectual quest. Disillusioned with the petty squabbling of orthodox Muslim clerics (*Ulama*), he constructed the **Ibadat Khana (House of Worship)**, inviting Hindu pandits, Jain monks, Christian Jesuit priests, Zoroastrian fire-priests, and Muslim scholars to debate theology. Out of this crucible emerged the supreme governing philosophy of the Mughal Empire: **Sulh-i Kul (Universal Peace and Tolerance)**.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'Rajput Diplomacy Matrix & Akbar\'s Religious Evolution',
        body: `### 1. Akbar\'s Rajput Policy: The Triad of Integration
1. **Fiscal Abolition of Discrimination:**
   * **1563 CE:** Abolished the **Pilgrim Tax** on Hindus travelling to holy shrines.
   * **1564 CE:** Abolished the discriminatory **Jizya** tax on non-Muslim subjects.
2. **Matrimonial Alliances with Dignity:**
   * In 1562 CE, married Harkha Bai (Mariam-uz-Zamani), daughter of Raja Bharmal of **Amer (Jaipur)**. Unlike earlier sultans, Hindu princesses were granted complete freedom to practice Hindu rituals inside the imperial palace.
3. **High Mansabs & Equal Military Command:**
   * Appointed **Raja Man Singh** of Amer and **Raja Todar Mal** to the highest ranks of state (Man Singh received a rank of 7,000, higher than most Muslim princes).
   * Man Singh commanded the Mughal army at the **Battle of Haldighati (1576 CE)** against Maharana Pratap of Mewar.
4. **The Watan Jagir Innovation:**
   * Defeated Rajput chiefs had their ancestral kingdoms confiscated and immediately re-granted to them as **Watan Jagirs** (hereditary estates immune from standard imperial transfers).

---

### 2. Evolution of Akbar\'s Religious Philosophy (1575–1582 CE)

| Milestone & Year | Institutional Forum | Key Participants / Intellectual Dynamics | Historic Outcome & Significance |
| :--- | :--- | :--- | :--- |
| **1. Ibadat Khana (1575 CE)** | Built at **Fatehpur Sikri** as a hall for philosophical inquiry. | Initially Sunni scholars; expanded in 1578 to: Purushottama & Devi (Hinduism), Hira Vijaya Suri & Vijaya Sena Suri (Jainism), Father Monserrate & Rodolfo Acquaviva (Jesuit Christianity), Meherji Rana (Zoroastrianism). | Akbar realized that no single religion held a monopoly on absolute truth; orthodox Ulama discredited by petty bickering. |
| **2. The Mahzar / Infallibility Decree (1579 CE)** | Drafted by **Shaikh Mubarak** (father of Abul Fazl and Faizi); signed by leading Ulama. | Declared Akbar as the **Imam-i-Adil (Just Ruler)**. | If scholars differed on religious jurisprudence, the Emperor possessed statutory authority to choose whichever interpretation served public welfare, superseding the Ulama! |
| **3. Sulh-i Kul (Universal Peace)** | The supreme ethical framework of the empire. | Articulated by **Abul Fazl** in *Akbarnama* and *Ain-i-Akbari*. | State treated all religions equally, guaranteeing freedom of worship, so long as citizens did not undermine state stability. |
| **4. Tauhid-i-Ilahi / Din-i-Ilahi (1582 CE)** | Spiritual brotherhood / disciple order (*Iradat*). | Centered on devotion to the Emperor, vegetarianism, charity, and ethical restraint. Never an enforced state religion! | Only 18 prominent court nobles joined (including Raja Birbal; Raja Man Singh famously declined). |

---

### 3. Religious Policy of Later Mughals
* **Jahangir (1605–1627 CE):** Generally maintained Akbar\'s liberal policies; installed the **Chain of Justice (*Zanjir-i-Adl*)** with 60 golden bells at Agra Fort; executed Fifth Sikh Guru Arjan Dev on political grounds (sheltering rebel Prince Khusrau).
* **Shah Jahan (1628–1658 CE):** Slight orthodox tilt; rebuilt demolished mosques, but patronized Hindu court musicians and his eclectic, mystic son **Dara Shikoh** (who translated the Upanishads into Persian as *Sirr-i-Akbar*).
* **Aurangzeb (1658–1707 CE):** Complete puritanical reversal:
  * Abolished court music, astrology, *Jharokha Darshan*, and *Nauroz*.
  * Compiled the monumental Hanafi legal code **Fatawa-i-Alamgiri**.
  * **Re-imposed Jizya in 1679 CE** and Pilgrim Tax; executed Ninth Sikh Guru Tegh Bahadur (1675 CE); alienating Rajputs, Marathas, and Sikhs.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'The Infallibility Decree (Mahzar) & The Concept of Divine Light (Farr-i-Izadi)',
        body: `### 1. The Legal Authority of the 1579 Mahzar
* Formulated under Islamic legal principles: Akbar was proclaimed higher in rank than a *Mujtahid* (interpreter of law) because an *Imam-i-Adil* holds higher authority.
* It subordinated ecclesiastical religious authority to temporal sovereign authority, establishing an early Indian counterpart to the European doctrine of national sovereignty.

### 2. The Illuminationist Ideology (*Farr-i-Izadi*)
* Articulated by court historian **Abul Fazl** based on the philosophy of Shihabuddin Suhrawardi:
* Kingship is a divine light emanating directly from God (*Farr-i-Izadi*), placing the sovereign above sectarian divisions. The Emperor acts as a paternal guardian (*Padshah*) to all subjects, regardless of caste or faith.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Din-i-Ilahi Membership & Jizya Chronology',
        body: `### High-Frequency Traps in Mughal Statecraft

1. **Din-i-Ilahi Nature Trap:**
   * *Trap:* Claiming Din-i-Ilahi was a formal new religion with a holy book, priests, and mass conversion.
   * *Truth:* It was an **exclusive spiritual order of discipleship (*Iradat*)** for royal courtiers. It had no scripture, no clergy, and only ~18 members!

2. **Jizya Chronology (UPSC/PCS Landmark!):**
   * **1564 CE:** Jizya abolished by **Akbar**.
   * **1679 CE:** Jizya re-imposed by **Aurangzeb**.
   * *Trap:* Swapping the dates or confusing Jizya with the Pilgrim tax (abolished in 1563).

3. **Birbal vs Man Singh Din-i-Ilahi Trap:**
   * **Raja Birbal** was the *only Hindu noble* who accepted Din-i-Ilahi.
   * **Raja Man Singh** explicitly refused to join, stating: *"If your Majesty means loyalty, I have demonstrated it. But if you mean religion, I am a Hindu."* Akbar respected his refusal without penalty.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-MED-07-1',
        statement: 'Akbar abolished the Pilgrim Tax in 1563 CE and the Jizya on non-Muslims in 1564 CE, cementing Rajput alliances through matrimonial diplomacy and grant of hereditary Watan Jagirs.',
        claimType: 'HISTORICAL_EVENT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-44',
        excerpt: 'Mughal Religious Policy: Akbar abolition of Pilgrim Tax (1563) and Jizya (1564); Rajput policy.',
      },
      {
        id: 'CLM-MED-07-2',
        statement: 'In 1575 CE, Akbar constructed the Ibadat Khana at Fatehpur Sikri for interfaith philosophical debates, issued the Mahzar (Infallibility Decree) in 1579 CE, and promulgated the ethical doctrine of Sulh-i Kul (Universal Peace).',
        claimType: 'RELIGIOUS_POLICY',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-44',
        excerpt: 'Ibadat Khana debates (1575), Mahzar decree (1579), and Sulh-i Kul doctrine formulated by Abul Fazl.',
      },
      {
        id: 'CLM-MED-07-3',
        statement: 'Aurangzeb reversed Akbar\'s liberal religious policies by reimposing the Jizya in 1679 CE, compiling the Fatawa-i-Alamgiri, and banning court music and Jharokha Darshan.',
        claimType: 'HISTORICAL_EVENT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-44',
        excerpt: 'Later Mughals: Aurangzeb reimposition of Jizya in 1679 and conservative religious reforms.',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — Medieval Indian History / Mughal Empire Statecraft & Religious Synthesis',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_CONCEPTUAL_ANALYSIS',
        notes: 'Sulh-i Kul, Ibadat Khana, and Akbar\'s Rajput policy are perennial UPSC mains and prelims topics.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — Mughal-Rajput Relations & Religious Policy',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE',
        notes: 'Mughal-Rajput relations (Man Singh, Maharana Pratap, Watan Jagirs) is the single most important history topic in RPSC RAS.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Medieval Indian History',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on Jizya abolition (1564), reimposition (1679), and Ibadat Khana location (Fatehpur Sikri).',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Indian Culture & Heritage — Medieval State Ideology',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'IDEOLOGICAL_CONCEPTS',
        notes: 'Tested on Sulh-i Kul and Mahzar decree.',
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Static Indian History',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on Akbar\'s court and monuments.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — History & Culture',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on key rulers and dates.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Historical Milestones',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'GENERAL_AWARENESS',
        notes: 'Phase 1 static history questions.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'General Socio-Economic Background',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'State building and integration of regional elites in pre-modern India.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Akbar Statecraft: Abolished Pilgrim Tax (1563), Jizya (1564). Rajput policy: Matrimonial alliances, high mansabs (Man Singh, Todar Mal), Watan Jagirs (hereditary lands). Ibadat Khana (1575, Fatehpur Sikri) = Interfaith debates. Mahzar (1579) = Emperor as Imam-i-Adil. Sulh-i Kul = Universal peace. Din-i-Ilahi (1582) = Disciple order (Birbal joined; Man Singh refused). Aurangzeb reimposed Jizya (1679).',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Mughal Statecraft & Ideology Blueprint: 1) Rajput Partnership: Akbar transformed defeated foes into imperial anchors via matrimonial respect (Harkha Bai), highest military commands (Raja Man Singh at Haldighati 1576), and Watan Jagirs. Abolished Jizya (1564) and Pilgrim Tax (1563). 2) Religious Evolution: Constructed Ibadat Khana (1575) welcoming Hindus, Jains, Christians, and Parsis; issued Mahzar (1579) asserting royal interpretive supremacy; formulated Sulh-i Kul (Universal Peace) via Abul Fazl. 3) Reversal: Aurangzeb reimposed Jizya (1679) and compiled Fatawa-i-Alamgiri.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Mughal Political-Ideological Architecture: 1) Strategic Alliance: Rajput martial cavalry integration neutralizing indigenous rebellions. 2) Ideological Legitimacy: Farr-i-Izadi (Divine Illumination) elevating the Padshah as paternal protector of all faiths. 3) Legislative Supremacy: Mahzar 1579 emancipating secular imperial decrees (*Zawabit*) from clerical theological veto.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'MUGHAL_STATECRAFT_MCQ',
        stem: 'What was the primary political and legal objective of the "Mahzar" (Declaration of 1579) issued by Emperor Akbar?',
        options: [
          'To declare Islam as the only permitted religion across the Mughal Empire',
          'To empower the Emperor to choose between conflicting legal interpretations of Islamic law in the interest of public welfare, elevating imperial authority above the Ulama',
          'To order the compulsory conversion of all Rajput nobility to Din-i-Ilahi',
          'To re-impose the Jizya tax on all commercial merchants'
        ],
        correctAnswer: 'To empower the Emperor to choose between conflicting legal interpretations of Islamic law in the interest of public welfare, elevating imperial authority above the Ulama',
        explanation: 'The Mahzar of 1579 (drafted by Shaikh Mubarak and signed by chief clerics) recognized Akbar as an Imam-i-Adil (Just Ruler). It stipulated that if religious scholars disagreed on any point of Islamic jurisprudence, the Emperor had the legal authority to select whichever interpretation best served the public welfare and state interest, thereby breaking the political monopoly of orthodox Ulama.',
        trapExplanation: 'Assuming the Mahzar declared a new religion or enforced Islam are classic misconceptions.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2019,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Exact legal intent of the 1579 Mahzar (Infallibility Decree).',
      },
      {
        type: 'MUGHAL_STATECRAFT_MCQ',
        stem: 'In which year did Emperor Aurangzeb officially re-impose the "Jizya" tax on non-Muslim subjects, reversing the policy established by Akbar in 1564?',
        options: ['1658 CE', '1666 CE', '1679 CE', '1707 CE'],
        correctAnswer: '1679 CE',
        explanation: 'In 1679 CE, twenty-one years after ascending the throne, Emperor Aurangzeb officially re-imposed the Jizya on non-Muslims, reversing Akbar\'s historic abolition of 1564 CE and alienating the Rajput and Hindu populations.',
        trapExplanation: '1658 is his ascension; 1707 is his death; 1679 is the exact year of Jizya reimposition.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'RPSC RAS Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Exact historical year of Jizya reimposition by Aurangzeb (1679).',
      },
    ],
  },

  // =========================================================================
  // TOPIC 8: Indo-Islamic Architectural Evolution & Imperial Urbanism
  // =========================================================================
  {
    id: 'CON-MED-08',
    slug: 'indo-islamic-architectural-evolution-trabeate-to-arcuate-and-mughal-monuments',
    title: 'Indo-Islamic Architectural Evolution: Trabeate-Arcuate Synthesis, Delhi Sultanate Prototyping, and Mughal Monumental Aesthetics',
    shortDefinition: 'Architectural transformation of medieval India: Transition from indigenous Trabeate (corbelled/post-and-lintel) to Indo-Islamic Arcuate (true arches, vaults, domes, squinches, minarets), Delhi Sultanate phases (Qutb complex, Alai Darwaza, Tughlaq battering walls, Lodhi double domes), and Mughal monumental synthesis (Charbagh garden tombs, red sandstone-white marble interplay, Pietra Dura inlay, and the Taj Mahal).',
    difficulty: 'ADVANCED',
    order: 8,
    topicSlug: 'indo-islamic-architecture-and-urbanism',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'When the Arch Met the Lotus: The Creation of Indo-Islamic Architecture',
        body: `Before the 12th century, traditional Indian temple architecture followed the **Trabeate (post-and-lintel)** engineering style. To bridge open spaces, Indian stonemasons placed horizontal stone beams over vertical stone pillars, or used **corbelling** (overlapping stone courses meeting at the center). Because stone possesses weak tensile strength, trabeate architecture required dense forests of pillars to support roofs, making massive open interior congregation halls physically impossible.

When Turkish and Central Asian builders arrived, they brought the **Arcuate engineering system**:
* The **True Arch (*Mehrab*)**: Using wedge-shaped stones (**Voussoirs**) locked together by a central **Keystone**, transferring weight outward and downward into thick supporting walls.
* The **True Dome (*Gumbad*)**: Enabling colossal, column-free interior assembly halls.
* High-quality **Lime-Mortar (*Chuna*)**: An adhesive cement that enabled rapid, colossal masonry construction.

When Turkish engineering merged with indigenous Indian stone-carving mastery, it gave birth to **Indo-Islamic Architecture**—a breathtaking synthesis where Islamic domes, minarets, and geometric arabesques blended seamlessly with Indian lotus blossoms, *kalash* finials, *chhatris* (kiosks), and *jalis* (perforated stone lattice screens).`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'Trabeate vs Arcuate Matrix & Dynastic Architectural Progression',
        body: `### 1. Structural Comparison: Trabeate vs Arcuate Systems

| Engineering Feature | Indigenous Trabeate Style | Indo-Islamic Arcuate Style |
| :--- | :--- | :--- |
| **Roof & Opening Support** | **Horizontal lintels and beams** laid across vertical columns. | **True Arch** constructed with wedge-shaped stones (voussoirs) and a keystone. |
| **Spanning Technology** | **Corbelling:** Overlapping horizontal stone layers meeting at an apex. | **True Dome and Barrel Vaults** spanning colossal pillar-free spaces. |
| **Binding Material** | Dry stone masonry; iron clamps and dowels (zero mortar). | **Lime-mortar (*Chuna-Surkhi*)** bonding stones rapidly into monolithic structures. |
| **Decorative Motifs** | Human and divine anthropomorphic sculptures, floral carvings, bells, lotuses. | **Arabesque (intertwined vines), Calligraphy (Quranic verses), Geometric patterns**, and *Jali* lattices (avoiding human/animal figures). |

---

### 2. Dynastic Evolution of Indo-Islamic Architecture

| Era & Dynasty | Representative Monuments | Key Architectural Innovations & Stylistic Hallmarks |
| :--- | :--- | :--- |
| **Mamluk / Slave Dynasty** | **Quwwat-ul-Islam Mosque** (Delhi), **Qutb Minar** (1199 CE, red sandstone), **Adhai Din Ka Jhonpra** (Ajmer). | Transition phase: Built reusing pillars from demolished temples; false corbelled arches; first minarets. |
| **Khalji Dynasty** | **Alai Darwaza** (1311 CE, Qutb complex), Jamat Khana Mosque. | **First appearance of the TRUE ARCH** and true dome in India; red sandstone with white marble band inlays; horse-shoe arches. |
| **Tughlaq Dynasty** | **Tughlaqabad Fort** (Ghiyasuddin Tughlaq\'s tomb), Kotla Firuz Shah. | **Sloping battering walls (*Salami*)** for military defense; austere grey stone; introduction of octagonal tomb designs. |
| **Lodi Dynasty** | Tombs at **Lodi Gardens** (Sikandar Lodi tomb, Bara Gumbad). | **Introduction of the DOUBLE DOME** (inner dome proportions interior height; outer dome gives monumental exterior majesty); high plinth platforms. |
| **Sur Interregnum** | **Sher Shah\'s Tomb at Sasaram** (Bihar), Qila-i-Kuhna Mosque (Purana Qila). | Octagonal tomb in a man-made lake; transition from Sultanate austerity to Mughal magnificence. |
| **Early Mughal (Akbar)** | **Humayun\'s Tomb** (Delhi, Mirak Mirza Ghiyas), **Fatehpur Sikri** (Buland Darwaza, Panch Mahal, Salim Chishti Tomb). | **Charbagh garden layout**; Persian double dome; red sandstone with white marble trim; indigenous Rajasthani *Chhatris* and *Jharokhas*. |
| **High Mughal (Shah Jahan)** | **Taj Mahal** (Agra), **Red Fort & Jama Masjid** (Delhi), Peacock Throne. | Zenith of symmetry; shift from red sandstone to **pure Makrana white marble**; bulbous domes; **Pietra Dura (Parchin Kari)** floral hard-stone inlays. |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'The Charbagh Layout, Double Dome Engineering & Pietra Dura',
        body: `### 1. The Charbagh Concept (Paradise Garden)
* Inspired by the Quranic description of paradise with four rivers of milk, honey, wine, and water.
* A quadrilateral walled garden divided symmetrically into **four equal quadrants** by intersecting raised water channels and walkways, with the monumental mausoleum placed at the center (e.g. Humayun's Tomb) or on a riverfront terrace (e.g. Taj Mahal overlooking the Yamuna).

### 2. The Double Dome Engineering Breakthrough
* First used in India at **Humayun\'s Tomb (1570 CE)** (architect Mirak Mirza Ghiyas).
* Solved a profound architectural dilemma:
  * A single dome high enough to look majestic from the outside created a dark, cavernous, echoey void inside.
  * A single dome low enough to create an intimate interior looked squat and unimpressive from the exterior.
  * **The Solution:** Two concentric domes: an interior ceiling dome and an exterior shell dome with a hollow air-space between them.

### 3. Pietra Dura / Parchin Kari Inlay
* Meticulous lapidary technique perfected under Jahangir (Tomb of Itimad-ud-Daulah, Agra) and Shah Jahan (Taj Mahal):
* Semi-precious stones (lapis lazuli, jasper, onyx, carnelian, jade, malachite) cut into intricate floral petals and inlaid into carved grooves of pure white marble so tightly that the joints are invisible to the naked eye.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, First True Arch vs First Double Dome',
        body: `### High-Frequency Traps in Indo-Islamic Architecture

1. **First True Arch Trap:**
   * *Trap:* Believing the first true arch was at Qutb Minar or Humayun's Tomb.
   * *Truth:* The **first true arch** appeared at the **Tomb of Balban** (crude prototype) and was perfected at **Alai Darwaza (1311 CE)** by Alauddin Khalji!

2. **First Double Dome Trap:**
   * *Trap:* Thinking the double dome was invented for the Taj Mahal.
   * *Truth:* Introduced under the **Lodi Dynasty (Sikandar Lodi tomb)** and fully realized in Mughal architecture at **Humayun's Tomb**!

3. **Baby Taj / First Pietra Dura:**
   * *Trap:* Assuming Pietra Dura was first used at the Taj Mahal.
   * *Truth:* Extensively perfected at the **Tomb of Itimad-ud-Daulah in Agra** (built by Empress Nur Jahan for her father, 1622–1628 CE), often called the "Baby Taj".`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-MED-08-1',
        statement: 'Indo-Islamic architecture transitioned from indigenous Trabeate (post-and-beam/corbelled) construction to the Arcuate system characterized by true arches, voussoirs, keystone, true domes, and lime mortar.',
        claimType: 'ARCHITECTURAL_EVOLUTION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-34',
        excerpt: 'Rulers and Buildings: Trabeate vs Arcuate architectural engineering; introduction of true arches and domes.',
      },
      {
        id: 'CLM-MED-08-2',
        statement: 'The first true arch in monumental Sultanate architecture was built at Alauddin Khalji\'s Alai Darwaza (1311 CE), while the double dome was introduced by the Lodis and perfected at Humayun\'s Tomb.',
        claimType: 'MONUMENTAL_MILESTONE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-34',
        excerpt: 'Delhi Sultanate monuments: Alai Darwaza true arch; Lodi double dome; Humayun Tomb Charbagh.',
      },
      {
        id: 'CLM-MED-08-3',
        statement: 'Mughal architectural zenith was achieved under Shah Jahan through symmetrical Charbagh layouts, Makrana white marble, bulbous domes, and Pietra Dura (Parchin Kari) floral inlays.',
        claimType: 'ARTISTIC_PEAK',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-34',
        excerpt: 'Mughal Architecture: Taj Mahal, Charbagh garden symmetry, Pietra Dura inlay technique.',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — Indian Architecture / Indo-Islamic Monuments',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_ARCHITECTURAL_ANALYSIS',
        notes: 'Trabeate vs Arcuate, Pietra Dura, and Charbagh layouts are among UPSC\'s top Art & Culture themes.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — Medieval Indian Architecture & Fort Architecture',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE',
        notes: 'Frequent 5-mark and 10-mark questions on Mughal architecture and Indo-Islamic features in Rajasthan forts.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Medieval Indian Monuments',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on builders: Alai Darwaza (Alauddin), Buland Darwaza (Akbar), Taj Mahal (Shah Jahan).',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Indian Culture & Heritage — Architecture',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'STRUCTURAL_TERMS',
        notes: 'Tested on Pietra Dura, Charbagh, and Double Dome definitions.',
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Static Indian Heritage',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'UNESCO World Heritage Sites (Qutb Minar, Humayun Tomb, Red Fort, Taj Mahal).',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — Culture & Monuments',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on architectural landmarks and locations.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Historical Milestones',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'GENERAL_AWARENESS',
        notes: 'Phase 1 static questions on heritage monuments.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'General Socio-Economic Background',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Cultural landmarks of India.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Architecture: Trabeate = Post-and-lintel (flat beams, pillars, corbelled). Arcuate = True Arch (keystone, voussoirs, lime mortar) + True Dome. Alai Darwaza (1311, Alauddin) = First true arch. Lodi = Double dome. Humayun Tomb = 1st Mughal Charbagh garden tomb & double dome. Itimad-ud-Daulah = 1st extensive Pietra Dura. Taj Mahal = White marble & Pietra Dura peak.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Indo-Islamic Architecture Blueprint: 1) Structural Revolution: Replaced trabeate beam-and-post architecture with arcuate true arches, vaults, and domes bonded with lime mortar. 2) Sultanate Milestones: Qutb Minar (reused material, Mamluk); Alai Darwaza (1st true arch, Khalji); Tughlaqabad (sloping battering walls); Lodi Tombs (1st double domes). 3) Mughal Climax: Humayun\'s Tomb introduced the Persian Charbagh layout; Akbar blended Gujarati/Rajasthani chhatris and red sandstone at Fatehpur Sikri; Shah Jahan perfected white marble symmetry and Pietra Dura at the Taj Mahal.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Indo-Islamic Spatial Architecture: 1) Structural Engineering: True arch load dispersion -> squinches/pendentives converting square rooms to round dome drums. 2) Monumental Optics: Double dome separating interior intimacy from exterior grandeur. 3) Cosmological Geometry: Charbagh 4-river paradise archetype + Pietra Dura floral paradise murals.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'ARCHITECTURE_MCQ',
        stem: 'Which monument is universally regarded as the FIRST authentic example of the "True Arch" (*Mehrab*) constructed with a keystone in monumental Delhi Sultanate architecture?',
        options: ['Quwwat-ul-Islam Mosque screen', 'Qutb Minar', 'Alai Darwaza', 'Tomb of Iltutmish'],
        correctAnswer: 'Alai Darwaza',
        explanation: 'Built by Alauddin Khalji in 1311 CE as the southern entrance gateway to the Qutb complex, the Alai Darwaza is the earliest surviving monumental building in India featuring a scientifically engineered True Arch with voussoirs and a central keystone, alongside a true dome.',
        trapExplanation: 'Earlier arches in Quwwat-ul-Islam or Iltutmish\'s tomb were corbelled (false) arches built by Indian masons imitating arch shapes.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2020,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'First True Arch in Indian monumental architecture (Alai Darwaza).',
      },
      {
        type: 'ARCHITECTURE_MCQ',
        stem: 'The architectural technique known as "Pietra Dura" (Parchin Kari)—inlaying coloured semi-precious stones into white marble to form floral arabesques—was first extensively employed in which Mughal monument?',
        options: ['Humayun\'s Tomb (Delhi)', 'Buland Darwaza (Fatehpur Sikri)', 'Tomb of Itimad-ud-Daulah (Agra)', 'Taj Mahal (Agra)'],
        correctAnswer: 'Tomb of Itimad-ud-Daulah (Agra)',
        explanation: 'The Tomb of Itimad-ud-Daulah in Agra (commissioned by Empress Nur Jahan for her father Mirza Ghiyas Beg between 1622 and 1628 CE) was the first Mughal structure built entirely of white marble and the first to extensively employ the delicate Pietra Dura inlay technique, serving as the prototype for the Taj Mahal.',
        trapExplanation: 'Most candidates immediately guess the Taj Mahal, unaware that the technique was pioneered earlier at Itimad-ud-Daulah (the "Baby Taj").',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'SSC CGL Tier 1',
        pyqStage: 'Tier 1',
        examinerTrapPattern: 'First extensive use of Pietra Dura (Itimad-ud-Daulah vs Taj Mahal).',
      },
    ],
  },

  // =========================================================================
  // TOPIC 9: Foreign Travellers & Medieval Historiography
  // =========================================================================
  {
    id: 'CON-MED-09',
    slug: 'foreign-travellers-and-medieval-historiography-albiruni-ibn-battuta-bernier',
    title: 'Foreign Travellers & Eyewitness Historiography: Al-Biruni (Kitab al-Hind), Ibn Battuta (Rihla), and François Bernier',
    shortDefinition: 'Comparative eyewitness historiography of medieval India: Al-Biruni\'s 11th-century scientific encyclopaedia *Kitab al-Hind* (Sanskrit analysis, varna barriers, astronomical methods), Ibn Battuta\'s 14th-century travelogue *Rihla* (Delhi Sultanate under Muhammad bin Tughlaq, postal networks Uluq and Dawa, urban bazaar dynamism), and François Bernier\'s 17th-century *Travels in the Mogul Empire* (Eurocentric critique of state land ownership, camp cities, and karkhanas).',
    difficulty: 'ADVANCED',
    order: 9,
    topicSlug: 'foreign-travellers-and-medieval-historiography',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Looking at India Through Alien Eyes: The Power of the Outside Witness',
        body: `When historians study medieval India, court chronicles like *Akbarnama* or *Tarikh-i-Firuz Shahi* provide invaluable data, but they suffer from an inherent bias: they were written by salaried royal courtiers whose livelihood depended on flattering their imperial masters.

To discover what daily life was *really* like—how postal couriers sprinted across deserts, how caste barriers functioned on the ground, and whether peasants were prosperous or impoverished—we rely on **foreign travellers**.

Three extraordinary travellers from three different centuries and continents provide an indelible window into medieval India:
1. **Al-Biruni (11th Century, Central Asia):** A rigorous polymath who mastered Sanskrit, studied Hindu scriptures directly, and wrote an objective, mathematical analysis of Indian society.
2. **Ibn Battuta (14th Century, Morocco):** A globe-trotting Islamic jurist who travelled 73,000 miles, served as Chief Qazi of Delhi under Muhammad bin Tughlaq, and chronicled the breathtaking speed of the postal courier system.
3. **François Bernier (17th Century, France):** A French physician and philosopher who lived at the Mughal court of Shah Jahan and Aurangzeb, developing the controversial thesis that the lack of private property in land was the root cause of Asian decline!`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The Master Triad: Al-Biruni vs Ibn Battuta vs François Bernier',
        body: `### The Three Canonical Foreign Travellers Master Comparison Matrix

| Parameter | Al-Biruni (11th Century) | Ibn Battuta (14th Century) | François Bernier (17th Century) |
| :--- | :--- | :--- | :--- |
| **Origin & Nationality** | **Khwarizm (modern Uzbekistan)**; brought to Ghazni by Mahmud of Ghazni. | **Tangier, Morocco**; renowned Islamic legal scholar (*Qazi*). | **France**; physician, philosopher, and political economist. |
| **Chronological Era & Ruler** | **11th Century CE (c. 1017–1030 CE)**; contemporary with Mahmud of Ghazni. | **14th Century CE (1333–1342 in India)**; court of **Muhammad bin Tughlaq**. | **17th Century CE (1656–1668 in India)**; courts of **Shah Jahan and Aurangzeb** (physician to Prince Dara Shikoh). |
| **Master Literary Work** | **Kitab al-Hind** (written in Arabic; also known as *Tarikh al-Hind*). | **Rihla** (The Travels; written in Arabic, recorded by Ibn Juzayy). | **Travels in the Mogul Empire** (written in French as letters to Colbert and King Louis XIV). |
| **Core Methodological Approach** | **Scientific, Philological & Comparative:** Learned Sanskrit, translated Patanjali\'s *Yogasutra*, compared Indian concepts with Greek philosophy (Plato). | **Observational & Anthropological:** Recorded sights, smells, customs, markets, transport systems, and social habits with boundless curiosity. | **Comparative Political Economy:** Constantly contrasted Mughal India with Europe, arguing Europe was superior because of private property rights. |
| **Key Thematic Discoveries** | Identified **3 Barriers to understanding India**: 1) Sanskrit language complexity; 2) Hindu insularity / religious pride; 3) Traumatic shock of Mahmud\'s invasions. Analyzed Varna and *Antyaja* (outcastes). | Fascinated by novelties: **Betel leaf (*Paan*)** and **Coconut** (described as human heads). Documented dynamic urban bazaars (*Tarababad* street of musicians). | Formulated the **"Crown Ownership of Land" thesis**: argued the Emperor owned all land, preventing hereditary capital investment and reducing subjects to beggars. Coined **"Camp Cities"**. |
| **Postal / Transport System** | Documented astronomical routes and trade paths. | Detailed the **Postal System (*Barid*)**: Horse post (**Uluq**) stationed every 4 miles; Foot-runner post (**Dawa**) stationed every $\\frac{1}{3}$ mile (faster than horse post!). | Described imperial Mughal manufacturing workshops (**Karkhanas**). |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Ibn Battuta\'s Postal Speed & Bernier\'s "Crown Ownership" Fallacy',
        body: `### 1. Ibn Battuta\'s Description of the Indian Postal Telemetry
* **Uluq (Horse Post):** Run by royal horses stationed at relays every **4 miles (*Kuroh*)**.
* **Dawa (Foot Post):** Had 3 stations per mile (every $\\frac{1}{3}$ mile / *Dawa*). A courier held a rod with brass bells; hearing the bells, the next courier stood ready to grab the mail and sprint to the next post.
* *Astonishing Speed:* While ordinary travel from Sindh to Delhi took **50 days**, the postal courier delivered intelligence reports in **just 5 days**! Fresh drinking water from the Ganga was transported to the Sultan in Daulatabad via this runner relay.

### 2. Historiographical Deconstruction of Bernier\'s "Oriental Despotism"
* Bernier claimed that because the Mughal Emperor was the sole owner of all land, there was no private property, leading to the ruin of agriculture and the absence of a "middle state" (middle class).
* *Modern Historiographical Truth:* Modern historians (Irfan Habib, Romila Thapar) have proven that **Bernier was factually incorrect**. Peasants in Mughal India held hereditary occupancy rights (*Khudkasht*); the Emperor claimed a share of the *produce* (revenue), NOT total physical ownership of the soil! Bernier\'s thesis was used later by Karl Marx to formulate the concept of the "Asiatic Mode of Production".`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Kitab al-Hind Language & Uluq vs Dawa',
        body: `### High-Frequency Traps in Medieval Travellers

1. **Kitab al-Hind Language Trap:**
   * *Trap:* Believing *Kitab al-Hind* was written in Persian or Sanskrit.
   * *Truth:* It was composed in **Arabic**, in 80 structured chapters covering religion, philosophy, astronomy, customs, and metrology!

2. **Uluq vs Dawa Postal Units:**
   * **Uluq:** The **Horse post**, stationed every 4 miles.
   * **Dawa:** The **Foot-runner post**, stationed every 1/3 of a mile (3 relays per mile).
   * *Trap:* Reversing the definitions of Uluq and Dawa.

3. **Bernier\'s Patron:**
   * Bernier was personal physician to **Prince Dara Shikoh** (Akbar\'s great-grandson, Shah Jahan\'s eldest son) and later attached to the court of Danishmand Khan under Aurangzeb.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-MED-09-1',
        statement: 'Al-Biruni arrived in India in the 11th century with Mahmud of Ghazni, studied Sanskrit directly, and authored the 80-chapter Arabic encyclopaedia Kitab al-Hind detailing Hindu philosophy, caste barriers, and science.',
        claimType: 'HISTORICAL_TRAVELOGUE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-47',
        excerpt: 'Through the Eyes of Travellers: Al-Biruni Kitab al-Hind in Arabic, study of Sanskrit and Indian society.',
      },
      {
        id: 'CLM-MED-09-2',
        statement: 'Ibn Battuta, a 14th-century Moroccan jurist, authored the Rihla, served as Qazi of Delhi under Muhammad bin Tughlaq, and documented the dual postal courier network of Uluq (horse post) and Dawa (foot post).',
        claimType: 'HISTORICAL_TRAVELOGUE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-47',
        excerpt: 'Through the Eyes of Travellers: Ibn Battuta Rihla, Moroccan traveller under Muhammad bin Tughlaq, postal network.',
      },
      {
        id: 'CLM-MED-09-3',
        statement: 'François Bernier, a 17th-century French physician, authored Travels in the Mogul Empire, critiquing Mughal statecraft through his thesis on the absence of private property in land and describing urban camp cities.',
        claimType: 'HISTORICAL_TRAVELOGUE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-47',
        excerpt: 'Through the Eyes of Travellers: Francois Bernier Travels in the Mogul Empire, critique of crown ownership of land.',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — Medieval Indian History / Foreign Travellers & Historiography',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_HISTORIOGRAPHICAL_ANALYSIS',
        notes: 'Al-Biruni, Ibn Battuta, and Bernier are explicitly prescribed in NCERT Themes in Indian History and heavily tested.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — Medieval Indian Society Through Travellers\' Accounts',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE',
        notes: 'Frequent 5-mark question comparing Al-Biruni and Bernier\'s perspectives on Indian society.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Medieval Travellers',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on books: Kitab al-Hind (Al-Biruni), Rihla (Ibn Battuta), and ruling sovereigns.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Indian Culture & Heritage — Eyewitness Accounts',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'HISTORICAL_CONTEXT',
        notes: 'Tested on Uluq/Dawa postal systems and Bernier\'s karkhanas.',
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Static Indian History',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on famous literary works of medieval history.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — History & Culture',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on traveller countries of origin and books.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Historical Milestones',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'GENERAL_AWARENESS',
        notes: 'Phase 1 static history questions.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'General Socio-Economic Background',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Early accounts of commerce, markets, and monetary systems.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Travellers: Al-Biruni (11th c, Uzbekistan/Ghazni, Kitab al-Hind in Arabic, learned Sanskrit, 3 barriers). Ibn Battuta (14th c, Morocco, Rihla in Arabic, Qazi under Md bin Tughlaq, paan/coconut, Uluq horse post & Dawa foot post). François Bernier (17th c, France, physician to Dara Shikoh, Travels in Mogul Empire, critique of Crown land ownership, camp cities).',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Medieval Foreign Travellers Blueprint: 1) Al-Biruni (11th c): Polymath with Mahmud of Ghazni; wrote Kitab al-Hind in Arabic; identified Sanskrit complexity and Brahminical insularity as barriers; studied varna. 2) Ibn Battuta (14th c): Moroccan jurist who served Muhammad bin Tughlaq as Qazi; authored Rihla; documented bustling bazaars and the rapid dual postal courier system (Uluq horse post every 4 miles, Dawa foot post every 1/3 mile). 3) François Bernier (17th c): French physician under Shah Jahan/Aurangzeb; authored Travels in the Mogul Empire; argued lack of private land ownership caused Asian economic stagnation.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Historiographical Lens of Foreign Observers: 1) Epistemic Framework: Al-Biruni (Scientific/Philological) vs Ibn Battuta (Experiential/Socio-geographic) vs Bernier (Eurocentric Political Economy). 2) Postal Communications: Dawa relay reducing 50-day transit to 5-day intelligence delivery. 3) Socio-Agrarian Dynamics: Peasant tenancy vs European misconceptions of despotic crown ownership.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'TRAVELLER_MCQ',
        stem: 'In his travelogue "Rihla", the fourteenth-century Moroccan traveller Ibn Battuta marveled at the remarkable speed of the Indian postal communication network. What did the term "Dawa" specifically designate in this system?',
        options: [
          'The horse postal courier relay stationed at intervals of every four miles',
          'The foot-runner postal relay stationed at intervals of every one-third of a mile',
          'The carrier pigeon network operated between frontier mountain forts',
          'The royal camel dispatch service across the Thar desert'
        ],
        correctAnswer: 'The foot-runner postal relay stationed at intervals of every one-third of a mile',
        explanation: 'In the postal system of the Delhi Sultanate documented by Ibn Battuta in the Rihla, the foot-post was called the "Dawa", which had three stations per mile (stationed every one-third of a mile). The horse-post was called the "Uluq", stationed at intervals of four miles. The Dawa was frequently quicker than the horse post.',
        trapExplanation: 'Option A describes the Uluq (horse post), which is the most frequent trap.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Exact distinction between Uluq (horse post) and Dawa (foot post).',
      },
      {
        type: 'TRAVELLER_MCQ',
        stem: 'The famous encyclopaedic work "Kitab al-Hind", which provides an objective eleventh-century analysis of Indian religion, caste structure, philosophy, and sciences, was written by Al-Biruni in which language?',
        options: ['Persian', 'Arabic', 'Sanskrit', 'Turkish'],
        correctAnswer: 'Arabic',
        explanation: 'Although Al-Biruni mastered Sanskrit to directly read Indian philosophical treatises and spent years in Ghazni and the Punjab, he composed his monumental 80-chapter work "Kitab al-Hind" in the Arabic language.',
        trapExplanation: 'Candidates almost universally guess Persian because medieval court chronicles were usually written in Persian.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2020,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Original language of Kitab al-Hind (Arabic, NOT Persian).',
      },
    ],
  },
  // =========================================================================
  // TOPIC 4 (CONCEPT 2): The Bahmani Kingdom & The Five Deccan Sultanates
  // =========================================================================
  {
    id: 'CON-MED-10',
    slug: 'the-bahmani-kingdom-and-the-five-deccan-sultanates',
    title: 'The Bahmani Kingdom & The Five Deccan Sultanates: Mahmud Gawan, Deccani Architecture & The Talikota Coalition',
    shortDefinition: 'The Islamic polities of the Deccan plateau (1347–1687 CE): Foundation by Alauddin Hasan Bahman Shah (Hasan Gangu), Mahmud Gawan\'s administrative centralisation, tarafs (provinces), and the three-storeyed Bidar Madrasa, disintegration into the five Deccan Sultanates (Adil Shahis of Bijapur, Nizam Shahis of Ahmadnagar, Qutb Shahis of Golconda, Barid Shahis of Bidar, Imad Shahis of Berar), the geopolitical struggle over the Krishna-Tungabhadra (Raichur) Doab culminating in the Battle of Talikota (1565), and cultural-architectural landmarks (Gol Gumbaz whispering gallery, Charminar, Ibrahim Rauza, Deccani miniature painting).',
    difficulty: 'ADVANCED',
    order: 10,
    topicSlug: 'vijayanagara-empire-and-deccan-sultanates',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'A Kingdom Born in Rebellion: The Rise of the Islamic Deccan',
        body: `In the middle of the 14th century, as the tyrannical centralisation of Muhammad bin Tughlaq provoked rebellions across the Indian subcontinent, two rival imperial civilizations rose simultaneously south of the Vindhyas:
* On the south bank of the Tungabhadra rose the Hindu empire of **Vijayanagara (1336)**.
* On the north bank rose the sovereign Muslim state of the **Bahmani Kingdom (1347)**.

Founded by an ambitious Afghan officer, **Alauddin Hasan Bahman Shah (popularly known as Hasan Gangu)**, the Bahmani Sultanate severed the Deccan from Delhi\'s control for two and a half centuries. 

Operating at the crossroads of maritime Arabian Sea trade and the rich diamond mines of Golconda, the Bahmanis forged a vibrant Indo-Persian culture. However, the state was constantly torn by a bitter internal ethnic feud between the **Deccanis** (indigenous local Muslims) and the **Afaqis / Gharibs** (foreign Persian, Turkish, and Arab migrants). This factional rivalry ultimately led to the tragic execution of its greatest statesman, **Mahmud Gawan**, fracturing the kingdom into five independent Deccan Sultanates!`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'Mahmud Gawan\'s Statecraft & The Five Deccan Sultanates Master Matrix',
        body: `### 1. The Reforms of Khwaja Mahmud Gawan (Prime Minister, 1463–1481 CE)
An Iranian merchant-turned-statesman who served under Muhammad Shah III, Mahmud Gawan modernized Bahmani governance:
* **Administrative Centralization:** Divided the existing 4 unwieldy provinces (*tarafs*) into **8 smaller tarafs**, curbing the independent power of corrupt provincial governors (*Tarafdars*).
* **Direct Royal Fiscal Control:** In every province, placed a tract of land directly under royal revenue collection (**Khas-i-Sultani**), ensuring the crown had funds independent of provincial lords.
* **Military Inspection:** Obligated Tarafdars to maintain 500 horses for every ₹1 lakh of revenue; instituted strict salary deductions for under-strength contingents.
* **Cultural Legacy:** Built the majestic three-storeyed **Mahmud Gawan Madrasa at Bidar (1472)** with a library of 3,000 Persian manuscripts and blue glazed ceramic tiles from Iran.
* **Tragic Demise:** Jealous Deccani nobles forged a treasonous letter to the King of Orissa; the intoxicated Sultan ordered Gawan\'s execution in 1481 CE, fatally unravelling the empire.

---

### 2. The Disintegration into the Five Deccan Sultanates (c. 1490–1527 CE)

| Sultanate & Dynasty | Founder & Capital | Defining Architectural Masterpiece | Ultimate Historical Fate |
| :--- | :--- | :--- | :--- |
| **Bijapur (Adil Shahi)** | **Yusuf Adil Shah** (1489 CE); Capital: Bijapur. | **Gol Gumbaz** (Mausoleum of Muhammad Adil Shah; world's second-largest acoustic dome with acoustic "Whispering Gallery"); **Ibrahim Rauza**. | Major maritime Deccan power; patronized Dakhni poetry; annexed by Aurangzeb in **1686 CE**. |
| **Golconda (Qutb Shahi)** | **Quli Qutb Shah** (1512 CE); Capital: Golconda / Hyderabad. | **Charminar (1591 CE)** built by Muhammad Quli Qutb Shah to commemorate plague eradication; massive Golconda diamond fortress. | World center of diamond trade (Koh-i-Noor, Hope Diamond); annexed by Aurangzeb in **1687 CE**. |
| **Ahmadnagar (Nizam Shahi)** | **Malik Ahmad** (1490 CE); Capital: Ahmadnagar / Daulatabad. | Daulatabad Fort improvements; military innovations of Prime Minister **Malik Ambar** (guerilla warfare). | Heroic defense by **Chand Bibi**; annexed by Mughal Emperor Shah Jahan in **1636 CE**. |
| **Bidar (Barid Shahi)** | **Qasim Barid** (1492 CE); Capital: Bidar. | Bidar Fort, Rangin Mahal (mother-of-pearl tile inlays); Bidriware metal craft. | Annexed by Bijapur in **1619 CE**. |
| **Berar (Imad Shahi)** | **Fatullah Imad-ul-Mulk** (1490 CE); Capital: Ellichpur / Gawilgarh. | Gawilgarh hill fort fortifications. | **Annexed by Ahmadnagar in 1574 CE**; did NOT join the 1565 Talikota coalition! |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'The Battle of Talikota (1565) & The Acoustic Architecture of Gol Gumbaz',
        body: `### 1. Geopolitical Collision: The Battle of Talikota (Rakshasi-Tangadi, January 23, 1565)
* **The Root Cause:** Perpetual war between Vijayanagara and the Deccan Sultanates over the fertile agricultural delta between the Krishna and Tungabhadra rivers (**The Raichur Doab**).
* **The Diplomatic Catalyst:** Regent **Aliya Rama Raya** of Vijayanagara routinely pitted one Deccan Sultan against another. Disgusted by his arrogance, four sultanates formed a grand marital and military confederacy: **Bijapur, Ahmadnagar, Golconda, and Bidar**.
* *Crucial Exception:* **Berar was excluded** due to its bitter territorial rivalry with Ahmadnagar.
* **The Battle:** Heavy Deccan artillery and the sudden betrayal of two Muslim mercenary divisions under Rama Raya turned the tide. Rama Raya was captured and beheaded on the battlefield by Hussain Nizam Shah of Ahmadnagar, resulting in the sack and permanent ruin of Hampi.

### 2. The Structural Engineering of the Gol Gumbaz
* Constructed in 1656 CE by Yaqut of Dabul for Muhammad Adil Shah of Bijapur.
* Features a massive hemispherical dome measuring **44 meters in external diameter**, supported without a single central pillar through an interlocking system of eight intersecting stone arches (**squinch system**).
* Contains the famous circular **"Whispering Gallery"** around the inner perimeter, where the faintest acoustic whisper is echoed **11 times** and can be heard clearly across the entire 38-meter chamber!`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, The 5 Sultanates Matrix & Berar\'s Exclusion',
        body: `### High-Frequency Traps in Deccan Sultanate History

1. **The 5 Sultanates vs Founders Pairing (UPSC & State PSC Classic!):**
   * **Bijapur:** Adil Shahi (Yusuf Adil Shah).
   * **Golconda:** Qutb Shahi (Quli Qutb Shah).
   * **Ahmadnagar:** Nizam Shahi (Malik Ahmad).
   * **Bidar:** Barid Shahi (Qasim Barid).
   * **Berar:** Imad Shahi (Fatullah Imad-ul-Mulk).
   * *Trap:* Swapping Barid Shahi with Imad Shahi.

2. **The Battle of Talikota Coalition Trap:**
   * *Trap:* Assuming all five Deccan Sultanates fought against Vijayanagara.
   * *Truth:* **Berar was ABSENT**! The alliance comprised only four: Bijapur, Ahmadnagar, Golconda, and Bidar.

3. **Charminar Builder & Purpose:**
   * Built in **1591 CE** by **Muhammad Quli Qutb Shah** at Hyderabad to commemorate the eradication of a devastating plague epidemic.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-MED-10-1',
        statement: 'The Bahmani Sultanate was founded in 1347 CE by Alauddin Hasan Bahman Shah (Hasan Gangu) breaking away from the Delhi Sultanate, establishing capitals first at Gulbarga and later at Bidar.',
        claimType: 'POLITICAL_FOUNDATION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-14',
        excerpt: 'The Bahmani Kingdom: Founded 1347 by Hasan Gangu; Gulbarga and Bidar capitals; administrative tarafs.',
      },
      {
        id: 'CLM-MED-10-2',
        statement: 'Prime Minister Mahmud Gawan (1463–1481 CE) centralized Bahmani administration by subdividing four provinces into eight tarafs, instituting direct royal lands (Khas-i-Sultani), and constructing the Mahmud Gawan Madrasa at Bidar.',
        claimType: 'ADMINISTRATIVE_REFORM',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-14',
        excerpt: 'Mahmud Gawan: Prime minister under Muhammad Shah III, administrative reforms, 8 tarafs, Bidar madrasa 1472.',
      },
      {
        id: 'CLM-MED-10-3',
        statement: 'The Bahmani state disintegrated into five Deccan Sultanates (Adil Shahi of Bijapur, Nizam Shahi of Ahmadnagar, Qutb Shahi of Golconda, Barid Shahi of Bidar, and Imad Shahi of Berar), four of which formed the 1565 Talikota alliance excluding Berar.',
        claimType: 'DYNASTIC_SUCCESSION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'History_Culture_Master.md#note-14',
        excerpt: 'Disintegration into 5 Deccan Sultanates: Bijapur, Golconda, Ahmadnagar, Bidar, Berar; Talikota 1565.',
      },
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — Medieval Indian History / Deccan Sultanates & Architecture',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_HISTORICAL_ANALYSIS',
        notes: 'Mahmud Gawan reforms, Gol Gumbaz squinch dome, and the 5 Sultanate founder matrix frequently tested.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — Medieval Indian History & Deccan Architecture',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'COMPREHENSIVE_DESCRIPTIVE',
        notes: 'Descriptive questions on Battle of Talikota and Gol Gumbaz architecture.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Medieval Indian History',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'FACTUAL_RETRIEVAL',
        notes: 'Tested on Gol Gumbaz location (Bijapur), Charminar builder (Quli Qutb Shah), and Hasan Gangu.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'Indian History & Culture — Medieval Deccan',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'ADMINISTRATIVE_TERMS',
        notes: 'Tested on Tarafdar provincial system and Talikota alliance.',
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Static Medieval Heritage',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on monuments like Charminar and Gol Gumbaz.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — Culture & Monuments',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FACTUAL_HIGHLIGHTS',
        notes: 'Tested on Deccan Sultanates and architectural landmarks.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Historical Milestones',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'GENERAL_AWARENESS',
        notes: 'Phase 1 questions on medieval regional kingdoms.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'General Socio-Economic Background',
        relevance: 'SUPPORTING',
        priority: 'LOW',
        requiredDepth: 'CONCEPTUAL_OVERVIEW',
        notes: 'Economic and cultural background of medieval Deccan.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Bahmanis: Founded 1347 by Hasan Gangu (Alauddin Bahman Shah); capitals Gulbarga then Bidar. Mahmud Gawan (PM): 8 tarafs, Bidar Madrasa (1472). 5 Sultanates: Bijapur (Adil Shahi - Gol Gumbaz), Golconda (Qutb Shahi - Charminar 1591), Ahmadnagar (Nizam Shahi), Bidar (Barid Shahi), Berar (Imad Shahi). Battle of Talikota (1565): 4 Sultanates crushed Vijayanagara (Berar absent!).',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Bahmani & Deccan Sultanates Blueprint: 1) Origin: 1347 CE revolt against Tughlaq by Hasan Gangu. 2) Golden Age: Mahmud Gawan divided provinces into 8 tarafs, strengthened royal treasury, built Bidar Madrasa; executed 1481 due to Deccani-Afaqi factionalism. 3) Disintegration: Splintered into 5 Sultanates: Adil Shahi (Bijapur), Qutb Shahi (Golconda), Nizam Shahi (Ahmadnagar), Barid Shahi (Bidar), Imad Shahi (Berar). 4) Talikota 1565: Coalition of 4 (excluding Berar) defeated Vijayanagara over the Raichur Doab. 5) Architecture: Gol Gumbaz whispering gallery dome and Charminar.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Deccan Polities Spatial Architecture: 1) Raichur Doab Geopolitical Axis: Fertile inter-fluvial prize driving centuries of war between Krishna and Tungabhadra rivers. 2) Deccani-Afaqi Dualism: Destructive internal ethnic clash between indigenous Deccanis and foreign Persian/Arab migrants. 3) Structural Engineering: Evolution of the squinch arch system culminating in the colossal Gol Gumbaz dome without central pillar support.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'DECCAN_SULTANATE_MCQ',
        stem: 'Match List-I (Deccan Sultanate) with List-II (Ruling Dynasty) and select the correct option using the codes given below:\nA. Bijapur — 1. Nizam Shahi\nB. Ahmadnagar — 2. Adil Shahi\nC. Golconda — 3. Imad Shahi\nD. Berar — 4. Qutb Shahi',
        options: [
          'A-2, B-1, C-4, D-3',
          'A-1, B-2, C-3, D-4',
          'A-2, B-4, C-1, D-3',
          'A-4, B-1, C-2, D-3'
        ],
        correctAnswer: 'A-2, B-1, C-4, D-3',
        explanation: 'The five successor states of the Bahmani kingdom and their founding dynasties are: Bijapur — Adil Shahi; Ahmadnagar — Nizam Shahi; Golconda — Qutb Shahi; Berar — Imad Shahi; and Bidar — Barid Shahi.',
        trapExplanation: 'Swapping Adil Shahi with Nizam Shahi or confusing Imad Shahi with Barid Shahi are classic examiner traps.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Deccan Sultanate dynasties matching matrix.',
      },
      {
        type: 'TALIKOTA_COALITION_MCQ',
        stem: 'Which of the following Deccan Sultanates did NOT participate in the grand alliance that defeated the Vijayanagara Empire at the Battle of Talikota (Rakshasi-Tangadi) in 1565?',
        options: ['Bijapur', 'Ahmadnagar', 'Golconda', 'Berar'],
        correctAnswer: 'Berar',
        explanation: 'The Deccan Sultanate alliance that destroyed Vijayanagara in the Battle of Talikota (1565) comprised four sultanates: Bijapur, Ahmadnagar, Golconda, and Bidar. Due to ongoing regional feuds with Ahmadnagar, the Sultanate of Berar did NOT join the alliance.',
        trapExplanation: 'Most students assume all five successor states of the Bahmani kingdom participated in the Battle of Talikota. Berar\'s absence is a famous examiner trap.',
        difficulty: 'ADVANCED',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'UPSC CSE Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'The excluded member of the 1565 Deccan coalition (Berar).',
      },
    ],
  },
];

export async function seedMedievalMasterCanonicalKnowledge() {
  console.log('Seeding Modernized Medieval Indian History Master Knowledge (10 Concepts across 8 Topics)...');

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
    where: { slug: 'medieval-indian-history' },
    update: {
      domainId: domain.id,
    },
    create: {
      name: 'Medieval Indian History & Islamic Polities',
      slug: 'medieval-indian-history',
      domainId: domain.id,
      scopeStatement: 'Comprehensive coverage of early medieval regional state formations, Chola maritime empire, Delhi Sultanate, Vijayanagara Empire, Bhakti/Sufi devotional synthesis, Mughal imperial institutions, and Indo-Islamic architecture (750–1707 CE).',
      description: 'Canonical master knowledge base of Medieval Indian History covering dynastic evolution, administrative structures, land revenue systems, religious movements, and eyewitness historiography.',
      order: 4,
      status: 'ACTIVE',
    },
  });

  // 2. Ensure Topics exist
  const topicDefs = [
    {
      slug: 'early-medieval-polities-and-cholas',
      title: 'Early Medieval Polities, Tripartite Struggle & Imperial Cholas',
      description: 'Tripartite struggle for Kannauj (Pratiharas, Palas, Rashtrakutas) and Chola village self-governance (Uttaramerur inscriptions).',
      order: 1,
    },
    {
      slug: 'delhi-sultanate-governance-and-institutions',
      title: 'The Delhi Sultanate: Dynastic Succession, Balban & Agrarian Reforms',
      description: 'Dynastic succession (1206–1526 CE), Balban\'s divine kingship, Iqta system, Alauddin Khalji\'s market reforms, and Muhammad bin Tughlaq\'s experiments.',
      order: 2,
    },
    {
      slug: 'vijayanagara-empire-and-deccan-sultanates',
      title: 'The Vijayanagara Empire & Deccan Sultanates',
      description: 'Four dynasties, Krishnadevaraya\'s golden age, Amaranayaka feudal military tenure, Hampi urbanism, and the Battle of Talikota (1565).',
      order: 3,
    },
    {
      slug: 'bhakti-and-sufi-movements',
      title: 'Devotional Synthesis: Bhakti and Sufi Movements',
      description: 'Alvars, Nayanars, Basavanna\'s Virashaiva movement, Saguna vs Nirguna Bhakti, and the major Sufi silsilas (Chishti, Suhrawardi).',
      order: 4,
    },
    {
      slug: 'mughal-empire-institutions-mansab-zabt',
      title: 'The Mughal Empire: Mansabdari System, Jagirdari & Todar Mal\'s Zabt',
      description: 'Sher Shah Suri precursors, Akbar\'s Mansabdari decimal hierarchy, Zat/Sawar ranks, and Raja Todar Mal\'s Ain-i-Dahsala land revenue settlement.',
      order: 5,
    },
    {
      slug: 'mughal-statecraft-rajput-policy-sulhikul',
      title: 'Mughal Imperial Statecraft: Rajput Alliances & Religious Policy',
      description: 'Akbar\'s Rajput alliances, Watan Jagirs, Ibadat Khana debates, 1579 Mahzar, Sulh-i Kul, and later Mughal religious policies.',
      order: 6,
    },
    {
      slug: 'indo-islamic-architecture-and-urbanism',
      title: 'Indo-Islamic Architectural Evolution & Imperial Urbanism',
      description: 'Trabeate to Arcuate engineering transition, True Arches (Alai Darwaza), Double Domes, Charbagh layouts, and Pietra Dura inlays.',
      order: 7,
    },
    {
      slug: 'foreign-travellers-and-medieval-historiography',
      title: 'Foreign Travellers & Eyewitness Historiography',
      description: 'Al-Biruni (Kitab al-Hind), Ibn Battuta (Rihla, Uluq/Dawa postal systems), and François Bernier (Travels in the Mogul Empire).',
      order: 8,
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
  const sourceHist = await db.source.upsert({
    where: { id: 'SRC-MEDIEVAL-HIST-2026' },
    update: {},
    create: {
      id: 'SRC-MEDIEVAL-HIST-2026',
      title: 'History & Culture Master Corpus — Medieval India & Regional Polities (2026)',
      sourceType: 'COMPREHENSIVE_HISTORICAL_SYNTHESIS',
      authorityTier: 'PEER_REVIEWED_MATHEMATICAL_REFERENCE',
      description: 'Canonical historical and historiographical synthesis covering medieval dynasties, institutional mechanisms, agrarian structures, and cultural movements.',
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

  for (const c of MEDIEVAL_HISTORY_CONCEPTS) {
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
          sourceId: sourceHist.id,
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

  console.log(`Successfully seeded ${MEDIEVAL_HISTORY_CONCEPTS.length} Medieval History canonical concepts.`);
}
