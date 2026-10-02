# IIBF DBF Paper 2: Module C — Banking Technology & Cyber Security

> **Paper:** 2 (Principles and Practices of Banking)
> **Module:** C (Banking Technology)
> **Macmillan Source:** Units 37 to 47 (Bank Computerization, CBS, Data Centers RPO/RTO, Payment Systems NEFT/RTGS/UPI/CBDC, Cyber Security, ISO 27001, IT Act 2000, AI in Banking)

---

## 4. 📌 Module 4: Digital Banking, Payments Architecture & Cyber Governance

India's Digital Public Infrastructure (DPI) and fintech ecosystem have driven massive shifts in payment velocity, data protection, cyber fraud defense, and open banking models.

• Unified Payments Interface (UPI) Advanced Modes: UPI Lite (On-device wallet, ₹2,000 max balance, ₹500 per-txn cap, zero PIN, near-zero failure rate).
• UPI 123PAY (4 non-internet modes: IVR numbers, Missed call, Sound-based proximity, and OEM apps).
• UPI Circle (delegated primary-secondary user authorization).
• Credit Lines on UPI (pre-approved bank credit lines accessed via UPI QR).
• BHIM 3.0: 22-language AI voice assistant, automated family spend management, biometric authentication, real-time integration with Centralised Fraud Registry.
• Finternet (BIS Unified Ledger Model): Conceptualized by Agustin Carstens & Nandan Nilekani. The Three U's: User-centric (user retains asset control), Unified (connects multiple asset classes on programmable smart contracts), Universal (interoperable across borders).
• Digital Personal Data Protection (DPDP) Rules 2025: Data Protection Board of India (DPBI). SARAL approach (Simple, Accessible, Rational, Actionable notices). Maximum penalties: ₹250 Crore for security safeguards failure preventing data breach; ₹200 Crore for non-notification of breach or child data violations. 90-day grievance redressal mandate.
• Financial Fraud Risk Indicator (FRI): Joint DoT & I4C initiative integrating Chakshu platform and NCRP portal. Scores suspect mobile numbers as Medium, High, or Very High Risk in real time during digital onboarding and KYC.
• Banking as a Service (BaaS) & Embedded Finance: Licensed banks expose CBS APIs for white-label debit cards, embedded BNPL checkout, corporate payroll, and digital escrow.
• Stablecoins & Crypto Assets: Pegged to fiat/commodities. Global laws: EU MiCA (100% liquid reserve backing), US GENIUS Act, China total ban. India: Cryptos not legal tender; RBI highlights currency substitution, seigniorage loss, and deposit flight. Digital Rupee (CBDC e₹-R & e₹-W) issued as sovereign alternative.
• EASE 8.0 PSB Reforms: 4 Themes: Risk & Resilience, Innovation (GenAI), Excellence (CASA growth & cost optimization), Socio-Economic Impact (inclusive lending).

> 🎯 **Exam Anchor & Trap:**
> 🎯 Exam Angle → 🔥 HIGH — Pay close attention to statutory classifications, founding years, nodal ministries, and numerical thresholds in 📌 Module 4: Digital Banking, Payments Architecture & Cyber Governance.

---

---

## 70. IIBF PPB Unit 15: Essentials of Bank Computerization, CBS & Data Centers

> 🧠 **Key Concept — Pivotal Concept: Core Banking Solution (CBS) Paradigm Shift**
> Core Banking Solutions (CBS) revolutionized Indian banking from 'branch-based banking' (where a customer was tied to a single home branch) to 'bank-based anywhere banking' (where customer belongs to the entire bank).

## 📊 1. Master Architecture: Primary Data Center (PDC) vs Disaster Recovery Site (DRS)

| System / Metric | Technical Definition | Regulatory / Industry Benchmark | Operational Role in Banking |
| --- | --- | --- | --- |
| Primary Data Center (PDC) | The central facility housing core database servers, storage arrays, and network gateways | Tier III or Tier IV Data Center standard with 99.98%–99.99% uptime | Hosts live production environment for all branch and digital channels. |
| Disaster Recovery Site (DRS) | Geographically separated secondary data center located in a different seismic zone | Minimum distance of 200–500 km from PDC in a different natural risk zone | Takes over live banking operations seamlessly if PDC suffers fire, earthquake, or catastrophic failure. |
| Recovery Point Objective (RPO) | The maximum acceptable duration of data loss measured in time preceding a disaster | **Near-Zero RPO (Real-time synchronous data replication)** | Ensures zero committed customer transactions are lost during failover. |
| Recovery Time Objective (RTO) | The maximum acceptable duration required to restore systems and resume banking services post-disaster | **RTO typically < 30 to 60 Minutes** | Minimizes financial downtime and maintains payment system stability. |
| Disaster Recovery Drills | Live simulation switching production load from PDC to DRS | Mandatory periodic drills (at least **twice a year / half-yearly**) | Validates operational readiness of backup systems and connectivity. |

## 🔒 2. Core Functional Modules of a Modern CBS

• **1. Deposit Module:** Automated interest accrual, TDS calculation at financial year-end, auto-renewal of term deposits, and dormant account flags.
• **2. Loans & Advances Module:** Asset classification into standard/NPA based on 90-day overdue logic, interest charging on daily reducing balances, and automated installment billing.
• **3. General Ledger (GL) & Financial Reporting:** Real-time generation of Daily Balance Sheet and Profit & Loss statement without manual end-of-day branch tallying.
• **4. Trade Finance & Forex Module:** Integrated processing of Letters of Credit, Bank Guarantees, Forward Contracts, and SWIFT messaging (MT103, MT700).
• **5. Delivery Channel Integration:** Real-time API middleware connecting CBS with ATM Switch, POS networks, Mobile Banking, Internet Banking, and UPI gateways.

> 🎯 **Exam Anchor & Trap:**
> 🎯 Top Exam Traps on Bank Computerization & CBS:
1. **RPO vs RTO Distinction:** **RPO (Recovery Point Objective)** measures **data loss** in time. **RTO (Recovery Time Objective)** measures **system downtime** until restoration.
2. **UCIC Mandate:** Under RBI norms, a customer must have only **ONE unique CIF/UCIC** in the entire bank, even if they hold multiple accounts across different branches in India.
3. **DRS Location Norm:** The Disaster Recovery Site must be located in a **different seismic/geographical zone** to ensure both centers cannot be disabled by the same natural disaster.

---

---

## 71. IIBF PPB Unit 16: Electronic Payment Systems, NPCI Architecture & Digital Rupee

> 🧠 **Key Concept — Pivotal Concept: Retail vs Large-Value Electronic Payment Systems**
> Under the Payment and Settlement Systems Act 2007 (PSS Act), RBI regulates electronic fund transfers, operating large-value settlement directly while retail payment rails are operated by the National Payments Corporation of India (NPCI).

## 📊 1. Master Matrix: NEFT vs RTGS vs IMPS vs UPI

| Parameter | RTGS (RBI) | NEFT (RBI) | IMPS (NPCI) | UPI (NPCI) |
| --- | --- | --- | --- | --- |
| Settlement Mode | Gross Settlement in Real-Time | Deferred Net Settlement (DNS) in half-hourly batches | Real-Time Gross Immediate Credit | Real-Time Instant Credit via Virtual Payment Address (VPA) |
| Operating Hours | **24x7x365** (Round-the-clock) | **24x7x365** (48 half-hourly batches daily) | **24x7x365** (Instant real-time) | **24x7x365** (Instant real-time) |
| Minimum Amount | **₹2,00,000 (₹2 Lakhs)** | No Minimum (Re. 1) | No Minimum (Re. 1) | No Minimum (Re. 1) |
| Maximum Limit | No Maximum Ceiling | No Maximum Ceiling | **₹5,00,000 (₹5 Lakhs)** per transaction | **₹1,00,000** standard (₹5L for Hospitals/Educational/Tax payments) |
| Charges for Savings A/c | Free for online / digital transactions | Free for online / digital transactions | As decided by individual member banks | Zero transaction charges for retail peer-to-peer / peer-to-merchant |
| Operating Authority | Reserve Bank of India (RBI) | Reserve Bank of India (RBI) | NPCI | NPCI |

## 💳 2. Other Core NPCI Retail Platforms

| Platform | Full Form | Primary Function / Operational Mechanism |
| --- | --- | --- |
| NACH | National Automated Clearing House | Centralized high-volume electronic clearing for interbank bulk recurring transactions (Direct Debit for EMIs/SIPs; Direct Credit for Salaries/Subsidies). Replaced regional ECS. |
| AePS | Aadhaar Enabled Payment System | Allows basic financial transactions (Cash Deposit, Cash Withdrawal, Balance Enquiry, Mini-statement) at Micro-ATMs/BC points using Aadhaar number and biometric authentication. |
| APBS | Aadhaar Payment Bridge System | Used for direct benefit transfer (DBT) of Government welfare subsidies directly into beneficiaries' Aadhaar-seeded bank accounts. |
| CTS-2010 | Cheque Truncation System | Online image-based cheque clearing replacing physical movement of paper cheques, featuring standardized security watermarks and faster clearing cycles. |

## 🪙 3. Central Bank Digital Currency (CBDC) — Digital Rupee (e₹)

• **Legal Tender Status:** Issued by RBI under amendments to Section 22 and Section 26 of the RBI Act 1934, recognized as sovereign digital legal tender.
• **Two Versions:**.
• • **e₹-W (Wholesale):** Launched Nov 2022 for interbank settlement of secondary market transactions in Government Securities.
• • **e₹-R (Retail):** Launched Dec 2022 as token-based digital currency in denominations identical to physical currency notes and coins, held in non-interest-bearing digital wallets.
• **Zero Interest Bearing:** Unlike bank deposits, CBDC does not earn interest to prevent sudden disintermediation of commercial bank deposits.

> 🎯 **Exam Anchor & Trap:**
> 🎯 Top Exam Traps on Payment Systems:
1. **RTGS Minimum Amount Limit:** The minimum limit for an RTGS transaction is **₹2,00,000**. There is NO minimum limit for NEFT.
2. **IMPS Maximum Transaction Limit:** The maximum transaction limit for IMPS is **₹5,00,000 (₹5 Lakhs)** (revised from ₹2 Lakhs in 2021).
3. **UPI Standard Limit:** Standard UPI limit is **₹1 Lakh** per transaction (extended to ₹5 Lakhs for tax payments, hospitals, and educational institutions).
4. **CBDC Interest Trap:** Digital Rupee (e₹) carries **ZERO interest** (same as physical cash in hand).

---

---

## 72. IIBF PPB Unit 17: Cyber Security in Banks, ISO 27001 & Information Technology Act

> 🧠 **Key Concept — Pivotal Concept: Information Security & Cyber Resilience in Banking**
> Banks handle massive financial assets and sensitive personal data, making robust cyber defense, data confidentiality, integrity, and availability (CIA Triad) a regulatory prerequisite.

## 🛡️ 1. RBI Cyber Security Framework & Incident Reporting Norms

| Security Dimension | Mandatory RBI Guideline / Standard | Operational Enforcement Mechanism |
| --- | --- | --- |
| Security Operations Centre (SOC) | Mandatory **24x7x365 SOC** equipped with SIEM (Security Information & Event Management) tools | Real-time threat monitoring, anomaly detection, and automated log analysis. |
| Mandatory Incident Reporting | All unusual cyber incidents, data breaches, or ransomware attacks must be reported to RBI and **CERT-In within 6 Hours** | Submission of initial cyber incident report within 6 hours followed by root-cause analysis. |
| Two-Factor Authentication (2FA) | Mandatory Additional Factor of Authentication (AFA) for all card-not-present and digital fund transfers | OTP, Hardware Token, or Biometric verification alongside static password. |
| Network Segmentation | Separation of database servers, application servers, and external internet-facing web servers with firewalls | Demilitarized Zone (DMZ) architecture preventing direct external access to core databases. |
| VAPT (Vulnerability Assessment & Penetration Testing) | Mandatory periodic VAPT audits of all internet-facing banking applications | Conducted at least **twice a year** by CERT-In empaneled security auditors. |

## 📜 2. Key Provisions of the Information Technology Act, 2000 (Amended 2008)

| Section in IT Act | Offence / Statutory Mandate | Penalties / Legal Consequence |
| --- | --- | --- |
| Section 43 | Damage to computer systems, unauthorized downloading, virus injection, or data extraction without permission | Compensation up to **₹1 Crore** to the affected person/bank. |
| Section 43A | Failure of a corporate entity / bank to protect sensitive personal data resulting in wrongful loss | Liable to pay damages by way of compensation to the affected person (no upper cap). |
| Section 66 | Hacking / Computer related offences with fraudulent intention | Imprisonment up to **3 years** or fine up to **₹5 Lakhs** or both. |
| Section 66C | Identity Theft (fraudulent use of electronic signature, password, or unique identification feature) | Imprisonment up to **3 years** and fine up to **₹1 Lakh**. |
| Section 66D | Cheating by Personation using computer resource / mobile phone (Phishing / Vishing frauds) | Imprisonment up to **3 years** and fine up to **₹1 Lakh**. |
| Section 66F | Cyber Terrorism (acts aimed at threatening unity, integrity, security of India or disabling critical infrastructure) | Imprisonment for **LIFE**. |

> 🎯 **Exam Anchor & Trap:**
> 🎯 Top Exam Traps on Cyber Security & IT Act:
1. **CERT-In Reporting Deadline:** Cyber security incidents must be reported to CERT-In within **6 HOURS** of detection (not 24 hours or 48 hours).
2. **Cyber Terrorism Penalty:** The maximum penalty under Section 66F for cyber terrorism targeting critical financial/national infrastructure is **Life Imprisonment**.
3. **ISO 27001 Standard:** ISO 27001 is the standard for **Information Security Management Systems (ISMS)**, while ISO 9001 is for General Quality Management.

---
