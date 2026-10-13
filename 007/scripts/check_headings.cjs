const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'notes', 'quantitative_aptitude');

const mapping = [
  { file: '05_CHAPTER_04_NUMBER_SYSTEM_DIVISIBILITY_FACTOR_THEORY.md', ch: 5, oldPrefix: '4.' },
  { file: '06_CHAPTER_05_HCF_LCM_REMAINDER_THEOREMS.md', ch: 6, oldPrefix: '5.' },
  { file: '07_CHAPTER_06_UNIT_DIGIT_TRAILING_ZEROS_BASE_SYSTEMS.md', ch: 7, oldPrefix: '6.' },
  { file: '08_CHAPTER_07_ALGEBRAIC_IDENTITIES_POLYNOMIALS.md', ch: 8, oldPrefix: '7.' },
  { file: '09_CHAPTER_08_LINEAR_SYSTEMS_EQUATIONS_WORD_MODELS.md', ch: 9, oldPrefix: '8.' },
  { file: '11_CHAPTER_10_PERCENTAGES_BASE_SHIFTS_EXPENDITURE.md', ch: 11, oldPrefix: '10.' },
  { file: '12_CHAPTER_11_RATIO_PROPORTION_PARTNERSHIP_CHAIN_RULE.md', ch: 12, oldPrefix: '11.' },
  { file: '13_CHAPTER_12_AVERAGES_WEIGHTED_MEAN_DEVIATION.md', ch: 13, oldPrefix: '12.' },
  { file: '14_CHAPTER_13_PROFIT_LOSS_DISCOUNT_DISHONEST_DEALER.md', ch: 14, oldPrefix: 'num' },
  { file: '15_CHAPTER_14_SIMPLE_INTEREST_VARIABLE_RATES_INSTALLMENTS.md', ch: 15, oldPrefix: 'num' },
  { file: '16_CHAPTER_15_COMPOUND_INTEREST_COMPOUNDING_INTERVALS_AMORTIZATION.md', ch: 16, oldPrefix: 'num' },
  { file: '17_CHAPTER_16_MIXTURE_ALLIGATION_REPEATED_DILUTION.md', ch: 17, oldPrefix: 'num' },
  { file: '18_CHAPTER_17_TIME_WORK_EFFICIENCY_ALTERNATE_DAYS.md', ch: 18, oldPrefix: 'num' },
  { file: '19_CHAPTER_18_PIPES_CISTERNS_LEAKAGE_NEGATIVE_WORK.md', ch: 19, oldPrefix: 'num' },
  { file: '20_CHAPTER_19_TIME_SPEED_DISTANCE_RELATIVE_AVERAGE.md', ch: 20, oldPrefix: 'num' },
  { file: '21_CHAPTER_20_TRAINS_BOATS_ESCALATORS_RACES.md', ch: 21, oldPrefix: 'num' },
  { file: '22_CHAPTER_21_2D_MENSURATION_GEOMETRY_TRIANGLES_CIRCLES_POLYGONS.md', ch: 22, oldPrefix: 'num' },
  { file: '23_CHAPTER_22_3D_MENSURATION_SOLIDS_CROSS_SECTIONS.md', ch: 23, oldPrefix: 'num' },
  { file: '24_CHAPTER_23_PERMUTATIONS_COMBINATIONS_DISTRIBUTION_THEORY.md', ch: 24, oldPrefix: 'num' },
  { file: '25_CHAPTER_24_PROBABILITY_BAYES_ODDS_DISTRIBUTIONS.md', ch: 25, oldPrefix: 'num' },
  { file: '26_CHAPTER_25_DATA_INTERPRETATION_TABLES_GRAPHS_CASELETS.md', ch: 26, oldPrefix: 'num' },
  { file: '27_CHAPTER_26_DATA_SUFFICIENCY_ANALYTICAL_DECISION_LOGIC.md', ch: 28, oldPrefix: 'num' },
  { file: '27A_CHAPTER_26A_QUANTITY_COMPARISON_Q1_Q2_Q3.md', ch: 29, oldPrefix: 'num' },
  { file: '28_CHAPTER_27_GRAND_SYNTHESIS_MASTER_TRAP_VAULT.md', ch: 30, oldPrefix: 'num' }
];

mapping.forEach(m => {
  const c = fs.readFileSync(path.join(dir, m.file), 'utf-8');
  const h2s = (c.match(/^##\s+[^\n]+/gm) || []);
  console.log(`Ch ${m.ch} (${m.file}): ${h2s.length} h2s`);
  h2s.forEach(h => console.log('   ' + h));
});
