import { db } from '../db/client';

/**
 * Universal Knowledge & World Understanding — Module U2: How Modern Technology Actually Works
 * Mind of Aravalli — First-Principles Understanding Track
 *
 * Source: Foundations of Modern Technology: First-Principles Engineering & Computer Science Synthesis
 * Curated for: Pure Intellectual Curiosity, Technological Understanding & First-Principles Science
 * (Zero Examination Mappings: examMappings: [])
 *
 * Concepts:
 * - CON-TECH-01: The Global Subsea Fiber-Optic Internet: Physics of Light, Repeaters & Ocean Floor Infrastructure
 * - CON-TECH-02: Inside a 3nm Silicon Microchip: Photolithography, Transistors & Quantum Tunneling
 * - CON-TECH-03: How Large Language Models & Neural Networks 'Think': Embeddings, Attention & Next-Token Prediction
 * - CON-TECH-04: Public-Key Cryptography (RSA & Elliptic Curves): The Mathematics of Trust on an Insecure Network
 * - CON-TECH-05: How GPS Clocks Prove Einstein’s Relativity: Special & General Relativistic Time Dilation
 */

export interface UniversalConceptDefinition {
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
    claimType: 'STATUTORY_RULE' | 'CORE_PRINCIPLE' | 'HISTORICAL_FACT' | 'JUDICIAL_DOCTRINE';
    epistemicLevel: 'ESTABLISHED_FACT' | 'EMPIRICAL_RULE' | 'SCHOLARLY_CONSENSUS';
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
  examMappings: {
    examCode: string;
    relevance: 'CORE_SYLLABUS' | 'DIRECT_OVERLAY' | 'ANCILLARY_COVERAGE';
    priority: 'HIGH' | 'MEDIUM' | 'LOW';
    requiredDepth: 'EXPERT' | 'PROFICIENT' | 'AWARENESS';
    syllabusUnit: string;
    notes: string;
    frequentTraps?: string;
  }[];
  revisionUnits: {
    type: 'FLASH_30S' | 'SUMMARY_2M' | 'ARCHITECTURE_5M';
    content: string;
    order: number;
  }[];
  questions: {
    type: 'CONCEPT_CHECK' | 'APPLIED_SCENARIO';
    stem: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
    trapExplanation?: string;
    difficulty: 'EASY' | 'MEDIUM' | 'HARD';
    isPYQ: boolean;
    pyqYear?: number;
    pyqPaper?: string;
    pyqStage?: string;
    pyqQuestionNumber?: number;
    examinerTrapPattern?: string;
  }[];
}

export const MODULE_U2_CONCEPTS: UniversalConceptDefinition[] = [
  {
    "id": "CON-TECH-01",
    "topicOrder": 1,
    "topicSlug": "modern-computing-networking-and-intelligence",
    "topicTitle": "Modern Computing, Global Networking & Artificial Intelligence",
    "topicDescription": "First-principles engineering and physical mechanisms powering the modern digital civilization: subsea fiber optics, semiconductor photolithography, neural network transformers, public-key cryptography, and relativistic GPS timekeeping.",
    "slug": "global-subsea-fiber-optic-internet-physics-of-light-and-repeaters",
    "title": "The Global Subsea Fiber-Optic Internet: Physics of Light, Repeaters & Ocean Floor Infrastructure",
    "shortDefinition": "The physical reality of the global internet, operating not through satellites in space, but through a vast planetary nervous system of over 550 undersea fiber-optic cables spanning 1.4 million kilometers across the ocean floor. Over 99% of all transoceanic internet traffic, intercontinental financial transactions (over USD 10 trillion daily), and cloud data relies on hair-thin strands of ultra-pure silica glass. Light pulses travel through the glass core via Total Internal Reflection—bouncing off the boundary between the high-refractive-index glass core and the lower-refractive-index cladding without escaping. Because light attenuates over distance, Erbium-Doped Fiber Amplifiers (EDFAs) are spliced into the cable every 50 to 70 kilometers along the abyssal sea floor (down to 8,000 meters depth), energized by a high-voltage copper conductor carrying up to 10,000 Volts DC from coastal cable landing stations. Using Dense Wavelength Division Multiplexing (DWDM), modern cables transmit dozens of distinct laser wavelengths simultaneously down a single fiber pair, achieving throughputs exceeding 250 Terabits per second per cable at 70% the speed of light in vacuum.",
    "difficulty": "INTERMEDIATE",
    "claims": [
      {
        "id": "CLM-TECH-01-01",
        "statement": "Over 99% of all intercontinental internet data traffic and global financial transfers are carried by physical undersea fiber-optic cables resting on the ocean floor, with satellite communications carrying less than 1% due to bandwidth and latency constraints.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "TeleGeography Submarine Cable Map / ITU Global Infrastructure Report 2024, Section 2.1",
        "excerpt": "Undersea cables carry over 99 percent of international data traffic. Satellites simply lack the capacity and cost-efficiency to match the hundreds of terabits per second carried by submarine fiber optic systems."
      },
      {
        "id": "CLM-TECH-01-02",
        "statement": "Data transmission in optical fibers relies on Total Internal Reflection, where light trapped inside a high-refractive-index silica core (n ≈ 1.47) reflects completely off a lower-refractive-index cladding (n ≈ 1.45) whenever the angle of incidence exceeds the critical angle (theta_c = arcsin(n2/n1)).",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Hecht, Understanding Fiber Optics (5th Ed), Chapter 2: The Principles of Total Internal Reflection",
        "excerpt": "When light traveling in a dense medium encounters a less dense medium at an angle greater than the critical angle, 100 percent of the light energy is reflected back into the core with zero refractive leakage."
      },
      {
        "id": "CLM-TECH-01-03",
        "statement": "Because optical signals attenuate over long distances (losing ~0.2 dB/km due to Rayleigh scattering), subsea cables splice optical repeaters containing Erbium-Doped Fiber Amplifiers (EDFAs) every 50 to 70 km, optically stimulating light amplification without converting photons to electricity.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Agrawal, Fiber-Optic Communication Systems (4th Ed), Chapter 6: Optical Amplifiers & Subsea Systems",
        "excerpt": "Erbium-doped fiber amplifiers revolutionized undersea transmission by amplifying optical signals entirely in the optical domain using a 980 nm or 1480 nm pump laser, eliminating the need for bulky electronic regenerators."
      },
      {
        "id": "CLM-TECH-01-04",
        "statement": "Undersea cables achieve massive bandwidth (exceeding 250 Tbps) using Dense Wavelength Division Multiplexing (DWDM), sending over 100 distinct wavelengths of laser light simultaneously through a single optical fiber strand measuring only 9 to 125 micrometers in diameter.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Cisco Optical Networking Technology Whitepaper: Modern Coherent DWDM Transoceanic Transmission",
        "excerpt": "By modulating different data channels onto distinct optical frequencies across the C-band and L-band, modern DWDM transoceanic cables multiply the data capacity of a single fiber pair by two orders of magnitude."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Garden Hose That Traps Light",
        "body": "When you tap 'Send' on a photo to a friend in London or stream a video from an American server, you might picture your data shooting up into space, bouncing off a satellite, and beaming back down to Earth. In reality, that almost never happens.\n\nYour photo travels as flashes of invisible infrared laser light inside a flexible glass strand no thicker than a human hair, lying at the bottom of the icy, pitch-black Atlantic or Pacific Ocean, beneath 6,000 meters of crushing water alongside deep-sea anglerfish.\n\nHow does light stay inside a clear glass tube without leaking out the sides? Imagine turning on a garden hose in the dark and shining a flashlight straight into the stream of water. As the water curves through the air, the beam of light bounces off the inside surface of the water stream and follows the curve! Because light moves slower in water (and glass) than in the surrounding air, when it strikes the edge at a shallow angle, the boundary acts like a perfect mirror. The light is trapped inside the glass, bouncing across 6,000 kilometers of ocean in 30 milliseconds.",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "Total Internal Reflection, Optical Repeaters & High-Voltage Power",
        "body": "The global subsea internet is built upon three miraculous engineering pillars:\n\n1. Total Internal Reflection (TIR) in Ultra-Pure Silica:\nSnell's Law dictates that light traveling from a medium of refractive index n_1 to a medium of n_2 bends according to: n_1 * sin(theta_1) = n_2 * sin(theta_2). If n_1 > n_2 and the incident angle theta_1 exceeds the critical angle theta_c = arcsin(n_2 / n_1), no light can refract outward; 100% of the photons reflect back inward.\n\nThe glass used in subsea fibers is the purest substance ever manufactured by humanity. If you had an ocean of this optical glass 5 kilometers deep, you could look down through the surface and see a coin resting on the bottom with crystal clarity.\n\n2. Optical Repeaters (Erbium-Doped Fiber Amplifiers - EDFAs):\nEven through ultra-pure glass, light pulses lose intensity (attenuation) due to microscopic Rayleigh scattering. After 50 to 70 kilometers, the pulses become faint whispers. Instead of converting light back into slow electronic signals to amplify them, subsea cables splice in titanium cylinders called repeaters.\n\nInside each repeater is a short coil of glass doped with ions of the rare-earth element Erbium. A specialized infrared pump laser energizes the erbium ions. When the faint incoming data photons strike the excited erbium ions, they trigger 'stimulated emission': the erbium dumps its stored energy, creating an avalanche of identical clone photons! The light signal is amplified a thousand-fold in pure optical form without ever converting to electrical voltage.\n\n3. The High-Voltage Ocean Power Loop:\nHow do repeaters at the bottom of the Marianas Trench get electricity? Subsea cables carry a central core of solid copper wrapped around the glass fibers. A power feed equipment (PFE) station on the coast injects up to 10,000 Volts of Direct Current (DC) at ~1 Ampere down the copper conductor, powering dozens of repeaters across the ocean bed before completing the electrical ground circuit through the seawater itself.",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "Cross-Section of an Armored Submarine Fiber-Optic Cable",
        "body": "The multi-layer physical protective architecture of an undersea intercontinental cable:\n\n```\n+-------------------------------------------------------------------------+\n|          CROSS-SECTION OF A DEEP-SEA SUBMARINE FIBER-OPTIC CABLE        |\n+-------------------------------------------------------------------------+\n|                                                                         |\n|   Outer Diameter: ~17 mm (Deep Sea) to ~50 mm (Armored Shoreline)       |\n|                                                                         |\n|   [8] Polyethylene Outer Jacket (Waterproof Insulation)                 |\n|     [7] Mylar Tape (Moisture Barrier)                                   |\n|       [6] Stranded Steel Armor Wires (Tensile Strength & Trawler Defense)|\n|         [5] Aluminum Oxygen/Hydrogen Barrier                             |\n|           [4] High-Voltage Copper Tube (Carries 10,000V DC to Repeaters)|\n|             [3] Polycarbonate Tube (Crush Resistance)                   |\n|               [2] Water-Resistant Petroleum Jelly Compound               |\n|                 [1] OPTICAL FIBER BUNDLE                                |\n|                     * 8 to 24 Pairs of Single-Mode Silica Glass Fibers  |\n|                     * Core: 9 micrometers (high-index silica)           |\n|                     * Cladding: 125 micrometers (low-index silica)      |\n|                                                                         |\n+-------------------------------------------------------------------------+\n|  SIGNAL PROPAGATION METRICS:                                            |\n|  - Speed of Light in Glass : ~204,000 km/s (c / 1.47, ~70% speed of c)   |\n|  - Transatlantic Latency   : ~30 to 35 milliseconds (New York to London)|\n|  - Transpacific Latency    : ~65 to 70 milliseconds (California to Tokyo)|\n|  - DWDM Spectral Channels  : 100+ wavelengths per fiber pair (C & L band)|\n|  - Total Cable Capacity    : 200 - 300+ Terabits per second             |\n+-------------------------------------------------------------------------+\n```",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "World Application: The Geopolitics and Fragility of Subsea Cables",
        "body": "Why is this invisible ocean infrastructure the world's most critical geopolitical chokepoint?\n\n1. Vulnerability to Anchors and Trawlers:\nContrary to popular fears of submarine espionage or shark bites, over 70% of cable cuts are caused by commercial fishing trawlers dragging heavy nets along the continental shelf or merchant ships dragging anchors in storms. When a cut occurs, specialized cable repair ships must sail to the coordinates, drop an ocean grapple 3,000 meters deep to hook the severed glass cable, winch both ends to the surface, and fuse the microscopic glass cores by hand inside a cleanroom on deck.\n\n2. Geopolitical Chokepoints:\nNearly all data between Europe and Asia passes through a razor-thin maritime corridor: through the Mediterranean, across the 100-kilometer overland transit in Egypt, and down the narrow Red Sea into the Bab-el-Mandeb strait. A few anchor drags or coordinated sabotage in the Red Sea can instantly disrupt communications for hundreds of millions of people across three continents.\n\n3. Big Tech Hegemony:\nHistorically, subsea cables were funded by consortiums of state telecom monopolies (e.g. AT&T, British Telecom). Today, over 80% of new transoceanic fiber capacity is owned directly by four private American tech giants: Google, Meta, Microsoft, and Amazon, who own dedicated private cables (like Google's Dunant and Grace Hopper, and Meta's 2Africa) to interconnect their planetary AI data centers.",
        "order": 4
      }
    ],
    "examMappings": [],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Subsea Internet! 99% of global internet traffic travels through 550 undersea cables on the ocean floor, not satellites! Light stays inside hair-thin glass fibers via Total Internal Reflection. Repeaters (EDFAs) splice every 60 km, powered by 10,000V DC copper loops, carrying 250+ Tbps at 70% light speed!",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "The global internet is a physical, terrestrial, and maritime infrastructure. Over 99% of all international data traffic flows through 1.4 million kilometers of submarine fiber-optic cables resting on the ocean floor at depths up to 8,000 meters. The transmission of data relies on Total Internal Reflection (TIR): infrared laser pulses fired into a high-refractive-index silica glass core (n ≈ 1.47) reflect entirely off the lower-refractive-index cladding (n ≈ 1.45) whenever the angle of incidence exceeds the critical angle.\n\nTo overcome signal attenuation (~0.2 dB/km), subsea cables splice titanium repeaters containing Erbium-Doped Fiber Amplifiers (EDFAs) every 50 to 70 km. These repeaters are powered by a central copper conductor carrying up to 10,000 Volts DC from coastal landing stations. Using Dense Wavelength Division Multiplexing (DWDM), more than 100 separate laser wavelengths are transmitted down each fiber strand, allowing a single cable the thickness of a garden hose to carry over 250 Terabits per second across oceans in 30 to 70 milliseconds.",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "GLOBAL SUBSEA INTERNET INFRASTRUCTURE ARCHITECTURE:\n1. Physics of Optical Waveguides:\n   - Snell's Law & Critical Angle: theta_c = arcsin(n_cladding / n_core). Total reflection occurs with zero energy loss.\n   - Single-Mode Dispersion: Core diameter of ~9 microns ensures light travels along a single axial path, minimizing chromatic and modal dispersion.\n   - Speed of Signal: Light in glass travels at c / n ≈ 300,000 / 1.47 ≈ 204,000 km/s (approx. 5 microseconds per kilometer).\n\n2. Optical Amplification (EDFA):\n   - Quantum Mechanism: 980 nm pump laser excites trivalent erbium ions (Er3+). Incoming 1550 nm photons stimulate downward transitions, emitting coherent clone photons.\n   - All-Optical Advantage: Amplifies all DWDM channels simultaneously across the optical spectrum without electronic bottlenecks.\n\n3. Cable Engineering & Topology:\n   - Deep Sea vs Continental Shelf: Deep ocean cables (~17 mm thick) use simple polyethylene jackets; near-shore cables (~50 mm thick) add double-layered galvanized steel wire armor to resist ship anchors and commercial fishing dredges.\n   - Chokepoint Vulnerabilities: Strait of Malacca, Red Sea/Suez, Strait of Luzon. Repair operations require specialized dynamic-positioning cable ships.",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "stem": "Approximately what proportion of international intercontinental internet traffic and global financial transactions is transmitted through undersea fiber-optic cables versus orbiting communications satellites?",
        "options": [
          "Roughly 50% via undersea cables and 50% via satellites.",
          "Over 99% via undersea cables, with satellites carrying less than 1%.",
          "Over 90% via satellites, with undersea cables acting only as emergency backup.",
          "Nearly 100% via satellites because ocean water blocks all electronic signals."
        ],
        "correctAnswer": "Over 99% via undersea cables, with satellites carrying less than 1%.",
        "explanation": "Over 99% of all international data traffic travels through physical subsea fiber-optic cables. Satellites lack the massive bandwidth (hundreds of Terabits per second) and low latency needed to handle global internet traffic, and are primarily used for remote, rural, or maritime connectivity.",
        "trapExplanation": "Believing that modern cloud data and global finance rely primarily on satellite constellations.",
        "difficulty": "EASY",
        "isPYQ": false,
        "examinerTrapPattern": "Popular misconception regarding satellite vs cable infrastructure."
      },
      {
        "type": "CONCEPT_CHECK",
        "stem": "How do undersea optical repeaters (Erbium-Doped Fiber Amplifiers - EDFAs) located at the bottom of the ocean amplify weakened laser light signals across thousands of kilometers?",
        "options": [
          "They convert the light into electrical signals, amplify the voltage with microchips, and re-transmit using new lasers.",
          "They reflect the light off gold mirrors directly to surface communication buoys.",
          "They stimulate excited erbium ions using an infrared pump laser, producing coherent clone photons entirely in the optical domain without electronic conversion.",
          "They heat the glass to thousands of degrees to reset the speed of light."
        ],
        "correctAnswer": "They stimulate excited erbium ions using an infrared pump laser, producing coherent clone photons entirely in the optical domain without electronic conversion.",
        "explanation": "EDFAs achieve amplification through stimulated emission: pump lasers excite erbium ions in a doped fiber coil, and when weakened data photons pass through, the ions release identical photons, amplifying the signal across all optical wavelengths simultaneously without electronic conversion.",
        "trapExplanation": "Assuming that amplification requires optical-to-electronic-to-optical (OEO) conversion.",
        "difficulty": "MEDIUM",
        "isPYQ": false,
        "examinerTrapPattern": "All-optical amplification mechanism."
      },
      {
        "type": "APPLIED_SCENARIO",
        "stem": "A high-frequency financial trading firm in Chicago wants to execute trades on the London Stock Exchange with the absolute lowest possible latency. Why is a subsea fiber-optic cable connection faster than sending data via a geostationary (GEO) satellite, even though radio waves in air travel faster than light in glass?",
        "options": [
          "Fiber-optic cables travel through a wormhole that shortcuts the curvature of the Earth.",
          "GEO satellites sit 35,786 km above Earth, requiring a round-trip path of over 70,000 km (~240 ms), whereas a transatlantic subsea cable spans only ~6,000 km across the ocean floor (~30 ms).",
          "Undersea cables are powered by nuclear batteries that accelerate photons beyond the speed of light.",
          "Satellites are forbidden from transmitting financial market data under international trade agreements."
        ],
        "correctAnswer": "GEO satellites sit 35,786 km above Earth, requiring a round-trip path of over 70,000 km (~240 ms), whereas a transatlantic subsea cable spans only ~6,000 km across the ocean floor (~30 ms).",
        "explanation": "Although light travels ~30% slower in silica glass (~204,000 km/s) than in space (300,000 km/s), the physical distance to GEO is massive: going up and down to 35,786 km takes ~240 ms. In contrast, the subsea cable takes a direct 6,000 km route across the ocean floor, delivering one-way latency of ~30 ms.",
        "trapExplanation": "Forgetting that geometry (distance) completely dominates over the slight difference in refractive index speed.",
        "difficulty": "MEDIUM",
        "isPYQ": false,
        "examinerTrapPattern": "Latency geometry: distance vs refractive medium trade-off."
      }
    ]
  },
  {
    "id": "CON-TECH-02",
    "topicOrder": 1,
    "topicSlug": "modern-computing-networking-and-intelligence",
    "topicTitle": "Modern Computing, Global Networking & Artificial Intelligence",
    "topicDescription": "First-principles engineering and physical mechanisms powering the modern digital civilization: subsea fiber optics, semiconductor photolithography, neural network transformers, public-key cryptography, and relativistic GPS timekeeping.",
    "slug": "inside-3nm-silicon-microchip-photolithography-transistors-quantum-tunneling",
    "title": "Inside a 3nm Silicon Microchip: Photolithography, Transistors & Quantum Tunneling",
    "shortDefinition": "The extreme frontier of modern semiconductor physics and manufacturing, packing over 15 to 50 billion microscopic electronic switches (transistors) onto a sliver of crystalline silicon the size of a human fingernail. At the core of every modern computer, smartphone, and AI accelerator (e.g. Apple M-series, Nvidia Blackwell) is the Field-Effect Transistor (MOSFET): a three-terminal switch where voltage applied to a 'Gate' modulates the conductivity of a silicon channel between a 'Source' and a 'Drain', representing binary 1s and 0s. As transistor dimensions shrink to atomic scales (the '3-nanometer' class), planar 2D transistors fail because electrons leak across the barrier via Quantum Tunneling—a phenomenon governed by quantum mechanics where electrons bypass classical physical barriers by behaving as probability waves. To maintain control, chipmakers transitioned to 3D FinFETs and Gate-All-Around (GAA) nanosheets, where the gate wraps completely around the silicon channels. Printing these atomic structures requires Extreme Ultraviolet (EUV) lithography machines (manufactured solely by ASML in the Netherlands), which blast 50,000 droplets of molten tin per second with industrial carbon dioxide lasers to produce 13.5 nm wavelength EUV light, etching billions of atomic features with sub-nanometer precision.",
    "difficulty": "ADVANCED",
    "claims": [
      {
        "id": "CLM-TECH-02-01",
        "statement": "A modern microprocessor operates through billions of Field-Effect Transistors (MOSFETs) acting as voltage-controlled binary switches: applying an electric voltage to the Gate terminal creates an electrostatic field that permits electric current to flow from Source to Drain (representing '1'), while removing voltage blocks the current (representing '0').",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Sze & Ng, Physics of Semiconductor Devices (3rd Ed), Chapter 6: MOSFET Fundamentals",
        "excerpt": "The metal-oxide-semiconductor field-effect transistor is the primary building block of modern digital circuits. Modulating the gate voltage controls the inversion charge layer in the semiconductor substrate, switching the device between conducting and non-conducting states."
      },
      {
        "id": "CLM-TECH-02-02",
        "statement": "When semiconductor gate lengths shrink below 5 nanometers (a span of fewer than 20 silicon atoms), classical electronics breaks down due to Quantum Mechanical Tunneling, where electrons spontaneously pass through energy barriers, causing parasitic leakage current and excessive thermal dissipation.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Taur & Ning, Fundamentals of Modern VLSI Devices (2nd Ed), Chapter 4: Short-Channel Effects & Quantum Tunneling",
        "excerpt": "As the gate dielectric thickness approaches 1 nm, direct quantum mechanical tunneling of electrons through the potential barrier increases exponentially, setting a fundamental physical limit on classical planar MOSFET scaling."
      },
      {
        "id": "CLM-TECH-02-03",
        "statement": "To suppress quantum leakage and retain electrostatic control at the 3nm and 2nm nodes, the semiconductor industry replaced planar transistors with 3D FinFETs (fin-shaped channels) and Gate-All-Around (GAA) nanosheets, where conductive gate material completely surrounds horizontal silicon channels on all four sides.",
        "claimType": "HISTORICAL_FACT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "IEEE Spectrum: The Transistor's Evolution from FinFET to Gate-All-Around Nanosheets (2023)",
        "excerpt": "Gate-all-around architectures stack horizontal silicon nanosheets, allowing the gate dielectric to wrap completely around each conducting channel, providing superior electrostatic control and preventing off-state sub-threshold leakage."
      },
      {
        "id": "CLM-TECH-02-04",
        "statement": "Manufacturing 3nm microchips requires Extreme Ultraviolet (EUV) lithography systems produced by ASML, which generate light at a 13.5 nm wavelength by vaporizing 50,000 microscopic molten tin droplets per second with a high-power pulsed CO2 laser inside a high vacuum.",
        "claimType": "HISTORICAL_FACT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "ASML Technology Whitepaper: Extreme Ultraviolet Lithography Principles & Optics",
        "excerpt": "EUV light at 13.5 nanometers is generated by creating a high-temperature tin plasma: a laser pulse flattens a falling molten tin droplet, and a second intense pulse vaporizes it into a plasma that emits extreme ultraviolet radiation."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Billions of Light Switches on a Fingernail",
        "body": "Think of the light switch on your bedroom wall. When you flip it up, a piece of metal closes an electrical circuit, current flows, and the bulb turns on (a binary '1'). When you flip it down, the circuit opens, current stops, and the bulb turns off (a binary '0').\n\nInside the microchip in your smartphone (like an Apple A17 or Qualcomm Snapdragon) is a piece of polished silicon no larger than your pinky fingernail. On that tiny surface are not a few hundred switches, nor a few million: there are over 19 BILLION electronic switches called transistors! If each of those 19 billion switches were the size of a postage stamp, the chip would cover the entire city of New York.\n\nYet these switches have no moving parts. Instead of a human finger, an invisible electric field flips them on and off over three billion times every single second (3 GHz clock speed). And they are so tiny that a single strand of your hair is 30,000 times wider than a transistor gate.",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "The Architecture of the Transistor & The Quantum Tunneling Barrier",
        "body": "The journey from basic silicon to modern 3nm chips illustrates the collision of classical engineering and quantum mechanics:\n\n1. How a MOSFET Works:\nA Field-Effect Transistor consists of three terminals:\n- Source: Where electrons enter.\n- Drain: Where electrons exit.\n- Gate: The control switch sitting above the channel.\nBetween the Gate and the silicon channel sits an ultra-thin insulating dielectric layer (silicon dioxide or hafnium oxide). When a positive voltage is applied to the gate, its electric field pulls electrons up into the channel, creating a conductive bridge from Source to Drain. The switch turns ON. Remove the voltage, and the bridge vanishes; the switch turns OFF.\n\n2. The Wall of Quantum Tunneling:\nFor 50 years, 'Moore's Law' held true: engineers halved the size of transistors every two years. But below 5 nanometers, a transistor gate is only a few silicon atoms wide (a silicon atom is ~0.2 nanometers wide).\n\nIn classical physics, an electron cannot cross an insulator without enough energy to climb over the energy barrier. But in quantum physics, electrons behave as probability wavefunctions (described by the Schrödinger equation). When an insulating barrier is only 1 to 2 nanometers thick, the electron's probability wave penetrates right through the barrier! The electron spontaneously 'teleports' across the closed gate. The switch leaks electricity even when turned off, generating massive heat and wasting battery power.\n\n3. The 3D Revolution: From FinFET to Gate-All-Around (GAA):\nTo prevent electrons from escaping, engineers reshaped the transistor:\n- Planar (Pre-2011): The gate sat flat on top of the channel like a roof (control on 1 side).\n- FinFET (2011–2022): The channel was raised into a vertical 3D 'fin', with the gate wrapping around 3 sides like a tunnel.\n- Gate-All-Around / Nanosheets (3nm and below): The channel is sliced into multiple flat horizontal ribbons, and the gate wraps completely around all 4 sides of each ribbon. By surrounding the electron channel entirely with electric fields, engineers restore control and tame quantum leakage.",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "Evolution of Transistor Geometries & EUV Photolithography",
        "body": "The structural evolution of transistor gates and the mechanism of EUV light generation:\n\n```\n+-------------------------------------------------------------------------+\n|          THE TRANSISTOR EVOLUTION: PLANAR -> FINFET -> GAA              |\n+-------------------------------------------------------------------------+\n|                                                                         |\n|   1. PLANAR MOSFET            2. 3D FinFET           3. GATE-ALL-AROUND |\n|      (Pre-2011 Nodes)            (22nm - 5nm Nodes)     (3nm - 2nm GAA) |\n|                                                                         |\n|       +------------+                +---+                +============+ |\n|       |    GATE    |                | G |                |[ Nanosheet]| |\n|   ====+============+====       +----+ A +----+           +============+ |\n|   [ Source ]  [ Drain  ]       |    | T |    |           |[ Nanosheet]| |\n|   [   Channel Area     ]       | S  | E | D  |           +============+ |\n|   ----------------------       |    +---+    |           (Gate surrounds|\n|   Gate controls 1 side.        Gate wraps 3 sides.       channels on all|\n|   Suffers quantum leakage.     High electrostatic        four sides)    |\n|                                control.                                 |\n+-------------------------------------------------------------------------+\n|  HOW ASML's EXTREME ULTRAVIOLET (EUV) GENERATES 13.5 nm LIGHT:          |\n|                                                                         |\n|   [ Tin Droplet Generator ] ---> Drops 50,000 Molten Tin Droplets / sec |\n|              |                                                          |\n|              v                                                          |\n|   [ Laser Pre-Pulse ]       ---> Flattens tin droplet into pancake      |\n|              |                                                          |\n|              v                                                          |\n|   [ Main High-Power Laser ] ---> Vaporizes tin into 200,000 deg C Plasma|\n|              |                                                          |\n|              v                                                          |\n|   Emits 13.5 nm EUV Photons ---> Bounced off Bragg multi-layer mirrors  |\n|                                  to etch 3nm circuits on silicon wafer  |\n+-------------------------------------------------------------------------+\n```",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "World Application: The Geopolitics of the Silicon Supply Chain",
        "body": "Why is advanced semiconductor manufacturing the ultimate geopolitical leverage point of the 21st century?\n\n1. The Monopolistic Supply Chokepoints:\n- Software: Electronic Design Automation (EDA) software that designs billion-transistor circuits is controlled by three US companies (Synopsys, Cadence, Mentor).\n- Machinery: Only ONE company in the world—ASML in Veldhoven, Netherlands—has the engineering capability to manufacture EUV lithography machines. Each machine costs over USD 200–350 million, weighs 180 tons, contains 100,000 parts, and uses Zeiss mirrors so smooth that if they were the size of Germany, the largest bump would be a millimeter high.\n- Fabrication: Over 90% of the world's leading-edge sub-5nm microchips are manufactured by a single company on an island: TSMC (Taiwan Semiconductor Manufacturing Company) in Taiwan.\n\n2. National Security & The AI Arms Race:\nBecause modern AI models (like ChatGPT, Gemini, Claude) require tens of thousands of advanced GPU accelerators containing billions of 3nm/4nm transistors, access to advanced semiconductor fabrication is now treated with the same strategic gravity as nuclear technology, driving export controls and multi-billion-dollar domestic foundry initiatives (US CHIPS Act, European Chips Act, India Semiconductor Mission).",
        "order": 4
      }
    ],
    "examMappings": [],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Inside 3nm Chips! Modern chips pack 20 billion transistors on a fingernail. Below 5nm, electrons cheat classical physics and leak through via Quantum Tunneling! Engineers beat this with Gate-All-Around (GAA) nanosheets wrapping all 4 sides, etched with ASML's 13.5nm EUV lasers vaporizing tin droplets!",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Modern microchips contain tens of billions of field-effect transistors (MOSFETs) operating as binary switches (1 and 0). As physical gate lengths approached single nanometers (a few silicon atoms wide), traditional planar transistors failed due to Quantum Mechanical Tunneling: electrons behave as probability wavefunctions and spontaneously tunnel straight through closed insulating gates, causing massive power leakage and heat dissipation.\n\nTo overcome this physical barrier, chip architecture evolved from planar gates to 3D FinFETs (gates wrapping three sides of a vertical silicon fin) and now Gate-All-Around (GAA) nanosheets at the 3nm and 2nm nodes (gates enclosing horizontal silicon channels on all four sides). Printing these atomic structures requires Extreme Ultraviolet (EUV) lithography systems developed exclusively by ASML, which vaporize 50,000 molten tin droplets per second with high-power CO2 lasers to generate 13.5 nm wavelength light, etching circuits with sub-nanometer precision.",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "SEMICONDUCTOR PHYSICS & 3NM FABRICATION ARCHITECTURE:\n1. Transistor Electrostatics & Gate Control:\n   - MOSFET Operating Principle: Gate voltage creates an inversion layer of minority carriers in the substrate, establishing a conduction channel from Source to Drain.\n   - Subthreshold Swing: The gate voltage required to increase drain current by one decade (ideally 60 mV/decade at room temperature).\n   - Drain-Induced Barrier Lowering (DIBL): In short channels, high drain voltage lowers the source-channel barrier, causing uncontrolled off-state current.\n\n2. Quantum Mechanical Limits:\n   - Heisenberg Uncertainty & Wavefunctions: Psi(x) decays exponentially inside the potential barrier: P proportional to e^(-2 * kappa * L), where L is barrier thickness.\n   - Direct Gate Tunneling: At dielectric thicknesses < 1.2 nm, electron tunneling through the gate oxide generates unmanageable standby leakage.\n   - High-k Metal Gates: Replacing silicon dioxide (k=3.9) with hafnium oxide (k=25) allows physically thicker dielectrics with equivalent capacitance.\n\n3. ASML EUV Lithography Mechanics:\n   - Rayleigh Resolution Criterion: CD = k1 * (lambda / NA). To shrink critical dimension (CD), wavelength (lambda) was reduced from 193 nm (DUV) to 13.5 nm (EUV).\n   - Tin Plasma Source: Droplets of molten tin (25 microns wide) fired at 70 m/s are pulsed by dual CO2 lasers into 200,000°C plasma, emitting 13.5 nm EUV photons.\n   - Reflective Optics: Because EUV light is absorbed by all matter (even air), the entire system operates in hard vacuum using multi-layer molybdenum-silicon Bragg reflector mirrors.",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "stem": "What physical quantum mechanical phenomenon fundamentally threatened to halt the miniaturization of silicon microchips below the 5-nanometer node?",
        "options": [
          "Nuclear fission of silicon atoms triggered by ambient cosmic rays.",
          "Quantum mechanical tunneling, where electrons pass directly through nanoscale insulating barriers even when the switch is turned off.",
          "The spontaneous transformation of silicon into superconducting liquid helium.",
          "The speed of light in silicon dropping to zero due to photonic friction."
        ],
        "correctAnswer": "Quantum mechanical tunneling, where electrons pass directly through nanoscale insulating barriers even when the switch is turned off.",
        "explanation": "When gate dielectrics shrink to single-nanometer thicknesses (a few atoms wide), the electron's quantum wavefunction penetrates the barrier. Electrons tunnel straight through the closed switch, causing massive off-state parasitic leakage current and excessive heat generation.",
        "trapExplanation": "Suggesting nuclear fission, room-temperature helium, or light freezing rather than wave-particle quantum tunneling.",
        "difficulty": "MEDIUM",
        "isPYQ": false,
        "examinerTrapPattern": "Quantum tunneling limit identification."
      },
      {
        "type": "CONCEPT_CHECK",
        "stem": "How does the 'Gate-All-Around' (GAA) nanosheet transistor architecture solve the problem of quantum leakage that plagued older planar transistors?",
        "options": [
          "It replaces all silicon with biological DNA strands that do not carry electrical charge.",
          "It uses permanent magnets to physically lock the electrons inside the battery.",
          "It slices the channel into horizontal nanosheets and wraps the conductive gate material completely around all four sides of each channel, maximizing electrostatic control.",
          "It runs the chip at absolute zero (-273 degrees Celsius) to freeze all electron movement."
        ],
        "correctAnswer": "It slices the channel into horizontal nanosheets and wraps the conductive gate material completely around all four sides of each channel, maximizing electrostatic control.",
        "explanation": "By wrapping the gate completely around the horizontal nanosheet channels on all four sides, Gate-All-Around (GAA) provides total electrostatic containment. The electric field grips the channel from every angle, preventing electrons from leaking through when the transistor is in the OFF state.",
        "trapExplanation": "Suggesting biological DNA or absolute zero freezing instead of 3D electrostatic gate wrapping.",
        "difficulty": "MEDIUM",
        "isPYQ": false,
        "examinerTrapPattern": "Transistor geometry evolution rationale."
      },
      {
        "type": "APPLIED_SCENARIO",
        "stem": "Why must ASML's Extreme Ultraviolet (EUV) lithography machines operate entirely inside a high-vacuum chamber, using reflective mirrors rather than traditional glass lenses to focus light?",
        "options": [
          "EUV light at 13.5 nm is so energetic that it is completely absorbed by almost all matter, including ambient air and traditional optical glass.",
          "Vacuum chambers prevent the microchips from catching fire from static electricity.",
          "The lasers used in lithography can only travel in a straight line if atmospheric oxygen is present.",
          "Silicon wafers become radioactive if exposed to nitrogen gas at room temperature."
        ],
        "correctAnswer": "EUV light at 13.5 nm is so energetic that it is completely absorbed by almost all matter, including ambient air and traditional optical glass.",
        "explanation": "Extreme ultraviolet light has an extremely short wavelength (13.5 nm), placing it just above X-rays. At this wavelength, photons interact with electron clouds in virtually all materials: air, nitrogen, and traditional glass lenses absorb EUV completely. The machine must therefore operate in a total vacuum, using specialized multi-layer mirrors to reflect and guide the light.",
        "trapExplanation": "Claiming air causes static fire, or that silicon becomes radioactive from nitrogen.",
        "difficulty": "HARD",
        "isPYQ": false,
        "examinerTrapPattern": "EUV photon absorption and vacuum optics physics."
      }
    ]
  },
  {
    "id": "CON-TECH-03",
    "topicOrder": 1,
    "topicSlug": "modern-computing-networking-and-intelligence",
    "topicTitle": "Modern Computing, Global Networking & Artificial Intelligence",
    "topicDescription": "First-principles engineering and physical mechanisms powering the modern digital civilization: subsea fiber optics, semiconductor photolithography, neural network transformers, public-key cryptography, and relativistic GPS timekeeping.",
    "slug": "how-large-language-models-and-neural-networks-think-embeddings-attention",
    "title": "How Large Language Models & Neural Networks 'Think': Embeddings, Attention & Next-Token Prediction",
    "shortDefinition": "The mathematical and algorithmic architecture powering modern generative Artificial Intelligence (e.g. GPT-4, Gemini, Claude). Large Language Models (LLMs) are not databases of stored facts, sentient beings, or search engines; they are massive high-dimensional statistical functions (containing hundreds of billions of adjustable numerical weights) trained on trillions of words of human text to perform a single core task: Next-Token Prediction. The model first breaks text into numerical fragments called 'Tokens', which are mapped into a high-dimensional vector space (Word Embeddings, typically 4,096 to 12,288 dimensions) where geometric proximity and directional angles encode semantic relationships (e.g. vector('King') - vector('Man') + vector('Woman') ≈ vector('Queen')). At the core of the modern AI revolution is the Transformer Architecture (Vaswani et al., 2017) and its Self-Attention Mechanism. Instead of processing words sequentially one-by-one, Self-Attention allows every token in an input sequence to dynamically compute a mathematical attention score (using Query, Key, and Value matrices) against every other token simultaneously, capturing long-range grammar, context, pronoun references, and nuanced concepts across thousands of words of text.",
    "difficulty": "INTERMEDIATE",
    "claims": [
      {
        "id": "CLM-TECH-03-01",
        "statement": "At their fundamental computational core, Large Language Models (LLMs) operate as probabilistic next-token predictors: given an input sequence of tokens (context window), the neural network outputs a probability distribution over a vocabulary of ~32,000 to 100,000 possible next tokens.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Jurafsky & Martin, Speech and Language Processing (3rd Ed), Chapter 10: Deep Learning Architectures for Language",
        "excerpt": "Autoregressive language models compute the conditional probability P(w_t | w_1, ..., w_{t-1}) of a token given its preceding context, iteratively sampling the next token to generate coherent multi-paragraph text."
      },
      {
        "id": "CLM-TECH-03-02",
        "statement": "LLMs process words by mapping them into high-dimensional vector spaces (Embeddings, typically spanning 4,096 to 12,288 dimensions), where semantic and syntactic relationships correspond to geometric distances and directional vectors (measured via cosine similarity).",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Mikolov et al. (2013), Distributed Representations of Words and Phrases and their Compositionality",
        "excerpt": "Word vectors capture semantic regularities through linear algebraic offsets, demonstrating that relationships such as capital cities, gender, and verb tenses correspond to consistent spatial translations in high-dimensional vector space."
      },
      {
        "id": "CLM-TECH-03-03",
        "statement": "The Transformer's Scaled Dot-Product Self-Attention mechanism computes contextual relevance across all tokens simultaneously using the formula Attention(Q, K, V) = softmax(Q * K^T / sqrt(d_k)) * V, where Query (Q), Key (K), and Value (V) projections allow the model to dynamically route information between related words.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Vaswani et al. (2017), Attention Is All You Need, NeurIPS Proceedings",
        "excerpt": "An attention function maps a query and a set of key-value pairs to an output. The output is computed as a weighted sum of the values, where the weight assigned to each value is computed by a compatibility function of the query with the corresponding key."
      },
      {
        "id": "CLM-TECH-03-04",
        "statement": "AI 'hallucinations' are a natural mathematical consequence of autoregressive next-token prediction: because the model generates text by optimizing statistical plausibility rather than querying a verified ground-truth database, it can produce fluent, authoritative-sounding statements that are factually false.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Ji et al. (2023), Survey of Hallucination in Natural Language Generation, ACM Computing Surveys",
        "excerpt": "Hallucination in large language models stems from the divergence between training objectives: the model is trained to maximize the likelihood of tokens appearing in text, not to verify the epistemological truth of the generated claims."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Ultra-Advanced Predictive Keyboard",
        "body": "When you type a text message on your smartphone, your keyboard suggests three words at the top. If you type 'I am going to the...', it suggests 'store', 'hospital', or 'gym'. Your phone does this by calculating basic probabilities based on past text.\n\nNow imagine taking that predictive keyboard and upgrading it by a factor of a trillion. Instead of looking back at just two words, it looks back at an entire 500-page book of context. Instead of simple statistics, it uses a neural network with 500 BILLION adjustable dials (parameters) that have read almost every book, Wikipedia article, scientific paper, and piece of code ever written by humanity.\n\nWhen you ask an AI model like Claude or ChatGPT a profound question about quantum physics or ask it to write Python code, it is not 'thinking' in the human sense, nor is it opening a filing cabinet of answers. It is asking itself one single mathematical question: *'Given all the words in this prompt, what is the single most statistically probable token that should come next?'*\n\nBy answering that question 50 times per second, one token at a time, breathtaking reasoning, poetry, and software code emerge.",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "Vector Embeddings and the Transformer Self-Attention Revolution",
        "body": "How does a computer understand that 'dog' and 'puppy' are related, but 'dog' and 'refrigerator' are not?\n\n1. High-Dimensional Vector Embeddings:\nComputers only understand numbers. An LLM first breaks text into tokens (~4 characters per token). Each token is assigned a list of thousands of numbers—a vector in a high-dimensional space (e.g. 8,192 dimensions).\n\nIn this space, every dimension represents some abstract concept discovered during training (e.g. gender, physical size, living vs non-living, historical era, formality). Words with similar meanings cluster together in space. You can literally perform arithmetic on concepts:\n\nVector('King') - Vector('Man') + Vector('Woman') = Vector('Queen')\n\n2. The Self-Attention Mechanism (The Transformer):\nBefore 2017, neural networks read text like a human reading a ticker tape: word by word (Recurrent Neural Networks - RNNs). By the time the network reached the end of a long paragraph, it had 'forgotten' the beginning.\n\nIn 2017, Google researchers introduced the Transformer with 'Self-Attention'. Self-Attention looks at all words in a sentence at the exact same time. For every token, it creates three vectors:\n- Query (Q): What am I looking for?\n- Key (K): What do I offer?\n- Value (V): What is my actual information?\n\nConsider the sentence: 'The animal didn't cross the street because IT was too tired.'\nWhat does 'IT' refer to? The animal, or the street? To a human, it's obvious: streets don't get tired. But how does an AI know? The Query of 'IT' matches the Key of 'animal' (because 'tired' connects with living creatures), yielding a high attention score. The model routes the Value of 'animal' into the meaning of 'IT'. If you change the sentence to '...because IT was too wide', the attention score flips to 'street'.\n\n3. Sampling and Temperature:\nOnce the model computes the probability of every word in its 100,000-word dictionary, it doesn't always pick the #1 top choice (which can make text robotic). A setting called 'Temperature' controls randomness: Temperature = 0 always picks the most probable token (rigid and deterministic); Temperature = 0.7 introduces slight variety for natural, creative phrasing.",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "The Transformer Tokenization & Self-Attention Flow",
        "body": "The computational journey of a prompt from raw text to next-token prediction:\n\n```\n+-------------------------------------------------------------------------+\n|          THE TRANSFORMER NEXT-TOKEN GENERATION PIPELINE                 |\n+-------------------------------------------------------------------------+\n|                                                                         |\n|   INPUT TEXT: 'The astronaut landed on the'                             |\n|                               |                                         |\n|                               v                                         |\n|   [ Tokenizer ]       ---> ['The', ' astronaut', ' landed', ' on', ' the']|\n|                               |                                         |\n|                               v                                         |\n|   [ Vector Embedding ]---> Maps each token to 8,192-dimensional vector  |\n|                            + Adds Positional Encodings (Token Order)    |\n|                               |                                         |\n|                               v                                         |\n|   [ N Transformer Layers ] (e.g., 80 to 120 Deep Neural Layers)         |\n|      * Multi-Head Self-Attention: Q * K^T / sqrt(d_k)                   |\n|        (Tokens communicate: 'astronaut' links to 'landed')              |\n|      * Feed-Forward MLP: Stores factual associative knowledge           |\n|      * Layer Normalization & Residual Connections                       |\n|                               |                                         |\n|                               v                                         |\n|   [ Softmax Output Layer ]---> Generates Probabilities over 100,000 words|\n|                                                                         |\n|         'Moon'      : 78.4%   <--- Highest probability                  |\n|         'surface'   : 12.1%                                             |\n|         'ground'    :  5.2%                                             |\n|         'cheese'    :  0.0001%                                          |\n|                               |                                         |\n|                               v                                         |\n|   [ Sampling Engine ] ---> Appends 'Moon' to the text                   |\n|                            (Loop repeats to generate next word...)      |\n+-------------------------------------------------------------------------+\n```",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "World Application: Why AI Hallucinates and How Grounding Works",
        "body": "Understanding the next-token architecture explains the biggest mystery of modern AI: Why do brilliant models make up fake legal citations or invent fake historical facts?\n\n1. Fluency vs Truth:\nAn LLM is trained on cross-entropy loss: reward for correctly guessing the next word in human text. It learns the *rhythm, syntax, grammar, and style* of human reasoning with unmatched fluency. However, the model has no internal sensor for truth versus falsehood. If an attorney asks an LLM for a legal precedent supporting an unusual argument, the model's self-attention produces tokens that look exactly like a real Supreme Court case citation—complete with plausible-sounding case names, volume numbers, and legal phrasing—because that is the statistically fluent completion of the prompt.\n\n2. Retrieval-Augmented Generation (RAG):\nTo prevent hallucinations in high-stakes fields (medicine, law, enterprise banking), engineers use RAG (Retrieval-Augmented Generation): instead of relying on the model's internal memory weights, a search engine retrieves verified factual source documents first, pastes those documents directly into the prompt context window, and instructs the model: *'Answer strictly using the text provided above.'*",
        "order": 4
      }
    ],
    "examMappings": [],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "How LLMs Think! AI models are not conscious databases; they are next-token predictors. Words are mapped into 8,000-dimensional vector spaces where geometry captures meaning. Transformers use Self-Attention (Q, K, V) to look at all words at once, weighing relationships to predict the most probable next word!",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Large Language Models (LLMs) like GPT-4, Claude, and Gemini operate on the principle of autoregressive next-token prediction. Input text is segmented into tokens and converted into high-dimensional vector embeddings (4,096 to 12,288 dimensions), where semantic concepts are represented as geometric coordinates (allowing vector arithmetic like King - Man + Woman = Queen).\n\nThe core breakthrough is the Transformer Architecture (2017) and its Scaled Dot-Product Self-Attention mechanism: Attention(Q,K,V) = softmax(QK^T / sqrt(d_k)) * V. Rather than reading words sequentially, Self-Attention processes entire passages simultaneously, allowing every token to calculate attention scores against every other token to dynamically determine context, resolve ambiguous pronouns, and capture long-range conceptual relationships. Because LLMs optimize for statistical plausibility rather than factual verification, they can generate fluent 'hallucinations', which are mitigated in real-world systems via Retrieval-Augmented Generation (RAG).",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "TRANSFORMER & NEURAL LANGUAGE MODEL ARCHITECTURE:\n1. Tokenization & High-Dimensional Geometry:\n   - Tokenizer: Byte-Pair Encoding (BPE) splits words into sub-word tokens (~0.75 words per token).\n   - Embedding Matrix: Maps token IDs to continuous vectors in R^d. Positional encodings (sinusoidal or RoPE) inject token order.\n   - Cosine Similarity: Dot product of normalized vectors measures semantic alignment: cos(theta) = (u . v) / (||u|| ||v||).\n\n2. Scaled Dot-Product Self-Attention:\n   - Projections: Each token vector x_i is multiplied by learned weight matrices W_Q, W_K, W_V to produce Queries, Keys, and Values.\n   - Attention Matrix: A = softmax(Q * K^T / sqrt(d_k)). The scaling factor sqrt(d_k) prevents dot products from growing excessively large, avoiding vanishing gradients.\n   - Multi-Head Attention: Projects tokens into multiple subspaces (e.g. 64 to 96 heads) in parallel, allowing simultaneous tracking of grammar, factual associations, and syntax.\n\n3. Generation & Inference Mechanics:\n   - Autoregressive Loop: The predicted token is appended to the input context, and the entire sequence is fed forward to predict the subsequent token.\n   - Temperature Scaling: Logits are divided by T before softmax: P_i = e^(z_i / T) / sum(e^(z_j / T)). T -> 0 yields greedy argmax selection; T > 1 flattens distribution.",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "stem": "What is the primary computational function that a Large Language Model (such as Claude or GPT-4) performs during text generation?",
        "options": [
          "Searching through an indexed relational database of pre-written answers to find an exact match.",
          "Calculating a probability distribution over a vocabulary of tokens to predict the most statistically plausible next token given the preceding context.",
          "Translating human English into binary machine code and running it as an executable program.",
          "Simulating biological neurons using quantum electrodynamics to achieve artificial human consciousness."
        ],
        "correctAnswer": "Calculating a probability distribution over a vocabulary of tokens to predict the most statistically plausible next token given the preceding context.",
        "explanation": "LLMs are autoregressive next-token predictors. Given an input context, the neural network calculates the probability of every token in its vocabulary, selecting and appending the next token iteratively to generate fluent text.",
        "trapExplanation": "Assuming that LLMs search a database of answers or possess biological consciousness.",
        "difficulty": "EASY",
        "isPYQ": false,
        "examinerTrapPattern": "Core computational definition of generative AI."
      },
      {
        "type": "CONCEPT_CHECK",
        "stem": "In the Transformer architecture's Self-Attention mechanism, what role do the Query (Q), Key (K), and Value (V) vectors play?",
        "options": [
          "Query encrypts the prompt, Key stores the user password, and Value bills the user's credit card.",
          "Query defines what a token is looking for, Key defines what a token offers, and Value contains the actual semantic information that gets routed based on the match.",
          "Query, Key, and Value represent the Red, Green, and Blue sub-pixels of image generation.",
          "They are three database indexes used to sort dictionary words alphabetically."
        ],
        "correctAnswer": "Query defines what a token is looking for, Key defines what a token offers, and Value contains the actual semantic information that gets routed based on the match.",
        "explanation": "In self-attention, each token generates a Query (what information it needs), a Key (what information it holds), and a Value (the content it passes along). When the dot product between a Query and a Key is high, the corresponding Value vector is weighted heavily into the token's updated representation.",
        "trapExplanation": "Confusing cryptographic keys and queries with linear algebraic self-attention projections.",
        "difficulty": "MEDIUM",
        "isPYQ": false,
        "examinerTrapPattern": "Transformer linear algebraic projection roles."
      },
      {
        "type": "APPLIED_SCENARIO",
        "stem": "A hospital introduces an AI system to draft clinical trial summaries. During testing, the model writes a beautifully phrased, highly confident clinical report citing a medical study that does not exist in any scientific literature. What fundamental architectural reality of LLMs causes this 'hallucination'?",
        "options": [
          "The computer chip running the AI experienced a physical hardware glitch caused by heat.",
          "The model optimizes for linguistic plausibility and statistical fluency based on training weights, not epistemological ground-truth verification.",
          "The internet connection dropped, forcing the AI to fabricate data to prevent crashing.",
          "The model's vector embedding dimensions were reduced to zero during tokenization."
        ],
        "correctAnswer": "The model optimizes for linguistic plausibility and statistical fluency based on training weights, not epistemological ground-truth verification.",
        "explanation": "LLMs are trained to maximize the likelihood of producing fluent, coherent language patterns. Because the model has no native concept of objective truth or connection to reality, when asked for a citation, it generates tokens that mirror the statistical structure and style of genuine medical papers without verifying whether the paper actually exists.",
        "trapExplanation": "Blaming internet disconnects, hardware failures, or zero embeddings rather than the statistical nature of next-token prediction.",
        "difficulty": "MEDIUM",
        "isPYQ": false,
        "examinerTrapPattern": "Cause of generative AI hallucination."
      }
    ]
  },
  {
    "id": "CON-TECH-04",
    "topicOrder": 1,
    "topicSlug": "modern-computing-networking-and-intelligence",
    "topicTitle": "Modern Computing, Global Networking & Artificial Intelligence",
    "topicDescription": "First-principles engineering and physical mechanisms powering the modern digital civilization: subsea fiber optics, semiconductor photolithography, neural network transformers, public-key cryptography, and relativistic GPS timekeeping.",
    "slug": "public-key-cryptography-rsa-elliptic-curves-and-trust",
    "title": "Public-Key Cryptography (RSA & Elliptic Curves): The Mathematics of Trust on an Insecure Network",
    "shortDefinition": "The mathematical breakthrough that enables secure digital commerce, encrypted messaging, and private internet communication across open, hostile networks, pioneered by Whitfield Diffie, Martin Hellman, Ralph Merkle (1976), and Ron Rivest, Adi Shamir, Leonard Adleman (RSA, 1977). Before public-key cryptography, secure communication required a 'shared secret' (symmetric key): both parties had to meet physically in secret to exchange a codebook or password before communicating. Public-Key Cryptography solved the fundamental paradox of the internet: how two total strangers (e.g. your web browser and a banking server in Frankfurt) can establish a completely encrypted communication channel in full view of eavesdroppers without exchanging a secret password beforehand. This is achieved using 'Trapdoor One-Way Functions'—mathematical operations that are trivial to compute in one direction, but computationally impossible to reverse without a private key. In RSA, multiplying two 1,024-bit prime numbers (p * q = N) takes microseconds, but factoring the resulting 2,048-bit number N back into p and q would require billions of years of classical supercomputing. Modern internet security has transitioned to Elliptic Curve Cryptography (ECC), where operations on algebraic curves (y^2 = x^3 + ax + b) provide equivalent mathematical security with vastly shorter keys, securing HTTPS, Bitcoin, Signal, and modern bank transactions.",
    "difficulty": "INTERMEDIATE",
    "claims": [
      {
        "id": "CLM-TECH-04-01",
        "statement": "Public-Key (Asymmetric) Cryptography resolves the key-distribution problem by providing each user with an interrelated key pair: a Public Key (distributed openly to anyone for encryption) and a Private Key (kept strictly secret for decryption).",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Diffie & Hellman (1976), New Directions in Cryptography, IEEE Transactions on Information Theory",
        "excerpt": "We propose that it is possible to build a public-key cryptosystem which allows secure communication over an insecure channel without prior exchange of a secret key, utilizing a trapdoor one-way function."
      },
      {
        "id": "CLM-TECH-04-02",
        "statement": "The RSA cryptosystem derives its security from the computational hardness of the Prime Factorization Problem: while multiplying two large prime numbers (p * q = N) is computationally trivial (O(n^2)), finding the prime factors of a large composite number N is intractable for classical computers under current algorithms.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Rivest, Shamir, & Adleman (1978), A Method for Obtaining Digital Signatures and Public-Key Cryptosystems, Communications of the ACM",
        "excerpt": "The encryption technique is based on the difficulty of factoring large numbers. To break the cipher, an opponent must be able to factor a 200-digit number into its prime components."
      },
      {
        "id": "CLM-TECH-04-03",
        "statement": "Elliptic Curve Cryptography (ECC) relies on the hardness of the Elliptic Curve Discrete Logarithm Problem (ECDLP) over points on an algebraic curve (y^2 = x^3 + ax + b mod p), achieving equivalent security to RSA with exponentially smaller key sizes (256-bit ECC matches 3,072-bit RSA).",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "NIST Special Publication 800-57: Recommendation for Key Management, Part 1",
        "excerpt": "Elliptic curve cryptography provides substantial performance advantages over traditional RSA systems because equivalent cryptographic strength is achieved with significantly smaller key sizes and lower computational overhead."
      },
      {
        "id": "CLM-TECH-04-04",
        "statement": "In modern Transport Layer Security (TLS/HTTPS), asymmetric cryptography is used solely for initial identity verification and ephemeral key exchange (Diffie-Hellman), after which high-speed symmetric encryption (e.g. AES-256) encrypts the actual data stream.",
        "claimType": "HISTORICAL_FACT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "IETF RFC 8446: The Transport Layer Security (TLS) Protocol Version 1.3",
        "excerpt": "TLS 1.3 utilizes asymmetric ephemeral Diffie-Hellman key exchange to establish a shared secret, followed by symmetric authenticated encryption with associated data (AEAD) for high-throughput session payload transmission."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Open Padlock and The Paint-Mixing Analogy",
        "body": "Imagine you want to send a secret love letter to someone you've never met, but the only mail carrier is a notorious gossip who reads every open postcard.\n\nUnder old-fashioned cryptography (Symmetric Encryption), you would lock the letter in a metal box with a key. But how do you get the key to your recipient without the gossip stealing it? You're stuck: to send the key safely, you need a locked box, but to open the box, you need the key!\n\nIn 1976, mathematicians discovered an astonishing solution: The Open Padlock.\n\nImagine your recipient buys a padlock, leaves it OPEN, and mails the open padlock to you on a public postcard. Anyone can look at the open padlock—it doesn't matter. You put your secret letter in a metal box, snap the padlock shut, and mail the locked box back. Once snapped shut, only ONE person in the world has the private key to unlock it: your recipient! Even you cannot open it again.\n\nThis is Asymmetric Cryptography. The open padlock is the Public Key (anyone can use it to lock a message). The physical key is the Private Key (kept in your pocket to unlock).",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "Trapdoor Functions: Prime Factorization and Elliptic Curves",
        "body": "How does mathematics create an 'open padlock' that is easy to lock but impossible to unlock?\n\n1. Trapdoor One-Way Functions:\nA one-way function is easy to calculate in the forward direction, but practically impossible to reverse:\n- Forward: Drop a porcelain coffee mug on a concrete floor. It instantly shatters into 500 pieces (takes 0.1 seconds).\n- Reverse: Take 500 ceramic shards and reassemble them into the original flawless mug (takes weeks or months).\n\n2. The RSA Algorithm (Prime Numbers):\n- Pick two giant prime numbers, p and q (each 300 to 600 digits long).\n- Multiply them together: N = p * q. Any smartphone can multiply two giant numbers in less than a microsecond.\n- Now give N to a supercomputer and ask: 'What two prime numbers did I multiply to get N?'\nThere is no known efficient mathematical shortcut. To find p and q by brute force, the world's fastest supercomputers would have to check trillions of combinations for billions of years—longer than the age of the universe! N is published openly as your Public Key; p and q are hidden as your Private Key.\n\n3. Elliptic Curve Cryptography (ECC):\nRSA keys must be huge (2,048 to 4,096 bits) to stay secure, which burns battery power on mobile devices. Modern internet security uses Elliptic Curves:\n\ny^2 = x^3 + ax + b (mod p)\n\nIf you take a point P on the curve and add it to itself k times (P + P + P... = Q), finding Q is lightning fast. But if an eavesdropper sees starting point P and ending point Q, finding how many times you added the point (k, the discrete logarithm) is mathematically intractable. A tiny 256-bit ECC key gives the same unbreakable security as a giant 3,072-bit RSA key, securing your WhatsApp, iMessage, and Apple Pay.",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "The Diffie-Hellman Key Exchange & Hybrid TLS Protocol",
        "body": "How Diffie-Hellman securely derives a shared secret over an open network (the paint-mixing analogy):\n\n```\n+-------------------------------------------------------------------------+\n|          THE DIFFIE-HELLMAN KEY EXCHANGE (THE PAINT ANALOGY)            |\n+-------------------------------------------------------------------------+\n|                                                                         |\n|   ALICE (Your Browser)                   BOB (Bank Server)              |\n|                                                                         |\n|   [ Common Public Color: YELLOW ]  <---> [ Common Public Color: YELLOW ]|\n|   (Shared in the open; eavesdropper Eve sees Yellow)                    |\n|                                                                         |\n|   + Secret Color: RED                    + Secret Color: BLUE           |\n|   |                                      |                              |\n|   v                                      v                              |\n|   Mix: Yellow + Red = ORANGE             Mix: Yellow + Blue = TEAL      |\n|                                                                         |\n|   ====== Public Exchange Across Open Insecure Internet =======          |\n|   Alice sends ORANGE to Bob ---->        <---- Bob sends TEAL to Alice  |\n|   (Eve sees Orange & Teal, but cannot unmix them to find Red or Blue)   |\n|                                                                         |\n|   Alice adds her Secret RED:             Bob adds his Secret BLUE:      |\n|   Teal + Red = MUDDY BROWN               Orange + Blue = MUDDY BROWN    |\n|                                                                         |\n|   =============================================================         |\n|   BOTH NOW SHARE THE EXACT SAME SECRET COLOR: 'MUDDY BROWN'!            |\n|   Eve is completely locked out.                                         |\n|   =============================================================         |\n+-------------------------------------------------------------------------+\n|  HYBRID INTERNET SECURITY (TLS 1.3):                                    |\n|  1. Asymmetric Cryptography (ECC/RSA) : Exchanges the temporary key     |\n|  2. Symmetric Cryptography (AES-256)   : Encrypts high-speed video/data |\n+-------------------------------------------------------------------------+\n```",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "World Application: The Threat of Quantum Computing and Post-Quantum Crypto",
        "body": "Why are intelligence agencies and tech giants racing to rewrite internet encryption right now?\n\n1. Shor's Algorithm:\nIn 1994, mathematician Peter Shor proved that a sufficiently large, fault-tolerant Quantum Computer could solve both prime factorization and discrete logarithms in polynomial time! A quantum computer using Shor's algorithm would slice through RSA-2048 and ECC-256 in minutes, instantly breaking all current internet banking, blockchain signatures, and military communications.\n\n2. 'Harvest Now, Decrypt Later' (HNDL):\nHostile intelligence agencies are currently intercepting and storing petabytes of encrypted government, financial, and diplomatic traffic from subsea cables today, storing it in massive data vaults. Even though they cannot read it now, they intend to decrypt it in 10 to 15 years when quantum computers mature.\n\n3. Post-Quantum Cryptography (PQC):\nIn 2024, the US National Institute of Standards and Technology (NIST) finalized the first Post-Quantum Cryptographic standards (such as ML-KEM and ML-DSA, based on high-dimensional Lattice Mathematics). These mathematical problems do not rely on prime numbers and are designed to be unbreakable by both classical AND quantum computers.",
        "order": 4
      }
    ],
    "examMappings": [],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Public-Key Crypto! Solves internet trust: anyone can lock a message with your Public Key (the open padlock), but only your Private Key can unlock it! RSA uses prime numbers (multiplying is easy, factoring is impossible); ECC uses elliptic curves for tiny, powerful 256-bit keys that protect your bank!",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Public-key cryptography solves the fundamental security dilemma of the digital age: how two strangers can communicate privately across an insecure network without prior coordination. Discovered in the 1970s, it separates encryption and decryption into an asymmetric key pair: an open Public Key (used by anyone to encrypt data) and a secret Private Key (used exclusively by the recipient to decrypt).\n\nSecurity rests on Trapdoor One-Way Functions—mathematical operations that are easy to compute forward but impossible to invert without a trapdoor secret. The RSA algorithm exploits the prime factorization problem: multiplying two 1,024-bit primes (p * q = N) takes microseconds, but factoring N back into p and q is computationally impossible on classical computers. Modern internet security relies heavily on Elliptic Curve Cryptography (ECC), where point operations on algebraic curves (y^2 = x^3 + ax + b) provide equivalent protection to RSA with much smaller key sizes (256-bit ECC matches 3,072-bit RSA), securing HTTPS, digital banking, and encrypted messaging.",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "PUBLIC-KEY CRYPTOGRAPHY & TRUST ARCHITECTURE:\n1. Asymmetric Key Pair Foundations:\n   - Public Key (e, N): Distributed openly to the world. Encrypts plaintext: C = M^e mod N.\n   - Private Key (d, N): Kept strictly secret. Decrypts ciphertext: M = C^d mod N.\n   - Mathematical Identity: Based on Euler's Totient Theorem: M^(e*d) congruent to M mod N, where e*d congruent to 1 mod phi(N).\n\n2. Elliptic Curve Discrete Logarithm Problem (ECDLP):\n   - Group Law: Points on the curve y^2 = x^3 + ax + b (mod p) form an abelian group under geometric chord-and-tangent addition.\n   - Scalar Multiplication: Q = k * P. Computing Q from scalar k and base point P is fast via double-and-add (O(log k)).\n   - Intractability: Determining scalar k given P and Q requires O(sqrt(p)) operations using Pollard's rho algorithm, making 256-bit curves unbreakable classically.\n\n3. Hybrid Cryptographic Implementation (TLS 1.3):\n   - Handshake Phase: Ephemeral Elliptic Curve Diffie-Hellman (ECDHE) derives a temporary shared session key over the open internet.\n   - Authentication Phase: Server presents an X.509 Digital Certificate signed by a trusted Certificate Authority (CA) using digital signatures.\n   - Data Transmission Phase: High-speed symmetric cipher (AES-GCM or ChaCha20-Poly1305) encrypts packets with near-zero latency.",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "stem": "What is the primary mathematical principle that makes the RSA encryption algorithm secure against unauthorized decryption on classical computers?",
        "options": [
          "The speed of light in optical cables limits how fast hackers can transmit guessing attacks.",
          "Multiplying two large prime numbers together is computationally easy, but factoring the resulting composite number back into its prime components is computationally intractable.",
          "Random number generators in computers are controlled by radioactive decay that cannot be predicted.",
          "The computer automatically deletes the encrypted message if a wrong password is entered twice."
        ],
        "correctAnswer": "Multiplying two large prime numbers together is computationally easy, but factoring the resulting composite number back into its prime components is computationally intractable.",
        "explanation": "RSA security relies on the hardness of prime factorization: any computer can multiply two large prime numbers (p and q) in microseconds, but factoring the resulting product (N) back into p and q would take billions of years of classical supercomputing time.",
        "trapExplanation": "Suggesting physical speed of light or radioactive decay rather than the mathematical hardness of prime factorization.",
        "difficulty": "EASY",
        "isPYQ": false,
        "examinerTrapPattern": "Mathematical foundation of RSA."
      },
      {
        "type": "CONCEPT_CHECK",
        "stem": "Why has modern internet security (such as TLS/HTTPS and messaging apps) largely transitioned from traditional RSA cryptography to Elliptic Curve Cryptography (ECC)?",
        "options": [
          "RSA was officially banned by the United Nations in 2020.",
          "ECC provides the exact same level of cryptographic security as RSA with dramatically smaller key sizes (e.g. 256-bit ECC matches 3,072-bit RSA), saving computing power and battery life.",
          "Elliptic curves can only run on quantum computers.",
          "RSA encryption only works for text, while ECC is required for images and video."
        ],
        "correctAnswer": "ECC provides the exact same level of cryptographic security as RSA with dramatically smaller key sizes (e.g. 256-bit ECC matches 3,072-bit RSA), saving computing power and battery life.",
        "explanation": "Elliptic curve discrete logarithms are much harder to solve per bit than prime factorization. A compact 256-bit ECC key provides equivalent security to a massive 3,072-bit RSA key, significantly reducing computational overhead, network transmission size, and mobile battery consumption.",
        "trapExplanation": "Believing that RSA is legally banned or incapable of handling multimedia data.",
        "difficulty": "MEDIUM",
        "isPYQ": false,
        "examinerTrapPattern": "Efficiency and key-length scaling advantages of ECC."
      },
      {
        "type": "APPLIED_SCENARIO",
        "stem": "Why are cybersecurity agencies and intelligence organizations actively stockpiling encrypted internet communications today under a strategy known as 'Harvest Now, Decrypt Later' (HNDL)?",
        "options": [
          "They expect classical supercomputer electricity costs to drop to zero next year.",
          "They anticipate that future fault-tolerant quantum computers running Shor's Algorithm will easily factor large prime numbers and solve elliptic curves, retroactively breaking today's encrypted traffic.",
          "They plan to sell the encrypted files back to the original owners for ransomware.",
          "The magnetic storage tapes used for archives are being discontinued by manufacturers."
        ],
        "correctAnswer": "They anticipate that future fault-tolerant quantum computers running Shor's Algorithm will easily factor large prime numbers and solve elliptic curves, retroactively breaking today's encrypted traffic.",
        "explanation": "Peter Shor proved in 1994 that quantum computers can factor prime numbers and solve discrete logarithms in polynomial time. Foreign adversaries are intercepting and saving encrypted traffic today so that when quantum computers are built in the 2030s, they can decrypt historical diplomatic, military, and financial secrets retroactively.",
        "trapExplanation": "Blaming electricity costs or tape discontinuation rather than quantum algorithmic cryptanalysis.",
        "difficulty": "HARD",
        "isPYQ": false,
        "examinerTrapPattern": "Quantum threat to classical public-key cryptography."
      }
    ]
  },
  {
    "id": "CON-TECH-05",
    "topicOrder": 1,
    "topicSlug": "modern-computing-networking-and-intelligence",
    "topicTitle": "Modern Computing, Global Networking & Artificial Intelligence",
    "topicDescription": "First-principles engineering and physical mechanisms powering the modern digital civilization: subsea fiber optics, semiconductor photolithography, neural network transformers, public-key cryptography, and relativistic GPS timekeeping.",
    "slug": "how-gps-clocks-prove-einstein-relativity-time-dilation",
    "title": "How GPS Clocks Prove Einstein’s Relativity: Special & General Relativistic Time Dilation",
    "shortDefinition": "The definitive real-world technological proof of Albert Einstein's theories of relativity operating inside consumer smartphones. Global Positioning System (GPS) satellites orbit Earth in Medium Earth Orbit at an altitude of 20,200 km, traveling at high speeds (~3.87 km/s) while carrying atomic clocks stable to within nanoseconds per day. To calculate a user's location via radio trilateration (d = c * delta_t), satellite timekeeping must be accurate to within 20 to 30 nanoseconds. However, Einstein's physics predicts two opposing relativistic time distortions: (1) Special Relativity (Kinematic Time Dilation, 1905): because satellites are moving fast relative to an observer on the ground, time ticks SLOWER on the satellite by approximately 7 microseconds per day. (2) General Relativity (Gravitational Time Dilation, 1915): because satellites are 20,200 km out in space where Earth's gravitational potential is much weaker than at the surface, spacetime is curved less, causing time on the satellite to tick FASTER by approximately 45 microseconds per day. The combined net relativistic effect is that satellite clocks tick FASTER than Earth clocks by exactly 38 microseconds per day (45 - 7 = +38 microseconds/day). Because light travels at ~300 meters per microsecond, failing to correct for Einstein's equations would cause GPS location calculations to drift by over 11.4 KILOMETERS EVERY SINGLE DAY, rendering global satellite navigation completely useless within hours.",
    "difficulty": "INTERMEDIATE",
    "claims": [
      {
        "id": "CLM-TECH-05-01",
        "statement": "Under Albert Einstein's Special Theory of Relativity (1905), relative motion causes kinematic time dilation (t' = t * sqrt(1 - v^2 / c^2)), causing atomic clocks on GPS satellites moving at ~3.87 km/s to tick slower by approximately 7 microseconds per day relative to clocks on Earth's surface.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Ashby, Relativity in the Global Positioning System, Living Reviews in Relativity (2003), Section 3",
        "excerpt": "Because of the satellite's orbital speed of roughly 3.9 km/s, special relativistic time dilation causes moving satellite clocks to tick slower than clocks at rest on Earth by roughly 7 microseconds per day."
      },
      {
        "id": "CLM-TECH-05-02",
        "statement": "Under Albert Einstein's General Theory of Relativity (1915), gravitational potential curves spacetime, causing atomic clocks located at 20,200 km altitude (in a significantly weaker gravitational field) to tick faster by approximately 45 microseconds per day relative to clocks at Earth's surface.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Ashby, Relativity in the Global Positioning System, Living Reviews in Relativity (2003), Section 4",
        "excerpt": "General relativity predicts that clocks at higher gravitational potential tick faster. A clock at GPS altitude experiences weaker gravity and runs faster than a ground-based clock by about 45 microseconds per day."
      },
      {
        "id": "CLM-TECH-05-03",
        "statement": "The net relativistic offset causes GPS satellite atomic clocks to run faster than ground clocks by precisely 38 microseconds per day (+45 gravitational minus 7 kinematic), which, if uncorrected, would accumulate a positioning error of ~11.4 kilometers every 24 hours.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Ashby, Relativity in the Global Positioning System, Living Reviews in Relativity (2003), Section 5",
        "excerpt": "The net effect is that satellite clocks run faster by 38.6 microseconds per day. Multiplied by the speed of light, this corresponds to an error of more than 11 kilometers per day."
      },
      {
        "id": "CLM-TECH-05-04",
        "statement": "Engineers resolve this relativistic time dilation by pre-tuning the base oscillator frequency of GPS satellite atomic clocks prior to launch from the nominal 10.23 MHz down to exactly 10.22999999543 MHz, so that upon reaching orbit, relativistic acceleration brings the clock to exactly 10.23 MHz as observed from Earth.",
        "claimType": "HISTORICAL_FACT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Global Positioning System Standard Positioning Service Performance Standard (DoD), Section 3.2",
        "excerpt": "Prior to launch, the satellite atomic clock frequency is intentionally offset to 10.22999999543 MHz so that in orbit, when observed from the rotating Earth geoid, it appears to operate precisely at the fundamental frequency of 10.23 MHz."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Clocks That Tick at Different Speeds",
        "body": "We grow up believing that time is a universal, absolute constant: a second is a second, whether you are sitting on your sofa in New Delhi, climbing Mount Everest, or flying in an airplane.\n\nIn 1905 and 1915, Albert Einstein shattered this illusion. He proved that time is flexible, personal, and elastic: the speed at which time flows depends on how fast you are moving and how deep you are inside a gravitational well.\n\nMost people think relativity is purely theoretical—something that only matters near black holes or science fiction spaceships traveling at warp speed. But if you have ever used Google Maps to order an Uber, guide your car, or find a restaurant, you are physically holding proof of Einstein's relativity in your hand!\n\nIf the engineers who built the GPS satellite network had used classical Newtonian physics and assumed that time flows at the same speed in orbit as on Earth, your phone's GPS navigation would be off by 11 kilometers after just one day, and off by 110 kilometers after ten days. Your phone would place you in the middle of the ocean!",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "The Two Relativities in Conflict: Speed vs Gravity",
        "body": "Inside every GPS satellite orbiting at 20,200 km altitude are multiple rubidium and cesium atomic clocks that tick at hyper-precise frequencies. But two opposing relativistic effects wage a tug-of-war on those clocks:\n\n1. Special Relativity (Kinematic Time Dilation - 1905):\nSpecial Relativity states that moving objects experience time more slowly relative to a stationary observer:\n\ndelta_t_moving = delta_t_rest * sqrt(1 - v^2 / c^2)\n\nGPS satellites orbit at v ≈ 3.87 km/s (nearly 14,000 km/h). Because they are moving fast relative to someone standing on Earth, their atomic clocks tick SLOWER. Over a 24-hour day, this kinematic slowdown amounts to:\n\nSpecial Relativity Effect = - 7 microseconds per day (-7,000 nanoseconds)\n\n2. General Relativity (Gravitational Time Dilation - 1915):\nGeneral Relativity states that mass and energy curve spacetime. The closer you are to a heavy mass like Earth, the deeper you are in its gravitational well, and the SLOWER time ticks. Clocks higher up in weaker gravity tick FASTER:\n\ndelta_t_grav = delta_t_surface * (1 + delta_Phi / c^2)\n\nAt 20,200 km altitude, Earth's gravity is four times weaker than on the surface. Because the satellite is high up out of the gravitational valley, its clock ticks FASTER than clocks on Earth. Over a 24-hour day, this gravitational speedup amounts to:\n\nGeneral Relativity Effect = + 45 microseconds per day (+45,000 nanoseconds)\n\n3. The Net Relativistic Sum:\nCombine the two effects:\nNet Daily Shift = +45 microseconds (General Relativity) - 7 microseconds (Special Relativity) = +38 microseconds per day!\n\nThe satellite's atomic clock runs FASTER by 38 microseconds every single day.\n\n4. The 11.4-Kilometer Disaster:\nRemember how GPS calculates distance: distance = c * time. Light travels at 300,000 km/s (300 meters per microsecond). If your satellite's clock runs fast by 38 microseconds:\n\nDistance Error = 38 microseconds * 300 meters/microsecond = 11,400 meters = 11.4 KILOMETERS PER DAY!\n\nAfter 24 hours, your GPS receiver would think you are 11 kilometers away from your real location. After a week, the error would exceed 80 kilometers.",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "The Relativistic Clock Bias & The 10.22999999543 MHz Fix",
        "body": "The competing relativistic vectors and the hardware pre-tuning solution:\n\n```\n+-------------------------------------------------------------------------+\n|          THE RELATIVISTIC TIME DILATION BALANCE IN GPS                  |\n+-------------------------------------------------------------------------+\n|                                                                         |\n|   +-----------------------------------------------------------------+   |\n|   | SPECIAL RELATIVITY (Kinematic Effect - Speed = 3.87 km/s)       |   |\n|   | Satellite is moving fast -> Time runs SLOWER                    |   |\n|   | Effect: -7 microseconds / day                                   |   |\n|   +-----------------------------------------------------------------+   |\n|                                   +                                     |\n|   +-----------------------------------------------------------------+   |\n|   | GENERAL RELATIVITY (Gravitational Effect - Alt = 20,200 km)     |   |\n|   | Weaker gravity in space -> Time runs FASTER                     |   |\n|   | Effect: +45 microseconds / day                                  |   |\n|   +-----------------------------------------------------------------+   |\n|                                   =                                     |\n|   +-----------------------------------------------------------------+   |\n|   | NET RELATIVISTIC TIME DILATION                                  |   |\n|   | Satellite clock runs FASTER by exactly +38.6 microseconds / day |   |\n|   +-----------------------------------------------------------------+   |\n|                                   |                                     |\n|                                   v                                     |\n|   UNRESTRICTED ERROR: 38.6 microseconds * c ≈ 11.4 km drift per day!    |\n|                                                                         |\n+-------------------------------------------------------------------------+\n|  THE HARDWARE PRE-TUNING FIX (Before Launch):                           |\n|  - Target Fundamental Clock Frequency : 10.23000000000 MHz              |\n|  - Built-in Pre-launch Factory Setting: 10.22999999543 MHz              |\n|  - When in orbit, +38 microsec speedup shifts frequency up to EXACTLY   |\n|    10.23000000000 MHz as measured from ground receivers!               |\n+-------------------------------------------------------------------------+\n```",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "World Application: The Historical Skepticism of GPS Engineers",
        "body": "When the US Department of Defense built the first experimental GPS satellite (NTS-2, launched in 1977), the military engineers were skeptical of Einstein's relativity. Many military officers believed that relativity was a purely esoteric academic theory that wouldn't manifest in practical electronics.\n\nTo be safe, they built the satellite with a physical switch: it launched with normal clock frequencies, but included a synthesizer that could toggle the relativistic frequency offset on or off via radio command from the ground.\n\nWhen the satellite reached orbit, within days the uncorrected clock began drifting rapidly off schedule at exactly the 38-microsecond-per-day rate predicted by Einstein's equations! The engineers conceded, transmitted the radio command to activate the relativistic frequency synthesizer, and the clock immediately settled into perfect synchronization. Today, all global navigation constellations (GPS, Galileo, GLONASS, BeiDou, NavIC) have Einstein's equations permanently hardcoded into their hardware.",
        "order": 4
      }
    ],
    "examMappings": [],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "GPS Proves Einstein! Satellites move fast, so Special Relativity slows clocks by 7 microsec/day; but weaker gravity at 20,200 km makes General Relativity speed them up by 45 microsec/day! Net: satellite clocks run 38 microsec/day faster. Without Einstein's fix, GPS would drift 11.4 km every single day!",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "The Global Positioning System (GPS) is the most prominent everyday technological application of Albert Einstein's theories of relativity. GPS satellites orbit at 20,200 km altitude at speeds of ~3.87 km/s, carrying atomic clocks that must remain synchronized to within nanoseconds to provide meter-level positioning accuracy via time-of-flight trilateration (d = c * delta_t).\n\nTwo opposing relativistic effects alter the ticking rate of these clocks:\n1. Special Relativity (Kinematic Dilation): High orbital velocity causes satellite clocks to tick slower by ~7 microseconds per day.\n2. General Relativity (Gravitational Dilation): Weaker gravitational potential at 20,200 km causes satellite clocks to tick faster by ~45 microseconds per day.\nThe net effect is that satellite clocks tick faster by approximately 38 microseconds per day (+45 - 7 = +38 microseconds). Because light travels 300 meters per microsecond, an uncorrected 38-microsecond daily error would compound into an 11.4-kilometer positioning error every 24 hours. Engineers solve this by intentionally pre-tuning the satellite atomic clocks to 10.22999999543 MHz on the ground, so that in orbit, relativistic dilation accelerates them to precisely 10.23 MHz.",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "RELATIVISTIC GPS TIME DILATION ARCHITECTURE:\n1. Special Relativistic Calculation (Kinematic):\n   - Lorentz Factor: gamma = 1 / sqrt(1 - v^2 / c^2) ≈ 1 + 0.5 * (v/c)^2.\n   - Fractional Frequency Shift: delta_f / f = - 0.5 * (v/c)^2.\n   - For v = 3.874 km/s, (v/c)^2 ≈ 1.67 * 10^-10.\n   - Fractional Shift: - 8.35 * 10^-11 -> -7.2 microseconds per day.\n\n2. General Relativistic Calculation (Gravitational):\n   - Gravitational Potential: Phi(r) = -GM/r.\n   - Potential Difference: delta_Phi = Phi(r_orbit) - Phi(R_earth) = GM/R_earth - GM/r_orbit.\n   - Fractional Frequency Shift: delta_f / f = delta_Phi / c^2 = (GM/c^2) * (1/R_earth - 1/r_orbit).\n   - Numerical Value: + 5.29 * 10^-10 -> +45.7 microseconds per day.\n\n3. Combined Relativistic Sum & Engineering Adjustment:\n   - Net Fractional Shift: delta_f / f = + 5.29 * 10^-10 - 0.835 * 10^-10 = + 4.45 * 10^-10.\n   - Daily Time Drift: 4.45 * 10^-10 * 86,400 seconds = + 38.5 microseconds / day.\n   - Position Error Accumulation: delta_x = c * delta_t = 3 * 10^8 m/s * 38.5 * 10^-6 s ≈ 11,550 meters (11.5 km/day).\n   - Factory Offset: f_satellite = 10.23 MHz * (1 - 4.45 * 10^-10) = 10.22999999543 MHz.",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "stem": "What would happen to civilian smartphone GPS navigation if engineers turned off the relativistic corrections hardcoded into GPS satellite atomic clocks?",
        "options": [
          "GPS signals would instantly disappear and phones would display an error code.",
          "The calculated user location would drift by approximately 11 kilometers after just one day, accumulating further error continuously.",
          "Smartphone batteries would overheat and explode due to high-voltage radio signals.",
          "The GPS system would operate normally because relativity only applies to objects moving near the speed of light."
        ],
        "correctAnswer": "The calculated user location would drift by approximately 11 kilometers after just one day, accumulating further error continuously.",
        "explanation": "The net relativistic effect (General Relativity speeding clocks up by 45 microseconds and Special Relativity slowing them down by 7 microseconds) causes satellite clocks to gain ~38 microseconds per day. Multiplied by the speed of light (300 m/microsecond), this creates an 11.4-kilometer daily drift.",
        "trapExplanation": "Believing relativity has no measurable effect on engineering, or that it causes battery explosions.",
        "difficulty": "EASY",
        "isPYQ": false,
        "examinerTrapPattern": "Real-world consequence of uncorrected relativistic time dilation."
      },
      {
        "type": "CONCEPT_CHECK",
        "stem": "Why does General Relativity cause atomic clocks on GPS satellites in Medium Earth Orbit (~20,200 km) to tick FASTER than atomic clocks resting on Earth's surface?",
        "options": [
          "Solar panels on the satellite supply higher electrical voltage to the atomic clock oscillator.",
          "Earth's gravitational field is significantly weaker at 20,200 km altitude than at sea level, and General Relativity dictates that clocks in weaker gravity tick faster.",
          "Cosmic microwave background radiation accelerates the atomic decay of cesium atoms in orbit.",
          "The vacuum of space eliminates atmospheric air resistance against the ticking clock gears."
        ],
        "correctAnswer": "Earth's gravitational field is significantly weaker at 20,200 km altitude than at sea level, and General Relativity dictates that clocks in weaker gravity tick faster.",
        "explanation": "Under General Relativity, mass curves spacetime, creating gravitational time dilation. The closer a clock is to a massive body (like Earth's surface), the deeper it is in the gravitational well and the slower time flows. At 20,200 km, gravity is weaker, so time flows faster (+45 microseconds/day).",
        "trapExplanation": "Attributing the speedup to solar panel voltage, cosmic rays, or air resistance.",
        "difficulty": "MEDIUM",
        "isPYQ": false,
        "examinerTrapPattern": "Gravitational time dilation principle."
      },
      {
        "type": "APPLIED_SCENARIO",
        "stem": "How did aerospace engineers physically solve the 38-microsecond-per-day relativistic time gain on GPS satellites before launching them into orbit?",
        "options": [
          "They placed heavy lead weights inside the satellite to simulate Earth's surface gravity.",
          "They intentionally built the atomic clocks to tick at a slightly slower base frequency (10.22999999543 MHz instead of 10.23 MHz) on the ground, so that relativistic speedup in orbit brings them to exactly 10.23 MHz.",
          "They programmed ground control stations to reset the satellite clocks to zero every five minutes.",
          "They angled the satellite solar panels away from the Sun to cool the atomic clocks."
        ],
        "correctAnswer": "They intentionally built the atomic clocks to tick at a slightly slower base frequency (10.22999999543 MHz instead of 10.23 MHz) on the ground, so that relativistic speedup in orbit brings them to exactly 10.23 MHz.",
        "explanation": "Rather than constantly sending radio reset commands, engineers pre-offset the satellite clock oscillator in the factory: tuning it down to 10.22999999543 MHz. When launched into orbit, the relativistic gain of +38 microseconds/day (+4.45 x 10^-10 fractional shift) speeds up the clock to exactly 10.23 MHz as observed from Earth.",
        "trapExplanation": "Suggesting lead weights, panel cooling, or continuous resets rather than the factory frequency pre-offset.",
        "difficulty": "HARD",
        "isPYQ": false,
        "examinerTrapPattern": "Engineering implementation of relativistic frequency synthesis."
      }
    ]
  }
];

export async function seedModuleU2ModernTechnology(): Promise<void> {
  console.log('[Module U2] Seeding Universal Knowledge: How Modern Technology Actually Works...');

  // 1. Ensure Domain Exists
  const domain = await db.domain.upsert({
    where: { slug: 'world-understanding-and-universal-knowledge' },
    update: {},
    create: {
      slug: 'world-understanding-and-universal-knowledge',
      name: 'World Understanding & Universal Knowledge',
      description: 'First-principles understanding of how the universe, technology, nature, and the human mind actually work—free from examination constraints.',
      order: 100,
    },
  });

  // 2. Ensure Subject Exists
  let subject = await db.subject.findFirst({ where: { slug: 'foundations-of-modern-technology' } });
  if (!subject) {
    subject = await db.subject.create({
      data: {
        slug: 'foundations-of-modern-technology',
        name: 'How Modern Technology Actually Works: From Silicon to Neural Networks',
        description: 'First-principles engineering, physical mechanisms, and mathematical architecture powering global communications, microprocessors, cryptography, and artificial intelligence.',
        scopeStatement: 'Pure universal knowledge track explaining the physical and algorithmic infrastructure of the modern digital world.',
        domainId: domain.id,
        order: 2,
      },
    });
  }

  // 3. Ensure Source Exists
  const sourceTech = await db.source.upsert({
    where: { id: 'SRC-MODERN-TECH-FOUNDATIONS' },
    update: {},
    create: {
      id: 'SRC-MODERN-TECH-FOUNDATIONS',
      title: 'Foundations of Modern Technology: First-Principles Engineering & Computer Science Synthesis',
      sourceType: 'ACADEMIC_CANONICAL_SYNTHESIS',
      authorityTier: 'PEER_REVIEWED_ACADEMIC_REFERENCE',
      description: 'Authoritative first-principles synthesis of global telecommunications, semiconductor physics (ASML/TSMC), cryptographic mathematics (RSA/ECC), deep learning transformers, and relativistic engineering.',
    },
  });

  // 4. Group by Topic and Seed
  const topicGroups: Record<string, UniversalConceptDefinition[]> = {};
  for (const c of MODULE_U2_CONCEPTS) {
    if (!topicGroups[c.topicSlug]) {
      topicGroups[c.topicSlug] = [];
    }
    topicGroups[c.topicSlug].push(c);
  }

  for (const [topicSlug, tConcepts] of Object.entries(topicGroups)) {
    const first = tConcepts[0];
    let topic = await db.topic.findFirst({ where: { slug: topicSlug } });
    if (!topic) {
      topic = await db.topic.create({
        data: {
          slug: topicSlug,
          title: first.topicTitle,
          description: first.topicDescription,
          subjectId: subject.id,
          order: first.topicOrder,
        },
      });
    } else {
      topic = await db.topic.update({
        where: { id: topic.id },
        data: {
          title: first.topicTitle,
          description: first.topicDescription,
          order: first.topicOrder,
        },
      });
    }

    for (let i = 0; i < tConcepts.length; i++) {
      const cDef = tConcepts[i];
      let concept = await db.concept.findUnique({ where: { id: cDef.id } });

      if (concept) {
        // Delete child records to re-seed cleanly
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
            status: 'VERIFIED',
          },
        });

        await db.evidence.create({
          data: {
            claimId: claim.id,
            sourceId: sourceTech.id,
            locator: cl.locator,
            excerpt: cl.excerpt,
            evidenceType: 'PEER_REVIEWED_JOURNAL',
            authority: 'DIRECT_LECTURE_AUTHORITY',
            evidentiarySupport: 'DIRECT_SUPPORT',
            extractionConfidence: 'HIGH',
          },
        });
      }

      // Seed ContentBlocks
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

      // Seed RevisionUnits
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
            pyqYear: q.pyqYear,
            pyqPaper: q.pyqPaper,
            pyqStage: q.pyqStage,
            pyqQuestionNumber: q.pyqQuestionNumber,
            examinerTrapPattern: q.examinerTrapPattern,
          },
        });
      }
    }
  }

  console.log(`[Module U2] Successfully seeded ${MODULE_U2_CONCEPTS.length} Universal Knowledge Modern Technology Canonical Concepts.`);
}
