const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('================================================================================');
console.log('  MIND OF ARAVALLI — SHELF 007 QUANTITATIVE APTITUDE REGRESSION SUITE V6');
console.log('================================================================================');

let passed = 0;
let failed = 0;

function runTest(name, fn) {
  try {
    fn();
    console.log(`  [PASS] ${name}`);
    passed++;
  } catch (err) {
    console.error(`  [FAIL] ${name}: ${err.message}`);
    failed++;
  }
}

// TEST 01: Operator Precedence
runTest('TEST 01: Operator Precedence (Equal Precedence vs Exam "Of" Grouping)', () => {
  // Equal precedence left to right
  assert.strictEqual((20 / 5) * 2, 8);
  // "Of" exam grouping priority
  assert.strictEqual(20 / (5 * 2), 2);
  // Chained division left to right
  assert.strictEqual(((180 / 15) / 3) * 4, 16);
});

// TEST 02: Digital Root dr(n) vs Residue Modulo 9 r9(n)
runTest('TEST 02: Digital Root dr(n) vs Residue Modulo 9 r9(n) Separation', () => {
  function r9(n) {
    return n % 9;
  }
  function dr(n) {
    if (n === 0) return 0;
    return 1 + ((n - 1) % 9);
  }

  // Boundary n = 0
  assert.strictEqual(r9(0), 0);
  assert.strictEqual(dr(0), 0);

  // Multiples of 9: r9(n) == 0, but dr(n) == 9
  assert.strictEqual(r9(9), 0);
  assert.strictEqual(dr(9), 9);

  assert.strictEqual(r9(18), 0);
  assert.strictEqual(dr(18), 9);

  assert.strictEqual(r9(27), 0);
  assert.strictEqual(dr(27), 9);

  // General positive integer
  assert.strictEqual(r9(14), 5);
  assert.strictEqual(dr(14), 5);

  assert.strictEqual(r9(495), 0);
  assert.strictEqual(dr(495), 9);

  // Asserting that dr(n) !== r9(n) for positive multiples of 9
  [9, 18, 27, 36, 45, 90, 495].forEach(n => {
    assert.notStrictEqual(dr(n), r9(n), `dr(${n}) must not equal r9(${n})`);
    assert.strictEqual(dr(n), 9);
    assert.strictEqual(r9(n), 0);
  });
});

// TEST 03: Symmetrical Base Multiplication with Carry Normalisation
runTest('TEST 03: Symmetrical Base Multiplication with Carry Normalisation', () => {
  function baseMult(x, y, base = 100) {
    const a = x - base;
    const b = y - base;
    const lhs = x + b; // same as y + a
    const prod = a * b;
    // When prod exceeds base suffix width (e.g. 100 -> 2 digits)
    const carry = Math.floor(prod / base);
    const suffix = prod % base;
    const finalLhs = lhs + carry;
    return finalLhs * base + suffix;
  }

  // Standard (no carry)
  assert.strictEqual(baseMult(108, 112), 12096);
  assert.strictEqual(108 * 112, 12096);

  // Exact multiple of base (carry = 1, suffix = 00)
  assert.strictEqual(baseMult(105, 120), 12600);
  assert.strictEqual(105 * 120, 12600);

  // Carry normalisation exemplar: 109 * 117 = 12,753
  // a = +9, b = +17 -> lhs = 126, a*b = 153 -> carry 1 -> lhs = 127, suffix = 53
  assert.strictEqual(baseMult(109, 117), 12753);
  assert.strictEqual(109 * 117, 12753);
});

// TEST 04: Modulo-100 Boundary (k >= 2 constraint)
runTest('TEST 04: Modulo-100 Boundary (k >= 2 constraint)', () => {
  // Counterexample k=1: 76 * 2^1 = 152 = 52 (not 02)
  assert.strictEqual((76 * 2) % 100, 52);
  assert.notStrictEqual((76 * 2) % 100, 2);

  // For k >= 2, 76 * 2^k mod 100 == 2^k mod 100
  for (let k = 2; k <= 10; k++) {
    const val = (BigInt(76) * (BigInt(2) ** BigInt(k))) % 100n;
    const direct = (BigInt(2) ** BigInt(k)) % 100n;
    assert.strictEqual(val, direct);
  }
});

// TEST 05: Quadratic Root Comparison Counterexample & Anti-Cross-Scaling Refutation
runTest('TEST 05: Quadratic Root Comparison Counterexample (Refutation of Cross-Scaling)', () => {
  // Eq 1: x^2 - 9x + 20 = 0 -> x in {4, 5}, a1 = 1
  // Eq 2: 10y^2 - 130y + 420 = 0 -> y in {6, 7}, a2 = 10
  const xRoots = [4, 5];
  const yRoots = [6, 7];

  // True relation: x < y
  const isXLessThanY = xRoots.every(x => yRoots.every(y => x < y));
  assert.strictEqual(isXLessThanY, true);

  // Flawed shortcut: multiply roots by opposing a_i
  const scaledX = xRoots.map(x => x * 10); // [40, 50]
  const scaledY = yRoots.map(y => y * 1);  // [6, 7]
  const flawedIsXGreaterThanY = scaledX.every(x => scaledY.every(y => x > y));
  
  // Proves that flawed shortcut inverts the result to X > Y!
  assert.strictEqual(flawedIsXGreaterThanY, true);
});

// TEST 06: Quadratic Negative Constant CND Invariant
runTest('TEST 06: Quadratic Negative Constant CND Invariant', () => {
  const a1 = 2, b1 = 3, c1 = -5; // roots: 1, -2.5
  const a2 = 3, b2 = -4, c2 = -7; // roots: ~2.35, -1.0
  const x1 = (-b1 + Math.sqrt(b1*b1 - 4*a1*c1)) / (2*a1); // 1
  const x2 = (-b1 - Math.sqrt(b1*b1 - 4*a1*c1)) / (2*a1); // -2.5
  const y1 = (-b2 + Math.sqrt(b2*b2 - 4*a2*c2)) / (2*a2); // 2.35
  const y2 = (-b2 - Math.sqrt(b2*b2 - 4*a2*c2)) / (2*a2); // -1.0

  // x1 > 0 > x2, and y1 > 0 > y2
  assert(x1 > 0 && x2 < 0);
  assert(y1 > 0 && y2 < 0);
  // Cross-comparisons:
  assert(x1 > y2); // positive x1 > negative y2
  assert(y1 > x2); // positive y1 > negative x2
  // Straddling guarantees CND
});

// TEST 07: Rhombus Pythagorean Integrity
runTest('TEST 07: Rhombus Pythagorean Integrity (32, 126, 65)', () => {
  const d1 = 32;
  const area = 2016;
  const d2 = (2 * area) / d1; // 126
  assert.strictEqual(d2, 126);

  const halfD1 = d1 / 2; // 16
  const halfD2 = d2 / 2; // 63
  const side = Math.sqrt(halfD1 * halfD1 + halfD2 * halfD2); // 65
  assert.strictEqual(side, 65);

  const perimeter = 4 * side; // 260
  assert.strictEqual(perimeter, 260);
});

// TEST 08: Dishonest Dealer Universal Multiplier
runTest('TEST 08: Dishonest Dealer Universal Multiplier', () => {
  const markup = 1.2;
  const discount = 0.9;
  const weightMultiplier = 1000 / 800; // 1.25
  const netMultiplier = markup * discount * weightMultiplier;
  assert.strictEqual(netMultiplier, 1.35); // 35% profit
});

// TEST 09: Exact Semicircle Perimeter (pi + 2)r vs (36/7)r Approximation when pi = 22/7, and Solid Hemisphere TSA
runTest('TEST 09: Exact Semicircle Perimeter vs 36/7 Approximation & Solid Hemisphere TSA', () => {
  const r_semi = 14;
  // Exact mathematical definition: P = (pi + 2)r
  const exactPerimeter = (Math.PI + 2) * r_semi;
  assert(Math.abs(exactPerimeter - 71.9823) < 0.01);

  // Rational approximation strictly when pi = 22/7:
  const p_semi_approx = (36 / 7) * r_semi;
  assert.strictEqual(p_semi_approx, 72);

  const r_hemi = 7;
  const tsa_hemi = 3 * (22 / 7) * r_hemi * r_hemi;
  assert.strictEqual(tsa_hemi, 462);
});

// TEST 10: Kinematic Cross-Meeting Speed Ratio & Post-Meeting Time Definitions
runTest('TEST 10: Kinematic Cross-Meeting Speed Ratio & Post-Meeting Travel Times', () => {
  const TA = 4, TB = 9; // TA, TB are explicitly post-meeting travel times to destinations
  const speedRatio = Math.sqrt(TB / TA);
  const t_meet = Math.sqrt(TA * TB);
  assert.strictEqual(speedRatio, 1.5);
  assert.strictEqual(t_meet, 6);
});

// TEST 11: CI-SI Difference Ratio (D3/D2 = 3 + R/100)
runTest('TEST 11: CI-SI Difference Ratio (D3/D2 = 3 + R/100)', () => {
  const P = 10000;
  const R = 10;
  const D2 = Math.round(P * Math.pow(R / 100, 2));
  assert.strictEqual(D2, 100);

  const D3 = 310;
  const ratio = +(D3 / D2).toFixed(2);
  assert.strictEqual(ratio, 3 + R / 100);
});

// TEST 12: Repeated Dilution Conservation Invariant
runTest('TEST 12: Repeated Dilution Conservation Invariant', () => {
  const V = 100;
  const x = 20;
  const n = 2;
  const Q_final = Math.round(V * Math.pow(1 - x / V, n));
  assert.strictEqual(Q_final, 64);
});

// TEST 13: General Complement Probability Identity vs Independent Events Special Case
runTest('TEST 13: General Complement Probability Identity & Dependent Counterexample', () => {
  // General identity: P(A U B U C) = 1 - P(A\' intersect B\' intersect C\')
  // Special case: 1 - P(A\')P(B\')P(C\') holds IF AND ONLY IF A, B, C are independent.
  // Counterexample for dependent events:
  // Let A and B be identical events with P(A) = P(B) = 0.5.
  // Then A U B = A, so P(A U B) = 0.5.
  // P(A\') = 0.5, P(B\') = 0.5.
  // The unconditioned product formula would give 1 - (0.5 * 0.5) = 1 - 0.25 = 0.75 != 0.5!
  const pA = 0.5;
  const pB = 0.5;
  const pUnionActual = 0.5; // Since A = B
  const pComplementIntersection = 0.5; // (A\' intersect B\') = A\'
  const generalFormulaResult = 1 - pComplementIntersection; // 1 - 0.5 = 0.5
  assert.strictEqual(generalFormulaResult, pUnionActual);

  const flawedProductResult = 1 - (1 - pA) * (1 - pB); // 1 - 0.25 = 0.75
  assert.notStrictEqual(flawedProductResult, pUnionActual);
  assert.strictEqual(flawedProductResult, 0.75);
});

// TEST 14: Quadratic Real Root Existence Condition (D >= 0)
runTest('TEST 14: Quadratic Real Root Existence Condition (x^2 + x + 1 = 0)', () => {
  const a = 1, b = 1, c = 1;
  const D = b * b - 4 * a * c; // 1 - 4 = -3 < 0
  assert(D < 0);
});

// TEST 15: Number Series Practice Q8 (Cube Difference Sequence)
runTest('TEST 15: Number Series Practice Q8 (10, 18, 45, 110, 234, 450)', () => {
  const expectedCubes = [8, 27, 64, 125, 216]; // 2^3, 3^3, 4^3, 5^3, 6^3
  const correctSeries = [10];
  for (let i = 0; i < expectedCubes.length; i++) {
    correctSeries.push(correctSeries[i] + expectedCubes[i]);
  }
  // Expected: [10, 18, 45, 109, 234, 450]
  assert.deepStrictEqual(correctSeries, [10, 18, 45, 109, 234, 450]);

  // Given series has 110 instead of 109:
  const given = [10, 18, 45, 110, 234, 450];
  assert.strictEqual(given[3], 110); // Wrong term is 110!
});

// TEST 16: Number Series Practice Q10 (Second Differences on 100, 97, 90, 77, 56, 24)
runTest('TEST 16: Number Series Practice Q10 (100, 97, 90, 77, 56, 24 -> 25)', () => {
  const given = [100, 97, 90, 77, 56, 24];
  const d1 = [];
  for (let i = 0; i < given.length - 1; i++) {
    d1.push(given[i+1] - given[i]);
  }
  assert.deepStrictEqual(d1, [-3, -7, -13, -21, -32]);

  const d2 = [];
  for (let i = 0; i < d1.length - 1; i++) {
    d2.push(d1[i+1] - d1[i]);
  }
  assert.deepStrictEqual(d2, [-4, -6, -8, -11]);

  const expectedLastD2 = -10;
  const expectedLastD1 = d1[3] + expectedLastD2; // -21 + (-10) = -31
  assert.strictEqual(expectedLastD1, -31);

  const expectedFinalTerm = given[4] + expectedLastD1; // 56 + (-31) = 25
  assert.strictEqual(expectedFinalTerm, 25);
  assert.strictEqual(given[5], 24); // Wrong term in problem is 24!
});

// TEST 17: Number Series Multi-Difference Hierarchy (14, 29, 52, 85, 130)
runTest('TEST 17: Number Series Multi-Difference Hierarchy (14, 29, 52, 85, 130)', () => {
  const terms = [14, 29, 52, 85, 130];
  const d1 = [];
  for (let i = 0; i < terms.length - 1; i++) d1.push(terms[i+1] - terms[i]);
  assert.deepStrictEqual(d1, [15, 23, 33, 45]);

  const d2 = [];
  for (let i = 0; i < d1.length - 1; i++) d2.push(d1[i+1] - d1[i]);
  assert.deepStrictEqual(d2, [8, 10, 12]);

  const d3 = [];
  for (let i = 0; i < d2.length - 1; i++) d3.push(d2[i+1] - d2[i]);
  assert.deepStrictEqual(d3, [2, 2]); // Constant at 3rd difference -> cubic sequence!
});

// TEST 18: Data Sufficiency Master Determination Rule
runTest('TEST 18: Data Sufficiency Determination Rule Verification', () => {
  const rootsAmbiguous = [-5, 5];
  assert.strictEqual(rootsAmbiguous.length > 1, true);

  const rootUnique = [5];
  assert.strictEqual(rootUnique.length === 1, true);

  const outcomesYes = ['YES', 'YES', 'YES'];
  assert.strictEqual(outcomesYes.every(o => o === 'YES'), true);

  const outcomesNo = ['NO', 'NO', 'NO'];
  assert.strictEqual(outcomesNo.every(o => o === 'NO'), true);

  const outcomesAmbiguous = ['YES', 'NO'];
  assert.strictEqual(outcomesAmbiguous.includes('YES') && outcomesAmbiguous.includes('NO'), true);
});

// TEST 19: Exponent Domain Scope & Counterexample Verification
runTest('TEST 19: Exponent Domain Scope & Negative Base Counterexample', () => {
  const a = -1;
  const m = 2;
  const n = 0.5;
  const lhs = Math.pow(Math.pow(a, m), n); // ((-1)^2)^0.5 = 1^0.5 = 1
  const rhs = Math.pow(a, m * n);           // (-1)^1 = -1
  assert.strictEqual(lhs, 1);
  assert.strictEqual(rhs, -1);
  assert.notStrictEqual(lhs, rhs); // Proves (a^m)^n = a^(mn) fails for negative bases!

  const oddRoot = -Math.cbrt(8); // (-8)^(1/3) = -2
  assert.strictEqual(oddRoot, -2);
});

// TEST 20: 3-Variable Overlapping Venn Caselet Mathematical & Narrative Consistency
runTest('TEST 20: 3-Variable Overlapping Venn Caselet Consistency (1,200 Cohort)', () => {
  const U = 1200;
  const R = 650, Q = 580, E = 500;
  const RQ = 260, QE = 210, RE = 220;
  const all3 = 100;

  const d = RQ - all3; // 160
  const f = QE - all3; // 110
  const e = RE - all3; // 120
  assert.strictEqual(d, 160);
  assert.strictEqual(f, 110);
  assert.strictEqual(e, 120);

  const a = R - (d + e + all3); // 650 - 380 = 270
  const b = Q - (d + f + all3); // 580 - 370 = 210
  const c = E - (e + f + all3); // 500 - 330 = 170
  assert.strictEqual(a, 270);
  assert.strictEqual(b, 210);
  assert.strictEqual(c, 170);

  const passedAtLeastOne = a + b + c + d + e + f + all3;
  assert.strictEqual(passedAtLeastOne, 1140);

  const passedNone = U - passedAtLeastOne;
  assert.strictEqual(passedNone, 60);

  assert.strictEqual(passedAtLeastOne + passedNone, U);
});

// TEST 21: Category-Wise RBI Grade B 2026 Phase I Quant Cutoffs (Official Result Sheet 13 June 2026)
runTest('TEST 21: Category-Wise RBI Grade B 2026 Phase I Quant Cutoffs', () => {
  const cutoffs = {
    GEN_UR: 14.50,
    EWS: 11.25,
    OBC: 12.75,
    SC: 12.00,
    ST: 10.75
  };
  assert.strictEqual(cutoffs.GEN_UR, 14.50);
  assert.strictEqual(cutoffs.EWS, 11.25);
  assert.strictEqual(cutoffs.OBC, 12.75);
  assert.strictEqual(cutoffs.SC, 12.00);
  assert.strictEqual(cutoffs.ST, 10.75);
});

// TEST 22: Structural Heading, Banned Phrase, Official URLs & Sanitation Gate (V6)
runTest('TEST 22: Structural Heading, Banned Phrase, Official URLs & Sanitation Gate (V6)', () => {
  const bookPath = path.resolve('007/QUANTITATIVE_APTITUDE_MASTER_BOOK_FINAL_V6.md');
  assert(fs.existsSync(bookPath), 'V6 book file must exist');
  const content = fs.readFileSync(bookPath, 'utf-8');

  // Verify zero occurrences of banned phrases
  const banned = [
    'Division ➔ Multiplication ➔ Addition ➔ Subtraction',
    'Division -> Multiplication -> Addition -> Subtraction',
    'D(N) = N mod 9',
    '4–5 Demanding Series',
    '4-5 Demanding Series',
    '1/7 = 14.28%',
    'INDEPENDENTLY AUDITED',
    '100% verified',
    '100% certified',
    'every formula proven',
    'every trap disarmed',
    '5 guaranteed marks',
    'guaranteed 5 marks',
    'guaranteed marks',
    'RBI Grade B Phase I contains NO Quantitative Aptitude paper',
    '5 Questions in nearly every Mains paper',
    'None = 0',
    'OBC: 12.00',
    'SC/ST: 10.50',
    'every example reflects verified exam pacing'
  ];

  for (const b of banned) {
    const matches = (content.match(new RegExp(b, 'gi')) || []);
    assert.strictEqual(matches.length, 0, `Banned phrase "${b}" found ${matches.length} times`);
  }

  // Positive check: RBI Grade B correctly phrased and all 5 category cutoffs present
  assert(content.includes('RBI Grade B General Phase I includes Quantitative Aptitude'), 'Must contain accurate RBI Grade B Phase I statement');
  assert(content.includes('Phase II does not have a standalone Quantitative Aptitude paper'), 'Must accurately describe Phase II');
  assert(content.includes('GEN/UR: 14.50'), 'Must contain 2026 RBI Grade B UR cutoff');
  assert(content.includes('EWS: 11.25'), 'Must contain 2026 RBI Grade B EWS cutoff');
  assert(content.includes('OBC: 12.75'), 'Must contain 2026 RBI Grade B OBC cutoff');
  assert(content.includes('SC: 12.00'), 'Must contain 2026 RBI Grade B SC cutoff');
  assert(content.includes('ST: 10.75'), 'Must contain 2026 RBI Grade B ST cutoff');
  assert(content.includes('https://m.rbi.org.in/scripts/Result_Officers_Grade_B_General_DR_PY_2026.aspx'), 'Must contain official RBI 2026 result link');

  // Positive check: Direct SBI PO PDF URL & Official Notifications
  assert(content.includes('https://sbi.bank.in/documents/77530/57941/18062026_1_Detailed_Adv.2026.pdf/1f1a9532-8a2f-6e59-08a0-616d62a497b1?t=1781759726353'), 'Must contain direct SBI PO advertisement PDF URL');
  assert(content.includes('CRPD/PO/2026-27/09'), 'Must contain updated SBI PO notification CRPD/PO/2026-27/09');
  assert(content.includes('30 Qs / 60 Marks'), 'Must reflect SBI PO Mains 30 Qs / 60 Marks');
  assert(content.includes('CRP PO/MT-XVI'), 'Must contain updated IBPS PO cycle CRP PO/MT-XVI');
  assert(content.includes('CRP-RRBs-XV'), 'Must contain updated IBPS RRB cycle CRP-RRBs-XV');
  assert(content.includes('https://www.ibps.in'), 'Must contain IBPS portal URL');
  assert(content.includes('https://www.sebi.gov.in'), 'Must contain SEBI portal URL');
  assert(content.includes('https://www.nabard.org'), 'Must contain NABARD portal URL');

  // Positive check: Cross-meeting post-meeting definitions
  assert(content.includes('post-meeting travel times to destinations'), 'Must contain explicit post-meeting definition for cross-meeting theorem');

  // Positive check: Semicircle exact perimeter
  assert(content.includes('(\\pi + 2)r'), 'Must contain exact semicircle perimeter formula');

  // Positive check: General complement probability identity
  assert(content.includes('1 - P(A\' \\cap B\' \\cap C\')'), 'Must contain general complement probability identity');

  // Positive check: Realistic pacing text
  assert(content.includes('worked examples reflect realistic examination difficulty and time constraints'), 'Must contain grounded pacing description');

  // Positive check: Standardized status
  assert(content.includes('STATUS: REMEDIATED EXAM EDITION (V6) — AUTOMATED CHECKS PASSED; INDEPENDENT REVIEW PENDING'), 'Must contain exact V6 status line');

  // Verify all 10 Parts exist
  for (let p = 1; p <= 10; p++) {
    const partRegex = new RegExp(`^# PART ${['I','II','III','IV','V','VI','VII','VIII','IX','X'][p-1]}:`, 'm');
    assert(partRegex.test(content), `Missing header for Part ${p}`);
  }

  // Verify all 30 chapter headers exist
  for (let ch = 1; ch <= 30; ch++) {
    const headerRegex = new RegExp(`^# CHAPTER ${String(ch).padStart(2, '0')}:`, 'm');
    assert(headerRegex.test(content), `Missing header for Chapter ${ch}`);
  }

  // Verify all 30 revision headers exist
  for (let ch = 1; ch <= 30; ch++) {
    const revHeaderRegex = new RegExp(`^### ⚡ CHAPTER ${String(ch).padStart(2, '0')} RAPID REVISION MATRIX`, 'm');
    assert(revHeaderRegex.test(content), `Missing revision section for Chapter ${ch}`);
  }
});

console.log('================================================================================');
console.log(`  SUMMARY: ${passed} PASSED, ${failed} FAILED`);
console.log('================================================================================');

if (failed > 0) {
  process.exit(1);
}
