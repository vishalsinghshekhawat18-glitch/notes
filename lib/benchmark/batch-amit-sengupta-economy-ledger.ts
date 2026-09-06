/**
 * Amit Sengupta Indian Economy Lecture Series — Source Coverage Ledger
 * Source ID: SRC-YT-AMIT-SENGUPTA-ECONOMY
 * 68 Video Coverage Units Decomposed, Reconciled & Mapped
 * Mind of Aravalli — Academic Reading Hub
 */

import { db } from '../db/client';

export interface EconomyVideoCoverageUnit {
  id: string;
  videoId: string;
  order: number;
  label: string;
  scopeDescription: string;
  pillar: string;
  targetConceptId: string;
  status: string;
  canonicalMappingStatus: string;
  notes: string;
}

export const AMIT_SENGUPTA_ECONOMY_SOURCE = {
  id: 'SRC-YT-AMIT-SENGUPTA-ECONOMY',
  title: 'Amit Sengupta Indian Economy Lecture Series (68 Video Ingestion Ledger)',
  sourceType: 'VIDEO_LECTURE_SERIES',
  authorityTier: 'SECONDARY_PEDAGOGICAL',
  description: 'Comprehensive pedagogical YouTube playlist on Indian Economy, Macroeconomics, Banking, and Global Trade (68 videos, 2017–2024), decomposed and modernized under the Zero Unaccounted-For Source Omission principle.'
};

export const AMIT_SENGUPTA_ECONOMY_COVERAGE_UNITS: EconomyVideoCoverageUnit[] = [
  {
    "id": "CU-YT-ECO-01",
    "videoId": "MWIkUMAFFJM",
    "order": 1,
    "label": "Union Budget - Explanation | Review | Analysis | Highlights | Key points",
    "scopeDescription": "Amit Sengupta Economy Lecture #1 [MWIkUMAFFJM]: Union Budget - Explanation | Review | Analysis | Highlights | Key points. Focus: Fiscal Policy, Union Budget & Taxation Architecture.",
    "pillar": "Fiscal Policy, Union Budget & Taxation Architecture",
    "targetConceptId": "CON-ECO-MOD-02",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Covers historical budgets (2018/2020) and fuel tax mechanisms. Modern update: Budget 2024 Capital Gains overhaul (LTCG 12.5%, STCG 20%, removal of indexation), FY25 fiscal deficit target 4.9% gliding to <4.5% by FY26."
  },
  {
    "id": "CU-YT-ECO-02",
    "videoId": "6JKeXni8Ve4",
    "order": 2,
    "label": "How Inflation Affect Foreign Investments of a Nation | Macroeconomics",
    "scopeDescription": "Amit Sengupta Economy Lecture #2 [6JKeXni8Ve4]: How Inflation Affect Foreign Investments of a Nation | Macroeconomics. Focus: Macroeconomic Foundations & Business Cycles.",
    "pillar": "Macroeconomic Foundations & Business Cycles",
    "targetConceptId": "CON-ECO-MOD-01",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Theoretical macro foundations (Keynesian AD, Deflation trap, Technical recession). Modern update: India FY24 GDP at 8.2%, bond yield spread dynamics."
  },
  {
    "id": "CU-YT-ECO-03",
    "videoId": "5wpsLW5JEms",
    "order": 3,
    "label": "Difference between Simple Interest and Compound Interest",
    "scopeDescription": "Amit Sengupta Economy Lecture #3 [5wpsLW5JEms]: Difference between Simple Interest and Compound Interest. Focus: Macroeconomic Foundations & Business Cycles.",
    "pillar": "Macroeconomic Foundations & Business Cycles",
    "targetConceptId": "CON-ECO-MOD-01",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Theoretical macro foundations (Keynesian AD, Deflation trap, Technical recession). Modern update: India FY24 GDP at 8.2%, bond yield spread dynamics."
  },
  {
    "id": "CU-YT-ECO-04",
    "videoId": "2g7Wg0bemzM",
    "order": 4,
    "label": "How Imports and Exports Affect You | Economics",
    "scopeDescription": "Amit Sengupta Economy Lecture #4 [2g7Wg0bemzM]: How Imports and Exports Affect You | Economics. Focus: External Sector, BoP, Forex & Currency Economics.",
    "pillar": "External Sector, BoP, Forex & Currency Economics",
    "targetConceptId": "CON-ECO-MOD-04",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Currency dynamics, forex reserve assets. Modern update: India forex reserves surpassing $680B+ (2024); International Trade Settlement in Indian Rupees (INR) via Special Rupee Vostro Accounts (SRVA)."
  },
  {
    "id": "CU-YT-ECO-05",
    "videoId": "sJtLvFWPu1o",
    "order": 5,
    "label": "GST Bill Explained | Summary, Mechanism, History, Architect, GST Council, Structure",
    "scopeDescription": "Amit Sengupta Economy Lecture #5 [sJtLvFWPu1o]: GST Bill Explained | Summary, Mechanism, History, Architect, GST Council, Structure. Focus: Fiscal Policy, Union Budget & Taxation Architecture.",
    "pillar": "Fiscal Policy, Union Budget & Taxation Architecture",
    "targetConceptId": "CON-ECO-MOD-02",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Covers historical budgets (2018/2020) and fuel tax mechanisms. Modern update: Budget 2024 Capital Gains overhaul (LTCG 12.5%, STCG 20%, removal of indexation), FY25 fiscal deficit target 4.9% gliding to <4.5% by FY26."
  },
  {
    "id": "CU-YT-ECO-06",
    "videoId": "6mW9gFq4XyE",
    "order": 6,
    "label": "Everything about RBI - History, Origin, Role, Functions and Objectives | Indian Economy UPSC, IAS",
    "scopeDescription": "Amit Sengupta Economy Lecture #6 [6mW9gFq4XyE]: Everything about RBI - History, Origin, Role, Functions and Objectives | Indian Economy UPSC, IAS. Focus: Monetary Policy, Central Banking & Banking Systems.",
    "pillar": "Monetary Policy, Central Banking & Banking Systems",
    "targetConceptId": "CON-ECO-MOD-03",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Covers RBI functions, repo rate, NPA crisis. Modern update: Standing Deposit Facility (SDF at 6.25%) replaced Reverse Repo in April 2022 as LAF floor; IBC 2016 and NARCL (Bad Bank) resolution mechanisms."
  },
  {
    "id": "CU-YT-ECO-07",
    "videoId": "7gMP4HFxRmw",
    "order": 7,
    "label": "Currency Appreciation & Depreciation - How it Affects the Economy | Economics",
    "scopeDescription": "Amit Sengupta Economy Lecture #7 [7gMP4HFxRmw]: Currency Appreciation & Depreciation - How it Affects the Economy | Economics. Focus: External Sector, BoP, Forex & Currency Economics.",
    "pillar": "External Sector, BoP, Forex & Currency Economics",
    "targetConceptId": "CON-ECO-MOD-04",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Currency dynamics, forex reserve assets. Modern update: India forex reserves surpassing $680B+ (2024); International Trade Settlement in Indian Rupees (INR) via Special Rupee Vostro Accounts (SRVA)."
  },
  {
    "id": "CU-YT-ECO-08",
    "videoId": "o-wVqutPrWI",
    "order": 8,
    "label": "Union Budget 2018 Highlights - Review & Analysis | UPSC, IAS",
    "scopeDescription": "Amit Sengupta Economy Lecture #8 [o-wVqutPrWI]: Union Budget 2018 Highlights - Review & Analysis | UPSC, IAS. Focus: Fiscal Policy, Union Budget & Taxation Architecture.",
    "pillar": "Fiscal Policy, Union Budget & Taxation Architecture",
    "targetConceptId": "CON-ECO-MOD-02",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Covers historical budgets (2018/2020) and fuel tax mechanisms. Modern update: Budget 2024 Capital Gains overhaul (LTCG 12.5%, STCG 20%, removal of indexation), FY25 fiscal deficit target 4.9% gliding to <4.5% by FY26."
  },
  {
    "id": "CU-YT-ECO-09",
    "videoId": "htIktxcGZCI",
    "order": 9,
    "label": "Banking Crisis in India | NPA, Insolvency, Bankruptcy, Merger | Crash Course UPSC",
    "scopeDescription": "Amit Sengupta Economy Lecture #9 [htIktxcGZCI]: Banking Crisis in India | NPA, Insolvency, Bankruptcy, Merger | Crash Course UPSC. Focus: Monetary Policy, Central Banking & Banking Systems.",
    "pillar": "Monetary Policy, Central Banking & Banking Systems",
    "targetConceptId": "CON-ECO-MOD-03",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Covers RBI functions, repo rate, NPA crisis. Modern update: Standing Deposit Facility (SDF at 6.25%) replaced Reverse Repo in April 2022 as LAF floor; IBC 2016 and NARCL (Bad Bank) resolution mechanisms."
  },
  {
    "id": "CU-YT-ECO-10",
    "videoId": "tseOyHh4qzg",
    "order": 10,
    "label": "Learn Foreign Exchange Reserves | US-China Trade War | Rupees Appreciate Depreciate",
    "scopeDescription": "Amit Sengupta Economy Lecture #10 [tseOyHh4qzg]: Learn Foreign Exchange Reserves | US-China Trade War | Rupees Appreciate Depreciate. Focus: External Sector, BoP, Forex & Currency Economics.",
    "pillar": "External Sector, BoP, Forex & Currency Economics",
    "targetConceptId": "CON-ECO-MOD-04",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Currency dynamics, forex reserve assets. Modern update: India forex reserves surpassing $680B+ (2024); International Trade Settlement in Indian Rupees (INR) via Special Rupee Vostro Accounts (SRVA)."
  },
  {
    "id": "CU-YT-ECO-11",
    "videoId": "lCMp3sZenx0",
    "order": 11,
    "label": "Aggregate Demand Curve, it's Components, Formula | Macroeconomics | UPSC IAS Economy",
    "scopeDescription": "Amit Sengupta Economy Lecture #11 [lCMp3sZenx0]: Aggregate Demand Curve, it's Components, Formula | Macroeconomics | UPSC IAS Economy. Focus: Macroeconomic Foundations & Business Cycles.",
    "pillar": "Macroeconomic Foundations & Business Cycles",
    "targetConceptId": "CON-ECO-MOD-01",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Theoretical macro foundations (Keynesian AD, Deflation trap, Technical recession). Modern update: India FY24 GDP at 8.2%, bond yield spread dynamics."
  },
  {
    "id": "CU-YT-ECO-12",
    "videoId": "IF81YT7_fKg",
    "order": 12,
    "label": "Union Budget 2020 - Full Analysis for UPSC, IAS, CDS, NDA, SSC CGL",
    "scopeDescription": "Amit Sengupta Economy Lecture #12 [IF81YT7_fKg]: Union Budget 2020 - Full Analysis for UPSC, IAS, CDS, NDA, SSC CGL. Focus: Fiscal Policy, Union Budget & Taxation Architecture.",
    "pillar": "Fiscal Policy, Union Budget & Taxation Architecture",
    "targetConceptId": "CON-ECO-MOD-02",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Covers historical budgets (2018/2020) and fuel tax mechanisms. Modern update: Budget 2024 Capital Gains overhaul (LTCG 12.5%, STCG 20%, removal of indexation), FY25 fiscal deficit target 4.9% gliding to <4.5% by FY26."
  },
  {
    "id": "CU-YT-ECO-13",
    "videoId": "hAM90IWF8s0",
    "order": 13,
    "label": "What is Relief Package / Stimulus Package | Economics | Current Affairs UPSC, CDS, NDA, SSC CGL",
    "scopeDescription": "Amit Sengupta Economy Lecture #13 [hAM90IWF8s0]: What is Relief Package / Stimulus Package | Economics | Current Affairs UPSC, CDS, NDA, SSC CGL. Focus: Fiscal Policy, Union Budget & Taxation Architecture.",
    "pillar": "Fiscal Policy, Union Budget & Taxation Architecture",
    "targetConceptId": "CON-ECO-MOD-02",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Covers historical budgets (2018/2020) and fuel tax mechanisms. Modern update: Budget 2024 Capital Gains overhaul (LTCG 12.5%, STCG 20%, removal of indexation), FY25 fiscal deficit target 4.9% gliding to <4.5% by FY26."
  },
  {
    "id": "CU-YT-ECO-14",
    "videoId": "UcqaJ6PYKSc",
    "order": 14,
    "label": "Reason & factors behind increase in Gold Price in India",
    "scopeDescription": "Amit Sengupta Economy Lecture #14 [UcqaJ6PYKSc]: Reason & factors behind increase in Gold Price in India. Focus: Commodity Economics: Crude Oil, Gold & Strategic Energy.",
    "pillar": "Commodity Economics: Crude Oil, Gold & Strategic Energy",
    "targetConceptId": "CON-ECO-MOD-05",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Crude benchmarks, gold macro drivers. Modern update: G7/EU $60 Russian oil price cap, Urals-Brent discount dynamics, India non-dollar oil trade, and custom duty cuts on gold/silver in Budget 2024."
  },
  {
    "id": "CU-YT-ECO-15",
    "videoId": "NKudldue_zw",
    "order": 15,
    "label": "Economics behind Janata Curfew | Current Affairs for UPSC, IAS, CDS, NDA, SSC CGL",
    "scopeDescription": "Amit Sengupta Economy Lecture #15 [NKudldue_zw]: Economics behind Janata Curfew | Current Affairs for UPSC, IAS, CDS, NDA, SSC CGL. Focus: Indian Economic History & Structural Policies.",
    "pillar": "Indian Economic History & Structural Policies",
    "targetConceptId": "CON-ECO-MOD-06",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Historical 1947-1980 planning vs COVID-19 stimulus. Modern update: Transition from Five-Year Plans to NITI Aayog; Production Linked Incentive (PLI) schemes replacing import-substitution."
  },
  {
    "id": "CU-YT-ECO-16",
    "videoId": "-eZs-FAi348",
    "order": 16,
    "label": "What negative crude oil prices mean – Will India benefit?",
    "scopeDescription": "Amit Sengupta Economy Lecture #16 [-eZs-FAi348]: What negative crude oil prices mean – Will India benefit?. Focus: Commodity Economics: Crude Oil, Gold & Strategic Energy.",
    "pillar": "Commodity Economics: Crude Oil, Gold & Strategic Energy",
    "targetConceptId": "CON-ECO-MOD-05",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Crude benchmarks, gold macro drivers. Modern update: G7/EU $60 Russian oil price cap, Urals-Brent discount dynamics, India non-dollar oil trade, and custom duty cuts on gold/silver in Budget 2024."
  },
  {
    "id": "CU-YT-ECO-17",
    "videoId": "jnlwrmHkioo",
    "order": 17,
    "label": "Economics Behind hike in Liquor/Alcohol prices in India",
    "scopeDescription": "Amit Sengupta Economy Lecture #17 [jnlwrmHkioo]: Economics Behind hike in Liquor/Alcohol prices in India. Focus: Fiscal Policy, Union Budget & Taxation Architecture.",
    "pillar": "Fiscal Policy, Union Budget & Taxation Architecture",
    "targetConceptId": "CON-ECO-MOD-02",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Covers historical budgets (2018/2020) and fuel tax mechanisms. Modern update: Budget 2024 Capital Gains overhaul (LTCG 12.5%, STCG 20%, removal of indexation), FY25 fiscal deficit target 4.9% gliding to <4.5% by FY26."
  },
  {
    "id": "CU-YT-ECO-18",
    "videoId": "8PnJOk3ygqU",
    "order": 18,
    "label": "Decoding ₹20 Lakh Crore Economic package for MSME, NBFCs, DISCOM | Full in-depth Analysis",
    "scopeDescription": "Amit Sengupta Economy Lecture #18 [8PnJOk3ygqU]: Decoding ₹20 Lakh Crore Economic package for MSME, NBFCs, DISCOM | Full in-depth Analysis. Focus: Indian Economic History & Structural Policies.",
    "pillar": "Indian Economic History & Structural Policies",
    "targetConceptId": "CON-ECO-MOD-06",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Historical 1947-1980 planning vs COVID-19 stimulus. Modern update: Transition from Five-Year Plans to NITI Aayog; Production Linked Incentive (PLI) schemes replacing import-substitution."
  },
  {
    "id": "CU-YT-ECO-19",
    "videoId": "_MI5iAJbUd8",
    "order": 19,
    "label": "Economic Impacts of Cyclone Amphan | UPSC Mains Answer writing",
    "scopeDescription": "Amit Sengupta Economy Lecture #19 [_MI5iAJbUd8]: Economic Impacts of Cyclone Amphan | UPSC Mains Answer writing. Focus: Global Trade Wars, Tariffs & International Geopolitics.",
    "pillar": "Global Trade Wars, Tariffs & International Geopolitics",
    "targetConceptId": "CON-ECO-MOD-07",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "US-China trade war, geopolitical tariffs, semiconductor embargoes, and global supply chain realignment."
  },
  {
    "id": "CU-YT-ECO-20",
    "videoId": "DMFG28xnwR8",
    "order": 20,
    "label": "Economic Impacts of Migrant workers | What happens if they don't return UPSC, IAS, CDS, NDA, SSC CGL",
    "scopeDescription": "Amit Sengupta Economy Lecture #20 [DMFG28xnwR8]: Economic Impacts of Migrant workers | What happens if they don't return UPSC, IAS, CDS, NDA, SSC CGL. Focus: Indian Economic History & Structural Policies.",
    "pillar": "Indian Economic History & Structural Policies",
    "targetConceptId": "CON-ECO-MOD-06",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Historical 1947-1980 planning vs COVID-19 stimulus. Modern update: Transition from Five-Year Plans to NITI Aayog; Production Linked Incentive (PLI) schemes replacing import-substitution."
  },
  {
    "id": "CU-YT-ECO-21",
    "videoId": "rcWK8TtqCc0",
    "order": 21,
    "label": "Why Petrol Diesel Prices Hike / Increasing in India?",
    "scopeDescription": "Amit Sengupta Economy Lecture #21 [rcWK8TtqCc0]: Why Petrol Diesel Prices Hike / Increasing in India?. Focus: Fiscal Policy, Union Budget & Taxation Architecture.",
    "pillar": "Fiscal Policy, Union Budget & Taxation Architecture",
    "targetConceptId": "CON-ECO-MOD-02",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Covers historical budgets (2018/2020) and fuel tax mechanisms. Modern update: Budget 2024 Capital Gains overhaul (LTCG 12.5%, STCG 20%, removal of indexation), FY25 fiscal deficit target 4.9% gliding to <4.5% by FY26."
  },
  {
    "id": "CU-YT-ECO-22",
    "videoId": "E10zIyW0iX0",
    "order": 22,
    "label": "30 years of Socialism (1947-1980) | Economic history of India | License Permit Raj | Modern History",
    "scopeDescription": "Amit Sengupta Economy Lecture #22 [E10zIyW0iX0]: 30 years of Socialism (1947-1980) | Economic history of India | License Permit Raj | Modern History. Focus: Indian Economic History & Structural Policies.",
    "pillar": "Indian Economic History & Structural Policies",
    "targetConceptId": "CON-ECO-MOD-06",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Historical 1947-1980 planning vs COVID-19 stimulus. Modern update: Transition from Five-Year Plans to NITI Aayog; Production Linked Incentive (PLI) schemes replacing import-substitution."
  },
  {
    "id": "CU-YT-ECO-23",
    "videoId": "uNoaGIQcLmA",
    "order": 23,
    "label": "Making sense of the Global & Indian Economy",
    "scopeDescription": "Amit Sengupta Economy Lecture #23 [uNoaGIQcLmA]: Making sense of the Global & Indian Economy. Focus: Global Trade Wars, Tariffs & International Geopolitics.",
    "pillar": "Global Trade Wars, Tariffs & International Geopolitics",
    "targetConceptId": "CON-ECO-MOD-07",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "US-China trade war, geopolitical tariffs, semiconductor embargoes, and global supply chain realignment."
  },
  {
    "id": "CU-YT-ECO-24",
    "videoId": "pnXXcjbHRU4",
    "order": 24,
    "label": "Is it right time to buy Gold in India?",
    "scopeDescription": "Amit Sengupta Economy Lecture #24 [pnXXcjbHRU4]: Is it right time to buy Gold in India?. Focus: Commodity Economics: Crude Oil, Gold & Strategic Energy.",
    "pillar": "Commodity Economics: Crude Oil, Gold & Strategic Energy",
    "targetConceptId": "CON-ECO-MOD-05",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Crude benchmarks, gold macro drivers. Modern update: G7/EU $60 Russian oil price cap, Urals-Brent discount dynamics, India non-dollar oil trade, and custom duty cuts on gold/silver in Budget 2024."
  },
  {
    "id": "CU-YT-ECO-25",
    "videoId": "BHcabBOOwxM",
    "order": 25,
    "label": "How U.S. controls inflation | How it affects economy | Economics",
    "scopeDescription": "Amit Sengupta Economy Lecture #25 [BHcabBOOwxM]: How U.S. controls inflation | How it affects economy | Economics. Focus: Global Trade Wars, Tariffs & International Geopolitics.",
    "pillar": "Global Trade Wars, Tariffs & International Geopolitics",
    "targetConceptId": "CON-ECO-MOD-07",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "US-China trade war, geopolitical tariffs, semiconductor embargoes, and global supply chain realignment."
  },
  {
    "id": "CU-YT-ECO-26",
    "videoId": "AkFkK-b2oXY",
    "order": 26,
    "label": "Russia Ukraine crisis impact on Stock Market | Why Gold & Oil prices are high | Geopolitics, Economy",
    "scopeDescription": "Amit Sengupta Economy Lecture #26 [AkFkK-b2oXY]: Russia Ukraine crisis impact on Stock Market | Why Gold & Oil prices are high | Geopolitics, Economy. Focus: Commodity Economics: Crude Oil, Gold & Strategic Energy.",
    "pillar": "Commodity Economics: Crude Oil, Gold & Strategic Energy",
    "targetConceptId": "CON-ECO-MOD-05",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Crude benchmarks, gold macro drivers. Modern update: G7/EU $60 Russian oil price cap, Urals-Brent discount dynamics, India non-dollar oil trade, and custom duty cuts on gold/silver in Budget 2024."
  },
  {
    "id": "CU-YT-ECO-27",
    "videoId": "z-9S8jgNCWk",
    "order": 27,
    "label": "Canada's Immigration Policy | How Immigration affects Economy | Negative & Positive effect migration",
    "scopeDescription": "Amit Sengupta Economy Lecture #27 [z-9S8jgNCWk]: Canada's Immigration Policy | How Immigration affects Economy | Negative & Positive effect migration. Focus: Global Trade Wars, Tariffs & International Geopolitics.",
    "pillar": "Global Trade Wars, Tariffs & International Geopolitics",
    "targetConceptId": "CON-ECO-MOD-07",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "US-China trade war, geopolitical tariffs, semiconductor embargoes, and global supply chain realignment."
  },
  {
    "id": "CU-YT-ECO-28",
    "videoId": "fCc1u9TWmw0",
    "order": 28,
    "label": "How deflation works? In what ways Govt counter inflation? Macroeconomics",
    "scopeDescription": "Amit Sengupta Economy Lecture #28 [fCc1u9TWmw0]: How deflation works? In what ways Govt counter inflation? Macroeconomics. Focus: Macroeconomic Foundations & Business Cycles.",
    "pillar": "Macroeconomic Foundations & Business Cycles",
    "targetConceptId": "CON-ECO-MOD-01",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Theoretical macro foundations (Keynesian AD, Deflation trap, Technical recession). Modern update: India FY24 GDP at 8.2%, bond yield spread dynamics."
  },
  {
    "id": "CU-YT-ECO-29",
    "videoId": "akxx6K4t-F8",
    "order": 29,
    "label": "Repo Rate & Cash Reserve Ratio CRR Explained | Investing in LIC IPO? | Monetary Policy, Economics",
    "scopeDescription": "Amit Sengupta Economy Lecture #29 [akxx6K4t-F8]: Repo Rate & Cash Reserve Ratio CRR Explained | Investing in LIC IPO? | Monetary Policy, Economics. Focus: Monetary Policy, Central Banking & Banking Systems.",
    "pillar": "Monetary Policy, Central Banking & Banking Systems",
    "targetConceptId": "CON-ECO-MOD-03",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Covers RBI functions, repo rate, NPA crisis. Modern update: Standing Deposit Facility (SDF at 6.25%) replaced Reverse Repo in April 2022 as LAF floor; IBC 2016 and NARCL (Bad Bank) resolution mechanisms."
  },
  {
    "id": "CU-YT-ECO-30",
    "videoId": "byNvz5aATA8",
    "order": 30,
    "label": "What is Free Trade Agreement FTA | Pros & cons, benefits, India's trade policy",
    "scopeDescription": "Amit Sengupta Economy Lecture #30 [byNvz5aATA8]: What is Free Trade Agreement FTA | Pros & cons, benefits, India's trade policy. Focus: External Sector, BoP, Forex & Currency Economics.",
    "pillar": "External Sector, BoP, Forex & Currency Economics",
    "targetConceptId": "CON-ECO-MOD-04",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Currency dynamics, forex reserve assets. Modern update: India forex reserves surpassing $680B+ (2024); International Trade Settlement in Indian Rupees (INR) via Special Rupee Vostro Accounts (SRVA)."
  },
  {
    "id": "CU-YT-ECO-31",
    "videoId": "XakH6Z2-RzQ",
    "order": 31,
    "label": "Silicon valley bank (SVB) crisis collapse explained in simple terms",
    "scopeDescription": "Amit Sengupta Economy Lecture #31 [XakH6Z2-RzQ]: Silicon valley bank (SVB) crisis collapse explained in simple terms. Focus: Monetary Policy, Central Banking & Banking Systems.",
    "pillar": "Monetary Policy, Central Banking & Banking Systems",
    "targetConceptId": "CON-ECO-MOD-03",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Covers RBI functions, repo rate, NPA crisis. Modern update: Standing Deposit Facility (SDF at 6.25%) replaced Reverse Repo in April 2022 as LAF floor; IBC 2016 and NARCL (Bad Bank) resolution mechanisms."
  },
  {
    "id": "CU-YT-ECO-32",
    "videoId": "q6Pp1DhqSgI",
    "order": 32,
    "label": "UK joins CPTPP agreement | UK’s Trade Strategy after Brexit | Geopolitics",
    "scopeDescription": "Amit Sengupta Economy Lecture #32 [q6Pp1DhqSgI]: UK joins CPTPP agreement | UK’s Trade Strategy after Brexit | Geopolitics. Focus: External Sector, BoP, Forex & Currency Economics.",
    "pillar": "External Sector, BoP, Forex & Currency Economics",
    "targetConceptId": "CON-ECO-MOD-04",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Currency dynamics, forex reserve assets. Modern update: India forex reserves surpassing $680B+ (2024); International Trade Settlement in Indian Rupees (INR) via Special Rupee Vostro Accounts (SRVA)."
  },
  {
    "id": "CU-YT-ECO-33",
    "videoId": "cht1VeGzYZo",
    "order": 33,
    "label": "US Debt ceiling crisis explained | Why QUAD Summit 2023 got canceled | What is De-Dollarization",
    "scopeDescription": "Amit Sengupta Economy Lecture #33 [cht1VeGzYZo]: US Debt ceiling crisis explained | Why QUAD Summit 2023 got canceled | What is De-Dollarization. Focus: External Sector, BoP, Forex & Currency Economics.",
    "pillar": "External Sector, BoP, Forex & Currency Economics",
    "targetConceptId": "CON-ECO-MOD-04",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Currency dynamics, forex reserve assets. Modern update: India forex reserves surpassing $680B+ (2024); International Trade Settlement in Indian Rupees (INR) via Special Rupee Vostro Accounts (SRVA)."
  },
  {
    "id": "CU-YT-ECO-34",
    "videoId": "gVeSRp7sMDs",
    "order": 34,
    "label": "US Debt Ceiling Crisis 2023 Explained | Why it's important | How it affects the economy",
    "scopeDescription": "Amit Sengupta Economy Lecture #34 [gVeSRp7sMDs]: US Debt Ceiling Crisis 2023 Explained | Why it's important | How it affects the economy. Focus: External Sector, BoP, Forex & Currency Economics.",
    "pillar": "External Sector, BoP, Forex & Currency Economics",
    "targetConceptId": "CON-ECO-MOD-04",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Currency dynamics, forex reserve assets. Modern update: India forex reserves surpassing $680B+ (2024); International Trade Settlement in Indian Rupees (INR) via Special Rupee Vostro Accounts (SRVA)."
  },
  {
    "id": "CU-YT-ECO-35",
    "videoId": "iDZMG2SEUHQ",
    "order": 35,
    "label": "What is De-dollarization | Reasons behind reducing dependency on US Dollar | Economy",
    "scopeDescription": "Amit Sengupta Economy Lecture #35 [iDZMG2SEUHQ]: What is De-dollarization | Reasons behind reducing dependency on US Dollar | Economy. Focus: External Sector, BoP, Forex & Currency Economics.",
    "pillar": "External Sector, BoP, Forex & Currency Economics",
    "targetConceptId": "CON-ECO-MOD-04",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Currency dynamics, forex reserve assets. Modern update: India forex reserves surpassing $680B+ (2024); International Trade Settlement in Indian Rupees (INR) via Special Rupee Vostro Accounts (SRVA)."
  },
  {
    "id": "CU-YT-ECO-36",
    "videoId": "DRAFXr6YJwE",
    "order": 36,
    "label": "How Germany Slipped into Recession | Why Recessions Happen | Factors that causes Recession",
    "scopeDescription": "Amit Sengupta Economy Lecture #36 [DRAFXr6YJwE]: How Germany Slipped into Recession | Why Recessions Happen | Factors that causes Recession. Focus: Macroeconomic Foundations & Business Cycles.",
    "pillar": "Macroeconomic Foundations & Business Cycles",
    "targetConceptId": "CON-ECO-MOD-01",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Theoretical macro foundations (Keynesian AD, Deflation trap, Technical recession). Modern update: India FY24 GDP at 8.2%, bond yield spread dynamics."
  },
  {
    "id": "CU-YT-ECO-37",
    "videoId": "xGtKuV0XpmE",
    "order": 37,
    "label": "What is a Recession | Factors leading to a Recession | How it happens | Economics",
    "scopeDescription": "Amit Sengupta Economy Lecture #37 [xGtKuV0XpmE]: What is a Recession | Factors leading to a Recession | How it happens | Economics. Focus: Macroeconomic Foundations & Business Cycles.",
    "pillar": "Macroeconomic Foundations & Business Cycles",
    "targetConceptId": "CON-ECO-MOD-01",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Theoretical macro foundations (Keynesian AD, Deflation trap, Technical recession). Modern update: India FY24 GDP at 8.2%, bond yield spread dynamics."
  },
  {
    "id": "CU-YT-ECO-38",
    "videoId": "lLpuwxXjAMU",
    "order": 38,
    "label": "India’s 1st Indigenous Nuclear Reactor is Ready | Benefits of Pressurize heavy water reactors PHWRs",
    "scopeDescription": "Amit Sengupta Economy Lecture #38 [lLpuwxXjAMU]: India’s 1st Indigenous Nuclear Reactor is Ready | Benefits of Pressurize heavy water reactors PHWRs. Focus: Commodity Economics: Crude Oil, Gold & Strategic Energy.",
    "pillar": "Commodity Economics: Crude Oil, Gold & Strategic Energy",
    "targetConceptId": "CON-ECO-MOD-05",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Crude benchmarks, gold macro drivers. Modern update: G7/EU $60 Russian oil price cap, Urals-Brent discount dynamics, India non-dollar oil trade, and custom duty cuts on gold/silver in Budget 2024."
  },
  {
    "id": "CU-YT-ECO-39",
    "videoId": "6pHSFXhzguQ",
    "order": 39,
    "label": "Vande Bharat Express train - 15 facts | Everything you need to know!",
    "scopeDescription": "Amit Sengupta Economy Lecture #39 [6pHSFXhzguQ]: Vande Bharat Express train - 15 facts | Everything you need to know!. Focus: Indian Economic History & Structural Policies.",
    "pillar": "Indian Economic History & Structural Policies",
    "targetConceptId": "CON-ECO-MOD-06",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Historical 1947-1980 planning vs COVID-19 stimulus. Modern update: Transition from Five-Year Plans to NITI Aayog; Production Linked Incentive (PLI) schemes replacing import-substitution."
  },
  {
    "id": "CU-YT-ECO-40",
    "videoId": "awFdf9g89pU",
    "order": 40,
    "label": "Why India bans rice exports | Russia ban grain, China bans semiconductor | BRICS, Geopolitics",
    "scopeDescription": "Amit Sengupta Economy Lecture #40 [awFdf9g89pU]: Why India bans rice exports | Russia ban grain, China bans semiconductor | BRICS, Geopolitics. Focus: Indian Economic History & Structural Policies.",
    "pillar": "Indian Economic History & Structural Policies",
    "targetConceptId": "CON-ECO-MOD-06",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Historical 1947-1980 planning vs COVID-19 stimulus. Modern update: Transition from Five-Year Plans to NITI Aayog; Production Linked Incentive (PLI) schemes replacing import-substitution."
  },
  {
    "id": "CU-YT-ECO-41",
    "videoId": "PPuHdBEnpDs",
    "order": 41,
    "label": "Yashobhoomi Convention Centre - What is it | What is the purpose, cost | UPSC Current Affairs",
    "scopeDescription": "Amit Sengupta Economy Lecture #41 [PPuHdBEnpDs]: Yashobhoomi Convention Centre - What is it | What is the purpose, cost | UPSC Current Affairs. Focus: Indian Economic History & Structural Policies.",
    "pillar": "Indian Economic History & Structural Policies",
    "targetConceptId": "CON-ECO-MOD-06",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Historical 1947-1980 planning vs COVID-19 stimulus. Modern update: Transition from Five-Year Plans to NITI Aayog; Production Linked Incentive (PLI) schemes replacing import-substitution."
  },
  {
    "id": "CU-YT-ECO-42",
    "videoId": "imm2JMTqrhA",
    "order": 42,
    "label": "Capital Gains Tax Explained | Union Budget 2024 | Indexation benefit removed | UPSC, Indian Economy",
    "scopeDescription": "Amit Sengupta Economy Lecture #42 [imm2JMTqrhA]: Capital Gains Tax Explained | Union Budget 2024 | Indexation benefit removed | UPSC, Indian Economy. Focus: Fiscal Policy, Union Budget & Taxation Architecture.",
    "pillar": "Fiscal Policy, Union Budget & Taxation Architecture",
    "targetConceptId": "CON-ECO-MOD-02",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Covers historical budgets (2018/2020) and fuel tax mechanisms. Modern update: Budget 2024 Capital Gains overhaul (LTCG 12.5%, STCG 20%, removal of indexation), FY25 fiscal deficit target 4.9% gliding to <4.5% by FY26."
  },
  {
    "id": "CU-YT-ECO-43",
    "videoId": "Nan6oJeV_tE",
    "order": 43,
    "label": "US China trade war 2.0 | Why Trump’s Reciprocal Tariff causing Market Crash | What are China’s moves",
    "scopeDescription": "Amit Sengupta Economy Lecture #43 [Nan6oJeV_tE]: US China trade war 2.0 | Why Trump’s Reciprocal Tariff causing Market Crash | What are China’s moves. Focus: Global Trade Wars, Tariffs & International Geopolitics.",
    "pillar": "Global Trade Wars, Tariffs & International Geopolitics",
    "targetConceptId": "CON-ECO-MOD-07",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "US-China trade war, geopolitical tariffs, semiconductor embargoes, and global supply chain realignment."
  },
  {
    "id": "CU-YT-ECO-44",
    "videoId": "d3Cv0K4QWJc",
    "order": 44,
    "label": "Gold Up, Bond Yields Up, Dollar Down | Fed cornered, is cash printing next or De-Dollarization?",
    "scopeDescription": "Amit Sengupta Economy Lecture #44 [d3Cv0K4QWJc]: Gold Up, Bond Yields Up, Dollar Down | Fed cornered, is cash printing next or De-Dollarization?. Focus: External Sector, BoP, Forex & Currency Economics.",
    "pillar": "External Sector, BoP, Forex & Currency Economics",
    "targetConceptId": "CON-ECO-MOD-04",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Currency dynamics, forex reserve assets. Modern update: India forex reserves surpassing $680B+ (2024); International Trade Settlement in Indian Rupees (INR) via Special Rupee Vostro Accounts (SRVA)."
  },
  {
    "id": "CU-YT-ECO-45",
    "videoId": "v7JD3RJIG4w",
    "order": 45,
    "label": "How Nvidia is Caught in US China Trade war | Investing, National Security, Geopolitics",
    "scopeDescription": "Amit Sengupta Economy Lecture #45 [v7JD3RJIG4w]: How Nvidia is Caught in US China Trade war | Investing, National Security, Geopolitics. Focus: Global Trade Wars, Tariffs & International Geopolitics.",
    "pillar": "Global Trade Wars, Tariffs & International Geopolitics",
    "targetConceptId": "CON-ECO-MOD-07",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "US-China trade war, geopolitical tariffs, semiconductor embargoes, and global supply chain realignment."
  },
  {
    "id": "CU-YT-ECO-46",
    "videoId": "PN_9VNNPMPA",
    "order": 46,
    "label": "US China Trade war Explained | who blinks first | Trump, Xi Jinping Tariff war",
    "scopeDescription": "Amit Sengupta Economy Lecture #46 [PN_9VNNPMPA]: US China Trade war Explained | who blinks first | Trump, Xi Jinping Tariff war. Focus: Global Trade Wars, Tariffs & International Geopolitics.",
    "pillar": "Global Trade Wars, Tariffs & International Geopolitics",
    "targetConceptId": "CON-ECO-MOD-07",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "US-China trade war, geopolitical tariffs, semiconductor embargoes, and global supply chain realignment."
  },
  {
    "id": "CU-YT-ECO-47",
    "videoId": "t6bYE5mI5Z8",
    "order": 47,
    "label": "Trump's Big Beautiful Bill Explained in 15 mnts",
    "scopeDescription": "Amit Sengupta Economy Lecture #47 [t6bYE5mI5Z8]: Trump's Big Beautiful Bill Explained in 15 mnts. Focus: Global Trade Wars, Tariffs & International Geopolitics.",
    "pillar": "Global Trade Wars, Tariffs & International Geopolitics",
    "targetConceptId": "CON-ECO-MOD-07",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "US-China trade war, geopolitical tariffs, semiconductor embargoes, and global supply chain realignment."
  },
  {
    "id": "CU-YT-ECO-48",
    "videoId": "W_5zoRU6kjw",
    "order": 48,
    "label": "Trump Fears BRICS Unity & De-Dollarization, Hits Back with 10% Tariff on BRICS Nations",
    "scopeDescription": "Amit Sengupta Economy Lecture #48 [W_5zoRU6kjw]: Trump Fears BRICS Unity & De-Dollarization, Hits Back with 10% Tariff on BRICS Nations. Focus: External Sector, BoP, Forex & Currency Economics.",
    "pillar": "External Sector, BoP, Forex & Currency Economics",
    "targetConceptId": "CON-ECO-MOD-04",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Currency dynamics, forex reserve assets. Modern update: India forex reserves surpassing $680B+ (2024); International Trade Settlement in Indian Rupees (INR) via Special Rupee Vostro Accounts (SRVA)."
  },
  {
    "id": "CU-YT-ECO-49",
    "videoId": "UOsS7uYuh6Y",
    "order": 49,
    "label": "Trump Targets & sanctions India | Russia is helping India AGAIN",
    "scopeDescription": "Amit Sengupta Economy Lecture #49 [UOsS7uYuh6Y]: Trump Targets & sanctions India | Russia is helping India AGAIN. Focus: Global Trade Wars, Tariffs & International Geopolitics.",
    "pillar": "Global Trade Wars, Tariffs & International Geopolitics",
    "targetConceptId": "CON-ECO-MOD-07",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "US-China trade war, geopolitical tariffs, semiconductor embargoes, and global supply chain realignment."
  },
  {
    "id": "CU-YT-ECO-50",
    "videoId": "Uetk72mOy0c",
    "order": 50,
    "label": "Russian Oil Price Cap System Explained | Jaishankar Exposes Trump's Russian Oil 25% Tariff on India",
    "scopeDescription": "Amit Sengupta Economy Lecture #50 [Uetk72mOy0c]: Russian Oil Price Cap System Explained | Jaishankar Exposes Trump's Russian Oil 25% Tariff on India. Focus: Commodity Economics: Crude Oil, Gold & Strategic Energy.",
    "pillar": "Commodity Economics: Crude Oil, Gold & Strategic Energy",
    "targetConceptId": "CON-ECO-MOD-05",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Crude benchmarks, gold macro drivers. Modern update: G7/EU $60 Russian oil price cap, Urals-Brent discount dynamics, India non-dollar oil trade, and custom duty cuts on gold/silver in Budget 2024."
  },
  {
    "id": "CU-YT-ECO-51",
    "videoId": "Xg0J-A-DubY",
    "order": 51,
    "label": "The Art of Blame Shifting | Trump's 50% Tariff on India | Peter Navarro's Spin on Russian Oil",
    "scopeDescription": "Amit Sengupta Economy Lecture #51 [Xg0J-A-DubY]: The Art of Blame Shifting | Trump's 50% Tariff on India | Peter Navarro's Spin on Russian Oil. Focus: Commodity Economics: Crude Oil, Gold & Strategic Energy.",
    "pillar": "Commodity Economics: Crude Oil, Gold & Strategic Energy",
    "targetConceptId": "CON-ECO-MOD-05",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Crude benchmarks, gold macro drivers. Modern update: G7/EU $60 Russian oil price cap, Urals-Brent discount dynamics, India non-dollar oil trade, and custom duty cuts on gold/silver in Budget 2024."
  },
  {
    "id": "CU-YT-ECO-52",
    "videoId": "_GYertLrtxU",
    "order": 52,
    "label": "Mission 40 - Indian Govt's countermeasure to Trump's 50% Tariff",
    "scopeDescription": "Amit Sengupta Economy Lecture #52 [_GYertLrtxU]: Mission 40 - Indian Govt's countermeasure to Trump's 50% Tariff. Focus: Global Trade Wars, Tariffs & International Geopolitics.",
    "pillar": "Global Trade Wars, Tariffs & International Geopolitics",
    "targetConceptId": "CON-ECO-MOD-07",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "US-China trade war, geopolitical tariffs, semiconductor embargoes, and global supply chain realignment."
  },
  {
    "id": "CU-YT-ECO-53",
    "videoId": "CwUUdDug7Hc",
    "order": 53,
    "label": "Putin's Advisor 'Anton Kobyakov' Exposes Trump's Crypto Plan to Erase $37 Trillion Debt",
    "scopeDescription": "Amit Sengupta Economy Lecture #53 [CwUUdDug7Hc]: Putin's Advisor 'Anton Kobyakov' Exposes Trump's Crypto Plan to Erase $37 Trillion Debt. Focus: Global Trade Wars, Tariffs & International Geopolitics.",
    "pillar": "Global Trade Wars, Tariffs & International Geopolitics",
    "targetConceptId": "CON-ECO-MOD-07",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "US-China trade war, geopolitical tariffs, semiconductor embargoes, and global supply chain realignment."
  },
  {
    "id": "CU-YT-ECO-54",
    "videoId": "ExeUJr4sWUg",
    "order": 54,
    "label": "Trump's $100,000 H1B Visa Fee Explained",
    "scopeDescription": "Amit Sengupta Economy Lecture #54 [ExeUJr4sWUg]: Trump's $100,000 H1B Visa Fee Explained. Focus: Global Trade Wars, Tariffs & International Geopolitics.",
    "pillar": "Global Trade Wars, Tariffs & International Geopolitics",
    "targetConceptId": "CON-ECO-MOD-07",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "US-China trade war, geopolitical tariffs, semiconductor embargoes, and global supply chain realignment."
  },
  {
    "id": "CU-YT-ECO-55",
    "videoId": "yFuvOsnEnjc",
    "order": 55,
    "label": "China’s 2060 Carbon Neutral Promise - Hero Move or Hidden Strategy for Global Power?",
    "scopeDescription": "Amit Sengupta Economy Lecture #55 [yFuvOsnEnjc]: China’s 2060 Carbon Neutral Promise - Hero Move or Hidden Strategy for Global Power?. Focus: Global Trade Wars, Tariffs & International Geopolitics.",
    "pillar": "Global Trade Wars, Tariffs & International Geopolitics",
    "targetConceptId": "CON-ECO-MOD-07",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "US-China trade war, geopolitical tariffs, semiconductor embargoes, and global supply chain realignment."
  },
  {
    "id": "CU-YT-ECO-56",
    "videoId": "X6aUvYfvQv8",
    "order": 56,
    "label": "US Sanctions on Russian Oil Rosneft & Lukoil | How It Impacts India and Global Energy Politics",
    "scopeDescription": "Amit Sengupta Economy Lecture #56 [X6aUvYfvQv8]: US Sanctions on Russian Oil Rosneft & Lukoil | How It Impacts India and Global Energy Politics. Focus: Commodity Economics: Crude Oil, Gold & Strategic Energy.",
    "pillar": "Commodity Economics: Crude Oil, Gold & Strategic Energy",
    "targetConceptId": "CON-ECO-MOD-05",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Crude benchmarks, gold macro drivers. Modern update: G7/EU $60 Russian oil price cap, Urals-Brent discount dynamics, India non-dollar oil trade, and custom duty cuts on gold/silver in Budget 2024."
  },
  {
    "id": "CU-YT-ECO-57",
    "videoId": "RHI9kSzZ7jk",
    "order": 57,
    "label": "Trump Xi Jinping Asia Visit | Impact on India's role in global supply chain & power politics",
    "scopeDescription": "Amit Sengupta Economy Lecture #57 [RHI9kSzZ7jk]: Trump Xi Jinping Asia Visit | Impact on India's role in global supply chain & power politics. Focus: Global Trade Wars, Tariffs & International Geopolitics.",
    "pillar": "Global Trade Wars, Tariffs & International Geopolitics",
    "targetConceptId": "CON-ECO-MOD-07",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "US-China trade war, geopolitical tariffs, semiconductor embargoes, and global supply chain realignment."
  },
  {
    "id": "CU-YT-ECO-58",
    "videoId": "fynjLhbgRPE",
    "order": 58,
    "label": "Trump Xi Jinping Meeting Outcome | who got the better DEAL - USA or China?",
    "scopeDescription": "Amit Sengupta Economy Lecture #58 [fynjLhbgRPE]: Trump Xi Jinping Meeting Outcome | who got the better DEAL - USA or China?. Focus: Global Trade Wars, Tariffs & International Geopolitics.",
    "pillar": "Global Trade Wars, Tariffs & International Geopolitics",
    "targetConceptId": "CON-ECO-MOD-07",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "US-China trade war, geopolitical tariffs, semiconductor embargoes, and global supply chain realignment."
  },
  {
    "id": "CU-YT-ECO-59",
    "videoId": "VCuNrCtdL78",
    "order": 59,
    "label": "Silver’s Crash Was Engineered | Here’s What Happens Next | China Silver Export Policy",
    "scopeDescription": "Amit Sengupta Economy Lecture #59 [VCuNrCtdL78]: Silver’s Crash Was Engineered | Here’s What Happens Next | China Silver Export Policy. Focus: Commodity Economics: Crude Oil, Gold & Strategic Energy.",
    "pillar": "Commodity Economics: Crude Oil, Gold & Strategic Energy",
    "targetConceptId": "CON-ECO-MOD-05",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Crude benchmarks, gold macro drivers. Modern update: G7/EU $60 Russian oil price cap, Urals-Brent discount dynamics, India non-dollar oil trade, and custom duty cuts on gold/silver in Budget 2024."
  },
  {
    "id": "CU-YT-ECO-60",
    "videoId": "wx2kFcCvxHY",
    "order": 60,
    "label": "Silver Shortage Explained | Buy or Hold? A Macro Breakdown of Silver rally",
    "scopeDescription": "Amit Sengupta Economy Lecture #60 [wx2kFcCvxHY]: Silver Shortage Explained | Buy or Hold? A Macro Breakdown of Silver rally. Focus: Commodity Economics: Crude Oil, Gold & Strategic Energy.",
    "pillar": "Commodity Economics: Crude Oil, Gold & Strategic Energy",
    "targetConceptId": "CON-ECO-MOD-05",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Crude benchmarks, gold macro drivers. Modern update: G7/EU $60 Russian oil price cap, Urals-Brent discount dynamics, India non-dollar oil trade, and custom duty cuts on gold/silver in Budget 2024."
  },
  {
    "id": "CU-YT-ECO-61",
    "videoId": "EeT8HLrcl_A",
    "order": 61,
    "label": "US Captures Venezuela – What happens to Oil, Gold, Silver, Metals, BRICS, De-dollarization",
    "scopeDescription": "Amit Sengupta Economy Lecture #61 [EeT8HLrcl_A]: US Captures Venezuela – What happens to Oil, Gold, Silver, Metals, BRICS, De-dollarization. Focus: External Sector, BoP, Forex & Currency Economics.",
    "pillar": "External Sector, BoP, Forex & Currency Economics",
    "targetConceptId": "CON-ECO-MOD-04",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Currency dynamics, forex reserve assets. Modern update: India forex reserves surpassing $680B+ (2024); International Trade Settlement in Indian Rupees (INR) via Special Rupee Vostro Accounts (SRVA)."
  },
  {
    "id": "CU-YT-ECO-62",
    "videoId": "NIbznf7kiAQ",
    "order": 62,
    "label": "US to control Venezuelan Oil | Impact on China, India, Oil market | Geopolitics, Macroeconomics",
    "scopeDescription": "Amit Sengupta Economy Lecture #62 [NIbznf7kiAQ]: US to control Venezuelan Oil | Impact on China, India, Oil market | Geopolitics, Macroeconomics. Focus: Global Trade Wars, Tariffs & International Geopolitics.",
    "pillar": "Global Trade Wars, Tariffs & International Geopolitics",
    "targetConceptId": "CON-ECO-MOD-07",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "US-China trade war, geopolitical tariffs, semiconductor embargoes, and global supply chain realignment."
  },
  {
    "id": "CU-YT-ECO-63",
    "videoId": "IIc7aV5TIrc",
    "order": 63,
    "label": "US seizes Russian oil tankers in Atlantic Ocean | US controls Venezuelan Oil",
    "scopeDescription": "Amit Sengupta Economy Lecture #63 [IIc7aV5TIrc]: US seizes Russian oil tankers in Atlantic Ocean | US controls Venezuelan Oil. Focus: Commodity Economics: Crude Oil, Gold & Strategic Energy.",
    "pillar": "Commodity Economics: Crude Oil, Gold & Strategic Energy",
    "targetConceptId": "CON-ECO-MOD-05",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Crude benchmarks, gold macro drivers. Modern update: G7/EU $60 Russian oil price cap, Urals-Brent discount dynamics, India non-dollar oil trade, and custom duty cuts on gold/silver in Budget 2024."
  },
  {
    "id": "CU-YT-ECO-64",
    "videoId": "3iANdaR0pwU",
    "order": 64,
    "label": "Silver was CRASHED again Intentionally | What happens next",
    "scopeDescription": "Amit Sengupta Economy Lecture #64 [3iANdaR0pwU]: Silver was CRASHED again Intentionally | What happens next. Focus: Commodity Economics: Crude Oil, Gold & Strategic Energy.",
    "pillar": "Commodity Economics: Crude Oil, Gold & Strategic Energy",
    "targetConceptId": "CON-ECO-MOD-05",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Crude benchmarks, gold macro drivers. Modern update: G7/EU $60 Russian oil price cap, Urals-Brent discount dynamics, India non-dollar oil trade, and custom duty cuts on gold/silver in Budget 2024."
  },
  {
    "id": "CU-YT-ECO-65",
    "videoId": "TAFjFRuLXL4",
    "order": 65,
    "label": "India US Trade Deal Explained | What it really means for India, and at what cost",
    "scopeDescription": "Amit Sengupta Economy Lecture #65 [TAFjFRuLXL4]: India US Trade Deal Explained | What it really means for India, and at what cost. Focus: Global Trade Wars, Tariffs & International Geopolitics.",
    "pillar": "Global Trade Wars, Tariffs & International Geopolitics",
    "targetConceptId": "CON-ECO-MOD-07",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "US-China trade war, geopolitical tariffs, semiconductor embargoes, and global supply chain realignment."
  },
  {
    "id": "CU-YT-ECO-66",
    "videoId": "nnsjb_x5QhQ",
    "order": 66,
    "label": "The $38,000 Gold Myth | China's Strategy vs India's Gold Policy Explained",
    "scopeDescription": "Amit Sengupta Economy Lecture #66 [nnsjb_x5QhQ]: The $38,000 Gold Myth | China's Strategy vs India's Gold Policy Explained. Focus: Commodity Economics: Crude Oil, Gold & Strategic Energy.",
    "pillar": "Commodity Economics: Crude Oil, Gold & Strategic Energy",
    "targetConceptId": "CON-ECO-MOD-05",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Crude benchmarks, gold macro drivers. Modern update: G7/EU $60 Russian oil price cap, Urals-Brent discount dynamics, India non-dollar oil trade, and custom duty cuts on gold/silver in Budget 2024."
  },
  {
    "id": "CU-YT-ECO-67",
    "videoId": "ETsnudvf7Fo",
    "order": 67,
    "label": "Korea's AI bubble, KOSPI Crash Explained | AI Boom vs AI Bubble, What's Really Happening?",
    "scopeDescription": "Amit Sengupta Economy Lecture #67 [ETsnudvf7Fo]: Korea's AI bubble, KOSPI Crash Explained | AI Boom vs AI Bubble, What's Really Happening?. Focus: Global Trade Wars, Tariffs & International Geopolitics.",
    "pillar": "Global Trade Wars, Tariffs & International Geopolitics",
    "targetConceptId": "CON-ECO-MOD-07",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "US-China trade war, geopolitical tariffs, semiconductor embargoes, and global supply chain realignment."
  },
  {
    "id": "CU-YT-ECO-68",
    "videoId": "Hp9Zz6YGX8A",
    "order": 68,
    "label": "India's 7.8% GDP growth, falling Nifty Sensex, rising US Bond yield, Fed money printing Explained",
    "scopeDescription": "Amit Sengupta Economy Lecture #68 [Hp9Zz6YGX8A]: India's 7.8% GDP growth, falling Nifty Sensex, rising US Bond yield, Fed money printing Explained. Focus: Macroeconomic Foundations & Business Cycles.",
    "pillar": "Macroeconomic Foundations & Business Cycles",
    "targetConceptId": "CON-ECO-MOD-01",
    "status": "PROCESSED",
    "canonicalMappingStatus": "MAPPED",
    "notes": "Theoretical macro foundations (Keynesian AD, Deflation trap, Technical recession). Modern update: India FY24 GDP at 8.2%, bond yield spread dynamics."
  }
];

export async function seedAmitSenguptaEconomyLedger() {
  console.log('Seeding Amit Sengupta Economy Source Coverage Ledger (68 Units)...');

  // 1. Upsert Source
  const source = await db.source.upsert({
    where: { id: AMIT_SENGUPTA_ECONOMY_SOURCE.id },
    update: {
      title: AMIT_SENGUPTA_ECONOMY_SOURCE.title,
      sourceType: AMIT_SENGUPTA_ECONOMY_SOURCE.sourceType as any,
      authorityTier: AMIT_SENGUPTA_ECONOMY_SOURCE.authorityTier as any,
      description: AMIT_SENGUPTA_ECONOMY_SOURCE.description
    },
    create: {
      id: AMIT_SENGUPTA_ECONOMY_SOURCE.id,
      title: AMIT_SENGUPTA_ECONOMY_SOURCE.title,
      sourceType: AMIT_SENGUPTA_ECONOMY_SOURCE.sourceType as any,
      authorityTier: AMIT_SENGUPTA_ECONOMY_SOURCE.authorityTier as any,
      description: AMIT_SENGUPTA_ECONOMY_SOURCE.description
    }
  });

  // 2. Upsert Coverage Units
  for (const cu of AMIT_SENGUPTA_ECONOMY_COVERAGE_UNITS) {
    await db.coverageUnit.upsert({
      where: { id: cu.id },
      update: {
        sourceId: source.id,
        label: cu.label,
        scopeDescription: cu.scopeDescription,
        order: cu.order,
        status: cu.status,
        canonicalMappingStatus: cu.canonicalMappingStatus,
        notes: cu.notes
      },
      create: {
        id: cu.id,
        sourceId: source.id,
        label: cu.label,
        scopeDescription: cu.scopeDescription,
        order: cu.order,
        status: cu.status,
        canonicalMappingStatus: cu.canonicalMappingStatus,
        notes: cu.notes
      }
    });
  }

  console.log('[Ledger] Successfully registered SRC-YT-AMIT-SENGUPTA-ECONOMY with ' + AMIT_SENGUPTA_ECONOMY_COVERAGE_UNITS.length + ' CoverageUnits.');
}
