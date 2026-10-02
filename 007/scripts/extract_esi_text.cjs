const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const pdfDir = path.join(process.cwd(), '007', "PDF's");
const outDir = path.join(process.cwd(), '007', 'scripts', 'extracted_esi');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const targetFiles = [
  { name: 'labor_policy.txt', file: 'LABOR_POLICY_FINAL_DOC__1___1__lyst1777358595660.pdf' },
  { name: 'urbanization_migration.txt', file: 'URBANIZATION_AND_MIGRATION__FOR_ESI_2025_BATCH_FINAL_DOC__1__lyst1774601083260.pdf' },
  { name: 'multiculturalism.txt', file: 'MULTICULTURALISM__ESI_26_lyst1775820769044.pdf' },
  { name: 'planning_niti.txt', file: 'PLANNING_COMMISSON_AND_NITI_AAYOG__NEW_FORMAT_UPDATED__FINAL_DOC_updated_on_12_9_25__1__lyst1774865409490.pdf' },
  { name: 'ftp_2023.txt', file: 'FTP_FOR_ESI_2025_FINAL_DOC_lyst1757665633246.pdf' },
  { name: 'sustainable_development.txt', file: 'SUSTAINABLE_DEVELOPMENT_FINAL_DOC__UPDATED_ON_30_9_25___1___1___1__lyst1790593722548.pdf' },
];

async function extract() {
  for (const t of targetFiles) {
    const fullPath = path.join(pdfDir, t.file);
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${t.file}`);
      continue;
    }
    const buf = fs.readFileSync(fullPath);
    try {
      const p = new PDFParse(new Uint8Array(buf));
      await p.load();
      const textObj = await p.getText();
      const text = textObj.text || '';
      fs.writeFileSync(path.join(outDir, t.name), text, 'utf8');
      console.log(`Extracted ${t.name}: ${text.split(/\s+/).filter(Boolean).length} words`);
    } catch (e) {
      console.error(`Error on ${t.file}: ${e.message}`);
    }
  }
}

extract();
