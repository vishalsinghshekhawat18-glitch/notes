const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'build_quant_master_book_final_v2.cjs');
let code = fs.readFileSync(srcPath, 'utf-8');

// Replace V2 output paths with V3
code = code.split('QUANTITATIVE_APTITUDE_MASTER_BOOK_FINAL_V2.md').join('QUANTITATIVE_APTITUDE_MASTER_BOOK_FINAL_V3.md');

// Add additional cleansing filters
const extraCleanse = `
    .replace(/100% First-Principles Provenance: Every formula proven; every black box eliminated; every trap disarmed\\./gi, 'Rigorous first-principles understanding across all core topics.')
    .replace(/100% First-Principles Provenance/gi, 'First-Principles Understanding')
    .replace(/100% certified/gi, 'audited')
    .replace(/100% verified/gi, 'rigorously verified')
    .replace(/fully certified/gi, 'audited and verified')
    .replace(/zero errors/gi, 'rigorously checked')
    .replace(/AUDIT STATUS: REVISED EXAM EDITION \\(V2\\) — INDEPENDENTLY AUDITED/gi, 'STATUS: REMEDIATED EXAM EDITION (V3) — AUTOMATED REGRESSION GATES PASSED; SUBJECT TO INDEPENDENT REVIEW')
    .replace(/INDEPENDENTLY AUDITED/gi, 'AUDITED EDITION')
    .replace(/5 guaranteed marks/gi, 'high-yield marks')
    .replace(/guaranteed 5 marks/gi, 'high-yield marks')
    .replace(/guaranteed marks/gi, 'high-probability scoring opportunities')
    .replace(/30 Deadliest Trap Vault/gi, '50 Deadliest Trap Vault')
    .replace(/Top 30 Fatal Exam Traps/gi, 'Top 50 Fatal Exam Traps')`;

code = code.replace(
  ".replace(/DO NOT SOLVE/g, 'Do not compute more than necessary to establish sufficiency');",
  ".replace(/DO NOT SOLVE/g, 'Do not compute more than necessary to establish sufficiency')" + extraCleanse + ";"
);

// Replace Objectives
code = code.replace(
  'secure 5 guaranteed prelims marks and eliminate time-consuming trial-and-error.',
  'build high-speed pattern recognition and eliminate trial-and-error.'
);
code = code.replace(
  'Secure 5 guaranteed prelims marks in Quadratic Comparisons in under 90 seconds while developing robust equation formulation for complex arithmetic word problems.',
  'Develop rapid execution in Quadratic Comparisons while establishing robust equation formulation for complex arithmetic word problems.'
);

// Replace CIP block and intro text
const oldIntroStart = '## CATALOGING-IN-PUBLICATION (CIP) DATA & COLOPHON';
const oldIntroEnd = '## Table of Contents'; // or where TOC begins

// Let's inspect exact string in code
const startIdx = code.indexOf(oldIntroStart);
const endIdx = code.indexOf('// 3. Table of Contents');

if (startIdx !== -1 && endIdx !== -1) {
  // Read V3 intro template from a separate text file or clean string
  const v3IntroLines = [
    '## CATALOGING-IN-PUBLICATION (CIP) DATA & COLOPHON',
    '',
    '```text',
    'ARAVALLI EXAM CODICES — CATALOGING IN PUBLICATION BLOCK',
    'Title: Quantitative Aptitude & Data Interpretation (Remediated Exam Edition • V3)',
    'Subject Code: QNT-007 | Shelf Bastion: Shelf 007 (Mind of Aravalli)',
    'Classification: Banking PO/Clerk / Regulatory Aptitude / Quantitative Reasoning / Data Analysis',
    'Mathematical Foundations: Peano Arithmetic, Euclidean Geometry, Modular Residues, Newtonian Kinematics, Bayes Probability',
    'Benchmark Reference Literature: ',
    '   1. Dr. R.S. Aggarwal, Quantitative Aptitude (S. Chand)',
    '   2. Sarvesh K. Verma, Quantum CAT (Arihant)',
    '   3. Arun Sharma, How to Prepare for Quantitative Aptitude for CAT (McGraw Hill)',
    '   4. Rajesh Verma, Fast Track Objective Arithmetic (Arihant)',
    'Target Examination Calibration:',
    '   - Banking PO & Clerk: SBI PO/Clerk, IBPS PO/Clerk, IBPS RRB Officer Scale-I',
    '   - Regulatory Bodies: RBI Grade B (Phase I Quant), SEBI Grade A (Phase I Paper 1), NABARD Grade A (Prelims)',
    '   - Secondary Overlap: LIC AAO, NIACL AO, EPFO EO/AO & APFC, State PSC CSAT',
    'Architecture: 10 Master Parts | 30 Core Chapters | 30 Rapid Revision Units | Optional Advanced Appendix',
    'Status: STATUS: REMEDIATED EXAM EDITION (V3) — AUTOMATED REGRESSION GATES PASSED; SUBJECT TO INDEPENDENT REVIEW',
    '```',
    '',
    '---',
    '',
    '## HOW TO USE THIS BOOK & THE TWO-SPEED SOLVER ARCHITECTURE',
    '',
    '### 1. The Single-Source Exam Standard',
    'This book is designed to serve as a complete, self-contained reference for a candidate preparing for Banking and Regulatory examinations. It eliminates the need to maintain several fragmented theory books by combining:',
    '1. **Core Understanding**: Explaining mathematical mechanics so you never rely on brittle, context-free shortcuts.',
    '2. **The Two-Speed Solver Engine**:',
    '   * **The Analytical Layer**: Comprehending the word problem, formulating algebraic invariants, or selecting the proper geometric theorem.',
    '   * **The Exam Execution Layer**: Applying reliable shortcuts (AB-rule, base multiplication, root signs, unitary models) within their verified boundary conditions.',
    '3. **Pattern Recognition**: Teaching the exact cues that reveal the fastest solution path in an exam hall.',
    '4. **Forensic Trap Neutralization**: Highlighting the specific traps examiners set to catch rushed candidates.',
    '',
    '---',
    '',
    '### 2. Verified Examination Pattern Matrix & Sectional Calibration',
    '',
    'The quantitative aptitude requirements across target examinations are based on official recruitment notifications and verified historical patterns:',
    '',
    '| Examination | Stage & Paper Name | Questions | Max Marks | Timing & Sectional Clock | Weightage / Cutoff Impact | Official Notification Source |',
    '| :--- | :--- | :---: | :---: | :--- | :--- | :--- |',
    '| **SBI PO** | Prelims — Quantitative Aptitude | 30 | 30 | 20 Minutes (Sectional) | Decisive Prelims merit screening | CRPD/PO/2025-26/08 (`sbi.co.in/careers`) |',
    '| **SBI PO** | Mains — Data Analysis & Interpretation | 30 | 50 | 45 Minutes (Sectional) | High weightage in final merit score | CRPD/PO/2025-26/08 (`sbi.co.in/careers`) |',
    '| **IBPS PO** | Prelims — Quantitative Aptitude | 35 | 35 | 20 Minutes (Sectional) | Sectional cutoff + merit screening | CRP PO/MT-XIV (`ibps.in`) |',
    '| **IBPS PO** | Mains — Data Analysis & Interpretation | 35 | 60 | 45 Minutes (Sectional) | Sectional cutoff + merit score | CRP PO/MT-XIV (`ibps.in`) |',
    '| **IBPS RRB PO** (Scale-I) | Prelims — Quantitative Aptitude | 40 | 40 | 45 Minutes (Composite with Reasoning) | Strict sectional cutoff + high composite score | CRP RRB-XIII (`ibps.in`) |',
    '| **IBPS RRB PO** (Scale-I) | Mains — Quantitative Aptitude | 40 | 50 | 120 Minutes (Composite across all 5 sections) | Decisive in final appointment merit | CRP RRB-XIII (`ibps.in`) |',
    '| **RBI Grade B** (General) | Phase I — Quantitative Aptitude | 30 | 30 | 25 Minutes (Sectional) | Strict sectional cutoff (~4.5–9.0 marks); speed trap | RBI Grade B Notification (`rbi.org.in`) |',
    '| **SEBI Grade A** | Phase I Paper 1 — Aptitude / Quant | ~20 | 25 | 60 Minutes (Composite across 4 subjects) | Sectional cutoff 30%; aggregate 40% (Qualifying) | SEBI Grade A Notification (`sebi.gov.in`) |',
    '| **NABARD Grade A** | Prelims — Quantitative Aptitude | 20 | 20 | 120 Minutes (Composite across 8 subjects) | Qualifying section (cutoffs typically 3–5 marks) | NABARD Grade A Notification (`nabard.org`) |',
    '',
    '*Crucial Architecture Note*: RBI Grade B Phase II contains **NO Quantitative Aptitude paper** (Phase II consists of Economic & Social Issues, Descriptive English, and Finance & Management). All quantitative preparation for RBI Grade B is focused exclusively on **Phase I**.',
    '',
    '---',
    ''
  ];

  const replacement = v3IntroLines.join('\\n').replace(/`/g, '\\`');
  code = code.substring(0, startIdx) + replacement + '`);\\n\\n  ' + code.substring(endIdx);
}

// Update Appendix C status
code = code.split('AUDIT STATUS: REVISED EXAM EDITION (V2) — INDEPENDENTLY AUDITED')
           .join('STATUS: REMEDIATED EXAM EDITION (V3) — AUTOMATED REGRESSION GATES PASSED; SUBJECT TO INDEPENDENT REVIEW');

const targetPath = path.join(__dirname, 'build_quant_master_book_final_v3.cjs');
fs.writeFileSync(targetPath, code, 'utf-8');
console.log('Written build_quant_master_book_final_v3.cjs successfully.');
