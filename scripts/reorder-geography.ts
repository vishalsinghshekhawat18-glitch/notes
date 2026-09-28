import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(process.cwd(), '07_Geography_Environment_Master.md');
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

console.log(`Parsed ${chapters.length} chapters in Geography.`);

const volumePlan = [
  {
    volumeName: "Volume I: Geomorphology & Earth Dynamics",
    volumeDesc: "Cosmic origin, planetary accretion, Earth's interior layering, paleomagnetism, plate boundaries, and endogenous/exogenous geomorphic processes.",
    chapters: [
      "Origin & Evolution of Earth & Solar System",
      "Interior of the Earth: Seismic Waves & Discontinuities",
      "Continental Drift, Sea Floor Spreading & Plate Tectonics",
      "Geomorphic Processes: Weathering, Mass Wasting & Erosion"
    ]
  },
  {
    volumeName: "Volume II: Climatology & Atmospheric Systems",
    volumeDesc: "Atmospheric thermal stratification, solar insolation, planetary heat balance, tri-cellular circulation cells (Hadley, Ferrel, Polar), pressure belts, and global wind regimes.",
    chapters: [
      "Composition & Structure of Atmosphere",
      "Solar Radiation, Heat Budget & Temperature",
      "Atmospheric Circulation, Pressure Belts & Wind Systems"
    ]
  },
  {
    volumeName: "Volume III: Oceanography & Hydrological Dynamics",
    volumeDesc: "Bathymetric morphology (continental shelf to trenches), hypsographic curves, thermohaline salinity dynamics, oceanic circulation gyres, and tidal harmonics.",
    chapters: [
      "Oceanography: Ocean Floor Relief, Temperature & Salinity",
      "Movements of Ocean Water: Waves, Tides & Ocean Currents"
    ]
  },
  {
    volumeName: "Volume IV: Indian Physiography & Regional Geography",
    volumeDesc: "Morphotectonic divisions of India, Himalayan vs Peninsular drainage basins, South-West monsoon mechanism, jet streams, pedological taxonomy, and Rajasthan physiography.",
    chapters: [
      "India: Location, Physiography & Drainage Systems",
      "Monsoons, Jet Streams & Tropical Cyclones",
      "Soils of India: Classification, Degradation & Conservation",
      "RAS Geography Chapter 1: 4 Physical Divisions of Rajasthan & Aravalli Formations"
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
    else console.error(`Missing Geography chapter: ${t}`);
  }
}
console.log(`Mapped ${totalMapped} / ${chapters.length} chapters.`);

const outLines: string[] = [];
outLines.push('# 🌍 Physical, Indian & World Geography: Canonical Master Vault');
outLines.push('');
outLines.push('> **A Comprehensive Pedagogical Reference Book for Civil Services (UPSC CSE, RPSC RAS) and All Competitive Examinations.**');
outLines.push('> Rigorous coverage of Geomorphology, Climatology, Oceanography, Indian Physiography, and Rajasthan Regional Geography. Formatted for crisp A4 print reading.');
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
console.log(`Reordered and cleaned Geography successfully! Lines: ${outLines.join('\n').split('\n').length}`);
