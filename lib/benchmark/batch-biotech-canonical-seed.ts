/**
 * Applied Science, Biotechnology & Emerging Tech Canonical Knowledge Seed
 * Concepts: CON-SCI-116 to CON-SCI-120 (Topic 26: Applied Science, Biotechnology & Emerging Tech)
 * Mind of Aravalli — Academic Reading Hub
 */

import { db } from '../db/client';
import { CanonicalConceptDefinition } from './batch-e1-canonical-seed';

export const BIOTECH_CANONICAL_CONCEPTS: CanonicalConceptDefinition[] = [
  // =========================================================================
  // CON-SCI-116: Recombinant DNA & CRISPR-Cas9 Gene Editing
  // =========================================================================
  {
    id: 'CON-SCI-116',
    topicOrder: 26,
    topicSlug: 'applied-science-biotechnology-and-emerging-tech',
    topicTitle: 'Applied Science, Biotechnology & Emerging Technologies',
    topicDescription: 'Recombinant DNA & CRISPR gene editing, ISRO space launch vehicles, nuclear technology & India 3-stage program, nanotechnology, robotics, AI, 5G/6G & National Quantum Mission.',
    slug: 'recombinant-dna-technology-and-crispr-gene-editing',
    title: 'Recombinant DNA Technology, Restriction Endonucleases & CRISPR-Cas9 Precision Gene Editing',
    shortDefinition: 'The molecular mechanisms of genetic manipulation from classical recombinant DNA technology (using restriction endonucleases, DNA ligases, plasmids, and vectors) to 3rd-generation precision genome editing via CRISPR-Cas9 ribonucleoprotein complexes and single guide RNA (sgRNA).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-SCI-116-01',
        statement: 'Herbert Boyer and Stanley Cohen (1973) created the first recombinant DNA organism using restriction endonuclease EcoRI and DNA ligase to insert antibiotic resistance genes into an Escherichia coli plasmid vector.',
        claimType: 'HISTORICAL_FACT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NCERT Biology Class 12, Chapter 11: Biotechnology - Principles and Processes, Section 11.1',
        excerpt: 'The construction of the first recombinant DNA emerged from the possibility of linking a gene encoding antibiotic resistance with a native plasmid of Salmonella typhimurium by Stanley Cohen and Herbert Boyer in 1972.'
      },
      {
        id: 'CLM-SCI-116-02',
        statement: 'Jennifer Doudna and Emmanuelle Charpentier (Nobel Prize in Chemistry 2020) demonstrated that the bacterial CRISPR-Cas9 adaptive immune system can be programmed using synthetic single-guide RNA (sgRNA) to execute double-strand breaks (DSBs) at specific genomic loci adjacent to a Protospacer Adjacent Motif (PAM: 5\'-NGG-3\').',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Doudna JA, Charpentier E. (2014) The new frontier of genome engineering with CRISPR-Cas9. Science, 346(6213)',
        excerpt: 'CRISPR-Cas9 enables targeted genome cleavage by using a single guide RNA that pairs with target DNA alongside a short Protospacer Adjacent Motif (PAM).'
      },
      {
        id: 'CLM-SCI-116-03',
        statement: 'India\'s Department of Biotechnology (DBT) and MoEFCC notified guidelines in 2022 exempting genome-edited plants belonging to SDN-1 (Site-Directed Nuclease-1) and SDN-2 categories from stringent GEAC transgenic biosafety regulations, while retaining regulation for SDN-3 (transgenic insertions).',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Department of Biotechnology, Ministry of Science & Technology, Guidelines for the Safety Assessment of Genome Edited Plants, 2022',
        excerpt: 'Genome edited plants under SDN-1 and SDN-2 categories free from exogenous introduced DNA are exempted from provisions of rules 7 to 11 of the Manufacture, Use, Import, Export and Storage of Hazardous Microorganisms/Genetically Engineered Organisms or Cells Rules 1989.'
      }
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'From Molecular Scissors to Word Processors of the Genome',
        body: `Imagine rewriting a sentence inside an encyclopedia containing three billion letters (the human genome).

1. **Classical Recombinant DNA (1970s–1990s):** Like cutting an entire paragraph out with heavy scissors (restriction endonucleases) and gluing it into a new book using tape (DNA ligase). You can insert whole foreign genes (transgenics), but you cannot easily edit an individual misspelled letter inside the host's native text.
2. **CRISPR-Cas9 (2012–Present):** Functions like the "Find and Replace" feature in a word processor. A 20-nucleotide guide RNA (sgRNA) finds the exact address among 3 billion base pairs, and the Cas9 molecular endonuclease snips precisely at that single spot.

This shift—from blunt insertion of foreign DNA (transgenic GMOs) to targeted endogenous base correction without foreign gene footprints (SDN-1 / SDN-2 genome editing)—defines modern biotechnology.`,
        order: 1
      },
      {
        type: 'CORE_IDEA',
        title: 'Comparative Architecture: Recombinant DNA vs. CRISPR-Cas9 vs. Base Editing',
        body: `### Molecular Tools & Mechanisms

| Attribute | Classical Recombinant DNA (rDNA) | CRISPR-Cas9 Genome Editing | Prime & Base Editing (Next-Gen) |
|---|---|---|---|
| **Key Catalytic Enzymes** | Restriction Endonucleases (EcoRI, HindIII) + DNA Ligase + Taq Polymerase | Cas9 Endonuclease (contains RuvC and HNH catalytic domains) | Catalytically dead/nickase Cas9 (dCas9) fused to deaminase or reverse transcriptase |
| **Targeting Mechanism** | Fixed palindrome recognition sequences (e.g., 5'-GAATTC-3' for EcoRI) | Single Guide RNA (sgRNA, ~20 nucleotides) complementary to genomic target DNA | sgRNA guide sequence + engineered deaminase enzymes |
| **Site Specificity** | Cleaves wherever the palindromic recognition motif exists across the genome | High specificity directed by sgRNA sequence; requires adjacent Protospacer Adjacent Motif (PAM: 5'-NGG-3') | Base-level precision without double-strand DNA cleavage |
| **End-Repair Pathway** | Ligase seals complementary sticky or blunt ends into vector plasmid | Non-Homologous End Joining (NHEJ - gene knockout via indels) or Homology-Directed Repair (HDR - knock-in) | Direct chemical base transition (C->T, A->G) or reverse-transcribed replacement |
| **Regulatory Status (India)** | Requires full GEAC (Genetic Engineering Appraisal Committee) clearance under EPA 1986 | SDN-1 & SDN-2 exempt from GEAC clearance (DBT 2022 Guidelines); SDN-3 treated as transgenic | Evaluated under SDN guidelines based on foreign DNA presence |

### The Three SDN Classes in Indian Regulatory Framework
- **SDN-1 (Site-Directed Nuclease-1):** Targeted double-strand break followed by error-prone NHEJ repair, resulting in small random insertions/deletions (indels) of 1–few nucleotides. **Zero foreign DNA introduced.**
- **SDN-2:** Targeted cleavage with a small homologous repair template causing predefined nucleotide substitutions. **Zero foreign DNA integrated.**
- **SDN-3:** Introduction of large foreign donor DNA fragments or complete functional genes (transgenic / cisgenic). **Subject to full transgenic oversight.**`,
        order: 2
      },
      {
        type: 'MECHANISM',
        title: 'The CRISPR-Cas9 Cleavage & Repair Cascade',
        body: `### The 4-Step Biochemical Pathway of Cas9 Action

\`\`\`
Target DNA Search
      │
      ▼
[Cas9-sgRNA Complex scans DNA for PAM (5'-NGG-3')]
      │
      ▼
[Local DNA Unwinding & 20-nt sgRNA Base-Pairing]
      │
      ▼
[Dual Endonuclease Cleavage: RuvC cuts non-target strand, HNH cuts target strand]
      │
      ▼
[Double-Strand Break (DSB) 3-4 bp upstream of PAM site]
      │
      ├───────────────────────────────┬───────────────────────────────┐
      ▼                               ▼                               ▼
[SDN-1: Non-Homologous End      [SDN-2: Homology-Directed       [SDN-3: Foreign Transgene
 Joining (NHEJ)]                 Repair (HDR)]                   Insertion]
   Error-prone indels               Pre-designed template edits     Full foreign cassette
   Causes Gene Knockout             Precise point mutation fix       Transgenic organism
\`\`\`

### Vectors & Recombinant Cloning Architecture
In classical rDNA technology:
1. **Cloning Vector Requirements:** Origin of replication (*ori* controlling copy number), selectable markers (e.g., $amp^R$, $tet^R$ genes enabling identification of transformants via insertional inactivation), and unique restriction cloning sites (Polylinker / Multiple Cloning Site).
2. **Competent Host Transformation:** Divalent cation treatment ($Ca^{2+}$) followed by heat-shock (42°C) enables plasmid uptake across bacterial peptidoglycan walls.
3. **Downstream Processing:** Large-scale microbial culturing in stirred-tank bioreactors followed by product separation, purification, and clinical quality testing.`,
        order: 3
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Competitive Examination Traps & Policy Application Matrix',
        body: `### Common Examiner Traps
1. **CRISPR Origin Trap:** Examiners frequently state that CRISPR was engineered from synthetic mammalian proteins. **TRAP!** CRISPR (*Clustered Regularly Interspaced Short Palindromic Repeats*) originated as a **natural adaptive immune defense mechanism in bacteria and archaea** against bacteriophage viruses.
2. **SDN-1 vs. SDN-3 Exemption Trap:** Questions claim all CRISPR modifications are exempt from GEAC environmental clearance in India. **TRAP!** Only **SDN-1 and SDN-2** (which introduce no foreign DNA) are exempt from Rule 7-11 clearance. **SDN-3** involves foreign gene insertion and requires full GEAC approval.
3. **Cas9 Cleavage Specifics:** Cas9 does NOT cut randomly; it creates blunt-ended double-strand breaks precisely **3 to 4 nucleotides upstream of the PAM sequence** (5'-NGG-3').
4. **Bt Cotton vs. Genome-Edited Mustard:** Bt Cotton is a classic **transgenic GMO** incorporating bacterial *Cry1Ac/Cry2Ab* genes from *Bacillus thuringiensis*, whereas SDN-1 edited crops contain only altered native genes.

### Exam Syllabus Matrix
- **UPSC CSE & APFC:** Evaluated under GS Paper 3 (Science & Technology - Biotechnology) and APFC General Science. Focus on Nobel Prize 2020, GEAC regulatory notifications, and difference between GM crops and gene-edited crops.
- **RPSC RAS:** Paper 2 (General Science & Technology). Focus on biotechnology applications in agriculture (drought tolerance, bio-fortification) and medical therapeutics (CAR-T cell therapy).
- **NABARD Grade A:** Agriculture and Rural Development. Focus on crop improvement, climate-resilient cultivars, and ICAR biofortified crop varieties.`,
        order: 4
      }
    ],
    examMappings: [
      { examCode: 'UPSC_CSE', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'EXPERT', syllabusUnit: 'GS Paper 3: Science & Technology - Biotechnology & Bioethics', notes: 'Core conceptual pillar. Expect analytical comparison of transgenic GM crops vs SDN-1/SDN-2 gene editing.' },
      { examCode: 'UPSC_APFC', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', syllabusUnit: 'General Science & Emerging Technologies', notes: 'Frequently tested in Prelims. Test vectors, enzymes, Nobel benchmarks, and DBT 2022 notifications.' },
      { examCode: 'UPSC_EPFO_EOAO', relevance: 'CORE_SYLLABUS', priority: 'MEDIUM', requiredDepth: 'PROFICIENT', syllabusUnit: 'General Science', notes: 'Focus on scientific definitions: CRISPR-Cas9, EcoRI, recombinant insulin synthesis.' },
      { examCode: 'RPSC_RAS', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'EXPERT', syllabusUnit: 'Mains Paper 2: Science & Technology - Genetic Engineering & Biotechnology', notes: 'Repeated 5-marker and 10-marker questions on recombinant DNA, DNA fingerprinting, and CRISPR therapeutics.' },
      { examCode: 'IBPS_PO', relevance: 'ANCILLARY_COVERAGE', priority: 'MEDIUM', requiredDepth: 'AWARENESS', syllabusUnit: 'General Awareness: Science in News', notes: 'Nobel prize winners, recent bio-tech approvals in India.' },
      { examCode: 'SBI_PO', relevance: 'ANCILLARY_COVERAGE', priority: 'MEDIUM', requiredDepth: 'AWARENESS', syllabusUnit: 'General Awareness: Current Technological Advances', notes: 'Identify terminology in current affairs articles.' },
      { examCode: 'RBI_GRADE_B', relevance: 'DIRECT_OVERLAY', priority: 'MEDIUM', requiredDepth: 'PROFICIENT', syllabusUnit: 'ESI & General Awareness: Technology & Innovation', notes: 'Policy impact of biotechnology on agricultural yields, food security, and healthcare inflation.' },
      { examCode: 'NABARD_GRADE_A', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'EXPERT', syllabusUnit: 'Agriculture & Rural Development: Plant Breeding & Genetics', notes: 'High-yield for NABARD. Focus on SDN exemptions for climate-smart seeds and pest-resistant cultivars.' }
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'CRISPR-Cas9 uses a ~20-nt single guide RNA (sgRNA) to direct the Cas9 endonuclease to cut DNA adjacent to a PAM site (5\'-NGG-3\'). Unlike classical rDNA that inserts foreign genes via plasmids and restriction enzymes, SDN-1/SDN-2 genome editing modifies native DNA without foreign genes and is exempt from Indian GEAC clearance (DBT 2022).',
        order: 1
      },
      {
        type: 'SUMMARY_2M',
        content: 'Genetic modification spans two distinct technological paradigms: classical Recombinant DNA (rDNA) technology and precision Genome Editing. Recombinant DNA relies on restriction endonucleases (like EcoRI) to cleave palindromic target DNA, DNA ligase to seal fragments into plasmid vectors containing an origin of replication and selectable markers, producing transgenic organisms. In contrast, CRISPR-Cas9 (discovered as a bacterial viral immune system by Doudna and Charpentier, Nobel 2020) uses programmable sgRNA to guide Cas9 to precise genomic loci for double-strand cleavage. Repair occurs via error-prone NHEJ (gene knockout) or template-guided HDR (gene editing). In India, DBT 2022 guidelines exempt SDN-1 and SDN-2 categories from GEAC transgenic rules because they introduce no foreign DNA, while SDN-3 remains regulated as transgenic.',
        order: 2
      },
      {
        type: 'ARCHITECTURE_5M',
        content: `# Architecture of Genetic Engineering & Genome Editing

1. **Classical rDNA Pipeline:**
   - Isolation of Genetic Material (Lysozyme/Cellulase -> Protease -> Chilled Ethanol precipitation).
   - Restriction Cleavage (Molecular scissors recognizing palindromic sequences; creates sticky/blunt ends).
   - Vector Ligation (pBR322 plasmid, ori, ampR/tetR selectable markers, DNA ligase phosphodiester bond synthesis).
   - Host Transformation & Downstream Processing (Bioreactors, protein purification).

2. **CRISPR-Cas9 Mechanism:**
   - Target Recognition: 20-bp guide RNA complementary to target sequence + PAM requirement (5'-NGG-3').
   - Dual Cleavage: RuvC cuts non-complementary strand, HNH cuts complementary strand, creating double-strand break (DSB).
   - Cellular Repair:
     * Non-Homologous End Joining (NHEJ) -> Frame-shift indels -> Gene Disruption (Knockout).
     * Homology-Directed Repair (HDR) -> Precise donor sequence recombination -> Targeted Gene Insertion/Correction.

3. **Indian Regulatory Framework (DBT/MoEFCC 2022 Guidelines):**
   - **SDN-1:** Targeted site deletion/addition via NHEJ. No foreign DNA. **Exempt from Rules 7-11.**
   - **SDN-2:** Targeted point mutation via HDR using small homologous template. No foreign DNA. **Exempt from Rules 7-11.**
   - **SDN-3:** Insertion of external genes/cassettes. **Regulated under EPA 1986 by GEAC as Transgenic GMO.**`,
        order: 3
      }
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Regarding the regulatory status of genome-edited crops in India under the 2022 Department of Biotechnology (DBT) guidelines, which of the following statements is correct?',
        options: [
          'All genome-edited crops regardless of method are treated identically to transgenic Bt crops and require mandatory GEAC clearance.',
          'SDN-1 and SDN-2 genome-edited plants are exempted from biosafety assessment by the GEAC because they contain no foreign introduced DNA.',
          'Only SDN-3 plants are exempted because they possess verified donor genes from related wild species.',
          'Genome editing is completely banned for agricultural crops under the Environment Protection Act 1986.'
        ],
        correctAnswer: 'SDN-1 and SDN-2 genome-edited plants are exempted from biosafety assessment by the GEAC because they contain no foreign introduced DNA.',
        explanation: 'Under the 2022 DBT/MoEFCC guidelines, genome-edited plants belonging to SDN-1 and SDN-2 categories are exempted from Rules 7 to 11 of the 1989 Rules under EPA 1986 because the edits mimic natural mutations without incorporating foreign DNA cassettes. SDN-3 involves foreign DNA and requires full GEAC evaluation.',
        trapExplanation: 'Candidates often confuse transgenic GMOs (which introduce foreign genetic material and always require GEAC approval) with SDN-1/SDN-2 genome editing (which modifies native sequences without foreign DNA).',
        difficulty: 'MEDIUM',
        isPYQ: false,
        examinerTrapPattern: 'Confusing transgenic GMO regulatory pathways with SDN-1/SDN-2 genome editing exemptions.'
      },
      {
        type: 'APPLIED_SCENARIO',
        stem: 'A molecular biologist aims to silence a defective human huntingtin gene allele without introducing any foreign DNA into the patient\'s cells. She designs a synthetic single guide RNA (sgRNA) alongside Cas9 endonuclease. Which of the following describes the molecular mechanism and repair pathway responsible for successfully knocking out the defective gene?',
        options: [
          'Cas9 cleaves downstream of the stop codon; the cell repairs the cut via Homology-Directed Repair (HDR) using foreign donor cDNA.',
          'Cas9 endonuclease generates a double-strand break (DSB) 3-4 bp upstream of the PAM site; repair via error-prone Non-Homologous End Joining (NHEJ) causes indels that disrupt the open reading frame.',
          'DNA ligase hydrolyzes the phosphodiester bonds at the promoter region; Taq polymerase synthesizes an antisense blocking strand.',
          'Restriction enzyme EcoRI recognizes the 5\'-GAATTC-3\' palindrome and recruits reverse transcriptase to methylate the cytosine bases.'
        ],
        correctAnswer: 'Cas9 endonuclease generates a double-strand break (DSB) 3-4 bp upstream of the PAM site; repair via error-prone Non-Homologous End Joining (NHEJ) causes indels that disrupt the open reading frame.',
        explanation: 'The CRISPR-Cas9 ribonucleoprotein complex binds target DNA adjacent to the PAM sequence (5\'-NGG-3\') and cuts both strands 3-4 nucleotides upstream. In the absence of a repair template, the cell uses Non-Homologous End Joining (NHEJ), which introduces insertion/deletion mutations (indels), causing a frameshift that permanently silences (knocks out) the targeted gene.',
        trapExplanation: 'Candidates confuse the outcome of NHEJ (error-prone knockout) with HDR (precise template-driven knock-in/edit). When no donor DNA is provided, NHEJ is the dominant repair pathway.',
        difficulty: 'HARD',
        isPYQ: false,
        examinerTrapPattern: 'Confusing the repair outcome of Non-Homologous End Joining (NHEJ, gene disruption) with Homology-Directed Repair (HDR, gene replacement).'
      }
    ]
  },

  // =========================================================================
  // CON-SCI-117: Space Technology: ISRO Launch Vehicles & Orbital Mechanics
  // =========================================================================
  {
    id: 'CON-SCI-117',
    topicOrder: 26,
    topicSlug: 'applied-science-biotechnology-and-emerging-tech',
    topicTitle: 'Applied Science, Biotechnology & Emerging Technologies',
    topicDescription: 'Recombinant DNA & CRISPR gene editing, ISRO space launch vehicles, nuclear technology & India 3-stage program, nanotechnology, robotics, AI, 5G/6G & National Quantum Mission.',
    slug: 'isro-launch-vehicles-cryogenic-propulsion-and-orbital-mechanics',
    title: 'Space Technology: ISRO Launch Vehicles (PSLV, GSLV, LVM3), Cryogenic Propulsion & Orbital Mechanics',
    shortDefinition: 'The physics, propulsion architectures, and multi-stage payload capabilities of the Indian Space Research Organisation (ISRO) fleet—PSLV, GSLV Mk II, and LVM3 (Launch Vehicle Mark-3)—alongside orbital mechanics spanning Low Earth Orbit (LEO), Sun-Synchronous Orbit (SSO), Geostationary Transfer Orbit (GTO), and Geostationary Orbit (GEO).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-SCI-117-01',
        statement: 'ISRO\'s Polar Satellite Launch Vehicle (PSLV) uses an alternating four-stage propulsion configuration (Stage 1: Solid HTPB; Stage 2: Liquid Vikas engine using UDMH/N2O4; Stage 3: Solid HTPB; Stage 4: Liquid MMH/MON-3) to place up to 1,750 kg payloads into Sun-Synchronous Polar Orbits (~600–800 km altitude).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Indian Space Research Organisation (ISRO), Launchers: Polar Satellite Launch Vehicle (PSLV) Specifications Sheet, 2024',
        excerpt: 'PSLV is a four-stage launch vehicle with alternating solid and liquid propulsion systems: PS1 (Solid), PS2 (Liquid Vikas), PS3 (Solid), PS4 (Liquid).'
      },
      {
        id: 'CLM-SCI-117-02',
        statement: 'The Launch Vehicle Mark-3 (LVM3 / GSLV Mk III) is ISRO\'s heavy-lift three-stage launcher, comprising two S200 solid rocket boosters, an L110 core liquid stage (twin Vikas engines), and the indigenous CE-20 cryogenic upper stage burning liquid hydrogen (LH2 at 20 K) and liquid oxygen (LOX at 90 K), capable of injecting 4,000 kg into GTO and 8,000 kg into LEO (including the Gaganyaan crewed module).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'ISRO, Launch Vehicle Mark-3 (LVM3) Payload & Propulsion Overview, Department of Space, 2024',
        excerpt: 'LVM3 is configured as a three-stage vehicle with two solid strap-on motors (S200), one liquid core stage (L110), and a high-thrust cryogenic upper stage (C25 powered by CE-20 engine).'
      },
      {
        id: 'CLM-SCI-117-03',
        statement: 'Geostationary orbits (GEO) lie precisely at an altitude of 35,786 km above Earth\'s equator with an orbital period of exactly 23 hours, 56 minutes, and 4 seconds (one sidereal day), enabling ground antennas to maintain a fixed line of sight, while Sun-Synchronous Orbits (SSO) are retrograde polar orbits with nodal precession matching Earth\'s mean orbital motion around the Sun (~0.986°/day).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NCERT Physics Class 11, Chapter 8: Gravitation, Section 8.9 (Geostationary and Polar Satellites)',
        excerpt: 'A satellite in a circular orbit around the earth in the equatorial plane with a period of 24 hours appears stationary with respect to earth and is called a geostationary satellite at an altitude of about 36,000 km.'
      }
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Overcoming Gravity: The Physics of Multi-Stage Rocketry and Orbits',
        body: `Why can't a rocket simply carry one huge fuel tank and fly directly into deep space?

The answer lies in Tsiolkovsky's Rocket Equation: $\\Delta v = v_e \\ln(m_0 / m_f)$. As a rocket burns propellant, the dead weight of empty tanks and combustion chambers slows it down. **Staging** solves this by jettisoning empty stages, dramatically reducing the structural mass ($m_f$) so the remaining stages can accelerate the payload to orbital velocity ($v \\approx 7.8 \\text{ km/s}$ for LEO and $11.2 \\text{ km/s}$ for escape velocity).

Furthermore, where a satellite goes depends on its mission:
- **Earth Observation & Spy Cameras:** Must fly low and photograph every location at the exact same local solar time -> **Sun-Synchronous Polar Orbit (SSO, ~600–800 km)**.
- **DTH Television & Weather Monitoring:** Must hover permanently over the exact same longitude over India -> **Geostationary Equatorial Orbit (GEO, 35,786 km)**.`,
        order: 1
      },
      {
        type: 'CORE_IDEA',
        title: 'Comparative Architecture: ISRO Launch Vehicle Fleet & Orbit Types',
        body: `### ISRO Launch Vehicle Comparison Matrix

| Vehicle | Staging Architecture | Propellant Chemistry | Payload Capability | Primary Mission Profile |
|---|---|---|---|---|
| **PSLV (Workhorse)** | 4 Stages: Solid (HTPB) -> Liquid (Vikas: UDMH + $N_2O_4$) -> Solid (HTPB) -> Liquid (MMH + MON-3) | Alternating Solid-Liquid | 1,750 kg to SSO (600 km); 1,425 kg to Sub-GTO | Remote sensing satellites (Cartosat, Oceansat), Chandrayaan-1, Mars Orbiter Mission (Mangalyaan), Aditya-L1 |
| **GSLV Mk II** | 3 Stages: Solid Core (GS1) + 4 Liquid Strap-ons -> Liquid Vikas (GS2) -> Indigenous Cryogenic Upper Stage (CUS: CE-7.5) | Solid/Liquid -> Liquid -> Cryogenic (LH2 + LOX) | 2,250 kg to GTO; 5,000 kg to LEO | Communication satellites (INSAT/GSAT series), meteorological satellites |
| **LVM3 (GSLV Mk III)** | 3 Stages: 2 S200 Solid Strap-ons -> Core Liquid L110 (Twin Vikas) -> High-Thrust Cryogenic Stage (C25: CE-20) | Solid Strap-ons ignite first; Liquid core ignites in-flight; Cryogenic upper stage | 4,000 kg to GTO; 8,000 kg to LEO | Heavy communication satellites, Chandrayaan-2, Chandrayaan-3, Gaganyaan (Human Spaceflight) |
| **SSLV (Small Satellite)** | 3 Solid Stages (SS1, SS2, SS3) + Velocity Trimming Module (VTM: liquid) | All-solid main stages for rapid turnaround | 500 kg to Low Earth Orbit (500 km) | Commercial microsatellite constellations, on-demand quick launches |

### Satellite Orbit Topography

\`\`\`
Altitude
  │
35,786 km ───► GEO / GSO (Geostationary / Geosynchronous Equatorial Orbit, T = 24 hours)
  │            Applications: DTH Broadcasting, NavIC constellation, INSAT weather
  │
20,200 km ───► MEO (Medium Earth Orbit, T = 12 hours)
  │            Applications: Global GPS, Galileo, GLONASS constellations
  │
600-800 km ──► LEO / SSO (Low Earth Orbit / Sun-Synchronous Polar Orbit, T = ~90–100 mins)
  │            Applications: Earth Observation (Cartosat, RISAT), Space Station (ISS)
  0 km ───────► Earth Surface
\`\`\``,
        order: 2
      },
      {
        type: 'MECHANISM',
        title: 'Cryogenic Propulsion Physics & Orbital Mechanics',
        body: `### The Physics of Cryogenic Engines (CE-7.5 and CE-20)
Cryogenic propulsion offers the highest **Specific Impulse ($I_{sp}$)** among chemical propellants:
- **Fuel:** Liquid Hydrogen ($LH_2$), liquefied at cryogenic temperature of $-253^\\circ \\text{C}$ ($20 \\text{ K}$).
- **Oxidizer:** Liquid Oxygen ($LOX$), liquefied at $-183^\\circ \\text{C}$ ($90 \\text{ K}$).
- **Combustion Reaction:** $2H_2 + O_2 \\to 2H_2O + \\text{Energy}$
- **Specific Impulse Advantage:** Cryogenic engines achieve an $I_{sp} \\approx 450 \\text{ seconds}$, compared to ~300 seconds for solid HTPB propellants and ~310 seconds for earth-storable hypergolic liquid fuels (UDMH/$N_2O_4$). This ~50% efficiency boost is mandatory for lifting 4+ tonne payloads into 36,000 km transfer orbits.

### Orbital Mechanics Principles
1. **Kepler's Third Law:** The square of the orbital period is directly proportional to the cube of the semi-major axis: $T^2 \\propto r^3$.
   - For a circular orbit at radius $r = R_E + h$:
   $$v_{orbit} = \\sqrt{\\frac{GM}{r}}, \\quad T = 2\\pi \\sqrt{\\frac{r^3}{GM}}$$
   - At $h = 35,786 \\text{ km}$, $r \\approx 42,164 \\text{ km}$, yielding $T = 86,164 \\text{ seconds} = 23 \\text{ hours } 56 \\text{ min } 4 \\text{ sec}$ (one sidereal day).
2. **Sun-Synchronous Orbit (SSO) Nodal Precession:**
   Earth is not a perfect sphere; its equatorial bulge (oblateness parameter $J_2$) exerts a gravitational torque that causes the orbit plane to precess (rotate). In an SSO (inclination $i \\approx 97^\\circ–98^\\circ$, a retrograde polar orbit), the orbit is engineered so that its nodal precession rate equals exactly $360^\\circ / 365.25 \\text{ days} \\approx 0.986^\\circ / \\text{day}$. Thus, the satellite crosses the equator at the exact same local solar time on every single pass, guaranteeing consistent illumination and shadows for multi-spectral remote sensing.`,
        order: 3
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Competitive Examination Traps & Policy Application Matrix',
        body: `### Common Examiner Traps
1. **Staging Sequence Trap:** PSLV has **4 stages** (Solid-Liquid-Solid-Liquid), while LVM3 has **3 stages** (Solid strap-ons, Core Liquid, Cryogenic Upper Stage). Do NOT confuse LVM3 as having 4 stages!
2. **Cryogenic Fuel State Trap:** Questions often state that cryogenic engines burn liquid hydrogen with compressed gaseous oxygen. **TRAP!** Both **hydrogen AND oxygen must be in liquefied cryogenic states** ($-253^\\circ \\text{C}$ and $-183^\\circ \\text{C}$).
3. **GEO vs GSO Trap:**
   - **GSO (Geosynchronous Orbit):** Any orbit with a 24-hour period. Can have non-zero inclination; the satellite traces an *analemma* (figure-8) in the sky.
   - **GEO (Geostationary Orbit):** A circular geosynchronous orbit with **strictly ZERO inclination** positioned directly above the Equator. Satellite appears permanently frozen at one point in the sky. All GEO orbits are GSO, but not all GSO orbits are GEO!
4. **NavIC Constellation Architecture:** India's indigenous satellite navigation system (NavIC / IRNSS) uses a combination of **3 Geostationary (GEO)** and **4 Geosynchronous (GSO)** satellites (total 7 satellites in operational constellation).

### Exam Syllabus Matrix
- **UPSC CSE & APFC:** GS Paper 3 (Space Tech). Missions tested: Gaganyaan, Chandrayaan-3 (propulsion module + lander Vikram + rover Pragyan), Aditya-L1 (Lagrange Point L1 orbit mechanics), XPoSat, and SSLV commercialization.
- **RPSC RAS:** Paper 2 (Science & Tech - Indian Space Program). Physical centers: VSSC (Thiruvananthapuram - rockets), SDSC SHAR (Sriharikota - launchpads), URSC (Bengaluru - satellites), LPSC (cryogenics).
- **NABARD Grade A & RBI Grade B:** Applications of space tech in agriculture: FASAL (forecasting agricultural output using satellite agro-meteorology), CHAMAN (horticulture mapping), and PMFBY crop loss satellite validation.`,
        order: 4
      }
    ],
    examMappings: [
      { examCode: 'UPSC_CSE', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'EXPERT', syllabusUnit: 'GS Paper 3: Science & Technology - Space Technology & Applications', notes: 'Core pillar. Repeated questions on launch vehicles, cryogenic propulsion, LVM3, and orbits.' },
      { examCode: 'UPSC_APFC', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', syllabusUnit: 'General Science & Emerging Technologies', notes: 'Frequently tested. ISRO mission configurations, NavIC, and fuel chemistry.' },
      { examCode: 'UPSC_EPFO_EOAO', relevance: 'CORE_SYLLABUS', priority: 'MEDIUM', requiredDepth: 'PROFICIENT', syllabusUnit: 'General Science', notes: 'Focus on vehicle names, stage fuels, and recent achievements.' },
      { examCode: 'RPSC_RAS', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'EXPERT', syllabusUnit: 'Mains Paper 2: Science & Technology - Space Technology', notes: 'Dedicated 5 and 10-mark questions on ISRO launch vehicle evolution from SLV-3 to LVM3.' },
      { examCode: 'IBPS_PO', relevance: 'ANCILLARY_COVERAGE', priority: 'MEDIUM', requiredDepth: 'AWARENESS', syllabusUnit: 'General Awareness: Current Affairs', notes: 'ISRO launch dates, satellites launched, international partnerships.' },
      { examCode: 'SBI_PO', relevance: 'ANCILLARY_COVERAGE', priority: 'MEDIUM', requiredDepth: 'AWARENESS', syllabusUnit: 'General Awareness: Current Affairs', notes: 'Recent mission payloads and commercial launches via NewSpace India Limited (NSIL).' },
      { examCode: 'RBI_GRADE_B', relevance: 'DIRECT_OVERLAY', priority: 'MEDIUM', requiredDepth: 'PROFICIENT', syllabusUnit: 'ESI & General Awareness: Technology & Space Economy', notes: 'Commercialization of space sector, IN-SPACe, NSIL, and Indian Space Policy 2023.' },
      { examCode: 'NABARD_GRADE_A', relevance: 'DIRECT_OVERLAY', priority: 'HIGH', requiredDepth: 'PROFICIENT', syllabusUnit: 'Agriculture & Rural Development: Geo-spatial Applications', notes: 'Remote sensing in agriculture: FASAL scheme, soil moisture estimation, flood damage mapping.' }
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'ISRO\'s PSLV has 4 alternating stages (Solid-Liquid-Solid-Liquid) for Polar/SSO orbits (~1.75 t). LVM3 has 3 stages (2 solid S200 strap-ons, L110 twin-Vikas liquid core, CE-20 cryogenic upper stage burning LH2 + LOX) for heavy 4-tonne GTO payloads (Gaganyaan, Chandrayaan-3). Geostationary orbits (GEO) sit at 35,786 km with zero inclination and 24-hr period.',
        order: 1
      },
      {
        type: 'SUMMARY_2M',
        content: 'The Indian space program relies on two primary orbital workhorses: PSLV and LVM3. PSLV utilizes an alternating four-stage architecture (solid HTPB, liquid Vikas using UDMH/N2O4, solid HTPB, liquid MMH/MON-3) optimized for injecting remote sensing satellites into Sun-Synchronous Orbits (SSO, 600-800 km) where nodal precession matches Earth\'s orbit around the Sun. For heavy telecommunication payloads and interplanetary exploration, ISRO developed LVM3 (GSLV Mk III), configured with two S200 solid rocket boosters, an L110 core liquid stage, and an indigenous CE-20 cryogenic upper stage powered by liquid hydrogen (-253°C) and liquid oxygen (-183°C). Cryogenic engines deliver superior Specific Impulse (~450 s). In orbital mechanics, Geostationary Orbit (GEO) requires an altitude of precisely 35,786 km directly over the equator to maintain a stationary line of sight relative to Earth.',
        order: 2
      },
      {
        type: 'ARCHITECTURE_5M',
        content: `# Architecture of ISRO Launch Fleet & Orbital Topography

1. **Launch Vehicles Configuration:**
   - **PSLV (4 Stages):**
     * PS1: Solid (138 t HTPB) + optional 2/4/6 strap-on boosters (PSLV-DL/QL/XL).
     * PS2: Liquid Vikas Engine (42 t UDMH + N2O4).
     * PS3: Solid (7.6 t HTPB with Kevlar case).
     * PS4: Liquid Dual Engines (2.5 t MMH + MON-3).
   - **LVM3 (3 Stages):**
     * Stage 1: Two S200 Solid Strap-ons (200 t HTPB each) - ignite at lift-off.
     * Stage 2: Core Liquid L110 (110 t UDMH + N2O4, twin Vikas engines) - ignites at T+114s.
     * Stage 3: Cryogenic C25 Upper Stage (28 t propellant: LH2 at 20 K, LOX at 90 K; CE-20 engine).
   - **SSLV (Small Satellite Launch Vehicle):**
     * 3 Solid Stages (SS1, SS2, SS3) + Liquid Velocity Trimming Module (VTM). Payload: 500 kg to 500 km LEO.

2. **Orbital Mechanics & Altitudes:**
   - **LEO (Low Earth Orbit):** 200–2,000 km altitude. Fast period (~90 min). Earth observation, ISS.
   - **SSO (Sun-Synchronous Orbit):** 600–800 km polar orbit. Retrograde inclination (~98°). Precession rate 0.986°/day matches Earth orbit; constant solar illumination angle.
   - **GTO (Geostationary Transfer Orbit):** Elliptical orbit (perigee ~250 km, apogee ~36,000 km). Stepping stone to GEO via apogee kick motor burns.
   - **GEO (Geostationary Orbit):** 35,786 km circular equatorial orbit. Zero inclination. $T = 23\\text{h } 56\\text{m } 4\\text{s}$. Fixed relative to ground receivers.`,
        order: 3
      }
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Consider the following statements regarding ISRO\'s Launch Vehicle Mark-3 (LVM3 / GSLV Mk III):\\n1. It employs an alternating four-stage solid and liquid propulsion architecture.\\n2. The high-thrust cryogenic upper stage (C25) uses liquid hydrogen as fuel and liquid oxygen as oxidizer.\\n3. At lift-off, the two solid strap-on motors (S200) ignite first, while the liquid core stage (L110) ignites in-flight.\\nWhich of the statements given above are correct?',
        options: [
          '1 and 2 only',
          '2 and 3 only',
          '1 and 3 only',
          '1, 2 and 3'
        ],
        correctAnswer: '2 and 3 only',
        explanation: 'Statement 1 is incorrect because LVM3 is a three-stage launch vehicle (PSLV is the one with 4 stages). Statement 2 is correct because the CE-20 cryogenic engine burns liquid hydrogen (-253°C) and liquid oxygen (-183°C). Statement 3 is correct because LVM3 lifts off solely under the thrust of the two S200 solid boosters, with the twin-Vikas L110 core stage igniting about 114 seconds into flight.',
        trapExplanation: 'Candidates often confuse the 4-stage configuration of PSLV with LVM3, or assume the central liquid core of LVM3 ignites on the launchpad like the Saturn V or Space Shuttle main engines.',
        difficulty: 'HARD',
        isPYQ: false,
        examinerTrapPattern: 'Confusing the staging count and ignition sequence between PSLV and LVM3.'
      },
      {
        type: 'APPLIED_SCENARIO',
        stem: 'An ISRO mission planner is designing the orbital injection for a new high-resolution optical remote sensing satellite tasked with capturing urban change detection imagery under uniform solar illumination conditions on every pass. Which orbit must the satellite be placed into, and what physical property enables this?',
        options: [
          'Geostationary Equatorial Orbit (GEO); enabled by zero orbital eccentricity.',
          'Sun-Synchronous Polar Orbit (SSO); enabled by Earth\'s oblateness (J2 torque) causing nodal precession of ~0.986° per day.',
          'Medium Earth Orbit (MEO); enabled by relativistic gravitational time dilation.',
          'Molniya Orbit; enabled by a critical inclination of 63.4° that cancels out atmospheric drag.'
        ],
        correctAnswer: 'Sun-Synchronous Polar Orbit (SSO); enabled by Earth\'s oblateness (J2 torque) causing nodal precession of ~0.986° per day.',
        explanation: 'Sun-Synchronous Orbits (SSO) are retrograde polar orbits engineered so that the gravitational torque from Earth\'s equatorial bulge (J2 perturbation) causes the orbit plane to precess eastward at approximately 0.986° per day (360° per 365.25 days). This matches Earth\'s revolution around the Sun, ensuring the satellite passes over any given latitude at the exact same local mean solar time, preserving uniform shadow and illumination angles.',
        trapExplanation: 'Candidates often think geostationary orbits are used for remote sensing photography; however, GEO is at 35,786 km (too far for fine-detail optical imaging) and does not cover polar regions.',
        difficulty: 'HARD',
        isPYQ: false,
        examinerTrapPattern: 'Confusing remote sensing requirements (Low Earth SSO) with communication/broadcasting requirements (Geostationary Orbit).'
      }
    ]
  },

  // =========================================================================
  // CON-SCI-118: Nuclear Physics & India's 3-Stage Nuclear Program
  // =========================================================================
  {
    id: 'CON-SCI-118',
    topicOrder: 26,
    topicSlug: 'applied-science-biotechnology-and-emerging-tech',
    topicTitle: 'Applied Science, Biotechnology & Emerging Technologies',
    topicDescription: 'Recombinant DNA & CRISPR gene editing, ISRO space launch vehicles, nuclear technology & India 3-stage program, nanotechnology, robotics, AI, 5G/6G & National Quantum Mission.',
    slug: 'nuclear-fission-fusion-and-indias-three-stage-nuclear-programme',
    title: 'Nuclear Physics & Energy: Fission, Fusion, Pressurized Heavy Water Reactors (PHWR) & India\'s 3-Stage Nuclear Power Programme',
    shortDefinition: 'The nuclear energetics of neutron-induced fission and thermonuclear fusion, the engineering architecture of Pressurized Heavy Water Reactors (PHWR) using natural uranium fuel and heavy water (D2O) moderator/coolant, and Homi Bhabha\'s three-stage nuclear fuel cycle designed to exploit India\'s vast monazite thorium reserves.',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-SCI-118-01',
        statement: 'Nuclear fission releases ~200 MeV per U-235 fission event through mass defect ($E = \\Delta m \\cdot c^2$), mediated by prompt thermal neutrons ($E \\approx 0.025 \\text{ eV}$), requiring heavy water ($D_2O$) or graphite moderators to thermalize fast fission neutrons without excessive parasitic neutron absorption.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NCERT Physics Class 12, Chapter 13: Nuclei, Section 13.7 (Nuclear Energy - Fission and Fusion)',
        excerpt: 'The disintegration of an atom of U-235 releases about 200 MeV of energy. Fission fragments release 2 to 3 fast neutrons with energy around 2 MeV which must be slowed down to thermal energies (~0.025 eV) using moderators.'
      },
      {
        id: 'CLM-SCI-118-02',
        statement: 'Homi Bhabha\'s Three-Stage Nuclear Power Programme systematically closes the fuel cycle: Stage 1 utilizes Pressurized Heavy Water Reactors (PHWRs) fueled by natural uranium ($0.7\\% \\text{ U-235}, 99.3\\% \\text{ U-238}$) producing plutonium-239; Stage 2 employs Fast Breeder Reactors (FBRs, e.g., PFBR at Kalpakkam) using Pu-239 fuel with U-238 / Th-232 blankets to breed more fissile material (Pu-239 and U-233) than consumed; Stage 3 will deploy Advanced Heavy Water Reactors (AHWR) using Thorium-232 / Uranium-233 fuel cycle to harness India\'s vast monazite reserves.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Department of Atomic Energy (DAE), Government of India, Strategic Plan for Nuclear Power Development: The Three-Stage Programme, 2024',
        excerpt: 'The three-stage program uses natural uranium in PHWRs in stage 1, fast breeder reactors breeding Pu-239 and U-233 in stage 2, and thorium-based reactors in stage 3 to achieve nuclear fuel self-sufficiency.'
      },
      {
        id: 'CLM-SCI-118-03',
        statement: 'Controlled thermonuclear fusion, pursued internationally via the ITER tokamak facility (in which India is one of 7 full partners contributing the cryostat and in-vessel shielding), achieves energy gain ($Q \\ge 10$) via the deuterium-tritium ($^2\\text{H} + ^3\\text{H} \\to ^4\\text{He} + \\text{n} + 17.6 \\text{ MeV}$) reaction under Lawson criterion confinement conditions ($n \\cdot T \\cdot \\tau_E$).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'ITER International Organization & Institute for Plasma Research (IPR) Gandhinagar, India-ITER Partnership Report, 2024',
        excerpt: 'India is a full partner in ITER, contributing the world largest stainless-steel cryostat manufactured by L&T to house the tokamak reactor.'
      }
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Mass Defect, Binding Energy and Why India Chose Thorium',
        body: `Why does splitting a heavy nucleus release millions of times more energy than burning coal?

When an atom of Uranium-235 splits, the combined mass of the resulting fragments and free neutrons is slightly *less* than the mass of the original atom. This lost mass ($\\Delta m$) is transformed directly into pure kinetic energy according to Einstein's equation:
$$E = \\Delta m \\cdot c^2$$
Because the speed of light squared ($c^2 \\approx 9 \\times 10^{16} \\text{ m}^2/\\text{s}^2$) is colossal, splitting just 1 gram of Uranium yields as much heat as burning 3 tonnes of premium coal!

### India's Geo-Strategic Energy Dilemma
- **The Problem:** India holds less than **1–2% of the world's uranium reserves**, making a purely uranium-dependent nuclear fleet vulnerable to geopolitical sanctions and import embargoes.
- **The Asset:** India possesses over **25% of global thorium reserves** in the monazite placer sands along the beaches of Kerala, Tamil Nadu, and Odisha.
- **The Catch:** Thorium-232 is **fertile, not fissile**—it cannot sustain a chain reaction on its own. It must first be irradiated with neutrons inside a reactor to convert it into fissile Uranium-233.

This inescapable nuclear physics dictated **Dr. Homi Bhabha's brilliant 3-Stage Nuclear Masterplan**.`,
        order: 1
      },
      {
        type: 'CORE_IDEA',
        title: 'The Master Blueprint: Homi Bhabha\'s Three-Stage Nuclear Programme',
        body: `### Architectural Matrix of the Three Stages

| Stage | Reactor Type | Primary Fuel | Moderator & Coolant | By-Product / Breeding Output | Strategic Milestone |
|---|---|---|---|---|---|
| **Stage 1** | **PHWR** (Pressurized Heavy Water Reactor) | **Natural Uranium** ($0.7\\% \\text{ U-235}, 99.3\\% \\text{ U-238}$) | Heavy Water ($D_2O$) as both Moderator & Coolant | Generates electricity + produces **Plutonium-239** via neutron capture in U-238 | Mature commercial stage; operated by NPCIL across Rawatbhata, Kakrapar, Tarapur, Narora |
| **Stage 2** | **FBR** (Fast Breeder Reactor) | **Pu-239** (from Stage 1) + **U-238** or **Th-232** blanket | **Zero moderator** (fast neutrons); Liquid Sodium ($Na$) coolant | Breeds more fissile material than consumed: converts U-238 -> Pu-239 and **Th-232 -> U-233** | 500 MWe Prototype Fast Breeder Reactor (PFBR) at Kalpakkam (core loading commenced 2024) |
| **Stage 3** | **AHWR** (Advanced Heavy Water Reactor) / Molten Salt | **Thorium-232** + fissile **Uranium-233** | Heavy Water or Molten Fluoride Salts | Sustained breeding of U-233 from Thorium; provides perpetual energy security | Kamini test reactor at Kalpakkam operates on U-233; full commercial deployment post Stage 2 fleet |

### Fissile vs. Fertile Isotopes
- **Fissile Isotopes (Can sustain fission chain reaction with thermal neutrons):** Uranium-235 ($^{235}\\text{U}$), Plutonium-239 ($^{239}\\text{Pu}$), Uranium-233 ($^{233}\\text{U}$).
- **Fertile Isotopes (Non-fissile; absorb neutrons to become fissile):**
  - $^{238}\\text{U} + \\text{n} \\to ^{239}\\text{U} \\xrightarrow{\\beta^-} ^{239}\\text{Np} \\xrightarrow{\\beta^-} {}^{239}\\text{Pu}$ (Fissile)
  - $^{232}\\text{Th} + \\text{n} \\to ^{233}\\text{Th} \\xrightarrow{\\beta^-} ^{233}\\text{Pa} \\xrightarrow{\\beta^-} {}^{233}\\text{U}$ (Fissile)`,
        order: 2
      },
      {
        type: 'MECHANISM',
        title: 'Reactor Physics: Moderation, Coolants & Fusion vs Fission',
        body: `### Why Heavy Water ($D_2O$) is Mandatory for PHWRs
When U-235 fissions, the emitted neutrons are "fast" ($\\sim 2 \\text{ MeV}$). But U-235 has a vastly higher fission cross-section for "thermal" neutrons ($\\sim 0.025 \\text{ eV}$). Fast neutrons must be slowed down via collisions with light nuclei.
- **Ordinary Water ($H_2O$):** Protons in light water have a high neutron-capture cross-section ($p + n \\to d$). They absorb too many neutrons, requiring expensive enriched uranium ($3–5\\% \\text{ U-235}$) to maintain criticality (e.g., Tarapur 1 & 2 BWRs, Kudankulam VVERs).
- **Heavy Water ($D_2O$):** Deuterium ($^2\\text{H}$) has an extraordinarily low neutron absorption cross-section. It slows neutrons down through elastic collisions without absorbing them, allowing India to use abundant **unenriched natural uranium** ($0.7\\% \\text{ U-235}$).

### The Physics of Nuclear Fusion: The ITER Tokamak
While fission splits heavy nuclei, fusion combines light nuclei:
$$^2\\text{H} + ^3\\text{H} \\to ^4\\text{He} (3.5 \\text{ MeV}) + \\text{n} (14.1 \\text{ MeV}) + 17.6 \\text{ MeV}$$
- **Conditions Required:** Plasma temperatures exceeding **150 million degrees Celsius** (10 times hotter than the sun's core) to overcome electrostatic Coulomb repulsion.
- **Magnetic Confinement (Tokamak):** Superconducting toroidal and poloidal field magnets confine the charged deuterium-tritium plasma within a donut-shaped vacuum vessel.
- **India's Indigenous ITER Contributions:**
  1. **The Cryostat:** World's largest stainless-steel vacuum vessel (29m high, 29m wide, 3,850 tonnes) fabricated by Larsen & Toubro (L&T) in Hazira, Gujarat.
  2. **In-Wall Shielding** and cooling water systems engineered by the Institute for Plasma Research (IPR), Gandhinagar.`,
        order: 3
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Competitive Examination Traps & Policy Application Matrix',
        body: `### Common Examiner Traps
1. **Thorium Direct Fission Trap:** Questions often state that "Thorium is used as a direct fuel in Stage 1 nuclear reactors." **TRAP!** Thorium is **fertile, not fissile**. It cannot be used directly in Stage 1; it requires Stage 2 Fast Breeder Reactors to convert it into Uranium-233.
2. **Moderator in Fast Breeder Reactors:** Questions claim FBRs use heavy water or graphite as moderators. **TRAP!** Fast Breeder Reactors require **FAST neutrons** to breed Plutonium effectively; therefore, FBRs have **NO MODERATOR**. They use molten liquid sodium as coolant because sodium does not slow down neutrons.
3. **Heavy Water vs Light Water Fuel Requirements:**
   - **PHWR (CANDU / Indigenous 700 MWe):** Uses **Natural Uranium** with **Heavy Water ($D_2O$)**.
   - **LWR (Light Water Reactor / Kudankulam):** Uses **Enriched Uranium** with **Ordinary Water ($H_2O$)**.
4. **Tarapur Historical Trap:** Tarapur Units 1 & 2 are boiling water reactors (BWRs) built with US assistance using enriched uranium, NOT indigenous PHWRs.

### Exam Syllabus Matrix
- **UPSC CSE & APFC:** GS Paper 3 (Energy / Nuclear Policy). Focus on 3-stage program, civil liability for nuclear damage (CLND Act 2010), IAEA safeguards, and India-US 123 Agreement.
- **RPSC RAS:** Paper 2 (Science & Tech). Specific questions on Rawatbhata Nuclear Power Plant (Rajasthan's first, located in Chittorgarh district, Canada-assisted CANDU type, now operating indigenous units).
- **RBI Grade B & NABARD:** Clean energy transition, nuclear share in India's energy mix (targeting 22,480 MWe by 2031-32 from current ~7,480 MWe).`,
        order: 4
      }
    ],
    examMappings: [
      { examCode: 'UPSC_CSE', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'EXPERT', syllabusUnit: 'GS Paper 3: Science & Technology - Nuclear Technology & Energy', notes: 'Core conceptual subject. Focus on Three-Stage Nuclear Program, PFBR Kalpakkam, ITER, SMRs.' },
      { examCode: 'UPSC_APFC', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', syllabusUnit: 'General Science: Energy & Physical Sciences', notes: 'Repeatedly tested. Fission vs fusion, isotope definitions, nuclear fuel cycle.' },
      { examCode: 'UPSC_EPFO_EOAO', relevance: 'CORE_SYLLABUS', priority: 'MEDIUM', requiredDepth: 'PROFICIENT', syllabusUnit: 'General Science', notes: 'Basic physics of reactors, heavy water role, radioactive decay.' },
      { examCode: 'RPSC_RAS', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'EXPERT', syllabusUnit: 'Mains Paper 2: Science & Technology - Nuclear Energy', notes: 'Examine Rawatbhata (RAPS Chittorgarh), PHWR technology, and DAE institutional structure.' },
      { examCode: 'IBPS_PO', relevance: 'ANCILLARY_COVERAGE', priority: 'MEDIUM', requiredDepth: 'AWARENESS', syllabusUnit: 'General Awareness: Current Affairs', notes: 'Nuclear power project locations, commissioning of Kakrapar Unit 3 & 4 (700 MWe).' },
      { examCode: 'SBI_PO', relevance: 'ANCILLARY_COVERAGE', priority: 'MEDIUM', requiredDepth: 'AWARENESS', syllabusUnit: 'General Awareness: Current Affairs', notes: 'Financing of nuclear projects, joint ventures between NPCIL and NTPC.' },
      { examCode: 'RBI_GRADE_B', relevance: 'DIRECT_OVERLAY', priority: 'MEDIUM', requiredDepth: 'PROFICIENT', syllabusUnit: 'ESI: Energy Infrastructure & Decarbonisation', notes: 'Nuclear power as baseload zero-emission energy; role in achieving net-zero by 2070.' },
      { examCode: 'NABARD_GRADE_A', relevance: 'DIRECT_OVERLAY', priority: 'MEDIUM', requiredDepth: 'AWARENESS', syllabusUnit: 'Rural Infrastructure: Rural Electrification & Energy Mix', notes: 'Nuclear energy role in national grid stability and agricultural rural power supply.' }
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Homi Bhabha\'s 3-Stage Nuclear Program: Stage 1 uses Natural Uranium in PHWRs (moderated by D2O) producing Pu-239. Stage 2 uses Pu-239 in Fast Breeder Reactors (zero moderator, liquid Na coolant) with Thorium blankets to breed U-233. Stage 3 uses U-233 + Thorium in AHWRs to unlock India\'s vast coastal monazite reserves (~25% of global thorium).',
        order: 1
      },
      {
        type: 'SUMMARY_2M',
        content: 'Nuclear energy relies on the mass defect in neutron-induced fission ($E = \\Delta m \\cdot c^2$), releasing ~200 MeV per U-235 reaction. Because India possesses <2% of global uranium but >25% of global thorium (in monazite sands), Dr. Homi Bhabha formulated the Three-Stage Nuclear Power Programme. In Stage 1, Pressurized Heavy Water Reactors (PHWRs) burn unenriched natural uranium (0.7% U-235) using heavy water (D2O) as moderator and coolant, producing plutonium-239. In Stage 2, Fast Breeder Reactors (PFBR at Kalpakkam) use fast neutrons with liquid sodium coolant (no moderator) to burn Pu-239 and breed more fissile fuel (Pu-239 and U-233) from U-238 and Thorium-232 blankets. In Stage 3, Advanced Heavy Water Reactors will burn Thorium-232 and bred Uranium-233 for self-sustaining energy. On the fusion frontier, India is a partner in the ITER tokamak, supplying the massive stainless-steel cryostat from Hazira.',
        order: 2
      },
      {
        type: 'ARCHITECTURE_5M',
        content: `# Architecture of Nuclear Energy & India's Three-Stage Fuel Cycle

1. **Fundamental Energetics:**
   - Mass Defect: $\\Delta m = [Z m_p + (A - Z) m_n] - M_{nucleus}$.
   - Energy Released: $E = \\Delta m \\cdot c^2$. Fission releases ~200 MeV/event; Fusion releases ~17.6 MeV/event.
   - Moderation: Fast neutrons (~2 MeV) thermalized to ~0.025 eV via elastic scattering off deuterium nuclei in D2O.

2. **The 3-Stage Masterplan Workflow:**
   - **Stage 1 (PHWR):**
     * Fuel: Natural Uranium ($0.7\\% \\text{ U-235} + 99.3\\% \\text{ U-238}$).
     * Moderator/Coolant: $D_2O$.
     * Transmutation: $^{238}\\text{U} + \\text{n} \\to ^{239}\\text{Pu}$.
   - **Stage 2 (FBR - Fast Breeder Reactor):**
     * Core Fuel: Plutonium-239 + Uranium-238 / Thorium-232 blanket.
     * Moderator: **NONE** (fast neutron spectrum preserves high neutron yield $\\eta > 2$).
     * Coolant: Liquid Sodium (Na).
     * Breeding: Breeds fissile $^{239}\\text{Pu}$ from $^{238}\\text{U}$, and fissile $^{233}\\text{U}$ from $^{232}\\text{Th}$.
   - **Stage 3 (AHWR - Advanced Heavy Water Reactor):**
     * Fuel: Thorium-232 + Uranium-233.
     * Long-term sustainable domestic energy cycle utilizing India's monazite reserves.

3. **International Fusion Project (ITER):**
   - Reaction: $^2\\text{H} + ^3\\text{H} \\to ^4\\text{He} (3.5 \\text{ MeV}) + \\text{n} (14.1 \\text{ MeV})$.
   - Magnetic confinement in Tokamak at 150 million °C.
   - Indian Contribution: Cryostat (L&T Hazira), In-wall shielding (IPR Gandhinagar).`,
        order: 3
      }
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Why do Pressurized Heavy Water Reactors (PHWRs) of India\'s Stage 1 nuclear fleet utilize Heavy Water (D2O) rather than Ordinary Light Water (H2O) as a moderator?',
        options: [
          'Heavy water increases the kinetic energy of neutrons to above 10 MeV to accelerate fast fission.',
          'Deuterium in heavy water has an extremely low neutron-absorption cross-section, allowing a chain reaction using unenriched natural uranium.',
          'Light water is chemically corrosive to zirconium alloy fuel cladding at high operating pressures.',
          'Heavy water acts as a chemical catalyst that directly transmutes Thorium into Uranium-233.'
        ],
        correctAnswer: 'Deuterium in heavy water has an extremely low neutron-absorption cross-section, allowing a chain reaction using unenriched natural uranium.',
        explanation: 'Ordinary light water (H2O) contains protons that readily absorb thermal neutrons to form deuterium (p + n -> d). To overcome this neutron parasitic loss, light-water reactors require enriched uranium (3-5% U-235). Heavy water (D2O) already has deuterium nuclei, giving it an extremely low neutron capture cross-section. It thermalizes fast neutrons effectively without absorbing them, enabling the reactor to achieve criticality using abundant unenriched natural uranium (0.7% U-235).',
        trapExplanation: 'Candidates often think heavy water accelerates neutrons or acts as a chemical fuel, rather than understanding its role as an unabsorptive moderating medium.',
        difficulty: 'MEDIUM',
        isPYQ: false,
        examinerTrapPattern: 'Confusing the physics of neutron thermalization with neutron absorption cross-sections.'
      },
      {
        type: 'APPLIED_SCENARIO',
        stem: 'With reference to Stage 2 of India\'s Nuclear Power Programme (Prototype Fast Breeder Reactor - PFBR at Kalpakkam), consider the following statements:\\n1. It uses heavy water as a moderator to thermalize fast neutrons.\\n2. It uses molten liquid sodium as a coolant due to its high thermal conductivity and low neutron slowing-down property.\\n3. It is designed to breed more fissile Plutonium-239 and Uranium-233 than the fissile material consumed.\\nWhich of the statements given above are correct?',
        options: [
          '1 and 2 only',
          '2 and 3 only',
          '1 and 3 only',
          '1, 2 and 3'
        ],
        correctAnswer: '2 and 3 only',
        explanation: 'Fast Breeder Reactors (FBRs) operate on a FAST neutron spectrum because the breeding ratio for Plutonium-239 is optimal only when neutrons are NOT slowed down. Therefore, FBRs do NOT use any moderator (Statement 1 is false). Molten liquid sodium is used as coolant because it transfers heat rapidly while maintaining fast neutron speeds (Statement 2 is true). The reactor breeds fissile isotopes (Pu-239 from U-238 and U-233 from Th-232) at a rate exceeding fuel consumption (Statement 3 is true).',
        trapExplanation: 'A classic examiner trap is claiming that Fast Breeder Reactors use moderators. By definition, "Fast" reactors intentionally omit moderators to preserve fast neutron kinetics.',
        difficulty: 'HARD',
        isPYQ: false,
        examinerTrapPattern: 'Asserting that Fast Breeder Reactors use moderators.'
      }
    ]
  },

  // =========================================================================
  // CON-SCI-119: Emerging Technologies: Nanotech, Robotics & AI
  // =========================================================================
  {
    id: 'CON-SCI-119',
    topicOrder: 26,
    topicSlug: 'applied-science-biotechnology-and-emerging-tech',
    topicTitle: 'Applied Science, Biotechnology & Emerging Technologies',
    topicDescription: 'Recombinant DNA & CRISPR gene editing, ISRO space launch vehicles, nuclear technology & India 3-stage program, nanotechnology, robotics, AI, 5G/6G & National Quantum Mission.',
    slug: 'emerging-technologies-nanotechnology-robotics-and-artificial-intelligence',
    title: 'Emerging Technologies: Nanotechnology (Fullerenes, Carbon Nanotubes), Robotics & Artificial Intelligence',
    shortDefinition: 'The fundamental physics, engineering, and socio-economic governance of 21st-century technological frontiers: quantum confinement and surface-area-to-volume scaling in nanomaterials (graphene, CNTs, quantum dots), autonomous robotic kinematic systems, and Artificial Intelligence paradigms spanning Machine Learning, Deep Neural Networks, and Generative Transformers.',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-SCI-119-01',
        statement: 'At the nanoscale (1–100 nm), materials exhibit quantum confinement effects and drastically elevated surface-area-to-volume ratios, transforming chemically inert bulk gold into reactive catalysts, and giving carbon allotropes like graphene (2D single-atom hexagonal lattice) and Carbon Nanotubes (CNTs) tensile strengths exceeding 100 GPa and thermal conductivities surpassing 3,000 W/m·K.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NCERT Science Class 10 & 11 (Chemistry: Some Basic Concepts & Carbon Allotropes); DST Nano Mission Overview, 2024',
        excerpt: 'Nanomaterials possess distinct physical, chemical, and optical characteristics due to high surface area to volume ratio and quantum confinement occurring below 100 nanometres.'
      },
      {
        id: 'CLM-SCI-119-02',
        statement: 'Contemporary Generative AI architectures rely on the Transformer self-attention mechanism (Vaswani et al., 2017), computing pairwise token attention matrices ($A = \\text{softmax}(QK^T / \\sqrt{d_k})V$) to capture long-range contextual dependencies across high-dimensional semantic vector spaces without recurrent sequential processing.',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Vaswani et al. (2017) "Attention Is All You Need", Advances in Neural Information Processing Systems (NeurIPS 2017)',
        excerpt: 'The Transformer allows for significantly more parallelization and can reach a new state of the art in translation quality through self-attention mechanisms.'
      },
      {
        id: 'CLM-SCI-119-03',
        statement: 'India\'s National Strategy for Artificial Intelligence (#AIforAll by NITI Aayog) and the Digital Personal Data Protection (DPDP) Act 2023 establish sovereign regulatory and technological infrastructure, balancing AI innovation in agriculture, health, and governance against algorithmic bias, copyright infringement, and data privacy safeguards.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NITI Aayog, National Strategy for Artificial Intelligence: #AIforAll, 2018; Digital Personal Data Protection Act 2023, Ministry of Law and Justice',
        excerpt: 'The national strategy focuses on leveraging AI for social inclusion and economic growth, while the DPDP Act 2023 provides statutory obligations on Data Fiduciaries processing personal digital data.'
      }
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Nanoworld and the Cognitive Machine: Scaling Laws and Transformers',
        body: `Why does gold turn red and melt at low temperatures when ground into nanoparticles? And why can ChatGPT hold a human-like conversation while traditional computer programs fail?

1. **The Nano Revolution (Physics at $10^{-9}$ m):**
   In bulk materials, 99.999% of atoms are buried deep inside the interior. When you shrink a substance down to the nanoscale (1–100 nanometers), a massive fraction of all atoms sit exposed right on the surface. Furthermore, electrons become trapped in spaces smaller than their natural de Broglie wavelength (**quantum confinement**), altering electrical conductivity, color, and chemical reactivity.
2. **The AI Frontier (From Handcrafted Code to Large Language Models):**
   Traditional software followed rigid "If-Then" rules. Machine Learning inverted this: computers look at millions of examples and discover the underlying mathematical patterns themselves. Generative AI took this to the cognitive frontier via the **Transformer architecture**, allowing computers to weigh how every single word in a book relates to every other word simultaneously (**Self-Attention**).`,
        order: 1
      },
      {
        type: 'CORE_IDEA',
        title: 'Technological Pillars: Nanotech, Robotics & Artificial Intelligence',
        body: `### 1. Nanotechnology Spectrum
- **Dimensional Classification:**
  - **0D (Quantum Dots, Fullerenes):** All three dimensions $< 100 \\text{ nm}$. Discrete quantum energy levels; tunable fluorescence used in QLED displays and targeted cancer imaging.
  - **1D (Carbon Nanotubes - CNTs, Nanowires):** Two dimensions $< 100 \\text{ nm}$, one macroscopic dimension. High aspect ratio; ballistic electron transport.
  - **2D (Graphene, Transition Metal Dichalcogenides):** Single atomic layer thickness. Graphene is a single layer of $sp^2$-hybridized carbon atoms in a hexagonal honeycomb lattice; zero bandgap semimetal with 200x the strength of steel.
  - **3D (Bulk Nanocomposites, Dendrimers):** Nanostructured macroscopic bulk materials.
- **Key Applications:** Targeted drug delivery (liposomes passing blood-brain barrier), Nano-fertilizers (IFFCO Nano Urea/DAP with 80%+ nutrient uptake efficiency vs 30% for granular urea), water filtration (graphene oxide membranes for desalination).

### 2. Robotics & Autonomous Systems
- **Anatomy of a Robot:** Manipulator arm, End-effector (gripper/tool), Actuators (servo motors/pneumatics), Sensors (LiDAR, ultrasonic, IMUs), and Controller (microprocessor executing closed-loop PID control).
- **Degrees of Freedom (DoF):** Number of independent translational and rotational axes (human arm has 7 DoF; industrial articulated robots typically use 6 DoF).
- **Cobots (Collaborative Robots):** Robots equipped with force-torque feedback sensors designed to work directly alongside human workers without protective safety cages.

### 3. Artificial Intelligence Hierarchy
\`\`\`
Artificial Intelligence (AI: Broad discipline of creating machines capable of intelligent tasks)
  │
  └──► Machine Learning (ML: Algorithms that learn predictive functions from data)
         │
         ├──► Supervised Learning (Labeled data: Classification, Regression)
         ├──► Unsupervised Learning (Unlabeled data: Clustering, PCA)
         └──► Reinforcement Learning (Reward/Penalty feedback loops: AlphaGo, Robotics)
                │
                └──► Deep Learning (Deep Neural Networks with multiple hidden layers)
                       │
                       └──► Generative AI (Transformers, Diffusion Models, LLMs generating new text/code/images)
\`\`\``,
        order: 2
      },
      {
        type: 'MECHANISM',
        title: 'Transformer Self-Attention Mechanics & Algorithmic Governance',
        body: `### How Transformers (LLMs) Work: The Scaled Dot-Product Attention
Unlike older Recurrent Neural Networks (RNNs) that processed text one word at a time from left to right (forgetting early context), Transformers process an entire document in parallel.
For every input token vector, the model creates three linear projections:
1. **Query ($Q$):** What this token is looking for.
2. **Key ($K$):** What this token contains / offers.
3. **Value ($V$):** The actual content representation.

The mathematical attention equation:
$$\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right) V$$
- The dot product $QK^T$ measures the semantic alignment/affinity between every pair of words.
- Scaling by $1 / \\sqrt{d_k}$ prevents the dot products from growing excessively large in high dimensions.
- The **softmax** normalizes these affinities into attention probability weights that sum to 1.
- Multiplying by $V$ computes a context-rich blended embedding vector.

### Governance & Ethics: The Indian Policy Architecture
1. **NITI Aayog's #AIforAll (2018):** Focuses on 5 core impact sectors: Healthcare, Agriculture, Education, Smart Cities, and Smart Mobility.
2. **Digital Personal Data Protection (DPDP) Act 2023 & 2025 Rules:**
   - Imposes fiduciary duty on AI platforms collecting Indian user data.
   - Requires verifiable parental consent for processing children's data.
   - Establishes the Data Protection Board of India with penalties up to ₹250 Crore for data breaches.
3. **Deepfakes & Synthetic Media Regulations:** Advisory notices under the IT Act 2000 and IT (Intermediary Guidelines and Digital Media Ethics Code) Rules requiring social media intermediaries to take down unlabelled synthetic content within 24–36 hours.`,
        order: 3
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Competitive Examination Traps & Policy Application Matrix',
        body: `### Common Examiner Traps
1. **Graphene vs Graphite Structure Trap:** Graphene is NOT a 3D mineral. Graphene is a **single, two-dimensional atomic layer** of carbon. Peeling off layers of graphite until you reach one single layer gives graphene.
2. **Supervised vs Unsupervised Trap:** Examiners will describe clustering customer shopping patterns and claim it is supervised learning. **TRAP!** When data has **NO labels or predefined categories**, it is **Unsupervised Learning** (e.g., K-means clustering). Supervised learning requires labeled training pairs ($X, Y$).
3. **Nano-Urea Efficiency:** Conventional granular urea has a nutrient use efficiency of only 30–40% (the rest leaches into groundwater or volatilizes as nitrous oxide). IFFCO Nano Urea liquid has an efficiency exceeding **80%** due to foliar stomatal absorption.
4. **Weak vs Strong AI:** All contemporary systems (ChatGPT, self-driving cars, IBM Watson) are **Narrow / Weak AI** (specialized in specific tasks). Artificial General Intelligence (AGI / Strong AI - human-level across all intellectual domains) does not currently exist.

### Exam Syllabus Matrix
- **UPSC CSE & APFC:** GS Paper 3 (Science & Tech). Frequent essay and GS3 questions on AI ethics, generative models, semiconductor missions (India Semiconductor Mission - ISM), and nanotechnology in agriculture.
- **RPSC RAS:** Paper 2 (Science & Tech). Clear questions on carbon allotropes (Fullerenes $C_{60}$, Carbon Nanotubes), Nano Mission, and applications of robotics in manufacturing.
- **RBI Grade B & NABARD:** Economic implications of automation, algorithmic lending, credit scoring bias, and agri-tech drone applications under the Drone Didi Scheme.`,
        order: 4
      }
    ],
    examMappings: [
      { examCode: 'UPSC_CSE', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'EXPERT', syllabusUnit: 'GS Paper 3: Science & Technology - Emerging Technologies & AI', notes: 'Top priority. Expect questions on Generative AI regulation, DPDP Act 2023, and nanotech in healthcare.' },
      { examCode: 'UPSC_APFC', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', syllabusUnit: 'General Science: Emerging Tech & Cyber Law', notes: 'Core topic. Test DPDP Act provisions, nanotech definitions, and IT Rules compliance.' },
      { examCode: 'UPSC_EPFO_EOAO', relevance: 'CORE_SYLLABUS', priority: 'MEDIUM', requiredDepth: 'PROFICIENT', syllabusUnit: 'General Science & Computer Applications', notes: 'Focus on AI basics, cybersecurity, and data protection concepts.' },
      { examCode: 'RPSC_RAS', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'EXPERT', syllabusUnit: 'Mains Paper 2: Science & Technology - Nanotechnology & ICT', notes: 'Direct syllabus match: Fullerenes, Carbon Nanotubes, Graphene, AI applications in Rajasthan e-governance.' },
      { examCode: 'IBPS_PO', relevance: 'ANCILLARY_COVERAGE', priority: 'MEDIUM', requiredDepth: 'AWARENESS', syllabusUnit: 'General Awareness: Technology in Banking', notes: 'AI chatbots in banking, cybersecurity norms, RBI guidelines on digital lending.' },
      { examCode: 'SBI_PO', relevance: 'ANCILLARY_COVERAGE', priority: 'MEDIUM', requiredDepth: 'AWARENESS', syllabusUnit: 'General Awareness: Current Tech Trends', notes: 'Digital Public Infrastructure, AI fraud detection systems in banking.' },
      { examCode: 'RBI_GRADE_B', relevance: 'DIRECT_OVERLAY', priority: 'HIGH', requiredDepth: 'EXPERT', syllabusUnit: 'ESI & General Awareness: Technology, Labour & Automation', notes: 'Disruptive impact of Generative AI on employment elasticity, IT service exports, and financial stability.' },
      { examCode: 'NABARD_GRADE_A', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'EXPERT', syllabusUnit: 'Agriculture & Rural Development: Precision Agri & Nano Tech', notes: 'High-yield for ARD: Nano Urea, Nano DAP, Kisan Drones, precision yield monitoring.' }
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Nanomaterials (1–100 nm) exhibit high surface-area-to-volume ratios and quantum confinement (e.g., Graphene: 2D single-layer carbon; Carbon Nanotubes: cylindrical sheets with 100 GPa tensile strength; Nano Urea: 80%+ foliar efficiency). Contemporary Generative AI relies on Transformer self-attention (Vaswani 2017) to process global contextual dependencies. Regulated in India by NITI Aayog\'s #AIforAll and the DPDP Act 2023.',
        order: 1
      },
      {
        type: 'SUMMARY_2M',
        content: 'Emerging technologies are driven by physical scaling at the nanoscale and cognitive scaling in artificial intelligence. At the nanoscale (1–100 nm), quantum confinement and massive surface area alter physical and chemical behaviors: graphene (a single 2D layer of sp2 carbon atoms) and carbon nanotubes offer unmatched strength and electrical conductivity, while IFFCO\'s nano-fertilizers increase nutrient uptake efficiency to over 80%. In artificial intelligence, machine learning has evolved from supervised algorithms to deep transformer neural networks (Vaswani et al., 2017). Using scaled dot-product self-attention, transformers compute contextual relationships across text tokens simultaneously, powering modern large language models. In India, AI governance is directed by NITI Aayog\'s #AIforAll framework and legally anchored by the Digital Personal Data Protection (DPDP) Act 2023 to ensure ethical use, bias mitigation, and data privacy.',
        order: 2
      },
      {
        type: 'ARCHITECTURE_5M',
        content: `# Architecture of Emerging Technologies: Nano, Robotics & AI

1. **Nanomaterials Architecture:**
   - 0D: Quantum dots, Buckminsterfullerene ($C_{60}$).
   - 1D: Carbon Nanotubes (Single-Walled SWCNT and Multi-Walled MWCNT).
   - 2D: Graphene (hexagonal planar lattice, zero effective electron mass).
   - Quantum Confinement: Bandgap increases as particle size decreases below exciton Bohr radius.

2. **Robotics & Autonomous Mechanics:**
   - Actuation: Electric servo motors, harmonic drives, hydraulic power packs.
   - Kinematics: Forward kinematics (joint angles to end-effector position) vs Inverse kinematics (end-effector coordinates to joint angles).
   - Collaborative Robotics (Cobots): Force-limiting torque joints allow fenceless human-machine co-working.

3. **Artificial Intelligence Pipeline:**
   - Machine Learning: $Y = f(X; \\theta)$ parameterized by weights $\\theta$ adjusted via backpropagation and gradient descent.
   - Self-Attention Equation: $\\text{Attention}(Q,K,V) = \\text{softmax}(QK^T / \\sqrt{d_k})V$.
   - Indian Sovereign Policy:
     * NITI Aayog #AIforAll: Healthcare, Agriculture, Education, Smart Cities, Mobility.
     * DPDP Act 2023: Enforces lawful processing, purpose limitation, data fiduciary penalties up to ₹250 Cr.`,
        order: 3
      }
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following best explains why materials at the nanoscale (1–100 nm) exhibit dramatically different physical and chemical properties compared to their bulk counterparts?',
        options: [
          'Gravitational forces overcome strong nuclear forces at sub-micron scales.',
          'An enormous increase in the surface-area-to-volume ratio combined with quantum confinement effects alters electronic and optical states.',
          'Nanoparticles completely lose all valence electrons, transforming into stable noble gas electron configurations.',
          'Nuclear fission spontaneously occurs at room temperature due to lattice vibrations.'
        ],
        correctAnswer: 'An enormous increase in the surface-area-to-volume ratio combined with quantum confinement effects alters electronic and optical states.',
        explanation: 'As particle size decreases below 100 nm, two principal phenomena govern their behavior: (1) Surface-area-to-volume ratio escalates exponentially, placing a dominant fraction of atoms at the surface where they are chemically reactive and possess unsaturated bonds; (2) Quantum confinement restricts electron wavefunctions to dimensions comparable to their de Broglie wavelength, creating discrete energy levels and altering optical, electrical, and thermal properties.',
        trapExplanation: 'Candidates sometimes confuse atomic/molecular scaling with nuclear processes or imagine that gravity plays a significant role at the nanoscale (where electromagnetic and quantum forces dominate).',
        difficulty: 'MEDIUM',
        isPYQ: false,
        examinerTrapPattern: 'Confusing atomic surface/quantum effects with nuclear transmutation.'
      },
      {
        type: 'APPLIED_SCENARIO',
        stem: 'Under the Digital Personal Data Protection (DPDP) Act 2023, an Indian artificial intelligence startup training a medical diagnosis model on electronic health records obtained from private hospitals is legally categorized as which of the following, and what is their primary obligation?',
        options: [
          'Data Principal; they possess absolute copyright over the diagnostic output.',
          'Data Processor; they have zero legal liability for data breaches under Section 43A.',
          'Data Fiduciary; they must ensure a lawful basis for processing, implement reasonable security safeguards, and notify the Data Protection Board and affected individuals in case of a breach.',
          'Data Intermediary; they are granted complete statutory safe harbor under Section 79 of the IT Act.'
        ],
        correctAnswer: 'Data Fiduciary; they must ensure a lawful basis for processing, implement reasonable security safeguards, and notify the Data Protection Board and affected individuals in case of a breach.',
        explanation: 'Under Section 2(i) of the DPDP Act 2023, any person or entity that determines the purpose and means of processing personal data is a "Data Fiduciary". A startup deciding how and why to train models on personal health records is a Data Fiduciary. It must obtain valid consent, maintain data accuracy, deploy reasonable security safeguards, and report personal data breaches to the Data Protection Board of India and data principals.',
        trapExplanation: 'Candidates often confuse the role of a Data Principal (the individual to whom personal data relates) with a Data Fiduciary (the entity processing the data), or incorrectly assume that Section 79 safe harbor shields data fiduciaries from data protection liability.',
        difficulty: 'HARD',
        isPYQ: false,
        examinerTrapPattern: 'Confusing Data Fiduciary obligations with Data Principal rights or Section 79 IT Act intermediary safe harbor.'
      }
    ]
  },

  // =========================================================================
  // CON-SCI-120: Telecommunications, Optical Fiber & Quantum Computing (NQM)
  // =========================================================================
  {
    id: 'CON-SCI-120',
    topicOrder: 26,
    topicSlug: 'applied-science-biotechnology-and-emerging-tech',
    topicTitle: 'Applied Science, Biotechnology & Emerging Technologies',
    topicDescription: 'Recombinant DNA & CRISPR gene editing, ISRO space launch vehicles, nuclear technology & India 3-stage program, nanotechnology, robotics, AI, 5G/6G & National Quantum Mission.',
    slug: 'telecommunications-optical-fiber-and-national-quantum-mission',
    title: 'Advanced Telecommunications & Quantum Computing: 5G/6G Cellular Architecture, Optical Fibre & National Quantum Mission (NQM 2023)',
    shortDefinition: 'The physical principles and network topologies of advanced communications—including 5G New Radio (massive MIMO, beamforming, millimeter waves, network slicing), Total Internal Reflection in DWDM optical fiber backbones, and quantum information processing formalized under India\'s National Quantum Mission (NQM 2023).',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-SCI-120-01',
        statement: '5G New Radio (NR) operates across sub-6 GHz (FR1) and millimeter-wave (FR2: 24–100 GHz) frequency bands, utilizing massive Multiple-Input Multiple-Output (mMIMO), adaptive beamforming, and network slicing to deliver peak data rates of 20 Gbps with ultra-reliable low-latency communication (URLLC: < 1 ms latency).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'International Telecommunication Union (ITU), IMT-2020 Standard Specifications; Department of Telecommunications (DoT) 5G Rollout Blueprint, 2023',
        excerpt: 'IMT-2020 sets 5G requirements: peak data rates of up to 20 Gbps, latency as low as 1 ms, and connection density of 1 million devices per square kilometre.'
      },
      {
        id: 'CLM-SCI-120-02',
        statement: 'Optical fibre communication transmits modulated electromagnetic signals in the near-infrared spectrum (~1310 nm and 1550 nm attenuation minima) via Total Internal Reflection (TIR) through a high-refractive-index silica core ($n_1$) encased in lower-refractive-index cladding ($n_2$), achieving low attenuation (< 0.2 dB/km) and terabit-per-second bandwidth via Dense Wavelength Division Multiplexing (DWDM).',
        claimType: 'CORE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'NCERT Physics Class 12, Chapter 9: Ray Optics and Optical Instruments, Section 9.4 (Total Internal Reflection in Optical Fibres)',
        excerpt: 'Optical fibres consist of core and cladding. The refractive index of the material of the core is higher than that of the cladding. Light undergoes repeated total internal reflections along the length of the fibre.'
      },
      {
        id: 'CLM-SCI-120-03',
        statement: 'The Union Cabinet approved India\'s National Quantum Mission (NQM) in April 2023 with an outlay of ₹6,003.65 Crore (2023–2031) under the Department of Science & Technology, deploying 4 Thematic Hubs (T-Hubs) targeting 50–1000 physical qubit quantum computers, satellite-based Quantum Key Distribution (QKD) over 2,000 km ground distance, high-precision atomic clocks, and quantum materials.',
        claimType: 'STATUTORY_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'Cabinet Committee on Economic Affairs (CCEA), National Quantum Mission (NQM) Approval Notification, Department of Science & Technology, April 2023',
        excerpt: 'Cabinet approves National Quantum Mission to scale up scientific and industrial R&D for quantum technology with a total outlay of Rs 6003.65 crore over 8 years.'
      }
    ],
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'From Beams of Light to Quantum Entanglement: The Communications Revolution',
        body: `How does a video call travel halfway around the globe in a fraction of a second? And why is quantum computing about to shatter classical cybersecurity?

1. **The Optical Backbone:** Every text, video, and financial transaction travels as pulses of laser light trapped inside glass strands thinner than a human hair. By exploiting **Total Internal Reflection**, light bounces millions of times through glass without leaking out, carrying terabits of data at the speed of light in glass (~200,000 km/s).
2. **5G and Beyond:** Cellular wireless connects the last mile. 4G acted like a broad floodlight blasting radio waves everywhere. 5G uses **Massive MIMO and Beamforming**, acting like thousands of precision spotlights tracking individual smartphones, eliminating interference.
3. **The Quantum Frontier:** Classical computers encode information as binary bits (either 0 OR 1). Quantum computers exploit **Superposition** (a qubit can be 0 AND 1 simultaneously) and **Quantum Entanglement** (two particles connected across space such that measuring one instantly dictates the state of the other). This allows quantum computers to crack RSA cryptography in seconds, prompting India to build unhackable **Quantum Key Distribution (QKD)** networks.`,
        order: 1
      },
      {
        type: 'CORE_IDEA',
        title: 'Technological Pillars: 5G/6G, Optical Fibers & Quantum Architecture',
        body: `### 1. Cellular Evolution: 4G vs. 5G vs. 6G

| Metric | 4G (LTE-Advanced) | 5G (IMT-2020) | 6G Vision (IMT-2030) |
|---|---|---|---|
| **Peak Data Rate** | 1 Gbps | 20 Gbps | 1 Tbps (1000 Gbps) |
| **Air Latency** | 10–50 ms | **< 1 ms** (URLLC profile) | **< 0.1 ms** (Sub-millisecond) |
| **Operating Frequencies** | Sub-3 GHz | FR1 (Sub-6 GHz) + FR2 (Millimeter-wave: 24–40 GHz) | Terahertz (THz) band (0.1 THz to 10 THz) |
| **Core Service Profiles** | Mobile Broadband | 1. **eMBB** (Enhanced Mobile Broadband)\\n2. **URLLC** (Ultra-Reliable Low-Latency)\\n3. **mMTC** (Massive Machine Type Comms) | Ubiquitous Holographic Comms, AI-Native Networks, Integrated Space-Air-Ground Comms |
| **Architectural Innovations** | Fixed Cell Towers | Massive MIMO, Beamforming, Network Slicing, Open-RAN | Reconfigurable Intelligent Surfaces (RIS), Semantic Comms |

### 2. Physics of Optical Fibre Transmission
- **Total Internal Reflection Criteria:**
  1. Light must travel from an **optically denser medium to an optically rarer medium** ($n_{core} > n_{cladding}$).
  2. The angle of incidence ($i$) must strictly **exceed the critical angle ($i_c$)**:
     $$\\sin(i_c) = \\frac{n_{cladding}}{n_{core}}$$
- **Low-Attenuation Windows:** Near-infrared wavelengths: **1,310 nm** (zero-dispersion window) and **1,550 nm** (minimum absorption attenuation $< 0.2 \\text{ dB/km}$).
- **Dense Wavelength Division Multiplexing (DWDM):** Sending dozens of distinct optical wavelength channels simultaneously down a single fiber strand, scaling bandwidth to multi-terabit capacity.

### 3. India's National Quantum Mission (NQM 2023–2031)
Approved April 2023; ₹6,003.65 Crore outlay; DST.
- **The 4 Thematic Hubs (T-Hubs):**
  1. **T-Hub 1 (Quantum Computing):** Intermediate-scale quantum computers with **50 to 1,000 physical qubits** using superconducting circuits and trapped-ion/photonic platforms.
  2. **T-Hub 2 (Quantum Communication):** Ground-to-satellite Quantum Key Distribution (QKD) over **2,000 km** range across India; inter-city terrestrial fiber QKD.
  3. **T-Hub 3 (Quantum Sensing & Metrology):** High-sensitivity atomic clocks, quantum magnetometers, and gravimeters for defense navigation without GPS.
  4. **T-Hub 4 (Quantum Materials & Devices):** Topological insulators, single-photon sources, and superconducting materials.`,
        order: 2
      },
      {
        type: 'MECHANISM',
        title: 'Quantum Key Distribution (QKD) & Quantum Information Mechanics',
        body: `### The Physics of Quantum Information
1. **Qubit & Superposition:**
   A classical bit is state $|0\\rangle$ or $|1\\rangle$. A quantum qubit is a linear combination:
   $$|\\psi\\rangle = \\alpha |0\\rangle + \\beta |1\\rangle, \\quad \\text{where } |\\alpha|^2 + |\\beta|^2 = 1$$
   While $N$ classical bits store $N$ numbers at once, $N$ qubits can exist in a superposition of $2^N$ states simultaneously. For $N = 50$, $2^{50} \\approx 1.12 \\times 10^{15}$ simultaneous states!
2. **Quantum Entanglement (EPR Pair):**
   Two qubits can be entangled in a Bell state:
   $$|\\Phi^+\\rangle = \\frac{1}{\\sqrt{2}} (|00\\rangle + |11\\rangle)$$
   Measuring the first qubit immediately collapses the second qubit into the identical state, regardless of whether they are 1 millimeter or 10,000 kilometers apart (**non-local correlation**).

### Quantum Key Distribution (BB84 Protocol)
How does QKD provide unhackable communication?
- The sender (Alice) encodes random cryptographic key bits into the polarization states of single photons across non-orthogonal quantum bases (e.g., Rectilinear $+$ and Diagonal $\\times$).
- The receiver (Bob) randomly measures photons using non-orthogonal bases.
- **The No-Cloning Theorem & Heisenberg Uncertainty:** An eavesdropper (Eve) cannot clone or intercept single photons without measuring them. But measurement irrevocably perturbs the quantum state, introducing detectable error rates (QBER). If eavesdropping occurs, Alice and Bob detect it immediately and discard the compromised key!`,
        order: 3
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Competitive Examination Traps & Policy Application Matrix',
        body: `### Common Examiner Traps
1. **Refractive Index Trap in Optical Fibers:** Questions claim the cladding has a higher refractive index than the core. **TRAP!** For Total Internal Reflection to occur, the **CORE must have a higher refractive index than the CLADDING** ($n_{core} > n_{cladding}$).
2. **Bit vs Qubit Multiplicity:** A quantum computer with 10 qubits does NOT process 10 times more states than a classical bit; it processes $2^{10} = 1,024$ states simultaneously. Processing capacity scales **exponentially ($2^N$)**, not linearly!
3. **5G vs 4G Latency:** 5G does not merely offer higher download speeds; its architectural breakthrough is **Ultra-Reliable Low-Latency Communication (URLLC)** dropping air interface latency to **< 1 millisecond**, enabling autonomous vehicles and remote telesurgery.
4. **NQM Institutional Targets:** The National Quantum Mission is administered by the **Department of Science & Technology (DST)** (not MeitY or ISRO alone), targeting 50–1,000 physical qubits over 8 years (2023–2031).

### Exam Syllabus Matrix
- **UPSC CSE & APFC:** GS Paper 3 (Science & Tech / Telecom). Core questions on 5G/6G architecture, BharatNet optical fiber connectivity, National Quantum Mission, and QKD security.
- **RPSC RAS:** Paper 2 (Science & Tech). Direct syllabus questions on Total Internal Reflection, Optical Fibre principles, 5G spectrum auctions, and digital communications.
- **RBI Grade B & IBPS PO:** Cyber resilience in banking, post-quantum cryptography (PQC) threats to financial transactions, and BharatNet rural broadband.`,
        order: 4
      }
    ],
    examMappings: [
      { examCode: 'UPSC_CSE', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'EXPERT', syllabusUnit: 'GS Paper 3: Science & Technology - Communications & Quantum Tech', notes: 'Top yield. Detailed questions on NQM, QKD vs classical RSA encryption, 5G/6G, and BharatNet.' },
      { examCode: 'UPSC_APFC', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', syllabusUnit: 'General Science & Emerging Technologies', notes: 'Core topic. Optical fiber physics, 5G service profiles, and National Quantum Mission.' },
      { examCode: 'UPSC_EPFO_EOAO', relevance: 'CORE_SYLLABUS', priority: 'MEDIUM', requiredDepth: 'PROFICIENT', syllabusUnit: 'General Science & Computer Applications', notes: 'Basic physics of total internal reflection, bit vs qubit, 5G frequencies.' },
      { examCode: 'RPSC_RAS', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'EXPERT', syllabusUnit: 'Mains Paper 2: Science & Technology - ICT & Telecommunications', notes: 'Direct questions on Optical Fibre construction, Total Internal Reflection, and 5G network rollout in Rajasthan.' },
      { examCode: 'IBPS_PO', relevance: 'ANCILLARY_COVERAGE', priority: 'MEDIUM', requiredDepth: 'AWARENESS', syllabusUnit: 'General Awareness: Current Banking Technology', notes: '5G deployment, digital connectivity initiatives, cybersecurity.' },
      { examCode: 'SBI_PO', relevance: 'ANCILLARY_COVERAGE', priority: 'MEDIUM', requiredDepth: 'AWARENESS', syllabusUnit: 'General Awareness: Technology in Finance', notes: 'Quantum computing implications for banking cryptography.' },
      { examCode: 'RBI_GRADE_B', relevance: 'DIRECT_OVERLAY', priority: 'HIGH', requiredDepth: 'EXPERT', syllabusUnit: 'ESI & General Awareness: Digital Infrastructure', notes: 'BharatNet, telecom sector financial health, spectrum auctions, and post-quantum encryption standards.' },
      { examCode: 'NABARD_GRADE_A', relevance: 'DIRECT_OVERLAY', priority: 'MEDIUM', requiredDepth: 'PROFICIENT', syllabusUnit: 'Rural Infrastructure: Rural Connectivity & ICT', notes: 'BharatNet optical fiber penetration into Gram Panchayats, rural tele-density, and digital inclusion.' }
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Optical fibres transmit near-IR signals (1310/1550 nm) via Total Internal Reflection requiring $n_{core} > n_{cladding}$ and $i > i_c$. 5G NR provides <1 ms URLLC latency and 20 Gbps peak rates via massive MIMO and beamforming. India\'s National Quantum Mission (approved April 2023, ₹6,003 Cr, DST) establishes 4 T-Hubs targeting 50–1,000 qubit quantum computers and 2,000 km satellite QKD.',
        order: 1
      },
      {
        type: 'SUMMARY_2M',
        content: 'Modern telecommunications relies on optical fibers for long-haul transmission and high-frequency cellular networks for mobile access. Optical fibers transmit information via Total Internal Reflection (TIR), where light inside a dense silica core ($n_1$) reflects off a rarer cladding ($n_2$) at angles exceeding the critical angle, achieving minimal attenuation (<0.2 dB/km at 1550 nm) across DWDM multi-terabit channels. For wireless access, 5G New Radio operates across sub-6 GHz and millimeter-wave frequencies, delivering 20 Gbps data rates and sub-millisecond latency (URLLC) through massive MIMO and beamforming. Beyond classical physics, India launched the National Quantum Mission (NQM 2023, ₹6,003.65 Cr, DST) to build quantum computers scaling from 50 to 1,000 qubits, exploiting superposition and entanglement, alongside 2,000-km satellite-based Quantum Key Distribution (QKD) to create unhackable communications immune to quantum decryption.',
        order: 2
      },
      {
        type: 'ARCHITECTURE_5M',
        content: `# Architecture of Modern Communications & Quantum Technology

1. **Optical Fibre Physics:**
   - Snell's Law & Critical Angle: $\\sin(i_c) = n_2 / n_1$. Total internal reflection occurs when $i > i_c$ and $n_{core} > n_{cladding}$.
   - Attenuation Spectrum: Silica absorption minimum at 1,550 nm ($< 0.2 \\text{ dB/km}$); zero-dispersion wavelength at 1,310 nm.
   - Multiplexing: DWDM (Dense Wavelength Division Multiplexing) packs 80+ optical wavelengths on one fiber strand.

2. **5G / 6G Cellular Engineering:**
   - 3 IMT-2020 Service Pillars:
     * eMBB (Enhanced Mobile Broadband): Peak 20 Gbps downloads.
     * URLLC (Ultra-Reliable Low-Latency Communication): $< 1 \\text{ ms}$ latency for remote surgery & robotics.
     * mMTC (Massive Machine-Type Communication): 1 million IoT devices per $\\text{km}^2$.
   - Antenna Innovations: Massive MIMO (64T64R arrays) + Digital Beamforming.

3. **National Quantum Mission (NQM 2023–2031):**
   - Cabinet Outlay: ₹6,003.65 Crore over 8 years, administered by DST.
   - The 4 Thematic Hubs (T-Hubs):
     * Hub 1: Quantum Computing (50–1,000 physical qubits).
     * Hub 2: Quantum Communication (Satellite QKD over 2,000 km, inter-city ground QKD).
     * Hub 3: Quantum Sensing & Metrology (Atomic clocks, quantum magnetometers).
     * Hub 4: Quantum Materials & Devices (Single-photon sources, topological insulators).`,
        order: 3
      }
    ],
    questions: [
      {
        type: 'CONCEPT_CHECK',
        stem: 'Which of the following optical conditions is strictly required for light signals to propagate through an optical fibre without radiative loss?',
        options: [
          'The refractive index of the cladding must be higher than the refractive index of the core.',
          'The refractive index of the core must be higher than that of the cladding, and the angle of incidence at the core-cladding boundary must exceed the critical angle.',
          'The light used must have an ultraviolet wavelength shorter than 200 nanometers to induce constructive interference.',
          'The core must be filled with a pressurized inert gas that eliminates Rayleigh scattering.'
        ],
        correctAnswer: 'The refractive index of the core must be higher than that of the cladding, and the angle of incidence at the core-cladding boundary must exceed the critical angle.',
        explanation: 'Total Internal Reflection (TIR) requires two invariant physical conditions: (1) Light must travel in an optically denser medium and strike the boundary of an optically rarer medium ($n_{core} > n_{cladding}$); (2) The angle of incidence at the interface must be greater than the critical angle ($i > i_c = \\arcsin(n_{cladding}/n_{core})$). Under these conditions, 100% of light energy reflects back into the core with zero refractive leakage.',
        trapExplanation: 'Candidates frequently invert the relationship and mistakenly assume that the outer cladding is denser to "contain" the light, whereas the core must be the denser medium.',
        difficulty: 'MEDIUM',
        isPYQ: false,
        examinerTrapPattern: 'Inverting the core and cladding refractive index requirements for Total Internal Reflection.'
      },
      {
        type: 'APPLIED_SCENARIO',
        stem: 'Consider the following statements regarding India\'s National Quantum Mission (NQM) approved by the Union Cabinet in 2023:\\n1. It is implemented under the aegis of the Department of Science & Technology (DST).\\n2. One of its key deliverables is developing intermediate-scale quantum computers with 50 to 1,000 physical qubits within 8 years.\\n3. It targets satellite-based Quantum Key Distribution (QKD) between ground stations over a range of 2,000 km within India.\\nWhich of the statements given above are correct?',
        options: [
          '1 and 2 only',
          '2 and 3 only',
          '1 and 3 only',
          '1, 2 and 3'
        ],
        correctAnswer: '1, 2 and 3',
        explanation: 'All three statements are correct. The National Quantum Mission was approved in April 2023 with an outlay of ₹6,003.65 Crore (2023–2031) under the Department of Science & Technology. Its 4 Thematic Hubs explicitly target developing 50 to 1,000 physical qubit quantum computers, satellite-based QKD over 2,000 km ground distance, high-precision atomic clocks, and quantum materials.',
        trapExplanation: 'Candidates often suspect high figures like "1,000 qubits" or "2,000 km satellite QKD" are exaggerations, but these are the exact milestones specified in the official CCEA mission notification.',
        difficulty: 'HARD',
        isPYQ: false,
        examinerTrapPattern: 'Assuming ambitious official mission targets are distractors.'
      }
    ]
  }
];

export async function seedBiotechCanonicalKnowledge() {
  console.log('Seeding Applied Science, BioTech & Emerging Tech Canonical Knowledge (CON-SCI-116 to CON-SCI-120)...');

  // 1. Ensure Domain & Subject exist
  let domain = await db.domain.findFirst({ where: { slug: 'general-science-and-technology' } });
  if (!domain) {
    domain = await db.domain.create({
      data: {
        slug: 'general-science-and-technology',
        name: 'General Science & Technology Systems',
        description: 'The universal physical, chemical, biological, and technological knowledge foundation for competitive examinations.',
        order: 7,
        status: 'ACTIVE'
      }
    });
  }

  // 1b. Ensure Applied Science & Biotechnology Subject exists as an independent subject
  let subject = await db.subject.findFirst({ where: { slug: 'applied-science-and-biotechnology' } });
  if (!subject) {
    subject = await db.subject.create({
      data: {
        slug: 'applied-science-and-biotechnology',
        name: 'Applied Science & Biotechnology Master',
        domainId: domain.id,
        description: 'Advanced applied science, recombinant DNA, CRISPR, space launch vehicles, nuclear technology, and emerging computing paradigms.',
        scopeStatement: 'Canonical coverage of biotechnology, space systems, nuclear physics, and quantum communications.',
        order: 2,
        status: 'ACTIVE'
      }
    });
  }

  // 2. Ensure Topic 26 exists
  let topic = await db.topic.findFirst({
    where: {
      subjectId: subject.id,
      slug: 'applied-science-biotechnology-and-emerging-tech'
    }
  });
  if (!topic) {
    topic = await db.topic.create({
      data: {
        slug: 'applied-science-biotechnology-and-emerging-tech',
        title: 'Applied Science, Biotechnology & Emerging Technologies',
        description: 'Recombinant DNA & CRISPR gene editing, ISRO space launch vehicles, nuclear technology & India 3-stage program, nanotechnology, robotics, AI, 5G/6G & National Quantum Mission.',
        subjectId: subject.id,
        order: 26
      }
    });
  }

  // 3. Ensure Canonical Source exists
  let source = await db.source.findUnique({ where: { id: 'SRC-BIOTECH-CANONICAL-2026' } });
  if (!source) {
    source = await db.source.create({
      data: {
        id: 'SRC-BIOTECH-CANONICAL-2026',
        title: 'Department of Science & Technology, ISRO & DBT Canonical Corpus (2026 Edition)',
        sourceType: 'STATUTORY_COMPILATION',
        authorityTier: 'CLASS_A_STATUTORY',
        description: 'Official technical specifications, national mission blueprints, and Nobel scientific benchmarks for applied science, biotechnology, space, nuclear, and quantum tech.'
      }
    });
  }

  // 4. Ensure Target Examinations exist in examMap
  const examCodes = [
    'UPSC_CSE', 'UPSC_APFC', 'UPSC_EPFO_EOAO', 'RPSC_RAS',
    'IBPS_PO', 'SBI_PO', 'RBI_GRADE_B', 'NABARD_GRADE_A'
  ];
  const examMap: Record<string, string> = {};
  for (const code of examCodes) {
    let exam = await db.exam.findFirst({
      where: { slug: code.toLowerCase().replace(/_/g, '-') }
    });
    if (!exam) {
      exam = await db.exam.create({
        data: {
          slug: code.toLowerCase().replace(/_/g, '-'),
          name: code.replace(/_/g, ' '),
          conductingBody: code.split('_')[0],
          description: `Target examination suite for ${code}`,
          syllabusSummary: `Science, Technology, and Quantitative modules for ${code}`
        }
      });
    }
    examMap[code] = exam.id;
  }

  // 5. Seed Concepts
  for (let i = 0; i < BIOTECH_CANONICAL_CONCEPTS.length; i++) {
    const cDef = BIOTECH_CANONICAL_CONCEPTS[i];
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
          order: 115 + (i + 1)
        }
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
          order: 115 + (i + 1)
        }
      });
    }

    // Seed Claims & Evidence
    for (const cl of cDef.claims) {
      const claim = await db.claim.create({
        data: {
          id: cl.id,
          conceptId: concept.id,
          statement: cl.statement,
          claimType: cl.claimType,
          epistemicLevel: cl.epistemicLevel,
          confidence: cl.confidence,
          status: 'VERIFIED'
        }
      });

      await db.evidence.create({
        data: {
          claimId: claim.id,
          sourceId: source.id,
          locator: cl.locator,
          excerpt: cl.excerpt,
          evidenceType: 'SCIENTIFIC_BENCHMARK',
          authority: 'AUTHORITATIVE_BODY',
          evidentiarySupport: 'DIRECT_SUPPORT',
          extractionConfidence: 'HIGH'
        }
      });
    }

    // Seed Content Blocks
    for (const cb of cDef.contentBlocks) {
      await db.contentBlock.create({
        data: {
          conceptId: concept.id,
          type: cb.type,
          title: cb.title,
          body: cb.body,
          order: cb.order,
          visibility: 'CANONICAL_FULL'
        }
      });
    }

    // Seed Exam Concept Mappings
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
            notes: em.notes
          }
        });
      }
    }

    // Seed Revision Units
    for (const ru of cDef.revisionUnits) {
      await db.revisionUnit.create({
        data: {
          conceptId: concept.id,
          type: ru.type,
          content: ru.content,
          order: ru.order
        }
      });
    }

    // Seed Questions
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
          examinerTrapPattern: q.examinerTrapPattern
        }
      });
    }
  }

  console.log(`[Biotech Seed] Successfully seeded ${BIOTECH_CANONICAL_CONCEPTS.length} Applied Science & BioTech concepts (CON-SCI-116 to CON-SCI-120).`);
}
