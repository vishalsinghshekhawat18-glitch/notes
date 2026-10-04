# 🏛️ STATIC BANKING & REGULATORY CORE BOOSTER
### Complete High-Yield Reference Matrix: Codes, Acts, HQs, Basel Ratios, Limits & Constitutional Schedules

## 0. 🏛️ MASTER STATIC BANKING & REGULATORY FOUNDATIONS

📰 [STA-001] **Financial Message Codes, Identifiers & Standard Formats (UTR, IFSC, MICR, LEI, SWIFT)**
- **RTGS UTR (Unique Transaction Reference)**: Exactly **22 alphanumeric characters**; structured as: 4-character Bank IFSC prefix + 1-character Transaction Type ('R' for RTGS) + 8-digit Date code (YYYYMMDD) + 9-digit unique sequential running number.
- **NEFT UTR (Unique Transaction Reference)**: Exactly **16 alphanumeric characters**; generated uniquely for interbank batch electronic clearing.
- **IFSC (Indian Financial System Code)**: Exactly **11 alphanumeric characters** used in NEFT, RTGS, and IMPS; First 4 characters = Bank identity; **5th character is permanently fixed as '0' (zero)** reserved for future expansion; Last 6 characters = Branch identity (alphanumeric).
- **MICR (Magnetic Ink Character Recognition)**: Exactly **9 numeric digits** printed at the bottom of cheques using magnetic ink; First 3 digits = **City Code** (matches first 3 digits of postal PIN code); Middle 3 digits = **Bank Code**; Last 3 digits = **Branch Code**.
- **LEI (Legal Entity Identifier)**: Exactly **20 alphanumeric characters** based on ISO 17442; globally unique identifier for legal entities participating in financial transactions; mandatory in India for all non-individual borrowers with aggregate credit exposure **≥ ₹50 Crore** and cross-border transactions **≥ ₹50 Crore**.
- **SWIFT / BIC (Society for Worldwide Interbank Financial Telecommunication)**: **8 or 11 alphanumeric characters** based on ISO 9362 (4 letters = Bank code; 2 letters = Country code; 2 characters = Location code; 3 optional characters = Branch code); SWIFT international headquarters located in **La Hulpe, Belgium**.
- **National Registry & Scheme Codes Matrix**:
  - **PRAN (Permanent Retirement Account Number - PFRDA)**: **12 digits**.
  - **UAN (Universal Account Number - EPFO)**: **12 digits**.
  - **EPF Establishment Identification Code**: **22 alphanumeric characters**.
  - **PAN (Permanent Account Number - CBDT)**: **10 alphanumeric characters**; 4th character denotes entity status (**'P' = Individual/Person**, 'C' = Company, 'F' = Firm, 'H' = HUF, 'A' = AOP, 'T' = Trust, 'B' = BOI, 'J' = Artificial Juridical Person).
  - **GSTIN (Goods and Services Tax Identification Number)**: **15 alphanumeric characters**; First 2 digits = State Code (e.g., 07 for Delhi, 27 for Maharashtra); Next 10 digits = PAN of the entity.

🎯 Exam Angle →

- The RTGS vs NEFT Trap: RTGS UTR has **22 characters**; NEFT UTR has **16 characters** (examiners frequently swap these two numbers).
- The IFSC 5th Character: The 5th character is always numeric **0 (zero)**, NEVER the letter 'O'.
- The MICR Sequence Trap: MICR 9-digit sequence is **City → Bank → Branch** (Examiners often trick candidates with Bank → City → Branch).
- Target MCQ: 'How many digits are there in an RTGS UTR number?' → **22 digits**.

---

📰 [STA-002] **Evolution of Modern Indian Banking: SBI Genesis, Nationalisation & Statutory Acts**
- **Presidency Banks to State Bank of India**:
  - Bank of Calcutta (founded 1806, renamed Bank of Bengal 1809), Bank of Bombay (1840), and Bank of Madras (1843) were amalgamated on **January 27, 1921** to create the **Imperial Bank of India**.
  - Under the statutory recommendations of the **All India Rural Credit Survey Committee (chaired by A.D. Gorwala)**, Parliament enacted the **State Bank of India Act, 1955**.
  - On **July 1, 1955**, the Imperial Bank of India was formally converted into the **State Bank of India (SBI)** (RBI originally subscribed to 60% equity; Government of India acquired RBI stake in 2007).
- **The Two Epochs of Bank Nationalisation**:
  - **First Wave (19 July 1969)**: 14 major commercial banks with aggregate public deposits **≥ ₹50 Crore** nationalised under Banking Companies (Acquisition and Transfer of Undertakings) Act, 1970 (passed during Indira Gandhi premiership).
  - **Second Wave (15 April 1980)**: 6 commercial banks with aggregate public deposits **≥ ₹200 Crore** nationalised.
- **Reserve Bank of India Act, 1934 Statutory Pillars**:
  - **Section 17**: Defines legitimate business transactions RBI may conduct.
  - **Section 22**: Confers exclusive authority to issue bank notes in India (except ₹1 currency notes and metallic coins issued by Ministry of Finance).
  - **Section 24**: Establishes maximum denomination bank note RBI can issue (up to **₹10,000**); Coinage Act 2011 authorizes coins up to **₹1,000**.
  - **Section 42(1)**: Mandates every Scheduled Commercial Bank to maintain **Cash Reserve Ratio (CRR)** as a percentage of Net Demand and Time Liabilities (NDTL) with RBI (RBI (Amendment) Act 2006 removed earlier statutory 3% floor and 20% ceiling).
  - **Sections 45-ZB to 45-ZG**: Codifies composition, appointment, voting, and quorum rules of the 6-member **Monetary Policy Committee (MPC)**.
- **Banking Regulation Act, 1949 Core Anchor Sections**:
  - **Section 5(b)**: Statutory definition of 'Banking' (accepting for the purpose of lending or investment of deposits of money from the public, repayable on demand or otherwise).
  - **Section 22**: Mandatory licensing requirement from RBI to conduct banking business in India.
  - **Section 24**: Statutory mandate requiring banks to maintain **Statutory Liquidity Ratio (SLR)** as unencumbered liquid assets against NDTL (ceiling capped at **40%**; current operational rate is 18.00%).
  - **Section 35A**: Comprehensive statutory power empowering RBI to issue binding executive directions to all banks in public interest or to prevent banking affairs from being conducted prejudicial to depositors.
  - **Section 49A**: Restricts acceptance of deposits withdrawable by cheque to licensed banks only.
- **Negotiable Instruments Act, 1881 Core Anchor Sections**:
  - **Section 4**: Defines **Promissory Note** (unconditional undertaking in writing signed by maker to pay certain sum of money).
  - **Section 5**: Defines **Bill of Exchange** (unconditional order in writing directing person to pay).
  - **Section 6**: Defines **Cheque** (bill of exchange drawn on a specified banker, payable always on demand; includes truncated electronic image of cheque).
  - **Section 138**: Codifies criminal offense and penalties for **Dishonour of Cheque for insufficiency of funds** (penal sanction: imprisonment up to 2 years, or fine up to twice the face value of the cheque, or both).

🎯 Exam Angle →

- Legislative Origin: CRR is governed by **Section 42 of RBI Act 1934**; SLR is governed by **Section 24 of Banking Regulation Act 1949** (critical distractor pair in banking exams).
- SBI Foundation Date: **July 1, 1955** under SBI Act 1955 based on the **A.D. Gorwala Committee** (All India Rural Credit Survey).
- Target MCQ: 'In which year was the Imperial Bank of India converted into State Bank of India?' → **1955**.

---

📰 [STA-003] **Institutional Headquarters, Global Foreign Banks & Multilateral Bodies**
- **Indian Financial & Statutory Bodies Headquarters Matrix**:
  - **Mumbai**: Reserve Bank of India (RBI), Securities and Exchange Board of India (SEBI), NABARD, EXIM Bank of India, State Bank of India (SBI), National Payments Corporation of India (NPCI), Indian Banks' Association (IBA).
  - **Hyderabad**: **Insurance Regulatory and Development Authority of India (IRDAI)** and **Insurance Information Bureau of India (IIB)** (established in 2009 by IRDAI as the single statutory data repository for Indian insurance).
  - **New Delhi**: Pension Fund Regulatory and Development Authority (PFRDA), National Housing Bank (NHB), Competition Commission of India (CCI), Insolvency and Bankruptcy Board of India (IBBI).
  - **Lucknow**: **Small Industries Development Bank of India (SIDBI)**.
  - **Kolkata**: UCO Bank, Bandhan Bank, Tea Board of India.
  - **Chennai**: Indian Bank, Indian Overseas Bank.
  - **Bengaluru**: Canara Bank.
  - **Vadodara / Mumbai**: Bank of Baroda (Registered Head Office in Vadodara, Corporate Centre in Mumbai).
- **Foreign Banks Operating in India (Origin & Global Headquarters)**:
  - **Sumitomo Mitsui Banking Corporation (SMBC)**: **Tokyo, Japan** (converted to Wholly Owned Subsidiary / WOS in India).
  - **Mitsubishi UFJ Financial Group (MUFG)** / **Mizuho Bank**: **Tokyo, Japan**.
  - **DBS Bank India**: **Singapore** (pioneer foreign lender converting to Wholly Owned Subsidiary mode in India).
  - **BNP Paribas**: **Paris, France** (major European corporate and institutional lender).
  - **Société Générale**: **Paris, France**.
  - **Deutsche Bank**: **Frankfurt, Germany**.
  - **HSBC (Hongkong and Shanghai Banking Corp)** / **Barclays** / **Standard Chartered**: **London, United Kingdom**.
  - **Citibank** / **JPMorgan Chase** / **Bank of America**: **United States** (New York / Charlotte).
- **Multilateral Financial Institutions**:
  - **World Bank Group (IBRD / IDA / IFC / MIGA)**: **Washington D.C., USA** (President: Ajay Banga; India Executive Director: Parameswaran Iyer / Neelkanth Mishra).
  - **International Monetary Fund (IMF)**: **Washington D.C., USA** (Managing Director: Kristalina Georgieva; First Deputy MD: Gita Gopinath).
  - **Asian Development Bank (ADB)**: **Mandaluyong / Manila, Philippines** (President: Masatsugu Asakawa).
  - **New Development Bank (NDB / BRICS Bank)**: **Shanghai, China** (President: Dilma Rousseff).
  - **Asian Infrastructure Investment Bank (AIIB)**: **Beijing, China** (President: Jin Liqun).
  - **Bank for International Settlements (BIS)**: **Basel, Switzerland** (known as the central bank of central banks).

🎯 Exam Angle →

- Headquarters Traps: IRDAI and IIB are in **Hyderabad** (not Mumbai or Delhi); SIDBI is in **Lucknow** (not Mumbai).
- Foreign Bank Origin: SMBC, Mizuho, MUFG = **Japan**; DBS = **Singapore**; BNP Paribas = **Paris, France**.
- Target MCQ: 'Where is the headquarters of Insurance Information Bureau of India (IIB) located?' → **Hyderabad**.

---

📰 [STA-004] **Basel III Regulatory Architecture, Balance Sheet Ratios & Delinquency Timeline**
- **Basel III Regulatory Capital Framework**:
  - Developed by the Basel Committee on Banking Supervision (BCBS) headquartered at BIS in Basel, Switzerland, in response to the 2008 Lehman Brothers liquidity collapse.
  - **Minimum Common Equity Tier 1 (CET1)**: **5.5%** for Indian banks (vs 4.5% Basel international accord).
  - **Capital Conservation Buffer (CCB)**: **2.5%** in the form of CET1 capital.
  - **Minimum Tier 1 Capital**: **7.0%**.
  - **Minimum Total Capital Adequacy Ratio (CRAR)**: **9.0%** under Basel rules, but **RBI mandates 11.5%** for Indian commercial banks (9.0% base + 2.5% CCB).
- **Short-Term & Long-Term Liquidity Metrics under Basel III**:
  - **Liquidity Coverage Ratio (LCR)**: Conceived under Basel III; mandates banks to hold an unencumbered stock of High-Quality Liquid Assets (HQLA) equal to at least **100%** of total net cash outflows anticipated over a **30-day severe stress period** (\$LCR = \text{Stock of HQLA} / \text{Total net cash outflows over 30 days} \ge 100\%\$).
  - **Net Stable Funding Ratio (NSFR)**: Complementary structural metric requiring banks to fund long-term assets with stable liabilities over a **1-year horizon** (\$NSFR = \text{Available Stable Funding} / \text{Required Stable Funding} \ge 100\%\$).
  - **Leverage Ratio**: Pure non-risk-weighted balance sheet constraint (Tier 1 Capital / Total Exposure); RBI prescribes minimum **4.0% for Domestic Systemically Important Banks (D-SIBs)** and **3.5% for other banks**.
- **Asset Classification & Delinquency Ladder (RBI Master Directions)**:
  - **Standard Asset**: Generating normal income with principal and interest serviced on time.
  - **Special Mention Accounts (SMA) Triggers**:
    - **SMA-0**: Principal or interest overdue between **1 to 30 days**.
    - **SMA-1**: Principal or interest overdue between **31 to 60 days**.
    - **SMA-2**: Principal or interest overdue between **61 to 90 days**.
  - **Non-Performing Asset (NPA)**: Ceases to generate income; principal or interest remains overdue for **more than 90 days** (for agricultural loans: 2 crop seasons for short-duration crops, 1 crop season for long-duration crops).
  - **Substandard Asset**: Remained in NPA classification for a period **≤ 12 months** (provisioning: 15% for secured, 25% for unsecured advances).
  - **Doubtful Asset**: Remained in substandard category for **exceeding 12 months**; three provision slabs on secured portion:
    - **D1 (Up to 1 year)**: 25% provision.
    - **D2 (1 to 3 years)**: 40% provision.
    - **D3 (Exceeding 3 years)**: 100% provision.
    - *Unsecured portion of doubtful advances is always provisioned at 100%*.
  - **Loss Asset**: Identified by bank, internal/external auditors, or RBI inspection as completely uncollectible; 100% written off or 100% provisioned immediately.

🎯 Exam Angle →

- LCR Horizon Trap: LCR is strictly for **30 calendar days** of stress (do NOT pick 90 days or 1 year); NSFR is for **1 year**.
- SMA Classification Sequence: SMA-0 (1-30 days), SMA-1 (31-60 days), SMA-2 (61-90 days). Beyond 90 days is **Substandard NPA**.
- Target MCQ: 'Under which global regulatory framework was the Liquidity Coverage Ratio (LCR) introduced?' → **Basel III Framework**.

---

📰 [STA-005] **Operational Banking Limits, Consumer Redressal & Deposit Insurance**
- **ATM Free Cash Withdrawal Norms (RBI Master Directions)**:
  - **Own Bank ATMs**: Minimum **5 free transactions per month** (inclusive of both financial cash withdrawals and non-financial services like balance inquiry).
  - **Other Bank ATMs in 6 Designated Metros**: Minimum **3 free transactions per month** (Metros: Mumbai, New Delhi, Chennai, Kolkata, Bengaluru, Hyderabad).
  - **Other Bank ATMs in Non-Metro Centers**: Minimum **5 free transactions per month**.
  - **Permissible Interchange Fees Capped by RBI**: Maximum **₹17 per financial transaction** and **₹6 per non-financial transaction**.
  - **Failed ATM Transaction Compensation (\$T+5\$ Rule)**: If an account is debited but cash is not dispensed, bank must reverse the funds within **\$T+5\$ calendar days**; delay beyond \$T+5\$ days attracts statutory penalty of **₹100 per day** payable directly to the customer without requiring a complaint.
- **Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS)**:
  - Unifies 3 earlier ombudsman programs into 'One Nation One Ombudsman'; covers all Scheduled Commercial Banks, RRBs, UCBs, and systemically important NBFCs.
  - **Monetary Jurisdiction & Award Ceiling**: Ombudsman has power to award compensation up to **₹30 Lakh** for actual financial loss caused by deficiency in banking service.
  - **Additional Mental Agony Award**: Over and above the ₹30L limit, Ombudsman can award up to **₹3 Lakh** for mental agony, harassment, and loss of time.
  - **Appellate Authority**: Executive Director in-charge of Consumer Education and Protection Department (CEPD) at RBI; appeal must be preferred within **30 days**.
- **Deposit Insurance and Credit Guarantee Corporation (DICGC) Act, 1961**:
  - Wholly owned subsidiary of RBI; insures bank deposits across Commercial Banks, RRBs, Local Area Banks, and Co-operative Banks.
  - **Coverage Slabs**: Insures each depositor up to a maximum of **₹5 Lakh** (principal + interest) across all deposit accounts held in the same right and capacity in each bank.
  - **Mandatory 90-Day Payout Timeline (DICGC Amendment Act 2021)**: If a bank is placed under all-inclusive directions or moratorium by RBI, depositors must receive insured funds up to ₹5L within **90 days** (Days 1–45: bank collects and submits claims; Days 46–90: DICGC audits, verifies, and disburses payouts).

🎯 Exam Angle →

- RB-IOS Ceiling: Direct financial loss compensation is **₹30 Lakh**; compensation for mental agony is **₹3 Lakh** (maximum possible award is ₹33 Lakh).
- Failed ATM Reversal: Timeline is **\$T+5\$ days**; delay penalty is **₹100 per day**.
- DICGC Payout Window: **90 days** from date of RBI moratorium/directions.

---

📰 [STA-006] **Constitutional Schedules, Strategic Maritime Straits & High-Frequency Static GK**
- **The 12 Schedules of the Constitution of India Master Table**:
  - **First Schedule**: List of States and Union Territories with territorial boundaries.
  - **Second Schedule**: Emoluments, allowances, and privileges of President, Governors, Judges of Supreme Court/High Courts, and CAG.
  - **Third Schedule**: Forms of Oaths and Affirmations for Union Ministers, MPs, Supreme Court and High Court Judges.
  - **Fourth Schedule**: **Allocation of seats in the Rajya Sabha (Council of States)** to States and Union Territories (allocated strictly based on population; current strength: 245 total = 233 elected + 12 nominated by the President).
  - **Fifth Schedule**: Administration and control of Scheduled Areas and Scheduled Tribes.
  - **Sixth Schedule**: Administration of Tribal Areas in 4 north-eastern states: **Assam, Meghalaya, Tripura, and Mizoram (AMTM)**.
  - **Seventh Schedule**: Division of legislative powers between Union and States: List I (**Union List** - 100 subjects incl. Banking, Currency, Foreign Affairs, Defence), List II (**State List** - 61 subjects), List III (**Concurrent List** - 52 subjects).
  - **Eighth Schedule**: **22 Official Languages** recognized by the Constitution (originally 14; 21st Amendment added Sindhi; 71st Amendment added Konkani, Manipuri, Nepali; 92nd Amendment added Bodo, Dogri, Maithili, Santhali).
  - **Ninth Schedule**: Validation of certain Acts and regulations; originally insulated from judicial review by 1st Constitutional Amendment 1951 (post-1973 laws open to basic structure test).
  - **Tenth Schedule**: **Anti-Defection Law** provisions for disqualification of legislators (introduced via 52nd Constitutional Amendment Act, 1985).
  - **Eleventh Schedule**: Powers, authority, and responsibilities of Panchayats (29 functional subjects; added via 73rd Amendment 1992).
  - **Twelfth Schedule**: Powers, authority, and responsibilities of Municipalities (18 functional subjects; added via 74th Amendment 1992).
- **Strategic Global Maritime Straits & International Choke Points**:
  - **Strait of Hormuz**: Vital maritime strait connecting the **Persian Gulf** with the **Gulf of Oman** and the Arabian Sea; borders Iran to the north and the Musandam exclave of Oman and UAE to the south; world's foremost petroleum transit choke point (handles ~20% of global petroleum liquid consumption).
  - **Bab-el-Mandeb Strait**: Connects the **Red Sea** to the **Gulf of Aden** and Indian Ocean; separates Yemen on the Arabian Peninsula from Djibouti and Eritrea in the Horn of Africa; southern gateway to the Suez Canal.
  - **Strait of Malacca**: Connects the **Andaman Sea (Indian Ocean)** with the **South China Sea (Pacific Ocean)**; situated between Peninsular Malaysia and the Indonesian island of Sumatra; shortest sea route between Persian Gulf energy suppliers and Asian consumers.
  - **Bosphorus & Dardanelles Straits (Turkish Straits)**: Connects the **Black Sea** to the Mediterranean Sea via the Sea of Marmara; international transit governed by the **1936 Montreux Convention**.
  - **Palk Strait**: Connects the **Bay of Bengal** with the **Palk Bay / Gulf of Mannar** between Tamil Nadu (India) and the Jaffna Peninsula (Sri Lanka).
- **Core Environmental Treaties & Global Maritime Organizations**:
  - **Paris Climate Agreement (COP21, 2015)**: Adopted under UNFCCC; overarching objective is to hold the increase in global average temperature to **well below 2°C** above pre-industrial levels and aggressively pursue efforts to **limit the temperature increase to 1.5°C**.
  - **BIMCO (Baltic and International Maritime Council)**: World's largest non-governmental association of shipowners, operators, and maritime charterers; established in Copenhagen, Denmark in 1905; represents over 60% of commercial cargo fleet.

🎯 Exam Angle →

- Fourth Schedule Trap: Allocates seats in **Rajya Sabha** (Council of States), NOT Lok Sabha.
- Strait of Hormuz: Connects **Persian Gulf with Gulf of Oman** (do NOT pick Red Sea or Gulf of Aden).
- Paris Agreement Target: Goal is **1.5°C / well below 2°C** above pre-industrial levels.
- Target MCQ: 'Under which Schedule of the Constitution are Rajya Sabha seats allocated to States and Union Territories?' → **Fourth Schedule**.

---

📰 [STA-007] **High-Frequency Constitutional Articles, Taxation Forms & Functions of Money**
- **Core Financial & Economic Articles of the Constitution of India**:
  - **Article 280 (Finance Commission)**: Mandates the President of India to constitute a Finance Commission every 5 years; recommends devolution of net tax proceeds between Union and States and grants-in-aid; **16th Finance Commission** chaired by **Dr. Arvind Panagariya** (Secretary: Ritvik Ranjanam Pandey; recommendations operational for 5 years: FY27–FY31).
  - **Article 300A (Right to Property)**: Originally a Fundamental Right under Article 19(1)(f) and Article 31; omitted from Part III and reconstituted as a **Constitutional / Legal Right under Article 300A in Part XII** via the **44th Constitutional Amendment Act, 1978** (mandates that no person shall be deprived of property save by authority of law).
  - **Article 112 (Annual Financial Statement / Union Budget)**: Mandates presentation of estimated receipts and expenditure of the Government of India for every financial year before both Houses of Parliament.
  - **Article 246A & 279A (Goods and Services Tax)**: Introduced by the **101st Constitutional Amendment Act, 2016**; Article 246A confers simultaneous power to Parliament and State Legislatures to make laws on GST; Article 279A mandates constitution of the **GST Council** (chaired by the Union Finance Minister; voting weight: Centre holds 1/3rd, States hold 2/3rd; 3/4th majority required to pass decisions).
  - **Article 266 & 267 (Funds of India)**: Article 266(1) = Consolidated Fund of India; Article 266(2) = Public Account of India; Article 267 = Contingency Fund of India (held by Finance Secretary on behalf of President, corpus enhanced to ₹30,000 Cr).
- **Core Income Tax Certificates, Return Forms & Declarations**:
  - **Form 16**: Certificate of **Tax Deducted at Source (TDS) on Salary** issued annually by an employer under **Section 203 of the Income Tax Act, 1961**; divided into Part A (TDS summary, TAN, PAN) and Part B (salary breakup, deductions under Chapter VI-A).
  - **Form 16A**: Certificate for TDS on non-salary payments (interest on bank deposits, mutual fund dividends, professional fees).
  - **Form 15G**: Self-declaration under Section 197A by an **individual below 60 years or HUF** claiming receipt of interest without deduction of tax (total income must be below taxable basic exemption limit).
  - **Form 15H**: Self-declaration under Section 197A by a **senior citizen (aged 60 years or above)** for nil TDS on interest income (estimated total income after deductions can be within taxable limits, provided net tax liability is nil).
  - **Form 26AS & Annual Information Statement (AIS)**: Comprehensive consolidated statement reflecting all taxes deducted (TDS/TCS), advance tax paid, self-assessment tax, and Specified Financial Transactions (SFT) like high-value cash deposits, shares, and real estate.
  - **Form 60 / Form 61**: Form 60 is submitted by an individual who does not possess a PAN card when entering into specified high-value financial transactions; Form 61 is filed by persons dealing with agricultural income only.
- **The Three Fundamental Functions of Money (Macroeconomic Principles)**:
  - **Unit of Account**: Currency serves as the standard numerical monetary unit of measurement of the market value of goods, services, and all financial transactions; allows comparison of relative values and provides the accounting baseline for recording a nation's income, national output (GDP), expenditure, and corporate balance sheets.
  - **Medium of Exchange**: Currency facilitates trade and transactions without the prohibitive inefficiencies and coincidence-of-wants dilemmas of barter.
  - **Store of Value**: Asset that maintains its purchasing power over time so wealth can be saved, stored, and retrieved in the future (diminished primarily by inflation).
- **Global Governance, Strategic Ports & Security Architecture**:
  - **United Nations Security Council Permanent 5 (P5)**: Comprises **5 Permanent Members** holding veto power under the UN Charter: **United States, United Kingdom, France, Russia, and China**. The 10 non-permanent members are elected by the UN General Assembly for 2-year terms.
  - **Chabahar Port Strategic Bilateral Pact**: Located in the Sistan-Baluchistan province of south-eastern Iran along the Gulf of Oman; provides India sea-land access to Afghanistan and Central Asia bypassing Pakistan; on **13 May 2024**, India Ports Global Limited (IPGL) signed a landmark **10-year long-term bilateral contract** with Iran's Ports and Maritime Organization (PMO) to equip and operate the **Shahid Beheshti terminal** with an investment of \$120 Million.

🎯 Exam Angle →

- The Right to Property Trap: It is **NOT** a Fundamental Right (Article 31 was deleted); it is a legal/constitutional right under **Article 300A** via the **44th Amendment 1978** (do NOT confuse with 42nd Amendment).
- Form 15G vs 15H Trap: Form 15G is for individuals **under 60 years**; Form 15H is strictly for **senior citizens (60 years and above)**.
- Form 16 Law: Form 16 is for **TDS on salary** under **Section 203** of Income Tax Act.
- Function of Money Trap: The function used for *recording a country's income and expenditure* is the **Unit of Account** (not Medium of Exchange or Store of Value).
- Target MCQ Form: 'Which Article of the Constitution guarantees the Right to Property as a constitutional right?' → **Article 300A**.

---

📰 [STA-008] **RBI Master Directions: Urban Co-operative Banks 4-Tier Categorisation, DICGC Moratorium Rules & PSL Targets**
- **Urban Co-operative Banks (UCB) 4-Tier Regulatory Categorisation (N.S. Vishwanathan Committee)**:
  - **Tier 1**: Deposits up to **₹100 Crore**; minimum net worth of **₹2 Crore** for single-district unit UCBs, **₹5 Crore** for all other UCBs; mandatory Capital to Risk-Weighted Assets Ratio (CRAR) of **9%**.
  - **Tier 2**: Deposits **> ₹100 Crore up to ₹1,000 Crore**; CRAR of **12%**.
  - **Tier 3**: Deposits **> ₹1,000 Crore up to ₹10,000 Crore**; CRAR of **12%**.
  - **Tier 4**: Deposits **> ₹10,000 Crore**; CRAR of **12%**.
  - **PSL Glidepath**: Target for UCBs scaled up to **75% of Adjusted Net Bank Credit (ANBC)** or Credit Equivalent of Off-Balance Sheet Exposure (CEOBE) by March 31, 2026.
- **Deposit Insurance & Credit Guarantee Corporation (DICGC) 90-Day Moratorium Framework**:
  - Governed by **Section 18A of the DICGC Act, 1961** (inserted via DICGC Amendment Act, 2021).
  - When RBI places an insured bank under all-inclusive Directions or Moratorium, depositors receive up to **₹5 Lakh** (principal + interest) within **90 days**.
  - **Two-Stage Statutory Timeline**: Insured bank must submit list of claims within **45 days**; DICGC verifies and settles claims within the subsequent **45 days**.
  - Authorized capital of DICGC: **₹50 Crore**; wholly-owned statutory subsidiary of RBI.
- **Priority Sector Lending (PSL) Comprehensive Regulatory Matrix**:
  - **Commercial Banks (Domestic & Foreign with ≥ 20 branches)**: Total PSL **40% of ANBC**; **Agriculture 18%** (sub-target: **10%** for Small & Marginal Farmers); **Micro Enterprises 7.5%**; **Weaker Sections 12%**.
  - **Regional Rural Banks (RRBs) & Small Finance Banks (SFBs)**: Total PSL **75% of ANBC**.
  - **Shortfall Penalty**: PSL shortfalls are mandatorily allocated to the **Rural Infrastructure Development Fund (RIDF)** maintained by NABARD, or other specialized funds with SIDBI, NHB, or MUDRA.

🎯 Exam Angle →

- The UCB Tier 1 vs Tiers 2–4 CRAR Trap: Tier 1 UCBs require **9% CRAR**; Tiers 2, 3, and 4 require **12% CRAR** (examiners frequently test this distinction).
- DICGC 90-Day Breakdown Trap: Exactly **45 days for bank submission + 45 days for DICGC disbursement** = 90 days total.
- RRB and SFB PSL Target: **75% of ANBC** (NOT 40%).
- Target MCQ: 'What is the mandatory CRAR required for Tier 2, 3, and 4 Urban Co-operative Banks under the revised 4-tier regulatory framework?' → **12%**.

---

📰 [STA-009] **Central Bank Governance, Currency Denomination Limits, Monetary Policy Committee Rules & Public Debt Instruments**
- **RBI Central Board Composition & Tenure (Section 8, RBI Act, 1934)**:
  - RBI established on **April 1, 1935** under RBI Act 1934 on the recommendations of the **Hilton Young Commission (1926)**; nationalised on **January 1, 1949**.
  - Central Board of Directors consists of a maximum of **21 members**: Governor + up to 4 Deputy Governors (appointed by Central Government for terms up to **5 years**, eligible for reappointment) + 4 Directors from Local Boards (Mumbai, Kolkata, Chennai, New Delhi) + 2 Government Officials + 10 Directors nominated by GoI.
- **Monetary Policy Committee (MPC) Statutory Governance (Section 45ZB)**:
  - Comprises **6 members**: 3 from RBI (Governor as ex-officio Chairperson, Deputy Governor in charge of monetary policy, 1 officer nominated by Central Board) and 3 external members appointed by Central Government for a fixed term of **4 years** (**not eligible for reappointment**).
  - Quorum: **4 members** (at least one must be Governor or Deputy Governor); Governor holds a casting vote in the event of a tie.
  - Minutes of MPC proceedings published on the **14th day** following the meeting under Section 45ZL.
- **Statutory Cash Reserve Ratio (CRR) vs Statutory Liquidity Ratio (SLR)**:
  - **CRR (Section 42(1), RBI Act, 1934)**: Cash balances maintained with RBI on Net Demand and Time Liabilities (NDTL); RBI pays **0% interest**; 2006 amendment removed historical statutory floor (3%) and ceiling (20%).
  - **SLR (Section 24, Banking Regulation Act, 1949)**: Liquid assets (gold, unencumbered approved G-Secs, cash) maintained by banks with themselves; maximum statutory ceiling is **40%** (2007 amendment removed 25% floor).
- **Statutory Limits on Currency & Sovereign Debt Operations**:
  - **Maximum Banknote Denomination**: **Section 24 of RBI Act, 1934** empowers RBI to issue banknotes up to denomination of **₹10,000**.
  - **Maximum Coin Denomination**: **Section 6 of Coinage Act, 2011** authorizes minting of coins up to **₹1,000**.
  - **Ways and Means Advances (WMA)**: Extended under **Section 17(5) of RBI Act, 1934** to Central and State Governments to bridge temporary cash flow mismatches; clean advances repayable within **3 months (90 days)**.
  - **Treasury Bills (T-Bills)**: Short-term zero-coupon promissory notes issued in **91-day, 182-day, and 364-day** tenors; minimum investment is **₹10,000** and in multiples thereof; auctioned by RBI on Wednesdays. Cash Management Bills (CMBs) have tenors **< 91 days**.

🎯 Exam Angle →

- External MPC Member Tenure: Appointed for **4 years** and are **NOT eligible for reappointment** (examiners frequently test re-eligibility).
- MPC Minutes Timeline: Published on the **14th day** after the meeting (not 7 days, not 30 days).
- Maximum Note vs Coin Trap: Maximum banknote denomination is **₹10,000** (under RBI Act); maximum coin denomination is **₹1,000** (under Coinage Act 2011).
- WMA Tenure: Clean advances repayable within **3 months / 90 days**.
- Target MCQ: 'Under Section 24 of the Reserve Bank of India Act, 1934, what is the highest denomination of bank note that the RBI is authorized to issue?' → **₹10,000**.

---

📰 [STA-010] **Domestic Systemically Important Banks (D-SIBs) & Capital Surcharge Architecture**
- **Regulatory Genesis & Assessment Framework**:
  - Formulated by the Reserve Bank of India in 2014 based on the Basel Committee on Banking Supervision (BCBS) framework for identifying banks deemed **"Too Big To Fail" (TBTF)**.
  - Eligibility Threshold: Banks whose balance sheet size exceeds **2% of India's Gross Domestic Product (GDP)** are placed in the sample of banks assessed for systemic importance.
  - Assessment Methodology: Evaluated across 4 core quantitative parameters:
    1. **Size** (weightage: 40%).
    2. **Interconnectedness** (weightage: 20%).
    3. **Substitutability / Financial Institution Infrastructure** (weightage: 20%).
    4. **Complexity** (weightage: 20%).
- **D-SIB Bucketing Structure & Additional Common Equity Tier 1 (CET1) Surcharges**:
  - **Bucket 5**: Additional CET1 requirement: **1.00%** of Risk-Weighted Assets (RWAs) — *Currently Empty*.
  - **Bucket 4**: Additional CET1 requirement: **0.80%** of RWAs — **State Bank of India (SBI)** (escalated from Bucket 3).
  - **Bucket 3**: Additional CET1 requirement: **0.60%** of RWAs — *Currently Empty*.
  - **Bucket 2**: Additional CET1 requirement: **0.40%** of RWAs — **HDFC Bank** (elevated following the merger with HDFC Ltd).
  - **Bucket 1**: Additional CET1 requirement: **0.20%** of RWAs — **ICICI Bank**.
- **Regulatory Implication**: The additional CET1 requirement for D-SIBs is in addition to the standard minimum CET1 ratio of 5.5% and the Capital Conservation Buffer (CCB) of 2.5%, raising the total capital adequacy bar for these three lenders.

🎯 Exam Angle →

- SBI Surcharge Trap: SBI is placed in **Bucket 4** requiring an additional **0.80% CET1** surcharge (not 0.60%).
- HDFC Bank Trap: HDFC Bank is in **Bucket 2** requiring **0.40% CET1**; ICICI Bank is in **Bucket 1** requiring **0.20% CET1**.
- Assessment Threshold: Banks with assets exceeding **2% of national GDP** are assessed.
- Target MCQ: 'What additional Common Equity Tier 1 (CET1) capital surcharge is mandated by the RBI for State Bank of India (SBI) as a Bucket 4 D-SIB?' → **0.80% of RWAs**.

---

📰 [STA-011] **DAY-NRLM SHG Credit Architecture, Interest Subvention & Collateral Waivers**
- **Statutory Framework & Mission Architecture**:
  - Launched in June 2011 by the Ministry of Rural Development (MoRD) by restructuring Swarnjayanti Gram Swarozgar Yojana (SGSY); partially supported by the World Bank.
  - Institutional Pillar: Mobilizing rural poor women into **Self-Help Groups (SHGs)** of 10–20 women (5–20 in difficult/tribal terrains).
  - **Nodal Lead Bank**: **Indian Bank** appointed as the Central Nodal Bank by MoRD for administering the pan-India interest subvention scheme across commercial, co-operative, and regional rural banks.
- **Interest Subvention Structure for Women SHGs (FY 2025–26)**:
  - **Loans up to ₹3 Lakh**: Commercial banks lend to women SHGs at **7.00% per annum**.
  - **Central Interest Subvention**: Government of India provides an interest subvention of **4.50%** directly to banks, bridging the difference between the bank's lending rate (up to an 11.5% cap) and 7%.
  - **Prompt Repayment Incentive (PRI)**: For SHGs that maintain timely repayment schedules, an additional subvention of **3.00%** is credited directly to the SHG's account, reducing the **effective borrowing cost to 4.00% per annum**.
  - **Loans between ₹3 Lakh and ₹5 Lakh**: Banks lend at benchmark market interest rates; Central Government provides interest subvention to bridge the rate down to **10% per annum**.
- **Collateral-Free Credit Waivers**:
  - Under RBI Master Directions, **no collateral and no margin** is required for loans to women SHGs up to **₹10 Lakh** (historical baseline).
  - RBI enhanced the mandatory collateral-free lending threshold to **₹20 Lakh** under DAY-NRLM without any asset hypothecation.

🎯 Exam Angle →

- Nodal Bank Trap: The central nodal bank administering DAY-NRLM interest subvention is **Indian Bank** (not SBI, PNB, or NABARD).
- Effective Interest Rate with PRI: The baseline subsidized rate is **7%**, but with the 3% Prompt Repayment Incentive, the effective borrowing cost drops to **4%**.
- Collateral Limit: Enhanced collateral-free limit is **₹20 Lakh** (up from ₹10 Lakh).
- Target MCQ: 'Which public sector bank serves as the central nodal bank for administering interest subvention under DAY-NRLM?' → **Indian Bank**.

---

📰 [STA-012] **Foreign & Overseas Currency Accounts Matrix: NRE, NRO, FCNR(B) & Bank Nostro/Vostro/Loro**
- **Non-Resident Indian (NRI) Deposit Accounts Master Matrix**:
  - **NRE (Non-Resident External) Account**:
    - **Denominated In**: Indian Rupees (**INR**).
    - **Source of Funds**: Foreign inward remittances in convertible foreign currency.
    - **Repatriability**: **Freely and fully repatriable** (both principal and interest) outside India without any annual limit.
    - **Tax Status**: **100% Tax-Free** in India (exempt from Indian Income Tax and Wealth Tax).
    - **Currency Risk**: Borne entirely by the **depositor** (converted to INR at prevailing market rates).
  - **NRO (Non-Resident Ordinary) Account**:
    - **Denominated In**: Indian Rupees (**INR**).
    - **Source of Funds**: Legitimate income earned inside India (dividends, rent, pension, sale of local assets) or foreign inward remittances.
    - **Repatriability**: **Restricted**; principal repatriation capped up to **$1 Million USD per financial year** subject to RBI guidelines and tax clearance (Form 15CA/15CB).
    - **Tax Status**: **Taxable in India**; interest income subject to Tax Deducted at Source (TDS) at standard 30% plus applicable surcharge/cess (or lower rate under Double Taxation Avoidance Agreements - DTAA).
    - **Joint Account**: Can be held jointly with a resident Indian on 'Former or Survivor' basis.
  - **FCNR(B) (Foreign Currency Non-Resident Bank) Account**:
    - **Denominated In**: Permitted **Foreign Currencies** (USD, GBP, EUR, JPY, CAD, AUD).
    - **Type of Deposit**: **Term Deposit only** (fixed maturity from **1 year to 5 years**; savings accounts not permitted).
    - **Repatriability**: **Freely and fully repatriable** in foreign currency.
    - **Tax Status**: **100% Tax-Free** in India.
    - **Currency Risk**: Borne entirely by the **bank** (no exchange rate risk for the depositor upon maturity).
- **Interbank Overseas Account Terminology (Latin Derivations)**:
  - **Nostro Account** (*"Our account with you"*): An Indian bank's account maintained in a foreign bank overseas in that foreign country's domestic currency (e.g., SBI maintaining a USD account with JPMorgan Chase in New York).
  - **Vostro Account** (*"Your account with us"*): A foreign bank's account maintained in an Indian bank in India in Indian Rupees (e.g., JPMorgan Chase maintaining an INR account with SBI in Mumbai).
  - **Special Rupee Vostro Accounts (SRVA)**: Specialized Vostro accounts authorized by RBI under Circular No. 10 (July 2022) to settle cross-border international trade transactions directly in Indian Rupees (INR), bypassing USD/EUR clearing.
  - **Loro Account** (*"Their account"*): A third-party bank referring to an account held by another domestic bank with a foreign correspondent (e.g., Bank of Baroda referencing SBI's Nostro account with JPMorgan Chase: "their account with you").
  - **Mirror Account**: A shadow ledger maintained by the domestic bank to reflect the real-time debits, credits, and balance of its overseas Nostro account.

🎯 Exam Angle →

- Repatriation Ceiling Trap: NRE is **unlimited / freely repatriable**; NRO repatriation is strictly capped at **$1 Million per financial year**.
- FCNR(B) Currency Risk Trap: The currency risk in FCNR(B) is borne by the **bank**, NOT the depositor. FCNR(B) can only be opened for **1 to 5 years** (no savings accounts).
- Nostro vs Vostro Trap: Nostro = **Our money in your country/currency**; Vostro = **Your foreign bank money in our bank in INR**.
- Target MCQ: 'What is the maximum annual repatriation limit permitted from a Non-Resident Ordinary (NRO) account under RBI FEMA regulations?' → **USD 1 Million per financial year**.

---

📰 [STA-013] **The Bima Trinity & IRDAI Regulatory Architecture**
- **Insurance Regulatory and Development Authority of India (IRDAI)**:
  - Statutory body constituted under the **IRDA Act, 1999** following the recommendations of the **Malhotra Committee (1994)**.
  - Head Office: **Hyderabad, Telangana** (shifted from New Delhi in 2001).
  - Statutory Composition: Chairman + not more than 5 Whole-Time Members + not more than 4 Part-Time Members (appointed by Central Government). Maximum age: Chairman and Whole-Time Members serve up to **age 65** (members up to age 62).
  - Mission Goal: **"Insurance for All by 2047"** (marking India's centenary of independence).
- **The Bima Trinity Architecture (Three Inclusion Pillars)**:
  - **1. Bima Sugam (Digital Public Infrastructure / Universal Exchange)**:
    - Conceived as an open-source, digital electronic marketplace acting as the **"UPI of Insurance"**.
    - Integrates all life, general, and health insurance companies, policyholders, brokers, and web aggregators onto a single interoperable electronic portal.
    - Enables paperless policy purchase, instant electronic KYC, automated renewals, endorsement changes, and centralized claim settlement tracking.
    - Equity Structure: Non-profit Section 8 company; 30% shareholding each held by Life Insurance Council and General Insurance Council, remaining equity held by commercial insurers and brokers.
  - **2. Bima Vistar (Comprehensive Low-Cost Composite Insurance)**:
    - An all-in-one bundled micro-insurance product designed specifically for rural households and lower-income families.
    - Combines **Life, Health, Personal Accident, and Property/Crop coverage** into a single unified policy with affordable premium.
    - Defined benefits: ₹2 Lakh life coverage, ₹2 Lakh personal accident cover, ₹50,000 hospital cash/health indemnity, ₹50,000 property protection.
  - **3. Bima Vahak (Women-Centric Gram Panchayat Distribution Network)**:
    - Dedicated field distribution force comprising women micro-agents operating at the **Gram Panchayat level**.
    - Focuses on financial literacy, doorstep onboarding, last-mile policy issuance, and immediate digital claims assistance for rural women.
- **Legislative & Foreign Direct Investment (FDI) Shifts**:
  - Current FDI limit in Indian insurance companies: **74%** under automatic route (enhanced from 49% in 2021).
  - 100% FDI permitted for Insurance Intermediaries (insurance brokers, loss assessors).
  - Proposed Insurance Laws (Amendment) Bill codifies **Composite Insurance Licensing** (allowing a single entity to underwrite both life and general/health insurance).

🎯 Exam Angle →

- IRDAI Headquarters: **Hyderabad** (NOT Mumbai, NOT New Delhi).
- Bima Trinity Components: Bima **Sugam** (Portal/Exchange), Bima **Vistar** (Composite Product), Bima **Vahak** (Women Delivery Agents).
- Insurance FDI Limit: **74%** for insurance companies; **100%** for insurance intermediaries.
- Target MCQ: 'Which pillar of IRDAI\'s Bima Trinity represents the open-architecture digital marketplace for policy purchase and claims?' → **Bima Sugam**.

---

📰 [STA-014] **Macroeconomic Modernization & Base-Year Revisions Architecture**
- **The Economic Need for Base-Year Revisions**:
  - Economic indices undergo periodic base-year revisions (typically every 5 to 10 years) to eliminate statistical obsolescence, account for structural transformation in economic consumption (e.g., e-commerce, digital subscriptions, renewable energy), and update item weighting baskets.
- **Master Base-Year Transition Matrix**:
  - **Consumer Price Index (CPI - Combined)**:
    - Current Operational Base Year: **2012 = 100** (compiled by National Statistical Office - NSO, MoSPI).
    - Upcoming Modernized Base Year: **2024 = 100** (incorporating updated Consumption Expenditure Survey 2022–23 weights, reducing the excessive 45.86% weight of Food & Beverages).
  - **Gross Domestic Product (GDP) / Gross Value Added (GVA)**:
    - Current Operational Base Year: **2011–12** (transitioned in 2015 from 2004–05).
    - Upcoming Modernized Base Year: **2020–21 / 2022–23** (incorporating GST electronic data, MCA-21 company registry expansion, and updated supply-use tables).
  - **Index of Industrial Production (IIP)**:
    - Current Operational Base Year: **2011–12 = 100** (407 item groups).
    - Upcoming Modernized Base Year: **2022–23 = 100** (incorporating advanced electronic manufacturing, solar PV modules, and semiconductors).
  - **Wholesale Price Index (WPI)**:
    - Current Operational Base Year: **2011–12 = 100** (697 commodities; compiled by Office of Economic Adviser, DPIIT, Ministry of Commerce & Industry).
    - Proposed Modernized Base Year: **2017–18 / 2022–23**.
- **CPI vs WPI Invariant Comparison**:
  - **Services Inclusion**: CPI includes **Services** (health, education, recreation, transport); WPI covers **Goods/Commodities only** (zero services coverage).
  - **Monetary Policy Anchor**: Under the Urjit Patel Committee recommendations and RBI Act Section 45ZA, the Monetary Policy Committee anchors inflation strictly to **CPI (Combined) Headline Inflation**, targeting **4.00% with a +/- 2.00% tolerance band (2% to 6%)**.

🎯 Exam Angle →

- Monetary Policy Inflation Anchor: RBI uses **CPI-Combined**, NEVER WPI.
- Services Coverage: CPI includes services; WPI **does NOT include services**.
- Current CPI Base Year: **2012 = 100**; current GDP Base Year: **2011–12**.
- Target MCQ: 'Which institution compiles and releases the Wholesale Price Index (WPI) in India?' → **Office of the Economic Adviser, DPIIT (Ministry of Commerce and Industry)**.

---

📰 [STA-015] **Money Supply Dynamics, Equations & Liquidity Aggregates (M0, M1, M2, M3, M4, L1, L2, L3)**
- **Historical Formulation**:
  - First standardized by RBI in 1935, refined by the Second Working Group (1977), and fundamentally modernized by the **Third Working Group on Money Supply (chaired by Dr. Y.V. Reddy, 1998)**.
- **The Classical Monetary Aggregates**:
  - **M0 (Reserve Money / Monetary Base / High-Powered Money / Central Bank Money)**:
    - Formula: **Currency in Circulation (CIC) + Bankers' Deposits with RBI + 'Other' Deposits with RBI**.
    - It represents the total monetary liabilities of the Reserve Bank of India.
  - **M1 (Narrow Money)**:
    - Formula: **Currency with the Public + Demand Deposits with the Banking System (Current & Savings Accounts) + 'Other' Deposits with RBI**.
    - Most liquid measure of commercial money supply.
  - **M2**:
    - Formula: **M1 + Post Office Savings Bank Deposits**.
  - **M3 (Broad Money)**:
    - Formula: **M1 + Time Deposits with the Banking System (Fixed & Recurring Deposits)**.
    - Most widely used metric for analyzing aggregate liquidity and monetary policy transmission in India.
  - **M4**:
    - Formula: **M3 + Total Post Office Deposits** (excluding National Savings Certificates / NSC).
- **The Y.V. Reddy (1998) New Monetary Aggregates (NM) & Liquidity Aggregates (L)**:
  - **NM1**: Currency with the Public + Demand Deposits with Banking System + 'Other' Deposits with RBI.
  - **NM2**: NM1 + Short-term Time Deposits with contractual maturity up to 1 year.
  - **NM3**: NM2 + Long-term Time Deposits with contractual maturity > 1 year + Call/Term Borrowing from financial institutions.
  - **L1 (Liquidity Aggregate 1)**: NM3 + All Deposits with Post Office Savings Banks (excluding NSC).
  - **L2 (Liquidity Aggregate 2)**: L1 + Term Deposits with Term Lending Institutions and Refinancing Institutions (NABARD, EXIM Bank, SIDBI, NHB) + Term Borrowings by FIs + Certificates of Deposit (CDs) issued by FIs.
  - **L3 (Liquidity Aggregate 3)**: L2 + Public Deposits of Non-Banking Financial Companies (NBFCs).
- **Money Multiplier Dynamics**:
  - Formula: **Money Multiplier ($m$) = Broad Money ($M_3$) / Reserve Money ($M_0$)**.
  - An increase in Cash Reserve Ratio (CRR) reduces the money multiplier; a decrease in CRR increases the money multiplier.

🎯 Exam Angle →

- Most Liquid vs Broadest Measure: **M1 is the most liquid**; **M3 is the standard Broad Money** measure tracked by RBI.
- M0 Formulation: M0 includes **Currency in Circulation**, whereas M1 includes **Currency with the Public** (Currency with Public = Currency in Circulation minus Cash in hand with banks).
- Post Office NSC Trap: NSC (National Savings Certificates) are **strictly excluded** from M4 and L1 calculations.
- Target MCQ: 'Which equation correctly defines Broad Money (M3) in Indian banking?' → **M1 + Time Deposits with the Banking System**.

---

📰 [STA-016] **Differentiated Banking Architecture: Small Finance Banks (SFBs) vs Payments Banks (PBs)**
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
  | **Priority Sector Lending (PSL)** | **75% of Adjusted Net Bank Credit (ANBC)** | **Not Applicable** (since lending is prohibited) |
  | **Loan Size Concentration Cap** | At least **50% of loan portfolio must be $le$ ₹25 Lakh** | Not Applicable |
  | **Mandatory Rural Branch Quota** | At least **25% branches** in unbanked rural centres | At least **25% physical access points** in unbanked rural areas |
  | **Cash Reserve Ratio (CRR)** | Mandatory with RBI (under Sec 42 of RBI Act) | Mandatory with RBI (under Sec 42 of RBI Act) |
  | **Statutory Liquidity Ratio (SLR)** | Standard operational SLR (18.00% in G-Secs) | Minimum **75% of demand deposits in G-Secs/T-Bills** with maturity up to 1 year; max 25% in current/term deposits with other SCBs |
  | **Conversion to Universal Bank** | Eligible to apply after **5 years of satisfactory performance**, minimum net worth of **₹1,000 Crore**, and listing | Not eligible for direct universal bank conversion |

🎯 Exam Angle →

- Payments Bank Lending Trap: Payments banks **CANNOT lend money and CANNOT issue credit cards** (they can only issue Debit/ATM cards).
- Payments Bank Deposit Cap: Capped at **₹2 Lakh per customer** (enhanced from ₹1 Lakh in 2021).
- SFB PSL Quota: **75% of ANBC** (commercial banks have 40%).
- SFB Ticket Size Rule: At least **50% of loans must be $le$ ₹25 Lakh**.
- Target MCQ: 'What is the maximum end-of-day balance limit permitted per individual customer in a Payments Bank account?' → **₹2,00,000 (₹2 Lakh)**.

---

📰 [STA-017] **SEBI Capital Markets Overhaul: T+0 Rolling Settlement, MF Lite & Derivatives Guardrails**
- **Securities and Exchange Board of India (SEBI)**:
  - Established on April 12, 1988 as an administrative body; granted statutory status on **January 30, 1992** under the **SEBI Act, 1992**.
  - Head Office: **Mumbai**; Regional Offices in New Delhi, Kolkata, Chennai, and Ahmedabad.
  - Leadership: Chairperson appointed under Section 4(1); serves for terms up to 5 years or until age 65.
- **T+0 Rolling Settlement & Instant Settlement Architecture**:
  - India became the second country globally after China to implement **T+1 rolling settlement** in January 2023.
  - In March 2024, SEBI introduced a **Beta version of optional T+0 settlement** for a select basket of 25 liquid scrips with a limited set of brokers.
  - Operational Mechanism: Under T+0, trades executed between 9:15 AM and 1:30 PM are settled with immediate transfer of funds and securities on the same trading day by **4:30 PM**.
  - Pathway: Serves as the technological sandbox stepping-stone towards **Instantaneous Real-Time Settlement**.
- **Mutual Fund Lite (MF Lite) Regulatory Framework**:
  - Specialized, light-touch regulatory regime established by SEBI specifically for **passively managed mutual funds** (Index Funds and Exchange Traded Funds - ETFs).
  - Rationale: Passive funds mirror underlying benchmark indices without discretionary fund manager stock-picking risk.
  - Relaxations: Lowered minimum net worth requirements for asset management companies (AMCs), simplified disclosure norms, streamlined approval pipelines, and reduced compliance overheads to attract new boutique fund houses and expand retail financialization in Tier 2 and Tier 3 cities.
- **Equity Derivatives (F&O) Market Guardrails (6-Pillar Risk Framework)**:
  - Formulated following SEBI study showing that 93% of individual retail traders incurred net losses in the Futures & Options (F&O) segment between FY 2022 and FY 2024.
  - Key Measures:
    1. **Contract Sizing Enhancement**: Minimum trading lot size value for index derivatives increased from ₹5 Lakh to **₹15 Lakh to ₹20 Lakh**.
    2. **Rationalization of Weekly Expiries**: Stock exchanges permitted to offer weekly derivative contracts for only **one benchmark index per exchange** (eliminating multiple daily expiries across exchanges).
    3. **Upfront Option Premium Collection**: Mandating brokers to collect option premiums from buyers upfront.
    4. **Intraday Monitoring of Position Limits**: Real-time snapshot monitoring of index position limits to prevent market manipulation.

🎯 Exam Angle →

- Settlement Evolution: India migrated from T+2 to **T+1 in Jan 2023**, and launched optional **T+0 beta** in March 2024.
- MF Lite Applicability: Exclusively applies to **passively managed schemes** (Index Funds and ETFs), NOT active equity funds.
- F&O Lot Sizing: Minimum contract value increased to **₹15 Lakh - ₹20 Lakh** (up from ₹5 Lakh).
- Target MCQ: 'What category of mutual fund schemes is covered under SEBI\'s relaxed Mutual Fund Lite (MF Lite) regulatory framework?' → **Passively managed index funds and Exchange Traded Funds (ETFs)**.

---

📰 [STA-018] **Multilateral Development Banks (MDBs) Master Directory & Sovereign Growth Forecasts**
- **Master Directory of Apex Multilateral Financial Institutions**:
  | Multilateral Body | Head Office | Established | Current Apex Leadership | India's Voting / Shareholding Status |
  |---|---|---|---|---|
  | **World Bank Group (IBRD / IDA)** | **Washington D.C., USA** | 1944 (Bretton Woods) | President: **Ajay Banga** (14th President) | India is the 7th largest shareholder in IBRD; largest historical cumulative borrower from IDA (concessional window) |
  | **International Monetary Fund (IMF)** | **Washington D.C., USA** | 1944 (Bretton Woods) | Managing Director: **Kristalina Georgieva**; First Deputy MD: **Gita Gopinath** | Quota share: **2.75%** (8th largest quota); SDR currency basket: USD, EUR, CNY, JPY, GBP |
  | **Asian Development Bank (ADB)** | **Mandaluyong / Manila, Philippines** | 1966 | President: **Masatsugu Asakawa** | Japan and USA are joint largest shareholders (15.6% each); India is the **4th largest shareholder** (6.3%) |
  | **Asian Infrastructure Investment Bank (AIIB)** | **Beijing, China** | 2016 | President: **Jin Liqun** | China is the 1st largest shareholder (26.6% voting power); **India is the 2nd largest shareholder** (7.6% voting power) |
  | **New Development Bank (NDB / BRICS)** | **Shanghai, China** | 2015 (Fortaleza Treaty) | President: **Dilma Rousseff** | 5 founding members (Brazil, Russia, India, China, South Africa) held equal **20% initial voting equity**; new members: Bangladesh, UAE, Egypt, Uruguay |
  | **Bank for International Settlements (BIS)** | **Basel, Switzerland** | 1930 | General Manager: Agustín Carstens | Central bank of central banks; host of the Basel Committee on Banking Supervision (BCBS) |
  | **European Bank for Reconstruction & Dev (EBRD)** | **London, United Kingdom** | 1991 | President: Odile Renaud-Basso | India became the **69th shareholder** in July 2018 (non-borrowing member) |

🎯 Exam Angle →

- AIIB Shareholding Trap: India is the **2nd largest shareholder** in AIIB (behind China).
- ADB Shareholding Trap: India is the **4th largest shareholder** in ADB (behind Japan, USA, China).
- NDB Equal Equity: Founding BRICS members each received equal **20% initial voting power**.
- Target MCQ: 'What is India\'s shareholding rank in the Asian Infrastructure Investment Bank (AIIB)?' → **Second largest shareholder (behind China)**.
