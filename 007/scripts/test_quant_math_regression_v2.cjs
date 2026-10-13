const assert = require('assert');

console.log('================================================================================');
console.log('  MIND OF ARAVALLI — SHELF 007 QUANTITATIVE APTITUDE REGRESSION SUITE V2');
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
  // For any two quadratics with positive leading coeff and negative constant:
  // Root products are negative -> each has one positive and one negative root.
  // Straddling around zero guarantees CND.
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
  // Since x1 > y2 but x2 < y1, neither x > y nor y > x can hold.
});

// TEST 05: Rhombus Pythagorean Integrity
runTest('TEST 05: Rhombus Pythagorean Integrity (32, 126, 65)', () => {
  const d1 = 32;
  const area = 2016;
  const d2 = (2 * area) / d1; // 126
  assert.strictEqual(d2, 126);

  const halfD1 = d1 / 2; // 16
  const halfD2 = d2 / 2; // 63
  const side = Math.sqrt(halfD1 * halfD1 + halfD2 * halfD2); // sqrt(256 + 3969) = sqrt(4225) = 65
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
  // D2 = P * (R/100)^2 = 10000 * 0.01 = 100
  const D2 = Math.round(P * Math.pow(R / 100, 2));
  assert.strictEqual(D2, 100);

  // CI for 3 yrs: 10000 * (1.1^3 - 1) = 3310
  // SI for 3 yrs: 10000 * 0.1 * 3 = 3000
  // D3 = 3310 - 3000 = 310
  const D3 = 310;
  const ratio = +(D3 / D2).toFixed(2); // 3.1
  assert.strictEqual(ratio, 3 + R / 100);
});

// TEST 10: Repeated Dilution Conservation Invariant
runTest('TEST 10: Repeated Dilution Conservation Invariant', () => {
  const V = 100;
  const x = 20;
  const n = 2;
  const Q_final = Math.round(V * Math.pow(1 - x / V, n));
  assert.strictEqual(Q_final, 64); // 100 * 0.8^2 = 64
});

console.log('================================================================================');
console.log(`  SUMMARY: ${passed} PASSED, ${failed} FAILED`);
console.log('================================================================================');

if (failed > 0) {
  process.exit(1);
}
