import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(process.cwd(), '08_Science_BioTech_Master.md');
const content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');
const chapters: { title: string; rawTitle: string; content: string[] }[] = [];

let currentChapter: { title: string; rawTitle: string; content: string[] } | null = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.startsWith('## ') && !line.startsWith('## 📑') && !line.startsWith('## Table of Contents') && !line.startsWith('## Volume')) {
    if (currentChapter) {
      chapters.push(currentChapter);
    }
    const rawTitle = line.replace(/^##\s+/, '').trim();
    const cleanTitle = rawTitle.replace(/^\d+\.\s*/, '').trim();
    currentChapter = { title: cleanTitle, rawTitle, content: [] };
  } else if (currentChapter) {
    currentChapter.content.push(line);
  }
}
if (currentChapter) {
  chapters.push(currentChapter);
}

console.log(`Parsed ${chapters.length} chapters in Science.`);

const volumePlan = [
  {
    volumeName: "Volume I: Core Physical & Chemical Sciences",
    volumeDesc: "Wave-particle duality, optics, EM spectrum, electromagnetic induction, semiconductors, nuclear energetics, 3-stage program, and chemical thermodynamics/bonding.",
    chapters: [
      "Physics: Optics, Electromagnetic Spectrum & Wave Phenomena",
      "Electricity, Magnetism & Semiconductor Devices",
      "Nuclear Physics: Fission, Fusion & India's 3-Stage Nuclear Program",
      "Chemistry: Acids, Bases, pH Scale & Chemical Bonding"
    ]
  },
  {
    volumeName: "Volume II: Biological Sciences, Genetics & Human Health",
    volumeDesc: "Cellular ultrastructure, mitotic/meiotic division, nucleic acids (DNA/RNA), transcription/translation, humoral/cell-mediated immunology, vaccines, and infectious pathogens.",
    chapters: [
      "Cell Structure, Organelles & Cell Division (Mitosis vs Meiosis)",
      "DNA, RNA & Central Dogma of Molecular Biology",
      "Human Immunity, Vaccines & Infectious Diseases (TB, Malaria, HIV)"
    ]
  },
  {
    volumeName: "Volume III: Biotechnology & Applied Genetic Engineering",
    volumeDesc: "Recombinant DNA protocols, vectors, CRISPR-Cas9 endonuclease mechanics, gene therapy, transgenic applications, and biosafety regulatory committees.",
    chapters: [
      "Recombinant DNA, CRISPR-Cas9 & Gene Editing"
    ]
  },
  {
    volumeName: "Volume IV: Space Technology, Telecom & Frontier Innovations",
    volumeDesc: "ISRO launch vehicles (PSLV, GSLV, LVM3), orbital mechanics (LEO, GEO, SSO, Lagrange points), 5G/6G architecture, optical waveguides, quantum supremacy, AI/ML paradigms, and nanotech.",
    chapters: [
      "Space Technology: Launch Vehicles (PSLV, GSLV, LVM3) & Satellite Orbits",
      "Telecommunications: 5G vs. 6G, Optical Fiber & Quantum Computing",
      "Artificial Intelligence: Machine Learning, Deep Learning & Generative AI",
      "Emerging Technologies: Nanotechnology, Robotics & 3D Printing"
    ]
  }
];

function cleanChapterContent(lines: string[]): string[] {
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

const chapterMap = new Map<string, { rawTitle: string; content: string[] }>();
for (const ch of chapters) {
  chapterMap.set(ch.title, ch);
}

let totalMapped = 0;
for (const vol of volumePlan) {
  for (const t of vol.chapters) {
    if (chapterMap.has(t)) totalMapped++;
    else console.error(`Missing Science chapter: ${t}`);
  }
}
console.log(`Mapped ${totalMapped} / ${chapters.length} chapters.`);

const outLines: string[] = [];
outLines.push('# 🔬 General Science, Biotechnology & Frontier Technologies: Canonical Master Vault');
outLines.push('');
outLines.push('> **A Comprehensive Pedagogical Reference Book for Civil Services (UPSC CSE, RPSC RAS) and Technical Examinations.**');
outLines.push('> Exhaustive coverage of Physics, Chemistry, Biology, Genetic Engineering, Space Tech, Telecom, and AI. Formatted for crystal-clear A4 monochrome printing.');
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
  for (const t of vol.chapters) {
    outLines.push(`${globalIdx}. [${t}](#chapter-${globalIdx})`);
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

  for (const t of vol.chapters) {
    const ch = chapterMap.get(t)!;
    outLines.push(`<a id="chapter-${globalIdx}"></a>\n`);
    outLines.push(`## ${globalIdx}. ${t}\n`);

    const cleanedContent = cleanChapterContent(ch.content);
    outLines.push(cleanedContent.join('\n').trim());
    outLines.push('\n\n---\n');
    globalIdx++;
  }
}

fs.writeFileSync(filePath, outLines.join('\n'), 'utf8');
console.log(`Reordered and cleaned Science successfully! Lines: ${outLines.join('\n').split('\n').length}`);
