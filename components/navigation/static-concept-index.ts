export type SearchResultType = 'SUBJECT' | 'TOPIC' | 'CONCEPT';

export interface UnifiedSearchItem {
  id: string;
  type: SearchResultType;
  title: string;
  slug: string;
  url: string;
  description: string;
  hierarchy: {
    domain?: string;
    subject?: string;
    topic?: string;
    concept?: string;
  };
  badge?: string;
}

export interface StaticConceptItem {
  id: string;
  slug: string;
  title: string;
  shortDefinition: string;
  difficulty: string;
  topicTitle: string;
  subjectName: string;
}

export const UNIFIED_SEARCH_INDEX: UnifiedSearchItem[] = [
  {
    "id": "subj-cmtbnedun0002l8hgnyykkfsu",
    "type": "SUBJECT",
    "title": "Indian Polity",
    "slug": "indian-polity",
    "url": "/subjects/indian-polity",
    "description": "Constitutional law, state institutions, political dynamics, and governance.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity"
    },
    "badge": "28 Topics • 128 Concepts"
  },
  {
    "id": "subj-cmtbnev5l02dxl8hgggffvz5a",
    "type": "SUBJECT",
    "title": "Indian Economy & Macroeconomic Policy",
    "slug": "indian-economy",
    "url": "/subjects/indian-economy",
    "description": "Comprehensive study of Indian economic growth, monetary transmission, and structural reforms.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy"
    },
    "badge": "12 Topics • 54 Concepts"
  },
  {
    "id": "subj-cmtbnf1xh03hol8hgiuwcipt2",
    "type": "SUBJECT",
    "title": "IIBF & Banking Regulations",
    "slug": "iibf-banking-regulations",
    "url": "/subjects/iibf-banking-regulations",
    "description": "Complete academic repository for banking laws, financial management, retail banking, and statutory compliance.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations"
    },
    "badge": "14 Topics • 51 Concepts"
  },
  {
    "id": "subj-cmtbnf8m20497l8hgcwbud65p",
    "type": "SUBJECT",
    "title": "General Awareness & Global Institutions",
    "slug": "general-awareness",
    "url": "/subjects/general-awareness",
    "description": "Universal canonical directory for global multilateral governance, development finance, and international reporting systems.",
    "hierarchy": {
      "domain": "General Awareness & Global Affairs",
      "subject": "General Awareness & Global Institutions"
    },
    "badge": "2 Topics • 3 Concepts"
  },
  {
    "id": "subj-cmtbnf8n7049al8hgyvzb2e4u",
    "type": "SUBJECT",
    "title": "Government Schemes & Welfare Architecture",
    "slug": "government-schemes",
    "url": "/subjects/government-schemes",
    "description": "Authoritative analysis of flagship central sector and centrally sponsored welfare schemes across financial inclusion, livelihoods, and agriculture.",
    "hierarchy": {
      "domain": "Public Policy & Welfare Administration",
      "subject": "Government Schemes & Welfare Architecture"
    },
    "badge": "3 Topics • 5 Concepts"
  },
  {
    "id": "subj-cmtbnfann04fil8hgu0a1ozzn",
    "type": "SUBJECT",
    "title": "English Language & Descriptive Writing",
    "slug": "english-descriptive-writing",
    "url": "/subjects/english-descriptive-writing",
    "description": "First-principles mastery of written discourse, essay argumentation, précis compression, professional correspondence, and exam execution strategy.",
    "hierarchy": {
      "domain": "English Language & Professional Communication",
      "subject": "English Language & Descriptive Writing"
    },
    "badge": "6 Topics • 15 Concepts"
  },
  {
    "id": "top-cmtbnedvq0007l8hgtnncqx3n",
    "type": "TOPIC",
    "title": "Basic Concepts of Polity",
    "slug": "basic-concepts-of-polity",
    "url": "/topics/basic-concepts-of-polity/read",
    "description": "",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 1: Basic Concepts of Polity"
    },
    "badge": "4 Concepts"
  },
  {
    "id": "top-cmtbnev5v02dzl8hgxzd5obhv",
    "type": "TOPIC",
    "title": "Inflation: Dynamics, Price Measurement & Policy Framework",
    "slug": "inflation-dynamics-measurement-policy",
    "url": "/topics/inflation-dynamics-measurement-policy/read",
    "description": "Comprehensive study of inflation concepts, price indices, causes, distributional effects, and the RBI monetary policy framework.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Topic 1: Inflation: Dynamics, Price Measurement & Policy Framework"
    },
    "badge": "5 Concepts"
  },
  {
    "id": "top-cmtbneecb002zl8hgxxosp2wz",
    "type": "TOPIC",
    "title": "Constituent Assembly of India",
    "slug": "constituent-assembly",
    "url": "/topics/constituent-assembly/read",
    "description": "",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 2: Constituent Assembly of India"
    },
    "badge": "6 Concepts"
  },
  {
    "id": "top-cmtbnef0c006vl8hg1iij71xu",
    "type": "TOPIC",
    "title": "The Preamble of the Indian Constitution",
    "slug": "preamble",
    "url": "/topics/preamble/read",
    "description": "",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 3: The Preamble of the Indian Constitution"
    },
    "badge": "4 Concepts"
  },
  {
    "id": "top-cmtbnefh5009ll8hgvyw29vrx",
    "type": "TOPIC",
    "title": "Schedules of the Indian Constitution & Language Scheme",
    "slug": "schedules-of-the-indian-constitution",
    "url": "/topics/schedules-of-the-indian-constitution/read",
    "description": "Constitutional Schedules 1 to 12, Eighth Schedule linguistic architecture, Part XVII Official Language Scheme (Articles 343–351), and the doctrine of Constitutional Morality.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 4: Schedules of the Indian Constitution & Language Scheme"
    },
    "badge": "9 Concepts"
  },
  {
    "id": "top-cmtbneglw00f0l8hgzkcxc0ey",
    "type": "TOPIC",
    "title": "Part I: The Union and Its Territory",
    "slug": "part-1-union-and-its-territory",
    "url": "/topics/part-1-union-and-its-territory/read",
    "description": "Constitutional framework of the Indian Union, admission and reorganisation of states under Articles 1 to 4.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 5: Part I: The Union and Its Territory"
    },
    "badge": "4 Concepts"
  },
  {
    "id": "top-cmtbneh0600hgl8hgk72rx7v8",
    "type": "TOPIC",
    "title": "Unification and Integration of India",
    "slug": "unification-of-india",
    "url": "/topics/unification-of-india/read",
    "description": "Historical and constitutional integration of 565 Princely States, Junagadh, Hyderabad, Kashmir, French and Portuguese enclaves, and Sikkim.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 6: Unification and Integration of India"
    },
    "badge": "4 Concepts"
  },
  {
    "id": "top-cmtbnehff00jwl8hgmzm6s6gf",
    "type": "TOPIC",
    "title": "Reorganisation of States & Zonal Councils",
    "slug": "reorganisation-of-states",
    "url": "/topics/reorganisation-of-states/read",
    "description": "Linguistic state reorganisation from Dhar and JVP commissions to Fazal Ali SRC 1956, post-1956 evolution to 28 states & 8 UTs, and Zonal Councils.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 7: Reorganisation of States & Zonal Councils"
    },
    "badge": "4 Concepts"
  },
  {
    "id": "top-cmtbnehts00mal8hgcyp47bib",
    "type": "TOPIC",
    "title": "Part II: Citizenship (Articles 5 to 11)",
    "slug": "part-2-citizenship",
    "url": "/topics/part-2-citizenship/read",
    "description": "Constitutional articles 5 to 11, Citizenship Act 1955 acquisition and loss modes, Single Citizenship, OCI scheme, and dual citizenship policy debate.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 8: Part II: Citizenship (Articles 5 to 11)"
    },
    "badge": "6 Concepts"
  },
  {
    "id": "top-cmtbnejbc00xol8hgrg5dj7gq",
    "type": "TOPIC",
    "title": "Part III: Fundamental Rights",
    "slug": "part-3-fundamental-rights",
    "url": "/topics/part-3-fundamental-rights/read",
    "description": "Constitutional charter of fundamental rights under Articles 12 to 35.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 9: Part III: Fundamental Rights"
    },
    "badge": "16 Concepts"
  },
  {
    "id": "top-cmtbnem4801ful8hg60shxtkb",
    "type": "TOPIC",
    "title": "Part IV: Directive Principles of State Policy",
    "slug": "part-4-directive-principles-of-state-policy",
    "url": "/topics/part-4-directive-principles-of-state-policy/read",
    "description": "Constitutional directives and welfare blueprint under Articles 36 to 51.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 10: Part IV: Directive Principles of State Policy"
    },
    "badge": "5 Concepts"
  },
  {
    "id": "top-cmtbnemuk01jjl8hg2ep8hoon",
    "type": "TOPIC",
    "title": "The Union Executive: President, Vice-President, PM & Council of Ministers",
    "slug": "the-union-executive",
    "url": "/topics/the-union-executive/read",
    "description": "Constitutional architecture of the Union Executive under Part V: President, Vice-President, Prime Minister, Central Council of Ministers, Cabinet governance, Coalition Politics, and Pressure Groups.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 11: The Union Executive: President, Vice-President, PM & Council of Ministers"
    },
    "badge": "7 Concepts"
  },
  {
    "id": "top-cmtbnenfv01n9l8hg7cy40bg4",
    "type": "TOPIC",
    "title": "Part VI: The State Executive (Governor, Chief Minister & Advocate General)",
    "slug": "the-state-executive",
    "url": "/topics/the-state-executive/read",
    "description": "",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 12: Part VI: The State Executive (Governor, Chief Minister & Advocate General)"
    },
    "badge": "4 Concepts"
  },
  {
    "id": "top-cmtbneo2j01pll8hgrmory8ss",
    "type": "TOPIC",
    "title": "Part XIV: Civil Services, Doctrine of Pleasure & Constitutional Safeguards",
    "slug": "civil-services-and-public-services",
    "url": "/topics/civil-services-and-public-services/read",
    "description": "",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 13: Part XIV: Civil Services, Doctrine of Pleasure & Constitutional Safeguards"
    },
    "badge": "2 Concepts"
  },
  {
    "id": "top-cmtbneofp01qwl8hgt4b9250w",
    "type": "TOPIC",
    "title": "Part V: The Union Legislature (Parliament Architecture, Procedure & Budget)",
    "slug": "the-union-legislature",
    "url": "/topics/the-union-legislature/read",
    "description": "",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 14: Part V: The Union Legislature (Parliament Architecture, Procedure & Budget)"
    },
    "badge": "6 Concepts"
  },
  {
    "id": "top-cmtbnep2n01uql8hg75wsbwez",
    "type": "TOPIC",
    "title": "Part VI: The State Legislature (Vidhan Sabha, Vidhan Parishad & Procedure)",
    "slug": "the-state-legislature",
    "url": "/topics/the-state-legislature/read",
    "description": "",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 15: Part VI: The State Legislature (Vidhan Sabha, Vidhan Parishad & Procedure)"
    },
    "badge": "4 Concepts"
  },
  {
    "id": "top-cmtbnepmt01x7l8hgmmazepoq",
    "type": "TOPIC",
    "title": "Part V: The Union Judiciary (The Supreme Court of India)",
    "slug": "the-union-judiciary",
    "url": "/topics/the-union-judiciary/read",
    "description": "",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 16: Part V: The Union Judiciary (The Supreme Court of India)"
    },
    "badge": "3 Concepts"
  },
  {
    "id": "top-cmtbnepys01z5l8hg865l7aoi",
    "type": "TOPIC",
    "title": "Part VI: State Judiciary (High Courts & Subordinate Courts)",
    "slug": "the-state-judiciary",
    "url": "/topics/the-state-judiciary/read",
    "description": "",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 17: Part VI: State Judiciary (High Courts & Subordinate Courts)"
    },
    "badge": "4 Concepts"
  },
  {
    "id": "top-cmtbneqcu021hl8hgr7uinsbt",
    "type": "TOPIC",
    "title": "Part XIV-A: Judicial Innovation, PIL & Tribunals Architecture",
    "slug": "judicial-innovation-and-tribunals",
    "url": "/topics/judicial-innovation-and-tribunals/read",
    "description": "",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 18: Part XIV-A: Judicial Innovation, PIL & Tribunals Architecture"
    },
    "badge": "3 Concepts"
  },
  {
    "id": "top-cmtbneqs0023gl8hgkqkci6sc",
    "type": "TOPIC",
    "title": "Centre-State Relations, Federal Finance & Inter-State Governance",
    "slug": "centre-state-relations-and-federalism",
    "url": "/topics/centre-state-relations-and-federalism/read",
    "description": "Constitutional distribution of legislative, administrative, and financial powers under Part XI & XII, Inter-State River Water Disputes (Article 262), and affirmative action sub-classification jurisprudence.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 19: Centre-State Relations, Federal Finance & Inter-State Governance"
    },
    "badge": "6 Concepts"
  },
  {
    "id": "top-cmtbnereh026ol8hgbg78383z",
    "type": "TOPIC",
    "title": "Part XVIII: Emergency Provisions & Constitutional Safeguards",
    "slug": "emergency-provisions-and-safeguards",
    "url": "/topics/emergency-provisions-and-safeguards/read",
    "description": "",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 20: Part XVIII: Emergency Provisions & Constitutional Safeguards"
    },
    "badge": "4 Concepts"
  },
  {
    "id": "top-cmtbneuqu02del8hg829h43m3",
    "type": "TOPIC",
    "title": "Emergency Provisions & Federal Security Architecture",
    "slug": "emergency-provisions-and-federal-crisis",
    "url": "/topics/emergency-provisions-and-federal-crisis/read",
    "description": "Constitutional emergency powers under Part XVIII (Articles 352–360), National Integration Council, Inter-State Council (Article 263), Article 355 Union duty, and the statutory internal security apparatus.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 20: Emergency Provisions & Federal Security Architecture"
    },
    "badge": "1 Concepts"
  },
  {
    "id": "top-cmtbnes0w029cl8hgtgwxvy6f",
    "type": "TOPIC",
    "title": "Part IX & IX-A: Rural & Urban Local Governance (73rd & 74th CAAs)",
    "slug": "local-governance-panchayats-and-municipalities",
    "url": "/topics/local-governance-panchayats-and-municipalities/read",
    "description": "Constitutional institutionalization of local self-government, 3-tier Panchayati Raj, PESA tribal self-rule, urban local bodies, and fiscal-functional devolution.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 21: Part IX & IX-A: Rural & Urban Local Governance (73rd & 74th CAAs)"
    },
    "badge": "4 Concepts"
  },
  {
    "id": "top-cmtbnesfq02a2l8hgb0y6wpob",
    "type": "TOPIC",
    "title": "Constitutional Institutions: Election Commission of India & Comptroller and Auditor General",
    "slug": "constitutional-bodies-eci-and-cag",
    "url": "/topics/constitutional-bodies-eci-and-cag/read",
    "description": "Constitutional design, independence guarantees, appointment mechanisms, statutory powers, and auditing limits of ECI (Art 324) and CAG (Arts 148–151).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 22: Constitutional Institutions: Election Commission of India & Comptroller and Auditor General"
    },
    "badge": "4 Concepts"
  },
  {
    "id": "top-cmtbneulq02d8l8hg9qxnyzm5",
    "type": "TOPIC",
    "title": "Election Commission of India & Electoral Governance",
    "slug": "election-commission-and-electoral-reforms",
    "url": "/topics/election-commission-and-electoral-reforms/read",
    "description": "Constitutional framework of elections under Part XV: Election Commission of India (Article 324), electoral rolls, voting behavior determinants, EVM-VVPAT integrity, and digital electoral reforms.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 22: Election Commission of India & Electoral Governance"
    },
    "badge": "1 Concepts"
  },
  {
    "id": "top-cmtbnesum02asl8hglqmjw4s9",
    "type": "TOPIC",
    "title": "Statutory & Non-Constitutional Regulatory Authorities: Transparency, Human Rights & Integrity",
    "slug": "statutory-and-non-constitutional-bodies",
    "url": "/topics/statutory-and-non-constitutional-bodies/read",
    "description": "Creation, appointment committees, tenure terms, powers, and structural limitations of statutory watchdogs (CIC, CVC, NHRC, Lokpal) and policy think tanks (NITI Aayog).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 23: Statutory & Non-Constitutional Regulatory Authorities: Transparency, Human Rights & Integrity"
    },
    "badge": "5 Concepts"
  },
  {
    "id": "top-cmtbneub402cwl8hg8a5ohr5o",
    "type": "TOPIC",
    "title": "Statutory, Regulatory & Quasi-Judicial Bodies",
    "slug": "statutory-regulatory-quasi-judicial-bodies",
    "url": "/topics/statutory-regulatory-quasi-judicial-bodies/read",
    "description": "Statutory commissions, regulatory frameworks, anti-corruption machinery, grassroots district administration, and public service delivery statutes in India and Rajasthan.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 23: Statutory, Regulatory & Quasi-Judicial Bodies"
    },
    "badge": "1 Concepts"
  },
  {
    "id": "top-cmtbnetj302bul8hgtya24ywm",
    "type": "TOPIC",
    "title": "Rajasthan State Polity: Executive, Assembly, Demography & Apex Institutions",
    "slug": "rajasthan-state-polity-and-governance",
    "url": "/topics/rajasthan-state-polity-and-governance/read",
    "description": "Constitutional, administrative, and political architecture of Rajasthan: political geography, demographic patterns, Governor, Chief Minister, Legislative Assembly, High Court, and RPSC.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 24: Rajasthan State Polity: Executive, Assembly, Demography & Apex Institutions"
    },
    "badge": "4 Concepts"
  },
  {
    "id": "top-cmtbnety102ccl8hg1hh7unip",
    "type": "TOPIC",
    "title": "Comparative Constitutional Systems: UK, USA, Canada, Germany & Switzerland",
    "slug": "comparative-constitutional-systems",
    "url": "/topics/comparative-constitutional-systems/read",
    "description": "Doctoral comparative jurisprudence contrasting parliamentary sovereignty, judicial supremacy, federal architectures, direct democracy, and constitutional synthesis.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Topic 25: Comparative Constitutional Systems: UK, USA, Canada, Germany & Switzerland"
    },
    "badge": "3 Concepts"
  },
  {
    "id": "top-cmtbnevzo02ixl8hgt781395l",
    "type": "TOPIC",
    "title": "Foundations of Economics & National Income Accounting",
    "slug": "foundations-of-economics-and-national-income",
    "url": "/topics/foundations-of-economics-and-national-income/read",
    "description": "First principles of economics: scarcity, choice, opportunity cost, Production Possibility Frontier (PPF), circular flow of income, national income aggregates (GDP, NDP, GNP, NNP), factor cost vs basic price vs market price, and Green GDP.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Topic 27: Foundations of Economics & National Income Accounting"
    },
    "badge": "6 Concepts"
  },
  {
    "id": "top-cmtbnewqz02npl8hgh7dkcmkh",
    "type": "TOPIC",
    "title": "Money, Commercial Banking & Financial Markets Architecture",
    "slug": "money-commercial-banking-and-financial-markets",
    "url": "/topics/money-commercial-banking-and-financial-markets/read",
    "description": "Evolution of money, legal tender vs fiat money, money supply aggregates (M0–M4), fractional reserve banking, credit creation, money multiplier, and money market vs capital market instruments.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Topic 28: Money, Commercial Banking & Financial Markets Architecture"
    },
    "badge": "5 Concepts"
  },
  {
    "id": "top-cmtbnexip02rnl8hgif6wgamv",
    "type": "TOPIC",
    "title": "Central Banking, Monetary Policy Framework & Price Theory",
    "slug": "central-banking-monetary-policy-and-price-theory",
    "url": "/topics/central-banking-monetary-policy-and-price-theory/read",
    "description": "Evolution of RBI, statutory functions, Monetary Policy Framework (FIT, MPC), quantitative & qualitative instruments, price theory, CPI vs WPI, and DFIs.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Topic 29: Central Banking, Monetary Policy Framework & Price Theory"
    },
    "badge": "6 Concepts"
  },
  {
    "id": "top-cmtbneyb302wgl8hgl13t4xmu",
    "type": "TOPIC",
    "title": "Public Finance, Union Budget Architecture & Taxation",
    "slug": "public-finance-union-budget-and-taxation",
    "url": "/topics/public-finance-union-budget-and-taxation/read",
    "description": "Constitutional budget framework (Article 112 Annual Financial Statement), Revenue vs Capital accounts, budgetary deficits (Revenue, Fiscal, Primary), Direct vs Indirect taxation, GST architecture, and FRBM fiscal consolidation.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Topic 30: Public Finance, Union Budget Architecture & Taxation"
    },
    "badge": "4 Concepts"
  },
  {
    "id": "top-cmtbneysr02zml8hgzqkf3gkj",
    "type": "TOPIC",
    "title": "Banking Regulations, Basel Norms, NPAs & Financial Inclusion",
    "slug": "banking-regulations-basel-norms-and-financial-inclusion",
    "url": "/topics/banking-regulations-basel-norms-and-financial-inclusion/read",
    "description": "Financial regulatory architecture (SEBI, IRDAI, PFRDA, IFSCA, FSDC), Basel I/II/III accords, Risk-Weighted Assets, CRAR, NPA classification, SARFAESI, IBC 2016, and Priority Sector Lending (PSL) targets.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Topic 31: Banking Regulations, Basel Norms, NPAs & Financial Inclusion"
    },
    "badge": "4 Concepts"
  },
  {
    "id": "top-cmtbnezc8032sl8hg8qx4x7pw",
    "type": "TOPIC",
    "title": "External Sector, Balance of Payments & International Trade",
    "slug": "external-sector-balance-of-payments-and-trade",
    "url": "/topics/external-sector-balance-of-payments-and-trade/read",
    "description": "Balance of Payments (BoP) accounting framework (Current Account, Capital Account, Errors & Omissions), Current Account Deficit (CAD), Foreign Exchange Reserves management, NEER vs REER, FDI vs FPI, and Bretton Woods / WTO institutions.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Topic 32: External Sector, Balance of Payments & International Trade"
    },
    "badge": "4 Concepts"
  },
  {
    "id": "top-cmtbnezul0361l8hgpk0y9api",
    "type": "TOPIC",
    "title": "Agriculture, Land Reforms & Food Security",
    "slug": "agriculture-land-reforms-and-food-security",
    "url": "/topics/agriculture-land-reforms-and-food-security/read",
    "description": "Structural transformation of Indian agriculture, Green Revolution phases, cropping patterns, irrigation architecture, land reform waves, agricultural pricing (MSP, CACP cost concepts A2/FL/C2), and PM-AASHA.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Topic 33: Agriculture, Land Reforms & Food Security"
    },
    "badge": "3 Concepts"
  },
  {
    "id": "top-cmtbnf04w037pl8hgmt3p38bb",
    "type": "TOPIC",
    "title": "Industrial Policy, MSMEs, Disinvestment & Digital Infrastructure",
    "slug": "industrial-policy-msmes-and-digital-infrastructure",
    "url": "/topics/industrial-policy-msmes-and-digital-infrastructure/read",
    "description": "Evolution of Indian industrial policy (IPR 1948, 1956 Mahalanobis strategy, 1991 LPG reforms), MSME 2020 composite criteria, CPSE classification (Maharatna, Navratna), strategic disinvestment, and Digital Public Infrastructure (DPI).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Topic 34: Industrial Policy, MSMEs, Disinvestment & Digital Infrastructure"
    },
    "badge": "4 Concepts"
  },
  {
    "id": "top-cmtbnf0lk03a1l8hgksd3de9d",
    "type": "TOPIC",
    "title": "Poverty, Inequality, Human Capital & Sustainable Development",
    "slug": "poverty-inequality-human-capital-and-sustainability",
    "url": "/topics/poverty-inequality-human-capital-and-sustainability/read",
    "description": "Poverty measurement, Headcount Ratio, Poverty Gap, Lorenz Curve, Gini Coefficient, poverty estimation committees (Alagh to Rangarajan), NITI Aayog Multidimensional Poverty Index (MPI), Amartya Sen Capability Approach, and Sustainable Development / Carbon Economics.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Topic 35: Poverty, Inequality, Human Capital & Sustainable Development"
    },
    "badge": "6 Concepts"
  },
  {
    "id": "top-cmtbnf18703djl8hgfw055z67",
    "type": "TOPIC",
    "title": "Employment, Labor Markets, Planning & NITI Aayog",
    "slug": "employment-labor-markets-and-economic-planning",
    "url": "/topics/employment-labor-markets-and-economic-planning/read",
    "description": "Types and measurement of unemployment (UPS, UPSS, CWS), PLFS labor indicators (LFPR, WPR, UR), informal sector & gig workers, Social Security Code 2020, JAM Trinity, and Planning Commission to NITI Aayog evolution.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Topic 36: Employment, Labor Markets, Planning & NITI Aayog"
    },
    "badge": "4 Concepts"
  },
  {
    "id": "top-cmtbnf1ma03fxl8hgpmej5yvf",
    "type": "TOPIC",
    "title": "Rajasthan State Economy & Flagship Development Programs",
    "slug": "rajasthan-state-economy-and-development",
    "url": "/topics/rajasthan-state-economy-and-development/read",
    "description": "Macroeconomic profile of Rajasthan (GSDP, GSVA sectoral shares, Per Capita Income), resource endowments, and industrial / social flagship schemes.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Topic 37: Rajasthan State Economy & Flagship Development Programs"
    },
    "badge": "3 Concepts"
  },
  {
    "id": "top-cmtbnf1y703htl8hg2j3mgycj",
    "type": "TOPIC",
    "title": "Indian Financial System Architecture & Institutional Tiers",
    "slug": "iibf-indian-financial-system-architecture",
    "url": "/topics/iibf-indian-financial-system-architecture/read",
    "description": "Evolution of Indian financial system, phase transitions (Pre-1951, Nationalization 1969/1980, Post-1991 Narasimham reforms), and institutional matrix.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Topic 38: Indian Financial System Architecture & Institutional Tiers"
    },
    "badge": "5 Concepts"
  },
  {
    "id": "top-cmtbnf2f203khl8hgrnberxst",
    "type": "TOPIC",
    "title": "Financial Markets, Fixed Income & Derivatives Architecture",
    "slug": "iibf-financial-markets-and-instruments",
    "url": "/topics/iibf-financial-markets-and-instruments/read",
    "description": "Money Market vs Capital Market, Primary vs Secondary markets, fixed income securities, duration, and financial derivatives.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Topic 39: Financial Markets, Fixed Income & Derivatives Architecture"
    },
    "badge": "8 Concepts"
  },
  {
    "id": "top-cmtbnf36m03opl8hg8zw5jtbe",
    "type": "TOPIC",
    "title": "Foreign Exchange Markets & NRI Banking Framework",
    "slug": "iibf-forex-markets-and-nri-banking",
    "url": "/topics/iibf-forex-markets-and-nri-banking/read",
    "description": "Foreign exchange quotations, FEDAI rules, cross rates, Nostro/Vostro/Loro accounts, and NRI deposit schemes.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Topic 40: Foreign Exchange Markets & NRI Banking Framework"
    },
    "badge": "2 Concepts"
  },
  {
    "id": "top-cmtbnf3dm03ptl8hgtsj2d10l",
    "type": "TOPIC",
    "title": "Sustainable Finance, Climate Risk & Banking Technology",
    "slug": "iibf-sustainable-finance-and-banking-technology",
    "url": "/topics/iibf-sustainable-finance-and-banking-technology/read",
    "description": "Climate risk frameworks, green deposits, BRSR reporting, and technology foundations in banking.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Topic 41: Sustainable Finance, Climate Risk & Banking Technology"
    },
    "badge": "1 Concepts"
  },
  {
    "id": "top-cmtbnf3hi03qdl8hgmd1a6j3m",
    "type": "TOPIC",
    "title": "Banker-Customer Relationship & Customer Service Operations",
    "slug": "iibf-banker-customer-relationship-and-customer-service",
    "url": "/topics/iibf-banker-customer-relationship-and-customer-service/read",
    "description": "Statutory nature of relationship, rights and duties, banker's general lien, Clayton's Case rule, and right of set-off.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Topic 42: Banker-Customer Relationship & Customer Service Operations"
    },
    "badge": "7 Concepts"
  },
  {
    "id": "top-cmtbnf45503u5l8hg9nm3te8j",
    "type": "TOPIC",
    "title": "Principles of Lending, Credit Assessment & Working Capital Methods",
    "slug": "iibf-principles-of-lending-and-credit-assessment",
    "url": "/topics/iibf-principles-of-lending-and-credit-assessment/read",
    "description": "Principles of bank lending (Safety, Liquidity, Profitability, Purpose), Working Capital assessment methods (Turnover / Nayak Method, MPBF / Tandon-Chore Method, Cash Budget System).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Topic 43: Principles of Lending, Credit Assessment & Working Capital Methods"
    },
    "badge": "2 Concepts"
  },
  {
    "id": "top-cmtbnf4c803v9l8hglbqrrjl3",
    "type": "TOPIC",
    "title": "Non-Fund Based Facilities & Trade Finance Operations",
    "slug": "iibf-non-fund-facilities-and-trade-finance",
    "url": "/topics/iibf-non-fund-facilities-and-trade-finance/read",
    "description": "Letters of Credit (LC) operational mechanisms, parties, UCPDC 600 rules, and Bank Guarantees (BG).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Topic 44: Non-Fund Based Facilities & Trade Finance Operations"
    },
    "badge": "3 Concepts"
  },
  {
    "id": "top-cmtbnf4un03wvl8hgx7y6ekax",
    "type": "TOPIC",
    "title": "Digital Banking, Payment Rails & Information Security",
    "slug": "iibf-digital-banking-and-it-security",
    "url": "/topics/iibf-digital-banking-and-it-security/read",
    "description": "Core Banking Systems (CBS), Data Centers, Disaster Recovery, RTO & RPO metrics.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Topic 45: Digital Banking, Payment Rails & Information Security"
    },
    "badge": "4 Concepts"
  },
  {
    "id": "top-cmtbnf58l03yzl8hgkr4we3k6",
    "type": "TOPIC",
    "title": "Accounting Foundations & Financial Statements Architecture",
    "slug": "iibf-accounting-principles-and-financial-statements",
    "url": "/topics/iibf-accounting-principles-and-financial-statements/read",
    "description": "GAAP principles, accounting concepts and conventions, Ind AS / IFRS convergence, and regulatory reporting.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Topic 46: Accounting Foundations & Financial Statements Architecture"
    },
    "badge": "4 Concepts"
  },
  {
    "id": "top-cmtbnf5tu0411l8hgz39pkva7",
    "type": "TOPIC",
    "title": "Financial Mathematics, Depreciation & Capital Budgeting Architecture",
    "slug": "iibf-financial-mathematics-and-capital-budgeting",
    "url": "/topics/iibf-financial-mathematics-and-capital-budgeting/read",
    "description": "Depreciation methods (SLM, WDV, Sinking Fund), Time Value of Money (TVM), and Capital Budgeting techniques.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Topic 47: Financial Mathematics, Depreciation & Capital Budgeting Architecture"
    },
    "badge": "3 Concepts"
  },
  {
    "id": "top-cmtbnf6ch042nl8hgob033lw5",
    "type": "TOPIC",
    "title": "Financial Ratio Analysis & Banking Taxation Architecture",
    "slug": "iibf-financial-analysis-and-taxation",
    "url": "/topics/iibf-financial-analysis-and-taxation/read",
    "description": "Liquidity, Solvency, Turnover, Profitability ratios, and DSCR metrics.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Topic 48: Financial Ratio Analysis & Banking Taxation Architecture"
    },
    "badge": "3 Concepts"
  },
  {
    "id": "top-cmtbnf6xy0447l8hg7uhwc9ul",
    "type": "TOPIC",
    "title": "Retail Banking Products & Wealth Management Architecture",
    "slug": "iibf-retail-banking-products-and-wealth-management",
    "url": "/topics/iibf-retail-banking-products-and-wealth-management/read",
    "description": "Retail Banking characteristics, customer segmentation models, and cross-selling strategies.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Topic 49: Retail Banking Products & Wealth Management Architecture"
    },
    "badge": "4 Concepts"
  },
  {
    "id": "top-cmtbnf7na046bl8hg7abhpzco",
    "type": "TOPIC",
    "title": "Banking Regulation Act 1949 & Statutory Powers of RBI",
    "slug": "iibf-banking-regulations-and-statutory-governance",
    "url": "/topics/iibf-banking-regulations-and-statutory-governance/read",
    "description": "Banking Regulation Act 1949 core sections, licensing, inspection, management removal, and resolution powers.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Topic 50: Banking Regulation Act 1949 & Statutory Powers of RBI"
    },
    "badge": "3 Concepts"
  },
  {
    "id": "top-cmtbnf86r047xl8hg83rcli7n",
    "type": "TOPIC",
    "title": "Management Theories, Leadership Models & Organisational Behaviour",
    "slug": "rbi-management-and-organisational-behaviour",
    "url": "/topics/rbi-management-and-organisational-behaviour/read",
    "description": "Classical, Neo-classical, Modern management theories, motivation models, and leadership frameworks.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Topic 51: Management Theories, Leadership Models & Organisational Behaviour"
    },
    "badge": "2 Concepts"
  },
  {
    "id": "top-cmtbnf8nn049cl8hgjco01dm8",
    "type": "TOPIC",
    "title": "International Organizations & Multilateral Headquarters",
    "slug": "international-organizations-and-headquarters",
    "url": "/topics/international-organizations-and-headquarters/read",
    "description": "Geographical clustering of apex global governance bodies, United Nations specialized agencies, and international treaty secretariats across major diplomatic hubs.",
    "hierarchy": {
      "domain": "General Awareness & Global Affairs",
      "subject": "General Awareness & Global Institutions",
      "topic": "Topic 52: International Organizations & Multilateral Headquarters"
    },
    "badge": "2 Concepts"
  },
  {
    "id": "top-cmtbnf95u04awl8hguy03zhhz",
    "type": "TOPIC",
    "title": "Global Indices, Reports & Publishing Bodies",
    "slug": "global-indices-and-reports",
    "url": "/topics/global-indices-and-reports/read",
    "description": "Apex international benchmark reports, governance and socio-economic indices, publishing bodies, parameter structures, and institutional distinctions.",
    "hierarchy": {
      "domain": "General Awareness & Global Affairs",
      "subject": "General Awareness & Global Institutions",
      "topic": "Topic 53: Global Indices, Reports & Publishing Bodies"
    },
    "badge": "1 Concepts"
  },
  {
    "id": "top-cmtbnf9eb04bol8hg5tif1gjl",
    "type": "TOPIC",
    "title": "Public Policy & Scheme Implementation Framework",
    "slug": "public-policy-and-scheme-framework",
    "url": "/topics/public-policy-and-scheme-framework/read",
    "description": "Constitutional taxonomy of Indian welfare delivery, Central Sector vs Centrally Sponsored Schemes (CSS), funding ratio matrices, Single Nodal Agency (SNA) governance, and Direct Benefit Transfer (DBT) architecture.",
    "hierarchy": {
      "domain": "Public Policy & Welfare Administration",
      "subject": "Government Schemes & Welfare Architecture",
      "topic": "Topic 54: Public Policy & Scheme Implementation Framework"
    },
    "badge": "1 Concepts"
  },
  {
    "id": "top-cmtbnf9ng04cgl8hgs8ab6mqt",
    "type": "TOPIC",
    "title": "Financial Inclusion, Social Security & Enterprise Schemes",
    "slug": "financial-inclusion-and-enterprise-schemes",
    "url": "/topics/financial-inclusion-and-enterprise-schemes/read",
    "description": "Universal banking access, low-cost term life insurance, accidental disability coverage, and guaranteed pension architecture under the Jan Dhan-Aadhaar-Mobile (JAM) ecosystem.",
    "hierarchy": {
      "domain": "Public Policy & Welfare Administration",
      "subject": "Government Schemes & Welfare Architecture",
      "topic": "Topic 55: Financial Inclusion, Social Security & Enterprise Schemes"
    },
    "badge": "2 Concepts"
  },
  {
    "id": "top-cmtbnfa5404dwl8hgfh8j7gl5",
    "type": "TOPIC",
    "title": "Rural Development, Agriculture & Employment Guarantees",
    "slug": "rural-development-and-employment-guarantees",
    "url": "/topics/rural-development-and-employment-guarantees/read",
    "description": "Women Self-Help Group (SHG) mobilization, revolving funds, interest subvention mechanics, CGFMU collateral relaxations, and rural livelihood generation under DAY-NRLM.",
    "hierarchy": {
      "domain": "Public Policy & Welfare Administration",
      "subject": "Government Schemes & Welfare Architecture",
      "topic": "Topic 56: Rural Development, Agriculture & Employment Guarantees"
    },
    "badge": "2 Concepts"
  },
  {
    "id": "top-cmtbnfao904fkl8hg40ynjent",
    "type": "TOPIC",
    "title": "Foundations of Written Discourse & Syntax",
    "slug": "discourse-and-syntax-foundations",
    "url": "/topics/discourse-and-syntax-foundations/read",
    "description": "Core mechanics of written communication, evaluator rubrics, command-word decoding, and relevance filtering.",
    "hierarchy": {
      "domain": "English Language & Professional Communication",
      "subject": "English Language & Descriptive Writing",
      "topic": "Topic 57: Foundations of Written Discourse & Syntax"
    },
    "badge": "3 Concepts"
  },
  {
    "id": "top-cmtbnfaop04fml8hgxz036373",
    "type": "TOPIC",
    "title": "Essay Writing & Argumentation",
    "slug": "essay-writing-and-argumentation",
    "url": "/topics/essay-writing-and-argumentation/read",
    "description": "First-principles essay design, demand analysis, multidimensional frameworks, thesis formulation, and philosophical prompt deconstruction.",
    "hierarchy": {
      "domain": "English Language & Professional Communication",
      "subject": "English Language & Descriptive Writing",
      "topic": "Topic 58: Essay Writing & Argumentation"
    },
    "badge": "4 Concepts"
  },
  {
    "id": "top-cmtbnfap404fol8hggko938m0",
    "type": "TOPIC",
    "title": "Précis Writing & Non-Verbatim Synthesis",
    "slug": "precis-writing-and-synthesis",
    "url": "/topics/precis-writing-and-synthesis/read",
    "description": "Information hierarchy, negative filtering, compression mechanics, title formulation, and subjective comprehension synthesis.",
    "hierarchy": {
      "domain": "English Language & Professional Communication",
      "subject": "English Language & Descriptive Writing",
      "topic": "Topic 59: Précis Writing & Non-Verbatim Synthesis"
    },
    "badge": "2 Concepts"
  },
  {
    "id": "top-cmtbnfaps04fql8hgj9lnuv4q",
    "type": "TOPIC",
    "title": "Professional Correspondence & Workplace Writing",
    "slug": "professional-correspondence-and-workplace-writing",
    "url": "/topics/professional-correspondence-and-workplace-writing/read",
    "description": "Formal full-block letter design, banking grievance escalation hierarchies, official emails, administrative reports, and incident memos.",
    "hierarchy": {
      "domain": "English Language & Professional Communication",
      "subject": "English Language & Descriptive Writing",
      "topic": "Topic 60: Professional Correspondence & Workplace Writing"
    },
    "badge": "3 Concepts"
  },
  {
    "id": "top-cmtbnfaqf04fsl8hgc8gbwi5n",
    "type": "TOPIC",
    "title": "Model Exemplars & Structural Deconstructions",
    "slug": "model-exemplars-and-deconstructions",
    "url": "/topics/model-exemplars-and-deconstructions/read",
    "description": "Curated repository of benchmark model essays, long-form policy papers, and workplace communications with structural analysis.",
    "hierarchy": {
      "domain": "English Language & Professional Communication",
      "subject": "English Language & Descriptive Writing",
      "topic": "Topic 61: Model Exemplars & Structural Deconstructions"
    },
    "badge": "2 Concepts"
  },
  {
    "id": "top-cmtbnfaqx04ful8hgt8xgyjez",
    "type": "TOPIC",
    "title": "Active Practice Arena & Exam Execution Strategy",
    "slug": "active-practice-and-exam-strategy",
    "url": "/topics/active-practice-and-exam-strategy/read",
    "description": "Time management clocks, membrane keyboard ergonomics, real-exam TCS iON quirks, and objective self-evaluation scoring engines.",
    "hierarchy": {
      "domain": "English Language & Professional Communication",
      "subject": "English Language & Descriptive Writing",
      "topic": "Topic 62: Active Practice Arena & Exam Execution Strategy"
    },
    "badge": "1 Concepts"
  },
  {
    "id": "con-CON-ECON-INF-01",
    "type": "CONCEPT",
    "title": "Core Concept of Inflation, Terminological Distinctions & Real vs Nominal Values",
    "slug": "inflation-definition-distinctions-real-nominal",
    "url": "/topics/inflation-dynamics-measurement-policy/read#inflation-definition-distinctions-real-nominal",
    "description": "Inflation is a sustained, generalized rise in an economy's aggregate price level that erodes the purchasing power of money. It must be distinguished from episodic relative price shocks in isolated goods, and contrasted with disinflation, deflation, reflation, and stagflation.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Inflation: Dynamics, Price Measurement & Policy Framework",
      "concept": "Core Concept of Inflation, Terminological Distinctions & Real vs Nominal Values"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-ECON-INF-02",
    "type": "CONCEPT",
    "title": "Price Indices & Measurement in India: CPI, WPI, Scope Distinctions & Consumption Shifts",
    "slug": "price-indices-measurement-cpi-wpi-core-headline",
    "url": "/topics/inflation-dynamics-measurement-policy/read#price-indices-measurement-cpi-wpi-core-headline",
    "description": "India measures inflation primarily through two indices: the Consumer Price Index (CPI-Combined, base 2012, published by NSO), which serves as the official monetary policy anchor, and the Wholesale Price Index (WPI, base 2011-12, published by DPIIT), which tracks producer-level commodity transactions within its defined goods basket without covering services.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Inflation: Dynamics, Price Measurement & Policy Framework",
      "concept": "Price Indices & Measurement in India: CPI, WPI, Scope Distinctions & Consumption Shifts"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECON-INF-03",
    "type": "CONCEPT",
    "title": "Causes & Causal Mechanisms of Inflation: Demand-Pull, Cost-Push, Imported & Structural Shocks",
    "slug": "inflation-causes-mechanisms-demand-cost-structural",
    "url": "/topics/inflation-dynamics-measurement-policy/read#inflation-causes-mechanisms-demand-cost-structural",
    "description": "Inflation arises from fundamental macroeconomic imbalances: Demand-Pull pressures when Aggregate Demand exceeds Potential GDP (closing the output gap), Cost-Push shocks when input costs shift the Short-Run Aggregate Supply (SRAS) curve upward (pass-through conditioned by input substitutability and pricing power), Imported inflation through exchange rate pass-through, and Structural bottlenecks in agricultural supply chains.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Inflation: Dynamics, Price Measurement & Policy Framework",
      "concept": "Causes & Causal Mechanisms of Inflation: Demand-Pull, Cost-Push, Imported & Structural Shocks"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-ECON-INF-04",
    "type": "CONCEPT",
    "title": "Distributional Impacts, Nuanced Winners/Losers, Fiscal Bracket Creep, Expectation Formation & Empirical Growth Thresholds",
    "slug": "inflation-distributional-impacts-growth-tradeoffs-phillips-curve",
    "url": "/topics/inflation-dynamics-measurement-policy/read#inflation-distributional-impacts-growth-tradeoffs-phillips-curve",
    "description": "Inflation creates sharp redistributional effects: unexpected inflation benefits fixed-rate debtors over creditors, and acts as a regressive burden on unindexed fixed-income earners and the poor. Under progressive income tax schedules, inflation increases government tax receipts via bracket creep. While a short-run trade-off exists (Phillips Curve), Indian empirical research demonstrates that inflation above 4–6% actively impairs long-term investment and GDP growth.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Inflation: Dynamics, Price Measurement & Policy Framework",
      "concept": "Distributional Impacts, Nuanced Winners/Losers, Fiscal Bracket Creep, Expectation Formation & Empirical Growth Thresholds"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECON-INF-05",
    "type": "CONCEPT",
    "title": "Policy Framework: RBI Flexible Inflation Targeting (FIT), The MPC, Transmission Heterogeneity & Supply-Side Coordination",
    "slug": "inflation-policy-framework-rbi-mpc-flexible-targeting-supply-side",
    "url": "/topics/inflation-dynamics-measurement-policy/read#inflation-policy-framework-rbi-mpc-flexible-targeting-supply-side",
    "description": "India controls inflation through a coordinated policy architecture: Monetary Policy operated by the 6-member Monetary Policy Committee (MPC) under the Flexible Inflation Targeting (FIT) framework (4% ± 2% CPI target under Section 45ZA of the RBI Act), coupled with Fiscal and Supply-Side market interventions by the Central Government.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Inflation: Dynamics, Price Measurement & Policy Framework",
      "concept": "Policy Framework: RBI Flexible Inflation Targeting (FIT), The MPC, Transmission Heterogeneity & Supply-Side Coordination"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T1-01",
    "type": "CONCEPT",
    "title": "The State and Nation: Constituent Elements, Saptanga Theory & Distinctions",
    "slug": "state-and-nation-constituent-elements-saptanga-theory",
    "url": "/topics/basic-concepts-of-polity/read#state-and-nation-constituent-elements-saptanga-theory",
    "description": "The State as a sovereign political-legal entity defined by four universal elements (territory, population, government, sovereignty), Kautilya’s organic Saptanga model, and the crucial distinction from the cultural concept of Nation.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Basic Concepts of Polity",
      "concept": "The State and Nation: Constituent Elements, Saptanga Theory & Distinctions"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-T1-02",
    "type": "CONCEPT",
    "title": "Theories of the Origin of the State: Divine, Social Contract, Historical & Marxist",
    "slug": "theories-of-origin-of-state-divine-social-contract-marxist",
    "url": "/topics/basic-concepts-of-polity/read#theories-of-origin-of-state-divine-social-contract-marxist",
    "description": "Philosophical accounts of how the state emerged: Divine Origin (theocratic sanction), Social Contract (Hobbes, Locke, Rousseau overcoming the state of nature / Matsya Nyaya), Historical-Evolutionary, and Marxist class-instrument models.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Basic Concepts of Polity",
      "concept": "Theories of the Origin of the State: Divine, Social Contract, Historical & Marxist"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T1-03",
    "type": "CONCEPT",
    "title": "Systems of Governance: Parliamentary vs Presidential & Constitutional Supremacy",
    "slug": "systems-of-governance-parliamentary-presidential-constitutional-supremacy",
    "url": "/topics/basic-concepts-of-polity/read#systems-of-governance-parliamentary-presidential-constitutional-supremacy",
    "description": "Structural classification of constitutional governance: Dual Legislature and Executive in India, Unified Judiciary, Parliamentary executive-legislative fusion vs US strict Separation of Powers, and Parliamentary Sovereignty (UK) vs Constitutional Supremacy (India).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Basic Concepts of Polity",
      "concept": "Systems of Governance: Parliamentary vs Presidential & Constitutional Supremacy"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T1-04",
    "type": "CONCEPT",
    "title": "Constitution & Constitutionalism: Nature, Functions & Pillars of Limited Government",
    "slug": "constitution-and-constitutionalism-nature-functions-pillars",
    "url": "/topics/basic-concepts-of-polity/read#constitution-and-constitutionalism-nature-functions-pillars",
    "description": "The formal Constitution as the supreme organic legal instrument defining state architecture versus Constitutionalism as the underlying political philosophy of limited government, rule of law, and institutional restraint.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Basic Concepts of Polity",
      "concept": "Constitution & Constitutionalism: Nature, Functions & Pillars of Limited Government"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T2-01",
    "type": "CONCEPT",
    "title": "Historical Evolution & Demand for the Constituent Assembly (1895–1946)",
    "slug": "historical-evolution-demand-for-constituent-assembly",
    "url": "/topics/constituent-assembly/read#historical-evolution-demand-for-constituent-assembly",
    "description": "The constitutional progression of the demand for a sovereign Constitution-making body: from Tilak’s Swaraj Bill (1895) and Nehru Report (1928) to M.N. Roy’s formal formulation (1934), INC official demands, August Offer (1940), Cripps Mission (1942), and Cabinet Mission Plan (1946).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Constituent Assembly of India",
      "concept": "Historical Evolution & Demand for the Constituent Assembly (1895–1946)"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-T2-02",
    "type": "CONCEPT",
    "title": "Composition, Election Framework & Restructuring of the Constituent Assembly",
    "slug": "composition-election-restructuring-constituent-assembly",
    "url": "/topics/constituent-assembly/read#composition-election-restructuring-constituent-assembly",
    "description": "The original 389-seat architecture under the Cabinet Mission Plan (292 British provinces, 93 princely states, 4 Chief Commissioner provinces), indirect proportional voting via single transferable vote, and post-partition reduction to 299 seats.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Constituent Assembly of India",
      "concept": "Composition, Election Framework & Restructuring of the Constituent Assembly"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T2-03",
    "type": "CONCEPT",
    "title": "Functioning, Working Timeline & Dual Roles of the Constituent Assembly",
    "slug": "functioning-working-timeline-dual-roles-constituent-assembly",
    "url": "/topics/constituent-assembly/read#functioning-working-timeline-dual-roles-constituent-assembly",
    "description": "Chronological roadmap of the Assembly: December 9, 1946 opening meeting, leadership appointments, Objectives Resolution, its dual role as Constitution-maker and Provisional Parliament, adoption on Nov 26, 1949, and commencement on Jan 26, 1950.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Constituent Assembly of India",
      "concept": "Functioning, Working Timeline & Dual Roles of the Constituent Assembly"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T2-04",
    "type": "CONCEPT",
    "title": "Committees of the Constituent Assembly & The Drafting Committee",
    "slug": "committees-of-constituent-assembly-and-drafting-committee",
    "url": "/topics/constituent-assembly/read#committees-of-constituent-assembly-and-drafting-committee",
    "description": "The division of labor in the Assembly across 8 major committees and numerous minor committees, with deep focus on the 7-member Drafting Committee chaired by Dr. B.R. Ambedkar appointed on August 29, 1947.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Constituent Assembly of India",
      "concept": "Committees of the Constituent Assembly & The Drafting Committee"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T2-05",
    "type": "CONCEPT",
    "title": "Major Sources Borrowed & Constitutional Borrowing Matrix",
    "slug": "sources-of-the-indian-constitution-borrowing-matrix",
    "url": "/topics/constituent-assembly/read#sources-of-the-indian-constitution-borrowing-matrix",
    "description": "The systematic constitutional borrowing from the Government of India Act 1935 and 10 world democracies (UK, USA, Ireland, Canada, Australia, Germany, USSR, France, South Africa, Japan), synthesized to suit Indian realities.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Constituent Assembly of India",
      "concept": "Major Sources Borrowed & Constitutional Borrowing Matrix"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T2-06",
    "type": "CONCEPT",
    "title": "Constituent Assembly: Rajasthan Representation, Critical Appraisals & Rebuttals",
    "slug": "constituent-assembly-rajasthan-representation-criticisms",
    "url": "/topics/constituent-assembly/read#constituent-assembly-rajasthan-representation-criticisms",
    "description": "The 14 representative members from Rajasthan princely states/Ajmer-Merwara, key officers and calligraphers of the Assembly, and comprehensive intellectual rebuttals to the 6 classical criticisms of the Assembly.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Constituent Assembly of India",
      "concept": "Constituent Assembly: Rajasthan Representation, Critical Appraisals & Rebuttals"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T3-01",
    "type": "CONCEPT",
    "title": "Preamble: Historical Genesis, Text, Source of Authority & Eminent Perspectives",
    "slug": "preamble-historical-genesis-text-authority-jurist-views",
    "url": "/topics/preamble/read#preamble-historical-genesis-text-authority-jurist-views",
    "description": "The preface of the Constitution rooted in Nehru’s Objectives Resolution (1946), verbatim text enacted on Oct 17, 1949, popular sovereignty (\"We the People\"), and famous characterizations by Palkhivala, Munshi, and Thakur Das Bhargava.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "The Preamble of the Indian Constitution",
      "concept": "Preamble: Historical Genesis, Text, Source of Authority & Eminent Perspectives"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-T3-02",
    "type": "CONCEPT",
    "title": "Nature of the Indian State: Sovereign, Socialist, Secular, Democratic, Republic",
    "slug": "nature-of-indian-state-sovereign-socialist-secular-democratic-republic",
    "url": "/topics/preamble/read#nature-of-indian-state-sovereign-socialist-secular-democratic-republic",
    "description": "In-depth analysis of the five defining attributes of the Indian State: absolute internal-external sovereignty, democratic (non-Marxist) socialism, positive secularism (Sarva Dharma Sambhava), representative democracy, and republican headship.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "The Preamble of the Indian Constitution",
      "concept": "Nature of the Indian State: Sovereign, Socialist, Secular, Democratic, Republic"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T3-03",
    "type": "CONCEPT",
    "title": "Constitutional Objectives: Justice, Liberty, Equality, Fraternity & Dignity",
    "slug": "constitutional-objectives-justice-liberty-equality-fraternity",
    "url": "/topics/preamble/read#constitutional-objectives-justice-liberty-equality-fraternity",
    "description": "The four constitutional ideals promised to citizens: three-dimensional Justice (Social, Economic, Political from Russian Revolution 1917), bounded Liberty (French Revolution 1789), Equality of Status/Opportunity, and Fraternity assuring individual dignity and national integrity.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "The Preamble of the Indian Constitution",
      "concept": "Constitutional Objectives: Justice, Liberty, Equality, Fraternity & Dignity"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T3-04",
    "type": "CONCEPT",
    "title": "Constitutional Status, Justiciability & Amendability of the Preamble",
    "slug": "status-justiciability-amendability-of-the-preamble",
    "url": "/topics/preamble/read#status-justiciability-amendability-of-the-preamble",
    "description": "The landmark judicial evolution of the Preamble from Berubari Union (1960 — not part of Constitution) to Kesavananda Bharati (1973 — integral part and amendable under Art 368 subject to Basic Structure) and LIC of India (1995), its non-justiciable legal character, and the 42nd Amendment.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "The Preamble of the Indian Constitution",
      "concept": "Constitutional Status, Justiciability & Amendability of the Preamble"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T04-09",
    "type": "CONCEPT",
    "title": "Official Language Constitutional Scheme (Part XVII), Special Linguistic Directives & Constitutional Morality",
    "slug": "official-language-constitutional-scheme-part-xvii-special-directives-constitutional-morality",
    "url": "/topics/schedules-of-the-indian-constitution/read#official-language-constitutional-scheme-part-xvii-special-directives-constitutional-morality",
    "description": "Constitutional architecture of Official Language under Part XVII (Articles 343–351), Official Languages Act 1963/1967 bilingual compromise, language of superior judiciary (Article 348), special directives for primary education in mother tongue (Article 350A) and Linguistic Minorities Commissioner (Article 350B), and the foundational doctrine of Constitutional Morality (Ambedkar to Navtej Johar and NCT Delhi).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Schedules of the Indian Constitution & Language Scheme",
      "concept": "Official Language Constitutional Scheme (Part XVII), Special Linguistic Directives & Constitutional Morality"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T4-01",
    "type": "CONCEPT",
    "title": "Overview, Evolution & Structural Matrix of the 12 Schedules",
    "slug": "schedules-overview-evolution-and-structural-matrix",
    "url": "/topics/schedules-of-the-indian-constitution/read#schedules-overview-evolution-and-structural-matrix",
    "description": "The functional role of Schedules as detailed constitutional appendices, their expansion from 8 in 1949 to 12 today through four constitutional amendments (1st, 52nd, 73rd, 74th), and their direct constitutional anchorage in specific Articles.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Schedules of the Indian Constitution & Language Scheme",
      "concept": "Overview, Evolution & Structural Matrix of the 12 Schedules"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-T4-02",
    "type": "CONCEPT",
    "title": "Schedules 1 to 4: Territory, Emoluments, Oaths and Rajya Sabha Seat Allocation",
    "slug": "schedules-1-to-4-territory-emoluments-oaths-rajya-sabha",
    "url": "/topics/schedules-of-the-indian-constitution/read#schedules-1-to-4-territory-emoluments-oaths-rajya-sabha",
    "description": "Detailed examination of the first four schedules: 1st Schedule (28 States & 8 UTs), 2nd Schedule (dignitary emoluments; Ministers excluded), 3rd Schedule (forms of oaths; President, VP, Governors excluded), and 4th Schedule (population-weighted Rajya Sabha seats).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Schedules of the Indian Constitution & Language Scheme",
      "concept": "Schedules 1 to 4: Territory, Emoluments, Oaths and Rajya Sabha Seat Allocation"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T4-03",
    "type": "CONCEPT",
    "title": "Schedules 5 and 6: Administration of Scheduled & Tribal Areas",
    "slug": "schedules-5-and-6-scheduled-and-tribal-areas-administration",
    "url": "/topics/schedules-of-the-indian-constitution/read#schedules-5-and-6-scheduled-and-tribal-areas-administration",
    "description": "Constitutional protection of indigenous tribal autonomy: 5th Schedule administration in 10 states via Tribes Advisory Councils and Governor regulations versus 6th Schedule Autonomous District Councils in the four North-Eastern states (Assam, Meghalaya, Tripura, Mizoram — AMTM).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Schedules of the Indian Constitution & Language Scheme",
      "concept": "Schedules 5 and 6: Administration of Scheduled & Tribal Areas"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T4-04",
    "type": "CONCEPT",
    "title": "7th Schedule: Legislative Lists, Division of Powers & Residuary Powers",
    "slug": "7th-schedule-division-of-powers-lists-and-residuary-power",
    "url": "/topics/schedules-of-the-indian-constitution/read#7th-schedule-division-of-powers-lists-and-residuary-power",
    "description": "The constitutional distribution of legislative competencies under Article 246 across Union List (100 subjects), State List (61 subjects), and Concurrent List (52 subjects), the historic 42nd Amendment shift of five subjects, and Canadian-style Residuary Powers under Article 248.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Schedules of the Indian Constitution & Language Scheme",
      "concept": "7th Schedule: Legislative Lists, Division of Powers & Residuary Powers"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T4-05",
    "type": "CONCEPT",
    "title": "8th Schedule: 22 Official Languages, Classical Languages & Amendments",
    "slug": "8th-schedule-22-official-languages-classical-languages",
    "url": "/topics/schedules-of-the-indian-constitution/read#8th-schedule-22-official-languages-classical-languages",
    "description": "The linguistic pluralism of the 8th Schedule: starting from 14 languages in 1949 to 22 languages today across three constitutional amendments (21st, 71st, 92nd), language exclusions (English and Rajasthani), and the 11 Classical Languages recognized by the Ministry of Culture.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Schedules of the Indian Constitution & Language Scheme",
      "concept": "8th Schedule: 22 Official Languages, Classical Languages & Amendments"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T4-06",
    "type": "CONCEPT",
    "title": "9th Schedule: Land Reforms, Protective Umbrella & The I.R. Coelho Doctrine",
    "slug": "9th-schedule-land-reforms-protective-umbrella-ir-coelho",
    "url": "/topics/schedules-of-the-indian-constitution/read#9th-schedule-land-reforms-protective-umbrella-ir-coelho",
    "description": "The creation of the 9th Schedule via the 1st Amendment (1951) and Article 31B to protect agrarian land reforms and Zamindari abolition from fundamental rights judicial review, its growth to 284 laws, and the landmark 9-judge I.R. Coelho ruling (2007) subjecting post-1973 laws to Basic Structure scrutiny.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Schedules of the Indian Constitution & Language Scheme",
      "concept": "9th Schedule: Land Reforms, Protective Umbrella & The I.R. Coelho Doctrine"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T4-07",
    "type": "CONCEPT",
    "title": "10th Schedule: Anti-Defection Law, Exceptions & Judicial Evolution",
    "slug": "10th-schedule-anti-defection-law-exceptions-judicial-evolution",
    "url": "/topics/schedules-of-the-indian-constitution/read#10th-schedule-anti-defection-law-exceptions-judicial-evolution",
    "description": "The 10th Schedule (Articles 102(2) & 191(2)) added by 52nd Amendment (1985) and amended by 91st Amendment (2003): disqualification grounds, the British convention of the Whip, Kihoto Holohan (1992) judicial review, and Keisham Meghchandra (2020) time-limit doctrine.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Schedules of the Indian Constitution & Language Scheme",
      "concept": "10th Schedule: Anti-Defection Law, Exceptions & Judicial Evolution"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T4-08",
    "type": "CONCEPT",
    "title": "11th and 12th Schedules: Panchayati Raj & Municipal Functional Devolutions",
    "slug": "11th-and-12th-schedules-local-governance-devolutions",
    "url": "/topics/schedules-of-the-indian-constitution/read#11th-and-12th-schedules-local-governance-devolutions",
    "description": "The constitutionalization of local democratic decentralization via the 73rd and 74th Amendments (1992): 11th Schedule (29 functional subjects for Panchayats under Article 243G) and 12th Schedule (18 functional subjects for Municipalities under Article 243W).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Schedules of the Indian Constitution & Language Scheme",
      "concept": "11th and 12th Schedules: Panchayati Raj & Municipal Functional Devolutions"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-T5-01",
    "type": "CONCEPT",
    "title": "Article 1: Union of States, Federal Nature & Territory of India",
    "slug": "article-1-union-of-states-federal-nature-territory-of-india",
    "url": "/topics/part-1-union-and-its-territory/read#article-1-union-of-states-federal-nature-territory-of-india",
    "description": "The foundational constitutional declaration of India as an indestructible \"Union of States\", the distinction between \"Union of India\" (States) and \"Territory of India\" (States, UTs, and Acquired Territories), and Dr. Ambedkar’s dual rationale against state secession.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part I: The Union and Its Territory",
      "concept": "Article 1: Union of States, Federal Nature & Territory of India"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-T5-02",
    "type": "CONCEPT",
    "title": "Articles 2 and 3: Admission vs Internal Reorganisation of States",
    "slug": "articles-2-and-3-admission-vs-internal-reorganisation-of-states",
    "url": "/topics/part-1-union-and-its-territory/read#articles-2-and-3-admission-vs-internal-reorganisation-of-states",
    "description": "The constitutional distinction between admitting new external territories under Article 2 versus reorganising existing internal state boundaries, areas, and names under Article 3, embodying India as an \"Indestructible Union of Destructible States\".",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part I: The Union and Its Territory",
      "concept": "Articles 2 and 3: Admission vs Internal Reorganisation of States"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T5-03",
    "type": "CONCEPT",
    "title": "Article 4 & Cession of Indian Territory: The Berubari Doctrine",
    "slug": "article-4-and-cession-of-territory-the-berubari-doctrine",
    "url": "/topics/part-1-union-and-its-territory/read#article-4-and-cession-of-territory-the-berubari-doctrine",
    "description": "Article 4’s rule that state reorganisation laws are enacted by simple majority outside Article 368, and the landmark Berubari Union doctrine (1960) establishing that ceding Indian territory to a foreign state requires a formal Constitutional Amendment.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part I: The Union and Its Territory",
      "concept": "Article 4 & Cession of Indian Territory: The Berubari Doctrine"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T5-04",
    "type": "CONCEPT",
    "title": "Union Territories: Constitutional Architecture & Enclaves Exchange",
    "slug": "union-territories-architecture-and-100th-amendment-enclaves-exchange",
    "url": "/topics/part-1-union-and-its-territory/read#union-territories-architecture-and-100th-amendment-enclaves-exchange",
    "description": "The constitutional categorization of Union Territories under Part VIII, reasons for their distinct administration, and the historic 100th Constitutional Amendment Act (2015) operationalizing the Indo-Bangladesh Land Boundary Agreement.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part I: The Union and Its Territory",
      "concept": "Union Territories: Constitutional Architecture & Enclaves Exchange"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T6-01",
    "type": "CONCEPT",
    "title": "Lapse of Paramountcy & The Patel-Menon Integration Architecture",
    "slug": "lapse-of-paramountcy-and-patel-menon-integration-architecture",
    "url": "/topics/unification-of-india/read#lapse-of-paramountcy-and-patel-menon-integration-architecture",
    "description": "The legal crisis created by Section 7(1)(b) of the Indian Independence Act 1947 (lapse of British paramountcy over 565 princely states) and the diplomatic strategy of Sardar Vallabhbhai Patel and V.P. Menon utilizing Standstill Agreements, Instruments of Accession, and Privy Purses.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Unification and Integration of India",
      "concept": "Lapse of Paramountcy & The Patel-Menon Integration Architecture"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-T6-02",
    "type": "CONCEPT",
    "title": "Integration of Challenging States: Junagadh, Hyderabad & Jammu & Kashmir",
    "slug": "integration-of-challenging-states-junagadh-hyderabad-and-jammu-kashmir",
    "url": "/topics/unification-of-india/read#integration-of-challenging-states-junagadh-hyderabad-and-jammu-kashmir",
    "description": "The distinct historical, legal, and military dynamics of integrating the three recalcitrant princely states: the Junagadh plebiscite (1948), Operation Polo in Hyderabad (1948), and the Instrument of Accession and Article 370 trajectory in Jammu & Kashmir (1947–2019).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Unification and Integration of India",
      "concept": "Integration of Challenging States: Junagadh, Hyderabad & Jammu & Kashmir"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T6-03",
    "type": "CONCEPT",
    "title": "Liberation of Foreign Enclaves: French and Portuguese Territories",
    "slug": "liberation-of-foreign-enclaves-french-and-portuguese-territories",
    "url": "/topics/unification-of-india/read#liberation-of-foreign-enclaves-french-and-portuguese-territories",
    "description": "The diplomatic transfer of French colonial possessions (Puducherry, Chandernagore) and the military liberation of Portuguese settlements (Goa, Daman & Diu, Dadra & Nagar Haveli via Operation Vijay) into the Indian Union.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Unification and Integration of India",
      "concept": "Liberation of Foreign Enclaves: French and Portuguese Territories"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T6-04",
    "type": "CONCEPT",
    "title": "Integration of Sikkim: From Associate State to Full Statehood",
    "slug": "integration-of-sikkim-from-associate-state-to-full-statehood",
    "url": "/topics/unification-of-india/read#integration-of-sikkim-from-associate-state-to-full-statehood",
    "description": "The novel constitutional mechanism of Sikkim’s integration: from a 1950 protectorate under the Chogyal dynasty to an \"Associate State\" via the 35th Amendment (1974), full statehood via the 36th Amendment (1975), and the 1950 four-fold state classification.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Unification and Integration of India",
      "concept": "Integration of Sikkim: From Associate State to Full Statehood"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T7-01",
    "type": "CONCEPT",
    "title": "Linguistic Demands & Early Commissions: Dhar Commission & JVP Committee",
    "slug": "linguistic-demands-and-early-commissions-dhar-and-jvp",
    "url": "/topics/reorganisation-of-states/read#linguistic-demands-and-early-commissions-dhar-and-jvp",
    "description": "The historical emergence of the demand for linguistic states after 1947, the S.K. Dhar Commission’s recommendation prioritizing administrative convenience, and the JVP Committee’s initial rejection of language-based state reorganization.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Reorganisation of States & Zonal Councils",
      "concept": "Linguistic Demands & Early Commissions: Dhar Commission & JVP Committee"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-T7-02",
    "type": "CONCEPT",
    "title": "Andhra Crisis & Fazal Ali Commission (States Reorganisation Commission 1953–55)",
    "slug": "andhra-crisis-and-fazal-ali-commission-src-1953-1955",
    "url": "/topics/reorganisation-of-states/read#andhra-crisis-and-fazal-ali-commission-src-1953-1955",
    "description": "The creation of Andhra State in 1953 following Potti Sreeramulu’s fast unto death, the appointment of the Fazal Ali Commission (SRC), its acceptance of language as a major criterion, its rejection of \"One Language, One State\", and its four core principles.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Reorganisation of States & Zonal Councils",
      "concept": "Andhra Crisis & Fazal Ali Commission (States Reorganisation Commission 1953–55)"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T7-03",
    "type": "CONCEPT",
    "title": "States Reorganisation Act 1956 & Evolution of States (1956–2020)",
    "slug": "states-reorganisation-act-1956-and-historical-evolution-of-indian-states",
    "url": "/topics/reorganisation-of-states/read#states-reorganisation-act-1956-and-historical-evolution-of-indian-states",
    "description": "The landmark 7th Constitutional Amendment Act and States Reorganisation Act 1956 creating 14 States and 6 UTs, followed by the chronological evolution through 1960 (GJ/MH), 1966 (Haryana), 1972 (NE States), 2000 (CG, UK, JH), 2014 (Telangana), 2019 (J&K UTs), and 2020 (UT merger) leading to 28 States and 8 UTs.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Reorganisation of States & Zonal Councils",
      "concept": "States Reorganisation Act 1956 & Evolution of States (1956–2020)"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T7-04",
    "type": "CONCEPT",
    "title": "Zonal Councils & North-Eastern Council: Inter-State Cooperative Architecture",
    "slug": "zonal-councils-and-north-eastern-council-inter-state-cooperative-architecture",
    "url": "/topics/reorganisation-of-states/read#zonal-councils-and-north-eastern-council-inter-state-cooperative-architecture",
    "description": "The statutory framework of Zonal Councils created under Part III of the States Reorganisation Act 1956 and the North-Eastern Council (1971), establishing regional cooperation, linguistic dispute resolution, and economic coordination under the chairmanship of the Union Home Minister.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Reorganisation of States & Zonal Councils",
      "concept": "Zonal Councils & North-Eastern Council: Inter-State Cooperative Architecture"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T8-01",
    "type": "CONCEPT",
    "title": "Citizenship: Meaning, Civil Rights & Constitutional Articles (5–11)",
    "slug": "citizenship-meaning-civil-rights-and-constitutional-articles-5-to-11",
    "url": "/topics/part-2-citizenship/read#citizenship-meaning-civil-rights-and-constitutional-articles-5-to-11",
    "description": "The legal and political meaning of citizenship, exclusive constitutional rights and privileges reserved for citizens (Arts 15, 16, 19, 29, 30, 326), and the transitional constitutional provisions governing citizenship at the commencement of the Constitution (Articles 5 to 11).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part II: Citizenship (Articles 5 to 11)",
      "concept": "Citizenship: Meaning, Civil Rights & Constitutional Articles (5–11)"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-T8-02",
    "type": "CONCEPT",
    "title": "Acquisition of Indian Citizenship under Citizenship Act 1955",
    "slug": "acquisition-of-indian-citizenship-under-citizenship-act-1955",
    "url": "/topics/part-2-citizenship/read#acquisition-of-indian-citizenship-under-citizenship-act-1955",
    "description": "The five statutory pathways for acquiring Indian citizenship under the Citizenship Act 1955 (Birth, Descent, Registration, Naturalisation, and Incorporation of Territory) and their evolving legal criteria through landmark amendments (1986, 1992, 2003, 2015, 2019).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part II: Citizenship (Articles 5 to 11)",
      "concept": "Acquisition of Indian Citizenship under Citizenship Act 1955"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T8-03",
    "type": "CONCEPT",
    "title": "Loss of Indian Citizenship: Renunciation, Termination & Deprivation",
    "slug": "loss-of-indian-citizenship-renunciation-termination-and-deprivation",
    "url": "/topics/part-2-citizenship/read#loss-of-indian-citizenship-renunciation-termination-and-deprivation",
    "description": "The three legal mechanisms for losing Indian citizenship under Sections 8, 9, and 10 of the Citizenship Act 1955: voluntary Renunciation, automatic Termination upon acquiring foreign nationality, and compulsory Deprivation by the Central Government on grounds of fraud, disloyalty, or treason.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part II: Citizenship (Articles 5 to 11)",
      "concept": "Loss of Indian Citizenship: Renunciation, Termination & Deprivation"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T8-04",
    "type": "CONCEPT",
    "title": "Single Citizenship vs Dual Citizenship & Constitutional Unity",
    "slug": "single-citizenship-vs-dual-citizenship-and-constitutional-unity",
    "url": "/topics/part-2-citizenship/read#single-citizenship-vs-dual-citizenship-and-constitutional-unity",
    "description": "The Indian constitutional doctrine of Single Citizenship (Article 9) establishing undivided allegiance to the Union without separate state citizenship, contrasting with dual citizenship federal models like the United States and Switzerland.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part II: Citizenship (Articles 5 to 11)",
      "concept": "Single Citizenship vs Dual Citizenship & Constitutional Unity"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-T8-05",
    "type": "CONCEPT",
    "title": "Overseas Citizen of India (OCI) Scheme & Rights Framework",
    "slug": "overseas-citizen-of-india-oci-scheme-and-rights-framework",
    "url": "/topics/part-2-citizenship/read#overseas-citizen-of-india-oci-scheme-and-rights-framework",
    "description": "The statutory Overseas Citizen of India (OCI) cardholder scheme instituted under the L.M. Singhvi Committee recommendations, the 2015 merger of PIO into OCI, the extensive economic/educational rights granted under Section 7B, the strict denial of political/constitutional rights under Section 7B(2), and the NRI vs OCI vs PIO matrix.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part II: Citizenship (Articles 5 to 11)",
      "concept": "Overseas Citizen of India (OCI) Scheme & Rights Framework"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T8-06",
    "type": "CONCEPT",
    "title": "Contemporary Citizenship Dynamics: Renunciation Trends & Policy Debate",
    "slug": "citizenship-policy-renunciation-trends-and-dual-citizenship-debate",
    "url": "/topics/part-2-citizenship/read#citizenship-policy-renunciation-trends-and-dual-citizenship-debate",
    "description": "The contemporary socio-economic and policy dimensions of Indian citizenship: the renunciation of citizenship by over 1.6 million Indians since 2011, passport power rankings, economic diplomacy, Golden Visas, and the cost-benefit analysis of permitting conditional dual citizenship.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part II: Citizenship (Articles 5 to 11)",
      "concept": "Contemporary Citizenship Dynamics: Renunciation Trends & Policy Debate"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T9-01",
    "type": "CONCEPT",
    "title": "Part III Overview & Nature of Fundamental Rights",
    "slug": "part-3-overview-nature-of-fundamental-rights",
    "url": "/topics/part-3-fundamental-rights/read#part-3-overview-nature-of-fundamental-rights",
    "description": "Part III of the Indian Constitution (Articles 12–35), known as the Magna Carta of India, guarantees justifiable basic political and civil rights against State encroachment.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part III: Fundamental Rights",
      "concept": "Part III Overview & Nature of Fundamental Rights"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-T9-02",
    "type": "CONCEPT",
    "title": "Article 12 — Definition of State & Instrumentalities",
    "slug": "article-12-definition-of-state",
    "url": "/topics/part-3-fundamental-rights/read#article-12-definition-of-state",
    "description": "Article 12 defines the term \"State\" for Part III enforcement, encompassing Union/State executives and legislatures, local authorities, statutory instrumentalities, and the administrative side of the Judiciary.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part III: Fundamental Rights",
      "concept": "Article 12 — Definition of State & Instrumentalities"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T9-03",
    "type": "CONCEPT",
    "title": "Article 13 — Judicial Review & Constitutional Doctrines",
    "slug": "article-13-judicial-review-doctrines",
    "url": "/topics/part-3-fundamental-rights/read#article-13-judicial-review-doctrines",
    "description": "Article 13 invalidates pre- and post-constitutional laws inconsistent with Fundamental Rights and establishes the constitutional foundation for judicial review through the Doctrines of Severability, Eclipse, and Waiver.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part III: Fundamental Rights",
      "concept": "Article 13 — Judicial Review & Constitutional Doctrines"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T9-04",
    "type": "CONCEPT",
    "title": "Article 14 — Right to Equality & Non-Arbitrariness",
    "slug": "article-14-equality-non-arbitrariness",
    "url": "/topics/part-3-fundamental-rights/read#article-14-equality-non-arbitrariness",
    "description": "Article 14 commands that the State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India, prohibiting class legislation while permitting reasonable classification.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part III: Fundamental Rights",
      "concept": "Article 14 — Right to Equality & Non-Arbitrariness"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T9-05",
    "type": "CONCEPT",
    "title": "Articles 15 & 16 — Protective Discrimination & Reservation Jurisprudence",
    "slug": "articles-15-16-reservations-protective-discrimination",
    "url": "/topics/part-3-fundamental-rights/read#articles-15-16-reservations-protective-discrimination",
    "description": "Articles 15 and 16 prohibit discrimination on specified grounds while enabling affirmative action, creamy layer exclusions, EWS quotas (103rd Amendment), and reservation in public employment and education.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part III: Fundamental Rights",
      "concept": "Articles 15 & 16 — Protective Discrimination & Reservation Jurisprudence"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T9-06",
    "type": "CONCEPT",
    "title": "Articles 17 & 18 — Abolition of Untouchability & Titles",
    "slug": "articles-17-18-abolition-untouchability-titles",
    "url": "/topics/part-3-fundamental-rights/read#articles-17-18-abolition-untouchability-titles",
    "description": "Article 17 absolutely abolishes untouchability in any form, enforceable against the State and private individuals, while Article 18 abolishes aristocratic titles to establish civic equality.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part III: Fundamental Rights",
      "concept": "Articles 17 & 18 — Abolition of Untouchability & Titles"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-T9-07",
    "type": "CONCEPT",
    "title": "Article 19 — Democratic Freedoms & Contemporary Civil Liberties",
    "slug": "article-19-democratic-freedoms-civil-liberties",
    "url": "/topics/part-3-fundamental-rights/read#article-19-democratic-freedoms-civil-liberties",
    "description": "Article 19 guarantees 6 fundamental democratic freedoms to citizens, subject to exhaustive, reasonable restrictions under Articles 19(2) through 19(6), covering modern civil liberties like internet access, surveillance safeguards, and peaceful assembly.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part III: Fundamental Rights",
      "concept": "Article 19 — Democratic Freedoms & Contemporary Civil Liberties"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T9-08",
    "type": "CONCEPT",
    "title": "Article 20 — Protection in Respect of Conviction for Offences",
    "slug": "article-20-conviction-protections",
    "url": "/topics/part-3-fundamental-rights/read#article-20-conviction-protections",
    "description": "Article 20 provides vital criminal justice protections: prohibition of ex-post facto penal laws (20(1)), prohibition against double jeopardy (20(2)), and prohibition against self-incrimination (20(3)).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part III: Fundamental Rights",
      "concept": "Article 20 — Protection in Respect of Conviction for Offences"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T9-09",
    "type": "CONCEPT",
    "title": "Article 21 & 21A — Life, Liberty, Privacy & Education",
    "slug": "article-21-21a-life-liberty-privacy-education",
    "url": "/topics/part-3-fundamental-rights/read#article-21-21a-life-liberty-privacy-education",
    "description": "Article 21 guarantees life and personal liberty except according to procedure established by law (expanded into substantive due process), encompassing privacy, dignity, living wills, and the Article 21A Right to Education.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part III: Fundamental Rights",
      "concept": "Article 21 & 21A — Life, Liberty, Privacy & Education"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T9-10",
    "type": "CONCEPT",
    "title": "Article 22 — Punitive Arrest Safeguards & Preventive Detention",
    "slug": "article-22-arrest-safeguards-preventive-detention",
    "url": "/topics/part-3-fundamental-rights/read#article-22-arrest-safeguards-preventive-detention",
    "description": "Article 22 establishes dual constitutional regimes: procedural safeguards against ordinary punitive arrest (22(1)–(2)) and constitutional limitations/safeguards on preventive detention laws (22(4)–(7)).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part III: Fundamental Rights",
      "concept": "Article 22 — Punitive Arrest Safeguards & Preventive Detention"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T9-11",
    "type": "CONCEPT",
    "title": "Articles 23 & 24 — Right Against Exploitation",
    "slug": "articles-23-24-right-against-exploitation",
    "url": "/topics/part-3-fundamental-rights/read#articles-23-24-right-against-exploitation",
    "description": "Articles 23 and 24 prohibit human trafficking, begar, forced labour, and the employment of children below 14 years in hazardous occupations, creating enforceable horizontal rights against exploitation.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part III: Fundamental Rights",
      "concept": "Articles 23 & 24 — Right Against Exploitation"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-T9-12",
    "type": "CONCEPT",
    "title": "Articles 25–28 — Freedom of Religion & Essential Religious Practices",
    "slug": "articles-25-28-freedom-of-religion-essential-practices",
    "url": "/topics/part-3-fundamental-rights/read#articles-25-28-freedom-of-religion-essential-practices",
    "description": "Articles 25–28 guarantee individual freedom of conscience and propagation, collective religious institutional management, tax immunity for religious promotion, and freedom from religious instruction in State schools, governed by the Essential Religious Practices doctrine.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part III: Fundamental Rights",
      "concept": "Articles 25–28 — Freedom of Religion & Essential Religious Practices"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T9-13",
    "type": "CONCEPT",
    "title": "Articles 29 & 30 — Cultural & Educational Rights of Minorities",
    "slug": "articles-29-30-minority-cultural-educational-rights",
    "url": "/topics/part-3-fundamental-rights/read#articles-29-30-minority-cultural-educational-rights",
    "description": "Articles 29 and 30 protect the cultural identity of all distinct citizen groups and guarantee religious and linguistic minorities the fundamental right to establish and administer educational institutions.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part III: Fundamental Rights",
      "concept": "Articles 29 & 30 — Cultural & Educational Rights of Minorities"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T9-14",
    "type": "CONCEPT",
    "title": "Articles 31 & 300A — Property Abolition & Due Process Jurisprudence",
    "slug": "articles-31-300a-property-due-process",
    "url": "/topics/part-3-fundamental-rights/read#articles-31-300a-property-due-process",
    "description": "Traces the constitutional transition of the Right to Property from a Fundamental Right (Article 31) to a constitutional/legal right (Article 300A by the 44th Amendment), alongside contemporary Supreme Court directives against punitive property demolitions (\"Bulldozer Justice\").",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part III: Fundamental Rights",
      "concept": "Articles 31 & 300A — Property Abolition & Due Process Jurisprudence"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T9-15",
    "type": "CONCEPT",
    "title": "Article 32 & Writs — Right to Constitutional Remedies",
    "slug": "article-32-writs-constitutional-remedies",
    "url": "/topics/part-3-fundamental-rights/read#article-32-writs-constitutional-remedies",
    "description": "Article 32 guarantees the fundamental right to approach the Supreme Court for the enforcement of Part III rights, empowering the Court to issue 5 prerogative writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo Warranto.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part III: Fundamental Rights",
      "concept": "Article 32 & Writs — Right to Constitutional Remedies"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T9-16",
    "type": "CONCEPT",
    "title": "Articles 33–35 & Amendability — Limitations & Basic Structure",
    "slug": "articles-33-35-amendability-basic-structure",
    "url": "/topics/part-3-fundamental-rights/read#articles-33-35-amendability-basic-structure",
    "description": "Articles 33–35 empower Parliament to modify Fundamental Rights for armed forces, indemnify acts during Martial Law, and exclusively legislate for Part III, framed within the historical amendability debate from Shankari Prasad (1951) to Kesavananda Bharati (1973) and Minerva Mills (1980).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part III: Fundamental Rights",
      "concept": "Articles 33–35 & Amendability — Limitations & Basic Structure"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T10-01",
    "type": "CONCEPT",
    "title": "Nature, Features & Justiciability of Directive Principles (Articles 36–37)",
    "slug": "dpsp-nature-justiciability-article-37",
    "url": "/topics/part-4-directive-principles-of-state-policy/read#dpsp-nature-justiciability-article-37",
    "description": "Part IV of the Indian Constitution (Articles 36–51) embodies the ideals of a Welfare State and socio-economic democracy, borrowed from Ireland, which are non-justiciable under Article 37 yet declared fundamental in governance.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part IV: Directive Principles of State Policy",
      "concept": "Nature, Features & Justiciability of Directive Principles (Articles 36–37)"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-T10-02",
    "type": "CONCEPT",
    "title": "Three-Fold Typology & Constitutional Amendments of DPSPs",
    "slug": "dpsp-classification-socialistic-gandhian-liberal",
    "url": "/topics/part-4-directive-principles-of-state-policy/read#dpsp-classification-socialistic-gandhian-liberal",
    "description": "Although the Constitution does not formally classify DPSPs, they are categorized based on their ideological content into Socialistic, Gandhian, and Liberal-Intellectual principles, enriched by the 42nd, 44th, 86th, and 97th Amendments.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part IV: Directive Principles of State Policy",
      "concept": "Three-Fold Typology & Constitutional Amendments of DPSPs"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T10-03",
    "type": "CONCEPT",
    "title": "Article 44 & The Uniform Civil Code (UCC) Jurisprudence",
    "slug": "article-44-uniform-civil-code-jurisprudence",
    "url": "/topics/part-4-directive-principles-of-state-policy/read#article-44-uniform-civil-code-jurisprudence",
    "description": "Article 44 directs the State to secure for citizens a Uniform Civil Code throughout the territory of India, balancing religious personal laws against gender equality, constitutional morality, and contemporary legislative models like the Uttarakhand UCC Act 2024.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part IV: Directive Principles of State Policy",
      "concept": "Article 44 & The Uniform Civil Code (UCC) Jurisprudence"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T10-04",
    "type": "CONCEPT",
    "title": "Fundamental Rights vs DPSPs Conflict & Harmonious Construction",
    "slug": "part-3-part-4-conflict-harmonious-construction",
    "url": "/topics/part-4-directive-principles-of-state-policy/read#part-3-part-4-conflict-harmonious-construction",
    "description": "Traces the constitutional struggle between Part III and Part IV from Champakam Dorairajan (1951) to Kesavananda Bharati (1973) and Minerva Mills (1980), establishing the Doctrine of Harmonious Construction and the 2024 Property Owners Association benchmark on Article 39(b).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part IV: Directive Principles of State Policy",
      "concept": "Fundamental Rights vs DPSPs Conflict & Harmonious Construction"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T10-05",
    "type": "CONCEPT",
    "title": "Directives Outside Part IV & Statutory Implementation Trajectory",
    "slug": "directivism-outside-part-4-implementation-schemes",
    "url": "/topics/part-4-directive-principles-of-state-policy/read#directivism-outside-part-4-implementation-schemes",
    "description": "Explores non-Part IV constitutional directives (Articles 335, 350A, 351) alongside the vast legislative and welfare architecture created by the Union and States to realize the Directive Principles.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part IV: Directive Principles of State Policy",
      "concept": "Directives Outside Part IV & Statutory Implementation Trajectory"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T11-01",
    "type": "CONCEPT",
    "title": "President of India: Constitutional Status, Electoral College & Impeachment",
    "slug": "president-constitutional-status-electoral-college-impeachment",
    "url": "/topics/the-union-executive/read#president-constitutional-status-electoral-college-impeachment",
    "description": "The President as the formal Head of State and supreme commander of armed forces (Art 52-53), the proportional representation electoral college formula (Arts 54-55), and the strict quasi-judicial impeachment procedure for violation of the Constitution (Art 61).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "The Union Executive: President, Vice-President, PM & Council of Ministers",
      "concept": "President of India: Constitutional Status, Electoral College & Impeachment"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T11-02",
    "type": "CONCEPT",
    "title": "President's Powers: Veto Powers (Art 111) & Ordinance-Making Power (Art 123)",
    "slug": "president-powers-veto-and-ordinance-making-power",
    "url": "/topics/the-union-executive/read#president-powers-veto-and-ordinance-making-power",
    "description": "The tripartite presidential veto powers over Parliamentary legislation (Absolute, Suspensive, Pocket Veto) and the exceptional legislative power to promulgate Ordinances under Article 123 with strict judicial limitations against re-promulgation (D.C. Wadhwa, Krishna Kumar Singh).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "The Union Executive: President, Vice-President, PM & Council of Ministers",
      "concept": "President's Powers: Veto Powers (Art 111) & Ordinance-Making Power (Art 123)"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T11-03",
    "type": "CONCEPT",
    "title": "President's Judicial & Pardoning Powers (Article 72)",
    "slug": "president-judicial-and-pardoning-powers-article-72",
    "url": "/topics/the-union-executive/read#president-judicial-and-pardoning-powers-article-72",
    "description": "The executive clemency powers of the President under Article 72 across five forms of mercy (Pardon, Commutation, Remission, Respite, Reprieve) and the judicial review jurisprudence governing executive discretion (Kehar Singh, Maru Ram, Epuru Sudhakar, Shatrughan Chauhan).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "The Union Executive: President, Vice-President, PM & Council of Ministers",
      "concept": "President's Judicial & Pardoning Powers (Article 72)"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T11-04",
    "type": "CONCEPT",
    "title": "Vice-President of India: Status, Election (Art 66), Removal (Art 67) & Role",
    "slug": "vice-president-constitutional-status-election-removal",
    "url": "/topics/the-union-executive/read#vice-president-constitutional-status-election-removal",
    "description": "The Vice-President as the second-highest constitutional dignitary (Art 63), ex-officio Chairman of Rajya Sabha (Art 64), electoral college comprising all MPs (Art 66), and unique removal procedure by Effective Majority in Rajya Sabha (Art 67).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "The Union Executive: President, Vice-President, PM & Council of Ministers",
      "concept": "Vice-President of India: Status, Election (Art 66), Removal (Art 67) & Role"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-T11-05",
    "type": "CONCEPT",
    "title": "Prime Minister & Central Council of Ministers: Architecture & Collective Responsibility",
    "slug": "prime-minister-and-central-council-of-ministers-architecture",
    "url": "/topics/the-union-executive/read#prime-minister-and-central-council-of-ministers-architecture",
    "description": "The Prime Minister as the real executive (De Facto), Council of Ministers aiding and advising the President (Arts 74-75), 42nd/44th Amendments binding advice, 91st Amendment 15% size ceiling, and collective responsibility to Lok Sabha (Art 75(3)).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "The Union Executive: President, Vice-President, PM & Council of Ministers",
      "concept": "Prime Minister & Central Council of Ministers: Architecture & Collective Responsibility"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T11-06",
    "type": "CONCEPT",
    "title": "Attorney General of India (Article 76) & Law Officers Architecture",
    "slug": "attorney-general-of-india-constitutional-status-and-powers",
    "url": "/topics/the-union-executive/read#attorney-general-of-india-constitutional-status-and-powers",
    "description": "The Attorney General as the highest law officer of India (Art 76), qualified as a Supreme Court Judge, holding office during presidential pleasure, with unique rights to participate in Parliamentary proceedings without voting (Art 88).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "The Union Executive: President, Vice-President, PM & Council of Ministers",
      "concept": "Attorney General of India (Article 76) & Law Officers Architecture"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-T11-07",
    "type": "CONCEPT",
    "title": "Coalition Governments, Common Minimum Programme, Hung Assemblies & Pressure Groups",
    "slug": "coalition-governments-common-minimum-programme-hung-assemblies-pressure-groups",
    "url": "/topics/the-union-executive/read#coalition-governments-common-minimum-programme-hung-assemblies-pressure-groups",
    "description": "Evolution and dynamics of coalition governance in India (1989–2014 multi-party coalition era vs post-2014 dominant alliances), Common Minimum Programme (CMP), constitutional conventions on hung assemblies (Sarkaria and Punchhi Commission invitation hierarchy), and the typology of pressure groups (Almond-Finer classification: associational, institutional, non-associational, anomic).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "The Union Executive: President, Vice-President, PM & Council of Ministers",
      "concept": "Coalition Governments, Common Minimum Programme, Hung Assemblies & Pressure Groups"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T12-01",
    "type": "CONCEPT",
    "title": "Governor of the State: Constitutional Dual Role, Appointment & Removal",
    "slug": "governor-constitutional-dual-role-appointment-and-removal",
    "url": "/topics/the-state-executive/read#governor-constitutional-dual-role-appointment-and-removal",
    "description": "The Governor as the constitutional Head of State and representative of the Centre (Art 153-154), appointment under presidential warrant (Art 155), pleasure tenure (Art 156), and landmark judicial restraints against arbitrary removal (B.P. Singhal 2010).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part VI: The State Executive (Governor, Chief Minister & Advocate General)",
      "concept": "Governor of the State: Constitutional Dual Role, Appointment & Removal"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T12-02",
    "type": "CONCEPT",
    "title": "Governor's Discretionary Powers (Art 163), Bill Reservation (Arts 200–201) & Ordinance (Art 213)",
    "slug": "governor-discretionary-powers-bill-reservation-and-ordinance",
    "url": "/topics/the-state-executive/read#governor-discretionary-powers-bill-reservation-and-ordinance",
    "description": "The explicit constitutional and situational discretion of the Governor under Article 163, mandatory floor test jurisprudence (S.R. Bommai), reservation of state bills for Presidential consideration (Arts 200-201), and state ordinance power (Art 213).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part VI: The State Executive (Governor, Chief Minister & Advocate General)",
      "concept": "Governor's Discretionary Powers (Art 163), Bill Reservation (Arts 200–201) & Ordinance (Art 213)"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T12-03",
    "type": "CONCEPT",
    "title": "Chief Minister & State Council of Ministers: Constitutional Architecture",
    "slug": "chief-minister-and-state-council-of-ministers-architecture",
    "url": "/topics/the-state-executive/read#chief-minister-and-state-council-of-ministers-architecture",
    "description": "The Chief Minister as the real state executive, collective responsibility to the Legislative Assembly (Art 164), 91st Amendment size limits (15% ceiling, minimum 12), and aid & advice jurisprudence (Shamsher Singh, S.R. Bommai).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part VI: The State Executive (Governor, Chief Minister & Advocate General)",
      "concept": "Chief Minister & State Council of Ministers: Constitutional Architecture"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-T12-04",
    "type": "CONCEPT",
    "title": "Advocate General for the State (Article 165) & Rights in Legislature (Art 177)",
    "slug": "advocate-general-for-the-state-constitutional-status-and-powers",
    "url": "/topics/the-state-executive/read#advocate-general-for-the-state-constitutional-status-and-powers",
    "description": "The Advocate General as the highest law officer in the State (Art 165), qualified as a High Court Judge, holding office during governor’s pleasure, with the constitutional right to participate in State Legislature proceedings without voting (Art 177).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part VI: The State Executive (Governor, Chief Minister & Advocate General)",
      "concept": "Advocate General for the State (Article 165) & Rights in Legislature (Art 177)"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-T13-01",
    "type": "CONCEPT",
    "title": "All-India Services (Article 312) & Framework of Public Services (Arts 308–309)",
    "slug": "all-india-services-and-constitutional-framework-of-public-services",
    "url": "/topics/civil-services-and-public-services/read#all-india-services-and-constitutional-framework-of-public-services",
    "description": "The constitutional classification of civil services in India (Part XIV), the creation of All-India Services under Article 312 via Rajya Sabha special federal resolution, and the dual-control administrative framework (IAS, IPS, IFS).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part XIV: Civil Services, Doctrine of Pleasure & Constitutional Safeguards",
      "concept": "All-India Services (Article 312) & Framework of Public Services (Arts 308–309)"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T13-02",
    "type": "CONCEPT",
    "title": "Doctrine of Pleasure (Art 310) & Article 311 Safeguards with Exceptions",
    "slug": "doctrine-of-pleasure-and-article-311-constitutional-safeguards",
    "url": "/topics/civil-services-and-public-services/read#doctrine-of-pleasure-and-article-311-constitutional-safeguards",
    "description": "The British common-law Doctrine of Pleasure embodied in Article 310, constitutional safeguards against arbitrary dismissal under Article 311 (opportunity of hearing), and the three critical statutory exceptions (conviction, impracticability, state security) upheld in Tulsiram Patel (1985).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part XIV: Civil Services, Doctrine of Pleasure & Constitutional Safeguards",
      "concept": "Doctrine of Pleasure (Art 310) & Article 311 Safeguards with Exceptions"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T14-01",
    "type": "CONCEPT",
    "title": "Parliament Architecture: Bicameralism (Art 79), Composition & Sessions",
    "slug": "parliament-architecture-bicameralism-composition-and-sessions",
    "url": "/topics/the-union-legislature/read#parliament-architecture-bicameralism-composition-and-sessions",
    "description": "The tripartite structure of Parliament (President, Rajya Sabha, Lok Sabha under Art 79), federal composition of Rajya Sabha (Art 80), democratic representation in Lok Sabha (Art 81), and constitutional rules for sessions, prorogation, and quorum (Arts 83, 85, 100).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part V: The Union Legislature (Parliament Architecture, Procedure & Budget)",
      "concept": "Parliament Architecture: Bicameralism (Art 79), Composition & Sessions"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-T14-02",
    "type": "CONCEPT",
    "title": "Presiding Officers: Speaker vs Chairman (Arts 89, 93) & Disqualifications",
    "slug": "presiding-officers-speaker-vs-chairman-and-disqualifications",
    "url": "/topics/the-union-legislature/read#presiding-officers-speaker-vs-chairman-and-disqualifications",
    "description": "The constitutional roles and powers of the Speaker of Lok Sabha and Chairman of Rajya Sabha (Arts 89, 93), casting vote (Art 100), Money Bill certification (Art 110(3)), and the dual disqualification frameworks under Article 102 vs the 10th Schedule (Kihoto Hollohan).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part V: The Union Legislature (Parliament Architecture, Procedure & Budget)",
      "concept": "Presiding Officers: Speaker vs Chairman (Arts 89, 93) & Disqualifications"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T14-03",
    "type": "CONCEPT",
    "title": "Legislative Enactments: Classification of Bills (Arts 107–110, 117) & Joint Sittings (Art 108)",
    "slug": "legislative-enactments-classification-of-bills-and-joint-sittings",
    "url": "/topics/the-union-legislature/read#legislative-enactments-classification-of-bills-and-joint-sittings",
    "description": "The four-tier classification of parliamentary bills (Ordinary, Money, Financial Types I & II), Speaker’s Money Bill certification, Article 108 Joint Sittings architecture with strict exclusions (Money Bills & CAAs), and Article 107 rules on the lapse of bills upon dissolution.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part V: The Union Legislature (Parliament Architecture, Procedure & Budget)",
      "concept": "Legislative Enactments: Classification of Bills (Arts 107–110, 117) & Joint Sittings (Art 108)"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T14-04",
    "type": "CONCEPT",
    "title": "Parliamentary Financial Control: Budget Procedure & Cut Motions (Arts 112–116)",
    "slug": "parliamentary-financial-control-and-budget-procedure",
    "url": "/topics/the-union-legislature/read#parliamentary-financial-control-and-budget-procedure",
    "description": "The six-stage procedure of the Union Budget (Annual Financial Statement under Art 112), distinction between Charged and Voted expenditure, Demands for Grants (Art 113), the three Cut Motions (Policy, Economy, Token), the Guillotine, and Appropriation vs Finance Bills.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part V: The Union Legislature (Parliament Architecture, Procedure & Budget)",
      "concept": "Parliamentary Financial Control: Budget Procedure & Cut Motions (Arts 112–116)"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T14-05",
    "type": "CONCEPT",
    "title": "Parliamentary Standing Committees: PAC (1921), Estimates (1950), COPU (1964) & DRSCs",
    "slug": "parliamentary-standing-committees-pac-estimates-copu-and-drscs",
    "url": "/topics/the-union-legislature/read#parliamentary-standing-committees-pac-estimates-copu-and-drscs",
    "description": "The three premier Financial Standing Committees (Public Accounts Committee, Estimates Committee with 30 LS-only members, Committee on Public Undertakings), the 24 Departmentally Related Standing Committees (DRSCs), and the constitutional ban on ministerial membership.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part V: The Union Legislature (Parliament Architecture, Procedure & Budget)",
      "concept": "Parliamentary Standing Committees: PAC (1921), Estimates (1950), COPU (1964) & DRSCs"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T14-06",
    "type": "CONCEPT",
    "title": "Parliamentary Privileges (Art 105), Motions & Procedural Devices",
    "slug": "parliamentary-privileges-motions-and-procedural-devices",
    "url": "/topics/the-union-legislature/read#parliamentary-privileges-motions-and-procedural-devices",
    "description": "Constitutional privileges and immunities of Parliament (Article 105), individual vs collective privileges, parliamentary devices (Question Hour, Zero Hour, Calling Attention), and major motions (No-Confidence, Adjournment, Censure).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part V: The Union Legislature (Parliament Architecture, Procedure & Budget)",
      "concept": "Parliamentary Privileges (Art 105), Motions & Procedural Devices"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T15-01",
    "type": "CONCEPT",
    "title": "State Legislature Architecture & Creation/Abolition of Councils (Art 169)",
    "slug": "state-legislature-architecture-and-creation-abolition-of-councils",
    "url": "/topics/the-state-legislature/read#state-legislature-architecture-and-creation-abolition-of-councils",
    "description": "The constitutional structure of State Legislatures under Part VI, bicameral vs unicameral states (Article 168), Legislative Assembly strength (Article 170), and the two-stage procedure for creating or abolishing Legislative Councils under Article 169.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part VI: The State Legislature (Vidhan Sabha, Vidhan Parishad & Procedure)",
      "concept": "State Legislature Architecture & Creation/Abolition of Councils (Art 169)"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-T15-02",
    "type": "CONCEPT",
    "title": "Composition of Legislative Council (Art 171) & 5-Tier Electoral Formula",
    "slug": "composition-of-legislative-council-and-governor-nominations",
    "url": "/topics/the-state-legislature/read#composition-of-legislative-council-and-governor-nominations",
    "description": "The structural strength limits of the Legislative Council (max 1/3rd of Assembly, min 40 under Art 171), the 5-tier proportional representation electoral formula, and the 1/6th Governor nomination across 5 fields (including Cooperative Movement).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part VI: The State Legislature (Vidhan Sabha, Vidhan Parishad & Procedure)",
      "concept": "Composition of Legislative Council (Art 171) & 5-Tier Electoral Formula"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T15-03",
    "type": "CONCEPT",
    "title": "State Legislative Procedure: 4-Month Delaying Powers & Absence of Joint Sitting",
    "slug": "state-legislative-procedure-and-delaying-powers-of-councils",
    "url": "/topics/the-state-legislature/read#state-legislative-procedure-and-delaying-powers-of-councils",
    "description": "The legislative relationship between the Vidhan Sabha and Vidhan Parishad, the maximum 4-month delaying power of the Council on ordinary bills (Articles 197–198), total absence of joint sitting in State Legislatures, and the ultimate supremacy of the Legislative Assembly.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part VI: The State Legislature (Vidhan Sabha, Vidhan Parishad & Procedure)",
      "concept": "State Legislative Procedure: 4-Month Delaying Powers & Absence of Joint Sitting"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T15-04",
    "type": "CONCEPT",
    "title": "State Legislature: Privileges (Art 194), Disqualifications (Art 191) & Rajasthan Assembly",
    "slug": "state-legislature-privileges-disqualifications-and-rajasthan-assembly",
    "url": "/topics/the-state-legislature/read#state-legislature-privileges-disqualifications-and-rajasthan-assembly",
    "description": "State legislative powers, privileges and immunities under Article 194, disqualification grounds for MLAs/MLCs under Article 191, and the historical architecture of the Rajasthan Legislative Assembly (200 unicameral seats, SC/ST reservations).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part VI: The State Legislature (Vidhan Sabha, Vidhan Parishad & Procedure)",
      "concept": "State Legislature: Privileges (Art 194), Disqualifications (Art 191) & Rajasthan Assembly"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-T16-01",
    "type": "CONCEPT",
    "title": "Supreme Court Architecture: Composition (34 Judges), Collegium & Removal",
    "slug": "supreme-court-architecture-composition-collegium-and-removal",
    "url": "/topics/the-union-judiciary/read#supreme-court-architecture-composition-collegium-and-removal",
    "description": "The constitutional framework of the Supreme Court of India under Articles 124–128, evolution of the Collegium system through the Three Judges Cases (1981, 1993, 1998) and NJAC verdict (2015), and the impeachment removal procedure under Article 124(4) read with the Judges (Inquiry) Act 1968.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part V: The Union Judiciary (The Supreme Court of India)",
      "concept": "Supreme Court Architecture: Composition (34 Judges), Collegium & Removal"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T16-02",
    "type": "CONCEPT",
    "title": "Supreme Court Jurisdiction: Original (Art 131), Appellate & SLP (Art 136)",
    "slug": "supreme-court-jurisdiction-original-appellate-and-special-leave",
    "url": "/topics/the-union-judiciary/read#supreme-court-jurisdiction-original-appellate-and-special-leave",
    "description": "The multi-tiered jurisdictional architecture of the Supreme Court: Exclusive Federal Original Jurisdiction (Art 131) and its exceptions, Constitutional/Civil/Criminal Appellate Jurisdiction (Arts 132–134), and the plenary discretionary nature of Special Leave Petitions under Article 136.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part V: The Union Judiciary (The Supreme Court of India)",
      "concept": "Supreme Court Jurisdiction: Original (Art 131), Appellate & SLP (Art 136)"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T16-03",
    "type": "CONCEPT",
    "title": "Advisory Jurisdiction (Art 143), Complete Justice (Art 142) & Law of Land (Art 141)",
    "slug": "advisory-jurisdiction-article-143-and-inherent-powers-141-142",
    "url": "/topics/the-union-judiciary/read#advisory-jurisdiction-article-143-and-inherent-powers-141-142",
    "description": "The consultative role of the Supreme Court under Article 143 (Presidential references and their binding/non-binding character), the inherent power to do \"Complete Justice\" under Article 142, binding precedent under Article 141, and Court of Record contempt powers under Article 129.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part V: The Union Judiciary (The Supreme Court of India)",
      "concept": "Advisory Jurisdiction (Art 143), Complete Justice (Art 142) & Law of Land (Art 141)"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T17-01",
    "type": "CONCEPT",
    "title": "High Court Architecture: Appointments, Qualifications & Transfers (Arts 214–224A)",
    "slug": "high-court-architecture-appointments-qualifications-and-transfers",
    "url": "/topics/the-state-judiciary/read#high-court-architecture-appointments-qualifications-and-transfers",
    "description": "The constitutional framework of High Courts in India (25 High Courts under Arts 214–231), common High Courts (7th CAA 1956), judicial appointments via the High Court Collegium, qualifications (and the absence of the \"distinguished jurist\" category), retirement age (62 years), and transfers under Article 222.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part VI: State Judiciary (High Courts & Subordinate Courts)",
      "concept": "High Court Architecture: Appointments, Qualifications & Transfers (Arts 214–224A)"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T17-02",
    "type": "CONCEPT",
    "title": "High Court Jurisdiction: Writ Jurisdiction (Art 226 vs Art 32) & Superintendence (Art 227)",
    "slug": "high-court-writ-jurisdiction-art-226-vs-art-32-and-superintendence",
    "url": "/topics/the-state-judiciary/read#high-court-writ-jurisdiction-art-226-vs-art-32-and-superintendence",
    "description": "The expansive writ jurisdiction of High Courts under Article 226 (enforcing Fundamental Rights and other legal rights), structural comparison with Supreme Court Article 32, supervisory jurisdiction over all courts and tribunals under Article 227, and Court of Record status under Article 215.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part VI: State Judiciary (High Courts & Subordinate Courts)",
      "concept": "High Court Jurisdiction: Writ Jurisdiction (Art 226 vs Art 32) & Superintendence (Art 227)"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T17-03",
    "type": "CONCEPT",
    "title": "Subordinate Judiciary Architecture (Arts 233–237) & High Court Control (Art 235)",
    "slug": "subordinate-judiciary-architecture-and-high-court-control",
    "url": "/topics/the-state-judiciary/read#subordinate-judiciary-architecture-and-high-court-control",
    "description": "The constitutional framework of the subordinate judiciary under Part VI, appointment and posting of District Judges (Art 233), recruitment of judicial officers (Art 234), and the complete administrative and disciplinary control of the High Court over lower courts under Article 235.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part VI: State Judiciary (High Courts & Subordinate Courts)",
      "concept": "Subordinate Judiciary Architecture (Arts 233–237) & High Court Control (Art 235)"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-T17-04",
    "type": "CONCEPT",
    "title": "Rajasthan High Court Architecture: Jodhpur Principal Seat & Jaipur Bench",
    "slug": "rajasthan-high-court-architecture-and-judicial-administration",
    "url": "/topics/the-state-judiciary/read#rajasthan-high-court-architecture-and-judicial-administration",
    "description": "The historical evolution of the Rajasthan High Court established under the Rajasthan High Court Ordinance 1949, inauguration at Jodhpur on August 29, 1949, first Chief Justice Kamala Kant Verma, Satyanarayan Rao Committee (1958), the permanent Jaipur Bench (1976/1977), and sanctioned judicial strength.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part VI: State Judiciary (High Courts & Subordinate Courts)",
      "concept": "Rajasthan High Court Architecture: Jodhpur Principal Seat & Jaipur Bench"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-T18-01",
    "type": "CONCEPT",
    "title": "Public Interest Litigation (PIL): Relaxation of Locus Standi & Epistolary Jurisdiction",
    "slug": "public-interest-litigation-pil-locus-standi-and-epistolary-jurisdiction",
    "url": "/topics/judicial-innovation-and-tribunals/read#public-interest-litigation-pil-locus-standi-and-epistolary-jurisdiction",
    "description": "The transformative doctrine of Public Interest Litigation (PIL) pioneered by Justice V.R. Krishna Iyer and Justice P.N. Bhagwati, the democratic relaxation of the strict rule of locus standi, epistolary jurisdiction (letters as writ petitions), and landmark public interest jurisprudence.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part XIV-A: Judicial Innovation, PIL & Tribunals Architecture",
      "concept": "Public Interest Litigation (PIL): Relaxation of Locus Standi & Epistolary Jurisdiction"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T18-02",
    "type": "CONCEPT",
    "title": "Judicial Review vs Judicial Activism vs Judicial Overreach",
    "slug": "judicial-review-vs-activism-vs-judicial-overreach",
    "url": "/topics/judicial-innovation-and-tribunals/read#judicial-review-vs-activism-vs-judicial-overreach",
    "description": "The conceptual boundaries separating legitimate Judicial Review (examining constitutionality under Articles 13, 32, 226), positive Judicial Activism (proactive rights enforcement during executive inaction), and unconstitutional Judicial Overreach (transgressing into policy-making and legislative domains).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part XIV-A: Judicial Innovation, PIL & Tribunals Architecture",
      "concept": "Judicial Review vs Judicial Activism vs Judicial Overreach"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T18-03",
    "type": "CONCEPT",
    "title": "Tribunals Architecture: Part XIV-A (42nd CAA), Art 323A vs 323B & L. Chandra Kumar",
    "slug": "tribunals-architecture-article-323a-vs-323b-and-l-chandra-kumar",
    "url": "/topics/judicial-innovation-and-tribunals/read#tribunals-architecture-article-323a-vs-323b-and-l-chandra-kumar",
    "description": "The constitutional framework of administrative and specialized tribunals under Part XIV-A (Articles 323A & 323B inserted by 42nd CAA 1976), Central Administrative Tribunal (CAT), distinction between Art 323A and 323B, and the landmark 7-judge bench ruling in L. Chandra Kumar v. Union of India (1997) subjecting all tribunals to High Court Division Bench judicial review under Articles 226/227.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part XIV-A: Judicial Innovation, PIL & Tribunals Architecture",
      "concept": "Tribunals Architecture: Part XIV-A (42nd CAA), Art 323A vs 323B & L. Chandra Kumar"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T19-01",
    "type": "CONCEPT",
    "title": "Nature of Indian Federalism: Quasi-Federal Character & Asymmetric Provisions",
    "slug": "nature-of-indian-federalism-and-asymmetric-structure",
    "url": "/topics/centre-state-relations-and-federalism/read#nature-of-indian-federalism-and-asymmetric-structure",
    "description": "The constitutional nature of Indian federalism under Article 1 (\"Union of States\"), K.C. Wheare’s \"quasi-federal\" classification, strong unitary/centripetal features, asymmetric federalism through special provisions (Articles 371 to 371-J) and 5th/6th Schedules, and federalism as an inviolable Basic Structure doctrine (S.R. Bommai 1994).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Centre-State Relations, Federal Finance & Inter-State Governance",
      "concept": "Nature of Indian Federalism: Quasi-Federal Character & Asymmetric Provisions"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T19-02",
    "type": "CONCEPT",
    "title": "Legislative Relations: Three Lists (7th Schedule), Residuary Powers & Exceptions",
    "slug": "legislative-relations-three-lists-residuary-powers-and-exceptions",
    "url": "/topics/centre-state-relations-and-federalism/read#legislative-relations-three-lists-residuary-powers-and-exceptions",
    "description": "The constitutional division of legislative powers under Part XI (Articles 245–255), territorial legislative limits (Art 245 & Territorial Nexus), 7th Schedule Three Lists, residuary powers with Parliament (Art 248), 5 extraordinary circumstances for central legislation on State List (Arts 249, 250, 252, 253, 356), Repugnancy under Article 254, and judicial doctrines (Pith & Substance, Colourable Legislation).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Centre-State Relations, Federal Finance & Inter-State Governance",
      "concept": "Legislative Relations: Three Lists (7th Schedule), Residuary Powers & Exceptions"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T19-03",
    "type": "CONCEPT",
    "title": "Administrative Relations: Directives (Arts 256-257), Sanctions (Art 365) & All India Services",
    "slug": "administrative-relations-directives-all-india-services-and-water-disputes",
    "url": "/topics/centre-state-relations-and-federalism/read#administrative-relations-directives-all-india-services-and-water-disputes",
    "description": "The administrative hierarchy under Part XI Chapter II (Articles 256–263), Union executive directives to States (Arts 256, 257), constitutional sanction under Article 365, the Union’s duty under Article 355, All India Services under Article 312, inter-state delegation (Arts 258/258A), Full Faith and Credit (Art 261), and Inter-State River Water Disputes under Article 262.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Centre-State Relations, Federal Finance & Inter-State Governance",
      "concept": "Administrative Relations: Directives (Arts 256-257), Sanctions (Art 365) & All India Services"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T19-04",
    "type": "CONCEPT",
    "title": "Inter-State Council (Art 263), Zonal Councils & Federal Commissions",
    "slug": "inter-state-council-zonal-councils-and-federal-commissions",
    "url": "/topics/centre-state-relations-and-federalism/read#inter-state-council-zonal-councils-and-federal-commissions",
    "description": "Institutions fostering cooperative federalism: the constitutional Inter-State Council under Article 263 (established 1990 by Presidential Order on Sarkaria Commission advice), 5 statutory Zonal Councils under the States Reorganisation Act 1956 and North-Eastern Council (1971), and landmark federal commission recommendations (Sarkaria 1983-88, Punchhi 2007-10, NCRWC 2002).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Centre-State Relations, Federal Finance & Inter-State Governance",
      "concept": "Inter-State Council (Art 263), Zonal Councils & Federal Commissions"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T19-05",
    "type": "CONCEPT",
    "title": "Financial Relations: Division of Taxes, Finance Commission (Art 280) & GST Council",
    "slug": "financial-relations-finance-commission-and-gst-council",
    "url": "/topics/centre-state-relations-and-federalism/read#financial-relations-finance-commission-and-gst-council",
    "description": "The constitutional framework of fiscal federalism under Part XII (Articles 268–293), the 101st CAA 2016 Goods and Services Tax architecture (Art 246A & GST Council Art 279A), Finance Commission under Article 280 (vertical vs horizontal devolution criteria), Statutory Grants (Art 275) vs Discretionary Grants (Art 282), and borrowing rules (Arts 292-293).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Centre-State Relations, Federal Finance & Inter-State Governance",
      "concept": "Financial Relations: Division of Taxes, Finance Commission (Art 280) & GST Council"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T19-06",
    "type": "CONCEPT",
    "title": "Inter-State River Water Disputes (Article 262), Boundary Adjudication & Sub-Classification Jurisprudence",
    "slug": "inter-state-river-water-disputes-boundary-adjudication-sub-classification-jurisprudence",
    "url": "/topics/centre-state-relations-and-federalism/read#inter-state-river-water-disputes-boundary-adjudication-sub-classification-jurisprudence",
    "description": "Constitutional conflict-resolution mechanisms: Inter-State River Water Disputes Act 1956 under Article 262 (exclusive tribunal adjudication, ouster of Supreme Court original jurisdiction under Art 262(2)), original jurisdiction in boundary disputes under Article 131, 2nd Administrative Reforms Commission (ARC) conflict management blueprint, and affirmative action jurisprudence including the historic 7-judge Supreme Court Constitution Bench ruling in State of Punjab v. Davinder Singh (2024) permitting sub-classification of Scheduled Castes and Scheduled Tribes under Article 341/342 based on empirical backwardness.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Centre-State Relations, Federal Finance & Inter-State Governance",
      "concept": "Inter-State River Water Disputes (Article 262), Boundary Adjudication & Sub-Classification Jurisprudence"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T20-01",
    "type": "CONCEPT",
    "title": "National Emergency (Article 352): Grounds, Approval & 44th CAA Safeguards",
    "slug": "national-emergency-article-352-grounds-approval-and-safeguards",
    "url": "/topics/emergency-provisions-and-safeguards/read#national-emergency-article-352-grounds-approval-and-safeguards",
    "description": "The constitutional framework of National Emergency under Part XVIII (Articles 352–360), three explicit grounds (War, External Aggression, Armed Rebellion), the transformative safeguards enacted by the 44th Constitutional Amendment Act 1978 (written cabinet advice, 1-month approval, Special Majority in both houses, 6-month periodic renewal, and disapproval motion mechanism).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part XVIII: Emergency Provisions & Constitutional Safeguards",
      "concept": "National Emergency (Article 352): Grounds, Approval & 44th CAA Safeguards"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T20-02",
    "type": "CONCEPT",
    "title": "National Emergency Impact: Federal Balance & Fundamental Rights (Art 358 vs Art 359)",
    "slug": "national-emergency-effects-and-fundamental-rights-art-358-vs-359",
    "url": "/topics/emergency-provisions-and-safeguards/read#national-emergency-effects-and-fundamental-rights-art-358-vs-359",
    "description": "The constitutional consequences of National Emergency on executive, legislative, and financial relations, extension of Lok Sabha tenure, and the fundamental distinction between Article 358 (automatic suspension of Article 19 for external emergency only) and Article 359 (Presidential suspension of right to move court, with Articles 20 & 21 never suspendable under the 44th Amendment).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part XVIII: Emergency Provisions & Constitutional Safeguards",
      "concept": "National Emergency Impact: Federal Balance & Fundamental Rights (Art 358 vs Art 359)"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T20-03",
    "type": "CONCEPT",
    "title": "President's Rule (Articles 356 & 365): Grounds, Procedure & S.R. Bommai Doctrine",
    "slug": "presidents-rule-article-356-and-sr-bommai-doctrine",
    "url": "/topics/emergency-provisions-and-safeguards/read#presidents-rule-article-356-and-sr-bommai-doctrine",
    "description": "State Emergency under Article 356 (breakdown of constitutional machinery) and Article 365 (failure to follow central directions), parliamentary approval within 2 months by Simple Majority, maximum 3-year limit with 44th CAA restrictions, dismissal of state executive and legislative delegation, and the landmark 9-judge ruling in S.R. Bommai v. Union of India (1994) establishing judicial review, floor test primacy, and basic structure protection.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part XVIII: Emergency Provisions & Constitutional Safeguards",
      "concept": "President's Rule (Articles 356 & 365): Grounds, Procedure & S.R. Bommai Doctrine"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T20-04",
    "type": "CONCEPT",
    "title": "Financial Emergency (Article 360): Invocation, Indefinite Duration & Distinctive Powers",
    "slug": "financial-emergency-article-360-invocation-and-consequences",
    "url": "/topics/emergency-provisions-and-safeguards/read#financial-emergency-article-360-invocation-and-consequences",
    "description": "The constitutional architecture of Financial Emergency under Article 360 (threat to financial stability or credit of India), parliamentary approval within 2 months by Simple Majority, the unique rule of indefinite continuation without periodic renewal, executive directions to reduce public salaries (including Supreme Court and High Court judges), reservation of state money bills, and the historical fact that it has never been declared in India.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part XVIII: Emergency Provisions & Constitutional Safeguards",
      "concept": "Financial Emergency (Article 360): Invocation, Indefinite Duration & Distinctive Powers"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-T20-05",
    "type": "CONCEPT",
    "title": "National Integration Mechanisms, Inter-State Council & Internal Security Framework",
    "slug": "national-integration-mechanisms-inter-state-council-internal-security-framework",
    "url": "/topics/emergency-provisions-and-federal-crisis/read#national-integration-mechanisms-inter-state-council-internal-security-framework",
    "description": "Constitutional and institutional mechanisms for national integration: National Integration Council (1961), Inter-State Council (Article 263, established 1990), Zonal Councils (States Reorganisation Act 1956), Union duty under Article 355, Central Armed Police Forces (CAPF), and statutory internal security frameworks (NIA Act, UAPA, AFSPA).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Emergency Provisions & Federal Security Architecture",
      "concept": "National Integration Mechanisms, Inter-State Council & Internal Security Framework"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T21-01",
    "type": "CONCEPT",
    "title": "73rd Constitutional Amendment Act: Panchayati Raj Architecture & 3-Tier Devolution",
    "slug": "73rd-amendment-panchayati-raj-architecture-and-devolution",
    "url": "/topics/local-governance-panchayats-and-municipalities/read#73rd-amendment-panchayati-raj-architecture-and-devolution",
    "description": "Constitutionalization of rural local self-government under Part IX (Articles 243–243O) and Eleventh Schedule (29 matters), establishing mandatory 3-tier PRIs, Gram Sabha, State Election Commission (Art 243K), and State Finance Commission (Art 243I).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part IX & IX-A: Rural & Urban Local Governance (73rd & 74th CAAs)",
      "concept": "73rd Constitutional Amendment Act: Panchayati Raj Architecture & 3-Tier Devolution"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T21-02",
    "type": "CONCEPT",
    "title": "PESA Act (1996) & Tribal Self-Governance in Fifth Schedule Areas",
    "slug": "pesa-act-1996-tribal-self-governance-fifth-schedule",
    "url": "/topics/local-governance-panchayats-and-municipalities/read#pesa-act-1996-tribal-self-governance-fifth-schedule",
    "description": "The Provisions of the Panchayats (Extension to the Scheduled Areas) Act 1996, extending Part IX with critical modifications to Fifth Schedule areas across 10 states, granting Gram Sabhas sovereign authority over natural resources, minor forest produce, and land preservation.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part IX & IX-A: Rural & Urban Local Governance (73rd & 74th CAAs)",
      "concept": "PESA Act (1996) & Tribal Self-Governance in Fifth Schedule Areas"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T21-03",
    "type": "CONCEPT",
    "title": "74th Constitutional Amendment Act: Urban Local Bodies & Metropolitan Planning",
    "slug": "74th-amendment-urban-local-bodies-and-metropolitan-planning",
    "url": "/topics/local-governance-panchayats-and-municipalities/read#74th-amendment-urban-local-bodies-and-metropolitan-planning",
    "description": "Constitutionalization of Urban Local Bodies (ULBs) under Part IX-A (Articles 243P–243ZG) and Twelfth Schedule (18 matters), establishing 3 municipal tiers, Wards Committees, District Planning Committees (Art 243ZD), and Metropolitan Planning Committees (Art 243ZE).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part IX & IX-A: Rural & Urban Local Governance (73rd & 74th CAAs)",
      "concept": "74th Constitutional Amendment Act: Urban Local Bodies & Metropolitan Planning"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T21-04",
    "type": "CONCEPT",
    "title": "Local Governance in Rajasthan: Nagaur Inception, 5-Tier Devolution & Rajasthan Acts",
    "slug": "local-governance-rajasthan-nagaur-inception-acts-and-devolution",
    "url": "/topics/local-governance-panchayats-and-municipalities/read#local-governance-rajasthan-nagaur-inception-acts-and-devolution",
    "description": "The pioneering historic evolution of Panchayati Raj inaugurated at Nagaur, Rajasthan on October 2, 1959, the major committee trajectories, and modern Rajasthan-specific local governance features (Rajasthan Panchayati Raj Act 1994, 50% women quota, Ward Sabha).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Part IX & IX-A: Rural & Urban Local Governance (73rd & 74th CAAs)",
      "concept": "Local Governance in Rajasthan: Nagaur Inception, 5-Tier Devolution & Rajasthan Acts"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T22-01",
    "type": "CONCEPT",
    "title": "Election Commission of India (Article 324): Composition, Independence & CEC/EC Appointment Act 2023",
    "slug": "election-commission-of-india-article-324-and-2023-appointment-act",
    "url": "/topics/constitutional-bodies-eci-and-cag/read#election-commission-of-india-article-324-and-2023-appointment-act",
    "description": "The constitutional framework of the Election Commission under Article 324, its multi-member evolution, removal protections, plenary powers under Mohinder Singh Gill (1978), the Anoop Baranwal (2023) bench, and the CEC & Other ECs (Appointment) Act 2023.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Constitutional Institutions: Election Commission of India & Comptroller and Auditor General",
      "concept": "Election Commission of India (Article 324): Composition, Independence & CEC/EC Appointment Act 2023"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T22-02",
    "type": "CONCEPT",
    "title": "Electoral Reforms & Representation of the People Acts (1950 & 1951)",
    "slug": "electoral-reforms-and-representation-of-the-people-acts-1950-1951",
    "url": "/topics/constitutional-bodies-eci-and-cag/read#electoral-reforms-and-representation-of-the-people-acts-1950-1951",
    "description": "The statutory dual-statute architecture governing Indian democracy—RPA 1950 (seats, delimitation, voter rolls) vs RPA 1951 (conduct of elections, qualifications, disqualifications under Section 8, corrupt practices, anti-defection, and electoral transparency).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Constitutional Institutions: Election Commission of India & Comptroller and Auditor General",
      "concept": "Electoral Reforms & Representation of the People Acts (1950 & 1951)"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T22-03",
    "type": "CONCEPT",
    "title": "Comptroller and Auditor-General of India (Articles 148–151): Independence & Duties",
    "slug": "comptroller-and-auditor-general-of-india-articles-148-151",
    "url": "/topics/constitutional-bodies-eci-and-cag/read#comptroller-and-auditor-general-of-india-articles-148-151",
    "description": "The constitutional office of the CAG under Articles 148–151 as the supreme guardian of the public purse, with institutional independence protections, duties under the CAG DPC Act 1971, separation of accounting from audit (1976), and partnership with the Public Accounts Committee.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Constitutional Institutions: Election Commission of India & Comptroller and Auditor General",
      "concept": "Comptroller and Auditor-General of India (Articles 148–151): Independence & Duties"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T22-04",
    "type": "CONCEPT",
    "title": "Public Audit Architecture & Financial Oversight: Regulatory, Propriety & Performance Audit",
    "slug": "public-audit-spectrum-regulatory-propriety-performance-audit",
    "url": "/topics/constitutional-bodies-eci-and-cag/read#public-audit-spectrum-regulatory-propriety-performance-audit",
    "description": "The three-dimensional methodology of public audit (Regulatory, Propriety, and Performance/Efficiency audit), institutional limitations (post-mortem nature, secret service limits), and expanded jurisdiction over PPPs and private discoms.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Constitutional Institutions: Election Commission of India & Comptroller and Auditor General",
      "concept": "Public Audit Architecture & Financial Oversight: Regulatory, Propriety & Performance Audit"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T22-05",
    "type": "CONCEPT",
    "title": "Determinants of Voting Behavior, EVM-VVPAT Architecture & Electoral Technology Reforms",
    "slug": "determinants-voting-behavior-evm-vvpat-architecture-electoral-technology-reforms",
    "url": "/topics/election-commission-and-electoral-reforms/read#determinants-voting-behavior-evm-vvpat-architecture-electoral-technology-reforms",
    "description": "Structural determinants of Indian voting behavior (primordial identity vs governance performance, welfare delivery, and gender participation), technological evolution of voting systems (EVM standalone architecture, VVPAT statutory mandate under Subramanian Swamy 2013 and ADR 2024 verification standard), and ECI digital governance mechanisms (cVIGIL, ENCORE, Suvidha).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Election Commission of India & Electoral Governance",
      "concept": "Determinants of Voting Behavior, EVM-VVPAT Architecture & Electoral Technology Reforms"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T23-01",
    "type": "CONCEPT",
    "title": "Central Information Commission (CIC) & RTI Act (2005): Architecture, Exemptions & 2019 Amendments",
    "slug": "central-information-commission-rti-act-2005-and-2019-amendments",
    "url": "/topics/statutory-and-non-constitutional-bodies/read#central-information-commission-rti-act-2005-and-2019-amendments",
    "description": "Statutory transparency watchdog established under the Right to Information Act 2005, proactive disclosures under Section 4, exemptions under Section 8, the 3-member Selection Committee, and the impact of the RTI (Amendment) Act 2019.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Statutory & Non-Constitutional Regulatory Authorities: Transparency, Human Rights & Integrity",
      "concept": "Central Information Commission (CIC) & RTI Act (2005): Architecture, Exemptions & 2019 Amendments"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T23-02",
    "type": "CONCEPT",
    "title": "Central Vigilance Commission (CVC): Santhanam Committee to Statutory Apex Anti-Corruption Body",
    "slug": "central-vigilance-commission-and-anti-corruption-framework",
    "url": "/topics/statutory-and-non-constitutional-bodies/read#central-vigilance-commission-and-anti-corruption-framework",
    "description": "The apex statutory anti-corruption vigilance authority established on Santhanam Committee recommendations, statutory recognition via the CVC Act 2003 following Vineet Narain (1997), superintendence over CBI for corruption offences, and Whistleblowers Protection framework.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Statutory & Non-Constitutional Regulatory Authorities: Transparency, Human Rights & Integrity",
      "concept": "Central Vigilance Commission (CVC): Santhanam Committee to Statutory Apex Anti-Corruption Body"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T23-03",
    "type": "CONCEPT",
    "title": "National Human Rights Commission (NHRC): Protection of Human Rights Act 1993 & 2019 Reforms",
    "slug": "national-human-rights-commission-and-state-hrcs-framework",
    "url": "/topics/statutory-and-non-constitutional-bodies/read#national-human-rights-commission-and-state-hrcs-framework",
    "description": "Statutory human rights watchdog under PHRA 1993 conforming to Paris Principles, 6-member Selection Committee, 2019 Amendment reforms (broadened Chairperson eligibility and 3-yr tenure), civil court powers, and structural limitations (1-yr bar, armed forces restrictions).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Statutory & Non-Constitutional Regulatory Authorities: Transparency, Human Rights & Integrity",
      "concept": "National Human Rights Commission (NHRC): Protection of Human Rights Act 1993 & 2019 Reforms"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T23-04",
    "type": "CONCEPT",
    "title": "Lokpal and Lokayuktas Act (2013): Anti-Corruption Architecture & State Ombudsman",
    "slug": "lokpal-and-lokayuktas-act-2013-anti-corruption-ombudsman",
    "url": "/topics/statutory-and-non-constitutional-bodies/read#lokpal-and-lokayuktas-act-2013-anti-corruption-ombudsman",
    "description": "Statutory anti-corruption ombudsman established under the Lokpal and Lokayuktas Act 2013 following ARC (1966) recommendations and Anna Hazare movement, jurisdiction covering PM, Ministers, MPs, and public servants, alongside state Lokayukta systems (Rajasthan 1973 model).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Statutory & Non-Constitutional Regulatory Authorities: Transparency, Human Rights & Integrity",
      "concept": "Lokpal and Lokayuktas Act (2013): Anti-Corruption Architecture & State Ombudsman"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T23-05",
    "type": "CONCEPT",
    "title": "NITI Aayog vs Planning Commission: Think Tank Architecture & Cooperative Federalism",
    "slug": "niti-aayog-vs-planning-commission-think-tank-and-cooperative-federalism",
    "url": "/topics/statutory-and-non-constitutional-bodies/read#niti-aayog-vs-planning-commission-think-tank-and-cooperative-federalism",
    "description": "The extra-constitutional executive think tank established on 1 January 2015 replacing the top-down Planning Commission (1950–2014), emphasizing bottom-up cooperative federalism, the Governing Council, Team India Hub, and the structural transfer of fund allocation powers to the Finance Ministry.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Statutory & Non-Constitutional Regulatory Authorities: Transparency, Human Rights & Integrity",
      "concept": "NITI Aayog vs Planning Commission: Think Tank Architecture & Cooperative Federalism"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-T23-06",
    "type": "CONCEPT",
    "title": "District Administration, Citizen Charters, Sevottam Model & Public Service Guarantee Acts",
    "slug": "district-administration-citizen-charters-sevottam-model-public-service-guarantee-acts",
    "url": "/topics/statutory-regulatory-quasi-judicial-bodies/read#district-administration-citizen-charters-sevottam-model-public-service-guarantee-acts",
    "description": "Grassroots administrative architecture headed by the District Collector (Revenue Collector, District Magistrate under BNSS, and District Development Officer), Board of Revenue Ajmer (est. Nov 1, 1949), Citizen Charters, Sevottam Model (IS 15700:2005), and statutory service delivery frameworks (Rajasthan Guaranteed Delivery of Public Services Act 2011 & Right to Hearing Act 2012).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Statutory, Regulatory & Quasi-Judicial Bodies",
      "concept": "District Administration, Citizen Charters, Sevottam Model & Public Service Guarantee Acts"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T24-01",
    "type": "CONCEPT",
    "title": "Political Demography, Electoral Geography & Social Stratification of Rajasthan",
    "slug": "political-demography-electoral-geography-social-stratification-rajasthan",
    "url": "/topics/rajasthan-state-polity-and-governance/read#political-demography-electoral-geography-social-stratification-rajasthan",
    "description": "Structural demographic and electoral geography of Rajasthan based on Census 2011 baseline data (6.85 Cr population, density 200/km2, sex ratio 928, literacy 66.1%), regional divisions (Marwar, Mewar, Dhundhar, Hadoti, Shekhawati), 200 Assembly seats (34 SC, 25 ST), and 25 Lok Sabha seats (4 SC, 3 ST).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Rajasthan State Polity: Executive, Assembly, Demography & Apex Institutions",
      "concept": "Political Demography, Electoral Geography & Social Stratification of Rajasthan"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T24-02",
    "type": "CONCEPT",
    "title": "State Executive of Rajasthan: Governor, Chief Minister & Council of Ministers",
    "slug": "state-executive-rajasthan-governor-chief-minister-council-of-ministers",
    "url": "/topics/rajasthan-state-polity-and-governance/read#state-executive-rajasthan-governor-chief-minister-council-of-ministers",
    "description": "The institutional evolution and constitutional operational dynamics of the State Executive in Rajasthan under Articles 153–167, transitioning on 1 November 1956 from Rajpramukh to Governor (First Governor: Gurumukh Nihal Singh), Chief Ministership milestones, CM Secretariat, and discretionary gubernatorial governance.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Rajasthan State Polity: Executive, Assembly, Demography & Apex Institutions",
      "concept": "State Executive of Rajasthan: Governor, Chief Minister & Council of Ministers"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T24-03",
    "type": "CONCEPT",
    "title": "Rajasthan Legislative Assembly (Vidhan Sabha): Evolution, Committees & Unicameral Procedure",
    "slug": "rajasthan-legislative-assembly-evolution-committees-unicameral-procedure",
    "url": "/topics/rajasthan-state-polity-and-governance/read#rajasthan-legislative-assembly-evolution-committees-unicameral-procedure",
    "description": "The constitutional architecture and procedural mechanics of the unicameral Rajasthan Legislative Assembly under Articles 168–212, its historical seat growth from 160 (1952) to 200 (1977 6th Assembly), legislative committees (PAC, Estimates, PUC), Speaker prerogatives, and assembly quorum.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Rajasthan State Polity: Executive, Assembly, Demography & Apex Institutions",
      "concept": "Rajasthan Legislative Assembly (Vidhan Sabha): Evolution, Committees & Unicameral Procedure"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-T24-04",
    "type": "CONCEPT",
    "title": "Judicial & Constitutional Bodies of Rajasthan: High Court (Jodhpur/Jaipur) & RPSC (Ajmer)",
    "slug": "judicial-and-constitutional-bodies-rajasthan-high-court-rpsc",
    "url": "/topics/rajasthan-state-polity-and-governance/read#judicial-and-constitutional-bodies-rajasthan-high-court-rpsc",
    "description": "The constitutional architecture and operational dynamics of apex state institutions: Rajasthan High Court under Article 214 (inaugurated 29 Aug 1949 at Jodhpur, Satyanarayan Rao Committee Jaipur Bench 1977, 50 judges) and Rajasthan Public Service Commission under Article 315 (constituted 20 Aug 1949, shifted to Ajmer 1956, 1 Chair + 7 Members, appointment by Governor vs removal by President).",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Rajasthan State Polity: Executive, Assembly, Demography & Apex Institutions",
      "concept": "Judicial & Constitutional Bodies of Rajasthan: High Court (Jodhpur/Jaipur) & RPSC (Ajmer)"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T25-01",
    "type": "CONCEPT",
    "title": "Constitutional Models & Sovereignty: UK Parliamentary Sovereignty vs USA Judicial Supremacy vs Indian Synthesis",
    "slug": "constitutional-models-sovereignty-uk-usa-indian-synthesis",
    "url": "/topics/comparative-constitutional-systems/read#constitutional-models-sovereignty-uk-usa-indian-synthesis",
    "description": "Comparative constitutional analysis of the British unwritten constitution and Diceyan Parliamentary Sovereignty, the American rigid written constitution and judicial supremacy with substantive Due Process, and the Indian constitutional synthesis of parliamentary executive with judicial review bound by the Basic Structure Doctrine.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Comparative Constitutional Systems: UK, USA, Canada, Germany & Switzerland",
      "concept": "Constitutional Models & Sovereignty: UK Parliamentary Sovereignty vs USA Judicial Supremacy vs Indian Synthesis"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T25-02",
    "type": "CONCEPT",
    "title": "Comparative Federal Architectures: USA, Canada, Australia, Germany & Indian Asymmetric Federalism",
    "slug": "comparative-federal-architectures-usa-canada-australia-germany-india",
    "url": "/topics/comparative-constitutional-systems/read#comparative-federal-architectures-usa-canada-australia-germany-india",
    "description": "Comparative analysis of major federal systems: American Dual Federalism (indestructible states, dual citizenship), Canadian Strong-Centre Federalism (Governor appointment, central residuary powers), Australian Cooperative Federalism (Concurrent list, trade commerce), German Administrative Federalism (Bundesrat), and India's Quasi-Federal model with asymmetric constitutional provisions.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Comparative Constitutional Systems: UK, USA, Canada, Germany & Switzerland",
      "concept": "Comparative Federal Architectures: USA, Canada, Australia, Germany & Indian Asymmetric Federalism"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-T25-03",
    "type": "CONCEPT",
    "title": "Instruments of Direct Democracy & Plural Executive: The Swiss Constitutional Model",
    "slug": "instruments-direct-democracy-plural-executive-swiss-model",
    "url": "/topics/comparative-constitutional-systems/read#instruments-direct-democracy-plural-executive-swiss-model",
    "description": "The constitutional architecture of the Swiss Confederation (Federal Constitution of 1999), the four instruments of Direct Democracy (Mandatory/Optional Referendum, Popular Initiative, Recall, Landsgemeinde), and the unique 7-member collegial Plural Executive (Federal Council) with an annually rotating Federal President.",
    "hierarchy": {
      "domain": "Indian Governance & Administration",
      "subject": "Indian Polity",
      "topic": "Comparative Constitutional Systems: UK, USA, Canada, Germany & Switzerland",
      "concept": "Instruments of Direct Democracy & Plural Executive: The Swiss Constitutional Model"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-01",
    "type": "CONCEPT",
    "title": "Scarcity, Choice, Opportunity Cost, Production Possibility Frontier & Central Economic Problems",
    "slug": "scarcity-choice-opportunity-cost-ppf-central-economic-problems",
    "url": "/topics/foundations-of-economics-and-national-income/read#scarcity-choice-opportunity-cost-ppf-central-economic-problems",
    "description": "The foundational nature of economics as the study of resource allocation under scarcity: the universal constraint of unlimited human wants vs finite resources, opportunity cost as the next best alternative forgone, the concave Production Possibility Frontier (PPF) reflecting increasing marginal opportunity costs, and the three central economic questions (What, How, and For Whom to produce).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Foundations of Economics & National Income Accounting",
      "concept": "Scarcity, Choice, Opportunity Cost, Production Possibility Frontier & Central Economic Problems"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-ECO-02",
    "type": "CONCEPT",
    "title": "Classification of Goods: Public, Private, Common Resources & Club Goods",
    "slug": "classification-of-goods-public-private-common-resources-club-goods",
    "url": "/topics/foundations-of-economics-and-national-income/read#classification-of-goods-public-private-common-resources-club-goods",
    "description": "Typology of economic goods based on the dual criteria of Excludability (whether a person can be prevented from consuming the good) and Rivalry (whether one person's consumption diminishes another's): Private Goods, Public Goods (non-rival, non-excludable), Common Pool Resources (rival, non-excludable — Tragedy of the Commons), and Club Goods / Natural Monopolies (excludable, non-rival).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Foundations of Economics & National Income Accounting",
      "concept": "Classification of Goods: Public, Private, Common Resources & Club Goods"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-ECO-03",
    "type": "CONCEPT",
    "title": "Circular Flow of Income, Factor Payments, Injections & Leakages",
    "slug": "circular-flow-of-income-factor-payments-injections-and-leakages",
    "url": "/topics/foundations-of-economics-and-national-income/read#circular-flow-of-income-factor-payments-injections-and-leakages",
    "description": "The macroeconomic framework describing the continuous circular movement of money, goods, services, and factor payments across households, production enterprises, government, and the external sector: the identity of National Output = National Income = National Expenditure, factor payments (Rent, Wages, Interest, Profit), and equilibrium dynamics of Injections (Investment, Government Spending, Exports) vs Leakages (Savings, Taxes, Imports).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Foundations of Economics & National Income Accounting",
      "concept": "Circular Flow of Income, Factor Payments, Injections & Leakages"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-ECO-04",
    "type": "CONCEPT",
    "title": "National Income Aggregates Ladder: GDP, NDP, GNP, NNP & Factor Cost vs Basic Prices vs Market Prices",
    "slug": "national-income-aggregates-gdp-ndp-gnp-nnp-factor-cost-basic-prices-market-prices",
    "url": "/topics/foundations-of-economics-and-national-income/read#national-income-aggregates-gdp-ndp-gnp-nnp-factor-cost-basic-prices-market-prices",
    "description": "The mathematical step-ladder connecting all eight national income aggregates: Gross vs Net (Depreciation / Consumption of Fixed Capital), Domestic vs National (Net Factor Income from Abroad - NFIA), and the modern 2015 SNA methodology linking Factor Cost, Basic Prices (Production Taxes/Subsidies), and Market Prices (Product Taxes/Subsidies), establishing NNP at Factor Cost as canonical National Income.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Foundations of Economics & National Income Accounting",
      "concept": "National Income Aggregates Ladder: GDP, NDP, GNP, NNP & Factor Cost vs Basic Prices vs Market Prices"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-05",
    "type": "CONCEPT",
    "title": "Methods of National Income Calculation: Production (GVA), Income & Expenditure Approaches",
    "slug": "methods-of-national-income-calculation-production-income-expenditure-approaches",
    "url": "/topics/foundations-of-economics-and-national-income/read#methods-of-national-income-calculation-production-income-expenditure-approaches",
    "description": "The three independent computational approaches to measuring national income: the Production Method (Gross Value Added = Value of Output minus Intermediate Consumption, avoiding double counting via value-added summation), the Income Method (summing factor rewards: Compensation of Employees, Operating Surplus, and Mixed Income of the Self-Employed), and the Expenditure Method ($Y = C + I + G + (X - M)$).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Foundations of Economics & National Income Accounting",
      "concept": "Methods of National Income Calculation: Production (GVA), Income & Expenditure Approaches"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-06",
    "type": "CONCEPT",
    "title": "Real vs Nominal GDP, GDP Deflator, Base Year Revisions & Green GDP",
    "slug": "real-vs-nominal-gdp-gdp-deflator-base-year-revisions-green-gdp",
    "url": "/topics/foundations-of-economics-and-national-income/read#real-vs-nominal-gdp-gdp-deflator-base-year-revisions-green-gdp",
    "description": "Distinguishing monetary expansion from physical output growth: Nominal GDP (current prices) vs Real GDP (constant base-year prices), the GDP Deflator as the most comprehensive implicit price index across all domestic goods and services ($\\text{GDP Deflator} = \\frac{\\text{Nominal GDP}}{\\text{Real GDP}} \\times 100$), principles of base-year revisions, and Green GDP adjusting national income for environmental degradation and natural capital depletion.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Foundations of Economics & National Income Accounting",
      "concept": "Real vs Nominal GDP, GDP Deflator, Base Year Revisions & Green GDP"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-07",
    "type": "CONCEPT",
    "title": "Evolution of Money, Functions, Legal Tender, Fiat Money & Digital Payments / CBDC",
    "slug": "evolution-of-money-functions-legal-tender-fiat-money-digital-payments-cbdc",
    "url": "/topics/money-commercial-banking-and-financial-markets/read#evolution-of-money-functions-legal-tender-fiat-money-digital-payments-cbdc",
    "description": "The economic and legal nature of money: the transition from commodity money and metallic coinage to paper fiat currency, the four core functions of money (Medium of Exchange, Unit of Account, Store of Value, Standard of Deferred Payment), the legal concept of Legal Tender (Limited vs Unlimited under the Coinage Act 2011 and RBI Act 1934 Section 26), and digital payment architecture including the Central Bank Digital Currency (e₹ / Digital Rupee).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Money, Commercial Banking & Financial Markets Architecture",
      "concept": "Evolution of Money, Functions, Legal Tender, Fiat Money & Digital Payments / CBDC"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-ECO-08",
    "type": "CONCEPT",
    "title": "Money Supply Measures: Reserve Money (M0), Narrow Money (M1, M2), Broad Money (M3, M4) & The Money Multiplier",
    "slug": "money-supply-aggregates-m0-m1-m2-m3-m4-liquidity-aggregates-money-multiplier",
    "url": "/topics/money-commercial-banking-and-financial-markets/read#money-supply-aggregates-m0-m1-m2-m3-m4-liquidity-aggregates-money-multiplier",
    "description": "The quantitative architecture of money supply in India defined by the RBI Working Group (Y.V. Reddy Committee, 1998): Reserve Money (M0 / High-Powered Money / Monetary Base), Narrow Money (M1, M2), Broad Money (M3, M4), Liquidity Aggregates (L1, L2, L3), and the Money Multiplier formula ($m = \\frac{M3}{M0} = \\frac{1+c}{r+c}$) determining how high-powered central bank money multiplies into commercial bank broad money.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Money, Commercial Banking & Financial Markets Architecture",
      "concept": "Money Supply Measures: Reserve Money (M0), Narrow Money (M1, M2), Broad Money (M3, M4) & The Money Multiplier"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-09",
    "type": "CONCEPT",
    "title": "Commercial Banking Architecture, Fractional Reserve Banking & Credit Creation Mechanics",
    "slug": "commercial-banking-architecture-fractional-reserve-banking-credit-creation-mechanics",
    "url": "/topics/money-commercial-banking-and-financial-markets/read#commercial-banking-architecture-fractional-reserve-banking-credit-creation-mechanics",
    "description": "The institutional and operating mechanics of commercial banking: Scheduled Commercial Banks (Public, Private, Foreign, Small Finance Banks, Payments Banks), the principle of Fractional Reserve Banking, the mathematical credit creation process through derivative deposits ($Total Credit = Initial Deposit \\times \\frac{1}{LRR}$), and balance sheet asset-liability management (ALM).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Money, Commercial Banking & Financial Markets Architecture",
      "concept": "Commercial Banking Architecture, Fractional Reserve Banking & Credit Creation Mechanics"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-10",
    "type": "CONCEPT",
    "title": "Financial Markets Architecture: Money Market Instruments vs Capital Market Architecture",
    "slug": "financial-markets-architecture-money-market-instruments-vs-capital-markets",
    "url": "/topics/money-commercial-banking-and-financial-markets/read#financial-markets-architecture-money-market-instruments-vs-capital-markets",
    "description": "The organizational and regulatory structure of India's financial markets: the Money Market (short-term funds up to 1 year, regulated primarily by RBI) vs the Capital Market (medium and long-term funds, regulated by SEBI), and key money market instruments including Treasury Bills (T-Bills: 91, 182, 364-day zero-coupon securities), Cash Management Bills (CMBs), Commercial Paper (CP), Certificates of Deposit (CD), Call/Notice/Term Money, and Triparty Repo (TREPS).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Money, Commercial Banking & Financial Markets Architecture",
      "concept": "Financial Markets Architecture: Money Market Instruments vs Capital Market Architecture"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-11",
    "type": "CONCEPT",
    "title": "Capital Market Instruments: Equities, Corporate & Sovereign Bonds, Yield Curves & Derivatives",
    "slug": "capital-market-instruments-equities-corporate-bonds-yield-curves-derivatives",
    "url": "/topics/money-commercial-banking-and-financial-markets/read#capital-market-instruments-equities-corporate-bonds-yield-curves-derivatives",
    "description": "The long-term capital mobilization ecosystem: Primary Market (IPOs, FPOs, Rights Issues, Private Placements) vs Secondary Market (Stock Exchanges: BSE, NSE), Equity vs Debt capital, Sovereign & Corporate Bond markets, Bond Yield mechanics and inverse price relationship ($P = \\sum \\frac{C}{(1+y)^t} + \\frac{F}{(1+y)^n}$), Yield Curve shapes (Normal, Inverted, Flat), and financial Derivatives (Forwards, Futures, Options, Swaps).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Money, Commercial Banking & Financial Markets Architecture",
      "concept": "Capital Market Instruments: Equities, Corporate & Sovereign Bonds, Yield Curves & Derivatives"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-12",
    "type": "CONCEPT",
    "title": "Central Banking: Evolution of Reserve Bank of India, Organizational Structure & Statutory Functions",
    "slug": "central-banking-rbi-statutory-functions-reserve-management-lender-of-last-resort",
    "url": "/topics/central-banking-monetary-policy-and-price-theory/read#central-banking-rbi-statutory-functions-reserve-management-lender-of-last-resort",
    "description": "The constitutional and statutory foundations of the Reserve Bank of India (RBI): established on April 1, 1935 under the Reserve Bank of India Act 1934 (Hilton Young Commission recommendations) and nationalized on January 1, 1949, its governance by the Central Board of Directors, and core statutory functions (Monetary Authority, Issuer of Currency, Banker to Government, Banker to Banks, Regulator of Payment Systems, and Manager of Foreign Exchange under FEMA 1999).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Central Banking, Monetary Policy Framework & Price Theory",
      "concept": "Central Banking: Evolution of Reserve Bank of India, Organizational Structure & Statutory Functions"
    },
    "badge": "BEGINNER"
  },
  {
    "id": "con-CON-ECO-13",
    "type": "CONCEPT",
    "title": "Monetary Policy Framework: Flexible Inflation Targeting (FIT), MPC & Transmission Channels",
    "slug": "monetary-policy-framework-flexible-inflation-targeting-mpc-transmission-channels",
    "url": "/topics/central-banking-monetary-policy-and-price-theory/read#monetary-policy-framework-flexible-inflation-targeting-mpc-transmission-channels",
    "description": "The statutory monetary policy architecture of India instituted under the 2016 RBI Act amendment (Urjit Patel Committee): Flexible Inflation Targeting (FIT) targeting Headline CPI inflation at 4% with a tolerance band of ±2% (2% to 6%), the 6-member Monetary Policy Committee (MPC) structure and voting rules, accountability criteria for monetary failure (3 consecutive quarters outside tolerance band), and monetary policy transmission channels.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Central Banking, Monetary Policy Framework & Price Theory",
      "concept": "Monetary Policy Framework: Flexible Inflation Targeting (FIT), MPC & Transmission Channels"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-ECO-14",
    "type": "CONCEPT",
    "title": "Quantitative & Qualitative Monetary Instruments: Repo, SDF, MSF, CRR, SLR, OMO & Market Stabilization",
    "slug": "quantitative-qualitative-monetary-instruments-repo-sdf-msf-crr-slr-omo-market-stabilization",
    "url": "/topics/central-banking-monetary-policy-and-price-theory/read#quantitative-qualitative-monetary-instruments-repo-sdf-msf-crr-slr-omo-market-stabilization",
    "description": "The operational toolkit of monetary policy: Quantitative / General Tools (Liquidity Adjustment Facility - LAF Corridor: Policy Repo Rate, Standing Deposit Facility - SDF, Marginal Standing Facility - MSF, Cash Reserve Ratio - CRR, Statutory Liquidity Ratio - SLR, Open Market Operations - OMO, Market Stabilization Scheme - MSS, and Variable Rate Repo/Reverse Repo - VRR/VRRR) vs Qualitative / Selective Credit Controls (Margin Requirements, Consumer Credit Regulation, Moral Suasion, and Credit Rationing).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Central Banking, Monetary Policy Framework & Price Theory",
      "concept": "Quantitative & Qualitative Monetary Instruments: Repo, SDF, MSF, CRR, SLR, OMO & Market Stabilization"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-15",
    "type": "CONCEPT",
    "title": "Price Theory: Inflation Mechanics, Demand-Pull vs Cost-Push, Stagflation & The Phillips Curve",
    "slug": "price-theory-inflation-mechanics-demand-pull-cost-push-stagflation-phillips-curve",
    "url": "/topics/central-banking-monetary-policy-and-price-theory/read#price-theory-inflation-mechanics-demand-pull-cost-push-stagflation-phillips-curve",
    "description": "The core micro and macroeconomic mechanisms of inflation: Demand-Pull Inflation (excess aggregate demand $AD > AS$), Cost-Push / Supply-Shock Inflation, the Quantity Theory of Money ($MV = PY$), the dynamics of Stagflation (high inflation + stagnant growth + high unemployment), the Short-Run vs Long-Run Phillips Curve (Milton Friedman's Natural Rate of Unemployment / NAIRU), and the Fisher Effect ($i = r + \\pi^e$).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Central Banking, Monetary Policy Framework & Price Theory",
      "concept": "Price Theory: Inflation Mechanics, Demand-Pull vs Cost-Push, Stagflation & The Phillips Curve"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-16",
    "type": "CONCEPT",
    "title": "Measurement of Inflation: CPI vs WPI Basket Weightages, Core vs Headline & Food Inflation Dynamics",
    "slug": "measurement-of-inflation-cpi-vs-wpi-basket-weightages-core-headline-food-inflation",
    "url": "/topics/central-banking-monetary-policy-and-price-theory/read#measurement-of-inflation-cpi-vs-wpi-basket-weightages-core-headline-food-inflation",
    "description": "The statistical and institutional architecture of price measurement in India: Consumer Price Index (CPI-Combined, base 2012, compiled by NSO/MoSPI) vs Wholesale Price Index (WPI, base 2011-12, compiled by DPIIT/Ministry of Commerce), detailed item category weightages, Headline Inflation vs Core Inflation (excluding volatile Food & Fuel), and the dynamics of food inflation (supply perishability, cobweb cycles, and food basket dominance).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Central Banking, Monetary Policy Framework & Price Theory",
      "concept": "Measurement of Inflation: CPI vs WPI Basket Weightages, Core vs Headline & Food Inflation Dynamics"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-17",
    "type": "CONCEPT",
    "title": "Specialized Development Financial Institutions: NABARD, SIDBI, NHB, EXIM Bank & NaBFID",
    "slug": "specialized-development-financial-institutions-nabard-sidbi-nhb-exim-nabfid",
    "url": "/topics/central-banking-monetary-policy-and-price-theory/read#specialized-development-financial-institutions-nabard-sidbi-nhb-exim-nabfid",
    "description": "The institutional architecture of specialized Development Financial Institutions (DFIs) and All-India Financial Institutions (AIFIs) in India: NABARD (B. Sivaraman Committee, 1982 — RIDF, SHG-Bank Linkage), SIDBI (1990 — MSME financing, MUDRA), NHB (1988 — housing finance regulation transition to RBI), EXIM Bank (1982 — export-import credit lines), and the National Bank for Financing Infrastructure and Development (NaBFID Act 2021) for patient infrastructure capital.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Central Banking, Monetary Policy Framework & Price Theory",
      "concept": "Specialized Development Financial Institutions: NABARD, SIDBI, NHB, EXIM Bank & NaBFID"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-18",
    "type": "CONCEPT",
    "title": "Union Budget Architecture: Revenue vs Capital Receipts & Expenditure, and Constitutional Stages",
    "slug": "union-budget-architecture-revenue-vs-capital-receipts-expenditure-constitutional-stages",
    "url": "/topics/public-finance-union-budget-and-taxation/read#union-budget-architecture-revenue-vs-capital-receipts-expenditure-constitutional-stages",
    "description": "The constitutional and budgetary classification of the Union Budget under Article 112 (Annual Financial Statement): the structural bifurcation into the Revenue Account (Revenue Receipts [Tax & Non-Tax] and Revenue Expenditure [operational, non-asset creating]) and the Capital Account (Capital Receipts [Debt & Non-Debt creating] and Capital Expenditure [asset-creating / liability-reducing]), and the six constitutional parliamentary enactment stages.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Public Finance, Union Budget Architecture & Taxation",
      "concept": "Union Budget Architecture: Revenue vs Capital Receipts & Expenditure, and Constitutional Stages"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-19",
    "type": "CONCEPT",
    "title": "Fiscal Deficit Equations: Budgetary, Revenue, Effective Revenue, Fiscal & Primary Deficits",
    "slug": "fiscal-deficit-equations-budgetary-revenue-effective-revenue-fiscal-primary-deficits",
    "url": "/topics/public-finance-union-budget-and-taxation/read#fiscal-deficit-equations-budgetary-revenue-effective-revenue-fiscal-primary-deficits",
    "description": "The mathematical and macroeconomic equations of budgetary deficits in India: Revenue Deficit ($\\text{RD} = \\text{Revenue Expenditure} - \\text{Revenue Receipts}$), Effective Revenue Deficit ($\\text{ERD} = \\text{RD} - \\text{Grants for Creation of Capital Assets}$), Fiscal Deficit as the total sovereign borrowing requirement ($\\text{FD} = \\text{Total Expenditure} - [\\text{Revenue Receipts} + \\text{Non-Debt Capital Receipts}]$), and Primary Deficit isolating current-year fiscal stance ($\\text{PD} = \\text{Fiscal Deficit} - \\text{Interest Payments}$).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Public Finance, Union Budget Architecture & Taxation",
      "concept": "Fiscal Deficit Equations: Budgetary, Revenue, Effective Revenue, Fiscal & Primary Deficits"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-20",
    "type": "CONCEPT",
    "title": "Taxation Architecture in India: Direct vs Indirect Taxes, Tax Buoyancy & The GST Ecosystem",
    "slug": "taxation-architecture-in-india-direct-vs-indirect-taxes-tax-buoyancy-gst-ecosystem",
    "url": "/topics/public-finance-union-budget-and-taxation/read#taxation-architecture-in-india-direct-vs-indirect-taxes-tax-buoyancy-gst-ecosystem",
    "description": "The statutory taxation architecture of India: Direct Taxes (Income Tax Act 1961, Corporate Tax — progressive incidence, non-shiftable, administered by CBDT) vs Indirect Taxes (regressive incidence, shiftable, administered by CBIC), Tax Buoyancy vs Tax Elasticity, and the landmark Goods and Services Tax (GST - 101st Constitutional Amendment Act 2016) destination-based consumption framework, GST Council (Article 279A), and Input Tax Credit (ITC) mechanism.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Public Finance, Union Budget Architecture & Taxation",
      "concept": "Taxation Architecture in India: Direct vs Indirect Taxes, Tax Buoyancy & The GST Ecosystem"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-21",
    "type": "CONCEPT",
    "title": "FRBM Act 2003, Fiscal Consolidation Roadmap & N.K. Singh Committee Escape Clauses",
    "slug": "frbm-act-2003-fiscal-consolidation-roadmap-nk-singh-committee-escape-clauses",
    "url": "/topics/public-finance-union-budget-and-taxation/read#frbm-act-2003-fiscal-consolidation-roadmap-nk-singh-committee-escape-clauses",
    "description": "The statutory fiscal discipline architecture of India: the Fiscal Responsibility and Budget Management (FRBM) Act 2003, statutory fiscal rules, mandatory budget statement disclosures (Macroeconomic Framework, Fiscal Policy Strategy, Medium-Term Fiscal Policy), the N.K. Singh FRBM Review Committee recommendations (Debt-to-GDP anchor: 60% combined [40% Center / 20% States], Fiscal Deficit 3% of GDP, creation of a Fiscal Council), and statutory Escape Clauses under Section 4(2).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Public Finance, Union Budget Architecture & Taxation",
      "concept": "FRBM Act 2003, Fiscal Consolidation Roadmap & N.K. Singh Committee Escape Clauses"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-ECO-22",
    "type": "CONCEPT",
    "title": "Financial Regulatory Architecture: SEBI, IRDAI, PFRDA, IFSCA & FSDC Inter-Regulatory Coordination",
    "slug": "financial-regulatory-architecture-sebi-irdai-pfrda-ifsca-fsdc-inter-regulatory-coordination",
    "url": "/topics/banking-regulations-basel-norms-and-financial-inclusion/read#financial-regulatory-architecture-sebi-irdai-pfrda-ifsca-fsdc-inter-regulatory-coordination",
    "description": "The sectoral regulatory architecture of India's financial system: the RBI (Banks, NBFCs, Money Market, Forex), SEBI (Capital Markets & Securities under SEBI Act 1992), IRDAI (Insurance under IRDA Act 1999), PFRDA (Pensions under PFRDA Act 2013), and IFSCA (International Financial Services Centres Authority Act 2019 at GIFT City), coordinated through the non-statutory Financial Stability and Development Council (FSDC) chaired by the Union Finance Minister.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Banking Regulations, Basel Norms, NPAs & Financial Inclusion",
      "concept": "Financial Regulatory Architecture: SEBI, IRDAI, PFRDA, IFSCA & FSDC Inter-Regulatory Coordination"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-23",
    "type": "CONCEPT",
    "title": "Prudential Regulations & Basel Accords: Basel I, II, III, Risk-Weighted Assets, CRAR & Capital Buffers",
    "slug": "prudential-regulations-basel-accords-basel-i-ii-iii-rwa-crar-capital-buffers",
    "url": "/topics/banking-regulations-basel-norms-and-financial-inclusion/read#prudential-regulations-basel-accords-basel-i-ii-iii-rwa-crar-capital-buffers",
    "description": "The international prudential regulatory standards formulated by the Basel Committee on Banking Supervision (BCBS) at the Bank for International Settlements (BIS): evolution from Basel I (1988) and Basel II (Three Pillars: Minimum Capital, Supervisory Review, Market Discipline) to Basel III (post-2008 reforms), the Capital to Risk-Weighted Assets Ratio formula ($\\text{CRAR} = \\frac{\\text{Tier 1 Capital} + \\text{Tier 2 Capital}}{\\text{Total RWA}}$), Capital Conservation Buffer (CCB), Counter-Cyclical Capital Buffer (CCCB), Leverage Ratio, Liquidity Coverage Ratio (LCR), and Net Stable Funding Ratio (NSFR).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Banking Regulations, Basel Norms, NPAs & Financial Inclusion",
      "concept": "Prudential Regulations & Basel Accords: Basel I, II, III, Risk-Weighted Assets, CRAR & Capital Buffers"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-ECO-24",
    "type": "CONCEPT",
    "title": "Non-Performing Assets (NPAs), SMA Classification, Provisioning Norms, SARFAESI & IBC 2016 Resolution",
    "slug": "non-performing-assets-sma-classification-provisioning-norms-sarfaesi-ibc-2016-resolution",
    "url": "/topics/banking-regulations-basel-norms-and-financial-inclusion/read#non-performing-assets-sma-classification-provisioning-norms-sarfaesi-ibc-2016-resolution",
    "description": "The resolution and provisioning framework for stressed bank assets: the 90-day overdue NPA definition (sub-categorized into Sub-Standard [≤12 months], Doubtful [D1, D2, D3], and Loss Assets), Special Mention Account (SMA-0, SMA-1, SMA-2) early warning categories, mandatory regulatory Provisioning Coverage Ratios (PCR), Prompt Corrective Action (PCA) framework, SARFAESI Act 2002 enforcement, and the Insolvency and Bankruptcy Code (IBC 2016) time-bound corporate resolution mechanism (CIRP: 180 + 90 days, 330-day outer ceiling, NCLT/IBBI).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Banking Regulations, Basel Norms, NPAs & Financial Inclusion",
      "concept": "Non-Performing Assets (NPAs), SMA Classification, Provisioning Norms, SARFAESI & IBC 2016 Resolution"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-ECO-25",
    "type": "CONCEPT",
    "title": "Financial Inclusion Framework: Priority Sector Lending (PSL) Targets, PSLCs, Lead Bank Scheme & PMJDY",
    "slug": "financial-inclusion-framework-priority-sector-lending-psl-sub-targets-pslc-lead-bank-pmjdy",
    "url": "/topics/banking-regulations-basel-norms-and-financial-inclusion/read#financial-inclusion-framework-priority-sector-lending-psl-sub-targets-pslc-lead-bank-pmjdy",
    "description": "The multi-tiered statutory and institutional framework for universal financial inclusion in India: Priority Sector Lending (PSL) mandates (40% of ANBC for domestic SCBs and foreign banks with ≥20 branches, 75% for SFBs/RRBs), 8 eligible PSL categories and sub-targets (Agriculture 18%, Small/Marginal Farmers 10%, Micro Enterprises 7.5%, Weaker Sections 12%), Priority Sector Lending Certificates (PSLCs), the Lead Bank Scheme & Service Area Approach, and the JAM Trinity (PMJDY overdrafts and insurance).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Banking Regulations, Basel Norms, NPAs & Financial Inclusion",
      "concept": "Financial Inclusion Framework: Priority Sector Lending (PSL) Targets, PSLCs, Lead Bank Scheme & PMJDY"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-26",
    "type": "CONCEPT",
    "title": "Balance of Payments (BoP) Framework: Current Account, Capital Account, CAD & Forex Reserves",
    "slug": "balance-of-payments-framework-current-account-capital-account-cad-forex-reserves",
    "url": "/topics/external-sector-balance-of-payments-and-trade/read#balance-of-payments-framework-current-account-capital-account-cad-forex-reserves",
    "description": "The macroeconomic accounting framework recording all economic transactions between residents of a country and the rest of the world (IMF BPM6 manual): the Current Account (Merchandise Goods Trade, Services/Invisibles, Primary Income, Secondary Transfers/Remittances), the Capital Account (FDI, FPI, External Commercial Borrowings, NRI Deposits, Banking Capital), Errors & Omissions, the Overall BoP Balance, and the Foreign Exchange Reserves buffer (FCA, Gold, SDR, RTP).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "External Sector, Balance of Payments & International Trade",
      "concept": "Balance of Payments (BoP) Framework: Current Account, Capital Account, CAD & Forex Reserves"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-27",
    "type": "CONCEPT",
    "title": "Exchange Rate Regimes: Fixed, Floating, LERMS, NEER vs REER & Rupee Convertibility Roadmaps",
    "slug": "exchange-rate-regimes-lerms-neer-reer-rupee-convertibility-tarapore-committee-roadmaps",
    "url": "/topics/external-sector-balance-of-payments-and-trade/read#exchange-rate-regimes-lerms-neer-reer-rupee-convertibility-tarapore-committee-roadmaps",
    "description": "The mechanics of foreign exchange determination: Fixed/Pegged vs Floating/Flexible vs Managed Float exchange rates, the Liberalised Exchange Rate Management System (LERMS, March 1992) and transition to full Unified Market-Determined Exchange Rate (March 1993), Nominal Effective Exchange Rate (NEER) vs Real Effective Exchange Rate (REER: trade-weighted relative price competitiveness), and Rupee Convertibility (Full Current Account Convertibility under Article VIII of IMF, August 1994 vs Partial Capital Account Convertibility governed by Tarapore Committee roadmaps).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "External Sector, Balance of Payments & International Trade",
      "concept": "Exchange Rate Regimes: Fixed, Floating, LERMS, NEER vs REER & Rupee Convertibility Roadmaps"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-ECO-28",
    "type": "CONCEPT",
    "title": "Foreign Capital Flows: FDI (Automatic vs Government Route), FPI Regulations & ECBs",
    "slug": "foreign-capital-flows-fdi-automatic-vs-government-routes-fpi-regulations-external-commercial-borrowings",
    "url": "/topics/external-sector-balance-of-payments-and-trade/read#foreign-capital-flows-fdi-automatic-vs-government-routes-fpi-regulations-external-commercial-borrowings",
    "description": "The legal and regulatory framework governing cross-border foreign capital inflows into India: Foreign Direct Investment (FDI — long-term strategic equity ≥10% with voting control, Automatic Route via RBI vs Government Approval Route via DPIIT / sectoral ministries, Consolidated FDI Policy, Press Note 3 of 2020 restrictions) vs Foreign Portfolio Investment (FPI — financial investment <10% in listed securities, regulated by SEBI), and External Commercial Borrowings (ECB framework under FEMA 1999).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "External Sector, Balance of Payments & International Trade",
      "concept": "Foreign Capital Flows: FDI (Automatic vs Government Route), FPI Regulations & ECBs"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-29",
    "type": "CONCEPT",
    "title": "International Economic Institutions: Bretton Woods (IMF, World Bank), WTO Agreements & MDBs",
    "slug": "international-economic-institutions-imf-sdr-world-bank-group-wto-agreements-ndb-aiib",
    "url": "/topics/external-sector-balance-of-payments-and-trade/read#international-economic-institutions-imf-sdr-world-bank-group-wto-agreements-ndb-aiib",
    "description": "The global multilateral economic governance architecture: the Bretton Woods twins (1944) — the International Monetary Fund (IMF: Quotas, Special Drawing Rights [SDR], Article IV consultations, Extended Fund Facility [EFF]) and the World Bank Group (IBRD, IDA, IFC, MIGA, ICSID — India is not a member of ICSID), the World Trade Organization (WTO: Marrakesh Agreement 1995, Most Favoured Nation [MFN], National Treatment, Agreement on Agriculture [AoA boxes: Green, Blue, Amber], Peace Clause, TRIPS), and emerging Multilateral Development Banks (AIIB and NDB / BRICS Bank).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "External Sector, Balance of Payments & International Trade",
      "concept": "International Economic Institutions: Bretton Woods (IMF, World Bank), WTO Agreements & MDBs"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-30",
    "type": "CONCEPT",
    "title": "Indian Agriculture: Structural Evolution, Green Revolution, Cropping Patterns & Irrigation Architecture",
    "slug": "indian-agriculture-structural-evolution-green-revolution-cropping-patterns-irrigation",
    "url": "/topics/agriculture-land-reforms-and-food-security/read#indian-agriculture-structural-evolution-green-revolution-cropping-patterns-irrigation",
    "description": "The structural and agronomic transformation of Indian agriculture: shift from food deficit ship-to-mouth dependency (PL-480) to self-sufficiency through the Green Revolution (Norman Borlaug, M.S. Swaminathan, HYV seeds, fertilizers, tubewell irrigation), structural issues of cropping pattern skew (monoculture of rice-wheat in NW India), and modern micro-irrigation schemes (PMKSY: Per Drop More Crop).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Agriculture, Land Reforms & Food Security",
      "concept": "Indian Agriculture: Structural Evolution, Green Revolution, Cropping Patterns & Irrigation Architecture"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-31",
    "type": "CONCEPT",
    "title": "Land Reforms in India: Zamindari Abolition, Tenancy Reforms, Land Ceilings, Bhoodan & Digitization",
    "slug": "land-reforms-in-india-zamindari-abolition-tenancy-reforms-land-ceilings-bhoodan-digitization",
    "url": "/topics/agriculture-land-reforms-and-food-security/read#land-reforms-in-india-zamindari-abolition-tenancy-reforms-land-ceilings-bhoodan-digitization",
    "description": "The socio-legal and economic restructuring of agrarian land ownership in post-independence India: Abolition of Intermediaries, Tenancy Reforms (Operation Barga), Land Ceiling Acts, voluntary Bhoodan-Gramdan (Vinoba Bhave, 1951), Ninth Schedule constitutional protections, and modern digital land administration (DILRMP and PM-SVAMITVA drone surveys).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Agriculture, Land Reforms & Food Security",
      "concept": "Land Reforms in India: Zamindari Abolition, Tenancy Reforms, Land Ceilings, Bhoodan & Digitization"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-32",
    "type": "CONCEPT",
    "title": "Agricultural Pricing Architecture: MSP, CACP Cost Concepts (A2, A2+FL, C2), e-NAM & PM-AASHA",
    "slug": "agricultural-pricing-architecture-msp-cacp-cost-concepts-a2-fl-c2-e-nam-pm-aasha",
    "url": "/topics/agriculture-land-reforms-and-food-security/read#agricultural-pricing-architecture-msp-cacp-cost-concepts-a2-fl-c2-e-nam-pm-aasha",
    "description": "The agricultural pricing framework of India: Minimum Support Price (MSP announced for 22 mandated crops + FRP for Sugarcane), CACP cost formulas (A2, A2+FL, C2), official 1.5x A2+FL formula vs Swaminathan 1.5x C2 formula, PM-AASHA price support mechanisms (PSS, PDPS, PPPS), and e-NAM electronic mandis.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Agriculture, Land Reforms & Food Security",
      "concept": "Agricultural Pricing Architecture: MSP, CACP Cost Concepts (A2, A2+FL, C2), e-NAM & PM-AASHA"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-33",
    "type": "CONCEPT",
    "title": "Industrial Policy Evolution: IPR 1948, 1956 Mahalanobis Strategy, 1991 LPG Reforms & PLI Schemes",
    "slug": "industrial-policy-evolution-ipr-1948-1956-mahalanobis-strategy-1991-lpg-reforms-pli-schemes",
    "url": "/topics/industrial-policy-msmes-and-digital-infrastructure/read#industrial-policy-evolution-ipr-1948-1956-mahalanobis-strategy-1991-lpg-reforms-pli-schemes",
    "description": "The historical and contemporary trajectory of industrialization in India: the Industrial Policy Resolution (IPR 1948: mixed economy inception), IPR 1956 (\"Economic Constitution of India\", Nehru-Mahalanobis heavy industry model, Schedule A/B/C reservation, License-Permit-Quota Raj), the Statement on Industrial Policy (July 24, 1991: delicensing, deregulation, MRTP threshold abolition, public sector reservation reduction to 2 sectors [Atomic Energy & Railway operations]), and modern manufacturing initiatives (Make in India, Production Linked Incentive [PLI] schemes across 14 key sectors).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Industrial Policy, MSMEs, Disinvestment & Digital Infrastructure",
      "concept": "Industrial Policy Evolution: IPR 1948, 1956 Mahalanobis Strategy, 1991 LPG Reforms & PLI Schemes"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-34",
    "type": "CONCEPT",
    "title": "MSME Sector Framework: Revised 2020 Composite Criteria, Udyam Portal & Credit Guarantees",
    "slug": "msme-sector-framework-revised-2020-composite-criteria-udyam-portal-cgtmse-credit-schemes",
    "url": "/topics/industrial-policy-msmes-and-digital-infrastructure/read#msme-sector-framework-revised-2020-composite-criteria-udyam-portal-cgtmse-credit-schemes",
    "description": "The statutory framework governing Micro, Small and Medium Enterprises under the MSMED Act 2006: the revised July 1, 2020 composite classification criteria combining Investment in Plant & Machinery AND Annual Turnover (eliminating the historical distinction between manufacturing and services), self-declaration on the Udyam Registration Portal, Samadhaan delayed payments portal (Section 15: compound interest at 3x RBI bank rate after 45 days), Sambandh public procurement policy (25% mandatory purchase by CPSEs), and CGTMSE credit guarantees.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Industrial Policy, MSMEs, Disinvestment & Digital Infrastructure",
      "concept": "MSME Sector Framework: Revised 2020 Composite Criteria, Udyam Portal & Credit Guarantees"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-35",
    "type": "CONCEPT",
    "title": "Central Public Sector Enterprises: Maharatna, Navratna, Miniratna & Strategic Disinvestment Policy",
    "slug": "central-public-sector-enterprises-maharatna-navratna-strategic-disinvestment-dipam-policy",
    "url": "/topics/industrial-policy-msmes-and-digital-infrastructure/read#central-public-sector-enterprises-maharatna-navratna-strategic-disinvestment-dipam-policy",
    "description": "The corporate governance and privatization framework for Central Public Sector Enterprises (CPSEs): the three-tier autonomy classification (Maharatna, Navratna, Miniratna Category I & II criteria and financial delegation limits), the Department of Investment and Public Asset Management (DIPAM, Ministry of Finance), and the New PSE Policy for Atmanirbhar Bharat (2021) categorizing sectors into Strategic (max 4 CPSEs retained) vs Non-Strategic sectors.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Industrial Policy, MSMEs, Disinvestment & Digital Infrastructure",
      "concept": "Central Public Sector Enterprises: Maharatna, Navratna, Miniratna & Strategic Disinvestment Policy"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-36",
    "type": "CONCEPT",
    "title": "Services Sector & India's Digital Public Infrastructure (DPI): India Stack, Account Aggregator & ONDC",
    "slug": "services-sector-and-indias-digital-public-infrastructure-dpi-india-stack-account-aggregator-ondc",
    "url": "/topics/industrial-policy-msmes-and-digital-infrastructure/read#services-sector-and-indias-digital-public-infrastructure-dpi-india-stack-account-aggregator-ondc",
    "description": "The structural transformation of India's services sector (~53-55% of GVA) and the pioneering Digital Public Infrastructure (DPI / \"India Stack\") architecture: the four layers of India Stack (Identity: Aadhaar, Payments: UPI/NPCI, Documents: DigiLocker, Data Empowerment: DEPA / Account Aggregator framework), and open-network ecommerce democratization through the Open Network for Digital Commerce (ONDC).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Industrial Policy, MSMEs, Disinvestment & Digital Infrastructure",
      "concept": "Services Sector & India's Digital Public Infrastructure (DPI): India Stack, Account Aggregator & ONDC"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-37",
    "type": "CONCEPT",
    "title": "Concepts of Poverty: Absolute vs Relative Poverty, Headcount Ratio, Poverty Gap & Foster-Greer-Thorbecke Index",
    "slug": "concepts-of-poverty-absolute-vs-relative-headcount-ratio-poverty-gap-squared-poverty-gap",
    "url": "/topics/poverty-inequality-human-capital-and-sustainability/read#concepts-of-poverty-absolute-vs-relative-headcount-ratio-poverty-gap-squared-poverty-gap",
    "description": "The theoretical and quantitative dimensions of poverty: Absolute Poverty (deprivation of minimum biological subsistence / Poverty Line Basket [PLB]) vs Relative Poverty (inequality of income distribution relative to median living standards), and the Foster-Greer-Thorbecke (FGT) family of poverty indices (Headcount Ratio $P_0$, Poverty Gap Index $P_1$ measuring depth of poverty, and Squared Poverty Gap / Poverty Severity $P_2$ measuring inequality among the poor).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Poverty, Inequality, Human Capital & Sustainable Development",
      "concept": "Concepts of Poverty: Absolute vs Relative Poverty, Headcount Ratio, Poverty Gap & Foster-Greer-Thorbecke Index"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-38",
    "type": "CONCEPT",
    "title": "Measuring Economic Inequality: Lorenz Curve, Gini Coefficient, Palma Ratio & Wealth vs Consumption Gini",
    "slug": "measuring-economic-inequality-lorenz-curve-gini-coefficient-palma-ratio-consumption-vs-wealth-gini",
    "url": "/topics/poverty-inequality-human-capital-and-sustainability/read#measuring-economic-inequality-lorenz-curve-gini-coefficient-palma-ratio-consumption-vs-wealth-gini",
    "description": "The geometric and mathematical measurement of economic inequality: the Lorenz Curve (Max O. Lorenz, 1905: cumulative population vs cumulative income/wealth), the Gini Coefficient (Corrado Gini, 1912: ratio of Area A to Area A+B), the Palma Ratio (share of top 10% divided by bottom 40%), the 20/20 Ratio, and the structural divergence between Consumption Gini (~0.35 derived from NSO MPCE surveys) and Wealth Gini (~0.75 in World Inequality Report) in India.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Poverty, Inequality, Human Capital & Sustainable Development",
      "concept": "Measuring Economic Inequality: Lorenz Curve, Gini Coefficient, Palma Ratio & Wealth vs Consumption Gini"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-39",
    "type": "CONCEPT",
    "title": "Evolution of Poverty Estimation in India: Dadabhai Naoroji to Tendulkar & Rangarajan Committees",
    "slug": "evolution-of-poverty-estimation-in-india-dadabhai-naoroji-alagh-lakdawala-tendulkar-rangarajan",
    "url": "/topics/poverty-inequality-human-capital-and-sustainability/read#evolution-of-poverty-estimation-in-india-dadabhai-naoroji-alagh-lakdawala-tendulkar-rangarajan",
    "description": "The historical evolution of poverty line estimation in India: pre-independence benchmarks (Dadabhai Naoroji's Jail Cost of Living 1867-68, National Planning Committee 1938, Bombay Plan 1944) to post-independence Planning Commission committees: Y.K. Alagh Task Force (1979: Calorie norms of 2400 kcal Rural / 2100 kcal Urban), D.T. Lakdawala Committee (1993: state-specific price deflators using CPI-AL and CPI-IW), Suresh Tendulkar Committee (2009: shifting from calories to mixed consumption basket including health and education, MRP, ₹27/day rural & ₹33/day urban, 21.9% poverty in 2011-12), and C. Rangarajan Committee (2014: ₹32/day rural & ₹47/day urban, 29.5% poverty).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Poverty, Inequality, Human Capital & Sustainable Development",
      "concept": "Evolution of Poverty Estimation in India: Dadabhai Naoroji to Tendulkar & Rangarajan Committees"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-ECO-40",
    "type": "CONCEPT",
    "title": "Multidimensional Poverty Index: Alkire-Foster Method & NITI Aayog National MPI (12 Indicators)",
    "slug": "multidimensional-poverty-index-alkire-foster-method-niti-aayog-national-mpi-12-indicators",
    "url": "/topics/poverty-inequality-human-capital-and-sustainability/read#multidimensional-poverty-index-alkire-foster-method-niti-aayog-national-mpi-12-indicators",
    "description": "The multidimensional deprivation measurement framework: the Alkire-Foster (AF) counting methodology developed by Oxford OPHI and UNDP, Global MPI (3 dimensions: Health, Education, Standard of Living across 10 indicators), and the NITI Aayog National Multidimensional Poverty Index (National MPI) adding 2 India-specific indicators (Maternal Health and Bank Account) across 12 indicators, measuring the Multidimensional Poverty Headcount Ratio (H), Intensity of Poverty (A), and MPI Score ($MPI = H \\times A$), tracking the lifting of 248 million Indians out of multidimensional poverty between 2013-14 and 2022-23.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Poverty, Inequality, Human Capital & Sustainable Development",
      "concept": "Multidimensional Poverty Index: Alkire-Foster Method & NITI Aayog National MPI (12 Indicators)"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-41",
    "type": "CONCEPT",
    "title": "Human Capital Formation: Amartya Sen's Capability Approach, Education & Health Paradigms",
    "slug": "human-capital-formation-amartya-sen-capability-approach-education-health-skill-development",
    "url": "/topics/poverty-inequality-human-capital-and-sustainability/read#human-capital-formation-amartya-sen-capability-approach-education-health-skill-development",
    "description": "The economic theory of human capital as an engine of endogenous growth (Theodore Schultz, Gary Becker, Robert Lucas): Amartya Sen's Capability Approach (distinguishing Functionings vs Capabilities, viewing poverty as capability deprivation and human development as freedom expansion), the Human Development Index (HDI: Life Expectancy, Mean/Expected Years of Schooling, GNI per capita PPP), National Education Policy (NEP 2020: 5+3+3+4 structure, 6% GDP spending target), and Ayushman Bharat health architecture.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Poverty, Inequality, Human Capital & Sustainable Development",
      "concept": "Human Capital Formation: Amartya Sen's Capability Approach, Education & Health Paradigms"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-42",
    "type": "CONCEPT",
    "title": "Sustainable Development & Climate Economics: SDGs, Environmental Kuznets Curve, Carbon Markets & Green Finance",
    "slug": "sustainable-development-climate-economics-environmental-kuznets-curve-carbon-credits-green-bonds",
    "url": "/topics/poverty-inequality-human-capital-and-sustainability/read#sustainable-development-climate-economics-environmental-kuznets-curve-carbon-credits-green-bonds",
    "description": "The economic interface of climate change and environmental sustainability: the Brundtland Report (1987) definition of Sustainable Development, the 17 UN Sustainable Development Goals (SDGs: 2015-2030) and NITI Aayog SDG India Index, the Environmental Kuznets Curve (EKC: inverted-U hypothesis linking pollution to per capita income), Carbon Pricing mechanisms (Carbon Tax vs Cap-and-Trade / Carbon Credits under Article 6 of Paris Agreement and Energy Conservation Amendment Act 2022), and Sovereign Green Bonds.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Poverty, Inequality, Human Capital & Sustainable Development",
      "concept": "Sustainable Development & Climate Economics: SDGs, Environmental Kuznets Curve, Carbon Markets & Green Finance"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-43",
    "type": "CONCEPT",
    "title": "Unemployment Typology & Measurement: UPS, UPSS, CWS, LFPR, WPR & PLFS Labor Market Indicators",
    "slug": "unemployment-typology-and-measurement-ups-upss-cws-lfpr-wpr-plfs-labor-market-trends",
    "url": "/topics/employment-labor-markets-and-economic-planning/read#unemployment-typology-and-measurement-ups-upss-cws-lfpr-wpr-plfs-labor-market-trends",
    "description": "The statistical and conceptual measurement of labor markets in India: types of unemployment (Disguised / Underemployment, Structural, Frictional, Cyclical, Seasonal), the NSO measurement activity statuses (Usual Principal Status [UPS: major activity over 365 days], Usual Principal and Subsidiary Status [UPSS], Current Weekly Status [CWS: 1 hour in last 7 days]), and core Periodic Labour Force Survey (PLFS, launched April 2017) indicators: Labour Force Participation Rate (LFPR), Worker Population Ratio (WPR), and Unemployment Rate ($UR = \\frac{\\text{Unemployed}}{\\text{Labour Force}} \\times 100$).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Employment, Labor Markets, Planning & NITI Aayog",
      "concept": "Unemployment Typology & Measurement: UPS, UPSS, CWS, LFPR, WPR & PLFS Labor Market Indicators"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-44",
    "type": "CONCEPT",
    "title": "The Informal Economy, Gig & Platform Workers, Social Security Code 2020 & e-Shram Portal",
    "slug": "informal-sector-gig-platform-workers-social-security-code-2020-e-shram-portal",
    "url": "/topics/employment-labor-markets-and-economic-planning/read#informal-sector-gig-platform-workers-social-security-code-2020-e-shram-portal",
    "description": "The dual structure of the Indian labor market: the Informal / Unorganized Sector (~90% of total workforce lacking written contracts, paid leave, and social security pensions), the emerging Gig and Platform Economy, the 4 new simplified Labour Codes (Code on Wages 2019, Industrial Relations Code 2020, Social Security Code 2020, OSH Code 2020), the statutory recognition of Gig and Platform Workers under the Social Security Code 2020 (Social Security Fund funded by 1-2% aggregator turnover cess), and the e-Shram unorganized worker registry portal.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Employment, Labor Markets, Planning & NITI Aayog",
      "concept": "The Informal Economy, Gig & Platform Workers, Social Security Code 2020 & e-Shram Portal"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-45",
    "type": "CONCEPT",
    "title": "Inclusive Growth Architecture: Direct Benefit Transfer (DBT), JAM Trinity & Welfare Governance",
    "slug": "inclusive-growth-architecture-direct-benefit-transfer-dbt-jam-trinity-welfare-governance",
    "url": "/topics/employment-labor-markets-and-economic-planning/read#inclusive-growth-architecture-direct-benefit-transfer-dbt-jam-trinity-welfare-governance",
    "description": "The institutional strategy for inclusive, equitable growth in India: the concept of Inclusive Growth (growth that creates employment opportunities and reduces poverty and horizontal/vertical inequality), the JAM Trinity architecture (Jan Dhan Accounts, Aadhaar Biometric Identification, Mobile Connectivity) enabling Direct Benefit Transfer (DBT) under the Aadhaar Act 2016 (Section 7), plugging ghost-beneficiary leakages across major central schemes (PM-KISAN, PDS, LPG PAHAL).",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Employment, Labor Markets, Planning & NITI Aayog",
      "concept": "Inclusive Growth Architecture: Direct Benefit Transfer (DBT), JAM Trinity & Welfare Governance"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-46",
    "type": "CONCEPT",
    "title": "Evolution of Economic Planning: Five-Year Plans, Planning Commission to NITI Aayog Federalism",
    "slug": "evolution-of-economic-planning-five-year-plans-planning-commission-to-niti-aayog-federalism",
    "url": "/topics/employment-labor-markets-and-economic-planning/read#evolution-of-economic-planning-five-year-plans-planning-commission-to-niti-aayog-federalism",
    "description": "The historical evolution of national economic planning in India: the Planning Commission (established March 15, 1950 via executive resolution — non-constitutional, non-statutory) and National Development Council (NDC, 1952), the trajectory of 12 Five-Year Plans (1st Harrod-Domar, 2nd Mahalanobis, Plan Holidays, 12th Plan: Faster, Sustainable and More Inclusive Growth), the replacement of the Planning Commission by NITI Aayog (National Institution for Transforming India, January 1, 2015), Cooperative vs Competitive Federalism, Governing Council structure, and the 3-Year Action Agenda / 7-Year Strategy / 15-Year Vision framework.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Employment, Labor Markets, Planning & NITI Aayog",
      "concept": "Evolution of Economic Planning: Five-Year Plans, Planning Commission to NITI Aayog Federalism"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-47",
    "type": "CONCEPT",
    "title": "Macroeconomic Profile of Rajasthan: GSDP, GSVA Sectoral Shares & Per Capita Income Trends",
    "slug": "macroeconomic-profile-of-rajasthan-gsdp-gsva-sectoral-shares-per-capita-income",
    "url": "/topics/rajasthan-state-economy-and-development/read#macroeconomic-profile-of-rajasthan-gsdp-gsva-sectoral-shares-per-capita-income",
    "description": "The macroeconomic indicators of Rajasthan (Economic Review of Rajasthan): Gross State Domestic Product (GSDP at current and constant 2011-12 prices), Gross State Value Added (GSVA) sectoral composition (Agriculture ~27-28%, Industry ~27-28%, Services ~44-45%), Per Capita Income trends (current vs constant prices), and comparative performance against all-India macroeconomic parameters.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Rajasthan State Economy & Flagship Development Programs",
      "concept": "Macroeconomic Profile of Rajasthan: GSDP, GSVA Sectoral Shares & Per Capita Income Trends"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-48",
    "type": "CONCEPT",
    "title": "Key Economic Sectors of Rajasthan: Arid Agriculture, Mineral Endowments, Renewable Energy Hub & Tourism",
    "slug": "key-economic-sectors-of-rajasthan-arid-agriculture-minerals-renewable-energy-hub-tourism",
    "url": "/topics/rajasthan-state-economy-and-development/read#key-economic-sectors-of-rajasthan-arid-agriculture-minerals-renewable-energy-hub-tourism",
    "description": "The core sectoral drivers of Rajasthan: Agricultural leadership (#1 in Mustard/Rapeseed, Bajra, Nutri-cereals, Gwar), Livestock wealth (#2 in milk production, #1 in wool production with ~35-40% national share), Mineral monopoly (Sole/exclusive producer of Lead & Zinc, Wollastonite, Selenite, Gypsum; major onshore crude oil producer in Barmer-Cairn basin), Renewable Energy powerhouse (#1 in solar energy potential with 142 GW, Bhadla Solar Park 2245 MW), and Tourism heritage architecture.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Rajasthan State Economy & Flagship Development Programs",
      "concept": "Key Economic Sectors of Rajasthan: Arid Agriculture, Mineral Endowments, Renewable Energy Hub & Tourism"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ECO-49",
    "type": "CONCEPT",
    "title": "Industrial Infrastructure & Flagship Schemes in Rajasthan: RIPS, RIICO, DMIC & Social Welfare Suite",
    "slug": "industrial-infrastructure-and-flagship-schemes-in-rajasthan-rips-riico-dmic-social-welfare",
    "url": "/topics/rajasthan-state-economy-and-development/read#industrial-infrastructure-and-flagship-schemes-in-rajasthan-rips-riico-dmic-social-welfare",
    "description": "The industrial promotional and social welfare architecture of Rajasthan: RIICO industrial areas, Rajasthan Investment Promotion Scheme (RIPS 2022/2024: customized capital subsidies, electricity duty exemptions, and green incentives), Delhi-Mumbai Industrial Corridor (DMIC: ~38% length passes through Rajasthan; Khushkhera-Bhiwadi-Neemrana & Jodhpur-Pali-Marwar industrial nodes), Mukhyamantri Nishulk Dawa Yojana (2011), Mukhyamantri Chiranjeevi Swasthya Bima Yojana / Ayushman Arogya Rajasthan, Indira Rasoi Yojana, and Rajasthan Social Security Pension Schemes.",
    "hierarchy": {
      "domain": "Economics & Public Policy",
      "subject": "Indian Economy & Macroeconomic Policy",
      "topic": "Rajasthan State Economy & Flagship Development Programs",
      "concept": "Industrial Infrastructure & Flagship Schemes in Rajasthan: RIPS, RIICO, DMIC & Social Welfare Suite"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-01",
    "type": "CONCEPT",
    "title": "Indian Financial System: Structural Evolution, Institutional Pillars & Phase Transitions",
    "slug": "indian-financial-system-evolution-institutional-structure-and-phase-transitions",
    "url": "/topics/iibf-indian-financial-system-architecture/read#indian-financial-system-evolution-institutional-structure-and-phase-transitions",
    "description": "The historical and institutional architecture of the Indian Financial System: evolution across four distinct phases (Pre-Independence colonial banking, Post-Independence State Domination and 14/6 Bank Nationalizations in 1969 & 1980, Narasimham Committee I & II post-1991 structural reforms), the formal financial system quad (Financial Institutions, Financial Markets, Financial Instruments, Financial Services), and dual intermediation through Banks vs Non-Bank Financial Intermediaries.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Indian Financial System Architecture & Institutional Tiers",
      "concept": "Indian Financial System: Structural Evolution, Institutional Pillars & Phase Transitions"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-02",
    "type": "CONCEPT",
    "title": "Regional Rural Banks (RRBs): Capital Structure, Sponsor Bank Roles & Phased Amalgamations",
    "slug": "regional-rural-banks-structure-amalgamation-and-ownership-governance",
    "url": "/topics/iibf-indian-financial-system-architecture/read#regional-rural-banks-structure-amalgamation-and-ownership-governance",
    "description": "The statutory framework governing Regional Rural Banks under the Regional Rural Banks Act 1976 (M. Narasimham Working Group, 1975): statutory tripartite equity shareholding (Central Government 50%, Sponsor Public Sector Bank 35%, State Government 15%), target beneficiary focus (Small/Marginal Farmers, Agricultural Laborers, Rural Artisans), mandatory 75% Priority Sector Lending allocation, supervision by NABARD under Section 35A of Banking Regulation Act 1949, and consolidation from 196 original RRBs to 43 RRBs across three amalgamation waves.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Indian Financial System Architecture & Institutional Tiers",
      "concept": "Regional Rural Banks (RRBs): Capital Structure, Sponsor Bank Roles & Phased Amalgamations"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-03",
    "type": "CONCEPT",
    "title": "Cooperative Banking Framework: Dual Regulation, BR Act Amendment 2020 & 4-Tier UCB System",
    "slug": "cooperative-banking-framework-br-act-amendment-2020-and-4-tier-ucb-categorization",
    "url": "/topics/iibf-indian-financial-system-architecture/read#cooperative-banking-framework-br-act-amendment-2020-and-4-tier-ucb-categorization",
    "description": "The statutory structure of cooperative banking in India: the historic problem of Dual Regulation (Registrar of Cooperative Societies [RCS] under State laws vs RBI under BR Act 1949), the landmark Banking Regulation (Amendment) Act 2020 bringing all Urban Cooperative Banks (UCBs) and Multi-State Cooperative Banks under direct regulatory and supervisory control of RBI (powers over management supersession, board reconstitution, audit, and resolution), the N.S. Vishwanathan Committee 4-Tier UCB regulatory hierarchy (Tier 1 [deposits ≤₹100 Cr], Tier 2 [₹100-1000 Cr], Tier 3 [₹1000-10000 Cr], Tier 4 [>₹10000 Cr]), and phased PSL transition to 75%.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Indian Financial System Architecture & Institutional Tiers",
      "concept": "Cooperative Banking Framework: Dual Regulation, BR Act Amendment 2020 & 4-Tier UCB System"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-IIBF-04",
    "type": "CONCEPT",
    "title": "Non-Banking Financial Companies (NBFCs): Scale-Based Regulation (SBR) & Four-Tier Architecture",
    "slug": "non-banking-financial-companies-scale-based-regulation-and-regulatory-layers",
    "url": "/topics/iibf-indian-financial-system-architecture/read#non-banking-financial-companies-scale-based-regulation-and-regulatory-layers",
    "description": "The statutory framework governing Non-Banking Financial Companies under Chapter III-B of the Reserve Bank of India Act 1934: the 50-50 Principle Principal Business Test (financial assets >50% of total assets and income from financial assets >50% of gross income), Deposit-taking (NBFC-D) vs Non-Deposit-taking (NBFC-ND), the landmark Scale-Based Regulation (SBR, effective October 2022) grouping NBFCs into four layers (Base Layer [asset size <₹1,000 Cr], Middle Layer [asset size ≥₹1,000 Cr, all deposit-taking, and HFCs], Upper Layer [top 15 systemically important NBFCs subject to bank-like prudential norms], and Top Layer [currently empty]), and NPA recognition harmonization to the 90-day overdue rule.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Indian Financial System Architecture & Institutional Tiers",
      "concept": "Non-Banking Financial Companies (NBFCs): Scale-Based Regulation (SBR) & Four-Tier Architecture"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-IIBF-05",
    "type": "CONCEPT",
    "title": "Development Financial Institutions (DFIs): NABARD, SIDBI, EXIM Bank, NHB & NaBFID",
    "slug": "development-financial-institutions-nabard-sidbi-exim-nhb-and-nabfid-statutory-mandates",
    "url": "/topics/iibf-indian-financial-system-architecture/read#development-financial-institutions-nabard-sidbi-exim-nhb-and-nabfid-statutory-mandates",
    "description": "The specialized statutory long-term refinancing and developmental lending architecture: the evolution of All-India Financial Institutions (AIFIs) regulated under Section 45L of the RBI Act 1934: NABARD (NABARD Act 1981, B. Sivaraman Committee, July 12, 1982: RIDF, refinance to RRBs/cooperatives), SIDBI (SIDBI Act 1989, operational 1990: MSME refinance, MUDRA), EXIM Bank (EXIM Bank Act 1981: cross-border export credit & Lines of Credit), NHB (NHB Act 1987: housing refinance), and the newly established NaBFID (National Bank for Financing Infrastructure and Development Act 2021: ₹1 Lakh Crore developmental infrastructure debt).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Indian Financial System Architecture & Institutional Tiers",
      "concept": "Development Financial Institutions (DFIs): NABARD, SIDBI, EXIM Bank, NHB & NaBFID"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-06",
    "type": "CONCEPT",
    "title": "Financial Markets Duality: Money Market vs Capital Market Mechanics & Intermediation",
    "slug": "financial-markets-duality-money-market-vs-capital-market-mechanisms",
    "url": "/topics/iibf-financial-markets-and-instruments/read#financial-markets-duality-money-market-vs-capital-market-mechanisms",
    "description": "The macroeconomic structure of financial markets: Money Market (wholesale wholesale market for short-term funds up to 1 year, managing liquidity and working capital under RBI regulation) vs Capital Market (market for long-term equity and debt capital exceeding 1 year under SEBI regulation), Primary Market (raising fresh capital via Public Issue, Private Placement, Rights Issue) vs Secondary Market (trading existing securities providing continuous liquidity on BSE/NSE), and the regulatory boundary between RBI and SEBI.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Financial Markets, Fixed Income & Derivatives Architecture",
      "concept": "Financial Markets Duality: Money Market vs Capital Market Mechanics & Intermediation"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-07",
    "type": "CONCEPT",
    "title": "Money Market Instruments: Call, Notice & Term Money, Treasury Bills, CP, CD and TREPS",
    "slug": "money-market-instruments-call-notice-term-money-t-bills-cp-cd-and-treps",
    "url": "/topics/iibf-financial-markets-and-instruments/read#money-market-instruments-call-notice-term-money-t-bills-cp-cd-and-treps",
    "description": "The detailed regulatory and statutory specifications of core Indian money market instruments: Call Money (1-day overnight) vs Notice Money (2-14 days) vs Term Money (15-365 days) on NDS-CALL, Treasury Bills (91-day, 182-day, 364-day zero-coupon sovereign discount papers issued at discount and redeemed at par), Commercial Paper (CP: unsecured corporate promissory notes, min ₹5 Lakh, maturity 7 days to 1 year, min A2 rating), Certificates of Deposit (CD: tradable bank term deposits, min ₹1 Lakh, maturity 7 days to 1 year for banks / up to 3 years for AIFIs), and Triparty Repo (TREPS on CCIL).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Financial Markets, Fixed Income & Derivatives Architecture",
      "concept": "Money Market Instruments: Call, Notice & Term Money, Treasury Bills, CP, CD and TREPS"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-IIBF-08",
    "type": "CONCEPT",
    "title": "Capital Markets: Primary Issue Modes (IPO, FPO, OFS) & Depository Architecture (NSDL, CDSL)",
    "slug": "capital-markets-primary-issue-mechanisms-ipo-fpo-ofs-and-depository-systems-nsdl-cdsl",
    "url": "/topics/iibf-financial-markets-and-instruments/read#capital-markets-primary-issue-mechanisms-ipo-fpo-ofs-and-depository-systems-nsdl-cdsl",
    "description": "The structural framework of India's capital markets: public issue mechanisms (Book Building process, Floor Price, Price Band [max 20% spread], Cut-Off Price, ASBA via UPI), Offer for Sale (OFS), Qualified Institutional Placement (QIP), and the paperless two-tier depository architecture under the Depositories Act 1996 (National Securities Depository Limited [NSDL, sponsored by NSE/IDBI, 1996] and Central Depository Services Limited [CDSL, sponsored by BSE/banks, 1999]), Dematerialization (Demata: DRF/RRF), ISIN 12-digit code structure, and SEBI listing regulations.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Financial Markets, Fixed Income & Derivatives Architecture",
      "concept": "Capital Markets: Primary Issue Modes (IPO, FPO, OFS) & Depository Architecture (NSDL, CDSL)"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-09",
    "type": "CONCEPT",
    "title": "Fixed Income Mathematics: Bond Pricing, Yield to Maturity (YTM), Macaulay Duration & Convexity",
    "slug": "fixed-income-mathematics-bond-pricing-yield-to-maturity-macaulay-duration-and-convexity",
    "url": "/topics/iibf-financial-markets-and-instruments/read#fixed-income-mathematics-bond-pricing-yield-to-maturity-macaulay-duration-and-convexity",
    "description": "The mathematical and financial valuation of fixed-income debt securities: Bond Pricing formula as the present value of future coupon cash flows plus par redemption ($\\text{Price} = \\sum \\frac{C}{(1+y)^t} + \\frac{M}{(1+y)^n}$), the inverse relationship between Bond Price and Yield, Clean Price vs Dirty Price (Dirty = Clean + Accrued Interest), Yield to Maturity (YTM: internal rate of return assuming reinvestment at YTM), Macaulay Duration (weighted average time to cash flow recovery), Modified Duration ($\\text{MD} = \\frac{D_{\\text{Mac}}}{1 + y}$ measuring price sensitivity to $\\Delta \\text{yield}$), and Convexity as second-order curvature protection.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Financial Markets, Fixed Income & Derivatives Architecture",
      "concept": "Fixed Income Mathematics: Bond Pricing, Yield to Maturity (YTM), Macaulay Duration & Convexity"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-IIBF-10",
    "type": "CONCEPT",
    "title": "Financial Derivatives: Forwards vs Futures, Call & Put Option Payoffs, and Swaps (IRS)",
    "slug": "financial-derivatives-forwards-futures-options-payoffs-and-interest-rate-swaps",
    "url": "/topics/iibf-financial-markets-and-instruments/read#financial-derivatives-forwards-futures-options-payoffs-and-interest-rate-swaps",
    "description": "The financial engineering and risk management mechanics of derivative instruments: Forwards (bilateral OTC, customizable, credit risk) vs Futures (exchange-traded on NSE/BSE, standardized, daily MTM margins via Clearing Corporation, zero credit risk), Options contracts (Call Option: right to buy vs Put Option: right to sell, Strike Price $K$, In-the-Money [ITM], At-the-Money [ATM], Out-of-the-Money [OTM], Intrinsic Value + Time Value), Option Payoff profiles, and Interest Rate Swaps (IRS: Plain Vanilla Fixed-for-Floating swaps benchmarked to MIBOR / SOFR).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Financial Markets, Fixed Income & Derivatives Architecture",
      "concept": "Financial Derivatives: Forwards vs Futures, Call & Put Option Payoffs, and Swaps (IRS)"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-IIBF-11",
    "type": "CONCEPT",
    "title": "Collective Investment Vehicles: Mutual Funds, Net Asset Value (NAV), AIFs & REITs/InvITs",
    "slug": "collective-investment-vehicles-mutual-funds-nav-aif-categories-and-reits-invits",
    "url": "/topics/iibf-financial-markets-and-instruments/read#collective-investment-vehicles-mutual-funds-nav-aif-categories-and-reits-invits",
    "description": "The regulatory and operational framework of collective pooling vehicles under SEBI regulations: Mutual Funds (3-tier trust structure: Sponsor, Board of Trustees, Asset Management Company [AMC], Custodian), Net Asset Value formula ($\\text{NAV} = \\frac{\\text{Total Assets} - \\text{Total Liabilities}}{\\text{Total Units Outstanding}}$), Open-Ended vs Close-Ended vs Exchange Traded Funds (ETFs), Alternate Investment Funds (AIF Regulations 2012: Category I [Venture Capital, SME, Social Impact], Category II [PE, Real Estate, Debt], Category III [Hedge Funds, complex trading]), and Real Estate / Infrastructure Investment Trusts (REITs & InvITs).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Financial Markets, Fixed Income & Derivatives Architecture",
      "concept": "Collective Investment Vehicles: Mutual Funds, Net Asset Value (NAV), AIFs & REITs/InvITs"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-12",
    "type": "CONCEPT",
    "title": "Insurance & Pension Systems: 6 Fundamental Principles, IRDAI Bima Trinity & NPS",
    "slug": "insurance-and-pension-systems-principles-of-insurance-bima-trinity-and-national-pension-system",
    "url": "/topics/iibf-financial-markets-and-instruments/read#insurance-and-pension-systems-principles-of-insurance-bima-trinity-and-national-pension-system",
    "description": "The legal and regulatory framework of insurance and retirement pensions in India: the 6 classical principles of insurance law (Utmost Good Faith [Uberrimae Fidei & Section 45 of Insurance Act 1938], Insurable Interest, Indemnity, Subrogation, Contribution, and Proximate Cause [Causa Proxima]), IRDAI's \"Insurance for All by 2047\" Bima Trinity reforms (Bima Sugam digital marketplace, Bima Vistaar composite product, Bima Vahak women-led distribution), and the National Pension System (NPS: Tier 1 locked-in retirement account vs Tier 2 voluntary savings account, PFRDA regulation, CRA, and Annuity Service Providers).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Financial Markets, Fixed Income & Derivatives Architecture",
      "concept": "Insurance & Pension Systems: 6 Fundamental Principles, IRDAI Bima Trinity & NPS"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-13",
    "type": "CONCEPT",
    "title": "Factoring, Forfaiting & TReDS Architecture: Trade Receivables Financing Mechanisms",
    "slug": "factoring-forfaiting-and-treds-trade-receivables-financing-mechanisms",
    "url": "/topics/iibf-financial-markets-and-instruments/read#factoring-forfaiting-and-treds-trade-receivables-financing-mechanisms",
    "description": "The institutional financing of business trade receivables: Factoring under the Factoring Regulation Act 2011 (amended 2021: non-recourse vs recourse factoring, assignment of receivables, factoring vs bill discounting) vs Forfaiting (medium-to-long term 100% non-recourse export receivables financing guaranteed by an Aval / Bank Guarantee), and the RBI-regulated Trade Receivables Discounting System (TReDS: electronic platform connecting MSME sellers, corporate/government buyers, and multiple financiers for transparent competitive reverse auction discounting).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Financial Markets, Fixed Income & Derivatives Architecture",
      "concept": "Factoring, Forfaiting & TReDS Architecture: Trade Receivables Financing Mechanisms"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-14",
    "type": "CONCEPT",
    "title": "Forex Market Mechanics: Direct vs Indirect Quotes, Cross Rates, FEDAI Rules & Nostro/Vostro Accounts",
    "slug": "forex-market-mechanics-direct-vs-indirect-quotes-cross-rates-and-fedaic-rules",
    "url": "/topics/iibf-forex-markets-and-nri-banking/read#forex-market-mechanics-direct-vs-indirect-quotes-cross-rates-and-fedaic-rules",
    "description": "The technical operations of the foreign exchange market: Direct Quotation (units of domestic currency per 1 foreign currency unit: 1 USD = ₹83.50) vs Indirect Quotation, Bid-Ask Spread and the Rule \"Buy Low, Sell High\" from the banker's perspective, Cross Rate calculations, Settlement dates (Cash/Value Today, TOM / Value Tomorrow, Spot / Value Day After Tomorrow [T+2], Forward contracts), FEDAI (Foreign Exchange Dealers' Association of India) statutory rules, and Correspondent Banking accounts (Nostro: \"Our account with you\", Vostro: \"Your account with us\", Loro: \"Their account with them\").",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Foreign Exchange Markets & NRI Banking Framework",
      "concept": "Forex Market Mechanics: Direct vs Indirect Quotes, Cross Rates, FEDAI Rules & Nostro/Vostro Accounts"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-IIBF-15",
    "type": "CONCEPT",
    "title": "NRI Deposit Accounts Framework: NRE vs NRO vs FCNR(B) Comparative Architecture",
    "slug": "nri-deposit-accounts-framework-nre-nro-and-fcnr-b-comparative-matrix",
    "url": "/topics/iibf-forex-markets-and-nri-banking/read#nri-deposit-accounts-framework-nre-nro-and-fcnr-b-comparative-matrix",
    "description": "The statutory regime governing Non-Resident Indian (NRI) and Person of Indian Origin (PIO/OCI) bank accounts under Foreign Exchange Management (Deposit) Regulations: Non-Resident External (NRE: Rupee-denominated, fully repatriable, exempt from Indian income tax, foreign currency conversion risk borne by depositor), Non-Resident Ordinary (NRO: Rupee-denominated for legitimate domestic Indian incomes like rent/dividends, subject to Indian TDS/income tax, restricted repatriation up to USD 1 Million per financial year), and Foreign Currency Non-Resident (Bank) (FCNR[B]: foreign currency denominated term deposits for 1 to 5 years, zero currency risk to depositor, tax-free).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Foreign Exchange Markets & NRI Banking Framework",
      "concept": "NRI Deposit Accounts Framework: NRE vs NRO vs FCNR(B) Comparative Architecture"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-16",
    "type": "CONCEPT",
    "title": "Sustainable Finance: Climate Risk Framework, Green Deposits & BRSR Reporting",
    "slug": "sustainable-finance-climate-risk-framework-green-deposits-and-brsr-reporting",
    "url": "/topics/iibf-sustainable-finance-and-banking-technology/read#sustainable-finance-climate-risk-framework-green-deposits-and-brsr-reporting",
    "description": "The emerging regulatory framework for sustainable green banking in India: RBI's Framework for Acceptance of Green Deposits (April 2023: dedicated allocation of deposit proceeds to green activities like renewable energy, clean transport, and energy efficiency with third-party verification), Climate Risk taxonomy (Physical Risk [extreme weather/sea level rise] vs Transition Risk [carbon taxes, technological obsolescence]), Task Force on Climate-related Financial Disclosures (TCFD) pillars (Governance, Strategy, Risk Management, Metrics/Targets), and SEBI's Business Responsibility and Sustainability Report (BRSR Core) mandatory disclosures.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Sustainable Finance, Climate Risk & Banking Technology",
      "concept": "Sustainable Finance: Climate Risk Framework, Green Deposits & BRSR Reporting"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-17",
    "type": "CONCEPT",
    "title": "Banker-Customer Relationship: Statutory Nature, Clayton's Rule, General Lien & Right of Set-Off",
    "slug": "banker-customer-relationship-statutory-nature-rights-and-legal-duties",
    "url": "/topics/iibf-banker-customer-relationship-and-customer-service/read#banker-customer-relationship-statutory-nature-rights-and-legal-duties",
    "description": "The multifaceted legal relationship between a banker and customer under the Indian Contract Act 1872, Negotiable Instruments Act 1881, and Banking Regulation Act 1949: General Relationship as Debtor-Creditor for bank deposits (Banker is Debtor; Customer is Creditor) vs Creditor-Debtor for loans, Special Relationships (Bailor-Bailee in Safe Deposit Lockers/Safe Custody, Trustee-Beneficiary in collection/escrow, Agent-Principal in standing instructions), Clayton's Case Rule of appropriation (Section 59-61 Indian Contract Act), Banker's General Lien (Section 171: statutory right to retain goods/securities in the ordinary course of banking without special agreement), and Right of Set-Off (combining debit and credit balances in same right and capacity after reasonable notice).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Banker-Customer Relationship & Customer Service Operations",
      "concept": "Banker-Customer Relationship: Statutory Nature, Clayton's Rule, General Lien & Right of Set-Off"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-18",
    "type": "CONCEPT",
    "title": "Anti-Money Laundering (AML) & KYC Master Directions: PMLA 2002, CDD & Reporting Regimes",
    "slug": "anti-money-laundering-pmla-2002-and-rbi-kyc-master-directions",
    "url": "/topics/iibf-banker-customer-relationship-and-customer-service/read#anti-money-laundering-pmla-2002-and-rbi-kyc-master-directions",
    "description": "The statutory compliance architecture to combat money laundering and terrorist financing under the Prevention of Money Laundering Act 2002 (PMLA) and RBI Master Direction on KYC: the 3 stages of money laundering (Placement, Layering, Integration), Customer Due Diligence (CDD: identifying customer, verifying identity using Officially Valid Documents [OVDs], and determining Beneficial Ownership [BO: 10% threshold for companies/trusts, 15% for partnerships]), Risk Categorization (Low, Medium, High Risk with periodic KYC update every 10, 8, and 2 years respectively), Central KYC Registry (CKYCR 14-digit number), and mandatory statutory reporting to FIU-IND (Cash Transaction Report [CTR: transactions >₹10 Lakh] and Suspicious Transaction Report [STR within 7 days]).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Banker-Customer Relationship & Customer Service Operations",
      "concept": "Anti-Money Laundering (AML) & KYC Master Directions: PMLA 2002, CDD & Reporting Regimes"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-19",
    "type": "CONCEPT",
    "title": "Special Customer Accounts: Minors, Illiterates, Visually Impaired, Lunatics & Insolvents",
    "slug": "operations-in-accounts-of-special-customers-minors-illiterates-blind-and-insolvents",
    "url": "/topics/iibf-banker-customer-relationship-and-customer-service/read#operations-in-accounts-of-special-customers-minors-illiterates-blind-and-insolvents",
    "description": "The legal and operational rules governing bank accounts of special categories of individuals under the Indian Majority Act 1875, Guardians and Wards Act 1890, and RBI guidelines: Minor accounts (natural guardians under Hindu Minority and Guardianship Act 1956 [Father, then Mother], self-operated minor accounts above age 10 for savings accounts without overdrafts, contract with minor is void ab initio under Section 11 Indian Contract Act [Mohori Bibee case]), Illiterate persons (Left Thumb Impression [LTI] witnessed by independent party, joint accounts restricted, no cheque book without special safeguards), Visually Impaired customers (equal banking rights, talking ATMs, biometric authentication), and Lunatics/Insolvents (automatic suspension of mandate upon adjudication).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Banker-Customer Relationship & Customer Service Operations",
      "concept": "Special Customer Accounts: Minors, Illiterates, Visually Impaired, Lunatics & Insolvents"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-20",
    "type": "CONCEPT",
    "title": "Entity Accounts Operations: Proprietorships, Partnerships, Companies, Trusts & Clubs",
    "slug": "operations-in-accounts-of-entities-proprietorships-partnerships-companies-and-trusts",
    "url": "/topics/iibf-banker-customer-relationship-and-customer-service/read#operations-in-accounts-of-entities-proprietorships-partnerships-companies-and-trusts",
    "description": "The legal and operational mandate architecture for institutional and corporate bank accounts: Sole Proprietorships (no separate legal entity; operated under proprietary mandate), Partnership Accounts under Indian Partnership Act 1932 (implied authority of partners under Section 19, joint and several liability, stop payment upon death/insolvency/retirement of a partner, Rule in Clayton's Case), Limited Liability Partnerships (LLP Act 2008: body corporate with separate legal entity), Joint Stock Companies under Companies Act 2013 (Memorandum of Association [MOA: object clause/Ultra Vires doctrine], Articles of Association [AOA: internal management/Doctrine of Indoor Management in Royal British Bank v Turquand], Board Resolution, Certificate of Incorporation), and Public/Private Trusts under Indian Trusts Act 1882 (Trust Deed, no delegation of trustee powers unless authorized).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Banker-Customer Relationship & Customer Service Operations",
      "concept": "Entity Accounts Operations: Proprietorships, Partnerships, Companies, Trusts & Clubs"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-IIBF-21",
    "type": "CONCEPT",
    "title": "Legal Orders on Bank Accounts: Garnishee Orders (Order XXI CPC) vs IT Attachment Orders (Sec 226)",
    "slug": "legal-orders-affecting-bank-accounts-garnishee-order-vs-income-tax-attachment-order",
    "url": "/topics/iibf-banker-customer-relationship-and-customer-service/read#legal-orders-affecting-bank-accounts-garnishee-order-vs-income-tax-attachment-order",
    "description": "The statutory procedure and legal mechanics of judicial and statutory orders attaching customer bank accounts: Garnishee Order under Order XXI Rule 46 of the Code of Civil Procedure 1908 (Judgment Creditor, Judgment Debtor, and Garnishee Bank: Order Nisi [provisional freeze] vs Order Absolute [direction to pay court]), scope of attachment (attaches debts \"due or accruing due\" at the exact moment of service; DOES NOT attach future credits or uncleared cheques), and Income Tax Attachment Order under Section 226(3) of the Income Tax Act 1961 (drastically wider scope: attaches existing funds AND all subsequent/future credits received into the account until the tax demand is fully satisfied).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Banker-Customer Relationship & Customer Service Operations",
      "concept": "Legal Orders on Bank Accounts: Garnishee Orders (Order XXI CPC) vs IT Attachment Orders (Sec 226)"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-IIBF-22",
    "type": "CONCEPT",
    "title": "Safe Deposit Lockers & Nomination: Revised RBI Directions 2021/2023 & Claim Settlement",
    "slug": "safe-deposit-lockers-safe-custody-and-statutory-nomination-framework",
    "url": "/topics/iibf-banker-customer-relationship-and-customer-service/read#safe-deposit-lockers-safe-custody-and-statutory-nomination-framework",
    "description": "The regulatory and legal regime governing Safe Deposit Lockers, Safe Custody, and Statutory Nomination under Sections 45ZA to 45ZF of the Banking Regulation Act 1949: Revised RBI Locker Directions (Supreme Court Amitabha Dasgupta v UBI ruling: model stamped locker agreement, term deposit as locker rent security [max 3 years' rent + break-open charges], bank liability capped at 100 times annual locker rent for fire/theft/building collapse caused by bank negligence), Breaking open lockers (procedure for overdue rent / inactive lockers after 3 years), and Statutory Nomination rules (nominee receives valid discharge for bank; nominee acts as trustee for legal heirs; settlement timeline strictly within 15 days of claim receipt).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Banker-Customer Relationship & Customer Service Operations",
      "concept": "Safe Deposit Lockers & Nomination: Revised RBI Directions 2021/2023 & Claim Settlement"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-23",
    "type": "CONCEPT",
    "title": "Cash Operations & Currency Management: Clean Note Policy & Counterfeit (FICN) Detection Rules",
    "slug": "cash-operations-management-clean-note-policy-and-ficn-counterfeit-detection",
    "url": "/topics/iibf-banker-customer-relationship-and-customer-service/read#cash-operations-management-clean-note-policy-and-ficn-counterfeit-detection",
    "description": "The statutory guidelines governing cash operations and sovereign currency under the RBI Act 1934 and Reserve Bank of India (Note Refund) Rules 2009 (amended 2018): Clean Note Policy (ban on writing/scribbling on notes, stapling notes, and sorting into ATM-fit/soiled), Note classification (Soiled Notes [dirty/limp], Mutilated Notes [portion missing or composed of more than two pieces], Imperfect Notes [obliterated/indecipherable]), and Forged / Counterfeit Currency (Fake Indian Currency Notes - FICN) impounding protocol (mandatory impounding with \"COUNTERFEIT NOTE IMPOUNDED\" stamp; no return to customer; issuing receipt; filing FIR with police if 5 or more fake notes detected in a single transaction).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Banker-Customer Relationship & Customer Service Operations",
      "concept": "Cash Operations & Currency Management: Clean Note Policy & Counterfeit (FICN) Detection Rules"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-24",
    "type": "CONCEPT",
    "title": "Principles of Lending & Working Capital Assessment: Nayak Turnover, Tandon MPBF & Cash Budget",
    "slug": "principles-of-bank-lending-and-working-capital-assessment-turnover-mpbf-and-cash-budget",
    "url": "/topics/iibf-principles-of-lending-and-credit-assessment/read#principles-of-bank-lending-and-working-capital-assessment-turnover-mpbf-and-cash-budget",
    "description": "The foundational credit underwriting architecture of commercial banks: The 5 Principles of Sound Lending (Safety, Liquidity, Profitability, Purpose, Spread of Risk), the 5 Cs of Credit (Character, Capacity, Capital, Collateral, Conditions), and the 3 classic Working Capital assessment methodologies: Turnover Method (P.R. Nayak Committee: working capital requirements assessed at 25% of projected annual turnover, with bank financing min 20% and borrower margin min 5% for limits up to ₹5 Crore), Maximum Permissible Bank Finance (MPBF - Prakash Tandon & K.B. Chore Committees: Method I [Bank funds 75% of Working Capital Gap] and Method II [Bank funds 75% of Current Assets less Current Liabilities, mandating min 1.33 Current Ratio]), and the Cash Budget System (for seasonal industries like sugar, construction, tea).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Principles of Lending, Credit Assessment & Working Capital Methods",
      "concept": "Principles of Lending & Working Capital Assessment: Nayak Turnover, Tandon MPBF & Cash Budget"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-IIBF-25",
    "type": "CONCEPT",
    "title": "Modes of Creating Charges on Securities: Pledge vs Hypothecation vs Mortgage vs Assignment vs Lien",
    "slug": "modes-of-creating-charges-on-securities-pledge-hypothecation-mortgage-lien-and-assignment",
    "url": "/topics/iibf-principles-of-lending-and-credit-assessment/read#modes-of-creating-charges-on-securities-pledge-hypothecation-mortgage-lien-and-assignment",
    "description": "The statutory mechanisms for creating legal security charges over borrower assets to secure bank advances: Pledge (Section 172 Indian Contract Act: bailment of movable goods with actual or constructive delivery of possession to bank; e.g. Gold loans, warehouse receipts), Hypothecation (Section 2(1)(n) SARFAESI Act 2002: charge on movable property without delivery of possession; borrower retains possession; e.g. stock, plant, vehicle), Mortgage (Section 58 Transfer of Property Act 1882: transfer of interest in specific immovable property; 6 types including Simple Mortgage and Equitable / Title Deed Mortgage), Assignment (Section 130 Transfer of Property Act: transfer of actionable claims like LIC policies, supply bills, book debts), and Banker's Lien.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Principles of Lending, Credit Assessment & Working Capital Methods",
      "concept": "Modes of Creating Charges on Securities: Pledge vs Hypothecation vs Mortgage vs Assignment vs Lien"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-IIBF-26",
    "type": "CONCEPT",
    "title": "Letters of Credit (LC): Operational Mechanism, Parties, Types & UCPDC 600 Rules",
    "slug": "letters-of-credit-operational-mechanism-parties-types-and-ucpdc-600-rules",
    "url": "/topics/iibf-non-fund-facilities-and-trade-finance/read#letters-of-credit-operational-mechanism-parties-types-and-ucpdc-600-rules",
    "description": "The international and domestic trade finance architecture of Documentary Credits (Letters of Credit - LC) governed globally by the ICC Uniform Customs and Practice for Documentary Credits (UCPDC 600): The 6 key parties (Applicant [Buyer], Issuing Bank, Beneficiary [Seller], Advising Bank, Confirming Bank, Negotiating / Nominated Bank), Fundamental Doctrines (Autonomy of Credit [LC is independent of underlying sales contract] and Strict Compliance of Documents), Document Examination Standard (Art 14: max 5 banking days), and Types of LCs (Irrevocable, Confirmed, Sight vs Usance, Revolving, Transferable, Back-to-Back, Red Clause [pre-shipment advance], Green Clause [pre-shipment advance + storage/warehousing], Standby LC [ISPB / ISP98 as guarantee substitute]).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Non-Fund Based Facilities & Trade Finance Operations",
      "concept": "Letters of Credit (LC): Operational Mechanism, Parties, Types & UCPDC 600 Rules"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-IIBF-27",
    "type": "CONCEPT",
    "title": "Bank Guarantees: Financial vs Performance, Statutory Invocations & Section 28 Limitation",
    "slug": "bank-guarantees-financial-performance-statutory-invocations-and-co-acceptance",
    "url": "/topics/iibf-non-fund-facilities-and-trade-finance/read#bank-guarantees-financial-performance-statutory-invocations-and-co-acceptance",
    "description": "The legal framework of Bank Guarantees under the Indian Contract Act 1872 and judicial doctrines: Tripartite Contract of Guarantee (Section 126: Principal Debtor, Creditor, and Surety/Guarantor Bank), Financial Guarantees (100% credit risk for loan repayment/mobilization advance) vs Performance Guarantees (breach of contract/bid bonds/tender security), Unconditional vs Conditional guarantees, Invocation grounds and court injunctions (Supreme Court rules: injunction granted ONLY in cases of established egregiousness fraud or irretrievable injustice), and the Claim Limitation Period under Section 28 of the Indian Contract Act (minimum 1-year claim period post-expiry).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Non-Fund Based Facilities & Trade Finance Operations",
      "concept": "Bank Guarantees: Financial vs Performance, Statutory Invocations & Section 28 Limitation"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-IIBF-28",
    "type": "CONCEPT",
    "title": "Export Finance & Credit Insurance: Packing Credit (Rupee & PCFC), Post-Shipment & ECGC",
    "slug": "export-finance-mechanisms-pre-shipment-post-shipment-pcfc-and-ecgc-cover",
    "url": "/topics/iibf-non-fund-facilities-and-trade-finance/read#export-finance-mechanisms-pre-shipment-post-shipment-pcfc-and-ecgc-cover",
    "description": "The specialized export credit architecture under RBI Master Directions and Foreign Trade Policy: Pre-Shipment Export Credit / Packing Credit (concessional working capital to purchase raw materials, manufacture, and pack export goods against confirmed order/LC, maximum tenor 270/360 days), Pre-Shipment Credit in Foreign Currency (PCFC benchmarked to SOFR / EURIBOR at international rates), Post-Shipment Export Credit (financing receivables after shipment against export bills, FOB/CIF bills discounted/purchased, Gold Card Scheme for exporters), and Export Credit Guarantee Corporation of India (ECGC: statutory credit insurance protecting banks against export credit default [Whole Turnover Post-Shipment Guarantee - WTPSG, 90% cover] and commercial/political cross-border buyer default).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Non-Fund Based Facilities & Trade Finance Operations",
      "concept": "Export Finance & Credit Insurance: Packing Credit (Rupee & PCFC), Post-Shipment & ECGC"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-29",
    "type": "CONCEPT",
    "title": "Core Banking Systems (CBS) & Business Continuity: Data Centers, RTO & RPO Metrics",
    "slug": "core-banking-systems-architecture-data-center-redundancy-and-disaster-recovery-rto-rpo",
    "url": "/topics/iibf-digital-banking-and-it-security/read#core-banking-systems-architecture-data-center-redundancy-and-disaster-recovery-rto-rpo",
    "description": "The enterprise technological infrastructure of modern banking: Core Banking Solutions (CBS: centralized database where branches act as access points, customer of the bank rather than customer of the branch; e.g. Finacle, BaNCS, Flexcube), Data Center (DC) and Disaster Recovery (DR) site architecture (geographic separation in different seismic zones), Business Continuity Planning (BCP), and the two foundational disaster metrics: Recovery Time Objective (RTO: maximum acceptable downtime to restore banking services) and Recovery Point Objective (RPO: maximum acceptable data loss measured in time, near-zero RPO using synchronous data replication).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Digital Banking, Payment Rails & Information Security",
      "concept": "Core Banking Systems (CBS) & Business Continuity: Data Centers, RTO & RPO Metrics"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-30",
    "type": "CONCEPT",
    "title": "Electronic Payment Rails: RTGS, NEFT, IMPS, UPI, NACH, AePS & Digital Rupee (e₹)",
    "slug": "electronic-payment-rails-rtgs-neft-upi-imps-nach-and-central-bank-digital-currency-cbdc",
    "url": "/topics/iibf-digital-banking-and-it-security/read#electronic-payment-rails-rtgs-neft-upi-imps-nach-and-central-bank-digital-currency-cbdc",
    "description": "The digital payment clearing and settlement infrastructure of India operated by the Reserve Bank of India and the National Payments Corporation of India (NPCI under Payment and Settlement Systems Act 2007): RTGS (Real Time Gross Settlement: high-value wholesale, minimum ₹2 Lakh, continuous individual order settlement, 24x7x365) vs NEFT (National Electronic Funds Transfer: retail, half-hourly batched settlement across 48 batches daily, no minimum limit, zero customer charges online, 24x7), NPCI payment rails (IMPS: instant 24x7 up to ₹5 Lakh, UPI: Virtual Payment Address [VPA] / AutoPay, NACH: bulk ACH debit/credit mandate, AePS: Aadhaar biometric micro-ATMs), and the Central Bank Digital Currency (CBDC / Digital Rupee - e₹: sovereign tokenized legal tender issued directly by RBI on distributed ledger).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Digital Banking, Payment Rails & Information Security",
      "concept": "Electronic Payment Rails: RTGS, NEFT, IMPS, UPI, NACH, AePS & Digital Rupee (e₹)"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-31",
    "type": "CONCEPT",
    "title": "Cyber Security in Banks: SOC, CSIRT, ISO 27001 & IT Act 2000 Statutory Framework",
    "slug": "cyber-security-framework-in-banks-soc-csirt-iso-27001-and-it-act-2000-statutory-provisions",
    "url": "/topics/iibf-digital-banking-and-it-security/read#cyber-security-framework-in-banks-soc-csirt-iso-27001-and-it-act-2000-statutory-provisions",
    "description": "The cybersecurity governance and statutory compliance architecture for banking institutions: RBI Cyber Security Framework (June 2016 & Master Directions 2023: Security Operations Center [SOC 24x7], Cyber Security Incident Response Team [CSIRT], Chief Information Security Officer [CISO] reporting directly to Risk Committee), ISO/IEC 27001 Information Security Management System (ISMS: Confidentiality, Integrity, Availability - CIA Triad), mandatory reporting of cyber incidents to CERT-In and RBI within 6 hours, Customer Liability Framework for Unauthorized Electronic Transactions (Zero Liability vs Limited Liability based on 3-day reporting window), and penal provisions under the Information Technology Act 2000 (Sections 43, 66C [Identity Theft], 66D [Cheating by Impersonation], 72 [Breach of Confidentiality]).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Digital Banking, Payment Rails & Information Security",
      "concept": "Cyber Security in Banks: SOC, CSIRT, ISO 27001 & IT Act 2000 Statutory Framework"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-IIBF-32",
    "type": "CONCEPT",
    "title": "Banking Ethics & Corporate Governance: Whistleblower Mechanisms & Codes of Conduct",
    "slug": "banking-ethics-whistleblower-framework-and-corporate-governance-standards",
    "url": "/topics/iibf-digital-banking-and-it-security/read#banking-ethics-whistleblower-framework-and-corporate-governance-standards",
    "description": "The ethical, behavioral, and fiduciary governance architecture of banking institutions: Principles of Banking Ethics (Integrity, Transparency, Objectivity, Confidentiality, Conflict of Interest mitigation), Whistleblower Policy (Section 177 Companies Act 2013: Vigil Mechanism for directors/employees to report unethical behavior with safeguards against victimization), RBI Corporate Governance Guidelines for Commercial Banks (Uday Kotak Committee: Separation of Chairman and MD/CEO, independent directors, Audit Committee of Board [ACB], Committee on Customer Service), and Fair Practices Code (FPC: transparent loan sanction, non-coercive recovery, and BCRBI customer charters).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Digital Banking, Payment Rails & Information Security",
      "concept": "Banking Ethics & Corporate Governance: Whistleblower Mechanisms & Codes of Conduct"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-33",
    "type": "CONCEPT",
    "title": "Accounting Foundations: GAAP Principles, Accounting Conventions & Ind AS Framework",
    "slug": "accounting-foundations-gaap-conventions-and-ind-as-ifrs-convergence",
    "url": "/topics/iibf-accounting-principles-and-financial-statements/read#accounting-foundations-gaap-conventions-and-ind-as-ifrs-convergence",
    "description": "The bedrock concepts and conventions of financial accounting: The 4 Core Accounting Assumptions (Business Entity, Going Concern, Money Measurement, Accounting Period), Accounting Principles (Historical Cost, Dual Aspect [$Assets = Liabilities + Capital$], Revenue Realization, Matching Principle), Accounting Conventions (Conservatism / Prudence [anticipate no profits, provide for all possible losses], Full Disclosure, Consistency, Materiality), and the Indian Accounting Standards (Ind AS) aligned with International Financial Reporting Standards (IFRS) under the Companies (Indian Accounting Standards) Rules 2015.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Accounting Foundations & Financial Statements Architecture",
      "concept": "Accounting Foundations: GAAP Principles, Accounting Conventions & Ind AS Framework"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-34",
    "type": "CONCEPT",
    "title": "Double-Entry Bookkeeping: The 3 Golden Rules, Journalizing & Ledger Balancing",
    "slug": "double-entry-bookkeeping-golden-rules-journal-entries-and-ledger-balancing",
    "url": "/topics/iibf-accounting-principles-and-financial-statements/read#double-entry-bookkeeping-golden-rules-journal-entries-and-ledger-balancing",
    "description": "The mechanics of double-entry financial recordkeeping: Classification of accounts into Real, Personal, and Nominal accounts, The 3 Traditional Golden Rules of Accounting (Personal: \"Debit the Receiver, Credit the Giver\"; Real: \"Debit what comes in, Credit what goes out\"; Nominal: \"Debit all Expenses & Losses, Credit all Incomes & Gains\"), Modern US Classification (Assets/Expenses [Debit increases, Credit decreases] vs Liabilities/Capital/Revenues [Credit increases, Debit decreases]), Journalizing transactions, and Ledger posting and balancing (Debit balance vs Credit balance).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Accounting Foundations & Financial Statements Architecture",
      "concept": "Double-Entry Bookkeeping: The 3 Golden Rules, Journalizing & Ledger Balancing"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-35",
    "type": "CONCEPT",
    "title": "Trial Balance & Rectification of Errors: Classification of Errors & Suspense Account",
    "slug": "trial-balance-preparation-classification-of-accounting-errors-and-rectification-entries",
    "url": "/topics/iibf-accounting-principles-and-financial-statements/read#trial-balance-preparation-classification-of-accounting-errors-and-rectification-entries",
    "description": "The verification of ledger arithmetic and error rectification in accounting: Trial Balance (statement of debit and credit ledger balances proving arithmetical accuracy), The 4 Classical Types of Accounting Errors (Errors of Omission [Complete vs Partial], Errors of Commission [wrong amount/wrong side/casting error], Errors of Principle [violating capital vs revenue expenditure], Compensating Errors [two errors neutralizing each other]), Errors affecting vs not affecting Trial Balance agreement, and the Suspense Account (temporary ledger account created to artificially balance the trial balance pending error investigation).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Accounting Foundations & Financial Statements Architecture",
      "concept": "Trial Balance & Rectification of Errors: Classification of Errors & Suspense Account"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-36",
    "type": "CONCEPT",
    "title": "Bank Reconciliation Statement (BRS): Timing Differences, Direct Entries & Reconciliation Rules",
    "slug": "bank-reconciliation-statement-brs-mechanics-timing-differences-and-reconciliation-rules",
    "url": "/topics/iibf-accounting-principles-and-financial-statements/read#bank-reconciliation-statement-brs-mechanics-timing-differences-and-reconciliation-rules",
    "description": "The reconciliation mechanics between the Cash Book (Bank Column maintained by the customer/firm) and the Pass Book / Bank Statement (maintained by the bank): Causes of disagreement (Timing Differences [Cheques issued but not presented for payment, Cheques deposited but not cleared/collected], Direct Bank Transactions [Interest credited by bank, Bank charges/commission debited, Direct collections from debtors, Direct standing order payments], and Errors in Cash Book or Pass Book), Favorable Balances (Debit balance in Cash Book = Credit balance in Pass Book) vs Overdraft / Unfavorable Balances (Credit balance in Cash Book = Debit balance in Pass Book), and Adjusted Cash Book method.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Accounting Foundations & Financial Statements Architecture",
      "concept": "Bank Reconciliation Statement (BRS): Timing Differences, Direct Entries & Reconciliation Rules"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-37",
    "type": "CONCEPT",
    "title": "Depreciation Accounting: Straight Line (SLM), Written Down Value (WDV) & Sinking Fund Methods",
    "slug": "depreciation-accounting-methods-straight-line-slm-written-down-value-wdv-and-sinking-fund",
    "url": "/topics/iibf-financial-mathematics-and-capital-budgeting/read#depreciation-accounting-methods-straight-line-slm-written-down-value-wdv-and-sinking-fund",
    "description": "The statutory and mathematical allocation of depreciable asset cost over its estimated useful economic life under Ind AS 16 / AS 6 and Companies Act 2013 (Schedule II): Causes of depreciation (Wear and Tear, Efflux of Time, Obsolescence), Straight Line Method (SLM: constant fixed annual depreciation charge, asset book value reaches zero or scrap value), Written Down Value / Diminishing Balance Method (WDV: constant percentage applied to diminishing book value, higher depreciation in initial years, asset book value never reaches zero mathematically; recognized under Income Tax Act 1961 Section 32), and Sinking Fund / Annuity Methods.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Financial Mathematics, Depreciation & Capital Budgeting Architecture",
      "concept": "Depreciation Accounting: Straight Line (SLM), Written Down Value (WDV) & Sinking Fund Methods"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-38",
    "type": "CONCEPT",
    "title": "Time Value of Money (TVM): Compounding, Discounting, Annuities & Loan Amortization",
    "slug": "time-value-of-money-compounding-discounting-annuities-sinking-funds-and-amortization",
    "url": "/topics/iibf-financial-mathematics-and-capital-budgeting/read#time-value-of-money-compounding-discounting-annuities-sinking-funds-and-amortization",
    "description": "The core quantitative engine of financial mathematics and banking: Future Value ($FV = PV(1+r)^n$), Present Value ($PV = \\frac{FV}{(1+r)^n}$), Rule of 72 ($t \\approx \\frac{72}{r}$) and Rule of 114 (tripling money), Effective Annual Rate (EAR: $EAR = (1 + \\frac{r}{m})^m - 1$), Ordinary Annuity (cash flows at end of period) vs Annuity Due (cash flows at beginning of period, $PV_{\\text{Due}} = PV_{\\text{Ord}} \\times (1+r)$), Sinking Funds, Perpetuities ($PV = \\frac{C}{r}$ and Growing Perpetuity $PV = \\frac{C}{r - g}$), and Equated Monthly Installments (EMI loan amortization formula).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Financial Mathematics, Depreciation & Capital Budgeting Architecture",
      "concept": "Time Value of Money (TVM): Compounding, Discounting, Annuities & Loan Amortization"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-IIBF-39",
    "type": "CONCEPT",
    "title": "Capital Budgeting Techniques: Payback Period, Net Present Value (NPV), IRR & PI Rules",
    "slug": "capital-budgeting-techniques-payback-npv-irr-profitability-index-and-discounted-payback",
    "url": "/topics/iibf-financial-mathematics-and-capital-budgeting/read#capital-budgeting-techniques-payback-npv-irr-profitability-index-and-discounted-payback",
    "description": "The appraisal and decision-making framework for long-term capital investments: Non-Discounted Techniques (Payback Period [PBP], Accounting Rate of Return [ARR]) vs Discounted Cash Flow (DCF) Techniques (Discounted Payback Period, Net Present Value [$\\text{NPV} = \\sum \\frac{CF_t}{(1+k)^t} - C_0$], Internal Rate of Return [IRR: discount rate where $\\text{NPV} = 0$], and Profitability Index [$\\text{PI} = \\frac{\\text{PV of Future Cash Inflows}}{\\text{Initial Outflow}}$]), Decision rules (Accept project if $\\text{NPV} > 0$, $\\text{IRR} > k$, $\\text{PI} > 1.0$), and resolving NPV vs IRR conflicts in mutually exclusive projects (Superiority of NPV due to realistic reinvestment rate assumption at cost of capital $k$).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Financial Mathematics, Depreciation & Capital Budgeting Architecture",
      "concept": "Capital Budgeting Techniques: Payback Period, Net Present Value (NPV), IRR & PI Rules"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-IIBF-40",
    "type": "CONCEPT",
    "title": "Financial Ratio Analysis: Liquidity, Solvency, Turnover & Debt Service Coverage (DSCR)",
    "slug": "financial-ratio-analysis-liquidity-solvency-profitability-turnover-and-dscr-metrics",
    "url": "/topics/iibf-financial-analysis-and-taxation/read#financial-ratio-analysis-liquidity-solvency-profitability-turnover-and-dscr-metrics",
    "description": "The quantitative financial statement analysis architecture used in bank credit underwriting: Liquidity Ratios (Current Ratio [$\\text{CR} = \\frac{\\text{Current Assets}}{\\text{Current Liabilities}}$, benchmark 1.33:1 under Tandon Method II], Quick / Acid-Test Ratio [$\\text{QR} = \\frac{\\text{Quick Assets (CA - Stock - Prepaid)}}{\\text{Current Liabilities}}$, benchmark 1:1]), Solvency / Leverage Ratios (Debt-Equity Ratio [$\\text{DER} = \\frac{\\text{Total Debt}}{\\text{Tangible Net Worth}}$, benchmark 2:1], Interest Coverage Ratio [$\\text{ICR} = \\frac{\\text{EBIT}}{\\text{Interest}}$]), Debt Service Coverage Ratio (DSCR: the supreme term-lending metric, $\\text{DSCR} = \\frac{\\text{PAT} + \\text{Depreciation} + \\text{Interest on Term Loan}}{\\text{Term Loan Installment} + \\text{Interest on Term Loan}}$, benchmark 1.5 to 2.0), and Turnover / Efficiency Ratios (Inventory Turnover, Debtors Collection Period).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Financial Ratio Analysis & Banking Taxation Architecture",
      "concept": "Financial Ratio Analysis: Liquidity, Solvency, Turnover & Debt Service Coverage (DSCR)"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-IIBF-41",
    "type": "CONCEPT",
    "title": "Marginal Costing & Break-Even Analysis: Contribution, PV Ratio, BEP & Margin of Safety",
    "slug": "cost-accounting-and-marginal-costing-break-even-point-bep-margin-of-safety-and-pv-ratio",
    "url": "/topics/iibf-financial-analysis-and-taxation/read#cost-accounting-and-marginal-costing-break-even-point-bep-margin-of-safety-and-pv-ratio",
    "description": "The cost accounting and managerial decision-making framework: Fixed Costs (remain constant regardless of production volume) vs Variable Costs (vary directly with production output), Contribution ($C = \\text{Sales} - \\text{Variable Cost} = \\text{Fixed Cost} + \\text{Profit}$), Profit-Volume Ratio (PV Ratio: $\\text{PVR} = \\frac{\\text{Contribution}}{\\text{Sales}} \\times 100$), Break-Even Point in Units ($\\text{BEP}_{\\text{units}} = \\frac{\\text{Fixed Cost}}{\\text{Contribution per Unit}}$), Break-Even Point in Value ($\\text{BEP}_{\\text{Rs}} = \\frac{\\text{Fixed Cost}}{\\text{PV Ratio}}$), Margin of Safety (MOS: $\\text{MOS} = \\text{Actual Sales} - \\text{Break-Even Sales} = \\frac{\\text{Profit}}{\\text{PV Ratio}}$), and Cost-Volume-Profit (CVP) analysis.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Financial Ratio Analysis & Banking Taxation Architecture",
      "concept": "Marginal Costing & Break-Even Analysis: Contribution, PV Ratio, BEP & Margin of Safety"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-IIBF-42",
    "type": "CONCEPT",
    "title": "Banking Taxation Architecture: TDS Provisions (Sec 194A, 194N) & GST on Banking Services",
    "slug": "banking-taxation-architecture-tds-under-income-tax-act-and-gst-applicability-on-banking-services",
    "url": "/topics/iibf-financial-analysis-and-taxation/read#banking-taxation-architecture-tds-under-income-tax-act-and-gst-applicability-on-banking-services",
    "description": "The statutory tax withholding and indirect taxation regime applicable to banking operations: Tax Deducted at Source (TDS under Income Tax Act 1961: Section 194A for interest on bank fixed deposits [threshold ₹40,000 for standard individuals, ₹50,000 for Senior Citizens; Form 15G / 15H self-declarations; 10% standard TDS or 20% under Section 206AA if PAN is not provided], Section 194N for cash withdrawals [2% TDS on cash withdrawals >₹1 Crore per year, or >₹20 Lakh for non-filers]), and Goods and Services Tax (GST: 18% standard rate on banking fee-based services [processing fees, locker rent, ATM fees, card charges]; interest on loans/deposits is exempt from GST).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Financial Ratio Analysis & Banking Taxation Architecture",
      "concept": "Banking Taxation Architecture: TDS Provisions (Sec 194A, 194N) & GST on Banking Services"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-43",
    "type": "CONCEPT",
    "title": "Retail Banking Architecture: Customer Segmentation Models & Cross-Selling Metrics",
    "slug": "retail-banking-architecture-customer-segmentation-business-models-and-cross-selling",
    "url": "/topics/iibf-retail-banking-products-and-wealth-management/read#retail-banking-architecture-customer-segmentation-business-models-and-cross-selling",
    "description": "The operational and structural framework of Retail Banking under IIBF RBWM: Characteristics (B2C mass retail, multiple products, low ticket size, high customer volume, diversified risk spread), Customer Segmentation Models (Mass Market [<₹10 Lakh income], Mass Affluent [₹10-50 Lakh], High Net Worth Individuals [HNI: ₹50 Lakh - ₹5 Crore], Ultra-HNI [>₹5 Crore investable surplus]), Organizational Business Models (Horizontally Organized, Vertically Organized, Regionally Organized, Matrix Structure), and Cross-Selling / Upselling (Cross-sell ratio = Products per customer; target > 3.0).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Retail Banking Products & Wealth Management Architecture",
      "concept": "Retail Banking Architecture: Customer Segmentation Models & Cross-Selling Metrics"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-44",
    "type": "CONCEPT",
    "title": "Retail Lending Products: Home Loans (LTV & Risk Weights), Auto, Education & Credit Cards",
    "slug": "retail-lending-products-home-loans-ltv-emi-credit-cards-and-education-loans",
    "url": "/topics/iibf-retail-banking-products-and-wealth-management/read#retail-lending-products-home-loans-ltv-emi-credit-cards-and-education-loans",
    "description": "The underwriting parameters, regulatory ceilings, and statutory norms for major retail asset products: Housing Loans under RBI Prudential Norms (Loan-to-Value [LTV] ceilings: up to ₹30 Lakh loan = max 90% LTV; >₹30 Lakh to ₹75 Lakh = max 80% LTV; >₹75 Lakh = max 75% LTV; prohibition on adding stamp duty/registration to property cost for LTV calculations on loans >₹10 Lakh), Floating vs Fixed Interest Rates (no foreclosure/prepayment penalties on floating rate retail term loans to individuals), Education Loans (Model IBA Scheme: up to ₹4 Lakh no margin/collateral; >₹4 Lakh to ₹7.5 Lakh 5% margin with third-party guarantee; >₹7.5 Lakh 15% margin with tangible collateral), and Credit Cards (20 to 50 days interest-free credit, Minimum Amount Due - MAD 5%, Most Important Terms and Conditions - MITC).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Retail Banking Products & Wealth Management Architecture",
      "concept": "Retail Lending Products: Home Loans (LTV & Risk Weights), Auto, Education & Credit Cards"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-IIBF-45",
    "type": "CONCEPT",
    "title": "Credit Information Companies (CICs): CIBIL Scoring & RBI Debt Recovery Agent (DRA) Code",
    "slug": "credit-information-companies-cics-cibil-scoring-and-debt-recovery-agent-dra-guidelines",
    "url": "/topics/iibf-retail-banking-products-and-wealth-management/read#credit-information-companies-cics-cibil-scoring-and-debt-recovery-agent-dra-guidelines",
    "description": "The credit scoring, credit reporting, and recovery governance architecture under the Credit Information Companies (Regulation) Act 2005 (CICRA) and RBI guidelines: The 4 Licensed CICs in India (TransUnion CIBIL, Equifax, Experian, CRIF High Mark), CIBIL TransUnion Score (numeric score ranging from 300 to 900; scores $\\ge 750$ considered prime benchmark), Credit Information Report (CIR: trade lines, DPD [Days Past Due], settled/written-off flags), RBI Debt Recovery Agent (DRA) Guidelines (mandatory IIBF 100/50-hour DRA training and certification, calling hours strictly between 8:00 AM and 7:00 PM, ban on intimidation/harassment/abusive language, maintaining recording of recovery calls).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Retail Banking Products & Wealth Management Architecture",
      "concept": "Credit Information Companies (CICs): CIBIL Scoring & RBI Debt Recovery Agent (DRA) Code"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-46",
    "type": "CONCEPT",
    "title": "Wealth Management & Estate Planning: Asset Allocation, Trusts, Wills & RERA Act 2016",
    "slug": "wealth-management-portfolio-allocation-estate-planning-and-rera-regulations",
    "url": "/topics/iibf-retail-banking-products-and-wealth-management/read#wealth-management-portfolio-allocation-estate-planning-and-rera-regulations",
    "description": "The wealth advisory, fiduciary planning, and real estate governance architecture: The Wealth Management Process (Financial Profiling, Risk Profiling [Conservative, Moderate, Aggressive], Asset Allocation [Strategic Asset Allocation - SAA vs Tactical Asset Allocation - TAA], Portfolio Rebalancing), Estate Planning (Wills under Indian Succession Act 1925: Attestation by 2 witnesses, Probate, Codicil, and Private Family Trusts under Indian Trusts Act 1882 for asset protection), and Real Estate (Regulation and Development) Act 2016 (RERA: mandatory registration of projects $>500 \\text{ sq m}$ or $>8$ apartments, 70% of buyer funds deposited in dedicated escrow account, Carpet Area definition, 5-year defect liability period).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Retail Banking Products & Wealth Management Architecture",
      "concept": "Wealth Management & Estate Planning: Asset Allocation, Trusts, Wills & RERA Act 2016"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-47",
    "type": "CONCEPT",
    "title": "Banking Regulation Act 1949: Statutory Powers, Licensing & Reserve Bank Governance Oversight",
    "slug": "banking-regulation-act-1949-licensing-governance-and-reserve-bank-regulatory-powers",
    "url": "/topics/iibf-banking-regulations-and-statutory-governance/read#banking-regulation-act-1949-licensing-governance-and-reserve-bank-regulatory-powers",
    "description": "The foundational statutory statute governing commercial and cooperative banking in India: Banking Regulation Act 1949: Definition of Banking (Section 5(b): accepting deposits of money from public withdrawable by cheque/draft for lending or investment), Permitted vs Prohibited businesses (Section 6 [permitted banking activities] vs Section 8 [prohibition of trading in goods] and Section 9 [disposal of non-banking assets within 7 years]), Licensing of Banking Companies (Section 22), Reserve Bank's Inspection and Audit Powers (Section 35), Power to Supersede Board of Directors and Remove Management (Section 36AA & 36ACA), Power to give binding directions (Section 35A), and Compulsory Amalgamation and Moratorium (Section 45).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Banking Regulation Act 1949 & Statutory Powers of RBI",
      "concept": "Banking Regulation Act 1949: Statutory Powers, Licensing & Reserve Bank Governance Oversight"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-IIBF-48",
    "type": "CONCEPT",
    "title": "Prudential Exposure Norms & Large Exposure Framework (LEF): Single & Group Borrower Limits",
    "slug": "prudential-exposure-norms-large-exposure-framework-lef-and-connected-lending-curbs",
    "url": "/topics/iibf-banking-regulations-and-statutory-governance/read#prudential-exposure-norms-large-exposure-framework-lef-and-connected-lending-curbs",
    "description": "The statutory concentration risk and exposure management architecture under Basel III and RBI Master Directions: Large Exposure Framework (LEF: aligned with BCBS standards since April 2019), Exposure defined on Eligible Capital Base (Tier 1 Capital only), Single Counterparty Exposure limit (strictly capped at 20% of Tier 1 Capital; extendable up to 25% with Board approval in exceptional infrastructure cases), Group of Connected Counterparties limit (strictly capped at 25% of Tier 1 Capital), Large Exposure definition (any counterparty exposure $\\ge 10\\%$ of Tier 1 Capital), and connected lending curbs.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Banking Regulation Act 1949 & Statutory Powers of RBI",
      "concept": "Prudential Exposure Norms & Large Exposure Framework (LEF): Single & Group Borrower Limits"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-IIBF-49",
    "type": "CONCEPT",
    "title": "Deposit Insurance Architecture: DICGC Act 1961, ₹5 Lakh Coverage & 90-Day Payout Rules",
    "slug": "deposit-insurance-dicgc-act-1961-rs-5-lakh-coverage-and-claim-settlement-timelines",
    "url": "/topics/iibf-banking-regulations-and-statutory-governance/read#deposit-insurance-dicgc-act-1961-rs-5-lakh-coverage-and-claim-settlement-timelines",
    "description": "The statutory deposit safety net under the Deposit Insurance and Credit Guarantee Corporation Act 1961: DICGC as a wholly-owned subsidiary of RBI (established 1961/1978), Coverage Quantum (increased from ₹1 Lakh to ₹5 Lakh per depositor per bank in same right and capacity, effective February 4, 2020), Insured Deposits (Savings, Current, Fixed, Recurring deposits across Commercial Banks, RRBs, LABs, Payments Banks, SFBs, and Cooperative Banks), Insurance Premium (12 paise per ₹100 of assessable deposits per annum, borne 100% by the bank without passing to customer), and the landmark DICGC (Amendment) Act 2021 mandating Interim Claim Payout within 90 days to depositors of banks placed under RBI Directions / Moratorium.",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Banking Regulation Act 1949 & Statutory Powers of RBI",
      "concept": "Deposit Insurance Architecture: DICGC Act 1961, ₹5 Lakh Coverage & 90-Day Payout Rules"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-IIBF-50",
    "type": "CONCEPT",
    "title": "Management Foundations: Classical, Neo-Classical, Motivation Theories & Leadership Models",
    "slug": "management-theories-classical-neo-classical-and-modern-leadership-models",
    "url": "/topics/rbi-management-and-organisational-behaviour/read#management-theories-classical-neo-classical-and-modern-leadership-models",
    "description": "The core descriptive management and organizational behavior models tested in RBI Grade B (FM): Classical Theories (Henri Fayol's 14 Principles of Administrative Management, F.W. Taylor's Scientific Management, Max Weber's Bureaucratic Model), Neo-Classical / Human Relations Movement (Elton Mayo's Hawthorne Studies 1924-1932: social and informal group dynamics), Motivation Theories (Maslow's Hierarchy of Needs, Herzberg's Two-Factor Motivation-Hygiene Theory, McGregor's Theory X & Theory Y, McClelland's Three Needs Theory, Vroom's Expectancy Theory, Adam's Equity Theory), and Leadership Models (Blake & Mouton Managerial Grid [9,9 Team Management], Fiedler's Contingency Model, Hersey & Blanchard Situational Leadership Model).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Management Theories, Leadership Models & Organisational Behaviour",
      "concept": "Management Foundations: Classical, Neo-Classical, Motivation Theories & Leadership Models"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-IIBF-51",
    "type": "CONCEPT",
    "title": "Organisational Communication & Interpersonal Dynamics: Barriers, Channels & Johari Window",
    "slug": "organisational-communication-barriers-channels-and-corporate-governance-mechanisms",
    "url": "/topics/rbi-management-and-organisational-behaviour/read#organisational-communication-barriers-channels-and-corporate-governance-mechanisms",
    "description": "The organizational communication and corporate governance dynamics in banking institutions: The Communication Process (Sender, Encoding, Channel, Receiver, Decoding, Feedback, Noise), Communication Directions (Downward [orders/policies], Upward [grievances/reports], Horizontal / Lateral [inter-departmental coordination], Diagonal), Communication Barriers (Filtering, Selective Perception, Information Overload, Semantic barriers, Cultural barriers), Informal Communication (Grapevine: Single Strand, Gossip, Probability, Cluster chain), and the Johari Window interpersonal awareness model (Open Area [Arena], Blind Spot, Hidden Area [Facade], Unknown Area).",
    "hierarchy": {
      "domain": "Banking, Finance & Commercial Operations",
      "subject": "IIBF & Banking Regulations",
      "topic": "Management Theories, Leadership Models & Organisational Behaviour",
      "concept": "Organisational Communication & Interpersonal Dynamics: Barriers, Channels & Johari Window"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-GA-01",
    "type": "CONCEPT",
    "title": "Global Multilateral Organizations & Headquarters Directory: Geneva, Vienna, Paris, Rome & Diplomatic Clusters",
    "slug": "global-multilateral-organizations-and-headquarters-directory",
    "url": "/topics/international-organizations-and-headquarters/read#global-multilateral-organizations-and-headquarters-directory",
    "description": "A systematic architectural directory of apex international organizations, United Nations specialized agencies, and global governance bodies categorized by their geographical diplomatic hubs: Geneva (WHO, WTO, ILO, WIPO, UNCTAD), Vienna (IAEA, OPEC, UNIDO, UNODC), Paris (UNESCO, OECD, FATF), Rome (FAO, WFP, IFAD), Washington D.C. (World Bank, IMF), The Hague (ICJ, ICC, OPCW), London (IMO), Montreal (ICAO, WADA), Madrid (UN Tourism), and Nairobi (UNEP, UN-Habitat).",
    "hierarchy": {
      "domain": "General Awareness & Global Affairs",
      "subject": "General Awareness & Global Institutions",
      "topic": "International Organizations & Multilateral Headquarters",
      "concept": "Global Multilateral Organizations & Headquarters Directory: Geneva, Vienna, Paris, Rome & Diplomatic Clusters"
    },
    "badge": "FOUNDATIONAL"
  },
  {
    "id": "con-CON-GA-02",
    "type": "CONCEPT",
    "title": "Multilateral Development Banks (MDBs): Bretton Woods, Regional Banks & South-South Institutions",
    "slug": "multilateral-development-banks-architecture",
    "url": "/topics/international-organizations-and-headquarters/read#multilateral-development-banks-architecture",
    "description": "A comparative analysis of Multilateral Development Banks (MDBs) and international financial institutions: the Bretton Woods twins (World Bank Group and IMF), regional banks (ADB, EIB, IDB, AfDB), and modern South-South institutions (AIIB and NDB). Analyzes founding charters, headquarters, capital subscriptions, voting share structures, and India’s institutional relationship.",
    "hierarchy": {
      "domain": "General Awareness & Global Affairs",
      "subject": "General Awareness & Global Institutions",
      "topic": "International Organizations & Multilateral Headquarters",
      "concept": "Multilateral Development Banks (MDBs): Bretton Woods, Regional Banks & South-South Institutions"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-GA-03",
    "type": "CONCEPT",
    "title": "Apex International Reports, Global Indices & Nodal Publishing Organizations",
    "slug": "apex-international-reports-and-indices",
    "url": "/topics/global-indices-and-reports/read#apex-international-reports-and-indices",
    "description": "A canonical catalog of flagship global socioeconomic, governance, economic, and environmental reports mapped to their authoritative publishing organizations (UNDP, WIPO, WEF, World Bank, IMF, Transparency International, UNEP). Examines core structural parameters, the Human Development Index (HDI) methodology, and key institutional traps.",
    "hierarchy": {
      "domain": "General Awareness & Global Affairs",
      "subject": "General Awareness & Global Institutions",
      "topic": "Global Indices, Reports & Publishing Bodies",
      "concept": "Apex International Reports, Global Indices & Nodal Publishing Organizations"
    },
    "badge": "FOUNDATIONAL"
  },
  {
    "id": "con-CON-SCH-01",
    "type": "CONCEPT",
    "title": "Government Schemes Architecture: Classification, Funding Ratios & Nodal Delivery Systems",
    "slug": "government-schemes-classification-and-funding-architecture",
    "url": "/topics/public-policy-and-scheme-framework/read#government-schemes-classification-and-funding-architecture",
    "description": "The structural taxonomy of public policy schemes in India: the statutory and budgetary distinction between Central Sector Schemes (100% centrally funded) and Centrally Sponsored Schemes (CSS - Core of Core, Core, and Optional sharing models), standard Center-State funding ratios (60:40, 90:10, 100:0), the Single Nodal Agency (SNA) fund flow mechanism, and Direct Benefit Transfer (DBT) conduits.",
    "hierarchy": {
      "domain": "Public Policy & Welfare Administration",
      "subject": "Government Schemes & Welfare Architecture",
      "topic": "Public Policy & Scheme Implementation Framework",
      "concept": "Government Schemes Architecture: Classification, Funding Ratios & Nodal Delivery Systems"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-SCH-02",
    "type": "CONCEPT",
    "title": "Core Financial Inclusion & Social Security Schemes: PMJDY, PMJJBY, PMSBY & Atal Pension Yojana",
    "slug": "core-financial-inclusion-and-social-security-schemes",
    "url": "/topics/financial-inclusion-and-enterprise-schemes/read#core-financial-inclusion-and-social-security-schemes",
    "description": "The statutory framework and operational parameters of India's core universal social security safety net: Pradhan Mantri Jan Dhan Yojana (PMJDY - zero-balance banking and overdraft), Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY - ₹2 Lakh life insurance at ₹436/year), Pradhan Mantri Suraksha Bima Yojana (PMSBY - ₹2 Lakh accidental cover at ₹20/year), and Atal Pension Yojana (APY - guaranteed pension of ₹1,000–₹5,000/month).",
    "hierarchy": {
      "domain": "Public Policy & Welfare Administration",
      "subject": "Government Schemes & Welfare Architecture",
      "topic": "Financial Inclusion, Social Security & Enterprise Schemes",
      "concept": "Core Financial Inclusion & Social Security Schemes: PMJDY, PMJJBY, PMSBY & Atal Pension Yojana"
    },
    "badge": "FOUNDATIONAL"
  },
  {
    "id": "con-CON-SCH-03",
    "type": "CONCEPT",
    "title": "Micro-Enterprise & Street Vendor Credit Frameworks: PMMY MUDRA, PM SVANidhi & PM Vishwakarma",
    "slug": "micro-enterprise-and-street-vendor-credit-frameworks",
    "url": "/topics/financial-inclusion-and-enterprise-schemes/read#micro-enterprise-and-street-vendor-credit-frameworks",
    "description": "A comparative statutory and financial analysis of institutional micro-credit delivery: Pradhan Mantri MUDRA Yojana (PMMY - Shishu, Kishore, Tarun, and the Budget 2024–25 Tarun Plus category up to ₹20 Lakh), PM SVANidhi (MoHUA street vendor credit up to ₹50,000 with 7% interest subsidy), and PM Vishwakarma (₹13,000 Crore scheme for 18 traditional trades with ₹3 Lakh collateral-free credit at 5% interest and toolkit support).",
    "hierarchy": {
      "domain": "Public Policy & Welfare Administration",
      "subject": "Government Schemes & Welfare Architecture",
      "topic": "Financial Inclusion, Social Security & Enterprise Schemes",
      "concept": "Micro-Enterprise & Street Vendor Credit Frameworks: PMMY MUDRA, PM SVANidhi & PM Vishwakarma"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-SCH-04",
    "type": "CONCEPT",
    "title": "Rural Livelihood & Self-Help Group Credit: DAY-NRLM, Interest Subvention & CGFMU Architecture",
    "slug": "rural-livelihood-and-self-help-group-credit",
    "url": "/topics/rural-development-and-employment-guarantees/read#rural-livelihood-and-self-help-group-credit",
    "description": "The institutional framework of Deendayal Antyodaya Yojana - National Rural Livelihoods Mission (DAY-NRLM): women SHG mobilization, Panchasutra discipline, Revolving Fund (₹20,000–₹30,000), Community Investment Fund, Interest Subvention Scheme (delivering credit at 7% p.a. with 4.5% subvention up to ₹3 Lakh), RBI collateral relaxation up to ₹20 Lakh under CGFMU, and the Lakhpati Didi mandate.",
    "hierarchy": {
      "domain": "Public Policy & Welfare Administration",
      "subject": "Government Schemes & Welfare Architecture",
      "topic": "Rural Development, Agriculture & Employment Guarantees",
      "concept": "Rural Livelihood & Self-Help Group Credit: DAY-NRLM, Interest Subvention & CGFMU Architecture"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-SCH-05",
    "type": "CONCEPT",
    "title": "Employment Guarantee & Agricultural Income Support: MGNREGA 2005, PM-KISAN & PMFBY",
    "slug": "employment-guarantee-and-agricultural-income-support",
    "url": "/topics/rural-development-and-employment-guarantees/read#employment-guarantee-and-agricultural-income-support",
    "description": "The legal and financial architecture of India’s rural safety nets: the statutory framework of the Mahatma Gandhi National Rural Employment Guarantee Act, 2005 (MGNREGA - legal entitlement to 100 days of wage employment per household, 15-day work guarantee, and Section 7 unemployment allowance), direct agricultural income transfers under PM-KISAN (₹6,000/year in 3 installments), and multi-peril crop insurance under PMFBY (capped farmer premiums: 2% Kharif, 1.5% Rabi, 5% Commercial).",
    "hierarchy": {
      "domain": "Public Policy & Welfare Administration",
      "subject": "Government Schemes & Welfare Architecture",
      "topic": "Rural Development, Agriculture & Employment Guarantees",
      "concept": "Employment Guarantee & Agricultural Income Support: MGNREGA 2005, PM-KISAN & PMFBY"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ENG-01",
    "type": "CONCEPT",
    "title": "Principles of Effective Written Discourse & Evaluator Rubrics",
    "slug": "principles-of-effective-written-discourse-and-evaluator-rubrics",
    "url": "/topics/discourse-and-syntax-foundations/read#principles-of-effective-written-discourse-and-evaluator-rubrics",
    "description": "Foundational framework of descriptive discourse balancing relevance, structural coherence, factual grounding, and command-word directives.",
    "hierarchy": {
      "domain": "English Language & Professional Communication",
      "subject": "English Language & Descriptive Writing",
      "topic": "Foundations of Written Discourse & Syntax",
      "concept": "Principles of Effective Written Discourse & Evaluator Rubrics"
    },
    "badge": "FOUNDATIONAL"
  },
  {
    "id": "con-CON-ENG-02",
    "type": "CONCEPT",
    "title": "Sentence Architecture, Syntactic Modulation & Academic Tone",
    "slug": "sentence-architecture-syntactic-modulation-and-academic-tone",
    "url": "/topics/discourse-and-syntax-foundations/read#sentence-architecture-syntactic-modulation-and-academic-tone",
    "description": "Techniques for modulating syntactic rhythm, avoiding monotone structures, applying academic hedging, and maintaining formal register.",
    "hierarchy": {
      "domain": "English Language & Professional Communication",
      "subject": "English Language & Descriptive Writing",
      "topic": "Foundations of Written Discourse & Syntax",
      "concept": "Sentence Architecture, Syntactic Modulation & Academic Tone"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ENG-03",
    "type": "CONCEPT",
    "title": "Paragraph Architecture: The PEEL Framework, Cohesion & Scannability",
    "slug": "paragraph-architecture-the-peel-framework-cohesion-and-scannability",
    "url": "/topics/discourse-and-syntax-foundations/read#paragraph-architecture-the-peel-framework-cohesion-and-scannability",
    "description": "First-principles paragraph design using topic sentences, evidentiary substantiation, causal explanation, transitional links, and on-screen formatting.",
    "hierarchy": {
      "domain": "English Language & Professional Communication",
      "subject": "English Language & Descriptive Writing",
      "topic": "Foundations of Written Discourse & Syntax",
      "concept": "Paragraph Architecture: The PEEL Framework, Cohesion & Scannability"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ENG-04",
    "type": "CONCEPT",
    "title": "Prompt Deconstruction, Demand Analysis & Thesis Formulation",
    "slug": "prompt-deconstruction-demand-analysis-and-thesis-formulation",
    "url": "/topics/essay-writing-and-argumentation/read#prompt-deconstruction-demand-analysis-and-thesis-formulation",
    "description": "The cognitive process of interpreting essay prompts, identifying boundary limits, and formulating a definitive analytical thesis statement.",
    "hierarchy": {
      "domain": "English Language & Professional Communication",
      "subject": "English Language & Descriptive Writing",
      "topic": "Essay Writing & Argumentation",
      "concept": "Prompt Deconstruction, Demand Analysis & Thesis Formulation"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ENG-05",
    "type": "CONCEPT",
    "title": "Multi-Dimensional Argumentation: PESTLE-S, Stakeholder Grids & C.A.S.H.",
    "slug": "multi-dimensional-argumentation-pestle-stakeholder-and-cash-frameworks",
    "url": "/topics/essay-writing-and-argumentation/read#multi-dimensional-argumentation-pestle-stakeholder-and-cash-frameworks",
    "description": "Brainstorming frameworks to unpack complex socio-economic topics across political, economic, social, technological, legal, and environmental dimensions.",
    "hierarchy": {
      "domain": "English Language & Professional Communication",
      "subject": "English Language & Descriptive Writing",
      "topic": "Essay Writing & Argumentation",
      "concept": "Multi-Dimensional Argumentation: PESTLE-S, Stakeholder Grids & C.A.S.H."
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ENG-06",
    "type": "CONCEPT",
    "title": "Introduction Hooks, Thematic Development & Circular Conclusions",
    "slug": "introduction-hooks-thematic-development-and-circular-conclusions",
    "url": "/topics/essay-writing-and-argumentation/read#introduction-hooks-thematic-development-and-circular-conclusions",
    "description": "Engineering functional opening hooks, maintaining thematic continuity across body sections, and crafting synthesizing circular conclusions.",
    "hierarchy": {
      "domain": "English Language & Professional Communication",
      "subject": "English Language & Descriptive Writing",
      "topic": "Essay Writing & Argumentation",
      "concept": "Introduction Hooks, Thematic Development & Circular Conclusions"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ENG-07",
    "type": "CONCEPT",
    "title": "Abstract, Philosophical & Contemporary Policy Debates",
    "slug": "abstract-philosophical-and-contemporary-policy-debates",
    "url": "/topics/essay-writing-and-argumentation/read#abstract-philosophical-and-contemporary-policy-debates",
    "description": "Methodology for demystifying abstract, proverbial prompts and handling controversial policy debates with the balanced central-banker stance.",
    "hierarchy": {
      "domain": "English Language & Professional Communication",
      "subject": "English Language & Descriptive Writing",
      "topic": "Essay Writing & Argumentation",
      "concept": "Abstract, Philosophical & Contemporary Policy Debates"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-ENG-08",
    "type": "CONCEPT",
    "title": "Précis Writing: The 1/3rd Rule, Negative Filtering & Title Formulation",
    "slug": "precis-writing-compression-negative-filtering-and-titling",
    "url": "/topics/precis-writing-and-synthesis/read#precis-writing-compression-negative-filtering-and-titling",
    "description": "The disciplined extraction of core informational hierarchies, eliminating illustrative fluff, and synthesizing a single condensed paragraph under strict word constraints.",
    "hierarchy": {
      "domain": "English Language & Professional Communication",
      "subject": "English Language & Descriptive Writing",
      "topic": "Précis Writing & Non-Verbatim Synthesis",
      "concept": "Précis Writing: The 1/3rd Rule, Negative Filtering & Title Formulation"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ENG-09",
    "type": "CONCEPT",
    "title": "Subjective Reading Comprehension & Non-Verbatim Paraphrasing",
    "slug": "subjective-reading-comprehension-and-non-verbatim-paraphrasing",
    "url": "/topics/precis-writing-and-synthesis/read#subjective-reading-comprehension-and-non-verbatim-paraphrasing",
    "description": "Techniques for answering subjective RC prompts using question-first reverse scanning, 2-sentence synthesis, and the 3-step non-verbatim paraphrase engine.",
    "hierarchy": {
      "domain": "English Language & Professional Communication",
      "subject": "English Language & Descriptive Writing",
      "topic": "Précis Writing & Non-Verbatim Synthesis",
      "concept": "Subjective Reading Comprehension & Non-Verbatim Paraphrasing"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ENG-10",
    "type": "CONCEPT",
    "title": "Formal & Informal Letter Writing: Modern Full-Block & Grievance Escalation",
    "slug": "formal-and-informal-letter-writing-modern-full-block-and-grievance-escalation",
    "url": "/topics/professional-correspondence-and-workplace-writing/read#formal-and-informal-letter-writing-modern-full-block-and-grievance-escalation",
    "description": "Standard modern full-block layout, 3-tier banking grievance escalation hierarchy, and formal versus informal register calibration.",
    "hierarchy": {
      "domain": "English Language & Professional Communication",
      "subject": "English Language & Descriptive Writing",
      "topic": "Professional Correspondence & Workplace Writing",
      "concept": "Formal & Informal Letter Writing: Modern Full-Block & Grievance Escalation"
    },
    "badge": "FOUNDATIONAL"
  },
  {
    "id": "con-CON-ENG-11",
    "type": "CONCEPT",
    "title": "Official Workplace Emails & Customer Communication Architecture",
    "slug": "official-workplace-emails-and-customer-communication-architecture",
    "url": "/topics/professional-correspondence-and-workplace-writing/read#official-workplace-emails-and-customer-communication-architecture",
    "description": "Structural and tonal divergence between official emails and physical letters, covering internal operational escalations and customer conciliation.",
    "hierarchy": {
      "domain": "English Language & Professional Communication",
      "subject": "English Language & Descriptive Writing",
      "topic": "Professional Correspondence & Workplace Writing",
      "concept": "Official Workplace Emails & Customer Communication Architecture"
    },
    "badge": "INTERMEDIATE"
  },
  {
    "id": "con-CON-ENG-12",
    "type": "CONCEPT",
    "title": "Institutional Reports, Credit Audits & Situation Analysis Memos",
    "slug": "institutional-reports-credit-audits-and-situation-analysis-memos",
    "url": "/topics/professional-correspondence-and-workplace-writing/read#institutional-reports-credit-audits-and-situation-analysis-memos",
    "description": "Formal reporting architecture for regulatory bodies (NABARD, RBI) and the 5-pillar situational triage framework for operational crises.",
    "hierarchy": {
      "domain": "English Language & Professional Communication",
      "subject": "English Language & Descriptive Writing",
      "topic": "Professional Correspondence & Workplace Writing",
      "concept": "Institutional Reports, Credit Audits & Situation Analysis Memos"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-ENG-13",
    "type": "CONCEPT",
    "title": "Benchmark Model Essays: Thematic Breakdown & Policy Integration",
    "slug": "benchmark-model-essays-thematic-breakdown-and-policy-integration",
    "url": "/topics/model-exemplars-and-deconstructions/read#benchmark-model-essays-thematic-breakdown-and-policy-integration",
    "description": "Curated repository of benchmark 250-word and 600-word model essays across macroeconomics, technology, demographics, and governance with structural deconstructions.",
    "hierarchy": {
      "domain": "English Language & Professional Communication",
      "subject": "English Language & Descriptive Writing",
      "topic": "Model Exemplars & Structural Deconstructions",
      "concept": "Benchmark Model Essays: Thematic Breakdown & Policy Integration"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-ENG-14",
    "type": "CONCEPT",
    "title": "Model Workplace Communications: Letters, Memos, Reports & Précis Vault",
    "slug": "model-workplace-communications-letters-memos-reports-and-precis-vault",
    "url": "/topics/model-exemplars-and-deconstructions/read#model-workplace-communications-letters-memos-reports-and-precis-vault",
    "description": "Curated repository of benchmark formal letters, branch incident analysis memos, institutional reports, and live précis transformations with annotations.",
    "hierarchy": {
      "domain": "English Language & Professional Communication",
      "subject": "English Language & Descriptive Writing",
      "topic": "Model Exemplars & Structural Deconstructions",
      "concept": "Model Workplace Communications: Letters, Memos, Reports & Précis Vault"
    },
    "badge": "ADVANCED"
  },
  {
    "id": "con-CON-ENG-15",
    "type": "CONCEPT",
    "title": "Timed Exam Execution Strategy, Keyboard Ergonomics & Scoring Engine",
    "slug": "timed-exam-execution-strategy-keyboard-ergonomics-and-scoring-engine",
    "url": "/topics/active-practice-and-exam-strategy/read#timed-exam-execution-strategy-keyboard-ergonomics-and-scoring-engine",
    "description": "Real-time clock management across 30-min and 90-min descriptive tests, TCS iON software keyboard quirks, and objective self-evaluation scoring rubrics.",
    "hierarchy": {
      "domain": "English Language & Professional Communication",
      "subject": "English Language & Descriptive Writing",
      "topic": "Active Practice Arena & Exam Execution Strategy",
      "concept": "Timed Exam Execution Strategy, Keyboard Ergonomics & Scoring Engine"
    },
    "badge": "ADVANCED"
  }
];

export const STATIC_CONCEPT_INDEX: StaticConceptItem[] = [
  {
    "id": "CON-ECON-INF-01",
    "slug": "inflation-definition-distinctions-real-nominal",
    "title": "Core Concept of Inflation, Terminological Distinctions & Real vs Nominal Values",
    "shortDefinition": "Inflation is a sustained, generalized rise in an economy's aggregate price level that erodes the purchasing power of money. It must be distinguished from episodic relative price shocks in isolated goods, and contrasted with disinflation, deflation, reflation, and stagflation.",
    "difficulty": "BEGINNER",
    "topicTitle": "Inflation: Dynamics, Price Measurement & Policy Framework",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECON-INF-02",
    "slug": "price-indices-measurement-cpi-wpi-core-headline",
    "title": "Price Indices & Measurement in India: CPI, WPI, Scope Distinctions & Consumption Shifts",
    "shortDefinition": "India measures inflation primarily through two indices: the Consumer Price Index (CPI-Combined, base 2012, published by NSO), which serves as the official monetary policy anchor, and the Wholesale Price Index (WPI, base 2011-12, published by DPIIT), which tracks producer-level commodity transactions within its defined goods basket without covering services.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Inflation: Dynamics, Price Measurement & Policy Framework",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECON-INF-03",
    "slug": "inflation-causes-mechanisms-demand-cost-structural",
    "title": "Causes & Causal Mechanisms of Inflation: Demand-Pull, Cost-Push, Imported & Structural Shocks",
    "shortDefinition": "Inflation arises from fundamental macroeconomic imbalances: Demand-Pull pressures when Aggregate Demand exceeds Potential GDP (closing the output gap), Cost-Push shocks when input costs shift the Short-Run Aggregate Supply (SRAS) curve upward (pass-through conditioned by input substitutability and pricing power), Imported inflation through exchange rate pass-through, and Structural bottlenecks in agricultural supply chains.",
    "difficulty": "ADVANCED",
    "topicTitle": "Inflation: Dynamics, Price Measurement & Policy Framework",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECON-INF-04",
    "slug": "inflation-distributional-impacts-growth-tradeoffs-phillips-curve",
    "title": "Distributional Impacts, Nuanced Winners/Losers, Fiscal Bracket Creep, Expectation Formation & Empirical Growth Thresholds",
    "shortDefinition": "Inflation creates sharp redistributional effects: unexpected inflation benefits fixed-rate debtors over creditors, and acts as a regressive burden on unindexed fixed-income earners and the poor. Under progressive income tax schedules, inflation increases government tax receipts via bracket creep. While a short-run trade-off exists (Phillips Curve), Indian empirical research demonstrates that inflation above 4–6% actively impairs long-term investment and GDP growth.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Inflation: Dynamics, Price Measurement & Policy Framework",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECON-INF-05",
    "slug": "inflation-policy-framework-rbi-mpc-flexible-targeting-supply-side",
    "title": "Policy Framework: RBI Flexible Inflation Targeting (FIT), The MPC, Transmission Heterogeneity & Supply-Side Coordination",
    "shortDefinition": "India controls inflation through a coordinated policy architecture: Monetary Policy operated by the 6-member Monetary Policy Committee (MPC) under the Flexible Inflation Targeting (FIT) framework (4% ± 2% CPI target under Section 45ZA of the RBI Act), coupled with Fiscal and Supply-Side market interventions by the Central Government.",
    "difficulty": "ADVANCED",
    "topicTitle": "Inflation: Dynamics, Price Measurement & Policy Framework",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-T1-01",
    "slug": "state-and-nation-constituent-elements-saptanga-theory",
    "title": "The State and Nation: Constituent Elements, Saptanga Theory & Distinctions",
    "shortDefinition": "The State as a sovereign political-legal entity defined by four universal elements (territory, population, government, sovereignty), Kautilya’s organic Saptanga model, and the crucial distinction from the cultural concept of Nation.",
    "difficulty": "BEGINNER",
    "topicTitle": "Basic Concepts of Polity",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T1-02",
    "slug": "theories-of-origin-of-state-divine-social-contract-marxist",
    "title": "Theories of the Origin of the State: Divine, Social Contract, Historical & Marxist",
    "shortDefinition": "Philosophical accounts of how the state emerged: Divine Origin (theocratic sanction), Social Contract (Hobbes, Locke, Rousseau overcoming the state of nature / Matsya Nyaya), Historical-Evolutionary, and Marxist class-instrument models.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Basic Concepts of Polity",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T1-03",
    "slug": "systems-of-governance-parliamentary-presidential-constitutional-supremacy",
    "title": "Systems of Governance: Parliamentary vs Presidential & Constitutional Supremacy",
    "shortDefinition": "Structural classification of constitutional governance: Dual Legislature and Executive in India, Unified Judiciary, Parliamentary executive-legislative fusion vs US strict Separation of Powers, and Parliamentary Sovereignty (UK) vs Constitutional Supremacy (India).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Basic Concepts of Polity",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T1-04",
    "slug": "constitution-and-constitutionalism-nature-functions-pillars",
    "title": "Constitution & Constitutionalism: Nature, Functions & Pillars of Limited Government",
    "shortDefinition": "The formal Constitution as the supreme organic legal instrument defining state architecture versus Constitutionalism as the underlying political philosophy of limited government, rule of law, and institutional restraint.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Basic Concepts of Polity",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T2-01",
    "slug": "historical-evolution-demand-for-constituent-assembly",
    "title": "Historical Evolution & Demand for the Constituent Assembly (1895–1946)",
    "shortDefinition": "The constitutional progression of the demand for a sovereign Constitution-making body: from Tilak’s Swaraj Bill (1895) and Nehru Report (1928) to M.N. Roy’s formal formulation (1934), INC official demands, August Offer (1940), Cripps Mission (1942), and Cabinet Mission Plan (1946).",
    "difficulty": "BEGINNER",
    "topicTitle": "Constituent Assembly of India",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T2-02",
    "slug": "composition-election-restructuring-constituent-assembly",
    "title": "Composition, Election Framework & Restructuring of the Constituent Assembly",
    "shortDefinition": "The original 389-seat architecture under the Cabinet Mission Plan (292 British provinces, 93 princely states, 4 Chief Commissioner provinces), indirect proportional voting via single transferable vote, and post-partition reduction to 299 seats.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Constituent Assembly of India",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T2-03",
    "slug": "functioning-working-timeline-dual-roles-constituent-assembly",
    "title": "Functioning, Working Timeline & Dual Roles of the Constituent Assembly",
    "shortDefinition": "Chronological roadmap of the Assembly: December 9, 1946 opening meeting, leadership appointments, Objectives Resolution, its dual role as Constitution-maker and Provisional Parliament, adoption on Nov 26, 1949, and commencement on Jan 26, 1950.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Constituent Assembly of India",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T2-04",
    "slug": "committees-of-constituent-assembly-and-drafting-committee",
    "title": "Committees of the Constituent Assembly & The Drafting Committee",
    "shortDefinition": "The division of labor in the Assembly across 8 major committees and numerous minor committees, with deep focus on the 7-member Drafting Committee chaired by Dr. B.R. Ambedkar appointed on August 29, 1947.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Constituent Assembly of India",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T2-05",
    "slug": "sources-of-the-indian-constitution-borrowing-matrix",
    "title": "Major Sources Borrowed & Constitutional Borrowing Matrix",
    "shortDefinition": "The systematic constitutional borrowing from the Government of India Act 1935 and 10 world democracies (UK, USA, Ireland, Canada, Australia, Germany, USSR, France, South Africa, Japan), synthesized to suit Indian realities.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Constituent Assembly of India",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T2-06",
    "slug": "constituent-assembly-rajasthan-representation-criticisms",
    "title": "Constituent Assembly: Rajasthan Representation, Critical Appraisals & Rebuttals",
    "shortDefinition": "The 14 representative members from Rajasthan princely states/Ajmer-Merwara, key officers and calligraphers of the Assembly, and comprehensive intellectual rebuttals to the 6 classical criticisms of the Assembly.",
    "difficulty": "ADVANCED",
    "topicTitle": "Constituent Assembly of India",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T3-01",
    "slug": "preamble-historical-genesis-text-authority-jurist-views",
    "title": "Preamble: Historical Genesis, Text, Source of Authority & Eminent Perspectives",
    "shortDefinition": "The preface of the Constitution rooted in Nehru’s Objectives Resolution (1946), verbatim text enacted on Oct 17, 1949, popular sovereignty (\"We the People\"), and famous characterizations by Palkhivala, Munshi, and Thakur Das Bhargava.",
    "difficulty": "BEGINNER",
    "topicTitle": "The Preamble of the Indian Constitution",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T3-02",
    "slug": "nature-of-indian-state-sovereign-socialist-secular-democratic-republic",
    "title": "Nature of the Indian State: Sovereign, Socialist, Secular, Democratic, Republic",
    "shortDefinition": "In-depth analysis of the five defining attributes of the Indian State: absolute internal-external sovereignty, democratic (non-Marxist) socialism, positive secularism (Sarva Dharma Sambhava), representative democracy, and republican headship.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "The Preamble of the Indian Constitution",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T3-03",
    "slug": "constitutional-objectives-justice-liberty-equality-fraternity",
    "title": "Constitutional Objectives: Justice, Liberty, Equality, Fraternity & Dignity",
    "shortDefinition": "The four constitutional ideals promised to citizens: three-dimensional Justice (Social, Economic, Political from Russian Revolution 1917), bounded Liberty (French Revolution 1789), Equality of Status/Opportunity, and Fraternity assuring individual dignity and national integrity.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "The Preamble of the Indian Constitution",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T3-04",
    "slug": "status-justiciability-amendability-of-the-preamble",
    "title": "Constitutional Status, Justiciability & Amendability of the Preamble",
    "shortDefinition": "The landmark judicial evolution of the Preamble from Berubari Union (1960 — not part of Constitution) to Kesavananda Bharati (1973 — integral part and amendable under Art 368 subject to Basic Structure) and LIC of India (1995), its non-justiciable legal character, and the 42nd Amendment.",
    "difficulty": "ADVANCED",
    "topicTitle": "The Preamble of the Indian Constitution",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T04-09",
    "slug": "official-language-constitutional-scheme-part-xvii-special-directives-constitutional-morality",
    "title": "Official Language Constitutional Scheme (Part XVII), Special Linguistic Directives & Constitutional Morality",
    "shortDefinition": "Constitutional architecture of Official Language under Part XVII (Articles 343–351), Official Languages Act 1963/1967 bilingual compromise, language of superior judiciary (Article 348), special directives for primary education in mother tongue (Article 350A) and Linguistic Minorities Commissioner (Article 350B), and the foundational doctrine of Constitutional Morality (Ambedkar to Navtej Johar and NCT Delhi).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Schedules of the Indian Constitution & Language Scheme",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T4-01",
    "slug": "schedules-overview-evolution-and-structural-matrix",
    "title": "Overview, Evolution & Structural Matrix of the 12 Schedules",
    "shortDefinition": "The functional role of Schedules as detailed constitutional appendices, their expansion from 8 in 1949 to 12 today through four constitutional amendments (1st, 52nd, 73rd, 74th), and their direct constitutional anchorage in specific Articles.",
    "difficulty": "BEGINNER",
    "topicTitle": "Schedules of the Indian Constitution & Language Scheme",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T4-02",
    "slug": "schedules-1-to-4-territory-emoluments-oaths-rajya-sabha",
    "title": "Schedules 1 to 4: Territory, Emoluments, Oaths and Rajya Sabha Seat Allocation",
    "shortDefinition": "Detailed examination of the first four schedules: 1st Schedule (28 States & 8 UTs), 2nd Schedule (dignitary emoluments; Ministers excluded), 3rd Schedule (forms of oaths; President, VP, Governors excluded), and 4th Schedule (population-weighted Rajya Sabha seats).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Schedules of the Indian Constitution & Language Scheme",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T4-03",
    "slug": "schedules-5-and-6-scheduled-and-tribal-areas-administration",
    "title": "Schedules 5 and 6: Administration of Scheduled & Tribal Areas",
    "shortDefinition": "Constitutional protection of indigenous tribal autonomy: 5th Schedule administration in 10 states via Tribes Advisory Councils and Governor regulations versus 6th Schedule Autonomous District Councils in the four North-Eastern states (Assam, Meghalaya, Tripura, Mizoram — AMTM).",
    "difficulty": "ADVANCED",
    "topicTitle": "Schedules of the Indian Constitution & Language Scheme",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T4-04",
    "slug": "7th-schedule-division-of-powers-lists-and-residuary-power",
    "title": "7th Schedule: Legislative Lists, Division of Powers & Residuary Powers",
    "shortDefinition": "The constitutional distribution of legislative competencies under Article 246 across Union List (100 subjects), State List (61 subjects), and Concurrent List (52 subjects), the historic 42nd Amendment shift of five subjects, and Canadian-style Residuary Powers under Article 248.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Schedules of the Indian Constitution & Language Scheme",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T4-05",
    "slug": "8th-schedule-22-official-languages-classical-languages",
    "title": "8th Schedule: 22 Official Languages, Classical Languages & Amendments",
    "shortDefinition": "The linguistic pluralism of the 8th Schedule: starting from 14 languages in 1949 to 22 languages today across three constitutional amendments (21st, 71st, 92nd), language exclusions (English and Rajasthani), and the 11 Classical Languages recognized by the Ministry of Culture.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Schedules of the Indian Constitution & Language Scheme",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T4-06",
    "slug": "9th-schedule-land-reforms-protective-umbrella-ir-coelho",
    "title": "9th Schedule: Land Reforms, Protective Umbrella & The I.R. Coelho Doctrine",
    "shortDefinition": "The creation of the 9th Schedule via the 1st Amendment (1951) and Article 31B to protect agrarian land reforms and Zamindari abolition from fundamental rights judicial review, its growth to 284 laws, and the landmark 9-judge I.R. Coelho ruling (2007) subjecting post-1973 laws to Basic Structure scrutiny.",
    "difficulty": "ADVANCED",
    "topicTitle": "Schedules of the Indian Constitution & Language Scheme",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T4-07",
    "slug": "10th-schedule-anti-defection-law-exceptions-judicial-evolution",
    "title": "10th Schedule: Anti-Defection Law, Exceptions & Judicial Evolution",
    "shortDefinition": "The 10th Schedule (Articles 102(2) & 191(2)) added by 52nd Amendment (1985) and amended by 91st Amendment (2003): disqualification grounds, the British convention of the Whip, Kihoto Holohan (1992) judicial review, and Keisham Meghchandra (2020) time-limit doctrine.",
    "difficulty": "ADVANCED",
    "topicTitle": "Schedules of the Indian Constitution & Language Scheme",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T4-08",
    "slug": "11th-and-12th-schedules-local-governance-devolutions",
    "title": "11th and 12th Schedules: Panchayati Raj & Municipal Functional Devolutions",
    "shortDefinition": "The constitutionalization of local democratic decentralization via the 73rd and 74th Amendments (1992): 11th Schedule (29 functional subjects for Panchayats under Article 243G) and 12th Schedule (18 functional subjects for Municipalities under Article 243W).",
    "difficulty": "BEGINNER",
    "topicTitle": "Schedules of the Indian Constitution & Language Scheme",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T5-01",
    "slug": "article-1-union-of-states-federal-nature-territory-of-india",
    "title": "Article 1: Union of States, Federal Nature & Territory of India",
    "shortDefinition": "The foundational constitutional declaration of India as an indestructible \"Union of States\", the distinction between \"Union of India\" (States) and \"Territory of India\" (States, UTs, and Acquired Territories), and Dr. Ambedkar’s dual rationale against state secession.",
    "difficulty": "BEGINNER",
    "topicTitle": "Part I: The Union and Its Territory",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T5-02",
    "slug": "articles-2-and-3-admission-vs-internal-reorganisation-of-states",
    "title": "Articles 2 and 3: Admission vs Internal Reorganisation of States",
    "shortDefinition": "The constitutional distinction between admitting new external territories under Article 2 versus reorganising existing internal state boundaries, areas, and names under Article 3, embodying India as an \"Indestructible Union of Destructible States\".",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part I: The Union and Its Territory",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T5-03",
    "slug": "article-4-and-cession-of-territory-the-berubari-doctrine",
    "title": "Article 4 & Cession of Indian Territory: The Berubari Doctrine",
    "shortDefinition": "Article 4’s rule that state reorganisation laws are enacted by simple majority outside Article 368, and the landmark Berubari Union doctrine (1960) establishing that ceding Indian territory to a foreign state requires a formal Constitutional Amendment.",
    "difficulty": "ADVANCED",
    "topicTitle": "Part I: The Union and Its Territory",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T5-04",
    "slug": "union-territories-architecture-and-100th-amendment-enclaves-exchange",
    "title": "Union Territories: Constitutional Architecture & Enclaves Exchange",
    "shortDefinition": "The constitutional categorization of Union Territories under Part VIII, reasons for their distinct administration, and the historic 100th Constitutional Amendment Act (2015) operationalizing the Indo-Bangladesh Land Boundary Agreement.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part I: The Union and Its Territory",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T6-01",
    "slug": "lapse-of-paramountcy-and-patel-menon-integration-architecture",
    "title": "Lapse of Paramountcy & The Patel-Menon Integration Architecture",
    "shortDefinition": "The legal crisis created by Section 7(1)(b) of the Indian Independence Act 1947 (lapse of British paramountcy over 565 princely states) and the diplomatic strategy of Sardar Vallabhbhai Patel and V.P. Menon utilizing Standstill Agreements, Instruments of Accession, and Privy Purses.",
    "difficulty": "BEGINNER",
    "topicTitle": "Unification and Integration of India",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T6-02",
    "slug": "integration-of-challenging-states-junagadh-hyderabad-and-jammu-kashmir",
    "title": "Integration of Challenging States: Junagadh, Hyderabad & Jammu & Kashmir",
    "shortDefinition": "The distinct historical, legal, and military dynamics of integrating the three recalcitrant princely states: the Junagadh plebiscite (1948), Operation Polo in Hyderabad (1948), and the Instrument of Accession and Article 370 trajectory in Jammu & Kashmir (1947–2019).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Unification and Integration of India",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T6-03",
    "slug": "liberation-of-foreign-enclaves-french-and-portuguese-territories",
    "title": "Liberation of Foreign Enclaves: French and Portuguese Territories",
    "shortDefinition": "The diplomatic transfer of French colonial possessions (Puducherry, Chandernagore) and the military liberation of Portuguese settlements (Goa, Daman & Diu, Dadra & Nagar Haveli via Operation Vijay) into the Indian Union.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Unification and Integration of India",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T6-04",
    "slug": "integration-of-sikkim-from-associate-state-to-full-statehood",
    "title": "Integration of Sikkim: From Associate State to Full Statehood",
    "shortDefinition": "The novel constitutional mechanism of Sikkim’s integration: from a 1950 protectorate under the Chogyal dynasty to an \"Associate State\" via the 35th Amendment (1974), full statehood via the 36th Amendment (1975), and the 1950 four-fold state classification.",
    "difficulty": "ADVANCED",
    "topicTitle": "Unification and Integration of India",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T7-01",
    "slug": "linguistic-demands-and-early-commissions-dhar-and-jvp",
    "title": "Linguistic Demands & Early Commissions: Dhar Commission & JVP Committee",
    "shortDefinition": "The historical emergence of the demand for linguistic states after 1947, the S.K. Dhar Commission’s recommendation prioritizing administrative convenience, and the JVP Committee’s initial rejection of language-based state reorganization.",
    "difficulty": "BEGINNER",
    "topicTitle": "Reorganisation of States & Zonal Councils",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T7-02",
    "slug": "andhra-crisis-and-fazal-ali-commission-src-1953-1955",
    "title": "Andhra Crisis & Fazal Ali Commission (States Reorganisation Commission 1953–55)",
    "shortDefinition": "The creation of Andhra State in 1953 following Potti Sreeramulu’s fast unto death, the appointment of the Fazal Ali Commission (SRC), its acceptance of language as a major criterion, its rejection of \"One Language, One State\", and its four core principles.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Reorganisation of States & Zonal Councils",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T7-03",
    "slug": "states-reorganisation-act-1956-and-historical-evolution-of-indian-states",
    "title": "States Reorganisation Act 1956 & Evolution of States (1956–2020)",
    "shortDefinition": "The landmark 7th Constitutional Amendment Act and States Reorganisation Act 1956 creating 14 States and 6 UTs, followed by the chronological evolution through 1960 (GJ/MH), 1966 (Haryana), 1972 (NE States), 2000 (CG, UK, JH), 2014 (Telangana), 2019 (J&K UTs), and 2020 (UT merger) leading to 28 States and 8 UTs.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Reorganisation of States & Zonal Councils",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T7-04",
    "slug": "zonal-councils-and-north-eastern-council-inter-state-cooperative-architecture",
    "title": "Zonal Councils & North-Eastern Council: Inter-State Cooperative Architecture",
    "shortDefinition": "The statutory framework of Zonal Councils created under Part III of the States Reorganisation Act 1956 and the North-Eastern Council (1971), establishing regional cooperation, linguistic dispute resolution, and economic coordination under the chairmanship of the Union Home Minister.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Reorganisation of States & Zonal Councils",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T8-01",
    "slug": "citizenship-meaning-civil-rights-and-constitutional-articles-5-to-11",
    "title": "Citizenship: Meaning, Civil Rights & Constitutional Articles (5–11)",
    "shortDefinition": "The legal and political meaning of citizenship, exclusive constitutional rights and privileges reserved for citizens (Arts 15, 16, 19, 29, 30, 326), and the transitional constitutional provisions governing citizenship at the commencement of the Constitution (Articles 5 to 11).",
    "difficulty": "BEGINNER",
    "topicTitle": "Part II: Citizenship (Articles 5 to 11)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T8-02",
    "slug": "acquisition-of-indian-citizenship-under-citizenship-act-1955",
    "title": "Acquisition of Indian Citizenship under Citizenship Act 1955",
    "shortDefinition": "The five statutory pathways for acquiring Indian citizenship under the Citizenship Act 1955 (Birth, Descent, Registration, Naturalisation, and Incorporation of Territory) and their evolving legal criteria through landmark amendments (1986, 1992, 2003, 2015, 2019).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part II: Citizenship (Articles 5 to 11)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T8-03",
    "slug": "loss-of-indian-citizenship-renunciation-termination-and-deprivation",
    "title": "Loss of Indian Citizenship: Renunciation, Termination & Deprivation",
    "shortDefinition": "The three legal mechanisms for losing Indian citizenship under Sections 8, 9, and 10 of the Citizenship Act 1955: voluntary Renunciation, automatic Termination upon acquiring foreign nationality, and compulsory Deprivation by the Central Government on grounds of fraud, disloyalty, or treason.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part II: Citizenship (Articles 5 to 11)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T8-04",
    "slug": "single-citizenship-vs-dual-citizenship-and-constitutional-unity",
    "title": "Single Citizenship vs Dual Citizenship & Constitutional Unity",
    "shortDefinition": "The Indian constitutional doctrine of Single Citizenship (Article 9) establishing undivided allegiance to the Union without separate state citizenship, contrasting with dual citizenship federal models like the United States and Switzerland.",
    "difficulty": "BEGINNER",
    "topicTitle": "Part II: Citizenship (Articles 5 to 11)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T8-05",
    "slug": "overseas-citizen-of-india-oci-scheme-and-rights-framework",
    "title": "Overseas Citizen of India (OCI) Scheme & Rights Framework",
    "shortDefinition": "The statutory Overseas Citizen of India (OCI) cardholder scheme instituted under the L.M. Singhvi Committee recommendations, the 2015 merger of PIO into OCI, the extensive economic/educational rights granted under Section 7B, the strict denial of political/constitutional rights under Section 7B(2), and the NRI vs OCI vs PIO matrix.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part II: Citizenship (Articles 5 to 11)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T8-06",
    "slug": "citizenship-policy-renunciation-trends-and-dual-citizenship-debate",
    "title": "Contemporary Citizenship Dynamics: Renunciation Trends & Policy Debate",
    "shortDefinition": "The contemporary socio-economic and policy dimensions of Indian citizenship: the renunciation of citizenship by over 1.6 million Indians since 2011, passport power rankings, economic diplomacy, Golden Visas, and the cost-benefit analysis of permitting conditional dual citizenship.",
    "difficulty": "ADVANCED",
    "topicTitle": "Part II: Citizenship (Articles 5 to 11)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T9-01",
    "slug": "part-3-overview-nature-of-fundamental-rights",
    "title": "Part III Overview & Nature of Fundamental Rights",
    "shortDefinition": "Part III of the Indian Constitution (Articles 12–35), known as the Magna Carta of India, guarantees justifiable basic political and civil rights against State encroachment.",
    "difficulty": "BEGINNER",
    "topicTitle": "Part III: Fundamental Rights",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T9-02",
    "slug": "article-12-definition-of-state",
    "title": "Article 12 — Definition of State & Instrumentalities",
    "shortDefinition": "Article 12 defines the term \"State\" for Part III enforcement, encompassing Union/State executives and legislatures, local authorities, statutory instrumentalities, and the administrative side of the Judiciary.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part III: Fundamental Rights",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T9-03",
    "slug": "article-13-judicial-review-doctrines",
    "title": "Article 13 — Judicial Review & Constitutional Doctrines",
    "shortDefinition": "Article 13 invalidates pre- and post-constitutional laws inconsistent with Fundamental Rights and establishes the constitutional foundation for judicial review through the Doctrines of Severability, Eclipse, and Waiver.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part III: Fundamental Rights",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T9-04",
    "slug": "article-14-equality-non-arbitrariness",
    "title": "Article 14 — Right to Equality & Non-Arbitrariness",
    "shortDefinition": "Article 14 commands that the State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India, prohibiting class legislation while permitting reasonable classification.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part III: Fundamental Rights",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T9-05",
    "slug": "articles-15-16-reservations-protective-discrimination",
    "title": "Articles 15 & 16 — Protective Discrimination & Reservation Jurisprudence",
    "shortDefinition": "Articles 15 and 16 prohibit discrimination on specified grounds while enabling affirmative action, creamy layer exclusions, EWS quotas (103rd Amendment), and reservation in public employment and education.",
    "difficulty": "ADVANCED",
    "topicTitle": "Part III: Fundamental Rights",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T9-06",
    "slug": "articles-17-18-abolition-untouchability-titles",
    "title": "Articles 17 & 18 — Abolition of Untouchability & Titles",
    "shortDefinition": "Article 17 absolutely abolishes untouchability in any form, enforceable against the State and private individuals, while Article 18 abolishes aristocratic titles to establish civic equality.",
    "difficulty": "BEGINNER",
    "topicTitle": "Part III: Fundamental Rights",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T9-07",
    "slug": "article-19-democratic-freedoms-civil-liberties",
    "title": "Article 19 — Democratic Freedoms & Contemporary Civil Liberties",
    "shortDefinition": "Article 19 guarantees 6 fundamental democratic freedoms to citizens, subject to exhaustive, reasonable restrictions under Articles 19(2) through 19(6), covering modern civil liberties like internet access, surveillance safeguards, and peaceful assembly.",
    "difficulty": "ADVANCED",
    "topicTitle": "Part III: Fundamental Rights",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T9-08",
    "slug": "article-20-conviction-protections",
    "title": "Article 20 — Protection in Respect of Conviction for Offences",
    "shortDefinition": "Article 20 provides vital criminal justice protections: prohibition of ex-post facto penal laws (20(1)), prohibition against double jeopardy (20(2)), and prohibition against self-incrimination (20(3)).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part III: Fundamental Rights",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T9-09",
    "slug": "article-21-21a-life-liberty-privacy-education",
    "title": "Article 21 & 21A — Life, Liberty, Privacy & Education",
    "shortDefinition": "Article 21 guarantees life and personal liberty except according to procedure established by law (expanded into substantive due process), encompassing privacy, dignity, living wills, and the Article 21A Right to Education.",
    "difficulty": "ADVANCED",
    "topicTitle": "Part III: Fundamental Rights",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T9-10",
    "slug": "article-22-arrest-safeguards-preventive-detention",
    "title": "Article 22 — Punitive Arrest Safeguards & Preventive Detention",
    "shortDefinition": "Article 22 establishes dual constitutional regimes: procedural safeguards against ordinary punitive arrest (22(1)–(2)) and constitutional limitations/safeguards on preventive detention laws (22(4)–(7)).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part III: Fundamental Rights",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T9-11",
    "slug": "articles-23-24-right-against-exploitation",
    "title": "Articles 23 & 24 — Right Against Exploitation",
    "shortDefinition": "Articles 23 and 24 prohibit human trafficking, begar, forced labour, and the employment of children below 14 years in hazardous occupations, creating enforceable horizontal rights against exploitation.",
    "difficulty": "BEGINNER",
    "topicTitle": "Part III: Fundamental Rights",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T9-12",
    "slug": "articles-25-28-freedom-of-religion-essential-practices",
    "title": "Articles 25–28 — Freedom of Religion & Essential Religious Practices",
    "shortDefinition": "Articles 25–28 guarantee individual freedom of conscience and propagation, collective religious institutional management, tax immunity for religious promotion, and freedom from religious instruction in State schools, governed by the Essential Religious Practices doctrine.",
    "difficulty": "ADVANCED",
    "topicTitle": "Part III: Fundamental Rights",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T9-13",
    "slug": "articles-29-30-minority-cultural-educational-rights",
    "title": "Articles 29 & 30 — Cultural & Educational Rights of Minorities",
    "shortDefinition": "Articles 29 and 30 protect the cultural identity of all distinct citizen groups and guarantee religious and linguistic minorities the fundamental right to establish and administer educational institutions.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part III: Fundamental Rights",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T9-14",
    "slug": "articles-31-300a-property-due-process",
    "title": "Articles 31 & 300A — Property Abolition & Due Process Jurisprudence",
    "shortDefinition": "Traces the constitutional transition of the Right to Property from a Fundamental Right (Article 31) to a constitutional/legal right (Article 300A by the 44th Amendment), alongside contemporary Supreme Court directives against punitive property demolitions (\"Bulldozer Justice\").",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part III: Fundamental Rights",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T9-15",
    "slug": "article-32-writs-constitutional-remedies",
    "title": "Article 32 & Writs — Right to Constitutional Remedies",
    "shortDefinition": "Article 32 guarantees the fundamental right to approach the Supreme Court for the enforcement of Part III rights, empowering the Court to issue 5 prerogative writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo Warranto.",
    "difficulty": "ADVANCED",
    "topicTitle": "Part III: Fundamental Rights",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T9-16",
    "slug": "articles-33-35-amendability-basic-structure",
    "title": "Articles 33–35 & Amendability — Limitations & Basic Structure",
    "shortDefinition": "Articles 33–35 empower Parliament to modify Fundamental Rights for armed forces, indemnify acts during Martial Law, and exclusively legislate for Part III, framed within the historical amendability debate from Shankari Prasad (1951) to Kesavananda Bharati (1973) and Minerva Mills (1980).",
    "difficulty": "ADVANCED",
    "topicTitle": "Part III: Fundamental Rights",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T10-01",
    "slug": "dpsp-nature-justiciability-article-37",
    "title": "Nature, Features & Justiciability of Directive Principles (Articles 36–37)",
    "shortDefinition": "Part IV of the Indian Constitution (Articles 36–51) embodies the ideals of a Welfare State and socio-economic democracy, borrowed from Ireland, which are non-justiciable under Article 37 yet declared fundamental in governance.",
    "difficulty": "BEGINNER",
    "topicTitle": "Part IV: Directive Principles of State Policy",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T10-02",
    "slug": "dpsp-classification-socialistic-gandhian-liberal",
    "title": "Three-Fold Typology & Constitutional Amendments of DPSPs",
    "shortDefinition": "Although the Constitution does not formally classify DPSPs, they are categorized based on their ideological content into Socialistic, Gandhian, and Liberal-Intellectual principles, enriched by the 42nd, 44th, 86th, and 97th Amendments.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part IV: Directive Principles of State Policy",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T10-03",
    "slug": "article-44-uniform-civil-code-jurisprudence",
    "title": "Article 44 & The Uniform Civil Code (UCC) Jurisprudence",
    "shortDefinition": "Article 44 directs the State to secure for citizens a Uniform Civil Code throughout the territory of India, balancing religious personal laws against gender equality, constitutional morality, and contemporary legislative models like the Uttarakhand UCC Act 2024.",
    "difficulty": "ADVANCED",
    "topicTitle": "Part IV: Directive Principles of State Policy",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T10-04",
    "slug": "part-3-part-4-conflict-harmonious-construction",
    "title": "Fundamental Rights vs DPSPs Conflict & Harmonious Construction",
    "shortDefinition": "Traces the constitutional struggle between Part III and Part IV from Champakam Dorairajan (1951) to Kesavananda Bharati (1973) and Minerva Mills (1980), establishing the Doctrine of Harmonious Construction and the 2024 Property Owners Association benchmark on Article 39(b).",
    "difficulty": "ADVANCED",
    "topicTitle": "Part IV: Directive Principles of State Policy",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T10-05",
    "slug": "directivism-outside-part-4-implementation-schemes",
    "title": "Directives Outside Part IV & Statutory Implementation Trajectory",
    "shortDefinition": "Explores non-Part IV constitutional directives (Articles 335, 350A, 351) alongside the vast legislative and welfare architecture created by the Union and States to realize the Directive Principles.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part IV: Directive Principles of State Policy",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T11-01",
    "slug": "president-constitutional-status-electoral-college-impeachment",
    "title": "President of India: Constitutional Status, Electoral College & Impeachment",
    "shortDefinition": "The President as the formal Head of State and supreme commander of armed forces (Art 52-53), the proportional representation electoral college formula (Arts 54-55), and the strict quasi-judicial impeachment procedure for violation of the Constitution (Art 61).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "The Union Executive: President, Vice-President, PM & Council of Ministers",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T11-02",
    "slug": "president-powers-veto-and-ordinance-making-power",
    "title": "President's Powers: Veto Powers (Art 111) & Ordinance-Making Power (Art 123)",
    "shortDefinition": "The tripartite presidential veto powers over Parliamentary legislation (Absolute, Suspensive, Pocket Veto) and the exceptional legislative power to promulgate Ordinances under Article 123 with strict judicial limitations against re-promulgation (D.C. Wadhwa, Krishna Kumar Singh).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "The Union Executive: President, Vice-President, PM & Council of Ministers",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T11-03",
    "slug": "president-judicial-and-pardoning-powers-article-72",
    "title": "President's Judicial & Pardoning Powers (Article 72)",
    "shortDefinition": "The executive clemency powers of the President under Article 72 across five forms of mercy (Pardon, Commutation, Remission, Respite, Reprieve) and the judicial review jurisprudence governing executive discretion (Kehar Singh, Maru Ram, Epuru Sudhakar, Shatrughan Chauhan).",
    "difficulty": "ADVANCED",
    "topicTitle": "The Union Executive: President, Vice-President, PM & Council of Ministers",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T11-04",
    "slug": "vice-president-constitutional-status-election-removal",
    "title": "Vice-President of India: Status, Election (Art 66), Removal (Art 67) & Role",
    "shortDefinition": "The Vice-President as the second-highest constitutional dignitary (Art 63), ex-officio Chairman of Rajya Sabha (Art 64), electoral college comprising all MPs (Art 66), and unique removal procedure by Effective Majority in Rajya Sabha (Art 67).",
    "difficulty": "BEGINNER",
    "topicTitle": "The Union Executive: President, Vice-President, PM & Council of Ministers",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T11-05",
    "slug": "prime-minister-and-central-council-of-ministers-architecture",
    "title": "Prime Minister & Central Council of Ministers: Architecture & Collective Responsibility",
    "shortDefinition": "The Prime Minister as the real executive (De Facto), Council of Ministers aiding and advising the President (Arts 74-75), 42nd/44th Amendments binding advice, 91st Amendment 15% size ceiling, and collective responsibility to Lok Sabha (Art 75(3)).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "The Union Executive: President, Vice-President, PM & Council of Ministers",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T11-06",
    "slug": "attorney-general-of-india-constitutional-status-and-powers",
    "title": "Attorney General of India (Article 76) & Law Officers Architecture",
    "shortDefinition": "The Attorney General as the highest law officer of India (Art 76), qualified as a Supreme Court Judge, holding office during presidential pleasure, with unique rights to participate in Parliamentary proceedings without voting (Art 88).",
    "difficulty": "BEGINNER",
    "topicTitle": "The Union Executive: President, Vice-President, PM & Council of Ministers",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T11-07",
    "slug": "coalition-governments-common-minimum-programme-hung-assemblies-pressure-groups",
    "title": "Coalition Governments, Common Minimum Programme, Hung Assemblies & Pressure Groups",
    "shortDefinition": "Evolution and dynamics of coalition governance in India (1989–2014 multi-party coalition era vs post-2014 dominant alliances), Common Minimum Programme (CMP), constitutional conventions on hung assemblies (Sarkaria and Punchhi Commission invitation hierarchy), and the typology of pressure groups (Almond-Finer classification: associational, institutional, non-associational, anomic).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "The Union Executive: President, Vice-President, PM & Council of Ministers",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T12-01",
    "slug": "governor-constitutional-dual-role-appointment-and-removal",
    "title": "Governor of the State: Constitutional Dual Role, Appointment & Removal",
    "shortDefinition": "The Governor as the constitutional Head of State and representative of the Centre (Art 153-154), appointment under presidential warrant (Art 155), pleasure tenure (Art 156), and landmark judicial restraints against arbitrary removal (B.P. Singhal 2010).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part VI: The State Executive (Governor, Chief Minister & Advocate General)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T12-02",
    "slug": "governor-discretionary-powers-bill-reservation-and-ordinance",
    "title": "Governor's Discretionary Powers (Art 163), Bill Reservation (Arts 200–201) & Ordinance (Art 213)",
    "shortDefinition": "The explicit constitutional and situational discretion of the Governor under Article 163, mandatory floor test jurisprudence (S.R. Bommai), reservation of state bills for Presidential consideration (Arts 200-201), and state ordinance power (Art 213).",
    "difficulty": "ADVANCED",
    "topicTitle": "Part VI: The State Executive (Governor, Chief Minister & Advocate General)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T12-03",
    "slug": "chief-minister-and-state-council-of-ministers-architecture",
    "title": "Chief Minister & State Council of Ministers: Constitutional Architecture",
    "shortDefinition": "The Chief Minister as the real state executive, collective responsibility to the Legislative Assembly (Art 164), 91st Amendment size limits (15% ceiling, minimum 12), and aid & advice jurisprudence (Shamsher Singh, S.R. Bommai).",
    "difficulty": "BEGINNER",
    "topicTitle": "Part VI: The State Executive (Governor, Chief Minister & Advocate General)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T12-04",
    "slug": "advocate-general-for-the-state-constitutional-status-and-powers",
    "title": "Advocate General for the State (Article 165) & Rights in Legislature (Art 177)",
    "shortDefinition": "The Advocate General as the highest law officer in the State (Art 165), qualified as a High Court Judge, holding office during governor’s pleasure, with the constitutional right to participate in State Legislature proceedings without voting (Art 177).",
    "difficulty": "BEGINNER",
    "topicTitle": "Part VI: The State Executive (Governor, Chief Minister & Advocate General)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T13-01",
    "slug": "all-india-services-and-constitutional-framework-of-public-services",
    "title": "All-India Services (Article 312) & Framework of Public Services (Arts 308–309)",
    "shortDefinition": "The constitutional classification of civil services in India (Part XIV), the creation of All-India Services under Article 312 via Rajya Sabha special federal resolution, and the dual-control administrative framework (IAS, IPS, IFS).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part XIV: Civil Services, Doctrine of Pleasure & Constitutional Safeguards",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T13-02",
    "slug": "doctrine-of-pleasure-and-article-311-constitutional-safeguards",
    "title": "Doctrine of Pleasure (Art 310) & Article 311 Safeguards with Exceptions",
    "shortDefinition": "The British common-law Doctrine of Pleasure embodied in Article 310, constitutional safeguards against arbitrary dismissal under Article 311 (opportunity of hearing), and the three critical statutory exceptions (conviction, impracticability, state security) upheld in Tulsiram Patel (1985).",
    "difficulty": "ADVANCED",
    "topicTitle": "Part XIV: Civil Services, Doctrine of Pleasure & Constitutional Safeguards",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T14-01",
    "slug": "parliament-architecture-bicameralism-composition-and-sessions",
    "title": "Parliament Architecture: Bicameralism (Art 79), Composition & Sessions",
    "shortDefinition": "The tripartite structure of Parliament (President, Rajya Sabha, Lok Sabha under Art 79), federal composition of Rajya Sabha (Art 80), democratic representation in Lok Sabha (Art 81), and constitutional rules for sessions, prorogation, and quorum (Arts 83, 85, 100).",
    "difficulty": "BEGINNER",
    "topicTitle": "Part V: The Union Legislature (Parliament Architecture, Procedure & Budget)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T14-02",
    "slug": "presiding-officers-speaker-vs-chairman-and-disqualifications",
    "title": "Presiding Officers: Speaker vs Chairman (Arts 89, 93) & Disqualifications",
    "shortDefinition": "The constitutional roles and powers of the Speaker of Lok Sabha and Chairman of Rajya Sabha (Arts 89, 93), casting vote (Art 100), Money Bill certification (Art 110(3)), and the dual disqualification frameworks under Article 102 vs the 10th Schedule (Kihoto Hollohan).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part V: The Union Legislature (Parliament Architecture, Procedure & Budget)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T14-03",
    "slug": "legislative-enactments-classification-of-bills-and-joint-sittings",
    "title": "Legislative Enactments: Classification of Bills (Arts 107–110, 117) & Joint Sittings (Art 108)",
    "shortDefinition": "The four-tier classification of parliamentary bills (Ordinary, Money, Financial Types I & II), Speaker’s Money Bill certification, Article 108 Joint Sittings architecture with strict exclusions (Money Bills & CAAs), and Article 107 rules on the lapse of bills upon dissolution.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part V: The Union Legislature (Parliament Architecture, Procedure & Budget)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T14-04",
    "slug": "parliamentary-financial-control-and-budget-procedure",
    "title": "Parliamentary Financial Control: Budget Procedure & Cut Motions (Arts 112–116)",
    "shortDefinition": "The six-stage procedure of the Union Budget (Annual Financial Statement under Art 112), distinction between Charged and Voted expenditure, Demands for Grants (Art 113), the three Cut Motions (Policy, Economy, Token), the Guillotine, and Appropriation vs Finance Bills.",
    "difficulty": "ADVANCED",
    "topicTitle": "Part V: The Union Legislature (Parliament Architecture, Procedure & Budget)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T14-05",
    "slug": "parliamentary-standing-committees-pac-estimates-copu-and-drscs",
    "title": "Parliamentary Standing Committees: PAC (1921), Estimates (1950), COPU (1964) & DRSCs",
    "shortDefinition": "The three premier Financial Standing Committees (Public Accounts Committee, Estimates Committee with 30 LS-only members, Committee on Public Undertakings), the 24 Departmentally Related Standing Committees (DRSCs), and the constitutional ban on ministerial membership.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part V: The Union Legislature (Parliament Architecture, Procedure & Budget)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T14-06",
    "slug": "parliamentary-privileges-motions-and-procedural-devices",
    "title": "Parliamentary Privileges (Art 105), Motions & Procedural Devices",
    "shortDefinition": "Constitutional privileges and immunities of Parliament (Article 105), individual vs collective privileges, parliamentary devices (Question Hour, Zero Hour, Calling Attention), and major motions (No-Confidence, Adjournment, Censure).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part V: The Union Legislature (Parliament Architecture, Procedure & Budget)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T15-01",
    "slug": "state-legislature-architecture-and-creation-abolition-of-councils",
    "title": "State Legislature Architecture & Creation/Abolition of Councils (Art 169)",
    "shortDefinition": "The constitutional structure of State Legislatures under Part VI, bicameral vs unicameral states (Article 168), Legislative Assembly strength (Article 170), and the two-stage procedure for creating or abolishing Legislative Councils under Article 169.",
    "difficulty": "BEGINNER",
    "topicTitle": "Part VI: The State Legislature (Vidhan Sabha, Vidhan Parishad & Procedure)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T15-02",
    "slug": "composition-of-legislative-council-and-governor-nominations",
    "title": "Composition of Legislative Council (Art 171) & 5-Tier Electoral Formula",
    "shortDefinition": "The structural strength limits of the Legislative Council (max 1/3rd of Assembly, min 40 under Art 171), the 5-tier proportional representation electoral formula, and the 1/6th Governor nomination across 5 fields (including Cooperative Movement).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part VI: The State Legislature (Vidhan Sabha, Vidhan Parishad & Procedure)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T15-03",
    "slug": "state-legislative-procedure-and-delaying-powers-of-councils",
    "title": "State Legislative Procedure: 4-Month Delaying Powers & Absence of Joint Sitting",
    "shortDefinition": "The legislative relationship between the Vidhan Sabha and Vidhan Parishad, the maximum 4-month delaying power of the Council on ordinary bills (Articles 197–198), total absence of joint sitting in State Legislatures, and the ultimate supremacy of the Legislative Assembly.",
    "difficulty": "ADVANCED",
    "topicTitle": "Part VI: The State Legislature (Vidhan Sabha, Vidhan Parishad & Procedure)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T15-04",
    "slug": "state-legislature-privileges-disqualifications-and-rajasthan-assembly",
    "title": "State Legislature: Privileges (Art 194), Disqualifications (Art 191) & Rajasthan Assembly",
    "shortDefinition": "State legislative powers, privileges and immunities under Article 194, disqualification grounds for MLAs/MLCs under Article 191, and the historical architecture of the Rajasthan Legislative Assembly (200 unicameral seats, SC/ST reservations).",
    "difficulty": "BEGINNER",
    "topicTitle": "Part VI: The State Legislature (Vidhan Sabha, Vidhan Parishad & Procedure)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T16-01",
    "slug": "supreme-court-architecture-composition-collegium-and-removal",
    "title": "Supreme Court Architecture: Composition (34 Judges), Collegium & Removal",
    "shortDefinition": "The constitutional framework of the Supreme Court of India under Articles 124–128, evolution of the Collegium system through the Three Judges Cases (1981, 1993, 1998) and NJAC verdict (2015), and the impeachment removal procedure under Article 124(4) read with the Judges (Inquiry) Act 1968.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part V: The Union Judiciary (The Supreme Court of India)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T16-02",
    "slug": "supreme-court-jurisdiction-original-appellate-and-special-leave",
    "title": "Supreme Court Jurisdiction: Original (Art 131), Appellate & SLP (Art 136)",
    "shortDefinition": "The multi-tiered jurisdictional architecture of the Supreme Court: Exclusive Federal Original Jurisdiction (Art 131) and its exceptions, Constitutional/Civil/Criminal Appellate Jurisdiction (Arts 132–134), and the plenary discretionary nature of Special Leave Petitions under Article 136.",
    "difficulty": "ADVANCED",
    "topicTitle": "Part V: The Union Judiciary (The Supreme Court of India)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T16-03",
    "slug": "advisory-jurisdiction-article-143-and-inherent-powers-141-142",
    "title": "Advisory Jurisdiction (Art 143), Complete Justice (Art 142) & Law of Land (Art 141)",
    "shortDefinition": "The consultative role of the Supreme Court under Article 143 (Presidential references and their binding/non-binding character), the inherent power to do \"Complete Justice\" under Article 142, binding precedent under Article 141, and Court of Record contempt powers under Article 129.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part V: The Union Judiciary (The Supreme Court of India)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T17-01",
    "slug": "high-court-architecture-appointments-qualifications-and-transfers",
    "title": "High Court Architecture: Appointments, Qualifications & Transfers (Arts 214–224A)",
    "shortDefinition": "The constitutional framework of High Courts in India (25 High Courts under Arts 214–231), common High Courts (7th CAA 1956), judicial appointments via the High Court Collegium, qualifications (and the absence of the \"distinguished jurist\" category), retirement age (62 years), and transfers under Article 222.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part VI: State Judiciary (High Courts & Subordinate Courts)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T17-02",
    "slug": "high-court-writ-jurisdiction-art-226-vs-art-32-and-superintendence",
    "title": "High Court Jurisdiction: Writ Jurisdiction (Art 226 vs Art 32) & Superintendence (Art 227)",
    "shortDefinition": "The expansive writ jurisdiction of High Courts under Article 226 (enforcing Fundamental Rights and other legal rights), structural comparison with Supreme Court Article 32, supervisory jurisdiction over all courts and tribunals under Article 227, and Court of Record status under Article 215.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part VI: State Judiciary (High Courts & Subordinate Courts)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T17-03",
    "slug": "subordinate-judiciary-architecture-and-high-court-control",
    "title": "Subordinate Judiciary Architecture (Arts 233–237) & High Court Control (Art 235)",
    "shortDefinition": "The constitutional framework of the subordinate judiciary under Part VI, appointment and posting of District Judges (Art 233), recruitment of judicial officers (Art 234), and the complete administrative and disciplinary control of the High Court over lower courts under Article 235.",
    "difficulty": "BEGINNER",
    "topicTitle": "Part VI: State Judiciary (High Courts & Subordinate Courts)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T17-04",
    "slug": "rajasthan-high-court-architecture-and-judicial-administration",
    "title": "Rajasthan High Court Architecture: Jodhpur Principal Seat & Jaipur Bench",
    "shortDefinition": "The historical evolution of the Rajasthan High Court established under the Rajasthan High Court Ordinance 1949, inauguration at Jodhpur on August 29, 1949, first Chief Justice Kamala Kant Verma, Satyanarayan Rao Committee (1958), the permanent Jaipur Bench (1976/1977), and sanctioned judicial strength.",
    "difficulty": "BEGINNER",
    "topicTitle": "Part VI: State Judiciary (High Courts & Subordinate Courts)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T18-01",
    "slug": "public-interest-litigation-pil-locus-standi-and-epistolary-jurisdiction",
    "title": "Public Interest Litigation (PIL): Relaxation of Locus Standi & Epistolary Jurisdiction",
    "shortDefinition": "The transformative doctrine of Public Interest Litigation (PIL) pioneered by Justice V.R. Krishna Iyer and Justice P.N. Bhagwati, the democratic relaxation of the strict rule of locus standi, epistolary jurisdiction (letters as writ petitions), and landmark public interest jurisprudence.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part XIV-A: Judicial Innovation, PIL & Tribunals Architecture",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T18-02",
    "slug": "judicial-review-vs-activism-vs-judicial-overreach",
    "title": "Judicial Review vs Judicial Activism vs Judicial Overreach",
    "shortDefinition": "The conceptual boundaries separating legitimate Judicial Review (examining constitutionality under Articles 13, 32, 226), positive Judicial Activism (proactive rights enforcement during executive inaction), and unconstitutional Judicial Overreach (transgressing into policy-making and legislative domains).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part XIV-A: Judicial Innovation, PIL & Tribunals Architecture",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T18-03",
    "slug": "tribunals-architecture-article-323a-vs-323b-and-l-chandra-kumar",
    "title": "Tribunals Architecture: Part XIV-A (42nd CAA), Art 323A vs 323B & L. Chandra Kumar",
    "shortDefinition": "The constitutional framework of administrative and specialized tribunals under Part XIV-A (Articles 323A & 323B inserted by 42nd CAA 1976), Central Administrative Tribunal (CAT), distinction between Art 323A and 323B, and the landmark 7-judge bench ruling in L. Chandra Kumar v. Union of India (1997) subjecting all tribunals to High Court Division Bench judicial review under Articles 226/227.",
    "difficulty": "ADVANCED",
    "topicTitle": "Part XIV-A: Judicial Innovation, PIL & Tribunals Architecture",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T19-01",
    "slug": "nature-of-indian-federalism-and-asymmetric-structure",
    "title": "Nature of Indian Federalism: Quasi-Federal Character & Asymmetric Provisions",
    "shortDefinition": "The constitutional nature of Indian federalism under Article 1 (\"Union of States\"), K.C. Wheare’s \"quasi-federal\" classification, strong unitary/centripetal features, asymmetric federalism through special provisions (Articles 371 to 371-J) and 5th/6th Schedules, and federalism as an inviolable Basic Structure doctrine (S.R. Bommai 1994).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Centre-State Relations, Federal Finance & Inter-State Governance",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T19-02",
    "slug": "legislative-relations-three-lists-residuary-powers-and-exceptions",
    "title": "Legislative Relations: Three Lists (7th Schedule), Residuary Powers & Exceptions",
    "shortDefinition": "The constitutional division of legislative powers under Part XI (Articles 245–255), territorial legislative limits (Art 245 & Territorial Nexus), 7th Schedule Three Lists, residuary powers with Parliament (Art 248), 5 extraordinary circumstances for central legislation on State List (Arts 249, 250, 252, 253, 356), Repugnancy under Article 254, and judicial doctrines (Pith & Substance, Colourable Legislation).",
    "difficulty": "ADVANCED",
    "topicTitle": "Centre-State Relations, Federal Finance & Inter-State Governance",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T19-03",
    "slug": "administrative-relations-directives-all-india-services-and-water-disputes",
    "title": "Administrative Relations: Directives (Arts 256-257), Sanctions (Art 365) & All India Services",
    "shortDefinition": "The administrative hierarchy under Part XI Chapter II (Articles 256–263), Union executive directives to States (Arts 256, 257), constitutional sanction under Article 365, the Union’s duty under Article 355, All India Services under Article 312, inter-state delegation (Arts 258/258A), Full Faith and Credit (Art 261), and Inter-State River Water Disputes under Article 262.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Centre-State Relations, Federal Finance & Inter-State Governance",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T19-04",
    "slug": "inter-state-council-zonal-councils-and-federal-commissions",
    "title": "Inter-State Council (Art 263), Zonal Councils & Federal Commissions",
    "shortDefinition": "Institutions fostering cooperative federalism: the constitutional Inter-State Council under Article 263 (established 1990 by Presidential Order on Sarkaria Commission advice), 5 statutory Zonal Councils under the States Reorganisation Act 1956 and North-Eastern Council (1971), and landmark federal commission recommendations (Sarkaria 1983-88, Punchhi 2007-10, NCRWC 2002).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Centre-State Relations, Federal Finance & Inter-State Governance",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T19-05",
    "slug": "financial-relations-finance-commission-and-gst-council",
    "title": "Financial Relations: Division of Taxes, Finance Commission (Art 280) & GST Council",
    "shortDefinition": "The constitutional framework of fiscal federalism under Part XII (Articles 268–293), the 101st CAA 2016 Goods and Services Tax architecture (Art 246A & GST Council Art 279A), Finance Commission under Article 280 (vertical vs horizontal devolution criteria), Statutory Grants (Art 275) vs Discretionary Grants (Art 282), and borrowing rules (Arts 292-293).",
    "difficulty": "ADVANCED",
    "topicTitle": "Centre-State Relations, Federal Finance & Inter-State Governance",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T19-06",
    "slug": "inter-state-river-water-disputes-boundary-adjudication-sub-classification-jurisprudence",
    "title": "Inter-State River Water Disputes (Article 262), Boundary Adjudication & Sub-Classification Jurisprudence",
    "shortDefinition": "Constitutional conflict-resolution mechanisms: Inter-State River Water Disputes Act 1956 under Article 262 (exclusive tribunal adjudication, ouster of Supreme Court original jurisdiction under Art 262(2)), original jurisdiction in boundary disputes under Article 131, 2nd Administrative Reforms Commission (ARC) conflict management blueprint, and affirmative action jurisprudence including the historic 7-judge Supreme Court Constitution Bench ruling in State of Punjab v. Davinder Singh (2024) permitting sub-classification of Scheduled Castes and Scheduled Tribes under Article 341/342 based on empirical backwardness.",
    "difficulty": "ADVANCED",
    "topicTitle": "Centre-State Relations, Federal Finance & Inter-State Governance",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T20-01",
    "slug": "national-emergency-article-352-grounds-approval-and-safeguards",
    "title": "National Emergency (Article 352): Grounds, Approval & 44th CAA Safeguards",
    "shortDefinition": "The constitutional framework of National Emergency under Part XVIII (Articles 352–360), three explicit grounds (War, External Aggression, Armed Rebellion), the transformative safeguards enacted by the 44th Constitutional Amendment Act 1978 (written cabinet advice, 1-month approval, Special Majority in both houses, 6-month periodic renewal, and disapproval motion mechanism).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part XVIII: Emergency Provisions & Constitutional Safeguards",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T20-02",
    "slug": "national-emergency-effects-and-fundamental-rights-art-358-vs-359",
    "title": "National Emergency Impact: Federal Balance & Fundamental Rights (Art 358 vs Art 359)",
    "shortDefinition": "The constitutional consequences of National Emergency on executive, legislative, and financial relations, extension of Lok Sabha tenure, and the fundamental distinction between Article 358 (automatic suspension of Article 19 for external emergency only) and Article 359 (Presidential suspension of right to move court, with Articles 20 & 21 never suspendable under the 44th Amendment).",
    "difficulty": "ADVANCED",
    "topicTitle": "Part XVIII: Emergency Provisions & Constitutional Safeguards",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T20-03",
    "slug": "presidents-rule-article-356-and-sr-bommai-doctrine",
    "title": "President's Rule (Articles 356 & 365): Grounds, Procedure & S.R. Bommai Doctrine",
    "shortDefinition": "State Emergency under Article 356 (breakdown of constitutional machinery) and Article 365 (failure to follow central directions), parliamentary approval within 2 months by Simple Majority, maximum 3-year limit with 44th CAA restrictions, dismissal of state executive and legislative delegation, and the landmark 9-judge ruling in S.R. Bommai v. Union of India (1994) establishing judicial review, floor test primacy, and basic structure protection.",
    "difficulty": "ADVANCED",
    "topicTitle": "Part XVIII: Emergency Provisions & Constitutional Safeguards",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T20-04",
    "slug": "financial-emergency-article-360-invocation-and-consequences",
    "title": "Financial Emergency (Article 360): Invocation, Indefinite Duration & Distinctive Powers",
    "shortDefinition": "The constitutional architecture of Financial Emergency under Article 360 (threat to financial stability or credit of India), parliamentary approval within 2 months by Simple Majority, the unique rule of indefinite continuation without periodic renewal, executive directions to reduce public salaries (including Supreme Court and High Court judges), reservation of state money bills, and the historical fact that it has never been declared in India.",
    "difficulty": "BEGINNER",
    "topicTitle": "Part XVIII: Emergency Provisions & Constitutional Safeguards",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T20-05",
    "slug": "national-integration-mechanisms-inter-state-council-internal-security-framework",
    "title": "National Integration Mechanisms, Inter-State Council & Internal Security Framework",
    "shortDefinition": "Constitutional and institutional mechanisms for national integration: National Integration Council (1961), Inter-State Council (Article 263, established 1990), Zonal Councils (States Reorganisation Act 1956), Union duty under Article 355, Central Armed Police Forces (CAPF), and statutory internal security frameworks (NIA Act, UAPA, AFSPA).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Emergency Provisions & Federal Security Architecture",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T21-01",
    "slug": "73rd-amendment-panchayati-raj-architecture-and-devolution",
    "title": "73rd Constitutional Amendment Act: Panchayati Raj Architecture & 3-Tier Devolution",
    "shortDefinition": "Constitutionalization of rural local self-government under Part IX (Articles 243–243O) and Eleventh Schedule (29 matters), establishing mandatory 3-tier PRIs, Gram Sabha, State Election Commission (Art 243K), and State Finance Commission (Art 243I).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part IX & IX-A: Rural & Urban Local Governance (73rd & 74th CAAs)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T21-02",
    "slug": "pesa-act-1996-tribal-self-governance-fifth-schedule",
    "title": "PESA Act (1996) & Tribal Self-Governance in Fifth Schedule Areas",
    "shortDefinition": "The Provisions of the Panchayats (Extension to the Scheduled Areas) Act 1996, extending Part IX with critical modifications to Fifth Schedule areas across 10 states, granting Gram Sabhas sovereign authority over natural resources, minor forest produce, and land preservation.",
    "difficulty": "ADVANCED",
    "topicTitle": "Part IX & IX-A: Rural & Urban Local Governance (73rd & 74th CAAs)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T21-03",
    "slug": "74th-amendment-urban-local-bodies-and-metropolitan-planning",
    "title": "74th Constitutional Amendment Act: Urban Local Bodies & Metropolitan Planning",
    "shortDefinition": "Constitutionalization of Urban Local Bodies (ULBs) under Part IX-A (Articles 243P–243ZG) and Twelfth Schedule (18 matters), establishing 3 municipal tiers, Wards Committees, District Planning Committees (Art 243ZD), and Metropolitan Planning Committees (Art 243ZE).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part IX & IX-A: Rural & Urban Local Governance (73rd & 74th CAAs)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T21-04",
    "slug": "local-governance-rajasthan-nagaur-inception-acts-and-devolution",
    "title": "Local Governance in Rajasthan: Nagaur Inception, 5-Tier Devolution & Rajasthan Acts",
    "shortDefinition": "The pioneering historic evolution of Panchayati Raj inaugurated at Nagaur, Rajasthan on October 2, 1959, the major committee trajectories, and modern Rajasthan-specific local governance features (Rajasthan Panchayati Raj Act 1994, 50% women quota, Ward Sabha).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Part IX & IX-A: Rural & Urban Local Governance (73rd & 74th CAAs)",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T22-01",
    "slug": "election-commission-of-india-article-324-and-2023-appointment-act",
    "title": "Election Commission of India (Article 324): Composition, Independence & CEC/EC Appointment Act 2023",
    "shortDefinition": "The constitutional framework of the Election Commission under Article 324, its multi-member evolution, removal protections, plenary powers under Mohinder Singh Gill (1978), the Anoop Baranwal (2023) bench, and the CEC & Other ECs (Appointment) Act 2023.",
    "difficulty": "ADVANCED",
    "topicTitle": "Constitutional Institutions: Election Commission of India & Comptroller and Auditor General",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T22-02",
    "slug": "electoral-reforms-and-representation-of-the-people-acts-1950-1951",
    "title": "Electoral Reforms & Representation of the People Acts (1950 & 1951)",
    "shortDefinition": "The statutory dual-statute architecture governing Indian democracy—RPA 1950 (seats, delimitation, voter rolls) vs RPA 1951 (conduct of elections, qualifications, disqualifications under Section 8, corrupt practices, anti-defection, and electoral transparency).",
    "difficulty": "ADVANCED",
    "topicTitle": "Constitutional Institutions: Election Commission of India & Comptroller and Auditor General",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T22-03",
    "slug": "comptroller-and-auditor-general-of-india-articles-148-151",
    "title": "Comptroller and Auditor-General of India (Articles 148–151): Independence & Duties",
    "shortDefinition": "The constitutional office of the CAG under Articles 148–151 as the supreme guardian of the public purse, with institutional independence protections, duties under the CAG DPC Act 1971, separation of accounting from audit (1976), and partnership with the Public Accounts Committee.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Constitutional Institutions: Election Commission of India & Comptroller and Auditor General",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T22-04",
    "slug": "public-audit-spectrum-regulatory-propriety-performance-audit",
    "title": "Public Audit Architecture & Financial Oversight: Regulatory, Propriety & Performance Audit",
    "shortDefinition": "The three-dimensional methodology of public audit (Regulatory, Propriety, and Performance/Efficiency audit), institutional limitations (post-mortem nature, secret service limits), and expanded jurisdiction over PPPs and private discoms.",
    "difficulty": "ADVANCED",
    "topicTitle": "Constitutional Institutions: Election Commission of India & Comptroller and Auditor General",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T22-05",
    "slug": "determinants-voting-behavior-evm-vvpat-architecture-electoral-technology-reforms",
    "title": "Determinants of Voting Behavior, EVM-VVPAT Architecture & Electoral Technology Reforms",
    "shortDefinition": "Structural determinants of Indian voting behavior (primordial identity vs governance performance, welfare delivery, and gender participation), technological evolution of voting systems (EVM standalone architecture, VVPAT statutory mandate under Subramanian Swamy 2013 and ADR 2024 verification standard), and ECI digital governance mechanisms (cVIGIL, ENCORE, Suvidha).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Election Commission of India & Electoral Governance",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T23-01",
    "slug": "central-information-commission-rti-act-2005-and-2019-amendments",
    "title": "Central Information Commission (CIC) & RTI Act (2005): Architecture, Exemptions & 2019 Amendments",
    "shortDefinition": "Statutory transparency watchdog established under the Right to Information Act 2005, proactive disclosures under Section 4, exemptions under Section 8, the 3-member Selection Committee, and the impact of the RTI (Amendment) Act 2019.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Statutory & Non-Constitutional Regulatory Authorities: Transparency, Human Rights & Integrity",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T23-02",
    "slug": "central-vigilance-commission-and-anti-corruption-framework",
    "title": "Central Vigilance Commission (CVC): Santhanam Committee to Statutory Apex Anti-Corruption Body",
    "shortDefinition": "The apex statutory anti-corruption vigilance authority established on Santhanam Committee recommendations, statutory recognition via the CVC Act 2003 following Vineet Narain (1997), superintendence over CBI for corruption offences, and Whistleblowers Protection framework.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Statutory & Non-Constitutional Regulatory Authorities: Transparency, Human Rights & Integrity",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T23-03",
    "slug": "national-human-rights-commission-and-state-hrcs-framework",
    "title": "National Human Rights Commission (NHRC): Protection of Human Rights Act 1993 & 2019 Reforms",
    "shortDefinition": "Statutory human rights watchdog under PHRA 1993 conforming to Paris Principles, 6-member Selection Committee, 2019 Amendment reforms (broadened Chairperson eligibility and 3-yr tenure), civil court powers, and structural limitations (1-yr bar, armed forces restrictions).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Statutory & Non-Constitutional Regulatory Authorities: Transparency, Human Rights & Integrity",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T23-04",
    "slug": "lokpal-and-lokayuktas-act-2013-anti-corruption-ombudsman",
    "title": "Lokpal and Lokayuktas Act (2013): Anti-Corruption Architecture & State Ombudsman",
    "shortDefinition": "Statutory anti-corruption ombudsman established under the Lokpal and Lokayuktas Act 2013 following ARC (1966) recommendations and Anna Hazare movement, jurisdiction covering PM, Ministers, MPs, and public servants, alongside state Lokayukta systems (Rajasthan 1973 model).",
    "difficulty": "ADVANCED",
    "topicTitle": "Statutory & Non-Constitutional Regulatory Authorities: Transparency, Human Rights & Integrity",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T23-05",
    "slug": "niti-aayog-vs-planning-commission-think-tank-and-cooperative-federalism",
    "title": "NITI Aayog vs Planning Commission: Think Tank Architecture & Cooperative Federalism",
    "shortDefinition": "The extra-constitutional executive think tank established on 1 January 2015 replacing the top-down Planning Commission (1950–2014), emphasizing bottom-up cooperative federalism, the Governing Council, Team India Hub, and the structural transfer of fund allocation powers to the Finance Ministry.",
    "difficulty": "BEGINNER",
    "topicTitle": "Statutory & Non-Constitutional Regulatory Authorities: Transparency, Human Rights & Integrity",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T23-06",
    "slug": "district-administration-citizen-charters-sevottam-model-public-service-guarantee-acts",
    "title": "District Administration, Citizen Charters, Sevottam Model & Public Service Guarantee Acts",
    "shortDefinition": "Grassroots administrative architecture headed by the District Collector (Revenue Collector, District Magistrate under BNSS, and District Development Officer), Board of Revenue Ajmer (est. Nov 1, 1949), Citizen Charters, Sevottam Model (IS 15700:2005), and statutory service delivery frameworks (Rajasthan Guaranteed Delivery of Public Services Act 2011 & Right to Hearing Act 2012).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Statutory, Regulatory & Quasi-Judicial Bodies",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T24-01",
    "slug": "political-demography-electoral-geography-social-stratification-rajasthan",
    "title": "Political Demography, Electoral Geography & Social Stratification of Rajasthan",
    "shortDefinition": "Structural demographic and electoral geography of Rajasthan based on Census 2011 baseline data (6.85 Cr population, density 200/km2, sex ratio 928, literacy 66.1%), regional divisions (Marwar, Mewar, Dhundhar, Hadoti, Shekhawati), 200 Assembly seats (34 SC, 25 ST), and 25 Lok Sabha seats (4 SC, 3 ST).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Rajasthan State Polity: Executive, Assembly, Demography & Apex Institutions",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T24-02",
    "slug": "state-executive-rajasthan-governor-chief-minister-council-of-ministers",
    "title": "State Executive of Rajasthan: Governor, Chief Minister & Council of Ministers",
    "shortDefinition": "The institutional evolution and constitutional operational dynamics of the State Executive in Rajasthan under Articles 153–167, transitioning on 1 November 1956 from Rajpramukh to Governor (First Governor: Gurumukh Nihal Singh), Chief Ministership milestones, CM Secretariat, and discretionary gubernatorial governance.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Rajasthan State Polity: Executive, Assembly, Demography & Apex Institutions",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T24-03",
    "slug": "rajasthan-legislative-assembly-evolution-committees-unicameral-procedure",
    "title": "Rajasthan Legislative Assembly (Vidhan Sabha): Evolution, Committees & Unicameral Procedure",
    "shortDefinition": "The constitutional architecture and procedural mechanics of the unicameral Rajasthan Legislative Assembly under Articles 168–212, its historical seat growth from 160 (1952) to 200 (1977 6th Assembly), legislative committees (PAC, Estimates, PUC), Speaker prerogatives, and assembly quorum.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Rajasthan State Polity: Executive, Assembly, Demography & Apex Institutions",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T24-04",
    "slug": "judicial-and-constitutional-bodies-rajasthan-high-court-rpsc",
    "title": "Judicial & Constitutional Bodies of Rajasthan: High Court (Jodhpur/Jaipur) & RPSC (Ajmer)",
    "shortDefinition": "The constitutional architecture and operational dynamics of apex state institutions: Rajasthan High Court under Article 214 (inaugurated 29 Aug 1949 at Jodhpur, Satyanarayan Rao Committee Jaipur Bench 1977, 50 judges) and Rajasthan Public Service Commission under Article 315 (constituted 20 Aug 1949, shifted to Ajmer 1956, 1 Chair + 7 Members, appointment by Governor vs removal by President).",
    "difficulty": "ADVANCED",
    "topicTitle": "Rajasthan State Polity: Executive, Assembly, Demography & Apex Institutions",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T25-01",
    "slug": "constitutional-models-sovereignty-uk-usa-indian-synthesis",
    "title": "Constitutional Models & Sovereignty: UK Parliamentary Sovereignty vs USA Judicial Supremacy vs Indian Synthesis",
    "shortDefinition": "Comparative constitutional analysis of the British unwritten constitution and Diceyan Parliamentary Sovereignty, the American rigid written constitution and judicial supremacy with substantive Due Process, and the Indian constitutional synthesis of parliamentary executive with judicial review bound by the Basic Structure Doctrine.",
    "difficulty": "ADVANCED",
    "topicTitle": "Comparative Constitutional Systems: UK, USA, Canada, Germany & Switzerland",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T25-02",
    "slug": "comparative-federal-architectures-usa-canada-australia-germany-india",
    "title": "Comparative Federal Architectures: USA, Canada, Australia, Germany & Indian Asymmetric Federalism",
    "shortDefinition": "Comparative analysis of major federal systems: American Dual Federalism (indestructible states, dual citizenship), Canadian Strong-Centre Federalism (Governor appointment, central residuary powers), Australian Cooperative Federalism (Concurrent list, trade commerce), German Administrative Federalism (Bundesrat), and India's Quasi-Federal model with asymmetric constitutional provisions.",
    "difficulty": "ADVANCED",
    "topicTitle": "Comparative Constitutional Systems: UK, USA, Canada, Germany & Switzerland",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-T25-03",
    "slug": "instruments-direct-democracy-plural-executive-swiss-model",
    "title": "Instruments of Direct Democracy & Plural Executive: The Swiss Constitutional Model",
    "shortDefinition": "The constitutional architecture of the Swiss Confederation (Federal Constitution of 1999), the four instruments of Direct Democracy (Mandatory/Optional Referendum, Popular Initiative, Recall, Landsgemeinde), and the unique 7-member collegial Plural Executive (Federal Council) with an annually rotating Federal President.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Comparative Constitutional Systems: UK, USA, Canada, Germany & Switzerland",
    "subjectName": "Indian Polity"
  },
  {
    "id": "CON-ECO-01",
    "slug": "scarcity-choice-opportunity-cost-ppf-central-economic-problems",
    "title": "Scarcity, Choice, Opportunity Cost, Production Possibility Frontier & Central Economic Problems",
    "shortDefinition": "The foundational nature of economics as the study of resource allocation under scarcity: the universal constraint of unlimited human wants vs finite resources, opportunity cost as the next best alternative forgone, the concave Production Possibility Frontier (PPF) reflecting increasing marginal opportunity costs, and the three central economic questions (What, How, and For Whom to produce).",
    "difficulty": "BEGINNER",
    "topicTitle": "Foundations of Economics & National Income Accounting",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-02",
    "slug": "classification-of-goods-public-private-common-resources-club-goods",
    "title": "Classification of Goods: Public, Private, Common Resources & Club Goods",
    "shortDefinition": "Typology of economic goods based on the dual criteria of Excludability (whether a person can be prevented from consuming the good) and Rivalry (whether one person's consumption diminishes another's): Private Goods, Public Goods (non-rival, non-excludable), Common Pool Resources (rival, non-excludable — Tragedy of the Commons), and Club Goods / Natural Monopolies (excludable, non-rival).",
    "difficulty": "BEGINNER",
    "topicTitle": "Foundations of Economics & National Income Accounting",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-03",
    "slug": "circular-flow-of-income-factor-payments-injections-and-leakages",
    "title": "Circular Flow of Income, Factor Payments, Injections & Leakages",
    "shortDefinition": "The macroeconomic framework describing the continuous circular movement of money, goods, services, and factor payments across households, production enterprises, government, and the external sector: the identity of National Output = National Income = National Expenditure, factor payments (Rent, Wages, Interest, Profit), and equilibrium dynamics of Injections (Investment, Government Spending, Exports) vs Leakages (Savings, Taxes, Imports).",
    "difficulty": "BEGINNER",
    "topicTitle": "Foundations of Economics & National Income Accounting",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-04",
    "slug": "national-income-aggregates-gdp-ndp-gnp-nnp-factor-cost-basic-prices-market-prices",
    "title": "National Income Aggregates Ladder: GDP, NDP, GNP, NNP & Factor Cost vs Basic Prices vs Market Prices",
    "shortDefinition": "The mathematical step-ladder connecting all eight national income aggregates: Gross vs Net (Depreciation / Consumption of Fixed Capital), Domestic vs National (Net Factor Income from Abroad - NFIA), and the modern 2015 SNA methodology linking Factor Cost, Basic Prices (Production Taxes/Subsidies), and Market Prices (Product Taxes/Subsidies), establishing NNP at Factor Cost as canonical National Income.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Foundations of Economics & National Income Accounting",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-05",
    "slug": "methods-of-national-income-calculation-production-income-expenditure-approaches",
    "title": "Methods of National Income Calculation: Production (GVA), Income & Expenditure Approaches",
    "shortDefinition": "The three independent computational approaches to measuring national income: the Production Method (Gross Value Added = Value of Output minus Intermediate Consumption, avoiding double counting via value-added summation), the Income Method (summing factor rewards: Compensation of Employees, Operating Surplus, and Mixed Income of the Self-Employed), and the Expenditure Method ($Y = C + I + G + (X - M)$).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Foundations of Economics & National Income Accounting",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-06",
    "slug": "real-vs-nominal-gdp-gdp-deflator-base-year-revisions-green-gdp",
    "title": "Real vs Nominal GDP, GDP Deflator, Base Year Revisions & Green GDP",
    "shortDefinition": "Distinguishing monetary expansion from physical output growth: Nominal GDP (current prices) vs Real GDP (constant base-year prices), the GDP Deflator as the most comprehensive implicit price index across all domestic goods and services ($\\text{GDP Deflator} = \\frac{\\text{Nominal GDP}}{\\text{Real GDP}} \\times 100$), principles of base-year revisions, and Green GDP adjusting national income for environmental degradation and natural capital depletion.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Foundations of Economics & National Income Accounting",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-07",
    "slug": "evolution-of-money-functions-legal-tender-fiat-money-digital-payments-cbdc",
    "title": "Evolution of Money, Functions, Legal Tender, Fiat Money & Digital Payments / CBDC",
    "shortDefinition": "The economic and legal nature of money: the transition from commodity money and metallic coinage to paper fiat currency, the four core functions of money (Medium of Exchange, Unit of Account, Store of Value, Standard of Deferred Payment), the legal concept of Legal Tender (Limited vs Unlimited under the Coinage Act 2011 and RBI Act 1934 Section 26), and digital payment architecture including the Central Bank Digital Currency (e₹ / Digital Rupee).",
    "difficulty": "BEGINNER",
    "topicTitle": "Money, Commercial Banking & Financial Markets Architecture",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-08",
    "slug": "money-supply-aggregates-m0-m1-m2-m3-m4-liquidity-aggregates-money-multiplier",
    "title": "Money Supply Measures: Reserve Money (M0), Narrow Money (M1, M2), Broad Money (M3, M4) & The Money Multiplier",
    "shortDefinition": "The quantitative architecture of money supply in India defined by the RBI Working Group (Y.V. Reddy Committee, 1998): Reserve Money (M0 / High-Powered Money / Monetary Base), Narrow Money (M1, M2), Broad Money (M3, M4), Liquidity Aggregates (L1, L2, L3), and the Money Multiplier formula ($m = \\frac{M3}{M0} = \\frac{1+c}{r+c}$) determining how high-powered central bank money multiplies into commercial bank broad money.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Money, Commercial Banking & Financial Markets Architecture",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-09",
    "slug": "commercial-banking-architecture-fractional-reserve-banking-credit-creation-mechanics",
    "title": "Commercial Banking Architecture, Fractional Reserve Banking & Credit Creation Mechanics",
    "shortDefinition": "The institutional and operating mechanics of commercial banking: Scheduled Commercial Banks (Public, Private, Foreign, Small Finance Banks, Payments Banks), the principle of Fractional Reserve Banking, the mathematical credit creation process through derivative deposits ($Total Credit = Initial Deposit \\times \\frac{1}{LRR}$), and balance sheet asset-liability management (ALM).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Money, Commercial Banking & Financial Markets Architecture",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-10",
    "slug": "financial-markets-architecture-money-market-instruments-vs-capital-markets",
    "title": "Financial Markets Architecture: Money Market Instruments vs Capital Market Architecture",
    "shortDefinition": "The organizational and regulatory structure of India's financial markets: the Money Market (short-term funds up to 1 year, regulated primarily by RBI) vs the Capital Market (medium and long-term funds, regulated by SEBI), and key money market instruments including Treasury Bills (T-Bills: 91, 182, 364-day zero-coupon securities), Cash Management Bills (CMBs), Commercial Paper (CP), Certificates of Deposit (CD), Call/Notice/Term Money, and Triparty Repo (TREPS).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Money, Commercial Banking & Financial Markets Architecture",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-11",
    "slug": "capital-market-instruments-equities-corporate-bonds-yield-curves-derivatives",
    "title": "Capital Market Instruments: Equities, Corporate & Sovereign Bonds, Yield Curves & Derivatives",
    "shortDefinition": "The long-term capital mobilization ecosystem: Primary Market (IPOs, FPOs, Rights Issues, Private Placements) vs Secondary Market (Stock Exchanges: BSE, NSE), Equity vs Debt capital, Sovereign & Corporate Bond markets, Bond Yield mechanics and inverse price relationship ($P = \\sum \\frac{C}{(1+y)^t} + \\frac{F}{(1+y)^n}$), Yield Curve shapes (Normal, Inverted, Flat), and financial Derivatives (Forwards, Futures, Options, Swaps).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Money, Commercial Banking & Financial Markets Architecture",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-12",
    "slug": "central-banking-rbi-statutory-functions-reserve-management-lender-of-last-resort",
    "title": "Central Banking: Evolution of Reserve Bank of India, Organizational Structure & Statutory Functions",
    "shortDefinition": "The constitutional and statutory foundations of the Reserve Bank of India (RBI): established on April 1, 1935 under the Reserve Bank of India Act 1934 (Hilton Young Commission recommendations) and nationalized on January 1, 1949, its governance by the Central Board of Directors, and core statutory functions (Monetary Authority, Issuer of Currency, Banker to Government, Banker to Banks, Regulator of Payment Systems, and Manager of Foreign Exchange under FEMA 1999).",
    "difficulty": "BEGINNER",
    "topicTitle": "Central Banking, Monetary Policy Framework & Price Theory",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-13",
    "slug": "monetary-policy-framework-flexible-inflation-targeting-mpc-transmission-channels",
    "title": "Monetary Policy Framework: Flexible Inflation Targeting (FIT), MPC & Transmission Channels",
    "shortDefinition": "The statutory monetary policy architecture of India instituted under the 2016 RBI Act amendment (Urjit Patel Committee): Flexible Inflation Targeting (FIT) targeting Headline CPI inflation at 4% with a tolerance band of ±2% (2% to 6%), the 6-member Monetary Policy Committee (MPC) structure and voting rules, accountability criteria for monetary failure (3 consecutive quarters outside tolerance band), and monetary policy transmission channels.",
    "difficulty": "ADVANCED",
    "topicTitle": "Central Banking, Monetary Policy Framework & Price Theory",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-14",
    "slug": "quantitative-qualitative-monetary-instruments-repo-sdf-msf-crr-slr-omo-market-stabilization",
    "title": "Quantitative & Qualitative Monetary Instruments: Repo, SDF, MSF, CRR, SLR, OMO & Market Stabilization",
    "shortDefinition": "The operational toolkit of monetary policy: Quantitative / General Tools (Liquidity Adjustment Facility - LAF Corridor: Policy Repo Rate, Standing Deposit Facility - SDF, Marginal Standing Facility - MSF, Cash Reserve Ratio - CRR, Statutory Liquidity Ratio - SLR, Open Market Operations - OMO, Market Stabilization Scheme - MSS, and Variable Rate Repo/Reverse Repo - VRR/VRRR) vs Qualitative / Selective Credit Controls (Margin Requirements, Consumer Credit Regulation, Moral Suasion, and Credit Rationing).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Central Banking, Monetary Policy Framework & Price Theory",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-15",
    "slug": "price-theory-inflation-mechanics-demand-pull-cost-push-stagflation-phillips-curve",
    "title": "Price Theory: Inflation Mechanics, Demand-Pull vs Cost-Push, Stagflation & The Phillips Curve",
    "shortDefinition": "The core micro and macroeconomic mechanisms of inflation: Demand-Pull Inflation (excess aggregate demand $AD > AS$), Cost-Push / Supply-Shock Inflation, the Quantity Theory of Money ($MV = PY$), the dynamics of Stagflation (high inflation + stagnant growth + high unemployment), the Short-Run vs Long-Run Phillips Curve (Milton Friedman's Natural Rate of Unemployment / NAIRU), and the Fisher Effect ($i = r + \\pi^e$).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Central Banking, Monetary Policy Framework & Price Theory",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-16",
    "slug": "measurement-of-inflation-cpi-vs-wpi-basket-weightages-core-headline-food-inflation",
    "title": "Measurement of Inflation: CPI vs WPI Basket Weightages, Core vs Headline & Food Inflation Dynamics",
    "shortDefinition": "The statistical and institutional architecture of price measurement in India: Consumer Price Index (CPI-Combined, base 2012, compiled by NSO/MoSPI) vs Wholesale Price Index (WPI, base 2011-12, compiled by DPIIT/Ministry of Commerce), detailed item category weightages, Headline Inflation vs Core Inflation (excluding volatile Food & Fuel), and the dynamics of food inflation (supply perishability, cobweb cycles, and food basket dominance).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Central Banking, Monetary Policy Framework & Price Theory",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-17",
    "slug": "specialized-development-financial-institutions-nabard-sidbi-nhb-exim-nabfid",
    "title": "Specialized Development Financial Institutions: NABARD, SIDBI, NHB, EXIM Bank & NaBFID",
    "shortDefinition": "The institutional architecture of specialized Development Financial Institutions (DFIs) and All-India Financial Institutions (AIFIs) in India: NABARD (B. Sivaraman Committee, 1982 — RIDF, SHG-Bank Linkage), SIDBI (1990 — MSME financing, MUDRA), NHB (1988 — housing finance regulation transition to RBI), EXIM Bank (1982 — export-import credit lines), and the National Bank for Financing Infrastructure and Development (NaBFID Act 2021) for patient infrastructure capital.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Central Banking, Monetary Policy Framework & Price Theory",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-18",
    "slug": "union-budget-architecture-revenue-vs-capital-receipts-expenditure-constitutional-stages",
    "title": "Union Budget Architecture: Revenue vs Capital Receipts & Expenditure, and Constitutional Stages",
    "shortDefinition": "The constitutional and budgetary classification of the Union Budget under Article 112 (Annual Financial Statement): the structural bifurcation into the Revenue Account (Revenue Receipts [Tax & Non-Tax] and Revenue Expenditure [operational, non-asset creating]) and the Capital Account (Capital Receipts [Debt & Non-Debt creating] and Capital Expenditure [asset-creating / liability-reducing]), and the six constitutional parliamentary enactment stages.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Public Finance, Union Budget Architecture & Taxation",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-19",
    "slug": "fiscal-deficit-equations-budgetary-revenue-effective-revenue-fiscal-primary-deficits",
    "title": "Fiscal Deficit Equations: Budgetary, Revenue, Effective Revenue, Fiscal & Primary Deficits",
    "shortDefinition": "The mathematical and macroeconomic equations of budgetary deficits in India: Revenue Deficit ($\\text{RD} = \\text{Revenue Expenditure} - \\text{Revenue Receipts}$), Effective Revenue Deficit ($\\text{ERD} = \\text{RD} - \\text{Grants for Creation of Capital Assets}$), Fiscal Deficit as the total sovereign borrowing requirement ($\\text{FD} = \\text{Total Expenditure} - [\\text{Revenue Receipts} + \\text{Non-Debt Capital Receipts}]$), and Primary Deficit isolating current-year fiscal stance ($\\text{PD} = \\text{Fiscal Deficit} - \\text{Interest Payments}$).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Public Finance, Union Budget Architecture & Taxation",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-20",
    "slug": "taxation-architecture-in-india-direct-vs-indirect-taxes-tax-buoyancy-gst-ecosystem",
    "title": "Taxation Architecture in India: Direct vs Indirect Taxes, Tax Buoyancy & The GST Ecosystem",
    "shortDefinition": "The statutory taxation architecture of India: Direct Taxes (Income Tax Act 1961, Corporate Tax — progressive incidence, non-shiftable, administered by CBDT) vs Indirect Taxes (regressive incidence, shiftable, administered by CBIC), Tax Buoyancy vs Tax Elasticity, and the landmark Goods and Services Tax (GST - 101st Constitutional Amendment Act 2016) destination-based consumption framework, GST Council (Article 279A), and Input Tax Credit (ITC) mechanism.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Public Finance, Union Budget Architecture & Taxation",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-21",
    "slug": "frbm-act-2003-fiscal-consolidation-roadmap-nk-singh-committee-escape-clauses",
    "title": "FRBM Act 2003, Fiscal Consolidation Roadmap & N.K. Singh Committee Escape Clauses",
    "shortDefinition": "The statutory fiscal discipline architecture of India: the Fiscal Responsibility and Budget Management (FRBM) Act 2003, statutory fiscal rules, mandatory budget statement disclosures (Macroeconomic Framework, Fiscal Policy Strategy, Medium-Term Fiscal Policy), the N.K. Singh FRBM Review Committee recommendations (Debt-to-GDP anchor: 60% combined [40% Center / 20% States], Fiscal Deficit 3% of GDP, creation of a Fiscal Council), and statutory Escape Clauses under Section 4(2).",
    "difficulty": "ADVANCED",
    "topicTitle": "Public Finance, Union Budget Architecture & Taxation",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-22",
    "slug": "financial-regulatory-architecture-sebi-irdai-pfrda-ifsca-fsdc-inter-regulatory-coordination",
    "title": "Financial Regulatory Architecture: SEBI, IRDAI, PFRDA, IFSCA & FSDC Inter-Regulatory Coordination",
    "shortDefinition": "The sectoral regulatory architecture of India's financial system: the RBI (Banks, NBFCs, Money Market, Forex), SEBI (Capital Markets & Securities under SEBI Act 1992), IRDAI (Insurance under IRDA Act 1999), PFRDA (Pensions under PFRDA Act 2013), and IFSCA (International Financial Services Centres Authority Act 2019 at GIFT City), coordinated through the non-statutory Financial Stability and Development Council (FSDC) chaired by the Union Finance Minister.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Banking Regulations, Basel Norms, NPAs & Financial Inclusion",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-23",
    "slug": "prudential-regulations-basel-accords-basel-i-ii-iii-rwa-crar-capital-buffers",
    "title": "Prudential Regulations & Basel Accords: Basel I, II, III, Risk-Weighted Assets, CRAR & Capital Buffers",
    "shortDefinition": "The international prudential regulatory standards formulated by the Basel Committee on Banking Supervision (BCBS) at the Bank for International Settlements (BIS): evolution from Basel I (1988) and Basel II (Three Pillars: Minimum Capital, Supervisory Review, Market Discipline) to Basel III (post-2008 reforms), the Capital to Risk-Weighted Assets Ratio formula ($\\text{CRAR} = \\frac{\\text{Tier 1 Capital} + \\text{Tier 2 Capital}}{\\text{Total RWA}}$), Capital Conservation Buffer (CCB), Counter-Cyclical Capital Buffer (CCCB), Leverage Ratio, Liquidity Coverage Ratio (LCR), and Net Stable Funding Ratio (NSFR).",
    "difficulty": "ADVANCED",
    "topicTitle": "Banking Regulations, Basel Norms, NPAs & Financial Inclusion",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-24",
    "slug": "non-performing-assets-sma-classification-provisioning-norms-sarfaesi-ibc-2016-resolution",
    "title": "Non-Performing Assets (NPAs), SMA Classification, Provisioning Norms, SARFAESI & IBC 2016 Resolution",
    "shortDefinition": "The resolution and provisioning framework for stressed bank assets: the 90-day overdue NPA definition (sub-categorized into Sub-Standard [≤12 months], Doubtful [D1, D2, D3], and Loss Assets), Special Mention Account (SMA-0, SMA-1, SMA-2) early warning categories, mandatory regulatory Provisioning Coverage Ratios (PCR), Prompt Corrective Action (PCA) framework, SARFAESI Act 2002 enforcement, and the Insolvency and Bankruptcy Code (IBC 2016) time-bound corporate resolution mechanism (CIRP: 180 + 90 days, 330-day outer ceiling, NCLT/IBBI).",
    "difficulty": "ADVANCED",
    "topicTitle": "Banking Regulations, Basel Norms, NPAs & Financial Inclusion",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-25",
    "slug": "financial-inclusion-framework-priority-sector-lending-psl-sub-targets-pslc-lead-bank-pmjdy",
    "title": "Financial Inclusion Framework: Priority Sector Lending (PSL) Targets, PSLCs, Lead Bank Scheme & PMJDY",
    "shortDefinition": "The multi-tiered statutory and institutional framework for universal financial inclusion in India: Priority Sector Lending (PSL) mandates (40% of ANBC for domestic SCBs and foreign banks with ≥20 branches, 75% for SFBs/RRBs), 8 eligible PSL categories and sub-targets (Agriculture 18%, Small/Marginal Farmers 10%, Micro Enterprises 7.5%, Weaker Sections 12%), Priority Sector Lending Certificates (PSLCs), the Lead Bank Scheme & Service Area Approach, and the JAM Trinity (PMJDY overdrafts and insurance).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Banking Regulations, Basel Norms, NPAs & Financial Inclusion",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-26",
    "slug": "balance-of-payments-framework-current-account-capital-account-cad-forex-reserves",
    "title": "Balance of Payments (BoP) Framework: Current Account, Capital Account, CAD & Forex Reserves",
    "shortDefinition": "The macroeconomic accounting framework recording all economic transactions between residents of a country and the rest of the world (IMF BPM6 manual): the Current Account (Merchandise Goods Trade, Services/Invisibles, Primary Income, Secondary Transfers/Remittances), the Capital Account (FDI, FPI, External Commercial Borrowings, NRI Deposits, Banking Capital), Errors & Omissions, the Overall BoP Balance, and the Foreign Exchange Reserves buffer (FCA, Gold, SDR, RTP).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "External Sector, Balance of Payments & International Trade",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-27",
    "slug": "exchange-rate-regimes-lerms-neer-reer-rupee-convertibility-tarapore-committee-roadmaps",
    "title": "Exchange Rate Regimes: Fixed, Floating, LERMS, NEER vs REER & Rupee Convertibility Roadmaps",
    "shortDefinition": "The mechanics of foreign exchange determination: Fixed/Pegged vs Floating/Flexible vs Managed Float exchange rates, the Liberalised Exchange Rate Management System (LERMS, March 1992) and transition to full Unified Market-Determined Exchange Rate (March 1993), Nominal Effective Exchange Rate (NEER) vs Real Effective Exchange Rate (REER: trade-weighted relative price competitiveness), and Rupee Convertibility (Full Current Account Convertibility under Article VIII of IMF, August 1994 vs Partial Capital Account Convertibility governed by Tarapore Committee roadmaps).",
    "difficulty": "ADVANCED",
    "topicTitle": "External Sector, Balance of Payments & International Trade",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-28",
    "slug": "foreign-capital-flows-fdi-automatic-vs-government-routes-fpi-regulations-external-commercial-borrowings",
    "title": "Foreign Capital Flows: FDI (Automatic vs Government Route), FPI Regulations & ECBs",
    "shortDefinition": "The legal and regulatory framework governing cross-border foreign capital inflows into India: Foreign Direct Investment (FDI — long-term strategic equity ≥10% with voting control, Automatic Route via RBI vs Government Approval Route via DPIIT / sectoral ministries, Consolidated FDI Policy, Press Note 3 of 2020 restrictions) vs Foreign Portfolio Investment (FPI — financial investment <10% in listed securities, regulated by SEBI), and External Commercial Borrowings (ECB framework under FEMA 1999).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "External Sector, Balance of Payments & International Trade",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-29",
    "slug": "international-economic-institutions-imf-sdr-world-bank-group-wto-agreements-ndb-aiib",
    "title": "International Economic Institutions: Bretton Woods (IMF, World Bank), WTO Agreements & MDBs",
    "shortDefinition": "The global multilateral economic governance architecture: the Bretton Woods twins (1944) — the International Monetary Fund (IMF: Quotas, Special Drawing Rights [SDR], Article IV consultations, Extended Fund Facility [EFF]) and the World Bank Group (IBRD, IDA, IFC, MIGA, ICSID — India is not a member of ICSID), the World Trade Organization (WTO: Marrakesh Agreement 1995, Most Favoured Nation [MFN], National Treatment, Agreement on Agriculture [AoA boxes: Green, Blue, Amber], Peace Clause, TRIPS), and emerging Multilateral Development Banks (AIIB and NDB / BRICS Bank).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "External Sector, Balance of Payments & International Trade",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-30",
    "slug": "indian-agriculture-structural-evolution-green-revolution-cropping-patterns-irrigation",
    "title": "Indian Agriculture: Structural Evolution, Green Revolution, Cropping Patterns & Irrigation Architecture",
    "shortDefinition": "The structural and agronomic transformation of Indian agriculture: shift from food deficit ship-to-mouth dependency (PL-480) to self-sufficiency through the Green Revolution (Norman Borlaug, M.S. Swaminathan, HYV seeds, fertilizers, tubewell irrigation), structural issues of cropping pattern skew (monoculture of rice-wheat in NW India), and modern micro-irrigation schemes (PMKSY: Per Drop More Crop).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Agriculture, Land Reforms & Food Security",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-31",
    "slug": "land-reforms-in-india-zamindari-abolition-tenancy-reforms-land-ceilings-bhoodan-digitization",
    "title": "Land Reforms in India: Zamindari Abolition, Tenancy Reforms, Land Ceilings, Bhoodan & Digitization",
    "shortDefinition": "The socio-legal and economic restructuring of agrarian land ownership in post-independence India: Abolition of Intermediaries, Tenancy Reforms (Operation Barga), Land Ceiling Acts, voluntary Bhoodan-Gramdan (Vinoba Bhave, 1951), Ninth Schedule constitutional protections, and modern digital land administration (DILRMP and PM-SVAMITVA drone surveys).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Agriculture, Land Reforms & Food Security",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-32",
    "slug": "agricultural-pricing-architecture-msp-cacp-cost-concepts-a2-fl-c2-e-nam-pm-aasha",
    "title": "Agricultural Pricing Architecture: MSP, CACP Cost Concepts (A2, A2+FL, C2), e-NAM & PM-AASHA",
    "shortDefinition": "The agricultural pricing framework of India: Minimum Support Price (MSP announced for 22 mandated crops + FRP for Sugarcane), CACP cost formulas (A2, A2+FL, C2), official 1.5x A2+FL formula vs Swaminathan 1.5x C2 formula, PM-AASHA price support mechanisms (PSS, PDPS, PPPS), and e-NAM electronic mandis.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Agriculture, Land Reforms & Food Security",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-33",
    "slug": "industrial-policy-evolution-ipr-1948-1956-mahalanobis-strategy-1991-lpg-reforms-pli-schemes",
    "title": "Industrial Policy Evolution: IPR 1948, 1956 Mahalanobis Strategy, 1991 LPG Reforms & PLI Schemes",
    "shortDefinition": "The historical and contemporary trajectory of industrialization in India: the Industrial Policy Resolution (IPR 1948: mixed economy inception), IPR 1956 (\"Economic Constitution of India\", Nehru-Mahalanobis heavy industry model, Schedule A/B/C reservation, License-Permit-Quota Raj), the Statement on Industrial Policy (July 24, 1991: delicensing, deregulation, MRTP threshold abolition, public sector reservation reduction to 2 sectors [Atomic Energy & Railway operations]), and modern manufacturing initiatives (Make in India, Production Linked Incentive [PLI] schemes across 14 key sectors).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Industrial Policy, MSMEs, Disinvestment & Digital Infrastructure",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-34",
    "slug": "msme-sector-framework-revised-2020-composite-criteria-udyam-portal-cgtmse-credit-schemes",
    "title": "MSME Sector Framework: Revised 2020 Composite Criteria, Udyam Portal & Credit Guarantees",
    "shortDefinition": "The statutory framework governing Micro, Small and Medium Enterprises under the MSMED Act 2006: the revised July 1, 2020 composite classification criteria combining Investment in Plant & Machinery AND Annual Turnover (eliminating the historical distinction between manufacturing and services), self-declaration on the Udyam Registration Portal, Samadhaan delayed payments portal (Section 15: compound interest at 3x RBI bank rate after 45 days), Sambandh public procurement policy (25% mandatory purchase by CPSEs), and CGTMSE credit guarantees.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Industrial Policy, MSMEs, Disinvestment & Digital Infrastructure",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-35",
    "slug": "central-public-sector-enterprises-maharatna-navratna-strategic-disinvestment-dipam-policy",
    "title": "Central Public Sector Enterprises: Maharatna, Navratna, Miniratna & Strategic Disinvestment Policy",
    "shortDefinition": "The corporate governance and privatization framework for Central Public Sector Enterprises (CPSEs): the three-tier autonomy classification (Maharatna, Navratna, Miniratna Category I & II criteria and financial delegation limits), the Department of Investment and Public Asset Management (DIPAM, Ministry of Finance), and the New PSE Policy for Atmanirbhar Bharat (2021) categorizing sectors into Strategic (max 4 CPSEs retained) vs Non-Strategic sectors.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Industrial Policy, MSMEs, Disinvestment & Digital Infrastructure",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-36",
    "slug": "services-sector-and-indias-digital-public-infrastructure-dpi-india-stack-account-aggregator-ondc",
    "title": "Services Sector & India's Digital Public Infrastructure (DPI): India Stack, Account Aggregator & ONDC",
    "shortDefinition": "The structural transformation of India's services sector (~53-55% of GVA) and the pioneering Digital Public Infrastructure (DPI / \"India Stack\") architecture: the four layers of India Stack (Identity: Aadhaar, Payments: UPI/NPCI, Documents: DigiLocker, Data Empowerment: DEPA / Account Aggregator framework), and open-network ecommerce democratization through the Open Network for Digital Commerce (ONDC).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Industrial Policy, MSMEs, Disinvestment & Digital Infrastructure",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-37",
    "slug": "concepts-of-poverty-absolute-vs-relative-headcount-ratio-poverty-gap-squared-poverty-gap",
    "title": "Concepts of Poverty: Absolute vs Relative Poverty, Headcount Ratio, Poverty Gap & Foster-Greer-Thorbecke Index",
    "shortDefinition": "The theoretical and quantitative dimensions of poverty: Absolute Poverty (deprivation of minimum biological subsistence / Poverty Line Basket [PLB]) vs Relative Poverty (inequality of income distribution relative to median living standards), and the Foster-Greer-Thorbecke (FGT) family of poverty indices (Headcount Ratio $P_0$, Poverty Gap Index $P_1$ measuring depth of poverty, and Squared Poverty Gap / Poverty Severity $P_2$ measuring inequality among the poor).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Poverty, Inequality, Human Capital & Sustainable Development",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-38",
    "slug": "measuring-economic-inequality-lorenz-curve-gini-coefficient-palma-ratio-consumption-vs-wealth-gini",
    "title": "Measuring Economic Inequality: Lorenz Curve, Gini Coefficient, Palma Ratio & Wealth vs Consumption Gini",
    "shortDefinition": "The geometric and mathematical measurement of economic inequality: the Lorenz Curve (Max O. Lorenz, 1905: cumulative population vs cumulative income/wealth), the Gini Coefficient (Corrado Gini, 1912: ratio of Area A to Area A+B), the Palma Ratio (share of top 10% divided by bottom 40%), the 20/20 Ratio, and the structural divergence between Consumption Gini (~0.35 derived from NSO MPCE surveys) and Wealth Gini (~0.75 in World Inequality Report) in India.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Poverty, Inequality, Human Capital & Sustainable Development",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-39",
    "slug": "evolution-of-poverty-estimation-in-india-dadabhai-naoroji-alagh-lakdawala-tendulkar-rangarajan",
    "title": "Evolution of Poverty Estimation in India: Dadabhai Naoroji to Tendulkar & Rangarajan Committees",
    "shortDefinition": "The historical evolution of poverty line estimation in India: pre-independence benchmarks (Dadabhai Naoroji's Jail Cost of Living 1867-68, National Planning Committee 1938, Bombay Plan 1944) to post-independence Planning Commission committees: Y.K. Alagh Task Force (1979: Calorie norms of 2400 kcal Rural / 2100 kcal Urban), D.T. Lakdawala Committee (1993: state-specific price deflators using CPI-AL and CPI-IW), Suresh Tendulkar Committee (2009: shifting from calories to mixed consumption basket including health and education, MRP, ₹27/day rural & ₹33/day urban, 21.9% poverty in 2011-12), and C. Rangarajan Committee (2014: ₹32/day rural & ₹47/day urban, 29.5% poverty).",
    "difficulty": "ADVANCED",
    "topicTitle": "Poverty, Inequality, Human Capital & Sustainable Development",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-40",
    "slug": "multidimensional-poverty-index-alkire-foster-method-niti-aayog-national-mpi-12-indicators",
    "title": "Multidimensional Poverty Index: Alkire-Foster Method & NITI Aayog National MPI (12 Indicators)",
    "shortDefinition": "The multidimensional deprivation measurement framework: the Alkire-Foster (AF) counting methodology developed by Oxford OPHI and UNDP, Global MPI (3 dimensions: Health, Education, Standard of Living across 10 indicators), and the NITI Aayog National Multidimensional Poverty Index (National MPI) adding 2 India-specific indicators (Maternal Health and Bank Account) across 12 indicators, measuring the Multidimensional Poverty Headcount Ratio (H), Intensity of Poverty (A), and MPI Score ($MPI = H \\times A$), tracking the lifting of 248 million Indians out of multidimensional poverty between 2013-14 and 2022-23.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Poverty, Inequality, Human Capital & Sustainable Development",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-41",
    "slug": "human-capital-formation-amartya-sen-capability-approach-education-health-skill-development",
    "title": "Human Capital Formation: Amartya Sen's Capability Approach, Education & Health Paradigms",
    "shortDefinition": "The economic theory of human capital as an engine of endogenous growth (Theodore Schultz, Gary Becker, Robert Lucas): Amartya Sen's Capability Approach (distinguishing Functionings vs Capabilities, viewing poverty as capability deprivation and human development as freedom expansion), the Human Development Index (HDI: Life Expectancy, Mean/Expected Years of Schooling, GNI per capita PPP), National Education Policy (NEP 2020: 5+3+3+4 structure, 6% GDP spending target), and Ayushman Bharat health architecture.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Poverty, Inequality, Human Capital & Sustainable Development",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-42",
    "slug": "sustainable-development-climate-economics-environmental-kuznets-curve-carbon-credits-green-bonds",
    "title": "Sustainable Development & Climate Economics: SDGs, Environmental Kuznets Curve, Carbon Markets & Green Finance",
    "shortDefinition": "The economic interface of climate change and environmental sustainability: the Brundtland Report (1987) definition of Sustainable Development, the 17 UN Sustainable Development Goals (SDGs: 2015-2030) and NITI Aayog SDG India Index, the Environmental Kuznets Curve (EKC: inverted-U hypothesis linking pollution to per capita income), Carbon Pricing mechanisms (Carbon Tax vs Cap-and-Trade / Carbon Credits under Article 6 of Paris Agreement and Energy Conservation Amendment Act 2022), and Sovereign Green Bonds.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Poverty, Inequality, Human Capital & Sustainable Development",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-43",
    "slug": "unemployment-typology-and-measurement-ups-upss-cws-lfpr-wpr-plfs-labor-market-trends",
    "title": "Unemployment Typology & Measurement: UPS, UPSS, CWS, LFPR, WPR & PLFS Labor Market Indicators",
    "shortDefinition": "The statistical and conceptual measurement of labor markets in India: types of unemployment (Disguised / Underemployment, Structural, Frictional, Cyclical, Seasonal), the NSO measurement activity statuses (Usual Principal Status [UPS: major activity over 365 days], Usual Principal and Subsidiary Status [UPSS], Current Weekly Status [CWS: 1 hour in last 7 days]), and core Periodic Labour Force Survey (PLFS, launched April 2017) indicators: Labour Force Participation Rate (LFPR), Worker Population Ratio (WPR), and Unemployment Rate ($UR = \\frac{\\text{Unemployed}}{\\text{Labour Force}} \\times 100$).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Employment, Labor Markets, Planning & NITI Aayog",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-44",
    "slug": "informal-sector-gig-platform-workers-social-security-code-2020-e-shram-portal",
    "title": "The Informal Economy, Gig & Platform Workers, Social Security Code 2020 & e-Shram Portal",
    "shortDefinition": "The dual structure of the Indian labor market: the Informal / Unorganized Sector (~90% of total workforce lacking written contracts, paid leave, and social security pensions), the emerging Gig and Platform Economy, the 4 new simplified Labour Codes (Code on Wages 2019, Industrial Relations Code 2020, Social Security Code 2020, OSH Code 2020), the statutory recognition of Gig and Platform Workers under the Social Security Code 2020 (Social Security Fund funded by 1-2% aggregator turnover cess), and the e-Shram unorganized worker registry portal.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Employment, Labor Markets, Planning & NITI Aayog",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-45",
    "slug": "inclusive-growth-architecture-direct-benefit-transfer-dbt-jam-trinity-welfare-governance",
    "title": "Inclusive Growth Architecture: Direct Benefit Transfer (DBT), JAM Trinity & Welfare Governance",
    "shortDefinition": "The institutional strategy for inclusive, equitable growth in India: the concept of Inclusive Growth (growth that creates employment opportunities and reduces poverty and horizontal/vertical inequality), the JAM Trinity architecture (Jan Dhan Accounts, Aadhaar Biometric Identification, Mobile Connectivity) enabling Direct Benefit Transfer (DBT) under the Aadhaar Act 2016 (Section 7), plugging ghost-beneficiary leakages across major central schemes (PM-KISAN, PDS, LPG PAHAL).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Employment, Labor Markets, Planning & NITI Aayog",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-46",
    "slug": "evolution-of-economic-planning-five-year-plans-planning-commission-to-niti-aayog-federalism",
    "title": "Evolution of Economic Planning: Five-Year Plans, Planning Commission to NITI Aayog Federalism",
    "shortDefinition": "The historical evolution of national economic planning in India: the Planning Commission (established March 15, 1950 via executive resolution — non-constitutional, non-statutory) and National Development Council (NDC, 1952), the trajectory of 12 Five-Year Plans (1st Harrod-Domar, 2nd Mahalanobis, Plan Holidays, 12th Plan: Faster, Sustainable and More Inclusive Growth), the replacement of the Planning Commission by NITI Aayog (National Institution for Transforming India, January 1, 2015), Cooperative vs Competitive Federalism, Governing Council structure, and the 3-Year Action Agenda / 7-Year Strategy / 15-Year Vision framework.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Employment, Labor Markets, Planning & NITI Aayog",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-47",
    "slug": "macroeconomic-profile-of-rajasthan-gsdp-gsva-sectoral-shares-per-capita-income",
    "title": "Macroeconomic Profile of Rajasthan: GSDP, GSVA Sectoral Shares & Per Capita Income Trends",
    "shortDefinition": "The macroeconomic indicators of Rajasthan (Economic Review of Rajasthan): Gross State Domestic Product (GSDP at current and constant 2011-12 prices), Gross State Value Added (GSVA) sectoral composition (Agriculture ~27-28%, Industry ~27-28%, Services ~44-45%), Per Capita Income trends (current vs constant prices), and comparative performance against all-India macroeconomic parameters.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Rajasthan State Economy & Flagship Development Programs",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-48",
    "slug": "key-economic-sectors-of-rajasthan-arid-agriculture-minerals-renewable-energy-hub-tourism",
    "title": "Key Economic Sectors of Rajasthan: Arid Agriculture, Mineral Endowments, Renewable Energy Hub & Tourism",
    "shortDefinition": "The core sectoral drivers of Rajasthan: Agricultural leadership (#1 in Mustard/Rapeseed, Bajra, Nutri-cereals, Gwar), Livestock wealth (#2 in milk production, #1 in wool production with ~35-40% national share), Mineral monopoly (Sole/exclusive producer of Lead & Zinc, Wollastonite, Selenite, Gypsum; major onshore crude oil producer in Barmer-Cairn basin), Renewable Energy powerhouse (#1 in solar energy potential with 142 GW, Bhadla Solar Park 2245 MW), and Tourism heritage architecture.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Rajasthan State Economy & Flagship Development Programs",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-ECO-49",
    "slug": "industrial-infrastructure-and-flagship-schemes-in-rajasthan-rips-riico-dmic-social-welfare",
    "title": "Industrial Infrastructure & Flagship Schemes in Rajasthan: RIPS, RIICO, DMIC & Social Welfare Suite",
    "shortDefinition": "The industrial promotional and social welfare architecture of Rajasthan: RIICO industrial areas, Rajasthan Investment Promotion Scheme (RIPS 2022/2024: customized capital subsidies, electricity duty exemptions, and green incentives), Delhi-Mumbai Industrial Corridor (DMIC: ~38% length passes through Rajasthan; Khushkhera-Bhiwadi-Neemrana & Jodhpur-Pali-Marwar industrial nodes), Mukhyamantri Nishulk Dawa Yojana (2011), Mukhyamantri Chiranjeevi Swasthya Bima Yojana / Ayushman Arogya Rajasthan, Indira Rasoi Yojana, and Rajasthan Social Security Pension Schemes.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Rajasthan State Economy & Flagship Development Programs",
    "subjectName": "Indian Economy & Macroeconomic Policy"
  },
  {
    "id": "CON-IIBF-01",
    "slug": "indian-financial-system-evolution-institutional-structure-and-phase-transitions",
    "title": "Indian Financial System: Structural Evolution, Institutional Pillars & Phase Transitions",
    "shortDefinition": "The historical and institutional architecture of the Indian Financial System: evolution across four distinct phases (Pre-Independence colonial banking, Post-Independence State Domination and 14/6 Bank Nationalizations in 1969 & 1980, Narasimham Committee I & II post-1991 structural reforms), the formal financial system quad (Financial Institutions, Financial Markets, Financial Instruments, Financial Services), and dual intermediation through Banks vs Non-Bank Financial Intermediaries.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Indian Financial System Architecture & Institutional Tiers",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-02",
    "slug": "regional-rural-banks-structure-amalgamation-and-ownership-governance",
    "title": "Regional Rural Banks (RRBs): Capital Structure, Sponsor Bank Roles & Phased Amalgamations",
    "shortDefinition": "The statutory framework governing Regional Rural Banks under the Regional Rural Banks Act 1976 (M. Narasimham Working Group, 1975): statutory tripartite equity shareholding (Central Government 50%, Sponsor Public Sector Bank 35%, State Government 15%), target beneficiary focus (Small/Marginal Farmers, Agricultural Laborers, Rural Artisans), mandatory 75% Priority Sector Lending allocation, supervision by NABARD under Section 35A of Banking Regulation Act 1949, and consolidation from 196 original RRBs to 43 RRBs across three amalgamation waves.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Indian Financial System Architecture & Institutional Tiers",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-03",
    "slug": "cooperative-banking-framework-br-act-amendment-2020-and-4-tier-ucb-categorization",
    "title": "Cooperative Banking Framework: Dual Regulation, BR Act Amendment 2020 & 4-Tier UCB System",
    "shortDefinition": "The statutory structure of cooperative banking in India: the historic problem of Dual Regulation (Registrar of Cooperative Societies [RCS] under State laws vs RBI under BR Act 1949), the landmark Banking Regulation (Amendment) Act 2020 bringing all Urban Cooperative Banks (UCBs) and Multi-State Cooperative Banks under direct regulatory and supervisory control of RBI (powers over management supersession, board reconstitution, audit, and resolution), the N.S. Vishwanathan Committee 4-Tier UCB regulatory hierarchy (Tier 1 [deposits ≤₹100 Cr], Tier 2 [₹100-1000 Cr], Tier 3 [₹1000-10000 Cr], Tier 4 [>₹10000 Cr]), and phased PSL transition to 75%.",
    "difficulty": "ADVANCED",
    "topicTitle": "Indian Financial System Architecture & Institutional Tiers",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-04",
    "slug": "non-banking-financial-companies-scale-based-regulation-and-regulatory-layers",
    "title": "Non-Banking Financial Companies (NBFCs): Scale-Based Regulation (SBR) & Four-Tier Architecture",
    "shortDefinition": "The statutory framework governing Non-Banking Financial Companies under Chapter III-B of the Reserve Bank of India Act 1934: the 50-50 Principle Principal Business Test (financial assets >50% of total assets and income from financial assets >50% of gross income), Deposit-taking (NBFC-D) vs Non-Deposit-taking (NBFC-ND), the landmark Scale-Based Regulation (SBR, effective October 2022) grouping NBFCs into four layers (Base Layer [asset size <₹1,000 Cr], Middle Layer [asset size ≥₹1,000 Cr, all deposit-taking, and HFCs], Upper Layer [top 15 systemically important NBFCs subject to bank-like prudential norms], and Top Layer [currently empty]), and NPA recognition harmonization to the 90-day overdue rule.",
    "difficulty": "ADVANCED",
    "topicTitle": "Indian Financial System Architecture & Institutional Tiers",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-05",
    "slug": "development-financial-institutions-nabard-sidbi-exim-nhb-and-nabfid-statutory-mandates",
    "title": "Development Financial Institutions (DFIs): NABARD, SIDBI, EXIM Bank, NHB & NaBFID",
    "shortDefinition": "The specialized statutory long-term refinancing and developmental lending architecture: the evolution of All-India Financial Institutions (AIFIs) regulated under Section 45L of the RBI Act 1934: NABARD (NABARD Act 1981, B. Sivaraman Committee, July 12, 1982: RIDF, refinance to RRBs/cooperatives), SIDBI (SIDBI Act 1989, operational 1990: MSME refinance, MUDRA), EXIM Bank (EXIM Bank Act 1981: cross-border export credit & Lines of Credit), NHB (NHB Act 1987: housing refinance), and the newly established NaBFID (National Bank for Financing Infrastructure and Development Act 2021: ₹1 Lakh Crore developmental infrastructure debt).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Indian Financial System Architecture & Institutional Tiers",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-06",
    "slug": "financial-markets-duality-money-market-vs-capital-market-mechanisms",
    "title": "Financial Markets Duality: Money Market vs Capital Market Mechanics & Intermediation",
    "shortDefinition": "The macroeconomic structure of financial markets: Money Market (wholesale wholesale market for short-term funds up to 1 year, managing liquidity and working capital under RBI regulation) vs Capital Market (market for long-term equity and debt capital exceeding 1 year under SEBI regulation), Primary Market (raising fresh capital via Public Issue, Private Placement, Rights Issue) vs Secondary Market (trading existing securities providing continuous liquidity on BSE/NSE), and the regulatory boundary between RBI and SEBI.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Financial Markets, Fixed Income & Derivatives Architecture",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-07",
    "slug": "money-market-instruments-call-notice-term-money-t-bills-cp-cd-and-treps",
    "title": "Money Market Instruments: Call, Notice & Term Money, Treasury Bills, CP, CD and TREPS",
    "shortDefinition": "The detailed regulatory and statutory specifications of core Indian money market instruments: Call Money (1-day overnight) vs Notice Money (2-14 days) vs Term Money (15-365 days) on NDS-CALL, Treasury Bills (91-day, 182-day, 364-day zero-coupon sovereign discount papers issued at discount and redeemed at par), Commercial Paper (CP: unsecured corporate promissory notes, min ₹5 Lakh, maturity 7 days to 1 year, min A2 rating), Certificates of Deposit (CD: tradable bank term deposits, min ₹1 Lakh, maturity 7 days to 1 year for banks / up to 3 years for AIFIs), and Triparty Repo (TREPS on CCIL).",
    "difficulty": "ADVANCED",
    "topicTitle": "Financial Markets, Fixed Income & Derivatives Architecture",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-08",
    "slug": "capital-markets-primary-issue-mechanisms-ipo-fpo-ofs-and-depository-systems-nsdl-cdsl",
    "title": "Capital Markets: Primary Issue Modes (IPO, FPO, OFS) & Depository Architecture (NSDL, CDSL)",
    "shortDefinition": "The structural framework of India's capital markets: public issue mechanisms (Book Building process, Floor Price, Price Band [max 20% spread], Cut-Off Price, ASBA via UPI), Offer for Sale (OFS), Qualified Institutional Placement (QIP), and the paperless two-tier depository architecture under the Depositories Act 1996 (National Securities Depository Limited [NSDL, sponsored by NSE/IDBI, 1996] and Central Depository Services Limited [CDSL, sponsored by BSE/banks, 1999]), Dematerialization (Demata: DRF/RRF), ISIN 12-digit code structure, and SEBI listing regulations.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Financial Markets, Fixed Income & Derivatives Architecture",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-09",
    "slug": "fixed-income-mathematics-bond-pricing-yield-to-maturity-macaulay-duration-and-convexity",
    "title": "Fixed Income Mathematics: Bond Pricing, Yield to Maturity (YTM), Macaulay Duration & Convexity",
    "shortDefinition": "The mathematical and financial valuation of fixed-income debt securities: Bond Pricing formula as the present value of future coupon cash flows plus par redemption ($\\text{Price} = \\sum \\frac{C}{(1+y)^t} + \\frac{M}{(1+y)^n}$), the inverse relationship between Bond Price and Yield, Clean Price vs Dirty Price (Dirty = Clean + Accrued Interest), Yield to Maturity (YTM: internal rate of return assuming reinvestment at YTM), Macaulay Duration (weighted average time to cash flow recovery), Modified Duration ($\\text{MD} = \\frac{D_{\\text{Mac}}}{1 + y}$ measuring price sensitivity to $\\Delta \\text{yield}$), and Convexity as second-order curvature protection.",
    "difficulty": "ADVANCED",
    "topicTitle": "Financial Markets, Fixed Income & Derivatives Architecture",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-10",
    "slug": "financial-derivatives-forwards-futures-options-payoffs-and-interest-rate-swaps",
    "title": "Financial Derivatives: Forwards vs Futures, Call & Put Option Payoffs, and Swaps (IRS)",
    "shortDefinition": "The financial engineering and risk management mechanics of derivative instruments: Forwards (bilateral OTC, customizable, credit risk) vs Futures (exchange-traded on NSE/BSE, standardized, daily MTM margins via Clearing Corporation, zero credit risk), Options contracts (Call Option: right to buy vs Put Option: right to sell, Strike Price $K$, In-the-Money [ITM], At-the-Money [ATM], Out-of-the-Money [OTM], Intrinsic Value + Time Value), Option Payoff profiles, and Interest Rate Swaps (IRS: Plain Vanilla Fixed-for-Floating swaps benchmarked to MIBOR / SOFR).",
    "difficulty": "ADVANCED",
    "topicTitle": "Financial Markets, Fixed Income & Derivatives Architecture",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-11",
    "slug": "collective-investment-vehicles-mutual-funds-nav-aif-categories-and-reits-invits",
    "title": "Collective Investment Vehicles: Mutual Funds, Net Asset Value (NAV), AIFs & REITs/InvITs",
    "shortDefinition": "The regulatory and operational framework of collective pooling vehicles under SEBI regulations: Mutual Funds (3-tier trust structure: Sponsor, Board of Trustees, Asset Management Company [AMC], Custodian), Net Asset Value formula ($\\text{NAV} = \\frac{\\text{Total Assets} - \\text{Total Liabilities}}{\\text{Total Units Outstanding}}$), Open-Ended vs Close-Ended vs Exchange Traded Funds (ETFs), Alternate Investment Funds (AIF Regulations 2012: Category I [Venture Capital, SME, Social Impact], Category II [PE, Real Estate, Debt], Category III [Hedge Funds, complex trading]), and Real Estate / Infrastructure Investment Trusts (REITs & InvITs).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Financial Markets, Fixed Income & Derivatives Architecture",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-12",
    "slug": "insurance-and-pension-systems-principles-of-insurance-bima-trinity-and-national-pension-system",
    "title": "Insurance & Pension Systems: 6 Fundamental Principles, IRDAI Bima Trinity & NPS",
    "shortDefinition": "The legal and regulatory framework of insurance and retirement pensions in India: the 6 classical principles of insurance law (Utmost Good Faith [Uberrimae Fidei & Section 45 of Insurance Act 1938], Insurable Interest, Indemnity, Subrogation, Contribution, and Proximate Cause [Causa Proxima]), IRDAI's \"Insurance for All by 2047\" Bima Trinity reforms (Bima Sugam digital marketplace, Bima Vistaar composite product, Bima Vahak women-led distribution), and the National Pension System (NPS: Tier 1 locked-in retirement account vs Tier 2 voluntary savings account, PFRDA regulation, CRA, and Annuity Service Providers).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Financial Markets, Fixed Income & Derivatives Architecture",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-13",
    "slug": "factoring-forfaiting-and-treds-trade-receivables-financing-mechanisms",
    "title": "Factoring, Forfaiting & TReDS Architecture: Trade Receivables Financing Mechanisms",
    "shortDefinition": "The institutional financing of business trade receivables: Factoring under the Factoring Regulation Act 2011 (amended 2021: non-recourse vs recourse factoring, assignment of receivables, factoring vs bill discounting) vs Forfaiting (medium-to-long term 100% non-recourse export receivables financing guaranteed by an Aval / Bank Guarantee), and the RBI-regulated Trade Receivables Discounting System (TReDS: electronic platform connecting MSME sellers, corporate/government buyers, and multiple financiers for transparent competitive reverse auction discounting).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Financial Markets, Fixed Income & Derivatives Architecture",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-14",
    "slug": "forex-market-mechanics-direct-vs-indirect-quotes-cross-rates-and-fedaic-rules",
    "title": "Forex Market Mechanics: Direct vs Indirect Quotes, Cross Rates, FEDAI Rules & Nostro/Vostro Accounts",
    "shortDefinition": "The technical operations of the foreign exchange market: Direct Quotation (units of domestic currency per 1 foreign currency unit: 1 USD = ₹83.50) vs Indirect Quotation, Bid-Ask Spread and the Rule \"Buy Low, Sell High\" from the banker's perspective, Cross Rate calculations, Settlement dates (Cash/Value Today, TOM / Value Tomorrow, Spot / Value Day After Tomorrow [T+2], Forward contracts), FEDAI (Foreign Exchange Dealers' Association of India) statutory rules, and Correspondent Banking accounts (Nostro: \"Our account with you\", Vostro: \"Your account with us\", Loro: \"Their account with them\").",
    "difficulty": "ADVANCED",
    "topicTitle": "Foreign Exchange Markets & NRI Banking Framework",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-15",
    "slug": "nri-deposit-accounts-framework-nre-nro-and-fcnr-b-comparative-matrix",
    "title": "NRI Deposit Accounts Framework: NRE vs NRO vs FCNR(B) Comparative Architecture",
    "shortDefinition": "The statutory regime governing Non-Resident Indian (NRI) and Person of Indian Origin (PIO/OCI) bank accounts under Foreign Exchange Management (Deposit) Regulations: Non-Resident External (NRE: Rupee-denominated, fully repatriable, exempt from Indian income tax, foreign currency conversion risk borne by depositor), Non-Resident Ordinary (NRO: Rupee-denominated for legitimate domestic Indian incomes like rent/dividends, subject to Indian TDS/income tax, restricted repatriation up to USD 1 Million per financial year), and Foreign Currency Non-Resident (Bank) (FCNR[B]: foreign currency denominated term deposits for 1 to 5 years, zero currency risk to depositor, tax-free).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Foreign Exchange Markets & NRI Banking Framework",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-16",
    "slug": "sustainable-finance-climate-risk-framework-green-deposits-and-brsr-reporting",
    "title": "Sustainable Finance: Climate Risk Framework, Green Deposits & BRSR Reporting",
    "shortDefinition": "The emerging regulatory framework for sustainable green banking in India: RBI's Framework for Acceptance of Green Deposits (April 2023: dedicated allocation of deposit proceeds to green activities like renewable energy, clean transport, and energy efficiency with third-party verification), Climate Risk taxonomy (Physical Risk [extreme weather/sea level rise] vs Transition Risk [carbon taxes, technological obsolescence]), Task Force on Climate-related Financial Disclosures (TCFD) pillars (Governance, Strategy, Risk Management, Metrics/Targets), and SEBI's Business Responsibility and Sustainability Report (BRSR Core) mandatory disclosures.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Sustainable Finance, Climate Risk & Banking Technology",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-17",
    "slug": "banker-customer-relationship-statutory-nature-rights-and-legal-duties",
    "title": "Banker-Customer Relationship: Statutory Nature, Clayton's Rule, General Lien & Right of Set-Off",
    "shortDefinition": "The multifaceted legal relationship between a banker and customer under the Indian Contract Act 1872, Negotiable Instruments Act 1881, and Banking Regulation Act 1949: General Relationship as Debtor-Creditor for bank deposits (Banker is Debtor; Customer is Creditor) vs Creditor-Debtor for loans, Special Relationships (Bailor-Bailee in Safe Deposit Lockers/Safe Custody, Trustee-Beneficiary in collection/escrow, Agent-Principal in standing instructions), Clayton's Case Rule of appropriation (Section 59-61 Indian Contract Act), Banker's General Lien (Section 171: statutory right to retain goods/securities in the ordinary course of banking without special agreement), and Right of Set-Off (combining debit and credit balances in same right and capacity after reasonable notice).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Banker-Customer Relationship & Customer Service Operations",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-18",
    "slug": "anti-money-laundering-pmla-2002-and-rbi-kyc-master-directions",
    "title": "Anti-Money Laundering (AML) & KYC Master Directions: PMLA 2002, CDD & Reporting Regimes",
    "shortDefinition": "The statutory compliance architecture to combat money laundering and terrorist financing under the Prevention of Money Laundering Act 2002 (PMLA) and RBI Master Direction on KYC: the 3 stages of money laundering (Placement, Layering, Integration), Customer Due Diligence (CDD: identifying customer, verifying identity using Officially Valid Documents [OVDs], and determining Beneficial Ownership [BO: 10% threshold for companies/trusts, 15% for partnerships]), Risk Categorization (Low, Medium, High Risk with periodic KYC update every 10, 8, and 2 years respectively), Central KYC Registry (CKYCR 14-digit number), and mandatory statutory reporting to FIU-IND (Cash Transaction Report [CTR: transactions >₹10 Lakh] and Suspicious Transaction Report [STR within 7 days]).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Banker-Customer Relationship & Customer Service Operations",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-19",
    "slug": "operations-in-accounts-of-special-customers-minors-illiterates-blind-and-insolvents",
    "title": "Special Customer Accounts: Minors, Illiterates, Visually Impaired, Lunatics & Insolvents",
    "shortDefinition": "The legal and operational rules governing bank accounts of special categories of individuals under the Indian Majority Act 1875, Guardians and Wards Act 1890, and RBI guidelines: Minor accounts (natural guardians under Hindu Minority and Guardianship Act 1956 [Father, then Mother], self-operated minor accounts above age 10 for savings accounts without overdrafts, contract with minor is void ab initio under Section 11 Indian Contract Act [Mohori Bibee case]), Illiterate persons (Left Thumb Impression [LTI] witnessed by independent party, joint accounts restricted, no cheque book without special safeguards), Visually Impaired customers (equal banking rights, talking ATMs, biometric authentication), and Lunatics/Insolvents (automatic suspension of mandate upon adjudication).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Banker-Customer Relationship & Customer Service Operations",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-20",
    "slug": "operations-in-accounts-of-entities-proprietorships-partnerships-companies-and-trusts",
    "title": "Entity Accounts Operations: Proprietorships, Partnerships, Companies, Trusts & Clubs",
    "shortDefinition": "The legal and operational mandate architecture for institutional and corporate bank accounts: Sole Proprietorships (no separate legal entity; operated under proprietary mandate), Partnership Accounts under Indian Partnership Act 1932 (implied authority of partners under Section 19, joint and several liability, stop payment upon death/insolvency/retirement of a partner, Rule in Clayton's Case), Limited Liability Partnerships (LLP Act 2008: body corporate with separate legal entity), Joint Stock Companies under Companies Act 2013 (Memorandum of Association [MOA: object clause/Ultra Vires doctrine], Articles of Association [AOA: internal management/Doctrine of Indoor Management in Royal British Bank v Turquand], Board Resolution, Certificate of Incorporation), and Public/Private Trusts under Indian Trusts Act 1882 (Trust Deed, no delegation of trustee powers unless authorized).",
    "difficulty": "ADVANCED",
    "topicTitle": "Banker-Customer Relationship & Customer Service Operations",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-21",
    "slug": "legal-orders-affecting-bank-accounts-garnishee-order-vs-income-tax-attachment-order",
    "title": "Legal Orders on Bank Accounts: Garnishee Orders (Order XXI CPC) vs IT Attachment Orders (Sec 226)",
    "shortDefinition": "The statutory procedure and legal mechanics of judicial and statutory orders attaching customer bank accounts: Garnishee Order under Order XXI Rule 46 of the Code of Civil Procedure 1908 (Judgment Creditor, Judgment Debtor, and Garnishee Bank: Order Nisi [provisional freeze] vs Order Absolute [direction to pay court]), scope of attachment (attaches debts \"due or accruing due\" at the exact moment of service; DOES NOT attach future credits or uncleared cheques), and Income Tax Attachment Order under Section 226(3) of the Income Tax Act 1961 (drastically wider scope: attaches existing funds AND all subsequent/future credits received into the account until the tax demand is fully satisfied).",
    "difficulty": "ADVANCED",
    "topicTitle": "Banker-Customer Relationship & Customer Service Operations",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-22",
    "slug": "safe-deposit-lockers-safe-custody-and-statutory-nomination-framework",
    "title": "Safe Deposit Lockers & Nomination: Revised RBI Directions 2021/2023 & Claim Settlement",
    "shortDefinition": "The regulatory and legal regime governing Safe Deposit Lockers, Safe Custody, and Statutory Nomination under Sections 45ZA to 45ZF of the Banking Regulation Act 1949: Revised RBI Locker Directions (Supreme Court Amitabha Dasgupta v UBI ruling: model stamped locker agreement, term deposit as locker rent security [max 3 years' rent + break-open charges], bank liability capped at 100 times annual locker rent for fire/theft/building collapse caused by bank negligence), Breaking open lockers (procedure for overdue rent / inactive lockers after 3 years), and Statutory Nomination rules (nominee receives valid discharge for bank; nominee acts as trustee for legal heirs; settlement timeline strictly within 15 days of claim receipt).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Banker-Customer Relationship & Customer Service Operations",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-23",
    "slug": "cash-operations-management-clean-note-policy-and-ficn-counterfeit-detection",
    "title": "Cash Operations & Currency Management: Clean Note Policy & Counterfeit (FICN) Detection Rules",
    "shortDefinition": "The statutory guidelines governing cash operations and sovereign currency under the RBI Act 1934 and Reserve Bank of India (Note Refund) Rules 2009 (amended 2018): Clean Note Policy (ban on writing/scribbling on notes, stapling notes, and sorting into ATM-fit/soiled), Note classification (Soiled Notes [dirty/limp], Mutilated Notes [portion missing or composed of more than two pieces], Imperfect Notes [obliterated/indecipherable]), and Forged / Counterfeit Currency (Fake Indian Currency Notes - FICN) impounding protocol (mandatory impounding with \"COUNTERFEIT NOTE IMPOUNDED\" stamp; no return to customer; issuing receipt; filing FIR with police if 5 or more fake notes detected in a single transaction).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Banker-Customer Relationship & Customer Service Operations",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-24",
    "slug": "principles-of-bank-lending-and-working-capital-assessment-turnover-mpbf-and-cash-budget",
    "title": "Principles of Lending & Working Capital Assessment: Nayak Turnover, Tandon MPBF & Cash Budget",
    "shortDefinition": "The foundational credit underwriting architecture of commercial banks: The 5 Principles of Sound Lending (Safety, Liquidity, Profitability, Purpose, Spread of Risk), the 5 Cs of Credit (Character, Capacity, Capital, Collateral, Conditions), and the 3 classic Working Capital assessment methodologies: Turnover Method (P.R. Nayak Committee: working capital requirements assessed at 25% of projected annual turnover, with bank financing min 20% and borrower margin min 5% for limits up to ₹5 Crore), Maximum Permissible Bank Finance (MPBF - Prakash Tandon & K.B. Chore Committees: Method I [Bank funds 75% of Working Capital Gap] and Method II [Bank funds 75% of Current Assets less Current Liabilities, mandating min 1.33 Current Ratio]), and the Cash Budget System (for seasonal industries like sugar, construction, tea).",
    "difficulty": "ADVANCED",
    "topicTitle": "Principles of Lending, Credit Assessment & Working Capital Methods",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-25",
    "slug": "modes-of-creating-charges-on-securities-pledge-hypothecation-mortgage-lien-and-assignment",
    "title": "Modes of Creating Charges on Securities: Pledge vs Hypothecation vs Mortgage vs Assignment vs Lien",
    "shortDefinition": "The statutory mechanisms for creating legal security charges over borrower assets to secure bank advances: Pledge (Section 172 Indian Contract Act: bailment of movable goods with actual or constructive delivery of possession to bank; e.g. Gold loans, warehouse receipts), Hypothecation (Section 2(1)(n) SARFAESI Act 2002: charge on movable property without delivery of possession; borrower retains possession; e.g. stock, plant, vehicle), Mortgage (Section 58 Transfer of Property Act 1882: transfer of interest in specific immovable property; 6 types including Simple Mortgage and Equitable / Title Deed Mortgage), Assignment (Section 130 Transfer of Property Act: transfer of actionable claims like LIC policies, supply bills, book debts), and Banker's Lien.",
    "difficulty": "ADVANCED",
    "topicTitle": "Principles of Lending, Credit Assessment & Working Capital Methods",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-26",
    "slug": "letters-of-credit-operational-mechanism-parties-types-and-ucpdc-600-rules",
    "title": "Letters of Credit (LC): Operational Mechanism, Parties, Types & UCPDC 600 Rules",
    "shortDefinition": "The international and domestic trade finance architecture of Documentary Credits (Letters of Credit - LC) governed globally by the ICC Uniform Customs and Practice for Documentary Credits (UCPDC 600): The 6 key parties (Applicant [Buyer], Issuing Bank, Beneficiary [Seller], Advising Bank, Confirming Bank, Negotiating / Nominated Bank), Fundamental Doctrines (Autonomy of Credit [LC is independent of underlying sales contract] and Strict Compliance of Documents), Document Examination Standard (Art 14: max 5 banking days), and Types of LCs (Irrevocable, Confirmed, Sight vs Usance, Revolving, Transferable, Back-to-Back, Red Clause [pre-shipment advance], Green Clause [pre-shipment advance + storage/warehousing], Standby LC [ISPB / ISP98 as guarantee substitute]).",
    "difficulty": "ADVANCED",
    "topicTitle": "Non-Fund Based Facilities & Trade Finance Operations",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-27",
    "slug": "bank-guarantees-financial-performance-statutory-invocations-and-co-acceptance",
    "title": "Bank Guarantees: Financial vs Performance, Statutory Invocations & Section 28 Limitation",
    "shortDefinition": "The legal framework of Bank Guarantees under the Indian Contract Act 1872 and judicial doctrines: Tripartite Contract of Guarantee (Section 126: Principal Debtor, Creditor, and Surety/Guarantor Bank), Financial Guarantees (100% credit risk for loan repayment/mobilization advance) vs Performance Guarantees (breach of contract/bid bonds/tender security), Unconditional vs Conditional guarantees, Invocation grounds and court injunctions (Supreme Court rules: injunction granted ONLY in cases of established egregiousness fraud or irretrievable injustice), and the Claim Limitation Period under Section 28 of the Indian Contract Act (minimum 1-year claim period post-expiry).",
    "difficulty": "ADVANCED",
    "topicTitle": "Non-Fund Based Facilities & Trade Finance Operations",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-28",
    "slug": "export-finance-mechanisms-pre-shipment-post-shipment-pcfc-and-ecgc-cover",
    "title": "Export Finance & Credit Insurance: Packing Credit (Rupee & PCFC), Post-Shipment & ECGC",
    "shortDefinition": "The specialized export credit architecture under RBI Master Directions and Foreign Trade Policy: Pre-Shipment Export Credit / Packing Credit (concessional working capital to purchase raw materials, manufacture, and pack export goods against confirmed order/LC, maximum tenor 270/360 days), Pre-Shipment Credit in Foreign Currency (PCFC benchmarked to SOFR / EURIBOR at international rates), Post-Shipment Export Credit (financing receivables after shipment against export bills, FOB/CIF bills discounted/purchased, Gold Card Scheme for exporters), and Export Credit Guarantee Corporation of India (ECGC: statutory credit insurance protecting banks against export credit default [Whole Turnover Post-Shipment Guarantee - WTPSG, 90% cover] and commercial/political cross-border buyer default).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Non-Fund Based Facilities & Trade Finance Operations",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-29",
    "slug": "core-banking-systems-architecture-data-center-redundancy-and-disaster-recovery-rto-rpo",
    "title": "Core Banking Systems (CBS) & Business Continuity: Data Centers, RTO & RPO Metrics",
    "shortDefinition": "The enterprise technological infrastructure of modern banking: Core Banking Solutions (CBS: centralized database where branches act as access points, customer of the bank rather than customer of the branch; e.g. Finacle, BaNCS, Flexcube), Data Center (DC) and Disaster Recovery (DR) site architecture (geographic separation in different seismic zones), Business Continuity Planning (BCP), and the two foundational disaster metrics: Recovery Time Objective (RTO: maximum acceptable downtime to restore banking services) and Recovery Point Objective (RPO: maximum acceptable data loss measured in time, near-zero RPO using synchronous data replication).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Digital Banking, Payment Rails & Information Security",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-30",
    "slug": "electronic-payment-rails-rtgs-neft-upi-imps-nach-and-central-bank-digital-currency-cbdc",
    "title": "Electronic Payment Rails: RTGS, NEFT, IMPS, UPI, NACH, AePS & Digital Rupee (e₹)",
    "shortDefinition": "The digital payment clearing and settlement infrastructure of India operated by the Reserve Bank of India and the National Payments Corporation of India (NPCI under Payment and Settlement Systems Act 2007): RTGS (Real Time Gross Settlement: high-value wholesale, minimum ₹2 Lakh, continuous individual order settlement, 24x7x365) vs NEFT (National Electronic Funds Transfer: retail, half-hourly batched settlement across 48 batches daily, no minimum limit, zero customer charges online, 24x7), NPCI payment rails (IMPS: instant 24x7 up to ₹5 Lakh, UPI: Virtual Payment Address [VPA] / AutoPay, NACH: bulk ACH debit/credit mandate, AePS: Aadhaar biometric micro-ATMs), and the Central Bank Digital Currency (CBDC / Digital Rupee - e₹: sovereign tokenized legal tender issued directly by RBI on distributed ledger).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Digital Banking, Payment Rails & Information Security",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-31",
    "slug": "cyber-security-framework-in-banks-soc-csirt-iso-27001-and-it-act-2000-statutory-provisions",
    "title": "Cyber Security in Banks: SOC, CSIRT, ISO 27001 & IT Act 2000 Statutory Framework",
    "shortDefinition": "The cybersecurity governance and statutory compliance architecture for banking institutions: RBI Cyber Security Framework (June 2016 & Master Directions 2023: Security Operations Center [SOC 24x7], Cyber Security Incident Response Team [CSIRT], Chief Information Security Officer [CISO] reporting directly to Risk Committee), ISO/IEC 27001 Information Security Management System (ISMS: Confidentiality, Integrity, Availability - CIA Triad), mandatory reporting of cyber incidents to CERT-In and RBI within 6 hours, Customer Liability Framework for Unauthorized Electronic Transactions (Zero Liability vs Limited Liability based on 3-day reporting window), and penal provisions under the Information Technology Act 2000 (Sections 43, 66C [Identity Theft], 66D [Cheating by Impersonation], 72 [Breach of Confidentiality]).",
    "difficulty": "ADVANCED",
    "topicTitle": "Digital Banking, Payment Rails & Information Security",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-32",
    "slug": "banking-ethics-whistleblower-framework-and-corporate-governance-standards",
    "title": "Banking Ethics & Corporate Governance: Whistleblower Mechanisms & Codes of Conduct",
    "shortDefinition": "The ethical, behavioral, and fiduciary governance architecture of banking institutions: Principles of Banking Ethics (Integrity, Transparency, Objectivity, Confidentiality, Conflict of Interest mitigation), Whistleblower Policy (Section 177 Companies Act 2013: Vigil Mechanism for directors/employees to report unethical behavior with safeguards against victimization), RBI Corporate Governance Guidelines for Commercial Banks (Uday Kotak Committee: Separation of Chairman and MD/CEO, independent directors, Audit Committee of Board [ACB], Committee on Customer Service), and Fair Practices Code (FPC: transparent loan sanction, non-coercive recovery, and BCRBI customer charters).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Digital Banking, Payment Rails & Information Security",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-33",
    "slug": "accounting-foundations-gaap-conventions-and-ind-as-ifrs-convergence",
    "title": "Accounting Foundations: GAAP Principles, Accounting Conventions & Ind AS Framework",
    "shortDefinition": "The bedrock concepts and conventions of financial accounting: The 4 Core Accounting Assumptions (Business Entity, Going Concern, Money Measurement, Accounting Period), Accounting Principles (Historical Cost, Dual Aspect [$Assets = Liabilities + Capital$], Revenue Realization, Matching Principle), Accounting Conventions (Conservatism / Prudence [anticipate no profits, provide for all possible losses], Full Disclosure, Consistency, Materiality), and the Indian Accounting Standards (Ind AS) aligned with International Financial Reporting Standards (IFRS) under the Companies (Indian Accounting Standards) Rules 2015.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Accounting Foundations & Financial Statements Architecture",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-34",
    "slug": "double-entry-bookkeeping-golden-rules-journal-entries-and-ledger-balancing",
    "title": "Double-Entry Bookkeeping: The 3 Golden Rules, Journalizing & Ledger Balancing",
    "shortDefinition": "The mechanics of double-entry financial recordkeeping: Classification of accounts into Real, Personal, and Nominal accounts, The 3 Traditional Golden Rules of Accounting (Personal: \"Debit the Receiver, Credit the Giver\"; Real: \"Debit what comes in, Credit what goes out\"; Nominal: \"Debit all Expenses & Losses, Credit all Incomes & Gains\"), Modern US Classification (Assets/Expenses [Debit increases, Credit decreases] vs Liabilities/Capital/Revenues [Credit increases, Debit decreases]), Journalizing transactions, and Ledger posting and balancing (Debit balance vs Credit balance).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Accounting Foundations & Financial Statements Architecture",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-35",
    "slug": "trial-balance-preparation-classification-of-accounting-errors-and-rectification-entries",
    "title": "Trial Balance & Rectification of Errors: Classification of Errors & Suspense Account",
    "shortDefinition": "The verification of ledger arithmetic and error rectification in accounting: Trial Balance (statement of debit and credit ledger balances proving arithmetical accuracy), The 4 Classical Types of Accounting Errors (Errors of Omission [Complete vs Partial], Errors of Commission [wrong amount/wrong side/casting error], Errors of Principle [violating capital vs revenue expenditure], Compensating Errors [two errors neutralizing each other]), Errors affecting vs not affecting Trial Balance agreement, and the Suspense Account (temporary ledger account created to artificially balance the trial balance pending error investigation).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Accounting Foundations & Financial Statements Architecture",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-36",
    "slug": "bank-reconciliation-statement-brs-mechanics-timing-differences-and-reconciliation-rules",
    "title": "Bank Reconciliation Statement (BRS): Timing Differences, Direct Entries & Reconciliation Rules",
    "shortDefinition": "The reconciliation mechanics between the Cash Book (Bank Column maintained by the customer/firm) and the Pass Book / Bank Statement (maintained by the bank): Causes of disagreement (Timing Differences [Cheques issued but not presented for payment, Cheques deposited but not cleared/collected], Direct Bank Transactions [Interest credited by bank, Bank charges/commission debited, Direct collections from debtors, Direct standing order payments], and Errors in Cash Book or Pass Book), Favorable Balances (Debit balance in Cash Book = Credit balance in Pass Book) vs Overdraft / Unfavorable Balances (Credit balance in Cash Book = Debit balance in Pass Book), and Adjusted Cash Book method.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Accounting Foundations & Financial Statements Architecture",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-37",
    "slug": "depreciation-accounting-methods-straight-line-slm-written-down-value-wdv-and-sinking-fund",
    "title": "Depreciation Accounting: Straight Line (SLM), Written Down Value (WDV) & Sinking Fund Methods",
    "shortDefinition": "The statutory and mathematical allocation of depreciable asset cost over its estimated useful economic life under Ind AS 16 / AS 6 and Companies Act 2013 (Schedule II): Causes of depreciation (Wear and Tear, Efflux of Time, Obsolescence), Straight Line Method (SLM: constant fixed annual depreciation charge, asset book value reaches zero or scrap value), Written Down Value / Diminishing Balance Method (WDV: constant percentage applied to diminishing book value, higher depreciation in initial years, asset book value never reaches zero mathematically; recognized under Income Tax Act 1961 Section 32), and Sinking Fund / Annuity Methods.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Financial Mathematics, Depreciation & Capital Budgeting Architecture",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-38",
    "slug": "time-value-of-money-compounding-discounting-annuities-sinking-funds-and-amortization",
    "title": "Time Value of Money (TVM): Compounding, Discounting, Annuities & Loan Amortization",
    "shortDefinition": "The core quantitative engine of financial mathematics and banking: Future Value ($FV = PV(1+r)^n$), Present Value ($PV = \\frac{FV}{(1+r)^n}$), Rule of 72 ($t \\approx \\frac{72}{r}$) and Rule of 114 (tripling money), Effective Annual Rate (EAR: $EAR = (1 + \\frac{r}{m})^m - 1$), Ordinary Annuity (cash flows at end of period) vs Annuity Due (cash flows at beginning of period, $PV_{\\text{Due}} = PV_{\\text{Ord}} \\times (1+r)$), Sinking Funds, Perpetuities ($PV = \\frac{C}{r}$ and Growing Perpetuity $PV = \\frac{C}{r - g}$), and Equated Monthly Installments (EMI loan amortization formula).",
    "difficulty": "ADVANCED",
    "topicTitle": "Financial Mathematics, Depreciation & Capital Budgeting Architecture",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-39",
    "slug": "capital-budgeting-techniques-payback-npv-irr-profitability-index-and-discounted-payback",
    "title": "Capital Budgeting Techniques: Payback Period, Net Present Value (NPV), IRR & PI Rules",
    "shortDefinition": "The appraisal and decision-making framework for long-term capital investments: Non-Discounted Techniques (Payback Period [PBP], Accounting Rate of Return [ARR]) vs Discounted Cash Flow (DCF) Techniques (Discounted Payback Period, Net Present Value [$\\text{NPV} = \\sum \\frac{CF_t}{(1+k)^t} - C_0$], Internal Rate of Return [IRR: discount rate where $\\text{NPV} = 0$], and Profitability Index [$\\text{PI} = \\frac{\\text{PV of Future Cash Inflows}}{\\text{Initial Outflow}}$]), Decision rules (Accept project if $\\text{NPV} > 0$, $\\text{IRR} > k$, $\\text{PI} > 1.0$), and resolving NPV vs IRR conflicts in mutually exclusive projects (Superiority of NPV due to realistic reinvestment rate assumption at cost of capital $k$).",
    "difficulty": "ADVANCED",
    "topicTitle": "Financial Mathematics, Depreciation & Capital Budgeting Architecture",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-40",
    "slug": "financial-ratio-analysis-liquidity-solvency-profitability-turnover-and-dscr-metrics",
    "title": "Financial Ratio Analysis: Liquidity, Solvency, Turnover & Debt Service Coverage (DSCR)",
    "shortDefinition": "The quantitative financial statement analysis architecture used in bank credit underwriting: Liquidity Ratios (Current Ratio [$\\text{CR} = \\frac{\\text{Current Assets}}{\\text{Current Liabilities}}$, benchmark 1.33:1 under Tandon Method II], Quick / Acid-Test Ratio [$\\text{QR} = \\frac{\\text{Quick Assets (CA - Stock - Prepaid)}}{\\text{Current Liabilities}}$, benchmark 1:1]), Solvency / Leverage Ratios (Debt-Equity Ratio [$\\text{DER} = \\frac{\\text{Total Debt}}{\\text{Tangible Net Worth}}$, benchmark 2:1], Interest Coverage Ratio [$\\text{ICR} = \\frac{\\text{EBIT}}{\\text{Interest}}$]), Debt Service Coverage Ratio (DSCR: the supreme term-lending metric, $\\text{DSCR} = \\frac{\\text{PAT} + \\text{Depreciation} + \\text{Interest on Term Loan}}{\\text{Term Loan Installment} + \\text{Interest on Term Loan}}$, benchmark 1.5 to 2.0), and Turnover / Efficiency Ratios (Inventory Turnover, Debtors Collection Period).",
    "difficulty": "ADVANCED",
    "topicTitle": "Financial Ratio Analysis & Banking Taxation Architecture",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-41",
    "slug": "cost-accounting-and-marginal-costing-break-even-point-bep-margin-of-safety-and-pv-ratio",
    "title": "Marginal Costing & Break-Even Analysis: Contribution, PV Ratio, BEP & Margin of Safety",
    "shortDefinition": "The cost accounting and managerial decision-making framework: Fixed Costs (remain constant regardless of production volume) vs Variable Costs (vary directly with production output), Contribution ($C = \\text{Sales} - \\text{Variable Cost} = \\text{Fixed Cost} + \\text{Profit}$), Profit-Volume Ratio (PV Ratio: $\\text{PVR} = \\frac{\\text{Contribution}}{\\text{Sales}} \\times 100$), Break-Even Point in Units ($\\text{BEP}_{\\text{units}} = \\frac{\\text{Fixed Cost}}{\\text{Contribution per Unit}}$), Break-Even Point in Value ($\\text{BEP}_{\\text{Rs}} = \\frac{\\text{Fixed Cost}}{\\text{PV Ratio}}$), Margin of Safety (MOS: $\\text{MOS} = \\text{Actual Sales} - \\text{Break-Even Sales} = \\frac{\\text{Profit}}{\\text{PV Ratio}}$), and Cost-Volume-Profit (CVP) analysis.",
    "difficulty": "ADVANCED",
    "topicTitle": "Financial Ratio Analysis & Banking Taxation Architecture",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-42",
    "slug": "banking-taxation-architecture-tds-under-income-tax-act-and-gst-applicability-on-banking-services",
    "title": "Banking Taxation Architecture: TDS Provisions (Sec 194A, 194N) & GST on Banking Services",
    "shortDefinition": "The statutory tax withholding and indirect taxation regime applicable to banking operations: Tax Deducted at Source (TDS under Income Tax Act 1961: Section 194A for interest on bank fixed deposits [threshold ₹40,000 for standard individuals, ₹50,000 for Senior Citizens; Form 15G / 15H self-declarations; 10% standard TDS or 20% under Section 206AA if PAN is not provided], Section 194N for cash withdrawals [2% TDS on cash withdrawals >₹1 Crore per year, or >₹20 Lakh for non-filers]), and Goods and Services Tax (GST: 18% standard rate on banking fee-based services [processing fees, locker rent, ATM fees, card charges]; interest on loans/deposits is exempt from GST).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Financial Ratio Analysis & Banking Taxation Architecture",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-43",
    "slug": "retail-banking-architecture-customer-segmentation-business-models-and-cross-selling",
    "title": "Retail Banking Architecture: Customer Segmentation Models & Cross-Selling Metrics",
    "shortDefinition": "The operational and structural framework of Retail Banking under IIBF RBWM: Characteristics (B2C mass retail, multiple products, low ticket size, high customer volume, diversified risk spread), Customer Segmentation Models (Mass Market [<₹10 Lakh income], Mass Affluent [₹10-50 Lakh], High Net Worth Individuals [HNI: ₹50 Lakh - ₹5 Crore], Ultra-HNI [>₹5 Crore investable surplus]), Organizational Business Models (Horizontally Organized, Vertically Organized, Regionally Organized, Matrix Structure), and Cross-Selling / Upselling (Cross-sell ratio = Products per customer; target > 3.0).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Retail Banking Products & Wealth Management Architecture",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-44",
    "slug": "retail-lending-products-home-loans-ltv-emi-credit-cards-and-education-loans",
    "title": "Retail Lending Products: Home Loans (LTV & Risk Weights), Auto, Education & Credit Cards",
    "shortDefinition": "The underwriting parameters, regulatory ceilings, and statutory norms for major retail asset products: Housing Loans under RBI Prudential Norms (Loan-to-Value [LTV] ceilings: up to ₹30 Lakh loan = max 90% LTV; >₹30 Lakh to ₹75 Lakh = max 80% LTV; >₹75 Lakh = max 75% LTV; prohibition on adding stamp duty/registration to property cost for LTV calculations on loans >₹10 Lakh), Floating vs Fixed Interest Rates (no foreclosure/prepayment penalties on floating rate retail term loans to individuals), Education Loans (Model IBA Scheme: up to ₹4 Lakh no margin/collateral; >₹4 Lakh to ₹7.5 Lakh 5% margin with third-party guarantee; >₹7.5 Lakh 15% margin with tangible collateral), and Credit Cards (20 to 50 days interest-free credit, Minimum Amount Due - MAD 5%, Most Important Terms and Conditions - MITC).",
    "difficulty": "ADVANCED",
    "topicTitle": "Retail Banking Products & Wealth Management Architecture",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-45",
    "slug": "credit-information-companies-cics-cibil-scoring-and-debt-recovery-agent-dra-guidelines",
    "title": "Credit Information Companies (CICs): CIBIL Scoring & RBI Debt Recovery Agent (DRA) Code",
    "shortDefinition": "The credit scoring, credit reporting, and recovery governance architecture under the Credit Information Companies (Regulation) Act 2005 (CICRA) and RBI guidelines: The 4 Licensed CICs in India (TransUnion CIBIL, Equifax, Experian, CRIF High Mark), CIBIL TransUnion Score (numeric score ranging from 300 to 900; scores $\\ge 750$ considered prime benchmark), Credit Information Report (CIR: trade lines, DPD [Days Past Due], settled/written-off flags), RBI Debt Recovery Agent (DRA) Guidelines (mandatory IIBF 100/50-hour DRA training and certification, calling hours strictly between 8:00 AM and 7:00 PM, ban on intimidation/harassment/abusive language, maintaining recording of recovery calls).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Retail Banking Products & Wealth Management Architecture",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-46",
    "slug": "wealth-management-portfolio-allocation-estate-planning-and-rera-regulations",
    "title": "Wealth Management & Estate Planning: Asset Allocation, Trusts, Wills & RERA Act 2016",
    "shortDefinition": "The wealth advisory, fiduciary planning, and real estate governance architecture: The Wealth Management Process (Financial Profiling, Risk Profiling [Conservative, Moderate, Aggressive], Asset Allocation [Strategic Asset Allocation - SAA vs Tactical Asset Allocation - TAA], Portfolio Rebalancing), Estate Planning (Wills under Indian Succession Act 1925: Attestation by 2 witnesses, Probate, Codicil, and Private Family Trusts under Indian Trusts Act 1882 for asset protection), and Real Estate (Regulation and Development) Act 2016 (RERA: mandatory registration of projects $>500 \\text{ sq m}$ or $>8$ apartments, 70% of buyer funds deposited in dedicated escrow account, Carpet Area definition, 5-year defect liability period).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Retail Banking Products & Wealth Management Architecture",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-47",
    "slug": "banking-regulation-act-1949-licensing-governance-and-reserve-bank-regulatory-powers",
    "title": "Banking Regulation Act 1949: Statutory Powers, Licensing & Reserve Bank Governance Oversight",
    "shortDefinition": "The foundational statutory statute governing commercial and cooperative banking in India: Banking Regulation Act 1949: Definition of Banking (Section 5(b): accepting deposits of money from public withdrawable by cheque/draft for lending or investment), Permitted vs Prohibited businesses (Section 6 [permitted banking activities] vs Section 8 [prohibition of trading in goods] and Section 9 [disposal of non-banking assets within 7 years]), Licensing of Banking Companies (Section 22), Reserve Bank's Inspection and Audit Powers (Section 35), Power to Supersede Board of Directors and Remove Management (Section 36AA & 36ACA), Power to give binding directions (Section 35A), and Compulsory Amalgamation and Moratorium (Section 45).",
    "difficulty": "ADVANCED",
    "topicTitle": "Banking Regulation Act 1949 & Statutory Powers of RBI",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-48",
    "slug": "prudential-exposure-norms-large-exposure-framework-lef-and-connected-lending-curbs",
    "title": "Prudential Exposure Norms & Large Exposure Framework (LEF): Single & Group Borrower Limits",
    "shortDefinition": "The statutory concentration risk and exposure management architecture under Basel III and RBI Master Directions: Large Exposure Framework (LEF: aligned with BCBS standards since April 2019), Exposure defined on Eligible Capital Base (Tier 1 Capital only), Single Counterparty Exposure limit (strictly capped at 20% of Tier 1 Capital; extendable up to 25% with Board approval in exceptional infrastructure cases), Group of Connected Counterparties limit (strictly capped at 25% of Tier 1 Capital), Large Exposure definition (any counterparty exposure $\\ge 10\\%$ of Tier 1 Capital), and connected lending curbs.",
    "difficulty": "ADVANCED",
    "topicTitle": "Banking Regulation Act 1949 & Statutory Powers of RBI",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-49",
    "slug": "deposit-insurance-dicgc-act-1961-rs-5-lakh-coverage-and-claim-settlement-timelines",
    "title": "Deposit Insurance Architecture: DICGC Act 1961, ₹5 Lakh Coverage & 90-Day Payout Rules",
    "shortDefinition": "The statutory deposit safety net under the Deposit Insurance and Credit Guarantee Corporation Act 1961: DICGC as a wholly-owned subsidiary of RBI (established 1961/1978), Coverage Quantum (increased from ₹1 Lakh to ₹5 Lakh per depositor per bank in same right and capacity, effective February 4, 2020), Insured Deposits (Savings, Current, Fixed, Recurring deposits across Commercial Banks, RRBs, LABs, Payments Banks, SFBs, and Cooperative Banks), Insurance Premium (12 paise per ₹100 of assessable deposits per annum, borne 100% by the bank without passing to customer), and the landmark DICGC (Amendment) Act 2021 mandating Interim Claim Payout within 90 days to depositors of banks placed under RBI Directions / Moratorium.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Banking Regulation Act 1949 & Statutory Powers of RBI",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-50",
    "slug": "management-theories-classical-neo-classical-and-modern-leadership-models",
    "title": "Management Foundations: Classical, Neo-Classical, Motivation Theories & Leadership Models",
    "shortDefinition": "The core descriptive management and organizational behavior models tested in RBI Grade B (FM): Classical Theories (Henri Fayol's 14 Principles of Administrative Management, F.W. Taylor's Scientific Management, Max Weber's Bureaucratic Model), Neo-Classical / Human Relations Movement (Elton Mayo's Hawthorne Studies 1924-1932: social and informal group dynamics), Motivation Theories (Maslow's Hierarchy of Needs, Herzberg's Two-Factor Motivation-Hygiene Theory, McGregor's Theory X & Theory Y, McClelland's Three Needs Theory, Vroom's Expectancy Theory, Adam's Equity Theory), and Leadership Models (Blake & Mouton Managerial Grid [9,9 Team Management], Fiedler's Contingency Model, Hersey & Blanchard Situational Leadership Model).",
    "difficulty": "ADVANCED",
    "topicTitle": "Management Theories, Leadership Models & Organisational Behaviour",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-IIBF-51",
    "slug": "organisational-communication-barriers-channels-and-corporate-governance-mechanisms",
    "title": "Organisational Communication & Interpersonal Dynamics: Barriers, Channels & Johari Window",
    "shortDefinition": "The organizational communication and corporate governance dynamics in banking institutions: The Communication Process (Sender, Encoding, Channel, Receiver, Decoding, Feedback, Noise), Communication Directions (Downward [orders/policies], Upward [grievances/reports], Horizontal / Lateral [inter-departmental coordination], Diagonal), Communication Barriers (Filtering, Selective Perception, Information Overload, Semantic barriers, Cultural barriers), Informal Communication (Grapevine: Single Strand, Gossip, Probability, Cluster chain), and the Johari Window interpersonal awareness model (Open Area [Arena], Blind Spot, Hidden Area [Facade], Unknown Area).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Management Theories, Leadership Models & Organisational Behaviour",
    "subjectName": "IIBF & Banking Regulations"
  },
  {
    "id": "CON-GA-01",
    "slug": "global-multilateral-organizations-and-headquarters-directory",
    "title": "Global Multilateral Organizations & Headquarters Directory: Geneva, Vienna, Paris, Rome & Diplomatic Clusters",
    "shortDefinition": "A systematic architectural directory of apex international organizations, United Nations specialized agencies, and global governance bodies categorized by their geographical diplomatic hubs: Geneva (WHO, WTO, ILO, WIPO, UNCTAD), Vienna (IAEA, OPEC, UNIDO, UNODC), Paris (UNESCO, OECD, FATF), Rome (FAO, WFP, IFAD), Washington D.C. (World Bank, IMF), The Hague (ICJ, ICC, OPCW), London (IMO), Montreal (ICAO, WADA), Madrid (UN Tourism), and Nairobi (UNEP, UN-Habitat).",
    "difficulty": "FOUNDATIONAL",
    "topicTitle": "International Organizations & Multilateral Headquarters",
    "subjectName": "General Awareness & Global Institutions"
  },
  {
    "id": "CON-GA-02",
    "slug": "multilateral-development-banks-architecture",
    "title": "Multilateral Development Banks (MDBs): Bretton Woods, Regional Banks & South-South Institutions",
    "shortDefinition": "A comparative analysis of Multilateral Development Banks (MDBs) and international financial institutions: the Bretton Woods twins (World Bank Group and IMF), regional banks (ADB, EIB, IDB, AfDB), and modern South-South institutions (AIIB and NDB). Analyzes founding charters, headquarters, capital subscriptions, voting share structures, and India’s institutional relationship.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "International Organizations & Multilateral Headquarters",
    "subjectName": "General Awareness & Global Institutions"
  },
  {
    "id": "CON-GA-03",
    "slug": "apex-international-reports-and-indices",
    "title": "Apex International Reports, Global Indices & Nodal Publishing Organizations",
    "shortDefinition": "A canonical catalog of flagship global socioeconomic, governance, economic, and environmental reports mapped to their authoritative publishing organizations (UNDP, WIPO, WEF, World Bank, IMF, Transparency International, UNEP). Examines core structural parameters, the Human Development Index (HDI) methodology, and key institutional traps.",
    "difficulty": "FOUNDATIONAL",
    "topicTitle": "Global Indices, Reports & Publishing Bodies",
    "subjectName": "General Awareness & Global Institutions"
  },
  {
    "id": "CON-SCH-01",
    "slug": "government-schemes-classification-and-funding-architecture",
    "title": "Government Schemes Architecture: Classification, Funding Ratios & Nodal Delivery Systems",
    "shortDefinition": "The structural taxonomy of public policy schemes in India: the statutory and budgetary distinction between Central Sector Schemes (100% centrally funded) and Centrally Sponsored Schemes (CSS - Core of Core, Core, and Optional sharing models), standard Center-State funding ratios (60:40, 90:10, 100:0), the Single Nodal Agency (SNA) fund flow mechanism, and Direct Benefit Transfer (DBT) conduits.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Public Policy & Scheme Implementation Framework",
    "subjectName": "Government Schemes & Welfare Architecture"
  },
  {
    "id": "CON-SCH-02",
    "slug": "core-financial-inclusion-and-social-security-schemes",
    "title": "Core Financial Inclusion & Social Security Schemes: PMJDY, PMJJBY, PMSBY & Atal Pension Yojana",
    "shortDefinition": "The statutory framework and operational parameters of India's core universal social security safety net: Pradhan Mantri Jan Dhan Yojana (PMJDY - zero-balance banking and overdraft), Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY - ₹2 Lakh life insurance at ₹436/year), Pradhan Mantri Suraksha Bima Yojana (PMSBY - ₹2 Lakh accidental cover at ₹20/year), and Atal Pension Yojana (APY - guaranteed pension of ₹1,000–₹5,000/month).",
    "difficulty": "FOUNDATIONAL",
    "topicTitle": "Financial Inclusion, Social Security & Enterprise Schemes",
    "subjectName": "Government Schemes & Welfare Architecture"
  },
  {
    "id": "CON-SCH-03",
    "slug": "micro-enterprise-and-street-vendor-credit-frameworks",
    "title": "Micro-Enterprise & Street Vendor Credit Frameworks: PMMY MUDRA, PM SVANidhi & PM Vishwakarma",
    "shortDefinition": "A comparative statutory and financial analysis of institutional micro-credit delivery: Pradhan Mantri MUDRA Yojana (PMMY - Shishu, Kishore, Tarun, and the Budget 2024–25 Tarun Plus category up to ₹20 Lakh), PM SVANidhi (MoHUA street vendor credit up to ₹50,000 with 7% interest subsidy), and PM Vishwakarma (₹13,000 Crore scheme for 18 traditional trades with ₹3 Lakh collateral-free credit at 5% interest and toolkit support).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Financial Inclusion, Social Security & Enterprise Schemes",
    "subjectName": "Government Schemes & Welfare Architecture"
  },
  {
    "id": "CON-SCH-04",
    "slug": "rural-livelihood-and-self-help-group-credit",
    "title": "Rural Livelihood & Self-Help Group Credit: DAY-NRLM, Interest Subvention & CGFMU Architecture",
    "shortDefinition": "The institutional framework of Deendayal Antyodaya Yojana - National Rural Livelihoods Mission (DAY-NRLM): women SHG mobilization, Panchasutra discipline, Revolving Fund (₹20,000–₹30,000), Community Investment Fund, Interest Subvention Scheme (delivering credit at 7% p.a. with 4.5% subvention up to ₹3 Lakh), RBI collateral relaxation up to ₹20 Lakh under CGFMU, and the Lakhpati Didi mandate.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Rural Development, Agriculture & Employment Guarantees",
    "subjectName": "Government Schemes & Welfare Architecture"
  },
  {
    "id": "CON-SCH-05",
    "slug": "employment-guarantee-and-agricultural-income-support",
    "title": "Employment Guarantee & Agricultural Income Support: MGNREGA 2005, PM-KISAN & PMFBY",
    "shortDefinition": "The legal and financial architecture of India’s rural safety nets: the statutory framework of the Mahatma Gandhi National Rural Employment Guarantee Act, 2005 (MGNREGA - legal entitlement to 100 days of wage employment per household, 15-day work guarantee, and Section 7 unemployment allowance), direct agricultural income transfers under PM-KISAN (₹6,000/year in 3 installments), and multi-peril crop insurance under PMFBY (capped farmer premiums: 2% Kharif, 1.5% Rabi, 5% Commercial).",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Rural Development, Agriculture & Employment Guarantees",
    "subjectName": "Government Schemes & Welfare Architecture"
  },
  {
    "id": "CON-ENG-01",
    "slug": "principles-of-effective-written-discourse-and-evaluator-rubrics",
    "title": "Principles of Effective Written Discourse & Evaluator Rubrics",
    "shortDefinition": "Foundational framework of descriptive discourse balancing relevance, structural coherence, factual grounding, and command-word directives.",
    "difficulty": "FOUNDATIONAL",
    "topicTitle": "Foundations of Written Discourse & Syntax",
    "subjectName": "English Language & Descriptive Writing"
  },
  {
    "id": "CON-ENG-02",
    "slug": "sentence-architecture-syntactic-modulation-and-academic-tone",
    "title": "Sentence Architecture, Syntactic Modulation & Academic Tone",
    "shortDefinition": "Techniques for modulating syntactic rhythm, avoiding monotone structures, applying academic hedging, and maintaining formal register.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Foundations of Written Discourse & Syntax",
    "subjectName": "English Language & Descriptive Writing"
  },
  {
    "id": "CON-ENG-03",
    "slug": "paragraph-architecture-the-peel-framework-cohesion-and-scannability",
    "title": "Paragraph Architecture: The PEEL Framework, Cohesion & Scannability",
    "shortDefinition": "First-principles paragraph design using topic sentences, evidentiary substantiation, causal explanation, transitional links, and on-screen formatting.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Foundations of Written Discourse & Syntax",
    "subjectName": "English Language & Descriptive Writing"
  },
  {
    "id": "CON-ENG-04",
    "slug": "prompt-deconstruction-demand-analysis-and-thesis-formulation",
    "title": "Prompt Deconstruction, Demand Analysis & Thesis Formulation",
    "shortDefinition": "The cognitive process of interpreting essay prompts, identifying boundary limits, and formulating a definitive analytical thesis statement.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Essay Writing & Argumentation",
    "subjectName": "English Language & Descriptive Writing"
  },
  {
    "id": "CON-ENG-05",
    "slug": "multi-dimensional-argumentation-pestle-stakeholder-and-cash-frameworks",
    "title": "Multi-Dimensional Argumentation: PESTLE-S, Stakeholder Grids & C.A.S.H.",
    "shortDefinition": "Brainstorming frameworks to unpack complex socio-economic topics across political, economic, social, technological, legal, and environmental dimensions.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Essay Writing & Argumentation",
    "subjectName": "English Language & Descriptive Writing"
  },
  {
    "id": "CON-ENG-06",
    "slug": "introduction-hooks-thematic-development-and-circular-conclusions",
    "title": "Introduction Hooks, Thematic Development & Circular Conclusions",
    "shortDefinition": "Engineering functional opening hooks, maintaining thematic continuity across body sections, and crafting synthesizing circular conclusions.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Essay Writing & Argumentation",
    "subjectName": "English Language & Descriptive Writing"
  },
  {
    "id": "CON-ENG-07",
    "slug": "abstract-philosophical-and-contemporary-policy-debates",
    "title": "Abstract, Philosophical & Contemporary Policy Debates",
    "shortDefinition": "Methodology for demystifying abstract, proverbial prompts and handling controversial policy debates with the balanced central-banker stance.",
    "difficulty": "ADVANCED",
    "topicTitle": "Essay Writing & Argumentation",
    "subjectName": "English Language & Descriptive Writing"
  },
  {
    "id": "CON-ENG-08",
    "slug": "precis-writing-compression-negative-filtering-and-titling",
    "title": "Précis Writing: The 1/3rd Rule, Negative Filtering & Title Formulation",
    "shortDefinition": "The disciplined extraction of core informational hierarchies, eliminating illustrative fluff, and synthesizing a single condensed paragraph under strict word constraints.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Précis Writing & Non-Verbatim Synthesis",
    "subjectName": "English Language & Descriptive Writing"
  },
  {
    "id": "CON-ENG-09",
    "slug": "subjective-reading-comprehension-and-non-verbatim-paraphrasing",
    "title": "Subjective Reading Comprehension & Non-Verbatim Paraphrasing",
    "shortDefinition": "Techniques for answering subjective RC prompts using question-first reverse scanning, 2-sentence synthesis, and the 3-step non-verbatim paraphrase engine.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Précis Writing & Non-Verbatim Synthesis",
    "subjectName": "English Language & Descriptive Writing"
  },
  {
    "id": "CON-ENG-10",
    "slug": "formal-and-informal-letter-writing-modern-full-block-and-grievance-escalation",
    "title": "Formal & Informal Letter Writing: Modern Full-Block & Grievance Escalation",
    "shortDefinition": "Standard modern full-block layout, 3-tier banking grievance escalation hierarchy, and formal versus informal register calibration.",
    "difficulty": "FOUNDATIONAL",
    "topicTitle": "Professional Correspondence & Workplace Writing",
    "subjectName": "English Language & Descriptive Writing"
  },
  {
    "id": "CON-ENG-11",
    "slug": "official-workplace-emails-and-customer-communication-architecture",
    "title": "Official Workplace Emails & Customer Communication Architecture",
    "shortDefinition": "Structural and tonal divergence between official emails and physical letters, covering internal operational escalations and customer conciliation.",
    "difficulty": "INTERMEDIATE",
    "topicTitle": "Professional Correspondence & Workplace Writing",
    "subjectName": "English Language & Descriptive Writing"
  },
  {
    "id": "CON-ENG-12",
    "slug": "institutional-reports-credit-audits-and-situation-analysis-memos",
    "title": "Institutional Reports, Credit Audits & Situation Analysis Memos",
    "shortDefinition": "Formal reporting architecture for regulatory bodies (NABARD, RBI) and the 5-pillar situational triage framework for operational crises.",
    "difficulty": "ADVANCED",
    "topicTitle": "Professional Correspondence & Workplace Writing",
    "subjectName": "English Language & Descriptive Writing"
  },
  {
    "id": "CON-ENG-13",
    "slug": "benchmark-model-essays-thematic-breakdown-and-policy-integration",
    "title": "Benchmark Model Essays: Thematic Breakdown & Policy Integration",
    "shortDefinition": "Curated repository of benchmark 250-word and 600-word model essays across macroeconomics, technology, demographics, and governance with structural deconstructions.",
    "difficulty": "ADVANCED",
    "topicTitle": "Model Exemplars & Structural Deconstructions",
    "subjectName": "English Language & Descriptive Writing"
  },
  {
    "id": "CON-ENG-14",
    "slug": "model-workplace-communications-letters-memos-reports-and-precis-vault",
    "title": "Model Workplace Communications: Letters, Memos, Reports & Précis Vault",
    "shortDefinition": "Curated repository of benchmark formal letters, branch incident analysis memos, institutional reports, and live précis transformations with annotations.",
    "difficulty": "ADVANCED",
    "topicTitle": "Model Exemplars & Structural Deconstructions",
    "subjectName": "English Language & Descriptive Writing"
  },
  {
    "id": "CON-ENG-15",
    "slug": "timed-exam-execution-strategy-keyboard-ergonomics-and-scoring-engine",
    "title": "Timed Exam Execution Strategy, Keyboard Ergonomics & Scoring Engine",
    "shortDefinition": "Real-time clock management across 30-min and 90-min descriptive tests, TCS iON software keyboard quirks, and objective self-evaluation scoring rubrics.",
    "difficulty": "ADVANCED",
    "topicTitle": "Active Practice Arena & Exam Execution Strategy",
    "subjectName": "English Language & Descriptive Writing"
  }
];
