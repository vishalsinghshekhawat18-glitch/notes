import * as fs from 'fs';

const masterPath = 'c:/Users/visha/OneDrive/Documents/Notes/05_Polity_Governance_Master.md';
let content = fs.readFileSync(masterPath, 'utf-8');

// 1. Backport into Note 43 (Governor, CM, Assembly)
const note43Pos = content.indexOf('<a id="note-43"></a>');
const note44Pos = content.indexOf('<a id="note-44"></a>');
if (note43Pos !== -1 && note44Pos !== -1) {
  const n43Sec = content.substring(note43Pos, note44Pos);
  const n43Drill = `
### 🎯 Authentic RPSC Exam Drill: Top Recurring State Executive Traps (From 700+ PYQ Bank)

1. **[S.I. Telecom Exam 2025] Acting vs. Additional Charge Governors:**
   - *Question:* Between November 1970 and May 2012, how many Governors in Rajasthan assumed office as having acting or additional charge?
   - **Correct Key: 8 as acting and 7 with additional charge.** *(Examiner trap: tests exact historical categorization between judicial acting appointees vs neighboring state Governors holding additional charge).*
2. **[Sr. Teacher Gr-II 2024] President's Rule Proclamation & Revocation:**
   - *Question:* Identify the Governor of Rajasthan in whose tenure proclamations to impose as well as lift President's Rule were issued, and withdrawal occurred on two occasions.
   - **Correct Key: Raghukul Tilak.** *(Also the only Governor in Rajasthan history to be dismissed by the President, in 1981).*
3. **[Research Asst 2024 & Asst. Prof. 2020] Biographical Trivia of Governors:**
   - **Governor's Relief Fund** in Rajasthan was constituted under: **Shri O.P. Mehra**.
   - Governor who served as **Chairman of Hindustan Aeronautics Limited (HAL)** and Chief of Air Staff: **Air Chief Marshal O.P. Mehra**.
4. **[RAS Pre 2018] Bill Passed Without Governor's Prior Recommendation:**
   - *Question:* If a bill requiring Governor's recommendation was introduced and passed without it, what is the constitutional status once Governor assents?
   - **Correct Key:** Under **Article 255**, no Act of the Legislature is invalid merely by reason that some recommendation or previous assent was not given, provided assent is subsequently granted!
5. **[Lecturer 2024] Incumbent Governor Profile — Haribhau Kisanrao Bagde:**
   - Took oath as **45th Governor of Rajasthan** on July 31, 2024; 6-time MLA from Maharashtra; former Speaker of Maharashtra Assembly (chosen unopposed); sworn in by the **Chief Justice of Rajasthan High Court** (Article 159).
`;
  const insertPos = n43Sec.indexOf('> 🎯 **Exam Anchor & Trap:**');
  if (insertPos !== -1) {
    const updatedSec = n43Sec.substring(0, insertPos) + n43Drill + '\n\n' + n43Sec.substring(insertPos);
    content = content.substring(0, note43Pos) + updatedSec + content.substring(note44Pos);
    console.log('Backported PYQs into Note 43.');
  }
}

// 2. Backport into Note 44 (High Court, RPSC, SHRC, Lokayukta)
const n44CurrentPos = content.indexOf('<a id="note-44"></a>');
const n45CurrentPos = content.indexOf('<a id="note-45"></a>');
if (n44CurrentPos !== -1 && n45CurrentPos !== -1) {
  const n44Sec = content.substring(n44CurrentPos, n45CurrentPos);
  const n44Drill = `
### 🎯 Authentic RPSC Exam Drill: Apex State Commissions Traps (From 700+ PYQ Bank)

1. **[College Lecturer 2014 & RAS Pre 2016] RPSC Genesis & Chairmanship:**
   - *Question:* Who was the first Chairman of RPSC?
   - **Correct Key: Sir S.K. Ghosh** (Chief Justice of Rajasthan High Court who held additional charge on Aug 20, 1949). Longest serving chairman was **Devi Shankar Tiwari** (1951–1958).
2. **[RAS Pre 2013, 2018, 2021] Rajasthan Lokayukta Jurisdictional Exclusions:**
   - *Question:* Which high offices are strictly OUTSIDE the purview of the Rajasthan Lokayukta under the 1973 Act?
   - **Correct Key:** (1) **Chief Minister**, (2) **Judges of High Court / Subordinate Courts**, (3) **Chairman/Members of RPSC**, (4) **Chief Election Officer & staff**, (5) **Assembly Secretariat officials**, (6) **Retired public servants**. *(Recurring trap: In Karnataka CM is included; in Rajasthan CM is strictly excluded).*
3. **[RAS Pre 2021 & SI 2021] State Human Rights Commission Composition:**
   - Post-2019 central amendment: Chairperson can be a former **Chief Justice OR Judge of a High Court**; term reduced from 5y/70y to **3 years or 70 years** of age; eligible for reappointment.
4. **[Sr. Teacher 2022] State Election Commission Single-Member Nature:**
   - Single-member body under **Article 243K** (Amar Singh Rathore 1st Commissioner); responsible ONLY for PRI and ULB elections; removed in like manner as a High Court Judge.
`;
  const insertPos = n44Sec.indexOf('> 🎯 **Exam Anchor & Trap:**');
  if (insertPos !== -1) {
    const updatedSec = n44Sec.substring(0, insertPos) + n44Drill + '\n\n' + n44Sec.substring(insertPos);
    content = content.substring(0, n44CurrentPos) + updatedSec + content.substring(n45CurrentPos);
    console.log('Backported PYQs into Note 44.');
  }
}

fs.writeFileSync(masterPath, content, 'utf-8');
console.log(`Updated 05_Polity_Governance_Master.md with PYQ drills. Final size: ${content.length}`);
