import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(process.cwd(), 'English_Descriptive_Writing_Master.md');
const content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');

// Helper to clean boilerplate
function cleanSectionContent(rawLines: string[]): string[] {
  const result: string[] = [];
  let skippingMetadata = false;

  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i];

    if (line.trim().startsWith('**Metadata:**')) {
      skippingMetadata = true;
      continue;
    }

    if (skippingMetadata) {
      if (line.trim().startsWith('- **') || line.trim() === '') {
        continue;
      } else {
        skippingMetadata = false;
      }
    }

    if (line.trim().startsWith('> **Executive Summary:**')) continue;
    if (line.trim().startsWith('🪝 Context Hook —') || line.trim().startsWith('🪝 Context Hook:')) continue;
    if (line.trim().startsWith('🏷️ Itemized Verification Tag') || line.trim().startsWith('- **Coverage Status:**') || line.trim().startsWith('- **Audit Status:**') || line.trim().startsWith('- **Source Unit:**') || line.trim().startsWith('- **Canonical Anchor:**')) continue;

    // Also strip duplicated top-level headers like "# MASTER NOTEBOOK: DESCRIPTIVE WRITING & DISCOURSE ANALYSIS"
    if (line.trim().startsWith('# MASTER NOTEBOOK: DESCRIPTIVE WRITING') || line.trim().startsWith('# Descriptive Writing Master Knowledge Engine')) continue;
    if (line.trim().startsWith('### *Target Exams: RBI Grade B')) continue;

    result.push(line);
  }

  const cleaned: string[] = [];
  let prevBlank = false;
  for (const line of result) {
    const isBlank = line.trim() === '';
    if (isBlank && prevBlank) continue;
    cleaned.push(line);
    prevBlank = isBlank;
  }

  return cleaned;
}

// Slice out chapters based on their heading regex
interface SectionBlock {
  key: string;
  title: string;
  lines: string[];
}

// Extract the 20 main numbered sections and the embedded Tiers 6, 7, 8
// Let's find line numbers of major section headings
const headingMatches: { key: string; lineIdx: number; title: string }[] = [];

for (let i = 0; i < lines.length; i++) {
  const l = lines[i];
  if (l.match(/^##\s+1\.\s+50 High-Yield/)) headingMatches.push({ key: 'ch1', lineIdx: i, title: '50 High-Yield Model Essay Blueprints (Bank PO, RBI & NABARD)' });
  else if (l.match(/^##\s+2\.\s+120 Golden Grammar/)) headingMatches.push({ key: 'ch2', lineIdx: i, title: '120 Golden Grammar Rules & Error Spotting Diagnostic Suite' });
  else if (l.match(/^##\s+3\.\s+Bank PO Rapid Précis/)) headingMatches.push({ key: 'ch3', lineIdx: i, title: 'Bank PO Rapid Précis Writing & Subjective RC Benchmark Vault' });
  else if (l.match(/^##\s+4\.\s+Bank PO Top 1%/)) headingMatches.push({ key: 'ch4', lineIdx: i, title: 'Bank PO Top 1% Benchmark Essays Vault (SBI PO & IBPS PO Mains)' });
  else if (l.match(/^##\s+5\.\s+Bank PO Workplace Letters/)) headingMatches.push({ key: 'ch5', lineIdx: i, title: 'Bank PO Workplace Letters, Official Emails & Incident Memos Vault' });
  else if (l.match(/^##\s+6\.\s+Descriptive Writing Masterbook — Tier 1/)) headingMatches.push({ key: 'ch6_tier1', lineIdx: i, title: 'Tier 1: Exam Blueprints & Scoring Rubrics' });
  else if (l.match(/^##\s+7\.\s+Descriptive Writing Masterbook — Tier 2/)) headingMatches.push({ key: 'ch7_tier2', lineIdx: i, title: 'Tier 2: Discourse Mechanics & Structural Mastery' });
  else if (l.match(/^##\s+8\.\s+Descriptive Writing Masterbook — Tier 3/)) headingMatches.push({ key: 'ch8_tier3', lineIdx: i, title: 'Tier 3: Component-Wise Masterclasses (Essay, Précis, Letter, Report)' });
  else if (l.match(/^##\s+9\.\s+Descriptive Writing Masterbook — Tier 4/)) headingMatches.push({ key: 'ch9_tier4', lineIdx: i, title: 'Tier 4: Thematic Essay Fodder & PYQ Dossiers' });
  else if (l.match(/^##\s+10\.\s+Descriptive Writing Masterbook — Tier 5/)) headingMatches.push({ key: 'ch10_tier5', lineIdx: i, title: 'Tier 5: Arsenal of Value Additions & F.A.C.T.S. Vault' });
  else if (l.match(/^##\s+TIER 6:\s+MODEL EXAMPLARS/)) headingMatches.push({ key: 'tier6', lineIdx: i, title: 'Tier 6: Model Exemplars & Before-vs-After Transformations' });
  else if (l.match(/^##\s+TIER 7:\s+THE 30-DAY PROGRESSIVE/)) headingMatches.push({ key: 'tier7', lineIdx: i, title: 'Tier 7: The 30-Day Progressive Master Training Blueprint' });
  else if (l.match(/^##\s+TIER 8:\s+OBJECTIVE SELF-EVALUATION/)) headingMatches.push({ key: 'tier8', lineIdx: i, title: 'Tier 8: Objective Self-Evaluation Scoring Engine & Deduction Calculator' });
  else if (l.match(/^##\s+11\.\s+Descriptive Writing Sources/)) headingMatches.push({ key: 'ch11', lineIdx: i, title: 'Descriptive Writing Sources, Syllabus Framework & Pedagogical Bibliography' });
  else if (l.match(/^##\s+12\.\s+Formal Correspondence/)) headingMatches.push({ key: 'ch12', lineIdx: i, title: 'Formal Correspondence & Banking Ombudsman Representations' });
  else if (l.match(/^##\s+13\.\s+Formal Economic/)) headingMatches.push({ key: 'ch13', lineIdx: i, title: 'Formal Economic, Banking & Branch Inspection Report Writing' });
  else if (l.match(/^##\s+14\.\s+High-Yield Banking/)) headingMatches.push({ key: 'ch14', lineIdx: i, title: 'High-Yield Banking, Macroeconomic & Legal Vocabulary Bank' });
  else if (l.match(/^##\s+15\.\s+Introduction Hooks/)) headingMatches.push({ key: 'ch15', lineIdx: i, title: 'Introduction Hooks, Thesis Blueprints & Circular Callbacks' });
  else if (l.match(/^##\s+16\.\s+Para Jumbles/)) headingMatches.push({ key: 'ch16', lineIdx: i, title: 'Para Jumbles & Sentence Rearrangement Algorithms' });
  else if (l.match(/^##\s+17\.\s+Precis Writing Masterclass/)) headingMatches.push({ key: 'ch17', lineIdx: i, title: 'Precis Writing Masterclass — The 1/3rd Rule, Word-Budget & Titling Strategy' });
  else if (l.match(/^##\s+18\.\s+RBI Grade B & Bank PO Volume 5/)) headingMatches.push({ key: 'ch18', lineIdx: i, title: 'RBI Grade B & Bank PO Volume 5: Macro Policy & Philosophical Essays Vault' });
  else if (l.match(/^##\s+19\.\s+Reading Comprehension/)) headingMatches.push({ key: 'ch19', lineIdx: i, title: 'Reading Comprehension & Critical Reasoning Strategies' });
  else if (l.match(/^##\s+20\.\s+The 250-Word/)) headingMatches.push({ key: 'ch20', lineIdx: i, title: 'The 250-Word / 18-Min Descriptive Essay Masterclass' });
}

console.log(`Matched ${headingMatches.length} section blocks.`);

// Slice content into blocks
const blocksMap = new Map<string, { key: string; title: string; lines: string[] }>();
for (let i = 0; i < headingMatches.length; i++) {
  const current = headingMatches[i];
  const nextIdx = i < headingMatches.length - 1 ? headingMatches[i + 1].lineIdx : lines.length;
  // Exclude the header line itself because we will generate clean new headers
  const blockLines = lines.slice(current.lineIdx + 1, nextIdx);

  // If ch6_tier1 has the redundant internal table of contents before ## TIER 1, strip that out
  let finalBlockLines = blockLines;
  if (current.key === 'ch6_tier1') {
    const tier1Idx = blockLines.findIndex(l => l.startsWith('## TIER 1:'));
    if (tier1Idx !== -1) {
      finalBlockLines = blockLines.slice(tier1Idx + 1);
    }
  } else if (current.key === 'ch7_tier2') {
    const tier2Idx = blockLines.findIndex(l => l.startsWith('## TIER 2:'));
    if (tier2Idx !== -1) {
      finalBlockLines = blockLines.slice(tier2Idx + 1);
    }
  } else if (current.key === 'ch8_tier3') {
    const tier3Idx = blockLines.findIndex(l => l.startsWith('## TIER 3:'));
    if (tier3Idx !== -1) {
      finalBlockLines = blockLines.slice(tier3Idx + 1);
    }
  } else if (current.key === 'ch9_tier4') {
    const tier4Idx = blockLines.findIndex(l => l.startsWith('## TIER 4:'));
    if (tier4Idx !== -1) {
      finalBlockLines = blockLines.slice(tier4Idx + 1);
    }
  } else if (current.key === 'ch10_tier5') {
    const tier5Idx = blockLines.findIndex(l => l.startsWith('## TIER 5:'));
    if (tier5Idx !== -1) {
      finalBlockLines = blockLines.slice(tier5Idx + 1);
    }
  }

  blocksMap.set(current.key, {
    key: current.key,
    title: current.title,
    lines: cleanSectionContent(finalBlockLines)
  });
}

// 5 Coherent Volumes Plan
const volumePlan = [
  {
    volumeName: "Volume I: Foundational Grammar, Lexicon & Objective Discourse",
    volumeDesc: "120 Golden Rules of Grammar, subject-verb agreement, inversion, high-yield banking/legal vocabulary bank, para jumble algorithms, and editorial reading comprehension.",
    chapters: [
      { key: 'ch2', title: '120 Golden Grammar Rules & Error Spotting Diagnostic Suite' },
      { key: 'ch14', title: 'High-Yield Banking, Macroeconomic & Legal Vocabulary Bank' },
      { key: 'ch16', title: 'Para Jumbles & Sentence Rearrangement Algorithms' },
      { key: 'ch19', title: 'Reading Comprehension & Critical Reasoning Strategies' }
    ]
  },
  {
    volumeName: "Volume II: Descriptive Strategy, Discourse Mechanics & Component Mastery",
    volumeDesc: "Harmonized examination blueprints (RBI vs NABARD vs Bank PO), scoring rubrics, typing hygiene, IBC macro-framework, PEEL paragraphing, and component blueprints (Essay, Précis, Letter, Report).",
    chapters: [
      { key: 'ch6_tier1', title: 'Tier 1: Exam Blueprints, Scoring Rubrics & TCS iON Hygiene' },
      { key: 'ch7_tier2', title: 'Tier 2: Discourse Mechanics, Sentence Architecture & Structural Mastery' },
      { key: 'ch8_tier3', title: 'Tier 3: Component-Wise Masterclasses (Essay, Précis, Letter & Report)' }
    ]
  },
  {
    volumeName: "Volume III: Writing Laboratory: Techniques, Formats & Micro-Skills",
    volumeDesc: "The 250-word / 18-minute essay protocol, opening hooks and circular callbacks laboratory, 1/3rd précis word-budgeting, formal banking letters, and official branch inspection reports.",
    chapters: [
      { key: 'ch20', title: 'The 250-Word / 18-Minute Descriptive Essay Masterclass' },
      { key: 'ch15', title: 'Introduction Hooks, Thesis Blueprints & Circular Callbacks Laboratory' },
      { key: 'ch17', title: 'Precis Writing Masterclass — The 1/3rd Rule, Word-Budget & Titling Strategy' },
      { key: 'ch12', title: 'Formal Correspondence & Banking Ombudsman Representations' },
      { key: 'ch13', title: 'Formal Economic, Banking & Branch Inspection Report Writing' }
    ]
  },
  {
    volumeName: "Volume IV: Thematic Knowledge Fodder, Value Additions & Training Blueprint",
    volumeDesc: "5-Year PYQ dossiers across macroeconomics, fintech, and agriculture; quotes and statistical anchors; model transformations; 30-day training progression; and 100-point evaluator scorecard.",
    chapters: [
      { key: 'ch9_tier4', title: 'Tier 4: Thematic Essay Fodder & 5-Year PYQ Dossiers' },
      { key: 'ch10_tier5', title: 'Tier 5: Arsenal of Value Additions, Quotes & F.A.C.T.S. Vault' },
      { key: 'tier6', title: 'Tier 6: Model Exemplars & Before-vs-After Transformations' },
      { key: 'tier7', title: 'Tier 7: The 30-Day Progressive Master Training Blueprint' },
      { key: 'tier8', title: 'Tier 8: Objective Self-Evaluation Scoring Engine & Deduction Calculator' }
    ]
  },
  {
    volumeName: "Volume V: Benchmark Model Exemplars & Archival Vaults",
    volumeDesc: "Authentic benchmark essays for SBI/IBPS PO Mains, 50 full high-yield model essay blueprints, RBI Grade B macro/philosophical essays, rapid précis vault, workplace letters, and master bibliography.",
    chapters: [
      { key: 'ch4', title: 'Bank PO Top 1% Benchmark Essays Vault (SBI PO & IBPS PO Mains)' },
      { key: 'ch1', title: '50 High-Yield Model Essay Blueprints (Bank PO, RBI & NABARD)' },
      { key: 'ch18', title: 'RBI Grade B & Bank PO Volume 5: Macro Policy & Philosophical Essays Vault' },
      { key: 'ch3', title: 'Bank PO Rapid Précis Writing & Subjective RC Benchmark Vault' },
      { key: 'ch5', title: 'Bank PO Workplace Letters, Official Emails & Incident Memos Vault' },
      { key: 'ch11', title: 'Descriptive Writing Sources, Syllabus Framework & Pedagogical Bibliography' }
    ]
  }
];

// Check all keys
let totalChs = 0;
for (const v of volumePlan) {
  for (const c of v.chapters) {
    if (blocksMap.has(c.key)) {
      totalChs++;
    } else {
      console.error(`Missing key: ${c.key}`);
    }
  }
}
console.log(`Total mapped chapters: ${totalChs} / ${headingMatches.length}`);

// Generate Output Markdown
const outLines: string[] = [];
outLines.push('# ✍️ English Language & Descriptive Writing: Canonical Master Vault');
outLines.push('');
outLines.push('> **A Comprehensive Pedagogical Reference Book for Regulatory Bodies (RBI Grade B, NABARD Grade A, SEBI), Banking (SBI PO, IBPS PO Mains), and Civil Services (UPSC, State PSCs).**');
outLines.push('> Rigorous coverage of grammar rules, vocabulary, discourse analysis, essay architecture, précis distillation, official correspondence, and complete benchmark exemplars.');
outLines.push('');
outLines.push('---');
outLines.push('');
outLines.push('## 📑 Master Index & Logical Volume Architecture');
outLines.push('');

let globalIdx = 1;
for (const vol of volumePlan) {
  outLines.push(`### ${vol.volumeName}`);
  outLines.push(`*${vol.volumeDesc}*`);
  outLines.push('');
  for (const c of vol.chapters) {
    outLines.push(`${globalIdx}. [${c.title}](#chapter-${globalIdx})`);
    globalIdx++;
  }
  outLines.push('');
}

outLines.push('---');
outLines.push('');

globalIdx = 1;
for (const vol of volumePlan) {
  outLines.push(`\n# ${vol.volumeName}\n`);
  outLines.push(`> ${vol.volumeDesc}\n`);
  outLines.push('---\n');

  for (const c of vol.chapters) {
    const block = blocksMap.get(c.key)!;
    outLines.push(`<a id="chapter-${globalIdx}"></a>\n`);
    outLines.push(`## ${globalIdx}. ${c.title}\n`);

    outLines.push(block.lines.join('\n').trim());
    outLines.push('\n\n---\n');
    globalIdx++;
  }
}

fs.writeFileSync(filePath, outLines.join('\n'), 'utf8');
console.log(`Reordered and cleaned English successfully! Length: ${fs.readFileSync(filePath, 'utf8').length} chars, lines: ${outLines.join('\n').split('\n').length}`);
