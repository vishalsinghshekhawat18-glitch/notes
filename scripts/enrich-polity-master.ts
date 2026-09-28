import * as fs from 'fs';

const masterPath = 'c:/Users/visha/OneDrive/Documents/Notes/05_Polity_Governance_Master.md';
let content = fs.readFileSync(masterPath, 'utf-8');

// -------------------------------------------------------------
// ENRICHMENT 1: Note 13 (Election Commission & Electoral Reforms)
// -------------------------------------------------------------
const note13Target = `#### 🏛️ 3. Supreme Court Landmark Rulings on Electoral Funding & Transparency (2024)`;
const note13Replacement = `#### 🏛️ 3. Supreme Court Landmark Rulings on Electoral Funding & Transparency (2024)

• **Electoral Bonds Case — *Association for Democratic Reforms (ADR) v. Union of India (Feb 15, 2024)*:**
  - A 5-judge SC Constitution Bench **struck down the Electoral Bond Scheme (2018) as UNCONSTITUTIONAL**.
  - **Core Ratio:** Anonymity in political funding violates voters' fundamental right to information under **Article 19(1)(a)**. SC ordered SBI to cease issuing bonds and submit donor/recipient data to ECI for public disclosure.
• **VVPAT Audit Verification — *ADR v. Election Commission of India (April 2024)*:**
  - SC rejected the demand for 100% manual VVPAT slip counting, retaining established verification of **randomly matching VVPAT slips in 5 polling stations per assembly segment**.
• **Model Code of Conduct (MCC):** Set of consensus guidelines issued by ECI. **NON-STATUTORY** (not an Act of Parliament), but enforced via ECI powers under Article 324.

#### 🏛️ 4. The 2023–2025 Structural & Statutory Electoral Governance Overhaul

##### A. Chief Election Commissioner and Other Election Commissioners Act, 2023
• **Background & The *Anoop Baranwal* Judgment (March 2023):** A 5-judge Constitution Bench had ordered that until Parliament enacted a law under Article 324(2), the appointment of the CEC and ECs must be made by the President on the advice of a 3-member committee comprising:
  1. The Prime Minister,
  2. The Leader of Opposition (or leader of the largest opposition party in Lok Sabha), and
  3. The Chief Justice of India (CJI).
• **The Statutory Override (Dec 2023):** Parliament enacted the *Chief Election Commissioner and Other Election Commissioners (Appointment, Conditions of Service and Term of Office) Act, 2023*:
  - **Selection Committee:** Comprises the **Prime Minister (Chairperson)**, a **Union Cabinet Minister (nominated by PM)**, and the **Leader of Opposition / Single Largest Opposition Party Leader**.
  - **The CJI was EXCLUDED**, creating an executive majority (2 vs 1) on the panel.
  - **Search Committee:** A 5-member screening panel headed by the **Cabinet Secretary** prepares a shortlist of 5 candidates.
  - **Theoretical & Constitutional Friction:** Raises fundamental questions regarding institutional autonomy. Under Bruce Ackerman’s theory of the "Integrity Branch", oversight institutions refereeing democratic competition must be structurally insulated from the sitting executive to avoid conflict of interest.

##### B. Registered Unrecognized Political Parties (RUPPs) & The De-Registration Dilemma
• **Status Quo:** Out of ~3,000+ registered political parties in India, over **97% are RUPPs** (Registered Unrecognized Political Parties). Less than one-third actually contest elections.
• **Misuse Vector:** RUPPs are frequently utilized as tax evasion conduits or money-laundering vehicles via 100% income tax exemptions under Section 13A of the Income Tax Act.
• **Statutory Lacuna & Landmark Judgment:**
  - Under Section 29A of RPA 1951, the ECI has the power to **register** a party, but **NO EXPLICIT STATUTORY POWER TO DE-REGISTER** a party for non-compliance.
  - ***Indian National Congress v. Institute of Social Welfare (2002)*:** The Supreme Court held that the ECI cannot deregister a political party except under three strict exceptions:
    1. Where registration was obtained through fraud or forgery.
    2. Where a party ceases to have faith and allegiance to the Constitution of India.
    3. Where a party has been declared unlawful by the Central Government under UAPA.
  - ECI has repeatedly petitioned Parliament for explicit statutory de-registration authority.

##### C. Extraordinary Disqualification Relief: Section 11 of RPA 1951
• While Section 8(3) imposes a mandatory 6-year post-release disqualification on candidates convicted of offenses with $\ge 2$ years imprisonment, **Section 11** grants the ECI discretionary power to **"remove or reduce the period of disqualification"** for reasons recorded in writing (famously invoked to reduce disqualification for Sikkim CM Prem Singh Tamang).

##### D. High-Level Committee on Simultaneous Elections (Ram Nath Kovind Panel Report, March 2024)
• **Proposal:** "One Nation, One Election" — synchronous elections for Lok Sabha and all State Legislative Assemblies, followed within 100 days by local body elections.
• **Required Constitutional Amendments:**
  - **Article 83 & Article 172:** Synchronization of tenures of Lok Sabha and State Legislative Assemblies (introducing unexpired "remainder terms" in case of hung assemblies or early dissolutions).
  - **Article 325 & 327:** Creation of a Single Electoral Roll and Unified Voter ID across Union, State, and PRI/ULB tiers.
• **Theoretical Critique:** Threatens the core federal principle (Granville Austin’s "Cooperative Federalism") by subsuming distinct regional governance issues and local state accountability under a single dominant national electoral wave.`;

if (content.includes(note13Target)) {
  content = content.replace(note13Target, note13Replacement);
  console.log('Enriched Note 13 successfully.');
} else {
  console.warn('Note 13 target string not found!');
}

// -------------------------------------------------------------
// ENRICHMENT 2: Note 14 (Emergency & 3-Decade Decline of Art 356)
// -------------------------------------------------------------
const note14Target = `### ⚖️ 6. Debates & Controversies

**Institutional Autonomy vs Executive Control:**`;
const note14Replacement = `### ⚖️ 6. Debates & Controversies

#### 📉 The 30-Year Structural Decline of Article 356 (President's Rule): Legal & Political Dynamics
Between 1950 and 1994, Article 356 was invoked over **100 times** (averaging ~2.5 times per year), frequently utilized as a partisan weapon by the Union executive to dismiss opposition-ruled state governments. However, between 1994 and 2025, its invocation dropped precipitously to an all-time low. Why?

1. **The Legal Firewall — *S.R. Bommai v. Union of India (1994)*:**
   - **Judicial Review of Proclamation:** SC established that the Presidential proclamation under Article 356 is subject to judicial review.
   - **Objective Material Requirement:** The President's satisfaction cannot be subjective whim; it must be backed by verifiable, relevant material indicating a breakdown of constitutional machinery, not merely administrative friction.
   - **No Dissolution Before Parliamentary Approval:** The State Legislative Assembly **cannot be dissolved** immediately; it can only be placed under suspended animation until both Houses of Parliament approve the proclamation within 2 months.
   - **Power of Judicial Revival:** If the proclamation is struck down as mala fide or unconstitutional, the Supreme Court has the full power to **revive the dissolved Assembly and restore the dismissed Ministry** (*reiterated in Rameshwar Prasad v. UOI, 2006, regarding Bihar Assembly*).
2. **The Political / Coalition Dynamic:**
   - The post-1989 fragmentation of the national party system created the era of multi-party coalition governments at the Centre (National Front, United Front, NDA, UPA).
   - Regional parties became indispensable coalition partners. Central governments could no longer dismiss state ministries governed by their own allies or parties whose support was vital for legislative survival in Parliament.
   - Growth of "Bargaining Federalism" (W.H. Morris-Jones) transformed the Centre from a coercive hegemon into a negotiated coordinator.

**Institutional Autonomy vs Executive Control:**`;

// Replace specifically in Note 14 section
const note14Pos = content.indexOf('<a id="note-14"></a>');
const note15Pos = content.indexOf('<a id="note-15"></a>');
if (note14Pos !== -1 && note15Pos !== -1) {
  const note14Section = content.substring(note14Pos, note15Pos);
  if (note14Section.includes(note14Target)) {
    const updatedSection = note14Section.replace(note14Target, note14Replacement);
    content = content.substring(0, note14Pos) + updatedSection + content.substring(note15Pos);
    console.log('Enriched Note 14 successfully.');
  }
}

// -------------------------------------------------------------
// ENRICHMENT 3: Note 22 (Local Self-Government: 73rd CAA, Women in PRIs & 6th SFC)
// -------------------------------------------------------------
const note22Pos = content.indexOf('<a id="note-22"></a>');
const note23Pos = content.indexOf('<a id="note-23"></a>');
if (note22Pos !== -1 && note23Pos !== -1) {
  const note22Section = content.substring(note22Pos, note23Pos);
  const note22Enrichment = `
### 👩‍💼 Deep Dive: Women in Panchayati Raj Institutions & The "Sarpanch-Pati" Paradigm

#### 1. Sociological Barriers & The Proxy Participation Phenomenon
• **Constitutional Guarantee (Article 243D(3)):** Mandates not less than **one-third (33%) reservation** for women in PRIs (expanded to **50% in Rajasthan, Bihar, MP, and 20+ states**).
• **The "Sarpanch-Pati" (Pradhan-Pati) Reality:** While women win seats, real executive authority, meeting deliberations, contractor negotiations, and financial disbursements are frequently usurped by their husbands, fathers-in-law, or male kin.
• **Root Causes of Proxy Representation:**
  - **Patrilocal Exogamy & Purdah/Ghoonghat Culture:** Traditional social norms restrict women from speaking openly before male village elders or interacting freely with male government officials (BDO, Gram Sevak).
  - **Administrative & Digital Illiteracy:** Complex e-Gram Swaraj portal bookkeeping, muster roll verification under MGNREGS, and technical tender evaluations create structural dependence on male relatives.
  - **The 5-Year Seat Rotation Trap:** Because reserved seats rotate every election cycle, male village elites treat women as temporary placeholder proxies, abandoning their political grooming once the seat returns to the general category.
  - **Historical Educational Barriers:** Enactment of educational qualification criteria (e.g. Rajasthan's 2015 8th-pass requirement, subsequently repealed in 2019) disproportionately disenfranchised rural women and marginalized communities.

#### 2. Policy Interventions & Institutional Fixes
• **Ministry of Panchayati Raj 2024 Report:** *"Transforming Women's Representation and Roles in Panchayat Raj System and Institutions: Eliminating Efforts for Proxy Participation"*.
• **Mission Shakti (2022–2026):** Implemented via twin sub-schemes:
  - **Sambal:** Safety and security (One Stop Centres, Women Helpline, Beti Bachao Beti Padhao).
  - **Samarthya:** Empowerment and political agency, establishing *Nari Adalats* (women's collective courts) at Gram Panchayat levels.
• **Punitive Anti-Proxy Regulations:** Disqualification and criminal penalties for male relatives attending official Panchayat meetings in place of elected women representatives; mandatory geo-tagged facial attendance on tablet computers.
• **Empirical Reality Check (Esther Duflo & Rohini Pande Studies):** Despite initial proxy hurdles, villages with female sarpanches witness significantly higher investment in **drinking water infrastructure, maternal healthcare, and primary schools**, alongside a measurable decline in domestic violence complaints and heightened long-term political ambition among adolescent village girls.

---

### 💰 Rajasthan 6th State Finance Commission (SFC) Metrics & Devolution Architecture
• **Constitutional Authority:** **Article 243-I** (Panchayats) and **Article 243-Y** (Municipalities).
• **Chairperson:** **Pradyuman Singh** (Appointed for period 2020–21 to 2024–25; members included Ashok Lahoti and Laxman Singh Rawat).
• **Core Devolution Recommendation:** Devolution of **6.75% of the State's Net Own Tax Revenue** to local bodies.
• **Distribution Formula:**
  - **Rural vs Urban Split:** Based on Census 2011 population ratio $\rightarrow$ **75.1% to Panchayati Raj Institutions (PRIs)** and **24.9% to Urban Local Bodies (ULBs)**.
  - **Inter-Tier PRI Allocation (75.1% total):**
    - Gram Panchayats: **75%** (ground execution).
    - Panchayat Samitis: **20%** (block supervision).
    - Zila Parishads: **5%** (district planning).
  - **ULB Tier Allocation (24.9% total):**
    - Municipal Corporations (Nagar Nigam): **60%**.
    - Municipal Councils (Nagar Parishad): **25%**.
    - Municipal Boards (Nagar Palika): **15%**.
`;
  const insertIndex = note22Section.indexOf('### ❓ 7. 3-Tier Practice & Retention Section');
  if (insertIndex !== -1) {
    const updatedSec = note22Section.substring(0, insertIndex) + note22Enrichment + '\n\n' + note22Section.substring(insertIndex);
    content = content.substring(0, note22Pos) + updatedSec + content.substring(note23Pos);
    console.log('Enriched Note 22 successfully.');
  }
}

// -------------------------------------------------------------
// ENRICHMENT 4: Note 33 (Equality, Davinder Singh 2024 SC Sub-Classification, Caste Census)
// -------------------------------------------------------------
const note33Pos = content.indexOf('<a id="note-33"></a>');
const note34Pos = content.indexOf('<a id="note-34"></a>');
if (note33Pos !== -1 && note34Pos !== -1) {
  const note33Section = content.substring(note33Pos, note34Pos);
  const note33Enrichment = `
### ⚖️ Landmark Evolution: SC/ST Sub-Classification & Substantive Equality

#### 1. *State of Punjab v. Davinder Singh (August 1, 2024)* — 7-Judge Constitution Bench
• **The Constitutional Question:** Can a State Government sub-classify castes within the Scheduled Castes (Article 341) and Scheduled Tribes (Article 342) lists to grant preferential sub-quotas to the most backward subgroups (e.g. Balmikis, Mazhabi Sikhs, Madigas, Arunthathiyars)?
• **The Ruling (6:1 Majority):** The Supreme Court held that **sub-classification within SCs and STs is CONSTITUTIONALLY PERMISSIBLE** under Articles 14, 15(4), and 16(4).
• **Overruling *E.V. Chinnaiah v. State of A.P. (2005)*:** *Chinnaiah* had held that Scheduled Castes constitute a single, indivisible homogenous class that cannot be bifurcated by states. The 7-judge bench overruled this, holding:
  1. **Substantive Equality vs Formal Equality:** Treating unequal sub-groups identically perpetuates inequality within the backward class. The most marginalized sub-castes face historical "inter-se backwardness" and cannot compete with relatively advanced sub-castes.
  2. **No Violation of Article 341:** Sub-classification does *not* alter the Presidential List or add/delete any caste from the list. The Presidential notification only identifies the castes; how benefits are distributed among them within state public employment falls squarely under Article 16(4).
  3. **Strict Evidentiary Safeguards:** A State cannot act on political whim. It **must gather quantifiable, empirical data** proving inadequate representation and acute backwardness of the subgroup.
  4. **No 100% Monopolization:** A state cannot allocate 100% of the SC quota to a single sub-caste; reasonable opportunity must remain for other SC categories.
• **The Creamy Layer Issue in SC/STs:** Four out of the six concurring judges (including Justice B.R. Gavai) observed that the **Creamy Layer principle MUST apply to Scheduled Castes and Scheduled Tribes**, ensuring that children of affluent civil servants and politicians do not corner generational reservation benefits at the expense of impoverished rural Dalits.

#### 2. The Theoretical & Constitutional Debate on Caste Census
• **Constitutional Anchor:** Census is a Union subject (**Union List Entry 69, 7th Schedule; Census Act, 1948**). States conduct "Socio-Economic Surveys" (e.g., Bihar Caste-Based Survey 2023).
• **Why Demanded? (The Empirical Imperative):** The last comprehensive caste census in India was conducted in **1931** under British rule. Supreme Court jurisprudence in *Indra Sawhney (1992)* and *M. Nagaraj (2006)* mandates that affirmative action policies must be supported by verifiable, quantifiable demographic data on educational and economic backwardness.
• **Administrative & Sociological Pitfalls:**
  - Risk of caste reification: Solidifies primordial caste identities instead of dismantling them.
  - Sub-caste proliferation: Thousands of synonymous, localized clan names make categorization mathematically prone to disputes.
  - Competitive identity mobilization: Incentivizes politically dominant agrarian castes (e.g., Marathas, Patidars, Jats, Kapus) to escalate reservation agitations.
`;
  const insertIndex = note33Section.indexOf('### ❓ 7. 3-Tier Practice & Retention Section');
  if (insertIndex !== -1) {
    const updatedSec = note33Section.substring(0, insertIndex) + note33Enrichment + '\n\n' + note33Section.substring(insertIndex);
    content = content.substring(0, note33Pos) + updatedSec + content.substring(note34Pos);
    console.log('Enriched Note 33 successfully.');
  }
}

// -------------------------------------------------------------
// ENRICHMENT 5: Note 34 (AMU Minority Status 7-judge 2024, Waqf Bill)
// -------------------------------------------------------------
const n34Pos = content.indexOf('<a id="note-34"></a>');
const n35Pos = content.indexOf('<a id="note-35"></a>');
if (n34Pos !== -1 && n35Pos !== -1) {
  const note34Section = content.substring(n34Pos, n35Pos);
  const note34Enrichment = `
### 🏛️ Contemporary Landmark Rulings: Article 30 & Minority Institution Architecture

#### 1. *Aligarh Muslim University (AMU) Minority Status Case (Nov 8, 2024)* — 7-Judge Bench
• **The Landmark Overruling:** The 7-judge Constitution Bench (4:3 majority led by CJI D.Y. Chandrachud) **OVERRULED the 1967 precedent in *S. Azeez Basha v. Union of India***.
• **The Old *Azeez Basha* Doctrine:** *Azeez Basha* had held that because AMU was brought into existence by an Act of Imperial Legislature (AMU Act, 1920), it was established by the British government and therefore could not claim minority status under Article 30(1) (which guarantees religious/linguistic minorities the right to "establish and administer" educational institutions).
• **The New Constitutional Test:**
  - The Supreme Court held that the formal statutory conversion of a university does **NOT extinguish its minority status**.
  - **Origin Test:** The court must examine *who actually ideated, funded, and established the genesis of the institution*. If a religious minority conceptualized and built the institution (as Sir Syed Ahmad Khan and the Muslim community founded the Muhammadan Anglo-Oriental College in 1875), the subsequent legislative charter granting statutory degree-granting powers is merely legal formalization.
  - **Administration Criteria:** Article 30 does not demand that 100% of administrative personnel be members of the minority; minority institutions are free to adopt modern secular curricula and employ diverse staff.

#### 2. Waqf (Amendment) Bill, 2024 / 2025: Key Tensions & Federal Fault Lines
• **Nature of Waqf:** A permanent dedication of property (movable or immovable) by a person professing Islam for any purpose recognized by Muslim law as pious, religious, or charitable. Managed by a *Mutawalli*.
• **Core Structural Changes in the 2024/2025 Bill:**
  - **Inclusion of Non-Muslims:** Mandates representation of non-Muslim members in the Central Waqf Council and State Waqf Boards.
  - **Separate Boards for Sects:** Allows creation of separate Waqf Boards for Aghakhani and Bohra sects in addition to Sunni and Shia boards.
  - **Abolition of "Waqf by User":** Properties cannot be declared Waqf merely through historical continuous usage; explicit dedication deed required.
  - **District Collector Primacy:** Designates the District Collector as the final arbiter to determine whether a disputed property belongs to the Government or is a Waqf property, stripping the Waqf Tribunal of exclusive jurisdiction.
`;
  const insertIndex = note34Section.indexOf('### ❓ 7. 3-Tier Practice & Retention Section');
  if (insertIndex !== -1) {
    const updatedSec = note34Section.substring(0, insertIndex) + note34Enrichment + '\n\n' + note34Section.substring(insertIndex);
    content = content.substring(0, n34Pos) + updatedSec + content.substring(n35Pos);
    console.log('Enriched Note 34 successfully.');
  }
}

// -------------------------------------------------------------
// ENRICHMENT 6: Note 35 (New Criminal Laws & Art 21, Bulldozer Demolitions, Living Will)
// -------------------------------------------------------------
const n35StartPos = content.indexOf('<a id="note-35"></a>');
const n36StartPos = content.indexOf('<a id="note-36"></a>');
if (n35StartPos !== -1 && n36StartPos !== -1) {
  const note35Section = content.substring(n35StartPos, n36StartPos);

  const note35Enrichment = `
### 🛡️ Contemporary Article 21 Frontiers: Criminal Justice Codes, Demolitions & Bodily Autonomy

#### 1. New Criminal Codes (BNS, BNSS, BSA) & Fundamental Rights Tensions
• **Enactment & Inception:** Replaced IPC 1860, CrPC 1973, and Indian Evidence Act 1872 with Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS), and Bharatiya Sakshya Adhiniyam (BSA).
• **Key Procedural & Civil Liberty Protections:**
  - **Mandatory Zero FIR (Section 173 BNSS):** Police stations are legally obligated to register an FIR irrespective of territorial jurisdiction, transferring it subsequently to the competent station. Eliminates procedural stonewalling.
  - **Mandatory Forensics & Videography (Section 105 BNSS):** Mandatory audio-video recording of search and seizure operations on mobile phones/tablets to prevent police evidence tampering.
  - **Electronic Summons & e-FIR:** Lodging complaints online with mandatory physical signature verification within 3 days.
• **The Article 21 Civil Liberty Friction Points:**
  - **Police Custody Expansion (Section 187(3) BNSS):** Under old CrPC Section 167, police custody was strictly restricted to the **first 15 days** of detention, after which only judicial custody was permissible. Under BNSS Section 187(3), the 15-day police custody can be granted in split parts across the first 40 or 60 days of detention. Civil liberty scholars argue this increases the risk of custodial torture and weakens bail applications.

#### 2. Supreme Court Landmark Directives on "Bulldozer Justice" (Nov 2024)
• A bench comprising Justice B.R. Gavai and Justice K.V. Viswanathan laid down pan-India guidelines against punitive extra-judicial demolitions:
  - **Rule of Law & Separation of Powers:** The Executive cannot act as judge, jury, and executioner. Demolishing the home of an accused or convict as collective punishment violates **Article 21 (Right to Shelter)** and the core principle of Natural Justice (*audi alteram partem*).
  - **Mandatory Procedural Protocol:**
    1. Mandatory **15-day prior notice** served by registered post and affixed conspicuously on the building.
    2. Specific alleged violations and personal hearing dates must be provided.
    3. Mandatory digital video-recording of the demolition proceedings.
  - **Personal Liability on Erring Officials:** Officials executing unlawful demolitions face contempt proceedings, criminal prosecution, and personal financial recovery of restitution to rebuild the victims' homes.

#### 3. Passive Euthanasia & The "Living Will" Framework
• **Jurisprudential Roots:** *Common Cause (A Regd. Society) v. Union of India (2018)* affirmed that the **Right to Die with Dignity** is an integral facet of Article 21. Recognized Advance Medical Directives (Living Wills) allowing terminally ill individuals to refuse artificial life-support.
• **2023 Guidelines Simplification:** SC removed onerous requirements of Magistrate countersigning, delegating verification to hospital ethical boards.
• **Ground Implementation Milestone:** In 2024, **Kollam Government Medical College (Kerala)** established India's first specialized "Living Will Information Counter" to guide citizens on executing legally binding medical directives.
`;
  const insertIndex = note35Section.indexOf('### ❓ 7. 3-Tier Practice & Retention Section');
  if (insertIndex !== -1) {
    const updatedSec = note35Section.substring(0, insertIndex) + note35Enrichment + '\n\n' + note35Section.substring(insertIndex);
    content = content.substring(0, n35StartPos) + updatedSec + content.substring(n36StartPos);
    console.log('Enriched Note 35 successfully.');
  }
}

// -------------------------------------------------------------
// ENRICHMENT 7: Note 38 (Full Revamp: Political Demography & 16th Assembly)
// -------------------------------------------------------------
const note38Pos = content.indexOf('<a id="note-38"></a>');
const note39Pos = content.indexOf('<a id="note-39"></a>');
if (note38Pos !== -1 && note39Pos !== -1) {
  const note38Full = `## 38. Political Demography, Party System & Electoral Competition in Rajasthan

**Metadata:**
- **Item ID:** ` + '`ras-pol-ch-3-rajasthan-political-demography-party-system`' + `
- **Target Exams:** RPSC RAS Prelims, RPSC RAS Mains (Paper III, Unit 7), Rajasthan Police SI
- **Verified Sources:** Ceramic Academy State Politics Series, CEO Rajasthan 2023 Reports, Census 2011 Data

> **Executive Summary:** Comprehensive master study on Rajasthan's political demography, the 4-phase evolution of its party system, 16th Assembly Election (2023) analytics, sub-regional electoral behavior, and the sociopolitical interplay of caste, religion, and pressure groups.

---

### 🧠 1. Theoretical Framework: Political Demography & Party Evolution

#### A. The Science of Political Demography
Political demography investigates how demographic structure—population scale, age cohorts, gender ratios, rural-urban distributions, and ethno-religious cleavages—shapes political power, electoral outcomes, and governance priorities.

#### B. Rajni Kothari's Analytical Models
1. **The "Congress System" (One-Party Dominance with Factional Bargaining):** Early post-independence democracy was anchored not by multiparty polarization, but by a dominant umbrella party containing internal factions representing diverse caste interests.
2. **"Politicization of Caste" vs "Castification of Politics":** Modern democracy does not destroy primordial identities; rather, it instrumentalizes them. Political competition politicizes caste, organizing caste groups into bargaining associations (e.g. Jat Mahasabha, Gurjar Arakshan Sangharsh Samiti) that negotiate state resources and tickets.
3. **M.N. Srinivas's "Dominant Caste" Thesis:** Applied to Rajasthan, dominance is derived from numerical strength, agrarian land ownership, and political mobilization (Jats in Marwar/Shekhawati; Rajputs across historical estates; Gurjars in Eastern Rajasthan; Meenas in Dhundhar/Matsya).

---

### 📊 2. Demographic Matrix of Rajasthan (Census 2011 & Electoral Rolls)

| Demographic Segment | Population / Proportion | Electoral Representation / Key Districts |
| :--- | :--- | :--- |
| **Total Population** | **6.85 Crores** (75.1% Rural, 24.9% Urban) | 200 Assembly Constituencies, 25 Lok Sabha, 10 Rajya Sabha |
| **Gender Distribution** | Male: 51.86%, Female: 48.14% | Sex ratio: 928 (Census 2011); Gender ratio on voter rolls: 921 (2023) |
| **Scheduled Castes (SC)** | **17.8%** of total population | **34 Reserved Constituencies**; Highest concentration: Ganganagar, Jaipur, Hanumangarh |
| **Scheduled Tribes (ST)** | **13.5%** of total population | **25 Reserved Constituencies**; Concentrated in Southern Rajasthan (Banswara, Dungarpur, Pratapgarh, Udaipur) |
| **Religious Composition** | Hindus: 88.49%, Muslims: 9.07%, Sikhs: 1.27%, Jains: 0.91% | Muslims concentrated in Mewat (Alwar, Bharatpur) & Jaipur; Sikhs concentrated in Ganganagar |
| **Major Caste Estimates** | **Jats: ~12%**, **Gurjars: ~9%**, **Rajputs: ~9%**, **Brahmins: ~7%**, **Meenas: ~7%** | Core drivers of candidate selection and ticket distribution across both major parties |

---

### 🗳️ 3. 16th Rajasthan Legislative Assembly Election (Nov 2023) Analytics

#### A. Key Electoral Statistics (Comparison 2018 vs 2023)
• **Total Electors:** **5.27 Crores** (Male: 2.76 Cr, Female: 2.51 Cr).
• **Electors-to-Population (EP) Ratio:** Rose from **621** (2018) to **652** (2023).
• **Youth Voters (18–19 years):** Rose by **58.52%** from 13.91 lakh to **22.71 lakh** electors (constituting ~2.8% of the roll; total youth under 39 years exceeds 52%).
• **Persons with Disabilities (PwD):** **5,60,425 registered PwD electors**. Under the **Sabal Abhiyan**, 100% polling booths were equipped with ramps, wheelchairs, and home-voting facilities for senior citizens (80+) and PwDs (40%+ disability).
• **Voter Turnout:** **75.45%** (excluding postal ballots; highest ever voter participation).

#### B. Tech Architecture & Administrative Initiatives by CEO Rajasthan
1. **SVEEP-4 Strategy:** Built on 3 pillars: **Voter Focus**, **Booth Focus**, and **Evidence Focus**.
2. **Flagship Campaigns:** *"Youth Chala Booth"* and *"Mission 75"* (targeted at assembly segments historically recording below 75% turnout).
3. **IT Applications:**
   - **cVigil:** Mobile application enabling citizens to report Model Code of Conduct violations anonymously; average resolution timeline achieved: **under 100 minutes**.
   - **ENCORE Portal:** End-to-end election night operations, round-wise live counting stats displayed on **339 large LED screens** across the state.
   - **Suvidha Portal:** Single-window transparent approvals for party rallies, loudspeakers, and campaign permissions.
   - **ETPBS:** Electronically Transmitted Postal Ballot System for service voters.

---

### 🔄 4. The Four Phases of Party Competition in Rajasthan

\`\`\`
Phase 1 (1952–1977): One-Party Dominance (The Congress Umbrella)
       │
       ▼
Phase 2 (1977–1998): Bipolarity Emergence (Janata Party / Shekhawat Era)
       │
       ▼
Phase 3 (1998–2023): The Oscillating Bipolar Pendulum (INC ⟷ BJP alternating every 5 yrs)
       │
       ▼
Phase 4 (2023 Onwards): Rise of Third-Force Assertions (BAP, RLP, Regional Sub-Coalitions)
\`\`\`

1. **Phase 1 (1952–1977) — One-Party Dominance:** Indian National Congress dominated state governance under the leadership of **Mohan Lal Sukhadia** (Chief Minister for nearly 17 consecutive years). Main opposition was fragmented between the Bharatiya Jana Sangh, Ram Rajya Parishad, and Swatantra Party (backed by erstwhile royal families).
2. **Phase 2 (1977–1998) — Bi-Party System Emergence:** The 1977 post-Emergency election brought the **Janata Party** to power under **Bhairon Singh Shekhawat** (Rajasthan's first non-Congress CM). Over two decades, Shekhawat consolidated diverse anti-Congress social coalitions into a durable Bharatiya Janata Party (BJP) machinery.
3. **Phase 3 (1998–2023) — The Oscillating Bipolar Pendulum:** For 25 consecutive years, Rajasthan never re-elected an incumbent government. Power alternated strictly between Congress (**Ashok Gehlot**: 1998–2003, 2008–2013, 2018–2023) and BJP (**Vasundhara Raje**: 2003–2008, 2013–2018). Third parties struggled to cross 10–15 seats.
4. **Phase 4 (2023 Onwards) — Fragmentation & Third-Force Assertions:** In the 2023 election (BJP won 115 seats, INC won 69), regional identity parties emerged with decisive bargaining leverage:
   - **Bharat Adivasi Party (BAP):** Born out of the Bharatiya Tribal Party (BTP) movement in Southern Rajasthan (Vagad region: Dungarpur, Banswara, Pratapgarh). Won 3 Assembly seats and subsequently the Banswara Lok Sabha seat in 2024, advocating tribal autonomy, Bhil Pradesh demands, and 5th Schedule protections.
   - **Rashtriya Loktantrik Party (RLP):** Founded by Hanuman Beniwal; mobilizes the Jat agrarian base in Marwar (Nagaur, Barmer, Khinvsar).
   - **Bahujan Samaj Party (BSP):** Historically captures 2–6 seats in Eastern Rajasthan (Alwar, Bharatpur, Dholpur), often merging into Congress to provide razor-thin majorities.

---

### 🗺️ 5. Sub-Regional Electoral Geography of Rajasthan

• **1. Mewar (Udaipur, Chittorgarh, Rajsamand, Bhilwara):** The political bellwether of Rajasthan—the party winning Mewar historically forms the state government. High tribal density and agrarian economy.
• **2. Marwar (Jodhpur, Nagaur, Barmer, Jaisalmer, Pali, Jalore):** The largest geographical zone. Intense Jat vs. Rajput electoral rivalry. Traditional bastion of veteran leaders.
• **3. Shekhawati (Sikar, Jhunjhunu, Churu):** High political literacy, substantial military and teacher recruitment base. Strong influence of Kisan movements and Left/Congress mobilization.
• **4. Hadoti (Kota, Bundi, Baran, Jhalawar):** Historically the strongest bastion of the BJP and RSS grassroots organization.
• **5. Matsya & Mewat (Alwar, Bharatpur, Dholpur, Karauli):** Multi-polar, volatile competition influenced by Meo Muslims, Gurjars, SC communities, and Eastern Rajasthan Canal Project (ERCP) water politics.
• **6. Dhundhar (Jaipur, Dausa):** High urbanization, commercial capital dynamics, balancing Brahmin, Baniya, Meena, and Rajput votes.

---

### ⚠️ 6. High-Yield Exam Traps & Conceptual Checkpoints

> 🎯 **Exam Anchor & Trap:**
> 1. **Reserved Seats Count:** SC = **34 seats** (17%); ST = **25 seats** (12.5%). Total reserved = **59 out of 200 seats**.
> 2. **First Assembly vs Current:** 1st Assembly (1952) had **160 seats**; increased to 176 (1957), 184 (1967), and reached **200 seats in the 6th Assembly (1977)**.
> 3. **Party System Definition:** Rajasthan is structurally an **oscillating two-party system with multi-cornered pressure points**, NOT a genuine multi-party coalition system like Maharashtra or Bihar.
`;
  content = content.substring(0, note38Pos) + note38Full + '\n\n' + content.substring(note39Pos);
  console.log('Enriched Note 38 successfully.');
}

// -------------------------------------------------------------
// ENRICHMENT 8: Note 43 & 50 (Governor, CM Roster & Art 200 Landmark SC Rulings)
// -------------------------------------------------------------
const note43Pos = content.indexOf('<a id="note-43"></a>');
const note44Pos = content.indexOf('<a id="note-44"></a>');
if (note43Pos !== -1 && note44Pos !== -1) {
  const note43Section = content.substring(note43Pos, note44Pos);
  const note43Enrichment = `
### 🏛️ Complete Chronological Roster of Rajasthan Governors (1956–Present)

| No. | Governor Name | Tenure | Landmark Historical Milestone / RPSC Fact |
| :---: | :--- | :--- | :--- |
| -- | **Maharaja Sawai Man Singh II** | 30 Mar 1949 – 31 Oct 1956 | **Rajpramukh** of Rajasthan (office abolished on 1 Nov 1956 via 7th CAA) |
| **1** | **Gurmukh Nihal Singh** | 1 Nov 1956 – 16 Apr 1962 | **First Governor of Rajasthan**; Longest continuous serving Governor |
| 2 | Dr. Sampurnanand | 16 Apr 1962 – 16 Apr 1967 | Imposed **First President's Rule** in Rajasthan (13 Mar 1967 – 26 Apr 1967) |
| 3 | Sardar Hukam Singh | 16 Apr 1967 – 1 Jul 1972 | Former Speaker of Lok Sabha |
| 4 | Sardar Jogendra Singh | 1 Jul 1972 – 15 Feb 1977 | Resigned from office |
| 5 | Vedpal Tyagi | 15 Feb 1977 – 11 May 1977 | Acting Governor (Chief Justice of Rajasthan HC) |
| **6** | **Raghukul Tilak** | 12 May 1977 – 8 Aug 1981 | **ONLY Governor of Rajasthan DISMISSED by the President of India**; Former RPSC member |
| 7 | K.D. Sharma | 8 Aug 1981 – 5 Mar 1982 | Acting Governor (CJ of Rajasthan High Court) |
| 8 | Air Chief Marshal O.P. Mehra | 6 Mar 1982 – 4 Nov 1985 | Former Chief of the Air Staff |
| 9 | Justice P.K. Banerjee | 5 Jan 1985 – 31 Jan 1985 | Acting Governor |
| 10 | D.P. Gupta | 4 Nov 1985 – 20 Nov 1985 | Acting Governor |
| 11 | Vasantrao Patil | 20 Nov 1985 – 15 Oct 1987 | Former Chief Minister of Maharashtra |
| 12 | J.S. Verma | 16 Oct 1987 – 20 Feb 1988 | Acting Governor (later CJI and author of Vishaka guidelines) |
| 13 | Dr. M. Channa Reddy | 5 Feb 1992 – 31 May 1993 | Imposed 4th President's Rule (Babri Masjid demolition aftermath) |
| 14 | Bali Ram Bhagat | 30 Jun 1993 – 1 May 1998 | Former Speaker of Lok Sabha |
| **15** | **Darbara Singh** | 1 May 1998 – 24 May 1998 | **Died in office** (shortest tenure of a regular Governor) |
| 16 | Justice N.L. Tibrewal | 25 May 1998 – 16 Jan 1999 | Acting Governor |
| 17 | Justice Anshuman Singh | 16 Jan 1999 – 14 May 2003 | Former Governor of Gujarat |
| **18** | **Nirmal Chandra Jain** | 14 May 2003 – 22 Sep 2003 | **Died in office** |
| 19 | Kailashpati Mishra | 22 Sep 2003 – 14 Jan 2004 | Additional charge (Governor of Gujarat) |
| 20 | Madan Lal Khurana | 14 Jan 2004 – 1 Nov 2004 | Former Chief Minister of Delhi; Resigned |
| 21 | T.V. Rajeswar | 1 Nov 2004 – 8 Nov 2004 | Additional charge (Governor of UP) |
| **22** | **Pratibha Patil** | 8 Nov 2004 – 21 Jun 2007 | **1st Woman Governor of Rajasthan**; Resigned to become **1st Woman President of India** |
| 23 | Dr. A.R. Kidwai | 21 Jun 2007 – 6 Sep 2007 | Additional charge (Governor of Haryana) |
| **24** | **S.K. Singh (Shailendra K. Singh)** | 6 Sep 2007 – 1 Dec 2009 | **Died in office**; Former Foreign Secretary |
| **25** | **Prabha Rau** | 2 Dec 2009 – 26 Apr 2010 | **Died in office** (2nd woman Governor of Rajasthan) |
| 26 | Shivraj Patil | 26 Apr 2010 – 12 May 2012 | Additional charge (Governor of Punjab); Former Union Home Minister |
| **27** | **Margaret Alva** | 12 May 2012 – 7 Aug 2014 | **3rd Woman Governor of Rajasthan** |
| 28 | Ram Naik | 8 Aug 2014 – 25 Aug 2014 | Additional charge (Governor of UP) |
| 29 | Kalyan Singh | 26 Aug 2014 – 8 Sep 2019 | Completed full 5-year tenure (first since Gurmukh Nihal Singh) |
| 30 | Kalraj Mishra | 9 Sep 2019 – 30 Jul 2024 | Completed full 5-year tenure; Noted for Constitution Park initiatives |
| **31** | **Haribhau Kisanrao Bagde** | **31 Jul 2024 – Present** | **45th Governor of Rajasthan**; Former Speaker of Maharashtra Legislative Assembly |

---

### ⚖️ Landmark Supreme Court Rulings on Article 200: Governor Bill Assent Deadlines

#### *State of Tamil Nadu v. Governor R.N. Ravi (2024/2025)* & *State of Punjab v. Governor (2023/2024)*
• **The Constitutional Friction:** Governors in non-Union ruled states (Tamil Nadu, Punjab, Kerala, Telangana) withheld assent indefinitely on passed bills without returning them, exercising an extra-constitutional "pocket veto".
• **The Supreme Court Rulings:**
  1. **"As Soon As Possible" is Mandatory:** Article 200 dictates that if a Governor withholds assent, they **"shall return the Bill as soon as possible"**. A Governor cannot sit on a bill indefinitely or scuttle legislation passed by an elected assembly.
  2. **Mandatory Assent on Re-Passage:** If the State Legislature re-passes the bill (with or without amendments), the proviso to Article 200 states that the Governor **"shall not withhold assent therefrom"**. The Governor has **NO DISCRETION** and must grant assent.
  3. **No Power to Stall via President Reservation:** A Governor cannot withhold assent, sit on it, and then suddenly reserve the re-passed bill for the President's consideration under Article 201 to obstruct the State.
  4. **Democratic Philosophy:** The Governor is an appointed constitutional head, not an elected lawmaker. Thwarting legislative processes violates the foundational principle of representative parliamentary democracy (*Granville Austin’s seamless web*).
`;
  const insertPos = note43Section.indexOf('> 🎯 **Exam Anchor & Trap:**');
  if (insertPos !== -1) {
    const updatedSec = note43Section.substring(0, insertPos) + note43Enrichment + '\n\n' + note43Section.substring(insertPos);
    content = content.substring(0, note43Pos) + updatedSec + content.substring(note44Pos);
    console.log('Enriched Note 43 successfully.');
  }
}

// -------------------------------------------------------------
// ENRICHMENT 9: Note 44 (High Court, Speakers, CS, Apex Commissions)
// -------------------------------------------------------------
const note44CurrentPos = content.indexOf('<a id="note-44"></a>');
const note45CurrentPos = content.indexOf('<a id="note-45"></a>');
if (note44CurrentPos !== -1 && note45CurrentPos !== -1) {
  const note44Section = content.substring(note44CurrentPos, note45CurrentPos);
  const note44Enrichment = `
### 🏛️ Executive Machinery: State Secretariat, Chief Secretary & Directorates

#### 1. Secretariat vs Directorate Dichotomy
• **State Secretariat (Government Secretariat, Jaipur):** Formed in **1949**; apex political-administrative organ. Responsible for **policy formulation, legislative drafting, budgetary allocation, and departmental coordination**. Headed politically by the Minister and administratively by the Additional Chief Secretary / Principal Secretary.
• **Directorates (Executive Agencies):** Subordinate executive arms headed by technical directors (e.g. Director of Primary Education, Director of Agriculture). Responsible for **field execution, project delivery, and programmatic inspections**.
• **Chief Secretary (The Administrative Pivot):**
  - **Origin:** Created in **1798 by Lord Wellesley** (Governor-General of Bengal); first Chief Secretary was G.H. Barlow.
  - **First Chief Secretary of Rajasthan:** **K. Radhakrishnan** (appointed 13 April 1949).
  - **Longest Serving Chief Secretary:** **Bhagwat Singh Mehta** (Feb 1958 – May 1964).
  - **Women Chief Secretaries of Rajasthan:**
    1. **Kushal Singh** (First Woman CS: Jan 2009 – Oct 2009).
    2. **Usha Sharma** (Second Woman CS: Jan 2022 – Dec 2023).
  - **Current Chief Secretary:** **Sudhansh Pant** (Appointed Jan 2024).

---

### 📋 Complete Roster of Key Constitutional & Statutory Commission Chiefs

| Commission / Body | Founding Date & Headquarters | First Chairperson | Current / Notable Incumbent | Key Exclusion / Jurisdictional Trap |
| :--- | :--- | :--- | :--- | :--- |
| **RPSC** (Art 315) | 20 Aug 1949 (Jaipur $\\rightarrow$ Ajmer 1956) | **Sir S.K. Ghosh** | 1 Chairman + 7 Members | Appointed by Governor; **Removed ONLY by President** (Art 317) |
| **SHRC** (PHRA 1993) | 18 Jan 1999 (Func: 23 Mar 2000), Jaipur | **Justice Kanta Kumari Bhatnagar** | 1 Chairperson + 2 Members (3y/70y) | Recommendations are **advisory**; no direct contempt powers |
| **SEC** (Art 243K) | July 1994, Jaipur | **Amar Singh Rathore** | Madhukar Gupta (Single member) | Conducts ONLY **PRI & ULB** elections; removed like HC Judge |
| **SIC** (RTI 2005) | 18 April 2006, Jaipur | **M.D. Kaurani** | D.B. Gupta (1 Chief IC + up to 10 ICs) | Fixed term (3y/65y post-2019 central rules); ₹25k max penalty |
| **Lokayukta** | 3 Feb 1973 (Assent Mar 1973), Jaipur | **Justice I.D. Dua** | Justice Pratap Krishna Lohra | **CM, HC Judges, RPSC, Retired Staff strictly EXCLUDED** |
| **Board of Revenue** | 1 Nov 1949 (Land Rev Act 1956), Ajmer | **Brij Chand Sharma** | Revenue Benches | Highest Court of Appeal in Land/Revenue disputes in Rajasthan |
| **State Women Comm.** | 15 May 1999 (RSCW Act 1999), Jaipur | **Kanta Khaturia** | 1 Chairperson + 4 Members (3 yrs) | Quasi-judicial civil court powers; submits annual report to Govt |
`;
  const insertPos = note44Section.indexOf('> 🎯 **Exam Anchor & Trap:**');
  if (insertPos !== -1) {
    const updatedSec = note44Section.substring(0, insertPos) + note44Enrichment + '\n\n' + note44Section.substring(insertPos);
    content = content.substring(0, note44CurrentPos) + updatedSec + content.substring(note45CurrentPos);
    console.log('Enriched Note 44 successfully.');
  }
}

// -------------------------------------------------------------
// ENRICHMENT 10: Append New Note 59 (Crimes Against Women & Children Special Laws)
// -------------------------------------------------------------
const note59Text = `

---

<a id="note-59"></a>

## 59. Legal Provisions Relating to Crimes Against Women and Children & Protective Legislation

**Metadata:**
- **Item ID:** ` + '`ras-psi-special-laws-women-children`' + `
- **Category / Section:** Criminal Jurisprudence & Protective Constitutional Frameworks
- **Target Exams:** Rajasthan Police Sub-Inspector (PSI), RPSC RAS Prelims & Mains (Paper III), Judicial Services
- **Statutes Analyzed:** POCSO Act 2012, PWDVA 2005, POSH Act 2013, PC-PNDT Act 1994, RSCW Act 1999

> **Executive Summary:** Exhaustive operational and legal guide on the special statutory enactments protecting women and children from violence, sexual offenses, institutional exploitation, and female feticide.

---

### 🧠 1. Protection of Children from Sexual Offences (POCSO) Act, 2012

#### A. Statutory Philosophy & Core Principles
Enacted pursuant to India's ratification of the **UN Convention on the Rights of the Child (1992)**. It provides a stringent, child-centric legal framework across all sexual offenses against persons **below 18 years of age**.

#### B. Architectural Highlights
1. **Gender-Neutral Definition:** Protects both male and female child victims. Offenses are categorized as Penetrative Sexual Assault (Sec 3), Aggravated Penetrative Sexual Assault (Sec 5), Sexual Assault (Sec 7), and Sexual Harassment (Sec 11).
2. **Mandatory Reporting (Section 19):** Any person (including doctors, teachers, or relatives) who has apprehension or knowledge that a POCSO offense has been committed **MUST report it to the Special Juvenile Police Unit (SJPU)** or local police. Failure to report is punishable with imprisonment up to 6 months.
3. **Presumption of Guilt / Reverse Burden of Proof (Sections 29 & 30):** Once prosecution establishes sexual assault, the Special Court **shall presume** that the accused committed the offense and had the requisite culpable mental state (*mens rea*). The burden shifts to the accused to prove innocence.
4. **Child-Friendly Investigative Procedures:**
   - Police officer recording the statement **must not wear police uniform**.
   - Statements recorded at the child's residence or a place of the child's choice.
   - The accused must never come into direct face-to-face contact with the child during examination or trial (screens or two-way mirrors used).
   - Fast-Track Special Courts mandated to conclude trial within **1 year** from taking cognizance.

---

### 🛡️ 2. Protection of Women from Domestic Violence Act (PWDVA), 2005

#### A. Civil Relief in Criminal Space
Unlike Section 498A of the IPC (purely punitive criminal offense), the PWDVA provides **immediate emergency civil remedies** (safety, shelter, maintenance) to an "Aggrieved Woman" living in a "Domestic Relationship" within a "Shared Household".

#### B. Typology of Domestic Violence (Section 3)
1. **Physical Abuse:** Bodily hurt, assault, criminal force.
2. **Sexual Abuse:** Demeaning, humiliating, or violating dignity.
3. **Verbal & Emotional Abuse:** Insults, ridicule (e.g. for not bearing a male child), preventing employment.
4. **Economic Abuse:** Deprivation of financial resources, streedhan, or household amenities.

#### C. Four Pillars of Relief Orders
• **Protection Orders (Section 18):** Restraining the respondent from committing acts of domestic violence, entering the workplace, or communicating with the victim.
• **Residence Orders (Section 19):** Restraining the respondent from evicting the woman from the shared household, regardless of whether she has legal title or ownership.
• **Monetary Relief (Section 20):** Medical expenses, loss of earnings, and maintenance under CrPC 125.
• **Custody Orders (Section 21):** Temporary custody of children granted to the aggrieved woman.
• **Enforcement Agency:** **Protection Officers (Section 8)** (appointed by State Government) and registered **Service Providers (NGOs)**.

---

### 🏢 3. Sexual Harassment of Women at Workplace (POSH) Act, 2013

#### A. From *Vishaka* to POSH
Codified the Supreme Court's guidelines in the historic ***Vishaka v. State of Rajasthan (1997)*** case (arising from the brutal gang-rape of social worker Bhanwari Devi).

#### B. Institutional Compliance Architecture
• **Internal Complaints Committee (ICC) (Section 4):** Mandatory for every workplace employing **10 or more employees**:
  - **Presiding Officer:** Senior-level woman employee.
  - **Members:** Not less than 2 employees committed to the cause of women.
  - **External Member:** One member from an NGO or legal association familiar with sexual harassment issues (ensures neutrality).
  - At least **50% of ICC members must be women**.
• **Local Committee (LC) (Section 6):** Constituted by District Officer at district/taluk levels to hear complaints from workplaces with fewer than 10 workers or complaints directed against the employer himself.
• **Inquiry Protocol:** Complaint must be filed within **3 months** of the incident. ICC must complete inquiry within **90 days**. Employer must act on recommendations within **60 days**.

---

### 🩺 4. Pre-Conception & Pre-Natal Diagnostic Techniques (PC-PNDT) Act, 1994

• **Objective:** Combat sex-selective abortions and arrest the declining Child Sex Ratio (CSR).
• **Core Mandate:** Prohibits sex selection before or after conception; strictly regulates the use of pre-natal diagnostic techniques (ultrasound, amniocentesis) exclusively for detecting genetic abnormalities.
• **Stringent Provisions:**
  - Complete ban on advertisements relating to sex determination (Section 22).
  - Mandatory registration of all ultrasound clinics, genetic laboratories, and counseling centres.
  - Maintenance of Form F for every pregnant woman scanned.
• **Rajasthan Decoy Operations:** Rajasthan's PNDT Bureau of Investigation is nationally recognized for pioneering "Decoy Operations" (utilizing pregnant decoy informants and GPS-fitted ultrasound trackers across inter-state borders) to arrest illegal sex-determination mafias.

---

### ⚠️ 5. High-Yield Exam Traps & Conceptual Checkpoints

> 🎯 **Exam Anchor & Trap:**
> 1. **POCSO Reverse Burden:** Under Sec 29/30, the legal presumption of guilt shifts the burden of proof onto the accused—a rare exception in Indian criminal jurisprudence.
> 2. **PWDVA Shared Household:** A woman has the right to reside in a shared household even if she has no legal title or ownership interest in the property.
> 3. **POSH ICC Threshold:** ICC is mandatory for workplaces with **10 or more** employees; below 10, complaints go to the District **Local Committee (LC)**.
> 4. **RSCW Nature:** Rajasthan State Commission for Women is a **Statutory Body** (created by 1999 State Act), NOT a Constitutional Body.
`;

// Check if Note 59 already exists
if (!content.includes('<a id="note-59"></a>')) {
  // Update TOC first
  const tocTarget = `58. [[Note 19] Union Legislature: Parliament Architecture, Lok Sabha vs Rajya Sabha (Articles 79–106) (2026-08-25)](#note-58)`;
  const tocReplacement = `58. [[Note 19] Union Legislature: Parliament Architecture, Lok Sabha vs Rajya Sabha (Articles 79–106) (2026-08-25)](#note-58)\n59. [Legal Provisions Relating to Crimes Against Women and Children & Protective Legislation](#note-59)`;
  
  if (content.includes(tocTarget)) {
    content = content.replace(tocTarget, tocReplacement);
  }
  
  // Update Total Master Notes count in header
  content = content.replace(`> **Total Master Notes:** **58**`, `> **Total Master Notes:** **59**`);

  // Append Note 59 at the end
  content += note59Text;
  console.log('Appended Note 59 successfully.');
}

// Write the enriched content back to master markdown
fs.writeFileSync(masterPath, content, 'utf-8');
console.log(`Enrichment complete! Final file size: ${content.length} chars, lines: ${content.split('\n').length}`);
