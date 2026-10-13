const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('================================================================================');
console.log('  MIND OF ARAVALLI — SHELF 007 QUANTITATIVE APTITUDE REGRESSION SUITE V3');
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
runTest('TEST 01: Operator Precedence (BODMAS vs "Of")', () => {
  // Equal precedence left to right
  assert.strictEqual((20 / 5) * 2, 8);
  // "Of" exam grouping priority
  assert.strictEqual(20 / (5 * 2), 2);
  // Chained division left to right
  assert.strictEqual(((180 / 15) / 3) * 4, 16);
});

// TEST 02: Modulo-100 Power Cyclicity
runTest('TEST 02: Modulo-100 Boundary (k >= 2 constraint)', () => {
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

// TEST 03: Quadratic Root Comparison Counterexample
runTest('TEST 03: Quadratic Root Comparison Counterexample', () => {
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

// TEST 04: Quadratic Negative Constant CND Invariant
runTest('TEST 04: Quadratic Negative Constant CND Invariant', () => {
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

// TEST 05: Rhombus Pythagorean Integrity
runTest('TEST 05: Rhombus Pythagorean Integrity (32, 126, 65)', () => {
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

// TEST 06: Dishonest Dealer Universal Multiplier
runTest('TEST 06: Dishonest Dealer Universal Multiplier', () => {
  const markup = 1.2;
  const discount = 0.9;
  const weightMultiplier = 1000 / 800; // 1.25
  const netMultiplier = markup * discount * weightMultiplier;
  assert.strictEqual(netMultiplier, 1.35); // 35% profit
});

// TEST 07: Semicircle Perimeter & Solid Hemisphere TSA
runTest('TEST 07: Semicircle Perimeter & Solid Hemisphere TSA', () => {
  const r_semi = 14;
  const p_semi = (36 / 7) * r_semi;
  assert.strictEqual(p_semi, 72);

  const r_hemi = 7;
  const tsa_hemi = 3 * (22 / 7) * r_hemi * r_hemi;
  assert.strictEqual(tsa_hemi, 462);
});

// TEST 08: Kinematic Meeting Speed Ratio & Time
runTest('TEST 08: Kinematic Meeting Speed Ratio & Time', () => {
  const TA = 4, TB = 9;
  const speedRatio = Math.sqrt(TB / TA);
  const t_meet = Math.sqrt(TA * TB);
  assert.strictEqual(speedRatio, 1.5);
  assert.strictEqual(t_meet, 6);
});

// TEST 09: CI-SI Difference Ratio (D3/D2 = 3 + R/100)
runTest('TEST 09: CI-SI Difference Ratio (D3/D2 = 3 + R/100)', () => {
  const P = 10000;
  const R = 10;
  const D2 = Math.round(P * Math.pow(R / 100, 2));
  assert.strictEqual(D2, 100);

  const D3 = 310;
  const ratio = +(D3 / D2).toFixed(2);
  assert.strictEqual(ratio, 3 + R / 100);
});

// TEST 10: Repeated Dilution Conservation Invariant
runTest('TEST 10: Repeated Dilution Conservation Invariant', () => {
  const V = 100;
  const x = 20;
  const n = 2;
  const Q_final = Math.round(V * Math.pow(1 - x / V, n));
  assert.strictEqual(Q_final, 64);
});

// TEST 11: Quadratic Sign Table Root Invariant (Algebraic Value vs Absolute Magnitude)
runTest('TEST 11: Quadratic Sign Table Root Invariant (x^2 + 2x - 3 = 0)', () => {
  // Equation: x^2 + 2x - 3 = 0 (b = 2 > 0, c = -3 < 0)
  // Roots are x = 1 and x = -3
  const a = 1, b = 2, c = -3;
  const D = b * b - 4 * a * c; // 4 - 4(1)(-3) = 16 > 0
  assert(D > 0);
  const r1 = (-b + Math.sqrt(D)) / (2 * a); // 1
  const r2 = (-b - Math.sqrt(D)) / (2 * a); // -3

  // On the real number line, r1 is algebraically greater:
  assert(r1 > r2); // 1 > -3
  // In terms of absolute magnitude, |r2| is larger:
  assert(Math.abs(r2) > Math.abs(r1)); // |-3| = 3 > 1
});

// TEST 12: Quadratic Real Root Existence Condition (D >= 0)
runTest('TEST 12: Quadratic Real Root Existence Condition (x^2 + x + 1 = 0)', () => {
  // Equation: x^2 + x + 1 = 0
  const a = 1, b = 1, c = 1;
  const D = b * b - 4 * a * c; // 1 - 4 = -3 < 0
  assert(D < 0);
  // Shows that sign table (+, +) row requires D >= 0 for real roots to exist
});

// TEST 13: Number Series Practice Q8 (Cube Difference Sequence)
runTest('TEST 13: Number Series Practice Q8 (10, 18, 45, 110, 234, 450)', () => {
  const expectedCubes = [8, 27, 64, 125, 216]; // 2^3, 3^3, 4^3, 5^3, 6^3
  const correctSeries = [10];
  for (let i = 0; i < expectedCubes.length; i++) {
    correctSeries.push(correctSeries[i] + expectedCubes[i]);
  }
  // Expected: [10, 18, 45, 109, 234, 450]
  assert.deepStrictEqual(correctSeries, [10, 18, 45, 109, 234, 450]);

  // Given problem had 110 instead of 109:
  const given = [10, 18, 45, 110, 234, 450];
  const diffs = [];
  for (let i = 0; i < given.length - 1; i++) {
    diffs.push(given[i+1] - given[i]);
  }
  // Diffs: [8, 27, 65, 124, 216] -> 65 and 124 corrupted! Error pivots on term 4 (110).
  assert.strictEqual(diffs[2], 65);
  assert.strictEqual(diffs[3], 124);
  assert.strictEqual(given[3], 110); // Wrong term is 110!
});

// TEST 14: Number Series Practice Q10 (Second Differences)
runTest('TEST 14: Number Series Practice Q10 (120, 117, 110, 97, 76, 44 or 24)', () => {
  // Terms: 120, 117, 110, 97, 76, 56, 25
  // D1: -3, -7, -13, -21, -31
  // D2: -4, -6, -8, -10
  const d2 = [-4, -6, -8, -10];
  let currD1 = -3;
  let term = 120;
  const terms = [term];
  for (let i = 0; i < d2.length; i++) {
    term += currD1;
    terms.push(term);
    currD1 += d2[i];
  }
  term += currD1;
  terms.push(term);
  // Expected series: 120, 117, 110, 97, 76, 45 (or with -20: 56, 25)
  // In Q10: 120, 117, 110, 97, 76, 56 -> next term expected is 56 - 31 = 25, wrong term is 24!
  assert.strictEqual(56 - 31, 25);
  assert.notStrictEqual(24, 25);
});

// TEST 15: Number Series Multi-Difference Hierarchy (14, 29, 52, 85, 130)
runTest('TEST 15: Number Series Multi-Difference Hierarchy (14, 29, 52, 85, 130)', () => {
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

// TEST 16: Data Sufficiency Master Determination Rule
runTest('TEST 16: Data Sufficiency Determination Rule Verification', () => {
  // Value question requires UNIQUE value:
  const rootsAmbiguous = [-5, 5];
  assert.strictEqual(rootsAmbiguous.length > 1, true); // Multiple values -> Not sufficient

  const rootUnique = [5];
  assert.strictEqual(rootUnique.length === 1, true); // Unique value -> Sufficient

  // Binary question requires definite Yes OR definite No:
  const outcomesYes = ['YES', 'YES', 'YES'];
  const isDefiniteYes = outcomesYes.every(o => o === 'YES');
  assert.strictEqual(isDefiniteYes, true); // Definite YES -> Sufficient

  const outcomesNo = ['NO', 'NO', 'NO'];
  const isDefiniteNo = outcomesNo.every(o => o === 'NO');
  assert.strictEqual(isDefiniteNo, true); // Definite NO -> Sufficient

  const outcomesAmbiguous = ['YES', 'NO'];
  const isAmbiguous = outcomesAmbiguous.includes('YES') && outcomesAmbiguous.includes('NO');
  assert.strictEqual(isAmbiguous, true); // Ambiguous -> Not sufficient
});

// TEST 17: Structural Heading and Banned Phrase Sanitation Gate
runTest('TEST 17: Structural Heading and Banned Phrase Sanitation Gate', () => {
  const bookPath = path.resolve('007/QUANTITATIVE_APTITUDE_MASTER_BOOK_FINAL_V3.md');
  assert(fs.existsSync(bookPath), 'V3 book file must exist');
  const content = fs.readFileSync(bookPath, 'utf-8');

  // Verify zero occurrences of banned phrases
  const banned = [
    'INDEPENDENTLY AUDITED',
    '100% verified',
    '100% certified',
    'every formula proven',
    'every trap disarmed',
    '5 guaranteed marks',
    'guaranteed 5 marks',
    'guaranteed marks',
    'RBI Grade B Phase II'
  ];

  for (const b of banned) {
    const matches = (content.match(new RegExp(b, 'gi')) || []);
    assert.strictEqual(matches.length, 0, `Banned phrase "${b}" found ${matches.length} times`);
  }

  // Verify all 30 chapter headers exist
  for (let ch = 1; ch <= 30; ch++) {
    const headerRegex = new RegExp(`^# CHAPTER ${String(ch).padStart(2, '0')}:`, 'm');
    assert(headerRegex.test(content), `Missing header for Chapter ${ch}`);
  }
});

console.log('================================================================================');
console.log(`  SUMMARY: ${passed} PASSED, ${failed} FAILED`);
console.log('================================================================================');

if (failed > 0) {
  process.exit(1);
}
