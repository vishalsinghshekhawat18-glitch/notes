/**
 * Batch E1 Canonical Knowledge Seed (Topics 27–29: 17 Concepts)
 * Mind of Aravalli — Academic Reading Hub
 *
 * Covers:
 * - Topic 27: Foundations of Economics & National Income Accounting (CON-ECO-01 to CON-ECO-06)
 * - Topic 28: Money, Commercial Banking & Financial Markets Architecture (CON-ECO-07 to CON-ECO-11)
 * - Topic 29: Central Banking, Monetary Policy Framework & Price Theory (CON-ECO-12 to CON-ECO-17)
 */

import { db } from '../db/client';

export interface CanonicalConceptDefinition {
  id: string;
  topicOrder: number;
  topicSlug: string;
  topicTitle: string;
  topicDescription: string;
  slug: string;
  title: string;
  shortDefinition: string;
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  claims: Array<{
    id: string;
    statement: string;
    claimType: 'CONSTITUTIONAL_PROVISION' | 'STATUTORY_RULE' | 'JUDICIAL_DOCTRINE' | 'HISTORICAL_FACT' | 'CENSUS_DATA' | 'CORE_PRINCIPLE';
    epistemicLevel: 'ESTABLISHED_FACT' | 'EMPIRICAL_RULE' | 'SCHOLARLY_CONSENSUS';
    confidence: 'HIGH' | 'MEDIUM';
    locator: string;
    excerpt: string;
  }>;
  contentBlocks: Array<{
    type: 'INTUITION' | 'CORE_IDEA' | 'MECHANISM' | 'LEGAL_DISTINCTION' | 'CASE_LAW' | 'EXAM_APPLICATION' | 'COMPARISON';
    title: string;
    body: string;
    order: number;
  }>;
  examMappings: Array<{
    examCode: string;
    relevance: 'CORE_SYLLABUS' | 'DIRECT_OVERLAY' | 'ANCILLARY_COVERAGE';
    priority: 'HIGH' | 'MEDIUM';
    requiredDepth: 'EXPERT' | 'PROFICIENT' | 'AWARENESS';
    syllabusUnit: string;
    notes: string;
    frequentTraps?: string;
  }>;
  revisionUnits: Array<{
    type: 'FLASH_30S' | 'SUMMARY_2M' | 'ARCHITECTURE_5M';
    content: string;
    order: number;
  }>;
  questions: Array<{
    type: 'CONCEPT_CHECK' | 'APPLIED_SCENARIO' | 'EXCEPTION_PROBE';
    stem: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
    trapExplanation?: string;
    difficulty: 'EASY' | 'MEDIUM' | 'HARD';
    isPYQ: boolean;
  }>;
}

export const BATCH_E1_CONCEPTS: CanonicalConceptDefinition[] = [
  // =========================================================================
  // TOPIC 27: FOUNDATIONS OF ECONOMICS & NATIONAL INCOME ACCOUNTING
  // =========================================================================
  {
    id: 'CON-ECO-01',
    topicOrder: 27,
    topicSlug: 'foundations-of-economics-and-national-income',
    topicTitle: 'Foundations of Economics & National Income Accounting',
    topicDescription: 'First principles of economics: scarcity, choice, opportunity cost, Production Possibility Frontier (PPF), circular flow of income, national income aggregates (GDP, NDP, GNP, NNP), factor cost vs basic price vs market price, and Green GDP.',
    slug: 'scarcity-choice-opportunity-cost-ppf-central-economic-problems',
    title: 'Scarcity, Choice, Opportunity Cost, Production Possibility Frontier & Central Economic Problems',
    shortDefinition: 'The foundational nature of economics as the study of resource allocation under scarcity: the universal constraint of unlimited human wants vs finite resources, opportunity cost as the next best alternative forgone, the concave Production Possibility Frontier (PPF) reflecting increasing marginal opportunity costs, and the three central economic questions (What, How, and For Whom to produce).',
    difficulty: 'BEGINNER',
    claims: [
      {
        id: 'CLM-ECO-01-01',
        statement: 'Economics is fundamentally the science of scarce resource allocation; scarcity arises because human wants are unlimited while productive resources (land, labor, capital, enterprise) are finite with alternative uses (Lionel Robbins definition, 1932).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Lionel Robbins, An Essay on the Nature and Significance of Economic Science (1932); NCERT Class 12 Introductory Microeconomics, Ch 1',
        excerpt: 'Economics studies human behavior as a relationship between ends and scarce means which have alternative uses.',
      },
      {
        id: 'CLM-ECO-01-02',
        statement: 'Opportunity cost is the value of the next best alternative forgone when a choice is made; the Production Possibility Frontier (PPF) is bowed outwards (concave to origin) because resources are specialized and not equally efficient in the production of all goods, resulting in an Increasing Marginal Rate of Transformation (MRT).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Paul Samuelson & William Nordhaus, Economics (19th ed.); NCERT Class 12 Microeconomics, Ch 1',
        excerpt: 'Marginal Rate of Transformation (MRT = ΔY / ΔX) increases along the PPF, creating its concave curvature.',
      },
      {
        id: 'CLM-ECO-01-03',
        statement: 'Every economic society must resolve three central structural problems: What to produce and in what quantities (allocative efficiency), How to produce (technological choice: labor-intensive vs capital-intensive), and For whom to produce (distributional equity).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Paul Samuelson, Economics; NCERT Class 12 Introductory Microeconomics, Ch 1',
        excerpt: 'Three central problems of an economy: What, How, and For Whom to produce.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Inevitability of Scarcity & The Logic of Choice',
        body: 'Human society faces a fundamental dilemma: desires for goods, healthcare, infrastructure, education, and leisure are boundless, but the physical inputs required to produce them—mineral deposits, arable land, skilled human labor, machinery, and time—are strictly bounded.\n\nBecause resources are finite, every society is forced to make choices. Choosing more of one good (e.g., national defense or capital machinery) inevitably requires sacrificing some quantity of another (e.g., consumer subsidies or civilian healthcare). This trade-off is the core premise of economic analysis.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Opportunity Cost & The Production Possibility Frontier (PPF)',
        body: '### 1. Opportunity Cost\n**Opportunity Cost** is not merely financial expenditure; it is the **true economic cost** representing the value of the highest-ranked alternative given up.\n* If a government allocates \\$10 billion to fuel subsidies, the opportunity cost is the primary schools or semiconductor fabrication units that could have been built with those identical funds.\n\n### 2. The Production Possibility Frontier (PPF)\nThe **PPF** is a curve showing the maximum combinations of two goods an economy can produce given full employment of existing resources and technology.\n\n$$\\text{Marginal Rate of Transformation (MRT)} = \\left| \\frac{\\Delta Y}{\\Delta X} \\right|$$\n\n* **Points on the Curve:** Productively efficient (full resource utilization).\n* **Points inside the Curve:** Inefficient / Unemployment of resources.\n* **Points outside the Curve:** Unattainable under current technological/resource constraints.\n* **Concavity to Origin:** The PPF is concave because resources are not perfectly adaptable. Shifting farmers to software engineering requires retraining, causing the marginal sacrifice of agricultural output to escalate.',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'The Three Central Economic Questions across Economic Systems',
        body: 'Every economy resolves the three foundational questions through distinct institutional mechanisms:\n\n| Central Question | Market Economy (Capitalist) | Centrally Planned Economy (Socialist) | Mixed Economy (e.g., India) |\n| :--- | :--- | :--- | :--- |\n| **1. What to produce?** | Determined by **Price Mechanism** & Consumer Sovereignty (profit-driven). | Determined by **Central Planning Authority** based on social priorities. | Market forces determine consumer goods; State produces public/merit goods. |\n| **2. How to produce?** | Lowest cost combination (Capital vs Labor determined by factor prices). | Determined by State targets (often prioritizing employment generation). | Private sector optimizes profit; State mandates labor laws and social targets. |\n| **3. For whom to produce?** | Distributed based on purchasing power and factor earnings. | Distributed based on state-assessed needs and administrative rationing. | Market distribution supplemented by welfare safety nets (PDS, DBT, subsidies). |',
        order: 3,
      },
      {
        type: 'COMPARISON',
        title: 'Microeconomics vs Macroeconomics: The Fallacy of Composition',
        body: 'Economics is divided into two broad analytical branches:\n\n* **Microeconomics:** Focuses on individual decision-makers (individual consumer demand, firm pricing, single market equilibrium).\n* **Macroeconomics (John Maynard Keynes, 1936):** Focuses on economy-wide aggregate variables (National Output, General Price Level, Aggregate Demand, Unemployment, Balance of Payments).\n\n### The Paradox of Thrift (Fallacy of Composition)\nA classic example of why micro-intuition fails at the macro level: If one household saves more, its financial security increases. But if *all* households simultaneously increase savings and slash consumption, aggregate demand collapses, firms cut production and employment, and aggregate national income falls—ultimately reducing total savings.',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Foundational Economics',
        body: '1. **PPF Shift vs Movement Along PPF:** An increase in resource quantity or technological innovation shifts the **entire PPF outward**. Reallocating existing resources is a **movement along the curve**.\n2. **Zero Opportunity Cost Trap:** Free goods (e.g., ambient air, sunlight) have zero opportunity cost because their use does not require sacrificing another good. Economic goods (even when provided "free" by the state, like free food grains) carry an opportunity cost borne by taxpayers.\n3. **Normative vs Positive Statements:** *Positive economics* describes "what is" (empirically verifiable facts: "A rise in repo rate dampens inflation"). *Normative economics* prescribes "what ought to be" (value judgments: "The government should subsidize electric vehicles").',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'GS Paper III: Indian Economy and issues relating to planning, mobilization of resources, growth, development and employment',
        notes: 'Covers scarcity, opportunity cost, and market vs mixed economic foundations.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (Indian Economy & Indian Financial System): Module A - Economic Fundamentals',
        notes: 'Direct questions on Robbins definition, PPF curvature, and micro vs macro distinctions.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Scarcity = Unlimited wants vs finite resources (Robbins 1932). Opportunity Cost = Next best alternative forgone. PPF = Maximum output combinations; concave to origin due to increasing MRT (ΔY/ΔX). 3 Central Questions = What, How, For Whom to produce. Micro = Individual agents; Macro = Aggregates. Paradox of Thrift = Micro saving good, aggregate saving causes demand collapse.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Economics analyzes resource allocation under scarcity. Opportunity cost represents the value of forgone alternatives. The Production Possibility Frontier (PPF) is concave to the origin due to increasing marginal rate of transformation. Economies solve What, How, and For Whom to produce via Market, Planned, or Mixed systems. The Fallacy of Composition (e.g., Paradox of Thrift) proves that individual micro truths do not simply scale to macroeconomic aggregates.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Definition: Lionel Robbins (1932) scarcity of means with alternative uses.\n2. PPF Geometry: Concave curve representing maximum output combinations. Points on curve = productive efficiency; inside = inefficiency/unemployment; outside = unattainable.\n3. MRT Formula: MRT = |ΔY / ΔX|. Increases along curve due to imperfect factor adaptability.\n4. Three Central Problems: What (allocative), How (technology), For Whom (distribution).\n5. Economic Systems: Capitalist (price mechanism), Socialist (central planning), Mixed (India).\n6. Epistemic Distinction: Positive (testable facts) vs Normative (value judgments).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Why is the Production Possibility Frontier (PPF) typically concave (bowed outwards) to the origin?',
        options: [
          'Because resources are perfectly homogeneous and adaptable across all production sectors',
          'Because the Marginal Rate of Transformation (MRT) increases as more of one good is produced',
          'Because total economic output decreases as technological advancement takes place',
          'Because consumer demand decreases as commodity prices rise',
        ],
        correctAnswer: 'Because the Marginal Rate of Transformation (MRT) increases as more of one good is produced',
        explanation: 'The PPF is concave to the origin because resources are not equally efficient in producing all goods. Transferring specialized resources from one sector to another results in an increasing Marginal Rate of Transformation (MRT = ΔY/ΔX), meaning progressively larger quantities of good Y must be sacrificed for each additional unit of good X.',
        trapExplanation: 'If resources were perfectly interchangeable, the PPF would be a downward-sloping straight line with constant opportunity cost.',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },

  {
    id: 'CON-ECO-02',
    topicOrder: 27,
    topicSlug: 'foundations-of-economics-and-national-income',
    topicTitle: 'Foundations of Economics & National Income Accounting',
    topicDescription: 'Classification of Goods: Public, Private, Common Resources & Club Goods.',
    slug: 'classification-of-goods-public-private-common-resources-club-goods',
    title: 'Classification of Goods: Public, Private, Common Resources & Club Goods',
    shortDefinition: 'Typology of economic goods based on the dual criteria of Excludability (whether a person can be prevented from consuming the good) and Rivalry (whether one person\'s consumption diminishes another\'s): Private Goods, Public Goods (non-rival, non-excludable), Common Pool Resources (rival, non-excludable — Tragedy of the Commons), and Club Goods / Natural Monopolies (excludable, non-rival).',
    difficulty: 'BEGINNER',
    claims: [
      {
        id: 'CLM-ECO-02-01',
        statement: 'Economic goods are classified along a 2x2 matrix defined by Excludability (can non-payers be prevented from using it?) and Rivalry in consumption (does one person\'s use reduce availability for others?).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Paul Samuelson, The Pure Theory of Public Expenditure (1954); Richard Musgrave, Public Finance in Theory and Practice',
        excerpt: 'Goods are categorized by excludability and rivalrousness in consumption.',
      },
      {
        id: 'CLM-ECO-02-02',
        statement: 'Pure Public Goods are both non-excludable and non-rivalrous (e.g. National Defense, Lighthouses, Street Lighting); because private markets suffer from the Free-Rider Problem, public goods are systematically underprovided by market mechanisms and must be financed via taxation.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Samuelson (1954); Mancur Olson, The Logic of Collective Action (1965)',
        excerpt: 'Non-excludability causes the free-rider problem, leading to market failure for pure public goods.',
      },
      {
        id: 'CLM-ECO-02-03',
        statement: 'Common Pool Resources are rivalrous but non-excludable (e.g. Oceanic Fisheries, Groundwater Aquifers, Community Pastures), making them vulnerable to over-exploitation known as the Tragedy of the Commons (Garrett Hardin, 1968), remediated either by state regulation, private property rights, or community governance institutions (Elinor Ostrom, 1990).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Garrett Hardin, The Tragedy of the Commons (Science, 1968); Elinor Ostrom, Governing the Commons (1990 Nobel Prize)',
        excerpt: 'Common resources suffer from the Tragedy of the Commons due to non-excludability and rivalry.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Why Markets Cannot Price Everything: Excludability & Rivalry',
        body: 'Competitive markets function effectively when two conditions hold: sellers can exclude non-paying customers from receiving the product (**Excludability**), and one customer\'s consumption leaves less product for others (**Rivalry**).\n\nWhen either of these characteristics breaks down, market prices fail to allocate resources efficiently, causing market failure. If a private company builds a flood defense levee or streetlight, it cannot prevent non-paying citizens from benefiting, leading individuals to "free ride" on others\' payments.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The 2x2 Economic Goods Classification Matrix',
        body: 'All goods and services in an economy map into four distinct quadrants:\n\n| | **Rivalrous in Consumption** | **Non-Rivalrous in Consumption** |\n| :--- | :--- | :--- |\n| **Excludable** | **1. PRIVATE GOODS**<br>• Apples, clothing, personal cars, private housing.<br>• *Market Mechanism:* Pure competitive market allocation. | **2. CLUB GOODS (Toll Goods)**<br>• Subscription streaming (Netflix), toll roads without congestion, golf clubs.<br>• *Market Mechanism:* Natural monopoly / price discrimination. |\n| **Non-Excludable** | **3. COMMON POOL RESOURCES**<br>• Groundwater aquifers, ocean fisheries, grazing pastures, clean air.<br>• *Market Failure:* Over-extraction (**Tragedy of the Commons**). | **4. PURE PUBLIC GOODS**<br>• National defense, law and order, streetlights, lighthouse beams.<br>• *Market Failure:* **Free-Rider Problem** (State must finance via taxes). |',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Overcoming Market Failures: Hardin vs Elinor Ostrom',
        body: '### 1. The Free-Rider Problem (Public Goods)\nBecause public goods are non-excludable, individuals have no rational economic incentive to pay voluntary prices, hoping others will pay while they consume for free. Therefore, private markets fail to supply them, requiring the **State** to levy compulsory taxes and provide them directly.\n\n### 2. The Tragedy of the Commons & Ostrom\'s Institutional Solution\nGarrett Hardin (1968) posited that rational individuals exploiting a common pasture will each add more cattle until the pasture is destroyed.\n* **Traditional Remedies:** Complete nationalization (state control) or privatization (creating individual property titles).\n* **Elinor Ostrom (Nobel Laureate, 1990):** Demonstrated empirically that local communities across the world manage common pool resources (e.g., Swiss mountain pastures, Japanese irrigation guilds, Indian forest protection committees) through self-governing collective rules, clear boundaries, graduated sanctions, and low-cost conflict resolution without state coercion.',
        order: 3,
      },
      {
        type: 'COMPARISON',
        title: 'Merit Goods vs Demerit Goods vs Public Goods',
        body: '| Category | Economic Definition | Consumer Valuation | Policy Intervention |\n| :--- | :--- | :--- | :--- |\n| **Merit Goods** | Excludable goods that generate positive externalities; society believes everyone should have them regardless of ability to pay. | Consumers undervalue due to imperfect information / myopia (e.g. Primary education, basic healthcare, vaccines). | Subsidized provision, universal mandates (RTE Act, Ayushman Bharat). |\n| **Demerit Goods** | Goods that generate negative externalities and private over-consumption. | Consumers overvalue due to addiction/myopia (e.g. Tobacco, alcohol, gambling). | Heavy Pigouvian taxation (sin taxes, GST cess), advertising bans. |\n| **Public Goods** | Non-excludable and non-rival goods. | Impossible for markets to charge individual prices. | Full budgetary financing and public administration. |',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Goods Typology',
        body: '1. **Public Good vs Public Sector Provision:** A "public good" is defined by its *economic characteristics* (non-rival, non-excludable), NOT by whether the government produces it! When the government produces steel (SAIL) or runs an airline, steel and flights are **Private Goods** produced by the public sector.\n2. **Toll Roads & Congestion:** An uncrowded toll highway is a **Club Good** (excludable via toll booth, non-rival). When traffic jams occur during peak hours, it becomes a **Private Good** (excludable and rivalrous).\n3. **Lighthouses & Coase:** Ronald Coase demonstrated that historic English lighthouses were financed via port dues collected at private harbors, proving that creative institutional design can sometimes solve public good funding.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Government Budgeting, Public Finance, Market Failures & Environmental Economics',
        notes: 'Tested in Prelims (goods matrix, free rider problem) and Mains (Ostrom commons management).',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Paper 1 (IE&IFS): Market Failures, Public vs Private Goods',
        notes: 'Tests definition of non-rivalry, non-excludability, and merit goods.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Goods Matrix: Rival + Excludable = Private (Apples). Non-Rival + Excludable = Club (Netflix). Rival + Non-Excludable = Common Resource (Fisheries -> Tragedy of Commons). Non-Rival + Non-Excludable = Public Good (Defense -> Free Rider Problem). Elinor Ostrom (1990) = Community self-governance of commons. Merit Goods = Positive externalities (Education, Vaccines); Demerit = Negative externalities (Tobacco).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Economic goods are categorized by excludability and rivalry. Private goods are rival and excludable. Public goods (non-rival, non-excludable) cause free-riding, requiring tax-financed state provision. Common pool resources (rival, non-excludable) risk the Tragedy of the Commons, remediated via state rules, private property, or Ostrom community governance. Merit goods generate positive externalities and are subsidized, while demerit goods face sin taxes.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. 2x2 Matrix: Excludability (pricing feasibility) vs Rivalry (consumption capacity).\n2. Four Quadrants: Private Goods (Rival/Excludable), Club Goods (Non-Rival/Excludable), Common Pool Resources (Rival/Non-Excludable), Public Goods (Non-Rival/Non-Excludable).\n3. Market Failures: Free-Rider Problem (Public Goods -> under-provision); Tragedy of the Commons (Hardin 1968 -> over-depletion).\n4. Institutional Solutions: Ostrom 8 design principles for CPRs.\n5. Policy Categories: Merit Goods (subsidized/mandated) vs Demerit Goods (Pigouvian sin taxes).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following correctly pairs an economic good category with its defining structural characteristics?',
        options: [
          'Public Good — Excludable and Rivalrous in consumption',
          'Common Pool Resource — Non-excludable and Rivalrous in consumption',
          'Club Good — Non-excludable and Non-rivalrous in consumption',
          'Private Good — Non-excludable and Rivalrous in consumption',
        ],
        correctAnswer: 'Common Pool Resource — Non-excludable and Rivalrous in consumption',
        explanation: 'A Common Pool Resource (e.g. oceanic fisheries, groundwater) is non-excludable (it is difficult or prohibitively expensive to prevent non-payers from accessing it) but rivalrous in consumption (each fish caught or gallon of water pumped directly reduces the amount available to others).',
        trapExplanation: 'Public goods are both non-excludable AND non-rival. Club goods are excludable and non-rival.',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },

  {
    id: 'CON-ECO-03',
    topicOrder: 27,
    topicSlug: 'foundations-of-economics-and-national-income',
    topicTitle: 'Foundations of Economics & National Income Accounting',
    topicDescription: 'Circular Flow of Income: Two, Three, and Four-Sector Models, Factor Payments, Injections & Leakages.',
    slug: 'circular-flow-of-income-factor-payments-injections-and-leakages',
    title: 'Circular Flow of Income, Factor Payments, Injections & Leakages',
    shortDefinition: 'The macroeconomic framework describing the continuous circular movement of money, goods, services, and factor payments across households, production enterprises, government, and the external sector: the identity of National Output = National Income = National Expenditure, factor payments (Rent, Wages, Interest, Profit), and equilibrium dynamics of Injections (Investment, Government Spending, Exports) vs Leakages (Savings, Taxes, Imports).',
    difficulty: 'BEGINNER',
    claims: [
      {
        id: 'CLM-ECO-03-01',
        statement: 'In macroeconomic accounting, the Circular Flow of Income establishes the fundamental triple identity: Total National Value Added (Output) ≡ Total Factor Incomes Generated (Income) ≡ Total Final Spending on Goods and Services (Expenditure).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Simon Kuznets (National Income and Capital Formation, 1937); NCERT Class 12 Macroeconomics, Ch 2',
        excerpt: 'Production generates income, income generates expenditure, expenditure creates production demand: Output ≡ Income ≡ Expenditure.',
      },
      {
        id: 'CLM-ECO-03-02',
        statement: 'The four factors of production earn four distinct factor payments from firms: Land earns Rent, Labor earns Wages, Capital earns Interest, and Enterprise/Entrepreneurship earns Profit.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Alfred Marshall, Principles of Economics; NCERT Class 12 Macroeconomics, Ch 2',
        excerpt: 'Factor payments = Rent + Wages + Interest + Profit.',
      },
      {
        id: 'CLM-ECO-03-03',
        statement: 'In an open four-sector macroeconomy, macroeconomic equilibrium requires Total Injections (J = I + G + X) to equal Total Leakages (W = S + T + M); if Injections exceed Leakages, aggregate national income expands, whereas if Leakages exceed Injections, national income contracts.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'John Maynard Keynes, The General Theory of Employment, Interest and Money (1936)',
        excerpt: 'Equilibrium condition: Injections (I + G + X) = Leakages (S + T + M).',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Continuous Loop of Economic Activity',
        body: 'Every transaction in an economy has two sides: one person\'s expenditure is inevitably another person\'s income. When you purchase a train ticket from Indian Railways, that payment becomes revenue for the enterprise, which is subsequently distributed as wages to train drivers, interest to bondholders, rent to land authorities, and retained profit for capital expansion.\n\nThis continuous circular interdependence forms the **Circular Flow of Income**, linking household factor supply with firm goods production.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The Multi-Sector Circular Flow Architecture',
        body: '### 1. Two-Sector Model (Households & Firms)\n* **Real Flow (Physical):** Households provide **Factor Services** (Land, Labor, Capital, Enterprise) to Firms $\\rightarrow$ Firms provide **Final Goods & Services** to Households.\n* **Money Flow (Financial):** Firms pay **Factor Incomes** (Rent, Wages, Interest, Profit) to Households $\\rightarrow$ Households spend on **Consumption Expenditure ($C$)**.\n\n### 2. Three-Sector Model (Adding Government)\n* **Government Injections ($G$):** Public purchases of goods, civil infrastructure spending, government salaries.\n* **Government Leakages ($T$):** Direct and indirect taxes collected from households and firms.\n* **Transfer Payments ($TR$):** Pensions, scholarships, subsidies (transfers income without corresponding productive output).\n\n### 3. Four-Sector Open Economy Model (Adding External Sector)\n* **External Injections ($X$):** Export earnings from foreign buyers.\n* **External Leakages ($M$):** Import expenditures sent to foreign producers.',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Injections vs Leakages & Macroeconomic Equilibrium',
        body: 'Macroeconomic equilibrium across the financial, fiscal, and external sectors is defined by the balance between Injections and Leakages:\n\n$$\\mathbf{\\text{Total Injections } (J) = \\text{Total Leakages } (W)}$$\n$$\\mathbf{I + G + X = S + T + M}$$\n\nRearranging into the fundamental macro-financial balance:\n\n$$\\mathbf{(S - I) + (T - G) = (X - M)}$$\n\n* **$(S - I)$:** Private Savings Balance (Household/Corporate net savings surplus).\n* **$(T - G)$:** Fiscal Balance (Government budget surplus or deficit).\n* **$(X - M)$:** Current Account / Trade Balance ($-\\text{CAD}$).\n\n*Insight:* If government runs a fiscal deficit ($G > T$) and private savings equal domestic investment ($S = I$), the economy **must run a current account deficit ($M > X$)**, proving the famous **Twin Deficit Hypothesis**.',
        order: 3,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'Factor Payments vs Transfer Payments (Accounting Distinction)',
        body: '| Parameter | Factor Payments | Transfer Payments |\n| :--- | :--- | :--- |\n| **Definition** | Payments made to owners of production factors in exchange for productive services rendered. | Unilateral/unrequited payments made without any corresponding goods or services delivered in return. |\n| **Components** | Rent, Wages, Interest, Operating Surplus/Profit. | Old-age pensions, unemployment allowances, disaster relief grants, student scholarships, DBT cash transfers. |\n| **National Income Inclusion** | **INCLUDED** in National Income ($NNP_{FC}$) because they reflect real production. | **EXCLUDED** from National Income ($NNP_{FC}$) to prevent double counting (though included in Personal Disposable Income). |',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Circular Flow Accounting',
        body: '1. **Retirement Pension vs Old-Age Social Pension:** *Retirement pensions* earned by retired employees are **deferred wages (Factor Payments)** and ARE included in National Income. *Old-age social pensions* (e.g. NSAP) are non-contributory welfare **Transfer Payments** and are EXCLUDED from National Income.\n2. **Inventory Accumulation:** Unsold goods produced by firms in a year are accounted for as **Intended/Unintended Capital Formation (Investment $I$)**, ensuring Output identically matches Income.\n3. **Intermediate Consumption Trap:** Expenditure by firms on raw materials is Intermediate Consumption, NOT final expenditure. Only **Final Consumption Expenditure** is counted in GDP.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Macroeconomics, Twin Deficits, National Accounting',
        notes: 'Covers Injections vs Leakages, Twin Deficit identity, and factor vs transfer payments.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Paper 1 (IE&IFS): Macroeconomic Flows & National Income',
        notes: 'Direct MCQs on 4 factors of production, leakages (S, T, M), and transfer payment rules.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Circular Flow: Output ≡ Income ≡ Expenditure. Factors = Land (Rent), Labor (Wages), Capital (Interest), Enterprise (Profit). Injections = I + G + X. Leakages = S + T + M. Equilibrium: I + G + X = S + T + M. Twin Deficits: (S - I) + (T - G) = (X - M). Factor Payments INCLUDED in National Income; Transfer Payments (DBT, scholarships) EXCLUDED from National Income.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'The Circular Flow models the triple identity of production, income, and expenditure. Production creates factor incomes (Rent, Wages, Interest, Profit). Injections (Investment, Government Spending, Exports) expand aggregate income; Leakages (Savings, Taxes, Imports) drain income. National Income includes only Factor Payments and excludes unrequited Transfer Payments like social welfare pensions.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Real vs Money Flow: Physical factor services/goods vs financial income/expenditure.\n2. Injections (J): I (Capital formation) + G (Govt consumption) + X (Foreign export revenue).\n3. Leakages (W): S (Private savings) + T (Taxation) + M (Import expenditure).\n4. Macroeconomic Identity: (S - I) + (T - G) = (X - M) explaining twin fiscal and current account deficits.\n5. Accounting Rules: Factor payment = reward for productive service (included in GDP). Transfer payment = unilateral redistribution (excluded from GDP).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following items is treated as a FACTOR PAYMENT and therefore included in the estimation of National Income?',
        options: [
          'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) cash transfer to farmers',
          'Old-age welfare pension granted under the National Social Assistance Programme',
          'Employer contribution to employee provident fund and retirement pension',
          'Scholarships awarded to university students based on merit',
        ],
        correctAnswer: 'Employer contribution to employee provident fund and retirement pension',
        explanation: 'Employer contributions to provident funds and employee retirement pensions constitute deferred wages for factor services rendered (labor), making them compensation of employees (Factor Payment) included in National Income. PM-KISAN, old-age welfare pensions, and scholarships are unilateral transfer payments that do not reflect current production.',
        trapExplanation: 'Candidates confuse retirement pensions (earned deferred compensation for past labor) with non-contributory old-age social welfare pensions (unilateral transfer).',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },

  {
    id: 'CON-ECO-04',
    topicOrder: 27,
    topicSlug: 'foundations-of-economics-and-national-income',
    topicTitle: 'Foundations of Economics & National Income Accounting',
    topicDescription: 'National Income Aggregates Ladder: GDP, NDP, GNP, NNP & Transition between Factor Cost, Basic Prices, and Market Prices.',
    slug: 'national-income-aggregates-gdp-ndp-gnp-nnp-factor-cost-basic-prices-market-prices',
    title: 'National Income Aggregates Ladder: GDP, NDP, GNP, NNP & Factor Cost vs Basic Prices vs Market Prices',
    shortDefinition: 'The mathematical step-ladder connecting all eight national income aggregates: Gross vs Net (Depreciation / Consumption of Fixed Capital), Domestic vs National (Net Factor Income from Abroad - NFIA), and the modern 2015 SNA methodology linking Factor Cost, Basic Prices (Production Taxes/Subsidies), and Market Prices (Product Taxes/Subsidies), establishing NNP at Factor Cost as canonical National Income.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-04-01',
        statement: 'The transition from Gross aggregates to Net aggregates across all national accounts is defined by deducting Depreciation (Consumption of Fixed Capital): Net Aggregate = Gross Aggregate - Depreciation.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'System of National Accounts (SNA 2008); Ministry of Statistics and Programme Implementation (MoSPI)',
        excerpt: 'Net = Gross - Depreciation (Consumption of Fixed Capital).',
      },
      {
        id: 'CLM-ECO-04-02',
        statement: 'The transition from Domestic aggregates to National aggregates is defined by adding Net Factor Income from Abroad (NFIA): National Aggregate = Domestic Aggregate + NFIA (where NFIA = Factor income earned by residents abroad - Factor income paid to non-residents within domestic territory).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'MoSPI National Accounts Statistics; NCERT Class 12 Macroeconomics, Ch 2',
        excerpt: 'National = Domestic + NFIA.',
      },
      {
        id: 'CLM-ECO-04-03',
        statement: 'Under India\'s revised National Accounts series (base year 2011-12, adopted January 2015 conforming to SNA 2008), Headline GDP is reported as GDP at Market Prices, connected via: GVA at Basic Prices = GVA at Factor Cost + (Production Taxes - Production Subsidies); GDP at Market Prices = GVA at Basic Prices + (Product Taxes - Product Subsidies).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Central Statistics Office (CSO/MoSPI) Press Release on Revision of Base Year (Jan 2015); RBI Handbook of Statistics',
        excerpt: 'GDP at Market Prices = GVA at Basic Prices + Net Product Taxes. GVA at Basic Prices = GVA at Factor Cost + Net Production Taxes.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Navigating the 8 Macroeconomic Aggregates',
        body: 'Macroeconomic news frequently interchanges GDP, GNP, National Income, and GVA. While related, each aggregate measures a distinct spatial, ownership, or valuation boundary of an economy.\n\n* **Gross Domestic Product (GDP):** Measures everything produced **within India\'s geographic borders**, regardless of whether the producer is an Indian citizen or a foreign MNC.\n* **Gross National Product (GNP):** Measures everything produced by **Indian citizens and enterprises worldwide**, excluding output produced by foreign citizens inside India.\n* **National Income (Strict Economic Definition):** $\\text{NNP}_{\\text{FC}}$ (Net National Product at Factor Cost).',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The 3 Master Mathematical Conversion Rules',
        body: 'Every national income aggregate is built using three binary conversion switches:\n\n$$\\begin{aligned}\n\\mathbf{1.\\; \\text{Gross} \\leftrightarrow \\text{Net:}} & \\quad \\text{Net} = \\text{Gross} - \\text{Depreciation (Consumption of Fixed Capital)} \\\\[6pt]\n\\mathbf{2.\\; \\text{Domestic} \\leftrightarrow \\text{National:}} & \\quad \\text{National} = \\text{Domestic} + \\text{NFIA} \\\\[6pt]\n\\mathbf{3.\\; \\text{Factor Cost} \\leftrightarrow \\text{Market Price:}} & \\quad \\text{Market Price} = \\text{Factor Cost} + \\text{Net Indirect Taxes (NIT)}\n\\end{aligned}$$\n\nWhere:\n* **$\\text{NFIA}$:** Net Factor Income from Abroad = (Factor Income earned by Indian residents abroad) $-$ (Factor Income earned by foreign residents in India).\n* **$\\text{NIT}$:** Net Indirect Taxes = Indirect Taxes $-$ Subsidies.',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'The 2015 SNA Methodology: Production vs Product Taxes',
        body: 'In January 2015, MoSPI revised India\'s national accounting to align with the **UN System of National Accounts (SNA 2008)**, introducing the intermediary concept of **Basic Prices**:\n\n```mermaid\ngraph TD\n    FC["GVA at Factor Cost (Pure Factory Cost)"] -->|"+ Net Production Taxes (Land revenue, stamp duty, municipal tax - subsidies)"| BP["GVA at Basic Prices (Producer Price)"]\n    BP -->|"+ Net Product Taxes (GST, customs, excise - product subsidies)"| MP["GDP at Market Prices (Headline GDP)"]\n```\n\n### Production Taxes/Subsidies vs Product Taxes/Subsidies\n* **Production Taxes/Subsidies:** Independent of physical production volume (e.g. Land revenue, stamp duties, professional tax, factory license fees; production subsidies like subsidies to small-scale units).\n* **Product Taxes/Subsidies:** Levied strictly per unit of output (e.g. GST, Central Excise on petroleum, Customs duty; product subsidies like food, fertilizer, and LPG subsidies).',
        order: 3,
      },
      {
        type: 'COMPARISON',
        title: 'The 8 National Income Aggregates Matrix',
        body: '| Aggregate | Full Name | Formal Conversion Formula | Primary Economic Interpretation |\n| :--- | :--- | :--- | :--- |\n| **$\\text{GDP}_{\\text{MP}}$** | Gross Domestic Product at Market Price | $\\sum \\text{GVA}_{\\text{BP}} + \\text{Net Product Taxes}$ | **Headline GDP of India**; total domestic market output. |\n| **$\\text{NDP}_{\\text{MP}}$** | Net Domestic Product at Market Price | $\\text{GDP}_{\\text{MP}} - \\text{Depreciation}$ | Output available after accounting for capital wear and tear. |\n| **$\\text{GNP}_{\\text{MP}}$** | Gross National Product at Market Price | $\\text{GDP}_{\\text{MP}} + \\text{NFIA}$ | Total market income generated by Indian nationals globally. |\n| **$\\text{NNP}_{\\text{MP}}$** | Net National Product at Market Price | $\\text{GNP}_{\\text{MP}} - \\text{Depreciation}$ | Net market income belonging to national residents. |\n| **$\\text{GDP}_{\\text{FC}}$** | Gross Domestic Product at Factor Cost | $\\text{GDP}_{\\text{MP}} - \\text{NIT}$ | Total factory-gate cost of domestic output (pre-2015 headline). |\n| **$\\text{NDP}_{\\text{FC}}$** | Net Domestic Product at Factor Cost | $\\text{NDP}_{\\text{MP}} - \\text{NIT}$ | Total factor income generated within domestic boundary. |\n| **$\\text{GNP}_{\\text{FC}}$** | Gross National Product at Factor Cost | $\\text{GNP}_{\\text{MP}} - \\text{NIT}$ | Total factor earnings of citizens before depreciation. |\n| **$\\text{NNP}_{\\text{FC}}$** | Net National Product at Factor Cost | $\\text{NNP}_{\\text{MP}} - \\text{NIT}$ | **CANONICAL NATIONAL INCOME** of India. |',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in National Income Calculations',
        body: '1. **Remittances Trap (Inward vs Factor Income):** Inward remittances sent by Indian workers abroad (e.g., non-resident workers in the Gulf) are **Current Private Transfers**, NOT Factor Incomes! They are recorded in the Balance of Payments Current Account and contribute to *Gross National Disposable Income (GNDI)*, but are EXCLUDED from NFIA and GNP.\n2. **India\'s Historical GNP vs GDP:** For India, **GNP is consistently smaller than GDP** ($\text{GNP} < \text{GDP}$) because Net Factor Income from Abroad (NFIA) is negative (income outflows to foreign investors on FDI/loans exceed factor earnings of Indians abroad).\n3. **Headline Growth Metric:** Pre-2015 headline GDP growth was measured by $\text{GDP}_{\text{FC}}$; post-2015 headline growth is officially measured by **$\text{GDP}_{\text{MP}}$**.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: National Income Accounting, 2015 Base Year Revision, GVA vs GDP',
        notes: 'Frequent Prelims trap on Production vs Product taxes and NFIA vs remittances.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module A - National Income Concepts & Computation',
        notes: 'Numerical problems converting GDP_MP to NNP_FC using depreciation and NIT.',
      },
      {
        examCode: 'rpsc-ras',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Economics: National Income Aggregates and Methods of Calculation',
        notes: 'Direct conceptual questions in Prelims & Mains Paper I.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Net = Gross - Depreciation. National = Domestic + NFIA. Market Price = Factor Cost + Net Indirect Taxes (NIT). Canonical National Income = NNP at Factor Cost. 2015 SNA Reform: Headline GDP = GDP at Market Prices. GVA at Basic Prices = GVA_FC + Net Production Taxes. GDP_MP = GVA_BP + Net Product Taxes. India GNP < GDP because NFIA is negative.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'National income aggregates are connected via three bridge formulas: Depreciation bridges Gross to Net; NFIA bridges Domestic to National; Net Indirect Taxes bridge Factor Cost to Market Price. Canonical National Income is NNP_FC. Since the 2015 base revision (2011-12), India reports headline GDP at Market Prices derived from GVA at Basic Prices plus Net Product Taxes.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Conversion Operators:\n   - Gross - Dep = Net\n   - Domestic + NFIA = National\n   - Factor Cost + NIT = Market Price\n2. Modern 2015 SNA Value Chain:\n   GVA_FC + (Production Taxes - Subsidies) = GVA at Basic Prices.\n   GVA_BP + (Product Taxes - Subsidies) = GDP at Market Prices.\n3. National Income Identity: National Income ≡ NNP_FC.\n4. Foreign Factor Earnings vs Transfers: Remittances are private transfers (GNDI), not factor income (NFIA).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under India\'s revised National Accounts methodology (2011-12 base series), what is added to "GVA at Basic Prices" to arrive at "GDP at Market Prices"?',
        options: [
          'Net Factor Income from Abroad (NFIA)',
          'Net Product Taxes (Product Taxes minus Product Subsidies)',
          'Net Production Taxes (Production Taxes minus Production Subsidies)',
          'Consumption of Fixed Capital (Depreciation)',
        ],
        correctAnswer: 'Net Product Taxes (Product Taxes minus Product Subsidies)',
        explanation: 'Under the 2015 revision (SNA 2008), GVA at Basic Prices is adjusted by adding Net Product Taxes (per-unit taxes like GST and excise duty minus per-unit product subsidies on food/fertilizers) to compute GDP at Market Prices.',
        trapExplanation: 'Net Production Taxes are added to GVA at Factor Cost to arrive at GVA at Basic Prices, not to go from Basic Prices to Market Prices.',
        difficulty: 'HARD',
        isPYQ: false,
      },
    ],
  },

  {
    id: 'CON-ECO-05',
    topicOrder: 27,
    topicSlug: 'foundations-of-economics-and-national-income',
    topicTitle: 'Foundations of Economics & National Income Accounting',
    topicDescription: 'Methods of National Income Calculation: Production (GVA), Income & Expenditure Approaches.',
    slug: 'methods-of-national-income-calculation-production-income-expenditure-approaches',
    title: 'Methods of National Income Calculation: Production (GVA), Income & Expenditure Approaches',
    shortDefinition: 'The three independent computational approaches to measuring national income: the Production Method (Gross Value Added = Value of Output minus Intermediate Consumption, avoiding double counting via value-added summation), the Income Method (summing factor rewards: Compensation of Employees, Operating Surplus, and Mixed Income of the Self-Employed), and the Expenditure Method ($Y = C + I + G + (X - M)$).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-05-01',
        statement: 'Under the Production (Value Added) Method, Gross Value Added ($GVA$) equals the Value of Gross Output minus Intermediate Consumption; summing GVA across all producing enterprises avoids the error of double counting.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'MoSPI National Accounts Statistics; NCERT Class 12 Macroeconomics, Ch 2',
        excerpt: 'GVA = Value of Output - Intermediate Consumption.',
      },
      {
        id: 'CLM-ECO-05-02',
        statement: 'Under the Income Method, Domestic Factor Income ($NDP_{FC}$) is the sum of Compensation of Employees (wages/salaries/benefits), Operating Surplus (rent + interest + corporate profits), and Mixed Income of the Self-Employed (unincorporated household enterprises where labor and capital rewards cannot be disentangled).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'System of National Accounts 2008; MoSPI Methodology of National Accounts',
        excerpt: 'NDP_FC = Compensation of Employees + Operating Surplus + Mixed Income.',
      },
      {
        id: 'CLM-ECO-05-03',
        statement: 'Under the Expenditure Method, GDP at Market Prices equals Private Final Consumption Expenditure ($C$) + Government Final Consumption Expenditure ($G$) + Gross Capital Formation ($I$, comprising Gross Fixed Capital Formation, Change in Stocks, and Valuables) + Net Exports ($X - M$).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Keynesian Macroeconomic Accounting; MoSPI National Accounts Statistics',
        excerpt: 'GDP_MP = C + I + G + (X - M). In India, Private Final Consumption Expenditure (PFCE) constitutes the largest component (~58-60% of GDP).',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Three Windows into the Same National Reality',
        body: 'Because every rupee of output produced generates a rupee of factor income, which in turn is spent on purchasing final goods, an economy can be measured at three distinct stages:\n\n1. **At the Factory / Farm Gate:** Production Method (Value of goods/services produced).\n2. **In the Paychecks & Balance Sheets:** Income Method (Income earned by factors of production).\n3. **At the Cash Registers & Portals:** Expenditure Method (Total final purchases in the economy).\n\nIn theoretical equilibrium, all three methods yield an identical numerical value for GDP.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The Production (Value Added) Method & Double Counting',
        body: '### The Problem of Double Counting\nIf a farmer sells wheat for \\$100 to a miller, the miller sells flour for \\$150 to a baker, and the baker sells bread for \\$220 to a consumer, summing the raw transaction values ($100 + 150 + 220 = \\$470$) creates massive double counting.\n\n### The Value Added Solution\n$$\\mathbf{\\text{Gross Value Added (GVA)} = \\text{Value of Output} - \\text{Intermediate Consumption}}$$\n\n* **Farmer:** Value of Output (\\$100) $-$ Intermediate Inputs (\\$0) = **\\$100**\n* **Miller:** Value of Output (\\$150) $-$ Wheat (\\$100) = **\\$50**\n* **Baker:** Value of Output (\\$220) $-$ Flour (\\$150) = **\\$70**\n* **Total GVA across Economy:** \\$100 + \\$50 + \\$70 = **\\$220** (identically equal to final bread price).',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'The Income & Expenditure Methods Detailed',
        body: '### 1. The Income Method ($NDP_{\\text{FC}}$)\nSums factor rewards generated in domestic economic territory:\n\n$$\\mathbf{\\text{NDP}_{\\text{FC}} = \\text{Compensation of Employees (COE)} + \\text{Operating Surplus (OS)} + \\text{Mixed Income (MI)}}$$\n\n* **COE:** Wages, salaries in cash/kind, employer social security contributions.\n* **Operating Surplus:** Rent + Royalties + Net Interest + Corporate Profits (Dividends, Corporate Tax, Retained Earnings).\n* **Mixed Income:** Self-employed professionals, farmers, unorganized shopkeepers where labor and capital inputs belong to the same individual (a huge component in India\'s informal economy).\n\n### 2. The Expenditure Method ($GDP_{\\text{MP}}$)\nSums all final spending on domestic output:\n\n$$\\mathbf{\\text{GDP}_{\\text{MP}} = C + G + I + (X - M)}$$\n\n* **$C$ (PFCE):** Private Final Consumption Expenditure (~58–60% of Indian GDP — consumption driver).\n* **$G$ (GFCE):** Government Final Consumption Expenditure (~10–12% of GDP).\n* **$I$ (GCF):** Gross Capital Formation / Investment (~30–32% of GDP, including Gross Fixed Capital Formation and Inventory change).\n* **$(X - M)$:** Net Exports (typically negative for India due to merchandise trade deficit).',
        order: 3,
      },
      {
        type: 'COMPARISON',
        title: 'Items Included vs Excluded from GDP Estimation',
        body: '| Transaction Type | Included in GDP? | Economic Rationale |\n| :--- | :--- | :--- |\n| **Second-hand car / home sales** | **EXCLUDED** | Output was already counted in the year of original production; resale is merely an asset transfer. |\n| **Brokerage / Commission on resale** | **INCLUDED** | Represents reward for a *new* productive intermediation service rendered in the current year. |\n| **Self-consumed agricultural output** | **INCLUDED** (Imputed Value) | Real agricultural output produced; farmer simply consumes it rather than marketing it. |\n| **Imputed rent of owner-occupied homes**| **INCLUDED** (Imputed Value) | Housing service is produced and enjoyed; estimated at prevailing market rental rates. |\n| **Unpaid household work (e.g. caregiving)**| **EXCLUDED** | Non-market activity lacking reliable market valuation transactions. |\n| **Illegal / Shadow economy earnings** | **EXCLUDED** | Excluded due to absence of official reporting and verification. |',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in National Income Estimation',
        body: '1. **Intermediate vs Final Good:** Whether a good is intermediate or final depends on its **end-use**, NOT the physical nature of the good! Sugar purchased by a household is a **Final Good ($C$)**; sugar purchased by a sweet maker is an **Intermediate Input**. Milk bought by a restaurant is an **Intermediate Good**; milk bought by a mother for her child is a **Final Good**.\n2. **Capital Gains Trap:** Capital gains from stock market trading (e.g., shares rising in price) are **EXCLUDED** from GDP because no new real physical output or productive capacity was created.\n3. **Mixed Income Significance:** Developing economies like India have a massive share of "Mixed Income" due to high informal self-employment, unlike advanced economies where almost all income divides neatly into formal corporate profit and salaried wages.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: National Income Methods, GCF/Investment Rate, Consumption Trends',
        notes: 'Covers Value-Added method, end-use classification, and imputed rent.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS): Methods of National Income Computation',
        notes: 'Direct numerical problems on GVA calculation, Operating Surplus, and PFCE.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: '3 National Income Methods: 1. Production (GVA = Output - Intermediate Consumption). 2. Income (NDP_FC = Compensation of Employees + Operating Surplus + Mixed Income). 3. Expenditure (GDP_MP = C + I + G + X - M). Second-hand goods EXCLUDED, but broker commission INCLUDED. Imputed rent & self-consumed farm output INCLUDED. Capital gains & unpaid housework EXCLUDED. PFCE is ~60% of Indian GDP.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'National income is computed via Production, Income, and Expenditure methods. Production method sums GVA across sectors to eliminate double counting. Income method sums compensation of employees, operating surplus (rent, interest, profit), and self-employed mixed income. Expenditure method aggregates private consumption (C), investment (I), government spending (G), and net exports (X - M). Imputed values of owner-occupied housing and self-consumed produce are included.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Production Approach: GVA = Gross Output Value - Intermediate Inputs. Avoids double counting.\n2. Income Approach: NDP_FC = COE (wages/salaries) + OS (Rent + Interest + Profit) + Mixed Income.\n3. Expenditure Approach: GDP_MP = PFCE (C) + GFCE (G) + GCF (I) + Net Exports (X - M).\n4. Inclusions: Imputed rent, self-consumed agricultural produce, brokerage on asset sales.\n5. Exclusions: Sale of second-hand goods, financial transfer payments, capital gains, unpaid domestic labor.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following transactions is INCLUDED in the calculation of India\'s Gross Domestic Product (GDP)?',
        options: [
          'Purchase of a 5-year-old residential apartment from an existing homeowner',
          'Brokerage commission paid to a real estate agent for facilitating an apartment sale',
          'Financial capital gains earned from selling equity shares on the National Stock Exchange',
          'Monthly pocket money transferred by a parent to a college student',
        ],
        correctAnswer: 'Brokerage commission paid to a real estate agent for facilitating an apartment sale',
        explanation: 'Brokerage and commission paid to real estate brokers represent payment for a new, current-year productive intermediation service and are included in GDP. The sale price of the second-hand apartment, capital gains on stocks, and pocket money transfers are asset/transfer transactions that produce no new output.',
        trapExplanation: 'While the second-hand asset itself is excluded, the professional service charges for facilitating the transaction are included.',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },

  {
    id: 'CON-ECO-06',
    topicOrder: 27,
    topicSlug: 'foundations-of-economics-and-national-income',
    topicTitle: 'Foundations of Economics & National Income Accounting',
    topicDescription: 'Real vs Nominal GDP, GDP Deflator, Base Year Revisions & Green GDP.',
    slug: 'real-vs-nominal-gdp-gdp-deflator-base-year-revisions-green-gdp',
    title: 'Real vs Nominal GDP, GDP Deflator, Base Year Revisions & Green GDP',
    shortDefinition: 'Distinguishing monetary expansion from physical output growth: Nominal GDP (current prices) vs Real GDP (constant base-year prices), the GDP Deflator as the most comprehensive implicit price index across all domestic goods and services ($\\text{GDP Deflator} = \\frac{\\text{Nominal GDP}}{\\text{Real GDP}} \\times 100$), principles of base-year revisions, and Green GDP adjusting national income for environmental degradation and natural capital depletion.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-06-01',
        statement: 'Nominal GDP measures output valued at current prevailing market prices, reflecting both physical production changes and price inflation; Real GDP values output at constant base-year prices, isolating genuine changes in physical volume of production.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'MoSPI National Accounts Statistics; NCERT Class 12 Macroeconomics, Ch 2',
        excerpt: 'Real GDP = (Nominal GDP / Price Index) * 100. Eliminates inflationary price distortion.',
      },
      {
        id: 'CLM-ECO-06-02',
        statement: 'The GDP Deflator is an implicit price index calculating overall inflation in an economy via the mathematical ratio: GDP Deflator = (Nominal GDP / Real GDP) * 100; unlike CPI or WPI which track a fixed representative consumer/wholesale basket, the GDP Deflator reflects the changing prices of all domestically produced goods and services.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Samuelson & Nordhaus, Economics; MoSPI National Accounts',
        excerpt: 'GDP Deflator covers all domestically produced goods/services with automatically updating weights (Paasche index property).',
      },
      {
        id: 'CLM-ECO-06-03',
        statement: 'Green GDP adjusts standard GDP by subtracting the monetary cost of environmental degradation, biodiversity loss, and natural resource depletion: Green GDP = Traditional GDP - Net Natural Resource Depletion - Environmental Degradation Costs.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Partha Dasgupta Committee Report on Green National Accounts in India (2013); UN System of Environmental-Economic Accounting (SEEA)',
        excerpt: 'Green GDP accounts for natural capital consumption.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Money Illusion: Why Nominal Numbers Mislead',
        body: 'Imagine an economy that produces 1,000 loaves of bread in Year 1 at \\$10 each, giving a GDP of \\$10,000. In Year 2, severe drought cuts production to 800 loaves, but hyperinflation drives the price to \\$20, producing a GDP of \\$16,000.\n\nIn nominal terms, GDP surged by 60%. In physical reality, citizens have 20% less food. To prevent this **money illusion**, economists deflate nominal output using constant base-year prices to measure **Real GDP**.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Real vs Nominal GDP & The GDP Deflator Formula',
        body: '### 1. Mathematical Formulas\n$$\\mathbf{\\text{Nominal GDP} = \\sum (P_{\\text{current}} \\times Q_{\\text{current}})}$$\n$$\\mathbf{\\text{Real GDP} = \\sum (P_{\\text{base}} \\times Q_{\\text{current}})}$$\n$$\\mathbf{\\text{GDP Deflator} = \\left( \\frac{\\text{Nominal GDP}}{\\text{Real GDP}} \\right) \\times 100}$$\n\n### 2. Numerical Example\n* If India\'s Nominal GDP in a financial year is ₹300 Lakh Crore and Real GDP (at 2011-12 prices) is ₹180 Lakh Crore:\n\n$$\\text{GDP Deflator} = \\left( \\frac{300}{180} \\right) \\times 100 = 166.67$$\n\n* **Interpretation:** The general price level of domestically produced goods has inflated by **66.67%** since the 2011-12 base year.',
        order: 2,
      },
      {
        type: 'COMPARISON',
        title: 'GDP Deflator vs Consumer Price Index (CPI)',
        body: '| Feature | GDP Deflator | Consumer Price Index (CPI) |\n| :--- | :--- | :--- |\n| **Coverage** | Covers **ALL domestically produced** goods and services (including capital machinery, missiles, infrastructure). | Covers only a **fixed representative basket** of consumer goods/services purchased by households. |\n| **Imported Goods** | **EXCLUDED** (only domestic output is deflated). | **INCLUDED** (if imported goods like petroleum or olive oil are consumed by households). |\n| **Weights** | **Variable weights** that adjust automatically each year as production patterns change (Paasche index). | **Fixed weights** assigned during the base-year survey (Laspeyres index). |\n| **Frequency** | Released **Quarterly** with National Accounts data. | Released **Monthly** by NSO (MoSPI). |',
        order: 3,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'Base Year Revisions & Green National Accounting',
        body: '### 1. Base Year Revision Principles in India\n* National accounts base years are updated periodically (typically every 5–10 years) by MoSPI to reflect structural changes, new industries (e.g. e-commerce, renewable energy, gig services), and improved statistical survey data.\n* Current base year is **2011-12** (shifted from 2004-05 in January 2015).\n\n### 2. Green GDP & The Dasgupta Framework\nTraditional GDP treats the depletion of natural resources (e.g. clear-cutting a forest or exhausting an aquifer) as positive economic output, while ignoring the destruction of natural capital.\n\n$$\\mathbf{\\text{Green GDP} = \\text{Traditional GDP} - \\text{Natural Capital Depletion} - \\text{Environmental Degradation Costs}}$$\n\n* **Partha Dasgupta Committee (2013):** Recommended institutionalizing Natural Capital Accounting under the UN SEEA framework to track ecosystem services and wealth depletion alongside GDP.',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Deflator & Price Indices',
        body: '1. **Import Price Trap:** A sharp spike in global crude oil prices immediately drives up **CPI** (since consumers buy petrol), but has **no direct positive effect on the GDP Deflator** (because oil is imported, not domestically produced).\n2. **Fixed vs Variable Basket:** The CPI suffers from *substitution bias* because its weights are fixed. The GDP Deflator avoids substitution bias because its weights update automatically with annual output changes.\n3. **Green GDP Status:** Green GDP is an analytical/accounting framework and is not yet the official legal headline metric for India\'s national budget or debt ceiling targets.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Macroeconomic Indicators, GDP Deflator vs CPI, Environmental Accounting',
        notes: 'Repeatedly tested in Prelims on the differences between GDP Deflator and CPI/WPI.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS): Real vs Nominal GDP & Price Deflators',
        notes: 'Direct numerical calculations of GDP Deflator and real growth rates.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Nominal GDP = Current prices (output + inflation). Real GDP = Base year constant prices (physical output only). GDP Deflator = (Nominal GDP / Real GDP) * 100. Deflator covers ALL domestic goods with variable weights; CPI covers fixed consumer basket including imports. Current base year = 2011-12. Green GDP = Traditional GDP minus Environmental Degradation & Resource Depletion (Dasgupta Committee).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Real GDP measures physical production volume using constant base-year prices, eliminating the money illusion of Nominal GDP. The GDP Deflator (Nominal GDP / Real GDP * 100) measures economy-wide domestic inflation across all goods with flexible weights, excluding imports. Green GDP deducts natural capital depletion and environmental damage from conventional GDP.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Nominal vs Real: P_current * Q_current vs P_base * Q_current.\n2. GDP Deflator Formula: (Nominal / Real) * 100.\n3. Deflator vs CPI: Deflator = all domestic output + variable weights - zero imports; CPI = fixed consumer basket + imported consumer goods.\n4. Base Year: 2011-12 series adopted in 2015.\n5. Green GDP: Adjusts for ecological depreciation (Dasgupta framework / UN SEEA).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'If the price of imported crude oil increases sharply while domestic production and domestic prices remain unchanged, how will this affect the GDP Deflator and the Consumer Price Index (CPI)?',
        options: [
          'Both the GDP Deflator and CPI will increase by the same magnitude',
          'The CPI will increase, but the GDP Deflator will not directly increase because the deflator includes only domestically produced goods',
          'The GDP Deflator will increase, but the CPI will remain unchanged because CPI tracks only manufactured food products',
          'Neither the GDP Deflator nor CPI will change because crude oil is an intermediate industrial input',
        ],
        correctAnswer: 'The CPI will increase, but the GDP Deflator will not directly increase because the deflator includes only domestically produced goods',
        explanation: 'The GDP Deflator reflects the prices of all goods and services produced domestically within the country and completely excludes imported items. The Consumer Price Index (CPI) reflects the prices of a representative consumption basket purchased by households, which includes petroleum products refined from imported crude oil. Therefore, imported oil price inflation raises CPI but does not directly enter the GDP Deflator.',
        trapExplanation: 'Candidates often assume all price indices capture imported goods equally, forgetting that GDP is strictly domestic production.',
        difficulty: 'HARD',
        isPYQ: false,
      },
    ],
  },

  // =========================================================================
  // TOPIC 28: MONEY, COMMERCIAL BANKING & FINANCIAL MARKETS ARCHITECTURE
  // =========================================================================
  {
    id: 'CON-ECO-07',
    topicOrder: 28,
    topicSlug: 'money-commercial-banking-and-financial-markets',
    topicTitle: 'Money, Commercial Banking & Financial Markets Architecture',
    topicDescription: 'Evolution of money, legal tender vs fiat money, money supply aggregates (M0–M4), fractional reserve banking, credit creation, money multiplier, and money market vs capital market instruments.',
    slug: 'evolution-of-money-functions-legal-tender-fiat-money-digital-payments-cbdc',
    title: 'Evolution of Money, Functions, Legal Tender, Fiat Money & Digital Payments / CBDC',
    shortDefinition: 'The economic and legal nature of money: the transition from commodity money and metallic coinage to paper fiat currency, the four core functions of money (Medium of Exchange, Unit of Account, Store of Value, Standard of Deferred Payment), the legal concept of Legal Tender (Limited vs Unlimited under the Coinage Act 2011 and RBI Act 1934 Section 26), and digital payment architecture including the Central Bank Digital Currency (e₹ / Digital Rupee).',
    difficulty: 'BEGINNER',
    claims: [
      {
        id: 'CLM-ECO-07-01',
        statement: 'Money serves four fundamental macroeconomic functions: Primary functions (Medium of Exchange overcoming the double coincidence of wants, and Unit of Account providing a common numeraire) and Secondary functions (Store of Value and Standard of Deferred Payment).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'William Stanley Jevons, Money and the Mechanism of Exchange (1875); NCERT Class 12 Macroeconomics, Ch 3',
        excerpt: 'Money is what money does: a medium, a measure, a standard, a store.',
      },
      {
        id: 'CLM-ECO-07-02',
        statement: 'Fiat Money is currency that has no intrinsic commodity value and is issued by government decree; Legal Tender is fiat money that cannot be legally refused by any creditor within the territory for settlement of debt, where banknotes under RBI Act 1934 Section 26(1) are Unlimited Legal Tender, while coins under the Coinage Act 2011 are Limited Legal Tender.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Reserve Bank of India Act, 1934 (Section 26); Coinage Act, 2011 (Section 6)',
        excerpt: 'Banknotes are unlimited legal tender at any place in India; coins are legal tender up to statutory limits (₹1,000 for coins >= ₹1).',
      },
      {
        id: 'CLM-ECO-07-03',
        statement: 'The Central Bank Digital Currency (CBDC / e₹) issued by the RBI under the amended Section 2 of the RBI Act 1934 (Finance Act 2022) is a sovereign digital fiat currency appearing as a direct sovereign liability on the RBI balance sheet, distinct from commercial bank deposits and decentralized cryptocurrencies.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Reserve Bank of India Concept Note on Central Bank Digital Currency (Oct 2022); Finance Act, 2022',
        excerpt: 'CBDC is legal tender issued by the central bank in digital form, representing a direct claim on the central bank.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'From Cowrie Shells to Sovereign Digital Tokens',
        body: 'In a primitive barter economy, exchange requires a **double coincidence of wants**—you must find someone who has what you desire and simultaneously wants what you possess. This friction imposes massive transaction costs.\n\nMoney emerged as an institutional technology to eliminate this search cost. Over millennia, money evolved from **Commodity Money** (cattle, salt, cowrie shells) to **Metallic Money** (gold and silver coins with intrinsic bullion value), to **Convertible Paper Money** (backed by gold reserves), to modern **Fiat Money** (backed entirely by sovereign law and social trust), and finally to cryptographic **Central Bank Digital Currencies (CBDC)**.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The Four Functions of Money & Gresham\'s Law',
        body: '### 1. The Four Functions\n* **Medium of Exchange:** Eliminates the barter double coincidence of wants; facilitates fluid trade.\n* **Unit of Account (Measure of Value):** Standard common denominator expressing the relative worth of millions of heterogeneous goods in a single pricing numeraire (Rupees, Dollars).\n* **Store of Value:** Enables purchasing power to be transferred from the present to the future (vulnerable to inflation).\n* **Standard of Deferred Payment:** Facilitates credit transactions, long-term loans, contracts, and future salary commitments.\n\n### 2. Gresham\'s Law\n> *"Bad money drives out good money from circulation when both are legal tender at fixed exchange parity."*\n\nIf two coins (e.g., pure silver coins and debased copper coins) have the same legal face value, people hoard the pure silver coins and spend only the debased coins, leaving only "bad money" in everyday circulation.',
        order: 2,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'Fiat Money vs Legal Tender vs Commercial Bank Deposits',
        body: '| Category | Legal & Economic Status | Extent of Acceptance | Statutory Backing |\n| :--- | :--- | :--- | :--- |\n| **Fiat Money** | Currency issued by government order/decree without backing by physical gold/silver. | Accepted by convention and trust. | Sovereign authority. |\n| **Legal Tender** | Fiat currency that **cannot be legally refused** in payment of a debt. | Mandatory legal acceptance up to statutory limit. | **RBI Act 1934** (Sec 26) & **Coinage Act 2011** (Sec 6). |\n| **Unlimited Legal Tender** | Currency that can be tendered in payment of any transaction of arbitrary value without limit. | Mandatory for all values. | **RBI Banknotes** (₹10, ₹20, ₹50, ₹100, ₹200, ₹500). |\n| **Limited Legal Tender** | Currency legal tender only up to a prescribed maximum statutory ceiling. | Cannot be forced beyond legal threshold. | **Coins:** ₹1 and above valid up to **₹1,000**; 50 paise coins valid up to **₹10** (Coinage Act 2011). |\n| **Bank Money (Demand Deposits)** | Commercial bank liabilities accessed via cheques, NEFT, UPI. | **NOT Legal Tender** (a shopkeeper can legally refuse a cheque). | Contractual banking obligation. |',
        order: 3,
      },
      {
        type: 'MECHANISM',
        title: 'Digital Payments Architecture & CBDC (e₹)',
        body: '### 1. Central Bank Digital Currency (CBDC / Digital Rupee)\nFollowing the *Finance Act 2022*, Section 2(a-iv) of the RBI Act 1934 was amended to include digital currency within the definition of "banknote":\n* **Direct Sovereign Liability:** Unlike bank deposits (which are liabilities of commercial banks subject to DICGC insurance limits), CBDC is a **direct liability of the RBI**.\n* **Two Operational Variants:**\n  1. **CBDC-Wholesale ($e\\text{₹-W}$):** Interbank settlement of secondary market transactions in government securities.\n  2. **CBDC-Retail ($e\\text{₹-R}$):** Token-based digital currency in mobile wallets for peer-to-peer (P2P) and peer-to-merchant (P2M) consumer transactions.\n* **Anonymity vs Traceability:** Offers cash-like settlement finality without needing an intermediary commercial bank account, with small-value offline capability.',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Money Concepts',
        body: '1. **One-Rupee Note Exception:** In India, **₹1 notes and all coins are issued by the Ministry of Finance (Government of India)** and signed by the **Finance Secretary**, NOT the RBI Governor! However, they are put into circulation solely through the Reserve Bank of India.\n2. **Banknotes Issuer:** Banknotes of ₹2 and above are issued by the **Reserve Bank of India** under Section 22 of the RBI Act 1934 and bear the signature of the **RBI Governor**.\n3. **Cheques & Crypto:** Cheques, demand drafts, and cryptocurrencies (Bitcoin) are **NOT Legal Tender** in India.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Monetary Systems, CBDC, Legal Tender, RBI Act',
        notes: 'Prelims questions on Legal Tender definition, Gresham Law, and CBDC vs Cryptocurrency.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS): Money Functions, Legal Tender Limits, Payment Systems',
        notes: 'Direct MCQs on Coinage Act limits (₹1,000 for coins) and Section 26 of RBI Act.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Functions of Money: Medium of exchange, unit of account, store of value, standard of deferred payment. Gresham Law: Bad money drives out good money. Fiat Money = Issued by sovereign decree without commodity backing. Banknotes = Unlimited Legal Tender (RBI Act Sec 26). Coins = Limited Legal Tender (Coinage Act 2011: ₹1+ up to ₹1,000; 50p up to ₹10). ₹1 note issued by Ministry of Finance (Finance Secretary signature). CBDC = Direct RBI digital liability.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Money eliminates the barter double coincidence of wants. Fiat money is backed by state decree; legal tender cannot be refused for debt settlement. In India, RBI banknotes are unlimited legal tender, while coins are limited legal tender up to ₹1,000 under the Coinage Act 2011. The ₹1 note is issued by the Ministry of Finance and signed by the Finance Secretary. Central Bank Digital Currency (CBDC / e₹) is a direct sovereign digital liability of the RBI.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Evolutionary Stages: Barter -> Commodity -> Metallic -> Fiat Paper -> Digital/CBDC.\n2. Functions: Primary (Exchange, Account) + Secondary (Store, Deferred Payment).\n3. Gresham Law: Overvalued bad money drives undervalued good money out of circulation.\n4. Legal Tender Architecture:\n   - Banknotes (₹2-₹500): RBI Act 1934 (Sec 22/26), Governor signature, Unlimited legal tender.\n   - ₹1 Note & Coins: Coinage Act 2011, Ministry of Finance, Finance Secretary signature, Limited legal tender.\n5. CBDC (e₹): Sovereign tokenized digital liability under amended RBI Act (Finance Act 2022).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following statements regarding the legal status of currency in India is CORRECT?',
        options: [
          'All banknotes and coins in India are unlimited legal tender for any payment amount',
          'Banknotes issued by the RBI are unlimited legal tender, while coins are limited legal tender up to ₹1,000 under the Coinage Act, 2011',
          'Cheques and Demand Drafts drawn on Scheduled Commercial Banks constitute legal tender under the Negotiable Instruments Act, 1881',
          'The One-Rupee note is issued by the Reserve Bank of India and bears the signature of the RBI Governor',
        ],
        correctAnswer: 'Banknotes issued by the RBI are unlimited legal tender, while coins are limited legal tender up to ₹1,000 under the Coinage Act, 2011',
        explanation: 'Under Section 26(1) of the RBI Act 1934, RBI banknotes are legal tender at any place in India without monetary limit (Unlimited Legal Tender). Under Section 6 of the Coinage Act 2011, coins of denomination not less than ₹1 are legal tender for any sum not exceeding ₹1,000 (Limited Legal Tender). Cheques are optional credit instruments (not legal tender), and ₹1 notes are issued by the Ministry of Finance with the signature of the Finance Secretary.',
        trapExplanation: 'Candidates assume all currency in India is unlimited legal tender or that cheques are legal tender because banks process them.',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },

  {
    id: 'CON-ECO-08',
    topicOrder: 28,
    topicSlug: 'money-commercial-banking-and-financial-markets',
    topicTitle: 'Money, Commercial Banking & Financial Markets Architecture',
    topicDescription: 'Money Supply Measures: Reserve Money (M0), Narrow Money (M1, M2), Broad Money (M3, M4) & Liquidity Aggregates, Money Multiplier.',
    slug: 'money-supply-aggregates-m0-m1-m2-m3-m4-liquidity-aggregates-money-multiplier',
    title: 'Money Supply Measures: Reserve Money (M0), Narrow Money (M1, M2), Broad Money (M3, M4) & The Money Multiplier',
    shortDefinition: 'The quantitative architecture of money supply in India defined by the RBI Working Group (Y.V. Reddy Committee, 1998): Reserve Money (M0 / High-Powered Money / Monetary Base), Narrow Money (M1, M2), Broad Money (M3, M4), Liquidity Aggregates (L1, L2, L3), and the Money Multiplier formula ($m = \\frac{M3}{M0} = \\frac{1+c}{r+c}$) determining how high-powered central bank money multiplies into commercial bank broad money.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-08-01',
        statement: 'Reserve Money (M0 / Monetary Base / High-Powered Money) is the total liability of the Reserve Bank of India, defined as: M0 = Currency in Circulation + Bankers\' Deposits with the RBI + "Other" Deposits with the RBI.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Reserve Bank of India Bulletin; Y.V. Reddy Working Group on Money Supply: Analytics and Methodology of Compilation (1998)',
        excerpt: 'M0 = Currency in Circulation + Bankers Deposits with RBI + Other Deposits with RBI.',
      },
      {
        id: 'CLM-ECO-08-02',
        statement: 'The four classical money supply aggregates are: M1 (Narrow Money) = Currency with the Public + Demand Deposits with Banking System + "Other" Deposits with RBI; M2 = M1 + Post Office Savings Bank Deposits; M3 (Broad Money) = M1 + Time Deposits with Banking System; M4 = M3 + All Post Office Deposits (excluding National Savings Certificates).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Working Group on Money Supply (1977 & 1998); NCERT Class 12 Macroeconomics, Ch 3',
        excerpt: 'M1 is the most liquid; M4 is the least liquid. M3 is the standard measure of Broad Money used for monetary policy analysis.',
      },
      {
        id: 'CLM-ECO-08-03',
        statement: 'The Money Multiplier ($m$) is the ratio of Broad Money ($M3$) to Reserve Money ($M0$), expressed mathematically as $m = \\frac{1+c}{r+c}$ (where $c = \\frac{C}{D}$ is the currency-deposit ratio and $r = \\frac{R}{D}$ is the reserve-deposit ratio including CRR and excess reserves); an increase in CRR or currency hoarding reduces the multiplier.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Milton Friedman & Anna Schwartz, Monetary History of the United States; RBI Bulletin',
        excerpt: 'Money Multiplier m = (1 + c) / (r + c). As cash-deposit ratio c rises, m declines.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'High-Powered Fuel vs Total Circulating Money',
        body: 'The central bank does not directly print every rupee circulating in the economy. Instead, the RBI creates a core foundation of **High-Powered Money (Reserve Money, $M0$)**.\n\nCommercial banks take these reserves and, through the fractional reserve banking system, repeatedly issue loans and create derivative deposits. This process expands the initial monetary base into a much larger pool of **Broad Money ($M3$)** that households and businesses use to transact.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The Hierarchy of Money Supply Aggregates (M0 to M4)',
        body: 'The RBI compiles money supply across standardized tiers based on **Liquidity** (ease of conversion into cash without loss of capital):\n\n```mermaid\ngraph TD\n    M0["M0: Reserve Money (High-Powered Base) = Currency in Circulation + Bank Reserves with RBI + Other Deposits with RBI"]\n    M1["M1: Narrow Money (Highest Liquidity) = Currency with Public + Demand Deposits with Banks + Other Deposits with RBI"]\n    M2["M2 = M1 + Post Office Savings Bank Deposits"]\n    M3["M3: Broad Money (Policy Benchmark) = M1 + Time Deposits (Fixed/Recurring) with Banking System"]\n    M4["M4 (Least Liquid) = M3 + All Post Office Deposits (excl. NSC)"]\n```\n\n### Liquidity Order\n$$\\mathbf{M1 > M2 > M3 > M4}$$\n* **M1 is the most liquid** (pure transaction money).\n* **M4 is the least liquid** (locked in term deposits and small savings).\n* **M3 is the primary measure** used by the RBI for macroeconomic projections.',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'The Money Multiplier Formula & Determinants',
        body: 'The **Money Multiplier ($m$)** measures the total broad money generated per unit of reserve money:\n\n$$\\mathbf{m = \\frac{M3}{M0} = \\frac{1 + c}{r + c}}$$\n\nWhere:\n* **$c = \\frac{\\text{Currency held by Public (C)}}{\\text{Bank Deposits (D)}}$ (Currency-Deposit Ratio):** Determined by public habits (cash preference vs digital banking).\n* **$r = \\frac{\\text{Bank Reserves (R)}}{\\text{Bank Deposits (D)}}$ (Reserve-Deposit Ratio):** Comprises statutory **Cash Reserve Ratio (CRR)** mandated by RBI + excess voluntary cash reserves maintained by banks.\n\n### What Increases the Money Multiplier?\n1. **Spread of Digital Payments / Banking Habit:** People deposit more cash in banks $\\rightarrow c \\downarrow \\rightarrow m \\uparrow$.\n2. **RBI Cuts CRR:** Banks need to hold fewer reserves $\\rightarrow r \\downarrow \\rightarrow m \\uparrow$.\n3. **Financial Inclusion (PMJDY):** Converts unbanked physical cash into active bank deposits $\\rightarrow m \\uparrow$.',
        order: 3,
      },
      {
        type: 'COMPARISON',
        title: 'New Monetary & Liquidity Aggregates (1998 Reddy Committee)',
        body: '| New Aggregate | Formula & Components |\n| :--- | :--- |\n| **$\\text{NM}_1$** | Currency with Public + Demand Deposits + Other Deposits with RBI. |\n| **$\\text{NM}_2$** | $\\text{NM}_1$ + Short-Term Time Deposits of Residents (up to 1 year maturity). |\n| **$\\text{NM}_3$** | $\\text{NM}_2$ + Long-Term Time Deposits of Residents + Call/Notice Borrowings by Banking System. |\n| **$L_1$** | $\\text{NM}_3$ + All Post Office Deposits (excluding National Savings Certificates). |\n| **$L_2$** | $L_1$ + Term Deposits with Financial Institutions (NABARD, EXIM Bank, SIDBI, NHB) + Term Money Borrowings + CDs issued by FIs. |\n| **$L_3$** | $L_2$ + Public Deposits accepted by Non-Banking Financial Companies (NBFCs). |',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Money Supply',
        body: '1. **Currency in Circulation vs Currency with the Public:**\n   $$\\mathbf{\\text{Currency with the Public} = \\text{Currency in Circulation} - \\text{Cash held in Bank Vaults}}$$\n   Bank vault cash cannot be counted in M1 because it is not in the hands of the public.\n2. **Post Office NSC Exclusion:** M4 and $L_1$ include all post office deposits but **explicitly exclude National Savings Certificates (NSC)**.\n3. **Demonetization & Money Multiplier:** When high-denomination notes were deposited in banks in 2016, public currency holdings dropped ($c \\downarrow$), causing a sharp temporary **spike in the statistical Money Multiplier**.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Money Supply, M0 vs M3, Money Multiplier, Digital Banking',
        notes: 'Multiple past Prelims questions on what increases the Money Multiplier (banking habit of population).',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module A - Money Supply Measures & Credit Multiplier',
        notes: 'Direct numerical problems on M1, M3, M0, and multiplier calculation.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'M0 (High-Powered Base) = Currency in Circulation + Bankers Deposits with RBI + Other Deposits with RBI. M1 (Narrow) = Currency with Public + Demand Deposits + Other Deposits with RBI. M3 (Broad) = M1 + Time Deposits. Liquidity: M1 > M2 > M3 > M4. Money Multiplier m = M3 / M0 = (1 + c) / (r + c). Money Multiplier INCREASES when public banking habit/digital adoption grows (c decreases) or CRR is cut (r decreases).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'The RBI compiles money supply across M0 (Reserve Money), M1 (Narrow Money), M2, M3 (Broad Money), and M4. M1 is the most liquid; M3 is the policy benchmark. The Money Multiplier m = M3 / M0 reflects how central bank base money expands into commercial bank broad money. Increasing financial inclusion and digital banking lowers the cash-deposit ratio and raises the money multiplier.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Monetary Base: M0 = Currency in Circulation + Bank Reserves at RBI + Other Deposits.\n2. Classical Aggregates: M1 = Currency with Public + DD; M2 = M1 + Post Office Savings; M3 = M1 + Time Deposits; M4 = M3 + All Post Office Deposits (excl NSC).\n3. Multiplier Identity: m = (1 + c) / (r + c). Influenced by public cash preference (c) and bank reserve ratio (r).\n4. Liquidity Aggregates (1998): L1 (NM3 + Post Office), L2 (L1 + FI deposits), L3 (L2 + NBFC public deposits).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following events will LEAD TO AN INCREASE in the Money Multiplier in an economy?',
        options: [
          'An increase in the Cash Reserve Ratio (CRR) mandated by the Central Bank',
          'An increase in the banking habit of the population, leading to a decline in the Currency-Deposit ratio',
          'A decision by commercial banks to hold higher voluntary excess cash reserves in their vaults',
          'A surge in public hoarding of physical cash during economic uncertainty',
        ],
        correctAnswer: 'An increase in the banking habit of the population, leading to a decline in the Currency-Deposit ratio',
        explanation: 'The money multiplier is given by m = (1 + c) / (r + c). When the banking habit of the population increases, people deposit more cash into commercial banks, causing the currency-deposit ratio (c) to fall. As c falls, a larger proportion of base money stays within the banking system to support credit creation, thereby increasing the money multiplier.',
        trapExplanation: 'Raising CRR increases the reserve ratio r, which reduces the money multiplier. Cash hoarding increases c, which also reduces the multiplier.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-ECO-09',
    topicOrder: 28,
    topicSlug: 'money-commercial-banking-and-financial-markets',
    topicTitle: 'Money, Commercial Banking & Financial Markets Architecture',
    topicDescription: 'Commercial Banking Architecture, Fractional Reserve Banking & Credit Creation Mechanics.',
    slug: 'commercial-banking-architecture-fractional-reserve-banking-credit-creation-mechanics',
    title: 'Commercial Banking Architecture, Fractional Reserve Banking & Credit Creation Mechanics',
    shortDefinition: 'The institutional and operating mechanics of commercial banking: Scheduled Commercial Banks (Public, Private, Foreign, Small Finance Banks, Payments Banks), the principle of Fractional Reserve Banking, the mathematical credit creation process through derivative deposits ($Total Credit = Initial Deposit \\times \\frac{1}{LRR}$), and balance sheet asset-liability management (ALM).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-09-01',
        statement: 'A Scheduled Commercial Bank (SCB) in India is a bank included in the Second Schedule to the Reserve Bank of India Act 1934, satisfying the statutory conditions of Section 42(6): minimum paid-up capital and reserves of ₹5 lakh, and conducting operations without detrimental effect to the interests of depositors.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Reserve Bank of India Act, 1934 (Section 42(6)); Banking Regulation Act, 1949',
        excerpt: 'Second Schedule inclusion requires satisfying capital norms and non-detrimental operation.',
      },
      {
        id: 'CLM-ECO-09-02',
        statement: 'Under Fractional Reserve Banking, banks maintain only a fraction of their total deposits as liquid reserves (Legal Reserve Ratio: LRR = CRR + SLR) and lend out the remaining portion; multiple rounds of lending generate derivative deposits according to the deposit expansion formula: Total Deposit Creation = Initial Primary Deposit / LRR.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Paul Samuelson, Economics; NCERT Class 12 Macroeconomics, Ch 3',
        excerpt: 'Deposit Multiplier = 1 / LRR. Total Deposits = Primary Deposit * (1 / LRR).',
      },
      {
        id: 'CLM-ECO-09-03',
        statement: 'Differentiated Banking licenses introduced in 2014-15 created niche banks: Small Finance Banks (SFBs — Nachiket Mor Committee, required to extend 75% of ANBC to Priority Sector and 50% loans below ₹25 lakh) and Payments Banks (can accept demand deposits up to ₹2 lakh per individual, but are strictly prohibited from lending or issuing credit cards).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Guidelines for Licensing of Small Finance Banks & Payments Banks (2014); Nachiket Mor Committee on Comprehensive Financial Services for Small Businesses and Low Income Households',
        excerpt: 'Payments banks accept deposits up to ₹2 lakh, provide payments/remittances, but cannot lend. SFBs have 75% PSL target.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'How Banks "Create" Money Out of Thin Air',
        body: 'When a bank grants you a home loan or car loan of ₹50 Lakh, it does not hand you a physical bag of cash taken from someone else\'s vault. Instead, the bank opens a deposit account in your name and electronically credits ₹50 Lakh to it.\n\nIn that single moment, **new money is created**. Every commercial bank loan creates a corresponding deposit (**Derivative Deposit**), bounded only by regulatory reserve requirements and capital adequacy constraints.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The Mathematical Mechanics of Credit Creation',
        body: '### The Deposit Multiplier Formula\nLet an initial primary cash deposit of **₹1,000** enter the banking system. Suppose the statutory **Legal Reserve Ratio (LRR = CRR + SLR)** is **20% (0.20)**.\n\n$$\\mathbf{\\text{Deposit Multiplier } (k) = \\frac{1}{\\text{LRR}} = \\frac{1}{0.20} = 5}$$\n$$\\mathbf{\\text{Total Deposits Created} = \\text{Primary Deposit} \\times \\frac{1}{\\text{LRR}} = ₹1,000 \\times 5 = ₹5,000}$$\n$$\\mathbf{\\text{Total Credit / Loans Created} = ₹5,000 - ₹1,000 = ₹4,000}$$\n\n### Round-by-Round Credit Expansion Table\n| Round | Primary Deposit (₹) | Loans Created (80%) (₹) | Reserves Held (20%) (₹) |\n| :--- | :--- | :--- | :--- |\n| **Round 1** | ₹1,000 | ₹800 | ₹200 |\n| **Round 2** | ₹800 | ₹640 | ₹160 |\n| **Round 3** | ₹640 | ₹512 | ₹128 |\n| **...** | ... | ... | ... |\n| **Total Sum** | **₹5,000** | **₹4,000** | **₹1,000** |',
        order: 2,
      },
      {
        type: 'COMPARISON',
        title: 'Classification of Commercial Banks in India',
        body: '| Category | Ownership & Structure | Prominent Examples | Key Operational Rules |\n| :--- | :--- | :--- | :--- |\n| **Public Sector Banks (PSBs)** | Majority stake ($>50\\%$) held by Government of India. | SBI, PNB, Bank of Baroda, Canara Bank (12 PSBs post-mega-mergers). | Heavy rural branch presence, social banking, PSL compliance. |\n| **Private Sector Banks** | Majority equity held by private/institutional shareholders. | HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra. | High technological efficiency, stringent risk-based pricing. |\n| **Foreign Banks** | Incorporated abroad, operating via branches or WOS in India. | Citibank, Standard Chartered, HSBC. | Subject to standard RBI prudential norms and PSL targets (40%). |\n| **Regional Rural Banks (RRBs)** | Joint venture: Central Govt (50%), Sponsor Bank (35%), State Govt (15%). | Rajasthan Marudhara Gramin Bank, Baroda Rajasthan Kshetriya Gramin Bank. | Rural agriculture and small enterprise credit focus (75% PSL). |\n| **Small Finance Banks (SFBs)** | Differentiated niche banks (Nachiket Mor Comm). | AU Small Finance Bank, Equitas SFB, Ujjivan SFB. | **75% PSL target**; at least 50% loan portfolio must be $< ₹25 \\text{ Lakh}$. |\n| **Payments Banks** | Differentiated payment service entities. | Airtel Payments Bank, India Post Payments Bank (IPPB), Paytm PB. | Max deposit **₹2 Lakh per customer**; **CANNOT LEND OR ISSUE CREDIT CARDS**; must invest 75% in G-Secs. |',
        order: 3,
      },
      {
        type: 'MECHANISM',
        title: 'Asset-Liability Management (ALM) & Structural Liquidity Mismatch',
        body: 'Banks accept short-term deposits (liabilities maturing in 1–3 years) and fund long-term infrastructure and housing loans (assets maturing in 15–30 years). This inherent maturity transformation creates **Structural Liquidity & Interest Rate Risk**.\n\n* **ALM Desk Function:** Monitors maturity buckets (1 day to 5+ years) to ensure outflows do not exceed inflows.\n* **Regulatory Liquidity Coverage Ratio (LCR):** Mandates banks to hold unencumbered **High-Quality Liquid Assets (HQLA)** sufficient to survive a severe 30-day stressed liquidity outflow scenario.',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Commercial Banking',
        body: '1. **Payments Bank Lending Prohibition:** Payments Banks can issue **ATM/Debit Cards**, offer mobile banking, and sell third-party insurance/mutual funds, but are **ABSOLUTELY PROHIBITED from lending money or issuing Credit Cards**.\n2. **Small Finance Banks vs Payments Banks:** SFBs are **full-fledged lending banks** targeting unserved segments. Payments Banks are **transactional deposit facilitators**.\n3. **Deposit Insurance Ceiling:** The **Deposit Insurance and Credit Guarantee Corporation (DICGC)**, a wholly-owned subsidiary of RBI under the DICGC Act 1961, insures bank deposits up to **₹5 Lakh per depositor per bank** (covering both principal and interest across all branches of that bank).',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Banking Structure, Payments Banks vs SFBs, DICGC Insurance',
        notes: 'Prelims questions on Payments Bank rules (no lending, ₹2L deposit cap) and SFB PSL targets.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 & Paper 2 (PPB): Module A - Indian Banking Structure & Credit Creation',
        notes: 'Core foundation for entire DBF exam: credit multiplier calculation, RRB shareholding, and DICGC cover.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Scheduled Bank = 2nd Schedule of RBI Act 1934 (Sec 42(6)). Credit Multiplier = 1 / LRR. Total Deposits = Initial Deposit * (1 / LRR). RRB Equity: Center 50%, Sponsor Bank 35%, State Govt 15%. Small Finance Banks: 75% PSL target, 50% loans < ₹25 Lakh. Payments Banks: Max deposit ₹2 Lakh, NO lending, NO credit cards, CAN issue debit cards. DICGC cover = ₹5 Lakh per depositor per bank.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Commercial banks create credit through fractional reserve banking, multiplying initial deposits by 1/LRR. Scheduled Commercial Banks meet RBI Act Second Schedule criteria. Differentiated banking includes Small Finance Banks (75% PSL mandate) and Payments Banks (deposit cap of ₹2 Lakh, strictly barred from lending and credit card issuance). DICGC insures deposits up to ₹5 Lakh per depositor per bank.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Definition: Second Schedule of RBI Act 1934 (paid-up capital >= ₹5L + depositor safety).\n2. Credit Creation: Deposit Multiplier = 1/LRR. Total credit = Primary deposit * (1/LRR - 1).\n3. Institutional Matrix: 12 PSBs, Private Banks, Foreign Banks, RRBs (50:35:15), SFBs (75% PSL), Payments Banks (deposit only, max ₹2L, no loans).\n4. ALM & Safety: LCR 30-day liquidity buffer, DICGC ₹5 Lakh statutory deposit insurance guarantee.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following activities is a Payments Bank PERMITTED to undertake under RBI regulations?',
        options: [
          'Granting personal and vehicle loans to retail customers',
          'Issuing credit cards with a pre-approved revolving credit limit',
          'Accepting demand deposits up to ₹2,00,000 per individual customer and issuing debit cards',
          'Setting up non-banking financial subsidiaries to engage in real estate lending',
        ],
        correctAnswer: 'Accepting demand deposits up to ₹2,00,000 per individual customer and issuing debit cards',
        explanation: 'Under RBI guidelines, Payments Banks can accept demand deposits (savings and current accounts) up to ₹2 Lakh per customer, issue ATM/Debit cards, facilitate remittances, and distribute simple third-party financial products. They are strictly prohibited from lending in any form and cannot issue credit cards.',
        trapExplanation: 'Candidates confuse debit cards (permitted) with credit cards (prohibited) or forget the ₹2 Lakh deposit limit.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-ECO-10',
    topicOrder: 28,
    topicSlug: 'money-commercial-banking-and-financial-markets',
    topicTitle: 'Money, Commercial Banking & Financial Markets Architecture',
    topicDescription: 'Financial Markets: Money Market Instruments vs Capital Market Architecture.',
    slug: 'financial-markets-architecture-money-market-instruments-vs-capital-markets',
    title: 'Financial Markets Architecture: Money Market Instruments vs Capital Market Architecture',
    shortDefinition: 'The organizational and regulatory structure of India\'s financial markets: the Money Market (short-term funds up to 1 year, regulated primarily by RBI) vs the Capital Market (medium and long-term funds, regulated by SEBI), and key money market instruments including Treasury Bills (T-Bills: 91, 182, 364-day zero-coupon securities), Cash Management Bills (CMBs), Commercial Paper (CP), Certificates of Deposit (CD), Call/Notice/Term Money, and Triparty Repo (TREPS).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-10-01',
        statement: 'Financial markets in India are bifurcated by maturity and regulatory jurisdiction: the Money Market deals in short-term debt instruments with maturities up to 1 year and is regulated by the Reserve Bank of India, while the Capital Market deals in long-term equity and debt instruments (>1 year maturity) and is regulated by SEBI.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Reserve Bank of India Act, 1934 (Chapter III-D); SEBI Act, 1992',
        excerpt: 'Money market instruments have tenor up to 1 year under RBI regulation; capital markets fall under SEBI jurisdiction.',
      },
      {
        id: 'CLM-ECO-10-02',
        statement: 'Treasury Bills (T-Bills) are short-term promissory notes issued by the Government of India in standard tenors of 91 days, 182 days, and 364 days; they carry zero default risk, pay no regular coupon interest, and are issued at a discount to face value and redeemed at par (Zero-Coupon Securities). State Governments do not issue T-Bills.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Direction – Money Market Instruments: Call/Notice Money, Commercial Paper and Certificates of Deposit',
        excerpt: 'T-Bills are issued only by Central Government at discount to face value in 91, 182, 364-day tenors.',
      },
      {
        id: 'CLM-ECO-10-03',
        statement: 'Commercial Paper (CP) is an unsecured short-term promissory note issued by highly-rated corporate entities and primary dealers to raise working capital (tenor: 7 days to 1 year, minimum denomination ₹5 lakh); Certificates of Deposit (CD) are negotiable money market instruments issued by Scheduled Commercial Banks and eligible Financial Institutions against funds deposited (tenor: 7 days to 1 year for banks, minimum ₹1 lakh).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Direction on Commercial Paper and Certificate of Deposit (2024)',
        excerpt: 'CP issued by corporates (min ₹5 Lakh, 7d-1yr). CD issued by banks (min ₹1 Lakh, 7d-1yr).',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Short-Term Liquidity vs Long-Term Capital Formation',
        body: 'A vibrant economy requires two distinct financial plumbing systems:\n\n1. **A Wholesale Overnight Liquidity Plumbing (Money Market):** Where banks, corporates, and governments manage temporary daily and seasonal cash surpluses or deficits (e.g., funding payroll for 15 days, meeting statutory CRR requirements overnight).\n2. **A Long-Term Capital Engine (Capital Market):** Where enterprises raise patient equity capital and 20-year debt to build ports, highway networks, semiconductor foundries, and factory complexes.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Money Market vs Capital Market Structural Comparison',
        body: '| Parameter | Money Market | Capital Market |\n| :--- | :--- | :--- |\n| **Instrument Maturity** | Short-term: **Up to 1 Year** (Overnight to 364 days). | Medium & Long-term: **Exceeding 1 Year** (up to 30+ years). |\n| **Primary Purpose** | Working capital, liquidity adjustment, meeting regulatory cash ratios. | Fixed capital formation, capacity expansion, infrastructure development. |\n| **Apex Regulator** | **Reserve Bank of India (RBI)**. | **Securities and Exchange Board of India (SEBI)**. |\n| **Key Instruments** | T-Bills, Commercial Paper, CDs, Call Money, TREPS, Commercial Bills. | Equity Shares, Preference Shares, Corporate Debentures, Sovereign Green Bonds. |\n| **Market Risk & Return** | Low default risk, high liquidity, lower return. | Higher market risk, lower liquidity, higher capital growth potential. |\n| **Participants** | RBI, Commercial Banks, Primary Dealers, Mutual Funds, DFIs, Corporates. | Retail investors, Mutual Funds, FPIs, DIIs, Insurance Companies, Corporates. |',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Key Money Market Instruments Master Suite',
        body: '### 1. Treasury Bills (T-Bills) & Cash Management Bills (CMBs)\n* **T-Bills:** Issued exclusively by the **Central Government** (State Governments CANNOT issue T-Bills). Available in three standard maturities: **91 days, 182 days, and 364 days**.\n* **Discount Mechanism:** Issued at a discount and redeemed at par (e.g., buy a ₹100 face value 91-day T-Bill for ₹98.20; earn ₹1.80 implicit interest at maturity).\n* **Cash Management Bills (CMBs):** Non-standard short-term bills issued for maturities **less than 91 days** to meet temporary cash flow mismatches of the Central Government.\n\n### 2. Commercial Paper (CP) & Certificates of Deposit (CD)\n* **Commercial Paper (CP):** Unsecured promissory note issued by corporates with high credit rating (A2/P2 minimum). Min denomination: **₹5 Lakh**; Tenor: **7 days to 1 year**.\n* **Certificates of Deposit (CD):** Negotiable title issued by Scheduled Commercial Banks to mobilize wholesale deposits. Min denomination: **₹1 Lakh**; Tenor: **7 days to 1 year** (up to 3 years for FIs).\n\n### 3. Interbank Call / Notice / Term Money Market\n* **Call Money:** Interbank borrowing/lending for **1 day (Overnight)**.\n* **Notice Money:** Interbank borrowing/lending for **2 days to 14 days**.\n* **Term Money:** Interbank funds borrowed for **15 days to 1 year**.\n* **Triparty Repo (TREPS):** Repo contract where a third entity (CCIL - Clearing Corporation of India) acts as intermediary and collateral custodian.',
        order: 3,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'Ways and Means Advances (WMA) vs Treasury Bills',
        body: '| Dimension | Ways and Means Advances (WMA) | Treasury Bills (T-Bills) |\n| :--- | :--- | :--- |\n| **Nature** | Direct temporary loan/overdraft facility extended by the RBI to Governments. | Marketable debt security auctioned by RBI in the open market. |\n| **Eligibility** | Available to both **Central Government and State Governments**. | Issued **ONLY by Central Government** (States issue State Development Loans - SDLs). |\n| **Tenor & Limits** | Must be repaid within **90 days**; mutually agreed limit between RBI and Ministry of Finance. | Standard tenors (91, 182, 364 days); tradable in secondary market. |\n| **Interest Rate** | Charged at prevailing **Repo Rate** (Normal WMA) / **Repo + 2%** (Overdraft). | Determined by competitive market auction bidding yield. |',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Money Markets',
        body: '1. **State Governments and T-Bills:** State Governments **CANNOT issue Treasury Bills**! When States need short-term funds, they take **Ways and Means Advances (WMA)** from RBI or issue long-term **State Development Loans (SDLs)**.\n2. **CP vs CD Issuer Distinction:** Corporates issue **Commercial Paper (CP)**; Banks issue **Certificates of Deposit (CD)**.\n3. **Call vs Notice Money Days:** 1 day = Call Money; 2–14 days = Notice Money; 15–365 days = Term Money.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Financial Markets, T-Bills, Commercial Paper, Capital vs Money Market',
        notes: 'Prelims questions on T-Bills features (zero coupon, Central Govt only) and CP vs CD.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module B - Money Market & Capital Market Instruments',
        notes: 'Detailed MCQs on minimum denominations (CP ₹5L, CD ₹1L), tenors (7d to 1yr), and Call Money rules.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Money Market = Up to 1 year (RBI regulated). Capital Market = >1 year (SEBI regulated). T-Bills: Central Govt ONLY, Zero-coupon discount security, 91/182/364 days. CMBs = <91 days. States use WMA and SDLs (NO T-Bills). Commercial Paper (CP): Corporates, min ₹5L, 7d-1yr. Certificates of Deposit (CD): Banks, min ₹1L, 7d-1yr. Call Money = 1 day; Notice Money = 2-14 days; Term Money = 15d-1yr.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Financial markets split into the Money Market (short-term, RBI-regulated) and Capital Market (long-term, SEBI-regulated). Central Government issues T-Bills (91, 182, 364 days) at a discount to par; State Governments cannot issue T-Bills and rely on WMA and SDLs. Corporates issue Commercial Paper (min ₹5 Lakh), while banks issue Certificates of Deposit (min ₹1 Lakh). Interbank lending spans Call (1d), Notice (2–14d), and Term (15d–1yr) money.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Regulatory Duality: Money Market (<1 yr, RBI) vs Capital Market (>1 yr, SEBI).\n2. Sovereign Instruments: T-Bills (91, 182, 364 days - Central Govt only), CMBs (<91 days), WMA (temporary 90-day RBI loan to Centre/States).\n3. Non-Sovereign Short-Term Debt:\n   - Commercial Paper: Corporates (min ₹5L, 7d-1yr).\n   - Certificates of Deposit: Banks (min ₹1L, 7d-1yr).\n4. Interbank Markets: Call (1 day), Notice (2-14 days), Term (15-364 days), TREPS (triparty repo via CCIL).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'With reference to Indian Financial Markets, which of the following statements is INCORRECT?',
        options: [
          'Treasury Bills are zero-coupon securities issued at a discount and redeemed at face value by the Central Government',
          'State Governments in India regularly issue 91-day and 364-day Treasury Bills to fund seasonal expenditure deficits',
          'Commercial Paper is an unsecured short-term debt instrument issued by corporate borrowers with a minimum denomination of ₹5 Lakh',
          'Call Money refers to interbank borrowing and lending of funds on an overnight (one-day) basis',
        ],
        correctAnswer: 'State Governments in India regularly issue 91-day and 364-day Treasury Bills to fund seasonal expenditure deficits',
        explanation: 'State Governments in India DO NOT issue Treasury Bills. Treasury Bills (91, 182, and 364-day) are issued exclusively by the Central Government (Government of India). When State Governments face short-term liquidity deficits, they avail Ways and Means Advances (WMA) / Overdraft facilities from the RBI or issue long-term State Development Loans (SDLs).',
        trapExplanation: 'Candidates assume both Union and State governments issue T-Bills, when in reality only the Union Government is statutorily authorized.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-ECO-11',
    topicOrder: 28,
    topicSlug: 'money-commercial-banking-and-financial-markets',
    topicTitle: 'Money, Commercial Banking & Financial Markets Architecture',
    topicDescription: 'Capital Market Instruments: Equities, Corporate & Sovereign Bonds, Yield Curves & Derivatives.',
    slug: 'capital-market-instruments-equities-corporate-bonds-yield-curves-derivatives',
    title: 'Capital Market Instruments: Equities, Corporate & Sovereign Bonds, Yield Curves & Derivatives',
    shortDefinition: 'The long-term capital mobilization ecosystem: Primary Market (IPOs, FPOs, Rights Issues, Private Placements) vs Secondary Market (Stock Exchanges: BSE, NSE), Equity vs Debt capital, Sovereign & Corporate Bond markets, Bond Yield mechanics and inverse price relationship ($P = \\sum \\frac{C}{(1+y)^t} + \\frac{F}{(1+y)^n}$), Yield Curve shapes (Normal, Inverted, Flat), and financial Derivatives (Forwards, Futures, Options, Swaps).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-11-01',
        statement: 'The Primary Capital Market enables issuers to raise fresh financial resources through Initial Public Offerings (IPOs), Follow-on Public Offerings (FPOs), Rights Issues, and Qualified Institutional Placements (QIPs); the Secondary Market provides continuous liquidity through stock exchange trading (BSE, NSE) under SEBI regulation.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Securities and Exchange Board of India (Issue of Capital and Disclosure Requirements) Regulations, 2018',
        excerpt: 'Primary market facilitates initial resource mobilization; secondary market provides trading liquidity.',
      },
      {
        id: 'CLM-ECO-11-02',
        statement: 'Bond prices and bond yields share a fundamental mathematical inverse relationship: when market interest rates rise, existing bond prices fall (and vice versa); the Yield to Maturity (YTM) is the internal rate of return earned by an investor holding a bond until maturity.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Frank Fabozzi, Bond Markets, Analysis, and Strategies; RBI Debt Market Handbook',
        excerpt: 'Bond Price is inversely related to market interest rate/yield: Price = Sum(Coupon/(1+y)^t) + FaceValue/(1+y)^n.',
      },
      {
        id: 'CLM-ECO-11-03',
        statement: 'Financial Derivatives derive their valuation from an underlying asset (equity, commodity, currency, interest rate) and are structured into four primary classes: Forwards (bilateral custom over-the-counter contracts), Futures (exchange-traded standardized contracts with daily mark-to-market), Options (Call/Put granting the right but not obligation to transact), and Swaps (Interest Rate / Currency Swaps).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'John Hull, Options, Futures, and Other Derivatives; SEBI Derivatives Market Regulations',
        excerpt: 'Derivatives include Forwards (OTC), Futures (standardized), Options (asymmetric right), and Swaps.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Capital Formation & Risk Transformation',
        body: 'Enterprises require two types of financial capital to grow: **Equity Capital** (selling partial ownership shares, sharing future profits without fixed repayment obligations) and **Debt Capital** (borrowing funds via bonds or debentures with contractual interest payments and principal redemption).\n\nCapital markets connect savers (households, pension funds, insurers) with productive enterprises, transforming risk, liquidity, and time horizons.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Primary vs Secondary Capital Markets & Equity Issuance Modes',
        body: '### 1. Primary Market Capital Mobilization Modes\n* **Initial Public Offering (IPO):** An unlisted company sells shares to the public for the first time to list on a recognized stock exchange.\n* **Follow-on Public Offering (FPO):** An already listed company issues additional fresh shares or offers for sale (OFS) to the public.\n* **Rights Issue:** Offering existing shareholders the right to purchase additional new shares in proportion to their existing holding at a discounted price.\n* **Qualified Institutional Placement (QIP):** Issuing equity/convertible securities exclusively to Qualified Institutional Buyers (QIBs like mutual funds, foreign portfolio investors) without a cumbersome public prospectus.\n\n### 2. Secondary Market\nProvides liquidity and price discovery for already issued securities on trading venues (**Bombay Stock Exchange - BSE Sensex 30**, **National Stock Exchange - Nifty 50**). Settled on a **$T+1$ Rolling Settlement Cycle** in India (moving towards optional $T+0$ same-day settlement).',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Bond Valuation, Yield to Maturity & The Yield Curve',
        body: '### 1. The Fundamental Inverse Bond Price-Yield Relationship\n\n$$\\mathbf{P = \\sum_{t=1}^{n} \\frac{C}{(1 + y)^t} + \\frac{F}{(1 + y)^n}}$$\n\n* **$P$:** Bond Market Price | **$C$:** Annual Coupon Payment | **$F$:** Face Value | **$y$:** Yield to Maturity (YTM).\n* **Intuition:** If the RBI raises policy interest rates, new bonds are issued at higher coupon rates. Existing older bonds with lower coupon rates become less attractive, forcing their market price to drop until their effective yield matches current market rates.\n\n### 2. Yield Curve Geometries\nA graph plotting the yields of government bonds across varying maturities (3 months to 40 years):\n* **Normal Upward-Sloping Curve:** Longer maturities yield higher returns to compensate for term risk and inflation.\n* **Flat Yield Curve:** Short-term and long-term yields converge (economic transition phase).\n* **Inverted Yield Curve (Downward Sloping):** Short-term yields exceed long-term yields — historically the most reliable macroeconomic signal of an impending **Economic Recession**.',
        order: 3,
      },
      {
        type: 'COMPARISON',
        title: 'The 4 Classes of Financial Derivatives',
        body: '| Derivative Class | Trading Venue | Contract Standardization | Counterparty Credit Risk | Payoff Structure |\n| :--- | :--- | :--- | :--- | :--- |\n| **Forwards** | Over-the-Counter (OTC) private bilateral deal. | Fully customized to buyer/seller specifications. | **High** (settlement depends entirely on counterparty solvency). | Linear / Symmetrical (both parties obligated). |\n| **Futures** | Exchange-Traded (NSE, BSE). | Standardized lot size, tick size, and expiration dates. | **Virtually Zero** (guaranteed by Clearing Corporation with daily Mark-to-Market margin). | Linear / Symmetrical (both parties obligated). |\n| **Options** | Exchange-Traded & OTC. | Standardized strike prices and expiry dates. | Low for buyer (risk limited to premium paid). | **Asymmetrical:** Buyer has the **Right, but NOT the Obligation** to buy (Call) or sell (Put). |\n| **Swaps** | Over-the-Counter (OTC). | Customized multi-period exchange of cash flows (e.g. Fixed for Floating Interest Rate). | Moderate (mitigated by ISDA Master Agreements). | Linear multi-period cash exchange. |',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Capital Markets',
        body: '1. **Bond Price vs Yield:** When central banks hike interest rates $\\rightarrow$ **Bond yields RISE and bond prices FALL**. When central banks cut rates $\\rightarrow$ **Bond yields FALL and bond prices RISE**.\n2. **Call Option vs Put Option:** A **Call Option** gives the holder the right to *BUY* an asset at the strike price (profitable in a rising market). A **Put Option** gives the holder the right to *SELL* an asset at the strike price (profitable in a falling market).\n3. **Sovereign Green Bonds (SGrBs):** Government of India issues SGrBs under the *Framework for Sovereign Green Bonds* to finance public projects in renewable energy, clean transportation, and green building, tracked in the Consolidated Fund of India.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Capital Markets, Bond Yields, Inverted Yield Curve, Green Bonds',
        notes: 'Prelims questions on Bond Yield movements, IPO vs FPO, and Call/Put options.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 & Paper 3 (AFMB): Bond Valuation, YTM, Capital Market Instruments',
        notes: 'Numerical calculations of bond prices, YTM, duration, and derivative payoffs.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Primary Market = Fresh capital (IPO, FPO, Rights Issue, QIP). Secondary Market = Trading liquidity (BSE, NSE, T+1 settlement). Bond Price is INVERSELY related to Bond Yield: Rates rise -> Bond Prices drop. Inverted Yield Curve (short yields > long yields) = Classic Recession Signal. Derivatives: Forwards (OTC custom), Futures (Exchange standardized + daily MTM), Options (Call = Right to buy, Put = Right to sell), Swaps (Cash flow exchange).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Capital markets mobilize long-term equity and debt. The Primary Market issues new securities (IPO, FPO, QIP), while the Secondary Market provides trading liquidity. Bond prices move inversely to interest rates and yields. An inverted yield curve signals recession. Financial derivatives include customized OTC Forwards, standardized exchange Futures, asymmetric Options (Call/Put), and cash-flow Swaps.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Primary Market: IPO (unlisted -> listed), FPO (additional listing), Rights Issue (existing holders), QIP (institutional block).\n2. Bond Mathematics: P = Sum[C / (1+y)^t] + F / (1+y)^n. Inverse relationship between market interest rates and bond prices.\n3. Yield Curve Morphology: Normal (upward), Flat (converging), Inverted (downward -> recession predictor).\n4. Derivatives Matrix: Forwards (OTC), Futures (Exchange/MTM), Options (Call/Put rights), Swaps (Interest rate / Currency).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'What happens to the market price of an existing fixed-coupon government bond when the Reserve Bank of India increases the policy Repo Rate?',
        options: [
          'The market price of the existing bond increases because its fixed coupon payment rises',
          'The market price of the existing bond decreases because newly issued bonds offer higher competitive yields',
          'The market price of the bond remains unchanged because government bonds are sovereign risk-free securities',
          'The bond\'s face value is permanently written down by the Reserve Bank of India',
        ],
        correctAnswer: 'The market price of the existing bond decreases because newly issued bonds offer higher competitive yields',
        explanation: 'Bond prices and interest rates/yields share a fundamental inverse mathematical relationship. When the central bank hikes policy rates, newly issued bonds enter the market carrying higher coupon rates. To make older, lower-coupon bonds attractive to buyers, their secondary market price must fall until their effective Yield to Maturity matches the new higher market rate.',
        trapExplanation: 'Candidates confuse coupon rate (which is fixed on the face value) with market price and yield (which fluctuate inversely).',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  // =========================================================================
  // TOPIC 29: CENTRAL BANKING, MONETARY POLICY FRAMEWORK & PRICE THEORY
  // =========================================================================
  {
    id: 'CON-ECO-12',
    topicOrder: 29,
    topicSlug: 'central-banking-monetary-policy-and-price-theory',
    topicTitle: 'Central Banking, Monetary Policy Framework & Price Theory',
    topicDescription: 'Evolution of RBI, statutory functions, Monetary Policy Framework (FIT, MPC), quantitative & qualitative instruments, price theory, CPI vs WPI, and DFIs.',
    slug: 'central-banking-rbi-statutory-functions-reserve-management-lender-of-last-resort',
    title: 'Central Banking: Evolution of Reserve Bank of India, Organizational Structure & Statutory Functions',
    shortDefinition: 'The constitutional and statutory foundations of the Reserve Bank of India (RBI): established on April 1, 1935 under the Reserve Bank of India Act 1934 (Hilton Young Commission recommendations) and nationalized on January 1, 1949, its governance by the Central Board of Directors, and core statutory functions (Monetary Authority, Issuer of Currency, Banker to Government, Banker to Banks, Regulator of Payment Systems, and Manager of Foreign Exchange under FEMA 1999).',
    difficulty: 'BEGINNER',
    claims: [
      {
        id: 'CLM-ECO-12-01',
        statement: 'The Reserve Bank of India was established on April 1, 1935 as a private shareholders\' bank based on the recommendations of the Royal Commission on Indian Currency and Finance (Hilton Young Commission, 1926) and was nationalized on January 1, 1949 under the RBI (Transfer to Public Ownership) Act, 1948.',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Reserve Bank of India Act, 1934; RBI History Volume 1 (1935-1951)',
        excerpt: 'RBI set up 1 April 1935 (Hilton Young Commission); nationalized 1 January 1949.',
      },
      {
        id: 'CLM-ECO-12-02',
        statement: 'Under Section 22 of the RBI Act 1934, the Reserve Bank has the sole monopoly right to issue banknotes in India (other than one-rupee notes); under Section 20 and 21, it acts as the statutory Banker and Debt Manager to the Central Government, and by agreement under Section 21A, to State Governments (except Sikkim by special arrangement).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Reserve Bank of India Act, 1934 (Sections 20, 21, 21A, 22)',
        excerpt: 'Section 22 grants sole note-issuing authority; Sections 20-21A govern banker to government role.',
      },
      {
        id: 'CLM-ECO-12-03',
        statement: 'The RBI acts as the Lender of Last Resort (LOLR) to solvent commercial banks facing liquidity stress under Section 17 and 18 of the RBI Act 1934, providing emergency collateralized liquidity against approved securities to prevent systemic bank runs and financial contagion.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Walter Bagehot (Lombard Street: A Description of the Money Market, 1873); RBI Act 1934',
        excerpt: 'Bagehot principle: Lend freely at a penalty rate against good collateral to stem liquidity panic.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Sovereign Guardian of Currency & Financial Stability',
        body: 'A national monetary system cannot survive on decentralized commercial competition alone; it requires an apex, non-commercial institution dedicated to preserving the purchasing power of the currency, maintaining banking solvency, managing foreign exchange, and facilitating government borrowing without triggering hyperinflation.\n\nIn India, this supreme apex role is vested in the **Reserve Bank of India (RBI)**, operating at the intersection of sovereign monetary authority and financial regulation.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Genesis, Nationalization & Central Board Governance',
        body: '### 1. Historical Timeline\n* **1926:** Hilton Young Commission (Royal Commission on Indian Currency and Finance) strongly recommends creating a unified central bank separate from commercial operations.\n* **1934:** Passage of the *Reserve Bank of India Act, 1934*.\n* **April 1, 1935:** RBI commences operations in Calcutta (shifted permanently to Bombay in 1937) with a paid-up capital of ₹5 Crore divided into 100-rupee shares owned by private shareholders.\n* **January 1, 1949:** Fully **nationalized** under the *Reserve Bank (Transfer to Public Ownership) Act, 1948*.\n\n### 2. Governance Architecture: The Central Board of Directors\nAppointed by the Central Government under Section 8 of the RBI Act:\n* **Official Directors:** The **Governor** and not more than **4 Deputy Governors** (tenure up to 5 years, eligible for reappointment).\n* **Non-Official Directors:** 4 directors nominated from Local Boards (Mumbai, Kolkata, Chennai, New Delhi) + 10 directors nominated from diverse economic fields + 2 Government Officials (typically Economic Affairs Secretary and Financial Services Secretary).',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'The Core Statutory Functions of the RBI',
        body: '```mermaid\ngraph TD\n    RBI["Reserve Bank of India"]\n    RBI --> F1["1. Monetary Authority: Formulation and execution of monetary policy under Section 45ZB (MPC)"]\n    RBI --> F2["2. Note Issuing Monopoly: Section 22 sole right for banknotes ₹2 to ₹500 (Minimum Reserve System)"]\n    RBI --> F3["3. Banker to Government: Manages Central & State Govt accounts, public debt, and WMA"]\n    RBI --> F4["4. Banker to Banks & LOLR: Holds statutory cash reserves, clearinghouse, and emergency liquidity"]\n    RBI --> F5["5. Forex Manager: Administers FEMA 1999 and manages India\'s Foreign Exchange Reserves"]\n    RBI --> F6["6. Financial Sector Regulator: Licenses and supervises commercial banks (BR Act 1949), NBFCs, and payment systems (PSS Act 2007)"]\n```\n\n### The Minimum Reserve System (1956)\nUnder Section 33 of the RBI Act 1934 (amended 1956), the RBI issues currency backed by a permanent minimum statutory reserve of **₹200 Crore**, of which at least **₹115 Crore must be in Gold bullion/coin** and the remaining **₹85 Crore in Foreign Securities**.',
        order: 3,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'Section 7 of the RBI Act 1934: Central Govt Powers vs RBI Autonomy',
        body: 'Under **Section 7(1)** of the RBI Act 1934:\n\n> *"The Central Government may from time to time give such directions to the Bank as it may, after consultation with the Governor of the Bank, consider necessary in the public interest."*\n\n* **Significance:** Section 7 establishes ultimate sovereign supremacy over the central bank in extraordinary circumstances.\n* **Historical Usage:** Section 7 has **NEVER been formally invoked** to issue a binding directive in independent India\'s history (though consultations were initiated in 2018 regarding PCA framework and surplus capital transfer, resolved via the Bimal Jalan Committee).',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in RBI Functions',
        body: '1. **Issuer of ₹1 Notes:** ₹1 notes and all coins are issued by the **Ministry of Finance (Government of India)**, NOT the RBI! The RBI merely acts as the distribution agent.\n2. **Banker to State Governments:** Acting as banker to the Central Government is mandatory under Sections 20/21. Acting as banker to State Governments is **contractual by mutual agreement** under Section 21A.\n3. **Minimum Reserve System:** Candidates often assume currency must be 100% backed by gold. In reality, India uses the Minimum Reserve System requiring only ₹200 Crore in total assets (₹115 Cr gold + ₹85 Cr foreign securities) to back all currency in circulation.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Central Banking, RBI Autonomy, Minimum Reserve System, Section 7',
        notes: 'Prelims questions on Hilton Young Commission, Minimum Reserve System, and note-issuing authority.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 & Paper 2 (PPB): Module A - RBI Genesis, Constitution & Statutory Role',
        notes: 'Direct MCQs on RBI Act sections (Sec 7, 17, 22, 42) and Central Board composition.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'RBI set up: April 1, 1935 (Hilton Young Commission 1926). Nationalized: Jan 1, 1949. Central Board: Governor + up to 4 Deputy Governors + non-official directors. Note Issue: Section 22 sole right under Minimum Reserve System (₹200 Cr: ₹115 Cr gold + ₹85 Cr foreign securities). Banker to Govt (Sec 20/21 Central, 21A States). Lender of Last Resort (Sec 17/18 - Bagehot rule). Section 7(1) = Central Govt power to give public interest directions after consultation.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'The RBI is India\'s central bank, founded in 1935 on Hilton Young Commission recommendations and nationalized in 1949. It serves as monetary authority, monopoly currency issuer (under the ₹200 Crore Minimum Reserve System), banker to governments, banker to banks (Lender of Last Resort), and regulator of banks and payment systems. Section 7 of the RBI Act empowers the Union Government to issue public interest directions after consulting the Governor.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Genesis: Hilton Young Commission 1926 -> RBI Act 1934 -> 1 April 1935 setup -> 1 Jan 1949 nationalization.\n2. Note Issuance: Section 22 under Minimum Reserve System (₹115 Cr gold + ₹85 Cr forex = ₹200 Cr minimum).\n3. Statutory Banking Role: Banker to Central Govt (mandatory Sec 20/21), Banker to States (agreement Sec 21A), Banker to Banks (Sec 42 reserves).\n4. Lender of Last Resort: Emergency collateralized liquidity to solvent banks experiencing liquidity runs.\n5. Sovereign Power: Section 7(1) government consultation and direction authority.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under India\'s "Minimum Reserve System" governing currency issuance by the Reserve Bank of India, what is the minimum statutory backing required in gold and foreign securities?',
        options: [
          'Total assets of ₹200 Crore, of which at least ₹115 Crore must be in gold coins and gold bullion',
          'Total assets of ₹500 Crore, with 50% backed by gold bullion and 50% backed by Government of India securities',
          'A mandatory 40% proportional gold backing for every newly printed rupee in circulation',
          'A floating reserve pegged to 6 months of national merchandise import requirements',
        ],
        correctAnswer: 'Total assets of ₹200 Crore, of which at least ₹115 Crore must be in gold coins and gold bullion',
        explanation: 'Under the Minimum Reserve System adopted by the RBI in 1956 (amending Section 33 of the RBI Act 1934), the Reserve Bank is required to maintain a permanent minimum backing of ₹200 Crore in its Issue Department assets, consisting of at least ₹115 Crore in gold bullion/coins and the remaining ₹85 Crore in foreign securities, enabling flexible currency issuance beyond this threshold.',
        trapExplanation: 'Candidates confuse the historical Proportional Reserve System (which required 40% gold/forex backing prior to 1956) with the modern Minimum Reserve System.',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },

  {
    id: 'CON-ECO-13',
    topicOrder: 29,
    topicSlug: 'central-banking-monetary-policy-and-price-theory',
    topicTitle: 'Central Banking, Monetary Policy Framework & Price Theory',
    topicDescription: 'Monetary Policy Framework: Flexible Inflation Targeting (FIT), Monetary Policy Committee (MPC) & Transmission Channels.',
    slug: 'monetary-policy-framework-flexible-inflation-targeting-mpc-transmission-channels',
    title: 'Monetary Policy Framework: Flexible Inflation Targeting (FIT), MPC & Transmission Channels',
    shortDefinition: 'The statutory monetary policy architecture of India instituted under the 2016 RBI Act amendment (Urjit Patel Committee): Flexible Inflation Targeting (FIT) targeting Headline CPI inflation at 4% with a tolerance band of ±2% (2% to 6%), the 6-member Monetary Policy Committee (MPC) structure and voting rules, accountability criteria for monetary failure (3 consecutive quarters outside tolerance band), and monetary policy transmission channels.',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-ECO-13-01',
        statement: 'Under Section 45ZA of the RBI Act 1934 (amended by Finance Act 2016), the Central Government, in consultation with the RBI, determines the inflation target in terms of Consumer Price Index (CPI-Combined) once every five years; the target is set at 4.0% with an upper tolerance limit of 6.0% and a lower tolerance limit of 2.0% (4% ± 2%).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Reserve Bank of India Act, 1934 (Section 45ZA); Ministry of Finance Gazette Notification (March 2021)',
        excerpt: 'Statutory inflation target is 4% CPI with +/- 2% tolerance band for 2021-2026.',
      },
      {
        id: 'CLM-ECO-13-02',
        statement: 'The Monetary Policy Committee (MPC) constituted under Section 45ZB consists of exactly 6 members: 3 from RBI (RBI Governor as ex-officio Chairperson, Deputy Governor in charge of monetary policy, and one RBI official nominated by Central Board) and 3 external experts appointed by the Central Government on recommendations of a Cabinet Secretary-led Search Committee for a non-renewable 4-year term.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Reserve Bank of India Act, 1934 (Section 45ZB); Gazette of India Notification',
        excerpt: '6-member MPC: 3 RBI + 3 external members. Governor has casting vote in event of tie.',
      },
      {
        id: 'CLM-ECO-13-03',
        statement: 'Under Section 45ZN of the RBI Act 1934 and Regulation 7 of the MPC Regulations, the RBI is deemed to have failed its monetary policy mandate if average Headline CPI inflation is above 6% or below 2% for three consecutive quarters, triggering a mandatory statutory report to the Central Government explaining causes, remedial actions, and expected stabilization timeline.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Reserve Bank of India Act, 1934 (Section 45ZN); Monetary Policy Committee Regulations, 2016',
        excerpt: 'Monetary failure condition: Inflation outside 2-6% band for 3 consecutive quarters triggers mandatory government report.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'From Multiple Indicators to Statutory Inflation Targeting',
        body: 'Prior to 2016, the RBI operated under a "Multiple Indicators Approach," simultaneously attempting to manage inflation, support GDP growth, stabilize the exchange rate, and manage government debt yields. This lack of a clear nominal anchor led to double-digit inflation during 2009–2013.\n\nFollowing the **Urjit Patel Committee Report (2014)**, India enacted a historic statutory shift: adopting **Flexible Inflation Targeting (FIT)** with the **Consumer Price Index (CPI)** as the sole nominal anchor, transitioning interest rate decisions from the sole discretion of the Governor to a collegiate **Monetary Policy Committee (MPC)**.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The FIT Framework & MPC Composition',
        body: '### 1. The Statutory Inflation Target ($4\\% \\pm 2\\%$)\n* **Target Variable:** Consumer Price Index (CPI - Combined, Base 2012 = 100).\n* **Target Rate:** **4.0%** Headline Inflation.\n* **Tolerance Band:** **2.0% to 6.0%** (2% floor, 6% ceiling) reviewed every 5 years (reaffirmed for 2021–2026).\n* **Primary Objective:** Maintain price stability while keeping in mind the objective of growth (Section 45ZB).\n\n### 2. The 6-Member MPC Architecture\n\n```mermaid\ngraph TD\n    MPC["Monetary Policy Committee (6 Members)"]\n    MPC --> RBI["3 Internal RBI Members"]\n    MPC --> EXT["3 External Government Appointees"]\n    RBI --> R1["1. RBI Governor (Chairperson, Ex-Officio)"]\n    RBI --> R2["2. Deputy Governor (Monetary Policy)"]\n    RBI --> R3["3. Officer of the Bank (Nominated by Board)"]\n    EXT --> E1["4. External Academic / Economist"]\n    EXT --> E2["5. External Academic / Economist"]\n    EXT --> E3["6. External Academic / Economist"]\n```\n\n* **Meeting Frequency:** Minimum **4 times a year** (standard practice: bi-monthly, 6 times/year).\n* **Quorum:** Minimum **4 members** (at least one being the Governor or Deputy Governor).\n* **Decision Rule:** Majority vote; in case of a tie, the **RBI Governor has a second or casting vote**.',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Monetary Policy Transmission Channels & External Benchmark Lending Rate (EBLR)',
        body: 'How does an MPC Repo Rate cut reach the real economy? Through four transmission channels:\n\n1. **Interest Rate Channel:** Repo cut $\\rightarrow$ Banks lower lending/deposit rates $\\rightarrow$ borrowing cost drops $\\rightarrow$ Consumption ($C$) and Investment ($I$) rise.\n2. **Credit / Bank Lending Channel:** Lower policy rates increase bank liquidity and willingness to expand credit.\n3. **Asset Price Channel:** Lower interest rates boost equity valuations and real estate prices $\\rightarrow$ Household wealth increases $\\rightarrow$ spending expands.\n4. **Exchange Rate Channel:** Lower interest rates can cause capital outflows and currency depreciation $\\rightarrow$ Exports become more competitive $\\rightarrow$ Net exports ($X - M$) rise.\n\n### The EBLR Reform (October 2019)\nHistorically, monetary transmission was sluggish under the BPLR, Base Rate, and MCLR regimes because banks delayed cutting lending rates. In October 2019, the RBI mandated all floating-rate retail and MSME loans to be linked to an **External Benchmark** (e.g. RBI Repo Rate or 91/182-day T-Bill yield), ensuring automatic, fast transmission of policy rate changes.',
        order: 3,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'Definition of Failure under Section 45ZN',
        body: 'The RBI does NOT fail if inflation breaches 6% in a single month or quarter. Under **Section 45ZN**, monetary failure is legally triggered **ONLY when average CPI inflation remains outside the 2% to 6% band for THREE CONSECUTIVE QUARTERS**.\n\n### The Statutory Remedial Report\nUpon failure, the RBI must submit a report to the Union Finance Ministry specifying:\n1. The reasons for failure to achieve the inflation target;\n2. Remedial actions proposed to be taken by the Bank; and\n3. An estimated time period within which the target will be achieved.\n*(Triggered for the first time in October 2022 following global supply shocks from the Ukraine conflict).*',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Monetary Policy Framework',
        body: '1. **Anchor Metric:** The statutory anchor is **Headline CPI (Combined)**, NOT Core CPI and NOT WPI! (Urjit Patel committee chose Headline CPI because food and fuel comprise ~50% of the Indian household consumption basket).\n2. **External Members Term:** External MPC members hold office for **4 years and are NOT eligible for reappointment**.\n3. **Casting Vote:** The RBI Governor has a regular vote like every other member, plus a **second or casting vote ONLY in the event of a tie** (e.g. 3-3 split).',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Monetary Policy Framework, MPC Structure, EBLR, Transmission Channels',
        notes: 'Repeatedly tested in Prelims (MPC composition, 4%+/-2% target, Section 45ZN failure rule).',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module B - Monetary Policy Framework & Transmission',
        notes: 'Direct MCQs on EBLR mandates, Urjit Patel recommendations, and Section 45ZB.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Flexible Inflation Targeting (FIT): 4% CPI Headline inflation ± 2% tolerance band (2% to 6%). Urjit Patel Committee (2014) -> 2016 RBI Act amendment. MPC = 6 members (3 RBI + 3 External Govt appointed for non-renewable 4-yr term). Quorum = 4. Governor has regular vote + casting vote on tie. Failure (Sec 45ZN) = Inflation outside 2-6% band for 3 CONSECUTIVE QUARTERS. EBLR (2019) mandates external benchmark linking for retail loans.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'India adopted Flexible Inflation Targeting in 2016, targeting Headline CPI at 4% ± 2%. The 6-member Monetary Policy Committee (3 RBI officials + 3 external experts appointed for non-renewable 4-year terms) meets at least 4 times a year to decide policy rates by majority vote. If inflation breaches the 2–6% band for 3 consecutive quarters, the RBI must submit a statutory explanation report to the Government.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Legal Anchor: Section 45ZA of RBI Act 1934 (4% ± 2% CPI Combined target).\n2. MPC Composition (Section 45ZB): Governor (Chair), Deputy Governor (Monetary Policy), Executive Director/Officer, 3 External Members (4-yr term, no reappointment).\n3. Operational Rules: Min 4 meetings/year, Quorum = 4, Individual voting publication, Minutes released on 14th day.\n4. Failure Criterion (Section 45ZN): 3 consecutive quarters outside 2-6% tolerance band.\n5. Transmission: Interest rate, credit, asset price, exchange rate channels + EBLR mandatory linking.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under the Reserve Bank of India Act 1934, under what specific statutory condition is the RBI deemed to have FAILED to meet its monetary policy inflation target?',
        options: [
          'When headline CPI inflation exceeds 6% in any two consecutive monthly releases',
          'When headline CPI inflation remains above 6% or below 2% for three consecutive quarters',
          'When Core CPI inflation exceeds 4% for six consecutive months',
          'When the Wholesale Price Index (WPI) exceeds 10% during a financial year',
        ],
        correctAnswer: 'When headline CPI inflation remains above 6% or below 2% for three consecutive quarters',
        explanation: 'Under Section 45ZN of the RBI Act 1934 read with Regulation 7 of the MPC Regulations, the RBI is deemed to have failed the inflation target if the average headline CPI inflation is greater than the upper tolerance level of 6% or less than the lower tolerance level of 2% for THREE CONSECUTIVE QUARTERS. This triggers a mandatory statutory report to the Central Government.',
        trapExplanation: 'Candidates confuse monthly inflation prints with quarterly averages, or confuse 2 quarters with the statutory requirement of 3 consecutive quarters.',
        difficulty: 'MEDIUM',
        isPYQ: false,
      },
    ],
  },

  {
    id: 'CON-ECO-14',
    topicOrder: 29,
    topicSlug: 'central-banking-monetary-policy-and-price-theory',
    topicTitle: 'Central Banking, Monetary Policy Framework & Price Theory',
    topicDescription: 'Quantitative & Qualitative Monetary Instruments: Repo, SDF, MSF, CRR, SLR & Open Market Operations.',
    slug: 'quantitative-qualitative-monetary-instruments-repo-sdf-msf-crr-slr-omo-market-stabilization',
    title: 'Quantitative & Qualitative Monetary Instruments: Repo, SDF, MSF, CRR, SLR, OMO & Market Stabilization',
    shortDefinition: 'The operational toolkit of monetary policy: Quantitative / General Tools (Liquidity Adjustment Facility - LAF Corridor: Policy Repo Rate, Standing Deposit Facility - SDF, Marginal Standing Facility - MSF, Cash Reserve Ratio - CRR, Statutory Liquidity Ratio - SLR, Open Market Operations - OMO, Market Stabilization Scheme - MSS, and Variable Rate Repo/Reverse Repo - VRR/VRRR) vs Qualitative / Selective Credit Controls (Margin Requirements, Consumer Credit Regulation, Moral Suasion, and Credit Rationing).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-14-01',
        statement: 'Under the modernized Liquidity Adjustment Facility (LAF) corridor, the Policy Repo Rate is the benchmark policy rate; the Standing Deposit Facility (SDF, introduced in April 2022 under amended Section 17 of RBI Act) forms the uncollateralized lower floor (Repo - 25 bps), while the Marginal Standing Facility (MSF) forms the upper ceiling (Repo + 25 bps), creating a 50 bps asymmetric interest rate corridor.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Monetary Policy Statement (April 2022); Reserve Bank of India Act, 1934 (Section 17(1A))',
        excerpt: 'LAF Corridor: MSF (Repo + 25 bps) ceiling, Policy Repo Rate middle, SDF (Repo - 25 bps) floor.',
      },
      {
        id: 'CLM-ECO-14-02',
        statement: 'The Cash Reserve Ratio (CRR) under Section 42(1) of the RBI Act 1934 requires Scheduled Commercial Banks to maintain a specified percentage of their Net Demand and Time Liabilities (NDTL) as cash balances with the RBI, on which the RBI pays zero interest; the Statutory Liquidity Ratio (SLR) under Section 24 of the Banking Regulation Act 1949 requires banks to maintain a percentage of NDTL in unencumbered approved liquid assets (Gold, Cash, G-Secs, T-Bills).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Reserve Bank of India Act, 1934 (Section 42); Banking Regulation Act, 1949 (Section 24)',
        excerpt: 'CRR is cash with RBI earning zero interest; SLR is liquid assets (G-Secs, Gold) earning return.',
      },
      {
        id: 'CLM-ECO-14-03',
        statement: 'Qualitative (Selective) Credit Controls regulate the direction, allocation, and end-use of credit rather than total money volume: Margin Requirements (Loan-to-Value ratios), Credit Rationing (imposing sector lending caps), Regulation of Consumer Credit (down payment/EMI norms), and Moral Suasion.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Banking Regulation Act, 1949 (Sections 21 & 35A); NCERT Class 12 Macroeconomics, Ch 3',
        excerpt: 'Quantitative tools control overall volume of credit; qualitative tools channel credit into specific sectors.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Central Bank\'s Accelerator and Brake Pedals',
        body: 'When an economy overheats with high inflation, the central bank presses the **monetary brake**—raising interest rates, draining cash reserves, and making loans expensive to cool aggregate demand.\n\nWhen the economy enters a downturn or liquidity freezes, the central bank presses the **monetary accelerator**—cutting policy rates, injecting cash through open market bond purchases, and expanding credit. The RBI achieves this fine-tuning through Quantitative and Qualitative instruments.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The Liquidity Adjustment Facility (LAF) Corridor Architecture',
        body: 'In April 2022, the RBI replaced the traditional collateralized Reverse Repo with the **Standing Deposit Facility (SDF)**, establishing a clean symmetric 50 basis points corridor:\n\n```mermaid\ngraph TD\n    MSF["Marginal Standing Facility (MSF Rate) = Repo Rate + 0.25% (Upper Ceiling)"]\n    REPO["Policy Repo Rate (Benchmark Center)"]\n    SDF["Standing Deposit Facility (SDF Rate) = Repo Rate - 0.25% (Lower Floor)"]\n    MSF --- REPO\n    REPO --- SDF\n```\n\n### Definitions of the 3 Key LAF Rates\n1. **Policy Repo Rate:** The interest rate at which commercial banks borrow short-term funds from the RBI against the pledge of eligible government securities.\n2. **Standing Deposit Facility (SDF - Floor):** Facility allowing banks to park excess liquidity with the RBI at their discretion on an **uncollateralized basis** (RBI does not need to provide G-Secs as collateral, overcoming the collateral constraint of Reverse Repo).\n3. **Marginal Standing Facility (MSF - Ceiling):** Emergency overnight borrowing window for scheduled banks to borrow funds above their normal LAF limit by dipping into their statutory SLR quota (up to a prescribed limit, typically 2% of NDTL) at a penalty rate.',
        order: 2,
      },
      {
        type: 'COMPARISON',
        title: 'CRR vs SLR: Master Structural Comparison',
        body: '| Parameter | Cash Reserve Ratio (CRR) | Statutory Liquidity Ratio (SLR) |\n| :--- | :--- | :--- |\n| **Statutory Backing** | **Section 42(1)** of *Reserve Bank of India Act, 1934*. | **Section 24** of *Banking Regulation Act, 1949*. |\n| **Form of Holding** | Held purely in **Cash balances with the RBI**. | Held by the bank itself in **Liquid Assets** (G-Secs, T-Bills, Gold, Vault Cash). |\n| **Interest / Returns** | **Zero Interest** earned (RBI does not pay interest on CRR). | Banks earn **Yield / Interest** on G-Secs and price appreciation on Gold. |\n| **Floor / Ceiling Limits** | RBI Act amendment in 2006 **removed both statutory floor and ceiling** (RBI can set any CRR rate). | Banking Regulation Act prescribes a **statutory ceiling of 40%** (floor of 25% was removed in 2007). |\n| **Primary Objective** | Controls liquidity and credit creation capacity of banking system. | Ensures solvency, bank liquidity, and creates captive market for government borrowing. |',
        order: 3,
      },
      {
        type: 'MECHANISM',
        title: 'Open Market Operations (OMO) vs Market Stabilization Scheme (MSS)',
        body: '### 1. Open Market Operations (OMO)\n* **Outright Purchases of G-Secs by RBI:** Injects durable liquidity into the banking system (expansionary).\n* **Outright Sale of G-Secs by RBI:** Drains surplus liquidity from the banking system (contractionary).\n* **Operation Twist:** Simultaneous sale of short-term government securities and purchase of long-term government securities to flatten the yield curve without changing overall net money supply.\n\n### 2. Market Stabilization Scheme (MSS - 2004)\nIntroduced to absorb massive, persistent capital inflows:\n* The Central Government issues special **Market Stabilization Bonds (MSBs)**.\n* The RBI sells these bonds to sterilize foreign exchange inflows.\n* **Crucial Rule:** The cash raised is kept in a separate sterilized MSS cash account at the RBI and **CANNOT be spent by the Government** for budgetary expenditure.',
        order: 4,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'Quantitative vs Qualitative Monetary Instruments',
        body: '| Category | Specific Tools | Operational Target |\n| :--- | :--- | :--- |\n| **Quantitative (General) Tools** | Repo Rate, SDF, MSF, CRR, SLR, OMO, MSS, Bank Rate. | Regulates the **total volume/quantity of credit** and cost of money in the entire economy. |\n| **Qualitative (Selective) Tools** | • **Margin Requirements (LTV):** Minimum down payment required for loans (e.g. 20% margin for home loan).<br>• **Consumer Credit Regulation:** Regulating maximum repayment tenure and minimum down payments.<br>• **Credit Rationing:** Fixing sectoral credit ceilings.<br>• **Moral Suasion:** Persuasive dialogues, meetings, and informal directives to bank CEOs. | Regulates the **direction, allocation, and sector end-use** of credit (e.g. discouraging speculative real estate lending while boosting agriculture). |',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Monetary Policy Tools, LAF Corridor, SDF, OMO, Qualitative vs Quantitative',
        notes: 'Classic Prelims core: CRR vs SLR acts, SDF uncollateralized nature, OMO effects on money supply.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 & Paper 2 (PPB): Module B - RBI Monetary Instruments & Liquidity Management',
        notes: 'High-frequency MCQs on LAF corridor width (50 bps), NDTL calculation, and SLR eligible assets.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'LAF Corridor (50 bps wide): MSF (Repo + 25 bps) ceiling, Policy Repo center, SDF (Repo - 25 bps) uncollateralized floor. CRR = RBI Act Sec 42, Cash with RBI, ZERO interest. SLR = Banking Regulation Act Sec 24, G-Secs/Gold/Cash held by bank, earns interest (max 40% cap). OMO = Sale of G-Secs drains money; Purchase injects money. MSS (2004) = Sterilizes foreign inflows without budget spending. Qualitative tools = Margin/LTV, Credit Rationing, Moral Suasion.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'The RBI conducts monetary policy via Quantitative tools (regulating overall credit volume) and Qualitative tools (directing credit allocation). The LAF corridor features the Policy Repo Rate flanked by the Standing Deposit Facility (SDF, uncollateralized floor at Repo - 25 bps) and Marginal Standing Facility (MSF, emergency ceiling at Repo + 25 bps). CRR (RBI Act) is interest-free cash at RBI; SLR (BR Act) is yield-earning liquid assets held by banks.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. LAF Corridor: MSF (Repo + 25 bps) -> Repo (benchmark) -> SDF (Repo - 25 bps uncollateralized).\n2. Reserve Mandates: CRR (RBI Act 1934 Sec 42, zero interest) vs SLR (BR Act 1949 Sec 24, max 40% ceiling, earns yield).\n3. Open Market Tools: OMO outright buy (injects) / sell (drains); Operation Twist (flatten yield curve); MSS (sterilize forex inflows).\n4. Qualitative Controls: Margin Requirements (LTV), Consumer Credit installment norms, Credit Rationing, Moral Suasion.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'What is the primary operational distinction between the Standing Deposit Facility (SDF) and the traditional Reverse Repo facility under the RBI\'s Liquidity Adjustment Facility?',
        options: [
          'Under the SDF, the RBI is NOT required to provide government securities as collateral to banks depositing excess liquidity, whereas Reverse Repo requires collateral',
          'The SDF is available only to Non-Banking Financial Companies (NBFCs), whereas Reverse Repo is available to commercial banks',
          'The SDF operates as the upper ceiling of the LAF corridor above the Repo Rate, whereas Reverse Repo is the lower floor',
          'Deposits placed under the SDF do not count towards bank Net Demand and Time Liabilities (NDTL)',
        ],
        correctAnswer: 'Under the SDF, the RBI is NOT required to provide government securities as collateral to banks depositing excess liquidity, whereas Reverse Repo requires collateral',
        explanation: 'The Standing Deposit Facility (SDF), introduced in April 2022 under amended Section 17 of the RBI Act 1934, allows commercial banks to park unlimited surplus liquidity with the RBI on an uncollateralized basis (without requiring the RBI to pledge government securities as collateral). In contrast, traditional Reverse Repo requires the RBI to provide sovereign G-Secs as collateral, which constrained the central bank during periods of massive liquidity absorption.',
        trapExplanation: 'Candidates confuse SDF with MSF (which is the upper ceiling) or assume SDF requires higher collateral than Reverse Repo.',
        difficulty: 'HARD',
        isPYQ: false,
      },
    ],
  },

  {
    id: 'CON-ECO-15',
    topicOrder: 29,
    topicSlug: 'central-banking-monetary-policy-and-price-theory',
    topicTitle: 'Central Banking, Monetary Policy Framework & Price Theory',
    topicDescription: 'Price Theory: Inflation Mechanics, Demand-Pull vs Cost-Push, Stagflation & The Phillips Curve.',
    slug: 'price-theory-inflation-mechanics-demand-pull-cost-push-stagflation-phillips-curve',
    title: 'Price Theory: Inflation Mechanics, Demand-Pull vs Cost-Push, Stagflation & The Phillips Curve',
    shortDefinition: 'The core micro and macroeconomic mechanisms of inflation: Demand-Pull Inflation (excess aggregate demand $AD > AS$), Cost-Push / Supply-Shock Inflation, the Quantity Theory of Money ($MV = PY$), the dynamics of Stagflation (high inflation + stagnant growth + high unemployment), the Short-Run vs Long-Run Phillips Curve (Milton Friedman\'s Natural Rate of Unemployment / NAIRU), and the Fisher Effect ($i = r + \\pi^e$).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-15-01',
        statement: 'Demand-Pull Inflation occurs when aggregate demand exceeds aggregate supply at full employment ("too much money chasing too few goods"); Cost-Push Inflation occurs when aggregate supply shifts leftward due to exogenous input price shocks (oil spikes, wage-push, crop failure) regardless of demand conditions.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'John Maynard Keynes, How to Pay for the War (1940); Samuelson & Nordhaus, Economics',
        excerpt: 'Demand-pull shifts AD right; Cost-push shifts AS left.',
      },
      {
        id: 'CLM-ECO-15-02',
        statement: 'The classical Quantity Theory of Money (Fisher Equation: MV = PY, where M is money supply, V is velocity, P is price level, and Y is real output) posits that assuming constant velocity and full-employment output, the general price level is directly proportional to the money supply: %ΔP = %ΔM.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Irving Fisher, The Purchasing Power of Money (1911); Milton Friedman (1968)',
        excerpt: 'Inflation is always and everywhere a monetary phenomenon (Friedman).',
      },
      {
        id: 'CLM-ECO-15-03',
        statement: 'The Short-Run Phillips Curve (A.W. Phillips, 1958) demonstrates an inverse empirical trade-off between inflation and unemployment; however, Milton Friedman and Edmund Phelps (1968) proved that in the long run, the Phillips Curve is vertical at the Non-Accelerating Inflation Rate of Unemployment (NAIRU / Natural Rate of Unemployment), eliminating any long-run trade-off.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'A.W. Phillips (Economica, 1958); Milton Friedman (AER, 1968 Nobel Address)',
        excerpt: 'Short-run Phillips curve shows inflation-unemployment trade-off; Long-run Phillips curve is vertical at NAIRU.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Erosion of Purchasing Power',
        body: 'Inflation is not simply the rising price of one single good like onions or tomatoes; it is a **sustained, broad-based increase in the general price level** across the entire economy, which correspondingly diminishes the purchasing power of money.\n\nUnderstanding whether inflation is caused by excess consumer demand or by supply-side disruptions is critical, because applying monetary brakes (hiking interest rates) to cure a crop failure can crush economic growth without resolving the underlying shortage.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Demand-Pull vs Cost-Push Inflation: Structural Anatomy',
        body: '### 1. Demand-Pull Inflation\n* **Root Cause:** Aggregate Demand ($AD$) expands faster than an economy\'s productive capacity ($AS$).\n* **Drivers:** Rapid money supply growth, expansionary fiscal deficit spending, surge in export demand, low interest rate credit booms.\n* **Keynesian Inflationary Gap:** The excess of aggregate expenditure over national output at full employment.\n\n### 2. Cost-Push Inflation (Supply-Shock Inflation)\n* **Root Cause:** Aggregate Supply ($AS$) curve shifts leftward due to rising production costs.\n* **Drivers:** Global crude oil spikes, geopolitical supply disruptions, domestic monsoon failure (food shock), currency depreciation raising import costs, wage-push inflation.',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Stagflation & The Phillips Curve Evolution',
        body: '```mermaid\ngraph TD\n    SR["Short-Run Phillips Curve: Inverse relationship (Inflation down -> Unemployment up)"]\n    Shock["Supply Shock (e.g. 1970s Oil Crisis)"] --> Stag["STAGFLATION: High Inflation + Stagnant Growth + High Unemployment"]\n    Stag --> LR["Long-Run Phillips Curve (Friedman-Phelps): Vertical line at NAIRU / Natural Rate of Unemployment"]\n```\n\n### 1. The Short-Run vs Long-Run Phillips Curve\n* **Short Run:** Policymakers can temporarily reduce unemployment below its natural rate by engineering surprise inflation.\n* **Long Run (Adaptive Expectations / NAIRU):** Workers anticipate higher inflation and demand higher nominal wages, causing firms to cut employment back to the **Natural Rate of Unemployment (NAIRU)**. The long-run Phillips Curve becomes **strictly vertical**.\n\n### 2. The Fisher Effect\n$$\\mathbf{i = r + \\pi^e}$$\n* **$i$:** Nominal Interest Rate | **$r$:** Real Interest Rate | **$\\pi^e$:** Expected Inflation Rate.\n* *Insight:* If expected inflation rises from 4% to 7%, nominal interest rates must rise to 10% for savers to maintain a 3% real return.',
        order: 3,
      },
      {
        type: 'COMPARISON',
        title: 'Inflation Typology by Speed & Magnitude',
        body: '| Type of Inflation | Annual Rate / Characteristics | Economic Impact |\n| :--- | :--- | :--- |\n| **Creeping Inflation** | Mild: **$1\\% \\text{ to } 3\\%$** per annum. | Healthy lubricant for economic growth; encourages investment without distorting pricing. |\n| **Walking / Trotting** | Moderate: **$3\\% \\text{ to } 9\\%$** per annum. | Warning sign; erodes real wages of fixed-income earners; central bank initiates rate hikes. |\n| **Running Inflation** | High: **$10\\% \\text{ to } 20\\%$** per annum. | Severe macroeconomic disruption; savings shift into physical assets (gold, real estate). |\n| **Galloping Inflation** | Intense: **$20\\% \\text{ to } 100\\%+ \\%$** per annum. | Capital flight; collapse of long-term credit contracts; economic instability. |\n| **Hyperinflation** | Extreme: **$>50\\%$ per month** (e.g. Zimbabwe, Weimar Germany). | Total collapse of domestic currency; barter economy emerges; money velocity approaches infinity. |\n| **Shrinkflation** | Downsizing product quantity/weight while maintaining identical retail price. | Hidden inflation masking actual price-per-unit surge. |\n| **Greedflation** | Corporate profit-margin expansion exceeding underlying cost increases during crises. | Seller-driven markup inflation. |',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Inflation Theory',
        body: '1. **Inflation vs Deflation vs Disinflation:**\n   * **Inflation:** General price level is **rising**.\n   * **Deflation:** General price level is **falling** (negative inflation rate, e.g. $-1.5\\%$).\n   * **Disinflation:** General price level is still rising, but at a **slower rate of increase** (e.g. inflation drops from $7\\%$ to $4\\%$).\n2. **Winners vs Losers from Unexpected Inflation:**\n   * **Winners (Gainers):** **Debtors / Borrowers** (repay fixed nominal debts with depreciated rupees), **Equity Shareholders**, **Real Estate Owners**.\n   * **Losers:** **Creditors / Lenders** (receive back money with diminished purchasing power), **Fixed-Pensioners**, **Salaried Workers** without DA indexation.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Inflation Concepts, Demand-Pull vs Cost-Push, Phillips Curve, Debtors vs Creditors',
        notes: 'Classic Prelims questions on who benefits from inflation (debtors gain, creditors lose) and Disinflation vs Deflation.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module A - Inflation Theory & Fisher Effect',
        notes: 'Direct MCQs on Fisher equation (i = r + pi), Quantity Theory of Money (MV = PY), and Phillips Curve.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Demand-Pull = AD > AS (too much money chasing too few goods). Cost-Push = AS shifts left (oil/supply shocks). Quantity Theory: MV = PY (Fisher). Stagflation = High Inflation + High Unemployment + Stagnant Growth. Phillips Curve = Inverse inflation-unemployment trade-off in short run; VERTICAL at NAIRU in long run (Friedman). Fisher Effect: Nominal Rate = Real Rate + Expected Inflation (i = r + π). Debtors/Borrowers GAIN from inflation; Creditors/Lenders LOSE.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Inflation is a sustained rise in the general price level driven by Demand-Pull (excess aggregate spending) or Cost-Push (supply input shocks). The Quantity Theory of Money (MV = PY) states that money growth drives long-run inflation. The Phillips curve shows a short-run trade-off between inflation and unemployment, but becomes vertical at the natural rate (NAIRU) in the long run. Unexpected inflation benefits debtors and harms creditors.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Causation: Demand-Pull (AD rightwards shift) vs Cost-Push (AS leftwards shift).\n2. Quantity Theory: MV = PY (Irving Fisher / Monetarism).\n3. Phillips Curve Dynamics: Short-run downward slope vs Long-run vertical at NAIRU (Milton Friedman expectations critique).\n4. Fisher Equation: i = r + π^e (Nominal interest rate adjusts to expected inflation).\n5. Redistributional Impact: Debtors, equity owners gain; Creditors, fixed-income savers lose.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'In an economy experiencing an unexpected surge in inflation, which of the following economic groups is a NET BENEFICIARY (GAINER)?',
        options: [
          'Creditors and commercial banks holding fixed-rate long-term bond portfolios',
          'Debtors and corporate borrowers who have borrowed at fixed nominal interest rates',
          'Retired citizens living on fixed, non-indexed monthly cash pensions',
          'Households holding large savings deposits in fixed-rate bank accounts',
        ],
        correctAnswer: 'Debtors and corporate borrowers who have borrowed at fixed nominal interest rates',
        explanation: 'Debtors (borrowers) gain from unexpected inflation because they repay their loans in fixed nominal amounts of currency that have lower real purchasing power than the money they originally borrowed. Creditors, fixed-rate depositors, and non-indexed pensioners lose because the real value of their received interest, principal, and pensions is eroded.',
        trapExplanation: 'Candidates often think inflation hurts everyone equally, forgetting that borrowers repay fixed debts with cheaper money.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-ECO-16',
    topicOrder: 29,
    topicSlug: 'central-banking-monetary-policy-and-price-theory',
    topicTitle: 'Central Banking, Monetary Policy Framework & Price Theory',
    topicDescription: 'Measurement of Inflation: CPI vs WPI Basket Weightages, Core vs Headline & Food Inflation Dynamics.',
    slug: 'measurement-of-inflation-cpi-vs-wpi-basket-weightages-core-headline-food-inflation',
    title: 'Measurement of Inflation: CPI vs WPI Basket Weightages, Core vs Headline & Food Inflation Dynamics',
    shortDefinition: 'The statistical and institutional architecture of price measurement in India: Consumer Price Index (CPI-Combined, base 2012, compiled by NSO/MoSPI) vs Wholesale Price Index (WPI, base 2011-12, compiled by DPIIT/Ministry of Commerce), detailed item category weightages, Headline Inflation vs Core Inflation (excluding volatile Food & Fuel), and the dynamics of food inflation (supply perishability, cobweb cycles, and food basket dominance).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-16-01',
        statement: 'The Consumer Price Index (CPI - Combined, Base 2012=100) compiled monthly by the National Statistical Office (NSO, MoSPI) measures retail inflation faced by households; Food and Beverages constitute the single largest group with a weight of 45.86% in the all-India CPI basket (54.18% in Rural, 36.29% in Urban).',
        claimType: 'CENSUS_DATA',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'MoSPI Technical Report on CPI Compilation; NSO Press Releases',
        excerpt: 'CPI Combined base 2012: Food & Beverages weight is 45.86%. Compiled monthly by NSO.',
      },
      {
        id: 'CLM-ECO-16-02',
        statement: 'The Wholesale Price Index (WPI, Base 2011-12=100) compiled monthly by the Office of the Economic Adviser (DPIIT, Ministry of Commerce and Industry) measures wholesale transaction prices; Manufactured Products form the largest category (64.23%), followed by Primary Articles (22.62%) and Fuel & Power (13.15%). WPI completely excludes services.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'DPIIT, Ministry of Commerce and Industry (Handbook of Wholesale Price Index)',
        excerpt: 'WPI base 2011-12: Manufactured Products 64.23%, Primary Articles 22.62%, Fuel 13.15%. Services excluded.',
      },
      {
        id: 'CLM-ECO-16-03',
        statement: 'Headline Inflation measures total inflation across the entire CPI consumption basket; Core Inflation excludes the highly volatile components of Food and Fuel (Core CPI = Headline CPI minus Food & Beverages and Fuel & Light), measuring underlying persistent demand-driven price pressures.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Monetary Policy Report; Urjit Patel Committee Report (2014)',
        excerpt: 'Core inflation strips out volatile food and fuel prices to identify persistent inflationary momentum.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Measuring What the Citizen Feels vs What the Wholesaler Trades',
        body: 'A single price index cannot serve all economic purposes. When a truckload of steel coils or industrial chemicals is traded at a factory gate, it reflects wholesale producer costs (**WPI**).\n\nWhen an ordinary citizen purchases milk, vegetables, pays children\'s school tuition, visits a clinic, and pays monthly house rent, those expenses reflect retail consumer prices (**CPI**). Because households consume services (which WPI ignores) and allocate nearly half their budget to food, the two indices can diverge significantly.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'CPI-Combined Basket Weightages (Base 2012 = 100)',
        body: 'The **all-India Consumer Price Index (Combined)** is partitioned into 6 major groups:\n\n```mermaid\npie title CPI-Combined Weightage Distribution (NSO Base 2012)\n    "1. Food & Beverages" : 45.86\n    "2. Pan, Tobacco & Intoxicants" : 2.38\n    "3. Clothing & Footwear" : 6.53\n    "4. Housing (Urban Only)" : 10.07\n    "5. Fuel & Light" : 6.84\n    "6. Miscellaneous (Services: Education, Health, Transport)" : 28.32\n```\n\n* **Food & Beverages Dominance (45.86%):** Within food, Cereals (~9.67%), Milk products (~6.61%), and Vegetables (~6.04%) hold massive weight.\n* **Housing Note:** The Housing index (10.07% weight) is collected **ONLY for the Urban sector** (Rural CPI has 0% housing weight).',
        order: 2,
      },
      {
        type: 'COMPARISON',
        title: 'Master Comparison: CPI vs WPI',
        body: '| Parameter | Consumer Price Index (CPI) | Wholesale Price Index (WPI) |\n| :--- | :--- | :--- |\n| **Compiling Authority** | **National Statistical Office (NSO)**, Ministry of Statistics & Programme Implementation (MoSPI). | **Office of Economic Adviser (OEA)**, DPIIT, Ministry of Commerce & Industry. |\n| **Current Base Year** | **2012 = 100** | **2011-12 = 100** |\n| **Stage of Transaction** | **Retail level** (prices paid by final consumers). | **Wholesale level** (first point of bulk commercial sale / factory gate). |\n| **Services Included?** | **YES** (Miscellaneous category ~28.3% covers education, health, transport, telecom). | **NO** (Strictly physical commodities only; **Zero services coverage**). |\n| **Food Weightage** | High: **45.86%** in CPI-Combined. | Lower: **~24.4%** (combined Food Articles in Primary Articles + Food Products in Manufacturing). |\n| **Major Weight Component**| Food & Beverages (**45.86%**). | Manufactured Products (**64.23%**). |\n| **Policy Anchor** | **Official Nominal Anchor** for RBI Monetary Policy (FIT). | Used for tracking producer costs and index-linked commercial contracts. |',
        order: 3,
      },
      {
        type: 'MECHANISM',
        title: 'Headline vs Core Inflation & The Cobweb Phenomenon in Agriculture',
        body: '### 1. Headline vs Core Inflation\n* **Headline Inflation:** Reflects the full CPI basket, capturing the actual cost-of-living increase felt by consumers. Vulnerable to transient weather/monsoon shocks.\n* **Core Inflation (Non-Food, Non-Fuel CPI):** Strips out volatile food and fuel items to isolate sticky, broad-based demand pressures. Essential for long-term monetary rate setting.\n\n### 2. The Agricultural Cobweb Cycle (Food Price Volatility)\nBecause agricultural planting decisions are based on **last season\'s prices** rather than expected future supply:\n* High onion prices in Year 1 $\\rightarrow$ Massive over-planting by farmers in Year 2 $\\rightarrow$ Glut at harvest $\\rightarrow$ Price crashes to zero $\\rightarrow$ Farmers abandon crop in Year 3 $\\rightarrow$ Severe shortage $\\rightarrow$ Price spikes again.',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Price Indices',
        body: '1. **WPI Services Exclusion:** The most frequent exam trap: **WPI completely excludes services**! If banking fees, software subscriptions, or hospital bills surge, WPI will not capture it at all.\n2. **Who Compiles What:** CPI is compiled by **NSO (MoSPI)**; WPI is compiled by **DPIIT (Ministry of Commerce & Industry)**.\n3. **Producer Price Index (PPI):** A future planned index (recommended by B.N. Goldar and Saumitra Chaudhuri committees) to replace WPI, measuring prices received by domestic producers excluding indirect taxes and trade margins.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Inflation Indices, CPI vs WPI weights, Core Inflation, Services coverage',
        notes: 'Heavily tested in Prelims: WPI services exclusion, MoSPI vs DPIIT, and CPI food weight.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module A - Inflation Measurement (CPI, WPI, Core Inflation)',
        notes: 'Direct MCQs on exact basket weights (Manufacturing 64.23% in WPI, Food 45.86% in CPI).',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'CPI (Combined, Base 2012): NSO/MoSPI, Retail prices, INCLUDES services, Food weight = 45.86% (largest), Housing 10.07% (Urban only). Official RBI FIT anchor. WPI (Base 2011-12): DPIIT/Commerce Ministry, Wholesale/factory gate, EXCLUDES services, Manufacturing weight = 64.23% (largest), Primary Articles = 22.62%, Fuel = 13.15%. Core Inflation = Headline CPI minus Food and Fuel.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'India measures inflation via retail CPI (NSO, base 2012, 45.86% food weight, includes services, official RBI policy anchor) and wholesale WPI (DPIIT, base 2011-12, 64.23% manufacturing weight, strictly excludes services). Headline inflation reflects the full basket; Core inflation strips out volatile food and fuel components to measure underlying monetary persistence.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. CPI Architecture (NSO/MoSPI): Base 2012=100. Groups: Food & Beverages (45.86%), Misc Services (28.32%), Housing (10.07% Urban only), Fuel (6.84%), Clothing (6.53%), Pan/Tobacco (2.38%).\n2. WPI Architecture (DPIIT): Base 2011-12=100. Groups: Manufactured Products (64.23%), Primary Articles (22.62%), Fuel & Power (13.15%). Zero services.\n3. Policy Role: CPI is the statutory Flexible Inflation Targeting anchor.\n4. Core vs Headline: Core CPI = Headline minus Food and Fuel.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following is a fundamental structural difference between the Consumer Price Index (CPI) and the Wholesale Price Index (WPI) in India?',
        options: [
          'CPI includes price changes of consumer services (such as healthcare and education), whereas WPI completely excludes services',
          'WPI is compiled by the National Statistical Office (NSO), whereas CPI is compiled by the Ministry of Commerce and Industry',
          'Food items have a significantly higher weight in the WPI basket than in the CPI basket',
          'The Reserve Bank of India officially uses the Wholesale Price Index as its nominal anchor for Flexible Inflation Targeting',
        ],
        correctAnswer: 'CPI includes price changes of consumer services (such as healthcare and education), whereas WPI completely excludes services',
        explanation: 'The Consumer Price Index (CPI-Combined) captures both goods and consumer services (under the Miscellaneous category which carries ~28.3% weight covering education, transport, medical care, and communication). In contrast, the Wholesale Price Index (WPI) measures transactions of physical commodities only at the first stage of bulk sale and completely excludes the services sector.',
        trapExplanation: 'Candidates confuse the compiling ministries (CPI is NSO/MoSPI, WPI is DPIIT/Commerce) or mistakenly believe WPI includes services.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-ECO-17',
    topicOrder: 29,
    topicSlug: 'central-banking-monetary-policy-and-price-theory',
    topicTitle: 'Central Banking, Monetary Policy Framework & Price Theory',
    topicDescription: 'Specialized Development Financial Institutions: NABARD, SIDBI, NHB, EXIM Bank & NaBFID.',
    slug: 'specialized-development-financial-institutions-nabard-sidbi-nhb-exim-nabfid',
    title: 'Specialized Development Financial Institutions: NABARD, SIDBI, NHB, EXIM Bank & NaBFID',
    shortDefinition: 'The institutional architecture of specialized Development Financial Institutions (DFIs) and All-India Financial Institutions (AIFIs) in India: NABARD (B. Sivaraman Committee, 1982 — RIDF, SHG-Bank Linkage), SIDBI (1990 — MSME financing, MUDRA), NHB (1988 — housing finance regulation transition to RBI), EXIM Bank (1982 — export-import credit lines), and the National Bank for Financing Infrastructure and Development (NaBFID Act 2021) for patient infrastructure capital.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-17-01',
        statement: 'National Bank for Agriculture and Rural Development (NABARD) was established on July 12, 1982 under the NABARD Act 1981 on the recommendations of the B. Sivaraman Committee (CRAFICARD), taking over the agricultural credit functions of the RBI; it is 100% owned by the Government of India and administers the Rural Infrastructure Development Fund (RIDF).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'National Bank for Agriculture and Rural Development Act, 1981; B. Sivaraman Committee Report (1979)',
        excerpt: 'NABARD established 12 July 1982 (Sivaraman Committee); 100% Govt of India owned; manages RIDF.',
      },
      {
        id: 'CLM-ECO-17-02',
        statement: 'Small Industries Development Bank of India (SIDBI) was set up on April 2, 1990 under the SIDBI Act 1989 as the principal financial institution for the promotion, financing, and development of the Micro, Small and Medium Enterprises (MSME) sector, supervising MUDRA (Micro Units Development & Refinance Agency) and the CGTMSE credit guarantee trust.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Small Industries Development Bank of India Act, 1989',
        excerpt: 'SIDBI setup 2 April 1990 for MSME refinance and development; operates MUDRA and CGTMSE.',
      },
      {
        id: 'CLM-ECO-17-03',
        statement: 'The National Bank for Financing Infrastructure and Development (NaBFID) was established as a statutory Development Financial Institution under the NaBFID Act 2021 to provide long-term, patient debt financing for infrastructure projects in the National Infrastructure Pipeline (NIP), regulated as the 5th All-India Financial Institution (AIFI) by the RBI.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'National Bank for Financing Infrastructure and Development Act, 2021; RBI AIFI Supervisory Guidelines',
        excerpt: 'NaBFID set up under 2021 Act as 5th AIFI for patient infrastructure financing.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Why Commercial Banks Cannot Fund 30-Year Infrastructure Alone',
        body: 'Commercial banks operate on short-term deposits (1 to 3-year maturities) and face strict asset-liability mismatch constraints when lending for 20-year infrastructure projects, green energy corridors, and rural irrigation networks.\n\n**Development Financial Institutions (DFIs)** were conceived to bridge this gap: mobilizing long-term patient capital, government-backed bond issues, and multilateral credit lines to provide dedicated developmental refinance and risk guarantees for priority national sectors.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The 5 All-India Financial Institutions (AIFIs) Regulated by RBI',
        body: 'The Reserve Bank of India exercises apex prudential supervision over **5 specialized All-India Financial Institutions**:\n\n```mermaid\ngraph TD\n    AIFI["All-India Financial Institutions (AIFIs)"]\n    AIFI --> NABARD["1. NABARD (1982): Agriculture, Rural Infrastructure (RIDF) & Panchayats"]\n    AIFI --> SIDBI["2. SIDBI (1990): MSME Financing, Venture Funds, MUDRA & CGTMSE"]\n    AIFI --> EXIM["3. EXIM Bank (1982): Foreign Trade Finance, Cross-Border Buyer Credits & LOCs"]\n    AIFI --> NHB["4. NHB (1988): Housing Finance Refinance & Residex Index"]\n    AIFI --> NABFID["5. NaBFID (2021): National Infrastructure Pipeline Long-Term Debt"]\n```',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'NABARD & The Rural Infrastructure Development Fund (RIDF)',
        body: '### 1. The Rural Infrastructure Development Fund (RIDF)\n* **Genesis:** Set up by the Government of India in **1995-96** within NABARD.\n* **Funding Mechanism:** When domestic Scheduled Commercial Banks **fail to meet their mandatory 40% Priority Sector Lending (PSL) targets** (specifically agriculture/weaker section sub-targets), the shortfall amount is compulsorily allocated to the **RIDF** (and other designated funds like SIDBI\'s MSE Refinance Fund).\n* **Usage:** Provides low-cost long-term loans to State Governments and State Owned Corporations to finance rural roads, bridges, minor irrigation dams, watershed management, and rural drinking water projects.\n\n### 2. SHG-Bank Linkage Programme (SBLP - 1992)\nNABARD pioneered the world\'s largest microfinance movement in 1992, enabling informal **Self-Help Groups (SHGs)** of 10–20 rural women to access collateral-free institutional bank loans based on mutual group guarantees.',
        order: 3,
      },
      {
        type: 'COMPARISON',
        title: 'SIDBI, NHB & EXIM Bank Operating Framework',
        body: '| Institution | Primary Mandate | Signature Schemes / Subsidiaries |\n| :--- | :--- | :--- |\n| **SIDBI** | Micro, Small and Medium Enterprises (MSMEs). | • **MUDRA (2015):** Refinances micro loans (Shishu $< ₹50\\text{k}$, Kishore ₹50k-₹5L, Tarun ₹5L-₹10L).<br>• **CGTMSE:** Collateral-free credit guarantee for MSME loans up to ₹5 Crore.<br>• **TReDS:** Trade Receivables Discounting System platform. |\n| **NHB** | Housing Finance Companies (HFCs). | • Refinances affordable housing loans.<br>• **NHB RESIDEX:** Tracks official residential property price indices across Indian cities.<br>• *Note:* Regulatory powers over HFCs were transferred from NHB to **RBI** in 2019. |\n| **EXIM Bank** | Cross-border trade & export competitiveness. | • Extends Lines of Credit (LOCs) to foreign governments in Africa/Asia to import Indian project goods.<br>• Buyer\'s Credit under National Export Insurance Account (NEIA). |',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Specialized Institutions',
        body: '1. **Ownership of NABARD & NHB:** Initially, the RBI held majority stakes in both NABARD and NHB. However, following Narasimham Committee recommendations to separate regulator and regulated roles, the **Government of India bought out the RBI\'s entire stake in both NABARD (2018) and NHB (2019)**. Both are now **100% owned by the Government of India**.\n2. **HFC Regulation Transfer:** Regulation of Housing Finance Companies (HFCs) was transferred from **NHB to RBI** in August 2019. NHB now acts purely as a development and refinancing institution.\n3. **NaBFID Legal Status:** NaBFID is a statutory DFI established in 2021 with headquarters in Mumbai, chaired by an eminent board (K.V. Kamath was appointed its first Chairman).',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Specialized DFIs, NABARD, RIDF, NaBFID, MSME Financing',
        notes: 'Prelims questions on RIDF funding (PSL shortfalls) and ownership transfer of NABARD/NHB to Govt.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module B - Development Financial Institutions & AIFIs',
        notes: 'Detailed MCQs on MUDRA tiers, Sivaraman Committee, RIDF rules, and 5 AIFIs.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: '5 AIFIs regulated by RBI: NABARD (1982, Sivaraman Comm, RIDF, 100% Govt owned), SIDBI (1990, MSME refinance, MUDRA, CGTMSE), EXIM Bank (1982, Trade LOCs), NHB (1988, Housing refinance, Residex, 100% Govt owned, HFC regulation transferred to RBI in 2019), NaBFID (2021, Infrastructure DFI). RIDF is funded via commercial bank Priority Sector Lending (PSL) shortfalls.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Specialized Development Financial Institutions provide patient long-term capital and sectoral refinance. The RBI supervises 5 AIFIs: NABARD (Agriculture and rural RIDF funded by bank PSL shortfalls), SIDBI (MSME refinance and MUDRA), EXIM Bank (foreign trade credit), NHB (housing finance refinance), and NaBFID (statutory infrastructure financing under 2021 Act). Both NABARD and NHB are 100% owned by the Central Government.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Specialized Mandates:\n   - NABARD: Agriculture, SBLP, RIDF (funded by PSL shortfall).\n   - SIDBI: MSME promotion, MUDRA tiers (Shishu, Kishore, Tarun), CGTMSE guarantee.\n   - EXIM Bank: Sovereign LOCs, export buyer credit.\n   - NHB: Housing refinance, Residex (regulation moved to RBI 2019).\n   - NaBFID: Statutory DFI for National Infrastructure Pipeline (2021 Act).\n2. Ownership: 100% Govt of India owned (RBI stakes divested).\n3. Supervisory Class: Regulated by RBI as All-India Financial Institutions (AIFIs).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'How is the Rural Infrastructure Development Fund (RIDF), maintained by NABARD, primarily funded?',
        options: [
          'Through annual direct budgetary grants allocated in the Union Budget from the Consolidated Fund of India',
          'Through compulsory contribution of shortfalls in Priority Sector Lending (PSL) targets by domestic Scheduled Commercial Banks',
          'Through dedicated carbon credit tax revenues collected by the Ministry of Environment, Forest and Climate Change',
          'Through external commercial borrowings raised by NABARD in international sovereign debt markets',
        ],
        correctAnswer: 'Through compulsory contribution of shortfalls in Priority Sector Lending (PSL) targets by domestic Scheduled Commercial Banks',
        explanation: 'The Rural Infrastructure Development Fund (RIDF), instituted within NABARD in 1995-96, is funded through the deposit of shortfalls by domestic Scheduled Commercial Banks that fail to achieve their mandated Priority Sector Lending (PSL) targets (specifically agriculture lending targets), which is then lent to State Governments for rural infrastructure projects.',
        trapExplanation: 'Candidates often assume the RIDF is funded by direct Union Budget tax revenues or foreign aid.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },
];

export async function seedBatchE1CanonicalKnowledge() {
  console.log('Seeding Batch E1 Canonical Knowledge (Topics 27–29: 17 concepts)...');

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

  // Ensure source exists
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

  // Ensure exams exist
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

  // Group concepts by topic
  const topicsMap: Record<string, { title: string; order: number; description: string; concepts: CanonicalConceptDefinition[] }> = {};
  for (const c of BATCH_E1_CONCEPTS) {
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

      // Clear existing child records for idempotent reseeding
      await db.claim.deleteMany({ where: { conceptId: concept.id } });
      await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
      await db.examConceptMapping.deleteMany({ where: { conceptId: concept.id } });
      await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
      await db.question.deleteMany({ where: { conceptId: concept.id } });

      // Seed Claims & Evidence
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

      // Seed ContentBlocks
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

      // Seed ExamConceptMappings
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

      // Seed RevisionUnits
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

      // Seed Questions
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
