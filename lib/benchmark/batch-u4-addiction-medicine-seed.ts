import { db } from '../db/client';

export interface UniversalConceptSeed {
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
    claimType: 'CORE_PRINCIPLE' | 'HISTORICAL_FACT' | 'STATUTORY_RULE';
    epistemicLevel: 'ESTABLISHED_FACT' | 'SCHOLARLY_CONSENSUS';
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
  revisionUnits: {
    type: 'FLASH_30S' | 'SUMMARY_2M' | 'ARCHITECTURE_5M';
    content: string;
  }[];
  questions: {
    type: 'CONCEPT_CHECK' | 'APPLIED_SCENARIO';
    difficulty: 'EASY' | 'MEDIUM' | 'HARD';
    stem: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
    trapExplanation?: string;
    examinerTrapPattern?: string;
  }[];
  examMappings: never[];
}

export const MODULE_U4_CONCEPTS: UniversalConceptSeed[] = [
  {
    "id": "CON-ADDICT-01",
    "topicOrder": 1,
    "topicSlug": "addiction-neurobiology-pharmacotherapy-and-clinical-skills",
    "topicTitle": "Addiction Neurobiology, Diagnostic Frameworks, Pharmacotherapy & Harm Reduction",
    "topicDescription": "First-principles biomedical and clinical understanding of Substance Use Disorders: dopamine mesolimbic circuitry, SBIRT screening, evidence-based pharmacotherapies (MOUD/MAT), Motivational Interviewing, and harm reduction frameworks.",
    "slug": "neurobiology-of-addiction-mesolimbic-dopamine-and-brain-disease-model",
    "title": "The Neurobiology of Addiction: Mesolimbic Dopamine Circuitry, Neuroadaptation & Brain Disease Model",
    "shortDefinition": "The biomedical understanding of addiction as a chronic, relapsing medical disorder of the brain characterized by compulsive drug seeking despite adverse consequences. Addictive substances hijack the evolutionary mesolimbic reward system, generating supraphysiological dopamine surges from the Ventral Tegmental Area (VTA) to the Nucleus Accumbens (NAc)—up to 10 times higher than natural rewards like food or mating. Chronic exposure induces profound neuroadaptation: downregulation of striatal dopamine D2 receptors, blunting endogenous dopamine signaling (anhedonia), and causing structural and functional hypoactivity in the prefrontal cortex (PFC), which governs executive judgment and impulse control. Consequently, addiction is recognized by global medical bodies (WHO, NIDA, ASAM) not as a moral failing or lack of willpower, but as a severe neurobiological pathology requiring evidence-based medical treatment.",
    "difficulty": "INTERMEDIATE",
    "claims": [
      {
        "id": "CLM-ADDICT-01-01",
        "statement": "Addiction is officially classified by major medical authorities (WHO, NIDA, ASAM) as a chronic, relapsing medical brain disease characterized by neurochemical and neurostructural changes in reward, motivation, and executive control circuits.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Volkow, Koob, & McLellan, Neurobiologic Advances from the Brain Disease Model of Addiction, NEJM (2016)",
        "excerpt": "Substance use disorder is a chronic brain disease resulting from complex interactions between biological vulnerabilities, environmental exposures, and the neurochemical hijacking of evolutionary survival circuits."
      },
      {
        "id": "CLM-ADDICT-01-02",
        "statement": "All addictive substances trigger supraphysiological increases in extracellular dopamine concentrations in the Nucleus Accumbens via dopaminergic projections from the Ventral Tegmental Area (VTA), reinforcing drug-seeking behaviors through associative reward prediction error learning.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Koob & Volkow, Neurobiology of Addiction: A Neurocircuitry Analysis, Lancet Psychiatry (2016)",
        "excerpt": "The common neurobiological substrate of all addictive substances is their ability to induce dramatic, non-physiological dopamine release within the ventral striatum and nucleus accumbens, reinforcing conditioned cue-seeking."
      },
      {
        "id": "CLM-ADDICT-01-03",
        "statement": "Chronic substance misuse induces homeostatic neuroadaptations, prominently down-regulating striatal dopamine D2 receptors and exhausting endogenous dopamine synthesis, causing persistent anhedonia and tolerance where natural rewards fail to activate the brain's hedonic circuitry.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Volkow et al., Decreased dopamine D2 receptor availability is associated with reduced frontal metabolism in cocaine abusers, Synapse (1993)",
        "excerpt": "PET neuroimaging demonstrates marked reductions in striatal dopamine D2 receptor availability in individuals with substance dependence, persisting long after acute detoxification and mediating severe anhedonia."
      },
      {
        "id": "CLM-ADDICT-01-04",
        "statement": "Prolonged substance use impairs prefrontal cortex (PFC) executive control circuits (including the dorsolateral PFC, orbitofrontal cortex, and anterior cingulate cortex), degrading top-down inhibitory control and resulting in compulsive, automatic drug consumption despite catastrophic personal harm.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Goldstein & Volkow, Dysfunction of the prefrontal cortex in addiction: neuroimaging findings and clinical implications, Nature Reviews Neuroscience (2011)",
        "excerpt": "Disruptions in prefrontal cortical networks erode top-down inhibitory control over subcortical habit and craving hubs, transforming voluntary consumption into compulsive, automatic relapse cycles."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Broken Brake and the Hijacked Thermostat",
        "body": "For centuries, society treated addiction as a moral weakness: 'If they really cared about their family, their job, or their health, they would simply decide to stop.'\n\nTo understand why that belief is scientifically false, imagine a car driving down a steep mountain road. Deep in the engine is an accelerator pedal (the reward pathway: the Ventral Tegmental Area and Nucleus Accumbens), designed by 500 million years of evolution to push the car forward when you find calorie-dense food, clean water, or a mate. Mounted on the dashboard is the steering wheel and brake pedal (the Prefrontal Cortex), designed to say: 'Slow down, there is a dangerous cliff ahead!'\n\nWhen a person consumes alcohol, cocaine, or opioids, the drug doesn't just tap the accelerator; it drops a ten-ton boulder onto the gas pedal, flooding the engine with 5 to 10 times more dopamine than any natural human experience could ever produce.\n\nNow here is what chronic addiction does: over months of bombardment, the brain protects itself by snapping the brake cable (damaging the prefrontal cortex) and shrinking the dopamine receptors. The driver is stomping on the brake pedal with all their moral willpower, but the mechanical cable is literally severed. They aren't getting high anymore; they are simply trying to prevent the car from rolling off the cliff of unbearable withdrawal. Addiction is not a failure of character; it is a broken biological brake system.",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "The Neurocircuitry Triad: Binge, Withdrawal & Preoccupation",
        "body": "Neuroscientists George Koob and Nora Volkow mapped the progression of addiction across three distinct neurological stages and anatomical hubs:\n\n1. Binge / Intoxication Stage (Basal Ganglia & Nucleus Accumbens):\n   - Addictive drugs cause rapid dopamine surges in the ventral striatum.\n   - Dopamine acts as a teaching signal (reward prediction error): it tells the brain, 'This chemical is vital for survival! Remember every detail of the room, the smell, the people, and the sound when you took it!'\n   - These environmental cues become permanently conditioned triggers for intense, automatic cravings.\n\n2. Negative Affect / Withdrawal Stage (Extended Amygdala):\n   - When drug levels drop, dopamine plummets far below baseline.\n   - Crucially, the 'anti-reward system' in the extended amygdala activates, flooding the brain with Corticotropin-Releasing Factor (CRF), dynorphin, and norepinephrine.\n   - The individual experiences dysphoria, intense anxiety, irritability, and physiological agony. They no longer consume the substance for pleasure (positive reinforcement); they consume it desperately to escape chemical misery (negative reinforcement).\n\n3. Preoccupation / Anticipation Stage (Prefrontal Cortex & Insula):\n   - The prefrontal cortex is responsible for executive control, working memory, and delaying gratification.\n   - Chronic substance use atrophies the connections between the PFC and the striatum.\n   - Executive control collapses: even when the person consciously resolves 'I will never touch this again,' the hyper-reactive amygdala and insula overpower the weakened PFC when exposed to stress or drug cues.",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "The Three-Stage Addiction Neurocircuit Loop",
        "body": "The anatomical neurocircuits and chemical pathways governing the addiction cycle:\n\n```\n+-------------------------------------------------------------------------+\n|                   THE THREE-STAGE NEUROCIRCUIT OF ADDICTION             |\n+-------------------------------------------------------------------------+\n\n               STAGE 1: BINGE & INTOXICATION\n               [Ventral Tegmental Area (VTA) -> Nucleus Accumbens]\n               * Supraphysiological Dopamine Release (Reward Surge)\n               * Reinforcement & Habit Stamping\n                                 |\n                                 v\n               STAGE 2: WITHDRAWAL & NEGATIVE AFFECT\n               [Extended Amygdala / Bed Nucleus of Stria Terminalis]\n               * Depleted Dopamine (Anhedonia) + Downregulated D2 Receptors\n               * Spiking Corticotropin-Releasing Factor (CRF) & Dynorphin\n               * Transition: Positive Reinforcement -> Negative Reinforcement\n                                 |\n                                 v\n               STAGE 3: PREOCCUPATION & CRAVING\n               [Prefrontal Cortex (dlPFC, OFC, ACC) & Insula]\n               * Prefrontal Hypofrontality (Damaged Inhibitory Control)\n               * Cue-Triggered Glutamate Influx -> Compulsive Relapse\n                                 |\n                                 +-------> Returns to Stage 1!\n\n===========================================================================\n                 DOPAMINE RECEPTOR AVAILABILITY (PET SCAN DATA)\n===========================================================================\n Control Brain   : [ D2 Receptor Density: High ] -> Normal life is rewarding\n Addicted Brain  : [ D2 Receptor Density: Low  ] -> Normal life is grey (anhedonia)\n                   * Requires drug just to achieve physiological baseline zero!\n```",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Universal Mental Model: Clinical Empathy & Healthcare Practice",
        "body": "Understanding the neurobiology of addiction radically transforms clinical practice, institutional policy, and personal relationships:\n\n1. Treating Addiction Like Hypertension or Diabetes:\n   - Just as type 2 diabetes involves impaired insulin receptor signaling and hypertension involves cardiovascular dysregulation, Substance Use Disorder involves impaired dopamine receptor and prefrontal signaling.\n   - Relapse rates in addiction (40% to 60%) are virtually identical to relapse rates for asthma (50% to 70%) and hypertension (50% to 70%) when patients discontinue medication. We do not throw diabetic patients out of hospitals when their blood sugar spikes; we adjust their medication.\n\n2. The Fallacy of 'Rock Bottom':\n   - Waiting for someone to hit 'rock bottom' before offering help is dangerous medical malpractice. We do not wait for a cancer patient to develop stage IV metastatic disease before initiating treatment. Early intervention halts neurostructural damage before severe cognitive atrophy occurs.\n\n3. Overcoming Frustration in Caregiving:\n   - Recognizing that cue-induced cravings are driven by subcortical reflex circuits rather than conscious malice helps doctors, nurses, and family members replace anger with calm, compassionate, evidence-based treatment strategies.",
        "order": 4
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Addiction is a chronic medical brain disorder, not a moral flaw! Drugs flood the VTA-Nucleus Accumbens pathway with 10x normal dopamine. Chronic use downregulates D2 receptors (anhedonia) and impairs prefrontal cortex executive control. Relapse is a symptom of neuroadaptation!"
      },
      {
        "type": "SUMMARY_2M",
        "content": "Addiction is recognized by medical authorities (WHO, NIDA, ASAM) as a chronic, relapsing brain disease. Addictive substances hijack the mesolimbic dopamine system (Ventral Tegmental Area to Nucleus Accumbens). Chronic use triggers neuroadaptations: downregulation of striatal dopamine D2 receptors, creating profound anhedonia where natural rewards no longer register. Simultaneously, the extended amygdala activates the 'anti-reward' system via Corticotropin-Releasing Factor (CRF), shifting use from seeking euphoria (positive reinforcement) to escaping agony (negative reinforcement). Structural impairment of the prefrontal cortex (PFC) degrades executive decision-making and top-down impulse control. Addiction requires long-term medical management akin to asthma or diabetes."
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Core Neurobiological Architecture of Substance Use Disorders:\n1. Mesolimbic Pathway (Reward): Dopaminergic neurons project from the VTA to the Nucleus Accumbens, encoding reward prediction error and driving incentive salience (craving).\n2. Downregulation & Tolerance: Post-synaptic dopamine D2 receptor density decreases homeostatically. Endogenous dopamine synthesis drops, creating chronic baseline anhedonia.\n3. Extended Amygdala (Anti-Reward): During withdrawal, dynorphin and Corticotropin-Releasing Factor (CRF) surge, generating dysphoria and anxiety that compel compulsive substance consumption.\n4. Prefrontal Hypofrontality (Executive Deficit): Atrophy of projections from dorsolateral PFC and anterior cingulate cortex impairs cognitive flexibility, risk appraisal, and motor inhibition.\n5. Clinical Paradigm: Relapse rates (40-60%) mirror other chronic conditions (hypertension, asthma); effective care demands continuous medical management rather than episodic acute detox."
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "In the neurobiology of chronic substance dependence, why does an individual continue using a drug even when it no longer produces euphoria or pleasure?",
        "options": [
          "Because the liver metabolizes the drug into a completely different psychoactive molecule that paralyzes muscles",
          "Because the extended amygdala activates Corticotropin-Releasing Factor (CRF) and dynorphin, creating severe dysphoria that compels use through negative reinforcement (relief from misery)",
          "Because the prefrontal cortex permanently disconnects from the spinal cord",
          "Because dopamine levels permanently remain at 10 times higher than baseline even weeks after drug cessation"
        ],
        "correctAnswer": "Because the extended amygdala activates Corticotropin-Releasing Factor (CRF) and dynorphin, creating severe dysphoria that compels use through negative reinforcement (relief from misery)",
        "explanation": "Chronic drug exposure recruits the brain's anti-reward system in the extended amygdala. When dopamine drops below baseline, stress neurotransmitters (CRF, dynorphin) surge, creating profound negative affect. Use transitions from seeking euphoria (positive reinforcement) to desperately seeking relief from psychological and physical misery (negative reinforcement).",
        "trapExplanation": "Dopamine levels crash below baseline (anhedonia), rather than staying elevated (eliminating D). The prefrontal cortex does not sever from the spinal cord (C), and liver metabolites do not explain motivational compulsion (A).",
        "examinerTrapPattern": "Confusing positive reinforcement (seeking a high) with negative reinforcement (relieving withdrawal and dysphoria) in chronic dependence."
      },
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "EASY",
        "stem": "What physiological change observed via PET neuroimaging explains why individuals with chronic substance use disorders experience profound anhedonia (inability to feel pleasure from daily life)?",
        "options": [
          "Downregulation and marked loss of striatal dopamine D2 receptor availability",
          "A doubling in the thickness of the skull",
          "Permanent destruction of all auditory nerve endings in the inner ear",
          "Spontaneous enlargement of the thyroid gland"
        ],
        "correctAnswer": "Downregulation and marked loss of striatal dopamine D2 receptor availability",
        "explanation": "In response to repeated massive drug-induced dopamine surges, the brain downregulates (decreases the number of) dopamine D2 receptors. With fewer receptors, normal daily pleasures (food, friendships, hobbies) release too little dopamine to trigger a response, resulting in persistent anhedonia.",
        "trapExplanation": "Skull thickness, auditory nerves, and thyroid glands are completely unrelated to central dopaminergic hedonic tone.",
        "examinerTrapPattern": "Failing to connect down-regulated D2 receptors directly to clinical anhedonia and blunted reward sensitivity."
      },
      {
        "type": "APPLIED_SCENARIO",
        "difficulty": "HARD",
        "stem": "A primary care physician tells a patient with Severe Alcohol Use Disorder: 'You simply lack the willpower to quit. If you really wanted to be sober, you would choose to stop.' Based on modern neuroscientific consensus (Volkow, Koob, NEJM), why is this clinical assertion scientifically inaccurate?",
        "options": [
          "Because alcohol is an essential human nutrient without which the brain cannot survive",
          "Because chronic substance misuse induces structural and functional hypoactivity in the prefrontal cortex, impairing the exact neural circuits responsible for top-down inhibitory control and willpower",
          "Because willpower is located exclusively in the heart muscle rather than the central nervous system",
          "Because patients with alcohol dependence have hyper-developed prefrontal cortices that execute decisions too rapidly"
        ],
        "correctAnswer": "Because chronic substance misuse induces structural and functional hypoactivity in the prefrontal cortex, impairing the exact neural circuits responsible for top-down inhibitory control and willpower",
        "explanation": "Neuroimaging demonstrates that prolonged addiction damages prefrontal cortical networks (orbitofrontal cortex, anterior cingulate, dlPFC). These are the exact brain regions required for executive function, impulse inhibition, and long-term risk assessment. Demanding that a patient rely solely on willpower when their prefrontal inhibitory circuits are pathologically impaired ignores the physiological reality of the disease.",
        "trapExplanation": "Alcohol is a toxin, not an essential nutrient (eliminating A). Willpower is mediated by frontostriatal brain circuits, not the heart (eliminating C). Addiction causes hypoactivity, not hyper-development, of the prefrontal cortex (eliminating D).",
        "examinerTrapPattern": "Viewing addiction as a moral choice or failure of willpower rather than recognizing neurobiological impairment of prefrontal executive circuits."
      }
    ],
    "examMappings": []
  },
  {
    "id": "CON-ADDICT-02",
    "topicOrder": 1,
    "topicSlug": "addiction-neurobiology-pharmacotherapy-and-clinical-skills",
    "topicTitle": "Addiction Neurobiology, Diagnostic Frameworks, Pharmacotherapy & Harm Reduction",
    "topicDescription": "First-principles biomedical and clinical understanding of Substance Use Disorders: dopamine mesolimbic circuitry, SBIRT screening, evidence-based pharmacotherapies (MOUD/MAT), Motivational Interviewing, and harm reduction frameworks.",
    "slug": "clinical-screening-and-dsm-5-diagnostic-framework-sbirt-and-criteria",
    "title": "Clinical Screening & DSM-5 Diagnostic Framework: SBIRT, AUDIT-C, DAST & The 11 Criteria",
    "shortDefinition": "The clinical architecture for systematically identifying, assessing, and diagnosing Substance Use Disorders across medical settings. Screening, Brief Intervention, and Referral to Treatment (SBIRT) is an evidence-based public health protocol that screens all patients universally rather than waiting for late-stage medical crises. Validated screening instruments include the AUDIT-C (Alcohol Use Disorders Identification Test-Concise; 3 questions scored 0-12, where >= 4 for men and >= 3 for women indicates hazardous drinking) and the DAST-10 (Drug Abuse Screening Test). DSM-5 eliminated the legacy dichotomy between 'abuse' and 'dependence', replacing it with a single diagnostic entity—Substance Use Disorder—evaluated across 11 criteria organized into 4 functional domains: Impaired Control (criteria 1-4), Social Impairment (criteria 5-7), Risky Use (criteria 8-9), and Pharmacological Criteria (Tolerance and Withdrawal, criteria 10-11). Severity is graded strictly by criterion count: Mild (2-3), Moderate (4-5), and Severe (6+).",
    "difficulty": "INTERMEDIATE",
    "claims": [
      {
        "id": "CLM-ADDICT-02-01",
        "statement": "SBIRT (Screening, Brief Intervention, and Referral to Treatment) is an evidence-based public health practice validated to identify hazardous substance use and intervene early in primary care, emergency departments, and ambulatory clinics before severe pathology develops.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Babor et al., Screening, Brief Intervention, and Referral to Treatment (SBIRT): toward a public health approach to the management of substance abuse, Substance Abuse (2007)",
        "excerpt": "SBIRT represents an effective, public health approach to delivering early intervention and treatment services for persons with substance use disorders, as well as those who are at risk of developing these disorders."
      },
      {
        "id": "CLM-ADDICT-02-02",
        "statement": "The AUDIT-C is a validated 3-item screening questionnaire measuring consumption frequency, quantity, and heavy episodic drinking, with established clinical cutoffs (score >= 4 for men, >= 3 for women) exhibiting over 80% sensitivity for identifying unhealthy alcohol use.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Bush et al., The AUDIT alcohol consumption questions (AUDIT-C): an effective brief screening test for problem drinking, Archives of Internal Medicine (1998)",
        "excerpt": "The AUDIT-C performs as well as the full 10-item AUDIT for detecting heavy drinking and active alcohol abuse or dependence, providing a practical screening tool for routine clinical practice."
      },
      {
        "id": "CLM-ADDICT-02-03",
        "statement": "DSM-5 diagnostic criteria consolidate substance use pathology into 11 symptom criteria across four distinct clinical domains: Impaired Control, Social Impairment, Risky Use, and Pharmacological Criteria (Tolerance and Withdrawal).",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "American Psychiatric Association, Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition (DSM-5) (2013), Substance-Related and Addictive Disorders",
        "excerpt": "DSM-5 replaces the categorical divide between substance abuse and dependence with a single dimensional Substance Use Disorder defined across 11 criteria reflecting biological, social, and behavioral disruptions."
      },
      {
        "id": "CLM-ADDICT-02-04",
        "statement": "Under DSM-5 guidelines, Substance Use Disorder severity is classified by the total number of positive criteria met within a 12-month period: 2 to 3 criteria indicate Mild, 4 to 5 criteria indicate Moderate, and 6 or more criteria indicate Severe SUD.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Hasin et al., DSM-5 Criteria for Substance Use Disorders: Recommendations and Rationale, American Journal of Psychiatry (2013)",
        "excerpt": "Severity is determined by the number of criteria present: 2-3 indicates mild, 4-5 moderate, and 6 or more severe substance use disorder, providing a reliable dimensional grading scale for clinical decision-making."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Silent Blood Pressure Check for Substance Use",
        "body": "When you visit a doctor for an annual checkup, a nurse wraps a cuff around your arm to measure blood pressure. They don't do this because they suspect you are having a massive stroke; they do it because high blood pressure is a silent risk factor that can be treated early with diet or mild medication long before a heart attack happens.\n\nHistorically, medicine treated substance use the exact opposite way: doctors never asked about alcohol or drugs unless a patient arrived with cirrhosis of the liver, head trauma from a car crash, or full-blown delirium tremens. That is the equivalent of waiting for a heart attack before checking blood pressure.\n\nSBIRT and universal screening flip this paradigm. By asking 3 simple, non-judgmental questions (the AUDIT-C) to every patient, healthcare providers identify people drinking 4 or 5 beers every evening. They aren't in crisis yet, but their risk is rising. A 5-minute conversation ('Brief Intervention') can recalibrate their habits, preventing a decade of liver damage and family trauma.",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "The 11 DSM-5 Criteria: The 4 Functional Clusters",
        "body": "The DSM-5 evaluates Substance Use Disorders across 11 diagnostic criteria occurring within a 12-month period. Rather than memorizing an unorganized list, clinicians group them into 4 logical clusters:\n\n1. Impaired Control (Criteria 1–4):\n   - Criterion 1: Consuming larger amounts or over a longer period than intended.\n   - Criterion 2: Persistent desire or unsuccessful efforts to cut down or control use.\n   - Criterion 3: Spending excessive time obtaining, using, or recovering from the substance.\n   - Criterion 4: Craving—a strong, overwhelming urge to use the substance.\n\n2. Social Impairment (Criteria 5–7):\n   - Criterion 5: Failure to fulfill major obligations at work, school, or home.\n   - Criterion 6: Continued use despite persistent interpersonal or relationship problems.\n   - Criterion 7: Giving up important social, occupational, or recreational activities.\n\n3. Risky Use (Criteria 8–9):\n   - Criterion 8: Recurrent use in physically hazardous situations (e.g. driving under the influence).\n   - Criterion 9: Continued use despite knowing you have a physical or psychological problem caused or exacerbated by the substance.\n\n4. Pharmacological Criteria (Criteria 10–11):\n   - Criterion 10: Tolerance—needing markedly increased amounts to achieve intoxication, or diminished effect with the same amount.\n   - Criterion 11: Withdrawal—experiencing physiological withdrawal symptoms, or using the substance to avoid withdrawal.\n   * Crucial Clinical Caveat: Tolerance and withdrawal do NOT count toward a diagnosis if the patient is taking the medication strictly as prescribed under proper medical supervision (e.g. therapeutic opioid analgesics for cancer pain).",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "SBIRT Clinical Triage Pipeline & DSM-5 Diagnostic Matrix",
        "body": "The clinical flow from universal screening to diagnostic categorization and intervention:\n\n```\n+-------------------------------------------------------------------------+\n|                    SBIRT CLINICAL SCREENING WORKFLOW                     |\n+-------------------------------------------------------------------------+\n\n               ALL PATIENTS (Primary Care / Emergency / Clinic)\n                                 |\n                                 v\n                UNIVERSAL SCREENING (e.g. AUDIT-C / DAST)\n                                 |\n            +--------------------+--------------------+\n            |                                         |\n       [NEGATIVE]                                [POSITIVE]\n   (Score: Men < 4, Women < 3)             (Score: Men >= 4, Women >= 3)\n            |                                         |\n            v                                         v\n     Positive Reinforcement                 AUDIT-10 or Full Clinical\n     & Health Maintenance                   DSM-5 Diagnostic Interview\n                                                      |\n                                                      v\n===========================================================================\n                 DSM-5 CRITERIA COUNT & SEVERITY STRATIFICATION            \n===========================================================================\n   Positive Criteria Count (Out of 11 in past 12 months) -> Triage Action:\n\n   0 - 1 Criteria  : No Diagnosis       --> Brief Advice / Education\n   2 - 3 Criteria  : MILD SUD           --> Brief Intervention (Outpatient)\n   4 - 5 Criteria  : MODERATE SUD       --> Structured Treatment / Pharmacotherapy\n   6+   Criteria  : SEVERE SUD         --> Intensive Medical & Pharmacotherapy\n\n   4 Clusters: [1. Impaired Control]  [2. Social Impairment]\n               [3. Risky Use]         [4. Pharmacological (Tol/With)]\n```",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Universal Mental Model: Objective Evaluation vs. Subjective Bias",
        "body": "The SBIRT and DSM-5 framework offers invaluable mental models for diagnosing and managing complex problems in any organization:\n\n1. Removing Moralizing from Diagnostics:\n   - Notice that the DSM-5 criteria contain zero references to 'bad morals', 'sin', or 'weakness'. It is entirely functional: Does the behavior impair your control? Does it hurt your relationships? Does it create physical harm? By keeping criteria behavioral and physiological, clinicians can assess patients objectively without judgment.\n\n2. The Danger of Stereotyping in Healthcare:\n   - Healthcare providers often miss substance use in affluent, well-dressed, elderly, or professional patients because of unconscious bias ('He doesn't look like an alcoholic'). Universal screening ensures that an executive drinking two bottles of wine a night is screened with the exact same objective instrument as an unhoused patient.\n\n3. The Dangers of Binary Thinking (Addict vs. Non-Addict):\n   - People often rationalize risky habits: 'I'm not an addict because I haven't lost my job or slept on the street!' The DSM-5's dimensional spectrum (Mild: 2-3; Moderate: 4-5; Severe: 6+) shows that substance use exists on a continuous gradient. Intervening at the 'Mild' stage prevents progression to catastrophic 'Severe' dependency.",
        "order": 4
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "SBIRT provides universal screening before crisis! AUDIT-C cutoffs: >= 4 (men), >= 3 (women). DSM-5 consolidates SUD into 11 criteria across 4 clusters: Impaired Control, Social Impairment, Risky Use, and Pharmacological. Severity: Mild (2-3), Moderate (4-5), Severe (6+)!"
      },
      {
        "type": "SUMMARY_2M",
        "content": "SBIRT (Screening, Brief Intervention, Referral to Treatment) is an evidence-based clinical protocol that detects unhealthy substance use universally across primary and acute care. Initial screening utilizes validated tools like the AUDIT-C (3 items; positive cutoff >= 4 for men, >= 3 for women) and DAST-10. Diagnosis is determined using the DSM-5's 11 criteria, organized into four functional domains: Impaired Control (larger amounts, unable to cut down, time spent, craving), Social Impairment (obligations failed, relationship conflicts, activities abandoned), Risky Use (hazardous use, use despite harm), and Pharmacological (tolerance, withdrawal). Severity is classified as Mild (2-3 criteria), Moderate (4-5 criteria), or Severe (6+ criteria)."
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Clinical Architecture of SBIRT & DSM-5 Diagnostic Stratification:\n1. Universal Screening: Administered to all patients. AUDIT-C questions: frequency of drinking, typical quantity consumed, and frequency of heavy drinking (>= 6 drinks).\n2. Brief Intervention (BI): A structured 5-to-15 minute motivational conversation utilizing feedback, exploring ambivalence, and negotiating a harm reduction or cessation plan.\n3. The 11 DSM-5 Criteria Matrix: Clustered into 4 domains (Impaired Control, Social Impairment, Risky Use, Pharmacological criteria). Tolerance and withdrawal do not apply if medications are taken under strict medical supervision.\n4. Dimensional Severity Thresholds: Mild (2-3 criteria), Moderate (4-5 criteria), Severe (>= 6 criteria). Treatment intensity is matched directly to dimensional severity.\n5. Clinical Takeaway: Transitioning from acute crisis response to universal proactive screening identifies hazardous use years before end-stage physiological organ damage."
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "A 42-year-old male patient answers the AUDIT-C questionnaire during a routine annual physical and receives a score of 5. How should the clinical team interpret this score?",
        "options": [
          "The patient is completely free of any alcohol-related health risks and should be congratulated",
          "The score exceeds the clinical cutoff (>= 4 for men), indicating positive screening for unhealthy/risky alcohol use requiring a brief intervention or further assessment",
          "The patient must be immediately hospitalized in an intensive psychiatric lockdown unit against their will",
          "The AUDIT-C is only valid for children, so the score is clinically uninterpretable"
        ],
        "correctAnswer": "The score exceeds the clinical cutoff (>= 4 for men), indicating positive screening for unhealthy/risky alcohol use requiring a brief intervention or further assessment",
        "explanation": "The validated AUDIT-C cutoff is >= 4 points for men (and >= 3 points for women). A score of 5 indicates a positive screen for hazardous drinking, warranting a non-judgmental brief intervention to discuss alcohol habits and explore whether diagnostic DSM-5 criteria are present.",
        "trapExplanation": "A positive screen does not justify involuntary hospitalization (C). A score of 5 is not low-risk (A). The AUDIT-C is designed specifically for adults, whereas CRAFFT is for adolescents (D).",
        "examinerTrapPattern": "Confusing screening cutoff thresholds (indicating risk) with definitive end-stage diagnoses requiring extreme involuntary hospitalization."
      },
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "EASY",
        "stem": "Under the DSM-5 diagnostic framework, how many positive criteria within a 12-month period are required to classify a patient as having a 'Moderate' Substance Use Disorder?",
        "options": [
          "Exactly 1 criterion",
          "2 to 3 criteria",
          "4 to 5 criteria",
          "All 11 criteria"
        ],
        "correctAnswer": "4 to 5 criteria",
        "explanation": "DSM-5 categorizes severity based on the number of positive criteria: 2 to 3 criteria indicate Mild SUD, 4 to 5 criteria indicate Moderate SUD, and 6 or more criteria indicate Severe SUD.",
        "trapExplanation": "1 criterion does not meet diagnostic threshold for SUD. 2-3 is Mild, and 6+ is Severe.",
        "examinerTrapPattern": "Mixing up DSM-5 severity threshold brackets (Mild: 2-3; Moderate: 4-5; Severe: 6+)."
      },
      {
        "type": "APPLIED_SCENARIO",
        "difficulty": "HARD",
        "stem": "A 58-year-old cancer patient with chronic metastatic bone pain has been taking prescribed oral morphine under the close supervision of an oncologist for 6 months. The patient notes that over time, higher doses were required to control the pain, and skipping a dose causes mild sweating and restlessness. The patient has no cravings, does not overuse medication, and experiences no social or occupational disruption. Does this patient have a Substance Use Disorder under DSM-5?",
        "options": [
          "Yes, because tolerance and withdrawal are present, fulfilling 2 criteria which meets the threshold for Mild SUD",
          "No, because under DSM-5 diagnostic rules, tolerance and withdrawal do NOT count toward a Substance Use Disorder when an opioid is taken under appropriate medical supervision",
          "Yes, all patients taking opioids for more than 30 days are automatically diagnosed with Severe SUD",
          "No, but only because the patient is over the age of 50"
        ],
        "correctAnswer": "No, because under DSM-5 diagnostic rules, tolerance and withdrawal do NOT count toward a Substance Use Disorder when an opioid is taken under appropriate medical supervision",
        "explanation": "The DSM-5 explicitly states a critical exception: criteria 10 (tolerance) and 11 (withdrawal) are not counted toward a Substance Use Disorder diagnosis if the medication is taken strictly as prescribed under proper medical supervision. Because the patient meets 0 of the other 9 behavioral criteria (no cravings, no loss of control, no social impairment), the patient has normal physiological dependence, NOT an addiction or SUD.",
        "trapExplanation": "Assuming that physiological tolerance or withdrawal alone equals addiction (A) is a massive clinical blunder that causes doctors to inappropriately withhold pain management from legitimate patients.",
        "examinerTrapPattern": "Failing to apply the explicit DSM-5 clinical exception regarding tolerance and withdrawal for prescribed medications taken under medical supervision."
      }
    ],
    "examMappings": []
  },
  {
    "id": "CON-ADDICT-03",
    "topicOrder": 1,
    "topicSlug": "addiction-neurobiology-pharmacotherapy-and-clinical-skills",
    "topicTitle": "Addiction Neurobiology, Diagnostic Frameworks, Pharmacotherapy & Harm Reduction",
    "topicDescription": "First-principles biomedical and clinical understanding of Substance Use Disorders: dopamine mesolimbic circuitry, SBIRT screening, evidence-based pharmacotherapies (MOUD/MAT), Motivational Interviewing, and harm reduction frameworks.",
    "slug": "evidence-based-pharmacotherapy-moud-mat-for-opioids-alcohol-and-tobacco",
    "title": "Evidence-Based Pharmacotherapy: MOUD / MAT for Opioids, Alcohol & Tobacco",
    "shortDefinition": "The clinical pharmacology of Medications for Opioid Use Disorder (MOUD) and Medications for Addiction Treatment (MAT). For Opioid Use Disorder (OUD), pharmacotherapy targets mu-opioid receptors across three distinct pharmacological classes: Methadone (a long-acting full agonist that eliminates withdrawal and cravings for 24-36 hours without euphoric spikes); Buprenorphine (a high-affinity partial agonist with a ceiling effect on respiratory depression, co-formulated with naloxone to deter intravenous misuse); and Naltrexone (a pure antagonist that blocks opioid receptors, available as a monthly extended-release injection). Emergency opioid overdose reversal is achieved with Naloxone (Narcan), a competitive antagonist that displaces opioids from receptors to restore breathing within minutes. For Alcohol Use Disorder (AUD), evidence-based medications include Acamprosate (restores glutamate/GABA balance to maintain abstinence), Naltrexone (blocks endogenous opioid reward pathways to reduce heavy drinking), and Disulfiram (inhibits aldehyde dehydrogenase, causing toxic acetaldehyde accumulation upon alcohol ingestion). For Tobacco, Varenicline (a partial nicotinic receptor agonist), Bupropion, and Nicotine Replacement Therapy (NRT) double long-term cessation rates.",
    "difficulty": "INTERMEDIATE",
    "claims": [
      {
        "id": "CLM-ADDICT-03-01",
        "statement": "Maintenance pharmacotherapy with Methadone or Buprenorphine for Opioid Use Disorder reduces all-cause mortality by greater than 50%, significantly lowers overdose fatalities, decreases criminal justice involvement, and improves treatment retention compared to non-pharmacological detoxification alone.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Sordo et al., Mortality risk during and after opioid substitution treatment: systematic review and meta-analysis of cohort studies, BMJ (2017)",
        "excerpt": "Retention in methadone or buprenorphine maintenance treatment is associated with a more than 50% reduction in all-cause mortality and an even larger reduction in overdose deaths among opioid-dependent individuals."
      },
      {
        "id": "CLM-ADDICT-03-02",
        "statement": "Buprenorphine functions as a partial mu-opioid receptor agonist characterized by high binding affinity and a pharmacological ceiling effect on respiratory depression, rendering fatal overdose from buprenorphine monotherapy exceedingly rare in non-sedated individuals.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Walsh et al., Clinical pharmacology of buprenorphine: ceiling effects at high doses, Clinical Pharmacology & Therapeutics (1994)",
        "excerpt": "Buprenorphine exhibits a distinct plateau or ceiling effect on respiratory depression across escalating doses, providing a critical margin of safety relative to full opioid agonists like methadone or oxycodone."
      },
      {
        "id": "CLM-ADDICT-03-03",
        "statement": "Naloxone is a pure competitive mu-opioid receptor antagonist with higher receptor binding affinity than most illicit and prescription opioids, rapidly displacing agonists to reverse life-threatening respiratory depression within 2 to 5 minutes.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Boyer, Management of Opioid Analgesic Overdose, NEJM (2012)",
        "excerpt": "Naloxone rapidly reverses opioid-induced coma and respiratory depression through competitive antagonism at mu-opioid receptors, serving as the frontline pharmacological antidote for opioid overdose."
      },
      {
        "id": "CLM-ADDICT-03-04",
        "statement": "First-line pharmacotherapy for Alcohol Use Disorder—primarily Acamprosate (GABA/glutamate neuromodulator) and oral or extended-release Naltrexone (opioid antagonist)—is proven to reduce heavy drinking and promote abstinence, yet remains prescribed to fewer than 2% of diagnosed patients.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Jonas et al., Pharmacotherapy for Adults With Alcohol Use Disorders in Outpatient Settings: A Systematic Review and Meta-analysis, JAMA (2014)",
        "excerpt": "Both acamprosate and oral naltrexone demonstrate clear efficacy in treating alcohol use disorders: acamprosate supports continuous abstinence, while naltrexone reduces return to heavy drinking."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Locked Keyhole and the Replacement Key",
        "body": "Imagine your brain cells have millions of tiny locks called 'mu-opioid receptors'. When a person uses heroin or illicit fentanyl, these drugs act like a master skeleton key: they jam into the locks, kick the doors wide open, flood the brain with euphoria, and—dangerously—shut down the brainstem's automatic breathing reflex.\n\nNow, how does medicine treat this?\n\n1. The Full Agonist (Methadone): Methadone is like an official, slow-turning key made by a locksmith. It fits into the same lock and turns it smoothly. Because it dissolves slowly and stays in the lock for 30 hours, the patient feels no withdrawal and no cravings. But because it doesn't slam the door open and shut rapidly, there is no intoxicating 'rush'. The patient can work a job, drive a car, and raise their family with total stability.\n\n2. The Partial Agonist (Buprenorphine): Buprenorphine is like a key that only turns the lock halfway. It fits into the lock with superhuman grip (high affinity)—so tight that if heroin tries to enter, buprenorphine blocks it like a bouncer at a club door. And because it only turns halfway ('partial agonist'), it hits a hard ceiling: even if you take a high dose, it will not shut down your lungs. It is one of the safest life-saving medications in modern medicine.\n\n3. The Antidote (Naloxone / Narcan): When someone is overdosing and turning blue, Naloxone acts like a crowbar. It kicks the heroin or fentanyl completely out of the locks, takes over the receptors, and wakes the patient up, restoring their breathing in 90 seconds.",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "Pharmacological Profiles: OUD, AUD & Tobacco Mechanisms",
        "body": "Addiction pharmacotherapy operates by targeting specific neurotransmitter receptors to stabilize neural firing, suppress cravings, or eliminate reward reinforcement:\n\n1. Opioid Use Disorder (MOUD):\n   - Methadone: Full mu-opioid agonist. Highly effective, but risk of respiratory depression if abused; dispensed through specialized Opioid Treatment Programs (OTPs).\n   - Buprenorphine: Partial mu-opioid agonist + kappa antagonist. Formulated with Naloxone (Suboxone in a 4:1 ratio). When taken sublingually, buprenorphine is absorbed into the bloodstream while naloxone has zero oral bioavailability (destroyed by first-pass liver metabolism). However, if someone attempts to crush and inject the strip intravenously, the naloxone activates immediately, blocking the receptors and precipitating withdrawal—a brilliant chemical safeguard!\n   - Naltrexone (Vivitrol): Pure mu-opioid antagonist. Blocks the lock completely. Requires 7 to 10 days of complete opioid-free abstinence before starting, otherwise it triggers catastrophic acute withdrawal.\n\n2. Alcohol Use Disorder (AUD):\n   - Naltrexone: Alcohol stimulates endogenous endorphin release, which triggers dopamine in the nucleus accumbens. By blocking opioid receptors, Naltrexone breaks this link: drinking a beer feels like drinking flat sparkling water. It blunts the euphoric 'buzz', preventing one drink from turning into ten.\n   - Acamprosate (Campral): Chronic alcohol suppresses glutamate (excitatory) and boosts GABA (inhibitory). When alcohol is stopped, the brain suffers from hyper-glutamatergic excitability (shakiness, insomnia, anxiety). Acamprosate restores balance, calming the brain and supporting long-term abstinence.\n   - Disulfiram (Antabuse): Inhibits the enzyme acetaldehyde dehydrogenase. If the patient drinks alcohol, acetaldehyde builds up to toxic levels within 10 minutes, causing intense facial flushing, throbbing headache, severe nausea, vomiting, and tachycardia (aversion therapy).\n\n3. Tobacco Use Disorder:\n   - Varenicline (Chantix): Partial agonist at alpha-4-beta-2 nicotinic acetylcholine receptors. Stimulates low-level dopamine to relieve nicotine cravings, while blocking inhaled nicotine from binding.",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "Opioid Receptor Activity Spectrum & Buprenorphine Ceiling",
        "body": "Pharmacological receptor efficacy and safety comparisons across full agonists, partial agonists, and antagonists:\n\n```\n+-------------------------------------------------------------------------+\n|               MU-OPIOID RECEPTOR PHARMACOLOGICAL SPECTRUM                |\n+-------------------------------------------------------------------------+\n Receptor\n Efficacy\n   100% |                      [FULL AGONISTS] (Fentanyl, Morphine, Methadone)\n        |                      * No ceiling: 100% receptor activation\n        |                      * High risk of fatal respiratory arrest at high doses\n        |                             /\n        |                            /\n    50% |       [PARTIAL AGONIST]   /  <- Buprenorphine Ceiling (~32 mg)\n        |       (Buprenorphine)    /      * Plateau prevents respiratory depression!\n        |       ------------------/       * Outcompetes & blocks other opioids.\n        |      /\n        |     /\n     0% +----+-----------------------------------------> Dose\n        |   [ANTAGONIST] (Naloxone, Naltrexone)\n        |   * 0% activation | 100% receptor blockade | Displaces agonists\n\n===========================================================================\n             THE SUBOXONE BIOAVAILABILITY TRICK (BUP / NALOXONE 4:1)\n===========================================================================\n Taken Sublingually (Under Tongue) :\n   * Buprenorphine -> High Sublingual Absorption (Enters Brain -> Relief!)\n   * Naloxone      -> < 2% Absorption (Swallowed & Destroyed by Liver)\n\n Injected Intravenously (Misuse Attempt) :\n   * Naloxone      -> 100% Bioavailability (Blocks Receptors -> Instant Withdrawal!)\n```",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Universal Mental Model: Dismantling the 'Trading One Addiction' Fallacy",
        "body": "Evidence-based addiction pharmacotherapy confronts one of the most destructive societal misconceptions in public health:\n\n1. The 'Trading One Drug for Another' Stigma:\n   - Critics often claim: 'Giving a person methadone or buprenorphine is just trading one addiction for another.'\n   - Clinical Reality: Addiction is defined by COMPULSION, LOSS OF CONTROL, AND HARMFUL CONSEQUENCES. A patient stabilized on buprenorphine does not experience impairment, intoxication, or compulsive chaos. Their receptors are stabilized; they wake up, hold down employment, care for their children, and reintegrate into society. Calling this 'trading addictions' is as biologically absurd as accusing a hypertensive patient of being 'addicted' to their blood pressure medication.\n\n2. The High Mortality of 'Detox-Only':\n   - Incarceration or short-term 5-day acute detoxification without maintenance MOUD actually INCREASES overdose mortality! During detox, the patient loses their physical tolerance. When they inevitably relapse due to untreated cravings, the dose they previously used stops their heart. Initiating MOUD cuts mortality by over 50%.\n\n3. Naloxone as an Essential First-Aid Skill:\n   - Just as CPR and defibrillators (AEDs) are standard public safety tools, Naloxone (Narcan nasal spray) should be in every first-aid kit, school, workplace, and home. It has zero potential for abuse and produces zero effect if administered to someone not experiencing an opioid overdose.",
        "order": 4
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "MOUD reduces opioid mortality by >50%! Methadone is a full agonist; Buprenorphine is a partial agonist with a safety ceiling on respiratory depression; Naltrexone is an antagonist. Naloxone reverses overdose instantly! Suboxone combines buprenorphine with naloxone to prevent injection!"
      },
      {
        "type": "SUMMARY_2M",
        "content": "Medications for Opioid Use Disorder (MOUD) and Addiction Treatment (MAT) represent the gold standard of care. Methadone is a long-acting full mu-opioid agonist providing 24-36 hour receptor stabilization. Buprenorphine is a partial agonist with high binding affinity and a respiratory depression ceiling effect; Suboxone co-formulates buprenorphine with naloxone to deter intravenous injection. Naltrexone is a pure opioid antagonist blocking reward for both opioids and alcohol. Naloxone (Narcan) is an emergency competitive antagonist that reverses fatal respiratory depression within minutes. For Alcohol Use Disorder, Acamprosate restores GABA/glutamate balance, Naltrexone blunts alcohol reward, and Disulfiram induces severe aversion through acetaldehyde accumulation."
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Core Pharmacological Architecture of Addiction Medicine:\n1. Opioid Full Agonist (Methadone): Complete intrinsic efficacy at mu-opioid receptors, eliminating cravings and withdrawal with zero respiratory ceiling at escalating doses.\n2. Opioid Partial Agonist (Buprenorphine): High receptor affinity outcompetes illicit opioids, while a submaximal efficacy plateau prevents fatal respiratory arrest.\n3. The Suboxone Formulation: Sublingual buprenorphine/naloxone (4:1). Poor oral/sublingual naloxone absorption allows buprenorphine efficacy, whereas IV injection activates naloxone to precipitate immediate withdrawal.\n4. Opioid Antagonists: Naloxone (acute intranasal/IM overdose reversal) and Naltrexone (maintenance reward blockade for OUD and AUD).\n5. Alcohol Pharmacotherapies: Acamprosate (reduces post-acute withdrawal hyperexcitability), Naltrexone (blocks endogenous opioid reward loop), and Disulfiram (toxic acetaldehyde dehydrogenase block)."
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "Why is Naloxone combined with Buprenorphine in the sublingual film formulation known as Suboxone (4:1 ratio)?",
        "options": [
          "To double the euphoric intoxicating effect of buprenorphine when dissolved under the tongue",
          "Because naloxone has virtually zero sublingual bioavailability when taken correctly, but will precipitate immediate unpleasant withdrawal if a person attempts to crush and inject the film intravenously",
          "Because naloxone converts buprenorphine into an antibiotic that cleans the mouth",
          "Because naloxone extends the shelf-life of the medication in room temperature storage"
        ],
        "correctAnswer": "Because naloxone has virtually zero sublingual bioavailability when taken correctly, but will precipitate immediate unpleasant withdrawal if a person attempts to crush and inject the film intravenously",
        "explanation": "Naloxone has negligible bioavailability (< 2%) through the oral mucosa, allowing the buprenorphine to be fully absorbed when taken sublingually as prescribed. However, if crushed and injected intravenously, naloxone enters the bloodstream with 100% bioavailability, instantly kicking opioids off receptors and triggering acute withdrawal. This clever pharmacological design deters intravenous diversion.",
        "trapExplanation": "Naloxone is an opioid antagonist, so it can never increase euphoria (eliminating A). It is not an antibiotic (eliminating C) or an inert preservative (eliminating D).",
        "examinerTrapPattern": "Failing to recognize the differential bioavailability of naloxone via sublingual vs. intravenous administration in Suboxone."
      },
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "EASY",
        "stem": "Which emergency medication is the frontline standard of care for reversing life-threatening respiratory depression during an acute opioid overdose?",
        "options": [
          "Disulfiram",
          "Naloxone (Narcan)",
          "Methadone",
          "Diazepam"
        ],
        "correctAnswer": "Naloxone (Narcan)",
        "explanation": "Naloxone is a pure, high-affinity competitive mu-opioid receptor antagonist that rapidly displaces opioid molecules from the brainstem receptors, restoring spontaneous breathing within 2 to 5 minutes.",
        "trapExplanation": "Disulfiram is for alcohol aversion therapy (A). Methadone is a long-acting opioid agonist that would worsen an overdose (C). Diazepam is a benzodiazepine that exacerbates respiratory depression (D).",
        "examinerTrapPattern": "Confusing emergency overdose rescue antagonists (Naloxone) with maintenance agonists (Methadone) or aversion agents (Disulfiram)."
      },
      {
        "type": "APPLIED_SCENARIO",
        "difficulty": "HARD",
        "stem": "A 35-year-old patient with Severe Alcohol Use Disorder wants medication to stop drinking. The patient works as an airline pilot and admits they occasionally experience intense social urges to drink wine with colleagues. Which medication mechanism best matches Naltrexone's clinical role for this patient?",
        "options": [
          "It induces violent nausea and projectile vomiting within 5 minutes of tasting any alcohol",
          "It blocks endogenous opioid receptors in the brain's reward pathway, thereby extinguishing the euphoric dopamine buzz associated with drinking and reducing heavy consumption days",
          "It permanently destroys the liver's ability to process carbohydrates",
          "It acts as a potent sedative that induces 18 hours of continuous sleep"
        ],
        "correctAnswer": "It blocks endogenous opioid receptors in the brain's reward pathway, thereby extinguishing the euphoric dopamine buzz associated with drinking and reducing heavy consumption days",
        "explanation": "Naltrexone blocks mu-opioid receptors. In alcohol use disorder, alcohol intake normally triggers endogenous endorphin release that drives dopamine surges. Naltrexone blocks these endorphins, blunting the rewarding euphoric reinforcement of alcohol. If the patient drinks, it feels unrewarding, preventing a lapse from escalating into a heavy binge.",
        "trapExplanation": "Violent nausea and vomiting is the mechanism of Disulfiram (Antabuse), not Naltrexone (eliminating A). Naltrexone does not destroy the liver's carbohydrate processing (C) or induce 18-hour comas (D).",
        "examinerTrapPattern": "Confusing the opioid-reward blockade mechanism of Naltrexone with the unpleasant acetaldehyde toxic-reaction mechanism of Disulfiram."
      }
    ],
    "examMappings": []
  },
  {
    "id": "CON-ADDICT-04",
    "topicOrder": 1,
    "topicSlug": "addiction-neurobiology-pharmacotherapy-and-clinical-skills",
    "topicTitle": "Addiction Neurobiology, Diagnostic Frameworks, Pharmacotherapy & Harm Reduction",
    "topicDescription": "First-principles biomedical and clinical understanding of Substance Use Disorders: dopamine mesolimbic circuitry, SBIRT screening, evidence-based pharmacotherapies (MOUD/MAT), Motivational Interviewing, and harm reduction frameworks.",
    "slug": "psychosocial-modalities-motivational-interviewing-and-stages-of-change",
    "title": "Psychosocial Modalities: Motivational Interviewing, OARS & The Transtheoretical Stages of Change",
    "shortDefinition": "The behavioral psychology and clinical communication modalities foundational to addiction recovery. William Miller and Stephen Rollnick's Motivational Interviewing (MI) is a collaborative, goal-oriented counseling approach that elicits and strengthens a person's intrinsic motivation to change by exploring and resolving ambivalence. MI explicitly rejects confrontational interrogation, authoritarian lecturing, or unsolicited advice-giving (which trigger defensive psychological reactance) in favor of the 'Spirit of MI' (Partnership, Acceptance, Compassion, Evocation). Core clinical micro-skills are encapsulated in the OARS model: Open-ended questions, Affirmations, Reflective listening, and Summaries. These skills operate in tandem with James Prochaska and Carlo DiClemente's Transtheoretical Model (Stages of Change): Precontemplation (no intention to change), Contemplation (ambivalence; weighing pros and cons), Preparation (planning action within 30 days), Action (overt behavior modification), Maintenance (sustaining changes beyond 6 months), and Recurrence/Relapse (viewed not as treatment failure, but as a normal cyclical opportunity for learning and plan recalibration).",
    "difficulty": "INTERMEDIATE",
    "claims": [
      {
        "id": "CLM-ADDICT-04-01",
        "statement": "Motivational Interviewing (MI) is a collaborative, patient-centered communication methodology that resolves ambivalence and elicits intrinsic 'change talk', demonstrably outperforming confrontational counseling in facilitating substance use reduction and treatment adherence.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Miller & Rollnick, Motivational Interviewing: Helping People Change (3rd Ed), Guilford Press (2012)",
        "excerpt": "Motivational interviewing is a collaborative conversation style for strengthening a person's own motivation and commitment to change. Confrontation elicits defensiveness; evocation elicits change talk."
      },
      {
        "id": "CLM-ADDICT-04-02",
        "statement": "The OARS framework (Open-ended questions, Affirmations, Reflective listening, Summaries) forms the essential clinical micro-skills that build therapeutic rapport, decrease patient defensiveness, and guide conversations toward client-generated arguments for change.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Lundahl et al., A Meta-Analysis of Motivational Interviewing: Twenty-Five Years of Empirical Research, Research on Social Work Practice (2010)",
        "excerpt": "The core communication skills of MI—open questioning, affirming strengths, reflective listening, and summarizing—reliably increase patient change talk, which directly predicts positive behavioral outcomes."
      },
      {
        "id": "CLM-ADDICT-04-03",
        "statement": "The Transtheoretical Model establishes that behavioral change occurs across six discrete stages: Precontemplation, Contemplation, Preparation, Action, Maintenance, and Relapse, requiring clinicians to tailor interventions to the patient's current motivational stage rather than demanding premature action.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Prochaska & DiClemente, Toward a comprehensive model of change, Treating Addictive Behaviors, Springer (1986)",
        "excerpt": "Behavior change is a non-linear process unfolding through stages. Interventions that fail to match the individual's specific stage of change produce resistance and poor therapeutic outcomes."
      },
      {
        "id": "CLM-ADDICT-04-04",
        "statement": "Cognitive Behavioral Therapy (CBT) for substance use disorders focuses on identifying maladaptive automatic thoughts, recognizing high-risk environmental triggers, developing behavioral coping mechanisms, and constructing structured relapse prevention strategies.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Carroll & Onken, Behavioral Therapies for Drug Abuse, American Journal of Psychiatry (2005)",
        "excerpt": "CBT provides durable behavioral tools by teaching patients to anticipate high-risk situations, challenge irrational beliefs regarding substance use, and practice alternative coping behaviors."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Wrestling Match vs. The Dancing Partner",
        "body": "Have you ever tried to convince someone to do something they weren't sure about by aggressively arguing with them? 'You have to stop smoking! Look at your lungs, you are destroying your life!'\n\nWhat does the person do? They immediately argue back: 'My grandfather smoked until he was 90! It relaxes me! You don't understand my stress!'\n\nPsychologists call this 'The Righting Reflex'—the natural urge to fix someone else's problem by telling them what to do. But in human psychology, when you argue for one side of a conflict, you force the other person to defend the opposite side. If you push, they dig in their heels. Clinical encounters become a wrestling match.\n\nMotivational Interviewing treats the conversation not as a wrestling match, but as a slow, synchronized dance. The clinician never argues with resistance; they 'roll with it'. When a patient says, 'I enjoy drinking on weekends and I don't want to stop,' an MI clinician doesn't argue. They reflect: 'Drinking helps you unwind after a demanding work week, and at the same time, you mentioned you were worried about how tired you feel on Monday mornings. What do you think about that balance?'\n\nSuddenly, the patient is the one arguing for change, not the doctor. People are far more likely to believe what they hear themselves say than what someone else preaches to them.",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "The OARS Micro-Skills & Navigating the 6 Stages of Change",
        "body": "To effectively guide patients through recovery, clinicians deploy specific micro-skills matched to the patient's internal stage of change:\n\n1. The OARS Clinical Micro-Skills:\n   - Open-Ended Questions: Questions that cannot be answered with a simple 'yes' or 'no'. ('What role does alcohol play in your evenings?' vs. 'Do you drink too much?')\n   - Affirmations: Recognizing genuine personal strengths, efforts, and resilience. ('It took real courage to be honest about your drug use with me today.')\n   - Reflective Listening: Paraphrasing the underlying emotional meaning of what the patient said to verify understanding and demonstrate empathy. ('It sounds like you feel caught between wanting to feel better and fearing you won't fit in with your friends.')\n   - Summaries: Periodically synthesizing the discussion, highlighting the patient's own statements in favor of health and change ('Change Talk').\n\n2. The Transtheoretical Stages of Change (Prochaska & DiClemente):\n   - Precontemplation ('I don't have a problem'): Patient does not recognize any issue. Goal: Raise doubt and explore feelings without pressuring.\n   - Contemplation ('I have a problem, but I'm not ready'): Deep ambivalence; weighing pros and cons. Goal: Tip the balance toward change by highlighting discrepancy between personal values and substance use.\n   - Preparation ('I need to do something soon'): Patient is researching options and setting a date within 30 days. Goal: Help identify concrete, realistic steps and obstacles.\n   - Action ('I am doing it right now'): Active behavioral change (stopping use, attending counseling, starting pharmacotherapy). Goal: Support self-efficacy and celebrate early milestones.\n   - Maintenance ('I have sustained change for 6+ months'): Consolidating new lifestyle habits. Goal: Relapse prevention and navigating unexpected triggers.\n   - Relapse / Recurrence: An expected cyclical event, NOT a moral failure. Goal: Rapidly re-engage without shame, identify what triggered the lapse, and update the recovery plan.",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "The Stages of Change Cycle & Motivational Interviewing Flow",
        "body": "The non-linear spiral of behavioral change and the OARS elicitation mechanism:\n\n```\n+-------------------------------------------------------------------------+\n|               TRANSTHEORETICAL STAGES OF CHANGE SPIRAL                  |\n+-------------------------------------------------------------------------+\n\n            [ 1. PRECONTEMPLATION ] (Unaware / Unwilling)\n                       |\n                       v  <- Goal: Raise awareness without pressure\n            [ 2. CONTEMPLATION ]    (Ambivalence: Pros vs Cons)\n                       |\n                       v  <- Goal: Tip ambivalence via Change Talk\n            [ 3. PREPARATION ]      (Planning concrete steps in next 30 days)\n                       |\n                       v  <- Goal: Match to evidence-based treatment (MOUD/CBT)\n            [ 4. ACTION ]           (Active behavior modification: 0-6 months)\n                       |\n                       v  <- Goal: Build coping skills & social support\n            [ 5. MAINTENANCE ]      (Sustained recovery: > 6 months)\n                       |\n                       +--------[ 6. RECURRENCE / RELAPSE ]\n                                 * NOT failure! A learning loop.\n                                 * Immediate re-entry to Contemplation/Prep.\n\n===========================================================================\n                     OARS INTERVIEWING ALGORITHM                           \n===========================================================================\n Patient Input  ---> [Open Question]   : \"What makes you consider cutting back?\"\n Patient Ambiv  ---> [Affirmation]     : \"You've managed to stay sober before.\"\n Deeper Insight ---> [Reflective Listen]: \"You're tired of feeling sick each day.\"\n Decision Pivot ---> [Summary]         : Recaps client's OWN Change Talk!\n```",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Universal Mental Model: Ambivalence, Change Talk & Habit Architecture",
        "body": "Motivational Interviewing and the Stages of Change offer master-level frameworks for human leadership, coaching, and self-mastery:\n\n1. Ambivalence Is Normal, Not Resistance:\n   - In any major life change (quitting smoking, leaving a toxic relationship, changing careers, adopting a fitness habit), humans naturally experience ambivalence: part of them wants to change, and part of them wants comfort. Treating ambivalence as 'stubbornness' causes conflict. Good clinicians and managers explore both sides patiently.\n\n2. 'Sustain Talk' vs. 'Change Talk':\n   - Sustain Talk defends the status quo ('I can't sleep without a drink'). Change Talk expresses desire, ability, reason, or need to change ('I want to be around for my kids'). The central rule of MI: Never argue with Sustain Talk. Instead, reflect and amplify Change Talk whenever it appears.\n\n3. Relapse as Iterative Learning:\n   - In complex habits, relapse is almost never a sudden lightning strike; it is an accumulation of subtle unmanaged stressors, fatigue, and environmental cues. Instead of punishing relapse with guilt, post-mortem the event: 'What happened right before? What did we learn? How do we adjust the plan?'",
        "order": 4
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Motivational Interviewing rejects confrontation to resolve ambivalence! The OARS framework: Open questions, Affirmations, Reflections, Summaries. The 6 Stages of Change: Precontemplation, Contemplation, Preparation, Action, Maintenance, and Relapse (a learning loop, not failure)!"
      },
      {
        "type": "SUMMARY_2M",
        "content": "Motivational Interviewing (MI), developed by William Miller and Stephen Rollnick, is a patient-centered clinical counseling style that resolves ambivalence by eliciting the patient's own intrinsic reasons for change. It rejects the 'righting reflex' and confrontational interrogation. Clinicians utilize the OARS framework (Open-ended questions, Affirmations, Reflective listening, Summaries) to draw out 'change talk'. This integrates with Prochaska and DiClemente's Transtheoretical Stages of Change: Precontemplation (no intent to change), Contemplation (ambivalent), Preparation (planning action), Action (active modification), Maintenance (sustaining change > 6 months), and Relapse (a normal cyclical event for reassessment). Interventions must be matched to the patient's current motivational stage."
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Clinical Architecture of Motivational Interviewing & Behavioral Change:\n1. The Spirit of MI (PACE): Partnership (collaborative egalitarian relationship), Acceptance (unconditional positive regard), Compassion (prioritizing patient welfare), and Evocation (drawing motivation out from within).\n2. The Righting Reflex Trap: The clinician's natural instinct to argue for health forces the ambivalent patient into defending the status quo (Sustain Talk).\n3. OARS Core Competencies: Open questions invite narrative exploration; Affirmations build self-efficacy; Reflections demonstrate empathy and illuminate discrepancy; Summaries bundle change talk into actionable momentum.\n4. Stage-Matched Interventions: Precontemplation requires raising awareness; Contemplation requires exploring ambivalence; Preparation requires setting realistic goals; Action requires implementing MOUD and CBT coping tools.\n5. Relapse Framing: Relapse is not evidence of treatment failure or untreatability; it is an expected clinical juncture requiring compassionate re-engagement and plan optimization."
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "During a clinical consultation, a patient with Alcohol Use Disorder states: 'I know my drinking is causing arguments with my spouse, but meeting friends at the bar is the only way I can relax on Friday nights.' According to the Transtheoretical Model, which stage of change is this patient in?",
        "options": [
          "Precontemplation",
          "Contemplation",
          "Action",
          "Maintenance"
        ],
        "correctAnswer": "Contemplation",
        "explanation": "The hallmark of the Contemplation stage is ambivalence: the individual recognizes that a problem exists and acknowledges the negative consequences (arguments with spouse), but simultaneously values the perceived benefits of the behavior (relaxing on Fridays) and is not yet ready to take immediate action.",
        "trapExplanation": "Precontemplation involves total denial or lack of awareness that a problem exists. Action involves actively quitting. Maintenance is sustaining abstinence for months.",
        "examinerTrapPattern": "Failing to identify the classic clinical presentation of ambivalence that defines the Contemplation stage."
      },
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "EASY",
        "stem": "In the OARS communication framework of Motivational Interviewing, what does the letter 'R' stand for?",
        "options": [
          "Reprimand",
          "Reflective Listening",
          "Rejection",
          "Requirement"
        ],
        "correctAnswer": "Reflective Listening",
        "explanation": "OARS stands for: Open-ended questions, Affirmations, Reflective listening, and Summaries.",
        "trapExplanation": "Reprimand, Rejection, and Requirement are authoritarian, confrontational behaviors that directly violate the spirit of Motivational Interviewing.",
        "examinerTrapPattern": "Confusing empathetic counseling skills with punitive, authoritarian responses."
      },
      {
        "type": "APPLIED_SCENARIO",
        "difficulty": "HARD",
        "stem": "A resident physician encounters a patient who was brought to the hospital for heroin overdose. The resident says: 'You are an addict who is destroying your family. If you don't commit to a 90-day inpatient rehab right now, you are going to die.' The patient curses and walks out of the clinic. What clinical interviewing mistake did the resident make?",
        "options": [
          "The resident spoke too quietly for the patient to understand",
          "The resident succumbed to the 'Righting Reflex' and used aggressive confrontation on a patient in Precontemplation, triggering defensive psychological reactance and driving the patient away",
          "The resident should have called the police to forcibly arrest the patient on the spot",
          "The resident followed evidence-based Motivational Interviewing guidelines perfectly"
        ],
        "correctAnswer": "The resident succumbed to the 'Righting Reflex' and used aggressive confrontation on a patient in Precontemplation, triggering defensive psychological reactance and driving the patient away",
        "explanation": "Aggressive confrontation, labeling, and coercive ultimatums trigger psychological reactance, causing defensive anger and disengagement. In Motivational Interviewing, clinicians meet the patient where they are, explore ambivalence using OARS, offer harm reduction (such as Naloxone and Buprenorphine), and build trust rather than attacking.",
        "trapExplanation": "Arresting patients in medical emergencies destroys healthcare trust and increases overdose deaths (C). This behavior is the exact opposite of Motivational Interviewing (D).",
        "examinerTrapPattern": "Believing that confrontational 'tough love' is clinically effective rather than recognizing it as a trigger for defensive patient disengagement."
      }
    ],
    "examMappings": []
  },
  {
    "id": "CON-ADDICT-05",
    "topicOrder": 1,
    "topicSlug": "addiction-neurobiology-pharmacotherapy-and-clinical-skills",
    "topicTitle": "Addiction Neurobiology, Diagnostic Frameworks, Pharmacotherapy & Harm Reduction",
    "topicDescription": "First-principles biomedical and clinical understanding of Substance Use Disorders: dopamine mesolimbic circuitry, SBIRT screening, evidence-based pharmacotherapies (MOUD/MAT), Motivational Interviewing, and harm reduction frameworks.",
    "slug": "harm-reduction-stigma-deconstruction-and-recovery-capital",
    "title": "Harm Reduction, Stigma Deconstruction & Long-Term Recovery Capital",
    "shortDefinition": "The public health paradigm of Harm Reduction, the clinical imperative of destigmatizing language, and the framework of Recovery Capital. Harm Reduction acknowledges that total immediate abstinence may not be realistic or desired by all individuals, prioritizing pragmatic strategies that reduce the adverse health, social, and economic consequences of substance use without demanding cessation as a prerequisite for care. Interventions include widespread Naloxone distribution, Syringe Services Programs (SSPs; proven to reduce HIV and hepatitis C transmission by over 50% without increasing drug consumption), and fentanyl test strips. Deconstructing clinical stigma requires adopting Person-First Language: eliminating pejorative terms (replacing 'addict/abuser' with 'person with a substance use disorder', and 'clean/dirty urine' with 'negative/positive toxicology screen'). Long-term flourishing is operationalized through 'Recovery Capital'—the aggregate of internal resources (physical health, emotional resilience, self-efficacy) and external resources (stable housing, social support, legal resolution, meaningful employment) that sustain lifelong recovery.",
    "difficulty": "INTERMEDIATE",
    "claims": [
      {
        "id": "CLM-ADDICT-05-01",
        "statement": "Harm Reduction is an evidence-based public health philosophy that prioritizes mitigating the negative health, social, and legal consequences of substance use through compassionate, low-barrier interventions without requiring complete abstinence as a precondition for support.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Marlatt, Harm Reduction: Pragmatic Strategies for Managing High-Risk Behaviors, Guilford Press (1998)",
        "excerpt": "Harm reduction is a pragmatic, compassionate approach that focuses on reducing the adverse health consequences of drug use rather than eliminating drug use per se."
      },
      {
        "id": "CLM-ADDICT-05-02",
        "statement": "Syringe Services Programs (SSPs) reduce the transmission of blood-borne viral infections (HIV and Hepatitis C) among people who inject drugs by over 50%, increase entry into formal addiction treatment five-fold, and do not increase local crime or drug consumption.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Aspinall et al., Are needle and syringe programmes associated with a reduction in HIV transmission among people who inject drugs? A systematic review and meta-analysis, International Journal of Drug Policy (2014)",
        "excerpt": "Needle and syringe programmes are associated with significant reductions in HIV and HCV transmission and serve as a safe gateway to substance use treatment without increasing illicit drug use in communities."
      },
      {
        "id": "CLM-ADDICT-05-03",
        "statement": "The use of pejorative, stigmatizing terminology in medical records (e.g. 'substance abuser' vs. 'person with a substance use disorder') systematically biases healthcare providers toward punitive attitudes, attributing blame to the patient and directly diminishing clinical quality of care.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Kelly & Westerhoff, Does it matter how we refer to individuals with substance-related conditions? A randomized study of two commonly used terms, International Journal of Drug Policy (2010)",
        "excerpt": "Referring to a patient as a 'substance abuser' rather than having a 'substance use disorder' evokes significantly more punitive judgment and less support for medical treatment among trained clinicians."
      },
      {
        "id": "CLM-ADDICT-05-04",
        "statement": "Recovery Capital—the breadth of internal assets (physical health, emotional resilience) and external assets (stable housing, social connections, community resources)—is the primary longitudinal predictor of sustained remission and life stability beyond acute detoxification.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Best et al., Recovery capital: its role in sustained recovery from addiction, Addiction Research & Theory (2016)",
        "excerpt": "Recovery capital provides a comprehensive paradigm demonstrating that successful, sustained recovery depends on building social, personal, and community resources rather than mere symptom suppression."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Seatbelt in the Car and The Words That Wound",
        "body": "When automotive engineers invented seatbelts, airbags, and anti-lock brakes, critics argued: 'If you make cars safer, people will drive recklessly! You should just tell drivers never to crash!'\n\nThat argument was absurd. Human beings make mistakes, road conditions get icy, and accidents happen. Seatbelts do not encourage crashes; they prevent a crash from becoming a funeral. Harm reduction is the seatbelt of addiction medicine.\n\nIf a person is not ready or able to stop using opioids today, demanding 'Quit right now or we won't help you' doesn't cause them to magically quit—it causes them to inject drugs in a dark alley with a contaminated needle, contract HIV or Hepatitis C, and die of an overdose alone.\n\nHanding that person sterile syringes, fentanyl test strips, and Naloxone keeps them alive. You cannot treat a patient who has died of an overdose. And studies show that people who use syringe service programs are actually FIVE TIMES more likely to enter addiction treatment than those who don't, because the clinic is the first place in their life where they were treated like a human being instead of a criminal.\n\nFurthermore, words have profound clinical power. When a doctor writes 'Patient is a non-compliant addict with dirty urine', nurses and doctors treat that patient with cold contempt. When the doctor writes 'Patient has a severe substance use disorder with an unexpected toxicology screen', clinicians rally to provide medical care.",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "The Pillars of Harm Reduction, Person-First Language & Recovery Capital",
        "body": "Modern evidence-based addiction healthcare rests upon three integrated pillars:\n\n1. The Harm Reduction Arsenal:\n   - Naloxone (Narcan) Distribution: Equipping active drug users, their families, and bystanders with overdose reversal kits. Over 80% of overdose reversals are performed by fellow drug users.\n   - Syringe Services Programs (SSPs): Providing sterile needles, safe injection supplies, wound care, and vaccinations, dramatically lowering transmission of HIV and Hepatitis C.\n   - Fentanyl Test Strips (FTS): In an era where illicit street drugs (cocaine, counterfeit pills, heroin) are contaminated with lethal fentanyl, test strips empower individuals to test their supply and discard contaminated batches or use smaller test doses with a friend present.\n\n2. Deconstructing Stigma through Person-First Language:\n   - Say: 'Person with a substance use disorder' | Never Say: 'Addict, Junkie, Abuser'\n   - Say: 'Person in long-term recovery' | Never Say: 'Ex-addict'\n   - Say: 'Positive / Unexpected drug screen' | Never Say: 'Dirty urine'\n   - Say: 'Negative / Expected drug screen' | Never Say: 'Clean urine'\n   - Say: 'Recurrence of symptoms / Relapse' | Never Say: 'Fell off the wagon'\n   * Language is an active medical tool. Research shows that clinicians who hear the word 'abuser' are significantly more likely to recommend punitive legal action rather than medical therapy.\n\n3. The Framework of Recovery Capital (Granfield & Cloud):\n   - Personal Recovery Capital: Physical health, nutrition, financial assets, coping skills, and emotional resilience.\n   - Social Recovery Capital: Supportive, non-using family members, recovery peer coaches, and healthy friendships.\n   - Community Recovery Capital: Stable housing (Housing First models), access to MOUD clinics, vocational training, and anti-discrimination legal protections.\n   - Recovery is not simply the absence of drugs; it is the presence of purpose, dignity, connection, and resources.",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "Harm Reduction Cascade & The Recovery Capital Model",
        "body": "The clinical intervention continuum from harm reduction to comprehensive recovery capital:\n\n```\n+-------------------------------------------------------------------------+\n|                    THE HARM REDUCTION SAFETY NET                        |\n+-------------------------------------------------------------------------+\n\n                     ACTIVE HIGH-RISK DRUG USE\n                                 |\n      +--------------------------+--------------------------+\n      |                          |                          |\n      v                          v                          v\n  [NALOXONE / NARCAN]    [SYRINGE PROGRAMS]     [FENTANYL TEST STRIPS]\n  Prevents Fatal Anoxia  Prevents HIV / HCV     Prevents Unintentional\n  & Restores Breathing   Reduces Endocarditis   Fentanyl Poisoning\n      |                          |                          |\n      +--------------------------+--------------------------+\n                                 |\n                                 v\n           ESTABLISHES TRUST & HUMAN CLINICAL CONNECTION\n                 (5x More Likely to Enter Treatment!)\n                                 |\n                                 v\n===========================================================================\n                   BUILDING LONG-TERM RECOVERY CAPITAL                     \n===========================================================================\n\n   +-------------------------------------------------------------------+\n   |  PERSONAL CAPITAL  : Physical health, coping skills, education     |\n   |  SOCIAL CAPITAL    : Safe family, sober peers, recovery coaches   |\n   |  COMMUNITY CAPITAL : Housing First, job placement, MOUD access    |\n   +-------------------------------------------------------------------+\n                                 |\n                                 v\n                    SUSTAINED LIFE-LONG FLOURISHING\n```",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Universal Mental Model: Low-Barrier Care & The Social Determinants of Health",
        "body": "Harm reduction and recovery capital dismantle traditional moralistic thinking and offer powerful principles for public policy, management, and medicine:\n\n1. Low-Barrier Access (Meeting People Where They Are):\n   - Traditional programs demanded 30 days of clean urine before giving patients housing or therapy. Harm reduction flips this: give people a safe home first ('Housing First'), stabilize their survival needs, and their drug use naturally decreases.\n\n2. The Opposite of Addiction Is Not Sobriety; It Is Connection:\n   - Johann Hari famously summarized modern sociological research: addiction thrives in isolation, shame, and fractured communities. Pushing people into criminal prisons or shaming them compounds trauma and skyrockets relapse. Building social capital and reintegrating individuals into society heals the underlying pain that drove substance misuse.\n\n3. Pragmatism Over Ideology:\n   - In any crisis—whether managing drug overdoses, organizational failure, or climate change—ideological purists insist on impossible perfection (100% immediate abstinence). Pragmatists implement harm reduction: reduce the damage today, save lives, build trust, and create the conditions for long-term transformation.",
        "order": 4
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Harm reduction saves lives! Syringe programs cut HIV/HCV by >50% and boost treatment entry 5x. Use Person-First Language (never say 'dirty urine' or 'addict'). Sustained recovery depends on Recovery Capital: personal health, social networks, and stable housing!"
      },
      {
        "type": "SUMMARY_2M",
        "content": "Harm Reduction is a pragmatic public health paradigm prioritizing life preservation and health consequence reduction without requiring immediate abstinence. Interventions such as Naloxone distribution, Syringe Services Programs (SSPs; reducing HIV/HCV transmission by > 50%), and fentanyl test strips provide low-barrier access to care. Eliminating clinical stigma requires Person-First Language (e.g. 'person with a substance use disorder' instead of 'addict'; 'unexpected toxicology screen' instead of 'dirty urine'), which demonstrably reduces provider bias. Long-term flourishing is governed by Recovery Capital (Granfield & Cloud)—the accumulation of personal, social, and community resources (housing, employment, peer support) that sustain recovery."
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Core Architecture of Harm Reduction & Recovery Capital:\n1. The Harm Reduction Imperative: Meeting patients where they are. Interventions include Naloxone co-prescription, sterile syringe access, overdose prevention education, and drug-checking technologies.\n2. Infectious Disease Mitigation: SSPs break viral transmission chains (HIV, Hepatitis C, bacterial endocarditis) without increasing neighborhood crime or substance consumption.\n3. Linguistic Stigma Reduction: Replacing pejorative slang with person-first clinical terminology directly alters clinician attitudes from moral judgment to evidence-based medical therapy.\n4. Tripartite Recovery Capital: (a) Personal (physical vitality, psychological resilience), (b) Social (recovery networks, positive family ties), and (c) Community (Housing First, legal aid, anti-stigma vocational programs).\n5. Clinical Axiom: You cannot treat a patient who has died. Keeping patients alive and connected to healthcare is the indispensable foundation of all recovery."
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "Which of the following statements regarding Syringe Services Programs (SSPs) is supported by decades of public health and epidemiological research?",
        "options": [
          "SSPs significantly increase illicit drug use and cause local neighborhood crime rates to triple",
          "SSPs reduce the transmission of HIV and Hepatitis C by more than 50% and dramatically increase the likelihood of individuals entering formal substance use treatment",
          "SSPs are prohibited by the World Health Organization because they encourage teenagers to start using heroin",
          "SSPs only provide syringes to patients who have been completely sober for at least 30 days"
        ],
        "correctAnswer": "SSPs reduce the transmission of HIV and Hepatitis C by more than 50% and dramatically increase the likelihood of individuals entering formal substance use treatment",
        "explanation": "Extensive scientific research (including CDC and WHO syntheses) proves that SSPs reduce blood-borne viral infections (HIV, HCV) by over 50%. Furthermore, participants in SSPs are five times more likely to enter drug treatment programs because staff treat them with respect and provide direct healthcare bridges.",
        "trapExplanation": "Empirical studies conclusively demonstrate that SSPs do NOT increase crime or drug use (eliminating A). WHO strongly endorses SSPs worldwide (eliminating C). Requiring 30 days of sobriety contradicts the definition of harm reduction (eliminating D).",
        "examinerTrapPattern": "Assuming that providing sterile supplies promotes drug use, rather than recognizing its proven role in disease prevention and treatment entry."
      },
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "EASY",
        "stem": "In medical documentation and patient communication, which of the following terms is the recommended Person-First Language replacement for the stigmatizing phrase 'dirty urine'?",
        "options": [
          "Contaminated specimen",
          "Positive or unexpected toxicology screen",
          "Evil fluid",
          "Unforgivable sample"
        ],
        "correctAnswer": "Positive or unexpected toxicology screen",
        "explanation": "Person-First Language avoids moralizing labels like 'clean' or 'dirty' when describing drug testing. The clinically accurate and neutral terminology is 'positive', 'negative', 'expected', or 'unexpected' toxicology screen.",
        "trapExplanation": "'Contaminated specimen' refers to technical sample adulteration (like soap in urine), while 'evil fluid' and 'unforgivable sample' are absurd pejoratives.",
        "examinerTrapPattern": "Failing to adopt neutral, objective clinical terminology in place of moralizing slang ('clean' vs 'dirty')."
      },
      {
        "type": "APPLIED_SCENARIO",
        "difficulty": "HARD",
        "stem": "A municipal mayor wants to address a citywide addiction crisis. The police chief suggests arresting every person found using drugs and mandating 30 days of incarceration. The public health director recommends a 'Housing First' approach alongside expanding Naloxone access, syringe service programs, and buprenorphine clinics. Based on the concept of 'Recovery Capital' and public health evidence, why is the health director's proposal superior?",
        "options": [
          "Because incarceration actively destroys recovery capital by disrupting housing, employment, and social ties while increasing post-release overdose mortality, whereas Housing First builds external recovery capital that stabilizes lives",
          "Because incarceration is free for taxpayers while health programs cost billions per patient",
          "Because police officers are legally barred from ever arresting individuals with substance use disorders",
          "Because Housing First requires all participants to sign a legal contract never to use any medication"
        ],
        "correctAnswer": "Because incarceration actively destroys recovery capital by disrupting housing, employment, and social ties while increasing post-release overdose mortality, whereas Housing First builds external recovery capital that stabilizes lives",
        "explanation": "Incarceration strips away recovery capital: individuals lose jobs, housing, family custody, and medication access. Crucially, when released from jail, their tolerance is reduced, making them 10 to 40 times more likely to die of an overdose. Housing First provides stable community recovery capital, reducing stress and allowing individuals to engage with healthcare and MOUD.",
        "trapExplanation": "Incarceration is extraordinarily expensive for taxpayers (eliminating B). Police are not legally barred from arrests (eliminating C). Housing First does not forbid medications; it embraces harm reduction and MOUD (eliminating D).",
        "examinerTrapPattern": "Overlooking how punitive approaches deplete recovery capital and dramatically escalate post-release overdose mortality."
      }
    ],
    "examMappings": []
  }
];

export async function seedModuleU4AddictionMedicine(): Promise<void> {
  console.log('[Module U4] Seeding Universal Knowledge: Addiction Treatment & Clinical Neurobiology...');

  // 1. Ensure Domain Exists
  const domain = await db.domain.upsert({
    where: { slug: 'world-understanding-and-universal-knowledge' },
    update: {
      name: 'World Understanding & Universal Knowledge',
      description: 'First-principles understanding of how the universe, technology, nature, and the human mind actually work—free from examination constraints.',
    },
    create: {
      slug: 'world-understanding-and-universal-knowledge',
      name: 'World Understanding & Universal Knowledge',
      description: 'First-principles understanding of how the universe, technology, nature, and the human mind actually work—free from examination constraints.',
      order: 100,
    },
  });

  // 2. Ensure Subject Exists
  let subject = await db.subject.findFirst({ where: { slug: 'neurobiology-of-addiction-and-clinical-recovery' } });
  if (!subject) {
    subject = await db.subject.create({
      data: {
        slug: 'neurobiology-of-addiction-and-clinical-recovery',
        name: 'Neurobiology of Addiction, Clinical Medicine & Behavioral Recovery',
        description: 'First-principles biomedical, pharmacological, and psychological foundations of Substance Use Disorders, diagnostic screening, evidence-based medications, and harm reduction paradigms.',
        scopeStatement: 'Comprehensive universal curriculum derived from Yale University medical faculty covering dopamine mesolimbic neurobiology, SBIRT/DSM-5 screening, MOUD pharmacotherapy, Motivational Interviewing, and Recovery Capital.',
        domainId: domain.id,
        order: 4,
      },
    });
  }

  // 3. Ensure Source Exists
  const sourceAddict = await db.source.upsert({
    where: { id: 'SRC-YALE-ADDICTION-TREATMENT' },
    update: {},
    create: {
      id: 'SRC-YALE-ADDICTION-TREATMENT',
      title: 'Addiction Treatment: Clinical Skills for Healthcare Providers (Yale University)',
      sourceType: 'ACADEMIC_CANONICAL_SYNTHESIS',
      authorityTier: 'PEER_REVIEWED_ACADEMIC_REFERENCE',
      description: 'Authoritative clinical curriculum developed by interprofessional faculty from Yale School of Medicine, Yale School of Nursing, and Yale School of Public Health.',
    },
  });

  // 4. Ensure Topic Exists
  let topic = await db.topic.findFirst({ where: { slug: 'addiction-neurobiology-pharmacotherapy-and-clinical-skills' } });
  if (!topic) {
    topic = await db.topic.create({
      data: {
        slug: 'addiction-neurobiology-pharmacotherapy-and-clinical-skills',
        title: 'Addiction Neurobiology, Diagnostic Frameworks, Pharmacotherapy & Harm Reduction',
        description: 'First-principles biomedical and clinical understanding of Substance Use Disorders: dopamine mesolimbic circuitry, SBIRT screening, evidence-based pharmacotherapies (MOUD/MAT), Motivational Interviewing, and harm reduction frameworks.',
        subjectId: subject.id,
        order: 1,
      },
    });
  } else {
    topic = await db.topic.update({
      where: { id: topic.id },
      data: {
        title: 'Addiction Neurobiology, Diagnostic Frameworks, Pharmacotherapy & Harm Reduction',
        description: 'First-principles biomedical and clinical understanding of Substance Use Disorders: dopamine mesolimbic circuitry, SBIRT screening, evidence-based pharmacotherapies (MOUD/MAT), Motivational Interviewing, and harm reduction frameworks.',
        order: 1,
      },
    });
  }

  for (let i = 0; i < MODULE_U4_CONCEPTS.length; i++) {
    const cDef = MODULE_U4_CONCEPTS[i];
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
          sourceId: sourceAddict.id,
          locator: cl.locator,
          excerpt: cl.excerpt,
          evidenceType: 'PEER_REVIEWED_JOURNAL',
          authority: 'DIRECT_LECTURE_AUTHORITY',
          evidentiarySupport: 'DIRECT_SUPPORT',
          extractionConfidence: 'HIGH',
        },
      });
    }

    for (let bIdx = 0; bIdx < cDef.contentBlocks.length; bIdx++) {
      const cb = cDef.contentBlocks[bIdx];
      await db.contentBlock.create({
        data: {
          conceptId: concept.id,
          type: cb.type,
          title: cb.title,
          body: cb.body,
          order: cb.order || bIdx + 1,
          visibility: 'CANONICAL_FULL',
        },
      });
    }

    for (let rIdx = 0; rIdx < cDef.revisionUnits.length; rIdx++) {
      const ru = cDef.revisionUnits[rIdx];
      await db.revisionUnit.create({
        data: {
          conceptId: concept.id,
          type: ru.type,
          content: ru.content,
          order: rIdx + 1,
        },
      });
    }

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
          isPYQ: false,
          examinerTrapPattern: q.examinerTrapPattern,
        },
      });
    }
  }

  console.log('[Module U4] Successfully seeded ' + MODULE_U4_CONCEPTS.length + ' Universal Knowledge Addiction Medicine Canonical Concepts.');
}
