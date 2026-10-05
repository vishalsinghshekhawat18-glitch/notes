# FINANCIAL DERIVATIVES, FOREX, FEMA & NRI ACCOUNTS

Financial derivatives derive their value from underlying assets (stocks, bonds, currencies, interest rates), serving as hedging instruments against price and interest rate volatility. In foreign exchange, cross-border flows are regulated under the Foreign Exchange Management Act (FEMA), 1999.

## § 21.1 Unit 29 Comprehensive Architectural Analysis

> **Key Concept — IIBF Core Foundation: Derivatives Contract Architecture**
> A derivative is a financial contract whose value is derived from the performance of an underlying asset (Stock, Index, Interest Rate, Commodity, Currency), utilized for hedging risk, speculation, and arbitrage.

## 1. Forward Contracts vs. Futures Contracts

| Parameter | Forward Contract | Futures Contract |
| --- | --- | --- |
| Trading Venue | **Over-the-Counter (OTC)** (Private bilateral agreement) | **Standardized Exchange-Traded** (BSE, NSE) |
| Contract Terms | Customized to specific buyer/seller requirements (custom size & expiry) | **Standardized lot size, tick size, and expiry dates** |
| Counterparty Risk | **High Counterparty Default Risk** | **Zero Counterparty Risk** (Guaranteed by Clearing Corporation/NSCCL) |
| Settlement & Margining | Settled at maturity date | **Marked-to-Market (MTM) daily** with Initial Margin & Maintenance Margin |
| Liquidity & Reversal | Illiquid; difficult to cancel prior to maturity | **Highly Liquid**; position can be squared off anytime during trading hours |

## 2. Options Architecture (Call vs. Put & Moneyness)

| Option Type | Buyer's Right / Position | Seller's (Writer) Obligation | Moneyness Condition (where \(S = \text{Spot}\), \(K = \text{Strike}\)) |
| --- | --- | --- | --- |
| Call Option (Right to BUY) | Buyer has the right (but no obligation) to **BUY** underlying asset at strike price \(K\). Max Loss = Premium Paid; Max Profit = Unlimited. | Seller receives premium; obligated to SELL asset if buyer exercises. | **ITM (In-the-Money):** \(S > K\)<br>**ATM (At-the-Money):** \(S = K\)<br>**OTM (Out-of-the-Money):** \(S < K\) |
| Put Option (Right to SELL) | Buyer has the right (but no obligation) to **SELL** underlying asset at strike price \(K\). Max Loss = Premium Paid; Max Profit = Substantial (up to strike price). | Seller receives premium; obligated to BUY asset if buyer exercises. | **ITM (In-the-Money):** \(S < K\)<br>**ATM (At-the-Money):** \(S = K\)<br>**OTM (Out-of-the-Money):** \(S > K\) |

## 3. Swaps & Credit Default Swaps (CDS)

• **Interest Rate Swap (IRS - Plain Vanilla):** Agreement between two parties to exchange interest rate cash flows based on a specified **notional principal amount**. Party A pays a **Fixed Rate** and receives a **Floating Rate (e.g. MIBOR / SOFR)**; Party B does the opposite.
• **Credit Default Swap (CDS):** Financial credit derivative where the **Protection Buyer** pays periodic fees (premium) to the **Protection Seller** in exchange for a payoff if a reference entity suffers a credit event (default, bankruptcy, debt restructuring).

> **Exam Anchor & Trap:**
> Top IIBF Traps for Unit 29:
1. **Option Buyer Risk:** Maximum loss of an option buyer is **strictly limited to the premium paid**; potential profit on a Call option is **theoretically unlimited**.
2. **Option Seller Risk:** Option seller's maximum profit is **strictly limited to the premium received**; potential loss is **unlimited**.
3. **Futures Settlement:** Futures are **Marked-to-Market (MTM) daily** on the exchange.

---

---

## § 21.2 Unit 33 Comprehensive Architectural Analysis

> **Key Concept — IIBF Core Foundation: Foreign Exchange Operating Architecture**
> The Indian foreign exchange market operates under the Foreign Exchange Management Act (FEMA), 1999 and RBI regulations through Authorized Dealers, governed by FEDAI market conventions.

## 1. Settlement Value Dates in Forex Market

| Transaction Type | Value Date / Settlement Day | Operational Definition |
| --- | --- | --- |
| Cash / Ready | **Same Day (T + 0)** | Settlement of funds occurs on the very day of the deal. |
| TOM (Tomorrow) | **Next Working Day (T + 1)** | Settlement occurs on the working day following the deal date. |
| Spot Rate | **Second Working Day (T + 2)** | **Standard international benchmark forex rate**. Settlement takes place two business days after transaction date. |
| Forward Rate | **Beyond Spot Date (T + 2 + n days)** | Settlement takes place on an agreed future date beyond the spot date at a predetermined forward rate. |

## 2. Interbank Account Types: Nostro, Vostro, Loro

| Account Name | Latin / Literal Meaning | Operational Concept & Example |
| --- | --- | --- |
| Nostro Account | **'Our account with you'** | An account maintained by an **Indian bank with a foreign bank abroad in foreign currency** (e.g. SBI maintaining a USD account with Citibank, New York). |
| Vostro Account | **'Your account with us'** | An account maintained by a **foreign bank in India with an Indian bank in Indian Rupees** (e.g. HSBC London maintaining an INR account with SBI, Mumbai). |
| Loro Account | **'Their account'** | Referring to an account of a third-party bank (e.g. Bank of Baroda referring to SBI's account with Citibank New York). |

## 3. Non-Resident Indian (NRI) Deposit Accounts Comparison

| Parameter | Non-Resident External (NRE) A/c | Non-Resident Ordinary (NRO) A/c | Foreign Currency Non-Resident (Bank) A/c - FCNR(B) |
| --- | --- | --- | --- |
| Currency Maintained | **Indian Rupees (INR)** | **Indian Rupees (INR)** | **Designated Foreign Currencies** (USD, EUR, GBP, JPY, CAD, AUD) |
| Type of Account | Savings, Current, Recurring, Fixed | Savings, Current, Recurring, Fixed | **Term Deposit (Fixed) ONLY** (1 to 5 years) |
| Repatriability | **100% Freely Repatriable** (Principal and interest) | Restricted (Current income repatriable; principal up to **USD 1 Million per FY**) with CA cert. | **100% Freely Repatriable** (Principal and interest) |
| Exchange Rate Risk | **Borne by Depositor** (Conversion into INR) | **Borne by Depositor** | **Zero Exchange Risk** (Maintained in foreign currency; risk borne by bank) |
| Taxability in India | **100% Tax Exempt** (Zero income/wealth tax on interest) | **Taxable in India** (TDS applicable at 30% + surcharge) | **100% Tax Exempt** in India |

## 4. Liberalised Remittance Scheme (LRS)

• **Permissible Limit:** Resident individuals (including minors) can freely remit up to **USD 250,000 per financial year (April–March)** for any permissible current or capital account transaction (education, medical treatment, travel, gifts, investment in overseas shares/property).
• **Exclusions:** LRS is **NOT available to Corporates, Partnerships, HUF, Trusts, or Charitable bodies** (Individuals only).

> **Exam Anchor & Trap:**
> Top IIBF Traps for Unit 33:
1. **Spot Date:** Settles on **T + 2 working days**.
2. **NRE vs NRO Tax:** NRE interest is **Tax-Free**; NRO interest is **Taxable**.
3. **LRS Annual Cap:** **USD 250,000 per Financial Year** (strictly for resident individuals).
4. **FCNR(B) Account Type:** Available **ONLY as Term / Fixed Deposit** (1 to 5 years).

---

---

## § 21.3 Active Recall Diagnostic Vault

<details>
<summary>Distinguish between Non-Resident External (NRE), Non-Resident Ordinary (NRO), and FCNR(B) bank accounts.</summary>
NRE: Rupee account; foreign earnings; principal and interest fully and freely repatriable; exempt from Indian income tax.
NRO: Rupee account; legitimate domestic Indian earnings (rent, dividends); interest taxable; repatriation capped at USD 1 Million per FY.
FCNR(B): Foreign currency term deposit (USD, GBP, EUR, etc.); fixed tenure (1 to 5 yrs); exchange rate risk borne by the issuing bank; interest tax-exempt in India.
</details>

<details>
<summary>What are the core differences between a Forward Contract and a Futures Contract?</summary>
Forward Contract: Private OTC bilateral agreement; customized contract terms; counterparty default risk; settled at maturity.
Futures Contract: Exchange-traded standardized contract (BSE/NSE); guaranteed by clearing corporation; daily Mark-to-Market (MTM) margin settlement; highly liquid.
</details>

