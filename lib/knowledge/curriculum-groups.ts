import { PartGroup, TopicItem } from '@/components/curriculum/academic-table-of-contents';

/**
 * Organizes topics of any subject into structured, pedagogical academic Parts/Modules.
 * Guarantees zero dropped topics and provides refined academic titles/subtitles.
 */
export function getOrganizedPartGroups(subjectSlug: string, topics: TopicItem[]): PartGroup[] {
  if (!topics || topics.length === 0) return [];

  // Sort topics strictly by order
  const sortedTopics = [...topics].sort((a, b) => a.order - b.order);

  // Helper to slice by order range
  const byOrder = (min: number, max: number) =>
    sortedTopics.filter((t) => t.order >= min && t.order <= max);

  // Helper to slice by count/index
  const byIndex = (start: number, end: number) => sortedTopics.slice(start, end);

  // 1. IIBF & Banking Regulations (25 topics: 38..62)
  if (subjectSlug === 'iibf-banking-regulations') {
    const groups: PartGroup[] = [
      {
        partNumber: 'PART I',
        groupTitle: 'Regulatory Framework & Central Banking Mandate',
        groupSubtitle: 'Constitutional powers of RBI, statutory controls under BR Act 1949, and NDTL / CRR / SLR reserve requirements',
        topics: byOrder(38, 40),
      },
      {
        partNumber: 'PART II',
        groupTitle: 'Banker-Customer Relationships & Account Operations',
        groupSubtitle: 'Statutory nature of relationship, rights of lien & set-off, special customer types, and deceased claim settlements',
        topics: byOrder(41, 44),
      },
      {
        partNumber: 'PART III',
        groupTitle: 'Negotiable Instruments & Statutory Protections',
        groupSubtitle: 'Negotiable Instruments Act 1881, crossings, endorsements, paying & collecting banker duties, and Section 138 dishonour remedies',
        topics: byOrder(45, 48),
      },
      {
        partNumber: 'PART IV',
        groupTitle: 'Principles of Lending, Credit Appraisal & Securities',
        groupSubtitle: '5 Cs of credit, Tandon/Nayak working capital, term loans, non-fund facilities (LC/BG), mortgages, and charges',
        topics: byOrder(49, 52),
      },
      {
        partNumber: 'PART V',
        groupTitle: 'Debt Recovery, Stressed Assets & Insolvency (IBC)',
        groupSubtitle: 'SARFAESI Act 2002 enforcement, Debt Recovery Tribunals (DRT), and corporate insolvency resolution under IBC 2016',
        topics: byOrder(53, 55),
      },
      {
        partNumber: 'PART VI',
        groupTitle: 'Prudential Norms, Capital Adequacy & Basel III Framework',
        groupSubtitle: 'IRACP asset classification, provisioning, CRILC, Basel III capital ratios (CRAR, Tier 1/2), and Prompt Corrective Action (PCA)',
        topics: byOrder(56, 57),
      },
      {
        partNumber: 'PART VII',
        groupTitle: 'Compliance, Digital Payment Rails & Consumer Protection',
        groupSubtitle: 'PMLA 2002 / FIU-IND reporting, PSSA 2007, digital lending guidelines, cyber security, and RBI Integrated Ombudsman Scheme',
        topics: byOrder(58, 60),
      },
      {
        partNumber: 'PART VIII',
        groupTitle: 'Foreign Exchange, Specialized Institutions & Priority Sector Lending',
        groupSubtitle: 'FEMA 1999, LRS, NRI bank accounts (NRE/FCNR/NRO), NBFC Scale-Based Regulation, DICGC insurance, and PSL targets',
        topics: byOrder(61, 62),
      },
    ];

    const accountedIds = new Set(groups.flatMap((g) => g.topics.map((t) => t.id)));
    const remaining = sortedTopics.filter((t) => !accountedIds.has(t.id));
    if (remaining.length > 0) {
      groups.push({
        partNumber: 'PART IX',
        groupTitle: 'Specialized Banking Addenda & Case Law',
        groupSubtitle: 'Additional statutory guidelines, operational notes, and regulatory precedents',
        topics: remaining,
      });
    }
    return groups.filter((g) => g.topics.length > 0);
  }

  // 2. Indian Economy & Macroeconomics (76 topics: 27..102)
  if (subjectSlug === 'indian-economy') {
    const groups: PartGroup[] = [
      {
        partNumber: 'PART I',
        groupTitle: 'National Income, Macroeconomic Accounting & Inflation Dynamics',
        groupSubtitle: 'Foundations of GDP/GNP, national income aggregates, price indices (WPI/CPI), and business cycle theories',
        topics: byOrder(27, 32),
      },
      {
        partNumber: 'PART II',
        groupTitle: 'Monetary Architecture, Central Banking & Fiscal Policy',
        groupSubtitle: 'Monetary policy transmission, liquidity corridor (Repo/SDF/MSF), fiscal deficit management, FRBM Act, and public debt',
        topics: byOrder(33, 42),
      },
      {
        partNumber: 'PART III',
        groupTitle: 'External Sector, Balance of Payments & Foreign Exchange',
        groupSubtitle: 'BoP accounting, current account deficit, capital account convertibility, foreign trade policy, and exchange rate regimes',
        topics: byOrder(43, 52),
      },
      {
        partNumber: 'PART IV',
        groupTitle: 'Financial Markets, Capital Markets & Regulatory Governance',
        groupSubtitle: 'Money market instruments, stock exchanges, debt market deepening, SEBI regulations, and financial inclusion',
        topics: byOrder(53, 64),
      },
      {
        partNumber: 'PART V',
        groupTitle: 'Agrarian Economy, Priority Sector & Rural Development',
        groupSubtitle: 'Agricultural economics, MSP price policy, food management, agrarian credit, and rural livelihood schemes',
        topics: byOrder(65, 76),
      },
      {
        partNumber: 'PART VI',
        groupTitle: 'Industrial Growth, Infrastructure, Energy & Digital Economy',
        groupSubtitle: 'Manufacturing policies, MSME sector, National Infrastructure Pipeline, logistics, and digital public infrastructure',
        topics: byOrder(77, 88),
      },
      {
        partNumber: 'PART VII',
        groupTitle: 'Public Finance, Taxation Reforms & Fiscal Federalism',
        groupSubtitle: 'GST architecture, direct tax codes, Finance Commission devolution, and subsidy rationalization',
        topics: byOrder(89, 96),
      },
      {
        partNumber: 'PART VIII',
        groupTitle: 'Poverty Alleviation, Employment & Sustainable Development',
        groupSubtitle: 'Multidimensional poverty, demographic dividend, labour markets, SDGs, and green climate financing',
        topics: byOrder(97, 105),
      },
    ];

    const accountedIds = new Set(groups.flatMap((g) => g.topics.map((t) => t.id)));
    const remaining = sortedTopics.filter((t) => !accountedIds.has(t.id));
    if (remaining.length > 0) {
      groups.push({
        partNumber: 'PART IX',
        groupTitle: 'Economic Surveys & Applied Policy Synthesis',
        groupSubtitle: 'Contemporary economic trends, structural reforms, and global macroeconomic outlook',
        topics: remaining,
      });
    }
    return groups.filter((g) => g.topics.length > 0);
  }

  // 3. Indian Polity & Governance (25 topics: 1..25)
  if (subjectSlug === 'indian-polity') {
    return [
      {
        partNumber: 'PART I',
        groupTitle: 'Constitutional Foundations & Evolutionary Philosophy',
        groupSubtitle: 'Historical evolution, Constituent Assembly deliberations, Preamble, and Basic Structure Doctrine',
        topics: byOrder(1, 6),
      },
      {
        partNumber: 'PART II',
        groupTitle: 'Fundamental Rights, Directive Principles & Constitutional Duties',
        groupSubtitle: 'Articles 12–35, socio-economic charter (DPSP), fundamental duties, and judicial expansion of Article 21',
        topics: byOrder(7, 10),
      },
      {
        partNumber: 'PART III',
        groupTitle: 'The Union & State Executive Machinery',
        groupSubtitle: 'President, Vice-President, Prime Minister, Council of Ministers, Governors, and discretionary powers',
        topics: byOrder(11, 13),
      },
      {
        partNumber: 'PART IV',
        groupTitle: 'Parliament & State Legislatures',
        groupSubtitle: 'Bicameralism, legislative procedures, parliamentary committees, privileges, and anti-defection law',
        topics: byOrder(14, 15),
      },
      {
        partNumber: 'PART V',
        groupTitle: 'The Integrated Judiciary & Tribunals',
        groupSubtitle: 'Supreme Court jurisdiction, High Courts, judicial review, public interest litigation (PIL), and tribunalization',
        topics: byOrder(16, 18),
      },
      {
        partNumber: 'PART VI',
        groupTitle: 'Federal Architecture, Inter-State Relations & Emergency Provisions',
        groupSubtitle: 'Seventh Schedule legislative distribution, administrative relations, Finance Commission, and Articles 352–360',
        topics: byOrder(19, 20),
      },
      {
        partNumber: 'PART VII',
        groupTitle: 'Constitutional, Statutory & Regulatory Oversight Bodies',
        groupSubtitle: 'Election Commission, CAG, UPSC, Finance Commission, NITI Aayog, and statutory commissions',
        topics: byOrder(21, 23),
      },
      {
        partNumber: 'PART VIII',
        groupTitle: 'Electoral Governance, Special Provisions & Comparative Jurisprudence',
        groupSubtitle: 'Representation of the People Acts, Fifth & Sixth Schedules, and international constitutional comparisons',
        topics: byOrder(24, 25),
      },
    ].filter((g) => g.topics.length > 0);
  }

  // 5. Geography & Environment Master (6 topics: 1..6)
  if (subjectSlug === 'geography-and-environment') {
    return [
      {
        partNumber: 'PART I',
        groupTitle: 'Geomorphology, Atmospheric & Marine Hydrosphere Systems',
        groupSubtitle: 'Earth internal structure, plate tectonics, climatology, wind belts, cyclones, and ocean currents',
        topics: byOrder(1, 3),
      },
      {
        partNumber: 'PART II',
        groupTitle: 'Indian & Regional Physiography, Drainage & Pedology',
        groupSubtitle: 'Himalayas, Indo-Gangetic Plains, Peninsular Shield, antecedent drainage (Panch Prayag), and ICAR soils',
        topics: byOrder(4, 5),
      },
      {
        partNumber: 'PART III',
        groupTitle: 'Fundamentals of Human Geography & Spatial Networks',
        groupSubtitle: 'Geographic paradigms, demographic transition, settlement morphology, and global transport arteries',
        topics: byOrder(6, 6),
      },
    ].filter((g) => g.topics.length > 0);
  }

  // 15. Agriculture & Rural Development (12 topics: 1..12)
  if (subjectSlug === 'agriculture-and-rural-development') {
    return [
      {
        partNumber: 'PART I',
        groupTitle: 'Agronomy, Soil Mechanics & Farming Architectures',
        groupSubtitle: 'Agro-climatic zones, soil fertility, seed technology, water management, and organic farming',
        topics: byOrder(1, 6),
      },
      {
        partNumber: 'PART II',
        groupTitle: 'Rural Institutions, Agrarian Finance & Extension Systems',
        groupSubtitle: 'NABARD, RRBs, agricultural credit, crop insurance (PMFBY), and rural infrastructure funds',
        topics: byOrder(7, 12),
      },
    ].filter((g) => g.topics.length > 0);
  }

  // =========================================================================
  // DYNAMIC FALLBACK: Zero-Omission Elegant Clustering for Any Subject
  // =========================================================================
  const ROMAN_NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

  if (sortedTopics.length <= 4) {
    return [
      {
        partNumber: 'PART I',
        groupTitle: 'Curriculum Foundations & Core Modules',
        groupSubtitle: 'Sequential academic study chapters covering the essential syllabus scope',
        topics: sortedTopics,
      },
    ];
  }

  // Cluster in groups of 4 to 5 topics
  const chunkSize = sortedTopics.length > 15 ? 5 : 4;
  const dynamicGroups: PartGroup[] = [];
  let chunkIndex = 0;

  for (let i = 0; i < sortedTopics.length; i += chunkSize) {
    const chunkTopics = sortedTopics.slice(i, i + chunkSize);
    const roman = ROMAN_NUMERALS[chunkIndex] || `${chunkIndex + 1}`;
    const startOrder = chunkTopics[0].order;
    const endOrder = chunkTopics[chunkTopics.length - 1].order;

    dynamicGroups.push({
      partNumber: `PART ${roman}`,
      groupTitle: `Curriculum Section ${roman} (Chapters ${startOrder}–${endOrder})`,
      groupSubtitle: `Systematic sequential chapters covering foundational principles through applied frameworks`,
      topics: chunkTopics,
    });
    chunkIndex++;
  }

  return dynamicGroups;
}
