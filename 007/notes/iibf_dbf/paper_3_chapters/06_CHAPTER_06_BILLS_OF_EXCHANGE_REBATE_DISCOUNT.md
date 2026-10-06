# BILLS OF EXCHANGE, ACCOMMODATION BILLS & REBATE ON BILLS DISCOUNTED

> **Paper:** 3 (Accounting & Financial Management for Bankers)
> **Module:** A (Accounting Principles and Processes)
> **Standard:** Macmillan Master Benchmark • Duplex A4 Monochrome Print Edition

## 1. Why This Matters in Banking Operations
Bills of Exchange represent an ancient and legally fortified credit instrument governing domestic and international trade finance. Commercial banks actively finance trade by discounting usance bills of exchange under the Negotiable Instruments Act 1881. Understanding bill parties, calculation of maturity, rules governing public and unforeseen holidays, accounting for dishonour and noting charges, and calculating **Rebate on Bills Discounted** (Schedule 5 liability) is essential for bank balance sheet compliance and bill portfolio management.

## 2. Statutory Definitions: Negotiable Instruments Act 1881

```
+----------------------------------------------------------------------------------------------------+
|                                BILL OF EXCHANGE vs PROMISSORY NOTE (NI ACT)                        |
+----------------------------------------------------------------------------------------------------+
| Legal Dimension       | Bill of Exchange (Section 5)          | Promissory Note (Section 4)        |
+-----------------------+---------------------------------------+------------------------------------+
| Definition            | Unconditional ORDER in writing signed | Unconditional UNDERTAKING in writin|
|                       | by maker directing payment to payee   | signed by maker to pay sum of money|
| Number of Parties     | Three: Drawer, Drawee, Payee          | Two: Maker (Promisor), Payee       |
| Acceptance            | Requires formal ACCEPTANCE by drawee  | No acceptance required (made by deb|
| Primary Liability     | Drawee / Acceptor                     | Maker of the note                  |
| Notice of Dishonour   | Compulsory to all prior parties       | Not required to maker              |
+-----------------------+---------------------------------------+------------------------------------+
```

## 3. Maturity & Days of Grace (Sections 22 & 25, NI Act)
- **3 Days of Grace (Section 22):** Mandatory **3 days of grace** are added to the specified period of all usance bills (bills payable after date or after sight) to establish the legal maturity date.
  - *Sight / Demand Bills:* Bills payable "at sight" or "on presentment" receive **ZERO days of grace**.
- **Maturity Falling on Holidays (Section 25):**
  1. **Public Holiday (Gazetted Holiday / Sunday):** If the maturity date (after adding grace days) falls on a known Public Holiday, the bill falls due on the **Immediately Preceding Business Day**.
  2. **Emergency / Unforeseen Holiday:** If the maturity date falls on a day declared an emergency public holiday (e.g. sudden curfew, natural disaster holiday), the bill falls due on the **Immediately Succeeding Business Day**.

## 4. Master Party & Accounting Entry Matrix

| Event / Transaction | In the Books of Drawer / Holder | In the Books of Drawee / Acceptor | In the Books of Discounting Bank |
| :--- | :--- | :--- | :--- |
| **1. Drawing & Acceptance** | Dr Bills Receivable A/c<br>Cr Drawee A/c | Dr Drawer A/c<br>Cr Bills Payable A/c | No Entry |
| **2. Discounting with Bank** | Dr Bank A/c<br>Dr Discount A/c<br>Cr Bills Receivable A/c | No Entry | Dr Bills Discounted & Purchased A/c<br>Cr Customer Current A/c<br>Cr Discount Income A/c |
| **3. Honoured at Maturity** | No Entry (bank collects) | Dr Bills Payable A/c<br>Cr Cash/Bank A/c | Dr Cash / Clearing A/c<br>Cr Bills Discounted & Purchased A/c |
| **4. Dishonoured at Maturity** | Dr Drawee A/c (Bill + Noting)<br>Cr Bank A/c | Dr Bills Payable A/c<br>Dr Noting Charges A/c<br>Cr Drawer A/c | Dr Customer Current A/c<br>Cr Bills Discounted & Purchased A/c<br>Cr Cash (Noting Charges) |
| **5. Retirement under Rebate** | Dr Cash A/c<br>Dr Rebate Allowed A/c<br>Cr Bills Receivable A/c | Dr Bills Payable A/c<br>Cr Cash A/c<br>Cr Rebate on Bills A/c | Dr Cash A/c<br>Dr Rebate on Bills A/c<br>Cr Bills Discounted & Purchased A/c |

## 5. Accommodation Bills ("Kite Flying")
- **Definition:** A bill drawn and accepted without any underlying commercial trade transaction of sale or purchase of goods, purely to accommodate one or both parties by raising short-term funds through bank discounting.
- **Enforceability:** Between accommodating parties, the bill lacks consideration and is legally unenforceable. However, a **Holder in Due Course** (e.g. a discounting bank that provided value in good faith) can enforce payment against all prior signatories.

## 6. Rebate on Bills Discounted (Unearned Discount)
When a commercial bank discounts a bill, it credits the entire discount fee immediately to Schedule 13 (Interest & Discount Earned). At the end of the financial year (31 March), if a bill matures in the subsequent financial year, the portion of discount representing the unexpired period is **Unearned Income**.
$$\text{Rebate on Bills Discounted} = \text{Total Bill Value} \times \frac{\text{Discount Rate}}{100} \times \frac{\text{Unexpired Days after 31 March}}{\text{Total Days of Bill or 365}}$$
- **Balance Sheet Presentation:**
  - Deducted from **Schedule 13 (Interest Earned)** in Form B Profit & Loss Account.
  - Disclosed as an unearned liability under **Schedule 5 (Other Liabilities & Provisions)** in Form A Balance Sheet.

## 7. Worked Numerical: Rebate on Bills Discounted
**Scenario:** On 15 February, a commercial bank discounts a 90-day bill for ₹10,00,000 at 12% p.a. Financial year closes on 31 March. Calculate the Rebate on Bills Discounted.
- *Total Period:* 15 February + 90 days + 3 days of grace = 19 May maturity.
- *Unexpired Period after 31 March:*
  - April = 30 days
  - May = 19 days
  - Total unexpired days = $30 + 19 = 49 \text{ days}$.
$$\text{Rebate} = 10,00,000 \times 12\% \times \frac{49}{365} = 10,00,000 \times 0.12 \times 0.134246 = \text{₹16,110}$$
- *Accounting Entry on 31 March:*
  $$\text{Debit: Interest and Discount Account (Schedule 13) \quad ₹16,110}$$
  $$\text{Credit: Rebate on Bills Discounted Account (Schedule 5) \quad ₹16,110}$$

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. Under Section 22 NI Act, 3 days of grace are allowed strictly on **usance bills**; sight/demand bills receive ZERO days of grace.
> 2. Maturity on Public Holiday -> **Immediately Preceding Business Day**; Maturity on Emergency Holiday -> **Immediately Succeeding Business Day**.
> 3. **Rebate on Bills Discounted** is reported under **Schedule 5 (Other Liabilities and Provisions)** in the bank balance sheet, NOT under Schedule 2 (Reserves).

## 8. Practice Questions & Solved Numerical Drills

**Q1.** A 3-month usance bill dated 1 January 2026 is drawn and accepted. The maturity date after adding 3 days of grace falls on Sunday, 4 April. What is the legal due date of payment?
- (A) Monday, 5 April
- (B) Saturday, 3 April
- (C) Sunday, 4 April
- (D) Tuesday, 6 April

**Q2.** In a commercial bank's financial statements, where does the "Rebate on Bills Discounted" appear?
- (A) Footnote to Balance Sheet
- (B) Schedule 14 (Other Income)
- (C) Schedule 5 (Other Liabilities and Provisions)
- (D) Schedule 11 (Other Assets)

**Q3.** An accommodation bill is drawn for mutual financial assistance without underlying sale of goods. Can a discounting commercial bank that discounted the bill in good faith enforce payment against the acceptor upon dishonour?
- (A) No, because the bill lacks consideration between original parties
- (B) Yes, because the bank is a Holder in Due Course
- (C) Only if sanctioned by the Reserve Bank of India
- (D) Only up to 50% of the face value

#### Solutions & Explanations
* Q1 Correct Answer: (B) Saturday, 3 April. Under Section 25 NI Act, if maturity falls on a public holiday or Sunday, the legal due date is the immediately preceding business day.
* Q2 Correct Answer: (C) Schedule 5 (Other Liabilities and Provisions). Represents unearned discount collected in advance, a current liability for the bank.
* Q3 Correct Answer: (B) Yes, because the bank is a Holder in Due Course. A holder in due course who takes a negotiable instrument for valuable consideration in good faith holds good title against all prior parties, regardless of accommodation origin.

## 9. Active Recall & Self-Diagnostic Prompts

<details>
<summary>What is Noting and Protesting under the Negotiable Instruments Act 1881?</summary>

Noting is the official recording by a Notary Public of the fact of dishonour upon presentment. Protesting is a formal certificate issued by the Notary Public attesting to the dishonour, serving as legal evidence in court.
</details>

<details>
<summary>Why must Rebate on Bills Discounted be deducted from Schedule 13 (Interest Earned)?</summary>

Because under the Accrual and Matching Concepts, income received in advance pertaining to the subsequent financial year cannot be recognized as current-year profit.
</details>

## 10. Last-Minute Revision Box
- Bill of Exchange: Section 5 (Order); Promissory Note: Section 4 (Promise).
- Grace Days: 3 days on usance bills; 0 days on sight/demand bills.
- Holiday Rule: Public Holiday -> Preceding Business Day; Emergency Holiday -> Succeeding Business Day.
- Rebate on Bills Discounted: Unearned discount; Schedule 5 liability; deducted from Schedule 13.
- Accommodation Bill: Enforceable by a Holder in Due Course despite lack of underlying consideration.
