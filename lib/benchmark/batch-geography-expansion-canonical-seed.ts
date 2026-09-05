/**
 * Geography & Environment Canonical Knowledge Expansion Seed
 * Concepts: CON-GEO-016 to CON-GEO-020 (Topics: Climatology, Oceanography, Indian Soils & Biomes)
 * Mind of Aravalli — Academic Reading Hub
 */

import { db } from '../db/client';
import { CanonicalConceptDefinition } from './batch-e1-canonical-seed';

export const GEOGRAPHY_EXPANSION_CANONICAL_CONCEPTS: CanonicalConceptDefinition[] = [
  // =========================================================================
  // CON-GEO-016: Frontogenesis, Extra-Tropical & Tropical Cyclones
  // =========================================================================
  {
    id: 'CON-GEO-016',
    topicOrder: 2,
    topicSlug: 'climatology-and-atmospheric-systems',
    topicTitle: 'Climatology & Atmospheric Systems',
    topicDescription: 'Atmospheric circulation, pressure belts, jet streams, monsoon dynamics, frontogenesis, and cyclonic systems.',
    slug: 'atmospheric-frontogenesis-extra-tropical-and-tropical-cyclones',
    title: 'Atmospheric Frontogenesis, Extra-Tropical Cyclones & Tropical Cyclones: Genesis, Thermodynamic Architecture & Storm Surges',
    shortDefinition: 'Authoritative NCERT Class XI Fundamentals of Physical Geography (Chapter 10) synthesis: Dynamic evolution of atmospheric boundary systems and vortices: Frontogenesis (Cold, Warm, Occluded, and Stationary fronts); Mid-Latitude / Extra-Tropical Cyclones (Polar Front Theory of Bjerknes, comma-cloud structure, baroclinic instability, westerly drift); and Tropical Cyclones (thermal-dynamic genesis criteria: SST ≥ 27°C, Coriolis parameter f ≥ 5° latitude, minimal vertical wind shear, upper-level anticyclonic divergence; core anatomy: Eye, Eyewall, and Spiral Rainbands; latent heat release engine; and destructive coastal Storm Surges).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-GEO-016-01',
        statement: 'A front is a three-dimensional boundary zone separating two air masses of differing temperature, humidity, and density; frontogenesis (front creation) occurs under converging deformation wind fields, classifying into Cold fronts (steep slope 1:50 to 1:100, vigorous vertical uplift producing cumulonimbus clouds and squall lines), Warm fronts (gentle slope 1:100 to 1:200, broad stratiform nimbostratus precipitation), Occluded fronts (cold front overtaking warm front, lifting warm air entirely aloft), and Stationary fronts.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NCERT Class XI Fundamentals of Physical Geography, Chapter 10: Atmospheric Circulation and Weather Systems, Section: Fronts, pp. 91-92',
        excerpt: 'When two different air masses meet, the boundary zone between them is called a front. The process of formation of the fronts is known as frontogenesis. There are four types of fronts: (a) Cold; (b) Warm; (c) Stationary; (d) Occluded... When the cold air mass moves towards warm air, the contact zone is a cold front... along a cold front weather changes are abrupt.'
      },
      {
        id: 'CLM-GEO-016-02',
        statement: 'Extra-tropical (mid-latitude) cyclones originate along the polar front (35°–65° latitude) driven by baroclinic instability and the clash of polar easterlies with subtropical westerlies (Bjerknes wave theory); they possess distinct thermal fronts, cover vast geographic expanses (1,000–2,000 km diameter), migrate west-to-east steered by upper-tropospheric jet streams, and can form over both land and oceans.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NCERT Class XI Fundamentals of Physical Geography, Chapter 10: Atmospheric Circulation and Weather Systems, Section: Extra Tropical Cyclones, pp. 92-93',
        excerpt: 'The systems developing in the mid and high latitude, beyond the tropics, are called the middle latitude or extra tropical cyclones. The passage of front causes abrupt changes in the weather conditions over an area in the middle and high latitudes... Extra tropical cyclones have a clear frontal system which is not present in the tropical cyclones. They cover a larger area and can originate over the land and sea.'
      },
      {
        id: 'CLM-GEO-016-03',
        statement: 'Tropical cyclones are intense non-frontal warm-core cyclonic vortices that develop exclusively over tropical oceans under mandatory thermodynamic and dynamic thresholds: sea surface temperature (SST) ≥ 27°C, sufficient Coriolis force (absent within 0°–5° of the Equator), low vertical wind shear (< 10 m/s between surface and upper troposphere), pre-existing low-level cyclonic vorticity, and upper-tropospheric divergence.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NCERT Class XI Fundamentals of Physical Geography, Chapter 10: Atmospheric Circulation and Weather Systems, Section: Tropical Cyclones, pp. 93-94',
        excerpt: 'Tropical cyclones are violent storms that originate over oceans in tropical areas and move on to the coastal areas... The conditions favourable for the formation and intensification of tropical storms are: (i) Large sea surface with temperature higher than 27° C; (ii) Presence of the Coriolis force; (iii) Small variations in the vertical wind speed; (iv) A pre-existing weak low-pressure area; (v) Upper divergence above the sea level system.'
      },
      {
        id: 'CLM-GEO-016-04',
        statement: 'The structural anatomy of a mature tropical cyclone features an Eye (calm, precipitation-free central core of 10–30 km diameter with adiabatically descending warm air), encircled by the Eyewall (a towering ring of cumulonimbus clouds generating the storm\'s maximum torrential rains and peak tangential winds), flanked by spiraling feeder rainbands; its principal energy engine is the latent heat of condensation released by rising maritime moisture, collapsing rapidly upon landfall due to moisture cutoff and surface friction.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NCERT Class XI Fundamentals of Physical Geography, Chapter 10: Atmospheric Circulation and Weather Systems, Section: Structure of Tropical Cyclone, pp. 94-95',
        excerpt: 'A mature tropical cyclone is characterised by the strong spirally circulating wind around the centre which is called the eye. The diameter of the circulating system can vary between 150 and 250 km. The eye is a region of calm with subsiding air. Around the eye is the eye wall, where there is a strong spiralling ascent of air to greater height reaching the tropopause. The wind reaches maximum velocity in this region, as high as 250 km per hour.'
      }
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Atmospheric Heat Engines: The Cosmic Battles of Cold and Warm Air',
        body: 'Imagine two massive fluid armies colliding on a planetary battlefield. Cold polar air is dense, heavy, and aggressive; warm tropical air is buoyant, moisture-laden, and energetic.\n\nWhen they collide in the mid-latitudes, they do not simply mix like water and milk. Because of their differing densities, the cold air acts as a wedge, forcing the warm air upward into spiraling cloud shields. This birth of a boundary is **frontogenesis**, which powers the mid-latitude **extra-tropical cyclones** that bring winter rain to Europe and the Western Disturbances to northern India.\n\nBy contrast, deep in the tropical oceans, there are no fronts. Instead, the ocean itself acts as a colossal steam boiler. When the sea surface heats past **27°C**, millions of tons of seawater evaporate every second. As this vapor rises and condenses, it releases staggering amounts of **latent heat**—equivalent to hundreds of thermonuclear explosions per day! This latent heat fuels the towering storm walls of a **tropical cyclone** (known as hurricanes in the Atlantic, typhoons in the Pacific, and cyclones in the Indian Ocean).',
        order: 1
      },
      {
        type: 'CORE_IDEA',
        title: 'Extra-Tropical vs Tropical Cyclones & Frontal Evolution Matrix',
        body: '### Systematic Comparison: Extra-Tropical vs Tropical Cyclones (NCERT Class XI)\n\n| Parameter | Extra-Tropical (Mid-Latitude) Cyclone | Tropical Cyclone |\n| :--- | :--- | :--- | \n| **Latitudinal Zone** | Mid and high latitudes (**35° to 65° N and S**). | Low latitudes between the Tropics of Cancer and Capricorn (**5° to 25° N and S**; absent at 0°–5°). |\n| **Energy Source** | **Baroclinic instability**: Conversion of potential energy into kinetic energy across sharp thermal fronts. | **Latent heat of condensation** released by ocean moisture evaporation. |\n| **Frontal System** | **Distinct fronts present** (Cold front, Warm front, Occluded front). | **Completely non-frontal**; homogenous warm-core marine system. |\n| **Thermal Core** | **Cold-core system** (surrounded by cold tropospheric air aloft). | **Warm-core system** (central eye is significantly warmer than surrounding air). |\n| **Surface Underlying** | Develops over **both land and oceans**. | Develops **strictly over warm oceans** (SST ≥ 27°C); rapidly dissipates over land. |\n| **Steering Motion** | Guided by upper-level **Westerlies** (moves from **West to East**). | Guided by tropical **Easterlies** (moves generally from **East to West**, curving poleward). |\n| **Spatial Diameter** | Colossal: **1,000 to 2,000 km across**. | Compact: **150 to 500 km across** (with extreme wind gradients). |\n| **Central Eye** | No calm eye; center is stormy with low pressure. | **Distinct calm Eye** (10–30 km diameter) with clear skies and descending air. |\n| **Indian Significance** | Manifests as **Western Disturbances** causing winter rain in Punjab/Haryana and snowfall in Jammu & Kashmir. | Striking the Bay of Bengal and Arabian Sea coasts (Odisha, Andhra Pradesh, Tamil Nadu, Gujarat). |',
        order: 2
      },
      {
        type: 'MECHANISM',
        title: 'The Thermodynamic Engine of Tropical Cyclones & Storm Surge Physics',
        body: '### 1. The Five Genesis Criteria (Gray\'s Thermodynamic Recipe)\n1. **Thermal Floor:** Sea Surface Temperature (SST) $\\ge 27^\\circ\\text{C}$ down to an oceanic depth of at least 50 meters, providing an unexhausted thermal reservoir.\n2. **Planetary Vorticity:** Sufficient **Coriolis force** ($f = 2\\Omega \\sin\\phi$). Because $f = 0$ at the Equator ($\\phi = 0^\\circ$), cyclonic rotation cannot initiate between **0° and 5° latitude**. Tropical cyclones never form at the Equator!\n3. **Low Vertical Wind Shear:** The difference in horizontal wind between the surface and upper troposphere must be $< 10\\text{ m/s}$. High shear rips the vertical convective column apart, suffocating the storm.\n4. **Mid-Tropospheric Moisture:** High relative humidity (~60–70% at 500 hPa) prevents entrainment of dry air that would evaporate convective updrafts.\n5. **Upper-Level Divergence:** Strong divergent outflow at the 200 hPa level (tropopause) that evacuates air faster than surface convergence pumps it in, driving surface pressure down into a deep vacuum.\n\n### 2. Storm Surge Hydrodynamics\n* **Definition:** An abnormal rise in coastal sea levels generated by a cyclone over and above the astronomical tide.\n* **Physical Mechanics:**\n  * **Inverted Barometer Effect:** Every 1 hPa drop in central atmospheric pressure causes local sea level to rise by approximately **1 cm** ($h = \\Delta P / \\rho g$).\n  * **Wind Stress Pile-Up:** Sustained hurricane-force winds drag huge volumes of surface water toward the shallow continental shelf, where friction prevents return flow, piling water up onto land.\n  * **Bathymetric Funneling:** Shallow coastal waters and funnel-shaped bays (such as the **Bay of Bengal at the Odisha-Bengal delta**) amplify storm surge heights to catastrophic levels (up to 7–10 meters during the 1999 Odisha Super Cyclone).',
        order: 3
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Frequency Examiner Traps & IMD Cyclone Classification Matrix',
        body: '### 1. High-Frequency Traps & Misconceptions\n\n* **Trap 1: Cyclones at the Equator.**\n  * *Trap Question:* "Tropical cyclones frequently originate along the Equator due to maximum solar insolation."\n  * *Correct Fact:* **Completely False.** Although solar insolation and SST are high, the **Coriolis force is zero at the Equator**, making it physically impossible for inflowing air to deflect into a rotational vortex. Cyclones require at least 5° of latitude to spin.\n* **Trap 2: Direction of Cyclonic Rotation.**\n  * *Northern Hemisphere:* Air deflects to the right (Coriolis) -> spirals **Counter-Clockwise (Anticlockwise)** into low pressure.\n  * *Southern Hemisphere:* Air deflects to the left (Coriolis) -> spirals **Clockwise** into low pressure.\n  * *Note:* Anticyclones (high pressure) rotate in the exact opposite directions!\n* **Trap 3: Direction of Movement (Steering).**\n  * *Extra-tropical Cyclones:* Move from **West to East** (steered by mid-latitude Westerlies).\n  * *Tropical Cyclones:* Move from **East to West** (steered by trade Easterlies), often recurving northeastward upon hitting sub-tropical ridges.\n\n---\n\n### 2. India Meteorological Department (IMD) Cyclone Intensity Scale\n\n| Classification Category | Maximum Sustained Surface Wind Speed (knots / km/h) | Pressure Deficit & Coastal Threat Level |\n| :--- | :--- | :--- |\n| **Low Pressure Area** | $< 17\\text{ knots}$ ($< 31\\text{ km/h}$) | Incipient circulation. |\n| **Depression** | $17 - 27\\text{ knots}$ ($31 - 49\\text{ km/h}$) | Minor coastal disturbance. |\n| **Deep Depression** | $28 - 33\\text{ knots}$ ($50 - 61\\text{ km/h}$) | Heavy localized rains. |\n| **Cyclonic Storm** | $34 - 47\\text{ knots}$ ($62 - 88\\text{ km/h}$) | Storm officially named; gale winds. |\n| **Severe Cyclonic Storm (SCS)** | $48 - 63\\text{ knots}$ ($89 - 117\\text{ km/h}$) | Uproots trees; minor structural damage. |\n| **Very Severe Cyclonic Storm (VSCS)** | $64 - 89\\text{ knots}$ ($118 - 166\\text{ km/h}$) | Hurricane equivalent (Category 1–2); storm surges. |\n| **Extremely Severe Cyclonic Storm (ESCS)** | $90 - 119\\text{ knots}$ ($167 - 221\\text{ km/h}$) | Devastating damage (Category 3–4); major storm surges. |\n| **Super Cyclonic Storm (SuCS)** | $\\ge 120\\text{ knots}$ ($\\ge 222\\text{ km/h}$) | Total destruction (Category 5; e.g., 1999 Odisha Super Cyclone, Amphan 2020). |',
        order: 4
      },
      {
        type: 'MAP_PERSPECTIVE',
        title: 'Spatial Trajectories: Bay of Bengal vs Arabian Sea & The Western Disturbance Path',
        body: '### The North Indian Ocean Cyclonic Corridors\n\n>                      [NORTHWESTERN JET STREAM PATH]\n>         * Western Disturbances from Mediterranean -> Iran ->\n>           crosses Indus -> brings winter rain to Punjab/Himalayas\n>                                 |\n>                                 v\n>         ~~~~~~~~~~~~~~~~ Indian Landmass ~~~~~~~~~~~~~~~~\n>        |                                                |\n>  [ARABIAN SEA]                                   [BAY OF BENGAL]\n>  * Historically fewer cyclones (1:4 ratio)        * World\'s primary cyclone death trap\n>  * Cooler SST, high vertical shear               * Warmer SST (> 28°C), low shear,\n>  * Rising frequency due to climate                 concave bathymetric funneling\n>    warming (e.g., Tauktae, Biparjoy)             * Pre-monsoon (May) & Post-monsoon (Oct–Nov)\n>  * East-to-West tracks (Oman/Gujarat)            * Strikes Odisha, Andhra, Bengal, Bangladesh\n\n### Strategic Geographic Realities (NCERT Class XI)\n1. **The 4:1 Asymmetry:** The Bay of Bengal witnesses approximately 4 times more cyclones than the Arabian Sea due to higher SSTs, constant moisture influx from the South China Sea / Pacific through the Malacca strait, and stagnant warm surface waters.\n2. **The Funneling Bay of Bengal Coast:** The shallow head of the Bay of Bengal, backed by the sprawling mangrove delta of the Sundarbans, produces the highest storm surges on Earth, acting as an oceanic amphitheatre that traps rushing waters during post-monsoon cyclones.',
        order: 5
      }
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — Physical Geography / Climatology & Cyclones',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        notes: 'Cold vs Warm front cross-sections, Tropical vs Extra-tropical cyclone comparisons, and Bay of Bengal vs Arabian Sea cyclogenesis are top-tier UPSC Prelims and Mains essay questions.'
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — Physical Geography & Weather Phenomena',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        notes: 'Frequent 5-mark questions on Western Disturbances (Mawat rainfall) and tropical cyclone structure.'
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Physical Geography & Cyclones',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        notes: 'Tested on Coriolis force requirement (absent at equator), Eye of cyclone features, and naming authorities.'
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'General Science & Environment — Disasters & Meteorology',
        relevance: 'CORE_SYLLABUS',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        notes: 'Disaster management aspects: Storm surges, IMD warning color codes (Green, Yellow, Orange, Red), and NDRF protocols.'
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Climate Events & Disasters',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        notes: 'Current affairs questions on major named cyclones affecting Indian coasts.'
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — Static Geography & Current Disasters',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        notes: 'Recent cyclones and their names in the Arabian Sea / Bay of Bengal.'
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Environmental & Climate Risk',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        notes: 'Physical climate risk and economic loss assessments from severe weather events.'
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Economic Environment — Agricultural Risk & Insurance',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        notes: 'Crop loss risks, PM Fasal Bima Yojana, and cyclone-induced agricultural credit shocks.'
      }
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Fronts: Cold (steep, cumulonimbus), Warm (gentle, nimbostratus), Occluded (cold overtakes warm). Cyclones: Extra-tropical = 35°–65°, frontal, cold core, moves W to E. Tropical = 5°–25°, non-frontal, warm core, SST ≥ 27°C, low shear, latent heat engine, calm Eye, eyewall max winds, absent 0°–5° (zero Coriolis). Bay of Bengal:Arabian Sea ratio = 4:1.',
        order: 1
      },
      {
        type: 'SUMMARY_2M',
        content: 'Atmospheric Disturbances Blueprint: 1) Frontogenesis: Boundary zones between conflicting air masses. Cold front creates abrupt convective storms; Warm front generates widespread stratiform rains. 2) Extra-Tropical Cyclones: Polar front baroclinic waves in mid-latitudes steered east by westerlies over land and sea. 3) Tropical Cyclones: Non-frontal warm-core marine vortices requiring SST ≥ 27°C, Coriolis force (> 5° latitude), and low shear. Central Eye is calm and warm with subsiding air; Eyewall has maximum tangential winds and torrential rain. 4) Storm Surges: Inverted barometer effect plus sustained onshore wind pile-up on shallow shelves (Bay of Bengal is world apex).',
        order: 2
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Vortex Thermodynamics & Structural Architecture: 1) Thermal Energy Pipeline: Ocean surface evaporation -> latent heat release at condensation level -> vertical air acceleration -> surface central pressure drop. 2) Kinematic Dynamics: Inflowing air deflected by Coriolis force -> conservation of angular momentum accelerates tangential winds near the center -> centrifugal and PGF balance form the Eyewall. 3) Boundary Termination: Landfall cuts off maritime moisture and increases surface friction, rapidly collapsing the storm into a rain depression.',
        order: 3
      }
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Why do tropical cyclones NEVER originate in the equatorial oceanic belt between 0° and 5° North and South latitudes, despite sea surface temperatures being well above 27°C throughout the year?',
        options: [
          'Because atmospheric humidity in the Inter-Tropical Convergence Zone (ITCZ) is too low to support convection',
          'Because the Coriolis force is zero at the Equator, preventing inflowing winds from deflecting into a rotating cyclonic vortex',
          'Because the trade winds blow too vigorously along the Equator, creating extreme vertical wind shear',
          'Because oceanic salinity at the Equator prevents sufficient evaporation'
        ],
        correctAnswer: 'Because the Coriolis force is zero at the Equator, preventing inflowing winds from deflecting into a rotating cyclonic vortex',
        explanation: 'The Coriolis parameter is given by f = 2*Omega*sin(latitude). At the Equator (latitude = 0°), sin(0) = 0, meaning the Coriolis force is completely zero. Without Coriolis deflection, air rushing toward a low pressure center flows straight into the center, instantly filling and neutralizing the pressure deficit without initiating rotary circulation.',
        trapExplanation: 'Candidates often think the ITCZ lacks humidity or that trade winds are too strong; the sole physical barrier is the mathematical vanishing of the Coriolis force at zero latitude.',
        difficulty: 'MEDIUM',
        isPYQ: true
      },
      {
        type: 'APPLIED_SCENARIO',
        stem: 'Consider the following statements regarding the structural differences between Extra-Tropical (Mid-Latitude) Cyclones and Tropical Cyclones according to NCERT Class XI Chapter 10:\n1. Extra-tropical cyclones possess a well-defined system of frontal boundaries, whereas tropical cyclones are completely non-frontal.\n2. Extra-tropical cyclones can originate over both land and sea, whereas tropical cyclones develop exclusively over warm oceans.\n3. Extra-tropical cyclones move generally from east to west under trade wind influence, whereas tropical cyclones move from west to east steered by westerlies.\nWhich of the statements given above are CORRECT?',
        options: [
          '1 and 2 only',
          '2 and 3 only',
          '1 and 3 only',
          '1, 2, and 3'
        ],
        correctAnswer: '1 and 2 only',
        explanation: 'Statements 1 and 2 are correct: Extra-tropical cyclones originate from polar front wave instability (possessing cold and warm fronts) and form over both land and sea. Tropical cyclones are non-frontal warm-core marine systems. Statement 3 is INCORRECT because the movement directions are inverted: Extra-tropical cyclones move from WEST TO EAST (steered by mid-latitude Westerlies), while Tropical cyclones move generally from EAST TO WEST (steered by tropical Easterly trade winds).',
        trapExplanation: 'Statement 3 swaps the steering directions of the two storm types—a classic UPSC Prelims trap.',
        difficulty: 'HARD',
        isPYQ: true
      }
    ]
  },

  // =========================================================================
  // CON-GEO-017: Köppen's Climate Classification & Indian Climatic Regions
  // =========================================================================
  {
    id: 'CON-GEO-017',
    topicOrder: 2,
    topicSlug: 'climatology-and-atmospheric-systems',
    topicTitle: 'Climatology & Atmospheric Systems',
    topicDescription: 'Atmospheric circulation, pressure belts, jet streams, monsoon dynamics, frontogenesis, and cyclonic systems.',
    slug: 'global-climatic-classification-koppen-empirical-system-and-india-climatic-regions',
    title: 'Global Climatic Classification: Köppen\'s Empirical System, World Biome Correlations & India\'s Climatic Taxonomy',
    shortDefinition: 'Authoritative NCERT Class XI Fundamentals of Physical Geography (Chapter 12) & India Physical Environment (Chapter 4) synthesis: Wladimir Köppen\'s quantitative empirical scheme of climate classification based on mean annual and monthly temperature and precipitation thresholds correlated with natural vegetation boundaries; five major thermal groups (A, C, D, E) and one moisture-deficit group (B), supplemented by highland climates (H); second- and third-letter seasonality codes (f, m, w, s; h, k; a, b, c, d); and the comprehensive regional mapping of Köppen\'s climatic types across the Indian subcontinent (Amw, As, Aw, BShw, BWhw, Cwg, Dfc, ET).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-GEO-017-01',
        statement: 'Wladimir Köppen\'s climate classification (1918, refined in 1936) is an empirical, quantitative system that uses mean monthly and annual temperature and precipitation data as proxy thresholds reflecting Candolle\'s world natural vegetation zones, designating five major temperature-based groups (A: Tropical moist, C: Warm temperate/mid-latitude mild winter, D: Cold snow-forest/severe winter, E: Polar) and one moisture-deficient group (B: Dry climates).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NCERT Class XI Fundamentals of Physical Geography, Chapter 12: World Climate and Climate Change, Section: Koeppen\'s Scheme of Classification of Climate, pp. 102-104',
        excerpt: 'The most widely used classification of climate is the empirical climate classification scheme developed by V. Koeppen (1918)... He selected certain values of temperature and precipitation and related them to the distribution of vegetation and used these values for classifying the climates... Koeppen recognized five major climatic groups, four of them are based on temperature and one on precipitation.'
      },
      {
        id: 'CLM-GEO-017-02',
        statement: 'Köppen\'s sub-classifications use lower-case letters to indicate precipitation seasonality: \'f\' (fehlt — no dry season / precipitation in all months), \'m\' (monsoon climate with short dry season), \'w\' (dry season in winter / trocken winter), and \'s\' (dry season in summer / trocken sommer); for Group B (Dry), capital letters designate \'S\' for semi-arid steppe and \'W\' for hyper-arid desert (Wüste), with temperature suffixes \'h\' for hot subtropical (annual mean temp > 18°C) and \'k\' for cold mid-latitude (annual mean temp < 18°C).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NCERT Class XI Fundamentals of Physical Geography, Chapter 12: World Climate and Climate Change, Table 12.1: Climatic Groups According to Koeppen, p. 103',
        excerpt: 'The capital letters: A, C, D and E delineate humid climates and B dry climates... The climatic groups are subdivided into types, designated by small letters, based on seasonality of precipitation and characteristics of temperature. The seasons of dryness are indicated by the small letters : f, m, w and s... The B-Dry climates are subdivided using the capital letters S for semi-arid or steppe and W for arid or desert.'
      },
      {
        id: 'CLM-GEO-017-03',
        statement: 'According to NCERT India: Physical Environment, Köppen divided India into eight distinct climatic regions: (1) Amw (Monsoon with short dry winter along Western Coastal plain south of Goa); (2) As (Monsoon with dry summer along the Coromandel Coast of Tamil Nadu); (3) Aw (Tropical Savanna across the Peninsular plateau south of Tropic of Cancer); (4) BShw (Semi-arid steppe fringe in western Rajasthan, north Gujarat, and rain-shadow Deccan); (5) BWhw (Hot desert climate of western Thar); (6) Cwg (Monsoon with dry winter and Gangetic temperature curve across the northern plains); (7) Dfc (Cold humid winter with short summer in Arunachal Pradesh); and (8) ET (Tundra climate in the high Himalayas of Ladakh and Kashmir).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NCERT Class XI India: Physical Environment, Chapter 4: Climate, Section: Koeppen\'s Climatic Scheme & Table 4.1: Climatic Regions of India According to Koeppen\'s Scheme, pp. 43-45',
        excerpt: 'Koeppen based his scheme of climatic classification on monthly values of temperature and precipitation... He classified India into eight climatic regions: Amw (Monsoon type with short dry winter); As (Monsoon type with dry season in high sun period / summer); Aw (Tropical savannah); BWhw (Extreme arid); BShw (Semi-arid steppe); Cwg (Monsoon type with dry winter); Dfc (Cold, humid winter with short summer); ET (Tundra type).'
      }
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Decoding Nature\'s Climate Alphabet: Why Plants Do Not Lie',
        body: 'If you want to map Earth\'s climates, you could install millions of weather thermometers, or you could simply look at the trees.\n\nRussian-German climatologist **Wladimir Köppen** realized in 1918 that plants are living climate instruments: a cactus cannot survive in a rainforest, and an evergreen rubber tree cannot survive in the desert. Because vegetation boundaries correspond neatly to specific combinations of annual warmth and seasonal rain, Köppen used simple monthly temperature and rainfall cutoffs to create a universal climate alphabet:\n\n* **A (Tropical):** Never gets cold (all 12 months average $> 18^\\circ\\text{C}$). Home to palms, orchids, and rain forests.\n* **B (Dry):** Evaporation exceeds precipitation ($E > P$). Home to xerophytes and cacti.\n* **C (Mild Temperate):** Mild winters (coldest month between $-3^\\circ\\text{C}$ and $18^\\circ\\text{C}$). Home to Mediterranean olives and deciduos forests.\n* **D (Snow / Boreal):** Severe freezing winters (coldest month $< -3^\\circ\\text{C}$, warmest month $> 10^\\circ\\text{C}$). Home to coniferous taiga pines.\n* **E (Polar):** Never gets warm (warmest month $< 10^\\circ\\text{C}$). Home to lichens, mosses, and permanent ice.',
        order: 1
      },
      {
        type: 'CORE_IDEA',
        title: 'Köppen\'s 5 Major Thermal Groups & Secondary Letter Codes',
        body: '### 1. Major Climatic Groups (NCERT Class XI Chapter 12)\n\n| Group | Classification Category | Defining Quantitative Temperature & Moisture Criteria |\n| :--- | :--- | :--- |\n| **A** | **Tropical Moist Climates** | Average temperature of **every single month is $\\ge 18^\\circ\\text{C}$**; no winter season. |\n| **B** | **Dry Climates** | Potential **evaporation exceeds annual precipitation** ($E > P$); no thermal criteria. |\n| **C** | **Warm Temperate (Mild Winter)** | Coldest month mean temperature is **between $-3^\\circ\\text{C}$ and $18^\\circ\\text{C}$**; warmest month $> 10^\\circ\\text{C}$. |\n| **D** | **Cold Snow-Forest (Severe Winter)** | Coldest month mean temperature is **below $-3^\\circ\\text{C}$**; warmest month $> 10^\\circ\\text{C}$. |\n| **E** | **Polar Climates** | Average temperature of the **warmest month is below $10^\\circ\\text{C}$**; true tree-less arctic. |\n| **H** | **Highland Climates** | Mountain topography where elevation creates micro-climates; added later to represent vertical zonation. |\n\n---\n\n### 2. Precipitation Seasonality Letter Symbols (Second Letter)\n* **f (*fehlt*):** No dry season; rainfall distributed evenly throughout the year (e.g., Af = Tropical wet rainforest; Cf = Humid subtropical).\n* **m (*Monsoon*):** Heavy monsoonal rains with a short dry season (e.g., Am = Tropical monsoon).\n* **w (*trocken Winter*):** Dry season in **winter**; heavy rains during high-sun summer period (e.g., Aw = Tropical savanna; Cw = Gangetic plains).\n* **s (*trocken Sommer*):** Dry season in **summer**; rain falls during mild winter (e.g., Cs = Mediterranean climate; As = Coromandel coast).\n\n### 3. Dry Climate Subdivision Symbols (Group B)\n* **S (*Steppe*):** Semi-arid grassland (receives 50%–100% of threshold precipitation).\n* **W (*Wüste* / Desert):** True arid desert (receives $< 50\\%$ of threshold precipitation).\n* **h (*heiss*):** Hot arid climate (mean annual temperature $\\ge 18^\\circ\\text{C}$).\n* **k (*kalt*):** Cold arid climate (mean annual temperature $< 18^\\circ\\text{C}$; e.g., Ladakh, Gobi).',
        order: 2
      },
      {
        type: 'MECHANISM',
        title: 'Köppen\'s India Climatic Taxonomy: The Eight Benchmark Regions',
        body: '### The Eight Köppen Regions of India (NCERT Class XI India: Physical Environment)\n\n| Köppen Code | Descriptive Climatic Type | Precise Geographic Coverage in India | Dominant Vegetative & Rainfall Signature |\n| :--- | :--- | :--- | :--- |\n| **Amw** | **Monsoon with short dry winter** | Western Coastal plain (Konkan, Malabar south of Goa); southern Tripura. | Over $200\\text{ cm}$ rainfall delivered by SW monsoon; dense Tropical Wet Evergreen forests. |\n| **As** | **Monsoon with dry summer** | **Coromandel Coast of Tamil Nadu** and coastal Andhra Pradesh. | Summer is dry; receives **retreating NE monsoon winter rains** (October–December); Tropical dry evergreen. |\n| **Aw** | **Tropical Savanna** | Most of the **Peninsular Plateau** south of Tropic of Cancer (Maharashtra, Telangana, Karnataka interior). | $75 - 150\\text{ cm}$ summer rainfall; pronounced winter dry season; Tropical deciduous forests. |\n| **BShw** | **Semi-Arid Steppe (Hot)** | Northwestern Gujarat, southwestern Haryana/Punjab, central Rajasthan, and the rain-shadow interior of the Western Ghats. | $30 - 60\\text{ cm}$ precarious summer rain; thorn scrub, drought-resistant grasses (*Sevan*), acacia. |\n| **BWhw** | **Hot Desert Climate** | **Western extreme Rajasthan** (Jaisalmer, Bikaner, Barmer, Thar desert). | $< 30\\text{ cm}$ erratic rain; intense summer heat ($> 45^\\circ\\text{C}$); sand dunes, xerophytic scrub. |\n| **Cwg** | **Monsoon with dry winter & Gangetic curve** | **Indo-Gangetic Plains** (Punjab, Haryana, Uttar Pradesh, Bihar, northern West Bengal, MP). | Summer monsoon rain; dry winter; **\'g\' denotes Gangetic temperature curve** (warmest month occurs *before* summer solstice rains in May/June). |\n| **Dfc** | **Cold humid winter with short summer** | **Arunachal Pradesh** and northern Sikkim. | Severe winter cold; short, cool summer; \'c\' denotes $< 4$ months above $10^\\circ\\text{C}$; temperate coniferous forests. |\n| **ET** | **Tundra Climate** | High Himalayas of **Ladakh, Kashmir, and northern Himachal Pradesh**. | Warmest month temperature is between $0^\\circ\\text{C}$ and $10^\\circ\\text{C}$; alpine pastures (*Marg/Bugyal*), lichens, permafrost. |',
        order: 3
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Frequency Examiner Traps & Köppen Notation Pitfalls',
        body: '### 1. High-Frequency Traps & Misconceptions\n\n* **Trap 1: The Coromandel Coast Code (As vs Aw).**\n  * *Trap Question:* "Tamil Nadu\'s coastal plain is classified under Köppen\'s system as Aw (Tropical Savanna with dry winter)." \n  * *Correct Fact:* **Incorrect.** It is classified as **As** (*Monsoon with dry summer*). Because the Coromandel coast lies in the rain-shadow of the Western Ghats during the summer SW monsoon and receives its peak rain from the retreating NE monsoon in **winter (Oct–Dec)**, its summer is dry (\'s\')!\n* **Trap 2: The Meaning of the Lowercase \'g\' in Cwg.**\n  * *Trap Question:* "In the code Cwg for the northern plains, what does \'g\' stand for?"\n  * *Correct Fact:* **\'g\' stands for Gangetic temperature trend**—meaning the hottest month of the year occurs in May/June *before* the summer rains, rather than in July after the solstice.\n* **Trap 3: Mediterranean Climate Notation.**\n  * *Examiner Trap:* Mediterranean climate is represented by **Cs** (mild moist winter, dry hot summer). Candidates often confuse it with Cw (dry winter).\n* **Trap 4: Group B Separation.**\n  * *Examiner Trap:* Is Group B defined by temperature?\n  * *Correct Fact:* **No.** Groups A, C, D, and E are defined by temperature thresholds. **Group B is defined strictly by precipitation deficiency** ($P < \\text{Evaporation threshold}$).',
        order: 4
      },
      {
        type: 'MAP_PERSPECTIVE',
        title: 'Climatic Cartography: India\'s Eight Climatic Zones Across Latitudes and Orography',
        body: '### Spatial Distribution of Köppen\'s Eight Climatic Regions in India\n\n>                        [ET: TUNDRA / HIGH HIMALAYAS]\n>                        (Ladakh, Kashmir, Spiti peaks)\n>                                     |\n>                   [Dfc: COLD HUMID WINTER, SHORT SUMMER]\n>                        (Arunachal Pradesh, Sikkim)\n>                                     |\n>        [BWhw: HOT DESERT]                  [Cwg: DRY WINTER, GANGETIC CURVE]\n>        (Thar / Jaisalmer)                  (Punjab, Haryana, UP, Bihar, WB)\n>                 \\                                         /\n>                  v                                       v\n>        [BShw: SEMI-ARID STEPPE]              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n>        (NW Gujarat, E Rajasthan)             [TROPIC OF CANCER: 23°30\' N]\n>                 \\                                         /\n>                  v                                       v\n>         [Amw: WEST COAST MONSOON]           [Aw: TROPICAL SAVANNA]\n>         (Konkan & Malabar coasts)           (Peninsular Plateau, Deccan interior)\n>                                                           |\n>                                                           v\n>                                              [As: DRY SUMMER / COROMANDEL]\n>                                              (Coastal Tamil Nadu & Andhra)\n\n### Strategic Geographic Realities (NCERT Class XI India: Physical Environment)\n1. **The Great Dividing Line (Tropic of Cancer):** Climatically bifurcates India into the subtropical/temperate north (Cwg, BShw, Dfc) and the tropical south (Aw, Amw, As).\n2. **The Western Ghats Orographic Barrier:** Causes the dramatic juxtaposition between the dripping wet **Amw** strip on the windward coast (> 300 cm rain) and the parched **BShw** rain-shadow steppe in the interior Karnataka/Maharashtra plateau just 100 km to the east.',
        order: 5
      }
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — Physical Geography & World Climatic Classification',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        notes: 'Köppen letter codes, Coromandel coast As classification, and Cwg Gangetic temperature curves are tested in UPSC Prelims with extreme frequency.'
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — Physical Geography & Rajasthan Climate Schemes',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        notes: 'Köppen\'s 4-fold division of Rajasthan (BWhw, BShw, Cwg, Aw) is an almost mandatory 5-mark question in RPSC RAS Mains.'
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Physical Geography & World Climate',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        notes: 'Tested on Köppen capital letter groups (A, B, C, D, E) and Coromandel coast dry summer.'
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'General Science & Environment — Ecosystems & Biomes',
        relevance: 'CORE_SYLLABUS',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        notes: 'Relationship between Köppen climatic zones and terrestrial biome distributions (rainforests, savannas, taiga, tundra).'
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Climate & Agricultural Zones',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        notes: 'Agro-climatic zoning in India and monsoonal rainfall impacts.'
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — Static Geography',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        notes: 'Static awareness of Indian climatic divisions and rainfall patterns.'
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Macro Geography & Climate Risk',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        notes: 'Monsoon rainfall deviations and agricultural production correlation.'
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Economic Environment — Agrarian Geography',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        notes: 'Agro-ecological zones and their influence on rural banking credit delivery.'
      }
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Köppen: A (Tropical > 18°C all months), B (Dry, Evap > Precip), C (Mild winter -3° to 18°C), D (Cold winter < -3°C), E (Polar < 10°C). Letters: f = no dry season, m = monsoon, w = dry winter, s = dry summer. India: Amw (West coast), As (Coromandel dry summer!), Aw (Peninsular plateau), BWhw (Thar desert), BShw (Steppe fringe), Cwg (Ganga plains, g = hottest before rain), Dfc (Arunachal), ET (Ladakh tundra).',
        order: 1
      },
      {
        type: 'SUMMARY_2M',
        content: 'Köppen\'s Climatic Taxonomy Blueprint: 1) Empirical Foundation: Quantitative temperature and precipitation values chosen to match Candolle\'s natural vegetation boundaries. 2) Five Thermal Groups: A (Tropical), C (Warm temperate), D (Cold snow-forest), E (Polar), plus B (Precipitation-deficient dry). 3) Seasonality Suffixes: f (humid year-round), m (monsoon), w (winter dry), s (summer dry). 4) India\'s 8 Zones: Amw along wet west coast; As along Coromandel coast (dry summer, winter rain); Aw across Peninsular savanna; BShw semi-arid steppe; BWhw western Thar desert; Cwg across northern plains with pre-monsoon heat peak; Dfc in Arunachal; ET in high Himalayas.',
        order: 2
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Quantitative Climate Architecture: 1) Thermal Hierarchy: Mean monthly thresholds dictate group allocation. 2) Aridity Formula: Group B uses empirical formulas linking mean annual temperature and rainfall to account for seasonal evaporation rates. 3) Plant Ecological Coupling: Every Köppen code directly predicts the climax ecosystem (Af -> Tropical Rain Forest; Aw -> Deciduous Savanna; BWh -> Xerophytic desert; Df -> Coniferous Taiga). 4) Orographic & Monsoonal Deviations: Western Ghats rain shadow converts coastal Amw into interior BShw; NE retreating monsoon produces unique peninsular As anomaly.',
        order: 3
      }
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under Wladimir Köppen\'s climatic classification of India, which of the following regions is uniquely designated as "As" (Monsoon type with dry summer), receiving the bulk of its precipitation during the winter months?',
        options: [
          'The Malabar Coast of Kerala',
          'The Coromandel Coast of Tamil Nadu',
          'The Konkan Coast of Maharashtra',
          'The Northern Circars of Odisha'
        ],
        correctAnswer: 'The Coromandel Coast of Tamil Nadu',
        explanation: 'The Coromandel Coast of Tamil Nadu lies in the rain-shadow of the Western Ghats during the southwest summer monsoon (June–September) and receives very little rain. However, during October–December, the retreating northeast monsoon picks up moisture over the Bay of Bengal and strikes the Coromandel coast, causing heavy rainfall. Thus, its high-sun summer season is dry (\'s\'), earning it the unique designation "As".',
        trapExplanation: 'Candidates routinely choose Malabar or Konkan, which are "Amw" (wet summer, short dry winter).',
        difficulty: 'MEDIUM',
        isPYQ: true
      },
      {
        type: 'APPLIED_SCENARIO',
        stem: 'In Köppen\'s climatic code "Cwg", which describes the climate of the vast Indo-Gangetic Plains of northern India, what does the lowercase letter "g" specifically designate according to NCERT Class XI Chapter 4?',
        options: [
          'Gangetic alluvial soil presence with perennial groundwater',
          'Gangetic temperature trend where the hottest month of the year occurs prior to the summer solstice rains',
          'Glacial meltwater runoff feeding perennial drainage networks',
          'Grassland savanna vegetation intermediate between desert and forest'
        ],
        correctAnswer: 'Gangetic temperature trend where the hottest month of the year occurs prior to the summer solstice rains',
        explanation: 'In Köppen\'s taxonomy, the letter \'g\' designates the "Ganges type of temperature curve", in which the warmest month of the year occurs in May or June, just BEFORE the arrival of the summer monsoon rains, rather than in July following the summer solstice.',
        trapExplanation: 'Assuming \'g\' refers to soil, geography, or glaciers are common traps; it strictly designates the pre-monsoon temperature curve anomaly.',
        difficulty: 'HARD',
        isPYQ: true
      }
    ]
  },

  // =========================================================================
  // CON-GEO-018: Marine Resources, Coral Reefs & UNCLOS Maritime Zones
  // =========================================================================
  {
    id: 'CON-GEO-018',
    topicOrder: 3,
    topicSlug: 'oceanography-and-marine-hydrosphere',
    topicTitle: 'Oceanography & Marine Hydrosphere',
    topicDescription: 'Ocean relief, temperature-salinity distribution, ocean currents, tides, marine ecosystems, and maritime law.',
    slug: 'marine-resources-coral-reef-geomorphology-and-unclos-maritime-zones',
    title: 'Marine Resources, Coral Reef Geomorphology (Darwin Subsidence & Bleaching) & The UNCLOS Maritime Governance Architecture',
    shortDefinition: 'Authoritative NCERT Class XI Fundamentals of Physical Geography (Chapters 13 & 14) & UNCLOS 1982 synthesis: Oceanic biogeography and maritime geopolitical law: Coral reef geomorphology (Fringing reefs, Barrier reefs, and Atolls; Darwin\'s Subsidence Theory, Daly\'s Glacial Control Theory); zooxanthellae endosymbiosis and thermal bleaching thresholds; abiotic marine resources (Central Indian Ocean Basin polymetallic nodules, marine gas hydrates, offshore hydrocarbons); biotic fisheries; and international maritime zones under the United Nations Convention on the Law of the Sea (UNCLOS 1982: Internal Waters, Territorial Sea up to 12 nm, Contiguous Zone up to 24 nm, Exclusive Economic Zone up to 200 nm, Continental Shelf, and High Seas / International Seabed Authority).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-GEO-018-01',
        statement: 'Coral reefs are biogenic calcium carbonate (CaCO3) structures built by marine cnidarian polyps living in obligate endosymbiosis with photosynthetic dinoflagellate algae (Zooxanthellae); they require strict ecological thresholds: warm water (20°C–28°C), shallow euphotic depths (< 50–60 meters), normal oceanic salinity (27–35‰), clean sediment-free water, and moderate wave aeration.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NCERT Class XI Fundamentals of Physical Geography, Chapter 13: Water (Oceans), Section: Marine Ecosystems & Corals',
        excerpt: 'Coral reefs are formed due to the accumulation and compaction of skeletons of microscopic marine organisms called polyps. The corals can survive only in warm, clear, shallow and saline ocean water. The optimum temperature for their survival is between 20°C and 25°C. They do not survive in cold water or muddy waters.'
      },
      {
        id: 'CLM-GEO-018-02',
        statement: 'Coral reefs evolve through three distinct morphological stages: (1) Fringing Reefs (attached directly to continental or volcanic island shores without an intervening lagoon); (2) Barrier Reefs (separated from land by a wide, deep navigable lagoon, exemplified by the Great Barrier Reef of Australia); and (3) Atolls (circular or horseshoe-shaped annular reefs enclosing a central lagoon without a central island, exemplified by Lakshadweep), formed according to Charles Darwin\'s Subsidence Theory through progressive volcanic island sinking.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NCERT Class XI Fundamentals of Physical Geography, Chapter 13: Water (Oceans), Section: Coral Reefs & Atolls',
        excerpt: 'There are three main types of coral reefs: fringing reef, barrier reef and atoll. A fringing reef is attached to the coast. A barrier reef is separated from the coast by a wide and deep lagoon. An atoll is a ring-shaped reef that encircles a lagoon without an island inside.'
      },
      {
        id: 'CLM-GEO-018-03',
        statement: 'Coral bleaching occurs when sustained sea surface thermal anomalies (> 1°C–2°C above the maximum summer mean for over 4–8 weeks) induce photo-inhibition and oxidative stress, causing polyps to expel their intracellular zooxanthellae, turning the coral white and leading to mass mortality if thermal stress persists.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NCERT Class XI Fundamentals of Physical Geography, Chapter 13: Water (Oceans), Supplementary Environmental Note: Coral Bleaching',
        excerpt: 'When the ocean water temperature increases due to global warming, the corals become stressed and expel the microalgae (zooxanthellae) living in their tissues. Without the algae, the coral loses its color and food supply, exposing the white calcium carbonate skeleton in a phenomenon known as coral bleaching.'
      },
      {
        id: 'CLM-GEO-018-04',
        statement: 'Under the United Nations Convention on the Law of the Sea (UNCLOS 1982), coastal states exercise varying jurisdictional sovereignty across maritime zones measured from straight territorial baselines: Internal Waters (complete sovereignty), Territorial Sea (sovereignty up to 12 nautical miles subject only to innocent passage), Contiguous Zone (customs, fiscal, immigration, and sanitary jurisdiction up to 24 nautical miles), Exclusive Economic Zone (EEZ up to 200 nautical miles with sovereign economic rights over living and non-living resources), and the Continental Shelf (seabed exploitation rights extending up to 350 nautical miles), beyond which lies the High Seas (Common Heritage of Humankind administered by the International Seabed Authority).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'UNCLOS 1982, Parts II, V, VI, and XI & NCERT Class XI Physical Geography Context',
        excerpt: 'The sovereignty of a coastal State extends, beyond its land territory and internal waters, to an adjacent belt of sea, described as the territorial sea (not exceeding 12 nautical miles)... In the exclusive economic zone, which shall not extend beyond 200 nautical miles, the coastal State has sovereign rights for the purpose of exploring and exploiting, conserving and managing the natural resources.'
      }
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Rainforests of the Sea & The Legal Ownership of Ocean Waters',
        body: 'Coral reefs cover less than 0.1% of the ocean floor, yet they harbor over **25% of all marine species**—earning them the title "Rainforests of the Sea".\n\nAt their core, corals are an extraordinary biological partnership. Tiny animal polyps construct limestone apartment buildings, while microscopic algae (**zooxanthellae**) live inside their tissues. The algae pay rent by photosynthesizing sunlight and providing up to 90% of the polyp\'s food, while giving the coral its dazzling colors. But this partnership is fragile: if ocean water warms by even **1°C to 2°C** above normal summer limits, the algae produce toxic reactive oxygen, and the polyp violently ejects them. The coral turns chalk-white—a crisis called **coral bleaching**.\n\nBeyond biological reefs lie massive economic resources: oil, natural gas, and potato-sized **polymetallic nodules** resting in the deep abyssal plains rich in nickel, cobalt, and copper. To prevent global naval wars over who owns these oceanic riches, humanity created the **United Nations Convention on the Law of the Sea (UNCLOS 1982)**—a global constitution dividing the oceans into precise legal zones measured in nautical miles.',
        order: 1
      },
      {
        type: 'CORE_IDEA',
        title: 'Coral Reef Taxonomy, Evolutionary Theories & UNCLOS Maritime Zones Matrix',
        body: '### 1. Coral Reef Morphological Types (NCERT Class XI Chapter 13)\n\n| Reef Type | Structural Definition | Lagoon Characteristics | Global & Indian Examples |\n| :--- | :--- | :--- | :--- |\n| **1. Fringing Reef** | Reef platform directly contiguous with the mainland shore or island coast. | Narrow, shallow boat channel or **no lagoon at all**. | Gulf of Mannar, Palk Bay, Andaman and Nicobar Islands. |\n| **2. Barrier Reef** | Massive linear reef running parallel to the coast, separated by a wide channel. | **Wide, deep, navigable lagoon** (10 to 100 meters deep) between reef and land. | **Great Barrier Reef of Australia** (over 2,000 km long); minor barrier reef in Nicobar. |\n| **3. Atoll** | Circular or oval annular coral ring surrounding a central lagoon with **no central island**. | Enclosed central lagoon, connected to open sea via surge channels and reef passes. | **Lakshadweep Islands** (India); Maldives; Suvadiva Atoll. |\n\n---\n\n### 2. Theories of Coral Reef Formation\n* **Charles Darwin\'s Subsidence Theory (1842):** Proposes a single continuous evolutionary sequence. An oceanic volcanic island emerges -> corals build a **Fringing Reef** along its active shores -> the volcanic island slowly subsides due to lithospheric cooling and isostatic weight -> corals grow upward toward sunlight at the outer edge -> the gap widens into a deep lagoon, transforming it into a **Barrier Reef** -> the volcanic island sinks entirely beneath sea level -> leaves only a ring of coral enclosing a lagoon: an **Atoll**!\n* **Reginald Daly\'s Glacial Control Theory (1915):** Argued that during Pleistocene glacial ages, sea level dropped by ~100 meters, and cold temperatures killed existing corals. Waves planed volcanic islands flat into submarine platforms. During post-glacial warming, rising seas allowed corals to colonize these flat wave-cut platforms, growing upward to form atolls.\n\n---\n\n### 3. UNCLOS 1982 Maritime Zones Hierarchy (From Baseline Outward)\n\n$$\\begin{matrix} \\text{Land} \\\\ \\text{Baseline} \\end{matrix} \\xrightarrow{12\\text{ nm}} \\begin{matrix} \\text{Territorial} \\\\ \\text{Sea} \\end{matrix} \\xrightarrow{24\\text{ nm}} \\begin{matrix} \\text{Contiguous} \\\\ \\text{Zone} \\end{matrix} \\xrightarrow{200\\text{ nm}} \\begin{matrix} \\text{Exclusive Economic} \\\\ \\text{Zone (EEZ)} \\end{matrix} \\xrightarrow{>200\\text{ nm}} \\begin{matrix} \\text{High Seas /} \\\\ \\text{The Area} \\end{matrix}$$',
        order: 2
      },
      {
        type: 'MECHANISM',
        title: 'UNCLOS Legal Rights Spectrum & India\'s Deep Ocean Mission',
        body: '### 1. UNCLOS Legal Regimes by Maritime Zone\n* **Baseline:** The low-water line along the coast. All waters landward of the baseline are **Internal Waters** (complete national sovereignty; no right of innocent passage).\n* **Territorial Sea (0 to 12 nautical miles; $1\\text{ nm} = 1.852\\text{ km}$):**\n  * Coastal state exercises **complete sovereignty** over airspace, sea surface, water column, and seabed.\n  * Foreign commercial ships enjoy the statutory right of **Innocent Passage** (continuous, expeditious transit that is not prejudicial to coastal peace/security; submarines must navigate on surface and show flag).\n* **Contiguous Zone (12 to 24 nautical miles):**\n  * Coastal state does not have full sovereignty, but exercises **limited administrative jurisdiction** to prevent and punish violations of its customs, fiscal, immigration, and sanitary (quarantine) laws.\n* **Exclusive Economic Zone (EEZ: 12 to 200 nautical miles):**\n  * Coastal state enjoys **sovereign economic rights** to explore, exploit, conserve, and manage living (fisheries) and non-living (oil, gas, minerals) natural resources in the water column and seabed.\n  * Foreign states enjoy freedom of navigation, overflight, and laying of submarine cables and pipelines.\n* **Continental Shelf (up to 200–350 nautical miles):**\n  * Sovereign rights over seabed minerals and sedentary living species (clams, crabs); if continental margin extends beyond 200 nm, rights can be claimed up to **350 nm** upon submitting seismic proof to the UN Commission on the Limits of the Continental Shelf (CLCS).\n* **High Seas / The Area (Beyond National Jurisdiction):**\n  * Common heritage of humankind. Deep-sea mineral mining is governed by the **International Seabed Authority (ISA)** in Kingston, Jamaica.\n\n### 2. India\'s Deep Ocean Mission & Polymetallic Nodules\n* The ISA allocated a pioneer exploration area of **75,000 sq km** to India in the **Central Indian Ocean Basin (CIOB)** for polymetallic nodules (manganese, nickel, copper, and cobalt).\n* India launched the **Deep Ocean Mission** (Ministry of Earth Sciences) featuring **Matsya 6000**, an indigenous human-submersible designed to carry 3 scientists to depths of 6,000 meters.',
        order: 3
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Frequency Examiner Traps, Nautical Conversions & India Reef Geography',
        body: '### 1. High-Frequency Traps & Misconceptions\n\n* **Trap 1: Innocent Passage in the EEZ vs Territorial Sea.**\n  * *Trap Question:* "Foreign vessels enjoy the right of innocent passage in the Exclusive Economic Zone (EEZ)." \n  * *Correct Fact:* **Incorrect terminology.** In the EEZ, foreign vessels enjoy complete **Freedom of Navigation** (high seas freedom), which is much broader than the restricted right of "Innocent Passage" that applies only within the 12 nm Territorial Sea!\n* **Trap 2: Submarines during Innocent Passage.**\n  * *Statutory Rule:* Under UNCLOS Article 20, submarines and other underwater vehicles traversing another nation\'s territorial sea are **required to navigate on the surface and show their flag**.\n* **Trap 3: Coral Reefs Distribution in India.**\n  * *Where do reefs exist in India?*\n    1. **Lakshadweep:** Entirely composed of **Atolls** (no volcanic or granitic mainland).\n    2. **Andaman and Nicobar:** Dominated by **Fringing Reefs** (and one barrier reef in Nicobar).\n    3. **Gulf of Mannar & Palk Bay:** Fringing reefs around 21 uninhabited islands.\n    4. **Gulf of Kutch:** Patch and fringing reefs (adapted to high salinity and silt).\n    5. **Netrani Island (Karnataka) & Malvan (Maharashtra):** Minor patch reefs.\n  * *Trap Question:* "Major coral reefs flourish off the mouths of the Ganga, Mahanadi, Godavari, and Krishna deltas."\n  * *Correct Fact:* **Completely False!** Large rivers discharge massive volumes of freshwater (reducing salinity below the 27‰ coral survival floor) and heavy silt/sediment (choking polyps and blocking sunlight from zooxanthellae). Corals cannot grow near major river deltas!',
        order: 4
      },
      {
        type: 'MAP_PERSPECTIVE',
        title: 'Cartography of Indian Maritime Frontiers & Coral Reef Geography',
        body: '### India\'s Maritime Exclusive Economic Zone and Coral Reef Hubs\n\n>           [GULF OF KUTCH REEFS]                      [SUNDARBANS DELTA]\n>           (Silt-adapted patch reefs)                 (NO CORALS: silt & freshwater)\n>                       \\                                   /\n>                        v                                 v\n>           ~~~~~~~~~~~~~~~~ Indian Coastline ~~~~~~~~~~~~~~~~\n>          |                                                   |\n>   [ARABIAN SEA EEZ]                                   [BAY OF BENGAL EEZ]\n>   * Total Indian EEZ = ~2.37 million sq km            * 12 nm Territorial Sea\n>   * High maritime commerce corridors                  * 24 nm Contiguous Zone\n>   * Offshore oil (Mumbai High)                        * 200 nm Economic Zone\n>          |                                                   |\n>          v                                                   v\n>   [LAKSHADWEEP ATOLLS]                                [ANDAMAN & NICOBAR]\n>   * 36 islands (all ATOLLS)                           * Fringing coral platforms\n>   * Ring reefs enclosing lagoons                      * 10° Channel divides groups\n>          |                                                   |\n>          v                                                   v\n>   ~~~~~~~~~~~~~~~~~~~ GULF OF MANNAR & PALK BAY ~~~~~~~~~~~~~~~~~~~\n>   * Biosphere Reserve; 21 coral islands; Dugong habitat\n>   * Protected fringing reefs between India and Sri Lanka\n\n### Strategic Geographic Realities (UNCLOS & NCERT Class XI)\n1. **India\'s Island Sovereignty Multiplier:** Although India\'s mainland coastline is ~6,100 km (total ~7,516 km including islands), its possession of the Andaman & Nicobar archipelago and Lakshadweep expands its Exclusive Economic Zone to an immense **2.37 million square kilometers**, granting sovereign rights over vast swathes of the Indian Ocean.',
        order: 5
      }
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — Oceanography / Marine Resources & GS Paper II — UNCLOS International Law',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        notes: 'Darwin subsidence theory, coral bleaching thermal anomaly thresholds, UNCLOS 12/24/200 nm limits, and Deep Ocean Mission are perennial UPSC CSE themes.'
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — World Geography & Ocean Resources',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        notes: 'Frequent questions on coral reef types (Atolls vs Fringing) and oceanic economic zones.'
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Oceanography & Marine Ecosystems',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        notes: 'Tested on Lakshadweep island composition (coral atolls), Great Barrier Reef location, and 12/200 nautical mile limits.'
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'General Science & Environment — Marine Biodiversity & Conservation',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        notes: 'Coral bleaching triggers, symbiotic zooxanthellae, and International Seabed Authority mandates.'
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Blue Economy & Maritime Affairs',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        notes: 'Blue economy initiatives, deep-sea mining, and marine trade corridors.'
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — Ocean Resources & Treaties',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        notes: 'Static awareness of UNCLOS headquarters (ISA Jamaica) and maritime boundaries.'
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Blue Economy & Mineral Security',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        notes: 'Critical minerals in polymetallic nodules (nickel, cobalt) essential for green transition batteries.'
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Economic Environment — Maritime Trade & Port Infrastructure',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        notes: 'Port-led industrialization (Sagarmala) and maritime economic zone boundaries.'
      }
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Corals: Polyps + Zooxanthellae algae (symbiosis; need 20°–28°C, shallow euphotic, 27–35‰ salinity, zero silt). Bleaching = expel algae when thermal anomaly > 1°–2°C. Reefs: Fringing (shoreline, Gulf of Mannar), Barrier (deep lagoon, Great Barrier Reef), Atoll (annular ring, Lakshadweep). Darwin theory = volcanic subsidence. UNCLOS 1982: Baseline -> 12 nm Territorial Sea (innocent passage) -> 24 nm Contiguous Zone -> 200 nm EEZ (sovereign economic rights). High Seas = Common heritage.',
        order: 1
      },
      {
        type: 'SUMMARY_2M',
        content: 'Marine Biogeography & Maritime Law Blueprint: 1) Coral Ecosystems: Reefs require clear, shallow, warm, and saline waters. Bleaching is the thermal expulsion of photosynthetic zooxanthellae. 2) Geomorphology: Darwin\'s subsidence theory traces evolution from Fringing reef to Barrier reef to circular Atoll around subsiding volcanic peaks. Lakshadweep is 100% atoll. 3) UNCLOS Architecture: 12 nm Territorial Sea (sovereignty with innocent passage); 24 nm Contiguous Zone (customs/sanitary enforcement); 200 nm EEZ (exclusive economic rights over fisheries and subsoil oil/gas); Continental Shelf up to 350 nm. 4) Deep Ocean Resources: Polymetallic nodules in Central Indian Ocean Basin explored under International Seabed Authority license.',
        order: 2
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Ocean Biogeochemical & Sovereign Architecture: 1) Trophic Symbiosis: Polyp calcium carbonate excretion + algal carbon fixation recycling nitrogen and phosphorus in nutrient-poor tropical oceans. 2) Geopolitical Zoning: UNCLOS established graduated sovereign jurisdiction balancing coastal resource security against international high-seas freedom of navigation. 3) River Delta Barrier: Massive freshwater and muddy sediment discharge at the mouths of the Ganga, Godavari, and Amazon completely suppresses coral polyp respiration and illumination.',
        order: 3
      }
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under the United Nations Convention on the Law of the Sea (UNCLOS 1982), what is the maximum breadth of the "Exclusive Economic Zone" (EEZ) and what specific sovereign rights does a coastal state enjoy within it?',
        options: [
          'Up to 12 nautical miles; complete territorial sovereignty identical to land territory including absolute control of airspace',
          'Up to 24 nautical miles; exclusive military jurisdiction and prohibition of all foreign naval vessels',
          'Up to 200 nautical miles from baselines; sovereign rights for exploring, exploiting, conserving, and managing natural resources of the waters, seabed, and subsoil',
          'Up to 350 nautical miles; full political annexation of all surface navigation and exclusion of foreign civilian aviation'
        ],
        correctAnswer: 'Up to 200 nautical miles from baselines; sovereign rights for exploring, exploiting, conserving, and managing natural resources of the waters, seabed, and subsoil',
        explanation: 'Under UNCLOS Part V (Article 57), the Exclusive Economic Zone shall not extend beyond 200 nautical miles from the baselines from which the breadth of the territorial sea is measured. Within the EEZ, the coastal state exercises sovereign rights over living resources (such as fisheries) and non-living resources (such as oil, gas, and seabed minerals), while other nations retain freedom of navigation and overflight.',
        trapExplanation: 'Option A describes the Territorial Sea (12 nm); Option B confuses the Contiguous Zone (24 nm); Option D misinterprets the Continental Shelf extension.',
        difficulty: 'MEDIUM',
        isPYQ: true
      },
      {
        type: 'APPLIED_SCENARIO',
        stem: 'Why are major coral reef systems virtually ABSENT off the eastern deltaic coast of India (mouths of the Ganga, Mahanadi, Godavari, and Krishna rivers), despite tropical sea surface temperatures being well above 20°C throughout the year?',
        options: [
          'Because the Bay of Bengal lacks calcium ions needed for calcification',
          'Because massive discharges of riverine freshwater lower salinity below threshold levels and heavy suspended silt chokes polyps and blocks sunlight required by zooxanthellae',
          'Because high water depths in the deltas exceed 2,000 meters immediately adjacent to the shoreline',
          'Because the Coriolis force along the eastern coast is too weak to circulate ocean nutrients'
        ],
        correctAnswer: 'Because massive discharges of riverine freshwater lower salinity below threshold levels and heavy suspended silt chokes polyps and blocks sunlight required by zooxanthellae',
        explanation: 'Corals require strict ecological parameters: clear, sediment-free water for sunlight penetration to symbiotic zooxanthellae, and normal oceanic salinity (27‰ to 35‰). The massive river systems emptying into the Bay of Bengal deposit enormous sediment loads that choke coral polyps, cloud the water column, and dilute salinity below the survival floor, completely inhibiting reef formation.',
        trapExplanation: 'Candidates often look for complex chemical deficiencies; the real barrier is basic physical turbidity and salinity dilution by massive deltaic runoff.',
        difficulty: 'HARD',
        isPYQ: true
      }
    ]
  },

  // =========================================================================
  // CON-GEO-019: Natural Vegetation & Forest Cover of India
  // =========================================================================
  {
    id: 'CON-GEO-019',
    topicOrder: 4,
    topicSlug: 'indian-geography-physiography-and-soils',
    topicTitle: 'Indian Geography: Physiography & Soils',
    topicDescription: 'Himalayan and Peninsular physiography, drainage systems, soil taxonomy, forest cover, and natural vegetation.',
    slug: 'natural-vegetation-forest-types-of-india-champion-seth-and-isfr-cover',
    title: 'Natural Vegetation & Forest Cover of India: Champion & Seth Taxonomy, Mangrove Ecology & The ISFR Forest Assessment',
    shortDefinition: 'Authoritative NCERT Class XI India: Physical Environment (Chapter 5) synthesis: Botanical and ecological taxonomy of Indian vegetation: Champion and Seth\'s (1968) classification condensed into five primary NCERT groups: (1) Tropical Evergreen and Semi-Evergreen (rainfall > 200 cm, multi-tiered canopy, rosewood, mahogany, ebony); (2) Tropical Deciduous (Moist vs Dry Teak and Sal forests, covering over 65% of India\'s forested area); (3) Tropical Thorn Forests (rainfall < 50 cm, acacia, euphorbia, xerophytic adaptations); (4) Montane Forests (broad-leaved evergreen oak-chestnut, coniferous chir pine, deodar, blue pine, and alpine meadows); (5) Littoral and Swamp / Mangrove Forests (Sundarbans, Bhitarkanika, Pichavaram, halophytic adaptations: pneumatophores, stilt roots, vivipary); and biennial India State of Forest Report (ISFR) forest cover metrics.',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-GEO-019-01',
        statement: 'Natural vegetation in India is categorized by NCERT into five broad ecological formations governed primarily by mean annual rainfall and temperature gradients: Tropical Evergreen and Semi-Evergreen, Tropical Deciduous (Moist and Dry), Tropical Thorn, Montane, and Littoral and Swamp forests, with Tropical Deciduous forests constituting the single largest and most widespread forest biome in India (occupying over 65% of total forest cover).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NCERT Class XI India: Physical Environment, Chapter 5: Natural Vegetation, Section: Types of Forests, pp. 58-62',
        excerpt: 'On the basis of certain common features such as predominant vegetation type and climatic regions, Indian forests can be divided into the following groups: (i) Tropical Evergreen and Semi Evergreen forests; (ii) Tropical Deciduous forests; (iii) Tropical Thorn forests; (iv) Montane forests; (v) Littoral and Swamp forests... Tropical deciduous forests are the most widespread forests in India. They are also called the monsoon forests.'
      },
      {
        id: 'CLM-GEO-019-02',
        statement: 'Tropical Deciduous forests are subdivided into Moist Deciduous (rainfall 100–200 cm; dominant species include Teak, Sal, Shisham, Mahua, Sandalwood, and Bamboo across northeastern states, Himalayan foothills, eastern slopes of Western Ghats, and Odisha) and Dry Deciduous (rainfall 70–100 cm; dominant species include Tendu, Palas, Amaltas, Bel, and Khair across Uttar Pradesh, Bihar, and the drier peninsular plateau), which shed their leaves simultaneously for 6 to 8 weeks in early spring to prevent transpiration water loss.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NCERT Class XI India: Physical Environment, Chapter 5: Natural Vegetation, Section: Tropical Deciduous Forests, pp. 59-60',
        excerpt: 'Tropical deciduous forests are divided into moist and dry deciduous on the basis of the availability of water. The Moist deciduous forests are found in regions which record rainfall between 100-200 cm... Teak, sal, shisham, hurra, mahua, amla, semul, kusum, and sandalwood etc. are the main species... Dry deciduous forest covers vast areas of the country, where rainfall ranges between 70-100 cm... Tendu, palas, amaltas, bel, khair, axlewood, etc. are the common trees.'
      },
      {
        id: 'CLM-GEO-019-03',
        statement: 'Littoral and swamp mangrove forests thrive along protected tidal coastlines, saline estuaries, and river deltas, displaying specialized morpho-physiological halophytic adaptations: pneumatophores (vertical blind roots with lenticels for atmospheric aeration in anoxic mud), stilt/prop roots (mechanical anchoring against storm surges and tidal currents), and viviparous germination (seeds germinating and developing while still attached to the parent tree before dropping into saline water).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NCERT Class XI India: Physical Environment, Chapter 5: Natural Vegetation, Section: Littoral and Swamp Forests, pp. 61-62',
        excerpt: 'India has a rich variety of wetland habitats... In the delta of the Ganga, the Mahanadi, the Krishna, the Godavari and the Kaveri, such vegetation is well developed. In the Ganga-Brahmaputra delta, sundari trees are found, which provide durable hard timber. Palm, coconut, keora, agar, also grow in some parts of the delta.'
      },
      {
        id: 'CLM-GEO-019-04',
        statement: 'According to the biennial India State of Forest Report (ISFR) conducted by the Forest Survey of India (FSI) using satellite remote sensing (IRS Resourcesat LISS-III), Total Forest Cover is classified by canopy density into Very Dense Forest (canopy density ≥ 70%), Moderately Dense Forest (40%–70%), and Open Forest (10%–40%), while lands with canopy density < 10% are classified as Scrub (not counted in forest cover).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Forest Survey of India (FSI), Biennial India State of Forest Report (ISFR) & NCERT Class XI Forest Conservation Section',
        excerpt: 'According to state records, the forest area covers 23.28 per cent of the total land area of the country... It is important to note that the forest area and the actual forest cover are not the same. The forest area is the area notified and recorded as the forest land irrespective of the existence of trees, but the forest cover is the area occupied by trees.'
      }
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'India\'s Green Tapestry: From Wet Jungle Canopies to Desert Thorns',
        body: 'If you boarded a helicopter in Cherrapunji, Meghalaya and flew west to Jaisalmer, Rajasthan, the landscape below would undergo a complete metamorphosis.\n\nIn the east, drenched under 1,000 cm of rain, the earth is cloaked in impenetrable multi-layered **Tropical Evergreen jungles**, where trees exceed 60 meters in height and the canopy is so thick that sunlight never reaches the forest floor. Fly 500 km west into the Gangetic plains and Odisha, and the evergreen giants yield to **Tropical Deciduous forests**—dominated by Teak and Sal—which shed their leaves in unison during the dry spring, turning the forest floor into a crunchy carpet of gold.\n\nContinue west into Rajasthan where annual rain drops below 50 cm: the trees shrink into thorny **Acacias and Cacti**, equipped with tiny leaves, thick waxy cuticles, and taproots plunging 15 meters deep to tap groundwater. Finally, on the tidal edges where land dissolves into the Bay of Bengal, the miraculous **Mangroves** rise on stilt stilts, breathing through snorkel roots (**pneumatophores**) protruding through suffocating salt mud.\n\nThis green continuum illustrates how annual rainfall and temperature sculpt India\'s natural vegetation.',
        order: 1
      },
      {
        type: 'CORE_IDEA',
        title: 'The Five Major Forest Formations of India Matrix (NCERT Class XI Chapter 5)',
        body: '### Comprehensive Forest Taxonomy of India\n\n| Forest Formation Group | Annual Rainfall & Temperature Range | Typical Geographical Distribution | Dominant Characteristic Tree Species & Ecology |\n| :--- | :--- | :--- | :--- |\n| **1. Tropical Evergreen & Semi-Evergreen** | Rainfall **$> 200\\text{ cm}$**; Mean annual temperature **$> 22^\\circ\\text{C}$**; brief or no dry season. | Western slopes of Western Ghats (Kerala, Karnataka), NE hills (Assam, Meghalaya), Andaman & Nicobar. | **Multi-layered canopy ($> 60\\text{ m}$)**; continuous green canopy (no common leaf-shedding season). Species: **Rosewood, Mahogany, Ebony, Aini, Chaplash**; Semi-evergreen: White cedar, Hollock, Kail. |\n| **2. Tropical Deciduous (Monsoon Forests)** | Rainfall **$70 - 200\\text{ cm}$**; covers **$> 65\\%$ of India\'s forest area** (most widespread). | Sub-Himalayan belt, MP, UP, Bihar, Odisha, Chhattisgarh, Andhra Pradesh, Maharashtra, Tamil Nadu. | **Shed leaves simultaneously for 6 to 8 weeks** in dry spring/summer to prevent transpiration loss. Subdivided into **Moist** (100–200 cm: Teak, Sal, Shisham, Sandalwood) and **Dry** (70–100 cm: Tendu, Palas, Bel, Khair, Axlewood). |\n| **3. Tropical Thorn Forests** | Rainfall **$< 50\\text{ cm}$**; hot dry climate with low humidity. | Southwestern Punjab, Haryana, Rajasthan, Gujarat, MP, and rain-shadow parts of Deccan plateau. | Trees are dwarfed with thick barks, tiny leaves/thorns, deep tap roots. Species: **Acacia (Babul), Khejri (*Prosopis cineraria* — Rajasthan state tree), Euphorbia, Ber, Wild date palm**. |\n| **4. Montane Forests** | Varies with altitude (temperature drops with height: lapse rate). | Himalayan mountain ranges (from J&K to Arunachal Pradesh); Nilgiris, Anaimalai, and Palani hills in South. | **Altitude Zones:** (a) 1,000–2,000 m: Wet temperate broad-leaved **Oak and Chestnut**; (b) 1,500–3,000 m: Temperate coniferous **Chir pine, Deodar (durable timber), Blue pine, Spruce**; (c) $> 3,000\\text{ m}$: Alpine **Silver fir, Juniper, Birch (*Bhojpatra*), Rhododendron**, transitioning into alpine meadows (*Marg/Bugyal*). Southern montane temperate grasslands are called **Sholas**. |\n| **5. Littoral & Swamp (Mangroves)** | Coastal estuaries, tidal mudflats, and deltaic networks. | **Sundarbans** (WB - largest mangrove in world), **Bhitarkanika** (Odisha), Pichavaram (TN), Andaman & Nicobar, Gulf of Kutch. | Halophytic adaptations: **Pneumatophores (breathing roots)**, stilt roots, vivipary. Species: **Sundari (*Heritiera fomes*), Rhizophora, Avicennia, Sonneratia, Nypa palm**. |',
        order: 2
      },
      {
        type: 'MECHANISM',
        title: 'Mangrove Halophytic Physiology & The ISFR Forest Assessment Canopy Metrics',
        body: '### 1. Halophytic Ecological Adaptations of Mangroves\nMangroves inhabit one of the harshest environments on Earth: waterlogged, highly saline mud subject to twice-daily tidal inundation with zero dissolved oxygen in the sediment.\n* **Pneumatophores (Breathing Snorkel Roots):** Upward-growing, negative-geotropic pencil-like roots that project vertically 20–30 cm above the waterlogged mud, equipped with specialized porous breathing pores called **lenticels** that draw oxygen directly from the air during low tide.\n* **Stilt Roots and Prop Roots:** Arching woody root structures descending from the trunk and lower branches that anchor the tree firmly in unstable, shifting intertidal mud against turbulent cyclone waves.\n* **Viviparous Germination (Vivipary):** In normal plants, seeds fall to the soil and germinate. In mangroves, falling into hypersaline, oxygen-depleted mud would kill the seed. Instead, the embryo **germinates and develops into a spear-like seedling while still attached to the parent tree**; when dropped, it spears vertically into the mud and immediately roots.\n* **Salt Exclusion and Excretion:** Specialized root membrane ultra-filters that exclude up to 95% of sea salt, while leaves have active salt glands that excrete excess salt crystals onto the leaf surface.\n\n---\n\n### 2. Forest Survey of India (ISFR) Canopy Density Classification\n\n| ISFR Canopy Classification | Canopy Crown Density Threshold | Ecological Status & Characterization |\n| :--- | :--- | :--- |\n| **Very Dense Forest (VDF)** | Canopy Density **$\\ge 70\\%$** | Pristine climax forests (mostly National Parks and Western Ghats / NE reserves). |\n| **Moderately Dense Forest (MDF)** | Canopy Density **$40\\% - 70\\%$** | Healthy natural and plantation forests with partial canopy cover. |\n| **Open Forest (OF)** | Canopy Density **$10\\% - 40\\%$** | Degraded forests, fringes, and secondary woodlands. |\n| **Scrub (Not counted as Forest)** | Canopy Density **$< 10\\%$** | Degraded thorny bushes and stunted shrubs on wastelands. |\n\n* **Forest Area vs Forest Cover:**\n  * **Recorded Forest Area (RFA):** Legal administrative status—lands legally notified as Reserved, Protected, or Unclassed Forest in government records, regardless of whether a single tree exists.\n  * **Forest Cover:** Actual physical presence of tree canopy (density $\\ge 10\\%$ over an area $\\ge 1\\text{ hectare}$) detected via satellite remote sensing, irrespective of land ownership. Total forest cover in India hovers around **~21.7%** of geographical area (total forest + tree cover ~24.6%).',
        order: 3
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Frequency Examiner Traps & Economic Forestry Vocabulary',
        body: '### 1. High-Frequency Traps & Misconceptions\n\n* **Trap 1: Most Widespread Forest Type in India.**\n  * *Trap Question:* "Tropical Evergreen forests constitute the largest forest cover in India due to heavy monsoon rainfall."\n  * *Correct Fact:* **Completely False.** Tropical Evergreen forests occupy only a small fraction (~8–10%) in high-rainfall pockets. The most widespread forest type in India by a wide margin is the **Tropical Deciduous Forest (Monsoon Forest)**, covering **over 65%** of all forested area.\n* **Trap 2: Montane Forest Grasslands of South India.**\n  * *Trap Question:* "The temperate grasslands found in the higher reaches of the Himalayas are called Sholas."\n  * *Correct Fact:* **Incorrect.** The temperate montane forests and grasslands in the **Nilgiris, Anaimalai, and Palani hills of South India** are called **Sholas**. In the Himalayas, high-altitude alpine grasslands are called **Bugyals** (Uttarakhand) or **Margs** (Kashmir; e.g., Gulmarg, Sonamarg).\n* **Trap 3: Deodar Timber Properties.**\n  * *Fact Check:* **Deodar (*Cedrus deodara*)** is an endemic Himalayan coniferous timber tree highly prized for construction because its wood contains natural aromatic oils resistant to rot and insect attack, used historically for railway sleepers.\n* **Trap 4: Mangrove State Rankings in India.**\n  * *Ranking by Mangrove Cover (ISFR):* \n    1. **West Bengal** (Sundarbans accounts for > 40% of India\'s total mangroves);\n    2. **Gujarat** (second largest mangrove cover in India, adapted to arid Gulf of Kutch);\n    3. **Andaman and Nicobar Islands**;\n    4. **Andhra Pradesh** (Godavari/Krishna deltas).',
        order: 4
      },
      {
        type: 'MAP_PERSPECTIVE',
        title: 'Cartography of Indian Forests: Rainfall Corridors & The Mangrove Delta Chain',
        body: '### Forest Biome Corridors of the Indian Subcontinent\n\n>           [MONTANE CONIFEROUS & ALPINE BUGYALS]\n>           (Himalayas: Deodar, Pine, Spruce, Birch)\n>                             |\n>                             v\n>           [TROPICAL THORN & KHEJRI SCRUB]\n>           (Thar Desert, Rajasthan, Gujarat < 50 cm rain)\n>                   \\                   /\n>                    \\                 /\n>                     v               v\n>           [TROPICAL DECIDUOUS: DRY & MOIST]\n>           (The vast central heartland: Teak, Sal, Shisham)\n>           * Over 65% of Indian forest cover\n>           * Sheds leaves in dry spring (6–8 weeks)\n>                   /                   \\\n>                  /                     \\\n>                 v                       v\n>     [TROPICAL EVERGREEN]           [LITTORAL & MANGROVES]\n>     (Western Ghats & NE Hills)     * Sundarbans (Ganga Delta)\n>     * Multi-tiered canopy > 60 m   * Bhitarkanika (Brahmani)\n>     * Rosewood, Ebony, Mahogany    * Pichavaram (Kaveri)\n\n### Strategic Geographic Realities (NCERT Class XI)\n1. **The Western Ghats Rain Shadow Contrast:** The western windward slopes receive over 250 cm of rain, supporting **Tropical Wet Evergreen** rainforests; cross the crest 60 km eastward onto the rain-shadow plateau, and the vegetation abruptly shifts into **Tropical Dry Deciduous and Thorn scrub**.\n2. **The Sundarbans Biosphere:** Formed at the confluence of the Ganga, Brahmaputra, and Meghna rivers, the Sundarbans represents the largest contiguous mangrove wetland on Earth, home to the Bengal tiger and the endangered saltwater crocodile.',
        order: 5
      }
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — Indian Geography / Natural Vegetation & Forest Resources & GS Paper III — Environment',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        notes: 'Deciduous vs Evergreen tree species attribution (Teak, Sal, Ebony, Shisham), Mangrove halophytic adaptations (pneumatophores, vivipary), and ISFR canopy definitions are heavily tested in UPSC Prelims.'
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — Natural Vegetation of India & Rajasthan Forest Types',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        notes: 'Frequent 5-mark and 10-mark questions on Tropical Thorn forests, Khejri tree ecological role, and Rajasthan forest classifications (Dhok forests).'
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Indian Geography & Natural Vegetation',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        notes: 'Tested on Sundari tree location (Sundarbans), most common forest type (Deciduous), and Shola forests location (Nilgiris).'
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'General Science & Environment — Forest Ecology & Conservation Acts',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        notes: 'Forest conservation legal framework: Indian Forest Act 1927, Forest (Conservation) Act 1980, and National Forest Policy 1988 (33% target).'
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Environmental Reports & Biodiversity',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        notes: 'State with largest forest cover (Madhya Pradesh by area; Mizoram by percentage).'
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — Forest Survey of India & Static Geography',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        notes: 'Biennial ISFR report highlights and state rankings.'
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Environmental Economics & Sustainable Forestry',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        notes: 'Ecosystem services valuation, carbon sequestration targets (NDC 2.5–3.0 billion tonnes CO2 equivalent sink by 2030).'
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Economic Environment — Forestry & Commercial Timber Production',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        notes: 'Commercial timber, bamboo value chain, and agro-forestry financing.'
      }
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Forests of India: 1) Tropical Evergreen (> 200 cm rain, multi-tiered canopy, Rosewood, Ebony, Mahogany). 2) Tropical Deciduous (> 65% of India = MOST WIDESPREAD; Moist 100–200 cm = Teak, Sal; Dry 70–100 cm = Tendu, Palas; shed leaves 6–8 weeks). 3) Thorn (< 50 cm, Acacia, Khejri). 4) Montane (Oak 1000–2000m, Deodar/Pine 1500–3000m, Alpine birch > 3000m; Sholas in Nilgiris). 5) Mangroves (Sundarbans; pneumatophores, stilt roots, vivipary). ISFR: VDF ≥ 70%, MDF 40–70%, OF 10–40%.',
        order: 1
      },
      {
        type: 'SUMMARY_2M',
        content: 'Indian Natural Vegetation Blueprint: 1) Dominance: Tropical Deciduous (Monsoon) forests cover over 65% of India\'s forest land, shedding leaves in dry spring to conserve moisture. 2) High-Rain Forests: Tropical Evergreen and Semi-Evergreen form dense, stratified canopies (> 60m) in Western Ghats and NE hills without a common shedding season. 3) Mangrove Ecology: Halophytic coastal forests (Sundarbans, Bhitarkanika) characterized by blind breathing roots (pneumatophores), prop roots, and viviparous germination. 4) Montane Zonation: Altitude mirrors latitude in Himalayas (broadleaved oak -> coniferous deodar/pine -> alpine tundra). 5) ISFR Metrics: Tree canopy density classifies into Very Dense (≥70%), Moderately Dense (40–70%), and Open (10–40%).',
        order: 2
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Vegetation Gradient & Ecological Architecture: 1) Precipitation Gradient Architecture: > 200 cm (Evergreen) -> 100–200 cm (Moist Deciduous) -> 70–100 cm (Dry Deciduous) -> < 50 cm (Thorn scrub). 2) Physiological Halophyte Circuit: Anoxic tidal mud -> negative geotropism in root branches -> atmospheric oxygen intake through lenticels -> internal root aerenchyma aeration. 3) Montane Thermal Compression: 1,000 meters of elevation drop yields temperature changes roughly equivalent to 1,000 km of poleward latitude shift.',
        order: 3
      }
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following forest types constitutes the LARGEST and most geographically widespread forest formation in India, occupying over 65 percent of the country\'s total forest cover?',
        options: [
          'Tropical Wet Evergreen Forests',
          'Tropical Deciduous (Monsoon) Forests',
          'Tropical Thorn Forests',
          'Montane Subtropical Pine Forests'
        ],
        correctAnswer: 'Tropical Deciduous (Monsoon) Forests',
        explanation: 'Tropical Deciduous forests (also known as Monsoon forests) are the most widespread forests in India, covering over 65% of the total forested area. They spread across regions receiving between 70 cm and 200 cm of annual rainfall, subdivided into Moist Deciduous (Teak, Sal) and Dry Deciduous (Tendu, Palas).',
        trapExplanation: 'Candidates often guess Tropical Evergreen because of famous rainforest publicity, but Evergreen forests occupy a very small, restricted geographical area.',
        difficulty: 'EASY',
        isPYQ: true
      },
      {
        type: 'APPLIED_SCENARIO',
        stem: 'Consider the following specialized physiological and morphological adaptations found in coastal plant species:\n1. Pneumatophores with lenticels protruding vertically above waterlogged substrate\n2. Stilt and prop roots providing mechanical anchoring against tidal currents\n3. Viviparous germination where embryos develop while still attached to the parent tree\nIn which of the following forest ecosystems of India are ALL THREE adaptations characteristically displayed?',
        options: [
          'Tropical Semi-Evergreen forests of the Western Ghats',
          'Montane Shola forests of the Nilgiri Hills',
          'Littoral and Swamp (Mangrove) forests of the Sundarbans and Bhitarkanika',
          'Tropical Dry Deciduous forests of the Chhota Nagpur Plateau'
        ],
        correctAnswer: 'Littoral and Swamp (Mangrove) forests of the Sundarbans and Bhitarkanika',
        explanation: 'All three features—pneumatophores (breathing roots for gas exchange in anoxic mud), stilt roots (anchorage in shifting tides), and vivipary (germination before dispersal to prevent drowning in hypersaline water)—are classic diagnostic adaptations of halophytic mangrove vegetation found in the Littoral and Swamp forests of India (e.g., Sundarbans, Bhitarkanika, Pichavaram).',
        trapExplanation: 'Shola forests or evergreen forests have buttress roots and drip tips, but lack pneumatophores and vivipary.',
        difficulty: 'MEDIUM',
        isPYQ: true
      }
    ]
  },

  // =========================================================================
  // CON-GEO-020: Comprehensive Soil Taxonomy of India
  // =========================================================================
  {
    id: 'CON-GEO-020',
    topicOrder: 4,
    topicSlug: 'indian-geography-physiography-and-soils',
    topicTitle: 'Indian Geography: Physiography & Soils',
    topicDescription: 'Himalayan and Peninsular physiography, drainage systems, soil taxonomy, forest cover, and natural vegetation.',
    slug: 'comprehensive-soil-taxonomy-of-india-usda-orders-and-icar-framework',
    title: 'Comprehensive Soil Taxonomy of India: USDA Soil Orders, ICAR Framework, Salinization & Watershed Conservation',
    shortDefinition: 'Authoritative NCERT Class XI India: Physical Environment (Chapter 6) synthesis: Comprehensive pedological classification of Indian soils: Correlation between the indigenous Indian Council of Agricultural Research (ICAR) 8-fold classification and the modern international USDA Soil Taxonomy orders: Inceptisols (39.74%, embryonic soils of alluvial valleys), Entisols (28.08%, azonal soils without horizons), Alfisols (13.55%, leached red/yellow soils with argillic horizons), Vertisols (8.52%, self-ploughing expanding montmorillonitic black cotton soils), Aridisols (4.28%, desert soils with calcic/gypsic hardpans), Ultisols (2.51%, highly leached acidic laterites), Mollisols (0.40%), and Histosols (0.04%); pedogenic processes (laterization, podzolization, salinization); secondary land degradation (waterlogging, canal command salinity, Reh/Kallar/Usar); and watershed rehabilitation paradigms.',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-GEO-020-01',
        statement: 'According to the Indian Council of Agricultural Research (ICAR) classification correlated with the United States Department of Agriculture (USDA) Soil Taxonomy, Indian soils are dominated by Inceptisols (~39.74% of geographical area, young soils with minimal horizon differentiation forming the bulk of Indo-Gangetic alluvium) and Entisols (~28.08%, newly deposited azonal mineral soils), followed by Alfisols (~13.55%), Vertisols (~8.52%), Aridisols (~4.28%), and Ultisols (~2.51%).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NCERT Class XI India: Physical Environment, Chapter 6: Soils, Box: USDA Soil Taxonomy & Table 6.1: Soils of India According to USDA Soil Taxonomy, p. 68',
        excerpt: 'The Indian Council of Agricultural Research (ICAR) has classified the Indian soils on the basis of their nature and character as per the United States Department of Agriculture (USDA) Soil Taxonomy... Inceptisols: 39.74 per cent; Entisols: 28.08 per cent; Alfisols: 13.55 per cent; Vertisols: 8.52 per cent; Aridisols: 4.28 per cent; Ultisols: 2.51 per cent; Mollisols: 0.40 per cent; Others: 2.92 per cent.'
      },
      {
        id: 'CLM-GEO-020-02',
        statement: 'Vertisols (Black or Regur soils) develop in situ over the basaltic lava of the Deccan Trap; their defining pedological hallmark is high concentrations of smectite/montmorillonite clay minerals (> 30%–50% clay content), resulting in intense swell-shrink dynamics, developing deep vertical fissures (up to 60 cm deep) during dry seasons and self-ploughing (pedoturbation), conferring extraordinary moisture-retention capacity ideal for rainfed cotton cultivation.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NCERT Class XI India: Physical Environment, Chapter 6: Soils, Section: Black Soil, pp. 70-71',
        excerpt: 'Black soil covers most of the Deccan Plateau which includes parts of Maharashtra, Madhya Pradesh, Gujarat, Andhra Pradesh and some parts of Tamil Nadu... These soils are also known as the \'Regur Soil\' or the \'Black Cotton Soil\'... The black soils are generally clayey, deep and impermeable. They swell and become sticky when wet and shrink when dried. So, during the dry season, these soil develop wide cracks. Thus, there occurs a kind of \'self ploughing\'.'
      },
      {
        id: 'CLM-GEO-020-03',
        statement: 'Laterite soils (Ultisols/Oxisols) form under intense tropical conditions of high temperatures and alternate wet and dry monsoon seasons through severe leaching (desilication), where silica is washed away in solution leaving behind an infertile, acidic, indurated residual crust enriched in insoluble iron oxide and aluminium hydroxides, deficient in organic humus, nitrogen, phosphate, and calcium.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NCERT Class XI India: Physical Environment, Chapter 6: Soils, Section: Laterite Soil, pp. 71-72',
        excerpt: 'Laterite has been derived from the Latin word \'Later\' which means brick. The laterite soils develop in areas with high temperature and high rainfall. These are the result of intense leaching owing to tropical rains. With rain, lime and silica are leached away, and soils rich in iron oxide and aluminium compound are left behind... Laterite soils are widely cut as bricks for use in house construction.'
      },
      {
        id: 'CLM-GEO-020-04',
        statement: 'Secondary soil salinization and alkalinization (forming saline-sodic soils known locally as Reh, Kallar, Usar, Thur, and Chopan) occur extensively in canal command areas of Punjab, Haryana, Rajasthan, and Western Uttar Pradesh due to over-irrigation, excessive flood irrigation, and inadequate subsurface drainage, which cause the water table to rise and capillary action to deposit white efflorescences of sodium, calcium, and magnesium salts in the topsoil.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NCERT Class XI India: Physical Environment, Chapter 6: Soils, Section: Saline Soils & Soil Degradation, pp. 72-73',
        excerpt: 'Saline Soils are also known as Usar soils. Saline soils contain a larger proportion of sodium, potassium and magnesium, and thus, they are infertile... They occur in arid and semi-arid regions, and in waterlogged and swampy areas... In the areas of intensive cultivation with excessive use of irrigation, especially in areas of green revolution, the fertile alluvial soils are becoming saline... In such areas, especially in Punjab and Haryana, farmers are advised to add gypsum to solve the problem.'
      }
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Skin of the Earth: How Rocks, Water, and Time Make Soil',
        body: 'Soil is not just pulverized dirt—it is a living, breathing biochemical skin.\n\nIt takes nature between **200 and 1,000 years** to generate just **one single centimeter** of fertile topsoil. The type of soil that forms depends on five fundamental soil-forming factors ($S = f(cl, o, r, p, t)$): Climate, Organisms, Relief (topography), Parent material (rock), and Time.\n\nIn India, this geological recipe has produced contrasting pedological marvels:\n* In the Deccan, molten basalt cooled into dark rocks rich in iron and magnesium. Over millions of years, weathering converted this into **Black Regur soil**—a clay that expands like sponge cake when wet and cracks wide open when dry, naturally aerating itself in a phenomenon geologists call **"self-ploughing"**.\n* In the Western Ghats and Kerala, relentless monsoonal downpours wash away every soluble nutrient, dissolving silica and leaving behind a brick-like crust of iron and aluminium: **Laterite soil** (from Latin *Later*, meaning brick).\n* In the north, Himalayan rivers deposit fresh silt every flood season, creating the world\'s most fertile agricultural bed: the **Alluvial soils**.',
        order: 1
      },
      {
        type: 'CORE_IDEA',
        title: 'USDA Soil Orders vs ICAR 8-Fold Classification Matrix',
        body: '### Correlation: USDA Soil Taxonomy & ICAR Classification (NCERT Class XI Chapter 6)\n\n| USDA Soil Order | Share of India\'s Area (%) | Corresponding ICAR Soil Classification | Diagnostic Morphological & Agronomic Profile |\n| :--- | :--- | :--- | :--- |\n| **1. Inceptisols** | **39.74%** (Dominant Order in India) | Mature Alluvial Soils (*Bangar*), Himalayan forest soils, Red-loam. | Young mineral soils with beginning of horizon formation; weakly developed B-horizon; high natural fertility. |\n| **2. Entisols** | **28.08%** (Second Largest) | Fresh Alluvial Soils (*Khadar*), Coastal sand dunes, River floodplains. | Azonal soils with **zero diagnostic genetic horizons**; newly deposited river silt and unweathered parent sands. |\n| **3. Alfisols** | **13.55%** | Red and Yellow Soils of Peninsular India (Tamil Nadu, Odisha, MP, Chhota Nagpur). | Moderately leached soils with **subsurface clay accumulation (argillic horizon)** and medium-to-high base saturation ($> 35\\%$). Red color due to ferric oxide diffusion. |\n| **4. Vertisols** | **8.52%** | **Black Cotton Soils (Regur)** of Deccan Trap (Maharashtra, Gujarat, Malwa). | High smectite/montmorillonite clay content ($> 30\\%$); deep cracks when dry; **slickensides**; self-ploughing; moisture-retentive. |\n| **5. Aridisols** | **4.28%** | Desert / Arid Soils of Western Rajasthan (Thar) and southern Haryana. | Mineral soils of arid climates; high pH; presence of **calcic or gypsic subsurface hardpans (*Kankar*)**; low organic humus. |\n| **6. Ultisols** | **2.51%** | Highly weathered **Laterite and Lateritic Soils** (Western Ghats, Meghalaya). | Deeply weathered, acidic soils with **low base saturation ($< 35\\%$)**; high iron/aluminium sesquioxides; prone to hardpan formation. |\n| **7. Mollisols** | **0.40%** | Terai soils and high Himalayan grassland soils. | Dark, organic-rich mineral soils with a soft, thick mollic epipedon; high base saturation. |\n| **8. Histosols** | **0.04%** | Peaty and Marshy Soils (*Kari* soils of Kerala, coastal Sundarbans). | True organic soils with $> 20\\%$ organic matter; dark, spongy, acidic, waterlogged. |',
        order: 2
      },
      {
        type: 'MECHANISM',
        title: 'Pedogenic Processes, Swell-Shrink Physics & Secondary Salinization',
        body: '### 1. Vertisol Swell-Shrink Mechanics (Self-Ploughing)\n* **The Mineral Engine (Montmorillonite):** Vertisols contain expanding 2:1 lattice clay minerals (smectite group). In these sheets, water molecules penetrate between the crystal layers during wet periods, causing the soil volume to swell dramatically by up to 50%.\n* **Desiccation Cracking:** In the hot dry pre-monsoon summer, water evaporates from the lattice, causing contraction. Deep fissures up to **60 cm deep and 10 cm wide** open across the fields.\n* **Self-Ploughing Cycle (*Pedoturbation*):** Loose surface soil crumbs and organic matter fall down into these deep cracks. When the monsoon rains arrive, the lower soil layer absorbs water first and swells, forcing the subsoil upward along diagonal shear planes called **slickensides**. The soil literally turns itself inside out!\n\n---\n\n### 2. The Chemistry of Secondary Salinization (Reh, Kallar, Usar)\n* In the canal command areas of the Green Revolution (Indira Gandhi Canal, Bhakra Nangal canals in Punjab and Haryana):\n  1. **Over-Irrigation & Waterlogging:** Excessive canal water application without deep sub-surface drainage raises the groundwater table to within 1–2 meters of the surface.\n  2. **Capillary Wick Effect:** In semi-arid climates, intense surface evaporation pulls groundwater upward through soil micropores by capillary action.\n  3. **Salt Crust Deposition:** Dissolved subterranean salts—predominantly **Sodium chloride ($NaCl$), Sodium sulphate ($Na_2SO_4$), and Sodium carbonate ($Na_2CO_3$)**—are left behind on the surface as water evaporates, forming blinding white saline crusts (*Reh* or *Kallar*).\n  4. **Soil Dispersion & Impermeability:** High sodium absorption ratio (SAR) disperses soil clay particles, destroying crumb structure and creating impermeable sodic wastelands (*Usar*).\n  5. **Chemical Remediation:** Farmers apply **Gypsum ($CaSO_4 \\cdot 2H_2O$)**; calcium ions displace sodium from the clay lattice, converting insoluble sodium carbonate into leachable sodium sulphate, which can be washed away by freshwater flushes.',
        order: 3
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Frequency Examiner Traps & Agronomic Vocabulary',
        body: '### 1. High-Frequency Traps & Misconceptions\n\n* **Trap 1: Largest Soil Order in India.**\n  * *Trap Question:* "Vertisols (Black soils) constitute the largest soil order in India because of the vast Deccan plateau."\n  * *Correct Fact:* **Completely False.** Vertisols occupy only **8.52%** of India\'s area. The largest soil order in India is **Inceptisols (39.74%)**, followed by **Entisols (28.08%)**.\n* **Trap 2: Red Soil Color Origin.**\n  * *Trap Question:* "Red soil is red because it contains large amounts of bauxite and limestone."\n  * *Correct Fact:* **Incorrect.** Red soil derives its color from the **wide diffusion of iron oxides (ferric oxide)** in crystalline and metamorphic rocks. When it occurs in a hydrated form, it turns yellow!\n* **Trap 3: Khadar vs Bangar Alluvium.**\n  * *Khadar:* **New, younger alluvium** deposited annually by floodwaters on floodplains; fine-textured, highly fertile, pale in color.\n  * *Bangar:* **Older alluvium** deposited above the flood level on older terraces; contains calcareous concretions called **Kankar**; less fertile.\n* **Trap 4: Laterite Soil Nutrient Paradox.**\n  * *Fact Check:* Despite supporting dense tropical vegetation in its natural state, virgin Laterite soil is **nutrient-poor and infertile for annual crops** because heavy leaching strips bases (calcium, magnesium, potassium) and nitrogen. However, when heavily fertilized, it is ideal for plantation crops: **Tea, Coffee, Cashew nut, and Rubber**.',
        order: 4
      },
      {
        type: 'MAP_PERSPECTIVE',
        title: 'Pedological Cartography of India: Soil Belts from the Himalayas to the Peninsula',
        body: '### Geographic Distribution of Major Soil Zones in India\n\n>           [MOUNTAIN / FOREST SOILS (INCEPTISOLS & MOLLISOLS)]\n>           (Himalayas, J&K, HP, Uttarakhand, Sikkim)\n>                             |\n>                             v\n>           [ALLUVIAL BELT: KHADAR & BANGAR]\n>           (INCEPTISOLS & ENTISOLS: ~68% of Indo-Gangetic Plains)\n>           * Punjab -> Haryana -> UP -> Bihar -> Bengal\n>                   /                   \\\n>                  /                     \\\n>                 v                       v\n>     [ARID / DESERT SOILS]         [BLACK REGUR SOILS (VERTISOLS)]\n>     (ARIDISOLS: Thar Desert)      (Deccan Trap: Maharashtra, MP, Gujarat)\n>     * Calcic Kankar hardpans      * Montmorillonite clay; self-ploughing\n>                                           |\n>                                           v\n>                             [RED & YELLOW SOILS (ALFISOLS)]\n>                             (Peninsular Shield, Odisha, Tamil Nadu)\n>                             * Ferric oxide; leached crystalline bases\n>                                           |\n>                                           v\n>                             [LATERITE SOILS (ULTISOLS)]\n>                             (Western Ghats crests, Meghalaya plateau)\n>                             * Extreme leaching; brick-hard; cashews/coffee\n\n### Strategic Geographic Realities (NCERT Class XI)\n1. **The Great Deccan Basalt Boundary:** The sharp geological boundary of the Cretaceous Deccan Trap lava flows neatly defines the boundary of the **Black Vertisol belt**, terminating abruptly against the ancient Archean crystalline granite terrain where **Red Alfisols** begin in Telangana and Karnataka.\n2. **Canal Salinity Belts:** The most severe secondary salinization (*Usar/Kallar*) in India is concentrated precisely along the Indira Gandhi Canal command in Rajasthan and the Sirhind/Western Yamuna canal networks in Punjab and Haryana.',
        order: 5
      }
    ],
    examMappings: [
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'GS Paper I — Indian Physical Geography / Soils of India & GS Paper III — Agriculture',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        notes: 'USDA Soil orders percentage ranking in India (Inceptisols #1), Vertisol self-ploughing mechanics, Laterite desilication, and canal command salinization (Reh/Kallar) are top-frequency UPSC Prelims topics.'
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper I — Soils of India & Rajasthan Soil Classification',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        notes: 'Rajasthan soil classifications (Aridisols, Alfisols, Entisols, Inceptisols, Vertisols in Hadoti) and soil erosion (wind erosion in Thar, gully erosion in Chambal) are heavily tested.'
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'General Awareness — Indian Geography & Soils',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        notes: 'Tested on Regur soil (Black cotton soil), Khadar vs Bangar, and Laterite soil usage for bricks.'
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'General Science & Environment — Soil Conservation & Agriculture',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        notes: 'Soil health management: Soil Health Card Scheme, micro-nutrient deficiencies, and gypsum application for alkali soils.'
      },
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'General Awareness — Agriculture & Priority Sector Lending',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        notes: 'Soil health cards, irrigation projects, and crop insurance coverage by soil zone.'
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'General Awareness — Agriculture & Rural Economy',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        notes: 'Static awareness of soil groups and major crop-soil associations.'
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'General Awareness — Agrarian Economy & Land Degradation',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        notes: 'Land degradation neutrality targets (UNCCD COP14 commitment: 26 million hectares restored by 2030).'
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Economic Environment — Rural Banking & Agronomic Foundations',
        relevance: 'ANCILLARY_COVERAGE',
        priority: 'MEDIUM',
        requiredDepth: 'AWARENESS',
        notes: 'Soil capability assessment in agricultural project appraisal and farm loan underwriting.'
      }
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Soils of India: Inceptisols (39.74% = LARGEST), Entisols (28.08%), Alfisols (13.55%), Vertisols (8.52% = Black Regur), Aridisols (4.28% = Desert), Ultisols (2.51% = Laterite). Vertisols: Montmorillonite clay, self-ploughing, deep dry cracks, cotton. Laterite: Intense leaching (desilication), iron/alumina crust, brick-making, cashew/tea. Saline/Alkali: Reh/Kallar/Usar in canal areas, capillary salt rise, treated with Gypsum.',
        order: 1
      },
      {
        type: 'SUMMARY_2M',
        content: 'Indian Soil Taxonomy Blueprint: 1) USDA Order Hierarchy: Inceptisols (~40%) and Entisols (~28%) dominate the alluvial northern plains and river valleys; Alfisols (~14%) form the peninsular red soils; Vertisols (~8.5%) form the black cotton soils. 2) Vertisol Physics: Montmorillonite clay mineralogy causes massive swelling when wet and deep fissures when dry, generating pedoturbation ("self-ploughing") and exceptional moisture retention. 3) Laterite Formation: Tropical alternating wet/dry climate leaches silica and bases, leaving acidic, brick-hard iron-aluminium crusts. 4) Degradation & Reclamation: Canal over-irrigation induces waterlogging and capillary salt accumulation (Reh/Usar), remediated by applying Gypsum to displace sodium.',
        order: 2
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Pedogenic Pathways & Mineralogical Architecture: 1) Smectite Swell-Shrink Engine: 2:1 lattice hydration expansion vs dehydration contraction creating slickensides and deep vertical crack aeration. 2) Desilication Dynamics: Tropical rain flushing silica out of weathered crystalline rock -> residual accumulation of insoluble sesquioxides ($Fe_2O_3, Al_2O_3$) -> indurated laterite. 3) Salinization Chemistry: High water table -> capillary wick -> evaporative salt precipitation -> sodium adsorption ratio (SAR) escalation -> clay deflocculation and compaction.',
        order: 3
      }
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'According to the United States Department of Agriculture (USDA) Soil Taxonomy adopted by the Indian Council of Agricultural Research (ICAR), which of the following soil orders occupies the LARGEST percentage of India\'s total geographical area?',
        options: [
          'Vertisols (Black cotton soils)',
          'Inceptisols (Embryonic alluvial and forest soils)',
          'Alfisols (Red and yellow soils)',
          'Aridisols (Arid desert soils)'
        ],
        correctAnswer: 'Inceptisols (Embryonic alluvial and forest soils)',
        explanation: 'According to ICAR data based on USDA Soil Taxonomy, Inceptisols occupy the largest area in India at approximately 39.74% of the country\'s total geographical area, followed by Entisols (28.08%), Alfisols (13.55%), and Vertisols (8.52%).',
        trapExplanation: 'Most candidates assume Vertisols or Alfisols are the largest; Inceptisols form the overwhelming bulk of the vast Indo-Gangetic alluvium and young valley soils.',
        difficulty: 'MEDIUM',
        isPYQ: true
      },
      {
        type: 'APPLIED_SCENARIO',
        stem: 'In the intensively irrigated canal command areas of the Green Revolution in Punjab and Haryana, fertile alluvial soils frequently degrade into white crusty, infertile saline-alkaline wastelands known locally as "Reh" or "Kallar". What is the primary chemical amendment recommended by agronomists to reclaim these sodic soils?',
        options: [
          'Addition of Calcium Carbonate (Limestone)',
          'Addition of Calcium Sulphate Dihydrate (Gypsum)',
          'Addition of Potassium Chloride (Muriate of Potash)',
          'Addition of Ammonium Phosphate'
        ],
        correctAnswer: 'Addition of Calcium Sulphate Dihydrate (Gypsum)',
        explanation: 'In sodic (alkali) soils, excessive sodium ions adhere to the clay complex, causing soil particles to disperse and become impermeable. Applying Gypsum (Calcium Sulphate Dihydrate, CaSO4·2H2O) introduces soluble calcium ions, which displace the harmful sodium ions from the clay exchange complex. The displaced sodium forms soluble sodium sulphate, which is then leached out of the root zone with heavy water flushes.',
        trapExplanation: 'Adding limestone (Calcium Carbonate) does not work effectively in alkaline soils because CaCO3 is insoluble at high pH; Gypsum is required because it is soluble and supplies calcium to displace sodium.',
        difficulty: 'HARD',
        isPYQ: true
      }
    ]
  }
];

export async function seedGeographyExpansionCanonicalKnowledge() {
  console.log('Seeding Geography Expansion Canonical Knowledge (CON-GEO-016 to CON-GEO-020)...');

  // 1. Ensure Domain exists
  let domain = await db.domain.findFirst({ where: { slug: 'geography-and-environment' } });
  if (!domain) {
    domain = await db.domain.create({
      data: {
        slug: 'geography-and-environment',
        name: 'Geography & Environment',
        description: 'Physical geography, climatology, oceanography, Indian geography, environmental ecology, and remote sensing.',
        order: 4,
        status: 'ACTIVE'
      }
    });
  }

  // 2. Ensure Subject exists
  let subject = await db.subject.findFirst({
    where: { domainId: domain.id, slug: 'geography-and-environment' }
  });
  if (!subject) {
    subject = await db.subject.create({
      data: {
        domainId: domain.id,
        slug: 'geography-and-environment',
        name: 'Geography & Environment',
        description: 'Comprehensive physical, human, Indian, and environmental geography curriculum.',
        scopeStatement: 'Canonical coverage across physical geography, climatology, oceanography, soils, and environmental ecology.',
        order: 1,
        status: 'ACTIVE'
      }
    });
  }

  // 3. Ensure Source exists
  const source = await db.source.upsert({
    where: { id: 'SRC-NCERT-GEOGRAPHY-EXPANSION' },
    update: {},
    create: {
      id: 'SRC-NCERT-GEOGRAPHY-EXPANSION',
      title: 'NCERT Physical Geography & Indian Environment Master Corpus (Class XI)',
      sourceType: 'STATUTORY_STANDARD',
      authorityTier: 'CENTRAL_REGULATOR',
      description: 'NCERT Class XI Fundamentals of Physical Geography and India: Physical Environment authoritative textbooks.'
    }
  });

  // 4. Pre-fetch exams for mapping
  const examCodes = ['UPSC_CSE', 'RPSC_RAS', 'SSC_CGL', 'UPSC_APFC', 'SBI_PO', 'IBPS_PO', 'RBI_GRADE_B', 'IIBF_DBF'];
  const examMap: Record<string, string> = {};
  for (const code of examCodes) {
    const examSlug = code.toLowerCase().replace(/_/g, '-');
    let exam = await db.exam.findFirst({ where: { slug: examSlug } });
    if (!exam) {
      exam = await db.exam.create({
        data: {
          slug: examSlug,
          name: code.replace(/_/g, ' '),
          conductingBody: code.split('_')[0],
          description: `Competitive Examination: ${code}`
        }
      });
    }
    examMap[code] = exam.id;
  }

  // 5. Seed Concepts
  for (const cDef of GEOGRAPHY_EXPANSION_CANONICAL_CONCEPTS) {
    // Ensure Topic exists
    let topic = await db.topic.findFirst({
      where: { subjectId: subject.id, slug: cDef.topicSlug }
    });
    if (!topic) {
      topic = await db.topic.create({
        data: {
          subjectId: subject.id,
          slug: cDef.topicSlug,
          title: cDef.topicTitle,
          description: cDef.topicDescription,
          order: cDef.topicOrder,
          status: 'ACTIVE'
        }
      });
    }

    // Upsert Concept
    const concept = await db.concept.upsert({
      where: { id: cDef.id },
      update: {
        topicId: topic.id,
        title: cDef.title,
        slug: cDef.slug,
        shortDefinition: cDef.shortDefinition,
        difficulty: cDef.difficulty as any,
        order: parseInt(cDef.id.replace('CON-GEO-', ''), 10),
        status: 'ACTIVE'
      },
      create: {
        id: cDef.id,
        topicId: topic.id,
        title: cDef.title,
        slug: cDef.slug,
        shortDefinition: cDef.shortDefinition,
        difficulty: cDef.difficulty as any,
        order: parseInt(cDef.id.replace('CON-GEO-', ''), 10),
        status: 'ACTIVE'
      }
    });

    // Seed Claims & Evidence
    for (const cl of cDef.claims) {
      const claim = await db.claim.upsert({
        where: { id: cl.id },
        update: {
          conceptId: concept.id,
          statement: cl.statement,
          claimType: cl.claimType as any,
          epistemicLevel: cl.epistemicLevel as any,
          confidence: cl.confidence as any,
          status: 'VERIFIED'
        },
        create: {
          id: cl.id,
          conceptId: concept.id,
          statement: cl.statement,
          claimType: cl.claimType as any,
          epistemicLevel: cl.epistemicLevel as any,
          confidence: cl.confidence as any,
          status: 'VERIFIED'
        }
      });

      await db.evidence.deleteMany({ where: { claimId: claim.id } });
      await db.evidence.create({
        data: {
          claimId: claim.id,
          sourceId: source.id,
          locator: cl.locator,
          excerpt: cl.excerpt,
          evidenceType: 'SCIENTIFIC_BENCHMARK',
          authority: 'AUTHORITATIVE_BODY',
          evidentiarySupport: 'DIRECT_SUPPORT',
          extractionConfidence: 'HIGH'
        }
      });
    }

    // Seed Content Blocks
    await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
    for (const cb of cDef.contentBlocks) {
      await db.contentBlock.create({
        data: {
          conceptId: concept.id,
          type: cb.type as any,
          title: cb.title,
          body: cb.body,
          order: cb.order,
          visibility: 'CANONICAL_FULL'
        }
      });
    }

    // Seed Exam Concept Mappings
    for (const em of cDef.examMappings) {
      const examId = examMap[em.examCode];
      if (examId) {
        await db.examConceptMapping.upsert({
          where: {
            examId_conceptId: {
              examId,
              conceptId: concept.id
            }
          },
          update: {
            syllabusUnit: em.syllabusUnit,
            relevance: em.relevance as any,
            priority: em.priority as any,
            requiredDepth: em.requiredDepth as any,
            notes: em.notes
          },
          create: {
            examId,
            conceptId: concept.id,
            syllabusUnit: em.syllabusUnit,
            relevance: em.relevance as any,
            priority: em.priority as any,
            requiredDepth: em.requiredDepth as any,
            notes: em.notes
          }
        });
      }
    }

    // Revision Units
    await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
    for (const ru of cDef.revisionUnits) {
      await db.revisionUnit.create({
        data: {
          conceptId: concept.id,
          type: ru.type as any,
          content: ru.content,
          priority: 'HIGH',
          order: ru.order
        }
      });
    }

    // Seed Questions
    await db.question.deleteMany({ where: { conceptId: concept.id } });
    for (const q of cDef.questions) {
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
          isPYQ: q.isPYQ,
          examinerTrapPattern: q.examinerTrapPattern
        }
      });
    }
  }

  console.log(`[Geography Expansion Seed] Successfully seeded ${GEOGRAPHY_EXPANSION_CANONICAL_CONCEPTS.length} Geography expansion concepts (CON-GEO-016 to CON-GEO-020).`);
}
