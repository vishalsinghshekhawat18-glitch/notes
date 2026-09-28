import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(process.cwd(), 'Quant_Reasoning_Master.md');
const content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');
const items: { id: string; rawTitle: string; content: string[] }[] = [];

let currentItem: { id: string; rawTitle: string; content: string[] } | null = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.startsWith('## ') && !line.startsWith('## 📑') && !line.startsWith('## Table of Contents') && !line.startsWith('## Volume')) {
    if (currentItem) {
      items.push(currentItem);
    }
    const rawTitle = line.replace(/^##\s+/, '').trim();
    currentItem = { id: '', rawTitle, content: [] };
  } else if (currentItem) {
    if (line.includes('- **Item ID:**')) {
      currentItem.id = line.replace(/.*- \*\*Item ID:\*\*\s*`?([^`\n]+)`?.*/, '$1').trim();
    }
    currentItem.content.push(line);
  }
}
if (currentItem) {
  items.push(currentItem);
}

function cleanContent(lines: string[]): string[] {
  const result: string[] = [];
  let skippingMetadata = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

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

const itemMap = new Map<string, { id: string; rawTitle: string; content: string[] }>();
for (const it of items) {
  itemMap.set(it.id, it);
}

const modules = [
  {
    moduleNum: 1,
    title: "Arithmetic Mastery: Work, Time-Speed-Distance, Alligation & Interest",
    desc: "Unitary LCM models, negative work/pipes, relative speeds, circular tracks, escalators, multi-vessel repeated alligation, and compound interest shifts.",
    sections: [
      { id: "migrated-quant-qsec2-1", subTitle: "Core Foundations & Standard Models" },
      { id: "migrated-quant-qsec2-2", subTitle: "Advanced Shortcuts: LCM Models, Alligation & Dynamic Rates" },
      { id: "migrated-quant-qsec2-3", subTitle: "Worked Exam Exemplars" }
    ]
  },
  {
    moduleNum: 2,
    title: "Algebra & Quadratic Equations: Formulas, Signs & Root Analysis",
    desc: "Master algebraic identities, symmetric polynomials, quadratic formula, discriminant nature of roots, and sign-table heuristics for Bank PO Mains.",
    sections: [
      { id: "migrated-quant-qsec4-1", subTitle: "Core Formulas & Algebraic Identities" },
      { id: "migrated-quant-qsec4-2", subTitle: "Quadratic Equations Sign Table & Root Comparisons" },
      { id: "migrated-quant-qsec4-3", subTitle: "Worked Exam Exemplars" }
    ]
  },
  {
    moduleNum: 3,
    title: "Number Series & Pattern Recognition: Missing, Wrong & Polynomials",
    desc: "Systematic step-difference decomposition, triangular difference patterns, alternating operations, and Fibonacci / Prime series identification.",
    sections: [
      { id: "migrated-quant-qsec5-1", subTitle: "Algorithmic Pattern Recognition Framework" },
      { id: "migrated-quant-qsec5-2", subTitle: "Rapid Pattern Detection Shortcuts & Estimation" },
      { id: "migrated-quant-qsec5-3", subTitle: "Worked Exam Exemplars" }
    ]
  },
  {
    moduleNum: 4,
    title: "2D & 3D Geometry and Mensuration Masterclass",
    desc: "Plane figures, inscribed/circumscribed systems, curved/total surface areas, melting/recasting invariants, frustum solids, and percentage scaling multipliers.",
    sections: [
      { id: "migrated-quant-qsec1-1", subTitle: "2D Plane Figures, Inradius & Inscribed Systems" },
      { id: "migrated-quant-qsec1-2", subTitle: "3D Solid Mensuration & Surface Topology" },
      { id: "migrated-quant-qsec1-3", subTitle: "Frustum of Cone, Pyramid & Composite Solids" },
      { id: "migrated-quant-qsec1-4", subTitle: "Percentage Scaling Shortcuts & Dimensional Multipliers" },
      { id: "migrated-quant-qsec1-5", subTitle: "Worked Exam Exemplars" }
    ]
  },
  {
    moduleNum: 5,
    title: "Modern Mathematics: Permutations, Combinations & Probability",
    desc: "Fundamental counting principles, circular arrangements, derangements, conditional probability, and Bayes Theorem with shortcut heuristics.",
    sections: [
      { id: "migrated-quant-qsec7-1", subTitle: "Theoretical Framework of Combinatorics & Probability" },
      { id: "migrated-quant-qsec7-2", subTitle: "Handshake, Circular & Tournament Shortcuts" },
      { id: "migrated-quant-qsec7-3", subTitle: "Worked Exam Exemplars" }
    ]
  },
  {
    moduleNum: 6,
    title: "Data Interpretation Masterclass: Missing DI, Radar & Caselets",
    desc: "Tabular extraction, base-year shift calculations, radar charts, funnel models, and caselet venn diagrams under strict timed exam constraints.",
    sections: [
      { id: "migrated-quant-qsec3-1", subTitle: "High-Level DI Framework & Typologies" },
      { id: "migrated-quant-qsec3-2", subTitle: "Rapid Estimation & Option Elimination Shortcuts" },
      { id: "migrated-quant-qsec3-3", subTitle: "Worked Exam Exemplars" }
    ]
  },
  {
    moduleNum: 7,
    title: "Data Sufficiency & Quantity Comparison (Q1 vs Q2)",
    desc: "Decision-tree logic, unique solution existence criteria, boundary value tests, and avoiding the solve-to-the-end trap in DS questions.",
    sections: [
      { id: "migrated-quant-qsec6-1", subTitle: "Decision-Tree Logic & Sufficiency Criteria" },
      { id: "migrated-quant-qsec6-2", subTitle: "Quantity Comparison Rules & Common Traps" },
      { id: "migrated-quant-qsec6-3", subTitle: "Worked Exam Exemplars" }
    ]
  },
  {
    moduleNum: 8,
    title: "RBI Grade B Phase 1 Quant Memory-Based PYQ Masterclass (2020–2025)",
    desc: "Exhaustive 3-tier solved masterclass covering authentic RBI Grade B Phase 1 questions: Missing NPA Recovery DI, Circular Track TSD, and Weighted Probability.",
    sections: [
      { id: "quant-rbi-grade-b-pyq-master-suite", subTitle: "Authentic Multi-Tier Exam Solved Problems" }
    ]
  }
];

// Check all items accounted for
let checkCount = 0;
for (const m of modules) {
  for (const s of m.sections) {
    if (itemMap.has(s.id)) checkCount++;
    else console.error(`Missing item: ${s.id}`);
  }
}
console.log(`Mapped ${checkCount} / ${items.length} items.`);

const outLines: string[] = [];
outLines.push('# 📐 Quantitative Aptitude & Analytical Reasoning: Master Studio');
outLines.push('');
outLines.push('> **A Comprehensive Pedagogical Problem Studio for Banking (SBI PO, IBPS PO), Regulatory Bodies (RBI Grade B, NABARD, SEBI), and Civil Services CSAT.**');
outLines.push('> High-yield formulas, mental shortcut algorithms, sign-table heuristics, and authentic multi-tier worked exemplars. Formatted for crisp A4 print reading.');
outLines.push('');
outLines.push('---');
outLines.push('');
outLines.push('## 📑 Master Index & Module Architecture');
outLines.push('');

for (const m of modules) {
  outLines.push(`### Module ${m.moduleNum}: [${m.title}](#module-${m.moduleNum})`);
  outLines.push(`*${m.desc}*`);
  outLines.push('');
  for (let sIdx = 0; sIdx < m.sections.length; sIdx++) {
    const s = m.sections[sIdx];
    outLines.push(`- **Part ${m.moduleNum}.${sIdx + 1}:** [${s.subTitle}](#section-${s.id})`);
  }
  outLines.push('');
}

outLines.push('---');
outLines.push('');

for (const m of modules) {
  outLines.push(`\n<a id="module-${m.moduleNum}"></a>\n`);
  outLines.push(`# Module ${m.moduleNum}: ${m.title}\n`);
  outLines.push(`> ${m.desc}\n`);
  outLines.push('---\n');

  for (let sIdx = 0; sIdx < m.sections.length; sIdx++) {
    const s = m.sections[sIdx];
    const it = itemMap.get(s.id)!;
    outLines.push(`<a id="section-${s.id}"></a>\n`);
    outLines.push(`## Part ${m.moduleNum}.${sIdx + 1}: ${s.subTitle}\n`);

    const cleanedContent = cleanContent(it.content);
    outLines.push(cleanedContent.join('\n').trim());
    outLines.push('\n\n---\n');
  }
}

fs.writeFileSync(filePath, outLines.join('\n'), 'utf8');
console.log(`Reordered and unified Quant successfully! Lines: ${outLines.join('\n').split('\n').length}`);
