import { db } from '../db/client';

export interface EnglishBatch2ConceptDef {
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
    isPYQ?: boolean;
    pyqYear?: number;
    pyqPaper?: string;
    pyqStage?: string;
    examinerTrapPattern?: string;
  }[];
}

export const ENGLISH_BATCH_2_CONCEPTS: EnglishBatch2ConceptDef[] = [
  // =========================================================================
  // TOPIC 63: Grammar Foundations & Syntactic Error Detection (CON-ENG-16 to 19)
  // =========================================================================
  {
    id: 'CON-ENG-16',
    slug: 'subject-verb-agreement-invariants-and-proximity-inversion-traps',
    title: 'Subject-Verb Agreement Invariants & Proximity Inversion Traps',
    shortDefinition: 'Foundational grammar mechanics governing number concord between subject and finite verb: intervening parenthetical qualifiers, proximity rules (either/or, neither/nor), fractional percentages, collective nouns, and inverted syntax.',
    difficulty: 'INTERMEDIATE',
    order: 16,
    topicSlug: 'grammar-foundations-and-syntactic-error-detection',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Core Concord Rule: Stripping the Noise to Find the Real Subject',
        body: `In spoken English, our ears are naturally lazy: we tend to make a verb agree with whatever noun was spoken immediately before it. If you hear:
> *"The collection of rare financial manuscripts in the library archives [is / are] being restored."*

Your ear hears *"library archives"* (plural) and instinctively wants to say *"are"*. But the archives are not being restored—the **collection** (singular) is being restored!

Subject-Verb Agreement in competitive examinations (Bank PO, SSC CGL, UPSC APFC) is fundamentally an exercise in **syntactic noise filtering**. Examiners deliberately insert lengthy parenthetical phrases, prepositional qualifiers, and inverted clauses between the true head noun and its verb to trigger the **Error of Proximity**. 

Mastering this concept requires treating a sentence as an analytical tree: identify the true grammatical head, discard all prepositional and parenthetical baggage, and apply invariant concord rules.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The 5 Master Subject-Verb Concord Rules & Structural Matrix',
        body: `### 1. Intervening Parenthetical Connectors
When two nouns are connected by:
* *as well as, along with, together with, with, in addition to, accompanied by, like, unlike, rather than, except, besides*
The verb **strictly agrees with the FIRST SUBJECT**. The intervening phrase is parenthetical and grammatically non-restrictive.
* *Example:* The Chief Executive Officer, along with fifteen senior branch managers, **was** present at the forensic audit (*NOT were*).

### 2. Correlative Proximity Connectors
When two subjects are joined by:
* *either...or, neither...nor, not only...but also, or, nor*
The verb **strictly agrees with the NEAREST SUBJECT** (the noun closest to the verb).
* *Example 1:* Neither the Branch Manager nor the probationary clerks **were** available (*nearest = clerks $\\implies$ plural*).
* *Example 2:* Neither the probationary clerks nor the Branch Manager **was** available (*nearest = Manager $\\implies$ singular*).

### 3. Quantitative & Distributive Determinants Matrix

| Structure / Determinant | Governing Noun Form | Governing Verb Form | Real Examination Example |
| :--- | :--- | :--- | :--- |
| **'Each of' / 'Every one of' / 'Either of' / 'Neither of' / 'One of'** | Strictly **Plural Noun** | Strictly **SINGULAR Verb** | Each of the thirty applicant banks **has** submitted its capital adequacy audit (*NOT have*). |
| **'One of the + Plural Noun + Relative Pronoun (who/which/that)'** | Strictly Plural Noun | Strictly **PLURAL Verb** | She is one of those dedicated compliance officers who **have** exposed systemic fraud (*NOT has*). |
| **'The only one of the + Plural Noun + Relative Pronoun'** | Strictly Plural Noun | Strictly **SINGULAR Verb** | He is the only one of the directors who **has** voted against the hostile acquisition. |
| **'A number of'** (Indefinite quantifier = many) | Plural Noun | Strictly **PLURAL Verb** | A number of retail depositors **are** protesting outside the regional office. |
| **'The number of'** (Definite statistical metric) | Plural Noun | Strictly **SINGULAR Verb** | The number of wilful corporate defaulters **has** decreased by 14% this fiscal. |
| **Percentages / Fractions ('X% of' / 'Two-thirds of')** | Depends on the following noun | Singular if uncountable; Plural if countable | • 60% of the loan book **is** secured.<br>• 60% of the branches **are** fully automated. |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Syntactic Parsing Algorithm & Error Spotting Protocol',
        body: `### The 3-Step Sentence Decomposition Algorithm
When analyzing any complex sentence for Subject-Verb Agreement:

1. **Step 1: Bracket All Prepositional & Parenthetical Modifiers.**
   * Prepositions (*of, in, to, for, with, on, at, by*) introduce modifiers, NOT subjects!
   * Identify parenthetical commas: *[along with...], [as well as...], [accompanied by...]*.
   * Mentally strike them out:
     > *"The proliferation [of fraudulent financial applications] [on unregulated online platforms] [has / have] surged."*
   * True head noun = *"The proliferation"* (singular).
   * Correct verb = **has surged**.

2. **Step 2: Inspect for Relative Pronoun Antecedents.**
   * When you see *who, which, that*, identify its direct physical antecedent.
   * In: *"Ramesh is one of the employees who [work / works] overtime."*
   * Antecedent of *who* is **employees** (plural). Therefore, *employees work overtime*. Ramesh is just one of them!

3. **Step 3: Check for Inversion (Locative & Negative Adverbs).**
   * When a sentence begins with a negative adverb (*Hardly, Scarcely, Seldom*) or a locative prepositional phrase (*Under the tree stood..., Behind the counter were...*), the subject is placed **AFTER the verb**.
   * *Example:* Under the ancient banyan tree **sat** three weary travelers (*travelers = plural subject, sat = plural past verb*).`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Collective Noun Shifts & Indefinite Pronouns',
        body: `### High-Frequency Subject-Verb Traps in Competitive Exams

1. **The 'One of the... Who' Antecedent Trap:**
   * *"He is one of the finest chartered accountants that has ever served on the advisory board."*
   * *Correction:* Change *has* to **have**. The antecedent of *that* is *chartered accountants* (plural), meaning many such accountants have served, and he is one of them.
   * *Exception:* If preceded by *"the only one"*, the verb is strictly singular: *"He is the only one of the accountants who has passed."*

2. **Collective Noun Discord (Jury, Committee, Board, Fleet):**
   * **United Action $\\implies$ Singular Verb:** *"The monetary policy committee has unanimously voted to maintain status quo."*
   * **Divided Opinions / Individual Actions $\\implies$ Plural Verb:** *"The committee were divided in their opinions regarding the repo rate hike."* (Notice plural pronoun *their*).

3. **Indefinite Pronouns: Singular vs Plural Invariants:**
   * Strictly Singular: *Everyone, everybody, someone, somebody, nobody, no one, anyone, anybody, everything, something, nothing, anything*.
   * *Trap:* *"Everyone among the branch employees were rewarded."* (Incorrect! Must be **was rewarded**).`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-ENG-16-1',
        statement: 'When two subjects are connected by parenthetical phrases such as as well as, along with, or together with, the finite verb agrees strictly with the first subject.',
        claimType: 'GRAMMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'English_Descriptive_Writing_Master.md#note-2',
        excerpt: 'Rule 1: As well as / Along with: When two subjects are joined by as well as, along with, with, together with, the verb agrees strictly with the FIRST SUBJECT.',
      },
      {
        id: 'CLM-ENG-16-2',
        statement: 'When two subjects are joined by correlative conjunctions (either...or, neither...nor, not only...but also), the verb agrees strictly with the nearest subject.',
        claimType: 'GRAMMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'English_Descriptive_Writing_Master.md#note-2',
        excerpt: 'Rule 2: Either...Or / Neither...Nor: the verb agrees with the NEAREST SUBJECT.',
      },
      {
        id: 'CLM-ENG-16-3',
        statement: 'The phrase "A number of" is followed by a plural verb signifying multiple entities, whereas "The number of" is strictly followed by a singular verb representing an aggregate metric.',
        claimType: 'GRAMMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'English_Descriptive_Writing_Master.md#note-2',
        excerpt: 'Rule 5: A number of takes a Plural Verb. The number of takes a Singular Verb.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'English Language — Error Detection & Sentence Correction',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'ADVANCED_SYNTACTIC_ANALYSIS',
        notes: 'Guaranteed 2-3 questions in Prelims Error Spotting and Phrase Replacement.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'English Language — Grammar Concord',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'ADVANCED_SYNTACTIC_ANALYSIS',
        notes: 'High weightage in Objective English and Sentence Improvement.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'General English — Spotting Errors',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_RULE_APPLICATION',
        notes: 'Direct 5-7 questions on Subject-Verb agreement and modifiers in EPFO/APFC.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'English Comprehension — Spot the Error',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'HIGH_SPEED_ACCURACY',
        notes: 'Core component of Tier 1 (2-3 questions) and Tier 2 (5+ questions).',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'Phase 1 English — Error Spotting & Syntax',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'COMPLEX_PARAGRAPH_PARSING',
        notes: 'Multi-sentence error spotting sets in Phase 1 English.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper IV (General English) — Grammar & Usage',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'DESCRIPTIVE_CORRECTION',
        notes: 'Direct 10-mark sentence correction questions in RAS Mains Paper 4.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'Compulsory English Paper — Grammar & Sentence Correction',
        relevance: 'SUPPORTING',
        priority: 'HIGH',
        requiredDepth: 'ACCURATE_SYNTACTIC_REWRITE',
        notes: 'Mandatory 10 marks of sentence correction in qualifying English.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Professional Communication & Business Writing',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'STANDARD_USAGE',
        notes: 'Applied in formal banking letters and loan proposal memos.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'As well as / Along with -> Verb agrees with 1st subject! Either/Or, Neither/Nor -> Verb agrees with NEAREST subject! Each of / One of -> Singular verb. One of the [plural] who -> PLURAL verb (unless "the only one"). A number of -> Plural; The number of -> Singular.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Subject-Verb Agreement Framework: 1) Eliminate prepositional noise: Ignore modifiers between subject and verb. 2) Asymmetrical Connectors: "along with/as well as" look back to the first noun; "either/or, neither/nor" look forward to the closest noun. 3) Distributives: "Each of / Neither of + Plural Noun + Singular Verb". 4) Relative Pronouns: In "one of the X who...", verb is plural because antecedent is plural X. 5) The number of = singular metric; A number of = plural quantifier.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Concord Architecture: 1) Syntactic Parsing: Head Noun + [Prepositional Modifiers] + [Parenthetical Additions] + Finite Verb. 2) First-Subject Rules: with, along with, as well as, together with, accompanied by, rather than. 3) Proximity Rules: or, nor, either...or, neither...nor, not only...but also. 4) Collectives: United = Singular; Divided = Plural. 5) Inversion: Negative adverbs (Seldom, Rarely) put auxiliary before subject. Locative phrases place subject after verb.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'ERROR_SPOTTING_MCQ',
        stem: 'Read the following sentence to find out whether there is any grammatical error in it. The error, if any, will be in one part of the sentence:\n(A) The Deputy Governor of the Reserve Bank, / (B) accompanied by several senior directors / (C) from the monetary policy department, / (D) were present at the international symposium.',
        options: ['(A)', '(B)', '(C)', '(D)', 'No error'],
        correctAnswer: '(D)',
        explanation: 'In part (D), the plural verb "were" must be replaced with the singular verb "was". When two nouns are joined by parenthetical connectors like "accompanied by", "along with", or "as well as", the verb strictly agrees with the FIRST subject. Here, the first subject is "The Deputy Governor" (singular), so the correct verb is "was present", regardless of the intervening plural noun "senior directors".',
        trapExplanation: 'The error of proximity causes students to match the verb to the nearest plural noun "senior directors" or "department".',
        difficulty: 'EASY',
        isPYQ: false,
        examinerTrapPattern: 'Parenthetical connector "accompanied by" error of proximity.',
      },
      {
        type: 'ERROR_SPOTTING_MCQ',
        stem: 'Identify the grammatically incorrect part in the following sentence:\n(A) He is undoubtedly / (B) one of the most brilliant research analysts / (C) who has contributed significantly / (D) to macroeconomic modeling in India.',
        options: ['(A)', '(B)', '(C)', '(D)', 'No error'],
        correctAnswer: '(C)',
        explanation: 'In part (C), "has contributed" must be corrected to "have contributed". When "one of the + plural noun" is followed by a relative pronoun ("who", "which", "that"), the relative pronoun refers to the plural antecedent noun ("research analysts"). Therefore, the verb in the relative clause must be plural: "...research analysts who have contributed significantly".',
        trapExplanation: 'Students focus on the singular pronoun "He" or "one" and incorrectly think the verb must be singular "has". The verb in the relative clause belongs to the plural antecedent "analysts".',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2023,
        pyqPaper: 'UPSC APFC / EPFO',
        pyqStage: 'Recruitment Test',
        examinerTrapPattern: 'Relative pronoun antecedent in "one of the X who" constructions.',
      },
    ],
  },
  {
    id: 'CON-ENG-17',
    slug: 'parallelism-correlative-conjunctions-and-balanced-syntactic-structures',
    title: 'Parallelism, Correlative Conjunctions & Balanced Syntactic Structures',
    shortDefinition: 'Principles of syntactic parallelism: grammatical balancing across coordinating and correlative conjunctions (not only...but also, both...and, either...or), structural consistency in series, and preventing asymmetrical shifts.',
    difficulty: 'INTERMEDIATE',
    order: 17,
    topicSlug: 'grammar-foundations-and-syntactic-error-detection',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Syntactic Symmetry: Why Asymmetrical Sentences Jar the Reader',
        body: `Imagine an architect designing a neoclassical building with grand Roman columns. On the left side of the entrance, there are four majestic fluted marble columns. On the right side, the builder installs three wooden planks and a steel pipe. The building looks deformed, lopsided, and structurally grotesque.

In written English, **Parallelism is architectural symmetry for sentences**. 

When elements in a sentence share the same grammatical function—whether in a list, a comparison, or linked by conjunctions—they MUST share the **exact same grammatical form**:
* Noun paired with Noun
* Gerund paired with Gerund
* Infinitive paired with Infinitive
* Clause paired with Clause

If you write: *"She enjoys reading economic journals, analyzing financial statements, and to conduct branch audits"*, the third item breaks symmetry with a jarring thud (*reading, analyzing... to conduct*). It must be *reading, analyzing, and conducting*.

In competitive exams, examiners relentlessly test **Correlative Conjunction Placement**: if *not only* precedes a verb, *but also* must precede a verb, NOT a prepositional phrase!`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The Master Correlative Conjunction Pairs & Parallel Architecture',
        body: `### 1. The Fixed Correlative Conjunction Canonical Pairs
In standard English, correlative conjunctions exist in **strict, unalterable pairs**:

| Conjunction Pair | Complementary Connector | Unacceptable Examination Corruptions |
| :--- | :--- | :--- |
| **Not only** | strictly paired with **But also** | *Not only... and also / but / as well* |
| **Both** | strictly paired with **And** | *Both... as well as / along with / together with* |
| **Either** | strictly paired with **Or** | *Either... nor / and* |
| **Neither** | strictly paired with **Nor** | *Neither... or / and* |
| **Between** | strictly paired with **And** | *Between... to / until* |
| **From** | strictly paired with **To** | *From... and / until* |
| **Whether** | strictly paired with **Or** | *Whether... and / if* |

### 2. The Golden Rule of Position Matching
> **Whatever grammatical part of speech immediately follows the second correlative element MUST be the exact same part of speech that immediately follows the first correlative element!**

* **Faulty Placement:** *The bank not only defrauded retail depositors but also corporate investors.*
  * Look after *but also*: *"corporate investors"* (Noun Phrase).
  * Look after *not only*: *"defrauded"* (Verb).
  * **Asymmetry!** Verb on one side, Noun on the other.
* **Correct Parallel Placement:** *The bank defrauded **not only** [retail depositors] **but also** [corporate investors].*
  * Both *not only* and *but also* now introduce identical direct object noun phrases!`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Parallelism Diagnostics & Series Balancing Rules',
        body: `### 1. Parallelism in Coordinate Series
When three or more elements are connected in a series by *and* or *or*, all elements must share identical morphology:
* **Gerund Series:** *The regulatory authority is responsible for [monitoring] capital ratios, [investigating] suspicious transactions, and [enforcing] statutory compliance.* (All V-ing).
* **Infinitive Series:** *The officer decided [to scrutinize] the ledger, [verify] the collateral, and [submit] the report.* (After initial *to*, subsequent infinitives can drop *to*, but must remain bare infinitives: *scrutinize, verify, submit*).
* **Adjective Series:** *The new banking policy is [transparent], [equitable], and [sustainable].*

### 2. Inversion with Negative Correlatives
When a sentence begins with correlative pairs involving negative adverbs:
* **Hardly / Scarcely + Had + Subject + V3 ... WHEN + Subject + V2**
  * *Example:* **Hardly had** the governor announced the repo rate hike **when** bond prices tumbled.
* **No sooner + Did + Subject + V1 (or Had + Subject + V3) ... THAN + Subject + V2**
  * *Example:* **No sooner had** the market opened **than** institutional investors initiated sell-offs.
  * *Rule:* Never use *when* with *No sooner*; never use *than* with *Hardly/Scarcely*!`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps: "Both... As well as" & Shift in Voice',
        body: `### High-Yield Parallelism Traps in Banking & Civil Services Exams

1. **The 'Both... As well as' Trap (Ubiquitous in Bank PO!):**
   * *"The audit committee questioned both the internal auditor as well as the chief risk officer."*
   * *Correction:* Replace *as well as* with **and**. The pair is strictly **both... and**.

2. **Shift in Voice / Mood within a Sentence:**
   * *Faulty:* *"The loan application was reviewed by the credit manager, and he approved the disbursement."* (Shift from passive *was reviewed* to active *he approved*).
   * *Parallel:* *"The credit manager reviewed the loan application and approved the disbursement."* (Both active).

3. **Comparison Parallelism ('Than' / 'As... As'):**
   * *Faulty:* *"The non-performing assets of public sector banks are higher than private sector banks."*
   * *Trap:* You are comparing *assets* to *banks*! You must compare assets to assets.
   * *Correction:* *"The non-performing assets of public sector banks are higher than **those of** private sector banks."* (Use *that of* for singular, *those of* for plural).`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-ENG-17-1',
        statement: 'The correlative conjunction "Both" must be strictly paired with "And", and never with "as well as", "along with", or "together with".',
        claimType: 'GRAMMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'English_Descriptive_Writing_Master.md#note-2',
        excerpt: 'Correlative Conjunctions: Both paired with AND, never as well as.',
      },
      {
        id: 'CLM-ENG-17-2',
        statement: 'In correlative structures such as not only...but also, both elements must govern structurally identical grammatical units (noun with noun, verb with verb, prepositional phrase with prepositional phrase).',
        claimType: 'SYNTACTIC_INVARIANT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'English_Descriptive_Writing_Master.md#note-2',
        excerpt: 'Parallelism: ensure balanced syntactic parts of speech across both correlative arms.',
      },
      {
        id: 'CLM-ENG-17-3',
        statement: 'The negative temporal connector "No sooner" strictly correlates with "THAN" with auxiliary inversion, whereas "Hardly" and "Scarcely" strictly correlate with "WHEN".',
        claimType: 'GRAMMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'English_Descriptive_Writing_Master.md#note-2',
        excerpt: 'Rule 7 & 8: Hardly/Scarcely paired with WHEN; No Sooner paired with THAN.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'English Language — Parallelism & Phrase Replacement',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'ADVANCED_SYNTACTIC_ANALYSIS',
        notes: 'Frequent source of Phrase Replacement and Error Spotting questions.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'English Language — Correlative Conjunctions',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'ADVANCED_SYNTACTIC_ANALYSIS',
        notes: 'High weightage in Objective English sections.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'General English — Sentence Structure & Parallelism',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_RULE_APPLICATION',
        notes: 'Correlative conjunction matching is heavily tested in EPFO/APFC.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'English Comprehension — Sentence Improvement',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'HIGH_SPEED_ACCURACY',
        notes: 'Standard 2-3 questions in Tier 2 sentence improvement.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'Phase 1 English — Sentence Correction',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'SYNTACTIC_PRECISION',
        notes: 'Tested in multi-clause complex error stems.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper IV — Conjunctions & Sentence Correction',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'DESCRIPTIVE_CORRECTION',
        notes: 'Tested in direct correction exercises in RAS Paper 4.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'Compulsory English — Parallel Structures',
        relevance: 'SUPPORTING',
        priority: 'HIGH',
        requiredDepth: 'ACCURATE_SYNTACTIC_REWRITE',
        notes: 'Correcting faulty comparisons (those of / that of) in qualifying English.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Business Communication — Professional Syntax',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'STANDARD_USAGE',
        notes: 'Essential for clear, unambiguous regulatory reports and memos.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Both... AND (never as well as). Not only... BUT ALSO (position match!). Hardly/Scarcely... WHEN (auxiliary inversion). No sooner... THAN (never when). Between... AND (never to). Comparisons: compare like with like ("higher than THOSE OF private banks").',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Syntactic Parallelism Rules: 1) Position Matching: What follows "not only" must match what follows "but also". If "but also" has a noun, "not only" must have a noun. 2) Fixed Pairs: Both... and; Between... and; No sooner... than; Hardly... when; Lest... should (no "not"). 3) Faulty Comparisons: Never compare an attribute directly to an institution: use "that of" (singular) or "those of" (plural). 4) Coordinate Series: Keep all verbs in the same form (e.g., all gerunds: reading, writing, analyzing).',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Parallelism & Conjunction Architecture: 1) Structural Symmetry: Noun=Noun, V-ing=V-ing, To+V1=To+V1. 2) Correlative Balancing: Place conjunctions immediately adjacent to the parallel units. 3) Illogical Comparison Invariant: A of X > B of Y -> A of X > that/those of Y. 4) Negative Inversion Dynamics: No sooner did [S] [V1] than... / Hardly had [S] [V3] when...',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'ERROR_SPOTTING_MCQ',
        stem: 'Identify the grammatically incorrect part in the following sentence:\n(A) The financial restructuring plan / (B) aims not only to reduce sovereign debt / (C) but also at stabilizing / (D) domestic consumer price inflation.',
        options: ['(A)', '(B)', '(C)', '(D)', 'No error'],
        correctAnswer: '(C)',
        explanation: 'In part (C), "but also at stabilizing" violates parallelism. In part (B), "not only" is followed by an infinitive phrase: "to reduce sovereign debt". Therefore, "but also" must be followed by a parallel infinitive phrase: "to stabilize domestic consumer price inflation" (or rewrite both as prepositional gerund phrases: "aims at not only reducing... but also stabilizing..."). Mixing an infinitive with a prepositional gerund violates syntactic parallelism.',
        trapExplanation: 'Students often overlook the mismatched verb structures ("to reduce" vs "at stabilizing") because both convey purpose semantically.',
        difficulty: 'INTERMEDIATE',
        isPYQ: false,
        examinerTrapPattern: 'Asymmetrical verbal structures across not only...but also.',
      },
      {
        type: 'ERROR_SPOTTING_MCQ',
        stem: 'Identify the error in the sentence:\n(A) No sooner had the finance minister / (B) concluded his budgetary address / (C) when the benchmark stock indices / (D) witnessed a sharp correction.',
        options: ['(A)', '(B)', '(C)', '(D)', 'No error'],
        correctAnswer: '(C)',
        explanation: 'In part (C), "when" must be replaced with "than". The correlative conjunction "No sooner" is strictly paired with "than" (No sooner... than). "When" is only used with "Hardly" and "Scarcely" (Hardly/Scarcely had... when).',
        trapExplanation: 'Mixing "when" with "No sooner" is one of the most common and deliberate examiner traps in Bank PO and SSC CGL.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'SBI PO Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Correlative pair mismatch: No sooner paired with when instead of than.',
      },
    ],
  },
  {
    id: 'CON-ENG-18',
    slug: 'modifier-placement-dangling-participles-misplaced-and-squinting-modifier-traps',
    title: 'Modifier Placement: Dangling Participles, Misplaced & Squinting Modifier Traps',
    shortDefinition: 'Syntactic modifier logic: participial clauses, the dangling modifier trap, misplaced relative clauses, squinting adverbs, and restoring logical agency in academic and legal discourse.',
    difficulty: 'ADVANCED',
    order: 18,
    topicSlug: 'grammar-foundations-and-syntactic-error-detection',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Walking Loan Files: How Misplaced Modifiers Create Absurd Meanings',
        body: `Consider this sentence written by an exhausted bank probationary officer:
> *"Walking down the branch corridor, the loan files dropped from his hand."*

In English syntax, an introductory participial phrase (*"Walking down the branch corridor"*) has no stated subject. By absolute grammatical rule, **the subject of the introductory phrase is automatically assumed to be the grammatical subject of the main clause that immediately follows the comma**.

In that sentence, what is the subject of the main clause? **"The loan files"**!
Therefore, the sentence literally means that the loan files grew legs, walked down the corridor, and dropped themselves! 

This is the classic **Dangling Modifier**. Because the files cannot walk, the modifier dangles without a logical agent.

To fix it, the person doing the walking must immediately follow the comma:
> *"Walking down the branch corridor, **he** dropped the loan files."*
OR make the introductory clause independent:
> *"As **he** was walking down the branch corridor, the loan files dropped from his hand."*

Misplaced modifiers create unintentional comedy, legal ambiguity, and severe exam score deductions.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'Taxonomy of Modifier Errors & Structural Correction Blueprint',
        body: `### 1. The 3 Types of Modifier Pathology

| Modifier Pathology | Defining Syntactic Failure | Illogical Prototype | Grammatically Restored Prototype |
| :--- | :--- | :--- | :--- |
| **Dangling Modifier** | Introductory phrase lacks the logical agent that performs its action | *Having scrutinized the balance sheet, the loan was sanctioned by the manager.* (Did the loan scrutinize the balance sheet?) | *Having scrutinized the balance sheet, **the manager sanctioned** the loan.* |
| **Misplaced Modifier** | Modifier is placed too far from the noun it modifies, attaching to the wrong word | *The bank officer handed a foreclosure notice to the defaulter **that was stamped in red ink**.* (Was the defaulter stamped in red ink?) | *The bank officer handed a foreclosure notice **stamped in red ink** to the defaulter.* |
| **Squinting Modifier** | Modifier is positioned ambiguously between two phrases, could modify either | *Auditors who conduct audits **frequently** find accounting irregularities.* (Do they conduct audits frequently, or frequently find errors?) | • *Auditors who **frequently conduct** audits find irregularities.*<br>• *Auditors who conduct audits find accounting irregularities **frequently**.* |

### 2. The Limiting Adverb Placement Law
Limiting adverbs (*only, just, nearly, almost, barely, merely*) **strictly modify the exact word that immediately follows them**. Moving *only* changes the entire legal meaning:
1. ***Only** the manager authorized the transaction.* (Nobody else authorized it).
2. *The manager **only** authorized the transaction.* (He did nothing else—did not sign, audit, or execute it).
3. *The manager authorized **only** the transaction.* (He authorized nothing else—no other files or vouchers).
4. *The manager authorized the transaction **only** on Friday.* (On no other day).`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'The Participial Agency Check Algorithm',
        body: `### The 2-Step Participial Agency Test
Whenever a sentence begins with a verbal participial phrase:
$$\\text{[Participial Phrase: } V\\text{-ing} \\dots \\text{ / Having } + V3 \\dots \\text{ / Being } \\dots \\text{]}, \\quad [\\text{Subject}] + [\\text{Verb}] \\dots$$

1. **Step 1: Ask "WHO is performing the action in the introductory phrase?"**
   * *Sentence:* *"Being a rainy day, the branch remained closed."*
   * Who is *"Being a rainy day"*?
2. **Step 2: Check the Subject immediately after the comma.**
   * The subject is *"the branch"*.
   * Is *"the branch"* a rainy day? **No! A branch is a physical building, not a weather phenomenon!**
   * The participle *Being* is dangling without an impersonal subject!
3. **Step 3: Apply the Impersonal Pronoun 'It' or Temporal Subordination:**
   * **Corrected:** *"**It being a rainy day**, the branch remained closed."*
   * OR: *"**As it was a rainy day**, the branch remained closed."*`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps: Passive Voice Danglers & Adjectival Relatives',
        body: `### High-Frequency Examiner Traps in Modifiers

1. **The Passive Voice Trap (The #1 Dangler Generator):**
   * Sentences starting with a participle that transition into a passive main clause almost always dangle:
     * *Incorrect:* *"Upon entering the bank vault, **the alarm was triggered** by the guard."*
     * *Correction:* *"Upon entering the bank vault, **the guard triggered** the alarm."*

2. **The 'Being' Trap in Weather & Time:**
   * *"Being a national holiday, we decided to visit the heritage monument."* (Faulty: implies *we* are a national holiday).
   * *Correction:* *"**It being** a national holiday, we decided to visit..."*

3. **Misplaced Prepositional Phrases:**
   * *"The manager reported that the security guard was sleeping on his mobile phone."*
   * *Correction:* *"On his mobile phone, the manager reported that the security guard was sleeping."* (Otherwise, the guard is sleeping physically on top of a phone!).`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-ENG-18-1',
        statement: 'An introductory participial phrase must be followed immediately by the logical noun or pronoun that performs the action of the participle, otherwise it constitutes a dangling modifier.',
        claimType: 'SYNTACTIC_INVARIANT',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'English_Descriptive_Writing_Master.md#note-2',
        excerpt: 'Dangling Modifier Trap: Walking down the corridor, loan files dropped. Correct: As he was walking, he dropped files.',
      },
      {
        id: 'CLM-ENG-18-2',
        statement: 'Introductory phrases expressing weather, season, or time beginning with "Being" require the impersonal pronoun "It" to provide an explicit grammatical subject (e.g. "It being a rainy day").',
        claimType: 'GRAMMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'English_Descriptive_Writing_Master.md#note-2',
        excerpt: 'Participial agency: impersonal pronoun it is required for meteorological and temporal introductory participles.',
      },
      {
        id: 'CLM-ENG-18-3',
        statement: 'Limiting adverbs such as "only", "just", and "almost" strictly modify the exact syntactic constituent that immediately follows them in sentence order.',
        claimType: 'SYNTACTIC_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'English_Descriptive_Writing_Master.md#note-2',
        excerpt: 'Modifiers: placement of only and limiting adverbs strictly governs propositional scope.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'English Language — Modifier Placement & Error Detection',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'ADVANCED_SYNTACTIC_ANALYSIS',
        notes: 'Frequent source of Mains Sentence Correction questions.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'English Language — Sentence Correction',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'ADVANCED_SYNTACTIC_ANALYSIS',
        notes: 'Tested in Error Spotting and Phrase Replacement.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'General English — Spotting Errors (Modifiers)',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_RULE_APPLICATION',
        notes: 'Classic EPFO/APFC trap questions on participial danglers.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'English Comprehension — Sentence Improvement',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'HIGH_SPEED_ACCURACY',
        notes: 'Regular questions on "Being" vs "It being" in Tier 1 and Tier 2.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'Phase 1 English — Advanced Sentence Correction',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'SYNTACTIC_PRECISION',
        notes: 'Tested in multi-clause complex sentences.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper IV — Correction of Sentences',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'DESCRIPTIVE_CORRECTION',
        notes: 'Direct 2-mark sentence rewrites in RAS Paper 4.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'Compulsory English — Sentence Rewriting',
        relevance: 'SUPPORTING',
        priority: 'HIGH',
        requiredDepth: 'SYNTACTIC_REWRITE',
        notes: 'Classic question on rewriting dangling modifier sentences.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Business Communication — Unambiguous Documentation',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'STANDARD_USAGE',
        notes: 'Preventing legal ambiguity in loan agreements and audit notices.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Dangling Modifier: The noun after the comma MUST be the entity doing the introductory action! "Walking down hall, files dropped" = files were walking (WRONG). "Being a rainy day" must be "IT being a rainy day". Limiting adverbs (only, just) modify the word immediately following them.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Modifier Placement Rules: 1) Participial Test: Ask "Who is doing this action?" and check the subject right after the comma. If it is passive or inanimate, it is dangling. 2) The "Being" Rule: Never start a sentence with "Being a rainy day / holiday"; always write "It being a rainy day" or "As it was a rainy day". 3) Misplaced Modifiers: Place modifiers as close as possible to the words they modify to avoid absurd unintended meanings.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Modifier Syntactic Architecture: 1) Dangling Participle: [V-ing / Having V3], [Subject] [Verb]. Grammatical rule assigns Subject as actor of introductory participle. 2) Misplaced Modifiers: Separating noun and modifier by intervening words causes attachment to wrong constituent. 3) Squinting Modifiers: Adverb placed between two verbs can modify either. 4) Limiting Adverbs: Restrict scope strictly to immediate successor.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'ERROR_SPOTTING_MCQ',
        stem: 'Identify the grammatically incorrect part in the following sentence:\n(A) Being an extremely hot / (B) and humid afternoon, / (C) the regional audit committee / (D) decided to adjourn the proceedings.',
        options: ['(A)', '(B)', '(C)', '(D)', 'No error'],
        correctAnswer: '(A)',
        explanation: 'Part (A) contains a dangling modifier. As written, the introductory participial phrase "Being an extremely hot and humid afternoon" grammatically attaches to the subject of the main clause, "the regional audit committee". This creates the absurd meaning that the audit committee itself is a hot and humid afternoon! To correct it, provide an impersonal subject for the weather condition: "It being an extremely hot and humid afternoon..." or "As it was an extremely hot and humid afternoon, the regional audit committee decided..."',
        trapExplanation: 'Students often overlook "Being" because it sounds natural in colloquial Indian English, failing to recognize that the participle lacks a valid logical agent.',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2021,
        pyqPaper: 'UPSC APFC / EPFO',
        pyqStage: 'Recruitment Test',
        examinerTrapPattern: 'Dangling participle with impersonal weather condition lacking "It".',
      },
      {
        type: 'ERROR_SPOTTING_MCQ',
        stem: 'Identify the error in the following sentence:\n(A) Having scrutinized / (B) the forged loan documents, / (C) the suspect was immediately arrested / (D) by the investigating police officer.',
        options: ['(A)', '(B)', '(C)', '(D)', 'No error'],
        correctAnswer: '(C)',
        explanation: 'In part (C), the passive construction creates a dangling modifier. The introductory phrase "Having scrutinized the forged loan documents" attaches to "the suspect", implying that the suspect scrutinized his own forged documents before being arrested. The logical agent doing the scrutinizing is the investigating police officer. To correct, change the main clause from passive to active: "...the investigating police officer immediately arrested the suspect."',
        trapExplanation: 'Passive voice in the main clause hides the true actor and turns the object into the false subject of the introductory participle.',
        difficulty: 'ADVANCED',
        isPYQ: false,
        examinerTrapPattern: 'Passive voice main clause generating a dangling modifier.',
      },
    ],
  },
  {
    id: 'CON-ENG-19',
    slug: 'tense-consistency-aspectual-sequencing-and-conditional-clauses',
    title: 'Tense Consistency, Aspectual Sequencing & Conditional Clauses',
    shortDefinition: 'Temporal mechanics of English discourse: Past Perfect antecedent logic, aspectual sequencing across complex sentences, hypothetical subjunctive mood ("If I were"), and the 4 canonical conditional structures.',
    difficulty: 'ADVANCED',
    order: 19,
    topicSlug: 'grammar-foundations-and-syntactic-error-detection',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Time-Travel Machine: Sequencing Past Events in Strict Order',
        body: `Imagine watching a movie where two events happened in the past: first, a thief broke into a bank vault at midnight; second, the security guard arrived at 2:00 AM. 

If you say in English:
> *"When the security guard arrived, the thief fled."*

This means both events happened simultaneously—the guard entered, and the thief ran away right in front of him. 

But what if the thief had already escaped an hour earlier? 
In English, you cannot use simple past for both! You must use the **Past Perfect tense (*had + V3*)** to act as a temporal anchor pointing to the **EARLIER of the two past events**:
> *"When the security guard arrived, the thief **had fled**."*

In competitive exams, examiners test this **Antecedent Past Law**, as well as the **Subjunctive Mood** in hypothetical conditionals: when imagining an impossible or unreal scenario (*"If I were the Governor of RBI"*), the verb is strictly **were**, NEVER *was*!`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The Canonical Conditional Clauses Matrix & Subjunctive Invariants',
        body: `### 1. The 4 Canonical Conditional Structures

| Conditional Type | Temporal Reality | If-Clause (Condition) | Main Clause (Consequence) | Model Banking Example |
| :--- | :--- | :--- | :--- | :--- |
| **Zero Conditional** | Universal scientific / logical truth | Simple Present (*V1 / V5*) | Simple Present (*V1 / V5*) | If the central bank **raises** reserve ratios, commercial lending capacity **contracts**. |
| **Type 1 (Real / Open)** | Possible future event based on present condition | Simple Present (*V1 / V5*) | *will / can / may / shall + Bare Infinitive (V1)* | If the borrower **submits** the collateral deed tomorrow, the bank **will sanction** the loan. |
| **Type 2 (Hypothetical / Unreal Present)** | Imaginary / contrary to present fact | Simple Past (*V2*) or Subjunctive **WERE** | *would / could / might + Bare Infinitive (V1)* | If the government **were** to privatize all PSBs today, foreign capital **would surge**. |
| **Type 3 (Unfulfilled Past / Regret)** | Contrary to past fact; impossible to change | Past Perfect (*had + V3*) | *would have / could have / might have + V3* | If the compliance team **had detected** the shell company, the fraud **would have been averted**. |

### 2. The Hypothetical Subjunctive 'WERE' Law
For all unreal, counter-factual, or wishful conditions, the verb *to be* is **invariably 'were' for ALL subjects** (singular or plural, first, second, or third person):
* *Correct:* If I **were** the Chief Risk Officer... (*NEVER If I was*)
* *Correct:* She speaks as if she **were** the managing director.
* *Correct:* I wish he **were** more diligent with regulatory reporting.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Aspectual Sequencing & Past Perfect Precedence Algorithm',
        body: `### 1. The Two-Event Past Precedence Algorithm
When two distinct events occurred at different times in the past:
$$\\text{Event 1 (Happened First)} \\implies \\mathbf{\\text{Past Perfect } (had + V3)}$$
$$\\text{Event 2 (Happened Later)} \\implies \\mathbf{\\text{Simple Past } (V2)}$$

* **Formula with 'Before':**
  $$\\text{[Event 1: } had + V3 \\text{]} \\quad \\text{BEFORE} \\quad \\text{[Event 2: } V2 \\text{]}$$
  * *Example:* The corporate debtor **had liquidated** his assets before the enforcement directorate **sealed** the premises.
* **Formula with 'After':**
  $$\\text{[Event 2: } V2 \\text{]} \\quad \\text{AFTER} \\quad \\text{[Event 1: } had + V3 \\text{]}$$
  * *Example:* The enforcement directorate **sealed** the premises after the debtor **had liquidated** his assets.

### 2. Time Clashing: Never Use Future Tense in a Time Clause!
Clauses introduced by temporal conjunctions (*when, as soon as, until, unless, before, after, by the time*):
* **RULE:** **NEVER use 'will' or 'shall' inside the time/conditional clause!**
* *Incorrect:* *When the governor will arrive, the conference will begin.*
* *Correct:* *When the governor **arrives**, the conference will begin.* (Time clause takes Simple Present).`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps: "Since" Tense Invariant & Inverted Conditionals',
        body: `### High-Frequency Tense Traps in Competitive Exams

1. **The 'Since' Specific Tense Anchor Invariant:**
   When *since* is used as a conjunction of time:
   $$\\mathbf{\\text{Present Perfect } (has/have + V3)} \\quad \\text{SINCE} \\quad \\mathbf{\\text{Simple Past } (V2)}$$
   * *Correct:* Ten years **have elapsed** since the Insolvency and Bankruptcy Code **was enacted** in 2016.
   * *Trap:* Writing *"Ten years have elapsed since the Code has been enacted"* (Incorrect!).

2. **Inverted Type 3 Conditionals (Omitting 'If'):**
   * Standard: *If the auditor had scrutinized the ledger, the diversion would have been caught.*
   * Inverted (High Exam Frequency!): ***Had the auditor scrutinized** the ledger, the diversion would have been caught.*
   * *Trap:* Students see *Had* at the beginning and think it is a question! It is an elegant conditional inversion.

3. **By the Time + Simple Past vs Future Perfect:**
   * Past: *By the time the auditor arrived (V2), the staff **had destroyed** the evidence (had + V3).*
   * Future: *By the time the audit finishes tomorrow, the bank **will have disbursed** all rural credits (will have + V3).*`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-ENG-19-1',
        statement: 'When two actions occurred at different times in the past, the earlier antecedent action requires the Past Perfect tense (had + V3), while the subsequent action requires the Simple Past tense (V2).',
        claimType: 'GRAMMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'English_Descriptive_Writing_Master.md#note-2',
        excerpt: 'Past temporal sequencing: earlier past event takes had + V3; subsequent event takes V2.',
      },
      {
        id: 'CLM-ENG-19-2',
        statement: 'In hypothetical or unreal conditional sentences (Type 2), the subjunctive mood mandates the form "were" for all grammatical subjects, singular and plural.',
        claimType: 'GRAMMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'English_Descriptive_Writing_Master.md#note-2',
        excerpt: 'Hypothetical Subjunctive Were: In unreal conditions, use were for all subjects (e.g. If I were the Governor), NEVER If I was.',
      },
      {
        id: 'CLM-ENG-19-3',
        statement: 'In Type 3 unfulfilled past conditionals, the condition requires Past Perfect (If + had + V3) and the consequence strictly requires would have / could have + V3.',
        claimType: 'GRAMMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'English_Descriptive_Writing_Master.md#note-2',
        excerpt: 'Type 3 Unfulfilled Past Condition: Past Perfect (If + had + V3) paired with would have / could have + V3.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'English Language — Tenses & Conditional Clauses',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'ADVANCED_SYNTACTIC_ANALYSIS',
        notes: 'Heavily tested in Error Detection and Sentence Completion.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'English Language — Tenses & Conditionals',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'ADVANCED_SYNTACTIC_ANALYSIS',
        notes: 'Standard 2-3 questions across Prelims and Mains.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'General English — Tenses & Subjunctive Mood',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_RULE_APPLICATION',
        notes: 'High weightage in EPFO/APFC English component.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'English Comprehension — Tenses & Conditionals',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'HIGH_SPEED_ACCURACY',
        notes: 'Direct 3-5 questions in Tier 2 Error Spotting and Improvement.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'Phase 1 English — Advanced Tenses',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'SYNTACTIC_PRECISION',
        notes: 'Tested in multi-clause conditional stems.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper IV — Tenses & Sequence of Tenses',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'DESCRIPTIVE_CORRECTION',
        notes: 'Direct tense-correction questions in RAS Paper 4.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'Compulsory English — Correct Tense Usage',
        relevance: 'SUPPORTING',
        priority: 'HIGH',
        requiredDepth: 'ACCURATE_SYNTACTIC_REWRITE',
        notes: 'Mandatory sentence correction exercises.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Business Communication — Temporal Precision',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'STANDARD_USAGE',
        notes: 'Ensures clear chronological reporting in audit and credit memos.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Conditionals: Type 1: If + V1, will + V1. Type 2 (Unreal): If + WERE (never was), would + V1. Type 3 (Past): If + had V3, would have V3. Never put will/shall in an If-clause or When-clause! Past sequencing: Earlier event = had + V3; Later event = V2.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Tense & Conditional Framework: 1) Past Sequencing: Earlier action takes Past Perfect (had + V3); subsequent action takes Simple Past (V2). 2) Subjunctive "Were": All hypothetical conditions use "were" regardless of subject ("If he were the manager"). 3) Future Prohibition: Time clauses (when, until, as soon as) take Simple Present, never future "will". 4) Since Rule: Present Perfect + SINCE + Simple Past.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Aspectual & Conditional Architecture: 1) Zero: Present -> Present (scientific truth). 2) Type 1: Present -> will+V1 (open future). 3) Type 2: Past/Were -> would+V1 (hypothetical present). 4) Type 3: Had+V3 -> would have+V3 (unfulfilled past). 5) Inversion: Had S V3, S would have V3. 6) Temporal Invariant: Event 1 (had V3) before Event 2 (V2).',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'ERROR_SPOTTING_MCQ',
        stem: 'Identify the grammatically incorrect part in the following sentence:\n(A) If the chief risk officer / (B) was aware of the fraudulent overseas transactions, / (C) he would have alerted / (D) the financial intelligence unit immediately.',
        options: ['(A)', '(B)', '(C)', '(D)', 'No error'],
        correctAnswer: '(B)',
        explanation: 'Part (B) violates Type 3 conditional grammar. The main clause contains "would have alerted" (would have + V3), which signifies an unfulfilled past condition. Therefore, the If-clause must be in the Past Perfect tense: "If the chief risk officer HAD BEEN aware of the fraudulent overseas transactions...". Using simple past "was" creates an invalid mixed conditional.',
        trapExplanation: 'Students often accept "was" because it is in the past tense, failing to check that Type 3 consequences ("would have + V3") strictly require a Past Perfect condition ("had + V3").',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2023,
        pyqPaper: 'IBPS PO Prelims',
        pyqStage: 'Prelims',
        examinerTrapPattern: 'Type 3 conditional clause mismatch (was instead of had been).',
      },
      {
        type: 'ERROR_SPOTTING_MCQ',
        stem: 'Identify the error in the following sentence:\n(A) As soon as the regulatory authority / (B) will publish the final guidelines, / (C) commercial banks will begin / (D) upgrading their cyber-resilience architecture.',
        options: ['(A)', '(B)', '(C)', '(D)', 'No error'],
        correctAnswer: '(B)',
        explanation: 'In part (B), "will publish" is grammatically incorrect. In time and conditional clauses introduced by conjunctions such as "as soon as", "when", "until", and "if", the future tense ("will/shall") cannot be used. The clause must use the Simple Present tense to refer to future time: "As soon as the regulatory authority publishes the final guidelines...".',
        trapExplanation: 'Students see that the entire action will occur in the future and mistakenly assume both clauses must carry "will". Time clauses strictly reject modal auxiliary "will".',
        difficulty: 'EASY',
        isPYQ: false,
        examinerTrapPattern: 'Using future tense "will" inside an introductory time clause.',
      },
    ],
  },

  // =========================================================================
  // TOPIC 64: Vocabulary, Phrasal Verbs & Contextual Collocations (CON-ENG-20, 21)
  // =========================================================================
  {
    id: 'CON-ENG-20',
    slug: 'prepositional-idioms-dependent-prepositions-and-high-frequency-collocations',
    title: 'Prepositional Idioms, Dependent Prepositions & High-Frequency Collocations',
    shortDefinition: 'Exhaustive dictionary of dependent prepositions and fixed collocations: prepositional gerund constraints (prohibit from, refrain from), false preposition additions (comprise, order, discuss), and precision vocabulary pairs for Banking & Administrative exams.',
    difficulty: 'ADVANCED',
    order: 20,
    topicSlug: 'vocabulary-phrasal-verbs-and-collocations',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Arbitrary Grammar: Why Prepositions Cannot Be Translated Literally',
        body: `Why do we say *"interested IN finance"* but *"proficient AT accounting"*? Why do we say *"concur WITH a colleague"* but *"accede TO a demand"*?

Prepositions are the most idiosyncratic and arbitrary elements of the English language. You cannot deduce them through logical deduction or literal mother-tongue translation. In Hindi, you say *"mujhse naraz"* (angry with me); but if you translate word-for-word into English, you might say *"angry ON me"*—which is an immediate $-0.25$ penalty! (In English, you are *angry WITH a person*, but *angry AT a situation*).

In competitive exams, examiners rely on **Prepositional Idioms** and **Superfluous Prepositions** to separate candidates who memorize grammar rules from candidates who possess genuine linguistic fluency. 

Words like *comprise, enter, discuss, and order* are transitive verbs that take direct objects without any preposition. Adding *"comprise of"* or *"discuss about"* is a fatal examiner trap!`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'Master Dependent Prepositions & Superfluous Preposition Matrix',
        body: `### 1. The Superfluous Preposition Hall of Shame (Never Add These!)

| Verb | ❌ Common Exam Error | ✅ Correct Usage | Critical Explanatory Invariant |
| :--- | :--- | :--- | :--- |
| **Comprise** | *The committee comprises of five members.* | *The committee **comprises** five members.* | *Comprise* means *consist of*. Therefore, *comprise of* is a redundant double preposition! *(Note: Passive "is comprised of" is acceptable, but active "comprises" takes no "of").* |
| **Discuss** | *We discussed about the NPA crisis.* | *We **discussed** the NPA crisis.* | *Discuss* means *talk about*. Adding *about* is redundant. |
| **Enter** | *He entered into the bank branch.* | *He **entered** the bank branch.* | Entering physical spaces takes NO preposition! *(Exception: Figurative entry takes into: "entered into an agreement").* |
| **Order** | *He ordered for two cups of coffee.* | *He **ordered** two cups of coffee.* | *Order* takes a direct object. |
| **Resemble** | *She resembles to her mother.* | *She **resembles** her mother.* | *Resemble* takes NO preposition. |
| **Cope** | *He cannot cope up with the workload.* | *He cannot **cope with** the workload.* | *Cope up with* does NOT exist in standard English! It is strictly **cope with**. |

### 2. High-Frequency Dependent Preposition Dictionary

| Fixed Preposition | Governing Verbs & Adjectives | Illustrative Banking / Administrative Example |
| :--- | :--- | :--- |
| **FROM (+ Gerund V-ing)** | *prohibit, prevent, abstain, refrain, debar, deter, dissuade* | The tribunal **prohibited** the promoter **from liquidating** his equity shares. |
| **OF** | *accuse, acquit, deprive, beware, cognizant, void, bereft* | The court **acquitted** the branch manager **of** all charges of negligence. |
| **TO** | *senior, junior, prior, superior, inferior, prefer, vulnerable, accede, adhere* | Public debt sustainability is **superior to** unbridled fiscal expansion. |
| **WITH** | *comply, cope, coincide, coordinate, agree (with a person), dispense* | Commercial banks must strictly **comply with** RBI liquidity guidelines. |
| **AT** | *aim, rejoice, marvel, hint, proficient, arrive (at a small place)* | She is exceptionally **proficient at** credit risk modeling. |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'The Gerund Prohibition Rule & Dual-Preposition Verbs',
        body: `### 1. The Gerund Prohibition Formula
Verbs of prevention, avoidance, and restraint strictly follow this syntactic formula:
$$\\mathbf{\\text{[Subject]} + \\text{[Prevent / Prohibit / Abstain / Refrain / Debar]} + (\\text{Object}) + \\mathbf{FROM} + \\mathbf{V\\text{-ing}}}$$
* **Examiner Trap:** Replacing *from + V-ing* with an infinitive *to + V1*.
  * *Incorrect:* *The court restrained him to sell the property.*
  * *Correct:* *The court restrained him **from selling** the property.*
  * *Incorrect:* *Please abstain to consume alcohol on duty.*
  * *Correct:* *Please abstain **from consuming** alcohol on duty.*

### 2. Dual-Preposition Verbs (Meaning Shifts Based on Preposition!)
* **Agree:**
  * Agree **WITH** a person: *I agree with the auditor.*
  * Agree **TO** a proposal/terms: *The board agreed to the merger terms.*
  * Agree **ON** a matter: *They agreed on the final valuation.*
* **Angry:**
  * Angry **WITH** a person: *The manager was angry with the clerk.*
  * Angry **AT** a situation/thing: *The manager was angry at the delayed audit.*
* **Part:**
  * Part **WITH** a possession: *The debtor refused to part with his ancestral land.*
  * Part **FROM** a person: *He wept when parting from his mentor.*`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Latin Adjectives & Collocation Precision',
        body: `### High-Yield Prepositional Traps in Exams

1. **Latin Comparatives Take 'TO', Never 'THAN':**
   * Words ending in *-ior*: *Senior, junior, superior, inferior, prior, anterior, posterior*.
   * Also: *Prefer, preferable*.
   * *Incorrect:* *This sovereign bond issue is superior than domestic corporate paper.*
   * *Correct:* *This sovereign bond issue is superior **to** domestic corporate paper.*

2. **The "Cope up with" Epidemic:**
   * In spoken Indian English, *"cope up with"* is pervasive.
   * In competitive exams, it is an automatic diagnostic error.
   * **Rule:** Standard English only recognizes **cope with** (meaning to manage or deal successfully with).

3. **High-Frequency Policy Collocations for Descriptive Writing:**
   * Do NOT write: *"The government took steps to decrease inflation."*
   * Write: *"The government enacted fiscal interventions to **curb / rein in** inflationary pressures."*
   * Do NOT write: *"The RBI made banks stronger."*
   * Write: *"The RBI instituted macroprudential guidelines to **bolster the resilience** of commercial banks."*`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-ENG-20-1',
        statement: 'The transitive verb "comprise" means "consist of" and takes no preposition in active voice; adding "of" is grammatically incorrect.',
        claimType: 'GRAMMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'English_Descriptive_Writing_Master.md#note-2',
        excerpt: 'Superfluous prepositions: Comprise takes no "of" in active voice.',
      },
      {
        id: 'CLM-ENG-20-2',
        statement: 'Verbs of restraint such as prohibit, prevent, abstain, and refrain strictly require the preposition "from" followed by a gerund (from + V-ing), rejecting infinitives.',
        claimType: 'GRAMMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'English_Descriptive_Writing_Master.md#note-2',
        excerpt: 'Prohibit / Prevent + FROM + Gerund: He was prohibited to enter vault is INCORRECT. Correct: prohibited FROM ENTERING.',
      },
      {
        id: 'CLM-ENG-20-3',
        statement: 'Latin comparative adjectives ending in -ior (senior, junior, superior, inferior, prior) and the verb "prefer" strictly require the preposition "to" rather than "than".',
        claimType: 'GRAMMATICAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'English_Descriptive_Writing_Master.md#note-2',
        excerpt: 'Latin Comparatives: Senior, junior, superior, prior are followed by TO, never than.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'English Language — Prepositions & Phrasal Verbs',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_PREPOSITIONAL_MASTERY',
        notes: 'Guaranteed 3-4 questions in Fillers, Cloze Test, and Error Spotting.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'English Language — Dependent Prepositions',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_PREPOSITIONAL_MASTERY',
        notes: 'Core scoring area in Prelims and Mains English.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'General English — Prepositions & Collocations',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_RULE_APPLICATION',
        notes: 'Preposition errors are the single highest frequency category in UPSC EPFO/APFC.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'English Comprehension — Prepositional Usage',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'HIGH_SPEED_ACCURACY',
        notes: 'Guaranteed 5-6 questions across Tier 1 and Tier 2.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'Phase 1 English — Prepositional Idioms',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'ADVANCED_CONTEXTUAL_SELECTION',
        notes: 'Tested in high-level Cloze Test and sentence improvement sets.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper IV — Prepositions',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'DESCRIPTIVE_FILLERS',
        notes: 'Dedicated 5-mark question exclusively on prepositions in RAS Paper 4.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'Compulsory English — Prepositions & Idioms',
        relevance: 'SUPPORTING',
        priority: 'HIGH',
        requiredDepth: 'CORRECT_USAGE',
        notes: 'Direct 5-mark question on fill in the blanks with appropriate prepositions.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Business Communication — Legal & Regulatory Drafting',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'STANDARD_USAGE',
        notes: 'Essential for legally sound compliance and audit drafting.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'No Preposition: Comprise (NO of!), Discuss (NO about!), Order (NO for!), Cope WITH (never "cope up with"). Prevention verbs: Prohibit/Refrain/Abstain + FROM + V-ing (never "to"). Latin comparatives (superior, senior, prior, prefer) + TO (never than). Angry WITH person / AT thing.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Prepositional Rules: 1) Redundant Prepositions: Never say "comprises of", "discussed about", "ordered for", or "entered into a room". 2) "Cope with": "Cope up with" is entirely incorrect in standard English. 3) Prevention: Prohibit, prevent, debar, abstain, refrain take FROM + Gerund. 4) Latin Comparatives: Senior, junior, superior, prior, preferable take TO, never than. 5) Contextual Shift: Agree with a person, agree to a proposal.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Preposition & Collocation Architecture: 1) Transitive Zero-Preposition Verbs: comprise, discuss, enter, order, resemble. 2) Gerund Restraint Frame: [Subject] + [Restrain] + [Object] + FROM + V-ing. 3) Latin Adjectival Relatives: -ior adjectives + TO. 4) Semantic Prepositional Divergence: Part with (object) vs Part from (person); Angry with (person) vs Angry at (behavior).',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'ERROR_SPOTTING_MCQ',
        stem: 'Identify the grammatically incorrect part in the following sentence:\n(A) Despite working under severe pressure, / (B) the newly appointed branch manager / (C) could not cope up with / (D) the demanding workload.',
        options: ['(A)', '(B)', '(C)', '(D)', 'No error'],
        correctAnswer: '(C)',
        explanation: 'In part (C), "cope up with" is a classic colloquial error. The correct English idiom is strictly "cope with" (meaning to deal successfully with a difficult situation). The word "up" is superfluous and grammatically incorrect.',
        trapExplanation: '"Cope up with" is so ubiquitous in conversational Indian English that candidates often fail to spot it as an error.',
        difficulty: 'EASY',
        isPYQ: true,
        pyqYear: 2022,
        pyqPaper: 'SBI PO Mains',
        pyqStage: 'Mains',
        examinerTrapPattern: 'Superfluous preposition "up" in the idiom "cope with".',
      },
      {
        type: 'ERROR_SPOTTING_MCQ',
        stem: 'Identify the error in the sentence:\n(A) Under the new financial regulations, / (B) the board of directors / (C) prohibited the executive director / (D) to enter the confidential trading floor.',
        options: ['(A)', '(B)', '(C)', '(D)', 'No error'],
        correctAnswer: '(D)',
        explanation: 'In part (D), "to enter" must be replaced with "from entering". Verbs of prevention and restraint (prohibit, prevent, debar, deter, refrain, abstain) strictly require the preposition "from" followed by a gerund ("from entering"), rather than an infinitive ("to enter").',
        trapExplanation: 'The ear accepts the infinitive "prohibited him to enter" because verbs like "allowed him to enter" take an infinitive. But prohibition verbs strictly demand "from + V-ing".',
        difficulty: 'INTERMEDIATE',
        isPYQ: true,
        pyqYear: 2023,
        pyqPaper: 'UPSC APFC / EPFO',
        pyqStage: 'Recruitment Test',
        examinerTrapPattern: 'Infinitive replacement of required "from + gerund" with prohibition verbs.',
      },
    ],
  },
  {
    id: 'CON-ENG-21',
    slug: 'phrasal-verbs-register-shifts-and-contextual-semantic-differentiation',
    title: 'Phrasal Verbs, Register Shifts & Contextual Semantic Differentiation',
    shortDefinition: 'Advanced idiomatic vocabulary: high-yield competitive phrasal verbs (account for, bring about, call off, scale back, bail out), separable vs inseparable phrasals, and formal academic vs conversational register modulation.',
    difficulty: 'ADVANCED',
    order: 21,
    topicSlug: 'vocabulary-phrasal-verbs-and-collocations',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'The Semantic Chameleon: How a Preposition Changes a Verb Entirely',
        body: `Consider the simple verb **look**. 
* If you **look at** something, you direct your physical gaze toward it.
* If you **look for** something, you search for a missing object.
* If you **look after** someone, you care for them.
* If you **look down upon** someone, you feel superior to them.
* If you **look into** a matter, you conduct a formal investigation!

This is the power of a **Phrasal Verb**: combining a simple base verb with a prepositional particle creates a completely new, idiomatic meaning that cannot be guessed by breaking down the individual words.

In banking and administrative examinations (SBI PO, RBI Grade B, UPSC), phrasal verbs appear extensively in **Cloze Tests**, **Phrase Replacement**, and **Double Fillers**. 

Furthermore, writing high-scoring descriptive essays requires mastering **Register Shifts**: knowing when to replace casual conversational phrasal verbs (*"look into"*) with formal Latinate academic prose (*"investigate"* or *"scrutinize"*).`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'Master Banking & Administrative Phrasal Verbs Taxonomy',
        body: `### 1. High-Frequency Competitive Phrasal Verbs Dictionary

| Phrasal Verb | Core Semantic Meaning | High-Yield Banking / Policy Context |
| :--- | :--- | :--- |
| **Account for** | 1. Explain the cause of; 2. Constitute a proportion | MSMEs **account for** approximately 30% of India's Gross Domestic Product. |
| **Bail out** | Rescue an entity from financial collapse with capital | The sovereign government intervened to **bail out** the stressed cooperative banks. |
| **Bring about** | Cause something to happen; effectuate change | The introduction of the IBC 2016 **brought about** a cultural shift in borrower compliance. |
| **Call off** | Cancel an event, strike, or proceeding | The labour unions agreed to **call off** the indefinite strike after ministerial talks. |
| **Carry out** | Execute, implement, or perform a task | Forensic auditors were commissioned to **carry out** a detailed audit of related-party assets. |
| **Clamp down on** | Impose severe restrictions or crack down upon | The RBI has **clamped down on** unauthorized peer-to-peer digital lending apps. |
| **Fend off** | Defend against or repel a hostile challenge | The domestic commercial bank successfully **fended off** a hostile takeover bid. |
| **Scale back** | Reduce the scope, volume, or budget of an operation | Monetary authorities decided to **scale back** quantitative easing liquidity injections. |
| **Wind up** | Liquidate or formally close down a business entity | The insolvency tribunal ordered the liquidator to **wind up** the unviable corporate debtor. |

### 2. Register Shifts: Conversational Phrasals vs Formal Academic Equivalents
In descriptive writing (UPSC CSE, RBI Grade B, SBI PO Mains), replacing conversational multi-word phrasals with concise academic verbs elevates the analytical register:

| Informal / Conversational Phrasal | Formal Academic & Administrative Register | Model Formal Usage |
| :--- | :--- | :--- |
| *Look into* | **Investigate / Scrutinize** | The central bank will **scrutinize** algorithmic underwriting biases. |
| *Get rid of* | **Eliminate / Eradicate** | The policy aims to **eradicate** systemic corruption in public procurement. |
| *Put off* | **Postpone / Defer** | The monetary committee chose to **defer** policy rate cuts. |
| *Bring up* | **Raise / Broach** | Representatives **broached** the issue of liquidity buffers. |
| *Give up* | **Relinquish / Surrender** | The defaulting promoter was compelled to **relinquish** operational control. |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'Separable vs Inseparable Phrasal Verb Mechanics',
        body: `### The Transitivity & Separability Rules
1. **Inseparable Phrasal Verbs:** The verb and particle must remain physically glued together. The direct object CANNOT be inserted between them:
   * *Look into:* *The committee looked into the fraud* (Correct). *The committee looked the fraud into* (Completely Ungrammatical!).
   * Other inseparables: *come across, cope with, run into, account for, abide by*.

2. **Separable Phrasal Verbs:** The particle can appear before OR after a noun object:
   * *Call off:* *They called off the strike* = *They called the strike off*.
   * **The Pronoun Invariant Rule:** If the direct object is a **pronoun** (*it, them, him, her*), the pronoun **MUST be placed between the verb and the particle**:
     * *Correct:* *They called it off.*
     * *Incorrect:* *They called off it.*
     * *Correct:* *Turn it down.* (*NOT Turn down it*).
     * *Correct:* *Write it down.* (*NOT Write down it*).`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, False Phrasal Confusions & Cloze Test Strategy',
        body: `### High-Frequency Phrasal Verb Traps in Cloze Tests

1. **The 'Call for' vs 'Call off' vs 'Call on' Confusion:**
   * **Call for:** Require or publicly demand: *"The crisis **calls for** decisive regulatory intervention."*
   * **Call off:** Cancel: *"The workers **called off** the strike."*
   * **Call on / upon:** Formally invite or visit: *"The Governor **called upon** commercial banks to bolster provisioning."*

2. **The 'Bear with' vs 'Bear out' vs 'Bear down' Confusion:**
   * **Bear with:** Tolerate with patience: *"Please **bear with** us during core-banking system migration."*
   * **Bear out:** Confirm, substantiate, or corroborate: *"Recent macroeconomic telemetry **bears out** the central bank's optimistic growth projections."*

3. **Double Fillers Strategy in Bank PO:**
   * When solving Cloze Tests, evaluate the preposition particle first! If the blank is followed by *"for"*, verbs like *account* or *call* become immediate prime candidates. If followed by *"into"*, consider *look* or *enter*.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-ENG-21-1',
        statement: 'In separable phrasal verbs, if the direct object is a pronoun (it, them, him), the pronoun must be placed strictly between the base verb and the prepositional particle.',
        claimType: 'SYNTACTIC_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'English_Descriptive_Writing_Master.md#note-2',
        excerpt: 'Phrasal Verbs: Pronoun objects must be inserted between verb and particle (call it off, never call off it).',
      },
      {
        id: 'CLM-ENG-21-2',
        statement: 'The phrasal verb "account for" carries two distinct canonical meanings: to explain the cause of an outcome, or to constitute a specified proportion of a whole.',
        claimType: 'SEMANTIC_DEFINITION',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'English_Descriptive_Writing_Master.md#note-2',
        excerpt: 'High-frequency phrasal verbs: account for signifies both explanation of causes and percentage composition.',
      },
      {
        id: 'CLM-ENG-21-3',
        statement: 'Elevating descriptive writing register requires modulating conversational phrasal verbs into precise Latinate academic verbs (e.g. replacing "look into" with "scrutinize" or "investigate").',
        claimType: 'DISCOURSE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'English_Descriptive_Writing_Master.md#note-2',
        excerpt: 'Register Modulation: Academic prose replaces informal multi-word phrasals with precise single Latinate verbs.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'English Language — Phrasal Verbs & Cloze Test',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'ADVANCED_CONTEXTUAL_SELECTION',
        notes: 'Guaranteed 4-5 questions in Cloze Test and Double Fillers.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'English Language — Phrase Replacement & Fillers',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'ADVANCED_CONTEXTUAL_SELECTION',
        notes: 'High-frequency testing in Prelims and Mains.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'General English — Idioms & Phrasal Verbs',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_RULE_APPLICATION',
        notes: 'Direct 3-5 questions testing meanings of phrasal verbs.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'English Comprehension — Phrasal Verbs & Cloze Test',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'HIGH_SPEED_ACCURACY',
        notes: 'Crucial component of Tier 1 and Tier 2 Cloze test passages.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'Phase 1 English — Cloze Test & Vocabulary',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'FINANCIAL_CONTEXT_MASTERY',
        notes: 'Phrasal verbs in banking and macroeconomic contexts.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper IV — Phrasal Verbs & Idioms',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'DESCRIPTIVE_SENTENCE_CONSTRUCTION',
        notes: 'Dedicated 5-mark question asking candidates to use phrasals in sentences.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'Compulsory English — Phrasal Verbs & Idioms',
        relevance: 'SUPPORTING',
        priority: 'HIGH',
        requiredDepth: 'SENTENCE_FORMATION',
        notes: 'Mandatory 10-mark section requiring sentence creation with given phrasals.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Business Communication — Professional Vocabulary',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'FORMAL_REGISTER',
        notes: 'Ensures correct formal register in banking customer letters.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Phrasals: Account for = explain or constitute %. Bail out = financial rescue. Call off = cancel. Call for = demand. Bear out = confirm/corroborate. Scale back = reduce. Pronoun objects must be split inside separable phrasals: "call it off" (never call off it).',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Phrasal Verb Mastery: 1) Particle Sensitivity: Look at (observe), look into (investigate), look after (care for), look for (search). 2) Pronoun Separation: Pronouns MUST go inside separable phrasals ("call it off", "turn it down"). 3) Cloze Test Strategy: Match the trailing preposition to eliminate incorrect base verbs. 4) Register: In essays, swap "look into" for "scrutinize", and "get rid of" for "eradicate".',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Phrasal Verb Architecture: 1) Syntax: Verb + Particle (adverb/preposition). 2) Transitivity: Transitive takes object; Intransitive does not (e.g. give in, break down). 3) Separability Invariant: Noun object can follow or split; Pronoun object MUST split. 4) Academic Register Shift: Multi-word Germanic phrasal -> Single Latinate verb.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'VOCABULARY_MCQ',
        stem: 'Select the most appropriate phrasal verb to fill in the blank:\nThe persistent inflationary trends and geopolitical supply disruptions have compelled the finance ministry to ____________ its ambitious annual disinvestment target.',
        options: ['call off', 'scale back', 'wind up', 'bail out'],
        correctAnswer: 'scale back',
        explanation: '"Scale back" means to reduce the size, scope, or target of an operation or budget. In the context of economic headwinds, ministries "scale back" targets. "Call off" means to cancel completely (too extreme when targets are just trimmed). "Wind up" means to liquidate a company. "Bail out" means to financially rescue.',
        trapExplanation: 'Choosing "call off" ignores the nuance that targets are usually adjusted downward rather than outright cancelled.',
        difficulty: 'INTERMEDIATE',
        isPYQ: false,
        examinerTrapPattern: 'Contextual nuance differentiation between scaling back vs calling off.',
      },
      {
        type: 'ERROR_SPOTTING_MCQ',
        stem: 'Identify the error in the sentence:\n(A) Due to the untimely technical outage / (B) across the centralized trading platform, / (C) the clearing corporation decided / (D) to call off it immediately.',
        options: ['(A)', '(B)', '(C)', '(D)', 'No error'],
        correctAnswer: '(D)',
        explanation: 'In part (D), "to call off it" violates the Pronoun Separation Rule of separable phrasal verbs. When the direct object of a separable phrasal verb is a pronoun ("it", "them"), the pronoun must strictly be placed BETWEEN the verb and the particle: "to call it off immediately". Writing "call off it" is grammatically invalid.',
        trapExplanation: 'Candidates often fail to notice that pronoun objects must split separable phrasals, treating pronouns identically to full noun phrases.',
        difficulty: 'ADVANCED',
        isPYQ: false,
        examinerTrapPattern: 'Violating the pronoun separation rule in separable phrasal verbs.',
      },
    ],
  },

  // =========================================================================
  // TOPIC 65: Objective Reading Comprehension & Discourse Analysis (CON-ENG-22, 23)
  // =========================================================================
  {
    id: 'CON-ENG-22',
    slug: 'objective-reading-comprehension-tone-identification-primary-purpose-and-critical-inferences',
    title: 'Objective Reading Comprehension: Tone Identification, Primary Purpose & Critical Inferences',
    shortDefinition: 'Analytical methodologies for Objective Reading Comprehension: passage tone categorization (didactic, cynical, laudatory, analytical), primary purpose formulation, inference vs explicit fact differentiation, and eliminating extreme answer choices.',
    difficulty: 'ADVANCED',
    order: 22,
    topicSlug: 'objective-reading-comprehension-and-discourse',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Reading Beyond the Words: Decoding the Author\'s Hidden Blueprint',
        body: `When candidates read an RC passage in an exam, most read **passively**—like someone watching scenery pass by a train window. They read for plot and facts, and when asked: *"What is the author's primary purpose?"* or *"What can be logically inferred?"*, they frantically scan the passage looking for matching keywords.

This keyword-matching habit is precisely where examiners set their deadliest traps! 

Examiners know that if they copy-paste a sentence directly from paragraph 2 into Option A, candidates will pick it like moths to a flame—even if Option A answers an entirely different question or is merely a supporting detail rather than the **Primary Purpose**.

Elite reading comprehension is **active reverse-engineering**:
1. You do not read for facts; you read for **authorial intent and argument structure**.
2. You identify the **Tone** through adjective-verb valence (is the author praising, critiquing, coldly diagnosing, or preaching?).
3. You distinguish an **Inference** (what MUST logically be true based on the premises, but is NOT stated verbatim) from an **Explicit Fact**.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The Master RC Tone Taxonomy & Critical Inference Principles',
        body: `### 1. The Canonical RC Tone Taxonomy Matrix

| Tone Classification | Underlying Authorial Posture | Key Diction / Lexical Markers | Typical Passage Genre |
| :--- | :--- | :--- | :--- |
| **Analytical / Objective** | Dispassionate, balanced, evaluates pros and cons based on evidence | *evidence suggests, however, data indicates, on balance, comparative metrics* | Central bank reports, economic policy reviews, scientific papers. |
| **Critical / Censorious** | Identifies flaws, condemns policies, highlights negative repercussions | *fallacious, short-sighted, disastrously, miscalculated, regulatory failure* | Editorials critiquing fiscal deficits, environmental degradation. |
| **Laudatory / Eulogistic** | Praises, commends, celebrates accomplishments enthusiastically | *revolutionary, commendable, visionary, monumental achievement, exemplary* | Tributes to pioneers, celebratory profiles of DPI or space missions. |
| **Didactic / Pedantic** | Aims to teach, instruct, lecture, or impart moral / operational lessons | *one must understand, it is vital to learn, fundamental principles dictate* | Educational textbooks, ethical philosophical essays. |
| **Cynical / Derisive** | Distrustful of human sincerity, mocks motives, sarcastic disbelief | *so-called reform, mere window dressing, purported benefits, self-serving* | Political satires, scathing critiques of corporate greenwashing. |
| **Concerned / Apprehensive** | Expresses anxiety over future risks, urges proactive caution | *troubling trend, alarming vulnerability, unchecked risks, precarious* | Climate crisis warnings, AI cybersecurity threat analyses. |

### 2. The 3 Golden Laws of Critical Inferences
1. **The 'Unstated Truth' Invariant:** An inference is **NEVER explicitly written in the passage**. If Option A is a direct, word-for-word quote from the text, it is a factual recall statement, NOT an inference!
2. **The Minimum Extension Rule:** A valid inference extends only **one logical millimeter** beyond the text. It must be a 100% unavoidable consequence of the given premises.
3. **The Extreme Diction Red Flag:** Eliminate options containing absolute, extreme words (*never, always, completely, exclusively, all, impossible*) unless the author explicitly used equally extreme language. Authors rarely speak in absolutes.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'The Primary Purpose & Title Elimination Algorithm',
        body: `### The 3-Step Primary Purpose & Title Selection Algorithm

1. **Step 1: Formulate the Core Idea Before Looking at Options.**
   * After reading, summarize the passage in one sentence:
     $$\\text{[Author] } + \\text{[Verb (critiques / advocates / analyzes)]} + \\text{[Central Subject]} + \\text{[Specific Angle]}$$
   * *Pre-thinking prevents you from being seduced by deceptive distractor options!*

2. **Step 2: Apply the Scope Filter (The Goldilocks Principle for Titles):**
   * **Too Broad (Eliminate!):** The option discusses the entire universe when the passage only discussed one planet (e.g. *"Banking in India"* when the passage was solely about *"Digital Payment Fraud in UPI"*).
   * **Too Narrow (Eliminate!):** The option focuses exclusively on an example or detail mentioned in only one paragraph (e.g. *"The Role of Deepfakes in Voice Cloning"* when that was just one sub-example in a broader cyber-resilience essay).
   * **Just Right:** Captures both the central subject AND the author's primary directional angle.

3. **Step 3: Analyze the Action Verb in Primary Purpose Questions:**
   * Does the passage *explain* a mechanism, *advocate* a reform, *reconcile* two opposing views, or *dismantle* a popular myth?
   * If the passage presents two opposing theories and finds common ground, the primary purpose is to **reconcile**, NOT to advocate!`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps: True-in-Reality vs True-in-Passage & Distractors',
        body: `### High-Frequency Reading Comprehension Traps

1. **The "True-in-Reality" Trap (The Most Common APFC & Civil Services Trap!):**
   * An option states a fact that is 100% factually true in real life (e.g. *"The Reserve Bank of India regulates commercial banks"*).
   * **Trap:** The passage never mentioned this fact, or the question specifically asked: *"According to the passage..."*
   * *Rule:* Outside knowledge is completely forbidden in RC! If it is not in the text, it is FALSE for that question.

2. **The Partial Truth / Half-Right Distractor:**
   * The first half of the option matches the passage word-for-word, but the last two words subtly alter the meaning or introduce an unproven causal link (*"...which directly caused the market collapse"*).
   * *Defense:* Read every option through to its very last word before selecting.

3. **Attributed Opinion vs Authorial Fact:**
   * If the text says: *"Proponents argue that cryptocurrency guarantees financial privacy..."*
   * *Trap:* Selecting an option that claims: *"The author believes cryptocurrency guarantees financial privacy."*
   * The author only stated what *proponents argue*, not what the author endorses!`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-ENG-22-1',
        statement: 'A valid logical inference in Reading Comprehension must be an unstated but strictly necessary deduction from the text, distinguishing it from explicit factual repetition.',
        claimType: 'METHODOLOGICAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'English_Descriptive_Writing_Master.md#note-3',
        excerpt: 'Subjective RC Methodology: Factually anchored & syntactically precise; reverse-scan inference verification.',
      },
      {
        id: 'CLM-ENG-22-2',
        statement: 'The optimal title of a comprehension passage must satisfy the Goldilocks Scope Invariant: it can be neither excessively broad (capturing general domain) nor excessively narrow (capturing single-paragraph supporting examples).',
        claimType: 'DISCOURSE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'English_Descriptive_Writing_Master.md#note-3',
        excerpt: 'Mandatory Compound Noun Title: Captures both core subject and overarching policy nuance.',
      },
      {
        id: 'CLM-ENG-22-3',
        statement: 'Passage tone is strictly determined through authorial adjective-verb valence, distinguishing analytical objectivity from critical, laudatory, didactic, or cynical postures.',
        claimType: 'DISCOURSE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'English_Descriptive_Writing_Master.md#note-3',
        excerpt: 'Zero Personal Opinions: Retains all core policy nuances without injecting external bias.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'English Language — Reading Comprehension (Prelims & Mains)',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'ADVANCED_INFERENCE_AND_TONE',
        notes: 'Heavily weighted in Prelims (10 marks) and Mains (15-20 marks).',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'English Language — Reading Comprehension',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'ADVANCED_INFERENCE_AND_TONE',
        notes: 'Core section in both Prelims and Mains.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'CSAT Paper II — Reading Comprehension',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'EXHAUSTIVE_CRITICAL_REASONING',
        notes: '25-28 questions in CSAT testing Critical Message, Assumptions, and Inferences.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'General English — Reading Comprehension',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'INFERENCE_AND_FACTUAL',
        notes: 'Passage questions testing title, tone, and central theme.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'Phase 1 English — Advanced RC',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'MACROECONOMIC_INFERENCE',
        notes: 'High difficulty macroeconomic RC sets in Phase 1.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'English Comprehension — Reading Comprehension Passages',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'SPEED_AND_THEMATIC_ACCURACY',
        notes: '3 passages in Tier 2 testing tone, title, and inferences.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper IV — Comprehension of an Unseen Passage',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'DESCRIPTIVE_SYNTHESIS',
        notes: 'Direct 10-mark unseen passage comprehension in RAS Paper 4.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Not in syllabus',
        relevance: 'NOT_RELEVANT',
        priority: 'LOW',
        requiredDepth: 'OVERVIEW',
        notes: 'Not tested in IIBF banking exams.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'RC Rules: 1) Inferences are NEVER stated verbatim in text; they are unstated necessary deductions. 2) Eliminate extreme words (all, never, exclusively). 3) Titles must avoid being too broad or too narrow. 4) Never pick an option just because it is factually true in real life; it MUST be in the passage.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Reading Comprehension Elimination Framework: 1) Tone: Look at valence of adjectives and verbs (Analytical = neutral evidence; Critical = censures flaws; Laudatory = praises; Cynical = questions motives). 2) Primary Purpose: Pre-think the core thesis before reading choices. 3) Inference: Pick the option that must logically hold true without importing external reality. 4) Red Flags: Reject extreme absolutes and half-true options.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Reading Comprehension Analytical Architecture: 1) Question Taxonomy: Factual Recall, Direct Vocabulary, Primary Purpose/Title, Tone, Logical Inference. 2) Scope Filters: Macro-thesis vs Micro-detail. 3) Tone Matrix: Objective, Critical, Didactic, Laudatory, Cynical. 4) Critical Inference: Premises P1, P2 |= C. Conclusion must be inevitable minimal extension.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'RC_TONE_MCQ',
        stem: 'Read the following excerpt:\n"While proponents herald algorithmic credit scoring as an unblemished triumph of financial inclusion, empirical reality exposes a far more troubling landscape. Beneath the glossy marketing veneer of automated objectivity, these black-box proprietary algorithms frequently entrench historical socioeconomic prejudices, penalizing marginalized borrowers based on flawed digital telemetry while insulating credit institutions behind opaque corporate secrecy."\nWhat is the author\'s tone toward algorithmic credit scoring in the excerpt above?',
        options: ['Analytical and neutral', 'Critical and skeptical', 'Didactic and pedagogical', 'Laudatory and admiring'],
        correctAnswer: 'Critical and skeptical',
        explanation: 'The author\'s tone is critical and skeptical. The passage utilizes heavily charged negative diction to dismantle the claims of proponents: "glossy marketing veneer", "black-box proprietary algorithms", "entrench historical socioeconomic prejudices", "flawed digital telemetry", and "opaque corporate secrecy". This reflects a sharp, censorious critique of the technology\'s purported benefits.',
        trapExplanation: 'Choosing "Analytical and neutral" is a trap because the passage is clearly not a balanced evaluation of pros and cons; it aggressively highlights dark systemic flaws.',
        difficulty: 'INTERMEDIATE',
        isPYQ: false,
        examinerTrapPattern: 'Confusing a sharp critical editorial critique with objective dispassionate analysis.',
      },
      {
        type: 'RC_INFERENCE_MCQ',
        stem: 'Based on the excerpt: "Beneath the glossy marketing veneer of automated objectivity, these black-box proprietary algorithms frequently entrench historical socioeconomic prejudices, penalizing marginalized borrowers based on flawed digital telemetry while insulating credit institutions behind opaque corporate secrecy."\nWhich of the following can be logically inferred?',
        options: [
          'Algorithmic credit scoring completely eliminates all forms of human bias from loan approvals.',
          'Proprietary credit models make it difficult for rejected borrowers to ascertain the exact reasons for loan denials.',
          'All commercial banks using AI credit underwriting will face mandatory regulatory dissolution.',
          'Marginalized borrowers never apply for loans through digital fintech applications.'
        ],
        correctAnswer: 'Proprietary credit models make it difficult for rejected borrowers to ascertain the exact reasons for loan denials.',
        explanation: 'The text states that these systems are "black-box proprietary algorithms" that "insulate credit institutions behind opaque corporate secrecy". If an algorithm is a "black box" and shrouded in "opaque corporate secrecy", it is a necessary logical deduction that borrowers cannot see or easily ascertain the inner workings and exact reasons behind their credit decisions.\nOptions A, C, and D contain extreme words ("completely eliminates", "all commercial banks will face mandatory dissolution", "never apply") and contradict the passage.',
        trapExplanation: 'Options with extreme absolutes ("never", "completely", "all") are standard examiner distractors that should be eliminated.',
        difficulty: 'ADVANCED',
        isPYQ: false,
        examinerTrapPattern: 'Inference derived from "black-box" and "opaque secrecy" descriptors.',
      },
    ],
  },
  {
    id: 'CON-ENG-23',
    slug: 'sentence-rearrangement-para-jumbles-mandatory-pairs-and-discourse-cohesion-signposts',
    title: 'Sentence Rearrangement (Para-jumbles), Mandatory Pairs & Discourse Cohesion Signposts',
    shortDefinition: 'Algorithmic solving protocols for Sentence Rearrangement and Para-jumbles: noun-pronoun sequence precedence, chronological anchors, acronym expansion hierarchies, transition discourse signposts, and identifying mandatory pairs.',
    difficulty: 'ADVANCED',
    order: 23,
    topicSlug: 'objective-reading-comprehension-and-discourse',
    contentBlocks: [
      {
        type: 'INTUITION',
        title: 'Assembling the Jigsaw Puzzle: Finding the Corner Pieces of Discourse',
        body: `Imagine being given a jigsaw puzzle where someone threw 6 scattered sentences onto your desk. If you try to guess the entire 6-sentence order all at once, there are $6! = 720$ possible permutations! Trying to test 720 combinations mentally is impossible and induces severe exam panic.

The algorithmic approach to Para-jumbles does NOT attempt to solve the whole paragraph at once. 

Instead, it treats the problem like finding the **corner pieces and locking pairs** of a puzzle:
1. **Find the Opening Sentence:** The independent anchor sentence that introduces the topic without relying on backward-pointing pronouns or conjunctions.
2. **Identify Mandatory Pairs:** Spot two sentences that MUST be glued together (e.g., Sentence B introduces an acronym, Sentence D uses the acronym; or Sentence C introduces a problem, Sentence E offers its immediate solution).
3. Once you identify just **ONE mandatory pair (e.g., BD)** and the opening sentence, 80% of option choices evaporate immediately!`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'CORE_IDEA',
        title: 'The 5 Mandatory Pairing Invariants & Discourse Signposts',
        body: `### 1. The 5 Universal Mandatory Pair Rules

| Pairing Invariant | Governing Linguistic Logic | Concrete Example |
| :--- | :--- | :--- |
| **Noun $\\to$ Pronoun Precedence** | A specific proper/common noun MUST be introduced before a pronoun (*he, she, it, they, this, these*) can refer to it. | Sentence A introduces *"Dr. Raghuram Rajan"*; Sentence C refers to *"He argued that..."* $\\implies$ **Pair: AC**. |
| **Acronym Expansion Hierarchy** | Full institutional title with acronym MUST precede the bare acronym or abbreviated form. | Sentence 1: *"The Unified Payments Interface (UPI) was launched in 2016."* Sentence 2: *"UPI transactions have crossed..."* |
| **Definite vs Indefinite Article Rule** | An entity is usually introduced with indefinite article (*a / an*), and subsequently referenced with definite article (*the*). | Sentence 1: *"The central bank notified **a** comprehensive cyber-resilience framework."* Sentence 2: *"**The** framework mandates..."* |
| **Problem $\\to$ Solution Sequence** | An issue, crisis, or challenge must be articulated before policy solutions or interventions can follow. | Statement on *"surging NPAs"* must precede statement on *"introducing the Insolvency and Bankruptcy Code"*. |
| **General Concept $\\to$ Specific Example** | Universal thematic assertion precedes specific case studies or statistical illustrations. | General assertion on *"Digital Public Infrastructure"* precedes specific metrics on *"Aadhaar and DigiLocker"*. |

### 2. Discourse Transition Signpost Dictionary

| Transition Category | Discourse Function | Connective Signposts |
| :--- | :--- | :--- |
| **Contrast / Reversal** | Reverses or qualifies preceding claim | *However, nevertheless, nonetheless, conversely, on the contrary, yet, although* |
| **Continuation / Addition** | Extends or amplifies existing point | *Furthermore, moreover, in addition, besides, additionally, similarly* |
| **Cause and Effect** | States the consequence of prior action | *Consequently, therefore, thus, hence, as a result, accordingly* |
| **Concluding Anchor** | Summarizes or delivers final verdict | *In conclusion, ultimately, to summarize, on the whole, overall* |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'MECHANISM',
        title: 'The 4-Step Algorithmic Elimination Protocol for Para-jumbles',
        body: `### The 4-Step Para-jumbles Execution Algorithm

1. **Step 1: Scan Sentence Openers to Find the Independent Starter.**
   * A valid opening sentence **CANNOT** begin with:
     * Pronouns: *He, She, It, They, These, Those*
     * Contrast connectors: *However, But, Nevertheless, Although*
     * Consequential words: *Therefore, Thus, Hence, Consequently*
     * Additive words: *Also, Furthermore, Moreover*
   * Eliminate all sentences containing backward-pointing reference words. The remaining sentence is your **Anchor Starter**.

2. **Step 2: Lock the First Mandatory Pair.**
   * Look for an obvious pair: Noun $\\to$ Pronoun, Acronym expansion, or Contrast pair (*Statement X asserts A; However, Statement Y disproves A* $\\implies$ Pair XY).

3. **Step 3: Option Elimination Filtering.**
   * Check the 4 or 5 options provided:
     * Does the option start with your Anchor Starter? If not, cross it out immediately.
     * Does the option preserve your Mandatory Pair (e.g. BD together in that exact sequence)? Cross out all options where B and D are separated or reversed (DB).
   * In 90% of cases, only ONE option survives this filter!

4. **Step 4: Chronological and Cohesion Sanity Check.**
   * Read the surviving sequence from beginning to end to ensure smooth narrative flow.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_APPLICATION',
        title: 'Examiner Traps, Tense Sequencing & The SBI PO TITA Puzzle Format',
        body: `### High-Frequency Para-jumble Traps in Banking Exams

1. **The 'This / These' Clue Trap:**
   * Sentences starting with *"This initiative..."*, *"These challenges..."*, or *"Such measures..."* can NEVER be opening sentences.
   * **Mandatory Clue:** Find the exact sentence that describes the *initiative*, *challenges*, or *measures*. That sentence MUST immediately precede this one!

2. **The Chronological Reversal Trap:**
   * Watch for historical markers and dates:
     * Event in 1991 (LPG reforms) $\\to$ Event in 2008 (Global Financial Crisis) $\\to$ Event in 2016 (IBC / Demonetization) $\\to$ Event in 2024.
   * Narratives almost universally flow in forward chronological order unless explicitly framed as a flashback.

3. **TITA / Non-MCQ Para-jumbles (Bank PO Mains & CAT):**
   * When options are not provided and you must type the sequence (e.g. *B-D-A-C-E*):
   * Anchor the Opening Sentence (1) and Concluding Sentence (last) first. Then cluster the remaining sentences into two pairs.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    claims: [
      {
        id: 'CLM-ENG-23-1',
        statement: 'A valid opening sentence in paragraph rearrangement must be an independent proposition that introduces its subject without relying on backward-pointing pronouns, conjunctions, or transitions.',
        claimType: 'DISCOURSE_PRINCIPLE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'English_Descriptive_Writing_Master.md#note-2',
        excerpt: 'Discourse Cohesion: Independent topic introduction precedes anaphoric pronoun references.',
      },
      {
        id: 'CLM-ENG-23-2',
        statement: 'Full institutional names and acronym expansions must precede bare acronyms or abbreviated titles in cohesive written discourse.',
        claimType: 'DISCOURSE_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'English_Descriptive_Writing_Master.md#note-2',
        excerpt: 'Acronym expansion hierarchy: full title introduction strictly precedes abbreviated references.',
      },
      {
        id: 'CLM-ENG-23-3',
        statement: 'Sentence rearrangement problems are most efficiently solved by identifying mandatory pairs through noun-pronoun references, contrast signposts, and chronological progression.',
        claimType: 'METHODOLOGICAL_RULE',
        epistemicLevel: 'ESTABLISHED_FACT',
        confidence: 'HIGH',
        locator: 'English_Descriptive_Writing_Master.md#note-2',
        excerpt: 'Mandatory Pairs: identifying locked two-sentence units eliminates non-matching permutations.',
      },
    ],
    examMappings: [
      {
        examCode: 'SBI_PO',
        syllabusUnit: 'English Language — Para-jumbles & Sentence Rearrangement',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'ADVANCED_DISCOURSE_ANALYSIS',
        notes: 'Guaranteed 5-mark set in SBI PO Prelims and Mains.',
      },
      {
        examCode: 'IBPS_PO',
        syllabusUnit: 'English Language — Sentence Rearrangement',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'ADVANCED_DISCOURSE_ANALYSIS',
        notes: 'Standard 5 questions in IBPS PO Prelims.',
      },
      {
        examCode: 'SSC_CGL',
        syllabusUnit: 'English Comprehension — Para Jumbles (PQRS)',
        relevance: 'CORE',
        priority: 'VERY_HIGH',
        requiredDepth: 'SPEED_AND_MANDATORY_PAIRS',
        notes: '4-5 questions in Tier 1 and Tier 2.',
      },
      {
        examCode: 'RBI_GRADE_B',
        syllabusUnit: 'Phase 1 English — Advanced Para-jumbles',
        relevance: 'CORE',
        priority: 'HIGH',
        requiredDepth: 'COMPLEX_PARAGRAPH_STRUCTURE',
        notes: 'Challenging high-level economic policy rearranging sets.',
      },
      {
        examCode: 'UPSC_CSE',
        syllabusUnit: 'CSAT Paper II — Logical Ordering of Sentences',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'LOGICAL_REASONING',
        notes: 'Appears as logical paragraph sequencing in CSAT.',
      },
      {
        examCode: 'UPSC_APFC',
        syllabusUnit: 'General English — Sentence Rearrangement',
        relevance: 'SUPPORTING',
        priority: 'HIGH',
        requiredDepth: 'STANDARD_LOGICAL_FLOW',
        notes: 'Tested in APFC general mental ability and English.',
      },
      {
        examCode: 'RPSC_RAS',
        syllabusUnit: 'Mains Paper IV — Cohesive Paragraph Writing',
        relevance: 'SUPPORTING',
        priority: 'MEDIUM',
        requiredDepth: 'COHESION_MASTERY',
        notes: 'Helps in writing logically sequenced descriptive paragraphs.',
      },
      {
        examCode: 'IIBF_DBF',
        syllabusUnit: 'Not in syllabus',
        relevance: 'NOT_RELEVANT',
        priority: 'LOW',
        requiredDepth: 'OVERVIEW',
        notes: 'Not tested in IIBF exams.',
      },
    ],
    revisionUnits: [
      {
        type: 'FLASH_30S',
        content: 'Para-jumbles Algorithm: 1) Find the independent starter (no pronouns, no "However/Therefore"). 2) Find a Mandatory Pair (Noun -> Pronoun; Full name -> Acronym; Problem -> Solution). 3) Eliminate options that do not have your starter or mandatory pair.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'SUMMARY_2M',
        content: 'Sentence Rearrangement Protocol: 1) Opening Sentence: Must be self-contained; cannot start with he, she, they, this, but, therefore. 2) Mandatory Pairs: Look for noun-pronoun links, "a/an" followed by "the", and acronym definitions before bare initials. 3) Transition Words: Words like "However" signal a sharp reversal; "Consequently" signals an outcome. 4) Use options: Never arrange all 6 in your head; filter options using your mandatory pair.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'ARCHITECTURE_5M',
        content: 'Discourse Cohesion Architecture: 1) Anaphoric & Cataphoric References: Noun entity establishes referent for subsequent pronouns. 2) Lexical Chains: Repetition of thematic keywords across adjacent sentences. 3) Conjunctional Vectors: Additive (Moreover), Adversative (However), Causal (Therefore), Temporal (Subsequently). 4) Macro-Structure: Introduction -> Complication -> Evidence -> Resolution.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'PARAJUMBLE_MCQ',
        stem: 'Given below are four jumbled sentences. Out of the given options, pick the one that gives their correct, logically coherent order:\nA. This digital infrastructure aggregates land records, dairy telemetry, and GST invoices to enable instant loan sanctioning.\nB. Historically, small and marginal farmers in India faced protracted credit approval cycles due to fragmented documentation.\nC. Consequently, commercial banks can now execute objective underwriting in minutes rather than weeks.\nD. To overcome this systemic bottleneck, the Reserve Bank of India introduced the Unified Lending Interface (ULI).',
        options: ['B - D - A - C', 'D - A - B - C', 'B - A - D - C', 'A - C - B - D'],
        correctAnswer: 'B - D - A - C',
        explanation: 'Step 1: Identify the opening sentence. Sentence A starts with "This digital infrastructure" (cannot be first). Sentence C starts with "Consequently" (cannot be first). Sentence D starts with "To overcome this systemic bottleneck" (referring to an earlier bottleneck). Sentence B introduces the independent baseline problem: small farmers facing protracted credit cycles due to fragmented documentation. Therefore, B is the anchor starter.\nStep 2: Identify the mandatory pair. Sentence B presents the bottleneck (fragmented documentation). Sentence D directly addresses it: "To overcome this systemic bottleneck, the Reserve Bank introduced the Unified Lending Interface (ULI)" -> Pair BD.\nStep 3: Sentence D introduces ULI, and Sentence A explains its mechanism: "This digital infrastructure aggregates..." -> Pair DA.\nStep 4: Sentence C provides the final positive consequence: "Consequently, commercial banks can now execute objective underwriting in minutes..." -> Final sequence: B - D - A - C.',
        trapExplanation: 'Starting with D ignores that "this systemic bottleneck" requires prior definition, which is only provided in Sentence B.',
        difficulty: 'INTERMEDIATE',
        isPYQ: false,
        examinerTrapPattern: 'Backward-pointing demonstrative pronoun ("this bottleneck") in candidate opening sentences.',
      },
      {
        type: 'PARAJUMBLE_MCQ',
        stem: 'Which of the following sentences CANNOT be the opening sentence of a coherent paragraph?\nI. Artificial intelligence is rapidly reshaping credit risk modeling in modern banking.\nII. Consequently, monetary policy authorities must balance growth incentives with price stability mandates.\nIII. Dr. Verghese Kurien spearheaded the White Revolution, transforming India from a milk-deficient nation into the world’s largest milk producer.\nIV. However, persistent digital divides in rural hinterlands threaten to exacerbate financial exclusion.',
        options: ['I and III only', 'II and IV only', 'II only', 'IV only'],
        correctAnswer: 'II and IV only',
        explanation: 'Sentence II begins with the consequential adverb "Consequently", which strictly requires a preceding causal premise. Sentence IV begins with the adversative transition "However", which signals a contrast with a preceding positive assertion. Neither sentence can stand alone as an independent opening statement of a coherent discourse. Sentences I and III are independent thematic topic sentences that can introduce a paragraph.',
        trapExplanation: 'Students sometimes confuse "However" as a permissible introductory sentence in casual conversation, but in formal discourse cohesion, it strictly requires an antecedent claim to contrast against.',
        difficulty: 'EASY',
        isPYQ: false,
        examinerTrapPattern: 'Consequential and adversative transitions functioning as false starters.',
      },
    ],
  },
];

export async function seedBatchEnglishBatch2CanonicalKnowledge() {
  console.log('Seeding English Language Batch 2 (Grammar, Vocabulary, Collocations, RC & Para-jumbles)...');

  // 1. Ensure Domain exists
  const domainEng = await db.domain.upsert({
    where: { slug: 'domain-language-communication-descriptive-skills' },
    update: {},
    create: {
      slug: 'domain-language-communication-descriptive-skills',
      name: 'Language, Communication & Descriptive Competence',
      description: 'Foundational English syntax, grammar invariants, vocabulary, reading comprehension, descriptive discourse, and administrative writing.',
      order: 6,
      status: 'ACTIVE',
    },
  });

  // 2. Ensure Subject exists
  let subject = await db.subject.findUnique({
    where: { slug: 'english-descriptive-writing' },
  });
  if (!subject) {
    subject = await db.subject.create({
      data: {
        name: 'English Language & Descriptive Writing',
        slug: 'english-descriptive-writing',
        domainId: domainEng.id,
        scopeStatement: 'Mastery of written syntax, multi-dimensional essay writing, non-verbatim précis compression, subjective reading comprehension, professional correspondence, and timed exam execution.',
        description: 'First-principles mastery of written discourse, essay argumentation, précis compression, professional correspondence, and exam execution strategy.',
        order: 6,
        status: 'ACTIVE',
      },
    });
  }

  // 3. Ensure Topics exist (Topics 63, 64, 65)
  const topicDefs = [
    {
      slug: 'grammar-foundations-and-syntactic-error-detection',
      title: 'Grammar Foundations & Syntactic Error Detection',
      description: 'Subject-verb agreement invariants, proximity traps, correlative conjunction parallelism, dangling modifiers, and aspectual tense sequencing.',
      order: 63,
    },
    {
      slug: 'vocabulary-phrasal-verbs-and-collocations',
      title: 'Vocabulary, Phrasal Verbs & Contextual Collocations',
      description: 'High-frequency banking phrasal verbs, dependent prepositions, superfluous preposition errors, and register modulation for administrative writing.',
      order: 64,
    },
    {
      slug: 'objective-reading-comprehension-and-discourse',
      title: 'Objective Reading Comprehension & Discourse Analysis',
      description: 'Tone identification, primary purpose formulation, critical inference extraction, Goldilocks title selection, and sentence rearrangement (para-jumbles).',
      order: 65,
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

  // 4. Ensure Source exists
  const sourceEng = await db.source.upsert({
    where: { id: 'SRC-ENG-DISCOURSE-2026' },
    update: {},
    create: {
      id: 'SRC-ENG-DISCOURSE-2026',
      title: 'English Language, Grammar Invariants & Discourse Master Suite (2026)',
      sourceType: 'ACADEMIC_CANONICAL_SYNTHESIS',
      authorityTier: 'PEER_REVIEWED_MATHEMATICAL_REFERENCE',
      description: 'First-principles linguistic framework covering prescriptive grammar invariants, syntactic error diagnostics, lexical collocations, and objective discourse analysis.',
    },
  });

  // Ensure Target Exams exist
  const defaultExams = [
    { slug: 'sbi-po', name: 'SBI PO' },
    { slug: 'ibps-po', name: 'IBPS PO' },
    { slug: 'rbi-grade-b', name: 'RBI Grade B' },
    { slug: 'ssc-cgl', name: 'SSC CGL' },
    { slug: 'rpsc-ras', name: 'RPSC RAS' },
    { slug: 'upsc-cse', name: 'UPSC CSE' },
    { slug: 'upsc-apfc', name: 'UPSC APFC' },
    { slug: 'iibf-dbf', name: 'IIBF DBF' },
  ];
  for (const ex of defaultExams) {
    await db.exam.upsert({
      where: { slug: ex.slug },
      update: {},
      create: { slug: ex.slug, name: ex.name, status: 'ACTIVE' },
    });
  }

  // 5. Seed Concepts
  const examSlugMap: Record<string, string> = {
    SBI_PO: 'sbi-po',
    IBPS_PO: 'ibps-po',
    RBI_GRADE_B: 'rbi-grade-b',
    SSC_CGL: 'ssc-cgl',
    RPSC_RAS: 'rpsc-ras',
    UPSC_CSE: 'upsc-cse',
    UPSC_APFC: 'upsc-apfc',
    IIBF_DBF: 'iibf-dbf',
  };

  for (const c of ENGLISH_BATCH_2_CONCEPTS) {
    const topic = await db.topic.findFirst({
      where: {
        subjectId: subject.id,
        slug: c.topicSlug,
      },
    });
    if (!topic) {
      console.warn(`Topic not found for slug: ${c.topicSlug}, skipping concept: ${c.id}`);
      continue;
    }

    const concept = await db.concept.upsert({
      where: { id: c.id },
      update: {
        title: c.title,
        slug: c.slug,
        shortDefinition: c.shortDefinition,
        difficulty: c.difficulty as any,
        topicId: topic.id,
        order: c.order,
        status: 'ACTIVE',
      },
      create: {
        id: c.id,
        title: c.title,
        slug: c.slug,
        shortDefinition: c.shortDefinition,
        difficulty: c.difficulty as any,
        topicId: topic.id,
        order: c.order,
        status: 'ACTIVE',
      },
    });

    // Content Blocks
    await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
    for (const block of c.contentBlocks) {
      await db.contentBlock.create({
        data: {
          conceptId: concept.id,
          type: block.type as any,
          title: block.title,
          body: block.body,
          order: block.order,
          visibility: block.visibility as any,
        },
      });
    }

    // Claims & Evidence
    for (const clm of c.claims) {
      const claim = await db.claim.upsert({
        where: { id: clm.id },
        update: {
          statement: clm.statement,
          claimType: clm.claimType as any,
          epistemicLevel: clm.epistemicLevel as any,
          confidence: clm.confidence as any,
          status: 'VERIFIED',
          conceptId: concept.id,
        },
        create: {
          id: clm.id,
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
          sourceId: sourceEng.id,
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
      const exam = await db.exam.findFirst({
        where: { slug },
      });
      if (!exam) continue;

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
          options: JSON.stringify(q.options),
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          trapExplanation: q.trapExplanation,
          difficulty: q.difficulty as any,
          isPYQ: q.isPYQ ?? false,
          pyqYear: q.pyqYear,
          pyqPaper: q.pyqPaper,
          pyqStage: q.pyqStage,
          examinerTrapPattern: q.examinerTrapPattern,
        },
      });
    }
  }

  console.log(`Successfully seeded ${ENGLISH_BATCH_2_CONCEPTS.length} Batch 2 English Language canonical concepts.`);
}
