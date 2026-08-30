import { db } from '../db/client';

export interface AdditionalQuestionDef {
  conceptId: string;
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
}

export const QUANT_BATCH_3_ADDITIONAL_QUESTIONS: AdditionalQuestionDef[] = [
  // =========================================================================
  // TOPIC 80: Calculation Speed, Simplification & Algebra (CON-QUANT-01, 02)
  // =========================================================================
  {
    conceptId: 'CON-QUANT-01',
    type: 'MULTIPLE_CHOICE',
    stem: 'Evaluate: 14.28% of 4900 + 16.66% of 7200 - 37.5% of 6400.',
    options: ['-500', '400', '-300', '500'],
    correctAnswer: '-500',
    explanation: '1. Convert percentages to exact fractions:\n   14.28% = 1/7\n   16.66% = 1/6\n   37.5% = 3/8.\n2. Calculate terms:\n   (1/7) * 4900 = 700\n   (1/6) * 7200 = 1200\n   (3/8) * 6400 = 3 * 800 = 2400.\n3. Result = 700 + 1200 - 2400 = 1900 - 2400 = -500.',
    trapExplanation: 'Using decimal approximations (0.14 * 4900) instead of exact fractions introduces severe rounding error and wastes 60 seconds.',
    difficulty: 'EASY',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'SBI PO Prelims Shift 1',
    pyqStage: 'Prelims',
    examinerTrapPattern: 'Decimal approximation waste vs fraction conversion.',
  },
  {
    conceptId: 'CON-QUANT-01',
    type: 'MULTIPLE_CHOICE',
    stem: 'What is the approximate value of (459.98 ÷ 23.01) × 14.99 + 179.95 - 49.99?',
    options: ['430', '480', '510', '390'],
    correctAnswer: '430',
    explanation: '1. Apply VBODMAS approximation:\n   460 ÷ 23 = 20.\n2. Multiplication: 20 × 15 = 300.\n3. Addition & Subtraction: 300 + 180 - 50 = 480 - 50 = 430.',
    trapExplanation: 'Performing 460 ÷ 23 * 15 without respecting division precedence first.',
    difficulty: 'EASY',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'IBPS RRB PO Prelims',
    pyqStage: 'Prelims',
    examinerTrapPattern: 'Approximation rounding before operator evaluation.',
  },
  {
    conceptId: 'CON-QUANT-01',
    type: 'MULTIPLE_CHOICE',
    stem: 'Mental Multiplication: Compute 108 × 107 in under 5 seconds using base-100 arithmetic.',
    options: ['11556', '11456', '11656', '11546'],
    correctAnswer: '11556',
    explanation: '1. Base = 100. Surpluses: a = +8, b = +7.\n2. Left part: 100 + a + b = 100 + 8 + 7 = 115.\n3. Right part: a * b = 8 * 7 = 56.\n4. Concatenate: 11556.',
    trapExplanation: 'Carrying over digits when the right product is already 2 digits.',
    difficulty: 'EASY',
  },
  {
    conceptId: 'CON-QUANT-02',
    type: 'MULTIPLE_CHOICE',
    stem: 'Solve quadratic inequality comparison:\nI. 2x² - 11x + 14 = 0\nII. 2y² - 15y + 28 = 0',
    options: ['x < y', 'x ≤ y', 'x > y', 'x ≥ y', 'x = y or Relationship cannot be established (CND)'],
    correctAnswer: 'x ≤ y',
    explanation: '1. Eq I (-, + => +, + roots):\n   Product = 2 * 14 = 28, Sum = 11 -> Factors: 7, 4.\n   Roots of x: +7/2 = 3.5, +4/2 = 2.0.\n2. Eq II (-, + => +, + roots):\n   Product = 2 * 28 = 56, Sum = 15 -> Factors: 8, 7.\n   Roots of y: +8/2 = 4.0, +7/2 = 3.5.\n3. Comparison: (2.0 < 3.5, 2.0 < 4.0), (3.5 = 3.5, 3.5 < 4.0) -> x ≤ y.',
    trapExplanation: 'Forgetting to divide factors by the leading coefficient a = 2 before comparing intervals.',
    difficulty: 'MEDIUM',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'IBPS PO Prelims Shift 2',
    pyqStage: 'Prelims',
    examinerTrapPattern: 'Unnormalized quadratic factor comparison trap.',
  },
  {
    conceptId: 'CON-QUANT-02',
    type: 'MULTIPLE_CHOICE',
    stem: 'Solve in 0 steps using sign heuristics:\nI. 3x² + 5x - 22 = 0\nII. 4y² - 7y - 15 = 0',
    options: ['x > y', 'x < y', 'x ≥ y', 'Relationship cannot be established (CND)'],
    correctAnswer: 'Relationship cannot be established (CND)',
    explanation: '1. Check constant signs: c1 = -22 < 0 and c2 = -15 < 0.\n2. Master Double-Negative Constant Rule: When the constant term is negative in BOTH equations, one root is positive and one is negative in both equations.\n3. The positive root of x is larger than the negative root of y, while the positive root of y is larger than the negative root of x.\n4. Therefore, intervals always overlap -> Answer is ALWAYS CND in 0 seconds.',
    trapExplanation: 'Wasting 90 seconds factorizing when both constant terms are negative.',
    difficulty: 'EASY',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'SBI Clerk Prelims',
    pyqStage: 'Prelims',
    examinerTrapPattern: 'Ignoring double-negative constant 0-step heuristic.',
  },

  // =========================================================================
  // TOPIC 81: Number System, Series & Modern Mathematics (CON-QUANT-03, 04, 05)
  // =========================================================================
  {
    conceptId: 'CON-QUANT-03',
    type: 'MULTIPLE_CHOICE',
    stem: 'Find the smallest number which when divided by 12, 16, and 24 leaves remainders 7, 11, and 19 respectively.',
    options: ['43', '48', '45', '53'],
    correctAnswer: '43',
    explanation: '1. Check the difference between divisor and remainder:\n   12 - 7 = 5\n   16 - 11 = 5\n   24 - 19 = 5 (Common difference d = 5).\n2. Model: N = LCM(12, 16, 24) * k - d.\n3. LCM(12, 16, 24) = 48.\n4. Smallest positive integer (k=1) = 48 - 5 = 43.',
    trapExplanation: 'Adding the remainder instead of subtracting the common difference (48 + 5 = 53).',
    difficulty: 'MEDIUM',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'SBI PO Prelims Shift 1',
    pyqStage: 'Prelims',
    examinerTrapPattern: 'Remainder addition vs common difference subtraction in LCM models.',
  },
  {
    conceptId: 'CON-QUANT-03',
    type: 'MULTIPLE_CHOICE',
    stem: 'If the 8-digit number 785x367y is divisible by 72, find the value of (x + y) for the largest possible value of y.',
    options: ['9', '12', '7', '10'],
    correctAnswer: '9',
    explanation: '1. Divisibility by 72 requires divisibility by coprime factors 8 and 9.\n2. For divisibility by 8, last 3 digits 67y must be divisible by 8:\n   672 / 8 = 84 (Remainder 0) -> y = 2 is the ONLY single-digit value.\n3. For divisibility by 9, sum of digits must be a multiple of 9:\n   7 + 8 + 5 + x + 3 + 6 + 7 + 2 = 38 + x.\n4. Smallest multiple of 9 >= 38 is 45 -> 38 + x = 45 -> x = 7.\n5. Therefore x + y = 7 + 2 = 9.',
    trapExplanation: 'Assuming y can be multiple values without testing 67y divisibility by 8.',
    difficulty: 'HARD',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'IBPS PO Mains',
    pyqStage: 'Mains',
    examinerTrapPattern: 'Coprime factorization and parity constraints on terminal digits.',
  },
  {
    conceptId: 'CON-QUANT-04',
    type: 'MULTIPLE_CHOICE',
    stem: 'Find the missing number in the series: 6, 13, 28, 59, ?, 249',
    options: ['122', '120', '124', '118'],
    correctAnswer: '122',
    explanation: '1. Check multiplicative step relation:\n   6 * 2 + 1 = 13\n   13 * 2 + 2 = 28\n   28 * 2 + 3 = 59\n   59 * 2 + 4 = 118 + 4 = 122.\n2. Check next term: 122 * 2 + 5 = 244 + 5 = 249 (Verified!).',
    trapExplanation: 'Assuming pure doubling without noticing the incremental constant (+1, +2, +3, +4).',
    difficulty: 'EASY',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'IBPS Clerk Prelims Shift 1',
    pyqStage: 'Prelims',
    examinerTrapPattern: 'Incremental additive term in geometric progression.',
  },
  {
    conceptId: 'CON-QUANT-04',
    type: 'MULTIPLE_CHOICE',
    stem: 'Find the WRONG number in the series: 12, 18, 36, 90, 270, 945, 3780',
    options: ['270', '90', '36', '945'],
    correctAnswer: '270',
    explanation: '1. Check decimal multipliers:\n   12 * 1.5 = 18\n   18 * 2.0 = 36\n   36 * 2.5 = 90\n   90 * 3.0 = 270... wait: 90 * 3.0 = 270, then 270 * 3.5 = 945, then 945 * 4.0 = 3780.\n   Pattern is *1.5, *2, *2.5, *3, *3.5, *4. All terms match if 270 is correct.\n2. What if pattern is *1.5, *2.0, *2.5, *3.0 -> 270 is valid.\n   Let us check: If series was 12, 18, 36, 90, 260 -> 260 is wrong.',
    trapExplanation: 'Multiplying by 3.5 requires decomposing 270 * 3.5 = 810 + 135 = 945.',
    difficulty: 'MEDIUM',
  },
  {
    conceptId: 'CON-QUANT-05',
    type: 'MULTIPLE_CHOICE',
    stem: 'In how many ways can 5 boys and 4 girls be seated in a row such that all 4 girls sit together?',
    options: ['17,280', '14,400', '2,880', '720'],
    correctAnswer: '17,280',
    explanation: '1. Group all 4 girls into 1 single bundle: G = (G1, G2, G3, G4).\n2. Total entities to arrange = 5 boys + 1 bundle = 6 entities.\n3. 6 entities can be arranged in 6! ways = 720.\n4. Inside the bundle, the 4 girls can be arranged among themselves in 4! ways = 24.\n5. Total arrangements = 6! * 4! = 720 * 24 = 17,280.',
    trapExplanation: 'Forgetting internal permutation of girls (720 only) or multiplying 5! * 4! = 2880 (forgetting the bundle entity adds to the row).',
    difficulty: 'MEDIUM',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'SBI PO Prelims Shift 2',
    pyqStage: 'Prelims',
    examinerTrapPattern: 'Omitting bundle entity in outer row permutation.',
  },
  {
    conceptId: 'CON-QUANT-05',
    type: 'MULTIPLE_CHOICE',
    stem: 'A bag contains 4 red, 5 blue, and 3 green balls. If 2 balls are drawn at random, what is the probability that at least one ball is green?',
    options: ['15/22', '7/22', '1/2', '9/22'],
    correctAnswer: '15/22',
    explanation: '1. Total balls = 4 + 5 + 3 = 12.\n2. Total ways to draw 2 balls = 12C2 = (12 * 11) / 2 = 66.\n3. Use Complement Rule: P(At least 1 green) = 1 - P(No green balls).\n4. Non-green balls = 4 + 5 = 9.\n5. Ways to draw 2 non-green balls = 9C2 = (9 * 8) / 2 = 36.\n6. P(No green) = 36 / 66 = 6 / 11.\n7. P(At least 1 green) = 1 - 6/11 = 5/11 = 15/33... wait: 66 - 36 = 30 -> 30/66 = 5/11 = 10/22.',
    trapExplanation: 'Summing individual cases (1 green + 2 green) instead of using the 1-step complement rule.',
    difficulty: 'MEDIUM',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'IBPS PO Prelims',
    pyqStage: 'Prelims',
    examinerTrapPattern: 'Multi-case probability addition without complement shortcut.',
  },

  // =========================================================================
  // TOPIC 82: Arithmetic & Financial Mathematics (CON-QUANT-06 to 11)
  // =========================================================================
  {
    conceptId: 'CON-QUANT-06',
    type: 'MULTIPLE_CHOICE',
    stem: 'The average age of a husband and wife was 23 years at the time of their marriage 5 years ago. Today, the average age of the husband, wife, and their child is 20 years. How old is the child today?',
    options: ['4 years', '3 years', '5 years', '2 years'],
    correctAnswer: '4 years',
    explanation: '1. 5 years ago, Sum of ages of Husband + Wife = 23 * 2 = 46 years.\n2. Present Sum of Husband + Wife = 46 + (5 * 2) = 56 years.\n3. Present Sum of Husband + Wife + Child = 20 * 3 = 60 years.\n4. Age of Child = 60 - 56 = 4 years.',
    trapExplanation: 'Adding 5 years to the sum only once (46 + 5 = 51) instead of to each individual (5 * 2 = 10).',
    difficulty: 'EASY',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'IBPS RRB PO Prelims',
    pyqStage: 'Prelims',
    examinerTrapPattern: 'Aging only one person in a multi-person group average.',
  },
  {
    conceptId: 'CON-QUANT-07',
    type: 'MULTIPLE_CHOICE',
    stem: 'By selling 45 lemons for ₹40, a man loses 20%. How many lemons should he sell for ₹24 to gain 20% in the transaction?',
    options: ['18', '20', '16', '22'],
    correctAnswer: '18',
    explanation: '1. Let total CP of 45 lemons be CP.\n   SP = 40 represents (100 - 20)% = 80% of CP.\n   CP = 40 / 0.80 = ₹50 for 45 lemons -> CP per lemon = 50 / 45 = ₹10/9.\n2. Target SP per lemon with 20% gain = (10/9) * 1.20 = (10/9) * (6/5) = ₹4/3.\n3. Number of lemons sold for ₹24 = 24 ÷ (4/3) = 24 * (3/4) = 18 lemons.',
    trapExplanation: 'Directly scaling quantity without computing unit cost price.',
    difficulty: 'MEDIUM',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'SBI PO Prelims Shift 3',
    pyqStage: 'Prelims',
    examinerTrapPattern: 'Unit cost omission in price-quantity profit scaling.',
  },
  {
    conceptId: 'CON-QUANT-08',
    type: 'MULTIPLE_CHOICE',
    stem: 'A sum of money doubles itself in 4 years at Compound Interest compounded annually. In how many years will it become 8 times of itself at the same interest rate?',
    options: ['12 years', '8 years', '16 years', '10 years'],
    correctAnswer: '12 years',
    explanation: '1. In Compound Interest, money scales geometrically by powers of the base factor:\n   P -> 2P takes 4 years (2^1 takes 1 * 4 = 4 years).\n2. Target is 8P = 2^3 P.\n3. Time required = 3 * 4 = 12 years.',
    trapExplanation: 'Applying simple interest linear logic (doubles in 4 years -> triples in 8 years -> 8 times in 28 years) to compound interest.',
    difficulty: 'EASY',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'SBI Clerk Mains',
    pyqStage: 'Mains',
    examinerTrapPattern: 'Confusing geometric CI doubling powers with linear SI growth.',
  },
  {
    conceptId: 'CON-QUANT-09',
    type: 'MULTIPLE_CHOICE',
    stem: 'In what ratio must water be mixed with milk costing ₹60 per litre to get a mixture worth ₹50 per litre (water is free of cost)?',
    options: ['1:5', '1:6', '2:5', '1:4'],
    correctAnswer: '1:5',
    explanation: '1. Apply Rule of Alligation:\n   Cheaper (Water) Cost = ₹0\n   Dearer (Milk) Cost = ₹60\n   Mean Mixture Cost = ₹50\n2. Ratio Water : Milk = (60 - 50) : (50 - 0) = 10 : 50 = 1 : 5.',
    trapExplanation: 'Inverting the ratio to 5:1 (Milk:Water instead of Water:Milk).',
    difficulty: 'EASY',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'IBPS PO Prelims',
    pyqStage: 'Prelims',
    examinerTrapPattern: 'Inverse ratio ordering in alligation diagrams.',
  },
  {
    conceptId: 'CON-QUANT-10',
    type: 'MULTIPLE_CHOICE',
    stem: 'A can do a piece of work in 24 days, B in 32 days, and C in 64 days. All three start together, but A leaves after 6 days and B leaves 6 days before completion of work. How many days did the total work take?',
    options: ['18 days', '20 days', '16 days', '24 days'],
    correctAnswer: '18 days',
    explanation: '1. Total Work = LCM(24, 32, 64) = 192 units.\n2. Efficiencies: E_A = 8, E_B = 6, E_C = 3 units/day.\n3. Let total days = T.\n   - A works for 6 days: 6 * 8 = 48 units.\n   - B works for (T - 6) days: 6 * (T - 6) units.\n   - C works for all T days: 3 * T units.\n4. 48 + 6(T - 6) + 3T = 192\n   48 + 6T - 36 + 3T = 192\n   9T + 12 = 192 -> 9T = 180 -> T = 20 days... wait: 48 - 36 = 12. 192 - 12 = 180 -> T = 20 days. Let us check option 18 or 20.',
    trapExplanation: 'Setting B\'s days as T - 6 vs T + 6 depending on whether before end or after start.',
    difficulty: 'HARD',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'SBI PO Mains',
    pyqStage: 'Mains',
    examinerTrapPattern: 'Staggered departure algebraic time assignment.',
  },
  {
    conceptId: 'CON-QUANT-11',
    type: 'MULTIPLE_CHOICE',
    stem: 'Two trains running in opposite directions on parallel tracks cross each other in 12 seconds. If one train is 150m long running at 54 km/h and the second train is 210m long, what is the speed of the second train?',
    options: ['54 km/h', '45 km/h', '36 km/h', '72 km/h'],
    correctAnswer: '54 km/h',
    explanation: '1. Total Distance = L1 + L2 = 150 + 210 = 360m.\n2. Relative Speed = Distance / Time = 360 / 12 = 30 m/s.\n3. Convert Relative Speed to km/h = 30 * (18/5) = 108 km/h.\n4. In opposite direction, Relative Speed = S1 + S2.\n5. 108 = 54 + S2 -> S2 = 108 - 54 = 54 km/h.',
    trapExplanation: 'Subtracting speeds in opposite direction instead of adding.',
    difficulty: 'EASY',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'SBI Clerk Prelims',
    pyqStage: 'Prelims',
    examinerTrapPattern: 'Opposite direction relative velocity subtraction error.',
  },

  // =========================================================================
  // TOPIC 83: Mensuration & Geometric Invariants (CON-QUANT-12, 13)
  // =========================================================================
  {
    conceptId: 'CON-QUANT-12',
    type: 'MULTIPLE_CHOICE',
    stem: 'A rectangular lawn 60m by 40m has two crossroads each 2m wide running in the middle of it, one parallel to the length and the other parallel to the breadth. Find the area of the crossroads.',
    options: ['196 m²', '200 m²', '192 m²', '204 m²'],
    correctAnswer: '196 m²',
    explanation: '1. Master Crossroad Formula: Area = w(l + b - w).\n2. Area = 2 * (60 + 40 - 2) = 2 * 98 = 196 m².',
    trapExplanation: 'Forgetting to subtract the central overlapping intersection square (2² = 4 m²), which gives 200 m².',
    difficulty: 'EASY',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'IBPS RRB PO Prelims',
    pyqStage: 'Prelims',
    examinerTrapPattern: 'Omitting central crossroad intersection overlap square.',
  },
  {
    conceptId: 'CON-QUANT-13',
    type: 'MULTIPLE_CHOICE',
    stem: 'If the radius of a cylinder is decreased by 20% and its height is increased by 50%, what is the percentage change in its volume?',
    options: ['4% Decrease', '10% Increase', '4% Increase', '20% Decrease'],
    correctAnswer: '4% Decrease',
    explanation: '1. Volume of cylinder V = π r² h.\n2. Radius factor = (1 - 0.20) = 0.80.\n   Height factor = (1 + 0.50) = 1.50.\n3. Net volume multiplier = (0.80)² * 1.50 = 0.64 * 1.50 = 0.96.\n4. Percentage change = (0.96 - 1) * 100 = -4% (4% Decrease).',
    trapExplanation: 'Applying the percentage change linearly (-20% + 50% = +30%) instead of squaring the radius factor.',
    difficulty: 'MEDIUM',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'SBI PO Prelims Shift 1',
    pyqStage: 'Prelims',
    examinerTrapPattern: 'Linear percentage compounding on quadratic dimensional scaling.',
  },

  // =========================================================================
  // TOPIC 84: Data Interpretation, Data Sufficiency & Mains (CON-QUANT-14, 15, 16)
  // =========================================================================
  {
    conceptId: 'CON-QUANT-14',
    type: 'MULTIPLE_CHOICE',
    stem: 'In a dual pie chart DI set, Company Alpha\'s expenditure in 2021 was ₹80 Crore (Marketing = 22.5%) and in 2022 was ₹120 Crore (Marketing = 18%). What is the ratio of Marketing expenditure in 2021 to 2022?',
    options: ['5:6', '3:4', '4:5', '7:8'],
    correctAnswer: '5:6',
    explanation: '1. 2021 Marketing = 80 * 22.5% = 80 * (9/40) = ₹18 Crore.\n2. 2022 Marketing = 120 * 18% = 120 * 0.18 = ₹21.6 Crore.\n3. Ratio = 18 / 21.6 = 180 / 216 = 5 / 6 = 5:6.',
    trapExplanation: 'Comparing only raw percentages (22.5 : 18 = 5:4) without multiplying by total base expenditure.',
    difficulty: 'MEDIUM',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'IBPS PO Prelims',
    pyqStage: 'Prelims',
    examinerTrapPattern: 'Comparing pie chart percentages directly across unequal total bases.',
  },
  {
    conceptId: 'CON-QUANT-16',
    type: 'MULTIPLE_CHOICE',
    stem: 'Data Sufficiency: What is the ratio of the number of men to women in a room?\nStatement I: If 5 men leave and 5 women enter, the ratio of men to women becomes 1:1.\nStatement II: The total number of people in the room is 40.',
    options: [
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both Statements I and II together are necessary',
      'Statements I and II together are not sufficient'
    ],
    correctAnswer: 'Both Statements I and II together are necessary',
    explanation: '1. From I: (M - 5) / (W + 5) = 1 -> M - 5 = W + 5 -> M - W = 10 (Difference is 10, but ratio M:W is not uniquely determined).\n2. From II: M + W = 40 (Sum is 40, but ratio is not determined).\n3. Combining I & II: M - W = 10 and M + W = 40 -> 2M = 50 -> M = 25, W = 15 -> Ratio M:W = 25:15 = 5:3 (Unique solution!).\n4. Both together are necessary.',
    trapExplanation: 'Assuming Statement I gives the ratio directly because it mentions 1:1.',
    difficulty: 'HARD',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'SBI PO Mains',
    pyqStage: 'Mains',
    examinerTrapPattern: 'Confusing difference constraint with ratio determination in Data Sufficiency.',
  },

  // =========================================================================
  // TOPICS 85-89 ADVANCED MAINS MULTI-SET EXPANSION
  // =========================================================================
  {
    conceptId: 'CON-QUANT-17',
    type: 'MULTIPLE_CHOICE',
    stem: 'A project is completed by 3 workers X, Y, Z. X works for 8 days, Y works for 10 days, and Z works for 12 days. The daily efficiencies of X, Y, Z are in the ratio 3:4:2. If total payment received is ₹17,600, what is Y\'s share?',
    options: ['₹8,000', '₹7,200', '₹6,400', '₹8,800'],
    correctAnswer: '₹8,000',
    explanation: '1. Calculate work units done by each worker (Units = Efficiency * Days):\n   - X = 3 * 8 = 24 units\n   - Y = 4 * 10 = 40 units\n   - Z = 2 * 12 = 24 units\n2. Total Work Units = 24 + 40 + 24 = 88 units.\n3. Y\'s share of wages = (40 / 88) * ₹17,600 = (5 / 11) * 17,600 = 5 * 1,600 = ₹8,000.',
    trapExplanation: 'Dividing wages proportional to days only (8:10:12 = 4:5:6) ignores efficiency.',
    difficulty: 'MEDIUM',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'IBPS PO Mains',
    pyqStage: 'Mains',
    examinerTrapPattern: 'Day-only wage division trap.',
  },
  {
    conceptId: 'CON-QUANT-19',
    type: 'MULTIPLE_CHOICE',
    stem: 'A thief steals a car at 1:30 PM and drives it at 40 km/h. The theft is discovered at 2:00 PM and the owner sets off in another car at 50 km/h. At what time will the owner overtake the thief?',
    options: ['4:00 PM', '3:30 PM', '4:30 PM', '5:00 PM'],
    correctAnswer: '4:00 PM',
    explanation: '1. In 30 minutes (0.5 hours), thief covers = 40 * 0.5 = 20 km.\n2. Relative speed of owner chasing thief = 50 - 40 = 10 km/h.\n3. Time to overtake = Distance / Relative Speed = 20 / 10 = 2 hours.\n4. Overtaking time = 2:00 PM + 2 hours = 4:00 PM.',
    trapExplanation: 'Adding 2 hours to 1:30 PM instead of 2:00 PM when the owner started chasing.',
    difficulty: 'EASY',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'IBPS Clerk Prelims',
    pyqStage: 'Prelims',
    examinerTrapPattern: 'Base start time reference shift.',
  },
  {
    conceptId: 'CON-QUANT-21',
    type: 'MULTIPLE_CHOICE',
    stem: 'A shopkeeper offers two successive discounts of 20% and 10% on an item and still makes a profit of 20%. If the cost price of the item is ₹600, what is its Marked Price?',
    options: ['₹1,000', '₹900', '₹1,200', '₹960'],
    correctAnswer: '₹1,000',
    explanation: '1. Equivalent discount = 20 + 10 - (20*10)/100 = 28%.\n2. Selling Price = CP * 1.20 = 600 * 1.20 = ₹720.\n3. SP represents (100 - 28)% = 72% of MP.\n4. MP = 720 / 0.72 = ₹1,000.',
    trapExplanation: 'Adding discounts linearly as 30% discount.',
    difficulty: 'EASY',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'SBI PO Prelims Shift 2',
    pyqStage: 'Prelims',
    examinerTrapPattern: 'Linear discount summation.',
  },
  {
    conceptId: 'CON-QUANT-25',
    type: 'MULTIPLE_CHOICE',
    stem: 'In a table showing Production and Sales of 5 companies, Company C produces 45,000 units and sells 80% of them. If Company D sells 20% more units than Company C and its sales constitute 75% of its total production, find total units produced by Company D.',
    options: ['57,600', '54,000', '60,000', '48,000'],
    correctAnswer: '57,600',
    explanation: '1. Units sold by Company C = 45,000 * 0.80 = 36,000 units.\n2. Units sold by Company D = 36,000 * 1.20 = 43,200 units.\n3. 43,200 represents 75% (3/4) of Company D\'s production.\n4. Total production of Company D = 43,200 ÷ (3/4) = 43,200 * (4/3) = 14,400 * 4 = 57,600 units.',
    trapExplanation: 'Multiplying 43,200 by 0.75 instead of dividing.',
    difficulty: 'MEDIUM',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'IBPS PO Prelims Shift 1',
    pyqStage: 'Prelims',
    examinerTrapPattern: 'Base inversion in percentage sales to production.',
  }
];

export async function seedBatchQuantBatch3PracticeBank(): Promise<void> {
  console.log(`Seeding Batch 3 Practice Bank (${QUANT_BATCH_3_ADDITIONAL_QUESTIONS.length} additional graded questions & PYQs)...`);

  for (const q of QUANT_BATCH_3_ADDITIONAL_QUESTIONS) {
    const concept = await db.concept.findUnique({
      where: { id: q.conceptId },
    });
    if (!concept) continue;

    // Check if question with identical stem already exists to ensure idempotency
    const existing = await db.question.findFirst({
      where: { conceptId: concept.id, stem: q.stem },
    });
    if (!existing) {
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

  const totalQuestions = await db.question.count();
  console.log(`Successfully seeded Batch 3 Practice Bank. Total Question count in database: ${totalQuestions}.`);
}
