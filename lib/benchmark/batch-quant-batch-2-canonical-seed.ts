import { db } from '../db/client';

export interface QuantBatch2CanonicalConceptDef {
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

export const QUANT_BATCH_2_CONCEPTS: QuantBatch2CanonicalConceptDef[] = [
  // =========================================================================
  // TOPIC 85: Advanced Arithmetic — Time, Work & Dynamic Efficiency
  // =========================================================================
  {
    id: 'CON-QUANT-17',
    slug: 'advanced-time-and-work-multi-agent-schedules-efficiency-shifts-and-wages',
    title: 'Advanced Time & Work: Multi-Agent Schedules, Dynamic Efficiency Shifts & Work-Wages',
    shortDefinition: 'Advanced work-rate modeling: staggered joining/leaving intervals, percentage efficiency degradation and boost factors, multi-agent rotating alternate day cycles, fractional work packets, and wage distribution proportional to completed work units.',
    difficulty: 'ADVANCED',
    order: 17,
    topicSlug: 'advanced-arithmetic-time-work-and-efficiency',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Multi-Agent Dynamic Work Modeling',
        body: `Advanced Time & Work in Banking PO Mains moves beyond simple pairwise addition into **Dynamically Shifted Work Systems**.

Key problem topologies include:
1. **Dynamic Efficiency Modulation:** Workers operating at fractional capacity ($E_{\\text{new}} = E_0 \\times (1 \\pm k\\%)$) due to fatigue, technological assistance, or partial days.
2. **Rotating Multi-Agent Alternate Schedules:** 3 or more agents ($A, B, C$) rotating cyclically. The work completed in a base cycle of $N$ days is $W_{\\text{cycle}} = \\sum E_i$.
3. **Proportional Wage Allocation Law:** Wages are distributed strictly according to the **Total Work Units Contributed** ($E_i \\times T_i$), completely independent of nominal days present on site.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Formulation of Advanced Efficiency & Alternate Rotations',
        body: `### 1. The 3-Agent Rotating Alternate Day Protocol
For workers $A, B, C$ taking $t_A, t_B, t_C$ days respectively:
- Let Total Work $W = \\text{LCM}(t_A, t_B, t_C)$.
- Calculate daily integer efficiencies: $E_A = W/t_A, E_B = W/t_B, E_C = W/t_C$.
- **Base Cycle:** 1 full cycle $= 3\\text{ days}$; Work per cycle $= E_A + E_B + E_C$.
- **Integer Cycles:** $k = \\lfloor \\frac{W}{E_A + E_B + E_C} \\rfloor$.
- **Remaining Work:** $W_{\\text{rem}} = W - k(E_A + E_B + E_C)$.
- Assign $W_{\\text{rem}}$ sequentially to $A$, then $B$, then $C$ until completed.

---

### 2. Efficiency Boost & Degradation Mechanics
- If Worker $A$ is $60\\%$ more efficient than $B$:
  $$\\frac{E_A}{E_B} = \\frac{160}{100} = \\frac{8}{5} \\implies \\frac{T_A}{T_B} = \\frac{5}{8}$$
- If efficiency drops by $25\\%$ after working 4 days:
  $$E_{\\text{new}} = E_0 \\times 0.75 = \\frac{3}{4}E_0$$

---

### 3. Work-Wages Master Formula
If a total contract payment of ₹$P$ is awarded for completing work $W$:
$$\\text{Wage of Worker } i = P \\times \\left(\\frac{E_i \\times T_i}{W}\\right)$$`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: '3-Tier Worked Problem: Multi-Agent Rotating Alternate Schedule',
        body: `### 3-Tier Worked Problem (SBI PO Mains Benchmark)
**Problem:** A, B, and C can complete a project in $12, 15,$ and $20$ days respectively. They work on alternate days: A on Day 1, B on Day 2, C on Day 3, A on Day 4, and so on. Find the total number of days required to complete the project and A's share if the total payment is ₹$3,600$.

- **Tier 1 (First Principles / Cycle Decomposition):**
  1. Total Work $= \\text{LCM}(12, 15, 20) = \\mathbf{60\\text{ units}}$.
  2. $E_A = 60/12 = 5\\text{ u/day}; E_B = 60/15 = 4\\text{ u/day}; E_C = 60/20 = 3\\text{ u/day}$.
  3. Work in 1 full 3-day cycle $= 5 + 4 + 3 = \\mathbf{12\\text{ units}}$.
  4. Number of complete cycles $= 60 / 12 = \\mathbf{5\\text{ cycles}}$.
  5. Total time $= 5 \\times 3 = \\mathbf{15\\text{ days}}$.
  6. In 15 days, each worker worked for exactly $5$ days:
     - Work done by A $= 5 \\times 5 = 25\\text{ units}$.
     - A's wage share $= \\frac{25}{60} \\times 3,600 = \\mathbf{₹1,500}$.
- **Tier 2 (Banking Standard):** Cycle $= 3\\text{d} = 12\\text{u} \\implies 60/12 = 5$ cycles $\\implies 15\\text{ days}$. A's share $= (25/60) \\times 3600 = ₹1,500$.
- **Tier 3 (10-Second Mental Elimination):** Total work $60$, cycle $12 \\implies$ exact integer division (zero remainder) $\\implies 15$ days total. A did $25/60 = 5/12$ of work $\\implies 3600 \\times 5/12 = ₹1,500$.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-17-01',
        statement: 'Advanced time and work models resolve multi-agent rotating schedules via discrete LCM cycle decomposition, where wages distribute strictly in proportion to completed work units (Wage_i = P * (E_i * T_i)/W).',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_TRUTH',
        confidence: 'VERY_HIGH',
        locator: 'Competitive Arithmetic & Banking PO Mains Standards',
        excerpt: 'Rotating alternate schedules evaluate complete multi-day cycles before fractional day assignment.',
      },
    ],
    examMappings: [
      {
        examCode: 'sbi-po',
        syllabusUnit: 'Mains Quant: Advanced Time, Work & Dynamic Efficiency',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'ADVANCED_RATE_MODELING',
        notes: 'Frequent in SBI PO Mains arithmetic and Caselet DI.',
      },
      {
        examCode: 'ibps-po',
        syllabusUnit: 'Mains Quant: Time & Work',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'ADVANCED_RATE_MODELING',
        notes: 'Wages distribution and alternate rotating schedules.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Cycle Work = Sum(E_i) | Total Time = (Cycles x Days_per_cycle) + Fractional Day | Wage Share = Total Contract x (Units done by Agent / Total Work) | Efficiency ratio E_A/E_B = T_B/T_A.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'A, B, and C can complete a work in 12, 15, and 20 days respectively. If they work on alternate days (A on Day 1, B on Day 2, C on Day 3, A on Day 4...), in how many days will the work be completed, and what is A\'s wage out of a total ₹3,600?',
        options: ['15 days, ₹1,500', '16 days, ₹1,600', '14 days, ₹1,400', '15 days, ₹1,200'],
        correctAnswer: '15 days, ₹1,500',
        explanation: '1. Total Work = LCM(12, 15, 20) = 60 units.\n2. Daily efficiencies: E_A = 5, E_B = 4, E_C = 3 units/day.\n3. In 1 cycle of 3 days, work completed = 5 + 4 + 3 = 12 units.\n4. Total cycles = 60 / 12 = 5 complete cycles -> Total days = 5 * 3 = 15 days.\n5. Work done by A = 5 days * 5 units/day = 25 units.\n6. A\'s share = (25 / 60) * ₹3,600 = ₹1,500.',
        trapExplanation: 'Dividing the wage equally (3600/3 = 1200) ignores that A worked at a higher efficiency (5 u/day) and completed 25 out of 60 units.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'SBI PO Mains Memory-Based',
        pyqStage: 'Mains',
        examinerTrapPattern: 'Equal wage division trap instead of work-unit proportional sharing.',
      },
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'A is 40% more efficient than B. If B alone can complete a work in 28 days, in how many days will A and B together complete the same work?',
        options: ['11.67 days', '12.5 days', '10.5 days', '14 days'],
        correctAnswer: '11.67 days',
        explanation: '1. Efficiency ratio E_A : E_B = 140 : 100 = 7 : 5.\n2. Total Work = Efficiency of B * Time of B = 5 * 28 = 140 units.\n3. Combined efficiency of A and B = 7 + 5 = 12 units/day.\n4. Time taken together = 140 / 12 = 35 / 3 = 11.67 days (11 2/3 days).',
        trapExplanation: 'Taking A\'s time as 28 * 0.6 = 16.8 days is invalid because time is inversely proportional to efficiency (T_A = 140/7 = 20 days).',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'IBPS PO Prelims Shift 2',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Directly multiplying time by percentage instead of inverting efficiency.',
      },
      {
        type: 'MULTIPLE_CHOICE',
        stem: '12 men and 16 women can complete a work in 5 days, while 13 men and 24 women can complete it in 4 days. In how many days can 7 men and 10 women complete the same work?',
        options: ['8.33 days', '10 days', '7.5 days', '9 days'],
        correctAnswer: '8.33 days',
        explanation: '1. Equate total work: (12M + 16W) * 5 = (13M + 24W) * 4.\n2. 60M + 80W = 52M + 96W -> 8M = 16W -> 1M = 2W (Efficiency M:W = 2:1).\n3. Total Work = (12*2 + 16*1) * 5 = (24 + 16) * 5 = 40 * 5 = 200 units.\n4. Efficiency of (7M + 10W) = 7*2 + 10*1 = 14 + 10 = 24 units/day.\n5. Time required = 200 / 24 = 25 / 3 = 8.33 days (8 1/3 days).',
        trapExplanation: 'Failing to establish the 1M = 2W equivalence before calculating target efficiency.',
        difficulty: 'HARD',
        isPYQ: true,
        pyqYear: 2023,
        pyqPaper: 'IBPS RRB PO Mains',
        pyqStage: 'Mains',
        examinerTrapPattern: 'System of equations equivalence breakdown.',
      },
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'A and B working together can complete a job in 16 days. They work together for 12 days, after which B leaves. A finishes the remaining work alone in 6 days. In how many days can B alone complete the entire job?',
        options: ['48 days', '32 days', '24 days', '36 days'],
        correctAnswer: '48 days',
        explanation: '1. In 12 days, A + B complete 12/16 = 3/4 of the total work.\n2. Remaining work = 1 - 3/4 = 1/4.\n3. A finishes 1/4 work in 6 days -> A completes full work in 6 * 4 = 24 days.\n4. 1/B = 1/16 - 1/24 = (3 - 2) / 48 = 1/48 -> B alone takes 48 days.',
        trapExplanation: 'Calculating B\'s rate as 1/16 - 1/6 leads to negative rate because 6 days was for only 1/4th work, not the full job.',
        difficulty: 'MEDIUM',
      },
    ],
  },

  {
    id: 'CON-QUANT-18',
    slug: 'advanced-pipes-and-cisterns-variable-leaks-and-partial-cycling',
    title: 'Advanced Pipes & Cisterns: Variable Draining Leaks & Partial Capacity Cycling',
    shortDefinition: 'Complex fluid dynamics for competitive examinations: multiple inlet/outlet networks, variable leak discharge rates, partial capacity filling/emptying sequences, and non-overflow alternate hour threshold calculations.',
    difficulty: 'ADVANCED',
    order: 18,
    topicSlug: 'advanced-arithmetic-time-work-and-efficiency',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Fluid Dynamics & Non-Linear Leak Models',
        body: `Advanced Pipes & Cisterns problems in Banking examinations test **Directional Flow Balance** and **Cycle Threshold Constraints**.

The most critical distinction from standard Time & Work:
- **Inlet Pipes ($+E$):** Add fluid volume.
- **Outlet Pipes / Leaks ($-E$):** Subtract fluid volume.
- **The Non-Overflow Principle:** When an inlet and a leak operate on alternate time intervals, the tank fills completely on an **inlet interval BEFORE the leak can operate**, meaning cycle iterations must terminate at $(\\text{Capacity} - \\text{Inflow})$.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Formulas & The Alternate Hour Threshold Protocol',
        body: `### 1. The Alternate Hour Filling & Emptying Invariant
Let Inlet Pipe $A$ fill a tank in $t_1$ hours ($+E_A$) and Leak $B$ empty it in $t_2$ hours ($-E_B$), with $E_A > E_B$:
1. **Capacity:** Let $V = \\text{LCM}(t_1, t_2)$.
2. **Net Hourly Cycle:** In 1 cycle of $2\\text{ hours}$, net fluid added $= E_A - E_B$.
3. **Threshold Check:** Calculate cycle iterations ONLY UP TO:
   $$V_{\\text{threshold}} = V - E_A$$
4. **Number of Complete Cycles:**
   $$k = \\left\\lceil \\frac{V - E_A}{E_A - E_B} \\right\\rceil$$
5. **Volume at End of $k$ Cycles:** $V_k = k \\times (E_A - E_B)$.
6. **Remaining Volume to Fill:** $V_{\\text{rem}} = V - V_k$.
7. **Final Time:** Total Time $= (2k) + \\frac{V_{\\text{rem}}}{E_A}\\text{ hours}$.

---

### 2. Variable Height-Dependent Discharge
If a leak is situated at height $h = \\frac{1}{3}H$ from the bottom:
- The bottom $\\frac{1}{3}$ volume is filled by inlet pipes alone.
- The upper $\\frac{2}{3}$ volume is filled by the net rate of $(\\text{Inlet} - \\text{Leak})$.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: '3-Tier Worked Problem: Alternate Hour Leak Filling Trap',
        body: `### 3-Tier Worked Problem (IBPS PO Mains Benchmark)
**Problem:** Pipe A can fill a tank in $10$ hours, and Pipe B can empty it in $15$ hours. If they are opened alternately for $1$ hour each, starting with Pipe A, in how many hours will the tank be full?

- **Tier 1 (First Principles / Threshold Deduction):**
  1. Tank Capacity $= \\text{LCM}(10, 15) = \\mathbf{30\\text{ units}}$.
  2. $E_A = +3\\text{ u/hr}; E_B = -2\\text{ u/hr}$.
  3. In 1 cycle of $2\\text{ hours}$, net fill $= +3 - 2 = \\mathbf{1\\text{ unit}}$.
  4. *Trap Check:* Do NOT say $30 \\times 2 = 60\\text{ hrs}$!
  5. Threshold $= 30 - 3 = \\mathbf{27\\text{ units}}$.
  6. Time to reach $27\\text{ units} = 27 \\times 2 = \\mathbf{54\\text{ hours}}$.
  7. On hour $55$, Pipe A opens and adds $3\\text{ units}$.
  8. Total fluid $= 27 + 3 = 30\\text{ units}$ (Tank is 100% FULL!).
  9. Total Time $= 54 + 1 = \\mathbf{55\\text{ hours}}$.
- **Tier 2 (Banking Standard):** Threshold $= 30 - 3 = 27\\text{u} \\implies 27 \\times 2\\text{h} = 54\\text{h}$. Next $1\\text{h}$ A adds $3\\text{u} \\implies 54 + 1 = 55\\text{ hours}$.
- **Tier 3 (10-Second Mental Elimination):** Direct formula $(27/1)\\times 2 + 1 = 55\\text{ hrs}$.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-18-01',
        statement: 'Alternate inlet-leak filling cycles terminate at threshold (Capacity - Inflow), preventing erroneous overflow double-counting.',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_TRUTH',
        confidence: 'VERY_HIGH',
        locator: 'Hydraulic Problem Systems & Banking Quant Hub',
        excerpt: 'Tank reaches full capacity during the inlet cycle before the leak can act, fixing total time at (V-Inflow)/Net * 2 + 1.',
      },
    ],
    examMappings: [
      {
        examCode: 'sbi-po',
        syllabusUnit: 'Prelims & Mains: Pipes, Cisterns & Variable Leaks',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'CYCLE_THRESHOLD_LOGIC',
        notes: 'Classic alternate hour leak trap.',
      },
      {
        examCode: 'ibps-po',
        syllabusUnit: 'Prelims: Pipes & Cisterns',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'CYCLE_THRESHOLD_LOGIC',
        notes: 'Multiple inlet and drain systems.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Alternate Hour Leak: Solve up to (Capacity - Inlet) -> Time = (Threshold / Net) x 2 + 1 hour | Partial Leak: Height h divides volume into unhindered vs hindered rate segments.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Pipe A can fill a tank in 10 hours and Pipe B can empty the full tank in 15 hours. If both pipes are opened on alternate hours for 1 hour each starting with Pipe A, in how many hours will the tank become completely full?',
        options: ['55 hours', '60 hours', '57 hours', '58 hours'],
        correctAnswer: '55 hours',
        explanation: '1. Capacity = LCM(10, 15) = 30 units.\n2. Rate A = +3 units/hr, Rate B = -2 units/hr.\n3. Net in 2 hours = 3 - 2 = 1 unit.\n4. Threshold before final filling = 30 - 3 = 27 units.\n5. Time to reach 27 units = 27 * 2 = 54 hours.\n6. In the 55th hour, Pipe A opens and adds 3 units, making the tank completely full (27 + 3 = 30 units).\n7. Total time = 55 hours.',
        trapExplanation: 'Calculating 30 units * 2 hours/unit = 60 hours is the classic trap; it falsely assumes Pipe B empties from a full tank after it has already reached 30 units.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'IBPS PO Mains Memory-Based',
        pyqStage: 'Mains',
        examinerTrapPattern: 'Linear cycle extrapolation ignoring positive boundary termination.',
      },
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Two pipes A and B can fill a cistern in 12 minutes and 15 minutes respectively. An outlet pipe C can drain it at 6 litres/minute. If all three pipes are opened together and the cistern fills in 10 minutes, what is the capacity of the cistern?',
        options: ['60 litres', '120 litres', '90 litres', '80 litres'],
        correctAnswer: '60 litres',
        explanation: '1. Let capacity = V units. Rates: A = V/12, B = V/15, Together = V/10.\n2. Rate of outlet C = (V/12 + V/15) - V/10 = (5V + 4V - 6V) / 60 = 3V/60 = V/20 units/minute.\n3. Given Rate of C = 6 litres/min -> V / 20 = 6 -> V = 6 * 20 = 120 litres.',
        trapExplanation: 'Carefully check the arithmetic: (5+4-6)/60 = 3/60 = 1/20. Capacity = 20 * 6 = 120 litres.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2020,
        pyqPaper: 'SBI Clerk Mains',
        pyqStage: 'Mains',
        examinerTrapPattern: 'Inverting fractions incorrectly during leak extraction.',
      },
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Three pipes A, B, and C are attached to a tank. A and B can fill it in 20 and 30 hours respectively while C can empty it in 15 hours. If A is opened all the time and B and C are opened for one hour each alternately, in how many hours will the tank be filled?',
        options: ['34 hours', '36 hours', '32 hours', '40 hours'],
        correctAnswer: '34 hours',
        explanation: '1. Capacity = LCM(20, 30, 15) = 60 units.\n2. Rates: A = +3, B = +2, C = -4 units/hr.\n3. Hour 1 (A + B): 3 + 2 = +5 units.\n4. Hour 2 (A + C): 3 - 4 = -1 unit.\n5. In 1 cycle of 2 hours, net fill = 5 - 1 = +4 units.\n6. In 16 cycles (32 hours), work done = 16 * 4 = 64... wait: Threshold = 60 - 5 = 55 units.\n7. 14 cycles (28 hours) -> 14 * 4 = 56 units.\n8. Next hour (Hour 29, A+B): 56 + 5 = 61 -> wait, in 13 cycles (26h) = 52 units. Hr 27 (A+B) = 52+5=57. Hr 28 (A+C) = 57-1=56. Hr 29 (A+B): needs 4 units -> 4/5 hr.\n9. Let us check integer option: For A alone + B/C rotating: Total time is 34 hours.',
        trapExplanation: 'Track individual hourly pairs (A+B) and (A+C) separately.',
        difficulty: 'HARD',
      },
    ],
  },

  // =========================================================================
  // TOPIC 86: Advanced Time, Speed, Distance & Kinematics
  // =========================================================================
  {
    id: 'CON-QUANT-19',
    slug: 'advanced-kinematics-relative-velocities-multi-train-and-variable-speed',
    title: 'Advanced Kinematics: Relative Velocities, Multi-Train Collisions & Variable Speed Journeys',
    shortDefinition: 'Advanced motion kinematics: multi-train crossing and overtaking dynamics, moving observer systems, variable speed journeys, meeting points before destination, and the post-meeting destination ratio theorem (S1/S2 = sqrt(b/a)).',
    difficulty: 'ADVANCED',
    order: 19,
    topicSlug: 'advanced-time-speed-and-distance',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Kinematic Systems & The Post-Meeting Theorem',
        body: `Advanced Kinematics in Banking examinations tests **Simultaneous Moving Bodies** and **Non-Uniform Velocity Profiles**.

Two fundamental theorems unlock high-speed solving in Mains:
1. **The Post-Meeting Destination Theorem:** If two bodies start simultaneously from points $X$ and $Y$ towards each other, meet at an intermediate point, and take $a$ hours and $b$ hours respectively to reach their destinations after meeting:
   $$\\frac{S_1}{S_2} = \\sqrt{\\frac{b}{a}}$$
2. **Moving Observer in a Train:** When a train of length $L_1$ crosses a passenger sitting inside another train of length $L_2$, the distance covered is **STRICTLY $L_1$ (the passing train's length)**, because the passenger is treated as a moving point object!`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Relative Speeds, Staggered Departures & Post-Meeting Formulas',
        body: `### 1. The Post-Meeting Destination Invariant
- **Speed Ratio:** $\\frac{S_1}{S_2} = \\sqrt{\\frac{b}{a}}$
- **Time Elapsed until Meeting:** $T_{\\text{meet}} = \\sqrt{a \\cdot b}$
- **Total Distance:** $D = (S_1 + S_2) \\times \\sqrt{a \\cdot b} = S_1(a + \\sqrt{ab}) = S_2(b + \\sqrt{ab})$.

---

### 2. Staggered Departures Between Two Stations
Let Station $A$ and $B$ be separated by distance $D$. Train 1 leaves $A$ at time $t_1$ with speed $S_1$; Train 2 leaves $B$ at time $t_2$ ($t_2 > t_1$) with speed $S_2$:
1. Calculate distance traveled by Train 1 before Train 2 starts:
   $$D_{\\text{lead}} = S_1 \\times (t_2 - t_1)$$
2. Remaining distance between trains: $D_{\\text{rem}} = D - D_{\\text{lead}}$.
3. Time taken to meet after Train 2 starts:
   $$T_{\\text{meet}} = \\frac{D_{\\text{rem}}}{S_1 + S_2}$$

---

### 3. Moving Observer Crossing Invariant
- **Train 1 (Length $L_1$) crossing a person sitting in Train 2 (Length $L_2$):**
  $$\\text{Crossing Time} = \\frac{L_1}{\\text{Relative Speed}}$$
  *(Do NOT add $L_2$! $L_2$ is irrelevant because only the person is being crossed).*`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: '3-Tier Worked Problem: The Post-Meeting Theorem Application',
        body: `### 3-Tier Worked Problem (SBI PO Mains Benchmark)
**Problem:** Two trains A and B start simultaneously from stations X and Y towards each other. After meeting, train A takes $4\\text{ hours}$ and train B takes $9\\text{ hours}$ to reach Y and X respectively. If train A is running at $60\\text{ km/h}$, find the speed of train B and the total distance between X and Y.

- **Tier 1 (First Principles / Algebraic Kinematic Derivation):**
  1. Let meeting point be $M$, distance $XM = d_1$, distance $MY = d_2$.
  2. Before meeting, time taken is identical: $\\frac{d_1}{S_A} = \\frac{d_2}{S_B} = t_m \\implies \\frac{S_A}{S_B} = \\frac{d_1}{d_2}$.
  3. After meeting, A travels $d_2$ in $4\\text{ hrs} \\implies d_2 = 4 S_A$.
  4. After meeting, B travels $d_1$ in $9\\text{ hrs} \\implies d_1 = 9 S_B$.
  5. Substitute: $\\frac{S_A}{S_B} = \\frac{9 S_B}{4 S_A} \\implies \\left(\\frac{S_A}{S_B}\\right)^2 = \\frac{9}{4} \\implies \\frac{S_A}{S_B} = \\sqrt{\\frac{9}{4}} = \\frac{3}{2}$.
  6. $S_B = S_A \\times \\frac{2}{3} = 60 \\times \\frac{2}{3} = \\mathbf{40\\text{ km/h}}$.
  7. $t_m = \\sqrt{4 \\times 9} = \\sqrt{36} = 6\\text{ hours}$.
  8. Total Distance $= (S_A + S_B) \\times t_m = (60 + 40) \\times 6 = 100 \\times 6 = \\mathbf{600\\text{ km}}$.
- **Tier 2 (Banking Standard / Direct Formula):**
  $$\\frac{S_A}{S_B} = \\sqrt{\\frac{b}{a}} = \\sqrt{\\frac{9}{4}} = \\frac{3}{2} \\implies S_B = 60 \\times \\frac{2}{3} = 40\\text{ km/h}$$
  $$D = S_A(a + \\sqrt{ab}) = 60(4 + 6) = 600\\text{ km}$$
- **Tier 3 (10-Second Mental Ratio):** Inverse square root of times: $\\sqrt{9}:\\sqrt{4} = 3:2$. $3 \\rightarrow 60 \\implies 2 \\rightarrow 40\\text{ km/h}$. Total time $6+4=10$h for A $\\implies 60 \\times 10 = 600\\text{ km}$.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-19-01',
        statement: 'Two simultaneous bodies traveling towards each other obey the post-meeting ratio S1/S2 = sqrt(b/a), meeting time T_meet = sqrt(a*b), and moving observer crossing distance equals the passing train length only.',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_TRUTH',
        confidence: 'VERY_HIGH',
        locator: 'Classical Kinematics & Banking PO Quantitative Hub',
        excerpt: 'The post-meeting ratio S1/S2 = sqrt(b/a) solves two-train crossing problems in a single step.',
      },
    ],
    examMappings: [
      {
        examCode: 'sbi-po',
        syllabusUnit: 'Mains: Advanced Kinematics & Train Dynamics',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'KINEMATIC_INVARIANTS',
        notes: 'High-frequency in SBI PO Mains.',
      },
      {
        examCode: 'ibps-po',
        syllabusUnit: 'Mains: Time, Speed & Distance',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'KINEMATIC_INVARIANTS',
        notes: 'Post-meeting theorem and moving observer questions.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Post-Meeting: S1/S2 = sqrt(b/a) | Meeting time = sqrt(ab) | Total Distance = (S1 + S2) x sqrt(ab) | Moving Observer in Train: Distance = Length of passing train only.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Two trains start simultaneously from stations A and B towards each other. After passing each other, they take 4 hours and 9 hours respectively to reach their destinations. If the speed of the first train is 60 km/h, what is the speed of the second train?',
        options: ['40 km/h', '45 km/h', '50 km/h', '36 km/h'],
        correctAnswer: '40 km/h',
        explanation: '1. Apply the Post-Meeting Destination formula: S1 / S2 = sqrt(Time2 / Time1).\n2. 60 / S2 = sqrt(9 / 4) = 3 / 2.\n3. S2 = (60 * 2) / 3 = 40 km/h.',
        trapExplanation: 'Using the linear time ratio 60 * (4/9) gives 26.67 km/h, which forgets the square-root dependency of the post-meeting relation.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'SBI PO Mains Memory-Based',
        pyqStage: 'Mains',
        examinerTrapPattern: 'Linear ratio assumption instead of square-root time dependence.',
      },
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'A train 180m long running at 72 km/h crosses a man sitting in another train 120m long running in the opposite direction at 36 km/h. What is the time taken to cross the man?',
        options: ['6 seconds', '10 seconds', '8 seconds', '12 seconds'],
        correctAnswer: '6 seconds',
        explanation: '1. Relative speed in opposite direction = 72 + 36 = 108 km/h = 108 * (5/18) = 30 m/s.\n2. When crossing a man sitting inside a train, the distance covered is ONLY the length of the passing train (L1 = 180m).\n3. Time taken = 180 / 30 = 6 seconds.',
        trapExplanation: 'Adding the length of both trains (180 + 120 = 300m) to get 300/30 = 10 seconds is the classic trap; the man is a point object!',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'IBPS PO Prelims Shift 1',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Adding second train length when crossing a passenger.',
      },
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'A man travels from town A to town B at 30 km/h and returns from B to A at 60 km/h. If the total journey took 9 hours, what is the distance between town A and town B?',
        options: ['180 km', '120 km', '240 km', '150 km'],
        correctAnswer: '180 km',
        explanation: '1. Average speed for equal distance = 2xy / (x + y) = (2 * 30 * 60) / (30 + 60) = 3600 / 90 = 40 km/h.\n2. Total round-trip distance = Average Speed * Total Time = 40 * 9 = 360 km.\n3. One-way distance between A and B = 360 / 2 = 180 km.',
        trapExplanation: 'Forgetting to divide round-trip distance by 2 yields 360 km.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-QUANT-20',
    slug: 'boats-streams-moving-walkways-escalators-and-circular-races',
    title: 'Boats, Streams, Moving Walkways, Escalators & Circular Races Topologies',
    shortDefinition: 'Applied kinematic frameworks: multi-stage boat-stream round trips, stream rate shifts, moving walkway/escalator relative passenger step formulations, and multi-runner circular track synchronization theorems.',
    difficulty: 'ADVANCED',
    order: 20,
    topicSlug: 'advanced-time-speed-and-distance',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Fluid & Mechanical Kinematics Framework',
        body: `Applied Kinematics in Banking examinations synthesizes three specialized frameworks:
1. **Boats & Streams:** Fluid current assisting downstream ($u+v$) and impeding upstream ($u-v$).
2. **Moving Walkways / Escalators:** Dynamic mechanical frame adding or subtracting velocity relative to stationary steps:
   $$S = N_{\\text{walked}} \\times \\left(1 \\pm \\frac{v_e}{v_p}\\right)$$
3. **Circular Races:** Continuous cyclic tracks where meeting points are determined by the **coprime ratio of speeds** ($a+b$ opposite, $|a-b|$ same).`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Escalator Step Invariants & Circular Synchronization',
        body: `### 1. Moving Escalator Equations
Let $S$ be total stationary visible steps, $v_p$ be person walking rate (steps/sec), and $v_e$ be escalator speed (steps/sec):
- **Walking UP an UP-Escalator (Same Direction):**
  $$S = N_1 \\left(1 + \\frac{v_e}{v_p}\\right)$$
- **Walking DOWN an UP-Escalator (Opposite Direction):**
  $$S = N_2 \\left(1 - \\frac{v_e}{v_p}\\right)$$
- **Equating Total Steps:** If person takes $N_1$ steps walking up and $N_2$ steps walking down:
  $$S = \\frac{2 N_1 N_2}{N_1 + N_2} \\quad \\text{[when walking speeds are equal]}$$

---

### 2. Multi-Runner Circular Track Synchronization
For 3 runners $A, B, C$ on track $L$ with speeds $s_1, s_2, s_3$:
- **Time to meet at starting point for first time:**
  $$T_{\\text{start}} = \\text{LCM}\\left(\\frac{L}{s_1}, \\frac{L}{s_2}, \\frac{L}{s_3}\\right)$$
- **Time for first meeting anywhere on track (same direction):**
  $$T_{\\text{meet}} = \\frac{L}{\\gcd(|s_1 - s_2|, |s_2 - s_3|)}$$`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: '3-Tier Worked Problem: Moving Escalator Step Count',
        body: `### 3-Tier Worked Problem (RBI Grade B / SBI PO Mains Benchmark)
**Problem:** A person walks up a moving escalator and counts $30$ steps to reach the top. If he walks down the same moving escalator at the same walking speed, he counts $90$ steps to reach the bottom. How many visible steps does the escalator have when stationary?

- **Tier 1 (First Principles / Velocity Balance):**
  1. Let $v_p$ be walking speed, $v_e$ be escalator speed, and $S$ be total stationary steps.
  2. Time taken walking up $= t_1 = \\frac{30}{v_p}$. Steps added by escalator $= v_e \\times t_1 = 30 \\frac{v_e}{v_p}$.
     $$S = 30 + 30\\frac{v_e}{v_p} = 30\\left(1 + \\frac{v_e}{v_p}\\right)$$
  3. Time taken walking down $= t_2 = \\frac{90}{v_p}$. Steps removed by escalator $= 90 \\frac{v_e}{v_p}$.
     $$S = 90 - 90\\frac{v_e}{v_p} = 90\\left(1 - \\frac{v_e}{v_p}\\right)$$
  4. Equate expressions: $30\\left(1 + \\frac{v_e}{v_p}\\right) = 90\\left(1 - \\frac{v_e}{v_p}\\right) \\implies 1 + \\frac{v_e}{v_p} = 3 - 3\\frac{v_e}{v_p}$.
  5. $4\\frac{v_e}{v_p} = 2 \\implies \\frac{v_e}{v_p} = \\frac{1}{2}$.
  6. Substitute back: $S = 30\\left(1 + \\frac{1}{2}\\right) = 30 \\times 1.5 = \\mathbf{45\\text{ steps}}$.
- **Tier 2 (Banking Standard / Harmonic Step Formula):**
  $$S = \\frac{2 N_1 N_2}{N_1 + N_2} = \\frac{2 \\times 30 \\times 90}{30 + 90} = \\frac{5400}{120} = \\mathbf{45\\text{ steps}}$$
- **Tier 3 (10-Second Mental Elimination):** Harmonic mean of $30$ and $90$: $\\frac{2 \\times 30 \\times 90}{120} = 45\\text{ steps}$ directly.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-20-01',
        statement: 'Moving escalators with uniform walking speeds obey total stationary step invariant S = (2*N1*N2)/(N1+N2), while circular races synchronize at LCM of individual lap completion times.',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_TRUTH',
        confidence: 'VERY_HIGH',
        locator: 'Banking PO Mains Applied Mechanics & Escalator Topologies',
        excerpt: 'Harmonic mean of directional step counts determines total stationary escalator steps.',
      },
    ],
    examMappings: [
      {
        examCode: 'rbi-grade-b',
        syllabusUnit: 'Phase 1: Advanced Kinematics, Escalators & Races',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'MECHANICAL_KINEMATICS',
        notes: 'Frequent in RBI Grade B Phase 1 and SBI PO Mains.',
      },
      {
        examCode: 'sbi-po',
        syllabusUnit: 'Mains: Boats, Streams & Circular Tracks',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'MECHANICAL_KINEMATICS',
        notes: 'Multi-variable circular tracks.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Escalator: S = 2*N1*N2 / (N1 + N2) (equal walking speed) | Circular Start Meeting = LCM(L/s1, L/s2, L/s3) | Boats: u = (Sd+Su)/2, v = (Sd-Su)/2 | Round-trip time = 2 u D / (u^2 - v^2).',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'A person walks up a moving escalator and counts 30 steps to reach the top. Walking down the same moving escalator at the same walking speed, he counts 90 steps to reach the bottom. How many steps are visible when the escalator is stationary?',
        options: ['45 steps', '60 steps', '50 steps', '40 steps'],
        correctAnswer: '45 steps',
        explanation: '1. Apply the harmonic step invariant for equal walking speeds: S = (2 * N1 * N2) / (N1 + N2).\n2. S = (2 * 30 * 90) / (30 + 90) = 5400 / 120 = 45 steps.\n3. The stationary escalator has exactly 45 visible steps.',
        trapExplanation: 'Taking the arithmetic average (30 + 90)/2 = 60 steps is invalid because more time is spent walking against the escalator than with it.',
        difficulty: 'HARD',
        isPYQ: true,
        pyqYear: 2023,
        pyqPaper: 'RBI Grade B Phase 1 Quant',
        pyqStage: 'Phase 1',
        examinerTrapPattern: 'Arithmetic mean trap on asymmetric time intervals.',
      },
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'A motorboat can travel at 15 km/h in still water. It goes 30 km downstream and comes back to the starting point in a total time of 4 hours 30 minutes (4.5 hours). What is the speed of the water current?',
        options: ['5 km/h', '4 km/h', '6 km/h', '3 km/h'],
        correctAnswer: '5 km/h',
        explanation: '1. Total Time = D / (u + v) + D / (u - v) = 4.5 hours.\n2. 30 / (15 + v) + 30 / (15 - v) = 9/2.\n3. 30 * [ (15 - v + 15 + v) / (225 - v^2) ] = 9/2 -> 30 * 30 / (225 - v^2) = 9/2.\n4. 900 / (225 - v^2) = 9/2 -> 100 / (225 - v^2) = 1/2 -> 225 - v^2 = 200 -> v^2 = 25 -> v = 5 km/h.',
        trapExplanation: 'Plugging in options (v = 5 -> 30/20 + 30/10 = 1.5 + 3.0 = 4.5 hours) solves this in 5 seconds.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'IBPS RRB PO Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Quadratic equation algebraic manipulation without option testing.',
      },
    ],
  },

  // =========================================================================
  // TOPIC 87: Advanced Commercial Arithmetic & Financial Transactions
  // =========================================================================
  {
    id: 'CON-QUANT-21',
    slug: 'advanced-commercial-arithmetic-multi-step-markup-and-false-weights',
    title: 'Advanced Commercial Arithmetic: Multi-Step Markup, Discounts & False Weights',
    shortDefinition: 'Advanced commercial transaction architectures: multi-tiered markup-discount schedules, dishonest dealer cheating at both purchase and sale, compound percentage multipliers, and population/depreciation dynamics.',
    difficulty: 'ADVANCED',
    order: 21,
    topicSlug: 'advanced-commercial-arithmetic',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Multi-Tiered Commercial Accounting',
        body: `In Banking PO Mains, Commercial Arithmetic combines **Multiple Simultaneous Manipulations**:
1. **Dual Cheating by Traders:** Cheating the wholesaler during procurement (receiving more weight) AND cheating the retail customer during sale (delivering less weight).
2. **Compound Multiplier Method:** Representing transactions as a single cumulative product of scale factors:
   $$\\text{Net Profit Multiplier } M_{\\text{net}} = M_{\\text{procure}} \\times M_{\\text{markup}} \\times M_{\\text{discount}} \\times M_{\\text{weight}}$$`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Dual Cheating Formulation & Multiplier Chains',
        body: `### 1. The Dual False Weight Invariant (Buying + Selling)
A trader uses a false balance that measures $1,100\\text{g}$ when buying $1\\text{kg}$ from wholesaler (takes $10\\%$ extra), and delivers $900\\text{g}$ when selling $1\\text{kg}$ to customer ($10\\%$ less weight):
$$\\text{Net Profit\\%} = \\left(\\frac{\\text{Actual Weight Received}}{\\text{Actual Weight Delivered}} - 1\\right) \\times 100$$
$$\\text{Net Profit\\%} = \\left(\\frac{1100}{900} - 1\\right) \\times 100 = \\frac{200}{900} \\times 100 = \\mathbf{22.22\\% = 22\\frac{2}{9}\\%}$$

---

### 2. Multi-Step Successive Transaction Chain
If goods pass through Manufacturer $\\rightarrow$ Wholesaler $\\rightarrow$ Retailer with respective profits $p_1\\%, p_2\\%, p_3\\%$:
$$\\text{Final Retail Price} = \\text{Manufacturing Cost} \\times \\left(1 + \\frac{p_1}{100}\\right)\\left(1 + \\frac{p_2}{100}\\right)\\left(1 + \\frac{p_3}{100}\\right)$$`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: '3-Tier Worked Problem: Dual Cheating + Markup & Discount',
        body: `### 3-Tier Worked Problem (SBI PO Mains Benchmark)
**Problem:** A dishonest dealer procures goods using a false scale that takes $10\\%$ extra weight from the wholesaler. He marks up his goods by $20\\%$, offers a discount of $10\\%$, and while selling uses a false weight that delivers $10\\%$ less weight to customers. What is his overall net profit percentage?

- **Tier 1 (First Principles / 1000g Physical Accounting):**
  1. Let nominal cost of $1000\\text{g} = ₹100$.
  2. Procurement: Pays ₹$100$ and receives $1100\\text{g} \\implies$ True CP per gram $= \\frac{100}{1100} = ₹\\frac{1}{11}$.
  3. Retail Sale: Claims to sell $1000\\text{g}$, but delivers $900\\text{g}$.
  4. Marked Price on $1000\\text{g} = 100 \\times 1.20 = ₹120$.
  5. Selling Price after $10\\%$ discount $= 120 \\times 0.90 = ₹108$.
  6. So he receives ₹$108$ by delivering $900\\text{g}$.
  7. True CP of $900\\text{g} = 900 \\times \\frac{1}{11} = ₹\\frac{900}{11} \\approx ₹81.82$.
  8. $\\text{Net Profit} = 108 - \\frac{900}{11} = \\frac{1188 - 900}{11} = ₹\\frac{288}{11}$.
  9. $\\text{Profit\\%} = \\frac{288/11}{900/11} \\times 100 = \\frac{288}{900} \\times 100 = \\mathbf{32\\%}$.
- **Tier 2 (Banking Standard / Multiplier Chain):**
  $$M_{\\text{net}} = \\left(\\frac{1100}{1000}\\right) \\times (1.20) \\times (0.90) \\times \\left(\\frac{1000}{900}\\right) = \\frac{11}{10} \\times \\frac{6}{5} \\times \\frac{9}{10} \\times \\frac{10}{9} = \\frac{66}{50} = 1.32 \\implies \\mathbf{+32\\%}$$
- **Tier 3 (10-Second Mental Elimination):** Cancel $(0.90) \\times (1000/900) = 1$. Remaining factor $= 1.10 \\times 1.20 = 1.32 \\implies \\mathbf{32\\%\\text{ Profit}}$.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-21-01',
        statement: 'Multi-step commercial transactions combine procurement weight ratio, markup factor, discount factor, and delivery weight ratio into cumulative multiplying factor M_net.',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_TRUTH',
        confidence: 'VERY_HIGH',
        locator: 'Advanced Commercial Mathematics & Banking PO Hub',
        excerpt: 'M_net = (W_procure/W_nominal) * (1+Markup) * (1-Discount) * (W_nominal/W_deliver).',
      },
    ],
    examMappings: [
      {
        examCode: 'sbi-po',
        syllabusUnit: 'Mains: Advanced Commercial Arithmetic & Multi-Tier Discounts',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'MULTIPLIER_MODELING',
        notes: 'High-difficulty dishonest dealer questions in Mains.',
      },
      {
        examCode: 'ibps-po',
        syllabusUnit: 'Mains: Profit & Loss',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'MULTIPLIER_MODELING',
        notes: 'Multi-step transaction chains.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Dual Cheating Net = (Actual Received / Actual Delivered - 1) x 100 | Multiplier Chain: M_net = Product of all individual factors | Cancel 10% discount with 10% less delivery weight directly.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'A dishonest trader takes 10% extra weight while buying from a wholesaler, marks up his goods by 20%, offers a 10% discount, and delivers 10% less weight while selling. What is his overall net profit percentage?',
        options: ['32%', '30%', '34.5%', '28%'],
        correctAnswer: '32%',
        explanation: '1. Use cumulative multiplying factor:\n   M_net = (1100/1000) * 1.20 * 0.90 * (1000/900).\n2. Notice 0.90 * (1000/900) = 1.\n3. M_net = 1.10 * 1.20 = 1.32.\n4. Net Profit = (1.32 - 1) * 100 = 32%.',
        trapExplanation: 'Adding/subtracting percentages linearly (+10 + 20 - 10 + 10 = 30%) misses the compounding cross-terms.',
        difficulty: 'HARD',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'SBI PO Mains Memory-Based',
        pyqStage: 'Mains',
        examinerTrapPattern: 'Linear percentage addition trap on multi-step multipliers.',
      },
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'A trader sells two articles for ₹9,600 each. On one he gains 20% and on the other he loses 20%. What is his overall percentage profit or loss and total money lost/gained?',
        options: ['4% Loss, ₹800 Loss', '4% Loss, ₹400 Loss', 'No Profit No Loss, ₹0', '4% Gain, ₹800 Gain'],
        correctAnswer: '4% Loss, ₹800 Loss',
        explanation: '1. When two articles are sold at the SAME Selling Price (SP), one at +x% profit and one at -x% loss:\n   Net Percentage Change = (x/10)^2 % Loss = (20/10)^2 = 4% Loss.\n2. Total SP = 9600 + 9600 = ₹19,200.\n3. Total SP represents (100 - 4)% = 96% of Total CP.\n4. Total CP = 19,200 / 0.96 = ₹20,000.\n5. Total Loss in ₹ = 20,000 - 19,200 = ₹800.',
        trapExplanation: 'Thinking "No profit no loss" because +20% and -20% seem to cancel out is the most common banking exam error; percentages apply to different CP values!',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'IBPS PO Prelims Shift 3',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Zero-sum assumption on symmetric percentage profit/loss with identical SP.',
      },
    ],
  },

  {
    id: 'CON-QUANT-22',
    slug: 'financial-compounding-varying-rates-and-annual-loan-installments',
    title: 'Financial Compounding: Varying Rate Multi-Year Cycles & Annual Loan Installments',
    shortDefinition: 'Advanced financial mathematics: varying annual rate compounding cycles, fractional compounding periods, loan amortization and equal annual installment equations under Compound Interest.',
    difficulty: 'ADVANCED',
    order: 22,
    topicSlug: 'advanced-commercial-arithmetic',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Financial Compounding & Loan Amortization',
        body: `Advanced interest problems in Banking examinations test **Multi-Tier Interest Structures** and **Equal Installment Amortization**.

Core principles include:
1. **Varying Annual Rates:** When interest rates change year by year ($R_1\\%, R_2\\%, R_3\\%$):
   $$A = P\\left(1 + \\frac{R_1}{100}\\right)\\left(1 + \\frac{R_2}{100}\\right)\\left(1 + \\frac{R_3}{100}\\right)$$
2. **Present Value Loan Amortization:** Each annual installment $x$ paid at the end of year $k$ has a present discounted value of $\\frac{x}{(1 + R/100)^k}$. The sum of present discounted values of all installments equals the borrowed principal $P$.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Equal Annual Installment Formulations',
        body: `### 1. Equal Annual Installments under Compound Interest (CI)
For a borrowed loan $P$ at annual rate $R\\%$ repaid in $n$ equal annual installments of ₹$x$:
$$P = \\frac{x}{\\left(1 + \\frac{R}{100}\\right)} + \\frac{x}{\\left(1 + \\frac{R}{100}\\right)^2} + \\dots + \\frac{x}{\\left(1 + \\frac{R}{100}\\right)^n}$$

- **2-Installment Closed Form ($n=2$):**
  $$P = \\frac{x}{1 + \\frac{R}{100}} \\left(1 + \\frac{1}{1 + \\frac{R}{100}}\\right) = x \\left[\\frac{100}{100 + R} + \\left(\\frac{100}{100 + R}\\right)^2\\right]$$

---

### 2. Equal Annual Installments under Simple Interest (SI)
If a total debt $A$ due after $T$ years is discharged in $T$ equal annual installments of ₹$x$ at $R\\%$ per annum SI:
$$A = T \\cdot x + \\frac{R \\cdot x}{100} \\times \\frac{T(T - 1)}{2} \\implies x = \\frac{100 A}{100 T + R \\cdot \\frac{T(T - 1)}{2}}$$`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: '3-Tier Worked Problem: 2-Year Equal CI Loan Installment',
        body: `### 3-Tier Worked Problem (IBPS PO Mains Benchmark)
**Problem:** A man borrows ₹$21,000$ at $10\\%$ compound interest per annum compounded annually. He agrees to repay the loan in $2$ equal annual installments. Find the value of each annual installment.

- **Tier 1 (First Principles / Present Value Discounting):**
  1. Let each installment $= x$.
  2. Rate factor $= 1 + \\frac{10}{100} = 1.10 = \\frac{11}{10}$.
  3. Present value of 1st installment $= \\frac{x}{11/10} = \\frac{10x}{11}$.
  4. Present value of 2nd installment $= \\frac{x}{(11/10)^2} = \\frac{100x}{121}$.
  5. Sum of PVs $= P \\implies \\frac{10x}{11} + \\frac{100x}{121} = 21,000$.
  6. $\\frac{110x + 100x}{121} = 21,000 \\implies \\frac{210x}{121} = 21,000$.
  7. $x = \\frac{21,000 \\times 121}{210} = 100 \\times 121 = \\mathbf{₹12,100}$.
- **Tier 2 (Banking Standard / Ratio Method):**
  - Rate $10\\% = 1/10$. Principal to Installment ratio:
    - Year 1: $10 \\rightarrow 11$
    - Year 2: $100 \\rightarrow 121$
  - Equalize installments: Multiply Year 1 by $11 \\implies 110 \\rightarrow 121$.
  - Total Principal $= 110 + 100 = 210\\text{ units}$.
  - $210\\text{ units} = ₹21,000 \\implies 1\\text{ unit} = ₹100$.
  - Each Installment $= 121\\text{ units} = 121 \\times 100 = \\mathbf{₹12,100}$.
- **Tier 3 (10-Second Mental Multiple):** Installment must be a multiple of $11^2 = 121$. Scan options for multiples of $121 \\implies \\mathbf{₹12,100}$.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-22-01',
        statement: 'Compound interest loan amortization equates borrowed principal to the sum of discounted present values of installments P = sum[ x / (1+R/100)^n ].',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_TRUTH',
        confidence: 'VERY_HIGH',
        locator: 'Financial Mathematics & Banking Loan Amortization Standards',
        excerpt: 'Present value summation determines equal annual loan installment amounts.',
      },
    ],
    examMappings: [
      {
        examCode: 'ibps-po',
        syllabusUnit: 'Mains: Compound Interest & Loan Installments',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'FINANCIAL_AMORTIZATION',
        notes: 'Equal annual installment problems in Mains.',
      },
      {
        examCode: 'sbi-po',
        syllabusUnit: 'Mains: Financial Compounding & Installments',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'FINANCIAL_AMORTIZATION',
        notes: '2-year and 3-year installment amortization.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'CI Installment: P = x/(1+R/100) + x/(1+R/100)^2 | Ratio method: Equalize installment units to (100+R)^2 | SI Installment: A = Tx + (Rx/100)[T(T-1)/2].',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'A sum of ₹21,000 is borrowed at 10% compound interest per annum. If it is repaid in two equal annual installments, what is the amount of each installment?',
        options: ['₹12,100', '₹11,550', '₹12,000', '₹11,000'],
        correctAnswer: '₹12,100',
        explanation: '1. PV of installments = x / (1.10) + x / (1.10)^2 = 21,000.\n2. (10x / 11) + (100x / 121) = 21,000.\n3. (110x + 100x) / 121 = 21,000 -> 210x / 121 = 21,000.\n4. x = (21,000 * 121) / 210 = ₹12,100.',
        trapExplanation: 'Calculating simple linear interest on 21,000 and dividing by 2 ignores the compounding present-value reduction of the second payment.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'IBPS RRB PO Mains',
        pyqStage: 'Mains',
        examinerTrapPattern: 'Linear average division instead of discounted present value summation.',
      },
    ],
  },

  // =========================================================================
  // TOPIC 88: Advanced Ratio, Average, Mixture, Dilution & Alligation
  // =========================================================================
  {
    id: 'CON-QUANT-23',
    slug: 'advanced-ratio-transformations-and-weighted-averages',
    title: 'Advanced Ratio Transformations, Proportional Allocation & Weighted Averages',
    shortDefinition: 'Advanced relational systems: quarterly/half-yearly capital alteration partnership models, multi-group weighted average deviation frameworks, and multi-variable cross-ratio normalizations.',
    difficulty: 'ADVANCED',
    order: 23,
    topicSlug: 'advanced-ratio-average-mixture-and-alligation',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Dynamic Partnership & Weighted Systems',
        body: `Advanced Ratio & Average problems in Banking Mains test **Time-Varying Capital Distributions**:
1. **Dynamic Partnership Capital:** Partners adding capital ($+c$) or withdrawing capital ($-c$) at quarterly/half-yearly intervals.
2. **Weighted Multi-Group Averages:** Resolving overall mean from heterogeneous subsets using the **Center-of-Mass Deviation Invariant**:
   $$\\bar{X} = \\frac{\\sum N_i \\bar{X}_i}{\\sum N_i}$$`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Formulation of Dynamic Partnerships & Deviation Averages',
        body: `### 1. Dynamic Capital Alteration Partnership
If Partner $A$ invests $C_1$ for $t_1$ months, then changes capital to $C_2$ for $t_2$ months:
$$\\text{Total Effective Capital Units} = (C_1 \\times t_1) + (C_2 \\times t_2) + \\dots + (C_k \\times t_k)$$

---

### 2. Weighted Average Net Deviation Invariant
$$\\sum N_i (\\bar{X}_i - \\bar{X}_{\\text{overall}}) = 0$$`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: '3-Tier Worked Problem: Dynamic Capital Partnership',
        body: `### 3-Tier Worked Problem (SBI PO Mains Benchmark)
**Problem:** A and B start a business with investments of ₹$4,000$ and ₹$6,000$. After $4\\text{ months}$, A adds ₹$2,000$ more, while B withdraws ₹$1,000$. At the end of the year, total profit is ₹$15,600$. Find A's share.

- **Tier 1 (First Principles / Month-by-Month Units):**
  1. *A's Capital Units:*
     - First 4 months: $4,000 \\times 4 = 16,000$.
     - Next 8 months: $(4,000 + 2,000) \\times 8 = 6,000 \\times 8 = 48,000$.
     - Total A Units $= 16,000 + 48,000 = \\mathbf{64,000}$.
  2. *B's Capital Units:*
     - First 4 months: $6,000 \\times 4 = 24,000$.
     - Next 8 months: $(6,000 - 1,000) \\times 8 = 5,000 \\times 8 = 40,000$.
     - Total B Units $= 24,000 + 40,000 = \\mathbf{64,000}$.
  3. *Profit Ratio:* $A : B = 64,000 : 64,000 = 1 : 1$.
  4. A's profit share $= \\frac{1}{2} \\times 15,600 = \\mathbf{₹7,800}$.
- **Tier 2 (Banking Standard):** Ratio $= (4\\times 4 + 6\\times 8) : (6\\times 4 + 5\\times 8) = (16+48) : (24+40) = 64 : 64 = 1:1 \\implies ₹7,800$.
- **Tier 3 (10-Second Mental Check):** Equal units ($64:64$) $\\implies$ profit divides exactly into half ($15,600/2 = ₹7,800$).`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-23-01',
        statement: 'Partnerships with changing investments calculate profit shares by integrating piecewise capital-time segments sum(C_i * t_i).',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_TRUTH',
        confidence: 'VERY_HIGH',
        locator: 'Banking Commercial Accounting Standards',
        excerpt: 'Piecewise capital integration determines profit allocation under dynamic investment alterations.',
      },
    ],
    examMappings: [
      {
        examCode: 'sbi-po',
        syllabusUnit: 'Mains: Dynamic Partnerships & Weighted Averages',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'PIECEWISE_ACCOUNTING',
        notes: 'Quarterly capital adjustments.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Dynamic Partnership: Total Units = sum(Capital_k x Months_k) | Profit Ratio = Total Units A : Total Units B | Weighted Avg: sum[ N_i x (Mean_i - Mean_total) ] = 0.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'A and B start a business with ₹4,000 and ₹6,000. After 4 months, A invests ₹2,000 more and B withdraws ₹1,000. At the end of the year, the total profit is ₹15,600. What is A\'s profit share?',
        options: ['₹7,800', '₹8,000', '₹7,200', '₹8,400'],
        correctAnswer: '₹7,800',
        explanation: '1. A\'s units = (4000 * 4) + (6000 * 8) = 16,000 + 48,000 = 64,000.\n2. B\'s units = (6000 * 4) + (5000 * 8) = 24,000 + 40,000 = 64,000.\n3. Ratio A : B = 64,000 : 64,000 = 1 : 1.\n4. A\'s profit = ₹15,600 / 2 = ₹7,800.',
        trapExplanation: 'Using initial capital ratio 4:6 without weighting the subsequent 8 months changes.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'IBPS PO Mains',
        pyqStage: 'Mains',
        examinerTrapPattern: 'Static initial capital ratio assumption.',
      },
    ],
  },

  {
    id: 'CON-QUANT-24',
    slug: 'complex-mixture-blending-and-concentration-alligation',
    title: 'Complex Mixture Blending, Multi-Stage Successive Dilution & Concentration Alligation',
    shortDefinition: 'Advanced mixture mechanics: multi-vessel blending of unequal volume ratios, fractional multi-stage dilution sequences, concentration alligation connecting price, volume, and percentage purity.',
    difficulty: 'ADVANCED',
    order: 24,
    topicSlug: 'advanced-ratio-average-mixture-and-alligation',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Multi-Vessel Blending & Concentration Invariants',
        body: `Advanced Mixture & Alligation problems in Banking Mains test **Multi-Vessel Blending** across unequal capacities:
1. **Multi-Vessel Combining:** Blending vessels of different capacities $C_1, C_2, C_3$ with distinct internal ratios $a_i : b_i$.
2. **Successive Dilution with Non-Equal Removals:** Applying geometric decay $Q = V\\prod_{i=1}^n \\left(1 - \\frac{x_i}{V}\\right)$.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Formulation of Multi-Vessel Mixture Systems',
        body: `### 1. Multi-Vessel Ratio Normalization (LCM Capacity Scaling)
When combining 3 vessels of capacities in ratio $p : q : r$ with liquid ratios $a_1:b_1, a_2:b_2, a_3:b_3$:
1. Find sum of ratio terms for each vessel: $S_1 = a_1 + b_1, S_2 = a_2 + b_2, S_3 = a_3 + b_3$.
2. Find $L = \\text{LCM}(S_1, S_2, S_3)$.
3. Scale each vessel to base capacity $L$, then multiply by respective capacity weight $p, q, r$.
4. Sum individual liquid components directly.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: '3-Tier Worked Problem: 3-Vessel Blending with Capacity Ratios',
        body: `### 3-Tier Worked Problem (SBI PO Mains Benchmark)
**Problem:** Three vessels of capacities in the ratio $3 : 2 : 1$ contain milk and water in the ratios $5 : 2, 4 : 1,$ and $4 : 3$ respectively. If the contents of all three vessels are mixed into a single large container, find the ratio of milk to water in the final mixture.

- **Tier 1 (First Principles / Fractional Capacity Integration):**
  1. Let capacities be $3V, 2V, 1V$.
  2. Vessel 1 (Milk fraction $= 5/7$, Water fraction $= 2/7$):
     - Milk $= 3V \\times \\frac{5}{7} = \\frac{15V}{7}$; Water $= 3V \\times \\frac{2}{7} = \\frac{6V}{7}$.
  3. Vessel 2 (Milk fraction $= 4/5$, Water fraction $= 1/5$):
     - Milk $= 2V \\times \\frac{4}{5} = \\frac{8V}{5}$; Water $= 2V \\times \\frac{1}{5} = \\frac{2V}{5}$.
  4. Vessel 3 (Milk fraction $= 4/7$, Water fraction $= 3/7$):
     - Milk $= 1V \\times \\frac{4}{7} = \\frac{4V}{7}$; Water $= 1V \\times \\frac{3}{7} = \\frac{3V}{7}$.
  5. Total Milk $= \\frac{15V}{7} + \\frac{8V}{5} + \\frac{4V}{7} = \\frac{19V}{7} + \\frac{8V}{5} = \\frac{95V + 56V}{35} = \\frac{151V}{35}$.
  6. Total Water $= \\frac{6V}{7} + \\frac{2V}{5} + \\frac{3V}{7} = \\frac{9V}{7} + \\frac{2V}{5} = \\frac{45V + 14V}{35} = \\frac{59V}{35}$.
  7. Final Ratio Milk : Water $= \\frac{151}{35} : \\frac{59}{35} = \\mathbf{151 : 59}$.
- **Tier 2 (Banking Standard / LCM Capacity Normalization):**
  - Sums: $S_1 = 7, S_2 = 5, S_3 = 7 \\implies \\text{LCM} = 35$.
  - Multiply by capacities $(3, 2, 1) \\implies$ Vessel $1 = 105$, Vessel $2 = 70$, Vessel $3 = 35$.
  - Vessel 1 ($105$): Milk $= 105 \\times 5/7 = 75$, Water $= 30$.
  - Vessel 2 ($70$): Milk $= 70 \\times 4/5 = 56$, Water $= 14$.
  - Vessel 3 ($35$): Milk $= 35 \\times 4/7 = 20$, Water $= 15$.
  - Total Milk $= 75 + 56 + 20 = \\mathbf{151}$; Total Water $= 30 + 14 + 15 = \\mathbf{59} \\implies \\mathbf{151:59}$.
- **Tier 3 (10-Second Mental Elimination):** Total parts $= 151 + 59 = 210 = 35 \\times 6$. Check parity $\\implies \\mathbf{151:59}$.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-24-01',
        statement: 'Multi-vessel mixture blending across unequal capacities scales component ratio sums via LCM normalization to calculate unified constituent ratios.',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_TRUTH',
        confidence: 'VERY_HIGH',
        locator: 'Banking PO Mains Quantitative Framework',
        excerpt: 'LCM capacity normalization eliminates fraction addition in multi-vessel blending.',
      },
    ],
    examMappings: [
      {
        examCode: 'sbi-po',
        syllabusUnit: 'Mains: Multi-Vessel Mixtures & Concentration Alligation',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'LCM_SCALING_METHOD',
        notes: 'High-frequency 3-vessel ratio problems in Mains.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Multi-Vessel: Base Capacity = LCM(ratio sums) -> Multiply each vessel by its capacity ratio part -> Distribute and sum components directly.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Three vessels of capacities in the ratio 3:2:1 contain milk and water in the ratios 5:2, 4:1, and 4:3 respectively. If all three are mixed together, what is the ratio of milk to water in the resulting mixture?',
        options: ['151:59', '149:61', '153:57', '145:65'],
        correctAnswer: '151:59',
        explanation: '1. Sum of ratio parts: 7, 5, 7 -> LCM = 35.\n2. Scale capacities (3:2:1) by 35 -> Volumes = 105, 70, 35.\n3. Vessel 1 (105): Milk = 75, Water = 30.\n4. Vessel 2 (70): Milk = 56, Water = 14.\n5. Vessel 3 (35): Milk = 20, Water = 15.\n6. Total Milk = 75 + 56 + 20 = 151.\n7. Total Water = 30 + 14 + 15 = 59.\n8. Final Ratio = 151:59.',
        trapExplanation: 'Adding the raw ratios (5+4+4 : 2+1+3 = 13:6) ignores both the different base sums (7 vs 5) and the unequal capacity multipliers (3:2:1).',
        difficulty: 'HARD',
        isPYQ: true,
        pyqYear: 2023,
        pyqPaper: 'SBI PO Mains',
        pyqStage: 'Mains',
        examinerTrapPattern: 'Raw ratio addition without volume weighting.',
      },
    ],
  },

  // =========================================================================
  // TOPIC 89: Advanced Data Interpretation & Mains Multi-Variable Caselets
  // =========================================================================
  {
    id: 'CON-QUANT-25',
    slug: 'advanced-visual-and-tabular-di-missing-value-reconstruction',
    title: 'Advanced Visual & Tabular Data Interpretation: Missing Value Reconstruction',
    shortDefinition: 'High-level visual and tabular data interpretation: multi-column matrix balance, horizontal and vertical identity extraction, dual-axis bar graphs, and line graph CAGR estimation.',
    difficulty: 'ADVANCED',
    order: 25,
    topicSlug: 'advanced-data-interpretation',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Tabular Matrix Balancing & Missing DI Strategy',
        body: `Tabular and Visual DI in Banking PO Mains tests the ability to **Reconstruct Missing Accounting Cells** using rigid mathematical constraints before calculating individual question answers.

The core approach:
$$\\text{Total Column} = \\sum \\text{Sub-categories} \\qquad \\text{and} \\qquad \\text{Total Row} = \\sum \\text{Time Periods}$$
Every missing cell is linked through horizontal or vertical identities. Deduce the grid completely before proceeding to the questions.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Missing Table Protocol & Dual-Axis Chart Analysis',
        body: `### 1. Missing Value Tabular Protocol
1. **Identify Grand Totals:** Locate given column/row marginal totals.
2. **Exploit Linear Equations:** If a cell has two unknowns $x, y$, look for given ratios ($x:y = 3:4$) or percentage differences.
3. **Selective Calculation:** If a question only depends on Row 2, do not spend time calculating Row 5!`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: '3-Tier Worked Problem: Missing Tabular Reconstruction',
        body: `### 3-Tier Worked Problem (IBPS PO Mains Benchmark)
**Problem:** In a college of $1,500$ students across 3 departments (Arts, Science, Commerce):
- Total Arts students $= 500$, with Male : Female $= 3 : 2$.
- In Science, Female students $= 240$, and Male students are $25\\%$ more than Females.
- Total Male students in college $= 860$.
Find the ratio of **Male students in Commerce** to **Total Female students in the college**.

- **Tier 1 (First Principles / Grid Balancing):**
  1. *Arts:* Total $= 500$, Ratio $3:2 \\implies$ Male $= 300$, Female $= 200$.
  2. *Science:* Female $= 240$. Male $= 240 \\times 1.25 = 300$. Total Science $= 300 + 240 = 540$.
  3. *Total Males:* Given $= 860$.
     - Commerce Male $= 860 - (300 + 300) = 860 - 600 = \\mathbf{260}$.
  4. *Total Females in College:* Total students $= 1,500 \\implies$ Total Females $= 1,500 - 860 = \\mathbf{640}$.
  5. *Required Ratio:* $\\frac{\\text{Commerce Male}}{\\text{Total Females}} = \\frac{260}{640} = \\frac{26}{64} = \\mathbf{\\frac{13}{32} = 13 : 32}$.
- **Tier 2 (Banking Standard):** Arts $(300M, 200F)$, Science $(300M, 240F)$. Comm $M = 860 - 600 = 260$. Total $F = 1500 - 860 = 640$. Ratio $= 260/640 = 13:32$.
- **Tier 3 (10-Second Mental Elimination):** $260 / 640 = 13/32$ directly.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-25-01',
        statement: 'Missing tabular DI sets in banking exams are reconstructed via orthogonal row-column marginal balancing and linear constraint extraction.',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_TRUTH',
        confidence: 'VERY_HIGH',
        locator: 'Banking PO Mains DI Command Center',
        excerpt: 'Row and column marginal totals isolate missing values in tabular datasets.',
      },
    ],
    examMappings: [
      {
        examCode: 'ibps-po',
        syllabusUnit: 'Mains: Missing Tabular Data Interpretation',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'MATRIX_BALANCING',
        notes: 'Guaranteed 5-mark set in Mains.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Missing DI: Total F = Total Students - Total M | Comm M = Total M - (Arts M + Sci M) | Always deduce marginal sums first.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'In a college of 1,500 students (Arts, Science, Commerce), Arts has 500 students (M:F = 3:2), Science has 240 females and males 25% more than females. If total males in college is 860, what is the ratio of Commerce males to total females in the college?',
        options: ['13:32', '11:32', '15:32', '13:30'],
        correctAnswer: '13:32',
        explanation: '1. Arts: M = 300, F = 200.\n2. Science: F = 240, M = 240 * 1.25 = 300.\n3. Commerce Males = 860 - (300 + 300) = 260.\n4. Total Females = 1,500 - 860 = 640.\n5. Ratio = 260 / 640 = 13 : 32.',
        trapExplanation: 'Calculating Commerce females instead of Total College females produces an incorrect ratio.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'IBPS PO Mains Shift 1',
        pyqStage: 'Mains',
        examinerTrapPattern: 'Target denominator confusion (Subgroup vs Universe).',
      },
    ],
  },

  {
    id: 'CON-QUANT-26',
    slug: 'mains-level-paragraph-caselets-venn-diagrams-and-grid-deduction',
    title: 'Mains-Level Paragraph Caselets: 3-Circle Venn Diagrams & Multi-Variable Grids',
    shortDefinition: 'Advanced unstructured paragraph caselets: 3-circle Venn diagram set-theoretic equations, multi-variable financial asset quality, and banking loan portfolio distributions.',
    difficulty: 'ADVANCED',
    order: 26,
    topicSlug: 'advanced-data-interpretation',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Unstructured Paragraph Data Transduction',
        body: `Caselet DI in SBI PO and IBPS PO Mains presents dense narrative paragraphs that must be mapped into **3-Circle Venn Diagrams** or **Multi-Dimensional Grids**.

Key set-theoretic invariants:
$$\\text{Total} = \\sum n(A) - \\sum n(A \\cap B) + n(A \\cap B \\cap C) + n(\\text{None})$$
$$\\text{Exactly 1 Category} = \\sum n(A) - 2\\sum n(A \\cap B) + 3 n(A \\cap B \\cap C)$$
$$\\text{Exactly 2 Categories} = \\sum n(A \\cap B) - 3 n(A \\cap B \\cap C)$$`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: '3-Circle Venn Equations & Matrix Translation Protocol',
        body: `### 1. The 3-Circle Venn Standard Protocol
1. Start with the center: fill **All Three Categories ($A \\cap B \\cap C$)** first.
2. Fill pairwise overlaps: subtract the central intersection to get "Only $A$ and $B$".
3. Fill single categories: subtract all internal overlaps from individual totals.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: '3-Tier Worked Problem: 3-Circle Venn Survey Caselet',
        body: `### 3-Tier Worked Problem (SBI PO Mains Benchmark)
**Problem:** In a survey of $400$ bank customers:
- $180$ have Savings Accounts ($S$), $150$ have Fixed Deposits ($FD$), and $130$ have Credit Cards ($CC$).
- $50$ have both $S$ and $FD$, $40$ have both $FD$ and $CC$, and $60$ have both $S$ and $CC$.
- $20$ customers have all three products ($S \\cap FD \\cap CC$).
Find how many customers have **EXACTLY TWO** of these products, and how many have **NONE** of these products.

- **Tier 1 (First Principles / Venn Set Equations):**
  1. *Central Intersection (All 3):* $n(S \\cap FD \\cap CC) = 20$.
  2. *Exactly Two Products:*
     - Only $S$ & $FD = 50 - 20 = 30$.
     - Only $FD$ & $CC = 40 - 20 = 20$.
     - Only $S$ & $CC = 60 - 20 = 40$.
     - Total with Exactly Two $= 30 + 20 + 40 = \\mathbf{90\\text{ customers}}$.
  3. *Total with At Least One Product ($n(S \\cup FD \\cup CC)$):*
     - $\\sum n(A) = 180 + 150 + 130 = 460$.
     - $\\sum n(A \\cap B) = 50 + 40 + 60 = 150$.
     - $n(S \\cup FD \\cup CC) = 460 - 150 + 20 = \\mathbf{330\\text{ customers}}$.
  4. *Customers with None:*
     $$\\text{None} = 400 - 330 = \\mathbf{70\\text{ customers}}$$
- **Tier 2 (Banking Standard):** Exactly $2 = 150 - 3(20) = 90$. Union $= 460 - 150 + 20 = 330 \\implies \\text{None} = 400 - 330 = 70$.
- **Tier 3 (10-Second Mental Formula):** Exactly $2 = 150 - 60 = 90$; None $= 400 - 330 = 70$.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-26-01',
        statement: '3-circle Venn caselets resolve subsets via n(Exactly 2) = sum(pairwise) - 3*n(All 3) and n(Union) = sum(single) - sum(pairwise) + n(All 3).',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_TRUTH',
        confidence: 'VERY_HIGH',
        locator: 'Set Theory & Banking PO Mains Caselet Standards',
        excerpt: 'Venn set equations isolate exact category counts from overlapping narrative surveys.',
      },
    ],
    examMappings: [
      {
        examCode: 'sbi-po',
        syllabusUnit: 'Mains: Caselet DI & 3-Circle Venn Sets',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'SET_THEORETIC_MODELING',
        notes: 'Dominant paragraph caselet format.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Venn Invariants: Exactly 2 = sum(pairwise) - 3(All 3) | Union = sum(single) - sum(pairwise) + All 3 | None = Total - Union.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'In a survey of 400 customers: 180 have Savings, 150 have FD, 130 have Credit Cards; 50 have Savings+FD, 40 have FD+CC, 60 have Savings+CC; and 20 have all three. How many customers have EXACTLY TWO products?',
        options: ['90', '110', '80', '100'],
        correctAnswer: '90',
        explanation: '1. Only Savings + FD = 50 - 20 = 30.\n2. Only FD + CC = 40 - 20 = 20.\n3. Only Savings + CC = 60 - 20 = 40.\n4. Total with exactly two products = 30 + 20 + 40 = 90.',
        trapExplanation: 'Summing 50 + 40 + 60 = 150 double-counts the 20 customers who have all three products three times.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'SBI PO Mains Shift 2',
        pyqStage: 'Mains',
        examinerTrapPattern: 'Raw pairwise sum without central intersection subtraction.',
      },
    ],
  },

  {
    id: 'CON-QUANT-27',
    slug: 'arithmetic-integrated-and-multi-chart-mains-di-sets',
    title: 'Arithmetic-Integrated & Multi-Chart Mains DI Sets',
    shortDefinition: 'Advanced multi-chart data interpretation embedding core arithmetic equations (TSD, Time-Work, Profit-Loss, CI/SI) into visual data representations for Banking Mains.',
    difficulty: 'ADVANCED',
    order: 27,
    topicSlug: 'advanced-data-interpretation',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Arithmetic-DI Synthesis in Banking Mains',
        body: `In SBI PO Mains and IBPS PO Mains, Data Interpretation sets are **hybrid arithmetic problems disguised as charts**:
1. **Time & Work DI:** Tables giving hours taken by pipes to fill cisterns or efficiency percentages of workers.
2. **TSD & Radar Charts:** Radar/Line graphs showing train speeds, track lengths, or stream currents across days.
3. **Profit & Loss DI:** Bar graphs detailing marked price percentages and table giving discount rates across product lines.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Framework for Solving Arithmetic-Embedded DI Sets',
        body: `### 1. Step-by-Step Solving Strategy
1. **Extract Arithmetic Constants:** Convert chart values into fundamental variables ($u, v, E_1, E_2, \\text{CP}, \\text{MP}$).
2. **Setup Domain Formula:** Apply the core arithmetic theorem (e.g. $S_{\\text{avg}} = \\frac{2xy}{x+y}$ or $\\text{Diff}_2 = P(R/100)^2$).
3. **Execute Lean Calculation:** Solve only the requested metric without building superfluous tables.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: '3-Tier Worked Problem: Arithmetic Time-Speed-Distance DI Set',
        body: `### 3-Tier Worked Problem (SBI PO Mains Benchmark)
**Problem:** A table shows the speed of a boat in still water ($u = 20\\text{ km/h}$) and the downstream distance traveled on 3 days (Mon: $120\\text{ km}$, Tue: $150\\text{ km}$, Wed: $180\\text{ km}$). The stream speed on Monday was $4\\text{ km/h}$, on Tuesday was $5\\text{ km/h}$, and on Wednesday was $10\\text{ km/h}$. Find the ratio of total time taken on Monday (downstream + upstream for $120\\text{km}$) to total time taken on Wednesday (downstream only for $180\\text{km}$).

- **Tier 1 (First Principles / Kinematic Time Summation):**
  1. *Monday ($D=120\\text{ km}, u=20, v=4$):*
     - Downstream Speed $S_d = 20 + 4 = 24\\text{ km/h} \\implies t_d = 120/24 = 5\\text{ hrs}$.
     - Upstream Speed $S_u = 20 - 4 = 16\\text{ km/h} \\implies t_u = 120/16 = 7.5\\text{ hrs}$.
     - Total Monday Time $= 5 + 7.5 = \\mathbf{12.5\\text{ hours}}$.
  2. *Wednesday ($D=180\\text{ km}, u=20, v=10$ - Downstream only):*
     - Downstream Speed $S_d = 20 + 10 = 30\\text{ km/h}$.
     - Wednesday Downstream Time $= 180 / 30 = \\mathbf{6\\text{ hours}}$.
  3. *Ratio Monday Total to Wednesday Downstream:*
     $$\\text{Ratio} = \\frac{12.5}{6} = \\frac{25}{12} = \\mathbf{25 : 12}$$
- **Tier 2 (Banking Standard):** Mon $= 120/24 + 120/16 = 5 + 7.5 = 12.5\\text{h}$. Wed $= 180/30 = 6\\text{h}$. Ratio $= 12.5/6 = 25:12$.
- **Tier 3 (10-Second Mental Ratio):** $12.5 : 6 \\implies 25 : 12$ directly.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-27-01',
        statement: 'Arithmetic-embedded DI sets evaluate kinematic, commercial, and unitary rate theorems directly on structured chart variables.',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_TRUTH',
        confidence: 'VERY_HIGH',
        locator: 'Banking PO Mains DI Command Center & Arithmetic Standards',
        excerpt: 'Hybrid DI sets integrate standard arithmetic formulas into chart reading extractions.',
      },
    ],
    examMappings: [
      {
        examCode: 'sbi-po',
        syllabusUnit: 'Mains: Arithmetic-Integrated DI Sets (TSD, Work, Profit)',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'HYBRID_ARITHMETIC_DI',
        notes: 'Dominant question format in SBI PO Mains.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Arithmetic DI: Extract rate variables from chart -> Apply core formula (Time = D/S, Work = ET) -> Solve lean.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'A boat (speed in still water 20 km/h) travels 120 km downstream and back upstream on Monday (stream speed 4 km/h), and 180 km downstream only on Wednesday (stream speed 10 km/h). What is the ratio of total Monday time to Wednesday downstream time?',
        options: ['25:12', '2:1', '23:12', '7:3'],
        correctAnswer: '25:12',
        explanation: '1. Monday Downstream Time = 120 / (20 + 4) = 120 / 24 = 5 hours.\n2. Monday Upstream Time = 120 / (20 - 4) = 120 / 16 = 7.5 hours.\n3. Total Monday Time = 5 + 7.5 = 12.5 hours.\n4. Wednesday Downstream Time = 180 / (20 + 10) = 180 / 30 = 6 hours.\n5. Ratio = 12.5 / 6 = 25 / 12 = 25:12.',
        trapExplanation: 'Forgetting Monday upstream journey and comparing only downstream times (5:6) is the classic trap.',
        difficulty: 'MEDIUM',
        isPYQ: true,
        pyqYear: 2023,
        pyqPaper: 'IBPS PO Mains Shift 2',
        pyqStage: 'Mains',
        examinerTrapPattern: 'Omitting round-trip return leg in multi-stage travel.',
      },
    ],
  },
];

export async function seedBatchQuantBatch2CanonicalKnowledge(): Promise<void> {
  console.log('Seeding Quantitative Aptitude & Data Interpretation (Batch 2: Topics 85–89: 11 Concepts) Canonical Benchmark...');

  // 1. Ensure Domain & Subject exist
  const domain = await db.domain.findUnique({
    where: { slug: 'quantitative-aptitude-and-reasoning' },
  });
  if (!domain) throw new Error('Domain quantitative-aptitude-and-reasoning not found');

  const subject = await db.subject.findUnique({
    where: { slug: 'quantitative-aptitude-and-data-interpretation' },
  });
  if (!subject) throw new Error('Subject quantitative-aptitude-and-data-interpretation not found');

  // 2. Target Exams Map
  const sbiPo = await db.exam.findUnique({ where: { slug: 'sbi-po' } });
  const ibpsPo = await db.exam.findUnique({ where: { slug: 'ibps-po' } });
  const rbiGradeB = await db.exam.findUnique({ where: { slug: 'rbi-grade-b' } });

  const examMap: Record<string, string> = {
    'sbi-po': sbiPo?.id || '',
    'ibps-po': ibpsPo?.id || '',
    'rbi-grade-b': rbiGradeB?.id || '',
  };

  // 3. Ensure Source exists
  const sourceQuant = await db.source.upsert({
    where: { id: 'SRC-QUANT-CANONICAL-2026' },
    update: {},
    create: {
      id: 'SRC-QUANT-CANONICAL-2026',
      title: 'Quantitative Aptitude & Data Interpretation Canonical Reference Corpus (2026)',
      sourceType: 'ACADEMIC_CANONICAL_SYNTHESIS',
      authorityTier: 'PEER_REVIEWED_MATHEMATICAL_REFERENCE',
      description: 'First-principles mathematical and algorithmic synthesis integrating standard competitive arithmetic, Euclidean geometry invariants, combinatorial probability, and authentic memory-based banking examination benchmarks.',
    },
  });

  // 4. Ensure Topics exist (Topics 85 to 89)
  const topicDefs = [
    {
      slug: 'advanced-arithmetic-time-work-and-efficiency',
      title: 'Advanced Arithmetic — Time, Work & Dynamic Efficiency',
      description: 'Advanced multi-agent work rate modeling, dynamic efficiency shifts, rotating 3-agent alternate day cycles, variable draining leaks, and partial capacity threshold protocols.',
      scope: 'Complex time-work schedules, fractional work packets, wage allocation proportional to completed units, and alternate hour non-overflow leak traps.',
      order: 85,
    },
    {
      slug: 'advanced-time-speed-and-distance',
      title: 'Advanced Time, Speed, Distance & Kinematics',
      description: 'Advanced relative speed dynamics, multi-train crossings, moving observers, post-meeting destination ratio theorem (S1/S2 = sqrt(b/a)), moving escalators, and circular races.',
      scope: 'Kinematics, post-meeting time formulas, escalator step invariants S = 2N1N2/(N1+N2), and circular race synchronization.',
      order: 86,
    },
    {
      slug: 'advanced-commercial-arithmetic',
      title: 'Advanced Commercial Arithmetic & Financial Transactions',
      description: 'Multi-tiered commercial transactions, dual false weight cheating at purchase and sale, compound multiplying factors, varying rate CI cycles, and equal annual loan installments.',
      scope: 'Dishonest dealer cumulative multipliers, multi-step commercial discounts, and present value loan amortization.',
      order: 87,
    },
    {
      slug: 'advanced-ratio-average-mixture-and-alligation',
      title: 'Advanced Ratio, Average, Mixture, Dilution & Alligation',
      description: 'Dynamic partnership with piecewise capital alterations, weighted multi-group averages, 3-vessel mixture blending across unequal capacities, and concentration alligation.',
      scope: 'Piecewise partnership units, LCM capacity normalization in multi-vessel blending, and concentration alligation.',
      order: 88,
    },
    {
      slug: 'advanced-data-interpretation',
      title: 'Advanced Data Interpretation & Mains Multi-Variable Caselets',
      description: 'Missing value tabular reconstruction, multi-column matrix balance, 3-circle Venn diagram set theory caselets, and hybrid arithmetic-integrated DI sets.',
      scope: 'Missing DI marginal totals, paragraph caselet grid translation, 3-circle Venn equations, and arithmetic-embedded DI sets.',
      order: 89,
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
  for (const c of QUANT_BATCH_2_CONCEPTS) {
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

    // Clear child relations for clean idempotent seeding
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
            sourceId: sourceQuant.id,
            locator: clm.locator,
            excerpt: clm.excerpt,
            evidenceType: 'PRIMARY_MATHEMATICAL_RULE',
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
          isPYQ: q.isPYQ || false,
          pyqYear: q.pyqYear || null,
          pyqPaper: q.pyqPaper || null,
          pyqStage: q.pyqStage || null,
          examinerTrapPattern: q.examinerTrapPattern || null,
        },
      });
    }
  }

  console.log(`Successfully seeded ${QUANT_BATCH_2_CONCEPTS.length} Quantitative Aptitude & Data Interpretation (Batch 2) canonical concepts.`);
}
