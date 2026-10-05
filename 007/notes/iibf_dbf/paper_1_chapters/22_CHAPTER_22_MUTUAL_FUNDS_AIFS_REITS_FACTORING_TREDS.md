# MUTUAL FUNDS, AIFs, REITs, FACTORING & TReDS

Pooled investment vehicles and non-bank receivable discounting mechanisms channel commercial savings into specialized economic assets. Mutual Funds and Alternative Investment Funds (AIFs) operate under SEBI, while Trade Receivables Discounting System (TReDS) automates MSME factoring under RBI.

## § 22.1 Unit 30 Comprehensive Architectural Analysis

> **Key Concept — IIBF Core Foundation: Collective Investment Vehicles**
> Mutual funds pool savings from thousands of retail investors to invest in a diversified portfolio of securities managed by professional Asset Management Companies (AMCs) under the SEBI (Mutual Funds) Regulations, 1996.

## 1. Mutual Fund Legal & Operational Trust Structure

| Tier Entity | Legal Form & Appointment | Core Fiduciary / Operational Role |
| --- | --- | --- |
| 1. Sponsor | Promoter of the Mutual Fund (Bank, FI, Corporate) | Contributes initial capital (min ₹50 Cr net worth); establishes the Trust under Indian Trusts Act, 1882. |
| 2. Board of Trustees / Trustee Company | Trustees (At least 2/3rd must be independent) | Holds fund assets in trust for unit holders; enforces fiduciary duty over AMC; oversees SEBI compliance. |
| 3. Asset Management Company (AMC) | Company registered under Companies Act, approved by SEBI | Investment manager; deploys pool into stocks/bonds; CIO, Fund Managers, Research Analysts. |
| 4. Custodian | Independent entity registered with SEBI | Safekeeping of physical securities and demat holding; independent from AMC. |

## 2. Net Asset Value (NAV) & SEBI Operational Framework

$\text{NAV} = \frac{(\text{Market Value of Investments} + \text{Receivables} + \text{Other Assets}) - (\text{Accrued Expenses} + \text{Liabilities})}{\text{Total Number of Outstanding Units}}$

*Explanation:* Computed daily at the close of trading hours by AMCs and published on AMFI portal by 11:00 PM.

### 3. SEBI Mutual Fund Scheme Categorisation Matrix

| Scheme Category | Primary Sub-Types | Portfolio Mandate & Asset Allocation |
| :--- | :--- | :--- |
| **Equity Schemes** | Large Cap / Mid Cap / Small Cap / Multi Cap / Flexi Cap | • **Large Cap:** Min **80%** in top 100 companies by market cap.<br>• **Mid Cap:** Min **65%** in 101st–250th companies.<br>• **Small Cap:** Min **65%** in 251st company downwards.<br>• **Flexi Cap:** Min 65% in equity across any market cap dynamically. |
| **Debt Schemes** | Overnight / Liquid / Ultra-Short / Short Duration | • **Overnight:** Securities with maturity of **1 day**.<br>• **Liquid Fund:** Securities with maturity up to **91 days only** (no mark-to-market below 30 days).<br>• **Ultra-Short Duration:** Macaulay duration between **3 to 6 months**. |
| **Hybrid Schemes** | Conservative / Balanced / Aggressive Hybrid | • **Aggressive Hybrid:** **65% to 80%** in equity; 20% to 35% in debt.<br>• **Conservative Hybrid:** 10% to 25% in equity; **75% to 90%** in debt. |

### 4. Total Expense Ratio (TER) & The 6-Level Riskometer

• **Total Expense Ratio (TER):** The annual fee charged by the AMC to manage the fund (management fee, custodial fee, audit, marketing) expressed as a percentage of daily net assets. SEBI prescribes statutory slabs:
  - First ₹500 Crore of AUM: Maximum **2.25%** for equity schemes (**2.00%** for debt schemes).
  - Next ₹250 Crore: Max **2.00%** (equity) / **1.75%** (debt).
  - Slabs scale down to **1.05%** for AUM > ₹50,000 Crore.
  - *Direct Plans:* TER must be lower by the amount of distributor commissions.
• **SEBI 6-Tier Riskometer:** Every scheme portfolio risk must be evaluated monthly and depicted on a 6-tier pictorial Riskometer:
  $\text{Low} \longrightarrow \text{Low to Moderate} \longrightarrow \text{Moderate} \longrightarrow \text{Moderately High} \longrightarrow \text{High} \longrightarrow \text{Very High}$

## 3. Alternate Investment Funds (AIF) Categories (SEBI AIF Regulations 2012)

| AIF Category | Fund Types Included | Investment Focus & Regulatory Incentives |
| --- | --- | --- |
| Category I AIF | Venture Capital Funds (VCF), Angel Funds, Social Impact Funds, Infrastructure Funds, SME Funds. | Invests in start-ups, early-stage ventures, and social infrastructure. **Granted tax pass-through status and government incentives**. |
| Category II AIF | Private Equity (PE) Funds, Debt Funds, Real Estate Funds, Funds for Distressed Assets. | Invests primarily in unlisted equity and debt instruments; **no leverage permitted** except for day-to-day operational requirements. Granted tax pass-through. |
| Category III AIF | Hedge Funds, PIPE Funds, Complex Trading Strategy Funds. | Employs diverse or complex trading strategies; **can undertake leverage and short-selling in listed/unlisted derivatives**. Taxed at fund level (MMR). |

## 4. REITs and InvITs

• **Real Estate Investment Trusts (REITs):** Investment vehicles that own, operate, or finance income-generating commercial real estate (office parks, malls). Must distribute **at least 90% of Net Distributable Cash Flows (NDCF) to unitholders semi-annually**.
• **Infrastructure Investment Trusts (InvITs):** Pools money to invest in long-term operational infrastructure assets (toll roads, power transmission grids, telecom towers, gas pipelines). 90% NDCF distribution mandate.

> **Exam Anchor & Trap:**
> Top IIBF Traps for Unit 30:
1. **AIF Minimum Ticket Size:** Minimum investment in Category I, II, and III AIFs is **₹1 Crore** (₹25 Lakh for Angel Fund investors).
2. **REIT / InvIT Payout Mandate:** Must distribute **at least 90% of Net Distributable Cash Flows** to investors.
3. **Independent Trustees:** At least **two-thirds (66.6%)** of the directors of the Trustee Company must be independent.

---

---

## § 22.2 Unit 32 Comprehensive Architectural Analysis

> **Key Concept — IIBF Core Foundation: Receivables Management**
> Factoring and Forfaiting are specialized financial services where a business sells its accounts receivables (invoices) to a specialized financial intermediary (Factor/Forfaiter) to unlock immediate working capital liquidity.

## 1. Factoring vs. Forfaiting Master Comparison Matrix

| Parameter | Factoring | Forfaiting |
| --- | --- | --- |
| Scope of Trade | Usually **Domestic Trade** (also International Factoring) | Strictly **International Export Trade** |
| Receivables Nature | **Short-term receivables** (Maturity up to 90–180 days) | **Medium to Long-term capital goods exports** (1 year up to 5–7 years) |
| Credit Recourse | Can be **With Recourse** (Client bears bad debt) or **Without Recourse** (Factor bears credit loss) | **Strictly WITHOUT RECOURSE** (Forfaiter bears 100% credit risk; exporter is completely protected) |
| Instrument Used | Ordinary commercial invoices & book debts | Negotiable debt instruments (**Bills of Exchange, Promissory Notes avalised/guaranteed by importer's bank**) |
| Financing Percentage | Advance payment typically **75% to 85%** of invoice value; balance paid on realization minus fees | **100% of invoice value** discounted upfront (minus forfaiting discount) |
| Sales Ledger Administration | Factor provides full sales ledger administration, collection, and advisory services | Pure financing transaction; no sales ledger management provided |

## 2. Trade Receivables Discounting System (TReDS)

Set up under RBI guidelines pursuant to the Payment and Settlement Systems Act, 2007:

• **Three Operational Participants:** (1) **MSME Sellers**, (2) **Corporate / PSU / Government Department Buyers**, (3) **Financiers (Banks & NBFC Factors)**.
• **Mandatory Onboarding Mandate:** All Central Public Sector Enterprises (CPSEs) and companies with an annual turnover of **₹250 Crore or more** (and ₹500 Crore in earlier guidelines) must register on TReDS.
• **Bidding & Non-Recourse Discounting:** Financiers bid transparently on uploaded invoices/factoring units. Once accepted, payment is credited to the MSME seller within **T+1 days on a strictly without-recourse basis**.

> **Exam Anchor & Trap:**
> Top IIBF Traps for Unit 32:
1. **Forfaiting Recourse:** Forfaiting is **ALWAYS Without Recourse** to the exporter.
2. **TReDS Mandatory Registration Threshold:** Corporates with turnover of **₹250 Crore and above** + all CPSEs.
3. **Factoring Advance:** Advance payment is typically **80–85%**, NOT 100% (the remaining 15–20% retention money is paid after final collection).

---

---

## § 22.3 Unit 40 Comprehensive Architectural Analysis

> **Key Concept — IIBF Core Foundation: Private Capital & Start-up Financing**
> Venture Capital (VC) provides equity financing and managerial mentoring to innovative high-risk start-ups. In India, VC funds operate under the regulatory umbrella of Alternative Investment Funds (AIFs) governed by SEBI.

### 1. The Five Sequential Stages of Venture Capital Financing

```
  Idea / Prototype ──► Early Product ──► Commercial Traction ──► Scaling & M&A ──► Pre-IPO Capital
    [Seed Stage]       [Start-up]         [Second Stage]        [Expansion]       [Mezzanine / Bridge]
```

1. **Seed Capital / Early Stage:** Funding for proof-of-concept, initial R&D, and patent filing. Highest risk, provided by Angel investors and incubators.
2. **Start-up Stage:** Financing for prototype manufacturing, testing, and assembling the core management team.
3. **Second Stage (Series A / B):** Capital for working capital, setting up full-scale production, and market entry before breaking even.
4. **Third Stage / Expansion (Series C / D):** Scaling sales channels, geographical expansion, product diversification, and major market penetration.
5. **Bridge / Mezzanine Financing:** Short-to-medium term debt-equity hybrid financing deployed 6 to 12 months prior to an Initial Public Offering (IPO) to facilitate a smooth public listing.

### 2. SEBI (Alternative Investment Funds) Regulations, 2012

*AIFs pool capital from sophisticated domestic and foreign investors to invest in accordance with defined investment policies:*

| AIF Category | Eligible Fund Sub-Types | Regulatory Constraints & Tax Status |
| :--- | :--- | :--- |
| **Category I AIF** | • Venture Capital Funds (VCF)<br>• Angel Funds<br>• SME Funds<br>• Social Impact Funds<br>• Infrastructure Funds | • Invests in early-stage, start-ups, and socially beneficial projects.<br>• **Tax pass-through status** under Section 115UB of Income Tax Act.<br>• Minimum corpus: ₹20 Cr (₹5 Cr for Angel Funds). |
| **Category II AIF** | • Private Equity (PE) Funds<br>• Debt Funds<br>• Real Estate Funds<br>• Funds for Distressed Assets | • Invests in unlisted equity or debt.<br>• **Cannot undertake leverage** except to meet day-to-day operational needs (max 30 days, 4 times/yr, 10% of corpus).<br>• Tax pass-through status. |
| **Category III AIF** | • Hedge Funds<br>• Long-Short Funds<br>• Complex Derivative Strategy Funds | • Employs diverse or complex trading strategies.<br>• **Permitted to deploy leverage and short positions** in listed/unlisted derivatives.<br>• Taxed at maximum marginal rate (MMR) at the fund level. |

• **Minimum Ticket Size:** Minimum investment per investor is **₹1 Crore** (reduced to **₹25 Lakh** for Angel Funds and for accredited employees/directors of the AMC).
• **Investor Ceiling:** Maximum number of investors per scheme is **1,000** (capped at **200** for Angel Funds).

### 3. Primary Exit Routes for Venture Capitalists

1. **Initial Public Offering (IPO):** Highest returns; shares offloaded via Offer for Sale (OFS) on stock exchanges.
2. **Trade Sale:** Selling the entire company/stake to a large industrial or multinational competitor.
3. **Secondary Sale:** Offloading the holding to a larger Private Equity fund or late-stage venture investor.
4. **Promoter Buyback:** Promoters repurchase the VC's equity stake at an agreed valuation formula.

> **Top IIBF Traps for Unit 40:**
> 1. **AIF Leverage Limits:** Leverage is **strictly prohibited in Category I and Category II AIFs**; it is permitted **only in Category III AIFs**.
> 2. **Minimum Investment:** General AIF minimum ticket size is **₹1 Crore**; Angel fund minimum ticket is **₹25 Lakh**.

---

---

## § 22.4 Active Recall Diagnostic Vault

<details>
<summary>How does Factoring differ from Forfaiting in trade receivable finance?</summary>
Factoring: Short-term trade debt finance (typically 90–180 days); handles domestic receivables; usually with recourse or non-recourse; involves ledger administration.
Forfaiting: Medium- to long-term export finance; 100% non-recourse financing of international trade receivables evidenced by negotiable bills of exchange or promissory notes.
</details>

<details>
<summary>What is TReDS and who are its three mandatory institutional participants?</summary>
Trade Receivables Discounting System (TReDS) is an RBI-authorized electronic platform for auctioning trade bills of MSMEs against corporate and PSU buyers. Participants: 1. MSME Sellers, 2. Corporate / PSU / Govt Buyers, 3. Financiers (Banks and NBFC factors).
</details>

