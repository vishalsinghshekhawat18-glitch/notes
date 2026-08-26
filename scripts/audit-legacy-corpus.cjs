const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../05_Polity_Governance_Master.md'), 'utf8');

const regex = /^##\s+(\d+)\.\s+([^\r\n]+)\r?\n([\s\S]*?)(?=(?:^##\s+\d+\.|$))/gm;
let match;
const units = [];

while ((match = regex.exec(content)) !== null) {
  const num = parseInt(match[1], 10);
  const title = match[2].trim();
  const body = match[3];

  const subheadings = (body.match(/^###\s+[^\r\n]+/gm) || []).map(s => s.replace(/^###\s+/, '').trim());
  const articles = Array.from(new Set(body.match(/Article\s+\d+[A-Z\-]*(?:\([a-zA-Z0-9]+\))*/gi) || []));
  const amendments = Array.from(new Set(body.match(/\d+(?:st|nd|rd|th)\s+(?:Constitutional\s+)?Amendment/gi) || []));
  const caseLaws = Array.from(new Set(body.match(/([A-Z][a-zA-Z\s\.\&]+(?:v\.|vs\.)[A-Z\.\s]+(?:\(\d{4}\))?)/g) || []));
  const rajasthan = Array.from(new Set(body.match(/(?:Rajasthan|RPSC|RAS|Lokayukta\s+of\s+Rajasthan|Jaipur|Jodhpur|Article\s+163|Article\s+164)/gi) || []));

  units.push({
    id: 'LEG-POL-' + String(num).padStart(3, '0'),
    number: num,
    title,
    lineCount: body.split('\n').length,
    subheadings,
    articles: articles.slice(0, 15),
    amendments: amendments.slice(0, 10),
    caseLaws: caseLaws.slice(0, 10),
    hasRajasthan: rajasthan.length > 0,
    rajasthanKeywords: rajasthan.slice(0, 8),
    bodyExcerpt: body.slice(0, 400).replace(/\r?\n+/g, ' ')
  });
}

console.log('Total extracted units:', units.length);
fs.writeFileSync(path.join(__dirname, 'legacy-polity-inventory.json'), JSON.stringify(units, null, 2));

// Quick summary by category
console.log('Sample units:');
units.slice(0, 5).forEach(u => console.log(`- ${u.id}: ${u.title} (${u.lineCount} lines)`));
