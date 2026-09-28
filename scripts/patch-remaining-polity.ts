import * as fs from 'fs';

const masterPath = 'c:/Users/visha/OneDrive/Documents/Notes/05_Polity_Governance_Master.md';
let content = fs.readFileSync(masterPath, 'utf-8');

// 1. In Note 28: Add Three-Language Formula, NEP 2020 & Linguistic Federalism
const note28Pos = content.indexOf('<a id="note-28"></a>');
const note29Pos = content.indexOf('<a id="note-29"></a>');
if (note28Pos !== -1 && note29Pos !== -1) {
  const n28Sec = content.substring(note28Pos, note29Pos);
  const n28Addition = `
### 🗣️ Deep Dive: The Three-Language Formula & National Education Policy (NEP) 2020

#### 1. Constitutional Foundations (Part XVII, Articles 343–351)
• **Article 343:** Hindi in Devanagari script is the official language of the Union; English recognized as associate official language under the *Official Languages Act, 1963*.
• **Article 350A:** Obligation of every State to provide adequate facilities for instruction in the **mother-tongue at the primary stage** to linguistic minority children.
• **Article 351:** Special directive to the Union to promote the spread and enrichment of the Hindi language as a medium of expression for all composite culture elements.

#### 2. The Three-Language Formula Policy Architecture
• **Origins:** First formulated by the **Kothari Commission (1964–1966)** and incorporated in the National Policy on Education 1968:
  1. **First Language:** Mother tongue or regional language.
  2. **Second Language:** In Hindi-speaking States, another modern Indian language or English; in Non-Hindi speaking States, Hindi or English.
  3. **Third Language:** In Hindi-speaking States, English or a modern Indian language not studied as second language; in Non-Hindi speaking States, English or a modern Indian language not studied as second language.
• **Evolution under NEP 2020:**
  - Maintains the Three-Language Formula, but introduces **greater flexibility**: no language is imposed on any State.
  - At least **two of the three languages must be native Indian languages**.
  - Medium of instruction until at least Grade 5 (preferably Grade 8) to be in mother tongue/regional language.
• **Federal & Sociolinguistic Tensions:**
  - **The Southern Counter-Model (Tamil Nadu):** Tamil Nadu has steadfastly adhered to a strict **Two-Language Formula (Tamil and English)** since 1968, rejecting Hindi as an unconstitutional majoritarian imposition that disadvantages non-Hindi students in central employment.
  - **Linguistic Hegemony vs Composite Integration:** Balances the functional necessity of a national connective language against Granville Austin's constitutional doctrine of preserving cultural-linguistic pluralism.
`;
  const insertIdx = n28Sec.indexOf('### ❓ 7. 3-Tier Practice & Retention Section');
  if (insertIdx !== -1) {
    const updatedSec = n28Sec.substring(0, insertIdx) + n28Addition + '\n\n' + n28Sec.substring(insertIdx);
    content = content.substring(0, note28Pos) + updatedSec + content.substring(note29Pos);
    console.log('Enriched Note 28 with Three-Language Formula.');
  }
}

// 2. In Note 43: Add full Chief Ministers list with Bhajan Lal Sharma, and Assembly Speakers with Vasudev Devnani
const note43Pos = content.indexOf('<a id="note-43"></a>');
const note44Pos = content.indexOf('<a id="note-44"></a>');
if (note43Pos !== -1 && note44Pos !== -1) {
  const n43Sec = content.substring(note43Pos, note44Pos);
  const n43Addition = `
### 🏛️ Complete Roster of Rajasthan Chief Ministers & Landmark Tenures

| Chief Minister | Tenure / Terms | Political Party / Category | Key Milestone / RPSC Trivia |
| :--- | :--- | :--- | :--- |
| **Hiralal Shastri** | 7 Apr 1949 – 5 Jan 1951 | Congress (Nominated) | **First Nominated Chief Minister** of Rajasthan |
| **C.S. Venkatachari** | 6 Jan 1951 – 25 Apr 1951 | ICS Officer (Nominated) | Appointed by Central Government; only civil servant CM |
| **Jai Narayan Vyas** | 26 Apr 1951 – 3 Mar 1952 | Congress (Nominated) | Appointed before first general elections |
| **Tikaram Paliwal** | 3 Mar 1952 – 31 Oct 1952 | Congress (Elected) | **First Democratically Elected CM**; Later became first Deputy CM |
| **Jai Narayan Vyas** | 1 Nov 1952 – 12 Nov 1954 | Congress (Elected) | Only person to be **both Nominated and Elected CM** |
| **Mohan Lal Sukhadia** | 13 Nov 1954 – 9 Jul 1971 | Congress (4 Terms) | **"Architect of Modern Rajasthan"**; **Longest serving CM (~17 years)** |
| **Barkatullah Khan** | 9 Jul 1971 – 11 Oct 1973 | Congress | **First Muslim CM**; Died in office |
| **Hari Dev Joshi** | 11 Oct 1973 – 29 Apr 1977 | Congress (3 non-consecutive terms) | Took oath 3 times, but never completed a full 5-year tenure |
| **Bhairon Singh Shekhawat** | 22 Jun 1977 – 16 Feb 1980 | Janata Party | **First Non-Congress CM** of Rajasthan |
| **Jagannath Pahadia** | 6 Jun 1980 – 13 Jul 1981 | Congress | **First Dalit (SC) Chief Minister** of Rajasthan |
| **Shiv Charan Mathur** | 14 Jul 1981 – 23 Feb 1985 | Congress | Resigned over the Deeg firing incident (death of Raja Man Singh) |
| **Bhairon Singh Shekhawat** | 4 Mar 1990 – 15 Dec 1992 | BJP | Second term; Dissolved post-Babri Masjid demolition |
| **Bhairon Singh Shekhawat** | 4 Dec 1993 – 30 Nov 1998 | BJP | Completed full 5-year term; Later became Vice President of India |
| **Ashok Gehlot** | 1 Dec 1998 – 8 Dec 2003 | Congress (1st Term) | Initiated social security welfare schemes, drought management |
| **Vasundhara Raje** | 8 Dec 2003 – 11 Dec 2008 | BJP (1st Term) | **First Woman Chief Minister** of Rajasthan |
| **Ashok Gehlot** | 12 Dec 2008 – 13 Dec 2013 | Congress (2nd Term) | Enacted Guaranteed Public Service Delivery & Free Medicine Schemes |
| **Vasundhara Raje** | 13 Dec 2013 – 16 Dec 2018 | BJP (2nd Term) | Bhamashah Scheme, Mukhyamantri Jal Swavlamban Abhiyan |
| **Ashok Gehlot** | 17 Dec 2018 – 15 Dec 2023 | Congress (3rd Term) | Chiranjeevi Health Scheme, 19 new districts formation |
| **Bhajan Lal Sharma** | **15 Dec 2023 – Present** | **BJP (16th Assembly)** | **14th Individual CM (26th tenure)**; MLA from Sanganer |

#### Deputy Chief Ministers of Rajasthan:
1. **Tikaram Paliwal** (under Jai Narayan Vyas, 1952–1954)
2. **Harish Chandra** & **Banwari Lal Bairwa** (under Ashok Gehlot, 2003)
3. **Kamla Beniwal** (First Woman Deputy CM, under Ashok Gehlot, 2003)
4. **Sachin Pilot** (under Ashok Gehlot, 2018–2020)
5. **Diya Kumari** & **Prem Chand Bairwa** (under Bhajan Lal Sharma, Dec 2023 – Present)

---

### 🏛️ Complete Roster of Rajasthan Legislative Assembly Speakers

| Assembly | Term | Speaker Name | Landmark Assembly Milestone |
| :---: | :--- | :--- | :--- |
| **1st** | 1952–1957 | **Narottam Lal Joshi** | First Assembly (160 seats); Deputy Speaker: Lal Singh Shaktawat |
| **2nd** | 1957–1962 | **Ram Niwas Mirdha** | Seats increased to 176 |
| **3rd** | 1962–1967 | **Ram Niwas Mirdha** | **Longest serving Speaker** of Rajasthan Assembly |
| **4th** | 1967–1972 | Niranjan Nath Acharya | Seats increased to 184 |
| **5th** | 1972–1977 | Ram Kishore Vyas | Proclamation of Emergency |
| **6th** | 1977–1980 | Laxman Singh | **Assembly expanded to 200 seats**; Janata Party govt |
| **7th** | 1980–1985 | Poonam Chand Vishnoi | Scheduled Caste representation strengthened |
| **8th** | 1985–1990 | Hira Lal Devpura | Also served as CM for shortest tenure (16 days in 1985) |
| **9th** | 1990–1992 | Hari Shankar Bhabhra | Dissolved in 1992 |
| **10th** | 1993–1998 | Hari Shankar Bhabhra | Deputy CM later |
| **11th** | 1998–2003 | Parasram Maderna | Senior Jat leader and veteran parliamentarian |
| **12th** | 2003–2008 | **Sumitra Singh** | **First Woman Speaker** of Rajasthan Legislative Assembly |
| **13th** | 2009–2013 | Deependra Singh Shekhawat | High digitization of assembly proceedings |
| **14th** | 2013–2018 | Kailash Meghwal | Senior Dalit parliamentarian |
| **15th** | 2019–2023 | Dr. C.P. Joshi | Introduced YouTube live streaming of debates |
| **16th** | **2023–Present** | **Vasudev Devnani** | Pro-tem Speaker: Kalicharan Saraf; Leader of Opposition: Tikaram Jully |
`;
  const insertPos = n43Sec.indexOf('> 🎯 **Exam Anchor & Trap:**');
  if (insertPos !== -1) {
    const updatedSec = n43Sec.substring(0, insertPos) + n43Addition + '\n\n' + n43Sec.substring(insertPos);
    content = content.substring(0, note43Pos) + updatedSec + content.substring(note44Pos);
    console.log('Enriched Note 43 with full CM and Speaker rosters.');
  }
}

// 3. In Note 21 / Note 44: Add Advocate General roster (G.C. Kasliwal) and High Court details
const note21Pos = content.indexOf('<a id="note-21"></a>');
const note22Pos = content.indexOf('<a id="note-22"></a>');
if (note21Pos !== -1 && note22Pos !== -1) {
  const n21Sec = content.substring(note21Pos, note22Pos);
  const n21Addition = `
### 🏛️ Advocate General of Rajasthan (Article 165) — Operational & Roster Minutiae
• **Constitutional Mandate:** Appointed by the Governor under **Article 165**; must be qualified to be appointed a Judge of a High Court (citizen of India, held judicial office for 10 years or advocate of a High Court for 10 years).
• **Tenure & Conditions:** Holds office during the **pleasure of the Governor**; remuneration determined by the Governor.
• **Rights in Legislature (Article 177):** Right to speak and participate in the proceedings of both Houses of State Legislature and any legislative committee of which he may be named a member, **WITHOUT THE RIGHT TO VOTE**.
• **First Advocate General of Rajasthan:** **G.C. Kasliwal** (appointed 1952, longest serving Advocate General of Rajasthan).
• **Prominent Successors:** G.S. Bapna, N.M. Lodha, M.S. Singhvi, and current Advocate General Rajendra Prasad.
`;
  const insertPos = n21Sec.indexOf('### ❓ 7. 3-Tier Practice & Retention Section');
  if (insertPos !== -1) {
    const updatedSec = n21Sec.substring(0, insertPos) + n21Addition + '\n\n' + n21Sec.substring(insertPos);
    content = content.substring(0, note21Pos) + updatedSec + content.substring(note22Pos);
    console.log('Enriched Note 21 with Advocate General Kasliwal details.');
  }
}

// 4. In Note 58 / Note 51 / Note 38: Add Nari Shakti Vandan Adhiniyam (106th CAA 2023)
const note58Pos = content.indexOf('<a id="note-58"></a>');
if (note58Pos !== -1) {
  const n58Sec = content.substring(note58Pos);
  const n58Addition = `
### 👩‍⚖️ Landmark Legislative Milestone: Nari Shakti Vandan Adhiniyam (106th CAA, 2023)
• **Constitutional Enactment:** The **Constitution (106th Amendment) Act, 2023** (introduced as the 128th Constitutional Amendment Bill).
• **Key Inserted Articles:**
  - **Article 330A:** Reserves **one-third (33%) of seats for women in the Lok Sabha**, including seats reserved for SCs and STs.
  - **Article 332A:** Reserves **one-third (33%) of seats for women in State Legislative Assemblies** (including Rajasthan Vidhan Sabha, allocating ~66 out of 200 seats for women).
  - **Article 239AA(2)(b):** Extends 33% women's reservation to the Legislative Assembly of the National Capital Territory of Delhi.
  - **Article 334A (Sunset & Implementation Clause):** Reservation shall come into effect **AFTER** the first delimitation exercise conducted following the publication of the relevant figures of the first Census taken after the Act's commencement. It shall remain in operation for **15 years**, extendable by Parliamentary law.
• **Theoretical Paradigm Shift:** Shifts representation from tokenistic participation to structurally guaranteed legislative power, addressing the severe historical under-representation of women in national and state policy formulation.
`;
  content = content.replace('### ❓ 7. 3-Tier Practice & Retention Section', n58Addition + '\n\n### ❓ 7. 3-Tier Practice & Retention Section');
  console.log('Enriched with Nari Shakti Vandan Adhiniyam.');
}

fs.writeFileSync(masterPath, content, 'utf-8');
console.log(`Patch complete. File length: ${content.length}`);
