/**
 * History & Culture Master Ingestion & Provenance Inventory Ledger
 *
 * Source: History_Culture_Master.md (6,901 lines, 60 notes)
 * Audit Date: 2026-08-27
 *
 * Status: SOURCE TRIAGE ONLY — 5 Valid Source Seeds Preserved, 55 Corrupted Stubs Rejected.
 * Enforces Zero Unaccounted-For Source Omission principle at the triage layer.
 */

export interface HistorySourceUnit {
  id: string;
  noteNumber: number;
  sourceHeading: string;
  sourceCategory: string;
  lineRange: string;
  status: 'PRESERVED_VALID_SEED' | 'REJECTED_BOILERPLATE_STUB';
  contaminationType?: 'GENERIC_POLITY_1773' | 'GENERIC_GANDHI_1917';
  summary: string;
  rawKeyEvidence?: {
    topics: string[];
    keyFigures?: string[];
    keySitesOrWorks?: string[];
    keyDatesOrPeriods?: string[];
  };
  rejectionReason?: string;
}

export const PRESERVED_HISTORY_SEEDS: HistorySourceUnit[] = [
  {
    id: 'LEG-HC-017',
    noteNumber: 17,
    sourceHeading: 'In the Earliest Cities (Harappan Civilisation - 2600–1900 BCE)',
    sourceCategory: 'Book I: Ancient Indian History (NCERT Class 6)',
    lineRange: 'Lines 1949–2069',
    status: 'PRESERVED_VALID_SEED',
    summary: 'Harappan urban architecture, burnt-brick grid layouts, drainage systems, site matrix (Harappa, Mohenjo-daro, Lothal dockyard, Kalibangan, Dholavira 3-tier, Rakhigarhi, Chanhudaro, Banawali), binary weights, Pashupati seal, and Mesopotamian trade (Meluhha).',
    rawKeyEvidence: {
      topics: ['Harappan Town Planning', 'Major Harappan Sites', 'Harappan Trade & Seals', 'Decline Theories'],
      keySitesOrWorks: [
        'Harappa (Ravi River, 6 granaries, Dayaram Sahni 1921)',
        'Mohenjo-daro (Indus River, Great Bath, Dancing Girl, Priest King)',
        'Lothal (Bhogava River, Tidal dockyard, Ivory scale, Bead factory)',
        'Kalibangan (Ghaggar River, Ploughed field, Fire altars, Camel bones)',
        'Dholavira (Luni River/Kutch, 3-tier layout, 10-sign signboard, Water reservoirs)',
        'Rakhigarhi (Haryana, largest IVC site in India)',
        'Chanhudaro (Sindh, bead factory, inkpot, no citadel)',
        'Banawali (Haryana, plow model, radial streets)'
      ],
      keyDatesOrPeriods: ['2600–1900 BCE (Mature Harappan Phase)'],
    },
  },
  {
    id: 'LEG-HC-030',
    noteNumber: 30,
    sourceHeading: 'RAS History Ch 1: 6 UNESCO Hill Forts of Rajasthan & Military Architecture',
    sourceCategory: 'History (RPSC RAS Focused)',
    lineRange: 'Lines 3474–3525',
    status: 'PRESERVED_VALID_SEED',
    summary: 'The 6 UNESCO World Heritage Hill Forts inscribed in 2013 (Phnom Penh): Chittorgarh (3 Jauhars 1303/1535/1568, Vijay Stambha), Kumbhalgarh (Mandan, 36 km wall, Katargarh, Pratap birth), Ranthambore (Hammir Dev, 1301 Jauhar), Gagron (Jal Durg on Ahu & Kali Sindh, 1423/1444 Jauhars), Amber (Man Singh I, Sheesh Mahal, Shila Devi), Jaisalmer (1156 Rao Jaisal, mortarless yellow sandstone, 2.5 Jauhars / Ardh Shaka 1550). Mnemonic: Chiku Gajar Aam.',
    rawKeyEvidence: {
      topics: ['UNESCO Hill Forts', 'Rajput Military Architecture', 'Jauhar / Shaka Traditions', 'Fort Monuments'],
      keySitesOrWorks: [
        'Chittorgarh Fort (Mesa Plateau, Vijay Stambha by Kumbha 1437, Kirti Stambha by Jija Shah)',
        'Kumbhalgarh Fort (Rajsamand, Architect Mandan, 36 km wall, Katargarh Badal Mahal)',
        'Ranthambore Fort (Sawai Madhopur, Hammir Dev Chauhan, Trinetra Ganesha)',
        'Gagron Fort (Jhalawar, Ahu & Kali Sindh confluence, zero foundation bedrock)',
        'Amber Fort (Jaipur, Raja Man Singh I 1592, Sheesh Mahal, Shila Devi idol)',
        'Jaisalmer Fort (Trikuta Hill, Rao Jaisal 1156, mortarless yellow sandstone)'
      ],
      keyDatesOrPeriods: ['2013 (UNESCO Inscription)', '1303/1535/1568 (Chittor Jauhars)', '1301 (Ranthambore)', '1550 (Jaisalmer Ardh Shaka)'],
      keyFigures: ['Maharana Kumbha', 'Rawal Ratan Singh & Padmini', 'Hammir Dev Chauhan', 'Mandan', 'Man Singh I', 'Rao Jaisal']
    },
  },
  {
    id: 'LEG-HC-031',
    noteNumber: 31,
    sourceHeading: 'RAS History Ch 2: Rajasthan Miniature Painting Schools (Mewar, Kishangarh, Bundi & Kota)',
    sourceCategory: 'History (RPSC RAS Focused)',
    lineRange: 'Lines 3526–3570',
    status: 'PRESERVED_VALID_SEED',
    summary: 'The 4 Principal Schools of Rajasthani Painting (Anand Coomaraswamy 1916 framework): Mewar (Chawand 1605 Ragamala by Nisardin, Udaipur golden era under Jagat Singh I with Chitaron ki Ovari and Sahibdin, Nathdwara Pichwai with Kamala/Ilaichi); Marwar (Kishangarh under Sawant Singh/Nagridas, Nihal Chand Bani Thani, Bikaner Usta & Matheerna); Hadoti (Bundi wildlife/peacocks & Chitrashala, Kota female hunting scenes); Dhundhar (Shekhawati Haveli frescoes / Arayash).',
    rawKeyEvidence: {
      topics: ['Rajasthani Miniature Painting Schools', 'Anand Coomaraswamy Classification', 'Pichwai Art', 'Fresco Techniques'],
      keyFigures: ['Anand Coomaraswamy', 'Nisardin', 'Sahibdin', 'Maharana Jagat Singh I', 'Raja Sawant Singh (Nagridas)', 'Nihal Chand', 'Eric Dickinson', 'Kamala & Ilaichi'],
      keySitesOrWorks: [
        'Mewar Ragamala (1605 Chawand, 1628 Udaipur)',
        'Chitaron ki Ovari / Tasveera ro Karkhano (Udaipur)',
        'Bani Thani (Kishangarh, Mona Lisa of India)',
        'Chitrashala (Bundi)',
        'Usta Kala (Bikaner camel leather gold embossing)',
        'Arayash Frescoes (Shekhawati Havelis)'
      ],
      keyDatesOrPeriods: ['1916 (Rajput Painting publication)', '1605 (Chawand Ragamala)', '1628 (Udaipur Ragamala)', '1973 (Bani Thani Stamp)']
    },
  },
  {
    id: 'LEG-HC-032',
    noteNumber: 32,
    sourceHeading: 'RAS History Ch 3: Rajasthan Peasant Revolts (Bijolia, Begun) & Prajamandal Movements',
    sourceCategory: 'History (RPSC RAS Focused)',
    lineRange: 'Lines 3571–3622',
    status: 'PRESERVED_VALID_SEED',
    summary: 'Bijolia Peasant Movement (1897–1941, 44 years, 84 Lag-Bag cesses, Chawri Kar 1903, Talwar Bandhai 1906; Sadhu Sitaram Das, Vijay Singh Pathik, Uparmal Panch Board 1917, Pratap newspaper, Manikya Lal Verma Panchhida; Jamnalal Bajaj & Haribhau Upadhyaya); Begun Movement (Ramnarayan Chaudhary, Bolshevik agreement, Govindpura firing 13 July 1923, Rupa & Kripa Dhakad); Prajamandal Chronology (1931 Jaipur/Bundi, 1934 Marwar, 1936 Bikaner in Calcutta, 1938 Mewar, 1939 Sirohi in Bombay, Bharatpur in Rewari, 1944 Dungarpur Bhogilal Pandya).',
    rawKeyEvidence: {
      topics: ['Bijolia Peasant Revolt', 'Begun Peasant Movement', 'Prajamandal Freedom Movement', 'Princely State Agitations'],
      keyFigures: ['Sadhu Sitaram Das', 'Vijay Singh Pathik (Bhup Singh)', 'Manikya Lal Verma', 'Ramnarayan Chaudhary', 'Jamnalal Bajaj', 'Hiralal Shastri', 'Bhogilal Pandya (Gandhi of Vagad)', 'Gokulbhai Bhatt (Gandhi of Rajasthan)'],
      keySitesOrWorks: [
        'Bijolia (Bhilwara, Mewar Thikana)',
        'Uparmal Panch Board (1917)',
        'Pratap Newspaper (Kanpur, Ganesh Shankar Vidyarthi)',
        'Govindpura Firing (Begun 1923)',
        'Out-of-State Prajamandals: Bikaner (Calcutta), Sirohi (Bombay), Bharatpur (Rewari)'
      ],
      keyDatesOrPeriods: ['1897–1941 (Bijolia)', '1903 (Chawri Kar)', '1906 (Talwar Bandhai)', '1917 (Uparmal Panch Board)', '1921–1923 (Begun)', '1931 (1st Jaipur Prajamandal)']
    },
  },
  {
    id: 'LEG-HC-057',
    noteNumber: 57,
    sourceHeading: 'What, Where, How and When? (Historical Methodology & Geography)',
    sourceCategory: 'Book I: Ancient Indian History (NCERT Class 6)',
    lineRange: 'Lines 6431–6551',
    status: 'PRESERVED_VALID_SEED',
    summary: 'Historical methodology through manuscripts (Tala-patra, Bhurja-patra), epigraphy, archaeology. Early human settlement geography: Narmada Valley (Hathnora Homo erectus skull fossil), Sulaiman & Kirthar (Mehrgarh wheat/barley ~8000 BP), Garo Hills & Vindhyas (Koldihwa/Mahagara rice cultivation), Indus 2700 BCE alluvial farming vs Ganga 500 BCE iron tools clearance. Ashoka Kandahar bilingual edicts. Etymology of India (Indus/Sindhu/Hind) vs Bharat (Rigvedic tribe).',
    rawKeyEvidence: {
      topics: ['Historical Sources & Methodology', 'Paleolithic to Neolithic Settlements', 'Geography of Urbanization', 'Epigraphy & Multilingual Edicts', 'Etymology of Subcontinent'],
      keySitesOrWorks: [
        'Hathnora (Narmada Valley, Homo erectus fossil found by A.K. Sonakia)',
        'Mehrgarh (Balochistan, wheat/barley ~8000 BP / ~6000 BCE)',
        'Koldihwa & Mahagara (Belan Valley / Vindhyas, early rice cultivation)',
        'Kandahar Bilingual Inscription (Ashoka Greek and Aramaic)',
        'Manuscript Materials: Tala-patra (palm leaves) & Bhurja-patra (Himalayan birch bark)'
      ],
      keyDatesOrPeriods: ['~100,000+ BP (Narmada gathers)', '~8000 BP (Mehrgarh)', '~4700 BP / 2700 BCE (Indus urbanization)', '~2500 BP / 500 BCE (Ganga second urbanization)']
    },
  },
];

export const TOTAL_HISTORY_SOURCE_COUNT = 60;
export const PRESERVED_HISTORY_SEED_COUNT = PRESERVED_HISTORY_SEEDS.length;
export const REJECTED_HISTORY_STUB_COUNT = TOTAL_HISTORY_SOURCE_COUNT - PRESERVED_HISTORY_SEED_COUNT;
