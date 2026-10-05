import * as fs from 'fs';
import * as path from 'path';

const SRC_DIR = path.resolve('007', 'notes', 'iibf_dbf', '01_PAPER_1_IE_IFS');
const OUT_DIR = path.resolve('007', 'notes', 'iibf_dbf', 'paper_1_chapters');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const modA = fs.readFileSync(path.join(SRC_DIR, '01_MODULE_A_INDIAN_ECONOMIC_ARCHITECTURE.md'), 'utf-8');
const modB = fs.readFileSync(path.join(SRC_DIR, '02_MODULE_B_ECONOMIC_CONCEPTS_RELATED_TO_BANKING.md'), 'utf-8');
const modC = fs.readFileSync(path.join(SRC_DIR, '03_MODULE_C_INDIAN_FINANCIAL_ARCHITECTURE.md'), 'utf-8');
const modD = fs.readFileSync(path.join(SRC_DIR, '04_MODULE_D_FINANCIAL_PRODUCTS_AND_SERVICES.md'), 'utf-8');

function extractUnits(content: string): { [unitNum: string]: string } {
  const units: { [unitNum: string]: string } = {};
  const regex = /##\s*(\d+)\.\s*IIBF\s*IE&IFS\s*Unit\s*(\d+):([\s\S]*?)(?=(?:##\s*\d+\.\s*IIBF\s*IE&IFS\s*Unit|\n#\s*IIBF|$))/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const unitNo = match[2].trim();
    const body = match[0].trim();
    units[unitNo] = body;
  }
  return units;
}

const allUnits = {
  ...extractUnits(modA),
  ...extractUnits(modB),
  ...extractUnits(modC),
  ...extractUnits(modD),
};

interface ChapterSpec {
  index: number;
  filename: string;
  fullTitle: string;
  leadParagraph: string;
  unitKeys: string[];
  activeRecallCards: Array<{ prompt: string; answer: string }>;
}

const CHAPTER_SPECS: ChapterSpec[] = [
  // PART I
  {
    index: 1,
    filename: '01_CHAPTER_01_OVERVIEW_DEMOGRAPHIC_TRANSITION.md',
    fullTitle: 'OVERVIEW OF THE INDIAN ECONOMY & DEMOGRAPHIC TRANSITION',
    leadParagraph: 'India stands as the fifth-largest global economy by nominal GDP and the third-largest by Purchasing Power Parity (PPP). From a low-growth colonial agrarian baseline at independence (1947), the nation navigated state-led Five Year Plans before executing transformative market-oriented structural adjustments in 1991. Today, India operates firmly in Stage 3 (Late Expanding) of the Demographic Transition Model with a median age of 28.7 years, unlocking an unprecedented demographic window extending to 2047.',
    unitKeys: ['1', '35'],
    activeRecallCards: [
      {
        prompt: 'Why is Census 1921 designated as the "Year of the Great Divide" in Indian demography, and what is India\'s current demographic stage?',
        answer: 'Prior to 1921, population growth was erratic and occasionally negative due to the 1918 Spanish Flu pandemic and recurrent famines. Post-1921, death rates fell sharply while birth rates remained elevated, entering continuous Stage 2 expansion. Currently, India is in Stage 3 (Late Expanding) with a below-replacement Total Fertility Rate (TFR) of 2.0 (NFHS-5).'
      },
      {
        prompt: 'Define the Incremental Capital-Output Ratio (ICOR) and state the economic implication of a declining ICOR.',
        answer: 'ICOR measures the additional capital units required to generate one additional unit of GDP (ICOR = Investment Rate / GDP Growth Rate). A declining or lower ICOR signifies higher capital efficiency and productivity, meaning less capital expenditure is required per unit of incremental national output.'
      }
    ]
  },
  {
    index: 2,
    filename: '02_CHAPTER_02_SECTORAL_ARCHITECTURE.md',
    fullTitle: 'SECTORAL ARCHITECTURE: PRIMARY, SECONDARY & TERTIARY',
    leadParagraph: 'Classical structural transformation (Fisher-Clark model) predicts sequential labor and output migration from Agriculture (Primary) to Manufacturing (Secondary) and finally Services (Tertiary). India exhibited an anomalous structural "leapfrog", transitioning directly from an agrarian base into a services-driven economy without establishing a labor-absorptive manufacturing base.',
    unitKeys: ['2'],
    activeRecallCards: [
      {
        prompt: 'What constitutes the structural anomaly in India\'s employment vs. output sectoral distribution?',
        answer: 'While the Primary Sector (Agriculture) generates only 16–18% of GVA, it still engages 45–46% of the workforce, reflecting severe disguised unemployment. Conversely, the Tertiary (Services) sector generates ~54–56% of GVA with only ~31% of the workforce, representing a capital- and skill-intensive growth model.'
      }
    ]
  },
  {
    index: 3,
    filename: '03_CHAPTER_03_ECONOMIC_PLANNING_NITI_AAYOG.md',
    fullTitle: 'ECONOMIC PLANNING ARCHITECTURE & NITI AAYOG STRATEGY',
    leadParagraph: 'Economic planning in India transitioned from Sir M. Visvesvaraya’s 1934 pioneering vision and the Planning Commission’s top-down allocation model (1950–2014) to cooperative and competitive federalism under NITI Aayog (National Institution for Transforming India), established on 1 January 2015.',
    unitKeys: ['3'],
    activeRecallCards: [
      {
        prompt: 'What are the core structural differences between the erstwhile Planning Commission and NITI Aayog?',
        answer: 'The Planning Commission was a centralized body with constitutional powers to allocate financial grants to states and formulate binding 5-year plans. NITI Aayog is a policy think-tank promoting cooperative federalism through its Governing Council (comprising all Chief Ministers and Lt. Governors), without financial fund allocation powers.'
      }
    ]
  },
  {
    index: 4,
    filename: '04_CHAPTER_04_PRIORITY_SECTOR_LENDING_MSME.md',
    fullTitle: 'PRIORITY SECTOR LENDING (PSL) & MSME ARCHITECTURE',
    leadParagraph: 'Priority Sector Lending (PSL) serves as the Reserve Bank of India’s statutory framework ensuring institutional credit flow to vulnerable, employment-generating segments of the economy. Alongside PSL, Micro, Small, and Medium Enterprises (MSMEs) form the backbone of industrial output and exports, governed by revised composite criteria.',
    unitKeys: ['4'],
    activeRecallCards: [
      {
        prompt: 'State the overall PSL target for Domestic Commercial Banks versus Regional Rural Banks (RRBs) and Small Finance Banks (SFBs).',
        answer: 'Domestic Scheduled Commercial Banks and Foreign Banks (with ≥ 20 branches) have an overall PSL target of 40% of Adjusted Net Bank Credit (ANBC) or Credit Equivalent Amount of Off-Balance Sheet Exposure (CEOBE). For RRBs and SFBs, the overall PSL target is 75% of ANBC/CEOBE.'
      },
      {
        prompt: 'What are the 2020 revised composite criteria for defining Micro, Small, and Medium Enterprises?',
        answer: 'Composite criteria combine Plant & Machinery investment AND Annual Turnover (excluding export turnover):\n- Micro: Investment ≤ ₹1 Cr & Turnover ≤ ₹5 Cr\n- Small: Investment ≤ ₹10 Cr & Turnover ≤ ₹50 Cr\n- Medium: Investment ≤ ₹50 Cr & Turnover ≤ ₹250 Cr'
      }
    ]
  },
  {
    index: 5,
    filename: '05_CHAPTER_05_INFRASTRUCTURE_LOGISTICS_CLIMATE_SDGS.md',
    fullTitle: 'INFRASTRUCTURE, LOGISTICS & CLIMATE SDGs',
    leadParagraph: 'Economic infrastructure comprises physical assets (energy, transport, communications) that unlock commercial productivity, while social infrastructure (health, education) builds human capital. Through PM GatiShakti, the National Infrastructure Pipeline (NIP), and the National Logistics Policy (NLP), India aims to compress logistics costs from ~14% to below 8% of GDP while adhering to COP26 Panchamrit climate goals.',
    unitKeys: ['5', '36'],
    activeRecallCards: [
      {
        prompt: 'Explain the risk-sharing mechanism under the Hybrid Annuity Model (HAM) in highway infrastructure.',
        answer: 'Under HAM, the Government (NHAI) provides 40% of the project cost as cash support during construction in 5 equal milestones. The concessionaire arranges the remaining 60% as equity and debt. Post-commissioning, NHAI collects toll directly and bears 100% of commercial traffic risk, paying the concessionaire semi-annual annuities.'
      },
      {
        prompt: 'What are the statutory qualifying thresholds for mandatory Corporate Social Responsibility (CSR) under Section 135 of the Companies Act 2013?',
        answer: 'Applies to any company having:\n1. Net Worth ≥ ₹500 Crore, OR\n2. Turnover ≥ ₹1,000 Crore, OR\n3. Net Profit ≥ ₹5 Crore during any financial year.\nMandatory spending is at least 2% of average net profits of preceding 3 financial years.'
      }
    ]
  },
  {
    index: 6,
    filename: '06_CHAPTER_06_GLOBALIZATION_FOREIGN_TRADE_WTO.md',
    fullTitle: 'GLOBALIZATION, FOREIGN TRADE POLICY & GLOBAL INSTITUTIONS',
    leadParagraph: 'India’s integration into the global economy accelerated under post-1991 trade liberalization, shifting from import substitution to export competitiveness. Under Foreign Trade Policy 2023, India targets $2 Trillion in goods and services exports by 2030, supported by Special Rupee Vostro Accounts (SRVA) and multilateral engagements across the WTO, IMF, and World Bank.',
    unitKeys: ['6', '7'],
    activeRecallCards: [
      {
        prompt: 'Distinguish between the WTO Agreement on Agriculture (AoA) Amber, Blue, and Green Boxes.',
        answer: 'Green Box: Non-distorting or minimally distorting subsidies (R&D, pest control, decoupled income support) permitted without limit.\nBlue Box: Direct payments linked to production-limiting programs, permitted without reduction.\nAmber Box: Direct trade-distorting price and input subsidies (MSP, fertilizer/power subsidies), subject to de minimis limits (10% of agricultural production value for developing nations).'
      }
    ]
  },

  // PART II: MODULE B
  {
    index: 7,
    filename: '07_CHAPTER_07_FUNDAMENTALS_ECONOMICS_MARKET_STRUCTURES.md',
    fullTitle: 'FUNDAMENTALS OF ECONOMICS & MARKET STRUCTURES',
    leadParagraph: 'Economics analyzes how scarce resources with alternative uses are allocated to satisfy unlimited human wants. Market structures govern the pricing power of firms, determined by the degree of competition, product differentiation, and barriers to entry across Perfect Competition, Monopoly, Monopolistic Competition, and Oligopoly.',
    unitKeys: ['8'],
    activeRecallCards: [
      {
        prompt: 'Why is the demand curve facing a perfectly competitive firm horizontally flat (infinite elasticity)?',
        answer: 'In perfect competition, homogeneous products and thousands of sellers make the individual firm a pure Price Taker. Any attempt to charge above the market price results in zero sales, making Average Revenue equal to Marginal Revenue and Price (P = AR = MR).'
      },
      {
        prompt: 'Explain Paul Sweezy’s Kinked Demand Curve hypothesis in Oligopoly.',
        answer: 'Sweezy’s model explains price rigidity: If an oligopolist raises price, rivals do not follow (elastic upper segment). If the firm cuts price, rivals immediately match (inelastic lower segment). The resulting kink produces a vertical gap in Marginal Revenue, stabilizing equilibrium price.'
      }
    ]
  },
  {
    index: 8,
    filename: '08_CHAPTER_08_DEMAND_SUPPLY_ELASTICITY_FORMULAS.md',
    fullTitle: 'LAW OF DEMAND, SUPPLY & ELASTICITY FORMULAS',
    leadParagraph: 'The Law of Demand and the Law of Supply govern market price discovery. Price Elasticity of Demand measures the percentage responsiveness of quantity demanded to a percentage change in price, providing the analytical foundation for bank lending margin calculations, tax incidence, and tariff policies.',
    unitKeys: ['9'],
    activeRecallCards: [
      {
        prompt: 'State the formula for Point Price Elasticity of Demand and Cross-Price Elasticity.',
        answer: 'Price Elasticity of Demand:\n$$E_p = -\\frac{\\%\\Delta Q}{\\%\\Delta P} = -\\frac{\\Delta Q}{\\Delta P} \\times \\frac{P}{Q}$$\nCross-Price Elasticity ($E_{xy}$):\n$$E_{xy} = \\frac{\\%\\Delta Q_x}{\\%\\Delta P_y} = \\frac{\\Delta Q_x}{\\Delta P_y} \\times \\frac{P_y}{Q_x}$$\nPositive $E_{xy}$ indicates substitute goods; negative $E_{xy}$ indicates complementary goods.'
      }
    ]
  },
  {
    index: 9,
    filename: '09_CHAPTER_09_NATIONAL_INCOME_ACCOUNTING_GVA_DEFLATOR.md',
    fullTitle: 'NATIONAL INCOME ACCOUNTING, GVA & GDP DEFLATOR',
    leadParagraph: 'National Income measures the monetary value of all final goods and services produced within an economy during an accounting period. In January 2015, the National Statistical Office (NSO) revised India’s headline growth metric from GDP at Factor Cost to GDP at Market Prices (Base Year 2011-12), aligning output calculations with Gross Value Added (GVA) at Basic Prices.',
    unitKeys: ['14'],
    activeRecallCards: [
      {
        prompt: 'State the mathematical relationship between GVA at Basic Prices and GDP at Market Prices under the 2015 NSO methodology.',
        answer: '$$\\text{GDP at Market Prices} = \\text{GVA at Basic Prices} + \\text{Product Taxes} - \\text{Product Subsidies}$$\nWhere GVA at Basic Prices equals Factor Cost plus Production Taxes minus Production Subsidies.'
      },
      {
        prompt: 'What is the GDP Deflator and how does it differ from the Consumer Price Index (CPI)?',
        answer: '$$\\text{GDP Deflator} = \\frac{\\text{Nominal GDP}}{\\text{Real GDP}} \\times 100$$\nThe GDP Deflator covers all domestically produced goods and services with dynamically changing weights, whereas CPI tracks a fixed basket of consumer goods including imported consumer products.'
      }
    ]
  },
  {
    index: 10,
    filename: '10_CHAPTER_10_MONEY_SUPPLY_AGGREGATES_INFLATION.md',
    fullTitle: 'MONEY SUPPLY MEASURES (M0-M4, L1-L3) & INFLATION',
    leadParagraph: 'Money functions as a medium of exchange, unit of account, and store of value. The Reserve Bank of India monitors liquidity through monetary aggregates (Reserve Money M0, Narrow Money M1, and Broad Money M3) alongside Liquidity aggregates (L1-L3). Controlling liquidity is essential for anchoring inflation expectations within the statutory 4% ± 2% target.',
    unitKeys: ['10'],
    activeRecallCards: [
      {
        prompt: 'State the formula and components of Reserve Money (M0), Narrow Money (M1), and Broad Money (M3).',
        answer: 'M0 (High Powered Money) = Currency in Circulation + Bankers\' Deposits with RBI + \'Other\' Deposits with RBI.\nM1 = Currency with the Public + Demand Deposits with Banking System + \'Other\' Deposits with RBI.\nM3 = M1 + Time Deposits with the Banking System.'
      },
      {
        prompt: 'State the Money Multiplier formula ($m$) in terms of the currency-deposit ratio ($c$) and reserve-deposit ratio ($r$).',
        answer: '$$m = \\frac{1 + c}{c + r}$$\nWhere $c = C/D$ and $r = R/D$. An increase in CRR raises $r$, reducing the multiplier and contracting broad money creation.'
      }
    ]
  },
  {
    index: 11,
    filename: '11_CHAPTER_11_THEORIES_OF_INTEREST_KEYNES_IS_LM_CURVE.md',
    fullTitle: 'THEORIES OF INTEREST, LIQUIDITY PREFERENCE & IS-LM CURVE',
    leadParagraph: 'Interest represents the price paid for the use of loanable funds or the reward for parting with liquidity. Classical theorists viewed interest as a real phenomenon determined by saving and investment productivity, whereas J.M. Keynes established the Liquidity Preference Theory, culminating in the Hicks-Hansen IS-LM general equilibrium synthesis.',
    unitKeys: ['11', '37'],
    activeRecallCards: [
      {
        prompt: 'What are the three Keynesian motives for holding cash, and what defines the "Liquidity Trap"?',
        answer: 'Motives: Transactions ($L_1$), Precautionary ($L_1$), and Speculative ($L_2$).\nThe Liquidity Trap occurs at rock-bottom interest rates where the speculative demand for money becomes infinitely elastic ($E = \\infty$). Additional money supply is absorbed into idle cash balances without lowering interest rates or stimulating investment.'
      },
      {
        prompt: 'What does the intersection of the IS curve and LM curve represent?',
        answer: 'The IS-LM intersection establishes simultaneous general equilibrium in both the Goods Market (Investment = Saving) and the Money Market (Money Demand = Money Supply), determining unique equilibrium national income ($Y^*$) and interest rate ($i^*$).'
      }
    ]
  },
  {
    index: 12,
    filename: '12_CHAPTER_12_BUSINESS_CYCLES_MONETARY_FISCAL_UNION_BUDGET.md',
    fullTitle: 'BUSINESS CYCLES, MONETARY POLICY & THE UNION BUDGET',
    leadParagraph: 'Economies experience rhythmic cyclical fluctuations in real output and employment through four distinct phases: Expansion, Peak, Contraction (Recession), and Trough (Depression). Countercyclical macroeconomic management relies on the Reserve Bank of India’s monetary policy transmission and the Union Budget’s fiscal architecture governed by the FRBM Act.',
    unitKeys: ['12', '13', '15'],
    activeRecallCards: [
      {
        prompt: 'Distinguish between Fiscal Deficit and Primary Deficit.',
        answer: 'Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-Debt Capital Receipts). It reflects total sovereign net market borrowing.\nPrimary Deficit = Fiscal Deficit - Interest Payments. It measures borrowing requirements arising from current discretionary policy.'
      },
      {
        prompt: 'What are Constitutional Funds under Articles 266 and 267 of the Constitution of India?',
        answer: 'Article 266(1): Consolidated Fund of India (all revenues, loans; requires parliamentary appropriation).\nArticle 266(2): Public Account of India (provident funds, small savings; executive operates as banker/trustee).\nArticle 267(1): Contingency Fund of India (corpus ₹30,000 Cr; held by Finance Secretary on behalf of President for unforeseen emergencies).'
      }
    ]
  },

  // PART III: MODULE C
  {
    index: 13,
    filename: '13_CHAPTER_13_INDIAN_FINANCIAL_SYSTEM_REFORMS_NARASIMHAM.md',
    fullTitle: 'INDIAN FINANCIAL SYSTEM & NARASIMHAM COMMITTEE REFORMS',
    leadParagraph: 'The Indian financial system coordinates four foundational pillars: Institutions, Markets, Instruments, and Services. The architecture transformed following the landmark recommendations of the Committee on the Financial System (Narasimham Committee I, 1991) and the Committee on Banking Sector Reforms (Narasimham Committee II, 1998).',
    unitKeys: ['16', '38'],
    activeRecallCards: [
      {
        prompt: 'What were the major structural recommendations of the Narasimham Committee I (1991)?',
        answer: '1. Phased reduction of statutory pre-emptions (CRR from 15% to 3–5%, SLR from 38.5% to 25%).\n2. Phased introduction of 8% Capital Adequacy (Basel I norms).\n3. Prudential norms for asset classification (90-day delinquency standard) and provisioning.\n4. Deregulation of interest rates.\n5. Entry of new private sector banks.'
      }
    ]
  },
  {
    index: 14,
    filename: '14_CHAPTER_14_APEX_REGULATORY_HIERARCHY_RBI_SEBI_IRDAI_FSDC.md',
    fullTitle: 'APEX REGULATORY HIERARCHY: RBI, SEBI, IRDAI & FSDC',
    leadParagraph: 'India’s financial sector operates under sector-specific statutory regulators, coordinated at the inter-regulatory level by the Financial Stability and Development Council (FSDC) chaired by the Union Finance Minister.',
    unitKeys: ['17'],
    activeRecallCards: [
      {
        prompt: 'Identify the statutory jurisdiction and headquarters of RBI, SEBI, IRDAI, PFRDA, and IFSCA.',
        answer: 'RBI: Banks, NBFCs, Money & Forex markets (Mumbai, 1935).\nSEBI: Capital markets, securities, mutual funds (Mumbai, 1992).\nIRDAI: Insurance sector (Hyderabad, 1999).\nPFRDA: Pension systems & NPS (New Delhi, 2013).\nIFSCA: Unified regulator for all financial activities in GIFT City IFSC (Gandhinagar, 2020).'
      },
      {
        prompt: 'Who chairs the Financial Stability and Development Council (FSDC) versus the FSDC Sub-Committee?',
        answer: 'The FSDC is chaired by the Union Finance Minister. The FSDC Sub-Committee is chaired by the Governor of the Reserve Bank of India.'
      }
    ]
  },
  {
    index: 15,
    filename: '15_CHAPTER_15_COMMERCIAL_BANKING_BASEL_III_PCA_FRAMEWORK.md',
    fullTitle: 'COMMERCIAL BANKING, BASEL III & PCA FRAMEWORK',
    leadParagraph: 'Scheduled Commercial Banks form the operational core of the payment and credit delivery ecosystem. Under RBI’s Basel III capital regulations, banks must maintain robust capital adequacy (CRAR), liquidity buffers (LCR and NSFR), and leverage safeguards, backed by the Prompt Corrective Action (PCA) framework.',
    unitKeys: ['18'],
    activeRecallCards: [
      {
        prompt: 'State the minimum Basel III Capital to Risk-Weighted Assets Ratio (CRAR) mandate for commercial banks in India.',
        answer: 'Under RBI norms (more stringent than Basel baseline 8%):\n- Minimum Common Equity Tier 1 (CET1): 5.5%\n- Minimum Tier 1 Capital: 7.0%\n- Total Capital (CRAR): 9.0%\n- Capital Conservation Buffer (CCB): 2.5% (common equity)\n- Total Minimum CRAR including CCB: 11.5%'
      },
      {
        prompt: 'What are the three operational trigger parameters under the RBI Prompt Corrective Action (PCA) framework?',
        answer: '1. Capital (CRAR / CET1 Ratio below thresholds).\n2. Asset Quality (Net NPA Ratio exceeding 6.0%).\n3. Leverage (Tier 1 Leverage Ratio below 4.0% for domestic banks, 3.5% for others).'
      }
    ]
  },
  {
    index: 16,
    filename: '16_CHAPTER_16_DIFFERENTIATED_BANKING_RRBS_4_TIER_UCBS.md',
    fullTitle: 'DIFFERENTIATED BANKING: RRBs & 4-TIER COOPERATIVE BANKS',
    leadParagraph: 'Differentiated banking institutions address geographical and occupational credit deficits. Regional Rural Banks (RRBs) provide dedicated rural finance, while Urban Cooperative Banks (UCBs) operate under a 4-Tier regulatory categorization following the Banking Regulation (Amendment) Act, 2020.',
    unitKeys: ['19', '20'],
    activeRecallCards: [
      {
        prompt: 'What is the statutory shareholding structure of Regional Rural Banks under the RRB Act, 1976?',
        answer: 'Central Government: 50%\nSponsor Public Sector Bank: 35%\nConcerned State Government: 15%'
      },
      {
        prompt: 'Explain the RBI 4-Tier regulatory categorization for Urban Cooperative Banks (UCBs).',
        answer: 'Tier 1: Deposits up to ₹100 Crore\nTier 2: Deposits > ₹100 Crore and up to ₹1,000 Crore\nTier 3: Deposits > ₹1,000 Crore and up to ₹10,000 Crore\nTier 4: Deposits > ₹10,000 Crore\nMinimum CRAR is 9% for Tier 1 and 12% for Tiers 2, 3, and 4.'
      }
    ]
  },
  {
    index: 17,
    filename: '17_CHAPTER_17_NBFCS_SCALE_BASED_REGULATION_HFCS_MFIS.md',
    fullTitle: 'NBFCs SCALE-BASED REGULATION, HFCs & MICROFINANCE (MFIs)',
    leadParagraph: 'Non-Banking Financial Companies (NBFCs) complement formal commercial banking by extending credit to unbanked sectors. In October 2022, the RBI instituted the four-tiered Scale-Based Regulation (SBR) framework alongside revised guidelines for Housing Finance Companies (HFCs) and Microfinance Loans.',
    unitKeys: ['21', '39'],
    activeRecallCards: [
      {
        prompt: 'Outline the four tiers of RBI Scale-Based Regulation (SBR) for NBFCs.',
        answer: '1. Base Layer (NBFC-BL): Non-deposit taking NBFCs with asset size < ₹1,000 Cr, peer-to-peer, account aggregators.\n2. Middle Layer (NBFC-ML): Deposit-taking NBFCs (NBFC-D) and non-deposit taking ≥ ₹1,000 Cr, HFCs, Core Investment Companies.\n3. Upper Layer (NBFC-UL): Top 25 NBFCs identified by RBI based on systemic significance and interconnectedness.\n4. Top Layer (NBFC-TL): Kept empty; populated if an Upper Layer NBFC poses extreme systemic contagion risk.'
      },
      {
        prompt: 'State the key criteria under the RBI 2022 Master Directions for Microfinance Loans.',
        answer: '1. Collateral-free loan extended to a household with annual income up to ₹3,00,000.\n2. Monthly debt repayment obligation capped at 50% of monthly household income.\n3. No prepayment penalties permitted on microfinance loans.'
      }
    ]
  },
  {
    index: 18,
    filename: '18_CHAPTER_18_DFIS_NABFID_FINANCIAL_INCLUSION_NPCI_CBDC.md',
    fullTitle: 'DFIs, NaBFID, FINANCIAL INCLUSION & DIGITAL RAILS (CBDC)',
    leadParagraph: 'Development Financial Institutions provide long-term patient capital for infrastructure and agriculture. The National Bank for Financing Infrastructure and Development (NaBFID) serves as the apex infrastructure lender, complemented by the Pradhan Mantri Jan Dhan Yojana (PMJDY) and NPCI’s digital payment architecture.',
    unitKeys: ['22', '23', '24'],
    activeRecallCards: [
      {
        prompt: 'What are the core features of the National Bank for Financing Infrastructure and Development (NaBFID)?',
        answer: 'Established under the NaBFID Act, 2021 as a statutory DFI with an authorized capital of ₹1 Lakh Crore and initial Central Government equity of ₹20,000 Crore. Regulated by RBI as an All-India Financial Institution (AIFI) to coordinate domestic infrastructure debt financing.'
      },
      {
        prompt: 'What are the three dimension weights of the RBI Financial Inclusion Index (FI-Index)?',
        answer: 'FI-Index ranges from 0 (complete exclusion) to 100 (full inclusion):\n1. Access (35% weight)\n2. Usage (45% weight)\n3. Quality (20% weight)\nPublished annually in July without a base year.'
      }
    ]
  },

  // PART IV: MODULE D
  {
    index: 19,
    filename: '19_CHAPTER_19_MONEY_MARKET_CALL_TBILLS_CP_CD_TREPS.md',
    fullTitle: 'MONEY MARKET ARCHITECTURE: CALL, T-BILLS, CP, CD & TREPS',
    leadParagraph: 'The Money Market facilitates short-term borrowing and lending for maturities up to one year (365 days), operating under the regulatory authority of the Reserve Bank of India.',
    unitKeys: ['25', '26'],
    activeRecallCards: [
      {
        prompt: 'Contrast Call Money, Notice Money, and Term Money by maturity tenor.',
        answer: 'Call Money: Overnight borrowing / lending (1 day).\nNotice Money: Borrowing / lending for 2 days to 14 days.\nTerm Money: Borrowing / lending for 15 days up to 1 year (365 days).'
      },
      {
        prompt: 'Compare Commercial Paper (CP) and Certificates of Deposit (CD) by issuer and minimum denomination.',
        answer: 'Commercial Paper (CP): Issued by highly rated corporates, primary dealers, AIFIs; Minimum denomination ₹5 Lakh (multiples of ₹5L); Maturity 7 days to 1 year.\nCertificates of Deposit (CD): Issued by Scheduled Commercial Banks and AIFIs; Minimum denomination ₹1 Lakh (multiples of ₹1L); Bank CD maturity 7 days to 1 year (AIFI CD up to 3 years).'
      }
    ]
  },
  {
    index: 20,
    filename: '20_CHAPTER_20_CAPITAL_MARKETS_STOCK_EXCHANGES_GSECS_BOND_YIELDS.md',
    fullTitle: 'CAPITAL MARKETS, STOCK EXCHANGES, G-SECS & BOND YIELDS',
    leadParagraph: 'The Capital Market mobilizes long-term funds exceeding one year, divided into the primary issuance market and the secondary trading market governed by SEBI. In debt markets, Government Securities (G-Secs) anchor the sovereign yield curve.',
    unitKeys: ['27', '28'],
    activeRecallCards: [
      {
        prompt: 'Explain the inverse relationship between Bond Prices and Market Interest Rates (Yields).',
        answer: 'Bond price equals the discounted present value of its future fixed coupon cash flows and face value redemption. When market interest rates rise, the discount rate increases, driving bond market prices down. When market rates fall, bond prices rise.'
      },
      {
        prompt: 'Define Modified Duration and its significance in fixed income portfolio management.',
        answer: 'Modified Duration measures the percentage change in a bond’s price for a 100 bps (1%) change in yield: $$\\text{Modified Duration} = \\frac{\\text{Macaulay Duration}}{1 + y/m}$$. Higher duration denotes greater interest rate price volatility risk.'
      }
    ]
  },
  {
    index: 21,
    filename: '21_CHAPTER_21_DERIVATIVES_FOREX_FEMA_NRI_ACCOUNTS.md',
    fullTitle: 'FINANCIAL DERIVATIVES, FOREX, FEMA & NRI ACCOUNTS',
    leadParagraph: 'Financial derivatives derive their value from underlying assets (stocks, bonds, currencies, interest rates), serving as hedging instruments against price and interest rate volatility. In foreign exchange, cross-border flows are regulated under the Foreign Exchange Management Act (FEMA), 1999.',
    unitKeys: ['29', '33'],
    activeRecallCards: [
      {
        prompt: 'Distinguish between Non-Resident External (NRE), Non-Resident Ordinary (NRO), and FCNR(B) bank accounts.',
        answer: 'NRE: Rupee account; foreign earnings; principal and interest fully and freely repatriable; exempt from Indian income tax.\nNRO: Rupee account; legitimate domestic Indian earnings (rent, dividends); interest taxable; repatriation capped at USD 1 Million per FY.\nFCNR(B): Foreign currency term deposit (USD, GBP, EUR, etc.); fixed tenure (1 to 5 yrs); exchange rate risk borne by the issuing bank; interest tax-exempt in India.'
      },
      {
        prompt: 'What are the core differences between a Forward Contract and a Futures Contract?',
        answer: 'Forward Contract: Private OTC bilateral agreement; customized contract terms; counterparty default risk; settled at maturity.\nFutures Contract: Exchange-traded standardized contract (BSE/NSE); guaranteed by clearing corporation; daily Mark-to-Market (MTM) margin settlement; highly liquid.'
      }
    ]
  },
  {
    index: 22,
    filename: '22_CHAPTER_22_MUTUAL_FUNDS_AIFS_REITS_FACTORING_TREDS.md',
    fullTitle: 'MUTUAL FUNDS, AIFs, REITs, FACTORING & TReDS',
    leadParagraph: 'Pooled investment vehicles and non-bank receivable discounting mechanisms channel commercial savings into specialized economic assets. Mutual Funds and Alternative Investment Funds (AIFs) operate under SEBI, while Trade Receivables Discounting System (TReDS) automates MSME factoring under RBI.',
    unitKeys: ['30', '32', '40'],
    activeRecallCards: [
      {
        prompt: 'How does Factoring differ from Forfaiting in trade receivable finance?',
        answer: 'Factoring: Short-term trade debt finance (typically 90–180 days); handles domestic receivables; usually with recourse or non-recourse; involves ledger administration.\nForfaiting: Medium- to long-term export finance; 100% non-recourse financing of international trade receivables evidenced by negotiable bills of exchange or promissory notes.'
      },
      {
        prompt: 'What is TReDS and who are its three mandatory institutional participants?',
        answer: 'Trade Receivables Discounting System (TReDS) is an RBI-authorized electronic platform for auctioning trade bills of MSMEs against corporate and PSU buyers. Participants: 1. MSME Sellers, 2. Corporate / PSU / Govt Buyers, 3. Financiers (Banks and NBFC factors).'
      }
    ]
  },
  {
    index: 23,
    filename: '23_CHAPTER_23_PARABANKING_INSURANCE_PENSION_LEASING_CRAS.md',
    fullTitle: 'PARA-BANKING, INSURANCE, PENSION (NPS), LEASING & CRAs',
    leadParagraph: 'Banks diversify beyond traditional deposit-lending operations into ancillary and para-banking services including insurance distribution (bancassurance), pension administration, mutual fund brokerage, and leasing. Credit risk evaluation is supported by Credit Rating Agencies (CRAs) and Credit Information Companies (CICs).',
    unitKeys: ['31', '34', '41', '42', '43'],
    activeRecallCards: [
      {
        prompt: 'What is the operational difference between Credit Rating Agencies (CRAs) and Credit Information Companies (CICs)?',
        answer: 'Credit Rating Agencies (SEBI-regulated: CRISIL, ICRA, CARE): Issue letter-grade ratings (AAA, AA, BBB) assessing default risk on debt instruments issued by corporates and sovereigns.\nCredit Information Companies (RBI-regulated under CICRA 2005: CIBIL, Experian, Equifax, CRIF High Mark): Compile historical repayment records of individual retail borrowers and commercial firms, issuing three-digit numerical scores (300 to 900).'
      },
      {
        prompt: 'Distinguish between NPS Tier-I and NPS Tier-II accounts.',
        answer: 'NPS Tier-I: Mandatory permanent retirement pension account; tax benefits under §80CCD; lock-in until age 60 (annuity purchase mandatory).\nNPS Tier-II: Voluntary savings facility; no withdrawal restrictions or lock-in; no dedicated tax deductions for non-government subscribers.'
      }
    ]
  },

  // PART V: REVISION VAULT
  {
    index: 24,
    filename: '24_CHAPTER_24_THE_GRAND_SYNTHESIS_MASTER_REVISION_VAULT.md',
    fullTitle: 'THE GRAND SYNTHESIS: IIBF PAPER 1 MASTER REVISION VAULT',
    leadParagraph: 'This capstone synthesis unifies the four modules of IIBF Paper 1 (Indian Economy & Indian Financial System) into a high-density active revision codex. It features high-yield 60-second chapter skeletons, comprehensive comparison matrices across regulatory tenors and capital ratios, 50 examiner traps, and a diagnostic recall vault.',
    unitKeys: [],
    activeRecallCards: []
  }
];

// Write out all 24 chapters
for (const spec of CHAPTER_SPECS) {
  const filePath = path.join(OUT_DIR, spec.filename);
  let content = '';

  // H1 Title
  content += `# ${spec.fullTitle}\n\n`;
  content += `${spec.leadParagraph}\n\n`;

  let sectionIdx = 1;

  // Append units for Chapters 1..23
  if (spec.unitKeys.length > 0) {
    for (const uKey of spec.unitKeys) {
      const uContent = allUnits[uKey];
      if (uContent) {
        // Remove old ## XX. IIBF header and replace with clean section bar
        const cleaned = uContent
          .replace(/^##\s*\d+\.\s*IIBF\s*IE&IFS\s*Unit\s*\d+:[^\n]*/i, '')
          .trim();
        
        content += `## § ${spec.index}.${sectionIdx} Unit ${uKey} Comprehensive Architectural Analysis\n\n`;
        content += `${cleaned}\n\n`;
        sectionIdx++;
      }
    }
  } else if (spec.index === 24) {
    sectionIdx = 4;
    // Generate Master Revision Vault
    content += `## § 24.1 High-Yield 60-Second Module Skeletons\n\n`;
    content += `### Module A: Indian Economic Architecture Summary
* **Demography:** Census 1921 Year of Great Divide; Stage 3 DTM; TFR 2.0 (NFHS-5); median age 28.7; window to 2047.
* **Sectors:** Leapfrogging anomaly; Agri 17% GDP / 45% workforce; Services 55% GDP / 31% workforce.
* **Planning:** 1934 Visvesvaraya; 1950 Planning Commission; 2015 NITI Aayog (Cooperative Federalism, Governing Council).
* **PSL:** Domestic Banks 40% ANBC (18% Agri, 10% Small/Marginal, 8% Micro); RRBs/SFBs 75% ANBC.
* **MSME 2020:** Micro (₹1 Cr / ₹5 Cr), Small (₹10 Cr / ₹50 Cr), Medium (₹50 Cr / ₹250 Cr) excluding exports.
* **Infrastructure:** HAM (40% Govt cash / 60% developer; 100% traffic risk NHAI); COP26 Panchamrit (2070 Net Zero).
* **Foreign Trade:** FTP 2023 (\$2T export target by 2030); Special Rupee Vostro Accounts (SRVA).

### Module B: Economic Concepts Related to Banking Summary
* **Market Forms:** Perfect Competition (P=AR=MR, horizontal demand); Monopoly (price maker); Oligopoly (Sweezy Kinked Demand Curve).
* **Elasticity:** Ep = - (ΔQ/ΔP) * (P/Q); Cross Elasticity positive for substitutes, negative for complements.
* **National Income:** 2015 NSO Base Year 2011-12; GDP MP = GVA Basic Prices + Product Taxes - Product Subsidies.
* **Money Aggregates:** M0 = Currency + Bankers Deposits with RBI; M1 = Currency with Public + Demand Deposits; M3 = M1 + Time Deposits. Money Multiplier m = (1+c)/(c+r).
* **Interest Theories:** Keynesian Liquidity Preference (Transactions, Precautionary, Speculative); Liquidity Trap at floor rate. IS-LM equilibrium.
* **Deficits & Budget:** Fiscal Deficit = Net borrowing; Primary Deficit = Fiscal Deficit - Interest; Article 266(1) Consolidated, 266(2) Public Account, 267(1) Contingency Fund.

### Module C: Indian Financial Architecture Summary
* **Narasimham Reforms:** 1991 (Deregulation, CRR/SLR reduction, 8% CAR, 90-day NPA); 1998 (Autonomy, narrow banking).
* **Regulators:** RBI (Banks, NBFCs, Money/Forex, 1935); SEBI (Capital, 1992); IRDAI (Hyderabad, 1999); PFRDA (2013); IFSCA (GIFT City, 2020); FSDC chaired by Union Finance Minister.
* **Basel III:** Indian Banks CRAR 11.5% (5.5% CET1 + 1.5% AT1 + 2% Tier 2 + 2.5% CCB). PCA triggers: Capital, Net NPA > 6%, Tier 1 Leverage < 4%.
* **RRBs & UCBs:** RRBs (50% Centre, 15% State, 35% Sponsor Bank; 75% PSL). UCBs 4-Tier categorization (Tier 1 < ₹100 Cr up to Tier 4 > ₹10,000 Cr).
* **NBFC SBR:** Base (< ₹1,000 Cr), Middle (Deposit-taking / ≥ ₹1,000 Cr / HFCs), Upper (Top 25), Top. Microfinance 2022: Household cap ₹3L, max 50% EMI debt servicing.
* **DFIs & Inclusion:** NaBFID Act 2021 (₹20,000 Cr equity); PMJDY (₹10,000 OD); FI-Index (Access 35%, Usage 45%, Quality 20%).\n\n`;

    content += `### Module D: Financial Products and Services Summary
* **Money Market:** Call (1D), Notice (2-14D), Term (15-365D). T-Bills (91, 182, 364D; ₹10,000 multiples). CP (min ₹5 Lakh). CD (min ₹1 Lakh). TREPS triparty repo.
* **Capital & Debt:** Yield curve; Inverse price-yield relation; Modified Duration = Macaulay / (1 + y).
* **Derivatives & Forex:** Forwards (OTC) vs Futures (Exchange, MTM, margins). Options (Call/Put; Greeks). NRI Accounts: NRE (Rupee, repatriable, tax-free); NRO (Rupee, non-repatriable above $1M, taxable); FCNR(B) (Foreign currency, bank bears exchange risk).
* **Factoring & TReDS:** Factoring (Short-term, domestic); Forfaiting (Medium/long, export, non-recourse). TReDS (MSME + Corporate + Financier).
* **Ancillary:** CRAs (SEBI: CRISIL, ICRA) vs CICs (RBI: CIBIL 300-900 score). NPS (Tier I locked retirement vs Tier II voluntary liquid).\n\n`;

    content += `## § 24.2 Master Comparison Matrices & Quantitative Limits\n\n`;
    content += `| Regulatory Dimension | Primary Benchmark / Tenor | Statutory Reference & Rules |
| :--- | :--- | :--- |
| **Call / Notice / Term Money** | Call (1D), Notice (2–14D), Term (15–365D) | RBI Master Directions (Uncollateralized interbank market) |
| **Commercial Paper (CP)** | Min ₹5 Lakh (Multiples of ₹5 Lakh); 7 Days to 1 Year | Issued by Corporates with net worth ≥ ₹4 Cr; Unsecured |
| **Certificate of Deposit (CD)** | Min ₹1 Lakh (Multiples of ₹1 Lakh); 7 Days to 1 Year | Issued by Scheduled Commercial Banks against term deposits |
| **Treasury Bills (T-Bills)** | 91, 182, 364 Days; Multiples of ₹10,000 | Issued at discount, redeemed at par (₹100); Zero default risk |
| **PSL Targets** | Domestic Commercial 40%; RRBs & SFBs 75% | 18% Agri (10% Small/Marginal), 8% Micro, 12% Weaker Sections |
| **MSME Investment / Turnover** | Micro (₹1Cr / ₹5Cr), Small (₹10Cr / ₹50Cr), Medium (₹50Cr / ₹250Cr) | MSMED Act 2020 composite criteria; excludes exports |
| **Basel III Total CRAR** | 11.5% (9.0% Minimum CRAR + 2.5% CCB) | RBI Prudential Norms (Stricter than Basel 10.5% standard) |
| **NPA Provisioning Norms** | Sub-standard 15% (25% unsecured); Doubtful 25–100%; Loss 100% | 90-day overdue default norm; SMA-0, SMA-1, SMA-2 |
| **Microfinance Loan Directives** | Max household income ₹3,00,000; 50% EMI cap | Collateral-free; Zero prepayment penalty |
| **NRI Account Classification** | NRE (Repatriable, Rupee); NRO (Taxable, Rupee); FCNR(B) (Foreign Currency) | FEMA 1999 regulations; Bank bears FCNR(B) exchange risk |\n\n`;

    content += `## § 24.3 Top 50 IIBF High-Yield Traps & Examiner Pitfalls\n\n`;
    content += `1. **Year of Great Divide:** 1921 is the Year of Great Divide (NOT 1947 or 1951).
2. **Current Demographic Stage:** India is in Stage 3 (Late Expanding), NOT Stage 2.
3. **Planning Commission vs NITI Aayog:** NITI Aayog has NO grant-allocating powers; funds are devolved by Finance Commission and Ministry of Finance.
4. **FSDC Chairperson:** Union Finance Minister (NOT the RBI Governor). FSDC Sub-Committee is chaired by the RBI Governor.
5. **IRDAI Headquarters:** Hyderabad (NOT Mumbai).
6. **IFSCA Unified Jurisdiction:** IFSCA has unified powers in GIFT City IFSC, superseding RBI, SEBI, IRDAI, and PFRDA.
7. **ICOR Interpretation:** LOWER ICOR means HIGHER capital productivity.
8. **Perfect Competition Curve:** Demand curve is horizontally flat (infinite elasticity, $E = \\infty$).
9. **Kinked Demand Curve:** Formulated by Paul Sweezy for Oligopoly price rigidity.
10. **1st Degree Price Discrimination:** Captures 100% of consumer surplus, leaving zero surplus for buyers.
11. **GVA at Basic Prices:** GVA Basic = Factor Cost + Production Taxes - Production Subsidies.
12. **GDP at Market Prices:** GDP MP = GVA Basic + Product Taxes - Product Subsidies.
13. **CPI vs WPI Base Years:** CPI Combined base year is 2012 (Food weight 45.86%); WPI base year is 2011-12 (Zero services weight).
14. **Reserve Money (M0):** Includes Currency in Circulation + Bankers Deposits with RBI + Other Deposits with RBI (Excludes public bank deposits).
15. **Narrow Money (M1):** Excludes Time Deposits. Broad Money (M3) includes Time Deposits.
16. **Money Multiplier:** $m = (1+c)/(c+r)$. Increasing CRR increases $r$ and decreases multiplier $m$.
17. **Liquidity Trap:** Speculative money demand elasticity is infinite; monetary expansion fails to lower interest rates.
18. **Primary Deficit:** Equals Fiscal Deficit minus Interest Payments.
19. **Contingency Fund Corpus:** Enhanced to ₹30,000 Crore (held by Finance Secretary on behalf of President).
20. **Narasimham Committee I Year:** 1991 (Narasimham II was 1998).
21. **Basel III Capital Conservation Buffer (CCB):** Must be composed entirely of Common Equity Tier 1 (CET1) capital (2.5%).
22. **Total CRAR in India:** 11.5% with CCB (NOT 10.5% international baseline).
23. **PCA Net NPA Trigger:** Net NPA $\\ge 6.0\\%$ triggers PCA intervention.
24. **RRB Ownership Ratio:** 50% Central Govt : 15% State Govt : 35% Sponsor Bank.
25. **RRB PSL Target:** 75% of ANBC (NOT 40%).
26. **UCB Tier 1 Ceiling:** Deposits up to ₹100 Crore.
27. **NBFC SBR Base Layer:** Asset size below ₹1,000 Crore.
28. **HFC Regulation:** Regulated directly by RBI (supervisory powers shifted from NHB).
29. **Microfinance Household Cap:** Annual income up to ₹3,00,000 for both rural and urban households.
30. **Microfinance Prepayment Penalty:** Strictly prohibited under RBI 2022 Master Directions.
31. **NaBFID Legal Status:** Statutory DFI established under NaBFID Act 2021; regulated by RBI as an AIFI.
32. **FI-Index Base Year:** Has NO base year (ranges 0 to 100).
33. **Call Money Tenor:** Exactly 1 Day (Overnight). Notice Money is 2 to 14 Days.
34. **CP Minimum Denomination:** ₹5 Lakh (multiples of ₹5L).
35. **CD Minimum Denomination:** ₹1 Lakh (multiples of ₹1L).
36. **T-Bill Minimum Denomination:** ₹10,000 (multiples of ₹10,000); issued at discount.
37. **State Development Loans (SDL):** Issued by State Governments, auctioned by RBI, eligible for SLR.
38. **Bond Yield vs Price:** Exactly inverse relationship.
39. **Clean vs Dirty Price:** Dirty Price includes accrued interest; Clean Price excludes accrued interest.
40. **Forward vs Futures:** Forwards are private OTC; Futures are exchange-traded with daily MTM margin.
41. **American vs European Options:** American options exercisable anytime before expiry; European options only on expiration date.
42. **NRE Account Currency:** Maintained in Indian Rupees (NOT foreign currency).
43. **FCNR(B) Exchange Risk:** Borne by the commercial bank (NOT the NRI depositor).
44. **NRO Tax Status:** Interest earned is subject to Indian Income Tax (TDS).
45. **TReDS Participants:** MSME Sellers, Corporate/Govt Buyers, and Financiers (Banks/Factors).
46. **Forfaiting Recourse:** 100% Non-recourse export finance.
47. **CICs vs CRAs:** CICs give 300-900 scores to individual/commercial borrowers; CRAs rate debt instruments.
48. **NPS Tier-I Lock-in:** Locked until age 60; mandatory annuity purchase.
49. **CSR Spending Rule:** 2% of average net profits of preceding 3 financial years.
50. **HAM Risk Allocation:** 100% commercial traffic risk borne by NHAI.\n\n`;
  }

  // Append Active Recall Cards for Chapter
  if (spec.activeRecallCards.length > 0) {
    content += `## § ${spec.index}.${sectionIdx} Active Recall Diagnostic Vault\n\n`;
    for (const card of spec.activeRecallCards) {
      content += `<details>\n<summary>${card.prompt}</summary>\n${card.answer}\n</details>\n\n`;
    }
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`✓ Generated: ${spec.filename} (${(content.length / 1024).toFixed(1)} KB)`);
}

console.log(`\n======================================================`);
console.log(`ALL 24 CHAPTERS GENERATED IN: ${OUT_DIR}`);
console.log(`======================================================\n`);
