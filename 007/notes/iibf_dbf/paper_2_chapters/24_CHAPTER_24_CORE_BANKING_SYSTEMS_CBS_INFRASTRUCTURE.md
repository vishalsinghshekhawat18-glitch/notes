# CORE BANKING SYSTEMS (CBS) & IT INFRASTRUCTURE

Core Banking Systems (CBS) represent the centralized technological backbone of modern banking, enabling customers to operate accounts from any networked branch globally. Governed by high-availability data centers, redundant telecommunication networks, Uninterrupted Power Systems (UPS), and strict Begin-of-Day (BOD) and End-of-Day (EOD) operational routines, CBS replaces localized branch accounting with continuous, enterprise-wide real-time processing.

---

## § 24.1 Unit 42: Essentials of Bank Computerisation & Data Warehousing

> **Curriculum Alignment — Official IIBF Paper 2 Benchmark (Unit 42)**  
> **Core Proposition:** Bank computerization shifted the industry from decentralised ledger-posting machines to centralized, 24x7 Core Banking Solutions (CBS) hosted in fault-tolerant Tier-3/Tier-4 Data Centers with live Disaster Recovery (DR) synchronization.

### 1. Telecommunications & Power Infrastructure

• **Network Typologies in Banking:**
  - **Local Area Network (LAN):** High-speed Ethernet within a single branch/office connecting tellers, back-office workstations, and local switches.
  - **Wide Area Network (WAN):** Interconnects branches across geographic regions to the central CBS Data Center via Multiprotocol Label Switching (MPLS) leased lines.
  - **VSAT (Very Small Aperture Terminal):** Satellite-based communication deployed in remote, hilly, and rural locations lacking terrestrial fiber connectivity.
• **Uninterrupted Power Supply (UPS) Systems:**
  - **Online UPS:** The load is continuously powered through the inverter; zero transfer/switching time (0 ms) between mains failure and battery backup. Mandatory for core banking servers and communication switches.
  - **Offline (Standby) UPS:** Power is drawn directly from mains during normal operation; switching time of 4 to 10 ms upon power failure. Suitable only for non-critical peripheral workstations.

### 2. Data Warehousing & Data Mining Architecture

• **Data Warehouse:** A centralized, subject-oriented, integrated, time-variant, and non-volatile database storing historical transactional records drawn from multiple disparate source systems (CBS, trade finance, credit cards, HRMS).
  - **ETL Process:** Extract (pulling data from source systems), Transform (cleansing, standardizing), and Load (inserting into warehouse tables).
• **Data Mining:** The computational process of discovering hidden patterns, anomalies, and correlations within large datasets using artificial intelligence and statistical modeling:
  - **Applications in Banking:** Fraud detection, credit risk scoring, customer churn prediction, cross-selling propensity modeling, anti-money laundering pattern recognition.

---

## § 24.2 Unit 43: Operational Aspects of Core Banking Systems (CBS)

### 1. Operational Flow & Dual-Control Mechanics

• **Anywhere Banking:** The customer is no longer a customer of a specific branch; the customer is an account holder of the bank at large. Branch operations act as customer service points accessing the central database.
• **Maker-Checker Principle (Dual Control):**
  - No single user has the unilateral authority to initiate and finalize a financial transaction.
  - **Maker (Initiator):** Enters transaction details (account number, amount, value date).
  - **Checker (Authorizer):** Independently verifies physical source documents and authorises the transaction in CBS. The transaction posts to the general ledger only upon checker authorization.
• **Parameterization & Master Files:**
  - Business rules (interest rates, service charges, product tenors, tax slabs) are configured in centralized **Parameter Files**.
  - Branches cannot alter interest rates or charges locally; updates are deployed centrally across all branches simultaneously.

### 2. Begin of Day (BOD) & End of Day (EOD) Operations

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                 CBS DAILY BATCH PROCESSING ARCHITECTURE                     │
├─────────────────────────────────────────────────────────────────────────────┤
│ 1. TRANSACTION PROCESSING WINDOW:                                           │
│    • Real-time processing of counter, ATM, mobile, and digital transactions.│
├─────────────────────────────────────────────────────────────────────────────┤
│ 2. PRE-EOD CHECKS:                                                          │
│    • Branch cash balancing; clearing of pending authorization queues;       │
│    • Verification of abnormal GL account balances.                          │
├─────────────────────────────────────────────────────────────────────────────┤
│ 3. END OF DAY (EOD) BATCH EXECUTION:                                        │
│    • Automatic interest calculation and accrual on deposits and advances.   │
│    • Execution of standing instructions (auto-debits, sweeps).              │
│    • Loan installment demands generation; NPA identification batches.       │
│    • Generation of statutory regulatory returns and trial balances.         │
├─────────────────────────────────────────────────────────────────────────────┤
│ 4. BEGIN OF DAY (BOD) INITIALIZATION:                                       │
│    • Roll-forward of system calendar date to the next working day.          │
│    • Verification of database replication to Disaster Recovery (DR) site.   │
│    • Opening of user logins and branch tellers for daily operations.        │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## § 24.3 High-Yield Examination Drill

**Q1. In modern bank computerization, what is the primary technical difference between an Online UPS and an Offline (Standby) UPS deployed in branch infrastructure?**  
A. Online UPS operates on solar energy, while Offline UPS runs on diesel  
B. Online UPS has zero (0 ms) transfer time because the load is constantly fed through the inverter, making it mandatory for critical core banking servers  
C. Offline UPS is designed exclusively for cloud data centers  
D. Online UPS does not require storage batteries  

**Q2. Under standard Core Banking Solution (CBS) internal controls, what is the essential objective of enforcing the 'Maker-Checker' principle for financial transactions?**  
A. To ensure that two officers physically sit at the same computer terminal  
B. To separate transaction entry from transaction authorization, mitigating unauthorized postings and single-point fraud  
C. To reduce branch telecommunication bandwidth consumption  
D. To eliminate the need for an external statutory audit  

**Q3. During the daily operational cycle of a Core Banking System, at which stage are automated interest accruals on savings accounts and loan installment demands executed?**  
A. During Begin of Day (BOD) operations  
B. During midday cash balancing  
C. During End of Day (EOD) batch processing  
D. Only on the 1st of every calendar month  

---

## § 24.4 Answer Key & Detailed Explanatory Rationale

• **Q1 — Answer: B.** An **Online UPS** provides continuous power to critical equipment through its inverter with **zero switching time (0 ms)**, shielding servers from voltage spikes and power drops. An Offline UPS has a switching delay of 4 to 10 ms, which can reboot critical servers.  
• **Q2 — Answer: B.** The **Maker-Checker** control ensures segregation of duties. One user (Maker) inputs the data, while a distinct senior user (Checker) validates the underlying vouchers before authorizing, preventing single-operator errors or internal frauds.  
• **Q3 — Answer: C.** Automated batch processing—such as daily interest accruals, standing instructions execution, and demand generation—takes place centrally during **End of Day (EOD)** operations after branch transaction windows close.
