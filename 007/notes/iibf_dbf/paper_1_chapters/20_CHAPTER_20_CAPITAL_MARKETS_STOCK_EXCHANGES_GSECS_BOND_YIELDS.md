# CAPITAL MARKETS, STOCK EXCHANGES, G-SECS & BOND YIELDS

The Capital Market mobilizes long-term funds exceeding one year, divided into the primary issuance market and the secondary trading market governed by SEBI. In debt markets, Government Securities (G-Secs) anchor the sovereign yield curve.

## § 20.1 Unit 27 Comprehensive Architectural Analysis

> **Key Concept — IIBF Core Foundation: Capital Market Infrastructure**
> Capital markets enable corporations and the government to raise long-term equity and debt capital from investors, supported by paperless electronic dematerialized settlement via Depositories under SEBI oversight.

## 1. Stock Exchanges & Depositories in India

| Entity Name | Establishment Year & Landmark | Core Role & Trading Platform |
| --- | --- | --- |
| BSE (Bombay Stock Exchange) | **1875** (Oldest stock exchange in Asia; Native Share & Stock Brokers' Association) | Operates Sensex (30 large-cap stocks); demutualized in 2005; HQ: Dalal Street, Mumbai. |
| NSE (National Stock Exchange) | **1992** (Pherwani Committee; commenced operations in 1994) | Pioneered nation-wide screen-based trading; operates Nifty 50; largest derivatives exchange. |
| NSDL (National Securities Depository Limited) | **August 1996** (Promoted by NSE, UTI, IDBI) | 1st Depository in India; holds securities in electronic (demat) format. |
| CDSL (Central Depository Services Limited) | **February 1999** (Promoted by BSE, SBI, HDFC Bank, etc.) | 2nd Depository in India; largest depository by total demat account count. |

## 2. Primary Market Capital Issuance Mechanisms

| Issue Type | Legal Definition | Target Investor Base |
| --- | --- | --- |
| Initial Public Offering (IPO) | Unlisted company offering shares to public for the first time on stock exchange. | Retail Individual Investors (RII), Non-Institutional Investors (NII), Qualified Institutional Buyers (QIB). |
| Follow-on Public Offering (FPO) | Already listed company issuing additional fresh shares to the public. | General public & institutions. |
| Rights Issue | Company issues fresh shares to **existing shareholders** in proportion to their existing holding. | Existing shareholders as on record date at discounted price. |
| Bonus Issue | Capitalization of reserves into free additional shares to existing shareholders. | Existing shareholders (Free of cost; share price adjusts downwards). |
| Qualified Institutional Placement (QIP) | Fast-track private placement of equity/convertibles to **Qualified Institutional Buyers (QIBs)**. | Exclusive to Mutual Funds, Insurance companies, FPIs; no retail participation. |
| Offer for Sale (OFS) | Promoters/Large shareholders dilute their existing stake directly via exchange bidding. | Public & institutional buyers. |

## 3. ASBA Mechanism & T+1 Settlement Cycle

• **Applications Supported by Blocked Amount (ASBA):** Mandatory application mechanism for IPOs/Rights. The application money **remains in the investor's own bank account (blocked/lien marked)** and is debited ONLY upon successful share allotment, earning normal savings bank interest until debit.
• **T+1 Rolling Settlement:** In January 2023, India became the **first major economy to transition 100% of equity trades to T+1 settlement** (trade settles within 24 hours of execution). Beta launch of **T+0 same-day settlement** introduced in 2024.

> **Exam Anchor & Trap:**
> Top IIBF Traps for Unit 27:
1. **ASBA Fund Location:** Application money is **NOT transferred to company** during bidding — it remains blocked in the investor's own savings/current account until allotment.
2. **Asia's Oldest Stock Exchange:** **BSE** (Founded in 1875).
3. **1st Depository in India:** **NSDL** (1996).

---

---

## § 20.2 Unit 28 Comprehensive Architectural Analysis

> **Key Concept — IIBF Core Foundation: Bond Valuation & Price-Yield Inverse Relationship**
> Bond prices and market yields share a strictly inverse relationship (\(\text{Yield} \uparrow \implies \text{Bond Price} \downarrow\)). Bond duration quantifies interest rate risk (the sensitivity of bond price to yield fluctuations).

## 1. Sovereign Debt Instruments: G-Secs, SDLs & SGBs

| Instrument | Issuing Authority & Backing | Key Coupon / Tenor Features |
| --- | --- | --- |
| Central Government Securities (G-Secs / Dated Securities) | Issued by RBI on behalf of Government of India | Fixed coupon (semi-annual payout); Tenors up to 40-50 years; 100% sovereign risk-free; SLR eligible. |
| State Development Loans (SDLs) | Issued by RBI on behalf of 28 State Governments | Semi-annual interest; yields typically 30–60 bps higher than Central G-Secs; SLR eligible. |
| Sovereign Gold Bonds (SGBs) | Issued by RBI on behalf of Central Government | Denominated in grams of gold (min 1g; max 4kg individual); Tenor **8 years (exit option after 5th yr)**; **Fixed interest rate of 2.50% p.a.** payable semi-annually; **Capital gains tax exempt** on redemption at maturity. |
| Inflation Indexed Bonds (IIBs) | Government of India / RBI | Principal and coupon payments indexed to CPI inflation to protect real returns. |

## 2. Bond Pricing: Clean Price vs. Dirty Price

$\text{Accrued Interest} = \text{Coupon Amount} \times \left( \frac{\text{Days since last coupon payment}}{\text{Days in current coupon period}} \right)$

*Explanation:* Accrued interest is the interest earned since the last coupon payment date.

## 3. Yield to Maturity (YTM) & Duration Formulas

| Metric | Mathematical Concept / Formula | Economic & Trading Significance |
| --- | --- | --- |
| Yield to Maturity (YTM) | $$\text{Internal Rate of Return (IRR) of all bond cash flows}$$ | Expected total rate of return earned by an investor who holds the bond until maturity and reinvests all coupons at YTM. |
| Macaulay Duration (\(D_{\text{mac}}\)) | $$D_{\text{mac}} = \frac{\sum \frac{t \cdot C_t}{(1+y)^t}}{\text{Bond Price}}$$ | **Weighted average maturity of cash flows** (measured in years). For a zero-coupon bond, Macaulay Duration **equals its maturity**. |
| Modified Duration (\(D_{\text{mod}}\)) | $$D_{\text{mod}} = \frac{D_{\text{mac}}}{1 + \frac{y}{m}}$$ | **Measures percentage change in bond price for a 1% change in yield**: $$\frac{\Delta P}{P} \approx - D_{\text{mod}} \times \Delta y$$ |

## 4. The 4 Shapes of the Yield Curve

• **1. Normal Yield Curve (Upward Sloping):** Long-term bond yields are higher than short-term yields (reflects economic expansion and normal term premium).
• **2. Inverted Yield Curve (Downward Sloping):** Short-term yields are higher than long-term yields (**Classic predictor of impending economic recession**).
• **3. Flat Yield Curve:** Short-term and long-term yields are identical (transition phase between expansion and contraction).
• **4. Humped Yield Curve:** Medium-term yields are higher than both short-term and long-term yields.

> **Exam Anchor & Trap:**
> Top IIBF Traps for Unit 28:
1. **Zero-Coupon Bond Duration:** Macaulay Duration of a Zero-Coupon Bond is **exactly equal to its maturity period**.
2. **Price vs Yield:** When interest rates rise, bond prices **fall**; when interest rates fall, bond prices **rise**.
3. **SGB Interest Rate & Tenor:** **2.50% p.a.** paid semi-annually; Tenor is **8 years with exit option after 5 years**.

---

---

## § 20.3 Active Recall Diagnostic Vault

<details>
<summary>Explain the inverse relationship between Bond Prices and Market Interest Rates (Yields).</summary>
Bond price equals the discounted present value of its future fixed coupon cash flows and face value redemption. When market interest rates rise, the discount rate increases, driving bond market prices down. When market rates fall, bond prices rise.
</details>

<details>
<summary>Define Modified Duration and its significance in fixed income portfolio management.</summary>
Modified Duration measures the percentage change in a bond’s price for a 100 bps (1%) change in yield: $$\text{Modified Duration} = \frac{\text{Macaulay Duration}}{1 + y/m}$$. Higher duration denotes greater interest rate price volatility risk.
</details>

