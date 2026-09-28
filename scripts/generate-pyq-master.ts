import * as fs from 'fs';

const cleanTxt = fs.readFileSync('c:/Users/visha/OneDrive/Documents/Notes/newpdf/extracted_text/State-Polity-English-(PYQ)-clean.txt', 'utf-8');
const lines = cleanTxt.split('\n');

interface ChapterBlock {
  title: string;
  notesRef: string;
  questions: string[];
  answerKeyLines: string[];
}

const chapters: { title: string; notesRef: string; qRange: [number, number] }[] = [
  { title: '1. Governor of Rajasthan (Articles 153–161)', notesRef: 'Note 43 & Note 50', qRange: [1, 94] },
  { title: '2. Chief Minister and the Council of Ministers (Articles 163–167)', notesRef: 'Note 8 & Note 43', qRange: [1, 82] },
  { title: '3. Rajasthan State Legislative Assembly (Vidhan Sabha)', notesRef: 'Note 43 & Note 51', qRange: [1, 115] },
  { title: '4. Rajasthan High Court & Subordinate Judiciary', notesRef: 'Note 16 & Note 44', qRange: [1, 56] },
  { title: '5. Advocate General of Rajasthan (Article 165)', notesRef: 'Note 21 & Note 44', qRange: [1, 17] },
  { title: '6. Rajasthan Public Service Commission (RPSC - Art 315–323)', notesRef: 'Note 41 & Note 44', qRange: [1, 51] },
  { title: '7. State Human Rights Commission (SHRC - PHRA 1993)', notesRef: 'Note 26 & Note 44', qRange: [1, 15] },
  { title: '8. State Information Commission (SIC - RTI Act 2005)', notesRef: 'Note 3 & Note 44', qRange: [1, 47] },
  { title: '9. Lokayukta and Up-Lokayuktas of Rajasthan (Act 1973)', notesRef: 'Note 24 & Note 44', qRange: [1, 13] },
  { title: '10. Citizen Charter & Public Service Delivery (RGDS Act 2011 & RTH 2012)', notesRef: 'Note 9 & Note 44', qRange: [1, 21] },
  { title: '11. Panchayati Raj Institutions (73rd Amendment & PESA)', notesRef: 'Note 22', qRange: [1, 34] },
  { title: '12. Municipalities & Urban Local Bodies (74th Amendment)', notesRef: 'Note 23', qRange: [1, 98] },
  { title: '13. Crimes Against Women and Children & Special Protective Laws', notesRef: 'Note 59', qRange: [1, 30] },
  { title: '14. State Secretariat, Directorates & Chief Secretary', notesRef: 'Note 9 & Note 44', qRange: [1, 47] }
];

// Let's create the master document header
let doc = `# 🎯 Rajasthan State Polity 700+ Previous Years' Questions (PYQ) Master Compendium

> **Corpus Reference:** Mind of Aravalli &bull; Reading Hub Specialized Exam Suite  
> **Source Corpus:** Authentic RPSC Question Papers (RAS Prelims, Police SI, Assistant Professor, JLO, School Lecturer, EO/RO 2013–2025)  
> **Total Chapters:** 14 Exhaustive Modules  
> **Total Questions:** 700+ Multi-Statement RPSC Exam MCQs with Verified Official Answer Keys  
> **Pedagogical Function:** Companion Question Bank to Master Study Notes (\`05_Polity_Governance_Master.md\`)  

---

## 📑 Master Index of PYQ Modules

`;

chapters.forEach((ch, idx) => {
  doc += `${idx + 1}. [${ch.title}](#chapter-${idx + 1}) *(Mapped to: ${ch.notesRef})*\n`;
});

doc += `\n---\n\n`;

// Process lines to split into chapters
// We know that an "Answer Key" block marks the end of questions for that chapter.
let currentChapIdx = 0;
let inAnswerKey = false;
let currentQuestionsText = '';
let currentAnswerKeyText = '';

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  if (line.toLowerCase().startsWith('answer key')) {
    inAnswerKey = true;
    currentAnswerKeyText += line + '\n';
    continue;
  }

  // Detect start of new chapter: when question restarts at 1. after an answer key
  if (inAnswerKey && line.match(/^1\.\s+/)) {
    // Commit previous chapter!
    if (currentChapIdx < chapters.length) {
      const ch = chapters[currentChapIdx];
      doc += `<a id="chapter-${currentChapIdx + 1}"></a>\n\n`;
      doc += `## Module ${currentChapIdx + 1}: ${ch.title}\n\n`;
      doc += `> **Theory Anchor:** Analyzed in depth in [${ch.notesRef}](file:///c:/Users/visha/OneDrive/Documents/Notes/05_Polity_Governance_Master.md)\n\n`;
      doc += `### 📝 Authentic RPSC Exam Questions\n\n`;
      doc += formatQuestions(currentQuestionsText) + '\n\n';
      doc += `### 🔑 Official RPSC Answer Key & Verification\n\n`;
      doc += formatAnswerKey(currentAnswerKeyText) + '\n\n';
      doc += `---\n\n`;
      currentChapIdx++;
    }
    inAnswerKey = false;
    currentQuestionsText = line + '\n';
    currentAnswerKeyText = '';
    continue;
  }

  if (inAnswerKey) {
    currentAnswerKeyText += line + '\n';
  } else {
    currentQuestionsText += line + '\n';
  }
}

// Commit final chapter
if (currentChapIdx < chapters.length) {
  const ch = chapters[currentChapIdx];
  doc += `<a id="chapter-${currentChapIdx + 1}"></a>\n\n`;
  doc += `## Module ${currentChapIdx + 1}: ${ch.title}\n\n`;
  doc += `> **Theory Anchor:** Analyzed in depth in [${ch.notesRef}](file:///c:/Users/visha/OneDrive/Documents/Notes/05_Polity_Governance_Master.md)\n\n`;
  doc += `### 📝 Authentic RPSC Exam Questions\n\n`;
  doc += formatQuestions(currentQuestionsText) + '\n\n';
  doc += `### 🔑 Official RPSC Answer Key & Verification\n\n`;
  doc += formatAnswerKey(currentAnswerKeyText) + '\n\n';
  doc += `---\n\n`;
}

function formatQuestions(raw: string): string {
  // Bold question headers like "1. ", "2. ", and highlight exam badges like "[RAS Pre.-2018]"
  let formatted = raw.replace(/^(\d+)\.\s+/gm, '\n**Q. $1** ');
  formatted = formatted.replace(/\[(.*?)\]/g, '`[$1]`');
  return formatted.trim();
}

function formatAnswerKey(raw: string): string {
  // Wrap answer key in clean pre block or table
  return '```text\n' + raw.trim() + '\n```';
}

fs.writeFileSync('c:/Users/visha/OneDrive/Documents/Notes/Rajasthan_State_Polity_700_PYQ_Master.md', doc, 'utf-8');
console.log(`Generated Rajasthan_State_Polity_700_PYQ_Master.md (${doc.length} characters, ${doc.split('\n').length} lines).`);
