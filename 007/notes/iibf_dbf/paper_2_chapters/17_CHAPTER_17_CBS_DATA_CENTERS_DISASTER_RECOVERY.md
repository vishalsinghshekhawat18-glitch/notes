# BANK COMPUTERIZATION, CORE BANKING (CBS) & DATA CENTERS

Modern banking operates atop centralized database systems where branch offices act as distributed delivery nodes. Core Banking Solutions (CBS) demand high-availability infrastructure partitioned into Primary Data Centers (PDC), Near Disaster Recovery Sites, and Far Disaster Recovery Sites (DRS) governed by strict RPO and RTO metrics.

## § 17.1 Comprehensive Operational & Legal Analysis

Essentials of Bank Computerization, CBS & Data Centers

> **Key Concept — Pivotal Concept: Core Banking Solution (CBS) Paradigm Shift**
> Core Banking Solutions (CBS) revolutionized Indian banking from 'branch-based banking' (where a customer was tied to a single home branch) to 'bank-based anywhere banking' (where customer belongs to the entire bank).

## 1. Master Architecture: Primary Data Center (PDC) vs Disaster Recovery Site (DRS)

| System / Metric | Technical Definition | Regulatory / Industry Benchmark | Operational Role in Banking |
| --- | --- | --- | --- |
| Primary Data Center (PDC) | The central facility housing core database servers, storage arrays, and network gateways | Tier III or Tier IV Data Center standard with 99.98%–99.99% uptime | Hosts live production environment for all branch and digital channels. |
| Disaster Recovery Site (DRS) | Geographically separated secondary data center located in a different seismic zone | Minimum distance of 200–500 km from PDC in a different natural risk zone | Takes over live banking operations seamlessly if PDC suffers fire, earthquake, or catastrophic failure. |
| Recovery Point Objective (RPO) | The maximum acceptable duration of data loss measured in time preceding a disaster | **Near-Zero RPO (Real-time synchronous data replication)** | Ensures zero committed customer transactions are lost during failover. |
| Recovery Time Objective (RTO) | The maximum acceptable duration required to restore systems and resume banking services post-disaster | **RTO typically < 30 to 60 Minutes** | Minimizes financial downtime and maintains payment system stability. |
| Disaster Recovery Drills | Live simulation switching production load from PDC to DRS | Mandatory periodic drills (at least **twice a year / half-yearly**) | Validates operational readiness of backup systems and connectivity. |

## 2. Core Functional Modules of a Modern CBS

• **1. Deposit Module:** Automated interest accrual, TDS calculation at financial year-end, auto-renewal of term deposits, and dormant account flags.
• **2. Loans & Advances Module:** Asset classification into standard/NPA based on 90-day overdue logic, interest charging on daily reducing balances, and automated installment billing.
• **3. General Ledger (GL) & Financial Reporting:** Real-time generation of Daily Balance Sheet and Profit & Loss statement without manual end-of-day branch tallying.
• **4. Trade Finance & Forex Module:** Integrated processing of Letters of Credit, Bank Guarantees, Forward Contracts, and SWIFT messaging (MT103, MT700).
• **5. Delivery Channel Integration:** Real-time API middleware connecting CBS with ATM Switch, POS networks, Mobile Banking, Internet Banking, and UPI gateways.

> **Exam Anchor & Trap:**
> Top Exam Traps on Bank Computerization & CBS:
1. **RPO vs RTO Distinction:** **RPO (Recovery Point Objective)** measures **data loss** in time. **RTO (Recovery Time Objective)** measures **system downtime** until restoration.
2. **UCIC Mandate:** Under RBI norms, a customer must have only **ONE unique CIF/UCIC** in the entire bank, even if they hold multiple accounts across different branches in India.
3. **DRS Location Norm:** The Disaster Recovery Site must be located in a **different seismic/geographical zone** to ensure both centers cannot be disabled by the same natural disaster.

---

---

### Practice Questions & Solved Numerical Drills (IIBF Pattern)

**Q1:** In banking business continuity and disaster recovery planning, what does "Recovery Point Objective" (RPO) measure?
• (A) The maximum acceptable duration of system downtime before service is restored
• (B) The maximum acceptable age of data that must be recovered, measuring permissible data loss in time
• (C) The financial cost of hardware procurement
• (D) The percentage of network bandwidth utilized

**Q2:** What is the technological reason why a Far Disaster Recovery Site (DRS) is geographically located in a different seismic zone far away from the Primary Data Center (PDC)?
• (A) To reduce municipal power tariffs
• (B) To protect against regional disasters (earthquakes, floods, grid failures) wiping out both data centers simultaneously
• (C) To comply with state sales tax exemptions
• (D) To enable faster branch broadband connectivity

**Q3:** Which protocol is commonly utilized for real-time synchronous data replication between a Primary Data Center and a Near Disaster Recovery Site?
• (A) Batch FTP file transfer
• (B) Fibre Channel / Storage Area Network (SAN) synchronous replication
• (C) Dial-up modem connection
• (D) Public internet email attachments

#### Solutions & Detailed Explanations

1. **(B) The maximum acceptable age of data that must be recovered, measuring permissible data loss in time** — RPO measures acceptable data loss (ideally near-zero for financial ledger systems); RTO measures acceptable downtime.

2. **(B) To protect against regional disasters (earthquakes, floods, grid failures) wiping out both data centers simultaneously** — Geographical separation ensures business continuity even if an entire metropolitan area or power grid suffers catastrophic collapse.

3. **(B) Fibre Channel / Storage Area Network (SAN) synchronous replication** — Near DR sites use synchronous replication over high-speed dedicated optical links ensuring zero data loss (RPO = 0).

## § 17.2 Active Recall Diagnostic Vault

<details>
<summary>Distinguish between Recovery Point Objective (RPO) and Recovery Time Objective (RTO).</summary>
RPO (Recovery Point Objective): Measures the maximum tolerable data loss expressed in time; defines how much transactional data the bank can afford to reconstruct manually if the primary site crashes. RTO (Recovery Time Objective): Measures the maximum tolerable downtime; defines how quickly secondary systems must be brought live to resume customer transactions.
</details>

<details>
<summary>What are the core functional modules integrated into a comprehensive Core Banking Solution (CBS)?</summary>
Core modules: (1) General Ledger (GL) & Financial Accounting; (2) Deposit Operations (CASA, Term Deposits); (3) Loans & Credit Management; (4) Trade Finance & Forex; (5) Treasury Management; (6) Payment Gateway Integration (NEFT, RTGS, UPI); (7) Customer Relationship Management (CRM); (8) Regulatory Reporting & MIS Engine.
</details>

