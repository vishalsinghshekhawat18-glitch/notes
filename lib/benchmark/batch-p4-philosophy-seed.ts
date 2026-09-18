import { db } from '../db/client';

/**
 * Phase P4: Philosophy Master — Batch 4 Canonical Benchmark Dataset
 * Mind of Aravalli — Academic Reading Hub
 *
 * Source: Yale University Open Course — PHIL 176: Death (Prof. Shelly Kagan)
 * Lectures 22–26: Attitudes Toward Death, Living with Mortality, and The Morality & Rationality of Suicide
 *
 * Topics & Concepts:
 * - TOPIC 7: ATTITUDES TOWARD DEATH: FEAR, GRIEF, AND LIVING WITH MORTALITY (CON-PHIL-16 to CON-PHIL-17)
 *   - CON-PHIL-16: Appropriate Attitudes Toward Death: Fear, Grief & The Requirements of Rational Emotion
 *   - CON-PHIL-17: Living in the Face of Inevitable Mortality: Illusion, Denial vs. Authentic Acceptance
 * - TOPIC 8: THE MORALITY AND RATIONALITY OF SUICIDE (CON-PHIL-18 to CON-PHIL-20)
 *   - CON-PHIL-18: The Rationality of Suicide: Counterfactual Lifetime Curves & Intractable Suffering
 *   - CON-PHIL-19: The Morality of Suicide: Deontological vs. Consequentialist Ethical Assessments
 *   - CON-PHIL-20: Paternalism, Suicide Intervention & The Ethics of Rational Assistance
 */

export interface CanonicalConceptDefinition {
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

export const BATCH_P4_CONCEPTS: CanonicalConceptDefinition[] = [
  {
    "id": "CON-PHIL-16",
    "topicOrder": 7,
    "topicSlug": "attitudes-toward-death-fear-grief-and-living-with-mortality",
    "topicTitle": "Attitudes Toward Death: Fear, Grief, and Living with Mortality",
    "topicDescription": "Philosophical exploration of the emotional, psychological, and existential stances toward human finitude: Kagan's tripartite requirements of rational fear, sorrow vs dread, Lucretian past-future asymmetry in emotional attitudes, and living authentically under the sword of Damocles.",
    "slug": "appropriate-attitudes-toward-death-fear-grief-rational-emotion",
    "title": "Appropriate Attitudes Toward Death: Fear, Grief & The Requirements of Rational Emotion",
    "shortDefinition": "Shelly Kagan's systematic philosophical analysis of the rationality of emotional responses to death and mortality (Lectures 22 & 23). Formulates the three essential criteria for fear to be rational: (1) the object must be genuinely bad, (2) the probability of occurrence must be non-negligible, and (3) there must be epistemic uncertainty regarding whether, when, or how it will strike. Demonstrates that fearing the bare fact of mortality is irrational because death is 100% inevitable and certain (violating the uncertainty criterion); however, fearing premature death, agonizing dying processes, or unpredictable timing satisfies all three conditions and is entirely rational. Dissects fear of the state of being dead as an irrational projection of confinement or sensory darkness onto non-existence, and analyzes grief as a rational response to comparative deprivation, distinguishing other-regarding mourning from self-regarding loss.",
    "difficulty": "INTERMEDIATE",
    "claims": [
      {
        "id": "CLM-PHIL-16-01",
        "statement": "For fear of an event E to be rational, three evaluative and epistemic conditions must be jointly satisfied: E must be genuinely bad for the agent, the probability of E occurring must be non-negligible, and there must be significant epistemic uncertainty regarding whether, when, or how E will occur.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Yale PHIL 176, Lecture 22 (-lF-uMIfL6s) \"Other Bad Aspects of Death, Part I\", 04:15–18:30",
        "excerpt": "Fear requires three conditions to be appropriate: the thing feared must be bad, there must be a non-negligible chance of it happening, and there must be uncertainty. You don't fear that 2 plus 2 equals 4, even if you don't like it."
      },
      {
        "id": "CLM-PHIL-16-02",
        "statement": "Fearing the bare metaphysical fact of one's eventual mortality is irrational because death is 100% inevitable and certain, thereby violating the uncertainty requirement of rational emotion; however, fearing premature death, agonizing dying trajectories, or unpredictable timing satisfies the uncertainty condition and is fully rational.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Yale PHIL 176, Lecture 22 (-lF-uMIfL6s) \"Other Bad Aspects of Death, Part I\", 18:40–31:10",
        "excerpt": "Is it rational to fear the fact that you will die? No, because it's certain you will die. But it is rational to fear dying young, or dying painfully, or dying unexpectedly, because whether and when those occur are genuinely uncertain."
      },
      {
        "id": "CLM-PHIL-16-03",
        "statement": "Fearing the condition of being dead is irrational because posthumous non-existence has zero experiential quality rather than being a state of confinement or sensory darkness; under the Deprivation Account, death is comparatively bad rather than intrinsically painful, warranting regret or sorrow rather than visceral fear.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Yale PHIL 176, Lecture 22 (-lF-uMIfL6s) \"Other Bad Aspects of Death, Part I\", 31:20–42:00",
        "excerpt": "People often picture being dead as being locked in a dark room forever, unable to move. But being dead isn't an experiential state at all. Since there is no agony in non-existence, fear of being dead rests on an illusion."
      },
      {
        "id": "CLM-PHIL-16-04",
        "statement": "Rational grief following bereavement comprises two logically distinct evaluative components: other-regarding grief (sorrow directed at the deceased for being prematurely deprived of their future life goods) and self-regarding grief (sorrow for the survivor's own deprivation of love, companionship, and shared life).",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Yale PHIL 176, Lecture 22 (-lF-uMIfL6s) \"Other Bad Aspects of Death, Part I\", 42:10–48:15",
        "excerpt": "When my friend dies, I feel grief for two different reasons: I feel sorrow on his behalf because he was robbed of the goods of life, and I feel sorrow for myself because I have lost a beloved friend."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Midnight Terror: What Exactly Are We Fearing?",
        "body": "Wake up at 3:00 AM contemplating your own mortality, and a visceral chill grips your chest. But what exactly is the mind recoiling from? Most people intuitively assume they are terrified of 'death itself.' However, when philosophical analysis breaks down that terror, people almost invariably imagine themselves trapped inside a dark, claustrophobic coffin, suffocating in perpetual silence, conscious of their isolation.\n\nProfessor Shelly Kagan shows that this psychological horror rests on a transparent cognitive error: we project conscious phenomenal experience into a state defined by the total absence of consciousness. Once we recognize that posthumous non-existence is experiential zero, the question sharpens: what emotional stance toward mortality is actually justified by reason?",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "Kagan's Tripartite Filter for Rational Fear",
        "body": "Kagan argues that emotions are not exempt from rational evaluation; an emotion can be appropriate or inappropriate, fitting or unfitting, depending on whether its cognitive prerequisites match objective reality. For fear to be rational, three conditions must hold:\n\n1. **Badness Condition**: The target must be genuinely bad for the agent. If an event is indifferent or beneficial, fearing it is irrational.\n2. **Non-Negligible Probability**: There must be a realistic chance of the bad outcome occurring. Fearing that the planet Jupiter will suddenly turn into strawberry gelatin tomorrow is irrational because the probability is virtually zero.\n3. **Epistemic Uncertainty Condition**: There must be significant uncertainty regarding whether, when, or how the event will occur. One does not rationally fear that 2 + 2 = 4, nor that gravity will pull an unsupported stone to the ground. Certainty warrants preparation, resignation, or sorrow, but not fear.\n\nApplying this filter to death yields a startling conclusion:\n- **The Bare Fact of Death**: 100% inevitable. Because uncertainty is zero, fearing the bare metaphysical fact that you will eventually die is irrational.\n- **The Circumstances of Death**: Will you die at age 25 or 90? Will it be sudden and painless, or slow and agonizing? Because these factors are genuinely uncertain, bad, and probable, fearing **premature death** or a **painful dying process** is entirely rational!",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "The Rationality Architecture of Emotional Stances Toward Death",
        "body": "The following structured decision tree illustrates Kagan's philosophical filter separating rational from irrational emotional responses to mortality:\n\n```\n+-------------------------------------------------------------------------+\n|           KAGAN'S TRIPARTITE FILTER FOR RATIONAL EMOTION                |\n|                                                                         |\n|  Condition 1: Object Badness?                                           |\n|  - Is the event/state bad for the subject?                              |\n|    * Deprivation of life's goods / Agonizing dying -> PASSES            |\n|    * Condition of being dead (Experiential 0)      -> FAILS             |\n|                                                                         |\n|  Condition 2: Non-Negligible Probability?                               |\n|  - Is P(Event) > 0 and practically meaningful?                          |\n|    * Mortal human vulnerability                    -> PASSES            |\n|    * Sun exploding tomorrow (P ~ 0)                -> FAILS             |\n|                                                                         |\n|  Condition 3: Epistemic Uncertainty?                                    |\n|  - Is there uncertainty about IF, WHEN, or HOW?                         |\n|    * Bare Fact of Eventual Mortality: P = 1.0      -> FAILS (NO FEAR)   |\n|    * Premature Death / Sudden Loss / Agony         -> PASSES (RATIONAL) |\n|                                                                         |\n|=========================================================================|\n|                  RATIONAL TAXONOMY OF RESPONSES                         |\n|                                                                         |\n|  TARGET EVENT             RATIONAL EMOTION      JUSTIFICATION           |\n|  ---------------------------------------------------------------------  |\n|  1. Eventual Mortality    Calm Resignation      Certain; P = 1.0        |\n|  2. Premature Deprivation Sorrow / Regret       Comparative Loss        |\n|  3. Unpredictable Timing  Rational Fear         Meets All 3 Criteria    |\n|  4. Agonizing Dying       Rational Fear         Intrinsic Physical Bad  |\n|  5. Loss of Loved One     Dual Grief            Other- & Self-Deprivation|\n+-------------------------------------------------------------------------+\n```\n\nFurthermore, Kagan analyzes grief. When an elderly person dies peacefully at age 95 after a full, flourishing life, other-regarding grief is misplaced (they were not deprived of significant further goods). Grief in that scenario is almost purely self-regarding—mourning our own loneliness.",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Analytical Frameworks for Ethics & Philosophy Examinations",
        "body": "In competitive and university examinations (UPSC Ethics GS4, Philosophy Optional Paper II, and Academic Axiology), questions on emotional rationality and the badness of death test your ability to deconstruct instinctive reactions into rigorous normative components:\n\n- **Distinguishing Fear from Sorrow**: Never conflate fear (which requires uncertainty) with sorrow or regret (which attaches to deprivation regardless of certainty). An examiner's favorite trap is asserting that 'since death is bad, fearing death is always rational.' The correct philosophical retort is that certainty extinguishes rational fear while leaving sorrow entirely fitting.\n- **Dual-Aspect Grief**: When evaluating bereavement in ethics case studies (e.g., end-of-life care, palliative decisions), distinguish other-regarding interests (the patient's pain vs continued life value) from family-regarding grief. Paternalistic prolongation of agonizing death often stems from the family's self-regarding fear of loss rather than the patient's objective well-being.",
        "order": 4
      }
    ],
    "examMappings": [
      {
        "examCode": "PHILOSOPHY_OPTIONAL",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "EXPERT",
        "syllabusUnit": "Paper II: Socio-Political Philosophy & Philosophy of Religion — Human Values, Emotional Rationality, and Concept of Death",
        "notes": "Directly applicable to questions on axiology, Epicureanism, Stoic apatheia, and the normative rationality of emotions.",
        "frequentTraps": "Equating the rationality of fear with the rationality of sorrow; assuming certainty justifies fear rather than nullifying it."
      },
      {
        "examCode": "UPSC_GS4",
        "relevance": "DIRECT_OVERLAY",
        "priority": "HIGH",
        "requiredDepth": "PROFICIENT",
        "syllabusUnit": "Ethics, Integrity & Aptitude — Emotional Intelligence, Concepts and Utility in Administrative Decisions",
        "notes": "Crucial for handling case studies involving terminal illness, triage, suicide crises, and managing public grief or panic.",
        "frequentTraps": "Treating emotions as irrational biological reflexes rather than cognitive states subject to rational appraisal."
      },
      {
        "examCode": "ACADEMIC_PHILOSOPHY",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "EXPERT",
        "syllabusUnit": "Axiology & Normative Ethics: The Philosophy of Emotion and Thanatology",
        "notes": "Covers Kagan's tripartite theory of fear, Robert Nozick's tracking condition, and Bernard Williams on emotional appropriateness.",
        "frequentTraps": "Failing to cite the uncertainty criterion when distinguishing premature death from inevitable death."
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Kagan's Tripartite Filter for Rational Fear: (1) Object must be bad; (2) Probability must be non-negligible; (3) Must have epistemic uncertainty. Fearing inevitable mortality is IRRATIONAL (P = 1.0, no uncertainty). Fearing PREMATURE or PAINFUL death is RATIONAL (uncertain timing/manner). Being dead is experiential zero; sorrow fits deprivation, not fear.",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "In PHIL 176 (Lecture 22), Shelly Kagan establishes that emotions possess cognitive content and can be assessed for rational appropriateness. Fear requires three criteria: badness, non-negligible probability, and epistemic uncertainty. While death is bad via deprivation, the bare fact that we will eventually die is 100% certain, making fear of inevitable mortality irrational (akin to fearing gravity). However, fear of premature death, sudden loss, or painful dying processes satisfies all three criteria and is fully rational. Furthermore, fearing the condition of being dead is irrational because it projects phenomenal confinement onto non-existence (experiential zero). Grief over bereavement splits into other-regarding sorrow (mourning the goods the deceased lost) and self-regarding sorrow (mourning one's own loneliness).",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "### The Architecture of Rational Emotions Toward Mortality\n\n1. **Cognitive Theory of Emotion**: Emotions are not blind feelings; they involve cognitive appraisals of states of affairs.\n2. **Kagan's Three Necessary Conditions for Rational Fear**:\n   - Badness: The object must be bad for the agent.\n   - Probability: P(Event) must be non-negligible.\n   - Uncertainty: Outcome, timing, or severity must be epistemically open.\n3. **Deconstructing Death-Related Emotions**:\n   - *Inevitable Mortality*: Certain (P=1.0) -> Fear is irrational; fitting attitude is resignation/acceptance.\n   - *Timing of Death*: Uncertain -> Fear of dying young or prematurely is rational.\n   - *Manner of Dying*: Uncertain -> Fear of physical agony, suffocation, or cognitive decay is rational.\n   - *State of Non-Existence*: Experiential 0 -> Deprivation warrants sorrow/regret, never terror.\n4. **The Anatomy of Grief**:\n   - *Other-Regarding*: Proportionate to the net positive future life the deceased was deprived of.\n   - *Self-Regarding*: Proportionate to the survivor's personal disruption, severed bond, and emotional loss.",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "stem": "According to Shelly Kagan's analysis of rational fear in Lecture 22, why is it strictly irrational to fear the bare metaphysical fact that you will eventually die?",
        "options": [
          "Because death is not bad under any philosophical theory of well-being.",
          "Because the probability of dying is too low to warrant emotional distress.",
          "Because fear requires epistemic uncertainty, but eventual mortality is 100% inevitable and certain.",
          "Because emotions are non-cognitive biological drives that cannot be evaluated by reason."
        ],
        "correctAnswer": "Because fear requires epistemic uncertainty, but eventual mortality is 100% inevitable and certain.",
        "explanation": "Kagan identifies three necessary conditions for fear to be rational: the event must be bad, non-negligible in probability, and epistemically uncertain. Since eventual mortality is completely certain (P = 1.0), it violates the uncertainty condition. Fearing the bare fact of death is as irrational as fearing gravity or that 2 + 2 = 4.",
        "trapExplanation": "Option A is wrong because death is comparatively bad via deprivation. Option B is absurd because P = 1.0. Option D rejects the cognitive theory of emotions endorsed throughout philosophical axiology.",
        "difficulty": "MEDIUM",
        "isPYQ": false,
        "examinerTrapPattern": "Confusing the badness of an event with the justification for fear; forgetting that certainty transforms rational fear into resignation or sorrow."
      },
      {
        "type": "CONCEPT_CHECK",
        "stem": "Under Kagan's framework, under which of the following circumstances is fear of death rationally warranted?",
        "options": [
          "Fearing the state of posthumous non-existence because it is an eternity of dark confinement.",
          "Fearing death when you are 95 years old and have exhausted all capacity for positive well-being.",
          "Fearing the unpredictability of when death will strike and whether it will deprive you of decades of flourishing life.",
          "Fearing that physical atoms will disperse into the cosmos upon biological cessation."
        ],
        "correctAnswer": "Fearing the unpredictability of when death will strike and whether it will deprive you of decades of flourishing life.",
        "explanation": "Fearing premature death satisfies all three criteria: it is bad (deprives one of flourishing goods), probable (mortal vulnerability), and uncertain (we do not know if or when it will occur).",
        "trapExplanation": "Option A commits the projection fallacy (treating non-existence as experiential confinement). Option B involves negligible deprivation and high certainty. Option D describes a physical fact that is not bad.",
        "difficulty": "EASY",
        "isPYQ": false,
        "examinerTrapPattern": "Presenting common psychological phobias as rational philosophical claims."
      },
      {
        "type": "APPLIED_SCENARIO",
        "stem": "A 98-year-old grandfather dies quietly in his sleep without pain after a profoundly rich and complete life. His adult granddaughter experiences overwhelming grief, weeping that 'he has been horribly wronged by the universe.' How would Kagan analyze the rationality of her grief?",
        "options": [
          "Her grief is entirely irrational because all forms of grief are cognitive errors under the Deprivation Account.",
          "Her other-regarding grief is largely misplaced because the grandfather was deprived of little to no future positive well-being; her appropriate grief is primarily self-regarding (mourning her own loss of his presence).",
          "Her grief is fully rational as other-regarding grief because any death, regardless of age, inflicts infinite deprivation.",
          "Her grief is rational only if she adopts a substance dualist perspective affirming the grandfather's soul is in purgatory."
        ],
        "correctAnswer": "Her other-regarding grief is largely misplaced because the grandfather was deprived of little to no future positive well-being; her appropriate grief is primarily self-regarding (mourning her own loss of his presence).",
        "explanation": "Under the Deprivation Account, other-regarding grief is proportional to the net goods the deceased was deprived of. At 98, future goods were minimal or nonexistent. Therefore, claiming he was 'horribly wronged' is mistaken; her grief is rationally justified as self-regarding sorrow over her own loss.",
        "trapExplanation": "Option A is false because grief can be rational. Option C asserts the infinite loss fallacy refuted in Lecture 15. Option D introduces irrelevant dualist dogma.",
        "difficulty": "HARD",
        "isPYQ": false,
        "examinerTrapPattern": "Failing to decouple other-regarding grief (for the deceased) from self-regarding grief (for the survivor)."
      }
    ]
  },
  {
    "id": "CON-PHIL-17",
    "topicOrder": 7,
    "topicSlug": "attitudes-toward-death-fear-grief-and-living-with-mortality",
    "topicTitle": "Attitudes Toward Death: Fear, Grief, and Living with Mortality",
    "topicDescription": "Philosophical exploration of the emotional, psychological, and existential stances toward human finitude: Kagan's tripartite requirements of rational fear, sorrow vs dread, Lucretian past-future asymmetry in emotional attitudes, and living authentically under the sword of Damocles.",
    "slug": "living-in-the-face-of-mortality-illusion-denial-authentic-acceptance",
    "title": "Living in the Face of Inevitable Mortality: Illusion, Denial vs. Authentic Acceptance",
    "shortDefinition": "Philosophical examination of how the conscious awareness of mortality affects human purpose, the meaning of life, and authentic decision-making (Lectures 22 & 23). Rigorously analyzes Leo Tolstoy's existential crisis in 'A Confession'—wherein the eastern fable of the traveler in the well (threatened by a dragon at the bottom while mice gnaw the bush) leads Tolstoy to conclude that the inevitability of death poisons and invalidates all transient goods (the drops of honey). Dissects Kagan's rebuttal: demonstrating that Tolstoy commits the 'duration fallacy' by presuming that an activity is valuable only if its results endure perpetually. Contrasts cultural death denial (Ernest Becker's 'The Denial of Death') and willful illusions against Kagan's stoic-humanist doctrine of clear-eyed acceptance. Integrates Kurt Vonnegut's 'Lucky Mud' principle—recognizing that consciousness is an unearned, miraculous bonus of physics rather than an entitlement—showing that mortality creates temporal scarcity, which endows finite human choices with urgency and genuine value.",
    "difficulty": "INTERMEDIATE",
    "claims": [
      {
        "id": "CLM-PHIL-17-01",
        "statement": "Leo Tolstoy's existential claim in 'A Confession'—that the inevitability of death renders all present human strivings, achievements, and pleasures meaningless—commits the duration fallacy by erroneously assuming that transient goods possess value only if their consequences endure forever.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Yale PHIL 176, Lecture 23 (O8Hu465KL1w) \"Other Bad Aspects of Death, Part II\", 08:30–22:45; Leo Tolstoy, \"A Confession\" (1882)",
        "excerpt": "Tolstoy tells the story of the traveler in the well, and says the honey drops no longer taste sweet because of the dragon below. But why should the fact that an experience ends ruin the value it has while you have it? A delicious meal doesn't become worthless just because it finishes."
      },
      {
        "id": "CLM-PHIL-17-02",
        "statement": "Psychological denial of death and culturally constructed hero illusions (as identified by Ernest Becker and Terror Management Theory) operate as cognitive shields against existential terror, but they do so at the prohibitive cost of inauthentic life planning, neurotic anxiety, and distorted prioritization.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "SCHOLARLY_CONSENSUS",
        "confidence": "HIGH",
        "locator": "Yale PHIL 176, Lecture 23 (O8Hu465KL1w) \"Other Bad Aspects of Death, Part II\", 23:10–33:50; Ernest Becker, \"The Denial of Death\" (1973)",
        "excerpt": "One common strategy for dealing with mortality is denial: pretend death won't happen to you, or throw yourself into immortality projects. But living in denial means living on the basis of a falsehood."
      },
      {
        "id": "CLM-PHIL-17-03",
        "statement": "The 'Lucky Mud' principle (formulated by Kurt Vonnegut and endorsed by Shelly Kagan) establishes that human existence is not a contractual entitlement owed to matter, but an unearned cosmic bonus; recognizing that most matter never achieves consciousness transforms existential resentment over death into rational gratitude for having lived.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Yale PHIL 176, Lecture 22 (-lF-uMIfL6s) 48:20–51:10; Lecture 23 (O8Hu465KL1w) 00:30–07:45; Kurt Vonnegut, \"Cat's Cradle\" (1963)",
        "excerpt": "Vonnegut writes: 'God made mud. God got lonesome... I was some of the mud that got to sit up and look around. Lucky me, lucky mud.' We were never promised eternity. The fact that the party ends doesn't mean you were cheated; you were lucky to be invited in the first place."
      },
      {
        "id": "CLM-PHIL-17-04",
        "statement": "Far from obliterating human value, the factual inevitability of mortality introduces temporal scarcity into human existence, converting time into a precious non-renewable resource that makes authentic prioritization, deliberate moral commitment, and purposeful achievement possible.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Yale PHIL 176, Lecture 23 (O8Hu465KL1w) \"Other Bad Aspects of Death, Part II\", 34:00–47:20",
        "excerpt": "If we were immortal, every choice could be deferred forever. Finitude forces us to choose what truly matters. Mortality is what makes our time scarce and therefore deeply precious."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Dragon, The Mice, and The Drops of Honey",
        "body": "In his autobiographical work *A Confession*, Leo Tolstoy recounts an ancient Eastern fable that plunged him into suicidal despair:\n\nA traveler in the wilderness is pursued by a ferocious beast. Desperate, he leaps into a dry well, catching hold of a wild shrub growing from the crevices. As he hangs suspended, he looks down and sees a monstrous dragon waiting at the bottom of the well with open jaws to devour him. Looking up, he sees two mice—one white, one black—relentlessly gnawing at the stem of the bush. He knows with certainty that the branch will snap and he will perish. Yet, while clinging to the shrub, he notices sweet drops of honey glistening on its leaves, and he stretches his tongue to lick them.\n\nTolstoy writes that for decades, the honey of family and literature tasted sweet. But once he fully grasped the reality of the dragon (death) and the mice (day and night gnawing away his life), the honey lost all sweetness. Tolstoy asked: 'Is there any meaning in my life that will not be annihilated by the inevitable death awaiting me?'",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "Kagan's Refutation of Tolstoy: The Duration Fallacy & The Chocolate Cake",
        "body": "Professor Shelly Kagan mounts a brilliant philosophical counter-attack against Tolstoy's despair. Tolstoy assumes what philosophers call the **Duration Fallacy**: the premise that an experience or accomplishment has value only if it lasts forever, or if its consequences endure indefinitely.\n\nKagan dismantles this premise with a vivid analogy: **The Chocolate Cake**. Suppose you eat a slice of rich, delicious chocolate cake. Ten minutes later, the cake is gone; twenty minutes later, the taste has vanished from your tongue; seventy years later, your body will be dust and no trace of that cake will remain in the universe. Does the fact that the cake eating ends prove that the cake wasn't delicious while you were eating it? Does death reach back into the past and turn pleasant tastes into ash?\n\nObviously not! Value is **episodic and temporal**. If an experience is intrinsically good while it occurs, its value is an indelible fact about that slice of spacetime. Death prevents future goods (deprivation), but it has zero power to retroactively cancel the goodness of goods already experienced. Tolstoy's dragon cannot make the honey bitter.",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "Existential Stances: Tolstoy's Nihilism vs Becker's Denial vs Kagan's Scarcity Matrix",
        "body": "The following analytical diagram maps the three fundamental human responses to mortality and details Kagan's authentic alternative:\n\n```\n+-------------------------------------------------------------------------+\n|        THREE STANCES TOWARD MORTALITY: COMPARATIVE AXIOLOGY             |\n|                                                                         |\n| 1. TOLSTOY'S NIHILISTIC DESPAIR                                         |\n|    [Present Goods] ------> [Dragon of Death] = Net Meaningless Zero     |\n|    * Fallacy: Duration Fallacy (Requires eternity for local value).     |\n|    * Outcome: Existential paralysis, despair, suicidal ideation.        |\n|                                                                         |\n| 2. BECKER'S CULTURAL DENIAL (The Denial of Death)                       |\n|    [Existential Terror] -> [Repression / Illusions / Hero Systems]      |\n|    * Mechanism: Pretend death is unreal or seek symbolic immortality.   |\n|    * Cost: Severe cognitive distortion, dogmatism, inauthentic life.    |\n|                                                                         |\n| 3. KAGAN'S AUTHENTIC SCARCITY FRAMEWORK                                 |\n|    +---------------------------------------------------------------+    |\n|    | Finitude (Certain Death) -> Imposes Strict Temporal Scarcity  |    |\n|    +---------------------------------------------------------------+    |\n|                                   |                                     |\n|                                   v                                     |\n|    +---------------------------------------------------------------+    |\n|    | Opportunity Cost > 0 -> Prioritization of Goods is Urgent     |    |\n|    +---------------------------------------------------------------+    |\n|                                   |                                     |\n|                                   v                                     |\n|    +---------------------------------------------------------------+    |\n|    | 'Lucky Mud' Axiom -> Consciousness is an Unmerited Bonus     |    |\n|    +---------------------------------------------------------------+    |\n|                                   |                                     |\n|                                   v                                     |\n|    +---------------------------------------------------------------+    |\n|    | Rational Response: Cosmic Gratitude + Authentic Action        |    |\n|    +---------------------------------------------------------------+    |\n+-------------------------------------------------------------------------+\n```\n\nKurt Vonnegut's 'Lucky Mud' prayer encapsulates this stance: ordinary matter had no claim or right to be organized into a living, loving, sentient being. That we get to exist at all is extraordinary good fortune. Resenting our finitude is like attending a magnificent banquet for free and throwing a tantrum because it eventually closes.",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Existential Ethics in Civil Service & Philosophy Papers",
        "body": "This concept bridges existential phenomenology with normative public policy and individual integrity:\n\n- **UPSC GS4 (Ethics & Human Interface)**: Questions addressing existential resilience, burn-out among administrators, and the pursuit of meaning under crisis conditions. Tolstoy's trap represents acute demoralization; Kagan's model represents ethical realism—acting purposefully despite systemic limitations and temporal finitude.\n- **Philosophy Optional (Existentialism & Axiology)**: Compare Tolstoy with Jean-Paul Sartre (bad faith / authentic existence), Albert Camus (the Myth of Sisyphus / confronting the absurd without despair), and Martin Heidegger (Being-towards-death / *Sein-zum-Tode* as the condition for authentic individuality).",
        "order": 4
      }
    ],
    "examMappings": [
      {
        "examCode": "PHILOSOPHY_OPTIONAL",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "EXPERT",
        "syllabusUnit": "Paper II: Socio-Political Philosophy — Existentialism, Freedom, Meaning of Life, and Alienation",
        "notes": "Directly parallels Sartre's mauvaise foi, Camus on the Absurd, and Heideggerian Being-towards-death.",
        "frequentTraps": "Conflating Tolstoy's existential crisis with nihilism as a metaphysical thesis; confusing Kagan's defense with simple hedonism."
      },
      {
        "examCode": "UPSC_GS4",
        "relevance": "DIRECT_OVERLAY",
        "priority": "HIGH",
        "requiredDepth": "PROFICIENT",
        "syllabusUnit": "Ethics and Human Interface: Essence, Determinants, and Consequences of Ethics in Human Actions; Human Values",
        "notes": "Applies to essays on resilience, gratitude, professional dedication, and finding purpose in public service.",
        "frequentTraps": "Advocating psychological denial or fatalism rather than proactive, scarcity-driven authentic prioritization."
      },
      {
        "examCode": "ACADEMIC_PHILOSOPHY",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "EXPERT",
        "syllabusUnit": "Existential Phenomenology & Axiology: Theories of Meaningfulness and Finitude",
        "notes": "Examines Susan Wolf's 'Meaning in Life and Why It Matters', Thomas Nagel's 'The Absurd', and Kagan's temporal axiology.",
        "frequentTraps": "Overlooking the duration fallacy when evaluating arguments for cosmic meaninglessness."
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Living with Mortality: Tolstoy's 'Confession' (dragon & mice) claims death renders life meaningless. Kagan refutes this via the DURATION FALLACY: an experience (like eating cake) does not need to last forever to be valuable while it lasts. Becker's death denial causes inauthenticity. Vonnegut's 'Lucky Mud': existence is an unmerited bonus, warranting cosmic gratitude. Mortality creates temporal scarcity, making authentic choices urgent.",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "In PHIL 176 (Lecture 23), Shelly Kagan examines how awareness of mortality should guide our lives. Leo Tolstoy argued that because death swallows everything (the dragon in the well), life's goods (drops of honey) are rendered meaningless. Kagan refutes Tolstoy by exposing the Duration Fallacy: transient goods (like eating a chocolate cake) retain genuine, indelible value during their occurrence; death cannot retroactively erase past goodness. While Ernest Becker showed that humans often retreat into cultural illusions and death denial, Kagan advocates clear-eyed acceptance. Drawing on Kurt Vonnegut's 'Lucky Mud', Kagan points out that matter has no entitlement to consciousness; being alive is an unmerited gift, making resentment irrational. Mortality imposes temporal scarcity, converting finite time into our most precious asset and driving authentic life planning.",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "### Existential Stances Toward Inevitable Mortality\n\n1. **Tolstoy's Dilemma in 'A Confession'**:\n   - Allegory of the Well: Dragon below (death), mice gnawing shrub (time passing), honey drops (family, art).\n   - Tolstoy's Deduction: If death destroys all outcomes, present strivings are futile.\n2. **Kagan's Deconstruction of the Duration Fallacy**:\n   - Fallacy: 'X has value only if X's consequences endure eternally.'\n   - Counter-Example (Chocolate Cake): Episodic, experiential goods are intrinsically valuable in their own temporal window. Death prevents future goods but cannot invalidate past/present goods.\n3. **Psychological Denial vs Authentic Acceptance**:\n   - *Becker's Denial of Death*: Humans build hero systems to repress death anxiety, risking fanaticism and inauthenticity.\n   - *Vonnegut's Lucky Mud Principle*: Sentient life is an unearned bonus from non-conscious matter. Gratitude replaces cosmic grievance.\n4. **Temporal Scarcity as the Engine of Meaning**:\n   - Infinite time devalues individual moments (procrastination ad infinitum).\n   - Finitude creates opportunity cost, compelling deliberate value prioritization and authentic moral agency.",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "stem": "In Lecture 23, what fundamental logical error does Shelly Kagan attribute to Leo Tolstoy's argument that the inevitability of death destroys the meaning of present life?",
        "options": [
          "The Fallacy of Equivocation, by confusing biological death with spiritual damnation.",
          "The Duration Fallacy, by erroneously presupposing that an activity has value only if its effects or duration last forever.",
          "The Naturalistic Fallacy, by deriving an ought from an is.",
          "The Two-State Fallacy, by comparing existence with non-existence."
        ],
        "correctAnswer": "The Duration Fallacy, by erroneously presupposing that an activity has value only if its effects or duration last forever.",
        "explanation": "Tolstoy assumes that because death eventually consumes all achievements, they are worthless now. Kagan demonstrates this is the Duration Fallacy: transient goods (like eating cake or loving a friend) have genuine, real value while they exist, regardless of whether they last forever.",
        "trapExplanation": "Option A is wrong because Tolstoy's despair was secular-existential at that stage. Option C is Hume's ethical fallacy. Option D applies to Epicurus/Nagel, not Tolstoy's meaning puzzle.",
        "difficulty": "MEDIUM",
        "isPYQ": false,
        "examinerTrapPattern": "Attributing standard ethical fallacies to an epistemological and axiological argument."
      },
      {
        "type": "CONCEPT_CHECK",
        "stem": "What is the core philosophical insight of Kurt Vonnegut's 'Lucky Mud' reflection, as endorsed by Shelly Kagan in discussing death?",
        "options": [
          "Human bodies are made of dirt, so death is merely returning to physical equilibrium without moral significance.",
          "Conscious life is an unearned, miraculous bonus of physics rather than an entitlement, making resentment toward our mortality rationally groundless.",
          "Humans should avoid all attachments because physical matter is fundamentally dirty and corrupted.",
          "Reincarnation ensures that every lump of mud eventually gets an equal turn at sitting up."
        ],
        "correctAnswer": "Conscious life is an unearned, miraculous bonus of physics rather than an entitlement, making resentment toward our mortality rationally groundless.",
        "explanation": "Vonnegut's reflection highlights that non-living matter has no claim on existence or consciousness. Having the opportunity to 'sit up and look around' is pure good fortune; we were never promised eternity, so resenting death is irrational.",
        "trapExplanation": "Option A reduces the quote to reductive materialism. Option C is Gnostic asceticism. Option D proposes a cyclical theological doctrine absent from Vonnegut and Kagan.",
        "difficulty": "EASY",
        "isPYQ": false,
        "examinerTrapPattern": "Interpreting an existential-axiological insight as a literal physical or theological claim."
      },
      {
        "type": "APPLIED_SCENARIO",
        "stem": "A mid-career civil servant falls into profound apathy, stating: 'Whether I build this hospital or not, in 500 years all the patients will be dead, the building will crumble, and the earth will eventually freeze. Therefore, public service is completely pointless.' Drawing on Kagan's critique of Tolstoy, how should an ethical philosopher counsel this officer?",
        "options": [
          "Agree with the officer, since without eternal consequences, consequentialist ethics mathematically collapses to zero.",
          "Advise the officer to cultivate deliberate psychological denial and pursue religious hero illusions to repress the thought.",
          "Demonstrate that the relief of disease and suffering experienced by patients today possesses genuine, indelible value in its own temporal reality, regardless of cosmic timescales.",
          "Argue that only actions recorded in historical archives possess genuine value."
        ],
        "correctAnswer": "Demonstrate that the relief of disease and suffering experienced by patients today possesses genuine, indelible value in its own temporal reality, regardless of cosmic timescales.",
        "explanation": "The officer suffers from Tolstoy's Duration Fallacy. Value does not require cosmic permanence; relieving suffering for human beings right now is intrinsically good during the time it is experienced.",
        "trapExplanation": "Option A endorses the fallacy. Option B adopts Becker's harmful denial strategy. Option D is an irrelevant distraction.",
        "difficulty": "MEDIUM",
        "isPYQ": false,
        "examinerTrapPattern": "Confusing the transience of an outcome with its lack of intrinsic value."
      }
    ]
  },
  {
    "id": "CON-PHIL-18",
    "topicOrder": 8,
    "topicSlug": "the-morality-and-rationality-of-suicide",
    "topicTitle": "The Morality and Rationality of Suicide",
    "topicDescription": "Systematic philosophical and normative investigation into suicide: distinguishing rationality from morality, resolving the Two-State Requirement, assessing counterfactual lifetime curves, evaluating Kantian deontology vs Utilitarian consequentialism, and formulating the ethics of paternalism and physician-assisted dying.",
    "slug": "rationality-of-suicide-counterfactual-lifetime-curves-intractable-suffering",
    "title": "The Rationality of Suicide: Counterfactual Lifetime Curves & Intractable Suffering",
    "shortDefinition": "Shelly Kagan's formal and prudential investigation into whether suicide can ever make rational sense for an individual (Lecture 24). First decouples rationality (what is prudentially best for the agent) from morality (what is ethically permissible or duties to others). Resolves the philosophical puzzle of the 'Two-State Requirement'—the objection that one cannot be 'better off dead' because death is non-existence rather than an experiential condition—by demonstrating that rational decision-making compares entire counterfactual life trajectories (Life A ending at t vs Life B continuing past t) rather than two concurrent experiential states. Analyzes the Container Theory of life against theories of positive intrinsic value, demonstrating that when a future trajectory contains overwhelming, irremediable physical or psychological agony, having the container is a net misfortune. Formulates the calculus of Positive-Negative Lifetime Curves, demonstrating that suicide is prudentially rational if and only if the expected future lifetime curve from that point forward has a strictly negative net integral.",
    "difficulty": "ADVANCED",
    "claims": [
      {
        "id": "CLM-PHIL-18-01",
        "statement": "In normative axiology, the question of whether suicide is prudentially rational (whether the agent is better off dead) is logically distinct and separable from whether suicide is morally permissible (whether it violates duties to others, oneself, or moral law).",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Yale PHIL 176, Lecture 24 (MajfZIyHP8U) \"Suicide, Part I: The Rationality of Suicide\", 00:00–05:10",
        "excerpt": "The very first thing to do in thinking about suicide is to distinguish questions of rationality from questions of morality. Sometimes it's rationally acceptable to do something, but immoral; sometimes it's morally acceptable, but irrational. They must be examined separately."
      },
      {
        "id": "CLM-PHIL-18-02",
        "statement": "The philosophical objection known as the 'Two-State Requirement'—which asserts that an agent can never be 'better off dead' because non-existence is not an experiential state—is fallacious; prudential rationality requires evaluating and comparing two whole counterfactual lifetime trajectories rather than two concurrent post-decision states.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Yale PHIL 176, Lecture 24 (MajfZIyHP8U) \"Suicide, Part I: The Rationality of Suicide\", 05:14–17:05",
        "excerpt": "The two-state requirement says to compare how well off you are before with how well off you are after. But non-existence isn't a state. We resolve this by comparing two possible lives: the life that ends now, versus the life that continues. That comparison makes perfect sense."
      },
      {
        "id": "CLM-PHIL-18-03",
        "statement": "Under the Container Theory of life, biological life is not intrinsically good in itself, but functions as a vessel whose value is strictly instrumental, derived from the positive or negative quality of the experiences and activities it holds; when the container holds only intractable, agonizing suffering, continuing life is an instrumental misfortune.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Yale PHIL 176, Lecture 24 (MajfZIyHP8U) \"Suicide, Part I: The Rationality of Suicide\", 17:11–28:45",
        "excerpt": "Is life valuable in and of itself? On the container view, life is a container. If you fill it with good things, having the container is good. But if you fill it with nothing but pain and misery, having the container is a curse, not a blessing."
      },
      {
        "id": "CLM-PHIL-18-04",
        "statement": "A decision to end one's life is prudentially rational if and only if the counterfactual future lifetime curve from time T onward yields a strictly negative integral of well-being, such that continuing to live diminishes the cumulative value of the agent's life compared to dying at T.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Yale PHIL 176, Lecture 24 (MajfZIyHP8U) \"Suicide, Part I: The Rationality of Suicide\", 28:51–45:10",
        "excerpt": "Graph your life on a curve of positive and negative well-being over time. If the curve dips below zero and stays permanently in the negative—terminal illness with intractable agony—then living longer adds only negative value to the total. In such cases, suicide makes rational sense."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Book with the Ruined Ending",
        "body": "Imagine you are reading a magnificent, 800-page masterwork of literature. The first 700 pages are brilliant, poignant, and uplifting. But at page 701, the author was replaced by a sadistic hack who subjects the beloved characters to 100 pages of unrelenting, graphic, meaningless torture, senseless debasement, and agony, ending in squalor.\n\nNow ask yourself: would the novel have been better if it had simply concluded triumphantly at page 700? Most readers agree: yes! Adding those last 100 pages did not add 'more story'—it actively degraded and spoiled the total work.\n\nProfessor Shelly Kagan demonstrates that human lives follow this exact structure. We must not evaluate life merely by its raw chronological duration, but by its cumulative narrative and experiential quality. If the final chapters of a life contain only unbearable, intractable torment with zero prospect of recovery, prolonging life reduces its total worth.",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "Decoupling Rationality from Morality & The Two-State Fallacy",
        "body": "When approaching suicide, popular discourse often treats suicidal contemplation as immediate proof of either madness (irrationality) or wickedness (immorality). Kagan separates these rigorously:\n\n1. **Prudential Rationality**: Is the person acting in a way that maximizes or protects their own well-being? Are they genuinely 'better off dead'?\n2. **Morality**: Does the action violate moral duties owed to family, children, society, or God?\n\nTo answer the rationality question, Kagan confronts the **Two-State Requirement**: Critics argue that you can never be 'better off dead' because being dead is not a state you inhabit (you don't exist to experience being dead). Kagan shows this objection is a mere semantic trap. When choosing between life and death, we are not comparing two simultaneous experiential rooms; we are comparing **two complete counterfactual lives**:\n- **Life 1**: Truncated at time T, with total cumulative well-being W_1.\n- **Life 2**: Continuing to time T + delta, with total cumulative well-being W_1 + delta W.\n\nIf delta W is strictly negative (due to intractable agony, cognitive disintegration, or terminal pain), then W_1 > W_1 + delta W. Choosing Life 1 leaves you with a life that was, in its entirety, better than Life 2!",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "The Calculus of Counterfactual Lifetime Curves",
        "body": "Kagan models well-being over time using graphical lifetime curves. The y-axis represents the quality of life per unit time (positive above zero, negative below zero), and the x-axis represents time. The total value of a life is the area under the curve:\n\n```\n+-------------------------------------------------------------------------+\n|         KAGAN'S COUNTERFACTUAL LIFETIME TRAJECTORY CURVES               |\n|                                                                         |\n| Well-Being                                                              |\n|   +Q ^                                                                  |\n|      |         Trajectory A (Flourishing Life)                          |\n|      |       .----------------------------------------\\                 |\n|      |      /                                          \\                |\n|    0 +-----+--------------------------------------------\\----+--------> |\n|      |    / \\                                            \\   |  Time t  |\n|      |   /   \\                                            \\  |          |\n|      |  /     \\ Trajectory B (Temporary Crisis/Depression) \\            |\n|      | /       \\___.                                                    |\n|      |/             \\-----> (Recovers to +Q: FUTURE INTEGRAL > 0)       |\n|   -Q v               \\                                                  |\n|                       \\__ Trajectory C (Intractable Terminal Agony)     |\n|                           (Permanently < 0: FUTURE INTEGRAL < 0)        |\n|                                                                         |\n|=========================================================================|\n|                   THE PRUDENTIAL DECISION CRITERION                     |\n|                                                                         |\n| CASE 1: TRAJECTORY B (Temporary Crisis, Grief, Adolescent Angst)        |\n| - Current well-being is deeply negative (-Q).                           |\n| - HOWEVER, counterfactual future contains recovery, love, and purpose.  |\n| - Future integral > 0 -> Suicide is TRAGICALLY IRRATIONAL!              |\n|                                                                         |\n| CASE 2: TRAJECTORY C (Terminal Cancer with Intractable Pain, ALS)       |\n| - Current well-being is negative, and future trajectory is permanently  |\n|   negative with zero medical hope of reversal.                          |\n| - Future integral < 0 -> Continuing to live subtracts value from total. |\n| - Suicide is PRUDENTIALLY RATIONAL!                                     |\n+-------------------------------------------------------------------------+\n```\n\nEven if one rejects the pure Container Theory and insists that bare biological life has positive intrinsic value (V_intrinsic > 0), intense physical agony (-P) can easily overpower V_intrinsic, dragging the net instantaneous balance below zero.",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Bioethics & Jurisprudence Applications",
        "body": "Understanding the rationality of suicide is fundamental to key debates in legal philosophy and applied ethics:\n\n- **Sanctity of Life vs Quality of Life**: In Indian jurisprudence (*Gian Kaur v. State of Punjab*, 1996, and *Common Cause v. Union of India*, 2018), the Supreme Court transitioned from a crude sanctity-of-life absolutism (Article 21) to recognizing that the 'Right to Life' encompasses the 'Right to Die with Dignity' via passive euthanasia. Kagan's counterfactual curve provides the exact philosophical justification for this shift.\n- **UPSC GS4 & Philosophy Optional**: When answering questions on euthanasia or assisted suicide, candidate responses frequently fail because they treat all suicidal ideation as uniform. The decisive analytical move is using Kagan's curves to contrast Trajectory B (treatable psychiatric crisis where intervention is mandatory) against Trajectory C (terminal physical deterioration where continued life is an objective harm).",
        "order": 4
      }
    ],
    "examMappings": [
      {
        "examCode": "PHILOSOPHY_OPTIONAL",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "EXPERT",
        "syllabusUnit": "Paper II: Applied Ethics & Normative Theories — Euthanasia, Suicide, and the Value of Life",
        "notes": "Essential for questions addressing the rationality of suicide, the two-state requirement, and preference utilitarianism.",
        "frequentTraps": "Conflating prudential rationality with moral permissibility; treating life's value as an unquantifiable metaphysical dogma."
      },
      {
        "examCode": "UPSC_GS4",
        "relevance": "DIRECT_OVERLAY",
        "priority": "HIGH",
        "requiredDepth": "PROFICIENT",
        "syllabusUnit": "Ethics and Human Interface: Bioethics, Medical Ethics, Sanctity vs Quality of Life, and Administrative Compassion",
        "notes": "Directly relates to legal frameworks on passive euthanasia, mental healthcare acts, and terminal palliative care.",
        "frequentTraps": "Assuming suicide is always irrational by definition; overlooking the counterfactual baseline in measuring suffering."
      },
      {
        "examCode": "ACADEMIC_PHILOSOPHY",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "EXPERT",
        "syllabusUnit": "Bioethics & Value Theory: The Metaphysics and Rationality of Suicide",
        "notes": "Examines David Velleman's 'Well-Being and Time', Richard Brandt's 'The Morality and Rationality of Suicide', and Kagan.",
        "frequentTraps": "Failing to explain how Kagan resolves the Two-State Requirement through lifetime comparisons."
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Rationality of Suicide: (1) Rationality (better off dead?) is separate from Morality (ethical duties). (2) Two-State Requirement ('non-existence isn't a state') is solved by comparing two COUNTERFACTUAL LIFETIMES (Life ending at t vs Life continuing). (3) Container Theory: Life is a vessel; if filled only with agony, having the vessel is bad. (4) Positive-Negative Curves: Suicide is rational iff future integral is strictly negative (Trajectory C, terminal agony), not temporary dips (Trajectory B).",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "In PHIL 176 (Lecture 24), Shelly Kagan explores the prudential rationality of suicide, decoupling it from moral questions. He resolves the Two-State Requirement—the objection that one cannot be 'better off dead' because death is non-existence rather than an experiential state—by demonstrating that rational decision-making compares two whole counterfactual lives: the life ending now versus the life that continues. On the Container View, life is an instrumental vessel; when filled solely with intractable pain, continuing to exist is a misfortune. By graphing lifetime well-being curves, Kagan proves that suicide is rational if and only if the future trajectory from that point forward has a strictly negative net integral (e.g., terminal illness with unrelenting agony, Trajectory C). In contrast, temporary dips like depression (Trajectory B) have positive future integrals, making suicide in such cases tragically irrational.",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "### Formal Architecture of the Rationality of Suicide\n\n1. **Decoupling Evaluative Spheres**:\n   - Prudential Rationality: What serves the agent's long-term self-interest.\n   - Moral Permissibility: What respects duties to others, oneself, or moral law.\n2. **The Two-State Objection and Its Resolution**:\n   - *Objection*: Comparisons require State A and State B. Non-existence is no state -> Cannot be better off dead.\n   - *Kagan's Solution*: Counterfactual Lifetime Comparison. Compare Total Value of Life 1 (ends at t) with Total Value of Life 2 (ends at t+k). If Life 1 > Life 2, ending life is rational.\n3. **Axiological Theories of Life's Value**:\n   - *Container Theory*: Value of life = sum of contents. Pure misery -> Negative value.\n   - *Intrinsic Value Theory*: Life has baseline positive value (+V), but acute suffering (-P) can mathematically exceed +V, resulting in net negative instantaneous utility.\n4. **The Lifetime Curve Calculus**:\n   - Trajectory B (Temporary Crisis): Net future integral > 0 -> Suicide is IRRATIONAL.\n   - Trajectory C (Intractable Degeneration): Net future integral < 0 -> Suicide is PRUDENTIALLY RATIONAL.",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "stem": "How does Shelly Kagan overcome the 'Two-State Requirement' objection, which claims that an individual can never be 'better off dead'?",
        "options": [
          "By arguing that the soul enters an ethereal astral state of consciousness after biological death.",
          "By proving that non-existence is a negative hedonic state worse than physical pain.",
          "By demonstrating that rational evaluation compares two whole counterfactual life trajectories (one ending now vs one continuing) rather than two concurrent experiential states.",
          "By asserting that the Two-State Requirement applies only to economic goods, not biological organisms."
        ],
        "correctAnswer": "By demonstrating that rational evaluation compares two whole counterfactual life trajectories (one ending now vs one continuing) rather than two concurrent experiential states.",
        "explanation": "Kagan resolves the puzzle by showing we do not compare being alive with being dead as two concurrent phenomenal states. Instead, we compare the total value of two counterfactual lives: the life that ends at time T versus the life that continues past T.",
        "trapExplanation": "Option A relies on dualism Kagan rejects. Option B falsely claims non-existence is an experiential state. Option D is an arbitrary distinction.",
        "difficulty": "MEDIUM",
        "isPYQ": false,
        "examinerTrapPattern": "Suggesting that Kagan posits an experiential afterlife to satisfy the two-state requirement."
      },
      {
        "type": "CONCEPT_CHECK",
        "stem": "Under Kagan's lifetime curve analysis, under what precise mathematical condition is suicide prudentially rational for an individual?",
        "options": [
          "Whenever instantaneous well-being at time T drops below zero, even momentarily.",
          "If and only if the expected integral of well-being for the counterfactual remaining future of the life is strictly negative.",
          "Only when the total past well-being of the life was negative.",
          "Suicide is never prudentially rational under any circumstances, because life has infinite intrinsic value."
        ],
        "correctAnswer": "If and only if the expected integral of well-being for the counterfactual remaining future of the life is strictly negative.",
        "explanation": "Suicide is rational only when what lies ahead from that point forward has a net negative balance (Trajectory C). If the future contains net positive well-being (Trajectory B), dying truncates positive value and is irrational.",
        "trapExplanation": "Option A would make suicide rational during any brief sadness or headache. Option C commits the sunk cost fallacy (past value is fixed). Option D asserts an absolute dogma Kagan refutes.",
        "difficulty": "MEDIUM",
        "isPYQ": false,
        "examinerTrapPattern": "Confusing instantaneous negative well-being (a temporary dip) with a permanently negative future integral."
      },
      {
        "type": "APPLIED_SCENARIO",
        "stem": "A 21-year-old student experiences a devastating romantic breakup and severe academic failure, concluding: 'My life has hit rock bottom; therefore, ending it now is the only rational choice.' How would Kagan's lifetime curve framework classify this reasoning?",
        "options": [
          "Rationally sound, because the student's current instantaneous well-being is deeply negative.",
          "Prudentially irrational, because this is a Trajectory B scenario: an acute, temporary dip where the expected counterfactual future contains decades of potential recovery and positive well-being, meaning suicide destroys a net-positive future.",
          "Rationally sound, provided the student holds a preference utilitarian rather than a hedonistic ethical framework.",
          "Neither rational nor irrational, because emotional events cannot be graphed on a coordinate plane."
        ],
        "correctAnswer": "Prudentially irrational, because this is a Trajectory B scenario: an acute, temporary dip where the expected counterfactual future contains decades of potential recovery and positive well-being, meaning suicide destroys a net-positive future.",
        "explanation": "This is a classic Trajectory B case. Although instantaneous well-being is negative, the future trajectory will almost certainly rebound, yielding a large positive integral over the remaining decades. Ending life now destroys those future positive goods, making the act tragically irrational.",
        "trapExplanation": "Option A evaluates only the instantaneous point, ignoring the future integral. Option C misapplies preference utilitarianism. Option D dismisses formal axiology.",
        "difficulty": "HARD",
        "isPYQ": false,
        "examinerTrapPattern": "Treating current emotional intensity as a proxy for the entire remaining lifetime trajectory."
      }
    ]
  },
  {
    "id": "CON-PHIL-19",
    "topicOrder": 8,
    "topicSlug": "the-morality-and-rationality-of-suicide",
    "topicTitle": "The Morality and Rationality of Suicide",
    "topicDescription": "Systematic philosophical and normative investigation into suicide: distinguishing rationality from morality, resolving the Two-State Requirement, assessing counterfactual lifetime curves, evaluating Kantian deontology vs Utilitarian consequentialism, and formulating the ethics of paternalism and physician-assisted dying.",
    "slug": "morality-of-suicide-deontological-vs-consequentialist-assessments",
    "title": "The Morality of Suicide: Deontological vs. Consequentialist Ethical Assessments",
    "shortDefinition": "Comprehensive normative ethical investigation into whether suicide can ever be morally permissible or whether it is categorically wrong (Lectures 24 & 25). Scrutinizes classical theological doctrines (God as gift-giver; Locke and Plato's military sentry metaphor) and demonstrates their philosophical inadequacies. Applies Consequentialism (Utilitarianism) to evaluate suicide's massive interpersonal externalities: demonstrating that in almost all ordinary circumstances, the catastrophic emotional devastation, severe trauma, and economic destitution inflicted upon family, dependents, and society render suicide severely morally impermissible, even when an agent subjectively desires it. Investigates Immanuel Kant's deontological Formula of Humanity, which categorically prohibits suicide on the grounds that destroying one's rational capacity merely to escape unpleasant sensations treats autonomous humanity as a disposable instrument. Contrasts Kantian absolutism with contemporary rights-based frameworks that argue respecting personal autonomy and dignity requires permitting voluntary dying when terminal physical dissolution threatens the complete obliteration of rational personhood.",
    "difficulty": "ADVANCED",
    "claims": [
      {
        "id": "CLM-PHIL-19-01",
        "statement": "Classical theological prohibitions against suicide—specifically the arguments that life is a divine gift that cannot be refused, or that human beings are soldiers stationed on sentry duty by God who cannot desert their post—fail philosophically because returning an unrequested gift that has become a torture device violates no duty of gratitude, and benevolent commanders do not demand useless suffering when a post is destroyed.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Yale PHIL 176, Lecture 25 (nKbV8NcyCrk) \"Suicide, Part II: The Morality of Suicide\", 02:15–16:40",
        "excerpt": "Consider the gift argument: suicide is turning down God's gift. But if someone gives you a gift that turns out to be a box of live scorpions, returning it isn't an insult. And on the soldier argument: does God really demand you stay at a post where you are suffering without accomplishing anything?"
      },
      {
        "id": "CLM-PHIL-19-02",
        "statement": "Under consequentialist (utilitarian) ethics, the vast majority of real-world suicides are morally wrong because they produce catastrophic negative externalities—profound psychological trauma, enduring grief, social stigma, and economic harm inflicted on family, dependents, and friends—that vastly outweigh the individual's hedonic relief.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Yale PHIL 176, Lecture 25 (nKbV8NcyCrk) \"Suicide, Part II: The Morality of Suicide\", 16:50–31:20",
        "excerpt": "Even if an individual would be better off dead, morality requires looking at the effects on others. The pain, guilt, trauma, and economic burden inflicted on loved ones usually vastly outweighs the benefit to the individual, making suicide consequentialistically wrong."
      },
      {
        "id": "CLM-PHIL-19-03",
        "statement": "Immanuel Kant's deontological ethics categorically forbids suicide under the Formula of Humanity, arguing that destroying one's rational personhood to escape pain treats one's moral agency merely as a disposable means to a hedonic end, violating an absolute duty owed to oneself.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Yale PHIL 176, Lecture 25 (nKbV8NcyCrk) \"Suicide, Part II: The Morality of Suicide\", 31:30–42:15; Immanuel Kant, \"Groundwork of the Metaphysics of Morals\" (1785)",
        "excerpt": "Kant argues that you must never treat humanity, in yourself or others, merely as a means. To kill yourself to escape pain is to use your rational agency as a mere tool to eliminate unpleasant sensations, annihilating the very source of moral value."
      },
      {
        "id": "CLM-PHIL-19-04",
        "statement": "Contemporary liberal and rights-based moral philosophies challenge Kantian absolutism by asserting that when terminal degenerative illness inexorably destroys cognitive autonomy and bodily dignity, exercising the right to a planned death is an expression of autonomous agency rather than its degradation.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "SCHOLARLY_CONSENSUS",
        "confidence": "HIGH",
        "locator": "Yale PHIL 176, Lecture 25 (nKbV8NcyCrk) \"Suicide, Part II: The Morality of Suicide\", 42:25–51:10; Ronald Dworkin et al., \"Philosophers' Brief\" (1997)",
        "excerpt": "Does dignity require suffering through dementia or agony to the bitter end? Many modern philosophers argue that choosing the time and manner of one's departure when agency is dying is the ultimate exercise of autonomy, not its violation."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Sentry at the Post and the Burning Tank",
        "body": "In John Locke's *Second Treatise* and Plato's *Phaedo*, a powerful image is introduced: God has placed each human being at a specific military post, like a sentry on night watch. To abandon that post through suicide is desertion, punishable as high treason against the Sovereign.\n\nNow consider an alternative scenario: a soldier is trapped inside a burning tank. His ammunition is gone, the hatches are welded shut by heat, rescue is physically impossible, and he has 30 seconds before the fire incinerates him in agony. He holds a sidearm. Does any benevolent commander demand that he endure the agonizing burns rather than use the sidearm? Shelly Kagan uses this intuition to separate rigid dogmatic moralizing from nuanced normative analysis: under what conditions, if ever, does the moral duty to endure life expire?",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "Consequentialist Externalities vs Kantian Duties to Oneself",
        "body": "When moral philosophers evaluate suicide, they examine two major ethical traditions that evaluate the act from opposing foundations:\n\n1. **Consequentialism (Utilitarianism)**: Morality evaluates the overall net utility produced for all affected parties. An agent considering suicide often focuses exclusively on their own suffering. But consequentialism insists on counting the ripple effects:\n   - **Negative Externalities**: Surviving family members experience lifelong guilt, trauma, depression, social stigma, and potential economic collapse if dependents are left destitute. In standard cases, these externalities produce an enormous sum of negative utility, making suicide **morally impermissible**.\n   - **Exceptions**: In rare cases—such as a terminally ill patient whose care imposes immense financial and emotional ruin, where loved ones give loving, informed consent—the net balance may shift, permitting voluntary euthanasia.\n\n2. **Deontological Ethics (Immanuel Kant)**: Kant famously argued in the *Groundwork* that suicide is strictly prohibited, regardless of consequences. Under the **Formula of Humanity** ('Act in such a way that you treat humanity, whether in your own person or in any other, always as an end and never merely as a means'):\n   - To kill oneself to avoid suffering is to treat one's own rational personhood as a disposable instrument for the sake of hedonic relief.\n   - For Kant, rational agency is the objective foundation of all moral value. Using agency to annihilate agency to satisfy a subjective preference for non-pain is a direct contradiction of reason.",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "The Normative Ethical Matrix for Evaluating Suicide",
        "body": "The following structured comparison diagrams the four major moral frameworks addressing suicide and their distinct evaluation criteria:\n\n```\n+-------------------------------------------------------------------------+\n|          NORMATIVE ETHICAL FRAMEWORKS ON THE MORALITY OF SUICIDE        |\n|                                                                         |\n| FRAMEWORK       CORE PRINCIPLE       APPLICATION TO SUICIDE             |\n| ----------------------------------------------------------------------- |\n| 1. THEOLOGICAL  Divine Ownership     Impermissible: Violates Creator's  |\n|    (Plato/Locke)(Sentry at Post)     dominion. (Kagan Rebuttal: Cruelty |\n|                                      contradicts divine benevolence).   |\n|                                                                         |\n| 2. UTILITARIAN  Net Aggregate Utility Impermissible in ordinary crises  |\n|    (Bentham/    (Summing effects on  due to massive external trauma;    |\n|     Mill)       self + loved ones)   Permissible in terminal agony with |\n|                                      depleted options & informed support|\n|                                                                         |\n| 3. KANTIAN      Formula of Humanity  Categorically Impermissible: Uses  |\n|    DEONTOLOGY   (Never treat agency  rational agency merely as a tool   |\n|    (Kant)       merely as a means)   for hedonic relief.                |\n|                                                                         |\n| 4. AUTONOMY &   Self-Ownership &     Permissible in end-of-life cases:  |\n|    DIGNITY      Personal Integrity   When illness destroys agency,      |\n|    (Dworkin)                         choosing one's departure affirms   |\n|                                      autonomous narrative dignity.      |\n+-------------------------------------------------------------------------+\n```\n\nKagan concludes that while theological and strict Kantian prohibitions face deep theoretical vulnerabilities, consequentialism provides a powerful, realistic secular reason why most suicides are profoundly morally wrong: we are morally intertwined with others.",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Normative Ethics & Applied Moral Philosophy in UPSC / Academic Papers",
        "body": "This concept is foundational for normative ethics questions across competitive examinations:\n\n- **UPSC GS4 (Applied Ethics & Euthanasia)**: In case studies involving end-of-life decisions, candidates frequently give sentimental or purely legal answers. High-scoring responses apply the dual-framework approach: analyzing Consequentialist externalities (impact on family, hospital resources, societal slippery slope) versus Deontological principles (patient's bodily autonomy and dignity vs medical duty of beneficence and non-maleficence).\n- **Philosophy Optional (Kant vs Utilitarianism)**: A classic Paper II question asks: 'Evaluate Kant's prohibition of suicide. Does it succeed where utilitarianism fails?' Kant provides an absolute prohibition grounded in duties to oneself, but struggles with cases where continued biological existence actively destroys mental competence; Utilitarianism naturally accommodates nuances through the hedonic calculus but risks treating the individual merely as a utility-bearing node for family preferences.",
        "order": 4
      }
    ],
    "examMappings": [
      {
        "examCode": "PHILOSOPHY_OPTIONAL",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "EXPERT",
        "syllabusUnit": "Paper II: Western Ethics — Kantian Deontology, Utilitarianism, and Applied Moral Issues (Suicide & Euthanasia)",
        "notes": "Directly tests Kant's categorical imperative, duties to oneself, Mill's Harm Principle, and theological voluntarism.",
        "frequentTraps": "Equating Kant's duty against suicide with religious sanctity of life; failing to calculate interpersonal externalities in utilitarian models."
      },
      {
        "examCode": "UPSC_GS4",
        "relevance": "DIRECT_OVERLAY",
        "priority": "HIGH",
        "requiredDepth": "PROFICIENT",
        "syllabusUnit": "Ethics and Human Interface: Moral Philosophers, Ethical Dilemmas, and Value Conflicts in Human Action",
        "notes": "Critical for handling complex healthcare ethics, terminal illness cases, and balancing family distress against patient suffering.",
        "frequentTraps": "Ignoring the profound traumatic externalities inflicted on survivors when assessing suicide morally."
      },
      {
        "examCode": "ACADEMIC_PHILOSOPHY",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "EXPERT",
        "syllabusUnit": "Normative Ethics & Practical Philosophy: Deontology, Consequentialism, and the Morality of Self-Killing",
        "notes": "Covers Ronald Dworkin, Thomas Nagel, Robert Nozick's entitlement theory, and Kant's Metaphysics of Morals.",
        "frequentTraps": "Confusing whether an act is prudentially irrational with whether it is morally impermissible."
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Morality of Suicide: (1) Theological claims (God's gift/sentry) fail: returning a torture device isn't an insult; benevolent commanders don't mandate useless agony. (2) Utilitarianism: Most suicides are MORALLY WRONG due to massive negative externalities (trauma, grief, economic ruin to loved ones). (3) Kant's Formula of Humanity: Categorically forbids suicide—using rational agency merely as a tool to escape pain degrades personhood. (4) Modern Autonomy Defense: Dignified death can protect agency against degrading biological dissolution.",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "In PHIL 176 (Lecture 25), Shelly Kagan investigates the moral permissibility of suicide across major ethical systems. He critiques classical theological arguments (the divine gift and sentry metaphors), showing that benevolence would not enforce meaningless suffering. Turning to secular ethics, Consequentialism (Utilitarianism) demonstrates that even if suicide is prudentially rational for an individual, it is almost always morally wrong due to catastrophic negative externalities: lifelong trauma, grief, and destitution inflicted upon family and society. Deontologically, Immanuel Kant categorically forbids suicide via the Formula of Humanity, arguing that destroying rational personhood to escape pain treats moral agency merely as a disposable means to hedonic relief. However, modern liberal philosophers (like Ronald Dworkin) argue that in terminal illness, choosing the timing of death can be an affirmation of autonomous narrative dignity rather than its degradation.",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "### Normative Ethical Architecture of Suicide\n\n1. **Critique of Theological Prohibitions**:\n   - *Gift Argument*: Life is an unasked-for gift. If it becomes a vehicle of unrelenting agony, returning it is morally coherent.\n   - *Sentry Argument*: God posted us on duty. If the post is destroyed (terminal agony) and no moral purpose remains, withdrawal is consistent with divine benevolence.\n2. **Consequentialist Analysis (Utilitarian Calculus)**:\n   - Primary Variable: Aggregate societal and family utility.\n   - Negative Externalities: Emotional trauma to survivors, loss of economic support, normalization of despair.\n   - Verdict: Vast majority of suicides are morally impermissible, even if prudentially desired.\n3. **Deontological Analysis (Kantian Ethics)**:\n   - *Formula of Humanity*: Treat rational nature always as an end, never merely as a means.\n   - *Kant's Prohibition*: Suicide subordinates the infinite value of rational agency to an animal desire for pain relief.\n4. **The Modern Autonomy & Dignity Counter-Argument**:\n   - Terminal physical decay destroys the substrate of rational agency.\n   - Voluntary euthanasia can serve as an autonomous defense of personhood against humiliating dissolution.",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "stem": "According to Immanuel Kant, why is committing suicide to escape physical agony or psychological suffering morally impermissible?",
        "options": [
          "Because it reduces the aggregate happiness of the human race below the utilitarian baseline.",
          "Because it treats one's rational personhood merely as a means to achieve hedonic relief, violating the Formula of Humanity.",
          "Because the state owns each citizen's physical body as public property.",
          "Because non-existence is a state of eternal metaphysical sin."
        ],
        "correctAnswer": "Because it treats one's rational personhood merely as a means to achieve hedonic relief, violating the Formula of Humanity.",
        "explanation": "Kant's Formula of Humanity mandates that rational agency must never be treated merely as a means to an end. Using your capacity for choice to annihilate your agency just to stop unpleasant feelings degrades rational personhood to a disposable tool for hedonic convenience.",
        "trapExplanation": "Option A describes utilitarianism, which Kant strictly opposed. Option C describes totalitarian statism. Option D is religious dogma.",
        "difficulty": "MEDIUM",
        "isPYQ": false,
        "examinerTrapPattern": "Confusing Kantian deontological duties to oneself with utilitarian calculations of aggregate happiness."
      },
      {
        "type": "CONCEPT_CHECK",
        "stem": "Under a secular Utilitarian (Consequentialist) ethical framework, what is the primary reason why suicide in ordinary circumstances is considered morally wrong?",
        "options": [
          "Because God is the sole author and owner of human life.",
          "Because destroying a human body violates the intrinsic sacredness of biological cells.",
          "Because the severe negative externalities inflicted on loved ones—enduring trauma, grief, stigma, and economic harm—vastly outweigh the individual's hedonic relief.",
          "Because death is non-existence, and non-existence has a mathematical utility of negative infinity."
        ],
        "correctAnswer": "Because the severe negative externalities inflicted on loved ones—enduring trauma, grief, stigma, and economic harm—vastly outweigh the individual's hedonic relief.",
        "explanation": "Consequentialism counts the utility of everyone affected. In typical suicides, the crushing emotional devastation, guilt, and social disruption inflicted upon family and community far exceed whatever temporary relief the agent sought.",
        "trapExplanation": "Option A is theological. Option B posits biological sanctity alien to utilitarianism. Option D misunderstands non-existence (which is 0, not negative infinity).",
        "difficulty": "EASY",
        "isPYQ": false,
        "examinerTrapPattern": "Failing to account for third-party interpersonal externalities in consequentialist calculations."
      },
      {
        "type": "APPLIED_SCENARIO",
        "stem": "A software engineer with a spouse and two young children incurs massive financial debts and experiences severe depression. He contemplates suicide, reasoning: 'I will be free of stress, and my debt problems will be gone.' How would a rigorous ethical analysis evaluate his contemplation?",
        "options": [
          "Morally permissible, because every individual possesses absolute libertarian self-ownership to terminate their life at will.",
          "Morally impermissible under Utilitarianism due to immense negative externalities on his children and spouse, and impermissible under Kantian deontology as using himself as a mere means to escape stress.",
          "Morally permissible under Kantian deontology, provided his maxim can be universalized into a law of nature.",
          "Morally impermissible only if he belongs to an organized religious denomination that forbids suicide."
        ],
        "correctAnswer": "Morally impermissible under Utilitarianism due to immense negative externalities on his children and spouse, and impermissible under Kantian deontology as using himself as a mere means to escape stress.",
        "explanation": "Both major ethical systems condemn this act: Utilitarianism rejects it because the emotional and financial ruin inflicted on his spouse and children vastly outweighs his relief; Kant rejects it because he uses his rational agency merely as a tool to flee debt and stress.",
        "trapExplanation": "Option A asserts an extreme libertarian stance that ignores moral obligations to dependents. Option C misapplies Kant's universal law test (which fails for suicide). Option D limits morality to religious affiliation.",
        "difficulty": "HARD",
        "isPYQ": false,
        "examinerTrapPattern": "Overlooking how multiple normative frameworks converge on condemning common crisis suicides."
      }
    ]
  },
  {
    "id": "CON-PHIL-20",
    "topicOrder": 8,
    "topicSlug": "the-morality-and-rationality-of-suicide",
    "topicTitle": "The Morality and Rationality of Suicide",
    "topicDescription": "Systematic philosophical and normative investigation into suicide: distinguishing rationality from morality, resolving the Two-State Requirement, assessing counterfactual lifetime curves, evaluating Kantian deontology vs Utilitarian consequentialism, and formulating the ethics of paternalism and physician-assisted dying.",
    "slug": "paternalism-suicide-intervention-ethics-of-rational-assistance",
    "title": "Paternalism, Suicide Intervention & The Ethics of Rational Assistance",
    "shortDefinition": "Shelly Kagan's epistemological, normative, and policy analysis of suicide intervention, paternalism, and physician-assisted dying (Lectures 25 & 26). Investigates the severe epistemic vulnerability of suicidal individuals: clinical depression, acute emotional trauma, and tunnel vision systematically distort cognitive faculties, making agents radically miscalculate their counterfactual life curves (mistaking temporary Trajectory B crises for permanent Trajectory C agony). Formulates the philosophical justification for Soft Paternalism—justifying physical or legal intervention whenever an agent's autonomous decision-making capacity is substantially impaired. Proves the Precautionary Asymmetry Principle under decision theory: the error of unwarranted intervention is temporary and completely reversible (the agent remains alive and can decide later), whereas the error of non-intervention is catastrophic and irreversible (permanent annihilation of a recoverable flourishing life). Concludes by establishing the strict institutional and moral safeguards required for legitimate physician-assisted dying and rational assistance.",
    "difficulty": "ADVANCED",
    "claims": [
      {
        "id": "CLM-PHIL-20-01",
        "statement": "Severe psychological trauma, clinical depression, and crisis states systematically produce profound cognitive distortions—temporal discounting, catastrophic overgeneralization, and affective blindness—that destroy an individual's epistemic reliability in estimating their future counterfactual well-being curve.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Yale PHIL 176, Lecture 25 (nKbV8NcyCrk) 45:30–52:00; Lecture 26 (T-IgKgTcHkU) 03:20–15:40",
        "excerpt": "When you are deeply depressed, you literally cannot imagine things getting better. Your judgment about your future life curve is compromised by the very condition that makes you want to die. You cannot trust your own assessment."
      },
      {
        "id": "CLM-PHIL-20-02",
        "statement": "Soft paternalist intervention to halt an immediate suicide attempt is morally justified and required, because the vast majority of acute suicidal crises involve substantially compromised cognitive competence, where the individual is acting under temporary emotional distress rather than settled autonomous rationality.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "SCHOLARLY_CONSENSUS",
        "confidence": "HIGH",
        "locator": "Yale PHIL 176, Lecture 26 (T-IgKgTcHkU) \"Suicide, Part III: Paternalism and Assistance\", 15:50–27:30; Joel Feinberg, \"Harm to Self\" (1986)",
        "excerpt": "Soft paternalism says: intervene when someone's autonomy is compromised. If a man is about to step onto a damaged bridge not knowing it's broken, you pull him back. In suicide, the emotional fog prevents clear evaluation; intervening restores the conditions for genuine choice."
      },
      {
        "id": "CLM-PHIL-20-03",
        "statement": "Under normative decision theory, the Precautionary Asymmetry Principle mandates immediate suicide intervention because the harms of error are radically asymmetric: erroneously stopping a rational suicide produces a minor, reversible delay, whereas erroneously failing to stop an irrational suicide causes absolute, irreversible annihilation of a recoverable life.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Yale PHIL 176, Lecture 26 (T-IgKgTcHkU) \"Suicide, Part III: Paternalism and Assistance\", 27:45–38:10",
        "excerpt": "Consider the two possible mistakes. If I stop someone whose suicide would have been rational, they stay alive and can still kill themselves later; the mistake is reversible. But if I fail to stop someone whose suicide is irrational, they are dead forever; the mistake is completely irreversible."
      },
      {
        "id": "CLM-PHIL-20-04",
        "statement": "Physician-assisted dying and rational suicide assistance are morally defensible only under strict institutional safeguards: sustained voluntary requests over mandatory deliberation intervals, independent psychiatric verification of non-depression, and an irreversible terminal physical prognosis with intractable suffering.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "SCHOLARLY_CONSENSUS",
        "confidence": "HIGH",
        "locator": "Yale PHIL 176, Lecture 26 (T-IgKgTcHkU) \"Suicide, Part III: Paternalism and Assistance\", 38:20–49:30",
        "excerpt": "Assisting a suicide can be morally permissible only when we are confident the person is in Trajectory C, their decision is fully rational, calm, uncoerced, and enduring over time. Without strict institutional safeguards, the danger of abuse and misdiagnosis is enormous."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Broken Bridge and the Golden Gate",
        "body": "In *Harm to Self*, philosopher Joel Feinberg presents a classic thought experiment: You see a man about to walk across a dilapidated bridge over a raging chasm. You know the bridge is broken in the middle, but he does not speak your language and is walking briskly. Are you morally permitted to physically tackle him to prevent him from crossing?\n\nVirtually everyone says: yes! Tackling him is not violating his liberty; it is verifying whether he genuinely intends to plunge to his death, or whether he is merely ignorant of the broken planks. If, after being informed, he calmly insists he wants to jump, the question of hard paternalism arises.\n\nNow look at the empirical reality: studies of survivors who were physically restrained or survived jumping from the Golden Gate Bridge reveal that over 90% never attempt suicide again. They were standing on a metaphorical broken bridge, blinded by a temporary psychiatric fog. Shelly Kagan asks: does respect for human dignity demand that we intervene, or that we stand idly by?",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "Epistemic Vulnerability, Soft Paternalism & Decision Theory",
        "body": "Kagan's final lecture synthesizes ethics, psychology, and decision theory around three core pillars:\n\n1. **The Epistemic Problem**: In Lecture 24, Kagan showed that suicide is rational only when the future lifetime curve is permanently negative (Trajectory C). But how can the agent know they are in Trajectory C? Clinical depression and severe grief produce profound **cognitive distortions**: the brain is gripped by affective tunnel vision, convincing the sufferer that pain is eternal and recovery impossible. Because the faculty of judgment itself is corrupted by the crisis, the suicidal agent's subjective conviction cannot be trusted as an objective calculation of counterfactual well-being.\n\n2. **Soft vs Hard Paternalism**:\n   - **Hard Paternalism**: Overriding an agent's fully informed, lucid, voluntary decision 'for their own good.' (Highly controversial in liberal ethics).\n   - **Soft Paternalism**: Overriding an agent's action to verify whether it is genuinely informed and autonomous, or intervening because their rational faculties are temporarily compromised. Soft paternalism is universally recognized as morally legitimate and mandatory.\n\n3. **The Precautionary Asymmetry Principle**: When a bystander or society faces uncertainty about whether a suicide attempt is rational or irrational, decision theory dictates calculating the minimax regret:",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "The Precautionary Decision Matrix & Institutional Safeguards",
        "body": "The following decision-theoretic matrix illustrates why immediate intervention is a categorical moral imperative under uncertainty:\n\n```\n+-------------------------------------------------------------------------+\n|        DECISION THEORY UNDER UNCERTAINTY: THE INTERVENTION MATRIX       |\n|                                                                         |\n| REALITY OF THE AGENT:       TRAJECTORY B             TRAJECTORY C       |\n|                             (Temporary Crisis)       (Terminal Agony)   |\n| ----------------------------------------------------------------------- |\n| ACTION 1: INTERVENE                                                     |\n| (Physical restraint,        MASSIVE SUCCESS!         MINOR LOSS:        |\n|  psychiatric evaluation)    Flourishing decades      Temporary delay;   |\n|                             restored. Catastrophic   lucid deliberation |\n|                             error avoided.           can resume later.  |\n|                             [REVERSIBLE OUTCOME]     [REVERSIBLE]       |\n| ----------------------------------------------------------------------- |\n| ACTION 2: DO NOT INTERVENE                                              |\n| (Stand by, passivity)       CATASTROPHIC DISASTER!   MINOR BENEFIT:     |\n|                             Irreversible loss of     Agony terminated   |\n|                             a salvageable, rich      slightly earlier.  |\n|                             human life.                                 |\n|                             [IRREVERSIBLE DEATH]     [IRREVERSIBLE]     |\n| ======================================================================= |\n| RULE: Minimax regret mandates ACTION 1 (Immediate Soft Paternalism)!    |\n+-------------------------------------------------------------------------+\n```\n\nFor **Physician-Assisted Dying (PAD)**, where Trajectory C is objectively verified, Kagan outlines the required institutional safeguards:\n1. **Irreversible Prognosis**: Multiple independent oncologists/neurologists confirm incurable, terminal physical disease.\n2. **Psychiatric Clearance**: Formal evaluation verifying the absence of clinical depression or treatable delirium.\n3. **Temporal Stability**: Mandatory reflection periods (e.g., 15–30 days) with repeated, documented, voluntary requests.",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Public Policy, Legal Jurisprudence & Ethical Governance",
        "body": "This concept directly informs governance, mental health policy, and administrative law:\n\n- **Decriminalization of Suicide**: Section 309 of the Indian Penal Code previously criminalized suicide attempts. The Mental Healthcare Act, 2017 (Section 115) created a statutory presumption of severe stress, effectively decriminalizing attempts and mandating state-provided healthcare rather than penal punishment. Kagan's analysis of epistemic vulnerability and soft paternalism provides the precise philosophical rationale for this legislative evolution.\n- **Passive vs Active Euthanasia (*Aruna Shanbaug*, 2011 & *Common Cause*, 2018)**: Indian constitutional law recognizes Advance Medical Directives (Living Wills) and passive euthanasia under strict judicial and medical board oversight. Candidates must highlight how procedural safeguards prevent elder abuse, financial coercion, and misdiagnoses while upholding personal dignity.\n- **Civil Service Ethics (UPSC GS4)**: Questions on suicide prevention hotlines, student mental health crises in coaching hubs (e.g., Kota), and administrative responses to public farmer distress. High-scoring answers avoid moral condemnation, emphasizing institutional soft-paternalist support, mental health infrastructure, and empathetic intervention.",
        "order": 4
      }
    ],
    "examMappings": [
      {
        "examCode": "PHILOSOPHY_OPTIONAL",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "EXPERT",
        "syllabusUnit": "Paper II: Socio-Political Philosophy — Liberty, Paternalism, John Stuart Mill's Harm Principle, and Rights",
        "notes": "Directly assesses Joel Feinberg's soft paternalism, Gerald Dworkin's paternalism criteria, and Mill's bridge example.",
        "frequentTraps": "Confusing soft paternalism with hard paternalism; treating all state intervention as authoritarian overreach."
      },
      {
        "examCode": "UPSC_GS4",
        "relevance": "DIRECT_OVERLAY",
        "priority": "HIGH",
        "requiredDepth": "PROFICIENT",
        "syllabusUnit": "Ethics in Governance: Public Health, Mental Healthcare Act 2017, Right to Die with Dignity, and Administrative Empathy",
        "notes": "Directly relates to the Supreme Court rulings on euthanasia, Section 309 IPC vs Section 115 MHCA, and student crisis management.",
        "frequentTraps": "Treating suicide as a crime rather than a healthcare and ethical crisis requiring empathetic soft-paternalist intervention."
      },
      {
        "examCode": "ACADEMIC_PHILOSOPHY",
        "relevance": "CORE_SYLLABUS",
        "priority": "HIGH",
        "requiredDepth": "EXPERT",
        "syllabusUnit": "Applied Ethics & Political Philosophy: The Limits of State Paternalism and Assisted Dying Legislation",
        "notes": "Examines Oregon's Death with Dignity Act, Canadian MAID legislation, and decision-theoretic models of intervention.",
        "frequentTraps": "Overlooking the Precautionary Asymmetry Principle in decision-making under uncertainty."
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Paternalism & Intervention: (1) Suicidal crisis creates severe COGNITIVE DISTORTIONS; agents cannot accurately evaluate their future life curves. (2) SOFT PATERNALISM: Intervening to prevent action when autonomy/competence is impaired is morally mandatory. (3) PRECAUTIONARY ASYMMETRY: Erroneously stopping a rational suicide is reversible (delay); failing to stop an irrational suicide is irreversible (death). (4) Assisted dying requires strict safeguards: terminal physical illness, psychiatric clearance, and enduring consent.",
        "order": 1
      },
      {
        "type": "SUMMARY_2M",
        "content": "In PHIL 176 (Lectures 25 & 26), Shelly Kagan analyzes suicide intervention and assisted dying. He shows that suicidal individuals suffer from severe epistemic impairment: clinical depression and acute trauma distort judgment, blinding individuals to the fact that their crisis is temporary (Trajectory B) rather than permanent. Soft paternalism justifies immediate intervention because the person's rational autonomy is compromised by crisis. Under decision theory, the Precautionary Asymmetry Principle dictates intervention: if you mistakenly stop a rational suicide, the error is reversible (the person remains alive and can decide later); but if you fail to stop an irrational suicide, the error is completely irreversible (permanent destruction of a recoverable flourishing life). Kagan concludes that physician-assisted dying is morally permissible only for verified terminal cases (Trajectory C) governed by rigorous institutional safeguards, psychiatric clearance, and sustained voluntary requests.",
        "order": 2
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "### Systematic Architecture of Paternalism, Intervention & Assisted Dying\n\n1. **The Epistemic Breakdown in Crisis**:\n   - Sufferer's Perspective: 'The pain is eternal; the future is hopeless.'\n   - Objective Reality: Acute depression impairs temporal forecasting and inflates negative probabilities.\n   - Philosophical Implication: The agent's subjective desire for death cannot be taken as proof of rational self-interest.\n2. **Taxonomy of Paternalism**:\n   - *Hard Paternalism*: Overriding voluntary, autonomous action for the agent's welfare. (Deeply problematic in liberal theory).\n   - *Soft Paternalism*: Overriding action to restore or verify autonomy when agency is compromised. (Morally uncontroversial and obligatory).\n3. **Decision-Theoretic Proof for Intervention (Precautionary Asymmetry)**:\n   - Cost of False Positive (Unnecessary intervention): Minor, temporary delay; autonomy can be exercised later.\n   - Cost of False Negative (Failed intervention): Irreversible loss of decades of good life.\n   - Axiom: Minimax regret requires mandatory intervention in immediate crises.\n4. **Institutional Criteria for Physician-Assisted Dying (PAD)**:\n   - Objective verification of incurable, degenerative somatic illness.\n   - Mandatory psychiatric evaluation confirming absence of treatable affective disorder.\n   - Multi-stage waiting periods ensuring reflective equilibrium and genuine autonomy.",
        "order": 3
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "stem": "What is the primary philosophical justification for 'Soft Paternalism' when intervening to stop an individual from attempting suicide?",
        "options": [
          "The state has absolute legal ownership over the physical bodies of all citizens.",
          "The individual's decision-making capacity is substantially compromised by temporary emotional trauma, cognitive distortion, or psychiatric crisis, preventing genuine autonomous choice.",
          "Suicide reduces taxable economic output, harming government revenue.",
          "Death is an eternal sin that must be prevented by force regardless of the individual's wishes."
        ],
        "correctAnswer": "The individual's decision-making capacity is substantially compromised by temporary emotional trauma, cognitive distortion, or psychiatric crisis, preventing genuine autonomous choice.",
        "explanation": "Soft paternalism justifies intervention when an agent's autonomy is impaired. Because acute crises and depression distort cognitive evaluation, intervening protects the agent from an action they would not choose in a calm, fully lucid state.",
        "trapExplanation": "Option A is totalitarian. Option C is crude economic reductionism. Option D is religious dogma.",
        "difficulty": "MEDIUM",
        "isPYQ": false,
        "examinerTrapPattern": "Confusing soft paternalism (intervening to restore/verify autonomy) with hard paternalism (coercing a competent adult)."
      },
      {
        "type": "CONCEPT_CHECK",
        "stem": "In decision theory, why does the 'Precautionary Asymmetry Principle' compel a bystander to intervene and halt a suicide attempt under conditions of uncertainty?",
        "options": [
          "Because the bystander will be legally liable for murder if they fail to act.",
          "Because erroneous intervention produces a temporary, reversible delay, whereas erroneous non-intervention causes catastrophic, irreversible death.",
          "Because living longer is always mathematically superior to dying, regardless of agony.",
          "Because bystanders have a deontological duty to minimize their own psychological guilt."
        ],
        "correctAnswer": "Because erroneous intervention produces a temporary, reversible delay, whereas erroneous non-intervention causes catastrophic, irreversible death.",
        "explanation": "The harms of the two possible errors are radically asymmetric. If intervention was unnecessary (a rational suicide), the error is reversible (the person remains alive to decide later). If non-intervention was a mistake (an irrational crisis), the person is dead forever and a flourishing life is irreversibly destroyed.",
        "trapExplanation": "Option A is about legal liability rather than normative decision theory. Option C asserts sanctity-of-life absolutism. Option D is egoistic.",
        "difficulty": "MEDIUM",
        "isPYQ": false,
        "examinerTrapPattern": "Focusing on bystander emotions or legal penalties rather than the mathematical asymmetry of reversible vs irreversible outcomes."
      },
      {
        "type": "APPLIED_SCENARIO",
        "stem": "A 72-year-old patient with stage-IV metastatic pancreatic cancer and verified intractable physical suffering calmly requests physician-assisted dying. The hospital ethics committee considers the request. Under Kagan's criteria, which combination of safeguards is required to ethically approve this request?",
        "options": [
          "An immediate execution of the request within 24 hours to maximize hospital bed turnover.",
          "Independent oncological confirmation of terminal prognosis, formal psychiatric evaluation ruling out treatable clinical depression, and repeated voluntary requests over a mandatory waiting period.",
          "Solely obtaining the verbal consent of the patient's nearest relatives, irrespective of the patient's personal lucidity.",
          "Rejecting the request categorically, because palliative care medicine must never allow an intentional death under any circumstances."
        ],
        "correctAnswer": "Independent oncological confirmation of terminal prognosis, formal psychiatric evaluation ruling out treatable clinical depression, and repeated voluntary requests over a mandatory waiting period.",
        "explanation": "Ethical assisted dying requires strict institutional guarantees: verifying that the case is genuinely Trajectory C (terminal and irreversible), confirming cognitive competence without affective distortion, and ensuring enduring, uncoerced autonomy over time.",
        "trapExplanation": "Option A neglects due diligence. Option C violates autonomy by replacing patient consent with family consent. Option D is rigid absolutism.",
        "difficulty": "HARD",
        "isPYQ": false,
        "examinerTrapPattern": "Presenting either reckless haste or dogmatic prohibition as acceptable bioethical practice."
      }
    ]
  }
];

export async function seedBatchP4PhilosophyKnowledge(): Promise<void> {
  console.log(`[Batch P4] Seeding ${BATCH_P4_CONCEPTS.length} Philosophy Master Batch 4 Canonical Concepts (Yale PHIL 176)...`);

  // 1. Ensure Domain Exists
  let domain = await db.domain.findFirst({ where: { slug: 'philosophy-ethics-human-values' } });
  if (!domain) {
    domain = await db.domain.create({
      data: {
        slug: 'philosophy-ethics-human-values',
        name: 'Philosophy, Ethics & Human Values',
        description: 'Universal academic core of philosophy, metaphysics, epistemology, ethics, moral reasoning, and existential inquiry.',
        order: 3,
      },
    });
  }

  // 2. Ensure Subject Exists
  let subject = await db.subject.findFirst({ where: { slug: 'western-philosophy-metaphysics-ethics' } });
  if (!subject) {
    subject = await db.subject.create({
      data: {
        slug: 'western-philosophy-metaphysics-ethics',
        name: 'Western Philosophy: Metaphysics, Mind & Ethics (Yale PHIL 176)',
        description: 'Foundational metaphysical inquiry into the nature of persons, dualism vs. physicalism, personal identity, the badness of death, immortality, and the ethics of suicide based on Yale University Open Course PHIL 176 taught by Prof. Shelly Kagan.',
        scopeStatement: 'Universal academic benchmark for metaphysics, philosophy of mind, and ethics covering Yale PHIL 176 (Death).',
        domainId: domain.id,
        order: 1,
      },
    });
  }

  // 3. Ensure Source Exists
  const sourcePhil = await db.source.upsert({
    where: { id: 'SRC-YALE-PHIL-176' },
    update: {},
    create: {
      id: 'SRC-YALE-PHIL-176',
      title: 'Yale Open Courses — PHIL 176: Death (Prof. Shelly Kagan, Yale University)',
      sourceType: 'ACADEMIC_CANONICAL_SYNTHESIS',
      authorityTier: 'PEER_REVIEWED_ACADEMIC_REFERENCE',
      description: 'Complete 26-lecture semester course in Philosophy taught by Professor Shelly Kagan at Yale University, examining the nature of death, mind-body dualism, personal identity, and the value of life.',
    },
  });

  // 4. Ensure Target Examinations Exist
  const examDefinitions = [
    {
      code: 'PHILOSOPHY_OPTIONAL',
      name: 'Philosophy Optional (UPSC CSE / State PCS)',
      conductingBody: 'UPSC',
      description: 'Civil Services Examination Optional Paper: Normative Ethics, Kantian Deontology, Utilitarianism, Suicide, Euthanasia, and Existential Stances.',
      syllabusSummary: 'Western Philosophy: Axiology of Emotion, Kantian Deontology (Formula of Humanity), Consequentialist Ethics, Paternalism, and the Morality of Suicide.',
    },
    {
      code: 'UPSC_GS4',
      name: 'UPSC General Studies Paper IV (Ethics & Human Values)',
      conductingBody: 'UPSC',
      description: 'General Studies Paper IV: Emotional Intelligence, Bioethics, Mental Healthcare Act 2017, Passive Euthanasia, Living Wills, and Soft Paternalism.',
      syllabusSummary: 'Applied Bioethics: Soft Paternalism, Suicide Prevention, Dignity in Dying, Administrative Empathy, and Quality of Life vs Sanctity of Life.',
    },
    {
      code: 'ACADEMIC_PHILOSOPHY',
      name: 'Academic Philosophy Foundation (University Level)',
      conductingBody: 'UNIVERSITIES',
      description: 'Undergraduate and Graduate Level Foundation in Applied Ethics, Value Theory, and Thanatology.',
      syllabusSummary: 'Applied Normative Ethics: The Rationality and Morality of Suicide, Two-State Requirement, Counterfactual Lifetime Curves, and Paternalism.',
    },
  ];

  const examMap: Record<string, string> = {};
  for (const ed of examDefinitions) {
    let exam = await db.exam.findFirst({ where: { slug: ed.code.toLowerCase().replace(/_/g, '-') } });
    if (!exam) {
      exam = await db.exam.create({
        data: {
          slug: ed.code.toLowerCase().replace(/_/g, '-'),
          name: ed.name,
          conductingBody: ed.conductingBody,
          description: ed.description,
          syllabusSummary: ed.syllabusSummary,
        },
      });
    }
    examMap[ed.code] = exam.id;
  }

  // 5. Group by Topic and Seed
  const topicGroups: Record<string, CanonicalConceptDefinition[]> = {};
  for (const c of BATCH_P4_CONCEPTS) {
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
            sourceId: sourcePhil.id,
            locator: cl.locator,
            excerpt: cl.excerpt,
            evidenceType: 'ACADEMIC_LECTURE_TRANSCRIPT',
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

      // Seed ExamConceptMappings
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
              frequentTraps: em.frequentTraps,
            },
          });
        }
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

  console.log(`[Batch P4] Successfully seeded ${BATCH_P4_CONCEPTS.length} Philosophy Master Batch 4 Canonical Concepts.`);
}
