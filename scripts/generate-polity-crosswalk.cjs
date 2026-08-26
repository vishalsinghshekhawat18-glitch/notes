const fs = require('fs');
const path = require('path');

const legacy = JSON.parse(fs.readFileSync(path.join(__dirname, 'legacy-polity-inventory.json'), 'utf8'));

// Canonical Mapping Table
const CANONICAL_MAPPINGS = {
  1: { status: 'FULLY_COVERED', canonicalTopics: ['Topic 9 (FR)'], canonicalConcepts: ['CON-T9-16 (Amendability & Basic Structure)'], notes: 'Art 368, Shankari Prasad, Golaknath, 24th CAA, Kesavananda Bharati, Minerva Mills, Basic Structure doctrines are comprehensively represented in CON-T9-16.' },
  2: { status: 'FULLY_COVERED', canonicalTopics: ['Topic 1 (Basic Concepts)'], canonicalConcepts: ['CON-T1-01', 'CON-T1-02', 'CON-T1-03', 'CON-T1-04'], notes: 'State vs Nation vs Country, Saptanga Theory, Theories of Origin of State, Systems of Governance, and Constitutionalism are fully represented.' },
  3: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'CIC & RTI Act 2005 / RTI Amendment 2019 are statutory bodies in later governance chapters not yet in canonical Topics 1-10.' },
  4: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'CVC (K. Santhanam Committee 1964, CVC Act 2003, Vineet Narain 1997) is an anti-corruption statutory body not yet in Topics 1-10.' },
  5: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'Centre-State Administrative Relations (Arts 256-263, Sarkaria/Punchhi commissions) are not yet in Topics 1-10.' },
  6: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'Centre-State Financial Relations & Finance Commission (Arts 264-293, GST Council Art 279A) are not yet in Topics 1-10.' },
  7: { status: 'PARTIALLY_COVERED', canonicalTopics: ['Topic 4 (Schedules)'], canonicalConcepts: ['CON-T4-04 (7th Schedule Lists)'], notes: '7th Schedule Lists are covered in CON-T4-04; broader legislative relations (territorial nexus, repugnancy Art 254, Parliamentary legislation in State field Arts 249-253) are not covered.' },
  8: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'Chief Minister & State Council of Ministers (Arts 163-167, 91st CAA ceiling) are State Executive chapters not yet in Topics 1-10.' },
  9: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'Citizen Charter, Sevottam Model, Rajasthan Public Service Delivery Act 2011, Rajasthan Guaranteed Service Delivery are governance topics.' },
  10: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'Coalition politics, Pressure Groups, and Interest Lobbies are political dynamics chapters.' },
  11: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'CAG of India (Arts 148-151, PAC relation, duties under 1971 Act) is a constitutional body not yet in Topics 1-10.' },
  12: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'Voting behavior, caste/religion in politics, social media mobilization are political sociology topics.' },
  13: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'ECI (Art 324, Anoop Baranwal 2023, 2023 ECI Act, Model Code of Conduct, RPA 1950/1951) is a constitutional body not yet in Topics 1-10.' },
  14: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'Emergency Provisions (Arts 352, 356, 360, 44th CAA safeguards, S.R. Bommai 1994) are not yet in Topics 1-10.' },
  15: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'Federalism theory, Asymmetric Federalism (Arts 371-371J), Inter-State River Water Disputes Act 1956 (Art 262) are broader federal topics.' },
  16: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'High Courts & Subordinate Judiciary (Arts 214-237, writ jurisdiction Art 226 vs 32, judicial appointments) are judiciary chapters.' },
  17: { status: 'FULLY_COVERED', canonicalTopics: ['Topic 2 (Constituent Assembly)'], canonicalConcepts: ['CON-T2-01 (Historical Evolution 1773-1947)'], notes: 'Historical Underpinnings (Regulating Act 1773 to GOI Act 1935) are covered in CON-T2-01 and CON-T2-05.' },
  18: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'National Integration, AFSPA 1958, UAPA 1967, Northeast insurgency frameworks are security/governance topics.' },
  19: { status: 'PARTIALLY_COVERED', canonicalTopics: ['Topic 9 (FR)'], canonicalConcepts: ['CON-T9-15 (Article 32 & Writs)'], notes: 'Locus standi relaxation and epistolary jurisdiction (SP Gupta, MC Mehta) are mentioned in CON-T9-15, but full PIL institutional doctrine is not a standalone concept.' },
  20: { status: 'FULLY_COVERED', canonicalTopics: ['Topic 9 (FR)'], canonicalConcepts: ['CON-T9-03 (Article 13 & Doctrines)'], notes: 'Article 13, Severability, Eclipse, Waiver, Ultra Vires, Judicial Review doctrines are fully covered in CON-T9-03.' },
  21: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'Attorney General (Art 76) & Advocate General (Art 165) are constitutional law officers not yet in Topics 1-10.' },
  22: { status: 'PARTIALLY_COVERED', canonicalTopics: ['Topic 4 (Schedules)'], canonicalConcepts: ['CON-T4-08 (11th Schedule Panchayats)'], notes: '11th Schedule 29 subjects are covered in CON-T4-08, but 73rd Amendment institutional structure (3-tier, mandatory vs voluntary provisions, SEC, SFC, PESA Act 1996) is not yet a dedicated topic.' },
  23: { status: 'PARTIALLY_COVERED', canonicalTopics: ['Topic 4 (Schedules)'], canonicalConcepts: ['CON-T4-08 (12th Schedule Municipalities)'], notes: '12th Schedule 18 subjects are covered in CON-T4-08, but 74th Amendment institutional structure (types of urban bodies, Wards Committees, DPC/MPC) is not yet a dedicated topic.' },
  24: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'Lokpal & Lokayuktas Act 2013, NCW, NCPCR, NCM are statutory oversight bodies.' },
  25: { status: 'FULLY_COVERED', canonicalTopics: ['Topic 2 (Constituent Assembly)'], canonicalConcepts: ['CON-T2-01', 'CON-T2-02', 'CON-T2-03', 'CON-T2-04', 'CON-T2-05', 'CON-T2-06'], notes: 'Complete constituent assembly history, elections, committees, sessions, sources matrix, and Rajasthan representatives are covered in CON-T2-01 to CON-T2-06.' },
  26: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'NHRC (Protection of Human Rights Act 1993, 2019 Amendment) & SHRCs are statutory human rights bodies.' },
  27: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'NITI Aayog (Jan 1 2015 resolution, Governing Council, Team India vs Knowledge Hub) is an executive think tank.' },
  28: { status: 'PARTIALLY_COVERED', canonicalTopics: ['Topic 4 (Schedules)'], canonicalConcepts: ['CON-T4-05 (8th Schedule Languages)'], notes: '8th Schedule languages are covered in CON-T4-05; Part XVII official language provisions (Arts 343-351, Official Languages Act 1963) are not covered.' },
  29: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'Legislative Procedure, Money Bills (Art 110), Financial Bills (Art 117), Joint Sittings (Art 108) are Union Legislature chapters.' },
  30: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'Budgetary Procedure (Arts 112-116), Parliamentary Motions (Adjournment, No-Confidence), Parliamentary Committees (PAC, Estimates, COPU) are Union Legislature chapters.' },
  31: { status: 'FULLY_COVERED', canonicalTopics: ['Topic 5 (Union & Territory)'], canonicalConcepts: ['CON-T5-01', 'CON-T5-02', 'CON-T5-03', 'CON-T5-04'], notes: 'Articles 1-4, Berubari doctrine, Union Territories, 100th Amendment enclaves are fully covered.' },
  32: { status: 'FULLY_COVERED', canonicalTopics: ['Topic 8 (Citizenship)'], canonicalConcepts: ['CON-T8-01', 'CON-T8-02', 'CON-T8-03', 'CON-T8-04', 'CON-T8-05', 'CON-T8-06'], notes: 'Articles 5-11, 5 modes of acquisition, 3 modes of loss, Single citizenship, OCI scheme, CAA 2019, renunciation trends are fully covered.' },
  33: { status: 'FULLY_COVERED', canonicalTopics: ['Topic 9 (FR)'], canonicalConcepts: ['CON-T9-01', 'CON-T9-02', 'CON-T9-04', 'CON-T9-05', 'CON-T9-06'], notes: 'FR Overview, Art 12 State definition, Art 14 Equality, Arts 15-16 Reservations, Arts 17-18 Untouchability/Titles are fully covered.' },
  34: { status: 'FULLY_COVERED', canonicalTopics: ['Topic 9 (FR)'], canonicalConcepts: ['CON-T9-11', 'CON-T9-12', 'CON-T9-13', 'CON-T9-15'], notes: 'Arts 23-24 (Exploitation), Arts 25-28 (Religion), Arts 29-30 (Minority rights), Art 32 (5 Writs) are fully covered.' },
  35: { status: 'FULLY_COVERED', canonicalTopics: ['Topic 9 (FR)'], canonicalConcepts: ['CON-T9-07', 'CON-T9-08', 'CON-T9-09', 'CON-T9-10', 'CON-T9-14'], notes: 'Art 19 (6 Freedoms), Art 20 (Conviction), Art 21/21A (Life, Privacy, Education), Art 22 (Preventive Detention), Art 31/300A (Property) are fully covered.' },
  36: { status: 'FULLY_COVERED', canonicalTopics: ['Topic 10 (DPSP)'], canonicalConcepts: ['CON-T10-01', 'CON-T10-02', 'CON-T10-03', 'CON-T10-04', 'CON-T10-05'], notes: 'Articles 36-51, Socialistic/Gandhian/Liberal classification, Art 44 UCC, FR-DPSP conflict jurisprudence, Directives outside Part IV are fully covered.' },
  37: { status: 'FULLY_COVERED', canonicalTopics: ['Topic 10 (DPSP)'], canonicalConcepts: ['CON-T10-01', 'CON-T10-02'], notes: 'Fundamental Duties (Part IV-A / Art 51-A, Swaran Singh / Verma committees, 86th CAA) are covered in Topic 10.' },
  38: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'Rajasthan political demography, Vidhan Sabha seats (200), SC/ST reservation, regional electoral trends are Rajasthan-specific state polity topics.' },
  39: { status: 'LOW_VALUE_REFERENCE', canonicalTopics: [], canonicalConcepts: [], notes: 'Generic forward-looking governance essays (AI in governance, cyber security, climate federalism) are subjective analytical commentary.' },
  40: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'Prime Minister, Central Council of Ministers (Arts 74, 75, 78), Cabinet Committees, Kitchen Cabinet are Union Executive chapters.' },
  41: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'Public Service Commissions: UPSC (Arts 315-323), RPSC (Rajasthan PSC history, composition, functions) are constitutional bodies.' },
  42: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'All-India Services (Art 312), Constitutional Safeguards for Civil Servants (Art 311 - Pleasure doctrine & exceptions) are services chapters.' },
  43: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'RAS Polity: Governor of Rajasthan, Chief Minister of Rajasthan, Rajasthan Legislative Assembly history & procedural rules.' },
  44: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'RAS Polity: Rajasthan High Court (Jodhpur seat + Jaipur bench), RPSC (Ajmer), Rajasthan SHRC, Rajasthan Lokayukta (1973 Act).' },
  45: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'RAS Mains Paper III Unit 1: Comparative Constitutional Systems (UK, USA, Canada, Germany, Switzerland constitutional features).' },
  46: { status: 'FULLY_COVERED', canonicalTopics: ['Topic 7 (Reorganisation of States)'], canonicalConcepts: ['CON-T7-01', 'CON-T7-02', 'CON-T7-03', 'CON-T7-04'], notes: 'Dhar commission, JVP committee, Fazal Ali SRC 1953-55, 1956 Act, 1956-2020 evolution to 28 states & 8 UTs, Zonal Councils are fully covered.' },
  47: { status: 'FULLY_COVERED', canonicalTopics: ['Topic 1 (Basic Concepts)'], canonicalConcepts: ['CON-T1-01', 'CON-T1-03', 'CON-T1-04'], notes: 'Salient features, Parliamentary vs Presidential, Written Constitution, Rigidity vs Flexibility are covered in Topic 1.' },
  48: { status: 'FULLY_COVERED', canonicalTopics: ['Topic 4 (Schedules)'], canonicalConcepts: ['CON-T4-01', 'CON-T4-02', 'CON-T4-03', 'CON-T4-04', 'CON-T4-05', 'CON-T4-06', 'CON-T4-07', 'CON-T4-08'], notes: 'Complete 1st to 12th Schedule analysis, 5th/6th Schedule logic, 7th Schedule division, 8th classical languages, 9th IR Coelho, 10th Kihoto Holohan are fully covered.' },
  49: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'Part XVI Special Provisions (Arts 330-342A), National Commissions for SC (338), ST (338A), BC (338B - 102nd CAA), Anglo-Indian sunset (104th CAA).' },
  50: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'State Executive: Governor of India (Arts 153-162, discretionary powers Art 163, ordinance power Art 213, pardoning power Art 161, Sarkaria recommendations).' },
  51: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'State Legislature: Legislative Assembly (Vidhan Sabha) and Legislative Council (Vidhan Parishad - Art 169 creation/abolition procedure).' },
  52: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'Supreme Court of India (Arts 124-147, appointment collegium Third Judges Case 1998, NJAC 99th CAA striking down 2015, Original Art 131, Appellate, Advisory Art 143, Curative).' },
  53: { status: 'FULLY_COVERED', canonicalTopics: ['Topic 3 (Preamble)'], canonicalConcepts: ['CON-T3-01', 'CON-T3-02', 'CON-T3-03', 'CON-T3-04'], notes: 'Objective Resolution, Preamble text, Sovereign Socialist Secular Democratic Republic, Justice Liberty Equality Fraternity, Berubari vs Kesavananda vs LIC, 42nd CAA amendment are fully covered.' },
  54: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'Tribunals: Part XIV-A (42nd CAA 1976), Administrative Tribunals (Art 323A / CAT Act 1985), Other Tribunals (Art 323B), L. Chandra Kumar 1997 doctrine.' },
  55: { status: 'FULLY_COVERED', canonicalTopics: ['Topic 6 (Unification of India)'], canonicalConcepts: ['CON-T6-01', 'CON-T6-02', 'CON-T6-03', 'CON-T6-04'], notes: 'Lapse of Paramountcy, Patel-Menon IoA & Standstill, Junagadh, Hyderabad Operation Polo, Goa Operation Vijay, French enclaves, Sikkim 35th/36th CAA are fully covered.' },
  56: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'President of India: Election (Arts 54-55 proportional representation single transferable vote), Impeachment (Art 61), Executive Powers, Veto Powers (Art 111), Ordinance Making Power (Art 123 / DC Wadhwa / Krishna Kumar Singh), Pardoning Power (Art 72 / Kehar Singh / Maru Ram).' },
  57: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'Vice-President of India: Qualifications, Election (Art 66), Removal (Art 67), Functions as Ex-Officio Chairman of Rajya Sabha (Art 64).' },
  58: { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'Parliament Architecture: Lok Sabha vs Rajya Sabha composition (Arts 80-81), Disqualifications (Art 102 vs 10th Schedule), Speaker (Art 93) vs Chairman (Art 89), Quorum (Art 100(3)), 104th CAA Anglo-Indian repeal.' }
};

const crosswalk = legacy.map(u => {
  const map = CANONICAL_MAPPINGS[u.number] || { status: 'NOT_COVERED', canonicalTopics: [], canonicalConcepts: [], notes: 'Unmapped' };
  return {
    id: u.id,
    number: u.number,
    title: u.title,
    lineCount: u.lineCount,
    status: map.status,
    canonicalTopics: map.canonicalTopics,
    canonicalConcepts: map.canonicalConcepts,
    notes: map.notes,
    articles: u.articles,
    caseLaws: u.caseLaws,
    hasRajasthan: u.hasRajasthan,
    rajasthanKeywords: u.rajasthanKeywords
  };
});

fs.writeFileSync(path.join(__dirname, 'polity-corpus-crosswalk.json'), JSON.stringify(crosswalk, null, 2));

const counts = crosswalk.reduce((acc, c) => {
  acc[c.status] = (acc[c.status] || 0) + 1;
  return acc;
}, {});

console.log('Crosswalk Classification Counts:');
console.log(counts);

const fullyCovered = crosswalk.filter(c => c.status === 'FULLY_COVERED');
console.log(`\nFully Covered Legacy Units (${fullyCovered.length}):`);
fullyCovered.forEach(c => console.log(`- ${c.id}: ${c.title} -> ${c.canonicalTopics.join(', ')}`));

const partiallyCovered = crosswalk.filter(c => c.status === 'PARTIALLY_COVERED');
console.log(`\nPartially Covered Legacy Units (${partiallyCovered.length}):`);
partiallyCovered.forEach(c => console.log(`- ${c.id}: ${c.title} -> ${c.canonicalTopics.join(', ')}`));

const notCovered = crosswalk.filter(c => c.status === 'NOT_COVERED');
console.log(`\nNot Covered Legacy Units (${notCovered.length}):`);
notCovered.forEach(c => console.log(`- ${c.id}: ${c.title}`));
