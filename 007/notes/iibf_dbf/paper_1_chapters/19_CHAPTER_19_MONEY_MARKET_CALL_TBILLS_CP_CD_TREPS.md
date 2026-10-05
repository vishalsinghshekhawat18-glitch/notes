# MONEY MARKET ARCHITECTURE: CALL, T-BILLS, CP, CD & TREPS

The Money Market facilitates short-term borrowing and lending for maturities up to one year (365 days), operating under the regulatory authority of the Reserve Bank of India.

## § 19.1 Unit 25 Comprehensive Architectural Analysis

> **Key Concept — IIBF Core Foundation: Market Segregation**
> Financial markets are divided by tenor into Money Markets (Maturity ≤ 1 Year, liquidity management) and Capital Markets (Maturity > 1 Year, long-term capital formation), operating across Primary (Issuance) and Secondary (Trading) venues.

## 1. Money Market vs. Capital Market Master Matrix

| Parameter | Money Market | Capital Market |
| --- | --- | --- |
| Maturity Horizon | **Short-Term (Up to 1 Year / 365 Days)** | **Medium and Long-Term (Exceeding 1 Year)** |
| Primary Regulator | **Reserve Bank of India (RBI)** | **Securities and Exchange Board of India (SEBI)** |
| Core Instruments | Call/Notice Money, T-Bills, Commercial Paper (CP), Certificates of Deposit (CD), TREPS, Commercial Bills. | Equity Shares, Preference Shares, Debentures, Corporate Bonds, Government Securities (G-Secs), Derivatives. |
| Risk & Return | **Low Risk, Low Return, High Liquidity** | **Higher Risk, Higher Return, Variable Liquidity** |
| Primary Participants | RBI, Commercial Banks, Primary Dealers, Financial Institutions, Mutual Funds, Corporates. | Retail Investors, Institutional Investors (FPIs, DIIs), Mutual Funds, Insurance Companies, Corporates. |

> **Exam Anchor & Trap:**
> Top IIBF Traps for Unit 25:
1. **Regulator Split:** **RBI regulates the Money Market and Forex Market**; **SEBI regulates the Capital Market and Securities Market**.
2. **Maturity Boundary:** Exactly **1 Year (365 days)** separates Money Market instruments from Capital Market debt instruments.

---

---

## § 19.2 Unit 26 Comprehensive Architectural Analysis

> **Key Concept — IIBF Core Foundation: Money Market Instruments Suite**
> Money market instruments provide short-term liquidity management for banks, the central government, and creditworthy corporate borrowers, issued at a discount to face value or at market-linked floating rates.

## ⏱ 1. Call, Notice & Term Money Market Tenors

| Category | Tenor / Duration | Operational Purpose |
| --- | --- | --- |
| Call Money | **Overnight (1 Day)** | Managing immediate interbank reserve (CRR/SLR) mismatches. |
| Notice Money | **2 Days to 14 Days** | Short-term temporary liquidity balancing. |
| Term Money | **15 Days up to 1 Year** | Medium liquidity borrowing without collateral. |

## 2. Treasury Bills (T-Bills) Master Structure

| T-Bill Tenor | Auction Frequency | Minimum Denomination & Method |
| --- | --- | --- |
| 91-Day T-Bill | Weekly (Every Wednesday) | Issued in multiples of **₹10,000**. **Issued at a discount to face value and redeemed at par (₹100)**. Zero default sovereign risk. |
| 182-Day T-Bill | Weekly (Every Wednesday) | Yield is calculated based on discount: $$\text{Yield} = \frac{F - P}{P} \times \frac{365}{D} \times 100$$ |
| 364-Day T-Bill | Weekly (Every Wednesday) | Eligible for SLR maintenance by banks. |

## 3. Commercial Paper (CP) vs. Certificates of Deposit (CD)

| Parameter | Commercial Paper (CP) | Certificates of Deposit (CD) |
| --- | --- | --- |
| Issuer | Highly rated Corporates, Primary Dealers (PDs), AIFIs | Scheduled Commercial Banks and All-India Financial Institutions |
| Instrument Nature | Unsecured promissory note | Negotiable, transferable promissory note against term deposits |
| Minimum Denomination | **₹5 Lakh** (and in multiples of ₹5 Lakh thereafter) | **₹1 Lakh** (and in multiples of ₹1 Lakh thereafter) |
| Maturity / Tenor Range | **Min 7 Days up to Max 1 Year** | **Banks:** Min 7 Days to Max 1 Year;<br>**FIs:** Min 1 Year to Max 3 Years |
| Eligible Rating Requirement | Credit rating of **A3** (or equivalent) minimum | Credit rating mandatory if issued by FIs (not strictly required for SCBs) |
| Loans Against Instrument | **Strictly PROHIBITED** (Banks cannot grant loans against CP) | **Strictly PROHIBITED** (Banks cannot grant loans against CD) |

## 4. Triparty Repo (TREPS)

• **Definition:** A repo contract where a **Third Party (Clearing Corporation of India Ltd - CCIL)** acts as an intermediary between borrowing and lending institutions to provide collateral selection, payment settlement, and management services.
• **Advantage over Bilateral Repo:** Eliminates counterparty credit risk (CCIL acts as central counterparty and guarantees settlement).

> **Exam Anchor & Trap:**
> Top IIBF Traps for Unit 26:
1. **CP vs CD Minimum Amount:** Commercial Paper is **₹5 Lakh**; Certificate of Deposit is **₹1 Lakh**.
2. **Loans Against CP/CD:** Banks **CANNOT grant loans against their own CDs or CPs**.
3. **Call vs Notice Money:** Call Money is **1 day**; Notice Money is **2 to 14 days**.
4. **T-Bills Issuance:** T-Bills are **issued at a discount and redeemed at par (zero coupon)**.

---

---

## § 19.3 Active Recall Diagnostic Vault

<details>
<summary>Contrast Call Money, Notice Money, and Term Money by maturity tenor.</summary>
Call Money: Overnight borrowing / lending (1 day).
Notice Money: Borrowing / lending for 2 days to 14 days.
Term Money: Borrowing / lending for 15 days up to 1 year (365 days).
</details>

<details>
<summary>Compare Commercial Paper (CP) and Certificates of Deposit (CD) by issuer and minimum denomination.</summary>
Commercial Paper (CP): Issued by highly rated corporates, primary dealers, AIFIs; Minimum denomination ₹5 Lakh (multiples of ₹5L); Maturity 7 days to 1 year.
Certificates of Deposit (CD): Issued by Scheduled Commercial Banks and AIFIs; Minimum denomination ₹1 Lakh (multiples of ₹1L); Bank CD maturity 7 days to 1 year (AIFI CD up to 3 years).
</details>

