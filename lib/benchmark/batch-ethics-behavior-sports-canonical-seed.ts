/**
 * Mind of Aravalli / Reading Hub: Administrative Ethics, Behavior, Sports & Yoga Master Canonical Seed
 *
 * Concepts CON-ETH-001 to CON-ETH-011, CON-BEH-001 to CON-BEH-004, CON-SPO-001 to CON-SPO-003
 * Covering RPSC RAS Mains Paper II (105 Marks):
 * - Unit 1: Administrative Ethics (65 Marks)
 * - Unit 3: Administrative Behavior (20 Marks)
 * - Unit 3: Sports & Yoga (20 Marks)
 */

import { db } from '../db/client';
import { MasterPubAdConceptDefinition } from './batch-pubad-part1';

export const ETHICS_BEHAVIOR_SPORTS_CONCEPTS: MasterPubAdConceptDefinition[] = [
  {
    "id": "CON-ETH-001",
    "order": 1,
    "slug": "ethics-and-human-interface-essence-determinants-consequences",
    "title": "Ethics and Human Interface: Essence, Determinants, Consequences & Dimensions of Ethics",
    "shortDefinition": "The philosophical inquiry into human conduct, normative determinants (law, conscience, religion, society), deontological vs teleological consequences, and multidimensional ethical spheres (private, public, environmental, bioethics).",
    "difficulty": "INTERMEDIATE",
    "topicSlug": "administrative-ethics",
    "topicTitle": "Administrative Ethics & Moral Philosophy",
    "topicOrder": 1,
    "topicDescription": "Ethics in public administration, human values, moral thinkers, civil service values, dilemmas, and probity in governance.",
    "subjectSlug": "ethics-behavior-sports",
    "claims": [
      {
        "id": "CLM-ETH-001-1",
        "statement": "Ethics represents a normative science evaluating voluntary human actions (actions involving knowledge and free will) against standards of rightness and goodness, distinct from involuntary human acts.",
        "claimType": "ETHICAL_PRINCIPLE",
        "epistemicLevel": "AXIOM",
        "confidence": "VERY_HIGH",
        "locator": "William Lillie, 'An Introduction to Ethics' (1948), Chapter 1: The Nature and Scope of Ethics, pp. 1-14; Peter Singer, 'Practical Ethics' (Cambridge, 2011), pp. 1-15",
        "excerpt": "Ethics is the normative science of the conduct of human beings living in societies—a science which judges this conduct to be right or wrong, to be good or bad. Conduct is collective voluntary action."
      },
      {
        "id": "CLM-ETH-001-2",
        "statement": "The determinants of ethics in human actions operate at individual (conscience, intuition), societal (cultural ethos, customs), and institutional levels (constitutional morality, statutory codifications).",
        "claimType": "SOCIO_ETHICAL_FRAMEWORK",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "VERY_HIGH",
        "locator": "Second Administrative Reforms Commission (2nd ARC), 4th Report: 'Ethics in Governance' (2007), Chapter 1 & 2, pp. 13-25",
        "excerpt": "Ethics is a set of standards that society places on itself and which helps guide behaviour, choices and actions. The determinants arise from cultural traditions, religious philosophies, and above all, constitutional values."
      },
      {
        "id": "CLM-ETH-001-3",
        "statement": "Ethical consequences are evaluated through the dual philosophical traditions of Teleology/Consequentialism (Bentham/Mill's utility) and Deontology (Kant's categorical imperative of duty for duty's sake).",
        "claimType": "NORMATIVE_THEORY",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "VERY_HIGH",
        "locator": "Immanuel Kant, 'Groundwork of the Metaphysics of Morals' (1785); John Stuart Mill, 'Utilitarianism' (1861), Chapter 2",
        "excerpt": "Act only according to that maxim whereby you can at the same time will that it should become a universal law. Utilitarianism holds that actions are right in proportion as they tend to promote happiness."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Ethical Dilemma of the Civil Servant: Real-World Public Dilemmas",
        "body": "A Sub-Divisional Officer (SDO) in rural Rajasthan faces an anti-encroachment order from the High Court on village common pasture (*Charagah*) land. The encroachers are 40 landless nomadic families who have resided there for decades with school-going children during peak winter. Strict legal compliance demands immediate bulldozing (formalist rule of law); humanitarian empathy demands rehabilitation prior to eviction (substantive justice). Ethics in administration is not mere cerebral contemplation—it is the normative navigation between strict procedural legality (*Law*) and substantive moral justice (*Conscience*).",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Determinants, Dimensions, and Consequences Matrix",
        "body": "### 1. Determinants of Ethics in Administration\n\n| Level | Primary Determinant | Administrative Manifestation |\n| :--- | :--- | :--- |\n| **Individual** | Moral Conscience & Free Will | Whistleblowing against corrupt tenders; refusal to sign illegal directives |\n| **Social / Cultural** | Community Ethos & Tradition | Respect for local customary sensitivities while eliminating regressive dogmas (*Nata Pratha*, child marriage) |\n| **Legal / Statutory** | Conduct Rules & Penal Codes | Rajasthan Civil Services (Conduct) Rules 1971; Prevention of Corruption Act 1988 |\n| **Constitutional** | Fundamental Rights & DPSP | Preamble values: Justice, Liberty, Equality, Fraternity; Article 14 substantive equality |\n\n---\n\n### 2. Normative Consequences: Deontology vs. Consequentialism\n\n| Dimension | Deontological Ethics (Kant / Duty) | Consequentialist / Teleological Ethics (Mill) |\n| :--- | :--- | :--- |\n| **Core Axiom** | Duty for duty's sake (*Categorical Imperative*) | Greatest happiness of the greatest number |\n| **Focus** | Moral purity of the Action / Means | Desirability of the Outcome / End |\n| **Public Service Risk** | Bureaucratic rigidity and red-tapism ignoring humanitarian suffering | Justifying human rights violations of vulnerable minorities for 'majority welfare' |\n| **Administrative Synthesis** | **Gandhian Sarvodaya / Nishkama Karma**: Pure means driving egalitarian and compassionate welfare ends |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "The Ethical Decision-Making Pipeline in Public Administration",
        "body": "When confronted with a moral dilemma, a public administrator must execute the following 5-stage ethical filter:\n\n```\n1. FACTUAL AUDIT\n   Identify all legal parameters, stakeholders, and immediate risks.\n         ↓\n2. LEGAL-CONSTITUTIONAL SCREENING\n   Does the action violate the Constitution, statutes, or service rules? (If yes, halt).\n         ↓\n3. UTILITARIAN COST-BENEFIT EVALUATION\n   Who benefits? Who suffers? Does it protect the most vulnerable (*Antyodaya*)?\n         ↓\n4. DEONTOLOGICAL UNIVERSALIZABILITY TEST\n   Would I be willing for every officer in the state to make this exact decision publicly?\n         ↓\n5. PUBLIC JUSTIFIABILITY & TRANSPARENCY (The 'Front Page Test')\n   Can this decision withstand public scrutiny under RTI and judicial review?\n```",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC RAS Mains Paper II Unit 1 — Examiner Traps & Score Strategy",
        "body": "### Key Examiner Traps:\n1. **Confusing 'Law' with 'Ethics'**:\n   - *Trap*: Candidates often write that following the law is identical to ethical behavior.\n   - *Correction*: Law represents the minimum codified morality of a society, backed by state coercion. Ethics is much broader—an action can be legally permissible yet morally reprehensible (e.g., rejecting an illiterate widow's ration card for lack of biometric match without manual exception verification).\n\n2. **Neglecting the Distinction between 'Voluntary Actions' and 'Acts of Man'**:\n   - In 2-marker questions, define human conduct strictly as voluntary action possessing *Knowledge* (*Jnana*) and *Volition / Free Will* (*Ichha*). Involuntary reflexes or actions performed under absolute physical duress do not carry moral accountability.",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Paper II Unit 1: Administrative Ethics - Ethics and Human Interface",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Core foundational concept for 2-mark definitions, 5-mark conceptual distinctions, and 10-mark case analyses."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "GS-IV: Ethics, Integrity and Aptitude",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Direct syllabus match for Section A theory and Section B case studies."
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "GS Paper IV: Ethics and Human Interface",
        "relevance": "HIGH",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Standard 8-marker and 12-marker descriptive questions."
      },
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "General Studies Paper II: Administrative Ethics",
        "relevance": "MEDIUM",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "General governance and public administration ethics."
      },
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Paper IV: Philosophy, Psychology and Public Administration",
        "relevance": "HIGH",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Focus on Western vs Indian philosophical determinants."
      },
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Judicial Ethics & Professional Conduct",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Natural justice, judicial impartiality, conflict of interest."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Governance & Industrial Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Corporate governance, labor ethics, public probity."
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "Descriptive Ethics & Banking Governance",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Business ethics and fiduciary responsibility."
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Ethics = Normative science of voluntary human conduct. Determinants: Law, Conscience, Culture, Constitution. Consequences: Deontology (Kant: Duty/Means) vs Teleology (Bentham/Mill: Utility/End). Formula: Legal minimum + Moral maximum = Public trust.",
        "priority": "P1",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "• Ethics evaluates voluntary actions with knowledge and freedom of will.\n• Determinants: Individual conscience, societal norms, statutory codes, constitutional values.\n• Teleology judges rightness by consequences (Greatest good for greatest number).\n• Deontology judges actions by adherence to moral duty (Categorical imperative).\n• Public administration requires balancing rule-bound duty with empathetic welfare.",
        "priority": "P1",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Comprehensive Ethical Framework:\n1. Scope: Human acts (voluntary) vs Acts of man (involuntary).\n2. Determinants Hierarchy: Constitution (Supreme) > Statutes > Organizational rules > Social customs > Subjective conscience.\n3. Ethical Dilemma Resolution: Identify conflict -> Apply legal filter -> Evaluate consequences for marginalized (*Antyodaya*) -> Verify Kantian universalizability -> Ensure transparency (RTI compliance).",
        "priority": "P2",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "Which of the following actions represents a strictly 'Human Act' (Actus Humanus) subject to ethical evaluation, rather than merely an 'Act of Man' (Actus Hominis)?",
        "options": [
          "Digestion of food inside the human alimentary canal",
          "A reflex blink of an eye upon sudden exposure to intense light",
          "An administrative officer refusing an illegal bribe from a liquor contractor",
          "A sleepwalker unintentionally knocking over an expensive vase during slumber"
        ],
        "correctAnswer": "An administrative officer refusing an illegal bribe from a liquor contractor",
        "explanation": "Ethics evaluates only 'Human Acts' (Actus Humanus)—actions performed with deliberate knowledge, consciousness, and free will. Biological reflexes, unconscious physical movements, and actions under absolute physical compulsion are 'Acts of Man' (Actus Hominis) devoid of moral culpability.",
        "trapExplanation": "Candidates confuse involuntary biological behaviors with moral acts; only actions governed by intellect and volition belong to ethical assessment.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "modelAnswer": "An administrative officer refusing an illegal bribe from a liquor contractor"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Differentiate between Deontological and Teleological approaches to ethics. How can a public administrator reconcile both while implementing welfare schemes? (Word limit: 50 words)",
        "options": [],
        "correctAnswer": "Deontology (Kant) prioritizes the moral duty and purity of means regardless of consequences. Teleology (Utilitarianism) judges rightness purely by outcomes (greatest happiness). An administrator reconciles them by upholding procedural integrity and rule of law (means) while actively utilizing statutory discretion to deliver maximum social justice and welfare to the marginalized (ends).",
        "explanation": "**Deontology vs Teleology in Public Administration:**\n1. **Theoretical Contrast:** Deontology demands strict obedience to universal moral rules without compromising means. Teleology focuses on maximizing utility, risking minority rights for aggregate gain.\n2. **Administrative Reconciliation:** The civil servant must reject corrupt shortcuts (adhering to Deontological integrity) while proactively applying administrative discretion and citizen-centric policies to achieve maximum socio-economic empowerment (Teleological welfare).",
        "trapExplanation": "Avoid saying one is correct and the other is wrong. The exam rewards synthesis—showing how pure means (deontology) must serve egalitarian ends (teleology).",
        "difficulty": "ADVANCED",
        "isPYQ": true,
        "wordLimit": 50,
        "modelAnswer": "Deontology (Kant) prioritizes the moral duty and purity of means regardless of consequences. Teleology (Utilitarianism) judges rightness purely by outcomes (greatest happiness). An administrator reconciles them by upholding procedural integrity and rule of law (means) while actively utilizing statutory discretion to deliver maximum social justice and welfare to the marginalized (ends)."
      }
    ]
  },
  {
    "id": "CON-ETH-002",
    "order": 2,
    "slug": "human-values-lessons-from-great-leaders-reformers-administrators",
    "title": "Human Values & Lessons from Great Leaders, Reformers, and Administrators",
    "shortDefinition": "The philosophical taxonomy of intrinsic and instrumental human values, universal ethical principles (truth, compassion, peace, righteousness, non-violence), and administrative lessons from Socrates, Ashoka, Gandhi, Ambedkar, and Sardar Patel.",
    "difficulty": "INTERMEDIATE",
    "topicSlug": "administrative-ethics",
    "topicTitle": "Administrative Ethics & Moral Philosophy",
    "topicOrder": 1,
    "topicDescription": "Ethics in public administration, human values, moral thinkers, civil service values, dilemmas, and probity in governance.",
    "subjectSlug": "ethics-behavior-sports",
    "claims": [
      {
        "id": "CLM-ETH-002-1",
        "statement": "Human values are enduring beliefs regarding desirable modes of conduct or end-states of existence, categorized into Intrinsic values (ends in themselves like happiness, truth) and Instrumental values (means to achieve higher ends like discipline, honesty).",
        "claimType": "AXIOLOGICAL_THEORY",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "VERY_HIGH",
        "locator": "Milton Rokeach, 'The Nature of Human Values' (Free Press, 1973), Chapter 1, pp. 3-25",
        "excerpt": "A value is an enduring belief that a specific mode of conduct or end-state of existence is personally or socially preferable to an opposite mode of conduct or end-state."
      },
      {
        "id": "CLM-ETH-002-2",
        "statement": "The ethical leadership of Mahatma Gandhi synthesized Satya (Truth) and Ahimsa (Non-violence) with the doctrine of Trusteeship and the Seven Social Sins, providing a moral compass for public authority.",
        "claimType": "PHILOSOPHICAL_DOCTRINE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "VERY_HIGH",
        "locator": "M.K. Gandhi, 'Young India' (October 22, 1925); 'An Autobiography: The Story of My Experiments with Truth' (Navajivan, 1927)",
        "excerpt": "Politics without principles, wealth without work, pleasure without conscience, knowledge without character, commerce without morality, science without humanity, and worship without sacrifice are the seven sins."
      },
      {
        "id": "CLM-ETH-002-3",
        "statement": "Dr. B.R. Ambedkar articulated Constitutional Morality as the paramount administrative virtue, requiring institutional fidelity to liberty, equality, and fraternity over traditional hierarchical social orthodoxies.",
        "claimType": "CONSTITUTIONAL_DOCTRINE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "VERY_HIGH",
        "locator": "B.R. Ambedkar, Speech in Constituent Assembly (November 4, 1948), CAD Vol. VII; 'Annihilation of Caste' (1936)",
        "excerpt": "Constitutional morality is not a natural sentiment. It has to be cultivated. We must realize that our people have yet to learn it. Democracy in India is only a top-dressing on an Indian soil, which is essentially undemocratic."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "From Moral Exemplars to Administrative Praxis",
        "body": "Why does an IAS or RAS officer study Gandhi, Patel, or Ambedkar instead of merely cramming administrative rules? Because rules govern routine procedures, but exemplary human values govern crises. When Sardar Patel addressed the first batch of Indian Administrative Service probationers at Metcalfe House in April 1947, he exhorted them to be the 'Steel Frame of India'—impartial, uninfluenced by political affiliations, and dedicated solely to national integration and public welfare.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Matrix of Great Leaders, Reformers, and Administrators",
        "body": "### Comparative Paradigm of Moral Exemplars\n\n| Leader / Reformer / Administrator | Core Human Values | Direct Administrative Lesson |\n| :--- | :--- | :--- |\n| **Mahatma Gandhi** | *Satya* (Truth), *Ahimsa*, *Sarvodaya*, *Talisman* (Recall the face of the poorest man) | Pro-poor policy prioritization (*Antyodaya*); absolute purity of administrative means |\n| **Dr. B.R. Ambedkar** | Constitutional Morality, Liberty, Equality, Fraternity, Social Justice | Defending minority and subaltern rights against majoritarian oppression; rejecting casteism |\n| **Sardar Vallabhbhai Patel** | Iron Will, Realpolitik, Decisiveness, National Integration, Administrative Protection | Courage of conviction; standing firm against illegitimate partisan pressures |\n| **Swami Vivekananda** | Strength, Selflessness, Compassion, Service as Worship (*Daridra Narayana*) | Civil service not as an elite privilege, but as an instrument of social upliftment |\n| **Raja Ram Mohan Roy & Jyotirao Phule** | Rationalism, Human Dignity, Gender Justice, Anti-Dogmatism | Eradicating institutional corruption and socio-cultural prejudices in service delivery |\n| **T.N. Seshan / Verghese Kurien** | Fearless Integrity, Institutional Autonomy, Innovation for Public Good | Upholding constitutional autonomy and transforming public institutions into engines of equity |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "Gandhi's Talisman: The Universal Algorithmic Filter for Policy Decisions",
        "body": "Whenever a public officer is in doubt, or when self-interest begins to obscure official judgment, the Gandhian Talisman provides a precise cognitive test:\n\n```\n[SITUATION: Bureaucratic policy decision / discretionary fund allocation]\n                     ↓\n[STEP 1: RECALL THE VULNERABLE]\nRecall the face of the poorest and the weakest person you have ever seen.\n                     ↓\n[STEP 2: TEST FOR DIRECT BENEFIT]\nAsk: Will the step you contemplate be of any real use to them?\n                     ↓\n[STEP 3: EVALUATE EMPOWERMENT (Swaraj)]\nWill they gain anything by it? Will it restore to them control over their life and destiny?\n                     ↓\n[STEP 4: DISSOLUTION OF EGO]\nThen you will find your doubt and your self melting away.\n```",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Examiner Traps & Model Answer Blueprints",
        "body": "### RPSC RAS Traps on Values:\n1. **Generic Biographies vs. Administrative Application**:\n   - In RPSC questions like *\"Explain Sardar Patel's contribution to administrative values\"*, students write his role in integrating princely states.\n   - *Requirement*: Write specifically about his concept of civil servants as the **Steel Frame**, protecting civil servants who offer honest, fearless advice under Article 311, and insisting on administrative impartiality.\n2. **Gandhi's Seven Sins Matrix**:\n   - High-frequency 2M/5M question. Memorize the exact 7 pairings (Wealth without Work, Pleasure without Conscience, Knowledge without Character, Commerce without Morality, Science without Humanity, Worship without Sacrifice, Politics without Principles).",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Paper II Unit 1: Human Values & Lessons from Great Leaders",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Frequently tested for 2-mark definitions of values and 5-mark lessons from Gandhi/Ambedkar/Patel."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "GS-IV: Human Values - Role of Family, Society and Educational Institutions",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Core syllabus component for Section A theory and quote-based questions."
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "GS Paper IV: Role of Leaders and Reformers",
        "relevance": "HIGH",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Standard 8-mark questions on Gandhi, Vivekananda, and Patel."
      },
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "GS Paper II: Administrative Leadership",
        "relevance": "MEDIUM",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Leadership in public service and state administration."
      },
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Paper IV: Thinkers and Social Reformers",
        "relevance": "HIGH",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Philosophical contributions of Indian reformers."
      },
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Judicial Conduct & Constitutional Values",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Constitutional morality and judicial integrity."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Governance Values",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Ethical administration and institutional probity."
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "Leadership Ethics",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Fiduciary leadership."
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Human Values = Core beliefs guiding action. Intrinsic (peace, truth) vs Instrumental (hard work, punctuality). Gandhi: Satya, Ahimsa, Talisman, 7 Sins. Ambedkar: Constitutional Morality & Social Equality. Patel: Fearless integrity & Steel Frame.",
        "priority": "P1",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "• Intrinsic values are ends in themselves; instrumental values are tools to achieve them.\n• Gandhi's Talisman directs civil servants to evaluate every decision by its impact on the poorest.\n• Ambedkar's Constitutional Morality mandates commitment to secularism, fraternity, and fundamental rights over caste or religious dogmas.\n• Sardar Patel established the civil service as an unbending 'Steel Frame' committed to national unity without partisan bias.",
        "priority": "P1",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Value Matrix:\n1. Personal Values: Truth, Honesty, Compassion.\n2. Democratic Values: Tolerance, Pluralism, Participation.\n3. Constitutional Values: Sovereignty, Social Justice, Equality, Liberty.\n4. Administrative Values (Nolan): Selflessness, Integrity, Objectivity, Accountability, Openness, Honesty, Leadership.",
        "priority": "P2",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "Which of the following is NOT one of Mahatma Gandhi's 'Seven Social Sins' published in Young India (1925)?",
        "options": [
          "Wealth without Work",
          "Politics without Principles",
          "Authority without Accountability",
          "Commerce without Morality"
        ],
        "correctAnswer": "Authority without Accountability",
        "explanation": "Mahatma Gandhi's Seven Social Sins are: (1) Politics without Principles, (2) Wealth without Work, (3) Pleasure without Conscience, (4) Knowledge without Character, (5) Commerce without Morality, (6) Science without Humanity, and (7) Worship without Sacrifice. While 'Authority without Accountability' is an administrative pathology, it is not on Gandhi's historical list.",
        "trapExplanation": "Candidates pick 'Commerce without Morality' thinking it's modern corporate jargon, but it was indeed coined by Gandhi.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "modelAnswer": "Authority without Accountability"
      },
      {
        "type": "DESCRIPTIVE_2M",
        "stem": "What is meant by 'Constitutional Morality' in the words of Dr. B.R. Ambedkar? (Word limit: 15-20 words)",
        "options": [],
        "correctAnswer": "Constitutional morality means paramount reverence for the Constitution, adherence to democratic processes, and upholding liberty, equality, and fraternity above personal, communal, or majoritarian prejudices.",
        "explanation": "Dr. Ambedkar highlighted that constitutional morality requires submitting individual and sectional interests to constitutional provisions and resolving conflicts strictly through legal, non-violent democratic mechanisms.",
        "trapExplanation": "Do not define it as general morality; it specifically relates to the supremacy of the Constitution and its values.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": true,
        "wordLimit": 15,
        "modelAnswer": "Constitutional morality means paramount reverence for the Constitution, adherence to democratic processes, and upholding liberty, equality, and fraternity above personal, communal, or majoritarian prejudices."
      }
    ]
  },
  {
    "id": "CON-ETH-003",
    "order": 3,
    "slug": "role-of-family-society-and-educational-institutions-in-inculcating-values",
    "title": "Role of Family, Society, and Educational Institutions in Inculcating Values",
    "shortDefinition": "The sociological and psychological transmission of ethical values: primary socialization within the family (empathy, love, honesty), secondary socialization in society (customs, peer pressure, civic norms), and tertiary value education in formal institutions.",
    "difficulty": "INTERMEDIATE",
    "topicSlug": "administrative-ethics",
    "topicTitle": "Administrative Ethics & Moral Philosophy",
    "topicOrder": 1,
    "topicDescription": "Ethics in public administration, human values, moral thinkers, civil service values, dilemmas, and probity in governance.",
    "subjectSlug": "ethics-behavior-sports",
    "claims": [
      {
        "id": "CLM-ETH-003-1",
        "statement": "The family functions as the primary agent of socialization where foundational emotional and moral orientations (empathy, trust, truthfulness) are internalized through observational modeling and parental reinforcement.",
        "claimType": "DEVELOPMENTAL_PSYCHOLOGY",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "VERY_HIGH",
        "locator": "Albert Bandura, 'Social Learning Theory' (Prentice-Hall, 1977); Lawrence Kohlberg, 'The Psychology of Moral Development' (1984)",
        "excerpt": "Children acquire moral attitudes, gender roles, and behavioral styles largely through modeling the observed behaviors of primary caregivers and family figures."
      },
      {
        "id": "CLM-ETH-003-2",
        "statement": "Educational institutions act as structured crucibles for cognitive moral development, fostering universal democratic values, scientific temper (Article 51A(h)), secularism, and merit-based egalitarianism.",
        "claimType": "PEDAGOGIC_THEORY",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "VERY_HIGH",
        "locator": "Radhakrishnan Commission Report on University Education (1948–49); Kothari Commission (1964–66); National Education Policy (NEP) 2020",
        "excerpt": "Education must aim at the building of character and the cultivation of human values... It should harmonize individual aspirations with societal welfare and constitutional ideals."
      },
      {
        "id": "CLM-ETH-003-3",
        "statement": "Societal institutions transmit values through informal social control, cultural rituals, peer pressure, and legal rewards, which may occasionally perpetuate negative biases (casteism, gender discrimination) requiring institutional reform.",
        "claimType": "SOCIOLOGICAL_FACT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "VERY_HIGH",
        "locator": "M.N. Srinivas, 'Social Change in Modern India' (1966); 2nd ARC 4th Report: 'Ethics in Governance' (2007)",
        "excerpt": "Society serves as a mirror and validator of conduct. However, where social mores conflict with constitutional values, the state and administrative machinery must assert constitutional morality."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Triad of Value Socialization",
        "body": "A child is not born corrupt, sectarian, or empathetic; values are transmitted through three continuous concentric rings: the **Family** (the emotional hearth), the **Educational Institution** (the intellectual forge), and the **Society** (the experiential arena). If a child watches a parent routinely lie to evade traffic fines, verbal lessons on honesty in school lose all efficacy. Conversely, when institutions celebrate scientific inquiry, gender equity, and constitutional justice, they produce administrators who view public office not as a lever of patronage, but as sacred public trust.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Comparative Socialization Matrix: Family vs. School vs. Society",
        "body": "### The Value Transmission Triad\n\n| Socializing Agent | Mechanism of Inculcation | Positive Values Transmitted | Pathologies / Risk of Negative Values |\n| :--- | :--- | :--- | :--- |\n| **Family** (*Primary*) | Observational modeling, unconditional love, emotional anchoring, parental discipline | Empathy, compassion, honesty, respect for elders, resilience | Nepotism, gender bias (son-preference), parochial caste/clan loyalties (*Apanavad*) |\n| **Educational Institutions** (*Secondary*) | Formal curriculum, value education, teacher role models, peer collaboration, sports | Rationality, scientific temper, meritocracy, teamwork, constitutional secularism | Hyper-competitiveness, cramming over character, elitism, bullying |\n| **Society** (*Tertiary / Environmental*) | Social sanctions, cultural celebrations, mass media, legal enforcement | Civic sense, pluralism, communal harmony, social solidarity | Conspicuous consumerism, corruption normalization, communal polarization |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "Cognitive Moral Development in Educational Settings (Kohlberg's Framework)",
        "body": "Institutions transition individuals across Lawrence Kohlberg's 3 levels and 6 stages of moral development:\n\n```\n1. PRE-CONVENTIONAL LEVEL (Childhood)\n   • Stage 1: Punishment & Obedience Orientation (Avoid pain/jail)\n   • Stage 2: Instrumental Relativist (What's in it for me?)\n                     ↓\n2. CONVENTIONAL LEVEL (Family & Societal Stage)\n   • Stage 3: 'Good Boy - Nice Girl' Orientation (Seeking approval of peers)\n   • Stage 4: Law and Order Orientation (Duty to maintain social order)\n                     ↓\n3. POST-CONVENTIONAL LEVEL (Autonomous Constitutional Administrator)\n   • Stage 5: Social Contract & Individual Rights (Substantive justice)\n   • Stage 6: Universal Ethical Principles (Conscience aligned with human dignity)\n```",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Examiner Traps & Case Study Applications",
        "body": "### High-Frequency Exam Angles:\n1. **The 'Teacher as Role Model' Trap**:\n   - In 5-mark questions, do not simply say \"teachers should teach ethics\". Emphasize the **Hidden Curriculum**—how fair grading, lack of discrimination, and democratic classroom discourse instill values more powerfully than textbooks.\n2. **Value Conflicts between Family Loyalty and Public Duty**:\n   - Classical case study premise: An officer's close relative or family member is involved in illegal mining or corruption. The officer must prioritize *Constitutional Public Duty* over *Familial Sentiment*, recusing themselves or enforcing law impartially.",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Paper II Unit 1: Role of Family, Society and Educational Institutions in Inculcating Values",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Regular 5-mark descriptive questions on role of education/family in value crisis."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "GS-IV: Role of Family, Society and Educational Institutions",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Frequently tested directly in Section A."
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "GS Paper IV: Inculcating Values",
        "relevance": "HIGH",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Role of family and educational environment."
      },
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "GS Paper II: Social Values",
        "relevance": "MEDIUM",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Societal institutions and development."
      },
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Paper IV: Human Values and Socialization",
        "relevance": "HIGH",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Direct match on family and education."
      },
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Professional Ethics",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Integrity foundation."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Social Security & Ethics",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Social institutions."
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "Ethics in Organization",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Organizational culture."
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Family = Primary emotional moral foundation (empathy, trust). School = Secondary intellectual crucible (scientific temper, merit, equity). Society = Tertiary environment (civic culture or corruption trap). Goal: Post-conventional Kohlberg Stage 6 ethics.",
        "priority": "P1",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "• Family nurtures unconditional empathy and honesty through parental modeling.\n• Educational institutions develop rational inquiry, meritocracy, and secular constitutional values via curriculum and teacher role models.\n• Society exerts informal normative control, though regressive practices must be checked by legal and administrative action.",
        "priority": "P1",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Socialization Pipeline:\n1. Input: Heredity + Primary Family Caregiving.\n2. Inculcation: Observational modeling, reward/punishment, schooling, peer interaction.\n3. Institutional Matrix: NEP 2020 Value Education, Article 51A Fundamental Duties.\n4. Output: Ethical, autonomous civil servant possessing constitutional integrity.",
        "priority": "P2",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "According to Lawrence Kohlberg's theory of moral development, at which stage does an individual act based on universal ethical principles and internalized conscience rather than fear of punishment or social conformity?",
        "options": [
          "Pre-conventional Level: Stage 1",
          "Conventional Level: Stage 4",
          "Post-conventional Level: Stage 6",
          "Pre-conventional Level: Stage 2"
        ],
        "correctAnswer": "Post-conventional Level: Stage 6",
        "explanation": "Stage 6 of Kohlberg's Post-conventional level represents universal ethical principle orientation. Here, right action is defined by conscience in accord with self-chosen ethical principles appealing to logical comprehensiveness, universality, and consistency (e.g., justice, human rights).",
        "trapExplanation": "Stage 4 is adherence to law and order for societal stability, which is Conventional, not Post-conventional.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "modelAnswer": "Post-conventional Level: Stage 6"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Critically evaluate how educational institutions can bridge the contemporary 'crisis of values' among youth. (Word limit: 50 words)",
        "options": [],
        "correctAnswer": "Educational institutions bridge value crises by: (1) Integrating constitutional values (Article 51A) into the hidden and formal curriculum, (2) Emphasizing teacher role-modeling over rote learning, (3) Fostering empathy through mandatory community service (NSS/NCC), and (4) Encouraging critical scientific temper and moral discourse instead of blind conformism.",
        "explanation": "**Remedying the Value Crisis via Educational Institutions:**\n1. **Beyond Rote Instruction:** Shifting from pure examination-oriented instruction to holistic character building (as envisioned in NEP 2020).\n2. **Teacher Role Models:** Teachers exemplifying fairness, integrity, and intellectual honesty.\n3. **Experiential Learning:** Inculcating compassion and civic duty through direct social engagement with marginalized communities.",
        "trapExplanation": "Avoid giving purely theoretical definitions of education; address the specific 'crisis of values' (materialism, cyber-toxicity, intolerance) and practical school interventions.",
        "difficulty": "ADVANCED",
        "isPYQ": true,
        "wordLimit": 50,
        "modelAnswer": "Educational institutions bridge value crises by: (1) Integrating constitutional values (Article 51A) into the hidden and formal curriculum, (2) Emphasizing teacher role-modeling over rote learning, (3) Fostering empathy through mandatory community service (NSS/NCC), and (4) Encouraging critical scientific temper and moral discourse instead of blind conformism."
      }
    ]
  },
  {
    "id": "CON-ETH-004",
    "order": 4,
    "slug": "attitude-content-structure-function-moral-political-persuasion",
    "title": "Attitude: Content, Structure, Function; Moral and Political Attitudes; Social Influence and Persuasion",
    "shortDefinition": "The psychological architecture of attitudes: the ABC/CAB Tripartite model (Affective, Behavioral, Cognitive), functional theories (Daniel Katz), moral and political ideological spectra, and cognitive mechanisms of social influence, cognitive dissonance (Festinger), and persuasion (Elaboration Likelihood Model).",
    "difficulty": "INTERMEDIATE",
    "topicSlug": "administrative-ethics",
    "topicTitle": "Administrative Ethics & Moral Philosophy",
    "topicOrder": 1,
    "topicDescription": "Ethics in public administration, human values, moral thinkers, civil service values, dilemmas, and probity in governance.",
    "subjectSlug": "ethics-behavior-sports",
    "claims": [
      {
        "id": "CLM-ETH-004-1",
        "statement": "An attitude is a psychological tendency expressed by evaluating a particular entity with some degree of favor or disfavor, structurally comprising the tripartite CAB model: Cognitive (beliefs), Affective (emotions), and Behavioral (action tendencies).",
        "claimType": "PSYCHOLOGICAL_CONSTRUCT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "VERY_HIGH",
        "locator": "Alice H. Eagly & Shelly Chaiken, 'The Psychology of Attitudes' (Harcourt, 1993), Chapter 1, pp. 1-21",
        "excerpt": "Attitude is a psychological tendency that is expressed by evaluating a particular entity with some degree of favor or disfavor. The multicomponent model identifies affective, cognitive, and behavioral dimensions."
      },
      {
        "id": "CLM-ETH-004-2",
        "statement": "According to Daniel Katz's functional theory, attitudes serve four psychological functions: Utilitarian/Instrumental (maximizing rewards), Ego-defensive (protecting self-esteem), Value-expressive (asserting core identity), and Knowledge function (imposing order on complex reality).",
        "claimType": "FUNCTIONAL_PSYCHOLOGY",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "VERY_HIGH",
        "locator": "Daniel Katz, 'The Functional Approach to the Study of Attitudes', Public Opinion Quarterly (1960), Vol. 24, pp. 163-204",
        "excerpt": "The reasons for holding attitudes must be sought in the functions they perform for the personality—specifically the adjustment, ego-defense, value expression, and knowledge functions."
      },
      {
        "id": "CLM-ETH-004-3",
        "statement": "Persuasive communication succeeds through either the Central Route (deep cognitive processing of logical arguments) or Peripheral Route (surface cues like authority, attractiveness) as codified in the Elaboration Likelihood Model (Petty & Cacioppo).",
        "claimType": "COGNITIVE_MODEL",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "VERY_HIGH",
        "locator": "Richard E. Petty & John T. Cacioppo, 'The Elaboration Likelihood Model of Persuasion' (Advances in Experimental Social Psychology, 1986), Vol. 19, pp. 123-205",
        "excerpt": "Attitude change can occur via two distinct routes: central, which involves careful and effortful scrutiny of the merits, and peripheral, which relies on environmental cues."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Attitude in Public Administration: Changing Mindsets for Public Health & Sanitation",
        "body": "Building toilets under the Swachh Bharat Mission was an engineering task; getting rural citizens to abandon open defecation was an attitude change challenge. A village elder may intellectually know that open defecation causes diarrhoea (**Cognitive**), but emotionally feel that defecating indoors is unclean (**Affective**), leading to habitual morning walks to the fields (**Behavioral**). To transform behavior, administrators cannot rely solely on legal coercion; they must employ persuasive communication, community nudges, and cognitive dissonance to re-align all three components of attitude.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "The CAB Model & Katz's Four Functions of Attitude",
        "body": "### 1. The Tripartite Structure of Attitude (CAB Model)\n\n```\n          ┌───────────────────────────────────────────────┐\n          │               ATTITUDE OBJECT                 │\n          │     (e.g., Girl Child Education, Tax Paying)   │\n          └───────────────────────┬───────────────────────┘\n                                  │\n         ┌────────────────────────┼────────────────────────┐\n         ↓                        ↓                        ↓\n   [ COGNITIVE ]            [ AFFECTIVE ]            [ BEHAVIORAL ]\n  Thoughts, beliefs,      Emotions, feelings,       Predisposition to act,\n  facts, rational data    prejudices, visceral      observed habits,\n  (e.g., 'Educating girls   reactions (e.g., pride  action tendencies (e.g.,\n  raises GDP')            in daughters)             enrolling girl in school)\n```\n\n---\n\n### 2. Daniel Katz's Four Functional Foundations\n\n| Function | Psychological Purpose | Administrative Example |\n| :--- | :--- | :--- |\n| **Utilitarian (Instrumental)** | Attain rewards, avoid punishments | Citizens adopting solar energy because of government subsidies (*KUSUM scheme*) |\n| **Ego-Defensive** | Protect self-esteem from harsh truths or guilt | Corrupt officials rationalizing bribery by claiming 'everyone takes money' |\n| **Value-Expressive** | Publicly express self-identity and core ethics | Civil servants actively volunteering for disaster relief in Barmer floods |\n| **Knowledge** | Provide simple cognitive shortcuts for a complex world | Classifying citizens based on past experiences to streamline grievance triage |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "The Elaboration Likelihood Model (ELM) of Persuasion in Governance",
        "body": "How does an administrator persuade citizens to adopt vaccination, pay municipal taxes, or conserve groundwater?\n\n```\n                    [ PERSUASIVE MESSAGE ]\n                 (e.g., Water Conservation in Thar)\n                               │\n               Is the audience motivated & able\n                     to process arguments?\n                               │\n                 ┌─────────────┴─────────────┐\n                YES                          NO\n                 ↓                           ↓\n        [ CENTRAL ROUTE ]           [ PERIPHERAL ROUTE ]\n     • High elaboration           • Low elaboration\n     • Focus on hydrological data, • Focus on emotional cues,\n       water table drop, science    local deities (*Pabuji/Khed*),\n     • Produces DURABLE, lasting   celebrity appeals (folk singers)\n       attitude change            • Produces TEMPORARY change\n```",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Moral & Political Attitudes: Examiner Traps",
        "body": "### Key Definitions for RPSC RAS:\n1. **Moral Attitude**:\n   - Evaluative disposition towards issues based on fundamental virtues of good vs. evil, right vs. wrong (e.g., attitude toward corruption, euthanasia, abortion, capital punishment). Characterized by high moral conviction and low willingness to compromise.\n2. **Political Attitude**:\n   - An individual's orientations toward the state, authority, political ideologies (Left, Right, Center, Liberalism, Socialism), and the distribution of public resources.\n3. **Bureaucratic Neutrality Trap**:\n   - A civil servant is expected to hold democratic **moral attitudes** (integrity, compassion, equity), but must maintain strict non-partisanship and neutrality regarding **political attitudes** (serving any constitutionally elected political party with equal fidelity).",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Paper II Unit 1: Attitude - Content, Structure, Function; Social Influence and Persuasion",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Core 2-marker definitions (CAB model) and 5/10-marker persuasion questions."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "GS-IV: Attitude: Content, Structure, Function; Moral & Political Attitudes; Social Influence & Persuasion",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Full syllabus alignment."
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "GS Paper IV: Attitude and Social Influence",
        "relevance": "HIGH",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Persuasion models and public health campaigns."
      },
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "GS Paper II: Administrative Behavior",
        "relevance": "MEDIUM",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Public communication and citizen attitude."
      },
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Paper IV: Attitude and Persuasion",
        "relevance": "HIGH",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Psychological basis of attitude."
      },
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Psychology & Witness Assessment",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Bias detection."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Labor Relations & Communication",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Collective bargaining attitude."
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "Customer Relationship Psychology",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Persuasion in banking."
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Attitude = CAB Model (Cognitive, Affective, Behavioral). 4 Functions (Katz): Utilitarian, Ego-defensive, Value-expressive, Knowledge. Persuasion (ELM): Central (data/logic) vs Peripheral (cues/celebrity). Festinger: Cognitive Dissonance triggers attitude change.",
        "priority": "P1",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "• Attitude comprises beliefs (C), emotions (A), and actions (B).\n• Katz identified four functions: gaining rewards (utilitarian), self-defense (ego-defensive), identity expression (value-expressive), and sense-making (knowledge).\n• Moral attitudes involve deep convictions of right/wrong; political attitudes involve views on state power.\n• Effective persuasion (ELM) uses the central route for durable change and peripheral route for rapid compliance.",
        "priority": "P1",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Persuasion & Behavioral Change Pipeline:\n1. Diagnosis: Identify whether resistance is Cognitive (lack of info) or Affective (cultural prejudice).\n2. Cognitive Dissonance Induction: Show contradiction between existing beliefs and desired public outcome.\n3. Channel Routing: Central route for opinion leaders; Peripheral route with trusted community elders for mass public.\n4. Institutionalization: Reinforce with statutory nudges and peer validation.",
        "priority": "P2",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "In the context of the Elaboration Likelihood Model (ELM) of persuasion, which condition is most likely to lead an individual to process a message through the 'Central Route'?",
        "options": [
          "The recipient is distracted, in a hurry, and has low interest in the topic",
          "The recipient possesses high motivation, personal relevance, and cognitive ability to analyze the message arguments",
          "The communicator is an attractive Bollywood celebrity endorsing an FMCG product",
          "The message relies entirely on catchy jingles, humorous cartoons, and bright background colors"
        ],
        "correctAnswer": "The recipient possesses high motivation, personal relevance, and cognitive ability to analyze the message arguments",
        "explanation": "The Central Route of persuasion occurs when the receiver has both the motivation and the cognitive ability to scrutinize the merits of the information presented. Attitude change via this route is thoughtful, persistent, resistant to counter-persuasion, and predictive of long-term behavior.",
        "trapExplanation": "Options relying on celebrity, humor, or distraction trigger the Peripheral Route, which yields superficial and transient attitude changes.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "modelAnswer": "The recipient possesses high motivation, personal relevance, and cognitive ability to analyze the message arguments"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Explain the 'CAB' components of attitude with a suitable administrative example from the Swachh Bharat Abhiyan or Beti Bachao Beti Padhao. (Word limit: 50 words)",
        "options": [],
        "correctAnswer": "The CAB components in 'Beti Bachao Beti Padhao':\n1. Cognitive: Understanding demographic facts that girls excel academically and economically.\n2. Affective: Fostering emotional pride, empathy, and respect toward daughters while eliminating patriarchal aversion.\n3. Behavioral: Proactively enrolling daughters in school, celebrating their birth, and ensuring equal nutrition and inheritance.",
        "explanation": "**CAB Tripartite Model Illustrated:**\n- **Cognitive (C):** Rational beliefs, statistical awareness, and logical arguments.\n- **Affective (A):** Emotional resonance, moral affection, and cultural feelings.\n- **Behavioral (B):** Observable actions and overt habit patterns. Real social reform requires synchronizing all three components.",
        "trapExplanation": "Do not merely define C, A, and B in the abstract; RPSC requires a concrete illustrative example from an active government scheme.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": true,
        "wordLimit": 50,
        "modelAnswer": "The CAB components in 'Beti Bachao Beti Padhao':\n1. Cognitive: Understanding demographic facts that girls excel academically and economically.\n2. Affective: Fostering emotional pride, empathy, and respect toward daughters while eliminating patriarchal aversion.\n3. Behavioral: Proactively enrolling daughters in school, celebrating their birth, and ensuring equal nutrition and inheritance."
      }
    ]
  },
  {
    "id": "CON-ETH-005",
    "order": 5,
    "slug": "aptitude-and-foundational-values-for-civil-service",
    "title": "Aptitude and Foundational Values for Civil Service: Integrity, Impartiality, Non-partisanship, Objectivity & Empathy",
    "shortDefinition": "The psychological definition of aptitude vs ability, and the canonical Nolan Committee / 2nd ARC foundational civil service values: Integrity, Impartiality, Political Non-partisanship, Objectivity, Dedication to Public Service, Empathy, Tolerance, and Compassion towards the weaker sections.",
    "difficulty": "INTERMEDIATE",
    "topicSlug": "administrative-ethics",
    "topicTitle": "Administrative Ethics & Moral Philosophy",
    "topicOrder": 1,
    "topicDescription": "Ethics in public administration, human values, moral thinkers, civil service values, dilemmas, and probity in governance.",
    "subjectSlug": "ethics-behavior-sports",
    "claims": [
      {
        "id": "CLM-ETH-005-1",
        "statement": "Aptitude refers to an innate or acquired capacity to acquire specific knowledge or skills through training, whereas Foundational Values define the normative ethical architecture guiding how those skills are deployed in public service.",
        "claimType": "PSYCHOLOGICAL_DISTINCTION",
        "epistemicLevel": "AXIOM",
        "confidence": "VERY_HIGH",
        "locator": "Anne Anastasi & Susana Urbina, 'Psychological Testing' (Prentice Hall, 1997); 2nd ARC 10th Report: 'Refurbishing of Personnel Administration' (2008), pp. 1-15",
        "excerpt": "Aptitude measures a person's potential to acquire competence. In civil service, high cognitive aptitude without foundational ethical values produces sophisticated corruption."
      },
      {
        "id": "CLM-ETH-005-2",
        "statement": "The UK Committee on Standards in Public Life (Nolan Committee, 1995) codified the Seven Principles of Public Life: Selflessness, Integrity, Objectivity, Accountability, Openness, Honesty, and Leadership.",
        "claimType": "INTERNATIONAL_STANDARD",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "VERY_HIGH",
        "locator": "Lord Nolan, 'First Report of the Committee on Standards in Public Life' (Cm 2850-I, HMSO, London, May 1995), Chapter 1, p. 14",
        "excerpt": "Holders of public office should act solely in terms of the public interest. They should not place themselves under any financial obligation to outside individuals."
      },
      {
        "id": "CLM-ETH-005-3",
        "statement": "The Second Administrative Reforms Commission (2nd ARC 4th Report) mandated seven foundational values for Indian civil servants: Integrity, Impartiality, Non-partisanship, Objectivity, Dedication to public service, and Empathy and Compassion towards the weaker sections.",
        "claimType": "ADMINISTRATIVE_STANDARD",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "VERY_HIGH",
        "locator": "Second Administrative Reforms Commission, 4th Report: 'Ethics in Governance' (2007), Recommendation 2.1 & 2.2, pp. 28-36",
        "excerpt": "Civil servants should possess intellectual and moral integrity, non-partisanship in politics, impartiality in service delivery, and active empathy towards SC/ST, women, and marginalized groups."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Aptitude vs. Integrity: The Scalpel and the Surgeon",
        "body": "A surgeon may have exceptional surgical dexterity (**Aptitude**), but if he secretly harvests kidneys from vulnerable patients for profit, his high aptitude makes him a dangerous criminal rather than a healer (**Lack of Integrity**). Similarly, an administrator may possess extraordinary intellectual brilliance, data analysis speed, and eloquence, but if they lack **Objectivity, Impartiality, and Empathy**, that brilliant intellect will simply be used to conceal graft, favor relatives, and oppress the weak. Aptitude is the engine; Foundational Values are the steering wheel and brakes.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "The Foundational Values Canon (Nolan + 2nd ARC)",
        "body": "### Comparative Grid of Civil Service Foundational Values\n\n| Value | Definitional Essence | Anti-Thesis / Behavioral Pathology |\n| :--- | :--- | :--- |\n| **Integrity** | Absolute congruence between moral convictions, words, and public actions; refusing financial/personal obligations | Corruption, conflict of interest, moral opportunism |\n| **Impartiality** | Treating all citizens with equal fairness without prejudice, bias, or favoritism | Communalism, nepotism, regionalism (*Kshetravad*) |\n| **Non-Partisanship** | Serving the constitutionally elected government of the day with equal fidelity regardless of political ideology | Civil service politicization, sycophancy, committing to party dogma |\n| **Objectivity** | Making administrative decisions strictly based on verifiable evidence, empirical merit, and established legal rules | Subjectivism, emotional whim, intuition-based bias |\n| **Empathy & Compassion** | Emotionally understanding the suffering of marginalized groups (*Karuna*) and taking active proactive administrative action to relieve it | Bureaucratic callousness, mechanical red-tapism, apathy |\n| **Dedication to Service** | Unwavering passion and commitment to public welfare above personal comfort, status, or self-interest | Cynicism, 9-to-5 clerk mentality, absenteeism |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "The Hierarchy of Empathy to Proactive Compassion",
        "body": "How does an administrator progress from passive sentiment to active public justice?\n\n```\n1. SYMPATHY (Passive Acknowledgment)\n   \"I feel sorry that you lost your crops in the hailstorm.\"\n                 ↓\n2. EMPATHY (Cognitive & Emotional Identification)\n   \"I understand your despair, the burden of debt, and the fear of feeding your family.\"\n                 ↓\n3. COMPASSION (Active Intent to Alleviate)\n   \"I feel compelled to utilize my official authority to help you.\"\n                 ↓\n4. PROACTIVE ADMINISTRATIVE ACTION (*Karmayoga*)\n   Disbursing immediate relief under SDRF within 24 hours; setting up emergency grain banks;\n   suspending revenue recovery (*Girdawari* exception).\n```",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "High-Frequency Traps: Impartiality vs. Non-Partisanship",
        "body": "### Critical Conceptual Distinction for 2M/5M Questions:\n- **Impartiality**: Relates to the **citizen-interface** and service delivery. The officer acts without bias or favoritism towards any religion, caste, race, or class.\n- **Non-Partisanship**: Relates to the **political-interface**. The officer remains completely independent of party politics, executing the lawful policies of the ruling party with equal vigor regardless of which political flag is in power.\n- **Trap**: Candidates often use them interchangeably. In RPSC RAS Mains, keep citizen-fairness tied to *Impartiality* and political independence tied to *Non-Partisanship*.",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Paper II Unit 1: Aptitude and Foundational Values for Civil Service",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Highest yield topic. Repeatedly tested for 2M definitions of Integrity/Objectivity and 5M comparisons."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "GS-IV: Aptitude and Foundational Values for Civil Service",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Core Section A theory and case study evaluation standard."
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "GS Paper IV: Civil Service Values",
        "relevance": "HIGH",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Nolan Committee principles and Indian context."
      },
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "GS Paper II: Administrative Integrity",
        "relevance": "MEDIUM",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Public service ethics."
      },
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Paper IV: Civil Service Values and Nolan Principles",
        "relevance": "HIGH",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Explicit question on Nolan's 7 principles."
      },
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Judicial Impartiality & Integrity",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Bangalore Principles of Judicial Conduct."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Fiduciary Duty & Transparency",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Public funds integrity."
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "Professional Ethics",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Banking code of conduct."
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Aptitude = Capacity to learn skills. Values = Ethical compass. Nolan 7: Selflessness, Integrity, Objectivity, Accountability, Openness, Honesty, Leadership. 2nd ARC: + Impartiality, Non-partisanship, Dedication, Compassion for weak.",
        "priority": "P1",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "• Aptitude without integrity leads to sophisticated malfeasance.\n• Integrity means moral consistency and refusing compromises for personal gain.\n• Impartiality guarantees unbiased service delivery to all citizens.\n• Non-partisanship ensures political neutrality under changing political regimes.\n• Objectivity grounds decisions in verified empirical facts, not subjective bias.",
        "priority": "P1",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Civil Service Values Architecture:\n1. Personal Ethics: Integrity, Honesty, Selflessness.\n2. Democratic-Constitutional Ethics: Impartiality, Non-partisanship, Objectivity.\n3. Social Justice Ethics: Empathy, Tolerance, Compassion for weaker sections (*Antyodaya*).\n4. Institutional Ethics: Transparency, Accountability, Transformational Leadership.",
        "priority": "P2",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "Which of the following is NOT one of the 'Seven Principles of Public Life' formulated by the Nolan Committee (1995)?",
        "options": [
          "Selflessness",
          "Objectivity",
          "Secrecy",
          "Accountability"
        ],
        "correctAnswer": "Secrecy",
        "explanation": "The Nolan Committee's Seven Principles of Public Life are: Selflessness, Integrity, Objectivity, Accountability, Openness, Honesty, and Leadership. 'Openness' is mandated, meaning holders of public office should act and take decisions in an open and transparent manner; 'Secrecy' is the opposite of openness.",
        "trapExplanation": "Colonial bureaucracies prized official secrecy (e.g., Official Secrets Act 1923), but modern governance principles mandate Openness.",
        "difficulty": "BEGINNER",
        "isPYQ": false,
        "modelAnswer": "Secrecy"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Differentiate between 'Impartiality' and 'Non-partisanship' in civil services. Why are both essential for a democracy? (Word limit: 50 words)",
        "options": [],
        "correctAnswer": "Impartiality is citizen-centric: executing administrative duties without bias toward caste, religion, or wealth. Non-partisanship is political-centric: serving the constitutionally elected government of the day with neutral professional competence, independent of party ideologies. Both preserve democratic legitimacy, rule of law, and uninterrupted continuity of public administration across regime transitions.",
        "explanation": "**Impartiality vs. Non-Partisanship:**\n1. **Impartiality:** Operating as an objective arbiter for every citizen, ensuring equal protection under Article 14.\n2. **Non-Partisanship:** Insulating the permanent civil service (*Steel Frame*) from partisan politics, ensuring public confidence that administrative actions are guided by law, not political allegiance.",
        "trapExplanation": "Do not say they mean the same thing. Impartiality governs the relationship with the public; non-partisanship governs the relationship with political executives.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": true,
        "wordLimit": 50,
        "modelAnswer": "Impartiality is citizen-centric: executing administrative duties without bias toward caste, religion, or wealth. Non-partisanship is political-centric: serving the constitutionally elected government of the day with neutral professional competence, independent of party ideologies. Both preserve democratic legitimacy, rule of law, and uninterrupted continuity of public administration across regime transitions."
      }
    ]
  },
  {
    "id": "CON-ETH-006",
    "order": 6,
    "slug": "emotional-intelligence-concepts-utilities-and-application-in-administration",
    "title": "Emotional Intelligence: Concepts, Utilities and Application in Administration",
    "shortDefinition": "The psychological construct of Emotional Intelligence (Salovey-Mayer, Daniel Goleman's 5 domains: Self-awareness, Self-regulation, Motivation, Empathy, Social Skills), and its indispensable utility in civil services for crisis de-escalation, stress tolerance, and empathetic governance.",
    "difficulty": "INTERMEDIATE",
    "topicSlug": "administrative-ethics",
    "topicTitle": "Administrative Ethics & Moral Philosophy",
    "topicOrder": 1,
    "topicDescription": "Ethics in public administration, human values, moral thinkers, civil service values, dilemmas, and probity in governance.",
    "subjectSlug": "ethics-behavior-sports",
    "claims": [
      {
        "id": "CLM-ETH-006-1",
        "statement": "Emotional Intelligence (EI) is the ability to perceive, assess, generate, and regulate emotions to promote emotional and intellectual growth, distinct from conventional cognitive intelligence (IQ).",
        "claimType": "PSYCHOLOGICAL_CONSTRUCT",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "VERY_HIGH",
        "locator": "Peter Salovey & John D. Mayer, 'Emotional Intelligence', Imagination, Cognition and Personality (1990), Vol. 9, pp. 185-211",
        "excerpt": "Emotional intelligence involves the ability to monitor one's own and others' feelings and emotions, to discriminate among them and to use this information to guide one's thinking and actions."
      },
      {
        "id": "CLM-ETH-006-2",
        "statement": "Daniel Goleman organized Emotional Intelligence into five essential dimensions: Self-Awareness, Self-Regulation, Internal Motivation, Empathy, and Social Skills/Relationship Management.",
        "claimType": "THEORETICAL_MODEL",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "VERY_HIGH",
        "locator": "Daniel Goleman, 'Emotional Intelligence: Why It Can Matter More Than IQ' (Bantam Books, 1995); 'Working with Emotional Intelligence' (1998)",
        "excerpt": "IQ gets you hired, but EQ gets you promoted. The five domains of emotional intelligence determine how well we manage our own emotions and handle our relationships."
      },
      {
        "id": "CLM-ETH-006-3",
        "statement": "In public administration, Emotional Intelligence is vital for conflict resolution, crowd de-escalation during law-and-order crises, mitigating civil servant burnout, and delivering citizen-centric welfare.",
        "claimType": "APPLIED_ADMINISTRATIVE_SCIENCE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "VERY_HIGH",
        "locator": "Second Administrative Reforms Commission, 10th Report: 'Refurbishing of Personnel Administration' (2008), Chapter 4, pp. 48-62",
        "excerpt": "Civil servants operate in high-pressure public environments. High emotional intelligence enables administrators to maintain calm in crises, negotiate with agitated crowds, and understand unspoken public suffering."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Emotional Intelligence Under Riot Conditions: The District Magistrate's Test",
        "body": "A communal clash erupts in an old city quarter following a provocative social media rumor. A mob of 2,000 angry youths gathers outside the police station demanding instant vengeance. A low-EQ officer panics, feels defensive, and either cowers inside or orders indiscriminate lethal firing, sparking a statewide conflagration. A high-EQ officer recognizes their own internal fear and controls it (**Self-Regulation**), understands the collective grief and anger of the crowd (**Empathy**), calmly steps out with trusted community elders, listens without interrupting, and persuades the mob to disperse through active de-escalation (**Social Skills**). Cognitive IQ solves files; Emotional EQ resolves human crises.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Goleman's Five Dimensions in Administrative Practice",
        "body": "### Daniel Goleman's Emotional Intelligence Matrix\n\n| Dimension | Core Definition | Public Administration Application |\n| :--- | :--- | :--- |\n| **1. Self-Awareness** | Recognizing one's own emotions, triggers, biases, and emotional blind spots | An officer recognizing when political interference is making them irritable, pausing before reacting |\n| **2. Self-Regulation** | Channeling and controlling disruptive impulses; maintaining calm under extreme provocation | Refusing to lose temper when an agitated delegation or media mob behaves confrontationally |\n| **3. Motivation** | Passion to work for intrinsic ideals (public service, excellence) beyond money or status | Maintaining relentless drive in a remote tribal posting despite harsh living conditions |\n| **4. Empathy** | Sensing others' emotions, understanding unexpressed pain, seeing perspectives | Understanding why rural illiterate women fear entering bureaucratic government offices |\n| **5. Social Skills** | Managing relationships, building alliances, persuading teams, resolving disputes | Inter-departmental coordination during flood relief; negotiating peace between rival factions |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "The Emotional Regulation Pipeline for Public Crises",
        "body": "When confronted with severe bureaucratic stress or mob confrontation:\n\n```\n[EXTERNAL STIMULUS: Aggressive crowd shouting slogans at Sub-Divisional Office]\n                               │\n               ┌───────────────┴───────────────┐\n               ↓                               ↓\n       LOW EQ REACTION                 HIGH EQ REGULATION\n  • Amygdala Hijack               • Pre-Frontal Cortex Activation\n  • Panic, anger, defensive ego   • 6-second pause (Breathe & Detach)\n  • Retaliatory violence or panic • Name the emotion: \"I am feeling threatened\"\n  • Escalation to riot            • Shift focus to crowd psychology\n                                  • Empathetic listening + Clear boundaries\n                                  • Peaceful de-escalation\n```",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Examiner Traps & Model Answer Blueprints",
        "body": "### RPSC RAS Mains Traps:\n1. **Confusing 'Empathy' with 'Emotional Sympathy'**:\n   - *Trap*: Writing that an emotionally intelligent officer should break the rules to show kindness.\n   - *Correction*: EI does not mean emotional indulgence or illegal rule-bending. It means understanding emotions to formulate **constructive, rule-compliant, and empathetic administrative solutions**.\n2. **Goleman's 5 Elements Recall**:\n   - For a 5-mark question, explicitly draw or bullet all 5 components of Goleman's model and attach one real Rajasthan administrative example to each.",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Paper II Unit 1: Emotional Intelligence - Concepts, Utilities and Application in Administration",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Core 5-mark and 10-mark descriptive question topic."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "GS-IV: Emotional Intelligence-Concepts, Utilities and Application in Administration and Governance",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Standard annual question in UPSC GS-IV."
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "GS Paper IV: Emotional Intelligence",
        "relevance": "HIGH",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Goleman's model and administrative utility."
      },
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "GS Paper II: Behavioral Skills",
        "relevance": "MEDIUM",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Civil servant crisis management."
      },
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Paper IV: Emotional Intelligence and Administration",
        "relevance": "HIGH",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Direct match on Goleman's 5 dimensions."
      },
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Judicial Demeanour & Stress Management",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Judicial composure."
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Human Resource Management & EI",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Workplace conflict resolution."
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "Managerial EQ",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Team leadership."
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Emotional Intelligence (Salovey-Mayer / Goleman): Recognizing & regulating own and others' emotions. 5 Pillars: Self-awareness, Self-regulation, Motivation, Empathy, Social Skills. Admin Utility: Crisis de-escalation, team morale, compassionate governance.",
        "priority": "P1",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "• EI measures the capacity to handle emotions constructively.\n• Goleman's 5 dimensions: Self-awareness (know triggers), Self-regulation (control impulses), Motivation (intrinsic drive), Empathy (feel others' pain), Social skills (resolve conflicts).\n• Administrators need high EI to manage political pressure, maintain composure in riots, and bridge the gulf with marginalized citizens.",
        "priority": "P1",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Administrative EI Architecture:\n1. Intra-Personal (Self): Self-awareness + Self-regulation + Self-motivation.\n2. Inter-Personal (Others): Empathy + Conflict Resolution + Collaborative Leadership.\n3. Institutional Outcomes: Reduced corruption, enhanced citizen trust, resilient crisis management, low civil service burnout.",
        "priority": "P2",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "Who among the following psychologists popularized the concept of Emotional Intelligence through the bestselling book 'Emotional Intelligence: Why It Can Matter More Than IQ' (1995)?",
        "options": [
          "Daniel Goleman",
          "Howard Gardner",
          "Charles Spearman",
          "B.F. Skinner"
        ],
        "correctAnswer": "Daniel Goleman",
        "explanation": "While Peter Salovey and John Mayer first formally defined Emotional Intelligence in 1990, it was psychologist Daniel Goleman who popularized the construct globally in his 1995 landmark book 'Emotional Intelligence: Why It Can Matter More Than IQ'.",
        "trapExplanation": "Howard Gardner formulated the Theory of Multiple Intelligences (which included Interpersonal and Intrapersonal intelligence), but Goleman popularized EI.",
        "difficulty": "BEGINNER",
        "isPYQ": false,
        "modelAnswer": "Daniel Goleman"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "How can Emotional Intelligence help a District Collector in de-escalating a violent law-and-order agitation? (Word limit: 50 words)",
        "options": [],
        "correctAnswer": "An emotionally intelligent District Collector: (1) Practices self-regulation, suppressing panic and defensive anger under provocation, (2) Empathizes with genuine public grievances behind the anger, (3) Employs active listening and non-threatening body language to cool tensions, and (4) Leverages social skills to negotiate with community elders, averting lethal force.",
        "explanation": "**Application of EI in Mob Control:**\n- **Emotional Composure:** Prevents 'amygdala hijack' and premature use of firearm force.\n- **Empathetic Engagement:** Disarms hostility by acknowledging legitimate public pain.\n- **Persuasive Communication:** Uses respected intermediary channels to achieve peaceful dispersal.",
        "trapExplanation": "Focus on specific behavioral skills (listening, composure, elder negotiation) rather than vague generic statements like 'he maintains peace'.",
        "difficulty": "ADVANCED",
        "isPYQ": true,
        "wordLimit": 50,
        "modelAnswer": "An emotionally intelligent District Collector: (1) Practices self-regulation, suppressing panic and defensive anger under provocation, (2) Empathizes with genuine public grievances behind the anger, (3) Employs active listening and non-threatening body language to cool tensions, and (4) Leverages social skills to negotiate with community elders, averting lethal force."
      }
    ]
  },
  {
    "id": "CON-ETH-007",
    "order": 7,
    "slug": "moral-thinkers-western-traditions",
    "title": "Moral Thinkers & Philosophers: Western Ethical Traditions (Socrates, Plato, Aristotle, Kant, Mill, Rawls)",
    "shortDefinition": "Classical and modern Western moral philosophy applied to administrative decision-making: Socratic dialectic and virtue as knowledge, Platonic justice as tripartite harmony, Aristotelian eudaimonia and Golden Mean, Kantian deontological duty, Utilitarian consequentialism, and Rawlsian justice as fairness.",
    "difficulty": "INTERMEDIATE",
    "topicSlug": "administrative-ethics",
    "topicTitle": "Administrative Ethics & Moral Philosophy",
    "topicOrder": 1,
    "topicDescription": "Ethics in public administration, human values, moral thinkers, civil service values, dilemmas, and probity in governance.",
    "subjectSlug": "ethics-behavior-sports",
    "claims": [
      {
        "id": "CLM-ETH-019",
        "statement": "Western philosophical traditions provide foundational ethical frameworks for civil service: Plato defines justice as harmony among reason, spirit, and appetite; Aristotle grounds administrative virtue in the Golden Mean (Mesotes); Kant establishes the Categorical Imperative as unconditional duty; and John Rawls formulates the Veil of Ignorance and Difference Principle to secure institutional fairness.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Western Political Thought & Ethics (Sabine, Rawls - Theory of Justice, 1971; Aristotle - Nicomachean Ethics)",
        "excerpt": "Justice is the first virtue of social institutions, as truth is of systems of thought... each person possesses an inviolability founded on justice that even the welfare of society as a whole cannot override."
      },
      {
        "id": "CLM-ETH-020",
        "statement": "Aristotelian virtue ethics posits that moral virtue is an acquired habitus achieved by navigating between extremes of deficiency and excess (Golden Mean), requiring practical wisdom (Phronesis) to make context-sensitive decisions in public administration.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Aristotle, Nicomachean Ethics, Book II; MacIntyre, After Virtue",
        "excerpt": "Virtue is a mean between two vices, one of excess and the other of deficiency, guided by rational principle as a prudent man would determine it."
      },
      {
        "id": "CLM-ETH-021",
        "statement": "John Rawls’s Theory of Justice introduces the Original Position and Veil of Ignorance, deducing two fundamental principles: equal basic liberties for all citizens, and social/economic inequalities arranged to the greatest benefit of the least-advantaged (Difference Principle), directly justifying affirmative administrative action.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "John Rawls, A Theory of Justice (1971), Section 11-13",
        "excerpt": "Social and economic inequalities are to satisfy two conditions: first, they are to be attached to offices and positions open to all under conditions of fair equality of opportunity; and second, they are to be to the greatest benefit of the least-advantaged members of society."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Administrative Philosophical Anchor",
        "body": "When an administrator faces complex policy dilemmas—such as allocating scarce hospital ventilators during a disaster or acquiring private land for highway expansion—pure intuition is insufficient. Western philosophical thought provides systematic analytical lenses: Deontology asks \"What is my unconditional duty?\", Utilitarianism asks \"Which choice maximizes overall welfare?\", Virtue Ethics asks \"What would an administrator of high character do?\", and Rawlsianism asks \"Does this decision protect the most vulnerable person behind a veil of ignorance?\"",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Core Thinkers & Applied Frameworks Matrix",
        "body": "| Thinker | Core Concept / Work | Key Principle | Public Administrative Application |\n|---|---|---|---|\n| **Socrates** | Dialectic, Virtue is Knowledge | Unexamined life is not worth living; vice results from ignorance | Critical enquiry into policy assumptions; resisting blind bureaucratic conformity |\n| **Plato** | *The Republic*, Tripartite Soul | Justice is functional harmony (Reason rules Appetite & Spirit); Philosopher-King | Meritocratic governance, expert-led decision making, subordinating personal gain to state welfare |\n| **Aristotle** | *Nicomachean Ethics*, Golden Mean | Eudaimonia (flourishing); Virtue as balance between excess and deficiency | *Phronesis* (prudence); balanced discretionary authority (avoiding arbitrary rigidity vs. laxity) |\n| **Immanuel Kant** | *Groundwork of the Metaphysics of Morals* | Categorical Imperative; Universalizability; Humanity as an end, never merely as a means | Absolute protection of citizen rights; refusal to sacrifice minority rights for aggregate public utility |\n| **Bentham & J.S. Mill** | Utilitarianism | Greatest happiness of the greatest number; Harm Principle; qualitative pleasures | Cost-benefit analysis, infrastructure prioritization, safeguarding individual liberty against majority tyranny |\n| **John Rawls** | *A Theory of Justice* (1971) | Original Position, Veil of Ignorance, Difference Principle | Affirmative action, targeted welfare schemes (PDS, BPL subsidies), equitable public resource distribution |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "Rawlsian Decision Protocol in Resource Allocation",
        "body": "To apply Rawlsian ethics in policy implementation: 1. **Assume the Veil of Ignorance**: Strip away knowledge of your own social standing, wealth, caste, gender, or political backing. 2. **Maxi-Min Rule**: Evaluate alternative policy outcomes and identify the worst-case scenario for the weakest group under each alternative. 3. **Select Policy Maximizing the Minimum**: Choose the policy option that guarantees the best possible outcome for the least advantaged segment of society, thereby ensuring social stability and constitutional justice.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Exam Traps & Model Application Strategies",
        "body": "Examiner Trap: Confusing Benthamite act utilitarianism with rule utilitarianism or Kantian deontology. When asked about displacement due to dam construction, candidates frequently argue solely from utilitarian GDP gains. To score top marks in RPSC Paper II, balance utilitarian economic efficiency with Kantian dignity (rights of displaced tribals) and Rawlsian Difference Principle (rehabilitation packages that leave displaced families better off than before).",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Paper II - General Studies 2 (Administrative Ethics)",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Marks weightage: ~10M"
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "General Studies Paper IV (Ethics)",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Marks weightage: ~10M"
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Studies Paper IV",
        "relevance": "HIGH",
        "priority": "P1",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~8M"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "Paper IV - Philosophy, Psychology & Public Administration",
        "relevance": "HIGH",
        "priority": "P1",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~8M"
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Paper 1 - General Studies",
        "relevance": "MEDIUM",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~5M"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Studies",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~2M"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "Ethics in Banking",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~2M"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~2M"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Plato = Tripartite Harmony; Aristotle = Golden Mean & Phronesis; Kant = Categorical Imperative & Humanity as End; Bentham/Mill = Utility; Rawls = Veil of Ignorance & Difference Principle (maximin).",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Western ethical traditions equip administrators with systematic decision lenses: Socrates prompts reflective integrity; Plato stresses functional harmony and philosopher-kings; Aristotle champions practical judgment (phronesis) avoiding extremes; Kant demands unconditional rights and adherence to duty; Utilitarianism evaluates net social welfare; and Rawls justifies preferential welfare distribution for the worst-off through the Difference Principle.",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Apply Western thought to administrative case studies via a 3-tier ethical test: 1. Deontological Legality & Human Dignity (Does it violate fundamental rights or treat people merely as means?); 2. Consequential Utility (Does it maximize overall public welfare without arbitrary harm?); 3. Rawlsian Equity (Does it safeguard and empower the most vulnerable stakeholder?).",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "Which of the following principles formulated by John Rawls asserts that social and economic inequalities must be arranged to be of the greatest benefit to the least-advantaged members of society?",
        "options": [
          "Equal Liberty Principle",
          "Difference Principle",
          "Categorical Imperative",
          "Principle of Utility"
        ],
        "correctAnswer": "Difference Principle",
        "explanation": "The Difference Principle, a central component of John Rawls’s second principle of justice in \"A Theory of Justice\", permits social and economic inequalities only if they work to the maximum advantage of the least-advantaged members of society.",
        "trapExplanation": "Watch for nuanced terminology differences.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "modelAnswer": "Difference Principle"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Explain Aristotle’s concept of the \"Golden Mean\" (Mesotes) and its significance in administrative discretion.",
        "correctAnswer": "Aristotle defines moral virtue as the \"Golden Mean\" (Mesotes)—the rational middle course between deficiency and excess relative to the situation, guided by practical wisdom (phronesis). In public administration, it prevents bureaucratic pathopsychologies: an officer avoids both arbitrary harshness/callousness (excess) and laxity/cronyism (deficiency), exercising balanced, humane, rule-bound discretion.",
        "explanation": "",
        "trapExplanation": "Watch for nuanced terminology differences.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 50,
        "modelAnswer": "Aristotle defines moral virtue as the \"Golden Mean\" (Mesotes)—the rational middle course between deficiency and excess relative to the situation, guided by practical wisdom (phronesis). In public administration, it prevents bureaucratic pathopsychologies: an officer avoids both arbitrary harshness/callousness (excess) and laxity/cronyism (deficiency), exercising balanced, humane, rule-bound discretion."
      }
    ]
  },
  {
    "id": "CON-ETH-008",
    "order": 8,
    "slug": "moral-thinkers-indian-traditions-leaders",
    "title": "Moral Thinkers & Philosophers: Indian Ethical Traditions & Leaders (Vedic Rita, Gita Nishkama Karma, Buddha, Mahavira, Kautilya, Gandhi, Ambedkar)",
    "shortDefinition": "Indian ethical thought and administrative heritage: Cosmic cosmic order (Rita/Satya), Purusharthas, Bhagavad Gita’s Nishkama Karma and Sthitaprajna, Buddhist Ashtangika Marga and Karuna, Jain Anuvratas and Anekantavada, Kautilyan Rajdharma and Yogakshema, Gandhian Satyagraha, Sarvodaya and Trusteeship, and Dr. B.R. Ambedkar’s Constitutional Morality.",
    "difficulty": "INTERMEDIATE",
    "topicSlug": "administrative-ethics",
    "topicTitle": "Administrative Ethics & Moral Philosophy",
    "topicOrder": 1,
    "topicDescription": "Ethics in public administration, human values, moral thinkers, civil service values, dilemmas, and probity in governance.",
    "subjectSlug": "ethics-behavior-sports",
    "claims": [
      {
        "id": "CLM-ETH-022",
        "statement": "The Bhagavad Gita formulates Nishkama Karma (desireless action) and the ideal of the Sthitaprajna (person of steady intellect), requiring civil servants to execute public duty with psychological detachment from personal rewards, ego, or fear of censure.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Bhagavad Gita, Chapter II, Verses 47, 55-56",
        "excerpt": "Karmanye vadikaraste ma phaleshu kadachana / Ma karmaphalaheturbhurma te sango’stvakarmany. (Your right is to work only, never with its fruits; let not the fruits of action be your motive, nor let your attachment be to inaction.)"
      },
      {
        "id": "CLM-ETH-023",
        "statement": "Kautilya’s Arthashastra establishes the welfare state concept of Yogakshema (security and prosperity of subjects) and explicitly defines an administrator’s accountability, declaring that the sovereign’s happiness lies solely in the happiness of the citizens.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Kautilya, Arthashastra, Book I, Chapter 19",
        "excerpt": "Prajasukhe sukham rajnah prajanam cha hite hitam / Natmapriyam hitam rajnah prajanam tu priyam hitam. (In the happiness of his subjects lies his happiness; in their welfare his welfare; what pleases himself he shall not consider as good, but whatever pleases his subjects he shall consider as good.)"
      },
      {
        "id": "CLM-ETH-024",
        "statement": "Dr. B.R. Ambedkar formulated \"Constitutional Morality\" as the paramount civil virtue—demanding subordination of personal, religious, or caste prejudices to constitutional means, institutional self-restraint, and commitment to social democracy.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Dr. B.R. Ambedkar, Constituent Assembly Debates, 4 November 1948",
        "excerpt": "Constitutional morality is not a natural sentiment. It has to be cultivated. We must realize that our people have yet to learn it. Democracy in India is only a top-dressing on an Indian soil, which is essentially undemocratic."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Indigenous Moral Anchors for Indian Administration",
        "body": "Indian civil servants operate within a deeply plural, historical society. Indian moral traditions provide organic ethical anchors: Nishkama Karma instills selfless public service; Buddhist Karuna and Jain Anekantavada promote empathy and multi-perspectival tolerance; Kautilyan Yogakshema grounds state welfare; Gandhi’s Talisman guides bottom-up poverty alleviation; and Ambedkar’s Constitutional Morality prevents majoritarian degradation of civil rights.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Indian Ethical Thinkers & Concepts Synthesis",
        "body": "| Thinker / Tradition | Foundational Concept | Core Tenet | Administrative Relevance |\n|---|---|---|---|\n| **Vedic & Upanishadic** | *Rita* & *Satya*, *Purusharthas* | Cosmic moral order; balance of Dharma, Artha, Kama, Moksha | Upholding rule of law; preventing material acquisitiveness (*Artha*) from overriding ethical duty (*Dharma*) |\n| **Bhagavad Gita** | *Nishkama Karma*, *Lokasangraha*, *Sthitaprajna* | Detached action dedicated to public welfare; emotional equilibrium under pressure | Resisting corruption, bribes, and political intimidation; objective crisis management |\n| **Buddhism** | *Madhyama Pratipada*, *Ashtangika Marga*, *Karuna* | Middle Path avoiding hedonism and extreme asceticism; boundless compassion | Compassionate public grievance redressal; moderate, evidence-based policy execution |\n| **Jainism** | *Anekantavada*, *Syadvada*, *Ahimsa*, *Aparigraha* | Multi-faceted truth; non-absolutism; non-possession | Stakeholder consultation; respect for minority opinions; frugal administrative expenditures |\n| **Kautilya** | *Yogakshema*, *Dandaneeti* | State’s duty to ensure welfare, security, and wealth creation of subjects | Anti-corruption audits (40 methods of embezzlement identified); citizen-centric welfare |\n| **Mahatma Gandhi** | *Satyagraha*, *Sarvodaya*, *Trusteeship*, *Talisman* | Purity of means and ends; economic wealth held in public trust; uplifting the last person | Gandhi’s Talisman as litmus test for every policy/scheme; social audits and participatory democracy |\n| **Dr. B.R. Ambedkar** | *Constitutional Morality*, Social Democracy, *Maitri* | Liberty, Equality, Fraternity; constitutional over revolutionary methods | Elimination of caste discrimination; affirmative administrative protection for Dalits and marginalized |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "Operationalizing Gandhi’s Talisman in Administrative Discretion",
        "body": "When an administrator doubts whether to approve a discretionary waiver, pension sanction, or developmental project: 1. Recall the face of the poorest and the weakest human being seen. 2. Ask whether the contemplated administrative step will restore that person to control over their own life and destiny. 3. Assess whether it will lead to *Swaraj* (self-reliance) for the hungry and spiritually starving millions. If yes, the administrative action is ethically validated.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Exam Strategies & Model Comparative Answers",
        "body": "Common RPSC Trap: Writing purely religious or theological explanations for Gita, Buddhism, or Jainism. RPSC RAS evaluates these as secular ethical frameworks for modern governance. Always translate *Lokasangraha* into \"universal public interest\", *Anekantavada* into \"pluralistic participatory decision-making\", and *Nishkama Karma* into \"professional integrity uncompromised by rent-seeking motives\".",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Paper II - General Studies 2 (Administrative Ethics)",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Marks weightage: ~10M"
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "General Studies Paper IV (Ethics)",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Marks weightage: ~10M"
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Studies Paper IV",
        "relevance": "HIGH",
        "priority": "P1",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~8M"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "Paper IV - Ethics & Public Administration",
        "relevance": "HIGH",
        "priority": "P1",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~8M"
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Paper 1",
        "relevance": "MEDIUM",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~5M"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Studies",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~2M"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "Ethics in Banking",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~2M"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~2M"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Gita = Nishkama Karma & Lokasangraha; Buddha = Middle Path & Karuna; Jain = Anekantavada & Aparigraha; Kautilya = Yogakshema; Gandhi = Talisman & Trusteeship; Ambedkar = Constitutional Morality.",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Indian moral traditions offer vital public administration principles: Gita emphasizes duty without self-serving attachment (Nishkama Karma) and welfare of all (Lokasangraha); Buddhism highlights empathetic justice and moderation; Jain Anekantavada mandates multi-stakeholder consensus; Kautilya aligns the ruler’s happiness with citizen welfare (Yogakshema); Gandhi enforces ethical means and uplifting the poorest (Talisman); and Ambedkar demands strict adherence to constitutional values and eradication of systemic inequality.",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Synthesize Indian and Western ethics in RPSC Mains answers: Pair Kantian duty with Gita’s Nishkama Karma; pair Rawlsian Difference Principle with Gandhi’s Antyodaya and Ambedkar’s social justice; and pair Habermasian communicative action with Jain Anekantavada.",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "Which ancient Indian text contains the celebrated administrative dictum: \"Prajasukhe sukham rajnah prajanam cha hite hitam\" (In the happiness of his subjects lies his happiness; in their welfare his welfare)?",
        "options": [
          "Manusmriti",
          "Kautilya’s Arthashastra",
          "Vidur Neeti",
          "Shukra Neeti"
        ],
        "correctAnswer": "Kautilya’s Arthashastra",
        "explanation": "Kautilya’s Arthashastra (Book I, Chapter 19) explicitly articulates this principle of Yogakshema, establishing citizen welfare as the supreme duty and source of fulfillment for the sovereign and administrators.",
        "trapExplanation": "Watch for nuanced terminology differences.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "modelAnswer": "Kautilya’s Arthashastra"
      },
      {
        "type": "DESCRIPTIVE_10M",
        "stem": "Discuss Dr. B.R. Ambedkar’s concept of \"Constitutional Morality\". How does it guide modern civil servants during social and communal tensions?",
        "correctAnswer": "Dr. B.R. Ambedkar articulated \"Constitutional Morality\" as the paramount commitment to constitutional principles—liberty, equality, fraternity, and the rule of law—over parochial identities like caste, community, or religious dogma. It mandates self-restraint, respect for institutional processes, and rejection of extra-constitutional or violent agitation.\n\nDuring social and communal tensions, Constitutional Morality guides civil servants to: 1. Act with absolute secular neutrality and uncompromising enforcement of the law, regardless of political pressure; 2. Protect the fundamental rights of vulnerable minorities from majoritarian intimidation; and 3. Recognize that state power is held as a constitutional trust to defend fraternity and social justice rather than popular prejudice.",
        "explanation": "",
        "trapExplanation": "Watch for nuanced terminology differences.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 100,
        "modelAnswer": "Dr. B.R. Ambedkar articulated \"Constitutional Morality\" as the paramount commitment to constitutional principles—liberty, equality, fraternity, and the rule of law—over parochial identities like caste, community, or religious dogma. It mandates self-restraint, respect for institutional processes, and rejection of extra-constitutional or violent agitation.\n\nDuring social and communal tensions, Constitutional Morality guides civil servants to: 1. Act with absolute secular neutrality and uncompromising enforcement of the law, regardless of political pressure; 2. Protect the fundamental rights of vulnerable minorities from majoritarian intimidation; and 3. Recognize that state power is held as a constitutional trust to defend fraternity and social justice rather than popular prejudice."
      }
    ]
  },
  {
    "id": "CON-ETH-009",
    "order": 9,
    "slug": "civil-service-values-and-dilemmas",
    "title": "Civil Service Values & Dilemmas: Ethical Dilemmas, Conflict of Interest & Codes of Conduct",
    "shortDefinition": "Foundational civil service values (integrity, impartiality, dedication, empathy), taxonomy of administrative ethical dilemmas, actual vs. potential conflict of interest, and the architecture of Codes of Ethics vs. Codes of Conduct (All India Services Conduct Rules, 1968, 2nd ARC recommendations).",
    "difficulty": "INTERMEDIATE",
    "topicSlug": "administrative-ethics",
    "topicTitle": "Administrative Ethics & Moral Philosophy",
    "topicOrder": 1,
    "topicDescription": "Ethics in public administration, human values, moral thinkers, civil service values, dilemmas, and probity in governance.",
    "subjectSlug": "ethics-behavior-sports",
    "claims": [
      {
        "id": "CLM-ETH-025",
        "statement": "The Second Administrative Reforms Commission (ARC, 4th Report - Ethics in Governance) identified core values for civil services in India: integrity, impartiality, objectivity, dedication to public service, empathy, and tolerance towards weaker sections, recommending a legally enforceable Public Service Code.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Second ARC 4th Report, \"Ethics in Governance\" (2007), Chapter 2",
        "excerpt": "Values such as integrity, impartiality, commitment to public service, and devotion to duty should be explicitly incorporated into a statutory Public Service Code."
      },
      {
        "id": "CLM-ETH-026",
        "statement": "An administrative ethical dilemma occurs when a public official faces competing, mutually exclusive moral obligations or choices where adherence to one ethical value necessitates the compromise of another (e.g., rule adherence vs. compassionate relief, loyalty to superiors vs. public truth).",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "OECD Guidelines for Managing Conflict of Interest in the Public Service (2003)",
        "excerpt": "A conflict of interest involves a conflict between the public duty and private interests of a public official, in which the public official has private-capacity interests which could improperly influence the performance of their official duties and responsibilities."
      },
      {
        "id": "CLM-ETH-027",
        "statement": "The All India Services (Conduct) Rules, 1968 (amended 2014) codify statutory obligations of integrity, requiring officers to declare assets, avoid private commercial interests, abstain from political activities, and exercise utmost objectivity in decision-making.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "All India Services (Conduct) Rules, 1968, Rules 3, 13, 16",
        "excerpt": "Every member of the Service shall at all times maintain absolute integrity and devotion to duty and shall do nothing which is unbecoming of a member of the Service."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Navigating Administrative Cross-Pressures",
        "body": "Administrators rarely face simple choices between \"good\" and \"evil.\" Most corrupt transactions are masked as lawful orders, and many genuine human tragedies fall into regulatory grey areas. Ethical dilemmas emerge when two legitimate goods collide: for instance, rigidly enforcing biometric authentication rules (preventing leakage) versus providing immediate rations to an elderly widow without fingerprints (compassion and right to life). Mastering ethical resolution frameworks is vital for administrative sanity and integrity.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Typology of Ethical Dilemmas & Values in Civil Service",
        "body": "| Value / Concept | Definition | Classic Dilemma Scenario | Resolution Mechanism |\n|---|---|---|---|\n| **Integrity vs. Loyalty** | Absolute adherence to truth and law vs. organizational hierarchy | Superior orders officer to expedite illegal tender or withhold adverse inquiry report | Seek written orders; dissent on file; escalate through legal vigilance/whistleblower channels |\n| **Rule Adherence vs. Compassion** | Letter of law vs. spirit of equity and human welfare | Disqualifying genuinely destitute citizen due to missing documentation | Provisional sanction with supervisory intimation; field verification under discretionary emergency powers |\n| **Public Duty vs. Conflict of Interest** | Official responsibility vs. personal/familial pecuniary benefit | Close relative bids for public works procurement under officer’s jurisdiction | Immediate written recusal; transfer tender authority to independent committee; public disclosure |\n| **Transparency vs. Official Secrecy** | Citizen’s right to know vs. state security or commercial confidentiality | Whistleblower reveals safety flaw in public bridge construction project | RTI public interest override (Section 8(2) of RTI Act); safety over commercial secrecy |\n| **Neutrality vs. Commitment** | Non-partisan execution of policy vs. constitutional moral goals | Government changes and orders selective targeting of political opponents | Strict non-partisan adherence to Constitution and statutory guidelines; refusal of unwritten illegal directives |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "Ethical Decision-Making Matrix (The 4-Way Administrative Test)",
        "body": "When facing an acute administrative dilemma: 1. **Legality Test**: Is the action strictly compliant with constitutional provisions, acts, and statutory rules? 2. **Universalizability Test (Kant)**: Would I be willing for this decision to become a universal rule applied in all similar situations? 3. **Publicity Test (Front-Page Test)**: Would I be comfortable defending this decision if its full details appeared on tomorrow’s newspaper front page? 4. **Vulnerability Test (Gandhi/Rawls)**: Does this decision protect the most marginalized and powerless stakeholder impacted by the policy?",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Exam Framework for Case Study Resolution (RPSC & UPSC)",
        "body": "In RPSC Mains Paper II case studies: 1. List all key stakeholders (Officer, Beneficiary, Public, Government, Accused). 2. Explicitly identify the core ethical dilemmas (e.g., Integrity vs. Subordination, Rule of Law vs. Natural Justice). 3. Evaluate at least 3 distinct courses of action with merits and demerits. 4. Propose your chosen course of action with clear legal and constitutional justifications. 5. Conclude with long-term systemic/institutional reforms (e.g., policy amendment, grievance digitization).",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Paper II - General Studies 2 (Administrative Ethics)",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Marks weightage: ~10M"
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "General Studies Paper IV (Ethics)",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Marks weightage: ~10M"
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Studies Paper IV",
        "relevance": "HIGH",
        "priority": "P1",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~8M"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "Paper IV",
        "relevance": "HIGH",
        "priority": "P1",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~8M"
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Paper 1",
        "relevance": "MEDIUM",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~5M"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "Ethics in Banking & Financial Institutions",
        "relevance": "MEDIUM",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~5M"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Studies",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~2M"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~2M"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Core Values: Integrity, Impartiality, Objectivity, Dedication, Empathy. Conflict of Interest: Private interest vs. public duty (Recusal is mandatory). 4 Tests: Legality, Universalizability, Publicity, Vulnerability.",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Civil servants must navigate complex dilemmas where competing goods collide (integrity vs. loyalty, rule adherence vs. compassion). A conflict of interest arises when private interests potentially compromise official impartiality, requiring immediate disclosure and formal recusal. Dilemmas are resolved using structured matrices assessing statutory legality, universalizability, transparency under public scrutiny, and impact on the weakest citizen.",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Distinguish Code of Ethics vs. Code of Conduct: Code of Ethics is aspirational, value-based, and guides moral judgment (integrity, justice, dignity); Code of Conduct is prescriptive, rule-based, and legally enforceable (prohibiting gifts, political activity, undisclosed assets). Both are essential for institutional integrity.",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "What is the mandatory and ethically appropriate initial response of a civil servant when discovering that a close family member is a bidding contractor in a public procurement tender under their jurisdiction?",
        "options": [
          "Award the contract only if their bid is objectively the lowest",
          "Immediately disclose the relationship in writing and formally recuse oneself from the tender committee",
          "Reduce personal contact with the relative until the tender process is completed",
          "Negotiate a discount with the relative to save public funds"
        ],
        "correctAnswer": "Immediately disclose the relationship in writing and formally recuse oneself from the tender committee",
        "explanation": "Under public service ethics and conflict of interest guidelines (OECD and 2nd ARC), perceived or actual conflicts of interest require immediate written disclosure and complete recusal from the evaluation and decision-making process.",
        "trapExplanation": "Watch for nuanced terminology differences.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "modelAnswer": "Immediately disclose the relationship in writing and formally recuse oneself from the tender committee"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Differentiate between a \"Code of Ethics\" and a \"Code of Conduct\" for public officials.",
        "correctAnswer": "A **Code of Ethics** is broad, value-based, and aspirational, outlining foundational moral ideals like integrity, empathy, and justice to guide discretionary decisions. In contrast, a **Code of Conduct** is specific, rule-based, and legally enforceable, detailing prohibited and mandatory administrative behaviors (e.g., gift ceilings, asset disclosures, and political neutrality).",
        "explanation": "",
        "trapExplanation": "Watch for nuanced terminology differences.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 50,
        "modelAnswer": "A **Code of Ethics** is broad, value-based, and aspirational, outlining foundational moral ideals like integrity, empathy, and justice to guide discretionary decisions. In contrast, a **Code of Conduct** is specific, rule-based, and legally enforceable, detailing prohibited and mandatory administrative behaviors (e.g., gift ceilings, asset disclosures, and political neutrality)."
      }
    ]
  },
  {
    "id": "CON-ETH-010",
    "order": 10,
    "slug": "ethical-governance-probity-accountability",
    "title": "Ethical Governance, Probity & Accountability Mechanisms: RTI, Citizens Charters & Whistleblower Protection",
    "shortDefinition": "Philosophical and institutional foundations of probity in governance, public trust doctrine, transparency under the Right to Information Act, Citizen’s Charters as social contracts, Whistleblowers Protection Act 2014, and social auditing.",
    "difficulty": "INTERMEDIATE",
    "topicSlug": "administrative-ethics",
    "topicTitle": "Administrative Ethics & Moral Philosophy",
    "topicOrder": 1,
    "topicDescription": "Ethics in public administration, human values, moral thinkers, civil service values, dilemmas, and probity in governance.",
    "subjectSlug": "ethics-behavior-sports",
    "claims": [
      {
        "id": "CLM-ETH-028",
        "statement": "Probity in governance signifies the presence of procedural integrity, incorruptibility, absolute honesty, and strict compliance with ethical codes in public management, transforming public administration from sovereign authority into an ethical trusteeship.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Second ARC 4th Report, Ethics in Governance (2007); Nolan Committee First Report (1995)",
        "excerpt": "Probity in governance is an essential and vital requirement for an efficient and effective system of governance and for socio-economic development."
      },
      {
        "id": "CLM-ETH-029",
        "statement": "Citizen’s Charters represent voluntary declarations by public authorities outlining standards of service delivery, timeframes, grievance mechanisms, and transparency benchmarks, functioning as social contracts between citizens and the administration.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "DARPG, Citizen’s Charter Initiative in India Guidelines; Sevottam Framework (IS 15700:2005)",
        "excerpt": "A Citizen’s Charter is an instrument of empowerment, shifting the focus from administrative convenience to citizen entitlement and accountability."
      },
      {
        "id": "CLM-ETH-030",
        "statement": "The Whistle Blowers Protection Act, 2014 establishes a statutory mechanism to receive complaints relating to allegations of corruption or wilful misuse of power against public servants, mandating identity confidentiality and safeguards against victimization.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "The Whistle Blowers Protection Act, 2014 (Act No. 17 of 2014), Sections 4, 11",
        "excerpt": "Any public servant or any other person including any non-governmental organization may make a public interest disclosure before the Competent Authority... which shall conceal the identity of the complainant."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Governance as a Fiduciary Trust",
        "body": "When an officer administers public revenue or tenders, the money does not belong to the state or the department; it belongs to the tax-paying citizens, many of whom live in abject poverty. The Public Trust Doctrine establishes that all governmental authority is held on fiduciary trust for the collective public. Probity is not merely avoiding criminal indictment for bribery; it is the proactive, transparent stewardship of state resources with unyielding fairness.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Institutional Instruments of Ethical Accountability",
        "body": "| Accountability Tool | Governing Authority / Basis | Core Mechanism | Administrative Impact |\n|---|---|---|---|\n| **Right to Information (RTI Act 2005)** | Central / State Information Commissions | Section 4 proactive disclosure; 30-day mandatory response; penalties for obstruction | Demolishes bureaucratic secrecy; empowers citizens to conduct decentralized administrative audits |\n| **Citizen’s Charters** | DARPG / Administrative Departments | Publicly committed service standards, delivery timelines, and designated redress officers | Establishes enforceable service benchmarks; shifts paradigm from citizen petitioner to rights-holder |\n| **Whistleblower Protection** | Whistle Blowers Protection Act, 2014 | Central Vigilance Commission (CVC) as competent authority; identity concealment | Protects honest insiders who expose corruption, fraud, or misuse of discretionary authority |\n| **Social Audit** | Statutory under MGNREGA Sec 17; Comptroller & Auditor General (CAG) | Gram Sabha-led verification of muster rolls, expenditure vouchers, and physical assets | Replaces formal paper compliance with on-ground democratic accountability and public scrutiny |\n| **Sevottam Model** | IS 15700:2005 Quality Standard | 3 Pillars: Citizen’s Charter, Grievance Redress Mechanism, Service Delivery Capability | Institutionalizes total quality management and continuous improvement in public delivery |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "The Social Audit Lifecycle",
        "body": "Social audit operationalizes ground-level probity in 5 sequential stages: 1. **Information Dissemination**: Proactive public release of project accounts, worker attendance sheets, and material invoices. 2. **Physical Verification**: Village audit committees conduct door-to-door worker surveys and measure physical infrastructure. 3. **Special Gram Sabha Audit Forum**: Public assembly where workers, contractors, and administrators sit face-to-face; discrepancies are read out openly. 4. **Action Taken Report (ATR)**: Mandatory recovery of embezzled funds and lodging of departmental/police inquiries. 5. **Institutional Archiving**: Uploading audit findings to public online dashboards.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Exam Strategies & Critical Evaluation in RPSC Mains",
        "body": "In RPSC Mains Paper II, questions frequently ask why Citizen’s Charters or Whistleblower protection struggle in practice. Always balance theoretical virtues with practical diagnostic critiques: Citizen’s Charters often suffer from lack of statutory backing, vague commitments without compensation, and top-down drafting without staff buy-in. Whistleblower frameworks face delayed rules notification and limited protection against subtle departmental harassment. Propose solutions like the Sevottam framework, digital token-based tracking, and autonomous whistleblower support cells.",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Paper II - General Studies 2 (Administrative Ethics)",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Marks weightage: ~10M"
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "General Studies Paper IV (Ethics)",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Marks weightage: ~10M"
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Studies Paper IV",
        "relevance": "HIGH",
        "priority": "P1",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~8M"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "Paper IV",
        "relevance": "HIGH",
        "priority": "P1",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~8M"
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Paper 1 - Right to Information & Governance",
        "relevance": "HIGH",
        "priority": "P1",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~8M"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "Compliance & Governance",
        "relevance": "MEDIUM",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~5M"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Studies",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~2M"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~2M"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Probity = Active incorruptibility & public trust. Tools: RTI (Sec 4 proactive disclosure), Citizen’s Charters (service standards), Whistleblower Act (CVC identity protection), Social Audit (Gram Sabha verification).",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Probity in governance requires procedural transparency, absolute integrity, and accountability to the citizen. Institutional pillars include the RTI Act 2005 (breaking bureaucratic opacity), Citizen’s Charters (committing to service standards and redress timelines), the Whistle Blowers Protection Act 2014 (shielding ethical insiders), and Social Audits under MGNREGA (enabling direct community verification of state expenditures).",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Enhance administrative probity through the Sevottam 3-Pillar Model: 1. Formulation of measurable Citizen’s Charters with client consultation; 2. Institutionalized Grievance Redress System with strict SLA tracking; 3. Continuous capability enhancement of public personnel to meet promised delivery benchmarks.",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "Under the MGNREGA 2005 framework, which democratic institution is legally mandated to conduct the periodic Social Audit of all projects executed within the Panchayat jurisdiction?",
        "options": [
          "Zila Parishad",
          "Panchayat Samiti",
          "Gram Sabha",
          "Block Development Officer"
        ],
        "correctAnswer": "Gram Sabha",
        "explanation": "Section 17 of the MGNREGA 2005 legally empowers the Gram Sabha to conduct social audits of all works executed within its jurisdiction, examining records, muster rolls, and physical assets.",
        "trapExplanation": "Watch for nuanced terminology differences.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "modelAnswer": "Gram Sabha"
      },
      {
        "type": "DESCRIPTIVE_10M",
        "stem": "Evaluate the role of \"Social Audit\" as an instrument of probity and anti-corruption in rural development administration.",
        "correctAnswer": "A **Social Audit** is a democratic process where citizens and beneficiary communities audit public records, physical infrastructure, and expenditure vouchers to assess whether state funds matched ground outcomes.\n\n**Key Roles in Promoting Probity:**\n1. **Democratization of Data**: Makes invoices, muster rolls, and vendor bills publicly accessible, deterring ghost beneficiaries.\n2. **Direct Face-to-Face Accountability**: The open public hearing (Jansunwai) confronts implementing officials with beneficiaries, eliminating bureaucratic evasion.\n3. **Empowerment of Marginalized Groups**: Gives marginalized workers an institutional voice to challenge wage theft and leakages.\n\n**Challenges & Reforms**: Social audits often encounter administrative resistance, non-compliance with action-taken reports, and threats to social auditors. Institutionalizing independent social audit directorates and tying findings to statutory recoveries are vital for sustainable impact.",
        "explanation": "",
        "trapExplanation": "Watch for nuanced terminology differences.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 100,
        "modelAnswer": "A **Social Audit** is a democratic process where citizens and beneficiary communities audit public records, physical infrastructure, and expenditure vouchers to assess whether state funds matched ground outcomes.\n\n**Key Roles in Promoting Probity:**\n1. **Democratization of Data**: Makes invoices, muster rolls, and vendor bills publicly accessible, deterring ghost beneficiaries.\n2. **Direct Face-to-Face Accountability**: The open public hearing (Jansunwai) confronts implementing officials with beneficiaries, eliminating bureaucratic evasion.\n3. **Empowerment of Marginalized Groups**: Gives marginalized workers an institutional voice to challenge wage theft and leakages.\n\n**Challenges & Reforms**: Social audits often encounter administrative resistance, non-compliance with action-taken reports, and threats to social auditors. Institutionalizing independent social audit directorates and tying findings to statutory recoveries are vital for sustainable impact."
      }
    ]
  },
  {
    "id": "CON-ETH-011",
    "order": 11,
    "slug": "work-culture-service-delivery-anti-corruption",
    "title": "Work Culture, Quality of Service Delivery & Anti-Corruption Frameworks: CVC, CBI, Lokayukta & ACB",
    "shortDefinition": "Work culture in public organizations, determinants of positive organizational climate, Citizen-centric service delivery, and the institutional anti-corruption ecosystem: Central Vigilance Commission (CVC), Central Bureau of Investigation (CBI), State Lokayukta, and Anti-Corruption Bureau (ACB Rajasthan).",
    "difficulty": "INTERMEDIATE",
    "topicSlug": "administrative-ethics",
    "topicTitle": "Administrative Ethics & Moral Philosophy",
    "topicOrder": 1,
    "topicDescription": "Ethics in public administration, human values, moral thinkers, civil service values, dilemmas, and probity in governance.",
    "subjectSlug": "ethics-behavior-sports",
    "claims": [
      {
        "id": "CLM-ETH-031",
        "statement": "Work culture in public administration comprises the shared values, institutional beliefs, behavioral norms, and operational practices that govern administrative interactions with colleagues, superiors, and citizens, directly determining public service delivery quality.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Second ARC 12th Report, Citizen Centric Administration (2009); Schein, Organizational Culture and Leadership",
        "excerpt": "An administrative culture focused on processes rather than outcomes, secrecy rather than openness, and authority rather than service has impaired our administrative delivery."
      },
      {
        "id": "CLM-ETH-032",
        "statement": "The Central Vigilance Commission (CVC), granted statutory status via the CVC Act 2003, functions as the apex vigilance institution free from executive control, exercising superintendence over the Delhi Special Police Establishment (CBI) for offenses under the Prevention of Corruption Act, 1988.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Central Vigilance Commission Act, 2003, Sections 3, 8; Vineet Narain v. Union of India (1998)",
        "excerpt": "The Commission shall exercise superintendence over the functioning of the Delhi Special Police Establishment in so far as it relates to the investigation of offences alleged to have been committed under the Prevention of Corruption Act."
      },
      {
        "id": "CLM-ETH-033",
        "statement": "In Rajasthan, the Anti-Corruption Bureau (ACB) functions as the specialized state investigative wing under the Home Department to investigate offenses under the Prevention of Corruption Act 1988, executing trap cases, disproportionate asset investigations, and administrative surprise checks.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Rajasthan Anti-Corruption Bureau Operational Manual; Prevention of Corruption Act, 1988 (amended 2018)",
        "excerpt": "The Anti-Corruption Bureau is mandated to prevent, detect, and investigate bribery, corruption, and criminal misconduct among public servants in the State of Rajasthan."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "From Bureaucratic Inertia to Transformative Work Culture",
        "body": "Why does a citizen encounter apathy, delayed files, and indifference in one government office, while another department operates with efficiency, warmth, and punctuality? The difference lies in work culture. A toxic work culture rewards obedience over innovation, file movement over problem solving, and opaque gatekeeping over transparent service. Transforming bureaucratic work culture into a mission-driven, citizen-centric ecosystem is the true goal of administrative leadership.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "The Anti-Corruption & Vigilance Institutional Architecture",
        "body": "| Institution | Legal Mandate / Nature | Jurisdiction | Primary Functions & Powers |\n|---|---|---|---|\n| **Central Vigilance Commission (CVC)** | Statutory (CVC Act, 2003); autonomous multi-member body | Central Government ministries, PSUs, public sector banks, Group A officers | Apex vigilance superintendence; monitors CBI corruption probes; tenders advice on disciplinary proceedings |\n| **Central Bureau of Investigation (CBI - Anti-Corruption Branch)** | DSPE Act, 1946; specialized central investigative police agency | Central public servants, multi-state offenses, high-profile economic/corruption offenses | Criminal investigations, raids, charge-sheeting under the Prevention of Corruption Act 1988 |\n| **Lokpal & Lokayukta** | Lokpal & Lokayuktas Act, 2013; Rajasthan Lokayukta Act 1973 | Ministers, MLAs, senior state public servants (excluding Rajasthan CM/Judiciary) | Independent ombudsman; inquiries into corruption allegations; recommending prosecution or administrative action |\n| **Anti-Corruption Bureau (ACB Rajasthan)** | Specialized state police agency under Rajasthan Home Department | All state public servants, local bodies, and state corporation personnel | Red-handed decoy traps, disproportionate assets (DA) probes, disproportionate raids, filing FIRs/charge-sheets |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "Mechanisms of Administrative Anti-Corruption Vigilance",
        "body": "Vigilance operates across three coordinated dimensions: 1. **Preventive Vigilance**: Simplifying complex administrative procedures, introducing end-to-end e-governance (e.g., Rajasthan Sampark, Jan Soochna Portal), rotating officers in sensitive seats, and eliminating arbitrary discretion. 2. **Punitive Vigilance**: Swift investigation, forensic document auditing, sting operations/traps by ACB, and departmental disciplinary inquiries under Civil Services (CCA) Rules. 3. **Participative Vigilance**: Observance of Vigilance Awareness Week, citizen integrity pledges, public whistleblowing helplines (e.g., ACB Toll-Free 1064 / WhatsApp helplines).",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Exam Strategies & Model Comparative Insights in RPSC Mains",
        "body": "RPSC Mains Paper II frequently contrasts punitive vs. preventive vigilance. A high-scoring answer explains that while punitive agencies like ACB and Lokayukta punish corrupt individuals post-facto, preventive vigilance permanently reduces corruption opportunities through system redesign, digitized faceless approvals, and strict audit compliance. When discussing ACB Rajasthan, reference its modern decoy trap protocols and citizen helpline 1064.",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Paper II - General Studies 2 (Administrative Ethics)",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Marks weightage: ~10M"
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "General Studies Paper IV (Ethics)",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Marks weightage: ~10M"
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Studies Paper IV",
        "relevance": "HIGH",
        "priority": "P1",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~8M"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "Paper IV",
        "relevance": "HIGH",
        "priority": "P1",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~8M"
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Paper 1",
        "relevance": "MEDIUM",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~5M"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "Vigilance & Prevention of Fraud in Banking",
        "relevance": "MEDIUM",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~5M"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Studies",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~2M"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~2M"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Work Culture = Shared institutional values & norms. Anti-Corruption Ecosystem: CVC (apex vigilance), CBI (central probe), Lokayukta (ombudsman), ACB Rajasthan (state trap & DA inquiries). Vigilance = Preventive + Punitive + Participative.",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Public work culture determines whether bureaucracy is process-obsessed or citizen-centric. Sustaining probity requires a tripartite vigilance strategy: preventive (e-governance, reducing discretion), punitive (swift investigation and prosecution by CVC, CBI, Lokayukta, and Rajasthan ACB), and participative (citizen reporting through ACB 1064 helpline and social audits).",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Institutional anti-corruption reform architecture: 1. Strengthen Rajasthan Lokayukta with autonomous investigative wings; 2. Enforce Section 17A of the Prevention of Corruption Act with strict 4-month sanction timelines; 3. Automate service delivery under the Rajasthan Guaranteed Delivery of Public Services Act 2011 to eliminate retail corruption.",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "Under the Rajasthan Lokayukta and Up-Lokayuktas Act, 1973, which of the following high-level functionaries is EXCLUDED from the investigative jurisdiction of the Lokayukta?",
        "options": [
          "Chief Minister of Rajasthan",
          "Ministers and Members of the Legislative Assembly",
          "Panchayat Samiti Pradhans",
          "Chairman of Municipal Corporations"
        ],
        "correctAnswer": "Chief Minister of Rajasthan",
        "explanation": "Under Section 2(m) and Section 3 of the Rajasthan Lokayukta and Up-Lokayuktas Act, 1973, the Chief Minister, members of the judiciary, and the RPSC Chairman/members are excluded from the Lokayukta’s jurisdiction.",
        "trapExplanation": "Watch for nuanced terminology differences.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "modelAnswer": "Chief Minister of Rajasthan"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Distinguish between \"Preventive Vigilance\" and \"Punitive Vigilance\" in public administration.",
        "correctAnswer": "**Preventive Vigilance** adopts proactive structural reforms—such as simplifying rules, digitizing public tenders, eliminating discretionary gatekeeping, and conducting surprise inspections—to reduce corruption opportunities. In contrast, **Punitive Vigilance** is post-facto and retributive, focusing on detecting, investigating, and penalizing corrupt acts through departmental inquiries and criminal prosecutions via agencies like the ACB and CVC.",
        "explanation": "",
        "trapExplanation": "Watch for nuanced terminology differences.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 50,
        "modelAnswer": "**Preventive Vigilance** adopts proactive structural reforms—such as simplifying rules, digitizing public tenders, eliminating discretionary gatekeeping, and conducting surprise inspections—to reduce corruption opportunities. In contrast, **Punitive Vigilance** is post-facto and retributive, focusing on detecting, investigating, and penalizing corrupt acts through departmental inquiries and criminal prosecutions via agencies like the ACB and CVC."
      }
    ]
  },
  {
    "id": "CON-BEH-001",
    "order": 12,
    "slug": "intelligence-cognitive-capacities-administrative-problem-solving",
    "title": "Intelligence & Cognitive Capacities: Theories of Intelligence, IQ, EQ & Administrative Problem-Solving",
    "shortDefinition": "The nature and theories of intelligence (Spearman two-factor, Gardner multiple intelligences, Sternberg triarchic theory), cognitive problem-solving, cognitive biases in bureaucratic decision-making, and the application of cognitive intelligence in public policy formulation.",
    "difficulty": "INTERMEDIATE",
    "topicSlug": "administrative-behavior",
    "topicTitle": "Administrative Behavior & Applied Psychology",
    "topicOrder": 2,
    "topicDescription": "Intelligence theories, personality traits, motivation, learning, attitude formation, and stress management in civil administration.",
    "subjectSlug": "ethics-behavior-sports",
    "claims": [
      {
        "id": "CLM-BEH-001",
        "statement": "Robert Sternberg’s Triarchic Theory of Intelligence conceptualizes human intelligence into three distinct subtheories: Analytical (componential), Creative (experiential), and Practical (contextual), with practical intelligence (\"street smarts\" and tacit knowledge) proving paramount in administrative problem-solving.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Robert J. Sternberg, Beyond IQ: A Triarchic Theory of Human Intelligence (1985)",
        "excerpt": "Practical intelligence is the ability that individuals use to find a more optimal fit between themselves and the demands of their environment through adapting to the environment, shaping (or modifying) the environment, or selecting a new environment."
      },
      {
        "id": "CLM-BEH-002",
        "statement": "Howard Gardner’s Multiple Intelligences Theory identifies eight distinct cognitive modalities (linguistic, logical-mathematical, spatial, bodily-kinesthetic, musical, interpersonal, intrapersonal, and naturalistic), refuting single-IQ metrics and validating diverse skillsets in public leadership.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Howard Gardner, Frames of Mind: The Theory of Multiple Intelligences (1983)",
        "excerpt": "An intelligence is the ability to solve problems, or to create products, that are valued within one or more cultural settings."
      },
      {
        "id": "CLM-BEH-003",
        "statement": "Administrative decision-making is systematically vulnerable to cognitive biases—notably confirmation bias, anchoring bias, groupthink, and availability heuristic—necessitating structured analytical debiasing protocols in civil governance.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Daniel Kahneman, Thinking, Fast and Slow (2011); Herbert Simon, Administrative Behavior",
        "excerpt": "Heuristics are quite useful, but sometimes they lead to severe and systematic errors. The confidence people have in their beliefs is not a measure of the quality of evidence but of the coherence of the story that the mind has managed to construct."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Beyond Academic IQ in Administrative Leadership",
        "body": "An officer may score 99th percentile on academic examinations, yet freeze during a communal riot or fail to resolve a complex agrarian crisis. Why? Because administrative success relies far less on abstract mathematical reasoning than on practical intelligence (Sternberg), interpersonal understanding (Gardner), and cognitive debiasing (Kahneman). Administrative intelligence is the capacity to diagnose messy, unstructured problems under acute time pressure and design workable solutions.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Major Cognitive & Intelligence Models Applied to Administration",
        "body": "| Theory / Model | Proponent | Core Constructs | Administrative Role & Application |\n|---|---|---|---|\n| **Two-Factor Theory** | Charles Spearman | General factor ($g$) and Specific factors ($s$) | Foundational cognitive ability enabling rapid comprehension of statutory rules and policy briefs |\n| **Triarchic Theory** | Robert Sternberg | 1. Analytical (componential)<br>2. Creative (experiential)<br>3. Practical (contextual / tacit knowledge) | Analytical for budget scrutiny; Creative for designing low-cost rural interventions; Practical for negotiating with local political stakeholders |\n| **Multiple Intelligences** | Howard Gardner | 8 intelligences (esp. Interpersonal, Intrapersonal, Linguistic, Naturalistic) | Interpersonal for conflict resolution and public grievance hearings; Naturalistic for disaster management and environmental planning |\n| **Dual-Process Theory** | Daniel Kahneman & Amos Tversky | System 1 (Fast, automatic, emotional)<br>System 2 (Slow, deliberate, logical) | Overcoming System 1 prejudice in law enforcement; engaging System 2 analytical auditing for public procurement |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "Cognitive Debiasing Protocol in Policy Decisions",
        "body": "To prevent cognitive failures in district administration: 1. **Premortem Analysis**: Before executing a policy or major event, gather team members and assume the project has failed disastrously; ask each member to write why it failed, surfacing buried concerns. 2. **Red-Teaming**: Appoint an independent internal officer to aggressively challenge underlying assumptions. 3. **Disconfirming Evidence Checks**: Actively seek data contradicting the dominant narrative, neutralizing confirmation bias. 4. **Algorithmic Checklists**: Implement standardized procedural checks to mitigate availability and anchoring heuristics.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC Examination Framework & Model Presentation",
        "body": "In RPSC Mains Paper II (Behavior Section - 20 Marks), questions regularly test the application of Sternberg’s Practical Intelligence or Gardner’s Multiple Intelligences in district administration. Avoid giving purely biological or psychometric definitions. Explicitly ground your answer in real administrative examples: e.g., how practical intelligence helps a Sub-Divisional Magistrate (SDM) negotiate with striking transport unions or defuse land-acquisition protests.",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Paper II - General Studies 2 (Behavior)",
        "relevance": "VERY_HIGH",
        "priority": "P2",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Marks weightage: ~5M"
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "General Studies Paper IV",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~4M"
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Studies Paper IV",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~4M"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "Paper IV - Psychology & Behavior",
        "relevance": "HIGH",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~6M"
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Paper 1",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~2M"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "Management & Behavioral Sciences",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~2M"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Studies",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~1M"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~1M"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Sternberg Triarchic: Analytical, Creative, Practical (Tacit knowledge for admin). Gardner: 8 Intelligences (Interpersonal/Intrapersonal vital). Kahneman: System 1 (Fast/Biased) vs System 2 (Slow/Deliberate).",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Intelligence in governance extends beyond academic IQ. Robert Sternberg highlights practical intelligence (tacit knowledge to navigate contextual environments), Howard Gardner proves the necessity of interpersonal and intrapersonal intelligences for leadership, and Kahneman’s dual-process model emphasizes the need for System 2 debiasing protocols against administrative heuristics and biases.",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Administrative Cognitive Architecture: Blend Spearman’s General Ability (rule comprehension) with Sternberg’s Practical Intelligence (ground negotiations) and Kahneman’s Debiasing Framework (pre-mortems and red-teaming) to ensure rigorous, evidence-based public decision-making.",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "According to Robert J. Sternberg’s Triarchic Theory of Intelligence, which dimension is most directly associated with tacit knowledge and adapting to real-world administrative environments?",
        "options": [
          "Analytical Intelligence",
          "Creative Intelligence",
          "Practical Intelligence",
          "Fluid Intelligence"
        ],
        "correctAnswer": "Practical Intelligence",
        "explanation": "Robert Sternberg’s Triarchic Theory identifies Practical Intelligence (contextual subtheory) as the capacity to adapt, shape, and select real-world environments through tacit knowledge (\"street smarts\"), crucial for resolving administrative field crises.",
        "trapExplanation": "Watch for nuanced terminology differences.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "modelAnswer": "Practical Intelligence"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Explain the administrative significance of Howard Gardner’s \"Interpersonal Intelligence\" for a Sub-Divisional Magistrate (SDM).",
        "correctAnswer": "Howard Gardner defines **Interpersonal Intelligence** as the ability to discern and respond appropriately to the moods, motivations, and intentions of others. For an SDM, it is vital for defusing communal and caste clashes, conducting empathetic public grievance hearings, mediating farmer protests, and inspiring subordinate block-level officials to achieve welfare targets.",
        "explanation": "",
        "trapExplanation": "Watch for nuanced terminology differences.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 50,
        "modelAnswer": "Howard Gardner defines **Interpersonal Intelligence** as the ability to discern and respond appropriately to the moods, motivations, and intentions of others. For an SDM, it is vital for defusing communal and caste clashes, conducting empathetic public grievance hearings, mediating farmer protests, and inspiring subordinate block-level officials to achieve welfare targets."
      }
    ]
  },
  {
    "id": "CON-BEH-002",
    "order": 13,
    "slug": "personality-determinants-trait-theories-civil-service",
    "title": "Personality & Determinants: Trait Theories (Big Five, Allport, Cattell) & Civil Service Aptitude",
    "shortDefinition": "Personality structure, psychoanalytic and trait theories (Gordon Allport, Raymond Cattell 16PF, Costa & McCrae Big Five / OCEAN model), locus of control, emotional maturity, and the desirable personality traits of a public administrator.",
    "difficulty": "INTERMEDIATE",
    "topicSlug": "administrative-behavior",
    "topicTitle": "Administrative Behavior & Applied Psychology",
    "topicOrder": 2,
    "topicDescription": "Intelligence theories, personality traits, motivation, learning, attitude formation, and stress management in civil administration.",
    "subjectSlug": "ethics-behavior-sports",
    "claims": [
      {
        "id": "CLM-BEH-004",
        "statement": "The Five-Factor Model (Big Five / OCEAN) by Costa and McCrae identifies five universal dimensions of personality: Openness to Experience, Conscientiousness, Extraversion, Agreeableness, and Neuroticism (Emotional Stability), with High Conscientiousness and Low Neuroticism being the strongest predictors of administrative integrity and crisis stability.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Paul T. Costa & Robert R. McCrae, Revised NEO Personality Inventory (NEO-PI-R) Manual (1992)",
        "excerpt": "Conscientiousness reflects an individual’s degree of organization, persistence, and motivation in goal-directed behavior... Emotional stability reflects emotional resilience and impulse control under stress."
      },
      {
        "id": "CLM-BEH-005",
        "statement": "Raymond Cattell utilized factor analysis to reduce personality traits into 16 source traits (16PF Questionnaire), distinguishing between observable surface traits and underlying, stable source traits that govern individual behavior.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Raymond B. Cattell, The Scientific Analysis of Personality (1965)",
        "excerpt": "Personality is that which permits a prediction of what a person will do in a given situation. Source traits are the structural elements of the personality."
      },
      {
        "id": "CLM-BEH-006",
        "statement": "Julian Rotter’s Locus of Control theory establishes that individuals with an Internal Locus of Control attribute outcomes to their own actions and effort, fostering administrative proactivity and accountability, whereas an External Locus of Control induces fatalism and bureaucratic buck-passing.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Julian B. Rotter, Generalized Expectancies for Internal Versus External Control of Reinforcement (1966)",
        "excerpt": "An individual who believes that an event is contingent upon his own behavior possesses an internal locus of control; if he perceives it as controlled by forces outside himself, he possesses an external locus of control."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Personality as the Executive Engine",
        "body": "Why does one civil servant confront corrupt syndicates with calm resolve while another in the same post succumbs to anxiety or seeks political patronage? Knowledge and legal powers are identical; the differentiator is personality. An administrator’s locus of control, emotional stability, conscientiousness, and resilience govern how power is exercised under extreme political and public pressure.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Big Five Personality Framework (OCEAN) in Civil Service",
        "body": "| Dimension | High Scorers Exhibit | Administrative Value in Civil Services | Potential Pitfalls of Extremes |\n|---|---|---|---|\n| **O - Openness to Experience** | Intellectual curiosity, innovative, receptive to reform | Embracing e-governance innovations, adaptive policy reforms, participatory rural planning | Restlessness with routine statutory compliance; over-theorizing |\n| **C - Conscientiousness** | Methodical, disciplined, duty-bound, organized | Highest predictor of administrative integrity, file tracking, zero-leakage scheme execution | Excessive perfectionism, administrative red-tape, inflexibility in crises |\n| **E - Extraversion** | Sociable, assertive, energetic, communicative | Public communication during disasters, media management, motivating subordinate teams | Excessive craving for public spotlight; impatience with quiet desk audits |\n| **A - Agreeableness** | Empathetic, cooperative, compassionate, trusting | Citizen-centric grievance redressal, inter-agency collaboration, community trust | Inability to enforce punitive action; vulnerability to predatory lobbyists |\n| **N - Neuroticism (Emotional Stability)** | Low = Calm, resilient, poised, self-assured | Composure during communal riots, resisting political intimidation, stress endurance | If high: erratic panic, paralysis under media scrutiny, administrative burnout |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "Internal Locus of Control & Executive Agency",
        "body": "Julian Rotter’s model explains administrative efficacy: 1. **Internal Locus**: The officer believes \"My leadership and resourcefulness determine whether this drought relief succeeds.\" Result: proactive resource mobilization, innovative community engagement, and accountability. 2. **External Locus**: The officer believes \"Nothing can be done because state budget allocations are delayed and political interference is rampant.\" Result: fatalism, apathy, and buck-passing. Developing an internal locus is vital for civil service transformative leadership.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Exam Framework for RPSC Mains 2-Mark & 5-Mark Questions",
        "body": "When RPSC tests the Big Five traits or Locus of Control: 1. Always write the exact psychological terms (OCEAN: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism/Emotional Stability). 2. Highlight that for a public servant, **High Conscientiousness + High Emotional Stability (Low Neuroticism) + Internal Locus of Control** form the foundational administrative personality profile. 3. Contrast internal vs. external locus using a real-world developmental scheme delivery scenario.",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Paper II - General Studies 2 (Behavior)",
        "relevance": "VERY_HIGH",
        "priority": "P2",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Marks weightage: ~5M"
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "General Studies Paper IV",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~4M"
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Studies Paper IV",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~4M"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "Paper IV - Personality & Attitudes",
        "relevance": "HIGH",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~6M"
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Paper 1",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~2M"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "Organizational Behavior",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~2M"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Studies",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~1M"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~1M"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Big Five (OCEAN): Openness, Conscientiousness (integrity/duty), Extraversion, Agreeableness (empathy), Neuroticism (low = emotional stability). Rotter: Internal Locus of Control drives executive proactivity.",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Personality models explain administrative conduct. Costa & McCrae’s OCEAN model shows that high conscientiousness ensures diligent execution while high emotional stability enables calm crisis management. Rotter’s Locus of Control demonstrates that administrators with internal orientation take personal responsibility for outcomes, combating bureaucratic fatalism and passivity.",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "The Ideal Administrative Personality Profile: 1. High Conscientiousness (ethical duty & rule fidelity); 2. Low Neuroticism / High Resilience (crisis stability); 3. High Internal Locus of Control (executive agency); 4. High Agreeableness balanced by firmness (compassionate justice).",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "Which dimension of the Big Five (OCEAN) personality model is scientifically recognized as the strongest predictor of job performance, methodical duty fulfillment, and administrative integrity?",
        "options": [
          "Extraversion",
          "Openness to Experience",
          "Conscientiousness",
          "Agreeableness"
        ],
        "correctAnswer": "Conscientiousness",
        "explanation": "Extensive psychological research confirms that Conscientiousness—characterized by diligence, organization, strong impulse control, and adherence to duty—is the single strongest predictor of administrative performance and ethical reliability.",
        "trapExplanation": "Watch for nuanced terminology differences.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "modelAnswer": "Conscientiousness"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Distinguish between \"Internal Locus of Control\" and \"External Locus of Control\" in the context of an administrative officer.",
        "correctAnswer": "An officer with an **Internal Locus of Control** believes outcomes depend on their own diligence, competence, and leadership, driving proactive crisis management and accountability. Conversely, an officer with an **External Locus of Control** attributes results to external forces (luck, fate, political interference), resulting in bureaucratic apathy, fatalism, and evasion of responsibility.",
        "explanation": "",
        "trapExplanation": "Watch for nuanced terminology differences.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 50,
        "modelAnswer": "An officer with an **Internal Locus of Control** believes outcomes depend on their own diligence, competence, and leadership, driving proactive crisis management and accountability. Conversely, an officer with an **External Locus of Control** attributes results to external forces (luck, fate, political interference), resulting in bureaucratic apathy, fatalism, and evasion of responsibility."
      }
    ]
  },
  {
    "id": "CON-BEH-003",
    "order": 14,
    "slug": "learning-motivation-attitude-change-administrative-communication",
    "title": "Learning, Motivation & Attitude Change: Theories of Motivation (Maslow, Herzberg, Vroom) & Persuasive Communication",
    "shortDefinition": "Principles of behavioral and cognitive learning, theories of workplace motivation (Maslow hierarchy, Herzberg two-factor, McClelland needs, Vroom expectancy theory), attitude formation, structural attitude change models (Elaboration Likelihood Model), and administrative persuasive communication.",
    "difficulty": "INTERMEDIATE",
    "topicSlug": "administrative-behavior",
    "topicTitle": "Administrative Behavior & Applied Psychology",
    "topicOrder": 2,
    "topicDescription": "Intelligence theories, personality traits, motivation, learning, attitude formation, and stress management in civil administration.",
    "subjectSlug": "ethics-behavior-sports",
    "claims": [
      {
        "id": "CLM-BEH-007",
        "statement": "Abraham Maslow’s Hierarchy of Needs and Frederick Herzberg’s Two-Factor Theory establish that higher-order motivators (recognition, responsibility, personal growth) drive sustained performance, whereas hygiene factors (salary, working conditions, supervision) merely prevent workplace dissatisfaction.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Frederick Herzberg, One More Time: How Do You Motivate Employees? Harvard Business Review (1968); Maslow (1943)",
        "excerpt": "The opposite of job satisfaction is not job dissatisfaction but, rather, no job satisfaction; and similarly, the opposite of job dissatisfaction is not job satisfaction, but no job dissatisfaction."
      },
      {
        "id": "CLM-BEH-008",
        "statement": "The Elaboration Likelihood Model (ELM) by Petty and Cacioppo identifies two distinct cognitive routes to attitude change: the Central Route (deep, systematic evaluation of factual arguments) and the Peripheral Route (heuristics, emotional cues, credible endorsers), both vital for public health and social change campaigns.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Richard E. Petty & John T. Cacioppo, Communication and Persuasion: Central and Peripheral Routes to Attitude Change (1986)",
        "excerpt": "Attitude changes induced via the central route involve greater cognitive effort, persist longer, resist counter-persuasion better, and are more predictive of behavior than changes induced via the peripheral route."
      },
      {
        "id": "CLM-BEH-009",
        "statement": "Victor Vroom’s Expectancy Theory posits that administrative motivation is a multiplicative product of Expectancy (effort leads to performance), Instrumentality (performance leads to reward), and Valence (value placed on the reward): Motivation = E × I × V.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Victor H. Vroom, Work and Motivation (1964)",
        "excerpt": "The force on an individual to perform an act is a function of the algebraic sum of the products of the valences of all outcomes and his expectancies that the act will lead to their attainment."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Inspiring Teams and Changing Public Mindsets",
        "body": "An administrator wears two behavioral hats: a team leader motivating government staff, and a social communicator persuading citizens to adopt new behaviors (e.g., vaccine adoption, toilet usage, water conservation). Financial bonuses are strictly restricted by government pay commissions, so an officer cannot simply hand out cash rewards. Instead, motivation and public persuasion depend on psychological mastery: tapping into intrinsic pride, removing bureaucratic friction, and crafting persuasive communication that permanently shifts social attitudes.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Workplace Motivation Theories in Public Administration",
        "body": "| Motivation Model | Core Principles | Administrative Application in Civil Services |\n|---|---|---|\n| **Maslow’s Hierarchy** | 5 Tiers: Physiological $\\rightarrow$ Safety $\\rightarrow$ Social $\\rightarrow$ Esteem $\\rightarrow$ Self-Actualization | Securing field staff basic needs (safety gear, timely allowances) before demanding self-actualized public commitment |\n| **Herzberg’s Two-Factor** | Hygiene Factors (prevent dissatisfaction) vs. Motivators (drive true satisfaction and high performance) | Hygiene: Fair postings, clean offices, transparent transfers. Motivators: Public commendation, challenging assignments, autonomy |\n| **McClelland’s Needs** | Need for Achievement ($nAch$), Affiliation ($nAff$), and Power ($nPow$) | Channeling $nAch$ into developmental targets; channel institutionalized $nPow$ into enforcing rule of law |\n| **Vroom’s Expectancy** | Motivation = Expectancy $\\times$ Instrumentality $\\times$ Valence | If an honest officer believes high performance leads to punitive transfers rather than recognition, motivation collapses to zero |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "The Elaboration Likelihood Model (ELM) for Public Campaigns",
        "body": "When launching district behavior-change campaigns (e.g., Beti Bachao, Jal Jeevan Mission): 1. **Assess Audience Motivation and Ability**: High motivation/ability audiences (panchayat heads, teachers) require the **Central Route** (rigorous data, health science, economic benefits, community ROI). 2. Low motivation/ability audiences require the **Peripheral Route** (credible local icons, folk theatre, relatable emotional storytelling, religious endorsements). 3. **Consolidation**: Reinforce peripheral shifts with institutional incentives until long-term cognitive internalization occurs.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Model Question Answering Strategy for RPSC Paper II",
        "body": "When asked to design a strategy to address employee demotivation or citizen resistance to government schemes: 1. Structure the response around Herzberg’s Hygiene vs. Motivator framework. 2. Address hygiene deficits first (delays in TA/DA bills, inadequate infrastructure). 3. Introduce intrinsic motivators (district excellence awards, letter of appreciation from Collector). 4. For citizen resistance, apply ELM central vs. peripheral communication strategies.",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Paper II - General Studies 2 (Behavior)",
        "relevance": "VERY_HIGH",
        "priority": "P2",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Marks weightage: ~5M"
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "General Studies Paper IV (Ethics & Attitude)",
        "relevance": "HIGH",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~6M"
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Studies Paper IV",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~4M"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "Paper IV - Motivation & Attitudes",
        "relevance": "HIGH",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~6M"
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Paper 1 - Industrial Relations & Psychology",
        "relevance": "MEDIUM",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~5M"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "Human Resource Management in Banks",
        "relevance": "MEDIUM",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~5M"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Studies",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~1M"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~1M"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Herzberg: Hygiene factors prevent dissatisfaction, Motivators inspire excellence. Vroom: Motivation = E × I × V. ELM Persuasion: Central Route (logic/data, lasting) vs Peripheral Route (cues/emotions, fast).",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Administrative motivation relies on psychological non-monetary incentives: Herzberg shows that hygiene factors (fair transfers, decent workspace) only remove dissatisfaction, while true motivation requires responsibility, autonomy, and public recognition. For community attitude change, Petty and Cacioppo’s ELM demonstrates that central route logical processing creates enduring social reform, while peripheral emotional cues initiate immediate mass adoption.",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Comprehensive Behavioral Change Protocol: 1. Diagnose employee barriers using Vroom’s Expectancy (clarify performance-reward linkages); 2. Provide Herzberg motivators (empowerment); 3. Deploy dual-route ELM communication to shift community social taboos into active civic participation.",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "Under Frederick Herzberg’s Two-Factor Theory of Motivation, which of the following is classified as a \"Motivator\" rather than a \"Hygiene Factor\"?",
        "options": [
          "Salary and compensation",
          "Working conditions and job security",
          "Challenging work and personal growth",
          "Interpersonal relations with supervisors"
        ],
        "correctAnswer": "Challenging work and personal growth",
        "explanation": "Under Herzberg’s Dual-Factor theory, salary, working conditions, and company policy are Hygiene factors (their presence merely prevents dissatisfaction). Motivators—such as challenging work, recognition, responsibility, and growth—are required to actively generate job satisfaction and superior motivation.",
        "trapExplanation": "Watch for nuanced terminology differences.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "modelAnswer": "Challenging work and personal growth"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Explain the \"Central Route\" versus \"Peripheral Route\" of persuasion under the Elaboration Likelihood Model (ELM) in public awareness campaigns.",
        "correctAnswer": "The **Central Route** involves high cognitive elaboration where audiences carefully evaluate substantive facts, data, and rational arguments, leading to durable and counter-resistant attitude change. The **Peripheral Route** involves low cognitive effort, relying on emotional appeals, attractive endorsers, or catchy slogans, inducing quick but comparatively transient behavioral compliance.",
        "explanation": "",
        "trapExplanation": "Watch for nuanced terminology differences.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 50,
        "modelAnswer": "The **Central Route** involves high cognitive elaboration where audiences carefully evaluate substantive facts, data, and rational arguments, leading to durable and counter-resistant attitude change. The **Peripheral Route** involves low cognitive effort, relying on emotional appeals, attractive endorsers, or catchy slogans, inducing quick but comparatively transient behavioral compliance."
      }
    ]
  },
  {
    "id": "CON-BEH-004",
    "order": 15,
    "slug": "stress-management-psychological-well-being-civil-services",
    "title": "Stress Management & Psychological Well-being: Stressors, Coping Strategies & Resilience in Civil Services",
    "shortDefinition": "Physiological and psychological nature of occupational stress (Hans Selye General Adaptation Syndrome), common administrative stressors (workload, political interference, public hostility), cognitive appraisal theory (Lazarus & Folkman), problem-focused vs. emotion-focused coping, and institutional burnout prevention.",
    "difficulty": "INTERMEDIATE",
    "topicSlug": "administrative-behavior",
    "topicTitle": "Administrative Behavior & Applied Psychology",
    "topicOrder": 2,
    "topicDescription": "Intelligence theories, personality traits, motivation, learning, attitude formation, and stress management in civil administration.",
    "subjectSlug": "ethics-behavior-sports",
    "claims": [
      {
        "id": "CLM-BEH-010",
        "statement": "Hans Selye’s General Adaptation Syndrome (GAS) outlines the three-stage physiological response to prolonged stress: Alarm Reaction, Resistance, and Exhaustion, explaining how chronic administrative stressors precipitate clinical burnout, psychosomatic illness, and decision paralysis.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Hans Selye, The Stress of Life (1956)",
        "excerpt": "Stress is the nonspecific response of the body to any demand... If exposure to the damaging agent is prolonged, the stage of resistance is followed by the stage of exhaustion where adaptation energy is entirely lost."
      },
      {
        "id": "CLM-BEH-011",
        "statement": "Richard Lazarus and Susan Folkman’s Transactional Model of Stress establishes that stress arises not from environmental demands alone, but from the cognitive appraisal of those demands (Primary Appraisal: threat vs. challenge) and available coping resources (Secondary Appraisal).",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Richard S. Lazarus & Susan Folkman, Stress, Appraisal, and Coping (1984)",
        "excerpt": "Psychological stress is a particular relationship between the person and the environment that is appraised by the person as taxing or exceeding his or her resources and endangering his or her well-being."
      },
      {
        "id": "CLM-BEH-012",
        "statement": "Effective stress intervention differentiates between Problem-Focused Coping (directly modifying the stressor through time management, task delegation, and institutional protocols) and Emotion-Focused Coping (cognitive reframing, mindfulness, and social support), with balanced integration yielding executive resilience.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Lazarus & Folkman (1984); American Psychological Association (APA) Occupational Health Guidelines",
        "excerpt": "Problem-focused coping is aimed at altering or managing the source of the problem, while emotion-focused coping is directed toward regulating emotional distress."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Pressure Cooker of Public Administration",
        "body": "A District Magistrate or Sub-Divisional Officer operates in an relentless vortex: 24/7 disaster duty, emergent law and order crises, unyielding political pressures, hostile media scrutiny, and hundreds of distressed citizens seeking relief daily. Without rigorous psychological coping tools, an administrator inevitably slides from dedication into cynicism, chronic fatigue, and executive burnout. Managing stress is not a personal luxury; it is a professional prerequisite for sound governance.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Stress Typology & Coping Matrix in Administration",
        "body": "| Dimension | Concept / Mechanism | Manifestation in Public Administration | Strategic Intervention |\n|---|---|---|---|\n| **Physiological Stress (Selye GAS)** | Alarm $\\rightarrow$ Resistance $\\rightarrow$ Exhaustion | Chronic insomnia, hypertension, emotional numbness after prolonged election/crisis duty | Regular aerobic exercise, institutional leave rotation, circadian sleep hygiene |\n| **Cognitive Appraisal (Lazarus)** | Primary Appraisal (Threat vs. Challenge)<br>Secondary Appraisal (Resource assessment) | Viewing a VIP visit or public protest as an existential threat rather than a manageable operational challenge | Cognitive restructuring: reframing high-pressure assignments into opportunities to demonstrate leadership |\n| **Problem-Focused Coping** | Altering external reality | Unmanageable file backlog, disorganised meeting schedules, redundant reports | Eisenhower matrix prioritization, effective delegation, digitizing workflow on e-Office |\n| **Emotion-Focused Coping** | Regulating internal emotional state | Acute anxiety from public protests, anger from unfair political pressure | Diaphragmatic breathing, mindfulness, debriefing with trusted peer mentors, sports |\n| **Institutional Buffers** | Organizational support systems | Total lack of institutional counseling in civil services leading to isolation | Establishing peer-support helplines, sabbatical programs, psychological wellness retreats |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "Cognitive Reframing Protocol for Crisis Situations",
        "body": "When an unexpected crisis erupts (e.g., flash flood or bridge collapse): 1. **Physiological Grounding**: Stop, take three 4-second box breaths (inhale 4s, hold 4s, exhale 4s, hold 4s) to dampen sympathetic nervous system hijack. 2. **Cognitive Reappraisal**: Convert the inner monologue from \"Everything is ruined\" to \"This is an acute operational problem with distinct, solvable sub-components.\" 3. **Action Triage**: Segregate facts from rumors; execute immediate life-safety actions; delegate communication and logistics to pre-designated nodal officers.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC Scoring Strategy & Practical Prescriptions",
        "body": "In RPSC Mains Paper II Behavior questions on stress management: 1. Always cite Selye’s GAS stages (Alarm, Resistance, Exhaustion) and Lazarus’s Cognitive Appraisal. 2. Explicitly separate personal coping strategies (Yogic Pranayama, physical fitness, cognitive reframing) from institutional interventions (workload rationalization, mental health support cells in administrative academies like HCM RIPA Jaipur).",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Paper II - General Studies 2 (Behavior)",
        "relevance": "VERY_HIGH",
        "priority": "P2",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Marks weightage: ~5M"
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "General Studies Paper IV (Ethics & Aptitude)",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~4M"
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Studies Paper IV",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~4M"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "Paper IV - Psychological Health",
        "relevance": "HIGH",
        "priority": "P2",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~6M"
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Paper 1",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~2M"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "Organizational Behavior",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~2M"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Studies",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~1M"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~1M"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Selye GAS: Alarm, Resistance, Exhaustion (Burnout). Lazarus: Cognitive appraisal (Threat vs Challenge). Coping: Problem-focused (time/delegation) + Emotion-focused (mindfulness/exercise).",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Occupational stress in civil administration follows Hans Selye’s General Adaptation Syndrome, progressing to exhaustion if chronic stress is unmitigated. Under Lazarus’s transactional model, cognitive appraisal determines whether an event is seen as a threat or a challenge. Resilience requires combining problem-focused coping (streamlined workflows, effective delegation) with emotion-focused coping (mindfulness, physical sports, cognitive reframing).",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Integrated Administrative Resilience Blueprint: 1. Individual Tier: Aerobic physical exercise, Pranayama, cognitive reframing; 2. Operational Tier: Eisenhower prioritization, e-Office workflow automation; 3. Institutional Tier: HCM RIPA wellness modules, institutional counseling cells, and mandatory post-crisis rest cycles.",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "In Hans Selye’s General Adaptation Syndrome (GAS), which stage occurs when the body’s resources are depleted after continuous, unmitigated exposure to severe stress, leading to psychosomatic illness and burnout?",
        "options": [
          "Alarm Reaction Stage",
          "Stage of Resistance",
          "Stage of Exhaustion",
          "Cognitive Appraisal Stage"
        ],
        "correctAnswer": "Stage of Exhaustion",
        "explanation": "Under Hans Selye’s General Adaptation Syndrome (GAS), the third stage is the Stage of Exhaustion, wherein physiological and psychological adaptive reserves are exhausted, resulting in burnout, immune dysfunction, and severe performance decline.",
        "trapExplanation": "Watch for nuanced terminology differences.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "modelAnswer": "Stage of Exhaustion"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Differentiate between \"Problem-Focused Coping\" and \"Emotion-Focused Coping\" strategies for an administrative officer facing acute work pressure.",
        "correctAnswer": "**Problem-Focused Coping** directly targets and mitigates the external stressor itself through proactive actions such as time management, delegating routine tasks, reorganizing file workflows, and establishing standard operating procedures. In contrast, **Emotion-Focused Coping** manages the internal psychological and affective distress through cognitive reappraisal, mindfulness, physical exercise, and peer debriefing.",
        "explanation": "",
        "trapExplanation": "Watch for nuanced terminology differences.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 50,
        "modelAnswer": "**Problem-Focused Coping** directly targets and mitigates the external stressor itself through proactive actions such as time management, delegating routine tasks, reorganizing file workflows, and establishing standard operating procedures. In contrast, **Emotion-Focused Coping** manages the internal psychological and affective distress through cognitive reappraisal, mindfulness, physical exercise, and peer debriefing."
      }
    ]
  },
  {
    "id": "CON-SPO-001",
    "order": 16,
    "slug": "rajasthan-sports-policy-awards-infrastructure",
    "title": "Rajasthan Sports Policy, Institutional Infrastructure & Sports Awards: RSSC, Maharana Pratap & Guru Vashishta Awards",
    "shortDefinition": "Rajasthan Sports Policy, Rajasthan State Sports Council (RSSC), apex sports infrastructure (SMS Stadium Jaipur, youth hostels, academies), cash incentives for international medalists, Out-of-Turn Appointment Rules for sportspersons, and prestigious state sports honors (Maharana Pratap Award, Guru Vashishta Award).",
    "difficulty": "INTERMEDIATE",
    "topicSlug": "sports-and-yoga",
    "topicTitle": "Sports Policy, Traditional Games & Yoga",
    "topicOrder": 3,
    "topicDescription": "Rajasthan sports policy, awards, traditional rural/urban games, Patanjali Ashtanga Yoga, and physical-mental wellness.",
    "subjectSlug": "ethics-behavior-sports",
    "claims": [
      {
        "id": "CLM-SPO-001",
        "statement": "The Rajasthan State Sports Council (RSSC), established in 1957 as the apex sports governance body under the Youth Affairs and Sports Department, oversees sports federations, maintains public stadiums, runs regional coaching academies, and implements state sports policies.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Rajasthan State Sports Council (RSSC) Charter; Youth Affairs & Sports Dept., Govt. of Rajasthan",
        "excerpt": "The Rajasthan State Sports Council is the nodal authority for the promotion, coordination, and development of sports activities, sports academies, and infrastructure across Rajasthan."
      },
      {
        "id": "CLM-SPO-002",
        "statement": "Under the Rajasthan Sports Award framework, the Maharana Pratap Award (instituted 1982-83) is the highest state honor for outstanding sportspersons, while the Guru Vashishta Award (instituted 1985-86) is conferred upon eminent sports coaches, with the prize purse enhanced to ₹5 Lakh each.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Govt. of Rajasthan Notification No. F.7(1)Khel/2022; RSSC Award Guidelines",
        "excerpt": "The prize money for the prestigious Maharana Pratap Award and Guru Vashishta Award has been increased from ₹1 Lakh to ₹5 Lakh to honor exceptional athletic and coaching excellence."
      },
      {
        "id": "CLM-SPO-003",
        "statement": "The Rajasthan Out-of-Turn Appointment to Sportspersons Rules provide direct gazetted appointments (including Rajasthan Administrative Service - RAS and Rajasthan Police Service - RPS) to Olympic, Paralympic, and Asian Games medalists, accompanied by cash awards up to ₹3 Crore for Olympic Gold.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Rajasthan Out-of-Turn Appointment to Sports Medal Winners Rules, 2017 (amended 2020/2022); DOP Rajasthan",
        "excerpt": "Medal winners in Olympic Games shall be awarded ₹3 Crore (Gold), ₹2 Crore (Silver), and ₹1 Crore (Bronze) and eligible for appointment to State Services including RAS/RPS."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Empowering Youth & Institutionalizing Sports Culture",
        "body": "Rajasthan historically produced legends in polo, shooting, archery, and athletics (from Karni Singh and Rajyavardhan Rathore to Devendra Jhajharia and Avani Lekhara). For decades, athletes struggled with poverty and job insecurity. Today, Rajasthan’s sports architecture has been revolutionized through lucrative cash prizes (up to ₹3 Crore), guaranteed gazetted jobs (Out-of-Turn appointments into RAS/RPS), and world-class training academies under RSSC.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Rajasthan Sports Awards, Policy & Incentives Matrix",
        "body": "| Scheme / Award | Institute Year | Eligible Beneficiary | Enhanced Incentive / Benefit |\n|---|---|---|---|\n| **Maharana Pratap Award** | 1982–83 | Outstanding sportspersons of Rajasthan excelling in National/International sports | ₹5 Lakh cash prize, bronze citation, blazer, and lifelong state recognition |\n| **Guru Vashishta Award** | 1985–86 | Eminent sports coaches for producing medal-winning athletes | ₹5 Lakh cash prize, bronze citation, ceremonial blazer |\n| **Olympic Cash Incentives** | 2020 / 2022 Policy | Olympic & Paralympic medalists from Rajasthan | Gold: ₹3 Crore<br>Silver: ₹2 Crore<br>Bronze: ₹1 Crore |\n| **Asian / CWG Incentives** | State Policy | Asian Games & Commonwealth Games medalists | Gold: ₹1 Crore<br>Silver: ₹60 Lakh<br>Bronze: ₹30 Lakh |\n| **Out-of-Turn Appointments** | 2017 (Amended) | Medal winners in Olympic, Asian, Paralympic, and World Championships | Direct recruitment into State Services (RAS, RPS, Subordinate Services) with pay protection |\n| **Sports Pension Scheme** | RSSC Guidelines | Veteran international medalists / Olympians aged 40+ years | Monthly financial pension of ₹20,000 for lifelong financial dignity |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "Institutional Sports Architecture in Rajasthan",
        "body": "The sports promotion ecosystem operates across three tiers: 1. **Apex Governance**: Rajasthan State Sports Council (RSSC, Jaipur) manages the Sawai Mansingh (SMS) Stadium complex, multi-purpose indoor arenas, and all-weather athletic tracks. 2. **District Level**: District Sports Offices and District Sports Stadiums in every district headquarters conducting regular coaching camps. 3. **Grassroots Academies**: Specialized government sports academies (e.g., Archery Academy at Dungarpur, Athletics Academy at Ganganagar, Kabaddi Academy at Dausa) offering subsidized boarding, sports science, and professional coaching.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC Mains Question Blueprint & Examiner Traps",
        "body": "Examiner Trap: Quoting outdated prize amounts. Remember that Maharana Pratap and Guru Vashishta awards were enhanced to ₹5 Lakh (from ₹1 Lakh). Olympic cash awards are ₹3 Cr / ₹2 Cr / ₹1 Cr. Always highlight the inclusion of Paralympic athletes on par with able-bodied athletes in all state award and employment policies (citing champions like Devendra Jhajharia, Avani Lekhara, Krishna Nagar, and Sundar Singh Gurjar).",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Paper II - General Studies 2 (Sports & Yoga)",
        "relevance": "VERY_HIGH",
        "priority": "P2",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Marks weightage: ~7M"
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Current Affairs",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~2M"
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "State Sports Schemes",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~2M"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "General Studies",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~2M"
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Paper 1",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~1M"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Awareness (Sports)",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~3M"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Studies",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~1M"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~3M"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "RSSC (1957, Jaipur). Maharana Pratap Award: Sportspersons (₹5 Lakh). Guru Vashishta Award: Coaches (₹5 Lakh). Olympic Gold: ₹3 Crore + Out-of-turn RAS/RPS appointment.",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Rajasthan sports governance is led by the Rajasthan State Sports Council (RSSC, est. 1957). The state confers the Maharana Pratap Award (for athletes) and Guru Vashishta Award (for coaches), both enhanced to ₹5 Lakh cash prizes. Under the modern sports policy, Olympic medalists receive up to ₹3 Crore and direct Out-of-Turn recruitment into state gazetted posts (RAS/RPS), with equal incentives extended to Paralympians.",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Rajasthan 3-Tier Sports Promotion Framework: 1. Institutional Governance (RSSC, SMS Stadium, DSOs); 2. Talent Incubation (District sports academies in Archery, Athletics, Kabaddi); 3. Financial & Livelihood Security (₹3 Cr Olympic cash incentives, ₹5 Lakh state awards, and Out-of-Turn appointments into civil services).",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "What is the current enhanced cash prize awarded to recipients of the prestigious Maharana Pratap Award and Guru Vashishta Award in Rajasthan?",
        "options": [
          "₹1 Lakh",
          "₹2 Lakh",
          "₹3 Lakh",
          "₹5 Lakh"
        ],
        "correctAnswer": "₹5 Lakh",
        "explanation": "The Government of Rajasthan enhanced the cash prize for both the Maharana Pratap Award (highest sports award for athletes) and the Guru Vashishta Award (highest award for coaches) from ₹1 Lakh to ₹5 Lakh.",
        "trapExplanation": "Watch for nuanced terminology differences.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "modelAnswer": "₹5 Lakh"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Write a brief note on the \"Out-of-Turn Appointment Rules\" for sportspersons in Rajasthan.",
        "correctAnswer": "Under the **Rajasthan Out-of-Turn Appointment to Sports Medal Winners Rules**, the state government provides direct recruitment into State Services (including the Rajasthan Administrative Service - RAS and Rajasthan Police Service - RPS) for medalists of Olympic, Paralympic, Asian, and Commonwealth Games. This policy guarantees livelihood security, career prestige, and social status to elite athletes.",
        "explanation": "",
        "trapExplanation": "Watch for nuanced terminology differences.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 50,
        "modelAnswer": "Under the **Rajasthan Out-of-Turn Appointment to Sports Medal Winners Rules**, the state government provides direct recruitment into State Services (including the Rajasthan Administrative Service - RAS and Rajasthan Police Service - RPS) for medalists of Olympic, Paralympic, Asian, and Commonwealth Games. This policy guarantees livelihood security, career prestige, and social status to elite athletes."
      }
    ]
  },
  {
    "id": "CON-SPO-002",
    "order": 17,
    "slug": "rural-urban-olympics-traditional-sports-talent-identification",
    "title": "Rural & Urban Olympic Games, Traditional Sports of Rajasthan & Grassroots Talent Identification",
    "shortDefinition": "Rajiv Gandhi Rural and Urban Olympic Games: multi-tiered structure, mass sports democratization, social harmony, traditional games (Kabaddi, Kho-Kho, Shooting Ball, Gulli-Danda, Sitolia), grassroots sports talent scouting, and health culture.",
    "difficulty": "INTERMEDIATE",
    "topicSlug": "sports-and-yoga",
    "topicTitle": "Sports Policy, Traditional Games & Yoga",
    "topicOrder": 3,
    "topicDescription": "Rajasthan sports policy, awards, traditional rural/urban games, Patanjali Ashtanga Yoga, and physical-mental wellness.",
    "subjectSlug": "ethics-behavior-sports",
    "claims": [
      {
        "id": "CLM-SPO-004",
        "statement": "The Rajiv Gandhi Rural Olympic Games (Khel Mahakumbh), launched in 2022, established a world-record sports democratization initiative mobilizing over 30 lakh rural participants across 4 administrative tiers: Gram Panchayat, Block, District, and State levels.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Youth Affairs & Sports Department, Govt. of Rajasthan (2022-23 Notification); World Book of Records London Citation",
        "excerpt": "The Rajiv Gandhi Rural Olympic Games mobilized over 30 lakh citizens of all age groups, promoting grassroots physical health, traditional rural sports, and communal harmony."
      },
      {
        "id": "CLM-SPO-005",
        "statement": "The Rural and Urban Olympics officially integrated traditional indigenous games including Kabaddi, Kho-Kho (for women), Shooting Ball, Tennis-Ball Cricket, Volleyball, and Football, revitalizing indigenous sports heritage.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "RSSC Rajiv Gandhi Rural & Urban Olympics Competition Manual (2022-2023)",
        "excerpt": "The competitions feature traditional and popular games suited for mass community participation: Kabaddi, Shooting Ball, Volleyball, Tennis-Ball Cricket, Kho-Kho, and Football."
      },
      {
        "id": "CLM-SPO-006",
        "statement": "Mass community sports events serve as a primary mechanism for early childhood and youth talent identification, connecting rural grassroots athletes directly to state-funded sports excellence academies and high-performance training camps.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Sports Authority of India (SAI) Grassroots Talent Scouting Guidelines; RSSC Annual Report",
        "excerpt": "Panchayat-level mass sports competitions serve as the broad base of the sports pyramid, enabling talent scouts to discover natural athletic potential from remote rural belts."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Sports as a Vehicle for Social Cohesion",
        "body": "In many rural areas, caste divisions and gender restrictions restrict community interaction. The Rural Olympic Games shattered these barriers. When a 60-year-old grandmother plays alongside a 14-year-old schoolgirl in Kho-Kho, or youths from different castes share the Kabaddi mat under floodlights at the Panchayat stadium, sports becomes far more than physical fitness—it transforms into an engine of social harmony, women empowerment, and community solidarity.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Operational Blueprint of Rajasthan Rural & Urban Olympics",
        "body": "| Feature | Rural Olympics Framework | Urban Olympics Framework | Social / Administrative Objective |\n|---|---|---|---|\n| **Administrative Tiers** | 4 Tiers: Gram Panchayat $\\rightarrow$ Block $\\rightarrow$ District $\\rightarrow$ State | 3 Tiers: Ward / Municipal Body $\\rightarrow$ District $\\rightarrow$ State | Decentralized sports administration involving local PRIs and Urban Local Bodies |\n| **Games Included** | Kabaddi, Shooting Ball (Boys), Volleyball, Tennis-Ball Cricket, Kho-Kho (Girls), Football | Kabaddi, Tennis-Ball Cricket, Volleyball, Football, Basketball, Athletics (100m, 200m, 400m), Kho-Kho | Revitalizing traditional games; low-cost participation requiring minimal specialized gear |\n| **Participation Scope** | Open to all age groups (no upper age bar); massive mobilization of women and seniors | Open across all wards of Municipal Corporations, Councils, and Municipalities | Democratizing physical activity; combating urban sedentary lifestyle diseases |\n| **Talent Funnel** | Scouts deployed at District & State finals to award academy scholarships | Screening by RSSC coaches for enrollment in specialized urban sports hostels | Creating an uninterrupted pipeline from village sand to international podiums |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "Talent Scouting & Nurturing Pipeline",
        "body": "The grassroots talent funnel operates in 4 steps: 1. **Mass Identification**: Electronic registration via dedicated state portal at the Panchayat level. 2. **Performance Auditing**: RSSC coaches and physical training instructors (PTIs) monitor district finals, logging physical parameters (speed, vertical leap, endurance). 3. **Induction into Residential Academies**: Outstanding performers are admitted into fully funded state sports academies. 4. **Scientific Coaching**: Athletes receive specialized sports science, nutrition, injury management, and exposure to National Games.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC Mains Analytical Answer Writing Tactics",
        "body": "In RPSC Mains Paper II, do not limit your discussion of Rural/Urban Olympics to a list of sports. Frame the initiative as a multidimensional administrative policy: 1. **Public Health** (combating lifestyle diseases, obesity, drug addiction in border districts like Sri Ganganagar/Hanumangarh); 2. **Social Equity** (breaking caste taboos, fostering village unity); 3. **Gender Empowerment** (rural women competing in sports uniforms outside domestic confines); 4. **Grassroots Sports Infrastructure** (development of playgrounds in thousands of Gram Panchayats).",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Paper II - General Studies 2 (Sports & Yoga)",
        "relevance": "VERY_HIGH",
        "priority": "P2",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Marks weightage: ~7M"
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "General Studies Paper II (Social Schemes)",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~2M"
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "Sports Schemes",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~2M"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "General Studies",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~2M"
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Paper 1",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~1M"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Awareness",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~3M"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Studies",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~1M"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~3M"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Rural Olympics (2022): 30+ Lakh participants across 4 tiers (Panchayat to State). Games: Kabaddi, Kho-Kho, Shooting Ball, Volleyball, Cricket, Football. Fosters social cohesion & talent scouting.",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "The Rajiv Gandhi Rural and Urban Olympic Games represent a landmark mass sports movement in Rajasthan, mobilizing over 30 lakh citizens across four tiers (Gram Panchayat, Block, District, State). Featuring traditional games like Kabaddi, Kho-Kho, and Shooting Ball, the games advance multiple governance goals: fostering inter-caste social harmony, driving female empowerment, curbing rural drug abuse, and feeding athletic talent into state academies.",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Holistic Impact Matrix of Mass Sports: 1. Social Capital (Inter-caste unity and community pride); 2. Gender Inclusivity (Massive female athletic participation); 3. Public Health (Preventive wellness); 4. Athletic Pipeline (Panchayat scouting $\\rightarrow$ RSSC residential sports academies).",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "Which of the following traditional games was specifically designated for girls/women participants in the Rajasthan Rural Olympic Games?",
        "options": [
          "Shooting Ball",
          "Kho-Kho",
          "Tennis-Ball Cricket",
          "Football"
        ],
        "correctAnswer": "Kho-Kho",
        "explanation": "In the official game roster of the Rajiv Gandhi Rural Olympic Games, Kho-Kho was organized exclusively for girls and women, while Shooting Ball was designated exclusively for boys/men.",
        "trapExplanation": "Watch for nuanced terminology differences.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "modelAnswer": "Kho-Kho"
      },
      {
        "type": "DESCRIPTIVE_5M",
        "stem": "Explain the socio-cultural significance of the Rural Olympic Games in Rajasthan.",
        "correctAnswer": "The Rural Olympic Games catalyzed significant socio-cultural transformation in Rajasthan: 1. **Social Harmony**: Brought diverse caste and religious groups onto shared playing fields; 2. **Women Empowerment**: Encouraged rural women of all ages to step into public spaces in sports attire; 3. **Cultural Revival**: Revitalized traditional games like Kabaddi and Kho-Kho; and 4. **Youth Channelization**: Diverted youth energy away from substance abuse into fitness and sports.",
        "explanation": "",
        "trapExplanation": "Watch for nuanced terminology differences.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 50,
        "modelAnswer": "The Rural Olympic Games catalyzed significant socio-cultural transformation in Rajasthan: 1. **Social Harmony**: Brought diverse caste and religious groups onto shared playing fields; 2. **Women Empowerment**: Encouraged rural women of all ages to step into public spaces in sports attire; 3. **Cultural Revival**: Revitalized traditional games like Kabaddi and Kho-Kho; and 4. **Youth Channelization**: Diverted youth energy away from substance abuse into fitness and sports."
      }
    ]
  },
  {
    "id": "CON-SPO-003",
    "order": 18,
    "slug": "patanjali-ashtanga-yoga-pranayama-wellness",
    "title": "Patanjali Ashtanga Yoga, Pranayama & Physical Fitness: Physiological & Mental Wellness for Administrators",
    "shortDefinition": "Classical Yoga philosophy: Patanjali Yoga Sutras, Ashtanga Yoga (Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, Samadhi), neurobiology of Pranayama (Kapalabhati, Anulom-Vilom, Bhramari), Surya Namaskar, stress mitigation, and civil servant mental health.",
    "difficulty": "INTERMEDIATE",
    "topicSlug": "sports-and-yoga",
    "topicTitle": "Sports Policy, Traditional Games & Yoga",
    "topicOrder": 3,
    "topicDescription": "Rajasthan sports policy, awards, traditional rural/urban games, Patanjali Ashtanga Yoga, and physical-mental wellness.",
    "subjectSlug": "ethics-behavior-sports",
    "claims": [
      {
        "id": "CLM-SPO-007",
        "statement": "Maharishi Patanjali’s Yoga Sutras define Yoga as \"Yogas Chitta Vritti Nirodha\" (the cessation of the fluctuations of the mind) and codify the Eight Limbs of Yoga (Ashtanga Yoga): Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, and Samadhi.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Patanjali Yoga Sutras, Chapter 1 (Samadhi Pada, Verse 2) & Chapter 2 (Sadhana Pada, Verse 29)",
        "excerpt": "Yogas chitta vritti nirodhah. Yama niyamasana pranayama pratyahara dharana dhyana samadhayo’shtavangani."
      },
      {
        "id": "CLM-SPO-008",
        "statement": "The five Yamas (social moral restraints: Ahimsa, Satya, Asteya, Brahmacharya, Aparigraha) and five Niyamas (personal ethical observances: Shaucha, Santosha, Tapas, Svadhyaya, Ishvara Pranidhana) constitute the ethical foundation of yogic discipline, directly mirroring administrative integrity.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "Patanjali Yoga Sutras, Chapter 2, Verses 30-32",
        "excerpt": "Ahimsa-satya-asteya-brahmacharya-aparigraha yamah. Saucha-santosha-tapah-svadhyaya-isvarapranidhanani niyamah."
      },
      {
        "id": "CLM-SPO-009",
        "statement": "Neuroscientific studies confirm that regular practice of Pranayama (regulated yogic breathing, e.g., Nadi Shodhana / Anulom-Vilom and Bhramari) stimulates the vagus nerve, enhances parasympathetic tone, decreases salivary cortisol, and improves prefrontal executive functioning.",
        "claimType": "AXIOMATIC_FOUNDATION",
        "epistemicLevel": "CANONICAL_CONSENSUS",
        "confidence": "VERY_HIGH",
        "locator": "International Journal of Yoga (IJOY); National Center for Complementary and Integrative Health (NIH)",
        "excerpt": "Slow yogic breathing increases heart rate variability (HRV), upregulates parasympathetic activity, and reduces markers of autonomic sympathetic arousal and psychological anxiety."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "Mastering the Mind for Calm Governance",
        "body": "Yoga is widely misunderstood in the commercial world as mere physical gymnastics or contortionism. In its classical philosophical form codified by Patanjali, physical postures (Asana) represent only 1 of 8 sequential limbs. Yoga is an integrated psycho-physiological science aimed at stilling the agitations of consciousness (Chitta Vritti). For an administrator, daily yoga is the ultimate tool to maintain inner tranquility, clear moral discernment, and physiological stamina amid turbulent crises.",
        "order": 1,
        "visibility": "PUBLIC"
      },
      {
        "type": "CORE_IDEA",
        "title": "Patanjali’s Ashtanga Yoga (Eight Limbs) Architecture",
        "body": "| Limb (Anga) | Meaning & Core Components | Physiological / Psychological Impact | Administrative Parallel & Significance |\n|---|---|---|---|\n| **1. Yama** | 5 Universal Ethical Restraints:<br>• Ahimsa (Non-violence)<br>• Satya (Truthfulness)<br>• Asteya (Non-stealing)<br>• Brahmacharya (Chastity/Energy restraint)<br>• Aparigraha (Non-possessiveness) | Eliminates interpersonal conflict; dissolves guilt and external moral friction | Essential civil service ethics: honesty in file notings, zero corruption (*Asteya* & *Aparigraha*), humane law enforcement (*Ahimsa*) |\n| **2. Niyama** | 5 Personal Observances:<br>• Shaucha (Purity)<br>• Santosha (Contentment)<br>• Tapas (Disciplined effort)<br>• Svadhyaya (Self-study/Reflective reading)<br>• Ishvara Pranidhana (Surrender to higher ideals) | Builds inner fortitude, emotional contentment, and cognitive clarity | Administrative dedication, resistance to ostentation/bribery (*Santosha*), lifelong professional learning (*Svadhyaya*) |\n| **3. Asana** | Steady and comfortable physical posture (*Sthira Sukham Asanam*) | Musculoskeletal strength, spinal alignment, endurance during long desk hours | Physical stamina required for 18-hour continuous emergency duties during crises |\n| **4. Pranayama** | Breath regulation (Inhalation, Retention, Exhalation) | Vagal nerve stimulation, parasympathetic activation, reduction of cortisol | Prevents panic reactions; restores physiological calm during heated public confrontations |\n| **5. Pratyahara** | Withdrawal of the senses from external distractions | Dampens sensory overload and impulsive emotional reactivity | Resisting media hysterics, sensational rumors, and lobbyist flattery |\n| **6. Dharana** | Focused mental concentration on a single object | Enhanced cognitive focus, sustained attention span | In-depth analysis of complex legal briefs, audit trails, and policy drafts |\n| **7. Dhyana** | Uninterrupted meditative awareness | Cognitive integration, deep insight, emotional equanimity | Impartial, reflective judgment unclouded by anger or prejudice |\n| **8. Samadhi** | Superconscious state of complete absorption | Transcendence of ego; ultimate unity consciousness | Highest state of selfless public service (*Lokasangraha*); dissolving ego in civic welfare |",
        "order": 2,
        "visibility": "PUBLIC"
      },
      {
        "type": "MECHANISM",
        "title": "Pranayama Protocols for Rapid Stress De-escalation",
        "body": "When an officer experiences acute sympathetic arousal (rapid heart rate, shallow breathing, cognitive tunnel vision): 1. **Nadi Shodhana (Alternate Nostril Breathing)**: Closes right nostril, inhales slowly through left (4s), holds (4s), exhales through right (4s), and reverses. Balances autonomic hemispheres. 2. **Bhramari (Humming Bee Breath)**: Exhales while producing a low-pitch humming vibration; releases nitric oxide, lowers blood pressure, and induces rapid neural calm. 3. Practice 5 minutes daily before chairing tense grievance redressed hearings.",
        "order": 3,
        "visibility": "PUBLIC"
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "RPSC Examination Scoring Blueprint",
        "body": "In RPSC Mains Paper II (Sports & Yoga Section - 20 Marks): 1. Quote the Sanskrit aphorism: \"Yogas Chitta Vritti Nirodhah\" (Patanjali Yoga Sutra 1.2) and \"Sthira Sukham Asanam\" (2.46). 2. List all 8 limbs of Ashtanga Yoga in exact sequential order (Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, Samadhi). 3. Explicitly link Yama and Niyama to civil service integrity, and Pranayama to neuro-autonomic stress management.",
        "order": 4,
        "visibility": "PUBLIC"
      }
    ],
    "examMappings": [
      {
        "examCode": "RPSC_RAS",
        "syllabusUnit": "Paper II - General Studies 2 (Sports & Yoga)",
        "relevance": "VERY_HIGH",
        "priority": "P1",
        "requiredDepth": "EXHAUSTIVE",
        "notes": "Marks weightage: ~8M"
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "General Studies Paper IV (Stress & Health)",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~2M"
      },
      {
        "examCode": "RBI_GRADE_B",
        "syllabusUnit": "General Studies Paper IV",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~2M"
      },
      {
        "examCode": "NABARD_GRADE_A",
        "syllabusUnit": "Paper IV - Yoga & Well-being",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "MODERATE",
        "notes": "Marks weightage: ~4M"
      },
      {
        "examCode": "UPSC_APFC",
        "syllabusUnit": "Paper 1",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~1M"
      },
      {
        "examCode": "SBI_PO",
        "syllabusUnit": "General Studies",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~1M"
      },
      {
        "examCode": "IIBF_DBF",
        "syllabusUnit": "General Studies",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~1M"
      },
      {
        "examCode": "IBPS_PO",
        "syllabusUnit": "General Awareness",
        "relevance": "LOW",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Marks weightage: ~1M"
      },
      {
        "examCode": "SEBI_GRADE_A",
        "syllabusUnit": "General Awareness / Ethics",
        "relevance": "MEDIUM",
        "priority": "P3",
        "requiredDepth": "CONCEPTUAL",
        "notes": "Supplementary reference"
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Yoga = \"Yogas Chitta Vritti Nirodhah\". 8 Limbs: Yama (restraints), Niyama (observances), Asana (posture), Pranayama (breath), Pratyahara (sensory withdrawal), Dharana (focus), Dhyana (meditation), Samadhi (absorption).",
        "priority": "CRITICAL",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "Patanjali Ashtanga Yoga is a complete psychological and ethical system for mind regulation. It begins with foundational ethics (5 Yamas including Ahimsa and Aparigraha; 5 Niyamas including Shaucha and Santosha), develops physical and breath mastery (Asana and Pranayama to stimulate vagal tone and parasympathetic calm), and culminates in mental mastery (Pratyahara, Dharana, Dhyana, Samadhi) to ensure cognitive equilibrium in public service.",
        "priority": "HIGH",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Yoga as an Executive Health System: 1. Ethical Governance (Yamas & Niyamas prevent corruption and moral degradation); 2. Psychophysiological Regulation (Surya Namaskar & Pranayama dampen cortisol and restore autonomic balance); 3. Executive Focus (Dharana & Dhyana sharpen complex administrative decision-making).",
        "priority": "HIGH",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "SINGLE_CORRECT",
        "stem": "According to Maharishi Patanjali’s Yoga Sutras, which of the following is the correct definition of \"Asana\"?",
        "options": [
          "Sthira Sukham Asanam",
          "Yogas Chitta Vritti Nirodhah",
          "Tatra Pratyaya Ekatanata Dhyanam",
          "Desha Bandhas Chittasya Dharana"
        ],
        "correctAnswer": "Sthira Sukham Asanam",
        "explanation": "Patanjali Yoga Sutra (Sadhana Pada, Sutra 2.46) defines Asana as \"Sthira Sukham Asanam\"—a physical posture that is steady (sthira) and comfortable (sukham).",
        "trapExplanation": "Watch for nuanced terminology differences.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "modelAnswer": "Sthira Sukham Asanam"
      },
      {
        "type": "DESCRIPTIVE_10M",
        "stem": "Enumerate the eight limbs of Maharishi Patanjali’s \"Ashtanga Yoga\". Discuss the relevance of Yama and Niyama to civil service ethics.",
        "correctAnswer": "Maharishi Patanjali codifies **Ashtanga Yoga** in eight progressive limbs: 1. **Yama** (Ethical restraints); 2. **Niyama** (Personal observances); 3. **Asana** (Steady posture); 4. **Pranayama** (Breath control); 5. **Pratyahara** (Sensory withdrawal); 6. **Dharana** (Concentration); 7. **Dhyana** (Meditation); 8. **Samadhi** (Pure absorption).\n\n**Relevance to Civil Service Ethics:**\n- **Yamas (Social Restraints)**: *Satya* (truthfulness) ensures honest file notings and public disclosures; *Asteya* (non-stealing) and *Aparigraha* (non-possessiveness) demand absolute financial incorruptibility; *Ahimsa* (non-violence) ensures humane, compassionate policing and disaster response.\n- **Niyamas (Personal Disciplines)**: *Shaucha* (purity) cultivates clean administrative processes; *Santosha* (contentment) shields officials against bribery and materialistic temptations; *Tapas* (discipline) and *Svadhyaya* (reflective self-study) drive continuous administrative dedication and learning.",
        "explanation": "",
        "trapExplanation": "Watch for nuanced terminology differences.",
        "difficulty": "INTERMEDIATE",
        "isPYQ": false,
        "wordLimit": 100,
        "modelAnswer": "Maharishi Patanjali codifies **Ashtanga Yoga** in eight progressive limbs: 1. **Yama** (Ethical restraints); 2. **Niyama** (Personal observances); 3. **Asana** (Steady posture); 4. **Pranayama** (Breath control); 5. **Pratyahara** (Sensory withdrawal); 6. **Dharana** (Concentration); 7. **Dhyana** (Meditation); 8. **Samadhi** (Pure absorption).\n\n**Relevance to Civil Service Ethics:**\n- **Yamas (Social Restraints)**: *Satya* (truthfulness) ensures honest file notings and public disclosures; *Asteya* (non-stealing) and *Aparigraha* (non-possessiveness) demand absolute financial incorruptibility; *Ahimsa* (non-violence) ensures humane, compassionate policing and disaster response.\n- **Niyamas (Personal Disciplines)**: *Shaucha* (purity) cultivates clean administrative processes; *Santosha* (contentment) shields officials against bribery and materialistic temptations; *Tapas* (discipline) and *Svadhyaya* (reflective self-study) drive continuous administrative dedication and learning."
      }
    ]
  }
];

export async function seedEthicsBehaviorSportsCanonicalKnowledge(): Promise<void> {
  console.log(`Seeding Administrative Ethics, Behavior, Sports & Yoga Canonical Knowledge (${ETHICS_BEHAVIOR_SPORTS_CONCEPTS.length} concepts)...`);

  // 1. Ensure Domain and Subject exist
  const domain = await db.domain.upsert({
    where: { slug: 'ethics-integrity-aptitude' },
    update: {
      name: 'Ethics, Integrity & Administrative Aptitude',
      description: 'Foundations of administrative ethics, moral philosophy, behavioral psychology, public health, sports governance, and yogic wellness for civil services.',
      order: 6,
      status: 'ACTIVE',
    },
    create: {
      slug: 'ethics-integrity-aptitude',
      name: 'Ethics, Integrity & Administrative Aptitude',
      description: 'Foundations of administrative ethics, moral philosophy, behavioral psychology, public health, sports governance, and yogic wellness for civil services.',
      order: 6,
      status: 'ACTIVE',
    },
  });

  const subject = await db.subject.upsert({
    where: { slug: 'ethics-behavior-sports' },
    update: {
      domainId: domain.id,
      name: 'Administrative Ethics, Behavior, Sports & Yoga',
      description: 'Exhaustive canonical knowledge base for RPSC RAS Mains Paper II (Unit 1: Ethics - 65 Marks, Unit 3: Behavior - 20 Marks, and Sports & Yoga - 20 Marks).',
      order: 1,
      status: 'ACTIVE',
    },
    create: {
      domainId: domain.id,
      slug: 'ethics-behavior-sports',
      name: 'Administrative Ethics, Behavior, Sports & Yoga',
      scopeStatement: 'Comprehensive syllabus coverage of administrative ethics, Western and Indian moral philosophers, civil service values, dilemmas, probity, behavioral psychology, motivation, stress management, Rajasthan sports policy, traditional games, and Patanjali Ashtanga Yoga.',
      description: 'Exhaustive canonical knowledge base for RPSC RAS Mains Paper II (Unit 1: Ethics - 65 Marks, Unit 3: Behavior - 20 Marks, and Sports & Yoga - 20 Marks).',
      order: 1,
      status: 'ACTIVE',
    },
  });

  // 2. Ensure Topics exist
  const topicDefs = [
    {
      slug: 'administrative-ethics',
      title: 'Administrative Ethics & Moral Philosophy',
      order: 1,
      description: 'Ethics in public administration, human values, moral thinkers (Western and Indian), civil service values, dilemmas, and probity in governance.',
    },
    {
      slug: 'administrative-behavior',
      title: 'Administrative Behavior & Applied Psychology',
      order: 2,
      description: 'Intelligence theories, personality traits, motivation, learning, attitude formation, and stress management in civil administration.',
    },
    {
      slug: 'sports-and-yoga',
      title: 'Sports Policy, Traditional Games & Yoga',
      order: 3,
      description: 'Rajasthan sports policy, awards, traditional rural/urban games, Patanjali Ashtanga Yoga, and physical-mental wellness.',
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
  const sourceEthics = await db.source.upsert({
    where: { id: 'SRC-ETHICS-BEHAVIOR-SPORTS-2026' },
    update: {},
    create: {
      id: 'SRC-ETHICS-BEHAVIOR-SPORTS-2026',
      title: 'Administrative Ethics, Applied Psychology & Sports Master Corpus (Nolan, 2nd ARC, Patanjali, RSSC & Psychological Foundations)',
      sourceType: 'COMPREHENSIVE_ADMINISTRATIVE_LEGAL_SYNTHESIS',
      authorityTier: 'PEER_REVIEWED_MATHEMATICAL_REFERENCE',
      description: 'Authoritative ethics, behavioral psychology, and sports corpus for RPSC RAS Mains Paper II and civil services examinations.',
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

  for (const c of ETHICS_BEHAVIOR_SPORTS_CONCEPTS) {
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
          sourceId: sourceEthics.id,
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

  console.log(`Successfully seeded ${ETHICS_BEHAVIOR_SPORTS_CONCEPTS.length} Administrative Ethics, Behavior, Sports & Yoga canonical concepts.`);
}
