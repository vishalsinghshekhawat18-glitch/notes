const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'notes', 'quantitative_aptitude');

const targets = [
  { file: '05_CHAPTER_04_NUMBER_SYSTEM_DIVISIBILITY_FACTOR_THEORY.md', oldNum: 4, newNum: 5, oldH1: '# CHAPTER 04:', newH1: '# CHAPTER 05: DIVISIBILITY INVARIANTS, PRIME FACTORIZATION & FACTOR THEORY' },
  { file: '06_CHAPTER_05_HCF_LCM_REMAINDER_THEOREMS.md', oldNum: 5, newNum: 6, oldH1: '# CHAPTER 05:', newH1: '# CHAPTER 06: HCF, LCM & MODULAR REMAINDER THEOREMS' },
  { file: '07_CHAPTER_06_UNIT_DIGIT_TRAILING_ZEROS_BASE_SYSTEMS.md', oldNum: 6, newNum: 7, oldH1: '# CHAPTER 06:', newH1: '# CHAPTER 07: UNIT DIGIT CYCLICITY, TENS DIGITS & TRAILING ZEROS' },
  { file: '08_CHAPTER_07_ALGEBRAIC_IDENTITIES_POLYNOMIALS.md', oldNum: 7, newNum: 8, oldH1: '# CHAPTER 07:', newH1: '# CHAPTER 08: ALGEBRAIC IDENTITIES & POLYNOMIAL FACTORIZATION' },
  { file: '09_CHAPTER_08_LINEAR_SYSTEMS_EQUATIONS_WORD_MODELS.md', oldNum: 8, newNum: 9, oldH1: '# CHAPTER 08:', newH1: '# CHAPTER 09: LINEAR SYSTEMS, 2-VARIABLE EQUATIONS & AGE PROGRESSION' },
  { file: '11_CHAPTER_10_PERCENTAGES_BASE_SHIFTS_EXPENDITURE.md', oldNum: 10, newNum: 11, oldH1: '# CHAPTER 10:', newH1: '# CHAPTER 11: PERCENTAGES: BASE SHIFTS & THE CONSTANT PRODUCT AB-RULE' },
  { file: '12_CHAPTER_11_RATIO_PROPORTION_PARTNERSHIP_CHAIN_RULE.md', oldNum: 11, newNum: 12, oldH1: '# CHAPTER 11:', newH1: '# CHAPTER 12: RATIO, PROPORTION, VARIATION & PARTNERSHIP (CAPITAL × TIME)' },
  { file: '13_CHAPTER_12_AVERAGES_WEIGHTED_MEAN_DEVIATION.md', oldNum: 12, newNum: 13, oldH1: '# CHAPTER 12:', newH1: '# CHAPTER 13: AVERAGES, WEIGHTED MEAN & ASSUMED MEAN METHOD' }
];

targets.forEach(t => {
  const filePath = path.join(dir, t.file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace H1
  content = content.replace(/^#\s+CHAPTER\s+\d+:[^\n]+/m, t.newH1);
  
  // Replace ## oldNum.x with ## newNum.x
  const oldRegex = new RegExp(`^##\\s+${t.oldNum}\\.(\\d+)`, 'gm');
  content = content.replace(oldRegex, `## ${t.newNum}.$1`);
  
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${t.file} -> Chapter ${t.newNum}`);
});
