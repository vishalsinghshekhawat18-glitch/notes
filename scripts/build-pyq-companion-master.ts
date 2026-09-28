import * as fs from 'fs';
import * as path from 'path';

const rawTxt = fs.readFileSync('c:/Users/visha/OneDrive/Documents/Notes/newpdf/extracted_text/State-Polity-English-(PYQ).txt', 'utf-8');

// Chapter definitions
const chaptersMeta = [
  { id: 1, title: 'Governor of Rajasthan (Articles 153–161)', startQ: 1, endQ: 94 },
  { id: 2, title: 'Chief Minister & State Council of Ministers (Articles 163–167)', startQ: 1, endQ: 82 },
  { id: 3, title: 'Rajasthan Legislative Assembly (Vidhan Sabha - Articles 168–212)', startQ: 1, endQ: 115 },
  { id: 4, title: 'Rajasthan High Court & Subordinate Judiciary (Articles 214–237)', startQ: 1, endQ: 56 },
  { id: 5, title: 'Advocate General & State Legal Services Authority', startQ: 1, endQ: 17 },
  { id: 6, title: 'Rajasthan Public Service Commission (RPSC - Articles 315–323)', startQ: 1, endQ: 51 },
  { id: 7, title: 'State Human Rights Commission (SHRC - PHRA 1993)', startQ: 1, endQ: 15 },
  { id: 8, title: 'State Information Commission (SIC - RTI Act 2005)', startQ: 1, endQ: 47 },
  { id: 9, title: 'Lokayukta of Rajasthan (Act of 1973)', startQ: 1, endQ: 13 },
  { id: 10, title: 'Citizen Charter & Guaranteed Delivery of Public Services (RGDS Act 2011)', startQ: 1, endQ: 21 },
  { id: 11, title: 'Local Self-Government: Panchayati Raj Institutions (PRIs & PESA)', startQ: 1, endQ: 34 },
  { id: 12, title: 'Urban Local Bodies: Municipalities & Town Governance (74th CAA)', startQ: 1, endQ: 98 },
  { id: 13, title: 'Protective Legislation & Crimes Against Women and Children (POCSO, PWDVA, POSH, PC-PNDT)', startQ: 1, endQ: 30 },
  { id: 14, title: 'State Administrative Machinery: Secretariat, Directorates & Chief Secretary', startQ: 1, endQ: 47 }
];

console.log('Building PYQ Master Markdown...');

// We will write a parser that processes the raw text line by line and separates it by chapters and answer keys.
