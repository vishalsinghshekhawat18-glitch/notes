# BANK RECONCILIATION STATEMENT (BRS) & TIMING DISCREPANCIES

> **Paper:** 3 (Accounting & Financial Management for Bankers)
> **Module:** A (Accounting Principles and Processes)
> **Standard:** Macmillan Master Benchmark • Duplex A4 Monochrome Print Edition

## 1. Why This Matters in Banking Operations
A Bank Reconciliation Statement (BRS) is a vital internal control statement prepared periodically by an account holder to explain the mathematical difference between the bank balance reported in their Cash Book (bank column) and the bank balance shown in their Bank Statement / Passbook. In commercial banking, understanding BRS mechanics is fundamental to resolving customer clearing disputes, verifying audit trails, detecting fraudulent transactions, and assessing the true cash liquidity of loan applicants.

## 2. Core Concepts: The Nature of Dual Books & Polarity

The account holder and the bank record the same transactions from inverse legal viewpoints:
- To the **Account Holder (Depositor)**, bank balance is an **Asset**. Deposits are debited and withdrawals are credited in the Cash Book.
- To the **Bank**, customer deposits represent a **Liability**. Deposits are credited and withdrawals are debited in the Bank Passbook.

```
+----------------------------------------------------------------------------------------------------+
|                                    MASTER BALANCE TERMINOLOGY MATRIX                               |
+----------------------------------------------------------------------------------------------------+
| Terminology                   | Meaning to Customer                   | Legal Status               |
+-------------------------------+---------------------------------------+----------------------------+
| Cash Book Debit Balance       | Favorable Balance (Cash in Bank)      | Asset for Customer         |
| Cash Book Credit Balance      | Unfavorable / Overdraft Balance (OD)  | Liability for Customer     |
| Pass Book Credit Balance      | Favorable Balance (Bank owes Customer)| Liability for Bank         |
| Pass Book Debit Balance       | Unfavorable / Overdraft Balance (OD)  | Asset for Bank (Loan to Cust|
+-------------------------------+---------------------------------------+----------------------------+
```

## 3. Causes of Discrepancies Between Cash Book & Passbook
Differences between the two records arise under two broad categories:

### Category A: Timing Differences
1. **Cheques Issued but Not Yet Presented for Payment:** Credited immediately in Cash Book by customer; not debited in Passbook until payees deposit them through the clearing grid. Result: Passbook balance is higher than Cash Book.
2. **Cheques Deposited but Not Yet Cleared/Credited:** Debited immediately in Cash Book by customer; not credited in Passbook until realization. Result: Passbook balance is lower than Cash Book.

### Category B: Transactions Recorded First by Bank (Direct Entries)
1. **Bank Charges, Ledger Folio Charges & Processing Fees:** Debited directly by the bank in the Passbook; unknown to customer until statement received.
2. **Interest Credited on Savings / Term Deposits:** Credited directly by the bank.
3. **Interest Debited on Overdraft / Loan Facility:** Debited directly by the bank.
4. **Direct Collections:** Dividends, interest warrants, or customer receivables collected directly by the bank under mandates.
5. **Direct Payments under Standing Instructions (SI):** Insurance premiums, loan EMIs, utility bills paid directly by the bank.
6. **Dishonour of Cheques / Bills Discounted:** Debited back to customer's account upon return.

## 4. Master Polarity Matrix: Add / Subtract Directions

| Transaction Scenario | Cause of Difference | Starting from Cash Book (Favorable Dr) | Starting from Pass Book (Favorable Cr) | Starting from Cash Book (Overdraft Cr) | Starting from Pass Book (Overdraft Dr) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Cheques issued but not presented** | Passbook is HIGHER | **ADD (+)** | **SUBTRACT (−)** | **SUBTRACT (−)** | **ADD (+)** |
| **Cheques deposited but not cleared** | Passbook is LOWER | **SUBTRACT (−)** | **ADD (+)** | **ADD (+)** | **SUBTRACT (−)** |
| **Interest / Dividends collected by bank** | Passbook is HIGHER | **ADD (+)** | **SUBTRACT (−)** | **SUBTRACT (−)** | **ADD (+)** |
| **Direct debits (Charges, Interest, SI)** | Passbook is LOWER | **SUBTRACT (−)** | **ADD (+)** | **ADD (+)** | **SUBTRACT (−)** |
| **Direct deposit into bank by client** | Passbook is HIGHER | **ADD (+)** | **SUBTRACT (−)** | **SUBTRACT (−)** | **ADD (+)** |
| **Customer cheque returned dishonoured** | Passbook is LOWER | **SUBTRACT (−)** | **ADD (+)** | **ADD (+)** | **SUBTRACT (−)** |
| **Wrong debit given by bank in passbook** | Passbook is LOWER | **SUBTRACT (−)** | **ADD (+)** | **ADD (+)** | **SUBTRACT (−)** |
| **Wrong credit given by bank in passbook**| Passbook is HIGHER | **ADD (+)** | **SUBTRACT (−)** | **SUBTRACT (−)** | **ADD (+)** |

## 5. The Adjusted (Amended) Cash Book Method
In modern accounting practice and audit methodology, a Bank Reconciliation Statement is prepared in two structured steps:

### Step 1: Update the Cash Book
Before preparing the BRS, the customer's Cash Book is amended for all transactions already executed by the bank that were omitted from the Cash Book:
- **Debit Cash Book for:** Direct collections, interest credited, customer direct transfers.
- **Credit Cash Book for:** Bank charges, interest debited, standing instruction payments, dishonoured cheques.
- *Compute the Adjusted Cash Book Balance.*

### Step 2: Prepare BRS for Pure Timing Differences
The BRS is then drafted starting from the **Adjusted Cash Book Balance**, containing ONLY:
1. Cheques issued but not presented for payment.
2. Cheques deposited but not yet cleared.
3. Errors committed exclusively by the bank in the passbook.

## 6. Worked Numerical: Overdraft BRS Case
**Scenario:** On 31 March, a firm's Cash Book shows an **Overdraft Balance of ₹80,000**.
1. Cheques issued amounting to ₹25,000 had not been presented for payment.
2. Cheques paid into bank for ₹32,000 were cleared only on 4 April.
3. Bank charges of ₹1,200 were debited in Passbook but not entered in Cash Book.
4. A debtor directly deposited ₹18,000 into the bank account.
5. Interest on overdraft debited by bank was ₹4,500.

**Step-by-Step Solution (Overdraft Starting Balance):**
$$\text{Starting: Overdraft as per Cash Book (Negative Balance)} \quad -\text{₹80,000}$$
- Add: Cheques issued but not presented (reduces overdraft debt): $+ \text{₹25,000}$
- Add: Direct deposit by customer (reduces overdraft debt): $+ \text{₹18,000}$
- Less: Cheques deposited but not cleared (bank did not reduce debt yet): $- \text{₹32,000}$
- Less: Bank charges debited (increases overdraft debt): $- \text{₹1,200}$
- Less: Overdraft interest debited (increases overdraft debt): $- \text{₹4,500}$
- *Calculation:*
  $$-80,000 + 25,000 + 18,000 - 32,000 - 1,200 - 4,500 = -\text{₹74,700}$$
- *Conclusion:* Since the resulting figure is negative, it represents an **Overdraft as per Pass Book (Debit Balance) of ₹74,700**.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. A **Debit Balance in a Bank Passbook** is an **OVERDRAFT** (money owed to bank).
> 2. A **Credit Balance in a Bank Passbook** is a **FAVORABLE BALANCE** (money deposited in bank).
> 3. Under the Adjusted Cash Book method, unpresented cheques and uncollected cheques are **NEVER entered in the Cash Book**; they are strictly timing items for the BRS.
> 4. Errors committed by the bank in the Passbook (e.g. wrongful debit) must NEVER be entered in the customer's Cash Book.

## 7. Practice Questions & Solved Numerical Drills

**Q1.** A customer's Passbook shows a credit balance of ₹65,000. Cheques issued for ₹12,000 were not presented, and cheques deposited for ₹9,000 were not cleared. What was the balance as per the Cash Book?
- (A) ₹68,000
- (B) ₹62,000
- (C) ₹74,000
- (D) ₹56,000

**Q2.** When preparing an Adjusted Cash Book prior to drafting a BRS, which of the following is excluded from adjustment in the Cash Book?
- (A) Direct debit by bank for loan EMI
- (B) Dishonour of a customer cheque
- (C) Cheques issued but not yet presented for payment
- (D) Bank service charges and GST

**Q3.** A firm's Cash Book shows an overdraft of ₹40,000. Bank charges of ₹800 were debited by the bank, and a cheque of ₹5,000 deposited was returned unpaid. What is the overdraft as per Passbook (assuming no other items)?
- (A) ₹34,200
- (B) ₹45,800
- (C) ₹44,200
- (D) ₹35,800

#### Solutions & Explanations
* Q1 Correct Answer: (B) ₹62,000. Starting with Passbook Favorable balance ₹65,000: Less cheques issued not presented (-₹12,000) + Add cheques deposited not cleared (+₹9,000) = ₹65,000 - ₹12,000 + ₹9,000 = ₹62,000 (Cash Book Debit Balance).
* Q2 Correct Answer: (C) Cheques issued but not yet presented for payment. Cheques issued are already correctly recorded in the Cash Book when written; they remain pure timing differences in the BRS.
* Q3 Correct Answer: (B) ₹45,800. Starting Overdraft ₹40,000 + Bank charges ₹800 + Dishonoured cheque ₹5,000 = Total Overdraft ₹45,800.

## 8. Active Recall & Self-Diagnostic Prompts

<details>
<summary>Why is a Debit balance in the Passbook unfavorable, while a Debit balance in the Cash Book is favorable?</summary>

Because in the customer's Cash Book, the bank account is an asset (debit is positive). In the bank's Passbook, customer deposits are a liability (credit is positive); therefore, a debit in the Passbook means the customer has drawn more than deposited, creating a receivable (asset) for the bank and a debt (overdraft) for the customer.
</details>

<details>
<summary>What is the logical test for whether to add or subtract an item when starting from a favorable Cash Book balance?</summary>

Ask: "Did this transaction cause the Passbook balance to be HIGHER or LOWER than the Cash Book?" If the Passbook is HIGHER, ADD it. If the Passbook is LOWER, SUBTRACT it.
</details>

## 9. Last-Minute Revision Box
- Cash Book Dr = Favorable (Asset); Cash Book Cr = Overdraft (Liability).
- Pass Book Cr = Favorable (Liability for bank); Pass Book Dr = Overdraft (Asset for bank).
- Cheques issued not presented: Cash Book lower -> ADD to Cash Book / SUBTRACT from Pass Book.
- Cheques deposited not cleared: Cash Book higher -> SUBTRACT from Cash Book / ADD to Pass Book.
- Adjusted Cash Book: Adjust all bank-initiated transactions first; leave timing differences for BRS.
