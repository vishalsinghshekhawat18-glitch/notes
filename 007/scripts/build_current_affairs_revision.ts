import fs from 'fs';
import path from 'path';

const revDir = path.join(process.cwd(), '007', 'revision', 'current_affairs');
if (!fs.existsSync(revDir)) {
  fs.mkdirSync(revDir, { recursive: true });
}

interface RevChapterDef {
  fileName: string;
  num: number;
  title: string;
  topic: string;
  content: string;
}

const revisionChapters: RevChapterDef[] = [
  {
    fileName: '01_REV_CHAPTER_01.md',
    num: 1,
    title: 'RAPID REVISION MATRIX: CHAPTER 01',
    topic: 'Static Banking, Regulatory Acts & Prudential Norms Core',
    content: `## 1. Statutory Acts & Mandates Matrix

| Statute / Bare Act | Critical Sections | Enforcement Authority | Core Invariant & Examination Trap |
| :--- | :--- | :--- | :--- |
| **RBI Act 1934** | Sec 7 (Govt directions), Sec 17 (Business powers), Sec 42 (CRR), Sec 45ZB (MPC composition: 6 members, 4-year tenure, no reappointment) | Reserve Bank of India | RBI was established on **1 April 1935** under Hilton Young Commission recommendations; nationalized on **1 Jan 1949**. |
| **Banking Regulation Act 1949** | Sec 5(b) (Banking definition), Sec 22 (Branch licensing), Sec 24 (SLR ceiling 40%), Sec 35A (Public interest directions) | RBI | Applies to SCBs, RRBs, and Co-op banks (via Sec 56). Cannot be overridden by MoF without statutory notification. |
| **DICGC Act 1961** | Deposit insurance up to **₹5,00,000 per depositor per bank** (principal + interest) across all branches combined | DICGC (100% RBI subsidiary) | Premium paid entirely by the **Bank** (₹0.12 per ₹100 deposits), NOT by the depositor. Mandatory payout within **90 days**. |
| **SARFAESI Act 2002** | Sec 13(2) 60-day demand notice, Sec 13(4) possession, CERSAI registration | DRT / Appellate DRAT | Applies ONLY to secured loans > **₹1 lakh** where outstanding unpaid balance $\ge$ **20%** of principal + interest. Agricultural land is **strictly exempted**. |
| **Insolvency & Bankruptcy Code 2016** | CIRP default threshold **₹1 Crore**, 180-day + 90-day extension = max 330 days total | NCLT (Adjudicating) / IBBI | Committee of Creditors (CoC) voting threshold: **66%** for resolution plan approval; **90%** for withdrawal. Sec 29A bars wilful defaulters. |

---

## 2. Basel III & Prudential Norms Master Grid

| Capital Ratio / Framework | Mandated Threshold (SCBs) | Calculation Base | Supervisory Action & Traps |
| :--- | :--- | :--- | :--- |
| **Common Equity Tier 1 (CET-1)** | **5.5%** | Percentage of Risk-Weighted Assets (RWAs) | Purest equity capital (common shares, statutory reserves, retained earnings). |
| **Tier 1 Capital** | **7.0%** | % of RWAs | CET-1 (5.5%) + Additional Tier 1 / AT-1 Bonds (max 1.5%). |
| **Capital Conservation Buffer (CCB)** | **2.5%** | Common equity buffer | Composed exclusively of CET-1. Restricts dividend/bonus distribution if breached. |
| **Total Minimum CRAR** | **9.0%** (11.5% with CCB) | (Tier 1 + Tier 2 Capital) / RWAs | For Public Sector Banks, RBI maintains 11.5% minimum including CCB. |
| **Prompt Corrective Action (PCA)** | Triggered by breach of CRAR, Net NPA (>6%), or Leverage Ratio (<3.5%) | Quarterly audited/unaudited returns | Mandatory restrictions on branch expansion, director compensation, and lending to high-risk sectors. |
| **Priority Sector Lending (PSL)** | **40% of ANBC** for Domestic SCBs & Foreign Banks $\ge$ 20 branches | Adjusted Net Bank Credit or CEOBE | Sub-targets: Agriculture 18% (Small/Marginal 10%), Micro-enterprises 7.5%, Weaker Sections 12%. Shortfall penalty: compulsory RIDF deposit. |

---

## 3. 60-Second Memory Skeleton & Trap Alerts
- **Cheque Bounce Penal Provision**: Section 138 of Negotiable Instruments Act 1881 mandates imprisonment up to **2 years** or fine up to **twice the cheque amount**, or both.
- **PMLA Cash Transaction Reports (CTR)**: All cash transactions > **₹10 Lakhs** must be reported to FIU-IND by the 15th of the succeeding month.
- **Ombudsman RB-IOS 2021**: Integrates Banking, NBFC, and Digital Transactions Ombudsman; zero ceiling on compensation for direct loss; max **₹1 Lakh** for mental agony.`,
  },
  {
    fileName: '02_REV_CHAPTER_02.md',
    num: 2,
    title: 'RAPID REVISION MATRIX: CHAPTER 02',
    topic: 'Q1 2026 (January – March) Comprehensive Consolidated Dossier',
    content: `## 1. Q1 2026 High-Yield Macro & Policy Indicators

| Metric / Event | Benchmark Data / Stat | Governing Authority | Exam Angle & Pitfall |
| :--- | :--- | :--- | :--- |
| **Sovereign Green Bonds (SGrBs)** | ₹20,000 Crore target allocation in Q4 FY26 | Ministry of Finance / RBI | Eligible projects audited by Green Finance Working Committee (GFWC); proceeds deposited in Consolidated Fund of India. |
| **RBI Unified Lending Interface (ULI)** | Frictionless credit architecture | RBI Innovation Hub (RBIH) | Evaluates land records, milk pour data, and satellite imagery; acts as UPI counterpart for credit. |
| **Domestic Systemically Important Banks (D-SIBs)** | SBI, HDFC Bank, ICICI Bank | RBI Prudential Framework | SBI requires additional CET-1 surcharge of **0.80%**; HDFC Bank **0.40%**; ICICI Bank **0.20%**. |
| **Retail Direct Scheme Updates** | Introduction of mobile app for G-Sec bidding | RBI | Allows retail individual investors to bid in Primary auctions non-competitively and trade in NDS-OM directly. Zero brokerage. |
| **Foreign Portfolio Investment (FPI) Limit in G-Secs** | Fully Accessible Route (FAR) | RBI / SEBI | Certain designated G-Secs have zero FPI investment ceiling (100% open). |

---

## 2. 60-Second Quick Scan: Q1 Regulatory Interventions
- **NBFC Scale-Based Regulation (SBR)**: 4 layers—Base Layer (NBFC-BL), Middle Layer (NBFC-ML), Upper Layer (NBFC-UL), and Top Layer (NBFC-TL). Upper layer NBFCs must maintain CET-1 $\ge$ 9%.
- **Standing Deposit Facility (SDF)**: Absorbs liquidity without collateral at 25 bps below Repo rate; introduced under Section 17 of RBI Act.
- **Marginal Standing Facility (MSF)**: Overnight borrowing by SCBs pledging approved G-Secs dipping into SLR up to 2% at 25 bps above Repo rate.`,
  },
  {
    fileName: '03_REV_CHAPTER_03.md',
    num: 3,
    title: 'RAPID REVISION MATRIX: CHAPTER 03',
    topic: 'April 2026 Consolidated Dossier',
    content: `## 1. Key Directives & Financial Trends Matrix

| Sector / Focus | Strategic Measure | Regulatory Anchor | High-Yield Trap Alert |
| :--- | :--- | :--- | :--- |
| **Monetary Policy Review (April)** | Repo Rate held at 6.50%; Stance: "Withdrawal of Accommodation" | Monetary Policy Committee (MPC) | MPC votes by simple majority; Governor has **casting vote** in case of tie. Meets min 4 times a year. |
| **Current Account Deficit (CAD)** | Moderated to 1.2% of GDP in Q4 | RBI Balance of Payments | Remittances exceed $115 Billion annually (India ranks #1 globally in inward remittances according to World Bank). |
| **External Commercial Borrowings (ECB)** | Automatic route ceiling $750 Million per financial year | RBI Foreign Exchange Department | Minimum Average Maturity Period (MAMP) is **3 years** for general corporate borrowings; **5 years** for manufacturing companies. |
| **Sovereign Gold Bonds (SGB)** | Tenor 8 years with exit option after 5th year | RBI on behalf of GoI | Interest rate: **2.50% p.a.** paid semi-annually; capital gains tax on redemption for individuals is **100% exempt**. |

---

## 2. 60-Second Retrieval Skeleton
- **Ways and Means Advances (WMA)**: Temporary advances to Central Govt (max 90 days tenure) to bridge mismatches in receipts and payments.
- **Special Drawing Rights (SDR)**: IMF currency basket currencies: USD (43.38%), EUR (29.31%), CNY (12.28%), JPY (7.59%), GBP (7.44%).`,
  },
  {
    fileName: '04_REV_CHAPTER_04.md',
    num: 4,
    title: 'RAPID REVISION MATRIX: CHAPTER 04',
    topic: 'May 2026 (PIB & Regulatory Directions) Dossier',
    content: `## 1. Agrarian, Industrial & Public Policy Matrix

| Policy Initiative | Operational Mechanism | Key Benchmarks & Targets | Exam Traps |
| :--- | :--- | :--- | :--- |
| **Agrarian MSP Determinations** | $1.5\times$ formula based on $A2+FL$ costs | Commission for Agricultural Costs and Prices (CACP) | CACP is an attached office of Ministry of Agriculture; recommends MSP for **22 mandated crops + Fair & Remunerative Price (FRP) for Sugarcane**. |
| **Clean Energy Procurement Mandate** | Renewable Purchase Obligation (RPO) trajectory | Ministry of New & Renewable Energy (MNRE) | Wind RPO, Hydro RPO, and Other RPO are segregated into separate compliance buckets. |
| **Digital Judicial Reforms** | e-Courts Mission Mode Project Phase III | Supreme Court of India / e-Committee | Focuses on cloud-based digitized records, paperless courts, and automated AI transcription. |
| **Cyber Defense for Regulated Entities** | Mandatory 6-hour incident reporting window | CERT-In / RBI Cyber Security Framework | Failure to report leads to penal action under Section 70B of Information Technology Act 2000. |

---

## 2. 60-Second Memory Skeleton
- **PM-KISAN**: ₹6,000 p.a. transferred in three equal installments of ₹2,000 directly via DBT; 100% funded by Central Government.
- **Kisan Credit Card (KCC)**: Credit limit up to ₹3 Lakhs at 7% interest with 3% prompt repayment incentive (effective interest rate **4%**).`,
  },
  {
    fileName: '05_REV_CHAPTER_05.md',
    num: 5,
    title: 'RAPID REVISION MATRIX: CHAPTER 05',
    topic: 'June 2026 (Banking & Financial Regulation) Dossier',
    content: `## 1. Financial Markets & Cross-Border Frameworks

| Domain | Key Intervention | Governing Directive | Key Invariant |
| :--- | :--- | :--- | :--- |
| **ECLGS 5.0 Split Risk-Weight** | Capital relief for guaranteed MSME credit | RBI Prudential Norms on Capital Adequacy | Guarantees provided by NCGTC carry **0% risk weight** on guaranteed portion. |
| **SEBI F&O Framework** | Increased contract lot size and upfront margin norms | SEBI Secondary Market Advisory Committee | Aims to curb retail speculative losses; 93% of individual traders made losses in F&O during FY22-FY24. |
| **Cross-Border Retail Remittances** | Linkage of UPI with Singapore PayNow, UAE Jaywan, and Sri Lanka LankaPay | NPCI International Payments Limited (NIPL) | Settles via ISO 20022 standardized messaging; eliminates correspondent banking fees. |
| **GIFT City Banking Units (IBUs)** | Relaxation of LRS remittance deployment in GIFT IFSC | IFSCA / RBI | Retail investors permitted to open Foreign Currency Accounts (FCAs) in GIFT IFSC under Liberalised Remittance Scheme ($250,000 limit). |

---

## 2. 60-Second Recall Guide
- **LRS (Liberalised Remittance Scheme)**: Max **$250,000 per financial year** for resident individuals; TCS of 20% applies on remittances above ₹7 Lakhs (except education and medical treatment).
- **TREPS (Tri-party Repo)**: Collateralized money market instrument operated by CCIL; zero default risk.`,
  },
  {
    fileName: '06_REV_CHAPTER_06.md',
    num: 6,
    title: 'RAPID REVISION MATRIX: CHAPTER 06',
    topic: 'July 2026 (State of Economy & Regulators) Dossier',
    content: `## 1. Economic Indices & Digital Velocity Grid

| Index / Metric | Value / Magnitude | Measuring Body | Core Structural Significance |
| :--- | :--- | :--- | :--- |
| **RBI Digital Payments Index (RBI-DPI)** | **Surged to 445.50** (Base March 2018 = 100) | Reserve Bank of India | 5 parameters: Payment Enablers (25%), Payment Infrastructure Demand-side (10%), Supply-side (15%), Payment Performance (45%), Consumer Centricity (5%). |
| **Gross Non-Performing Assets (GNPA)** | Declined to multi-year low of **2.8%** | RBI Financial Stability Report (FSR) | Net NPA declined to **0.6%**; Provision Coverage Ratio (PCR) $\ge$ **76%**. |
| **India GDP Growth Projection** | Projected at **7.2%** for FY25/FY26 | RBI Monetary Policy Report | Supported by domestic investment demand, rural recovery, and capital expenditure push. |
| **Foreign Exchange Reserves** | Crossed **$675 Billion** | RBI Weekly Statistical Supplement | Covers over 11 months of projected merchandise imports. |

---

## 2. 60-Second Memory Skeleton
- **Financial Stability Report (FSR)**: Published bi-annually (June & December); details macro-stress tests for credit risk under baseline and severe stress scenarios.
- **Systemic Liquidity Stance**: Liquidity Adjustment Facility (LAF) managed via Variable Rate Repo (VRR) and Variable Rate Reverse Repo (VRRR) auctions.`,
  },
  {
    fileName: '07_REV_CHAPTER_07.md',
    num: 7,
    title: 'RAPID REVISION MATRIX: CHAPTER 07',
    topic: 'August 2026 (Full Month Consolidated & PIB) Dossier',
    content: `## 1. High-Yield Policy Revisions & Statutory Milestones

| Sector / Program | Critical 2026 Milestone | Administrative Entity | Crucial Numerical Invariant |
| :--- | :--- | :--- | :--- |
| **Index of Core Industries (ICI)** | **Base Year revised to 2022-23; expanded to 9 industries** (Iron Ore added) | Office of Economic Adviser (DPIIT) | Refinery Products continues to hold maximum weight (~28%); Iron Ore weighted based on national mineral output. |
| **Regional Rural Banks (RRBs)** | **Record consolidated net profit of ₹10,176 Crore** in FY26 | NABARD Supervision | Capital infusion via 50:15:35 ratio (Centre : State : Sponsor Bank). Net NPAs down to 1.9%. |
| **PM Jan Dhan Yojana (PMJDY)** | **59.09 Crore accounts, ₹3,16,514 Crore deposits** | Department of Financial Services (MoF) | Overdraft facility up to **₹10,000** (no conditions up to ₹2,000; age limit 18–65 years); RuPay card accidental insurance up to **₹2 Lakhs**. |
| **e-Shram Portal** | **31.89 Crore unorganized worker registrations** | Ministry of Labour & Employment | Integrated with PMSYM, PM-JJBY, and National Career Service (NCS). |
| **Mobile Phone Manufacturing Scheme (MPMS)** | Notified with Tier TS1 & Tier TS2 incentive structures | MeitY | Focuses on localization of display assemblies, camera modules, and sub-PCB components. |

---

## 2. 60-Second Quick Scan: August Anchors
- **SEBI Cyber Suraksha Portal**: Mandatory centralized reporting dashboard for all stock brokers, depositories, and mutual funds for real-time cyber threat intelligence sharing.
- **GOBARdhan (Galvanizing Organic Bio-Agro Resources Dhan)**: ₹50 Lakh financial assistance per district under Swachh Bharat Mission (Grameen) for CBG plants.`,
  },
  {
    fileName: '08_REV_CHAPTER_08.md',
    num: 8,
    title: 'RAPID REVISION MATRIX: CHAPTER 08',
    topic: 'September 2026 (120 In-Depth Policy Clusters) Dossier',
    content: `## 1. Regulatory Codes & Global Finance Grid

| Strategic Framework | Core Provisions | Regulating Body | Examination Pitfall & Alert |
| :--- | :--- | :--- | :--- |
| **IFSCA Market Abuse Regulations 2026** | Comprehensive insider trading and market manipulation code | International Financial Services Centres Authority | Formally **replaces SEBI PIT and PFUTP regulations** inside GIFT IFSC jurisdiction. Applies to all IFSC listed securities. |
| **Qualified Central Counterparties (QCCPs)** | CCIL, NSE Clearing Ltd, BSE Clearing Corp declared QCCPs | RBI / SEBI | Banks holding exposure to QCCPs enjoy favorable capital risk weights of **2%** instead of bilateral exposure weights. |
| **Paris Paralympics 2026 Trajectories** | Record medal tally by Indian contingent | Paralympic Committee of India | Multi-medal winners in Para-Badminton, Para-Archery, and Para-Shooting. High-yield for Banking GA questions. |
| **Sovereign Credit Rating Reviews** | S&P / Fitch positive outlook affirmations | Global Rating Agencies | Sovereign rating remains at investment grade (BBB- / Baa3); debt-to-GDP trajectory anchored toward 56% target. |

---

## 2. 60-Second Memory Skeleton
- **IFSCA Headquarters**: GIFT City, Gandhinagar, Gujarat; established under IFSCA Act 2019; unified regulator for banking, capital markets, and insurance in IFSCs.
- **Inland Waterways National Highway Grid**: Focus on NW-1 (Ganga: Prayagraj to Haldia, 1620 km), NW-2 (Brahmaputra: Sadiya to Dhubri, 891 km).`,
  },
  {
    fileName: '09_REV_CHAPTER_09.md',
    num: 9,
    title: 'RAPID REVISION MATRIX: CHAPTER 09',
    topic: 'IBPS PO / Regulatory Mains 35+ Marks Guarantee Mega-Compendium',
    content: `## 1. The 35+ Marks Guarantee Examination Strike Grid

| Domain | High-Frequency Invariant Slabs | Common Paper-Setter Distractor Trap | Verified Correct Fact |
| :--- | :--- | :--- | :--- |
| **Union Budget Fiscal Deficit** | Target 4.9% of GDP for FY25; glide path to < 4.5% by FY26 | Stating target as 5.1% or mixing with Revenue Deficit | Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts). |
| **PM Surya Ghar: Muft Bijli Yojana** | Free electricity up to 300 units/month for 1 crore households | Conflating subsidy amount with 100% free equipment | Subsidy: ₹30,000 for 1 kW, ₹60,000 for 2 kW, ₹78,000 for 3 kW and above. |
| **National Green Hydrogen Mission** | Target: 5 MMT per annum green hydrogen production by 2030 | Attributing target date to 2025 or 2040 | SIGHT Scheme allocation: Component I (Electrolysers ₹4,440 cr), Component II (Green Hydrogen ₹13,050 cr). |
| **Atal Pension Yojana (APY)** | Pension slabs: ₹1,000, ₹2,000, ₹3,000, ₹4,000, ₹5,000 from age 60 | Income tax payers claim eligible | Income tax payers are **strictly excluded** from enrolling in APY since 1 Oct 2022. |
| **PM SVANidhi Scheme** | 3 tranches: ₹10,000 (1st), ₹20,000 (2nd), ₹50,000 (3rd) | 10% interest subsidy | Interest subsidy is **7% p.a.** credited quarterly; cashback up to ₹1,200 p.a. for digital transactions. |

---

## 2. 60-Second Retrieval Skeleton
- **Sukanya Samriddhi Yojana (SSY)**: Max deposit ₹1.5 Lakh/FY, Min ₹250; account opened for girl child up to 10 years of age; matures after 21 years from opening date.
- **Senior Citizens Savings Scheme (SCSS)**: Max investment limit enhanced to **₹30 Lakhs**; 5-year tenure extendable by 3 years; quarterly interest payout.
- **Mahila Samman Savings Certificate (MSSC)**: Max deposit ₹2 Lakhs; 2-year tenure; fixed interest rate **7.5% p.a.** compounded quarterly.`,
  },
  {
    fileName: '10_REV_CHAPTER_10.md',
    num: 10,
    title: 'RAPID REVISION MATRIX: CHAPTER 10',
    topic: 'Computer Aptitude, Digital Banking Systems & Cybersecurity Master',
    content: `## 1. Computer Systems, Protocols & Architecture Matrix

| Component / Layer | Protocol / Unit | Key Technical Function | Exam Distractor & Pitfall |
| :--- | :--- | :--- | :--- |
| **CPU Architecture** | Program Counter (PC) vs Instruction Register (IR) | PC holds address of **next** instruction to be executed; IR holds instruction **currently** being decoded. | Stating that PC holds the current instruction is a classic question trap! |
| **Memory Hierarchy** | Registers > Cache (L1, L2, L3) > RAM (SRAM, DRAM) > SSD > HDD | SRAM uses flip-flops (no refresh needed, faster); DRAM uses capacitors (needs periodic refreshing, slower). | DRAM is cheaper and denser than SRAM; main memory is built of DRAM. |
| **OSI 7-Layer Model** | Physical (Bits) $\rightarrow$ Data Link (Frames) $\rightarrow$ Network (Packets) $\rightarrow$ Transport (Segments) $\rightarrow$ Session $\rightarrow$ Presentation $\rightarrow$ Application | Router operates at Layer 3 (Network); Switch operates at Layer 2 (Data Link); Hub operates at Layer 1. | TCP and UDP operate at **Layer 4 (Transport)**. IP operates at **Layer 3**. |
| **Digital Banking Tech** | RTGS vs NEFT vs IMPS | RTGS: Real-time, gross settlement, min limit **₹2 Lakhs** (zero max limit); NEFT: Half-hourly batches, zero minimum limit; IMPS: Instant, operated by NPCI, 24x7x365, max limit **₹5 Lakhs**. | Both RTGS and NEFT are operated directly by **RBI** and are free of charge for online transactions since 2019. |
| **Cybersecurity Threats** | Ransomware vs Trojan vs Rootkit | Ransomware encrypts user data demanding ransom (e.g. WannaCry); Trojan disguises as legitimate software; Rootkit provides stealth administrative/root privileges undetected by OS. | A **Worm** is self-replicating and does NOT need a host program, unlike a standard Virus which requires host execution! |

---

## 2. 60-Second Memory Skeleton
- **ISO 20022**: Universal XML-based financial messaging standard adopted for RTGS and international payments replacing legacy SWIFT MT messages.
- **CBS (Core Banking Solutions)**: Centralized online banking engine (e.g., Finacle by Infosys, BaNCS by TCS, Flexcube by Oracle).
- **Phishing vs Vishing vs Smishing**: Phishing via Email, Vishing via Voice call, Smishing via SMS text message.`,
  },
];

console.log('Generating 10 Rapid Revision Matrices in 007/revision/current_affairs/...');

for (const rev of revisionChapters) {
  const filePath = path.join(revDir, rev.fileName);
  const fullContent = `# ${rev.title}\n\n**Topic**: ${rev.topic}  \n**Shelf**: 007 (Sovereign Master Knowledge Bastion)  \n**Curricular Link**: Chapter ${String(rev.num).padStart(2, '0')}\n\n---\n\n${rev.content}\n`;
  fs.writeFileSync(filePath, fullContent, 'utf-8');
  console.log(`✓ ${rev.fileName} written (${fullContent.length} bytes)`);
}

console.log('All 10 Rapid Revision Matrices generated successfully.');
