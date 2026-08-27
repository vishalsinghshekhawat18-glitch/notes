/**
 * Batch E2 Canonical Knowledge Seed (Topics 30–32: 12 Concepts)
 * Mind of Aravalli — Academic Reading Hub
 *
 * Covers:
 * - Topic 30: Public Finance, Union Budget Architecture & Taxation (CON-ECO-18 to CON-ECO-21)
 * - Topic 31: Banking Regulations, Basel Norms, NPAs & Financial Inclusion (CON-ECO-22 to CON-ECO-25)
 * - Topic 32: External Sector, Balance of Payments & International Trade (CON-ECO-26 to CON-ECO-29)
 */

import { db } from '../db/client';
import { CanonicalConceptDefinition } from './batch-e1-canonical-seed';

export const BATCH_E2_CONCEPTS: CanonicalConceptDefinition[] = [
  // =========================================================================
  // TOPIC 30: PUBLIC FINANCE, UNION BUDGET ARCHITECTURE & TAXATION
  // =========================================================================
  {
    id: 'CON-ECO-18',
    topicOrder: 30,
    topicSlug: 'public-finance-union-budget-and-taxation',
    topicTitle: 'Public Finance, Union Budget Architecture & Taxation',
    topicDescription: 'Constitutional budget framework (Article 112 Annual Financial Statement), Revenue vs Capital accounts, budgetary deficits (Revenue, Fiscal, Primary), Direct vs Indirect taxation, GST architecture, and FRBM fiscal consolidation.',
    slug: 'union-budget-architecture-revenue-vs-capital-receipts-expenditure-constitutional-stages',
    title: 'Union Budget Architecture: Revenue vs Capital Receipts & Expenditure, and Constitutional Stages',
    shortDefinition: 'The constitutional and budgetary classification of the Union Budget under Article 112 (Annual Financial Statement): the structural bifurcation into the Revenue Account (Revenue Receipts [Tax & Non-Tax] and Revenue Expenditure [operational, non-asset creating]) and the Capital Account (Capital Receipts [Debt & Non-Debt creating] and Capital Expenditure [asset-creating / liability-reducing]), and the six constitutional parliamentary enactment stages.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-18-01',
        statement: 'Under Article 112 of the Constitution of India, the President causes to be laid before Parliament an "Annual Financial Statement" showing estimated receipts and expenditure for the financial year; the Constitution does not use the term "Budget".',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India, Article 112; Union Budget Documents',
        excerpt: 'Article 112 mandates the Annual Financial Statement for each financial year.',
      },
      {
        id: 'CLM-ECO-18-02',
        statement: 'Budget receipts and expenditures are split into two distinct accounts: Revenue Account (transactions that neither create assets nor reduce liabilities) and Capital Account (transactions that create financial/physical assets or reduce government sovereign liabilities).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Ministry of Finance, Union Budget Structure; NCERT Class 12 Macroeconomics, Ch 5',
        excerpt: 'Revenue items do not affect asset-liability position; Capital items alter asset or liability positions.',
      },
      {
        id: 'CLM-ECO-18-03',
        statement: 'The Union Budget passes through six distinct constitutional stages in Parliament: Presentation (Feb 1), General Discussion, Scrutiny by Departmentally Related Standing Committees (DRSCs), Voting on Demands for Grants (Lok Sabha exclusive under Article 113), Passage of Appropriation Bill (Article 114), and Passage of Finance Bill (Article 110/117 within 75 days).',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India, Articles 112-117; Rules of Procedure of Lok Sabha',
        excerpt: 'Six stages of budget passage culminating in Appropriation and Finance Acts.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Sovereign Household Ledger: Operational vs Asset Balance Sheet',
        body: 'Just as a prudent household separates its daily recurring groceries and electricity bills from long-term home purchases and mortgage payoffs, the Government of India bifurcates its national budget into two accounts:\n\n1. **The Revenue Account (Daily Operations):** Salaries, interest payments, pensions, and subsidies financed by tax and non-tax revenues.\n2. **The Capital Account (Asset Building & Debt):** Building expressways, dedicated freight corridors, and repaying public loans financed by borrowings, disinvestment, and loan recoveries.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The Structural Framework of the Union Budget',
        body: '```mermaid\ngraph TD\n    UB["Union Budget (Annual Financial Statement - Article 112)"]\n    UB --> RA["1. REVENUE ACCOUNT"]\n    UB --> CA["2. CAPITAL ACCOUNT"]\n    RA --> RR["Revenue Receipts: Tax (Direct/Indirect) + Non-Tax (Dividends, Fees)"]\n    RA --> RE["Revenue Expenditure: Interest, Salaries, Defence maintenance, Subsidies"]\n    CA --> CR["Capital Receipts: Debt (Market Loans) + Non-Debt (Disinvestment, Loan Recovery)"]\n    CA --> CE["Capital Expenditure: Infra, Highways, Machinery, Loans to States"]\n```\n\n### The Fundamental Asset-Liability Criterion\n* **Revenue Item:** Has **NO effect** on government assets or liabilities.\n* **Capital Item:** Directly **creates an asset** OR **reduces a liability** (Expenditure), or **creates a liability** OR **reduces an asset** (Receipts).',
        order: 2,
      },
      {
        type: 'COMPARISON',
        title: 'Master Classification of Budgetary Receipts & Expenditures',
        body: '| Category | Specific Items | Defining Characteristics |\n| :--- | :--- | :--- |\n| **Revenue Receipts** | • **Tax:** Income Tax, Corporate Tax, GST, Customs, Central Excise.<br>• **Non-Tax:** Dividends from CPSEs/RBI surplus, Interest receipts from States, User fees, Spectrum fees. | Sovereign earnings that create **no repayment liability** and cause **no reduction in government assets**. |\n| **Capital Receipts (Debt-Creating)** | Market borrowings (G-Secs, T-Bills), External sovereign loans, Provident fund deposits. | Inflows that **increase future sovereign repayment liabilities**. |\n| **Capital Receipts (Non-Debt)** | Recovery of loans granted to States, Disinvestment proceeds from CPSE share sales (DIPAM). | Inflows that **reduce government assets** without increasing public debt. |\n| **Revenue Expenditure** | Interest payments on accumulated debt (single largest item), Defence operational costs, Central subsidies (Food, Fertilizer), Civil salaries & pensions, Grants to States (even if used for asset creation). | Recurring operational consumption expenditure; **creates no physical/financial assets**. |\n| **Capital Expenditure (Capex)** | Highway/Railway construction, land acquisition, purchase of defence aircraft, Capital loans given to State Governments. | Productive investment that **builds durable physical assets** or **reduces public liabilities**. |',
        order: 3,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'Charged Expenditure vs Voted Expenditure (Article 113)',
        body: 'Under Article 113 of the Constitution, expenditure from the Consolidated Fund of India is divided into:\n\n* **Charged Expenditure (Non-Votable):** Salaries and pensions of the President, Vice President, Supreme Court judges, CAG, UPSC members, and interest payments on sovereign debt. Parliament can **discuss** charged items, but they are **NOT put to vote**.\n* **Voted Expenditure (Votable Demands for Grants):** All ministerial spending proposals, subject to discussion, Cut Motions (Policy Disapproval, Economy, Token), and formal voting by the Lok Sabha exclusively.',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Budget Architecture',
        body: '1. **Grants to States for Capital Assets:** Grants given by the Central Government to States under Article 282 for building roads or schools are classified as **REVENUE EXPENDITURE** in the Union Budget (because the asset belongs to the State Government, not the Union)! To correct this anomaly, the concept of **Effective Revenue Deficit** was introduced.\n2. **Disinvestment Classification:** Disinvestment proceeds are **Non-Debt Capital Receipts**, NOT Revenue Receipts (because selling equity shares reduces government asset ownership).\n3. **Recovery of Loans:** When a State Government repays an old loan to the Center, it is a **Non-Debt Capital Receipt** (reduces the Center\'s financial asset claim).',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Government Budgeting, Revenue vs Capital, Charged vs Voted',
        notes: 'Repeatedly tested in Prelims: classification of interest payments, grants to states, and disinvestment.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module A - Union Budget & Public Finance',
        notes: 'Direct MCQs on Capital vs Revenue receipts, non-debt capital receipts, and Article 112.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Article 112 = Annual Financial Statement (word Budget not in Constitution). Revenue Account = No asset/liability change (Taxes, dividends, salaries, subsidies, interest payments). Capital Account = Changes assets/liabilities (Capex, borrowing, loan recovery, disinvestment). Non-Debt Capital Receipts = Disinvestment + Loan recoveries. Grants to States = Revenue Expenditure. Charged expenditure = Discussable but non-votable. Voted = Exclusive to Lok Sabha.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'The Union Budget (Article 112 Annual Financial Statement) divides finances into the Revenue Account (recurring operational taxes, salaries, subsidies, interest) and Capital Account (asset-building capex, sovereign borrowings, loan recoveries, disinvestment). Charged expenditures are non-votable. Grants to States are classified as Revenue Expenditure regardless of end-use.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Constitutional Basis: Article 112 (Annual Financial Statement), Article 113 (Demands for Grants), Article 114 (Appropriation Bill).\n2. Revenue Matrix: Revenue Receipts (Tax + Non-Tax) vs Revenue Expenditure (Operational / non-asset creating).\n3. Capital Matrix: Capital Receipts (Debt-creating vs Non-Debt [Disinvestment/Recovery]) vs Capital Expenditure (Asset-creating / Debt-reducing).\n4. Parliamentary Enactment: Presentation -> General Discussion -> DRSC scrutiny -> Voting on Demands -> Appropriation Act -> Finance Act (75 days).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following items is classified as a "NON-DEBT CAPITAL RECEIPT" in the Union Budget of India?',
        options: [
          'Dividends received by the Government from Public Sector Enterprises like ONGC and Coal India',
          'Proceeds realized from the disinvestment of Government equity in a Central Public Sector Enterprise',
          'Market loans raised by the Central Government through the issuance of dated Government Securities (G-Secs)',
          'Interest earned on developmental loans extended to State Governments',
        ],
        correctAnswer: 'Proceeds realized from the disinvestment of Government equity in a Central Public Sector Enterprise',
        explanation: 'Non-Debt Capital Receipts are capital inflows that bring in funds without creating future debt liabilities, achieved by liquidating existing assets. Disinvestment proceeds (selling equity stakes in CPSEs) and recovery of past loans granted to States fall in this category. Dividends and interest earned are Revenue Receipts, while G-Sec market loans are Debt-Creating Capital Receipts.',
        trapExplanation: 'Candidates confuse dividends (Revenue Receipt from ongoing profit) with disinvestment proceeds (Capital Receipt from selling equity assets).',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-ECO-19',
    topicOrder: 30,
    topicSlug: 'public-finance-union-budget-and-taxation',
    topicTitle: 'Public Finance, Union Budget Architecture & Taxation',
    topicDescription: 'Fiscal Deficit Equations: Budgetary, Revenue, Effective Revenue, Fiscal & Primary Deficits.',
    slug: 'fiscal-deficit-equations-budgetary-revenue-effective-revenue-fiscal-primary-deficits',
    title: 'Fiscal Deficit Equations: Budgetary, Revenue, Effective Revenue, Fiscal & Primary Deficits',
    shortDefinition: 'The mathematical and macroeconomic equations of budgetary deficits in India: Revenue Deficit ($\\text{RD} = \\text{Revenue Expenditure} - \\text{Revenue Receipts}$), Effective Revenue Deficit ($\\text{ERD} = \\text{RD} - \\text{Grants for Creation of Capital Assets}$), Fiscal Deficit as the total sovereign borrowing requirement ($\\text{FD} = \\text{Total Expenditure} - [\\text{Revenue Receipts} + \\text{Non-Debt Capital Receipts}]$), and Primary Deficit isolating current-year fiscal stance ($\\text{PD} = \\text{Fiscal Deficit} - \\text{Interest Payments}$).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-19-01',
        statement: 'Fiscal Deficit is the excess of total government expenditure over total non-debt receipts, representing the exact quantum of total net borrowing the government must raise from all domestic and external sources: Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-Debt Capital Receipts).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Sukhhamoy Chakravarty Committee Report (1985); Ministry of Finance Budget at a Glance',
        excerpt: 'Fiscal Deficit ≡ Total Net Sovereign Borrowing Requirement of the Government.',
      },
      {
        id: 'CLM-ECO-19-02',
        statement: 'Primary Deficit measures current-year fiscal imprudence by subtracting mandatory legacy interest obligations from the Fiscal Deficit: Primary Deficit = Fiscal Deficit - Interest Payments; a zero primary deficit indicates the government is borrowing solely to service past debt.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Public Finance Theory; RBI Report on Currency and Finance',
        excerpt: 'Primary Deficit = Fiscal Deficit - Interest Payments. Reflects current fiscal year balance.',
      },
      {
        id: 'CLM-ECO-19-03',
        statement: 'Effective Revenue Deficit (ERD), introduced in the Union Budget 2011-12 and codified in the FRBM Act (amended 2012), deducts Grants-in-Aid for creation of capital assets given to States from the conventional Revenue Deficit: ERD = Revenue Deficit - Grants for Creation of Capital Assets.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Fiscal Responsibility and Budget Management Act, 2003 (amended 2012); Union Budget 2011-12',
        excerpt: 'Effective Revenue Deficit strips out capital grants to States from revenue deficit.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Why One "Deficit" Number Is Never Enough',
        body: 'If someone tells you a government is running a deficit, you must ask: **What is the borrowed money being spent on?**\n\n* If the government borrows to build high-speed freight corridors and semiconductor hubs, the borrowing creates productive capital that generates future tax revenues to repay the loan (**Healthy Capital Financing**).\n* If the government borrows merely to pay administrative salaries, operational subsidies, and interest on old loans, it is consuming beyond its means (**Unhealthy Consumption Deficit**).\n\nEconomists use four precise equations to distinguish between these scenarios.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The 4 Master Deficit Equations',
        body: '### 1. Revenue Deficit (RD)\n$$\\mathbf{\\text{RD} = \\text{Total Revenue Expenditure} - \\text{Total Revenue Receipts}}$$\n* Measures the government\'s **dissaving** (borrowing to fund daily consumption).\n\n### 2. Effective Revenue Deficit (ERD)\n$$\\mathbf{\\text{ERD} = \\text{Revenue Deficit} - \\text{Grants for Creation of Capital Assets extended to States}}$$\n* Corrects for Central grants given to States under schemes like PMGSY or Samagra Shiksha that build permanent capital assets.\n\n### 3. Fiscal Deficit (FD) — Sovereign Borrowing Requirement\n$$\\mathbf{\\text{FD} = \\text{Total Budget Expenditure} - (\\text{Revenue Receipts} + \\text{Non-Debt Capital Receipts})}$$\n* Equivalently: $\\mathbf{\\text{Fiscal Deficit} = \\text{Revenue Deficit} + (\\text{Capital Expenditure} - \\text{Non-Debt Capital Receipts})}$.\n* **Economic Meaning:** The total amount of new debt the government must raise in the fiscal year.\n\n### 4. Primary Deficit (PD)\n$$\\mathbf{\\text{PD} = \\text{Fiscal Deficit} - \\text{Interest Payments on Past Debt}}$$\n* Isolates the current fiscal year\'s discretionary budget balance from past accumulated legacy debt.',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'How the Fiscal Deficit Is Financed in India',
        body: 'The Government of India finances its Fiscal Deficit through three primary avenues:\n\n1. **Domestic Market Borrowings (Dated G-Secs & T-Bills):** Represents the overwhelming majority (~70–75% of deficit funding), subscribed by commercial banks, insurance companies, and pension funds.\n2. **Securities against Small Savings (NSSF):** Borrowing from the National Small Savings Fund (Post Office deposits, PPF, Sukanya Samriddhi).\n3. **External Financing:** Concessional loans from multilateral/bilateral agencies (World Bank, ADB, JICA) (~2–3% of total borrowing).\n\n### Historical Note: Abolition of Automatic Monetization (1997)\nPrior to 1997, budget deficits were automatically financed by issuing **Ad-hoc Treasury Bills** to the RBI (printing currency / deficit financing). This practice was permanently abolished via the **Rangarajan-Chidambaram Agreement (March 1997)** to ensure fiscal discipline.',
        order: 3,
      },
      {
        type: 'COMPARISON',
        title: 'Deficit Metrics Summary Matrix',
        body: '| Deficit Metric | Exact Formula | What It Tells Policymakers |\n| :--- | :--- | :--- |\n| **Revenue Deficit (RD)** | $\\text{Rev Exp} - \\text{Rev Receipts}$ | Extent to which government current consumption exceeds current revenue. |\n| **Effective Revenue Deficit (ERD)** | $\\text{RD} - \\text{Capital Grants to States}$ | True structural consumption gap excluding asset-creating inter-governmental transfers. |\n| **Fiscal Deficit (FD)** | $\\text{Total Exp} - [\\text{Rev Rec} + \\text{Non-Debt Cap Rec}]$ | **Total sovereign borrowing requirement**; driver of national debt and inflation. |\n| **Primary Deficit (PD)** | $\\text{Fiscal Deficit} - \\text{Interest Payments}$ | Real-time fiscal stance of current government; if $\\text{PD} = 0$, all borrowing goes into interest. |',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Deficit Calculations',
        body: '1. **Fiscal Deficit = Total Borrowing:** By mathematical identity, **Fiscal Deficit is exactly equal to the Total Borrowings and other liabilities of the Government of India**.\n2. **Primary Deficit = Zero:** If Primary Deficit is ZERO, it means: $\\text{Fiscal Deficit} = \\text{Interest Payments}$. The government is borrowing money *strictly* to service interest on past debt, without creating any new primary fiscal gap.\n3. **Debt Sustainability Condition (Domar Condition):** Sovereign public debt remains sustainable if the **Real GDP Growth Rate ($g$) exceeds the Real Interest Rate ($r$)** on government debt ($g > r$).',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Fiscal Deficit Equations, Deficit Financing, Primary Deficit, Domar Condition',
        notes: 'High-frequency Prelims and Mains topic on deficit formulas, financing modes, and debt sustainability.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module A - Deficit Concepts & Public Debt Dynamics',
        notes: 'Numerical problems calculating Fiscal Deficit, Revenue Deficit, and Primary Deficit from data tables.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Revenue Deficit = Rev Exp - Rev Receipts (consumption gap). Effective RD = RD - Capital Grants to States. Fiscal Deficit = Total Exp - (Rev Receipts + Non-Debt Capital Receipts) ≡ Total Sovereign Borrowings. Primary Deficit = Fiscal Deficit - Interest Payments. If Primary Deficit = 0, borrowing is solely for legacy interest payments. Domar Condition: Debt is sustainable if Growth Rate (g) > Interest Rate (r).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Budget deficits quantify fiscal imbalance: Revenue Deficit measures consumption dissaving; Effective Revenue Deficit strips out capital grants to States; Fiscal Deficit equals total net sovereign borrowing requirements; Primary Deficit deducts interest payments to reveal current-year fiscal stance. Debt sustainability requires real growth (g) to exceed real borrowing cost (r).',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. RD = Rev Exp - Rev Rec.\n2. ERD = RD - Grants for Capital Assets (FRBM 2012 amendment).\n3. FD = Total Exp - [Rev Rec + Non-Debt Cap Rec] = Net Market Borrowings + NSSF + External Debt.\n4. PD = FD - Interest Payments (legacy burden filter).\n5. Financing: Market borrowings (G-Secs), Small savings (NSSF), External debt (Ad-hoc monetization abolished 1997).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'If the Primary Deficit of the Government of India in a financial year is ZERO, what does this mathematically imply?',
        options: [
          'The government has achieved a balanced budget with total expenditure equaling total revenue',
          'The entire Fiscal Deficit of the government is equal to its Interest Payment obligations on past debt',
          'The government does not need to raise any market borrowings or issue Treasury Bills during the year',
          'The Revenue Deficit of the government has been reduced to zero',
        ],
        correctAnswer: 'The entire Fiscal Deficit of the government is equal to its Interest Payment obligations on past debt',
        explanation: 'By definition: Primary Deficit = Fiscal Deficit - Interest Payments. If Primary Deficit = 0, then Fiscal Deficit = Interest Payments. This means the government\'s current-year revenues are sufficient to meet all current non-interest expenditures, and the entire quantum of new borrowing is required solely to pay interest on accumulated legacy public debt.',
        trapExplanation: 'Candidates confuse a zero primary deficit with a zero fiscal deficit or a balanced budget.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-ECO-20',
    topicOrder: 30,
    topicSlug: 'public-finance-union-budget-and-taxation',
    topicTitle: 'Public Finance, Union Budget Architecture & Taxation',
    topicDescription: 'Taxation Architecture: Direct vs Indirect Taxes, Tax Buoyancy & The GST Ecosystem.',
    slug: 'taxation-architecture-in-india-direct-vs-indirect-taxes-tax-buoyancy-gst-ecosystem',
    title: 'Taxation Architecture in India: Direct vs Indirect Taxes, Tax Buoyancy & The GST Ecosystem',
    shortDefinition: 'The statutory taxation architecture of India: Direct Taxes (Income Tax Act 1961, Corporate Tax — progressive incidence, non-shiftable, administered by CBDT) vs Indirect Taxes (regressive incidence, shiftable, administered by CBIC), Tax Buoyancy vs Tax Elasticity, and the landmark Goods and Services Tax (GST - 101st Constitutional Amendment Act 2016) destination-based consumption framework, GST Council (Article 279A), and Input Tax Credit (ITC) mechanism.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-20-01',
        statement: 'Direct Taxes (Income Tax, Corporation Tax) are taxes where the formal legal liability (impact) and economic burden (incidence) fall on the same entity and cannot be shifted; Indirect Taxes (GST, Customs, Excise) are taxes on transactions where the legal liability is on the seller but the economic incidence is shifted to the final consumer.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Public Finance Theory; Central Board of Direct Taxes (CBDT) & CBIC',
        excerpt: 'Direct tax: Impact and incidence on same person. Indirect tax: Incidence shifted to consumer.',
      },
      {
        id: 'CLM-ECO-20-02',
        statement: 'Tax Buoyancy measures the responsiveness of tax revenue growth relative to Gross Domestic Product (GDP) growth without controlling for tax rate changes: Tax Buoyancy = (%Δ Tax Revenue) / (%Δ Nominal GDP); a buoyancy > 1 indicates tax collections are growing faster than national output.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Ministry of Finance Economic Survey; Public Economics',
        excerpt: 'Tax Buoyancy = % change in Tax Revenue / % change in GDP.',
      },
      {
        id: 'CLM-ECO-20-03',
        statement: 'The Goods and Services Tax (GST) introduced via the 101st Constitutional Amendment Act 2016 is a comprehensive, multi-stage, destination-based consumption tax subsuming 17 central and state indirect levies, governed by the GST Council under Article 279A where Union Government holds 1/3rd voting weight and State Governments collectively hold 2/3rd voting weight, with a 3/4th (75%) majority required for decisions.',
        claimType: 'CONSTITUTIONAL_PROVISION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Constitution of India (101st Amendment Act, 2016; Article 279A, Article 246A)',
        excerpt: 'Article 279A GST Council: Union 1/3rd weight, States 2/3rd weight, 75% weighted majority for decisions.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Who Really Bears the Burden of a Tax?',
        body: 'When the government levies an **Income Tax** of 30% on an individual\'s salary, the legal obligation and financial pain hit the same paycheck (**Direct Tax — Non-Shiftable**).\n\nWhen the government levies an **Excise / GST** on a bottle of shampoo, the manufacturer pays the tax to the treasury, but incorporates the cost into the maximum retail price (MRP), passing the entire financial burden onto the final buyer (**Indirect Tax — Shiftable**). This structural difference dictates economic equity and tax efficiency.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Direct vs Indirect Taxes & Equity Principles',
        body: '| Dimension | Direct Taxes | Indirect Taxes |\n| :--- | :--- | :--- |\n| **Impact & Incidence** | Fall on the **same person / enterprise** (cannot be shifted). | Impact on supplier/merchant, **incidence shifted to final consumer**. |\n| **Progressivity** | **Progressive:** Higher income earners pay higher marginal rates (ability-to-pay principle). | **Regressive:** A poor citizen and a billionaire pay the identical ₹18 GST on a packet of biscuits. |\n| **Administrative Apex** | **Central Board of Direct Taxes (CBDT)**. | **Central Board of Indirect Taxes and Customs (CBIC)**. |\n| **Major Taxes** | Personal Income Tax, Corporate Income Tax, Securities Transaction Tax (STT). | Goods and Services Tax (GST), Customs Duty, Central Excise on petroleum/liquor. |\n| **Tax-to-GDP Ratio** | ~6.0–6.5% of Indian GDP. | ~5.5–6.0% of Indian GDP (Total Indian Tax-to-GDP is ~11.5–12.0%). |',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'The GST Architecture (101st Amendment Act 2016)',
        body: '```mermaid\ngraph TD\n    GST["Goods and Services Tax (Dual GST Model)"]\n    GST --> INTRA["Intra-State Supply (Within same State)"]\n    GST --> INTER["Inter-State Supply (Between two States or Import)"]\n    INTRA --> CGST["CGST (Central GST) -> Goes to Center"]\n    INTRA --> SGST["SGST / UTGST -> Goes to State / UT"]\n    INTER --> IGST["IGST (Integrated GST) -> Collected by Center, apportioned to Destination State"]\n```\n\n### 1. Dual GST Structure\n* **CGST + SGST:** Shared equally on intra-state supplies (e.g. an 18% GST item splits into 9% CGST + 9% SGST).\n* **IGST (Article 269A):** Levied on inter-state trade and imports; collected by the Union and apportioned to the **Destination / Consuming State** (Destination-Based Principle).\n\n### 2. The Input Tax Credit (ITC) Mechanism\nPrevents the **Cascading Effect ("tax on tax")**: A manufacturer claiming ITC pays GST only on the incremental value added at each supply chain stage, deducting taxes already paid on raw material inputs.',
        order: 3,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'The GST Council Constitutional Voting Matrix (Article 279A)',
        body: 'Under **Article 279A**, the GST Council is a joint constitutional forum:\n* **Chairperson:** Union Finance Minister.\n* **Members:** Union Minister of State (Revenue/Finance) + State Finance/Taxation Ministers of all States.\n\n### The Weighted Voting Formula\n$$\\mathbf{\\text{Union Government Weight} = \\frac{1}{3} \\quad (33.33\\% \\text{ of total votes cast})}$$\n$$\\mathbf{\\text{All State Governments Combined Weight} = \\frac{2}{3} \\quad (66.67\\% \\text{ of total votes cast})}$$\n$$\\mathbf{\\text{Decision Threshold} = \\frac{3}{4} \\quad (75.00\\% \\text{ weighted majority required to pass any resolution})}$$\n\n* **Constitutional Balance:** The Center alone cannot pass a resolution (needs at least ~50% of States); States alone cannot pass a resolution without Central approval (Center has an effective veto).',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Taxation',
        body: '1. **Items OUTSIDE GST:** Five petroleum products (Crude oil, High-Speed Diesel, Motor Spirit/Petrol, Natural Gas, Aviation Turbine Fuel) and **Alcohol for human consumption** are currently **OUTSIDE GST**. Alcohol for human consumption is taxed exclusively by States (State Excise + State VAT).\n2. **Tax Buoyancy vs Tax Elasticity:**\n   * **Tax Buoyancy:** Measures tax revenue response to GDP growth **including the effects of tax rate revisions/measures**.\n   * **Tax Elasticity:** Measures tax revenue response to GDP growth **holding tax rates constant** (isolating pure automatic growth).\n3. **GST Compensation Cess:** Levied on demerit/sin/luxury goods (automobiles, tobacco, pan masala) under the *GST (Compensation to States) Act 2017*.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Direct and Indirect Taxes, GST Council, Input Tax Credit, Tax-to-GDP Ratio',
        notes: 'Classic Prelims questions on Article 279A voting weights, items outside GST, and Tax Buoyancy.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module A - Indian Taxation System & GST Framework',
        notes: 'Direct MCQs on Dual GST model, CGST/SGST/IGST mechanics, and direct vs indirect classification.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Direct Tax = Non-shiftable (Income Tax, Corp Tax - CBDT). Indirect Tax = Shiftable to consumer (GST, Customs - CBIC). Tax Buoyancy = (%Δ Tax Revenue) / (%Δ GDP). 101st CAA 2016 = Dual GST (CGST + SGST / IGST destination based). Input Tax Credit eliminates cascading tax. Article 279A GST Council: Center 1/3rd vote, States 2/3rd vote, 75% majority to pass. Outside GST: Alcohol for human consumption & 5 petroleum products.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Direct taxes (CBDT) fall directly on earners and are progressive; indirect taxes (CBIC) are shifted to consumers. The 101st Amendment Act 2016 instituted the Goods and Services Tax (GST) as a destination-based consumption levy with an Input Tax Credit mechanism. The GST Council (Article 279A) requires a 75% weighted majority (Center 1/3rd, States 2/3rd). Petroleum products and alcoholic beverages for human consumption remain outside GST.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Tax Classification: Direct (Income/Corporate Tax - CBDT) vs Indirect (GST/Customs/Excise - CBIC).\n2. Elasticity vs Buoyancy: Buoyancy = %Δ Tax / %Δ GDP (unadjusted for policy changes).\n3. Dual GST Framework: Intra-State (CGST + SGST 50:50) vs Inter-State (IGST Article 269A destination state apportionment).\n4. GST Council Voting (Article 279A): Center 1/3rd (33.3%), States 2/3rd (66.7%), 75% resolution passage threshold.\n5. Statutory Exclusions: Alcohol for human consumption (Entry 51 State list), 5 petroleum items (Article 279A(5)).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under Article 279A of the Constitution of India, what is the statutory voting weightage of the Central Government in the Goods and Services Tax (GST) Council?',
        options: [
          'One-half (50%) of the total votes cast in the meeting',
          'One-third (33.33%) of the total votes cast in the meeting',
          'Two-thirds (66.67%) of the total votes cast in the meeting',
          'Three-fourths (75%) of the total votes cast in the meeting',
        ],
        correctAnswer: 'One-third (33.33%) of the total votes cast in the meeting',
        explanation: 'Under Article 279A(9) of the Constitution of India, every decision of the GST Council is taken by a majority of not less than three-fourths (75%) of the weighted votes of the members present and voting. The vote of the Central Government has a weight of one-third (33.33%) of the total votes cast, and the votes of all State Governments combined have a weight of two-thirds (66.67%) of the total votes cast.',
        trapExplanation: 'Candidates confuse the Central voting weight (1/3rd) with the decision-making threshold (3/4th) or assume Center and States have a 50-50 split.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-ECO-21',
    topicOrder: 30,
    topicSlug: 'public-finance-union-budget-and-taxation',
    topicTitle: 'Public Finance, Union Budget Architecture & Taxation',
    topicDescription: 'FRBM Act 2003, Fiscal Consolidation Roadmap & N.K. Singh Committee Recommendations.',
    slug: 'frbm-act-2003-fiscal-consolidation-roadmap-nk-singh-committee-escape-clauses',
    title: 'FRBM Act 2003, Fiscal Consolidation Roadmap & N.K. Singh Committee Escape Clauses',
    shortDefinition: 'The statutory fiscal discipline architecture of India: the Fiscal Responsibility and Budget Management (FRBM) Act 2003, statutory fiscal rules, mandatory budget statement disclosures (Macroeconomic Framework, Fiscal Policy Strategy, Medium-Term Fiscal Policy), the N.K. Singh FRBM Review Committee recommendations (Debt-to-GDP anchor: 60% combined [40% Center / 20% States], Fiscal Deficit 3% of GDP, creation of a Fiscal Council), and statutory Escape Clauses under Section 4(2).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-ECO-21-01',
        statement: 'The Fiscal Responsibility and Budget Management (FRBM) Act 2003 was enacted to institutionalize fiscal discipline, eliminate the Revenue Deficit, and reduce the Fiscal Deficit to a sustainable ceiling of 3% of GDP, mandating the presentation of three statutory policy statements alongside the Annual Financial Statement.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Fiscal Responsibility and Budget Management Act, 2003 (Act No. 39 of 2003)',
        excerpt: 'FRBM Act 2003 mandates medium-term fiscal policy statements and 3% fiscal deficit target.',
      },
      {
        id: 'CLM-ECO-21-02',
        statement: 'The N.K. Singh FRBM Review Committee (Report submitted Jan 2017) recommended adopting General Government Debt-to-GDP ratio as the primary operational anchor (60% of GDP by 2023: 40% for Central Government and 20% for State Governments), accompanied by a Fiscal Deficit target of 3.0% of GDP and the establishment of an autonomous statutory Fiscal Council.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Report of the Committee on FRBM Architecture (Chaired by N.K. Singh, Jan 2017)',
        excerpt: 'N.K. Singh Committee: 60% combined debt anchor (40% Center / 20% States) and 3% fiscal deficit.',
      },
      {
        id: 'CLM-ECO-21-03',
        statement: 'Under Section 4(2) of the amended FRBM Act (Finance Act 2018), the Central Government can invoke an Escape Clause allowing a deviation from the fiscal deficit target up to 0.5% of GDP under specified emergency conditions: national security/act of war, national calamity, collapse of agriculture, structural reforms with fiscal implications, or a decline in real GDP growth by at least 3 percentage points below the 4-quarter average.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'FRBM Act, 2003 (Section 4(2) amended via Finance Act 2018)',
        excerpt: 'Escape clause allows up to 0.5% GDP fiscal deficit deviation for war, calamity, structural reforms, or sharp growth slowdown.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Tying Ulysses to the Mast: Why Governments Need Fiscal Rules',
        body: 'In democratic politics, elected governments face constant electoral incentives to spend public money on short-term subsidies and populist schemes while deferring tax increases, leading to structural debt accumulation.\n\nTo prevent this political cycle from threatening sovereign solvency, nations enact **Fiscal Rules**. In India, the **FRBM Act 2003** acts as a statutory self-binding commitment—forcing the government to transparently declare its debt trajectory, deficit limits, and medium-term strategy.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The Evolution of the FRBM Architecture',
        body: '### 1. Original FRBM Act 2003 Mandates\n* **Revenue Deficit:** Complete elimination ($\text{RD} = 0\\%$) by March 2009.\n* **Fiscal Deficit:** Reduction to **$3.0\\%$ of GDP** by March 2009 (annual reduction of at least $0.3\\%$ of GDP).\n* *Pause:* Targets were suspended in 2008-09 following the Global Financial Crisis fiscal stimulus.\n\n### 2. The N.K. Singh Committee Overhaul (2017)\nShifted focus from *annual deficit flows* to *total sovereign debt stock*:\n\n```mermaid\ngraph TD\n    NKS["N.K. Singh Committee Debt Anchor: Combined 60% Debt-to-GDP"]\n    NKS --> CEN["Central Government Debt: 40% of GDP"]\n    NKS --> STA["State Governments Debt: 20% of GDP"]\n    NKS --> FD["Fiscal Deficit Target: 3.0% of GDP"]\n    NKS --> FC["Autonomous Fiscal Council: Independent watchdog to review budget forecasts"]\n```',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'The Statutory Escape Clauses (Section 4(2))',
        body: 'Under the 2018 amendment to the FRBM Act, the Central Government is legally permitted to deviate by **up to 0.5 percentage points of GDP** from the annual fiscal deficit path under five specific trigger conditions:\n\n1. **National Security / Acts of War**.\n2. **National Calamity / Severe Disaster**.\n3. **Collapse of Agriculture Sector** affecting farm output.\n4. **Structural Reforms** in the economy with unanticipated fiscal implications (e.g. GST rollout or corporate tax cuts).\n5. **Severe Economic Slowdown:** A decline in Real GDP growth of at least **3 percentage points below the average of the previous 4 quarters**.\n\n*Note:* The escape clause was invoked during the COVID-19 pandemic, prompting the government to announce a revised consolidation path targeting a fiscal deficit below **4.5% of GDP by FY 2025-26**.',
        order: 3,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'Mandatory FRBM Statutory Statements Laid in Parliament',
        body: 'Under Section 3 of the FRBM Act, the Union Finance Minister must table three mandatory documents alongside the Annual Financial Statement:\n\n1. **Macroeconomic Framework Statement:** Assesses GDP growth rate, external balance, money supply, and inflation outlook.\n2. **Medium-Term Fiscal Policy Statement:** Sets 3-year rolling targets for Fiscal Deficit, Revenue Deficit, Tax-to-GDP ratio, and Total Outstanding Debt.\n3. **Fiscal Policy Strategy Statement:** Outlines the government\'s taxation and expenditure priorities, justification for borrowing, and consistency with FRBM rules.',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Fiscal Responsibility',
        body: '1. **N.K. Singh Debt Targets:** Remember the exact 40:20 split: **40% for the Central Government** and **20% for State Governments**, totaling **60% combined General Government Debt-to-GDP**.\n2. **Escape Clause Deviation Cap:** The statutory escape clause allows a deviation of **up to 0.5% of GDP**, NOT unlimited borrowing.\n3. **Fiscal Council Proposal:** The N.K. Singh Committee recommended establishing an independent statutory **Fiscal Council** to assess multi-year fiscal projections and audit compliance, though it has not yet been enacted into law.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: FRBM Act 2003, N.K. Singh Committee, Escape Clauses, Fiscal Consolidation',
        notes: 'High-frequency topic in Prelims & Mains regarding escape clauses and debt-to-GDP targets.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'PROFICIENT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module A - Fiscal Policy & FRBM Framework',
        notes: 'Direct MCQs on N.K. Singh recommendations (60% debt ceiling, 40% Center, 3% FD).',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'FRBM Act 2003 = Statutory fiscal discipline (3% Fiscal Deficit target). N.K. Singh Committee (2017) = Combined Debt-to-GDP anchor of 60% (40% Center / 20% States), 3% FD target, Fiscal Council. Section 4(2) Escape Clause = Allows up to 0.5% GDP deficit deviation for war, calamity, farm collapse, structural reform, or >=3% GDP growth drop. Mandatory FRBM statements = Macroeconomic Framework, Medium-Term Fiscal Policy, Fiscal Policy Strategy.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'The FRBM Act 2003 establishes statutory fiscal discipline. The N.K. Singh Committee (2017) recommended anchoring fiscal policy to a combined General Government Debt-to-GDP ratio of 60% (40% Center, 20% States) alongside a 3.0% Fiscal Deficit target. Section 4(2) escape clauses allow up to 0.5% GDP deviation under specified emergencies like war, natural disasters, or severe growth slowdowns.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Genesis: FRBM Act 2003 enacted to eliminate Revenue Deficit and cap Fiscal Deficit at 3%.\n2. N.K. Singh Committee (2017): Debt-to-GDP anchor: 60% combined (40% Center / 20% States) + 3.0% Fiscal Deficit + Fiscal Council.\n3. Section 4(2) Escape Triggers: War/security, national calamity, farm collapse, structural reforms, or 3 percentage point drop in real GDP growth (max 0.5% GDP deviation).\n4. Statutory Disclosures: Macroeconomic Framework, Medium-Term Fiscal Policy, Fiscal Policy Strategy statements.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'According to the recommendations of the N.K. Singh FRBM Review Committee (2017), what is the targeted General Government Debt-to-GDP ratio for India and its respective division between the Center and States?',
        options: [
          'Total 60% of GDP: 40% for the Central Government and 20% for State Governments',
          'Total 50% of GDP: 30% for the Central Government and 20% for State Governments',
          'Total 60% of GDP: 30% for the Central Government and 30% for State Governments',
          'Total 70% of GDP: 45% for the Central Government and 25% for State Governments',
        ],
        correctAnswer: 'Total 60% of GDP: 40% for the Central Government and 20% for State Governments',
        explanation: 'The N.K. Singh FRBM Review Committee recommended anchoring India\'s fiscal roadmap to a sustainable combined General Government Debt-to-GDP ratio of 60%, specifically divided into a debt ceiling of 40% of GDP for the Central Government and 20% of GDP for State Governments, accompanied by a 3% Fiscal Deficit target.',
        trapExplanation: 'Candidates confuse the 40:20 split with an equal 30:30 division or forget the 60% combined anchor.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  // =========================================================================
  // TOPIC 31: BANKING REGULATIONS, BASEL NORMS, NPAS & FINANCIAL INCLUSION
  // =========================================================================
  {
    id: 'CON-ECO-22',
    topicOrder: 31,
    topicSlug: 'banking-regulations-basel-norms-and-financial-inclusion',
    topicTitle: 'Banking Regulations, Basel Norms, NPAs & Financial Inclusion',
    topicDescription: 'Financial regulatory architecture (SEBI, IRDAI, PFRDA, IFSCA, FSDC), Basel I/II/III accords, Risk-Weighted Assets, CRAR, NPA classification, SARFAESI, IBC 2016, and Priority Sector Lending (PSL) targets.',
    slug: 'financial-regulatory-architecture-sebi-irdai-pfrda-ifsca-fsdc-inter-regulatory-coordination',
    title: 'Financial Regulatory Architecture: SEBI, IRDAI, PFRDA, IFSCA & FSDC Inter-Regulatory Coordination',
    shortDefinition: 'The sectoral regulatory architecture of India\'s financial system: the RBI (Banks, NBFCs, Money Market, Forex), SEBI (Capital Markets & Securities under SEBI Act 1992), IRDAI (Insurance under IRDA Act 1999), PFRDA (Pensions under PFRDA Act 2013), and IFSCA (International Financial Services Centres Authority Act 2019 at GIFT City), coordinated through the non-statutory Financial Stability and Development Council (FSDC) chaired by the Union Finance Minister.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-22-01',
        statement: 'India operates a sector-specific financial regulatory framework: RBI regulates banking, money markets, and forex; SEBI regulates securities and commodity derivatives; IRDAI regulates the insurance sector; PFRDA regulates pensions; and IFSCA acts as the unified unified regulator for financial institutions in International Financial Services Centres (GIFT City).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Act 1934; SEBI Act 1992; IRDA Act 1999; PFRDA Act 2013; IFSCA Act 2019',
        excerpt: 'Sectoral regulators govern respective financial segments with unified IFSCA for GIFT IFSC.',
      },
      {
        id: 'CLM-ECO-22-02',
        statement: 'The Financial Stability and Development Council (FSDC) was constituted in December 2010 as a non-statutory apex body chaired by the Union Finance Minister, with heads of all financial regulators (RBI, SEBI, IRDAI, PFRDA, IFSCA) as members, to monitor macroprudential stability, inter-regulatory coordination, and financial literacy.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Raghuram Rajan Committee on Financial Sector Reforms (2008); Ministry of Finance Notification (Dec 2010)',
        excerpt: 'FSDC is an apex non-statutory council chaired by Union Finance Minister for macroprudential stability.',
      },
      {
        id: 'CLM-ECO-22-03',
        statement: 'The FSDC Sub-Committee is chaired by the Governor of the Reserve Bank of India, serving as the operational arm to handle granular inter-regulatory disputes, systemic risk assessment, and financial inclusion monitoring.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'FSDC Sub-Committee Charter; RBI Financial Stability Report',
        excerpt: 'FSDC Sub-Committee is chaired by RBI Governor.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Guarding Against Regulatory Blindspots & Turf Wars',
        body: 'Modern financial products rarely fit into neat bureaucratic silos. When an insurance company sells a Unit Linked Insurance Plan (ULIP), is it an insurance product (IRDAI) or a mutual fund investment (SEBI)? When a bank sells mutual funds and pension schemes, which authority supervises the transaction?\n\nTo prevent regulatory overlaps, regulatory arbitrage, and systemic blindspots, India created specialized statutory regulators for each market segment, tied together through the apex **Financial Stability and Development Council (FSDC)**.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The 5 Sectoral Financial Regulators Matrix',
        body: '| Regulatory Body | Statutory Enactment | Regulatory Domain | Key Functions |\n| :--- | :--- | :--- | :--- |\n| **Reserve Bank of India (RBI)** | *RBI Act, 1934* & *Banking Regulation Act, 1949*. | Commercial Banks, Cooperative Banks, NBFCs, Money Market, Forex Market, Payment Systems. | Monetary policy, systemic bank solvency, CRR/SLR, licensing, DICGC deposit insurance. |\n| **Securities & Exchange Board of India (SEBI)** | *SEBI Act, 1992* (Narasimham Comm). | Stock Exchanges (BSE, NSE), Capital Markets, Mutual Funds, FPIs, Commodity Derivatives. | Investor protection, insider trading prevention, listing compliance, takeover code. |\n| **Insurance Regulatory & Development Authority (IRDAI)** | *IRDA Act, 1999* (Malhotra Comm). | Life & General Insurance Companies, Reinsurance (GIC Re), Insurance Intermediaries. | Policyholder protection, solvency margins, insurance penetration, FDI norms. |\n| **Pension Fund Regulatory & Development Authority (PFRDA)** | *PFRDA Act, 2013*. | National Pension System (NPS), Atal Pension Yojana (APY), Pension Fund Managers. | Regulates retirement income security and institutional pension fund investments. |\n| **International Financial Services Centres Authority (IFSCA)** | *IFSCA Act, 2019*. | Unified regulatory body for all financial entities located in IFSCs (GIFT City, Gandhinagar). | Exercises pooled powers of RBI, SEBI, IRDAI, and PFRDA for offshore international finance in India. |',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'Financial Stability and Development Council (FSDC) Architecture',
        body: '```mermaid\ngraph TD\n    FSDC["FSDC (Apex Council - Chaired by Union Finance Minister)"]\n    FSDC --> MEM["Members: RBI Governor, SEBI Chair, IRDAI Chair, PFRDA Chair, IFSCA Chair, Finance Secy, CEA, IT Secy"]\n    FSDC --> SUB["FSDC Sub-Committee (Operational Arm - Chaired by RBI Governor)"]\n```\n\n### Core Mandates of the FSDC\n1. **Macroprudential Supervision & Systemic Risk:** Early warning monitoring of sovereign and financial sector vulnerabilities (published in the bi-annual *Financial Stability Report*).\n2. **Inter-Regulatory Dispute Resolution:** Resolving jurisdictional boundary conflicts between regulators (e.g. ULIP disputes).\n3. **Financial Sector Development & Literacy:** Formulating the National Strategy for Financial Inclusion and National Strategy for Financial Education (NSFE).',
        order: 3,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'Statutory vs Non-Statutory Status: FSDC vs Regulatory Bodies',
        body: '* **RBI, SEBI, IRDAI, PFRDA, IFSCA:** Are **Statutory Autonomous Bodies** created through specific Acts of Parliament with statutory rule-making, licensing, inspection, and penal powers.\n* **FSDC:** Is an **Executive Non-Statutory Council** constituted by an executive notification of the Ministry of Finance in 2010 (replacing the earlier High-Level Coordination Committee on Financial Markets - HLCCFM). It has **no statutory penal or directive power** over individual financial institutions, operating via consensus.',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Regulatory Framework',
        body: '1. **FSDC Chairperson vs Sub-Committee Chairperson:** The main **FSDC is chaired by the Union Finance Minister**; the **FSDC Sub-Committee is chaired by the RBI Governor**.\n2. **Unified Regulator for GIFT City:** In GIFT IFSC, the RBI, SEBI, IRDAI, and PFRDA do **NOT** operate separately; **IFSCA is the sole unified regulator** exercising all their statutory powers in the IFSC zone.\n3. **Commodity Derivatives Regulation:** Regulated by **SEBI** (the Forward Markets Commission - FMC was merged into SEBI in September 2015).',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Financial Regulatory Bodies, FSDC, SEBI, IRDAI, IFSCA GIFT City',
        notes: 'Prelims questions on FSDC composition, non-statutory nature, and IFSCA mandate.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 & Paper 2 (PPB): Regulatory Framework of Financial Sector',
        notes: 'Core background on regulatory jurisdiction across banking, insurance, and securities.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Regulators: RBI (Banking/Forex), SEBI (Securities/Commodities - 1992 Act), IRDAI (Insurance - 1999 Act), PFRDA (Pensions - 2013 Act), IFSCA (GIFT City - 2019 Act). FSDC (2010): Apex NON-STATUTORY body chaired by Union Finance Minister for macroprudential stability. FSDC Sub-Committee is chaired by RBI Governor. Commodity derivatives merged under SEBI (2015).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'India\'s financial regulatory architecture features sectoral statutory regulators: RBI (banking), SEBI (capital markets), IRDAI (insurance), PFRDA (pensions), and IFSCA (unified regulator for GIFT City IFSC). Inter-regulatory coordination and systemic stability are overseen by the non-statutory Financial Stability and Development Council (FSDC) chaired by the Union Finance Minister, with an operational Sub-Committee chaired by the RBI Governor.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Sectoral Regulators: RBI (1934), SEBI (1992), IRDAI (1999), PFRDA (2013), IFSCA (2019).\n2. Unified Offshore Hub: IFSCA exercises pooled powers of all 4 domestic regulators within GIFT City IFSC.\n3. FSDC Structure: Chaired by Union Finance Minister; Members = Regulators heads + Secretaries. Non-statutory.\n4. Sub-Committee: Chaired by RBI Governor for granular systemic risk and dispute resolution.\n5. Reports: Bi-annual Financial Stability Report (FSR) assessing macro stress tests.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'With reference to the Financial Stability and Development Council (FSDC) in India, which of the following statements is CORRECT?',
        options: [
          'It is a statutory regulatory body established under the Financial Stability and Development Act, 2010',
          'It is chaired by the Governor of the Reserve Bank of India, and its Sub-Committee is chaired by the Union Finance Minister',
          'It is an apex non-statutory council chaired by the Union Finance Minister, with heads of all financial sector regulators (RBI, SEBI, IRDAI, PFRDA, IFSCA) as members',
          'It has the statutory authority to override regulatory guidelines issued by SEBI and the RBI in capital market disputes',
        ],
        correctAnswer: 'It is an apex non-statutory council chaired by the Union Finance Minister, with heads of all financial sector regulators (RBI, SEBI, IRDAI, PFRDA, IFSCA) as members',
        explanation: 'The FSDC was constituted by an executive order of the Government of India in December 2010 based on the Raghuram Rajan Committee recommendations. It is a non-statutory apex council chaired by the Union Finance Minister to foster inter-regulatory coordination and monitor systemic financial stability. Its Sub-Committee is chaired by the RBI Governor.',
        trapExplanation: 'Candidates assume FSDC is a statutory body or confuse the Chairperson of the main Council (Finance Minister) with the Chairperson of the Sub-Committee (RBI Governor).',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-ECO-23',
    topicOrder: 31,
    topicSlug: 'banking-regulations-basel-norms-and-financial-inclusion',
    topicTitle: 'Banking Regulations, Basel Norms, NPAs & Financial Inclusion',
    topicDescription: 'Prudential Regulations & Basel Accords: Basel I, II, III, Risk-Weighted Assets & Capital Adequacy (CRAR).',
    slug: 'prudential-regulations-basel-accords-basel-i-ii-iii-rwa-crar-capital-buffers',
    title: 'Prudential Regulations & Basel Accords: Basel I, II, III, Risk-Weighted Assets, CRAR & Capital Buffers',
    shortDefinition: 'The international prudential regulatory standards formulated by the Basel Committee on Banking Supervision (BCBS) at the Bank for International Settlements (BIS): evolution from Basel I (1988) and Basel II (Three Pillars: Minimum Capital, Supervisory Review, Market Discipline) to Basel III (post-2008 reforms), the Capital to Risk-Weighted Assets Ratio formula ($\\text{CRAR} = \\frac{\\text{Tier 1 Capital} + \\text{Tier 2 Capital}}{\\text{Total RWA}}$), Capital Conservation Buffer (CCB), Counter-Cyclical Capital Buffer (CCCB), Leverage Ratio, Liquidity Coverage Ratio (LCR), and Net Stable Funding Ratio (NSFR).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-ECO-23-01',
        statement: 'Under Basel III capital regulations as implemented by the Reserve Bank of India, Scheduled Commercial Banks in India are required to maintain a minimum Capital to Risk-Weighted Assets Ratio (CRAR) of 9.0% (higher than the Basel III minimum of 8.0%), plus a Capital Conservation Buffer (CCB) of 2.5% in Common Equity Tier 1 (CET1), making the total minimum regulatory capital requirement 11.5% of RWA.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Circular – Basel III Capital Regulations (2015/2024); BCBS Basel III Framework',
        excerpt: 'RBI mandates minimum CRAR of 9% + 2.5% CCB = 11.5% total capital (vs 8% Basel minimum).',
      },
      {
        id: 'CLM-ECO-23-02',
        statement: 'Bank capital is structured into Tier 1 Capital (Going-Concern Capital: CET1 [common equity, reserves] and Additional Tier 1 [AT1 perpetual bonds]) that absorbs losses while the bank remains operational, and Tier 2 Capital (Gone-Concern Capital: subordinated debt, general loan-loss provisions) that absorbs losses in liquidation.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'BCBS Basel III: A Global Regulatory Framework for More Resilient Banks; RBI Master Circular',
        excerpt: 'Tier 1 is going-concern capital (absorbs losses without failure); Tier 2 is gone-concern capital.',
      },
      {
        id: 'CLM-ECO-23-03',
        statement: 'Basel III introduced two mandatory quantitative liquidity standards: the Liquidity Coverage Ratio (LCR, requiring unencumbered High-Quality Liquid Assets to withstand a 30-day stressed liquidity outflow) and the Net Stable Funding Ratio (NSFR, requiring available stable funding to exceed required stable funding over a 1-year horizon: NSFR ≥ 100%).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Direction – Basel III Liquidity Returns (LCR & NSFR)',
        excerpt: 'LCR manages 30-day short-term liquidity stress; NSFR ensures 1-year structural funding stability (NSFR >= 100%).',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Why Banks Need an Equity Cushion for Risky Assets',
        body: 'A commercial bank is the most leveraged corporation in the modern economy: for every ₹100 in loans it grants, ₹90 to ₹95 comes from depositors\' money and only ₹5 to ₹10 comes from the bank\'s own shareholders\' equity.\n\nIf 6% of its borrowers default, the bank\'s entire equity is wiped out, threatening depositors. **Basel Capital Norms** mandate that banks hold a mandatory minimum capital cushion calibrated strictly to the *riskiness* of their loans (**Risk-Weighted Assets**), ensuring banks can survive massive default waves without requiring government bailouts.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The Capital to Risk-Weighted Assets Ratio (CRAR) Formula',
        body: '$$\\mathbf{\\text{CRAR} = \\frac{\\text{Total Regulatory Capital (Tier 1 + Tier 2)}}{\\text{Total Risk-Weighted Assets (Credit + Market + Operational Risk)}} \\times 100}$$' +
          '\n\n### What are Risk-Weighted Assets (RWA)?\nNot all assets carry equal default risk. Assets are assigned regulatory risk weights ($0\\% \\text{ to } 150\\%$):\n* **Cash & Government Securities (G-Secs):** **$0\\%$ Risk Weight** (Sovereign risk-free; ₹100 Cr G-Sec = ₹0 RWA).\n* **AAA-rated Corporate Bonds:** **$20\\% \\text{ Risk Weight}$** (₹100 Cr loan = ₹20 Cr RWA).\n* **Standard Housing Loans:** **$35\\% \\text{ to } 50\\% \\text{ Risk Weight}$**.\n* **Unsecured Personal Loans / Credit Cards:** **$125\\% \\text{ to } 150\\% \\text{ Risk Weight}$** (requires maximum capital cushion).',
        order: 2,
      },
      {
        type: 'COMPARISON',
        title: 'Tier 1 vs Tier 2 Capital Hierarchy',
        body: '| Capital Tier | Nature of Capital | Key Financial Instruments | Loss Absorption Timing |\n| :--- | :--- | :--- | :--- |\n| **Common Equity Tier 1 (CET1)** | Purest core equity capital. | Paid-up equity shares, statutory reserves, retained earnings, share premium. | **First line of defence:** Absorbs losses continuously during normal operations. |\n| **Additional Tier 1 (AT1)** | Going-concern hybrid debt capital. | Perpetual Non-Cumulative Preference Shares, **AT1 Bonds** (contain write-down or equity conversion triggers). | Absorbs losses when CET1 falls below pre-specified regulatory trigger (e.g. YES Bank crisis). |\n| **Tier 2 Capital** | Gone-concern supplementary capital. | Subordinated debt (maturity $\\ge 5$ yrs), general loan loss provisions (up to $1.25\\%$ of RWA). | Absorbs losses **only upon insolvency / liquidation** after equity is exhausted. |',
        order: 3,
      },
      {
        type: 'MECHANISM',
        title: 'Basel III Architecture: The 3 Pillars & New Buffers',
        body: '### 1. The Three Pillars of Basel\n* **Pillar 1:** Minimum Regulatory Capital Requirements (Credit, Market, Operational Risk).\n* **Pillar 2:** Supervisory Review Process (Internal Capital Adequacy Assessment Process - ICAAP by RBI).\n* **Pillar 3:** Market Discipline (Mandatory public disclosures of risk profiles and capital ratios).\n\n### 2. Basel III Specific Enhancements\n* **Capital Conservation Buffer (CCB):** Mandatory **2.5% CET1 buffer** above minimum capital to build cushions during economic upturns that can be drawn down in stress.\n* **Counter-Cyclical Capital Buffer (CCCB):** Floating buffer (**0% to 2.5%**) activated by RBI during excessive credit booms to prevent overheating.\n* **Domestic Systemically Important Banks (D-SIBs / "Too Big to Fail"):** SBI, HDFC Bank, ICICI Bank must maintain additional CET1 capital surcharges ($0.20\\% \\text{ to } 0.80\\%$).\n* **Liquidity Standards:**\n  1. **LCR ($\\ge 100\\%$):** 30-day survival under stressed cash outflows via High-Quality Liquid Assets.\n  2. **NSFR ($\\ge 100\\%$):** 1-year structural funding stability across balance sheet.',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Basel Norms',
        body: '1. **RBI Norms vs Global Basel Norms:** The RBI enforces **STRICTER norms than Basel standards**: Minimum CRAR globally is **8.0%**, but RBI mandates **9.0%** for Scheduled Commercial Banks (**12.0% for Small Finance Banks**).\n2. **AT1 Bonds Write-Down:** AT1 bonds are perpetual bonds with no maturity date; in financial emergencies, the RBI can legally write down AT1 bonds to zero before touching depositor funds (as occurred during the *YES Bank restructuring in 2020*).\n3. **G-Sec Risk Weight:** Government securities carry a **0% Risk Weight**, meaning banks do not need to set aside regulatory capital when investing in sovereign debt.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Basel III Accords, CRAR, Tier 1 vs Tier 2, D-SIBs, AT1 Bonds',
        notes: 'Frequent Prelims questions on CRAR formula, AT1 bonds, and LCR/NSFR definitions.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 & Paper 2 (PPB): Module B - Basel III Capital Adequacy & Risk Management',
        notes: 'High-weightage core exam unit: numerical RWA and CRAR computations, CCB rules, and 3 Pillars.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Basel Norms: BCBS at BIS (Switzerland). CRAR = Total Capital (Tier 1 + Tier 2) / Total RWA. India Minimum CRAR = 9.0% + 2.5% CCB = 11.5% total (vs 8% Basel global minimum). Tier 1 = Going-concern (CET1 equity + AT1 perpetual bonds). Tier 2 = Gone-concern (Subordinated debt). G-Sec risk weight = 0%. D-SIBs = SBI, HDFC, ICICI (additional capital surcharge). LCR = 30-day liquidity; NSFR = 1-year stable funding (both >= 100%).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Basel III strengthens bank resilience by linking regulatory capital to Risk-Weighted Assets (RWA). The RBI mandates a minimum CRAR of 9.0% plus a 2.5% Capital Conservation Buffer (11.5% total). Tier 1 capital absorbs losses on a going-concern basis, while Tier 2 absorbs losses in liquidation. Basel III also enforces LCR (30-day stressed liquidity) and NSFR (1-year funding stability), with D-SIBs holding higher equity surcharges.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Regulatory Authority: BCBS at BIS (Basel, Switzerland) -> Adopted and tightened by RBI.\n2. CRAR Identity: (Tier 1 + Tier 2 Capital) / (Credit RWA + Market RWA + Operational RWA) >= 9% (11.5% with CCB).\n3. Three Pillars: 1. Minimum Capital, 2. Supervisory Review (ICAAP), 3. Market Discipline (Disclosures).\n4. Buffers & Surcharges: CCB (2.5%), CCCB (0-2.5%), D-SIB surcharges (SBI, HDFC, ICICI).\n5. Liquidity Ratios: LCR (30-day HQLA buffer) & NSFR (1-year structural ratio >= 100%).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under the Reserve Bank of India\'s Basel III framework, what is the minimum total regulatory capital requirement (including the Capital Conservation Buffer) for Scheduled Commercial Banks in India?',
        options: [
          '8.0% of Risk-Weighted Assets (comprising 5.5% Tier 1 and 2.5% Tier 2)',
          '9.0% of Risk-Weighted Assets (excluding any capital buffers)',
          '11.5% of Risk-Weighted Assets (comprising 9.0% minimum CRAR plus 2.5% Capital Conservation Buffer)',
          '15.0% of Risk-Weighted Assets (mandated equally across all commercial and cooperative banks)',
        ],
        correctAnswer: '11.5% of Risk-Weighted Assets (comprising 9.0% minimum CRAR plus 2.5% Capital Conservation Buffer)',
        explanation: 'Under RBI regulations, Scheduled Commercial Banks in India must maintain a minimum CRAR of 9.0% (which is 1% higher than the international Basel III baseline of 8.0%), plus a mandatory Capital Conservation Buffer (CCB) of 2.5% maintained in Common Equity Tier 1 (CET1), bringing the total minimum regulatory capital requirement to 11.5% of Risk-Weighted Assets.',
        trapExplanation: 'Candidates confuse the global BCBS minimum (8% + 2.5% = 10.5%) with India\'s stricter RBI standard (9% + 2.5% = 11.5%).',
        difficulty: 'HARD',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-ECO-24',
    topicOrder: 31,
    topicSlug: 'banking-regulations-basel-norms-and-financial-inclusion',
    topicTitle: 'Banking Regulations, Basel Norms, NPAs & Financial Inclusion',
    topicDescription: 'Non-Performing Assets (NPAs), SMA Classification, Provisioning Norms, SARFAESI & IBC 2016 Resolution.',
    slug: 'non-performing-assets-sma-classification-provisioning-norms-sarfaesi-ibc-2016-resolution',
    title: 'Non-Performing Assets (NPAs), SMA Classification, Provisioning Norms, SARFAESI & IBC 2016 Resolution',
    shortDefinition: 'The resolution and provisioning framework for stressed bank assets: the 90-day overdue NPA definition (sub-categorized into Sub-Standard [≤12 months], Doubtful [D1, D2, D3], and Loss Assets), Special Mention Account (SMA-0, SMA-1, SMA-2) early warning categories, mandatory regulatory Provisioning Coverage Ratios (PCR), Prompt Corrective Action (PCA) framework, SARFAESI Act 2002 enforcement, and the Insolvency and Bankruptcy Code (IBC 2016) time-bound corporate resolution mechanism (CIRP: 180 + 90 days, 330-day outer ceiling, NCLT/IBBI).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-ECO-24-01',
        statement: 'A Non-Performing Asset (NPA) is a loan or advance where interest and/or installment of principal remains overdue for a period of more than 90 days in respect of a term loan (or 2 crop seasons for short-duration crops / 1 crop season for long-duration crops); early stress is tracked via Special Mention Accounts: SMA-0 (1-30 days overdue), SMA-1 (31-60 days), and SMA-2 (61-90 days).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Circular – Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP)',
        excerpt: '90-day overdue rule defines NPA; SMA-0 (1-30d), SMA-1 (31-60d), SMA-2 (61-90d) track early stress.',
      },
      {
        id: 'CLM-ECO-24-02',
        statement: 'NPAs are classified into three successive prudential categories requiring escalated provisioning: Sub-Standard Assets (NPA <= 12 months, 15% provision on secured portion / 25% unsecured), Doubtful Assets (exceeding 12 months in sub-standard: D1 [up to 1 yr: 25%], D2 [1-3 yrs: 40%], D3 [>3 yrs: 100%]), and Loss Assets (uncollectible/identified by bank or RBI auditors, 100% full write-off/provision).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI IRACP Norms; Banking Regulation Act, 1949',
        excerpt: 'Sub-Standard (<=12m), Doubtful (D1 25%, D2 40%, D3 100%), Loss (100% write-off).',
      },
      {
        id: 'CLM-ECO-24-03',
        statement: 'Under the Insolvency and Bankruptcy Code (IBC 2016), the Corporate Insolvency Resolution Process (CIRP) must be completed within 180 days (extendable by 90 days up to a mandatory outer ceiling of 330 days including litigation) by a Committee of Creditors (CoC) requiring a 66% majority vote to approve a resolution plan before the National Company Law Tribunal (NCLT).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Insolvency and Bankruptcy Code, 2016 (Sections 12 & 30(4)); IBBI Regulations',
        excerpt: 'IBC CIRP timeline is 180 + 90 days (330 days total ceiling); CoC resolution requires 66% voting share.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'From Evergreen Lending to Time-Bound Insolvency Resolution',
        body: 'For decades, Indian banking suffered from the **Twin Balance Sheet Problem**—over-leveraged corporate conglomerates and NPA-laden public sector banks. When loans turned bad, banks engaged in "evergreening" (giving fresh loans to repay old loans to avoid recognizing NPAs), while debt recovery tribunals dragged on for decades.\n\nThe modern regime established by the RBI\'s **Asset Quality Review (AQR 2015)** and the landmark **Insolvency and Bankruptcy Code (IBC 2016)** revolutionized credit discipline by shifting control from defaulting promoters to creditors.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The Asset Classification Ladder & SMA Early Warning Tiers',
        body: '```mermaid\ngraph TD\n    STD["Standard Asset: Regular payments"] -->|1-30 days overdue| SMA0["SMA-0 (1 to 30 days overdue)"]\n    SMA0 -->|31-60 days overdue| SMA1["SMA-1 (31 to 60 days overdue)"]\n    SMA1 -->|61-90 days overdue| SMA2["SMA-2 (61 to 90 days overdue)"]\n    SMA2 -->|>90 days overdue| NPA["NON-PERFORMING ASSET (NPA)"]\n    NPA --> SS["1. Sub-Standard: NPA for <= 12 Months (15% Provision)"]\n    SS --> D["2. Doubtful: NPA for > 12 Months (D1: 25%, D2: 40%, D3: 100%)"]\n    D --> LOSS["3. Loss Asset: Uncollectible (100% Provision / Write-off)"]\n```\n\n### Agricultural Loan NPA Rules\n* **Short Duration Crops (e.g. Paddy, Wheat):** Classified as NPA if overdue for **2 Crop Seasons**.\n* **Long Duration Crops (e.g. Sugarcane, Plantation crops >1 year):** Classified as NPA if overdue for **1 Crop Season**.',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'The Insolvency and Bankruptcy Code (IBC 2016) Process',
        body: 'The IBC 2016 provides a creditor-in-control, market-driven insolvency resolution framework:\n\n```mermaid\ngraph TD\n    DEFAULT["Default Occurs (Min Threshold: ₹1 Crore)"] --> NCLT["Adjudicating Authority (NCLT for Corporates, DRT for Individuals)"]\n    NCLT --> IRP["Insolvency Resolution Professional (IRP) takes management control"]\n    IRP --> COC["Committee of Creditors (CoC) formed (Financial Creditors)"]\n    COC --> PLAN["Resolution Plan bidding (66% voting majority required)"]\n    PLAN -->|Approved within 180+90 days| SUCCESS["New Buyer takes over company (Clean Slate)"]\n    PLAN -->|Failed / Expired 330 days| LIQ["Order of Liquidation (Waterfall Mechanism Section 53)"]\n```\n\n### Section 29A Disqualification\nDefaulting promoters and willful defaulters are **statutorily barred from bidding** for their own stressed assets, preventing corrupt buybacks at discounted prices.',
        order: 3,
      },
      {
        type: 'COMPARISON',
        title: 'IBC 2016 vs SARFAESI Act 2002 vs Bad Bank (NARCL)',
        body: '| Resolution Mechanism | Statutory Act / Entity | Key Feature | Speed & Enforcement Power |\n| :--- | :--- | :--- | :--- |\n| **SARFAESI Act 2002** | *Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002*. | Enables secured creditors to seize, take over management, and auction mortgaged collateral **WITHOUT court intervention** (60-day notice). | Fast asset recovery; applies only to secured loans (excludes agricultural land). |\n| **Insolvency and Bankruptcy Code (IBC)**| *Insolvency and Bankruptcy Code, 2016*. | Comprehensive company-wide revival or liquidation through NCLT; time-bound (180+90 days). | High systemic recovery rate; cleans corporate balance sheets permanently. |\n| **National Asset Reconstruction Company (NARCL / "Bad Bank")** | Set up in 2021 by PSBs with Government Guarantee (IDRCL operational arm). | Aggregates stressed loans $> ₹500 \\text{ Crore}$ from banks at 15% cash + 85% Security Receipts (SRs) backed by sovereign guarantee. | Cleans bank balance sheets instantly so banks can resume fresh lending. |',
        order: 4,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'Prompt Corrective Action (PCA) Framework',
        body: 'The RBI places weak banks under **Prompt Corrective Action (PCA)** when financial health deteriorates past specified risk thresholds:\n\n* **Three Trigger Parameters:**\n  1. **Capital (CRAR / CET1 ratio)** falls below regulatory minimum.\n  2. **Asset Quality (Net NPA ratio)** exceeds specified tolerance (e.g. $>6.0\\%$).\n  3. **Leverage Ratio** breaches minimum floor.\n* **Mandatory Restrictions under PCA:** Barred from opening new domestic/foreign branches, freeze on dividend distribution, curbs on executive compensation, and restrictions on expanding high-risk credit portfolios.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Non-Performing Assets, IBC 2016, SARFAESI, NARCL Bad Bank, PCA Framework',
        notes: 'High-frequency Prelims and Mains topic on 90-day rule, IBC timelines, Section 29A, and PCA triggers.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 & Paper 2 (PPB): Module B - NPA Management, Provisioning & Legal Recovery',
        notes: 'Core banking syllabus: exact provisioning percentages (15%, 25%, 40%, 100%), SMA-0/1/2 days, and SARFAESI 60-day notice.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'NPA = Overdue >90 days (Agri: 2 seasons short crop, 1 season long crop). SMA tiers: SMA-0 (1-30d), SMA-1 (31-60d), SMA-2 (61-90d). Sub-Standard (<=12m: 15%), Doubtful (D1 25%, D2 40%, D3 100%), Loss (100%). SARFAESI 2002 = Seize collateral without court (60-day notice, excludes farm land). IBC 2016 = 180 + 90 days (330-day outer ceiling), NCLT, 66% CoC vote, Sec 29A bars promoter bidding. PCA = Curbs on weak banks (Capital, Net NPA, Leverage).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'NPAs are loans overdue for more than 90 days, preceded by Special Mention Account early warnings (SMA-0, 1, 2). NPAs degrade from Sub-Standard to Doubtful (D1-D3) and Loss assets with increasing mandatory provisioning. Legal recovery relies on SARFAESI 2002 (seizing collateral without court order) and the IBC 2016 (creditor-in-control resolution via NCLT within 180+90 days with 66% CoC approval). Weak banks face RBI Prompt Corrective Action restrictions.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. NPA Criteria: 90-day overdue rule; Agri loans: 2 seasons (short crop) / 1 season (long crop).\n2. SMA Early Warning: SMA-0 (1-30 days), SMA-1 (31-60 days), SMA-2 (61-90 days).\n3. Provisioning Ladder: Standard (0.40%), Sub-Standard (15% secured / 25% unsecured), Doubtful (D1 25%, D2 40%, D3 100%), Loss (100%).\n4. IBC 2016 Framework: NCLT adjudicating authority, IRP takeover, CoC 66% approval, 180+90 day timeline (330-day outer limit), Section 29A promoter bar.\n5. PCA Framework: RBI restrictions on branch expansion and dividends triggered by Capital (CRAR), Net NPA, and Leverage breaches.',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under the Insolvency and Bankruptcy Code (IBC), 2016, what is the statutory voting majority required in the Committee of Creditors (CoC) to approve a corporate resolution plan for an insolvent company?',
        options: [
          'Simple majority of more than 50% of the voting share of financial creditors',
          'A majority of not less than 66% of the voting share of financial creditors',
          'A super-majority of not less than 75% of the voting share of all creditors',
          'Unanimous consent (100%) of all secured financial creditors',
        ],
        correctAnswer: 'A majority of not less than 66% of the voting share of financial creditors',
        explanation: 'Under Section 30(4) of the Insolvency and Bankruptcy Code 2016 (amended in 2018), the Committee of Creditors (comprising financial creditors) must approve a Corporate Insolvency Resolution Plan by a voting majority of NOT LESS THAN 66% of the voting share of financial creditors before submitting it to the NCLT for final approval.',
        trapExplanation: 'Originally the threshold was 75%, but the 2018 IBC amendment reduced it to 66% to prevent minority creditor holdouts from forcing viable firms into liquidation.',
        difficulty: 'HARD',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-ECO-25',
    topicOrder: 31,
    topicSlug: 'banking-regulations-basel-norms-and-financial-inclusion',
    topicTitle: 'Banking Regulations, Basel Norms, NPAs & Financial Inclusion',
    topicDescription: 'Financial Inclusion Framework: Priority Sector Lending (PSL) Targets, PSLCs, Lead Bank Scheme & PMJDY.',
    slug: 'financial-inclusion-framework-priority-sector-lending-psl-sub-targets-pslc-lead-bank-pmjdy',
    title: 'Financial Inclusion Framework: Priority Sector Lending (PSL) Targets, PSLCs, Lead Bank Scheme & PMJDY',
    shortDefinition: 'The multi-tiered statutory and institutional framework for universal financial inclusion in India: Priority Sector Lending (PSL) mandates (40% of ANBC for domestic SCBs and foreign banks with ≥20 branches, 75% for SFBs/RRBs), 8 eligible PSL categories and sub-targets (Agriculture 18%, Small/Marginal Farmers 10%, Micro Enterprises 7.5%, Weaker Sections 12%), Priority Sector Lending Certificates (PSLCs), the Lead Bank Scheme & Service Area Approach, and the JAM Trinity (PMJDY overdrafts and insurance).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-25-01',
        statement: 'Under RBI Master Directions on Priority Sector Lending (revised September 2020), domestic Scheduled Commercial Banks and Foreign Banks with 20 branches and above must allocate 40% of Adjusted Net Bank Credit (ANBC) or Credit Equivalent of Off-Balance Sheet Exposure (CEOBE) to Priority Sectors; Regional Rural Banks (RRBs) and Small Finance Banks (SFBs) must allocate 75% of ANBC.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Directions – Priority Sector Lending (PSL) – Targets and Classification (Updated 2020/2024)',
        excerpt: '40% PSL target for domestic commercial banks; 75% for RRBs and SFBs.',
      },
      {
        id: 'CLM-ECO-25-02',
        statement: 'Mandatory sub-targets within the 40% PSL quota for domestic commercial banks include: Total Agriculture (18% of ANBC), Small and Marginal Farmers (10% of ANBC), Micro Enterprises (7.5% of ANBC), and Weaker Sections (12% of ANBC).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Master Directions on Priority Sector Lending; RBI Bulletin',
        excerpt: 'Sub-targets: 18% Agriculture (10% SMF), 7.5% Micro Enterprises, 12% Weaker Sections.',
      },
      {
        id: 'CLM-ECO-25-03',
        statement: 'Priority Sector Lending Certificates (PSLCs) traded on the RBI\'s e-Kuber portal allow banks with surplus priority sector lending to sell compliance certificates to deficit banks without transferring underlying loan assets or credit risk, trading in four standard formats: PSLC Agriculture, PSLC Small & Marginal Farmers, PSLC Micro Enterprises, and PSLC General.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Reserve Bank of India Guidelines on Priority Sector Lending Certificates (PSLCs, 2016)',
        excerpt: 'PSLCs trade PSL compliance without loan transfer via e-Kuber portal.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Directing Credit to Nation-Building Foundations',
        body: 'If left purely to unconstrained commercial profit motives, commercial banks naturally concentrate their lending in wealthy metropolitan centers, multinational corporations, and high-income salaried urbanites, starving small farmers, micro-weavers, rural artisans, and renewable energy startups of credit.\n\n**Priority Sector Lending (PSL)** is the sovereign instrument designed to overcome this structural bias, mandating that every scheduled bank channel a guaranteed minimum proportion of its credit into the productive bedrock of the nation.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The 8 Eligible Priority Sectors & Target Allocations',
        body: 'Under RBI regulations, Priority Sector Lending comprises **8 designated categories**:\n\n1. **Agriculture** (Farm Credit, Agriculture Infrastructure, Ancillary Activities).\n2. **Micro, Small and Medium Enterprises (MSMEs)**.\n3. **Export Credit** (up to prescribed limits for domestic banks and foreign banks).\n4. **Education** (Loans to individuals for educational purposes up to ₹20 Lakh).\n5. **Housing** (Loans up to ₹35 Lakh in metropolitan centers / ₹25 Lakh in other centers for dwelling units costing up to ₹45L / ₹30L).\n6. **Social Infrastructure** (Schools, healthcare facilities, drinking water, sanitation up to ₹5 Cr per borrower).\n7. **Renewable Energy** (Solar/wind installations up to ₹30 Cr for commercial entities / ₹10 Lakh for individual households).\n8. **Others** (Loans to SHGs/JLGs, distressed persons, state-sponsored SC/ST development corporations).',
        order: 2,
      },
      {
        type: 'COMPARISON',
        title: 'PSL Targets Matrix across Bank Categories',
        body: '| Bank Category | Overall PSL Target (% of ANBC) | Agriculture Sub-Target | Micro Enterprises Sub-Target | Weaker Sections Sub-Target |\n| :--- | :--- | :--- | :--- | :--- |\n| **Domestic Commercial Banks & Foreign Banks ($\\ge 20$ branches)** | **40% of ANBC** | **18%** (with **10%** for Small & Marginal Farmers). | **7.5%** | **12%** |\n| **Foreign Banks ($< 20$ branches)** | **40% of ANBC** | No mandatory sub-targets (can achieve via any category, max 32% in exports). | No mandatory sub-target. | No mandatory sub-target. |\n| **Regional Rural Banks (RRBs)** | **75% of ANBC** | **18%** (with **10%** for Small & Marginal Farmers). | **7.5%** | **15%** |\n| **Small Finance Banks (SFBs)** | **75% of ANBC** | **18%** (with **10%** for Small & Marginal Farmers). | **7.5%** | **12%** |\n| **Primary Urban Co-op Banks (UCBs)** | **75% of ANBC** (phased up to 2026). | No mandatory sub-target. | **7.5%** | **12%** |',
        order: 3,
      },
      {
        type: 'MECHANISM',
        title: 'Priority Sector Lending Certificates (PSLCs) & PSL Shortfalls',
        body: '```mermaid\ngraph TD\n    SURPLUS["Bank A: Surplus Agriculture Lending (e.g. 24% vs 18% target)"]\n    DEFICIT["Bank B: Shortfall in Agriculture Lending (e.g. 14% vs 18% target)"]\n    SURPLUS -->|Sells PSLC-Agriculture certificate on RBI e-Kuber| DEFICIT\n    DEFICIT -->|Pays market-determined fee premium| SURPLUS\n    NOTE["Crucial Rule: Underlying loan and default risk remain 100% with Bank A. Only compliance credit is traded!"]\n```\n\n### What Happens if a Bank Still Fails PSL Targets?\nIf a commercial bank fails to meet its overall or sub-target PSL quotas even after purchasing PSLCs, the shortfall amount is **compulsorily deposited with the Rural Infrastructure Development Fund (RIDF)** at NABARD, or designated funds at SIDBI, NHB, and MUDRA at penal low-interest yields.',
        order: 4,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'Lead Bank Scheme, Service Area Approach & PMJDY',
        body: '### 1. Lead Bank Scheme (F.K.F. Nariman Committee, 1969)\n* Assigns a designated "Lead Bank" to each district to coordinate credit planning among commercial banks, RRBs, and cooperative institutions through the **District Consultative Committee (DCC)** and prepare the Annual Credit Plan (ACP).\n* **Service Area Approach (SAA - 1989):** Assigns a cluster of 15–25 contiguous villages to a specific bank branch for concentrated rural credit development.\n\n### 2. Pradhan Mantri Jan Dhan Yojana (PMJDY - August 2014)\nUniversal banking access on the JAM Trinity bedrock:\n* **Zero-Balance Accounts** with RuPay debit card.\n* **Overdraft Facility:** Up to **₹10,000** per eligible household (no collateral, treated as PSL lending under Weaker Sections).\n* **Accidental Insurance Cover:** **₹2 Lakh** on RuPay cards issued post-August 2018.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Priority Sector Lending Targets, Financial Inclusion, PMJDY, PSLCs',
        notes: 'High-frequency Prelims questions on PSL targets (40% vs 75%), PSLC mechanics, and PMJDY OD limit.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 & Paper 2 (PPB): Module C - Priority Sector Lending & Government Sponsored Schemes',
        notes: 'Direct numerical questions on ANBC calculations, exact sub-targets (18% agri, 10% SMF, 7.5% micro), and Lead Bank roles.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'PSL Targets: Domestic Commercial Banks = 40% of ANBC. SFBs & RRBs = 75% of ANBC. Sub-targets: Agriculture = 18% (Small/Marginal Farmers = 10%), Micro Enterprises = 7.5%, Weaker Sections = 12%. PSLCs: Trade PSL compliance on RBI e-Kuber without loan transfer. PSL shortfall deposited in RIDF (NABARD). Lead Bank Scheme (1969 Nariman Comm). PMJDY = ₹10,000 Overdraft facility + ₹2 Lakh RuPay accident insurance.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Priority Sector Lending ensures bank credit flows to 8 vital sectors. Domestic banks must allocate 40% of ANBC (SFBs/RRBs 75%), including sub-targets for Agriculture (18%, with 10% for Small/Marginal Farmers), Micro Enterprises (7.5%), and Weaker Sections (12%). Banks trade compliance certificates via PSLCs on RBI e-Kuber. Unresolved shortfalls are deposited into NABARD\'s RIDF. PMJDY provides zero-balance accounts with a ₹10,000 overdraft facility.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Targets: Commercial/Foreign >=20 branches = 40% ANBC; SFBs/RRBs = 75% ANBC.\n2. Sub-Targets: Agriculture (18%), Small & Marginal Farmers (10%), Micro Enterprises (7.5%), Weaker Sections (12%).\n3. PSLCs: 4 categories (Agri, SMF, Micro, General) traded on e-Kuber without credit risk transfer.\n4. Default Penalties: Compulsory contribution to RIDF (NABARD), Micro Fund (SIDBI), Housing Fund (NHB).\n5. Inclusion Ecosystem: Lead Bank Scheme (1969 Nariman), Service Area Approach (1989), PMJDY (₹10,000 OD, ₹2L insurance).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'What is the mandatory sub-target for lending to "Small and Marginal Farmers" within the overall Priority Sector Lending quota for domestic Scheduled Commercial Banks in India?',
        options: [
          '5.0% of Adjusted Net Bank Credit (ANBC)',
          '7.5% of Adjusted Net Bank Credit (ANBC)',
          '10.0% of Adjusted Net Bank Credit (ANBC)',
          '18.0% of Adjusted Net Bank Credit (ANBC)',
        ],
        correctAnswer: '10.0% of Adjusted Net Bank Credit (ANBC)',
        explanation: 'Under the revised RBI Priority Sector Lending guidelines, within the overall 18% Agriculture target, domestic Scheduled Commercial Banks have a mandatory, distinct sub-target of 10.0% of ANBC (or CEOBE) specifically earmarked for Small and Marginal Farmers (farmers holding land up to 2 hectares, tenant farmers, and landless agricultural laborers).',
        trapExplanation: 'Candidates confuse the total agriculture target (18%) or the micro-enterprises target (7.5%) with the small and marginal farmers sub-target (10%).',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },

  // =========================================================================
  // TOPIC 32: EXTERNAL SECTOR, BALANCE OF PAYMENTS & INTERNATIONAL TRADE
  // =========================================================================
  {
    id: 'CON-ECO-26',
    topicOrder: 32,
    topicSlug: 'external-sector-balance-of-payments-and-trade',
    topicTitle: 'External Sector, Balance of Payments & International Trade',
    topicDescription: 'Balance of Payments (BoP) accounting framework (Current Account, Capital Account, Errors & Omissions), Current Account Deficit (CAD), Foreign Exchange Reserves management, NEER vs REER, FDI vs FPI, and Bretton Woods / WTO institutions.',
    slug: 'balance-of-payments-framework-current-account-capital-account-cad-forex-reserves',
    title: 'Balance of Payments (BoP) Framework: Current Account, Capital Account, CAD & Forex Reserves',
    shortDefinition: 'The macroeconomic accounting framework recording all economic transactions between residents of a country and the rest of the world (IMF BPM6 manual): the Current Account (Merchandise Goods Trade, Services/Invisibles, Primary Income, Secondary Transfers/Remittances), the Capital Account (FDI, FPI, External Commercial Borrowings, NRI Deposits, Banking Capital), Errors & Omissions, the Overall BoP Balance, and the Foreign Exchange Reserves buffer (FCA, Gold, SDR, RTP).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-26-01',
        statement: 'The Balance of Payments (BoP) is a double-entry accounting ledger of all economic transactions between residents of India and non-residents during a given period; the overall BoP balance must mathematically sum to zero: Current Account Balance + Capital Account Balance + Financial Account Balance + Errors & Omissions = Δ Forex Reserves.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'IMF Balance of Payments and International Investment Position Manual (BPM6); RBI Manual on Financial and Banking Statistics',
        excerpt: 'BoP double-entry accounting identity: Current Account + Capital Account + Errors & Omissions = Change in Reserves.',
      },
      {
        id: 'CLM-ECO-26-02',
        statement: 'The Current Account records transactions in real economic resources: Trade in Goods (Merchandise Balance), Trade in Services (Software, Tourism, BPO), Primary Income (compensation of employees, investment profit/dividend/interest flows), and Secondary Income / Transfers (workers\' personal remittances, grants); a deficit in the Current Account (CAD) reflects that national domestic investment exceeds national domestic savings: CAD = (I - S) + (G - T).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NCERT Class 12 Macroeconomics, Ch 6; RBI Bulletin on India\'s Balance of Payments',
        excerpt: 'Current Account = Merchandise Balance + Services + Net Primary Income + Net Secondary Transfers.',
      },
      {
        id: 'CLM-ECO-26-03',
        statement: 'India\'s Foreign Exchange Reserves managed by the Reserve Bank of India consist of exactly four components: Foreign Currency Assets (FCA — US Dollars, Euros, Yen, Sovereign Bonds), Gold Bullion, Special Drawing Rights (SDR allocated by IMF), and Reserve Tranche Position (RTP) in the IMF.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Reserve Bank of India Weekly Statistical Supplement; Section 17 & 33 of RBI Act 1934',
        excerpt: 'Forex Reserves = Foreign Currency Assets (largest) + Gold + SDRs + Reserve Tranche Position in IMF.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Nation\'s Cross-Border Financial Ledger',
        body: 'Every time India imports crude oil from Saudi Arabia, an IT company in Bengaluru exports software to a New York bank, an Indian worker in Dubai sends money home to Kerala, or a Silicon Valley fund invests in an Indian tech startup, foreign currency flows across borders.\n\nThe **Balance of Payments (BoP)** is the double-entry accounting statement that systematically tracks every single one of these cross-border inflows and outflows.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The Two Halves of the BoP: Current Account vs Capital Account',
        body: '```mermaid\ngraph TD\n    BOP["Balance of Payments (BoP)"]\n    BOP --> CA["1. CURRENT ACCOUNT (Real Flows - No Future Liability)"]\n    BOP --> KA["2. CAPITAL & FINANCIAL ACCOUNT (Asset/Liability Claims)"]\n    CA --> G["A. Merchandise Goods Trade (Exports - Imports)"]\n    CA --> S["B. Invisibles: Services (Software, Travel, Business services)"]\n    CA --> PI["C. Primary Income: Interest, Dividends, Profits (Factor earnings)"]\n    CA --> SI["D. Secondary Income: Workers\' Private Remittances & Gifts"]\n    KA --> FDI["A. Foreign Direct Investment (FDI - Stable equity)"]\n    KA --> FPI["B. Foreign Portfolio Investment (FPI / FII - Hot money)"]\n    KA --> ECB["C. External Commercial Borrowings (Corporate foreign debt)"]\n    KA --> NRI["D. Banking Capital & NRI Deposits (FCNR, NRE, NRO)"]\n```',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'India\'s Structural BoP Equation & Current Account Deficit (CAD)',
        body: 'India exhibits a unique structural BoP pattern:\n\n$$\\mathbf{\\text{Current Account Balance (CAD)} = \\text{Merchandise Trade Deficit} + \\text{Net Invisibles Surplus}}$$\n\n1. **Large Merchandise Deficit:** India runs a massive goods deficit (driven by heavy crude oil, electronics, gold, and coking coal imports).\n2. **Large Invisibles Surplus:** India runs a massive surplus in software service exports (~\\$150B+) and **Private Worker Remittances** (India is the world\'s #1 recipient of remittances, exceeding **\\$120 Billion annually**).\n3. **Net CAD Result:** The services and remittance surplus covers ~60–75% of the merchandise deficit, leaving a manageable **Current Account Deficit (CAD) typically around 1.0% to 2.0% of GDP**.\n4. **Financing CAD:** This CAD is financed by the surplus on the **Capital Account** (FDI, FPI, ECBs). Any surplus leftover adds to **Foreign Exchange Reserves**.',
        order: 3,
      },
      {
        type: 'COMPARISON',
        title: 'The 4 Components of India\'s Foreign Exchange Reserves',
        body: '| Forex Component | Defining Characteristics | Approximate Share |\n| :--- | :--- | :--- |\n| **1. Foreign Currency Assets (FCA)** | Major convertible currencies (USD, EUR, GBP, JPY) invested in sovereign bonds of foreign central banks and BIS deposits. | **~85–88%** (Single largest component). |\n| **2. Gold Reserves** | Physical gold bullion held in RBI vaults in Nagpur/Mumbai and Bank of England. | **~8–10%** (Strategic diversification). |\n| **3. Special Drawing Rights (SDR)** | Supplementary international reserve asset created by the IMF (basket of USD, EUR, CNY, JPY, GBP). | **~2–3%** |\n| **4. Reserve Tranche Position (RTP)** | Quota subscription portion deposited by India with the IMF in liquid foreign currency, withdrawable unconditionally on demand. | **~0.5–1%** |',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in BoP Accounting',
        body: '1. **Remittances vs FDI Classification:** Personal money sent home by non-resident Indian workers to their families is a **Secondary Income Transfer (Current Account)**, NOT Capital Account! Investments in property or businesses by NRIs fall under the **Capital Account**.\n2. **Autonomous vs Accommodating Transactions:**\n   * **Autonomous Transactions ("Above the Line"):** International economic transactions undertaken for independent economic motives (profit, trade, tourism).\n   * **Accommodating Transactions ("Below the Line"):** Central bank reserve transactions undertaken strictly to bridge the gap caused by autonomous imbalances (balancing the BoP).\n3. **Import Cover:** Number of months of prospective imports that current foreign exchange reserves can finance (India\'s import cover is robust at ~10–11 months).',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: External Sector, Balance of Payments, CAD, Forex Reserves Components',
        notes: 'Classic Prelims core: 4 components of Forex Reserves, Current vs Capital account items, and autonomous vs accommodating transactions.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module B - External Sector & Balance of Payments',
        notes: 'Direct MCQs on BPM6 manual, remittance accounting, and merchandise vs invisibles balance.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'BoP Identity: Current Account + Capital Account + Errors/Omissions = Change in Forex Reserves. Current Account = Goods Trade + Services + Primary Income + Secondary Transfers (Remittances). Capital Account = FDI, FPI, ECBs, NRI Deposits. India: High Goods Deficit + High Services/Remittance Surplus = Manageable CAD (1-2% GDP). 4 Forex Components: FCA (largest ~88%), Gold, SDR, RTP in IMF. Autonomous = Above the line; Accommodating = Below the line.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'The Balance of Payments (BoP) records all cross-border financial and economic transactions. The Current Account covers goods trade, services, factor incomes, and unilateral transfers (remittances). The Capital Account covers FDI, FPI, foreign commercial borrowings, and NRI deposits. India\'s Current Account Deficit (CAD) is funded by capital inflows, with the surplus accumulating in Forex Reserves across 4 components: FCA, Gold, SDRs, and RTP.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Double Entry Identity: Current Account + Capital Account + Financial Account + Errors/Omissions = Δ Reserves.\n2. Current Account Anatomy: Merchandise Goods + Services (IT/BPO) + Primary Income (profits/dividends) + Secondary Income (remittances).\n3. Capital Account Anatomy: Foreign Investment (FDI / FPI) + External Debt (ECB) + Banking Capital (FCNR/NRE accounts).\n4. Forex Reserves Matrix: 1. Foreign Currency Assets (FCA), 2. Gold, 3. SDR, 4. Reserve Tranche Position (RTP).\n5. Economic Duality: Autonomous (profit-driven trade) vs Accommodating (central bank reserve balancing).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following is NOT one of the four official constituent components of India\'s Foreign Exchange Reserves held and managed by the Reserve Bank of India?',
        options: [
          'Foreign Currency Assets (FCA)',
          'Gold Reserves held by the Reserve Bank of India',
          'Special Drawing Rights (SDR) allocated by the International Monetary Fund',
          'Sovereign Gold Bonds (SGBs) issued to domestic retail investors',
        ],
        correctAnswer: 'Sovereign Gold Bonds (SGBs) issued to domestic retail investors',
        explanation: 'India\'s Foreign Exchange Reserves consist of exactly four components: (1) Foreign Currency Assets (FCA), (2) Physical Gold held by the RBI, (3) Special Drawing Rights (SDR) with the IMF, and (4) Reserve Tranche Position (RTP) in the IMF. Sovereign Gold Bonds (SGBs) are domestic sovereign debt liabilities denominated in grams of gold and sold to resident Indian investors, and are NOT part of the foreign exchange reserves.',
        trapExplanation: 'Candidates confuse the RBI\'s physical gold reserves with Sovereign Gold Bonds (a domestic government debt instrument).',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-ECO-27',
    topicOrder: 32,
    topicSlug: 'external-sector-balance-of-payments-and-trade',
    topicTitle: 'External Sector, Balance of Payments & International Trade',
    topicDescription: 'Exchange Rate Regimes: Fixed, Floating, LERMS, NEER vs REER & Rupee Convertibility.',
    slug: 'exchange-rate-regimes-lerms-neer-reer-rupee-convertibility-tarapore-committee-roadmaps',
    title: 'Exchange Rate Regimes: Fixed, Floating, LERMS, NEER vs REER & Rupee Convertibility Roadmaps',
    shortDefinition: 'The mechanics of foreign exchange determination: Fixed/Pegged vs Floating/Flexible vs Managed Float exchange rates, the Liberalised Exchange Rate Management System (LERMS, March 1992) and transition to full Unified Market-Determined Exchange Rate (March 1993), Nominal Effective Exchange Rate (NEER) vs Real Effective Exchange Rate (REER: trade-weighted relative price competitiveness), and Rupee Convertibility (Full Current Account Convertibility under Article VIII of IMF, August 1994 vs Partial Capital Account Convertibility governed by Tarapore Committee roadmaps).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-ECO-27-01',
        statement: 'India shifted from a pegged basket system to market-determined exchange rates through the Liberalised Exchange Rate Management System (LERMS / Dual Exchange Rate) in March 1992, achieving a unified, market-determined managed floating exchange rate regime in March 1993 where the RBI intervenes only to curb excessive volatility without defending a fixed target level.',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'C. Rangarajan, The Exchange Rate System: Some Issues (RBI Bulletin, 1993); Economic Survey',
        excerpt: 'LERMS dual rate in 1992 -> Unified managed float in March 1993.',
      },
      {
        id: 'CLM-ECO-27-02',
        statement: 'The Real Effective Exchange Rate (REER) is a trade-weighted index measuring the price competitiveness of a country\'s currency against a basket of currencies of major trading partners, adjusting the Nominal Effective Exchange Rate (NEER) for domestic versus foreign relative inflation differentials: REER = NEER * (Domestic Price Index / Foreign Price Index); a REER > 100 indicates currency overvaluation and export competitiveness loss.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'RBI Bulletin on Revision of NEER/REER Baskets (40-currency basket, Base 2015-16=100)',
        excerpt: 'REER adjusts NEER for inflation differentials; REER > 100 reflects currency overvaluation.',
      },
      {
        id: 'CLM-ECO-27-03',
        statement: 'India accepted Article VIII status of the IMF in August 1994, establishing Full Current Account Convertibility (freedom to convert currency for merchandise trade, services, travel, and remittances); Capital Account Convertibility remains partial and calibrated, following conditions outlined by the S.S. Tarapore Committees (1997 & 2006).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'IMF Articles of Agreement (Article VIII); S.S. Tarapore Committee on Capital Account Convertibility (1997 & 2006)',
        excerpt: 'Full current account convertibility adopted Aug 1994; capital account convertibility remains partial under Tarapore preconditions.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Price of a Currency: Autonomy vs Openness',
        body: 'The price of a nation\'s currency relative to foreign currencies dictates the real purchasing power of its citizens when buying imported oil, and determines the price competitiveness of its domestic factories selling textiles abroad.\n\nAccording to the **Macroeconomic Impossible Trinity (Mundell-Fleming Trilemma)**, an economy cannot simultaneously maintain:\n1. A **Fixed Exchange Rate**,\n2. **Free International Capital Mobility**, and\n3. An **Independent Sovereign Monetary Policy**.\nA country must choose any two and sacrifice the third.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'Evolution of India\'s Exchange Rate System & LERMS (1992)',
        body: '### Historical Evolution\n* **1947–1975:** Par value system pegged strictly to the British Pound Sterling.\n* **1975–1992:** Pegged to an undisclosed trade-weighted currency basket.\n* **March 1992 (LERMS - Dual Exchange Rate System):** Exporters surrendered 40% of export proceeds at an official fixed rate to finance sovereign oil/fertilizer imports, while 60% was converted at the market rate.\n* **March 1993 (Unified Managed Float):** LERMS was abolished and replaced with a unified market exchange rate.\n* **Current Regime:** **Managed Float ("Dirty Float")** — the Rupee fluctuates based on market demand and supply, while the RBI intervenes in the spot and forward forex markets to dampen extreme speculative volatility.',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'NEER vs REER: Measuring True Export Competitiveness',
        body: '$$\\mathbf{\\text{NEER} = \\sum_{i=1}^{n} w_i \\times e_i} \\quad \\text{(Trade-weighted nominal exchange rate)}$$\n$$\\mathbf{\\text{REER} = \\text{NEER} \\times \\left( \\frac{P_{\\text{domestic}}}{P_{\\text{foreign}}} \\right)}$$\n\n* **RBI Basket:** The RBI compiles 6-currency and **40-currency trade-weighted baskets** (Base year 2015-16 = 100).\n* **Interpreting REER Movements:**\n  * **$\\text{REER} = 100$:** Currency is fairly valued at purchasing power parity.\n  * **$\\text{REER} > 100$ (Overvaluation):** Indian goods are becoming more expensive relative to trading partners $\\rightarrow$ **Exports lose price competitiveness**.\n  * **$\\text{REER} < 100$ (Undervaluation):** Indian goods are cheaper in global markets $\\rightarrow$ **Export price competitiveness increases**.',
        order: 3,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'Current Account vs Capital Account Convertibility',
        body: '| Parameter | Current Account Convertibility | Capital Account Convertibility (CAC) |\n| :--- | :--- | :--- |\n| **Definition** | Freedom to convert domestic currency into foreign currency for **trade in goods, services, travel, education, and remittances**. | Freedom to convert domestic currency into foreign assets/property and vice versa **without regulatory limits**. |\n| **Status in India** | **FULL CONVERTIBILITY** (Adopted in **August 1994** under Article VIII of IMF). | **PARTIAL & CALIBRATED** (Inflows liberalized for FDI; strict caps on debt and outward resident transfers). |\n| **Liberalised Remittance Scheme (LRS)**| Fully permitted. | Indian resident individuals can remit up to **\\$250,000 per financial year** for permitted capital/current transactions. |\n| **Tarapore Committee Preconditions (1997/2006)**| Preconditions fulfilled. | Mandated 3 preconditions before full CAC: Gross NPAs $< 3\\%$, Fiscal Deficit $< 3.5\\%$, and Inflation $3-5\\%$. |',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Exchange Rate Concepts',
        body: '1. **Depreciation vs Devaluation:**\n   * **Devaluation:** An official administrative reduction in currency value by the government/central bank under a **Fixed Exchange Rate** system.\n   * **Depreciation:** A fall in currency value driven by market forces of demand and supply under a **Floating Exchange Rate** system.\n2. **REER Formula Direction:** When domestic inflation in India is higher than foreign inflation, the **REER rises (appreciates in real terms)**, making exports uncompetitive even if the nominal Rupee-Dollar rate is depreciating!\n3. **LRS Limit:** The Liberalised Remittance Scheme (LRS) ceiling for Indian resident individuals is **\\$250,000 per financial year**.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: Exchange Rate Mechanics, NEER vs REER, Tarapore Committee, Rupee Convertibility',
        notes: 'Classic Prelims questions on REER formula, LERMS history, and Current vs Capital convertibility.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module B - Foreign Exchange Markets & Convertibility',
        notes: 'Direct MCQs on LRS limit ($250k), Tarapore preconditions, and NEER/REER baskets.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Exchange Rates: LERMS (1992 dual rate) -> Unified Managed Float (March 1993). NEER = Trade-weighted nominal exchange rate. REER = NEER adjusted for domestic vs foreign inflation differentials. REER > 100 means currency overvaluation (exports lose competitiveness). Full Current Account Convertibility = August 1994 (IMF Art VIII). Capital Account Convertibility = Partial (Tarapore Committee preconditions: NPAs < 3%, FD < 3.5%). LRS limit = $250,000/yr.',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'India transitioned to a market-determined managed floating exchange rate regime in March 1993. The Real Effective Exchange Rate (REER) measures trade-weighted export price competitiveness adjusted for inflation differentials. India achieved full Current Account Convertibility in August 1994 under IMF Article VIII, while maintaining calibrated partial Capital Account Convertibility governed by Tarapore Committee benchmarks and the $250,000 annual LRS ceiling.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Impossible Trinity: Floating rate + Sovereign monetary policy + Managed capital flows.\n2. Evolutionary Milestones: Pegged -> LERMS dual rate (1992) -> Managed float (1993) -> IMF Art VIII (1994).\n3. Indices: NEER (40-currency nominal basket) vs REER (NEER * P_domestic / P_foreign). REER > 100 indicates overvaluation.\n4. Convertibility Duality: Full Current Account vs Partial Capital Account (Tarapore 1997 & 2006 roadmaps).\n5. Retail Window: Liberalised Remittance Scheme ($250,000 per financial year per resident).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'If the domestic inflation rate in India is persistently higher than the inflation rate of its major trading partner countries, what will be the effect on the Real Effective Exchange Rate (REER), assuming nominal exchange rates remain unchanged?',
        options: [
          'The REER will decrease, indicating that Indian exports have become more price competitive',
          'The REER will increase (appreciate in real terms), indicating a loss of price competitiveness for Indian exports',
          'The REER will remain constant because it depends solely on changes in the nominal exchange rate',
          'The Nominal Effective Exchange Rate (NEER) will automatically drop to zero',
        ],
        correctAnswer: 'The REER will increase (appreciate in real terms), indicating a loss of price competitiveness for Indian exports',
        explanation: 'The Real Effective Exchange Rate formula is REER = NEER * (P_domestic / P_foreign). When domestic inflation (P_domestic) exceeds foreign inflation (P_foreign) and the nominal exchange rate (NEER) remains constant, the ratio P_domestic / P_foreign rises, causing the REER to increase (appreciate in real terms). This mathematical appreciation makes domestic goods relatively more expensive in global markets, diminishing export competitiveness.',
        trapExplanation: 'Candidates confuse real appreciation (which increases the index and hurts export competitiveness) with nominal depreciation.',
        difficulty: 'HARD',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-ECO-28',
    topicOrder: 32,
    topicSlug: 'external-sector-balance-of-payments-and-trade',
    topicTitle: 'External Sector, Balance of Payments & International Trade',
    topicDescription: 'Foreign Capital Flows: Foreign Direct Investment (FDI), FPI Regulations & External Commercial Borrowings.',
    slug: 'foreign-capital-flows-fdi-automatic-vs-government-routes-fpi-regulations-external-commercial-borrowings',
    title: 'Foreign Capital Flows: FDI (Automatic vs Government Route), FPI Regulations & ECBs',
    shortDefinition: 'The legal and regulatory framework governing cross-border foreign capital inflows into India: Foreign Direct Investment (FDI — long-term strategic equity ≥10% with voting control, Automatic Route via RBI vs Government Approval Route via DPIIT / sectoral ministries, Consolidated FDI Policy, Press Note 3 of 2020 restrictions) vs Foreign Portfolio Investment (FPI — financial investment <10% in listed securities, regulated by SEBI), and External Commercial Borrowings (ECB framework under FEMA 1999).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-28-01',
        statement: 'Based on the Arvind Mayaram Committee framework, foreign investment is classified by ownership threshold: an investment of 10% or more in the equity shares of a listed company (or any investment in an unlisted company) is classified as Foreign Direct Investment (FDI); an investment below 10% in a listed company is classified as Foreign Portfolio Investment (FPI).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Arvind Mayaram Committee Report on Definitions of FDI and FPI (2014); SEBI (FPI) Regulations, 2019',
        excerpt: 'Foreign investment threshold: >=10% is FDI; <10% is FPI (Mayaram Committee).',
      },
      {
        id: 'CLM-ECO-28-02',
        statement: 'FDI enters India through two routes under the Consolidated FDI Policy: the Automatic Route (where no prior approval from the Government or RBI is required, only post-inflow intimation) and the Government Approval Route (where prior approval is granted by the relevant administrative ministry coordinated by DPIIT, replacing the abolished FIPB).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Consolidated FDI Policy Circular (DPIIT, Ministry of Commerce and Industry); FEMA (Non-Debt Instruments) Rules, 2019',
        excerpt: 'FDI routes: Automatic Route (no prior approval) and Government Route (administrative ministry approval). FIPB abolished 2017.',
      },
      {
        id: 'CLM-ECO-28-03',
        statement: 'Under Press Note 3 (2020 Series) amending the FDI Policy under FEMA rules, any foreign investment from an entity located in a country that shares a land border with India (e.g. China, Pakistan, Bangladesh) or where the beneficial owner is situated in such a country, mandatorily requires prior Government Approval, even in sectors otherwise under the 100% Automatic Route.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'DPIIT Press Note No. 3 (2020 Series), dated 17 April 2020; Foreign Exchange Management (Non-debt Instruments) Amendment Rules, 2020',
        excerpt: 'Press Note 3 mandates prior government approval for all FDI from land-border sharing countries.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Patient Strategic Capital vs Liquid Portfolio Flows',
        body: 'Foreign capital enters an emerging economy in two fundamentally distinct forms:\n\n1. **Foreign Direct Investment (FDI):** When a global corporation builds a physical manufacturing plant, brings proprietary technology, and takes an active management role. This is **"Patient Capital"** that cannot flee overnight in a panic.\n2. **Foreign Portfolio Investment (FPI):** When global mutual funds, hedge funds, or sovereign wealth funds buy and sell listed equity shares or bonds on the stock exchange. This is **"Hot Money"** that provides vital market liquidity, but can rapidly exit during global risk-off episodes.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'FDI vs FPI: The Mayaram Committee Classification',
        body: '| Parameter | Foreign Direct Investment (FDI) | Foreign Portfolio Investment (FPI) |\n| :--- | :--- | :--- |\n| **Equity Threshold** | **$\\ge 10\\%$ equity stake** in a listed Indian company (or any stake in an unlisted company). | **$< 10\\%$ equity stake** in a listed company (if an investor exceeds $10\\%$, it reclassifies as FDI). |\n| **Investment Objective** | Long-term strategic interest, technology transfer, active management control. | Financial returns (dividends, capital appreciation) without management control. |\n| **Market Volatility** | **Highly Stable:** Embedded in physical assets, factories, and long-term contracts. | **Volatile ("Hot Money"):** Highly liquid; can be sold on stock exchanges instantly. |\n| **Governing Regulator** | **DPIIT** (Ministry of Commerce) & **RBI** (FEMA Non-Debt Rules). | **Securities & Exchange Board of India (SEBI)**. |\n| **Entry Routes** | Automatic Route or Government Approval Route. | Direct registration as Category I or II FPI with SEBI / Designated Depository Participant. |',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'FDI Entry Routes & Press Note 3 of 2020',
        body: '```mermaid\ngraph TD\n    FDI["Foreign Direct Investment (FDI) Entry"]\n    FDI --> AUTO["1. Automatic Route: No prior approval needed (100% in most sectors: manufacturing, auto, IT)"]\n    FDI --> GOVT["2. Government Route: Prior scrutiny and approval by administrative ministry (e.g. Defence >74%, Print Media, Satellites)"]\n    FDI --> BORDER["3. Land Border Sharing Mandate (Press Note 3, 2020)"]\n    BORDER --> PN3["ALL investments from nations sharing land border with India (China, Pakistan, etc.) MUST go through Government Route"]\n```\n\n### Sectors with 100% FDI Prohibited\nUnder India\'s FDI policy, foreign direct investment is **strictly prohibited in 9 sectors**:\n1. Lottery business (including government/private lottery, online lotteries),\n2. Gambling and betting (including casinos),\n3. Chit funds,\n4. Nidhi company,\n5. Trading in Transferable Development Rights (TDRs),\n6. Real Estate Business or Construction of Farm Houses (excluding township development),\n7. Manufacturing of cigars, cheroots, cigarillos, and cigarettes of tobacco,\n8. Activities/sectors not open to private sector investment (Atomic Energy),\n9. Railway operations (except dedicated railway infrastructure/high-speed networks).',
        order: 3,
      },
      {
        type: 'LEGAL_DISTINCTION',
        title: 'External Commercial Borrowings (ECB) Framework',
        body: 'External Commercial Borrowings (ECBs) are commercial loans raised by eligible Indian resident entities from recognized non-resident lenders under FEMA regulations:\n\n* **Two Currency Streams:**\n  1. **Foreign Currency denominated ECB:** Borrowed in USD, EUR, etc. (borrower bears currency exchange risk unless hedged).\n  2. **INR denominated ECB (Masala Bonds):** Bonds issued in offshore markets denominated in Indian Rupees (the foreign investor bears currency risk, protecting the Indian corporate borrower).\n* **Minimum Average Maturity Period (MAMP):** Standard MAMP is **3 years** (with relaxations for specific infrastructure sectors).\n* **End-Use Restrictions (Negative List):** ECB proceeds cannot be used for real estate speculative trading, investment in stock markets, or working capital lending to general corporate purposes.',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Foreign Investment',
        body: '1. **FIPB Abolition:** The Foreign Investment Promotion Board (FIPB) was **formally abolished in May 2017**. Government-route FDI is now approved directly by the concerned Administrative Ministry coordinated via the Foreign Investment Facilitation Portal (FIFP) managed by DPIIT.\n2. **10% Reclassification Rule:** If an FPI acquires $10\\%$ or more of the paid-up capital of an Indian listed company, the entire holding is reclassified as **FDI**.\n3. **Masala Bonds Currency Risk:** In **Masala Bonds**, the currency risk is borne by the **Foreign Investor**, NOT the Indian borrower, because the debt is denominated and settled in Rupees.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: FDI Policy, FPI Regulations, Masala Bonds, Press Note 3, Prohibited Sectors',
        notes: 'Frequent Prelims questions on FDI vs FPI (Mayaram 10% threshold), prohibited sectors, and Masala Bonds.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module B - Foreign Investment & ECB Regulations',
        notes: 'Direct MCQs on ECB maturity rules (MAMP), automatic vs government routes, and prohibited sectors.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'FDI vs FPI (Mayaram Comm): >=10% equity is FDI (strategic); <10% is FPI (financial/hot money). FDI Routes: Automatic (no approval) vs Government Route (Ministry approval via FIFP; FIPB abolished 2017). Press Note 3 (2020) = Land-border sharing nations must use Government route. 9 Prohibited FDI Sectors: Lottery, Gambling, Chit Funds, Nidhi, TDRs, Real Estate, Tobacco, Atomic Energy, Railway Operations. Masala Bonds = Offshore Rupee debt (investor bears forex risk).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Cross-border foreign capital is classified by the 10% equity threshold: >=10% is FDI (patient equity with management control) and <10% is FPI (liquid portfolio trading under SEBI). FDI enters via Automatic or Government routes (FIPB abolished in 2017), with Press Note 3 (2020) requiring government approval for land-border nations. Prohibited sectors include gambling, lottery, atomic energy, and tobacco. Masala bonds transfer exchange risk to foreign investors.',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Classification Rule: Mayaram Committee (>=10% equity = FDI; <10% = FPI).\n2. FDI Governance: Automatic Route (RBI intimation) vs Government Route (FIFP/DPIIT + Line Ministry).\n3. Security Safeguard: Press Note 3 of 2020 (mandatory government screening for land-border countries).\n4. Prohibited Sectors: Lottery, gambling, chit funds, nidhi, TDRs, real estate, tobacco manufacturing, atomic energy.\n5. External Debt: ECB framework (Foreign currency vs Rupee Masala Bonds, 3-yr standard MAMP).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Under the Arvind Mayaram Committee recommendations adopted by the Government of India and SEBI, how is foreign investment in a listed Indian company classified when a foreign investor holds an equity stake of LESS THAN 10%?',
        options: [
          'It is classified as Foreign Direct Investment (FDI)',
          'It is classified as Foreign Portfolio Investment (FPI)',
          'It is classified as External Commercial Borrowing (ECB)',
          'It is classified as an American Depository Receipt (ADR)',
        ],
        correctAnswer: 'It is classified as Foreign Portfolio Investment (FPI)',
        explanation: 'Under the Arvind Mayaram Committee definitions incorporated into the SEBI (FPI) Regulations and FEMA rules, foreign investment of less than 10% in the equity shares of a listed Indian company is treated as Foreign Portfolio Investment (FPI). If the holding reaches or exceeds 10%, the entire investment is categorized as Foreign Direct Investment (FDI).',
        trapExplanation: 'Candidates confuse the 10% boundary or assume any purchase of listed shares is always FPI regardless of percentage holding.',
        difficulty: 'EASY',
        isPYQ: true,
      },
    ],
  },

  {
    id: 'CON-ECO-29',
    topicOrder: 32,
    topicSlug: 'external-sector-balance-of-payments-and-trade',
    topicTitle: 'External Sector, Balance of Payments & International Trade',
    topicDescription: 'International Economic Institutions: IMF, World Bank, WTO & Multilateral Development Banks.',
    slug: 'international-economic-institutions-imf-sdr-world-bank-group-wto-agreements-ndb-aiib',
    title: 'International Economic Institutions: Bretton Woods (IMF, World Bank), WTO Agreements & MDBs',
    shortDefinition: 'The global multilateral economic governance architecture: the Bretton Woods twins (1944) — the International Monetary Fund (IMF: Quotas, Special Drawing Rights [SDR], Article IV consultations, Extended Fund Facility [EFF]) and the World Bank Group (IBRD, IDA, IFC, MIGA, ICSID — India is not a member of ICSID), the World Trade Organization (WTO: Marrakesh Agreement 1995, Most Favoured Nation [MFN], National Treatment, Agreement on Agriculture [AoA boxes: Green, Blue, Amber], Peace Clause, TRIPS), and emerging Multilateral Development Banks (AIIB and NDB / BRICS Bank).',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ECO-29-01',
        statement: 'The International Monetary Fund (IMF) and the International Bank for Reconstruction and Development (IBRD / World Bank) were established at the Bretton Woods Conference in July 1944; India is a founding member of both institutions. In the World Bank Group (IBRD, IDA, IFC, MIGA, ICSID), India is a member of all entities except the International Centre for Settlement of Investment Disputes (ICSID).',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Bretton Woods Agreements Act, 1945; World Bank Group Membership Records',
        excerpt: 'India is a founding member of IMF and World Bank; member of all World Bank arms except ICSID.',
      },
      {
        id: 'CLM-ECO-29-02',
        statement: 'Under the WTO Agreement on Agriculture (AoA), domestic agricultural subsidies are categorized into three "Boxes": Green Box (non-trade distorting research, disaster aid, environmental programs — unlimited/permitted), Blue Box (production-limiting direct payments — permitted), and Amber Box (trade-distorting price supports, MSP, input subsidies — subject to De Minimis limits: 5% of agricultural production value for developed nations, 10% for developing nations).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'WTO Agreement on Agriculture (Articles 6 & 13); Bali Ministerial Decision on Public Stockholding for Food Security (2013)',
        excerpt: 'AoA Boxes: Green (no limit), Blue (production-limiting), Amber (subject to 10% De Minimis for developing nations).',
      },
      {
        id: 'CLM-ECO-29-03',
        statement: 'The New Development Bank (NDB / BRICS Bank, headquarters in Shanghai, established at Fortaleza Summit 2014) operates with equal shareholding among founding members; the Asian Infrastructure Investment Bank (AIIB, headquarters in Beijing, operational 2016) operates with weighted voting shares where India is the second-largest shareholder (7.6% voting share) after China (26.6%).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Agreement on the New Development Bank (2014); Articles of Agreement of the Asian Infrastructure Investment Bank (2015)',
        excerpt: 'NDB has equal founding shares; AIIB has weighted voting with India as 2nd largest shareholder.',
      },
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Global Financial & Trade Rules Architecture',
        body: 'In the aftermath of the Great Depression and World War II, nations recognized that competitive currency devaluations ("beggar-thy-neighbor" policies) and high tariff walls lead to global economic collapse.\n\nThe **1944 Bretton Woods Conference** established two sister institutions to govern global macroeconomic stability:\n1. **The IMF:** The global crisis lender and balance of payments firefighter.\n2. **The World Bank:** The long-term reconstruction and developmental poverty-alleviation lender.\nIn 1995, the **World Trade Organization (WTO)** was created to govern non-discriminatory international trade rules.',
        order: 1,
      },
      {
        type: 'CORE_IDEA',
        title: 'The World Bank Group: The 5 Sister Institutions',
        body: 'The World Bank Group consists of five specialized developmental arms:\n\n1. **IBRD (1944):** International Bank for Reconstruction and Development (loans to middle-income governments with sovereign guarantee).\n2. **IDA (1960):** International Development Association (interest-free credits and grants to the poorest developing nations — "Soft Loan Window").\n3. **IFC (1956):** International Finance Corporation (provides equity and debt directly to the **private sector** in developing countries without sovereign guarantees).\n4. **MIGA (1988):** Multilateral Investment Guarantee Agency (provides political risk insurance and guarantee against expropriation/war to foreign private investors).\n5. **ICSID (1966):** International Centre for Settlement of Investment Disputes.\n\n> [!IMPORTANT]\n> **India is a member of 4 of the 5 World Bank Group arms: IBRD, IDA, IFC, and MIGA.** India is **NOT a member of ICSID** on grounds that its arbitration rules favor multinational corporations over host developing nations.',
        order: 2,
      },
      {
        type: 'MECHANISM',
        title: 'WTO Agreement on Agriculture: The Subsidies Box Matrix',
        body: 'The WTO Agreement on Agriculture (AoA) regulates domestic agricultural support across three colored boxes:\n\n```mermaid\ngraph TD\n    AOA["WTO Agreement on Agriculture Subsidies"]\n    AOA --> GREEN["GREEN BOX (Permitted / No Limit): Non-trade distorting (Pest control, R&D, disaster relief, crop insurance)"]\n    AOA --> BLUE["BLUE BOX (Permitted): Direct payments under production-limiting programs (set-aside acreage)"]\n    AOA --> AMBER["AMBER BOX (Subject to Reduction & De Minimis Limits): Trade-distorting price support (MSP, fertilizer/power subsidies)"]\n```\n\n### The De Minimis Limits & The Bali Peace Clause (2013)\n* **De Minimis Ceiling:** Amber box support cannot exceed **5% of agricultural production value for developed countries**, and **10% for developing countries**.\n* **The Issue for India:** India\'s Minimum Support Price (MSP) public procurement for food security (National Food Security Act) was calculated against historic 1986–88 base prices, threatening to breach the 10% limit.\n* **The Bali Peace Clause (2013):** Protects developing nations from legal challenges at the WTO Dispute Settlement Body for breaching Amber Box limits on public food procurement for domestic food security.',
        order: 3,
      },
      {
        type: 'COMPARISON',
        title: 'IMF vs World Bank vs NDB vs AIIB',
        body: '| Institution | Primary Mandate | Headquarters | India\'s Status |\n| :--- | :--- | :--- | :--- |\n| **International Monetary Fund (IMF)** | Balance of payments crises, exchange rate stability, global financial surveillance. | Washington, D.C. | Founding member; Quota share ~2.75% (8th largest). |\n| **World Bank Group** | Long-term economic development, poverty alleviation, infrastructure. | Washington, D.C. | Founding member; member of IBRD, IDA, IFC, MIGA (Non-member of ICSID). |\n| **New Development Bank (NDB)** | Infrastructure and sustainable development in BRICS and emerging economies. | Shanghai, China | Founding member; **Equal 20% voting power** among original 5 BRICS founders. (K.V. Kamath was first President). |\n| **Asian Infrastructure Investment Bank (AIIB)** | Energy, transport, telecommunications, urban infrastructure in Asia. | Beijing, China | Founding member; **Second largest shareholder (7.6% voting power)**; largest recipient of AIIB project funding. |',
        order: 4,
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'High-Yield Traps in Global Institutions',
        body: '1. **ICSID Membership Trap:** India is a member of IBRD, IDA, IFC, and MIGA, but is **NOT a signatory to the ICSID Convention**.\n2. **Special Drawing Rights (SDR):** The SDR is **NOT a currency and NOT a claim on the IMF**; it is a potential claim on the freely usable currencies of IMF members. The SDR basket contains **5 currencies: US Dollar, Euro, Chinese Renminbi/Yuan, Japanese Yen, and British Pound**.\n3. **WTO Core Principles:**\n   * **Most Favoured Nation (MFN):** Treating all trading partner nations equally (a trade concession given to one must be extended to all).\n   * **National Treatment:** Treating imported goods and domestic goods equally once imported goods enter the domestic market.',
        order: 5,
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        relevance: 'CORE_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'GS Paper III: International Institutions, IMF SDR, World Bank Arms, WTO AoA Boxes, AIIB, NDB',
        notes: 'Heavily tested in Prelims: ICSID non-membership, AoA Amber/Green box rules, SDR basket currencies, and AIIB shares.',
      },
      {
        examCode: 'iibf-dbf',
        relevance: 'DIRECT_OVERLAY',
        priority: 'HIGH',
        requiredDepth: 'EXPERT',
        syllabusUnit: 'Paper 1 (IE&IFS): Module B - International Financial Institutions & WTO',
        notes: 'Direct MCQs on 5 World Bank institutions, SDR composition, and MFN principles.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Bretton Woods 1944 = IMF (BoP crises) + World Bank (Development). World Bank Group = IBRD, IDA (soft loans), IFC (private sector), MIGA (political risk), ICSID (disputes). INDIA IS NOT A MEMBER OF ICSID. SDR Basket = USD, EUR, CNY, JPY, GBP. WTO AoA: Green Box (unlimited R&D/disaster), Blue Box (production-limiting), Amber Box (trade-distorting MSP - 10% De Minimis). Bali Peace Clause (2013) protects India food stocks. NDB = Shanghai (equal BRICS shares). AIIB = Beijing (India 2nd largest shareholder).',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'The Bretton Woods conference (1944) created the IMF (macroeconomic stability and SDR currency reserves) and the World Bank Group (IBRD, IDA, IFC, MIGA, and ICSID). India is a member of all World Bank arms except ICSID. The WTO Agreement on Agriculture categorizes subsidies into Green (unlimited), Blue (production-limiting), and Amber (trade-distorting with a 10% De Minimis limit shielded by the Bali Peace Clause). India is a co-founder of NDB (Shanghai) and the second-largest shareholder in AIIB (Beijing).',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: '1. Bretton Woods System: IMF (BoP surveillance, SDR basket: USD, EUR, CNY, JPY, GBP) & World Bank Group.\n2. World Bank 5 Arms: IBRD (middle-income), IDA (poorest soft credit), IFC (private equity), MIGA (political risk insurance), ICSID (dispute arbitration - India non-signatory).\n3. WTO Subsidies Matrix: Green Box (permissible research/calamity aid), Blue Box (acreage controls), Amber Box (MSP/input subsidies subject to 10% de minimis for developing nations).\n4. Food Security Protection: Bali Ministerial 2013 Peace Clause for public stockholding.\n5. Emerging MDBs: NDB (Equal 20% voting among BRICS founders, Shanghai) & AIIB (Weighted shares: China 26.6%, India 7.6%, Beijing).',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'India is a member of which of the following organizations under the World Bank Group?\n1. International Bank for Reconstruction and Development (IBRD)\n2. International Finance Corporation (IFC)\n3. Multilateral Investment Guarantee Agency (MIGA)\n4. International Centre for Settlement of Investment Disputes (ICSID)\n\nSelect the correct answer using the code given below:',
        options: [
          '1, 2 and 3 only',
          '1, 2 and 4 only',
          '1, 3 and 4 only',
          '1, 2, 3 and 4',
        ],
        correctAnswer: '1, 2 and 3 only',
        explanation: 'India is a founding member of the World Bank Group and is a member of four of its five constituent institutions: IBRD, IDA, IFC, and MIGA. India is NOT a member of ICSID (International Centre for Settlement of Investment Disputes), having declined to sign the 1965 ICSID Convention because it perceived the arbitration framework as asymmetric and favoring multinational investors over sovereign state courts.',
        trapExplanation: 'Candidates often assume India belongs to all 5 arms of the World Bank Group.',
        difficulty: 'MEDIUM',
        isPYQ: true,
      },
    ],
  },
];

export async function seedBatchE2CanonicalKnowledge() {
  console.log('Seeding Batch E2 Canonical Knowledge (Topics 30–32: 12 concepts)...');

  let domain = await db.domain.findFirst({
    where: {
      OR: [
        { slug: 'economic-commercial-laws-macroeconomics' },
        { slug: 'indian-economy-macroeconomics' },
        { name: 'Indian Economy & Macroeconomics' },
      ],
    },
  });

  if (!domain) {
    domain = await db.domain.create({
      data: {
        name: 'Indian Economy & Macroeconomics',
        slug: 'indian-economy-macroeconomics',
        description: 'Comprehensive macroeconomic foundations, monetary economics, public finance, banking systems, external sector, and development economics of India.',
      },
    });
  }

  let subject = await db.subject.findFirst({
    where: { slug: 'indian-economy' },
  });

  if (!subject) {
    subject = await db.subject.create({
      data: {
        name: 'Indian Economy & Macroeconomics',
        slug: 'indian-economy',
        domainId: domain.id,
        scopeStatement: 'Foundational macroeconomics, national income accounting, banking, monetary & fiscal policy, trade, agriculture, industry, poverty, and state economy.',
        description: 'Master academic curriculum for Indian Economy and Macroeconomics across UPSC, Banking, and State PSC examinations.',
      },
    });
  }

  const source = await db.source.upsert({
    where: { id: 'SRC-ECONOMY-MASTER-2026' },
    update: {},
    create: {
      id: 'SRC-ECONOMY-MASTER-2026',
      title: 'Indian Economy & Macro Master Corpus (2026)',
      sourceType: 'STATUTORY_REPORTS',
      authorityTier: 'STANDARD_AUTHORITY',
      description: 'Authoritative Indian Economy master knowledge repository.',
    },
  });

  const upsc = await db.exam.upsert({
    where: { slug: 'upsc-cse' },
    update: {},
    create: {
      slug: 'upsc-cse',
      name: 'UPSC Civil Services Examination',
      conductingBody: 'Union Public Service Commission',
      description: 'Premier national civil services examination.',
    },
  });

  const rpsc = await db.exam.upsert({
    where: { slug: 'rpsc-ras' },
    update: {},
    create: {
      slug: 'rpsc-ras',
      name: 'RPSC Rajasthan Administrative Services',
      conductingBody: 'Rajasthan Public Service Commission',
      description: 'Apex state civil services examination for Rajasthan.',
    },
  });

  const iibf = await db.exam.upsert({
    where: { slug: 'iibf-dbf' },
    update: {},
    create: {
      slug: 'iibf-dbf',
      name: 'IIBF Diploma in Banking & Finance',
      conductingBody: 'Indian Institute of Banking & Finance',
      description: 'Professional banking qualification.',
    },
  });

  const examMap: Record<string, string> = {
    'upsc-cse': upsc.id,
    'rpsc-ras': rpsc.id,
    'iibf-dbf': iibf.id,
  };

  const topicsMap: Record<string, { title: string; order: number; description: string; concepts: CanonicalConceptDefinition[] }> = {};
  for (const c of BATCH_E2_CONCEPTS) {
    if (!topicsMap[c.topicSlug]) {
      topicsMap[c.topicSlug] = {
        title: c.topicTitle,
        order: c.topicOrder,
        description: c.topicDescription,
        concepts: [],
      };
    }
    topicsMap[c.topicSlug].concepts.push(c);
  }

  for (const [topicSlug, topicData] of Object.entries(topicsMap)) {
    const topic = await db.topic.upsert({
      where: {
        subjectId_slug: {
          subjectId: subject.id,
          slug: topicSlug,
        },
      },
      update: {
        title: topicData.title,
        order: topicData.order,
        description: topicData.description,
        status: 'ACTIVE',
      },
      create: {
        subjectId: subject.id,
        slug: topicSlug,
        title: topicData.title,
        order: topicData.order,
        description: topicData.description,
        status: 'ACTIVE',
      },
    });

    for (const cDef of topicData.concepts) {
      const concept = await db.concept.upsert({
        where: { id: cDef.id },
        update: {
          topicId: topic.id,
          slug: cDef.slug,
          title: cDef.title,
          shortDefinition: cDef.shortDefinition,
          difficulty: cDef.difficulty,
          status: 'ACTIVE',
        },
        create: {
          id: cDef.id,
          topicId: topic.id,
          slug: cDef.slug,
          title: cDef.title,
          shortDefinition: cDef.shortDefinition,
          difficulty: cDef.difficulty,
          status: 'ACTIVE',
        },
      });

      await db.claim.deleteMany({ where: { conceptId: concept.id } });
      await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
      await db.examConceptMapping.deleteMany({ where: { conceptId: concept.id } });
      await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
      await db.question.deleteMany({ where: { conceptId: concept.id } });

      for (const clm of cDef.claims) {
        const claim = await db.claim.create({
          data: {
            id: clm.id,
            conceptId: concept.id,
            statement: clm.statement,
            claimType: clm.claimType,
            epistemicLevel: clm.epistemicLevel,
            confidence: clm.confidence,
            status: 'CANONICAL_CLAIM',
          },
        });

        await db.evidence.create({
          data: {
            claimId: claim.id,
            sourceId: source.id,
            locator: clm.locator,
            excerpt: clm.excerpt,
            evidenceType: 'STATUTORY_INSTRUMENT',
            authority: 'PRIMARY_GOVERNMENT_RECORD',
            evidentiarySupport: 'DIRECT_PROOF',
            extractionConfidence: 'CERTAIN',
          },
        });
      }

      for (const cb of cDef.contentBlocks) {
        await db.contentBlock.create({
          data: {
            conceptId: concept.id,
            type: cb.type,
            title: cb.title,
            body: cb.body,
            order: cb.order,
            visibility: 'CANONICAL_FULL',
          },
        });
      }

      for (const em of cDef.examMappings) {
        const examId = examMap[em.examCode];
        if (examId) {
          await db.examConceptMapping.create({
            data: {
              examId,
              conceptId: concept.id,
              syllabusUnit: em.syllabusUnit,
              relevance: em.relevance,
              priority: em.priority,
              requiredDepth: em.requiredDepth,
              notes: em.notes,
              frequentTraps: em.frequentTraps,
            },
          });
        }
      }

      for (const ru of cDef.revisionUnits) {
        await db.revisionUnit.create({
          data: {
            conceptId: concept.id,
            type: ru.type,
            content: ru.content,
            order: ru.order,
          },
        });
      }

      for (const q of cDef.questions) {
        await db.question.create({
          data: {
            conceptId: concept.id,
            type: q.type,
            stem: q.stem,
            options: JSON.stringify(q.options),
            correctAnswer: q.correctAnswer,
            explanation: q.explanation,
            trapExplanation: q.trapExplanation,
            difficulty: q.difficulty,
            isPYQ: q.isPYQ,
          },
        });
      }
    }
  }
}
