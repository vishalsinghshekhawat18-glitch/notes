/**
 * Batch E3 Canonical Knowledge Seed (Topics 33–37: 20 Concepts)
 * Mind of Aravalli — Academic Reading Hub
 *
 * Covers:
 * - Topic 33: Agriculture, Land Reforms & Food Security (CON-ECO-30 to CON-ECO-32)
 * - Topic 34: Industrial Policy, MSMEs, Disinvestment & Digital Infrastructure (CON-ECO-33 to CON-ECO-36)
 * - Topic 35: Poverty, Inequality, Human Capital & Sustainable Development (CON-ECO-37 to CON-ECO-42)
 * - Topic 36: Employment, Labor Markets, Planning & NITI Aayog (CON-ECO-43 to CON-ECO-46)
 * - Topic 37: Rajasthan State Economy & Flagship Development Programs (CON-ECO-47 to CON-ECO-49)
 */

import { db } from '../db/client';
import { CanonicalConceptDefinition } from './batch-e1-canonical-seed';

export const BATCH_E3_CONCEPTS: CanonicalConceptDefinition[] = [
  // =========================================================================
  // TOPIC 33: AGRICULTURE, LAND REFORMS & FOOD SECURITY
  // =========================================================================
  {
    id: 'CON-ECO-30',
    topicOrder: 33,
    topicSlug: 'agriculture-land-reforms-and-food-security',
    topicTitle: 'Agriculture, Land Reforms & Food Security',
    topicDescription: 'Structural transformation of Indian agriculture, Green Revolution phases, cropping patterns, irrigation architecture, land reform waves, agricultural pricing (MSP, CACP cost concepts A2/FL/C2), and PM-AASHA.',
    slug: 'indian-agriculture-structural-evolution-green-revolution-cropping-patterns-irrigation',
    title: 'Indian Agriculture: Structural Evolution, Green Revolution, Cropping Patterns & Irrigation Architecture',
    shortDefinition: 'The structural and agronomic transformation of Indian agriculture: shift from food deficit ship-to-mouth dependency (PL-480) to self-sufficiency through the Green Revolution (Norman Borlaug, M.S. Swaminathan, HYV seeds, fertilizers, tubewell irrigation), structural issues of cropping pattern skew (monoculture of rice-wheat in NW India), and modern micro-irrigation schemes (PMKSY: Per Drop More Crop).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-30-01',
        statement: 'The First Green Revolution (mid-1960s, initiated under M.S. Swaminathan and C. Subramaniam) introduced High-Yielding Variety (HYV) dwarf wheat and rice seeds, paired with chemical fertilizers, pesticides, canal/tubewell irrigation, and price support through FCI/CACP (1965).',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'M.S. Swaminathan, From Green to Evergreen Revolution; NCERT Class 11 Indian Economic Development, Ch 3',
        excerpt: 'Green Revolution transformed India from ship-to-mouth PL-480 food crisis to grain self-sufficiency.',
      },
      {
        id: 'CLM-ECO-30-02',
        statement: 'The initial Green Revolution was regionally skewed towards Punjab, Haryana, and Western UP and crop-biased towards wheat/rice, causing groundwater depletion and soil salinization.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NITI Aayog Report on Agricultural Reforms',
        excerpt: 'Green revolution caused environmental stresses and water table decline in north-western India.',
      },
      {
        id: 'CLM-ECO-30-03',
        statement: 'Pradhan Mantri Krishi Sinchayee Yojana (PMKSY, launched 2015) consolidates national irrigation strategy across AIBP, Har Khet Ko Pani, Per Drop More Crop (micro-irrigation), and Watershed Development.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'PMKSY Guidelines, Ministry of Agriculture & Farmers Welfare',
        excerpt: 'PMKSY integrates AIBP, Har Khet Ko Pani, Per Drop More Crop, and Watershed Development.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'From Ship-to-Mouth Crisis to Global Food Exporter',
        body: 'In the early 1960s, India faced catastrophic food security crises, forced to rely on PL-480 grain shipments. The resulting Green Revolution fundamentally transformed the nation into one of the world\'s largest agricultural producers.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The Green Revolution Package & Institutional Trio (1965)',
        body: 'Built on three pillars:\n1. **Technological Input Triad:** High-Yielding Variety (HYV) dwarf seeds + NPK Fertilizers + Assured Irrigation.\n2. **Price Assurance (CACP 1965):** Agricultural Prices Commission to calculate Minimum Support Prices (MSP).\n3. **Procurement & Buffer Stocking (FCI 1965):** Food Corporation of India to purchase grain directly at MSP for PDS buffer stocks.',
        order: 2,
      },
      {
        type: 'COMPARISON',
        title: 'Major Agricultural Revolutions in India ("Rainbow Revolution")',
        body: '| Revolution | Commodity Sector | Pioneering Architect |\n| :--- | :--- | :--- |\n| **Green Revolution** | Food grains (Wheat & Rice). | Norman Borlaug & Dr. M.S. Swaminathan. |\n| **White Revolution (Operation Flood 1970)** | Dairy & Milk (AMUL Anand model). | Dr. Verghese Kurien (NDDB). |\n| **Yellow Revolution** | Oilseeds (Mustard, Soybean). | Sam Pitroda (Technology Mission 1986). |\n| **Blue Revolution** | Fisheries & Aquaculture. | Dr. Hiralal Chaudhuri (PM Matsya Sampada). |\n| **Golden Revolution** | Horticulture, Fruits & Honey. | Nirpakh Tutej. |\n| **Evergreen Revolution** | Sustainable ecological agriculture. | Dr. M.S. Swaminathan. |',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Agricultural Sector',
        body: '1. Agriculture contributes ~16–18% of India\'s GVA, but employs ~44–46% of the workforce, reflecting disguised unemployment.\n2. PMKSY *Per Drop More Crop* is managed by the Ministry of Agriculture, while *AIBP* is under the Ministry of Jal Shakti.',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Agricultural Patterns, Green Revolution, PMKSY',
        notes: 'High-frequency topic in Prelims and Mains.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Green Revolution: HYV seeds + CACP/FCI (1965) by Swaminathan & Borlaug. White Revolution = Kurien (Dairy/AMUL). PMKSY (2015) = Per Drop More Crop (Micro-irrigation) + Har Khet Ko Pani.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following was NOT a core component of the Green Revolution package introduced in India in 1965?',
        options: [
          'High-Yielding Variety (HYV) dwarf wheat and rice seeds',
          'Establishment of the Agricultural Prices Commission (CACP) and Food Corporation of India (FCI)',
          'Mandatory universal collective farming under state ownership',
          'Expansion of canal and tubewell irrigation infrastructure',
        ],
        correctAnswer: 'Mandatory universal collective farming under state ownership',
        explanation: 'India\'s Green Revolution was built on individual peasant farm ownership supported by technological inputs and price support, rejecting state collectivization.',
        difficulty: 'EASY',
        isPYQ: false,
      },
    ],
  },

  {
    id: 'CON-ECO-31',
    topicOrder: 33,
    topicSlug: 'agriculture-land-reforms-and-food-security',
    topicTitle: 'Agriculture, Land Reforms & Food Security',
    topicDescription: 'Land Reforms in Post-Independence India: Zamindari Abolition, Tenancy Reforms, Land Ceilings, Bhoodan & Digital Records.',
    slug: 'land-reforms-in-india-zamindari-abolition-tenancy-reforms-land-ceilings-bhoodan-digitization',
    title: 'Land Reforms in India: Zamindari Abolition, Tenancy Reforms, Land Ceilings, Bhoodan & Digitization',
    shortDefinition: 'The socio-legal and economic restructuring of agrarian land ownership in post-independence India: Abolition of Intermediaries, Tenancy Reforms (Operation Barga), Land Ceiling Acts, voluntary Bhoodan-Gramdan (Vinoba Bhave, 1951), Ninth Schedule constitutional protections, and modern digital land administration (DILRMP and PM-SVAMITVA drone surveys).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-31-01',
        statement: 'Abolition of Intermediaries was the most successful phase of land reforms, bringing ~20 million cultivators into direct relationship with the state across ~170 million acres.',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Planning Commission Reports on Land Reforms; NCERT Class 11 Indian Economic Development',
        excerpt: 'Zamindari abolition freed ~20 million cultivators from intermediary exploitation.',
      },
      {
        id: 'CLM-ECO-31-02',
        statement: 'The Bhoodan movement was initiated by Acharya Vinoba Bhave on April 18, 1951 at Pochampally (Telangana) to secure voluntary land donations for landless Dalit peasants.',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Bhoodan-Gramdan Movement Archives',
        excerpt: 'Vinoba Bhave initiated Bhoodan at Pochampally in 1951.',
      },
      {
        id: 'CLM-ECO-31-03',
        statement: 'Modern digital land governance uses DILRMP (14-digit ULPIN / Bhu-Aadhaar) and PM-SVAMITVA (2020) drone mapping to issue legal Property Cards for rural inhabited Abadi land.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Ministry of Panchayati Raj SVAMITVA Guidelines (2020)',
        excerpt: 'SVAMITVA maps rural abadi land using drones to issue property cards.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Dismantling Feudal Agrarian Pyramids',
        body: 'Post-independence land reforms aimed at Social Justice and Economic Efficiency: eliminating intermediary landlords and making the actual tiller the owner of the soil.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The 4 Pillars of Classical Land Reforms',
        body: '1. **Abolition of Intermediaries:** Zamindari/Jagirdari dismantled (High Success).\n2. **Tenancy Reforms:** Rent regulation and security of tenure (Operation Barga in West Bengal).\n3. **Land Ceilings:** Max acreage limits per family (Poor success due to Benami transfers).\n4. **Consolidation of Holdings (Chakbandi):** Merging fragmented plots (Success in Punjab/Haryana).',
        order: 2,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Land Reforms',
        body: '1. Land is strictly a **State Subject (Entry 18, State List)**.\n2. The **1st Constitutional Amendment Act 1951** added the **Ninth Schedule** specifically to protect land reform laws from judicial review.',
        order: 3,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Land Reforms in India, DILRMP, SVAMITVA',
        notes: 'Covers classical land reforms and modern digital property cards.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Land Reforms: Abolition of Zamindari (170M acres), Tenancy (Operation Barga), Ceilings. Land is a State Subject (Entry 18). 1st CAA 1951 added Ninth Schedule. Bhoodan (1951 Vinoba Bhave, Pochampally). Modern: DILRMP (14-digit ULPIN) + SVAMITVA (Drone property cards for rural abadi).',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'In which location did Acharya Vinoba Bhave initiate the historic Bhoodan Movement in April 1951?',
        options: [
          'Wardha, Maharashtra',
          'Pochampally, Telangana',
          'Champaran, Bihar',
          'Bardoli, Gujarat',
        ],
        correctAnswer: 'Pochampally, Telangana',
        explanation: 'Acharya Vinoba Bhave started the Bhoodan (Land Gift) movement on April 18, 1951 at Pochampally village in Telangana (then Andhra Pradesh).',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-ECO-32',
    topicOrder: 33,
    topicSlug: 'agriculture-land-reforms-and-food-security',
    topicTitle: 'Agriculture, Land Reforms & Food Security',
    topicDescription: 'Agricultural Pricing Architecture: MSP, CACP Cost Concepts (A2, A2+FL, C2), e-NAM & PM-AASHA.',
    slug: 'agricultural-pricing-architecture-msp-cacp-cost-concepts-a2-fl-c2-e-nam-pm-aasha',
    title: 'Agricultural Pricing Architecture: MSP, CACP Cost Concepts (A2, A2+FL, C2), e-NAM & PM-AASHA',
    shortDefinition: 'The agricultural pricing framework of India: Minimum Support Price (MSP announced for 22 mandated crops + FRP for Sugarcane), CACP cost formulas (A2, A2+FL, C2), official 1.5x A2+FL formula vs Swaminathan 1.5x C2 formula, PM-AASHA price support mechanisms (PSS, PDPS, PPPS), and e-NAM electronic mandis.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-32-01',
        statement: 'MSP is an administrative price floor announced by the Cabinet Committee on Economic Affairs (CCEA, chaired by PM) on CACP recommendations for 22 mandated crops plus FRP for Sugarcane.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'CACP Price Policy Reports; Ministry of Agriculture Notifications',
        excerpt: 'MSP covers 22 mandated crops + FRP for sugarcane, announced by CCEA on CACP advice.',
      },
      {
        id: 'CLM-ECO-32-02',
        statement: 'CACP computes Cost A2 (paid-out cash), Cost A2+FL (A2 + family labor), and Cost C2 (Comprehensive Cost including land rent and capital interest); Government fixes MSP at 1.5 times Cost A2+FL.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Union Budget 2018-19; Swaminathan Commission Report (2006)',
        excerpt: 'Govt fixes MSP at 1.5x A2+FL cost; Swaminathan Committee recommended 1.5x C2 comprehensive cost.',
      },
      {
        id: 'CLM-ECO-32-03',
        statement: 'PM-AASHA (2018) provides price protection through PSS (physical procurement by NAFED/FCI), PDPS (direct price deficiency cash payout without crop purchase), and PPPS.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Ministry of Agriculture Guidelines on PM-AASHA (2018)',
        excerpt: 'PM-AASHA comprises PSS, PDPS (price deficiency cash payout), and PPPS.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Protecting Farmers from Cobweb Harvest Crashes',
        body: 'Minimum Support Price (MSP) acts as a sovereign safety net to prevent harvest-time distress sales by guaranteeing an assured price floor before sowing.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The 22 Mandated Crops + FRP for Sugarcane',
        body: '* **7 Cereals:** Paddy, Wheat, Maize, Jowar, Bajra, Barley, Ragi.\n* **5 Pulses:** Gram, Tur/Arhar, Moong, Urad, Masur.\n* **7 Oilseeds:** Groundnut, Mustard, Soybean, Sunflower, Sesame, Safflower, Nigerseed.\n* **3 Commercial Crops:** Raw Cotton, Raw Jute, Copra.\n* **1 Statutory FRP:** Sugarcane (Fair and Remunerative Price).',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Cost Concepts: A2 vs A2+FL vs C2',
        body: '* **Cost A2:** Direct cash expenses (seeds, fertilizer, fuel, hired labor).\n* **Cost A2+FL:** Cost A2 + Imputed unpaid Family Labor (FL).\n* **Cost C2:** Cost A2+FL + Imputed rent on owned land + interest on fixed capital.\n* **Policy Formula:** Current MSP is fixed at **$1.5 \\times \\text{Cost (A2+FL)}$**.',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Agricultural Pricing',
        body: '1. CACP **recommends** MSP, but **CCEA (chaired by PM)** formally approves it.\n2. Sugarcane pricing is statutory (FRP), whereas MSP for other crops is administrative policy.',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Agricultural Pricing, MSP, CACP, PM-AASHA',
        notes: 'Classic Prelims & Mains core.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'MSP = 22 crops + Sugarcane FRP. CACP recommends, CCEA (PM) approves. Cost A2 (paid-out) < A2+FL (adds family labor) < C2 (comprehensive). Official MSP = 1.5x A2+FL. PM-AASHA: PSS (physical purchase), PDPS (price gap cash payout), PPPS.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which authority formally approves and announces Minimum Support Prices (MSP) in India?',
        options: [
          'Commission for Agricultural Costs and Prices (CACP)',
          'Cabinet Committee on Economic Affairs (CCEA) chaired by the Prime Minister',
          'NITI Aayog',
          'Food Corporation of India (FCI)',
        ],
        correctAnswer: 'Cabinet Committee on Economic Affairs (CCEA) chaired by the Prime Minister',
        explanation: 'CACP is the advisory body that recommends MSPs, while the Cabinet Committee on Economic Affairs (CCEA) chaired by the Prime Minister gives final statutory executive approval.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  // =========================================================================
  // TOPIC 34: INDUSTRIAL POLICY, MSMES & DIGITAL INFRASTRUCTURE
  // =========================================================================
  {
    id: 'CON-ECO-33',
    topicOrder: 34,
    topicSlug: 'industrial-policy-msmes-and-digital-infrastructure',
    topicTitle: 'Industrial Policy, MSMEs, Disinvestment & Digital Infrastructure',
    topicDescription: 'Evolution of Indian industrial policy (IPR 1948, 1956 Mahalanobis strategy, 1991 LPG reforms), MSME 2020 composite criteria, CPSE classification (Maharatna, Navratna), strategic disinvestment, and Digital Public Infrastructure (DPI).',
    slug: 'industrial-policy-evolution-ipr-1948-1956-mahalanobis-strategy-1991-lpg-reforms-pli-schemes',
    title: 'Industrial Policy Evolution: IPR 1948, 1956 Mahalanobis Strategy, 1991 LPG Reforms & PLI Schemes',
    shortDefinition: 'The historical and contemporary trajectory of industrialization in India: the Industrial Policy Resolution (IPR 1948: mixed economy inception), IPR 1956 ("Economic Constitution of India", Nehru-Mahalanobis heavy industry model, Schedule A/B/C reservation, License-Permit-Quota Raj), the Statement on Industrial Policy (July 24, 1991: delicensing, deregulation, MRTP threshold abolition, public sector reservation reduction to 2 sectors [Atomic Energy & Railway operations]), and modern manufacturing initiatives (Make in India, Production Linked Incentive [PLI] schemes across 14 key sectors).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-33-01',
        statement: 'The Industrial Policy Resolution of 1956 (IPR 1956), known as the "Economic Constitution of India", operationalized the Mahalanobis heavy-industry capital-goods strategy, categorizing industries into Schedule A (17 sectors under exclusive state monopoly), Schedule B (12 sectors progressively state-owned), and Schedule C (private sector regulated via mandatory licensing under the Industries (Development and Regulation) Act 1951).',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Industrial Policy Resolution, 1956; P.C. Mahalanobis, The Approach of Operational Research to Planning in India (1955)',
        excerpt: 'IPR 1956 established state command over commanding heights across Schedule A, B, and C.',
      },
      {
        id: 'CLM-ECO-33-02',
        statement: 'The New Industrial Policy of July 24, 1991 dismantled the License-Permit Raj by abolishing industrial licensing for all industries except a narrow list (currently only 4: aerospace/defense, hazardous chemicals, industrial explosives, and tobacco), abolishing MRTP asset threshold limits, and reducing exclusive public sector reservations to just 2 sectors: Atomic Energy and Railway Operations.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Statement on Industrial Policy (24 July 1991), Ministry of Industry; Monopolies and Restrictive Trade Practices Act amendments',
        excerpt: '1991 policy abolished industrial licensing and reduced public sector reservation to atomic energy and railway operations.',
      },
      {
        id: 'CLM-ECO-33-03',
        statement: 'The Production Linked Incentive (PLI) Scheme (launched 2020) provides financial incentives of 4% to 6% on incremental sales of goods manufactured in India over a 5-year base period across 14 strategic sectors (telecom, mobile manufacturing, pharmaceuticals, automobiles, advanced chemistry cells, solar PV modules) to scale domestic manufacturing and integrate into global supply chains.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NITI Aayog & DPIIT PLI Scheme Notifications (2020-2024)',
        excerpt: 'PLI offers 4-6% cash incentive on incremental domestic sales across 14 key manufacturing sectors.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'From State Command to Competitive Global Manufacturing',
        body: 'At independence, India lacked heavy industrial capacity, machine tools, and power infrastructure. Early policymakers adopted the **Mahalanobis Strategy**—using the State to build the "commanding heights" of heavy capital goods.\n\nWhile this created a diversified industrial base, it degenerated into the bureaucratic stagnation of the **License-Permit-Quota Raj**. The historic **1991 LPG reforms** unshackled private enterprise, followed today by targeted state incentives like the **PLI Scheme** to build global manufacturing scale.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The Great Shift: IPR 1956 vs New Industrial Policy 1991',
        body: '| Dimension | IPR 1956 (Nehru-Mahalanobis) | New Industrial Policy 1991 (LPG Reforms) |\n| :--- | :--- | :--- |\n| **Core Philosophy** | State control over "commanding heights"; Import Substitution Industrialization (ISI). | Market liberalization, private sector primacy, Export-Led Integration. |\n| **Industrial Licensing** | Compulsory licenses required to set up, expand, or diversify any factory (*IDRA 1951*). | **Abolished for >95% of industries** (Retained for only 4 hazardous/defense sectors). |\n| **Public Sector Reservation** | **17 sectors** reserved exclusively for the State (Schedule A). | Reduced to **only 2 sectors: Atomic Energy and Railway Operations**. |\n| **Foreign Investment (FDI)** | Highly restrictive; ceiling of 40% under FERA 1973. | Automatic approval route introduced (up to 51% in 1991, 100% in most sectors today). |\n| **Monopolies Regulation** | Pre-entry asset threshold limits on big business under MRTP Act 1969. | Asset limits abolished; MRTP Commission replaced by **Competition Commission of India (CCI 2002)**. |',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'The Production Linked Incentive (PLI) Scheme Architecture',
        body: '```mermaid\ngraph TD\n    PLI["PLI Scheme: ₹1.97 Lakh Crore Outlay across 14 Sectors"]\n    PLI --> TARGET["1. Select Sectors: Electronics, Telecom, Pharma, Auto, Solar PV, Drones, ACC Batteries"]\n    TARGET --> INC["2. Performance Metric: 4% to 6% cash incentive paid on INCREMENTAL SALES over base year"]\n    INC --> OUT["3. Goal: Scale manufacturing champions, substitute Chinese imports, generate export surplus"]\n```',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Industrial Policy',
        body: '1. **Sectors Reserved for Public Sector:** Currently **ONLY 2 SECTORS** are reserved exclusively for the public sector: **Atomic Energy** and **Railway Operations**.\n2. **4 Sectors with Compulsory Industrial Licensing:** 1. Aerospace and defense equipment, 2. Industrial explosives, 3. Hazardous chemicals, 4. Cigars and tobacco manufacturing.\n3. **Eight Core Industries (Index of Eight Core Industries - ICI):** Coal, Crude Oil, Natural Gas, Refinery Products (largest weight ~28%), Fertilizers (smallest weight ~2.6%), Steel, Cement, Electricity. Combined weight in IIP is **40.27%**.',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Industrial Policies, LPG Reforms, PLI Scheme, Eight Core Industries',
        notes: 'High-frequency Prelims & Mains topic on 1991 reforms, PLI, and Eight Core Industries weights.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'IPR 1956 = Economic Constitution, Mahalanobis heavy industry model, Schedule A/B/C. 1991 Industrial Policy = Abolished License Raj, reduced public monopoly to 2 sectors (Atomic Energy & Railways). 4 sectors require compulsory licensing (Defense, Explosives, Hazardous Chemicals, Tobacco). PLI Scheme (2020) = 4-6% incentive on incremental sales across 14 sectors. Eight Core Industries = 40.27% weight in IIP (Refinery Products largest, Fertilizers smallest).',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which sector carries the LARGEST individual weightage within the "Index of Eight Core Industries" in India?',
        options: [
          'Electricity Generation',
          'Petroleum Refinery Products',
          'Steel Production',
          'Coal Mining',
        ],
        correctAnswer: 'Petroleum Refinery Products',
        explanation: 'Within the Index of Eight Core Industries (which carries a 40.27% total weight in the Index of Industrial Production - IIP), Petroleum Refinery Products holds the largest individual weight at 28.04%, followed by Electricity (19.85%) and Steel (17.92%).',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-ECO-34',
    topicOrder: 34,
    topicSlug: 'industrial-policy-msmes-and-digital-infrastructure',
    topicTitle: 'Industrial Policy, MSMEs, Disinvestment & Digital Infrastructure',
    topicDescription: 'MSME Sector Architecture & 2020 Revised Composite Definition.',
    slug: 'msme-sector-framework-revised-2020-composite-criteria-udyam-portal-cgtmse-credit-schemes',
    title: 'MSME Sector Framework: Revised 2020 Composite Criteria, Udyam Portal & Credit Guarantees',
    shortDefinition: 'The statutory framework governing Micro, Small and Medium Enterprises under the MSMED Act 2006: the revised July 1, 2020 composite classification criteria combining Investment in Plant & Machinery AND Annual Turnover (eliminating the historical distinction between manufacturing and services), self-declaration on the Udyam Registration Portal, Samadhaan delayed payments portal (Section 15: compound interest at 3x RBI bank rate after 45 days), Sambandh public procurement policy (25% mandatory purchase by CPSEs), and CGTMSE credit guarantees.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-34-01',
        statement: 'Under the revised MSME classification effective July 1, 2020 (amending MSMED Act 2006), the dual criteria of Investment in Plant & Machinery AND Annual Turnover apply uniformly across both Manufacturing and Services: Micro (Investment <= ₹1 Cr & Turnover <= ₹5 Cr), Small (Investment <= ₹10 Cr & Turnover <= ₹50 Cr), and Medium (Investment <= ₹50 Cr & Turnover <= ₹250 Cr); export turnover is statutorily excluded from turnover calculation.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Ministry of MSME Gazette Notification S.O. 2119(E), dated 26 June 2020 (effective 1 July 2020)',
        excerpt: 'Revised composite criteria: Micro (1/5 Cr), Small (10/50 Cr), Medium (50/250 Cr). Exports excluded.',
      },
      {
        id: 'CLM-ECO-34-02',
        statement: 'Under Section 15 and 16 of the MSMED Act 2006, buyers must make payments to MSME suppliers within a maximum statutory period of 45 days; failure to pay attracts mandatory compound interest with monthly rests at three times the RBI Bank Rate from the appointed day.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15-18)',
        excerpt: 'Delayed payments mandate payment within 45 days; penalty is 3x RBI bank rate compound interest.',
      },
      {
        id: 'CLM-ECO-34-03',
        statement: 'The Public Procurement Policy for MSEs mandates Central Ministries, Departments, and CPSEs to procure a minimum of 25% of their total annual purchases from Micro and Small Enterprises, with sub-targets of 4% from SC/ST-owned MSEs and 3% from Women-owned MSEs.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Public Procurement Policy for Micro and Small Enterprises (MSEs) Order, 2012 (amended 2018)',
        excerpt: 'Mandatory 25% procurement from MSEs (including 4% SC/ST and 3% Women MSE sub-targets).',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Backbone of Indian Employment & Grassroots Enterprise',
        body: 'The MSME sector is the true powerhouse of the Indian economy: contributing **~30% of India\'s GDP**, **~45% of total manufacturing output**, **~48% of merchandise exports**, and employing over **110 million workers**.\n\nPrior to 2020, definitions were based solely on investment in machinery, which discouraged small enterprises from growing because expanding capacity meant losing small-business tax concessions and priority lending status. The 2020 reform eliminated this "dwarfism trap".',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The 2020 Revised Composite MSME Definition Matrix',
        body: '| MSME Category | Maximum Investment in Plant & Machinery / Equipment | Maximum Annual Turnover (Excluding Exports) |\n| :--- | :--- | :--- |\n| **MICRO Enterprise** | **$\\le ₹1 \\text{ Crore}$** | **$\\le ₹5 \\text{ Crore}$** |\n| **SMALL Enterprise** | **$\\le ₹10 \\text{ Crore}$** | **$\\le ₹50 \\text{ Crore}$** |\n| **MEDIUM Enterprise** | **$\\le ₹50 \\text{ Crore}$** | **$\\le ₹250 \\text{ Crore}$** |\n\n> [!IMPORTANT]\n> **Key Innovations of 2020 Criteria:**\n> 1. **Uniform Criteria:** Abolished the previous artificial distinction between manufacturing enterprises and service enterprises.\n> 2. **Export Turnover Exclusion:** Export turnover is **NOT counted** towards the turnover ceiling, incentivizing MSMEs to expand globally without fear of losing MSME classification.',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'The MSME Institutional Support & Digital Ecosystem',
        body: '```mermaid\ngraph TD\n    MSME["MSME Institutional Architecture"]\n    MSME --> UDYAM["1. Udyam Registration: Paperless self-declaration linked with Income Tax & GSTN databases"]\n    MSME --> SAMADHAAN["2. MSME Samadhaan: Portal to monitor delayed payments (Section 15: 45-day payment rule)"]\n    MSME --> SAMBANDH["3. MSME Sambandh: Monitoring 25% mandatory public procurement by CPSEs"]\n    MSME --> TREDS["4. TReDS (Trade Receivables Discounting System): Electronic invoice discounting platform"]\n    MSME --> CGTMSE["5. CGTMSE: Collateral-free loan guarantee up to ₹5 Crore for MSEs"]\n```',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in MSME Framework',
        body: '1. **Export Exclusion Rule:** When testing whether a firm is an MSME, **deduct export revenues from total turnover**.\n2. **Delayed Payment Penalty:** Penalty interest is **THREE TIMES (3x) the RBI Bank Rate with monthly rests**.\n3. **Mandatory Procurement Targets:** 25% total procurement from MSEs (including **4% earmarked for SC/ST MSEs** and **3% for Women MSEs**).',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: MSME Sector Definition, TReDS, Delayed Payments, Contribution to GDP',
        notes: 'Prelims questions on 2020 composite criteria (1/5, 10/50, 50/250 Cr) and export exclusion.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 & Paper 2 (PPB): Module C - MSME Financing & Regulatory Framework',
        notes: 'Core banking topic: CGTMSE limits, Udyam registration, and MSMED Act provisions.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'MSME 2020 Definition: Micro (<=₹1 Cr Invest / <=₹5 Cr Turnover), Small (<=₹10 Cr / <=₹50 Cr), Medium (<=₹50 Cr / <=₹250 Cr). Exports EXCLUDED from turnover. Delayed Payments (Sec 15): Max 45 days; penalty is 3x RBI Bank Rate compound interest. Public Procurement: 25% from MSEs (4% SC/ST, 3% Women). Udyam = Self-declaration portal. TReDS = Bill discounting.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under the revised composite criteria effective from July 1, 2020, what are the maximum Investment and Turnover limits for an enterprise to be classified as a "SMALL ENTERPRISE"?',
        options: [
          'Investment up to ₹1 Crore and Turnover up to ₹5 Crore',
          'Investment up to ₹10 Crore and Turnover up to ₹50 Crore',
          'Investment up to ₹25 Crore and Turnover up to ₹100 Crore',
          'Investment up to ₹50 Crore and Turnover up to ₹250 Crore',
        ],
        correctAnswer: 'Investment up to ₹10 Crore and Turnover up to ₹50 Crore',
        explanation: 'Under the 2020 revised composite criteria, a Small Enterprise is defined as an enterprise where Investment in Plant & Machinery/Equipment does not exceed ₹10 Crore AND Annual Turnover does not exceed ₹50 Crore (excluding export turnover).',
        trapExplanation: 'Candidates confuse Small (10/50 Cr) with Micro (1/5 Cr) or Medium (50/250 Cr).',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-ECO-35',
    topicOrder: 34,
    topicSlug: 'industrial-policy-msmes-and-digital-infrastructure',
    topicTitle: 'Industrial Policy, MSMEs, Disinvestment & Digital Infrastructure',
    topicDescription: 'Central Public Sector Enterprises (CPSEs), Ratna Classification & Strategic Disinvestment Architecture.',
    slug: 'central-public-sector-enterprises-maharatna-navratna-strategic-disinvestment-dipam-policy',
    title: 'Central Public Sector Enterprises: Maharatna, Navratna, Miniratna & Strategic Disinvestment Policy',
    shortDefinition: 'The corporate governance and privatization framework for Central Public Sector Enterprises (CPSEs): the three-tier autonomy classification (Maharatna, Navratna, Miniratna Category I & II criteria and financial delegation limits), the Department of Investment and Public Asset Management (DIPAM, Ministry of Finance), and the New PSE Policy for Atmanirbhar Bharat (2021) categorizing sectors into Strategic (max 4 CPSEs retained) vs Non-Strategic sectors.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-35-01',
        statement: 'CPSEs are granted graduated financial autonomy under three Ratna tiers: Maharatna (can invest up to ₹5,000 Crore or 15% of net worth in a project without Cabinet approval), Navratna (up to ₹1,000 Crore or 15% of net worth), and Miniratna Category-I (up to ₹500 Crore or net worth).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Department of Public Enterprises (DPE) Guidelines on Maharatna/Navratna Schemes',
        excerpt: 'Maharatna boards can invest up to ₹5,000 Cr; Navratna boards up to ₹1,000 Cr.',
      },
      {
        id: 'CLM-ECO-35-02',
        statement: 'To qualify for Maharatna status, a CPSE must already hold Navratna status, be listed on an Indian stock exchange with minimum prescribed public shareholding, and have recorded over the previous 3 consecutive years: an average annual net profit after tax of >₹5,000 Crore, an average annual net worth of >₹15,000 Crore, and an average annual turnover of >₹25,000 Crore.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Department of Public Enterprises Criteria for Grant of Maharatna Status',
        excerpt: 'Maharatna criteria: 3-yr average Net Profit > ₹5,000 Cr, Net Worth > ₹15,000 Cr, Turnover > ₹25,000 Cr.',
      },
      {
        id: 'CLM-ECO-35-03',
        statement: 'The New Public Sector Enterprise Policy (2021) classifies CPSEs into Strategic Sectors (Atomic energy/space/defense, Transport/telecom, Power/petroleum/coal, Banking/insurance — where a bare minimum of 1 to 4 CPSEs will be retained and rest privatized/merged) and Non-Strategic Sectors (where all CPSEs will be privatized or closed).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'New Public Sector Enterprise (PSE) Policy for Atmanirbhar Bharat (Gazette Notification Feb 2021)',
        excerpt: 'New PSE Policy 2021: 4 strategic sectors with bare minimum presence; non-strategic CPSEs to be privatized or closed.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Balancing Sovereign Ownership with Commercial Agility',
        body: 'State-owned enterprises historically suffered from bureaucratic paralysis, requiring line ministry approval for everyday capital decisions. To allow efficient CPSEs (like ONGC, NTPC, IOCL) to compete globally against private giants, the government created the **Ratna Autonomy Framework**, granting board-level financial independence.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The Ratna Autonomy Classification & Eligibility Criteria',
        body: '| Ratna Status | Financial Autonomy (Investment Limit per Project) | Key Eligibility Criteria |\n| :--- | :--- | :--- |\n| **MAHARATNA** | Up to **₹5,000 Crore** or 15% of Net Worth. | • Must be **Navratna** and listed on stock exchange.<br>• Last 3-year average **Net Profit $> ₹5,000 \\text{ Cr}$**.<br>• Last 3-year average **Net Worth $> ₹15,000 \\text{ Cr}$**.<br>• Last 3-year average **Turnover $> ₹25,000 \\text{ Cr}$**.<br>• Significant global presence. |\n| **NAVRATNA** | Up to **₹1,000 Crore** or 15% of Net Worth in a single project (max 30% in a year). | • Must be **Miniratna Category-I** with "Excellent" or "Very Good" MoU rating in 3 of last 5 years.<br>• Score $\\ge 60$ out of 100 on 6 financial performance parameters. |\n| **MINIRATNA (Cat-I)**| Up to **₹500 Crore** or equal to Net Worth. | Made profits continuously for last 3 years, with positive net worth and pre-tax profit $\\ge ₹30 \\text{ Cr}$ in at least one year. |\n| **MINIRATNA (Cat-II)**| Up to **₹300 Crore** or 50% of Net Worth. | Made profits continuously for last 3 years and positive net worth. |',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Disinvestment Methods & The New PSE Policy 2021',
        body: '```mermaid\ngraph TD\n    DIS["Disinvestment Framework (Administered by DIPAM)"]\n    DIS --> MIN["1. Minority Stake Sale: Initial Public Offerings (IPO), Offer for Sale (OFS), Exchange Traded Funds (CPSE ETF, Bharat 22)"]\n    DIS --> STRAT["2. Strategic Disinvestment: Sale of 50%+ government equity along with transfer of management control (e.g. Air India to Tata)"]\n    DIS --> ASSET["3. Asset Monetization: National Monetization Pipeline (NMP) leasing brownfield assets without selling ownership"]\n```\n\n### The 4 Strategic Sectors under 2021 Policy\n1. Atomic energy, Space, and Defence;\n2. Transport and Telecommunications;\n3. Power, Petroleum, Coal, and other minerals;\n4. Banking, Insurance, and Financial Services.',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in CPSE Governance',
        body: '1. **DIPAM Location:** The Department of Investment and Public Asset Management (DIPAM) is located in the **Ministry of Finance** (NOT Ministry of Heavy Industries).\n2. **National Investment Fund (NIF - 2005):** Disinvestment proceeds are credited to the **Consolidated Fund of India** and channeled into the NIF to finance social infrastructure and CPSE recapitalization.\n3. **National Monetization Pipeline (NMP):** Monetizes **BROWNFIELD OPERATIONAL ASSETS** through concessions/leases; the government **retains core underlying asset ownership**.',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: CPSEs, Maharatna Criteria, Strategic Disinvestment, DIPAM, NMP',
        notes: 'Prelims questions on Maharatna financial limits and NMP asset leasing.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'CPSE Tiers: Maharatna (₹5,000 Cr autonomy; 3-yr avg: ₹5k Cr profit, ₹15k Cr net worth, ₹25k Cr turnover). Navratna (₹1,000 Cr). Miniratna I (₹500 Cr). DIPAM = Ministry of Finance. New PSE Policy 2021: 4 Strategic Sectors (max 1-4 CPSEs retained); Non-strategic privatized/closed. NMP = Brownfield asset leasing (ownership retained).',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following is an essential 3-year financial average threshold required for a CPSE to be granted "MAHARATNA" status?',
        options: [
          'Average annual Net Profit after tax of more than ₹5,000 Crore',
          'Average annual Net Worth of more than ₹50,000 Crore',
          'Average annual Turnover of more than ₹1,00,000 Crore',
          'Total market capitalization exceeding ₹2,00,000 Crore on the National Stock Exchange',
        ],
        correctAnswer: 'Average annual Net Profit after tax of more than ₹5,000 Crore',
        explanation: 'To attain Maharatna status, a CPSE must recorded over the previous 3 consecutive years: an average annual Net Profit after tax of > ₹5,000 Crore, an average annual Net Worth of > ₹15,000 Crore, and an average annual Turnover of > ₹25,000 Crore.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-ECO-36',
    topicOrder: 34,
    topicSlug: 'industrial-policy-msmes-and-digital-infrastructure',
    topicTitle: 'Industrial Policy, MSMEs, Disinvestment & Digital Infrastructure',
    topicDescription: 'Services Sector & India\'s Digital Public Infrastructure (DPI): India Stack, Account Aggregator & ONDC.',
    slug: 'services-sector-and-indias-digital-public-infrastructure-dpi-india-stack-account-aggregator-ondc',
    title: 'Services Sector & India\'s Digital Public Infrastructure (DPI): India Stack, Account Aggregator & ONDC',
    shortDefinition: 'The structural transformation of India\'s services sector (~53-55% of GVA) and the pioneering Digital Public Infrastructure (DPI / "India Stack") architecture: the four layers of India Stack (Identity: Aadhaar, Payments: UPI/NPCI, Documents: DigiLocker, Data Empowerment: DEPA / Account Aggregator framework), and open-network ecommerce democratization through the Open Network for Digital Commerce (ONDC).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-36-01',
        statement: 'India Stack is a unified set of open APIs and digital public goods built on four foundational layers: Identity Layer (Aadhaar 12-digit biometric ID), Payments Layer (Unified Payments Interface - UPI operated by NPCI), Paperless Document Layer (DigiLocker / e-Sign), and Consent-Based Data Empowerment Layer (Account Aggregator under DEPA).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'India Stack Technical Architecture; NITI Aayog Data Empowerment and Protection Architecture (DEPA) Draft',
        excerpt: 'India Stack comprises 4 layers: Identity (Aadhaar), Payments (UPI), Paperless (DigiLocker), and Consent (Account Aggregator).',
      },
      {
        id: 'CLM-ECO-36-02',
        statement: 'The Account Aggregator (AA) framework regulated by the Reserve Bank of India acts as a consent manager that enables individuals and MSMEs to securely share their financial data from Financial Information Providers (FIPs: banks, mutual funds, tax portals) to Financial Information Users (FIUs: lenders, wealth managers) without the AA viewing or storing user data.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Direction – Non-Banking Financial Company - Account Aggregator (Reserve Bank) Directions, 2016',
        excerpt: 'Account Aggregator facilitates encrypted, consent-based financial data sharing without data storage.',
      },
      {
        id: 'CLM-ECO-36-03',
        statement: 'Open Network for Digital Commerce (ONDC), established as a Section 8 non-profit company by DPIIT, unbundles e-commerce from closed platform monopolies (Amazon, Flipkart) into an open interoperable network using open Beckn protocols, allowing any seller on any network application to transact with any buyer.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Department for Promotion of Industry and Internal Trade (DPIIT) ONDC Strategy Paper',
        excerpt: 'ONDC unbundles digital commerce into an open network based on open specifications.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Building Digital Roads & Railways: Public Goods vs Monopolistic Silos',
        body: 'In western market economies, digital infrastructure evolved as private corporate silos (proprietary app stores, closed payment gateways, walled-garden e-commerce platforms).\n\nIndia pioneered a radically different paradigm: building **Digital Public Infrastructure (DPI)** as open, interoperable sovereign rails—similar to physical highways—upon which millions of competing private startups, banks, and merchants innovate.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The 4 Architectural Layers of India Stack',
        body: '```mermaid\ngraph TD\n    IS["INDIA STACK: Open Interoperable DPI Rails"]\n    IS --> L1["1. IDENTITY LAYER: Aadhaar (Unique 12-digit biometric digital identity) + e-KYC"]\n    IS --> L2["2. PAYMENTS LAYER: Unified Payments Interface (UPI - NPCI), IMPS, AePS, FASTag"]\n    IS --> L3["3. PAPERLESS LAYER: DigiLocker (Legally valid cloud documents under IT Act Rule 9A), e-Sign"]\n    IS --> L4["4. CONSENT & DATA LAYER: Account Aggregator (DEPA framework: Encrypted consent-based financial data sharing)"]\n```',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'ONDC: Unbundling Platform Monopolies',
        body: '### Platform Model vs ONDC Open Network Model\n* **Platform-Centric E-commerce (Closed Garden):** Buyer and seller must both be registered on the same app (Amazon or Flipkart), which controls catalog ranking, commissions, and logistics.\n* **ONDC Open Network (Interoperable Protocol):** Buyer on App A (e.g. Paytm) can discover and buy from a small kirana seller on App B (e.g. Mystore), with delivery fulfilled by Logistics Provider C (e.g. Dunzo) via **open Beckn protocols**.',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Digital Infrastructure',
        body: '1. **NPCI Legal Status:** The National Payments Corporation of India (NPCI) is a **Section 8 Non-Profit Company** set up under the *Payment and Settlement Systems Act 2007* by RBI and Indian Banks\' Association (IBA).\n2. **DigiLocker Legal Validity:** Documents fetched via DigiLocker are **statutorily on par with original physical documents** under Rule 9A of the *Information Technology (Preservation and Retention of Information by Intermediaries) Rules 2016*.\n3. **Account Aggregator Data Blindness:** Account Aggregators are **"data blind"**—they only transmit encrypted data and cannot read or store customer financial data.',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Digital Public Infrastructure, India Stack, ONDC, Account Aggregator, Services Sector',
        notes: 'High-frequency topic in Prelims & Mains regarding DPI, UPI global expansion, and DEPA.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Services = 54% of Indian GVA. India Stack 4 Layers: Identity (Aadhaar), Payments (UPI - NPCI), Paperless (DigiLocker IT Act Rule 9A), Consent (Account Aggregator under DEPA). Account Aggregators are data-blind consent managers. ONDC = Section 8 non-profit open e-commerce network unbundling platform monopolies using Beckn protocol.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'In the context of India\'s Digital Public Infrastructure, which layer of the "India Stack" is operationalized by the Account Aggregator (AA) framework regulated by the Reserve Bank of India?',
        options: [
          'The Biometric Identity Layer',
          'The Interoperable Payments Layer',
          'The Consent-Based Data Empowerment Layer (DEPA)',
          'The Hardware Semiconductor Fabrication Layer',
        ],
        correctAnswer: 'The Consent-Based Data Empowerment Layer (DEPA)',
        explanation: 'The Account Aggregator (AA) framework operationalizes the Data Empowerment and Protection Architecture (DEPA) layer of the India Stack, acting as a regulated consent manager that enables citizens to securely share encrypted financial data across financial institutions without the AA viewing or storing the data.',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },

  // =========================================================================
  // TOPIC 35: POVERTY, INEQUALITY, HUMAN CAPITAL & SUSTAINABILITY
  // =========================================================================
  {
    id: 'CON-ECO-37',
    topicOrder: 35,
    topicSlug: 'poverty-inequality-human-capital-and-sustainability',
    topicTitle: 'Poverty, Inequality, Human Capital & Sustainable Development',
    topicDescription: 'Poverty measurement, Headcount Ratio, Poverty Gap, Lorenz Curve, Gini Coefficient, poverty estimation committees (Alagh to Rangarajan), NITI Aayog Multidimensional Poverty Index (MPI), Amartya Sen Capability Approach, and Sustainable Development / Carbon Economics.',
    slug: 'concepts-of-poverty-absolute-vs-relative-headcount-ratio-poverty-gap-squared-poverty-gap',
    title: 'Concepts of Poverty: Absolute vs Relative Poverty, Headcount Ratio, Poverty Gap & Foster-Greer-Thorbecke Index',
    shortDefinition: 'The theoretical and quantitative dimensions of poverty: Absolute Poverty (deprivation of minimum biological subsistence / Poverty Line Basket [PLB]) vs Relative Poverty (inequality of income distribution relative to median living standards), and the Foster-Greer-Thorbecke (FGT) family of poverty indices (Headcount Ratio $P_0$, Poverty Gap Index $P_1$ measuring depth of poverty, and Squared Poverty Gap / Poverty Severity $P_2$ measuring inequality among the poor).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-37-01',
        statement: 'Absolute Poverty measures the inability to attain a minimum biologically determined physical subsistence basket of food, clothing, and shelter (anchored to a Poverty Line Basket); Relative Poverty measures economic deprivation relative to the prevailing living standard or median income of society.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Amartya Sen, Poverty and Famines: An Essay on Entitlement and Deprivation (1981); World Bank Poverty Guidelines',
        excerpt: 'Absolute poverty reflects biological deprivation; relative poverty reflects social inequality.',
      },
      {
        id: 'CLM-ECO-37-02',
        statement: 'Under the Foster-Greer-Thorbecke (FGT) class of poverty metrics: the Headcount Ratio (P0 = q / N) measures poverty incidence; the Poverty Gap Index (P1) measures the average financial shortfall of the poor from the poverty line (poverty depth); and the Squared Poverty Gap Index (P2) measures the severity of poverty by assigning higher mathematical weight to the poorest of the poor.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'James Foster, Joel Greer, and Erik Thorbecke (Econometrica, 1984); World Bank Poverty Manual',
        excerpt: 'FGT metric: P0 (incidence), P1 (depth/poverty gap), P2 (severity/squared poverty gap).',
      },
      {
        id: 'CLM-ECO-37-03',
        statement: 'The World Bank International Extreme Poverty Line is set at $2.15 per person per day (in 2017 Purchasing Power Parity [PPP] terms, revised from the 2011 PPP $1.90 line) aligned with SDG 1.1 targeting the eradication of extreme poverty by 2030.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'World Bank Poverty and Inequality Platform (PIP, Sept 2022 Update); UN SDG Indicator 1.1.1',
        excerpt: 'World Bank extreme poverty line is $2.15/day (2017 PPP terms).',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Counting the Poor vs Measuring How Poor They Are',
        body: 'Knowing that 10 million people fall below the poverty line (**Headcount Ratio**) tells only half the story. Are these citizens 50 paise below the poverty line, or are they starving at 50% below the line?\n\nIf a government gives a small subsidy to those just below the poverty line, the headcount ratio drops sharply, even if the destitute poorest receive zero help. To prevent this statistical distortion, economists measure the **Poverty Gap** and **Poverty Severity**.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Absolute vs Relative Poverty Matrix',
        body: '| Parameter | Absolute Poverty | Relative Poverty |\n| :--- | :--- | :--- |\n| **Core Concept** | Severe deprivation of basic physiological human needs (caloric intake, shelter, water, clothing). | Income falling significantly below median national living standards (e.g. $<50\\%$ of median income). |\n| **Benchmark** | Fixed minimum consumption threshold (**Poverty Line Basket - PLB**). | Floating societal income distribution (**Lorenz Curve / Median Income**). |\n| **Elimination Feasibility**| Can theoretically be **completely eradicated** as living standards rise. | **Cannot be eradicated** in any society with unequal income distribution. |\n| **Prevalence** | Primary metric in **developing economies (India, Sub-Saharan Africa)**. | Primary metric in **advanced developed economies (OECD, European Union)**. |',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'The Foster-Greer-Thorbecke (FGT) Formula Suite',
        body: '$$\\mathbf{P_\\alpha = \\frac{1}{N} \\sum_{i=1}^{q} \\left( \\frac{z - y_i}{z} \\right)^\\alpha}$$\n\n* **$N$:** Total Population | **$q$:** Number of individuals below poverty line | **$z$:** Poverty line threshold | **$y_i$:** Income/consumption of individual $i$.\n\n1. **$\\alpha = 0$ (Headcount Ratio - $P_0$):** $\\mathbf{P_0 = \\frac{q}{N}}$ (Proportion of population living below poverty line).\n2. **$\\alpha = 1$ (Poverty Gap Index - $P_1$):** Measures the average normalized distance between poor individuals\' income and the poverty line (indicates the minimum financial transfer per capita required to lift all poor to the poverty line).\n3. **$\\alpha = 2$ (Squared Poverty Gap / Poverty Severity - $P_2$):** Squares the poverty gap of each individual, giving higher weight to those far below the poverty line (captures inequality among the poor).',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Poverty Concepts',
        body: '1. **World Bank Global Line:** Current extreme poverty line is **\\$2.15 per day (2017 PPP)**, NOT \\$1.90 (2011 PPP) and NOT \\$1.25.\n2. **Headcount Ratio Limitation:** The Headcount Ratio violates the *Sen Monotonicity Axiom* (if income of a poor person falls, headcount ratio does not change) and the *Sen Transfer Axiom* (if income is transferred from a poor person to a richer poor person, headcount ratio may artificially improve).',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Poverty Concepts, Absolute vs Relative, Poverty Gap Index, SDG 1',
        notes: 'Covers FGT index definitions, World Bank $2.15 line, and Sen axioms.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Absolute Poverty = Deprivation of minimum subsistence basket (developing nations). Relative Poverty = Income < 50% of median (developed nations). FGT Index: P0 = Headcount Ratio (incidence), P1 = Poverty Gap Index (depth/transfer needed), P2 = Squared Poverty Gap (severity/inequality among poor). World Bank Extreme Poverty Line = $2.15/day (2017 PPP).',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following poverty indices measures the AVERAGE DEPTH of poverty by quantifying the mean shortfall of poor households from the poverty line?',
        options: [
          'Poverty Headcount Ratio (P0)',
          'Poverty Gap Index (P1)',
          'Squared Poverty Gap Index (P2)',
          'Human Development Index (HDI)',
        ],
        correctAnswer: 'Poverty Gap Index (P1)',
        explanation: 'The Poverty Gap Index (P1 in the Foster-Greer-Thorbecke framework) measures the depth of poverty by calculating the average shortfall of poor individuals from the poverty line as a fraction of the poverty line, indicating the minimum financial transfer required to eliminate poverty.',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },

  {
    id: 'CON-ECO-38',
    topicOrder: 35,
    topicSlug: 'poverty-inequality-human-capital-and-sustainability',
    topicTitle: 'Poverty, Inequality, Human Capital & Sustainable Development',
    topicDescription: 'Measuring Economic Inequality: Lorenz Curve, Gini Coefficient & Palma Ratio.',
    slug: 'measuring-economic-inequality-lorenz-curve-gini-coefficient-palma-ratio-consumption-vs-wealth-gini',
    title: 'Measuring Economic Inequality: Lorenz Curve, Gini Coefficient, Palma Ratio & Wealth vs Consumption Gini',
    shortDefinition: 'The geometric and mathematical measurement of economic inequality: the Lorenz Curve (Max O. Lorenz, 1905: cumulative population vs cumulative income/wealth), the Gini Coefficient (Corrado Gini, 1912: ratio of Area A to Area A+B), the Palma Ratio (share of top 10% divided by bottom 40%), the 20/20 Ratio, and the structural divergence between Consumption Gini (~0.35 derived from NSO MPCE surveys) and Wealth Gini (~0.75 in World Inequality Report) in India.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-38-01',
        statement: 'The Lorenz Curve is a graphical representation of income/wealth distribution plotting cumulative percentage of population against cumulative percentage of income earned; the 45-degree diagonal line represents the Line of Perfect Equality.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Max O. Lorenz, Methods of Measuring the Concentration of Wealth (1905); NCERT Class 12 Microeconomics',
        excerpt: 'Lorenz curve plots cumulative population against cumulative income relative to 45-degree equality line.',
      },
      {
        id: 'CLM-ECO-38-02',
        statement: 'The Gini Coefficient is the mathematical ratio: Gini = Area A / (Area A + Area B), bounded between 0.0 (Perfect Equality, where everyone has identical income) and 1.0 (Absolute Inequality, where 1 individual earns all national income); the further the Lorenz curve bows away from the 45-degree line, the higher the Gini coefficient.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Corrado Gini, Variability and Mutability (1912); World Bank Inequality Metrics',
        excerpt: 'Gini Coefficient = Area A / (Area A + Area B). Scale 0 (perfect equality) to 1 (perfect inequality).',
      },
      {
        id: 'CLM-ECO-38-03',
        statement: 'In India, the Consumption Gini Coefficient (derived from NSO Household Consumption Expenditure Surveys) is ~0.30-0.35, whereas the Wealth Gini Coefficient is ~0.75-0.80 (World Inequality Lab), because consumption inequality is bounded by physical physiological survival limits while financial wealth can accumulate without upper bound.',
        claimType: 'CENSUS_DATA',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'MoSPI Household Consumption Expenditure Survey (HCES 2022-23); World Inequality Report (2022/2024)',
        excerpt: 'India Consumption Gini is ~0.35; Wealth Gini is ~0.75 due to wealth compounding.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Visualizing the Geometry of Inequality',
        body: 'If 100 citizens in a country each earn exactly ₹10,000 a month, 20% of the population earns 20% of total income, 50% earns 50%, and 100% earns 100%. Plotting this yields a straight 45-degree diagonal line (**Line of Perfect Equality**).\n\nIn the real world, the bottom 50% of citizens might earn only 15% of national income, while the top 10% captures 50%. The actual curve sags downward (**Lorenz Curve**). The area of the gap between the straight line and the bowed curve measures the **Gini Coefficient**.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The Lorenz Curve & Gini Coefficient Formula',
        body: '```mermaid\ngraph TD\n    DIAG["45-Degree Line of Perfect Equality"]\n    LC["Lorenz Curve (Actual Income Distribution)"]\n    DIAG --- AREA_A["Area A: Gap between Equality Line & Lorenz Curve"]\n    AREA_A --- LC\n    LC --- AREA_B["Area B: Area under Lorenz Curve down to axis"]\n```\n\n$$\\mathbf{\\text{Gini Coefficient} = \\frac{\\text{Area A}}{\\text{Area A} + \\text{Area B}}}$$\n\n* **Gini = 0.0:** Perfect Equality (Lorenz curve lies on 45-degree line).\n* **Gini = 1.0 (or 100%):** Total Inequality (Lorenz curve lies along horizontal axis, rising only at the final person).',
        order: 2,
      },
      {
        type: 'COMPARISON',
        title: 'Inequality Indicators Comparison Suite',
        body: '| Indicator | Mathematical Formula / Concept | Primary Utility |\n| :--- | :--- | :--- |\n| **Gini Coefficient** | $\\frac{\\text{Area A}}{\\text{Area A} + \\text{Area B}}$ | Comprehensive standard aggregate inequality benchmark ($0$ to $1$). |\n| **Palma Ratio (Gabriel Palma)** | $\\mathbf{\\frac{\\text{Income Share of Top 10\\%}}{\\text{Income Share of Bottom 40\\%}}}$ | Focuses on the extremes; empirical research shows the middle 50% income share remains stable (~50%) across all nations. |\n| **20/20 Ratio (Quintile Ratio)** | $\\frac{\\text{Income of Top 20\\%}}{\\text{Income of Bottom 20\\%}}$ | Simple ratio showing how many times richer the top quintile is compared to poorest quintile. |\n| **Kuznets Curve (Simon Kuznets)**| Inverted-U hypothesis: As an economy develops, income inequality **first rises, peaks, and then falls**. | Relationship between economic growth (GDP per capita) and income inequality. |',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Inequality Indices',
        body: '1. **Gini Scale:** A Gini of **0 means Perfect Equality**, NOT zero income! A Gini of **1 means Absolute Monopoly Inequality**.\n2. **Bowing Direction:** The **further the Lorenz Curve bows AWAY from the 45-degree line, the HIGHER the Gini Coefficient and GREATER the inequality**.\n3. **Consumption vs Wealth Gini in India:** India\'s official NSO surveys track **Consumption Expenditure**, which yields a low Gini (~0.35). Private wealth surveys show extreme concentration with the top 1% owning >40% of wealth (Wealth Gini ~0.75).',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Inclusive Growth, Lorenz Curve, Gini Coefficient, Palma Ratio, Kuznets Curve',
        notes: 'Classic Prelims core on Gini definition, Lorenz curve geometry, and Kuznets inverted-U curve.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Lorenz Curve (1905) = Plots cumulative population vs cumulative income against 45-degree Line of Equality. Gini Coefficient (1912) = Area A / (A + B). Scale: 0 (Perfect Equality) to 1 (Absolute Inequality). Bowing further away = Higher inequality. Palma Ratio = Top 10% share / Bottom 40% share. Kuznets Curve = Inverted-U (inequality first rises, then falls with growth). Consumption Gini in India (~0.35) < Wealth Gini (~0.75).',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'If an economy\'s Lorenz Curve moves CLOSER to the 45-degree diagonal line over a decade, what does this mathematically indicate about its Gini Coefficient and income distribution?',
        options: [
          'The Gini Coefficient increases, indicating rising income inequality',
          'The Gini Coefficient decreases, indicating more equal income distribution',
          'The Gini Coefficient becomes 1.0, indicating complete concentration of wealth',
          'The economy enters an economic recession with negative GDP growth',
        ],
        correctAnswer: 'The Gini Coefficient decreases, indicating more equal income distribution',
        explanation: 'As the Lorenz curve moves closer to the 45-degree Line of Perfect Equality, Area A (the gap between the equality line and the Lorenz curve) shrinks. Because Gini = Area A / (Area A + Area B), the Gini coefficient decreases towards 0, reflecting a more equal distribution of national income.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-ECO-39',
    topicOrder: 35,
    topicSlug: 'poverty-inequality-human-capital-and-sustainability',
    topicTitle: 'Poverty, Inequality, Human Capital & Sustainable Development',
    topicDescription: 'Evolution of Poverty Estimation in India: Dadabhai Naoroji, Alagh, Lakdawala, Tendulkar & Rangarajan Committees.',
    slug: 'evolution-of-poverty-estimation-in-india-dadabhai-naoroji-alagh-lakdawala-tendulkar-rangarajan',
    title: 'Evolution of Poverty Estimation in India: Dadabhai Naoroji to Tendulkar & Rangarajan Committees',
    shortDefinition: 'The historical evolution of poverty line estimation in India: pre-independence benchmarks (Dadabhai Naoroji\'s Jail Cost of Living 1867-68, National Planning Committee 1938, Bombay Plan 1944) to post-independence Planning Commission committees: Y.K. Alagh Task Force (1979: Calorie norms of 2400 kcal Rural / 2100 kcal Urban), D.T. Lakdawala Committee (1993: state-specific price deflators using CPI-AL and CPI-IW), Suresh Tendulkar Committee (2009: shifting from calories to mixed consumption basket including health and education, MRP, ₹27/day rural & ₹33/day urban, 21.9% poverty in 2011-12), and C. Rangarajan Committee (2014: ₹32/day rural & ₹47/day urban, 29.5% poverty).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-ECO-39-01',
        statement: 'The Y.K. Alagh Task Force (1979) established the foundational nutritional calorie-anchor for poverty estimation in India: a daily minimum per capita intake of 2400 calories in rural areas and 2100 calories in urban areas, based on NSS 28th round consumption data.',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Planning Commission Task Force on Projections of Minimum Needs and Effective Consumption Demand (Chaired by Y.K. Alagh, 1979)',
        excerpt: 'Alagh Task Force fixed calorie norms: 2400 kcal rural, 2100 kcal urban.',
      },
      {
        id: 'CLM-ECO-39-02',
        statement: 'The Suresh Tendulkar Committee (Report submitted 2009) fundamentally altered poverty methodology by abandoning the rigid calorie anchor, adopting the all-India Urban Poverty Line Basket as the uniform national reference, incorporating private expenditures on health and education, using Mixed Reference Period (MRP) consumption data, and estimating India\'s poverty headcount ratio at 21.9% for 2011-12 (25.7% rural, 13.7% urban).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Report of the Expert Group to Review the Methodology for Estimation of Poverty (Chaired by Suresh Tendulkar, Planning Commission, Nov 2009)',
        excerpt: 'Tendulkar Committee moved beyond calories, used uniform urban basket, MRP, estimating 21.9% poverty in 2011-12.',
      },
      {
        id: 'CLM-ECO-39-03',
        statement: 'The C. Rangarajan Committee (Report submitted 2014) revised poverty lines upward by establishing independent nutritional norms (2155 kcal rural / 2090 kcal urban plus protein/fat standards) and essential non-food expenses using Modified Mixed Reference Period (MMRP), setting the poverty line at ₹972/month (₹32/day) rural and ₹1407/month (₹47/day) urban, estimating poverty at 29.5% for 2011-12.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Report of the Expert Group to Review the Methodology for Measurement of Poverty (Chaired by C. Rangarajan, Planning Commission, June 2014)',
        excerpt: 'Rangarajan Committee fixed poverty line at ₹32 rural / ₹47 urban (MMRP), estimating 29.5% poverty in 2011-12.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Drawing the Line Between Subsistence and Destitution',
        body: 'Where does a society draw the line below which a citizen is officially declared "poor"?\n\nIn 1867, **Dadabhai Naoroji** used the prison diet of convicts (**Jail Cost of Living: ₹16 to ₹35 per head/year**) to estimate poverty under British colonial exploitation. Over the decades, India transitioned from physical calorie metrics (Alagh 1979) to comprehensive modern expenditure baskets incorporating health, education, and electricity (Tendulkar and Rangarajan).',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Master Chronology of Poverty Estimation Committees in India',
        body: '| Committee / Milestone | Year | Core Methodology | Key Numbers / Outcome |\n| :--- | :--- | :--- | :--- |\n| **Dadabhai Naoroji** | 1867–68 | *Poverty and Un-British Rule in India*: Used Jail Cost of Living (rice, flour, dal, mutton, oil). | First pre-independence poverty line: **₹16 to ₹35 per year**. |\n| **National Planning Committee (Nehru)** | 1938 | Basic standard of living including nutrition, clothing, housing. | Poverty line: **₹15 to ₹25 per capita per month**. |\n| **Bombay Plan** | 1944 | Minimum standard of living (2800 kcal diet, 30 yards cloth, 100 sq ft housing). | Poverty line: **₹75 per capita per year**. |\n| **Y.K. Alagh Task Force** | **1979** | Introduced **Caloric Norms**: Physical food basket to provide required daily energy. | **2400 kcal (Rural)** & **2100 kcal (Urban)** per person per day. |\n| **D.T. Lakdawala Committee** | **1993** | Retained 2400/2100 calorie norms, but disaggregated state poverty lines using state-specific price indices. | **CPI-AL** (Agricultural Laborers for Rural) & **CPI-IW** (Industrial Workers for Urban). |\n| **Suresh Tendulkar Committee** | **2009** | **Abandoned rigid calorie anchor**. Used uniform all-India Urban basket; included Health & Education; used **MRP** data. | **₹27/day (₹816/mo) Rural** & **₹33/day (₹1000/mo) Urban**. **21.9% Poverty in 2011-12**. |\n| **C. Rangarajan Committee** | **2014** | Re-introduced separate nutrient norms (calories + proteins + fats) + essential non-food costs; used **MMRP** data. | **₹32/day (₹972/mo) Rural** & **₹47/day (₹1407/mo) Urban**. **29.5% Poverty in 2011-12**. |',
        order: 2,
      },
      {
        type: 'COMPARISON',
        title: 'Tendulkar vs Rangarajan Committee: Deep Methodological Comparison',
        body: '| Parameter | Suresh Tendulkar Committee (2009) | C. Rangarajan Committee (2014) |\n| :--- | :--- | :--- |\n| **Poverty Line Reference Basket**| Uniform all-India **Urban Poverty Line Basket** applied to rural areas after spatial price adjustments. | **Separate Rural and Urban Baskets** based on normative nutritional and non-food requirements. |\n| **Nutritional Criterion** | Explicitly **abandoned calorie anchoring**; validated against educational/health adequacy. | Specific daily intake: **2155 kcal / 48g protein (Rural)** & **2090 kcal / 50g protein (Urban)**. |\n| **Survey Reference Period** | **Mixed Reference Period (MRP):** 365-day recall for 5 infrequent items (clothing, footwear, durables, edu, med); 30-day for rest. | **Modified Mixed Reference Period (MMRP):** 7-day recall for perishables (edible oil, egg, fish, fruits); 365-day for durables; 30-day for rest. |\n| **Per Capita Daily Spending** | **₹27.20 (Rural)** & **₹33.30 (Urban)** (at 2011-12 prices). | **₹32.40 (Rural)** & **₹46.90 (Urban)** (at 2011-12 prices). |\n| **Poverty Headcount (2011-12)** | **21.9% (269.8 Million people)** — Rural: 25.7%, Urban: 13.7%. | **29.5% (363 Million people)** — Rural: 30.9%, Urban: 26.4%. |',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Poverty Line Committees',
        body: '1. **Calorie Thresholds:** **2400 kcal Rural / 2100 kcal Urban** (Alagh Task Force 1979). Rural calorie norm is higher because rural workers engage in heavier manual agricultural labor.\n2. **Tendulkar Poverty Figure:** The official poverty rate for India under the Tendulkar methodology in 2011-12 is **21.9% (269.8 million people)**.\n3. **Price Indices under Lakdawala:** Rural price deflator was **CPI-AL**; Urban price deflator was **CPI-IW**.',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Poverty Estimation Committees, Tendulkar vs Rangarajan, Caloric Norms, MRP vs MMRP',
        notes: 'High-frequency Prelims core: Tendulkar poverty % (21.9%), Alagh calorie figures (2400/2100), and Rangarajan daily spending.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Poverty Committees: 1. Dadabhai Naoroji (1867 Jail cost ₹16-35/yr). 2. Alagh (1979: 2400 kcal Rural / 2100 kcal Urban). 3. Lakdawala (1993: CPI-AL rural / CPI-IW urban). 4. Tendulkar (2009: Dropped calories, added Health/Edu, MRP, ₹27 rural / ₹33 urban -> 21.9% poverty in 2011-12). 5. Rangarajan (2014: MMRP, ₹32 rural / ₹47 urban -> 29.5% poverty in 2011-12).',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'According to the Suresh Tendulkar Committee methodology accepted by the Planning Commission, what was India\'s official national Poverty Headcount Ratio in 2011-12?',
        options: [
          '21.9% of the total population',
          '29.5% of the total population',
          '37.2% of the total population',
          '15.4% of the total population',
        ],
        correctAnswer: '21.9% of the total population',
        explanation: 'Under the Suresh Tendulkar Committee methodology (which set monthly poverty lines at ₹816 for rural areas and ₹1000 for urban areas), India\'s official Poverty Headcount Ratio in 2011-12 was estimated at 21.9% (comprising 25.7% in rural areas and 13.7% in urban areas, totaling 269.8 million poor persons). The Rangarajan Committee later estimated it at 29.5%.',
        trapExplanation: 'Candidates confuse the Tendulkar official figure (21.9%) with the Rangarajan report figure (29.5%) or the 2004-05 Tendulkar figure (37.2%).',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-ECO-40',
    topicOrder: 35,
    topicSlug: 'poverty-inequality-human-capital-and-sustainability',
    topicTitle: 'Poverty, Inequality, Human Capital & Sustainable Development',
    topicDescription: 'Multidimensional Poverty Index (MPI): Alkire-Foster Methodology & NITI Aayog National MPI.',
    slug: 'multidimensional-poverty-index-alkire-foster-method-niti-aayog-national-mpi-12-indicators',
    title: 'Multidimensional Poverty Index: Alkire-Foster Method & NITI Aayog National MPI (12 Indicators)',
    shortDefinition: 'The multidimensional deprivation measurement framework: the Alkire-Foster (AF) counting methodology developed by Oxford OPHI and UNDP, Global MPI (3 dimensions: Health, Education, Standard of Living across 10 indicators), and the NITI Aayog National Multidimensional Poverty Index (National MPI) adding 2 India-specific indicators (Maternal Health and Bank Account) across 12 indicators, measuring the Multidimensional Poverty Headcount Ratio (H), Intensity of Poverty (A), and MPI Score ($MPI = H \\times A$), tracking the lifting of 248 million Indians out of multidimensional poverty between 2013-14 and 2022-23.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-40-01',
        statement: 'The Multidimensional Poverty Index (MPI) uses the dual-cutoff Alkire-Foster (AF) methodology: an individual is classified as multidimensionally poor if they are deprived in 33.33% (one-third) or more of the weighted indicators across Health, Education, and Standard of Living.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Sabina Alkire and James Foster, Counting and Multidimensional Poverty Measurement (JPubE, 2011); UNDP Global MPI',
        excerpt: 'MPI poverty cutoff: Deprivation in >= 33.33% of weighted indicators (Alkire-Foster method).',
      },
      {
        id: 'CLM-ECO-40-02',
        statement: 'NITI Aayog\'s National MPI aligns with the Global MPI while expanding it to 12 indicators across 3 equally weighted dimensions (1/3rd weight each): Health (Nutrition, Child & Adolescent Mortality, Maternal Health), Education (Years of Schooling, School Attendance), and Standard of Living (Cooking Fuel, Sanitation, Drinking Water, Electricity, Housing, Assets, Bank Account).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NITI Aayog National Multidimensional Poverty Index: A Progress Review (2023 & 2024)',
        excerpt: 'National MPI has 12 indicators (added Maternal Health and Bank Account) based on NFHS data.',
      },
      {
        id: 'CLM-ECO-40-03',
        statement: 'According to NITI Aayog\'s National MPI Discussion Paper (2024), India\'s multidimensionally poor population declined sharply from 29.17% in 2013-14 to 11.28% in 2022-23, representing an escape from multidimensional poverty by approximately 24.82 crore (248.2 million) individuals over 9 years, with Uttar Pradesh, Bihar, Madhya Pradesh, and Rajasthan recording the steepest reductions.',
        claimType: 'CENSUS_DATA',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NITI Aayog Discussion Paper: Multidimensional Poverty in India since 2013-14 (Jan 2024)',
        excerpt: 'National MPI fell from 29.17% in 2013-14 to 11.28% in 2022-23 (24.82 crore people exited poverty).',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Beyond Income: Poverty as Overlapping Deprivations',
        body: 'A family might earn ₹100 a day (placing them above a mechanical monetary poverty line), but if their children cannot attend school, their baby dies of malnutrition, they have no clean drinking water, and they cook over smoky firewood in a thatched hut with no electricity, they remain desperately poor.\n\n**Multidimensional Poverty** captures this lived reality, identifying whether multiple deprivations hit the same household simultaneously.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The 12 Indicators of NITI Aayog National MPI',
        body: 'The National MPI assigns **equal 1/3rd weight** to each of the three dimensions:\n\n```mermaid\ngraph TD\n    MPI["NITI Aayog National MPI (12 Indicators)"]\n    MPI --> H["1. HEALTH (Weight: 1/3)"]\n    MPI --> E["2. EDUCATION (Weight: 1/3)"]\n    MPI --> S["3. STANDARD OF LIVING (Weight: 1/3)"]\n    H --> H1["• Nutrition (1/6)"]\n    H --> H2["• Child & Adolescent Mortality (1/12)"]\n    H --> H3["• Maternal Health (1/12) *India Addition*"]\n    E --> E1["• Years of Schooling (1/6)"]\n    E --> E2["• School Attendance (1/6)"]\n    S --> S1["• Cooking Fuel (1/21)"]\n    S --> S2["• Sanitation (1/21)"]\n    S --> S3["• Drinking Water (1/21)"]\n    S --> S4["• Electricity (1/21)"]\n    S --> S5["• Housing (1/21)"]\n    S --> S6["• Assets (1/21)"]\n    S --> S7["• Bank Account (1/21) *India Addition*"]\n```',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'The MPI Mathematical Equation: $MPI = H \\times A$',
        body: 'The MPI score is calculated as the product of two distinct metrics:\n\n$$\\mathbf{\\text{MPI} = H \\times A}$$\n\n* **1. Headcount Ratio ($H$):** Percentage of people who are multidimensionally poor (deprived in $\\ge 33.33\\%$ of weighted indicators).\n* **2. Intensity of Poverty ($A$):** The average proportion of weighted deprivations experienced by the multidimensionally poor.\n* *Example:* If $H = 15\\%$ and poor households suffer from an average deprivation intensity of $A = 40\\%$:\n\n$$\\text{MPI} = 0.15 \\times 0.40 = 0.060$$',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Multidimensional Poverty',
        body: '1. **Global MPI vs National MPI:** Global MPI has **10 indicators**; NITI Aayog National MPI has **12 indicators** (added: **Maternal Health** under Health and **Bank Account** under Standard of Living).\n2. **Data Source:** National MPI is computed using **National Family Health Survey (NFHS)** data (NFHS-4 and NFHS-5), NOT NSSO consumption expenditure surveys.\n3. **Poverty Cutoff:** A person is multidimensionally poor if their deprivation score is **$\\ge 33.33\\%$ (one-third)**.',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Multidimensional Poverty Index, NITI Aayog MPI, Alkire-Foster Method, SDG 1',
        notes: 'High-frequency Prelims and Mains topic: 12 indicators, 33.3% cutoff, MPI = H * A, and NFHS data source.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'MPI (Alkire-Foster method): Deprived in >=33.33% of weighted indicators. Formula: MPI = H (Headcount Ratio) * A (Intensity). NITI Aayog National MPI = 12 indicators across Health (1/3), Education (1/3), Standard of Living (1/3). 2 India-specific additions: Maternal Health & Bank Account. Data source: NFHS. India reduced MPI from 29.17% (2013-14) to 11.28% (2022-23), lifting 24.8 crore people out of poverty.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which two indicators are included in NITI Aayog\'s National Multidimensional Poverty Index (National MPI) that are NOT present in the Global Multidimensional Poverty Index compiled by UNDP/OPHI?',
        options: [
          'Maternal Health and Bank Account',
          'Internet Connectivity and Cooking Gas',
          'Child Immunization and Life Insurance',
          'Piped Drinking Water and Crop Insurance',
        ],
        correctAnswer: 'Maternal Health and Bank Account',
        explanation: 'While the Global MPI comprises 10 indicators, NITI Aayog expanded India\'s National MPI to 12 indicators by introducing Maternal Health (under the Health dimension, reflecting Antenatal Care coverage) and Bank Account (under the Standard of Living dimension, reflecting PMJDY financial inclusion).',
        trapExplanation: 'Candidates confuse the India-specific additions with drinking water, electricity, or cooking gas (which are standard global indicators).',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },

  {
    id: 'CON-ECO-41',
    topicOrder: 35,
    topicSlug: 'poverty-inequality-human-capital-and-sustainability',
    topicTitle: 'Poverty, Inequality, Human Capital & Sustainable Development',
    topicDescription: 'Human Capital Formation: Amartya Sen\'s Capability Approach, Education, Health & Skill Development.',
    slug: 'human-capital-formation-amartya-sen-capability-approach-education-health-skill-development',
    title: 'Human Capital Formation: Amartya Sen\'s Capability Approach, Education & Health Paradigms',
    shortDefinition: 'The economic theory of human capital as an engine of endogenous growth (Theodore Schultz, Gary Becker, Robert Lucas): Amartya Sen\'s Capability Approach (distinguishing Functionings vs Capabilities, viewing poverty as capability deprivation and human development as freedom expansion), the Human Development Index (HDI: Life Expectancy, Mean/Expected Years of Schooling, GNI per capita PPP), National Education Policy (NEP 2020: 5+3+3+4 structure, 6% GDP spending target), and Ayushman Bharat health architecture.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-41-01',
        statement: 'Amartya Sen\'s Capability Approach (developed with Martha Nussbaum) redefines development from mere GDP per capita expansion to the expansion of substantive human freedoms and "Capabilities" (the genuine opportunities to achieve valuable "Functionings" such as being healthy, educated, well-nourished, and socially dignified).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Amartya Sen, Development as Freedom (1999); Commodities and Capabilities (1985)',
        excerpt: 'Development is the expansion of human capabilities and substantive freedoms.',
      },
      {
        id: 'CLM-ECO-41-02',
        statement: 'The Human Development Index (HDI, created in 1990 by Mahbub ul Haq and Amartya Sen for UNDP) computes the geometric mean of normalized indices across three core dimensions: Long and Healthy Life (Life Expectancy at birth), Knowledge (Mean Years of Schooling for adults >=25 & Expected Years of Schooling for children), and Decent Standard of Living (GNI per capita in 2017 PPP dollars).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'UNDP Human Development Report (Technical Notes on HDI Calculation)',
        excerpt: 'HDI is the geometric mean of Life Expectancy, Education (Mean & Expected years), and GNI per capita (PPP).',
      },
      {
        id: 'CLM-ECO-41-03',
        statement: 'National Education Policy (NEP 2020) replaces the 10+2 curricular structure with a 5+3+3+4 pedagogical structure (Foundational [ages 3-8], Preparatory [8-11], Middle [11-14], Secondary [14-18]), targeting public education expenditure at 6% of GDP and 50% Gross Enrolment Ratio (GER) in higher education by 2035.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'National Education Policy 2020 (Ministry of Education, Government of India)',
        excerpt: 'NEP 2020 adopts 5+3+3+4 structure and targets 6% GDP public spending on education.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Humans as Economic Instruments vs Humans as the Ultimate End',
        body: 'Traditional growth economics viewed humans primarily as "Human Capital"—mere inputs to produce factory output, similar to machines or fuel.\n\nNobel Laureate **Amartya Sen** inverted this paradigm with the **Capability Approach**: Economic growth and wealth are merely *means*; the ultimate *end* of development is to expand human capability, dignity, and freedom to lead lives that people have reason to value.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The Human Development Index (HDI) Architecture',
        body: '```mermaid\ngraph TD\n    HDI["Human Development Index (HDI) = Geometric Mean of 3 Dimensions"]\n    HDI --> D1["1. HEALTH: Life Expectancy Index (Min 20 yrs, Max 85 yrs)"]\n    HDI --> D2["2. KNOWLEDGE: Education Index = Mean Years of Schooling (Adults) + Expected Years (Children)"]\n    HDI --> D3["3. STANDARD OF LIVING: Income Index = ln(GNI per capita PPP) (Min $100, Max $75,000)"]\n```\n\n$$\\mathbf{\\text{HDI} = \\sqrt[3]{I_{\\text{Health}} \\times I_{\\text{Education}} \\times I_{\\text{Income}}}}$$\n\n* *Methodological Note:* Since 2010, UNDP uses the **Geometric Mean** (instead of Arithmetic Mean) so that poor performance in one dimension cannot be easily masked by high performance in another.',
        order: 2,
      },
      {
        type: 'COMPARISON',
        title: 'NEP 2020 (5+3+3+4) vs Previous 10+2 Structure',
        body: '| Stage | Age Group | Curricular & Pedagogical Focus |\n| :--- | :--- | :--- |\n| **1. Foundational Stage (5 Years)** | Ages 3 to 8 (3 yrs Anganwadi/Preschool + Grades 1-2). | Play/activity-based learning; Foundational Literacy & Numeracy (NIPUN Bharat). |\n| **2. Preparatory Stage (3 Years)** | Ages 8 to 11 (Grades 3 to 5). | Play, discovery, light textbooks; mother tongue/regional language instruction. |\n| **3. Middle Stage (3 Years)** | Ages 11 to 14 (Grades 6 to 8). | Subject-oriented learning; vocational crafts and coding introduced from Grade 6. |\n| **4. Secondary Stage (4 Years)** | Ages 14 to 18 (Grades 9 to 12). | Multidisciplinary study, critical thinking, flexibility; no rigid arts/science streams. |',
        order: 3,
      },
      {
        type: 'MECHANISM',
        title: 'Ayushman Bharat: The Dual Health Architecture (2018)',
        body: '1. **Comprehensive Primary Health:** Upgradation of 1.5 Lakh sub-centers into **Ayushman Arogya Mandirs (Health & Wellness Centres)** for preventive care and free essential drugs.\n2. **Secondary/Tertiary Hospitalization (PM-JAY):** World\'s largest government-funded health assurance scheme, providing **₹5 Lakh health cover per family per year** for secondary and tertiary hospitalization to over 12 crore poor families (bottom 40%), cashless and paperless via PM-JAY Ayushman cards.',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Human Capital',
        body: '1. **HDI Mathematical Formula:** HDI uses the **GEOMETRIC MEAN**, not the arithmetic average!\n2. **Education Indicators in HDI:** Consists of TWO metrics: **Mean Years of Schooling** (for adults aged $\\ge 25$) AND **Expected Years of Schooling** (for school-entry age children).\n3. **Ayushman Bharat Cover:** Coverage is **₹5 Lakh PER FAMILY PER YEAR** (not per person).',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Human Capital, Amartya Sen Capability Approach, HDI, NEP 2020, Ayushman Bharat',
        notes: 'High-frequency topic in Prelims & Mains across HDI indicators, NEP 5+3+3+4, and PM-JAY.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Capability Approach = Amartya Sen (Development as Freedom; poverty as capability deprivation). HDI (Mahbub ul Haq & Sen 1990) = Geometric mean of Life Expectancy, Education (Mean + Expected years), and GNI per capita PPP. NEP 2020 = 5+3+3+4 structure, 6% GDP education target, NIPUN Bharat. Ayushman Bharat = 1.5L Health & Wellness Centres + PM-JAY (₹5 Lakh health cover/family/yr).',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which mathematical method is officially utilized by the United Nations Development Programme (UNDP) to calculate the composite Human Development Index (HDI) across its three dimensions?',
        options: [
          'Simple Arithmetic Mean of the three dimension indices',
          'Geometric Mean of the three dimension indices',
          'Harmonic Mean of the normalized indicators',
          'Weighted Linear Regression Sum',
        ],
        correctAnswer: 'Geometric Mean of the three dimension indices',
        explanation: 'Since the 2010 Human Development Report, UNDP calculates the composite HDI as the Geometric Mean of the normalized indices for Health, Education, and Income (HDI = Cube root of [I_Health * I_Education * I_Income]), ensuring that poor performance in one dimension is penalized and cannot be linearly substituted by high performance in another.',
        trapExplanation: 'Candidates often assume a simple arithmetic average is used (which was replaced in 2010).',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-ECO-42',
    topicOrder: 35,
    topicSlug: 'poverty-inequality-human-capital-and-sustainability',
    topicTitle: 'Poverty, Inequality, Human Capital & Sustainable Development',
    topicDescription: 'Sustainable Development & Climate Economics: SDGs, Environmental Kuznets Curve, Carbon Markets & Green Finance.',
    slug: 'sustainable-development-climate-economics-environmental-kuznets-curve-carbon-credits-green-bonds',
    title: 'Sustainable Development & Climate Economics: SDGs, Environmental Kuznets Curve, Carbon Markets & Green Finance',
    shortDefinition: 'The economic interface of climate change and environmental sustainability: the Brundtland Report (1987) definition of Sustainable Development, the 17 UN Sustainable Development Goals (SDGs: 2015-2030) and NITI Aayog SDG India Index, the Environmental Kuznets Curve (EKC: inverted-U hypothesis linking pollution to per capita income), Carbon Pricing mechanisms (Carbon Tax vs Cap-and-Trade / Carbon Credits under Article 6 of Paris Agreement and Energy Conservation Amendment Act 2022), and Sovereign Green Bonds.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-42-01',
        statement: 'Sustainable Development, defined by the Brundtland Commission (Our Common Future, 1987), is development that meets the needs of the present without compromising the ability of future generations to meet their own needs, operationalized via the 17 UN Sustainable Development Goals (SDGs, 2016-2030).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'World Commission on Environment and Development (Brundtland Report, 1987); UN Resolution A/RES/70/1',
        excerpt: 'Sustainable development meets present needs without compromising future generations (17 SDGs).',
      },
      {
        id: 'CLM-ECO-42-02',
        statement: 'The Environmental Kuznets Curve (EKC) hypothesis posits an inverted-U relationship between economic growth and environmental degradation: in early stages of industrialization, pollution increases as per capita income rises; beyond a critical turning point, technological efficiency, services growth, and environmental regulation cause pollution to decline.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Gene Grossman and Alan Krueger, Environmental Impacts of a North American Free Trade Agreement (1991); World Development Report 1992',
        excerpt: 'Environmental Kuznets Curve: Inverted-U curve between per capita income and pollution.',
      },
      {
        id: 'CLM-ECO-42-03',
        statement: 'The Energy Conservation (Amendment) Act 2022 empowers the Central Government to establish the Indian Carbon Market (ICM) and Carbon Credit Trading Scheme (CCTS), issuing Carbon Credit Certificates (CCCs) to obligated entities for greenhouse gas emission reductions.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Energy Conservation (Amendment) Act, 2022 (Section 14(w)); Ministry of Power CCTS Notification (June 2023)',
        excerpt: '2022 Act authorizes creation of domestic Indian Carbon Market and Carbon Credit Trading Scheme.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Internalizing Nature\'s Ecological Invoices',
        body: 'For centuries, industrial capitalism treated the atmosphere, oceans, and rivers as zero-cost waste dumps (**Negative Externalities**). Nature did not send an invoice for carbon dioxide emissions or toxic effluent.\n\n**Climate Economics** provides the analytical tools to correct this market failure—putting an explicit economic price on greenhouse gas emissions through **Carbon Markets**, **Pigouvian Carbon Taxes**, and **Green Finance**.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The Environmental Kuznets Curve (EKC) Hypothesis',
        body: '```mermaid\ngraph LR\n    AGRI["1. Pre-Industrial Economy (Low Income, Low Pollution)"] -->|Industrialization & Manufacturing| PEAK["2. Industrial Transition: High Resource Exploitation & PEAK POLLUTION"]\n    PEAK -->|Turning Point: Service economy, Clean tech, Strict laws| CLEAN["3. Post-Industrial Economy: High Income & DECLINING POLLUTION"]\n```\n\n* **The Inverted-U Shape:** Pollution first increases with per capita GDP, peaks, and then declines.\n* **Critical Policy Caveat:** Planetary boundaries (global warming, tipping points) mean developing nations cannot afford to wait for the natural EKC turning point; they must **"tunnel through" the Kuznets curve** by adopting leapfrog green technologies (solar, green hydrogen).',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Carbon Pricing: Carbon Tax vs Cap-and-Trade Carbon Markets',
        body: '| Parameter | Carbon Tax (Price-Based Instrument) | Cap-and-Trade / Carbon Market (Quantity-Based) |\n| :--- | :--- | :--- |\n| **Mechanism** | Government fixes an explicit statutory **tax per ton of $\\text{CO}_2$ emitted** (e.g. \\$50/ton). | Government sets a **hard ceiling (Cap) on total allowable emissions** and issues tradable permits/credits. |\n| **Price Certainty** | **High:** Emitters know the exact financial cost of each ton emitted. | **Low:** Market supply and demand determine fluctuating carbon permit prices. |\n| **Emissions Certainty**| **Low:** Total national emission reductions depend on corporate response to tax. | **High:** Total national emissions are strictly capped by the number of permits issued. |\n| **Indian Adaptation** | Historical Clean Environment Cess on coal (subsumed into GST compensation cess). | **Indian Carbon Market (ICM - CCTS 2023)** under *Energy Conservation Amendment Act 2022*. |',
        order: 3,
      },
      {
        type: 'COMPARISON',
        title: 'The 17 UN Sustainable Development Goals (SDGs: 2015–2030)',
        body: '* **SDG 1:** No Poverty | **SDG 2:** Zero Hunger | **SDG 3:** Good Health & Well-being | **SDG 4:** Quality Education\n* **SDG 5:** Gender Equality | **SDG 6:** Clean Water & Sanitation | **SDG 7:** Affordable & Clean Energy | **SDG 8:** Decent Work & Economic Growth\n* **SDG 9:** Industry, Innovation & Infrastructure | **SDG 10:** Reduced Inequalities | **SDG 11:** Sustainable Cities\n* **SDG 12:** Responsible Consumption & Production | **SDG 13:** Climate Action | **SDG 14:** Life Below Water | **SDG 15:** Life on Land\n* **SDG 16:** Peace, Justice & Strong Institutions | **SDG 17:** Partnerships for the Goals\n\n* **NITI Aayog SDG India Index:** Classifies States into: Aspirant (0–49), Performer (50–64), Front Runner (65–99), and Achiever (100). (Kerala and Uttarakhand frequently lead the index).',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Climate Economics',
        body: '1. **Carbon Credit Unit:** 1 Carbon Credit is standardly equivalent to **ONE METRIC TON of Carbon Dioxide ($\text{CO}_2$) equivalent** reduced or sequestered.\n2. **Kuznets Curve vs Environmental Kuznets Curve:**\n   * **Standard Kuznets Curve:** Income per capita vs **Income Inequality**.\n   * **Environmental Kuznets Curve:** Income per capita vs **Environmental Degradation**.\n3. **Article 6 of Paris Agreement:** Governs international carbon credit trading mechanisms (Article 6.2 bilateral transfers and Article 6.4 centralized multilateral carbon crediting mechanism).',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Sustainable Development, Environmental Kuznets Curve, Carbon Markets, SDGs, Green Bonds',
        notes: 'Classic Prelims core: EKC curve shape, 1 carbon credit definition, and NITI Aayog SDG Index.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Brundtland Report (1987) = 17 SDGs (2015-2030). Environmental Kuznets Curve (EKC) = Inverted-U between per capita income and pollution. Carbon Pricing: Carbon Tax (fixed price) vs Cap-and-Trade (fixed cap, market price). 1 Carbon Credit = 1 metric ton CO2 equivalent. Energy Conservation Amendment Act 2022 = Indian Carbon Market (ICM). NITI Aayog SDG Index: Aspirant, Performer, Front Runner, Achiever.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'The "Environmental Kuznets Curve" posits what specific relationship between an economy\'s per capita income growth and its level of environmental degradation?',
        options: [
          'A linear positive relationship where pollution increases constantly as income grows',
          'An inverted-U shaped relationship where environmental degradation initially rises, reaches a peak, and then declines as income rises further',
          'A U-shaped relationship where environmental degradation initially falls and then surges indefinitely',
          'An exponential curve where economic growth causes irreversible ecological collapse at all stages',
        ],
        correctAnswer: 'An inverted-U shaped relationship where environmental degradation initially rises, reaches a peak, and then declines as income rises further',
        explanation: 'The Environmental Kuznets Curve (Grossman and Krueger, 1991) models an inverted-U relationship, hypothesizing that environmental degradation initially rises with per capita income during industrialization, but eventually peaks and declines as higher income levels lead to cleaner technologies, structural shift toward services, and stricter environmental regulations.',
        trapExplanation: 'Candidates confuse the Environmental Kuznets Curve with the standard Kuznets curve (which plots income inequality rather than pollution).',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  // =========================================================================
  // TOPIC 36: EMPLOYMENT, LABOR MARKETS & ECONOMIC PLANNING
  // =========================================================================
  {
    id: 'CON-ECO-43',
    topicOrder: 36,
    topicSlug: 'employment-labor-markets-and-economic-planning',
    topicTitle: 'Employment, Labor Markets, Planning & NITI Aayog',
    topicDescription: 'Types and measurement of unemployment (UPS, UPSS, CWS), PLFS labor indicators (LFPR, WPR, UR), informal sector & gig workers, Social Security Code 2020, JAM Trinity, and Planning Commission to NITI Aayog evolution.',
    slug: 'unemployment-typology-and-measurement-ups-upss-cws-lfpr-wpr-plfs-labor-market-trends',
    title: 'Unemployment Typology & Measurement: UPS, UPSS, CWS, LFPR, WPR & PLFS Labor Market Indicators',
    shortDefinition: 'The statistical and conceptual measurement of labor markets in India: types of unemployment (Disguised / Underemployment, Structural, Frictional, Cyclical, Seasonal), the NSO measurement activity statuses (Usual Principal Status [UPS: major activity over 365 days], Usual Principal and Subsidiary Status [UPSS], Current Weekly Status [CWS: 1 hour in last 7 days]), and core Periodic Labour Force Survey (PLFS, launched April 2017) indicators: Labour Force Participation Rate (LFPR), Worker Population Ratio (WPR), and Unemployment Rate ($UR = \\frac{\\text{Unemployed}}{\\text{Labour Force}} \\times 100$).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-43-01',
        statement: 'The Unemployment Rate (UR) is the percentage of persons unemployed among the persons in the Labour Force: UR = (Unemployed Persons / Labour Force) * 100; where Labour Force = Employed Persons + Unemployed Persons (individuals actively seeking/available for work). Individuals not seeking work are out of the labour force.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NSO Periodic Labour Force Survey (PLFS) Methodology; ILO Guidelines on Labour Statistics',
        excerpt: 'Unemployment rate is unemployed divided by Labour Force (NOT total population).',
      },
      {
        id: 'CLM-ECO-43-02',
        statement: 'Under NSO activity statuses: Usual Status (UPS) classifies an individual based on their major activity over the 365 days preceding the survey; UPSS (Usual Principal and Subsidiary Status) includes individuals who worked for at least 30 days in a subsidiary capacity, resulting in lower measured unemployment than UPS; Current Weekly Status (CWS) classifies an individual as employed if they worked for at least 1 hour on any day during the 7-day reference period.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'MoSPI National Statistical Office (PLFS Annual Report 2022-23)',
        excerpt: 'UPSS captures chronic and subsidiary work; CWS captures short-term weekly employment (1 hr threshold).',
      },
      {
        id: 'CLM-ECO-43-03',
        statement: 'Disguised Unemployment (prevalent in Indian agriculture) is a structural condition where more workers are engaged in an activity than economically necessary, such that the Marginal Physical Productivity of the extra labor is zero or negative (MP_L ≤ 0); withdrawing surplus workers causes zero reduction in total agricultural output.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Ragnar Nurkse, Problems of Capital Formation in Underdeveloped Countries (1953); Arthur Lewis (1954)',
        excerpt: 'Disguised unemployment is characterized by zero marginal productivity of labor.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Who Is Truly Unemployed? The Denominator Trap',
        body: 'If India has a population of 1.4 billion and 40 million people are registered as unemployed, is the unemployment rate $40M / 1.4B = 2.8\\%$?\n\n**No!** Children, elderly retirees, full-time students, and discouraged individuals not looking for work are **Out of the Labour Force**. The Unemployment Rate measures only those actively looking for work who cannot find a job relative to the active **Labour Force**.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The 3 Core PLFS Labor Market Indicators',
        body: '$$\\begin{aligned}\n\\mathbf{1.\\; \\text{Labour Force Participation Rate (LFPR):}} & \\quad \\text{LFPR} = \\left( \\frac{\\text{Labour Force (Employed + Unemployed)}}{\\text{Total Population}} \\right) \\times 100 \\\\[6pt]\n\\mathbf{2.\\; \\text{Worker Population Ratio (WPR):}} & \\quad \\text{WPR} = \\left( \\frac{\\text{Employed Persons}}{\\text{Total Population}} \\right) \\times 100 \\\\[6pt]\n\\mathbf{3.\\; \\text{Unemployment Rate (UR):}} & \\quad \\text{UR} = \\left( \\frac{\\text{Unemployed Persons}}{\\text{Labour Force}} \\right) \\times 100\n\\end{aligned}$$\n\n* **Recent Indian Trends (PLFS):** Female LFPR has shown a significant upward surge (rising above 37–40% in recent rounds), driven by rural female self-employment.',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'NSO Activity Status Framework: UPS vs UPSS vs CWS',
        body: '```mermaid\ngraph TD\n    ACT["NSO Activity Statuses (Reference Periods)"]\n    ACT --> UPS["1. Usual Principal Status (UPS): 365-day reference period; major time (>183 days) spent in activity"]\n    ACT --> UPSS["2. Usual Principal & Subsidiary Status (UPSS): UPS + worked >= 30 days in subsidiary capacity (Lowest Unemployment Rate)"]\n    ACT --> CWS["3. Current Weekly Status (CWS): 7-day reference period; worked >= 1 hour on any single day (ILO international standard)"]\n```',
        order: 3,
      },
      {
        type: 'COMPARISON',
        title: 'Typology of Unemployment in India',
        body: '| Type of Unemployment | Defining Mechanism | Primary Location / Policy Remedy |\n| :--- | :--- | :--- |\n| **Disguised Unemployment** | Marginal Productivity of Labor is zero ($\\text{MP}_L = 0$). Withdrawing workers does not drop total output. | Widespread in **Agriculture**; Remedy: Shift surplus labor to manufacturing/services. |\n| **Structural Unemployment** | Mismatch between skills possessed by job seekers and skills demanded by modern employers. | Educated youth; Remedy: **Skill India / Vocational training**. |\n| **Frictional Unemployment** | Temporary transitional joblessness while switching between jobs or searching for a first job. | Modern urban economy; natural frictional friction. |\n| **Cyclical / Keynesian** | Caused by economy-wide demand deficiency during economic recessions. | Industrial sectors; Remedy: Expansionary fiscal/monetary stimulus. |\n| **Seasonal Unemployment** | Occurs during specific non-harvest or non-tourist periods of the year. | Agriculture & Tourism; Remedy: Rural public works (**MGNREGA**). |',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Labor Statistics',
        body: '1. **Denominator Trap:** The denominator for the **Unemployment Rate is the LABOUR FORCE**, NOT the total population. The denominator for **LFPR and WPR is the TOTAL POPULATION**.\n2. **Disguised Unemployment MP:** Marginal Productivity of labor is **ZERO (or near zero)**.\n3. **CWS Threshold:** In Current Weekly Status (CWS), a person who worked for **just ONE HOUR on any one day in the last 7 days** is counted as employed.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Employment, Types of Unemployment, Disguised Unemployment, PLFS, LFPR',
        notes: 'Classic Prelims core: Disguised unemployment definition (MP = 0), UR formula, and UPSS vs CWS.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Unemployment Rate = Unemployed / Labour Force * 100. Labour Force = Employed + Actively Seeking. LFPR = Labour Force / Total Pop. WPR = Employed / Total Pop. Disguised Unemployment = Marginal productivity of labor is ZERO (agriculture). NSO Status: UPS (365 days major time), UPSS (adds 30d subsidiary work - lowest UR), CWS (1 hour in last 7 days). PLFS compiled by NSO.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'In economics, what is the defining characteristic of "Disguised Unemployment"?',
        options: [
          'The unemployment that arises when workers lack the technical skills demanded by emerging industrial sectors',
          'A situation where the marginal physical productivity of the additional workers employed is zero or negative',
          'Temporary joblessness experienced by workers while transitioning between different employment contracts',
          'Unemployment caused by a cyclical collapse of aggregate demand during macroeconomic recessions',
        ],
        correctAnswer: 'A situation where the marginal physical productivity of the additional workers employed is zero or negative',
        explanation: 'Disguised unemployment occurs when more people are engaged in a productive activity than are strictly necessary (ubiquitous in Indian agriculture). If some workers are withdrawn from the farm, total agricultural output remains completely unchanged because the marginal productivity of those redundant surplus workers is zero.',
        trapExplanation: 'Candidates confuse disguised unemployment with structural unemployment (skill mismatch) or frictional unemployment (job switching).',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-ECO-44',
    topicOrder: 36,
    topicSlug: 'employment-labor-markets-and-economic-planning',
    topicTitle: 'Employment, Labor Markets, Planning & NITI Aayog',
    topicDescription: 'Informal Sector, Gig & Platform Workers, Social Security Code 2020 & e-Shram Portal.',
    slug: 'informal-sector-gig-platform-workers-social-security-code-2020-e-shram-portal',
    title: 'The Informal Economy, Gig & Platform Workers, Social Security Code 2020 & e-Shram Portal',
    shortDefinition: 'The dual structure of the Indian labor market: the Informal / Unorganized Sector (~90% of total workforce lacking written contracts, paid leave, and social security pensions), the emerging Gig and Platform Economy, the 4 new simplified Labour Codes (Code on Wages 2019, Industrial Relations Code 2020, Social Security Code 2020, OSH Code 2020), the statutory recognition of Gig and Platform Workers under the Social Security Code 2020 (Social Security Fund funded by 1-2% aggregator turnover cess), and the e-Shram unorganized worker registry portal.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-44-01',
        statement: 'India amalgamated 29 complex historical central labor laws into 4 modern simplified Labour Codes: the Code on Wages 2019, the Industrial Relations Code 2020, the Code on Social Security 2020, and the Occupational Safety, Health and Working Conditions (OSH) Code 2020.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Ministry of Labour and Employment, 4 Labour Codes Gazettes (2019-2020)',
        excerpt: '29 labor laws consolidated into 4 unified Labour Codes.',
      },
      {
        id: 'CLM-ECO-44-02',
        statement: 'The Code on Social Security 2020 provides statutory recognition for the first time to "Gig Workers" and "Platform Workers" outside traditional master-servant employer-employee relationships, mandating the establishment of a Social Security Fund financed by contributions from digital aggregators (1% to 2% of annual turnover, capped at 5% of total payout to workers).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Code on Social Security, 2020 (Sections 114 & 141)',
        excerpt: 'Social Security Code 2020 recognizes gig/platform workers with aggregator turnover cess (1-2%).',
      },
      {
        id: 'CLM-ECO-44-03',
        statement: 'The e-Shram Portal (launched August 2021 by Ministry of Labour and Employment) is a national comprehensive database of unorganized workers seeded with Aadhaar, assigning a 12-digit Universal Account Number (UAN) to facilitate portable social security welfare delivery.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Ministry of Labour and Employment e-Shram Guidelines (2021)',
        excerpt: 'e-Shram registers unorganized workers with 12-digit UAN card for portable social security.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Extending the Welfare Safety Net to the Invisible 90%',
        body: 'For decades, India\'s labor protections applied only to a privileged 10% minority in the formal organized sector (civil servants, factory workers in large corporations). The remaining 90%—street vendors, domestic helpers, construction workers, and app-based delivery riders—worked with zero safety net.\n\nThe **4 Labour Codes** and the **e-Shram Portal** represent a historic legislative effort to formalize and extend basic social security to India\'s unorganized and gig workforce.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The 4 Unified Labour Codes (2019–2020)',
        body: '```mermaid\ngraph TD\n    LC["4 Unified Labour Codes (Amalgamating 29 Central Acts)"]\n    LC --> C1["1. Code on Wages, 2019: Universal Floor Wage across all sectors; gender wage equality"]\n    LC --> C2["2. Industrial Relations Code, 2020: Raised threshold for closure/retrenchment without govt permission from 100 to 300 workers"]\n    LC --> C3["3. Code on Social Security, 2020: Extends EPF/ESIC; recognizes Gig & Platform workers with Aggregator Fund"]\n    LC --> C4["4. OSH Code, 2020: Occupational Safety, Health & Working Conditions for factories, mines, docks"]\n```',
        order: 2,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'Traditional Employee vs Gig Worker vs Platform Worker',
        body: '| Worker Category | Legal Definition (*Social Security Code 2020*) | Relationship Structure |\n| :--- | :--- | :--- |\n| **Traditional Employee** | Works under a formal contract of service with fixed salary, provident fund (EPF), and gratuity. | Direct Master-Servant relationship. |\n| **Gig Worker** | A person who performs work or participates in a work arrangement and earns from such activities outside traditional employer-employee relationship (e.g. freelance consultant, wedding photographer). | Independent contract for service. |\n| **Platform Worker** | A form of gig work where an organization uses an online digital platform/app to access other organizations or individuals to solve specific problems or provide specific services (e.g. Swiggy/Zomato delivery partner, Uber/Ola driver). | Digital intermediated algorithm-driven task allocation. |',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Labour Reforms',
        body: '1. **Aggregator Contribution Cap:** The aggregator cess for gig worker social security is **1% to 2% of annual aggregator turnover**, subject to a maximum cap of **5% of the amount payable to gig workers**.\n2. **IR Code Retrenchment Threshold:** The threshold for industrial establishments to seek prior government permission before retrenchment, layoff, or closure was **raised from 100 workers to 300 workers** in the *Industrial Relations Code 2020*.\n3. **e-Shram Registration:** Open to unorganized workers aged **16 to 59 years** who are not members of EPFO or ESIC and not income tax payers.',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Labour Reforms, 4 Labour Codes, Gig Economy, e-Shram Portal, Formalization',
        notes: 'High-frequency topic in Prelims & Mains regarding gig workers statutory fund and IR code threshold.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: '29 Central labor laws -> 4 Labour Codes (Wages 2019, IR 2020, Social Security 2020, OSH 2020). Social Security Code 2020 statutorily recognizes Gig & Platform workers; creates Social Security Fund funded by 1-2% aggregator turnover cess. IR Code 2020 raised retrenchment permission threshold from 100 to 300 workers. e-Shram = 12-digit UAN card for unorganized workers (ages 16-59).',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under the Industrial Relations Code 2020, what is the revised threshold of workers above which an industrial establishment must obtain prior permission from the appropriate government before effecting layoffs, retrenchment, or closure?',
        options: [
          '50 workers',
          '100 workers',
          '300 workers',
          '500 workers',
        ],
        correctAnswer: '300 workers',
        explanation: 'Under the Industrial Relations Code 2020, the threshold for mandatory prior government permission for layoff, retrenchment, or closure of an industrial establishment was increased from 100 workers (under the old Industrial Disputes Act 1947) to 300 workers, providing greater operational flexibility to medium manufacturing enterprises.',
        trapExplanation: 'Candidates confuse the old threshold (100 workers) with the new 2020 statutory threshold (300 workers).',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },

  {
    id: 'CON-ECO-45',
    topicOrder: 36,
    topicSlug: 'employment-labor-markets-and-economic-planning',
    topicTitle: 'Employment, Labor Markets, Planning & NITI Aayog',
    topicDescription: 'Inclusive Growth Architecture: Direct Benefit Transfer (DBT), JAM Trinity & Welfare Governance.',
    slug: 'inclusive-growth-architecture-direct-benefit-transfer-dbt-jam-trinity-welfare-governance',
    title: 'Inclusive Growth Architecture: Direct Benefit Transfer (DBT), JAM Trinity & Welfare Governance',
    shortDefinition: 'The institutional strategy for inclusive, equitable growth in India: the concept of Inclusive Growth (growth that creates employment opportunities and reduces poverty and horizontal/vertical inequality), the JAM Trinity architecture (Jan Dhan Accounts, Aadhaar Biometric Identification, Mobile Connectivity) enabling Direct Benefit Transfer (DBT) under the Aadhaar Act 2016 (Section 7), plugging ghost-beneficiary leakages across major central schemes (PM-KISAN, PDS, LPG PAHAL).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-45-01',
        statement: 'Inclusive Growth is economic growth that creates equitable opportunities for all sections of society, broadens the base of economic participation, and ensures fair distribution of gains to marginalized groups (women, SC/ST, rural poor, disabled).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Planning Commission 11th & 12th Five Year Plan Documents; UNDP Inclusive Growth Framework',
        excerpt: 'Inclusive growth combines economic dynamism with broad-based social inclusion.',
      },
      {
        id: 'CLM-ECO-45-02',
        statement: 'The JAM Trinity (Jan Dhan-Aadhaar-Mobile) serves as the technological bedrock for Direct Benefit Transfer (DBT, launched Jan 2013), transferring government welfare subsidies directly into beneficiaries\' Aadhaar-linked bank accounts via the Public Financial Management System (PFMS) and Aadhaar Payment Bridge (APB), governed by Section 7 of the Aadhaar Act 2016.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Economic Survey 2014-15; Aadhaar (Targeted Delivery of Financial and Other Subsidies, Benefits and Services) Act, 2016',
        excerpt: 'JAM Trinity operationalizes DBT using PFMS and Aadhaar Payment Bridge under Section 7.',
      },
      {
        id: 'CLM-ECO-45-03',
        statement: 'In the landmark Puttaswamy (Aadhaar) judgment (2018), a 5-judge Constitution Bench of the Supreme Court upheld the constitutional validity of Section 7 of the Aadhaar Act 2016, ruling that requiring Aadhaar for receiving state welfare subsidies and benefits funded from the Consolidated Fund of India passes the proportionality test.',
        claimType: 'JUDICIAL_DOCTRINE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Justice K.S. Puttaswamy (Retd.) v. Union of India (2018) 1 SCC 809 (Aadhaar 5-Judge Bench)',
        excerpt: 'Supreme Court upheld Section 7 of Aadhaar Act for welfare subsidies from Consolidated Fund of India.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Overcoming the "15 Paise" Leakage Dilemma',
        body: 'In 1985, Prime Minister Rajiv Gandhi famously remarked that for every ₹1 released by the Central Government for the poor, only **15 paise reached the actual beneficiary**, with 85 paise siphoned off by corrupt middlemen, ghost beneficiaries, and administrative friction.\n\nThe **JAM Trinity + DBT architecture** eliminated this intermediary leak by engineering a direct electronic pipe from the Consolidated Fund of India straight into the beneficiary\'s thumb-authenticated bank account.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The JAM Trinity Architecture & Delivery Rail',
        body: '```mermaid\ngraph TD\n    JAM["THE JAM TRINITY"]\n    JAM --> J["J: JAN DHAN (Universal zero-balance bank accounts for financial inclusion)"]\n    JAM --> A["A: AADHAAR (12-digit biometric identity eliminating duplicate/ghost entries)"]\n    JAM --> M["M: MOBILE (Telecommunication rail for instant SMS alerts & mobile banking)"]\n    J --> DBT["Direct Benefit Transfer (DBT) via Public Financial Management System (PFMS)"]\n    A --> DBT\n    M --> DBT\n```',
        order: 2,
      },
      {
        type: 'COMPARISON',
        title: 'In-Kind Subsidies vs Direct Cash Transfers (DBT)',
        body: '| Parameter | In-Kind Subsidies (e.g. Physical PDS Grains, Subsidized Fertilizer) | Direct Benefit Transfer (DBT Cash / PAHAL) |\n| :--- | :--- | :--- |\n| **Delivery Mechanism** | Physical distribution of goods through Fair Price Shops (FPS) or dealer networks. | Direct cash credit into bank account via Aadhaar Payment Bridge (APB). |\n| **Leakage & Pilferage**| **High:** Grain diversion to open black markets, adulteration, ghost ration cards. | **Extremely Low:** Digitally authenticated biometric transactions eliminate fake accounts. |\n| **Consumer Choice** | **Zero:** Consumer receives only designated grains (wheat/rice). | **High:** Beneficiary can spend cash on diverse nutritional foods (milk, eggs, fruit) or health. |\n| **Inflation Vulnerability**| **Immune:** Consumer receives fixed physical kilograms regardless of inflation. | **Vulnerable:** Cash transfers lose real purchasing power if not indexed to inflation. |',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Welfare Delivery',
        body: '1. **Aadhaar Supreme Court Ruling (Puttaswamy 2018):** Aadhaar is **MANDATORY for Section 7 welfare subsidies** funded from Consolidated Fund of India (PDS, PM-KISAN, LPG subsidy). But Aadhaar is **NOT mandatory** for school admissions, opening private bank accounts, or getting mobile SIM cards.\n2. **PFMS Role:** The **Public Financial Management System (PFMS)** administered by the Controller General of Accounts (CGA, Department of Expenditure) is the central software backbone executing all DBT payments.\n3. **DBT Types:** DBT includes **Cash Transfers** (PM-KISAN, scholarships), **In-Kind Transfers** (Aadhaar-authenticated PDS ration withdrawal), and **Service Provider Transfers** (Ayushman Bharat payouts to hospitals).',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Inclusive Growth, Direct Benefit Transfer, JAM Trinity, Aadhaar Section 7',
        notes: 'Classic Prelims & Mains core regarding DBT savings, Puttaswamy ruling, and PFMS.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Inclusive Growth = Broad-based equitable participation. JAM Trinity = Jan Dhan (Accounts) + Aadhaar (Identity) + Mobile (Connectivity). DBT (2013) transfers subsidies directly via PFMS and Aadhaar Payment Bridge. Aadhaar Act Section 7 mandatory welfare authentication upheld in Puttaswamy (2018). Aadhaar is NOT mandatory for school admissions or private SIM cards.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'In the landmark 2018 Constitution Bench judgment on the constitutional validity of the Aadhaar Act, what did the Supreme Court of India rule regarding the mandatory requirement of Aadhaar?',
        options: [
          'Aadhaar is unconstitutional and cannot be mandated for any purpose whatsoever',
          'Aadhaar is mandatory for availing welfare subsidies and benefits funded from the Consolidated Fund of India under Section 7, but cannot be mandated by private corporations or for school admissions',
          'Aadhaar is strictly mandatory for all private transactions, including opening private bank accounts and purchasing telecom SIM cards',
          'Aadhaar can only be mandated for non-resident Indians (NRIs) and foreign nationals residing in India',
        ],
        correctAnswer: 'Aadhaar is mandatory for availing welfare subsidies and benefits funded from the Consolidated Fund of India under Section 7, but cannot be mandated by private corporations or for school admissions',
        explanation: 'In Justice K.S. Puttaswamy (2018), the 5-judge Constitution Bench upheld Section 7 of the Aadhaar Act 2016, making Aadhaar mandatory for welfare benefits funded from the Consolidated Fund of India. However, the Court struck down Section 57 allowing private corporate mandates, and prohibited mandating Aadhaar for school admissions, NEET exams, bank accounts, or mobile connections.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-ECO-46',
    topicOrder: 36,
    topicSlug: 'employment-labor-markets-and-economic-planning',
    topicTitle: 'Employment, Labor Markets, Planning & NITI Aayog',
    topicDescription: 'Evolution of Economic Planning: Five-Year Plans, Planning Commission to NITI Aayog Federalism.',
    slug: 'evolution-of-economic-planning-five-year-plans-planning-commission-to-niti-aayog-federalism',
    title: 'Evolution of Economic Planning: Five-Year Plans, Planning Commission to NITI Aayog Federalism',
    shortDefinition: 'The historical evolution of national economic planning in India: the Planning Commission (established March 15, 1950 via executive resolution — non-constitutional, non-statutory) and National Development Council (NDC, 1952), the trajectory of 12 Five-Year Plans (1st Harrod-Domar, 2nd Mahalanobis, Plan Holidays, 12th Plan: Faster, Sustainable and More Inclusive Growth), the replacement of the Planning Commission by NITI Aayog (National Institution for Transforming India, January 1, 2015), Cooperative vs Competitive Federalism, Governing Council structure, and the 3-Year Action Agenda / 7-Year Strategy / 15-Year Vision framework.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-46-01',
        statement: 'The Planning Commission was established on March 15, 1950 as a non-constitutional, non-statutory advisory body by an executive resolution of the Government of India, exercising top-down command resource allocation through Five-Year Plans.',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Cabinet Secretariat Resolution (March 15, 1950); NCERT Class 11 Indian Economic Development',
        excerpt: 'Planning Commission was a non-constitutional, non-statutory body created via executive resolution.',
      },
      {
        id: 'CLM-ECO-46-02',
        statement: 'NITI Aayog (National Institution for Transforming India) was established on January 1, 2015 by a Union Cabinet resolution, replacing the Planning Commission to serve as a policy think-tank promoting "Cooperative Federalism" (where State Chief Ministers are equal partners in the Governing Council) and "Competitive Federalism" (ranking states on performance indices).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Cabinet Secretariat Resolution No. 511/2/1/2015-Cab (Jan 1, 2015); NITI Aayog Mandate',
        excerpt: 'NITI Aayog setup 1 Jan 2015 via Cabinet resolution to foster cooperative and competitive federalism.',
      },
      {
        id: 'CLM-ECO-46-03',
        statement: 'Unlike the Planning Commission, NITI Aayog has NO power to allocate financial funds or plan grants to State Governments (fund allocation powers were transferred to the Ministry of Finance Department of Expenditure and Finance Commission under Article 280), replacing 5-Year Plans with a 15-Year Vision, 7-Year Strategy, and 3-Year Action Agenda.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NITI Aayog Technical Overview; Ministry of Finance Allocation of Business Rules',
        excerpt: 'NITI Aayog has no fund allocation power, functioning purely as a strategic think-tank.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'From Top-Down Central Command to Federal Policy Think-Tank',
        body: 'For 65 years, the Planning Commission operated on a "one-size-fits-all" top-down command model: centralized bureaucrats in Yojana Bhavan dictated how much money Kerala, Nagaland, or Rajasthan could spend on rural roads.\n\nIn a diverse, market-driven $3.5+ Trillion economy, rigid centralized 5-year plans became obsolete. On **January 1, 2015**, the government replaced it with **NITI Aayog**—a bottom-up think-tank where Chief Ministers sit as equal partners in the **Governing Council**.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Planning Commission vs NITI Aayog Structural Comparison',
        body: '| Dimension | Planning Commission (1950–2014) | NITI Aayog (2015–Present) |\n| :--- | :--- | :--- |\n| **Legal Status** | Non-constitutional, non-statutory (Cabinet Resolution). | Non-constitutional, non-statutory (Cabinet Resolution). |\n| **Approach** | **Top-down command approach** ("One-size-fits-all"). | **Bottom-up collaborative approach** (Cooperative & Competitive Federalism). |\n| **Role of States** | States participated passively via National Development Council (NDC); treated as subordinate fund seekers. | **State Chief Ministers & LGs are equal voting members** of the apex **Governing Council**. |\n| **Fund Allocation Powers** | **Allocated Plan Funds** and discretionary grants to States. | **ZERO fund allocation powers** (pure policy think-tank; fund transfers handled by Finance Ministry/Commission). |\n| **Planning Horizon** | Rigid **5-Year Plans** (12th Plan 2012–2017 was the last). | **15-Year Vision Document**, **7-Year National Strategy**, **3-Year Action Agenda**. |\n| **Part-time Members** | No formal institutional provision. | Broad institutional network of domain experts and universities. |',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Organizational Composition of NITI Aayog',
        body: '```mermaid\ngraph TD\n    NITI["NITI Aayog Structure"]\n    NITI --> PM["Chairperson: Prime Minister of India (Ex-officio)"]\n    NITI --> GC["Governing Council: All State CMs + UT Chief Ministers (Delhi, Puducherry, J&K) + UT Lt Governors"]\n    NITI --> VC["Vice-Chairperson: Appointed by PM (Cabinet Minister rank)"]\n    NITI --> CEO["Chief Executive Officer (CEO): Appointed by PM (Secretary rank)"]\n    NITI --> EX["Ex-Officio Members: Max 4 Union Cabinet Ministers nominated by PM"]\n    NITI --> RC["Regional Councils: Convened to address specific inter-state issues"]\n```',
        order: 3,
      },
      {
        type: 'COMPARISON',
        title: 'Key Milestones of Five-Year Plans (1951–2017)',
        body: '| Plan / Period | Target Model & Core Theme | Landmark Achievements |\n| :--- | :--- | :--- |\n| **1st Plan (1951–56)** | **Harrod-Domar Model:** Heavy emphasis on Agriculture, irrigation dams (Bhakra Nangal, Hirakud, DVC). | High success; inflation controlled; GDP grew 3.6% (target 2.1%). |\n| **2nd Plan (1956–61)** | **Nehru-Mahalanobis Strategy:** Rapid industrialization, heavy capital goods, steel plants (Bhilai, Rourkela, Durgapur). | Created industrial base; triggered foreign exchange squeeze. |\n| **Plan Holidays (1966–69)** | 3 Annual Plans following 1962 China War, 1965 Pak War, and 1965-66 severe droughts. | Launch of the **Green Revolution**. |\n| **5th Plan (1974–79)** | D.D. Dhar Model: Focus on *"Garibi Hatao"* (Poverty Eradication) and Self-Reliance. | Terminated early by Janata Govt in 1978 (Rolling Plan). Minimum Needs Programme launched. |\n| **12th Plan (2012–17)** | Theme: *"Faster, Sustainable and More Inclusive Growth"*. | **Final Five-Year Plan of India** before planning dissolution. |',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Economic Planning',
        body: '1. **Constitutional Status:** Neither Planning Commission nor NITI Aayog is created by the Constitution or an Act of Parliament; **both are Non-Constitutional, Non-Statutory extra-constitutional bodies**.\n2. **Fund Allocation Trap:** NITI Aayog **CANNOT allocate plan funds or budgetary grants** to State Governments.\n3. **Competitive Federalism Indices:** NITI Aayog fosters competitive federalism by publishing objective state rankings: **SDG India Index**, **State Energy & Climate Index**, **Composite Water Management Index**, **Export Preparedness Index**, **India Innovation Index**.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Economic Planning in India, NITI Aayog vs Planning Commission, Cooperative Federalism, Five-Year Plans',
        notes: 'Classic Prelims core on NITI Aayog structure, non-statutory nature, zero fund allocation power, and Harrod-Domar/Mahalanobis models.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Planning Commission (1950-2014) = Top-down 5-year plans + Fund allocation. NITI Aayog (Jan 1, 2015) = Non-constitutional, non-statutory policy think-tank. Chairperson: Prime Minister. Governing Council: All State CMs + UT LGs. ZERO fund allocation powers. Replaced 5-yr plans with 15-yr Vision, 7-yr Strategy, 3-yr Action Agenda. 1st Plan = Harrod-Domar (Agri); 2nd Plan = Mahalanobis (Heavy Industry); 12th Plan = Faster, Sustainable, More Inclusive Growth (Final plan).',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following is a FUNDAMENTAL STRUCTURAL DIFFERENCE between NITI Aayog and the erstwhile Planning Commission?',
        options: [
          'NITI Aayog was created by an Act of Parliament, whereas the Planning Commission was created by executive resolution',
          'NITI Aayog has NO power to allocate financial funds or plan grants to State Governments, whereas the Planning Commission allocated plan funds',
          'The Prime Minister is the Chairperson of NITI Aayog, whereas the Finance Minister was the Chairperson of the Planning Commission',
          'NITI Aayog prepares mandatory 5-Year Plans, whereas the Planning Commission prepared only 1-year annual budgets',
        ],
        correctAnswer: 'NITI Aayog has NO power to allocate financial funds or plan grants to State Governments, whereas the Planning Commission allocated plan funds',
        explanation: 'A defining structural change is that NITI Aayog functions purely as a strategic advisory think-tank with zero financial power to allocate plan funds or grants to States (a power previously exercised by the Planning Commission). Fund allocation is now handled exclusively by the Ministry of Finance based on Finance Commission devolution.',
        trapExplanation: 'Candidates assume NITI Aayog allocates budget money or that it is a statutory body created by Parliament.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  // =========================================================================
  // TOPIC 37: RAJASTHAN STATE ECONOMY & FLAGSHIP DEVELOPMENT PROGRAMS
  // =========================================================================
  {
    id: 'CON-ECO-47',
    topicOrder: 37,
    topicSlug: 'rajasthan-state-economy-and-development',
    topicTitle: 'Rajasthan State Economy & Flagship Development Programs',
    topicDescription: 'Macroeconomic profile of Rajasthan (GSDP, GSVA sectoral shares, Per Capita Income), resource endowments, and industrial / social flagship schemes.',
    slug: 'macroeconomic-profile-of-rajasthan-gsdp-gsva-sectoral-shares-per-capita-income',
    title: 'Macroeconomic Profile of Rajasthan: GSDP, GSVA Sectoral Shares & Per Capita Income Trends',
    shortDefinition: 'The macroeconomic indicators of Rajasthan (Economic Review of Rajasthan): Gross State Domestic Product (GSDP at current and constant 2011-12 prices), Gross State Value Added (GSVA) sectoral composition (Agriculture ~27-28%, Industry ~27-28%, Services ~44-45%), Per Capita Income trends (current vs constant prices), and comparative performance against all-India macroeconomic parameters.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-47-01',
        statement: 'Rajasthan\'s Gross State Value Added (GSVA at constant 2011-12 prices) exhibits a balanced structural distribution: Services Sector contributes the largest share (~44-45%), followed closely by Agriculture & Allied Sector (~27-28%) and Industry Sector (~27-28%).',
        claimType: 'CENSUS_DATA',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Economic Review of Rajasthan (Directorate of Economics and Statistics, Government of Rajasthan)',
        excerpt: 'Rajasthan GSVA constant prices: Services ~44%, Agriculture ~27%, Industry ~28%.',
      },
      {
        id: 'CLM-ECO-47-02',
        statement: 'Within Rajasthan\'s Agriculture and Allied sector GSVA, Livestock constitutes the single largest component (~46-47%), followed by Crops (~45-46%), Forestry & Logging (~7%), and Fishing (<1%), reflecting the vital drought-resilience role of animal husbandry in the arid economy.',
        claimType: 'CENSUS_DATA',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Economic Review of Rajasthan, Agriculture & Allied Sector chapter',
        excerpt: 'Livestock contributes ~46-47% of agricultural GSVA in Rajasthan, matching or exceeding crop output.',
      },
      {
        id: 'CLM-ECO-47-03',
        statement: 'Wholesale Price Index (WPI) for Rajasthan is compiled on base year 1999-2000=100 (covering 154 items: Primary Articles 33.89%, Fuel & Power 16.25%, Manufactured Products 49.85%), compiled monthly by the Directorate of Economics and Statistics, Rajasthan.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Directorate of Economics and Statistics (DES), Rajasthan WPI Bulletins',
        excerpt: 'Rajasthan State WPI base year is 1999-2000=100 with 154 commodities.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Macro Dynamics of India\'s Largest Geographical State',
        body: 'Spanning **10.4% of India\'s landmass** but possessing only **~1% of the nation\'s water resources**, Rajasthan\'s macroeconomic architecture is shaped by its arid desert geography, extraordinary mineral wealth, expanding renewable energy capacity, and robust livestock sector.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'GSVA Sectoral Composition of Rajasthan (Constant 2011-12 Prices)',
        body: '```mermaid\npie title Rajasthan GSVA Sectoral Share (Constant Prices)\n    "Services Sector" : 44\n    "Industry Sector" : 28\n    "Agriculture & Allied Sector" : 28\n```\n\n* **Services (~44%):** Tourism, real estate, financial services, transport.\n* **Industry (~28%):** Mining & quarrying, cement, textiles, chemical manufacturing.\n* **Agriculture (~28%):** Driven heavily by **Livestock (~46%)** and rainfed coarse grains/oilseeds (**Crops ~46%**).',
        order: 2,
      },
      {
        type: 'COMPARISON',
        title: 'Rajasthan vs All-India Macroeconomic Comparison',
        body: '| Economic Indicator | Rajasthan State | All-India Average |\n| :--- | :--- | :--- |\n| **Geographical Area Share** | **10.41%** (Largest State in India). | 100% |\n| **National Population Share** | **5.66%** (Census 2011). | 100% |\n| **Surface Water Share** | **~1.16%** (Extreme water scarcity). | 100% |\n| **WPI Base Year** | **1999-2000 = 100** (State-specific series). | **2011-12 = 100** |\n| **CPI Base Year** | **2012 = 100** (NSO Series). | **2012 = 100** |',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Rajasthan Economy',
        body: '1. **Livestock Dominance:** In Rajasthan\'s agriculture sector, **Livestock accounts for ~46-47% of total agricultural GSVA**, making animal husbandry virtually equal in output to crop farming.\n2. **State WPI Base Year:** Rajasthan\'s State WPI is compiled on **Base 1999-2000 = 100** (frequently tested in RPSC RAS Prelims).\n3. **Inflation Anchor:** For state retail inflation analysis, the **CPI-Combined (Base 2012 = 100)** compiled by NSO for Jaipur, Alwar, and Bhilwara centers is used.',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'rpsc-ras',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Economy of Rajasthan: Major Macroeconomic Indicators, GSDP, GSVA Sectoral Shares, WPI/CPI',
        notes: 'Direct high-weightage topic in RAS Prelims and Mains Paper I.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Rajasthan Macro: Area = 10.41% of India, Population = 5.66%, Surface water = 1.16%. GSVA constant shares: Services ~44%, Industry ~28%, Agriculture ~28%. Agriculture breakup: Livestock (~46-47%) is equal to Crops (~46%). Rajasthan WPI base = 1999-2000=100 (154 items). CPI base = 2012=100.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'What is the base year used by the Directorate of Economics and Statistics, Government of Rajasthan, for compiling the state-specific Wholesale Price Index (WPI)?',
        options: [
          '2011-12 = 100',
          '1999-2000 = 100',
          '2004-05 = 100',
          '2015-16 = 100',
        ],
        correctAnswer: '1999-2000 = 100',
        explanation: 'While the all-India Wholesale Price Index compiled by DPIIT uses the 2011-12 base year, Rajasthan\'s state-specific Wholesale Price Index (WPI) is compiled on the base year 1999-2000=100 covering 154 commodity items.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-ECO-48',
    topicOrder: 37,
    topicSlug: 'rajasthan-state-economy-and-development',
    topicTitle: 'Rajasthan State Economy & Flagship Development Programs',
    topicDescription: 'Key Economic Sectors of Rajasthan: Arid Agriculture, Minerals, Renewable Energy & Tourism.',
    slug: 'key-economic-sectors-of-rajasthan-arid-agriculture-minerals-renewable-energy-hub-tourism',
    title: 'Key Economic Sectors of Rajasthan: Arid Agriculture, Mineral Endowments, Renewable Energy Hub & Tourism',
    shortDefinition: 'The core sectoral drivers of Rajasthan: Agricultural leadership (#1 in Mustard/Rapeseed, Bajra, Nutri-cereals, Gwar), Livestock wealth (#2 in milk production, #1 in wool production with ~35-40% national share), Mineral monopoly (Sole/exclusive producer of Lead & Zinc, Wollastonite, Selenite, Gypsum; major onshore crude oil producer in Barmer-Cairn basin), Renewable Energy powerhouse (#1 in solar energy potential with 142 GW, Bhadla Solar Park 2245 MW), and Tourism heritage architecture.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-48-01',
        statement: 'Rajasthan ranks 1st in India in the production of Bajra (Pearl Millet), Mustard & Rapeseed, Nutri-Cereals, and Gwar seed, and ranks 2nd in total Oilseeds and Pulses production in the country.',
        claimType: 'CENSUS_DATA',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Economic Review of Rajasthan; Ministry of Agriculture & Farmers Welfare Production Estimates',
        excerpt: 'Rajasthan is #1 in Bajra, Mustard, Nutri-cereals, and Gwar.',
      },
      {
        id: 'CLM-ECO-48-02',
        statement: 'Rajasthan holds a near 100% sole production monopoly in India for Lead-Zinc ores, Wollastonite, Selenite, and Jasper, and is the second-largest crude oil producing state in India (accounting for ~20-22% of domestic crude output from the Barmer-Sanchore basin).',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Indian Minerals Yearbook (IBM); Directorate of Petroleum, Rajasthan',
        excerpt: 'Monopoly in Lead-Zinc, Wollastonite, Selenite; Barmer contributes ~20-22% of domestic crude oil.',
      },
      {
        id: 'CLM-ECO-48-03',
        statement: 'Rajasthan ranks 1st in India in installed solar power capacity (>18,000 MW), housing the world-renowned Bhadla Solar Park (2,245 MW in Phalodi/Jodhpur district) under the Rajasthan Solar Energy Policy 2019 (targeting 30 GW solar).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Ministry of New and Renewable Energy (MNRE); Rajasthan Renewable Energy Corporation Limited (RRECL)',
        excerpt: 'Rajasthan is #1 in solar installed capacity; Bhadla Solar Park is 2,245 MW.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Converting Arid Sunlight and Minerals into Economic Power',
        body: 'The harsh geographical conditions of western Rajasthan (Thar Desert, high solar insolation, mineral-rich Aravalli range) have been converted into primary comparative economic advantages: transforming the state into India\'s solar capital, mineral hub, and onshore oil powerhouse.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Sectoral Leadership Matrix of Rajasthan',
        body: '| Sector | Rajasthan National Rank | Prominent Production Share / Hubs |\n| :--- | :--- | :--- |\n| **Mustard & Rapeseed** | **Rank 1** | **~44–46%** of India\'s total mustard output (Bharatpur hub). |\n| **Bajra (Pearl Millet)** | **Rank 1** | **~40–45%** of national production (Nutri-cereal capital). |\n| **Wool Production** | **Rank 1** | **~35–40%** of India\'s total wool production (Central Sheep & Wool Research Institute at Avikanagar). |\n| **Milk Production** | **Rank 2** (closely behind UP) | **~15%** of national milk output; RCDF / Saras Dairy network. |\n| **Solar Power** | **Rank 1** | Highest installed solar capacity in India; **Bhadla Solar Park (2,245 MW)** in Phalodi. |\n| **Lead & Zinc** | **Rank 1 (Sole Producer)** | **100% of Indian output** (Hindustan Zinc: Rampura Agucha, Zawar mines). |\n| **Crude Oil (Onshore)** | **Rank 1 (Onshore) / Rank 2 (Total)**| **~20–22% of India\'s crude oil** (Mangala, Bhagyam, Aishwarya fields in Barmer). |',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Barmer Petroleum Hub & Pachpadra Refinery (HPCL Rajasthan Refinery Ltd - HRRL)',
        body: '```mermaid\ngraph TD\n    OIL["Barmer-Sanchore Basin Crude Production (Cairn Vedanta)"] --> REFINERY["Pachpadra Refinery (HRRL: 9 MMTPA)"]\n    REFINERY --> JV["Joint Venture: HPCL (74%) + Govt of Rajasthan (26%)"]\n    REFINERY --> PETRO["Petrochemical Complex: Downstream polypropylene, polyethylene, polymers"]\n```',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Rajasthan Resource Endowments',
        body: '1. **HRRL Equity Split:** HPCL Rajasthan Refinery Limited (Pachpadra, Balotra) is a joint venture with **74% equity held by HPCL and 26% held by the Government of Rajasthan**.\n2. **Bhadla Solar Park District:** Bhadla Solar Park is located in **Phalodi district** (formerly part of Jodhpur).\n3. **Sole Mineral Monopoly:** Lead-Zinc, Wollastonite, and Selenite are produced **exclusively in Rajasthan**.',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'rpsc-ras',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Economy of Rajasthan: Agriculture, Minerals, Oil & Gas, Renewable Energy, Tourism',
        notes: 'Core Prelims and Mains questions on HRRL 74:26 equity, Bhadla, and mineral monopolies.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Rajasthan Sectoral Ranks: #1 in Mustard (~45%), Bajra (~42%), Wool (~38%), Solar energy (>18 GW, Bhadla 2245 MW in Phalodi), Lead-Zinc (100% monopoly), Wollastonite, Selenite. #2 in Milk (15%) and Pulses. Barmer basin = ~20% domestic crude oil. Pachpadra Refinery (HRRL) = 74% HPCL + 26% Rajasthan Govt (9 MMTPA). Avikanagar (Tonk) = Central Sheep & Wool Research Institute.',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'What is the exact equity shareholding ratio between HPCL and the Government of Rajasthan in the Pachpadra Petroleum Refinery project (HPCL Rajasthan Refinery Limited - HRRL)?',
        options: [
          '50% HPCL and 50% Government of Rajasthan',
          '74% HPCL and 26% Government of Rajasthan',
          '51% HPCL and 49% Government of Rajasthan',
          '80% HPCL and 20% Government of Rajasthan',
        ],
        correctAnswer: '74% HPCL and 26% Government of Rajasthan',
        explanation: 'HPCL Rajasthan Refinery Limited (HRRL), which is establishing the 9 MMTPA greenfield refinery-cum-petrochemical complex at Pachpadra (Balotra district), is a joint venture with 74% equity held by Hindustan Petroleum Corporation Limited (HPCL) and 26% equity held by the Government of Rajasthan.',
        trapExplanation: 'Candidates confuse the 74:26 ratio with standard 50:50 or 51:49 public-private partnerships.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-ECO-49',
    topicOrder: 37,
    topicSlug: 'rajasthan-state-economy-and-development',
    topicTitle: 'Rajasthan State Economy & Flagship Development Programs',
    topicDescription: 'Industrial Infrastructure & Flagship Schemes in Rajasthan: RIPS, RIICO, DMIC & Social Welfare Suite.',
    slug: 'industrial-infrastructure-and-flagship-schemes-in-rajasthan-rips-riico-dmic-social-welfare',
    title: 'Industrial Infrastructure & Flagship Schemes in Rajasthan: RIPS, RIICO, DMIC & Social Welfare Suite',
    shortDefinition: 'The industrial promotional and social welfare architecture of Rajasthan: RIICO industrial areas, Rajasthan Investment Promotion Scheme (RIPS 2022/2024: customized capital subsidies, electricity duty exemptions, and green incentives), Delhi-Mumbai Industrial Corridor (DMIC: ~38% length passes through Rajasthan; Khushkhera-Bhiwadi-Neemrana & Jodhpur-Pali-Marwar industrial nodes), Mukhyamantri Nishulk Dawa Yojana (2011), Mukhyamantri Chiranjeevi Swasthya Bima Yojana / Ayushman Arogya Rajasthan, Indira Rasoi Yojana, and Rajasthan Social Security Pension Schemes.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-49-01',
        statement: 'Rajasthan accounts for the largest share (~38% or 578 km) of the 1,504 km Western Dedicated Freight Corridor (DFC), forming the backbone of the Delhi-Mumbai Industrial Corridor (DMIC) in the state across two priority investment regions: Khushkhera-Bhiwadi-Neemrana (KBIR) and Jodhpur-Pali-Marwar Industrial Area (JPMIA).',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'DMICDC Project Overview; RIICO DMIC Development Report',
        excerpt: 'Rajasthan has ~38% of DMIC alignment with KBIR and Jodhpur-Pali-Marwar nodes.',
      },
      {
        id: 'CLM-ECO-49-02',
        statement: 'Rajasthan Investment Promotion Scheme (RIPS 2022 / RIPS 2024) provides fiscal packages to manufacturing and service enterprises including asset capital subsidies, electricity duty exemption (100% for 7 years), land tax and stamp duty exemptions, and special packages for Sunrise sectors (Green Hydrogen, EV manufacturing, Medical Devices, Fintech).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Government of Rajasthan, RIPS 2022 & RIPS 2024 Policy Guidelines, BIP Rajasthan',
        excerpt: 'RIPS provides capital subsidies, stamp duty exemption, and sunrise sector incentives.',
      },
      {
        id: 'CLM-ECO-49-03',
        statement: 'Mukhyamantri Nishulk Dawa Yojana (launched October 2, 2011) provides free essential medicines to all outdoor and indoor patients in government hospitals across Rajasthan, administered by the Rajasthan Medical Services Corporation Limited (RMSCL).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Department of Medical, Health and Family Welfare, Government of Rajasthan; RMSCL Charter',
        excerpt: 'Nishulk Dawa Yojana launched 2 Oct 2011 for universal free essential medicines via RMSCL.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Industrial Freight Superhighways & Universal Social Safety Nets',
        body: 'Rajasthan combines an aggressive industrial growth agenda (leveraging its strategic proximity to the National Capital Region and DMIC freight corridors through **RIICO** and **RIPS**) with pioneering, universalized social welfare models in healthcare and nutrition.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Industrial Architecture: DMIC & RIICO',
        body: '```mermaid\ngraph TD\n    DMIC["Delhi-Mumbai Industrial Corridor (DMIC) in Rajasthan (~38% alignment - 578 km)"]\n    DMIC --> NODE1["Node 1: Khushkhera-Bhiwadi-Neemrana Investment Region (KBIR) - Auto & Electronics Hub"]\n    DMIC --> NODE2["Node 2: Jodhpur-Pali-Marwar Industrial Area (JPMIA) - Textiles & Heavy Engineering"]\n    DMIC --> RIICO["RIICO: Rajasthan State Industrial Development and Investment Corporation (Est. 1980) developing Special Japanese Zones (Neemrana/Ghiloth)"]\n```',
        order: 2,
      },
      {
        type: 'COMPARISON',
        title: 'Signature Flagship Welfare Schemes of Rajasthan',
        body: '| Flagship Scheme | Launch Date & Ministry | Core Benefit & Features |\n| :--- | :--- | :--- |\n| **Mukhyamantri Nishulk Dawa Yojana** | **October 2, 2011** (Health Dept). | Free essential medicines for all patients visiting government hospitals (procured via **RMSCL**). |\n| **Mukhyamantri Nishulk Janch Yojana** | **April 7, 2013** (Health Dept). | Free essential diagnostic laboratory tests in all public health institutions. |\n| **Indira Rasoi Yojana (Shri Annapurna Rasoi)**| **August 20, 2020** (Local Self Govt). | Nutritious meal provided for **₹8 per thali** under the motto *"Koi Bhookha Na Soye"*. |\n| **Palanhar Yojana** | **2005** (Social Justice Dept). | Monthly financial assistance to caregivers of orphan/destitute children for education and upbringing. |\n| **Mukhyamantri Vridhjan Samman Pension**| Social Justice Dept. | Monthly social security pension for senior citizens (women $\\ge 55$ yrs, men $\\ge 58$ yrs). |',
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Rajasthan Flagship Schemes',
        body: '1. **DMIC Share:** Rajasthan has the **largest share (~38%) of the Western Dedicated Freight Corridor alignment** among all states.\n2. **Nishulk Dawa Launch:** Launched on **2nd October 2011**; executed by **RMSCL (Rajasthan Medical Services Corporation Limited)**.\n3. **Japanese Industrial Zones:** Located at **Neemrana** (1st zone) and **Ghiloth** (2nd zone for ceramics/electronics) in Kotputli-Behror / Alwar district developed by RIICO.',
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'rpsc-ras',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Economy of Rajasthan: Flagship Welfare Schemes, Industrial Policy RIPS, DMIC, RIICO',
        notes: 'High-frequency core questions in RAS Prelims & Mains across Nishulk Dawa, DMIC nodes, and RIPS.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'DMIC in Rajasthan: Largest share ~38% (578 km). Priority nodes: Khushkhera-Bhiwadi-Neemrana (KBIR) + Jodhpur-Pali-Marwar (JPMIA). Japanese zones at Neemrana & Ghiloth (RIICO). RIPS 2022/2024: 100% electricity duty & stamp duty exemptions for 7 yrs. Nishulk Dawa Yojana (2 Oct 2011 via RMSCL). Nishulk Janch (7 April 2013). Indira Rasoi / Annapurna = ₹8/thali meal. Palanhar Yojana (2005).',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'What percentage of the Western Dedicated Freight Corridor (DFC), which forms the backbone of the Delhi-Mumbai Industrial Corridor (DMIC), passes through the State of Rajasthan?',
        options: [
          'Approximately 15%',
          'Approximately 25%',
          'Approximately 38%',
          'Approximately 52%',
        ],
        correctAnswer: 'Approximately 38%',
        explanation: 'Rajasthan accounts for approximately 38% (about 578 km out of the total 1,504 km) of the Western Dedicated Freight Corridor, giving Rajasthan the largest geographical alignment share among all states traversed by the DMIC project.',
        trapExplanation: 'Candidates confuse the 38% Rajasthan alignment with Gujarat or Maharashtra shares.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },
];

export async function seedBatchE3CanonicalKnowledge() {
  console.log('Seeding Batch E3 Canonical Knowledge (Topics 33–37: 20 concepts)...');

  let domain = await db.domain.findFirst({
    where: {
      OR: [
        { slug: 'economic-commercial-laws-macroeconomics' },
        { slug: 'indian-economy-macroeconomics' },
        { name: 'Indian Economy & Macroeconomics' },
      ],
    },
  });

  if (!domain) {
    domain = await db.domain.create({
      data: {
        name: 'Indian Economy & Macroeconomics',
        slug: 'indian-economy-macroeconomics',
        description: 'Comprehensive macroeconomic foundations, monetary economics, public finance, banking systems, external sector, and development economics of India.',
      },
    });
  }

  let subject = await db.subject.findFirst({
    where: { slug: 'indian-economy' },
  });

  if (!subject) {
    subject = await db.subject.create({
      data: {
        name: 'Indian Economy & Macroeconomics',
        slug: 'indian-economy',
        domainId: domain.id,
        scopeStatement: 'Foundational macroeconomics, national income accounting, banking, monetary & fiscal policy, trade, agriculture, industry, poverty, and state economy.',
        description: 'Master academic curriculum for Indian Economy and Macroeconomics across UPSC, Banking, and State PSC examinations.',
      },
    });
  }

  const source = await db.source.upsert({
    where: { id: 'SRC-ECONOMY-MASTER-2026' },
    update: {},
    create: {
      id: 'SRC-ECONOMY-MASTER-2026',
      title: 'Indian Economy & Macro Master Corpus (2026)',
      sourceType: 'STATUTORY_REPORTS',
      authorityTier: 'STANDARD_AUTHORITY',
      description: 'Authoritative Indian Economy master knowledge repository.',
    },
  });

  const upsc = await db.exam.upsert({
    where: { slug: 'upsc-cse' },
    update: {},
    create: {
      slug: 'upsc-cse',
      name: 'UPSC Civil Services Examination',
      conductingBody: 'Union Public Service Commission',
      description: 'Premier national civil services examination.',
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

  const iibf = await db.exam.upsert({
    where: { slug: 'iibf-dbf' },
    update: {},
    create: {
      slug: 'iibf-dbf',
      name: 'IIBF Diploma in Banking & Finance',
      conductingBody: 'Indian Institute of Banking & Finance',
      description: 'Professional banking qualification.',
    },
  });

  const examMap: Record<string, string> = {
    'upsc-cse': upsc.id,
    'rpsc-ras': rpsc.id,
    'iibf-dbf': iibf.id,
  };

  const topicsMap: Record<string, { title: string; order: number; description: string; concepts: CanonicalConceptDefinition[] }> = {};
  for (const c of BATCH_E3_CONCEPTS) {
    if (!topicsMap[c.topicSlug]) {
      topicsMap[c.topicSlug] = {
        title: c.topicTitle,
        order: c.topicOrder,
        description: c.topicDescription,
        concepts: [],
      };
    }
    topicsMap[c.topicSlug].concepts.push(c);
  }

  for (const [topicSlug, topicData] of Object.entries(topicsMap)) {
    const topic = await db.topic.upsert({
      where: {
        subjectId_slug: {
          subjectId: subject.id,
          slug: topicSlug,
        },
      },
      update: {
        title: topicData.title,
        order: topicData.order,
        description: topicData.description,
        status: 'ACTIVE',
      },
      create: {
        subjectId: subject.id,
        slug: topicSlug,
        title: topicData.title,
        order: topicData.order,
        description: topicData.description,
        status: 'ACTIVE',
      },
    });

    for (const cDef of topicData.concepts) {
      const concept = await db.concept.upsert({
        where: { id: cDef.id },
        update: {
          topicId: topic.id,
          slug: cDef.slug,
          title: cDef.title,
          shortDefinition: cDef.shortDefinition,
          difficulty: cDef.difficulty,
          status: 'ACTIVE',
        },
        create: {
          id: cDef.id,
          topicId: topic.id,
          slug: cDef.slug,
          title: cDef.title,
          shortDefinition: cDef.shortDefinition,
          difficulty: cDef.difficulty,
          status: 'ACTIVE',
        },
      });

      await db.claim.deleteMany({ where: { conceptId: concept.id } });
      await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
      await db.examConceptMapping.deleteMany({ where: { conceptId: concept.id } });
      await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
      await db.question.deleteMany({ where: { conceptId: concept.id } });

      for (const clm of cDef.claims) {
        const claim = await db.claim.create({
          data: {
            id: clm.id,
            conceptId: concept.id,
            statement: clm.statement,
            claimType: clm.claimType,
            epistemicLevel: clm.epistemicLevel,
            confidence: clm.confidence,
            status: 'CANONICAL_CLAIM',
          },
        });

        await db.evidence.create({
          data: {
            claimId: claim.id,
            sourceId: source.id,
            locator: clm.locator,
            excerpt: clm.excerpt,
            evidenceType: 'STATUTORY_INSTRUMENT',
            authority: 'PRIMARY_GOVERNMENT_RECORD',
            evidentiarySupport: 'DIRECT_PROOF',
            extractionConfidence: 'CERTAIN',
          },
        });
      }

      for (const cb of cDef.contentBlocks) {
        await db.contentBlock.create({
          data: {
            conceptId: concept.id,
            type: cb.type,
            title: cb.title,
            body: cb.body,
            order: cb.order,
            visibility: 'CANONICAL_FULL',
          },
        });
      }

      for (const em of cDef.examMappings) {
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
              frequentTraps: em.frequentTraps,
            },
          });
        }
      }

      for (const ru of cDef.revisionUnits) {
        await db.revisionUnit.create({
          data: {
            conceptId: concept.id,
            type: ru.type,
            content: ru.content,
            order: ru.order,
          },
        });
      }

      for (const q of cDef.questions) {
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
            isPYQ: q.isPYQ,
          },
        });
      }
    }
  }
}
