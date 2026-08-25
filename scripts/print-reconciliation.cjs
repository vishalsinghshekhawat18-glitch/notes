const fs = require('fs');
const path = require('path');

const report = JSON.parse(fs.readFileSync(path.join(__dirname, 'reconciliation-report.json'), 'utf8'));

console.log('--- RECONCILIATION DETAILS ---');
report.reconciliationSample.forEach((item, idx) => {
  console.log(`\n[${idx + 1}] ${item.classification}`);
  console.log(`Source:   ${item.sourceObs}`);
  console.log(`Database: ${item.existingSemanticUnit}`);
  console.log(`Notes:    ${item.notes}`);
});
