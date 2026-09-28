import * as fs from 'fs';

const content = fs.readFileSync('c:/Users/visha/OneDrive/Documents/Notes/05_Polity_Governance_Master.md', 'utf-8');

// Parse notes by `## <number>. <title>`
const regex = /^## (\d+)\.\s+(.*)$/gm;
let match;
const notesMap = new Map<number, { num: number; title: string; raw: string }>();

const matches: { num: number; title: string; index: number }[] = [];
while ((match = regex.exec(content)) !== null) {
  matches.push({ num: parseInt(match[1]), title: match[2].trim(), index: match.index });
}

for (let i = 0; i < matches.length; i++) {
  const current = matches[i];
  const next = matches[i + 1];
  const start = current.index;
  const end = next ? next.index : content.length;
  notesMap.set(current.num, {
    num: current.num,
    title: current.title,
    raw: content.substring(start, end).trim()
  });
}

console.log(`Parsed ${notesMap.size} notes.`);

// Define the 9 Volumes and the exact target sequence of old note numbers
interface VolumeDef {
  volumeNum: string;
  volumeTitle: string;
  noteNumbers: number[];
}

const volumes: VolumeDef[] = [
  {
    volumeNum: 'Volume I',
    volumeTitle: 'Constitutional Foundations, Evolution & Philosophy',
    noteNumbers: [17, 25, 2, 53, 47, 48, 31, 55, 46, 32]
  },
  {
    volumeNum: 'Volume II',
    volumeTitle: 'Ideological Core, Fundamental Rights & Duties',
    noteNumbers: [33, 35, 34, 20, 36, 37, 1]
  },
  {
    volumeNum: 'Volume III',
    volumeTitle: 'Union Government: Executive & Legislature',
    noteNumbers: [56, 57, 40, 21, 58, 29, 30]
  },
  {
    volumeNum: 'Volume IV',
    volumeTitle: 'The Judicial System & Tribunals',
    noteNumbers: [52, 19, 16, 54]
  },
  {
    volumeNum: 'Volume V',
    volumeTitle: 'Federalism, Inter-State Relations & Emergency Provisions',
    noteNumbers: [15, 7, 5, 6, 14, 49, 28]
  },
  {
    volumeNum: 'Volume VI',
    volumeTitle: 'Local Self-Government: Grassroots Democracy',
    noteNumbers: [22, 23]
  },
  {
    volumeNum: 'Volume VII',
    volumeTitle: 'Constitutional, Statutory & Regulatory Oversight Bodies',
    noteNumbers: [13, 11, 41, 42, 27, 26, 3, 4, 24]
  },
  {
    volumeNum: 'Volume VIII',
    volumeTitle: 'Political Dynamics, Security & Comparative Constitutions',
    noteNumbers: [10, 12, 18, 39, 45]
  },
  {
    volumeNum: 'Volume IX',
    volumeTitle: 'State Politics of Rajasthan & Administrative Machinery',
    noteNumbers: [50, 43, 8, 51, 44, 9, 38, 59]
  }
];

// Verify all numbers are accounted for
const allMapped = volumes.flatMap(v => v.noteNumbers);
console.log(`Total mapped: ${allMapped.length}`);
const missing = [];
for (let i = 1; i <= 59; i++) {
  if (!allMapped.includes(i)) missing.push(i);
}
console.log(`Missing notes:`, missing);

function cleanNoteRaw(raw: string, newNumber: number, title: string): string {
  let lines = raw.split(/\r?\n/);
  
  // Replace the heading with the new clean heading
  // Clean up title: remove legacy tags like "[Note 20]" or "(2026-08-25)"
  let cleanTitle = title.replace(/\[Note\s+\d+\]\s*/i, '').replace(/\(\d{4}-\d{2}-\d{2}\)/g, '').trim();
  
  const cleanedLines: string[] = [];
  let skipMode: 'none' | 'metadata' | 'mindmap_placeholder' | 'jargon_placeholder' = 'none';

  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];

    // Replace header line
    if (i === 0 && l.startsWith('## ')) {
      cleanedLines.push(`## ${newNumber}. ${cleanTitle}`);
      continue;
    }

    // Skip anchor tags <a id="..."></a>
    if (l.match(/^<a id="note-\d+"><\/a>$/)) {
      continue;
    }

    // Skip metadata block
    if (l.startsWith('**Metadata:**')) {
      skipMode = 'metadata';
      continue;
    }
    if (skipMode === 'metadata') {
      if (l.startsWith('- **') || l.trim() === '') {
        continue;
      } else {
        skipMode = 'none';
      }
    }

    // Skip boilerplate Executive Summary that merely repeats "is a vital constitutional component..."
    if (l.includes('is a vital constitutional component analyzed in UPSC CSE & State PCS examinations.')) {
      continue;
    }

    // Skip Context Hook boilerplate
    if (l.includes('🪝 Context Hook —') && l.includes('is a vital constitutional component')) {
      continue;
    }

    // Skip generic Key Concept boilerplate
    if (l.includes('> 🧠 **Key Concept — First-Principles Core Truth**')) {
      // check if next line is also the vital constitutional component boilerplate
      if (lines[i + 1]?.includes('is a vital constitutional component')) {
        i++; // skip next line too
        continue;
      }
    }

    // Skip generic placeholder visual mindmap
    if (l.includes('### 🧠 Visual Mind Map & Structural Diagram')) {
      // Check if subsequent lines are the 3-step placeholder
      let j = i + 1;
      let isGeneric = false;
      while (j < Math.min(i + 15, lines.length)) {
        if (lines[j].includes('1. Constitutional & Statutory Mandate') && lines[j + 2]?.includes('Articles, Schedules, and Parliamentary Acts governing')) {
          isGeneric = true;
          break;
        }
        j++;
      }
      if (isGeneric) {
        // skip until Beginner Jargon or next section
        while (i < lines.length && !lines[i].startsWith('### ⚡') && !lines[i].startsWith('### 📖') && !lines[i].startsWith('### 🏛️')) {
          i++;
        }
        i--; // compensate loop increment
        continue;
      }
    }

    // Skip generic 3-bullet placeholder Beginner Jargon
    if (l.includes('### ⚡ 1. Beginner Jargon Unpack')) {
      let isGeneric = false;
      let j = i + 1;
      while (j < Math.min(i + 8, lines.length)) {
        if (lines[j].includes('• **Constitutional Provision:** Direct text, article') && lines[j + 1]?.includes('• **Statutory Body:** Entity established by an Act')) {
          isGeneric = true;
          break;
        }
        j++;
      }
      if (isGeneric) {
        while (i < lines.length && !lines[i].startsWith('### 📖') && !lines[i].startsWith('### 🏛️') && !lines[i].startsWith('### 🧠 3.')) {
          i++;
        }
        i--;
        continue;
      }
    }

    // Skip generic Itemized Verification Tag
    if (l.includes('🏷️ Itemized Verification Tag') || l.includes('✅ Verified Feb 2026 (Itemized)')) {
      continue;
    }

    // Skip generic Layer 3 worked application placeholder
    if (l.includes('**Scenario:** A administrative dispute arises concerning') || l.includes('• Formulate the final constitutionally valid administrative order.')) {
      continue;
    }
    if (l.includes('### 🧮 4. Layer 3: Worked Application (Practical Governance Scenario)')) {
      if (lines[i + 2]?.includes('**Scenario:** A administrative dispute arises') || lines[i + 3]?.includes('**Scenario:** A administrative dispute arises')) {
        while (i < lines.length && !lines[i].startsWith('### 🏛️ 5.') && !lines[i].startsWith('### ⚖️ 6.') && !lines[i].startsWith('### ❓ 7.')) {
          i++;
        }
        i--;
        continue;
      }
    }

    // Skip generic Benchmark Landmark Case placeholder
    if (l.includes('**Benchmark Landmark Case:** Supreme Court judgment establishing the operational boundaries')) {
      continue;
    }
    if (l.includes('### 🏛️ 5. Concrete Anchor (Case Study)')) {
      if (lines[i + 2]?.includes('**Benchmark Landmark Case:** Supreme Court judgment') || lines[i + 3]?.includes('**Benchmark Landmark Case:** Supreme Court judgment')) {
        while (i < lines.length && !lines[i].startsWith('### ⚖️ 6.') && !lines[i].startsWith('### ❓ 7.')) {
          i++;
        }
        i--;
        continue;
      }
    }

    // Keep all real substantive content!
    cleanedLines.push(l);
  }

  // Remove multiple consecutive blank lines
  const result: string[] = [];
  let blankCount = 0;
  for (const line of cleanedLines) {
    if (line.trim() === '') {
      blankCount++;
      if (blankCount <= 2) result.push('');
    } else {
      blankCount = 0;
      result.push(line);
    }
  }

  return result.join('\n');
}

// Generate the master book
let newDoc = `# ⚖️ Indian Polity & Constitutional Governance: The Master Edition

> **A Comprehensive, Chronological Treatise on the Constitution of India, Judicial Jurisprudence & State Governance Architecture**  
> **Structure:** 9 Volumes &bull; 59 Chronological Master Chapters  
> **Edition:** 2026 Sovereign Edition (Updated with 2024–2025 Supreme Court Bench Rulings, New Criminal Codes & 16th Assembly Analytics)  

---

## 📑 Complete Chronological & Thematic Table of Contents

`;

let globalChapterCounter = 1;
const volumeTocs: { vol: VolumeDef; chapters: { num: number; title: string }[] }[] = [];

for (const vol of volumes) {
  const volChapters: { num: number; title: string }[] = [];
  newDoc += `### ${vol.volumeNum}: ${vol.volumeTitle}\n\n`;
  for (const oldNum of vol.noteNumbers) {
    const note = notesMap.get(oldNum);
    if (!note) continue;
    let cleanTitle = note.title.replace(/\[Note\s+\d+\]\s*/i, '').replace(/\(\d{4}-\d{2}-\d{2}\)/g, '').trim();
    volChapters.push({ num: globalChapterCounter, title: cleanTitle });
    newDoc += `${globalChapterCounter}. [${cleanTitle}](#chapter-${globalChapterCounter})\n`;
    globalChapterCounter++;
  }
  newDoc += '\n';
  volumeTocs.push({ vol, chapters: volChapters });
}

newDoc += `---\n\n`;

// Append volumes and chapters
globalChapterCounter = 1;
for (const item of volumeTocs) {
  newDoc += `\n# 🏛️ ${item.vol.volumeNum}: ${item.vol.volumeTitle}\n\n---\n\n`;
  for (let idx = 0; idx < item.vol.noteNumbers.length; idx++) {
    const oldNum = item.vol.noteNumbers[idx];
    const chInfo = item.chapters[idx];
    const note = notesMap.get(oldNum)!;
    
    newDoc += `<a id="chapter-${chInfo.num}"></a>\n\n`;
    newDoc += cleanNoteRaw(note.raw, chInfo.num, chInfo.title);
    newDoc += `\n\n---\n\n`;
  }
}

fs.writeFileSync('c:/Users/visha/OneDrive/Documents/Notes/05_Polity_Governance_Master.md', newDoc, 'utf-8');
console.log(`Reordered and cleaned successfully! Final size: ${newDoc.length} characters, lines: ${newDoc.split('\n').length}`);
