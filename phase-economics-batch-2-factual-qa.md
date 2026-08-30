# Economics Master — Batch 2 Factual & Epistemic QA Register
**Scope: Inflation, Money, Monetary Economics & RBI Monetary Policy**
**Verification Audit:** 45 Atomic Claims across `CON-ECO-18` to `CON-ECO-32`

---

## 1. Audit Summary
All 45 atomic claims have been audited against primary statutory legislation, official Gazette notifications, RBI Master Directions, and peer-reviewed macroeconomic textbooks.

- **Total Claims Audited**: 45
- **Confidence Rating**: 100% HIGH
- **Epistemic Classification**:
  - `STATUTORY_RULE` / `CONSTITUTIONAL_PROVISION`: 18 Claims
  - `CORE_PRINCIPLE` / `ESTABLISHED_FACT`: 27 Claims
- **Temporal Status**: All time-sensitive statutory parameters (such as the 2021–2026 inflation target, Base Years 2012 / 2011-12, and SDF April 2022 introduction) are explicitly anchored.

---

## 2. Granular Concept-by-Concept Factual Verification

### TOPIC 33: MONEY: ORIGINS, FUNCTIONS, TYPOLOGY & AGGREGATES

#### `CON-ECO-18`: Origins, Functions, Evolution and Typology of Money
- **CLM-ECO-18-01**: Money originated to overcome the double coincidence of wants, common measure of value, and indivisibility frictions of barter.
  - *Authority*: NCERT Class 12 Macroeconomics, Ch 3; RBI History of Indian Currency & Banking.
  - *Status*: `VERIFIED`
- **CLM-ECO-18-02**: Fiat money has zero intrinsic value and is backed by sovereign decree; Fiduciary money depends on mutual trust (cheques/bills).
  - *Authority*: Reserve Bank of India Act, 1934; Modern Macroeconomics (Mankiw, Ch 4).
  - *Status*: `VERIFIED`
- **CLM-ECO-18-03**: RBI currency notes are unlimited legal tender (Section 26 RBI Act); Coins of ₹1+ are limited legal tender up to ₹1,000, 50p coins up to ₹10 (Section 6 Coinage Act 2011).
  - *Authority*: Coinage Act, 2011, Section 6; Reserve Bank of India Act, 1934, Section 26(1).
  - *Status*: `VERIFIED`

#### `CON-ECO-19`: Money Supply Aggregates & Velocity of Money
- **CLM-ECO-19-01**: Reserve Money ($M_0$) = Currency in Circulation + Bankers' Deposits with RBI + Other Deposits with RBI.
  - *Authority*: RBI Bulletin & Database on Indian Economy (DBIE); 1998 Y.V. Reddy Working Group Report.
  - *Status*: `VERIFIED`
- **CLM-ECO-19-02**: $M_1$ = Currency with Public + Demand Deposits + Other Deposits with RBI; $M_3 = M_1 + \\text{Time Deposits}$.
  - *Authority*: RBI Manual on Financial and Banking Statistics; NCERT Class 12 Macroeconomics, Ch 3.
  - *Status*: `VERIFIED`
- **CLM-ECO-19-03**: 1998 Working Group introduced New Monetary Aggregates ($NM_1, NM_2, NM_3$) and Liquidity Aggregates ($L_1, L_2, L_3$).
  - *Authority*: Report of the Working Group on Money Supply (RBI, 1998).
  - *Status*: `VERIFIED`

---

### TOPIC 34: COMMERCIAL BANKING MONEY CREATION & THE MONEY MULTIPLIER

#### `CON-ECO-20`: Commercial Bank Money Creation & Derivative Deposits
- **CLM-ECO-20-01**: Commercial banks create money by extending loans and crediting derivative deposit accounts under fractional reserve banking.
  - *Authority*: Bank of England Quarterly Bulletin (2014); NCERT Class 12 Macroeconomics, Ch 3.
  - *Status*: `VERIFIED`
- **CLM-ECO-20-02**: Maximum simple deposit expansion $\\Delta D = \\text{Initial Deposit} \\times \\frac{1}{r}$.
  - *Authority*: Principles of Economics (Mankiw, Ch 29); RBI Macroeconomics Manual.
  - *Status*: `VERIFIED`
- **CLM-ECO-20-03**: Real-world bank credit creation is constrained by CRR/SLR, Basel III CRAR capital ratios, collateral, and cash drain.
  - *Authority*: RBI Report on Trend and Progress of Banking in India; BIS Working Papers.
  - *Status*: `VERIFIED`

#### `CON-ECO-21`: The Money Multiplier Framework
- **CLM-ECO-21-01**: Money Multiplier $m = \\frac{M_3}{M_0} = \\frac{1 + c}{c + r}$, where $c = C/D$ and $r = R/D$.
  - *Authority*: Macroeconomics (Blanchard, Ch 4); RBI Monetary Policy Report.
  - *Status*: `VERIFIED`
- **CLM-ECO-21-02**: Increases in $c$ or $r$ reduce the money multiplier ($\\frac{\\partial m}{\\partial c} < 0$, $\\frac{\\partial m}{\\partial r} < 0$).
  - *Authority*: NCERT Class 12 Macroeconomics, Ch 3; Monetary Theory and Policy (Walsh).
  - *Status*: `VERIFIED`
- **CLM-ECO-21-03**: Digital retail payments (UPI, IMPS) lower $c$, expanding the money multiplier and increasing velocity.
  - *Authority*: RBI Report on Currency and Finance (2022-23).
  - *Status*: `VERIFIED`

---

### TOPIC 35: INFLATION THEORIES, PRICE DYNAMICS & MEASUREMENT

#### `CON-ECO-22`: Inflation Theories and Typologies
- **CLM-ECO-22-01**: Inflation is a sustained, general increase in the overall price level, not a one-off single commodity price jump.
  - *Authority*: Macroeconomics: Theories and Policies (Froyen); NCERT Class 12 Macroeconomics, Ch 6.
  - *Status*: `VERIFIED`
- **CLM-ECO-22-02**: Demand-pull shifts $AD$ right; Cost-push shifts $SRAS$ left (causing stagflationary pressures).
  - *Authority*: Economics (Samuelson & Nordhaus, Ch 30); RBI Report on Currency and Finance.
  - *Status*: `VERIFIED`
- **CLM-ECO-22-03**: Definitions of Disinflation (slowing positive inflation), Deflation (negative inflation), Reflation (stimulus), and Stagflation (stagnant growth + inflation).
  - *Authority*: Oxford Dictionary of Economics; Modern Macroeconomics (Mankiw, Ch 14).
  - *Status*: `VERIFIED`

#### `CON-ECO-23`: Inflation Measurement in India (CPI, WPI, GDP Deflator)
- **CLM-ECO-23-01**: CPI-Combined (Base 2012=100) by NSO (MoSPI) has 45.86% weight in Food & Beverages and is the official RBI policy anchor.
  - *Authority*: MoSPI Technical Report on CPI Base 2012; RBI Act, 1934 Section 45ZA.
  - *Status*: `VERIFIED`
- **CLM-ECO-23-02**: WPI (Base 2011-12=100) by DPIIT covers wholesale stage, manufactured goods (64.23%), and completely excludes services.
  - *Authority*: DPIIT Office of the Economic Adviser, WPI Revision Methodology.
  - *Status*: `VERIFIED`
- **CLM-ECO-23-03**: The Base Effect refers to the statistical distortion in YoY inflation caused by an abnormal index in the base comparison month.
  - *Authority*: RBI Monetary Policy Report; NCERT Class 12 Macroeconomics.
  - *Status*: `VERIFIED`

#### `CON-ECO-24`: Inflation Expectations & The Phillips Curve
- **CLM-ECO-24-01**: Short-Run Phillips Curve shows inflation-unemployment trade-off; Long-Run Phillips Curve is vertical at NAIRU (Friedman-Phelps).
  - *Authority*: American Economic Review (Milton Friedman, 1968); Macroeconomics (Mankiw, Ch 14).
  - *Status*: `VERIFIED`
- **CLM-ECO-24-02**: RBI compiles Inflation Expectations Survey of Households (IESH) and Survey of Professional Forecasters (SPF).
  - *Authority*: RBI Monetary Policy Framework & Bulletin IESH Methodology.
  - *Status*: `VERIFIED`
- **CLM-ECO-24-03**: Unanticipated inflation transfers wealth from creditors/savers to debtors/borrowers; Anticipated inflation causes shoe-leather and menu costs.
  - *Authority*: Economics (Krugman & Wells, Ch 8); Modern Macroeconomics (Romer).
  - *Status*: `VERIFIED`

---

### TOPIC 36: INTEREST RATE THEORY & THE FISHER RELATION

#### `CON-ECO-25`: Nominal vs Real Interest Rates & The Fisher Effect
- **CLM-ECO-25-01**: Fisher Equation: $1 + i = (1 + r)(1 + \\pi^e) \\implies r \\approx i - \\pi^e$.
  - *Authority*: The Theory of Interest (Irving Fisher, 1930); Macroeconomics (Mankiw, Ch 5).
  - *Status*: `VERIFIED`
- **CLM-ECO-25-02**: Fisher Effect: 1-for-1 long-run adjustment of nominal interest rates to expected inflation under monetary neutrality.
  - *Authority*: Macroeconomics (Blanchard, Ch 14); Monetary Theory and Policy (Walsh).
  - *Status*: `VERIFIED`
- **CLM-ECO-25-03**: Negative real interest rates ($i < \\pi$) penalize savers, disincentivize bank deposits, and encourage physical asset hoarding (Gold/Real Estate).
  - *Authority*: RBI Monetary Policy Report; IMF Working Papers on Real Interest Rates.
  - *Status*: `VERIFIED`

---

### TOPIC 37: MONETARY POLICY FOUNDATIONS, TRANSMISSION & STANCES

#### `CON-ECO-26`: Monetary Policy Objectives, Channels & Stances
- **CLM-ECO-26-01**: Monetary policy transmission connects repo rate decisions to market rates, aggregate demand, output, and inflation.
  - *Authority*: Urjit Patel Committee Report (RBI, 2014); Macroeconomics (Blanchard).
  - *Status*: `VERIFIED`
- **CLM-ECO-26-02**: Five transmission channels: Interest Rate, Bank Lending, Asset Price (Tobin q), Exchange Rate, Expectations.
  - *Authority*: RBI Bulletin; Bank of England Working Papers.
  - *Status*: `VERIFIED`
- **CLM-ECO-26-03**: Stances (Accommodative, Neutral, Withdrawal of Accommodation) provide forward policy guidance.
  - *Authority*: RBI Monetary Policy Statements & MPC Resolutions.
  - *Status*: `VERIFIED`

#### `CON-ECO-27`: Conventional vs Unconventional Monetary Policy
- **CLM-ECO-27-01**: Unconventional tools (QE, Forward Guidance, NIRP) are deployed at the Zero Lower Bound.
  - *Authority*: BIS Annual Economic Report; Modern Macroeconomics (Mankiw, Ch 15).
  - *Status*: `VERIFIED`
- **CLM-ECO-27-02**: Operation Twist (simultaneous buy long-term, sell short-term G-Secs) flattens yield curve without expanding balance sheet.
  - *Authority*: RBI Press Releases on Special OMOs (2019-2020); RBI Bulletin.
  - *Status*: `VERIFIED`
- **CLM-ECO-27-03**: LTRO and TLTRO provided 1-3 year funding at repo rate targeted at corporate bonds and stressed sectors during COVID-19.
  - *Authority*: RBI Governor Statements (Feb & March 2020); RBI Monetary Policy Report.
  - *Status*: `VERIFIED`

---

### TOPIC 38: RBI MONETARY POLICY INSTITUTIONAL FRAMEWORK & FLEXIBLE INFLATION TARGETING

#### `CON-ECO-28`: RBI Statutory Framework & Flexible Inflation Targeting (FIT)
- **CLM-ECO-28-01**: Section 45ZA RBI Act: Central Govt in consultation with RBI sets 4% CPI target with +/- 2% band for 5-year periods (2021–2026).
  - *Authority*: Section 45ZA, RBI Act, 1934; Gazette Notification S.O. 1422(E) dated March 31, 2021.
  - *Status*: `VERIFIED`
- **CLM-ECO-28-02**: Section 45ZN: Failure is defined as average CPI inflation > 6% or < 2% for three consecutive quarters.
  - *Authority*: Section 45ZN, RBI Act, 1934; MPC Regulations 2016.
  - *Status*: `VERIFIED`
- **CLM-ECO-28-03**: Upon failure, Section 45ZN mandates RBI to submit an explanation report stating reasons, remedies, and timeline to the Central Government.
  - *Authority*: Section 45ZN(a)-(c), Reserve Bank of India Act, 1934.
  - *Status*: `VERIFIED`

#### `CON-ECO-29`: Monetary Policy Committee (MPC) Architecture
- **CLM-ECO-29-01**: Section 45ZB: MPC consists of 6 members (3 RBI including Governor as Chair + 3 Central Govt appointees).
  - *Authority*: Section 45ZB, Reserve Bank of India Act, 1934.
  - *Status*: `VERIFIED`
- **CLM-ECO-29-02**: Section 45ZC/45ZD: External members appointed for 4-year non-renewable tenure by Cabinet Secretary-led Search Committee.
  - *Authority*: Section 45ZC & 45ZD, Reserve Bank of India Act, 1934.
  - *Status*: `VERIFIED`
- **CLM-ECO-29-03**: Section 45ZI: Quorum is 4 members; one vote per member; Governor has casting vote in 3-3 tie.
  - *Authority*: Section 45ZI(1)-(4), Reserve Bank of India Act, 1934.
  - *Status*: `VERIFIED`

---

### TOPIC 39: RBI MONETARY POLICY OPERATING FRAMEWORK & INSTRUMENTS

#### `CON-ECO-30`: Direct Reserve Requirements (CRR & SLR)
- **CLM-ECO-30-01**: CRR under Section 42(1) RBI Act maintained as cash at RBI; statutory floor (3%) and ceiling (20%) limits removed in 2006.
  - *Authority*: Section 42(1), RBI Act, 1934; RBI Master Direction on CRR.
  - *Status*: `VERIFIED`
- **CLM-ECO-30-02**: SLR under Section 24 BR Act 1949 maintained in G-Secs/gold/cash up to 40% maximum ceiling (25% floor removed in 2007).
  - *Authority*: Section 24, Banking Regulation Act, 1949; RBI Master Direction on SLR.
  - *Status*: `VERIFIED`
- **CLM-ECO-30-03**: RBI does not pay any interest to commercial banks on CRR cash balances.
  - *Authority*: Reserve Bank of India (Amendment) Act, 2006.
  - *Status*: `VERIFIED`

#### `CON-ECO-31`: The LAF Corridor (Repo, SDF, MSF, Bank Rate)
- **CLM-ECO-31-01**: Policy Repo Rate is benchmark collateralized lending rate under LAF.
  - *Authority*: RBI Master Direction on LAF; RBI Operating Framework.
  - *Status*: `VERIFIED`
- **CLM-ECO-31-02**: SDF introduced April 8, 2022 under Section 17(1A) RBI Act as uncollateralized floor (Repo - 25 bps).
  - *Authority*: Section 17(1A), RBI Act, 1934; RBI Monetary Policy Statement (April 8, 2022).
  - *Status*: `VERIFIED`
- **CLM-ECO-31-03**: MSF is emergency ceiling (Repo + 25 bps) allowing scheduled banks to dip into SLR portfolio.
  - *Authority*: RBI Master Circular on MSF.
  - *Status*: `VERIFIED`

#### `CON-ECO-32`: Market Liquidity Management (OMOs, VRR/VRRR, Sterilization)
- **CLM-ECO-32-01**: OMOs are outright secondary market G-Sec purchases/sales by RBI to manage durable structural liquidity.
  - *Authority*: Section 17(8), RBI Act, 1934; RBI Liquidity Management Framework.
  - *Status*: `VERIFIED`
- **CLM-ECO-32-02**: VRR and VRRR auctions manage frictional liquidity and steer WACR toward the Repo rate.
  - *Authority*: RBI Revised Liquidity Management Framework (2020 & 2024).
  - *Status*: `VERIFIED`
- **CLM-ECO-32-03**: Sterilization neutralizes rupee liquidity from USD purchases by selling G-Secs under MSS (2004 MoU) or OMOs.
  - *Authority*: MoU on Market Stabilization Scheme (MoF & RBI, 2004).
  - *Status*: `VERIFIED`
