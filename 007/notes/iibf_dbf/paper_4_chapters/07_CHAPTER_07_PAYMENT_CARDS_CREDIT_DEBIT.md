# PAYMENT CARDS: CREDIT CARDS, CHARGE CARDS & PREPAID INSTRUMENTS

> **Paper:** 4 (Retail Banking and Wealth Management)  
> **Standard:** Macmillan Courseware & IIBF 2026 Master Benchmark • Duplex A4 Monochrome Print Edition

Payment cards constitute the primary electronic payment instrument in retail consumer finance. Classified across distinct statutory mechanisms—Debit Cards, Credit Cards, Charge Cards, and Prepaid Payment Instruments (PPIs)—card products combine transactional convenience with revolving credit lines. In India, card issuance, interest billing, contactless NFC thresholds, and data tokenization are strictly governed by the **RBI Master Direction on Credit Card and Debit Card Issuance and Conduct (2022/2026)**.

---

## 1. Master Classification: Payment Card Architectures

| Card Category | Settlement Mechanism | Credit Facility Availability | Grace Period | Regulatory Funding Source |
| :--- | :--- | :--- | :--- | :--- |
| **Debit Card** | **Immediate Real-Time Debit** to cardholder's CASA account | **No Credit Line** (Unless pre-arranged overdraft/OD facility exists) | Not applicable | Linked directly to underlying savings or current account balance |
| **Credit Card** | **Revolving Credit Line** sanctioned by the card-issuing bank | **Revolving Credit** up to a sanctioned limit; cash advance limit | **20 to 50 Days** interest-free window (if previous balance paid in full) | Bank balance sheet funding; monthly statement generation |
| **Charge Card** | **Deferred Settlement** without revolving credit option | **No Revolving Credit**; full statement balance must be cleared | **20 to 50 Days** interest-free window | Cardholder must pay $100\%$ of billed statement on or before due date |
| **Prepaid Payment Instrument (PPI)** | **Pre-Loaded Balance** stored on chip or digital wallet | **No Credit Line** (Prepaid instrument) | Not applicable | Stored-value instrument loaded against cash, debit card, or net banking |

---

## 2. Credit Card Mechanics: Billing Cycle, Grace Period & Finance Charges

### 1. The Billing Cycle & Payment Due Date
- **Billing Cycle (Statement Date):** A recurring 30-day period during which transactions are aggregated into a monthly statement.
- **Payment Due Date (PDD):** The date by which payment must reach the card issuer, typically **15 to 25 days** after the statement date.
- **Interest-Free Grace Period:** The window between transaction date and payment due date, varying from **20 to 50 days**.
  - *Vital Rule:* The interest-free grace period applies **ONLY if the total statement balance of the previous month was paid in full** on or before the due date. If even ₹1 remains unpaid, the grace period is **completely forfeited** on both old balances and new purchases.

### 2. Minimum Amount Due (MAD)
Under RBI Master Directions, the structure of the **Minimum Amount Due (MAD)** is determined by individual card issuers subject to strict prudential safeguards:
- **Negative Amortization Prohibition:** RBI explicitly mandates that the MAD must be designed such that it **never leads to negative amortization** (where unpaid finance charges get capitalized, increasing the principal). The MAD must cover $100\%$ of all taxes (GST), finance charges, fees, and EMI installments, plus a defined fraction of the principal debt.
- **Common Industry Formulation:** Issuers commonly formulate MAD as:
  $$\text{MAD} = 5\% \text{ of Principal Outstanding Balance} + \text{All Billed Taxes (GST)} + \text{Finance Charges} + \text{EMI Installments}$$
  *(Note: While 5% is a standard illustrative industry benchmark, the exact percentage of principal is determined by bank credit policy).*
- Paying MAD prevents the account from being reported as delinquent (overdue) to Credit Information Companies (CICs), but **does NOT waive finance charges**. Interest continues to accrue on the entire remaining unpaid balance.

### 3. Revolving Finance Charges & Annual Percentage Rate (APR)
- Finance charges typically range from **$3.00\% \text{ to } 3.75\%$ per month**, translating to an effective **APR of $36\% \text{ to } 45\%$ per annum**.
- Interest is calculated on a **daily compounding basis** from the exact date of each transaction.

---

## 3. Comprehensive Worked Numerical: Credit Card Revolving Interest Mechanics

**Problem Statement:**  
A cardholder has a billing statement generated on **1 May 2026** with a Payment Due Date of **20 May 2026**.
- Previous statement balance: NIL.
- 5 May 2026: Purchases goods worth ₹50,000 using the credit card.
- 20 May 2026 (Due Date): Cardholder pays only the Minimum Amount Due (MAD) of ₹2,500 ($5\%$).
- 25 May 2026: Cardholder makes an additional purchase of ₹10,000.
- Next statement date: **1 June 2026** (total period: 31 days in May).
- Applicable finance charge: $3.50\%$ per month ($42.00\%$ per annum; daily rate $= \frac{42\%}{365} = 0.115068\%$ per day). GST on finance charges: $18\%$.

Calculate the total finance charges and GST debited in the 1 June statement.

#### Step-by-Step Solution:

1. **Transaction 1 (Initial Purchase ₹50,000):**
   - Interest on ₹50,000 from 5 May to 20 May (15 days):
     $$\text{Interest}_1 = 50,000 \times \left(\frac{42}{100 \times 365}\right) \times 15 = 50,000 \times 0.00115068 \times 15 = ₹863.01$$

2. **Transaction 1 Residual Balance (₹50,000 - ₹2,500 = ₹47,500):**
   - Interest on remaining ₹47,500 from 20 May to 1 June (12 days):
     $$\text{Interest}_2 = 47,500 \times 0.00115068 \times 12 = ₹655.89$$

3. **Transaction 2 (New Purchase ₹10,000 on 25 May):**
   - *Crucial Rule:* Because the cardholder revolved credit on 20 May, the grace period is forfeited on new purchases. Interest accrues immediately from 25 May to 1 June (7 days):
     $$\text{Interest}_3 = 10,000 \times 0.00115068 \times 7 = ₹80.55$$

4. **Total Finance Charges & Tax:**
   $$\text{Total Finance Charges} = 863.01 + 655.89 + 80.55 = ₹1,599.45$$
   $$\text{Applicable GST (18%)} = 1,599.45 \times 18\% = ₹287.90$$
   $$\text{Total Interest & Tax Debited} = 1,599.45 + 287.90 = ₹1,887.35$$

---

## 4. Card Technology & RBI Regulatory Protections

### 1. Chip & PIN vs Contactless Cards
- **EMV Chip & PIN:** Microprocessor chip creates dynamic cryptographic tokens per transaction, eliminating card skimming vulnerability inherent in magnetic stripe cards.
- **Contactless NFC Cards:** Near Field Communication cards enable tap-and-pay transactions.
  - **RBI Contactless Limit:** Contactless transactions without entering a PIN are permitted up to **₹5,000 per transaction** (enhanced from ₹2,000). For amounts exceeding ₹5,000, two-factor authentication (entering PIN) is mandatory.

### 2. Card-on-File Tokenization (CoFT)
- Under RBI directives, merchants and payment aggregators cannot store actual 16-digit debit/credit card numbers (Card-on-File).
- They must replace card credentials with an encrypted **Token** issued by card networks (Visa, Mastercard, RuPay), preventing mass data compromises during e-commerce breaches.

### 3. RBI Conduct Guidelines on Card Issuance & Operations
- **Unsolicited Cards:** Banks cannot issue credit cards or upgrade limits without explicit written/digital consent. If an unsolicited card is billed, the issuer must cancel it and pay a **penalty equal to twice the billed amount** to the customer.
- **Closure of Credit Cards:** Issuer must honor customer requests for card closure within **7 working days**. Failure to close within 7 days results in a penalty of **₹500 per day of delay** payable to the customer.
- **Default Reporting to CICs:** Issuers must give a **7-day advance notice** to cardholders before reporting an account as delinquent to Credit Information Companies.

---

> [!CAUTION]
> **Examiner Trap Alert & Regulatory Pitfalls:**
> 1. **Grace Period Loss:** If the customer pays only the Minimum Amount Due (MAD), the interest-free grace period is **completely forfeited** on both old balances and all subsequent new purchases.
> 2. **Contactless PIN Threshold:** Contactless payments without PIN are capped at **₹5,000 per transaction**.
> 3. **Unsolicited Card Penalty:** The statutory penalty for billing an unsolicited credit card is **twice the value of charges levied**.

---

## 5. Solved Examination Questions

**Q1.** Under RBI Master Directions, what is the maximum transaction limit for contactless card payments at POS terminals without entering a PIN?
- (A) ₹2,000
- (B) ₹3,000
- (C) ₹5,000
- (D) ₹10,000
*Answer:* **(C)**  
*Explanation:* The RBI contactless limit for contactless tap-and-go transactions without PIN authentication is ₹5,000 per transaction.

**Q2.** If a cardholder requests the closure of a credit card, within how many working days must the issuing bank complete the cancellation to avoid statutory delay penalties?
- (A) 3 Working Days
- (B) 7 Working Days
- (C) 15 Working Days
- (D) 30 Working Days
*Answer:* **(B)**  
*Explanation:* Banks must close credit cards within 7 working days of receiving the request. Failure to do so attracts a penalty of ₹500 per day of delay payable to the cardholder.

---

## 6. Active Recall & Self-Diagnostic Prompts

<details>
<summary>1. Distinguish between a Credit Card and a Charge Card.</summary>

A Credit Card provides a revolving credit line where the cardholder can choose to pay only the Minimum Amount Due (MAD) and roll over the remaining balance by paying interest. A Charge Card offers a short interest-free credit window, but requires the cardholder to pay 100% of the statement balance on or before the due date, with zero revolving credit option.
</details>

<details>
<summary>2. Why does revolving credit cause immediate interest accrual on subsequent new purchases?</summary>

Because the interest-free grace period is a contractual privilege granted only to cardholders who have completely settled their previous statement dues. When a balance is revolved, the grace period is revoked, causing interest to run on new transactions from the date of purchase.
</details>
