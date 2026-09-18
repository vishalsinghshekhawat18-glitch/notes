/**
 * Universal Knowledge & World Understanding Track — Module U6 Seed Data
 *
 * Subject: Power, Politics & The Post-Cold War World: Geopolitics, Distributive Insecurity & The Crisis of Democracy
 * Source: Yale University DeVane Lectures (PLSC 118) — Professor Ian Shapiro
 * Domain: World Understanding & Universal Knowledge
 *
 * Epistemic Standards:
 * - Pure Universal Knowledge / Mental Models: STRICTLY ZERO EXAM MAPPINGS (`examMappings: []`).
 * - 4-Layer Architecture: Source Truth -> Claims/Evidence -> Canonical Concepts -> Pedagogical/Revision/Assessment Blocks.
 * - Typographic Safety: Zero unescaped single $ symbols (use KaTeX notation or USD).
 */

import { db } from '../db/client';

export interface UniversalConceptSeed {
  id: string;
  topicOrder: number;
  topicSlug: string;
  topicTitle: string;
  topicDescription: string;
  slug: string;
  title: string;
  shortDefinition: string;
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  claims: {
    id: string;
    statement: string;
    claimType: 'CORE_PRINCIPLE' | 'HISTORICAL_FACT' | 'STATUTORY_RULE';
    epistemicLevel: 'ESTABLISHED_FACT' | 'SCHOLARLY_CONSENSUS';
    confidence: 'HIGH' | 'MEDIUM';
    locator: string;
    excerpt: string;
  }[];
  contentBlocks: {
    type: 'INTUITION' | 'CORE_IDEA' | 'MECHANISM' | 'EXAM_APPLICATION';
    title: string;
    body: string;
    order: number;
  }[];
  revisionUnits: {
    type: 'FLASH_30S' | 'SUMMARY_2M' | 'ARCHITECTURE_5M';
    content: string;
  }[];
  questions: {
    type: 'CONCEPT_CHECK' | 'APPLIED_SCENARIO';
    difficulty: 'EASY' | 'MEDIUM' | 'HARD';
    stem: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
    trapExplanation?: string;
    examinerTrapPattern?: string;
  }[];
  examMappings: never[];
}

export const MODULE_U6_CONCEPTS: UniversalConceptSeed[] = [
  {
    "id": "CON-POL-01",
    "topicOrder": 1,
    "topicSlug": "geopolitics-capitalism-privatization-and-democratic-populism",
    "topicTitle": "Geopolitics, State Capitalism, Distributive Insecurity & The Populist Backlash",
    "topicDescription": "The systemic transformation of the global order from 1989 to the present: post-communist transition, the hollowed-out state, behavioral distributive politics, humanitarian intervention, and the institutional misdiagnoses of democratic malaise.",
    "slug": "post-soviet-shock-therapy-and-russian-oligarchic-capitalism",
    "title": "Post-Soviet Shock Therapy & The Rise of Russian Oligarchic Capitalism",
    "shortDefinition": "The rapid, unregulated transition of the Soviet command economy into market capitalism via price liberalization and voucher auctions, which precipitated severe economic depression, state capture, and the creation of an entrenched oligarchic elite.",
    "difficulty": "INTERMEDIATE",
    "claims": [
      {
        "id": "CLM-POL-01-01",
        "statement": "The application of neoliberal 'shock therapy' in post-Soviet Russia—lifting price controls overnight and privatizing state assets without legal, banking, or regulatory institutions—caused a catastrophic GDP contraction exceeding 40%, an economic collapse deeper and longer than the American Great Depression.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "SCHOLARLY_CONSENSUS",
        "confidence": "HIGH",
        "locator": "Yale DeVane Lectures, Lecture 2: From Soviet Communism to Russian Gangster Capitalism",
        "excerpt": "Shock therapy in Russia eliminated price controls overnight, triggering over 2,500% inflation in 1992 and a cumulative GDP collapse exceeding 40%."
      },
      {
        "id": "CLM-POL-01-02",
        "statement": "The 1992 voucher privatization distributed 10,000-ruble vouchers to every citizen, but in an environment of hyperinflation, impoverished citizens sold their vouchers for subsistence to enterprise directors and criminal syndicates, concentrating industrial ownership into a predatory managerial elite.",
        "claimType": "HISTORICAL_FACT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Yale DeVane Lectures, Lecture 2: From Soviet Communism to Russian Gangster Capitalism",
        "excerpt": "Impoverished citizens sold their 10,000-ruble vouchers on street corners for bread and vodka, enabling red directors to buy up enterprise equity for negligible sums."
      },
      {
        "id": "CLM-POL-01-03",
        "statement": "The 1995-1996 'Loans-for-Shares' scheme enabled a cabal of nascent commercial bankers to finance Boris Yeltsin's re-election campaign in exchange for controlling equity stakes in Russia's crown-jewel oil, gas, and nickel enterprises at rigged auctions for pennies on the dollar, birthing the Russian oligarch class.",
        "claimType": "HISTORICAL_FACT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Yale DeVane Lectures, Lecture 2; Freeland, 'Sale of the Century'",
        "excerpt": "Commercial banks lent money to the bankrupt Yeltsin government; upon deliberate state default, banks auctioned off the nation's premier oil and metal giants to themselves."
      },
      {
        "id": "CLM-POL-01-04",
        "statement": "Vladimir Putin's consolidation of power after 1999 did not dismantle oligarchic capitalism but subjugated it to the state through a 'vertical of power', where oligarchs retained wealth only on condition of absolute political submission, imprisoning non-compliant magnates like Mikhail Khodorkovsky.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "SCHOLARLY_CONSENSUS",
        "confidence": "HIGH",
        "locator": "Yale DeVane Lectures, Lecture 2; Shapiro, 'The Real World of Democratic Theory'",
        "excerpt": "Putin's vertical of power subordinated the oligarchs to the siloviki: stay out of politics and obey the Kremlin, or face imprisonment and expropriation."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Mirage of the Instant Free Market",
        "body": "Imagine demolishing a massive, intricately centralized hydraulic dam overnight with dynamite because you believe water should flow freely, without building any canals, aqueducts, or floodgates first. Instead of a flourishing agricultural paradise, the torrent of water wipes out every downstream village, drowning farms and concentrating all water access into the hands of a few ruthless warlords who control the high ground.\n\nThis was post-Soviet Russia in 1991. Western neoliberal economists assumed that if you simply abolished the state command economy, a benign Swiss-style market economy would spontaneously materialize. They failed to realize that markets are not spontaneous acts of nature—markets are complex social institutions that require contract enforcement, transparent judiciaries, property registries, and banking regulations. In their absence, capitalism degenerates into gangsterism.",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "The Anatomy of Post-Communist Catastrophe: From Gaidar to the Oligarchs",
        "body": "The collapse of the Soviet Union in December 1991 left Russia with a bankrupt treasury, empty grocery shelves, and a massive military-industrial apparatus. Under the advice of Western economists and domestic reformers led by Yegor Gaidar and Anatoly Chubais, the Russian government implemented 'Shock Therapy':\n\n1. Price Liberalization (January 1992):\n   - Overnight, price controls on basic food, energy, and consumer goods were eliminated.\n   - Instead of clearing markets gracefully, prices exploded by over 2,500% in 1992 alone. The life savings of ordinary Russian citizens, accumulated over decades in state Sberbank accounts, were completely wiped out in weeks.\n\n2. Voucher Privatization (1992-1994):\n   - To rapidly transfer state property into private hands and prevent a communist resurgence, the government issued 144 million privatization vouchers (valued at 10,000 rubles each) to Russian citizens.\n   - Unemployed workers, unpaid for months, had no capital or financial literacy. They sold their vouchers on street corners for modest cash sums or bottles of alcohol. Canny speculators, former communist enterprise managers ('Red Directors'), and organized crime syndicates bought up millions of vouchers, consolidating ownership of major factories.\n\n3. The Infamous 'Loans-for-Shares' Program (1995-1996):\n   - By 1995, Boris Yeltsin's popularity had plummeted into single digits (approx. 6%), while Communist Party leader Gennady Zyuganov led the polls for the upcoming 1996 presidential election.\n   - Financier Vladimir Potanin proposed an ingenious, corrupt bargain: a consortium of private bankers would lend the cash-starved government hundreds of millions of USD to fund pensions and campaign spending. In return, the government pledged controlling equity shares in lucrative state natural monopoly enterprises (Yukos, Norilsk Nickel, Sibneft) as collateral.\n   - When the government deliberately defaulted on the loans, the bankers auctioned the enterprises to themselves at rigged, closed auctions for fractions of their true value. Yeltsin won re-election with an avalanche of oligarch-funded television propaganda, but Russian democracy lost all moral and economic legitimacy in the eyes of its citizens.",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "The Mechanism of State Capture & The Vertical of Power",
        "body": "The structural evolution of Russian political economy from Soviet central planning to authoritarian state capitalism:\n\n```\n+-------------------------------------------------------------------------+\n|          THE EVOLUTION OF RUSSIAN POST-SOVIET POLITICAL ECONOMY         |\n+-------------------------------------------------------------------------+\n\n [STAGE 1: SOVIET COMMAND] (Pre-1991)\n   State Gosplan controls production -> Bureaucratic stagnation -> Collapse\n             |\n             v\n [STAGE 2: SHOCK THERAPY & HYPERINFLATION] (1991-1994)\n   Lift price controls -> 2,500% inflation -> Wipe out citizen savings\n   Voucher auctions -> Desperate citizens sell vouchers for pennies\n             |\n             v\n [STAGE 3: 'LOANS-FOR-SHARES' & STATE CAPTURE] (1995-1999)\n   Private Banks lend cash to Yeltsin -> Government defaults on purpose\n   Bankers acquire oil, gas, metals -> 7 Oligarchs control 50%+ of Russian GDP\n   * 'The Semibankirshchina' (Rule of Seven Bankers) dictates state policy\n             |\n             v\n [STAGE 4: PUTIN'S 'VERTICAL OF POWER'] (2000-Present)\n   Siloviki (security service elites) subordinate the oligarchs:\n   +-------------------------------------------------------------------+\n   | COMPLIANT OLIGARCHS           | DISOBEDIENT OLIGARCHS             |\n   | (Abramovich, Rotenbergs)      | (Khodorkovsky, Berezovsky)        |\n   | - Keep billions in assets     | - Imprisonment in Siberia         |\n   | - Absolute political loyalty  | - State expropriation (Yukos->    |\n   | - Fund Kremlin priorities     |   Rosneft) / Forced exile         |\n   +-------------------------------------------------------------------+\n```",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Universal Mental Model: Institutional Sequencings in Economic Reform",
        "body": "The contrast between Russian and Chinese economic transition provides a fundamental mental model in political economy:\n\n1. Institutional Sequencing Matters More Than Ideology:\n   - Neoliberal dogma assumed 'Private ownership + price liberalization = market efficiency'. Russia proved that private ownership without the rule of law, anti-trust enforcement, and property rights protection equals predatory extortion.\n   - In contrast, China's gradual dual-track transition (Deng Xiaoping: 'Crossing the river by feeling the stones') preserved administrative stability, nurtured Township and Village Enterprises (TVEs), and created market mechanisms at the margins before privatizing core industries.\n\n2. The Price of Illegitimate Privatization:\n   - When state assets are privatized corruptly, property rights never achieve social legitimacy. The populace views private property as stolen loot. This creates fertile ground for an authoritarian strongman to expropriate assets with broad public applause, as Vladimir Putin did with Yukos in 2003.",
        "order": 4
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Russian Shock Therapy in 1992 eliminated price controls, wiping out life savings with 2,500% inflation. Corrupt voucher auctions and the 1995 Loans-for-Shares scheme handed massive oil/gas assets to private bankers for pennies, birthing the oligarchs. Putin later tamed them under his vertical of power—obey the Kremlin or lose everything."
      },
      {
        "type": "SUMMARY_2M",
        "content": "Western advisers believed lifting price controls and privatizing state property would instantly generate a functioning market economy in post-Soviet Russia. Instead, absent legal institutions, contract enforcement, and banking regulations, the economy contracted by over 40%. The 1995 Loans-for-Shares scheme allowed private financiers to fund Boris Yeltsin's re-election campaign in exchange for equity in lucrative state resource companies at rigged auctions. This produced extreme wealth concentration and state capture by seven oligarchs. Under Vladimir Putin, the security services (siloviki) subordinated the oligarchs, establishing an authoritarian state-capitalist vertical of power where property rights are contingent on political obedience."
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "The Feudal Contract of Modern Oligarchy and Institutional Reform:\n1. The Absolutist Void: Markets require robust institutional scaffolding (courts, contract law, property registries). Destroying central planning without institutional infrastructure creates lawless gangster capitalism.\n2. State Capture via Loans-for-Shares: Financiers traded campaign funding for sovereign natural resource monopolies, delegitimizing private property in the public consciousness.\n3. The Neo-Feudal Vertical: Modern Russian oligarchs hold wealth as conditional royal fiefdoms. The sovereign grants extraction rents, but disobedience triggers instantaneous expropriation and imprisonment."
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "What was the structural mechanism of the 1995-1996 'Loans-for-Shares' program in post-Soviet Russia?",
        "options": [
          "A consortium of commercial banks lent money to the Russian government backed by shares in state resource firms as collateral, and took permanent ownership at rigged auctions after a planned default.",
          "International monetary institutions provided sovereign loans to Russia in exchange for shares traded openly on the New York Stock Exchange.",
          "Every Russian citizen was granted equal equity shares in state oil monopolies via a direct electronic dividend distribution.",
          "Foreign multinationals purchased 51% stakes in Soviet aerospace enterprises under bilateral treaties with the United States."
        ],
        "correctAnswer": "A consortium of commercial banks lent money to the Russian government backed by shares in state resource firms as collateral, and took permanent ownership at rigged auctions after a planned default.",
        "explanation": "In the 1995-1996 Loans-for-Shares scheme engineered by Vladimir Potanin and approved by Yeltsin, private commercial bankers provided loans to fund the state budget in exchange for pledged shares in prime natural resource assets (like Yukos and Norilsk Nickel). The government deliberately defaulted, allowing the banks to auction the assets to themselves at laughably low prices.",
        "trapExplanation": "IMF and World Bank loans had strict macroeconomic conditionality but did not give multilateral institutions equity shares in Russian oil monopolies (B). The earlier 1992 voucher program attempted wide distribution, but vouchers were sold off and never converted into equal direct corporate shareholding (C). Foreign multinationals were largely excluded from the closed, corrupt insider auctions (D).",
        "examinerTrapPattern": "Confusing domestic oligarchic insider deals with formal multilateral bailouts (like IMF loans) or equitable citizen dividend distributions."
      },
      {
        "type": "APPLIED_SCENARIO",
        "difficulty": "MEDIUM",
        "stem": "Why did voucher privatization in 1992 fail to create a broad property-owning democratic middle class in Russia?",
        "options": [
          "Hyperinflation and severe poverty forced desperate citizens to sell their vouchers for immediate cash or subsistence goods, allowing enterprise insiders and speculators to amass controlling blocks.",
          "The Russian Supreme Court declared privatization unconstitutional and annulled all voucher distributions within two months.",
          "The vouchers could only be redeemed for agricultural farmland, which urban factory workers had no interest in farming.",
          "Foreign investors bought 95% of all vouchers on the London Stock Exchange before Russian citizens received them."
        ],
        "correctAnswer": "Hyperinflation and severe poverty forced desperate citizens to sell their vouchers for immediate cash or subsistence goods, allowing enterprise insiders and speculators to amass controlling blocks.",
        "explanation": "In the brutal environment of 1992-1993 where savings were wiped out and wages went unpaid for months, ordinary Russians could not afford to hold onto theoretical long-term corporate equity; they sold their vouchers on street corners for immediate necessities, enabling enterprise directors and criminal syndicates to concentrate ownership.",
        "trapExplanation": "The privatization program proceeded under presidential decree and was not struck down by the courts (B). Vouchers applied to industrial enterprises, not agricultural farmland (C). Vouchers were distributed physically inside Russia and were not traded on foreign exchanges (D).",
        "examinerTrapPattern": "Assuming legal or constitutional barriers thwarted privatization rather than economic desperation and the absence of functioning capital markets."
      },
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "HARD",
        "stem": "How did Vladimir Putin alter the relationship between the state and the oligarchs after assuming the Russian presidency in 2000?",
        "options": [
          "He subordinated the oligarchs to the Kremlin's 'vertical of power', letting them keep their wealth only if they remained politically submissive and supported state objectives.",
          "He re-nationalized all private property and reinstated the Soviet Gosplan central planning system.",
          "He broke up all natural resource monopolies and enforced Western European anti-trust and transparency standards.",
          "He exiled all Russian billionaires and replaced them with foreign multinational executive boards."
        ],
        "correctAnswer": "He subordinated the oligarchs to the Kremlin's 'vertical of power', letting them keep their wealth only if they remained politically submissive and supported state objectives.",
        "explanation": "Putin established an authoritarian vertical of power: oligarchs could retain their billions and businesses provided they stayed completely out of politics and funded Kremlin priorities. Those who challenged this settlement (like Mikhail Khodorkovsky) were arrested, their companies expropriated, and their assets transferred to state-controlled entities or Kremlin loyalists.",
        "trapExplanation": "Putin did not reinstate Soviet central planning; Russia remained a state-dominated capitalist market economy (B). Anti-trust enforcement was not established; monopolies were consolidated under loyal state conglomerates like Gazprom and Rosneft (C). Putin did not replace oligarchs with Western executives; he empowered domestic siloviki (D).",
        "examinerTrapPattern": "Believing Putin either eliminated capitalism (returning to full Soviet communism) or established a rule-of-law Western market economy."
      }
    ],
    "examMappings": []
  },
  {
    "id": "CON-POL-02",
    "topicOrder": 1,
    "topicSlug": "geopolitics-capitalism-privatization-and-democratic-populism",
    "topicTitle": "Geopolitics, State Capitalism, Distributive Insecurity & The Populist Backlash",
    "topicDescription": "The systemic transformation of the global order from 1989 to the present: post-communist transition, the hollowed-out state, behavioral distributive politics, humanitarian intervention, and the institutional misdiagnoses of democratic malaise.",
    "slug": "political-psychology-of-distributive-politics-loss-aversion-and-third-way",
    "title": "The Political Psychology of Distributive Politics: Loss Aversion, Insecurity & The Third Way",
    "shortDefinition": "The application of behavioral economics and Prospect Theory to electoral politics, showing that voter mobilization is driven primarily by the dread of economic insecurity and loss aversion rather than abstract inequality, and explaining how 'Third Way' centrism alienated traditional labor bases.",
    "difficulty": "INTERMEDIATE",
    "claims": [
      {
        "id": "CLM-POL-02-01",
        "statement": "Applying Daniel Kahneman and Amos Tversky's Prospect Theory to political economy reveals that voters exhibit profound loss aversion: the psychological pain of losing USD 1,000 in income or status is more than twice as intense as the satisfaction of gaining USD 1,000, making economic insecurity a vastly more potent political motivator than statistical inequality.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "SCHOLARLY_CONSENSUS",
        "confidence": "HIGH",
        "locator": "Yale DeVane Lectures, Lecture 5 & 6; Shapiro & Graetz, 'The Wolf at the Door'",
        "excerpt": "Loss aversion dictates that losses loom roughly twice as large as equivalent gains; political mobilization is driven by the threat of downward mobility, not Gini coefficients."
      },
      {
        "id": "CLM-POL-02-02",
        "statement": "Political revolts and populist surges occur not when inequality is highest, but when downward mobility threatens previously stable middle-class cohorts who face the terrifying prospect of losing their home, health coverage, or social standing.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "SCHOLARLY_CONSENSUS",
        "confidence": "HIGH",
        "locator": "Yale DeVane Lectures, Lecture 5; Shapiro, 'The Real World of Democratic Theory'",
        "excerpt": "Grievance stems from insecurity—the wolf at the door—where established middle-class families see their security dismantled."
      },
      {
        "id": "CLM-POL-02-03",
        "statement": "The 'Third Way' politics championed by Bill Clinton (New Democrats), Tony Blair (New Labour), and Gerhard Schröder (Neue Mitte) in the 1990s embraced financial deregulation and free-trade globalization under the assumption that rising GDP would compensate displaced industrial workers, while actively severing institutional ties to labor unions.",
        "claimType": "HISTORICAL_FACT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Yale DeVane Lectures, Lecture 6: Reorienting the Left",
        "excerpt": "Third Way social democrats embraced market deregulation and decoupled from organized labor, offering education and retraining in lieu of structural safety nets."
      },
      {
        "id": "CLM-POL-02-04",
        "statement": "By accepting the neoliberal economic consensus and abandoning aggressive universal social insurance against wage volatility, centre-left parties left the working class politically unanchored and receptive to nationalist, anti-immigrant populist appeals.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "SCHOLARLY_CONSENSUS",
        "confidence": "HIGH",
        "locator": "Yale DeVane Lectures, Lecture 6 & Lecture 21: Backlash - 2016 and Beyond",
        "excerpt": "Abandoning working-class protection left millions vulnerable to economic shocks, driving former union voters to right-wing populist parties."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Wolf at the Door vs. The Gilded Yacht",
        "body": "Imagine sitting at your kitchen table. Two miles away, a billionaire purchases a second USD 100 million superyacht. How much does that fact disrupt your sleep tonight? For most people, it induces a mild sense of unfairness or detached eye-rolling.\n\nNow imagine your employer announces that next month, your manufacturing plant is closing, your pension is frozen, and you will lose your health insurance while your mortgage payment is due. That does not induce mild irritation; it induces paralyzing terror and existential rage.\n\nAcademic theorists and political elites often assume that voters are motivated by Gini coefficients and abstract statistical inequality. Professor Ian Shapiro demonstrates that human psychology does not operate on relative percentiles. Humans are loss-averse creatures. What drives political fury is not seeing someone else get richer; it is the feeling of the wolf at your own door—the dread of downward mobility and the sudden loss of hard-won security.",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "Prospect Theory in Politics & The Tragedy of the Third Way",
        "body": "To understand contemporary democratic turmoil, Ian Shapiro connects behavioral economics to electoral realignment:\n\n1. Prospect Theory and Asymmetric Political Salience:\n   - Kahneman and Tversky demonstrated that the human value function is concave for gains but convex and steep for losses. Losses loom roughly twice as large as equivalent gains.\n   - In politics, this means an incumbent government cannot win re-election merely by boasting that average national GDP grew by 3%. If 15% of the electorate experienced acute wage stagnation, factory closures, or the loss of their homes, their grievance and mobilization will overpower the mild satisfaction of the winners.\n\n2. The 'Third Way' Transformation (1990s):\n   - Following consecutive defeats by Ronald Reagan and Margaret Thatcher, center-left parties concluded they could no longer win on traditional socialist or social-democratic platforms.\n   - Under Bill Clinton, Tony Blair, and Gerhard Schröder, they rebranded as the 'Third Way':\n     * Accepted deregulation of financial markets (e.g. repeal of Glass-Steagall in 1999).\n     * Championed free-trade agreements (NAFTA, China's entry into the WTO) without robust domestic adjustment assistance.\n     * Cut welfare programs (1996 US Welfare Reform, Germany's Hartz IV reforms).\n     * Substituted meritocracy and college education ('learn to code') for collective bargaining and union power.\n\n3. The Political Vacuum and Abandonment:\n   - While Third Way policies produced temporary economic booms, they dismantled the institutional safety cushions protecting the industrial working class.\n   - When the 2008 financial crisis hit, millions of working-class families discovered they had no economic floor. Seeing both establishment center-left and center-right parties united in bank bailouts while ordinary homeowners were foreclosed upon, voters abandoned establishment parties in droves.",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "The Loss Aversion Function & Electoral Realignment",
        "body": "How loss aversion drives populist electoral earthquakes:\n\n```\n+-------------------------------------------------------------------------+\n|               PROSPECT THEORY APPLIED TO DISTRIBUTIVE POLITICS          |\n+-------------------------------------------------------------------------+\n\n            Psychological Value (Voter Response)\n                           ▲\n                           │          / Gains: Flat Slope\n                           │         /  (Voters take gains for granted,\n                           │        /    low political mobilization)\n                           │       /\n  - Losses                 │      /\n ◄─────────────────────────┼─────────────────────────► + Gains (Real Income)\n   (Job loss, foreclosed   │    /\n    home, canceled pension)│   /\n                           │  /\n                           │ /\n                           │/  Losses: Very Steep Slope\n                           │   (Losses induce intense terror, grievance,\n                           │    and radical anti-system voting!)\n                           ▼\n\n===========================================================================\n                 THE THIRD WAY POLITICAL TRAP                              \n===========================================================================\n Traditional Left: Supported by Unions -> Guaranteed working-class floor\n         |\n         v (1990s Rebranding: Clinton / Blair / Schröder)\n 'Third Way': Deregulate Finance + Embrace Globalization + Decouple from Unions\n         |\n         v (2008 Shock + De-industrialization)\n Massive Middle-Class Insecurity -> Traditional Left offers only retraining\n         |\n         v\n Working Class Defects to Populist Right (Brexit, Trump, National Rally)\n```",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Universal Mental Model: Insecurity-Proofing Policy Design",
        "body": "Understanding the distinction between inequality and insecurity reshapes public policy design:\n\n1. Target the Floor, Not Just the Ceiling:\n   - Taxing the top 1% without providing concrete, visible security to the bottom 80% does not solve political instability. Populist backlash is neutralized not by symbolic billionaire taxes, but by universal, non-means-tested security nets: wage insurance, portable healthcare, affordable childcare, and guaranteed retraining stipends.\n\n2. The Danger of Retraining Clichés:\n   - Telling a 52-year-old laid-off auto worker or coal miner to 'retrain in Python programming' ignores human dignity and time horizons. Policies must provide bridge funding, infrastructure jobs, and community revitalization rather than patronizing advice.",
        "order": 4
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Voters do not revolt over statistical inequality; they revolt over loss aversion and economic insecurity! The 1990s Third Way (Clinton/Blair) deregulated finance and backed free trade while abandoning labor unions. When manufacturing vanished, insecure workers had no safety floor and flocked to populist disruptors."
      },
      {
        "type": "SUMMARY_2M",
        "content": "Drawing on Kahneman and Tversky's Prospect Theory, Ian Shapiro demonstrates that voters feel the pain of economic loss twice as acutely as equivalent gains. Insecurity—fear of losing one's home, job, or healthcare—is a vastly more potent political catalyst than abstract income inequality. In the 1990s, Third Way social democrats (Clinton, Blair, Schröder) accepted the neoliberal consensus, supported financial deregulation and globalization, and weakened their historic alliance with organized labor. When structural deindustrialization and the 2008 financial crash struck, working-class communities experienced catastrophic insecurity. Lacking protection from traditional center-left parties, they redirected their political anger toward right-wing populist movements promising protectionism and border control."
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Behavioral Distributive Politics and Electoral Realignment:\n1. Asymmetric Prospect Theory: Human utility is twice as sensitive to losses as to gains. Policy instability arises when middle-class groups face sudden downward mobility.\n2. The Third Way Decoupling: Center-left parties abandoned union alliances to capture affluent suburban voters, relying on meritocratic educational slogans instead of collective insurance.\n3. The Populist Realignment: When the 2008 crash devastated regional manufacturing communities, abandoned workers defected to anti-establishment nationalist movements offering border protection and trade tariffs."
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "According to Ian Shapiro's application of Prospect Theory to distributive politics, why does economic insecurity trigger stronger electoral volatility than income inequality?",
        "options": [
          "Human psychology exhibits loss aversion: the threat of losing existing income, status, or security generates far more intense political grievance than observing distant billionaires gain wealth.",
          "Income inequality is impossible to measure accurately, so voters only pay attention to the official national unemployment rate.",
          "Voters strictly calculate Gini coefficients before deciding whether to vote for incumbent political parties.",
          "Low-income voters universally support high inheritance taxes, preventing inequality from becoming a political issue."
        ],
        "correctAnswer": "Human psychology exhibits loss aversion: the threat of losing existing income, status, or security generates far more intense political grievance than observing distant billionaires gain wealth.",
        "explanation": "Prospect Theory establishes that the psychological utility curve is twice as steep for losses as for gains. In distributive politics, middle-class voters facing downward mobility (loss of jobs, pensions, home equity) experience acute dread and anger, mobilizing aggressively against establishment politicians, whereas abstract inequality at the top creates far less intense behavioral motivation.",
        "trapExplanation": "Inequality is widely measured and discussed, but its psychological salience is secondary to immediate economic vulnerability (B). Ordinary voters do not read or calculate Gini coefficients when forming voting intentions (C). Public support for inheritance and estate taxes is often surprisingly low even among lower-income groups (D).",
        "examinerTrapPattern": "Assuming voters are motivated by rational-choice econometric statistics (Gini coefficients) rather than behavioral cognitive biases (loss aversion)."
      },
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "What core strategic change characterized the 'Third Way' politics of Bill Clinton and Tony Blair during the 1990s?",
        "options": [
          "Embracing market deregulation and free trade while weakening institutional ties to labor unions and championing meritocratic education over universal social insurance.",
          "Nationalizing core banking sectors and re-imposing strict capital controls across Western economies.",
          "Expanding radical wealth redistribution and banning all private corporate campaign donations.",
          "Withdrawing from international trade organizations to protect domestic industrial manufacturing."
        ],
        "correctAnswer": "Embracing market deregulation and free trade while weakening institutional ties to labor unions and championing meritocratic education over universal social insurance.",
        "explanation": "Third Way politicians (Clinton's New Democrats, Blair's New Labour) moved their parties to the center by accepting financial market deregulation, signing free trade pacts, reducing reliance on trade unions, and arguing that higher education and job retraining—rather than state welfare guarantees—were the solution to economic change.",
        "trapExplanation": "Third Way leaders deregulated banks (e.g. repeal of Glass-Steagall) rather than nationalizing them (B). Third Way leaders did not advance radical wealth redistribution; they often reduced welfare entitlements (C). They enthusiastically championed free trade agreements (NAFTA, WTO) rather than withdrawing from them (D).",
        "examinerTrapPattern": "Confusing Third Way centrism with traditional democratic socialism or trade protectionism."
      },
      {
        "type": "APPLIED_SCENARIO",
        "difficulty": "HARD",
        "stem": "What long-term political consequence did Third Way policies create for traditional center-left parties following the 2008 financial crisis?",
        "options": [
          "Industrial working-class voters felt economically abandoned and increasingly defected to right-wing populist and anti-establishment movements.",
          "Center-left parties achieved permanent supermajorities across Western Europe and North America.",
          "Labor unions expanded their membership to historic highs across the private service sector.",
          "The complete elimination of right-wing nationalist political parties across the OECD."
        ],
        "correctAnswer": "Industrial working-class voters felt economically abandoned and increasingly defected to right-wing populist and anti-establishment movements.",
        "explanation": "Because center-left parties had co-authored deregulation and severed deep ties with organized labor, when the 2008 crash and subsequent austerity hit, working-class communities felt betrayed by both establishment parties, paving the way for the populist earthquake of 2016 (Trump, Brexit, Continental European populism).",
        "trapExplanation": "Center-left parties suffered historic electoral collapses across Europe (the phenomenon termed 'Pasokification') (B). Private sector union membership continued its secular decline (C). Right-wing nationalist parties experienced unprecedented resurgence, not elimination (D).",
        "examinerTrapPattern": "Overestimating the electoral durability of center-left coalitions after the financial crash."
      }
    ],
    "examMappings": []
  },
  {
    "id": "CON-POL-03",
    "topicOrder": 1,
    "topicSlug": "geopolitics-capitalism-privatization-and-democratic-populism",
    "topicTitle": "Geopolitics, State Capitalism, Distributive Insecurity & The Populist Backlash",
    "topicDescription": "The systemic transformation of the global order from 1989 to the present: post-communist transition, the hollowed-out state, behavioral distributive politics, humanitarian intervention, and the institutional misdiagnoses of democratic malaise.",
    "slug": "hollowed-out-state-political-economy-of-government-privatization",
    "title": "The Hollowed-Out State: The Political Economy of Government Privatization",
    "shortDefinition": "The systematic outsourcing and transfer of core sovereign functions—utilities, municipal services, prisons, and military logistics—to private for-profit entities, creating perverse market incentives, crony contracting, and the erosion of public accountability.",
    "difficulty": "INTERMEDIATE",
    "claims": [
      {
        "id": "CLM-POL-03-01",
        "statement": "The privatization wave of the late 20th and early 21st centuries extended the Washington Consensus from traditional state enterprises to core sovereign state prerogatives: eminent domain for private commercial gain (upheld in Kelo v. City of New London), municipal water and infrastructure, and correctional facilities.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "SCHOLARLY_CONSENSUS",
        "confidence": "HIGH",
        "locator": "Yale DeVane Lectures, Lecture 8: Privatizing Government I",
        "excerpt": "Privatization expanded into sovereign domains, including eminent domain for private development in Kelo and municipal services."
      },
      {
        "id": "CLM-POL-03-02",
        "statement": "Privatizing criminal justice through for-profit prison operators (such as CoreCivic and GEO Group) introduces perverse incentives: contracts frequently mandate 90%+ guaranteed bed-occupancy quotas, aligning corporate profitability with higher incarceration rates and aggressive lobbying against sentencing reform.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "SCHOLARLY_CONSENSUS",
        "confidence": "HIGH",
        "locator": "Yale DeVane Lectures, Lecture 9: Privatizing Government II: Prisons and the Military",
        "excerpt": "For-profit prison contracts enforce 90%+ bed occupancy quotas, creating financial incentives to maximize incarceration and block penal reforms."
      },
      {
        "id": "CLM-POL-03-03",
        "statement": "The extensive contractorization of military logistics and security in Iraq and Afghanistan (such as Blackwater and Host Nation Trucking contracts) created an unaccountable shadow army where private contractors outnumbered uniformed troops, siphoning billions in taxpayer dollars while paying protection money to Taliban warlords.",
        "claimType": "HISTORICAL_FACT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Yale DeVane Lectures, Lecture 9; US Senate Armed Services Committee Report on Private Security Contractors",
        "excerpt": "Under the USD 2.16 billion Host Nation Trucking contract, private security subcontractors regularly paid protection money to Taliban warlords for safe passage."
      },
      {
        "id": "CLM-POL-03-04",
        "statement": "Privatization rarely creates genuinely competitive free markets; instead, it replaces public monopolies with publicly funded private monopolies that socialize operational risks while privatizing corporate profits, eroding Max Weber's foundational definition of the state as the sole possessor of legitimate coercive force.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "SCHOLARLY_CONSENSUS",
        "confidence": "HIGH",
        "locator": "Yale DeVane Lectures, Lecture 8 & 9; Shapiro, 'The Real World of Democratic Theory'",
        "excerpt": "Outsourcing coercive force and natural monopolies erodes the Weberian state monopoly on legitimate violence, replacing public service with rent-seeking private monopolies."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Illusion of Cheaper Governance",
        "body": "Suppose a city wants to save money on its fire department. It fires all municipal firefighters and contracts a private corporation. The corporation signs a 30-year deal guaranteeing a 12% profit margin. To maximize profits, the private firm cuts firefighter training, reduces maintenance on fire trucks, and charges residents a USD 5,000 fee when their house catches fire. If a family cannot pay, the private firefighters stand on the sidewalk and let the house burn.\n\nThis is not a hypothetical caricature; it reflects the core structural dilemma of privatizing sovereign state responsibilities. Free markets work wonders when consumers can choose between five smartphone brands or three coffee shops. But when the service is a natural monopoly, a captive municipal service, or coercive state power (prisons and warfare), privatization does not create market competition. It creates a government-funded cash spigot with zero consumer choice, perverse incentives, and no democratic accountability.",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "The Anatomy of Outsourced Sovereignty: Eminent Domain, Prisons & War",
        "body": "Ian Shapiro analyzes how modern privatization crossed the boundary from commercial industry into sovereign state authority:\n\n1. Eminent Domain and Kelo v. City of New London (2005):\n   - The Fifth Amendment of the US Constitution permits the taking of private property only for 'public use' (roads, schools, military bases) with just compensation.\n   - In Kelo, the US Supreme Court ruled that the city could seize private, unblighted family homes and hand the land to a private commercial developer simply because the developer promised to generate higher municipal property taxes.\n   - This redefined 'public use' as mere 'public benefit' or private economic development, turning sovereign coercive condemnation power into an instrument of corporate profit.\n\n2. The Carceral-Industrial Complex (Private Prisons):\n   - When state governments privatize prison management to private firms (CoreCivic, GEO Group), the financial logic of capitalism clashes directly with the public interest in rehabilitation.\n   - To remain profitable, private prison operators require full beds. Many state contracts include 'bed guarantees' (occupancy clauses requiring the state to maintain 90-100% occupancy or pay financial penalties).\n   - Private prison corporations spend millions lobbying for mandatory minimum sentences, three-strikes laws, and detention of undocumented immigrants to secure raw human material for their business model.\n\n3. The Military Contractorization Trap (Blackwater & Host Nation Trucking):\n   - In the post-9/11 wars in Iraq and Afghanistan, military contractors outnumbered uniformed service members.\n   - Under the USD 2.16 billion Host Nation Trucking contract in Afghanistan, private logistics firms hired local security to convoy supplies through hostile territory. A US Congressional investigation revealed that these private contractors routinely paid hundreds of millions of taxpayer dollars in protection money to Taliban warlords to ensure safe passage, directly financing the enemy killing American soldiers.",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "The Perverse Incentive Feedback Loop in Sovereign Privatization",
        "body": "How private outsourcing of state functions creates anti-rehabilitative and anti-sovereign feedback loops:\n\n```\n+-------------------------------------------------------------------------+\n|          THE PERVERSE FEEDBACK LOOP OF PRIVATE INCARCERATION            |\n+-------------------------------------------------------------------------+\n\n   State Government seeks budget relief\n             |\n             v\n   Signs Long-Term Contract with Private Prison Firm\n   * Includes '90% Guaranteed Bed-Occupancy Clause'\n             |\n             v\n   Private Firm cuts staff, wages, mental health & rehabilitation programs\n   (Goal: Maximize margin per prisoner per day)\n             |\n             v\n   Higher In-Prison Violence & Zero Post-Release Re-entry Skills\n             |\n             v\n   Recidivism Rates Skyrocket (70%+ return to prison within 3 years)\n             |\n             v\n   Private Firm reaps record revenues & lobbies state legislature for:\n   * Mandatory minimum sentences & stricter bail laws\n             |\n             +--------> [Beds stay 95% full -> Guaranteed profit spigot!]\n\n===========================================================================\n                 THE MILITARY CONTRACTING PROTECTION TRAP                  \n===========================================================================\n Pentagon -> Awards USD 2 Billion Supply Convoy Contract to Private Firm\n          -> Firm hires unregulated local subcontractors for convoy security\n          -> Subcontractors pay protection money to Taliban / Insurgent Warlords\n          -> Insurgents buy weapons to attack US troops -> Demands more convoys!\n```",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Universal Mental Model: The Inherent Boundaries of Market Incentives",
        "body": "Understanding the limits of privatization establishes key criteria for public sector governance:\n\n1. The Principal-Agent Problem in Coercive Power:\n   - In standard markets, if a supplier performs poorly, the customer walks away. In coercive state functions (police, courts, prisons, military combat), the 'customer' has no exit option. When the agent's profit incentive rewards cutting corners on human rights or perpetuating social harm, market discipline completely fails.\n\n2. The Illusion of Cost-Efficiency:\n   - Governments frequently privatize to remove debt and long-term public employee pensions from balance sheets. However, once a private monopoly contractor is entrenched, contract modifications, cost-plus escalations, and lobbying capture eliminate any initial cost savings, leaving taxpayers paying more for inferior service.",
        "order": 4
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Privatizing core state functions (prisons, military logistics, water) does not create competition—it creates government-funded private monopolies! Private prisons lobby for strict sentencing to keep their 90% guaranteed beds full, while military supply contractors in Afghanistan paid protection kickbacks directly to Taliban warlords."
      },
      {
        "type": "SUMMARY_2M",
        "content": "The domestic application of neoliberal doctrine outsourced core sovereign powers to private enterprise. In Kelo v. New London (2005), eminent domain was expanded to seize private homes for corporate developers. In the penal system, private prison corporations profit from human warehousing, utilizing guaranteed occupancy clauses and lobbying against criminal justice reform. In military combat zones, contractorization reached unprecedented levels in Iraq and Afghanistan, where private security operators lacked legal accountability and logistics contractors paid millions in extortion fees to insurgent groups. Ian Shapiro shows that privatizing natural monopolies and coercive state prerogatives replaces public accountability with predatory rent extraction."
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "The Political Economy of Sovereign Privatization:\n1. The Erosion of Weberian Monopoly: Delegating legitimate physical coercion to profit-seeking entities subverts constitutional governance.\n2. The Bed-Guarantee Trap: Guaranteed occupancy quotas in carceral contracts directly penalize crime reduction and decarceration.\n3. Military Extortion Loops: Unregulated logistics contracting creates perverse dynamics where military supply funds enrich insurgent opponents."
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "What controversial legal precedent regarding sovereign eminent domain was established by the US Supreme Court in Kelo v. City of New London (2005)?",
        "options": [
          "The government may seize private, non-blighted homes and transfer them to a private commercial entity if the development promises to increase local tax revenues.",
          "Eminent domain may only be exercised during times of formal wartime mobilization declared by Congress.",
          "Private corporations have the constitutional authority to seize municipal government buildings for unpaid corporate taxes.",
          "State governments are prohibited from taking any private land unless 100% of property owners vote in favor of the sale."
        ],
        "correctAnswer": "The government may seize private, non-blighted homes and transfer them to a private commercial entity if the development promises to increase local tax revenues.",
        "explanation": "In Kelo v. City of New London, the Supreme Court ruled 5-4 that economic development qualified as a 'public use' under the Fifth Amendment, permitting the city to condemn private homes and transfer the real estate to a private developer in the hope of boosting tax revenue.",
        "trapExplanation": "Eminent domain has never been restricted solely to wartime mobilizations (B). Private corporations cannot exercise eminent domain directly against government buildings (C). Eminent domain specifically allows takings without unanimous owner consent, provided just compensation is paid (D).",
        "examinerTrapPattern": "Assuming 'public use' in the US Constitution remained strictly limited to state-owned infrastructure like roads or post offices."
      },
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "Why do guaranteed bed-occupancy clauses in private prison contracts generate perverse public policy incentives?",
        "options": [
          "They penalize the state financially if incarceration rates drop, aligning corporate profits with high imprisonment and disincentivizing criminal justice reform.",
          "They force private prisons to release prisoners early whenever capacity exceeds 80%.",
          "They require prison guards to hold PhD degrees in clinical psychology, inflating public wage budgets.",
          "They mandate that all prison food and uniforms be imported exclusively from international fair-trade cooperatives."
        ],
        "correctAnswer": "They penalize the state financially if incarceration rates drop, aligning corporate profits with high imprisonment and disincentivizing criminal justice reform.",
        "explanation": "Guaranteed bed-occupancy clauses (often requiring 90% to 100% occupancy) force state taxpayers to pay for empty beds if crime falls and fewer people are locked up. This incentivizes prison corporations to lobby aggressively for harsh sentencing laws and against parole reforms to ensure facilities remain filled.",
        "trapExplanation": "Occupancy clauses do not mandate early release; they penalize empty beds (B). Private prisons typically reduce guard wages and qualifications to maximize profits (C). Private prison procurement is aimed at minimizing operational costs, not sourcing fair-trade goods (D).",
        "examinerTrapPattern": "Confusing occupancy guarantees with reform measures intended to relieve prison overcrowding."
      },
      {
        "type": "APPLIED_SCENARIO",
        "difficulty": "HARD",
        "stem": "What major systemic flaw did US Congressional investigations uncover regarding the Host Nation Trucking contract in Afghanistan?",
        "options": [
          "Contracted private trucking firms routinely paid protection money to Taliban warlords to secure convoy passage, effectively funding the insurgency with US tax dollars.",
          "The trucks were seized by the International Criminal Court for violating maritime environmental emissions caps.",
          "The US military replaced all ground logistics with unmanned supersonic cargo rockets, rendering the contracts obsolete.",
          "Private contractors refused to deliver ammunition unless soldiers paid out-of-pocket credit card fees at forward operating bases."
        ],
        "correctAnswer": "Contracted private trucking firms routinely paid protection money to Taliban warlords to secure convoy passage, effectively funding the insurgency with US tax dollars.",
        "explanation": "The 2010 US House Subcommittee investigation 'Warlord, Inc.' revealed that the USD 2.16 billion Host Nation Trucking military contract funneled tens of millions of US taxpayer dollars through private security subcontractors directly into the hands of Taliban commanders and local warlords in exchange for safe road passage.",
        "trapExplanation": "The ICC does not regulate Afghan highway trucking emissions (B). Cargo rockets were never deployed for routine Afghan ground logistics (C). US soldiers did not personally pay credit card fees for combat ammunition (D).",
        "examinerTrapPattern": "Assuming contractor misconduct was limited to simple accounting overcharges rather than operational financing of the opposing combatant."
      }
    ],
    "examMappings": []
  },
  {
    "id": "CON-POL-04",
    "topicOrder": 1,
    "topicSlug": "geopolitics-capitalism-privatization-and-democratic-populism",
    "topicTitle": "Geopolitics, State Capitalism, Distributive Insecurity & The Populist Backlash",
    "topicDescription": "The systemic transformation of the global order from 1989 to the present: post-communist transition, the hollowed-out state, behavioral distributive politics, humanitarian intervention, and the institutional misdiagnoses of democratic malaise.",
    "slug": "tragedy-of-liberal-hegemony-neoconservative-hubris-to-libyan-denouement",
    "title": "The Tragedy of Liberal Hegemony: From Neoconservative Hubris to The Libyan Denouement",
    "shortDefinition": "The trajectory of post-Cold War foreign policy, showing how triumphalist liberal interventionism and the Responsibility to Protect (R2P) transformed into militarized regime change, state collapse in the Middle East and North Africa, and the rise of multipolar counter-models.",
    "difficulty": "INTERMEDIATE",
    "claims": [
      {
        "id": "CLM-POL-04-01",
        "statement": "The post-Cold War 'End of History' euphoria (Francis Fukuyama) bred bipartisan foreign policy hubris in Washington, establishing a consensus that American military supremacy could unilaterally transplant liberal democracy, free markets, and rule of law across the globe.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "SCHOLARLY_CONSENSUS",
        "confidence": "HIGH",
        "locator": "Yale DeVane Lectures, Lecture 3: Advent of a Unipolar World & Lecture 15: Demise of the Neoconservative Dream",
        "excerpt": "Post-1989 unipolarity bred the conviction that liberal democracy was the universal destiny, justifying military intervention to accelerate historical progress."
      },
      {
        "id": "CLM-POL-04-02",
        "statement": "The conceptual evolution of humanitarian intervention—from the 1990s 'Clinton Doctrine' in the Balkans to the UN's 2005 'Responsibility to Protect' (R2P) doctrine—eroded the Treaty of Westphalia's principle of state sovereignty by legitimizing foreign military intervention to halt mass atrocity crimes.",
        "claimType": "STATUTORY_RULE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Yale DeVane Lectures, Lecture 13: The ICC and the Responsibility to Protect",
        "excerpt": "R2P at the 2005 UN Summit conditioned state sovereignty on the obligation to protect civilians, legitimizing international military action against human rights abuses."
      },
      {
        "id": "CLM-POL-04-03",
        "statement": "The 2011 NATO intervention in Libya executed under UN Resolution 1973 quickly exceeded its civilian protection mandate to pursue armed regime change against Muammar Gaddafi, precipitating state collapse, civil war, weapon proliferation across the Sahel, and a massive Mediterranean refugee crisis that destabilized European politics.",
        "claimType": "HISTORICAL_FACT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Yale DeVane Lectures, Lecture 16: Denouement of Humanitarian Intervention",
        "excerpt": "NATO turned a civilian protection no-fly zone into offensive regime change, toppling Gaddafi and leaving a chaotic power vacuum that destabilized North Africa."
      },
      {
        "id": "CLM-POL-04-04",
        "statement": "The failures of Western liberal interventionism created an ideological and geopolitical vacuum that China filled with its 'Beijing Consensus': state-directed capitalism, infrastructure financing (Belt and Road Initiative), and an explicit policy of sovereign non-interference in partner nations' internal governance.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "SCHOLARLY_CONSENSUS",
        "confidence": "HIGH",
        "locator": "Yale DeVane Lectures, Lecture 4 & Lecture 17: Filling the Void - China in Africa",
        "excerpt": "China offered developing nations infrastructure investment without political conditionalities or governance demands, presenting a robust alternative to Western hegemony."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Arrogance of the Global Social Engineer",
        "body": "Imagine a master gardener visiting an ancient, dense jungle in a completely different climate. Convinced that English country gardens are the universal, ultimate pinnacle of botanical perfection, the gardener brings in bulldozers, razes the jungle to the bare soil, and scatters English rose seeds across the mud. When weeds, venomous snakes, and torrential tropical rains destroy the roses and turn the soil into an impassable swamp, the gardener is baffled.\n\nThis captures the tragedy of liberal hegemony after 1989. Flush with victory after the Soviet collapse, American and Western foreign policy elites assumed that all societies were secretly longing to be Western liberal democracies. They believed that by toppling dictators with precision airstrikes, flourishing constitutional democracies would organically take root. Instead, tearing down state structures in societies lacking civil institutions, rule of law, and institutional trust unleashed sectarian slaughter, anarchy, and terrorism.",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "The Trajectory of Intervention: From Kosovo to Tripoli",
        "body": "Ian Shapiro maps the fateful shift in international doctrine over three decades:\n\n1. From Westphalia to R2P:\n   - The 1648 Peace of Westphalia established modern international law based on non-interference: sovereign states have supreme authority within their borders, and outside powers cannot intervene in domestic affairs.\n   - In the 1990s, the failure of the UN to stop the Rwandan genocide and the Srebrenica massacre prompted a legal revolution. Under the Responsibility to Protect (R2P) adopted at the 2005 UN World Summit, sovereignty was redefined as a conditional responsibility: if a state is unwilling or unable to protect its population from genocide, war crimes, or ethnic cleansing, the international community has a duty to intervene.\n\n2. The Slippery Slope to Regime Change:\n   - While R2P was conceived for civilian protection, military reality invariably slides into regime change. You cannot protect civilians from an authoritarian military without destroying the commander-in-chief's command centers and toppling his regime.\n   - The 2003 invasion of Iraq, executed under neoconservative doctrines of preemptive war and democracy promotion, obliterated the Iraqi state, dismantled the army (De-Ba'athification), and sparked a catastrophic sectarian civil war that birthed ISIS.\n\n3. The Libyan Denouement (2011):\n   - When Gaddafi threatened rebels in Benghazi, NATO secured UN Security Council Resolution 1973 with Russian and Chinese abstentions, authorizing a 'no-fly zone' strictly to protect civilians.\n   - NATO immediately turned the mission into an air campaign to overthrow Gaddafi. Once Gaddafi was lynched, NATO packed up and left. Without ground troops or state-building, Libya fractured into warring militia fiefdoms, modern slave markets emerged, and Gaddafi's vast arsenals flooded the Sahel, igniting insurgencies across Mali and Niger.\n\n4. The Geopolitical Backlash:\n   - Russia and China concluded that Western humanitarian intervention was a dishonest Trojan Horse for regime change. Russia subsequently vetoed UN action in Syria, while China promoted its alternative model of unconditional infrastructure finance without political lectures.",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "The Humanitarian Intervention Slippery Slope & Geopolitical Void",
        "body": "The institutional breakdown from humanitarian intervention to state collapse and multipolarity:\n\n```\n+-------------------------------------------------------------------------+\n|        THE ESCALATION PATHWAY OF LIBERAL HUMANITARIAN INTERVENTION      |\n+-------------------------------------------------------------------------+\n\n   Authoritarian Regime suppresses domestic rebellion (e.g. Libya 2011)\n             |\n             v\n   UN passes R2P Resolution for 'Civilian Protection & No-Fly Zone'\n             |\n             v\n   Military Mission Creep: NATO expands airstrikes to command & control centers\n             |\n             v\n   Regime Toppled -> Dictator Lynched -> No Post-War Plan or Ground Security\n             |\n             v\n   [THE CATASTROPHIC VACUUM]\n   * State Collapse & Sectarian Militia Civil War\n   * Arms Arsenals Looted -> Weapons flood Sahel (Mali, Niger, Chad)\n   * Human Smuggling Hubs -> Uncontrolled Migrant Flows across Mediterranean\n             |\n             v\n   [GLOBAL SYSTEMIC AFTERMATH]\n   +---------------------------------------------------------------------+\n   | DOMESTIC BACKLASH IN EUROPE     | RUSSIA & CHINA PIVOT              |\n   | - Refugee crisis fuels populist | - Moscow & Beijing block all UN   |\n   |   anti-immigrant parties        |   interventions (Syria)           |\n   | - Destabilizes EU politics      | - China offers 'Beijing Consensus'|\n   |                                 |   (Loans with ZERO human rights   |\n   |                                 |   conditions)                     |\n   +---------------------------------------------------------------------+\n```",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Universal Mental Model: The Preconditions of Political Order",
        "body": "The failure of liberal hegemony demonstrates Samuel Huntington's fundamental maxim in political science:\n\n1. Order Comes Before Liberty:\n   - As Huntington observed in 'Political Order in Changing Societies', the most important political distinction among countries is not their form of government, but their degree of government. Societies must have functioning order, tax collection, and a monopoly on violence before democratic elections can yield stability.\n   - Removing a tyrant in an environment without state capacity does not produce Jeffersonian democracy; it produces Somalia or Hobbes's state of nature.\n\n2. The Beijing Consensus as a Counter-Model:\n   - Developing nations frequently prefer Chinese infrastructure financing (roads, ports, power stations) over Western IMF/World Bank loans because China does not impose structural adjustment, democratic reforms, or human rights conditionalities. Understanding this dynamic is crucial for analyzing modern African and Latin American diplomacy.",
        "order": 4
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Western triumphalism assumed military intervention could plant democracy abroad. In Libya (2011), NATO turned a UN civilian-protection mandate into regime change, toppling Gaddafi. The resulting vacuum spawned civil war, arms proliferation, and a migrant crisis that fueled European populism while elevating China's condition-free Beijing Consensus."
      },
      {
        "type": "SUMMARY_2M",
        "content": "The post-Cold War era saw the erosion of Westphalian non-intervention through the UN's Responsibility to Protect (R2P) doctrine. However, Western military operations in Iraq, Afghanistan, and Libya revealed the tragic limits of liberal interventionism. In Libya (2011), NATO transformed a civilian protection mandate into armed regime change. Gaddafi's overthrow triggered state disintegration, human trafficking networks, and weapon proliferation across Africa, sparking a European migrant crisis. These debacles alienated Russia and China, who viewed R2P as Western regime-change propaganda. China stepped into the resulting vacuum with the Beijing Consensus, offering infrastructure development through the Belt and Road Initiative with strict respect for state sovereignty and zero governance conditions."
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "The Evolution of Humanitarian Intervention and Counter-Hegemony:\n1. The R2P Paradigm Shift: Redefining sovereignty as conditional upon human rights compliance displaced the 1648 Westphalian non-intervention principle.\n2. Mission Creep & State Collapse: Civilian protection air campaigns inevitably evolve into regime decapitation, creating stateless vacuums where militias proliferate.\n3. The Multipolar Rise: State collapses in the Middle East hardened Sino-Russian opposition to Western multilateralism, fostering alternative state-capitalist development models."
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "How did the 2011 NATO military intervention in Libya alter international perceptions of the United Nations 'Responsibility to Protect' (R2P) doctrine?",
        "options": [
          "It caused major powers like Russia and China to view R2P as a deceitful pretext for Western-led regime change rather than genuine civilian protection.",
          "It proved that R2P guarantees peaceful constitutional elections within 90 days of an intervention.",
          "It led the UN General Assembly to abolish state sovereignty permanently across all African nations.",
          "It resulted in the deployment of a permanent 500,000-troop standing UN peacekeeping force in Tripoli."
        ],
        "correctAnswer": "It caused major powers like Russia and China to view R2P as a deceitful pretext for Western-led regime change rather than genuine civilian protection.",
        "explanation": "NATO utilized UN Resolution 1973 (which authorized limited civilian protection and a no-fly zone) to wage an offensive air campaign that actively toppled Muammar Gaddafi's regime. Russia and China felt betrayed by this mission creep, leading them to veto subsequent UN resolutions regarding the Syrian civil war and effectively paralyzing R2P at the Security Council.",
        "trapExplanation": "Libya collapsed into civil war rather than establishing peaceful constitutional elections (B). State sovereignty was not abolished; the principle of sovereignty was vigorously reaffirmed by non-Western states (C). The UN never deployed a large-scale standing army in Libya (D).",
        "examinerTrapPattern": "Assuming the Libyan intervention was viewed internationally as a flawless model of multilateral humanitarianism."
      },
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "What core competitive advantage does China's 'Beijing Consensus' offer to developing countries compared to traditional Western development finance?",
        "options": [
          "China focuses on tangible infrastructure (roads, railways, ports) and strictly adheres to a policy of non-interference in domestic governance and human rights.",
          "China provides unconditional grants with zero interest and zero expectation of repayment under any circumstances.",
          "China mandates that all recipient nations adopt Western-style multi-party parliamentary systems.",
          "China requires all recipient nations to surrender their foreign policy decisions to the African Union."
        ],
        "correctAnswer": "China focuses on tangible infrastructure (roads, railways, ports) and strictly adheres to a policy of non-interference in domestic governance and human rights.",
        "explanation": "Unlike the Washington Consensus, which attached strict political, environmental, and structural reform conditions (privatization, democratic governance, austerity) to loans, China's model provides direct infrastructure financing while respecting sovereign non-interference in recipient nations' internal politics.",
        "trapExplanation": "Chinese financing consists primarily of commercial and policy bank loans, not unconditional non-repayable grants (B). China does not mandate multi-party parliamentary democracy (C). China deals bilaterally with national governments and does not require outsourcing foreign policy to the African Union (D).",
        "examinerTrapPattern": "Confusing China's non-interference approach with either Western conditional lending or completely philanthropic non-repayable grants."
      },
      {
        "type": "APPLIED_SCENARIO",
        "difficulty": "HARD",
        "stem": "According to political scientist Samuel Huntington's framework referenced by Ian Shapiro, what fundamental error did Western interventionists commit in the Middle East?",
        "options": [
          "They prioritized holding rapid democratic elections over first establishing basic state capacity, public order, and an effective monopoly on legitimate violence.",
          "They failed to print enough paper currency to stimulate consumer spending in Baghdad and Tripoli.",
          "They strictly prohibited any Western corporations from building oil pipelines in liberated regions.",
          "They refused to use precision-guided air power during the opening phase of operations."
        ],
        "correctAnswer": "They prioritized holding rapid democratic elections over first establishing basic state capacity, public order, and an effective monopoly on legitimate violence.",
        "explanation": "As Huntington argued in 'Political Order in Changing Societies', political order must precede political participation. Western interventionists destroyed existing state structures (de-Baathification, disbanding armies) and rushed into elections in divided societies lacking administrative capacity or institutional trust, inevitably unleashing sectarian violence.",
        "trapExplanation": "The failure was institutional and political, not a shortage of paper currency (B). Western corporate investment was pursued, but collapsed due to widespread insurgency and violence (C). Precision air power was used extensively, but airstrikes cannot build domestic governance institutions (D).",
        "examinerTrapPattern": "Believing that early elections are universally sufficient to produce stable democratic governance in post-conflict states."
      }
    ],
    "examMappings": []
  },
  {
    "id": "CON-POL-05",
    "topicOrder": 1,
    "topicSlug": "geopolitics-capitalism-privatization-and-democratic-populism",
    "topicTitle": "Geopolitics, State Capitalism, Distributive Insecurity & The Populist Backlash",
    "topicDescription": "The systemic transformation of the global order from 1989 to the present: post-communist transition, the hollowed-out state, behavioral distributive politics, humanitarian intervention, and the institutional misdiagnoses of democratic malaise.",
    "slug": "roots-of-populist-backlash-and-crisis-of-democratic-institutions",
    "title": "The Roots of Populist Backlash & The Crisis of Democratic Institutions",
    "shortDefinition": "The structural analysis of the 2016 populist explosion and contemporary democratic dysfunction, examining how well-intentioned political reforms (primaries, referendums, decentralization) weakened political parties, empowered radical factions, and undermined majoritarian democracy.",
    "difficulty": "INTERMEDIATE",
    "claims": [
      {
        "id": "CLM-POL-05-01",
        "statement": "The political watershed of 2016—exemplified by the Brexit referendum in the United Kingdom and Donald Trump's election in the United States—was not an inexplicable cultural aberration, but the direct culmination of three decades of wage stagnation, regional economic divergence, and the unaddressed fallout of the 2008 subprime foreclosure crisis.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "SCHOLARLY_CONSENSUS",
        "confidence": "HIGH",
        "locator": "Yale DeVane Lectures, Lecture 21: Backlash - 2016 and Beyond",
        "excerpt": "The 2016 political earthquakes were the delayed reaction to decades of wage stagnation, regional hollowing out, and the unredressed wounds of the 2008 mortgage crisis."
      },
      {
        "id": "CLM-POL-05-02",
        "statement": "Ian Shapiro's institutional diagnosis shows that well-intentioned democratic reforms aimed at 'democratizing' political parties—specifically open primary elections and direct citizen referendums—have perversely intensified polarization by granting disproportionate veto power to hyper-ideological activist fringes and wealthy donor networks.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "SCHOLARLY_CONSENSUS",
        "confidence": "HIGH",
        "locator": "Yale DeVane Lectures, Lecture 22: Political Sources of Populism; Shapiro & Rosenbluth, 'Responsible Parties'",
        "excerpt": "Primary elections empower the 10-15% of ideologically extreme activists who turn out, forcing candidates away from the median voter and polarizing legislatures."
      },
      {
        "id": "CLM-POL-05-03",
        "statement": "Direct democracy mechanisms, such as referendums and ballot initiatives, lack the deliberation, compromise, and logrolling essential to democratic stability, reducing complex, multi-dimensional policy trade-offs into binary, zero-sum populist choices (such as the 2016 Brexit vote).",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "SCHOLARLY_CONSENSUS",
        "confidence": "HIGH",
        "locator": "Yale DeVane Lectures, Lecture 7 & 22; Shapiro & Rosenbluth, 'Responsible Parties'",
        "excerpt": "Referendums bypass legislative package deals and deliberation, reducing intricate constitutional choices into destructive binary gambles."
      },
      {
        "id": "CLM-POL-05-04",
        "statement": "The preservation of liberal democracy depends on strong, disciplined, majoritarian political parties that compete for the moderate median voter, aggregate diverse interests into coherent governing platforms, and hold elected leaders accountable to broad national majorities rather than factional primaries.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "SCHOLARLY_CONSENSUS",
        "confidence": "HIGH",
        "locator": "Yale DeVane Lectures, Lecture 22 & 23; Shapiro & Rosenbluth, 'Responsible Parties'",
        "excerpt": "Strong, centralized parties competing under majoritarian rules aggregate diverse interests and protect the median voter from factional capture."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Paradox of More Democracy",
        "body": "When an airplane experiences severe turbulence, nobody suggests opening the cockpit door and having all 300 passengers take a majority hand-vote on which rudder angle to set. We recognize that complex navigation requires trained pilots operating with institutional flight checklists, held strictly accountable for landing the plane safely.\n\nYet for the past fifty years, whenever democratic governments have disappointed citizens, political reformers have offered only one prescription: 'The cure for the ills of democracy is more democracy!' They introduced primary elections to bypass party leaders, ballot referendums to bypass legislatures, and transparency sunshine laws to broadcast every committee debate.\n\nProfessor Ian Shapiro and Frances Rosenbluth reveal the tragic paradox: these 'democratic' reforms actually broke democracy. By weakening political parties, primaries handed power to tiny fractions of extreme ideological activists, while referendums reduced complex national choices into reckless 51-49 coin flips. To fix democracy, we do not need more chaotic participation by ideological fringes; we need disciplined, accountable political institutions that protect the median citizen.",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "Misdiagnosing Democracy's Ills: Primaries, Referendums & Polarization",
        "body": "The prevailing narrative among political commentators is that populism is purely a disease of social media algorithms, fake news, or racist xenophobia. Ian Shapiro provides a structural, institutional counter-analysis:\n\n1. The 2016 Political Watershed:\n   - The dual shocks of 2016—Brexit and Trump—were driven by voters in de-industrialized, left-behind heartlands (the American Rust Belt, former mining and manufacturing towns in Northern England).\n   - These voters experienced decades of wage stagnation while watching urban metropolitan hubs thrive. In 2008, governments bailed out the financial institutions that caused the crisis while leaving millions of homeowners to face foreclosure. The resulting anger dismantled establishment political loyalties.\n\n2. The Primary Election Trap:\n   - In the US, legislative candidates were once selected by party leadership committees ('smoke-filled rooms'). While undemocratic in appearance, party bosses had a single overwhelming goal: picking moderate candidates who could win the general election by appealing to the median voter.\n   - Modern primaries have pitifully low turnout (often 10-15%). The only people who show up are passionate ideological activists, single-issue zealots, and wealthy donors.\n   - Incumbents no longer fear losing the general election to the opposing party; they live in perpetual terror of being 'primaried' from their own extreme flank. Compromise becomes politically suicidal, paralyzing the legislature.\n\n3. The Perils of Referendum Politics (The Brexit Lesson):\n   - British Prime Minister David Cameron called the 2016 Brexit referendum not because of overwhelming public demand, but as an internal party management maneuver to silence Euroskeptic backbenchers in his Conservative party.\n   - Referendums are inherently dangerous democratic instruments. They freeze complex questions into a binary 'Yes/No' without specifying what the alternative looks like, preventing the negotiation, logrolling, and package-deals that parliaments use to accommodate minority rights and craft workable policy.\n\n4. The Case for Responsible Parties:\n   - In their seminal work 'Responsible Parties: Saving Democracy from Itself', Shapiro and Rosenbluth argue that robust, disciplined two-party competition is the single best mechanism for majoritarian governance. Parties must have the strength to screen out demagogues, enforce party discipline, and govern on broad national platforms.",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "The Primary Trap vs. Median Voter Equilibrium",
        "body": "How primary elections disrupt the Median Voter Theorem and induce toxic polarization:\n\n```\n+-------------------------------------------------------------------------+\n|              THE PRIMARY TRAP AND LEGISLATIVE POLARIZATION              |\n+-------------------------------------------------------------------------+\n\n [PANEL A: RESPONSIBLE TWO-PARTY COMPETITION (MEDIAN VOTER THEOREM)]\n\n  Far Left                      Median Voter                     Far Right\n  ◄──────────────────────────────────▲──────────────────────────────────►\n                           [Party A] │ [Party B]\n                   Both parties converge toward the median\n                   to capture 50% + 1 of the general electorate.\n\n===========================================================================\n [PANEL B: THE PRIMARY SYSTEM (POLARIZING BIFURCATION)]\n\n  Primary Turnout: ~12% (Activists)           Primary Turnout: ~12% (Activists)\n  Far Left                      Median Voter                     Far Right\n     ▲                               │                               ▲\n     │ [Party A Primary Candidate]   │   [Party B Primary Candidate] │\n     |                               │                               |\n\n  Result: Candidates must appeal to ideological extremes to survive primaries!\n  Once elected:\n  * Any compromise with the opposing party = Immediate primary challenge!\n  * Compromise is punished -> Governance paralyzed -> Populist rage grows!\n```",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Universal Mental Model: Institutional Design & Responsible Partisanship",
        "body": "The analysis of populist backlash provides vital principles for political reform and constitutional architecture:\n\n1. Beware Direct Democracy for Complex Policy:\n   - Major constitutional and trade decisions should never be decided by simple 50% + 1 plebiscites. Multi-option polling, legislative deliberation, and supermajority requirements are essential safeguards against majoritarian tyranny and buyer's remorse.\n\n2. Rebuilding Strong Political Parties:\n   - Political parties are not corrupt intermediaries to be eliminated; they are the essential backbone of representative government. Reforming campaign finance to channel funds through official party organizations rather than unaccountable Super PACs and dark-money groups re-empowers party leadership to enforce moderation and discipline.\n\n3. Distributive Policies That Build Coalitions:\n   - Sustainable social reforms must benefit the broad middle class, not merely targeted demographic niches. Programs like Social Security and universal public schooling endure because the median voter has an active personal stake in their defense.",
        "order": 4
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "The cure for democracy's ills is NOT more direct democracy! Primaries empower the 12% of hyper-ideological activists, terrifying politicians away from compromise. Referendums like Brexit collapse complex trade-offs into reckless binary votes. True democracy needs strong, disciplined political parties that fight for the moderate median voter."
      },
      {
        "type": "SUMMARY_2M",
        "content": "The 2016 populist backlash (Brexit, Donald Trump) reflected deep-seated anger over decades of wage stagnation, regional decline, and the 2008 financial crash. However, Ian Shapiro demonstrates that the crisis was exacerbated by well-meaning institutional reforms designed to democratize politics. Primary elections in the US shifted power from broad-based party coalitions to radical activist fringes and wealthy special interests, making legislative compromise impossible. Similarly, direct democracy instruments like referendums bypass the vital parliamentary processes of deliberation, debate, and coalition-building. To restore democratic vitality, societies must rebuild responsible, centralized political parties that compete for the median voter and govern in the broad national interest."
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "The Institutional Roots of Populism and Party Governance:\n1. The Primary Polarization Trap: Low-turnout primary elections select candidates from ideological margins, dismantling median voter convergence.\n2. Binary Referendum Flaws: Plebiscites bypass legislative logrolling and compromise, reducing multi-dimensional issues to zero-sum fractures.\n3. The Necessity of Responsible Parties: Disciplined, centralized party competition remains the singular mechanism to resist demagoguery and govern for majority welfare."
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "According to Ian Shapiro and Frances Rosenbluth in 'Responsible Parties', why do primary elections increase political polarization in legislative bodies?",
        "options": [
          "Because primary elections typically have low turnout dominated by ideologically extreme activists, forcing candidates to adopt radical positions to avoid being defeated from their flanks.",
          "Because primary elections automatically grant 50% of parliamentary seats to third-party socialist candidates.",
          "Because primaries require all candidates to sign legally binding pledges promising never to raise corporate taxes.",
          "Because primary voters are selected randomly by lottery from the national census rolls."
        ],
        "correctAnswer": "Because primary elections typically have low turnout dominated by ideologically extreme activists, forcing candidates to adopt radical positions to avoid being defeated from their flanks.",
        "explanation": "Primary elections attract small, highly ideologically motivated subsets of voters (typically 10-15% of registered party members). Candidates must cater to these energized extremes to win the nomination, and once in office, they refuse to compromise with the opposing party for fear of losing their next primary challenge.",
        "trapExplanation": "Primaries reinforce two-party duopolies and do not automatically grant seats to third-party candidates (B). Primaries do not legally mandate anti-tax pledges, though activist groups may lobby for them (C). Primaries rely on voluntary voter turnout, not random lottery selection (sortition) (D).",
        "examinerTrapPattern": "Assuming primary elections encourage moderate consensus voting across the broader electorate."
      },
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "What major institutional defect of direct referendums did the 2016 Brexit vote highlight?",
        "options": [
          "Referendums collapse complex, multifaceted policy choices into a binary Yes/No vote without requiring the winning side to specify a workable implementation plan or compromise with minorities.",
          "Referendums can only be held on leap years according to the British unwritten constitution.",
          "The British monarch has the unilateral authority to cast 10 million absentee ballots in any national referendum.",
          "Referendums require all citizens to cast their votes publicly via raised hands in local town halls."
        ],
        "correctAnswer": "Referendums collapse complex, multifaceted policy choices into a binary Yes/No vote without requiring the winning side to specify a workable implementation plan or compromise with minorities.",
        "explanation": "Referendums bypass the normal legislative processes of deliberation, amendments, and compromise. In the Brexit referendum, voters were offered a simple binary choice ('Leave' vs. 'Remain') without specifying whether 'Leave' meant a soft Norway-style market agreement or a hard WTO border, triggering years of constitutional deadlock.",
        "trapExplanation": "There is no constitutional rule restricting referendums to leap years (B). The British monarch remains strictly politically neutral and casts no votes (C). UK referendums utilize standard secret paper ballots, not public show-of-hands votes (D).",
        "examinerTrapPattern": "Viewing referendums as the purest, most sophisticated expression of democratic consensus rather than an oversimplified majoritarian gamble."
      },
      {
        "type": "APPLIED_SCENARIO",
        "difficulty": "HARD",
        "stem": "What type of political party system does Ian Shapiro argue is most effective at protecting the interests of the median citizen and maintaining democratic stability?",
        "options": [
          "Strong, centralized, and disciplined political parties competing directly for the moderate median voter in majoritarian elections.",
          "A fragmented system of twenty niche parties dependent on unstable backroom coalition deals.",
          "A non-partisan technocracy governed exclusively by unelected central bank economists.",
          "A single-party state where all candidate nominations are controlled by military officers."
        ],
        "correctAnswer": "Strong, centralized, and disciplined political parties competing directly for the moderate median voter in majoritarian elections.",
        "explanation": "In 'Responsible Parties', Shapiro and Rosenbluth defend strong, disciplined parties in majoritarian systems. When parties are strong and centralized, they are driven by the incentive to win national majorities by appealing to the median voter, aggregating diverse societal interests, and providing clear electoral accountability.",
        "trapExplanation": "Shapiro argues that fragmented multiparty systems often empower tiny extremist kingmaker parties in post-election horse-trading (B). Shapiro defends democratic electoral accountability, not unelected technocracy (C). Single-party military rule eliminates competitive democracy entirely (D).",
        "examinerTrapPattern": "Assuming democratic theorists always favor multi-party fragmentation or direct participatory democracy over disciplined two-party competition."
      }
    ],
    "examMappings": []
  }
];

export async function seedModuleU6PowerPolitics(): Promise<void> {
  console.log('[Module U6] Seeding Universal Knowledge: Power, Politics & The Post-Cold War Global Order...');

  // 1. Ensure Domain Exists
  const domain = await db.domain.upsert({
    where: { slug: 'world-understanding-and-universal-knowledge' },
    update: {
      name: 'World Understanding & Universal Knowledge',
      description: 'First-principles understanding of how the universe, technology, nature, and the human mind actually work—free from examination constraints.',
    },
    create: {
      slug: 'world-understanding-and-universal-knowledge',
      name: 'World Understanding & Universal Knowledge',
      description: 'First-principles understanding of how the universe, technology, nature, and the human mind actually work—free from examination constraints.',
      order: 100,
    },
  });

  // 2. Ensure Subject Exists
  let subject = await db.subject.findFirst({ where: { slug: 'power-politics-and-post-cold-war-order' } });
  if (!subject) {
    subject = await db.subject.create({
      data: {
        slug: 'power-politics-and-post-cold-war-order',
        name: 'Power, Politics & The Post-Cold War World: Geopolitics, Distributive Insecurity & The Crisis of Democracy',
        description: 'First-principles analysis of post-Cold War political dynamics, comparative democratic institutions, the Washington Consensus, privatization of state functions, loss aversion in distributive politics, and the systemic roots of 21st-century populism.',
        scopeStatement: 'Comprehensive universal curriculum derived from Yale University DeVane Lectures (PLSC 118) by Professor Ian Shapiro covering shock therapy, the Third Way, carceral and military privatization, R2P interventionism, and party institutional design.',
        domainId: domain.id,
        order: 6,
      },
    });
  }

  // 3. Ensure Source Exists
  const sourcePolitics = await db.source.upsert({
    where: { id: 'SRC-YALE-POWER-AND-POLITICS' },
    update: {},
    create: {
      id: 'SRC-YALE-POWER-AND-POLITICS',
      title: 'Power and Politics in Today\'s World (Yale University, Prof. Ian Shapiro)',
      sourceType: 'ACADEMIC_CANONICAL_SYNTHESIS',
      authorityTier: 'PEER_REVIEWED_ACADEMIC_REFERENCE',
      description: 'Authoritative DeVane Lecture series (PLSC 118) delivered by Sterling Professor of Political Science Ian Shapiro at Yale University.',
    },
  });

  // 4. Ensure Topic Exists
  let topic = await db.topic.findFirst({ where: { slug: 'geopolitics-capitalism-privatization-and-democratic-populism' } });
  if (!topic) {
    topic = await db.topic.create({
      data: {
        slug: 'geopolitics-capitalism-privatization-and-democratic-populism',
        title: 'Geopolitics, State Capitalism, Distributive Insecurity & The Populist Backlash',
        description: 'The systemic transformation of the global order from 1989 to the present: post-communist transition, the hollowed-out state, behavioral distributive politics, humanitarian intervention, and the institutional misdiagnoses of democratic malaise.',
        subjectId: subject.id,
        order: 1,
      },
    });
  } else {
    topic = await db.topic.update({
      where: { id: topic.id },
      data: {
        title: 'Geopolitics, State Capitalism, Distributive Insecurity & The Populist Backlash',
        description: 'The systemic transformation of the global order from 1989 to the present: post-communist transition, the hollowed-out state, behavioral distributive politics, humanitarian intervention, and the institutional misdiagnoses of democratic malaise.',
        order: 1,
      },
    });
  }

  for (let i = 0; i < MODULE_U6_CONCEPTS.length; i++) {
    const cDef = MODULE_U6_CONCEPTS[i];
    let concept = await db.concept.findUnique({ where: { id: cDef.id } });

    if (concept) {
      await db.claim.deleteMany({ where: { conceptId: concept.id } });
      await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
      await db.examConceptMapping.deleteMany({ where: { conceptId: concept.id } });
      await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
      await db.question.deleteMany({ where: { conceptId: concept.id } });

      concept = await db.concept.update({
        where: { id: cDef.id },
        data: {
          title: cDef.title,
          slug: cDef.slug,
          shortDefinition: cDef.shortDefinition,
          difficulty: cDef.difficulty,
          topicId: topic.id,
          order: i + 1,
        },
      });
    } else {
      concept = await db.concept.create({
        data: {
          id: cDef.id,
          title: cDef.title,
          slug: cDef.slug,
          shortDefinition: cDef.shortDefinition,
          difficulty: cDef.difficulty,
          topicId: topic.id,
          order: i + 1,
        },
      });
    }

    for (const cl of cDef.claims) {
      const claim = await db.claim.create({
        data: {
          id: cl.id,
          conceptId: concept.id,
          statement: cl.statement,
          claimType: cl.claimType,
          epistemicLevel: cl.epistemicLevel,
          confidence: cl.confidence,
          status: 'VERIFIED',
        },
      });

      await db.evidence.create({
        data: {
          claimId: claim.id,
          sourceId: sourcePolitics.id,
          locator: cl.locator,
          excerpt: cl.excerpt,
          evidenceType: 'PEER_REVIEWED_JOURNAL',
          authority: 'DIRECT_LECTURE_AUTHORITY',
          evidentiarySupport: 'DIRECT_SUPPORT',
          extractionConfidence: 'HIGH',
        },
      });
    }

    for (let bIdx = 0; bIdx < cDef.contentBlocks.length; bIdx++) {
      const cb = cDef.contentBlocks[bIdx];
      await db.contentBlock.create({
        data: {
          conceptId: concept.id,
          type: cb.type,
          title: cb.title,
          body: cb.body,
          order: cb.order || bIdx + 1,
          visibility: 'CANONICAL_FULL',
        },
      });
    }

    for (let rIdx = 0; rIdx < cDef.revisionUnits.length; rIdx++) {
      const ru = cDef.revisionUnits[rIdx];
      await db.revisionUnit.create({
        data: {
          conceptId: concept.id,
          type: ru.type,
          content: ru.content,
          order: rIdx + 1,
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
          isPYQ: false,
          examinerTrapPattern: q.examinerTrapPattern,
        },
      });
    }
  }

  console.log('[Module U6] Successfully seeded ' + MODULE_U6_CONCEPTS.length + ' Universal Knowledge Power, Politics & Global Order Canonical Concepts.');
}
