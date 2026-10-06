# DELIVERY CHANNELS: BRANCH ARCHITECTURE, ATMS & BUSINESS CORRESPONDENTS

> **Paper:** 4 (Retail Banking and Wealth Management)  
> **Standard:** Macmillan Courseware & IIBF 2026 Master Benchmark • Duplex A4 Monochrome Print Edition

The delivery channel architecture of retail banking has evolved from single-point brick-and-mortar branch counters to an integrated multi-channel ecosystem combining physical branches, Automated Teller Machines (ATMs), Business Correspondents (BCs), Point of Sale (POS) networks, and digital self-service banking. To ensure fairness and financial consumer protection, electronic transactions are governed by the **RBI Master Direction on Customer Protection – Limiting Liability of Customers in Unauthorised Electronic Banking Transactions**.

---

## 1. Automated Teller Machine (ATM) Typology & Operational Models

ATMs provide 24x7 automated cash dispensing, deposit taking, and basic banking inquiries. In India, ATMs fall into three distinct operational and ownership structures:

| ATM Model | Hardware & Site Ownership | Cash Management & ATM Software | Branding & Regulatory Authorization |
| :--- | :--- | :--- | :--- |
| **Bank-Owned ATM** | Owned entirely by the sponsoring bank | Managed directly by the bank | Bank's own brand; authorized under general banking license |
| **Brown Label ATM** | **Third-party vendor** owns hardware, leases site, and manages physical upkeep | **Sponsor Bank** provides cash, network connectivity, and banking software | **Sponsor Bank's Brand**; authorized under bank's license |
| **White Label ATM (WLA)** | **Non-Bank Entity** owns, operates, and maintains entire hardware and site | **Non-Bank Entity** manages cash and operations via sponsor bank | **Non-Bank Entity's Brand**; licensed by RBI under Payment & Settlement Systems Act, 2007 |

### Crucial ATM Operating Rules:
- **Interoperability via NFS:** All ATMs connect through NPCI's **National Financial Switch (NFS)**, enabling cards of any bank to transact at any ATM in India.
- **Failed ATM Transactions:** If cash is not dispensed but the customer account is debited, the bank must auto-reverse the transaction within **Calendar $T + 5$ Days**. Delay beyond $T + 5$ days attracts a statutory penalty of **₹100 per day of delay** payable to the customer.

---

## 2. Financial Inclusion Delivery: The Business Correspondent (BC) Model

To extend banking services to unbanked rural and remote geographies where establishing full-fledged branches is commercially unviable, the Reserve Bank formulated the **Business Correspondent (BC) Model**:

- **Legal Nature of BC:** Business Correspondents act as **authorized agents of the bank**. The principal bank retains **full legal and financial responsibility** for all acts and omissions of its BCs.
- **Permitted Entities:** NGOs, self-help groups (SHGs), post offices, retired teachers, village shopkeepers, petrol pump operators, and common service centers (CSCs).
- **Core Operations via Micro-ATMs:** BCs use portable handheld biometric devices (Micro-ATMs) connected via mobile networks to perform basic banking:
  - Account opening through e-KYC.
  - Cash deposits and cash withdrawals (interoperable via AePS).
  - Processing small-ticket remittances and bill payments.
  - Sourcing micro-credit and social security insurance schemes (PMJJBY, PMSBY, APY).

---

## 3. Customer Liability in Unauthorized Electronic Banking Transactions

Under the **RBI Master Direction (July 2017/2026)**, customer financial liability for fraudulent electronic banking transactions (third-party card skim, net banking hack, unauthorized UPI debit) is determined strictly by the timeline of customer reporting:

### 1. Zero Liability of Customer (Absolute Protection)
A customer incurs **Zero Liability** in the following two circumstances:
1. **Contributory Fraud / Negligence by the Bank:** Deficiency lies with the bank (e.g., bank system vulnerability, internal fraud), irrespective of whether the customer reports it or not.
2. **Third-Party Breach with Prompt Reporting:** Deficiency lies neither with the bank nor customer (e.g., sophisticated third-party cyber attack), **IF the customer notifies the bank within 3 working days** of receiving transaction alert from the bank.

### 2. Limited Liability of Customer (Reporting Delay: 4 to 7 Working Days)
If the customer reports an unauthorized transaction between **4 and 7 working days** after receiving the transaction alert, customer liability is capped at the transaction value or the maximum statutory ceiling, whichever is lower:

| Account / Facility Category | Maximum Customer Financial Liability Slab |
| :--- | :--- |
| **Basic Savings Bank Deposit Accounts (BSBDA) / PMJDY** | **₹5,000** |
| **Other Savings Accounts, Current/Overdraft Accounts, Credit Cards with Limit up to ₹5 Lakhs** | **₹10,000** |
| **Current / Cash Credit / Overdraft Accounts, Credit Cards with Limit exceeding ₹5 Lakhs** | **₹25,000** |

### 3. Reporting Beyond 7 Working Days
If the customer notifies the bank **after more than 7 working days**, the customer's financial liability is determined strictly as per the **bank's board-approved customer service policy**.

### 4. Mandatory Reversal Timelines:
- **Shadow Credit:** The bank must credit the disputed amount back to the customer's account within **10 working days** from the date of customer notification.
- **Final Resolution:** The dispute must be finally resolved within **90 days**.

---

> [!CAUTION]
> **Examiner Trap Alert & Regulatory Pitfalls:**
> 1. **Zero Liability Window:** Prompt notification within **3 working days** gives the customer **Zero Liability** for third-party breaches.
> 2. **Limited Liability Ceiling:** For regular savings accounts reported between 4 and 7 days, maximum customer liability is **₹10,000** (not ₹5,000). ₹5,000 is strictly for BSBDA accounts.
> 3. **White Label vs Brown Label:** White Label ATMs are licensed to **Non-Bank entities** under the PSS Act; Brown Label ATMs are owned by third-party vendors but branded and licensed by a **Bank**.

---

## 4. Solved Examination Questions

**Q1.** If a customer notifies their bank within 3 working days regarding an unauthorized electronic transaction caused by a third-party breach where neither the customer nor bank was at fault, what is the customer's financial liability?
- (A) Full transaction value
- (B) ₹5,000
- (C) ₹10,000
- (D) Zero Liability
*Answer:* **(D)**  
*Explanation:* Under RBI Master Directions, reporting a third-party cyber breach within 3 working days provides the customer with complete Zero Liability.

**Q2.** Under the RBI customer protection framework, what is the maximum customer liability for an unauthorized electronic transaction on a regular savings account reported between 4 and 7 working days?
- (A) ₹2,000
- (B) ₹5,000
- (C) ₹10,000
- (D) ₹25,000
*Answer:* **(C)**  
*Explanation:* The statutory maximum liability slab for regular savings bank accounts reported between 4 and 7 working days is capped at ₹10,000.

---

## 5. Active Recall & Self-Diagnostic Prompts

<details>
<summary>1. Distinguish between White Label ATMs and Brown Label ATMs.</summary>

White Label ATMs are owned, branded, and operated by non-bank entities authorized by the RBI under the PSS Act 2007. Brown Label ATMs are owned and maintained by third-party hardware vendors, but operate under the banking license, network connectivity, cash management, and brand name of a sponsor bank.
</details>

<details>
<summary>2. What is the statutory turnaround time for banks to credit shadow reversal in unauthorized electronic transactions?</summary>

The bank must provide shadow credit for the disputed amount back to the customer's account within 10 working days from the date of receiving customer notification.
</details>
