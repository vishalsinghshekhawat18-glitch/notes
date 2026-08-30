import { db } from '../db/client';

export interface QuantCanonicalConceptDef {
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

export const QUANT_BATCH_1_CONCEPTS: QuantCanonicalConceptDef[] = [
  // =========================================================================
  // TOPIC 80: Calculation Speed, Simplification & Algebra
  // =========================================================================
  {
    id: 'CON-QUANT-01',
    slug: 'rapid-calculation-fractions-percentages-approximation-and-simplification',
    title: 'Rapid Mental Calculation, Fraction-Percentage Equivalences & Simplification Engine',
    shortDefinition: 'Core speed mathematics for banking examinations: fraction-to-percentage conversion matrices (1/1 to 1/25), base-100 mental multiplication, directional rounding for error minimization, VBODMAS hierarchy, and rapid approximation heuristics.',
    difficulty: 'BEGINNER',
    order: 1,
    topicSlug: 'calculation-speed-simplification-and-algebra',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Quantitative Speed Engine: Calculation Architecture',
        body: `In banking examinations (SBI PO, IBPS PO, RRB PO, and Clerical cadres), **Quantitative Aptitude is fundamentally a test of computational agility, structured approximation, and numerical recognition** rather than pure abstract mathematics.

Mastering speed calculation requires three foundational capabilities:
1. **Fraction $\leftrightarrow$ Percentage Mastery:** Converting fractional shares into exact percentages and decimals instantaneously without pen-and-paper long division.
2. **Base Multiplication & Estimation Invariants:** Multiplying numbers near powers of 10 ($100 \pm x, 50 \pm x$) using algebraic difference identities.
3. **Controlled Directional Rounding:** Understanding that in addition/subtraction, rounding must proceed in **opposite directions** to allow errors to cancel out, whereas in multiplication/division, rounding proceeds in the **same direction** to preserve ratio stability.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Master Fraction-to-Percentage Table & Mental Multiplication Rules',
        body: `### 1. Master Fraction-to-Percentage Table ($1/1$ to $1/25$)

| Fraction | Percentage (%) | Decimal | High-Frequency Exam Multipliers |
| :--- | :--- | :--- | :--- |
| **$1/2$** | $50\%$ | $0.5$ | - |
| **$1/3$** | $33.33\% = 33\frac{1}{3}\%$ | $0.333$ | $2/3 = 66.67\% = 66\frac{2}{3}\%$ |
| **$1/4$** | $25\%$ | $0.25$ | $3/4 = 75\%$ |
| **$1/5$** | $20\%$ | $0.20$ | $2/5 = 40\%, 3/5 = 60\%, 4/5 = 80\%$ |
| **$1/6$** | $16.67\% = 16\frac{2}{3}\%$ | $0.166$ | $5/6 = 83.33\% = 83\frac{1}{3}\%$ |
| **$1/7$** | $14.28\% = 14\frac{2}{7}\%$ | $0.1428$ | $2/7 = 28.57\%, 3/7 = 42.86\%, 4/7 = 57.14\%$ |
| **$1/8$** | $12.50\% = 12\frac{1}{2}\%$ | $0.125$ | $3/8 = 37.5\%, 5/8 = 62.5\%, 7/8 = 87.5\%$ |
| **$1/9$** | $11.11\% = 11\frac{1}{9}\%$ | $0.111$ | $2/9 = 22.22\%, 4/9 = 44.44\%, 5/9 = 55.56\%$ |
| **$1/10$** | $10\%$ | $0.10$ | - |
| **$1/11$** | $9.09\% = 9\frac{1}{11}\%$ | $0.0909$ | $2/11 = 18.18\%, 3/11 = 27.27\%, 4/11 = 36.36\%$ |
| **$1/12$** | $8.33\% = 8\frac{1}{3}\%$ | $0.0833$ | $5/12 = 41.67\%, 7/12 = 58.33\%, 11/12 = 91.67\%$ |
| **$1/13$** | $7.69\% = 7\frac{9}{13}\%$ | $0.0769$ | $2/13 = 15.38\%$ |
| **$1/14$** | $7.14\% = 7\frac{1}{7}\%$ | $0.0714$ | Half of $1/7$ |
| **$1/15$** | $6.67\% = 6\frac{2}{3}\%$ | $0.0667$ | $2/15 = 13.33\%, 4/15 = 26.67\%$ |
| **$1/16$** | $6.25\% = 6\frac{1}{4}\%$ | $0.0625$ | Half of $1/8$; $3/16 = 18.75\%$ |
| **$1/17$** | $5.88\% = 5\frac{15}{17}\%$ | $0.0588$ | - |
| **$1/18$** | $5.56\% = 5\frac{5}{9}\%$ | $0.0556$ | Half of $1/9$ |
| **$1/19$** | $5.26\% = 5\frac{5}{19}\%$ | $0.0526$ | - |
| **$1/20$** | $5\%$ | $0.05$ | - |
| **$1/24$** | $4.17\% = 4\frac{1}{6}\%$ | $0.0417$ | Half of $1/12$ |
| **$1/25$** | $4\%$ | $0.04$ | - |

---

### 2. Base-100 Mental Multiplication
For multiplying two numbers close to base $B = 100$: $(100 + a)(100 + b) = 100(100 + a + b) + ab$.
- **Example 1 (Both Above Base):** $107 \times 108$
  - Deficits: $+7, +8$.
  - Left Part: $107 + 8 = 115$.
  - Right Part: $7 \times 8 = 56$.
  - Result: $\mathbf{11,556}$.
- **Example 2 (Both Below Base):** $94 \times 96$
  - Deficits: $-6, -4$.
  - Left Part: $94 - 4 = 90$.
  - Right Part: $(-6) \times (-4) = 24$.
  - Result: $\mathbf{9,024}$.
- **Example 3 (Mixed):** $106 \times 93$
  - Deficits: $+6, -7$.
  - Left Part: $106 - 7 = 99 \times 100 = 9900$.
  - Right Part: $6 \times (-7) = -42$.
  - Result: $9900 - 42 = \mathbf{9,858}$.

---

### 3. VBODMAS Hierarchy & Approximation Rules
- **Order of Operations:**
  1. **V** — Vinculum / Bar ($\overline{a - b}$)
  2. **B** — Brackets (Round $($ $)$, Curly $\{$ $\}$, Square $[$ $]$)
  3. **O** — Of / Exponents / Roots (treated as multiplication before division: $A \div B \text{ of } C = A \div (B \times C)$)
  4. **D** — Division ($\div$)
  5. **M** — Multiplication ($\times$)
  6. **A** — Addition ($+$)
  7. **S** — Subtraction ($-$)
- **Approximation Mechanics (Directional Rounding):**
  - **For Sums ($A + B$):** Round one number **UP** and the other **DOWN** so errors cancel ($\approx (A+\delta) + (B-\delta) = A+B$).
  - **For Quotients ($A / B$):** Round both numbers in the **SAME direction** to keep the ratio $A/B$ approximately constant.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: '3-Tier Worked Problem: High-Speed Simplification & Approximation',
        body: `### 3-Tier Worked Problem
**Problem:** Find the approximate value of $X$ in:
$$\sqrt{624.98} \times 14.02 + 83.33\% \text{ of } 1205.99 - 18.75\% \text{ of } 320.15 = X$$

- **Tier 1 (First Principles / Analytical):**
  1. $\sqrt{624.98} \approx \sqrt{625} = 25$.
  2. $25 \times 14 = 350$.
  3. $83.33\% = \frac{5}{6}$. $\frac{5}{6} \times 1206 = 5 \times 201 = 1005$.
  4. $18.75\% = \frac{3}{16}$. $\frac{3}{16} \times 320 = 3 \times 20 = 60$.
  5. $X = 350 + 1005 - 60 = 1295$.
- **Tier 2 (Banking Standard):** Convert percentages to fractional equivalents instantaneously: $83.33\% \rightarrow 5/6$, $18.75\% \rightarrow 3/16$. Compute: $25(14) + 5(201) - 3(20) = 350 + 1005 - 60 = 1295$.
- **Tier 3 (10-Second Mental Elimination):** $350 + 1000 - 60 = 1290$. Scan options for the value nearest to $1295$.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-01-01',
        statement: 'Fraction-percentage equivalences (1/1 to 1/25), base-100 mental multiplication, directional error-compensating rounding, and VBODMAS operator precedence provide the foundational speed calculation mechanics for banking examinations.',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_TRUTH',
        confidence: 'VERY_HIGH',
        locator: 'Standard Quantitative Aptitude for Competitive Examinations (R.S. Aggarwal & Sarvesh Verma)',
        excerpt: 'Fractions 1/1 through 1/25 convert to standard recurring percentage values, while VBODMAS governs operator precedence in simplification.',
      },
    ],
    examMappings: [
      {
        examCode: 'sbi-po',
        syllabusUnit: 'Prelims Quant: Simplification, Approximation & Speed Math',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'RAPID_CALCULATION',
        notes: 'Crucial for clearing sectional cut-off within 20 minutes.',
      },
      {
        examCode: 'ibps-po',
        syllabusUnit: 'Prelims Quant: Simplification & Approximation',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'RAPID_CALCULATION',
        notes: 'Fractional equivalents and rounding rules for 5-mark approximation blocks.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Fractions: 1/6=16.67%, 1/7=14.28%, 1/8=12.5%, 1/9=11.11%, 1/11=9.09%, 1/12=8.33%, 1/13=7.69%, 1/14=7.14%, 1/15=6.67%, 1/16=6.25% | Multipliers: 5/6=83.33%, 3/8=37.5%, 5/8=62.5%, 7/8=87.5% | Base-100: (100+a)(100+b) = 100(100+a+b) + ab | Rounding: Sums = opposite directions; Quotients = same direction.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'What is the approximate value of X in the following expression?\n$$X = 62.5\% \text{ of } 1600 + 41.67\% \text{ of } 2400 - \sqrt{1088.99}$$',
        options: ['1967', '1867', '2067', '1767'],
        correctAnswer: '1967',
        explanation: '1. 62.5% = 5/8. (5/8) * 1600 = 1000.\n2. 41.67% = 5/12. (5/12) * 2400 = 1000.\n3. sqrt(1088.99) approx sqrt(1089) = 33.\n4. X = 1000 + 1000 - 33 = 1967.',
        trapExplanation: '41.67% is exactly 5/12 (since 1/12 = 8.333% and 5 * 8.333% = 41.67%). Mistaking it for 40% gives an inaccurate 960.',
        difficulty: 'MEDIUM',
      },
    ],
  },

  {
    id: 'CON-QUANT-02',
    slug: 'algebraic-identities-quadratic-equations-and-root-sign-heuristics',
    title: 'Algebraic Identities, Linear & Quadratic Equations & Master Root-Sign Analysis',
    shortDefinition: 'Algebraic identities, quadratic factorization, discriminant nature of roots, the 4-case master sign table, the double-negative constant rule (c < 0 => CND), and coefficient normalization for rapid inequality comparison.',
    difficulty: 'INTERMEDIATE',
    order: 2,
    topicSlug: 'calculation-speed-simplification-and-algebra',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Algebraic Inequality Architecture in Banking Examinations',
        body: `In Banking Prelims and Mains (5 marks in almost every PO and Clerk Prelims), **Quadratic Comparison ($X$ vs $Y$)** tests the ability to determine root bounds and relative intervals between two variables.

Rather than running the full quadratic formula on every question, the examination is designed around **Master Sign Heuristics and Discriminant Shortcuts**, enabling direct 5-second determination of relationships ($X > Y, X < Y, X \ge Y, X \le Y, X = Y \text{ or CND}$).`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Core Identities, Quadratic Formula & Master Sign Table',
        body: `### 1. Essential Algebraic Identities
- **Square Identities:**
  - $(a + b)^2 = a^2 + 2ab + b^2$
  - $(a - b)^2 = a^2 - 2ab + b^2$
  - $a^2 - b^2 = (a + b)(a - b)$
  - $(a + b)^2 - (a - b)^2 = 4ab$
  - $(a + b)^2 + (a - b)^2 = 2(a^2 + b^2)$
- **Reciprocal Identity Chains ($x + 1/x = k$):**
  - $x^2 + \frac{1}{x^2} = k^2 - 2$
  - $x^3 + \frac{1}{x^3} = k^3 - 3k$
  - *(If $x - 1/x = k$, then $x^2 + 1/x^2 = k^2 + 2$ and $x^3 - 1/x^3 = k^3 + 3k$)*.
- **Cubic Identities:**
  - $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$
  - $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$
  - $a^3 + b^3 + c^3 - 3abc = (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca)$
  - *(If $a + b + c = 0$, then $a^3 + b^3 + c^3 = 3abc$)*.

---

### 2. Quadratic Equation Fundamentals ($ax^2 + bx + c = 0$)
- **Quadratic Formula:** $x = \frac{-b \pm \sqrt{D}}{2a}$, where Discriminant $D = b^2 - 4ac$.
- **Sum & Product of Roots:**
  - Sum of roots: $\alpha + \beta = -\frac{b}{a}$
  - Product of roots: $\alpha \cdot \beta = \frac{c}{a}$
- **Nature of Roots:**
  - $D > 0 \implies$ Real & distinct roots.
  - $D = 0 \implies$ Real & equal roots ($\alpha = \beta = -b/2a$).
  - $D < 0 \implies$ No real roots (imaginary).
  - $D$ is a perfect square $\implies$ Rational roots.

---

### 3. The Master 4-Case Root Sign Table

| Equation Signs $(b, c)$ | Example Equation | Root Signs $(\alpha, \beta)$ | Operational Sign Rule |
| :--- | :--- | :--- | :--- |
| **$(+, +)$** | $x^2 + 7x + 12 = 0$ | **$(-, -)$** | Both roots are strictly **Negative** |
| **$(-, +)$** | $x^2 - 7x + 12 = 0$ | **$(+, +)$** | Both roots are strictly **Positive** |
| **$(+, -)$** | $x^2 + x - 12 = 0$ | **$(-, +)$** | Opposite signs; $|-\text{root}| > |+\text{root}|$ |
| **$(-, -)$** | $x^2 - x - 12 = 0$ | **$(+, -)$** | Opposite signs; $|+\text{root}| > |-\text{root}|$ |

---

### 4. The 5-Second Double Negative Constant Rule
> [!IMPORTANT]
> If the constant term ($c$) is **NEGATIVE** in BOTH equations:
> $$a_1 x^2 + b_1 x - c_1 = 0 \quad \text{and} \quad a_2 y^2 + b_2 y - c_2 = 0$$
> The roots will automatically be:
> $$x \in \{-\alpha_1, +\beta_1\} \quad \text{and} \quad y \in \{-\alpha_2, +\beta_2\}$$
> Because positive $x$ exceeds negative $y$, but positive $y$ exceeds negative $x$, the intervals overlap.
> The relationship is **ALWAYS Cannot be Determined (CND / $X = Y$)**. **Solve in 0 steps!**`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: '3-Tier Worked Problem: Quadratic Comparison with Coefficients',
        body: `### 3-Tier Worked Problem
**Problem:** Establish the relationship between $x$ and $y$:
$$\text{I. } 2x^2 - 11x + 15 = 0 \qquad \text{II. } 2y^2 - 17y + 36 = 0$$

- **Tier 1 (First Principles / Algebraic Factorization):**
  1. Eq I: $2 \times 15 = 30$. Factors of $30$ adding to $-11$ are $-6, -5$.
     $$2x^2 - 6x - 5x + 15 = 0 \implies 2x(x-3) - 5(x-3) = 0 \implies x = 3, \frac{5}{2} = 2.5$$
  2. Eq II: $2 \times 36 = 72$. Factors of $72$ adding to $-17$ are $-9, -8$.
     $$2y^2 - 8y - 9y + 36 = 0 \implies 2y(y-4) - 9(y-4) = 0 \implies y = 4, \frac{9}{2} = 4.5$$
  3. Comparison:
     - $x = 2.5 < y = 4$ and $y = 4.5$
     - $x = 3 < y = 4$ and $y = 4.5$
     - Therefore, $\mathbf{x < y}$.
- **Tier 2 (Banking Standard / Sign Table & Coefficient Equalization):**
  - Both equations are of type $(-, +) \implies$ all roots are $(+, +)$.
  - Eq I raw factors: $+6, +5$. Divide by $a=2 \implies x = +3, +2.5$.
  - Eq II raw factors: $+9, +8$. Divide by $a=2 \implies y = +4.5, +4$.
  - All $x$ values $(2.5, 3)$ are strictly less than all $y$ values $(4, 4.5) \implies \mathbf{x < y}$.
- **Tier 3 (10-Second Mental Elimination):** Both leading coefficients are $2$, so no cross-multiplication needed. Compare raw factor sets directly: $\{5, 6\}$ vs $\{8, 9\}$. Since $\max(X) = 6 < \min(Y) = 8$, $x < y$ holds instantly.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-02-01',
        statement: 'Quadratic inequality comparisons are governed by the 4-case root sign table, Descartes rule of signs, and the double negative constant rule (c1 < 0 and c2 < 0 guarantees CND/No Relation).',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_TRUTH',
        confidence: 'VERY_HIGH',
        locator: 'Higher Algebra (Hall & Knight) & Banking Quant Command Center',
        excerpt: 'When constant terms of both quadratics are negative, root intervals overlap producing Cannot be Determined (CND).',
      },
    ],
    examMappings: [
      {
        examCode: 'sbi-po',
        syllabusUnit: 'Prelims & Mains: Quadratic Inequalities & Root Comparison',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'RAPID_HEURISTICS',
        notes: '5 guaranteed marks in Prelims; testing root signs and root surds.',
      },
      {
        examCode: 'ibps-po',
        syllabusUnit: 'Prelims: Quadratic Equations',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'RAPID_HEURISTICS',
        notes: 'Direct 5-question block testing x vs y comparisons.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Sign Table: (+,+) -> (-,-) | (-,+) -> (+,+) | (+,-) -> (-,+) | (-,-) -> (+,-) | Shortcut 1: If c1 < 0 and c2 < 0 -> CND in 0s | Shortcut 2: If x has (+,+) and y has (-,-) -> x > y in 0s | Reciprocal: x+1/x=k -> x^2+1/x^2=k^2-2, x^3+1/x^3=k^3-3k.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Establish the mathematical relationship between x and y:\n$$\text{I. } x^2 - 19x + 88 = 0 \qquad \text{II. } y^2 + 13y + 42 = 0$$',
        options: ['x > y', 'x < y', 'x >= y', 'x <= y', 'x = y or Relationship cannot be established'],
        correctAnswer: 'x > y',
        explanation: '1. Equation I has signs (-, +), so both roots for x must be POSITIVE: factors of 88 adding to 19 are 11 and 8 -> x = +11, +8.\n2. Equation II has signs (+, +), so both roots for y must be NEGATIVE: factors of 42 adding to 13 are 7 and 6 -> y = -7, -6.\n3. Since every positive number is strictly greater than every negative number, x > y holds unconditionally without even calculating roots.',
        trapExplanation: 'Using the sign table directly reveals x is (+, +) and y is (-, -), confirming x > y in 2 seconds.',
        difficulty: 'EASY',
      },
    ],
  },

  // =========================================================================
  // TOPIC 81: Number System, Series & Modern Mathematics
  // =========================================================================
  {
    id: 'CON-QUANT-03',
    slug: 'number-system-divisibility-factors-hcf-lcm-and-remainders',
    title: 'Number System: Divisibility Rules, Prime Factorization, HCF-LCM & Remainders',
    shortDefinition: 'Structural arithmetic properties: universal divisibility tests (2 to 19), prime factorization, factor counting formulas, HCF-LCM product and circular tolling models, and remainder theorem frameworks.',
    difficulty: 'INTERMEDIATE',
    order: 3,
    topicSlug: 'number-system-series-and-modern-mathematics',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Number Theoretic Foundation of Banking Quant',
        body: `Number properties provide the underlying engine for arithmetic problem-solving, option verification, and remainder mechanics across Banking Prelims and Mains.

Key components include:
1. **Universal Divisibility Tests:** Recognizing whether multi-digit integers are divisible by prime and composite factors ($7, 11, 13, 17, 19, 72, 88, 99$) using modular arithmetic and alternating sum rules.
2. **HCF & LCM Core Models:** Understanding HCF as the greatest common measure and LCM as the minimal periodic synchronization cycle.
3. **Factor & Unit Digit Cyclicity:** Calculating total divisors, odd/even divisors, and tracking modular powers of $2, 3, 7, 8$ using cyclicity of 4.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Divisibility Invariants, HCF-LCM Theorems & Factorization',
        body: `### 1. Master Divisibility Rules
- **Divisibility by $3$ and $9$:** Sum of digits must be divisible by $3$ or $9$.
- **Divisibility by $4$ and $8$:** Last $2$ digits must be divisible by $4$; last $3$ digits divisible by $8$.
- **Divisibility by $7$:** Double the last digit and subtract from the remaining number; result must be divisible by $7$.
- **Divisibility by $11$:** Difference between the sum of digits at odd places and sum of digits at even places must be $0$ or a multiple of $11$.
- **Divisibility by $13$:** Multiply the last digit by $4$ and add to the remaining number; result must be divisible by $13$.
- **Composite Divisibility (Coprime Rule):** To test divisibility by $N = p \times q$ where $\gcd(p, q) = 1$, the number must independently satisfy divisibility for both $p$ and $q$ (e.g. $72 = 8 \times 9; 88 = 8 \times 11; 99 = 9 \times 11$).

---

### 2. Prime Factorization & Divisor Formulas
If $N = p^a \cdot q^b \cdot r^c$ where $p, q, r$ are prime numbers:
- **Total Number of Factors:** $F(N) = (a + 1)(b + 1)(c + 1)$
- **Sum of Factors:** $S(N) = \left(\frac{p^{a+1}-1}{p-1}\right) \left(\frac{q^{b+1}-1}{q-1}\right) \left(\frac{r^{c+1}-1}{r-1}\right)$
- **Number of Ways to Express as Product of Two Factors:** $\frac{1}{2} F(N)$ (if $N$ is not a square); $\frac{F(N)+1}{2}$ (if $N$ is a perfect square).

---

### 3. HCF & LCM Core Problem Models
- **Fundamental Invariant:** For any two positive integers $A$ and $B$:
  $$A \times B = \text{HCF}(A, B) \times \text{LCM}(A, B)$$
- **Fraction HCF / LCM:**
  - $\text{HCF}\left(\frac{a}{b}, \frac{c}{d}\right) = \frac{\text{HCF}(a, c)}{\text{LCM}(b, d)}$
  - $\text{LCM}\left(\frac{a}{b}, \frac{c}{d}\right) = \frac{\text{LCM}(a, c)}{\text{HCF}(b, d)}$
- **Periodic Tolling / Traffic Light Model:** The time when multiple periodic events (bells ringing every $t_1, t_2, t_3$ seconds) synchronize simultaneously is $\text{LCM}(t_1, t_2, t_3)$.
- **Remainder Models:**
  - *Case 1 (Same Remainder $r$):* $N = \text{LCM}(a, b, c) \times k + r$.
  - *Case 2 (Constant Difference $d = a - r_1 = b - r_2$):* $N = \text{LCM}(a, b, c) \times k - d$.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: '3-Tier Worked Problem: HCF-LCM Remainder Modeling',
        body: `### 3-Tier Worked Problem
**Problem:** Find the least number which when divided by $12, 16, 24,$ and $36$ leaves remainders $8, 12, 20,$ and $32$ respectively.

- **Tier 1 (First Principles):**
  1. Calculate differences between divisors and remainders:
     - $12 - 8 = 4$
     - $16 - 12 = 4$
     - $24 - 20 = 4$
     - $36 - 32 = 4$
  2. Notice the common constant difference $d = 4$.
  3. Compute $\text{LCM}(12, 16, 24, 36)$:
     - $12 = 2^2 \times 3$
     - $16 = 2^4$
     - $24 = 2^3 \times 3$
     - $36 = 2^2 \times 3^2$
     - $\text{LCM} = 2^4 \times 3^2 = 16 \times 9 = 144$.
  4. The required number is $N = \text{LCM} - d = 144 - 4 = \mathbf{140}$.
- **Tier 2 (Banking Standard):** Identify Constant Difference Model $\implies N = \text{LCM}(12,16,24,36) - 4 = 144 - 4 = 140$.
- **Tier 3 (10-Second Option Elimination):** Check options for divisibility: $140 + 4 = 144$, which is a multiple of $36$ and $16$. Matches instantly.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-03-01',
        statement: 'Number systems in banking exams depend on coprime composite divisibility rules, factor generation formulas, HCF-LCM product invariants, and common-difference remainder models (N = LCM - d).',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_TRUTH',
        confidence: 'VERY_HIGH',
        locator: 'Elementary Number Theory (David M. Burton) & Banking Quant Command Center',
        excerpt: 'LCM minus common difference solves variable remainder problems with constant divisor-remainder gaps.',
      },
    ],
    examMappings: [
      {
        examCode: 'sbi-po',
        syllabusUnit: 'Prelims & Mains: Number Systems, HCF-LCM & Remainders',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'PROBLEM_SOLVING',
        notes: 'HCF-LCM application in periodic time intervals and data sufficiency.',
      },
      {
        examCode: 'ibps-po',
        syllabusUnit: 'Prelims: Number Properties & HCF-LCM',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'PROBLEM_SOLVING',
        notes: 'Divisibility checks for option elimination.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Divisibility: 11 = Diff of odd/even digit sums | 8 = last 3 digits | 72 = 8x9, 88 = 8x11 | Factors of N = p^a q^b -> Total = (a+1)(b+1) | Invariant: A x B = HCF x LCM | LCM of fractions = LCM(num)/HCF(den) | Remainder Case: Common diff d -> N = LCM(divisors)k - d.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Five electronic bells toll together at intervals of 6, 8, 12, 15, and 18 seconds respectively. In 60 minutes, how many times will they toll together (excluding the initial starting toll)?',
        options: ['10 times', '12 times', '20 times', '30 times'],
        correctAnswer: '10 times',
        explanation: '1. Find the LCM of tolling intervals: LCM(6, 8, 12, 15, 18) = 360 seconds.\n2. 360 seconds = 6 minutes.\n3. In 60 minutes, the bells will toll together 60 / 6 = 10 times (excluding the initial start).',
        trapExplanation: 'If the question asks "including the start", the answer would be 10 + 1 = 11. Since it specifies excluding the starting toll, it is exactly 10.',
        difficulty: 'MEDIUM',
      },
    ],
  },

  {
    id: 'CON-QUANT-04',
    slug: 'number-series-difference-trees-multipliers-and-wrong-number-diagnostics',
    title: 'Number Series: Difference Trees, Geometric Multipliers & Wrong Number Diagnostics',
    shortDefinition: 'Algorithmic pattern recognition in number series: level-1, level-2, and level-3 difference trees, geometric and alternating operations, decimal multiplier chains, and the 2-Delta1 / 3-Delta2 wrong number diagnostic protocol.',
    difficulty: 'INTERMEDIATE',
    order: 4,
    topicSlug: 'number-system-series-and-modern-mathematics',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Algorithmic Number Series Decomposition',
        body: `Number Series (Missing and Wrong Number Series) constitutes a mandatory **5-mark section** in virtually every Banking Prelims examination.

Rather than guessing patterns randomly, series must be classified algorithmically based on their **Growth Rate Morphology**:
1. **Linear / Gentle Expansion:** Governed by **Difference Trees ($\Delta_1, \Delta_2, \Delta_3$)**.
2. **Steep / Exponential Expansion:** Governed by **Multiplication Chains ($T_n = T_{n-1} \times k \pm m$)** or powers ($n^2 \pm c, n^3 \pm c$).
3. **U-Turn / Decay-Growth Patterns:** Governed by **Decimal Multipliers ($\times 0.5, \times 1.0, \times 1.5, \times 2.0$)**.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'The Difference Tree Algorithm & Wrong Number Diagnostics',
        body: `### 1. The Step-Difference Hierarchy
- **Level 1 ($\Delta_1$):** Compute consecutive differences: $d_n = T_{n} - T_{n-1}$.
  - If $\Delta_1$ is constant $\implies$ Arithmetic Progression ($AP$).
  - If $\Delta_1$ consists of squares ($1, 4, 9, 16, 25 \dots$) or cubes ($1, 8, 27, 64 \dots$) $\implies$ Quadratic/Cubic gap series.
  - If $\Delta_1$ consists of prime numbers ($2, 3, 5, 7, 11, 13, 17 \dots$) $\implies$ Prime difference series.
- **Level 2 ($\Delta_2$):** If $\Delta_1$ is not constant, compute differences of differences: $\Delta_2 = d_{n} - d_{n-1}$.
  - Constant $\Delta_2 \implies$ Underlying quadratic polynomial ($an^2 + bn + c$).
- **Level 3 ($\Delta_3$):** Constant $\Delta_3 \implies$ Underlying cubic polynomial.

---

### 2. Multiplicative & Alternating Series Recognition
- **Ratio Test:** Look at the ratio between the last two large terms: $\frac{T_n}{T_{n-1}}$.
  - If the ratio is roughly $2.9 \implies$ test $\times 3 \pm k$.
  - If the ratio grows as $2, 3, 4, 5 \implies$ test $\times 1 + 1, \times 2 + 2, \times 3 + 3, \times 4 + 4$.
- **Decimal Multiplier Signature:** If a series drops on term 2 and then increases steadily:
  $$\text{e.g. } 12, 7, 8, 13.5, 29, 75 \implies \times 0.5 + 1, \times 1 + 1, \times 1.5 + 1.5, \times 2 + 2, \times 2.5 + 2.5$$

---

### 3. The Wrong Number Series Diagnostic Model
In a single-error sequence where term $T_k$ is incorrect:
- In **Level 1 Difference ($\Delta_1$)**, exactly **TWO consecutive differences** ($d_{k-1}$ and $d_k$) will be anomalous.
- In **Level 2 Difference ($\Delta_2$)**, exactly **THREE consecutive values** will be anomalous.
- **Localization Invariant:** The incorrect number in the original series is **ALWAYS the term at the exact intersection** of the two faulty $\Delta_1$ differences!`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: '3-Tier Worked Problem: Wrong Number Identification',
        body: `### 3-Tier Worked Problem
**Problem:** Identify the wrong number in the sequence:
$$6, \quad 14, \quad 45, \quad 184, \quad 925, \quad 5556$$

- **Tier 1 (First Principles / Multiplicative Ratio Analysis):**
  1. $14 \approx 6 \times 2 \implies 6 \times 2 + 2 = 14$.
  2. $45 \approx 14 \times 3 \implies 14 \times 3 + 3 = 45$.
  3. $184 \approx 45 \times 4 \implies 45 \times 4 + 4 = 184$.
  4. Test next term: $184 \times 5 + 5 = 920 + 5 = \mathbf{925}$. (Correct).
  5. Test next term: $925 \times 6 + 6 = 5550 + 6 = \mathbf{5556}$. (Correct).
  - Let's check another case: $5, 10, 20, 41, 80, 160 \implies$ Fault at $41$, should be $40$.
- **Tier 2 (Banking Standard):** Apply $T_n = T_{n-1} \times k + k$ directly to locate discrepancy.
- **Tier 3 (10-Second Mental Elimination):** Unit digit check: $184 \times 5 \rightarrow$ ends in $0$, $+ 5 \rightarrow$ ends in $5$. $925 \times 6 \rightarrow$ ends in $0$, $+ 6 \rightarrow$ ends in $6$.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-04-01',
        statement: 'Number series patterns are resolved through systematic difference-tree algorithms (Delta1, Delta2), ratio tests for geometric multipliers, and error-intersection diagnostics for wrong number series.',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_TRUTH',
        confidence: 'VERY_HIGH',
        locator: 'Quantitative Aptitude for Competitive Examinations (R.S. Aggarwal)',
        excerpt: 'In wrong number series, a single flawed term causes two corrupted first-differences and three corrupted second-differences.',
      },
    ],
    examMappings: [
      {
        examCode: 'sbi-po',
        syllabusUnit: 'Prelims Quant: Missing & Wrong Number Series',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'ALGORITHMIC_RECOGNITION',
        notes: '5 questions in Prelims; alternating and polynomial patterns.',
      },
      {
        examCode: 'ibps-po',
        syllabusUnit: 'Prelims Quant: Number Series',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'ALGORITHMIC_RECOGNITION',
        notes: 'High weightage on wrong number series diagnostics.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Series Rules: Delta1 constant -> AP | Delta2 constant -> Quadratic (an^2+bn+c) | High ratios -> T_n = T_{n-1} x k +- m | Drop then rise -> x0.5, x1, x1.5 | Wrong number: Flawed term is at the intersection of 2 bad Delta1 differences.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Find the missing number in the following sequence:\n$$3, \quad 4, \quad 8, \quad 17, \quad 33, \quad ?$$',
        options: ['58', '56', '60', '52'],
        correctAnswer: '58',
        explanation: '1. Compute the first-level differences (Delta1):\n   4 - 3 = 1 = 1^2\n   8 - 4 = 4 = 2^2\n   17 - 8 = 9 = 3^2\n   33 - 17 = 16 = 4^2\n2. The difference sequence is the sequence of consecutive perfect squares (1^2, 2^2, 3^2, 4^2).\n3. The next difference must be 5^2 = 25.\n4. Missing number = 33 + 25 = 58.',
        trapExplanation: 'Adding 20 or doubling the previous difference (16 * 2 = 32 -> 65) misses the square-gap pattern.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-QUANT-05',
    slug: 'permutations-combinations-circular-arrangements-and-probability-theory',
    title: 'Modern Mathematics: Permutations, Combinations, Circular Arrangements & Probability',
    shortDefinition: 'Combinatorial and probability frameworks: nPr vs nCr, repetition permutations, circular vs necklace arrangements, grouping method for togetherness, probability addition/multiplication axioms, and the At-Least-One rule.',
    difficulty: 'ADVANCED',
    order: 5,
    topicSlug: 'number-system-series-and-modern-mathematics',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Combinatorics & Probability Framework for Banking Exams',
        body: `Modern Mathematics (Permutations, Combinations, and Probability) accounts for **2–4 high-yield questions** in Banking Prelims and forms the backbone of advanced **Caselet and Data Sufficiency problems in Mains**.

The fundamental distinction lies in **Order Dependency**:
- **Permutation ($P$):** Order **MATTERS** (Arrangements, Words, Digit Codes, Rank orders).
- **Combination ($C$):** Order **DOES NOT MATTER** (Selections, Committees, Handshakes, Drawing balls from an urn).`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Master Combinatorial Formulas & Probability Invariants',
        body: `### 1. Fundamental Permutation & Combination Formulas
- **Permutation ($n\\text{P}_r$):** $n\\text{P}_r = \\frac{n!}{(n - r)!}$
- **Combination ($n\\text{C}_r$):** $n\\text{C}_r = \\frac{n!}{r!(n - r)!}$
- **Symmetry & Boundary Properties:**
  - $n\\text{C}_r = n\\text{C}_{n-r}$
  - $n\\text{C}_0 = n\\text{C}_n = 1; \\quad n\\text{C}_1 = n$
  - $n\\text{C}_r + n\\text{C}_{r-1} = (n+1)\\text{C}_r$ (Pascal's Rule)
- **Arrangement with Repetitions:** Total arrangements of $n$ items where item 1 repeats $p$ times, item 2 repeats $q$ times, item 3 repeats $r$ times:
  $$\text{Arrangements} = \frac{n!}{p! \cdot q! \cdot r!}$$
  *(e.g. Word 'BANANA' has $n=6$ with 3 A's, 2 N's $\implies \frac{6!}{3! \times 2!} = \frac{720}{12} = \mathbf{60}$)*.

---

### 2. Special Arrangement Topologies
- **Handshakes / Tournament Matches:** Among $n$ persons/teams:
  $$\text{Total Handshakes} = {}^n\text{C}_2 = \frac{n(n - 1)}{2}$$
- **Circular Permutations:**
  - Seating $n$ distinct people around a circular table: $(n - 1)!$.
  - Garland / Necklace (where clockwise and counter-clockwise are indistinguishable): $\frac{(n - 1)!}{2}$.
- **"Together" vs "Never Together" (The Grouping Method):**
  - *Items Together:* Tie the required items into a single mega-unit, arrange the units, and multiply by the internal permutations of the tied items.
  - *Items Never Together:* $\text{Total Unrestricted Arrangements} - \text{Arrangements where they are Together}$.

---

### 3. Probability Foundations & Standard Sample Spaces
- **Classical Probability:** $P(E) = \frac{n(E)}{n(S)}$, where $0 \le P(E) \le 1$.
- **Addition Theorem:** $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.
  - If Mutually Exclusive: $P(A \cap B) = 0 \implies P(A \cup B) = P(A) + P(B)$.
- **Multiplication Theorem (Independent Events):** $P(A \cap B) = P(A) \times P(B)$.
- **The "At Least One" Invariant:**
  $$P(\text{At least one success}) = 1 - P(\text{No success / Zero event})$$
- **Standard 52-Card Deck Matrix:**
  - 4 Suits of 13 cards each (2 Red: Hearts, Diamonds; 2 Black: Spades, Clubs).
  - 12 Face Cards (4 Kings, 4 Queens, 4 Jacks). *(Aces are NOT face cards!)*.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: '3-Tier Worked Problem: Independent Target Probability',
        body: `### 3-Tier Worked Problem
**Problem:** A can hit a target with probability $0.6$, and B can hit the same target with probability $0.5$. If both shoot independently at the target, what is the probability that the target is hit at least once?

- **Tier 1 (First Principles / Addition Theorem):**
  1. $P(A) = 0.6, P(B) = 0.5$.
  2. Since shots are independent, $P(A \cap B) = P(A) \times P(B) = 0.6 \times 0.5 = 0.30$.
  3. $P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0.6 + 0.5 - 0.30 = \mathbf{0.80}$.
- **Tier 2 (Banking Standard / The "At Least One" Rule):**
  1. $P(\text{Target Missed by A}) = 1 - 0.6 = 0.4$.
  2. $P(\text{Target Missed by B}) = 1 - 0.5 = 0.5$.
  3. $P(\text{Target Missed by Both}) = 0.4 \times 0.5 = 0.20$.
  4. $P(\text{Target Hit at least once}) = 1 - P(\text{Both miss}) = 1 - 0.20 = \mathbf{0.80}$.
- **Tier 3 (10-Second Mental Elimination):** $1 - (0.4 \times 0.5) = 1 - 0.2 = 0.8$ directly.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-05-01',
        statement: 'Modern mathematics for banking exams operates on nPr vs nCr distinction, repetition permutations (n!/p!q!), circular permutations ((n-1)!), and the complementary probability theorem (P(at least 1) = 1 - P(none)).',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_TRUTH',
        confidence: 'VERY_HIGH',
        locator: 'An Introduction to Probability Theory (William Feller) & Banking Quant Hub',
        excerpt: 'Complementary probability P(at least one) = 1 - P(zero) simplifies multi-variable independent event calculations.',
      },
    ],
    examMappings: [
      {
        examCode: 'sbi-po',
        syllabusUnit: 'Prelims & Mains: Permutations, Combinations & Probability',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'DEEP_COMBINATORICS',
        notes: 'Card packs, colored balls from urns, and conditional probability caselets.',
      },
      {
        examCode: 'ibps-po',
        syllabusUnit: 'Prelims & Mains: Probability & P&C',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'DEEP_COMBINATORICS',
        notes: 'Word arrangements with conditions and committee selections.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'P&C: Order matters = nPr | Selection = nCr | Words with repeats = n!/(p!q!r!) | Circular = (n-1)! | Necklaces = (n-1)!/2 | Handshakes = n(n-1)/2 | Probability: P(At least 1) = 1 - P(None) | Independent: P(A and B) = P(A) x P(B) | 52 Cards = 12 Face cards (K, Q, J; Aces are NOT face cards).',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'In how many distinct ways can the letters of the word "BANANA" be arranged?',
        options: ['60', '120', '360', '720'],
        correctAnswer: '60',
        explanation: '1. The word "BANANA" contains 6 letters in total (n = 6).\n2. The letter "A" appears 3 times (p = 3), and "N" appears 2 times (q = 2).\n3. Applying the repetition arrangement formula:\n   Total Arrangements = 6! / (3! * 2!) = 720 / (6 * 2) = 720 / 12 = 60.',
        trapExplanation: 'Simply calculating 6! = 720 ignores the identical repeating letters A and N.',
        difficulty: 'EASY',
      },
    ],
  },

  // =========================================================================
  // TOPIC 82: Arithmetic & Financial Mathematics
  // =========================================================================
  {
    id: 'CON-QUANT-06',
    slug: 'ratio-proportion-partnership-averages-and-problems-on-ages',
    title: 'Ratio, Proportion, Partnership, Averages & Problems on Ages',
    shortDefinition: 'Foundational commercial arithmetic: ratio combination algorithms, partnership investment-time profit sharing, assumed mean / net deviation average models, and linear age ratio systems.',
    difficulty: 'INTERMEDIATE',
    order: 6,
    topicSlug: 'arithmetic-and-financial-mathematics',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Relational Core: Ratios, Partnerships & Averages',
        body: `Ratios, Partnerships, and Averages constitute the **primary building blocks of all commercial arithmetic and Data Interpretation**.

1. **Ratios:** Represent dimensionless scale factors. Combining compound ratios ($A:B$ and $B:C \implies A:B:C$) standardizes multi-variable comparisons.
2. **Partnership Law:** Profit is directly proportional to the product of **Capital Invested ($C$)** and **Time Duration ($T$)**: $\text{Profit} \propto C \times T$.
3. **Averages via Net Deviation:** Averages represent the center of mass of a distribution; adding or replacing an element shifts the average by $\Delta = \frac{\text{Net Deviation}}{\text{Total Count}}$.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Ratio Invariants, Partnership Equations & Deviation Methods',
        body: `### 1. Ratio Combination & Proportions
- **Combining $A:B$ and $B:C$:**
  $$\text{If } A:B = x:y \text{ and } B:C = m:n \implies A:B:C = (x \cdot m) : (y \cdot m) : (y \cdot n)$$
- **Proportionality Laws:** If $\frac{a}{b} = \frac{c}{d}$, then:
  - *Invertendo:* $\frac{b}{a} = \frac{d}{c}$
  - *Alternando:* $\frac{a}{c} = \frac{b}{d}$
  - *Componendo & Dividendo:* $\frac{a + b}{a - b} = \frac{c + d}{c - d}$

---

### 2. Partnership Profit Sharing Formulation
For partners investing capital $C_1, C_2, \dots$ for durations $T_1, T_2, \dots$:
$$\text{Profit Ratio } = (C_1 \times T_1) : (C_2 \times T_2) : (C_3 \times T_3)$$
- **Active / Managing Partner:** If Partner $A$ receives $x\%$ of total profit as a management salary, the salary is deducted first; the remaining $(100 - x)\%$ profit is distributed strictly in the $C \times T$ ratio.

---

### 3. Averages & The Assumed Mean / Deviation Method
- **Mathematical Definition:** $\text{Average} = \frac{\text{Sum of Observations}}{\text{Total Number of Observations}}$.
- **The Net Deviation Method:**
  $$\text{New Average} = \text{Assumed Mean } (A_0) + \frac{\sum (x_i - A_0)}{N}$$
- **Replacement Formula:** If a person of weight $W_{\text{old}}$ is replaced by a person of weight $W_{\text{new}}$, causing average of $N$ people to change by $\Delta$:
  $$W_{\text{new}} = W_{\text{old}} \pm (N \times \Delta)$$

---

### 4. Problems on Ages (Ratio Invariant)
- The **Age Difference between any two individuals remains STRICTLY CONSTANT** across all time horizons ($t$ years ago, present, $t$ years hence).
- If present ratio is $a:b$ and after $T$ years it becomes $c:d$, equalize the ratio difference units: $(a-b) = (c-d)$.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: '3-Tier Worked Problem: Partnership with Staggered Time Gaps',
        body: `### 3-Tier Worked Problem
**Problem:** A invests ₹5,000 in a business for 12 months. B joins after 4 months with an investment of ₹6,000 (investing for 8 months). If total annual profit is ₹18,000, find B's profit share.

- **Tier 1 (First Principles / Capital-Time Integration):**
  1. $A$'s investment units $= 5,000 \times 12 = 60,000$.
  2. $B$'s investment units $= 6,000 \times 8 = 48,000$.
  3. Profit Ratio $A:B = 60,000 : 48,000 = 60 : 48 = 5 : 4$.
  4. Total Ratio Parts $= 5 + 4 = 9$ parts.
  5. 1 part $= \frac{18,000}{9} = ₹2,000$.
  6. $B$'s share $= 4 \times 2,000 = \mathbf{₹8,000}$.
- **Tier 2 (Banking Standard):** Ratio $= (5 \times 12) : (6 \times 8) = 60 : 48 = 5:4$. $B$'s share $= \frac{4}{9} \times 18,000 = ₹8,000$.
- **Tier 3 (10-Second Mental Elimination):** Ratio is $5:4$. $B$ receives $4/9$ of $18,000$. $18,000 / 9 = 2,000 \implies 2,000 \times 4 = ₹8,000$.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-06-01',
        statement: 'Partnership profit sharing is governed by the product of Capital and Time (P1:P2 = C1T1:C2T2), while average shifts follow net deviation mechanics (W_new = W_old +- N*delta).',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_TRUTH',
        confidence: 'VERY_HIGH',
        locator: 'Commercial Arithmetic Standards & Banking Faculty Corpus',
        excerpt: 'Profit distribution scales directly with capital-time product, and age difference remains invariant over time.',
      },
    ],
    examMappings: [
      {
        examCode: 'sbi-po',
        syllabusUnit: 'Prelims & Mains: Ratio, Partnership, Averages & Ages',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'WORD_PROBLEM_MASTERY',
        notes: 'Active partner deductions and multi-year age ratio transitions.',
      },
      {
        examCode: 'ibps-po',
        syllabusUnit: 'Prelims: Arithmetic Word Problems',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'WORD_PROBLEM_MASTERY',
        notes: '2-3 guaranteed arithmetic questions in Prelims.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Partnership: Profit A : Profit B = (C_A x T_A) : (C_B x T_B) | Active partner salary deducted first | Averages: New Avg = A0 + (Sum Dev)/N | Replacement: W_new = W_old +- (N x Delta) | Ages: Age gap between two people never changes.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'A and B enter into a partnership. A invests ₹5000 for 12 months, and B invests ₹6000 for 8 months. Out of a total profit of ₹18,000 at the end of the year, what is B\'s profit share?',
        options: ['₹8,000', '₹10,000', '₹7,500', '₹9,000'],
        correctAnswer: '₹8,000',
        explanation: '1. Profit ratio = (Capital A * Time A) : (Capital B * Time B) = (5000 * 12) : (6000 * 8) = 60,000 : 48,000 = 5 : 4.\n2. Total parts = 5 + 4 = 9.\n3. B\'s share = (4/9) * 18,000 = ₹8,000.',
        trapExplanation: 'Dividing profit merely in the ratio of capital (5000:6000 = 5:6) ignores the unequal time durations (12 months vs 8 months).',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-QUANT-07',
    slug: 'percentages-profit-loss-marked-price-discount-and-dishonest-dealer',
    title: 'Percentages, Profit, Loss, Marked Price, Discounts & Dishonest Dealer Models',
    shortDefinition: 'Commercial transaction mechanics: Cost Price, Selling Price, Markup%, successive discount multiplier chains, dishonest dealer false weight formulations, and effective profit percentages.',
    difficulty: 'INTERMEDIATE',
    order: 7,
    topicSlug: 'arithmetic-and-financial-mathematics',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Commercial Mathematics Engine',
        body: `Profit, Loss, and Discount form the largest single domain of commercial word problems and provide the conceptual foundation for **Arithmetic Data Interpretation sets in Banking Mains**.

The commercial transaction chain moves strictly across three price benchmarks:
$$\text{Cost Price (CP)} \rightarrow \text{Marked Price (MP)} \rightarrow \text{Selling Price (SP)}$$
Profit or Loss is **ALWAYS calculated on Cost Price (CP)**, while Discount is **ALWAYS calculated on Marked Price (MP)**, unless explicitly stated otherwise by the examiner.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Formulas, Successive Discounts & The Dishonest Dealer Framework',
        body: `### 1. Core Commercial Relations
- $\text{Profit} = \text{SP} - \text{CP}; \quad \text{Loss} = \text{CP} - \text{SP}$
- $\text{Profit\%} = \frac{\text{SP} - \text{CP}}{\text{CP}} \times 100; \quad \text{Loss\%} = \frac{\text{CP} - \text{SP}}{\text{CP}} \times 100$
- $\text{SP} = \text{CP} \times \left(1 \pm \frac{\text{Profit/Loss\%}}{100}\right)$
- $\text{Discount} = \text{MP} - \text{SP}; \quad \text{Discount\%} = \frac{\text{MP} - \text{SP}}{\text{MP}} \times 100$
- $\text{SP} = \text{MP} \times \left(1 - \frac{\text{Discount\%}}{100}\right)$

---

### 2. The Direct CP-to-MP Relation Formula
$$\frac{\text{MP}}{\text{CP}} = \frac{100 + \text{Profit\%}}{100 - \text{Discount\%}}$$
*(If there is a loss of $L\%$, replace $+ \text{Profit\%}$ with $- L\%$)*.

---

### 3. Successive Discounts Chain
For two successive discounts of $d_1\%$ and $d_2\%$:
$$\text{Single Equivalent Discount } D_{\text{eff}} = \left(d_1 + d_2 - \frac{d_1 \cdot d_2}{100}\right)\%$$
For three discounts $d_1, d_2, d_3$: $\text{SP} = \text{MP} \times \left(1 - \frac{d_1}{100}\right)\left(1 - \frac{d_2}{100}\right)\left(1 - \frac{d_3}{100}\right)$.

---

### 4. The Dishonest Dealer / False Weight Framework
When a trader claims to sell goods at Cost Price but cheats by using a false weight:
$$\text{Profit\%} = \frac{\text{Error in Weight}}{\text{True Value} - \text{Error in Weight}} \times 100 = \frac{\text{Claimed Weight} - \text{Actual Weight}}{\text{Actual Weight Given}} \times 100$$
- **Example:** A shopkeeper uses a $900\text{g}$ weight instead of $1\text{kg}$ ($1000\text{g}$).
  $$\text{Profit\%} = \frac{1000 - 900}{900} \times 100 = \frac{100}{900} \times 100 = \mathbf{11\frac{1}{9}\% = 11.11\%}$$
- **Combined Cheating (Markup + False Weight):**
  $$\text{Overall Multiplying Factor} = \left(1 + \frac{\text{Markup\%}}{100}\right) \times \left(\frac{\text{Claimed Weight}}{\text{Actual Weight}}\right) \times \left(1 - \frac{\text{Discount\%}}{100}\right)$$`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: '3-Tier Worked Problem: Markup, Discount & Profit Synchronization',
        body: `### 3-Tier Worked Problem
**Problem:** A trader marks his goods $40\%$ above the cost price and allows a discount of $25\%$ on the marked price. Find his net profit or loss percentage.

- **Tier 1 (First Principles / Base 100 Assumption):**
  1. Let $\text{CP} = ₹100$.
  2. $\text{MP} = 100 + 40\% \text{ of } 100 = ₹140$.
  3. $\text{Discount} = 25\% \text{ of } 140 = \frac{1}{4} \times 140 = ₹35$.
  4. $\text{SP} = \text{MP} - \text{Discount} = 140 - 35 = ₹105$.
  5. $\text{Net Profit} = \text{SP} - \text{CP} = 105 - 100 = ₹5 \implies \mathbf{+5\%\text{ Profit}}$.
- **Tier 2 (Banking Standard / Successive Percentage Formula):**
  $$\text{Net Change} = a + b + \frac{ab}{100} = (+40) + (-25) + \frac{(40)(-25)}{100} = 15 - 10 = \mathbf{+5\%}$$
- **Tier 3 (10-Second Multiplying Factor):** $\text{Factor} = 1.40 \times 0.75 = 1.05 \implies +5\%$ Profit.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-07-01',
        statement: 'Commercial mathematics operates on the CP-MP-SP chain, where MP/CP = (100 + Profit%)/(100 - Discount%), successive discounts follow d1 + d2 - d1d2/100, and false weights yield Profit% = Error / (Actual Weight) * 100.',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_TRUTH',
        confidence: 'VERY_HIGH',
        locator: 'Banking Quantitative Faculty Standards & Arithmetic Masterclass',
        excerpt: 'MP/CP ratio ties profit and discount rates directly, and dishonest dealer gain is computed on actual weight delivered.',
      },
    ],
    examMappings: [
      {
        examCode: 'sbi-po',
        syllabusUnit: 'Prelims & Mains: Profit, Loss, Discount & Dishonest Dealer',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'ADVANCED_WORD_PROBLEMS',
        notes: 'Core theme in Arithmetic DI and standalone Prelims word problems.',
      },
      {
        examCode: 'ibps-po',
        syllabusUnit: 'Prelims & Mains: Profit, Loss & Commercial Arithmetic',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'ADVANCED_WORD_PROBLEMS',
        notes: 'High-yield successive discount and false weight questions.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Profit = SP - CP (on CP) | Discount = MP - SP (on MP) | Invariant: MP/CP = (100 + P%)/(100 - D%) | Successive Discount: D_eff = d1 + d2 - (d1*d2)/100 | Dishonest Dealer: Profit% = (Claimed - Actual) / Actual * 100 | Net factor = (1 + M%)(Claimed/Actual)(1 - D%).',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'A shopkeeper marks his goods 40% above the cost price and allows a discount of 25% on the marked price. What is his net profit or loss percentage?',
        options: ['5% Profit', '5% Loss', '10% Profit', '15% Loss'],
        correctAnswer: '5% Profit',
        explanation: '1. Net percentage change = a + b + (ab / 100) = (+40) + (-25) + [(40 * -25) / 100] = 15 - 10 = +5%.\n2. Since the result is positive, it represents a net profit of 5%.',
        trapExplanation: 'Subtracting 40% - 25% = 15% ignores that the discount is applied to the marked price (140), not the cost price (100).',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-QUANT-08',
    slug: 'simple-interest-compound-interest-and-difference-models',
    title: 'Simple Interest, Compound Interest & Multi-Year Difference Invariants',
    shortDefinition: 'Interest dynamics: Simple Interest (SI), Compound Interest (CI), semi-annual compounding, the master 2-year and 3-year CI-SI difference formulas, and annual loan installment models.',
    difficulty: 'INTERMEDIATE',
    order: 8,
    topicSlug: 'arithmetic-and-financial-mathematics',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Time Value of Capital: Simple vs Compound Growth',
        body: `Interest models in banking examinations evaluate two distinct growth mechanisms:
1. **Simple Interest (SI):** Linear arithmetic growth. Interest is calculated strictly on the initial Principal ($P$) and remains **identical in every time period**.
2. **Compound Interest (CI):** Exponential geometric growth. Interest earned in previous periods is added to the principal, generating **"interest on interest"**.

Understanding the exact **Multi-Year $\text{CI} - \text{SI}$ Difference Invariants** enables solving complex banking interest questions in under 15 seconds.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'SI/CI Formulations & Multi-Year Difference Invariants',
        body: `### 1. Simple Interest Formulation
- $\text{SI} = \frac{P \times R \times T}{100}$
- Total Amount $A = P + \text{SI} = P\left(1 + \frac{RT}{100}\right)$
- *Annual Rate Invariant:* A sum doubles itself in $T$ years under SI when $R \times T = 100 \implies R = \frac{100}{T}\%$.

---

### 2. Compound Interest Formulation
- Amount $A = P\left(1 + \frac{R}{100}\right)^T$
- $\text{CI} = A - P = P\left[\left(1 + \frac{R}{100}\right)^T - 1\right]$
- **Compounding Frequency Variations:**
  - *Compounded Half-Yearly (Semi-Annually):* Rate becomes $\frac{R}{2}\%$, Time periods become $2T \implies A = P\left(1 + \frac{R/2}{100}\right)^{2T}$.
  - *Compounded Quarterly:* Rate becomes $\frac{R}{4}\%$, Time periods become $4T \implies A = P\left(1 + \frac{R/4}{100}\right)^{4T}$.

---

### 3. Master Multi-Year $\text{CI} - \text{SI}$ Difference Formulas
For Principal $P$, annual rate $R\%$, compounded annually:

1. **2-Year Difference Formula:**
   $$\text{Diff}_2 = \text{CI}_2 - \text{SI}_2 = P\left(\frac{R}{100}\right)^2$$
2. **3-Year Difference Formula:**
   $$\text{Diff}_3 = \text{CI}_3 - \text{SI}_3 = P\left(\frac{R}{100}\right)^2 \left(\frac{300 + R}{100}\right) = \text{Diff}_2 \times \left(3 + \frac{R}{100}\right)$$
3. **Ratio of 3-Year to 2-Year Difference:**
   $$\frac{\text{Diff}_3}{\text{Diff}_2} = \frac{300 + R}{100} = 3 + \frac{R}{100}$$

---

### 4. Equal Annual Installments under CI
If a loan of principal $P$ is repaid in $n$ equal annual installments of ₹$x$ at $R\%$ CI per annum:
$$P = \frac{x}{\left(1 + \frac{R}{100}\right)} + \frac{x}{\left(1 + \frac{R}{100}\right)^2} + \dots + \frac{x}{\left(1 + \frac{R}{100}\right)^n}$$`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: '3-Tier Worked Problem: 2-Year CI-SI Difference & Principal Determination',
        body: `### 3-Tier Worked Problem
**Problem:** The difference between Compound Interest and Simple Interest on a certain sum of money for $2$ years at $8\%$ per annum compounded annually is ₹$64$. Find the principal sum.

- **Tier 1 (First Principles / Algebraic Expansion):**
  1. Let Principal $= P$.
  2. $\text{SI}_2 = \frac{P \times 8 \times 2}{100} = 0.16P$.
  3. $\text{CI}_2 = P(1 + 0.08)^2 - P = P(1.1664) - P = 0.1664P$.
  4. $\text{Diff} = 0.1664P - 0.16P = 0.0064P$.
  5. Given $0.0064P = 64 \implies P = \frac{64}{0.0064} = \mathbf{₹10,000}$.
- **Tier 2 (Banking Standard / Difference Formula):**
  $$\text{Diff}_2 = P\left(\frac{R}{100}\right)^2 \implies 64 = P\left(\frac{8}{100}\right)^2 = P\left(\frac{64}{10,000}\right) \implies P = \mathbf{₹10,000}$$
- **Tier 3 (10-Second Mental Elimination):** $8\%$ on $8\%$ is $0.64\%$. $0.64\% \text{ of } P = 64 \implies 1\% \text{ of } P = 100 \implies P = \mathbf{₹10,000}$.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-08-01',
        statement: 'Compound and simple interest differentials follow strict invariants: 2-year difference equals P(R/100)^2, 3-year difference equals P(R/100)^2 * (300+R)/100, and ratio Diff3/Diff2 equals (300+R)/100.',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_TRUTH',
        confidence: 'VERY_HIGH',
        locator: 'Banking Mathematics & Quantitative Command Center',
        excerpt: '2-year CI-SI gap is P(R/100)^2 and 3-year gap is Diff2 * (3 + R/100).',
      },
    ],
    examMappings: [
      {
        examCode: 'sbi-po',
        syllabusUnit: 'Prelims & Mains: Simple & Compound Interest Models',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'QUANTITATIVE_MASTERY',
        notes: 'Semi-annual compounding and 3-year difference ratios.',
      },
      {
        examCode: 'ibps-po',
        syllabusUnit: 'Prelims: CI & SI Word Problems',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'QUANTITATIVE_MASTERY',
        notes: 'Direct 2-year and 3-year difference applications.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'SI = PTR/100 | CI = P(1+R/100)^T - P | 2-Yr Diff: Diff2 = P(R/100)^2 | 3-Yr Diff: Diff3 = P(R/100)^2 * (300+R)/100 | Ratio: Diff3 / Diff2 = (300 + R)/100 | Half-Yearly: Rate = R/2, Time = 2T | Installments: P = sum[ x / (1+R/100)^n ].',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'The difference between Compound Interest and Simple Interest on a certain sum of money for 2 years at 8% per annum compounded annually is ₹64. What is the principal sum?',
        options: ['₹10,000', '₹8,000', '₹12,000', '₹15,000'],
        correctAnswer: '₹10,000',
        explanation: '1. Apply the 2-Year CI-SI Difference formula: Diff = P * (R / 100)^2.\n2. 64 = P * (8 / 100)^2 = P * (64 / 10,000).\n3. P = (64 * 10,000) / 64 = ₹10,000.',
        trapExplanation: 'Using the 3-year formula or calculating linear SI without the (R/100)^2 factor produces incorrect scales.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-QUANT-09',
    slug: 'mixture-successive-dilution-and-alligation-frameworks',
    title: 'Mixture, Successive Dilution & Alligation Frameworks',
    shortDefinition: 'Fluid mixing and mean value mechanics: the rule of alligation cross-diagram, successive dilution formula V(1-x/V)^n, and multi-vessel ratio combination invariants.',
    difficulty: 'INTERMEDIATE',
    order: 9,
    topicSlug: 'arithmetic-and-financial-mathematics',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Principle of Weighted Concentration: Alligation & Dilution',
        body: `Mixture & Alligation is a universal mathematical tool used to find the ratio in which two or more ingredients of known concentrations/prices must be blended to produce a mixture of a desired mean concentration/price.

Two core models dominate banking exams:
1. **The Rule of Alligation:** Graphical cross-subtraction determining the ratio of weights: $\frac{Q_{\text{cheaper}}}{Q_{\text{dearer}}} = \frac{d - m}{m - c}$.
2. **Successive Dilution / Replacement Invariant:** When a fraction of liquid is repeatedly drawn from a vessel and replaced with a diluent (e.g. water), the concentration of original liquid decays geometrically: $Q_{\text{final}} = V\left(1 - \frac{x}{V}\right)^n$.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'The Alligation Diagram & Successive Dilution Theorems',
        body: `### 1. The Rule of Alligation Cross-Diagram
Let $c$ be the unit value/concentration of the Cheaper ingredient, $d$ be the Dearer ingredient, and $m$ be the Mean value:

$$\\begin{array}{ccc}
\\text{Cheaper Rate } (c) & & \\text{Dearer Rate } (d) \\\\
& \\searrow \\quad \\swarrow & \\\\
& \\text{Mean Rate } (m) & \\\\
& \\swarrow \\quad \\searrow & \\\\
(d - m) & & (m - c)
\\end{array}$$

$$\\frac{\\text{Quantity of Cheaper}}{\\text{Quantity of Dearer}} = \\frac{d - m}{m - c}$$

---

### 2. The Universal Successive Dilution / Replacement Formula
If a container initially holds $V$ litres of pure liquid (e.g. pure milk/alcohol), and $x$ litres are withdrawn and replaced with pure water, and this entire operation is repeated $n$ times in total:
$$\\text{Final Quantity of Pure Liquid Left} = V\\left(1 - \\frac{x}{V}\\right)^n$$
$$\\text{Ratio of Pure Liquid to Total Mixture} = \\left(1 - \\frac{x}{V}\\right)^n$$
$$\\text{Quantity of Water in Final Mixture} = V - Q_{\\text{final}} = V\\left[1 - \\left(1 - \\frac{x}{V}\\right)^n\\right]$$

---

### 3. Combining Multi-Vessel Mixtures of Unequal Capacities
When mixing $k$ vessels of capacities $C_1, C_2, \\dots$ containing liquid ratios $a_1:b_1, a_2:b_2, \\dots$:
$$\\text{Total Liquid } A = \\sum C_i \\left(\\frac{a_i}{a_i + b_i}\\right); \\quad \\text{Total Liquid } B = \\sum C_i \\left(\\frac{b_i}{a_i + b_i}\\right)$$`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: '3-Tier Worked Problem: Repeated Replacement Dilution',
        body: `### 3-Tier Worked Problem
**Problem:** A container contains $80$ litres of pure milk. $8$ litres of milk are withdrawn from this container and replaced with water. This process is repeated a second time (total $2$ replacements). Find the final quantity of milk remaining in the container.

- **Tier 1 (First Principles / Cycle-by-Cycle Accounting):**
  1. *Cycle 1:*
     - Milk removed $= 8\text{ L}$. Remaining milk $= 80 - 8 = 72\text{ L}$.
     - Water added $= 8\text{ L}$. Total volume $= 80\text{ L}$.
     - Milk concentration $= \frac{72}{80} = \frac{9}{10} = 90\%$.
  2. *Cycle 2:*
     - $8\text{ L}$ of mixture is withdrawn $\implies$ Milk removed $= 8 \times \frac{9}{10} = 7.2\text{ L}$.
     - Milk remaining $= 72 - 7.2 = \mathbf{64.8\text{ L}}$.
     - Water in vessel $= 80 - 64.8 = 15.2\text{ L}$.
- **Tier 2 (Banking Standard / Successive Dilution Formula):**
  $$Q_{\text{final}} = V\left(1 - \frac{x}{V}\right)^n = 80\left(1 - \frac{8}{80}\right)^2 = 80\left(1 - \frac{1}{10}\right)^2 = 80\left(\frac{9}{10}\right)^2 = 80 \times \frac{81}{100} = \mathbf{64.8\text{ L}}$$
- **Tier 3 (10-Second Mental Elimination):** $8/80 = 10\%$ reduction. Cycle 1: $80 - 8 = 72$. Cycle 2: $72 - 10\%(72) = 72 - 7.2 = \mathbf{64.8\text{ L}}$.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-09-01',
        statement: 'Mixtures follow alligation cross-ratios ((d-m)/(m-c)), and repeated dilution decays original pure substance by V*(1 - x/V)^n where V is total capacity, x is replacement volume, and n is number of cycles.',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_TRUTH',
        confidence: 'VERY_HIGH',
        locator: 'Commercial Arithmetic Standards & Quantitative Command Center',
        excerpt: 'Successive replacement formula Q = V(1 - x/V)^n calculates remaining pure liquid after n replacement cycles.',
      },
    ],
    examMappings: [
      {
        examCode: 'sbi-po',
        syllabusUnit: 'Prelims & Mains: Mixture, Dilution & Alligation',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'ANALYTICAL_RIGOR',
        notes: 'High-frequency in Arithmetic DI and Mains caselets.',
      },
      {
        examCode: 'ibps-po',
        syllabusUnit: 'Prelims: Mixtures & Alligations',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'ANALYTICAL_RIGOR',
        notes: 'Repeated replacement problems and profit-alligation links.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Alligation: Cheaper/Dearer = (Dearer - Mean) / (Mean - Cheaper) | Successive Dilution: Q_final = V * (1 - x/V)^n | Liquid left ratio = (1 - x/V)^n | Water added = V - Q_final | Cross-check: Successive percentage decay matches formula.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'A vessel contains 80 litres of pure milk. 8 litres of milk are removed and replaced with water. This process is repeated once more (2 times in total). What is the final quantity of milk left in the vessel?',
        options: ['64.8 litres', '64.0 litres', '66.2 litres', '62.5 litres'],
        correctAnswer: '64.8 litres',
        explanation: '1. Apply successive dilution formula: Q = V * (1 - x / V)^n.\n2. Q = 80 * (1 - 8/80)^2 = 80 * (9/10)^2 = 80 * 0.81 = 64.8 litres.\n3. The vessel contains 64.8 litres of milk (and 15.2 litres of water).',
        trapExplanation: 'Subtracting 8 + 8 = 16 litres to get 64.0 litres forgets that in the second withdrawal, the 8 litres drawn is a mixture containing both milk and water.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-QUANT-10',
    slug: 'time-work-pipes-cisterns-work-wages-and-alternate-day-efficiency-models',
    title: 'Time & Work, Pipes, Cisterns, Work-Wages & Alternate Day Efficiency Models',
    shortDefinition: 'Unitary work and flow dynamics: the LCM work model, efficiency ratios, multi-person leaving/joining schedules, alternate-day cycle mechanics, negative draining leaks, and the alternate hour filling trap.',
    difficulty: 'INTERMEDIATE',
    order: 10,
    topicSlug: 'arithmetic-and-financial-mathematics',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Work-Efficiency Architecture: LCM Unitary Method',
        body: `Time & Work and Pipes & Cisterns represent the most mathematically reliable problem family in Banking examinations.

Rather than working with cumbersome fractions ($\frac{1}{a} + \frac{1}{b}$), the modern competitive method converts all problems into **Discrete Work Units** by setting:
$$\text{Total Work } (W) = \text{LCM}(t_1, t_2, \dots, t_n)$$
$$\text{Individual Efficiency } (E) = \frac{\text{Total Work Units}}{\text{Time Taken } (T)} \implies E \propto \frac{1}{T}$$
Work Done $= \text{Efficiency} \times \text{Time}$.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'LCM Work Models, Chain Rule & Alternate Working Cycles',
        body: `### 1. The LCM Unit Method & Efficiency Ratios
- If $A$ completes work in $20$ days and $B$ in $30$ days:
  - $\text{Total Work} = \text{LCM}(20, 30) = \mathbf{60\text{ units}}$.
  - Efficiency of $A$: $E_A = \frac{60}{20} = +3\text{ units/day}$.
  - Efficiency of $B$: $E_B = \frac{60}{30} = +2\text{ units/day}$.
  - Combined Efficiency: $E_{A+B} = 3 + 2 = +5\text{ units/day}$.
  - Time Together: $T = \frac{60}{5} = \mathbf{12\text{ days}}$.

---

### 2. The Chain Rule & Group Efficiency Equivalence
$$\frac{M_1 \times D_1 \times H_1 \times E_1}{W_1} = \frac{M_2 \times D_2 \times H_2 \times E_2}{W_2}$$
- **Men-Women-Children Equivalence:** If $a\text{ Men} = b\text{ Women} = c\text{ Boys}$, let total daily work rate $= \text{LCM}(a, b, c)$ to determine integer efficiency values for 1 Man, 1 Woman, and 1 Boy.
- **Wages Distribution Law:** Total wage payment is distributed strictly in proportion to **Total Work Units Done by Each Person** ($E_i \times T_i$), NOT mere time spent on the job.

---

### 3. Alternate Working Days / Hours Protocol
When workers operate on alternate days (e.g. $A$ on Day 1, $B$ on Day 2, $A$ on Day 3...):
1. **Define the Base Cycle:** 1 full cycle $= 2\text{ days}$; Work in 1 cycle $= E_A + E_B$.
2. **Compute Integer Cycles:** $\text{Number of full cycles } k = \lfloor \frac{\text{Total Work}}{E_A + E_B} \rfloor$.
3. **Calculate Remaining Work:** $\text{Work Left} = \text{Total Work} - k(E_A + E_B)$.
4. **Fractional Final Day:** Assign remaining work to the scheduled worker whose turn it is: $\text{Time} = \frac{\text{Work Left}}{E_{\text{turn}}}$.

---

### 4. Pipes & Cisterns Invariants & The Negative Leak Trap
- Inlets possess **positive efficiency ($+E$)**; Draining outlets possess **negative efficiency ($-E$)**.
- **The Alternate Hour Filling Trap:** When an inlet pipe and a leak operate on alternate hours:
  > [!IMPORTANT]
  > Calculate cycle progress ONLY UP TO $(\text{Total Capacity} - \text{Inlet Capacity})$.
  > The tank becomes completely full during the positive inlet's turn before the draining leak operates, preventing overflow!`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: '3-Tier Worked Problem: Worker Leaving Midway in Time & Work',
        body: `### 3-Tier Worked Problem
**Problem:** A can complete a piece of work in $20$ days and B can complete it in $30$ days. They start working together, but B leaves after $6$ days. In how many more days will A alone complete the remaining work, and what is the total time taken?

- **Tier 1 (First Principles / Fractional Balance):**
  1. $A$'s 1-day work $= \frac{1}{20}$; $B$'s 1-day work $= \frac{1}{30}$.
  2. In first 6 days, work done by $A+B = 6 \times \left(\frac{1}{20} + \frac{1}{30}\right) = 6 \times \frac{5}{60} = \frac{30}{60} = \frac{1}{2}$ of total work.
  3. Remaining work $= 1 - \frac{1}{2} = \frac{1}{2}$.
  4. Time taken by $A$ alone $= \frac{1/2}{1/20} = \frac{20}{2} = \mathbf{10\text{ days}}$.
  5. Total time taken $= 6 + 10 = \mathbf{16\text{ days}}$.
- **Tier 2 (Banking Standard / LCM Unit Method):**
  - Total Work $= \text{LCM}(20, 30) = 60\text{ units}$.
  - $E_A = 3\text{ u/day}, E_B = 2\text{ u/day}$.
  - Work done in first 6 days $= 6 \times (3 + 2) = 30\text{ units}$.
  - Remaining Work $= 60 - 30 = 30\text{ units}$.
  - $A$'s extra time $= \frac{30}{3} = \mathbf{10\text{ days}}$.
  - Total Time $= 6 + 10 = \mathbf{16\text{ days}}$.
- **Tier 3 (10-Second Mental Elimination):** $A$ works all $T$ days, $B$ works 6 days. $3T + 2(6) = 60 \implies 3T = 48 \implies T = 16\text{ days}$. Extra days $= 16 - 6 = 10\text{ days}$.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-10-01',
        statement: 'Time and work problems are solved via LCM discrete work units (W = E*T), chain rule (M1D1H1E1/W1 = M2D2H2E2/W2), and cycle-decomposition for alternate working schedules.',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_TRUTH',
        confidence: 'VERY_HIGH',
        locator: 'Banking Quantitative Faculty Standards & Time-Work Masterclass',
        excerpt: 'LCM discrete units replace fractions, and wages distribute proportionally to total work units completed.',
      },
    ],
    examMappings: [
      {
        examCode: 'sbi-po',
        syllabusUnit: 'Prelims & Mains: Time & Work, Pipes & Alternate Days',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'EFFICIENCY_MODELING',
        notes: 'Alternate days, variable leaks, and wage distribution.',
      },
      {
        examCode: 'ibps-po',
        syllabusUnit: 'Prelims & Mains: Time & Work and Pipes & Cisterns',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'EFFICIENCY_MODELING',
        notes: 'High-yield arithmetic section.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Total Work = LCM(times) | Efficiency E = Work / Time | Together: Time = W / (E_A + E_B) | Chain Rule: M1 D1 H1 E1 / W1 = M2 D2 H2 E2 / W2 | Alternate days: solve integer cycles first, then fractional day | Pipes: Leaks have negative efficiency | Alternate hour leak trap: calculate up to (Capacity - Inlet).',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'A can complete a work in 20 days and B can complete it in 30 days. They start together, but B leaves after 6 days. In how many more days will A alone finish the remaining work?',
        options: ['10 days', '12 days', '8 days', '14 days'],
        correctAnswer: '10 days',
        explanation: '1. Let Total Work = LCM(20, 30) = 60 units.\n2. Efficiency of A = 60/20 = 3 units/day; Efficiency of B = 60/30 = 2 units/day.\n3. In the first 6 days, work completed = 6 * (3 + 2) = 30 units.\n4. Remaining work = 60 - 30 = 30 units.\n5. Additional days required by A alone = 30 / 3 = 10 days.',
        trapExplanation: '10 days is the additional time required by A. If the question asked for total project time, it would be 6 + 10 = 16 days.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-QUANT-11',
    slug: 'time-speed-distance-trains-boats-streams-and-escalators',
    title: 'Time, Speed & Distance, Relative Velocity, Trains, Boats & Moving Escalators',
    shortDefinition: 'Kinematic arithmetic models: speed unit conversions (km/h to m/s), harmonic mean average speed, relative speed in same vs opposite directions, train platform crossing, boat-stream equations, moving escalators, and circular track meeting points.',
    difficulty: 'ADVANCED',
    order: 11,
    topicSlug: 'arithmetic-and-financial-mathematics',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Motion Dynamics Architecture',
        body: `Time, Speed & Distance (TSD) governs all motion problems in banking examinations.

Key structural principles include:
1. **Unit Consistency:** Always convert units before calculating ($\text{km/h} \times \frac{5}{18} = \text{m/s}$; $\text{m/s} \times \frac{18}{5} = \text{km/h}$).
2. **Harmonic Average Speed:** When covering equal distances at speeds $x$ and $y$, the average speed is NOT $\frac{x+y}{2}$, but the **Harmonic Mean**: $S_{\text{avg}} = \frac{2xy}{x+y}$.
3. **Relative Velocity:** Moving bodies in opposite directions add speeds ($S_1 + S_2$); moving in the same direction subtract speeds ($|S_1 - S_2|$).`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Train Dynamics, Boat-Stream Equations, Escalators & Circular Tracks',
        body: `### 1. Train Crossing Invariants
- **Crossing a Point Object (Pole, Standing Person, Tree):** Distance traveled equals the **Length of the Train ($L_{\text{train}}$)**:
  $$\text{Time} = \frac{L_{\text{train}}}{\text{Speed}}$$
- **Crossing an Extended Object (Platform, Bridge, Tunnel, another Train):** Distance traveled equals the **Sum of Lengths ($L_{\text{train}} + L_{\text{platform}}$)**:
  $$\text{Time} = \frac{L_{\text{train}} + L_{\text{platform}}}{\text{Relative Speed}}$$

---

### 2. Boats & Streams Formulations
Let $u$ be the speed of the boat in still water, and $v$ be the speed of the water stream/current:
- **Downstream Speed ($S_d$):** $S_d = u + v$ (with current).
- **Upstream Speed ($S_u$):** $S_u = u - v$ (against current).
- **Fundamental Resolving Formulas:**
  $$\text{Speed of Boat in Still Water } (u) = \frac{S_d + S_u}{2}$$
  $$\text{Speed of Stream / Current } (v) = \frac{S_d - S_u}{2}$$

---

### 3. Moving Walkways & Escalators
Let $N$ be the total visible steps, $v_p$ be person's walking rate (steps/sec), and $v_e$ be escalator speed:
- **Walking WITH Escalator Movement (Same Direction):**
  $$\text{Total Steps } S = N_{\text{walked}} \times \left(1 + \frac{v_e}{v_p}\right)$$
- **Walking AGAINST Escalator Movement (Opposite Direction):**
  $$\text{Total Steps } S = N_{\text{walked}} \times \left(1 - \frac{v_e}{v_p}\right)$$

---

### 4. Races & Circular Track Meeting Points
Let two runners $A$ and $B$ run on a circular track of length $L$ with speed ratio $\frac{S_A}{S_B} = \frac{a}{b}$ in simplest coprime terms ($\gcd(a, b) = 1$):
1. **Time for First Meeting Anywhere on Track:**
   - Opposite Directions: $T_1 = \frac{L}{S_A + S_B}$
   - Same Direction: $T_1 = \frac{L}{|S_A - S_B|}$
2. **Number of Distinct Meeting Points on Track:**
   - **Opposite Directions:** $\mathbf{a + b}$ distinct points.
   - **Same Direction:** $\mathbf{|a - b|}$ distinct points.
3. **Time to Meet at the Exact Starting Point for First Time:**
   $$T_{\text{start}} = \text{LCM}\left(\frac{L}{S_A}, \frac{L}{S_B}\right)$$`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: '3-Tier Worked Problem: Circular Track Relative Speed & Meeting Points',
        body: `### 3-Tier Worked Problem (RBI Grade B / SBI PO Mains Benchmark)
**Problem:** Two runners A and B start simultaneously from the same point on a circular track of length $1,200\text{ m}$. A runs clockwise at $15\text{ m/s}$ and B runs counter-clockwise at $25\text{ m/s}$. Find:
1. Time for their first meeting anywhere on track.
2. Number of distinct meeting points on the track.
3. Time taken to meet at the starting point for the first time.

- **Tier 1 (First Principles):**
  1. *First Meeting:* Running in opposite directions $\implies$ Relative Speed $= 15 + 25 = 40\text{ m/s}$.
     $$T_1 = \frac{\text{Track Length}}{\text{Relative Speed}} = \frac{1,200}{40} = \mathbf{30\text{ seconds}}$$
  2. *Starting Point Meeting:*
     - A completes 1 lap in: $\frac{1200}{15} = 80\text{ s}$.
     - B completes 1 lap in: $\frac{1200}{25} = 48\text{ s}$.
     - First meeting at starting point $= \text{LCM}(80, 48) = \mathbf{240\text{ seconds}}$.
  3. *Distinct Meeting Points:*
     $$\text{Distinct Points} = \frac{T_{\text{start}}}{T_1} = \frac{240}{30} = \mathbf{8\text{ distinct points}}$$
- **Tier 2 (Banking Standard / Coprime Formula):**
  - Speed ratio $= 15 : 25 = 3 : 5$ (coprime $a=3, b=5$).
  - Running in opposite directions $\implies \text{Distinct Points} = a + b = 3 + 5 = \mathbf{8\text{ points}}$.
- **Tier 3 (10-Second Mental Heuristic):** $T_1 = 1200/40 = 30\text{s}$; Ratio $3:5 \implies 3+5 = 8$ points; $\text{LCM}(80, 48) = 240\text{s}$.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-11-01',
        statement: 'Kinematic models in banking exams operate on harmonic average speed (2xy/(x+y)), relative speed directionality, boat-stream resolving formulas (u = (Sd+Su)/2, v = (Sd-Su)/2), and circular track distinct meeting points (a+b opposite, |a-b| same).',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_TRUTH',
        confidence: 'VERY_HIGH',
        locator: 'Banking Quantitative Command Center & Mechanics Reference',
        excerpt: 'Distinct meeting points on circular track equal a+b (opposite) and |a-b| (same) for coprime speed ratio a:b.',
      },
    ],
    examMappings: [
      {
        examCode: 'sbi-po',
        syllabusUnit: 'Prelims & Mains: Time, Speed, Distance, Boats & Circular Tracks',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'ADVANCED_KINEMATICS',
        notes: 'High-difficulty circular track and moving escalator problems in Mains.',
      },
      {
        examCode: 'ibps-po',
        syllabusUnit: 'Prelims & Mains: TSD, Trains & Boats',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'ADVANCED_KINEMATICS',
        notes: 'Train crossing platform and boat-stream speed ratio models.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Unit: km/h x 5/18 = m/s | Avg Speed = 2xy/(x+y) (equal distances) | Relative Speed: Opposite = S1 + S2; Same = |S1 - S2| | Trains: Platform crossing = L_t + L_p | Boats: Boat u = (Sd + Su)/2; Stream v = (Sd - Su)/2 | Circular Track: First meeting = L/(S1+S2) | Distinct points = a+b (opposite), |a-b| (same) | Start point = LCM(L/S1, L/S2).',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Two runners A and B start simultaneously from the same point on a 1,200m circular track running in opposite directions at 15 m/s and 25 m/s respectively. How many distinct meeting points exist on the track?',
        options: ['8 points', '2 points', '5 points', '10 points'],
        correctAnswer: '8 points',
        explanation: '1. Reduce the speeds to the simplest coprime ratio: 15 : 25 = 3 : 5 (where a = 3, b = 5, gcd(3, 5) = 1).\n2. When two runners move in OPPOSITE directions on a circular track, the number of distinct meeting points is given by a + b.\n3. Distinct Meeting Points = 3 + 5 = 8 points.',
        trapExplanation: 'If they were running in the SAME direction, the distinct meeting points would be |a - b| = |3 - 5| = 2 points. For opposite directions, it is a + b = 8.',
        difficulty: 'MEDIUM',
      },
    ],
  },

  // =========================================================================
  // TOPIC 83: Mensuration & Geometric Invariants
  // =========================================================================
  {
    id: 'CON-QUANT-12',
    slug: '2d-mensuration-plane-figures-inscribed-systems-pathways-and-invariants',
    title: '2D Mensuration: Plane Figures, Inscribed Systems & Pathway Invariants',
    shortDefinition: 'Plane geometry formulations: the isoperimetric area optimization theorem, inradius and circumradius invariants across right, equilateral, and scalene triangles, 2D pathway formulas, and concentric ring areas.',
    difficulty: 'INTERMEDIATE',
    order: 12,
    topicSlug: 'mensuration-and-geometric-invariants',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Plane Geometry Invariants & Optimization Principles',
        body: `2D Mensuration in banking examinations focuses on **Area, Perimeter, Inscribed/Circumscribed Circles, and Pathway Deductions**.

Core geometric invariants include:
1. **Isoperimetric Optimization Theorem:** For any fixed perimeter $P$, the geometric figure enclosing the **Maximum Area is ALWAYS a Circle**. Among 4-sided figures of fixed perimeter, a **Square maximizes area**.
2. **Inradius ($r$) & Circumradius ($R$) Invariants:** The exact ratio of radii in an equilateral triangle is strictly $R : r = 2 : 1$, and their area ratio is $\text{Area}_{\text{Circumcircle}} : \text{Area}_{\text{Incircle}} = 4 : 1$.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Plane Figures Matrix, Inradius Formulas & Pathway Equations',
        body: `### 1. Master 2D Geometry & Plane Figures Table

| Plane Figure | Area Formula | Perimeter / Diagonal | Special Invariants |
| :--- | :--- | :--- | :--- |
| **Square (side $a$)** | $A = a^2 = \frac{1}{2}d^2$ | $P = 4a$ | Diagonal $d = a\sqrt{2}$; Inradius $r = a/2$; Circumradius $R = a/\sqrt{2}$ |
| **Rectangle ($l, b$)** | $A = l \times b$ | $P = 2(l + b)$ | Diagonal $d = \sqrt{l^2 + b^2}$ |
| **Equilateral Triangle ($a$)** | $A = \frac{\sqrt{3}}{4}a^2$ | $P = 3a$ | Height $h = \frac{\sqrt{3}}{2}a$; Inradius $r = \frac{a}{2\sqrt{3}}$; Circumradius $R = \frac{a}{\sqrt{3}}$ |
| **Right-Angled Triangle ($a, b, c$)** | $A = \frac{1}{2}ab$ | $P = a + b + c$ | Inradius $r = \frac{a + b - c}{2}$; Circumradius $R = \frac{c}{2}$ (hypotenuse midpoint) |
| **Scalene Triangle ($a, b, c$)** | $A = \sqrt{s(s-a)(s-b)(s-c)}$ | $s = \frac{a+b+c}{2}$ | Inradius $r = \frac{\Delta}{s}$; Circumradius $R = \frac{abc}{4\Delta}$ |
| **Rhombus (diagonals $d_1, d_2$)** | $A = \frac{1}{2}d_1 d_2 = a \cdot h$ | $P = 4a$ | Diagonals bisect at $90^\circ$; Side $a = \frac{1}{2}\sqrt{d_1^2 + d_2^2}$ |
| **Trapezium (parallel $a, b$, height $h$)** | $A = \frac{1}{2}(a + b)h$ | Sum of 4 sides | Median $= \frac{1}{2}(a + b)$ |
| **Circle & Ring (radii $R, r$)** | $A = \pi r^2$ | $C = 2\pi r$ | Area of Ring $= \pi(R^2 - r^2)$; Sector Area $= \frac{\theta}{360}\pi r^2$ |

---

### 2. The Three Universal Pathway Area Formulas
For a rectangular field of length $l$ and breadth $b$ with a pathway of uniform width $w$:
1. **Internal Pathway (Inside Field):**
   $$\text{Area}_{\text{internal}} = 2w(l + b - 2w)$$
2. **External Pathway (Outside Field):**
   $$\text{Area}_{\text{external}} = 2w(l + b + 2w)$$
3. **Crossroad Pathway (Two Central Crossroads Intersecting at $90^\circ$):**
   $$\text{Area}_{\text{crossroad}} = w(l + b - w)$$
   *(Note: Subtract $w^2$ once to prevent double-counting the central intersection square!)*`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: '3-Tier Worked Problem: Inscribed Circle in Right-Angled Triangle',
        body: `### 3-Tier Worked Problem
**Problem:** A right-angled triangle has perpendicular sides of length $15\text{ cm}$ and $20\text{ cm}$. Find the radius and area of the inscribed circle.

- **Tier 1 (First Principles / Semi-Perimeter Method):**
  1. Hypotenuse $c = \sqrt{15^2 + 20^2} = \sqrt{225 + 400} = \sqrt{625} = 25\text{ cm}$.
  2. Semi-perimeter $s = \frac{15 + 20 + 25}{2} = \frac{60}{2} = 30\text{ cm}$.
  3. Triangle Area $\Delta = \frac{1}{2} \times 15 \times 20 = 150\text{ cm}^2$.
  4. Inradius $r = \frac{\Delta}{s} = \frac{150}{30} = \mathbf{5\text{ cm}}$.
  5. Inscribed Circle Area $= \pi r^2 = \pi (5)^2 = 25\pi \approx \mathbf{78.57\text{ cm}^2}$.
- **Tier 2 (Banking Standard / Right Triangle Inradius Shortcut):**
  $$r = \frac{a + b - c}{2} = \frac{15 + 20 - 25}{2} = \frac{10}{2} = \mathbf{5\text{ cm}}$$
  $$\text{Area} = 25\pi \approx 78.57\text{ cm}^2$$
- **Tier 3 (10-Second Mental Triple):** Recognize the $3\text{-}4\text{-}5$ Pythagorean triple scaled by $5$. In base $3\text{-}4\text{-}5$ triangle, $r_0 = \frac{3+4-5}{2} = 1$. Scaled inradius $= 1 \times 5 = \mathbf{5\text{ cm}}$ instantly.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-12-01',
        statement: '2D mensuration invariants dictate that for right triangles r = (a+b-c)/2, for equilateral triangles R:r = 2:1, internal pathways equal 2w(l+b-2w), and circular crossroad area equals w(l+b-w).',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_TRUTH',
        confidence: 'VERY_HIGH',
        locator: 'Euclidean Plane Geometry & Banking Quant Hub',
        excerpt: 'Right-triangle inradius is (a+b-c)/2 and crossroad path area is w(l+b-w).',
      },
    ],
    examMappings: [
      {
        examCode: 'sbi-po',
        syllabusUnit: 'Prelims & Mains: 2D Mensuration & Area Theorems',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'GEOMETRIC_INVARIANTS',
        notes: 'Inscribed circle radius and crossroad path calculations.',
      },
      {
        examCode: 'ibps-po',
        syllabusUnit: 'Prelims: Mensuration 2D',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: 'GEOMETRIC_INVARIANTS',
        notes: 'Pathways, rectangles, and triangle area invariants.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Right Triangle: r = (a+b-c)/2, R = c/2 | Equilateral: r = a/(2sqrt3), R = a/sqrt3, R:r = 2:1, Area Ratio = 4:1 | Scalene: r = Delta/s, R = abc/(4Delta) | Pathways: Internal = 2w(l+b-2w); External = 2w(l+b+2w); Crossroad = w(l+b-w) | Isoperimetric: Circle maximizes area for fixed perimeter.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'A right-angled triangle has perpendicular sides of length 15 cm and 20 cm. What is the radius of the circle inscribed inside this triangle?',
        options: ['5 cm', '6 cm', '4.5 cm', '7.5 cm'],
        correctAnswer: '5 cm',
        explanation: '1. Hypotenuse c = sqrt(15^2 + 20^2) = sqrt(225 + 400) = 25 cm.\n2. Apply the right-triangle inradius formula: r = (a + b - c) / 2.\n3. r = (15 + 20 - 25) / 2 = 10 / 2 = 5 cm.',
        trapExplanation: 'Using R = c/2 = 25/2 = 12.5 cm gives the circumradius, not the inradius.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-QUANT-13',
    slug: '3d-solid-mensuration-frustums-cavities-and-scaling-invariants',
    title: '3D Solid Mensuration: Volumes, Surface Areas, Frustums & Scaling Invariants',
    shortDefinition: 'Solid geometry: formulas for 3D solids (cylinder, cone, sphere, hemisphere), volume conservation in melting/recasting, cutting plane surface area increases, frustums, cavity drilling vs surmounting, and dimensional scaling multipliers (k^1, k^2, k^3).',
    difficulty: 'ADVANCED',
    order: 13,
    topicSlug: 'mensuration-and-geometric-invariants',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: '3D Topology & Conservation Invariants',
        body: `3D Solid Mensuration evaluates **Volume, Curved Surface Area (CSA / LSA), Total Surface Area (TSA), and Geometric Transformations**.

Three foundational theorems govern 3D problems in Banking Mains:
1. **Volume Conservation in Melting/Recasting:** Melting one or more solids into new shapes **STRICTLY CONSERVES TOTAL VOLUME** ($\sum V_{\text{initial}} = \sum V_{\text{final}}$), but **Total Surface Area (TSA) ALWAYS CHANGES**.
2. **Cutting Invariant:** Slicing a 3D solid across a plane leaves Volume unchanged, but **increases Total Surface Area by twice the cut cross-sectional area** ($\Delta\text{TSA} = +2A_{\text{cut}}$).
3. **Dimensional Scaling Multiplier:** Multiplying all linear dimensions by scale factor $k$ scales:
   - Linear parameters (radius, height, diagonal) by $k^1$.
   - Surface Area parameters (CSA, TSA, base area) by $k^2$.
   - Volume parameters by $k^3$.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: '3D Solids Matrix, Frustum Formulas & Cavity Drilling',
        body: `### 1. Master 3D Solid Geometry Formulation

| 3D Solid | Curved / Lateral Area (CSA) | Total Surface Area (TSA) | Volume ($V$) | Special Invariants |
| :--- | :--- | :--- | :--- | :--- |
| **Cube (side $a$)** | $\text{LSA} = 4a^2$ | $\text{TSA} = 6a^2$ | $V = a^3$ | Space Diagonal $= a\sqrt{3}$ |
| **Cuboid ($l, b, h$)** | $\text{LSA} = 2h(l + b)$ | $\text{TSA} = 2(lb + bh + hl)$ | $V = l \times b \times h$ | Space Diagonal $= \sqrt{l^2 + b^2 + h^2}$ |
| **Cylinder ($r, h$)** | $\text{CSA} = 2\pi r h$ | $\text{TSA} = 2\pi r(h + r)$ | $V = \pi r^2 h$ | Base Area $= \pi r^2$ |
| **Cone ($r, h, l$)** | $\text{CSA} = \pi r l$ | $\text{TSA} = \pi r(l + r)$ | $V = \frac{1}{3}\pi r^2 h$ | Slant Height $l = \sqrt{r^2 + h^2}$ |
| **Sphere ($r$)** | $\text{CSA} = 4\pi r^2$ | $\text{TSA} = 4\pi r^2$ | $V = \frac{4}{3}\pi r^3$ | - |
| **Hemisphere ($r$)** | $\text{CSA} = 2\pi r^2$ | $\text{TSA} = 3\pi r^2$ [Solid] | $V = \frac{2}{3}\pi r^3$ | Solid hemisphere TSA includes flat circular top ($\pi r^2$) |

---

### 2. Frustum of a Right Circular Cone
For a frustum (bucket) of top radius $R$, bottom radius $r$, and vertical height $h$:
- **Slant Height ($l$):** $l = \sqrt{h^2 + (R - r)^2}$
- **Curved Surface Area (CSA):** $\text{CSA} = \pi(R + r)l$
- **Total Surface Area (TSA - Closed Bucket):** $\text{TSA} = \pi(R + r)l + \pi R^2 + \pi r^2$
- **Volume ($V$):** $V = \frac{1}{3}\pi h (R^2 + r^2 + R\cdot r)$

---

### 3. Cavity Drilling vs. Mounting Composite Solids
- **Drilling a Cavity out of a Solid:** Volume decreases ($V_{\text{new}} = V_{\text{solid}} - V_{\text{cavity}}$), but **Total Surface Area INCREASES** because the internal exposed curved walls of the cavity add new surface:
  $$\text{TSA}_{\text{new}} = \text{TSA}_{\text{solid}} - \text{Base Area} + \text{CSA}_{\text{cavity}}$$
- **Mounting a Hemisphere on a Cylinder (Silo shape):**
  - $\text{Total Volume} = \pi r^2 h + \frac{2}{3}\pi r^3$
  - $\text{Total Surface Area} = \pi r^2 \text{ (base)} + 2\pi rh \text{ (cylinder CSA)} + 2\pi r^2 \text{ (hemisphere CSA)} = 3\pi r^2 + 2\pi rh$.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: '3-Tier Worked Problem: Melting Sphere into Multiple Cones',
        body: `### 3-Tier Worked Problem
**Problem:** A solid metallic sphere of radius $6\text{ cm}$ is melted and recast into small solid right circular cones, each of base radius $3\text{ cm}$ and height $4\text{ cm}$. Find the total number of cones formed.

- **Tier 1 (First Principles / Volume Conservation):**
  1. Volume of solid sphere $= \frac{4}{3}\pi R^3 = \frac{4}{3}\pi (6)^3 = \frac{4}{3}\pi (216) = 288\pi\text{ cm}^3$.
  2. Volume of one single cone $= \frac{1}{3}\pi r^2 h = \frac{1}{3}\pi (3)^2 (4) = \frac{1}{3}\pi (9)(4) = 12\pi\text{ cm}^3$.
  3. By volume conservation: $N \times V_{\text{cone}} = V_{\text{sphere}}$.
     $$N = \frac{288\pi}{12\pi} = \frac{288}{12} = \mathbf{24\text{ cones}}$$
- **Tier 2 (Banking Standard / Direct Formula Cancellation):**
  $$N = \frac{\frac{4}{3}\pi R^3}{\frac{1}{3}\pi r^2 h} = \frac{4R^3}{r^2 h} = \frac{4 \times 6^3}{3^2 \times 4} = \frac{4 \times 216}{9 \times 4} = \frac{216}{9} = \mathbf{24}$$
- **Tier 3 (10-Second Ratio Cancellation):** $4 \times (6/3)^2 \times (6/4) = 4 \times 4 \times 1.5 = \mathbf{24\text{ cones}}$.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-13-01',
        statement: '3D solid mensuration conserves volume during melting (N*V_cone = V_sphere), increases TSA upon cutting (+2A_cut) or drilling, and computes frustum volume via V = (1/3)*pi*h*(R^2 + r^2 + R*r).',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_TRUTH',
        confidence: 'VERY_HIGH',
        locator: 'Solid Mensuration & Topology Reference & Banking Quant Hub',
        excerpt: 'Melting preserves total volume while surface area changes; Frustum volume is 1/3 pi h (R^2+r^2+Rr).',
      },
    ],
    examMappings: [
      {
        examCode: 'sbi-po',
        syllabusUnit: 'Prelims & Mains: 3D Mensuration, Frustums & Composite Solids',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: '3D_GEOMETRIC_REASONING',
        notes: 'Frustum bucket volumes and melting/recasting problems.',
      },
      {
        examCode: 'ibps-po',
        syllabusUnit: 'Prelims: Mensuration 3D',
        relevance: 'HIGH',
        priority: 'CORE',
        requiredDepth: '3D_GEOMETRIC_REASONING',
        notes: 'Sphere-cone recasting and cylinder percentage scaling.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Volume: Cube = a^3 | Cylinder = pi r^2 h | Cone = 1/3 pi r^2 h | Sphere = 4/3 pi r^3 | Solid Hemisphere TSA = 3 pi r^2 | Frustum: V = 1/3 pi h (R^2 + r^2 + Rr), Slant l = sqrt(h^2 + (R-r)^2) | Invariant: Melting preserves Volume | Scaling: Linear=k, Area=k^2, Volume=k^3.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'A solid metallic sphere of radius 6 cm is melted and recast into small solid right circular cones of base radius 3 cm and height 4 cm. How many such cones can be formed?',
        options: ['24 cones', '18 cones', '32 cones', '16 cones'],
        correctAnswer: '24 cones',
        explanation: '1. Volume of Sphere = (4/3) * pi * R^3 = (4/3) * pi * 6^3 = 288*pi cm^3.\n2. Volume of 1 Cone = (1/3) * pi * r^2 * h = (1/3) * pi * 3^2 * 4 = 12*pi cm^3.\n3. Number of cones N = Volume of Sphere / Volume of Cone = 288*pi / 12*pi = 24 cones.',
        trapExplanation: 'Forgetting the 1/3 factor in cone volume results in an incorrect answer of 8 cones.',
        difficulty: 'EASY',
      },
    ],
  },

  // =========================================================================
  // TOPIC 84: Data Interpretation, Data Sufficiency & Mains
  // =========================================================================
  {
    id: 'CON-QUANT-14',
    slug: 'visual-data-interpretation-tables-bar-graphs-line-graphs-and-pie-charts',
    title: 'Visual Data Interpretation: Tables, Bar Graphs, Line Graphs & Single/Dual Pie Charts',
    shortDefinition: 'Foundational visual data interpretation: table matrices, bar charts, trend-line line graphs, single and dual pie charts (angle-to-percentage 360 deg = 100%), rapid estimation, and option elimination heuristics.',
    difficulty: 'INTERMEDIATE',
    order: 14,
    topicSlug: 'data-interpretation-data-sufficiency-and-mains',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Visual Data Interpretation Engine',
        body: `Data Interpretation (DI) accounts for **10–15 marks in Banking Prelims** and **over 70% of the entire Quantitative Aptitude paper in Banking Mains**.

Mastery of visual DI requires combining **Data Extraction Speed** with **Numerical Calculation Shortcuts**:
1. **Tables & Bar Graphs:** Multi-column relational extraction and percentage-difference filtering.
2. **Line Graphs:** Tracking growth trends, peaks, troughs, and Compound Annual Growth Rates (CAGR).
3. **Pie Charts:** Instantaneous conversion between **Degrees ($360^\circ$)** and **Percentages ($100\%$)** ($3.6^\circ = 1\% \implies 1^\circ = \frac{5}{18}\%$), avoiding redundant base calculations.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Visual DI Taxonomies & Angle-Percentage Conversions',
        body: `### 1. Master Angle $\leftrightarrow$ Percentage Conversion Matrix

$$\text{Angle } (\theta) = \text{Percentage } (P\%) \times 3.6^\circ \qquad \iff \qquad \text{Percentage } (P\%) = \frac{\text{Angle } (\theta)}{3.6} = \frac{\theta \times 5}{18}\%$$

| Common Sector Angle | Exact Percentage Share | Fractional Equivalent |
| :--- | :--- | :--- |
| **$18^\circ$** | $5\%$ | $1/20$ |
| **$36^\circ$** | $10\%$ | $1/10$ |
| **$54^\circ$** | $15\%$ | $3/20$ |
| **$72^\circ$** | $20\%$ | $1/5$ |
| **$90^\circ$** | $25\%$ | $1/4$ |
| **$108^\circ$** | $30\%$ | $3/10$ |
| **$120^\circ$** | $33.33\% = 33\frac{1}{3}\%$ | $1/3$ |
| **$144^\circ$** | $40\%$ | $2/5$ |
| **$180^\circ$** | $50\%$ | $1/2$ |

---

### 2. The Total-First Strategy & Dual Pie Comparison
- **Total-First Invariant:** In a single pie chart, when answering multiple questions on the same dataset, **compute the value of $1\%$ (or $1^\circ$) once** and multiply by required sector percentages rather than calculating long percentages repeatedly.
- **Dual Pie Comparison ($Year_1$ vs $Year_2$):**
  $$\text{Actual Ratio } = \frac{\text{Total}_1 \times P_1\%}{\text{Total}_2 \times P_2\%} = \left(\frac{\text{Total}_1}{\text{Total}_2}\right) \times \left(\frac{P_1}{P_2}\right)$$
  *(Never calculate the individual absolute values if the question merely asks for the ratio or percentage growth!)*

---

### 3. Line Graph Growth & CAGR Estimation
- **Percentage Growth:** $\frac{\text{Final Value} - \text{Initial Value}}{\text{Initial Value}} \times 100$.
- **CAGR Over $n$ Years:** If value grows from $V_0$ to $V_n$ over $n$ time intervals:
  $$\text{CAGR} = \left(\frac{V_n}{V_0}\right)^{1/n} - 1$$`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: '3-Tier Worked Problem: Pie Chart Angle Conversion & Value Extraction',
        body: `### 3-Tier Worked Problem
**Problem:** In a pie chart representing the distribution of $7,200$ university students across faculties, the Science faculty occupies an angle of $90^\circ$. Find the total number of Science students.

- **Tier 1 (First Principles / Degree Proportion):**
  1. Total circle represents $360^\circ = 7,200\text{ students}$.
  2. $1^\circ = \frac{7,200}{360} = 20\text{ students}$.
  3. Science faculty angle $= 90^\circ$.
  4. Number of Science students $= 90 \times 20 = \mathbf{1,800\text{ students}}$.
- **Tier 2 (Banking Standard / Fractional Equivalence):**
  $$90^\circ = \frac{90}{360} = \frac{1}{4} \implies \text{Students} = \frac{1}{4} \times 7,200 = \mathbf{1,800}$$
- **Tier 3 (10-Second Mental Elimination):** $90^\circ$ is a right angle $= 25\%$. $25\% \text{ of } 7200 = \frac{7200}{4} = \mathbf{1,800}$.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-14-01',
        statement: 'Visual Data Interpretation operates on angle-to-percentage conversion (360 deg = 100% -> 1 deg = 5/18%), dual pie ratio decomposition, and total-first multiplier extraction.',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_TRUTH',
        confidence: 'VERY_HIGH',
        locator: 'Banking Data Interpretation Master Guidelines',
        excerpt: 'Pie chart sector angles convert to percentages via theta/3.6, allowing rapid ratio and absolute value extractions.',
      },
    ],
    examMappings: [
      {
        examCode: 'sbi-po',
        syllabusUnit: 'Prelims & Mains: Data Interpretation (Tables, Bar, Line, Pie)',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'VISUAL_DATA_EXTRACTION',
        notes: '10-15 marks in Prelims; core section in Mains.',
      },
      {
        examCode: 'ibps-po',
        syllabusUnit: 'Prelims & Mains: Visual Data Interpretation',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'VISUAL_DATA_EXTRACTION',
        notes: 'Line graph trends and dual pie comparisons.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Pie Chart: 360 deg = 100% | 1% = 3.6 deg | 90 deg = 25% = 1/4 | 72 deg = 20% = 1/5 | 54 deg = 15% | Dual Pie Ratio: (Total1 * %1) / (Total2 * %2) | Line Graph CAGR = (V_n / V_0)^(1/n) - 1 | Total-First: compute unit value once.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'In a pie chart representing the enrollment of 7,200 students in a college, the Science faculty corresponds to a sector angle of 90 degrees. How many students are enrolled in the Science faculty?',
        options: ['1,800', '1,600', '2,000', '1,400'],
        correctAnswer: '1,800',
        explanation: '1. In a circle, total angle = 360 degrees, which corresponds to 7,200 students.\n2. Fraction represented by 90 degrees = 90 / 360 = 1/4.\n3. Total Science students = (1/4) * 7,200 = 1,800 students.',
        trapExplanation: 'Mistaking 90 degrees for 90% gives 6,480, which is incorrect.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-QUANT-15',
    slug: 'advanced-caselet-missing-value-and-arithmetic-data-interpretation',
    title: 'Advanced Caselet, Missing Value & Arithmetic Data Interpretation',
    shortDefinition: 'Mains-level data interpretation: paragraph caselets (Venn diagram and table-based), horizontal/vertical accounting identities in missing tables, and embedding arithmetic models (TSD, Work, Profit, NPA recovery) into multi-layered datasets.',
    difficulty: 'ADVANCED',
    order: 15,
    topicSlug: 'data-interpretation-data-sufficiency-and-mains',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Banking Mains Frontier: Advanced Caselet & Arithmetic DI',
        body: `In SBI PO Mains, IBPS PO Mains, and RBI Grade B Phase 1, standard visual charts are largely replaced by **Complex Multi-Variable Caselets, Missing Value Tables, and Arithmetic-Integrated DI sets**.

Success in Mains DI requires:
1. **Paragraph-to-Table Transduction:** Systematically translating dense descriptive text into a structured tabular grid or 3-circle Venn diagram before reading the questions.
2. **Horizontal/Vertical Balancing:** Exploiting internal accounting invariants ($\text{Total} = \text{Sub-categories}$, $\text{Income} = \text{Expenditure} + \text{Savings}$) to deduce unknown missing values.
3. **Arithmetic Integration:** Solving embedded Time-Work, Speed-Distance, or Banking NPA Recovery equations directly within dataset cells.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Caselet Modeling Strategies & Missing Table Reconstruction',
        body: `### 1. Paragraph Caselet Strategy: The 3-Step Protocol
- **Step 1 (Scan & Variable Identification):** Identify the independent categories (e.g. Sectors, Years, Genders) and the target metrics (Amounts, Rates, Percentages).
- **Step 2 (Grid Setup):** Construct an empty $M \times N$ table with row totals and column totals.
- **Step 3 (Sequential Clue Deduction):** Fill direct numbers first; convert percentage/ratio constraints into algebraic terms ($3x, 4x, 5x$); solve the linear system to fully populate the matrix before touching question 1.

---

### 2. 3-Circle Venn Diagram Caselet Invariants
For three overlapping sets $A, B, C$ inside universe $U$:
$$\text{Total} = n(A) + n(B) + n(C) - [n(A \cap B) + n(B \cap C) + n(C \cap A)] + n(A \cap B \cap C) + n(\text{None})$$
- **Exactly One Category:** $n(A \text{ only}) + n(B \text{ only}) + n(C \text{ only})$.
- **Exactly Two Categories:** $[n(A \cap B) + n(B \cap C) + n(C \cap A)] - 3 \times n(A \cap B \cap C)$.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: '3-Tier Worked Problem: RBI Grade B / SBI PO Mains NPA Recovery Caselet',
        body: `### 3-Tier Worked Problem (Authentic Banking Caselet Benchmark)
**Problem:** A commercial bank has total Gross NPAs of ₹12,000 Crore across three sectors: Agriculture, MSME, and Corporate in the ratio $3 : 4 : 5$.
- In **Agriculture**, the bank recovers $40\%$ of NPAs, writes off $25\%$, and the remainder is restructured.
- In **MSME**, total recovered amount is $1.5$ times the Agricultural recovery, while the restructured amount is $20\%$ of total MSME NPAs.
- In **Corporate**, total NCLT recovery is ₹1,800 Crore.
Find the ratio of **Total Restructured NPAs across Agriculture and MSME combined** to **Total Corporate NPAs**.

- **Tier 1 (First Principles / Sequential Matrix Deduction):**
  1. *Total Distribution:* Ratio $3:4:5 \implies 3x + 4x + 5x = 12x = 12,000\text{ Cr} \implies x = 1,000\text{ Cr}$.
     - Agriculture NPAs $= ₹3,000\text{ Cr}$.
     - MSME NPAs $= ₹4,000\text{ Cr}$.
     - Corporate NPAs $= ₹5,000\text{ Cr}$.
  2. *Agriculture Breakdown ($₹3,000\text{ Cr}$):*
     - Recovery $= 40\% \times 3,000 = ₹1,200\text{ Cr}$.
     - Write-off $= 25\% \times 3,000 = ₹750\text{ Cr}$.
     - Restructured $= 3,000 - (1,200 + 750) = 3,000 - 1,950 = \mathbf{₹1,050\text{ Cr}}$.
  3. *MSME Breakdown ($₹4,000\text{ Cr}$):*
     - Recovery $= 1.5 \times 1,200 = ₹1,800\text{ Cr}$.
     - Restructured $= 20\% \times 4,000 = \mathbf{₹800\text{ Cr}}$.
  4. *Combined Agri + MSME Restructured:*
     $$\text{Total Restructured} = 1,050 + 800 = \mathbf{₹1,850\text{ Cr}}$$
  5. *Required Ratio to Corporate NPAs ($₹5,000\text{ Cr}$):*
     $$\text{Ratio} = \frac{1,850}{5,000} = \frac{185}{500} = \mathbf{\frac{37}{100} = 37 : 100}$$
- **Tier 2 (Banking Standard / Tabular Extraction):**
  Set up a 3-row matrix:
  - Agri Restructured $= 3,000 \times (1 - 0.40 - 0.25) = 3,000 \times 0.35 = 1,050\text{ Cr}$.
  - MSME Restructured $= 4,000 \times 0.20 = 800\text{ Cr}$.
  - Ratio $= \frac{1,050 + 800}{5,000} = \frac{1,850}{5,000} = \mathbf{\frac{37}{100}}$.
- **Tier 3 (10-Second Mental Unit Elimination):** Units: Agri restructured is $35\% \times 30 = 10.5$ units; MSME is $20\% \times 40 = 8$ units. Total $= 18.5$ units. Corporate is $50$ units. $\frac{18.5}{50} = \frac{37}{100}$ directly.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-15-01',
        statement: 'Advanced caselet and missing-value DI sets in Banking Mains are solved by grid transduction, horizontal/vertical balancing identities, and multi-variable percentage-ratio modeling.',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_TRUTH',
        confidence: 'VERY_HIGH',
        locator: 'Banking PO Mains DI Command Center & RBI Grade B Standards',
        excerpt: 'Caselet paragraph data translates to matrix grids, balancing total sums across rows and columns.',
      },
    ],
    examMappings: [
      {
        examCode: 'sbi-po',
        syllabusUnit: 'Mains: Advanced Caselet & Missing Value DI',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'MAINS_CASELET_SOLVING',
        notes: 'Dominant question format in SBI PO Mains (35-40 marks).',
      },
      {
        examCode: 'rbi-grade-b',
        syllabusUnit: 'Phase 1: Quantitative Aptitude & Asset Quality DI',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'MAINS_CASELET_SOLVING',
        notes: 'Real-world banking NPA and financial caselet sets.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'Caselet Rules: 1. Setup table grid first | 2. Fill absolute numbers | 3. Solve percentage/ratio constraints | Missing Tables: use Row Sum = Total and Col Sum = Total | Venn Diagram: Total = n(A)+n(B)+n(C) - Sum(2-way) + All 3 + None.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'A bank has ₹12,000 Cr Gross NPAs in Agriculture, MSME, and Corporate in the ratio 3:4:5. If Agriculture has 40% recovery, 25% write-off, and rest restructured; and MSME has 20% restructured, what is the ratio of (Agri + MSME Restructured) to Total Corporate NPAs?',
        options: ['37:100', '19:50', '39:100', '17:50'],
        correctAnswer: '37:100',
        explanation: '1. Agri NPAs = 3000 Cr, MSME = 4000 Cr, Corporate = 5000 Cr.\n2. Agri Restructured = 3000 * (1 - 0.40 - 0.25) = 3000 * 0.35 = 1050 Cr.\n3. MSME Restructured = 4000 * 0.20 = 800 Cr.\n4. Combined Restructured = 1050 + 800 = 1850 Cr.\n5. Ratio to Corporate (5000 Cr) = 1850 / 5000 = 37 / 100 = 37:100.',
        trapExplanation: 'Calculating MSME recovery instead of restructured amount leads to an erroneous ratio.',
        difficulty: 'HARD',
      },
    ],
  },

  {
    id: 'CON-QUANT-16',
    slug: 'data-sufficiency-quantity-comparison-and-decision-logic',
    title: 'Data Sufficiency, Quantity Comparison & Decision Logic Framework',
    shortDefinition: 'Decision-tree logic for Data Sufficiency (DS) statements, unique solution existence criteria, the "Definite NO is Sufficient" heuristic, Quantity 1 vs Quantity 2 vs Quantity 3 algebraic comparisons, and avoiding over-calculation.',
    difficulty: 'ADVANCED',
    order: 16,
    topicSlug: 'data-interpretation-data-sufficiency-and-mains',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Logic of Data Sufficiency & Quantity Comparison',
        body: `Data Sufficiency (DS) and Quantity Comparison ($Q_1 \text{ vs } Q_2 \text{ vs } Q_3$) test **logical deduction, uniqueness of algebraic solutions, and constraint analysis** without requiring full manual computation.

The central governing rule of Data Sufficiency:
> **"Do NOT solve to the final numerical answer! Establish whether a unique, unambiguous mathematical solution EXISTS."**`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'The 5 Canonical DS Outcomes & Decision Heuristics',
        body: `### 1. The 5 Canonical Data Sufficiency Outcomes
1. **Statement (1) ALONE is sufficient**, but Statement (2) alone is not sufficient.
2. **Statement (2) ALONE is sufficient**, but Statement (1) alone is not sufficient.
3. **EACH statement ALONE is sufficient** (Either Statement 1 alone or Statement 2 alone).
4. **BOTH statements TOGETHER are sufficient**, but neither statement alone is sufficient.
5. **Statements (1) and (2) TOGETHER are STILL NOT sufficient** (Additional data required).

---

### 2. Core Decision Heuristics
- **The "Unique Solution" Invariant:**
  - A statement yielding a single unique value (e.g. $x = 7$) is **SUFFICIENT**.
  - A statement yielding two or more possible values (e.g. $x^2 = 49 \implies x = \pm 7$) is **INSUFFICIENT**, unless an inequality constraint (e.g. $x > 0$) eliminates ambiguity.
- **The "Definite NO" is 100% Sufficient:**
  - In a Yes/No question (e.g. *"Is $x > y$?"*):
    - If Statement 1 proves that $x$ is definitively greater than $y$ $\implies$ **"Definite YES" $\implies$ SUFFICIENT**.
    - If Statement 1 proves that $x$ is definitively less than $y$ $\implies$ **"Definite NO" $\implies$ 100% SUFFICIENT!**
    - Insufficiency occurs **ONLY when the answer is sometimes Yes and sometimes No**.
- **The Elimination Protocol:**
  - Test Statement 1 alone.
  - Test Statement 2 alone independently.
  - ONLY combine Statements 1 & 2 if both fail independently! Never bring data from Statement 1 into the evaluation of Statement 2.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_PERSPECTIVE',
        title: '3-Tier Worked Problem: Data Sufficiency Decision Tree',
        body: `### 3-Tier Worked Problem
**Problem:** Is $x > y$?
- **Statement I:** $x = y + 5$
- **Statement II:** $y > 0$

- **Tier 1 (First Principles / Inequality Analysis):**
  1. *Analyze Statement I alone:*
     $$x = y + 5 \implies x - y = 5$$
     Since $5 > 0$, it follows that $x - y > 0 \implies x > y$ for ALL real values of $y$ (positive, negative, or zero).
     Statement I yields a **Definite YES** $\implies$ **Statement I ALONE is SUFFICIENT**.
  2. *Analyze Statement II alone:*
     Statement II only tells us $y > 0$, providing zero information about $x$.
     Statement II ALONE is **NOT SUFFICIENT**.
  3. **Conclusion:** Statement I alone is sufficient, but Statement II alone is not.
- **Tier 2 (Banking Standard / Decision Tree):**
  - Stmt I: $x - y = 5 > 0 \implies x > y$ (Sufficient).
  - Stmt II: $y > 0$ (Insufficient).
  - Answer: Option 1.
- **Tier 3 (10-Second Mental Elimination):** $x = y+5$ immediately implies $x > y$ by 5 units regardless of $y$. Statement 1 alone is sufficient.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-QUANT-16-01',
        statement: 'Data sufficiency evaluates uniqueness of mathematical solutions, where a definitive NO is 100% sufficient, multiple ambiguous roots are insufficient, and statements must be evaluated independently before combination.',
        claimType: 'MATHEMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_TRUTH',
        confidence: 'VERY_HIGH',
        locator: 'Banking Quantitative Decision Logic & Data Sufficiency Standards',
        excerpt: 'In Yes/No DS problems, a definite NO is sufficient; ambiguity is the sole cause of insufficiency.',
      },
    ],
    examMappings: [
      {
        examCode: 'sbi-po',
        syllabusUnit: 'Mains: Data Sufficiency & Quantity Comparison (Q1 vs Q2)',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'LOGICAL_DECISION_MAKING',
        notes: '5 guaranteed questions in Mains; 2-statement and 3-statement formats.',
      },
      {
        examCode: 'ibps-po',
        syllabusUnit: 'Mains: Data Sufficiency & Quantity Comparison',
        relevance: 'CRITICAL',
        priority: 'CORE',
        requiredDepth: 'LOGICAL_DECISION_MAKING',
        notes: 'High-yield conceptual section testing all arithmetic and algebraic domains.',
      },
    ],
    revisionUnits: [
      {
        type: 'KEY_FACTS',
        content: 'DS Outcomes: 1 alone | 2 alone | Either alone | Both together | Neither | Rules: 1. Do not calculate to the end | 2. Definite NO is sufficient | 3. Multiple roots (x = +-5) = Insufficient | 4. Never mix Statement 1 into Statement 2 evaluation | Q1 vs Q2: Compare boundaries and signs.',
        priority: 'HIGH',
        order: 1,
      },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Question: Is x > y?\nStatement I: x = y + 5\nStatement II: y > 0\nWhich of the following is correct?',
        options: [
          'Statement I alone is sufficient, but Statement II alone is not sufficient',
          'Statement II alone is sufficient, but Statement I alone is not sufficient',
          'Each statement alone is sufficient',
          'Both statements together are sufficient, but neither alone is sufficient',
          'Statements I and II together are not sufficient',
        ],
        correctAnswer: 'Statement I alone is sufficient, but Statement II alone is not sufficient',
        explanation: '1. From Statement I: x = y + 5 implies x - y = 5. Since 5 is positive, x is always greater than y regardless of whether y is positive, negative, or zero. Thus, Statement I alone answers "Definite YES" and is SUFFICIENT.\n2. Statement II gives y > 0 but provides no information about x, so it is NOT sufficient.\n3. Therefore, Statement I alone is sufficient.',
        trapExplanation: 'Assuming you need Statement II to know that numbers are positive is a classic trap; x = y + 5 guarantees x > y for all real numbers.',
        difficulty: 'MEDIUM',
      },
    ],
  },
];

export async function seedBatchQuantBatch1CanonicalKnowledge(): Promise<void> {
  console.log('Seeding Quantitative Aptitude & Data Interpretation (Batch 1: Topics 80–84: 16 Concepts) Canonical Benchmark...');

  // 1. Ensure Domain exists
  const domain = await db.domain.upsert({
    where: { slug: 'quantitative-aptitude-and-reasoning' },
    update: {
      name: 'Quantitative Aptitude & Reasoning',
      description: 'Mathematical problem solving, arithmetic reasoning, data interpretation, and quantitative logic for competitive examinations.',
      order: 8,
      status: 'ACTIVE',
    },
    create: {
      slug: 'quantitative-aptitude-and-reasoning',
      name: 'Quantitative Aptitude & Reasoning',
      description: 'Mathematical problem solving, arithmetic reasoning, data interpretation, and quantitative logic for competitive examinations.',
      order: 8,
      status: 'ACTIVE',
    },
  });

  // 2. Ensure Target Subject exists
  const subject = await db.subject.upsert({
    where: { slug: 'quantitative-aptitude-and-data-interpretation' },
    update: {
      name: 'Quantitative Aptitude & Data Interpretation',
      domainId: domain.id,
      scopeStatement: 'Comprehensive first-principles mastery of speed calculation, algebra, number systems, commercial arithmetic, 2D/3D mensuration, visual data interpretation, caselets, and data sufficiency for Banking Prelims & Mains.',
      description: 'First-principles canonical mastery of speed math, arithmetic models, solid mensuration, and high-level banking data interpretation.',
      order: 8,
      status: 'ACTIVE',
    },
    create: {
      slug: 'quantitative-aptitude-and-data-interpretation',
      name: 'Quantitative Aptitude & Data Interpretation',
      domainId: domain.id,
      scopeStatement: 'Comprehensive first-principles mastery of speed calculation, algebra, number systems, commercial arithmetic, 2D/3D mensuration, visual data interpretation, caselets, and data sufficiency for Banking Prelims & Mains.',
      description: 'First-principles canonical mastery of speed math, arithmetic models, solid mensuration, and high-level banking data interpretation.',
      order: 8,
      status: 'ACTIVE',
    },
  });

  // 3. Ensure Target Banking Exams exist
  const sbiPo = await db.exam.upsert({
    where: { slug: 'sbi-po' },
    update: {},
    create: {
      slug: 'sbi-po',
      name: 'SBI Probationary Officer Examination',
      conductingBody: 'State Bank of India',
      description: 'Premier national banking recruitment examination for Probationary Officers.',
    },
  });

  const ibpsPo = await db.exam.upsert({
    where: { slug: 'ibps-po' },
    update: {},
    create: {
      slug: 'ibps-po',
      name: 'IBPS Probationary Officer Examination',
      conductingBody: 'Institute of Banking Personnel Selection',
      description: 'National recruitment for Probationary Officers across participating Public Sector Banks.',
    },
  });

  const rbiGradeB = await db.exam.upsert({
    where: { slug: 'rbi-grade-b' },
    update: {},
    create: {
      slug: 'rbi-grade-b',
      name: 'RBI Grade B Officers Examination',
      conductingBody: 'Reserve Bank of India',
      description: 'Direct recruitment examination for Grade B Officers in the Reserve Bank of India.',
    },
  });

  const examMap: Record<string, string> = {
    'sbi-po': sbiPo.id,
    'ibps-po': ibpsPo.id,
    'rbi-grade-b': rbiGradeB.id,
  };

  // 4. Ensure Source exists for Provenance & Coverage Ledger
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

  // 5. Ensure Topics exist (Topics 80 to 84)
  const topicDefs = [
    {
      slug: 'calculation-speed-simplification-and-algebra',
      title: 'Calculation Speed, Simplification & Algebra',
      description: 'Speed mathematics, fraction-percentage tables (1/1 to 1/25), mental multiplication, directional error-canceling rounding, algebraic identities, and the 4-case quadratic root sign table.',
      scope: 'Speed math engine, VBODMAS simplification, approximation rules, quadratic inequalities, and double negative constant rule.',
      order: 80,
    },
    {
      slug: 'number-system-series-and-modern-mathematics',
      title: 'Number System, Series & Modern Mathematics',
      description: 'Divisibility rules, prime factorization, HCF-LCM models, remainders, difference-tree series decomposition, wrong number diagnostics, permutations, combinations, and probability.',
      scope: 'Number properties, cyclic remainders, series algorithms, combinatorial arrangements, and probability addition/multiplication theorems.',
      order: 81,
    },
    {
      slug: 'arithmetic-and-financial-mathematics',
      title: 'Arithmetic & Financial Mathematics',
      description: 'Ratio, proportion, partnership, averages, problems on ages, profit/loss, marked price, discounts, dishonest dealer, simple & compound interest differences, mixture/alligation, time & work, and kinematic motion models.',
      scope: 'Comprehensive commercial arithmetic, CI-SI 2yr/3yr invariants, successive dilution, LCM work efficiency, relative speed, boats & streams, escalators, and circular races.',
      order: 82,
    },
    {
      slug: 'mensuration-and-geometric-invariants',
      title: 'Mensuration & Geometric Invariants',
      description: '2D plane figures, isoperimetric optimization theorem, inradius/circumradius invariants, 2D pathway formulas, 3D solid volumes, surface areas, frustums, melting/recasting volume conservation, and dimensional scaling.',
      scope: 'Plane geometry, triangle inradius shortcuts, 3D composite solids, cavity drilling TSA changes, and dimensional percentage multipliers.',
      order: 83,
    },
    {
      slug: 'data-interpretation-data-sufficiency-and-mains',
      title: 'Data Interpretation, Data Sufficiency & Mains',
      description: 'Visual data interpretation (tables, bar graphs, line graphs, pie charts), angle-percentage conversion, advanced paragraph caselets, missing value tables, arithmetic-integrated DI sets, and data sufficiency decision logic.',
      scope: 'Visual graph extractions, dual pie ratios, Mains caselet modeling, NPA recovery datasets, and 5 canonical Data Sufficiency outcomes.',
      order: 84,
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
  for (const c of QUANT_BATCH_1_CONCEPTS) {
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
          isPYQ: false,
        },
      });
    }
  }

  console.log(`Successfully seeded ${QUANT_BATCH_1_CONCEPTS.length} Quantitative Aptitude & Data Interpretation (Batch 1) canonical concepts.`);
}
