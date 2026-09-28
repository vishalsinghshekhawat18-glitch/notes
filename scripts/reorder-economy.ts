import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(process.cwd(), '03_Indian_Economy_Macro_Master.md');
const content = fs.readFileSync(filePath, 'utf8');

// Parse chapters
const lines = content.split('\n');
const chapters: { title: string; rawTitle: string; content: string[] }[] = [];

let currentChapter: { title: string; rawTitle: string; content: string[] } | null = null;
let preContent: string[] = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.startsWith('## ') && !line.startsWith('## 📑') && !line.startsWith('## Table of Contents') && !line.startsWith('## Volume')) {
    if (currentChapter) {
      chapters.push(currentChapter);
    }
    const rawTitle = line.replace(/^##\s+/, '').trim();
    // Normalize title: remove leading number like "46. "
    const cleanTitle = rawTitle.replace(/^\d+\.\s*/, '').trim();
    currentChapter = { title: cleanTitle, rawTitle, content: [] };
  } else if (currentChapter) {
    currentChapter.content.push(line);
  } else {
    preContent.push(line);
  }
}
if (currentChapter) {
  chapters.push(currentChapter);
}

console.log(`Parsed ${chapters.length} chapters in Economy.`);

// Define target 8 Volumes and exact title matching
const volumePlan: {
  volumeName: string;
  volumeDesc: string;
  chapters: string[];
}[] = [
  {
    volumeName: "Volume I: Micro Foundations & National Income Accounting",
    volumeDesc: "Scarcity, goods classification, circular flow, macroeconomic aggregates (GDP/NDP/GNP/NNP), factor cost vs basic prices, deflators, and calculation methodologies.",
    chapters: [
      "What is Economics? Scarcity, Choice & Opportunity Cost",
      "The 3 Central Problems & Goods Classification Matrix",
      "Circular Flow of Income, Factor Payments & Leakages",
      "GDP, NDP, GNP & NNP Aggregate Ladder",
      "Factor Cost, Market Price & GVA at Basic Prices",
      "Real vs Nominal GDP, GDP Deflator & Green GDP",
      "Methods of Calculating National Income & Sectoral Scrutiny"
    ]
  },
  {
    volumeName: "Volume II: Money, Banking & Financial Architecture",
    volumeDesc: "Evolution of money, supply aggregates (M0–M4), credit creation, RBI central banking, monetary policy transmission, money vs capital markets, regulatory bodies, and NPA management.",
    chapters: [
      "Functions of Money & Evolutionary Arc of Payment Systems",
      "Money Supply Aggregates (M0, M1, M2, M3, M4)",
      "Commercial Banking & Money Creation",
      "Central Banking & RBI Functions",
      "Monetary Policy Instruments: Quantitative vs. Qualitative Tools",
      "Money Market vs. Capital Market Architecture",
      "Capital Market Instruments: Equities, Bonds & Derivatives",
      "Specialized Financial Institutions & DFI Architecture",
      "Financial Regulatory Bodies: SEBI, IRDAI, PFRDA & IFSCA",
      "Basel Accords & Risk-Weighted Asset Framework",
      "Non-Performing Assets (NPAs) & Insolvency Resolution"
    ]
  },
  {
    volumeName: "Volume III: Inflation Dynamics & Macroeconomic Stability",
    volumeDesc: "Demand-pull, cost-push, structural inflation, Phillips curve, CPI vs WPI mechanics, food inflation dynamics, and headline vs core inflation targeting.",
    chapters: [
      "Inflation Mechanics, Types & The Phillips Curve",
      "CPI vs. WPI Inflation Indices & Food Inflation Dynamics"
    ]
  },
  {
    volumeName: "Volume IV: Public Finance & Fiscal Policy",
    volumeDesc: "Union Budget accounting, revenue vs capital accounts, deficit equations (Fiscal, Primary, Effective Revenue), direct & indirect taxation, GST architecture, and FRBM glide paths.",
    chapters: [
      "Union Budget Architecture & Fiscal Deficit Equations",
      "Taxation Architecture: Direct vs. Indirect Taxes & GST",
      "FRBM Act 2003 & Fiscal Consolidation Ladder"
    ]
  },
  {
    volumeName: "Volume V: External Sector, Foreign Trade & Global Institutions",
    volumeDesc: "Balance of Payments current & capital accounts, foreign exchange reserves, exchange rate regimes, rupee convertibility, FDI vs FPI dynamics, and global multilateral institutions.",
    chapters: [
      "Balance of Payments (BoP) & Foreign Exchange Reserves",
      "Exchange Rate Regimes & Rupee Convertibility",
      "Foreign Direct Investment (FDI) & Foreign Portfolio Investment (FPI)",
      "International Economic Institutions: IMF, World Bank, WTO & BRICS Bank"
    ]
  },
  {
    volumeName: "Volume VI: Poverty, Inequality, Employment & Human Development",
    volumeDesc: "Poverty lines (Alagh, Lakdawala, Tendulkar, Rangarajan), NITI Aayog Multi-dimensional Poverty Index, Gini coefficient, PLFS employment metrics, gig economy, and human capital formation.",
    chapters: [
      "What is Poverty? Dimensions, SDG Linkage & Poverty Gap",
      "Absolute vs Relative Poverty & Lorenz Curve / Gini Index",
      "Poverty Measurement in India: Historical & Post-Independent Committees",
      "Tendulkar vs. Rangarajan Committees & NITI Aayog National MPI",
      "Amartya Sen's Capability Approach & Entitlements",
      "Types & Measurement of Unemployment (PLFS / NSO Framework)",
      "The Informal Economy, Gig Economy & PLFS Data Trends",
      "Human Capital Formation: Education, Skill India & Health Index"
    ]
  },
  {
    volumeName: "Volume VII: Productive Sectors, Financial Inclusion & Sustainable Growth",
    volumeDesc: "Land reforms, Green Revolution, MSP & APMC reforms, industrial policy evolution (1948–1991), MSME composite criteria, PSE disinvestment, digital public infrastructure, and ESG green finance.",
    chapters: [
      "Land Reforms & Green Revolution in India",
      "Agriculture Sector & MSP Architecture",
      "Industrial Policies in India: 1948, 1956 Mahalanobis to 1991",
      "MSME Sector Architecture & 2020 Composite Criteria",
      "Public Sector Enterprises & Disinvestment Architecture",
      "Services Sector & India's Digital Public Infrastructure (DPI)",
      "Financial Inclusion Initiatives & Priority Sector Lending Targets",
      "Inclusive Growth, Financial Inclusion & JAM Trinity",
      "Sustainable Development, Climate Economics & Carbon Markets"
    ]
  },
  {
    volumeName: "Volume VIII: Economic Planning, Regional Dynamics & Descriptive Vault",
    volumeDesc: "Evolution from National Planning Committee to Planning Commission and NITI Aayog, Rajasthan economic review and state flagship schemes, and RBI Grade B descriptive issues vault.",
    chapters: [
      "Evolution of Indian Economic Planning: PC to NITI Aayog",
      "RAS Economy Ch 1: Economic Review of Rajasthan & State Flagship Schemes Master Suite",
      "RBI Grade B (ESI) Volume 4: Economic & Social Issues Descriptive Vault"
    ]
  }
];

// Clean chapter content function
function cleanChapterContent(lines: string[]): string[] {
  const result: string[] = [];
  let skippingMetadata = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Detect metadata block start
    if (line.trim().startsWith('**Metadata:**')) {
      skippingMetadata = true;
      continue;
    }

    if (skippingMetadata) {
      if (line.trim().startsWith('- **') || line.trim() === '') {
        continue; // skip metadata bullet points
      } else {
        skippingMetadata = false; // end of metadata block
      }
    }

    // Skip empty or trivial executive summary lines
    if (line.trim().startsWith('> **Executive Summary:**')) {
      continue;
    }
    // Skip empty context hook placeholders
    if (line.trim().startsWith('🪝 Context Hook —') || line.trim().startsWith('🪝 Context Hook:')) {
      continue;
    }
    // Skip itemized verification tags
    if (line.trim().startsWith('🏷️ Itemized Verification Tag') || line.trim().startsWith('- **Coverage Status:**') || line.trim().startsWith('- **Audit Status:**') || line.trim().startsWith('- **Source Unit:**') || line.trim().startsWith('- **Canonical Anchor:**')) {
      continue;
    }

    result.push(line);
  }

  // Remove consecutive blank lines
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

// Map chapters
const chapterMap = new Map<string, { rawTitle: string; content: string[] }>();
for (const ch of chapters) {
  chapterMap.set(ch.title, ch);
}

// Verify coverage
let totalMapped = 0;
const missingNotes: string[] = [];
for (const vol of volumePlan) {
  for (const t of vol.chapters) {
    if (chapterMap.has(t)) {
      totalMapped++;
    } else {
      missingNotes.push(t);
    }
  }
}

console.log(`Total mapped: ${totalMapped} / ${chapters.length}`);
if (missingNotes.length > 0) {
  console.error('Missing chapters:', missingNotes);
  process.exit(1);
}

// Build Output Markdown
const outLines: string[] = [];

outLines.push('# 📈 Indian Economy & Macroeconomic Development: Canonical Master Vault');
outLines.push('');
outLines.push('> **A Comprehensive Pedagogical Reference Book for Civil Services (UPSC CSE, RPSC RAS), Regulatory Bodies (RBI Grade B, NABARD), and Banking Examinations.**');
outLines.push('> Formatted for publication-grade A4 monochrome print reading and active cognitive retention. Zero fluff, 100% rigorous factual, theoretical, and institutional coverage.');
outLines.push('');
outLines.push('---');
outLines.push('');
outLines.push('## 📑 Master Index & Logical Volume Architecture');
outLines.push('');

let globalChapterIndex = 1;

for (let vIdx = 0; vIdx < volumePlan.length; vIdx++) {
  const vol = volumePlan[vIdx];
  outLines.push(`### ${vol.volumeName}`);
  outLines.push(`*${vol.volumeDesc}*`);
  outLines.push('');
  for (const t of vol.chapters) {
    outLines.push(`${globalChapterIndex}. [${t}](#chapter-${globalChapterIndex})`);
    globalChapterIndex++;
  }
  outLines.push('');
}

outLines.push('---');
outLines.push('');

// Now emit volumes and chapters
globalChapterIndex = 1;

for (let vIdx = 0; vIdx < volumePlan.length; vIdx++) {
  const vol = volumePlan[vIdx];
  outLines.push(`\n# ${vol.volumeName}\n`);
  outLines.push(`> ${vol.volumeDesc}\n`);
  outLines.push('---\n');

  for (const t of vol.chapters) {
    const ch = chapterMap.get(t)!;
    outLines.push(`<a id="chapter-${globalChapterIndex}"></a>\n`);
    outLines.push(`## ${globalChapterIndex}. ${t}\n`);

    const cleanedContent = cleanChapterContent(ch.content);
    outLines.push(cleanedContent.join('\n').trim());
    outLines.push('\n\n---\n');
    globalChapterIndex++;
  }
}

fs.writeFileSync(filePath, outLines.join('\n'), 'utf8');
console.log(`Reordered and cleaned Economy successfully! Length: ${fs.readFileSync(filePath, 'utf8').length} chars, lines: ${outLines.join('\n').split('\n').length}`);
