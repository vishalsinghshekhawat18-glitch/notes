import * as fs from 'fs';

const masterMd = fs.readFileSync('c:/Users/visha/OneDrive/Documents/Notes/05_Polity_Governance_Master.md', 'utf-8');

// Key terms from the 4 PDF files to test against our master markdown
const testTerms = [
  // 1. Current Affairs & Recent Supreme Court / Legal reforms (File 1)
  { category: 'Mains CA - Women in PRIs', term: 'Sarpanch Pati', re: /sarpanch[-\s]+pati/i },
  { category: 'Mains CA - Women in PRIs', term: 'Mission Shakti', re: /mission\s+shakti/i },
  { category: 'Mains CA - Governor Delay', term: 'R.N. Ravi', re: /R\.?\s*N\.?\s*Ravi/i },
  { category: 'Mains CA - SC Sub-classification', term: 'Davinder Singh', re: /Davinder\s+Singh/i },
  { category: 'Mains CA - SC Sub-classification', term: 'Sub-classification', re: /sub-classification|subclassification/i },
  { category: 'Mains CA - Caste Census', term: 'Caste Census', re: /caste\s+census/i },
  { category: 'Mains CA - Language Policy', term: 'Three-Language Formula', re: /three[-\s]language\s+formula/i },
  { category: 'Mains CA - Criminal Laws', term: 'Bharatiya Nyaya Sanhita / BNS', re: /Bharatiya\s+Nyaya\s+Sanhita|BNS/i },
  { category: 'Mains CA - Minority Status', term: 'AMU / Aligarh Muslim University', re: /Aligarh\s+Muslim\s+University|Azeez\s+Basha/i },
  { category: 'Mains CA - Euthanasia', term: 'Living Will / Passive Euthanasia', re: /Living\s+Will|Passive\s+Euthanasia/i },
  { category: 'Mains CA - Election Commission', term: 'CEC Act 2023 / Selection Committee', re: /Chief\s+Election\s+Commissioner.*Act,?\s*2023|selection\s+committee.*CJI/i },
  { category: 'Mains CA - Electoral Reforms', term: 'RUPPs / Registered Unrecognized', re: /RUPP|Registered\s+Unrecognized/i },
  { category: 'Mains CA - Waqf Bill', term: 'Waqf Amendment Bill 2024', re: /Waqf.*2024/i },
  { category: 'Mains CA - One Nation One Election', term: 'Kovind Committee', re: /Kovind|Simultaneous\s+Elections|One\s+Nation\s+One\s+Election/i },

  // 2. State Polity Deep Architecture (File 3)
  { category: 'State Polity - Governor History', term: 'Gurmukh Nihal Singh', re: /Gurmukh\s+Nihal\s+Singh/i },
  { category: 'State Polity - Governor History', term: 'Haribhau Bagde', re: /Haribhau.*Bagde/i },
  { category: 'State Polity - Governor Removal', term: 'Raghukul Tilak', re: /Raghukul\s+Tilak/i },
  { category: 'State Polity - Chief Minister History', term: 'Hiralal Shastri', re: /Hiralal\s+Shastri/i },
  { category: 'State Polity - Chief Minister History', term: 'Mohan Lal Sukhadia', re: /Mohan\s+Lal\s+Sukhadia/i },
  { category: 'State Polity - Chief Minister History', term: 'Bhajan Lal Sharma', re: /Bhajan\s+Lal\s+Sharma/i },
  { category: 'State Polity - Assembly History', term: 'Narottam Lal Joshi', re: /Narottam\s+Lal\s+Joshi/i },
  { category: 'State Polity - Assembly History', term: 'Vasudev Devnani', re: /Vasudev\s+Devnani/i },
  { category: 'State Polity - High Court History', term: 'Kamal Kant Verma', re: /Kamala?\s+Kant\s+Verma/i },
  { category: 'State Polity - High Court History', term: 'Satyanarayan Rao Committee', re: /Satyanarayan\s+Rao/i },
  { category: 'State Polity - Advocate General', term: 'G.C. Kasliwal', re: /Kasliwal/i },
  { category: 'State Polity - RPSC History', term: 'S.K. Ghosh', re: /S\.?\s*K\.?\s*Ghosh/i },
  { category: 'State Polity - SHRC History', term: 'Kanta Kumari Bhatnagar', re: /Kanta\s+Kumari\s+Bhatnagar/i },
  { category: 'State Polity - SEC History', term: 'Amar Singh Rathore', re: /Amar\s+Singh\s+Rathore/i },
  { category: 'State Polity - SIC History', term: 'M.D. Kaurani', re: /Kaurani/i },
  { category: 'State Polity - Lokayukta History', term: 'I.D. Dua', re: /I\.?\s*D\.?\s*Dua/i },
  { category: 'State Polity - Citizen Charter / RGDS', term: 'Rajasthan Guaranteed Delivery of Public Services Act 2011', re: /Rajasthan\s+Guaranteed\s+Delivery|Public\s+Services\s+Act\s+2011/i },
  { category: 'State Polity - Right to Hearing', term: 'Right to Hearing Act 2012', re: /Right\s+to\s+Hearing\s+Act\s+2012/i },
  { category: 'State Polity - State Finance Comm', term: 'Pradyuman Singh / 6th SFC', re: /Pradyuman\s+Singh|6th\s+State\s+Finance\s+Commission|6th\s+SFC/i },
  { category: 'State Polity - Chief Secretary History', term: 'K. Radhakrishnan', re: /Radhakrishnan/i },
  { category: 'State Polity - Chief Secretary History', term: 'Kushal Singh / Usha Sharma', re: /Kushal\s+Singh|Usha\s+Sharma/i },
  { category: 'State Polity - Women & Child Laws', term: 'POCSO Act 2012', re: /POCSO/i },
  { category: 'State Polity - Women & Child Laws', term: 'Domestic Violence Act 2005', re: /Domestic\s+Violence\s+Act/i },
  { category: 'State Polity - Women & Child Laws', term: 'POSH Act 2013', re: /POSH|Sexual\s+Harassment\s+of\s+Women\s+at\s+Workplace/i },
  { category: 'State Polity - Women Commission', term: 'Rajasthan State Commission for Women / Kanta Khaturia', re: /Rajasthan\s+State\s+Commission\s+for\s+Women|Kanta\s+Khaturia/i },
  { category: 'State Polity - Revenue Board', term: 'Board of Revenue Ajmer', re: /Board\s+of\s+Revenue/i },

  // 3. Dynamic Politics & Rajasthan Politics (Files 2 & 4)
  { category: 'Dynamic Politics - Demography', term: 'SC 17.8% ST 13.5% (Rajasthan)', re: /17\.8%|13\.5%/i },
  { category: 'Dynamic Politics - Demography', term: 'Jat 12%, Gurjar 9%, Rajput 9%', re: /Jat.*12%|Gurjar.*9%/i },
  { category: 'Dynamic Politics - 2023 Election', term: 'Youth Chala Booth / Sabal Abhiyan', re: /Youth\s+Chala\s+Booth|Sabal\s+Abhiyan/i },
  { category: 'Dynamic Politics - 2023 Election', term: 'Mission 75 (CEO Rajasthan)', re: /Mission\s+75/i },
  { category: 'Dynamic Politics - 2023 Election', term: 'cVigil / ENCORE', re: /cVigil|ENCORE/i },
  { category: 'Dynamic Politics - Parties', term: 'Bharat Adivasi Party (BAP)', re: /Bharat\s+Adivasi\s+Party|BAP/i },
  { category: 'Dynamic Politics - Parties', term: 'Rashtriya Loktantrik Party (RLP)', re: /Rashtriya\s+Loktantrik\s+Party|RLP/i },
  { category: 'Dynamic Politics - Political Theory', term: 'Rajni Kothari (Castification / Congress System)', re: /Rajni\s+Kothari/i },
  { category: 'Dynamic Politics - Electoral Bonds', term: 'ADR v Union of India (2024)', re: /Association\s+for\s+Democratic\s+Reforms|Electoral\s+Bonds.*2024/i },
  { category: 'Dynamic Politics - Women Reservation', term: 'Nari Shakti Vandan Adhiniyam / 106th CAA', re: /Nari\s+Shakti\s+Vandan|106th\s+Constitutional\s+Amendment|106th\s+CAA/i }
];

console.log('Running coverage scan against 05_Polity_Governance_Master.md...\n');
for (const item of testTerms) {
  const found = item.re.test(masterMd);
  console.log(`[${found ? 'FOUND' : 'MISSING'}] ${item.category} -> ${item.term}`);
}
