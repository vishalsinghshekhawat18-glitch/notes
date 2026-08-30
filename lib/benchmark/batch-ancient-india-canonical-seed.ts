import { db } from '../db/client';

export interface CanonicalConceptDef {
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

export const ANCIENT_INDIA_CANONICAL_CONCEPTS: CanonicalConceptDef[] = [
  // =========================================================================
  // TOPIC 63: Prehistory & Early Human Cultures
  // =========================================================================
  {
    id: 'CON-HIST-01',
    slug: 'prehistoric-india-human-evolution-stone-age-and-food-production',
    title: 'Prehistoric India: Human Evolution, Stone Age Cultures & Food Production',
    shortDefinition: 'Evolution of prehistoric human settlements across the Paleolithic, Mesolithic, Neolithic, and Chalcolithic phases in the Indian subcontinent.',
    difficulty: 'INTERMEDIATE',
    order: 1,
    topicSlug: 'prehistory-and-early-human-cultures',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Spectrum of Indian Prehistory: From Foraging to Sedentism',
        body: `Prehistory refers to the vast chronological epoch of human history before the invention of writing systems. In the Indian subcontinent, the reconstruction of prehistoric cultures relies exclusively on material archaeological artifacts: lithic (stone) tools, fossil remains, faunal bones, rock art engravings, and ceramic sequences.

### Chronological Classification of the Stone Age
1. **Paleolithic Age (Old Stone Age — c. 2 Million BP to 10,000 BCE):** Characterized by nomadic hunting and food gathering using unpolished, heavy quartzite tools (*Homo erectus* and archaic *Homo sapiens*). Divided into:
   - **Lower Paleolithic:** Handaxes, cleavers, and choppers (Acheulian culture; e.g. Soan Valley, Attirampakkam in Tamil Nadu, Bhimbetka in MP).
   - **Middle Paleolithic:** Flake tool industries (*scrapers, points, borers*) made on fine-grained chert and jasper (Nevasan culture in Maharashtra).
   - **Upper Paleolithic:** Blade and burin tool traditions; emergence of modern *Homo sapiens*; bone tools and initial rock shelter engravings.
2. **Mesolithic Age (Late Stone Age — c. 10,000 BCE to 6,000 BCE):** Transitional post-Pleistocene climate warming epoch. Defined by **Microliths** (tiny, delicate geometric stone tools 1–5 cm mounted on bone/wood handles) and the earliest evidence of **animal domestication** (cattle, sheep, goats).
3. **Neolithic Age (New Stone Age — c. 7,000 BCE to 1,000 BCE):** The **Neolithic Revolution** (V. Gordon Childe) marked the shift from hunting-gathering to **food production (agriculture)**, permanent sedentary villages, polished stone celts, animal husbandry, and pottery manufacturing.
4. **Chalcolithic Age (Copper-Stone Age — c. 2,000 BCE to 700 BCE):** First use of metals alongside stone tools; rural farming communities utilizing painted black-and-red pottery (*Ahar-Banas, Malwa, and Jorwe cultures*).`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Landmark Prehistoric Archaeological Sites & Primary Evidence',
        body: `The Indian subcontinent possesses distinctive archaeological landmarks that establish early human tool traditions and domestication trajectories:

| Historical Phase | Landmark Site & Location | Primary Archaeological Findings | Cultural & Historical Significance |
| :--- | :--- | :--- | :--- |
| **Lower Paleolithic** | **Hathnora** (Narmada Valley, Madhya Pradesh) | Only discovered hominin cranial fossil in India (*Narmada Man* / *Homo erectus* found by Arun Sonakia in 1982) | Proves presence of Middle Pleistocene hominins in the central Indian river basin (~250,000–500,000 BP). |
| **Lower/Middle Paleo** | **Attirampakkam** (Kortallaiyar Basin, Tamil Nadu) | Early Acheulian handaxes dated by luminescence/palaeomagnetism to ~1.5 Million Years Ago | Pushes back early Acheulian tool technology in South Asia to match East African chronologies. |
| **Mesolithic** | **Bhimbetka** (Raisen, Madhya Pradesh — UNESCO 2003) | Over 500 painted rock shelters depicting communal hunting, stick-figure dances, pregnant animals, green/white/red pigments | World's richest continuous repository of prehistoric rock art spanning Upper Paleo to Medieval times. |
| **Mesolithic** | **Bagor** (Kothari River, Bhilwara, Rajasthan) & **Adamgarh** (MP) | Dense microlithic toolkits, charred animal bones of domesticated sheep/goats, stone-paved living floors | Earliest verified radio-carbon dates for animal domestication in India (~5000–4000 BCE). |
| **Neolithic** | **Mehrgarh** (Bolan Pass, Balochistan) | Mud-brick multi-room houses, granaries, cultivation of 6-row barley and einkorn/emmer wheat, sheep/goat domestication (~7000 BCE) | Earliest continuous agricultural sequence in South Asia; ancestral foundation of Indus Valley Civilisation. |
| **Neolithic** | **Burzahom** & **Gufkral** (Kashmir Valley) | Subterranean oval pit dwellings (*to survive cold winters*), bone tools (*harpoons/needles*), distinctive burial with domestic dogs | Unique Himalayan Neolithic culture without painted pottery in early levels. |
| **Neolithic** | **Koldihwa** & **Mahagara** (Belan Valley, Uttar Pradesh) | Cord-impressed pottery, circular mud huts, rice husk inclusions in pottery (*dated to ~6000–5000 BCE*) | Traditional evidence of early indigenous rice cultivation in the Gangetic basin (reinforced by Lahuradewa findings). |
| **Neolithic** | **Utnur**, **Kupgal**, **Piklihal** (Karnataka/Andhra) | Ash mounds (*large mounds formed by burnt accumulated cattle dung*) | Proves pastoral cattle-penning economy of South Indian Neolithic communities. |
| **Chalcolithic** | **Ahar** (*Tambavati*) & **Gilund** (Banas Basin, Mewar, Rajasthan) | Smelting copper axes, zero microliths, black-and-red pottery painted with white linear designs | Indigenous metallurgical center supplying copper artifacts across north-western India. |
| **Chalcolithic** | **Inamgaon** & **Jorwe** (Maharashtra) | Extended dead burials with feet chopped off (*to prevent ghosts from walking*), large granaries, mud houses with clay ovens | Late Chalcolithic chiefdom society exhibiting social differentiation and craft specialization. |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'HISTORICAL_ANALYSIS',
        title: 'The Catalysts of the Neolithic Transition: Ecological & Material Drivers',
        body: `The transformation from Pleistocene foraging to Holocene farming was not a sudden discovery, but a protracted ecological adaptation:

1. **Holocene Climatic Optimum:** Post-10,000 BCE warming created humid, temperate conditions that expanded wild grasslands (ancestral wild barley, wheat, and rice strains) in river valleys and piedmont zones.
2. **Sedentism Preceding Agriculture:** Hunter-gatherer bands began settling near perennial water bodies (oxbow lakes, piedmont springs) to exploit abundant wild grasses and aquatic resources, creating semi-permanent base camps.
3. **The Ceramic & Polished Tool Co-evolution:** Ground and polished celts allowed efficient clearing of vegetation and wood-working, while baked clay pottery enabled the storage of surplus grain seeds and the boiling/cooking of complex cereals.
4. **Transition to Proto-Urbanism:** Surplus agricultural output created demographic expansion, occupational specialization (potters, bead-makers, metallurgists), and exchange networks that directly laid the material groundwork for Early Harappan regional centers.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Target Exam Focus, Traps & Distinctions',
        body: `### Core Exam Traps & Distinctions
- **Pit Dwellings vs Ash Mounds:** Subterranean pit dwellings with domestic dog burials are exclusive to the **Kashmiri Neolithic** (*Burzahom*); Ash Mounds are exclusive to the **South Indian Neolithic** (*Utnur, Piklihal*).
- **Animal Domestication vs Plant Cultivation:** Earliest animal domestication appears in the **Mesolithic** (*Bagor, Rajasthan & Adamgarh, MP*); systematic plant cultivation begins in the **Neolithic** (*Mehrgarh, Balochistan*).
- **Stone Tool Progression:**
  - Lower Paleo: *Handaxe, Cleaver, Chopper* (Quartzite)
  - Middle Paleo: *Flake tools, Scrapers, Borers* (Chert/Jasper)
  - Upper Paleo: *Blades, Burins*
  - Mesolithic: *Microliths* (Geometric triangles, trapezes 1–5 cm)
  - Neolithic: *Polished celts, ground stone axes*`,
        order: 4,
        visibility: 'PUBLIC',
      },
      {
        type: 'RECALL_DRILL',
        title: 'Active Recall Check: Prehistoric India',
        body: `**Question:** Which of the following prehistoric sites is correctly matched with its unique archaeological feature?
1. *Hathnora* — Only hominin fossil found in India (*Homo erectus / Narmada Man*)
2. *Bagor* — Earliest radiocarbon-dated animal domestication in Rajasthan
3. *Burzahom* — Ash mounds produced by burnt cattle-dung accumulations
4. *Ahar (Tambavati)* — Chalcolithic copper smelting center in Mewar

*Options:*
(A) 1 and 2 only  
(B) 1, 2, and 4 only  
(C) 2, 3, and 4 only  
(D) 1, 2, 3, and 4  

*Correct Answer:* **(B) 1, 2, and 4 only**  
*Explanation:* Statement 3 is incorrect because **Burzahom** (Kashmir) is famous for *subterranean pit dwellings and dog burials*, whereas **Ash mounds** are found in *South Indian Neolithic sites* (Utnur, Kupgal, Piklihal, Brahmagiri).`,
        order: 5,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-01-01',
        statement: 'The Narmada hominin fossil discovered at Hathnora in 1982 represents the only Middle Pleistocene hominin fossil cranial evidence found in the Indian subcontinent.',
        claimType: 'ARCHAEOLOGICAL_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'ASI Excavation Reports & NCERT Ancient India Class 11',
        excerpt: 'The discovery of a fossilized hominid skull cap at Hathnora on the northern bank of the Narmada River by Arun Sonakia provided the first direct skeletal evidence of Middle Pleistocene hominins in South Asia.',
      },
      {
        id: 'CLM-HIST-01-02',
        statement: 'The Neolithic site of Mehrgarh in Balochistan demonstrates an uninterrupted transition from pre-pottery aceramic farming to settled agropastoral village life between c. 7000 and 2600 BCE.',
        claimType: 'ARCHAEOLOGICAL_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Jarrige & Meadow Excavation Reports on Mehrgarh',
        excerpt: 'Mehrgarh excavations revealed evidence of multi-room mud-brick houses, 6-row barley cultivation, sheep and goat domestication in aceramic Neolithic Period I dating back to c. 7000 BCE.',
      },
      {
        id: 'CLM-HIST-01-03',
        statement: 'Microlithic industries accompanied by animal domestication at Bagor and Adamgarh establish the Mesolithic transition between c. 5000 and 4000 BCE.',
        claimType: 'ARCHAEOLOGICAL_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'V.N. Misra Excavations at Bagor, Rajasthan',
        excerpt: 'Excavations at Bagor on the Kothari River yielded extensive microlithic toolkits and faunal bones confirming sheep and goat domestication during the Indian Mesolithic.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Indian Heritage and Culture, History of Ancient India',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'ANALYTICAL_AND_SITE_SPECIFIC',
        notes: 'Prehistoric stone tool typologies, human evolution markers, and the ecological drivers of the Neolithic revolution.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims & Mains Paper I (Unit I): Ancient Civilizations and Archaeological Sites of Rajasthan',
        relevance: 'CRITICAL',
        priority: 'HIGH',
        requiredDepth: 'SITE_LEVEL_DETAIL',
        notes: 'Covers Rajasthan prehistoric anchors: Bagor (Bhilwara), Ahar-Gilund (Mewar), Tilwara (Barmer), and Ganeshwar.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Paleolithic (Quartzite, Hathnora fossil) → Mesolithic (Microliths, Bagor domestication, Bhimbetka art) → Neolithic (Mehrgarh wheat/barley 7000 BCE, Burzahom pit dwellings, South India ash mounds) → Chalcolithic (Ahar copper smelting, Jorwe chiefdoms).',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'EXAM_TRAP',
        content: 'Do not confuse Burzahom (Kashmir pit dwellings + dog burials) with South Indian Ash Mounds (Utnur/Piklihal cattle dung mounds).',
        priority: 'HIGH',
        order: 2,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which prehistoric culture in Rajasthan is characterized by copper smelting and absence of microliths, earning it the ancient name "Tambavati"?',
        options: ['Ganeshwar Culture', 'Ahar-Banas Culture', 'Bagor Culture', 'Kalibangan Culture'],
        correctAnswer: 'Ahar-Banas Culture',
        explanation: 'Ahar (located near Udaipur on the Banas basin) was historically named Tambavati (city of copper) due to its specialized copper-smelting furnaces and absence of stone microliths.',
        trapExplanation: 'Ganeshwar is known as the "Mother of Copper Age cultures" but the specific settlement historically named Tambavati with distinct black-and-red ware is Ahar.',
        difficulty: 'MEDIUM',
      },
    ],
  },

  // =========================================================================
  // TOPIC 64: Harappan Civilisation & Bronze Age Urbanism
  // =========================================================================
  {
    id: 'CON-HIST-02',
    slug: 'harappan-civilisation-chronology-geography-and-burnt-brick-urban-planning',
    title: 'Harappan Civilisation: Chronology, Geography & Burnt-Brick Urban Planning',
    shortDefinition: 'The tripartite chronology, geographical boundaries, and sophisticated burnt-brick civic urban planning of the Mature Indus Valley Civilisation.',
    difficulty: 'INTERMEDIATE',
    order: 2,
    topicSlug: 'indus-valley-civilisation',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The First Urbanization of South Asia: The Harappan Matrix',
        body: `The **Indus Valley Civilisation (IVC)**, or **Harappan Civilisation**, represents South Asia's first Bronze Age urban society. It flourished across an expansive triangular territory covering roughly 1.3 million square kilometers in modern-day India, Pakistan, and Afghanistan—larger than contemporary Old Kingdom Egypt or Bronze Age Mesopotamia.

### Tripartite Phasing & Chronological Architecture
1. **Early / Regional Harappan Phase (c. 3300–2600 BCE):** Formative proto-urban stage characterized by regional ceramic traditions (Kot Diji, Amri, Sothi-Siswal), defensive mud-brick fortifications, and emerging craft specialization.
2. **Mature / Integration Harappan Phase (c. 2600–1900 BCE):** Apex urban phase exhibiting subcontinental standardization: burnt-brick grid cities, uniform binary/decimal weights, steatite seals, covered drainage systems, and long-distance international maritime trade.
3. **Late / Localization Harappan Phase (c. 1900–1300 BCE):** Post-urban decline marked by de-urbanization, abandonment of large cities, loss of script and standardized weights, and devolution into regional rural agro-pastoral cultures (*Cemetery-H, Jhukar, Rangpur IIB-C*).`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Geographical Extent & Landmark Urban Planning Architecture',
        body: `### The Geographical Cardinal Extremities
- **Northernmost Limit:** **Manda** on the Chenab River (Jammu & Kashmir) / **Shortughai** (Oxus River, northern Afghanistan trading outpost).
- **Southernmost Limit:** **Daimabad** on the Pravara River (Maharashtra).
- **Westernmost Limit:** **Sutkagan Dor** on the Dasht River (Makran Coast, Pakistan-Iran border).
- **Easternmost Limit:** **Alamgirpur** on the Hindon River (Meerut, Uttar Pradesh).

### Principles of Harappan Civic Architecture
1. **Dual Settlement Division (Citadel vs Lower Town):**
   - **The Citadel (West):** Built on an elevated mud-brick platform; fortified by defensive walls; accommodated public administrative architecture, grain storage facilities, and ceremonial bathing complexes.
   - **The Lower Town (East):** Vast residential grid area housing merchants, artisans, and common citizens.
   - *Exceptions to Dual Division:* **Dholavira** is uniquely divided into **Three Parts** (*Citadel, Middle Town, and Lower Town*); **Chanhudaro** is the only major city with **No Citadel**; **Lothal** incorporated both public structures and residential quarters inside a single common defensive wall.
2. **Gridiron Street Layout:** Wide arterial roads running strictly North-South and East-West, intersecting at right angles and dividing residential sectors into rectangular blocks. Houses had blind walls facing main streets, with main entry doors opening into narrow side lanes to mitigate dust and noise.
3. **Burnt-Brick Standardization:** Bricks were manufactured in strict mathematical proportions: **Thickness : Width : Length = 1 : 2 : 4** (standard dimensions: $7 \times 14 \times 28\text{ cm}$ for houses; $10 \times 20 \times 40\text{ cm}$ for city walls).
4. **The Underground Drainage Network:** The hallmark of Harappan civic governance. Waste water from residential bathrooms flowed through terracotta wall conduits into covered street drains made of kiln-burnt bricks. Street drains were fitted with removable limestone/burnt-brick inspection covers and silt collection sumps (*soak pits*).`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'HISTORICAL_ANALYSIS',
        title: 'Civic Monumentality: The Great Bath & Granary Complexes',
        body: `### The Great Bath of Mohenjo-daro
- **Architectural Engineering:** A rectangular tank measuring $11.88 \times 7.01\text{ meters}$ and $2.43\text{ meters}$ deep, located on the Citadel.
- **Waterproofing Technology:** Built with fine-fitted burnt bricks set in **gypsum mortar** and lined with a thick layer of natural **bitumen (asphalt)** along the sides and floor to prevent seepage.
- **Ancillary Structures:** Flight of stairs at north and south ends; surrounded by verandas and changing rooms on three sides, with an adjacent deep well supplying fresh water.
- **Societal Purpose:** Generally interpreted as a **ceremonial/ritual public ablution tank** rather than a secular domestic swimming facility.

### The Granaries & Food Security Architecture
- **Great Granary at Mohenjo-daro & 6 Granaries at Harappa:** Built on elevated platforms with air-ventilation corridors to prevent dampness and insect infestation of grain.
- Positioned strategically near riverbanks to facilitate boat transport of agricultural grain collected as state taxation.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Key Examination Invariants & Distinctions',
        body: `### Examination Invariants (UPSC / RPSC)
- **Dholavira (Gujarat):** Unique for **3-part town planning** (*Citadel, Middle, Lower*), giant rock-cut water reservoirs, and a 10-symbol wooden inscription signboard.
- **Lothal (Gujarat):** World's earliest artificial **tidal brick dockyard** connected to the Sabarmati/Bhogava river; single fortified enclosure.
- **Kalibangan (Rajasthan):** Evidence of a **pre-Harappan ploughed field** with orthogonal furrow lines for double cropping (*mustard and gram*); fire altars; decorative tiled floors; absence of underground drainage in lower town.
- **Chanhudaro (Sindh):** Completely unfortified city without a citadel; specialized bead-making and seal-engraving factory.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-02-01',
        statement: 'The Mature Harappan civilisation maintained a standardized burnt-brick ratio of 1:2:4 across all urban settlements spanning from the Indus valley to Gujarat.',
        claimType: 'ARCHAEOLOGICAL_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Marshall, Mackay & Wheeler Archaeological Reports',
        excerpt: 'Standardization in brick sizes with dimensions conforming strictly to the ratio of 1:2:4 is found across major Harappan settlements including Harappa, Mohenjo-daro, and Kalibangan.',
      },
      {
        id: 'CLM-HIST-02-02',
        statement: 'Dholavira in the Rann of Kutch is the only major Harappan metropolis divided into three distinct fortified sectors: Citadel, Middle Town, and Lower Town.',
        claimType: 'ARCHAEOLOGICAL_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'R.S. Bisht Excavation Reports at Dholavira (ASI)',
        excerpt: 'Unlike the binary division typical of Harappan cities, Dholavira presents a unique tripartite urban layout consisting of a castle/citadel, middle town, and lower town.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Ancient Indian History & Urbanization',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'CONCEPTUAL_AND_EVIDENTIARY',
        notes: 'Civic town planning, drainage mechanisms, and comparative analysis of major sites.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims & Mains: Ancient Civilizations (Kalibangan, Lothal, Harappa)',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'HIGH_PRECISION_FACTS',
        notes: 'Detailed architectural features of Kalibangan, Lothal, and Dholavira.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Harappa (1921 Dayaram Sahni, 6 granaries) | Mohenjo-daro (1922 R.D. Banerjee, Great Bath, Dancing Girl) | Dholavira (3-tier layout, signboard) | Lothal (Dockyard) | Kalibangan (Ploughed field, fire altars) | Chanhudaro (No citadel).',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which of the following Harappan sites is unique for lacking a fortified Citadel and serving predominantly as an industrial craft manufacturing center?',
        options: ['Lothal', 'Chanhudaro', 'Kalibangan', 'Banawali'],
        correctAnswer: 'Chanhudaro',
        explanation: 'Chanhudaro (excavated by N.G. Majumdar and Mackay in Sindh) is the only Harappan city completely devoid of a raised Citadel, functioning as an industrial workshop for bead-making, shell-cutting, and seal-crafting.',
        trapExplanation: 'Lothal has craft workshops, but it possesses a fortified citadel within a common perimeter wall; Chanhudaro has NO citadel at all.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-HIST-03',
    slug: 'harappan-economy-technology-crafts-and-international-trade',
    title: 'Harappan Economy, Craft Metallurgy, Script & Long-Distance Trade',
    shortDefinition: 'The agrarian surplus, craft specialization, binary weight systems, and long-distance Mesopotamian trade of the Harappan civilization.',
    difficulty: 'INTERMEDIATE',
    order: 3,
    topicSlug: 'indus-valley-civilisation',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Economic Engine: Agrarian Surplus & Craft Specialization',
        body: `The survival and monumentality of Harappan urbanism were sustained by a highly productive **agricultural base** in the fertile alluvial floodplains, coupled with centralized raw material procurement and inter-regional manufacturing networks.

### Agriculture & Irrigation Strategy
- **Crops Cultivated:** Wheat, 6-row barley, mustard, sesamum, chickpeas, dates, field peas, and millets (at Gujarat sites like Rangpur).
- **Early Cotton:** Harappans were the **first people in the world to produce cotton** (termed *Sindon* by the Greeks, derived from *Sindhu*).
- **Tillage & Water Management:** Terracotta plow models found at **Banawali** (Haryana); cross-furrow ploughed fields at **Kalibangan**; sophisticated check-dams and rock-cut water harvesting reservoirs at **Dholavira** (in arid Kutch).`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Metallurgy, Craft Production & Standardized Weights',
        body: `### Metallurgy & Industrial Craft Specialization
- **Bronze Metallurgy:** Harappans mastered **lost-wax casting (*cire perdue*)**, exemplified by the iconic **Bronze Dancing Girl** of Mohenjo-daro. They alloyed copper with tin (typically 8–12% tin content, though copper-arsenic alloys were also common).
- **Steatite Bead Making:** Centers at **Chanhudaro** and **Lothal** utilized micro-drills to manufacture cylindrical steatite, carnelian, lapis lazuli, and jasper beads.
- **Raw Material Procurement Networks:**
  - **Copper:** Khetri mines (Rajasthan) and Oman (*Magan*).
  - **Tin:** Afghanistan and Hazaribagh (Jharkhand).
  - **Gold:** Kolar gold fields (Karnataka) and river sands.
  - **Lapis Lazuli:** Badakhshan (Shortughai outpost, Afghanistan).
  - **Turquoise & Jade:** Central Asia and Iran.
  - **Steatite:** Southern Rajasthan and northern Gujarat.
  - **Conch Shell:** Coastal factories at Balakot and Nageshwar.

### Standardized Metrology: The Weights & Scales
- **Binary System (Lower Denominations):** Weights progressed in binary ratios: $1, 2, 4, 8, 16, 32, 64 \dots 160, 320, 640$ (where base unit $16 = 13.64\text{ grams}$).
- **Decimal System (Higher Denominations):** Used for large-scale bulk commodities ($160, 200, 320, 640$).
- **Material:** Precision-carved cubes made of hard **chert** and agate, without markings.
- **Linear Measurement:** Ivory scale discovered at **Lothal** and shell scale at **Mohenjo-daro**.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'HISTORICAL_ANALYSIS',
        title: 'International Maritime & Overland Trade: The Meluhha Connection',
        body: `### Mesopotamian Trade Integration
Cuneiform inscriptions from the Akkadian Empire under **Sargon of Akkad (c. 2350 BCE)** proudly record ships docking at his capital from three distant lands:
1. **Dilmun:** Identified as the island of **Bahrain** in the Persian Gulf (*the transshipment port / "land of sweet waters"*).
2. **Magan:** Identified as the **Makran coast and Oman** (primary supplier of copper, containing distinctive nickel traces found in Harappan copper).
3. **Meluhha:** Identified as the **Indus Valley region** (*the land of carnelian, lapis lazuli, copper, gold, ivory, and exotic birds like the haja-bird / peacock*).

### Trade Evidence
- Dozens of square Harappan steatite seals discovered in Mesopotamian cities (Ur, Kish, Susa, Nippur, Lagash).
- Circular "Persian Gulf" button seals found at Lothal dockyard.
- Merchant identity tags: Wet clay sealings (*termed 'Godaam' identity seals*) pressed onto cord-tied packaging, proving tamper-proof long-distance trade.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Exam Invariants & Traps',
        body: `### Crucial Historical Invariants
- **Iron was UNKNOWN to Harappans:** The Harappan civilization was a **Bronze Age** society. Iron (*Ayas*) appears in India only around 1000 BCE in the Later Vedic period.
- **Horse Evidence is Disputed/Marginal:** While terracotta figurines from Lothal and disputed skeletal fragments from Surkotada (Gujarat) exist, the horse was **NOT a central animal** in Harappan economy or religion. The dominant animal on seals is the **Unicorn** (mythological) followed by the **Humped Zebu Bull**.
- **No Monetary Coinage:** Trade was conducted through **regulated barter** backed by standardized weights, state storage granaries, and sealings.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-03-01',
        statement: 'Harappans engaged in direct and intermediate maritime trade with Mesopotamia, where the Indus Valley region was known in cuneiform texts as Meluhha.',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Akkadian Inscriptions & NCERT Class 12 Themes in Indian History I',
        excerpt: 'Mesopotamian texts refer to trade relations with Dilmun (Bahrain), Magan (Oman), and Meluhha, likely the Harappan region, mentioning imports of carnelian, lapis lazuli, copper, and ivory.',
      },
      {
        id: 'CLM-HIST-03-02',
        statement: 'The Harappan weight system utilized a binary series for lower values (1, 2, 4, 8, 16, 32 up to 640) and a decimal system for higher denominations.',
        claimType: 'ARCHAEOLOGICAL_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Childe, Mackay & Kenoyer Studies in Harappan Metrology',
        excerpt: 'Harappan chert cubical weights show a strict binary progression in the lower denominations with the unit 16 corresponding to roughly 13.7 grams.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Economic History of Ancient India',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'TRADE_AND_METALLURGY',
        notes: 'Covers trade routes, raw material sources, and technological capabilities.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Ancient India Trade & Craft Centers',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'FACTUAL_AND_METROLOGICAL',
        notes: 'Raw material procurement linkages with Khetri, Lothal dockyard, and weight ratios.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Meluhha = Indus Valley | Dilmun = Bahrain | Magan = Oman | Copper = Khetri (Rajasthan) | Lapis = Shortughai (Afghanistan) | Base Weight unit = 16 (13.64g) | Method = Lost-wax bronze casting | Iron = ABSOLUTELY UNKNOWN.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'In Mesopotamian cuneiform records of the 3rd Millennium BCE, which geographical region is identified as "Meluhha"?',
        options: ['Oman Coast', 'Bahrain Island', 'Indus Valley Region', 'Caspian Sea Basin'],
        correctAnswer: 'Indus Valley Region',
        explanation: 'Cuneiform texts of Sargon of Akkad designate the Indus Valley Civilization as "Meluhha", a source of carnelian, lapis lazuli, ivory, and timber.',
        trapExplanation: 'Dilmun corresponds to Bahrain; Magan corresponds to Oman; Meluhha corresponds to the Indus region.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-HIST-04',
    slug: 'harappan-religion-script-society-and-archaeological-interpretations',
    title: 'Harappan Society, Material Religion, Seals & Archaeological Interpretations',
    shortDefinition: 'The social structure, undeciphered logo-syllabic script, and material religious practices of the Indus Valley Civilisation.',
    difficulty: 'ADVANCED',
    order: 4,
    topicSlug: 'indus-valley-civilisation',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Material Religion & Symbolic Universe of the Harappans',
        body: `Because the **Harappan script remains undeciphered**, all reconstructions of Harappan religious life, social hierarchies, and political governance are **inferential interpretations** derived strictly from material iconography, terracotta figurines, stone sculptures, and burial practices.

### Epistemic Humility in Religious Reconstructions
Scholars emphasize that applying later classical Hindu religious concepts retrospectively to Bronze Age artifacts requires caution:
1. **The "Pashupati" Seal (Mohenjo-daro):** Depicts a male figure seated in a yogic posture with a horned head-dress, surrounded by four animals (**Elephant, Tiger, Rhinoceros, and Buffalo**) with two **Deers** at his feet. Termed *Proto-Shiva* by Sir John Marshall.
2. **Mother Goddess Cult:** Numerous terracotta figurines of heavily ornamented females with fan-shaped head-dresses and pinched facial features, interpreted as fertility goddesses.
3. **Aniconic & Nature Worship:** Sacredness of the **Pipal tree** (*Ficus religiosa*); worship of humped bulls, unicorns, serpents, and composite chimeras; conical and cylindrical stones interpreted as phallic (*Linga*) and ring-stones as female fertility (*Yoni*) symbols.
4. **Fire Altars (*Agni Kundas*):** Discovered in mud-brick platforms at **Kalibangan** (Rajasthan) and **Lothal** (Gujarat), indicating community ritual offerings.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'The Harappan Script & Steatite Seal System',
        body: `### Characteristics of the Harappan Script
- **Writing Direction:** Predominantly written **Right to Left** (*Boustrophedon* in multi-line inscriptions, where alternating lines reverse direction).
- **Nature of Script:** **Logo-syllabic** (not alphabetic); contains roughly **375 to 400 distinct signs**.
- **Longest Inscription:** Found on the **Dholavira Signboard** (composed of 10 large $30\text{ cm}$ signs made of white gypsum inlay set into a wooden frame).
- **Mediums of Inscription:** Carved on steatite seals, copper tablets, ivory rods, terracotta bangles, and pottery jars.

### Seal Functions & Iconography
- **Material & Dimensions:** Mostly square tablets of soft steatite ($2 \times 2\text{ cm}$ to $3 \times 3\text{ cm}$), treated with alkali and baked for hardness.
- **Components:** Animal motif in center + brief inscription at top + boss/perforated knob at back for cord attachment.
- **Dominant Motifs:** 
  - **Unicorn (Single-horned beast):** Most frequent motif (over 60% of animal seals).
  - **Humped Zebu Bull, Elephant, Rhinoceros, Tiger, Bison.**
  - **Absence of Cow:** The cow is conspicuously absent from Harappan seal motifs.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'HISTORICAL_ANALYSIS',
        title: 'Social Stratification & Governance Hypotheses',
        body: `### Social Stratification
- **Housing Disparity:** Multi-story spacious houses with private wells and courtyards on the Lower Town contrast with single-room worker barracks at Harappa, pointing to economic stratification.
- **Burial Customs & Afterlife Beliefs:**
  - Extended inhumation (corpse placed North-South in an oblong pit).
  - Accompanied by pottery jars containing food/drink, shell bangles, beads, and copper mirrors—proving belief in an afterlife.
  - Absence of extravagant precious gold/gem grave treasures (unlike Egyptian Pharaohs or Mesopotamian royal tombs at Ur) reveals an egalitarian burial ethos.
  - Variations: Coffin burial at Harappa; Double burial (male-female skeleton pair) at Lothal; Urn pot-burials at Kalibangan.

### The Riddle of Harappan Governance
- **No Imperial Palaces or Monarchy:** No evidence of royal tombs, large military barracks, or centralized monarchical palaces.
- **Scholarly Views:**
  1. *Single State Theory:* Subcontinental uniformity in brick sizes, seals, layout, and weights implies a centralized municipal authority or merchant oligarchic council.
  2. *Federated City-States:* Regional centers (Mohenjo-daro, Harappa, Dholavira, Rakhigarhi) functioned as autonomous city-state polities sharing cultural norms.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Target Exam Anchors & Factual Filters',
        body: `### Critical Exam Distinctions
- **Pashupati Seal Animals:** 4 surrounding animals (**Elephant, Tiger, Rhinoceros, Buffalo**) + 2 Deers at the foot of the throne. (Horses, cows, and lions are **NOT** on the Pashupati seal).
- **Script Direction:** Right to left (proved by cramping of signs on the left margin of seals).
- **Fire Altars:** Present at **Kalibangan** and **Lothal**; absent at Mohenjo-daro and Harappa.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-04-01',
        statement: 'The Harappan Pashupati seal from Mohenjo-daro depicts a three-horned seated figure surrounded by four animals: elephant, tiger, rhinoceros, and buffalo, with two deers beneath the seat.',
        claimType: 'ARCHAEOLOGICAL_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Marshall, Mohenjo-daro and the Indus Civilisation (1931)',
        excerpt: 'The seal shows a figure seated in yogic posture with horned headgear, flanked by an elephant and tiger on the right, a rhinoceros and buffalo on the left, and two deers beneath.',
      },
      {
        id: 'CLM-HIST-04-02',
        statement: 'The Harappan script is a logo-syllabic writing system of 375 to 400 signs written predominantly from right to left, which remains undeciphered.',
        claimType: 'EPIGRAPHIC_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Parpola & Mahadevan Concordances of the Indus Script',
        excerpt: 'Analysis of line endings and sign clustering confirms that the Harappan script was written right to left, containing approximately 400 signs in a logo-syllabic system.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Salient features of Ancient Indian Art & Religion',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'CRITICAL_INTERPRETATION',
        notes: 'Pashupati seal iconography, nature of Harappan script, and burial customs.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Ancient India Religious & Cultural Features',
        relevance: 'HIGH',
        priority: 'HIGH',
        requiredDepth: 'ICONOGRAPHIC_PRECISION',
        notes: 'Fire altars at Kalibangan and iconographic markers on Harappan seals.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Pashupati Seal = Elephant, Tiger, Rhino, Buffalo + 2 Deers | Script = Right-to-Left, Logo-syllabic (375-400 signs) | Longest inscription = Dholavira (10 signs) | Fire Altars = Kalibangan & Lothal | Double Burial = Lothal.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which of the following animals is NOT depicted surrounding the central figure on the famous Pashupati Seal of Mohenjo-daro?',
        options: ['Rhinoceros', 'Tiger', 'Lion', 'Buffalo'],
        correctAnswer: 'Lion',
        explanation: 'The four animals surrounding the central figure on the Pashupati seal are the Elephant, Tiger, Rhinoceros, and Buffalo. The Lion, Cow, and Horse are completely absent.',
        trapExplanation: 'Aspirants often confuse Tiger (which IS present) with Lion (which is ABSENT).',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-HIST-05',
    slug: 'harappan-decline-theories-ecological-shifts-and-late-harappan-phase',
    title: 'Harappan Decline Theories, Ecological Shifts & Late Harappan Phase',
    shortDefinition: 'Historiographical evaluation of the decline of Harappan urbanism, ecological/riverine desiccation, and post-urban rural transitions.',
    difficulty: 'ADVANCED',
    order: 5,
    topicSlug: 'indus-valley-civilisation',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Decline vs. Transformation: The Modern Historiographical Consensus',
        body: `Around **1900 BCE**, the monumental civic infrastructure of the Mature Harappan Civilisation began to disintegrate. Major metropolises like Mohenjo-daro, Harappa, and Kalibangan were progressively abandoned, and distinctive urban markers—standardized weights, seals, written inscriptions, and long-distance Mesopotamian trade—disappeared.

### Shift from "Catastrophic Collapse" to "Gradual Transformation"
Early colonial historians posited sudden, catastrophic destructions. Modern archaeological research, however, demonstrates that the end of the Indus Civilisation was **not a single catastrophic event, but a protracted process of de-urbanization and regional localization** lasting from c. 1900 to 1300 BCE.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Historiographical Theories on Harappan Decline',
        body: `| Proposed Theory / Factor | Major Proponents | Supporting Evidence | Modern Critical Evaluation |
| :--- | :--- | :--- | :--- |
| **Aryan Invasion / Military Conquest** | Sir Mortimer Wheeler, V. Gordon Childe | 37 skeletons found in unburied postures at Mohenjo-daro; Rigvedic references to *Indra as Purandara* (destroyer of forts). | **COMPLETELY REJECTED.** Skeletons belong to different stratigraphical layers and show no battle trauma (K.A.R. Kennedy); no chronological overlap with Vedic texts. |
| **Tectonic Shifts & River Course Diversions** | H.T. Lambrick, M.R. Sahni, Robert Raikes | Evidence of tectonic uplifts creating mud dams (*Allaband*) in the lower Indus valley, causing prolonged impounding and catastrophic flooding of Mohenjo-daro. | **PARTIALLY VALID.** Explains repeated flooding at Mohenjo-daro, but cannot account for decline in distant arid sites like Kalibangan or Lothal. |
| **Drying of the Ghaggar-Hakra (Saraswati) River** | Gurdip Singh, V.N. Misra, B.B. Lal | Tectonic capture of Yamuna into the Ganga system and Sutlej into the Indus starved the Ghaggar-Hakra river, turning the desert belt of Rajasthan/Cholistan arid. | **HIGHLY ACCEPTED.** Supported by satellite imagery showing dry palaeo-channels and desertification around Kalibangan and Banawali. |
| **Climate Change & Weakening Monsoons** | Gurdip Singh (Pollen studies at Rajasthan lakes: Sambhar, Didwana, Lunkaransar) | Sediment cores reveal significant decline in precipitation and weakening of South Asian summer monsoons around 2000–1800 BCE. | **PRIMARY MULTI-REGIONAL CONSENSUS.** Decreased agricultural yields broke the surplus necessary to sustain dense city populations. |
| **Collapse of International Trade** | Shereen Ratnagar | Decline of the Akkadian/Babylonian empire around 1900 BCE halted demand for Harappan lapis, carnelian, and ivory. | **STRONG CONTRIBUTORY FACTOR.** Loss of export markets undermined the prosperity of the urban merchant class. |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'HISTORICAL_ANALYSIS',
        title: 'The Late Harappan Phase & Regional Localisation',
        body: `### The Post-Urban De-urbanization (c. 1900–1300 BCE)
When cities could no longer sustain large non-agricultural populations, urban communities migrated eastward into the upper Gangetic basin and southward into the Gujarat peninsula:
1. **Cemetery-H Culture (Punjab & Haryana):** Successor culture at Harappa; characterized by painted funeral urns depicting peacocks with human souls inside.
2. **Jhukar & Jhangar Culture (Sindh):** Poorer rural settlements occupying the ruins of Chanhudaro and Amri; loss of seals, replaced by crude circular clay stamps.
3. **Rangpur & Prabhas Patan Phase (Gujarat):** Continued ceramic culture exhibiting local regional motifs without monumental brick architecture.
4. **Transition to the Iron Age:** The decentralized agro-pastoral settlements of the Late Harappan phase eventually interacted with the incoming Indo-Aryan groups and Painted Grey Ware (PGW) cultures, transmitting craft skills, agricultural knowledge, and sacred symbolism into classical Indian culture.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Exam Traps & Historiographical Consensus',
        body: `### Key Exam Anchors
- **Wheeler's "Aryan Invasion" is Disproven:** Never cite the Aryan invasion as the factual cause of Harappan collapse in contemporary UPSC/State PCS examinations.
- **Multi-Causal Model:** The accepted modern consensus is **Ecological Degradation + Weakened Monsoons + River Tectonic Shifts + Collapse of Long-Distance Trade**, causing gradual de-urbanization rather than overnight annihilation.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-05-01',
        statement: 'Modern archaeological consensus rejects Mortimer Wheeler\'s Aryan invasion theory, attributing the decline of the Mature Harappan civilization primarily to climatic desiccation, tectonic river shifts, and agricultural collapse.',
        claimType: 'HISTORIOGRAPHICAL_CONSENSUS',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Kenoyer, Possehl & NCERT Themes in Indian History I',
        excerpt: 'Archaeological evidence demonstrates that the abandonment of Harappan cities resulted from complex environmental factors, including monsoon weakening and river course changes, rather than external military invasion.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Historical Debate on the Decline of IVC',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'HISTORIOGRAPHICAL_CRITIQUE',
        notes: 'Evaluating environmental vs anthropogenic theories of Harappan decline.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Mains Paper I: Causes of Harappan Decline',
        relevance: 'HIGH',
        priority: 'HIGH',
        requiredDepth: 'STRUCTURED_THEORIES',
        notes: 'Pollen analysis at Didwana/Sambhar lakes and Saraswati river drying.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Decline = c. 1900 BCE | Climate change + Saraswati drying + Monsoon failure + Trade collapse | Aryan invasion = DISPROVEN | Late Harappan = Cemetery-H (Punjab), Jhukar (Sindh), Rangpur (Gujarat).',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which environmental factor is supported by pollen analytical studies at Sambhar and Didwana lakes in Rajasthan as a primary catalyst for Harappan de-urbanization?',
        options: ['Severe catastrophic volcanic ash fallout', 'Sudden Pleistocene glaciation', 'Weakening of the South Asian summer monsoon and aridity', 'Submersion by the Arabian Sea'],
        correctAnswer: 'Weakening of the South Asian summer monsoon and aridity',
        explanation: 'Pollen and sediment core studies conducted by Gurdip Singh at Rajasthan salt lakes (Sambhar, Didwana, Lunkaransar) proved a sharp decline in rainfall and increasing aridity around 2000–1800 BCE.',
        trapExplanation: 'Volcanic and marine submersion theories are fictitious for the inland Rajasthan and Punjab basins.',
        difficulty: 'MEDIUM',
      },
    ],
  },

  // =========================================================================
  // TOPIC 65: Vedic Period & Socio-Economic Transformations
  // =========================================================================
  {
    id: 'CON-HIST-06',
    slug: 'early-vedic-period-sources-geography-and-rigvedic-pastoral-society',
    title: 'Early Vedic Period: Sources, Geography & Rigvedic Pastoral Society',
    shortDefinition: 'The literary sources, Sapta-Sindhu geography, pastoral economy, tribal polity, and fluid social structure of the Early Vedic (Rigvedic) period.',
    difficulty: 'INTERMEDIATE',
    order: 6,
    topicSlug: 'vedic-period-and-transformation',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Rigvedic World: Pastoralism & Tribal Kinship',
        body: `The **Early Vedic Period (c. 1500–1000 BCE)** represents the earliest phase of the Indo-Aryan pastoral communities in the north-western Indian subcontinent. Our primary source of knowledge is the **Rigveda Samhita**, an orally transmitted collection (*Sruti*) of 1,028 hymns (*Suktas*) organized into 10 books (*Mandalas*).

### Geography of the Rigveda: The Land of Seven Rivers (*Sapta-Sindhu*)
The Rigvedic people resided primarily in the north-western subcontinent:
- **Major Rivers:** **Indus (*Sindhu*)** (most frequently mentioned), **Saraswati** (revered as the most sacred river — *Naditama*, best of rivers), and the five rivers of Punjab:
  1. *Vitasta* (Jhelum)
  2. *Asikni* (Chenab)
  3. *Parushni* (Ravi — site of the Battle of Ten Kings)
  4. *Vipash* (Beas)
  5. *Shutudri* (Sutlej)
- **Ganga & Yamuna:** Mentioned only rarely (Ganga mentioned only once, Yamuna thrice), proving that the Early Vedic society had **not yet expanded into the middle/lower Gangetic plains**.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Rigvedic Economy & Social Organization',
        body: `### The Pastoral Economy: Cattle as the Paramount Standard of Value
The Early Vedic economy was predominantly **pastoral-nomadic**, with agriculture playing a secondary subsistence role:
- **Cattle (*Gau*) as Wealth:** Wealth was measured in cows and cattle heads (*Gomat* = wealthy person; *Gavishti* = search for cows / war for cattle; *Godhuli* = measure of time at sunset; *Duhitr* = daughter / milker of cows; *Gopa* = tribal protector).
- **Land Ownership:** No private ownership of agricultural land; land was held communally by the clan (*Vis*).
- **Medium of Exchange:** Cows and gold ornaments (*Nishka*) served as units of value; no regular metallic coinage existed.

### Social Structure: Fluid Functional Groups (No Rigid Caste System)
1. **Tribal Kinship Units:** Family (*Kula*, headed by *Kulapa*) $\rightarrow$ Village (*Grama*, headed by *Gramani*) $\rightarrow$ Clan (*Vis*, headed by *Vispati*) $\rightarrow$ Tribe (*Jana*, headed by *Rajan*).
2. **Fluid Functional Division:** Society was divided into three functional categories: warriors (*Kshatriya/Rajanya*), priests (*Brahmana*), and common folk (*Vis*). There was **no hereditary caste or untouchability**. A famous Rigvedic hymn (Mandala IX.112) declares: *"I am a poet, my father is a physician, and my mother grinds corn with stone. We live together with different professions, desiring wealth."*
3. **High Status of Women:** Women enjoyed substantial social freedom: participated in tribal assemblies (*Sabha* and *Vidatha*), underwent the sacred thread ceremony (*Upanayana*), had autonomy in selecting spouses (*Swayamvara*), and composed philosophical hymns (e.g. *Apala, Lopamudra, Ghosha, Vishwavara*). Child marriage and Sati were completely absent.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'HISTORICAL_ANALYSIS',
        title: 'Political Organization & The Popular Assemblies',
        body: `### Tribal Polity & Democratic Restraints on Kingship
The Rigvedic king (*Rajan*) was not a divine absolute monarch, but a **tribal military chieftain** chosen for leadership in cattle raids and defence:
- **No Standing Army:** The king relied on tribal militias (*Vrata, Gana, Grama, Sardha*) assembled during wartime.
- **No Regular Taxation:** The king received only voluntary tribal gifts and tribute (*Bali*), along with a share of war booty.
- **Popular Assemblies (Democratic Checks):**
  1. **Sabha:** Smaller elite assembly of elders, nobles, and judicial arbiters; attended by women (*Sabhavati*).
  2. **Samiti:** Large general tribal assembly of the entire population; elected the king and debated tribal welfare.
  3. **Vidatha:** Oldest folk assembly for communal decision-making, religious rituals, and redistribution of war spoils; women actively participated.
  4. **Gana:** Assembly of troops and clan representatives under a *Ganapati*.

### The Battle of Ten Kings (*Dasrajan War*)
Fought on the banks of the **Parushni River (Ravi)**. King **Sudas** of the *Bharata* tribe (supported by sage **Vashistha**) defeated a confederation of 10 tribes (5 Aryan + 5 non-Aryan tribes, guided by sage **Vishwamitra**), establishing the political supremacy of the Bharatas.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Key Examination Traps & Distinctions',
        body: `### Critical Exam Traps
- **River Frequency:** *Sindhu* is the most frequently mentioned river; *Saraswati* is the most sacred (*Naditama*); *Ganga* is mentioned only ONCE.
- **Bali in Early vs Later Vedic:** In Early Vedic, *Bali* was a **voluntary gift** to the tribal chief; in Later Vedic, *Bali* became a **mandatory tax**.
- **Assembly Membership:** Women participated in *Sabha* and *Vidatha* in the Early Vedic period; they were **barred** from attending assemblies in the Later Vedic period.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-06-01',
        statement: 'The Early Vedic economy was predominantly pastoral with wealth measured in cattle (Gau), while the political structure was governed by the Rajan checked by popular assemblies (Sabha, Samiti, Vidatha).',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'R.S. Sharma, Material Culture and Social Formations in Ancient India',
        excerpt: 'Rigvedic society was pastoral and semi-nomadic, lacking standing armies and regular taxation, with power distributed through tribal assemblies like the Sabha and Samiti.',
      },
      {
        id: 'CLM-HIST-06-02',
        statement: 'The Rigvedic hymn Mandala IX.112 confirms that social occupations were fluid and not determined by hereditary varna status during the Early Vedic period.',
        claimType: 'TEXTUAL_EVIDENCE',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Rigveda Samhita IX.112 & NCERT Class 11 Ancient India',
        excerpt: 'The verse where a family member is a poet, father a physician, and mother a corn-grinder demonstrates the functional and non-hereditary nature of Early Vedic professions.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Vedic Society & Early Indian Polity',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'INSTITUTIONAL_AND_SOCIAL',
        notes: 'Democratic nature of Sabha/Samiti, role of cattle economy, and status of women.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Vedic Literature & Social Institutions',
        relevance: 'HIGH',
        priority: 'HIGH',
        requiredDepth: 'FACTUAL_AND_TERMINOLOGY',
        notes: 'Ancient river names (Vitasta, Asikni, Parushni) and Dasrajan battle details.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Rigveda = 1,028 hymns (10 Mandalas) | Rivers: Saraswati (Naditama), Parushni (Ravi) | Assemblies: Sabha (elders), Samiti (general folk), Vidatha (oldest, redistribution) | Economy: Pastoral (Gau, Gavishti) | Women had Upanayana & Sabha rights.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'On the banks of which river was the famous Rigvedic "Battle of Ten Kings" (Dasrajan War) fought by King Sudas of the Bharata tribe?',
        options: ['Saraswati', 'Parushni (Ravi)', 'Vitasta (Jhelum)', 'Shutudri (Sutlej)'],
        correctAnswer: 'Parushni (Ravi)',
        explanation: 'The Dasrajan War was fought on the banks of the river Parushni (modern Ravi), where King Sudas of the Tritsu-Bharata dynasty defeated the ten confederated tribes.',
        trapExplanation: 'While Saraswati is the most sacred river, the battle itself took place on Parushni.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-HIST-07',
    slug: 'later-vedic-transformation-iron-technology-pgw-and-state-formation',
    title: 'The Later Vedic Transformation: Iron Technology, PGW & State Formation',
    shortDefinition: 'The eastward expansion into the Ganga-Yamuna Doab, iron metallurgy, emergence of territorial Janapadas, and royal sacrificial rituals.',
    difficulty: 'ADVANCED',
    order: 7,
    topicSlug: 'vedic-period-and-transformation',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Great Eastward Shift: Metallurgy, Surplus & Territoriality',
        body: `During the **Later Vedic Period (c. 1000–600 BCE)**, Indo-Aryan society underwent a revolutionary transformation from semi-nomadic pastoralism to **settled agricultural territorial statehood**. The textual corpus expanded to include the **Samaveda** (melodies for chanting), **Yajurveda** (sacrificial rituals), **Atharvaveda** (charms, spells, and domestic rites), along with the prose **Brahmanas** and early **Upanishads**.

### Material Catalyst: Iron Metallurgy (*Shyama-Ayas*) & PGW Culture
- **Eastward Migration into Aryavarta:** Society expanded from the Punjab into the dense forests of the **Ganga-Yamuna Doab** (*Kuru-Panchala region*), Kosala, and Videha.
- **The Power of Iron (c. 1000 BCE):** Termed *Shyama-Ayas* or *Krishna-Ayas* (black metal) to distinguish it from copper (*Lohita-Ayas*). Iron weapons and iron-tipped ploughshares unearthed at **Atranjikhera**, **Hastinapur**, **Kaushambi**, and **Noh (Bharatpur, Rajasthan)** enabled the clearing of dense monsoon hardwood forests and deep tilling of heavy Gangetic clay soils.
- **Painted Grey Ware (PGW) Culture:** Fine grey pottery painted with geometric black patterns, co-existing with iron weapons and permanent agricultural villages.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Emergence of Territorial States (*Janapadas*) & Centralized Bureaucracy',
        body: `### The Shift from Tribal Chieftaincy to Territorial Monarchy
1. **Territorial Identity (*Janapada*):** The tribal entity (*Jana*) settled permanently in defined geographic territories (*Janapadas* like Kuru, Panchala, Matsya, Surasena). The king's title transformed from a protector of cows (*Gopa*) to a ruler of land (*Bhupathi / Rajadhiraja*).
2. **Decline of Popular Assemblies:**
   - The democratic **Vidatha disappeared completely**.
   - The **Sabha** became a closed aristocratic council dominated by royal princes and wealthy Brahmanas; **women were strictly barred from attending**.
3. **Emergence of Nascent Bureaucracy (*Ratnins* — The 12 Jewels of the Crown):**
   - *Purohita:* Chief Priest and royal adviser.
   - *Senani:* Commander-in-chief of the military.
   - *Gramani:* Head of the village.
   - *Bhagadugha:* Official tax collector.
   - *Sangrahitri:* Royal treasurer.
   - *Akshavapa:* Royal accountant / superintendent of dice.
   - *Kshattri:* Chamberlain / royal gatekeeper.
4. **Institutionalized Taxation:** The voluntary gift (*Bali*) of the Rigvedic era became a **mandatory regular tax** (*Bali, Bhaga, and Shulka*), typically fixed at **1/6th of agricultural produce**.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'HISTORICAL_ANALYSIS',
        title: 'Grand Royal Sacrifices & The Legitimization of Divine Kingship',
        body: `To legitimize their growing autocratic authority and extract submission from rival chiefs, Later Vedic monarchs instituted monumental Vedic sacrificial rituals (*Yajnas*) supervised by specialized priests:

1. **Rajasuya Yajna (Royal Consecration Ceremony):** Conferred supreme royal sovereignty on the monarch. Included ritual sprinkling of holy water (*Abhisheka*) and a symbolic chariot race, establishing the king as divine representative on earth.
2. **Ashvamedha Yajna (Horse Sacrifice):** An unhindered royal stallion was set free to wander across neighboring territories for one year accompanied by warriors. Any ruler who stopped the horse had to wage war; those who let it pass accepted tributary submission. Concluded with the ritual sacrifice of the horse and lavish distribution of gold and cows to the Brahmanas.
3. **Vajapeya Yajna (Chariot Race of Strength / Drink of Strength):** The king's chariot was deliberately rigged to win against all competitors in a chariot race, symbolically revitalizing the aging monarch's physical and martial vitality.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Key Examination Invariants & Distinctions',
        body: `### Critical Exam Distinctions (Early vs Later Vedic)
- **Iron Terminology:** *Ayas* in Early Vedic meant Copper/Bronze; in Later Vedic, *Shyama-Ayas* meant Iron, and *Lohita-Ayas* meant Copper.
- **Tax Collectors:** *Bhagadugha* (tax collector) and *Sangrahitri* (treasurer) appeared only in the **Later Vedic period**.
- **Key Sacrifices:**
  - *Rajasuya:* Consecration & coronation.
  - *Ashvamedha:* Imperial territorial expansion.
  - *Vajapeya:* Chariot race & royal rejuvenation.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-07-01',
        statement: 'The introduction of iron metallurgy (Shyama-Ayas) around 1000 BCE in the Ganga-Yamuna Doab enabled the clearing of hardwood forests and produced the agricultural surplus necessary for the rise of territorial Janapadas.',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'R.S. Sharma, Iron and the Rise of Urban Centers in Ancient India',
        excerpt: 'Archaeological evidence of iron weapons and tools at Atranjikhera and Hastinapur dating from c. 1000 BCE corresponds with the transition from pastoralism to sedentary territorial Janapadas.',
      },
      {
        id: 'CLM-HIST-07-02',
        statement: 'In the Later Vedic administrative system, the 12 royal functionaries known as Ratnins included specialized officials such as the Bhagadugha (tax collector) and Sangrahitri (treasurer).',
        claimType: 'INSTITUTIONAL_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Satapatha Brahmana & NCERT Ancient India Class 11',
        excerpt: 'The Satapatha Brahmana lists the Ratnins who participated in the royal consecration, including the Bhagadugha who collected the king\'s share of agricultural produce.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Transition from Tribal Polity to Territorial Statehood',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'INSTITUTIONAL_AND_METALLURGICAL',
        notes: 'Role of iron technology in state formation, Ratnin bureaucracy, and royal sacrifices.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Later Vedic Administration & Rituals',
        relevance: 'HIGH',
        priority: 'HIGH',
        requiredDepth: 'TERMINOLOGY_PRECISION',
        notes: 'Administrative roles of Ratnins and distinction between Rajasuya, Ashvamedha, and Vajapeya.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Iron = Shyama-Ayas (Atranjikhera, Noh) | Pottery = Painted Grey Ware (PGW) | Polity = Janapadas (territorial state) | Bureaucracy = 12 Ratnins (Bhagadugha = tax, Sangrahitri = treasurer) | Rituals = Rajasuya, Ashvamedha, Vajapeya | Tax = Mandatory 1/6th.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'In the Later Vedic administrative apparatus, which official was specifically tasked with collecting the king\'s statutory share of agricultural produce (taxes)?',
        options: ['Sangrahitri', 'Bhagadugha', 'Akshavapa', 'Senani'],
        correctAnswer: 'Bhagadugha',
        explanation: 'In the Later Vedic Ratnin list, the Bhagadugha was the official revenue collector responsible for gathering the compulsory agricultural share (Bhaga/Bali), while the Sangrahitri was the royal treasurer.',
        trapExplanation: 'Sangrahitri is the treasurer; Bhagadugha is the tax collector; Akshavapa is the dice/accountant officer.',
        difficulty: 'MEDIUM',
      },
    ],
  },

  {
    id: 'CON-HIST-08',
    slug: 'later-vedic-varna-crystallization-ashramas-and-upanishadic-philosophy',
    title: 'Vedic Religious Evolution, Varna Crystallization & Philosophical Transitions',
    shortDefinition: 'The crystallization of the four hereditary Varnas, the Ashrama lifecycle system, ritual proliferation, and the philosophical revolt of the Upanishads.',
    difficulty: 'ADVANCED',
    order: 8,
    topicSlug: 'vedic-period-and-transformation',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Social Stratification & The Emergence of the Four-Fold Varna Hierarchy',
        body: `The Later Vedic period witnessed the rigid institutionalization of social hierarchies. The fluid occupational groupings of the Rigveda crystallized into **four closed, hereditary Varna strata**:

### The Four-Fold Varna System & The Purusha Sukta
- **The Four Varnas:**
  1. **Brahmanas:** Priestly and scholarly class; enjoyed monopoly over performing Vedic sacrifices and receiving gifts (*Dana/Dakshina*).
  2. **Kshatriyas / Rajanyas:** Rulers and military aristocracy; monopolized coercive state power and territorial governance.
  3. **Vaishyas:** Commoners, farmers, artisans, and merchants; the **only tax-paying class** (*Anyasya Balikrit* — payer of tribute to others) whose agricultural surplus supported the upper two classes.
  4. **Shudras:** Laboring class positioned at the base of the hierarchy; assigned the duty of serving the three upper classes (*Anyasya Preshya* — servant of others); denied the sacred thread ceremony (*Upanayana*).
- **The Purusha Sukta (Rigveda X.90):** Composed towards the end of the Rigvedic epoch as a late interpolation. It established the divine mythological justification of the Varnas, claiming they emanated from the cosmic primeval being (*Purusha*): Brahmanas from the mouth, Kshatriyas from the arms, Vaishyas from the thighs, and Shudras from the feet.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'The Ashrama Lifecycle, Gotra System & Decline in Status of Women',
        body: `### The Four Stages of Life (*Chatur-Ashrama*)
First systematically articulated in the **Jabala Upanishad**:
1. **Brahmacharya (Student Phase):** Celibacy, education under a Guru in a Gurukula; initiated by the *Upanayana* ceremony.
2. **Grihastha (Householder Phase):** Marriage, raising children, earning righteous wealth (*Artha*), fulfilling sensory desires (*Kama*), and performing daily domestic rituals (*Pancha Maha-Yajnas*).
3. **Vanaprastha (Hermit / Forest Dweller Phase):** Gradual retirement from worldly domestic responsibilities to live in the forest for contemplation.
4. **Sannyasa (Renunciation Phase):** Complete renunciation of all worldly attachments, ascetic mendicancy in pursuit of spiritual liberation (*Moksha*).

### The Gotra System
- Literally meaning *"cow-pen"* (the place where cattle belonging to a common ancestor were kept).
- Evolved into an institutionalized exogamous lineage unit tracing descent from one of the foundational seven sages (*Saptarishis*).
- Established the strict taboo of **Gotra Exogamy** (forbidding marriage within the same Gotra).

### Substantial Degradation in the Position of Women
- Women lost the right to the sacred thread (*Upanayana*) and were **categorically excluded from political assemblies (*Sabha/Samiti*)**.
- Women were increasingly treated as property and equated in ritual texts with social vices (e.g. *Maitrayani Samhita* lists woman, dice, and liquor as the three major evils).
- Rare exceptions of intellectual prominence: **Gargi Vachaknavi** and **Maitreyi** engaging in profound metaphysical debates with Sage Yajnavalkya in the court of King Janaka of Videha (*Brihadaranyaka Upanishad*).`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'HISTORICAL_ANALYSIS',
        title: 'Religious Proliferation vs. The Philosophical Revolt of the Upanishads',
        body: `### The Proliferation of Priestly Ritualism
- **Shift in Deities:** Rigvedic atmospheric gods (Indra, Varuna, Surya) lost supremacy to:
  - **Prajapati (Brahma):** The supreme creator god.
  - **Rudra (Shiva):** The god of beasts and destructive forces.
  - **Vishnu:** The preserver and patron god of sacrifices.
- **Priestly Monopoly:** Sacrifices became excessively complex, costly, and formulaic, requiring days of chanting by four distinct orders of priests: *Hotri* (Rigveda reciter), *Adhvaryu* (Yajurveda ritual performer), *Udgatri* (Samaveda singer), and *Brahman* (Atharvaveda supervisor).

### The Upanishadic Philosophical Revolution (*Vedanta*)
Towards the end of the Later Vedic era (c. 600 BCE), deep intellectual discontent arose against excessive animal slaughter, mechanical ritualism, and priestly commercialization. This culminated in the **Upanishads** (literally *"sitting down near a teacher"*):
1. **Rejection of Sacrifices:** The *Mundaka Upanishad* famously describes ritual sacrifices as **"unsteady rafts" (*Plava hyete adridha yajnarupah*)** incapable of crossing the ocean of rebirth.
2. **Core Metaphysical Philosophy:**
   - **Brahman:** The universal, infinite, transcendent reality underlying all cosmic existence.
   - **Atman:** The individual soul/self.
   - **Advaita Non-duality:** The supreme realization that *Atman is identical with Brahman* (**"Tat Tvam Asi"** — *Thou Art That*, from *Chandogya Upanishad*; **"Aham Brahma Asmi"** — *I am Brahman*, from *Brihadaranyaka Upanishad*).
3. **Doctrines of Karma, Samsara & Moksha:** Established that one's ethical actions (*Karma*) determine rebirth across cosmic cycles (*Samsara*), and ultimate liberation (*Moksha*) is achieved through spiritual knowledge (*Jnana*) rather than animal sacrifice.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Target Exam Anchors & Quotations',
        body: `### Important Upanishadic Mantras & Sources
- **Satyameva Jayate ("Truth Alone Triumphs"):** India's national motto; sourced directly from the **Mundaka Upanishad**.
- **Vasudhaiva Kutumbakam ("The World is One Family"):** Sourced from the **Maha Upanishad**.
- **Dialogue on Death between Nachiketa & Yama:** Found in the **Katha Upanishad**.
- **Four Ashramas First Mentioned:** **Jabala Upanishad** (only first three mentioned in earlier *Chandogya Upanishad*).`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-08-01',
        statement: 'The national motto of India, "Satyameva Jayate", is inscribed in Devanagari beneath the National Emblem and is excerpted from the Mundaka Upanishad (3.1.6).',
        claimType: 'TEXTUAL_FACT',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Mundaka Upanishad & Constitution of India / State Emblem Act 2005',
        excerpt: 'Satyameva jayate nanritam satyena pantha vitato devayanah is the opening line of verse 3.1.6 of the Mundaka Upanishad.',
      },
      {
        id: 'CLM-HIST-08-02',
        statement: 'The philosophical core of the Upanishads rejected mechanical sacrificial rituals and formulated the doctrines of Atman-Brahman non-dual unity, Karma, and Moksha.',
        claimType: 'PHILOSOPHICAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Brihadaranyaka & Chandogya Upanishads, S. Radhakrishnan Indian Philosophy',
        excerpt: 'The Upanishads mark a decisive shift from external ritual sacrifices to internal metaphysical contemplation, emphasizing the identity of the individual soul (Atman) with universal reality (Brahman).',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Indian Philosophy & Vedic Social Transformation',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'DEEP_PHILOSOPHICAL_AND_SOCIAL',
        notes: 'Upanishadic philosophy, emergence of Varna/Ashrama, and intellectual background of Buddhism/Jainism.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Prelims: Vedic Literature, Upanishads & Varna System',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'LITERARY_AND_CONCEPTUAL_ACCURACY',
        notes: 'Sources of mantras (Satyameva Jayate in Mundaka), 4 Ashramas in Jabala Upanishad, and Yajnavalkya-Gargi dialogue.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Satyameva Jayate = Mundaka Upanishad | 4 Ashramas = Jabala Upanishad | Purusha Sukta = Rigveda X.90 | Yama-Nachiketa dialogue = Katha Upanishad | Gargi-Yajnavalkya debate = Brihadaranyaka Upanishad | Deities = Prajapati, Rudra, Vishnu.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'From which ancient Indian Upanishadic text was the national motto of India, "Satyameva Jayate", adopted?',
        options: ['Katha Upanishad', 'Chandogya Upanishad', 'Mundaka Upanishad', 'Mandukya Upanishad'],
        correctAnswer: 'Mundaka Upanishad',
        explanation: '"Satyameva Jayate" (Truth Alone Triumphs) is taken from the Mundaka Upanishad (Mundaka III, Khanda 1, Verse 6).',
        trapExplanation: 'Do not confuse Mundaka Upanishad with Mandukya Upanishad (the shortest Upanishad which discusses the 4 states of consciousness: AUM).',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-HIST-09',
    slug: 'early-vedic-vs-later-vedic-comparative-synthesis-and-historical-evolution',
    title: 'Early Vedic vs. Later Vedic Comparative Synthesis & Historical Evolution',
    shortDefinition: 'Structured comparative analysis synthesizing the multi-dimensional transition from Early Vedic pastoral tribalism to Later Vedic sedentary territorial statehood.',
    difficulty: 'INTERMEDIATE',
    order: 9,
    topicSlug: 'vedic-period-and-transformation',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Great Subcontinental Evolution: A Systematic Comparative Matrix',
        body: `Understanding the Vedic period requires analyzing the **dynamic evolutionary trajectory** between the Early Vedic (Rigvedic) and Later Vedic phases across political, economic, social, geographical, and spiritual dimensions.

### Master Comparative Evolution Matrix

| Structural Dimension | Early Vedic Period (c. 1500–1000 BCE) | Later Vedic Period (c. 1000–600 BCE) | Underlying Historical Catalyst |
| :--- | :--- | :--- | :--- |
| **Geographical Core** | **Sapta-Sindhu** (North-Western India, Punjab, Saraswati, Upper Indus). | **Ganga-Yamuna Doab** (*Aryavarta*), Kosala, Videha, Magadha margins. | Forest clearing eastward using iron axes and controlled burning. |
| **Economic Foundation** | **Pastoral-Nomadic:** Cattle (*Gau*) was the primary measure of wealth; agriculture was secondary subsistence. | **Sedentary Agriculture:** Land ownership and crop cultivation (rice *Vrihi*, wheat *Godhuma*) became primary wealth. | Introduction of iron ploughshares (*Shyama-Ayas*) and alluvial farming. |
| **Metallurgy** | **Copper / Bronze (*Ayas*)** only. Iron was unknown. | **Iron (*Shyama-Ayas*)** widespread; copper termed *Lohita-Ayas*. | Discovery and exploitation of Gangetic iron ore deposits (~1000 BCE). |
| **Pottery Culture** | Ochre Coloured Pottery (OCP) and early Black-and-Red Ware. | **Painted Grey Ware (PGW)** with distinctive geometric black designs. | Permanent sedentary kiln technologies. |
| **Political Unit** | **Tribal Clan (*Jana*):** Non-territorial; king was a tribal chieftain (*Rajan / Gopa*). | **Territorial State (*Janapada*):** Defined territory; king was a territorial monarch (*Bhupathi / Samrat*). | Settled agriculture tied populations permanently to geographic soil. |
| **Popular Assemblies** | **Sabha, Samiti, Vidatha, Gana:** Strong democratic checks; women actively participated. | **Vidatha vanished;** Sabha became an aristocratic council; women were **barred**. | Autocratic consolidation of monarchical and patriarchal power. |
| **Taxation System** | **Voluntary Tribute (*Bali*):** Occasional voluntary gifts and share of war booty. | **Mandatory Regular Taxes (*Bali, Bhaga, Shulka*):** 1/6th share collected by *Bhagadugha*. | Agrarian surplus enabled institutionalized fiscal extraction. |
| **Bureaucracy** | Rudimentary and informal (*Senani, Gramani, Purohita*). | **Institutionalized Bureaucracy:** 12 royal functionaries (**Ratnins**). | Administrative requirements of managing larger territorial realms. |
| **Social Stratification** | **Fluid Functional Groups:** No hereditary caste; social mobility allowed; no untouchability. | **Rigid Four-Fold Hereditary Varna System:** Brahmanas, Kshatriyas, Vaishyas, Shudras. | Codification of hereditary class privileges and ritual monopolies. |
| **Status of Women** | **High & Equal:** Sacred thread (*Upanayana*), assembly rights, hymn composition (*Apala, Ghosha*). | **Substantially Degraded:** Denied *Upanayana*, barred from assemblies, treated as dependent. | Rise of private land inheritance and rigid patriarchal family norms. |
| **Supreme Deities** | Naturalistic Polytheism: **Indra (thunder), Agni (fire), Varuna (cosmic order Rta).** | Trinitarian Personified Gods: **Prajapati (creator), Rudra (destroyer), Vishnu (preserver).** | Shift from pastoral open-sky prayers to institutionalized royal temple/sacrificial religion. |
| **Religious Practice** | Simple prayer chants and domestic offerings without elaborate sacrificial slaughter. | **Monopolistic Grand Yajnas:** *Rajasuya, Ashvamedha, Vajapeya* accompanied by heavy priestly fees. | Need for kings to legitimize autocratic divine rule through priestly sanction. |
| **Philosophical Zenith** | Nature hymnology; focus on material prosperity in this worldly life. | **Upanishadic Vedanta:** Quest for *Moksha*, non-duality (*Atman-Brahman*), *Karma* and *Samsara*. | Intellectual reaction against mechanical ritualism and animal sacrifice. |`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'HISTORICAL_ANALYSIS',
        title: 'The Historical Trajectory: Setting the Stage for the 6th Century BCE',
        body: `The transformation of the Later Vedic society created deep structural contradictions that paved the way for the **Second Urbanization of the 6th Century BCE**:
1. **Economic Friction:** The emerging merchant class (*Sreshthins / Vaishyas*) accumulated monetary wealth through trade but remained relegated to third-tier social status behind priests and warriors.
2. **Kshatriya-Brahmana Rivalry:** Kshatriya rulers resented the ideological dominance and economic drain of Brahmana sacrificial fees (*Dakshina*).
3. **Agrarian Demand for Cattle Preservation:** The expansion of heavy iron-plough agriculture required bullock and cattle draft power. The widespread slaughter of cattle in Vedic sacrifices created severe economic bottlenecks for farming communities.
4. **The Rise of Heterodoxy:** These material and social frictions directly catalyzed the rise of **Buddhism, Jainism, and the Ajivika movement**, which preached non-violence (*Ahimsa*), rejected the sacrificial slaughter of cattle, condemned hereditary Varna exclusivity, and offered ideological legitimacy to the burgeoning merchant class.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: 'Comparative Exam Traps & Answer-Writing Scaffolds',
        body: `### Answer-Writing Scaffold for UPSC / State PCS Mains
When addressing the question: *"Discuss the socio-economic and political changes from the Early to Later Vedic Period"*, structure the analysis across 5 interconnected pillars:
1. **Material Catalyst:** Copper $\rightarrow$ Iron (*Shyama-Ayas*); Pastoral nomadism $\rightarrow$ Sedentary agriculture.
2. **Political Transformation:** Tribal chieftaincy (*Jana / Gopa*) $\rightarrow$ Territorial statehood (*Janapada / Samrat*); Voluntary *Bali* $\rightarrow$ Mandatory taxation (*Bhagadugha*).
3. **Social Crystallization:** Fluid functional classes $\rightarrow$ Hereditary four-fold *Varna* & *Ashrama* system.
4. **Gender Dynamics:** High status, *Upanayana*, and assembly participation $\rightarrow$ Complete exclusion and patriarchal subordination.
5. **Religious Shift:** Atmospheric naturalism (Indra/Agni) $\rightarrow$ Ritualized grand sacrifices (Rajasuya/Ashvamedha) $\rightarrow$ Upanishadic metaphysical reaction (*Atman-Brahman*).`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-HIST-09-01',
        statement: 'The transition from the Early Vedic to the Later Vedic period represents a fundamental structural transformation from pastoral-tribal nomadism in the Sapta-Sindhu to settled agrarian territorial Janapadas in the Ganga-Yamuna Doab.',
        claimType: 'HISTORICAL_SYNTHESIS',
        epistemicLevel: 'ESTABLISHED',
        confidence: 'VERY_HIGH',
        locator: 'Romila Thapar, From Lineage to State & NCERT Class 11/12',
        excerpt: 'The transition from lineage society to state society in ancient India occurred as iron technology enabled the eastward colonization of the Ganga valley, converting tribal Janas into territorial Janapadas.',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'GS Paper I: Socio-Economic History of Ancient India',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'COMPARATIVE_SYNTHESIS',
        notes: 'Directly addresses Mains comparison questions on Early vs Later Vedic transformations.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'RAS Mains Paper I: Evolution of Ancient Indian Society & Polity',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'STRUCTURED_COMPARISON',
        notes: 'High-yield comparative tables and structural shifts.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Early: Sapta-Sindhu | Pastoral | Cattle wealth | No iron | Sabha/Samiti/Vidatha open to women | Voluntary Bali | Indra/Agni/Varuna. Later: Ganga Doab | Agriculture | Iron (Shyama-Ayas) | Janapada territorial | Vidatha gone | Women barred | Mandatory taxes (Bhagadugha) | 12 Ratnins | Prajapati/Rudra/Vishnu | Upanishads.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which of the following institutional changes occurred during the transition from the Early Vedic to the Later Vedic period?',
        options: [
          'The assembly Vidatha expanded its membership while Sabha was abolished',
          'Women gained the right to perform grand royal Ashvamedha sacrifices independently',
          'Voluntary tribal gifts (Bali) transformed into a mandatory tax collected by the Bhagadugha',
          'Pastoral cattle raids completely replaced sedentary rice and wheat agriculture',
        ],
        correctAnswer: 'Voluntary tribal gifts (Bali) transformed into a mandatory tax collected by the Bhagadugha',
        explanation: 'In the Early Vedic period, Bali was an occasional voluntary gift to the tribal chief. In the Later Vedic period, settled agriculture and territorial Janapadas established a mandatory tax system (1/6th share) collected by dedicated officials like the Bhagadugha.',
        trapExplanation: 'Vidatha disappeared (not expanded); women were excluded from assemblies (not given more sacrificial rights); agriculture replaced pastoralism (not vice versa).',
        difficulty: 'MEDIUM',
      },
    ],
  },
];

export async function seedBatchAncientIndiaCanonicalKnowledge(): Promise<void> {
  console.log('Seeding Ancient India (Batch 1: Prehistory, Harappa, Vedic) Canonical Benchmark...');

  // 1. Ensure Target Domain exists
  const domain = await db.domain.upsert({
    where: { slug: 'indian-and-world-history' },
    update: {
      name: 'Indian & World History',
      description: 'First-principles study of Ancient, Medieval, Modern Indian History, Art & Culture, and Global Historical Milestones.',
      order: 7,
      status: 'ACTIVE',
    },
    create: {
      slug: 'indian-and-world-history',
      name: 'Indian & World History',
      description: 'First-principles study of Ancient, Medieval, Modern Indian History, Art & Culture, and Global Historical Milestones.',
      order: 7,
      status: 'ACTIVE',
    },
  });

  // 2. Ensure Target Subject exists
  const subject = await db.subject.upsert({
    where: { slug: 'ancient-indian-history' },
    update: {
      name: 'Ancient Indian History',
      domainId: domain.id,
      scopeStatement: 'Comprehensive first-principles mastery of ancient Indian history, prehistoric human evolution, Harappan urbanization, and Vedic socio-economic transformations.',
      description: 'First-principles canonical study of prehistoric archaeological cultures, Indus Valley urbanism, and Vedic structural transformations.',
      order: 7,
      status: 'ACTIVE',
    },
    create: {
      slug: 'ancient-indian-history',
      name: 'Ancient Indian History',
      domainId: domain.id,
      scopeStatement: 'Comprehensive first-principles mastery of ancient Indian history, prehistoric human evolution, Harappan urbanization, and Vedic socio-economic transformations.',
      description: 'First-principles canonical study of prehistoric archaeological cultures, Indus Valley urbanism, and Vedic structural transformations.',
      order: 7,
      status: 'ACTIVE',
    },
  });

  // 3. Ensure Target Exams exist
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

  // 4. Ensure Source exists for Provenance & Coverage Ledger
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

  // 5. Ensure Topics exist
  const topicDefs = [
    {
      slug: 'prehistory-and-early-human-cultures',
      title: 'Prehistory & Early Human Cultures',
      description: 'Prehistoric stone tool typologies, human fossil markers, hunter-gatherer transitions, and the Neolithic agricultural revolution.',
      scope: 'Paleolithic, Mesolithic, Neolithic, and Chalcolithic archaeological cultures of the Indian subcontinent.',
      order: 63,
    },
    {
      slug: 'indus-valley-civilisation',
      title: 'Harappan Civilisation & Bronze Age Urbanism',
      description: 'Civic town planning, burnt-brick architecture, drainage, metallurgy, standardized weights, Mesopotamian trade, and decline historiography.',
      scope: 'Mature Harappan urbanism, site-level archaeological findings, and Late Harappan regionalization.',
      order: 64,
    },
    {
      slug: 'vedic-period-and-transformation',
      title: 'Vedic Period & Socio-Economic Transformations',
      description: 'Rigvedic pastoral society, Sapta-Sindhu geography, iron technology, emergence of territorial Janapadas, Varna crystallization, and Upanishadic philosophy.',
      scope: 'Early Vedic vs Later Vedic comparative evolution, political assemblies, Ratnin administration, and Vedanta metaphysics.',
      order: 65,
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

  // 6. Seed Concepts
  for (const c of ANCIENT_INDIA_CANONICAL_CONCEPTS) {
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

    // Clear existing child relations for clean idempotent seeding
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

  console.log(`Successfully seeded ${ANCIENT_INDIA_CANONICAL_CONCEPTS.length} Ancient India (Batch 1) canonical concepts.`);
}
