# FINANCIAL DERIVATIVES: FORWARDS, FUTURES, SWAPS & OPTIONS

> **Paper:** 3 (Accounting & Financial Management for Bankers)
> **Module:** C (Financial Management)
> **Standard:** Macmillan Master Benchmark • Duplex A4 Monochrome Print Edition

## 1. Why This Matters in Banking Operations
A financial derivative is an instrument whose contractual value is derived from the price, level, or performance of an underlying asset, benchmark interest rate, foreign currency, commodity, or credit index. In commercial banking treasury operations, derivative instruments are primarily deployed to hedge asset-liability duration mismatches, lock in borrowing costs, protect forex exposures, and comply with RBI market risk capital guidelines under Basel III.

## 2. Core Economic Functions & Market Participants
- **Economic Functions:**
  1. *Risk Transfer & Hedging:* Allows entities exposed to unwanted price or interest rate risks to transfer that risk to willing counterparties.
  2. *Price Discovery:* Reflects market expectations of future spot prices through active trading volumes.
  3. *Operational Efficiency:* Enables synthetic asset allocation with lower transaction costs and capital outlays compared to physical cash markets.
- **The Three Market Participants:**
  1. **Hedgers:** Enter derivative contracts to eliminate or reduce existing economic risk (e.g. an importer buying a forward contract to lock in the USD rate).
  2. **Speculators:** Take on calculated market risk without underlying exposure, seeking to profit from price movements.
  3. **Arbitrageurs:** Exploit simultaneous price discrepancies between two related markets or instruments to lock in riskless profit.

## 3. Forwards vs. Futures Contracts

```
+----------------------------------------------------------------------------------------------------+
|                                    FORWARDS vs FUTURES COMPARATIVE MATRIX                          |
+----------------------------------------------------------------------------------------------------+
| Dimension             | Forward Contract                      | Futures Contract                   |
+-----------------------+---------------------------------------+------------------------------------+
| Trading Mechanism     | **Over-the-Counter (OTC)**; negotiated| **Exchange-Traded** (NSE, BSE);    |
|                       | privately between two parties/banks   | standardized on exchange floor     |
| Contract Terms        | Fully customized (amount, date, rate) | Standardized lot size, expiry dates|
| Counterparty Risk     | High counterparty default risk        | Near zero: **Clearing Corporation**|
|                       |                                       | acts as central counterparty (CCP) |
| Settlement Frequency  | Single settlement at terminal maturity| Daily **Mark-to-Market (MTM)**     |
|                       | date                                  | with daily margin debits/credits   |
| Liquidity & Secondary | Illiquid; held until maturity         | Highly liquid; easy to square off  |
| Market                |                                       | position prior to expiry           |
| Margin Requirements   | None (credit relationship based)      | Compulsory Initial & Maintenance   |
|                       |                                       | Margins deposited with clearinghous|
+-----------------------+---------------------------------------+------------------------------------+
```

## 4. Forward Rate Agreements (FRAs) & Interest Rate Swaps (IRS)

### Forward Rate Agreements (FRAs)
An OTC forward contract where two parties agree on an interest rate to be paid on a notional principal over a specified future period (e.g. a "3x6 FRA" covers a 3-month deposit starting 3 months from today and maturing 6 months from today):
- At settlement, only the net interest differential is exchanged in cash; no principal changes hands.

### Interest Rate Swaps (IRS)
A contractual agreement between two counterparties to exchange interest payment streams based on an agreed notional principal amount over a designated tenor:
- **Plain Vanilla Interest Rate Swap:** One counterparty pays a **Fixed Rate** and receives a **Floating Rate** (e.g. MIBOR or SOFR), while the other counterparty pays Floating and receives Fixed.
- *Banking Application:* A bank holding fixed-rate retail home loan assets funded by floating-rate deposits enters a swap paying fixed and receiving floating to eliminate interest rate margin compression.

## 5. Options: Calls, Puts & Payoff Profiles
An option is a contract conferring the **right, but NOT the obligation**, to buy or sell an underlying asset at a specified price (**Strike Price**) on or before a specified date (**Expiry**):
- **Call Option:** Gives the buyer the right to **BUY** the underlying asset.
- **Put Option:** Gives the buyer the right to **SELL** the underlying asset.
- **Option Premium:** The upfront, non-refundable cash price paid by the option buyer to the option seller (writer) for granting the option right.
- **Exercise Styles:**
  - *European Option:* Can be exercised **strictly on the expiration date**.
  - *American Option:* Can be exercised on **any business day up to and including expiration**.

### Moneyness of Options

| Moneyness Status | Call Option Condition | Put Option Condition |
| :--- | :--- | :--- |
| **In-the-Money (ITM)** | Spot Price ($S$) > Strike Price ($X$) | Spot Price ($S$) < Strike Price ($X$) |
| **At-the-Money (ATM)** | Spot Price ($S$) = Strike Price ($X$) | Spot Price ($S$) = Strike Price ($X$) |
| **Out-of-the-Money (OTM)** | Spot Price ($S$) < Strike Price ($X$) | Spot Price ($S$) > Strike Price ($X$) |

### Master Option Payoff Matrix

| Option Position | Downside Risk | Upside Return Potential | Payoff Formula at Expiry |
| :--- | :--- | :--- | :--- |
| **Buyer of Call (Long Call)** | Limited to **Premium Paid** | **Unlimited** as spot price rises | $\max(0, S_T - X) - \text{Premium}$ |
| **Seller of Call (Short Call)**| **Unlimited** as spot price rises | Limited to **Premium Received** | $\text{Premium} - \max(0, S_T - X)$ |
| **Buyer of Put (Long Put)** | Limited to **Premium Paid** | Substantial: increases as spot falls | $\max(0, X - S_T) - \text{Premium}$ |
| **Seller of Put (Short Put)** | Substantial: falls toward zero | Limited to **Premium Received** | $\text{Premium} - \max(0, X - S_T)$ |

## 6. Worked Numerical: Long Call Option Payoff
**Scenario:** A bank customer buys a European 3-month Call Option on 1,000 equity shares at a Strike Price ($X$) of ₹500, paying an option premium of ₹30 per share.
1. What is the net payoff if the share price at expiration ($S_T$) is ₹600?
2. What is the net payoff if the share price at expiration ($S_T$) is ₹450?

**Solution Step-by-Step:**
- **Case 1: Spot Price $S_T = ₹600$ (In-the-Money):**
  - Gross Intrinsic Value $= \max(0, S_T - X) = 600 - 500 = \text{₹100 per share}$.
  - Net Profit per share $= \text{Intrinsic Value} - \text{Premium Paid} = 100 - 30 = \mathbf{\text{₹70 per share}}$.
  - Total Net Profit $= 1,000 \times 70 = \mathbf{\text{₹70,000}}$.
- **Case 2: Spot Price $S_T = ₹450$ (Out-of-the-Money):**
  - Since market price (₹450) is below strike price (₹500), the buyer allows the option to expire unexercised.
  - Gross Intrinsic Value $= \text{₹0}$.
  - Net Loss per share $= \text{Premium Paid} = \mathbf{\text{₹30 per share}}$.
  - Total Net Loss $= 1,000 \times 30 = \mathbf{\text{₹30,000}}$ *(Maximum loss is capped at premium paid)*.

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. An option **BUYER** has limited downside risk (only the premium paid) and unlimited/substantial upside.
> 2. An option **WRITER (SELLER)** receives premium income upfront, but faces **UNLIMITED downside risk** on call options.
> 3. Futures contracts are **settled daily via Mark-to-Market (MTM)**; Forward contracts are settled only at final maturity.
> 4. In an Interest Rate Swap, principal amounts are **NOT exchanged**; payments are calculated on a **notional principal** base.

## 7. Practice Questions & Solved Numerical Drills

**Q1.** What is the maximum possible financial loss for the buyer of a Call Option?
- (A) Strike price minus spot price
- (B) The premium paid to the option writer
- (C) Unlimited depending on market fall
- (D) The full face value of the underlying asset

**Q2.** Which derivative instrument is characterized by daily mark-to-market settlement, exchange trading, and elimination of counterparty default risk via a central clearing corporation?
- (A) Forward Contract
- (B) Futures Contract
- (C) Forward Rate Agreement (FRA)
- (D) Currency Swap

**Q3.** An investor buys a Put Option with a strike price of ₹1,200 at a premium of ₹50. At expiration, the underlying asset trades at ₹1,100. What is the investor's net profit per share?
- (A) ₹150
- (B) ₹100
- (C) ₹50
- (D) Zero (Breakeven)

#### Solutions & Explanations
* Q1 Correct Answer: (B) The premium paid to the option writer. An option buyer holds the right, not the obligation; if prices move adversely, the buyer simply walks away, forfeiting only the premium paid.
* Q2 Correct Answer: (B) Futures Contract. Standardized, exchange-traded, and settled daily through the clearing corporation.
* Q3 Correct Answer: (C) ₹50. Gross Intrinsic Value of Put $= X - S_T = 1,200 - 1,100 = \text{₹100}$. Net Profit $= 100 - 50 = \mathbf{\text{₹50 per share}}$.

## 8. Active Recall & Self-Diagnostic Prompts

<details>
<summary>Why are clearinghouses able to virtually eliminate default risk in futures contracts?</summary>

Because the clearinghouse acts as the legal counterparty to every trade (buyer to every seller, seller to every buyer), collects initial and maintenance margins, and enforces compulsory daily mark-to-market cash settlement of all open positions.
</details>

<details>
<summary>What is a Plain Vanilla Interest Rate Swap?</summary>

An agreement where Counterparty A pays a fixed interest rate on a notional principal to Counterparty B, while Counterparty B pays a floating interest rate (e.g. MIBOR) to Counterparty A, with only the net interest differential exchanged periodically in cash.
</details>

## 9. Last-Minute Revision Box
- Forwards: OTC, customized, maturity settlement, counterparty default risk.
- Futures: Exchange-traded, standardized, daily MTM, clearing corporation guarantee.
- Option Buyer: Rights, limited risk (premium paid), unlimited/large upside.
- Option Writer: Obligations, limited gain (premium received), unlimited/large risk.
- Call Option: Right to BUY; ITM when $S > X$.
- Put Option: Right to SELL; ITM when $S < X$.
- Swap / FRA: Cash settlement on **notional principal**; no principal exchanged.
