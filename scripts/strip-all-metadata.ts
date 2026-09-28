import * as fs from 'fs';
import * as path from 'path';

function stripMetadataFromMarkdown(content: string): string {
  const lines = content.split('\n');
  const result: string[] = [];
  let skippingMetadata = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Detect metadata block start
    if (line.trim().startsWith('**Metadata:**') || line.trim() === 'Metadata:' || line.trim().startsWith('### Metadata') || line.trim().startsWith('## Metadata')) {
      skippingMetadata = true;
      continue;
    }

    if (skippingMetadata) {
      if (line.trim().startsWith('- **') || line.trim().startsWith('* **') || line.trim().startsWith('• **') || line.trim().startsWith('- Item ID:') || line.trim().startsWith('- Category') || line.trim().startsWith('- Target Exams') || line.trim().startsWith('- Relevance Tier') || line.trim() === '') {
        continue;
      } else {
        skippingMetadata = false;
      }
    }

    // Skip executive summary boilerplate
    if (line.trim().startsWith('> **Executive Summary:**') || line.trim().startsWith('**Executive Summary:**')) {
      continue;
    }

    // Skip context hooks
    if (line.trim().startsWith('🪝 Context Hook —') || line.trim().startsWith('🪝 Context Hook:')) {
      continue;
    }

    // Skip verification tags
    if (line.trim().startsWith('🏷️ Itemized Verification Tag') || line.trim().startsWith('- **Coverage Status:**') || line.trim().startsWith('- **Audit Status:**') || line.trim().startsWith('- **Source Unit:**') || line.trim().startsWith('- **Canonical Anchor:**')) {
      continue;
    }

    result.push(line);
  }

  // Remove excessive consecutive blank lines
  const cleaned: string[] = [];
  let prevBlank = false;
  for (const line of result) {
    const isBlank = line.trim() === '';
    if (isBlank && prevBlank) continue;
    cleaned.push(line);
    prevBlank = isBlank;
  }

  return cleaned.join('\n');
}

const targetFiles = [
  '01_UPSC_APFC_EPFO_Master.md',
  '02_IIBF_Banking_Regulations_Master.md',
  '03_Indian_Economy_Macro_Master.md',
  '05_Polity_Governance_Master.md',
  '07_Geography_Environment_Master.md',
  '08_Science_BioTech_Master.md',
  '09_Agriculture_Rural_Development_Master.md',
  '10_Rapid_Revision_Traps_Master.md',
  '11_Computer_Aptitude_Banking_Master.md',
  '15_Previous_Year_Questions_Master.md',
  'English_Descriptive_Writing_Master.md',
  'Government_Schemes_Master.md',
  'History_Culture_Master.md',
  'Quant_Reasoning_Master.md',
  'Static_GA_Superbook_Master.md'
];

for (const file of targetFiles) {
  if (fs.existsSync(file)) {
    const original = fs.readFileSync(file, 'utf8');
    const stripped = stripMetadataFromMarkdown(original);
    if (stripped !== original) {
      fs.writeFileSync(file, stripped, 'utf8');
      console.log(`Cleaned metadata from: ${file} (saved ${original.length - stripped.length} chars)`);
    } else {
      console.log(`Already clean: ${file}`);
    }
  }
}
