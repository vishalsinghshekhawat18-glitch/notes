import * as fs from 'fs';

const content = fs.readFileSync('c:/Users/visha/OneDrive/Documents/Notes/05_Polity_Governance_Master.md', 'utf-8');

// The file has ## 1. ..., ## 2. ... up to ## 59.
// Let's find all `## [Number]. [Title]` positions
const regex = /^## (\d+)\.\s+(.*)$/gm;
let match;
const notes: { num: number; title: string; start: number; end: number; raw: string }[] = [];

const matches: { num: number; title: string; index: number }[] = [];
while ((match = regex.exec(content)) !== null) {
  matches.push({ num: parseInt(match[1]), title: match[2].trim(), index: match.index });
}

for (let i = 0; i < matches.length; i++) {
  const current = matches[i];
  const next = matches[i + 1];
  const start = current.index;
  const end = next ? next.index : content.length;
  notes.push({
    num: current.num,
    title: current.title,
    start,
    end,
    raw: content.substring(start, end).trim()
  });
}

console.log(`Found ${notes.length} notes.`);
notes.forEach(n => console.log(`${n.num}. ${n.title} (${n.raw.length} chars)`));
