# FOREIGN EXCHANGE ARITHMETIC & QUOTATION MECHANICS

> **Paper:** 3 (Accounting & Financial Management for Bankers)
> **Module:** C (Financial Management)
> **Standard:** Macmillan Master Benchmark • Duplex A4 Monochrome Print Edition

## 1. Why This Matters in Banking Operations
Foreign Exchange (Forex) arithmetic is the operational foundation of bank treasury dealing rooms and international trade finance branches. Commercial authorized dealer (AD Category I) banks quote continuous buying and selling exchange rates for import-export settlements, remittances, and cross-border currency trades. In IIBF examinations, forex questions require rigorous perspective control: every transaction must be analyzed strictly from the **BANK'S PERSPECTIVE**, applying the universal dealing rule that the bank always acts to protect its commercial margin.

## 2. Core Concepts: Direct vs. Indirect Quotations

```
+----------------------------------------------------------------------------------------------------+
|                                    DIRECT vs INDIRECT QUOTATION SYSTEMS                            |
+----------------------------------------------------------------------------------------------------+
| Dimension             | Direct Quotation System               | Indirect Quotation System          |
+-----------------------+---------------------------------------+------------------------------------+
| Definition            | Number of units of HOME CURRENCY for  | Number of units of FOREIGN CURRENCY|
|                       | ONE unit of foreign currency          | for ONE unit of home currency      |
| Standard Notation     | Variable Home / 1 Fixed Foreign       | Variable Foreign / 1 Fixed Home    |
| Indian Historical Shift| **CURRENT SYSTEM:** Shifted to Direct  | **HISTORICAL SYSTEM:** Prevailed in|
|                       | quotation on **2 August 1993**        | India prior to 2 August 1993       |
| Current Indian Quote  | e.g. 1 USD = ₹83.40 / 83.50           | e.g. ₹100 = 1.197 USD              |
+-----------------------+---------------------------------------+------------------------------------+
```

## 3. The Cardinal Rules of Bank Forex Quotations

### Rule 1: The Dealing Perspective
All exchange rate quotations are quoted from the **AUTHORISED DEALER BANK'S VIEWPOINT**, not the customer's viewpoint.
$$\mathbf{\text{THE GOLDEN RULE OF FOREX: BANK BUYS LOW, BANK SELLS HIGH}}$$
- When a customer wants to **SELL foreign currency** (e.g. an exporter receiving export proceeds), the bank **BUYS** at the **LOWER BID RATE**.
- When a customer wants to **BUY foreign currency** (e.g. an importer paying for foreign goods), the bank **SELLS** at the **HIGHER ASK / OFFER RATE**.

### Rule 2: Bid, Ask & The Bid-Ask Spread
$$\text{Quote: USD/INR} = 83.20 / 83.30$$
- $\text{Bid Rate (Buying Rate)} = \text{₹83.20}$ (Bank buys USD 1 for ₹83.20).
- $\text{Ask Rate (Selling Rate)} = \text{₹83.30}$ (Bank sells USD 1 for ₹83.30).
- $\text{Bid-Ask Spread} = \text{Ask} - \text{Bid} = 83.30 - 83.20 = \text{₹0.10}$ (Bank's gross operating margin).
$$\text{Spread (\%)} = \frac{\text{Ask} - \text{Bid}}{\text{Ask}} \times 100$$

### Rule 3: Forward Margins — Premium vs. Discount in Direct Quotes
In a Direct Quotation (home currency per unit of foreign currency):
1. **Forward Premium (Ascending Margins):** When the forward rate of foreign currency is higher than the spot rate, foreign currency is at a premium. Forward margins appear in **ascending order** (e.g. 20/30).
   $$\mathbf{\text{FORWARD PREMIUM IS ADDED TO SPOT RATE: } [ \text{Spot} + \text{Premium} ]}$$
2. **Forward Discount (Descending Margins):** When the forward rate of foreign currency is lower than the spot rate, foreign currency is at a discount. Forward margins appear in **descending order** (e.g. 35/25).
   $$\mathbf{\text{FORWARD DISCOUNT IS SUBTRACTED FROM SPOT RATE: } [ \text{Spot} - \text{Discount} ]}$$

```
+----------------------------------------------------------------------------------------------------+
|                                    FORWARD MARGIN ADJUSTMENT MATRIX                                |
+----------------------------------------------------------------------------------------------------+
| Margin Pattern        | Economic Meaning                      | Operation on Spot Rate (Direct)    |
+-----------------------+---------------------------------------+------------------------------------+
| Ascending (e.g. 15/25)| Forward Premium                       | **ADD to Spot** (Bid + 15 / Ask + 2|
| Descending (e.g. 30/20)| Forward Discount                      | **SUBTRACT from Spot** (Bid-30 / As|
+-----------------------+---------------------------------------+------------------------------------+
```

### Rule 4: Cross Rates & The Chain Rule
When a direct quotation between two currencies is unavailable, the rate is derived through an intermediary currency (typically the US Dollar) using the **Chain Rule**:
$$\frac{\text{INR}}{\text{EUR}} = \frac{\text{INR}}{\text{USD}} \times \frac{\text{USD}}{\text{EUR}}$$
- To derive the **Bank Buying Rate for EUR/INR:**
  $$\text{Bid (EUR/INR)} = \text{Bid (USD/INR)} \times \text{Bid (EUR/USD)}$$
- To derive the **Bank Selling Rate for EUR/INR:**
  $$\text{Ask (EUR/INR)} = \text{Ask (USD/INR)} \times \text{Ask (EUR/USD)}$$

## 4. Worked Numerical: Exporter & Importer Quotations
**Scenario:** An Indian authorized dealer quotes the following spot and forward rates:
- $\text{Spot USD/INR} = 83.10 / 83.25$
- 3-Month Forward Margin: $0.15 / 0.25$ (Ascending order)
1. An Indian exporter enters a forward contract to sell USD 1,00,000 in 3 months. What exchange rate will the bank apply?
2. An Indian importer enters a forward contract to buy USD 50,000 in 3 months. What exchange rate will the bank apply?

**Solution Step-by-Step:**
- **Step 1: Analyze Margins:**
  Margins are in ascending order ($0.15 / 0.25$), signifying a **Forward Premium**. Under direct quote rules, premium is **ADDED** to both Bid and Ask rates.
  $$\text{3-Month Forward Bid Rate} = 83.10 + 0.15 = \mathbf{\text{₹83.25}}$$
  $$\text{3-Month Forward Ask Rate} = 83.25 + 0.25 = \mathbf{\text{₹83.50}}$$
- **Step 2: Exporter Transaction (Bank Buys Foreign Currency):**
  - Perspective: Exporter wants to sell USD; Bank **BUYS** at the **Forward Bid Rate**.
  $$\text{Rate Applied to Exporter} = \mathbf{\text{₹83.25 per USD}}$$
  $$\text{Rupees Paid to Exporter} = 1,00,000 \times 83.25 = \mathbf{\text{₹83,25,000}}$$
- **Step 3: Importer Transaction (Bank Sells Foreign Currency):**
  - Perspective: Importer wants to buy USD; Bank **SELLS** at the **Forward Ask Rate**.
  $$\text{Rate Applied to Importer} = \mathbf{\text{₹83.50 per USD}}$$
  $$\text{Rupees Collected from Importer} = 50,000 \times 83.50 = \mathbf{\text{₹41,75,000}}$$

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. India shifted from indirect to direct quotations on **2 August 1993**.
> 2. Always analyze from the **BANK'S VIEWPOINT**: Bank buys at the lower Bid rate and sells at the higher Ask rate.
> 3. Ascending forward margins indicate a **PREMIUM (ADD)**; Descending forward margins indicate a **DISCOUNT (SUBTRACT)**.
> 4. In TT Buying Rate vs Bill Buying Rate: Bill buying rates are lower than TT buying rates because the bank factors transit period interest into the exchange rate.

## 5. Practice Questions & Solved Numerical Drills

**Q1.** A bank quotes Spot USD/INR as 83.40 / 83.55. The 2-month forward margin is quoted as 30 / 20. At what rate will the bank sell forward USD to an importer?
- (A) ₹83.70
- (B) ₹83.35
- (C) ₹83.25
- (D) ₹83.85

**Q2.** Effective from which landmark date did India officially abandon indirect quotation and transition to direct quotation for foreign exchange?
- (A) 1 July 1991
- (B) 2 August 1993
- (C) 1 April 1999
- (D) 1 January 2000

**Q3.** Given: USD/INR = 83.00, and GBP/USD = 1.25. What is the cross rate for GBP/INR?
- (A) ₹66.40
- (B) ₹103.75
- (C) ₹98.50
- (D) ₹105.00

#### Solutions & Explanations
* Q1 Correct Answer: (B) ₹83.35. Margins are descending (30/20), indicating a **Forward Discount**. Discount is SUBTRACTED. The bank SELLS to the importer at the Ask rate: $\text{Ask} = 83.55 - 0.20 = \mathbf{\text{₹83.35}}$.
* Q2 Correct Answer: (B) 2 August 1993. India shifted to direct quotation on 2 August 1993.
* Q3 Correct Answer: (B) ₹103.75. Using the chain rule: $\text{GBP/INR} = \text{USD/INR} \times \text{GBP/USD} = 83.00 \times 1.25 = \mathbf{\text{₹103.75}}$.

## 6. Active Recall & Self-Diagnostic Prompts

<details>
<summary>Why does the bank buy at the lower Bid rate and sell at the higher Ask rate?</summary>

Because the Authorised Dealer bank acts as a commercial market maker. The bid-ask spread is the bank's compensation for providing liquidity and assuming foreign exchange volatility and settlement risks.
</details>

<details>
<summary>How do you identify whether forward margins represent a premium or a discount in a direct quote?</summary>

Observe the sequence of numbers in the margin quote: if margins are ascending (e.g. 10/20), it is a Premium (ADD); if margins are descending (e.g. 25/15), it is a Discount (SUBTRACT).
</details>

## 7. Last-Minute Revision Box
- Direct Quote Shift: **2 August 1993** (₹ per foreign currency unit).
- Golden Rule: Bank Buys Low (Bid); Bank Sells High (Ask).
- Ascending Margins = Premium -> ADD to Spot.
- Descending Margins = Discount -> SUBTRACT from Spot.
- Chain Rule: $\frac{A}{B} \times \frac{B}{C} = \frac{A}{C}$.
