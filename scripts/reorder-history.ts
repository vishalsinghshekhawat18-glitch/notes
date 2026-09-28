import * as fs from 'fs';

const content = fs.readFileSync('c:/Users/visha/OneDrive/Documents/Notes/History_Culture_Master.md', 'utf-8');

// Parse notes
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

console.log(`Parsed ${notesMap.size} chapters in History_Culture_Master.md.`);

interface VolumeDef {
  volumeNum: string;
  volumeTitle: string;
  noteNumbers: number[];
}

const volumes: VolumeDef[] = [
  {
    volumeNum: 'Volume I',
    volumeTitle: 'Historiography, Methodology & Prehistory',
    noteNumbers: [57, 26, 60]
  },
  {
    volumeNum: 'Volume II',
    volumeTitle: 'Ancient India: Harappan Civilization to Classical Age',
    noteNumbers: [17, 5, 56, 19, 24, 11, 3, 50, 54, 22, 6]
  },
  {
    volumeNum: 'Volume III',
    volumeTitle: 'Medieval India: Sultanates, Mughals & Regional Cultures',
    noteNumbers: [49, 23, 39, 47, 4, 10, 44, 1, 34, 48, 52, 12, 42]
  },
  {
    volumeNum: 'Volume IV',
    volumeTitle: 'Modern India: Colonial Rule & The Freedom Struggle',
    noteNumbers: [16, 14, 35, 51, 13, 55, 58, 8, 7, 59, 38, 43, 20, 33, 53, 18, 15, 29, 27]
  },
  {
    volumeNum: 'Volume V',
    volumeTitle: 'History, Forts & Cultural Heritage of Rajasthan',
    noteNumbers: [30, 31, 32]
  },
  {
    volumeNum: 'Volume VI',
    volumeTitle: 'World History: Civilizations, Revolutions & Modernity',
    noteNumbers: [2, 25, 46, 40, 45, 37, 41, 9, 36, 21, 28]
  }
];

// Verify mapping
const allMapped = volumes.flatMap(v => v.noteNumbers);
console.log(`Total mapped: ${allMapped.length}`);
const missing: number[] = [];
for (let i = 1; i <= 60; i++) {
  if (!allMapped.includes(i)) missing.push(i);
}
console.log(`Missing notes:`, missing);

function cleanNote(raw: string, newNum: number, title: string): string {
  let lines = raw.split(/\r?\n/);
  let cleanTitle = title.replace(/\[Note\s+\d+\]\s*/i, '').replace(/\(\d{4}-\d{2}-\d{2}\)/g, '').trim();
  const cleaned: string[] = [];
  let skipMode: 'none' | 'metadata' = 'none';

  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];

    if (i === 0 && l.startsWith('## ')) {
      cleaned.push(`## ${newNum}. ${cleanTitle}`);
      continue;
    }

    if (l.match(/^<a id="note-\d+"><\/a>$/)) continue;

    if (l.startsWith('**Metadata:**')) {
      skipMode = 'metadata';
      continue;
    }
    if (skipMode === 'metadata') {
      if (l.startsWith('- **') || l.trim() === '') continue;
      skipMode = 'none';
    }

    if (l.includes('is a vital historical component analyzed in UPSC CSE & State PCS examinations.')) continue;
    if (l.includes('🪝 Context Hook —') && l.includes('is a vital historical component')) continue;
    if (l.includes('> 🧠 **Key Concept — First-Principles Core Truth**')) {
      if (lines[i + 1]?.includes('is a vital historical component')) {
        i++;
        continue;
      }
    }
    if (l.includes('### 🧠 Visual Mind Map & Structural Diagram')) {
      let isGeneric = false;
      let j = i + 1;
      while (j < Math.min(i + 15, lines.length)) {
        if (lines[j].includes('1. Historical Chronology') && lines[j + 2]?.includes('Primary archaeological sites, literary sources')) {
          isGeneric = true;
          break;
        }
        j++;
      }
      if (isGeneric) {
        while (i < lines.length && !lines[i].startsWith('### ⚡') && !lines[i].startsWith('### 📖') && !lines[i].startsWith('### 🏛️')) {
          i++;
        }
        i--;
        continue;
      }
    }
    if (l.includes('### ⚡ 1. Beginner Jargon Unpack')) {
      let isGeneric = false;
      let j = i + 1;
      while (j < Math.min(i + 8, lines.length)) {
        if (lines[j].includes('• **Epigraphy:** Study of inscriptions engraved on stone') && lines[j + 1]?.includes('• **Numismatics:** Study and collection of coins')) {
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
    if (l.includes('🏷️ Itemized Verification Tag') || l.includes('✅ Verified Feb 2026 (Itemized)')) continue;

    cleaned.push(l);
  }

  // Remove consecutive blank lines
  const result: string[] = [];
  let blank = 0;
  for (const l of cleaned) {
    if (l.trim() === '') {
      blank++;
      if (blank <= 2) result.push('');
    } else {
      blank = 0;
      result.push(l);
    }
  }
  return result.join('\n');
}

let newDoc = `# 🏺 History, Art, Culture & Heritage: The Master Chronological Edition

> **A Comprehensive, Chronological Master Suite on Ancient, Medieval, Modern Indian History, Rajasthan Heritage & World History**  
> **Structure:** 6 Volumes &bull; 60 Chronological Master Chapters  
> **Pedagogy:** Chronological Epoch Progression &bull; Verified Literary & Archaeological Evidence &bull; Zero Fluff  

---

## 📑 Complete Chronological Table of Contents

`;

let globalCounter = 1;
const volumeTocs: { vol: VolumeDef; chapters: { num: number; title: string }[] }[] = [];

for (const vol of volumes) {
  const volChapters: { num: number; title: string }[] = [];
  newDoc += `### ${vol.volumeNum}: ${vol.volumeTitle}\n\n`;
  for (const oldNum of vol.noteNumbers) {
    const note = notesMap.get(oldNum);
    if (!note) continue;
    let cleanTitle = note.title.replace(/\[Note\s+\d+\]\s*/i, '').replace(/\(\d{4}-\d{2}-\d{2}\)/g, '').trim();
    volChapters.push({ num: globalCounter, title: cleanTitle });
    newDoc += `${globalCounter}. [${cleanTitle}](#chapter-${globalCounter})\n`;
    globalCounter++;
  }
  newDoc += '\n';
  volumeTocs.push({ vol, chapters: volChapters });
}

newDoc += `---\n\n`;

globalCounter = 1;
for (const item of volumeTocs) {
  newDoc += `\n# 🏛️ ${item.vol.volumeNum}: ${item.vol.volumeTitle}\n\n---\n\n`;
  for (let idx = 0; idx < item.vol.noteNumbers.length; idx++) {
    const oldNum = item.vol.noteNumbers[idx];
    const chInfo = item.chapters[idx];
    const note = notesMap.get(oldNum)!;
    
    newDoc += `<a id="chapter-${chInfo.num}"></a>\n\n`;
    newDoc += cleanNote(note.raw, chInfo.num, chInfo.title);
    newDoc += `\n\n---\n\n`;
  }
}

fs.writeFileSync('c:/Users/visha/OneDrive/Documents/Notes/History_Culture_Master.md', newDoc, 'utf-8');
console.log(`Reordered and cleaned History successfully! Length: ${newDoc.length} chars, lines: ${newDoc.split('\n').length}`);
