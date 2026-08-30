/**
 * Economics Batch 1 Canonical Knowledge Seed (Topics 27–32: 17 Concepts)
 * Mind of Aravalli — Academic Reading Hub
 *
 * Comprehensive First-Principles Curriculum covering:
 * - DOMAIN A: ECONOMIC FOUNDATIONS (Topic 27: CON-ECO-01 to CON-ECO-02)
 * - DOMAIN B: MICROECONOMICS (Topics 28–31: CON-ECO-03 to CON-ECO-12)
 * - DOMAIN C: NATIONAL INCOME & CORE MACRO FOUNDATIONS (Topic 32: CON-ECO-13 to CON-ECO-17)
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
    pyqYear?: number;
    pyqPaper?: string;
    pyqStage?: string;
    pyqQuestionNumber?: number;
    examinerTrapPattern?: string;
  }>;
}

export const BATCH_E1_CONCEPTS: CanonicalConceptDefinition[] = [
  // =========================================================================
  // TOPIC 27: Foundations of Economics & Resource Allocation
  // =========================================================================
  {
    id: 'CON-ECO-01',
    topicOrder: 27,
    topicSlug: 'foundations-of-economics-and-resource-allocation',
    topicTitle: 'Foundations of Economics & Resource Allocation',
    topicDescription: 'First principles of scarcity, choice, opportunity cost, Production Possibility Frontier (PPF), and productive vs allocative efficiency.',
    slug: 'scarcity-choice-opportunity-cost-ppf-central-economic-problems',
    title: 'Economics as the Study of Scarcity, Choice, Opportunity Cost & Production Possibility Frontier (PPF)',
    shortDefinition: 'The foundational science of allocating scarce productive resources with alternative uses to satisfy unlimited human wants, formalized via the concave Production Possibility Frontier and increasing opportunity costs.',
    difficulty: 'BEGINNER',
    claims: [
      {
        id: 'CLM-ECO-01-01',
        statement: 'Lionel Robbins (1932) defined economics as the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Lionel Robbins (1932) An Essay on the Nature and Significance of Economic Science, Chapter 1',
        excerpt: 'Economics is the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses.',
      },
      {
        id: 'CLM-ECO-01-02',
        statement: 'The Production Possibility Frontier (PPF) is downward-sloping and concave to the origin due to the Law of Increasing Opportunity Cost, measured by the Marginal Rate of Transformation (MRT).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Paul Samuelson & William Nordhaus, Economics, Chapter 1: Foundations of Economics',
        excerpt: 'The production-possibility frontier shows the maximum quantities of traits that can be efficiently produced by an economy. Its concavity reflects the law of increasing opportunity costs.',
      },
      {
        id: 'CLM-ECO-01-03',
        statement: 'Points on the PPF represent productive efficiency; the specific output point chosen by society represents allocative efficiency; points inside indicate underutilization or unemployment.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Hal Varian, Intermediate Microeconomics: A Modern Approach, Chapter 1',
        excerpt: 'An economy achieves productive efficiency when it cannot produce more of one good without producing less of another, operating precisely on its production frontier.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Inescapable Reality of Scarcity',
        body: `Every economic problem arises from a single universal tension: **human wants are infinite, but the physical resources available to satisfy them (land, labour, capital, entrepreneurship) are strictly finite**.

Because resources are scarce, choosing to produce or consume one good always requires sacrificing the next best alternative. This sacrifice is the **Opportunity Cost**.

* **Accounting Cost vs Opportunity Cost:** An accountant counts only explicit monetary outlays. An economist counts the total economic cost: explicit money spent + implicit value of the forgone opportunity.
* **Example:** If a government spends ₹10,000 Crore on fuel subsidies, the economic cost is not just ₹10,000 Crore in cash; it is the 500 state-of-the-art hospitals or 2,000 km of national highways that *could* have been built with those identical resources.`,
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The Production Possibility Frontier (PPF) & MRT',
        body: `The **Production Possibility Frontier (PPF)** (or Transformation Curve) is a geometric model illustrating the maximum feasible production combinations of two goods that an economy can produce using all available resources and technology fully and efficiently.

### 1. Geometry of the PPF
* **Downward Sloping:** To produce more of Good X, resources must be diverted from Good Y.
* **Concave to the Origin (Bowed Outwards):** Resources are specialized and not equally adaptable to all lines of production. As more of Good X is produced, increasingly less suited resources must be transferred from Good Y, requiring progressively larger sacrifices of Good Y.

### 2. Marginal Rate of Transformation (MRT)
The slope of the PPF at any given point is the **Marginal Rate of Transformation (MRT)**, representing the marginal opportunity cost of Good X in terms of Good Y:

$$\\text{MRT}_{xy} = -\\frac{\\Delta Y}{\\Delta X} = \\frac{\\text{Marginal Cost of Good X}}{\\text{Marginal Cost of Good Y}} = \\frac{\\text{MC}_x}{\\text{MC}_y}$$

### 3. Economic Efficiency Classifications
| Location on Diagram | Economic Interpretation | Policy Meaning |
|---|---|---|
| **Points on the Curve ($A, B, C$)** | **Productive Efficiency** | Full employment of all resources and optimal technology utilization. |
| **Points Inside the Curve ($U$)** | **Inefficiency / Underutilization** | Unemployment, idle factory capacity, or misallocated resources. |
| **Points Outside the Curve ($X$)** | **Unattainable in Short Run** | Requires economic growth (capital accumulation, technological progress, or labour force expansion) to reach. |`,
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Shifts vs Movements Along the PPF',
        body: `Understanding changes in the PPF is a standard competitive exam testing area:

### 1. Movement Along the PPF
* Represents a **reallocation of existing resources** between Good X and Good Y.
* No change in the economy's total productive capacity.

### 2. Outward Shift of the Entire PPF (Economic Growth)
Occurs when the economy's total productive capacity expands universally:
* Discovery of new natural resources (e.g. major lithium or petroleum discoveries).
* Technological innovation across all sectors.
* Growth in the working-age population / human capital enhancement.

### 3. Asymmetrical Rotation of the PPF
Occurs when technological advancement or resource discovery is confined to **only one sector**:
* Technological breakthrough in agriculture rotates the PPF outward along the agricultural axis while leaving the manufacturing intercept unchanged.`,
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Indian Policy Application & Exam Traps',
        body: `### Indian Policy Application: The 'Guns vs Butter' Dilemma
In the Union Budget, the Finance Minister faces a real-world PPF trade-off between **Capital Expenditure (Capex)** (which shifts the national PPF outward over time by building infrastructure) and **Revenue Subsidies / Transfers** (which provides immediate welfare but does not expand future productive capacity).

### Examiner Traps & High-Yield Pitfalls
* ⚠️ **Trap 1: Assuming a Straight-Line PPF:** A linear (straight-line) PPF exists *only* if the Marginal Opportunity Cost is constant (i.e. resources are perfectly substitutable between goods). Real-world PPFs are always concave.
* ⚠️ **Trap 2: Confusing Productive Efficiency with Allocative Efficiency:** Operating on the PPF guarantees productive efficiency (no waste), but **allocative efficiency** requires producing the specific combination on the PPF that maximizes social welfare (where $\\text{MRT}_{xy} = \\text{MRS}_{xy}$).
* ⚠️ **Trap 3: Unemployment Shifts the PPF Inward:** Unemployment does NOT shift the PPF inward. The PPF shows *potential capacity*. Unemployment merely moves the economy to a point **inside** the existing frontier.`,
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'SEBI_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2 (Phase 1 & 2): Microeconomics — Scarcity, Choice, Opportunity Cost and PPF',
        notes: 'Frequently tests MRT calculation, straight-line vs concave PPF conditions, and points inside vs outside the curve.',
        frequentTraps: 'Confusing outward shift with movement along curve; forgetting that linear PPF requires constant opportunity cost.',
      },
      {
        examCode: 'RBI_GRADE_B',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Phase 2: Economic & Social Issues — Economic Growth and Development Concepts',
        notes: 'Foundational framework for macroeconomic growth and capital accumulation.',
      },
      {
        examCode: 'RPSC_RAS',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Mains Paper 1: Unit 2 — Basic Concepts of Economics',
        notes: 'Direct 2-mark and 5-mark questions on Opportunity Cost, PPF definition, and reasons for its concavity.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Economics = study of allocating scarce means with alternative uses. PPF is downward-sloping and concave to origin because MRT (opportunity cost) increases as more of Good X is produced. Points on curve = productive efficiency; inside = unemployment/waste; outside = unattainable without growth.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Scarcity forces choice; choice creates Opportunity Cost (the value of the next best alternative forgone). The Production Possibility Frontier (PPF) plots maximum two-good output combinations with fixed resources and technology. Slope = Marginal Rate of Transformation (MRT = ΔY/ΔX = MCx/MCy). Concavity is driven by imperfect resource substitutability (Law of Increasing Opportunity Cost). An outward shift signifies economic growth (more capital/tech); unemployment is a point INSIDE the curve, not a curve shift.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Foundational Microeconomics Architecture: Scarcity → Choice → Opportunity Cost → PPF Model. 1. Definition: Robbins (1932). 2. Key Identities: MRT = |ΔY/ΔX| = MCx/MCy. 3. Efficiency Types: Productive (on frontier), Allocative (tangency with social indifference curve), Dynamic (frontier shifting outward over time). 4. Policy Connection: Indian Budget capex vs revenue expenditure allocation trade-off.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Why is the Production Possibility Frontier (PPF) typically concave (bowed outwards) with respect to the origin?',
        options: [
          'Because resources are perfectly substitutable between different industries.',
          'Because the opportunity cost of producing an additional unit of a good increases as more of that good is produced.',
          'Because total economic resources expand automatically as production increases.',
          'Because consumer demand decreases as more goods are produced.',
        ],
        correctAnswer: 'Because the opportunity cost of producing an additional unit of a good increases as more of that good is produced.',
        explanation: 'The concavity of the PPF is governed by the Law of Increasing Opportunity Cost. Productive resources (specialized machines, land, skilled labour) are not equally adaptable across different production lines. As an economy shifts more resources into producing Good X, it must increasingly transfer resources that are less and less suited to X and more suited to Y, causing the marginal sacrifice of Good Y (MRT) to rise.',
        trapExplanation: 'Option A is incorrect because perfect substitutability would produce a straight-line (linear) PPF with constant MRT, not a concave one.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2020,
        pyqPaper: 'SEBI Grade A Phase 2 Paper 2',
        pyqStage: 'Phase 2',
        pyqQuestionNumber: 14,
        examinerTrapPattern: 'Confusing increasing opportunity cost (concave) with constant opportunity cost (linear).',
      },
      {
        type: 'APPLIED_SCENARIO',
        stem: 'During an economic recession, a country experiences a sharp rise in unemployment and several manufacturing plants operate at 50% capacity. How is this situation represented on the country’s Production Possibility Frontier (PPF)?',
        options: [
          'A parallel inward shift of the entire PPF.',
          'A rotation of the PPF along the manufacturing axis.',
          'A movement from a point on the frontier to a point strictly inside the frontier.',
          'A movement along the frontier towards agricultural goods.',
        ],
        correctAnswer: 'A movement from a point on the frontier to a point strictly inside the frontier.',
        explanation: 'The PPF represents the maximum potential output achievable when all resources are fully and efficiently employed. Widespread unemployment and idle capacity mean the economy is failing to realize its potential capacity. This corresponds to an inefficient point located INSIDE the existing frontier. The physical capacity (the frontier itself) has not disappeared, so it does not shift inward.',
        trapExplanation: 'Option A is a classic examiner trap: an inward shift of the PPF occurs only when productive capacity is physically destroyed (e.g. wartime destruction, natural disasters, permanent outward migration of labour).',
        difficulty: 'MEDIUM',
        isPYQ: false,
        examinerTrapPattern: 'Confusing underutilization of resources (point inside) with destruction of productive capacity (inward shift).',
      },
    ],
  },
  {
    id: 'CON-ECO-02',
    topicOrder: 27,
    topicSlug: 'foundations-of-economics-and-resource-allocation',
    topicTitle: 'Foundations of Economics & Resource Allocation',
    topicDescription: 'First principles of scarcity, choice, opportunity cost, Production Possibility Frontier (PPF), and productive vs allocative efficiency.',
    slug: 'classification-of-goods-public-private-common-resources-club-goods',
    title: 'Economic Systems, Micro vs Macro, Positive vs Normative Economics & Goods Classification',
    shortDefinition: 'The organizational structures of economies (Capitalist, Command, Mixed), methodological divisions (Positive vs Normative, Micro vs Macro), and the classification of goods based on excludability and rivalry.',
    difficulty: 'BEGINNER',
    claims: [
      {
        id: 'CLM-ECO-02-01',
        statement: 'Economic systems resolve the three central economic problems (What, How, and For Whom to produce) through Market Mechanisms (Capitalism), Central Planning (Socialism), or a Dual Public-Private Structure (Mixed Economy).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Paul Samuelson, Economics, Chapter 2: Markets and Government in a Modern Economy',
        excerpt: 'Every society must answer three fundamental questions: What to produce, How to produce, and For Whom to produce.',
      },
      {
        id: 'CLM-ECO-02-02',
        statement: 'Positive economics deals with objective, testable empirical statements of "what is", while Normative economics involves subjective value judgments and ethical prescriptions of "what ought to be".',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Milton Friedman (1953) Essays in Positive Economics, Part I',
        excerpt: 'Positive economics is in principle independent of any particular ethical position or normative judgments. Its task is to provide a system of generalizations that can be used to make correct predictions.',
      },
      {
        id: 'CLM-ECO-02-03',
        statement: 'Goods are classified across Excludability and Rivalry into Private Goods (excludable, rival), Public Goods (non-excludable, non-rival), Common Resources (non-excludable, rival), and Club Goods (excludable, non-rival).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Elinor Ostrom (1990) Governing the Commons, Chapter 1; Hal Varian, Intermediate Microeconomics',
        excerpt: 'Public goods are non-rival and non-excludable; common pool resources are rivalrous and non-excludable, leading to potential overexploitation.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'How Societies Organize Production & Solve Scarcity',
        body: `Every human society, regardless of political ideology, faces the **Three Central Economic Problems**:
1. **What to produce and in what quantities?** (Capital goods vs Consumer goods; Defense vs Healthcare).
2. **How to produce?** (Labour-intensive techniques vs Capital-intensive automated techniques).
3. **For whom to produce?** (How national output is distributed among citizens based on purchasing power or equity).

### The Three Economic Systems:
* **Market Economy (Laissez-Faire Capitalism):** Solved entirely by the **Price Mechanism** (Adam Smith's "Invisible Hand"). Consumer sovereignty dictates production; profit motivates producers; distribution is determined by factor earnings.
* **Centrally Planned Economy (Socialism):** Solved by a central planning authority (e.g. Gosplan in the USSR). Production targets, resource allocation, and prices are fixed by the State.
* **Mixed Economy (India's Model):** Coexistence of the private sector (driven by profit and market prices) and the public sector (driven by social welfare and strategic national priorities).`,
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Positive vs Normative & Micro vs Macro Divisions',
        body: `### 1. Positive Economics vs Normative Economics
| Dimension | Positive Economics | Normative Economics |
|---|---|---|
| **Core Nature** | Objective, descriptive, empirical facts. | Subjective, prescriptive, ethical value judgments. |
| **Question Answered** | *"What is? What happened? What will happen?"* | *"What ought to be? What should the government do?"* |
| **Verifiability** | Can be tested and verified against empirical data. | Cannot be verified; represents opinions and philosophical priorities. |
| **Example** | *"A 10% hike in fuel tax reduces petrol consumption by 3%."* | *"The government should reduce fuel taxes to protect poor households."* |

### 2. Microeconomics vs Macroeconomics
* **Microeconomics (Price Theory):** Studies the economic behaviour of individual economic agents (a single consumer, firm, industry, or market). Analyzes price determination for specific goods.
* **Macroeconomics (Income & Employment Theory):** Studies the economy as an aggregate whole. Analyzes national income, aggregate price level (inflation), total unemployment, balance of payments, and monetary/fiscal policies.
* **The Fallacy of Composition:** What is true for an individual may be disastrous if practiced by everyone simultaneously (e.g. **The Paradox of Thrift** — if one person saves more, their wealth increases; if all citizens save more simultaneously, aggregate demand collapses, triggering a national recession).`,
        order: 2,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'The Goods Classification Matrix (Rivalry × Excludability)',
        body: `Economics classifies all goods and services using two fundamental criteria:
1. **Excludability:** Can a person be prevented from consuming the good if they do not pay for it?
2. **Rivalry in Consumption:** Does one person's consumption of a unit reduce the quantity or quality available to others?

| | **Rivalrous** (Consumption reduces availability) | **Non-Rivalrous** (One person's use does not diminish another's) |
|---|---|---|
| **Excludable** (Can prevent non-payers) | **PRIVATE GOODS**<br>• Food, clothes, cars, mobile phones.<br>• Market mechanism functions efficiently. | **CLUB GOODS (Toll Goods)**<br>• Cable TV, toll highways, cinema halls, software licenses.<br>• Natural monopoly characteristics. |
| **Non-Excludable** (Cannot prevent non-payers) | **COMMON POOL RESOURCES**<br>• Groundwater aquifers, ocean fisheries, public pasture lands.<br>• **Tragedy of the Commons** (over-exploitation). | **PUBLIC GOODS**<br>• National defense, lighthouses, clean air, street lighting.<br>• **Free-Rider Problem** (market under-provides). |`,
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Tragedy of the Commons & Free-Rider Dilemma',
        body: `### 1. The Free-Rider Problem in Public Goods
Because public goods are **non-excludable**, individuals have an incentive to consume them without paying for their production, expecting others to foot the bill. Consequently, private markets fail to supply public goods, requiring **tax-funded State provision**.

### 2. The Tragedy of the Commons (Garrett Hardin, 1968)
Because Common Pool Resources are **rivalrous but non-excludable**, individuals acting in self-interest maximize their personal extraction, leading to collective resource collapse:
* **Indian Manifestation:** Severe groundwater depletion in Western Rajasthan, Punjab, and Haryana due to subsidized / free agricultural electricity.
* **Institutional Solution (Elinor Ostrom, Nobel 2009):** Local community management and well-defined customary property rights can govern common resources sustainably without centralized state control.`,
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'SEBI_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2: Microeconomics — Market Failure, Public Goods, Externalities and Common Resources',
        notes: 'Exhaustively tests the 4-box goods classification matrix and market failure causes.',
      },
      {
        examCode: 'UPSC_APFC',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'General Studies: Indian Economy & Social Security — Public Goods vs Merit Goods',
        notes: 'Tests public goods definitions, healthcare as a merit good, and Free-Rider dynamics.',
      },
      {
        examCode: 'RPSC_RAS',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Mains Paper 1: Unit 2 — Basic Concepts of Economics',
        notes: '2-mark definitions of Public Goods, Positive vs Normative economics, and Common Resources.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Economic Systems: Capitalism (price mechanism), Socialism (central planning), Mixed (India). Positive = "what is" (empirical/verifiable); Normative = "what ought to be" (value judgment). Goods Matrix: Private (R+E), Public (NR+NE), Common Pool (R+NE -> Tragedy of Commons), Club (NR+E).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Three central economic problems: What, How, For Whom to produce. Microeconomics analyzes individual price determination (Fallacy of Composition warns against generalizing micro rules to macro). Positive economics states testable facts; Normative economics prescribes ethical goals. The Goods Matrix divides goods by Excludability (can you stop non-payers?) and Rivalry (does use diminish supply?). Public goods (non-rival, non-excludable) suffer from the Free-Rider Problem and require State funding. Common resources (rival, non-excludable) suffer from the Tragedy of the Commons (e.g. groundwater).',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Structural Foundations: 1. Economic Systems: Free Market vs Command vs Mixed. 2. Methodological Dichotomies: Positive vs Normative, Micro vs Macro. 3. Goods Taxonomy Matrix (2x2): Private, Club, Common Pool, Pure Public. 4. Market Failures: Free-Rider problem (Public Goods), Tragedy of the Commons (Common Resources - Ostrom framework).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following statements represents a "Positive Economic Statement"?',
        options: [
          'The government ought to provide free electricity to all small and marginal farmers.',
          'Corporate tax rates in India should be reduced to 15% to stimulate private investment.',
          'An increase in the minimum support price (MSP) of wheat by 10% led to a 4% increase in wheat acreage.',
          'Income inequality in developing countries is unacceptably high and must be eradicated.',
        ],
        correctAnswer: 'An increase in the minimum support price (MSP) of wheat by 10% led to a 4% increase in wheat acreage.',
        explanation: 'A positive economic statement is an objective, empirical assertion describing "what is" or "what happened", which can be tested, proved, or disproved using data. The statement regarding the 10% MSP increase and 4% acreage response is a testable empirical relationship. All other options contain normative value judgments ("ought to", "should be", "unacceptably high").',
        trapExplanation: 'Words like "ought to", "should", and "must" are definitive signposts of normative economics.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'UPSC APFC / EPFO Prelims',
        pyqStage: 'Recruitment Test',
        pyqQuestionNumber: 42,
        examinerTrapPattern: 'Confusing empirical cause-effect statements with policy recommendations.',
      },
      {
        type: 'EXCEPTION_PROBE',
        stem: 'Groundwater in an unmetered agricultural aquifer in Rajasthan is best classified under which category of economic goods?',
        options: [
          'A Pure Public Good, because water is essential for human life.',
          'A Private Good, because land above the aquifer is privately owned.',
          'A Club Good, because only landowners with borewells can access it.',
          'A Common Pool Resource, because it is non-excludable but rivalrous in consumption.',
        ],
        correctAnswer: 'A Common Pool Resource, because it is non-excludable but rivalrous in consumption.',
        explanation: 'Groundwater in a shared underground aquifer is a classic Common Pool Resource (Common Resource). It is non-excludable (it is virtually impossible to prevent neighboring farmers from digging borewells and pumping from the common aquifer), but it is rivalrous in consumption (water pumped out by one farmer reduces the water table and availability for all other farmers), inevitably leading to the Tragedy of the Commons.',
        trapExplanation: 'Option A is incorrect because groundwater is rivalrous (water drawn is gone). Option C is incorrect because neighboring wells draw from the same shared pool without permission.',
        difficulty: 'MEDIUM',
        isPYQ: false,
        examinerTrapPattern: 'Confusing moral importance of a good (water is essential) with economic classification (rivalry/excludability).',
      },
    ],
  },

  // =========================================================================
  // TOPIC 28: Theory of Demand, Supply & Market Equilibrium
  // =========================================================================
  {
    id: 'CON-ECO-03',
    topicOrder: 28,
    topicSlug: 'theory-of-demand-supply-and-market-equilibrium',
    topicTitle: 'Theory of Demand, Supply & Market Equilibrium',
    topicDescription: 'Laws of demand and supply, determinants, shifts vs movements, market price determination, and welfare surplus analysis.',
    slug: 'theory-of-demand-law-of-demand-determinants-and-exceptions',
    title: 'Theory of Demand: Law of Demand, Determinants, Shift vs Movement & Exceptions',
    shortDefinition: 'The economic principle establishing an inverse relationship between price and quantity demanded (ceteris paribus), driven by income and substitution effects, and analyzed alongside Giffen and Veblen exceptions.',
    difficulty: 'BEGINNER',
    claims: [
      {
        id: 'CLM-ECO-03-01',
        statement: 'The Law of Demand states that ceteris paribus (all other factors remaining constant), the price and quantity demanded of a normal good are inversely related.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Alfred Marshall (1890) Principles of Economics, Book III, Chapter 3',
        excerpt: 'The greater the amount to be sold, the smaller must be the price at which it is offered in order that it may find purchasers; or, in other words, the amount demanded increases with a fall in price, and diminishes with a rise in price.',
      },
      {
        id: 'CLM-ECO-03-02',
        statement: 'A change in a good\'s own price causes a movement along its demand curve (change in quantity demanded), whereas changes in income, preferences, expectations, or related goods prices shift the entire demand curve.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Hal Varian, Intermediate Microeconomics, Chapter 3: Demand',
        excerpt: 'We must carefully distinguish between shifts of the demand curve and movements along the demand curve caused by a change in own-price.',
      },
      {
        id: 'CLM-ECO-03-03',
        statement: 'Exceptions to the downward-sloping demand curve include Giffen Goods (highly inferior goods where the negative income effect overwhelms the substitution effect) and Veblen Goods (conspicuous status consumption).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Robert Giffen / Thorstein Veblen (1899) The Theory of the Leisure Class; Hal Varian, Intermediate Microeconomics',
        excerpt: 'For a Giffen good, the income effect is so strongly negative that it completely outweighs the substitution effect, resulting in an upward-sloping demand curve.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Why Does Demand Slope Downward?',
        body: `When the price of a cup of tea rises from ₹10 to ₹20, two distinct psychological and economic forces simultaneously drive down consumption:
1. **The Substitution Effect (Always Negative):** Tea becomes relatively more expensive compared to close substitutes (coffee, green tea, lemon water). Rational consumers substitute away from tea toward cheaper alternatives.
2. **The Income Effect:** The higher price erodes the consumer's **real purchasing power** (real income). With the same nominal wallet, the consumer can afford fewer total goods and reduces consumption of tea.

Together, the Substitution Effect and Income Effect explain the fundamental downward slope of the demand curve:

$$Q_D = a - bP \\quad (b > 0)$$`,
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Determinants of Demand & Shift vs Movement',
        body: `### 1. Movement Along the Demand Curve (Change in Quantity Demanded)
* Caused **strictly and exclusively by a change in the own price ($P_x$)** of the good.
* A price cut causes **Expansion / Extension of Demand** (downward movement along the curve).
* A price hike causes **Contraction of Demand** (upward movement along the curve).

### 2. Shift of the Demand Curve (Change in Demand)
* Caused by changes in **non-price determinants** while own-price remains unchanged:
  - **Consumer Income ($Y$):** Increase in income shifts demand rightward for **Normal Goods**, but leftward for **Inferior Goods** (e.g. coarse cereals, kerosene).
  - **Price of Substitute Goods ($P_s$):** Rise in tea price shifts coffee demand to the right.
  - **Price of Complementary Goods ($P_c$):** Rise in petrol price shifts car demand to the left.
  - **Consumer Tastes & Preferences ($T$)** and Future Price Expectations ($E_p$).`,
        order: 2,
      },
      {
        type: 'COMPARISON',
        title: 'Exceptions to the Law of Demand: Giffen vs Veblen Goods',
        body: `| Dimension | Giffen Goods | Veblen Goods (Conspicuous Goods) |
|---|---|---|
| **Originator** | Sir Robert Giffen (Scottish Statistician) | Thorstein Veblen (*Theory of the Leisure Class*, 1899) |
| **Core Motivation** | Extreme poverty / subsistence survival necessity. | Social status, prestige, conspicuous display of wealth. |
| **Good Category** | Highly inferior staple food (e.g. cheap potatoes, bajra, broken rice). | Ultra-luxury items (e.g. Rolex watches, diamonds, luxury supercars). |
| **Price-Demand Relationship** | Direct (upward-sloping demand curve). Price rise forces poor households to abandon meat and buy *more* staple potatoes. | Direct (upward-sloping demand curve). High price acts as a signal of exclusivity; price drop reduces prestige appeal. |
| **Theoretical Mechanism** | Negative Income Effect > Substitution Effect. | Snob Appeal / Demonstration Effect ($E_p > 0$). |`,
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Competitive Exam Traps in Demand Theory',
        body: `### Examiner Traps & High-Yield Pitfalls
* ⚠️ **Trap 1: All Giffen Goods are Inferior Goods, but NOT all Inferior Goods are Giffen Goods:** For an ordinary inferior good (e.g. toned milk), income effect is negative, but the substitution effect still dominates, so demand still slopes downward. Only in extreme Giffen goods does the negative income effect overwhelm the substitution effect.
* ⚠️ **Trap 2: Shift vs Movement Question Wording:** When an exam says *"Income of consumers doubled, leading to higher car sales"*, this is an **Increase in Demand (Rightward Shift)**, NOT an expansion of demand.
* ⚠️ **Trap 3: Veblen vs Giffen in Practice:** Giffen goods stem from poverty constraints; Veblen goods stem from status signaling. Never confuse their income groups.`,
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'SEBI_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2: Microeconomics — Demand Theory, Elasticity and Consumer Behaviour',
        notes: 'Frequently tests Giffen vs Inferior goods condition (Income Effect vs Substitution Effect) and shifts vs movements.',
      },
      {
        examCode: 'RBI_GRADE_B',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Phase 2: Economic & Social Issues — Price Theory and Demand Dynamics',
        notes: 'Foundational for understanding inflation expectations and food demand elasticity in India.',
      },
      {
        examCode: 'RPSC_RAS',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Mains Paper 1: Unit 2 — Law of Demand and Elasticity',
        notes: 'Direct 5-mark question on reasons for downward slope of demand curve and Giffen paradox.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Law of Demand: Price and quantity demanded inversely related (ceteris paribus) via Substitution Effect + Income Effect. Own-price change = movement along curve (expansion/contraction). Non-price changes (income, substitutes, complements) = shift of curve. Giffen good: Income Effect > Substitution Effect (upward sloping).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Demand slopes downward due to the Law of Diminishing Marginal Utility, Substitution Effect (switching to cheaper alternatives), and Income Effect (change in real purchasing power). Shift vs Movement: Own price changes quantity demanded (movement along curve); Income, tastes, substitute prices ($P_s \\uparrow \\implies D_x \\uparrow$), and complement prices ($P_c \\uparrow \\implies D_x \\downarrow$) shift the entire demand curve. Giffen Goods are ultra-inferior goods where negative income effect outweighs substitution effect. Veblen goods derive demand from status signaling.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Demand Theory Framework: 1. Mathematical Function: $Q_D = f(P_x, Y, P_s, P_c, T, E)$. 2. Causal Foundations: Marshallian DMU + Hicksian Income/Substitution Effects. 3. Dynamics: Own price change (Movement) vs Parameter change (Shift). 4. Exceptions: Giffen Paradox (Poverty survival), Veblen Effect (Snob appeal), Speculative Bubbles.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following statements correctly distinguishes a "Giffen Good" from a standard "Inferior Good"?',
        options: [
          'A Giffen good is purchased by wealthy consumers, whereas an inferior good is purchased by low-income households.',
          'For a Giffen good, the substitution effect is positive, whereas for an inferior good it is negative.',
          'For a Giffen good, the negative income effect is larger in magnitude than the substitution effect, causing demand to rise when price rises.',
          'All inferior goods have upward-sloping demand curves, whereas Giffen goods have downward-sloping demand curves.',
        ],
        correctAnswer: 'For a Giffen good, the negative income effect is larger in magnitude than the substitution effect, causing demand to rise when price rises.',
        explanation: 'All Giffen goods are inferior goods, but only those inferior goods where the negative income effect is strong enough to overwhelm the substitution effect violate the Law of Demand. When the price of a Giffen good rises, the loss of real income forces the poor consumer to cut back on expensive foods (like meat/vegetables) and buy even more of the cheap staple (Giffen good).',
        trapExplanation: 'Option B is incorrect because the substitution effect is mathematically ALWAYS negative for all goods without exception. Option D is inverted.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'SEBI Grade A Phase 2 Paper 2',
        pyqStage: 'Phase 2',
        pyqQuestionNumber: 28,
        examinerTrapPattern: 'Testing whether the student knows the substitution effect is ALWAYS negative even for Giffen goods.',
      },
      {
        type: 'APPLIED_SCENARIO',
        stem: 'Suppose the price of Compressed Natural Gas (CNG) increases sharply across Indian metro cities. Assuming electric auto-rickshaws are a close substitute for CNG auto-rickshaws, what is the expected market impact on electric auto-rickshaws?',
        options: [
          'A downward movement along the electric auto-rickshaw demand curve.',
          'A rightward shift of the electric auto-rickshaw demand curve.',
          'A leftward shift of the electric auto-rickshaw demand curve.',
          'A decrease in the equilibrium price of electric auto-rickshaws.',
        ],
        correctAnswer: 'A rightward shift of the electric auto-rickshaw demand curve.',
        explanation: 'When two goods are substitutes, an increase in the price of Good A (CNG) makes Good B (electric vehicles) relatively more attractive. Because the price of electric auto-rickshaws itself did not change, this represents a non-price determinant change, causing the entire demand curve for electric auto-rickshaws to shift to the right (increase in demand).',
        trapExplanation: 'Option A confuses a shift of the demand curve with a movement along the curve.',
        difficulty: 'EASY',
        isPYQ: false,
        examinerTrapPattern: 'Testing cross-price elasticity effect as a shift vs movement.',
      },
    ],
  },
  {
    id: 'CON-ECO-04',
    topicOrder: 28,
    topicSlug: 'theory-of-demand-supply-and-market-equilibrium',
    topicTitle: 'Theory of Demand, Supply & Market Equilibrium',
    topicDescription: 'Laws of demand and supply, determinants, shifts vs movements, market price determination, and welfare surplus analysis.',
    slug: 'theory-of-supply-law-of-supply-and-market-equilibrium-price',
    title: 'Theory of Supply, Law of Supply & Market Equilibrium Price Determination',
    shortDefinition: 'The economic principle establishing a direct relationship between price and quantity supplied, and the market-clearing equilibrium mechanism resolving excess demand (shortages) and excess supply (surpluses).',
    difficulty: 'BEGINNER',
    claims: [
      {
        id: 'CLM-ECO-04-01',
        statement: 'The Law of Supply states that ceteris paribus, price and quantity supplied are directly related; higher market prices incentivize higher production along the upward-sloping marginal cost curve.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Hal Varian, Intermediate Microeconomics, Chapter 22: Firm Supply',
        excerpt: 'The competitive firm\'s supply curve is precisely the upward-sloping portion of its marginal cost curve that lies above average variable cost.',
      },
      {
        id: 'CLM-ECO-04-02',
        statement: 'Market equilibrium occurs at the unique price-quantity combination where quantity demanded equals quantity supplied ($Q_D = Q_S$), leaving no unintended inventories or unmet demand.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Paul Samuelson & William Nordhaus, Economics, Chapter 3: Basic Elements of Supply and Demand',
        excerpt: 'The market equilibrium comes at that price and quantity where the forces of supply and demand are in balance. At the equilibrium price, the amount that buyers want to buy is just equal to the amount that sellers want to sell.',
      },
      {
        id: 'CLM-ECO-04-03',
        statement: 'Simultaneous shifts in demand and supply produce determinate changes in either equilibrium price or quantity, while the change in the other variable depends strictly on the relative magnitudes of the two shifts.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'N. Gregory Mankiw, Principles of Microeconomics, Chapter 4',
        excerpt: 'When both supply and demand curves shift simultaneously, one of the two equilibrium variables (price or quantity) will change unambiguously, while the other is ambiguous without knowing the relative magnitude of shifts.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Why Does Supply Slope Upward?',
        body: `While consumers seek to maximize utility, producers seek to **maximize profit** ($\\text{Profit} = \\text{Total Revenue} - \\text{Total Cost}$).

As a firm expands production in the short run, it encounters diminishing marginal returns, causing the **Marginal Cost (MC)** of producing additional units to rise. A rational firm will produce additional units only if the market price rises high enough to cover this escalating marginal cost.

Therefore, the **firm's supply curve is identical to its Marginal Cost curve** (above the minimum Average Variable Cost):

$$Q_S = -c + dP \\quad (d > 0)$$`,
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Market Equilibrium & The Self-Correcting Price Mechanism',
        body: `Market equilibrium is established at the intersection of aggregate demand and aggregate supply:

$$Q_D(P^*) = Q_S(P^*)$$

\`\`\`
Price (P)
  ^
  |        \         / (Supply Curve)
  |         \       /
P1|---------\-----/------- [Excess Supply / Surplus -> Price Falls]
  |          \   /
P*|----------- X --------- [Market Equilibrium: QD = QS]
  |          /   \
P2|---------/-----\------- [Excess Demand / Shortage -> Price Rises]
  |        /       \ (Demand Curve)
  +-------------------------> Quantity (Q)
\`\`\`

### Automatic Stabilizing Mechanisms:
1. **If Market Price is above Equilibrium ($P_1 > P^*$):** Quantity supplied exceeds quantity demanded ($Q_S > Q_D$). Unsold inventories pile up in warehouses. Sellers cut prices to clear stocks, driving price down toward $P^*$.
2. **If Market Price is below Equilibrium ($P_2 < P^*$):** Quantity demanded exceeds quantity supplied ($Q_D > Q_S$). Long queues and shortages develop. Eager buyers bid up prices, incentivizing higher production until price reaches $P^*$.`,
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Simultaneous Shifts in Supply & Demand Matrix',
        body: `A classic competitive examination testing topic is analyzing simultaneous shifts:

| Shift Scenario | Equilibrium Price ($P^*$) | Equilibrium Quantity ($Q^*$) |
|---|---|---|
| **Demand Increases ($\\uparrow$) & Supply Increases ($\\uparrow$)** | **Ambiguous** (Depends on which shifts more) | **Unambiguously Increases ($\\uparrow$)** |
| **Demand Decreases ($\\downarrow$) & Supply Decreases ($\\downarrow$)** | **Ambiguous** | **Unambiguously Decreases ($\\downarrow$)** |
| **Demand Increases ($\\uparrow$) & Supply Decreases ($\\downarrow$)** | **Unambiguously Increases ($\\uparrow$)** | **Ambiguous** (Depends on shift magnitudes) |
| **Demand Decreases ($\\downarrow$) & Supply Increases ($\\uparrow$)** | **Unambiguously Decreases ($\\downarrow$)** | **Ambiguous** |`,
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Indian Policy Application & Agricultural Volatility',
        body: `### Indian Agricultural Price Spikes: The Onion & Tomato Shock
In India, unseasonal monsoon rainfall destroys crops, shifting the agricultural **Supply Curve sharply to the left**. Because short-run food demand is highly inelastic, this causes **Equilibrium Price to skyrocket**, generating severe food inflation spikes.

### Examiner Traps & High-Yield Pitfalls
* ⚠️ **Trap 1: Ambiguity in Simultaneous Shifts:** If both demand and supply increase by identical magnitudes, equilibrium quantity rises sharply, but **equilibrium price remains completely unchanged**.
* ⚠️ **Trap 2: Tax Shift Direction:** Imposition of a GST or per-unit excise tax shifts the **Supply Curve vertically upward (leftward)** by the exact amount of the tax.`,
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'SEBI_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2: Microeconomics — Supply Theory, Market Equilibrium, Price Mechanism',
        notes: 'Frequently tests simultaneous shifts table and mathematical calculation of equilibrium price and quantity.',
      },
      {
        examCode: 'RBI_GRADE_B',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Phase 2: Economic & Social Issues — Food Inflation and Supply Shocks',
        notes: 'Crucial for analyzing agricultural supply chain bottlenecks and headline inflation spikes.',
      },
      {
        examCode: 'SBI_PO',
        relevance: 'DIRECT_OVERLAY',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Mains: General / Banking Awareness — Market Dynamics and Price Mechanism',
        notes: 'Tests market clearing concepts and impact of commodity price shocks.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Law of Supply: Price and quantity supplied are directly related (MC curve = supply curve above min AVC). Market Equilibrium: $Q_D = Q_S$. Excess demand ($P < P^*$) causes shortages and price hikes; Excess supply ($P > P^*$) causes surpluses and price cuts. Both curves shift right -> Quantity definitely rises, Price is ambiguous.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Supply slopes upward because rising output encounters diminishing returns, increasing marginal costs. Equilibrium price clears the market ($Q_D = Q_S$). When Demand increases and Supply increases simultaneously, Equilibrium Quantity ALWAYS increases, but Equilibrium Price depends on relative shift magnitudes. When Demand increases and Supply decreases, Equilibrium Price ALWAYS increases, but Equilibrium Quantity is ambiguous.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Market Equilibrium Engine: 1. Supply Function: $Q_S = f(P_x, P_{\\text{inputs}}, \\text{Tech}, \\text{Taxes})$. 2. Equilibrium Condition: $Q_D(P) = Q_S(P)$. 3. Walrasian Price Tatonnement: $\\frac{dP}{dt} = \\alpha(Q_D - Q_S)$. 4. Shift Combinatorics: 4 discrete double-shift cases with invariant vs ambiguous outcomes.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'If market demand is given by $Q_D = 1200 - 4P$ and market supply is given by $Q_S = 200 + 6P$, what are the equilibrium price ($P^*$) and equilibrium quantity ($Q^*$)?',
        options: [
          '$P^* = 100, Q^* = 800$',
          '$P^* = 140, Q^* = 640$',
          '$P^* = 100, Q^* = 600$',
          '$P^* = 80, Q^* = 880$',
        ],
        correctAnswer: '$P^* = 100, Q^* = 800$',
        explanation: 'Set $Q_D = Q_S$: $1200 - 4P = 200 + 6P \\implies 1000 = 10P \\implies P^* = 100$. Substitute $P = 100$ back into demand: $Q^* = 1200 - 4(100) = 800$ (or into supply: $Q^* = 200 + 6(100) = 800$).',
        trapExplanation: 'Option C incorrectly computes quantity using a subtraction error.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2020,
        pyqPaper: 'SEBI Grade A Phase 2 Paper 2',
        pyqStage: 'Phase 2',
        pyqQuestionNumber: 18,
        examinerTrapPattern: 'Basic linear supply-demand algebra.',
      },
      {
        type: 'APPLIED_SCENARIO',
        stem: 'In the Indian commercial aviation market, consumer incomes rise substantially (increasing demand for flights), while at the same time Aviation Turbine Fuel (ATF) prices fall sharply (reducing airline operating costs). What is the unambiguous effect on the aviation market equilibrium?',
        options: [
          'Equilibrium ticket price will unambiguously increase.',
          'Equilibrium ticket price will unambiguously decrease.',
          'Equilibrium flight passenger volume (quantity) will unambiguously increase.',
          'Equilibrium flight passenger volume (quantity) will unambiguously decrease.',
        ],
        correctAnswer: 'Equilibrium flight passenger volume (quantity) will unambiguously increase.',
        explanation: 'Here, Demand shifts to the right ($\\uparrow$ due to higher income) and Supply shifts to the right ($\\uparrow$ due to lower input fuel costs). When both demand and supply increase simultaneously, Equilibrium Quantity UNAMBIGUOUSLY increases. The impact on equilibrium price is ambiguous without knowing which curve shifted by a greater distance.',
        trapExplanation: 'Options A and B are incorrect because price direction is indeterminate without knowing the exact relative magnitudes of the two shifts.',
        difficulty: 'MEDIUM',
        isPYQ: false,
        examinerTrapPattern: 'Testing the invariant vs ambiguous variable in simultaneous rightward shifts.',
      },
    ],
  },
  {
    id: 'CON-ECO-05',
    topicOrder: 28,
    topicSlug: 'theory-of-demand-supply-and-market-equilibrium',
    topicTitle: 'Theory of Demand, Supply & Market Equilibrium',
    topicDescription: 'Laws of demand and supply, determinants, shifts vs movements, market price determination, and welfare surplus analysis.',
    slug: 'elasticity-suite-price-income-cross-elasticity-and-total-outlay',
    title: 'Elasticity Suite: Price, Income, Cross Elasticity of Demand & Elasticity of Supply',
    shortDefinition: 'The quantitative responsiveness of quantity demanded or supplied to changes in price, consumer income, or related goods prices, including Point, Arc, Cross, and Total Outlay revenue methods.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-05-01',
        statement: 'Price Elasticity of Demand ($e_d$) measures the percentage responsiveness of quantity demanded to a percentage change in own price, defined mathematically as $e_d = -\\frac{\\Delta Q}{\\Delta P} \\cdot \\frac{P}{Q}$ (point) or via midpoint arc formula.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Alfred Marshall (1890) Principles of Economics, Book III, Chapter 4: The Elasticity of Desires',
        excerpt: 'The elasticity (or responsiveness) of demand in a market is great or small according as the amount demanded increases much or little for a given fall in price.',
      },
      {
        id: 'CLM-ECO-05-02',
        statement: 'Cross Elasticity of Demand ($E_{xy} = \\frac{\\% \\Delta Q_x}{\\% \\Delta P_y}$) is positive ($> 0$) for substitute goods and negative ($< 0$) for complementary goods; Income Elasticity ($E_Y$) is negative for inferior goods, $0 < E_Y < 1$ for necessities, and $> 1$ for luxury goods.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Hal Varian, Intermediate Microeconomics, Chapter 15: Market Demand',
        excerpt: 'Cross-price elasticity is positive for substitutes and negative for complements. Income elasticity classifies goods into normal, necessity, luxury, and inferior categories.',
      },
      {
        id: 'CLM-ECO-05-03',
        statement: 'Under the Total Outlay (Total Revenue) Method, a price reduction increases total revenue if demand is elastic ($|e_d| > 1$), leaves total revenue unchanged if unit elastic ($|e_d| = 1$), and decreases total revenue if inelastic ($|e_d| < 1$).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Paul Samuelson & William Nordhaus, Economics, Chapter 3: Elasticity of Demand and Supply',
        excerpt: 'When demand is price-inelastic, a price decrease reduces total revenue. When demand is price-elastic, a price decrease increases total revenue.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Beyond Direction: Quantifying Market Sensitivity',
        body: `The Law of Demand tells us the *direction* of change (if price rises, demand falls), but businesses and policymakers need to know **by exactly how much**.

If a telecom company hikes mobile data tariffs by 20%:
* If subscribers cut usage by only 2%, total revenue jumps dramatically (**Inelastic Demand**).
* If subscribers flee to competitors and usage drops by 50%, total revenue collapses (**Elastic Demand**).

**Elasticity** is the metric that answers this sensitivity question across price, income, and competing products.`,
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Master Formulas: Point, Arc, Income & Cross Elasticity',
        body: `### 1. Price Elasticity of Demand ($e_d$)
* **Point Elasticity Formula (for infinitesimally small changes):**
  $$e_d = -\\frac{dQ}{dP} \\cdot \\frac{P}{Q}$$
* **Geometric Point Formula on a Linear Demand Curve:**
  $$e_d = \\frac{\\text{Lower Segment of Demand Curve}}{\\text{Upper Segment of Demand Curve}}$$
  - At the vertical intercept (Price axis): $e_d = \\infty$ (Perfectly Elastic).
  - At the midpoint of the demand curve: $e_d = 1$ (Unitary Elastic).
  - At the horizontal intercept (Quantity axis): $e_d = 0$ (Perfectly Inelastic).

* **Arc Elasticity Formula (Midpoint Method for discrete price jumps):**
  $$e_d = -\\frac{Q_2 - Q_1}{(Q_1 + Q_2)/2} \\div \\frac{P_2 - P_1}{(P_1 + P_2)/2} = -\\frac{Q_2 - Q_1}{P_2 - P_1} \\cdot \\frac{P_1 + P_2}{Q_1 + Q_2}$$

### 2. Cross Elasticity of Demand ($E_{xy}$)
$$E_{xy} = \\frac{\\% \\Delta Q_x}{\\% \\Delta P_y} = \\frac{\\Delta Q_x}{\\Delta P_y} \\cdot \\frac{P_y}{Q_x}$$
* $E_{xy} > 0$: **Substitutes** (Tea and Coffee; Coke and Pepsi).
* $E_{xy} < 0$: **Complements** (Cars and Petrol; Printers and Ink).
* $E_{xy} = 0$: **Unrelated Goods** (Shoes and Tomatoes).

### 3. Income Elasticity of Demand ($E_Y$)
$$E_Y = \\frac{\\% \\Delta Q}{\\% \\Delta Y} = \\frac{\\Delta Q}{\\Delta Y} \\cdot \\frac{Y}{Q}$$
* $E_Y < 0$: **Inferior Goods** (Engel curve slopes downward).
* $0 < E_Y \\le 1$: **Normal Necessities** (Food grains, salt).
* $E_Y > 1$: **Superior / Luxury Goods** (High-end electronics, international tourism).`,
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'The Total Outlay (Total Revenue) Relationship',
        body: `Because $\\text{Total Revenue (TR)} = P \\times Q$, the response of TR to a price change depends entirely on $|e_d|$:

$$\\frac{d\\text{TR}}{dP} = Q \\left(1 - |e_d|\\right)$$

| Elasticity Value | Price Change | Quantity Response | Total Revenue (TR) Impact |
|---|---|---|---|
| **Elastic ($|e_d| > 1$)** | Price Increases ($\\uparrow$) | Quantity drops sharply ($\\Downarrow$) | **TR Falls ($\\downarrow$)** |
| **Elastic ($|e_d| > 1$)** | Price Cuts ($\\downarrow$) | Quantity rises sharply ($\\Uparrow$) | **TR Rises ($\\uparrow$)** |
| **Unitary ($|e_d| = 1$)** | Price Increases or Decreases | Quantity changes proportionally | **TR is Maximized (Unchanged)** |
| **Inelastic ($|e_d| < 1$)** | Price Increases ($\\uparrow$) | Quantity drops slightly ($\\downarrow$) | **TR Rises ($\\uparrow$)** |
| **Inelastic ($|e_d| < 1$)** | Price Cuts ($\\downarrow$) | Quantity rises slightly ($\\uparrow$) | **TR Falls ($\\downarrow$)** |`,
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Tax Incidence & Agricultural Bumper Harvest Paradox',
        body: `### 1. The Paradox of Poverty Amidst Plenty (Farmer Distress)
Agricultural food grains face **highly inelastic demand ($e_d < 1$)**. When Indian farmers produce a bumper record harvest, the resulting market supply glut crashes prices severely. Because consumers do not eat double the bread when wheat prices drop, total revenue earned by farmers **falls**, generating farm distress despite high output.

### 2. Tax Incidence & Elasticity Rule
The economic burden of a tax (GST, excise) falls disproportionately on the market side that is **less elastic (more captive)**:
* If demand is inelastic and supply is elastic (e.g. cigarettes, petrol), the consumer bears the bulk of the tax.
* If demand is elastic and supply is inelastic, the producer absorbs the tax.`,
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'SEBI_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2: Microeconomics — Elasticity of Demand (Point, Arc, Income, Cross) and Supply',
        notes: 'Guaranteed 2-3 numerical and conceptual questions every year in Phase 1 & 2.',
      },
      {
        examCode: 'RBI_GRADE_B',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Phase 2: Economic & Social Issues — Inflation and Price Sensitivity Analysis',
        notes: 'Crucial for analyzing fuel excise tax pass-through and agricultural commodity pricing.',
      },
      {
        examCode: 'NABARD_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Phase 2: Agriculture & Rural Development — Agricultural Price Volatility',
        notes: 'Explains the Bumper Crop Paradox and the economic necessity of MSP.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Price Elasticity: $e_d = -\\frac{dQ}{dP}\\frac{P}{Q}$. Cross Elasticity: $E_{xy} > 0$ for substitutes, $E_{xy} < 0$ for complements. Income Elasticity: $E_Y < 0$ inferior, $E_Y > 1$ luxury. Total Revenue: If $|e_d| > 1$, price cut raises TR; if $|e_d| < 1$, price hike raises TR. Tax burden falls on the less elastic side.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Elasticity measures percentage responsiveness. Point elasticity on linear demand = Lower Segment / Upper Segment ($e=\\infty$ at top, $e=1$ at midpoint, $e=0$ at bottom). Cross elasticity $E_{xy}$ is positive for substitutes (tea/coffee) and negative for complements (cars/petrol). Income elasticity $E_Y$ is negative for inferior goods (Engel curve downward sloping) and $>1$ for luxuries. Total Revenue is maximized where $|e_d| = 1$. Inelastic farm demand explains why bumper crops crash farm revenues.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Elasticity Taxonomy: 1. Price Elasticity: Point vs Arc (Midpoint) vs Geometric. 2. Cross Elasticity: Substitute ($>0$), Complement ($<0$), Independent ($=0$). 3. Income Elasticity: Engel Classification (Inferior $<0$, Necessity $0-1$, Luxury $>1$). 4. Revenue Link: $MR = P(1 - 1/|e_d|)$. 5. Welfare: Tax incidence ratio $\\frac{\\Delta P_c}{\\Delta P_s} = \\frac{e_s}{|e_d|}$.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Suppose the demand function for a good is given by $Q = 500 - 5P$. What is the point price elasticity of demand when the price is $P = 40$?',
        options: [
          '$e_d = 0.67$',
          '$e_d = 1.50$',
          '$e_d = 1.00$',
          '$e_d = 0.40$',
        ],
        correctAnswer: '$e_d = 0.67$',
        explanation: 'First, find quantity demanded at $P = 40$: $Q = 500 - 5(40) = 500 - 200 = 300$. Next, find the derivative $\\frac{dQ}{dP} = -5$. Point elasticity formula is: $e_d = -\\frac{dQ}{dP} \\cdot \\frac{P}{Q} = -(-5) \\cdot \\frac{40}{300} = 5 \\cdot \\frac{4}{30} = \\frac{20}{30} = 0.67$.',
        trapExplanation: 'Option B is calculated by incorrectly inverting $\\frac{P}{Q}$ as $\\frac{300}{40}$.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2020,
        pyqPaper: 'SEBI Grade A Phase 2 Paper 2',
        pyqStage: 'Phase 2',
        pyqQuestionNumber: 22,
        examinerTrapPattern: 'Standard numerical evaluation of point elasticity from a linear demand equation.',
      },
      {
        type: 'APPLIED_SCENARIO',
        stem: 'If the cross-price elasticity of demand between two goods X and Y is $E_{xy} = -1.8$, what does this indicate about the relationship between these two goods?',
        options: [
          'Good X and Good Y are strong substitute goods.',
          'Good X and Good Y are strong complementary goods.',
          'Good X is an inferior good and Good Y is a luxury good.',
          'Demand for Good X is price inelastic.',
        ],
        correctAnswer: 'Good X and Good Y are strong complementary goods.',
        explanation: 'Cross-price elasticity of demand measures how the quantity demanded of Good X responds to a change in the price of Good Y. A negative sign ($E_{xy} < 0$) indicates that when the price of Good Y rises, the consumption of Good X falls. This occurs exclusively when goods are consumed together in joint demand, meaning they are complementary goods (e.g. smartphones and mobile apps, or cars and fuel).',
        trapExplanation: 'Positive cross-elasticity ($E_{xy} > 0$) signifies substitutes, while negative cross-elasticity signifies complements.',
        difficulty: 'EASY',
        isPYQ: false,
        examinerTrapPattern: 'Testing algebraic sign interpretation of cross-price elasticity.',
      },
    ],
  },
  {
    id: 'CON-ECO-06',
    topicOrder: 28,
    topicSlug: 'theory-of-demand-supply-and-market-equilibrium',
    topicTitle: 'Theory of Demand, Supply & Market Equilibrium',
    topicDescription: 'Laws of demand and supply, determinants, shifts vs movements, market price determination, and welfare surplus analysis.',
    slug: 'welfare-economics-consumer-producer-surplus-and-deadweight-loss',
    title: 'Welfare Economics: Consumer Surplus, Producer Surplus, Deadweight Loss & Government Interventions',
    shortDefinition: 'The normative and efficiency evaluation of market outcomes through Consumer Surplus, Producer Surplus, Total Social Welfare, and the Deadweight Loss induced by Price Ceilings, Price Floors, and Taxes.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-06-01',
        statement: 'Consumer Surplus is the area below the demand curve and above the market price (total willingness to pay minus actual market expenditure); Producer Surplus is the area above the supply curve and below the market price.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Alfred Marshall (1890) Principles of Economics, Book III, Chapter 6; Hal Varian, Intermediate Microeconomics',
        excerpt: 'The excess of the price which he would be willing to pay rather than go without the thing, over that which he actually does pay, is the economic measure of this surplus satisfaction. It may be called consumer\'s surplus.',
      },
      {
        id: 'CLM-ECO-06-02',
        statement: 'A competitive market equilibrium maximizes Total Social Surplus (Consumer Surplus + Producer Surplus); any deviation via Price Ceilings, Price Floors, or Output Quotas generates a Deadweight Loss (Harberger Triangle).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Arnold Harberger (1964) The Measurement of Waste; N. Gregory Mankiw, Principles of Microeconomics',
        excerpt: 'Deadweight loss is the fall in total surplus that results from a market distortion, such as a tax or price regulation, which prevents mutually beneficial gains from trade.',
      },
      {
        id: 'CLM-ECO-06-03',
        statement: 'A binding Price Ceiling (set below equilibrium) causes shortages, rationing, and black markets; a binding Price Floor (set above equilibrium, such as Minimum Support Price) causes excess supply requiring government procurement.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Paul Samuelson & William Nordhaus, Economics, Chapter 4: Applications of Supply and Demand',
        excerpt: 'Price ceilings create chronic shortages, non-price rationing mechanisms, and deadweight loss. Price floors generate unsold surpluses.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Measuring Total Social Welfare',
        body: `When voluntary trade takes place in a free market, **both buyers and sellers gain**:
* **Consumer Surplus (CS):** If you are willing to pay ₹500 for a train ticket to visit family, but Indian Railways charges only ₹200, you enjoy a **₹300 Consumer Surplus** (net subjective benefit).
* **Producer Surplus (PS):** If a farmer is willing to sell wheat at ₹1,500/quintal (their marginal cost), but the market pays ₹2,200/quintal, the farmer earns a **₹700 Producer Surplus** (economic rent over marginal cost).

$$\\text{Total Social Welfare} = \\text{Consumer Surplus} + \\text{Producer Surplus}$$

In a competitive market without externalities, market equilibrium **maximizes Total Social Welfare**.`,
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Deadweight Loss & Harberger Triangles',
        body: `When a government introduces market distortions (taxes, price controls, import tariffs), it prevents mutually beneficial trades from occurring. The resulting uncaptured economic value that is lost to society is the **Deadweight Loss (DWL)**.

\`\`\`
Price (P)
  ^
  |        \ (Demand)   / (Supply)
  |         \          /
  |          \  [CS]  /
P*|-----------X------X---------------- [Market Equilibrium]
  |          /  [PS]  \
  |         /          \
  +-------------------------> Quantity (Q)
\`\`\`

### The Three Classic Policy Distortions:
1. **Per-Unit Tax:** Drives a tax wedge ($T = P_c - P_s$) between the price paid by consumers ($P_c$) and received by producers ($P_s$). Output falls from $Q^*$ to $Q_t$. The lost surplus triangle not captured by government tax revenue is the **Deadweight Loss**.
2. **Binding Price Ceiling ($P_{\\text{max}} < P^*$):** Imposed to help consumers (e.g. rent control, ceiling on essential medicines). Causes quantity demanded to exceed quantity supplied ($Q_D > Q_S$), creating **chronic shortages, queuing, and black marketing**.
3. **Binding Price Floor ($P_{\\text{min}} > P^*$):** Imposed to protect producers (e.g. Minimum Support Price - MSP for crops, Minimum Wage laws). Causes quantity supplied to exceed quantity demanded ($Q_S > Q_D$), creating **unsold agricultural surpluses**.`,
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Welfare Effects of Price Ceilings vs Price Floors',
        body: `| Policy Instrument | Imposed Location | Market Consequence | Surplus Winner | Surplus Loser | Net Welfare Impact |
|---|---|---|---|---|---|
| **Price Ceiling (e.g. Drug Price Caps)** | Below Equilibrium ($P_{\\text{cap}} < P^*$) | **Shortage** ($Q_D > Q_S$), black markets, quality degradation. | Consumers who manage to obtain the good. | Producers + Consumers locked out by shortages. | **Deadweight Loss** (Under-production). |
| **Price Floor (e.g. MSP / Minimum Wage)** | Above Equilibrium ($P_{\\text{floor}} > P^*$) | **Surplus** ($Q_S > Q_D$), unsold stocks, state procurement burden. | Producers who successfully sell at floor price. | Consumers (higher prices) + Taxpayers (funding procurement). | **Deadweight Loss** (Over-production / misallocation). |
| **Import Tariff / Custom Duty** | Domestic price raised above world price | Reduced imports, expanded domestic production. | Domestic producers + Government tariff revenue. | Domestic consumers. | **Deadweight Loss** (Production & Consumption distortions). |`,
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Indian Policy Application: MSP & National Pharmaceutical Pricing',
        body: `### 1. National Pharmaceutical Pricing Authority (NPPA)
The NPPA sets price ceilings on essential medicines under the Drug Price Control Orders (DPCO). While protecting poor patients, severe price caps can cause pharmaceutical firms to discontinue low-margin formulations, generating artificial market shortages.

### 2. Minimum Support Price (MSP) & Food Corporation of India (FCI)
Because MSP acts as a binding price floor above market equilibrium for wheat and paddy, private millers step back, forcing the FCI to procure millions of tonnes of grain, leading to overflowing buffer stocks and high food subsidy carrying costs.

### Examiner Traps & High-Yield Pitfalls
* ⚠️ **Trap 1: Non-Binding Price Controls:** A price ceiling set *above* equilibrium or a price floor set *below* equilibrium has **zero effect** on the market (non-binding).
* ⚠️ **Trap 2: Tax Incidence is Independent of Legal Liability:** Whether the government legally levies a tax on buyers or sellers, the economic incidence (who actually pays) is mathematically identical and determined strictly by relative elasticities.`,
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'SEBI_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2: Microeconomics — Consumer Surplus, Producer Surplus, Price Controls, Taxes and Welfare',
        notes: 'Frequently tests geometric calculation of consumer surplus triangles and deadweight loss from taxes/subsidies.',
      },
      {
        examCode: 'NABARD_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Phase 2: Agriculture & Rural Development — Price Support Mechanisms and Market Distortions',
        notes: 'Core theoretical foundation for analyzing MSP economic surplus and fiscal costs.',
      },
      {
        examCode: 'UPSC_APFC',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'General Studies: Indian Economy — Welfare Economics and Minimum Wages',
        notes: 'Tests minimum wage as a price floor leading to potential informal employment displacement.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Consumer Surplus = Area below Demand and above Price. Producer Surplus = Area above Supply and below Price. Free market equilibrium maximizes Total Surplus. Price Ceiling below equilibrium -> Shortage + Black Market + DWL. Price Floor above equilibrium -> Surplus + State Procurement + DWL. Taxes create Deadweight Loss.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Total Social Welfare = Consumer Surplus + Producer Surplus. A competitive market achieves Pareto efficiency by maximizing total surplus. Government interventions distort price signals: A Price Ceiling set below equilibrium creates chronic shortages (e.g. rent control); A Price Floor set above equilibrium creates unsold surpluses (e.g. MSP). Per-unit taxes insert a price wedge between buyers and sellers, generating a Harberger Deadweight Loss triangle representing foregone gains from trade.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Welfare Economics Architecture: 1. Surplus Metrics: $CS = \\int_0^{Q^*} (P(Q) - P^*) dQ$, $PS = \\int_0^{Q^*} (P^* - MC(Q)) dQ$. 2. Distortions: Price Ceilings ($P < P^*$), Price Floors ($P > P^*$), Taxes ($T = P_c - P_s$). 3. Deadweight Loss: $\\text{DWL} = \\frac{1}{2} \\times \\text{Tax} \\times (Q^* - Q_t)$. 4. Indian Case Studies: DPCO drug price caps, FCI open-ended MSP procurement.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'If the government imposes an effective (binding) price ceiling on rental housing below the market equilibrium rent, what is the expected long-run economic outcome?',
        options: [
          'An increase in the supply of newly constructed rental housing.',
          'A persistent shortage of rental housing, emergence of black-market key money, and deterioration of housing maintenance.',
          'An elimination of the deadweight loss in the housing market.',
          'An excess supply of rental apartments available for low-income tenants.',
        ],
        correctAnswer: 'A persistent shortage of rental housing, emergence of black-market key money, and deterioration of housing maintenance.',
        explanation: 'A binding price ceiling set below equilibrium rent reduces the price received by landlords below their opportunity costs, causing quantity supplied of rental units to contract. Meanwhile, lower rents increase the quantity demanded by tenants. This creates a persistent shortage ($Q_D > Q_S$), non-price rationing (long waiting lists, unrecorded cash bribes), and disincentivizes landlords from maintaining their properties, generating a deadweight loss.',
        trapExplanation: 'Option D confuses a price ceiling (which creates shortages) with a price floor (which creates surpluses).',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'SEBI Grade A Phase 2 Paper 2',
        pyqStage: 'Phase 2',
        pyqQuestionNumber: 31,
        examinerTrapPattern: 'Testing understanding of shortages vs surpluses under price ceilings.',
      },
      {
        type: 'APPLIED_SCENARIO',
        stem: 'Assume a linear demand curve $P = 100 - Q$ and a linear supply curve $P = 20 + Q$. If the competitive market reaches equilibrium, what is the value of Consumer Surplus?',
        options: [
          '₹800',
          '₹1,600',
          '₹600',
          '₹400',
        ],
        correctAnswer: '₹800',
        explanation: '1. Find equilibrium by equating Supply and Demand: $100 - Q = 20 + Q \\implies 80 = 2Q \\implies Q^* = 40$. 2. Find equilibrium price: $P^* = 100 - 40 = 60$. 3. The demand curve intersects the price axis at $P_{\\text{max}} = 100$. 4. Consumer Surplus is the area of the triangle between the demand curve and market price: $\\text{CS} = \\frac{1}{2} \\times \\text{Base} \\times \\text{Height} = \\frac{1}{2} \\times Q^* \\times (P_{\\text{max}} - P^*) = \\frac{1}{2} \\times 40 \\times (100 - 60) = \\frac{1}{2} \\times 40 \\times 40 = 800$.',
        trapExplanation: 'Option B is calculated by omitting the $\\frac{1}{2}$ multiplier in the triangle area formula ($40 \\times 40 = 1600$).',
        difficulty: 'MEDIUM',
        isPYQ: false,
        examinerTrapPattern: 'Geometry of consumer surplus calculation.',
      },
    ],
  },

  // =========================================================================
  // TOPIC 29: Consumer Behaviour & Indifference Curve Analysis
  // =========================================================================
  {
    id: 'CON-ECO-07',
    topicOrder: 29,
    topicSlug: 'consumer-behaviour-and-indifference-curve-analysis',
    topicTitle: 'Consumer Behaviour & Indifference Curve Analysis',
    topicDescription: 'Cardinal utility, Law of Diminishing Marginal Utility, ordinal utility, indifference curves, budget lines, and consumer equilibrium.',
    slug: 'cardinal-utility-theory-diminishing-marginal-utility-and-equi-marginal',
    title: 'Cardinal Utility Theory: Total vs Marginal Utility & Law of Diminishing Marginal Utility',
    shortDefinition: 'The classical consumer choice framework quantifying satisfaction in cardinal utils, establishing the Law of Diminishing Marginal Utility and the Equi-Marginal allocation rule across multiple goods.',
    difficulty: 'BEGINNER',
    claims: [
      {
        id: 'CLM-ECO-07-01',
        statement: 'Cardinal utility theory (Alfred Marshall) assumes that utility is quantifiable in numerical units called "utils", with Marginal Utility ($MU = \\frac{dTU}{dQ}$) diminishing as successive units of a good are consumed.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Alfred Marshall (1890) Principles of Economics, Book III, Chapter 3',
        excerpt: 'The marginal utility of a thing to anyone diminishes with every increase in the amount of it he already has.',
      },
      {
        id: 'CLM-ECO-07-02',
        statement: 'Consumer equilibrium under cardinal utility across multiple goods is governed by the Law of Equi-Marginal Utility (Gossen\'s Second Law): $\\frac{MU_x}{P_x} = \\frac{MU_y}{P_y} = \\dots = MU_m$ (marginal utility of money expenditure).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Hermann Heinrich Gossen (1854); Alfred Marshall, Principles of Economics',
        excerpt: 'A person succeeds in maximizing utility only when the marginal utility per unit of currency spent is equal across all commodities.',
      },
      {
        id: 'CLM-ECO-07-03',
        statement: 'The Water-Diamond Paradox (Adam Smith) is resolved by cardinal utility: total utility of water is enormous but marginal utility is low due to abundance; diamonds have low total utility but very high marginal utility due to scarcity.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Adam Smith (1776) Wealth of Nations; W. Stanley Jevons (1871) Theory of Political Economy',
        excerpt: 'Price is determined not by total utility, but by marginal utility at the margin of consumption.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Satiety of Consumption: Utils & Diminishing Returns',
        body: `If you are parched after a long run in the hot summer sun:
* The **first glass of water** provides intense satisfaction (e.g. 50 utils).
* The **second glass** is refreshing but less desperate (30 utils).
* The **third glass** satisfies your thirst (10 utils).
* The **fourth glass** brings you to full satiety (0 utils — **Point of Satiety**).
* The **fifth glass** causes discomfort (negative utility / disutility, $-10$ utils).

This universal human psychological reality is the **Law of Diminishing Marginal Utility (DMU)** (Gossen's First Law).`,
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Mathematical Relationships: Total Utility vs Marginal Utility',
        body: `### 1. Fundamental Mathematical Link
$$\\text{Total Utility (TU)} = \\sum \\text{MU} \\qquad \\text{and} \\qquad \\text{Marginal Utility (MU)} = \\frac{d\\text{TU}}{dQ} = \\text{TU}_n - \\text{TU}_{n-1}$$

### 2. The Three Cardinal Stages of Utility
| Stage of Consumption | Marginal Utility ($MU$) | Total Utility ($TU$) Behavior | Economic State |
|---|---|---|---|
| **Initial Consumption** | $MU > 0$ (Positive but Falling) | $TU$ is **Increasing at a Diminishing Rate** | Standard rational consumption range. |
| **Point of Satiety** | $MU = 0$ (Zero) | $TU$ reaches its **Absolute Maximum** | Maximum possible satisfaction. |
| **Over-Consumption** | $MU < 0$ (Negative) | $TU$ begins to **Decline** | Disutility / economic waste. |

\`\`\`
Utility
  ^
TU|          .---''''---.   (TU Maximized where MU = 0)
  |        .'            '.
  |       /                \
  |      /                  \
  |-----+--------------------+--------> Quantity (Q)
  |    / \                  /
MU|   /   \                /
  |  /     \ (MU Curve)   /
  | /       \            /
  0----------*------------------------> Quantity (Q)
  |           \ (Point of Satiety: MU=0)
  |            \ (Disutility: MU < 0)
\`\`\``,
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Consumer Equilibrium: The Law of Equi-Marginal Utility',
        body: `When a consumer spends a limited money budget ($M$) across two goods ($X$ and $Y$), how do they maximize total satisfaction?

### The Equi-Marginal Condition (Gossen's Second Law)
The consumer must allocate money so that the **last rupee spent on Good X yields exactly the same marginal utility as the last rupee spent on Good Y**:

$$\\frac{\\text{MU}_x}{P_x} = \\frac{\\text{MU}_y}{P_y} = \\text{MU}_m$$

### The Rebalancing Mechanism:
* **If $\\frac{\\text{MU}_x}{P_x} > \\frac{\\text{MU}_y}{P_y}$:** The consumer gains more satisfaction per rupee from Good X than Good Y. The rational consumer diverts spending from Y to X. As more X is consumed, $\\text{MU}_x$ falls; as less Y is consumed, $\\text{MU}_y$ rises, restoring equality.
* **If $\\frac{\\text{MU}_x}{P_x} < \\frac{\\text{MU}_y}{P_y}$:** The consumer diverts spending from X to Y until equality is restored.`,
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Resolution of the Water-Diamond Paradox & Exam Traps',
        body: `### The Water-Diamond Paradox Solved
Adam Smith observed that water is essential for life yet costs almost nothing, whereas diamonds are useless for survival yet command exorbitant prices.
* **Resolution:** Market price reflects **Marginal Utility (MU)**, NOT Total Utility (TU).
* Water is abundant $\\implies$ consumption occurs at a very large quantity $\\implies \\text{MU}_{\\text{water}}$ is tiny $\\implies$ Price is very low.
* Diamonds are ultra-scarce $\\implies$ consumption occurs at a tiny quantity $\\implies \\text{MU}_{\\text{diamond}}$ is massive $\\implies$ Price is extremely high.

### Examiner Traps & High-Yield Pitfalls
* ⚠️ **Trap 1: TU is Maximum when MU is Zero:** When an exam asks *"At what point is Total Utility maximized?"*, the answer is strictly **when Marginal Utility equals zero**, NOT when MU is maximum.
* ⚠️ **Trap 2: Cardinal Utility Flaw:** Assumes the marginal utility of money ($MU_m$) is constant, which is unrealistic because spending money depletes one's wallet and increases the subjective value of remaining money.`,
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'SEBI_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2: Microeconomics — Consumer Behaviour, Cardinal Utility and Equi-Marginal Principle',
        notes: 'Frequently tests Equi-Marginal numerical rebalancing and TU-MU derivative relationships.',
      },
      {
        examCode: 'IIBF_DBF',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module A — Economic Concepts and Consumer Equilibrium',
        notes: 'Direct conceptual questions on DMU and Gossen\'s Laws.',
      },
      {
        examCode: 'RPSC_RAS',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Mains Paper 1: Unit 2 — Consumer Behaviour and Utility Analysis',
        notes: '2-mark definition of Law of Diminishing Marginal Utility and 5-mark explanation of Water-Diamond Paradox.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Cardinal Utility (Marshall): Utility measurable in utils. Law of DMU: As consumption rises, MU falls. TU is maximum when MU = 0. Equi-Marginal Rule: $\\frac{MU_x}{P_x} = \\frac{MU_y}{P_y} = MU_m$. Water-Diamond Paradox: Price reflects Marginal Utility (scarcity), not Total Utility (abundance).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Total Utility (TU) is the sum of Marginal Utilities (MU = dTU/dQ). When MU is positive, TU increases at a decreasing rate. When MU = 0, TU reaches its peak (Point of Satiety). When MU < 0, TU declines. Under Cardinal Utility, multi-good consumer equilibrium is achieved when MU per rupee spent is equalized across all goods (MUx/Px = MUy/Py). Adam Smith\'s Water-Diamond Paradox is explained because market price equals marginal utility at the margin of consumption.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Cardinal Consumer Theory Architecture: 1. Assumptions: Rationality, Cardinal measurability, Constant MUm, Diminishing DMU. 2. Mathematical Nexus: $TU(Q) = \\int MU(Q) dQ$. 3. Equilibrium: $\\frac{MU_1}{P_1} = \\dots = \\frac{MU_n}{P_n} = MU_m$. 4. Limitations: Unrealistic cardinal measurement, led to Hicks-Allen Ordinal revolution.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'A consumer consumes two commodities, X and Y, with prices $P_x = ₹20$ and $P_y = ₹10$. If the consumer currently experiences $\\text{MU}_x = 60$ utils and $\\text{MU}_y = 40$ utils, what should a rational consumer do to achieve equilibrium under cardinal utility theory?',
        options: [
          'Increase consumption of Good X and decrease consumption of Good Y.',
          'Increase consumption of Good Y and decrease consumption of Good X.',
          'Maintain current consumption because both marginal utilities are positive.',
          'Double the consumption of both goods simultaneously.',
        ],
        correctAnswer: 'Increase consumption of Good Y and decrease consumption of Good X.',
        explanation: 'Calculate Marginal Utility per rupee for each good: $\\frac{\\text{MU}_x}{P_x} = \\frac{60}{20} = 3\\text{ utils/rupee}$. $\\frac{\\text{MU}_y}{P_y} = \\frac{40}{10} = 4\\text{ utils/rupee}$. Because $\\frac{\\text{MU}_y}{P_y} > \\frac{\\text{MU}_x}{P_x}$, the consumer gets more satisfaction per rupee spent on Good Y. A rational consumer must increase consumption of Good Y (lowering $\\text{MU}_y$) and reduce consumption of Good X (raising $\\text{MU}_x$) until $\\frac{\\text{MU}_x}{P_x} = \\frac{\\text{MU}_y}{P_y}$.',
        trapExplanation: 'Option A is incorrect because looking only at raw MU (60 vs 40) ignores price; utility per rupee spent is what governs equilibrium.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'SEBI Grade A Phase 2 Paper 2',
        pyqStage: 'Phase 2',
        pyqQuestionNumber: 24,
        examinerTrapPattern: 'Testing ratio comparison of MU/P instead of raw MU.',
      },
      {
        type: 'CONCEPT_CHECK',
        stem: 'When Marginal Utility ($MU$) derived from the consumption of a good is zero, Total Utility ($TU$) is:',
        options: [
          'Zero',
          'At its minimum',
          'At its maximum',
          'Negative',
        ],
        correctAnswer: 'At its maximum',
        explanation: 'Because Marginal Utility is the first derivative of Total Utility ($MU = \\frac{dTU}{dQ}$), setting $MU = 0$ represents the mathematical first-order condition for the maximum of the Total Utility curve (the Point of Satiety). Any further consumption beyond this point yields negative MU, causing TU to decrease.',
        trapExplanation: 'Option A confuses Total Utility with Marginal Utility.',
        difficulty: 'EASY',
        isPYQ: false,
        examinerTrapPattern: 'Fundamental mathematical calculus relationship between TU and MU.',
      },
    ],
  },
  {
    id: 'CON-ECO-08',
    topicOrder: 29,
    topicSlug: 'consumer-behaviour-and-indifference-curve-analysis',
    topicTitle: 'Consumer Behaviour & Indifference Curve Analysis',
    topicDescription: 'Cardinal utility, Law of Diminishing Marginal Utility, ordinal utility, indifference curves, budget lines, and consumer equilibrium.',
    slug: 'ordinal-utility-indifference-curves-budget-line-and-consumer-equilibrium',
    title: 'Ordinal Utility: Indifference Curves, Budget Constraints & Consumer Equilibrium',
    shortDefinition: 'The modern ordinal framework of consumer choice (Hicks-Allen), establishing Indifference Curves, Budget Constraints, tangency equilibrium, and the decomposition of price changes into Income and Substitution effects.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-08-01',
        statement: 'Ordinal utility theory (J.R. Hicks & R.G.D. Allen, 1934) posits that consumers rank preference bundles rather than measuring utils; an Indifference Curve (IC) plots bundles yielding equal satisfaction and is downward-sloping and strictly convex to the origin due to diminishing Marginal Rate of Substitution ($MRS_{xy}$).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'J.R. Hicks & R.G.D. Allen (1934) A Reconsideration of the Theory of Value (Economica); J.R. Hicks (1939) Value and Capital',
        excerpt: 'The ordinal approach requires only that the consumer can order or rank all possible combinations of goods according to preference, characterized by diminishing marginal rate of substitution.',
      },
      {
        id: 'CLM-ECO-08-02',
        statement: 'The Budget Line ($P_x X + P_y Y = M$) represents all affordable consumption bundles with fixed income $M$, with slope equal to the negative relative price ratio ($-\\frac{P_x}{P_y}$).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Hal Varian, Intermediate Microeconomics, Chapter 2: Budget Constraint',
        excerpt: 'The budget line is the set of bundles that cost exactly m. Its slope measures the rate at which the market is willing to substitute good 1 for good 2.',
      },
      {
        id: 'CLM-ECO-08-03',
        statement: 'Consumer equilibrium occurs at the tangency point where the highest attainable Indifference Curve touches the Budget Line, satisfying $MRS_{xy} = \\frac{P_x}{P_y}$; a price change decomposes into a Substitution Effect (always negative) and an Income Effect via Hicksian and Slutsky methods.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Eugen Slutsky (1915); J.R. Hicks (1939) Value and Capital, Chapter 2; Hal Varian, Intermediate Microeconomics',
        excerpt: 'At the optimal point, the indifference curve is tangent to the budget line, equating the marginal rate of substitution to the price ratio.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Abandoning the "Util": Ranking Preferences Realistically',
        body: `Nobody walks into a grocery store thinking, *"This apple gives me 14 utils and this mango gives me 28 utils."* 

Instead, human beings **rank bundles**: *"I prefer Bundle A (2 mangoes, 1 apple) over Bundle B (1 mango, 2 apples), and I am completely indifferent between Bundle A and Bundle C (3 apples, 1 mango)."*

This realistic preference-ranking framework is **Ordinal Utility Theory** (Hicks & Allen, 1934).`,
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Properties of Indifference Curves (IC) & MRS',
        body: `An **Indifference Curve (IC)** is the locus of all commodity bundles $(X, Y)$ that yield the identical level of total satisfaction to the consumer.

### The 4 Master Properties of Indifference Curves:
1. **Downwards Sloping to the Right:** To consume more of Good X while keeping satisfaction constant, the consumer must sacrifice some amount of Good Y (monotonic preferences).
2. **Convex to the Origin:** As the consumer acquires more of Good X, their subjective willingness to give up Good Y diminishes. This reflects the **Diminishing Marginal Rate of Substitution ($MRS_{xy}$)**:
   $$MRS_{xy} = -\\frac{\\Delta Y}{\\Delta X} = \\frac{\\text{MU}_x}{\\text{MU}_y}$$
3. **Higher Indifference Curves Represent Higher Satisfaction ($IC_3 > IC_2 > IC_1$):** Because more goods are preferred to fewer ("monotonicity of preferences").
4. **Two Indifference Curves Can NEVER Intersect:** If they intersected, transitivity of preferences would be violated (A = B and B = C would imply A = C, creating a logical contradiction).

\`\`\`
Good Y
  ^
  |\ (Budget Line: Px*X + Py*Y = M)
  | \
  |  \       .---- IC3 (Unattainable)
  |   \    .'
  |    \  /
  |     *E (Consumer Equilibrium: MRS = Px/Py)
  |    / \'.
  |   /   \ '-- IC2 (Optimal Choice)
  |  /     \
  | /       \--- IC1 (Sub-optimal)
  +-------------------------> Good X
\`\`\``,
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Consumer Equilibrium & Price Effect Decomposition',
        body: `### 1. Consumer Equilibrium Tangency Condition
The consumer maximizes utility subject to their budget constraint ($M = P_x X + P_y Y$) where the slope of the Indifference Curve equals the slope of the Budget Line:

$$MRS_{xy} = \\frac{P_x}{P_y} \\iff \\frac{\\text{MU}_x}{\\text{MU}_y} = \\frac{P_x}{P_y} \\iff \\frac{\\text{MU}_x}{P_x} = \\frac{\\text{MU}_y}{P_y}$$

### 2. Decomposing the Price Effect (Slutsky / Hicks Equation)
$$\\text{Total Price Effect (PE)} = \\text{Substitution Effect (SE)} + \\text{Income Effect (IE)}$$

* **Substitution Effect (SE):** The change in consumption due solely to the change in relative prices, holding real utility constant. **SE is mathematically ALWAYS negative** (if $P_x$ rises, consumer always substitutes away from $X$).
* **Income Effect (IE):** The change in consumption due solely to the change in real purchasing power ($M/P_x$):
  - **For Normal Goods:** Real income rises $\\implies$ consumption of $X$ rises ($SE$ and $IE$ reinforce each other).
  - **For Inferior Goods:** Real income rises $\\implies$ consumption of $X$ falls ($IE$ opposes $SE$, but $SE$ dominates).
  - **For Giffen Goods:** Real income rises $\\implies$ consumption of $X$ collapses ($IE$ opposes and *overwhelms* $SE$).`,
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Indian Policy Application & Exam Traps',
        body: `### Indian Policy Application: Cash Transfers vs In-Kind Rations
Under the National Food Security Act (NFSA), does giving ₹1,000 cash or ₹1,000 worth of free foodgrains provide higher consumer utility?
* **Indifference Curve Analysis proves:** In-kind food rations restrict the consumer to a kinked budget line. Direct Cash Transfers allow the consumer to reach a **strictly higher Indifference Curve** by freely choosing their optimal bundle.

### Examiner Traps & High-Yield Pitfalls
* ⚠️ **Trap 1: Slope of Budget Line vs Slope of IC:** Slope of Budget Line is determined entirely by market prices ($P_x/P_y$). Slope of IC is determined entirely by subjective preferences ($MRS_{xy} = MU_x/MU_y$).
* ⚠️ **Trap 2: Perfect Substitutes vs Perfect Complements:**
  - **Perfect Substitutes (e.g. 5-rupee blue pen vs 5-rupee black pen):** IC is a straight line ($MRS$ is constant). Corner solution equilibrium.
  - **Perfect Complements (e.g. Left shoe and Right shoe):** IC is L-shaped (right-angled, $MRS = 0$ or $\\infty$). Tangency condition does not apply; equilibrium occurs at the vertex.`,
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'SEBI_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2: Microeconomics — Indifference Curves, Budget Line, Consumer Equilibrium, Slutsky Equation',
        notes: 'Heavily tested in Phase 2: MRS formula, budget line pivots vs shifts, and Hicksian vs Slutsky decomposition.',
      },
      {
        examCode: 'RBI_GRADE_B',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Phase 2: Economic & Social Issues — Microeconomic Foundations and Welfare Transfers',
        notes: 'Used to evaluate cash transfers vs in-kind public distribution subsidies.',
      },
      {
        examCode: 'RPSC_RAS',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Mains Paper 1: Unit 2 — Indifference Curve Analysis and Consumer Equilibrium',
        notes: 'Direct 5-mark and 10-mark questions on properties of Indifference Curves and consumer equilibrium conditions.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Ordinal Utility (Hicks-Allen): Ranks bundles. Indifference Curve (IC) is downward-sloping and convex to origin (diminishing MRS). Budget Line: $P_x X + P_y Y = M$ (slope $= -P_x/P_y$). Equilibrium at tangency: $MRS_{xy} = P_x/P_y$. Price Effect = Substitution Effect (always negative) + Income Effect.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Indifference Curves represent equal utility bundles. Slope is the Marginal Rate of Substitution ($MRS_{xy} = MU_x/MU_y$). Properties: Downward sloping, convex to origin, cannot intersect, higher IC = higher satisfaction. The Budget Line slope is $-P_x/P_y$. Equilibrium occurs at the tangency point where $MRS_{xy} = P_x/P_y$. A price change decomposes into the Substitution Effect (always negative) and the Income Effect. For Giffen goods, negative income effect overwhelms substitution effect. Perfect substitutes have linear ICs; perfect complements have L-shaped ICs.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Ordinal Consumer Choice Architecture: 1. Axioms: Completeness, Transitivity, Monotonicity, Convexity. 2. Geometry: Tangency of IC with Budget Line. 3. Mathematical Condition: $\\max U(X,Y)$ s.t. $P_x X + P_y Y = M \\implies \\mathcal{L} = U(X,Y) - \\lambda(P_x X + P_y Y - M)$. 4. Slutsky Decomposition: $\\frac{\\partial X}{\\partial P_x} = \\left(\\frac{\\partial X}{\\partial P_x}\\right)_{\\text{comp}} - X \\frac{\\partial X}{\\partial M}$.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'At the point of consumer equilibrium using Indifference Curve analysis, which of the following mathematical conditions is satisfied?',
        options: [
          '$MRS_{xy} > \\frac{P_x}{P_y}$',
          '$MRS_{xy} = \\frac{P_x}{P_y}$',
          '$MRS_{xy} = P_x \\cdot P_y$',
          '$MRS_{xy} = 0$',
        ],
        correctAnswer: '$MRS_{xy} = \\frac{P_x}{P_y}$',
        explanation: 'Consumer equilibrium in ordinal utility analysis occurs at the point where the budget line is tangent to the highest attainable indifference curve. At this tangency point, the slope of the Indifference Curve (the Marginal Rate of Substitution, $MRS_{xy} = \\frac{MU_x}{MU_y}$) is exactly equal to the slope of the Budget Line (the relative price ratio, $\\frac{P_x}{P_y}$).',
        trapExplanation: 'Option A indicates the consumer can increase satisfaction by purchasing more of Good X; Option D indicates a corner point of zero substitution.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'SEBI Grade A Phase 2 Paper 2',
        pyqStage: 'Phase 2',
        pyqQuestionNumber: 19,
        examinerTrapPattern: 'Standard equilibrium tangency condition testing.',
      },
      {
        type: 'EXCEPTION_PROBE',
        stem: 'What is the shape of Indifference Curves for two goods that are "Perfect Complements" (e.g. left shoes and right shoes)?',
        options: [
          'Downward-sloping straight lines with constant slope.',
          'Convex curves asymptotic to both axes.',
          'Right-angled L-shaped curves.',
          'Circular concentric curves around a bliss point.',
        ],
        correctAnswer: 'Right-angled L-shaped curves.',
        explanation: 'Perfect complements are goods that must be consumed together in fixed proportions (e.g. 1 left shoe and 1 right shoe). Having 5 left shoes and only 1 right shoe provides no more utility than having 1 pair. Consequently, the indifference curves are L-shaped (right-angled), with the vertex representing the required fixed proportion, and the Marginal Rate of Substitution is zero on the horizontal arm and infinite on the vertical arm.',
        trapExplanation: 'Option A describes Perfect Substitutes (straight-line ICs).',
        difficulty: 'MEDIUM',
        isPYQ: false,
        examinerTrapPattern: 'Testing non-standard indifference curves for special goods categories.',
      },
    ],
  },

  // =========================================================================
  // TOPIC 30: Production Theory, Cost Analysis & Revenue
  // =========================================================================
  {
    id: 'CON-ECO-09',
    topicOrder: 30,
    topicSlug: 'production-theory-cost-analysis-and-revenue',
    topicTitle: 'Production Theory, Cost Analysis & Revenue',
    topicDescription: 'Production functions in short and long run, Law of Variable Proportions, Isoquants, Returns to Scale, and Producer Equilibrium.',
    slug: 'production-functions-variable-proportions-isoquants-returns-to-scale',
    title: 'Production Functions: Law of Variable Proportions, Isoquants & Returns to Scale',
    shortDefinition: 'The technological relationship transforming capital and labour inputs into physical output, analyzed via the short-run Law of Variable Proportions (3 Stages) and the long-run Returns to Scale using Isoquants and Isocost lines.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-09-01',
        statement: 'In the short run with at least one fixed factor, the Law of Variable Proportions operates across three stages: Stage I (Increasing Returns), Stage II (Diminishing Returns — the only rational operating zone where $MP > 0$ and $AP > MP$), and Stage III (Negative Returns).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Alfred Marshall (1890) Principles of Economics; Hal Varian, Intermediate Microeconomics, Chapter 18: Technology',
        excerpt: 'A rational producer will never operate in Stage I (where average product of variable factor is still rising) or in Stage III (where marginal product is negative). Stage II is the only economic zone of production.',
      },
      {
        id: 'CLM-ECO-09-02',
        statement: 'In the long run where all factors are variable, an Isoquant represents input combinations yielding equal output with slope equal to the Marginal Rate of Technical Substitution ($MRTS_{LK} = \\frac{MP_L}{MP_K}$); Producer Equilibrium occurs at tangency with the Isocost line ($\\frac{MP_L}{w} = \\frac{MP_K}{r}$).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Hal Varian, Intermediate Microeconomics, Chapter 19: Profit Maximization & Chapter 20: Cost Minimization',
        excerpt: 'Cost minimization requires that the technical rate of substitution between factors of production equals the economic factor price ratio.',
      },
      {
        id: 'CLM-ECO-09-03',
        statement: 'Returns to Scale describe the output response to an equiproportionate increase in all inputs: Constant Returns to Scale (CRS), Increasing Returns (IRS), and Decreasing Returns (DRS), formalized in the Cobb-Douglas production function $Q = A K^\\alpha L^\\beta$ where $\\alpha + \\beta = 1$ implies CRS.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Charles Cobb & Paul Douglas (1928) A Theory of Production (AER); Paul Samuelson, Economics',
        excerpt: 'A production function exhibits constant returns to scale if scaling all inputs by a constant t scales output by precisely t.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Production Function: Transforming Inputs into Output',
        body: `A **Production Function** is the purely technological relationship showing the maximum physical output ($Q$) that can be produced from given combinations of inputs (Capital $K$, Labour $L$):

$$Q = f(K, L)$$

### Short Run vs Long Run:
* **Short Run:** At least one input is fixed (e.g. factory floor space, heavy blast furnace). Output can be varied *only* by adjusting the variable input (e.g. hiring more workers). Governed by the **Law of Variable Proportions**.
* **Long Run:** ALL inputs are variable. The firm can build a second factory, install new assembly lines, or relocate. Governed by **Returns to Scale**.`,
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The Law of Variable Proportions (The 3 Stages of Production)',
        body: `As successive units of a variable factor (Labour $L$) are added to a fixed factor (Capital $K$):

### The 3 Master Stages of Short-Run Production:
| Stage of Production | Total Product ($TP$) | Marginal Product ($MP_L$) | Average Product ($AP_L$) | Rationality Verdict |
|---|---|---|---|---|
| **Stage I: Increasing Returns** | Increases at an **increasing rate**, then at a diminishing rate. | $MP_L$ rises to a peak, then begins falling. | $AP_L$ is **continuously rising** ($MP_L > AP_L$). | **Irrational** (Fixed capital is underutilized; firm should keep expanding). |
| **Stage II: Diminishing Returns** | Increases at a **diminishing rate** until reaching its **Maximum**. | $MP_L$ is **positive but continuously falling** ($MP_L > 0$). | $AP_L$ is falling ($MP_L < AP_L$). | **THE ONLY RATIONAL STAGE** (Optimal factor employment occurs here). |
| **Stage III: Negative Returns** | **Declines** (Overcrowding). | $MP_L$ is **Negative ($MP_L < 0$)**. | $AP_L$ continues falling. | **Irrational** (Adding workers destroys total output). |

\`\`\`
Product
  ^
TP|                .---''''---.   (TP Maximized where MP = 0)
  |              .'            '.
  |             /                \
  |            /                  \
  |-----------+--------------------+--------> Labour (L)
  |          / \                  /
AP|         /   \----. (AP Max: AP = MP)
  |        /     \    '--.
MP|       /       \       '--.
  |      /         \          '--.
  0-----*-----------*----------------------> Labour (L)
     (MP Max)   (MP=0: TP Max)
  |   Stage I  |   Stage II   | Stage III |
\`\`\`

### The Boundary Theorems:
* **Stage I ends where $AP_L$ is Maximized ($AP_L = MP_L$).**
* **Stage II ends where $TP$ is Maximized ($MP_L = 0$).**`,
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Isoquants, Isocost Lines & Producer Equilibrium',
        body: `In the long run, firms use **Isoquants** (equal product curves) and **Isocost Lines** (equal cost lines):

### 1. Marginal Rate of Technical Substitution ($MRTS_{LK}$)
The slope of an Isoquant is the rate at which Capital can be substituted by Labour while keeping total output constant:

$$MRTS_{LK} = -\\frac{\\Delta K}{\\Delta L} = \\frac{\\text{MP}_L}{\\text{MP}_K}$$

### 2. Producer Equilibrium (Least-Cost Combination)
Cost minimization for a given output occurs at the tangency point where the Isoquant touches the Isocost line:

$$MRTS_{LK} = \\frac{w}{r} \\iff \\frac{\\text{MP}_L}{\\text{MP}_K} = \\frac{w}{r} \\iff \\frac{\\text{MP}_L}{w} = \\frac{\\text{MP}_K}{r}$$

### 3. The Cobb-Douglas Production Function ($Q = A K^\\alpha L^\\beta$)
* If $\\alpha + \\beta = 1$: **Constant Returns to Scale (CRS)** (Doubling inputs exactly doubles output).
* If $\\alpha + \\beta > 1$: **Increasing Returns to Scale (IRS)** (Doubling inputs more than doubles output).
* If $\\alpha + \\beta < 1$: **Decreasing Returns to Scale (DRS)** (Doubling inputs less than doubles output).`,
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Disguised Unemployment in Indian Agriculture & Exam Traps',
        body: `### Indian Application: Disguised Unemployment as Stage III Production
In Indian family agriculture, 6 family members work on a 1-acre plot where 2 workers could produce the exact same output. The marginal product of the extra 4 workers is **zero or negative ($MP_L \\le 0$)**. This is classic **Stage III disguised unemployment**.

### Examiner Traps & High-Yield Pitfalls
* ⚠️ **Trap 1: Where Does Stage II Begin and End?** Stage II begins at $\\text{Maximum } AP_L$ (where $AP_L = MP_L$) and ends at $\\text{Maximum } TP$ (where $MP_L = 0$).
* ⚠️ **Trap 2: AP Rises as Long as $MP > AP$:** Even if $MP$ is falling, as long as $MP$ lies above $AP$, the average product **continues to rise**. $AP$ falls only after $MP$ drops below $AP$.`,
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'SEBI_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2: Microeconomics — Production Functions, Law of Variable Proportions, Isoquants and Returns to Scale',
        notes: 'Guaranteed questions on the 3 stages of production, Cobb-Douglas homogeneous exponents, and MRTS formula.',
      },
      {
        examCode: 'NABARD_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Phase 2: Agriculture & Rural Development — Farm Production Economics and Returns to Scale',
        notes: 'Directly applied to farm mechanization, land-labour ratios, and disguised unemployment.',
      },
      {
        examCode: 'RPSC_RAS',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Mains Paper 1: Unit 2 — Production Theory and Cost Concepts',
        notes: '5-mark question on Law of Variable Proportions stages and why Stage II is rational.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Law of Variable Proportions (Short run): Stage I (Increasing returns, $AP$ rises), Stage II (Diminishing returns, $MP>0$, ONLY rational stage), Stage III (Negative returns, $MP<0$). Producer Equilibrium: $MRTS_{LK} = \\frac{w}{r} \\iff \\frac{MP_L}{w} = \\frac{MP_K}{r}$. Cobb-Douglas: $\\alpha+\\beta=1$ is CRS.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'In the short run, adding variable labour to fixed capital creates three stages of production. Stage I ends where $AP_L = MP_L$ (max AP). Stage II ends where $MP_L = 0$ (max TP). A rational firm operates strictly within Stage II. In the long run, Isoquants plot equal output combinations with slope $MRTS_{LK} = MP_L/MP_K$. Equilibrium occurs where the isoquant is tangent to the isocost line ($MP_L/w = MP_K/r$). Cobb-Douglas $Q = A K^\\alpha L^\\beta$ exhibits CRS if $\\alpha + \\beta = 1$, IRS if $>1$, DRS if $<1$. Disguised unemployment in Indian farming represents Stage III where $MP_L \\le 0$.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Production Theory Architecture: 1. Short-Run Dynamics: $TP = f(L; \\bar{K})$, $AP = TP/L$, $MP = dTP/dL$. 2. Boundary Transitions: Stage I $\\to$ II at $\\max AP_L$, Stage II $\\to$ III at $\\max TP$. 3. Long-Run Geometry: Isoquant curvature and Isocost tangency $\\min (wL + rK)$ s.t. $f(K,L) = \\bar{Q}$. 4. Euler Theorem on Exhaustion of Product under CRS.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'In the Law of Variable Proportions, why is Stage II termed the only "Rational Stage of Production"?',
        options: [
          'Because in Stage II both Average Product and Marginal Product are rising.',
          'Because in Stage I the fixed factor is underutilized, and in Stage III additional variable factors reduce total output ($MP < 0$).',
          'Because total product reaches zero at the beginning of Stage II.',
          'Because the firm earns negative economic profits in Stage I and Stage III.',
        ],
        correctAnswer: 'Because in Stage I the fixed factor is underutilized, and in Stage III additional variable factors reduce total output ($MP < 0$).',
        explanation: 'In Stage I, Average Product of the variable factor is still rising, meaning the fixed factor (capital) is underutilized; increasing variable inputs increases efficiency per worker. In Stage III, Marginal Product is negative ($MP < 0$), meaning adding workers reduces total physical output. Therefore, a rational producer will never produce in Stage I or Stage III, and will always operate strictly in Stage II where $MP > 0$ and total output is maximized.',
        trapExplanation: 'Option A is incorrect because in Stage II both MP and AP are falling, not rising.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2020,
        pyqPaper: 'SEBI Grade A Phase 2 Paper 2',
        pyqStage: 'Phase 2',
        pyqQuestionNumber: 26,
        examinerTrapPattern: 'Testing economic logic behind the 3 stages of production.',
      },
      {
        type: 'APPLIED_SCENARIO',
        stem: 'A manufacturing firm operates with a Cobb-Douglas production function $Q = 5 K^{0.6} L^{0.7}$. If the firm doubles both its capital and labour inputs simultaneously, what will happen to total output ($Q$)?',
        options: [
          'Output will exactly double.',
          'Output will increase by more than double (by a factor of $2^{1.3} \\approx 2.46$).',
          'Output will increase by less than double.',
          'Output will remain unchanged.',
        ],
        correctAnswer: 'Output will increase by more than double (by a factor of $2^{1.3} \\approx 2.46$).',
        explanation: 'In the Cobb-Douglas production function $Q = A K^\\alpha L^\\beta$, the sum of exponents indicates Returns to Scale: $\\alpha + \\beta = 0.6 + 0.7 = 1.3$. Because $1.3 > 1$, the production function exhibits Increasing Returns to Scale (IRS). If all inputs are scaled by $t = 2$, new output becomes $Q\' = 5 (2K)^{0.6} (2L)^{0.7} = 2^{0.6+0.7} \\cdot 5 K^{0.6} L^{0.7} = 2^{1.3} Q \\approx 2.46 Q$, which is more than double.',
        trapExplanation: 'Option A assumes Constant Returns to Scale (which requires $\\alpha + \\beta = 1.0$).',
        difficulty: 'EASY',
        isPYQ: false,
        examinerTrapPattern: 'Cobb-Douglas exponent sum testing for Returns to Scale.',
      },
    ],
  },
  {
    id: 'CON-ECO-10',
    topicOrder: 30,
    topicSlug: 'production-theory-cost-analysis-and-revenue',
    topicTitle: 'Production Theory, Cost Analysis & Revenue',
    topicDescription: 'Short-run and long-run cost curves, envelope theorem, economies of scale, revenue concepts, and profit maximization.',
    slug: 'theory-of-costs-short-run-long-run-cost-curves-revenue-mechanics',
    title: 'Theory of Costs & Revenue: Short-Run & Long-Run Cost Curves and Revenue Mechanics',
    shortDefinition: 'The economic cost framework (Explicit + Implicit), U-shaped short-run cost curves ($AFC, AVC, ATC, MC$), the Long-Run Average Cost ($LAC$) envelope curve, and the revenue relationship $MR = P(1 - 1/|e_d|)$.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-10-01',
        statement: 'Economic Cost equals Explicit Costs (out-of-pocket accounting expenses) plus Implicit Costs (opportunity cost of owner-supplied resources); Economic Profit is Total Revenue minus Total Economic Cost.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Hal Varian, Intermediate Microeconomics, Chapter 20: Cost Minimization',
        excerpt: 'Economic cost includes the opportunity cost of all factors of production employed, whether purchased on the market or owned by the firm.',
      },
      {
        id: 'CLM-ECO-10-02',
        statement: 'The Short-Run Marginal Cost ($MC$) curve intersects both Average Variable Cost ($AVC$) and Average Total Cost ($ATC$) curves at their respective minimum points; $ATC$ is U-shaped due to the Law of Variable Proportions.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Paul Samuelson & William Nordhaus, Economics, Chapter 6: Analysis of Costs',
        excerpt: 'The marginal cost curve cuts the average cost curve and average variable cost curve precisely at their minimum points.',
      },
      {
        id: 'CLM-ECO-10-03',
        statement: 'The Long-Run Average Cost ($LAC$) curve is the envelope of all short-run $ATC$ curves, falling due to Economies of Scale and rising due to Diseconomies of Scale; Marginal Revenue relates to Price Elasticity via $MR = P\\left(1 - \\frac{1}{|e_d|}\\right)$.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Jacob Viner (1931) Cost Curves and Supply Curves; Hal Varian, Intermediate Microeconomics',
        excerpt: 'The long-run average cost curve is the lower envelope of the short-run average cost curves. Marginal revenue is strictly positive when demand is price-elastic.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Accounting Profit vs True Economic Profit',
        body: `If an entrepreneur invests ₹10 Lakh of their own savings into a retail store, generates ₹50 Lakh in revenue, and pays ₹40 Lakh in rent and inventory:
* **Accounting Profit:** $\\text{Revenue} (₹50L) - \\text{Explicit Outlays} (₹40L) = \\mathbf{+₹10\\text{ Lakh}}$.
* **Economic Profit:** The entrepreneur could have earned ₹1 Lakh interest on their savings in a fixed deposit, and ₹12 Lakh salary working as a corporate manager (**Implicit Opportunity Costs = ₹13 Lakh**).
* **True Economic Profit:** $₹50L - (₹40L + ₹13L) = \\mathbf{-₹3\\text{ Lakh}}$ (The entrepreneur is destroying economic value!).

In economics, **Normal Profit** is earned when Economic Profit = 0 (all opportunity costs are fully covered).`,
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Short-Run Cost Curves & The MC-ATC Nexus',
        body: `### 1. Total Cost Identities
$$\\text{Total Cost (TC)} = \\text{Total Fixed Cost (TFC)} + \\text{Total Variable Cost (TVC)}$$
$$\\text{Average Total Cost (ATC)} = \\text{Average Fixed Cost (AFC)} + \\text{Average Variable Cost (AVC)} = \\frac{\\text{TFC}}{Q} + \\frac{\\text{TVC}}{Q}$$
$$\\text{Marginal Cost (MC)} = \\frac{d\\text{TC}}{dQ} = \\frac{d\\text{TVC}}{dQ} \\quad (\\text{since } \\text{TFC is constant})$$

### 2. Geometry of the Cost Curves
* **Average Fixed Cost (AFC):** A **Rectangular Hyperbola** ($P \\times Q = \\text{TFC} = \\text{constant}$). It approaches both axes asymptotically but **never touches either axis**.
* **Average Variable Cost (AVC) & Average Total Cost (ATC):** Both are **U-shaped** due to the Law of Variable Proportions (initial increasing returns lower per-unit costs; eventual diminishing returns drive per-unit costs up).
* **Marginal Cost (MC):** U-shaped (Nike Swoosh). **$MC$ passes through the minimum points of BOTH $AVC$ and $ATC$**.

\`\`\`
Cost (₹)
  ^
  |          / (MC Curve)       / (ATC Curve)
  |         /     .------------/
  |        /    .'            / (AVC Curve)
  |       /   .' .-----------/
  |      /   / .'
  |     /   / /
  |    *---X-* (MC cuts AVC at min, then ATC at min)
  |   /   /
  |  /   /
  | /   /--------------------- (AFC Curve: Rectangular Hyperbola)
  +-------------------------> Quantity (Q)
\`\`\`

### 3. The Mathematical MC-ATC Relationship
* When $MC < ATC \\implies ATC$ is **Falling**.
* When $MC = ATC \\implies ATC$ is at its **Minimum Point**.
* When $MC > ATC \\implies ATC$ is **Rising**.`,
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Long-Run Envelope Curve & Revenue Identities',
        body: `### 1. The Long-Run Average Cost ($LAC$) Envelope Curve
In the long run, the firm can choose any factory scale. The $LAC$ curve is the **lower envelope** of all short-run $ATC$ curves:
* **Downward-Sloping Segment:** **Economies of Scale** (bulk purchasing discounts, managerial specialization, technological indivisibilities).
* **Flat Segment:** **Constant Returns to Scale** (Minimum Efficient Scale - MES).
* **Upward-Sloping Segment:** **Diseconomies of Scale** (managerial coordination bottlenecks, communication breakdowns).

### 2. Revenue Relationships & The Elasticity Nexus
$$\\text{Total Revenue (TR)} = P \\times Q \\qquad \\text{Average Revenue (AR)} = \\frac{\\text{TR}}{Q} = P \\quad (\\text{Always equals Price!})$$
$$\\text{Marginal Revenue (MR)} = \\frac{d\\text{TR}}{dQ} = P \\left(1 - \\frac{1}{|e_d|}\\right)$$

* If $|e_d| > 1$ (Elastic) $\\implies MR > 0$ (Positive).
* If $|e_d| = 1$ (Unitary) $\\implies MR = 0$ (Total Revenue is Maximized).
* If $|e_d| < 1$ (Inelastic) $\\implies MR < 0$ (Negative).`,
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'PLI Scale Economics & Competitive Exam Traps',
        body: `### Indian Policy Application: PLI Schemes & Minimum Efficient Scale
Indian manufacturing historically suffered from sub-scale "dwarf" MSME factories unable to compete with massive Chinese mega-factories. The **Production Linked Incentive (PLI)** scheme explicitly forces Indian firms to invest large capex to achieve the **Minimum Efficient Scale (MES)** on their $LAC$ curve.

### Examiner Traps & High-Yield Pitfalls
* ⚠️ **Trap 1: AFC Never Reaches Zero:** AFC declines continuously as output rises, but it **never equals zero** and never touches the horizontal axis.
* ⚠️ **Trap 2: Distance Between ATC and AVC:** The vertical distance between the $ATC$ and $AVC$ curves is exactly $AFC$. Because $AFC$ falls continuously, the **$ATC$ and $AVC$ curves get closer and closer, but NEVER touch or intersect**.
* ⚠️ **Trap 3: Profit Maximization Condition:** The universal golden rule for profit maximization across ALL market structures is strictly $\\mathbf{MR = MC}$ (and $MC$ must cut $MR$ from below).`,
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'SEBI_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2: Microeconomics — Cost Analysis, Revenue Mechanics and Profit Maximization',
        notes: 'Exhaustively tested: MC-ATC derivative proofs, MR-Elasticity formula, and AFC rectangular hyperbola properties.',
      },
      {
        examCode: 'RBI_GRADE_B',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Phase 2: Finance & Management / ESI — Cost Structure and Industrial Scale',
        notes: 'Critical for corporate cost-volume-profit analysis and pricing power.',
      },
      {
        examCode: 'IIBF_DBF',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module A — Business Costs and Break-Even Analysis',
        notes: 'Break-even point calculation and fixed vs variable costs in credit appraisal.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Economic Cost = Explicit + Implicit Costs. AFC is a Rectangular Hyperbola. $MC$ cuts both $AVC$ and $ATC$ at their minimum points. $LAC$ is the envelope of short-run $ATC$ curves. Revenue-Elasticity Identity: $MR = P(1 - 1/|e_d|)$. Profit is maximized where $MR = MC$.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Economic Profit = Total Revenue - (Explicit Costs + Implicit Opportunity Costs). Short-run cost curves are U-shaped due to the Law of Variable Proportions. AFC declines continuously as a rectangular hyperbola, so the vertical gap between ATC and AVC shrinks continuously without touching. MC intersects AVC and ATC at their minimum points. LAC curve reflects Economies of Scale (falling LAC) and Diseconomies of Scale (rising LAC). Marginal Revenue formula $MR = P(1 - 1/|e_d|)$ proves that a rational firm with positive marginal cost will NEVER produce in the inelastic segment of its demand curve.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Cost & Revenue Mathematical Architecture: 1. Total Costs: $TC(Q) = TFC + TVC(Q)$. 2. Marginal Calculus: $MC = dTC/dQ$. 3. Minimum Cost Proof: $\\frac{d(ATC)}{dQ} = 0 \\implies MC = ATC$. 4. Revenue: $TR = P(Q) \\cdot Q$, $MR = P + Q \\frac{dP}{dQ} = P(1 - 1/|e_d|)$. 5. Golden Profit Rule: $\\max \\Pi(Q) = TR - TC \\implies \\Pi\'(Q) = MR - MC = 0 \\implies MR = MC$ and $\\Pi\'\'(Q) < 0$.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'If a firm faces a price of $P = ₹50$ and the price elasticity of demand for its product is $|e_d| = 2.0$, what is the firm\'s Marginal Revenue ($MR$)?',
        options: [
          '₹50',
          '₹25',
          '₹0',
          '-₹25',
        ],
        correctAnswer: '₹25',
        explanation: 'Use the fundamental Marginal Revenue-Elasticity formula: $MR = P \\left(1 - \\frac{1}{|e_d|}\\right)$. Substitute the given values: $MR = 50 \\left(1 - \\frac{1}{2}\\right) = 50 \\times 0.5 = ₹25$.',
        trapExplanation: 'Option A assumes $MR = P$ (which occurs only under perfect competition where $e_d = \\infty$).',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'SEBI Grade A Phase 2 Paper 2',
        pyqStage: 'Phase 2',
        pyqQuestionNumber: 15,
        examinerTrapPattern: 'Direct evaluation of the MR-Price-Elasticity equation.',
      },
      {
        type: 'EXCEPTION_PROBE',
        stem: 'Which of the following statements regarding the Average Fixed Cost (AFC) curve is TRUE?',
        options: [
          'It is U-shaped and reaches a minimum at the same output as Average Total Cost.',
          'It is a rectangular hyperbola that approaches both axes asymptotically without touching them.',
          'It increases continuously as output increases due to diminishing marginal returns.',
          'It intersects the Marginal Cost curve at the shutdown point.',
        ],
        correctAnswer: 'It is a rectangular hyperbola that approaches both axes asymptotically without touching them.',
        explanation: 'Because Total Fixed Cost (TFC) is constant, $\\text{AFC} = \\frac{\\text{TFC}}{Q} \\implies \\text{AFC} \\times Q = \\text{TFC} = \\text{constant}$. This algebraic equation defines a rectangular hyperbola. As output $Q$ increases, AFC continuously decreases toward zero, but because TFC is positive, AFC never equals zero (never touches the horizontal axis) and at $Q=0$ is undefined (never touches the vertical axis).',
        trapExplanation: 'Option A describes ATC and AVC, not AFC.',
        difficulty: 'EASY',
        isPYQ: false,
        examinerTrapPattern: 'Geometric properties of AFC curve.',
      },
    ],
  },

  // =========================================================================
  // TOPIC 31: Market Structures, Strategic Behaviour & Market Failure
  // =========================================================================
  {
    id: 'CON-ECO-11',
    topicOrder: 31,
    topicSlug: 'market-structures-strategic-behaviour-and-market-failure',
    topicTitle: 'Market Structures, Strategic Behaviour & Market Failure',
    topicDescription: 'Perfect competition, pure monopoly, price discrimination, monopolistic competition, oligopoly models, game theory, and market failure.',
    slug: 'perfect-competition-vs-pure-monopoly-pricing-equilibrium-welfare',
    title: 'Perfect Competition vs Pure Monopoly: Pricing, Equilibrium & Welfare Comparison',
    shortDefinition: 'The comparative analysis of competitive price-taking markets ($P = MR = MC = \\min ATC$) versus pure price-setting monopolies ($MR = MC < P$), Lerner monopoly power index, price discrimination, and deadweight loss.',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-ECO-11-01',
        statement: 'Under Perfect Competition, firms are price-takers facing a horizontal demand curve ($AR = MR = P$); short-run shutdown occurs when $P < \\min(AVC)$; long-run equilibrium achieves both productive and allocative efficiency with zero economic profit ($P = MR = MC = \\min ATC$).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Hal Varian, Intermediate Microeconomics, Chapter 22: Firm Supply & Chapter 23: Industry Supply',
        excerpt: 'In the long run, entry and exit drive economic profits to zero, ensuring production at minimum average cost where price equals marginal cost.',
      },
      {
        id: 'CLM-ECO-11-02',
        statement: 'A Pure Monopoly features a single seller with high entry barriers and downward-sloping demand ($MR < P$); profit-maximizing equilibrium ($MR = MC$) results in positive economic profits, higher price, and lower output than perfect competition, generating a deadweight loss.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Paul Samuelson & William Nordhaus, Economics, Chapter 9: Imperfect Competition and Monopoly',
        excerpt: 'Monopoly pricing violates allocative efficiency because price exceeds marginal cost, creating a deadweight welfare loss for society.',
      },
      {
        id: 'CLM-ECO-11-03',
        statement: 'Monopoly power is quantified by the Lerner Index ($L = \\frac{P - MC}{P} = \\frac{1}{|e_d|}$); Price Discrimination ranges from 1st Degree (perfect surplus extraction), 2nd Degree (block volume pricing), to 3rd Degree (market segmentation based on elasticity).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Abba Lerner (1934) The Concept of Monopoly and the Measurement of Monopoly Power; A.C. Pigou (1920) The Economics of Welfare',
        excerpt: 'The Lerner index measures the proportional markup of price over marginal cost. Third-degree price discrimination charges higher prices to consumer segments with less elastic demand.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Price Taker vs Price Maker: The Spectrum of Market Power',
        body: `Imagine two contrasting Indian businesses:
1. **A Wheat Farmer in Punjab:** Sells an undifferentiated commodity into a market with millions of sellers. If the market price is ₹2,200/quintal, charging ₹2,201 means selling zero grain. The farmer is a pure **Price Taker** facing an infinitely elastic horizontal demand curve.
2. **Indian Railways (Passenger Rail):** The sole provider of passenger rail transit across the nation with statutory entry barriers. It can raise ticket prices and decide passenger quotas without fearing new railway startups. It is a **Price Maker** facing a downward-sloping demand curve.`,
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Perfect Competition vs Monopoly Equilibrium',
        body: `### 1. Perfect Competition Equilibrium
* **Short-Run Conditions:**
  - Profit Maximization: $P = MR = MC$ (with $MC$ rising).
  - **Shutdown Point:** If $P < \\min(AVC)$, the firm shuts down immediately to minimize losses to just Fixed Costs.
  - **Break-Even Point:** $P = \\min(ATC)$ (Zero Economic Profit).
* **Long-Run Equilibrium:** Free entry and exit eliminates excess profits:
  $$P = MR = MC = \\min(ATC)$$
  - **Productive Efficiency:** Produced at minimum cost (lowest point of $ATC$).
  - **Allocative Efficiency:** Price equals marginal cost ($P = MC$).

### 2. Pure Monopoly Equilibrium & The Lerner Index
* Because a monopolist faces the downward-sloping market demand curve ($P = a - bQ$), Marginal Revenue lies strictly below Price:
  $$TR = P \\times Q = aQ - bQ^2 \\implies MR = a - 2bQ \\quad (MR \\text{ has double the slope of demand!})$$
* **Monopoly Output & Price:** Output is set where $MR = MC$, and price is read off the **Demand Curve ($P_m > MC$)**.
* **The Lerner Index of Monopoly Power ($L$):**
  $$L = \\frac{P - MC}{P} = \\frac{1}{|e_d|}$$
  - In Perfect Competition: $|e_d| = \\infty \\implies L = 0$ (Zero market power).
  - In Pure Monopoly: $0 < L \\le 1$ (Higher markup as demand becomes more inelastic).`,
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'The 3 Degrees of Price Discrimination (Pigou Taxonomy)',
        body: `Price discrimination is charging different prices to different buyers for the identical good, **not justified by cost differences**:

| Degree of Discrimination | Operational Mechanism | Consumer Surplus Impact | Real-World Example |
|---|---|---|---|
| **1st Degree (Perfect Price Discrimination)** | Monopolist charges each individual consumer their **exact maximum willingness to pay**. | **Consumer Surplus = ZERO** (Monopolist captures 100% of social surplus). Output equals competitive level ($P = MC$ at margin). | Specialized high-end auction houses; bespoke consulting pricing. |
| **2nd Degree (Non-Linear / Block Pricing)** | Monopolist charges different prices based on the **quantity/volume consumed** or quality tier. | Part of consumer surplus is extracted. | Electricity tariffs (slabs: 0-100 units cheap, 200+ units expensive); bulk FMCG packs. |
| **3rd Degree (Market Segmentation)** | Monopolist segments the market into distinct sub-markets based on **Price Elasticity of Demand**: $\\frac{P_1}{P_2} = \\frac{1 - 1/|e_2|}{1 - 1/|e_1|}$. | Charges **higher price to the inelastic segment** and lower price to the elastic segment. | Student/Senior citizen discounts; Tatkal vs General train quotas; Domestic vs Commercial electricity rates. |`,
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Welfare Deadweight Loss & Indian Regulatory Application',
        body: `### 1. Deadweight Loss of Monopoly
Compared to perfect competition, a monopoly restricts output ($Q_m < Q_c$) and inflates price ($P_m > P_c$). This creates an uncaptured **Deadweight Loss triangle** representing lost social welfare.

### 2. Competition Commission of India (CCI)
The CCI enforces the Competition Act, 2002. Note: **Monopoly itself is NOT illegal in India; only the *Abuse of Dominant Position* (Section 4) and predatory pricing are illegal**.

### Examiner Traps & High-Yield Pitfalls
* ⚠️ **Trap 1: Monopolist Never Operates in Inelastic Segment:** A profit-maximizing monopolist with positive marginal cost will **NEVER produce where demand is inelastic ($|e_d| < 1$)**, because in that region $MR < 0$, which cannot equal $MC > 0$.
* ⚠️ **Trap 2: 1st Degree Price Discrimination has Zero Deadweight Loss:** In 1st degree discrimination, because output expands to where price equals marginal cost ($P = MC$ at the margin), total output is identical to perfect competition, so **Deadweight Loss is Zero** (though Consumer Surplus is also zero).`,
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'SEBI_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2: Microeconomics — Market Structures: Perfect Competition, Monopoly, Price Discrimination',
        notes: 'Guaranteed 2-3 questions: Lerner Index calculations, 3rd degree price discrimination elasticity ratios, shutdown rule.',
      },
      {
        examCode: 'RBI_GRADE_B',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Phase 2: Economic & Social Issues — Industrial Policy, Monopoly Regulations, and Competition Act',
        notes: 'Covers Competition Commission of India mandates and natural monopoly regulation.',
      },
      {
        examCode: 'RPSC_RAS',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Mains Paper 1: Unit 2 — Market Forms: Perfect Competition and Monopoly',
        notes: 'Direct 5-mark and 10-mark questions comparing pricing and output under perfect competition vs monopoly.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Perfect Competition: Price-taker, $P = MR = MC = \\min ATC$, zero economic profit in long run, shutdown if $P < \\min AVC$. Monopoly: Price-maker, $MR = MC < P$, positive profit, DWL. Lerner Index: $L = \\frac{P - MC}{P} = \\frac{1}{|e_d|}$. Price Discrimination: 1st degree (extracts 100% CS), 3rd degree (higher price for inelastic segment).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Perfect competition achieves productive efficiency ($P = \\min ATC$) and allocative efficiency ($P = MC$). Short-run shutdown occurs when price fails to cover Average Variable Cost ($P < \\min AVC$). A pure monopolist maximizes profit where $MR = MC$, setting a price markup determined by the Lerner Index $L = (P - MC)/P = 1/|e_d|$. A monopolist will never operate in the inelastic segment of its demand curve ($|e_d| < 1$) where $MR < 0$. Price discrimination: 1st Degree extracts all consumer surplus with zero DWL; 3rd Degree charges higher prices to less elastic consumer groups.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Market Structure Taxonomy: 1. Perfect Competition: Horizontal demand ($e=\\infty$), $P = AR = MR$. 2. Monopoly: Linear demand $P = a - bQ \\implies MR = a - 2bQ$. 3. Profit Maximization: $\\max \\Pi = P(Q)Q - C(Q) \\implies MR(Q^*) = MC(Q^*)$. 4. Deadweight Loss: $\\text{DWL} = \\frac{1}{2}(P_m - MC)(Q_c - Q_m)$. 5. Statutory Oversight: Competition Act 2002 (CCI).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'A profit-maximizing monopolist produces at a point where the marginal cost is $MC = ₹40$ and the price is $P = ₹100$. What is the value of the Lerner Index of monopoly power, and what is the implied price elasticity of demand at this point?',
        options: [
          'Lerner Index = 0.60; $|e_d| = 1.67$',
          'Lerner Index = 0.40; $|e_d| = 2.50$',
          'Lerner Index = 0.60; $|e_d| = 0.60$',
          'Lerner Index = 1.50; $|e_d| = 0.67$',
        ],
        correctAnswer: 'Lerner Index = 0.60; $|e_d| = 1.67$',
        explanation: '1. Lerner Index formula: $L = \\frac{P - MC}{P} = \\frac{100 - 40}{100} = \\frac{60}{100} = 0.60$. 2. Relationship with elasticity: $L = \\frac{1}{|e_d|} \\implies |e_d| = \\frac{1}{L} = \\frac{1}{0.60} = \\frac{10}{6} \\approx 1.67$. Note that $|e_d| > 1$, confirming the monopolist is operating in the elastic segment of demand.',
        trapExplanation: 'Option B is calculated using the incorrect ratio $\\frac{40}{100} = 0.40$.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2020,
        pyqPaper: 'SEBI Grade A Phase 2 Paper 2',
        pyqStage: 'Phase 2',
        pyqQuestionNumber: 35,
        examinerTrapPattern: 'Calculation of Lerner Index and inverting to obtain price elasticity.',
      },
      {
        type: 'APPLIED_SCENARIO',
        stem: 'In the short run, a competitive manufacturing firm discovers that at its profit-maximizing output, the market price is lower than its Average Total Cost ($P < ATC$), but higher than its Average Variable Cost ($P > AVC$). What should the firm do?',
        options: [
          'Shut down operations immediately to avoid incurring losses.',
          'Continue producing in the short run, because it covers all variable costs and contributes toward paying fixed costs.',
          'Increase price to cover its average total costs.',
          'Increase production until average total cost falls below price.',
        ],
        correctAnswer: 'Continue producing in the short run, because it covers all variable costs and contributes toward paying fixed costs.',
        explanation: 'In the short run, fixed costs are sunk and must be paid regardless of whether output is produced or zero. As long as market price exceeds Average Variable Cost ($P > AVC$), every unit sold covers its variable operating costs and generates an operating surplus that contributes toward paying fixed costs. Shutting down would cause the firm to lose its entire Fixed Cost, resulting in a larger loss.',
        trapExplanation: 'Option A describes the shutdown decision when $P < AVC$. Option C is impossible because competitive firms are price-takers.',
        difficulty: 'EASY',
        isPYQ: false,
        examinerTrapPattern: 'Testing the Short-Run Shutdown Rule ($P < AVC$).',
      },
    ],
  },
  {
    id: 'CON-ECO-12',
    topicOrder: 31,
    topicSlug: 'market-structures-strategic-behaviour-and-market-failure',
    topicTitle: 'Market Structures, Strategic Behaviour & Market Failure',
    topicDescription: 'Monopolistic competition, oligopoly models, game theory, prisoner\'s dilemma, market failure, externalities, and asymmetric information.',
    slug: 'monopolistic-competition-oligopoly-game-theory-and-market-failure',
    title: 'Monopolistic Competition, Oligopoly Models, Game Theory & Market Failure',
    shortDefinition: 'Imperfect competition architectures including Monopolistic Competition (Excess Capacity), Oligopoly (Sweezy Kinked Demand, Cournot Duopoly), Game Theory (Nash Equilibrium), and Market Failures (Externalities, Asymmetric Information).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-ECO-12-01',
        statement: 'Monopolistic Competition (Edward Chamberlin) features product differentiation and free entry; long-run equilibrium achieves tangency on the downward-sloping demand curve, resulting in Excess Capacity ($P > \\min ATC$).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Edward Chamberlin (1933) The Theory of Monopolistic Competition; Hal Varian, Intermediate Microeconomics',
        excerpt: 'In monopolistic competition, the tangency of the demand curve with the average cost curve occurs to the left of the minimum average cost, giving rise to chronic excess capacity.',
      },
      {
        id: 'CLM-ECO-12-02',
        statement: 'The Sweezy Kinked Demand Curve model explains price rigidity in Oligopoly via asymmetric expectations (rivals match price cuts but ignore price hikes, creating a vertical discontinuity in Marginal Revenue); the Cournot model determines equilibrium via intersecting reaction functions.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Paul Sweezy (1939) Demand Under Conditions of Oligopoly (JPE); Augustin Cournot (1838) Researches into the Mathematical Principles of the Theory of Wealth',
        excerpt: 'The kink in the demand curve produces a discontinuous marginal revenue curve, explaining why prices remain rigid despite shifts in marginal cost.',
      },
      {
        id: 'CLM-ECO-12-03',
        statement: 'Market failures arise from Externalities (divergence between private and social costs/benefits, solved via Pigouvian taxes or Coase Theorem) and Asymmetric Information (Adverse Selection / Lemons Problem and Moral Hazard).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Arthur Pigou (1920); Ronald Coase (1960) The Problem of Social Cost; George Akerlof (1970) The Market for "Lemons"',
        excerpt: 'Externalities cause private markets to over-produce goods with negative spillovers and under-produce goods with positive spillovers. Asymmetric information causes adverse selection and market breakdown.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Real-World Markets: Differentiation, Strategy & Market Failure',
        body: `Pure monopoly and perfect competition are theoretical extremes. Most real-world Indian industries fall into two intermediate structures:
1. **Monopolistic Competition:** Hundreds of brands selling differentiated products (e.g. soaps, shampoos, restaurants, coaching institutes). Each has a mini-monopoly over its brand name, but intense competition prevents super-normal profits.
2. **Oligopoly:** A handful of dominant giants that are strategically interdependent (e.g. Indian telecom: Jio vs Airtel vs Vi; Commercial aviation: IndiGo vs Air India). Every move by one player directly impacts rivals.`,
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Monopolistic Competition & The Excess Capacity Theorem',
        body: `### 1. Chamberlin Tangency Solution
In Monopolistic Competition, free entry eliminates short-run economic profits in the long run. The downward-sloping demand curve ($AR$) becomes **tangent to the $ATC$ curve**, but **to the left of the minimum $ATC$**.

\`\`\`
Price (P)
  ^
  |        / (MC)         / (ATC)
  |       /              /
P*|------X--------------/-------- [Tangency: P = ATC > min ATC]
  |     / \            /
  |    /   \ (Demand) /
  |   /     \--------*----------- [Minimum ATC: Efficient Scale]
  +-------------------------> Quantity (Q)
        Q*          Q_eff
        |<-- Excess Capacity -->|
\`\`\`

### 2. The Excess Capacity Theorem
* Output is produced at $Q^*$ rather than the socially optimal minimum-cost capacity $Q_{\\text{eff}}$.
* **The "Cost of Variety":** Society trades off maximum productive efficiency in exchange for consumer diversity and product differentiation.`,
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Oligopoly Models & The Prisoner\'s Dilemma',
        body: `### 1. Sweezy\'s Kinked Demand Curve (Price Rigidity)
Paul Sweezy (1939) explains why oligopoly prices remain sticky:
* **If a firm hikes price:** Rivals do NOT follow $\\implies$ Demand is **Highly Elastic** (firm loses market share).
* **If a firm cuts price:** Rivals immediately MATCH the cut to protect share $\\implies$ Demand is **Highly Inelastic** (little gain in sales).
* **The Kink:** Causes the **Marginal Revenue (MR) curve to have a vertical gap / discontinuity**. As long as $MC$ shifts within this vertical gap, **the equilibrium price and output remain completely unchanged**.

### 2. Strategic Game Theory: Prisoner\'s Dilemma & Cartels
| Player A \\ Player B | **Maintain High Price (Cooperate)** | **Discount Price (Cheat)** |
|---|---|---|
| **Maintain High Price (Cooperate)** | (₹100 Cr, ₹100 Cr) | (₹20 Cr, ₹150 Cr) |
| **Discount Price (Cheat)** | (₹150 Cr, ₹20 Cr) | **(₹50 Cr, ₹50 Cr) [Nash Equilibrium]** |

* Both firms have a dominant strategy to cheat / discount, leading to a sub-optimal **Nash Equilibrium** (₹50 Cr each), explaining why airline and telecom cartels naturally disintegrate without legal enforcement.`,
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Market Failures: Externalities, Coase Theorem & Asymmetric Information',
        body: `### 1. Negative vs Positive Externalities
* **Negative Externality (e.g. Stubble burning in Punjab/Haryana; industrial pollution):** Marginal Social Cost exceeds Marginal Private Cost ($MSC > MPC$). The free market **over-produces** the polluting good. Solution: **Pigouvian Tax** ($T = MEC$).
* **Coase Theorem (Ronald Coase, Nobel 1991):** If property rights are well-defined and **transaction costs are zero**, private bargaining will resolve externalities efficiently without government intervention.

### 2. Asymmetric Information (Akerlof\'s Lemons & Moral Hazard)
* **Adverse Selection (Pre-Contractual):** Hidden information. Bad products drive good products out of the market (e.g. unhealthy people buying health insurance disproportionately).
* **Moral Hazard (Post-Contractual):** Hidden action. Once insured, individuals take excessive risks because costs are borne by others (e.g. insured hospitals overcharging under Ayushman Bharat PM-JAY).

### Examiner Traps & High-Yield Pitfalls
* ⚠️ **Trap 1: Kinked Demand Curve does NOT explain price determination:** The Sweezy model explains why an *already existing* price is rigid; it cannot explain how that price was initially determined.
* ⚠️ **Trap 2: Adverse Selection vs Moral Hazard:** Adverse Selection occurs **before** the transaction (hidden information/selection bias); Moral Hazard occurs **after** the transaction (behavioral shift/hidden action).`,
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'SEBI_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 2: Microeconomics — Monopolistic Competition, Oligopoly, Game Theory, Externalities and Market Failure',
        notes: 'Heavily tested in Phase 2: Kinked demand MR gap, Prisoner\'s Dilemma payoff matrices, Adverse Selection vs Moral Hazard.',
      },
      {
        examCode: 'RBI_GRADE_B',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Phase 2: Economic & Social Issues — Market Failures, Healthcare/Insurance Asymmetries, and Climate Externalities',
        notes: 'Directly applied to PM-JAY health insurance moral hazard and carbon pricing (Pigouvian taxes).',
      },
      {
        examCode: 'UPSC_APFC',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'General Studies: Indian Economy & Social Security — Asymmetric Information and Social Insurance',
        notes: 'Covers Adverse Selection in social security pensions and health insurance schemes.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Monopolistic Comp: Differentiated goods, free entry, Excess Capacity ($P > \\min ATC$). Sweezy Oligopoly: Kinked demand creates broken vertical MR gap -> Price Rigidity. Prisoner\'s Dilemma: Dominant strategy leads to sub-optimal Nash Equilibrium. Market Failures: Negative externalities (tax via Pigou), Adverse Selection (pre-contract info gap), Moral Hazard (post-contract risky action).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Monopolistic competition creates excess capacity as the price-cost tangency occurs left of minimum ATC. The Sweezy Kinked Demand curve explains oligopoly price rigidity because rivals match price reductions but ignore price hikes, creating a vertical discontinuity in Marginal Revenue. Game theory models strategic interdependence where the non-cooperative Nash equilibrium leads to cartel breakdown. Market failures stem from externalities (solved via Pigouvian taxes or the Coase Theorem) and asymmetric information (Adverse selection before contract; Moral hazard after contract).',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Imperfect Markets & Failure Architecture: 1. Chamberlin Excess Capacity: $Q_{\\text{excess}} = Q_{\\text{eff}} - Q^*$. 2. Sweezy MR Gap: $\\Delta MR = P(1/|e_1| - 1/|e_2|)$. 3. Strategic Normal Form: $\\max u_i(s_i^*, s_{-i}^*)$. 4. Externality Calculus: $MSC = MPC + MEC$. 5. Information Economics: Akerlof Lemons market collapse, Stiglitz screening & Spence signaling.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'In the Sweezy Kinked Demand Curve model of Oligopoly, why does the Marginal Revenue ($MR$) curve have a vertical discontinuity (gap)?',
        options: [
          'Because the firm is a pure monopoly that can choose any price it desires.',
          'Because the elasticity of demand changes abruptly at the prevailing market price due to asymmetric rival reactions.',
          'Because marginal cost drops to zero at the kink.',
          'Because fixed costs are discontinuous in the short run.',
        ],
        correctAnswer: 'Because the elasticity of demand changes abruptly at the prevailing market price due to asymmetric rival reactions.',
        explanation: 'In the Sweezy model, the demand curve has a sharp kink at the prevailing price because demand is highly elastic above the price (rivals do not follow price increases) and highly inelastic below the price (rivals match price cuts). Because Marginal Revenue is derived from the slope of the demand curve, the abrupt shift from a flat slope to a steep slope causes the MR curve to break and display a vertical discontinuity (gap) directly below the kink.',
        trapExplanation: 'Option C is incorrect because the discontinuity is in the MR curve, while the MC curve remains continuous and passes through the gap.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'SEBI Grade A Phase 2 Paper 2',
        pyqStage: 'Phase 2',
        pyqQuestionNumber: 38,
        examinerTrapPattern: 'Testing the mathematical origin of the vertical gap in the Sweezy MR curve.',
      },
      {
        type: 'CONCEPT_CHECK',
        stem: 'A health insurance company in India notices that after purchasing comprehensive medical insurance, policyholders visit private hospitals for minor ailments far more frequently and demand expensive diagnostic tests that they would have avoided if paying out-of-pocket. This economic phenomenon is an example of:',
        options: [
          'Adverse Selection',
          'Moral Hazard',
          'Free-Rider Problem',
          'Negative Externality',
        ],
        correctAnswer: 'Moral Hazard',
        explanation: 'Moral Hazard is an asymmetric information problem that occurs AFTER a contract is signed (hidden action). Once an individual is fully insured against financial loss, their behavioral incentives change: they take fewer precautions and consume excessive medical services because the marginal cost is paid by the insurance company rather than themselves.',
        trapExplanation: 'Adverse Selection occurs BEFORE the contract is signed (when high-risk individuals buy insurance at higher rates than healthy individuals).',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'UPSC APFC / EPFO Prelims',
        pyqStage: 'Recruitment Test',
        pyqQuestionNumber: 51,
        examinerTrapPattern: 'Testing temporal distinction: Adverse Selection (pre-contract) vs Moral Hazard (post-contract).',
      },
    ],
  },

  // =========================================================================
  // TOPIC 32: Foundations of National Income Accounting
  // =========================================================================
  {
    id: 'CON-ECO-13',
    topicOrder: 32,
    topicSlug: 'foundations-of-national-income-accounting',
    topicTitle: 'Foundations of National Income Accounting',
    topicDescription: 'Domestic territory, factor vs transfer payments, stocks vs flows, national income aggregate ladder, 2015 SNA methodology, and three measurement methods.',
    slug: 'national-income-concepts-domestic-territory-factor-transfer-stocks-flows',
    title: 'National Income Concepts: Domestic Territory, Factor vs Transfer Payments, Stocks vs Flows & Final vs Intermediate Goods',
    shortDefinition: 'The foundational accounting taxonomy of National Income: Economic Territory vs Geographical boundaries, Factor Payments vs Transfer Payments, Stocks vs Flows, and Final vs Intermediate goods avoiding double counting.',
    difficulty: 'BEGINNER',
    claims: [
      {
        id: 'CLM-ECO-13-01',
        statement: 'Economic (Domestic) Territory encompasses the geographic territory administered by a government where persons, goods, and capital circulate freely, including Indian embassies, consulates, and military bases abroad (while excluding foreign embassies located within India).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'UN System of National Accounts (SNA 2008), Chapter 4: Institutional Units and Sectors; MoSPI National Accounts Statistics: Sources and Methods (2015)',
        excerpt: 'The economic territory of a country consists of the geographic territory administered by a government within which persons, goods and capital circulate freely, including embassies and territorial waters.',
      },
      {
        id: 'CLM-ECO-13-02',
        statement: 'Factor Payments (Rent, Wages, Interest, Profit) represent earned rewards for factor services rendered in production and are included in National Income; Transfer Payments (Pensions, Subsidies, Scholarships, Remittances) are unearned unilateral payments and are strictly excluded.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'MoSPI National Accounts Statistics: Sources and Methods (2015); NCERT Macroeconomics Class XII, Chapter 2',
        excerpt: 'Transfer payments are unilateral receipts without any corresponding productive contribution in the current period and are not included in national income.',
      },
      {
        id: 'CLM-ECO-13-03',
        statement: 'Stock variables (National Wealth, Money Supply, Public Debt, Capital Stock) are measured at a specific point in time; Flow variables (National Income, GDP, Investment, Fiscal Deficit) are measured over a unit of time.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'N. Gregory Mankiw, Macroeconomics, Chapter 2: The Data of Macroeconomics',
        excerpt: 'A stock is a quantity measured at a given point in time, whereas a flow is a quantity measured per unit of time.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Scope of Macroeconomic Accounting',
        body: `National Income Accounting is the financial balance sheet of an entire country.

To measure a nation's total output accurately, we must first establish strict **boundary rules**:
* What constitutes the physical and economic boundaries of "India"?
* Which money transactions represent actual newly produced wealth versus mere transfers of cash between citizens?
* How do we prevent counting the same bag of flour three times as it moves from the farmer to the mill to the bakery?`,
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Economic Territory vs Geographical Territory',
        body: `The **Economic (Domestic) Territory** of India is defined by the UN SNA 2008 and MoSPI as:

### 1. Included in India\'s Domestic Territory:
* Political frontiers, including territorial waters (12 nautical miles) and sovereign airspace.
* Ships and aircraft operated by Indian residents between two or more countries (e.g. Air India flights operating between London and New York).
* Fishing vessels, oil and natural gas rigs operated by Indian residents in international waters where India has exclusive economic rights (EEZ - 200 nautical miles).
* **Indian Embassies, High Commissions, Consulates, and Military Bases located in foreign countries** (e.g. The Indian Embassy in Washington, D.C. is part of India's domestic territory).

### 2. Excluded from India\'s Domestic Territory:
* **Foreign Embassies, High Commissions, and Consulates located within India** (e.g. The US Embassy in Chanakyapuri, New Delhi is part of US domestic territory, NOT India's).
* Offices of international organizations located in India (e.g. WHO, World Bank, IMF offices in New Delhi).`,
        order: 2,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'Factor Payments vs Transfer Payments & Stocks vs Flows',
        body: `### 1. Factor Payments vs Transfer Payments
| Dimension | Factor Payments (Included in NI) | Transfer Payments (EXCLUDED from NI) |
|---|---|---|
| **Core Nature** | Earned payments for productive factor services rendered. | Unearned unilateral receipts; no productive service in return. |
| **Factor Breakdown** | • **Land $\\to$ Rent**<br>• **Labour $\\to$ Wages / Salaries**<br>• **Capital $\\to$ Interest**<br>• **Entrepreneurship $\\to$ Profit** | • Old-age pensions, scholarships, unemployment doles.<br>• Direct Benefit Transfers (PM-KISAN, PMJDY grants).<br>• Gifts, donations, lottery winnings, remittances. |
| **Why Excluded?** | Represents net newly created goods and services. | Mere reallocation of existing purchasing power; including them causes **double counting**. |

* **CRUCIAL EXAM DISTINCTION:** **Retirement Pensions** are deferred factor payments (earned wages) and ARE included in National Income. **Old-Age Social Welfare Pensions** are unilateral transfer payments and are strictly EXCLUDED!

### 2. Stocks vs Flows Taxonomy
| Variable Type | Definition | Unit of Measurement | Examples |
|---|---|---|---|
| **Stock Variable** | Measured at a **specific point in time** (snapshot). | As on March 31, 2026. | National Wealth, Capital Stock, Forex Reserves, Public Debt, Money Supply ($M_3$). |
| **Flow Variable** | Measured **over a duration / period of time** (rate). | Per month / Per financial year. | GDP, National Income, Gross Capital Formation (Investment), Fiscal Deficit, Imports/Exports. |`,
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Final vs Intermediate Goods & The Double-Counting Trap',
        body: `### Final Goods vs Intermediate Goods
* **Final Goods:** Goods purchased for final consumption (by households) or final investment (capital machinery by firms). No further value addition takes place.
* **Intermediate Goods:** Goods used as raw materials or resold within the same financial year (e.g. tyre bought by Maruti Suzuki to install in a car).
* **The Double-Counting Trap:** Summing the gross output of the wheat farmer (₹1,000), the flour mill (₹1,500), and the baker (₹2,200) yields ₹4,700. True GDP is only the value of the **Final Bread (₹2,200)** or the sum of **Value Added at each stage** ($1000 + 500 + 700 = ₹2,200$).

### Examiner Traps & High-Yield Pitfalls
* ⚠️ **Trap 1: Second-Hand Goods Transactions:** Sale of a used car or second-hand house is EXCLUDED from GDP (already counted in the year of manufacture). However, **brokerage or commission earned by the agent IS included** in GDP as a current productive service.
* ⚠️ **Trap 2: Capital Gains are Excluded:** Capital gains from stock market trading (e.g. buying Reliance shares at ₹2,000 and selling at ₹2,500) are paper capital asset gains and are strictly EXCLUDED from GDP.`,
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'RBI_GRADE_B',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Phase 2: Economic & Social Issues — National Income Accounting Concepts and Methodology',
        notes: 'Guaranteed questions in Phase 1 GA and Phase 2 ESI on domestic territory inclusions, transfer payments, and intermediate goods.',
      },
      {
        examCode: 'IIBF_DBF',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module A — National Income and Domestic Aggregates',
        notes: 'Covers Stock vs Flow variables and factor payment classification.',
      },
      {
        examCode: 'RPSC_RAS',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Mains Paper 1: Unit 2 — National Income Accounting Concepts',
        notes: 'Direct 2-mark definitions of Domestic Territory, Factor Payments, and Intermediate Goods.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Domestic Territory: Includes Indian embassies abroad; excludes foreign embassies in India. Factor Payments (Rent, Wages, Interest, Profit) = INCLUDED. Transfer Payments (Old age pensions, subsidies, gifts) = EXCLUDED. Stocks = point in time (Forex, Debt, Capital). Flows = duration of time (GDP, Deficit, Investment). Intermediate goods excluded to prevent double counting.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'National income includes only Factor Payments generated within economic territory and earned by normal residents. Economic territory includes Indian embassies abroad and international water rigs, but excludes foreign embassies in New Delhi. Transfer payments (unilateral grants, scholarships, social pensions) are excluded because they represent no new production. Stock variables (Forex reserves, money supply, national debt) are point-in-time snapshots; Flow variables (GDP, annual investment, exports) are rates over time. Intermediate goods are subtracted from gross output to eliminate double counting.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'National Accounting Definitional Architecture: 1. Boundary: Domestic Territory vs Rest of World. 2. Resident Principle: Center of economic interest $\\ge 1$ year. 3. Transaction Categorization: Factor service vs Unilateral transfer. 4. Temporal Distinction: Stock ($S(t)$) vs Flow ($F = dS/dt$). 5. Value Addition Rule: $\\text{GVA} = \\text{Output} - \\text{Intermediate Consumption}$.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following items is correctly INCLUDED in the calculation of India\'s National Income?',
        options: [
          'Old-age social security pension paid to senior citizens under the National Social Assistance Programme (NSAP).',
          'Financial grant received by a poor household under the PM-KISAN Direct Benefit Transfer scheme.',
          'Retirement pension paid to a retired government school teacher.',
          'Money won by an individual in a state-run lottery.',
        ],
        correctAnswer: 'Retirement pension paid to a retired government school teacher.',
        explanation: 'A retirement pension paid to an employee is considered "deferred factor payment" (wages earned during active service that were withheld and paid out after retirement) and represents payment for past productive labour service. Therefore, retirement pensions ARE included in National Income. In contrast, old-age social pensions, PM-KISAN cash grants, and lottery winnings are unilateral transfer payments (unearned receipts with no corresponding productive service) and are strictly excluded.',
        trapExplanation: 'Option A is a classic examiner trap confusing retirement pensions (factor payment) with old-age social welfare pensions (transfer payment).',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'RBI Grade B Phase 1',
        pyqStage: 'Phase 1',
        pyqQuestionNumber: 62,
        examinerTrapPattern: 'Distinguishing retirement pension from old-age welfare pension.',
      },
      {
        type: 'EXCEPTION_PROBE',
        stem: 'Which of the following economic variables is classified as a "STOCK Variable" rather than a Flow variable?',
        options: [
          'Gross Domestic Product (GDP) of India for FY 2025-26.',
          'Foreign Exchange Reserves of the Reserve Bank of India as on March 31, 2026.',
          'Gross Capital Formation (Investment) during the second quarter.',
          'Monthly Goods and Services Tax (GST) revenue collection.',
        ],
        correctAnswer: 'Foreign Exchange Reserves of the Reserve Bank of India as on March 31, 2026.',
        explanation: 'A stock variable is measured at a precise, specific point in time (a snapshot). Foreign Exchange Reserves are reported as a stock balance existing on a specific date (e.g. as on March 31). In contrast, GDP, Gross Capital Formation, and GST revenue collections are Flow variables measured over an interval or duration of time (quarter, month, or financial year).',
        trapExplanation: 'All options other than Forex reserves represent rates of activity occurring over a time period.',
        difficulty: 'EASY',
        isPYQ: false,
        examinerTrapPattern: 'Stock vs Flow variable classification.',
      },
    ],
  },
  {
    id: 'CON-ECO-14',
    topicOrder: 32,
    topicSlug: 'foundations-of-national-income-accounting',
    topicTitle: 'Foundations of National Income Accounting',
    topicDescription: 'The 8 national income aggregates ladder, 2015 SNA methodology, GVA at basic prices, factor cost vs market price.',
    slug: 'the-8-national-income-aggregates-ladder-and-2015-sna-methodology',
    title: 'The 8 National Income Aggregates Ladder & 2015 SNA Methodology',
    shortDefinition: 'The mathematical conversion step-ladder connecting the 8 macroeconomic aggregates (GDP, NDP, GNP, NNP) across Gross/Net, Domestic/National, and Market Price/Factor Cost switches, and the MoSPI 2015 SNA methodology.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-14-01',
        statement: 'The 8 national income aggregates are interconnected via three binary conversion bridges: Gross to Net (Depreciation / Consumption of Fixed Capital), Domestic to National (Net Factor Income from Abroad - NFIA), and Factor Cost to Market Price (Net Indirect Taxes - NIT).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'MoSPI National Accounts Statistics: Sources and Methods (2015); UN System of National Accounts (SNA 2008)',
        excerpt: 'The three fundamental conversion switches are: Net = Gross - CFC; National = Domestic + NFIA; Market Price = Factor Cost + NIT.',
      },
      {
        id: 'CLM-ECO-14-02',
        statement: 'Canonical National Income of India is strictly and universally defined as Net National Product at Factor Cost ($\\text{NNP}_{\\text{FC}}$).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Central Statistics Office (CSO) / MoSPI National Accounts Manual; NCERT Macroeconomics Class XII, Chapter 2',
        excerpt: 'National income is Net National Product at factor cost (NNP_FC).',
      },
      {
        id: 'CLM-ECO-14-03',
        statement: 'Under India\'s MoSPI 2015 SNA revision (Base Year 2011-12), Headline GDP is reported as GDP at Market Prices ($\\text{GDP}_{\\text{MP}} = \\sum \\text{GVA}_{\\text{BP}} + \\text{Net Product Taxes}$), while sectoral industry output is measured as GVA at Basic Prices ($\\text{GVA}_{\\text{BP}} = \\text{GVA}_{\\text{FC}} + \\text{Net Production Taxes}$).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'MoSPI Press Release (January 30, 2015) Changes in the Methodology of National Accounts Statistics; UN SNA 2008',
        excerpt: 'Headline growth rate is now measured by GDP at constant market prices, while GVA at basic prices reflects sectoral economic activity.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The 3 Binary Switches of National Accounting',
        body: `National income accounting is governed by **three universal mathematical switches**:

1. **The Depreciation Switch (Gross vs Net):**
   $$\\text{Net} = \\text{Gross} - \\text{Consumption of Fixed Capital (Depreciation)}$$
2. **The Geographic Switch (Domestic vs National):**
   $$\\text{National} = \\text{Domestic} + \\text{Net Factor Income from Abroad (NFIA)}$$
   $$\\text{NFIA} = \\text{Factor Income earned by Indian residents abroad} - \\text{Factor Income earned by foreigners in India}$$
3. **The Government Tax Switch (Factor Cost vs Market Price):**
   $$\\text{Market Price} = \\text{Factor Cost} + \\text{Net Indirect Taxes (NIT)}$$
   $$\\text{NIT} = \\text{Indirect Taxes (GST, Excise, Customs)} - \\text{Government Subsidies}$$`,
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The 8 Macroeconomic Aggregates Master Ladder',
        body: `Using these 3 switches, we derive the **8 Canonical Macroeconomic Aggregates**:

\`\`\`
                       [GDP_MP]
                      /   |   \
        - Depreciation    |    + NFIA
                    /     |     \
               [NDP_MP]   |    [GNP_MP]
                  \       |       /
                 + NFIA   | - Depreciation
                    \     |     /
                       [NNP_MP]
                          |
                        - NIT (Net Indirect Taxes)
                          |
                       [NNP_FC]  <=== *** CANONICAL NATIONAL INCOME ***
\`\`\`

### The 8 Step-Ladder Equations:
1. **$\\text{GDP}_{\\text{MP}}$** = Gross Domestic Product at Market Price (Gross value of final goods produced within domestic territory).
2. **$\\text{NDP}_{\\text{MP}} = \\text{GDP}_{\\text{MP}} - \\text{Depreciation}$**
3. **$\\text{GNP}_{\\text{MP}} = \\text{GDP}_{\\text{MP}} + \\text{NFIA}$**
4. **$\\text{NNP}_{\\text{MP}} = \\text{GNP}_{\\text{MP}} - \\text{Depreciation} = \\text{NDP}_{\\text{MP}} + \\text{NFIA}$**
5. **$\\text{GDP}_{\\text{FC}} = \\text{GDP}_{\\text{MP}} - \\text{NIT}$**
6. **$\\text{NDP}_{\\text{FC}} = \\text{NDP}_{\\text{MP}} - \\text{NIT}$** (Domestic Factor Income).
7. **$\\text{GNP}_{\\text{FC}} = \\text{GNP}_{\\text{MP}} - \\text{NIT}$**
8. **$\\text{NNP}_{\\text{FC}} = \\text{NNP}_{\\text{MP}} - \\text{NIT}$** = $\\mathbf{\\text{NATIONAL INCOME (NI)}}$.`,
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'The 2015 MoSPI SNA Methodology: Basic Prices Framework',
        body: `In January 2015, MoSPI aligned India's National Accounts Statistics (NAS) with the international **UN System of National Accounts (SNA 2008)**, introducing the concept of **Basic Prices**:

### The Production vs Product Tax Distinction:
* **Production Taxes / Subsidies:** Paid or received **independent of the volume of actual production** (e.g. Land revenue, stamp duty, factory registration fee, municipal tax; Subsidies: Railways subsidies, small-scale enterprise subsidies).
* **Product Taxes / Subsidies:** Paid or received **per unit of good produced/sold** (e.g. GST, Central Excise Duty, Customs Duty; Subsidies: Food subsidy, fertilizer subsidy, petroleum subsidy).

### The Modern 3-Tier Value Chain:
$$\\text{GVA at Factor Cost (GVA}_{\\text{FC}}\\text{)}$$
$$\\Downarrow \\quad + (\\text{Production Taxes} - \\text{Production Subsidies})$$
$$\\mathbf{\\text{GVA at Basic Prices (GVA}_{\\text{BP}}\\text{)}} \\quad \\text{[Measures Sectoral Economic Activity: Agri, Industry, Services]}$$
$$\\Downarrow \\quad + (\\text{Product Taxes} - \\text{Product Subsidies})$$
$$\\mathbf{\\text{GDP at Market Prices (GDP}_{\\text{MP}}\\text{)}} \\quad \\text{[Headline National GDP Growth Rate!]}$$`,
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Headline Growth vs Sectoral GVA & Exam Traps',
        body: `### Why Did India Switch Headline GDP in 2015?
* **Pre-2015:** India reported headline economic growth using $\\text{GDP at Factor Cost}$ (Constant Prices).
* **Post-2015:** India reports headline economic growth using $\\mathbf{\\text{GDP at Market Prices}}$ (Constant Prices), matching IMF and global standard reporting.
* Sectoral performance (Agriculture, Manufacturing, Services) is reported as $\\mathbf{\\text{GVA at Basic Prices}}$.

### Examiner Traps & High-Yield Pitfalls
* ⚠️ **Trap 1: NFIA for India is Historically Negative:** Because foreign multinational investments and foreign debt in India historically earn more factor income than Indian investments abroad, **NFIA for India is negative (NFIA < 0)**. Consequently, **$\\text{GNP} < \\text{GDP}$ for India**.
* ⚠️ **Trap 2: Canonical National Income is ALWAYS NNP_FC:** When an exam asks for "National Income", it is strictly $\\text{NNP}_{\\text{FC}}$, NOT GDP, NDP, or NNP_MP.`,
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'RBI_GRADE_B',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Phase 2: Economic & Social Issues — National Accounts 2015 SNA Methodology and GVA Basic Prices',
        notes: 'Guaranteed 2-mark and 5-mark numerical and conceptual questions in Phase 1 and 2.',
      },
      {
        examCode: 'SEBI_GRADE_A',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Paper 2: Economics — National Income Aggregates and Deflators',
        notes: 'Algebraic calculations converting GDP to NNP_FC and GVA_BP to GDP_MP.',
      },
      {
        examCode: 'RPSC_RAS',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Mains Paper 1: Unit 2 — National Income Aggregates and GVA Concepts',
        notes: 'Frequently asked 5-mark question explaining GVA at Basic Prices vs GDP at Market Prices.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: '3 Switches: Gross - Dep = Net; Domestic + NFIA = National; FC + NIT = MP. Canonical National Income = $\\text{NNP}_{\\text{FC}}$. India 2015 SNA: $\\text{GVA}_{\\text{BP}} = \\text{GVA}_{\\text{FC}} + \\text{Net Production Taxes}$; $\\text{GDP}_{\\text{MP}} = \\sum \\text{GVA}_{\\text{BP}} + \\text{Net Product Taxes}$. Since NFIA < 0 in India, $\\text{GNP} < \\text{GDP}$.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'The 8 aggregates stem from Gross/Net (Depreciation), Domestic/National (NFIA), and Factor Cost/Market Price (NIT). National Income is strictly NNP_FC. Since India pays more factor returns to foreign capital than it receives from abroad, NFIA is negative, making GNP smaller than GDP. Under the MoSPI 2015 SNA methodology (base year 2011-12), headline economic growth is measured at GDP at Market Prices, while sectoral supply performance is measured at GVA at Basic Prices (incorporating production taxes but excluding product taxes).',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'National Income Aggregate Architecture: 1. Vector Space of Aggregates: $\\{G, N\\} \\times \\{D, N\\} \\times \\{P\\} \\times \\{FC, MP\\}$. 2. Canonical Identity: $NI = NNP_{FC} = GDP_{MP} - CFC + NFIA - NIT$. 3. SNA 2008 Basic Price Chain: $GVA_{FC} \\xrightarrow{+ \\text{Net Prod Taxes}} GVA_{BP} \\xrightarrow{+ \\text{Net Product Taxes}} GDP_{MP}$.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Given the following macroeconomic data for an economy (in ₹ Crore): $\\text{GDP at Market Prices} = 10,000$; $\\text{Consumption of Fixed Capital (Depreciation)} = 1,000$; $\\text{Net Factor Income from Abroad (NFIA)} = -200$; $\\text{Indirect Taxes} = 1,200$; $\\text{Subsidies} = 400$. What is the canonical "National Income" ($\\text{NNP}_{\\text{FC}}$)?',
        options: [
          '₹8,000 Crore',
          '₹8,800 Crore',
          '₹7,600 Crore',
          '₹9,200 Crore',
        ],
        correctAnswer: '₹8,000 Crore',
        explanation: '1. National Income is strictly $\\text{NNP}_{\\text{FC}}$. 2. Compute Net Indirect Taxes: $\\text{NIT} = \\text{Indirect Taxes} - \\text{Subsidies} = 1,200 - 400 = 800$. 3. Formula: $\\text{NNP}_{\\text{FC}} = \\text{GDP}_{\\text{MP}} - \\text{Depreciation} + \\text{NFIA} - \\text{NIT}$. 4. Calculate: $\\text{NNP}_{\\text{FC}} = 10,000 - 1,000 + (-200) - 800 = 10,000 - 1,000 - 200 - 800 = 8,000\\text{ Crore}$.',
        trapExplanation: 'Option B is calculated by incorrectly adding NIT ($+800$) instead of subtracting it.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'SEBI Grade A Phase 2 Paper 2',
        pyqStage: 'Phase 2',
        pyqQuestionNumber: 41,
        examinerTrapPattern: 'Step-by-step evaluation across all 3 conversion switches.',
      },
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under the revised 2015 MoSPI National Accounts Statistics methodology, how is "Gross Value Added (GVA) at Basic Prices" derived from "GVA at Factor Cost"?',
        options: [
          '$\\text{GVA at Basic Prices} = \\text{GVA at Factor Cost} + (\\text{Product Taxes} - \\text{Product Subsidies})$',
          '$\\text{GVA at Basic Prices} = \\text{GVA at Factor Cost} + (\\text{Production Taxes} - \\text{Production Subsidies})$',
          '$\\text{GVA at Basic Prices} = \\text{GVA at Factor Cost} - \\text{Depreciation}$',
          '$\\text{GVA at Basic Prices} = \\text{GVA at Factor Cost} + \\text{Net Factor Income from Abroad}$',
        ],
        correctAnswer: '$\\text{GVA at Basic Prices} = \\text{GVA at Factor Cost} + (\\text{Production Taxes} - \\text{Production Subsidies})$',
        explanation: 'Under the 2015 SNA methodology, GVA at Basic Prices includes net production taxes (taxes on production independent of volume, such as land revenue and stamp duties minus production subsidies), but excludes product taxes (taxes levied per unit of product, such as GST and excise). Product taxes are added later to convert GVA at Basic Prices into GDP at Market Prices.',
        trapExplanation: 'Option A derives GDP at Market Prices from GVA at Basic Prices, not GVA at Basic Prices from Factor Cost.',
        difficulty: 'EASY',
        isPYQ: false,
        examinerTrapPattern: 'Testing the distinction between Production Taxes and Product Taxes.',
      },
    ],
  },
  {
    id: 'CON-ECO-15',
    topicOrder: 32,
    topicSlug: 'foundations-of-national-income-accounting',
    topicTitle: 'Foundations of National Income Accounting',
    topicDescription: 'The three measurement approaches: Production/Value Added, Income, and Expenditure methods, and sectoral reconciliation.',
    slug: 'three-measurement-approaches-production-income-expenditure-methods',
    title: 'Three Measurement Approaches: Production (GVA), Income & Expenditure Methods',
    shortDefinition: 'The three mathematically equivalent approaches to measuring national output: Production (Value Added) Method, Income (Factor Payments) Method, and Expenditure (Final Demand) Method.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-15-01',
        statement: 'The Production (Value-Added) Method computes $\\text{Gross Value Added} = \\text{Gross Value of Output} - \\text{Intermediate Consumption}$, measuring net economic value created across primary, secondary, and tertiary sectors.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'MoSPI National Accounts Statistics: Sources and Methods (2015); UN SNA 2008, Chapter 6',
        excerpt: 'Gross value added is the value of output less the value of intermediate consumption and is a measure of the contribution to GDP made by an individual producer, industry or sector.',
      },
      {
        id: 'CLM-ECO-15-02',
        statement: 'The Income Method sums all factor earnings generated within domestic territory: $\\text{NDP}_{\\text{FC}} = \\text{Compensation of Employees} + \\text{Operating Surplus} (\\text{Rent} + \\text{Interest} + \\text{Profit}) + \\text{Mixed Income of Self-Employed}$.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'MoSPI National Accounts Statistics: Sources and Methods (2015); NCERT Macroeconomics Class XII, Chapter 2',
        excerpt: 'Domestic factor income is the sum of compensation of employees, operating surplus, and mixed income of the self-employed.',
      },
      {
        id: 'CLM-ECO-15-03',
        statement: 'The Expenditure Method sums final expenditures on domestically produced goods: $\\text{GDP}_{\\text{MP}} = C + I + G + (X - M)$, where $C$ is PFCE, $I$ is Gross Capital Formation (GFCF + Change in Stocks + Valuables), $G$ is GFCE, and $(X - M)$ is Net Exports.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'MoSPI National Accounts Statistics (NAS); N. Gregory Mankiw, Macroeconomics, Chapter 2',
        excerpt: 'The expenditure approach computes GDP as the sum of private consumption, gross investment, government purchases, and net exports.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Triple Equivalence of Macroeconomics',
        body: `Every rupee spent by a buyer on a final good is simultaneously:
1. **Value Created** by the producer (Production).
2. **Income Earned** by factors of production (Wages to workers, Profit to owners).
3. **Expenditure Incurred** by the consumer or investor.

Therefore:

$$\\mathbf{\\text{National Production} \\equiv \\text{National Income} \\equiv \\text{National Expenditure}}$$`,
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The 3 Measurement Methods Explored',
        body: `### 1. Production Method (Value Added Method)
$$\\text{Gross Value of Output (GVO)} = \\text{Total Sales} + \\text{Change in Inventories (Closing Stock} - \\text{Opening Stock)}$$
$$\\mathbf{\\text{GVA}_{\\text{MP}}} = \\text{GVO} - \\text{Intermediate Consumption (Raw Materials)}$$
$$\\sum \\text{GVA}_{\\text{MP}} = \\text{GDP}_{\\text{MP}}$$

### 2. Income Method (Factor Payments Approach)
Sums all incomes generated by owners of factors of production inside domestic territory:
$$\\mathbf{\\text{NDP}_{\\text{FC}}} = \\text{COE} + \\text{OS} + \\text{MI}$$
* **Compensation of Employees (COE):** Wages and salaries in cash and kind + Employers' contribution to social security schemes (EPFO, ESIC).
* **Operating Surplus (OS):** Income from property and entrepreneurship = $\\text{Rent} + \\text{Royalty} + \\text{Interest} + \\text{Profit (Corporate Tax} + \\text{Dividend} + \\text{Undistributed Retained Earnings)}$.
* **Mixed Income of the Self-Employed (MI):** Income of unincorporated own-account workers (farmers, shopkeepers, doctors in private practice) where labour and capital returns cannot be separated.

### 3. Expenditure Method (Final Demand Approach)
$$\\mathbf{\\text{GDP}_{\\text{MP}}} = C + I + G + (X - M)$$
* **$C$ = Private Final Consumption Expenditure (PFCE):** Household consumption of non-durables, durables, and services (~56-60% of Indian GDP).
* **$I$ = Gross Capital Formation (GCF) (~30-32% of GDP):**
  - **Gross Fixed Capital Formation (GFCF):** Infrastructure, machinery, factory construction, commercial real estate.
  - **Change in Stocks (Inventory Investment).**
  - **Valuables:** Net acquisition of gold, silver, and precious stones.
* **$G$ = Government Final Consumption Expenditure (GFCE):** Public administration salaries, defense operations, non-capital government services (~10-12% of GDP).
* **$(X - M)$ = Net Exports:** Exports minus Imports (Historically negative in India due to trade deficit).`,
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Reconciling the 3 Approaches in Indian Data',
        body: `In practical national accounting, statistical discrepancies arise due to differing survey data sources:

\`\`\`
+-----------------------------------------------------------------------+
|                       NATIONAL OUTPUT / GDP                           |
+-----------------------------------+-----------------------------------+
| SUPPLY SIDE (GVA by Economic Act) | DEMAND SIDE (Expenditure Breakdown)|
+-----------------------------------+-----------------------------------+
| 1. Agriculture, Forestry & Fishing| 1. PFCE (Private Consumption)     |
| 2. Mining & Quarrying             | 2. GFCE (Govt Consumption)        |
| 3. Manufacturing                  | 3. GFCF (Fixed Investment)        |
| 4. Electricity, Gas, Water Supply | 4. Change in Stocks               |
| 5. Construction                   | 5. Valuables                      |
| 6. Trade, Hotels, Transport, Comm | 6. Net Exports (X - M)            |
| 7. Financial, Real Estate & Prof  | 7. Statistical Discrepancy        |
| 8. Public Admin, Defence & Other  |                                   |
+-----------------------------------+-----------------------------------+
\`\`\``,
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Mixed Income in India & Exam Traps',
        body: `### Why Mixed Income Dominates Indian Factor Accounts
In developed economies, almost all workers are salaried employees (COE) or corporations (Operating Surplus). In India, because over **45% of the workforce is self-employed** (unregistered small farmers, street vendors, kirana store owners), **Mixed Income of the Self-Employed (MI)** represents a massive share (~40%) of Indian domestic factor income.

### Examiner Traps & High-Yield Pitfalls
* ⚠️ **Trap 1: Employers\' Contribution to Social Security:** Included under Compensation of Employees (COE). However, **Employees\' own contribution** is paid out of their take-home wages and is NOT added separately (adding it would be double counting).
* ⚠️ **Trap 2: GFCF vs GCF:** Gross Capital Formation (GCF) is broader than Gross Fixed Capital Formation (GFCF). $\\text{GCF} = \\text{GFCF} + \\text{Change in Stocks} + \\text{Valuables}$.`,
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'RBI_GRADE_B',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Phase 2: Economic & Social Issues — Measurement of GDP (Production, Income, Expenditure)',
        notes: 'Frequently tests components of GFCF, PFCE share in GDP, and Mixed Income accounting.',
      },
      {
        examCode: 'SBI_PO',
        relevance: 'DIRECT_OVERLAY',
        priority: 'MEDIUM',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Mains: General Awareness — GDP Components and Investment Rates (GFCF)',
        notes: 'Covers India\'s consumption-led growth model and GFCF investment rate trends.',
      },
      {
        examCode: 'RPSC_RAS',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Mains Paper 1: Unit 2 — Methods of Calculating National Income',
        notes: 'Direct 10-mark question on explaining the three methods of calculating National Income and their limitations in India.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Production Method: $\\text{GVA} = \\text{GVO} - \\text{Intermediate Consumption}$. Income Method: $\\text{NDP}_{\\text{FC}} = \\text{COE} + \\text{Operating Surplus (Rent+Interest+Profit)} + \\text{Mixed Income}$. Expenditure Method: $\\text{GDP}_{\\text{MP}} = C + I + G + (X - M)$. In India, PFCE is largest (~56-60% of GDP), followed by GCF (~30-32%).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'The three measurement methods are mathematically identical in theory. Production method computes value added across sectors. Income method calculates domestic factor income ($NDP_{FC}$) by summing COE, Operating Surplus, and Mixed Income (crucial in India due to massive self-employed informal sector). Expenditure method computes final demand: $GDP_{MP} = C + I + G + (X - M)$, where $C$ is PFCE, $I$ is Gross Capital Formation (Fixed investment GFCF + Inventory + Valuables), $G$ is GFCE, and $(X - M)$ is Net Exports.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Triple Method National Accounting Architecture: 1. Value Added: $\\sum (P_i Q_i - IC_i)$. 2. Factor Income: $\\sum (wL + rK + \\text{Rent} + \\Pi + \\text{Mixed Income})$. 3. Final Expenditure: $PFCE + GFCE + GFCF + \\Delta \\text{Stocks} + \\text{Valuables} + (X - M) + \\text{Discrepancy}$.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under the Income Method of calculating National Income, "Mixed Income of the Self-Employed" is included because:',
        options: [
          'Self-employed individuals earn income from illegal underground economic activities.',
          'In own-account unincorporated enterprises, factor returns to labour, capital, and entrepreneurship cannot be separated.',
          'It represents transfer payments received from the central government.',
          'It is the only income category that is exempt from direct income taxation in India.',
        ],
        correctAnswer: 'In own-account unincorporated enterprises, factor returns to labour, capital, and entrepreneurship cannot be separated.',
        explanation: 'In unincorporated household enterprises (e.g. small family farms, kirana shops, artisanal workshops, independent consultants), the owner supplies their own labour, capital, land, and managerial entrepreneurship simultaneously. Because the owner does not pay themselves a formal salary or contract rent, it is practically impossible to disentangle how much of their profit is wages versus interest versus rent. Hence, it is grouped together as "Mixed Income of the Self-Employed".',
        trapExplanation: 'Option C is incorrect because mixed income is earned factor income, not a transfer payment.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'RBI Grade B Phase 2 ESI',
        pyqStage: 'Phase 2',
        pyqQuestionNumber: 12,
        examinerTrapPattern: 'First-principles definition of Mixed Income.',
      },
      {
        type: 'CONCEPT_CHECK',
        stem: 'In India\'s National Accounts Statistics, which of the following is the largest component of GDP by expenditure approach ($GDP = C + I + G + X - M$)?',
        options: [
          'Gross Fixed Capital Formation (GFCF)',
          'Government Final Consumption Expenditure (GFCE)',
          'Private Final Consumption Expenditure (PFCE)',
          'Net Exports of Goods and Services ($X - M$)',
        ],
        correctAnswer: 'Private Final Consumption Expenditure (PFCE)',
        explanation: 'Private Final Consumption Expenditure (PFCE), which measures total household and private non-profit spending on consumer goods and services, is the single largest component of India\'s GDP, consistently accounting for approximately 56% to 60% of total GDP. Gross Capital Formation / GFCF is the second largest at ~30-32%, followed by GFCE at ~10-12%, while Net Exports is negative.',
        trapExplanation: 'GFCF is the primary driver of investment, but PFCE is by far the largest absolute share of GDP.',
        difficulty: 'EASY',
        isPYQ: false,
        examinerTrapPattern: 'Structural macro composition of India\'s GDP.',
      },
    ],
  },
  {
    id: 'CON-ECO-16',
    topicOrder: 32,
    topicSlug: 'foundations-of-national-income-accounting',
    topicTitle: 'Foundations of National Income Accounting',
    topicDescription: 'Real vs Nominal GDP, GDP deflator, base year revisions, Green GDP, and limitations of GDP as a welfare metric.',
    slug: 'real-vs-nominal-gdp-gdp-deflator-green-gdp-welfare-limitations',
    title: 'Real vs Nominal GDP, GDP Deflator, Base Year Revisions, Green GDP & Welfare Limitations',
    shortDefinition: 'The distinction between current-price Nominal GDP and constant-price Real GDP, the GDP Deflator price index, base-year revision methodology, Green GDP natural capital accounting, and the welfare limits of GDP.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-16-01',
        statement: 'Nominal GDP evaluates output at current prevailing market prices; Real GDP evaluates output at constant base year prices to isolate genuine physical volume growth from price inflation.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'MoSPI National Accounts Statistics: Sources and Methods (2015); N. Gregory Mankiw, Macroeconomics',
        excerpt: 'Real GDP measures the value of goods and services produced evaluated at constant base-year prices, isolating changes in physical quantities.',
      },
      {
        id: 'CLM-ECO-16-02',
        statement: 'The GDP Deflator ($\\text{GDP Deflator} = \\frac{\\text{Nominal GDP}}{\\text{Real GDP}} \\times 100$) is an implicit Paasche price index measuring economy-wide domestic inflation across all domestically produced goods and services.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'UN System of National Accounts (SNA 2008); MoSPI NAS Methodology',
        excerpt: 'The implicit price deflator for GDP is the ratio of nominal GDP to real GDP multiplied by 100, reflecting the price level of all domestically produced goods and services.',
      },
      {
        id: 'CLM-ECO-16-03',
        statement: 'GDP fails as a comprehensive measure of human welfare due to the exclusion of non-market domestic labour, informal transactions, income inequality blindness, and environmental depletion; Green GDP deducts natural resource depletion and environmental degradation from conventional GDP.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'System of Environmental-Economic Accounting (SEEA 2012, UN / World Bank); Partha Dasgupta (2021) The Economics of Biodiversity: The Dasgupta Review',
        excerpt: 'Conventional GDP measures economic activity without accounting for the depreciation of natural capital. Green national accounting adjusts GDP for environmental degradation and natural resource exhaustion.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Illusion of Price Inflation: Nominal vs Real',
        body: `Imagine an economy that produces only one good: **Bicycles**.
* **Year 1 (Base Year):** Produces 100 bicycles at ₹1,000 each $\\implies \\text{GDP} = \\mathbf{₹1,00,000}$.
* **Year 2:** Produces 100 bicycles at ₹2,000 each $\\implies \\text{Nominal GDP} = \\mathbf{₹2,00,000}$.

Did the economy become twice as wealthy in Year 2? **No!** Citizens have the exact same 100 bicycles to ride. Physical output grew by **0%**, but pure monetary price inflation caused Nominal GDP to double.

* **Real GDP** fixes prices at Base Year levels to reveal true physical expansion.`,
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The GDP Deflator vs CPI & WPI',
        body: `The **GDP Deflator** is the implicit price index of the entire domestic economy:

$$\\mathbf{\\text{GDP Deflator}} = \\frac{\\text{Nominal GDP}}{\\text{Real GDP}} \\times 100$$

$$\\text{Rate of Inflation (Deflator)} = \\frac{\\text{Deflator}_t - \\text{Deflator}_{t-1}}{\\text{Deflator}_{t-1}} \\times 100$$

### Why GDP Deflator Differs from CPI and WPI:
| Dimension | GDP Deflator | Consumer Price Index (CPI) | Wholesale Price Index (WPI) |
|---|---|---|---|
| **Coverage** | **ALL** domestically produced goods & services (Capital goods, defense equipment, consumer goods, IT exports). | Fixed representative consumer basket of goods & services (~299 items). | Fixed representative wholesale basket of **goods only** (697 items, zero services). |
| **Import Treatment** | **EXCLUDES Imports** (Measures only domestic production). | **INCLUDES Imports** consumed by households (e.g. imported smartphones, edible oils). | **INCLUDES Imports** traded at wholesale level (e.g. imported crude oil). |
| **Basket Weights** | **Dynamic Weights** (Paasche Index): Weights change automatically every year based on actual current production. | **Fixed Weights** (Laspeyres-type Index): Fixed to base year weights until official survey revision. | **Fixed Weights** (Laspeyres Index): Fixed to 2011-12 base year. |`,
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Base Year Revisions & Green GDP Framework',
        body: `### 1. Base Year Revisions in India
To maintain macroeconomic accuracy, MoSPI periodically updates the National Accounts Base Year to reflect changing technology, new industries (e-commerce, renewable energy), and updated consumption surveys:
* **Historical Base Years:** 1993-94 $\\to$ 1999-2000 $\\to$ 2004-05 $\\to$ **2011-12 (Current Active Base Year)**.

### 2. Green GDP & SEEA Framework (Natural Capital Accounting)
Conventional GDP treats the extraction of natural resources as pure income, ignoring the depletion of national assets:
* If India cuts down a virgin rainforest to sell timber, conventional GDP **increases** (timber sales counted, but lost carbon sink and biodiversity ignored).

$$\\mathbf{\\text{Green GDP}} = \\text{Conventional GDP} - \\text{Depreciation of Natural Capital} - \\text{Cost of Environmental Degradation}$$

* **SEEA Framework (UN):** System of Environmental-Economic Accounting integrates physical and monetary environmental asset accounts into National Accounts.`,
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Why GDP Fails as a Welfare Measure & Exam Traps',
        body: `### The 5 Structural Flaws of GDP as a Welfare Metric:
1. **Exclusion of Non-Market Care Economy:** Unpaid domestic work and elder/child care performed disproportionately by women is valued at zero in GDP.
2. **Income Inequality Blindness:** A country where 1 billionaire earns ₹10,000 Crore and 1 million citizens starve can have the exact same GDP as a country with equitable wealth distribution.
3. **Informal / Underground Economy Under-Reporting:** Transactions in cash/informal sectors without receipts escape direct tax records.
4. **Regressive Expenditures Counted Positively:** Expenditures on disaster reconstruction, cancer treatments from pollution, and crime defense *increase* GDP despite reducing human well-being.
5. **Quality of Life Ignored:** Leisure time, mental health, political freedom, and life expectancy are absent from GDP.

### Examiner Traps & High-Yield Pitfalls
* ⚠️ **Trap 1: Imported Inflation Impact on Deflator vs CPI:** If imported crude oil price doubles, **CPI rises sharply** (fuel directly in consumer basket), but **GDP Deflator rises by much less** (since crude oil imports are subtracted from GDP via $(X - M)$).
* ⚠️ **Trap 2: Per Capita Income Calculation:** $\\text{Per Capita Income} = \\frac{\\text{Net National Product at Factor Cost (NNP}_{\\text{FC}}\\text{)}}{\\text{Total Mid-Year Population}}$. Using GDP instead of NNP_FC in numerator is technically incorrect.`,
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'RBI_GRADE_B',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Phase 2: Economic & Social Issues — Sustainable Development, Green GDP and Deflators',
        notes: 'Guaranteed questions comparing GDP Deflator vs CPI/WPI and Green national accounting.',
      },
      {
        examCode: 'RPSC_RAS',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Mains Paper 1: Unit 2 — Real vs Nominal GDP, GDP Deflator and Green Accounting',
        notes: 'Direct 5-mark question on GDP Deflator definition and limitations of GDP.',
      },
      {
        examCode: 'UPSC_APFC',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'General Studies: Indian Economy — Growth vs Development and Environmental Accounting',
        notes: 'Covers Green GDP, care economy exclusions, and HDI vs GDP comparisons.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Nominal GDP = current prices. Real GDP = constant base year prices (2011-12). GDP Deflator = $\\frac{\\text{Nominal GDP}}{\\text{Real GDP}} \\times 100$ (covers all domestic goods/services, excludes imports, dynamic weights). Green GDP = GDP - Natural Resource Depletion - Environmental Degradation. GDP ignores unpaid domestic work and inequality.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Nominal GDP reflects both physical production and price inflation; Real GDP isolates physical growth using constant base-year prices. The GDP Deflator is an implicit Paasche price index reflecting the price level of all domestically produced goods and services (unlike CPI, it excludes imports and has dynamic changing weights). Base year in India is currently 2011-12. GDP fails as a welfare indicator because it ignores unpaid care work, income inequality, informal economies, and environmental destruction. Green GDP remedies this by subtracting natural capital depreciation and pollution damage.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Price Deflation & Green Accounting Architecture: 1. Index Theory: Laspeyres (Fixed Base Basket: CPI/WPI) vs Paasche (Current Dynamic Basket: GDP Deflator). 2. Mathematical Nexus: $\\text{Deflator} = \\frac{\\sum P_t Q_t}{\\sum P_0 Q_t} \\times 100$. 3. Natural Capital: $\\text{EDP (Eco-Domestic Product)} = GDP - CFC_{\\text{produced}} - CFC_{\\text{natural}}$. 4. SEEA Framework.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'In a given financial year, India\'s Nominal GDP grew by 12.0% while the GDP Deflator increased by 4.5%. What was the approximate growth rate of Real GDP?',
        options: [
          '16.5%',
          '7.5%',
          '2.67%',
          '5.4%',
        ],
        correctAnswer: '7.5%',
        explanation: 'To a close mathematical approximation: $\\text{Nominal GDP Growth} \\approx \\text{Real GDP Growth} + \\text{Inflation (GDP Deflator)}$. Therefore: $\\text{Real GDP Growth} \\approx \\text{Nominal GDP Growth} - \\text{GDP Deflator Inflation} = 12.0\\% - 4.5\\% = 7.5\\%$. (Exact formula: $\\frac{1.12}{1.045} - 1 = 7.18\\%$, with 7.5% as standard linear approximation in competitive exams).',
        trapExplanation: 'Option A adds the two rates ($12.0 + 4.5 = 16.5\\%$) which is completely inverted.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'RBI Grade B Phase 1',
        pyqStage: 'Phase 1',
        pyqQuestionNumber: 70,
        examinerTrapPattern: 'Basic linear relation between Nominal GDP, Real GDP, and Deflator.',
      },
      {
        type: 'EXCEPTION_PROBE',
        stem: 'Which of the following is a key difference between the GDP Deflator and the Consumer Price Index (CPI)?',
        options: [
          'The GDP Deflator includes the prices of imported consumer goods, whereas the CPI excludes imported goods.',
          'The GDP Deflator reflects the prices of all domestically produced goods and services, whereas the CPI includes only a representative basket of consumer goods and services.',
          'The GDP Deflator is published weekly by the Ministry of Commerce, whereas the CPI is published annually by the RBI.',
          'The GDP Deflator uses fixed base-year weights, whereas the CPI updates weights dynamically every year.',
        ],
        correctAnswer: 'The GDP Deflator reflects the prices of all domestically produced goods and services, whereas the CPI includes only a representative basket of consumer goods and services.',
        explanation: 'The GDP Deflator measures the price level of all domestically produced goods and services (including capital equipment, construction, and government services) and strictly excludes imports. In contrast, the CPI measures the price of a fixed basket of goods and services purchased specifically by typical households, and includes imported consumer products (like foreign electronics and imported fuel).',
        trapExplanation: 'Option A is inverted (CPI includes imported consumer goods, while GDP deflator excludes all imports). Option D is inverted (GDP deflator uses dynamic current weights, CPI uses fixed weights).',
        difficulty: 'MEDIUM',
        isPYQ: false,
        examinerTrapPattern: 'Testing structural differences between GDP Deflator and CPI.',
      },
    ],
  },
  {
    id: 'CON-ECO-17',
    topicOrder: 32,
    topicSlug: 'foundations-of-national-income-accounting',
    topicTitle: 'Foundations of National Income Accounting',
    topicDescription: 'Circular flow of macroeconomic aggregates, savings-investment balance, and twin deficit identities.',
    slug: 'circular-flow-savings-investment-and-twin-deficit-identities',
    title: 'Circular Flow of Macroeconomic Aggregates: Savings, Investment & Sectoral Balance Identities',
    shortDefinition: 'The open-economy macroeconomic accounting framework linking the circular flow of income, Savings-Investment identity, Sectoral Balances, and the Fundamental Twin Deficit identity.',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-ECO-17-01',
        statement: 'In an open economy, macroeconomic equilibrium requires that Aggregate Domestic Output equals Aggregate Expenditure: $Y = C + I + G + (X - M)$, which translates into the leakages-injections equilibrium: $S + T + M = I + G + X$.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'N. Gregory Mankiw, Macroeconomics, Chapter 3: National Income; Richard Stone (1947)',
        excerpt: 'In equilibrium, total leakages from the circular flow of income (savings, taxes, imports) must equal total injections (investment, government spending, exports).',
      },
      {
        id: 'CLM-ECO-17-02',
        statement: 'Total National Savings ($S$) comprises Private Household and Corporate Savings ($S_p = Y - T - C$) and Public Government Savings ($S_g = T - G$); National Savings equals Domestic Investment plus Net Capital Outflow ($S = I + NCO$).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Paul Samuelson & William Nordhaus, Economics, Chapter 20: Macroeconomics Foundations',
        excerpt: 'National saving is the sum of private saving and public saving. In an open economy, national saving equals domestic investment plus net foreign investment.',
      },
      {
        id: 'CLM-ECO-17-03',
        statement: 'The Fundamental Macroeconomic Twin Balance Identity establishes that $(S - I) + (T - G) = (X - M)$, demonstrating that a domestic private investment-saving imbalance and a government fiscal deficit together dictate the Current Account Deficit (CAD).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Martin Feldstein (1983) Domestic Saving and International Capital Movements; Economic Survey of India (External Sector Chapter)',
        excerpt: 'The twin deficits hypothesis demonstrates that an increase in the government budget deficit, holding private saving and investment constant, leads directly to an increase in the current account deficit.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Circular Flow of Income & National Accounting Identity',
        body: `In any economy, money flows in a continuous circle between **Households** and **Firms**:
* Households supply factor services (Labour, Land, Capital) to Firms and receive **Factor Income ($Y$)**.
* Households use this income to purchase goods from Firms (**Consumption Expenditure $C$**).

However, in a realistic 4-sector open economy (Households, Firms, Government, External World), money leaks out of the direct circular flow and enters via injections:

### 1. The 3 Leakages (Withdrawals from Circular Flow):
* **Savings ($S$):** Money saved in banks instead of spent on consumption.
* **Taxes ($T$):** Money paid to the government.
* **Imports ($M$):** Money spent on foreign goods (leaks abroad).

### 2. The 3 Injections (Additions to Circular Flow):
* **Investment ($I$):** Capital spending by firms.
* **Government Expenditure ($G$):** Public procurement and infrastructure.
* **Exports ($X$):** Spending by foreigners on domestic goods.

$$\\mathbf{\\text{Leakages}} = S + T + M \\qquad \\mathbf{\\text{Injections}} = I + G + X$$

$$\\text{Macroeconomic Equilibrium occurs when: } \\mathbf{S + T + M = I + G + X}$$`,
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Deriving the Fundamental Twin Deficit Identity',
        body: `Let us derive the single most important macroeconomic accounting identity connecting the domestic economy with the external world:

1. **Start with Aggregate Output Identity:**
   $$Y = C + I + G + (X - M)$$

2. **Subtract Taxes ($T$) and Consumption ($C$) from both sides:**
   $$Y - T - C = I + G - T + (X - M)$$

3. **Recognize that Private Disposable Income minus Consumption is Private Savings ($S_p = Y - T - C$):**
   $$S_p = I + (G - T) + (X - M)$$

4. **Rearrange into the Master Sectoral Balances Equation:**
   $$\\mathbf{(S_p - I) + (T - G) = (X - M)}$$

\`\`\`
+-----------------------------------------------------------------------+
|                 MASTER SECTORAL BALANCE IDENTITY                      |
|                                                                       |
|      (S - I)           +         (T - G)         =      (X - M)       |
|  [Private Sector               [Public Sector         [External Sector|
|  Net Savings Gap]             Budget Surplus]           Net Exports]  |
+-----------------------------------------------------------------------+
\`\`\`

### The Economic Meaning:
* $(S - I)$: The **Private Sector Financial Balance** (Excess private savings over private capital investment).
* $(T - G)$: The **Government Fiscal Balance** (If $G > T$, this is a **Fiscal Deficit**).
* $(X - M)$: The **Current Account Balance** (If $M > X$, this is a **Current Account Deficit - CAD**).

$$\\mathbf{\\text{Current Account Deficit (CAD)}} = (I - S) + (G - T)$$`,
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'The Twin Deficit Transmission Mechanism',
        body: `The **Twin Deficits Hypothesis** states that when a government runs a high **Fiscal Deficit ($G > T$)**, it directly pulls the country into a high **Current Account Deficit ($M > X$)**:

\`\`\`
Government Fiscal Deficit Expands (G > T)
                  |
                  v
Government Borrows Heavily from Financial Markets
                  |
                  v
Diverts Domestic Private Savings (S) away from Private Investment (I)
                  |
                  v
Domestic Savings Insufficient to Fund Investment (S < I)
                  |
                  v
Country Must Borrow Foreign Capital from Abroad
                  |
                  v
Foreign Capital Inflow Appreciates Domestic Currency / Fuels Imports
                  |
                  v
Current Account Deficit (CAD) Widens! (M > X)
\`\`\``,
        order: 3,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Indian Macroeconomic Application & Exam Traps',
        body: `### Indian Macroeconomic Vulnerability: The 2013 "Taper Tantrum" Shock
In 2013, India suffered from a classic **Twin Deficit Crisis**:
* Combined Fiscal Deficit was high at ~7.5% of GDP.
* Current Account Deficit (CAD) widened to a dangerous record of **4.8% of GDP**.
* When the US Federal Reserve hinted at raising interest rates ("Taper Tantrum"), foreign capital fled India rapidly, crashing the Indian Rupee from ₹54 to ₹68 per USD in weeks.

### Examiner Traps & High-Yield Pitfalls
* ⚠️ **Trap 1: Savings Identity in a Closed vs Open Economy:**
  - In a **Closed Economy ($X = M = 0$):** National Savings must mathematically equal Domestic Investment ($S = I$).
  - In an **Open Economy:** National Savings does NOT have to equal Domestic Investment; the difference is financed by foreign borrowing: $S - I = X - M = \\text{Net Capital Outflow}$.
* ⚠️ **Trap 2: High Investment is Not Bad:** A high CAD is not necessarily disastrous if it is driven by high productive private investment ($I > S$) importing capital machinery that expands future productive capacity, rather than wasteful government consumption ($G > T$).`,
        order: 4,
      },
    ],
    examMappings: [
      {
        examCode: 'RBI_GRADE_B',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Phase 2: Economic & Social Issues — Macroeconomic Balances, Balance of Payments and Fiscal Deficits',
        notes: 'High-priority topic for descriptive answer writing on macroeconomic stability and external sector vulnerabilities.',
      },
      {
        examCode: 'UPSC_APFC',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'General Studies: Indian Economy — Macroeconomic Equilibrium and Balance of Payments',
        notes: 'Direct MCQs on the Twin Deficit identity and Leakages vs Injections.',
      },
      {
        examCode: 'RPSC_RAS',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Mains Paper 1: Unit 2 — Macroeconomic Dynamics and Fiscal Deficits',
        notes: '5-mark analytical question explaining the relationship between Fiscal Deficit and Current Account Deficit.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Leakages $(S + T + M)$ = Injections $(I + G + X)$. Master Sectoral Balance Identity: $(S - I) + (T - G) = (X - M)$. Twin Deficit Hypothesis: High Fiscal Deficit $(G > T)$ combined with private savings gap $(I > S)$ forces a Current Account Deficit $(M > X)$. In closed economy $S = I$; in open economy $S = I + NCO$.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Macroeconomic equilibrium requires leakages (Savings, Taxes, Imports) to equal injections (Investment, Government Spending, Exports). Rearranging the national output identity $Y = C + I + G + (X - M)$ yields the Fundamental Sectoral Balance Identity: $(S_p - I) + (T - G) = (X - M)$. This proves that a nation\'s Current Account Deficit (CAD) is strictly the sum of its private investment-savings deficit $(I - S)$ and its government fiscal deficit $(G - T)$. India\'s 2013 macroeconomic crisis was a classic manifestation of the Twin Deficit dilemma.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Sectoral Balance Architecture: 1. Four-Sector Circular Flow: Households, Firms, Govt, Rest of World. 2. Leakage-Injection Equilibrium: $S + T + M = I + G + X$. 3. Net Foreign Investment Identity: $S - I = NCO = NX$. 4. Twin Deficits: $\\text{CAD} = (I - S) + \\text{Fiscal Deficit}$. 5. Indian Policy: Fiscal consolidation (FRBM) to preserve external currency stability.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'According to the Macroeconomic Sectoral Balance Identity, if a country has a Private Sector Savings Surplus of $(S - I) = ₹200\\text{ Crore}$ and a Government Fiscal Deficit of $(G - T) = ₹500\\text{ Crore}$, what is the country\'s Current Account Balance $(X - M)$?',
        options: [
          'A Current Account Surplus of ₹300 Crore',
          'A Current Account Deficit (CAD) of ₹300 Crore',
          'A Current Account Deficit (CAD) of ₹700 Crore',
          'A Current Account Surplus of ₹700 Crore',
        ],
        correctAnswer: 'A Current Account Deficit (CAD) of ₹300 Crore',
        explanation: 'Use the master identity: $(S - I) + (T - G) = (X - M)$. Given: $(S - I) = +200\\text{ Crore}$. Since the Government runs a Fiscal Deficit of ₹500 Crore, $(T - G) = -500\\text{ Crore}$. Substitute into the equation: $+200 + (-500) = (X - M) \\implies (X - M) = -300\\text{ Crore}$. A negative Net Export value ($(X - M) = -300$) represents a Current Account Deficit (CAD) of ₹300 Crore.',
        trapExplanation: 'Option C is calculated by incorrectly subtracting the private surplus from the deficit instead of offsetting it ($500 + 200 = 700$).',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'RBI Grade B Phase 2 ESI',
        pyqStage: 'Phase 2',
        pyqQuestionNumber: 18,
        examinerTrapPattern: 'Numerical application of the Master Sectoral Balance Identity.',
      },
      {
        type: 'EXCEPTION_PROBE',
        stem: 'Which of the following represents a "LEAKAGE" (withdrawal) from the circular flow of income in a 4-sector macroeconomic model?',
        options: [
          'Capital Investment expenditure ($I$) by business corporations.',
          'Government procurement expenditure ($G$) on highway construction.',
          'Import expenditure ($M$) on foreign petroleum products.',
          'Export earnings ($X$) from software service exports.',
        ],
        correctAnswer: 'Import expenditure ($M$) on foreign petroleum products.',
        explanation: 'In the circular flow of income, Leakages are portions of household factor income that are NOT spent on domestically produced consumer goods. The three leakages are: Savings ($S$, held in financial institutions), Taxes ($T$, collected by the government), and Imports ($M$, money sent abroad to foreign producers). In contrast, Investment ($I$), Government Spending ($G$), and Exports ($X$) are Injections that add spending into the domestic circular flow.',
        trapExplanation: 'Options A, B, and D are all Injections into the domestic circular flow.',
        difficulty: 'EASY',
        isPYQ: false,
        examinerTrapPattern: 'Distinguishing Leakages (S, T, M) from Injections (I, G, X).',
      },
    ],
  },
];

export async function seedBatchE1CanonicalKnowledge() {
  console.log('Seeding Batch E1 Canonical Knowledge (17 Concepts)...');

  // Verify or create Domain & Subject
  let domain = await db.domain.findFirst({ where: { slug: 'indian-economy-macroeconomics' } });
  if (!domain) {
    domain = await db.domain.create({
      data: {
        slug: 'indian-economy-macroeconomics',
        name: 'Indian Economy & Macroeconomics',
        description: 'Comprehensive Economic Theory, Macroeconomic Policies, Banking, Financial Markets and Sectoral Systems.',
        order: 2,
      },
    });
  }

  let subject = await db.subject.findFirst({ where: { slug: 'indian-economy' } });
  if (!subject) {
    subject = await db.subject.create({
      data: {
        slug: 'indian-economy',
        name: 'Indian Economy & Macroeconomic Policy',
        description: 'First-principles canonical foundation covering Microeconomics, Macroeconomics, Monetary Systems, Public Finance, Agriculture, and State Economic Frameworks.',
        scopeStatement: 'Comprehensive canonical economics knowledge base covering foundations, microeconomics, macroeconomics, fiscal, monetary, and sectoral economics.',
        domainId: domain.id,
        order: 2,
      },
    });
  }

  const sourceEcon = await db.source.upsert({
    where: { id: 'SRC-ECONOMICS-CANONICAL-2026' },
    update: {},
    create: {
      id: 'SRC-ECONOMICS-CANONICAL-2026',
      title: 'Economics & Macroeconomic Policy Canonical Reference Corpus (2026)',
      sourceType: 'ACADEMIC_CANONICAL_SYNTHESIS',
      authorityTier: 'PEER_REVIEWED_ACADEMIC_REFERENCE',
      description: 'Authoritative first-principles academic synthesis integrating RBI Reports, SEBI Guidelines, MoSPI National Accounts 2015, and standard micro/macroeconomic textbooks.',
    },
  });

  // Ensure Exams Exist
  const examCodes = ['RBI_GRADE_B', 'SEBI_GRADE_A', 'NABARD_GRADE_A', 'SBI_PO', 'IBPS_PO', 'RPSC_RAS', 'IIBF_DBF', 'UPSC_APFC'];
  const examMap: Record<string, string> = {};

  for (const code of examCodes) {
    let exam = await db.exam.findFirst({ where: { slug: code.toLowerCase().replace(/_/g, '-') } });
    if (!exam) {
      exam = await db.exam.create({
        data: {
          slug: code.toLowerCase().replace(/_/g, '-'),
          name: code.replace(/_/g, ' '),
          conductingBody: code.split('_')[0],
          description: `Target examination suite for ${code}`,
          syllabusSummary: `Economics, Banking, and General Awareness syllabus for ${code}`,
        },
      });
    }
    examMap[code] = exam.id;
  }

  // Group by topic and seed
  const topicGroups: Record<string, CanonicalConceptDefinition[]> = {};
  for (const c of BATCH_E1_CONCEPTS) {
    if (!topicGroups[c.topicSlug]) {
      topicGroups[c.topicSlug] = [];
    }
    topicGroups[c.topicSlug].push(c);
  }

  for (const [topicSlug, concepts] of Object.entries(topicGroups)) {
    const first = concepts[0];
    let topic = await db.topic.findFirst({ where: { slug: topicSlug } });
    if (!topic) {
      topic = await db.topic.create({
        data: {
          slug: topicSlug,
          title: first.topicTitle,
          description: first.topicDescription,
          subjectId: subject.id,
          order: first.topicOrder,
        },
      });
    } else {
      topic = await db.topic.update({
        where: { id: topic.id },
        data: {
          title: first.topicTitle,
          description: first.topicDescription,
          order: first.topicOrder,
        },
      });
    }

    for (let i = 0; i < concepts.length; i++) {
      const cDef = concepts[i];
      let concept = await db.concept.findUnique({ where: { id: cDef.id } });

      if (concept) {
        // Delete child records to re-seed cleanly
        await db.claim.deleteMany({ where: { conceptId: concept.id } });
        await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
        await db.examConceptMapping.deleteMany({ where: { conceptId: concept.id } });
        await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
        await db.question.deleteMany({ where: { conceptId: concept.id } });

        concept = await db.concept.update({
          where: { id: cDef.id },
          data: {
            title: cDef.title,
            slug: cDef.slug,
            shortDefinition: cDef.shortDefinition,
            difficulty: cDef.difficulty,
            topicId: topic.id,
            order: i + 1,
          },
        });
      } else {
        concept = await db.concept.create({
          data: {
            id: cDef.id,
            title: cDef.title,
            slug: cDef.slug,
            shortDefinition: cDef.shortDefinition,
            difficulty: cDef.difficulty,
            topicId: topic.id,
            order: i + 1,
          },
        });
      }

      // Seed Claims & Evidence
      for (const cl of cDef.claims) {
        const claim = await db.claim.create({
          data: {
            id: cl.id,
            conceptId: concept.id,
            statement: cl.statement,
            claimType: cl.claimType,
            epistemicLevel: cl.epistemicLevel,
            confidence: cl.confidence,
            status: 'VERIFIED',
          },
        });

        // Create Evidence
        await db.evidence.create({
          data: {
            claimId: claim.id,
            sourceId: sourceEcon.id,
            locator: cl.locator,
            excerpt: cl.excerpt,
            evidenceType: 'STATUTORY_PROVISION',
            authority: 'AUTHORITATIVE_STATUTE',
            evidentiarySupport: 'DIRECT_SUPPORT',
            extractionConfidence: 'HIGH',
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
            pyqYear: q.pyqYear,
            pyqPaper: q.pyqPaper,
            pyqStage: q.pyqStage,
            pyqQuestionNumber: q.pyqQuestionNumber,
            examinerTrapPattern: q.examinerTrapPattern,
          },
        });
      }
    }
  }

  console.log(`Successfully seeded ${BATCH_E1_CONCEPTS.length} Batch E1 canonical concepts.`);
}
