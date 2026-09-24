import { db } from '../db/client';

export interface ComputerCanonicalConceptDef {
  id: string;
  slug: string;
  title: string;
  shortDefinition: string;
  difficulty: string;
  order: number;
  topicSlug: string;
  contentBlocks: {
    type: string;
    title: string;
    body: string;
    order: number;
    visibility: string;
  }[];
  claims: {
    id: string;
    statement: string;
    claimType: string;
    epistemicLevel: string;
    confidence: string;
    locator: string;
    excerpt: string;
  }[];
  examMappings: {
    examCode: string;
    syllabusUnit: string;
    relevance: string;
    priority: string;
    requiredDepth: string;
    notes: string;
  }[];
  revisionUnits: {
    type: string;
    content: string;
    priority: string;
    order: number;
  }[];
  questions: {
    type: string;
    stem: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
    trapExplanation: string;
    difficulty: string;
  }[];
}

export const COMPUTER_APTITUDE_CONCEPTS: ComputerCanonicalConceptDef[] = [
  // =========================================================================
  // TOPIC 1: Foundations, Evolution & Hardware Architecture
  // =========================================================================
  {
    id: 'CON-COMP-001',
    slug: 'evolution-of-computing-and-von-neumann-architecture',
    title: 'Evolution of Computing, Historical Milestones & Von Neumann Stored-Program Architecture',
    shortDefinition: 'The historical evolution of computing from mechanical counting aids (Abacus, Napier\'s Bones, Slide Rule, Pascaline, Babbage\'s Analytical Engine) to the Von Neumann Stored-Program Architecture (1945), where program instructions and data share a common physical memory space.',
    difficulty: 'INTERMEDIATE',
    order: 1,
    topicSlug: 'computer-foundations-evolution-and-hardware-architecture',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'From Mechanical Gear Trains to Stored-Program Computing',
        body: 'Early mechanical calculating machines operated on fixed physical gear ratios: calculating rules and instructions were hardwired into brass cogs. The true revolution in digital computation occurred when **John von Neumann (1945)** conceptualized the **Stored-Program Architecture**. Under this model, program instructions and computational data are treated as interchangeable binary bits stored within the exact same electronic memory medium, executed sequentially by an electronic processing unit.',
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Master Chronology of Computing Pioneers & Machines',
        body: `| Computing Milestone | Year | Pioneer / Inventor | Key Technological Feature |
| :--- | :--- | :--- | :--- |
| **Abacus** | ~3000 BCE | Babylon / China | First mechanical arithmetic calculating device (beads on wires). |
| **Napier\'s Bones** | 1617 | John Napier (Scotland) | Bone rods inscribed with multiplication tables (**Rabdology**). |
| **Slide Rule** | 1621 | William Oughtred & Edmund Gunter | Continuous logarithmic scales; first analog calculating instrument. |
| **Pascaline** | 1642 | Blaise Pascal (France) | First mechanical automatic adding machine using toothed gear wheels. |
| **Analytical Engine** | 1834–1842 | Charles Babbage (England) | **Architectural ancestor of computers:** Store (Memory), Mill (CPU), and punch cards. |
| **First Program** | 1843 | Lady Ada Lovelace (England) | First computer algorithm (Bernoulli numbers); first computer programmer. |
| **Census Tabulator** | 1890 | Herman Hollerith (USA) | Electric tabulating machine with punched cards; foundation of **IBM (1924)**. |
| **Mark-I** | 1944 | Howard Aiken & IBM | First fully automatic general-purpose electromechanical computer. |
| **ABC** | 1939–1942 | Atanasoff & Berry (USA) | First electronic digital computer (vacuum tubes, binary math). |
| **ENIAC** | 1946 | Eckert & Mauchly (USA) | **First general-purpose fully electronic digital computer.** |
| **EDVAC / EDSAC** | 1945 / 1949 | Von Neumann / Wilkes | First operational stored-program electronic computers. |
| **UNIVAC-I** | 1951 | Eckert & Mauchly / Remington | **First commercially available mass-produced computer.** |
| **Intel 4004** | 1971 | Ted Hoff & Federico Faggin | First single-chip 4-bit commercial microprocessor. |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_ANGLE',
        title: 'High-Yield Examiner Traps & Distinction Matrix',
        body: `### Critical Examiner Traps:
- **Trap 1: Father of Computers vs Modern Computer Science:** **Charles Babbage** is the *"Father of Computers"*, while **Alan Turing** is the *"Father of Modern Computer Science / AI"* (Turing Machine concept).
- **Trap 2: First Electronic vs General-Purpose:** The **Atanasoff-Berry Computer (ABC)** was the first *electronic digital computer* (special purpose). **ENIAC** was the first *general-purpose fully electronic digital computer*.
- **Trap 3: First Stored-Program Machine:** While EDVAC introduced the theoretical concept, **EDSAC** (1949, Maurice Wilkes, Cambridge) was the first *practically operational* stored-program computer.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'SUMMARY',
        title: 'Rapid Revision Takeaways',
        body: 'Evolution milestones: Abacus -> Napier\'s Bones (1617) -> Pascaline (1642) -> Babbage Analytical Engine (1834, Store & Mill) -> Ada Lovelace (first programmer) -> Hollerith Tabulator (1890, punch cards, IBM origin) -> ENIAC (1946, first general electronic) -> Von Neumann Stored Program (EDVAC/EDSAC 1949) -> UNIVAC-I (1951, first commercial) -> Intel 4004 (1971, first microprocessor).',
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-COMP-001-01',
        statement: 'The Von Neumann architecture is characterized by storing program instructions and operational data within the same unified primary memory address space.',
        claimType: 'DEFINITION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'CERTAIN',
        locator: 'John von Neumann, First Draft of a Report on the EDVAC (1945)',
        excerpt: 'The orders which control the actions of the machine must be represented in numerical code and stored in the memory alongside numerical data.',
      },
    ],
    examMappings: [
      { examCode: 'ibps-rrb-scale-1', syllabusUnit: 'Computer Knowledge', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'Frequently tested on early inventors, punch card origins, and ENIAC/EDVAC distinctions.' },
      { examCode: 'ibps-po', syllabusUnit: 'Reasoning & Computer Aptitude', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'Core architecture and historical milestone MCQs.' },
    ],
    revisionUnits: [
      { type: 'KEY_TAKEAWAY', content: 'Charles Babbage engineered the Analytical Engine with Store (RAM) and Mill (ALU); Ada Lovelace wrote the first program; Von Neumann unified program and data in memory.', priority: 'HIGH', order: 1 },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which of the following early calculating machines is considered the architectural direct ancestor of modern digital computers due to its conceptual separation of "Store" and "Mill"?',
        options: ['Pascaline', 'Napier\'s Bones', 'Analytical Engine', 'Difference Engine', 'Jacquard Loom'],
        correctAnswer: 'Analytical Engine',
        explanation: 'Charles Babbage\'s Analytical Engine (1834–1842) was the first general-purpose design containing a "Store" (memory) and a "Mill" (arithmetic logic unit), matching modern CPU architecture.',
        trapExplanation: 'Option D (Difference Engine) was a special-purpose polynomial difference machine; only the Analytical Engine featured general-purpose stored programming.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-COMP-002',
    slug: 'cpu-internals-machine-cycle-and-system-bus',
    title: 'CPU Internals, Machine Instruction Cycle & The Tri-Partite System Bus',
    shortDefinition: 'Internal architecture of the Central Processing Unit comprising the Arithmetic Logic Unit (ALU), Control Unit (CU), and high-speed registers, synchronized by the system clock and communicating across the Address, Data, and Control Buses.',
    difficulty: 'INTERMEDIATE',
    order: 2,
    topicSlug: 'computer-foundations-evolution-and-hardware-architecture',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Triad of the Central Processing Unit',
        body: 'The Central Processing Unit (CPU) executes all digital operations via three coordinated internal organs: the **Arithmetic Logic Unit (ALU)** (executes arithmetic calculations and Boolean logic comparisons), the **Control Unit (CU)** (fetches, decodes, and directs signal traffic across the system), and **Internal Registers** (sub-nanosecond temporary memory cells on the CPU die).',
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'The Four-Phase Instruction Cycle & System Bus Dynamics',
        body: `### The Instruction (Machine) Cycle:
1. **Fetch:** Control Unit retrieves the instruction address from the **Program Counter (PC)**, loads it into the **MAR**, asserts a memory read signal, and moves the instruction from RAM into the **MBR/MDR**, loading it into the **Instruction Register (IR)**. The PC is automatically incremented.
2. **Decode:** The instruction decoder translates the opcode and determines required data operands.
3. **Execute:** ALU carries out arithmetic or logical operations on operands.
4. **Store (Write-Back):** Results from the **Accumulator (AC)** or ALU are written back to registers or RAM.

### The Tri-Partite System Bus:
- **Address Bus (Strictly Unidirectional):** Transmits memory addresses from CPU to memory/IO. Bus width ($N$ lines) dictates maximum physical memory addressing capacity: $\\mathbf{2^N\\text{ Bytes}}$. (A 32-bit bus addresses max **4 GB**; a 64-bit bus addresses **16 Exabytes**).
- **Data Bus (Bidirectional):** Carries actual data bits between CPU, memory, and peripherals. Width matches processor word size (e.g. 64-bit).
- **Control Bus (Bidirectional):** Transmits timing, synchronization, and command signals (Memory Read/Write, Interrupts, Clock pulses).`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_ANGLE',
        title: 'Core Examiner Traps on Registers & Buses',
        body: `### High-Yield Traps:
- **Trap 1: Direction of Buses:** The **Address Bus is strictly UNIDIRECTIONAL** (originates exclusively from CPU). The Data Bus and Control Bus are **BIDIRECTIONAL**.
- **Trap 2: Program Counter (PC):** The PC does NOT hold the current instruction; it holds the address of the **NEXT instruction to be fetched and executed**.
- **Trap 3: Accumulator Location:** The Accumulator (AC) is located inside the **ALU/CPU**, NOT in main system RAM.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'SUMMARY',
        title: 'Rapid Recall Summary',
        body: 'CPU = ALU + CU + Registers. Instruction Cycle = Fetch -> Decode -> Execute -> Store. PC holds next instruction address; IR holds current instruction; MAR holds memory address; MDR holds memory data; AC holds math results. Address bus = unidirectional ($2^N$ addressable bytes); Data bus = bidirectional.',
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-COMP-002-01',
        statement: 'The width of the CPU address bus determines the maximum addressable physical memory capacity of the computer system according to the formula 2^N bytes.',
        claimType: 'RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'CERTAIN',
        locator: 'Patterson & Hennessy, Computer Organization and Design (6th Ed)',
        excerpt: 'The number of lines in the address bus determines the size of the address space.',
      },
    ],
    examMappings: [
      { examCode: 'ibps-rrb-scale-1', syllabusUnit: 'Computer Knowledge', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'Direct questions on PC, IR, MAR registers and bus directionality.' },
      { examCode: 'sbi-po', syllabusUnit: 'Reasoning & Computer Aptitude', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'Tested in computer architecture and bus width calculations.' },
    ],
    revisionUnits: [
      { type: 'KEY_TAKEAWAY', content: 'Address bus is unidirectional ($2^{32} = 4\\text{ GB}$ limit). PC holds next instruction; IR holds current instruction.', priority: 'HIGH', order: 1 },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which internal CPU register stores the memory address of the next instruction waiting to be fetched and executed by the Control Unit?',
        options: ['Instruction Register (IR)', 'Memory Buffer Register (MBR)', 'Program Counter (PC)', 'Accumulator (AC)', 'Memory Address Register (MAR)'],
        correctAnswer: 'Program Counter (PC)',
        explanation: 'The Program Counter (PC) automatically tracks execution by holding the memory address of the next sequential instruction to be fetched.',
        trapExplanation: 'The Instruction Register (IR) holds the *current* instruction being decoded, while the PC holds the *next* instruction.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-COMP-003',
    slug: 'firmware-boot-lifecycle-bios-uefi-and-post',
    title: 'Firmware Boot Lifecycle: BIOS vs UEFI, MBR vs GPT & The POST Routine',
    shortDefinition: 'The hardware initialization lifecycle from power application to OS kernel handoff, contrasting legacy 16-bit BIOS with modern 64-bit UEFI, MBR vs GPT partitioning schemas, and Power-On Self-Test (POST) diagnostic error routines.',
    difficulty: 'INTERMEDIATE',
    order: 3,
    topicSlug: 'computer-foundations-evolution-and-hardware-architecture',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Hardware Initialization & Non-Volatile Firmware',
        body: 'Upon cold power application, system RAM is empty. The CPU initializes by executing firmware hardcoded into non-volatile motherboard ROM/Flash. This firmware initiates the **Power-On Self-Test (POST)** to verify hardware viability before handing control to the OS bootstrap loader.',
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'BIOS vs UEFI & Partitioning Architecture',
        body: `| Parameter | Legacy BIOS | Modern UEFI |
| :--- | :--- | :--- |
| **Processor Mode** | 16-bit Real Mode (1 MB address limit) | 32-bit or 64-bit Protected Mode |
| **Partition Table** | **Master Boot Record (MBR)** | **GUID Partition Table (GPT)** |
| **Maximum Disk Size** | **2.2 Terabytes (TB)** | **9.4 Zettabytes (ZB)** ($2^{64}$ sectors) |
| **Max Primary Partitions**| **4 Primary Partitions** | Up to **128 Primary Partitions** |
| **Security** | None (vulnerable to bootkits) | **Secure Boot** (cryptographic signature verification) |

### Cold Boot vs Warm Boot:
- **Cold Boot (Hard Boot):** Powering ON a computer from a complete electrical shutdown state. Triggers full power surge stabilization, complete POST hardware checks, and cold bootstrap loading.
- **Warm Boot (Soft Boot):** Restarting an operating computer without cutting electrical power (\`Ctrl + Alt + Del\` or OS Restart). Re-initializes OS kernel while skipping extensive POST diagnostic routines.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_ANGLE',
        title: 'Examiner Traps on CMOS & MBR Limits',
        body: `### Traps to Avoid:
- **Trap 1: BIOS vs CMOS:** BIOS is **firmware code** stored in non-volatile ROM/Flash. CMOS is **volatile memory** storing user configuration settings and date/time, kept alive by the **CR2032 3V lithium battery**.
- **Trap 2: MBR 2.2 TB Ceiling:** MBR utilizes 32-bit sector addressing ($2^{32} \\times 512\\text{ bytes} = 2.19\\text{ TB}$). Drives larger than 2.2 TB require **GPT**.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'SUMMARY',
        title: 'Rapid Review',
        body: 'POST tests hardware (CPU, RAM, GPU) -> loads MBR/GPT -> bootstrap loader starts OS. BIOS = 16-bit, MBR, max 2.2 TB, 4 partitions. UEFI = 64-bit, GPT, max 9.4 ZB, 128 partitions, Secure Boot. CMOS battery = CR2032. Cold boot = full POST; Warm boot = skips POST.',
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-COMP-003-01',
        statement: 'Legacy Master Boot Record (MBR) partitioning is mathematically limited to a maximum disk volume size of 2.2 Terabytes due to 32-bit sector addressing.',
        claimType: 'RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'CERTAIN',
        locator: 'UEFI Specification Version 2.10 (2024)',
        excerpt: 'MBR partition tables use 32-bit logical block addressing, capping disk capacity at 2.2 TB with 512-byte sectors.',
      },
    ],
    examMappings: [
      { examCode: 'ibps-rrb-scale-1', syllabusUnit: 'Computer Knowledge', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'Frequent questions on Cold vs Warm boot, CMOS battery, and MBR limits.' },
    ],
    revisionUnits: [
      { type: 'KEY_TAKEAWAY', content: 'BIOS uses MBR (max 2.2 TB, 4 partitions); UEFI uses GPT (max 9.4 ZB, 128 partitions). Cold boot runs full POST; warm boot skips it.', priority: 'HIGH', order: 1 },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'What is the maximum disk storage capacity natively supported by a drive initialized with the legacy Master Boot Record (MBR) partition style?',
        options: ['1.0 TB', '2.2 TB', '4.0 TB', '8.5 TB', '16.0 TB'],
        correctAnswer: '2.2 TB',
        explanation: 'Because MBR partition tables allocate only 32 bits for sector addressing, $2^{32} \\times 512\\text{ bytes} = 2.199\\text{ TB} \\approx 2.2\\text{ TB}$. Larger drives require GUID Partition Table (GPT).',
        trapExplanation: '4.0 TB is a common misconception linked to FAT32 4 GB file limits; the physical disk limit of MBR is strictly 2.2 TB.',
        difficulty: 'MEDIUM',
      },
    ],
  },

  // =========================================================================
  // TOPIC 2: Peripheral Systems & Display/Printing Technologies
  // =========================================================================
  {
    id: 'CON-COMP-004',
    slug: 'input-devices-optical-scanning-and-biometrics',
    title: 'Input Devices, Optical Sensing & Advanced Banking Data Capture (MICR, OCR, OMR, QR)',
    shortDefinition: 'Survey of computer input transducers: QWERTY keyboard functional architecture, pointing mechanics, and high-security automated data capture systems in banking including MICR (cheques), OCR, OMR, and 2D QR Codes.',
    difficulty: 'INTERMEDIATE',
    order: 4,
    topicSlug: 'peripherals-and-display-printing-technologies',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Transducers of Analog Human Activity into Binary Signals',
        body: 'Input devices convert physical human touch, optical reflections, magnetic charges, and biometric wave patterns into machine-readable digital data. In banking operations, automated data capture devices (MICR, OCR, Biometric readers) eliminate manual data entry latency and prevent fraudulent tampering.',
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Master Matrix of Automated Data Capture Technologies',
        body: `| Technology | Full Name | Operating Physics | Core Banking / Exam Use |
| :--- | :--- | :--- | :--- |
| **MICR** | **Magnetic Ink Character Recognition** | Reads characters printed in magnetic iron-oxide ink using **E-13B** font via magnetic flux induction. | **Bank Cheque Clearing (CTS):** 9-digit code (Digits 1–3 = City, 4–6 = Bank, 7–9 = Branch). Fraud-resistant. |
| **OCR** | **Optical Character Recognition** | Converts scanned images of printed/handwritten text into editable digital Unicode/ASCII text. | Automated KYC document digitization, passport scanning. |
| **OMR** | **Optical Mark Recognition** | Senses the presence or absence of dark marks by measuring reflected light differential. | Objective exam answer evaluation, survey forms. |
| **Barcode** | **1D Linear Barcode** | Alternating parallel dark bars and light spaces read via laser diode beam. | Retail POS product pricing (UPC, EAN), parcel courier tracking. |
| **QR Code** | **Quick Response Code (2D)** | 2D matrix barcode (Denso Wave 1994) with 3 corner position squares. | **UPI / BharatQR payments:** Stores up to 7,089 numbers; $360^\\circ$ omnidirectional reading. |

### Keyboard Classifications:
- **Modifier Keys:** Keys with no independent action that modify other keys: **\`Ctrl\`**, **\`Alt\`**, **\`Shift\`**.
- **Toggle Keys:** Keys switching between two states with LED indicators: **\`Caps Lock\`**, **\`Num Lock\`**, **\`Scroll Lock\`**.
- **Special Shortcuts:** \`Shift + F7\` = Thesaurus (Synonyms); \`F7\` = Spell Check; \`F2\` = Rename / Edit cell.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_ANGLE',
        title: 'Banking Traps on MICR & Keyboard Keys',
        body: `### Crucial Exam Traps:
- **Trap 1: The 9-Digit MICR Breakdown:** Digits 1–3 = **City Code** (aligns with postal PIN code); Digits 4–6 = **Bank Code**; Digits 7–9 = **Branch Code**.
- **Trap 2: Backspace vs Delete:** **Backspace** deletes characters to the **LEFT** of the cursor. **Delete** deletes characters to the **RIGHT** of the cursor.
- **Trap 3: 1D vs 2D:** Barcode is **1-Dimensional** (linear); QR Code is **2-Dimensional** (matrix grid).`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'SUMMARY',
        title: 'Rapid Review Card',
        body: 'Input: Keyboard (Modifier = Ctrl/Alt/Shift, Toggle = Caps/Num/Scroll), Mouse (Douglas Engelbart 1964). Automated capture: MICR = 9-digit iron oxide ink on cheques (City-Bank-Branch); OMR = exam sheets; OCR = text conversion; QR Code = 2D matrix by Denso Wave.',
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-COMP-004-01',
        statement: 'A standard Indian bank cheque MICR code consists of exactly 9 digits subdivided into City Code (first 3), Bank Code (middle 3), and Branch Code (final 3).',
        claimType: 'RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'CERTAIN',
        locator: 'Reserve Bank of India, Cheque Truncation System (CTS) Procedural Guidelines',
        excerpt: 'The MICR band comprises a 9-digit numeric code representing City, Bank, and Branch.',
      },
    ],
    examMappings: [
      { examCode: 'ibps-rrb-scale-1', syllabusUnit: 'Computer Knowledge', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'Guaranteed questions on MICR digit structure, modifier keys, and toggle keys.' },
    ],
    revisionUnits: [
      { type: 'KEY_TAKEAWAY', content: 'MICR = 9 digits (City, Bank, Branch). Modifier keys = Ctrl, Alt, Shift. Toggle keys = Caps, Num, Scroll lock.', priority: 'HIGH', order: 1 },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'In a 9-digit Indian bank cheque MICR code, what do the middle three digits (digits 4, 5, and 6) represent?',
        options: ['City Code', 'Account Type Code', 'Bank Code', 'Branch Code', 'Cheque Serial Number'],
        correctAnswer: 'Bank Code',
        explanation: 'In MICR: Digits 1–3 designate the City (aligning with postal PIN code), Digits 4–6 designate the specific Bank, and Digits 7–9 designate the specific Branch.',
        trapExplanation: 'City Code is digits 1–3, and Branch Code is digits 7–9. Digits 4–6 specifically denote the Bank.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-COMP-005',
    slug: 'output-devices-display-technologies-and-printing-systems',
    title: 'Output Devices, Visual Display Technologies & Impact vs Non-Impact Printing Systems',
    shortDefinition: 'Engineering dissection of soft-copy (CRT, LCD, LED, OLED displays) and hard-copy (Impact vs Non-Impact printers, vector plotters) output devices, resolution metrics (DPI, Pixel Pitch), and speed standards (CPS, LPM, PPM).',
    difficulty: 'INTERMEDIATE',
    order: 5,
    topicSlug: 'peripherals-and-display-printing-technologies',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Rendering Digital Bits into Physical Sensory Output',
        body: 'Output devices transform processed binary data into human-perceptible visual, auditory, or physical forms. Output is broadly categorized as **Soft Copy** (volatile visual/auditory display on screens/speakers) and **Hard Copy** (permanent physical print on paper).',
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Printer Taxonomy: Impact vs Non-Impact Systems',
        body: `| Feature | Impact Printers | Non-Impact Printers |
| :--- | :--- | :--- |
| **Operating Principle** | Mechanical pins/hammers strike an inked ribbon against paper. | Sprays liquid ink, applies electrostatic toner powder, or uses thermal heat. |
| **Mechanical Contact** | **Direct striking contact** with paper. | **Zero mechanical striking contact**. |
| **Acoustic Noise** | Extremely loud and noisy. | Virtually silent operation. |
| **Speed Units** | **CPS** (Characters/Sec) or **LPM** (Lines/Min). | **PPM** (Pages Per Minute). |
| **Carbon Copies** | **YES.** Can produce multipart carbon copies via physical striking force. | **NO.** Cannot produce multipart carbon copies in a single pass. |
| **Resolution Metric**| Low resolution; visible dot patterns. | Measured in **DPI (Dots Per Inch)** (1200–4800 DPI). |
| **Types** | Dot Matrix (DMP), Daisy Wheel, Drum, Chain. | **Laser**, **Inkjet**, **Thermal** (ATM receipts). |

### Monitor Engineering Metrics:
- **Pixel (Picture Element):** Smallest resolvable physical point of a display.
- **Dot Pitch:** Distance between adjacent pixels of the same color in millimeters. **Smaller dot pitch = sharper image.**
- **Refresh Rate:** Redraw frequency per second, measured in **Hertz (Hz)** (e.g. 60 Hz, 144 Hz).
- **Plotter:** Specialized vector graphics output device using mechanical pens to draw continuous blueprint lines for CAD/GIS mapping.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_ANGLE',
        title: 'High-Yield Traps on Printers & Displays',
        body: `### Core Examiner Traps:
- **Trap 1: The Carbon Copy Question:** If an exam asks which printer can produce **carbon duplicate copies**, the answer is ALWAYS an **Impact Printer (Dot Matrix)** because non-impact printers exert zero physical striking pressure.
- **Trap 2: Printer Speed Metrics:** Dot Matrix = **CPS**; Line Printer = **LPM**; Laser/Inkjet = **PPM**.
- **Trap 3: ATM Receipt Printing:** ATM receipts are generated by **Thermal Printers** using heat-sensitive paper, NOT inkjet or dot matrix.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'SUMMARY',
        title: 'Quick Revision',
        body: 'Soft copy = screen/audio; Hard copy = print. Impact = Dot Matrix (CPS, pins strike ribbon, carbon copies possible, loud). Non-impact = Laser (PPM, toner, fuser drum), Inkjet (PPM, liquid CMYK), Thermal (heat-sensitive paper, ATM receipts). Resolution = DPI. Vector blueprints = Plotters.',
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-COMP-005-01',
        statement: 'Impact printers are the only category of printers capable of producing multipart carbon copies because they utilize physical mechanical striking force against an inked ribbon.',
        claimType: 'RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'CERTAIN',
        locator: 'Goel, Computer Fundamentals (Pearson Education)',
        excerpt: 'Because non-impact printers do not strike the paper, they cannot produce carbon copies.',
      },
    ],
    examMappings: [
      { examCode: 'ibps-rrb-scale-1', syllabusUnit: 'Computer Knowledge', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'Frequent questions on Impact vs Non-impact, DPI, and carbon copies.' },
    ],
    revisionUnits: [
      { type: 'KEY_TAKEAWAY', content: 'Impact (Dot Matrix) = CPS, carbon copies possible. Non-Impact (Laser/Inkjet/Thermal) = PPM, silent. Resolution measured in DPI.', priority: 'HIGH', order: 1 },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which of the following printer types is capable of producing carbon duplicate copies of invoices and railway receipts in a single printing pass?',
        options: ['Laser Printer', 'Thermal Printer', 'Dot Matrix Printer', 'Inkjet Printer', 'Photographic Plotter'],
        correctAnswer: 'Dot Matrix Printer',
        explanation: 'Dot Matrix Printers are impact printers whose pins physically strike an inked ribbon against paper, allowing the mechanical pressure to transfer through carbon copy sheets.',
        trapExplanation: 'Laser, Thermal, and Inkjet are non-impact printers applying no mechanical pressure, making simultaneous carbon duplication impossible.',
        difficulty: 'EASY',
      },
    ],
  },

  // =========================================================================
  // TOPIC 3: Memory Hierarchy, Cache & Storage Systems
  // =========================================================================
  {
    id: 'CON-COMP-006',
    slug: 'memory-hierarchy-sram-dram-cache-and-virtual-memory',
    title: 'The Memory Hierarchy: SRAM vs DRAM, Multi-Level Cache & Virtual Memory Paging',
    shortDefinition: 'The speed, capacity, and cost trade-offs of computer memory: units of storage measurement (Bit to Yottabyte), volatile primary memory (SRAM vs DRAM), multi-level Cache architecture (L1/L2/L3, Locality of Reference), and Virtual Memory OS paging.',
    difficulty: 'ADVANCED',
    order: 6,
    topicSlug: 'memory-hierarchy-cache-and-storage-systems',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Unavoidable Physics Trade-Off of Computer Storage',
        body: 'Computer memory is governed by a fundamental engineering trade-off: memory is either blindingly fast and astronomically expensive per bit (SRAM registers), or vast and slow (secondary flash/magnetic disks). The memory hierarchy organizes storage tiers so that the CPU executes at sub-nanosecond speeds while retaining massive gigabytes of data.',
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'SRAM vs DRAM & The Cache Hierarchy',
        body: `| Parameter | SRAM (Static RAM) | DRAM (Dynamic RAM) |
| :--- | :--- | :--- |
| **Cell Construction** | **Flip-Flops (4 to 6 Transistors)** per bit. | **1 Transistor + 1 Tiny Capacitor** per bit. |
| **Refresh Requirement** | **NO REFRESHING REQUIRED.** | **REQUIRES CONTINUOUS PERIODIC REFRESH** (capacitors leak charge). |
| **Speed** | Blindingly fast (**1 to 5 ns**). | Moderate (**10 to 50 ns**). |
| **Primary System Use** | **CPU Cache Memory (L1, L2, L3).** | **Primary System RAM** (DDR4, DDR5). |

### Cache & Locality of Reference:
- **Temporal Locality:** Data accessed recently is likely to be accessed again soon (loops, variables).
- **Spatial Locality:** Data adjacent to recently accessed addresses is likely to be accessed soon (arrays, sequential code).
- **Levels:** L1 (fastest, inside core die), L2 (per core), L3 (massive shared cache across all cores).

### Virtual Memory & Paging:
- An OS memory management technique using secondary storage (SSD/HDD) as an extension of physical RAM.
- **Paging:** Memory divided into fixed **Pages** (virtual) and **Frames** (physical).
- **Page Fault:** CPU references a page not currently in RAM; OS loads it from the swap file (\`pagefile.sys\`).
- **Thrashing:** Catastrophic state where the OS spends 100% of CPU time swapping pages rather than executing instructions.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_ANGLE',
        title: 'Storage Measurement Units & Exam Traps',
        body: `### Memory Units Scale:
$$\\mathbf{1\\text{ Nibble} = 4\\text{ Bits}} \\quad \\big| \\quad \\mathbf{1\\text{ Byte} = 8\\text{ Bits} = 2\\text{ Nibbles}}$$
$$\\mathbf{1\\text{ KB} = 1,024\\text{ Bytes}} \\quad \\big| \\quad \\mathbf{1\\text{ MB} = 1,024\\text{ KB}} \\quad \\big| \\quad \\mathbf{1\\text{ GB} = 1,024\\text{ MB}}$$
$$\\mathbf{1\\text{ TB} = 1,024\\text{ GB}} \\quad \\big| \\quad \\mathbf{1\\text{ PB} = 1,024\\text{ TB}} \\quad \\big| \\quad \\mathbf{1\\text{ EB} = 1,024\\text{ PB}} \\quad \\big| \\quad \\mathbf{1\\text{ ZB} = 1,024\\text{ EB}}$$

### Critical Exam Traps:
- **Trap 1: DRAM Refreshing:** DRAM *must be periodically refreshed* because its capacitors leak electrical charge. SRAM does not require refreshing.
- **Trap 2: Cache Memory Material:** Cache memory is made of **SRAM**, NOT DRAM.
- **Trap 3: Virtual Memory:** Virtual memory is NOT physical RAM; it is allocated on **Secondary Storage (Hard Disk / SSD)**.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'SUMMARY',
        title: 'Quick Revision Summary',
        body: 'Pyramid: Registers -> Cache (SRAM, L1/L2/L3) -> Main Memory (DRAM, periodic refresh) -> Secondary (SSD/HDD) -> Archival (Tape). 1 Nibble = 4 bits; 1 Byte = 8 bits. DDR transfers data on both clock edges. Virtual memory uses swap file for paging; excessive swapping causes thrashing.',
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-COMP-006-01',
        statement: 'Dynamic Random Access Memory (DRAM) requires continuous periodic electrical refresh cycles because each memory cell stores its bit as an electrical charge in a capacitor that naturally leaks charge over time.',
        claimType: 'CAUSE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'CERTAIN',
        locator: 'Tanenbaum & Austin, Structured Computer Organization (6th Ed)',
        excerpt: 'Because the charge on a DRAM capacitor leaks off in a few milliseconds, dynamic RAM must be refreshed periodically.',
      },
    ],
    examMappings: [
      { examCode: 'ibps-rrb-scale-1', syllabusUnit: 'Computer Knowledge', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'Core questions on SRAM vs DRAM, Nibble definitions, and Thrashing.' },
      { examCode: 'ibps-po', syllabusUnit: 'Reasoning & Computer Aptitude', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'Virtual memory and cache locality questions.' },
    ],
    revisionUnits: [
      { type: 'KEY_TAKEAWAY', content: 'SRAM = Cache (flip-flops, no refresh). DRAM = Main RAM (capacitors, periodic refresh). 1 Nibble = 4 bits. Thrashing = excessive paging.', priority: 'HIGH', order: 1 },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Why does Dynamic Random Access Memory (DRAM) require periodic electrical refreshing thousands of times each second, unlike Static RAM (SRAM)?',
        options: ['Because it uses vacuum tubes', 'Because it stores bits in capacitors that continuously leak electrical charge', 'Because it uses optical lasers', 'Because it operates under magnetic flux induction', 'Because it lacks an internal clock signal'],
        correctAnswer: 'Because it stores bits in capacitors that continuously leak electrical charge',
        explanation: 'Each DRAM cell consists of 1 transistor and 1 capacitor. Capacitors naturally leak electrical charge within milliseconds and must be refreshed to preserve stored data bits.',
        trapExplanation: 'SRAM uses flip-flops (transistors) that hold charge stably without capacitors, requiring zero refreshing as long as power is sustained.',
        difficulty: 'MEDIUM',
      },
    ],
  },

  {
    id: 'CON-COMP-007',
    slug: 'auxiliary-storage-magnetic-hdd-optical-and-solid-state-ssd',
    title: 'Auxiliary Storage Engineering: Magnetic HDD Geometry, Optical Discs & Solid-State NVMe SSDs',
    shortDefinition: 'Physical and logical analysis of non-volatile secondary storage: hard disk drive mechanical geometry (platters, tracks, sectors, cylinders, seek time), optical laser physics (CD, DVD, Blu-ray pits and lands), and semiconductor NAND flash SSDs.',
    difficulty: 'INTERMEDIATE',
    order: 7,
    topicSlug: 'memory-hierarchy-cache-and-storage-systems',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Non-Volatile Secondary Storage Technologies',
        body: 'Secondary storage holds permanent system files, applications, and customer databases when power is switched off. Storage media has transitioned from mechanical magnetic platters and spinning optical laser discs to non-volatile semiconductor NAND Flash memory.',
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'HDD Mechanical Geometry & Optical Storage Standards',
        body: `### Hard Disk Drive (HDD) Geometry:
- **Platters:** Aluminum/glass disks spinning at 5,400 to 15,000 RPM.
- **Tracks:** Concentric circular recording rings on platter surfaces.
- **Sectors:** Pie-shaped segments of a track; the smallest physically addressable unit (standard **512 Bytes**; Advanced Format **4 KB**).
- **Cylinder:** The vertical set of all tracks across all platters at the identical radial distance.
- **Seek Time:** Time for read/write head to move to target track (slowest mechanical latency, 3–10 ms).
- **Rotational Latency:** Time for target sector to spin under head (half revolution average).

### Optical Storage Comparison:
| Optical Media | Capacity | Laser Type & Wavelength |
| :--- | :--- | :--- |
| **CD (Compact Disc)** | **700 MB** | Infrared Laser (**780 nm**) |
| **DVD (Digital Versatile Disc)**| **4.7 GB** (SL) / **8.5 GB** (DL) | Red Laser (**650 nm**) |
| **Blu-ray Disc (BD)** | **25 GB** (SL) / **50 GB** (DL) | **Blue-Violet Laser (405 nm)** |

### Solid-State Drives (SSD):
- Contain zero moving parts; data stored in non-volatile NAND Flash cells (SLC, MLC, TLC, QLC).
- **NVMe PCIe SSD:** Connects directly across high-speed PCIe lanes, delivering throughput from 3,500 MB/s to over 14,000 MB/s (vs legacy SATA III capped at 600 MB/s).`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_ANGLE',
        title: 'Critical Storage Traps',
        body: `### High-Yield Traps:
- **Trap 1: Seek Time vs Latency:** **Seek Time** is moving the head to the track. **Rotational Latency** is waiting for the platter to rotate the sector under the head.
- **Trap 2: Blu-ray Laser:** Blu-ray uses a **Blue-Violet Laser (405 nm)**, NOT a red or infrared laser.
- **Trap 3: WORM Media:** **WORM** stands for **Write Once, Read Many** (CD-R, DVD-R).`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'SUMMARY',
        title: 'Rapid Storage Review',
        body: 'HDD: Platters, Tracks, Sectors (512 B), Cylinders. Seek time = head movement; Latency = platter rotation. Optical: CD = 700 MB (780 nm infrared), DVD = 4.7 GB (650 nm red), Blu-ray = 25 GB (405 nm blue-violet). SSD: NAND flash, zero moving parts, NVMe PCIe speeds $>7,000\\text{ MB/s}$.',
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-COMP-007-01',
        statement: 'Blu-ray discs achieve substantially higher storage capacity than DVDs by utilizing a shorter wavelength blue-violet laser (405 nm) that enables tighter optical track pitch and smaller pits.',
        claimType: 'CAUSE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'CERTAIN',
        locator: 'Blu-ray Disc Association Physical Format Specifications',
        excerpt: 'By using a 405 nm blue-violet laser diode, the beam spot size is reduced, allowing a data capacity of 25 GB per layer.',
      },
    ],
    examMappings: [
      { examCode: 'ibps-rrb-scale-1', syllabusUnit: 'Computer Knowledge', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'Questions on CD/DVD/Blu-ray capacities, WORM, and Seek Time.' },
    ],
    revisionUnits: [
      { type: 'KEY_TAKEAWAY', content: 'CD = 700 MB. DVD = 4.7 GB. Blu-ray = 25 GB (405 nm blue-violet laser). Seek time = moving head to track.', priority: 'HIGH', order: 1 },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which optical storage format utilizes a 405 nm blue-violet laser diode to achieve a standard single-layer storage capacity of 25 Gigabytes?',
        options: ['Compact Disc (CD)', 'Digital Versatile Disc (DVD)', 'Blu-ray Disc (BD)', 'LaserDisc', 'Holographic Versatile Disc'],
        correctAnswer: 'Blu-ray Disc (BD)',
        explanation: 'Blu-ray utilizes a shorter wavelength 405 nm blue-violet laser, allowing a much smaller laser focus spot that packs 25 GB on a single 120 mm layer.',
        trapExplanation: 'CD uses 780 nm infrared (700 MB), and DVD uses 650 nm red laser (4.7 GB).',
        difficulty: 'EASY',
      },
    ],
  },

  // =========================================================================
  // TOPIC 4: Operating Systems, Process Management & Logic Design
  // =========================================================================
  {
    id: 'CON-COMP-008',
    slug: 'operating-systems-architecture-scheduling-and-file-systems',
    title: 'Operating System Architecture: Kernel Primitives, CPU Scheduling & FAT32 vs NTFS',
    shortDefinition: 'Core software engineering principles of Operating Systems: Kernel vs Shell, language translators (Assembler, Compiler, Interpreter), process scheduling algorithms (FCFS, SJF, Round Robin), and file systems (FAT32 vs NTFS).',
    difficulty: 'INTERMEDIATE',
    order: 8,
    topicSlug: 'operating-systems-process-management-and-logic-design',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Master Resource Manager of Computing',
        body: 'The Operating System (OS) manages hardware resources (CPU, RAM, storage, I/O devices) and provides an execution environment for applications. The innermost engine is the **Kernel** (monitors memory, processes, and drivers), while the **Shell** (CLI or GUI) provides the user interaction layer.',
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Process Scheduling & Translators Matrix',
        body: `### Language Translators:
- **Assembler:** Translates Assembly language mnemonics (\`MOV\`, \`ADD\`) to machine binary.
- **Compiler:** Translates the **entire program source code at once** into standalone machine object code (\`.exe\`). Discloses all syntax errors in a consolidated list. (C, C++, Rust).
- **Interpreter:** Translates and executes source code **line-by-line in real time**. Stops immediately at first error; slower runtime. (Python, JavaScript).

### CPU Scheduling Algorithms:
1. **FCFS (First-Come, First-Served):** Non-preemptive. Suffers from the **Convoy Effect**.
2. **SJF (Shortest Job First):** Optimal waiting time; may cause starvation for long jobs.
3. **Round Robin (RR):** Preemptive time-sharing. Each process receives a fixed **Time Quantum** (e.g. 10 ms).

### File Systems: FAT32 vs NTFS:
| Parameter | FAT32 | NTFS |
| :--- | :--- | :--- |
| **Max Single File Size** | **Strictly 4 Gigabytes (GB)** | **16 Terabytes (TB)** |
| **Security & Permissions**| None | **Native File Permissions (ACLs) & EFS Encryption** |
| **Fault Tolerance** | Prone to corruption on power cut | **Journaling File System** (logs transactions) |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_ANGLE',
        title: 'Examiner Traps on File Limits & Round Robin',
        body: `### Traps to Watch:
- **Trap 1: The 4 GB FAT32 Limit:** You CANNOT copy a single file larger than **4 GB** onto a FAT32-formatted USB drive, regardless of available free space.
- **Trap 2: Round Robin Metric:** The execution time allocated to each process in Round Robin is formally known as a **Time Quantum** (or Time Slice).
- **Trap 3: Compiler vs Interpreter:** Compilers check the *entire program together*; interpreters stop at the *first error*.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'SUMMARY',
        title: 'Quick OS Summary',
        body: 'Kernel = core memory/process manager; Shell = user interface (CLI/GUI). Translators: Assembler (assembly), Compiler (whole program -> .exe), Interpreter (line-by-line). Scheduling: Round Robin uses Time Quantum. File Systems: FAT32 capped at 4 GB single file; NTFS supports journaling, encryption, and terabytes.',
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-COMP-008-01',
        statement: 'The FAT32 file system cannot store any single individual file whose size exceeds 4 Gigabytes minus 1 byte due to 32-bit file length fields in directory entries.',
        claimType: 'RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'CERTAIN',
        locator: 'Microsoft FAT32 File System Specification',
        excerpt: 'The maximum possible size for a file on a FAT32 volume is 4 GiB minus 1 byte (4,294,967,295 bytes).',
      },
    ],
    examMappings: [
      { examCode: 'ibps-rrb-scale-1', syllabusUnit: 'Computer Knowledge', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'Core questions on Compiler vs Interpreter, FAT32 4 GB limit, and Round Robin.' },
    ],
    revisionUnits: [
      { type: 'KEY_TAKEAWAY', content: 'Compiler = whole code at once. Interpreter = line-by-line. FAT32 max file = 4 GB. Round Robin = Time Quantum.', priority: 'HIGH', order: 1 },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'What is the absolute maximum individual file size that can be stored on a storage partition formatted with the FAT32 file system?',
        options: ['2 GB', '4 GB', '8 GB', '16 GB', '2 TB'],
        correctAnswer: '4 GB',
        explanation: 'FAT32 allocates 32 bits to record file size in directory tables, creating an absolute hard mathematical file size ceiling of $2^{32} - 1\\text{ bytes} \\approx 4\\text{ GB}$.',
        trapExplanation: '2 TB is the maximum volume size for FAT32, but the maximum single file size is strictly 4 GB.',
        difficulty: 'MEDIUM',
      },
    ],
  },

  {
    id: 'CON-COMP-009',
    slug: 'digital-logic-design-number-systems-and-flowcharts',
    title: 'Digital Logic Design: Binary Radix Arithmetic, Logic Gates & Standard Flowchart Algorithms',
    shortDefinition: 'Mathematical foundations of digital computers: positional base conversions (Binary, Octal, Hexadecimal), 1\'s and 2\'s complement arithmetic, fundamental and universal logic gates (AND, OR, NOT, NAND, NOR, XOR), and standard ANSI/ISO flowchart geometries.',
    difficulty: 'INTERMEDIATE',
    order: 9,
    topicSlug: 'operating-systems-process-management-and-logic-design',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Binary Radix & Circuit Logic Architecture',
        body: 'Computers represent all numerical, textual, and multimedia data in base-2 binary digits (`0` and `1`). Computational logic operations are carried out by physical arrangements of transistors forming Boolean logic gates, while program logic flows are standardized using formal geometric flowchart algorithms.',
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Number Systems, Logic Gates & Flowchart Symbols',
        body: `### Positional Base Conversions:
- **Binary (Base 2):** \`0, 1\`
- **Octal (Base 8):** \`0 to 7\` (groups of 3 binary bits: $2^3 = 8$)
- **Decimal (Base 10):** \`0 to 9\`
- **Hexadecimal (Base 16):** \`0 to 9, A, B, C, D, E, F\` ($A=10, B=11, C=12, D=13, E=14, F=15$; groups of 4 binary bits)

### 2\'s Complement Representation:
$$\\mathbf{\\text{2\'s Complement} = \\text{1\'s Complement (Invert Bits)} + 1}$$
- Enables CPU ALUs to perform subtraction using standard addition circuitry.

### Master Logic Gates Table:
| Gate | Boolean Equation | Truth Condition |
| :--- | :--- | :--- |
| **AND** | $Y = A \\cdot B$ | Output is 1 **only if ALL inputs are 1**. |
| **OR** | $Y = A + B$ | Output is 1 **if ANY input is 1**. |
| **NOT** | $Y = \\overline{A}$ | Inverts input (0 becomes 1; 1 becomes 0). |
| **NAND** | $Y = \\overline{A \\cdot B}$ | **Universal Gate.** Output is 0 only if all inputs are 1. |
| **NOR** | $Y = \\overline{A + B}$ | **Universal Gate.** Output is 1 only if all inputs are 0. |
| **XOR** | $Y = A \\oplus B$ | Output is 1 if inputs are **DIFFERENT**. |

### Standard Flowchart Symbols (ANSI/ISO):
- **Oval / Rounded Rectangle:** Terminator (Start / Stop).
- **Parallelogram:** Input / Output (Read / Print).
- **Rectangle:** Process / Processing (Calculation: $X = A + B$).
- **Diamond:** Decision (Conditional Branching: Yes/No, True/False).
- **Circle:** On-Page Connector.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_ANGLE',
        title: 'Examiner Traps on Gates & Symbols',
        body: `### Common Traps:
- **Trap 1: Universal Gates:** The ONLY two universal logic gates are **NAND** and **NOR** (any logic circuit can be built exclusively from them).
- **Trap 2: Flowchart Decision:** Decision is ALWAYS a **Diamond**. Input/Output is a **Parallelogram**.
- **Trap 3: Hex Value F:** In hexadecimal, the digit **F represents 15**, and **A represents 10**.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'SUMMARY',
        title: 'Quick Revision Card',
        body: 'Hex = base 16 (0-9, A-F where A=10, F=15). 2\'s complement = invert bits + 1. Universal gates = NAND and NOR. XOR = 1 when inputs differ. Flowchart: Oval = start/stop; Parallelogram = input/output; Rectangle = process; Diamond = decision.',
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-COMP-009-01',
        statement: 'NAND and NOR gates are formally classified as Universal Gates because any Boolean logic function or computational circuit can be implemented entirely using combinations of either gate alone.',
        claimType: 'RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'CERTAIN',
        locator: 'Mano & Ciletti, Digital Design (6th Ed)',
        excerpt: 'The NAND and NOR gates are called universal gates because any digital system can be implemented with them.',
      },
    ],
    examMappings: [
      { examCode: 'ibps-rrb-scale-1', syllabusUnit: 'Computer Knowledge', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'Questions on flowchart symbols, universal gates, and hex conversions.' },
    ],
    revisionUnits: [
      { type: 'KEY_TAKEAWAY', content: 'Universal gates = NAND & NOR. Flowchart: Diamond = Decision, Parallelogram = I/O. Hex A=10, F=15.', priority: 'HIGH', order: 1 },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'In standard ANSI flowchart modeling, which geometric symbol is strictly utilized to represent a conditional branch or decision-making step (e.g. Yes/No)?',
        options: ['Rectangle', 'Parallelogram', 'Oval', 'Diamond', 'Circle'],
        correctAnswer: 'Diamond',
        explanation: 'A Diamond represents a decision or conditional evaluation leading to multiple branching paths (True/False or Yes/No).',
        trapExplanation: 'A Parallelogram represents Input/Output, a Rectangle represents Processing, and an Oval represents Start/Stop.',
        difficulty: 'EASY',
      },
    ],
  },

  // =========================================================================
  // TOPIC 5: Computer Networking, OSI Architecture & Protocols
  // =========================================================================
  {
    id: 'CON-COMP-010',
    slug: 'network-topologies-and-hardware-devices',
    title: 'Network Topologies, Link Density & Physical Network Devices (Hub, Switch, Router)',
    shortDefinition: 'Structural classification of computer networks by geographic scale (PAN, LAN, MAN, WAN) and topology (Star, Bus, Ring, Mesh, Tree), physical link formulas (N(N-1)/2), and hardware devices across the OSI stack (Repeaters, Hubs, Switches, Routers, Gateways).',
    difficulty: 'INTERMEDIATE',
    order: 10,
    topicSlug: 'computer-networking-osi-architecture-and-protocols',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Interconnection of Autonomous Nodes',
        body: 'Computer networks link autonomous computing systems across guided (twisted pair, coaxial, optical fiber) or unguided (wireless radio, microwave) communication channels to share data repositories, peripheral hardware, and transaction clearance processing.',
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Topologies Matrix & Network Devices Dissection',
        body: `### Topologies & Physical Link Density:
- **Star:** All nodes connect to a central **Switch or Hub**. If central hub fails, network fails; node break does not affect others.
- **Bus:** Single shared backbone coaxial cable with terminators. Vulnerable to backbone breaks and packet collisions.
- **Ring:** Nodes in a closed circle; unidirectional token passing.
- **Mesh (Full):** Every node connects directly to every other node.
  $$\\mathbf{\\text{Physical Duplex Cable Links} = \\frac{N(N - 1)}{2}}$$
  *(Example: 6 nodes require $6 \\times 5 / 2 = 15$ cables).* Maximum redundancy, highest cost.

### Physical Networking Devices by OSI Layer:
1. **Repeater (Layer 1):** Regenerates attenuated electrical/optical signals to extend transmission distance.
2. **Hub (Layer 1):** Multi-port repeater. **Blindly broadcasts incoming packets to ALL connected ports.** Single shared collision domain; half-duplex.
3. **Bridge (Layer 2):** Connects two LAN segments; filters traffic using **MAC addresses**. Divides collision domain in two.
4. **Switch (Layer 2 / Layer 3):** Intelligent multi-port bridge. Maintains a **MAC Address CAM Table** and **unicasts frames directly to destination port**. Each port is an isolated collision domain operating in full-duplex.
5. **Router (Layer 3):** Connects distinct logical networks (LAN to Internet). Routes packets using **IP addresses** and dynamic routing tables. **Breaks broadcast domains.**
6. **Gateway (Layers 4–7):** Protocol converter connecting completely incompatible network architectures.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_ANGLE',
        title: 'Examiner Traps on Hub vs Switch & Mesh Formula',
        body: `### High-Yield Traps:
- **Trap 1: Hub vs Switch:** A **Hub broadcasts** packets to EVERY connected device. A **Switch unicasts** packets exclusively to the intended recipient using MAC addresses.
- **Trap 2: Mesh Cable Formula:** Remember $\\mathbf{N(N-1)/2}$. A network of 10 nodes requires $10 \\times 9 / 2 = \\mathbf{45\\text{ cables}}$.
- **Trap 3: MAC vs IP Layer:** MAC addresses operate at **Layer 2 (Data Link)**; IP addresses operate at **Layer 3 (Network)**.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'SUMMARY',
        title: 'Quick Networking Summary',
        body: 'Scale: PAN (<10m) -> LAN (building) -> MAN (city) -> WAN (global). Topologies: Star (central switch), Bus (backbone cable), Ring (token), Mesh ($N(N-1)/2$ links). Devices: Hub = L1 broadcast; Switch = L2 unicast via MAC table; Router = L3 routing via IP; Gateway = protocol converter.',
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-COMP-010-01',
        statement: 'A fully connected mesh network of N autonomous nodes requires exactly N(N-1)/2 physical duplex communication links.',
        claimType: 'RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'CERTAIN',
        locator: 'Forouzan, Data Communications and Networking (5th Ed)',
        excerpt: 'In a fully connected mesh topology, the number of physical links is n(n - 1) / 2.',
      },
    ],
    examMappings: [
      { examCode: 'ibps-rrb-scale-1', syllabusUnit: 'Computer Knowledge', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'Frequent questions on Mesh cable calculation, Hub vs Switch, and Router layers.' },
    ],
    revisionUnits: [
      { type: 'KEY_TAKEAWAY', content: 'Mesh links = N(N-1)/2. Hub broadcasts (L1); Switch unicasts via MAC (L2); Router routes via IP (L3).', priority: 'HIGH', order: 1 },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'How many physical communication cable links are required to interconnect 8 servers in a fully connected physical Mesh network topology?',
        options: ['7', '14', '28', '32', '56'],
        correctAnswer: '28',
        explanation: 'Applying the full mesh formula: $\\frac{N(N - 1)}{2} = \\frac{8 \\times (8 - 1)}{2} = \\frac{8 \\times 7}{2} = 28\\text{ links}$.',
        trapExplanation: 'Option E (56) is $8 \\times 7$ without dividing by 2; Option A (7) is a Star topology ($N-1$).',
        difficulty: 'MEDIUM',
      },
    ],
  },

  {
    id: 'CON-COMP-011',
    slug: 'osi-reference-model-tcp-ip-and-port-protocols',
    title: 'The OSI 7-Layer Model vs TCP/IP Suite & Essential Port Protocols',
    shortDefinition: 'Rigorous protocol architecture: OSI 7-layer reference model vs 4-layer TCP/IP suite, Protocol Data Units (PDUs), TCP (connection-oriented) vs UDP (connectionless), IPv4 vs IPv6 addressing, and the well-known port mappings (FTP, SSH, SMTP, DNS, HTTP, HTTPS, POP3, IMAP).',
    difficulty: 'ADVANCED',
    order: 11,
    topicSlug: 'computer-networking-osi-architecture-and-protocols',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Universal Layered Stack of Network Communications',
        body: 'The OSI model (ISO 1984) abstracts network communications into seven independent layers, allowing heterogeneous hardware and operating systems worldwide to exchange packets seamlessly. Each layer encapsulates data with its own header, passing it downward to the physical medium.',
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'OSI 7 Layers & Well-Known Port Numbers Matrix',
        body: `### OSI 7-Layer Reference Model & PDUs:
- **Layer 7: Application (Data):** User interface to network (HTTP, HTTPS, FTP, SMTP, DNS).
- **Layer 6: Presentation (Data):** **Encryption, Decryption, Compression, Translation** (SSL/TLS, ASCII, JPEG).
- **Layer 5: Session (Data):** Establishes, maintains, and terminates application sessions (checkpoints).
- **Layer 4: Transport (Segment/Datagram):** Process-to-process delivery, port addressing. **TCP** (reliable, 3-way handshake) vs **UDP** (unreliable, fast streaming/DNS).
- **Layer 3: Network (Packet):** Logical IP addressing and path routing. **IPv4**, **IPv6**, ICMP, Routers.
- **Layer 2: Data Link (Frame):** Node-to-node delivery, physical MAC addressing, CRC error checking. Switches.
- **Layer 1: Physical (Bits):** Raw bitstream transmission over physical wires/radio. Hubs, Repeaters.

### Well-Known Port Numbers Reference:
| Port # | Protocol | Full Name | Primary Operational Mandate |
| :--- | :--- | :--- | :--- |
| **20 & 21** | **FTP** | File Transfer Protocol | Port 20 = Data; Port 21 = Command control. |
| **22** | **SSH** | Secure Shell | Encrypted remote terminal management. |
| **23** | **Telnet** | Telecommunication Network | Plaintext unencrypted remote terminal (insecure). |
| **25** | **SMTP** | Simple Mail Transfer Protocol | **Sending / routing outgoing email**. |
| **53** | **DNS** | Domain Name System | Translates names (\`rbi.org.in\`) to IP addresses. |
| **80** | **HTTP** | Hypertext Transfer Protocol | Plaintext web browsing. |
| **110** | **POP3** | Post Office Protocol v3 | **Retrieving incoming email** (downloads and deletes from server). |
| **143** | **IMAP4** | Internet Message Access Protocol | **Retrieving incoming email** (syncs across multiple devices). |
| **443** | **HTTPS** | HTTP Secure (SSL/TLS) | Encrypted secure web browsing (banking standard). |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_ANGLE',
        title: 'Crucial Traps on OSI & Ports',
        body: `### Core Examiner Traps:
- **Trap 1: Encryption Layer:** Data encryption, decryption, and compression occur at the **Presentation Layer (Layer 6)**.
- **Trap 2: Email Protocols:** **SMTP is for SENDING email**. **POP3 and IMAP are for RECEIVING / RETRIEVING email**.
- **Trap 3: Loopback IP:** \`127.0.0.1\` is the universal **Loopback Address** (\`localhost\`) used to verify local TCP/IP stack functionality.
- **Trap 4: PDU Names:** L4 = **Segment** (TCP) / **Datagram** (UDP); L3 = **Packet**; L2 = **Frame**; L1 = **Bits**.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'SUMMARY',
        title: 'Quick Protocol Reference',
        body: 'OSI: All People Seem To Need Data Processing (App, Pres, Sess, Trans, Net, Data, Phys). L6 = encryption. L4 = TCP (reliable 3-way handshake) vs UDP (fast datagram). Ports: 21 FTP, 22 SSH, 23 Telnet, 25 SMTP (send mail), 53 DNS, 80 HTTP, 110 POP3 (get mail), 143 IMAP (sync mail), 443 HTTPS. Loopback = 127.0.0.1.',
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-COMP-011-01',
        statement: 'Under the standard Internet protocol suite, Simple Mail Transfer Protocol (SMTP, Port 25) handles outgoing email transmission, whereas Post Office Protocol (POP3, Port 110) and Internet Message Access Protocol (IMAP, Port 143) handle incoming email retrieval.',
        claimType: 'RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'CERTAIN',
        locator: 'IETF RFC 5321 (SMTP) and RFC 1939 (POP3)',
        excerpt: 'SMTP is used to push mail from client to server and between servers; POP3 and IMAP are used by clients to pull mail from the mailbox server.',
      },
    ],
    examMappings: [
      { examCode: 'ibps-rrb-scale-1', syllabusUnit: 'Computer Knowledge', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'Guaranteed questions on OSI layers (encryption layer), port numbers (25 vs 110), and TCP vs UDP.' },
      { examCode: 'upsc-apfc', syllabusUnit: 'Computer Applications', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'Core networking architecture and protocol suite.' },
    ],
    revisionUnits: [
      { type: 'KEY_TAKEAWAY', content: 'Presentation = Encryption (L6). Transport = Segments (L4). SMTP = Port 25 (Send). POP3 = Port 110 (Receive). HTTPS = Port 443.', priority: 'HIGH', order: 1 },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'At which layer of the Open Systems Interconnection (OSI) 7-layer reference model do data encryption, decryption, and compression operations occur?',
        options: ['Application Layer (Layer 7)', 'Presentation Layer (Layer 6)', 'Session Layer (Layer 5)', 'Transport Layer (Layer 4)', 'Data Link Layer (Layer 2)'],
        correctAnswer: 'Presentation Layer (Layer 6)',
        explanation: 'The Presentation Layer (Layer 6) is responsible for format translation, character code conversion (ASCII/Unicode), data compression, and cryptographic encryption/decryption (SSL/TLS).',
        trapExplanation: 'Application Layer is Layer 7 (user interface); Transport Layer is Layer 4 (flow control and ports). Encryption specifically belongs to Presentation Layer.',
        difficulty: 'EASY',
      },
    ],
  },

  // =========================================================================
  // TOPIC 6: Microsoft Office Master Suite & Workplace Productivity
  // =========================================================================
  {
    id: 'CON-COMP-012',
    slug: 'microsoft-word-document-automation-and-features',
    title: 'Microsoft Word: Document Formatting, Mail Merge Automation & Linguistics Tools',
    shortDefinition: 'Operational mechanics of Microsoft Word (.docx format): automated Mail Merge mass production, Section Breaks vs Page Breaks, Header/Footer synchronization, Footnotes vs Endnotes, and linguistic proofing tools (F7 vs Shift+F7).',
    difficulty: 'INTERMEDIATE',
    order: 12,
    topicSlug: 'microsoft-office-suite-and-workplace-productivity',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Word Processing Architecture & OpenXML Standards',
        body: 'Microsoft Word is the global commercial benchmark for document generation. Modern documents use the **\`.docx\`** format (an OpenXML compressed ZIP package containing structured XML text, formatting stylesheets, and embedded media).',
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Mail Merge, Breaks & Formatting Architecture',
        body: `### Mail Merge Automation:
- Combines a standardized template document (e.g. loan notice) with a structured database/spreadsheet (**Data Source**) to mass-produce personalized letters, envelopes, or mailing labels with zero manual retyping.

### Page Breaks vs Section Breaks:
- **Page Break (\`Ctrl + Enter\`):** Pushes following text to the top of the next page.
- **Section Break:** Divides document into independent zones, allowing different page orientations (portrait vs landscape), independent headers/footers, and unique page numbering within the same file.

### Footnotes vs Endnotes:
- **Footnote (\`Alt + Ctrl + F\`):** Appears at the **very bottom of the specific page** containing the reference marker.
- **Endnote (\`Alt + Ctrl + D\`):** Appears at the **very end of the entire document** (or section).

### Proofing & Linguistics:
- **\`F7\`:** Launches **Spelling and Grammar Check** (Red underline = spelling; Blue = grammar).
- **\`Shift + F7\`:** Opens the **Thesaurus** (Synonyms and Antonyms lookup dictionary).`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_ANGLE',
        title: 'High-Yield Examiner Traps on MS Word',
        body: `### Core Examiner Traps:
- **Trap 1: Thesaurus Shortcut:** **\`Shift + F7\`** launches the Thesaurus. Pressing **\`F7\` alone** launches standard Spelling & Grammar.
- **Trap 2: Text Alignment Shortcuts:** Left = \`Ctrl + L\`; Right = \`Ctrl + R\`; Justify = \`Ctrl + J\`; **Center = \`Ctrl + E\`** (NOT \`Ctrl + C\`, which is Copy!).
- **Trap 3: Page Break Shortcut:** **\`Ctrl + Enter\`** inserts an instant manual page break.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'SUMMARY',
        title: 'Quick MS Word Summary',
        body: 'Extension = .docx. Mail Merge = template + data source. Page break = Ctrl+Enter. Footnote = bottom of page; Endnote = end of document. F7 = Spelling/Grammar; Shift+F7 = Thesaurus. Center align = Ctrl+E; Justify = Ctrl+J; Hyperlink = Ctrl+K.',
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-COMP-012-01',
        statement: 'In Microsoft Word, the Thesaurus research tool is invoked using the keyboard shortcut Shift + F7, whereas F7 alone initiates the standard Spelling and Grammar verification tool.',
        claimType: 'RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'CERTAIN',
        locator: 'Microsoft Office Support Documentation, Keyboard shortcuts in Word',
        excerpt: 'Press Shift+F7 to open the Thesaurus research pane to find synonyms.',
      },
    ],
    examMappings: [
      { examCode: 'ibps-rrb-scale-1', syllabusUnit: 'Computer Knowledge', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'Direct questions on Shift+F7 Thesaurus, Ctrl+E center align, and Mail Merge.' },
    ],
    revisionUnits: [
      { type: 'KEY_TAKEAWAY', content: 'Thesaurus = Shift+F7. Spelling = F7. Center align = Ctrl+E. Page break = Ctrl+Enter. Mail Merge combines template + data source.', priority: 'HIGH', order: 1 },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which keyboard shortcut in Microsoft Word is utilized to open the Thesaurus research pane to lookup synonyms and antonyms for a selected word?',
        options: ['F7', 'Shift + F7', 'Ctrl + F7', 'Alt + F7', 'Ctrl + T'],
        correctAnswer: 'Shift + F7',
        explanation: 'Pressing Shift + F7 opens the Thesaurus pane for synonym lookup. F7 alone opens standard Spelling and Grammar checking.',
        trapExplanation: 'F7 alone checks spelling; Ctrl+T adjusts hanging indent; Shift+F7 specifically opens the Thesaurus.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-COMP-013',
    slug: 'microsoft-excel-spreadsheet-engine-formulas-and-errors',
    title: 'Microsoft Excel Engine: Grid Limits, Absolute Referencing & VLOOKUP Diagnostics',
    shortDefinition: 'Computational architecture of Microsoft Excel (.xlsx): grid capacity limits (1,048,576 rows by 16,384 columns), cell referencing paradigms (Relative A1, Absolute $A$1, Mixed), essential formulas (SUM, COUNT, COUNTA, IF, VLOOKUP), and diagnostic error codes (#####, #DIV/0!, #N/A, #REF!, #NAME?).',
    difficulty: 'INTERMEDIATE',
    order: 13,
    topicSlug: 'microsoft-office-suite-and-workplace-productivity',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Grid Engine of Quantitative Analysis',
        body: 'Microsoft Excel is a two-dimensional grid of rows and columns designed for numerical calculation, financial modeling, and data auditing. Formulas execute calculations dynamically, while cell references determine whether coordinates shift or remain locked when copied across the worksheet.',
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Grid Dimensions, Referencing & Formula Architecture',
        body: `### Grid Capacity Limits (Excel 2007 to Present):
- **Rows:** Exactly **1,048,576 Rows** ($2^{20}$).
- **Columns:** Exactly **16,384 Columns** ($2^{14}$, ending at column **XFD**).
- Legacy Excel 2003 was capped at 65,536 rows ($2^{16}$) and 256 columns (IV).

### Cell Referencing Types (Toggled via \`F4\`):
1. **Relative Reference (\`A1\`):** Coordinates shift relatively when copied to another cell.
2. **Absolute Reference (\`$A$1\`):** Row and column locked with dollar signs (\`$\`); reference remains frozen regardless of copying.
3. **Mixed Reference (\`$A1\` or \`A$1\`):** Either column or row is locked while the other shifts.

### Essential Formula Functions:
- **\`COUNT(range)\`:** Counts cells containing **NUMERIC numbers ONLY**.
- **\`COUNTA(range)\`:** Counts all cells that are **NOT EMPTY** (numbers, text, errors).
- **\`COUNTBLANK(range)\`:** Counts completely empty cells.
- **\`VLOOKUP(val, table, col, [range])\`:** Searches vertically down first column; returns value from specified column index.
- **\`NOW()\` vs \`TODAY()\`:** \`=NOW()\` returns current date and time; \`=TODAY()\` returns current date only.

### Diagnostic Formula Error Codes:
- **\`#####\`:** Column width is too narrow to display the number, or negative date calculated.
- **\`#DIV/0!\`:** Attempting to divide a number by zero or an empty cell.
- **\`#VALUE!\`:** Wrong data type passed to formula (e.g. adding text to a number: \`=A1 + "Apple"\`).
- **\`#REF!\`:** Invalid cell reference (occurs when referenced cells have been deleted).
- **\`#NAME?\`:** Misspelled function name (e.g. \`=SMU(A1:A5)\` instead of \`=SUM\`).
- **\`#N/A\`:** Value is not available to the lookup function.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_ANGLE',
        title: 'Examiner Traps on Excel Functions',
        body: `### High-Yield Traps:
- **Trap 1: COUNT vs COUNTA:** \`=COUNT()\` counts **numbers only**. \`=COUNTA()\` counts **all non-blank cells** (including text).
- **Trap 2: Absolute Locking Symbol:** The **dollar sign (\`$\`)** locks cell references (toggled with **\`F4\`**).
- **Trap 3: Total Rows in Modern Excel:** Modern Excel has **1,048,576 rows** (NOT 65,536, which was Excel 2003).`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'SUMMARY',
        title: 'Quick Excel Reference',
        body: 'Grid: 1,048,576 Rows x 16,384 Columns (XFD). References: Relative (A1), Absolute ($A$1, F4 key). COUNT = numbers only; COUNTA = all non-blank. Errors: ##### (column narrow), #DIV/0! (divide zero), #REF! (deleted cell), #NAME? (misspelled formula). NOW() = date+time; TODAY() = date.',
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-COMP-013-01',
        statement: 'A standard worksheet in modern Microsoft Excel contains exactly 1,048,576 rows and 16,384 columns ending at column heading XFD.',
        claimType: 'STATISTICAL',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'CERTAIN',
        locator: 'Microsoft Excel Specifications and Limits',
        excerpt: 'Worksheet size: 1,048,576 rows by 16,384 columns.',
      },
    ],
    examMappings: [
      { examCode: 'ibps-rrb-scale-1', syllabusUnit: 'Computer Knowledge', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'Frequent questions on row limits, COUNT vs COUNTA, and $ absolute referencing.' },
    ],
    revisionUnits: [
      { type: 'KEY_TAKEAWAY', content: 'Modern Excel = 1,048,576 rows x 16,384 columns (XFD). COUNT = numbers; COUNTA = non-blank. $A$1 = absolute reference.', priority: 'HIGH', order: 1 },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'In Microsoft Excel, what is the exact difference between the function =COUNT(A1:A10) and =COUNTA(A1:A10)?',
        options: [
          '=COUNT counts text cells, while =COUNTA counts numeric cells',
          '=COUNT counts numeric cells only, while =COUNTA counts all non-empty cells including text',
          '=COUNT counts blank cells, while =COUNTA counts filled cells',
          '=COUNT calculates the mathematical sum, while =COUNTA calculates the average',
          '=COUNT works only on sorted ranges, while =COUNTA works on unsorted ranges'
        ],
        correctAnswer: '=COUNT counts numeric cells only, while =COUNTA counts all non-empty cells including text',
        explanation: '=COUNT evaluates and tallies cells containing numeric numbers exclusively. =COUNTA (Count All) tallies every cell that is not blank, including text strings, dates, and formulas.',
        trapExplanation: 'Option A inverts the functions; Option C describes COUNTBLANK.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-COMP-014',
    slug: 'microsoft-powerpoint-presentations-and-universal-shortcuts',
    title: 'Microsoft PowerPoint Presentations, Slide Master & Universal Workplace Shortcuts',
    shortDefinition: 'Presentation management in Microsoft PowerPoint (.pptx): Slide Master architecture, presentation views (Slide Sorter, Notes Page), Transitions vs Animations, Slide Show control shortcuts (F5 vs Shift+F5), and universal workplace shortcut combinations.',
    difficulty: 'EASY',
    order: 14,
    topicSlug: 'microsoft-office-suite-and-workplace-productivity',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Visual Multimedia Presentations & Automation',
        body: 'Microsoft PowerPoint structures visual multimedia slideshows. The overarching design template is governed by the **Slide Master**, while presentation flow is manipulated through dedicated view interfaces.',
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'PowerPoint Architecture & Universal Shortcuts',
        body: `### Core PowerPoint Features:
- **Slide Master:** Master template controlling theme fonts, background formatting, footers, and logos across all slides in the deck. Editing the Slide Master updates every slide automatically.
- **Slide Sorter View:** Displays thumbnail cards of all slides in a grid; **the optimal view for reordering, organizing, and deleting slides**.
- **Transitions vs Animations:**
  - **Transition:** Motion effect that occurs **between slides** as one slide advances to the next.
  - **Animation:** Motion effect applied to **individual text boxes, images, or bullet points inside a single slide**.
- **Slide Show Shortcuts:**
  - **\`F5\`:** Starts the Slide Show from the **very first slide (beginning)**.
  - **\`Shift + F5\`:** Starts the Slide Show from the **current active slide**.
  - **\`Ctrl + M\`:** Inserts a **New Slide** into current presentation.
  - **\`Ctrl + N\`:** Opens a **New blank Presentation / File**.

### Universal Keyboard Shortcuts:
- \`Ctrl + A\` = Select All | \`Ctrl + B\` = Bold | \`Ctrl + C\` = Copy | \`Ctrl + X\` = Cut | \`Ctrl + V\` = Paste
- \`Ctrl + Z\` = Undo | \`Ctrl + Y\` = Redo | \`Ctrl + K\` = Insert Hyperlink | \`Ctrl + P\` = Print | \`Ctrl + S\` = Save
- \`Ctrl + W\` = Close window | \`Alt + F4\` = Exit application`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_ANGLE',
        title: 'Core Traps on PowerPoint Shortcuts',
        body: `### Crucial Traps:
- **Trap 1: New Slide vs New File:** To insert a **New Slide**, press **\`Ctrl + M\`**. To open a **New File**, press **\`Ctrl + N\`**.
- **Trap 2: Slide Show Start:** **\`F5\`** starts from slide 1. **\`Shift + F5\`** starts from the current active slide.
- **Trap 3: Reordering View:** The optimal view for rearranging slide sequence is **Slide Sorter View**.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'SUMMARY',
        title: 'Quick PowerPoint Review',
        body: 'Extension = .pptx / .ppsx (show). Slide Master = global template. Slide Sorter = reorder slides. Transition = between slides; Animation = inside slide elements. F5 = start show from beginning; Shift+F5 = start from current. New slide = Ctrl+M; New file = Ctrl+N.',
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-COMP-014-01',
        statement: 'In Microsoft PowerPoint, the keyboard shortcut Ctrl + M inserts a new blank slide into the active presentation, while Ctrl + N creates a completely new presentation file.',
        claimType: 'RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'CERTAIN',
        locator: 'Microsoft Office Support, Keyboard shortcuts for PowerPoint',
        excerpt: 'Press Ctrl+M to add a new slide to your presentation. Press Ctrl+N to create a new presentation.',
      },
    ],
    examMappings: [
      { examCode: 'ibps-rrb-scale-1', syllabusUnit: 'Computer Knowledge', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'Guaranteed questions on Ctrl+M vs Ctrl+N, F5 vs Shift+F5, and Slide Sorter view.' },
    ],
    revisionUnits: [
      { type: 'KEY_TAKEAWAY', content: 'New Slide = Ctrl+M. New File = Ctrl+N. Slide Show from start = F5; from current = Shift+F5. Reorder slides = Slide Sorter.', priority: 'HIGH', order: 1 },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which keyboard shortcut is used to insert a new slide into an existing active Microsoft PowerPoint presentation?',
        options: ['Ctrl + N', 'Ctrl + M', 'Ctrl + S', 'Shift + Enter', 'Alt + N'],
        correctAnswer: 'Ctrl + M',
        explanation: 'Ctrl + M inserts a new slide immediately following the active slide in PowerPoint. Ctrl + N opens an entirely new presentation workbook.',
        trapExplanation: 'Ctrl + N creates a new file; Ctrl + M inserts a new slide.',
        difficulty: 'EASY',
      },
    ],
  },

  // =========================================================================
  // TOPIC 7: Information Security, Malware & Banking Digital Infrastructure
  // =========================================================================
  {
    id: 'CON-COMP-015',
    slug: 'malware-taxonomy-social-engineering-and-cryptography',
    title: 'Malware Taxonomy, Social Engineering Exploits & Cryptographic Defense Controls',
    shortDefinition: 'Forensic taxonomy of digital security threats: Viruses, autonomous Worms, Trojan Horses, Ransomware, Spyware, Rootkits, Botnets; social engineering attack vectors (Phishing, Spoofing, MitM, DDoS); CIA triad, symmetric vs asymmetric encryption, and IT Act 2000 provisions.',
    difficulty: 'INTERMEDIATE',
    order: 15,
    topicSlug: 'information-security-malware-and-banking-infrastructure',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Spectrum of Cyber Threats & Cryptographic Shields',
        body: 'Information security protects electronic data and computing assets against unauthorized access, destruction, or interception. Cyber threats combine malicious software payloads (Malware) with deceptive psychological manipulation (Social Engineering). Defenses rely on the **CIA Triad** (Confidentiality, Integrity, Availability) enforced via hardware firewalls and public-key cryptography.',
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Malware Matrix, Cryptography & Social Engineering',
        body: `### The Master Malware Taxonomy:
| Malware Type | Self-Replicating? | Requires Host? | Operational Characteristics | Benchmark Example |
| :--- | :--- | :--- | :--- | :--- |
| **Virus** | **Yes** | **Yes** | Attaches to legitimate executable (\`.exe\`). Executes when host is run. | **Brain (1986)**, Creeper (1971). |
| **Worm** | **Yes** | **No** | Standalone autonomous program; self-replicates across networks without human action. | **Morris Worm (1988)**, ILOVEYOU. |
| **Trojan Horse**| **No** | **No** | Disguised as legitimate useful software; secretly installs a backdoor for attackers. | Zeus Trojan, NetBus. |
| **Ransomware** | Sometimes | Standalone | Encrypts victim's files; demands ransom in cryptocurrency for decryption key. | **WannaCry (2017)**, LockBit. |
| **Spyware** | No | Standalone | Silently monitors keystrokes (**Keyloggers**), steals passwords, exfiltrates data. | Pegasus. |
| **Rootkit** | No | Driver/Kernel | Stealth tools providing root admin access while hiding malware from antivirus. | Stuxnet. |
| **Botnet** | Yes | Network | Vast network of compromised computers (**Zombies**) controlled by a Botmaster for DDoS. | Mirai Botnet. |

### Social Engineering & Network Attacks:
- **Phishing:** Deceptive emails mimicking legitimate banks directing victims to cloned login portals.
- **Spoofing:** Falsifying source IP addresses, MAC addresses, or email headers.
- **DoS / DDoS (Distributed Denial of Service):** Overwhelming target servers with massive bogus traffic (SYN floods) to deny service to legitimate customers.
- **Man-in-the-Middle (MitM):** Secretly intercepting and relaying communications between two parties.

### Cryptography & Digital Signatures:
- **Symmetric Encryption (Secret Key):** Single shared key encrypts and decrypts (AES, DES).
- **Asymmetric Encryption (Public Key):** Key pair: **Public Key** encrypts; linked **Private Key** decrypts (RSA, ECC).
- **Digital Signature:** Encrypting a document hash with sender\'s **Private Key**; verified with sender\'s **Public Key**. Provides **Authentication**, **Integrity**, and **Non-Repudiation** (sender cannot deny transaction).`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_ANGLE',
        title: 'Examiner Traps on Malware & Digital Signatures',
        body: `### Core Examiner Traps:
- **Trap 1: Virus vs Worm:** A **Virus requires a host program** and human execution. A **Worm is autonomous and spreads without human intervention**.
- **Trap 2: Digital Signature Keys:** A digital signature is created with the sender's **PRIVATE KEY** and verified with the sender's **PUBLIC KEY**.
- **Trap 3: IT Act 2000 Cyber Terrorism:** Under Section 66F of the IT Act, 2000, cyber terrorism carries a mandatory sentence of up to **Life Imprisonment**.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'SUMMARY',
        title: 'Quick Cyber Security Summary',
        body: 'Virus = needs host; Worm = autonomous network spread; Trojan = disguised trap; Ransomware = encrypts for money (WannaCry). CIA Triad = Confidentiality, Integrity, Availability. Asymmetric = Public key encrypts, Private key decrypts. Digital signature = signed with Private key (non-repudiation). IT Act: Sec 43 (compensation), Sec 66 (hacking), Sec 66C (identity theft), Sec 66F (cyber terrorism = life imprisonment).',
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-COMP-015-01',
        statement: 'A computer worm is an autonomous standalone malware program that replicates itself over network connections without requiring a host file or human intervention, unlike a computer virus which must attach to an executable host.',
        claimType: 'COMPARISON',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'CERTAIN',
        locator: 'Stallings, Cryptography and Network Security (7th Ed)',
        excerpt: 'A worm is an independent program that can spread across networks by exploiting security flaws, whereas a virus must attach to a program.',
      },
    ],
    examMappings: [
      { examCode: 'ibps-rrb-scale-1', syllabusUnit: 'Computer Knowledge', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'Core questions on Virus vs Worm, Phishing vs Spoofing, and Digital Signature key pairs.' },
      { examCode: 'upsc-apfc', syllabusUnit: 'Computer Applications', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'IT Act 2000 penal provisions and cryptographic security.' },
    ],
    revisionUnits: [
      { type: 'KEY_TAKEAWAY', content: 'Worm = autonomous, no host needed. Virus = needs host. Digital signature created with sender Private key, verified with Public key.', priority: 'HIGH', order: 1 },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'What is the fundamental architectural difference between a computer virus and a computer worm?',
        options: [
          'A virus attacks only hardware, while a worm attacks only software',
          'A virus requires a host executable file and human action to replicate, whereas a worm is autonomous and self-replicates across networks',
          'A worm encrypts files for ransom, while a virus records keystrokes',
          'A virus spreads through optical discs, while a worm spreads only via Bluetooth',
          'A worm is beneficial diagnostic software, while a virus is always malicious'
        ],
        correctAnswer: 'A virus requires a host executable file and human action to replicate, whereas a worm is autonomous and self-replicates across networks',
        explanation: 'Viruses attach themselves to legitimate host files and require execution of the host to propagate. Worms are self-contained standalone programs that propagate across computer networks autonomously.',
        trapExplanation: 'Option C describes Ransomware vs Keyloggers; Option E is false as both are malicious.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-COMP-016',
    slug: 'banking-technology-core-banking-solutions-and-npci-rails',
    title: 'Banking Technology: Core Banking Solutions (CBS), NPCI Payment Rails & RBI Cyber Framework',
    shortDefinition: 'The enterprise IT architecture of Indian banking: Core Banking Solutions (CBS: Finacle, BaNCS, Flexcube), electronic payment and settlement rails (RTGS, NEFT, IMPS, NACH, CTS), NPCI systems (UPI, NFS, AePS), financial messaging (SWIFT vs SFMS), and the RBI 6-hour cybersecurity incident reporting mandate.',
    difficulty: 'ADVANCED',
    order: 16,
    topicSlug: 'information-security-malware-and-banking-infrastructure',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Centralized Real-Time Digital Banking Infrastructure',
        body: 'Modern banking operates under **Core Banking Solutions (CBS)**, where customer ledgers reside on a centralized primary data center database rather than localized branch ledgers. Under this paradigm, customers belong to the bank as a whole (**Any-Branch Banking**), transacting across national electronic clearance and settlement rails.',
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Payment Rails & NPCI Infrastructure Matrix',
        body: `### Core Banking Software Platforms:
- **Finacle:** Developed by **Infosys** (SBI, PNB, Canara Bank, Bank of Baroda).
- **BaNCS:** Developed by **TCS** (Central Bank of India, Indian Bank).
- **Flexcube:** Developed by **Oracle** (HDFC Bank, Citibank, Kotak Mahindra).

### Master Comparison of Interbank Payment Rails:
| System | Administered By | Settlement Mode | Minimum Limit | Operating Hours | Batch Cadence |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **RTGS** | **RBI** | **Real-Time Gross Settlement** (gross one-to-one) | **₹2,00,000 (₹2 Lakhs)** | **24x7x365** | Immediate finality in central bank money. |
| **NEFT** | **RBI** | **Deferred Net Settlement** (DNS batches) | **₹1 (No minimum)** | **24x7x365** | **48 half-hourly batches** daily. |
| **IMPS** | **NPCI** | Instant retail payment rail | ₹1 (Max ₹5 Lakh) | **24x7x365** | Immediate real-time settlement. |
| **NACH** | **NPCI** | High-volume bulk clearing | Bulk mandates | Banking windows | Replaced legacy ECS for dividends/subsidies. |
| **CTS** | **RBI / NPCI** | Cheque Truncation System | Cheque face value | Grid clearing | Digital greyscale & UV images replace paper transit. |

### Financial Messaging: SWIFT vs SFMS:
- **SWIFT (Belgium):** International financial messaging network. Transmits standardized messages (**MT700** for LC, **MT103** for payment) via 8 or 11 character **BIC codes**. **SWIFT does NOT transfer funds directly.**
- **SFMS (IDRBT, Hyderabad):** Domestic Indian messaging equivalent operating over the **INFINET** network for RTGS/NEFT.

### RBI & CERT-In Cyber Security Mandates:
- **6-Hour Incident Reporting:** Regulated banking entities must report any cybersecurity breach or critical outage to **CERT-In and the RBI within 6 HOURS of detection**.
- **C-SOC:** $24\\times 7\\times 365$ Cyber Security Operations Center.
- **SWIFT-CBS Integration:** RBI mandated that no outbound SWIFT message can be transmitted without automatic ledger entry in CBS.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_ANGLE',
        title: 'Core Traps on Banking IT & Payments',
        body: `### High-Yield Banking Traps:
- **Trap 1: RTGS Minimum Transaction Limit:** The minimum customer transaction limit for **RTGS is ₹2,00,000 (₹2 Lakhs)**. There is **NO minimum limit for NEFT** (can transfer ₹1).
- **Trap 2: NEFT Batch Cadence:** NEFT operates **24x7x365 across 48 half-hourly settlement batches**.
- **Trap 3: SWIFT Function:** SWIFT **does NOT hold or transfer money**; it is strictly a secure financial messaging communication system.
- **Trap 4: ATM Network:** The domestic network interconnecting bank ATMs in India is the **National Financial Switch (NFS)**, operated by **NPCI**.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'SUMMARY',
        title: 'Quick Banking Tech Summary',
        body: 'CBS = Centralized Online Real-time Exchange (Finacle by Infosys, BaNCS by TCS, Flexcube by Oracle). RTGS = min ₹2 Lakh, gross real-time, 24x7. NEFT = min ₹1, 48 half-hourly batches, 24x7. IMPS = NPCI instant retail (max ₹5 Lakh). NPCI operates: UPI, NFS (ATMs), AePS (biometric), RuPay, FASTag. SWIFT = international messaging (BIC code, 8/11 chars). Incident reporting = mandatory 6 hours to CERT-In.',
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-COMP-016-01',
        statement: 'Under Reserve Bank of India regulations, customer transactions processed through Real-Time Gross Settlement (RTGS) are subject to a mandatory minimum threshold of ₹2,00,000, whereas National Electronic Funds Transfer (NEFT) has no minimum limit.',
        claimType: 'RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'CERTAIN',
        locator: 'Reserve Bank of India, Master Direction on RTGS System (2024 update)',
        excerpt: 'The RTGS system is primarily meant for large value transactions. The minimum amount to be remitted through RTGS is ₹2,00,000/- with no upper limit.',
      },
    ],
    examMappings: [
      { examCode: 'ibps-rrb-scale-1', syllabusUnit: 'Computer Knowledge', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'Guaranteed questions on RTGS ₹2 Lakh minimum, NEFT batches, and NPCI systems.' },
      { examCode: 'ibps-po', syllabusUnit: 'Reasoning & Computer Aptitude', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'CBS platforms, SWIFT BIC codes, and CERT-In 6-hour reporting mandate.' },
    ],
    revisionUnits: [
      { type: 'KEY_TAKEAWAY', content: 'RTGS min = ₹2 Lakh (gross real-time). NEFT = min ₹1 (48 batches). SWIFT = messaging only. Incident reporting = 6 hours to CERT-In.', priority: 'HIGH', order: 1 },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'What is the statutory minimum transaction threshold prescribed by the Reserve Bank of India for initiating an electronic funds transfer through the Real-Time Gross Settlement (RTGS) system for customer transactions?',
        options: ['₹50,000', '₹1,00,000', '₹2,00,000', '₹5,00,000', 'No minimum limit exists'],
        correctAnswer: '₹2,00,000',
        explanation: 'RTGS is designed for large-value real-time gross payments and carries a mandatory minimum threshold of ₹2,00,000 (₹2 Lakhs) for customer transactions. NEFT has no minimum limit.',
        trapExplanation: 'Option E describes NEFT or IMPS; Option D (₹5 Lakh) is the maximum single transaction ceiling for IMPS.',
        difficulty: 'EASY',
      },
    ],
  },
  // =========================================================================
  // TOPIC 8: Database Management Systems, SQL & Web Technologies
  // =========================================================================
  {
    id: 'CON-COMP-017',
    slug: 'relational-dbms-keys-normalization-and-sql-taxonomy',
    title: 'Database Management Systems (DBMS), Relational Keys, ACID & SQL Taxonomy',
    shortDefinition: 'Theoretical principles of Relational DBMS, relational terminology (tuples, attributes, cardinality, degree), key constraints (Primary, Foreign, Candidate), Normalization (1NF, 2NF, 3NF, BCNF), transaction ACID properties, and the SQL command taxonomy (DDL, DML, DQL, DCL, TCL).',
    difficulty: 'INTERMEDIATE',
    order: 1,
    topicSlug: 'database-systems-sql-and-web-technologies',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Relational Model & Elimination of File Processing Redundancy',
        body: 'Pioneered by **Dr. E.F. Codd (1970)**, the Relational Model organizes data into two-dimensional tables termed **Relations**, composed of named columns (**Attributes**) and unstructured rows (**Tuples**). In relational theory, **Cardinality** measures the total count of tuples (rows), while **Degree** measures the total count of attributes (columns). An RDBMS guarantees declarative querying through SQL, schema-instance separation, and mathematical constraints via relational keys.',
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Relational Keys, Normalization & SQL Taxonomy',
        body: `### Relational Keys Architecture:
- **Primary Key (PK):** Unique identifier for each tuple; strictly **cannot be NULL** (Entity Integrity Constraint). A table has exactly one PK.
- **Candidate Key:** Minimal super key with no redundant attributes. All candidate keys not chosen as Primary Key become **Alternate Keys**.
- **Foreign Key (FK):** Attribute matching the Primary Key in another table, enforcing **Referential Integrity**. Unlike PKs, foreign keys *can* contain NULL and duplicate values.

### Normal Forms Progression:
1. **1NF:** Atomic values only; eliminates repeating groups and comma-separated arrays.
2. **2NF:** In 1NF + **no partial dependency** (every non-prime attribute is fully functionally dependent on the entire composite primary key).
3. **3NF:** In 2NF + **no transitive dependency** (non-key attributes cannot depend on other non-key attributes).
4. **BCNF:** Stricter 3NF; for every functional dependency $X \\to Y$, $X$ must be a **Super Key**.

### SQL Command Categories:
| Category | Full Name | Commands | Transactional Behavior |
| :--- | :--- | :--- | :--- |
| **DDL** | Data Definition Language | \`CREATE\`, \`ALTER\`, \`DROP\`, \`TRUNCATE\`, \`RENAME\` | **Auto-committed** (cannot be rolled back). |
| **DML** | Data Manipulation Language | \`INSERT\`, \`UPDATE\`, \`DELETE\`, \`MERGE\` | **Manual commit** (can be rolled back). |
| **DQL** | Data Query Language | \`SELECT\` | Read-only data retrieval. |
| **DCL** | Data Control Language | \`GRANT\`, \`REVOKE\` | User permissions & security privileges. |
| **TCL** | Transaction Control Language | \`COMMIT\`, \`ROLLBACK\`, \`SAVEPOINT\` | Transaction persistence & recovery points. |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_ANGLE',
        title: 'The Critical Exam Distinction: DROP vs TRUNCATE vs DELETE & ACID',
        body: `### High-Yield Comparison:
- **\`DROP\` (DDL):** Destroys table structure, rows, indexes, and constraints completely. Space is deallocated. Cannot be rolled back.
- **\`TRUNCATE\` (DDL):** Purges **all rows** while preserving the table schema/columns. Resets identity seed counters, deallocates data pages, executes instantly, does not fire \`ON DELETE\` triggers, and cannot be conditionally filtered (\`WHERE\` is disallowed).
- **\`DELETE\` (DML):** Removes specific filtered rows (\`WHERE ID = 5\`) or all rows. Logs deletions row-by-row, fires \`ON DELETE\` triggers, retains identity counters, and **can be rolled back**.

### Transaction ACID Properties:
- **Atomicity ("All or Nothing"):** Either every operation in the transaction executes, or the entire transaction is rolled back.
- **Consistency:** Database transitions between valid states, preserving all schema constraints.
- **Isolation:** Concurrent transactions execute without mutual interference (managed by locks and 2PL).
- **Durability:** Once committed, transaction results survive power failures and crashes (via Write-Ahead Logging).`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'TECHNICAL_DEEP_DIVE',
        title: 'Relational DBMS vs NoSQL Architectures',
        body: `While RDBMS systems (Oracle, MySQL, PostgreSQL, MS SQL Server) scale **vertically** and enforce strict ACID transactions across structured tabular schemas, modern distributed systems employ **NoSQL** architectures (MongoDB, Cassandra, Redis). NoSQL databases scale **horizontally** across commoditized compute clusters, employing dynamic schema models (Document, Key-Value, Columnar, Graph) and the **BASE** philosophy (Basically Available, Soft-state, Eventual consistency) to handle petabyte-scale unstructured data streams.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-COMP-017-01',
        statement: 'In relational database terminology, Cardinality refers to the total number of rows (tuples) in a relation, whereas Degree refers to the total number of columns (attributes).',
        claimType: 'TECHNICAL_DEFINITION',
        epistemicLevel: 'CANONICAL_CONSENSUS',
        confidence: 'CERTAIN',
        locator: 'Unit 16: Database Management Systems (DBMS), Relational Architecture & SQL Taxonomy',
        excerpt: 'Cardinality: The total number of tuples (rows) currently stored in a relation. Degree: The total number of attributes (columns) defining the relation schema.',
      },
    ],
    examMappings: [
      { examCode: 'ibps-rrb-scale-1', syllabusUnit: 'Computer Knowledge', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'Frequent questions on Cardinality vs Degree, Primary vs Foreign Keys, and TRUNCATE vs DELETE.' },
      { examCode: 'ibps-po', syllabusUnit: 'Reasoning & Computer Aptitude', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'ACID properties and SQL command taxonomy.' },
      { examCode: 'sbi-po', syllabusUnit: 'Reasoning & Computer Aptitude', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'Database integrity constraints and transaction processing.' },
      { examCode: 'rbi-assistant', syllabusUnit: 'Computer Knowledge', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'DDL vs DML classification and Primary Key constraints.' },
    ],
    revisionUnits: [
      { type: 'KEY_TAKEAWAY', content: 'Cardinality = Number of Rows (Tuples). Degree = Number of Columns (Attributes). Primary Key can never be NULL. Foreign Key enforces Referential Integrity.', priority: 'HIGH', order: 1 },
      { type: 'PITFALL_WARNING', content: 'TRUNCATE is DDL (auto-committed, resets identity, cannot use WHERE). DELETE is DML (can rollback, retains identity, supports WHERE).', priority: 'HIGH', order: 2 },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'Which of the following statements correctly differentiates the SQL commands TRUNCATE and DELETE in a relational database management system?',
        options: [
          'TRUNCATE is a DML command that can be rolled back, while DELETE is a DDL command that cannot be rolled back',
          'TRUNCATE removes all rows, resets the table identity counter, and is a DDL command, whereas DELETE is a DML command that can remove specific rows using a WHERE clause',
          'DELETE drops the entire table schema and structure from disk, while TRUNCATE preserves the table',
          'TRUNCATE can be filtered with a WHERE condition, whereas DELETE executes indiscriminately',
          'There is no operational difference; both are interchangeable synonyms in ANSI SQL',
        ],
        correctAnswer: 'TRUNCATE removes all rows, resets the table identity counter, and is a DDL command, whereas DELETE is a DML command that can remove specific rows using a WHERE clause',
        explanation: 'TRUNCATE is a DDL command that deallocates data pages, resets the table identity counter, executes instantly without firing triggers, and does not accept a WHERE clause. DELETE is a DML command that logs row deletions, fires triggers, can be filtered with WHERE, and can be rolled back.',
        trapExplanation: 'Option A reverses the categories; Option C describes DROP, not DELETE.',
        difficulty: 'INTERMEDIATE',
      },
    ],
  },
  {
    id: 'CON-COMP-018',
    slug: 'web-architecture-http-status-codes-and-file-formats',
    title: 'Web Architecture, HTTP Status Codes & Master File Formats Compendium',
    shortDefinition: 'Web client-server architecture, DNS resolution pipeline, URL anatomy, HTTP vs HTTPS with TLS hybrid encryption, exhaustive HTTP status codes matrix (1xx through 5xx), cookies vs sessions, and comprehensive multimedia file formats (raster vs vector, audio codecs, video containers).',
    difficulty: 'INTERMEDIATE',
    order: 2,
    topicSlug: 'database-systems-sql-and-web-technologies',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Stateless Web & The Client-Server Request Pipeline',
        body: 'The World Wide Web operates upon the **Client-Server Architecture** communicating via the **Hypertext Transfer Protocol (HTTP)**. By design, HTTP is **stateless**: every incoming request is processed independently without persistent server memory. State is preserved using client-side **Cookies** (up to 4 KB text files) and server-side **Sessions** (where sensitive user state is held in server memory and linked via a session ID cookie). Secure communications utilize **HTTPS (Port 443)**, combining asymmetric encryption for initial TLS identity verification and key exchange with high-speed symmetric encryption (AES) for data transmission.',
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Master HTTP Status Codes Taxonomy',
        body: `HTTP status codes are 3-digit numerical responses indicating request resolution:
- **1xx (Informational):** \`100 Continue\` (proceed with body), \`101 Switching Protocols\`.
- **2xx (Success):** \`200 OK\` (standard success), \`201 Created\` (resource created), \`204 No Content\`.
- **3xx (Redirection):**
  - **\`301 Moved Permanently\`:** Permanent URI redirect; browsers cache new address, SEO link juice transferred.
  - **\`302 Found\`:** Temporary redirect; future requests still query original URI.
  - **\`304 Not Modified\`:** Browser cache validated; server sends no payload.
- **4xx (Client Error):**
  - **\`400 Bad Request\`:** Malformed syntax or corrupted request.
  - **\`401 Unauthorized\`:** **Authentication required or invalid credentials.**
  - **\`403 Forbidden\`:** **Authenticated, but user lacks authorization/permission.**
  - **\`404 Not Found\`:** Requested URI path does not exist on server.
  - **\`429 Too Many Requests\`:** Rate limiting triggered.
- **5xx (Server Error):**
  - **\`500 Internal Server Error\`:** Unhandled server-side application exception.
  - **\`502 Bad Gateway\`:** Reverse proxy received invalid response from upstream server.
  - **\`503 Service Unavailable\`:** Server overloaded or undergoing maintenance.
  - **\`504 Gateway Timeout\`:** Upstream server failed to respond within time threshold.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_ANGLE',
        title: 'Master File Formats & Codecs Compendium',
        body: `### Image Formats (Raster vs Vector):
- **Raster (Pixel-based, pixelates when enlarged):**
  - **JPEG/JPG:** Lossy compression, 24-bit color (16.7M colors). No transparency. Ideal for photographs.
  - **PNG:** Lossless compression, 24-bit color + **8-bit Alpha Channel** for true transparency. Ideal for logos and screenshots.
  - **GIF:** Lossless, restricted to **8-bit palette (256 colors max)**. Supports multi-frame animation.
  - **BMP:** Uncompressed bitmap raster; huge file size.
- **Vector (Math-based, scales infinitely without pixelation):**
  - **SVG:** Scalable Vector Graphics, XML-based coordinate paths.

### Audio & Video Standards:
- **MP3:** Lossy audio using psychoacoustic frequency masking.
- **WAV:** Uncompressed raw PCM audio; studio standard.
- **FLAC:** Lossless compressed audio.
- **MIDI:** **Stores no sound waves or vocals.** Encodes synthetic instrument control instructions (pitch, tempo, key).
- **Video Containers vs Codecs:** Container (\`.mp4\`, \`.mkv\`, \`.avi\`) bundles video, audio, and subtitles. Codec (\`H.264\`, \`H.265/HEVC\`, \`AV1\`) executes actual video data compression.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'TECHNICAL_DEEP_DIVE',
        title: 'URL Architecture & DNS Resolution Pipeline',
        body: `A URL (\`https://netbanking.bank.co.in:443/portal/pay.php?acc=12#conf\`) decomposes into Scheme (\`https\`), Subdomain (\`netbanking\`), Domain (\`bank\`), TLD (\`.co.in\`), Port (\`443\`), Path (\`/portal/pay.php\`), Query Parameters (\`?acc=12\`), and Anchor Fragment (\`#conf\`). The DNS resolution pipeline queries Local Cache $\\to$ Recursive Resolver $\\to$ Root DNS Servers (13 logical clusters) $\\to$ TLD Servers $\\to$ Authoritative DNS Servers to convert human domains into routable IP addresses.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-COMP-018-01',
        statement: 'HTTP status code 401 signifies authentication failure (missing or invalid credentials), whereas 403 Forbidden indicates that the client is authenticated but lacks authorization permissions to access the requested resource.',
        claimType: 'TECHNICAL_DEFINITION',
        epistemicLevel: 'CANONICAL_CONSENSUS',
        confidence: 'CERTAIN',
        locator: 'Unit 17: Web Architecture, HTTP Status Codes & Master File Formats Compendium',
        excerpt: '401 Unauthorized: Authentication required or failed. 403 Forbidden: Authenticated, but lacking authorization.',
      },
    ],
    examMappings: [
      { examCode: 'ibps-rrb-scale-1', syllabusUnit: 'Computer Knowledge', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'HTTP status codes (404, 403, 500, 503) and file formats (JPEG vs PNG, MIDI, MP3).' },
      { examCode: 'ibps-po', syllabusUnit: 'Reasoning & Computer Aptitude', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'Port numbers (80, 443), HTTPS TLS handshake, and URL structure.' },
      { examCode: 'rbi-assistant', syllabusUnit: 'Computer Knowledge', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'PROFICIENT', notes: 'Cookies vs Sessions, HTTP error codes, and raster vs vector images.' },
    ],
    revisionUnits: [
      { type: 'KEY_TAKEAWAY', content: 'HTTP = Port 80; HTTPS = Port 443. 401 = Unauthenticated; 403 = Unauthorized/Forbidden. 301 = Permanent Redirect; 302 = Temporary Redirect.', priority: 'HIGH', order: 1 },
      { type: 'PITFALL_WARNING', content: 'Vector graphics (SVG) scale infinitely without pixelation. MIDI files contain NO recorded sound waves, only synthesized instrument instructions.', priority: 'HIGH', order: 2 },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'A banking customer logged into their corporate account attempts to access the core treasury disbursement console and receives an "HTTP 403" response. What is the precise technical meaning of this status code?',
        options: [
          'The customer entered an invalid password and their login session has expired',
          'The treasury disbursement web page has been permanently relocated to another server URL',
          'The web server recognizes the user authentication identity, but the user account lacks the requisite authorization permissions to view the requested resource',
          'The upstream database server encountered an unexpected crash and failed to respond within the gateway timeout window',
          'The customer web browser transmitted a corrupted HTTP header that the server cannot parse',
        ],
        correctAnswer: 'The web server recognizes the user authentication identity, but the user account lacks the requisite authorization permissions to view the requested resource',
        explanation: 'HTTP 403 Forbidden indicates that the server understands the request and has authenticated the client, but refuses to authorize access because the client lacks necessary permissions. Invalid login credentials return 401 Unauthorized.',
        trapExplanation: 'Option A corresponds to HTTP 401; Option B corresponds to HTTP 301; Option D corresponds to HTTP 504.',
        difficulty: 'INTERMEDIATE',
      },
    ],
  },
  {
    id: 'CON-COMP-019',
    slug: 'po-mains-algorithmic-flowcharts-and-binary-logic-puzzles',
    title: 'PO Mains Algorithmic Flowcharts, Variable Tracing & Binary Logic Puzzle Patterns',
    shortDefinition: 'Advanced banking PO Mains computer aptitude puzzle methodologies: ISO flowchart symbol semantics, systematic trace table variable execution simulation, binary-encoded direction and distance logic ciphers, and operating system memory pagination (FIFO vs LRU page fault calculations).',
    difficulty: 'ADVANCED',
    order: 1,
    topicSlug: 'po-mains-algorithmic-flowcharts-and-binary-logic',
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The PO Mains Computer Aptitude Paradigm: Machine Reasoning',
        body: 'In SBI PO Mains and IBPS PO Mains, the section titled **Reasoning & Computer Aptitude** contains zero elementary factual questions. Instead, Computer Aptitude is tested through **machine execution simulation puzzles**: algorithmic flowcharts with multi-branch conditional loops, binary-coded symbol translation ciphers for spatial coordinates, and operating system memory paging algorithms. Candidates must act as an infallible central processing unit, tracing memory variable updates step-by-step through trace tables.',
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'ISO Flowchart Symbols & Variable Trace Table Methodology',
        body: `### ISO / ANSI Standard Flowchart Symbols:
- **Oval / Capsule (Terminal):** Start, Stop, or Halt.
- **Parallelogram (I/O):** Input (\`Read A, B\`) or Output (\`Display Sum\`).
- **Rectangle (Process):** Variable computation, arithmetic, or assignment (\`X = X + 1\`).
- **Diamond / Rhombus (Decision):** Conditional evaluation with **at least two exit paths** (True/False).
- **Circle (Connector):** On-page link joining intersecting flowlines.

### Systematic Trace Table Construction:
Never calculate flowchart outputs mentally. Always construct a tabular **Trace Table** recording Step Number, Condition State, and individual variable columns ($A, B, C, \\text{Count}, \\text{Output}$). Update the table strictly row-by-row to completely eliminate off-by-one errors and loop iteration oversights.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_ANGLE',
        title: 'Binary-Coded Logic & Memory Page Fault Calculations',
        body: `### Binary Coded Distance & Direction Models:
Banking PO exams encrypt base-2 binary strings into symbol pairs (e.g., \`@ = 0\`, \`# = 1\`). To rapidly decode sequences:
- Number \`###\` $= 111_2 = 4 + 2 + 1 = 7$.
- Number \`#@#@\` $= 1010_2 = 8 + 0 + 2 + 0 = 10$.
- Directional coordinate puzzles combine binary-decoded meters with Cartesian compass rules ($P \\& Q$ for North, $P \\% Q$ for South). Most Euclidean shortest-path questions resolve cleanly into Pythagorean triples: $(3,4,5), (6,8,10), (5,12,13), (8,15,17)$.

### Operating System Memory Page Replacement (LRU vs FIFO):
In Regulatory Body and Bank Specialist Officer exams, candidates calculate **Page Faults** across page frame capacities:
- **FIFO (First-In, First-Out):** Replaces the page loaded earliest into memory.
- **LRU (Least Recently Used):** Replaces the page in memory that has not been referenced for the longest duration of past time.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'TECHNICAL_DEEP_DIVE',
        title: 'Flowchart Loop Pitfalls: Variable Overwrite vs Accumulation',
        body: `The most common trap set by IBPS/SBI examiners in PO Mains flowchart algorithms is confusing **Variable Reassignment** with **Variable Accumulation**:
- **Reassignment (\`Total = X\`):** Discards the previous sum and stores only the current term.
- **Accumulation (\`Total = Total + X\`):** Preserves the running total across successive loop iterations.
Always check loop re-entry arrows to observe whether initialization blocks (\`Set Count = 0\`) are bypassed during iterative cycles or erroneously reset on loop re-entry.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-COMP-019-01',
        statement: 'In standard ISO flowchart conventions, an Oval represents terminal start/stop boundaries, a Parallelogram represents Input/Output operations, a Rectangle represents processing or arithmetic assignment, and a Diamond represents a conditional decision box with multiple exit branches.',
        claimType: 'TECHNICAL_DEFINITION',
        epistemicLevel: 'CANONICAL_CONSENSUS',
        confidence: 'CERTAIN',
        locator: 'Unit 18: PO Mains Algorithmic Flowcharts & Binary Logic Puzzle Patterns',
        excerpt: 'Oval: Denotes Start/Stop boundary. Parallelogram: Represents raw data entering or output. Rectangle: Computation or variable assignment. Diamond: Decision Box with at least two exit paths.',
      },
    ],
    examMappings: [
      { examCode: 'sbi-po', syllabusUnit: 'Reasoning & Computer Aptitude', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'ADVANCED', notes: 'Core model for 4-5 mark puzzle clusters in SBI PO Mains.' },
      { examCode: 'ibps-po', syllabusUnit: 'Reasoning & Computer Aptitude', relevance: 'CORE_SYLLABUS', priority: 'HIGH', requiredDepth: 'ADVANCED', notes: 'Standard flowchart variable tracing and binary coded direction puzzles.' },
      { examCode: 'rbi-assistant', syllabusUnit: 'Computer Knowledge', relevance: 'CORE_SYLLABUS', priority: 'MEDIUM', requiredDepth: 'INTERMEDIATE', notes: 'Flowchart symbols and page replacement concepts.' },
    ],
    revisionUnits: [
      { type: 'KEY_TAKEAWAY', content: 'Flowchart symbols: Capsule = Start/Stop; Parallelogram = I/O; Rectangle = Process; Diamond = Decision (2+ exit paths). Always build a Trace Table to solve PO Mains flowchart questions.', priority: 'HIGH', order: 1 },
      { type: 'FORMULA_RULE', content: 'Binary decoding powers: 64, 32, 16, 8, 4, 2, 1. Pythagorean triples: (3,4,5), (6,8,10), (5,12,13), (8,15,17).', priority: 'HIGH', order: 2 },
    ],
    questions: [
      {
        type: 'MULTIPLE_CHOICE',
        stem: 'In an ISO standard flowchart representation of an algorithm, which geometric symbol must be utilized to depict the condition: "Is Account Balance >= Minimum Daily Threshold"?',
        options: [
          'Rectangle',
          'Parallelogram',
          'Diamond (Rhombus)',
          'Oval (Capsule)',
          'Circle',
        ],
        correctAnswer: 'Diamond (Rhombus)',
        explanation: 'A Diamond (Rhombus) is the standard decision box in ISO flowcharts, used to test Boolean conditional statements and route execution through two or more alternative exit paths (e.g., Yes/No).',
        trapExplanation: 'A Rectangle represents arithmetic processing; a Parallelogram represents Input/Output; an Oval represents Start/Stop terminals.',
        difficulty: 'EASY',
      },
    ],
  },
];

export async function seedBatchComputerAptitudeCanonicalKnowledge() {
  console.log('Seeding Canonical Computer Aptitude & Digital Banking Systems Knowledge (19 Concepts across 9 Topics)...');

  // 1. Ensure Domain exists: Quantitative Aptitude & Reasoning
  const domain = await db.domain.upsert({
    where: { slug: 'quantitative-aptitude-and-reasoning' },
    update: {
      name: 'Quantitative Aptitude & Reasoning',
      description: 'Mathematical problem solving, arithmetic reasoning, data interpretation, computer aptitude, and quantitative logic for competitive examinations.',
      order: 8,
      status: 'ACTIVE',
    },
    create: {
      slug: 'quantitative-aptitude-and-reasoning',
      name: 'Quantitative Aptitude & Reasoning',
      description: 'Mathematical problem solving, arithmetic reasoning, data interpretation, computer aptitude, and quantitative logic for competitive examinations.',
      order: 8,
      status: 'ACTIVE',
    },
  });

  // 2. Ensure Target Subject exists
  const subject = await db.subject.upsert({
    where: { slug: 'computer-aptitude' },
    update: {
      name: 'Computer Aptitude & Digital Banking Systems',
      domainId: domain.id,
      scopeStatement: 'Comprehensive first-principles mastery of computer hardware architecture, CPU mechanics, firmware booting, input/output peripherals, memory hierarchies, operating systems, logic design, networking protocols, Microsoft Office automation, cybersecurity, and Indian digital banking IT infrastructure.',
      description: 'First-principles canonical mastery of computing hardware, software systems, networking, MS Office, cyber security, and banking technology.',
      order: 11,
      status: 'ACTIVE',
    },
    create: {
      slug: 'computer-aptitude',
      name: 'Computer Aptitude & Digital Banking Systems',
      domainId: domain.id,
      scopeStatement: 'Comprehensive first-principles mastery of computer hardware architecture, CPU mechanics, firmware booting, input/output peripherals, memory hierarchies, operating systems, logic design, networking protocols, Microsoft Office automation, cybersecurity, and Indian digital banking IT infrastructure.',
      description: 'First-principles canonical mastery of computing hardware, software systems, networking, MS Office, cyber security, and banking technology.',
      order: 11,
      status: 'ACTIVE',
    },
  });

  // 3. Ensure Target Banking Exams exist
  const ibpsRrb = await db.exam.upsert({
    where: { slug: 'ibps-rrb-scale-1' },
    update: {},
    create: {
      slug: 'ibps-rrb-scale-1',
      name: 'IBPS RRB Officer Scale-I & Office Assistant Examination',
      conductingBody: 'Institute of Banking Personnel Selection',
      description: 'National recruitment examination for Regional Rural Banks across India testing Computer Knowledge.',
    },
  });

  const ibpsPo = await db.exam.upsert({
    where: { slug: 'ibps-po' },
    update: {},
    create: {
      slug: 'ibps-po',
      name: 'IBPS Probationary Officer Examination',
      conductingBody: 'Institute of Banking Personnel Selection',
      description: 'National recruitment for Probationary Officers testing Reasoning & Computer Aptitude.',
    },
  });

  const sbiPo = await db.exam.upsert({
    where: { slug: 'sbi-po' },
    update: {},
    create: {
      slug: 'sbi-po',
      name: 'SBI Probationary Officer Examination',
      conductingBody: 'State Bank of India',
      description: 'Recruitment examination testing high-level Reasoning & Computer Aptitude.',
    },
  });

  const rbiAssistant = await db.exam.upsert({
    where: { slug: 'rbi-assistant' },
    update: {},
    create: {
      slug: 'rbi-assistant',
      name: 'RBI Assistant Examination',
      conductingBody: 'Reserve Bank of India',
      description: 'Recruitment examination for Assistants in the Reserve Bank of India with dedicated Computer Knowledge section.',
    },
  });

  const upscApfc = await db.exam.upsert({
    where: { slug: 'upsc-apfc' },
    update: {},
    create: {
      slug: 'upsc-apfc',
      name: 'UPSC Assistant Public Provident Commissioner (APFC) Examination',
      conductingBody: 'Union Public Service Commission',
      description: 'Recruitment examination for APFC/EO/AO testing Basic Knowledge of Computer Applications.',
    },
  });

  const examMap: Record<string, string> = {
    'ibps-rrb-scale-1': ibpsRrb.id,
    'ibps-po': ibpsPo.id,
    'sbi-po': sbiPo.id,
    'rbi-assistant': rbiAssistant.id,
    'upsc-apfc': upscApfc.id,
  };

  // 4. Ensure Source exists for Provenance
  const sourceComp = await db.source.upsert({
    where: { id: 'SRC-COMP-CANONICAL-2026' },
    update: {},
    create: {
      id: 'SRC-COMP-CANONICAL-2026',
      title: 'Computer Aptitude & Digital Banking Systems Canonical Reference Corpus (2026)',
      sourceType: 'ACADEMIC_CANONICAL_SYNTHESIS',
      authorityTier: 'PEER_REVIEWED_MATHEMATICAL_REFERENCE',
      description: 'Authoritative computer science and banking IT synthesis integrating IEEE/ISO computing standards, ANSI flowcharts, Von Neumann architecture, Microsoft Office specifications, and RBI/NPCI statutory digital payment directions.',
    },
  });

  // 5. Ensure Topics exist (7 Topics)
  const topicDefs = [
    {
      slug: 'computer-foundations-evolution-and-hardware-architecture',
      title: 'Computer Foundations, Evolution & Hardware Architecture',
      order: 1,
      description: 'Origins of computing, Charles Babbage, Von Neumann stored-program architecture, CPU internals, machine instruction cycle, system bus, and firmware boot lifecycle.',
    },
    {
      slug: 'peripherals-and-display-printing-technologies',
      title: 'Peripheral Systems & Display/Printing Technologies',
      order: 2,
      description: 'Human interface devices, QWERTY functional keyboard mappings, optical/magnetic capture (MICR, OCR, OMR, QR), visual displays, and impact vs non-impact printers.',
    },
    {
      slug: 'memory-hierarchy-cache-and-storage-systems',
      title: 'Memory Hierarchy, Cache & Storage Systems',
      order: 3,
      description: 'Storage measurement units, volatile SRAM vs DRAM, non-volatile ROM, multi-level CPU cache, virtual memory paging, hard disk geometry, optical media, and solid-state NVMe SSDs.',
    },
    {
      slug: 'operating-systems-process-management-and-logic-design',
      title: 'Operating Systems, Process Management & Logic Design',
      order: 4,
      description: 'Operating system architecture (Kernel vs Shell), language translators, process scheduling algorithms, FAT32 vs NTFS, binary radix conversions, logic gates, and ANSI flowcharts.',
    },
    {
      slug: 'computer-networking-osi-architecture-and-protocols',
      title: 'Computer Networking, OSI Architecture & Protocols',
      order: 5,
      description: 'Geographic network classification, topologies and link density formulas, networking devices, OSI 7-layer model vs TCP/IP suite, IPv4 vs IPv6, and well-known port protocols.',
    },
    {
      slug: 'microsoft-office-suite-and-workplace-productivity',
      title: 'Microsoft Office Master Suite & Workplace Productivity',
      order: 6,
      description: 'Microsoft Word document automation, Mail Merge, Microsoft Excel grid capacity, absolute referencing, VLOOKUP diagnostics, PowerPoint Slide Master, and universal keyboard shortcuts.',
    },
    {
      slug: 'information-security-malware-and-banking-infrastructure',
      title: 'Information Security, Malware & Banking Digital Infrastructure',
      order: 7,
      description: 'Malware taxonomy, social engineering attack vectors, symmetric vs asymmetric cryptography, IT Act 2000 provisions, Core Banking Solutions (CBS), NPCI payment rails, and RBI cyber frameworks.',
    },
    {
      slug: 'database-systems-sql-and-web-technologies',
      title: 'Database Management Systems, SQL & Web Technologies',
      order: 8,
      description: 'Relational data models, primary and foreign keys, ACID transactional properties, SQL syntax taxonomy (DDL, DML, DCL, TCL), HTTP/HTTPS architecture, status codes, and multimedia file formats.',
    },
    {
      slug: 'po-mains-algorithmic-flowcharts-and-binary-logic',
      title: 'PO Mains Algorithmic Flowcharts & Binary Logic Puzzles',
      order: 9,
      description: 'Advanced banking PO Mains computer aptitude puzzle patterns: conditional flowchart tracing, step-by-step loop state simulation, and binary-encoded direction/arithmetic logic models.',
    },
  ];

  const topicMap: Record<string, string> = {};
  for (const tDef of topicDefs) {
    const topic = await db.topic.upsert({
      where: {
        subjectId_slug: {
          subjectId: subject.id,
          slug: tDef.slug,
        },
      },
      update: {
        title: tDef.title,
        order: tDef.order,
        description: tDef.description,
      },
      create: {
        slug: tDef.slug,
        title: tDef.title,
        order: tDef.order,
        description: tDef.description,
        subjectId: subject.id,
      },
    });
    topicMap[tDef.slug] = topic.id;
  }

  // 6. Seed all 16 Concepts
  for (const cDef of COMPUTER_APTITUDE_CONCEPTS) {
    const topicId = topicMap[cDef.topicSlug];
    if (!topicId) throw new Error(`Missing topic for slug: ${cDef.topicSlug}`);

    const concept = await db.concept.upsert({
      where: { id: cDef.id },
      update: {
        slug: cDef.slug,
        title: cDef.title,
        shortDefinition: cDef.shortDefinition,
        difficulty: cDef.difficulty,
        order: cDef.order,
        topicId: topicId,
      },
      create: {
        id: cDef.id,
        slug: cDef.slug,
        title: cDef.title,
        shortDefinition: cDef.shortDefinition,
        difficulty: cDef.difficulty,
        order: cDef.order,
        topicId: topicId,
      },
    });

    // Clear child relations for clean idempotent seeding
    await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
    await db.examConceptMapping.deleteMany({ where: { conceptId: concept.id } });
    await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
    await db.question.deleteMany({ where: { conceptId: concept.id } });

    // Content Blocks
    for (const block of cDef.contentBlocks) {
      await db.contentBlock.create({
        data: {
          conceptId: concept.id,
          type: block.type,
          title: block.title,
          body: block.body,
          order: block.order,
          visibility: block.visibility,
        },
      });
    }

    // Claims & Evidence
    for (const claimDef of cDef.claims) {
      const claim = await db.claim.upsert({
        where: { id: claimDef.id },
        update: {
          statement: claimDef.statement,
          claimType: claimDef.claimType,
          epistemicLevel: claimDef.epistemicLevel,
          confidence: claimDef.confidence,
          conceptId: concept.id,
          status: 'CANONICAL_CLAIM',
        },
        create: {
          id: claimDef.id,
          statement: claimDef.statement,
          claimType: claimDef.claimType,
          epistemicLevel: claimDef.epistemicLevel,
          confidence: claimDef.confidence,
          conceptId: concept.id,
          status: 'CANONICAL_CLAIM',
        },
      });

      const existingEvidence = await db.evidence.findFirst({
        where: { claimId: claim.id, locator: claimDef.locator },
      });
      if (!existingEvidence) {
        await db.evidence.create({
          data: {
            claimId: claim.id,
            sourceId: sourceComp.id,
            locator: claimDef.locator,
            excerpt: claimDef.excerpt,
            evidenceType: 'PRIMARY_COMPUTING_SPECIFICATION',
            authority: 'ACADEMIC_PEER_REVIEWED',
            evidentiarySupport: 'STRONG_SUPPORT',
            extractionConfidence: 'HIGH',
          },
        });
      }
    }

    // Exam Mappings
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
            notes: em.notes,
          },
        });
      }
    }

    // Revision Units
    for (const ru of cDef.revisionUnits) {
      await db.revisionUnit.create({
        data: {
          conceptId: concept.id,
          type: ru.type,
          content: ru.content,
          priority: ru.priority,
          order: ru.order,
        },
      });
    }

    // Questions
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
        },
      });
    }

  }

  console.log('Successfully seeded 19 Canonical Computer Aptitude Concepts across 9 Topics into database.');
}
