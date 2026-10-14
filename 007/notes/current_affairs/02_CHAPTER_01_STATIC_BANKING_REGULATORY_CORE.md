<div style="page-break-before: always;"></div>

# CHAPTER 01: STATIC BANKING, REGULATORY ACTS & PRUDENTIAL NORMS CORE
*Senior Paper-Setter Master Strike File: Verified Statutory Foundations, RBI Mandates & Banking Governance*

### Complete High-Yield Reference Matrix: Codes, Acts, HQs, Basel Ratios, Limits & Constitutional Schedules

## 0. ️ MASTER STATIC BANKING & REGULATORY FOUNDATIONS

[STA-001] **Financial Message Codes, Identifiers & Standard Formats (UTR, IFSC, MICR, LEI, SWIFT)**

### Master Financial Identifiers & Codes Matrix

| Code / Identifier | Length & Type | Canonical Structure & Decomposition | Regulatory Mandate & Application Threshold |
| :--- | :--- | :--- | :--- |
| **MICR** *(Magnetic Ink Character Recognition)* | **9** Numeric Digits | `3 (City Code / 1st 3 PIN digits)` + `3 (Bank Code)` + `3 (Branch Code)` | Printed at cheque bottom in magnetic ink (E-13B font) for automated clearing (CTS) under NI Act, 1881 |
| **PAN** *(Permanent Account Number)* | **10** Alphanumeric | 5 Letters + 4 Digits + 1 Letter.<br>• **4th char** = Entity Status: `P` (Individual/Person), `C` (Company), `F` (Firm), `H` (HUF), `A` (AOP), `T` (Trust), `B` (BOI), `J` (Artificial Juridical Person)<br>• **5th char** = 1st letter of Holder's Surname / Entity Name | Statutory direct tax identification under Section 139A of Income-tax Act, 1961 (CBDT) |
| **IFSC** *(Indian Financial System Code)* | **11** Alphanumeric | `4 (Bank Identity)` + **`0` (Fixed Zero, reserved for future use)** + `6 (Branch Identity)` | Mandatory routing code for electronic interbank clearing in NEFT, RTGS, and IMPS (RBI) |
| **PRAN** *(Permanent Retirement Account Number)* | **12** Numeric Digits | Unique lifetime portable retirement account identifier | National Pension System (NPS) & Atal Pension Yojana (APY) under PFRDA |
| **UAN** *(Universal Account Number)* | **12** Numeric Digits | Unique lifetime portable identifier for formal sector workforce | Mandatory account registry under Employees' Provident Fund Organisation (EPFO) |
| **GSTIN** *(GST Identification Number)* | **15** Alphanumeric | `2 (State Code: e.g. 07 Delhi, 27 MH)` + `10 (PAN of Entity)` + `1 (Entity No)` + `1 ('Z' by default)` + `1 (Check digit)` | Statutory indirect tax registration under CGST / SGST / IGST Acts (CBIC) |
| **NEFT UTR** *(Unique Transaction Reference)* | **16** Alphanumeric | Unique sequential identifier generated per interbank batch clearing transaction | National Electronic Funds Transfer (RBI half-hourly batch clearing system) |
| **LEI** *(Legal Entity Identifier)* | **20** Alphanumeric | Global ISO 17442 standard identifier for entities participating in financial transactions | Dual Mandatory Regulatory Thresholds:<br>1. **Credit Exposure $\ge$ ₹5 Crore**: Non-individual borrowers across SCBs, AIFIs, NBFCs (barred from credit renewal/enhancement if missing)<br>2. **Single Remittance $\ge$ ₹50 Crore**: Cross-border transactions in RTGS/NEFT under FEMA |
| **RTGS UTR** *(Unique Transaction Reference)* | **22** Alphanumeric | `4 (Bank IFSC)` + `1 ('R' for RTGS)` + `1 (Channel: 'C' Customer, 'I' Inter-bank, 'P' Participant)` + `8 (Date: YYYYMMDD)` + `8 (Sequential Running No: nnnnnnnn)` | Real-Time Gross Settlement system governed by RBI RTGS System Regulations |
| **EPF Establishment ID** | **22** Alphanumeric | Region Code + Office Code + Establishment Code + Extension Code | EPFO employer establishment identification & compliance registry |
| **SWIFT / BIC** *(Business Identifier Code)* | **8 or 11** Alphanumeric | `4 (Bank Code)` + `2 (Country Code: ISO 3166-1 alpha-2)` + `2 (Location Code)` + `[3 Optional Branch Code]` | Global financial messaging under ISO 9362; International Headquarters: **La Hulpe, Belgium** |

**EXAM ANGLE:**

- The RTGS vs NEFT Trap: RTGS UTR has **22 characters**; NEFT UTR has **16 characters** (examiners frequently swap these two numbers).
- RTGS UTR Structural Anatomy: **4 IFSC + 1 System (R) + 1 Channel (C) + 8 Date (YYYYMMDD) + 8 Sequence = 22** (Notice: 8-digit sequence number, NOT 9-digit; 6th character is the Channel identifier).
- LEI Dual-Threshold Trap: Non-individual borrower credit exposure threshold is **≥ ₹5 Crore** (phased in by April 2025). The **₹50 Crore** threshold applies strictly to cross-border remittances under FEMA.
- The IFSC 5th Character: The 5th character is always numeric **0 (zero)**, NEVER the letter 'O'.
- The MICR Sequence Trap: MICR 9-digit sequence is **City → Bank → Branch** (Examiners often trick candidates with Bank → City → Branch).
- Target MCQ: 'How many alphanumeric characters are there in an RTGS UTR number, and what is its sequence length?' → **22 characters total (with an 8-digit running sequence number)**.

---

[STA-002] **Evolution of Modern Indian Banking: SBI Genesis, Nationalisation & Statutory Acts**

### 1. Genesis Timeline: Presidency Banks to State Bank of India

| Historical Epoch / Entity | Key Date / Year | Structural Transformation & Constituent Banks | Statutory Authority & Equity Holdings |
| :--- | :--- | :--- | :--- |
| **Presidency Banks** | 1806, 1840, 1843 | • **Bank of Calcutta** (founded 1806, renamed **Bank of Bengal** 1809)<br>• **Bank of Bombay** (founded 1840)<br>• **Bank of Madras** (founded 1843) | British Crown chartered provincial banking entities with autonomous note-issuing privileges |
| **Imperial Bank of India** | **27 January 1921** | Tripartite amalgamation of Bank of Bengal, Bank of Bombay, and Bank of Madras into a single commercial banking entity | Enacted under Imperial Bank of India Act, 1920 (acted as banker to government before RBI) |
| **State Bank of India (SBI)** | **1 July 1955** | Conversion of Imperial Bank of India into the **State Bank of India** | Enacted under **State Bank of India Act, 1955** on the statutory recommendations of the **All India Rural Credit Survey Committee (chaired by A.D. Gorwala)**.<br>*(RBI originally subscribed 60% equity; Government of India acquired RBI stake in 2007)* |

### 2. The Two Epochs of Bank Nationalisation

| Nationalisation Wave | Effective Date | Deposit Threshold Mandate | Scope & Number of Banks | Governing Statute & Historical Context |
| :--- | :--- | :--- | :--- | :--- |
| **First Wave** | **19 July 1969** | Aggregate public deposits $\ge$ **₹50 Crore** | **14 Major Commercial Banks** | Banking Companies (Acquisition and Transfer of Undertakings) Act, 1970 *(Indira Gandhi premiership)* |
| **Second Wave** | **15 April 1980** | Aggregate public deposits $\ge$ **₹200 Crore** | **6 Commercial Banks** | Banking Companies (Acquisition and Transfer of Undertakings) Act, 1980 |

### 3. Master Statutory Banking Architecture & Core Anchor Sections

| Governing Statute | Key Section | Legal Mandate & Core Operational Provision | Regulatory Scope & High-Yield Parameters |
| :--- | :--- | :--- | :--- |
| **Reserve Bank of India Act, 1934** | **Section 17** | **Legitimate Business of RBI** | Defines authorized banking, rediscounting, and sovereign financial operations RBI may conduct |
| | **Section 22** | **Exclusive Banknote Issuance** | Confers exclusive authority to issue currency banknotes in India *(except ₹1 currency notes and metallic coins issued by Ministry of Finance)* |
| | **Section 24** | **Maximum Denomination Ceiling** | Authorizes RBI to issue banknotes up to **₹10,000** denomination *(Coinage Act, 2011 authorizes coins up to **₹1,000**)* |
| | **Section 42(1)** | **Cash Reserve Ratio (CRR)** | Mandates Scheduled Commercial Banks to maintain CRR cash balances with RBI as % of NDTL *(RBI (Amendment) Act 2006 removed earlier statutory 3% floor and 20% ceiling; RBI pays 0% interest)* |
| | **Sections 45-ZB to 45-ZG** | **Monetary Policy Committee (MPC)** | Codifies composition (6 members: 3 RBI, 3 Central Govt), 4-year non-renewable tenure, 4-member quorum, casting vote of Governor |
| **Banking Regulation Act, 1949** | **Section 5(b)** | **Statutory Definition of 'Banking'** | Accepting, for the purpose of lending or investment, of deposits of money from the public, repayable on demand or otherwise, and withdrawable by cheque, draft, order or otherwise |
| | **Section 22** | **Mandatory Bank Licensing** | Mandatory license from RBI required to commence or carry on banking business in India |
| | **Section 24** | **Statutory Liquidity Ratio (SLR)** | Mandates banks to maintain unencumbered liquid assets (gold, approved G-Secs, cash) against NDTL *(Statutory ceiling capped at **40%**; current operational rate is 18.00%)* |
| | **Section 35A** | **Comprehensive Direction-Issuing Powers** | Comprehensive statutory power empowering RBI to issue binding executive directions to all banks in public interest or to prevent banking affairs from being conducted prejudicial to depositors |
| | **Section 49A** | **Cheque Acceptance Restriction** | Restricts acceptance of deposits withdrawable by cheque to licensed banks only |
| **Negotiable Instruments Act, 1881** | **Section 4** | **Promissory Note** | Defines Promissory Note: Unconditional undertaking in writing signed by maker to pay certain sum of money to, or to the order of, a certain person, or bearer |
| | **Section 5** | **Bill of Exchange** | Defines Bill of Exchange: Unconditional order in writing signed by maker directing a certain person to pay a certain sum of money |
| | **Section 6** | **Cheque & Truncation** | Defines Cheque: Bill of exchange drawn on a specified banker, payable always on demand *(includes truncated electronic image of cheque under CTS)* |
| | **Section 138** | **Criminal Dishonour of Cheque** | Codifies criminal offense and penalties for dishonour of cheque for insufficiency of funds: **Imprisonment up to 2 years, or fine up to twice the face value of the cheque, or both** |

**EXAM ANGLE:**

- Legislative Origin: CRR is governed by **Section 42 of RBI Act 1934**; SLR is governed by **Section 24 of Banking Regulation Act 1949** (critical distractor pair in banking exams).
- SBI Foundation Date: **July 1, 1955** under SBI Act 1955 based on the **A.D. Gorwala Committee** (All India Rural Credit Survey).
- Target MCQ: 'In which year was the Imperial Bank of India converted into State Bank of India?' → **1955**.

---

[STA-003] **Institutional Headquarters, Global Foreign Banks & Multilateral Bodies**

### 1. Master Directory of Indian Financial Regulators & Statutory Headquarters

| Headquarters City | Key Financial Regulators & Public Sector Bodies | Strategic Operational / Regional Distinction |
| :--- | :--- | :--- |
| **Mumbai** | • **Reserve Bank of India (RBI)**<br>• **Securities and Exchange Board of India (SEBI)**<br>• **National Bank for Agriculture and Rural Development (NABARD)**<br>• **Export-Import Bank of India (EXIM Bank)**<br>• **State Bank of India (SBI)**<br>• **National Payments Corporation of India (NPCI)**<br>• **Indian Banks' Association (IBA)** | Commercial and financial capital of India; apex regulator seats for central banking, capital markets, retail payments, and rural refinance |
| **Hyderabad** | • **Insurance Regulatory and Development Authority of India (IRDAI)**<br>• **Insurance Information Bureau of India (IIB)** | Single statutory data repository for Indian insurance *(IIB established 2009 by IRDAI; IRDAI shifted from New Delhi in 2001)* |
| **New Delhi** | • **Pension Fund Regulatory and Development Authority (PFRDA)**<br>• **National Housing Bank (NHB)**<br>• **Competition Commission of India (CCI)**<br>• **Insolvency and Bankruptcy Board of India (IBBI)** | National administrative and statutory competition/insolvency regulatory hub |
| **Lucknow** | • **Small Industries Development Bank of India (SIDBI)** | Apex financial institution for MSME promotion, financing, and development *(High-frequency exam trap)* |
| **Kolkata** | • **UCO Bank**<br>• **Bandhan Bank**<br>• **Tea Board of India** | Eastern regional financial center |
| **Chennai** | • **Indian Bank**<br>• **Indian Overseas Bank (IOB)** | Southern public sector banking cluster |
| **Bengaluru** | • **Canara Bank** | Apex public sector anchor in southern tech corridor |
| **Vadodara / Mumbai** | • **Bank of Baroda (BOB)** | Dual-center structure: **Registered Head Office in Vadodara**; **Corporate Centre in Mumbai** |

### 2. Foreign Banks Operating in India (Global HQ & Indian Operating Mode)

| Foreign Bank | Country of Origin | Global Headquarters | Indian Operating Model & Presence |
| :--- | :--- | :--- | :--- |
| **Sumitomo Mitsui Banking Corporation (SMBC)** | Japan | **Tokyo** | Operates as Wholly Owned Subsidiary (WOS) in India |
| **Mitsubishi UFJ Financial Group (MUFG)** | Japan | **Tokyo** | Major Japanese corporate lender with multi-branch Indian network |
| **Mizuho Bank** | Japan | **Tokyo** | Primary Japanese corporate banking conglomerate |
| **DBS Bank India** | Singapore | **Singapore** | Pioneer foreign lender converting to Wholly Owned Subsidiary (WOS) mode in India; amalgamated Lakshmi Vilas Bank (LVB) |
| **BNP Paribas** | France | **Paris** | Major European corporate and institutional lender |
| **Société Générale** | France | **Paris** | Key French multinational investment bank and financial services provider |
| **Deutsche Bank** | Germany | **Frankfurt** | Leading European commercial, institutional, and wealth management bank in India |
| **HSBC (Hongkong and Shanghai Banking Corp)** | United Kingdom | **London** | Extensive retail, wealth management, and corporate banking franchise across major metros |
| **Barclays Bank** | United Kingdom | **London** | Corporate, investment banking, and global shared service operations |
| **Standard Chartered Bank** | United Kingdom | **London** | Oldest and largest foreign bank branch network in India |
| **Citibank** | United States | **New York** | Focus on corporate, institutional banking, and multinational treasury *(consumer banking acquired by Axis Bank)* |
| **JPMorgan Chase** | United States | **New York** | Premier corporate, investment banking, and global transaction services |
| **Bank of America** | United States | **Charlotte, North Carolina** | Institutional banking, treasury, and global capability centers |

### 3. Apex Multilateral Financial Institutions & Global Leadership

| Multilateral Financial Institution | Global Headquarters | Apex Leadership (President / Managing Director) | Key Indian Leadership & Sovereign Representative |
| :--- | :--- | :--- | :--- |
| **World Bank Group (IBRD / IDA / IFC / MIGA)** | **Washington D.C., USA** | President: **Ajay Banga** *(14th President)* | Executive Director representing Bangladesh, Bhutan, India, and Sri Lanka: **Neelkanth Mishra** *(succeeded Parameswaran Iyer in 2026)* |
| **International Monetary Fund (IMF)** | **Washington D.C., USA** | Managing Director: **Kristalina Georgieva** | First Deputy MD: **Dan Katz** *(succeeded Gita Gopinath)*; Deputy MDs: Bo Li, Kenji Okamura, Nigel Clarke |
| **Asian Development Bank (ADB)** | **Mandaluyong / Manila, Philippines** | President: **Masato Kanda** *(assumed office 24 Feb 2025; re-elected Sept 2026 for 5-year term)* | India is the **4th largest shareholder** (6.3% voting equity) |
| **New Development Bank (NDB / BRICS Bank)** | **Shanghai, China** | President: **Dilma Rousseff** | 5 founding BRICS nations held equal 20% initial voting equity; Regional Office at GIFT City, Gujarat |
| **Asian Infrastructure Investment Bank (AIIB)** | **Beijing, China** | President: **Jin Liqun** | **India is the 2nd largest shareholder** (7.6% voting power, behind China's 26.6%) |
| **Bank for International Settlements (BIS)** | **Basel, Switzerland** | General Manager: **Agustín Carstens** | Known as the *"Central Bank of Central Banks"*; host of Basel Committee on Banking Supervision (BCBS) |

**EXAM ANGLE:**

- Headquarters Traps: IRDAI and IIB are in **Hyderabad** (not Mumbai or Delhi); SIDBI is in **Lucknow** (not Mumbai).
- Foreign Bank Origin: SMBC, Mizuho, MUFG = **Japan**; DBS = **Singapore**; BNP Paribas = **Paris, France**.
- Target MCQ: 'Where is the headquarters of Insurance Information Bureau of India (IIB) located?' → **Hyderabad**.

---

[STA-004] **Basel III Regulatory Architecture, Balance Sheet Ratios & Delinquency Timeline**

### 1. Basel III Capital Adequacy & Balance Sheet Liquidity Ratios

| Basel III Regulatory Metric | Basel Accord Minimum | RBI Mandated Floor (Indian SCBs) | Regulatory Horizon & Mathematical Formula |
| :--- | :--- | :--- | :--- |
| **Common Equity Tier 1 (CET1)** | **4.5%** | **5.5%** | Highest quality loss-absorbing equity capital (% of RWAs) |
| **Capital Conservation Buffer (CCB)** | **2.5%** | **2.5%** | Maintained strictly in the form of Common Equity Tier 1 (CET1) |
| **Minimum Tier 1 Capital** | **6.0%** | **7.0%** | Tier 1 Capital = CET1 + Additional Tier 1 (AT1) Capital |
| **Total Capital Adequacy Ratio (CRAR)** | **9.0%** | **11.5%** | Composite capital requirement: 9.0% base CRAR + 2.5% CCB |
| **Liquidity Coverage Ratio (LCR)** | $\ge$ **100%** | $\ge$ **100%** | Holds unencumbered High-Quality Liquid Assets against severe stress outflows:<br>$$\text{LCR} = \frac{\text{Stock of HQLA}}{\text{Total net cash outflows over 30 days}} \ge 100\%$$ |
| **Net Stable Funding Ratio (NSFR)** | $\ge$ **100%** | $\ge$ **100%** | Structural resilience over a **1-year horizon**:<br>$$\text{NSFR} = \frac{\text{Available Stable Funding (ASF)}}{\text{Required Stable Funding (RSF)}} \ge 100\%$$ |
| **Leverage Ratio** | **3.0%** | **4.0% for D-SIBs**<br>**3.5% for other banks** | Non-risk-weighted balance sheet constraint:<br>$$\text{Leverage Ratio} = \frac{\text{Tier 1 Capital}}{\text{Total Balance Sheet Exposure}}$$ |

### 2. Asset Classification, Delinquency Ladder & Provisioning Matrix

| Asset Classification | Overdue / Delinquency Timeline | Provisioning Requirement (Secured Advances) | Provisioning Requirement (Unsecured Advances) | Regulatory Rules & Exceptions |
| :--- | :--- | :--- | :--- | :--- |
| **Standard Asset** | Serviced regularly; **0 days** overdue | 0.25% to 1.00% *(General)* | Same | Normal performing asset generating income |
| **SMA-0** *(Special Mention Account)* | Overdue between **1 to 30 days** | Standard provision | Standard provision | Early stress alert trigger (Principal or Interest) |
| **SMA-1** | Overdue between **31 to 60 days** | Standard provision | Standard provision | Intermediate stress stage |
| **SMA-2** | Overdue between **61 to 90 days** | Standard provision | Standard provision | Advanced default warning stage |
| **Non-Performing Asset (NPA)** | Overdue for **more than 90 days** | Ceases to accrue income on cash basis | Ceases to accrue income | **Agricultural Loans**: Overdue for **2 crop seasons** (short-duration crops) or **1 crop season** (long-duration crops) |
| **Substandard Asset** | Remained an NPA for a period $\le$ **12 months** | **15%** provision | **25%** provision | First stage of Non-Performing Assets |
| **Doubtful Asset — D1** | Remained substandard for **up to 1 year** | **25%** provision | **100%** provision | Second stage of Non-Performing Assets |
| **Doubtful Asset — D2** | Remained substandard for **1 to 3 years** | **40%** provision | **100%** provision | Advanced doubtful stage |
| **Doubtful Asset — D3** | Remained substandard for **exceeding 3 years** | **100%** provision | **100%** provision | Fully provisioned |
| **Loss Asset** | Uncollectible; identified by bank, internal/external auditors, or RBI | **100%** provision or write-off | **100%** provision or write-off | Zero salvageable security value |

**EXAM ANGLE:**

- LCR Horizon Trap: LCR is strictly for **30 calendar days** of stress (do NOT pick 90 days or 1 year); NSFR is for **1 year**.
- SMA Classification Sequence: SMA-0 (1-30 days), SMA-1 (31-60 days), SMA-2 (61-90 days). Beyond 90 days is **Substandard NPA**.
- Target MCQ: 'Under which global regulatory framework was the Liquidity Coverage Ratio (LCR) introduced?' → **Basel III Framework**.

---

[STA-005] **Operational Banking Limits, Consumer Redressal & Deposit Insurance**

### 1. ATM Free Monthly Limits, Interchange Fees & Failed Transaction SLA

| ATM Network / Service | Free Monthly Transaction Limit | Permissible Interchange Fee Cap | Failed Transaction Turnaround (SLA) & Penalty |
| :--- | :--- | :--- | :--- |
| **Own Bank ATMs** | Minimum **5 free transactions per month** *(inclusive of financial & non-financial)* | Not Applicable *(Internal)* | • **Reversal SLA**: Funds reversed within **T+5 calendar days**<br>• **Statutory Penalty**: Delay beyond T+5 attracts **₹100 per day** payable directly to customer without requiring a complaint |
| **Other Bank ATMs (6 Designated Metros)** | Minimum **3 free transactions per month** *(Metros: Mumbai, New Delhi, Chennai, Kolkata, Bengaluru, Hyderabad)* | • **Financial Transaction**: Max **₹17** per transaction<br>• **Non-Financial Transaction**: Max **₹6** per transaction | Same statutory T+5 SLA & ₹100/day penalty rule |
| **Other Bank ATMs (Non-Metro Centers)** | Minimum **5 free transactions per month** | • **Financial Transaction**: Max **₹17** per transaction<br>• **Non-Financial Transaction**: Max **₹6** per transaction | Same statutory T+5 SLA & ₹100/day penalty rule |

### 2. Reserve Bank Integrated Ombudsman Architecture (RB-IOS: 2021 vs 2026 Regimes)

| Regulatory Parameter | Predecessor Regime / RB-IOS 2021 *(Nov 2021 – June 2026)* | Operative RB-IOS 2026 *(Effective 1 July 2026 onward)* |
| :--- | :--- | :--- |
| **Scheme Integration** | Unifies Banking Ombudsman (2006), NBFC Ombudsman (2018), and Digital Transactions Ombudsman (2019) | Retains 'One Nation One Ombudsman' framework |
| **Centralized Intake Portal** | **CRPC (Centralised Receipt and Processing Centre)** located at **RBI Chandigarh** | **CRPC at RBI Chandigarh** |
| **Regulated Entities Covered** | Commercial Banks, RRBs, StCBs, DCCBs, Scheduled UCBs, qualifying NBFCs | Commercial Banks, RRBs, StCBs, DCCBs, Scheduled & Non-Scheduled UCBs (deposits $\ge$ ₹50 Cr), qualifying NBFCs (assets $\ge$ ₹100 Cr/customer interface), Non-bank PPI issuers, CICs |
| **Direct Financial Loss Compensation** | Up to **₹20 Lakh** maximum | Enhanced to **₹30 Lakh** maximum |
| **Mental Agony / Harassment Compensation** | Up to **₹1 Lakh** additional | Enhanced to **₹3 Lakh** additional |
| **Maximum Composite Award** | **₹21 Lakh** (₹20L + ₹1L) | **₹33 Lakh** (₹30L + ₹3L) |
| **Complaint Filing Deadline** | Within **90 days** from expiry of applicable response timeline or date of last communication from Regulated Entity, whichever is later | Within **90 days** from expiry of applicable response timeline or date of last communication from Regulated Entity, whichever is later |
| **Appellate Authority & Appeal Window** | **Executive Director in-charge of CEPD at RBI**; Complainant may appeal within **30 days of receiving the Award** *(appeal available strictly against an Award, not rejection)* | **Executive Director in-charge of CEPD at RBI**; Complainant may appeal within **30 days of receiving the Award** *(appeal available strictly against an Award, not rejection)* |

### 3. DICGC Deposit Insurance & 90-Day Moratorium Resolution Breakdown

| Statutory Phase | Responsible Entity | Action Mandate & Verification | Statutory Time Window |
| :--- | :--- | :--- | :--- |
| **Stage 1: Depositor List Submission** | Insured Distressed Bank | Compiles and submits complete list of insured depositors to DICGC | Within **45 days** of RBI moratorium / directions |
| **Stage 2: Claim Verification** | DICGC | Verifies claims and depositor accounts against bank records | Within **30 days** of receipt of depositor list |
| **Stage 3: Fund Disbursement** | DICGC | Direct credit of insured funds up to ₹5 Lakh to depositors | Within **15 days** following claim verification |
| **Total Statutory Ceiling** | **Composite Process** | **Insures principal + interest up to ₹5 Lakh per depositor per bank in same right/capacity** | **Exactly 90 days** *(45 + 30 + 15 = 90 days)* under Section 18A, DICGC Act 1961 *(Authorized capital ₹50 Cr; wholly-owned subsidiary of RBI)* |

**EXAM ANGLE:**

- The Ombudsman Regime & Temporal Slabs Trap:
  - *2021 Scheme Baseline (pre-July 2026)*: **₹20 Lakh** (direct loss) + **₹1 Lakh** (mental agony).
  - *2026 Scheme Baseline (from 1 July 2026)*: **₹30 Lakh** (direct loss) + **₹3 Lakh** (mental agony).
- RB-IOS Filing Deadline: After first approaching the Regulated Entity, complaint may be filed before the RBI Ombudsman within **90 days from expiry of the applicable response timeline or the date of the last communication, whichever is later**.
- RB-IOS Appeal Right: Appeal is available **strictly against an Award** of the RBI Ombudsman (appeal does not lie against rejection); within **30 days of receiving the Award**.
- Failed ATM Reversal: Timeline is **T+5 calendar days**; delay penalty is **₹100 per day**.
- DICGC Payout Window: Exactly **90 days** from date of RBI moratorium/directions (Bank submits depositor list within 45 days; DICGC verifies claims within 30 days; payment made within subsequent 15 days; statutory breakdown: 45 + 30 + 15 = 90 days).

---

[STA-006] **Constitutional Schedules, Strategic Maritime Straits & High-Frequency Static GK**

### 1. The 12 Schedules of the Constitution of India Master Table

| Constitutional Schedule | Canonical Subject Matter | Constitutional Nuance, Allocation & Amendments |
| :--- | :--- | :--- |
| **First Schedule** | States & Union Territories | Official names, territorial jurisdiction, and boundary extents |
| **Second Schedule** | Emoluments, Allowances & Privileges | President, Governors, Speaker/Deputy Speaker, Chairman/Deputy Chairman, Judges of Supreme Court & High Courts, and CAG |
| **Third Schedule** | Forms of Oaths & Affirmations | Union Ministers, MPs, Supreme Court & High Court Judges, Candidates for Election to Parliament/State Legislatures, State Ministers, MLAs/MLCs, CAG |
| **Fourth Schedule** | **Allocation of Seats in Rajya Sabha** | Council of States seat distribution across States and UTs *(Current statutory strength: 245 = 233 elected representatives + 12 nominated by President under Article 80)* |
| **Fifth Schedule** | Scheduled Areas & Scheduled Tribes | Administration and control of Scheduled Areas and STs in states other than Assam, Meghalaya, Tripura, Mizoram |
| **Sixth Schedule** | Tribal Areas in North-Eastern States | Autonomous District Councils (ADCs) in 4 states: **Assam, Meghalaya, Tripura, and Mizoram (AMTM)** |
| **Seventh Schedule** | Division of Legislative Powers | Three legislative lists: **List I (Union List - 100 subjects)** incl. Banking, Currency, Defence, Foreign Affairs; **List II (State List - 61 subjects)**; **List III (Concurrent List - 52 subjects)** |
| **Eighth Schedule** | **Official Recognized Languages** | **22 Languages** *(Originally 14; 21st CAA 1967 added Sindhi; 71st CAA 1992 added Konkani, Manipuri, Nepali; 92nd CAA 2003 added Bodo, Dogri, Maithili, Santhali)* |
| **Ninth Schedule** | Validation of Certain Acts & Regulations | Originally insulated from judicial review by 1st Constitutional Amendment Act, 1951 *(Post-24 April 1973 laws subject to Basic Structure judicial review per I.R. Coelho case)* |
| **Tenth Schedule** | **Anti-Defection Law** | Disqualification of members of Parliament and State Legislatures on grounds of defection *(Added via 52nd Constitutional Amendment Act, 1985)* |
| **Eleventh Schedule** | Panchayati Raj Institutions (PRIs) | **29 Functional Subjects**, powers, and authority of Panchayats *(Added via 73rd Constitutional Amendment Act, 1992)* |
| **Twelfth Schedule** | Municipalities (Urban Local Bodies) | **18 Functional Subjects**, powers, and authority of Municipalities *(Added via 74th Constitutional Amendment Act, 1992)* |

### 2. Strategic Global Maritime Straits & International Choke Points

| Maritime Strait / Choke Point | Water Bodies Connected | Landmasses Separated / Bordering Nations | Strategic Importance & Global Trade Role |
| :--- | :--- | :--- | :--- |
| **Strait of Hormuz** | **Persian Gulf** $\longleftrightarrow$ **Gulf of Oman** & Arabian Sea | Iran (North) $\longleftrightarrow$ Musandam exclave of Oman & UAE (South) | World's foremost petroleum transit choke point; handles ~20% of global petroleum liquids |
| **Bab-el-Mandeb Strait** | **Red Sea** $\longleftrightarrow$ **Gulf of Aden** & Indian Ocean | Yemen on Arabian Peninsula $\longleftrightarrow$ Djibouti & Eritrea in Horn of Africa | Southern maritime gateway to the Suez Canal; critical Europe-Asia trade artery |
| **Strait of Malacca** | **Andaman Sea (Indian Ocean)** $\longleftrightarrow$ **South China Sea (Pacific Ocean)** | Peninsular Malaysia $\longleftrightarrow$ Indonesian island of Sumatra | Shortest sea transit route between Persian Gulf energy suppliers and East Asian consumer markets |
| **Turkish Straits (Bosphorus & Dardanelles)** | **Black Sea** $\longleftrightarrow$ **Mediterranean Sea** (via Sea of Marmara) | European Turkey $\longleftrightarrow$ Asian Turkey (Anatolia) | Governed internationally by the **1936 Montreux Convention**; sole maritime outlet for Black Sea nations |
| **Palk Strait** | **Bay of Bengal** $\longleftrightarrow$ **Palk Bay / Gulf of Mannar** | Tamil Nadu (India) $\longleftrightarrow$ Jaffna Peninsula (Sri Lanka) | Strategic shallow-water international passage separating India and Sri Lanka |

![Critical Maritime Choke Points & Global Trade Routes](/images/maritime_choke_points.jpg)
*Figure STA-006: Critical Global Maritime Choke Points (Turkish Straits, Hormuz, Bab-el-Mandeb, Palk Strait, Malacca) and Primary Strategic Petroleum/Cargo Transit Routes.*

### 3. Core Environmental Treaties & Global Maritime Organizations

| Treaty / International Body | Headquarters / Framework | Apex Target / Regulatory Role | Canonical Legal Mandate |
| :--- | :--- | :--- | :--- |
| **Paris Climate Agreement (COP21, 2015)** | Adopted under UNFCCC framework | Hold global temperature rise to **well below 2°C** above pre-industrial levels; pursue aggressive efforts to **limit increase to 1.5°C** | Legally binding global treaty on climate change mitigation and adaptation |
| **BIMCO (Baltic and International Maritime Council)** | **Copenhagen, Denmark** *(est. 1905)* | World's largest non-governmental association of shipowners, operators, and charterers | Represents over 60% of the world's commercial cargo merchant fleet |

**EXAM ANGLE:**

- Fourth Schedule Trap: Allocates seats in **Rajya Sabha** (Council of States), NOT Lok Sabha.
- Strait of Hormuz: Connects **Persian Gulf with Gulf of Oman** (do NOT pick Red Sea or Gulf of Aden).
- Paris Agreement Target: Goal is **1.5°C / well below 2°C** above pre-industrial levels.
- Target MCQ: 'Under which Schedule of the Constitution are Rajya Sabha seats allocated to States and Union Territories?' → **Fourth Schedule**.

---

[STA-007] **High-Frequency Constitutional Articles, Taxation Forms & Functions of Money**

### 1. Core Financial & Economic Articles of the Constitution of India

| Constitutional Article | Constitutional Mechanism / Subject | Core Legal Mandate, Composition & Quorum Rules |
| :--- | :--- | :--- |
| **Article 112** | **Annual Financial Statement (Union Budget)** | Mandates presentation of estimated receipts and expenditure of Government of India for every financial year before both Houses of Parliament |
| **Article 246A & 279A** | **Goods and Services Tax (GST) & GST Council** | Introduced by **101st Constitutional Amendment Act, 2016**.<br>• **Article 246A**: Simultaneous legislative power to Parliament and State Legislatures.<br>• **Article 279A**: **GST Council** chaired by Union Finance Minister; Voting weight: Centre holds **1/3rd (33.33%)**, States hold **2/3rd (66.67%)**; requires **3/4th (75%) majority** to pass decisions |
| **Article 266(1)** | **Consolidated Fund of India** | All sovereign revenues received, loans raised, and loan repayments received flow into this fund; zero expenditure permitted without Parliamentary appropriation |
| **Article 266(2)** | **Public Account of India** | All other public moneys received by or on behalf of GoI (PF, small savings deposits, judicial deposits); executive withdrawal without legislative vote |
| **Article 267** | **Contingency Fund of India** | Imprest placed at disposal of the President to meet urgent unforeseen expenditure pending Parliamentary authorization *(Corpus enhanced to **₹30,000 Crore** via Finance Act, 2021; managed on President's behalf by Secretary, Department of Economic Affairs)* |
| **Article 280** | **Finance Commission** | Mandates President to constitute a Finance Commission every 5 years to recommend tax devolution and grants-in-aid.<br>• **16th Finance Commission**: Chaired by **Dr. Arvind Panagariya** (Secretary: Ritvik Ranjanam Pandey; operational for FY27–FY31) |
| **Article 300A** | **Right to Property (Constitutional / Legal Right)** | Originally a Fundamental Right under Article 19(1)(f) & Article 31; omitted from Part III and reconstituted as a **Legal / Constitutional Right under Article 300A in Part XII** via the **44th Constitutional Amendment Act, 1978** *(No person shall be deprived of property save by authority of law)* |

### 2. Core Income Tax Certificates, Return Forms & Declarations

| Tax Form / Certificate | Statutory Purpose | Eligible Taxpayer / Condition Threshold | Governing Legal Section |
| :--- | :--- | :--- | :--- |
| **Form 16** | Certificate of **Tax Deducted at Source (TDS) on Salary** | Salaried employees; issued annually by employer.<br>• **Part A**: TDS summary, TAN, PAN<br>• **Part B**: Gross salary breakup, Chapter VI-A deductions | **Section 203 of Income Tax Act, 1961** |
| **Form 16A** | Certificate of **TDS on Non-Salary Payments** | Deductees receiving fixed deposit interest, mutual fund dividends, professional fees, or contractual payments | Section 203 of Income Tax Act, 1961 |
| **Form 15G** | Self-declaration for **Nil TDS on Interest Income** | **Individual below 60 years or HUF**; estimated total income must not exceed basic exemption limit | **Section 197A** of Income Tax Act, 1961 |
| **Form 15H** | Self-declaration for **Nil TDS on Interest Income** | **Senior Citizens (aged 60 years or above)**; net computed tax liability on estimated total income must be zero | **Section 197A** of Income Tax Act, 1961 |
| **Form 26AS & AIS** | Comprehensive Annual Tax Statement | All taxpayers; consolidated electronic statement of TDS, TCS, advance tax, self-assessment tax, and high-value Specified Financial Transactions (SFT) | Section 285BB & Rule 114-I |
| **Form 60** | Declaration in lieu of PAN | Individuals entering into specified high-value financial transactions who do **not possess a PAN card** | Rule 114B of Income Tax Rules |
| **Form 61** | Declaration for Agricultural Income | Persons whose income is derived **exclusively from agriculture** and who do not possess any other taxable income | Rule 114B of Income Tax Rules |

### 3. The Three Fundamental Macroeconomic Functions of Money

| Function of Money | Conceptual Definition | Operational Economic Role |
| :--- | :--- | :--- |
| **Unit of Account** | Standard numerical monetary unit of measurement of market value | Provides accounting baseline for pricing goods/services, corporate balance sheets, and recording national income & expenditure (GDP) |
| **Medium of Exchange** | Universal intermediary instrument facilitating trade and payments | Eliminates prohibitive inefficiencies and double-coincidence-of-wants dilemmas of barter |
| **Store of Value** | Asset preserving purchasing power into the future | Allows wealth to be saved and retrieved over time *(eroded primarily by inflation)* |

### 4. Global Governance & Strategic Bilateral Pacts

| Entity / Strategic Asset | Institutional Structure & Membership | Strategic Mandate & Sovereign Timeline |
| :--- | :--- | :--- |
| **UNSC Permanent 5 (P5)** | **United States, United Kingdom, France, Russia, China** | Hold permanent veto power under UN Charter; 10 non-permanent members elected for 2-year terms |
| **Chabahar Port Bilateral Pact** | Shahid Beheshti Terminal (Sistan-Baluchistan, Iran on Gulf of Oman) | Landmark **10-year bilateral contract** signed on **13 May 2024** between India Ports Global Limited (IPGL) and Iran PMO (\$120M investment; sea-land access to Central Asia bypassing Pakistan) |

**EXAM ANGLE:**

- The Right to Property Trap: It is **NOT** a Fundamental Right (Article 31 was deleted); it is a legal/constitutional right under **Article 300A** via the **44th Amendment 1978** (do NOT confuse with 42nd Amendment).
- Form 15G vs 15H Trap: Form 15G is for individuals **under 60 years**; Form 15H is strictly for **senior citizens (60 years and above)**.
- Form 16 Law: Form 16 is for **TDS on salary** under **Section 203** of Income Tax Act.
- Function of Money Trap: The function used for *recording a country's income and expenditure* is the **Unit of Account** (not Medium of Exchange or Store of Value).
- Target MCQ Form: 'Which Article of the Constitution guarantees the Right to Property as a constitutional right?' → **Article 300A**.

---

[STA-008] **RBI Master Directions: Urban Co-operative Banks 4-Tier Categorisation, DICGC Moratorium Rules & PSL Targets**

### 1. Urban Co-operative Banks (UCB) 4-Tier Regulatory Categorisation (N.S. Vishwanathan Committee)

| Regulatory Tier | Deposit Exposure Slabs | Minimum Net Worth Mandate | Mandatory Capital Adequacy (CRAR) | Operative PSL Target |
| :--- | :--- | :--- | :--- | :--- |
| **Tier 1** | Deposits up to **₹100 Crore** | • Single-District Unit UCBs: **₹2 Crore**<br>• All Other UCBs: **₹5 Crore** | **9.00%** CRAR | **60% of ANBC or CEOBSE**, whichever is higher *(eff. 1 April 2025 under PSL Directions, 2025)* |
| **Tier 2** | Deposits **> ₹100 Crore up to ₹1,000 Crore** | Standard statutory net worth | **12.00%** CRAR | Same 60% PSL mandate |
| **Tier 3** | Deposits **> ₹1,000 Crore up to ₹10,000 Crore** | Standard statutory net worth | **12.00%** CRAR | Same 60% PSL mandate |
| **Tier 4** | Deposits **> ₹10,000 Crore** | Standard statutory net worth | **12.00%** CRAR | Same 60% PSL mandate |

### 2. Priority Sector Lending (PSL) Comprehensive Regulatory Matrix (PSL Directions, 2025)

| Lender Category | Overall PSL Target (% of ANBC / CEOBSE) | Key Sub-Targets & Allocations | Shortfall Penalty Allocation |
| :--- | :--- | :--- | :--- |
| **Domestic Commercial Banks & Foreign Banks ($\ge$ 20 branches)** | **40% of ANBC** (or CEOBE) | • **Agriculture**: **18%** (Sub-target: **10%** for Small & Marginal Farmers)<br>• **Micro Enterprises**: **7.5%**<br>• **Weaker Sections**: **12%** | Mandatorily allocated to **Rural Infrastructure Development Fund (RIDF)** maintained by NABARD, or other specialized funds with SIDBI, NHB, or MUDRA |
| **Regional Rural Banks (RRBs)** | **75% of ANBC** | Priority on agriculture and rural credit | Same RIDF/SIDBI shortfall rules |
| **Small Finance Banks (SFBs)** | **60% of ANBC** *(eff. FY 2025–26)* | Rationalised from 75% baseline to enable portfolio diversification and wholesale liquidity | Same RIDF/SIDBI shortfall rules |
| **Primary Urban Co-operative Banks (UCBs)** | **60% of ANBC or CEOBSE** *(whichever is higher)* | Effective **1 April 2025** under RBI PSL Directions 2025 *(superseded earlier 75% glide path)* | Same RIDF/SIDBI shortfall rules |

### 3. DICGC 90-Day Moratorium Resolution Statutory Stages

| Statutory Stage | Responsible Entity | Regulatory Action | Statutory Timeline Window |
| :--- | :--- | :--- | :--- |
| **Stage 1: Depositor List Submission** | Insured Distressed Bank | Compiles and submits verified list of insured depositors to DICGC | Within **45 days** of RBI moratorium / directions |
| **Stage 2: Claim Verification** | DICGC | Verifies claims and balances against bank ledgers | Within **30 days** of receipt of list |
| **Stage 3: Direct Payout** | DICGC | Direct credit of insured deposits up to ₹5 Lakh to depositors | Within subsequent **15 days** |
| **Overall Statutory Ceiling** | **Composite Process** | Governed under **Section 18A, DICGC Act 1961** *(Authorized capital ₹50 Cr; wholly-owned subsidiary of RBI)* | **Exactly 90 days** *(45 + 30 + 15 = 90 days)* |

**EXAM ANGLE:**

- The UCB Tier 1 vs Tiers 2–4 CRAR Trap: Tier 1 UCBs require **9% CRAR**; Tiers 2, 3, and 4 require **12% CRAR** (examiners frequently test this distinction).
- DICGC 90-Day Breakdown Trap: **Bank submits depositor list within 45 days; DICGC verifies claims within 30 days of receipt; payment is made within the subsequent 15 days; overall statutory limit = 90 days (45 + 30 + 15 = 90 days)**.
- The SFB, UCB & RRB PSL Alignment Trap (High Yield):
  - *Regional Rural Banks (RRBs)*: **75% of ANBC** (highest among all banks).
  - *Small Finance Banks (SFBs)*: **60% of ANBC** (rationalised from 75% effective FY 2025–26).
  - *Urban Co-operative Banks (UCBs)*: **60% of ANBC or CEOBSE** (effective 1 April 2025 under RBI PSL Directions 2025; superseded earlier 75% glide path).
  - *Domestic Commercial Banks*: **40% of ANBC**.
- Target MCQ: 'What is the mandatory overall Priority Sector Lending (PSL) target for Primary Urban Co-operative Banks (UCBs) under RBI Priority Sector Lending Directions, 2025?' → **60% of ANBC or CEOBSE, whichever is higher**.

---

[STA-009] **Central Bank Governance, Currency Denomination Limits, Monetary Policy Committee Rules & Public Debt Instruments**

### 1. RBI Governance, Central Board & Monetary Policy Committee (MPC) Rules

| Body / Structure | Legal Provision (RBI Act, 1934) | Composition & Member Quota | Term of Office & Quorum Rules |
| :--- | :--- | :--- | :--- |
| **RBI Central Board of Directors** | **Section 8** | Total maximum **21 Members**:<br>• Governor + up to 4 Deputy Governors<br>• 4 Directors from Local Boards (Mumbai, Kolkata, Chennai, New Delhi)<br>• 2 Government Officials (MoF)<br>• 10 Directors nominated by Government of India | Appointed by Central Government for terms **up to 5 years**; eligible for reappointment |
| **Monetary Policy Committee (MPC)** | **Sections 45-ZB to 45-ZG** | Total **6 Members**:<br>• 3 from RBI (Governor as ex-officio Chair, Deputy Governor in-charge of MP, 1 officer nominated by Central Board)<br>• 3 External Members appointed by Central Government | • **Tenure**: Fixed **4-year term** (**NOT eligible for reappointment**)<br>• **Quorum**: **4 members** (at least Governor or Deputy Governor must attend)<br>• **Governor**: Holds a casting vote in event of a tie<br>• **Minutes**: Published on the **14th day** following the meeting under Section 45ZL |

### 2. Sovereign Currency & Public Debt Operational Instruments

| Sovereign Instrument / Mechanism | Statutory Foundation | Operational Tenor / Denomination Limit | Key Regulatory Rules & Mechanics |
| :--- | :--- | :--- | :--- |
| **Banknote Issuance** | **Section 24, RBI Act 1934** | Denominations up to **₹10,000** | RBI exclusive prerogative *(except ₹1 note and metallic coins issued by Ministry of Finance)* |
| **Coinage Minting** | **Section 6, Coinage Act 2011** | Coins up to **₹1,000** denomination | Minted by Government of India; put into public circulation through RBI |
| **Ways and Means Advances (WMA)** | **Section 17(5), RBI Act 1934** | Clean advances repayable within **3 months (90 days)** | Short-term credit facility extended to Central and State Governments to bridge temporary cash flow mismatches |
| **Treasury Bills (T-Bills)** | Public Debt Act / RBI auctions | Standard tenors: **91-day, 182-day, and 364-day** | Zero-coupon promissory notes sold at discount, redeemed at par; minimum bid **₹10,000** (and multiples thereof); auctioned Wednesdays |
| **Cash Management Bills (CMBs)** | Non-standard short-term G-Sec | Tenors strictly **< 91 days** | Issued to meet temporary cash mismatches of Central Government |

### 3. Statutory Cash Reserve Ratio (CRR) vs Statutory Liquidity Ratio (SLR)

| Regulatory Mechanism | Governing Act & Section | Maintenance Medium & Custody | Statutory Ceiling / Floor Rules | Interest Accrued |
| :--- | :--- | :--- | :--- | :--- |
| **Cash Reserve Ratio (CRR)** | **Section 42(1), RBI Act 1934** | Cash balances maintained **with RBI** as % of NDTL | 2006 amendment removed earlier statutory 3% floor and 20% ceiling | **0% Interest** (RBI pays no interest on CRR balances) |
| **Statutory Liquidity Ratio (SLR)** | **Section 24, Banking Regulation Act 1949** | Liquid assets (gold, unencumbered approved G-Secs, cash) maintained **with banks themselves** | Statutory ceiling capped at **40%** (2007 amendment removed 25% floor; current operational rate is 18.00%) | Yield earned on underlying G-Secs / gold assets |

**EXAM ANGLE:**

- External MPC Member Tenure: Appointed for **4 years** and are **NOT eligible for reappointment** (examiners frequently test re-eligibility).
- MPC Minutes Timeline: Published on the **14th day** after the meeting (not 7 days, not 30 days).
- Maximum Note vs Coin Trap: Maximum banknote denomination is **₹10,000** (under RBI Act); maximum coin denomination is **₹1,000** (under Coinage Act 2011).
- WMA Tenure: Clean advances repayable within **3 months / 90 days**.
- Target MCQ: 'Under Section 24 of the Reserve Bank of India Act, 1934, what is the highest denomination of bank note that the RBI is authorized to issue?' → **₹10,000**.

---

[STA-010] **Domestic Systemically Important Banks (D-SIBs) & Capital Surcharge Architecture**

### 1. D-SIB Assessment Framework & Parameter Weights

| Assessment Parameter | Weightage (%) | Regulatory Objective | Assessment Sample Eligibility Threshold |
| :--- | :--- | :--- | :--- |
| **Size** | **40%** | Measures absolute systemic footprint | Banks whose balance sheet size exceeds **2% of India's GDP** are placed in the sample assessed for systemic importance |
| **Interconnectedness** | **20%** | Measures cross-institutional contagion risk | Evaluates intra-financial assets and liabilities across domestic and global banking system |
| **Substitutability / Infrastructure** | **20%** | Measures availability of alternate market providers | Evaluates payment infrastructure, underwriting, and custody services |
| **Complexity** | **20%** | Measures operational and structural opacity | Evaluates OTC derivatives book, cross-jurisdictional liabilities, and trading assets |

### 2. D-SIB Bucketing Structure & Additional Capital Surcharges

| D-SIB Bucket | Additional CET1 Surcharge (% of RWAs) | Designated Bank(s) in India | Movement / Current Status | Total Minimum CET1 Requirement (Base 5.5% + CCB 2.5% + Surcharge) |
| :--- | :--- | :--- | :--- | :--- |
| **Bucket 5** | **1.00%** | *Currently Empty* | Highest regulatory buffer tier | 9.00% |
| **Bucket 4** | **0.80%** | **State Bank of India (SBI)** | Escalated from Bucket 3 | **8.80%** |
| **Bucket 3** | **0.60%** | *Currently Empty* | Intermediate tier | 8.60% |
| **Bucket 2** | **0.40%** | **HDFC Bank** | Elevated following merger with HDFC Ltd | **8.40%** |
| **Bucket 1** | **0.20%** | **ICICI Bank** | Baseline systemic tier | **8.20%** |

*Regulatory Note: The additional CET1 requirement for D-SIBs is in addition to the standard minimum CET1 ratio of 5.5% and the Capital Conservation Buffer (CCB) of 2.5%, raising the total capital adequacy bar for these three lenders.*

**EXAM ANGLE:**

- SBI Surcharge Trap: SBI is placed in **Bucket 4** requiring an additional **0.80% CET1** surcharge (not 0.60%).
- HDFC Bank Trap: HDFC Bank is in **Bucket 2** requiring **0.40% CET1**; ICICI Bank is in **Bucket 1** requiring **0.20% CET1**.
- Assessment Threshold: Banks with assets exceeding **2% of national GDP** are assessed.
- Target MCQ: 'What additional Common Equity Tier 1 (CET1) capital surcharge is mandated by the RBI for State Bank of India (SBI) as a Bucket 4 D-SIB?' → **0.80% of RWAs**.

---

[STA-011] **DAY-NRLM SHG Credit Architecture, Interest Subvention & Collateral Waivers**

### 1. DAY-NRLM Institutional Framework & Operational Architecture

| Institutional Parameter | Statutory Provision / Target Metric | Operational Details & Regulatory Role |
| :--- | :--- | :--- |
| **Launch & Sovereign Origin** | **June 2011** (restructuring Swarnjayanti Gram Swarozgar Yojana - SGSY) | Launched by Ministry of Rural Development (MoRD); partially supported by the World Bank |
| **SHG Mobilization & Group Size** | **10–20 rural women** *(5–20 in difficult, remote, tribal terrains and PwD groups)* | Primary grassroots vehicle for financial inclusion, mutual thrift, and bank credit linkage |
| **Central Nodal Lead Bank** | **Indian Bank** | Appointed as Central Nodal Bank by MoRD for administering pan-India interest subvention across commercial, co-operative, and RRBs |
| **Mandatory Collateral-Free Limit** | **Up to ₹20 Lakh** *(enhanced from historical baseline of ₹10 Lakh)* | Mandated under RBI Master Directions: **Zero collateral, zero margin, and no hypothecation of assets** for women SHGs |

### 2. DAY-NRLM Women SHG Interest Subvention & Incentive Structure (FY 2025–26)

| Credit Loan Slab | Lending Rate Cap on Banks | Central Government Interest Subvention | Prompt Repayment Incentive (PRI) | Effective Net Borrowing Cost to SHG |
| :--- | :--- | :--- | :--- | :--- |
| **Loans up to ₹3 Lakh** | Banks lend at **7.00% p.a.** *(capped at 11.50% p.a.)* | **4.50%** subvention paid directly to lending banks | **3.00%** additional subvention credited directly to SHG account | **4.00% per annum** *(7.00% - 3.00% PRI)* |
| **Loans > ₹3 Lakh to ₹5 Lakh** | Benchmark market interest rates | Subvention bridges interest rate down to **10.00% p.a.** | *Not Applicable* | **10.00% per annum** |

**EXAM ANGLE:**

- Nodal Bank Trap: The central nodal bank administering DAY-NRLM interest subvention is **Indian Bank** (not SBI, PNB, or NABARD).
- Effective Interest Rate with PRI: The baseline subsidized rate is **7%**, but with the 3% Prompt Repayment Incentive, the effective borrowing cost drops to **4%**.
- Collateral Limit: Enhanced collateral-free limit is **₹20 Lakh** (up from ₹10 Lakh).
- Target MCQ: 'Which public sector bank serves as the central nodal bank for administering interest subvention under DAY-NRLM?' → **Indian Bank**.

---

[STA-012] **Foreign & Overseas Currency Accounts Matrix: NRE, NRO, FCNR(B) & Bank Nostro/Vostro/Loro**

### 1. Non-Resident Indian (NRI) Deposit Accounts Master Comparison

| Regulatory / Operating Parameter | NRE (Non-Resident External) Account | NRO (Non-Resident Ordinary) Account | FCNR(B) (Foreign Currency Non-Resident Bank) |
| :--- | :--- | :--- | :--- |
| **Denominated Currency** | Indian Rupees (**INR**) | Indian Rupees (**INR**) | Permitted **Foreign Currencies** (USD, GBP, EUR, JPY, CAD, AUD) |
| **Permitted Source of Funds** | Foreign inward remittances in convertible foreign currency | Legitimate domestic earnings in India (dividends, rent, pension, asset sale) or foreign remittances | Foreign inward remittances in convertible foreign currency |
| **Permitted Deposit Types** | Savings, Current, Recurring, Fixed/Term Deposits | Savings, Current, Recurring, Fixed/Term Deposits | **Term / Fixed Deposit ONLY** (Tenor: **1 year to 5 years**; zero savings accounts) |
| **Repatriability (Principal & Interest)** | **Freely and fully repatriable** abroad without any annual ceiling | **Restricted**: Principal repatriation capped up to **\$1 Million USD per financial year** (subject to Form 15CA/15CB tax clearance) | **Freely and fully repatriable** abroad in foreign currency |
| **Indian Tax Liability** | **100% Tax-Free** in India (exempt from Income Tax and Wealth Tax) | **Taxable in India** (Interest subject to TDS at 30% + surcharge/cess, or DTAA rate) | **100% Tax-Free** in India |
| **Exchange Rate / Currency Risk** | Borne entirely by the **depositor** (converted to INR at market rates) | Borne entirely by the **depositor** (converted to INR at market rates) | Borne entirely by the **bank** (no exchange risk for depositor upon maturity) |
| **Joint Account Holding Rules** | Jointly with eligible NRIs/PIOs (or resident relative on 'Former or Survivor' basis) | Jointly with resident Indian on 'Former or Survivor' basis | Jointly with eligible NRIs/PIOs |

### 2. Interbank International Settlement & Correspondent Accounts Matrix

| Account Classification | Literal Latin Derivation | Operational Definition & Regulatory Mechanics | Practical Banking Example |
| :--- | :--- | :--- | :--- |
| **Nostro Account** | *"Our account with you"* | Domestic bank's account maintained in a foreign bank overseas in that foreign country's domestic currency | State Bank of India maintaining a USD account with JPMorgan Chase in New York |
| **Vostro Account** | *"Your account with us"* | Foreign bank's account maintained in a domestic Indian bank in Indian Rupees (INR) | JPMorgan Chase maintaining an INR account with State Bank of India in Mumbai |
| **Special Rupee Vostro Account (SRVA)** | Specialized Vostro mechanism | Dedicated INR accounts authorized by RBI under Circular No. 10 (July 2022) to settle cross-border international trade directly in Indian Rupees, bypassing USD/EUR clearing | Foreign commercial banks holding INR accounts with UCO Bank or IndusInd Bank for bilateral energy/trade settlement |
| **Loro Account** | *"Their account"* | Third-party bank referencing an account held by another domestic bank with a foreign correspondent (*"their account with you"*) | Bank of Baroda referencing SBI's Nostro account with JPMorgan Chase |
| **Mirror Account** | Shadow ledger | Internal shadow ledger maintained by domestic bank to mirror real-time debits, credits, and balances of its overseas Nostro account | SBI Mumbai maintaining internal records matching its New York Nostro ledger |

**EXAM ANGLE:**

- Repatriation Ceiling Trap: NRE is **unlimited / freely repatriable**; NRO repatriation is strictly capped at **$1 Million per financial year**.
- FCNR(B) Currency Risk Trap: The currency risk in FCNR(B) is borne by the **bank**, NOT the depositor. FCNR(B) can only be opened for **1 to 5 years** (no savings accounts).
- Nostro vs Vostro Trap: Nostro = **Our money in your country/currency**; Vostro = **Your foreign bank money in our bank in INR**.
- Target MCQ: 'What is the maximum annual repatriation limit permitted from a Non-Resident Ordinary (NRO) account under RBI FEMA regulations?' → **USD 1 Million per financial year**.

---

[STA-013] **The Bima Trinity & IRDAI Regulatory Architecture**

### 1. IRDAI Institutional Architecture & Legislative Reforms

| Regulatory Dimension | Statutory Mandate / Provision | Operational Details & Policy Rules |
| :--- | :--- | :--- |
| **Statutory Establishment** | **IRDA Act, 1999** (enacted per **Malhotra Committee 1994** recommendations) | Statutory watchdog regulating insurance and reinsurance industries |
| **Headquarters Location** | **Hyderabad, Telangana** | Shifted from New Delhi to Hyderabad in **2001** |
| **Statutory Composition** | Chairman + $\le$ 5 Whole-Time Members + $\le$ 4 Part-Time Members | Appointed by Central Govt; Chairman & WTMs serve up to **age 65** (other members up to age 62) |
| **National Strategic Goal** | **"Insurance for All by 2047"** | Comprehensive insurance inclusion marking India's centenary of independence |
| **Foreign Direct Investment (FDI)** | **100% FDI under Automatic Route** | Raised to 100% for insurance companies and 100% for insurance intermediaries |
| **Corporate Charters** | **Composite Insurance Licensing** | Legislative overhaul enabling a single corporate entity to underwrite life, general, and health policies |

### 2. The Bima Trinity — Three Core Financial Inclusion Pillars

| Bima Trinity Pillar | Functional Identity & Market Analogue | Target Beneficiaries & Coverage Model | Key Architectural Mechanics |
| :--- | :--- | :--- | :--- |
| **1. Bima Sugam** | Universal Digital Electronic Marketplace (*"UPI of Insurance"*) | All policyholders, life/general/health insurers, brokers, aggregators | Open-source non-profit Section 8 company (30% Life Council, 30% General Council); paperless policy purchase, automated e-KYC, renewals, and centralized claim tracking |
| **2. Bima Vistar** | Comprehensive Low-Cost Composite Micro-Insurance | Rural households and lower-income families | Unified bundled policy combining **Life (₹2 Lakh), Personal Accident (₹2 Lakh), Hospital Cash (₹50,000), and Property Protection (₹50,000)** |
| **3. Bima Vahak** | Women-Centric Gram Panchayat Distribution Network | Rural women and last-mile village communities | Dedicated all-women field distribution force at the **Gram Panchayat level** driving financial literacy, doorstep onboarding, and instant digital claims support |

**EXAM ANGLE:**

- IRDAI Headquarters: **Hyderabad** (NOT Mumbai, NOT New Delhi).
- Bima Trinity Components: Bima **Sugam** (Portal/Exchange), Bima **Vistar** (Composite Product), Bima **Vahak** (Women Delivery Agents).
- Insurance FDI Limit: **100%** for insurance companies (hiked from 74% under 2025–2026 reforms) and **100%** for insurance intermediaries.
- Target MCQ: 'Which pillar of IRDAI\'s Bima Trinity represents the open-architecture digital marketplace for policy purchase and claims?' → **Bima Sugam**.

---

[STA-014] **Macroeconomic Modernization & Base-Year Architecture: 2026 Active Series & Historical Traps**

### 1. Master Macroeconomic Base-Year Matrix (2026 Operative Series vs Historical Baselines)

| Macroeconomic Metric / Index | Operative 2026 Series Base Year | Compiling Authority & Release Date | Key Basket / Weightage Revisions | Historical Predecessor Series |
| :--- | :--- | :--- | :--- | :--- |
| **Gross Domestic Product (GDP) / GVA** | **Base Year 2022–23** | MoSPI / NSO *(27 February 2026)* | Incorporates updated Supply-Use Tables, MCA-21 database, and GST electronic filings | 2011–12 (operational 2015 to early 2026) |
| **Consumer Price Index (CPI - Combined)** | **Base Year 2024 = 100** | MoSPI / NSO *(February 2026)* | Anchored in HCES 2022–23 & 2023–24; **Food & Beverages weight cut from 45.86% to 36.75%** (12 divisions, 358 items) | 2012 = 100 |
| **Index of Industrial Production (IIP)** | **Base Year 2022–23 = 100** | MoSPI *(June 2026)* | Expands electronics manufacturing, semiconductors, and solar PV modules | 2011–12 = 100 (407 item groups) |
| **Index of Core Industries (ICI)** | **Base Year 2022–23** | Office of Economic Adviser, DPIIT *(August 2026)* | Expanded to **9 core industries** with the addition of **Iron Ore** | 2011–12 (8 core industries) |
| **Wholesale Price Index (WPI)** | Revised to **Base Year 2022–23** | Office of Economic Adviser, DPIIT | Basket expanded from 697 to 957 items based on Gross Value of Output (GVO) weighting | 2011–12 = 100 |

### 2. CPI vs WPI Invariant Structural & Policy Comparison

| Structural Parameter | Consumer Price Index (CPI - Combined) | Wholesale Price Index (WPI) | Statutory / Policy Implication |
| :--- | :--- | :--- | :--- |
| **Services Sector Coverage** | **Included** (Healthcare, education, transport, recreation, communication) | **EXCLUDED** (Zero services coverage; covers goods and primary commodities only) | CPI captures actual household cost-of-living inflation |
| **Monetary Policy Anchor** | **Exclusive Statutory Policy Target** (Urjit Patel Committee / Section 45ZA RBI Act 1934) | **Not targeted** by Monetary Policy Committee | Mandated target: **4.00% (+/- 2.00% tolerance band: 2% to 6%)** |
| **Transaction Price Point** | Retail price paid by final consumer at point of consumption | Wholesale first-transaction bulk market price | CPI reflects consumer impact; WPI reflects wholesale supply-side costs |

**EXAM ANGLE:**

- The Base-Year Exam Trap (High Risk):
  - *GDP Active Base Year*: **2022–23** (released Feb 2026; do NOT mark 2011–12).
  - *CPI-Combined Active Base Year*: **2024 = 100** (released Feb 2026; do NOT mark 2012).
  - *IIP Active Base Year*: **2022–23 = 100** (released June 2026; do NOT mark 2011–12).
  - *Core Industries (ICI)*: **Base Year 2022–23** with **9 core industries** (Iron Ore added as 9th).
- Monetary Policy Inflation Anchor: RBI legally targets **CPI-Combined**, NEVER WPI.
- Services Coverage: CPI includes services; WPI **does NOT include services**.
- Target MCQ: 'What is the active base year for the revised Gross Domestic Product (GDP) series released by MoSPI in 2026?' → **2022–23** (replaces 2011–12).

---

[STA-015] **Money Supply Dynamics, Equations & Liquidity Aggregates (M0, M1, M2, M3, M4, L1, L2, L3)**

### 1. Classical Reserve Money & Money Supply Aggregates (M0 to M4)

| Monetary Aggregate | Canonical Classification | Exact Mathematical Formula | Key Liquidity Character & Economic Mechanics |
| :--- | :--- | :--- | :--- |
| **M0** | **Reserve Money / Monetary Base / High-Powered Money** | $\text{Currency in Circulation (CIC)} + \text{Bankers' Deposits with RBI} + \text{'Other' Deposits with RBI}$ | Represents the total monetary liabilities of the Reserve Bank of India |
| **M1** | **Narrow Money** | $\text{Currency with the Public} + \text{Demand Deposits with Banking System (CASA)} + \text{'Other' Deposits with RBI}$ | **Most liquid** measure of commercial money supply; active transaction money |
| **M2** | Intermediate Narrow Money | $\text{M1} + \text{Post Office Savings Bank Deposits}$ | Extends M1 to small postal savings deposits |
| **M3** | **Broad Money** | $\text{M1} + \text{Time Deposits with Banking System (Fixed \& Recurring Deposits)}$ | **Standard metric** used by RBI for analyzing aggregate liquidity and monetary policy transmission |
| **M4** | Comprehensive Classical Money | $\text{M3} + \text{Total Post Office Deposits (EXCLUDING National Savings Certificates / NSC)}$ | Broadest classical measure; National Savings Certificates strictly excluded |

### 2. Modern New Monetary (NM) & Liquidity Aggregates (L1, L2, L3 - Dr. Y.V. Reddy 1998)

| Aggregate | Exact Mathematical Formulation | Institutional Coverage & Operating Scope |
| :--- | :--- | :--- |
| **NM1** | $\text{Currency with the Public} + \text{Demand Deposits with Banking System} + \text{'Other' Deposits with RBI}$ | Modern Narrow Money baseline |
| **NM2** | $\text{NM1} + \text{Short-Term Time Deposits with contractual maturity up to 1 year}$ | Includes short-tenor commercial liabilities |
| **NM3** | $\text{NM2} + \text{Long-Term Time Deposits (maturity } > \text{ 1 year)} + \text{Call/Term Borrowings from FIs}$ | Modern Broad Money baseline |
| **L1** | $\text{NM3} + \text{All Deposits with Post Office Savings Banks (EXCLUDING NSC)}$ | First broader liquidity layer |
| **L2** | $\text{L1} + \text{Term Deposits with FIs (NABARD, EXIM, SIDBI, NHB)} + \text{Term Borrowings by FIs} + \text{CDs issued by FIs}$ | Incorporates term refinancing institutions liquidity |
| **L3** | $\text{L2} + \text{Public Deposits of Non-Banking Financial Companies (NBFCs)}$ | Shadow banking public deposit layer |
| **Money Multiplier ($m$)** | $m = \frac{\text{Broad Money } (M_3)}{\text{Reserve Money } (M_0)}$ | Inverse relationship with CRR: higher CRR lowers money multiplier; lower CRR expands it |

**EXAM ANGLE:**

- Most Liquid vs Broadest Measure: **M1 is the most liquid**; **M3 is the standard Broad Money** measure tracked by RBI.
- M0 Formulation: M0 includes **Currency in Circulation**, whereas M1 includes **Currency with the Public** (Currency with Public = Currency in Circulation minus Cash in hand with banks).
- Post Office NSC Trap: NSC (National Savings Certificates) are **strictly excluded** from M4 and L1 calculations.
- Target MCQ: 'Which equation correctly defines Broad Money (M3) in Indian banking?' → **M1 + Time Deposits with the Banking System**.

---

[STA-016] **Differentiated Banking Architecture: Small Finance Banks (SFBs) vs Payments Banks (PBs)**
- **Genesis & Policy Mandate**:
  - Recommended by the **Committee on Comprehensive Financial Services for Small Businesses and Low Income Households (chaired by Dr. Nachiket Mor, 2014)** to drive niche financial inclusion.
  - Licensed under **Section 22 of the Banking Regulation Act, 1949** as specialized "Differentiated Banks" (distinguished from Universal Scheduled Commercial Banks).
- **Comprehensive Differentiated Banks Comparison Matrix**:
  | Statutory Parameter | Small Finance Banks (SFBs) | Payments Banks (PBs) |
  |---|---|---|
  | **Core Regulatory Committee** | Usha Thorat Committee (Evaluation) | Nachiket Mor Committee |
  | **Minimum Paid-Up Capital** | **₹200 Crore** (₹100 Cr for UCBs converting to SFBs) | **₹100 Crore** |
  | **Lending & Credit Operations** | **Fully permitted** to advance loans and extend credit facilities | **STRICTLY PROHIBITED** from lending or advancing any credit |
  | **Credit Cards Issuance** | Permitted to issue Credit Cards | **PROHIBITED** from issuing Credit Cards (can issue ATM/Debit cards) |
  | **Maximum Customer Deposit Limit** | **No ceiling** (can accept unlimited demand & time deposits) | Capped at **₹2 Lakh per individual customer** at end of day |
  | **Deposit Types Accepted** | Demand Deposits (CASA) + Time Deposits (FD/RD) | **Demand Deposits ONLY** (Savings & Current; zero FDs/RDs) |
  | **Priority Sector Lending (PSL)** | **60% of Adjusted Net Bank Credit (ANBC)** (effective FY 2025–26) | **Not Applicable** (since lending is prohibited) |
  | **Loan Size Concentration Cap** | At least **50% of loan portfolio must be ≤ ₹25 Lakh** | Not Applicable |
  | **Mandatory Rural Branch Quota** | At least **25% branches** in unbanked rural centres | At least **25% physical access points** in unbanked rural areas |
  | **Cash Reserve Ratio (CRR)** | Mandatory with RBI (under Sec 42 of RBI Act) | Mandatory with RBI (under Sec 42 of RBI Act) |
  | **Statutory Liquidity Ratio (SLR)** | Standard operational SLR (18.00% in G-Secs) | Minimum **75% of demand deposits in G-Secs/T-Bills** with maturity up to 1 year; max 25% in current/term deposits with other SCBs |
  | **Conversion to Universal Bank** | Eligible to apply after **5 years of satisfactory performance**, minimum net worth of **₹1,000 Crore**, and listing | Not eligible for direct universal bank conversion |

**EXAM ANGLE:**

- Payments Bank Lending Trap: Payments banks **CANNOT lend money and CANNOT issue credit cards** (they can only issue Debit/ATM cards).
- Payments Bank Deposit Cap: Capped at **₹2 Lakh per customer** (enhanced from ₹1 Lakh in 2021).
- SFB PSL Quota: **60% of ANBC** (effective FY 2025–26; rationalised from 75%; commercial banks have 40%, RRBs have 75%, UCBs have 60%).
- SFB Ticket Size Rule: At least **50% of loans must be ≤ ₹25 Lakh**.
- Target MCQ: 'What is the maximum end-of-day balance limit permitted per individual customer in a Payments Bank account?' → **₹2,00,000 (₹2 Lakh)**.

---

[STA-017] **SEBI Capital Markets Overhaul: T+0 Rolling Settlement, MF Lite & Derivatives Guardrails**

### 1. SEBI Institutional Profile & Regulatory Milestones

| Regulatory Feature | Statutory Provision / Milestone | Operating Framework & Jurisdictional Scope |
| :--- | :--- | :--- |
| **Establishment & Statutory Grant** | Established April 12, 1988; Statutory status on **January 30, 1992** | Governed by **SEBI Act, 1992** *(Head Office: **Mumbai**; Regional: New Delhi, Kolkata, Chennai, Ahmedabad)*; Chairperson term up to 5 yrs or age 65 |
| **Settlement Cycle Evolution** | Migrated T+2 $\to$ **T+1 in January 2023**; Optional **T+0 Beta** launched March 2024 | T+0 trades (9:15 AM to 1:30 PM) settle funds & securities by **4:30 PM** same day *(25 liquid scrips sandbox towards Instantaneous Settlement)* |
| **Mutual Fund Lite (MF Lite)** | Light-touch regulatory framework for **passively managed schemes** | Lower net worth requirements for AMCs, streamlined approvals, simplified disclosures for **Index Funds and ETFs** |

### 2. SEBI Equity Derivatives (F&O) Market Guardrails (Risk Mitigation Framework)

| Regulatory Guardrail | Previous Baseline Norm | Revised Mandated Norm | Risk Mitigation Rationale *(SEBI: 93% Retail Loss)* |
| :--- | :--- | :--- | :--- |
| **Contract Lot Sizing** | Minimum ₹5 Lakh contract value | Enhanced to **₹15 Lakh to ₹20 Lakh** | Curbs excessive leverage and participation by vulnerable retail traders |
| **Weekly Derivative Expiries** | Multiple expiries across exchanges on every weekday | Capped at **one benchmark index per exchange** | Eliminates hyper-speculative intraday churn across multiple daily index expiries |
| **Option Premium Collection** | End-of-day or margin credit practices | **Upfront mandatory collection** of option premiums | Mitigates client default risk for option buyers |
| **Intraday Position Monitoring** | End-of-day snapshot reporting | **Real-time snapshot monitoring** of index position limits | Preempts intraday threshold breaches and synthetic market manipulation |

**EXAM ANGLE:**

- Settlement Evolution: India migrated from T+2 to **T+1 in Jan 2023**, and launched optional **T+0 beta** in March 2024.
- MF Lite Applicability: Exclusively applies to **passively managed schemes** (Index Funds and ETFs), NOT active equity funds.
- F&O Lot Sizing: Minimum contract value increased to **₹15 Lakh - ₹20 Lakh** (up from ₹5 Lakh).
- Target MCQ: 'What category of mutual fund schemes is covered under SEBI\'s relaxed Mutual Fund Lite (MF Lite) regulatory framework?' → **Passively managed index funds and Exchange Traded Funds (ETFs)**.

---

[STA-018] **Multilateral Development Banks (MDBs) Master Directory & Sovereign Growth Forecasts**
- **Master Directory of Apex Multilateral Financial Institutions**:
  | Multilateral Body | Head Office | Established | Current Apex Leadership | India's Voting / Shareholding Status |
  |---|---|---|---|---|
  | **World Bank Group (IBRD / IDA)** | **Washington D.C., USA** | 1944 (Bretton Woods) | President: **Ajay Banga** (14th President) | India is the 7th largest shareholder in IBRD; largest historical cumulative borrower from IDA (concessional window) |
  | **International Monetary Fund (IMF)** | **Washington D.C., USA** | 1944 (Bretton Woods) | Managing Director: **Kristalina Georgieva**; First Deputy MD: **Dan Katz** | Quota share: **2.75%** (8th largest quota); SDR currency basket: USD, EUR, CNY, JPY, GBP |
  | **Asian Development Bank (ADB)** | **Mandaluyong / Manila, Philippines** | 1966 | President: **Masato Kanda** (assumed office Feb 2025; re-elected Sept 2026) | Japan and USA are joint largest shareholders (15.6% each); India is the **4th largest shareholder** (6.3%) |
  | **Asian Infrastructure Investment Bank (AIIB)** | **Beijing, China** | 2016 | President: **Jin Liqun** | China is the 1st largest shareholder (26.6% voting power); **India is the 2nd largest shareholder** (7.6% voting power) |
  | **New Development Bank (NDB / BRICS)** | **Shanghai, China** | 2015 (Fortaleza Treaty) | President: **Dilma Rousseff** | 5 founding members (Brazil, Russia, India, China, South Africa) held equal **20% initial voting equity**; new members: Bangladesh, UAE, Egypt, Uruguay |
  | **Bank for International Settlements (BIS)** | **Basel, Switzerland** | 1930 | General Manager: Agustín Carstens | Central bank of central banks; host of the Basel Committee on Banking Supervision (BCBS) |
  | **European Bank for Reconstruction & Dev (EBRD)** | **London, United Kingdom** | 1991 | President: Odile Renaud-Basso | India became the **69th shareholder** in July 2018 (non-borrowing member) |

**EXAM ANGLE:**

- AIIB Shareholding Trap: India is the **2nd largest shareholder** in AIIB (behind China).
- ADB Shareholding Trap: India is the **4th largest shareholder** in ADB (behind Japan, USA, China).
- NDB Equal Equity: Founding BRICS members each received equal **20% initial voting power**.
- Target MCQ: 'What is India\'s shareholding rank in the Asian Infrastructure Investment Bank (AIIB)?' → **Second largest shareholder (behind China)**.

---

[STA-019] **Card-on-File Tokenisation (CoFT) via Card-Issuing Banks & Digital Payment Security Architecture**

### 1. Card-on-File Tokenisation & Payment Security Mechanics

| Security Parameter | Statutory Mandate / Provision | Operational Rule & Consumer Protection Mechanics |
| :--- | :--- | :--- |
| **Card Data Storage Embargo** | **RBI Payment System Directives** | Merchants, payment aggregators, and payment gateways are **STRICTLY PROHIBITED** from storing actual customer card details (16-digit PAN, CVV, expiry date) after settlement |
| **Token Generation Mechanics** | Unique Cryptographic Token | Replaces primary account numbers with unique tokens generated across a specific combination of card, token requestor, and merchant device |
| **Issuer-Side Direct CoFT** | **Card-Issuing Banks (Mobile & Net-Banking)** | Cardholders can generate, view, manage, and execute **one-click revocation of active merchant tokens** directly through their bank app |
| **Alternate Authentication (AAM)** | Non-SMS Multi-Factor Authentication | Banks permitted to deploy in-app biometric approvals, behavioral risk scoring, and hardware tokens to mitigate OTP-interception frauds |

**EXAM ANGLE:**

- Data Storage Bar: Merchants and payment aggregators can NEVER store card PAN numbers after transaction settlement.
- Token Management: Cardholders can view, manage, and delete active merchant tokens directly via their issuing bank's digital banking portal.
- Target MCQ: 'Under RBI\'s Card-on-File Tokenisation (CoFT) guidelines, which entity is strictly barred from storing actual customer credit/debit card numbers?' → **Merchants and Payment Aggregators/Gateways**.


