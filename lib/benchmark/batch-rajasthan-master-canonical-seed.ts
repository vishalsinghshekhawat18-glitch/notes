/**
 * Mind of Aravalli / Reading Hub: Rajasthan Dynastic History, Art, Culture & Micro-Geography Master Canonical Seed
 *
 * Concepts CON-RAJ-001 to CON-RAJ-018
 * Covering RPSC RAS Mains Paper I & Geography (95 Marks):
 * - Unit 1: Rajasthan Dynastic History, Peasant & Tribal Movements (CON-RAJ-001 to 008)
 * - Unit 2: Rajasthan Art, Architecture, Deities, Performing Arts & Dialects (CON-RAJ-009 to 014)
 * - Unit 3: Rajasthan Micro-Geography, Drainage, Soils, Minerals & Irrigation (CON-RAJ-015 to 018)
 */

import { db } from '../db/client';
import { MasterPubAdConceptDefinition } from './batch-pubad-part1';

export const RAJASTHAN_MASTER_CONCEPTS: MasterPubAdConceptDefinition[] = [
  {
    "id": "CON-RAJ-001",
    "order": 1,
    "slug": "mewar-dynasty-guhelot-sisodia-kumbha-sanga-pratap",
    "title": "Mewar Dynastic Sovereignty: Guhilas & Sisodias (Bappa Rawal to Maharana Kumbha, Sanga & Pratap)",
    "shortDefinition": "Chronological political sovereignty, architectural patronage, and military resistance of Mewar: Bappa Rawal (734 CE), Rawal Ratan Singh (1303 siege & first Jauhar), Hammir (Uddharak), Maharana Kumbha (Vijay Stambha, 32 forts, musical treatises), Maharana Sanga (Battle of Khanwa 1527), and Maharana Pratap (Haldighati 1576, Dewair 1582, Chawand capital).",
    "difficulty": "ADVANCED",
    "topicSlug": "rajasthan-dynastic-history-and-movements",
    "topicTitle": "Rajasthan Dynastic History, Peasant & Tribal Movements",
    "topicOrder": 1,
    "topicDescription": "Dynastic genealogy, military resistance, architectural contributions of Rajput dynasties (Mewar, Marwar, Bikaner, Chauhans, Kachhwahas), peasant and tribal uprisings, and Prajamandal integration.",
    "subjectSlug": "rajasthan-history-culture-geography",
    "claims": [
      {
        "id": "CON-RAJ-001-CLM-1",
        "statement": "The Guhila/Sisodia dynasty of Mewar maintained uninterrupted sovereignty founded by Bappa Rawal in 734 CE from the Mori Rajputs, governing under the supreme spiritual sovereignty of Shri Eklingji (Shiva), with the Maharanas serving exclusively as Diwans (prime ministers) of the deity.",
        "claimType": "HISTORICAL_EVENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Dr. G.H. Ojha, History of Rajputana; Kavi Shyamaldas, Vir Vinod; James Tod, Annals and Antiquities of Rajasthan",
        "excerpt": "The rulers of Mewar never claimed absolute royal sovereignty; they ruled as the Diwan of Eklingji, carrying the state banner inscribed with \"Jo Dradha Rakhe Dharma, Tahi Rakhe Kartar\"."
      },
      {
        "id": "CON-RAJ-001-CLM-2",
        "statement": "Maharana Kumbha (r. 1433–1468 CE) erected the 9-storeyed, 122-foot Vijay Stambha (Kirti Stambha) at Chittorgarh to commemorate his victory over Mahmud Khalji of Malwa in the Battle of Sarangpur (1437 CE), authored monumental treatises (Sangeet Raj, Sangeet Mimansa, Sudha Prabandha), and according to Vir Vinod, constructed 32 of Mewar’s 84 defensive hill forts.",
        "claimType": "HISTORICAL_EVENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Kirti Stambha Prashasti (Atri and Mahesh); Kavi Shyamaldas, Vir Vinod",
        "excerpt": "Maharana Kumbha was a polymath king, unmatched in military fortification and classical scholarship, defeating Malwa and Gujarat and constructing Kumbhalgarh, Achalgarh, and the Vijay Stambha."
      },
      {
        "id": "CON-RAJ-001-CLM-3",
        "statement": "Maharana Pratap (r. 1572–1597 CE) confronted Akbar’s imperial army led by Man Singh at the Battle of Haldighati on 18 June 1576, reversed Mughal hegemony through guerilla warfare at the Battle of Dewair (1582, hailed by Tod as the \"Marathon of Mewar\"), and established Chawand as his emergency capital, initiating the Chawand school of painting.",
        "claimType": "HISTORICAL_EVENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Abul Fazl, Akbarnama; Badauni, Muntakhab-ut-Tawarikh; James Tod, Annals and Antiquities of Rajasthan",
        "excerpt": "Haldighati was not a mere military clash of religion, but an epic struggle for regional autonomy and territorial sovereignty. At Dewair in 1582, Pratap decimated the Mughal garrison, recapturing 36 imperial outposts."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Unbowed Sword of Mewar: The Spirit of Eklingji",
        "body": "Why does Mewar occupy the preeminent pedestal among all Rajput princely states? While other royal houses submitted to imperial Mughal suzerainty through matrimonial alliances and high mansabdari ranks, the Maharanas of Mewar treated their state not as personal property, but as a sacred trust of Shri Eklingji. From the ashes of three colossal Jauhars at Chittorgarh (1303, 1535, 1568) to the rugged defiles of Haldighati, Mewar stood as the living symbol of unyielding resistance, honor, and indigenous sovereignty.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Chronological Sovereignty & Battles Matrix of Mewar",
        "body": "| Monarch / Era | Major Military Actions & Battles | Architectural & Cultural Legacy | Key Historical Prashastis / Treatises |\n|---|---|---|---|\n| **Bappa Rawal (734 CE)** | Captured Chittorgarh from Man Mori; repelled early Arab incursions | Founded Eklingji Temple at Kailashpuri (Udaipur); adopted Shaiva Pashupata faith | Eklingji Inscription, Rajprashasti Mahakavya |\n| **Rawal Ratan Singh (1303 CE)** | Defended Chittor against Alauddin Khalji; First Jauhar led by Rani Padmini | Sacrificed lives of legendary generals Gora and Badal in siege | Amir Khusrau's *Khazain-ul-Futuh*, Malik Muhammad Jayasi's *Padmavat* |\n| **Rana Hammir (1326–1364 CE)** | Recaptured Chittor from Maldeo Songara; established Sisodia dynasty; Battle of Singoli | Titled *Vishamlghati Panchanan* (Lion in adversity) and *Mewar ka Uddharak* | Kumbhalgarh Inscription, Rasik Priya commentary |\n| **Maharana Kumbha (1433–1468 CE)** | Defeated Sultan Mahmud Khalji (Battle of Sarangpur 1437); repelled Malwa-Gujarat alliance (Champaner Treaty 1456) | Erected Vijay Stambha (architects: Jaita, Napa, Punja, Poma); built Kumbhalgarh & Achalgarh | Author of *Sangeet Raj* (5 Ratnakoshas), *Sangeet Mimansa*; Court scholars: Kanh Vyas (*Ekling Mahatmya*), Mandan (*Devamurti Prakaran*) |\n| **Maharana Sanga (1509–1527 CE)** | Defeated Delhi (Khatoli 1517, Dholpur 1518), Malwa (Gagron 1519), Babur at Bayana (1527); Battle of Khanwa (1527) | Revived *Pati Peravan* tradition (uniting all Rajput rulers); bore 80 battlefield wounds (*Sainik ka Bhagnavesh*) | Baburnama, Rajratnakar, Vir Vinod |\n| **Maharana Pratap (1572–1597 CE)** | Battle of Haldighati (18 June 1576); Battle of Dewair (1582 - \"Marathon of Mewar\"); liberated whole Mewar except Chittor & Mandalgarh | Established capital at Chawand (1585); patronized Chawand painting style; constructed Chamunda Mata temple | Court scholar Chakrapani Mishra authored *Vishwa Vallabh*, *Muhurtamartanda*, *Rajyabhisheka Paddhati* |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "Military Tactics: Guerilla Warfare in the Aravalli Defiles",
        "body": "Maharana Pratap revolutionized Rajput military tactics: 1. Abandoned flat-ground pitched cavalry charges against superior Mughal artillery and muskets. 2. Weaponized the impassable Aravalli terrain (Gogunda, Chawand, Bhomat). 3. Forged deep tactical alliances with indigenous Bhil warriors (Puna Bhil commander of Haldighati rearguard). 4. Enacted a \"scorched-earth policy\", evacuating fertile plains of Mewar to deny grain and forage to invading Mughal columns.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC RAS Mains Strategy & Analytical Presentation",
        "body": "In RPSC Mains Paper I (History & Culture): 1. When asked about Kumbha’s cultural contribution, cite the 5 divisions of *Sangeet Raj* (Patha, Geeta, Vadya, Nritya, Rasa Ratnakosha) and architectural treatises of Mandan (*Prasada Mandan*, *Rupa Mandan*). 2. For Haldighati, highlight its non-communal character (Pratap’s vanguard led by Hakim Khan Sur and Bhil chief Rana Punja, while Mughal army was commanded by Raja Man Singh). 3. Always emphasize Dewair (1582) as the decisive turning point of Pratap’s military campaign.",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Mains Paper I - History, Art, Culture, Literature, Tradition and Heritage of Rajasthan",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Core dynastic topic; 10M and 5M questions recurrently asked on Kumbha, Sanga, and Pratap."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "General Studies - Indian Culture & Medieval History",
        "relevance": "MEDIUM",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Rajput resistance, Khanwa, Haldighati, and medieval architecture."
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Mewar: Bappa Rawal (734, Eklingji Diwan). Kumbha (1437 Sarangpur, Vijay Stambha, Sangeet Raj, 32 forts). Sanga (80 wounds, Khanwa 1527). Pratap (Haldighati 1576, Dewair 1582, Chawand capital 1585).",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Mewar’s Guhila-Sisodia house stood as the fulcrum of Rajput resistance against Delhi Sultanate and Mughal hegemony. Key milestones: Rawal Ratan Singh and 1303 Jauhar; Rana Hammir founding Sisodia branch; Maharana Kumbha’s cultural golden age (Vijay Stambha, Kumbhalgarh, Sangeet Raj); Maharana Sanga uniting northern India at Khanwa (1527); and Maharana Pratap’s heroic resistance through guerilla warfare (Haldighati 1576, Dewair 1582, Chawand 1585).",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "# Mewar Analytical Architecture: Sovereignty, Fortification & Scholarship\n\n1. **Religious Sovereignty:** Rulers as Diwans of Eklingji, preventing personalized autocracy.\n2. **Kumbha’s Triad:** Military fortification (Kumbhalgarh 36 km wall, Achalgarh) + Literary brilliance (*Sangeet Raj*) + Sacred architecture (Ranakpur Jain temple patronized).\n3. **Pratap’s Transformation:** Conventional warfare transitioned into people-supported guerilla resistance in Aravalli defiles, securing lasting independence.",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "Who among the following court scholars of Maharana Pratap authored the celebrated agronomic and environmental treatise \"Vishwa Vallabh\"?",
        "options": [
          "Mandan",
          "Kanh Vyas",
          "Chakrapani Mishra",
          "Atri Bhatt"
        ],
        "correctAnswer": "Chakrapani Mishra",
        "explanation": "Chakrapani Mishra, the royal priest and scholar in Maharana Pratap’s court, authored \"Vishwa Vallabh\" (a pioneering scientific treatise on groundwater discovery, horticulture, and forestry), along with \"Rajyabhisheka Paddhati\" and \"Muhurtamartanda\".",
        "trapExplanation": "Mandan was the court architect of Maharana Kumbha, while Kanh Vyas authored Ekling Mahatmya under Kumbha.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "modelAnswer": "Chakrapani Mishra"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Evaluate the cultural and literary contributions of Maharana Kumbha to Rajasthan.",
        "options": [],
        "correctAnswer": "Maharana Kumbha was a peerless royal polymath: 1. **Literary Treatises**: Authored *Sangeet Raj* (in 5 Ratnakoshas: Patha, Geeta, Vadya, Nritya, Rasa), *Sangeet Mimansa*, *Sudha Prabandha*, and *Rasik Priya* (commentary on Jayadeva’s Gita Govinda). 2. **Architecture**: Built the 9-storeyed Vijay Stambha, Kumbhalgarh Fort, and repaired Achalgarh. 3. **Scholarly Patronage**: Patronized Mandan (author of *Prasada Mandan*, *Rupa Mandan*), Kanh Vyas (*Ekling Mahatmya*), and Jain scholar Soma Sunder Suri.",
        "explanation": "Standard 5-mark model answer balancing literature, architecture, and scholarly court patronage.",
        "trapExplanation": "Focusing exclusively on forts and omitting his musical and literary treatises.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 50,
        "modelAnswer": "Maharana Kumbha was a peerless royal polymath: 1. **Literary Treatises**: Authored *Sangeet Raj* (in 5 Ratnakoshas: Patha, Geeta, Vadya, Nritya, Rasa), *Sangeet Mimansa*, *Sudha Prabandha*, and *Rasik Priya* (commentary on Jayadeva’s Gita Govinda). 2. **Architecture**: Built the 9-storeyed Vijay Stambha, Kumbhalgarh Fort, and repaired Achalgarh. 3. **Scholarly Patronage**: Patronized Mandan (author of *Prasada Mandan*, *Rupa Mandan*), Kanh Vyas (*Ekling Mahatmya*), and Jain scholar Soma Sunder Suri."
      }
    ]
  },
  {
    "id": "CON-RAJ-002",
    "order": 2,
    "slug": "marwar-rathores-rao-jodha-maldeo-chandrasen-jaswant-singh",
    "title": "Marwar Dynastic Hegemony: Rathores (Rao Siha, Rao Jodha, Maldeo, Chandrasen & Durga Das Rathore)",
    "shortDefinition": "Dynastic lineage, territorial expansion, and unyielding resistance of the Rathores of Marwar: Rao Siha (founder), Rao Chunda (Mandore capital), Rao Jodha (Mehrangarh Fort 1459), Rao Maldeo (Hashmatwala Raja, Battle of Giri-Sumel 1544), Rao Chandrasen (\"Bhula Bisra Raja\", precursor to Pratap), Maharaja Jaswant Singh I, and Veer Durga Das Rathore’s 30-year war of liberation.",
    "difficulty": "ADVANCED",
    "topicSlug": "rajasthan-dynastic-history-and-movements",
    "topicTitle": "Rajasthan Dynastic History, Peasant & Tribal Movements",
    "topicOrder": 1,
    "topicDescription": "Dynastic genealogy, military resistance, architectural contributions of Rajput dynasties (Mewar, Marwar, Bikaner, Chauhans, Kachhwahas), peasant and tribal uprisings, and Prajamandal integration.",
    "subjectSlug": "rajasthan-history-culture-geography",
    "claims": [
      {
        "id": "CON-RAJ-002-CLM-1",
        "statement": "Rao Jodha founded the city of Jodhpur and laid the foundation stone of the colossal Mehrangarh Fort on Chidiyatunk hill in 1459 CE, shifting the Rathore capital from Mandore to secure strategic military advantage across the Thar desert.",
        "claimType": "HISTORICAL_EVENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Dr. G.H. Ojha, History of Jodhpur Rajya; James Tod, Annals and Antiquities of Rajasthan",
        "excerpt": "In 1459 CE, Rao Jodha selected the isolated, inaccessible cliff of Chidiyatunk to erect Mehrangarh, ensuring Rathore dominance across western Rajasthan."
      },
      {
        "id": "CON-RAJ-002-CLM-2",
        "statement": "Rao Maldeo (r. 1531–1562 CE), celebrated by Persian chroniclers as \"Hashmatwala Raja\" (The Monarch of Splendor), expanded Marwar across 58 parganas, fought Sher Shah Suri at the Battle of Giri-Sumel (1544 CE) where Rathore commanders Jaita and Kumpa fought so valiantly that Sher Shah proclaimed: \"I had nearly lost the empire of Hindustan for a handful of bajra.\"",
        "claimType": "HISTORICAL_EVENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Abbas Khan Sarwani, Tarikh-i-Sher Shahi; Muhnot Nainsi ri Khyat",
        "excerpt": "Sher Shah exclaimed: \"Barai musht-i-jau sultanat-i-Hindustan ra bad-dast dadam\" (For a fistful of millet, I had given away the empire of Hindustan)."
      },
      {
        "id": "CON-RAJ-002-CLM-3",
        "statement": "Rao Chandrasen (r. 1562–1581 CE) pioneered unyielding anti-Mughal resistance, rejecting Akbar’s suzerainty at the Nagaur Durbar (1570 CE) and operating through guerilla warfare from Bhadrajun and Siwana, earning him the historical titles \"Precursor of Maharana Pratap\" and \"The Forgotten Hero of Marwar\" (Bhula Bisra Raja).",
        "claimType": "HISTORICAL_EVENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Dr. V.S. Bhargava, Marwar and the Mughal Emperors; Badauni, Muntakhab-ut-Tawarikh",
        "excerpt": "Rao Chandrasen chose homelessness and constant desert warfare over imperial subjugation, lighting the torch of independence a decade before Pratap fought at Haldighati."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Desert Falcons: Pride, Honor and the 30-Year War",
        "body": "The harsh terrain of Marwar shaped the character of its rulers: fierce, fiercely independent, and unbending. When Sher Shah Suri attempted to crush Marwar in 1544, two generals (Jaita and Kumpa) nearly destroyed his entire imperial army. When Akbar summoned Rajput princes to Nagaur in 1570, Rao Chandrasen walked out of the imperial camp into exile. And when Aurangzeb sought to annex Marwar after Jaswant Singh’s death, Veer Durga Das Rathore waged a legendary 30-year war of resistance to place child Ajit Singh on the throne.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Chronological Matrix of Marwar Rathore Rulers",
        "body": "| Monarch / Leader | Era / Reign | Significant Achievements & Military Events | Historical Epithets / Key Insights |\n|---|---|---|---|\n| **Rao Siha** | 13th Century | Founder of Rathore dynasty; established base at Khed (Barmer) | Inscription found at Bithu (Pali) recording his death in 1273 CE |\n| **Rao Chunda** | 1394–1423 CE | Received Mandore as dowry from Inda Pratiharas; made Mandore the capital | Established Rathore power in central Marwar |\n| **Rao Jodha** | 1438–1489 CE | Founded Jodhpur (1459); constructed Mehrangarh Fort on Chidiyatunk hill; settled Awal-Bawal Treaty with Mewar | Father of Rao Bika (founder of Bikaner) |\n| **Rao Maldeo** | 1531–1562 CE | Conquered 58 parganas; built Pokhran Fort, Malkot Fort; sheltered Humayun; Battle of Giri-Sumel (1544) | Known as *Hashmatwala Raja*; legendary valor of generals Jaita and Kumpa |\n| **Rao Chandrasen** | 1562–1581 CE | Walked out of Nagaur Durbar (1570); operated from Bhadrajun, Siwana, and Sarang hills | *Precursor to Maharana Pratap*, *Bhula Bisra Raja*, *Marwar ka Pratap* |\n| **Mota Raja Udai Singh** | 1583–1595 CE | First Marwar ruler to accept Mughal suzerainty; married daughter Jodha Bai (Mani Bai / Jagat Gosaini) to Jahangir | Received royal title *Mota Raja* from Akbar |\n| **Maharaja Jaswant Singh I** | 1638–1678 CE | Fought for Dara Shikoh in Battle of Dharmat (1658); stationed at Jamrud (Afghanistan) where he died in 1678 | Authored *Bhasha Bhushan*, *Prabodha Chandrodaya*; patronized Muhnot Nainsi (*Nainsi ri Khyat*) |\n| **Veer Durga Das Rathore** | 1678–1708 CE | Rescued infant Ajit Singh from Delhi; spearheaded 30-year Rathore War of Independence against Aurangzeb | Known as *Ulysses of the Rathores* (James Tod) and *Marwar ka Andhbindhiya Moti* |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "The 30-Year Marwar War of Independence (1679–1707)",
        "body": "Upon Jaswant Singh’s death in Jamrud without surviving male heirs, Aurangzeb placed Marwar under Khalisa (direct Mughal administration) and recognized Indra Singh Rathore for ₹36 Lakh. When Ajit Singh was born in Lahore, Durga Das Rathore executed a daring escape from Delhi with the infant prince, sheltered him in Sirohi (under Mukund Das Khichi), and mobilized the Rathore-Sisodia alliance. Through relentless desert attrition and exploiting Prince Akbar’s revolt, Durga Das exhausted Mughal forces until Aurangzeb’s death in 1707 permitted Ajit Singh’s restoration.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC RAS Mains Analytical Traps & Presentation Strategy",
        "body": "Examiner Trap: Confusing Rao Chandrasen with Maharana Pratap. Chandrasen preceded Pratap by six years in adopting mountain guerilla tactics (Nagaur Durbar 1570 vs Haldighati 1576). For 2-mark questions, remember Jaswant Singh I’s literary works (*Bhasha Bhushan*) and Muhnot Nainsi’s seminal role as the \"Abul Fazl of Rajputana\" (titled by Munshi Devi Prasad).",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Mains Paper I - History of Rajasthan: Rathores of Marwar",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Giri-Sumel, Rao Chandrasen, Durga Das Rathore, and Jaswant Singh I are recurring themes."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Medieval Indian History - Regional Kingdoms",
        "relevance": "MEDIUM",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Sher Shah Suri campaign, Mughal-Rajput relations."
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Marwar Rathores: Jodha (1459 Mehrangarh). Maldeo (Hashmatwala, 1544 Giri-Sumel - Jaita/Kumpa). Chandrasen (1570 Nagaur Durbar, Bhula Bisra Raja, Pratap precursor). Durga Das (30-year war, Ajit Singh, Ulysses of Rathores).",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "The Rathores of Marwar rose from Khed and Mandore to dominate Thar geopolitics. Key figures include Rao Jodha (founder of Jodhpur and Mehrangarh in 1459), Rao Maldeo (Hashmatwala Raja, whose commanders Jaita and Kumpa terrified Sher Shah at Giri-Sumel in 1544), Rao Chandrasen (the forgotten pioneer of guerilla resistance who walked out of the 1570 Nagaur Durbar), and Veer Durga Das Rathore (who fought a 30-year war against Aurangzeb to liberate Marwar).",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "# Marwar Political Evolution\n\n1. **Consolidation:** Rao Chunda (Mandore) -> Rao Jodha (Mehrangarh 1459).\n2. **Climax & Crisis:** Maldeo (58 parganas, Giri-Sumel 1544) -> Chandrasen’s exile (1570 Nagaur Durbar, Siwana resistance).\n3. **Mughal Integration & Revolt:** Jaswant Singh I (Jamrud 1678) -> 30-Year War led by Durga Das Rathore -> Ajit Singh coronation (1707).",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "At which historic battle in 1544 did Sher Shah Suri state: \"For a handful of bajra, I had almost lost the empire of Hindustan\"?",
        "options": [
          "Battle of Khanwa",
          "Battle of Giri-Sumel",
          "Battle of Dharmat",
          "Battle of Bayana"
        ],
        "correctAnswer": "Battle of Giri-Sumel",
        "explanation": "At the Battle of Giri-Sumel (Jaitaran, Pali) in 1544 CE, Rao Maldeo’s brave generals Jaita and Kumpa launched an audacious attack on Sher Shah Suri’s camp with just 12,000 soldiers, causing immense panic and casualties in the imperial army before falling heroically.",
        "trapExplanation": "Battle of Khanwa was fought in 1527 between Babur and Rana Sanga.",
        "difficulty": "BEGINNER",
        "isPYQ": false,
        "modelAnswer": "Battle of Giri-Sumel"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Why is Rao Chandrasen of Marwar regarded as the \"Precursor of Maharana Pratap\"?",
        "options": [],
        "correctAnswer": "Rao Chandrasen (r. 1562–1581 CE) is acclaimed as the \"Precursor of Maharana Pratap\" because: 1. **Pioneered Anti-Mughal Resistance**: Rejected Mughal suzerainty at the 1570 Nagaur Durbar six years before Haldighati (1576). 2. **Guerilla Warfare**: Shifted his operational base from flat plains to rugged hills (Bhadrajun, Siwana, Sarang), perfecting hit-and-run tactics. 3. **Uncompromising Freedom**: Endured severe desert hardships and exile rather than accepting high Mughal mansab or marital alliance.",
        "explanation": "5-mark answer detailing the chronological priority and tactical similarity between Chandrasen and Pratap.",
        "trapExplanation": "Failing to mention the 1570 Nagaur Durbar and his specific hideouts (Siwana and Bhadrajun).",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 50,
        "modelAnswer": "Rao Chandrasen (r. 1562–1581 CE) is acclaimed as the \"Precursor of Maharana Pratap\" because: 1. **Pioneered Anti-Mughal Resistance**: Rejected Mughal suzerainty at the 1570 Nagaur Durbar six years before Haldighati (1576). 2. **Guerilla Warfare**: Shifted his operational base from flat plains to rugged hills (Bhadrajun, Siwana, Sarang), perfecting hit-and-run tactics. 3. **Uncompromising Freedom**: Endured severe desert hardships and exile rather than accepting high Mughal mansab or marital alliance."
      }
    ]
  },
  {
    "id": "CON-RAJ-003",
    "order": 3,
    "slug": "bikaner-rathores-rao-bika-kalyanmal-rai-singh-anup-singh",
    "title": "Bikaner Rathore Principality: Rao Bika, Rai Singh, Maharaja Anup Singh & Architectural-Manuscript Patronage",
    "shortDefinition": "Genesis, military-diplomatic trajectory, and cultural patronages of the Rathores of Bikaner: Rao Bika (founder, 1488 CE), Rao Jaitsi (Battle of Rati-Ghati 1534), Rao Kalyanmal (Nagaur Durbar 1570), Rai Singh (\"Karna of Rajputana\", Junagarh Fort, Rai Singh Prashasti), and Maharaja Anup Singh (Deccan campaigns, Anup Sanskrit Library, Golden Age of Usta Kala).",
    "difficulty": "ADVANCED",
    "topicSlug": "rajasthan-dynastic-history-and-movements",
    "topicTitle": "Rajasthan Dynastic History, Peasant & Tribal Movements",
    "topicOrder": 1,
    "topicDescription": "Dynastic genealogy, military resistance, architectural contributions of Rajput dynasties (Mewar, Marwar, Bikaner, Chauhans, Kachhwahas), peasant and tribal uprisings, and Prajamandal integration.",
    "subjectSlug": "rajasthan-history-culture-geography",
    "claims": [
      {
        "id": "CON-RAJ-003-CLM-1",
        "statement": "Rao Bika, the sixth son of Rao Jodha of Marwar, established the independent Rathore state of Bikaner in 1465 CE and founded the city of Bikaner in 1488 CE (on Akshaya Tritiya) with the blessings of Karni Mata, asserting sovereignty over Jangladesh.",
        "claimType": "HISTORICAL_EVENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Dayaldas ri Khyat; Dr. L.P. Tessitori Reports; Ojha, History of Bikaner Rajya",
        "excerpt": "Rao Bika founded Bikaner on Baisakh Shukla Teej (Akshaya Tritiya) in Samvat 1545 (1488 CE), converting the arid wilderness of Jangladesh into an enduring kingdom."
      },
      {
        "id": "CON-RAJ-003-CLM-2",
        "statement": "Raja Rai Singh (r. 1574–1612 CE) constructed the formidable Junagarh Fort (1589–1594 CE, engineered by Prime Minister Karam Chand), received the title \"Rajputane ka Karna\" from Munshi Devi Prasad for his legendary philanthropy, and authored the Rai Singh Prashasti inscribed on the fort walls.",
        "claimType": "HISTORICAL_EVENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Junagarh Fort Inscription; Munshi Devi Prasad; Vir Vinod",
        "excerpt": "Junagarh Fort, hailed as \"Zameen ka Zewar\", was completed under Rai Singh, who attained a 5,000 mansab and governorates of Gujarat and Burhanpur."
      },
      {
        "id": "CON-RAJ-003-CLM-3",
        "statement": "Maharaja Anup Singh (r. 1669–1698 CE) rescued thousands of rare Sanskrit and Rajasthani manuscripts during Aurangzeb’s Deccan campaigns, founding the world-renowned Anup Sanskrit Library at Bikaner, and earned the title \"Mahi Maratib\" from the Mughal Emperor.",
        "claimType": "HISTORICAL_EVENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Anup Sanskrit Library Catalogues; Dr. Karni Singh, The Relations of the House of Bikaner with the Central Powers",
        "excerpt": "Anup Singh was a scholarly connoisseur who preserved the literary heritage of South India in Bikaner, while his reign marked the golden age of Bikaner miniature painting and Usta Kala."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Jangladesh to Global Renown: The Oasis of Bikaner",
        "body": "Carving a prosperous kingdom out of the hyper-arid sands of Jangladesh required exceptional vision. Rao Bika ventured north when his father Rao Jodha casually remarked on his quiet durbars. Over subsequent centuries, Bikaner balanced pragmatic diplomacy with the Mughals to secure governorships from Gujarat to Kabul, channeling imperial revenues back home to construct Junagarh Fort, assemble the world’s greatest Sanskrit manuscript library, and patronize the golden camel-hide art of Usta Kala.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Key Monarchs & Contributions of Bikaner Rathores",
        "body": "| Monarch | Reign | Significant Historical Events | Cultural & Literary Contributions |\n|---|---|---|---|\n| **Rao Bika** | 1465–1504 CE | Founded Bikaner (1488 CE, Akshaya Tritiya); defeated Bhati Rajputs of Pugal; secured ancestral emblems from Jodhpur | Established Kodamdesar Bhairav and Karni Mata temple at Deshnok |\n| **Rao Jaitsi** | 1526–1542 CE | Crushed the Mughal army of Kamran (Humayun’s brother) at the Battle of Rati-Ghati (1534 CE) | Commemorated in the epic dingal poem *Rao Jaitsi ro Chhand* by Vithu Suja |\n| **Rao Kalyanmal** | 1542–1574 CE | First Bikaner ruler to accept Mughal suzerainty at Nagaur Durbar (1570 CE) | Accompanied by sons Rai Singh and Prithviraj Rathore (author of *Veli Krishan Rukmani ri*) |\n| **Raja Rai Singh** | 1574–1612 CE | High Mughal mansabdar (5000); Governor of Gujarat & Burhanpur; crushed rebellions | Built Junagarh Fort (1589-94, *Zameen ka Zewar*); authored *Rai Singh Prashasti*, *Jyotish Ratnamala*; titled *Rajputane ka Karna* |\n| **Maharaja Karan Singh** | 1631–1669 CE | Victorious in the famous *Mateere ki Raad* (1644 CE) against Amar Singh Rathore of Nagaur | Conferred title *Jangal-dhar Badshah*; patronized *Sahitya Kalpadrum* |\n| **Maharaja Anup Singh** | 1669–1698 CE | Fought in Aurangzeb's Deccan campaigns (Bijapur & Golconda); awarded title *Mahi Maratib* | Founded **Anup Sanskrit Library**; Golden age of Bikaner miniature school and **Usta Kala**; authored *Anup Vivek*, *Kam-Prabodha* |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "Cultural Synthesis: Usta Kala & The Anup Sanskrit Collection",
        "body": "Bikaner’s cultural zenith under Anup Singh was characterized by: 1. **Usta Kala (Munawwat Work)**: Muslim master artists (Ustads) brought from Delhi and Multan crafted intricate embossed gold filigree work on cured camel hides (water bottles/Kupis) and palace ceilings. 2. **Literary Preservation**: As southern Indian libraries faced destruction during the Mughal annexation of the Deccan sultanates, Anup Singh purchased and transported carts of priceless Sanskrit, Vedic, and Sangam manuscripts to Bikaner, establishing the Anup Sanskrit Library.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC RAS Prelims & Mains Traps",
        "body": "High-yield points: 1. *Mateere ki Raad* (1644 CE) was fought over a watermelon vine growing across the border of Jakhania (Bikaner) and Silwi (Nagaur) between Karan Singh and Amar Singh Rathore. 2. Do not confuse \"Rajputane ka Karna\" (Rai Singh of Bikaner, titled by Munshi Devi Prasad) with \"Kalyug ka Karna\" (Rao Lunkaran of Bikaner, titled by Jayasoma in *Karam Chand Vamshotkirtankam Kavyam*).",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Mains Paper I - Dynastic History of Rajasthan: Bikaner Rathores",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Rai Singh, Anup Singh, and cultural achievements recurrently tested."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Indian Art & Culture",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Usta Kala, Rajasthani miniature painting."
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Bikaner: Bika (1488, Akshaya Tritiya). Jaitsi (1534 Rati-Ghati). Rai Singh (Junagarh Fort, Rajputane ka Karna). Karan Singh (1644 Mateere ki Raad). Anup Singh (Mahi Maratib, Anup Sanskrit Library, Usta Kala).",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Founded by Rao Bika in 1488 CE, Bikaner evolved from an arid frontier into an empire-spanning power. Key highlights: Rao Jaitsi crushing Kamran in 1534 (Vithu Suja’s poem); Raja Rai Singh constructing Junagarh Fort and earning the title Rajputane ka Karna; and Maharaja Anup Singh collecting priceless manuscripts in the Deccan to create the Anup Sanskrit Library while patronizing Usta Kala.",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "# Bikaner Rathore Matrix\n\n1. **Foundational Era:** Bika (1488) -> Jaitsi (Rati-Ghati 1534).\n2. **Imperial Zenith:** Kalyanmal (1570 Nagaur) -> Rai Singh (Junagarh 1589-94, 5000 mansab).\n3. **Cultural Renaissance:** Anup Singh (Deccan manuscripts, Anup Library, Usta Kala, Mahi Maratib).",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "Who titled Raja Rai Singh of Bikaner as \"Rajputane ka Karna\" for his extraordinary generosity and philanthropy during the devastating famine of 1631?",
        "options": [
          "James Tod",
          "Munshi Devi Prasad",
          "Kavi Shyamaldas",
          "Dr. G.H. Ojha"
        ],
        "correctAnswer": "Munshi Devi Prasad",
        "explanation": "Munshi Devi Prasad, the famed historian of Rajasthan, conferred the title \"Rajputane ka Karna\" on Raja Rai Singh of Bikaner. In contrast, Jayasoma titled Rao Lunkaran as \"Kalyug ka Karna\".",
        "trapExplanation": "Rao Lunkaran was titled Kalyug ka Karna by Jayasoma, not Rai Singh.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "modelAnswer": "Munshi Devi Prasad"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Discuss the historical significance of the Anup Sanskrit Library established by Maharaja Anup Singh of Bikaner.",
        "options": [],
        "correctAnswer": "The **Anup Sanskrit Library** at Junagarh Fort, Bikaner, established by Maharaja Anup Singh (r. 1669–1698), is globally renowned because: 1. **Preservation of Rare Manuscripts**: During Aurangzeb’s military campaigns in the Deccan (Bijapur, Golconda), Anup Singh rescued thousands of priceless Sanskrit, Vedic, and Rajasthani texts that faced destruction. 2. **Center of Indology**: Houses over 10,000 ancient manuscripts, including rare commentaries on the Vedas, Dharmashastras, and classical music. 3. **Indological Research**: Served as the premier research archive for international scholars including Dr. L.P. Tessitori and Sir Aurel Stein.",
        "explanation": "5-mark answer detailing manuscript preservation, scholarly scope, and modern historical significance.",
        "trapExplanation": "Merely describing it as a library without highlighting the Deccan campaign rescue mission.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 50,
        "modelAnswer": "The **Anup Sanskrit Library** at Junagarh Fort, Bikaner, established by Maharaja Anup Singh (r. 1669–1698), is globally renowned because: 1. **Preservation of Rare Manuscripts**: During Aurangzeb’s military campaigns in the Deccan (Bijapur, Golconda), Anup Singh rescued thousands of priceless Sanskrit, Vedic, and Rajasthani texts that faced destruction. 2. **Center of Indology**: Houses over 10,000 ancient manuscripts, including rare commentaries on the Vedas, Dharmashastras, and classical music. 3. **Indological Research**: Served as the premier research archive for international scholars including Dr. L.P. Tessitori and Sir Aurel Stein."
      }
    ]
  },
  {
    "id": "CON-RAJ-004",
    "order": 4,
    "slug": "chauhans-shakambhari-ajmer-ranthambore-jalore-prithviraj-iii",
    "title": "Chauhan Imperial Hegemony: Shakambhari, Ajmer, Ranthambore & Jalore (Prithviraj III, Hammir Dev & Kanhad Dev)",
    "shortDefinition": "Dynastic genesis, territorial expansion, and tragic climactic resistance of the Chauhans (Chahamanas): Vasudeva (founder at Sambhar 551 CE), Ajayraj (founded Ajmer 1113 CE), Vigraharaj IV (Harakeli drama, Bisalpur), Prithviraj Chauhan III (Tarain I & II 1191–1192), Hammir Dev Chauhan of Ranthambore (1301 siege & Jauhar, \"Singhasavan\"), and Kanhad Dev of Jalore (1311 siege & Padmanabha’s epic).",
    "difficulty": "ADVANCED",
    "topicSlug": "rajasthan-dynastic-history-and-movements",
    "topicTitle": "Rajasthan Dynastic History, Peasant & Tribal Movements",
    "topicOrder": 1,
    "topicDescription": "Dynastic genealogy, military resistance, architectural contributions of Rajput dynasties (Mewar, Marwar, Bikaner, Chauhans, Kachhwahas), peasant and tribal uprisings, and Prajamandal integration.",
    "subjectSlug": "rajasthan-history-culture-geography",
    "claims": [
      {
        "id": "CON-RAJ-004-CLM-1",
        "statement": "Vigraharaj IV (Bisaldeo, r. 1153–1163 CE) marked the golden age of the Ajmer Chauhans, capturing Delhi from the Tomaras, composing the Sanskrit drama Harakeli Natak, founding the university Sanskrit College in Ajmer (later converted into Adhai Din Ka Jhonpra by Qutb-ud-din Aibak), and building Bisalpur lake.",
        "claimType": "HISTORICAL_EVENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Delhi-Shivalik Pillar Inscription; Somadeva, Lalita Vigraharaja; Dasharatha Sharma, Early Chauhan Dynasties",
        "excerpt": "Vigraharaj IV was both a supreme conqueror and a poet of rare caliber, praised by Jayanaka in Prithviraja Vijaya with the title Kavi Bandhav."
      },
      {
        "id": "CON-RAJ-004-CLM-2",
        "statement": "Prithviraj Chauhan III (Rai Pithora, r. 1177–1192 CE) defeated Muhammad Ghori in the First Battle of Tarain (1191 CE), but was defeated in the Second Battle of Tarain (1192 CE), establishing the foundation of the Delhi Sultanate in northern India.",
        "claimType": "HISTORICAL_EVENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Chand Bardai, Prithviraj Raso; Jayanaka, Prithviraja Vijaya; Minhaj-i-Siraj, Tabaqat-i-Nasiri",
        "excerpt": "The Second Battle of Tarain in 1192 CE was the decisive watershed of medieval Indian history, ending Hindu imperial supremacy over the Gangetic plains."
      },
      {
        "id": "CON-RAJ-004-CLM-3",
        "statement": "Hammir Dev Chauhan of Ranthambore (r. 1282–1301 CE) offered shelter to rebel Mongol general Muhammad Shah, defying Alauddin Khalji and preferring complete martyrdom in 1301 CE, which led to Rajasthan’s first documented water-Jauhar (Jal Jauhar led by Queen Ranga Devi) in Ranthambore Fort.",
        "claimType": "HISTORICAL_EVENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Nayan Chandra Suri, Hammira Mahakavya; Amir Khusrau, Khazain-ul-Futuh",
        "excerpt": "Hammir’s unyielding vow gave rise to the proverb: \"Tiriya-tel Hammir-hath chadhai na dooji baar\" (As oil cannot be applied to a bride twice, so Hammir’s stubborn resolve never bends)."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Blazing Flame of Chauhan Valour",
        "body": "No Rajput clan captured the popular poetic imagination quite like the Chauhans. From the agnikunda origins at Mount Abu to Prithviraj Chauhan’s poetic archery at Ghazni, their history is written in epic scales. Yet beyond the poetry lies rigorous geostrategic history: Vigraharaj IV dominating north India, Tarain altering India’s political destiny in 1192, Hammir Dev dying for the sacred code of asylum (*Sharanagat Vatsalta*) in 1301, and Kanhad Dev defending the rocky gates of Jalore and Siwana until 1311.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Chauhan Branches & Critical Historical Milestones",
        "body": "| Branch / Founder | Major Monarchs | Historic Battles & Events | Key Literary Treatises & Monuments |\n|---|---|---|---|\n| **Shakambhari (Sambhar)**<br>Vasudeva (551 CE) | Vasudeva, Durlabharaj I | Established capital at Ahichhatrapur (Nagaur); constructed Sambhar Salt Lake and Shakambhari Devi Temple | Bijolia Rock Inscription (1170 CE, mentions Vasudeva as founder) |\n| **Ajmer Branch**<br>Ajayraj (1113 CE) | **Ajayraj**: Founded Ajmer and Ajaymeru Fort (Taragarh) in 1113 CE.<br>**Arnoraj**: Built Anasagar Lake; Varaha temple at Pushkar.<br>**Vigraharaj IV (Bisaldeo)**: Titled *Kavi Bandhav*; authored *Harakeli Natak*; constructed Sanskrit College (Adhai Din Ka Jhonpra) & Bisalpur Dam. | Defeated Ghaznavid Turks; captured Delhi from Tomaras | Court poet Somadeva (*Lalita Vigraharaja*), Jayanaka (*Prithviraja Vijaya*), Narapati Nalha (*Bisaldeo Raso*) |\n| **Prithviraj III (Ajmer)**<br>(1177–1192 CE) | **Prithviraj III (Rai Pithora)**: Subdued Bhadanakas, defeated Chandela Parmardi Deva (Battle of Mahoba 1182 - martyrs Alha & Udal), defeated Chalukya Bhima II | **First Battle of Tarain (1191)**: Routed Ghori.<br>**Second Battle of Tarain (1192)**: Defeated by Ghori, leading to Sultanate rule | Court poets: Chand Bardai (*Prithviraj Raso*), Jayanaka (*Prithviraja Vijaya*), Vidyapati Gaud, Vagishwar Janardan |\n| **Ranthambore Branch**<br>Govindraj (1194 CE) | **Hammir Dev Chauhan** (1282–1301 CE): Conquered 16 battles; sheltered rebel Mongol Muhammad Shah | **Siege of Ranthambore (1301 CE)**: Alauddin Khalji captured fort after betrayal of Ranmal & Rati Pal; 1st documented **Jal Jauhar** by Queen Ranga Devi | Nayan Chandra Suri (*Hammira Mahakavya*), Jodhraj (*Hammir Raso*), Amir Khusrau (*Khazain-ul-Futuh*) |\n| **Jalore Branch (Songara)**<br>Kirtipal (Kitu, 1181 CE) | **Kanhad Dev Chauhan** (1296–1311 CE) and brave prince **Viramdev** | Siege of Siwana Fort (1308 - Saatil & Som martyrs); Siege of Jalore Fort (1311 - betrayed by Bika Dahiya); Saka & Jauhar | Padmanabha authored epic masterpieces: *Kanhadade Prabandha* and *Viramde Sonigara ri Vat* |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "The Watershed of Tarain (1191 vs 1192 CE)",
        "body": "Why did Prithviraj III win Tarain I but lose Tarain II within 12 months? 1. **Tarain I (1191)**: Rajput heavy cavalry smashed the Turkish wings; Ghori was wounded by Govind Rai of Delhi. However, Prithviraj committed the strategic error of not pursuing the retreating enemy. 2. **Tarain II (1192)**: Ghori deployed 10,000 horse archers using the \"feigned retreat\" tactic (Caracole), divided his army into four divisions to attack fatigued Rajput infantry at dawn, and exploited the refusal of regional Rajput states (Jaichand of Kannauj) to aid Prithviraj.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC RAS Mains Analytical Traps",
        "body": "High-yield points: 1. Remember the chronological sequence of Chauhans: Vasudeva -> Ajayraj (1113) -> Arnoraj -> Vigraharaj IV -> Prithviraj III. 2. For Ranthambore, note that Govindraj (son of Prithviraj III) founded the dynasty in 1194 CE. 3. In 1301, Khusrau recorded the fall of Ranthambore with the famous line: \"The fortress of infidelity became the home of Islam.\"",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Mains Paper I - Dynastic History of Rajasthan: Chauhans of Ajmer, Ranthambore & Jalore",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Prithviraj III, Vigraharaj IV, Hammir Dev, and Kanhadade Prabandha are core staples."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Medieval History of India",
        "relevance": "HIGH",
        "priority": "P1",
        "requiredDepth": "MODERATE",
        "notes": "Battles of Tarain, Turkish invasions, and Rajput political disintegration."
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Chauhans: Vasudeva (551 Sambhar). Ajayraj (1113 Ajmer). Vigraharaj IV (Harakeli, Sanskrit College). Prithviraj III (Tarain 1191/1192). Hammir (1301 Ranthambore Jal Jauhar). Kanhad Dev (1311 Jalore, Padmanabha).",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "The Chauhans dominated northern Rajasthan. Ajayraj founded Ajmer in 1113 CE, Vigraharaj IV achieved cultural and military zenith (conquering Delhi, writing Harakeli), and Prithviraj III fought the watershed Battles of Tarain (1191/1192). Following Ajmer’s fall, branch dynasties staged epic resistance: Hammir Dev in Ranthambore (1301, first documented water Jauhar) and Kanhad Dev in Jalore (1311, chronicled in Kanhadade Prabandha).",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "# Chauhan Historical Spectrum\n\n1. **Imperial Ajmer:** Vasudeva (551) -> Ajayraj (1113) -> Vigraharaj IV (Delhi conquest, Harakeli) -> Prithviraj III (Tarain 1191/1192).\n2. **Ranthambore Resistance:** Govindraj (1194) -> Hammir Dev (1301 Jal Jauhar, Sharanagat code).\n3. **Jalore Martyrdom:** Kirtipal (1181) -> Kanhad Dev & Viramdev (1308 Siwana, 1311 Jalore).",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "Which Sanskrit drama authored by Chauhan king Vigraharaj IV has portions of its text inscribed on the stone slabs of Adhai Din Ka Jhonpra in Ajmer?",
        "options": [
          "Lalita Vigraharaja",
          "Harakeli Natak",
          "Prasannaraghava",
          "Karpuramanjari"
        ],
        "correctAnswer": "Harakeli Natak",
        "explanation": "Vigraharaj IV (Bisaldeo) authored the celebrated Sanskrit drama \"Harakeli Natak\" (based on Bharavi’s Kiratarjuniya). Portions of this drama are carved on the stone walls of Adhai Din Ka Jhonpra in Ajmer (which originally housed his Sanskrit university before being converted into a mosque).",
        "trapExplanation": "Lalita Vigraharaja was composed by court poet Somadeva, not Vigraharaj IV himself.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "modelAnswer": "Harakeli Natak"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Explain the historical causes that led to the confrontation between Alauddin Khalji and Hammir Dev Chauhan of Ranthambore in 1301 CE.",
        "options": [],
        "correctAnswer": "The 1301 CE conflict arose due to: 1. **Asylum to Rebel Mongols**: Hammir provided shelter to rebel Mongol neo-Muslim commanders Muhammad Shah and Khebru who fled Alauddin’s army after looting Gujarat, refusing to surrender them under the sacred Rajput code of *Sharanagat Vatsalta*. 2. **Strategic Location of Ranthambore**: Ranthambore sat astride the primary trade and military highway from Delhi to Malwa and Gujarat. 3. **Imperial Ambition**: Alauddin’s expansionist policy to subjugate all sovereign Rajput strongholds.",
        "explanation": "Standard 5-mark answer covering the immediate trigger (Mongol asylum) and underlying geostrategic motives.",
        "trapExplanation": "Listing only imperial expansion and failing to mention Muhammad Shah and Sharanagat Vatsalta.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 50,
        "modelAnswer": "The 1301 CE conflict arose due to: 1. **Asylum to Rebel Mongols**: Hammir provided shelter to rebel Mongol neo-Muslim commanders Muhammad Shah and Khebru who fled Alauddin’s army after looting Gujarat, refusing to surrender them under the sacred Rajput code of *Sharanagat Vatsalta*. 2. **Strategic Location of Ranthambore**: Ranthambore sat astride the primary trade and military highway from Delhi to Malwa and Gujarat. 3. **Imperial Ambition**: Alauddin’s expansionist policy to subjugate all sovereign Rajput strongholds."
      }
    ]
  },
  {
    "id": "CON-RAJ-005",
    "order": 5,
    "slug": "kachhwahas-amber-jaipur-bharmal-man-singh-sawai-jai-singh",
    "title": "Kachhwaha Diplomacy & Renaissance: Amber to Jaipur (Bharmal, Man Singh I, Mirza Raja & Sawai Jai Singh II)",
    "shortDefinition": "Origins, pragmatic Mughal alliance, military conquests across India, and scientific-urban renaissance of the Kachhwahas of Amber/Jaipur: Dulherai (founder 1137 CE), Bharmal (first matrimonial alliance with Akbar at Sambhar 1562), Raja Man Singh I (7,000 mansabdar, conquests of Bengal, Bihar, Orissa, and Kabul), Mirza Raja Jai Singh (Treaty of Purandar 1665), and Sawai Jai Singh II (founded Jaipur 1727, 5 Jantar Mantars, astronomical tables).",
    "difficulty": "ADVANCED",
    "topicSlug": "rajasthan-dynastic-history-and-movements",
    "topicTitle": "Rajasthan Dynastic History, Peasant & Tribal Movements",
    "topicOrder": 1,
    "topicDescription": "Dynastic genealogy, military resistance, architectural contributions of Rajput dynasties (Mewar, Marwar, Bikaner, Chauhans, Kachhwahas), peasant and tribal uprisings, and Prajamandal integration.",
    "subjectSlug": "rajasthan-history-culture-geography",
    "claims": [
      {
        "id": "CON-RAJ-005-CLM-1",
        "statement": "Raja Bharmal of Amber became the first Rajput ruler to establish diplomatic and matrimonial ties with Akbar at Sambhar in 1562 CE, marrying his daughter Harkha Bai (Mariam-uz-Zamani), thereby pioneering the Mughal-Rajput political partnership.",
        "claimType": "HISTORICAL_EVENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Abul Fazl, Akbarnama; Badauni; Jadunath Sarkar, A History of Jaipur",
        "excerpt": "Bharmal met Akbar at Sanganer through Chaghtai Khan and cemented an alliance at Sambhar in January 1562, ensuring centuries of security and royal preeminence for Amber."
      },
      {
        "id": "CON-RAJ-005-CLM-2",
        "statement": "Raja Man Singh I (r. 1589–1614 CE) achieved the highest imperial mansab (7,000 zat / 6,000 sawar) granted to any noble under Akbar, commanded Mughal forces at Haldighati (1576), conquered Orissa (1592) and Bengal, brought the Shila Devi idol from Jessore (Bengal) to Amber Fort, and built the Govind Dev Ji temple at Vrindavan.",
        "claimType": "HISTORICAL_EVENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Akbarnama; Jahangirnama; Amber Palace Inscriptions",
        "excerpt": "Akbar designated Man Singh as \"Farzand\" (Son) and \"Mirza Raja\", entrusting him with the subjugation of Afghanistan, Bengal, and Bihar."
      },
      {
        "id": "CON-RAJ-005-CLM-3",
        "statement": "Sawai Jai Singh II (r. 1700–1743 CE) founded Jaipur on 18 November 1727 with urban planner Vidyadhar Bhattacharya on Vastu Shastra principles, built five astronomical observatories (Jantar Mantars) at Delhi, Jaipur, Ujjain, Varanasi, and Mathura, compiled the Zij-i-Muhammad Shahi astronomical tables, and revived Vedic Ashvamedha Yajna.",
        "claimType": "HISTORICAL_EVENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "UNESCO World Heritage Inscription (Jaipur City & Jantar Mantar); Pundarik Ratnakar, Jai Singh Kalpadrum",
        "excerpt": "Sawai Jai Singh II was the Royal Astronomer of the 18th century, synthesizing Hindu, Islamic, and European astronomical treatises and designing the world’s largest stone sundial (Samrat Yantra)."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Pragmatic Diplomacy & Scientific Renaissance",
        "body": "While Mewar chose heroic defiance and Marwar fluctuated between rebellion and accommodation, the Kachhwahas of Amber made a calculated geostrategic choice: active partnership with the Mughal Empire. This alliance transformed a modest principality into the wealthiest, most culturally sophisticated court in Rajasthan. Man Singh conquered empires from Kabul to the Bay of Bengal, Mirza Raja negotiated with Shivaji at Purandar, and Sawai Jai Singh built the grid-planned wonder of Jaipur and deciphered the movements of the stars.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Master Matrix of Kachhwaha Monarchs & Contributions",
        "body": "| Monarch | Reign | Military & Diplomatic Milestones | Cultural, Architectural & Scientific Legacy |\n|---|---|---|---|\n| **Dulherai (Dholarai)** | 1137 CE | Founder of Kachhwaha dynasty; captured Dausa from Badgujars and Machi (Ramgarh) from Meenas | Built Jamwa Ramgarh temple dedicated to family deity Jamwai Mata |\n| **Raja Bharmal** | 1547–1573 CE | First Rajput to accept Akbar’s alliance at Sambhar (1562 CE); married daughter Harkha Bai to Akbar | Introduced Mughal administrative and military practices into Rajput statecraft |\n| **Raja Man Singh I** | 1589–1614 CE | Highest mansabdar (7,000); commanded at Haldighati (1576); subdued Afghan rebels in Kabul; conquered Bengal & Orissa | Built Amber Fort palaces, Shila Devi Temple (idol brought from Jessore), Jagat Shiromani Temple (built by Queen Kankawati), and Vrindavan Govind Dev Ji Temple |\n| **Mirza Raja Jai Singh** | 1621–1667 CE | Served 3 Mughal Emperors (Jahangir, Shah Jahan, Aurangzeb); commanded campaigns in Deccan & Kandahar; signed **Treaty of Purandar (1665)** with Chhatrapati Shivaji | Patronized court poet **Bihari** (*Bihari Satsai* - 713 couplets) and Kulpat Mishra |\n| **Sawai Jai Singh II** | 1700–1743 CE | Conferred title *Sawai* by Aurangzeb; formed **Hurda Conference (1734)** to unite Rajputs against Marathas; executed Ashvamedha & Vajapeya Yajnas | Founded **Jaipur City (1727)** with Vidyadhar Bhattacharya; erected **5 Jantar Mantars** (Jaipur Jantar Mantar inscribed as UNESCO World Heritage in 2010); compiled *Zij-i-Muhammad Shahi* and *Jai Singh Kalpadrum* |\n| **Sawai Pratap Singh** | 1778–1803 CE | Defeated Marathas at Battle of Tunga (1787 CE) | Built the iconic **Hawa Mahal (1799)**, 5-storeyed palace designed by Lal Chand Usta; composed poetry under pen-name *Brijnidhi*; patronized Gandharva Baisi (council of 22 scholars) |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "Urban Architecture of Jaipur & Jantar Mantar Instruments",
        "body": "Sawai Jai Singh II transformed 18th-century science and urbanism: 1. **Grid City Plan (Jaipur 1727)**: Designed along a gridiron 9-sector plan (*Navagraha Mandala*) based on Vastu Shastra and Shilpa Shastra by Bengali architect Vidyadhar Bhattacharya, featuring wide right-angle avenues (108 feet wide) lined with uniform terracotta-pink shops. 2. **Jantar Mantar Observatories**: Constructed colossal masonry instruments because brass astrolabes suffered from thermal expansion and wear. Instruments include **Samrat Yantra** (giant equinoctial sundial accurate to 2 seconds), **Jai Prakash Yantra**, and **Ram Yantra**.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC RAS Mains Analytical Traps",
        "body": "Examiner Traps: 1. Do not confuse the 5 Jantar Mantar locations: Delhi, Jaipur, Ujjain, Varanasi, Mathura (Jaipur is the largest and only UNESCO-inscribed site; Mathura observatory is now lost). 2. Distinguish Mirza Raja Jai Singh (served Jahangir/Shah Jahan/Aurangzeb; Treaty of Purandar 1665) from Sawai Jai Singh II (served 7 emperors; founded Jaipur 1727). 3. Hawa Mahal has 5 storeys: Sharad, Ratan, Vichitra, Prakash, and Hawa Mandir (designed by Lal Chand Usta in 1799).",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Mains Paper I - Dynastic History of Rajasthan: Kachhwahas of Amber/Jaipur",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Man Singh I, Sawai Jai Singh II, and Hawa Mahal are recurrently tested."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Indian Architecture & Scientific Heritage",
        "relevance": "MEDIUM",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Jantar Mantar astronomy, Mughal-Rajput synthesis."
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Kachhwahas: Bharmal (1562 Sambhar alliance). Man Singh I (7000 mansab, Bengal/Kabul, Shila Devi, Amber Fort). Mirza Raja (1665 Purandar, Bihari). Sawai Jai Singh II (Jaipur 1727, 5 Jantar Mantars, Hurda 1734). Pratap Singh (Hawa Mahal 1799, Brijnidhi).",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "The Kachhwahas pioneered the Mughal-Rajput alliance under Bharmal in 1562. Raja Man Singh I expanded imperial frontiers to Bengal and Kabul while bringing the Shila Devi idol to Amber. Mirza Raja Jai Singh concluded the Treaty of Purandar (1665) with Shivaji. Sawai Jai Singh II ushered in an enlightenment age: founding Jaipur in 1727, erecting five masonry observatories (Jantar Mantars), and authoring astronomical tables, followed by Sawai Pratap Singh who built Hawa Mahal in 1799.",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "# Kachhwaha Administrative & Scientific Triad\n\n1. **Imperial Diplomacy:** Bharmal (1562 Sambhar) -> Man Singh I (7000 mansab, military conquest) -> Mirza Raja (1665 Purandar).\n2. **Enlightenment & Urbanism:** Sawai Jai Singh II (Jaipur grid-city 1727, 5 Jantar Mantars, Hurda Conference 1734).\n3. **Aesthetic Climax:** Sawai Pratap Singh (Hawa Mahal 1799, Gandharva Baisi council).",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "At which of the following cities did Sawai Jai Singh II NOT construct an astronomical stone observatory (Jantar Mantar)?",
        "options": [
          "Ujjain",
          "Varanasi",
          "Agra",
          "Mathura"
        ],
        "correctAnswer": "Agra",
        "explanation": "Sawai Jai Singh II constructed exactly five astronomical observatories (Jantar Mantars) at Delhi, Jaipur, Ujjain, Varanasi, and Mathura. He did not build an observatory at Agra.",
        "trapExplanation": "Mathura had an observatory (later destroyed), while Agra never had one.",
        "difficulty": "BEGINNER",
        "isPYQ": false,
        "modelAnswer": "Agra"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Describe the key urban planning features of Jaipur city founded by Sawai Jai Singh II in 1727.",
        "options": [],
        "correctAnswer": "Founded on 18 November 1727 by Sawai Jai Singh II and designed by Bengali Brahmin architect Vidyadhar Bhattacharya, Jaipur’s urban planning features: 1. **Vastu Shastra & Gridiron Plan**: Structured on a 9-square grid (*Navagraha Mandala*) with straight, intersecting roads at perfect 90-degree right angles. 2. **Standardized Boulevards**: Broad main avenues (108 feet wide) with uniform pink-terracotta facades. 3. **Functional Zoning**: Dedicated artisan and trade quarters (Johari Bazar for jewelers, Kishanpole for textiles) with continuous perimeter defensive walls and 7 historic entry gates.",
        "explanation": "5-mark answer detailing architect, geometric layout, avenue dimensions, and functional zoning.",
        "trapExplanation": "Failing to mention architect Vidyadhar Bhattacharya and the 9-sector Vastu grid.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 50,
        "modelAnswer": "Founded on 18 November 1727 by Sawai Jai Singh II and designed by Bengali Brahmin architect Vidyadhar Bhattacharya, Jaipur’s urban planning features: 1. **Vastu Shastra & Gridiron Plan**: Structured on a 9-square grid (*Navagraha Mandala*) with straight, intersecting roads at perfect 90-degree right angles. 2. **Standardized Boulevards**: Broad main avenues (108 feet wide) with uniform pink-terracotta facades. 3. **Functional Zoning**: Dedicated artisan and trade quarters (Johari Bazar for jewelers, Kishanpole for textiles) with continuous perimeter defensive walls and 7 historic entry gates."
      }
    ]
  },
  {
    "id": "CON-RAJ-006",
    "order": 6,
    "slug": "peasant-movements-rajasthan-bijolia-begun-meo-bikaner",
    "title": "Agrarian Struggles & Peasant Revolts: Bijolia (44-Year Epic), Begun, Bundi & Meo Movements",
    "shortDefinition": "Feudal exploitation under Dual Bondage, agrarian mobilization, and organized peasant resistance across Rajasthan: Bijolia Movement (1897–1941, Sadhu Sitaram Das, Vijay Singh Pathik, Manikya Lal Verma, 84 cesses, Uparmal Panch Board), Begun Movement (1921–1923, Ramnarayan Choudhary, Trench Commission, Govindpura martyrs), Bundi Barad Movement (Nanakji Bhil martyrdom), and the Meo Peasant Uprising in Mewat.",
    "difficulty": "ADVANCED",
    "topicSlug": "rajasthan-dynastic-history-and-movements",
    "topicTitle": "Rajasthan Dynastic History, Peasant & Tribal Movements",
    "topicOrder": 1,
    "topicDescription": "Dynastic genealogy, military resistance, architectural contributions of Rajput dynasties (Mewar, Marwar, Bikaner, Chauhans, Kachhwahas), peasant and tribal uprisings, and Prajamandal integration.",
    "subjectSlug": "rajasthan-history-culture-geography",
    "claims": [
      {
        "id": "CON-RAJ-006-CLM-1",
        "statement": "The Bijolia Peasant Movement (1897–1941 CE, Mewar Thikana) lasted 44 continuous years without bloodshed, representing the longest non-violent agrarian strike in Indian history against 84 feudal taxes (Lag-Bag), forced unpaid labor (Begar), and exorbitant land revenue (Lata-Kunta system).",
        "claimType": "HISTORICAL_EVENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Dr. Pema Ram, Agrarian Movement in Rajasthan; Sumit Sarkar, Modern India; K.S. Saxena, The Political Movements and Awakening in Rajasthan",
        "excerpt": "Bijolia was the mother of all peasant movements in Rajasthan, setting the template of peaceful non-cooperation and peasant self-governance through the Uparmal Panch Board."
      },
      {
        "id": "CON-RAJ-006-CLM-2",
        "statement": "Vijay Singh Pathik (Bhup Singh Gurjar) assumed leadership of Bijolia in 1916, founded the Uparmal Panch Board (1917) and the hand-written newspaper \"Uparmal ka Danka\", internationalized the struggle through Ganesh Shankar Vidyarthi’s newspaper \"Pratap\" (Kanpur), and established the Rajasthan Seva Sangh at Wardha in 1919.",
        "claimType": "HISTORICAL_EVENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Bhairav Lal Verma, Biography of Vijay Singh Pathik; Rajasthan State Archives Bikaner",
        "excerpt": "Pathik transformed a local agrarian dispute into a national freedom movement, earning Mahatma Gandhi’s praise as \"Pathik is a worker, others are talkers\"."
      },
      {
        "id": "CON-RAJ-006-CLM-3",
        "statement": "The Begun Peasant Movement (1921–1923, Chittorgarh) led by Ramnarayan Choudhary culminated in the signing of a \"Bolshevik Agreement\" between Thakur Rawat Anop Singh and Rajasthan Seva Sangh, which was abrogated by the British Mewar Resident, leading to the Trench Commission and police firing at Govindpura (13 July 1923) where Rupa Ji and Kripa Ji Dhakad were martyred.",
        "claimType": "HISTORICAL_EVENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Trench Commission Report 1923; Rajasthan State Archives; Pema Ram",
        "excerpt": "The British labelled the Begun agreement Bolshevik to suppress agrarian rights, culminating in the brutal firing at Govindpura where martyrs Rupa Ji and Kripa Ji immortalized peasant defiance."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Breaking the Dual Bondage of Jagirdari Oppression",
        "body": "While peasants in British India suffered under zamindars, the peasants of Rajasthan endured a horrifying system called Dual Bondage (*Dohri Ghulami*): oppression by autocratic native rulers and rapacious feudal Jagirdars, both propped up by British military might. In Bijolia, peasants were squeezed by 84 different types of arbitrary cesses—from marrying a daughter (*Chawri Kar*) to the Jagirdar buying a new sword (*Talwar Bandhai*). The peasant uprisings in Rajasthan proved that ordinary tillers of the soil could organize, print underground newspapers, establish autonomous village boards, and force autocratic thikanas to their knees.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Comparative Matrix of Major Peasant Movements in Rajasthan",
        "body": "| Movement / Region | Duration & Core Community | Key Leadership | Major Feudal Grievances | Decisive Turning Points & Martyrs |\n|---|---|---|---|---|\n| **Bijolia Movement**<br>(Bhilwara, Mewar) | **1897–1941 CE**<br>(44 Years)<br>Dhakad community | • **Phase 1 (1897-1915)**: Sadhu Sitaram Das, Nanji & Thakari Patel<br>• **Phase 2 (1916-1923)**: Vijay Singh Pathik, Manikya Lal Verma, Sadhu Sitaram Das<br>• **Phase 3 (1923-1941)**: Jamnalal Bajaj, Haribhau Upadhyaya | 84 arbitrary taxes (*Lag-Bag*); *Chawri Kar* (₹5 marriage tax imposed by Rao Krishna Singh in 1903); *Talwar Bandhai* (succession tax by Rao Prithvi Singh in 1906); *Begar* (forced unpaid labor) | 1917: Established **Uparmal Panch Board** with Manna Patel as Sarpanch; published *Uparmal ka Danka*; nationalized by Ganesh Shankar Vidyarthi’s *Pratap*; 1922 Robert Holland Agreement; final settlement in 1941 under Mewar PM Sir T. Vijayaraghavachari |\n| **Begun Movement**<br>(Chittorgarh) | **1921–1923 CE**<br>Dhakad community | Ramnarayan Choudhary, Vijay Singh Pathik | High land revenue; 53 cesses (*Lag-Bag*); forced labor | 1921 Menal meeting; **\"Bolshevik Agreement\"** between Thakur Anop Singh & Rajasthan Seva Sangh (nullified by British); **Govindpura firing (13 July 1923)**: Trench ordered police firing; **Rupa Ji & Kripa Ji Dhakad martyred** |\n| **Bundi (Barad) Movement** | **1922–1927 CE**<br>Gujjar & peasant communities | Pandit Nayanuram Sharma (Rajasthan Seva Sangh) | Heavy taxes, begar, police harassment | **Dabi Firing (2 April 1923)**: Police officer Ikram Hussain fired on peaceful assembly; **Nanakji Bhil** was martyred while singing the patriotic song *Jhanda Geet*; Devi Lal Gurjar also martyred |\n| **Meo Peasant Revolt**<br>(Alwar-Bharatpur) | **1932–1933 CE**<br>Meo Muslim peasantry | Dr. Mohammad Hadi (Anjuman Khadim-ul-Islam), Yasin Khan | Discriminatory land revenue, ban on religious schools, wild pig menace (*Suar Samasya*) | Maharaja Jai Singh of Alwar deposed and exiled to Paris by British in 1933 |\n| **Bikaner Peasant Movement** | **1930s–1946 CE**<br>Jat peasantry | Magharam Vaidya, Kumbharam Arya, Jivan Ram | Irrigation water cess in Gang Canal; arbitrary cesses | **Khangari incident (1946)**; **Dudhwa Khara Movement** led by Hanuman Singh Arya and Magharam Vaidya; **Raisinghnagar firing (1946)** where **Birbal Singh** was martyred |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "Three Phases of the Bijolia Epic",
        "body": "The 44-year Bijolia struggle progressed in 3 structured phases: 1. **Phase 1 (1897–1915)**: Spontaneous, unorganized phase led by local elders (Sadhu Sitaram Das, Nanji, Thakari Patel); focused on petitions to Maharana Fateh Singh. 2. **Phase 2 (1916–1923)**: Organized institutional phase under Vijay Singh Pathik; establishment of Uparmal Panch Board (1917), Kisan Panchayats, youth wings, national press coverage in *Pratap*, and direct non-cooperation. 3. **Phase 3 (1923–1941)**: Mass Satyagraha integrated with national freedom movement under Jamnalal Bajaj and Haribhau Upadhyaya, concluding in full land restoration in 1941.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC RAS Mains High-Frequency Questions & Traps",
        "body": "Crucial distinctions tested by RPSC: 1. Martyrs matching: Rupa Ji & Kripa Ji = Begun Movement (Govindpura firing 1923); Nanakji Bhil = Bundi Movement (Dabi firing 1923); Birbal Singh = Bikaner (Raisinghnagar 1946); Chhabil Das = Nimuchana (Alwar 1925). 2. Uparmal Panch Board was established in 1917 on Hariyali Amavasya at Berisal village with Manna Patel as Sarpanch. 3. Manikya Lal Verma composed the iconic motivational song *Panchhida* during the Bijolia movement.",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Mains Paper I - History of Rajasthan: Peasant Movements and Freedom Struggle",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Bijolia, Begun, and agrarian martyrs are recurrently asked as 2M, 5M, and 10M questions."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Indian Freedom Struggle - Peasant & Subaltern Movements",
        "relevance": "HIGH",
        "priority": "P1",
        "requiredDepth": "MODERATE",
        "notes": "Bijolia, Vijay Singh Pathik, Kisan Sabha movements."
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Bijolia (1897-1941, 44 yrs, Pathik, 1917 Uparmal Panch Board, Manna Patel, Panchhida). Begun (1921-23, Ramnarayan, 1923 Govindpura - Rupa/Kripa martyred). Bundi (1923 Dabi - Nanakji Bhil martyred).",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Rajasthan’s peasant revolts challenged the oppressive Jagirdari system and arbitrary cesses (Lag-Bag). Bijolia (1897–1941) was the longest non-violent agrarian strike in India, led by Vijay Singh Pathik via the Uparmal Panch Board and Ganesh Shankar Vidyarthi’s newspaper Pratap. Begun (1921–23) witnessed the martyrdom of Rupa Ji and Kripa Ji Dhakad at Govindpura, while the Bundi movement saw Nanakji Bhil martyred at Dabi in 1923.",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "# Rajasthan Peasant Movement Anatomy\n\n1. **Bijolia Tripartite Phasing:** Spontaneous (1897-1915) -> Institutional National (1916-1923, Pathik) -> Congress Convergence (1923-1941, Bajaj/Upadhyaya).\n2. **Martyr Matrix:** Begun = Rupa Ji & Kripa Ji (Govindpura 1923) | Bundi = Nanakji Bhil (Dabi 1923) | Bikaner = Birbal Singh (Raisinghnagar 1946).\n3. **Media & Mobilization:** *Pratap* (Kanpur), *Uparmal ka Danka*, and Verma’s song *Panchhida*.",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "In which year and on which sacred day did Vijay Singh Pathik establish the \"Uparmal Panch Board\" to organize the Bijolia peasantry?",
        "options": [
          "1915 on Vijayadashami",
          "1917 on Hariyali Amavasya",
          "1919 on Makar Sankranti",
          "1921 on Akshaya Tritiya"
        ],
        "correctAnswer": "1917 on Hariyali Amavasya",
        "explanation": "In 1917 CE, on the auspicious day of Hariyali Amavasya, Vijay Singh Pathik founded the \"Uparmal Panch Board\" (Kisan Panchayat) at Berisal village, appointing Shriman Manna Patel as its first Sarpanch to spearhead the Bijolia movement.",
        "trapExplanation": "Rajasthan Seva Sangh was founded in 1919, while Uparmal Panch Board was established in 1917.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "modelAnswer": "1917 on Hariyali Amavasya"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Write a concise note on the martyrdom at Govindpura during the Begun Peasant Movement.",
        "options": [],
        "correctAnswer": "During the Begun Peasant Movement (Chittorgarh) in 1923, the British Mewar Resident rejected the negotiated \"Bolshevik Agreement\" and appointed the Trench Commission. On **13 July 1923**, when thousands of Dhakad peasants gathered for a peaceful assembly at Govindpura village, Commissioner Trench ordered police to open fire on the unarmed gathering. Two brave peasant leaders, **Rupa Ji Dhakad** and **Kripa Ji Dhakad**, were martyred on the spot, galvanizing the anti-feudal struggle across Rajasthan.",
        "explanation": "5-mark answer detailing date, location, commission name, and both martyrs.",
        "trapExplanation": "Confusing Govindpura firing (Rupa/Kripa) with Dabi firing (Nanakji Bhil).",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 50,
        "modelAnswer": "During the Begun Peasant Movement (Chittorgarh) in 1923, the British Mewar Resident rejected the negotiated \"Bolshevik Agreement\" and appointed the Trench Commission. On **13 July 1923**, when thousands of Dhakad peasants gathered for a peaceful assembly at Govindpura village, Commissioner Trench ordered police to open fire on the unarmed gathering. Two brave peasant leaders, **Rupa Ji Dhakad** and **Kripa Ji Dhakad**, were martyred on the spot, galvanizing the anti-feudal struggle across Rajasthan."
      }
    ]
  },
  {
    "id": "CON-RAJ-007",
    "order": 7,
    "slug": "tribal-movements-bhil-revolts-govind-giri-motilal-tejawat",
    "title": "Tribal Movements & Indigenous Resistance: Bhagat Movement (Govind Giri, Mangarh Dham) & Eki Movement (Motilal Tejawat)",
    "shortDefinition": "Socio-religious reform, anti-feudal mobilization, and armed suppression of indigenous tribal communities in southern Rajasthan: The Bhagat Movement of Govind Giri (Samp Sabha 1883, Mangarh Dham massacre 17 November 1913 - \"Jallianwala Bagh of Rajasthan\") and the Eki / Bhomat Movement led by Motilal Tejawat (1921, 21-point Mewar Pukar charter, Neemda massacre 1922).",
    "difficulty": "ADVANCED",
    "topicSlug": "rajasthan-dynastic-history-and-movements",
    "topicTitle": "Rajasthan Dynastic History, Peasant & Tribal Movements",
    "topicOrder": 1,
    "topicDescription": "Dynastic genealogy, military resistance, architectural contributions of Rajput dynasties (Mewar, Marwar, Bikaner, Chauhans, Kachhwahas), peasant and tribal uprisings, and Prajamandal integration.",
    "subjectSlug": "rajasthan-history-culture-geography",
    "claims": [
      {
        "id": "CON-RAJ-007-CLM-1",
        "statement": "Govind Giri (born in a Banjara family of Dungarpur) founded the \"Samp Sabha\" in 1883 to forge social fraternity, temperance, and moral upliftment among Bhil and Garasia tribals, spearheading the Bhagat Movement across the border regions of Mewar, Dungarpur, Banswara, and Idar.",
        "claimType": "HISTORICAL_EVENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Dr. V.K. Vashistha, The Bhagat Movement; National Archives of India; Rajasthan State Archives Bikaner",
        "excerpt": "Govind Giri inspired the Bhils to give up liquor, animal slaughter, and superstition, organizing them through sacred fire altars (Dhuni) and establishing rural tribal panchayats."
      },
      {
        "id": "CON-RAJ-007-CLM-2",
        "statement": "On 17 November 1913 (Margashirsha Purnima), British armed forces (Mewar Bhil Corps and Wellesley Rifles) surrounded Mangarh Hill (Banswara) and opened fire on a peaceful religious congregation of Samp Sabha, slaughtering over 1,500 unarmed Bhil tribals in an atrocity recognized as the \"Mangarh Dham Massacre\" or the \"Jallianwala Bagh of Rajasthan\".",
        "claimType": "HISTORICAL_EVENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Foreign and Political Department Records 1913, National Archives; Mangarh Inquiry Report",
        "excerpt": "Six years before Jallianwala Bagh, over 1,500 Bhil devotees were massacred on the crags of Mangarh Hill for demanding reduction in land revenue and abolition of forced labor."
      },
      {
        "id": "CON-RAJ-007-CLM-3",
        "statement": "Motilal Tejawat (Bawji) organized the \"Eki Movement\" (Bhomat Bhil Movement) in 1921 from Matrikundiya (Rashmi, Chittorgarh), submitted the famous \"Mewar Pukar\" 21-point demand charter to Maharana Fateh Singh, and continued leading the struggle despite the horrific Neemda village massacre (7 March 1922) where Mewar Bhil Corps killed 1,200 tribals.",
        "claimType": "HISTORICAL_EVENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Mewar State Gazette; Dr. Pema Ram; S.S. Saxena, Motilal Tejawat Biography",
        "excerpt": "Tejawat united the Bhils under the oath of \"Eki\" (unity), refusing to pay unconstitutional cesses and demanding the redressal of the 21 demands of Mewar Pukar."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Voice from the Forest: The Tribal Cry for Dignity",
        "body": "For millennia, the Bhils and Garasias lived as autonomous sovereigns of the Aravalli forests, collecting traditional tolls (*Bolai* and *Rakhwali*) and protecting Mewar’s sovereignty. In the late 19th century, British colonial forestry acts, excise restrictions on Mahua liquor, and rapacious feudal taxes reduced them to bonded laborers. The tribal revolts led by Govind Giri and Motilal Tejawat were not mere rebellions; they were profound movements of spiritual rejuvenation, human dignity, and anti-colonial martyrdom.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Comparative Framework: Bhagat Movement vs Eki Movement",
        "body": "| Parameter | Bhagat Movement (Govind Giri) | Eki Movement (Motilal Tejawat) |\n|---|---|---|\n| **Leader & Background** | **Govind Giri** (1858–1931); born in a Banjara family at Basiya village, Dungarpur; disciple of Swami Dayanand Saraswati | **Motilal Tejawat** (1886–1969); born in an Oswal Jain family at Kolyari village (Udaipur); reverently addressed as *Bawji* |\n| **Foundational Body / Launch** | Founded **Samp Sabha (1883)** at Sirohi to foster fraternal unity (*Samp* means brotherhood) among Bhils, Garasias, and Rawats | Launched **Eki Movement (1921)** on Chaitra Purnima at **Matrikundiya** (known as the *\"Haridwar of Rajasthan\"*, Chittorgarh) |\n| **Operational Symbol** | Erected sacred fire pits (**Dhuni**) and unfurled state religious flags (*Nishan*) on hilltops | Made tribals take a sacred oath of unity (**Eki**) by touching the soil and weapons |\n| **Core Charter / Demands** | Temperance (anti-alcohol), hygiene, vegetarianism, abolition of *Begar*, lowering of land tax, freedom to graze cattle | Drafted **\"Mewar Pukar\"** (21-point charter of tribal grievances submitted to Maharana Fateh Singh; 18 demands accepted, 3 rejected) |\n| **Tragic Massacre** | **Mangarh Dham Massacre (17 November 1913)**:<br>• Banswara-Gujarat border hill<br>• British forces (Mewar Bhil Corps, 104th Wellesley Rifles) fired with machine guns<br>• Over **1,500 Bhils martyred**<br>• Govind Giri arrested and imprisoned | **Neemda Massacre (7 March 1922)**:<br>• Neemda village (Vijay Nagar / Idar state)<br>• Mewar Bhil Corps opened fire on peaceful assembly<br>• Over **1,200 tribals martyred**<br>• Tejawat injured, escaped underground |\n| **Post-Massacre Trajectory** | Sentenced to death, commuted to 10 years; exiled to Kamboi (near Jhalod, Gujarat) where he passed away in 1931 | Remained underground in Sirohi; surrendered in 1929 on Mahatma Gandhi’s advice (via Manilal Kothari); imprisoned in Udaipur until 1936 |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "The Mewar Bhil Corps (MBC) & Colonial Subjugation",
        "body": "To crush tribal resistance, the British established the **Mewar Bhil Corps (MBC)** in 1841 with headquarters at **Kherwara** (Udaipur) and a secondary cantonment at Kotra. Ironically, local Bhils were recruited into imperial infantry units and subsequently deployed by British officers to shoot down their own brethren at Mangarh Dham (1913) and Neemda (1922), illustrating the tragic divide-and-rule mechanism of colonial governance.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC RAS Mains Traps & Model Presentation",
        "body": "Examiner Traps: 1. Confusing Mangarh Dham (17 November 1913, Banswara, Govind Giri) with Nimuchana (14 May 1925, Alwar, Peasant massacre labelled by Gandhi as \"Dyerism Double Distilled\"). 2. The 21 demands charter is titled \"Mewar Pukar\", presented by Motilal Tejawat. 3. Matrikundiya is situated at Rashmi tehsil in Chittorgarh district, known as the Haridwar of Rajasthan.",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Mains Paper I - History of Rajasthan: Tribal Movements (Govind Giri & Motilal Tejawat)",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Mangarh Dham, Samp Sabha, Eki Movement, and Mewar Pukar are repeatedly tested."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Modern Indian History - Tribal Revolts",
        "relevance": "HIGH",
        "priority": "P1",
        "requiredDepth": "MODERATE",
        "notes": "Bhagat movement, Mangarh hill massacre, subaltern resistance."
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Govind Giri: Samp Sabha (1883, Sirohi), Bhagat Movement, Mangarh Dham Massacre (17 Nov 1913, 1500+ martyred). Motilal Tejawat: Eki Movement (1921 Matrikundiya), Mewar Pukar (21 demands), Neemda Massacre (1922).",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Rajasthan’s tribal resistance was spearheaded by Govind Giri and Motilal Tejawat. Govind Giri established the Samp Sabha in 1883 for moral, social, and economic upliftment of Bhils, culminating in the horrific Mangarh Dham massacre on 17 November 1913 where over 1,500 Bhils were gunned down by British troops. In 1921, Motilal Tejawat launched the Eki Movement from Matrikundiya, presenting the 21-point Mewar Pukar and persevering despite the 1922 Neemda massacre.",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "# Tribal Resistance Architecture in Southern Rajasthan\n\n1. **Socio-Religious Reform:** Govind Giri (Samp Sabha 1883, Dhuni worship) -> Bhagat movement across Bhil-Garasia belt.\n2. **Colonial Repression:** Mangarh Dham Massacre (17 Nov 1913, 1,500+ killed by Mewar Bhil Corps).\n3. **Agrarian-Political Mobilization:** Motilal Tejawat (Eki movement 1921, Matrikundiya, Mewar Pukar 21 demands) -> Neemda Massacre (1922).",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "On which date did the horrific Mangarh Dham massacre take place, where British troops surrounded Mangarh Hill and martyred over 1,500 Bhil tribals?",
        "options": [
          "13 April 1919",
          "17 November 1913",
          "7 March 1922",
          "14 May 1925"
        ],
        "correctAnswer": "17 November 1913",
        "explanation": "The Mangarh Dham massacre took place on 17 November 1913 (Margashirsha Purnima) on Mangarh Hill (situated on the border of Banswara and Gujarat), where the Mewar Bhil Corps and British forces gunned down over 1,500 peaceful Bhil followers of Govind Giri.",
        "trapExplanation": "13 April 1919 was Jallianwala Bagh; 7 March 1922 was the Neemda massacre; 14 May 1925 was Nimuchana.",
        "difficulty": "BEGINNER",
        "isPYQ": false,
        "modelAnswer": "17 November 1913"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "What was \"Mewar Pukar\"? Enumerate its key context and significance in the tribal movement of Rajasthan.",
        "options": [],
        "correctAnswer": "**\"Mewar Pukar\"** was a 21-point demand charter drafted and submitted by tribal leader **Motilal Tejawat** to Maharana Fateh Singh of Mewar in 1921 during the launch of the **Eki Movement**.\n\n**Significance & Context:**\n1. It articulated the acute grievances of the Bhils and peasants against 84 oppressive feudal cesses (*Lag-Bag*), unpaid bonded labor (*Begar*), and stringent forest laws.\n2. The Maharana accepted 18 of the 21 demands, rejecting 3 critical demands relating to forests, hunting reserves (wild boars), and state grazing rights.\n3. The refusal to concede the remaining demands galvanized the Bhil community to observe total non-cooperation under the sacred pledge of \"Eki\" (unity).",
        "explanation": "5-mark answer specifying leader, recipient, number of demands (21 total, 18 accepted, 3 rejected), and political impact.",
        "trapExplanation": "Omitting that 18 demands were actually accepted by the Maharana while 3 were rejected.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 50,
        "modelAnswer": "**\"Mewar Pukar\"** was a 21-point demand charter drafted and submitted by tribal leader **Motilal Tejawat** to Maharana Fateh Singh of Mewar in 1921 during the launch of the **Eki Movement**.\n\n**Significance & Context:**\n1. It articulated the acute grievances of the Bhils and peasants against 84 oppressive feudal cesses (*Lag-Bag*), unpaid bonded labor (*Begar*), and stringent forest laws.\n2. The Maharana accepted 18 of the 21 demands, rejecting 3 critical demands relating to forests, hunting reserves (wild boars), and state grazing rights.\n3. The refusal to concede the remaining demands galvanized the Bhil community to observe total non-cooperation under the sacred pledge of \"Eki\" (unity)."
      }
    ]
  },
  {
    "id": "CON-RAJ-008",
    "order": 8,
    "slug": "prajamandal-movement-democratic-awakening-rajasthan-integration",
    "title": "Prajamandal Movement & The 7-Stage Integration of Rajasthan (1948–1956)",
    "shortDefinition": "Democratic awakening in princely states under Prajamandals (Jaipur 1931, Marwar 1934, Mewar 1938, Bikaner 1936, Sirohi 1939) demanding responsible government, and the monumental 7-stage diplomatic integration of Rajasthan orchestrated by Sardar Vallabhbhai Patel and V.P. Menon (Matsya Union to Reorganization Act 1 November 1956).",
    "difficulty": "ADVANCED",
    "topicSlug": "rajasthan-dynastic-history-and-movements",
    "topicTitle": "Rajasthan Dynastic History, Peasant & Tribal Movements",
    "topicOrder": 1,
    "topicDescription": "Dynastic genealogy, military resistance, architectural contributions of Rajput dynasties (Mewar, Marwar, Bikaner, Chauhans, Kachhwahas), peasant and tribal uprisings, and Prajamandal integration.",
    "subjectSlug": "rajasthan-history-culture-geography",
    "claims": [
      {
        "id": "CON-RAJ-008-CLM-1",
        "statement": "The Prajamandal movement was launched across princely states following the 1938 Haripura Congress session resolution permitting direct Congress moral and organizational support, demanding the establishment of responsible government (Uttardayi Shasan) under the aegis of the rulers while abolishing feudal privileges.",
        "claimType": "HISTORICAL_EVENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "All India States Peoples Conference (AISPC) Records; B.L. Pangariya, State Politics in Rajasthan; Sumit Sarkar",
        "excerpt": "The Haripura Resolution of 1938 recognized the movements in Indian princely states as an integral component of India’s struggle for independence, inspiring Prajamandal formations across Rajputana."
      },
      {
        "id": "CON-RAJ-008-CLM-2",
        "statement": "The integration of 19 princely states, 3 chiefships (Kushalgarh, Lawa, Neemrana), and the centrally administered territory of Ajmer-Merwara was achieved in 7 distinct stages between 17 March 1948 (Matsya Union) and 1 November 1956 (States Reorganization Act).",
        "claimType": "HISTORICAL_EVENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "V.P. Menon, The Story of the Integration of the Indian States; White Paper on Indian States (1950)",
        "excerpt": "The geographical and political entity of modern Rajasthan was forged in seven sequential stages under the states ministry led by Sardar Patel and V.P. Menon."
      },
      {
        "id": "CON-RAJ-008-CLM-3",
        "statement": "Stage 4 (Greater Rajasthan, 30 March 1949) merged the four colossal princely states of Jaipur, Jodhpur, Bikaner, and Jaisalmer with United Rajasthan, inaugurating Rajasthan Day (Rajasthan Diwas on 30 March), with Maharaja Man Singh II of Jaipur sworn in as Rajpramukh and Hiralal Shastri as first Prime Minister/Chief Minister.",
        "claimType": "HISTORICAL_EVENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Government of India States Ministry Gazette; Pangariya, Rajasthan Integration History",
        "excerpt": "With the accession of the four premier states of Jaipur, Jodhpur, Bikaner, and Jaisalmer on 30 March 1949, Greater Rajasthan came into being, forever celebrated as Rajasthan Day."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "From Autocratic Fiefdoms to a Unified Democratic State",
        "body": "Imagine uniting 19 proud, mutually suspicious princely dynasties—each with its own flag, currency, army, and customs borders—into a single democratic state within just eight years. This miracle was accomplished through two converging forces: from below, the heroic Prajamandal freedom fighters endured jail and police lathis demanding responsible governance; from above, Sardar Vallabhbhai Patel and V.P. Menon utilized firm diplomacy and privy purses to assemble modern Rajasthan stage by stage.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "The 7 Stages of Rajasthan Integration Master Matrix",
        "body": "| Stage No. | Stage Name | Formation Date | Merged Princely States & Territories | Capital | Rajpramukh | Prime Minister / Chief Minister |\n|---|---|---|---|---|---|---|\n| **Stage 1** | **Matsya Union** | 18 March 1948 | Alwar, Bharatpur, Dholpur, Karauli + Neemrana Chiefship (Name suggested by K.M. Munshi) | Alwar | Maharaja Udaybhan Singh (Dholpur) | Shobha Ram Kumawat (Alwar) |\n| **Stage 2** | **Rajasthan Union** (Former Rajasthan) | 25 March 1948 | 9 States: Banswara, Bundi, Dungarpur, Jhalawar, Kishangarh, Kota, Pratapgarh, Shahpura, Tonk + Kushalgarh Chiefship | Kota | Maharao Bhim Singh II (Kota) | Gokul Lal Asawa (Shahpura) |\n| **Stage 3** | **United Rajasthan** | 18 April 1948 | Rajasthan Union + **Mewar (Udaipur)** (Inaugurated by Pt. Jawaharlal Nehru) | Udaipur | Maharana Bhupal Singh (Udaipur) | Manikya Lal Verma (Mewar) |\n| **Stage 4** | **Greater Rajasthan** (*Brihat Rajasthan*) | **30 March 1949** (*Rajasthan Diwas*) | United Rajasthan + **Jaipur, Jodhpur, Bikaner, Jaisalmer** + Lawa Chiefship (P. Satyanarayan Rao Committee recommendations) | Jaipur | Maharaja Man Singh II (Jaipur); Maharana Bhupal Singh made *Maharajpramukh* | Pt. Hiralal Shastri |\n| **Stage 5** | **United States of Greater Rajasthan** | 15 May 1949 | Greater Rajasthan + **Matsya Union** (Merged on Dr. Shankarrao Deo Committee recommendation) | Jaipur | Maharaja Man Singh II | Pt. Hiralal Shastri |\n| **Stage 6** | **United Rajasthan** | 26 January 1950 | Stage 5 + **Sirohi** (excluding Abu and Delwara tehsils merged into Bombay state) | Jaipur | Maharaja Man Singh II | Pt. Hiralal Shastri (became first designated Chief Minister) |\n| **Stage 7** | **Reorganized Modern Rajasthan** | **1 November 1956** | Stage 6 + **Abu-Delwara** (restored from Bombay via Fazal Ali Commission) + **Ajmer-Merwara** + **Sunel Tappa** (from MP); Sironj sub-district ceded to MP | Jaipur | Post of Rajpramukh abolished; **Gurumukh Nihal Singh** appointed 1st Governor | **Mohan Lal Sukhadia** (Chief Minister) |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "The Prajamandal Formation Chronology & Leaders",
        "body": "The key Prajamandals and their pioneers: 1. **Jaipur (1931)**: First Prajamandal founded by Kapoorchand Patni; revived in 1936 by Jamnalal Bajaj and Hiralal Shastri; Gentleman’s Agreement (1942) with PM Mirza Ismail. 2. **Marwar/Jodhpur (1934)**: Founded by Jai Narayan Vyas, Bhanwarlal Saraf, and Anandraj Surana. 3. **Bikaner (1936)**: Founded at **Calcutta** by Magharam Vaidya. 4. **Mewar (1938)**: Founded by Manikya Lal Verma; Balwant Singh Mehta first President. 5. **Sirohi (1939)**: Founded at **Bombay** by Gokulbhai Bhatt (known as the \"Gandhi of Rajasthan\").",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC RAS Mains Analytical Traps",
        "body": "Examiner Traps: 1. Prajamandals founded OUTSIDE the state: Bikaner Prajamandal (founded in Calcutta, 1936), Sirohi Prajamandal (founded in Bombay, 1939), Bharatpur Prajamandal (founded in Rewari, 1938). 2. Committees in integration: Shankarrao Deo Committee (recommended merging Matsya Union into Greater Rajasthan); P. Satyanarayan Rao Committee (fixed Jaipur as capital, High Court at Jodhpur, Education at Bikaner, Mining at Udaipur, Agriculture at Bharatpur); Fazal Ali States Reorganization Commission (restored Abu-Delwara and merged Ajmer-Merwara in 1956).",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Mains Paper I - History of Rajasthan: Prajamandal Movements and Integration of Rajasthan",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Integration stages and Prajamandal leaders are guaranteed questions in Prelims & Mains."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Indian Freedom Struggle - Post-Independence Integration",
        "relevance": "HIGH",
        "priority": "P1",
        "requiredDepth": "MODERATE",
        "notes": "Sardar Patel, states integration, Fazal Ali commission."
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Prajamandals: Jaipur 1931 (Patni/Bajaj), Mewar 1938 (Verma), Bikaner 1936 (Calcutta), Sirohi 1939 (Bombay, Bhatt). Integration: 7 stages (18 March 1948 Matsya to 1 Nov 1956). 30 March 1949 = Rajasthan Day (Stage 4).",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "The democratic transformation of Rajasthan combined Prajamandal mass struggles (demanding responsible government) with the 7-stage integration (1948–1956) led by Sardar Patel. Highlights: Matsya Union (Stage 1, 18 March 1948); Greater Rajasthan (Stage 4, 30 March 1949, merging Jaipur, Jodhpur, Bikaner, Jaisalmer—celebrated as Rajasthan Day); and Final Reorganization on 1 November 1956 incorporating Ajmer-Merwara and Abu-Delwara while replacing the Rajpramukh with the Governor.",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "# Rajasthan Integration 7-Stage Architectural Ladder\n\nStage 1: Matsya (18 Mar 1948) -> Stage 2: Rajasthan Union (25 Mar 1948) -> Stage 3: United Rajasthan (+Mewar, 18 Apr 1948) -> Stage 4: Greater Rajasthan (+JJBJ, 30 Mar 1949) -> Stage 5: USGR (+Matsya, 15 May 1949) -> Stage 6: United (+Sirohi, 26 Jan 1950) -> Stage 7: Modern Reorganized (+Ajmer/Abu, 1 Nov 1956).",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "On the recommendation of which committee was the Matsya Union merged into Greater Rajasthan to form the United States of Greater Rajasthan on 15 May 1949?",
        "options": [
          "P. Satyanarayan Rao Committee",
          "Dr. Shankarrao Deo Committee",
          "Fazal Ali Commission",
          "K.M. Munshi Committee"
        ],
        "correctAnswer": "Dr. Shankarrao Deo Committee",
        "explanation": "The Dr. Shankarrao Deo Committee (with members R.K. Sidhwa and Prabhu Dayal Himmat Singhka) ascertained public opinion in Alwar and Bharatpur and recommended merging the Matsya Union into Greater Rajasthan on 15 May 1949 (Stage 5).",
        "trapExplanation": "P. Satyanarayan Rao committee allocated state capitals and departments, while Shankarrao Deo committee decided the Matsya Union merger.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "modelAnswer": "Dr. Shankarrao Deo Committee"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Highlight the administrative department allocations recommended by the P. Satyanarayan Rao Committee during the formation of Greater Rajasthan.",
        "options": [],
        "correctAnswer": "The **P. Satyanarayan Rao Committee** resolved inter-princely rivalries by distributing key state institutions across major cities: 1. **State Capital**: Awarded to **Jaipur**. 2. **Judiciary (High Court)**: Assigned to **Jodhpur**. 3. **Education Department**: Allocated to **Bikaner**. 4. **Mineral & Mining Department**: Stationed at **Udaipur**. 5. **Agriculture Department**: Placed at **Bharatpur** (and Forest/Customs at Kota).",
        "explanation": "5-mark answer listing the committee name and all 5 specific institutional allocations.",
        "trapExplanation": "Conflating the High Court location with the capital or missing the mining department at Udaipur.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 50,
        "modelAnswer": "The **P. Satyanarayan Rao Committee** resolved inter-princely rivalries by distributing key state institutions across major cities: 1. **State Capital**: Awarded to **Jaipur**. 2. **Judiciary (High Court)**: Assigned to **Jodhpur**. 3. **Education Department**: Allocated to **Bikaner**. 4. **Mineral & Mining Department**: Stationed at **Udaipur**. 5. **Agriculture Department**: Placed at **Bharatpur** (and Forest/Customs at Kota)."
      }
    ]
  },
  {
    "id": "CON-RAJ-009",
    "order": 9,
    "slug": "folk-deities-panch-pir-lok-devtas-devis-pabu-ramdev-teja",
    "title": "Folk Deities & Sacred Protectors: Panch Pir (Pabu, Ramdev, Goga, Harbu, Mehaji), Tejaji & Lok Devis",
    "shortDefinition": "Indigenous pastoral theology, anti-caste syncretism, and martial martyrdom of Rajasthan’s Lok Devtas and Lok Devis: The five cardinal Panch Pirs (Pabuji, Ramdevji, Gogaji, Harbuji, Mehaji Mangalia), Veer Tejaji (Kalyan Dev, snake-cure), Devnarayanji (Bagrawat epic), Karni Mata (Rats of Deshnok), and Shila Devi.",
    "difficulty": "ADVANCED",
    "topicSlug": "rajasthan-culture-art-and-dialects",
    "topicTitle": "Rajasthan Art, Architecture, Culture & Dialects",
    "topicOrder": 2,
    "topicDescription": "Folk deities (Panch Pir), Sant Parampara, UNESCO forts, performing arts, folk dances, musical instruments, miniature painting schools, and Rajasthani linguistic dialects.",
    "subjectSlug": "rajasthan-history-culture-geography",
    "claims": [
      {
        "id": "CON-RAJ-009-CLM-1",
        "statement": "Rajasthan’s sacred pastoral tradition reveres the \"Panch Pir\" (Five Holy Pirs venerated equally by Hindus and Muslims): Pabuji, Ramdevji, Gogaji, Harbuji, and Mehaji Mangalia, as recorded in the popular folk couplet: \"Pabu, Harbu, Ramde, Goga, Geha De; Panchon Pir Padhariyo, Gogo ji Jeha De\".",
        "claimType": "CULTURAL_HERITAGE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Dr. Manohar Swami, Folk Deities of Rajasthan; Komal Kothari, Rajasthan Lok Sahitya",
        "excerpt": "The Panch Pirs transcended religious dogmas, giving their lives to protect cows and eradicate untouchability, worshipped by both communities."
      },
      {
        "id": "CON-RAJ-009-CLM-2",
        "statement": "Baba Ramdevji (Tanwar Rajput of Runicha/Ramdevra, Jaisalmer) is the only Lok Devta who was an accomplished poet (authoring \"Chaubis Baniya\"), founded the Kamadia Panth to abolish untouchability, initiated the Terah Taali dance, and is venerated by Muslims as \"Ramsah Pir\".",
        "claimType": "CULTURAL_HERITAGE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Ramdevra Temple Trust Records; Dr. Mahendra Bhanawat, Lok Devta Ramdevji",
        "excerpt": "Ramdevji synthesized social egalitarianism with spiritual devotion, initiating Dalit saint Dali Bai as his spiritual sister and taking living Samadhi at Runicha in 1458 CE."
      },
      {
        "id": "CON-RAJ-009-CLM-3",
        "statement": "Pabuji (Rathore of Kolumand, Phalodi) is worshipped as the incarnation of Lakshmana, protector of camels (introducing female camels/Sandhis to Marwar), whose heroic sacrifice defending Deval Charani’s cows from Jind Rao Khichi is performed via Pabuji ki Phad (longest folk scroll painting recited by Nayak/Bhopa priests with the Ravanhattha instrument).",
        "claimType": "CULTURAL_HERITAGE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "J.D. Smith, The Epic of Pabuji; National Folklore Support Centre; Komal Kothari",
        "excerpt": "Pabuji ki Phad is Rajasthan’s most celebrated narrative folk scroll, depicting Pabuji riding his black mare Kesar Kalmi to protect the pastoral economy."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Divinity Born of Sacrifice: Guardians of the Desert",
        "body": "Why are Rajasthan’s deities not distant mythological gods residing on Mount Kailash or Vaikuntha, but mortal human heroes who walked the dusty sand dunes? In the unforgiving desert, life depended on two treasures: livestock (cows and camels) and community water wells. The Lok Devtas were real men and women who stood unarmed against cattle-raiding bandits, sucked snake venom from peasants’ wounds, and broke rigid caste taboos to embrace the destitute. In dying for their people, they became eternal gods.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Master Matrix of Rajasthan Lok Devtas (Folk Deities)",
        "body": "| Lok Devta | Birthplace & Main Shrine | Mount / Sacred Animal | Core Deity Attributes & Deeds | Sacred Texts, Traditions & Symbols |\n|---|---|---|---|---|\n| **Baba Ramdevji** | Born: Undu-Kashmir (Barmer)<br>Shrine: **Runicha (Ramdevra)**, Pokhran, Jaisalmer | Blue Stallion (*Neela Ghoda*) | Incarnation of Krishna; venerated as *Ramsah Pir* by Muslims; eliminated demon Bhairav; established **Kamadia Panth**; adopted Dalit saint **Dali Bai** | Authored ***Chaubis Baniya*** (only deity-poet); 5-colored flag called **Neja**; night vigil called **Jamma**; Terah Taali dance performed by Kamad women |\n| **Pabuji** | Born & Shrine: **Kolumand** (Phalodi) | Black Mare (**Kesar Kalmi**) | Incarnation of **Lakshmana**; Plaque Deity (*Plague-Rakshak*); Camel protector (*Unton ke Devta*, Rebari/Raikas revere him); sacrificed life protecting Deval Charani’s cows against Jind Rao Khichi at Dhechu (1276 CE) | **Pabuji ki Phad** (read by Bhopas using **Ravanhattha**); **Pabuji ke Paware** (sung using **Mate** drum); biography *Pabu Prakash* by Morji Ashiya |\n| **Gogaji** | Born: Dadrewa (Churu)<br>Shrine: **Gogamedi** (Hanumangarh) & **Goga ji ki Oladi** (Sanchore) | Blue Mare (**Neeli Ghori**) | Snake Deity (*Nagon ke Devta*); fought Mahmud Ghaznavi; protected cows against cousin brothers Arjun-Sarjan | Shrine shaped like a mosque with inscribed \"Bismillah\"; severed head fell at Dadrewa (**Shirsh Medi**), body fell at Gogamedi (**Dhur Medi**); priest called Chahal (Muslim) and Hindu priest |\n| **Veer Tejaji** | Born: Khadnal (Nagaur)<br>Shrine: **Parbatsar** (Nagaur) & Surura/Sendariya (Ajmer) | Mare named **Leelan** (Singhari) | **Not in Panch Pir** (Jat hero); Snake-bite cure deity; sacrificed life rescuing Lachha Gujari’s cows from Meena raiders; tongue bitten by snake Takshak at Sendariya | Parbatsar cattle fair on Bhadrapada Shukla Dashami (*Teja Dashami*); farmers tie **Teja Teenti** (rakhi) to plows and oxen |\n| **Devnarayanji** | Born: Asind (Bhilwara)<br>Shrine: **Devmali** (Beawar) & Jodhpuria (Tonk) | Green Horse (*Leelagar*) | Incarnation of **Vishnu**; Gurjar pastoral deity; medicine deity (used Neem and Cow Dung); son of Bhoja Bagrawat | **Longest Phad in Rajasthan** (postal stamp issued in 1992); read by Gurjar Bhopas using **Jantar** instrument; worshipped with bricks and Neem leaves |\n| **Harbuji** | Shrine: **Bengti** (Phalodi) | Cart (*Chhakda Gadi*) | Contemporary and cousin of Ramdevji; blessed Rao Jodha with a katar (dagger) to reclaim Mandore; supplied grass to disabled cattle | Devotees worship his wooden bullock cart (*Harbuji ki Gadi*) at Bengti |\n| **Mehaji Mangalia** | Shrine: **Bapini** (Jodhpur/Phalodi) | Steed named **Kiran Kabra** | Fought Jaisalmer ruler Rao Ranagdev to protect cows; devotees observe Janmashtami as his sacred festival | Mangalia Rajput lineage bards (Bhopas) do not increase dynastic progeny by birth (adopt sons) |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "The Art and Ritual of Phad Recitation",
        "body": "Phad painting is a unique Rajasthani folk narrative art form practiced exclusively by the **Chhipa (Joshi) community of Shahpura** (Bhilwara): 1. Master painters (like Shrilal Joshi and Pratik Joshi) illustrate the entire life story of Pabuji or Devnarayanji on long hand-woven canvas scrolls using organic vegetable colors. 2. At night, Bhopa-Bhopi duos travel from village to village, unfurling the Phad against bamboo poles. 3. The Bhopa plays the **Ravanhattha** (for Pabuji) or **Jantar** (for Devnarayanji), singing traditional ballads while the Bhopi holds an oil lamp to illuminate the specific painted episode being sung.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC RAS Prelims & Mains Traps",
        "body": "Top Traps: 1. **Panch Pir Exclusion Trap**: Candidates frequently mistakenly include Veer Tejaji in the Panch Pirs! Tejaji is hugely revered across Rajasthan, but he is NOT part of the Panch Pir (Panch Pirs are strictly: Pabu, Harbu, Ramdev, Goga, Mehaji). 2. Musical instrument pairing: Pabuji ki Phad = Ravanhattha; Devnarayanji ki Phad = Jantar; Pabuji ke Paware = Mate drum; Terah Taali dance = Manjeeras (13 brass cymbals tied on body).",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Mains Paper I - Art & Culture of Rajasthan: Religious Life, Lok Devtas and Lok Devis",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Panch Pir, Tejaji, Ramdevji, Phad tradition are core recurring topics."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Indian Culture - Folk Traditions",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Phad painting, regional folk devotion."
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Panch Pir: Pabu (Kolumand, camels, Ravanhattha Phad), Ramdev (Runicha, Kamadia, Chaubis Baniya), Goga (Dadrewa/Gogamedi, Ghaznavi), Harbu (Bengti cart), Mehaji (Bapini). Note: Tejaji is NOT in Panch Pir!",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Rajasthan’s folk deities emerged from pastoral defense and anti-caste martyrdom. The five Panch Pirs (Pabuji, Ramdevji, Gogaji, Harbuji, Mehaji Mangalia) are venerated across religious lines. Baba Ramdevji founded the Kamadia Panth and authored Chaubis Baniya; Pabuji introduced camels to Marwar and is celebrated in the Ravanhattha Phad tradition; and Veer Tejaji sacrificed his life rescuing cows from bandits, revered as the supreme snake-cure deity.",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "# Rajasthan Pastoral Sacred Ecology\n\n1. **Panch Pir Framework:** Pabu (camel/Plague) | Ramdev (anti-caste/Runicha) | Goga (serpent/Dadrewa) | Harbu (cattle cart) | Mehaji (Bapini).\n2. **Epic Phad Scrolls:** Shahpura Joshi painters -> Pabuji Phad (Ravanhattha) vs Devnarayanji Phad (Jantar, longest scroll).\n3. **Deity-Instrument Linkage:** Pabuji = Ravanhattha | Devnarayan = Jantar | Ramdev = Terah Taali/Manjeera | Tejaji = Deru/Algoza.",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "Who among the following celebrated folk deities of Rajasthan is EXCLUDED from the canonical \"Panch Pir\"?",
        "options": [
          "Baba Ramdevji",
          "Veer Tejaji",
          "Harbuji",
          "Mehaji Mangalia"
        ],
        "correctAnswer": "Veer Tejaji",
        "explanation": "Veer Tejaji is one of the most revered folk deities of Rajasthan, but he is NOT included in the canonical \"Panch Pir\". The five Panch Pirs are strictly Pabuji, Ramdevji, Gogaji, Harbuji, and Mehaji Mangalia.",
        "trapExplanation": "The #1 repeated trick in RPSC exams: confusing Tejaji with the Panch Pir group.",
        "difficulty": "BEGINNER",
        "isPYQ": false,
        "modelAnswer": "Veer Tejaji"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Explain the socio-religious significance of Baba Ramdevji’s \"Kamadia Panth\" in Rajasthan.",
        "options": [],
        "correctAnswer": "**Baba Ramdevji** founded the **Kamadia Panth** in the 15th century as a radical social and spiritual reform movement: 1. **Eradication of Untouchability**: Dismantled high-caste monopolies over spirituality by admitting Dalits (Meghwals) as core initiates, adopting Dalit saint Dali Bai as his spiritual sister. 2. **Cultural Expression**: Developed the **Terah Taali dance** (performed by Kamad women tying 13 brass manjeeras across the body) and nocturnal congregational chanting (*Jamma Jagran*). 3. **Communal Harmony**: Synthesized Hindu Bhakti with Islamic Sufi reverence, earning veneration as *Ramsah Pir*.",
        "explanation": "5-mark answer detailing the founder, anti-caste core, Terah Taali dance, and communal syncretism.",
        "trapExplanation": "Omitting Dali Bai and the Terah Taali dance associated with the Kamadia Panth.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 50,
        "modelAnswer": "**Baba Ramdevji** founded the **Kamadia Panth** in the 15th century as a radical social and spiritual reform movement: 1. **Eradication of Untouchability**: Dismantled high-caste monopolies over spirituality by admitting Dalits (Meghwals) as core initiates, adopting Dalit saint Dali Bai as his spiritual sister. 2. **Cultural Expression**: Developed the **Terah Taali dance** (performed by Kamad women tying 13 brass manjeeras across the body) and nocturnal congregational chanting (*Jamma Jagran*). 3. **Communal Harmony**: Synthesized Hindu Bhakti with Islamic Sufi reverence, earning veneration as *Ramsah Pir*."
      }
    ]
  },
  {
    "id": "CON-RAJ-010",
    "order": 10,
    "slug": "sant-parampara-nirguna-saguna-dadu-jasnath-jambhoji-mira",
    "title": "Sant Parampara & Bhakti Traditions: Nirguna & Saguna Reformers (Jambhoji, Jasnathji, Dadu Dayal, Mirabai & Charan Dasi)",
    "shortDefinition": "Ecological, anti-ritual, and devotional philosophy of Rajasthan’s medieval saint traditions: Guru Jambhoji (Bishnoi sect, 29 rules, environmental martyrdom at Khejarli 1730), Jasnathji (36 rules, Agni Nritya), Dadu Dayal (\"Kabir of Rajasthan\", Dadu Panth, 52 Stambhas), Mirabai (Saguna Madhurya Bhakti), and Saint Charan Das (42 rules, predicted Nadir Shah’s invasion).",
    "difficulty": "ADVANCED",
    "topicSlug": "rajasthan-culture-art-and-dialects",
    "topicTitle": "Rajasthan Art, Architecture, Culture & Dialects",
    "topicOrder": 2,
    "topicDescription": "Folk deities (Panch Pir), Sant Parampara, UNESCO forts, performing arts, folk dances, musical instruments, miniature painting schools, and Rajasthani linguistic dialects.",
    "subjectSlug": "rajasthan-history-culture-geography",
    "claims": [
      {
        "id": "CON-RAJ-010-CLM-1",
        "statement": "Guru Jambhoji (1451–1536 CE, born at Pipasar, Nagaur) founded the Bishnoi sect at Samrathal Dhora in 1485 CE, enunciating 29 ecological and moral commandments (20 + 9 = Bish-Noi) that prohibit cutting green trees (esp. Khejri) and killing animals, culminating in the historic Khejarli Massacre of 1730 CE where Amrita Devi Bishnoi and 363 martyrs sacrificed their lives.",
        "claimType": "CULTURAL_HERITAGE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Jambhoji, Shabadwani; K.S. Valdiya, Environmental Traditions of Bishnois; Rajasthan Forest Department",
        "excerpt": "Jambhoji declared: \"Sir santhey rookh rahe to bhi sasto jaan\" (If a tree is saved even at the cost of one’s severed head, consider it a cheap bargain)."
      },
      {
        "id": "CON-RAJ-010-CLM-2",
        "statement": "Dadu Dayal (1544–1603 CE), acclaimed as the \"Kabir of Rajasthan\", preached Nirguna Brahma in the vernacular Dhoondhari language, met Mughal Emperor Akbar at Fatehpur Sikri in 1585 CE through Raja Bhagwant Das, established his apex seat at Naraina (Jaipur), and organized his disciples into 52 branches called \"52 Stambhas\" (including Sundar Das and Rajjab Ji).",
        "claimType": "CULTURAL_HERITAGE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Dadu Dayal ri Vani; W.G. Orr, A Sixteenth-Century Indian Mystic; K.M. Sen",
        "excerpt": "Dadu Dayal rejected the caste system, temple idol worship, and scriptural dogmas, founding the non-sectarian path of Brahma Sampradaya (Parabrahma Sampradaya)."
      },
      {
        "id": "CON-RAJ-010-CLM-3",
        "statement": "Jaswant Singh/Jasnathji (1482–1506 CE) established the Jasnathi Sampradaya at Katariyasar (Bikaner) formulating 36 sacred principles, whose Siddha followers perform the miraculous \"Agni Nritya\" (Fire Dance) on smouldering live charcoal embers while chanting the sacred battle cry \"Fateh! Fateh!\".",
        "claimType": "CULTURAL_HERITAGE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Dr. Pema Ram, Rajasthan ke Dharmik Andolan; Sangeet Natak Akademi Archives",
        "excerpt": "The Siddhas of Katariyasar dance barefoot on burning wood coals without blister or burn, embodying the ascetic yogic power of Jasnathji."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Desert Sages: Ecological Sanctity and Boundless Love",
        "body": "Centuries before the modern West conceived environmental sustainability, an illiterate shepherd in the Thar Desert formulated 29 commandments declaring that trees and blackbucks were sacred brothers of humanity. When the Maharaja of Jodhpur sent axemen to fell the Khejri trees of Khejarli in 1730, Amrita Devi Bishnoi wrapped her arms around the trunk and offered her neck. In Rajasthan, spirituality was never an abstract ivory-tower philosophy; it was lived as radical compassion for trees, animals, and the divine beloved.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Master Matrix of Rajasthan Medieval Sant Traditions",
        "body": "| Saint / Reformer | Sect / Sampradaya | Foundational Principles & Seat | Literary Works | Unique Traditions / Historical Events |\n|---|---|---|---|---|\n| **Guru Jambhoji** (1451–1536) | **Bishnoi Sampradaya** (Founded 1485 at Samrathal Dhora) | **29 Rules** (Conservation of Khejri, protection of blackbucks, hygiene, prohibition of alcohol/tobacco); Main shrine: **Mukam** (Nokha, Bikaner) | *Shabadwani*, *Jambha Gita*, *Jambha Sagar* | **Khejarli Massacre (1730 CE)**: 363 Bishnois led by **Amrita Devi** sacrificed lives during reign of Maharaja Abhai Singh; World’s 1st tree protection martyrs |\n| **Jasnathji** (1482–1506) | **Jasnathi Sampradaya** (Founded at age 24) | **36 Rules**; Revere peacock feathers and Jal tree; Apex seat: **Katariyasar** (Bikaner); Sultan Sikandar Lodi granted him land | *Simhudhara*, *Koda* | **Agni Nritya (Fire Dance)**: Siddha ascetics dance over glowing charcoal embers shouting \"Fateh! Fateh!\"; took living samadhi at 24 years |\n| **Dadu Dayal** (1544–1603) | **Dadu Panth** (Brahma Sampradaya) | Nirguna Bhakti; Apex seat at **Naraina** (Jaipur); Disciples organized into **52 Stambhas** (pillars); Met Akbar at Fatehpur Sikri (1585) | *Dadu Dayal ri Vani*, *Dadu Dayal ra Duha* | Rejects cremation/burial (bodies offered to wild beasts in forest, e.g., Bhairana hill); Disciples: **Rajjab Ji** (remained in wedding attire lifelong), **Sundar Das** (*Sundar Vilas*) |\n| **Mirabai** (1498–1546) | **Saguna Madhurya Bhakti** | Born: Kudki (Pali); Married Bhojraj (son of Rana Sanga); Guru: **Raidas (Ravidas)**; Merged into Krishna idol at Dwarka | *Padavali*, *Rukmani Mangal*, *Raag Govind*, *Narsi ji ro Mayro* (written with Ratna Khati) | Treated Lord Krishna as husband (*Kanta Bhava*); broke Rajput zenana seclusion; symbolized absolute feminist defiance through Bhakti |\n| **Charan Das** (1703–1782) | **Charan Dasi Sampradaya** | Born: Dehra (Alwar); Headquarters in **Delhi**; Formulated **42 Rules**; Guru was Sukhdev | *Brahmagyan Sagar*, *Bhaktisagar*, *Gyan Swarodaya* | Accurately predicted **Nadir Shah’s invasion of Delhi (1739)** six months in advance; Female disciples: **Daya Bai** (*Daya Bodh*) & **Sahjo Bai** (*Sahaj Prakash*) |\n| **Lal Das Ji** (1540–1648) | **Lal Dasi Sampradaya** | Born: Dholiduv (Alwar); Meo woodcutter; Preached religious synthesis in Mewat; Seat: **Nagla Jahaz** (Bharatpur) | *Lal Das ri Vani* | Initiation rite: Disciple’s face blackened, seated backwards on a donkey, and paraded to completely eradicate ego |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "The Five Branches of Dadu Panth",
        "body": "Following Dadu Dayal’s death, the Dadu Panth divided into 5 distinct orders: 1. **Khalsa**: The central mainline order residing at the apex seat of Naraina. 2. **Virakta**: Wandering mendicants who practice radical detachment from worldly goods. 3. **Uttarede**: Established in northern India (Haryana/Punjab) by Banwari Das. 4. **Khaki**: Ascetics who smear ash (Bhasma), wear matted hair (Jata), and practice severe austerities. 5. **Naga**: The armed militant branch founded by **Sant Das** and **Sundar Das**, who served as royal warrior guards for the Jaipur state.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC RAS Prelims & Mains Traps",
        "body": "Examiner Traps: 1. Rules count matching: Bishnoi = 29 rules; Jasnathi = 36 rules; Charan Dasi = 42 rules. 2. Mirabai’s spiritual preceptor was Saint Raidas (whose Chhatri is located in Chittorgarh Fort). 3. Rajjab Ji was the famous disciple of Dadu Dayal who remained in his groom’s wedding attire (*Dulhe ke Vesh*) for his entire life after hearing Dadu’s sermon on his wedding day.",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Mains Paper I - Religious Life: Sant Parampara of Rajasthan",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Bishnoi 29 rules, Jasnathi fire dance, Dadu Panth, Mirabai are guaranteed topics."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Indian Bhakti & Sufi Movements",
        "relevance": "HIGH",
        "priority": "P1",
        "requiredDepth": "MODERATE",
        "notes": "Mirabai, Dadu Dayal, environmental ethics of Bishnois."
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Bishnoi (Jambhoji, 29 rules, Khejarli 1730 - 363 martyrs). Jasnathi (36 rules, Katariyasar Agni Nritya). Dadu Dayal (Kabir of Raj, Naraina, 52 Stambhas, Rajjab). Mira (Bhakti, Raidas guru). Charan Das (42 rules, Nadir Shah).",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Rajasthan’s Sant Parampara blends social reform with ecological ethics. Guru Jambhoji founded the Bishnoi sect based on 29 environmental rules, inspiring the 1730 Khejarli sacrifice. Jasnathji formulated 36 rules with his followers performing the Katariyasar Agni Nritya. Dadu Dayal (Kabir of Rajasthan) established the Dadu Panth with 52 Stambhas in Naraina. Mirabai championed Saguna Madhurya Bhakti, and Charan Das laid down 42 rules while predicting Nadir Shah’s invasion.",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "# Sant Parampara Ideological Spectrum\n\n1. **Ecological Conservation:** Guru Jambhoji (29 rules, Mukam) -> Khejarli sacrifice (1730, Amrita Devi).\n2. **Ascetic Fire Mysticism:** Jasnathji (36 rules, Katariyasar Agni Nritya).\n3. **Nirguna Social Egalitarianism:** Dadu Dayal (Naraina, 52 Stambhas, Rajjab Ji) | Lal Das (Mewat, ego eradication).\n4. **Saguna Madhurya Devotion:** Mirabai (Raidas guru, Dwarka merger).",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "Which devoted disciple of Saint Dadu Dayal remained dressed in his bridegroom’s wedding attire for his entire life after hearing Dadu’s spiritual discourses?",
        "options": [
          "Sundar Das",
          "Rajjab Ji",
          "Banwari Das",
          "Sant Das"
        ],
        "correctAnswer": "Rajjab Ji",
        "explanation": "Sant Rajjab Ji (Pathan of Sanganer) was on his way to his wedding when he heard Dadu Dayal preach. Transformed by the sermon, he abandoned his marriage on the spot and remained in his bridegroom attire (Dulhe ke Vesh) for his entire life, authoring \"Rajjab Vani\" and \"Sarvangi\".",
        "trapExplanation": "Sundar Das composed Sundar Vilas, while Rajjab Ji was the famous disciple who stayed in groom attire.",
        "difficulty": "BEGINNER",
        "isPYQ": false,
        "modelAnswer": "Rajjab Ji"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Explain the ecological significance of the 29 commandments formulated by Guru Jambhoji for the Bishnoi community.",
        "options": [],
        "correctAnswer": "Formulated by **Guru Jambhoji** in 1485 CE at Samrathal Dhora, the **29 commandments** established the world’s first community-driven ecological religion: 1. **Afforestation & Bio-protection**: Strictly prohibits cutting green trees (with special religious sanctity for the **Khejri** tree, *Prosopis cineraria*). 2. **Wildlife Protection**: Absolute prohibition on killing or harming wildlife (protecting blackbucks, chinkaras, and peafowl). 3. **Sustainable Living**: Mandates personal hygiene, compassion for all living beings, and abstinence from intoxicating substances (meat, liquor, tobacco, and blue dye). This code inspired the supreme martyrdom of 363 Bishnois at Khejarli in 1730.",
        "explanation": "5-mark answer detailing the year, founder, specific environmental bans (Khejri, blackbucks), and the Khejarli martyrdom.",
        "trapExplanation": "Talking only about trees and omitting wildlife protection (blackbucks) and moral commandments.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 50,
        "modelAnswer": "Formulated by **Guru Jambhoji** in 1485 CE at Samrathal Dhora, the **29 commandments** established the world’s first community-driven ecological religion: 1. **Afforestation & Bio-protection**: Strictly prohibits cutting green trees (with special religious sanctity for the **Khejri** tree, *Prosopis cineraria*). 2. **Wildlife Protection**: Absolute prohibition on killing or harming wildlife (protecting blackbucks, chinkaras, and peafowl). 3. **Sustainable Living**: Mandates personal hygiene, compassion for all living beings, and abstinence from intoxicating substances (meat, liquor, tobacco, and blue dye). This code inspired the supreme martyrdom of 363 Bishnois at Khejarli in 1730."
      }
    ]
  },
  {
    "id": "CON-RAJ-011",
    "order": 11,
    "slug": "six-unesco-hill-forts-rajasthan-military-architecture-jauhar",
    "title": "The 6 UNESCO Hill Forts of Rajasthan: Military Engineering, Hydraulic Systems & Historic Jauhars",
    "shortDefinition": "The pinnacle of Rajput defensive architecture inscribed as UNESCO World Heritage in 2013: Chittorgarh (3 historic Jauhars, Vijay Stambha), Kumbhalgarh (36 km perimeter wall, Katargarh), Ranthambore (forest fort, 1301 Jauhar, Trinetra Ganesha), Gagron (Jal Durg / water fort with zero foundation), Amber (Rajput-Mughal fusion, Sheesh Mahal), and Jaisalmer (living desert fort, Dhai Shaka / 2.5 Jauhars).",
    "difficulty": "ADVANCED",
    "topicSlug": "rajasthan-culture-art-and-dialects",
    "topicTitle": "Rajasthan Art, Architecture, Culture & Dialects",
    "topicOrder": 2,
    "topicDescription": "Folk deities (Panch Pir), Sant Parampara, UNESCO forts, performing arts, folk dances, musical instruments, miniature painting schools, and Rajasthani linguistic dialects.",
    "subjectSlug": "rajasthan-history-culture-geography",
    "claims": [
      {
        "id": "CON-RAJ-011-CLM-1",
        "statement": "In 2013, the 37th session of the UNESCO World Heritage Committee (Phnom Penh) inscribed six monumental hill forts of Rajasthan as a serial World Heritage site: Chittorgarh Fort, Kumbhalgarh Fort, Ranthambore Fort, Gagron Fort, Amber Fort, and Jaisalmer Fort.",
        "claimType": "ARCHITECTURAL_MONUMENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "UNESCO World Heritage Inscription Document No. 247 (2013); Archaeological Survey of India (ASI)",
        "excerpt": "The serial site includes six majestic forts in Rajasthan that illustrate the development of Rajput military hill architecture between the 8th and 18th centuries."
      },
      {
        "id": "CON-RAJ-011-CLM-2",
        "statement": "Kumbhalgarh Fort (Rajsamand), designed by master architect Mandan for Maharana Kumbha on an altitude of 1,100 metres, features a continuous perimeter fortification wall measuring 36 kilometres in length with a width of 15–20 feet (reputed as the second longest continuous wall in the world after the Great Wall of China).",
        "claimType": "ARCHITECTURAL_MONUMENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "ASI Monograph, Kumbhalgarh Fort; Kavi Shyamaldas, Vir Vinod",
        "excerpt": "Kumbhalgarh’s 36-kilometer-long stone battlement encases over 360 temples and the sky-scraping citadel Katargarh (Eye of Mewar)."
      },
      {
        "id": "CON-RAJ-011-CLM-3",
        "statement": "Gagron Fort (Jhalawar) is Rajasthan’s premier \"Jal Durg\" (Water Fort), surrounded on three sides by the sacred confluence of the Ahu and Kali Sindh rivers, uniquely constructed directly on a rocky cliff without any excavated stone foundations, witnessing two historic Shakas (1423 CE under Achaldas Khichi and 1444 CE).",
        "claimType": "ARCHITECTURAL_MONUMENT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Shivdas Gadan, Achaldas Khichi ri Vachnika; ASI Records",
        "excerpt": "Gagron Fort stands as an impregnable natural fortress enveloped by swirling waters, celebrated in Achaldas Khichi ri Vachnika."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Stone Sentinels of the Aravallis: Fortresses of Defiance",
        "body": "Why did the warrior kings of Rajasthan construct colossal stone citadels atop razor-sharp mountain precipices? In ancient Indian military treatise *Kautilya’s Arthashastra*, forts are classified into Giri Durg (Hill), Jal Durg (Water), Dhanva Durg (Desert), and Vana Durg (Forest). In Rajasthan, every hill fort was a complete self-sustaining ecosystem: vast rainwater catchments that could hold years of water, agricultural terraces, granaries, and towering crenellated battlements capable of withstanding years of enemy siege.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Comparative Master Matrix of the 6 UNESCO Hill Forts",
        "body": "| Fort Name & District | Fort Typology & Hill | Key Architecture & Water Systems | Historic Shakas & Jauhars | Iconic Monuments Inside |\n|---|---|---|---|---|\n| **1. Chittorgarh Fort**<br>(Chittorgarh) | **Giri Durg**<br>(Mesa Plateau, 500 ft)<br>Largest Fort in India (700 acres) | 84 historic water bodies (holding 4 billion liters: Gaumukh Kund, Padmini Kund); 7 gates (*Pol*) | **3 Historic Shakas**:<br>• **1303**: Rani Padmini vs Alauddin Khalji<br>• **1535**: Rani Karmavati vs Bahadur Shah<br>• **1568**: Jaimal-Patta vs Akbar | **Vijay Stambha** (9 storeys, 122 ft); **Kirti Stambha** (7 storeys, Jain); Padmini Palace; Kumbha Shyam Temple |\n| **2. Kumbhalgarh Fort**<br>(Rajsamand) | **Giri Durg**<br>(Aravalli range, 1,100 m)<br>Architect: **Mandan** | **36 km long perimeter wall** (2nd longest in world); Badshahi Bavdi; Lakheta tank | Besieged successfully only once (1578) by Shahbaz Khan due to contaminated water supply | Inner citadel **Katargarh** (*Eye of Mewar*, birthplace of Maharana Pratap); Badal Mahal; Neelkanth Mahadev |\n| **3. Ranthambore Fort**<br>(Sawai Madhopur) | **Giri & Vana Durg**<br>(Thambhore hill inside dense Ranthambore forest) | Padamala Lake, Ranihar Pond; Camouflaged natural rock approaches | **1301 CE Shaka**: Alauddin Khalji vs Hammir Dev; **1st documented Jal Jauhar** by Queen Ranga Devi | **Trinetra Ganesha Temple** (3-eyed Ganesha); Supari Mahal; 32-pillared Chhatri (*Battis Khambhon ki Chhatri* built by Hammir) |\n| **4. Gagron Fort**<br>(Jhalawar) | **Jal Durg (Water Fort)**<br>(Confluence of **Ahu & Kali Sindh** rivers) | Built directly on river bedrock with **zero excavated foundation**; Surrounded on 3 sides by deep water | **2 Historic Shakas**:<br>• **1423 CE**: Achaldas Khichi vs Hoshang Shah (Malwa)<br>• **1444 CE**: Palhan Singh vs Mahmud Khalji | Dargah of Sufi Saint **Miteneshah** (Khamid-ud-din Chishti); Chhatri of Saint **Pipaji**; Buland Darwaza |\n| **5. Amber Fort**<br>(Jaipur) | **Giri Durg**<br>(Cheel ka Teela / Aravallis) | Maota Lake (supplying water via Persian wheel system); Kesar Kyari garden | No Jauhar occurred; perfected diplomatic Rajput-Mughal defense synthesis | **Sheesh Mahal** (Mirror Palace); **Shila Devi Temple** (idol from Jessore); Diwan-i-Aam; Ganesh Pol |\n| **6. Jaisalmer Fort**<br>(Sonargadh, Jaisalmer) | **Dhanva Durg (Desert Fort)**<br>(Trikuta Hill)<br>Built 1156 by Rao Jaisal | Yellow sandstone with zero mortar/cement; double protective wall (*Pakhara*); Living Fort (pop. lives inside) | **Dhai Shaka (2.5 Shakas)**:<br>• 1st: Moolraj vs Alauddin Khalji<br>• 2nd: Duda vs Feroz Shah Tughlaq<br>• Half Shaka (1550): Lunkaran vs Amir Ali (men died, Jauhar not completed) | 7 carved Jain Temples; Jin Bhadra Suri Manuscript Archive; Raj Mahal; Laxminath Temple |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "Anatomy of a Shaka: The Ultimate Sacrifice",
        "body": "When a besieged fortress ran out of food and water, the defenders executed a **Shaka**, comprising two coordinated acts of total sacrifice: 1. **Jauhar**: The queens and civilian women dressed in bridal attire, chanted Vedic hymns, and immolated themselves in mass pyres (or drowned in sacred lakes, as in Ranthambore’s Jal Jauhar) to preserve honor from invaders. 2. **Kesariya**: The men donned saffron robes (*Kesariya Bana*), untied their hair, consumed sacred Tulsi leaves, opened the fort gates, and charged into the enemy ranks fighting to the last breath.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC RAS Prelims & Mains Traps",
        "body": "Crucial Traps: 1. **UNESCO Fort Mnemonic**: Remember the classic acronym: **CHIKU GAJAR AAM** -> **Chi** (Chittorgarh), **Ku** (Kumbhalgarh), **Ga** (Gagron), **Ja** (Jaisalmer), **R** (Ranthambore), **Aam** (Amber). Mehrangarh Fort (Jodhpur) and Junagarh Fort (Bikaner) are NOT in the UNESCO list! 2. The Half-Shaka (Ardha Shaka) of Jaisalmer occurred in 1550 CE under Rao Lunkaran against Afghan chieftain Amir Ali. 3. Gagron has no foundation; it rests on raw bedrock.",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Mains Paper I - Art & Architecture of Rajasthan: Forts and Monuments",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "6 UNESCO forts, architectural features, Shakas are core staples."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Indian Architecture & Heritage Sites",
        "relevance": "HIGH",
        "priority": "P1",
        "requiredDepth": "MODERATE",
        "notes": "UNESCO Hill Forts of Rajasthan, military fortification."
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "6 UNESCO Forts (2013 - Chiku Gajar Aam): Chittor (3 Shakas, Vijay Stambha), Kumbhalgarh (36km wall, Mandan), Ranthambore (1301 Jal Jauhar), Gagron (Jal Durg, Ahu/Kali Sindh), Amber (Sheesh Mahal), Jaisalmer (Dhai Shaka, Sonargadh). Note: Mehrangarh is NOT included!",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "In 2013, UNESCO inscribed six Rajasthani hill forts as World Heritage Sites: Chittorgarh (India’s largest fort with 3 historic Shakas), Kumbhalgarh (36 km perimeter wall, built by Mandan), Ranthambore (forest fort with 1301 water Jauhar), Gagron (natural water fort on Ahu-Kali Sindh with zero foundations), Amber (Rajput-Mughal architectural synthesis), and Jaisalmer (living desert fort on Trikuta hill with 2.5 Shakas).",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "# UNESCO Hill Forts Architectural Typology\n\n1. **Giri Durg (Hill):** Chittorgarh (700 acres, Gaumukh Kund) | Kumbhalgarh (36 km wall, Katargarh).\n2. **Jal Durg (Water):** Gagron (Ahu-Kali Sindh confluence, no foundation, Saint Pipa chhatri).\n3. **Dhanva Durg (Desert):** Jaisalmer (Yellow sandstone, zero mortar, Dhai Shaka 1550).\n4. **Vana Durg (Forest):** Ranthambore (Dense forest camouflage, Trinetra Ganesha, 1301 Jal Jauhar).\n5. **Mughal-Rajput Palace Fort:** Amber (Maota Lake, Sheesh Mahal, Shila Devi).",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "Which of the following celebrated fortresses of Rajasthan was NOT included in the serial UNESCO World Heritage inscription of 2013?",
        "options": [
          "Gagron Fort",
          "Kumbhalgarh Fort",
          "Mehrangarh Fort",
          "Jaisalmer Fort"
        ],
        "correctAnswer": "Mehrangarh Fort",
        "explanation": "In 2013, UNESCO inscribed exactly six hill forts: Chittorgarh, Kumbhalgarh, Ranthambore, Gagron, Amber, and Jaisalmer. Mehrangarh Fort in Jodhpur was not included in this serial inscription.",
        "trapExplanation": "Candidates assume Mehrangarh is included because of its colossal size and fame.",
        "difficulty": "BEGINNER",
        "isPYQ": false,
        "modelAnswer": "Mehrangarh Fort"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Describe the unique geographical and architectural features that make Gagron Fort a classic \"Jal Durg\" (Water Fort).",
        "options": [],
        "correctAnswer": "**Gagron Fort** (Jhalawar) is Rajasthan’s preeminent **Jal Durg** (Water Fort) due to: 1. **Riverine Encirclement**: Situated on the picturesque confluence of the **Ahu and Kali Sindh** rivers, which surround the citadel on three sides as a natural water barrier. 2. **Foundationless Engineering**: Constructed directly on a colossal, sheer rock cliff without any dug-in foundation (*Bina Neev ka Durg*). 3. **Defensive Isolation**: The fourth side is guarded by a deep dry moat backed by the Mukundara hill ranges, creating an impregnable natural barrier.",
        "explanation": "5-mark answer detailing river confluence (Ahu and Kali Sindh), zero foundation, and Mukundara hill isolation.",
        "trapExplanation": "Omitting the names of the two converging rivers (Ahu and Kali Sindh).",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 50,
        "modelAnswer": "**Gagron Fort** (Jhalawar) is Rajasthan’s preeminent **Jal Durg** (Water Fort) due to: 1. **Riverine Encirclement**: Situated on the picturesque confluence of the **Ahu and Kali Sindh** rivers, which surround the citadel on three sides as a natural water barrier. 2. **Foundationless Engineering**: Constructed directly on a colossal, sheer rock cliff without any dug-in foundation (*Bina Neev ka Durg*). 3. **Defensive Isolation**: The fourth side is guarded by a deep dry moat backed by the Mukundara hill ranges, creating an impregnable natural barrier."
      }
    ]
  },
  {
    "id": "CON-RAJ-012",
    "order": 12,
    "slug": "folk-dances-rajasthan-ghoomar-kalbeliya-fire-terah-taali",
    "title": "Folk Dances & Performing Arts: Ghoomar, UNESCO Kalbeliya, Agni Nritya, Terah Taali & Tribal Dances",
    "shortDefinition": "Choreographic syntax, caste lineage, musical accompaniment, and socio-ritual contexts of Rajasthan’s folk dances: Ghoomar (\"Soul of Rajasthan Dances\"), UNESCO-inscribed Kalbeliya (Snake-charmer dance, Gulabo Sapera), Agni Nritya (Jasnathi fire dance), Terah Taali (Kamadia women), Chari (Gujjar brass pot dance), and tribal dances (Gair, Gauri, Walad, Chhang).",
    "difficulty": "ADVANCED",
    "topicSlug": "rajasthan-culture-art-and-dialects",
    "topicTitle": "Rajasthan Art, Architecture, Culture & Dialects",
    "topicOrder": 2,
    "topicDescription": "Folk deities (Panch Pir), Sant Parampara, UNESCO forts, performing arts, folk dances, musical instruments, miniature painting schools, and Rajasthani linguistic dialects.",
    "subjectSlug": "rajasthan-history-culture-geography",
    "claims": [
      {
        "id": "CON-RAJ-012-CLM-1",
        "statement": "Ghoomar is recognized as the \"Soul of Rajasthani Folk Dances\" and the \"State Dance of Rajasthan\", originally developed by the Bhil tribe to worship goddess Saraswati and later refined in royal Rajput zenanas, characterized by graceful pirouettes called \"Sawaai\" performed in rhythmic cycles of 8 beats.",
        "claimType": "CULTURAL_HERITAGE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Sangeet Natak Akademi Folk Dance Documentation; Komal Kothari, Monograph on Ghoomar",
        "excerpt": "Ghoomar derives its name from the swirling flare of the Ghaghara (skirt), characterized by the graceful footwork of the eight-count Sawaai."
      },
      {
        "id": "CON-RAJ-012-CLM-2",
        "statement": "In 2010, the Kalbeliya Folk Dance and Songs of Rajasthan were inscribed on UNESCO’s Representative List of the Intangible Cultural Heritage of Humanity, celebrating the serpentine choreography and black-embroidered swirling attire of women of the nomad snake-charmer community, popularized globally by Padma Shri Gulabo Sapera.",
        "claimType": "CULTURAL_HERITAGE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "UNESCO Intangible Cultural Heritage Inscription (5.COM 6.17); Sangeet Natak Akademi",
        "excerpt": "Kalbeliya dance is an expression of the traditional way of life of the Kalbeliya nomadic community, mimicking the sinuous, lightning movements of a cobra."
      },
      {
        "id": "CON-RAJ-012-CLM-3",
        "statement": "The Terah Taali dance is a unique sitting ritual dance performed exclusively by women of the Kamadia sect during the Ramdevra fair, who tie 13 brass Manjeeras (cymbals) to their body (9 on the right leg, 2 on elbows, and 2 in hands) and play them with swords and brass platters held between teeth.",
        "claimType": "CULTURAL_HERITAGE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Komal Kothari, Rupayan Sansthan Borunda; Dr. Mahendra Bhanawat",
        "excerpt": "Terah Taali is one of India’s rare sitting classical folk dances, displaying extraordinary balance and acrobatic percussion."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Rhythms of the Desert: Swirling Colors and Sacred Fire",
        "body": "To survive in the desolate Thar desert, the people of Rajasthan turned life into an explosion of music, color, and kinetic movement. When a Kalbeliya dancer spins so fast that her black dress forms a blur mimicking a cobra, or when a Jasnathi ascetic walks barefoot across red-hot burning coals with the battle cry \"Fateh! Fateh!\", folk dance is not entertainment. It is ecstatic devotion, tribal identity, and absolute defiance of mortality.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Master Matrix of Rajasthan Folk Dances",
        "body": "| Dance Name | Community / Caste | Region | Primary Musical Instruments | Signature Choreographic & Ritual Features |\n|---|---|---|---|---|\n| **Ghoomar** | Bhil origin; Royal Rajput patronage | State-wide (State Dance) | Dhol, Nagada, Shehnai | Circular pirouettes (*Ghoom*); 8-beat footwork called **Sawaai**; Types: *Jhoomariya* (young girls), *Loor* (Garasia women), *Ghoomar* (Rajput ladies) |\n| **Kalbeliya** | Kalbeliya (Sapera) community | Marwar / Jodhpur | **Pungi (Been)**, Khanjari, Chang, Dholak | **UNESCO Intangible Cultural Heritage (2010)**; Sinuous black skirts; mimics cobra movements; pioneer: **Gulabo Sapera** |\n| **Terah Taali** | Kamad community (women) | Pokhran, Ramdevra, Pali | **13 Manjeeras** (brass cymbals), Chautara, Tanpura | Rare **sitting dance**; 13 Manjeeras tied on body (9 on right leg, 2 on elbows, 2 held); dancer holds naked sword in mouth balancing earthen pots |\n| **Agni Nritya (Fire Dance)** | Jasnathi Siddha ascetics | Katariyasar (Bikaner) | Nagada, Dhol | Performed on live glowing charcoal fire pit (**Dhoona**); dancers enter shouting **\"Fateh! Fateh!\"**; perform fire farming (*Mateeera Fodna*) |\n| **Chari Dance** | Gujjar community (women) | Kishangarh / Ajmer | Dhol, Thali, Bankia | Dancers balance lighted brass pots (**Chari**) filled with burning cotton seeds soaked in mustard oil; pioneer: **Phalku Bai** |\n| **Gair Dance** | Bhil and Rajput men | Mewar & Barmer | Dhol, Bankia, Mandal | Performed during **Holi**; men hold wooden sticks (**Khanda**) striking them in synchronized circles; dancers wear long frock called *Ghegha* |\n| **Gauri (Rai) Dance** | Bhil tribe (exclusively male) | Mewar (Udaipur, Dungarpur) | Mandal, Thali | **40-day folk-drama dance** during Shravan-Bhadrapada; based on Shiva and Bhasmasura; central characters: *Budhiya* (Shiva), *Rai* (Parvati), *Khadkudiya* |\n| **Walar Dance** | Garasia tribe (men & women) | Sirohi (Abu Road) | **No Musical Instrument!** (Unique a cappella dance) | Slow, graceful circular dance; initiated by an elder wielding a ceremonial umbrella or sword |\n| **Kachhi Ghodi** | Professional dancers | Shekhawati | Dhol, Bankia, Jhanjh | Mock battle dance; dancers ride artificial cloth horses strapped to waists; perform rhythmic floral opening-closing formations |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "The Ritual Architecture of Bhil Gauri Dance-Drama",
        "body": "The **Gauri dance** is India’s oldest surviving folk theatre-dance: 1. Performed continuously for 40 days following Raksha Bandhan. 2. Cast is strictly male (even female roles like Rai are played by men called *Khadkudiya*). 3. Dancers observe extreme austerities (renouncing green vegetables, alcohol, meat, bathing with soap, and walking barefoot). 4. Re-enacts the mythological tale of Lord Shiva granting the destructive boon to demon Bhasmasura and Vishnu neutralizing him as Mohini.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC RAS Prelims & Mains Traps",
        "body": "Examiner Traps: 1. Dance performed WITHOUT ANY musical instruments: **Walar Dance** of Garasias (RPSC loves this question!). 2. Female pioneers: Phalku Bai = Chari Dance (Gujjar, Kishangarh); Gulabo Sapera = Kalbeliya Dance (UNESCO 2010); Mangi Bai = Terah Taali (Kamad, Padarla Pali). 3. Gauri is performed for 40 days during the monsoon, not on Holi.",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Mains Paper I - Art & Performing Arts of Rajasthan: Folk Dances and Folk Drama",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Ghoomar, Kalbeliya, Terah Taali, Agni Nritya, and Gauri are repeatedly tested."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Indian Performing Arts - Folk Dances",
        "relevance": "HIGH",
        "priority": "P1",
        "requiredDepth": "MODERATE",
        "notes": "UNESCO Kalbeliya dance, intangible cultural heritage."
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Folk Dances: Ghoomar (State dance, Sawaai 8-beat). Kalbeliya (UNESCO 2010, Pungi, Gulabo). Terah Taali (Kamadia, 13 manjeeras, Mangi Bai). Agni Nritya (Jasnathi, Katariyasar, Fateh Fateh). Walar (Garasia, NO instruments). Chari (Phalku Bai).",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Rajasthan’s folk dances embody rich ritual and communal lineages: Ghoomar (the state dance featuring the 8-count Sawaai); UNESCO-inscribed Kalbeliya (nomadic snake-charmer dance led by Gulabo); Terah Taali (sitting dance by Kamadia women balancing 13 brass cymbals); Jasnathi Agni Nritya (dancing on burning charcoal embers in Katariyasar); and the Garasia Walar dance (celebrated for its unique absence of any musical instruments).",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "# Rajasthan Folk Dance Taxonomy\n\n1. **State / Classical Folk:** Ghoomar (Sawaai 8 beats, Bhil origin, Rajput refinement).\n2. **UNESCO Intangible Heritage:** Kalbeliya (Pungi, Gulabo Sapera, black flared attire).\n3. **Ritual / Religious Devotion:** Terah Taali (Kamad women, 13 manjeeras) | Agni Nritya (Jasnathi Siddhas, fire pit).\n4. **Tribal Lineage:** Gauri (Bhil 40-day folk drama) | Gair (Holi sticks) | Walar (Garasia, zero instruments).",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "Which celebrated folk dance of the Garasia tribe in the Sirohi region is uniquely performed WITHOUT the accompaniment of any musical instruments?",
        "options": [
          "Gair Dance",
          "Walar Dance",
          "Chari Dance",
          "Gauri Dance"
        ],
        "correctAnswer": "Walar Dance",
        "explanation": "The Walar dance, performed by the Garasia tribe of Abu Road (Sirohi), is celebrated across Indian folklore for being performed exclusively without any musical instruments, relying solely on synchronized vocal singing and foot-stepping rhythm.",
        "trapExplanation": "Gair uses Dhol and Bankia; Gauri uses Mandal and Thali; Chari uses Bankia.",
        "difficulty": "BEGINNER",
        "isPYQ": false,
        "modelAnswer": "Walar Dance"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Describe the choreographic technique and ritual characteristics of the \"Terah Taali\" dance.",
        "options": [],
        "correctAnswer": "**Terah Taali** is a unique folk ritual dance performed by married women of the **Kamadia community** at the fair of Baba Ramdevji: 1. **Instrument Placement**: Dancers tie 13 brass cymbals (*Manjeeras*) to their body—9 tightly strapped to the right calf, 2 to the elbows, and 2 held in the hands. 2. **Sitting Posture**: Unlike most standing folk dances, it is performed entirely in a seated cross-legged position. 3. **Acrobatic Feats**: While striking the cymbals in rapid intricate rhythms to the drone of the Chautara, dancers balance a sword between their teeth and stacks of brass water pots (*Chari*) on their heads.",
        "explanation": "5-mark answer detailing community, instrument placement (13 Manjeeras), sitting posture, and balance feats.",
        "trapExplanation": "Failing to mention that it is a sitting dance and not explaining where the 13 manjeeras are tied.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 50,
        "modelAnswer": "**Terah Taali** is a unique folk ritual dance performed by married women of the **Kamadia community** at the fair of Baba Ramdevji: 1. **Instrument Placement**: Dancers tie 13 brass cymbals (*Manjeeras*) to their body—9 tightly strapped to the right calf, 2 to the elbows, and 2 held in the hands. 2. **Sitting Posture**: Unlike most standing folk dances, it is performed entirely in a seated cross-legged position. 3. **Acrobatic Feats**: While striking the cymbals in rapid intricate rhythms to the drone of the Chautara, dancers balance a sword between their teeth and stacks of brass water pots (*Chari*) on their heads."
      }
    ]
  },
  {
    "id": "CON-RAJ-013",
    "order": 13,
    "slug": "folk-musical-instruments-tat-avanaddha-sushir-ghan",
    "title": "Folk Musical Instruments of Rajasthan: Tat (Stringed), Avanaddha (Membranophone), Sushir (Wind) & Ghan (Idiophone)",
    "shortDefinition": "Acoustic physics, organological classification, construction materials, and performer-caste lineages of Rajasthan’s four canonical folk instrument families: Tat Vadya (Ravanhattha, Kamayacha, Jantar, Sarangi), Avanaddha Vadya (Mridang/Pakhawaj, Chang, Mandal, Dhau), Sushir Vadya (Algoza, Shehnai, Pungi, Bankia, Satara), and Ghan Vadya (Manjeera, Khartal, Thali).",
    "difficulty": "ADVANCED",
    "topicSlug": "rajasthan-culture-art-and-dialects",
    "topicTitle": "Rajasthan Art, Architecture, Culture & Dialects",
    "topicOrder": 2,
    "topicDescription": "Folk deities (Panch Pir), Sant Parampara, UNESCO forts, performing arts, folk dances, musical instruments, miniature painting schools, and Rajasthani linguistic dialects.",
    "subjectSlug": "rajasthan-history-culture-geography",
    "claims": [
      {
        "id": "CON-RAJ-013-CLM-1",
        "statement": "Rajasthan folk musical instruments are classified into four rigorous organological families: Tat Vadya (chordophones / stringed), Avanaddha Vadya (membranophones / hide-covered percussion), Sushir Vadya (aerophones / wind-blown), and Ghan Vadya (idiophones / solid resonant metal-wood instruments).",
        "claimType": "CULTURAL_HERITAGE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Bharata Muni, Natyashastra; Komal Kothari, Musical Instruments of Rajasthan; Sangeet Natak Akademi",
        "excerpt": "The four-fold division of instruments into Tat, Avanaddha, Sushir, and Ghan forms the definitive framework for cataloging Rajasthani folk acoustics."
      },
      {
        "id": "CON-RAJ-013-CLM-2",
        "statement": "The Algoza—a paired aerophone consisting of two joined hollow bamboo flutes blown simultaneously through one mouth, with one flute providing continuous drone and the other melody—is designated as the State Musical Instrument of Rajasthan.",
        "claimType": "CULTURAL_HERITAGE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Rajasthan Sangeet Sansthan; Komal Kothari, Monograph on Rajasthan Aerophones",
        "excerpt": "The Algoza requires circular breathing and produces an electrifying, continuous desert pastoral cadence, officially recognized as the state instrument of Rajasthan."
      },
      {
        "id": "CON-RAJ-013-CLM-3",
        "statement": "The Kamayacha is an ancient bowed chordophone carved from a single block of mango wood with a parchment belly and 17 strings (including 3 principal gut strings made from goat intestines), played with a curved horsehair bow (*Gaj*) exclusively by the hereditary Manganiyar community of Barmer and Jaisalmer (immortalized by Padma Shri Sakar Khan).",
        "claimType": "CULTURAL_HERITAGE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Sangeet Natak Akademi Citation for Sakar Khan; Rupayan Sansthan Archives",
        "excerpt": "The Kamayacha is the soul of Manganiyar desert music, producing a deep, resonant cello-like bass unmatched by any other Asian bowed instrument."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Echoes of the Thar: Handcrafted Acoustics of Genius",
        "body": "How did nomadic communities in the desert construct instruments that could match the acoustic brilliance of European concert violins? They looked around their barren landscape: a dried bottle-gourd (*Tumba*), coconut shells, horse tail-hair, goat intestine gut strings, and hollow river reeds. In the hands of hereditary bards (Langas, Manganiyars, Bhopas, Mirasis), these organic materials produce hypnotic music that carries miles across the desert night.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Complete Classification Matrix of Rajasthan Musical Instruments",
        "body": "| Instrument Category | Acoustic Definition & Material | Key Instruments in Rajasthan | Associated Performer Castes & Folk Arts |\n|---|---|---|---|\n| **1. Tat Vadya**<br>(Chordophones / Stringed) | Sound produced by vibrating strings stretched over soundboards; played by plucking (*Nakhun/Mizrab*) or bowing (*Gaj*) | • **Ravanhattha**: Half-cut coconut shell covered with goat hide, bamboo neck, 9 strings; played with horsehair bow with ghungroos.<br>• **Kamayacha**: Single block of mango wood, parchment belly, 17 strings (3 gut strings); played by Manganiyars.<br>• **Jantar**: 2 large dried gourds (*Tumbas*) connected by danda with 14-22 frets; played like Veena.<br>• **Sarangi**: 27-29 strings; king of bowed instruments.<br>• **Ektara**, **Dotara**, **Bhapang** (hollow tumba plucked with wire, Mewat). | • Ravanhattha: Nayak/Bhopas (Pabuji ki Phad).<br>• Kamayacha: **Manganiyars** (Sakar Khan).<br>• Jantar: Gurjar Bhopas (Devnarayanji ki Phad).<br>• Sarangi: Langa community.<br>• Bhapang: Zahoor Khan Mewati & Umar Farooq Mewati. |\n| **2. Sushir Vadya**<br>(Aerophones / Wind-Blown) | Sound generated by vibrating air columns blown through mouth or embouchure | • **Algoza**: **State Instrument of Rajasthan**; pair of identical beaked flutes played simultaneously using circular breathing.<br>• **Pungi (Been)**: Dried bitter gourd with two reed pipes; snake-charmers.<br>• **Shehnai**: Double-reed conical bore, auspicious ceremonies.<br>• **Bankia**: Curved brass trumpet played in weddings.<br>• **Satara**: Double flute combining Algoza and flute.<br>• **Morchang**: Tiny wrought-iron jaw harp held between teeth and plucked with finger. | • Algoza: Meena, Gujjar, and pastoral bards (Ramnath Choudhary).<br>• Pungi: **Kalbeliyas**.<br>• Bankia: Sargada caste.<br>• Morchang: Langa & Manganiyar instrumentalists. |\n| **3. Avanaddha Vadya**<br>(Membranophones / Percussion) | Sound produced by striking animal skin/parchment stretched over wooden/clay frames | • **Mridang / Pakhawaj**: Two-headed wooden barrel drum (Pt. Purushottam Das).<br>• **Chang (Dhaf)**: Colossal circular wooden ring covered with single sheepskin, played during Holi.<br>• **Mandal**: Clay barrel drum shaped like Mridang.<br>• **Dhau (Dholak)**, **Nagara**, **Tasha**, **Damru**, **Deru**. | • Chang: Shekhawati Holi dancers.<br>• Mandal: Bhil and Garasia tribes (Gauri and Walar dances).<br>• Nagara: Folk dramas (Khayal). |\n| **4. Ghan Vadya**<br>(Idiophones / Resonant Metal) | Solid resonant metal, bronze, or hardwood instruments played by striking, clashing, or shaking | • **Manjeera**: Pair of concave brass/bronze cymbals tied with chord.<br>• **Khartal**: 4 flat teak/sheesham wooden clappers held in pairs in both hands; played at blistering speed.<br>• **Thali**: Bronze dinner plate struck with wooden stick.<br>• **Jhanjh**, **Chimta**, **Ghungroo**, **Bhir**. | • Manjeera: Kamad women in **Terah Taali**.<br>• Khartal: **Siddiq Khan Manganiyar** (immortalized Khartal globally).<br>• Chimta: Nath yogis. |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "Mastery of Khartal and Circular Breathing in Algoza",
        "body": "Two virtuosic Rajasthani acoustic techniques: 1. **Algoza Circular Breathing**: The player inhales through the nose while simultaneously squeezing trapped air from the cheeks into the dual flutes, sustaining an unbroken, continuous multi-tone stream for up to 20 minutes without pausing for breath. 2. **Khartal (Bravura Percussion)**: The four wooden clappers produce intricate mathematical polyrhythms mimicking galloping horses, railway trains, and monsoon raindrops, controlled entirely by micro-flexing of the fingers.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC RAS Prelims & Mains Traps",
        "body": "Top Classification Traps: 1. **Morchang**: Candidates frequently misclassify Morchang as Tat (stringed) or Ghan (solid metal); it is officially classified as a **SUSHIR (Wind) VADYA** because sound is created by blowing breath while vibrating the iron tongue! 2. State Instrument = Algoza (paired double-flute). 3. Bhapang is a Tat Vadya made from a hollow gourd played with a leather strap and steel wire (associated with Mewat).",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Mains Paper I - Art & Culture of Rajasthan: Musical Instruments of Rajasthan",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "4-fold classification, instrument identification, performer castes tested every year."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Indian Culture - Classical and Folk Instruments",
        "relevance": "MEDIUM",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Natyashastra instrument classification, Kamayacha."
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Instruments 4 families: Tat (Ravanhattha, Kamayacha, Jantar, Bhapang). Sushir (Algoza = State Instrument, Pungi, Morchang). Avanaddha (Mridang, Chang, Mandal). Ghan (Khartal - Siddiq Khan, Manjeera - Terah Taali).",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Rajasthani musical instruments are classified into Tat (strings: Ravanhattha with coconut base, Kamayacha of Manganiyars, Jantar for Devnarayanji), Sushir (wind: Algoza as State Instrument, Pungi, and Morchang jaw-harp), Avanaddha (percussion hides: Chang of Shekhawati Holi, clay Mandal of Bhils, Pakhawaj), and Ghan (solid metal: Khartal wooden clappers of Siddiq Khan, Manjeera of Terah Taali).",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "# Rajasthani Acoustic Taxonomy & Castes\n\n1. **Tat (Chordophone):** Ravanhattha (Nayak/Bhopa) | Kamayacha (Manganiyar) | Jantar (Gurjar Bhopa) | Bhapang (Mewati).\n2. **Sushir (Aerophone):** Algoza (State Instrument, circular breathing) | Pungi (Kalbeliya) | Morchang (Jaw-harp).\n3. **Avanaddha (Membranophone):** Chang (Shekhawati) | Mandal (Garasia/Bhil) | Pakhawaj (Nathdwara).\n4. **Ghan (Idiophone):** Khartal (Siddiq Khan) | Manjeera (Kamad Terah Taali).",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "Which of the following musical instruments of Rajasthan is classified under \"SUSHIR VADYA\" (Wind/Aerophone) despite being forged from wrought iron?",
        "options": [
          "Morchang",
          "Khartal",
          "Bhapang",
          "Ravanhattha"
        ],
        "correctAnswer": "Morchang",
        "explanation": "The Morchang (Jew’s Harp / Jaw Harp) is made of wrought iron and held between the teeth, but it is scientifically classified as a Sushir Vadya (Wind instrument) because sound is produced by blowing inhaled/exhaled air across the plucked vibrating iron tongue.",
        "trapExplanation": "Candidates assume it is a Ghan Vadya because it is made of metal, or Tat Vadya because of its thin reed tongue.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "modelAnswer": "Morchang"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Describe the structural construction and musical role of the \"Kamayacha\" in the folk music of Rajasthan.",
        "options": [],
        "correctAnswer": "The **Kamayacha** is one of the world’s oldest bowed chordophones (Tat Vadya), preserved exclusively by the **Manganiyar community** of western Rajasthan (Barmer/Jaisalmer): 1. **Wood & Belly**: Carved from a single massive block of **mango wood** (*Aam ki Lakdi*), featuring a colossal spherical sound chamber covered with thin stretched parchment/leather. 2. **String Architecture**: Possesses **17 strings**, of which the 3 principal melody strings are fashioned from **goat intestines** (*Rond*), while the rest are sympathetic steel strings (*Jhil/Jhala*). 3. **Bowing & Tone**: Played with a curved wooden horsehair bow (*Gaj*), producing an exceptionally rich, mournful, cello-like acoustic resonance immortalized by maestro **Padma Shri Sakar Khan**.",
        "explanation": "5-mark answer detailing the community, mango wood body, 17 strings (3 goat intestine strings), horsehair bow, and Sakar Khan.",
        "trapExplanation": "Confusing Kamayacha with Sarangi or forgetting that 3 strings are made of animal gut.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 50,
        "modelAnswer": "The **Kamayacha** is one of the world’s oldest bowed chordophones (Tat Vadya), preserved exclusively by the **Manganiyar community** of western Rajasthan (Barmer/Jaisalmer): 1. **Wood & Belly**: Carved from a single massive block of **mango wood** (*Aam ki Lakdi*), featuring a colossal spherical sound chamber covered with thin stretched parchment/leather. 2. **String Architecture**: Possesses **17 strings**, of which the 3 principal melody strings are fashioned from **goat intestines** (*Rond*), while the rest are sympathetic steel strings (*Jhil/Jhala*). 3. **Bowing & Tone**: Played with a curved wooden horsehair bow (*Gaj*), producing an exceptionally rich, mournful, cello-like acoustic resonance immortalized by maestro **Padma Shri Sakar Khan**."
      }
    ]
  },
  {
    "id": "CON-RAJ-014",
    "order": 14,
    "slug": "rajasthani-dialects-linguistic-classification-grierson-tessitori",
    "title": "Rajasthani Language & Dialects: Grierson & Tessitori Classifications, Marwari, Dhundhari, Mewati & Hadoti",
    "shortDefinition": "Linguistic genealogy, phonetic grammar, literary traditions (Dingal and Pingal), and spatial distribution of Rajasthani dialects: George Grierson’s 5-fold classification (Linguistic Survey of India 1908), L.P. Tessitori’s Western vs Eastern division, Marwari, Dhundhari, Mewati, Malvi, Wagdi (\"Bhil dialect\"), and script traditions (Murad/Mahajani).",
    "difficulty": "ADVANCED",
    "topicSlug": "rajasthan-culture-art-and-dialects",
    "topicTitle": "Rajasthan Art, Architecture, Culture & Dialects",
    "topicOrder": 2,
    "topicDescription": "Folk deities (Panch Pir), Sant Parampara, UNESCO forts, performing arts, folk dances, musical instruments, miniature painting schools, and Rajasthani linguistic dialects.",
    "subjectSlug": "rajasthan-history-culture-geography",
    "claims": [
      {
        "id": "CON-RAJ-014-CLM-1",
        "statement": "Sir George Abraham Grierson in his landmark \"Linguistic Survey of India\" (Vol. IX, Part II, 1908) was the first philologist to coin and use the term \"Rajasthani\" for the speech of Rajputana, categorizing it into five distinct dialect groups: Western Rajasthani (Marwari), Central-Eastern (Dhundhari/Harauti), North-Eastern (Mewati/Ahirwati), Southern (Nimadi), and South-Eastern (Malvi).",
        "claimType": "CULTURAL_HERITAGE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Sir George A. Grierson, Linguistic Survey of India (1908), Vol. IX, Part II; Dr. Moti Lal Menaria, Rajasthani Bhasha aur Sahitya",
        "excerpt": "The word Rajasthani was first employed by Sir George Grierson in 1908 to designate the group of Indo-Aryan dialects spoken in Rajputana."
      },
      {
        "id": "CON-RAJ-014-CLM-2",
        "statement": "Italian Indologist Dr. Luigi Pio Tessitori (1887–1919) classified Rajasthani into two fundamental linguistic branches: Western Rajasthani (dominated by Marwari, ancestral root of Dingal heroic literature) and Eastern Rajasthani (encompassing Dhundhari, Hadoti, and Mewati, giving rise to Pingal braj-blended literature).",
        "claimType": "CULTURAL_HERITAGE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Dr. L.P. Tessitori, A Scheme for the Bardic and Historical Survey of Rajputana (1914); Asiatic Society of Bengal",
        "excerpt": "Tessitori demarcated the linguistic boundary along the Aravalli range, separating Western Rajasthani (Dingal) from Eastern Rajasthani (Pingal)."
      },
      {
        "id": "CON-RAJ-014-CLM-3",
        "statement": "Wagdi dialect, spoken in the southern border district of Dungarpur and Banswara, was classified by George Grierson as \"Bhilodi\" (the dialect of the Bhils), characterized by the systematic phonetic replacement of the consonant \"s\" (स) with \"h\" (ह) and \"ch\" (च) with \"s\" (स).",
        "claimType": "CULTURAL_HERITAGE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Grierson, Linguistic Survey of India (1908); Dr. Kanhaiyalal Sahal, Rajasthani Bhasha evam Boliyan",
        "excerpt": "In Wagdi, the linguistic transformation makes \"Saag\" become \"Haag\" and \"Chalo\" become \"Salo\", exhibiting profound Gujarati phonetic overlay."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Living Tongue of the Desert: Maru-Bhasha to Rajasthani",
        "body": "Every twelve kos in Rajasthan, the water changes, and so does the speech: *\"Barah Kos par Boli Badle, Paanch Kos par Paani\"*. As early as 778 CE, Udhyotan Suri documented **Maru-Bhasha** among the 18 regional languages of India in his epic *Kuvalayamala*. From the thunderous warrior Dingal ballads of the Charans in Marwar to the sweet devotional Dhundhari verses of Dadu Dayal in Jaipur, the dialects of Rajasthan form a treasure trove of linguistic richness.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Master Matrix of Rajasthan Dialects and Literary Styles",
        "body": "| Dialect Group | Major Dialects | Geographical Distribution | Sub-Dialects (*Up-Boliyan*) | Literary Style & Classic Texts |\n|---|---|---|---|---|\n| **1. Marwari**<br>(Western Rajasthani) | **Marwari**<br>(Purest standard form of Rajasthani; largest geographical area) | Jodhpur, Nagaur, Barmer, Jaisalmer, Bikaner, Pali, Jalore | • **Thali** (Bikaner/Churu desert)<br>• **Dhatki** (Barmer/Jaisalmer)<br>• **Godwadi** (Pali/Sirohi, *Visaldev Raso*)<br>• **Maheli** / **Devrawati** (Sirohi) | Primary root of **Dingal** (Heroic bardic style of Charans); texts: *Dhola Maru ra Duha*, *Rao Jaitsi ro Chhand*, *Veli Krishan Rukmani ri* by Prithviraj Rathore |\n| **2. Dhundhari**<br>(Central-Eastern) | **Dhundhari**<br>(Spoken by largest population) | Jaipur, Dausa, Tonk, northern Ajmer (Dhundhar basin) | • **Torawati** (Kantli basin, Sikar/Jhunjhunu)<br>• **Rajawati** (Jaipur rural)<br>• **Chaurasi** (Tonk/Jaipur border)<br>• **Nagar-Chol** (Sawai Madhopur/Tonk)<br>• **Katheri** (Tonk) | Primary language of **Dadu Dayal** and his disciples (*Dadu Dayal ri Vani*, Sundar Das’s works); characterized by the interrogative suffix *\"Chhe\"* / *\"Chho\"* (छे / छो) |\n| **3. Hadoti**<br>(South-Eastern) | **Hadoti**<br>(Most grammatically difficult dialect; heavy tonal pitch) | Kota, Bundi, Baran, Jhalawar (Hadoti plateau) | • **Patvi**<br>• **Kheradi** (Bhilwara/Bundi border mix of Mewari-Dhundhari-Hadoti) | Literature of **Suryamal Misran** (State Poet of Rajasthan / *Kaviraj* of Bundi), author of *Vansh Bhaskar* and *Veer Satsai* |\n| **4. Mewati**<br>(North-Eastern) | **Mewati** | Alwar, Bharatpur (Mewat region) | • **Ahirwati (Rathi)**: Spoken in Kotputli-Behror, Mundawar, Behror; dialect of the Ahirs/Yadavs | Texts of **Sant Charan Das**, **Lal Das Ji**, and female poetesses **Daya Bai** & **Sahjo Bai**; Ahirwati texts: *Hammir Raso* by Jodhraj |\n| **5. Mewari**<br>(Southern-Central) | **Mewari** | Udaipur, Rajsamand, Bhilwara, Chittorgarh (Mewar) | • **Dharadi** (western hilly tract) | Maharana Kumbha’s 4 plays in *Sangeet Raj*; Kavi Shyamaldas (*Vir Vinod*); characteristic sound shifts |\n| **6. Wagdi**<br>(Southern Border) | **Wagdi**<br>(Bhilodi) | Dungarpur, Banswara (Vagad) | Mix of Mewari, Gujarati, and Bhili | Grierson titled it **\"Bhilodi\"**; exhibits \"S\" to \"H\" phonetic shift; oral epics of Saint Mavji (*Chopra*) |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "Dingal vs Pingal Literary Styles",
        "body": "Rajasthani medieval literature is bifurcated into two polar literary traditions: 1. **Dingal (Western)**: Pure blend of Old Marwari and Gujarati; written almost exclusively by **Charans** and **Rajputs**; martial, aggressive, heroic poetry characterized by harsh consonants and alliteration; texts include *Veli Krishan Rukmani ri* and *Rao Jaitsi ro Chhand*. 2. **Pingal (Eastern)**: Blend of Rajasthani (Dhundhari/Mewari) with **Braj Bhasha**; written predominantly by **Bhats** and court poets; lyrical, sweet, devotional and romantic style; texts include *Prithviraj Raso* by Chand Bardai and *Ratan Raso*.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC RAS Prelims & Mains Traps",
        "body": "Top Linguistic Traps: 1. Largest geographical area = **Marwari**; Spoken by largest population = **Dhundhari**. 2. Grierson coined the term \"Rajasthani\" (1908) and classified Wagdi as \"Bhilodi\". 3. Sub-dialects matching: Torawati = Kantli basin (Sikar); Godwadi = Pali/Jalore; Ahirwati (Rathi) = Behror/Kotputli; Nagar-Chol = Tonk/Sawai Madhopur. 4. Saint Dadu Dayal preached in **Dhundhari**, whereas Saint Charan Das preached in **Mewati**.",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Mains Paper I - Language & Literature of Rajasthan: Dialects of Rajasthani Language",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Dialect classification, Grierson, Tessitori, Dingal vs Pingal tested every year."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Indian Languages & Linguistics",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Indo-Aryan linguistic families, Grierson survey."
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Dialects: Marwari (largest area, Dingal). Dhundhari (largest pop, Dadu Dayal, \"Chhe\"). Hadoti (Suryamal Misran). Mewati (Charan Das). Wagdi (\"Bhilodi\", Grierson, S->H). Dingal (West/Charan) vs Pingal (East/Braj/Bhat).",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "The term \"Rajasthani\" was established by Sir George Grierson in 1908 (5 groups), while Dr. L.P. Tessitori divided it into Western (Marwari/Dingal) and Eastern (Dhundhari/Pingal). Key dialects: Marwari (largest area, Dingal poetry); Dhundhari (largest population, Dadu Dayal’s literature); Hadoti (Suryamal Misran); Mewati (Charan Das, Ahirwati); and Wagdi (classified by Grierson as Bhilodi in Vagad with S-to-H phonetic substitution).",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "# Rajasthani Philological Architecture\n\n1. **Genealogy:** Vedic Sanskrit -> Shauraseni Prakrit -> Gurjar Apabhramsha -> Maru-Gurjar (Maru-Bhasha in Kuvalayamala 778 CE) -> Rajasthani.\n2. **Literary Polarities:** Dingal (Western, Marwari root, Charan heroic ballads) vs Pingal (Eastern, Braj blend, Bhat court epics).\n3. **Spatial Dialect Grid:** Marwari (West, largest area) | Dhundhari (East, highest population) | Hadoti (South-East, Suryamal) | Mewati (North-East, Charan Das) | Wagdi (South, Bhilodi).",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "Who among the following scholars first coined and utilized the term \"Rajasthani\" to designate the language and dialects of Rajputana in his 1908 linguistic treatise?",
        "options": [
          "Dr. L.P. Tessitori",
          "Sir George Abraham Grierson",
          "Colonel James Tod",
          "Dr. Moti Lal Menaria"
        ],
        "correctAnswer": "Sir George Abraham Grierson",
        "explanation": "Sir George Abraham Grierson in his monumental \"Linguistic Survey of India\" (Vol. IX, Part II, 1908) first coined and established the term \"Rajasthani\" to categorize the family of dialects spoken across Rajputana.",
        "trapExplanation": "Tessitori conducted bardic surveys, but Grierson officially coined the term Rajasthani in 1908.",
        "difficulty": "BEGINNER",
        "isPYQ": false,
        "modelAnswer": "Sir George Abraham Grierson"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Distinguish between \"Dingal\" and \"Pingal\" as literary styles of medieval Rajasthan.",
        "options": [],
        "correctAnswer": "**Dingal** and **Pingal** represent the two cardinal literary traditions of medieval Rajasthan:\n1. **Dingal**: Rooted in **Western Rajasthani (Marwari)** mixed with Gujarati; developed almost exclusively by **Charan** bards; characterized by harsh, aggressive, alliterative martial tones celebrating chivalry and battlefield valor (*Veer Rasa*). Examples: *Veli Krishan Rukmani ri* by Prithviraj Rathore, *Dhola Maru ra Duha*.\n2. **Pingal**: Rooted in **Eastern Rajasthani (Dhundhari/Mewari)** fused heavily with **Braj Bhasha**; composed predominantly by **Bhat** and court poets; characterized by lyrical, melodious, devotional and romantic meters (*Shringar Rasa*). Example: *Prithviraj Raso* by Chand Bardai.",
        "explanation": "5-mark answer contrasting regional base, dialect mixture, primary authorial caste (Charan vs Bhat), aesthetic rasa, and literary examples.",
        "trapExplanation": "Swapping Charan with Bhat or misattributing Dingal to eastern Rajasthan.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 50,
        "modelAnswer": "**Dingal** and **Pingal** represent the two cardinal literary traditions of medieval Rajasthan:\n1. **Dingal**: Rooted in **Western Rajasthani (Marwari)** mixed with Gujarati; developed almost exclusively by **Charan** bards; characterized by harsh, aggressive, alliterative martial tones celebrating chivalry and battlefield valor (*Veer Rasa*). Examples: *Veli Krishan Rukmani ri* by Prithviraj Rathore, *Dhola Maru ra Duha*.\n2. **Pingal**: Rooted in **Eastern Rajasthani (Dhundhari/Mewari)** fused heavily with **Braj Bhasha**; composed predominantly by **Bhat** and court poets; characterized by lyrical, melodious, devotional and romantic meters (*Shringar Rasa*). Example: *Prithviraj Raso* by Chand Bardai."
      }
    ]
  },
  {
    "id": "CON-RAJ-015",
    "order": 15,
    "slug": "rajasthan-drainage-systems-arabian-sea-bay-of-bengal-inland",
    "title": "Rajasthan Drainage Systems: Arabian Sea, Bay of Bengal & Inland Drainage Basins",
    "shortDefinition": "Hydrographic architecture, watershed divide of the Aravallis, and comparative river morphology across Rajasthan’s 3 drainage systems: Arabian Sea basin (Luni, Mahi, Sabarmati, West Banas — ~17% area), Bay of Bengal basin (Chambal, Banas, Banganga — ~23% area), and Inland Drainage systems (Ghaggar, Kantli, Sabi, Ruparel, Kakani — ~60% area).",
    "difficulty": "ADVANCED",
    "topicSlug": "rajasthan-physical-geography-and-drainage",
    "topicTitle": "Rajasthan Physical Geography, Hydro-Minerals & Agriculture",
    "topicOrder": 3,
    "topicDescription": "Drainage systems, agro-climatic zones, ICAR soil classifications, mineral wealth (metallic/non-metallic), and mega irrigation engineering (IGNP, ERCP, Narmada canal).",
    "subjectSlug": "rajasthan-history-culture-geography",
    "claims": [
      {
        "id": "CON-RAJ-015-CLM-1",
        "statement": "The Great Indian Watershed (Aravalli Range) divides Rajasthan into three distinct river drainage networks: Inland Drainage Basin covering ~60.2% of total state drainage area, Bay of Bengal Drainage Basin covering ~22.4%, and Arabian Sea Drainage Basin covering ~17.4%.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Water Resources Department (WRD), Govt. of Rajasthan; State Water Policy Report; Dr. H.M. Saxena, Geography of Rajasthan",
        "excerpt": "Due to low gradient and high arid evaporation, over 60% of Rajasthan’s surface drainage terminates inland into desert depressions without reaching any ocean."
      },
      {
        "id": "CON-RAJ-015-CLM-2",
        "statement": "The Chambal River (originating from Janapav hills, Vindhyan range, MP) is Rajasthan’s only perennial river with the highest surface water yield, flowing through a gorge at Chaurasigarh (Chittorgarh) and forming a 241 km inter-state boundary with MP, notorious for Badland Topography (Chambal Ravines / Utkhat Bhumi).",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Central Water Commission (CWC); Rajasthan WRD Basin Atlas; Survey of India",
        "excerpt": "Chambal is the master stream of eastern Rajasthan, celebrated for the Chulia Waterfall (18 m) and extensive gully erosion ravines in Kota, Sawai Madhopur, and Dholpur."
      },
      {
        "id": "CON-RAJ-015-CLM-3",
        "statement": "The Luni River (originating as Sagarmati from Nag Pahar, Ajmer) is the sole master stream of the arid west, flowing 495 km (330 km in Rajasthan) through 6 districts into the Rann of Kutch; its waters remain fresh until Balotra (Barmer), turning brackish/saline downstream due to high surface salt deposits.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Central Ground Water Board (CGWB); Luni Basin Hydrogeology Report; Dr. Saxena",
        "excerpt": "Luni is called \"Aadhi Meethi, Aadhi Khari\" because its water turns salty after passing the saline soils and gypsum beds of Balotra."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Rivers in the Dust: The Hydrological Miracle of Rajasthan",
        "body": "Rajasthan contains 10.4% of India’s total geographical land area, but possesses only **1.16% of the nation’s surface water resources**. With no perennial rivers in the western half, how did civilization survive? The Aravalli Range acts as a colossal continental spine. Rivers originating on its eastern slopes (Banas) flow towards the Bay of Bengal; streams on its western flanks (Luni) crawl towards the Arabian Sea; and in the dry interior, rivers emerge during the monsoon and evaporate silently into salt playas.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Master Matrix of Rajasthan Drainage Systems & Rivers",
        "body": "| River Drainage System | River Name | Origin & Entry Point | Termination / Confluence | Key Tributaries & Distinctive Features |\n|---|---|---|---|---|\n| **1. Bay of Bengal Basin**<br>(~22.4% Area) | **Chambal** (*Charmanvati / Kamdhenu*) | Janapav Hills (Mhow, MP); enters at **Chaurasigarh** (Chittorgarh) | Confluence with Yamuna at Muradganj (Etawah, UP) | Perennial; 965 km total (135 km in Raj, 241 km border); **Chulia Waterfall** (18 m, Bhensrorgarh); 4 dams (Gandhi Sagar, Rana Pratap Sagar, Jawahar Sagar, Kota Barrage); Ravines (*Behad*) |\n| | **Banas** (*Van ki Asha / Vashishti*) | Khamnor Hills (Kumbhalgarh, Rajsamand) | Confluence with Chambal at **Rameshwaram** (Sawai Madhopur) | **Longest river flowing entirely within Rajasthan (512 km)**; Triveni Sangam at Bigod (Banas, Berach, Menal); Bisalpur Dam (Tonk - drinking water lifeline) |\n| | **Banganga** (*Arjun ki Ganga*) | Bairath Hills (Kotputli-Behror/Jaipur) | Yamuna (Fatehabad, UP); now mostly inland | Formerly Bay of Bengal, now designated as **Rundit Nadi** (stranded stream terminating before reaching Yamuna); Jamwa Ramgarh Dam |\n| **2. Arabian Sea Basin**<br>(~17.4% Area) | **Luni** (*Lavanavati / Maru-Asha*) | Nag Pahar (Ajmer) as *Sagarmati*; joins Saraswati at Govindgarh | Drains into Little **Rann of Kutch** (Gujarat) | 495 km total (330 km in Raj); Drains Godwar tract; **Fresh till Balotra, saline downstream**; Right-bank sole tributary: **Jojari** (originates in Nagaur hills, not Aravallis) |\n| | **Mahi** (*Ganga of Vagad / Kanthal*) | Amjhera (Mehad Lake, Dhar, MP); enters at Khandoo (Banswara) | Drains into **Gulf of Khambhat** (Arabian Sea) | **Crosses Tropic of Cancer twice** in an inverted \"U\" shape; **Mahi Bajaj Sagar Dam** (Banswara); Triveni Sangam at **Beneshwar Dham** (Mahi, Som, Jakham) |\n| | **Sabarmati** | Padarada hills (Udaipur) | Gulf of Khambhat | 416 km total (only 44 km in Raj); main river of Gujarat, but originates in Rajasthan; Sei project tunnel |\n| **3. Inland Drainage**<br>(~60.2% Area) | **Ghaggar** (*Dead River / Saraswati*) | Shivalik Hills (Kalka, HP); enters at Tibbi (Hanumangarh) | Disappears in Bhatner sands; during floods reaches **Fort Abbas** (Pakistan) | Only international river of Rajasthan; Bed called **Nali**; Pakistan stretch called **Hakra**; Ottu reservoir |\n| | **Kantli** | Khandela Hills (Sikar) | Disappears in sand dunes of Churu border | 100 km length; Entirely internal within Rajasthan; Basin called **Torawati**; **Ganeshwar civilization** (copper age) situated on its banks |\n| | **Sabi (Sahibi)** | Sewar Hills (Jaipur) | Disappears in Najafgarh drain (Haryana) | Jodhpura civilization situated on its banks |\n| | **Kakani (Masurdi)** | Kotari village (Jaisalmer) | Disappears in desert; fills Bhuj Lake | Shortest inland river of Rajasthan (**only 17 km**) |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "Hydrographic Anomaly: The Salinity Transition of Luni at Balotra",
        "body": "Why does the Luni River flow fresh for over 150 km from Ajmer and suddenly turn salty at Balotra? 1. Upstream of Balotra, the river drains granitic and schistose rocks of the Aravallis with minimal salt concentration. 2. At Balotra, the river gradient flattens dramatically as it enters the semi-arid Godwar plain. 3. The surrounding soils are rich in sodium chloride, atmospheric marine salt spray carried by south-west monsoon winds, and extensive subterranean gypsum/anhydrite beds. 4. High evaporation precipitates these salts, dissolving them into the shallow river channel.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC RAS Prelims & Mains Traps",
        "body": "High-Frequency Traps: 1. **Tropic of Cancer Intersection**: River Mahi is the ONLY river in India that crosses the Tropic of Cancer ($23.5^\\circ$ N) twice. 2. **Luni Tributary Anomaly**: All left-bank tributaries of Luni (Jawai, Sukri, Bandi, Guhiya) originate from the Aravallis; the ONLY right-bank tributary is **Jojari**, which originates in the non-Aravalli hills of Pondlu (Nagaur)! 3. Longest river within Rajasthan = Banas (512 km); Longest river flowing through Rajasthan = Chambal (965 km).",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Mains Paper I - Geography of Rajasthan: Drainage System and Lakes",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Chambal, Banas, Luni, Mahi, and inland rivers are tested every cycle."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Indian Geography - Drainage Systems",
        "relevance": "MEDIUM",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Peninsular rivers, inland drainage systems of Thar."
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Drainage: Inland (60.2%, Ghaggar, Kantli), Bay of Bengal (22.4%, Chambal, Banas), Arabian Sea (17.4%, Luni, Mahi). Mahi crosses Tropic of Cancer twice. Luni turns saline at Balotra; Jojari is only right-bank tributary.",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Rajasthan’s drainage is split across the Aravalli watershed into Inland (~60%), Bay of Bengal (~22%), and Arabian Sea (~17%). Key rivers: Chambal (only perennial river, Chulia waterfall, ravines); Banas (longest entirely in Rajasthan, 512 km, Bisalpur dam); Luni (sole master stream of Thar, turning saline at Balotra with Jojari as sole right-bank tributary); and Mahi (crosses Tropic of Cancer twice, forming Beneshwar Sangam).",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "# Rajasthan Hydrographic Architecture\n\n1. **Inland (~60%):** Ghaggar (Nali/Hakra) | Kantli (Torawati, Ganeshwar) | Kakani (17 km, Bhuj lake).\n2. **Arabian Sea (~17%):** Luni (Balotra salinity threshold, Jojari right bank) | Mahi (Inverted U, Tropic of Cancer twice, Beneshwar Triveni).\n3. **Bay of Bengal (~22%):** Chambal (4 dams, ravines) | Banas (Van ki Asha, Bisalpur lifeline) | Banganga (Rundit river).",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "Which of the following tributaries of the Luni River is the ONLY one that originates from the non-Aravalli hills (Pondlu, Nagaur) and joins the Luni from its right bank?",
        "options": [
          "Jawai",
          "Sukri",
          "Jojari",
          "Bandi"
        ],
        "correctAnswer": "Jojari",
        "explanation": "Jojari is the only tributary of the Luni River that meets it from the right bank, and the only one that originates in the non-Aravalli hills of Pondlu village in Nagaur district. All other tributaries (Jawai, Sukri, Bandi, Guhiya, Lilri) join from the left bank and originate from the Aravallis.",
        "trapExplanation": "Jawai is the largest left-bank tributary (housing Jawai Dam), not the right-bank tributary.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "modelAnswer": "Jojari"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Explain the hydro-geographical significance of the Mahi River in southern Rajasthan.",
        "options": [],
        "correctAnswer": "The **Mahi River** (*Ganga of Vagad* / *Kanthal ki Ganga*) is the lifeline of southern Rajasthan: 1. **Tropic of Cancer Anomaly**: It is the only river in India that crosses the Tropic of Cancer ($23.5^\\circ$ N) twice in an inverted \"U\" trajectory. 2. **Beneshwar Dham Triveni Sangam**: Forms the sacred confluence of the Mahi, Som, and Jakham rivers at Nawata-Pura (Dungarpur), hosting the legendary tribal Kumbh. 3. **Irrigation & Hydro-Power**: The **Mahi Bajaj Sagar Dam** (Banswara, longest dam in Rajasthan at 3,109 m) provides vital canal irrigation and electricity to tribal districts.",
        "explanation": "5-mark answer detailing the Tropic of Cancer crossing, Beneshwar Sangam, and Mahi Bajaj Sagar dam.",
        "trapExplanation": "Failing to mention that it crosses the Tropic of Cancer twice.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 50,
        "modelAnswer": "The **Mahi River** (*Ganga of Vagad* / *Kanthal ki Ganga*) is the lifeline of southern Rajasthan: 1. **Tropic of Cancer Anomaly**: It is the only river in India that crosses the Tropic of Cancer ($23.5^\\circ$ N) twice in an inverted \"U\" trajectory. 2. **Beneshwar Dham Triveni Sangam**: Forms the sacred confluence of the Mahi, Som, and Jakham rivers at Nawata-Pura (Dungarpur), hosting the legendary tribal Kumbh. 3. **Irrigation & Hydro-Power**: The **Mahi Bajaj Sagar Dam** (Banswara, longest dam in Rajasthan at 3,109 m) provides vital canal irrigation and electricity to tribal districts."
      }
    ]
  },
  {
    "id": "CON-RAJ-016",
    "order": 16,
    "slug": "rajasthan-agro-climatic-zones-icar-and-soils-classification",
    "title": "Rajasthan Agro-Climatic Zones (10 ICAR Zones) & USDA Soil Taxonomy (Aridisols, Alfisols, Vertisols, Inceptisols, Entisols)",
    "shortDefinition": "Pedological and agricultural zoning of Rajasthan: The 10 distinct Agro-Climatic Zones categorized by ICAR (Zone I-A Arid Western to Zone V Humid South Eastern), crop suitability patterns, and the modern USDA Comprehensive Soil Taxonomy mapping (Aridisols, Entisols, Alfisols, Vertisols, Inceptisols) against traditional soil nomenclature.",
    "difficulty": "ADVANCED",
    "topicSlug": "rajasthan-physical-geography-and-drainage",
    "topicTitle": "Rajasthan Physical Geography, Hydro-Minerals & Agriculture",
    "topicOrder": 3,
    "topicDescription": "Drainage systems, agro-climatic zones, ICAR soil classifications, mineral wealth (metallic/non-metallic), and mega irrigation engineering (IGNP, ERCP, Narmada canal).",
    "subjectSlug": "rajasthan-history-culture-geography",
    "claims": [
      {
        "id": "CON-RAJ-016-CLM-1",
        "statement": "The Indian Council of Agricultural Research (ICAR) and Department of Agriculture divide Rajasthan into 10 distinct Agro-Climatic Zones based on precipitation, thermal regime, physiography, and cropping patterns, ranging from Zone I-A (Arid Western Plain) to Zone V (Humid South-Eastern Plain).",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "ICAR National Agricultural Research Project (NARP) Classification; Directorate of Agriculture, Govt. of Rajasthan",
        "excerpt": "Rajasthan is divided into 10 agro-climatic zones, with Zone I-C (Hyper-Arid Partially Irrigated) being the largest by geographical area."
      },
      {
        "id": "CON-RAJ-016-CLM-2",
        "statement": "Under the USDA Soil Taxonomy adopted by the Soil Survey of India, Rajasthan’s soils are mapped into five principal orders: Aridisols (desert soils with minimal organic horizons), Entisols (immature alluvial/dune soils with no genetic horizons), Alfisols (mature fertile reddish-brown soils), Vertisols (montmorillonite-rich black cotton soils with shrink-swell churning), and Inceptisols (incipient Aravalli brown hill soils).",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "National Bureau of Soil Survey and Land Use Planning (NBSS&LUP); USDA Soil Taxonomy (7th Approximation)",
        "excerpt": "Aridisols and Entisols dominate the western Thar plain, while Vertisols are confined to the basaltic Hadoti plateau and Alfisols to the eastern alluvial plains."
      },
      {
        "id": "CON-RAJ-016-CLM-3",
        "statement": "Vertisols (Black soils / Regur) in Hadoti (Kota, Bundi, Baran, Jhalawar) exhibit self-ploughing characteristics due to high concentrations of 2:1 expanding montmorillonite clay minerals, making them ideally suited for moisture-intensive cash crops like soybean, coriander, and cotton.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "NBSS&LUP Soil Bulletin; Agriculture University Kota Reports",
        "excerpt": "Vertisols swell during rains forming deep mud and develop wide, deep desiccation fissures during dry spells, enabling excellent moisture retention."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Decoding the Soil Mosaic: Sand Dunes to Black Cotton Clay",
        "body": "Few places on earth showcase such extreme agricultural diversity within a single state boundary. Drive 400 km west from Jhalawar to Jaisalmer: you move from humid vertisol plains where soybean and orange orchards thrive on 100 cm of rainfall, to hyper-arid yellow sand dunes receiving under 15 cm of rain where only pearl millet (Bajra) and Moth bean survive. Understanding this ecological mosaic through ICAR agro-climatic zones and USDA soil orders is the foundation of Rajasthan agronomy.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "The 10 Agro-Climatic Zones of Rajasthan Master Matrix",
        "body": "| Zone Code & Name | Covered Districts / Tehsils | Rainfall & Climate | Dominant Soil Order | Primary Kharif & Rabi Crops |\n|---|---|---|---|---|\n| **I-A: Arid Western Plain** | Barmer, Jodhpur (western tehsils) | 200–370 mm; Arid | Aridisols & Entisols | Bajra, Moth, Moong, Til; Isabgol, Cumin (Jeera) |\n| **I-B: Irrigated North Western Plain** | Sri Ganganagar, Hanumangarh | 100–350 mm; Arid (Canal irrigated) | Entisols (Alluvial) | Cotton, Guar, Sugarcane, Kinnow; Wheat, Mustard (*Granary of Rajasthan*) |\n| **I-C: Hyper-Arid Partially Irrigated**<br>(**Largest Zone by Area**) | Bikaner, Jaisalmer, Churu | 100–300 mm; Extreme Arid | Aridisols & Entisols (Dunes) | Bajra, Moth, Groundnut (Bikaner); Gram, Mustard |\n| **II-A: Internal Drainage Dry Zone** | Nagaur, Sikar, Jhunjhunu (Shekhawati) | 300–500 mm; Semi-Arid | Aridisols & Inceptisols | Bajra, Pulses (Moong), Guar; Mustard, Gram, Fenugreek (Methi) |\n| **II-B: Transitional Plain of Luni Basin** | Jalore, Pali, Sirohi (Sheoganj) | 300–500 mm; Semi-Arid | Inceptisols & Aridisols | Bajra, Pulses, Castor (Arandi); Cumin, Isabgol, Wheat |\n| **III-A: Semi-Arid Eastern Plain** | Jaipur, Ajmer, Dausa, Tonk | 500–700 mm; Semi-Arid | Alfisols & Inceptisols | Bajra, Groundnut, Sorghum (Jowar); Wheat, Mustard, Barley |\n| **III-B: Flood-Prone Eastern Plain** | Alwar, Bharatpur, Dholpur, Sawai Madhopur, Karauli | 500–750 mm; Sub-Humid | **Alfisols** (Rich Alluvial) | Bajra, Guar; **Mustard** (Rape-mustard capital), Wheat |\n| **IV-A: Sub-Humid Southern Plain** | Bhilwara, Rajsamand, Udaipur (Chittor parts) | 500–900 mm; Sub-Humid | Inceptisols & Alfisols | Maize (Makka - staple), Pulses; Wheat, Gram |\n| **IV-B: Humid Southern Plain**<br>(**Smallest Zone by Area**) | Banswara, Dungarpur, Pratapgarh | 700–1100 mm; Humid | Inceptisols & Lithosols | Maize, Rice, Soybean, Cotton; Wheat, Gram |\n| **V: Humid South-Eastern Plain** | Kota, Bundi, Baran, Jhalawar (Hadoti) | 650–1000 mm; Humid | **Vertisols** (Deep Black Soil) | **Soybean**, Coriander (Dhaniya), Orange (Santra), Cotton; Wheat, Garlic |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "Modern USDA Soil Taxonomy vs Traditional Nomenclature",
        "body": "Mapping the 5 USDA Soil Orders in Rajasthan: 1. **Aridisols (Marusthali Soils)**: Found in dry western districts (Jodhpur, Barmer, Jaisalmer, Nagaur); characterized by low humus and high calcium carbonate caliche layers (*Kankar*). 2. **Entisols (Sandy Dune Soils)**: Unconsolidated regosols covering shifting dunes across Thar. 3. **Alfisols (Jalodh / Alluvial Soils)**: Deep, fertile brown/yellow soils with clay-enriched subhorizons in eastern plains (Jaipur, Alwar, Bharatpur). 4. **Vertisols (Kali Mitti / Regur)**: Expanding clay soils in Hadoti (Kota, Jhalawar) rich in montmorillonite. 5. **Inceptisols (Pahari Mitti)**: Weakly developed brown hill soils in Aravalli slopes (Udaipur, Sirohi, Rajsamand).",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC RAS Prelims & Mains Traps",
        "body": "High-yield points: 1. Largest agro-climatic zone by geographical area = **Zone I-C (Hyper-Arid Partially Irrigated)**; Smallest zone by area = **Zone IV-B (Humid Southern Plain)**. 2. Vertisols are found exclusively in the Hadoti division (Kota, Bundi, Baran, Jhalawar). 3. Maize (*Makka*) is the staple food grain and signature crop of Zone IV-A and IV-B (southern Rajasthan).",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Mains Paper I - Geography of Rajasthan: Agro-Climatic Zones and Soils",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "10 agro-climatic zones and USDA soil orders are tested in Prelims and Mains every exam cycle."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Indian Agriculture & Agro-Ecological Zones",
        "relevance": "HIGH",
        "priority": "P1",
        "requiredDepth": "MODERATE",
        "notes": "ICAR classification, Vertisols, Aridisols."
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Agro-Climatic: 10 Zones (I-A to V). Largest = I-C (Hyper-Arid Bikaner/Jaisalmer); Smallest = IV-B (Banswara/Dungarpur). USDA Soils: Aridisols (West), Entisols (Dunes), Alfisols (East Alluvium), Vertisols (Hadoti Black), Inceptisols (Aravalli).",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Rajasthan is divided into 10 ICAR agro-climatic zones. Zone I-C is the largest in area, while Zone IV-B is the smallest. Soil orders under USDA taxonomy: Aridisols and Entisols dominate the arid west; Alfisols form the fertile alluvial eastern plains; Vertisols (expanding black montmorillonite clay) are concentrated in the Hadoti basin supporting soybean and coriander; and Inceptisols blanket the Aravalli foothills supporting maize.",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "# Agro-Climatic & Soil Correlation Architecture\n\n1. **Arid Zone Group (I-A, I-B, I-C):** Aridisols/Entisols | Bajra, Moth, Kinnow, Cotton.\n2. **Transitional / Semi-Arid Group (II-A, II-B, III-A):** Inceptisols/Alfisols | Pulses, Guar, Mustard, Wheat.\n3. **Flood Plain (III-B):** Alfisols | Mustard capital (Bharatpur).\n4. **Southern Tribal (IV-A, IV-B):** Inceptisols | Maize staple.\n5. **Hadoti Basalt (V):** Vertisols | Soybean, Orange, Coriander.",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "According to the USDA Soil Taxonomy, which soil order is found exclusively in the south-eastern Hadoti plateau (Kota, Bundi, Baran, Jhalawar) of Rajasthan?",
        "options": [
          "Aridisols",
          "Vertisols",
          "Alfisols",
          "Entisols"
        ],
        "correctAnswer": "Vertisols",
        "explanation": "Vertisols (characterized by high montmorillonite clay content and deep shrink-swell cracking, traditionally known as Black Cotton Soil or Regur) are confined exclusively to the south-eastern Hadoti region (Kota, Bundi, Baran, Jhalawar) of Rajasthan.",
        "trapExplanation": "Alfisols are found in the eastern plains (Jaipur, Alwar), while Aridisols are in western Rajasthan.",
        "difficulty": "BEGINNER",
        "isPYQ": false,
        "modelAnswer": "Vertisols"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Name the largest and smallest Agro-Climatic Zones of Rajasthan by geographical area, and list their key agricultural features.",
        "options": [],
        "correctAnswer": "1. **Largest Zone: Zone I-C (Hyper-Arid Partially Irrigated Plain)**:\n   - *Districts*: Bikaner, Jaisalmer, and Churu.\n   - *Features*: Extreme arid climate (<300 mm rain), shifting sand dunes, Aridisols/Entisols. With canal irrigation from IGNP, it has emerged as a major producer of groundnut (Bikaner), wheat, and gram.\n2. **Smallest Zone: Zone IV-B (Humid Southern Plain)**:\n   - *Districts*: Banswara, Dungarpur, and Pratapgarh.\n   - *Features*: High rainfall (700–1,100 mm), Inceptisols, hilly tribal topography. Characterized by subsistence farming of **Maize** (*Makka* - staple crop), paddy, and soybean.",
        "explanation": "5-mark answer identifying Zone I-C as largest and Zone IV-B as smallest with districts and crops.",
        "trapExplanation": "Confusing Zone I-A (Arid Western) with Zone I-C (Hyper-Arid) as the largest zone.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 50,
        "modelAnswer": "1. **Largest Zone: Zone I-C (Hyper-Arid Partially Irrigated Plain)**:\n   - *Districts*: Bikaner, Jaisalmer, and Churu.\n   - *Features*: Extreme arid climate (<300 mm rain), shifting sand dunes, Aridisols/Entisols. With canal irrigation from IGNP, it has emerged as a major producer of groundnut (Bikaner), wheat, and gram.\n2. **Smallest Zone: Zone IV-B (Humid Southern Plain)**:\n   - *Districts*: Banswara, Dungarpur, and Pratapgarh.\n   - *Features*: High rainfall (700–1,100 mm), Inceptisols, hilly tribal topography. Characterized by subsistence farming of **Maize** (*Makka* - staple crop), paddy, and soybean."
      }
    ]
  },
  {
    "id": "CON-RAJ-017",
    "order": 17,
    "slug": "mineral-resources-rajasthan-museum-of-minerals-metallic-non-metallic",
    "title": "Mineral Resources of Rajasthan: \"Museum of Minerals\", Monopoly Minerals & Hydrocarbons (Barmer Basin)",
    "shortDefinition": "Geological distribution, production leadership, and economic geology of Rajasthan’s mineral wealth: Virtual monopoly in lead-zinc, wollastonite, selenite, and jasper; metallic belts (Khetri copper, Zawar lead-zinc-silver); non-metallic treasures (marble, granite, rock phosphate at Jhamarkotra, gypsum); and the Barmer-Sanchore on-shore petroleum basin (Mangala, Bhagyam, Aishwariya).",
    "difficulty": "ADVANCED",
    "topicSlug": "rajasthan-physical-geography-and-drainage",
    "topicTitle": "Rajasthan Physical Geography, Hydro-Minerals & Agriculture",
    "topicOrder": 3,
    "topicDescription": "Drainage systems, agro-climatic zones, ICAR soil classifications, mineral wealth (metallic/non-metallic), and mega irrigation engineering (IGNP, ERCP, Narmada canal).",
    "subjectSlug": "rajasthan-history-culture-geography",
    "claims": [
      {
        "id": "CON-RAJ-017-CLM-1",
        "statement": "Rajasthan is acclaimed as the \"Museum of Minerals\" (*Khanijon ka Ajaibghar*), producing 81 different types of minerals (57 mined commercially) and holding 100% or near-complete national monopoly in Lead & Zinc, Wollastonite, Selenite, and Jasper.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Directorate of Mines & Geology (DMG), Govt. of Rajasthan; Indian Minerals Yearbook (IBM Nagpur)",
        "excerpt": "Rajasthan is the sole producer in India of Wollastonite, Jasper, and Selenite, and accounts for over 90% of lead-zinc, gypsum, and silver production."
      },
      {
        "id": "CON-RAJ-017-CLM-2",
        "statement": "Jhamarkotra (Udaipur) possesses India’s largest and purest rock phosphate deposit (essential for superphosphate chemical fertilizers), mined by Rajasthan State Mines and Minerals Limited (RSMML), while the Rampura-Agucha mine (Bhilwara) operated by Hindustan Zinc Limited (HZL) holds the world’s richest single deposit of lead-zinc ore.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "RSMML Annual Mineral Survey; HZL Rampura-Agucha Technical Bulletin; IBM",
        "excerpt": "Rampura-Agucha in Bhilwara district has the highest geological zinc-lead grade in the world (over 15% combined metal content)."
      },
      {
        "id": "CON-RAJ-017-CLM-3",
        "statement": "The Barmer-Sanchore Hydrocarbon Basin holds India’s largest on-shore crude oil discovery of the 21st century (Mangala Field discovered in 2004, followed by Bhagyam and Aishwariya), producing ~20% of India’s domestic crude oil, anchored by the HPCL Rajasthan Refinery Limited (HRRL) at Pachpadra (Barmer).",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Directorate General of Hydrocarbons (DGH); Cairn Oil & Gas (Vedanta); HPCL Rajasthan Refinery Limited",
        "excerpt": "Commercial crude oil production commenced from the Mangala oilfield on 29 August 2009, making Rajasthan the second largest crude oil producer in India after Bombay High."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Subterranean Treasure Chest of India",
        "body": "From outer space, western and central Rajasthan looks like dry, barren rock and sand dunes. But beneath that desert surface lies an astonishing subterranean vault of wealth. The ancient Precambrian rocks of the Aravalli craton and the deep sediments of the Thar desert contain everything from world-class lead and zinc veins mined since the Harappan era, to the finest Makrana marble that built the Taj Mahal, and subterranean oilfields gushing black gold in the Barmer desert.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Master Matrix of Rajasthan Mineral Wealth",
        "body": "| Mineral Category | Mineral Name | National Production Share / Rank | Major Mining Belts & Districts | Economic / Industrial Significance |\n|---|---|---|---|---|\n| **1. Monopoly Minerals**<br>(100% or Near-Complete) | **Wollastonite** | **100% (Sole Producer)** | Kheda-Uparla (Sirohi), Belka (Udaipur), Ajmer | Ceramic glaze, paints, plastics, friction materials |\n| | **Jasper** | **100% (Sole Producer)** | Jodhpur, Jaisalmer | Semiprecious gemstone, decorative lapidary arts |\n| | **Selenite** | **100% (Sole Producer)** | Lunkaransar (Bikaner), Thob (Barmer) | Crystalline form of gypsum; fertilizer, optical instruments |\n| | **Lead & Zinc (with Silver)** | **>95% (Rank 1)** | **Rampura-Agucha** (Bhilwara - world’s richest), **Zawar** (Udaipur), Rajpura-Dariba & Sindesar Khurd (Rajsamand), Chauth ka Barwara (Sawai Madhopur) | Smelted by Hindustan Zinc Ltd (HZL) at Chanderiya (Chittor - largest zinc smelter) and Dariba; Silver extracted as byproduct |\n| **2. Non-Metallic Minerals** | **Rock Phosphate** | **>90% (Rank 1)** | **Jhamarkotra** (Udaipur - largest in India), Maton (Udaipur), Birmania (Jaisalmer) | Raw material for chemical phosphatic fertilizers; beneficiation plant by RSMML |\n| | **Gypsum** | **>90% (Rank 1)** | **Jamsar** (Bikaner - largest mine), Badwasi (Nagaur), Mohangarh (Jaisalmer) | Plaster of Paris, cement retarder, reclamation of alkaline soils |\n| | **Marble & Granite** | **Rank 1 in India** | • Marble: **Makrana** (Nagaur - Calcitic), Rajsamand, Kishangarh (Asia’s marble hub), Bhaislana (Black), Babarmal (Pink).<br>• Granite: Jalore (*Granite City*) | Building stones; Makrana marble granted UNESCO Global Heritage Stone status |\n| **3. Metallic Minerals** | **Copper** | **Rank 2 in India** (after MP) | **Khetri-Singhana** (Jhunjhunu), Chandmari, Kolihan, Kho-Dariba (Alwar), Delwara (Udaipur) | Hindustan Copper Ltd (HCL) smelter at Khetri; electrical cables, alloys |\n| | **Iron Ore** | Rank 4 in India | **Morija-Banol** (Jaipur), Neemla-Raisela (Dausa), Dabla (Sikar), Nathra ki Pal (Udaipur) | Hematite ore; steel manufacturing |\n| **4. Hydrocarbons** | **Petroleum (Crude Oil)** | **Rank 2 in India** (~20% on-shore) | **Barmer-Sanchore Basin**: Mangala, Bhagyam, Aishwariya, Saraswati, Raageshwari (gas) | 4 Hydrocarbon Basins in Raj; Barmer-Sanchore, Jaisalmer, Bikaner-Nagaur, Vindhyan. **Pachpadra Refinery (HRRL)**: 9 MMTPA capacity with integrated petrochemical complex |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "The 4 Hydrocarbon Basins of Rajasthan",
        "body": "Rajasthan covers 1.5 lakh sq km of prospective oil and gas basins across 14 districts in 4 basins: 1. **Barmer-Sanchore Basin**: Prolific crude oil basin (Mangala field, Bhagyam, Aishwariya; operated by Cairn/Vedanta). 2. **Jaisalmer Basin**: Primary gas basin (Manhera Tibba, Tanot, Dandewala, Shahgarh bulge; focus of Focus Energy and ONGC). 3. **Bikaner-Nagaur Basin**: Heavy crude oil and bitumen (Poonam oilfield discovered by ONGC, Baghewala). 4. **Vindhyan Basin**: South-eastern belt (Kota, Baran, Jhalawar) currently under exploration.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC RAS Prelims & Mains Traps",
        "body": "High-Yield Examiner Traps: 1. **Monopoly Minerals Mnemonic**: Remember **W-J-S-Z** -> **W**ollastonite, **J**asper, **S**elenite, **Z**inc (Lead-Zinc). 2. Rock phosphate largest mine = **Jhamarkotra** (Udaipur). 3. The first commercial oil well in Barmer was **Mangala-1** (commenced production on 29 August 2009). 4. Pachpadra Refinery (HRRL) is a joint venture between HPCL (74%) and the Government of Rajasthan (26%) with BS-VI fuel standard.",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Mains Paper I - Geography of Rajasthan: Mineral Resources - Metallic, Non-Metallic and Hydrocarbons",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Monopoly minerals, mining locations, and Barmer petroleum basin are guaranteed questions."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Indian Geography - Natural Resources & Energy",
        "relevance": "HIGH",
        "priority": "P1",
        "requiredDepth": "MODERATE",
        "notes": "Lead-zinc deposits, non-metallic minerals, on-shore petroleum."
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Minerals: Museum of Minerals (81 minerals). 100% Monopoly: Wollastonite, Jasper, Selenite, Zinc-Lead. Rock Phosphate: Jhamarkotra (Udaipur). Gypsum: Jamsar. Oilfields: Barmer-Sanchore (Mangala, Bhagyam, Aishwariya, Pachpadra HRRL 74:26).",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Rajasthan is the \"Museum of Minerals\" holding a virtual national monopoly in Wollastonite, Jasper, Selenite, Lead-Zinc (Rampura-Agucha), and Gypsum (Jamsar). It houses India’s premier rock phosphate mine at Jhamarkotra and Khetri copper belt. In hydrocarbons, the Barmer-Sanchore basin (Mangala, Bhagyam, Aishwariya) produces ~20% of domestic crude oil, anchored by the Pachpadra refinery (HPCL 74% : GoR 26%).",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "# Rajasthan Mineral Resource Hierarchy\n\n1. **Monopoly Minerals:** Wollastonite (100%) | Jasper (100%) | Selenite (100%) | Lead-Zinc-Silver (>95%, Rampura-Agucha, Zawar).\n2. **Industrial Non-Metallic:** Rock Phosphate (Jhamarkotra) | Gypsum (Jamsar) | Marble (Makrana UNESCO).\n3. **Metallic Belts:** Copper (Khetri-Singhana, HCL) | Iron (Morija-Banol).\n4. **Hydrocarbons:** 4 Basins | Barmer-Sanchore (Mangala 2004) | Pachpadra Refinery (9 MMTPA, 74:26 equity).",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "At which of the following locations is India’s largest and richest deposit of Rock Phosphate mined by RSMML in Rajasthan?",
        "options": [
          "Rampura-Agucha",
          "Jhamarkotra",
          "Khetri",
          "Lunkaransar"
        ],
        "correctAnswer": "Jhamarkotra",
        "explanation": "Jhamarkotra (located 26 km south-east of Udaipur) possesses the largest and richest commercial deposit of Rock Phosphate in India, mined by Rajasthan State Mines and Minerals Limited (RSMML) with an integrated beneficiation plant.",
        "trapExplanation": "Rampura-Agucha is famous for Lead-Zinc; Khetri for Copper; Lunkaransar for Gypsum/Salt.",
        "difficulty": "BEGINNER",
        "isPYQ": false,
        "modelAnswer": "Jhamarkotra"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Write a concise note on the \"Barmer-Sanchore Petroleum Basin\" and its significance for Rajasthan’s economy.",
        "options": [],
        "correctAnswer": "The **Barmer-Sanchore Basin** is a premier on-shore hydrocarbon province located in western Rajasthan: 1. **Major Discoveries**: Contains massive crude oil fields discovered by Cairn Oil & Gas (Vedanta), including **Mangala** (discovered 2004, production began 2009), **Bhagyam**, **Aishwariya**, and Saraswati. 2. **National Output**: Produces approximately **20% of India’s domestic crude oil**, establishing Rajasthan as the second-largest crude producer in India after offshore Bombay High. 3. **Pachpadra Refinery (HRRL)**: Catalyzed the establishment of a 9 MMTPA capacity petroleum refinery and petrochemical complex at Pachpadra (joint venture between HPCL 74% and Govt. of Rajasthan 26%).",
        "explanation": "5-mark answer covering basin name, major oilfields, 20% national output, and the Pachpadra refinery joint venture.",
        "trapExplanation": "Omitting the names of specific fields (Mangala, Bhagyam, Aishwariya) or the Pachpadra refinery.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 50,
        "modelAnswer": "The **Barmer-Sanchore Basin** is a premier on-shore hydrocarbon province located in western Rajasthan: 1. **Major Discoveries**: Contains massive crude oil fields discovered by Cairn Oil & Gas (Vedanta), including **Mangala** (discovered 2004, production began 2009), **Bhagyam**, **Aishwariya**, and Saraswati. 2. **National Output**: Produces approximately **20% of India’s domestic crude oil**, establishing Rajasthan as the second-largest crude producer in India after offshore Bombay High. 3. **Pachpadra Refinery (HRRL)**: Catalyzed the establishment of a 9 MMTPA capacity petroleum refinery and petrochemical complex at Pachpadra (joint venture between HPCL 74% and Govt. of Rajasthan 26%)."
      }
    ]
  },
  {
    "id": "CON-RAJ-018",
    "order": 18,
    "slug": "mega-irrigation-projects-ignp-ercp-narmada-canal-jakham",
    "title": "Mega Irrigation & Hydraulic Engineering: Indira Gandhi Canal (IGNP), ERCP, Narmada Canal & Bisalpur Project",
    "shortDefinition": "Engineering design, command area development, and socio-economic transformation of Rajasthan’s landmark water infrastructure: Indira Gandhi Nahar Pariyojana (IGNP / Rajasthan Canal — Kanwar Sain vision, Harike Barrage, 7 lift canals), Eastern Rajasthan Canal Project (ERCP — Chambal sub-basin diversion), Narmada Canal Project (India’s 1st mandatory drip-sprinkler project), and Bisalpur Dam.",
    "difficulty": "ADVANCED",
    "topicSlug": "rajasthan-physical-geography-and-drainage",
    "topicTitle": "Rajasthan Physical Geography, Hydro-Minerals & Agriculture",
    "topicOrder": 3,
    "topicDescription": "Drainage systems, agro-climatic zones, ICAR soil classifications, mineral wealth (metallic/non-metallic), and mega irrigation engineering (IGNP, ERCP, Narmada canal).",
    "subjectSlug": "rajasthan-history-culture-geography",
    "claims": [
      {
        "id": "CON-RAJ-018-CLM-1",
        "statement": "The Indira Gandhi Nahar Pariyojana (IGNP), conceived by chief engineer Kanwar Sain in 1948, is the world’s longest irrigation canal system (649 km total length: 204 km Rajasthan Feeder and 445 km Main Canal), drawing water from the Harike Barrage (confluence of Satluj and Beas) to transform 19.63 lakh hectares of the Thar desert.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Indira Gandhi Nahar Board (IGNB) Annual Report; Central Water Commission; Dr. H.M. Saxena",
        "excerpt": "The Rajasthan Canal foundation was laid on 31 March 1958 by Union Home Minister Govind Ballabh Pant, originating at Harike Barrage in Punjab and terminating at Mohangarh (extended to Gadra Road, Barmer)."
      },
      {
        "id": "CON-RAJ-018-CLM-2",
        "statement": "The Narmada Canal Project (entering Rajasthan at Silu village, Sanchore/Jalore) is the first and only irrigation project in India where micro-irrigation via pressurized Drip and Sprinkler systems is legally mandatory across its entire 2.46 lakh hectare command area.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Narmada Control Authority (NCA); Rajasthan Water Resources Department Project Report",
        "excerpt": "By legally prohibiting flood flow irrigation and enforcing 100% sprinkler irrigation, the Narmada Canal saves over 40% water, transforming arid Jalore and Barmer."
      },
      {
        "id": "CON-RAJ-018-CLM-3",
        "statement": "The Eastern Rajasthan Canal Project (ERCP) is designed to harvest surplus monsoon waters of the southern Chambal tributaries (Kuno, Kul, Parbati, Kalisindh, Mej) and transfer them to water-deficient sub-basins of Banas, Morel, Banganga, Gambhiri, and Parbati, addressing drinking and irrigation water needs of 13 eastern districts.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "ERCP Detailed Project Report (DPR); Ministry of Jal Shakti MoU (Rajasthan-MP Inter-State Agreement 2024)",
        "excerpt": "ERCP represents Rajasthan’s most ambitious river inter-linking endeavor, stabilizing groundwater and rejuvenating surface irrigation across 13 eastern and central districts."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Taming the Thar: Rivers Carved through Sand Dunes",
        "body": "In 1948, when Chief Engineer Kanwar Sain published his visionary report titled *\"Water Requirements for the Bikaner State\"*, critics dismissed it as madness: how could Himalayan snowmelt rivers be transported 600 kilometers across the shifting dunes of the Thar desert? Yet, through monumental human labor and brick-lined channels, the Indira Gandhi Canal conquered the desert, turning dust into golden wheatfields and kinnow orchards.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Master Matrix of Rajasthan Mega Water Engineering Projects",
        "body": "| Project Name | Source River & Headworks | Entry Point / Alignment | Command Districts Benefited | Signature Engineering & Policy Innovation |\n|---|---|---|---|---|\n| **Indira Gandhi Canal (IGNP)** | Confluence of **Satluj and Beas** at **Harike Barrage** (Punjab) | Feeder enters at Hanumangarh; Main canal ends at **Mohangarh** (Jaisalmer); tail sub-branch reaches **Gadra Road** (Barmer) | Hanumangarh, Sri Ganganagar, Bikaner, Jaisalmer, Churu, Nagaur, Jodhpur, Barmer (8 districts) | **World’s longest canal** (649 km); Stage I (Feeder 204 km + Main 189 km); Stage II (256 km); **7 Lift Canals on left side** to pump water up Aravalli contour; 9 flow branches on right side |\n| **Narmada Canal Project** | **Sardar Sarovar Dam** on Narmada River (Gujarat) | Enters at **Silu village** (Sanchore / Jalore) | Sanchore, Jalore, and Barmer districts | **India’s 1st 100% Mandatory Sprinkler Project** (Flood irrigation strictly illegal); Water travels 458 km in Gujarat + 74 km in Rajasthan; 3 lift canals |\n| **Bisalpur Project** | **Banas River** | Constructed at Bisalpur village (Deoli, Tonk) | Jaipur, Ajmer, Tonk, Dausa | **Drinking water lifeline** of Jaipur and Ajmer cities; Gravity-flow masonry concrete dam |\n| **Jakham Project** | **Jakham River** (tributary of Mahi) | Anoopura village inside Sitamata Sanctuary (Pratapgarh) | Pratapgarh, Chittorgarh, Udaipur (tribal areas) | **Highest dam in Rajasthan (81 metres height)**; constructed on deep foundation across river gorge |\n| **Eastern Rajasthan Canal Project (ERCP)** | Surplus waters of **Kalisindh, Parbati, Mej, Kuno, Kul** | Inter-basin transfer across southern Chambal sub-basins | 13 Eastern Districts (Jhalawar, Baran, Kota, Bundi, Sawai Madhopur, Ajmer, Tonk, Jaipur, Dausa, Karauli, Alwar, Bharatpur, Dholpur) | Inter-linking of river sub-basins; Tripartite agreement with Madhya Pradesh and Centre (Modified PKC-ERCP) signed in 2024 |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "The 7 Lift Canals of IGNP (Lifting Himalayan Water onto Thar Uplands)",
        "body": "Because the land slope in western Rajasthan rises from east to west, water cannot flow naturally by gravity to the left bank of IGNP. To irrigate the higher desert uplands, **7 Lift Canals** were engineered: 1. **Chaudhary Kumbharam Lift Canal** (Old Name: Nohave-Sahwa): Irrigates Hanumangarh, Churu, Bikaner, Jhunjhunu. 2. **Kanwar Sain Lift Canal** (Old: Bikaner-Lunkaransar): Oldest and longest lift canal; drinking water lifeline of Bikaner city. 3. **Panna Lal Barupal Lift Canal** (Old: Gajner): Bikaner and Nagaur. 4. **Veer Teja Ji Lift Canal** (Old: Bangarsar): Shortest lift canal; Bikaner. 5. **Dr. Karni Singh Lift Canal** (Old: Kolayat): Bikaner and Jodhpur. 6. **Guru Jambheshwar Lift Canal** (Old: Phalodi): Bikaner, Jodhpur, Jaisalmer. 7. **Jai Narayan Vyas Lift Canal** (Old: Pokhran): Jaisalmer and Jodhpur.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC RAS Prelims & Mains Traps",
        "body": "Examiner Traps: 1. **Flow vs Lift Canals**: IGNP has 9 flow branches on the RIGHT bank (Rawatsar, Suratgarh, Anupgarh, Pugal, Dattor, Birsalpur, Charanwali, Shaheed Birbal, Sagarmal Gopa) and 7 lift canals on the LEFT bank (except Rawatsar, which is the ONLY flow branch on the left bank!). 2. Mandatory sprinkler irrigation = Narmada Canal (Silu village). 3. Highest dam in Rajasthan = Jakham Dam (81 metres, Pratapgarh), NOT Rana Pratap Sagar (which is largest by storage capacity).",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Mains Paper I - Geography of Rajasthan: Major Irrigation Projects and Water Management",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "IGNP lift canals, ERCP, and Narmada canal are tested every cycle."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Indian Agriculture & Water Resources",
        "relevance": "HIGH",
        "priority": "P1",
        "requiredDepth": "MODERATE",
        "notes": "Canal irrigation engineering, inter-linking of rivers (ERCP), micro-irrigation."
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Heritage",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "IGNP: 649km (Harike Barrage, Kanwar Sain vision, 7 lift canals left bank, Rawatsar only left flow branch). Narmada: 1st 100% mandatory sprinkler project (Silu). ERCP: Chambal surplus to 13 eastern districts. Jakham: Highest dam (81m).",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Rajasthan’s hydraulic engineering centers on the Indira Gandhi Canal (IGNP, 649 km from Harike Barrage with 7 left-bank lift canals irrigating 19.6 lakh hectares). The Narmada Canal Project pioneers India’s first legally mandatory micro-irrigation system across Sanchore and Barmer. The Eastern Rajasthan Canal Project (ERCP) transfers surplus southern Chambal waters to 13 drought-prone eastern districts. Jakham Dam in Pratapgarh is the state’s highest dam at 81 meters.",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "# Rajasthan Mega Hydraulic Infrastructure\n\n1. **IGNP Command:** Harike Barrage -> Feeder (204 km) -> Main Canal (445 km to Mohangarh) -> 7 Left Lift Canals (Kanwar Sain, Kumbharam, etc.) + 9 Right Flow Branches (Rawatsar left exception).\n2. **Micro-Irrigation Mandate:** Narmada Canal (Silu, Jalore/Barmer, 100% pressurized sprinkler).\n3. **River Sub-Basin Interlink:** ERCP (Chambal tributaries -> Banas/Banganga basins for 13 districts).\n4. **Urban / Tribal Lifelines:** Bisalpur Dam (Jaipur/Ajmer drinking water) | Jakham Dam (81 m, tribal irrigation).",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "Which of the following flow branches of the Indira Gandhi Canal (IGNP) is the ONLY branch located on the LEFT side of the canal, while all other flow branches are on the right side?",
        "options": [
          "Suratgarh Branch",
          "Anupgarh Branch",
          "Rawatsar Branch",
          "Charanwali Branch"
        ],
        "correctAnswer": "Rawatsar Branch",
        "explanation": "The Rawatsar branch (Hanumangarh) is the only flow branch of the Indira Gandhi Canal situated on its left side. All other 8 flow branches (Suratgarh, Anupgarh, Pugal, Dattor, Birsalpur, Charanwali, Shaheed Birbal, and Sagarmal Gopa) are located on the right side, while the left side is otherwise dominated by 7 lift canals.",
        "trapExplanation": "RPSC frequently tests this anomaly: Rawatsar is the sole flow branch on the left bank.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "modelAnswer": "Rawatsar Branch"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Explain the unique technological feature of the Narmada Canal Project in Rajasthan and its agricultural benefits.",
        "options": [],
        "correctAnswer": "The **Narmada Canal Project** (which enters Rajasthan at Silu village, Sanchore) features a pioneering technological milestone: 1. **100% Mandatory Micro-Irrigation**: It is the first and only irrigation project in India where conventional flood-flow irrigation is legally prohibited; farmers are statutorily required to irrigate exclusively through **pressurized Drip and Sprinkler systems**. 2. **Water Efficiency & Coverage**: Conserves over 40% water compared to surface canals, allowing the allocated water to irrigate 2.46 lakh hectares across arid Jalore, Sanchore, and Barmer, transforming sandy dunes into bumper harvests of Isabgol, cumin, and castor.",
        "explanation": "5-mark answer highlighting mandatory sprinkler technology, water conservation (>40%), and district impact.",
        "trapExplanation": "Talking only about canal length and omitting the mandatory pressurized sprinkler system.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 50,
        "modelAnswer": "The **Narmada Canal Project** (which enters Rajasthan at Silu village, Sanchore) features a pioneering technological milestone: 1. **100% Mandatory Micro-Irrigation**: It is the first and only irrigation project in India where conventional flood-flow irrigation is legally prohibited; farmers are statutorily required to irrigate exclusively through **pressurized Drip and Sprinkler systems**. 2. **Water Efficiency & Coverage**: Conserves over 40% water compared to surface canals, allowing the allocated water to irrigate 2.46 lakh hectares across arid Jalore, Sanchore, and Barmer, transforming sandy dunes into bumper harvests of Isabgol, cumin, and castor."
      }
    ]
  }
];

export async function seedRajasthanMasterCanonicalKnowledge(): Promise<void> {
  console.log(`Seeding Rajasthan Dynastic History, Culture & Micro-Geography Master Canonical Knowledge (${RAJASTHAN_MASTER_CONCEPTS.length} concepts)...`);

  // 1. Ensure Domain and Subject exist
  const domain = await db.domain.upsert({
    where: { slug: 'rajasthan-studies' },
    update: {
      name: 'Rajasthan Studies & Regional Heritage',
      description: 'Comprehensive historical, cultural, linguistic, geographical, and economic knowledge base for Rajasthan state civil services examinations.',
      order: 7,
      status: 'ACTIVE',
    },
    create: {
      slug: 'rajasthan-studies',
      name: 'Rajasthan Studies & Regional Heritage',
      description: 'Comprehensive historical, cultural, linguistic, geographical, and economic knowledge base for Rajasthan state civil services examinations.',
      order: 7,
      status: 'ACTIVE',
    },
  });

  const subject = await db.subject.upsert({
    where: { slug: 'rajasthan-history-culture-geography' },
    update: {
      domainId: domain.id,
      name: 'Rajasthan History, Art, Culture, Heritage & Geography',
      description: 'Exhaustive syllabus synthesis for RPSC RAS Mains Paper I (Unit 1: Rajasthan History & Culture - 75 Marks) and Paper II (Geography of Rajasthan - 20 Marks).',
      order: 1,
      status: 'ACTIVE',
    },
    create: {
      domainId: domain.id,
      slug: 'rajasthan-history-culture-geography',
      name: 'Rajasthan History, Art, Culture, Heritage & Geography',
      scopeStatement: 'Sovereign dynastic history of Mewar, Marwar, Bikaner, Chauhans, Kachhwahas, agrarian peasant revolts, tribal struggles, Prajamandals, 7-stage integration, folk deities, Sant Parampara, UNESCO forts, performing arts, musical instruments, dialects, drainage systems, soils, minerals, and mega water engineering projects.',
      description: 'Exhaustive syllabus synthesis for RPSC RAS Mains Paper I (Unit 1: Rajasthan History & Culture - 75 Marks) and Paper II (Geography of Rajasthan - 20 Marks).',
      order: 1,
      status: 'ACTIVE',
    },
  });

  // 2. Ensure Topics exist
  const topicDefs = [
    {
      slug: 'rajasthan-dynastic-history-and-movements',
      title: 'Rajasthan Dynastic History, Peasant & Tribal Movements',
      order: 1,
      description: 'Dynastic genealogy, military resistance, architectural contributions of Rajput dynasties (Mewar, Marwar, Bikaner, Chauhans, Kachhwahas), peasant and tribal uprisings, and Prajamandal integration.',
    },
    {
      slug: 'rajasthan-culture-art-and-dialects',
      title: 'Rajasthan Art, Architecture, Culture & Dialects',
      order: 2,
      description: 'Folk deities (Panch Pir), Sant Parampara, UNESCO forts, performing arts, folk dances, musical instruments, miniature painting schools, and Rajasthani linguistic dialects.',
    },
    {
      slug: 'rajasthan-physical-geography-and-drainage',
      title: 'Rajasthan Physical Geography, Hydro-Minerals & Agriculture',
      order: 3,
      description: 'Drainage systems, agro-climatic zones, ICAR soil classifications, mineral wealth (metallic/non-metallic), and mega irrigation engineering (IGNP, ERCP, Narmada canal).',
    },
  ];

  for (const t of topicDefs) {
    await db.topic.upsert({
      where: {
        subjectId_slug: {
          subjectId: subject.id,
          slug: t.slug,
        },
      },
      update: {
        title: t.title,
        description: t.description,
        order: t.order,
        status: 'ACTIVE',
      },
      create: {
        slug: t.slug,
        title: t.title,
        description: t.description,
        order: t.order,
        subjectId: subject.id,
        status: 'ACTIVE',
      },
    });
  }

  // 3. Ensure Canonical Source exists
  const sourceRaj = await db.source.upsert({
    where: { id: 'SRC-RAJASTHAN-MASTER-2026' },
    update: {},
    create: {
      id: 'SRC-RAJASTHAN-MASTER-2026',
      title: 'Rajasthan Master Corpus — History, Art, Culture, Dialects & Physical Geography (Ojha, Tod, Grierson, WRD & DMG)',
      sourceType: 'COMPREHENSIVE_HISTORICAL_SYNTHESIS',
      authorityTier: 'PEER_REVIEWED_MATHEMATICAL_REFERENCE',
      description: 'Authoritative single-source reference corpus for Rajasthan Dynastic History, Culture, Heritage, and Micro-Geography for RPSC RAS examinations.',
    },
  });

  const examSlugMap: Record<string, string> = {
    RPSC_RAS: 'rpsc-ras',
    UPSC_CSE: 'upsc-cse',
    UPSC_APFC: 'upsc-apfc',
    RBI_GRADE_B: 'rbi-grade-b',
    NABARD_GRADE_A: 'nabard-grade-a',
    SBI_PO: 'sbi-po',
    IBPS_PO: 'ibps-po',
    SEBI_GRADE_A: 'sebi-grade-a',
    IIBF_DBF: 'iibf-dbf',
  };

  for (const c of RAJASTHAN_MASTER_CONCEPTS) {
    const topic = await db.topic.findUnique({
      where: {
        subjectId_slug: {
          subjectId: subject.id,
          slug: c.topicSlug,
        },
      },
    });

    if (!topic) {
      throw new Error(`Topic ${c.topicSlug} not found for concept ${c.id}`);
    }

    const concept = await db.concept.upsert({
      where: { id: c.id },
      update: {
        title: c.title,
        shortDefinition: c.shortDefinition,
        order: c.order,
        difficulty: c.difficulty,
        topicId: topic.id,
        status: 'ACTIVE',
      },
      create: {
        id: c.id,
        slug: c.slug,
        title: c.title,
        shortDefinition: c.shortDefinition,
        order: c.order,
        difficulty: c.difficulty,
        topicId: topic.id,
        status: 'ACTIVE',
      },
    });

    // Content Blocks
    await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
    for (const cb of c.contentBlocks) {
      await db.contentBlock.create({
        data: {
          conceptId: concept.id,
          type: cb.type as any,
          title: cb.title,
          body: cb.body,
          order: cb.order,
          visibility: 'STANDARD',
        },
      });
    }

    // Claims and Evidence
    for (let i = 0; i < c.claims.length; i++) {
      const clm = c.claims[i];
      const claimId = clm.id || `${c.id}-CLM-${i + 1}`;
      const claim = await db.claim.upsert({
        where: { id: claimId },
        update: {
          statement: clm.statement,
          claimType: clm.claimType as any,
          epistemicLevel: clm.epistemicLevel as any,
          confidence: clm.confidence as any,
          status: 'VERIFIED',
          conceptId: concept.id,
        },
        create: {
          id: claimId,
          statement: clm.statement,
          claimType: clm.claimType as any,
          epistemicLevel: clm.epistemicLevel as any,
          confidence: clm.confidence as any,
          status: 'VERIFIED',
          conceptId: concept.id,
        },
      });

      await db.evidence.deleteMany({ where: { claimId: claim.id } });
      await db.evidence.create({
        data: {
          claimId: claim.id,
          sourceId: sourceRaj.id,
          locator: clm.locator,
          excerpt: clm.excerpt,
          evidenceType: 'EXCERPT',
          authority: 'PRIMARY_REGULATORY_TEXT',
          evidentiarySupport: 'DIRECT_SUPPORT',
          extractionConfidence: 'CERTAIN',
        },
      });
    }

    // Exam Concept Mappings
    for (const em of c.examMappings) {
      const slug = examSlugMap[em.examCode] || em.examCode.toLowerCase().replace(/_/g, '-');
      const exam = await db.exam.upsert({
        where: { slug },
        update: {},
        create: {
          slug,
          name: em.examCode.replace(/_/g, ' '),
          conductingBody: em.examCode.split('_')[0],
          description: `Official competitive examination for ${em.examCode}`,
          syllabusSummary: `Syllabus for ${em.examCode}`,
        },
      });

      await db.examConceptMapping.upsert({
        where: {
          examId_conceptId: {
            examId: exam.id,
            conceptId: concept.id,
          },
        },
        update: {
          syllabusUnit: em.syllabusUnit,
          relevance: em.relevance as any,
          priority: em.priority as any,
          requiredDepth: em.requiredDepth as any,
          notes: em.notes,
        },
        create: {
          examId: exam.id,
          conceptId: concept.id,
          syllabusUnit: em.syllabusUnit,
          relevance: em.relevance as any,
          priority: em.priority as any,
          requiredDepth: em.requiredDepth as any,
          notes: em.notes,
        },
      });
    }

    // Revision Units
    await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
    for (const ru of c.revisionUnits) {
      await db.revisionUnit.create({
        data: {
          conceptId: concept.id,
          type: ru.type as any,
          content: ru.content,
          priority: ru.priority as any,
          order: ru.order,
        },
      });
    }

    // Questions
    await db.question.deleteMany({ where: { conceptId: concept.id } });
    for (const q of c.questions) {
      await db.question.create({
        data: {
          conceptId: concept.id,
          type: q.type as any,
          stem: q.stem,
          options: q.options ? JSON.stringify(q.options) : null,
          correctAnswer: q.correctAnswer || q.modelAnswer || 'Model Answer Provided in Syllabus',
          explanation: q.explanation,
          trapExplanation: q.trapExplanation || null,
          difficulty: q.difficulty as any,
          isPYQ: q.isPYQ || false,
          pyqYear: q.pyqYear || null,
          pyqPaper: q.pyqPaper || null,
          pyqQuestionNumber: q.pyqQuestionNumber || null,
        },
      });
    }
  }

  console.log(`Successfully seeded ${RAJASTHAN_MASTER_CONCEPTS.length} Rajasthan History, Culture & Micro-Geography canonical concepts.`);
}
