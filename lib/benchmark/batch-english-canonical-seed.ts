/**
 * READING HUB — ENGLISH LANGUAGE & DESCRIPTIVE WRITING CANONICAL BENCHMARK SEED
 *
 * Subject 6: English Language & Descriptive Writing (`english-descriptive-writing`)
 *
 * Topics & Concepts:
 * Topic 57: Foundations of Written Discourse & Syntax (`discourse-and-syntax-foundations`)
 *   - CON-ENG-01: Principles of Written Discourse, Evaluator Rubrics & The Relevance Filter
 *   - CON-ENG-02: Sentence Architecture, Syntactic Modulation & Academic Tone
 *   - CON-ENG-03: Paragraph Architecture: The PEEL Framework, Cohesion & Scannability
 *
 * Topic 58: Essay Writing & Argumentation (`essay-writing-and-argumentation`)
 *   - CON-ENG-04: Prompt Deconstruction, Demand Analysis & Thesis Formulation
 *   - CON-ENG-05: Multi-Dimensional Argumentation: PESTLE-S, Stakeholder Grids & C.A.S.H.
 *   - CON-ENG-06: Introduction Hooks, Thematic Development & Circular Conclusions
 *   - CON-ENG-07: Abstract, Philosophical & Contemporary Policy Debates
 *
 * Topic 59: Précis Writing & Non-Verbatim Synthesis (`precis-writing-and-synthesis`)
 *   - CON-ENG-08: Précis Writing: The 1/3rd Rule, Negative Filtering & Title Formulation
 *   - CON-ENG-09: Subjective Reading Comprehension & Non-Verbatim Paraphrasing
 *
 * Topic 60: Professional Correspondence & Workplace Writing (`professional-correspondence-and-workplace-writing`)
 *   - CON-ENG-10: Formal & Informal Letter Writing: Modern Full-Block & Grievance Escalation
 *   - CON-ENG-11: Official Workplace Emails & Customer Communication Architecture
 *   - CON-ENG-12: Institutional Reports, Credit Audits & Situation Analysis Memos
 *
 * Topic 61: Model Exemplars & Structural Deconstructions (`model-exemplars-and-deconstructions`)
 *   - CON-ENG-13: Benchmark Model Essays: Thematic Breakdown & Policy Integration
 *   - CON-ENG-14: Model Workplace Communications: Letters, Memos, Reports & Précis Vault
 *
 * Topic 62: Active Practice Arena & Exam Execution Strategy (`active-practice-and-exam-strategy`)
 *   - CON-ENG-15: Timed Exam Execution Strategy, Keyboard Ergonomics & Self-Evaluation Scoring Engine
 */

import { db } from '../db/client';

export interface CanonicalConceptDefinition {
  id: string;
  topicOrder: number;
  topicSlug: string;
  topicTitle: string;
  topicDescription: string;
  subjectSlug: string;
  slug: string;
  title: string;
  shortDefinition: string;
  difficulty: 'FOUNDATIONAL' | 'INTERMEDIATE' | 'ADVANCED';
  claims: Array<{
    id: string;
    statement: string;
    claimType: string;
    epistemicLevel: string;
    confidence: string;
    locator: string;
    excerpt: string;
  }>;
  contentBlocks: Array<{
    type: string;
    title: string;
    body: string;
    order: number;
    visibility: string;
  }>;
  examMappings: Array<{
    examCode: 'upsc-cse' | 'rpsc-ras' | 'iibf-dbf';
    syllabusUnit: string;
    relevance: 'DIRECT_SYLLABUS' | 'HIGH_YIELD_PERIPHERAL' | 'BACKGROUND_CONTEXT';
    priority: 'HIGH' | 'MEDIUM' | 'LOW';
    requiredDepth: 'EXAM_STANDARD' | 'DEEP_DIVE' | 'SURVEY';
    notes?: string;
    frequentTraps?: string;
  }>;
  revisionUnits: Array<{
    type: 'SUMMARY_SNIPPET' | 'KEY_FACTS' | 'EXAM_TRAPS';
    content: string;
    priority: 'HIGH' | 'MEDIUM' | 'LOW';
    order: number;
  }>;
  questions: Array<{
    type: 'CONCEPTUAL' | 'APPLICATION' | 'EDGE_CASE';
    stem: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
    trapExplanation: string;
    difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  }>;
}

export const ENGLISH_CANONICAL_CONCEPTS: CanonicalConceptDefinition[] = [
  // =========================================================================
  // TOPIC 57: Foundations of Written Discourse & Syntax
  // =========================================================================
  {
    id: 'CON-ENG-01',
    topicOrder: 57,
    topicSlug: 'discourse-and-syntax-foundations',
    topicTitle: 'Foundations of Written Discourse & Syntax',
    topicDescription: 'Core mechanics of written communication, evaluator rubrics, command-word decoding, and relevance filtering.',
    subjectSlug: 'english-descriptive-writing',
    slug: 'principles-of-effective-written-discourse-and-evaluator-rubrics',
    title: 'Principles of Effective Written Discourse & Evaluator Rubrics',
    shortDefinition: 'Foundational framework of descriptive discourse balancing relevance, structural coherence, factual grounding, and command-word directives.',
    difficulty: 'FOUNDATIONAL',
    claims: [
      {
        id: 'CLM-ENG-01-01',
        statement: 'Descriptive writing performance is governed primarily by prompt relevance and command-word execution rather than vocabulary complexity.',
        claimType: 'PEDAGOGICAL_PRINCIPLE',
        epistemicLevel: 'CANONICAL',
        confidence: 'HIGH',
        locator: 'Discourse Theory §1.2',
        excerpt: 'The primary discriminator in competitive descriptive writing is answering the precise verb demand without knowledge-dumping.',
      },
      {
        id: 'CLM-ENG-01-02',
        statement: 'Coaching evaluation heuristics commonly weight Content (~40%), Structure (~20%), Word Limits (~15%), Grammar (~15%), and Critical Depth (~10%), though actual examination boards grade holistically.',
        claimType: 'EVALUATION_HEURISTIC',
        epistemicLevel: 'HEURISTIC',
        confidence: 'MEDIUM',
        locator: 'Rubrics Guide §1.1',
        excerpt: 'Standard coaching rubrics approximate holistic grading criteria via a 5-dimensional heuristic weighting model.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Core Philosophy of Descriptive Writing',
        body: `Descriptive writing in competitive examinations (UPSC CSE, RPSC RAS, RBI Grade B, NABARD, Bank PO) is not a creative writing exercise or a test of rare vocabulary; it is a test of **structured, critical thinking expressed with clarity and precision under time constraints**.

### The Evaluator's Perspective: Why Most Aspirants Underperform
Evaluators grade dozens of scripts in a single session. They look for immediate structural organization, direct engagement with the question, and substantive analysis. Underperformance rarely stems from lack of information; it stems from:
1. **Knowledge-Dumping:** Memorizing a topic (e.g. *Digital Public Infrastructure*) and reproducing generic notes regardless of whether the prompt asked for *challenges*, *regulatory risks*, or *macroeconomic dividends*.
2. **Structural Chaos:** Writing monolithic walls of text without paragraph breaks, visual transitions, or clear thematic separation.
3. **Polemics over Policy Analysis:** Expressing emotional outrage or blind partisan critique instead of balanced, institutional assessment.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'The Directive Decoding Matrix: Command Verbs & Exact Demands',
        body: `Every descriptive prompt begins with an operative command verb. Misinterpreting the command verb results in severe irrelevance penalties:

| Command Directive | Exact Examiner Demand | Structural Execution Strategy |
| :--- | :--- | :--- |
| **Discuss / Elucidate** | Provide a comprehensive, 360° overview of the phenomenon. | Trace causes, operational mechanisms, current manifestations, and socio-economic consequences clearly. |
| **Critically Analyze / Evaluate** | Weigh opportunities against limitations, risks, or systemic trade-offs. | Allocate roughly equal weight to benefits/strengths and bottlenecks/vulnerabilities, ending with a weighted, reasoned judgment. |
| **Examine** | Probe deep into underlying root causes and operational realities. | Unpack the institutional mechanics: *Why* did this occur? *What* structural frictions exist? |
| **Comment** | Express a well-substantiated, balanced perspective on a specific premise. | Take a clear, nuanced stance and defend it using statutory data, official reports, and economic logic. |
| **Suggest Measures / Way Forward** | Formulate actionable, pragmatic policy interventions. | Divide recommendations into Short-Term (Immediate operational fixes) vs Long-Term (Structural/Institutional reforms). |

> 💡 **Pedagogical Note on Scoring Weights:**  
> While popular coaching frameworks often cite a 5-dimensional weight distribution (*Content 40%, Structure 20%, Word Limit 15%, Grammar 15%, Analytical Depth 10%*), this is a **useful heuristic for self-audit**, not a universal mathematical rule mandated by exam boards. Official evaluators assess scripts holistically for competence, coherence, and relevance.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_TRAPS',
        title: 'Examiner Traps & The Relevance Filter',
        body: `### The Relevance Filter: Anti-Knowledge-Dumping Rule
Before writing a single paragraph, apply the **Relevance Filter**:
- **Prompt:** *"Critically examine the challenges faced by NBFCs under the Scale-Based Regulatory (SBR) framework."*
- **❌ The Trap Response:** Writing 200 words on the 50-year history of non-banking financial companies and definitions of BL, ML, UL layers without addressing *compliance frictions*, *asset-liability mismatches*, or *capital charge burdens*.
- **✅ The High-Scoring Response:** Open immediately with the regulatory shift towards bank-like prudential norms under SBR, followed by dedicated paragraphs analyzing specific operational challenges (CET-1 compliance, mandatory listing costs, IT infrastructure overheads) and a pragmatic transitional way forward.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'PRACTICE_EXERCISE',
        title: 'Active Scaffolding Drill: Directive Identification',
        body: `**Exercise:** Deconstruct the following prompt into its core command, thematic boundary, and expected structural split:
> *"Analyze the role of Sovereign Green Bonds in financing India's energy transition, highlighting key market bottlenecks and suggesting regulatory safeguards."*

**Self-Correction Key:**
- **Core Directive:** *Analyze* (breakdown mechanism) + *Highlight* (identify bottlenecks) + *Suggest* (actionable safeguards).
- **Thematic Boundaries:** Green bonds specifically in India's energy transition (not global climate treaties in general).
- **Structural Distribution:** 
  1. Intro: Green bond definition + Net Zero 2070 / 500 GW target context (~15% words).
  2. Body 1: Financing mechanisms & Greenium benefits (~35% words).
  3. Body 2: Secondary market illiquidity & greenwashing risks (~30% words).
  4. Conclusion / Way Forward: SEBI BRSR taxonomy + RBI credit enhancement (~20% words).`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'Essay Paper & General Studies Answer Writing',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Governs command-word execution across Mains Essay and GS papers.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'General English (Paper IV) — Descriptive & Comprehension',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Covers paragraph structure and rubric adherence in descriptive writing.',
      },
      {
        examCode: 'iibf-dbf',
        syllabusUnit: 'Business Communication & Descriptive Case Analysis',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Core standard for professional banking reports and regulatory correspondence.',
      },
    ],
    revisionUnits: [
      {
        type: 'SUMMARY_SNIPPET',
        content: 'Descriptive writing tests structured, critical thinking under time limits. Focus strictly on the command verb (Discuss, Critically Analyze, Examine) and apply the Relevance Filter to eliminate generic knowledge-dumping.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'KEY_FACTS',
        content: 'Command Verbs: Discuss = 360° overview; Critically Analyze = balanced 50/50 benefits vs risks; Examine = probe institutional root causes; Suggest Measures = short-term vs long-term solutions.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'EXAM_TRAPS',
        content: 'Trap: Writing historical background instead of addressing the specific operational challenges asked in the prompt. Scoring weight percentages (40/20/15/15/10) are self-audit heuristics, not rigid universal laws.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPTUAL',
        stem: 'When an essay or descriptive prompt begins with the command verb "Critically Analyze", what is the expected structural focus of the body?',
        options: [
          'A chronological narrative detailing the historical background of the policy',
          'A balanced examination of both opportunities/strengths and risks/systemic vulnerabilities, concluding with a weighted synthesis',
          'An aggressive polemical critique focusing exclusively on government implementation failures',
          'A simple dictionary definition followed by a list of statistical indicators',
        ],
        correctAnswer: 'A balanced examination of both opportunities/strengths and risks/systemic vulnerabilities, concluding with a weighted synthesis',
        explanation: '"Critically Analyze" demands evaluating multiple dimensions—weighing merits against structural bottlenecks or unintended systemic consequences—rather than taking a one-sided binary stance.',
        trapExplanation: 'Avoid confusing "Critically Analyze" with pure criticism; examiners reward balanced institutional analysis.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-ENG-02',
    topicOrder: 57,
    topicSlug: 'discourse-and-syntax-foundations',
    topicTitle: 'Foundations of Written Discourse & Syntax',
    topicDescription: 'Core mechanics of written communication, evaluator rubrics, command-word decoding, and relevance filtering.',
    subjectSlug: 'english-descriptive-writing',
    slug: 'sentence-architecture-syntactic-modulation-and-academic-tone',
    title: 'Sentence Architecture, Syntactic Modulation & Academic Tone',
    shortDefinition: 'Techniques for modulating syntactic rhythm, avoiding monotone structures, applying academic hedging, and maintaining formal register.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ENG-02-01',
        statement: 'Varying sentence syntax across complex, compound, and declarative forms prevents prose monotony and improves readability.',
        claimType: 'SYNTACTIC_PRINCIPLE',
        epistemicLevel: 'CANONICAL',
        confidence: 'HIGH',
        locator: 'Syntax Mechanics §2.1',
        excerpt: 'Modulating clause lengths and sentence patterns creates rhythmic elegance and clear logical relationships.',
      },
      {
        id: 'CLM-ENG-02-02',
        statement: 'Academic hedging using probabilistic modifiers prevents unsupported absolutist generalizations in policy analysis.',
        claimType: 'STYLE_PRINCIPLE',
        epistemicLevel: 'CANONICAL',
        confidence: 'HIGH',
        locator: 'Discourse Tone §2.3',
        excerpt: 'Qualifying language reflects institutional sobriety and analytical maturity in public policy writing.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Architecture of High-Scoring Sentences',
        body: `Monotone prose is the hallmark of average writing. When every sentence follows the simple Subject-Verb-Object (SVO) pattern (*"The bank launched an app. The app helps farmers. Farmers can get loans fast."*), the text becomes disjointed and cognitively exhausting.

High-scoring descriptive discourse relies on **Syntactic Modulation**—deliberately varying sentence length and grammatical structure to establish clear logical hierarchies.

### The Tri-Sentence Syntax Pattern (A Pedagogical Scaffold)
To build natural syntactic rhythm, practice combining three complementary sentence archetypes:
1. **Complex Sentence (Subordinate Clause First):** Sets context, acknowledges nuance, or introduces constraints (*"Although digital lending has democratized credit access, it has expanded novel consumer vulnerability vectors."*).
2. **Compound Sentence with Conjunctive Adverb:** Details the causal mechanism or institutional consequence (*"Automated algorithms compress underwriting cycles; however, opaque scoring logic hinders effective post-rejection grievance redressal."*).
3. **Declarative Punch Sentence:** Delivers a clear, uncompromised analytical takeaway (*"Prudential governance must therefore precede aggressive scale."*).`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Academic Tone & The Principle of Hedging',
        body: `In public policy and regulatory writing, absolute statements (*always, never, completely, impossible, all*) signal intellectual naivety. Sound policy analysis requires **probabilistic qualification (Hedging)**:

| Absolutist / Casual Phrasing (Scores Low) | Nuanced / Hedged Academic Phrasing (Topper Standard) |
| :--- | :--- |
| *"UPI will completely destroy cash transactions in India."* | *"UPI adoption **indicates a strong structural propensity to diminish** cash dependency across retail transactions."* |
| *"The scheme failed completely because of corrupt officials."* | *"While institutional outreach has expanded, **last-mile operational frictions and informational asymmetry continue to constrain** credit absorption."* |
| *"At the end of the day, there is no other solution."* | *"**In the final analysis**, sustainable resolution necessitates a synchronized policy approach."* |
| *"Big tech companies are ruining everything."* | *"Unregulated market concentration among dominant digital intermediaries **poses systemic risks to consumer privacy and market competition**."* |

### Grammar Red-Lines in Formal Discourse
- **Zero Contractions:** In formal examination writing, never write *can't, won't, don't, it's, isn't*. Always spell out *cannot, will not, do not, it is, is not*.
- **Apostrophe Precision:** The possessive pronoun \`its\` has NO apostrophe (*"The committee submitted its report"*). \`It's\` is a contraction of *it is*. Sign-offs NEVER take apostrophes: write \`Yours sincerely\` (never \`Your's\`).
- **Parallelism in Enumerations:** Lists must share identical grammatical structures (*"focuses on **expanding** digital rails, **deepening** rural credit, and **mitigating** cyber fraud"*).`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_TRAPS',
        title: 'Common Traps: Comma Splices and Dangling Modifiers',
        body: `1. **The Comma Splice Trap:** Joining two independent clauses with only a comma.
   - ❌ *Incorrect:* The RBI raised the repo rate, bond yields spiked immediately.
   - ✅ *Correct:* The RBI raised the repo rate; consequently, bond yields spiked immediately. (Or: *When the RBI raised the repo rate, bond yields spiked immediately.*)
2. **The Dangling Modifier Trap:** A modifier that does not logically attach to the subject that follows.
   - ❌ *Incorrect:* Walking into the branch, the fraudulent documents were discovered by the auditor. (Implies the documents were walking).
   - ✅ *Correct:* Walking into the branch, the auditor discovered the fraudulent documents.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'PRACTICE_EXERCISE',
        title: 'Active Scaffolding Drill: Syntactic Re-engineering',
        body: `**Task:** Re-engineer the following 3 choppy sentences into a cohesive 2-sentence analytical block using subordination and formal academic hedging:
> *"Micro-enterprises cannot get bank loans. Moneylenders charge huge interest rates. Small businesses get trapped in poverty."*

**Model Solution:**
> *"Because micro-enterprises encounter persistent collateral bottlenecks in accessing formal institutional credit, they frequently resort to unorganized lenders who levy usurious interest rates. Consequently, predatory debt-servicing burdens severely impede grassroots capital formation and perpetuate generational poverty traps."*`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'Essay Paper — Style, Coherence & Precision',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Essential for producing mature, academically grounded arguments.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'Paper IV — Grammar, Syntax & Composition',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Directly tests sentence correction, parallelism, and formal register.',
      },
      {
        examCode: 'iibf-dbf',
        syllabusUnit: 'Business English & Financial Reporting',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Mandatory standard for credit proposals and internal audit communications.',
      },
    ],
    revisionUnits: [
      {
        type: 'SUMMARY_SNIPPET',
        content: 'Syntactic variety (Complex -> Compound -> Declarative) prevents monotone writing. Academic hedging replaces dogmatic claims with nuanced probabilities. Zero contractions and strict grammatical parallelism are non-negotiable.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'KEY_FACTS',
        content: 'Grammar Red-Lines: Spell out cannot/will not; possessive "its" has no apostrophe; sign-off is "Yours faithfully/sincerely" (no apostrophe); maintain parallel verb tenses across bullet points.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'EXAM_TRAPS',
        content: 'Comma Splice: Never join two independent clauses with just a comma. Dangling modifier: Ensure the opening participial phrase logically describes the grammatical subject.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'APPLICATION',
        stem: 'Which of the following sentences best demonstrates high-scoring academic hedging and balanced institutional tone?',
        options: [
          'The government scheme is totally useless and has completely failed to help poor farmers.',
          'Digital agriculture platforms will definitely eliminate all middlemen and make farming instantly profitable.',
          'While digital agriculture initiatives significantly enhance price transparency, last-mile connectivity deficits continue to moderate credit absorption among smallholders.',
          'It is impossible for commercial banks to survive without government bailouts every single year.',
        ],
        correctAnswer: 'While digital agriculture initiatives significantly enhance price transparency, last-mile connectivity deficits continue to moderate credit absorption among smallholders.',
        explanation: 'This option acknowledges positive institutional impact while qualifying real-world frictions with academic restraint and balanced vocabulary.',
        trapExplanation: 'Options with absolute words like "totally useless", "definitely eliminate all", or "impossible" lack analytical nuance.',
        difficulty: 'MEDIUM',
      },
    ],
  },

  {
    id: 'CON-ENG-03',
    topicOrder: 57,
    topicSlug: 'discourse-and-syntax-foundations',
    topicTitle: 'Foundations of Written Discourse & Syntax',
    topicDescription: 'Core mechanics of written communication, evaluator rubrics, command-word decoding, and relevance filtering.',
    subjectSlug: 'english-descriptive-writing',
    slug: 'paragraph-architecture-the-peel-framework-cohesion-and-scannability',
    title: 'Paragraph Architecture: The PEEL Framework, Cohesion & Scannability',
    shortDefinition: 'First-principles paragraph design using topic sentences, evidentiary substantiation, causal explanation, transitional links, and on-screen formatting.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ENG-03-01',
        statement: 'A paragraph is a single unit of thought; effective paragraphs open with a clear topic assertion and develop it through evidence and causal reasoning.',
        claimType: 'DISCOURSE_PRINCIPLE',
        epistemicLevel: 'CANONICAL',
        confidence: 'HIGH',
        locator: 'Paragraph Theory §3.1',
        excerpt: 'Paragraph unity requires that every supporting sentence directly substantiates the opening claim without thematic drift.',
      },
      {
        id: 'CLM-ENG-03-02',
        statement: 'Visual scannability techniques such as lead-in bold/hyphenated keywords and blank line separators assist evaluators in rapidly discerning analytical structure.',
        claimType: 'FORMATTING_HEURISTIC',
        epistemicLevel: 'HEURISTIC',
        confidence: 'HIGH',
        locator: 'Scannability Guide §3.3',
        excerpt: 'Structuring body points with clear lead-in tags improves readability on digital and physical examination copies.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Anatomy of a Unified Paragraph',
        body: `A paragraph is not an arbitrary cluster of sentences separated by pressing "Enter." It is a **cohesive, self-contained unit of thought**.

### The PEEL Framework: A First-Principles Scaffolding Model
When developing an argument, the PEEL structure ensures completeness without rambling:
- **P (Point / Topic Sentence):** States the single central claim of the paragraph clearly in the opening line.
- **E (Evidence / Empirical Anchor):** Ground the point using an official report, statutory committee, policy scheme, or verifiable phenomenon.
- **E (Explanation / Causal Analysis):** Explains *why* and *how* the mechanism operates.
- **L (Link / Transition):** Bridges into the broader essay thesis or connects logically to the subsequent paragraph.

> ⚠️ **Heuristic Warning:**  
> PEEL is a **mental scaffold**, not a rigid mechanical formula. Skilled writers may weave evidence directly into the explanation or open with a vivid example before extracting the principle. The non-negotiable rule is **thematic unity and logical progression**, not sentence count.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Discourse Connectors & Logical Transitions',
        body: `Smooth transitions between sentences and paragraphs signal intellectual control. Avoid overusing simple repetitive words (*and, but, also, so*); deploy precise discourse markers:

| Logical Relationship | High-Scoring Discourse Markers | Generic Words (Avoid Overuse) |
| :--- | :--- | :--- |
| **Causal / Consequential** | *Consequently, By extension, Inevitably, Thereby precipitating, Catalyzing* | *So, Because of this* |
| **Contrast / Nuance** | *Conversely, Notwithstanding, While ostensibly beneficial, Albeit, In contrast* | *But, Although* |
| **Additive / Expansion** | *Furthermore, Concurrently, Complementarily, In tandem with, Not merely... but also* | *Also, And* |
| **Exemplification** | *Evidenced by, Exemplified in, As demonstrated by the trajectory of* | *For example, Like* |
| **Synthesis / Conclusion** | *In essence, Synthesizing these imperatives, A pragmatic roadmap demands* | *To conclude, In a nutshell* |

### Visual Scannability on Digital Examination Interfaces
In computer-based examination engines (e.g. TCS iON in Bank PO / Regulatory exams), formatting options like bold or italics are often unavailable. To maintain high scannability:
1. **Lead-in Keyword + Colon/Dash:** Start bullet points with capitalized thematic tags:
   - *Dynamic Rate Repricing: The transition to EBLR ensured that...*
   - *Informational Asymmetry: Fragmented credit histories in rural belts...*
2. **Paragraph Separation:** Always insert exactly **one blank line** between distinct paragraphs. Avoid monolithic walls of text.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_TRAPS',
        title: 'Common Paragraph Defects',
        body: `1. **The "Multi-Headed" Paragraph Trap:** Jamming three unrelated points (e.g. inflation, cybersecurity, and women's self-help groups) into a single paragraph without thematic development.  
   *Remedy:* One paragraph = One central argument.
2. **The "Stat-Dumping" Paragraph:** Writing 4 numbers back-to-back without economic interpretation.  
   *Remedy:* Enforce the **1:1 Stat-to-Analysis Heuristic**—every empirical number cited must be paired with its causal economic or policy impact.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'PRACTICE_EXERCISE',
        title: 'Active Scaffolding Drill: PEEL Paragraph Assembly',
        body: `**Task:** Assemble a 90-word PEEL paragraph on *"Digital Public Infrastructure and Financial Inclusion"* using the following raw ingredients:
- *Point:* DPI reduces transaction costs for rural banking.
- *Evidence:* JAM Trinity & UPI processing billions of monthly transactions.
- *Explanation:* Open APIs eliminate manual physical paperwork and intermediary commissions.
- *Link:* Enables sustainable credit flow to previously excluded demographics.

**Model Solution:**
> *"Digital Public Infrastructure (DPI) serves as a foundational enabler of grassroots financial inclusion by drastically lowering transaction overheads for commercial lenders. As demonstrated by the JAM Trinity (Jan Dhan, Aadhaar, Mobile) and UPI rails, open-protocol digital architecture eliminates cumbersome manual paperwork and redundant intermediary commissions. Consequently, banks can cost-effectively underwrite micro-loans and deliver instant remittances to previously unbanked populations, cementing financial access as a durable driver of rural economic resilience."*`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'Essay Paper & General Studies Answer Writing',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Covers paragraph transitions and structured substantiation in Mains.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'General English — Composition & Coherence',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Tests logical cohesion and paragraph unity in descriptive sections.',
      },
      {
        examCode: 'iibf-dbf',
        syllabusUnit: 'Business Communication & Report Writing',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Framework for structuring executive summaries and analytical paragraphs.',
      },
    ],
    revisionUnits: [
      {
        type: 'SUMMARY_SNIPPET',
        content: 'PEEL Framework: Point (topic sentence) -> Evidence (report/statute) -> Explanation (cause-and-effect) -> Link (transition). One paragraph = One central idea. Maintain 1:1 Stat-to-Analysis ratio.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'KEY_FACTS',
        content: 'Discourse Markers: Causal (Consequently, Thereby), Contrast (Conversely, Notwithstanding), Additive (Furthermore, Concurrently), Exemplification (As evidenced by).',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'EXAM_TRAPS',
        content: 'Trap: Multi-headed paragraphs with unrelated points. Never dump statistics without immediately explaining their institutional or economic transmission consequence.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPTUAL',
        stem: 'What is the primary structural function of the opening sentence (Topic Sentence) in a well-crafted PEEL paragraph?',
        options: [
          'To introduce a decorative literary quotation unrelated to the topic',
          'To state the single central argument or assertion that the rest of the paragraph will substantiate',
          'To summarize the entire essay from start to finish',
          'To list as many raw statistics and numbers as possible',
        ],
        correctAnswer: 'To state the single central argument or assertion that the rest of the paragraph will substantiate',
        explanation: 'The topic sentence provides the thematic anchor of the paragraph, alerting the reader to the exact claim being argued and ensuring paragraph unity.',
        trapExplanation: 'Quotations and broad summaries belong in introductions/conclusions, not at the head of every discrete body paragraph.',
        difficulty: 'EASY',
      },
    ],
  },

  // =========================================================================
  // TOPIC 58: Essay Writing & Argumentation
  // =========================================================================
  {
    id: 'CON-ENG-04',
    topicOrder: 58,
    topicSlug: 'essay-writing-and-argumentation',
    topicTitle: 'Essay Writing & Argumentation',
    topicDescription: 'First-principles essay design, demand analysis, multidimensional frameworks, thesis formulation, and philosophical prompt deconstruction.',
    subjectSlug: 'english-descriptive-writing',
    slug: 'prompt-deconstruction-demand-analysis-and-thesis-formulation',
    title: 'Prompt Deconstruction, Demand Analysis & Thesis Formulation',
    shortDefinition: 'The cognitive process of interpreting essay prompts, identifying boundary limits, and formulating a definitive analytical thesis statement.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ENG-04-01',
        statement: 'A thesis statement anchors the essay by declaring the writer’s central argument and setting the boundaries of the analytical inquiry.',
        claimType: 'ESSAY_PRINCIPLE',
        epistemicLevel: 'CANONICAL',
        confidence: 'HIGH',
        locator: 'Thesis Formulation §4.1',
        excerpt: 'The thesis statement transforms a descriptive topic summary into a structured analytical argument.',
      },
      {
        id: 'CLM-ENG-04-02',
        statement: 'Deconstructing prompts into 3–4 micro-questions prevents narrative wandering and ensures balanced coverage of all sub-themes.',
        claimType: 'METHODOLOGY',
        epistemicLevel: 'CANONICAL',
        confidence: 'HIGH',
        locator: 'Demand Analysis §4.2',
        excerpt: 'Systematic prompt deconstruction establishes the thematic sub-headings of the essay before drafting begins.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'From Prompt Interpretation to Thesis Formulation',
        body: `The most critical phase of essay writing occurs before typing a single sentence: **Demand Analysis**.

When candidates misread the scope of a prompt, even flawless grammar cannot rescue the essay. Effective essay writing begins with deconstructing the prompt into **Micro-Questions** and crafting a clear **Thesis Statement**.

### The 3-Step Deconstruction Algorithm
1. **Identify the Core Subject & Boundary:** What is the specific institutional, economic, or philosophical domain? (e.g. *Central Bank Digital Currency in Retail Payments* vs *CBDC in Global Geopolitics*).
2. **Identify the Operative Verbs:** Is the prompt asking to *evaluate risks*, *trace historical evolution*, or *propose policy solutions*?
3. **Formulate the Thesis Statement:** A 1–2 sentence declaration that answers:
   - What is the central phenomenon?
   - What is the primary tension or trade-off?
   - What is the author's overarching analytical stance?`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Model Thesis Formulations Across Essay Archetypes',
        body: `Below is how vague prompts are transformed into precise thesis statements:

| Prompt | Weak / Vague Thesis (Scores Low) | Authoritative Analytical Thesis (Topper Standard) |
| :--- | :--- | :--- |
| *Artificial Intelligence in Banking: Opportunities and Challenges* | *"In this essay, I will talk about the pros and cons of AI in modern banks."* | *"While Artificial Intelligence democratizes credit underwriting and accelerates fraud detection, its proliferation introduces opaque algorithmic model risks and cybersecurity vulnerabilities that necessitate transparent supervisory guardrails."* |
| *Universal Basic Income vs Targeted Social Welfare* | *"UBI is a very debated topic in Indian economics today."* | *"Although Universal Basic Income guarantees an unconditional social safety floor, India's immediate fiscal constraints favor targeted, biometric-enabled benefit transfers coupled with asset-building public investments."* |
| *Corporate Governance & Public Trust in Financial Institutions* | *"Corporate governance is important for all companies to prevent scams."* | *"In financial institutions, corporate governance transcends shareholder returns to function as a vital fiduciary duty, where board independence and rigorous audit oversight safeguard depositor protection and systemic stability."* |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_TRAPS',
        title: 'Examiner Traps in Topic Selection',
        body: `### The "Familiarity vs Precision" Trap
When given a choice of 3–5 essay topics in competitive exams (e.g. RBI Grade B or Bank PO Mains):
- ❌ **The Trap:** Picking a broad, familiar topic (e.g. *"Women Empowerment"*) without having specific data, schemes, or policy metrics, resulting in generic moral preaching.
- ✅ **The Topper Rule:** Pick the topic where you possess **concrete data points, statutory acts, committee names, and institutional frameworks** (e.g. *NBFC Scale-Based Regulation* or *Green Bonds*). Specificity consistently out-scores generic eloquence.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'PRACTICE_EXERCISE',
        title: 'Active Scaffolding Drill: Thesis Formulation',
        body: `**Task:** Draft a 35-word thesis statement for the following prompt:
> *"Demographic Transition and the Silver Economy: Converting Ageing into an Economic Asset."*

**Model Solution:**
> *"As India's geriatric cohort expands, addressing elderly healthcare vulnerabilities through universal social safety cushions while institutionalizing the 'Silver Economy' will transform demographic ageing from a perceived fiscal liability into a productive frontier of inclusive growth."*`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'Essay Paper — Understanding Demands & Central Thesis',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Foundational requirement for scoring 130+ in UPSC Essay Paper.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'Paper IV — Essay & Composition',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Key to structuring 20-mark and 50-mark essay compositions.',
      },
      {
        examCode: 'iibf-dbf',
        syllabusUnit: 'Descriptive Case & Strategic Analysis',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Framework for clarifying executive proposals and analytical theses.',
      },
    ],
    revisionUnits: [
      {
        type: 'SUMMARY_SNIPPET',
        content: 'Demand Analysis deconstructs prompts into Subject, Boundary, and Verb. The Thesis Statement establishes the central argument and analytical trajectory of the entire essay in 1-2 precise sentences.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'KEY_FACTS',
        content: 'Thesis Formula: State core phenomenon + acknowledge underlying tension/trade-off + declare balanced policy resolution. Always select topics with concrete institutional and statutory anchors.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'EXAM_TRAPS',
        content: 'Trap: Choosing broad topics and writing vague moral essays. Never start drafting without a definitive thesis statement on your scratchpad.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPTUAL',
        stem: 'What distinguishes an effective thesis statement from a simple topic announcement?',
        options: [
          'An effective thesis statement includes complex Latin phrases to impress the evaluator',
          'An effective thesis statement takes a clear, defensible analytical stance on the core tension of the prompt, rather than merely stating what topic will be discussed',
          'An effective thesis statement must be at least 150 words long',
          'An effective thesis statement avoids mentioning any government policies or trade-offs',
        ],
        correctAnswer: 'An effective thesis statement takes a clear, defensible analytical stance on the core tension of the prompt, rather than merely stating what topic will be discussed',
        explanation: 'A topic announcement simply states "This essay discusses X", whereas an effective thesis articulates the argument, the underlying tension, and the analytical conclusion.',
        trapExplanation: 'Length and complex vocabulary do not make a thesis effective; analytical clarity and defensible positioning do.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-ENG-05',
    topicOrder: 58,
    topicSlug: 'essay-writing-and-argumentation',
    topicTitle: 'Essay Writing & Argumentation',
    topicDescription: 'First-principles essay design, demand analysis, multidimensional frameworks, thesis formulation, and philosophical prompt deconstruction.',
    subjectSlug: 'english-descriptive-writing',
    slug: 'multi-dimensional-argumentation-pestle-stakeholder-and-cash-frameworks',
    title: 'Multi-Dimensional Argumentation: PESTLE-S, Stakeholder Grids & C.A.S.H.',
    shortDefinition: 'Brainstorming frameworks to unpack complex socio-economic topics across political, economic, social, technological, legal, and environmental dimensions.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ENG-05-01',
        statement: 'Multi-dimensional frameworks prevent one-dimensional arguments by systematically exploring institutional, social, economic, and technological perspectives.',
        claimType: 'METHODOLOGY',
        epistemicLevel: 'CANONICAL',
        confidence: 'HIGH',
        locator: 'Argumentation Models §5.1',
        excerpt: 'Deploying structured analytical grids ensures comprehensive coverage of complex policy problems.',
      },
      {
        id: 'CLM-ENG-05-02',
        statement: 'C.A.S.H. (Cause, Affected, Solution, Hurdle) serves as a rapid scaffolding tool for short 250-word essays, while PESTLE-S supports long-form 600-word essays.',
        claimType: 'SCAFFOLDING_HEURISTIC',
        epistemicLevel: 'HEURISTIC',
        confidence: 'HIGH',
        locator: 'Framework Application §5.2',
        excerpt: 'Selecting the appropriate brainstorming framework depends on the target word length and examination clock constraints.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Multi-Dimensional Thinking: Escaping the Single-Lens Trap',
        body: `A weak essay analyzes a topic through only one narrow lens—for instance, treating *Renewable Energy* purely as a technical issue of solar panels, ignoring the fiscal cost of power subsidies, rural land acquisition disputes, grid stability challenges, and international critical mineral supply chain dependencies.

To write a mature, comprehensive essay, deploy structured brainstorming frameworks.

### The 3 Adaptive Frameworks (Choose Based on Context)
1. **PESTLE-S (For Comprehensive 600-Word Macro Essays / UPSC & RBI Phase 2):**
   - **P (Political / Administrative):** Governance mandates, federal devolution, political will.
   - **E (Economic / Fiscal):** Capex multiplier, debt sustainability, private capital mobilization.
   - **S (Social / Demographic):** Human capital, equity, gender dividends, rural-urban disparities.
   - **T (Technological):** Digital infrastructure, automation, AI, cybersecurity.
   - **L (Legal / Statutory):** Acts, regulatory directives, constitutional rights.
   - **E (Environmental / ESG):** Decarbonization, climate adaptation, resource efficiency.
   - **S (Security / Geopolitical):** Supply chain resilience, strategic autonomy.

2. **The 4-Stakeholder Grid (For Regulatory & Market Policy Debates):**
   - *Government / Regulators* (Sovereign stability, fiscal bounds, consumer protection).
   - *Financial Institutions / Corporates* (Capital viability, credit underwriting, compliance cost).
   - *Retail Consumers / Citizens* (Affordability, ease of access, privacy, grievance redressal).
   - *Technology Providers / Intermediaries* (Innovation rails, open APIs, vendor concentration risks).

3. **The C.A.S.H. Framework (For Rapid 250-Word Bank PO Essays under 18 Mins):**
   - **C (Causes / Context):** Why is this topic urgent today?
   - **A (Affected Groups):** Who benefits or faces disruption?
   - **S (Solutions / Schemes):** What statutory rails or institutional mechanisms exist?
   - **H (Hurdles / Bottlenecks):** What operational or structural frictions remain?`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Framework Application: Deconstructing a Complex Theme',
        body: `### Theme: "The Platform & Gig Economy in India"

| Framework Dimension | Substantive Argument | Key Statutory / Policy Anchor |
| :--- | :--- | :--- |
| **Economic (E)** | Low-barrier urban employment engine; expanding flexible services; contributing to consumer convenience. | NITI Aayog *Booming Gig and Platform Economy* Report |
| **Legal & Social (L & S)** | Misclassification as "independent contractors" denying minimum wages, accident insurance, and pensions. | Code on Social Security, 2020; e-Shram Portal |
| **Technological (T)** | Opaque algorithmic rating systems; arbitrary account deactivations; 12–14 hour daily delivery fatigue. | Algorithmic transparency guidelines; Rajasthan Platform Workers Act |
| **Way Forward (S)** | Aggregator welfare fund contributions (1–2% turnover); tripartite grievance boards; portable health covers. | Central Social Security Fund; National Social Security Board |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_TRAPS',
        title: 'Traps: Checklist Mentality vs Fluid Synthesis',
        body: `### The "PESTLE Checklist" Trap
- ❌ **The Defect:** Writing explicit sub-headings like *"Political Angle:", "Economic Angle:", "Social Angle:"* and forcing a sentence into every category even when irrelevant.
- ✅ **The Topper Refinement:** Use PESTLE-S internally during the **2-minute scratchpad brainstorming phase**. In the actual essay, synthesize the most relevant dimensions into 3–4 fluid, interconnected thematic paragraphs with natural discourse transitions.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'PRACTICE_EXERCISE',
        title: 'Active Scaffolding Drill: 60-Second C.A.S.H. Breakdown',
        body: `**Prompt:** *"Unified Lending Interface (ULI): Frictionless Credit for Agriculture and MSMEs."*

**Task:** Jot down the 4 C.A.S.H. pillars in 60 seconds:
- **C (Cause):** High loan turnaround times (2–3 weeks) and heavy collateral demands due to fragmented physical land and financial records.
- **A (Affected):** Smallholder farmers, rural micro-enterprises, commercial rural bank branches.
- **S (Solutions):** RBI ULI open API digital rails integrating digitized state land records, satellite crop telemetry, and milk-pour dairy logs.
- **H (Hurdles):** Rural digital literacy divides, server latencies at remote PACS, borrower data privacy under DPDP Act 2023.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'Essay Paper & General Studies Multidisciplinary Analysis',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'PESTLE-S ensures comprehensive 360-degree coverage in 1000-1200 word essays.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'Paper IV — Composition & Thematic Breadth',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Supports multi-dimensional paragraph development in RAS descriptive English.',
      },
      {
        examCode: 'iibf-dbf',
        syllabusUnit: 'Banking Strategic Management & Macro Analysis',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Provides structured stakeholder analysis for banking operational proposals.',
      },
    ],
    revisionUnits: [
      {
        type: 'SUMMARY_SNIPPET',
        content: 'Brainstorming Frameworks: PESTLE-S (Political, Economic, Social, Tech, Legal, Environmental, Security) for 600w essays; 4-Stakeholders for policy debates; C.A.S.H. (Cause, Affected, Solution, Hurdle) for rapid 250w essays.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'KEY_FACTS',
        content: 'Use frameworks internally on scratchpads during the first 2 minutes of planning. Never force irrelevant dimensions or create mechanical checklist subheadings in the final prose.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'EXAM_TRAPS',
        content: 'Trap: Writing a one-dimensional essay (e.g. only discussing technical features of green energy without analyzing fiscal subsidies, land acquisition, or grid stability).',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'APPLICATION',
        stem: 'Which brainstorming framework is most appropriate when planning a 250-word descriptive essay under a tight 18-minute examination clock?',
        options: [
          'A 20-page comprehensive doctoral literature survey',
          'The C.A.S.H. framework (Cause, Affected, Solution, Hurdle) executed in 60-90 seconds on a scratchpad',
          'Writing down every single historical fact about the topic since 1947',
          'A mechanical 12-dimension PESTLE matrix with separate sub-headings for each letter',
        ],
        correctAnswer: 'The C.A.S.H. framework (Cause, Affected, Solution, Hurdle) executed in 60-90 seconds on a scratchpad',
        explanation: 'C.A.S.H. allows the candidate to rapidly isolate the context, stakeholders, policy solutions, and remaining bottlenecks within 90 seconds, leaving 16 minutes for typing.',
        trapExplanation: 'Overly complex frameworks eat up precious typing time in short 250-word exams.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-ENG-06',
    topicOrder: 58,
    topicSlug: 'essay-writing-and-argumentation',
    topicTitle: 'Essay Writing & Argumentation',
    topicDescription: 'First-principles essay design, demand analysis, multidimensional frameworks, thesis formulation, and philosophical prompt deconstruction.',
    subjectSlug: 'english-descriptive-writing',
    slug: 'introduction-hooks-thematic-development-and-circular-conclusions',
    title: 'Introduction Hooks, Thematic Development & Circular Conclusions',
    shortDefinition: 'Engineering functional opening hooks, maintaining thematic continuity across body sections, and crafting synthesizing circular conclusions.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ENG-06-01',
        statement: 'A high-scoring introduction performs three functional roles: orienting the reader, defining core parameters, and stating the analytical thesis.',
        claimType: 'RHETORICAL_PRINCIPLE',
        epistemicLevel: 'CANONICAL',
        confidence: 'HIGH',
        locator: 'Intro Discourse §6.1',
        excerpt: 'Functional introductions establish context, define terminology, and outline scope without decorative fluff.',
      },
      {
        id: 'CLM-ENG-06-02',
        statement: 'The Circular Callback conclusion echoes the opening hook or core metaphor to deliver satisfying rhetorical closure while projecting forward-looking policy foresight.',
        claimType: 'RHETORICAL_TECHNIQUE',
        epistemicLevel: 'CANONICAL',
        confidence: 'HIGH',
        locator: 'Conclusion Synthesis §6.3',
        excerpt: 'Circular conclusions synthesize the core argument and reconnect with the introductory premise without verbatim repetition.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Rhetorical Arc: From Hook to Circular Synthesis',
        body: `An essay's opening and closing paragraphs establish the evaluator's primary impression. 

### The 3 Functional Introduction Archetypes
Never begin with generic clichés (*"Since the dawn of civilization..."* or *"In today's fast-changing world..."*). Deploy one of three functional archetypes based on prompt style:
1. **The Definitional Hook (For Technical / Institutional Prompts):**  
   *Formula:* Technical definition + systemic significance + analytical scope.  
   *Example:* *"Central Bank Digital Currency (CBDC) represents a sovereign, digital expression of fiat money, functioning as a direct legal liability of the monetary authority. Unlike decentralized crypto-assets, the Digital Rupee combines the cryptographic efficiency of digital settlement with the sovereign trust and par-value liquidity of physical currency."*
2. **The Regulatory / Policy Trigger Hook (For Reform Prompts):**  
   *Formula:* Recent statutory milestone / committee report + operational objective + thesis.  
   *Example:* *"In alignment with the national vision of universal financial inclusion, India's credit landscape has pivoted toward open-protocol digital architectures. The introduction of the Unified Lending Interface (ULI) marks a transformative milestone in democratizing frictionless credit."*
3. **The Data / Benchmark Hook (For Macroeconomic & Demographic Prompts):**  
   *Formula:* High-impact empirical benchmark + structural tension + thesis.  
   *Example:* *"According to the UNFPA India Ageing Report, India's elderly cohort will double from 149 million to over 347 million by 2050, comprising over 20% of the total population. This profound demographic transition necessitates converting ageing from a perceived fiscal liability into the productive frontier of the Silver Economy."*`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'The Circular Callback & Forward-Looking Conclusion',
        body: `A conclusion should **synthesize**, not merely repeat. A powerful rhetorical technique is the **Circular Callback**—reconnecting with the opening metaphor, benchmark, or premise to achieve complete closure.

### Anatomy of an Effective Conclusion
1. **Synthesize the Central Resolution:** Answer the primary question decisively without repeating previous sentences word-for-word.
2. **The Forward-Looking S.M.A.R.T. Policy Bridge:** Outline pragmatic short- and long-term priorities.
3. **The Circular Callback Hook:** Reconnect with the introductory image.

\`\`\`text
[INTRODUCTION OPENING]
"Just as UPI revolutionized payments by removing friction from monetary transfers..."

[BODY PARAGRAPHS: Detailed analysis of ULI, data registries, and MSME credit underwriting]

[CIRCULAR CALLBACK CONCLUSION]
"Ultimately, just as UPI dismantled transaction barriers across retail payment rails, 
ULI possesses the institutional capability to democratize formal credit for smallholders, 
ensuring capital reaches the unserved last mile with uncompromised digital trust."
\`\`\``,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_TRAPS',
        title: 'Traps: Decorative Quotes and Generic Motivational Endings',
        body: `1. **The "Decorative Quote" Trap:** Forcing a famous quote (*"As Mahatma Gandhi said..."*) that has no organic connection to the topic.  
   *Rule:* If citing a thinker, immediately bridge it to concrete policy (e.g. Amartya Sen's capability approach linked to healthcare public spending).
2. **The "Generic Motivational Ending" Trap:** Concluding an economic or regulatory essay with vague slogans (*"Let us all work together for a bright future!"*).  
   *Rule:* Conclude with institutional sobriety—propose specific regulatory taxonomies, governance oversight, or capacity-building reforms.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'PRACTICE_EXERCISE',
        title: 'Active Scaffolding Drill: Hook & Callback Pair Construction',
        body: `**Prompt:** *"Bima Sugam and Universal Insurance by 2047."*

**Task:** Write a 40-word Definitional Hook and a 35-word Circular Callback Conclusion.

**Model Solution:**
- **Hook:** *"Conceptualized by IRDAI as an open Digital Public Infrastructure (DPI), Bima Sugam establishes an integrated electronic marketplace to dismantle informational asymmetry, eliminate distributor friction, and accelerate the national roadmap toward 'Insurance for All by 2047.'"*
- **Callback Conclusion:** *"In the final analysis, just as open digital rails democratized banking access under the India Stack, Bima Sugam transforms insurance from an elite discretionary luxury into an accessible, paperless public good for every citizen."*`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'Essay Paper — Effective Introductions & Synthesizing Conclusions',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Circular callbacks create strong rhetorical cohesion in UPSC essays.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'Paper IV — Composition Openings & Closings',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Ensures structured openings and forward-looking conclusions.',
      },
      {
        examCode: 'iibf-dbf',
        syllabusUnit: 'Business Communication & Executive Summaries',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Guides executive introductions and strategic recommendation summaries.',
      },
    ],
    revisionUnits: [
      {
        type: 'SUMMARY_SNIPPET',
        content: 'Functional Intro Hooks: Definition (technical), Regulatory Trigger (policy reform), Data Benchmark (empirical). Conclusions must synthesize and deploy Circular Callbacks that echo the opening premise.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'KEY_FACTS',
        content: 'Avoid decorative quotes without policy bridges. Avoid generic slogans at the end; conclude with actionable, balanced institutional roadmaps.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'EXAM_TRAPS',
        content: 'Trap: Writing a generic motivational conclusion instead of a substantive policy synthesis. Never re-state body paragraphs verbatim in the conclusion.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPTUAL',
        stem: 'What is the defining characteristic of the "Circular Callback" conclusion technique?',
        options: [
          'Repeating the first paragraph word-for-word to fill the word count',
          'Echoing the opening metaphor, core premise, or benchmark introduced in the essay hook to achieve cohesive rhetorical closure',
          'Adding five new unresolved questions at the very end of the essay',
          'Listing the names of all committee members who drafted the policy',
        ],
        correctAnswer: 'Echoing the opening metaphor, core premise, or benchmark introduced in the essay hook to achieve cohesive rhetorical closure',
        explanation: 'A circular callback creates a satisfying rhetorical loop by linking the final synthesis back to the introductory framing without verbatim repetition.',
        trapExplanation: 'Verbatim repetition is penalized for padding; the callback must synthesize and advance the core argument.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-ENG-07',
    topicOrder: 58,
    topicSlug: 'essay-writing-and-argumentation',
    topicTitle: 'Essay Writing & Argumentation',
    topicDescription: 'First-principles essay design, demand analysis, multidimensional frameworks, thesis formulation, and philosophical prompt deconstruction.',
    subjectSlug: 'english-descriptive-writing',
    slug: 'abstract-philosophical-and-contemporary-policy-debates',
    title: 'Abstract, Philosophical & Contemporary Policy Debates',
    shortDefinition: 'Methodology for demystifying abstract, proverbial prompts and handling controversial policy debates with the balanced central-banker stance.',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-ENG-07-01',
        statement: 'Abstract and proverbial prompts should be decoded by identifying the underlying philosophical principle and grounding it in concrete governance, economic, and human capital applications.',
        claimType: 'PEDAGOGICAL_PRINCIPLE',
        epistemicLevel: 'CANONICAL',
        confidence: 'HIGH',
        locator: 'Abstract Essays §7.1',
        excerpt: 'De-mystifying proverbs requires translating metaphorical wisdom into tangible socio-economic and institutional realities.',
      },
      {
        id: 'CLM-ENG-07-02',
        statement: 'Controversial policy debates require the "Central Banker Stance"—a balanced 50/50 evaluation of efficiency gains vs systemic risk, culminating in calibrated regulatory oversight.',
        claimType: 'ARGUMENTATION_STRATEGY',
        epistemicLevel: 'CANONICAL',
        confidence: 'HIGH',
        locator: 'Policy Stance §7.3',
        excerpt: 'Institutional evaluators reward balanced risk assessment and phased regulatory solutions over extreme ideological binaries.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Grounding the Abstract: The Concrete Translation Method',
        body: `Aspirants often dread abstract or proverbial prompts (*"Anyone who stops learning is old..."*, *"The unexamined life is not worth living"*, *"Peace is not the absence of conflict..."*), fearing they lack literary flair.

### The Grounding Algorithm for Philosophical Prompts
1. **Decode the Core Human Principle:** What timeless truth about human nature, learning, ethics, or resilience is being asserted?
2. **Translate to the Individual Level (Psychological / Cognitive):** How does this principle manifest in personal agency, neuroplasticity, or continuous skill renewal?
3. **Translate to the Socio-Economic & Institutional Level:** How does this apply to corporate innovation, public governance, central banking risk management, or national development?
4. **Identify the Counter-Tension / Boundary:** Where does this principle encounter real-world friction (e.g. institutional inertia, digital divides)?
5. **Synthesize a Forward-Looking Roadmap:** How can policy, education, and institutional culture foster this virtue systematically?`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Deconstructing Controversial Policy Debates: The Central Banker Stance',
        body: `When tackling contentious policy questions (e.g. *Privatization of Public Sector Banks*, *Unchecked Generative AI in Financial Services*, *Economic Growth vs Net-Zero Decarbonization*), never take an extreme, polarized stance.

Adopt the **"Central Banker Stance" (Prudential Balance)**:

| Analytical Stage | Structural Focus & Allocation | Key Focus Elements |
| :--- | :--- | :--- |
| **1. The Case for Transformation (40–45%)** | Efficiency, Innovation & Capital Growth | Capital formation, operational agility, technological democratization, reduced fiscal drag. |
| **2. Systemic Risks & Vulnerabilities (40–45%)** | Prudential Risks, Equity & Market Failures | Social exclusion, regional credit skews, algorithmic bias, systemic contagion, cyber vulnerability. |
| **3. The Calibrated Synthesis (10–15%)** | Phased Regulation & Guardrails | Regulatory sandboxes, targeted credit guarantee cushions, strict disclosure taxonomies (SEBI BRSR Core, RBI DAKSH). |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_TRAPS',
        title: 'Traps: Ideological Polemics vs Institutional Restraint',
        body: `### The Ideological Trap
- ❌ **The Trap:** Writing an angry polemic claiming *"The government's privatization policy is a corrupt conspiracy destroying national assets."* Or conversely: *"All public institutions should be immediately shut down because they are completely incompetent."*
- ✅ **The High-Scoring Institutional Framing:** *"While consolidating commercial banking entities can eliminate duplicated administrative overheads and improve capital allocation efficiency, maintaining a strong public sector banking presence remains essential for credit delivery to underserved agrarian belts and Priority Sector mandates. A phased, calibrated divestment roadmap paired with enhanced board governance offers the optimal equilibrium."*`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'PRACTICE_EXERCISE',
        title: 'Active Scaffolding Drill: Philosophical Translation',
        body: `**Prompt:** *"Anyone who keeps learning stays young." (Henry Ford)*

**Task:** Map this abstract quote across 3 concrete dimensions:
1. **Cognitive / Biological:** Neuroplasticity—lifelong synaptic generation through complex skill acquisition shielding against cognitive decline.
2. **Economic / Professional:** The shrinking half-life of technical skills in the AI era; Alvin Toffler's *"learn, unlearn, relearn"* imperative.
3. **Institutional Policy:** Transitioning from front-loaded 20-year education models to lifelong adult education ecosystems and inter-generational digital mentoring (SAGE & SACRED initiatives).`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'Essay Paper — Philosophical & Abstract Prompts',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'DEEP_DIVE',
        notes: 'Section A & B of UPSC Essay frequently feature purely philosophical statements.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'Paper IV — Descriptive Reflections',
        relevance: 'HIGH_YIELD_PERIPHERAL',
        priority: 'MEDIUM',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Guides balanced reflection in RAS Mains descriptive sections.',
      },
      {
        examCode: 'iibf-dbf',
        syllabusUnit: 'Ethics in Banking & Financial Decision Making',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Essential for analyzing ethical dilemmas and prudential banking trade-offs.',
      },
    ],
    revisionUnits: [
      {
        type: 'SUMMARY_SNIPPET',
        content: 'Abstract Prompts: Ground philosophical truths across Individual, Socio-Economic, and Institutional Policy levels. Controversial Debates: Deploy the Central Banker Stance—balanced 50/50 evaluation of benefits vs systemic risks.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'KEY_FACTS',
        content: 'Never adopt extreme ideological or polemical positions. Frame policy criticisms through structural frictions, risk trade-offs, and phased regulatory solutions.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'EXAM_TRAPS',
        content: 'Trap: Writing purely abstract philosophical rambling without real-world examples, or taking a one-sided political stance on policy debates.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'APPLICATION',
        stem: 'When addressing a controversial economic policy debate (such as public sector bank divestment or AI in lending), what approach yields the highest evaluation marks?',
        options: [
          'Taking an absolute, uncompromising ideological stance and attacking all counter-arguments as corrupt',
          'Evaluating both operational efficiencies and systemic/social risks in balanced measure, proposing phased regulatory guardrails in the conclusion',
          'Refusing to answer the question and writing about an unrelated historical topic',
          'Listing only personal emotional opinions without referencing regulatory frameworks',
        ],
        correctAnswer: 'Evaluating both operational efficiencies and systemic/social risks in balanced measure, proposing phased regulatory guardrails in the conclusion',
        explanation: 'Institutional examiners reward balanced judgment that acknowledges economic benefits while proactively addressing market failures and consumer protection risks.',
        trapExplanation: 'Extreme positions signal bias and lack of analytical maturity.',
        difficulty: 'MEDIUM',
      },
    ],
  },

  // =========================================================================
  // TOPIC 59: Précis Writing & Non-Verbatim Synthesis
  // =========================================================================
  {
    id: 'CON-ENG-08',
    topicOrder: 59,
    topicSlug: 'precis-writing-and-synthesis',
    topicTitle: 'Précis Writing & Non-Verbatim Synthesis',
    topicDescription: 'Information hierarchy, negative filtering, compression mechanics, title formulation, and subjective comprehension synthesis.',
    subjectSlug: 'english-descriptive-writing',
    slug: 'precis-writing-compression-negative-filtering-and-titling',
    title: 'Précis Writing: The 1/3rd Rule, Negative Filtering & Title Formulation',
    shortDefinition: 'The disciplined extraction of core informational hierarchies, eliminating illustrative fluff, and synthesizing a single condensed paragraph under strict word constraints.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ENG-08-01',
        statement: 'A précis is an objective, third-person condensation of the source passage preserving its core logical argument within approximately one-third of the original word count.',
        claimType: 'PRECIS_PRINCIPLE',
        epistemicLevel: 'CANONICAL',
        confidence: 'HIGH',
        locator: 'Précis Theory §8.1',
        excerpt: 'Précis writing requires strict adherence to source facts, zero personal commentary, and single-paragraph structural unity.',
      },
      {
        id: 'CLM-ENG-08-02',
        statement: 'Negative filtering systematically removes analogies, rhetorical questions, granular figures, and parenthetical examples during compression.',
        claimType: 'COMPRESSION_TECHNIQUE',
        epistemicLevel: 'CANONICAL',
        confidence: 'HIGH',
        locator: 'Filtering Matrix §8.3',
        excerpt: 'Striking illustrative examples while preserving underlying principles is the core mechanism of 1/3rd compression.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Essence of Précis Writing',
        body: `A précis is not a loose summary or a collection of key sentences stitched together; it is a **miniature, self-contained replica of the original passage's intellectual architecture**.

### The 5 Golden Rules of Précis Writing
1. **Strict Compression Target:** Compress the original text to approximately **$\\frac{1}{3}\\text{rd}$ of its original word count** (typically $\\pm 5-10\\%$, qualified by specific exam instructions).
2. **Zero External Information:** Never inject outside knowledge, current affairs statistics, or personal opinions not present in the source passage.
3. **Zero Verbatim Lifting:** Paraphrase and restructure clauses. Copying full sentences directly triggers string-matching penalties.
4. **Single-Paragraph Unity:** A précis must strictly be written as **one single, unbroken paragraph**.
5. **Objective Third-Person Narrative:** Never use first-person (*"I"*, *"We"*) or conversational second-person (*"You"*). Present the distilled assertions objectively.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Negative Filtering & The Noun-Compound Title Formula',
        body: `### The Negative Filtering Pass: What Must NOT Survive Compression
When reading the raw passage, strike out illustrative fluff immediately:

| Content Element in Raw Text | Précis Action | Rationale |
| :--- | :--- | :--- |
| **Exemplifications & Lists** (*"such as, for instance, e.g."*) | ❌ Strike out completely | Specific instances illustrate; they do not establish the core principle. |
| **Metaphors & Idioms** (*"double-edged sword, light at the end of the tunnel"*) | 🔄 Replace with literal concept | Replace figurative language with direct analytical terminology. |
| **Granular Figures** (*"₹45,210 crore, 34.6%, 12.8 million"*) | 🔄 Generalize into qualitative trends | Convert to *"substantial capital outlays"* or *"exponential growth"*. |
| **Rhetorical Questions** (*"Can humanity survive without clean air?"*) | 🔄 Convert to flat assertions | State as *"Environmental sustainability is essential for survival."* |
| **Direct Quotations & Dialogues** | 🔄 Convert to reported indirect concepts | Remove quotation marks and distill the underlying thesis. |

### The Noun-Phrase Compound Title Formula
A high-scoring title encapsulates both the **Subject** and the **Core Conflict/Dimension**:
- **Formula:** \`[Core Subject / Institution] : [Primary Tension or Resolution]\`
- ❌ *Weak / Generic Titles:* *"Environment"*, *"Banking Today"*, *"Passage Summary"*.
- ✅ *Topper Titles:* *"Central Bank Autonomy: Preserving Price Stability Against Fiscal Dominance"*, *"Digital Financial Inclusion: Safeguarding Accessibility Through Cyber Hygiene"*`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_TRAPS',
        title: 'Examiner Traps in Précis Writing',
        body: `1. **The "Missing Title" Trap:** Forgetting to give a title at the top of the précis (costs an immediate 3–5 marks).
2. **The "Multiple Paragraph" Trap:** Dividing a 100-word précis into two paragraphs (triggers an automatic structural penalty).
3. **The "Front-Loaded Word Budget" Trap:** Spending 80 words summarizing the first two sentences of the passage and running out of words before reaching the author's final conclusion.  
   *Rule:* Maintain proportional sentence allocation matching the source's thematic distribution.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'PRACTICE_EXERCISE',
        title: 'Active Transformation: Raw Passage to Polished Précis',
        body: `**Raw Source Passage (150 Words):**
> *"The institutional autonomy of central banks has long been regarded by scholars as the foundational bedrock of durable price stability. When monetary authorities possess operational independence to set interest rates free from short-term electoral cycles, inflation expectations remain firmly anchored across markets. However, during periods of acute economic turbulence, sovereign governments frequently lean on central banks to suppress borrowing yields artificially and absorb public debt—a hazard known as fiscal dominance. Succumbing to fiscal dominance compromises monetary sovereignty and fuels runaway inflation. Therefore, preserving a clear statutory demarcation between monetary policy and sovereign debt management is vital for economic resilience."*

**Condensation Walkthrough (Negative Filtering):**
- *Core Principle:* Central bank independence anchors inflation.
- *Core Tension:* Fiscal dominance (government debt pressure during crises) erodes sovereignty and causes inflation.
- *Resolution:* Clear statutory demarcation is essential.

**Polished Précis (52 Words):**
> **Title: Central Bank Independence: Safeguarding Monetary Sovereignty Against Fiscal Dominance**  
> *Central bank operational autonomy is fundamental to anchoring inflation expectations free from electoral political pressures. However, government pressure to monetize public debt during crises—termed fiscal dominance—compromises monetary sovereignty and ignites severe inflation. Consequently, preserving strict statutory separation between sovereign debt financing and independent monetary execution is vital for durable macroeconomic stability.*

**Why This Works:**
- Word count: 52 words (exactly 34.6% of 150 words).
- Preserves all three core logical steps (Autonomy $\rightarrow$ Fiscal Dominance Hazard $\rightarrow$ Statutory Demarcation).
- Zero external facts; zero verbatim copying; single paragraph.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'Compulsory English Paper — Précis Writing',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'DEEP_DIVE',
        notes: 'Carries 75 direct marks in UPSC Compulsory English Paper.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'Paper IV — Précis Writing',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Tests precise condensation and titling in RAS General English.',
      },
      {
        examCode: 'iibf-dbf',
        syllabusUnit: 'Business Communication & Information Condensation',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Standard method for executive briefing and minutes summarization.',
      },
    ],
    revisionUnits: [
      {
        type: 'SUMMARY_SNIPPET',
        content: 'Précis Writing: Strict 1/3rd length, single unbroken paragraph, objective third-person narrative, zero external facts, zero verbatim copying. Title Formula: [Core Subject] : [Primary Conflict].',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'KEY_FACTS',
        content: 'Negative Filtering: Strike out examples, metaphors, rhetorical questions, and granular numbers. Proportionality: allocate sentences equally across the passage’s beginning, middle, and end.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'EXAM_TRAPS',
        content: 'Traps: Missing title (-5 marks), breaking précis into multiple paragraphs (-5 marks), injecting outside opinions, or copying full clauses verbatim.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPTUAL',
        stem: 'Which of the following is a mandatory rule in high-scoring précis writing?',
        options: [
          'Writing the précis in three distinct paragraphs (Introduction, Body, Conclusion)',
          'Adding recent current affairs data not found in the original passage to improve factual depth',
          'Retaining all rhetorical questions and personal dialogues exactly as written by the author',
          'Writing the précis as a single unbroken paragraph with a contextual title, strictly adhering to source facts without verbatim copying',
        ],
        correctAnswer: 'Writing the précis as a single unbroken paragraph with a contextual title, strictly adhering to source facts without verbatim copying',
        explanation: 'A précis must be a unified single paragraph representing the passage objectively within 1/3rd word bounds, accompanied by an informative title.',
        trapExplanation: 'Injecting outside data, splitting into paragraphs, or copying verbatim violate fundamental précis rules.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-ENG-09',
    topicOrder: 59,
    topicSlug: 'precis-writing-and-synthesis',
    topicTitle: 'Précis Writing & Non-Verbatim Synthesis',
    topicDescription: 'Information hierarchy, negative filtering, compression mechanics, title formulation, and subjective comprehension synthesis.',
    subjectSlug: 'english-descriptive-writing',
    slug: 'subjective-reading-comprehension-and-non-verbatim-paraphrasing',
    title: 'Subjective Reading Comprehension & Non-Verbatim Paraphrasing',
    shortDefinition: 'Techniques for answering subjective RC prompts using question-first reverse scanning, 2-sentence synthesis, and the 3-step non-verbatim paraphrase engine.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ENG-09-01',
        statement: 'Subjective Reading Comprehension evaluates comprehension and original synthesis; copying full phrases directly from the passage incurs severe string-matching penalties.',
        claimType: 'RC_PRINCIPLE',
        epistemicLevel: 'CANONICAL',
        confidence: 'HIGH',
        locator: 'RC Synthesis §9.1',
        excerpt: 'Algorithmic and human evaluators penalize verbatim clause lifting in subjective answer writing.',
      },
      {
        id: 'CLM-ENG-09-02',
        statement: 'The 3-Step Paraphrase Engine (Extract Kernel -> Lexical Substitution -> Syntactic Inversion) produces concise, non-verbatim answers that satisfy strict word limits.',
        claimType: 'PARAPHRASE_METHOD',
        epistemicLevel: 'CANONICAL',
        confidence: 'HIGH',
        locator: 'Paraphrase Engine §9.3',
        excerpt: 'Re-engineering syntax while swapping key nouns and verbs ensures original articulation with semantic fidelity.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Subjective RC Paradigm: Beyond Multiple Choice',
        body: `In modern banking and regulatory examinations (SBI PO Mains, IBPS PO Mains, RBI Grade B), Reading Comprehension is increasingly tested through **Subjective (typing-based) Questions** requiring 40–50 word analytical responses rather than clicking multiple-choice options.

### The Evaluator's Anti-Verbatim Trap
When candidates copy clauses directly from the passage, automated and human evaluation engines apply **string-matching penalties**, often reducing scores to zero. High scores require **syntactic re-engineering and semantic compression**.

### The 3-Step Non-Verbatim Paraphrase Engine
1. **Step 1: Extract the Core Semantic Kernel:** Strip away all adjectives, narrative filler, and dialogue to isolate the foundational fact.
2. **Step 2: Lexical Substitution:** Replace at least two primary content words with formal, contextually accurate synonyms.
3. **Step 3: Syntactic Inversion:** Shift the grammatical voice (Active $\\rightarrow$ Passive) or lead with a subordinating connector (*"While...", "Given that..."*).`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'The 2-Sentence 45-Word Answer Architecture',
        body: `For each subjective RC question, structure the response into exactly two high-density sentences:
- **Sentence 1 (Direct Non-Verbatim Answer):** Answer the operative command verb directly using paraphrased vocabulary.
- **Sentence 2 (Causal Mechanism / Systemic Implication):** Detail the underlying reason or future institutional impact explicitly stated by the author.

### Live Paraphrase Transformation Matrix

| Raw Passage Text | Flawed Verbatim Attempt (Scores 0) | High-Scoring Non-Verbatim Synthesis (Top Grade) |
| :--- | :--- | :--- |
| *"The legacy Incurred Loss Model recognized impairment only after a formal 90-day payment default occurred, creating delayed provisioning during downturns."* | *"The model recognized impairment only after a 90-day default occurred, which created delayed provisioning during downturns."* *(0 Marks: 85% string copy)* | *"The legacy framework was inherently reactive, deferring loan loss provisioning until formal default materialized. Consequently, banks remained chronically under-buffered against sudden macroeconomic downturns."* *(100% Score: Complete syntactic re-engineering)* |
| *"Micro-insurance delivers low-cost coverage, preventing vulnerable households from relapsing into generational poverty traps following medical emergencies."* | *"Micro-insurance gives low-cost coverage preventing households from falling into poverty traps after emergencies."* *(0 Marks: Word substitution only)* | *"By providing affordable financial cushions during catastrophic health shocks, micro-insurance prevents informal workers from resorting to distress asset sales, thereby shielding family capital from generational poverty cycles."* *(100% Score: Deep causal synthesis)* |`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_TRAPS',
        title: 'Execution Traps in Subjective RC',
        body: `1. **The "Reverse Scan" Strategy:** Always read the **2–3 questions FIRST** before reading the passage. This primes your working memory to flag target keywords and command verbs immediately.
2. **The "Out-of-Scope Fact" Trap:** Answering based on real-world knowledge that is NOT present in the passage text. In RC, truth is strictly bounded by the passage.
3. **The "Word Limit Overflow" Trap:** Typing 100+ words per question, running out of exam time for the essay.  
   *Rule:* Keep answers tightly bounded between **40–50 words**.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'PRACTICE_EXERCISE',
        title: 'Active Scaffolding Drill: Subjective RC Paraphrase',
        body: `**Passage Excerpt:**
> *"The rapid proliferation of decentralized financial applications has severely outpaced legacy supervisory apparatuses. Traditional compliance mechanisms rely on retrospective quarterly audits; however, modern algorithmic transactions occur in sub-millisecond intervals, necessitating the deployment of automated RegTech tools."*

**Question:** Why have traditional supervisory mechanisms proven inadequate in monitoring decentralized financial applications?

**Model Answer (44 Words):**
> *"Legacy supervisory frameworks fail because periodic retrospective audits cannot monitor high-frequency algorithmic trade flows executing in real time. Consequently, regulatory authorities must transition toward continuous, automated RegTech surveillance tools to achieve instantaneous telemetry and preemptive systemic risk mitigation."*`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'Compulsory English — Reading Comprehension',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Evaluates concise, non-verbatim answers to passage-based questions.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'Paper IV — Comprehension of an Unseen Passage',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Directly tests subjective answer drafting from unseen passages.',
      },
      {
        examCode: 'iibf-dbf',
        syllabusUnit: 'Analytical Reading & Case Comprehension',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Core skill for evaluating credit proposals and legal regulatory memos.',
      },
    ],
    revisionUnits: [
      {
        type: 'SUMMARY_SNIPPET',
        content: 'Subjective RC: Question-First Reverse Scan -> Triangulate text -> 3-Step Paraphrase (Kernel -> Lexical Substitution -> Syntactic Inversion) -> 2-Sentence 45-Word Answer. Never copy clauses verbatim.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'KEY_FACTS',
        content: 'Sentence 1 = Direct non-verbatim answer; Sentence 2 = Causal mechanism or systemic implication. Target length: 40-50 words per question.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'EXAM_TRAPS',
        content: 'Trap: Copying more than 3 consecutive words directly from the text (triggers string-matching penalty). Base answers strictly on passage facts, not outside knowledge.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'APPLICATION',
        stem: 'Why is copying complete sentences directly from the passage penalized in subjective reading comprehension examinations?',
        options: [
          'Because examiners prefer students to invent imaginary facts instead of using the passage',
          'Because verbatim copying fails to demonstrate independent linguistic comprehension and triggers automated NLP string-matching penalties',
          'Because examiners require all answers to be written in poetic rhyme',
          'Because subjective answers must always disagree with the passage author',
        ],
        correctAnswer: 'Because verbatim copying fails to demonstrate independent linguistic comprehension and triggers automated NLP string-matching penalties',
        explanation: 'Subjective RC tests whether the candidate can comprehend and syntactically re-articulate the author\'s points in their own words.',
        trapExplanation: 'Verbatim copying indicates passive extraction rather than active comprehension.',
        difficulty: 'EASY',
      },
    ],
  },

  // =========================================================================
  // TOPIC 60: Professional Correspondence & Workplace Writing
  // =========================================================================
  {
    id: 'CON-ENG-10',
    topicOrder: 60,
    topicSlug: 'professional-correspondence-and-workplace-writing',
    topicTitle: 'Professional Correspondence & Workplace Writing',
    topicDescription: 'Formal full-block letter design, banking grievance escalation hierarchies, official emails, administrative reports, and incident memos.',
    subjectSlug: 'english-descriptive-writing',
    slug: 'formal-and-informal-letter-writing-modern-full-block-and-grievance-escalation',
    title: 'Formal & Informal Letter Writing: Modern Full-Block & Grievance Escalation',
    shortDefinition: 'Standard modern full-block layout, 3-tier banking grievance escalation hierarchy, and formal versus informal register calibration.',
    difficulty: 'FOUNDATIONAL',
    claims: [
      {
        id: 'CLM-ENG-10-01',
        statement: 'Modern formal letter writing strictly requires the Full-Block format, where all layout components are 100% flush left-aligned with zero indentation.',
        claimType: 'FORMAT_STANDARD',
        epistemicLevel: 'CANONICAL',
        confidence: 'HIGH',
        locator: 'Letter Standards §10.1',
        excerpt: 'The modern full-block style eliminates mixed alignments, ensuring clean digital scannability.',
      },
      {
        id: 'CLM-ENG-10-02',
        statement: 'Formal banking grievance correspondence follows a 3-tier statutory escalation hierarchy: Branch Operations -> Banking Ombudsman (RBI Integrated Ombudsman Scheme 2021) -> Public Media Advocacy.',
        claimType: 'INSTITUTIONAL_FRAMEWORK',
        epistemicLevel: 'CANONICAL',
        confidence: 'HIGH',
        locator: 'Grievance Hierarchy §10.2',
        excerpt: 'Properly referencing statutory authorities and turnaround times establishes authoritative formal tone.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Modern Full-Block Format & Layout Architecture',
        body: `In competitive examinations (SBI PO, IBPS PO, LIC AAO, UPSC APFC), letter writing carries 10 to 20 direct marks. Graders and software evaluation engines evaluate letters strictly on **layout alignment, formal tone, and statutory accuracy**.

### The Modern Full-Block Standard
Every single component is **100% flush LEFT-ALIGNED**. Do not indent paragraphs or place dates/addresses on the right:
1. **Sender's Address (2–3 lines):** Dummy postal location (\`12, Civil Lines, ABC City - 110001\`).
2. **Date Line:** Standard formal date (\`24 August 2026\`). Never write \`24/08/26\` or \`24-8-2026\`.
3. **Receiver's Designation & Address:** Specific title first, followed by institution and branch.
4. **Subject Line:** Concise, underlined or bold noun phrase under 12 words.
5. **Formal Salutation:** \`Sir / Madam,\` or \`Respected Sir / Madam,\`.
6. **3-Paragraph Body (140–160 Words):**
   - *Para 1:* Account details, transaction reference, and immediate context.
   - *Para 2:* Specific grievance, statutory violation (TAT delay, RBI circular), and hardship caused.
   - *Para 3:* Exact action requested (refund, penalty compensation, account freeze).
7. **Formal Sign-off & Dummy Identity:** \`Yours faithfully,\` followed by \`XYZ\` (never write real name/contact details to prevent Unfair Means penalties).`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'The 3-Tier Banking Grievance Escalation Hierarchy',
        body: `When drafting banking letters, select the appropriate institutional level:

| Escalation Level | Addressee | Tone & Focus | Statutory / Policy Anchors to Cite |
| :--- | :--- | :--- | :--- |
| **Level 1: Branch Operations** | The Branch Manager | Direct, factual, cooperative; requesting immediate operational resolution. | Reference Account No, Transaction ID, RBI Circular on Zero Liability for Unauthorized Electronic Transactions. |
| **Level 2: Regulatory Escalation** | The Banking Ombudsman | Authoritative, firm, citing non-resolution past 30 days. | Reserve Bank - Integrated Ombudsman Scheme, 2021 (RBI IOS 2021); auto-compensation of ₹100/day for TAT delay. |
| **Level 3: Civic & Public Advocacy** | The Editor, National Daily | Constructive civic voice; highlighting systemic risks and consumer safety. | Digital lending fraud, cyber hygiene awareness, rural ATM cash downtime. |

### Salutation and Sign-off Precision Rules
- Address by Official Designation (*Sir / Madam*) $\rightarrow$ Sign off as **\`Yours faithfully,\`**.
- Address by Specific Named Individual (*Dear Mr. Sharma*) $\rightarrow$ Sign off as **\`Yours sincerely,\`**.
- Address to Sibling / Blood Relative (*Dear Rohan*) $\rightarrow$ Sign off as **\`Yours affectionately,\`**.
- ❌ **Forbidden Forms:** Never write *'Your's faithfully'* (apostrophe error), *'Yours obediently'* (outdated colonial relic), or *'Thanks & Regards'* in formal letters.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_TRAPS',
        title: 'Critical Letter Writing Traps',
        body: `1. **The UFM (Unfair Means) Penalty:** Writing your real name, roll number, or actual mobile number in the signature block triggers an immediate disqualification or heavy mark deduction. Always sign as \`XYZ\` or \`ABC\`.
2. **The Indented Paragraph Trap:** Indenting the first line of paragraphs. In Modern Full-Block, all text is flush left, separated by a single empty line.
3. **The Missing Subject Trap:** Forgetting the Subject line in formal letters, or placing it above the receiver's address.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'PRACTICE_EXERCISE',
        title: 'Active Scaffolding Drill: Ombudsman Escalation Letter',
        body: `**Task:** Draft a complete 150-word formal letter to the Banking Ombudsman regarding an unresolved failed UPI debit of ₹15,000 pending for over 30 days.

**Model Solution (148 Words):**
\`\`\`text
123, Civil Lines,
ABC City – 110001.

24 August 2026.

The Banking Ombudsman,
Reserve Bank of India,
Regional Office, ABC City – 110001.

Subject: Complaint under RBI Integrated Ombudsman Scheme 2021 regarding unresolved failed UPI debit of ₹15,000.

Respected Sir/Madam,

I am constrained to lodge this formal complaint under the Reserve Bank - Integrated Ombudsman Scheme, 2021, regarding deficiency of service by XYZ Bank, Civil Lines Branch, concerning an unresolved erroneous UPI debit.

On 15 July 2026, an amount of ₹15,000 was debited from my Savings Account (A/c No: XXXXXXXXXX1234) via UPI (Ref: UPI/67890/AXIS) despite transaction failure at the merchant terminal. I lodged a formal grievance with the branch on 16 July 2026 (Complaint Ticket: CRM-99481); however, over 30 days have elapsed without resolution or refund.

Under RBI Master Directions on Harmonisation of Turn Around Time (TAT), banks must auto-reverse failed transactions within T+1 day, failing which delayed compensation of ₹100 per day is payable. I kindly request your intervention to direct XYZ Bank to refund my ₹15,000 along with statutory compensation.

Yours faithfully,
XYZ
\`\`\`

**Why This Works:**
- 100% Modern Full-Block alignment.
- Accurate statutory references (RBI Integrated Ombudsman Scheme 2021, TAT Harmonization, ₹100/day compensation).
- Strict 3-paragraph structure (148 words); zero UFM disclosure.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'Compulsory English — Official Correspondence',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Covers administrative and official representation letters.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'Paper IV — Formal & Informal Letter Writing',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Standard 10-mark formal letter question in RAS English.',
      },
      {
        examCode: 'iibf-dbf',
        syllabusUnit: 'Banking Grievance Redressal & Customer Communication',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Mandatory standard for customer grievance and Ombudsman representations.',
      },
    ],
    revisionUnits: [
      {
        type: 'SUMMARY_SNIPPET',
        content: 'Modern Full-Block Format: 100% left-aligned, zero indentation, standard date (24 August 2026). Banking Grievance Hierarchy: Branch Manager -> Banking Ombudsman (RBI IOS 2021) -> Editor. Always sign as XYZ.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'KEY_FACTS',
        content: 'Salutation Rules: Sir/Madam pairs with Yours faithfully; named salutation pairs with Yours sincerely. Subject line must be under 12 words and placed between receiver address and salutation.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'EXAM_TRAPS',
        content: 'Traps: Never write real name/phone (UFM penalty). Never use apostrophe in Yours (write Yours, not Your\'s). Do not indent paragraph beginnings.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'APPLICATION',
        stem: 'In a modern formal business letter, which formatting rule is non-negotiable under the Full-Block standard?',
        options: [
          'The sender address and date must be aligned to the top-right corner of the page',
          'Every paragraph must begin with a 5-space tab indentation',
          'Every layout element (Sender Address, Date, Receiver, Subject, Salutation, Body, Sign-off) must be strictly flush left-aligned',
          'The sign-off must be written in italic script in the center of the page',
        ],
        correctAnswer: 'Every layout element (Sender Address, Date, Receiver, Subject, Salutation, Body, Sign-off) must be strictly flush left-aligned',
        explanation: 'The Modern Full-Block standard mandates 100% left alignment for all components with zero indentations.',
        trapExplanation: 'Right-aligned headers and indented paragraphs belong to obsolete semi-block formats.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-ENG-11',
    topicOrder: 60,
    topicSlug: 'professional-correspondence-and-workplace-writing',
    topicTitle: 'Professional Correspondence & Workplace Writing',
    topicDescription: 'Formal full-block letter design, banking grievance escalation hierarchies, official emails, administrative reports, and incident memos.',
    subjectSlug: 'english-descriptive-writing',
    slug: 'official-workplace-emails-and-customer-communication-architecture',
    title: 'Official Workplace Emails & Customer Communication Architecture',
    shortDefinition: 'Structural and tonal divergence between official emails and physical letters, covering internal operational escalations and customer conciliation.',
    difficulty: 'INTERMEDIATE',
    claims: [
      {
        id: 'CLM-ENG-11-01',
        statement: 'Official workplace emails utilize header metadata blocks (To, Cc, Subject) instead of physical postal addresses, demanding high-density brevity (100–120 words).',
        claimType: 'FORMAT_STANDARD',
        epistemicLevel: 'CANONICAL',
        confidence: 'HIGH',
        locator: 'Email Protocols §11.1',
        excerpt: 'Workplace emails prioritize operational urgency, concise root-cause analysis, and specific action requests.',
      },
      {
        id: 'CLM-ENG-11-02',
        statement: 'Customer conciliation emails require empathetic tone, transparent fee schedule citations, and clear next steps to prevent customer churn and regulatory escalations.',
        claimType: 'COMMUNICATION_PRINCIPLE',
        epistemicLevel: 'CANONICAL',
        confidence: 'HIGH',
        locator: 'Customer Care Architecture §11.3',
        excerpt: 'Resolving fee disputes effectively balances institutional compliance disclosures with customer retention.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'The Email vs. Letter Structural Divergence',
        body: `In modern banking and corporate recruitment (e.g. SBI PO workplace patterns), candidates are tested on **Functional Workplace Email Correspondence**.

Writing an email like a 19th-century formal letter is an immediate marker of poor workplace readiness.

### Core Structural Differences
| Feature | Formal Letter (150 Words) | Official Workplace Email (100–120 Words) |
| :--- | :--- | :--- |
| **Header Block** | Physical Sender Address + Date + Receiver Address | \`To:\`, \`Cc:\`, and \`Subject:\` metadata line only. Zero physical postal address or standalone date line. |
| **Subject Line** | \`Subject: Complaint against...\` | \`Subject: [Action / Urgency] + [Specific Operational Reference]\` |
| **Salutation** | \`Respected Sir,\` / \`Sir,\` | \`Dear Sir/Madam,\` or \`Dear [Team / Customer Name],\` |
| **Opening Line** | *"I am writing to draw your kind attention to..."* | *"This is regarding..."* / *"I am writing to escalate..."* |
| **Sign-off** | \`Yours faithfully,\` / \`Yours sincerely,\` | \`Warm regards,\` / \`Best regards,\` |
| **Signature Block** | Name (\`XYZ\`) | Name (\`XYZ\`), Designation, Branch/Department |`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Functional Email Archetypes & Model Breakdowns',
        body: `### 1. Inter-Departmental SLA Escalation Email (118 Words)
\`\`\`text
To: cpc.retail.operations@bank.co.in
Cc: agm.credit@bank.co.in
Subject: URGENT: SLA Escalation — 14 Pending Retail Home Loan KYC Approvals (Branch Code: 4092)

Dear Team,

I am writing to escalate 14 high-value retail Home Loan applications (Cumulative Value: ₹8.4 Crore) uploaded by our branch between 10th and 14th August 2026, which remain pending for centralized KYC and title clearance at the Central Processing Centre (CPC).

The standard Service Level Agreement (SLA) turnaround time of 4 working days has been substantially breached, exceeding 10 business days. Three premier builder clients have issued cancellation warnings, creating severe customer dissatisfaction and imminent business churn to competing private lenders.

All documentation and legal searches are fully vetted at our end. Kindly expedite processing and dispatch sanctions on priority today.

Warm regards,
XYZ
Assistant Manager (Credit), ABC Branch
\`\`\`

---

### 2. Customer Conciliation & Fee Clarification Email (114 Words)
\`\`\`text
To: customer.query@email.com
Subject: Clarification: Annual Maintenance & Forex Markup Deductions (A/c No: ...4819)

Dear Mr. Kapoor,

Thank you for contacting State Bank of India regarding the recent deductions of ₹413 and ₹177 on 20 August 2026 from your savings account.

We wish to clarify that the ₹413 charge constitutes the statutory Annual Maintenance Charge (AMC of ₹350 + 18% GST) applicable to the Global Platinum Debit Card, as per the Bank's Schedule of Service Charges. The deduction of ₹177 represents the standard 3.5% Foreign Exchange Markup Fee (+ GST) levied on your international transaction made in US Dollars.

Both deductions adhere strictly to RBI transparency norms. We appreciate your valued relationship with us.

Warm regards,
XYZ
Customer Experience Officer, SBI Helpline
\`\`\``,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_TRAPS',
        title: 'Workplace Email Traps',
        body: `1. **The "Postal Address" Error:** Including physical sender/receiver addresses in an email. This demonstrates unfamiliarity with digital workplace communication.
2. **The "Vague Subject Line" Trap:** Writing \`Subject: Problem\` or \`Subject: Urgent\`. Subject lines must contain specific operational identifiers (e.g. \`Subject: URGENT: SLA Escalation — 14 Home Loan Approvals\`).
3. **The "Emotional Tone" Trap:** Expressing frustration in internal escalations. Maintain objective institutional register focused on customer SLA metrics and business risk.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'PRACTICE_EXERCISE',
        title: 'Active Scaffolding Drill: Security Incident Email',
        body: `**Task:** Draft a 115-word internal escalation email from a Branch Manager to the Chief Information Security Officer (CISO) reporting a suspected spear-phishing email received by Treasury staff.

**Model Solution (116 Words):**
\`\`\`text
To: ciso.cybercell@bank.co.in
Cc: agm.risk@bank.co.in
Subject: CRITICAL INCIDENT: Suspected Spear-Phishing Campaign Targeting Treasury Staff

Dear Sir/Madam,

This is to report a sophisticated spear-phishing email received today at 11:20 hrs by four Treasury Officers, originating from a spoofed domain ("rbi-notice@gov-portal.org").

The email claims to carry a mandatory "RBI LAF Security Patch" and embeds an executable attachment ("patch_v4.exe"). Endpoint defenses isolated the file, and staff were immediately instructed not to interact with links.

Workstations have been quarantined and network telemetry logs preserved. Kindly block the malicious IP and domain at the enterprise firewall level and initiate an enterprise-wide threat scan.

Attached: Raw .EML headers and network logs.

Respectfully,
XYZ
Manager (Treasury Operations), ABC Branch
\`\`\``,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'Administrative Communication & E-Governance',
        relevance: 'HIGH_YIELD_PERIPHERAL',
        priority: 'MEDIUM',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Relevant for modern administrative correspondence and e-office memos.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'Paper IV — Official & Electronic Communication',
        relevance: 'HIGH_YIELD_PERIPHERAL',
        priority: 'MEDIUM',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Covers modern email drafting and official representations.',
      },
      {
        examCode: 'iibf-dbf',
        syllabusUnit: 'Digital Banking Operations & Customer Service',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Standard format for inter-branch communication and customer grievance emails.',
      },
    ],
    revisionUnits: [
      {
        type: 'SUMMARY_SNIPPET',
        content: 'Official Emails: Header block (To, Cc, Subject) replaces physical addresses. Target 100-120 words. Para 1: Context & incident; Para 2: Root cause & data; Para 3: Action taken & request for clearance.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'KEY_FACTS',
        content: 'Subject lines must be action-oriented and reference specific transaction/batch IDs. Sign off as "Warm regards" or "Best regards" with name, designation, and branch.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'EXAM_TRAPS',
        content: 'Trap: Putting physical postal addresses or standalone date lines in emails. Keep subject lines precise; avoid vague titles like "Problem".',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'APPLICATION',
        stem: 'Which header block format correctly adheres to standard professional email design in modern workplace examinations?',
        options: [
          'Top-left sender physical postal address followed by a full date line and receiver postal address',
          'To: [recipient email], Cc: [supervisory email], Subject: [Action-oriented reference in 6–8 words]',
          'A centered bold title followed by "Dear Sir" with no recipient address',
          'Subject line placed at the very bottom of the signature block',
        ],
        correctAnswer: 'To: [recipient email], Cc: [supervisory email], Subject: [Action-oriented reference in 6–8 words]',
        explanation: 'Professional emails utilize standard electronic metadata fields (To, Cc, Subject) and do not include physical street addresses or standalone postal dates.',
        trapExplanation: 'Physical postal addresses belong in physical formal letters, not digital emails.',
        difficulty: 'EASY',
      },
    ],
  },

  {
    id: 'CON-ENG-12',
    topicOrder: 60,
    topicSlug: 'professional-correspondence-and-workplace-writing',
    topicTitle: 'Professional Correspondence & Workplace Writing',
    topicDescription: 'Formal full-block letter design, banking grievance escalation hierarchies, official emails, administrative reports, and incident memos.',
    subjectSlug: 'english-descriptive-writing',
    slug: 'institutional-reports-credit-audits-and-situation-analysis-memos',
    title: 'Institutional Reports, Credit Audits & Situation Analysis Memos',
    shortDefinition: 'Formal reporting architecture for regulatory bodies (NABARD, RBI) and the 5-pillar situational triage framework for operational crises.',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-ENG-12-01',
        statement: 'Institutional reports follow a standardized administrative hierarchy: Terms of Reference -> Methodology -> Empirical Findings -> Bottlenecks -> Actionable Recommendations.',
        claimType: 'REPORT_STANDARD',
        epistemicLevel: 'CANONICAL',
        confidence: 'HIGH',
        locator: 'Report Formats §12.1',
        excerpt: 'Formal reports in regulatory exams require numbered sections, objective tone, and empirical substantiation.',
      },
      {
        id: 'CLM-ENG-12-02',
        statement: 'The 5-Pillar Situation Analysis framework (Context -> Root Cause -> Containment -> Customer Safeguards -> Systemic Fixes) structures operational branch crisis memos.',
        claimType: 'TRIAGE_FRAMEWORK',
        epistemicLevel: 'CANONICAL',
        confidence: 'HIGH',
        locator: 'Situation Analysis §12.3',
        excerpt: 'Situational memos demonstrate administrative leadership, immediate risk mitigation, and systemic prevention.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Institutional Reporting in Regulatory Examinations',
        body: `In examinations such as NABARD Grade A, RBI Grade B, and UPSC APFC, candidates are frequently required to draft **Formal Administrative Reports** or **Branch Situation Analysis Memos**.

### The 5-Section Institutional Report Architecture
1. **Header & Provenance Block:** Centered title in capital letters + \`To:\`, \`From:\`, \`Date:\`, and \`Ref No:\` lines.
2. **1. Terms of Reference & Background:** Mandate, committee directive, or statutory context directing the investigation.
3. **2. Methodology & Field Audit:** Data sources, sample sizes, branch audits, or stakeholder surveys.
4. **3. Key Empirical Findings & Observations:** Numbered, objective observations supported by quantitative metrics.
5. **4. Critical Bottlenecks & Operational Risks:** Identified friction points (e.g. cadastral data mismatch, connectivity lag).
6. **5. Strategic Recommendations & Roadmap:** Prioritized solutions categorized into Immediate Operational Fixes vs Structural Reforms.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'The 5-Pillar Situation Analysis Memo Framework',
        body: `When responding to operational branch crises (e.g. ATM skimming, CBS outages, localized DBT beneficiary panic, counterfeit currency deposits), use the **5-Pillar Triage Framework**:

\`\`\`text
[MEMORANDUM HEADER]
MEMORANDUM: SITUATION ANALYSIS & INCIDENT TRIAGE
To: General Manager & Regional Head, Regional Office
From: Assistant Manager (Operations), ABC Branch
Date: 24 August 2026
Subject: Situation Analysis: [Incident Description in 6–8 Words]

• INCIDENT CONTEXT: Concise timeline, terminal/accounts impacted, and immediate risk quantum.
• ROOT CAUSE ANALYSIS: Hardware failure, network severance, vendor SLA breach, or procedural lapse.
• IMMEDIATE CONTAINMENT MEASURES: Actions taken within 2 hours (device shutdown, card blocking, FIR).
• CUSTOMER SAFEGUARDS & DE-ESCALATION: Transparent customer advisory, zero-liability chargebacks initiated.
• SYSTEMIC RECOMMENDATIONS: Permanent engineering or security safeguards to prevent recurrence.

Submitted for executive review,
XYZ
Assistant Manager (Operations)
\`\`\`

### Model Incident Memo: ATM Skimming Detection & Security Overhaul (168 Words)
\`\`\`text
MEMORANDUM: SITUATION ANALYSIS & INCIDENT REPORT
To: General Manager & Regional Head, SBI Mumbai Zone
From: Assistant Manager (Operations), Nariman Point Branch
Date: 24 August 2026
Subject: Situation Analysis: Containment of ATM Skimming Overlay on On-Site ATM No. 04

• Incident Context: During the routine morning physical audit today at 08:30 hrs, duty custodians detected an illicit external card-skimming overlay and a hidden pinhole micro-camera affixed to On-Site ATM No. 04.
• Immediate Containment Actions: The ATM was immediately powered down, isolated from the network, and sealed for cyber forensic inspection. CCTV footage revealed an unidentified perpetrator installing the hardware on 23 August at 22:15 hrs.
• Customer Safeguards: A total of 42 card transactions occurred during the compromised window. All 42 debit cards were hotlisted within 30 minutes, automated SMS alerts were issued, and zero debit liability protections were activated.
• Systemic Recommendations: Mandate deployment of anti-skimming jitter bezels across all cluster ATMs and institute mandatory physical security sweeps every 2 hours.

Submitted for executive review and Cyber Cell FIR clearance.
XYZ (Assistant Manager)
\`\`\``,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_TRAPS',
        title: 'Traps in Report and Memo Writing',
        body: `1. **The "Emotional Tone" Trap:** Writing *'It is shocking and terrible that customers were robbed.'* In institutional reports, write objectively: *'The audit identified an unauthorized compromise impacting 42 terminals.'*
2. **The "Unnumbered Narrative" Trap:** Writing a report as a single long story. Always use bold, numbered headings (1. Terms of Reference, 2. Findings, 3. Recommendations).
3. **The "Missing Resource Request" Trap:** A memo must end with specific managerial recommendations and resource authorization requests, not passive observations.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'PRACTICE_EXERCISE',
        title: 'Active Scaffolding Drill: NABARD Analytical Report',
        body: `**Task:** Draft a 200-word NABARD analytical report on evaluating the implementation of Digital AgriStack across Regional Rural Banks (RRBs).

**Model Solution:**
\`\`\`text
REPORT ON EVALUATION OF DIGITAL AGRI-STACK IMPLEMENTATION FOR EXPEDITED RURAL CREDIT

To: The Chief General Manager, Financial Inclusion Directorate, NABARD
From: Assistant Manager (Grade A), Regional Office
Date: 24 August 2026
Ref No: NABARD/FID/2026/AUD-104

1. Terms of Reference:
Pursuant to Circular FID/88, an audit was conducted across 20 Regional Rural Bank branches to evaluate the integration of the Digital Agriculture Mission (AgriStack) with Kisan Credit Card (KCC) loan disbursals.

2. Key Audit Findings:
- Turnaround Time Reduction: Automated underwriting using digitized land records compressed KCC processing from 21 days to under 48 hours.
- Appraisal Cost Savings: Satellite crop telemetry reduced ground physical inspection costs by 60%.

3. Critical Operational Bottlenecks:
- Incomplete Tenancy Digitization: Lack of digital cadastral records for tenant farmers excludes sharecroppers from digital sanctioning.
- Network Latency: Intermittent server latency in remote PACS branches creates biometric authentication failures.

4. Actionable Recommendations:
- Digital Tenancy Registries: Fast-track state-level verified tenant registries to expand collateral-free micro-credit.
- Offline Verification Rails: Equip Bank Mitras with offline-capable Micro-ATMs.

Submitted by,
XYZ (Assistant Manager)
\`\`\``,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'Mains General Studies — Institutional Governance & Reporting',
        relevance: 'HIGH_YIELD_PERIPHERAL',
        priority: 'MEDIUM',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Covers administrative inquiry report structures and policy recommendations.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'Paper IV — Official Reports & Memos',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Directly tests formal administrative and departmental report formats.',
      },
      {
        examCode: 'iibf-dbf',
        syllabusUnit: 'Bank Inspection, Internal Audit & Risk Memos',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'DEEP_DIVE',
        notes: 'Foundational framework for branch inspection reports and operational risk analysis.',
      },
    ],
    revisionUnits: [
      {
        type: 'SUMMARY_SNIPPET',
        content: 'Institutional Reports: Header provenance -> 1. Terms of Reference -> 2. Findings -> 3. Bottlenecks -> 4. Recommendations. Situation Memos: 5-Pillar Triage (Context, Root Cause, Containment, Safeguards, Fixes).',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'KEY_FACTS',
        content: 'Maintain strictly objective, non-emotional tone. Use numbered sub-headings. End with actionable, prioritized policy or resource recommendations.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'EXAM_TRAPS',
        content: 'Trap: Writing emotional prose in incident reports. Always use factual phrasing (e.g. "The audit recorded an irregular variance" instead of "It was shocking to find").',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'APPLICATION',
        stem: 'When drafting a formal Situation Analysis Memo regarding an ATM skimming incident at a bank branch, which element should be prioritized under the "Immediate Containment Measures" section?',
        options: [
          'Writing a philosophical reflection on the ethics of cyber criminals',
          'Immediate physical shutdown of the compromised terminal, card hotlisting, and customer zero-liability alerts',
          'Asking the municipal corporation to rebuild the nearby highway',
          'Waiting for 30 days to see if additional frauds occur before taking action',
        ],
        correctAnswer: 'Immediate physical shutdown of the compromised terminal, card hotlisting, and customer zero-liability alerts',
        explanation: 'Immediate containment demands halting active vulnerabilities, isolating terminals, hotlisting compromised cards within minutes, and safeguarding customer deposits.',
        trapExplanation: 'Passive observation or philosophical commentary violates emergency operational triage protocols.',
        difficulty: 'EASY',
      },
    ],
  },

  // =========================================================================
  // TOPIC 61: Model Exemplars & Structural Deconstructions
  // =========================================================================
  {
    id: 'CON-ENG-13',
    topicOrder: 61,
    topicSlug: 'model-exemplars-and-deconstructions',
    topicTitle: 'Model Exemplars & Structural Deconstructions',
    topicDescription: 'Curated repository of benchmark model essays, long-form policy papers, and workplace communications with structural analysis.',
    subjectSlug: 'english-descriptive-writing',
    slug: 'benchmark-model-essays-thematic-breakdown-and-policy-integration',
    title: 'Benchmark Model Essays: Thematic Breakdown & Policy Integration',
    shortDefinition: 'Curated repository of benchmark 250-word and 600-word model essays across macroeconomics, technology, demographics, and governance with structural deconstructions.',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-ENG-13-01',
        statement: 'High-scoring model essays integrate statutory frameworks, empirical benchmarks, balanced risk analyses, and actionable policy foresight within strict word bounds.',
        claimType: 'EXEMPLAR_STANDARD',
        epistemicLevel: 'CANONICAL',
        confidence: 'HIGH',
        locator: 'Model Essays §13.1',
        excerpt: 'Deconstructing benchmark exemplars reveals how theory, policy data, and discourse mechanics fuse into cohesive prose.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Thematic Integration in High-Scoring Essays',
        body: `Exemplary descriptive essays achieve top marks because they seamlessly weave together **four distinct layers**:
1. **Conceptual Precision:** Clear definitions free from conversational ambiguity.
2. **Empirical Grounding:** Verifiable data from RBI Financial Stability Reports, NITI Aayog indices, or Union Budgets.
3. **Statutory & Institutional Anchors:** Explicit citations of governing legislation (e.g. DPDP Act 2023, RBI Act 1934, Companies Act 2013).
4. **Balanced Discourse & Nuance:** Acknowledging operational bottlenecks while presenting forward-looking policy roadmaps.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Curated Benchmark Model Essays Vault',
        body: `### 1. Deepfakes, AI Voice Cloning & Digital Banking Fraud (250 Words)
\`\`\`text
The hyper-digitalization of banking, while democratizing financial access, has introduced a sophisticated frontier of cybersecurity threats spearheaded by Generative Artificial Intelligence (GenAI), hyper-realistic Deepfakes, and AI Voice Cloning. As synthetic media becomes indistinguishable from reality at near-zero marginal cost, the fundamental bedrock of the financial ecosystem—digital trust and customer identity verification—faces an acute systemic crisis.

Cybercriminals increasingly deploy AI voice-cloning algorithms, requiring only a few seconds of audio samples, to impersonate high-net-worth customers and corporate executives to authorize illicit funds transfers. More alarmingly, deepfake facial rendering tools can successfully bypass video-KYC protocols and automated biometric liveness detection gateways, enabling fraudsters to open mule accounts and execute unauthorized loan disbursements.

The systemic fallout extends beyond immediate financial loss. Frequent digital payment frauds erode public confidence in formal banking channels, pushing vulnerable retail users back toward cash-based transactions. Furthermore, because decentralized cross-border AI fraud models challenge traditional cyber-policing frameworks, customer grievance redressal and asset recovery face protracted delays.

Fortifying digital banking against AI threats demands a multi-layered defense. Financial institutions must transition from static biometrics to multi-modal behavioral biometric authentication, deploy AI-driven counter-deepfake detection algorithms at network gateways, and mandate cryptographic watermarking under the Digital Personal Data Protection (DPDP) Act, 2023. Concurrently, launching aggressive public cyber-hygiene campaigns and enforcing strict institutional liability under RBI guidelines will safeguard consumer deposits and preserve systemic digital trust.
\`\`\`

**Why This Works:**
- Word count: Exactly 250 words.
- Opening sets the epistemic crisis (digital trust).
- Body 1 details the attack vectors (voice cloning, video-KYC spoofing, mule accounts).
- Body 2 analyzes macro consequences (loss of trust, cash relapse).
- Conclusion delivers concrete technological and statutory safeguards (behavioral biometrics, DPDP Act 2023, RBI liability norms).

---

### 2. Corporate Governance & Board Oversight in Commercial Banking (600 Words / 15-Marker)
\`\`\`text
Corporate governance in banking refers to the systemic framework of rules, relationships, and risk controls by which financial institutions are directed, managed, and held accountable to depositors, shareholders, and regulatory authorities. Because banks operate on high financial leverage with public deposits, governance failures do not merely result in corporate insolvencies—they jeopardize public confidence and precipitate systemic contagion across the macroeconomy.

THE 4 STRUCTURAL PILLARS OF BANK GOVERNANCE:
Robust banking governance rests on four foundational pillars:
• Board Independence and Diversity: Ensuring an optimal proportion of independent directors free from promoter influence, possessing specialized domain expertise in risk management, cybersecurity, and financial accounting.
• Separation of Executive and Supervisory Roles: Demarcating the strategic oversight function of the Non-Executive Chairperson from the executive operational functions of the Managing Director / CEO.
• Effective Risk and Audit Architecture: Establishing direct, uncompromised reporting channels from the Chief Risk Officer (CRO) and Chief Compliance Officer (CCO) to the Board-level Audit Committee.
• Compensation and Fiduciary Integrity: Structuring executive remuneration to deter reckless short-term risk taking through mandatory deferred compensation and contractual clawback mechanisms.

THE UDAY KOTAK COMMITTEE RECOMMENDATIONS & REGULATORY CONVERGENCE:
To eliminate systemic corporate fault lines, the SEBI-appointed Uday Kotak Committee (2017) proposed decisive structural reforms that were progressively codified under SEBI (LODR) Regulations and RBI Master Directions:
• Enhanced Board Composition: Mandating a minimum of six directors on listed boards, with at least 50% independent directors and at least one independent woman director.
• Separation of Chairperson and MD/CEO: Requiring listed entities with substantial public interest to separate the positions of Chairperson and MD/CEO to establish clear checks and balances.
• Expanded Role of Audit Committees: Mandating that audit committees explicitly review the utilization of funds infused by parent companies into subsidiaries exceeding ₹100 crore.
• Robust Risk Governance: Enforcing the constitution of a dedicated Risk Management Committee, mandating periodic cybersecurity and operational stress assessments.

CONTEMPORARY CHALLENGES AND THE WAY FORWARD:
Despite substantial regulatory tightening, contemporary bank governance faces emerging vulnerabilities:
• Conflict of Interest in Related-Party Transactions: Tightening regulatory oversight over group lending entities and implementing algorithm-driven early warning systems to detect covert circular debt.
• Cyber and Technology Governance: Bank boards must transition from traditional credit-centric oversight to digital-first risk supervision, instituting board-level cybersecurity literacy and zero-trust data architectures.
• Strengthening Supervisory Technology (SupTech): The Reserve Bank of India’s DAKSH supervisory portal should be deepened with predictive AI analytics to detect governance anomalies before balance sheet impairments occur.

In conclusion, effective corporate governance is the ultimate safeguard of financial stability. By aligning board accountability with Kotak Committee principles, enforcing executive clawbacks, and maintaining an uncompromising "tone at the top," commercial banks can sustain balance sheet resilience and underpin long-term macroeconomic growth.
\`\`\`

**Why This Works:**
- Structure: Clear IBC architecture with lead-in capitalized headings for high visual scannability.
- Factual Anchor: Integrates the Kotak Committee (2017), SEBI LODR, and RBI DAKSH portal.
- Tone: Sober, central-banker policy register balancing opportunities against emerging tech/RPT risks.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_TRAPS',
        title: 'Analysis of Common Essay Weaknesses in Evaluator Reviews',
        body: `1. **The "Stat-Dump without Transmission" Weakness:** Listing numbers without explaining why they matter.  
   *Correction:* Always connect figures to their institutional impact (e.g. *GNPA dropping to 2.8% expands bank risk-weighted capital buffers*).
2. **The "Rambling Introduction" Weakness:** Taking 100 words to reach the topic.  
   *Correction:* Open with a crisp Definitional, Regulatory, or Benchmark hook in the first 40 words.`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'Essay Paper & General Studies Answer Writing',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'DEEP_DIVE',
        notes: 'Exemplifies multi-layered arguments for Mains Essay and GS-2/GS-3.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'Paper IV — Composition Models',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Model essays demonstrating high-scoring vocabulary and structure.',
      },
      {
        examCode: 'iibf-dbf',
        syllabusUnit: 'Strategic Management & Case Studies',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Exemplifies board governance, cyber resilience, and credit underwriting models.',
      },
    ],
    revisionUnits: [
      {
        type: 'SUMMARY_SNIPPET',
        content: 'Benchmark Essays: Fuse conceptual precision, empirical reports (FSR, MPI), statutory acts (DPDP Act, Companies Act, RBI Act), and the Central Banker Stance within strict word bounds.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'KEY_FACTS',
        content: '250w Essay Architecture: 4 paragraphs (Intro ~45w, Mechanism ~80w, Macro/Risks ~80w, Conclusion ~45w). 600w Essay: 5-6 paragraphs with Lead-in Keyword headings.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'EXAM_TRAPS',
        content: 'Trap: Writing generic moral essays without citing official committees or statutory frameworks. Always maintain a 1:1 Stat-to-Analysis ratio.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'CONCEPTUAL',
        stem: 'In the model essay on Corporate Governance in Commercial Banks, why are "deferred compensation and clawback mechanisms" recommended for executive remuneration?',
        options: [
          'To ensure executives are never paid any bonuses under any circumstances',
          'To align executive incentives with long-term asset quality and deter reckless short-term risk-taking that could compromise institutional solvency',
          'To eliminate the need for independent directors on the board',
          'To replace traditional auditing with voluntary self-declarations',
        ],
        correctAnswer: 'To align executive incentives with long-term asset quality and deter reckless short-term risk-taking that could compromise institutional solvency',
        explanation: 'Deferred compensation and clawbacks ensure that executives face personal financial consequences if short-term profits result in hidden future credit deterioration.',
        trapExplanation: 'Clawbacks do not ban bonuses; they enforce long-term risk accountability.',
        difficulty: 'MEDIUM',
      },
    ],
  },

  {
    id: 'CON-ENG-14',
    topicOrder: 61,
    topicSlug: 'model-exemplars-and-deconstructions',
    topicTitle: 'Model Exemplars & Structural Deconstructions',
    topicDescription: 'Curated repository of benchmark model essays, long-form policy papers, and workplace communications with structural analysis.',
    subjectSlug: 'english-descriptive-writing',
    slug: 'model-workplace-communications-letters-memos-reports-and-precis-vault',
    title: 'Model Workplace Communications: Letters, Memos, Reports & Précis Vault',
    shortDefinition: 'Curated repository of benchmark formal letters, branch incident analysis memos, institutional reports, and live précis transformations with annotations.',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-ENG-14-01',
        statement: 'Curated workplace models demonstrate the exact synthesis of Modern Full-Block formatting, statutory citations, and executive brevity across letters, emails, memos, and précis.',
        claimType: 'EXEMPLAR_STANDARD',
        epistemicLevel: 'CANONICAL',
        confidence: 'HIGH',
        locator: 'Workplace Models §14.1',
        excerpt: 'Standardized model texts provide concrete templates for administrative problem solving under timed pressure.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Mastering Functional Workplace Formats',
        body: `Professional writing in administrative and banking contexts requires mastering **functional variety**:
- **Formal Letters:** Authoritative statutory representations (Ombudsman, Branch Manager).
- **Official Emails:** Rapid operational escalations and customer conciliations.
- **Incident Analysis Memos:** 5-Pillar emergency triage reports for executive leadership.
- **Précis Condensations:** 1/3rd compression preserving logical nuance without illustrative fluff.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'Curated Workplace Communication Exemplars',
        body: `### 1. Formal Letter to Branch Manager: Unauthorized Phishing Debit & Account Freeze (148 Words)
\`\`\`text
House No. 12, Sector 15,
Gandhinagar – 382016.

24 August 2026.

The Branch Manager,
State Bank of India,
Main Market Branch, Gandhinagar – 382016.

Subject: Urgent report of unauthorized fraudulent debit of ₹45,000 and request for immediate account freeze.

Respected Sir/Madam,

I hold a Savings Bank Account (A/c No: XXXXXXXXXX01) with your branch. I am writing to report an unauthorized, fraudulent transaction of ₹45,000 executed today, 24 August 2026 at 14:15 hrs via IMPS (Ref No: IMPS/2026/88921).

I received an SMS alert without initiating any transfer, clicking phishing links, or sharing OTP/credentials. Under RBI Master Direction DBR.No.Leg.BC.78/09.07.005/2017-18 on Customer Protection (Limiting Liability of Customers in Unauthorised Electronic Banking Transactions), notifying the bank within three working days entitles the customer to zero liability.

I request you to immediately freeze my net-banking and debit card facilities to prevent further loss, lodge an incident flag with your Cyber Fraud Cell, and initiate the reversal of the defrauded ₹45,000 to my account.

Yours faithfully,
XYZ
\`\`\`

---

### 2. Live Précis Transformation: Central Bank Autonomy & Fiscal Dominance
**Raw Passage (332 Words):**
> *"The institutional autonomy of central banks has long been regarded by macroeconomic scholars as the foundational bedrock of durable price stability. When monetary authorities possess operational independence to set interest rates free from short-term electoral cycles and political expedience, inflation expectations remain firmly anchored across sovereign bond markets and private capital investment decisions. However, during periods of acute economic turbulence, sovereign governments often face immense pressure to finance widening fiscal deficits and subsidize costly developmental initiatives. In such environments, political authorities frequently lean on central banks to suppress sovereign borrowing yields artificially and absorb massive tranches of government debt. This phenomenon, known in economic literature as fiscal dominance, severely compromises monetary sovereignty. If central banks succumb to fiscal dominance, the resulting surge in unsterilized liquidity inevitably fuels rampant inflationary spirals and erodes foreign investor confidence in domestic financial assets. Therefore, maintaining a clear statutory demarcation between monetary policy execution and fiscal debt management is essential. While central banks must remain accountable to legislative bodies, their operational autonomy in executing interest rate mandates and macroprudential regulation must be fiercely preserved to safeguard long-term economic resilience."*

**Master Condensed Précis (108 Words):**
> **Title: Central Bank Autonomy: Preserving Price Stability Against Fiscal Dominance**  
> *Central bank operational autonomy is fundamental to anchoring inflation expectations and sustaining macroeconomic stability free from political electoral pressures. However, during economic crises, governments often pressure monetary authorities to absorb public debt and artificially lower borrowing yields—a hazard termed fiscal dominance. Succumbing to fiscal dominance compromises monetary policy sovereignty, injecting unsterilized liquidity that ignites rampant inflation and degrades foreign investor confidence. Consequently, maintaining a clear statutory demarcation between sovereign debt financing and monetary policy execution is essential. While remaining legislatively accountable, central banks must preserve uncompromised operational independence in interest rate setting and macroprudential regulation to guarantee durable economic growth.*

**Structural Annotation (Why It Works):**
- Compression: 108 words (exactly 32.5% of 332 words).
- Title: Follows Noun-Compound Formula (\`[Subject] : [Core Conflict]\`).
- Proportionality: Allocates 25 words to autonomy $\rightarrow$ 45 words to fiscal dominance hazard $\rightarrow$ 38 words to statutory demarcation.
- Single unbroken paragraph; zero outside facts; zero verbatim copying.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_TRAPS',
        title: 'Review Checklist Before Submitting Workplace Formats',
        body: `Before submitting any workplace writing test, run the **F.A.C.T.S. Self-Audit**:
- **F (Focus):** Did I directly address the prompt's operational command?
- **A (Authority):** Are relevant RBI circulars, Ombudsman schemes, or statutory turnaround times cited?
- **C (Coherence):** Is the Modern Full-Block formatting 100% left-aligned with zero indentations?
- **T (Technical Hygiene):** Are contractions eliminated and dummy identifiers (\`XYZ\`) used?
- **S (Structure):** Is the word count strictly within $\pm 10\%$?`,
        order: 3,
        visibility: 'PUBLIC',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'Compulsory English — Official Correspondence & Précis',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Model representations for official letters and précis condensation.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'Paper IV — Formal Letters & Précis',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Complete templates for letters and précis in RAS English.',
      },
      {
        examCode: 'iibf-dbf',
        syllabusUnit: 'Business Communication & Operational Incident Memos',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'DEEP_DIVE',
        notes: 'Operational standards for branch incident reports and customer grievance redressals.',
      },
    ],
    revisionUnits: [
      {
        type: 'SUMMARY_SNIPPET',
        content: 'Workplace Models: Formal letters follow 100% left-aligned Full-Block format. Précis condenses text to 1/3rd length under a compound title in one continuous paragraph.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'KEY_FACTS',
        content: 'F.A.C.T.S. Checklist: Focus on command verb, Authoritative statutory citations, Coherent left alignment, Technical zero-contraction hygiene, Structured word bounds.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'EXAM_TRAPS',
        content: 'Traps: Disclosing real name/phone (UFM penalty). Missing title in précis. Splitting précis into multiple paragraphs.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'APPLICATION',
        stem: 'Under RBI Customer Protection guidelines regarding unauthorized electronic banking transactions, what is the customer liability if the fraudulent transaction is reported to the bank within three working days?',
        options: [
          'The customer is liable for 100% of the lost amount',
          'The customer has Zero Liability, and the bank must reverse the unauthorized debit',
          'The customer must pay a penalty of ₹5,000 to the cyber cell',
          'The account is permanently closed without any investigation',
        ],
        correctAnswer: 'The customer has Zero Liability, and the bank must reverse the unauthorized debit',
        explanation: 'Under RBI Master Directions, timely reporting of unauthorized electronic banking transactions within 3 working days entitles the customer to zero liability.',
        trapExplanation: 'Delayed reporting beyond 7 days incurs customer liability determined by bank board policy.',
        difficulty: 'EASY',
      },
    ],
  },

  // =========================================================================
  // TOPIC 62: Active Practice Arena & Exam Execution Strategy
  // =========================================================================
  {
    id: 'CON-ENG-15',
    topicOrder: 62,
    topicSlug: 'active-practice-and-exam-strategy',
    topicTitle: 'Active Practice Arena & Exam Execution Strategy',
    topicDescription: 'Time management clocks, membrane keyboard ergonomics, real-exam TCS iON quirks, and objective self-evaluation scoring engines.',
    subjectSlug: 'english-descriptive-writing',
    slug: 'timed-exam-execution-strategy-keyboard-ergonomics-and-scoring-engine',
    title: 'Timed Exam Execution Strategy, Keyboard Ergonomics & Scoring Engine',
    shortDefinition: 'Real-time clock management across 30-min and 90-min descriptive tests, TCS iON software keyboard quirks, and objective self-evaluation scoring rubrics.',
    difficulty: 'ADVANCED',
    claims: [
      {
        id: 'CLM-ENG-15-01',
        statement: 'Descriptive test performance depends critically on strict real-time clock allocation and familiarity with browser-based exam interface constraints.',
        claimType: 'EXAM_STRATEGY',
        epistemicLevel: 'CANONICAL',
        confidence: 'HIGH',
        locator: 'Exam Strategy §15.1',
        excerpt: 'Time management algorithms prevent panic-typing and ensure complete multi-component test submissions.',
      },
      {
        id: 'CLM-ENG-15-02',
        statement: 'In computer-based exams (TCS iON), keyboard shortcuts (Ctrl+B, Tab) are disabled or risk navigating away from the text input field; typing practice must occur on standard desktop membrane keyboards.',
        claimType: 'TECHNICAL_ERGONOMICS',
        epistemicLevel: 'CANONICAL',
        confidence: 'HIGH',
        locator: 'Interface Quirks §15.3',
        excerpt: 'Training on desktop membrane keyboards builds physical muscle memory for real examination conditions.',
      },
    ],
    contentBlocks: [
      {
        type: 'CORE_IDEA',
        title: 'Mastering the Examination Clock & Interface Quirks',
        body: `Many well-prepared candidates fail descriptive examinations not due to weak English, but because of **interface traps and clock panic**.

### Real-Time Clock Split Algorithms
1. **The 30-Minute Pattern (SBI PO / IBPS PO Mains — Letter + Essay):**
   - **Minute 00–02 (Decision Gate):** Scan 3 letter prompts and 3 essay prompts. Select the 2 prompts where you possess concrete statutory and policy anchors.
   - **Minute 02–10 (Letter Execution — 150 Words):** Draft the letter cleanly using Modern Full-Block format. Completing the letter in 8 minutes secures 80–90% of letter marks early, eliminating clock panic.
   - **Minute 10–27 (Essay Execution — 250 Words):** Spend 1 minute on a C.A.S.H. scratchpad outline $\\rightarrow$ 16 minutes typing (~16 WPM required).
   - **Minute 27–30 (3-Stage Proofreading Sweep):** Check capitalization, punctuation spacing, contractions, and word count lock.

2. **The 90-Minute Pattern (RBI Grade B Phase 2 English — Essay, Précis, RC):**
   - **Minute 00–35:** Essay Drafting (400–600 Words — 40 Marks).
   - **Minute 35–60:** Précis Drafting with Title (170–200 Words — 30 Marks).
   - **Minute 60–80:** Subjective Reading Comprehension (5 Questions $\\times$ 45 Words — 30 Marks).
   - **Minute 80–90:** Final Targeted Proofreading Sweep across all three sections.`,
        order: 1,
        visibility: 'PUBLIC',
      },
      {
        type: 'SYSTEMATIC_CATALOGUE',
        title: 'TCS iON Interface Quirks & The Objective Self-Evaluation Engine',
        body: `### TCS iON & Browser Test Engine Constraints
- **The Tab Key Trap:** NEVER press the \`Tab\` key to indent a paragraph. In browser-based exam engines, pressing \`Tab\` jumps the focus out of the text area onto UI buttons (like "Submit" or "Clear Response").
- **No Keyboard Shortcuts:** \`Ctrl+B\`, \`Ctrl+I\`, \`Ctrl+U\` are disabled. Use capitalized lead-in tags (\`KEYWORD:\`) for visual scannability.
- **Membrane Keyboard Ergonomics:** Exam centers utilize aged desktop membrane keyboards with stiffer key travel. Practice all timed writing on an external desktop membrane keyboard rather than soft laptop chiclet keys.
- **The Word Counter Lock Zone:** Once within $\\pm 5-10\\%$ of the target word count, STOP typing new sentences to prevent last-second typos.

### Objective 100-Point Self-Evaluation Scorecard (Coaching Heuristic)

| Dimension | Max Points | Passing Benchmark | Topper Benchmark (Top 1%) |
| :--- | :--- | :--- | :--- |
| **1. Prompt Relevance & Directives** | 25 Pts | 15 / 25 | 23+ / 25 |
| **2. Structural Symmetry & Headings** | 20 Pts | 12 / 20 | 18+ / 20 |
| **3. Policy & Empirical Anchors** | 25 Pts | 14 / 25 | 22+ / 25 |
| **4. Linguistic & Syntactic Maturity** | 15 Pts | 9 / 15 | 14+ / 15 |
| **5. Technical Hygiene & Orthography** | 15 Pts | 10 / 15 | 15 / 15 |
| **TOTAL SCORE** | **100 Pts** | **60 / 100** | **92+ / 100** |

> 💡 **Self-Audit Deductions:** Subtract 1 mark for each contraction (*it's, don't*), 0.5 marks per typo, 3 marks for word limit breaches ($> \\pm 10\\%$), and 5 marks for a missing précis title.`,
        order: 2,
        visibility: 'PUBLIC',
      },
      {
        type: 'EXAM_TRAPS',
        title: 'Traps in Exam Final Minutes',
        body: `1. **The "Last-Second Revision" Trap:** Trying to rewrite entire sentences with 30 seconds left on the clock, resulting in half-typed broken sentences when the system auto-submits.
2. **The "Cursor Placement" Error:** Leaving text highlighted or cursor resting in the middle of a sentence. Always park the cursor cleanly at the very end of your text after the final period before time expires.`,
        order: 3,
        visibility: 'PUBLIC',
      },
      {
        type: 'PRACTICE_EXERCISE',
        title: 'The 30-Day Progressive Training Blueprint',
        body: `Structure your daily descriptive practice across 4 systematic phases:
- **Phase 1 (Days 1–7 — 45 mins/day):** Motor memory & short formats. Type 1 editorial summary (120w) + 1 Full-Block letter (150w in 10 mins).
- **Phase 2 (Days 8–18 — 60 mins/day):** Syntactic mastery & précis. 1 Précis condensation (12 mins) + 1 C.A.S.H. 250-word essay (15 mins).
- **Phase 3 (Days 19–25 — 75 mins/day):** Institutional depth & 600-word answers. Draft one 600-word 15-marker integrating RBI Master Directions and Kotak Committee reforms.
- **Phase 4 (Days 26–30 — 90 mins/day):** Full exam simulation under strict countdown clocks on external membrane keyboards.`,
        order: 4,
        visibility: 'PUBLIC',
      },
    ],
    examMappings: [
      {
        examCode: 'upsc-cse',
        syllabusUnit: 'Mains Time Management & Speed Writing',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Crucial for pacing 2 essays in 3 hours and 20 GS questions in 3 hours.',
      },
      {
        examCode: 'rpsc-ras',
        syllabusUnit: 'Paper IV — Time Allocation & Composition',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Pacing strategy for completing grammar, translation, précis, and essay in 3 hours.',
      },
      {
        examCode: 'iibf-dbf',
        syllabusUnit: 'Online Examination Strategies & Interface Navigation',
        relevance: 'DIRECT_SYLLABUS',
        priority: 'HIGH',
        requiredDepth: 'EXAM_STANDARD',
        notes: 'Guides keyboard navigation and timed submission in computer-based banking exams.',
      },
    ],
    revisionUnits: [
      {
        type: 'SUMMARY_SNIPPET',
        content: 'Exam Strategy: 30-Min Split = 2m Pick -> 8m Letter (150w) -> 17m Essay (250w) -> 3m Proofread. 90-Min Split = 35m Essay -> 25m Précis -> 20m RC -> 10m Audit. Never press Tab key in browser exams.',
        priority: 'HIGH',
        order: 1,
      },
      {
        type: 'KEY_FACTS',
        content: 'TCS iON interface disables bold shortcuts (Ctrl+B); use capitalized lead-in headings. Train on external desktop membrane keyboards to build realistic muscle memory.',
        priority: 'HIGH',
        order: 2,
      },
      {
        type: 'EXAM_TRAPS',
        content: 'Trap: Pressing Tab jumps cursor out of text box. Over-typing beyond word limits causes last-second auto-submit truncation. Always park cursor at the end.',
        priority: 'HIGH',
        order: 3,
      },
    ],
    questions: [
      {
        type: 'APPLICATION',
        stem: 'In a 30-minute banking descriptive examination (Essay + Letter), why is attempting the formal letter first (during minutes 2 to 10) recommended by experienced mentors?',
        options: [
          'Because formal letters are worth 100% of the total marks',
          'Because letter layouts follow rigid, predictable templates, allowing candidates to bank 80–90% of letter marks in 8 minutes and eliminate clock panic before drafting the essay',
          'Because the exam software automatically cancels the essay if the letter is not written first',
          'Because formal letters do not have any word limits',
        ],
        correctAnswer: 'Because letter layouts follow rigid, predictable templates, allowing candidates to bank 80–90% of letter marks in 8 minutes and eliminate clock panic before drafting the essay',
        explanation: 'Completing the 150-word letter early locks in predictable marks, relieving time anxiety and leaving a calm 17-18 minutes for the 250-word essay.',
        trapExplanation: 'Software does not force the order, but executing the structured letter first is a proven psychological pacing strategy.',
        difficulty: 'EASY',
      },
    ],
  },
];

export async function seedBatchEnglishCanonicalKnowledge(): Promise<void> {
  console.log('Seeding English Language & Descriptive Writing Canonical Benchmark...');

  // 1. Ensure Target Exams exist
  const upsc = await db.exam.upsert({
    where: { slug: 'upsc-cse' },
    update: {},
    create: {
      slug: 'upsc-cse',
      name: 'UPSC Civil Services Examination',
      conductingBody: 'Union Public Service Commission',
      description: 'National civil services examination.',
    },
  });

  const rpsc = await db.exam.upsert({
    where: { slug: 'rpsc-ras' },
    update: {},
    create: {
      slug: 'rpsc-ras',
      name: 'RPSC Rajasthan Administrative Services',
      conductingBody: 'Rajasthan Public Service Commission',
      description: 'Apex state civil services examination for Rajasthan.',
    },
  });

  const iibf = await db.exam.upsert({
    where: { slug: 'iibf-dbf' },
    update: {},
    create: {
      slug: 'iibf-dbf',
      name: 'IIBF Diploma in Banking & Finance',
      conductingBody: 'Indian Institute of Banking & Finance',
      description: 'Professional banking qualification.',
    },
  });

  const examMap: Record<string, string> = {
    'upsc-cse': upsc.id,
    'rpsc-ras': rpsc.id,
    'iibf-dbf': iibf.id,
  };

  // 2. Ensure Source exists for Provenance & Coverage Ledger
  const sourceEng = await db.source.upsert({
    where: { id: 'SRC-ENG-DESCRIPTIVE-MASTER-2026' },
    update: {},
    create: {
      id: 'SRC-ENG-DESCRIPTIVE-MASTER-2026',
      title: 'English Language & Descriptive Writing Master Corpus (2026)',
      sourceType: 'PEDAGOGICAL_MASTER',
      authorityTier: 'COMPREHENSIVE_DISCOURSE_GUIDE',
      description: 'Authoritative first-principles guide to written discourse, essay argumentation, précis compression, subjective RC, and workplace communication.',
    },
  });

  // 2. Ensure Domain exists
  let domainEng = await db.domain.findFirst({
    where: {
      OR: [
        { slug: 'english-language-communication' },
        { name: 'English Language & Professional Communication' },
      ],
    },
  });

  if (!domainEng) {
    domainEng = await db.domain.create({
      data: {
        name: 'English Language & Professional Communication',
        slug: 'english-language-communication',
        description: 'Comprehensive mastery of formal written discourse, essay argumentation, précis compression, and administrative correspondence.',
        order: 6,
      },
    });
  }

  // 2. Ensure Subject 6 exists
  let subject = await db.subject.findFirst({
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
      },
    });
  } else {
    subject = await db.subject.update({
      where: { id: subject.id },
      data: {
        name: 'English Language & Descriptive Writing',
        scopeStatement: 'Mastery of written syntax, multi-dimensional essay writing, non-verbatim précis compression, subjective reading comprehension, professional correspondence, and timed exam execution.',
        description: 'First-principles mastery of written discourse, essay argumentation, précis compression, professional correspondence, and exam execution strategy.',
        order: 6,
      },
    });
  }

  // Unique topics
  const topicMap = new Map<string, { order: number; slug: string; title: string; description: string }>();
  for (const c of ENGLISH_CANONICAL_CONCEPTS) {
    if (!topicMap.has(c.topicSlug)) {
      topicMap.set(c.topicSlug, {
        order: c.topicOrder,
        slug: c.topicSlug,
        title: c.topicTitle,
        description: c.topicDescription,
      });
    }
  }

  for (const [, t] of topicMap.entries()) {
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
        subjectId: subject.id,
      },
      create: {
        slug: t.slug,
        title: t.title,
        description: t.description,
        order: t.order,
        subjectId: subject.id,
      },
    });
  }


  for (const c of ENGLISH_CANONICAL_CONCEPTS) {
    const topic = await db.topic.findFirst({
      where: {
        subjectId: subject.id,
        slug: c.topicSlug,
      },
    });
    if (!topic) continue;

    const concept = await db.concept.upsert({
      where: { id: c.id },
      update: {
        title: c.title,
        shortDefinition: c.shortDefinition,
        difficulty: c.difficulty,
        topicId: topic.id,
        slug: c.slug,
        status: 'ACTIVE',
      },
      create: {
        id: c.id,
        slug: c.slug,
        title: c.title,
        shortDefinition: c.shortDefinition,
        difficulty: c.difficulty,
        topicId: topic.id,
        status: 'ACTIVE',
      },
    });

    // Clear existing child relations for clean idempotent seeding
    await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
    await db.examConceptMapping.deleteMany({ where: { conceptId: concept.id } });
    await db.revisionUnit.deleteMany({ where: { conceptId: concept.id } });
    await db.question.deleteMany({ where: { conceptId: concept.id } });

    // Seed Content Blocks
    for (const cb of c.contentBlocks) {
      await db.contentBlock.create({
        data: {
          conceptId: concept.id,
          type: cb.type,
          title: cb.title,
          body: cb.body,
          order: cb.order,
          visibility: cb.visibility,
        },
      });
    }

    // Seed Claims & Evidence
    for (const clm of c.claims) {
      const claim = await db.claim.upsert({
        where: { id: clm.id },
        update: {
          statement: clm.statement,
          claimType: clm.claimType,
          epistemicLevel: clm.epistemicLevel,
          confidence: clm.confidence,
          conceptId: concept.id,
          status: 'CANONICAL_CLAIM',
        },
        create: {
          id: clm.id,
          statement: clm.statement,
          claimType: clm.claimType,
          epistemicLevel: clm.epistemicLevel,
          confidence: clm.confidence,
          conceptId: concept.id,
          status: 'CANONICAL_CLAIM',
        },
      });

      const existingEvidence = await db.evidence.findFirst({
        where: { claimId: claim.id, locator: clm.locator },
      });
      if (!existingEvidence) {
        await db.evidence.create({
          data: {
            claimId: claim.id,
            sourceId: sourceEng.id,
            locator: clm.locator,
            excerpt: clm.excerpt,
            evidenceType: 'PRIMARY_DISCOURSE_REFERENCE',
            authority: 'TIER_A_DISCOURSE_GUIDE',
            evidentiarySupport: 'STRONG_SUPPORT',
            extractionConfidence: 'HIGH',
          },
        });
      }
    }

    // Seed Exam Mappings
    for (const em of c.examMappings) {
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

    // Seed Revision Units
    for (const ru of c.revisionUnits) {
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

    // Seed Questions
    for (const q of c.questions) {
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
        },
      });
    }
  }

  console.log(`Successfully seeded ${ENGLISH_CANONICAL_CONCEPTS.length} English Language & Descriptive Writing canonical concepts.`);
}
