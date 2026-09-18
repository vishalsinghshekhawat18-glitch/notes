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

export const MODULE_U5_CONCEPTS: UniversalConceptSeed[] = [
  {
    "id": "CON-FOOD-01",
    "topicOrder": 1,
    "topicSlug": "food-systems-appetite-neurobiology-and-public-policy",
    "topicTitle": "Evolutionary Appetite, Neurobiology of Satiety, Food Industry Economics & Global Nutrition Policy",
    "topicDescription": "First-principles understanding of food across human evolution, metabolic physiology, neurobiology of appetite, industrial agricultural economics, and systemic public health policy.",
    "slug": "evolutionary-mismatch-and-the-obesogenic-food-environment",
    "title": "The Evolutionary Mismatch & The Obesogenic Food Environment",
    "shortDefinition": "The biological and historical divergence between human evolutionary physiology and the modern food ecosystem. For 99.9% of hominid evolution, humans lived in environments of severe caloric scarcity where starvation was a constant threat. Natural selection favored individuals with 'thrifty genotypes' possessing an intense innate drive to seek and consume rare, energy-dense nutrients (sugars, fats, and sodium) and store excess calories efficiently as adipose tissue. Within the last century, industrial food engineering inverted this reality, constructing an 'obesogenic' or 'toxic food environment' characterized by ubiquitous, cheap, hyper-palatable, ultra-processed foods engineered to maximize craveability. Because human biology has had virtually zero evolutionary time to adapt to caloric abundance, our ancient survival adaptations now drive unprecedented global epidemics of obesity, type 2 diabetes, and metabolic syndrome.",
    "difficulty": "INTERMEDIATE",
    "claims": [
      {
        "id": "CLM-FOOD-01-01",
        "statement": "The evolutionary mismatch hypothesis establishes that human metabolic and neurobehavioral appetitive drives evolved under selective pressures of chronic caloric scarcity, rendering humans biologically ill-equipped for modern environments of hyper-palatable caloric abundance.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Brownell, PSYC 123 Lecture 2: Food Then, Food Now: Modern Food Conditions and Their Mismatch with Evolution (Yale University)",
        "excerpt": "Humans are biologically wired to crave sugar, fat, and salt because in an ancestral world of scarcity, these nutrients were scarce and essential for survival. Today, we live in a toxic food environment that exploits those ancient biological drives."
      },
      {
        "id": "CLM-FOOD-01-02",
        "statement": "James Neel's Thrifty Gene Hypothesis posits that ancestral populations with genetic predispositions toward exceptionally efficient fat storage and insulin resistance survived prolonged famines, but manifest severe metabolic disease when exposed to sedentary modern diets.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "SCHOLARLY_CONSENSUS",
        "confidence": "HIGH",
        "locator": "Neel, Diabetes mellitus: a 'thrifty' genotype rendered detrimental by 'progress'?, American Journal of Human Genetics (1962)",
        "excerpt": "A 'thrifty' genotype rendered exceptionally efficient in the intake and/or utilization of food would be an asset during periods of feast and famine, but under modern conditions of constant feast leads to obesity and diabetes."
      },
      {
        "id": "CLM-FOOD-01-03",
        "statement": "The modern 'toxic food environment' is characterized by the convergence of extreme convenience, aggressive commercial availability, low financial cost per calorie, and industrial formulation combining refined carbohydrates and fats in ratios never found in nature.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Brownell & Horgen, Food Fight: The Inside Story of The Food Industry, America's Obesity Crisis, and What We Can Do About It, McGraw-Hill (2004)",
        "excerpt": "The obesity epidemic is driven by a toxic food environment: food is everywhere, cheap, heavily advertised, and deliberately engineered to be irresistible."
      },
      {
        "id": "CLM-FOOD-01-04",
        "statement": "Ultra-processed foods (defined under the NOVA classification system) alter food matrix physical structures and absorption kinetics, promoting rapid caloric transit, delayed gut satiety signaling, and voluntary hyperphagia.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Hall et al., Ultra-Processed Diets Cause Excess Calorie Intake and Weight Gain: An Inpatient Randomized Controlled Trial of Ad Libitum Food Intake, Cell Metabolism (2019)",
        "excerpt": "Ad libitum intake was ~500 kcal/day higher during the ultra-processed diet compared with the unprocessed diet, driven by increased eating rate and energy density of the ultra-processed food matrix."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Stone Age Body in the Modern Supermarket",
        "body": "Imagine taking a hunter-gatherer from 50,000 years ago and dropping them into a modern suburban supermarket.\n\nIn their ancestral world, finding something sweet was a rare, miraculous event: a wild honeycomb guarded by stinging bees, or a bush of sour wild berries in late summer. Sugar was a biological emergency signal that meant: 'EAT AS MUCH AS POSSIBLE RIGHT NOW! Winter is coming, and this sugar will convert to life-saving fat!' Salt was equally rare, and animal fat required hunting down an antelope over three days with a wooden spear.\n\nNow look at what that same hunter-gatherer sees in aisle 4: a two-liter bottle of soda containing 130 grams of pure liquid fructose for USD 1.50, and a bag of potato chips containing 1,200 calories of pure fat and salt for USD 2.00.\n\nTheir brain does not say, 'Careful, this will raise your HbA1c and cause cardiovascular plaque.' Their brain screams: 'JACKPOT! YOU HAVE DISCOVERED THE GREATEST NUTRITIONAL TREASURE IN HUMAN HISTORY!' You cannot out-willpower 500,000 years of evolutionary survival programming when you are surrounded 24/7 by foods specifically engineered to trip that biological alarm.",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "The Industrial Inversion of Energy Density",
        "body": "The fundamental engine of the modern metabolic crisis is the INDUSTRIAL INVERSION OF ENERGY DENSITY and the concept of the 'Bliss Point':\n\n1. Caloric Density Inversion:\n   - In nature, high-water, high-fiber foods predominate. To consume 1,000 calories of wild spinach, broccoli, or tubers, an ancestral human had to chew through 3 to 4 kilograms of dense plant fiber over several hours, stretching the stomach and triggering powerful mechanical fullness receptors.\n   - In modern ultra-processed foods, food scientists strip out water and dietary fiber, replacing them with refined oils, flours, and isolated syrups. You can drink 1,000 calories of soda and milkshakes in 4 minutes without chewing once, bypassing all mechanical gastrointestinal stretch receptors.\n\n2. The Unnatural Synergy of Sugar and Fat (The 'Bliss Point'):\n   - In natural, uncultivated foods, sugar and fat almost never exist together in high concentrations. Fruits are high in sugar but have zero fat; nuts and meat are high in fat and protein but have zero sugar.\n   - Industrial food formulation (pioneered by sensory scientist Howard Moskowitz) intentionally combines sugar, fat, and salt in a precise ratio known as the 'Bliss Point'. This unnatural combination over-stimulates the brain's sensory-specific satiety mechanisms, preventing the brain from ever registering that it has eaten enough.",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "Evolutionary Mismatch & Caloric Processing Dynamics",
        "body": "How ancestral metabolic adaptations crash against modern industrial food engineering:\n\n```\n+-------------------------------------------------------------------------+\n|               EVOLUTIONARY HOMEOSTASIS vs. INDUSTRIAL MISMATCH           |\n+-------------------------------------------------------------------------+\n\n   ANCESTRAL ENVIRONMENT                    MODERN TOXIC ENVIRONMENT\n   * Food Scarcity & Famines                * Constant Feast / Omnipresent Food\n   * High Physical Energy Cost              * Zero Physical Energy Required\n   * High Fiber, High Water, Low Density    * Ultra-Processed, Fiber-Stripped\n              |                                        |\n              v                                        v\n   [Adaptive Selection]                     [Pathological Outcome]\n   * Thrifty Genotype (Fast Fat Storage)    * Unregulated Caloric Hyperphagia\n   * Intense Cravings for Sugar/Fat/Salt    * Leptin Resistance & Hyperinsulinemia\n   * Biological Survival Advantage!         * Obesity, Type 2 Diabetes, NASH\n\n===========================================================================\n               THE 'BLISS POINT' DOPAMINERGIC HIJACK LOOP\n===========================================================================\n\n   Natural Whole Food   : Sugar OR Fat (Never both) -> Satiety reached quickly\n   Industrial Food Matrix: Sugar + Fat + Salt (Optimized 50/50 ratio)\n                                 |\n                                 v\n   Triggers Sensory-Specific Satiety Bypass (Overeats 500+ kcal/day!)\n```",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Universal Mental Model: Environmental Architecture Over Willpower",
        "body": "The evolutionary mismatch model provides a crucial mental model for personal health, organizational design, and public policy:\n\n1. The Myth of Personal Willpower in a Toxic Environment:\n   - Blaming an individual for gaining weight in an obesogenic environment is like dropping someone into an icy river and blaming them for getting hypothermia. When the environment changes dramatically while biology remains static, the environment always wins in the aggregate.\n\n2. Choice Architecture (Nudge Theory):\n   - If a plate of cookies sits on your kitchen counter, you burn mental willpower every time you walk by until your prefrontal cortex tires out and you eat them. If the cookies are not in your house, your evolutionary craving encounters friction (putting on shoes, driving to the store), and you effortlessly eat an apple instead. Control your physical environment, not your moment-to-moment willpower.\n\n3. Corporate Framing vs. Public Health Reality:\n   - Ultra-processed food corporations heavily promote the 'Personal Responsibility' narrative: 'There are no bad foods, only bad diets; people just need to exercise more!' This deflects blame away from corporate formulations, marketing budgets, and subsidies toward individual guilt.",
        "order": 4
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "We have Stone Age bodies in a supermarket world! Humans evolved thrifty genes to crave sugar, fat, and salt during famines. Modern industrial foods strip fiber and hit the 'Bliss Point' (sugar + fat synergy), bypassing natural satiety and driving metabolic disease!"
      },
      {
        "type": "SUMMARY_2M",
        "content": "The Evolutionary Mismatch Hypothesis, emphasized by Professor Kelly Brownell in Yale PSYC 123, explains that human biology evolved over hundreds of thousands of years in environments of caloric scarcity. Natural selection favored 'thrifty genotypes' that craved energy-dense sugar, fat, and salt and stored adipose tissue efficiently. In the 20th century, industrialization created an 'obesogenic environment': omnipresent, cheap, hyper-palatable ultra-processed foods engineered to the 'Bliss Point' (unnatural combinations of refined carbohydrates, fats, and sodium). Kevin Hall's clinical trials prove that ultra-processed diets drive an unprompted 500 kcal/day excess intake by altering gastric transit and bypassing mechanical fiber stretch receptors. Obesity is a structural environmental crisis, not an aggregate failure of human moral willpower."
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Core Framework: Evolutionary Mismatch & Food Environment:\n1. Thrifty Gene Hypothesis (Neel): Evolutionary trade-off where alleles optimizing rapid fat deposition during feast periods become pathogenic under conditions of persistent caloric abundance.\n2. Caloric Density & NOVA Classification: Unprocessed foods maintain complex cellular matrices requiring mechanical chewing and slow enzymatic breakdown. Ultra-processed foods (NOVA 4) disintegrate food matrices, drastically elevating caloric absorption velocity.\n3. The Bliss Point (Moskowitz): Industrial optimization of sugar, fat, and sodium concentrations that maximizes sensory palatability while overriding sensory-specific satiety mechanisms.\n4. Energy Balance Fallacy: The corporate framing that 'a calorie is a calorie' ignores the neuroendocrine, hormonal, and metabolic signaling differences between whole-food fiber matrices and liquid/refined industrial carbohydrates.\n5. Policy Axiom: Systemic metabolic health cannot be restored by lecturing individuals on willpower; it requires reshaping environmental availability, taxation, and agricultural incentives."
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "In a landmark NIH randomized controlled feeding study led by Dr. Kevin Hall (Cell Metabolism 2019), what happened when participants were given unlimited access to an ultra-processed diet compared to an unprocessed whole-food diet matched exactly for sugar, fat, sodium, and fiber content?",
        "options": [
          "Participants consumed identical calories and maintained stable body weight across both diets",
          "Participants on the ultra-processed diet consumed approximately 500 extra calories per day and gained significant weight, driven by a faster rate of eating and altered food matrix density",
          "Participants on the ultra-processed diet lost weight because processed foods take longer to chew and digest",
          "Participants on the unprocessed diet developed acute liver failure within 48 hours"
        ],
        "correctAnswer": "Participants on the ultra-processed diet consumed approximately 500 extra calories per day and gained significant weight, driven by a faster rate of eating and altered food matrix density",
        "explanation": "Hall's rigorous inpatient metabolic trial demonstrated that even when macro-nutrients (fat, sugar, sodium, fiber) were carefully matched, ultra-processed foods caused participants to eat significantly faster and consume ~500 additional calories daily, resulting in rapid weight gain. This proved that food matrix processing itself drives involuntary overeating.",
        "trapExplanation": "Calories consumed were not identical (eliminating A). Ultra-processed foods are softer and eaten faster, not slower (eliminating C). Unprocessed whole foods are healthy and do not cause liver failure (eliminating D).",
        "examinerTrapPattern": "Assuming that diets with identical listed macronutrients on a label produce identical caloric intake, ignoring the physical food matrix and eating velocity."
      },
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "EASY",
        "stem": "According to evolutionary biology, why do humans possess an innate, universal biological craving for sweet, fatty, and salty tastes?",
        "options": [
          "Because human ancestors lived exclusively on candy bars and ice cream for millions of years",
          "Because in an ancestral environment of chronic scarcity, sweet signaled non-toxic calories, fat provided energy storage, and salt maintained essential fluid balance",
          "Because human taste buds were artificially engineered by 19th-century food corporations",
          "Because toxic poisonous plants in nature taste exclusively like pure refined sugar"
        ],
        "correctAnswer": "Because in an ancestral environment of chronic scarcity, sweet signaled non-toxic calories, fat provided energy storage, and salt maintained essential fluid balance",
        "explanation": "In ancestral environments, sweet tastes indicated safe, high-energy ripe fruits (poisons are typically bitter), dietary fats provided dense survival energy, and sodium was vital for cellular homeostasis and hard to find. Those who craved and sought these rare nutrients survived famines.",
        "trapExplanation": "Candy bars did not exist ancestrally (A). Taste buds are ancient biological organs, not corporate inventions (C). Poisons taste bitter, not sweet (D).",
        "examinerTrapPattern": "Viewing sugar and fat cravings as arbitrary modern vices rather than vital evolutionary survival mechanisms."
      },
      {
        "type": "APPLIED_SCENARIO",
        "difficulty": "HARD",
        "stem": "A corporate wellness program attempts to combat employee obesity by placing educational posters about 'eating less and exercising more' next to vending machines stocked with cheap sodas, candy, and chips. After one year, employee obesity rates increase. Based on Professor Kelly Brownell's 'Toxic Food Environment' framework, why did this initiative fail?",
        "options": [
          "Because reading posters causes immediate metabolic slowdown in the human thyroid",
          "Because cognitive educational advice cannot overcome a toxic physical environment where cheap, hyper-palatable cues constantly trigger ancient subcortical appetitive instincts",
          "Because employees secretly replaced all the vending machines with pure water",
          "Because exercise is scientifically proven to cause type 2 diabetes"
        ],
        "correctAnswer": "Because cognitive educational advice cannot overcome a toxic physical environment where cheap, hyper-palatable cues constantly trigger ancient subcortical appetitive instincts",
        "explanation": "Brownell's research emphasizes that education alone is completely ineffective when surrounded by an environment designed to trigger consumption. The physical presence of cheap, hyper-palatable processed food continually depletes conscious willpower. Real change requires altering the structural environment (e.g. removing the vending machines or subsidizing fresh fruit in the cafeteria).",
        "trapExplanation": "Posters do not slow the thyroid (A). Exercise prevents diabetes, not causes it (D). The vending machines remained stocked with junk (C).",
        "examinerTrapPattern": "Relying purely on individual educational 'personal responsibility' interventions while leaving an obesogenic physical environment completely intact."
      }
    ],
    "examMappings": []
  },
  {
    "id": "CON-FOOD-02",
    "topicOrder": 1,
    "topicSlug": "food-systems-appetite-neurobiology-and-public-policy",
    "topicTitle": "Evolutionary Appetite, Neurobiology of Satiety, Food Industry Economics & Global Nutrition Policy",
    "topicDescription": "First-principles understanding of food across human evolution, metabolic physiology, neurobiology of appetite, industrial agricultural economics, and systemic public health policy.",
    "slug": "neurobiology-of-appetite-gut-brain-axis-and-food-addiction",
    "title": "Neurobiology of Appetite, The Gut-Brain Axis & Food Addiction",
    "shortDefinition": "The neuroendocrine and neurobiological circuits governing hunger, satiety, and food addiction. Appetite regulation is divided into two distinct brain systems: Homeostatic Feeding (regulated by the hypothalamus to balance energy needs) and Hedonic Feeding (regulated by the mesolimbic dopamine system driven by pleasure and craving). Peripheral hormones coordinate homeostatic feeding via the gut-brain axis: Ghrelin (secreted by the stomach during emptiness) stimulates Neuropeptide Y (NPY) and AgRP neurons in the arcuate nucleus of the hypothalamus to trigger intense hunger; conversely, Leptin (secreted by adipose tissue in proportion to fat mass) acts as the body's long-term energy gauge, signaling the brain to suppress appetite. In chronic obesity, sustained hyper-leptinemia causes 'Leptin Resistance'—the blood-brain barrier stops transporting leptin, blinding the hypothalamus and causing the brain to falsely believe it is starving. Simultaneously, hyper-palatable industrial foods trigger dopaminergic surges in the Nucleus Accumbens that induce D2 receptor downregulation, tolerance, and withdrawal identical to classical addictive substances.",
    "difficulty": "INTERMEDIATE",
    "claims": [
      {
        "id": "CLM-FOOD-02-01",
        "statement": "Appetite is coordinated by two distinct neural circuits: Homeostatic Feeding (hypothalamic energy balance regulated by ghrelin and leptin) and Hedonic Feeding (mesolimbic dopamine reward circuitry that can completely override homeostatic fullness).",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Saper, Chou, & Elmquist, The Need to Feed: Homeostatic and Hedonic Control of Eating, Neuron (2002)",
        "excerpt": "The hedonic dopamine reward system can override hypothalamic homeostatic satiety mechanisms, driving consumption of palatable energy-dense foods even in states of positive energy balance."
      },
      {
        "id": "CLM-FOOD-02-02",
        "statement": "Ghrelin acts as a meal-initiating hunger peptide secreted by gastric endocrine cells, activating hypothalamic AgRP/NPY neurons, whereas Leptin acts as an adipokine providing tonic negative feedback on appetite through POMC/CART activation.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Morton et al., Central nervous system control of food intake and body weight, Nature (2006)",
        "excerpt": "Circulating leptin and insulin communicate peripheral energy stores to hypothalamic arcuate nucleus neurons, while episodic gut hormones like ghrelin and peptide YY signal meal-to-meal hunger and satiety."
      },
      {
        "id": "CLM-FOOD-02-03",
        "statement": "In chronic obesity, chronically elevated circulating leptin levels trigger central Leptin Resistance, where hypothalamic signaling fails, tricking the brain into perceiving a state of biological starvation despite massive adipose energy reserves.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Myers, Cowley, & Munzberg, Mechanisms of leptin action and leptin resistance, Annual Review of Physiology (2008)",
        "excerpt": "Despite hyperleptinemia, obese individuals fail to respond to endogenous leptin, indicating a state of cellular leptin resistance that impairs appetite suppression and energy expenditure."
      },
      {
        "id": "CLM-FOOD-02-04",
        "statement": "Diets high in refined sugars and fats induce neurochemical adaptations in the striatum analogous to drugs of abuse, including dopamine D2 receptor downregulation, mu-opioid receptor alterations, and behavioral signs of tolerance, cross-sensitization, and withdrawal.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "SCHOLARLY_CONSENSUS",
        "confidence": "HIGH",
        "locator": "Avena, Rada, & Hoebel, Evidence for sugar addiction: Behavioral and neurochemical effects of intermittent, excessive sugar intake, Neuroscience & Biobehavioral Reviews (2008)",
        "excerpt": "Intermittent access to sugar and fat induces behavioral dependence characterized by binging, withdrawal, craving, and cross-sensitization to other drugs of abuse, mediated by mesolimbic dopamine release."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Broken Fuel Gauge and The Dessert Stomach",
        "body": "Have you ever sat down to Thanksgiving dinner, eaten until your stomach was physically groaning in pain, and declared: 'I could not eat another single bite of turkey or mashed potatoes if my life depended on it'?\n\nAnd then, five minutes later, someone brings out a warm chocolate cake with vanilla ice cream. Suddenly, you miraculously 'find room' for two slices of cake! How is that possible? Did your stomach magically grow a second compartment?\n\nNeurobiology reveals the answer: you have two completely different feeding control systems in your brain.\n\n1. The Homeostatic Stomach (The Fuel Gauge in the Hypothalamus): It measures your physical calories. When your stomach is stuffed with turkey, the stretch receptors say, 'Fuel tank is 100% full!'\n\n2. The Hedonic Stomach (The Dopamine Pleasure Center in the Striatum): It does not care about calories or fuel gauges. It cares about dopamine. When it sees sugar, fat, and melted chocolate, the hedonic reward pathway completely overrules the fuel gauge, shouting: 'Override the alarm! This is pure survival treasure!'\n\nFurthermore, in obesity, the body's long-term fuel gauge (Leptin) breaks down. A person carrying 80 pounds of excess fat has plenty of fuel, but the brain's sensor is blind. The brain literally believes the body is starving on a desert island, screaming at the person to eat more calories to stay alive.",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "The Ghrelin-Leptin Axis vs. The Dopaminergic Food Addiction Loop",
        "body": "Understanding the neurobiology of eating requires mapping the molecular tug-of-war between the gut and the brain:\n\n1. The Homeostatic Gut-Brain Axis:\n   - Ghrelin (The Meal Trigger): Secreted by the empty stomach wall. Levels spike right before customary meal times and drop sharply within 30 minutes of eating. Ghrelin travels through the bloodstream to the Arcuate Nucleus of the hypothalamus, activating AgRP/NPY neurons ('EAT NOW!').\n   - Leptin (The Long-Term Fuel Gauge): Secreted by white adipose (fat) cells in direct proportion to body fat mass. When fat stores are high, leptin enters the brain and activates POMC/CART neurons, turning off hunger and boosting metabolic rate.\n   - The Leptin Resistance Trap: In chronic overeating, circulating leptin levels become chronically sky-high. The blood-brain barrier transport receptors become saturated and inflamed. Hypothalamic neurons down-regulate leptin receptors. The brain experiences a 'leptin deficit': even though the body is obese, the brain registers ZERO satiety, triggering intense evolutionary starvation panics (lowering metabolic rate and intensifying cravings).\n\n2. The Yale Food Addiction Scale (YFAS):\n   - Developed by Dr. Ashley Gearhardt and Professor Kelly Brownell, the YFAS applied the DSM criteria for substance dependence to eating behaviors.\n   - Brain imaging (fMRI) reveals that viewing a chocolate milkshake activates the exact same striatal and insular reward pathways in food-addicted individuals as viewing cocaine cues does in drug-dependent patients.\n   - Intermittent high-sugar intake causes dopamine D2 receptor downregulation in the nucleus accumbens, creating tolerance (needing larger dessert portions) and withdrawal (irritability, anxiety, and shaking when sugar is abruptly eliminated).",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "The Homeostatic vs. Hedonic Appetite Circuitry",
        "body": "The competing neuroendocrine pathways regulating hunger, satiety, and reward hijacking:\n\n```\n+-------------------------------------------------------------------------+\n|               NEUROENDOCRINE CONTROL OF APPETITE & SATIETY               |\n+-------------------------------------------------------------------------+\n\n   PERIPHERAL SIGNALS                   HYPOTHALAMUS (Arcuate Nucleus)\n   ------------------                   ------------------------------\n   Stomach Empty  ---> [ + GHRELIN ] ----> Stimulates AgRP / NPY Neurons\n                                           (Hunger Signal: \"EAT!\")\n                                                     |\n   Adipose Stores ---> [ + LEPTIN  ] ----> Stimulates POMC / CART Neurons\n                                           (Satiety Signal: \"STOP!\")\n                                                     |\n                                                     v\n   [IN OBESITY: LEPTIN RESISTANCE] -----> Brain feels STARVED despite fat!\n\n===========================================================================\n         HEDONIC OVERRIDE: THE MESOLIMBIC FOOD ADDICTION LOOP\n===========================================================================\n\n   Hyper-Palatable Food (Sugar + Fat) \n             |\n             v\n   Ventral Tegmental Area (VTA) ----> Mass Dopamine Surge in Nucleus Accumbens\n                                                     |\n                                                     v\n   Completely OVERRIDES Hypothalamic Satiety (\"The Dessert Stomach\")!\n                                                     |\n                                                     v\n   Repeated Surges -> Downregulates Striatal D2 Receptors -> Tolerance/Craving\n```",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Universal Mental Model: Biology Trumps Morality in Chronic Diets",
        "body": "The neurobiology of appetite explains why 95% of conventional calorie-counting diets fail over a 5-year horizon:\n\n1. The Starvation Response to Weight Loss:\n   - When an obese person diets and loses 20 pounds, their fat cells shrink. As fat shrinks, circulating leptin PLUMMETS precipitously. Meanwhile, the stomach ramps up ghrelin.\n   - The hypothalamus perceives this leptin drop as an existential threat: 'We are dying of famine!' The brain responds by slowing resting metabolic rate by 300 to 500 calories/day (adaptive thermogenesis) and amplifying neural sensitivity to food cues by 400%.\n   - The dieter is not weak-willed; they are fighting an ancient biological survival program designed to defend body weight at all costs.\n\n2. The GLP-1 Receptor Agonist Revolution (Ozempic, Wegovy):\n   - The dramatic clinical success of GLP-1 medications (semaglutide, tirzepatide) conclusively proves the neurobiological model of obesity.\n   - GLP-1 is an incretin hormone secreted by the L-cells of the ileum that slows gastric emptying and binds to hypothalamic and hindbrain satiety receptors. Semaglutide silences what patients describe as 'food noise'—the constant, intrusive, subcortical dopamine cravings that conscious willpower struggles to silence.",
        "order": 4
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Appetite has two masters: the Hypothalamus (homeostatic fuel gauge) and the Mesolimbic Dopamine system (hedonic pleasure override)! Ghrelin triggers hunger; Leptin signals fullness. Obesity causes Leptin Resistance (the brain feels starved). Sugar/fat hijacks dopamine like drugs!"
      },
      {
        "type": "SUMMARY_2M",
        "content": "Appetite regulation is governed by the interplay between homeostatic energy balance and hedonic reward. Homeostatic feeding is mediated by the hypothalamus: Ghrelin (released by the stomach) stimulates hunger, whereas Leptin (secreted by adipose tissue) signals long-term energy sufficiency. In chronic obesity, excessive leptin production triggers central Leptin Resistance: the hypothalamus becomes blind to leptin, falsely interpreting adipose abundance as starvation and driving continuous hunger. Simultaneously, the hedonic mesolimbic dopamine pathway (VTA to Nucleus Accumbens) can completely override homeostatic fullness when exposed to hyper-palatable sugar-fat combinations ('the dessert stomach'). Neuroimaging confirms that ultra-processed foods downregulate striatal D2 receptors, meeting clinical criteria for food addiction on the Yale Food Addiction Scale (YFAS)."
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Core Architecture: Neurobiology of Appetite & Food Addiction:\n1. Hypothalamic Dual-Center Circuitry: Arcuate nucleus balances orexigenic (AgRP/NPY - hunger stimulating) and anorexigenic (POMC/CART - satiety inducing) neuronal populations.\n2. Incretin and Satiety Peptides: GLP-1, PYY, and Cholecystokinin (CCK) signal acute postprandial fullness via the vagus nerve and solitary tract nucleus.\n3. Leptin Resistance Mechanism: Saturated blood-brain barrier transport, endoplasmic reticulum stress, and SOCS3 feedback inhibition prevent leptin from suppressing appetite in obese states.\n4. Hedonic Dominance: Dopaminergic incentive salience in the ventral striatum overrides homeostatic satiety thresholds upon exposure to conditioned sensory cues (sugar/fat smells, images).\n5. Yale Food Addiction Scale (YFAS): Diagnostic application of DSM substance dependence criteria (craving, persistent desire, tolerance, withdrawal) to hyper-palatable refined foods."
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "Why does an individual who has lost 30 pounds on a strict calorie-restricted diet experience intense, persistent biological hunger even months after stabilizing at a healthy weight?",
        "options": [
          "Because shrinking adipose fat cells cause circulating leptin levels to plummet, tricking the hypothalamus into believing the body is starving and triggering compensatory metabolic slowing and voracious appetite",
          "Because the stomach permanently loses its ability to produce digestive acid",
          "Because dieting permanently destroys the brain's mesolimbic dopamine pathway",
          "Because losing weight causes the blood-brain barrier to dissolve completely"
        ],
        "correctAnswer": "Because shrinking adipose fat cells cause circulating leptin levels to plummet, tricking the hypothalamus into believing the body is starving and triggering compensatory metabolic slowing and voracious appetite",
        "explanation": "Leptin is produced by fat cells in proportion to their size. When fat stores shrink rapidly through dieting, leptin drops sharply below the individual's previous baseline. The hypothalamus interprets this sudden drop as a life-threatening famine, slowing basal metabolic rate (adaptive thermogenesis) and driving intense biological hunger to restore lost fat mass.",
        "trapExplanation": "Dieting does not destroy stomach acid (B), eliminate dopamine pathways (C), or dissolve the blood-brain barrier (D). The phenomenon is a well-documented neuroendocrine starvation response.",
        "examinerTrapPattern": "Viewing post-diet hunger as a failure of moral discipline rather than an evolutionary neuroendocrine homeostatic defense of fat mass."
      },
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "EASY",
        "stem": "Which gastrointestinal hormone is secreted by the stomach wall when it is empty to travel to the hypothalamus and stimulate immediate hunger?",
        "options": [
          "Melatonin",
          "Ghrelin",
          "Thyroxine",
          "Calcitonin"
        ],
        "correctAnswer": "Ghrelin",
        "explanation": "Ghrelin is known as the 'hunger hormone'. It is produced primarily by P/D1 cells in the fundus of the human stomach when empty, stimulating hypothalamic AgRP/NPY neurons to initiate feeding.",
        "trapExplanation": "Melatonin regulates sleep (A). Thyroxine regulates cellular metabolic rate (C). Calcitonin regulates calcium balance (D).",
        "examinerTrapPattern": "Confusing the hunger-initiating hormone (Ghrelin) with the satiety-signaling hormone (Leptin)."
      },
      {
        "type": "APPLIED_SCENARIO",
        "difficulty": "HARD",
        "stem": "A clinical researcher conducts fMRI brain scans on volunteers. When shown images of chocolate milkshakes, one group of participants displays intense neural activation in the Nucleus Accumbens and Insula, along with marked downregulation of striatal dopamine D2 receptors, identical to fMRI scans of cocaine dependence. What diagnostic framework, developed by Dr. Ashley Gearhardt and Professor Kelly Brownell, standardizes this phenomenon?",
        "options": [
          "The Glasgow Coma Scale",
          "The Yale Food Addiction Scale (YFAS)",
          "The Hamilton Anxiety Rating Scale",
          "The APGAR Newborn Score"
        ],
        "correctAnswer": "The Yale Food Addiction Scale (YFAS)",
        "explanation": "The Yale Food Addiction Scale (YFAS), created by Gearhardt and Brownell at Yale University, operationalizes DSM substance dependence criteria (binging, tolerance, withdrawal, loss of control) specifically for hyper-palatable processed foods, correlating directly with neuroimaging findings of striatal dopamine dysregulation.",
        "trapExplanation": "The Glasgow Coma Scale measures consciousness after head trauma (A). Hamilton measures anxiety (C). APGAR evaluates newborn vitality (D).",
        "examinerTrapPattern": "Failing to recognize the Yale Food Addiction Scale as the scientifically validated clinical standard for assessing food dependence."
      }
    ],
    "examMappings": []
  },
  {
    "id": "CON-FOOD-03",
    "topicOrder": 1,
    "topicSlug": "food-systems-appetite-neurobiology-and-public-policy",
    "topicTitle": "Evolutionary Appetite, Neurobiology of Satiety, Food Industry Economics & Global Nutrition Policy",
    "topicDescription": "First-principles understanding of food across human evolution, metabolic physiology, neurobiology of appetite, industrial agricultural economics, and systemic public health policy.",
    "slug": "psychology-of-mindless-eating-and-predatory-marketing-to-children",
    "title": "Psychology of Mindless Eating & Predatory Marketing to Children",
    "shortDefinition": "The behavioral psychology of consumption volume and commercial marketing targeting pediatric populations. Research in eating psychology demonstrates that human consumption is governed largely by external visual cues and environmental architecture rather than internal physiological satiety signals. This is demonstrated by portion distortion and visual eating illusions (such as the 'Bottomless Soup Bowl' experiment, where participants eating from secretly self-refilling bowls consumed 73% more soup without feeling fuller). Concurrently, commercial food conglomerates invest billions annually in targeted youth marketing: children under age 8 possess a developmental cognitive vulnerability, lacking the executive maturity to distinguish commercial advertising intent from objective entertainment or education. By leveraging cartoon brand mascots, advergames, and product placements, the ultra-processed food industry shapes lifelong taste preferences, habituates children to hyper-palatable diets, and drives pediatric metabolic disease.",
    "difficulty": "INTERMEDIATE",
    "claims": [
      {
        "id": "CLM-FOOD-03-01",
        "statement": "Human food intake volume is predominantly regulated by external visual cues, package sizing, and plate dimensions rather than internal physiological fullness signals, leading to involuntary caloric overconsumption ('Mindless Eating').",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Wansink, Painter, & North, Bottomless Bowls: Why Visual Cues of Portion Size May Influence Intake, Obesity Research (2005)",
        "excerpt": "Participants eating from secretly self-refilling soup bowls consumed 73% more soup than those eating from normal bowls, but did not estimate that they ate more, nor did they rate themselves as being more full."
      },
      {
        "id": "CLM-FOOD-03-02",
        "statement": "Portion sizes for commercial foods and beverages have grown by two- to five-fold over the past five decades, distorting normative perception of appropriate portion volume and driving proportional increases in daily caloric intake.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Young & Nestle, The Contribution of Expanding Portion Sizes to the US Obesity Epidemic, American Journal of Public Health (2002)",
        "excerpt": "Portion sizes began to grow in the 1970s and increased sharply in the 1980s. Sizes offered by fast-food chains often exceed federal dietary standards by multiple orders of magnitude."
      },
      {
        "id": "CLM-FOOD-03-03",
        "statement": "Developmental psychology establishes that children below the age of 8 are cognitively incapable of comprehending the persuasive commercial intent of advertising, rendering youth food marketing inherently predatory and manipulative.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Institute of Medicine (IOM), Food Marketing to Children and Youth: Threat or Opportunity?, National Academies Press (2006)",
        "excerpt": "Children under the age of 8 lack the cognitive development to recognize the persuasive intent of televised and digital marketing, making them uniquely vulnerable to commercial food promotion."
      },
      {
        "id": "CLM-FOOD-03-04",
        "statement": "Utilizing licensed cartoon characters and vibrant youth-targeted packaging significantly enhances children's reported taste preferences and purchase requests for low-nutrient, energy-dense foods.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Roberto, Baik, Busko, Feuerstein, Schwartz, & Brownell, Influence of Licensed Characters on Children's Taste and Snack Preferences, Pediatrics (2010)",
        "excerpt": "Children significantly preferred the taste of foods featuring licensed cartoon characters on the packaging compared to identical unbranded foods, confirming that character branding directly shapes pediatric taste perceptions."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Magic Soup Bowl and The Cartoon Trap",
        "body": "Imagine sitting down in a restaurant for lunch with a bowl of tomato soup. You eat until the bowl is about empty, wipe your mouth, and feel perfectly satisfied. You ate one bowl.\n\nNow suppose researchers secretly drilled a hole in the bottom of your table, ran a silicone tube up into your bowl, and slowly pumped fresh soup in from underneath as fast as you ate it—so the soup level never dropped.\n\nIn a famous experiment, people eating from this 'bottomless bowl' ate 73% more soup! They consumed nearly two full bowls of food. But when asked afterward, they said: 'I only ate about half a bowl, I feel fine.' Humans don't stop eating when their stomach is full; they stop eating when their EYES tell them the plate is empty.\n\nNow, combine this visual vulnerability with a five-year-old child watching Saturday morning cartoons. A commercial airs featuring a colorful tiger or rabbit dancing across the screen with a bowl of cereal that is 45% pure sugar. A child's brain does not think: 'This is a paid advertisement designed by a multinational corporation to maximize quarterly stock earnings.' The child thinks: 'My cartoon friend is telling me to eat this cereal!' Exploiting that developmental vulnerability is not free-market choice; it is predatory conditioning.",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "Visual Satiety Illusions & The Ethics of Youth Marketing",
        "body": "Eating psychology and youth marketing expose how human behavior is engineered by external environmental prompts:\n\n1. The Psychology of Mindless Eating:\n   - The Delboeuf Illusion: When food is served on a large plate, our eyes perceive the portion as small, prompting us to serve and eat more. When the exact same portion is placed on a smaller plate, the food fills the rim, signaling to the brain: 'This is a huge meal!'\n   - Satiety Delays: It takes approximately 15 to 20 minutes for gastrointestinal hormones (cholecystokinin, PYY, GLP-1) to travel from the gut to the hypothalamus. When foods are ultra-palatable and portions are huge, humans can consume 1,500 calories before the first chemical fullness signal arrives.\n\n2. The Anatomy of Predatory Marketing to Children:\n   - The 'Nag Factor' (Pester Power): Marketing agencies intentionally design advertisements to encourage children to persistently nag their parents until the parent surrenders in the grocery store aisle.\n   - Brand Imprinting: Food companies understand that taste preferences established before age 6 persist for life. By associating sugary cereals and fast-food meals with toys, movie tie-ins, and cartoon characters, corporations imprint lifelong neural brand loyalty.\n   - The Digital Frontier ('Advergames'): In modern media, advertising has moved from 30-second TV commercials into interactive smartphone video games ('advergames') where children play games featuring corporate snack mascots for hours at a time, completely absorbing branded marketing below the level of conscious awareness.",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "Visual Satiety Distortion & Pediatric Marketing Vectors",
        "body": "Visual portion illusions and commercial advertising pipelines targeting developmental vulnerabilities:\n\n```\n+-------------------------------------------------------------------------+\n|               THE DELBOEUF VISUAL PORTION ILLUSION                      |\n+-------------------------------------------------------------------------+\n\n   LARGE 12-INCH DINNER PLATE             SMALL 9-INCH SALAD PLATE\n   +--------------------------+          +--------------------------+\n   |                          |          |                          |\n   |         (  FOOD  )       |          |      (   FOOD   )        |\n   |                          |          |                          |\n   +--------------------------+          +--------------------------+\n   Eye Sees: \"Plate is empty!\"            Eye Sees: \"Plate is overflowing!\"\n   Result  : Serves 35% MORE calories     Result  : Feels full on 30% LESS\n\n===========================================================================\n                 PEDIATRIC COMMERCIAL MARKETING PIPELINE                   \n===========================================================================\n\n   Food Conglomerate Marketing Budget (Billions USD)\n             |\n             v\n   [Advergames / Cartoons / Mascots / Toy Tie-ins]\n             |\n             v\n   Target: Child under 8 Years (Cannot comprehend commercial persuasion!)\n             |\n             v\n   Conditioned Hyper-Palatable Taste Preferences -> Pester Power / Nagging\n             |\n             v\n   Parent Surrenders -> Lifelong Brand Loyalty & Pediatric Metabolic Disease\n```",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Universal Mental Model: Structural Guardrails Over Permissive Exploitation",
        "body": "The insights of eating psychology and youth marketing transform how we design homes, schools, and regulatory law:\n\n1. Redesigning Domestic Eating Architecture:\n   - Downsize dinnerware: Switch from 12-inch to 9-inch dinner plates to instantly reduce caloric intake by 20% to 30% without hunger.\n   - Remove serving dishes from the dining table: Serve food directly from the kitchen stove so that getting seconds requires physically standing up and walking across the room, inserting conscious friction into automatic snacking.\n\n2. Regulatory Protection for Vulnerable Populations:\n   - Several nations recognize the developmental vulnerability of children. Countries like Sweden, Norway, and Chile have banned all commercial television advertising directed at children under 12. Studies show immediate drops in childhood obesity and sugary cereal consumption.\n\n3. Protecting Schools as Commercial-Free Sanctuaries:\n   - Schools should be educational spaces, not corporate distribution centers. Banning branded junk food vending machines and fast-food contracts in public schools prevents commercial interests from undermining public health education.",
        "order": 4
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Humans eat with their eyes, not their stomachs! The 'bottomless soup bowl' showed people eat 73% more if visual cues don't signal fullness. Children under 8 cannot comprehend advertising intent, making cartoon junk-food marketing predatory and manipulative!"
      },
      {
        "type": "SUMMARY_2M",
        "content": "Eating psychology demonstrates that food consumption is dictated heavily by environmental cues rather than internal physiological fullness. Brian Wansink's 'Bottomless Soup Bowl' experiment proved that individuals eating from self-refilling bowls consumed 73% more calories without perceiving greater fullness. Concurrently, portion sizes across restaurants and supermarkets have expanded two- to five-fold over recent decades. In pediatric psychology, the Institute of Medicine (IOM) established that children under age 8 lack the cognitive capability to recognize commercial persuasive intent. Research by Kelly Brownell and Christina Roberto demonstrates that placing licensed cartoon characters on snack packaging significantly alters children's subjective taste ratings and drives purchase requests, establishing youth marketing as an ethical and regulatory crisis."
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Core Architecture: Mindless Eating & Pediatric Food Marketing:\n1. The Delboeuf Illusion & Unit Bias: Humans instinctively consume whole single units (a full plate, a full bottle). Larger plate surfaces distort proportional perception, expanding serving volumes.\n2. Incretin Latency: The 15-to-20 minute physiological lag between mechanical stomach filling and neuroendocrine satiety signaling allows rapid hyperphagia before fullness is registered.\n3. Cognitive Vulnerability in Youth: Prefrontal executive discernment of commercial advertising intent matures only around ages 8 to 10. Marketing to younger children constitutes non-consensual behavioral conditioning.\n4. Cross-Platform Marketing Vectors: Transition from legacy broadcast television to immersive mobile 'advergames', viral influencer sponsorship, and branded cartoon mascots.\n5. Regulatory Solutions: Banning child-directed junk food marketing (e.g. Sweden, Quebec, Chile) and removing commercial brand sponsorships from public school curricula."
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "In Brian Wansink's famous 'Bottomless Soup Bowl' experiment, what was the primary finding regarding human eating behavior?",
        "options": [
          "Participants stopped eating the exact moment their stomachs reached physiological fullness, regardless of bowl size",
          "Participants eating from secretly self-refilling bowls consumed 73% more soup, yet did not believe they had eaten more, proving that visual cues override physiological satiety",
          "Participants immediately detected the hidden tube and refused to eat the soup",
          "Soup consumption caused all participants to experience immediate memory loss"
        ],
        "correctAnswer": "Participants eating from secretly self-refilling bowls consumed 73% more soup, yet did not believe they had eaten more, proving that visual cues override physiological satiety",
        "explanation": "The experiment demonstrated that humans rely heavily on external visual cues (seeing an empty bowl) rather than internal interoceptive signals to stop eating. Participants consumed 73% more calories without feeling any fuller or realizing they had overeaten.",
        "trapExplanation": "Participants did not stop based on physiological fullness (eliminating A). They did not detect the tube (C). Soup did not cause memory loss (D).",
        "examinerTrapPattern": "Assuming humans have accurate internal caloric meters that automatically stop eating when full, independent of visual plate cues."
      },
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "EASY",
        "stem": "According to developmental psychology and the Institute of Medicine (IOM), why is marketing junk food directly to children under the age of 8 considered inherently predatory?",
        "options": [
          "Because children under 8 are legally forbidden from watching television",
          "Because children under 8 lack the developmental cognitive ability to understand the persuasive, commercial intent of advertising, viewing characters as trusted friends",
          "Because children under 8 have no sense of taste",
          "Because children under 8 do not consume food"
        ],
        "correctAnswer": "Because children under 8 lack the developmental cognitive ability to understand the persuasive, commercial intent of advertising, viewing characters as trusted friends",
        "explanation": "Developmental research proves that young children cannot distinguish between educational/entertainment content and paid commercial advertisements. They accept corporate marketing claims as objective truth and view branded cartoon mascots as trusted authority figures.",
        "trapExplanation": "Children watch television (A), possess sharp taste buds (C), and obviously eat food (D).",
        "examinerTrapPattern": "Viewing marketing to children as an exercise of free-market choice rather than psychological exploitation of developmental cognitive limits."
      },
      {
        "type": "APPLIED_SCENARIO",
        "difficulty": "HARD",
        "stem": "A school district wants to reduce adolescent obesity. A beverage company offers the district USD 500,000 to place branded soda vending machines in hallways, claiming: 'Students have free will; we provide diet options, so it is their personal choice.' Based on Kelly Brownell's research on food psychology and school policy, how should the school board respond?",
        "options": [
          "Accept the money, because vending machines in schools have never been shown to influence student purchasing habits",
          "Reject the contract, because the physical presence of vending machines normalizes consumption, exploits cognitive impulsivity, and undermines educational health messages through commercial environmental conditioning",
          "Accept the contract, but double the price of textbooks",
          "Require every student to purchase at least two sodas per day"
        ],
        "correctAnswer": "Reject the contract, because the physical presence of vending machines normalizes consumption, exploits cognitive impulsivity, and undermines educational health messages through commercial environmental conditioning",
        "explanation": "Brownell's work at the Rudd Center demonstrates that schools are environments where children are captive audiences. Commercial pouring rights contracts normalize ultra-processed beverages, create perpetual temptation, exploit adolescent impulsivity, and contradict the school's health curriculum.",
        "trapExplanation": "Vending machines strongly drive consumption (eliminating A). Doubling textbook prices or forcing soda purchases are absurd (C, D).",
        "examinerTrapPattern": "Accepting the corporate 'free will and personal choice' argument in an institutional environment designed for captive pediatric audiences."
      }
    ],
    "examMappings": []
  },
  {
    "id": "CON-FOOD-04",
    "topicOrder": 1,
    "topicSlug": "food-systems-appetite-neurobiology-and-public-policy",
    "topicTitle": "Evolutionary Appetite, Neurobiology of Satiety, Food Industry Economics & Global Nutrition Policy",
    "topicDescription": "First-principles understanding of food across human evolution, metabolic physiology, neurobiology of appetite, industrial agricultural economics, and systemic public health policy.",
    "slug": "industrial-monocultures-farm-subsidies-and-the-economics-of-cheap-calories",
    "title": "Industrial Monocultures, Agricultural Subsidies & The Economics of Cheap Calories",
    "shortDefinition": "The political economy and industrial agriculture mechanisms that dictate the global food supply. Modern agricultural policy—most notably the US Farm Bill—channels tens of billions of dollars annually in taxpayer subsidies toward commodity monocultures: primarily field corn and soybeans. These subsidies artificially suppress the production costs of industrial derivatives, particularly High-Fructose Corn Syrup (HFCS) and refined soybean oil, while offering minimal support to 'specialty crops' (fruits, vegetables, and whole legumes). Consequently, the market price of empty, hyper-palatable calories has plummeted over the past 40 years, while the inflation-adjusted price of fresh produce has skyrocketed. This creates a severe socioeconomic gradient: low-income populations living in urban 'food deserts' face a rational economic calculation where 1,000 calories of junk food cost USD 1.50, whereas 1,000 calories of fresh vegetables cost USD 15.00. Concurrently, industrial grain surpluses feed Concentrated Animal Feeding Operations (CAFOs), driving environmental externalities including topsoil erosion, dead zones from nitrogen fertilizer runoff, and prophylactic antibiotic resistance.",
    "difficulty": "INTERMEDIATE",
    "claims": [
      {
        "id": "CLM-FOOD-04-01",
        "statement": "Federal agricultural policy and commodity subsidies disproportionately support corn, soy, and wheat monocultures, artificially lowering the cost of high-fructose corn syrup and hydrogenated vegetable oils while neglecting specialty crops like fruits and vegetables.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Pollan, The Omnivore's Dilemma: A Natural History of Four Meals, Penguin Press (2006)",
        "excerpt": "The Farm Bill has subsidized the overproduction of commodity corn and soy, driving down the price of high-fructose corn syrup and processed food ingredients to levels below the actual cost of production."
      },
      {
        "id": "CLM-FOOD-04-02",
        "statement": "Economic price elasticity studies confirm an inverse relationship between caloric energy density and cost: refined grains, added sugars, and fats cost significantly less per megajoule than nutrient-dense fresh produce, creating a structural economic driver of obesity among lower socioeconomic strata.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Drewnowski & Darmon, The economics of obesity: dietary energy density and energy cost, American Journal of Clinical Nutrition (2005)",
        "excerpt": "The high energy density and palatability of sweets and fats are associated with lower cost per calorie, whereas low-energy-density foods like fruits and vegetables are associated with higher cost per calorie, rendering obesity an economic disease of poverty."
      },
      {
        "id": "CLM-FOOD-04-03",
        "statement": "Food Deserts—geographic areas characterized by the absence of full-service supermarkets and an overabundance of fast-food chains and convenience stores—restrict geographic access to fresh nutritious foods, exacerbating metabolic health disparities in marginalized communities.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Larson, Story, & Nelson, Neighborhood environments: disparities in access to healthy foods in the U.S., American Journal of Preventive Medicine (2009)",
        "excerpt": "Low-income and minority neighborhoods have fewer chain supermarkets and produce markets, but more fast-food restaurants and liquor/convenience stores compared to higher-income neighborhoods."
      },
      {
        "id": "CLM-FOOD-04-04",
        "statement": "Industrial livestock agriculture in Concentrated Animal Feeding Operations (CAFOs) consumes the majority of subsidized grain monocultures and utilizes over 70% of medically important antibiotics prophylactically, generating massive environmental externalities and driving antimicrobial resistance.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Brownell, PSYC 123 Lecture 14: Industrial Agriculture and Environmental Externalities (Yale University)",
        "excerpt": "Modern factory farming is subsidized by cheap corn and soy, creating enormous hidden costs: antibiotic-resistant bacteria, manure lagoon contamination, and massive dead zones in the Gulf of Mexico."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Ten-Dollar Salad and The Dollar Double Cheeseburger",
        "body": "Walk into any fast-food restaurant with a five-dollar bill in your pocket. You can buy a double cheeseburger, a large order of french fries, and a sweet soda—over 1,500 calories of food, enough to fuel an adult for an entire day.\n\nNow walk across the street to a grocery store with that same five-dollar bill. You might be able to buy two organic bell peppers and a small carton of blueberries. That's about 150 calories.\n\nWhy does a burger containing beef from a cow raised in Texas, cheese from Wisconsin, and wheat from Kansas cost less than a head of lettuce that was grown in the ground 50 miles away? A cow has to eat 8 pounds of grain and drink 1,000 gallons of water just to produce a single pound of beef!\n\nThe answer is not free-market efficiency. The answer is GOVERNMENT SUBSIDIES.\n\nThrough agricultural policy (the Farm Bill), governments hand billions in taxpayer money directly to massive industrial grain conglomerates that grow field corn and soybeans. The government pays them to flood the market with cheap corn and soy, which is turned into High-Fructose Corn Syrup (HFCS) for soda, soy oil for deep-frying, and cheap animal feed for factory feedlots. The junk food is artificially cheap because your taxes already paid for half of it before you arrived at the store.",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "The Economics of Obesity & The Ecological Footprint of CAFOs",
        "body": "The intersection of agricultural subsidies, socioeconomic status, and environmental degradation reveals the systemic machinery of the modern food crisis:\n\n1. The Economic Trap of Poverty and Obesity (Adam Drewnowski):\n   - If a low-income parent has USD 10 to feed their three children dinner tonight, they cannot buy fresh salmon, asparagus, and organic spinach—they would run out of money and their children would go to bed hungry.\n   - Ultra-processed foods offer the highest energy density per dollar: refined white bread, ramen noodles, processed hot dogs, and soda provide maximum calories per cent. In modern society, obesity is not a disease of wealth and excess; it is an economic disease of poverty.\n\n2. The Anatomy of a 'Food Desert':\n   - In impoverished urban and rural zip codes, full-service grocery stores refuse to open due to low profit margins. The only retail food outlets within walking distance are convenience stores, gas station bodegas, and fast-food drive-throughs. The residents do not have a biological lack of discipline; they lack physical and financial access to a single fresh tomato or head of cabbage.\n\n3. The Environmental Externalities of CAFOs:\n   - Subsidized corn and soy make it profitable to pack 50,000 chickens or 10,000 cattle into Concentrated Animal Feeding Operations (CAFOs).\n   - Prophylactic Antibiotic Abuse: Because animals are crowded in unsanitary conditions, livestock producers feed them continuous low-dose antibiotics not to treat sickness, but to accelerate weight gain and prevent infections. Over 70% of all medically important antibiotics worldwide are fed to livestock, breeding drug-resistant 'superbugs'.\n   - Eutrophication & Dead Zones: Massive synthetic nitrogen fertilizer runoff from midwestern cornfields washes down the Mississippi River, causing algae blooms that suffocate marine life, creating an 8,000-square-mile 'Dead Zone' in the Gulf of Mexico.",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "The Farm Subsidy Distortion Pipeline & Food Desert Economics",
        "body": "How agricultural taxpayer subsidies distort retail food pricing and drive metabolic and ecological collapse:\n\n```\n+-------------------------------------------------------------------------+\n|               THE AGRICULTURAL SUBSIDY DISTORTION ENGINE                |\n+-------------------------------------------------------------------------+\n\n   Taxpayer Dollars (Farm Bill: Billions USD/Year)\n             |\n             v\n   [COMMODITY MONOCULTURES] (90%+ to Corn, Soy, Wheat, Cotton)\n             |\n       +-----+---------------------------------+\n       |                                       |\n       v                                       v\n   High-Fructose Corn Syrup (HFCS)     Concentrated Animal Feeding Ops (CAFOs)\n   & Hydrogenated Soy Oils (Cheap!)     * Subsidized Cheap Corn Feed\n       |                               * 70%+ of Global Antibiotics Used!\n       v                                       |\n   Ultra-Processed Junk Foods                  v\n   * 1,000 kcal = USD 1.50             Cheap Industrial Meat & Dairy\n\n   -------------------------------------------------------------------------\n   [SPECIALTY CROPS] (Broccoli, Apples, Spinach, Legumes) -> ZERO Subsidies!\n   * 1,000 kcal = USD 15.00 (Inflation-adjusted price has soared 40%+)\n===========================================================================\n                 THE FOOD DESERT SOCIOECONOMIC TRAP                        \n===========================================================================\n Low-Income Household -> No Grocery Supermarkets in Zip Code (Food Desert)\n                      -> Fast Food & Bodega Junk is the ONLY affordable calorie\n                      -> Severe Metabolic Disease Disproportionately Concentrated!\n```",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Universal Mental Model: True Cost Accounting & Subsidizing Health",
        "body": "Analyzing agricultural economics provides vital principles for economic policy, supply chain design, and sustainability:\n\n1. True Cost Accounting (Accounting for Externalities):\n   - When a fast-food chain sells a burger for USD 1.99, that is a false price. The customer pays USD 1.99 at the cash register, but society pays an additional USD 8.00 in hidden costs: taxpayer subsidies for corn feed, healthcare costs for diabetes and heart surgery, water purification to remove fertilizer runoff, and antibiotic resistance management. If foods were priced at their TRUE ecological and health cost, junk food would be expensive and fresh organic produce would be cheap.\n\n2. Inverting Agricultural Subsidies:\n   - What if governments redirected farm subsidies to reward farmers per acre of diverse, regeneratively grown vegetables, fruits, and legumes? Subsidizing soil health and public nutrition would cut national healthcare expenditures by hundreds of billions while restoring regional ecosystems.\n\n3. Upstream Prevention vs. Downstream Dialysis:\n   - Healthcare systems spend billions on dialysis centers, insulin pens, and bariatric surgeries. Reinvesting a fraction of those funds into upstream infrastructure—eradicating food deserts, financing community grocery stores, and prescribing healthy produce—saves more lives per dollar than any acute clinical technology.",
        "order": 4
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Junk food is cheap because your taxes pay for it! Government subsidies flood the market with cheap corn (HFCS) and soy (trans fats) while fruits and vegetables get zero subsidies. In 'food deserts', poverty forces families to buy 1,000 calories of junk for USD 1.50 over USD 15 produce!"
      },
      {
        "type": "SUMMARY_2M",
        "content": "The modern food crisis is anchored in the political economy of agriculture. The Farm Bill directs tens of billions in subsidies toward commodity monocultures (corn and soybeans), artificially suppressing the cost of High-Fructose Corn Syrup (HFCS), refined oils, and grain-fed livestock feed. In contrast, 'specialty crops' (fruits, vegetables, legumes) receive negligible subsidies. Adam Drewnowski's economic studies prove an inverse relationship between energy density and cost: empty calories are exceptionally cheap per megajoule, while nutrient-dense whole foods are expensive. In low-income 'food deserts' lacking full-service supermarkets, families face a rational economic calculation that mandates purchasing cheap processed food. Industrial CAFOs consume subsidized grain while using > 70% of antibiotics, driving environmental degradation and antimicrobial resistance."
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Core Architecture: Agricultural Monocultures & Food Economics:\n1. The Farm Bill Subsidy Distortion: Commodity crop subsidies (corn, soy, wheat, cotton) lower input costs for food manufacturers while whole fruits and vegetables remain exposed to unsubsidized market volatility.\n2. Energy Cost Elasticity Curve: Foods high in refined sugars and vegetable fats have the lowest cost per calorie; whole vegetables and lean proteins have the highest cost per calorie.\n3. Food Desert Geography: Structural absence of fresh-market infrastructure in low-income neighborhoods combined with dense clusters of fast-food outlets and convenience stores.\n4. CAFO Externalities: High-density livestock feedlots rely on subsidized monoculture feeds, causing massive agricultural manure lagoons, nitrogen runoff (hypoxic aquatic dead zones), and widespread prophylactic antibiotic resistance.\n5. Policy Reform Paradigm: True Cost Accounting—realigning agricultural subsidies toward nutrient-dense, regenerative crops and penalizing environmental and metabolic externalities."
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "How do government agricultural subsidies (such as the US Farm Bill) directly influence the retail price disparity between fresh produce and ultra-processed junk food?",
        "options": [
          "The government sets legal maximum prices for fresh broccoli and apples",
          "Subsidies heavily target commodity monocultures like corn and soybeans, artificially lowering the cost of high-fructose corn syrup, refined oils, and feedlot animal products, while specialty crops like fruits and vegetables receive minimal subsidies",
          "The government pays farmers not to grow corn or soybeans under any circumstances",
          "Subsidies are distributed equally to all organic fruit farmers in cash"
        ],
        "correctAnswer": "Subsidies heavily target commodity monocultures like corn and soybeans, artificially lowering the cost of high-fructose corn syrup, refined oils, and feedlot animal products, while specialty crops like fruits and vegetables receive minimal subsidies",
        "explanation": "Commodity programs channel billions into corn and soy. This artificial cost reduction makes industrial food ingredients (HFCS, soybean oil, grain-fed beef) extremely cheap to produce. Meanwhile, fruits, vegetables, and nuts are classified as 'specialty crops' and receive negligible direct support, making them far more expensive per calorie.",
        "trapExplanation": "Government does not set maximum retail prices for broccoli (A). It subsidizes massive corn production, rather than banning it (C). Subsidies do not go equally to organic fruit farmers (D).",
        "examinerTrapPattern": "Assuming free-market supply and demand sets food prices, overlooking massive taxpayer subsidies that artificially discount processed junk food inputs."
      },
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "EASY",
        "stem": "What is a 'Food Desert' in public health and urban geography?",
        "options": [
          "A geographic area in the Sahara where no plants can grow",
          "A geographic neighborhood, typically low-income, that lacks access to full-service grocery stores selling fresh, affordable produce, but has high concentrations of fast food and convenience stores",
          "A bakery that only sells cakes and cookies",
          "A desert island where tourists go for luxury dining"
        ],
        "correctAnswer": "A geographic neighborhood, typically low-income, that lacks access to full-service grocery stores selling fresh, affordable produce, but has high concentrations of fast food and convenience stores",
        "explanation": "Food deserts are defined as urban or rural areas where residents face severe transportation and economic barriers to buying affordable, nutritious fresh whole foods, forcing reliance on fast food and convenience store processed snacks.",
        "trapExplanation": "It is a sociological and public health term, not a physical desert like the Sahara (A), a bakery (C), or a luxury resort (D).",
        "examinerTrapPattern": "Confusing the public health term 'Food Desert' with literal arid geographic biomes."
      },
      {
        "type": "APPLIED_SCENARIO",
        "difficulty": "HARD",
        "stem": "An economist analyzing the price of a USD 2.00 fast-food bacon cheeseburger calculates that the 'true cost' to society is actually USD 9.00 when healthcare costs for heart disease, diabetes, agricultural fertilizer dead zones, and antibiotic resistance are included. In public policy, what economic term describes these hidden costs that are not reflected in the cash register price?",
        "options": [
          "Opportunity cost",
          "Negative externalities",
          "Comparative advantage",
          "Sunk costs"
        ],
        "correctAnswer": "Negative externalities",
        "explanation": "Negative externalities are third-party costs imposed on society by an economic transaction that are not reflected in the market price of the good. Fast-food prices exclude the massive environmental, agricultural, and healthcare burdens generated across the product's life cycle.",
        "trapExplanation": "Opportunity cost is the foregone benefit of the next best alternative (A). Comparative advantage relates to trade efficiency (C). Sunk cost is non-recoverable past expenditure (D).",
        "examinerTrapPattern": "Failing to apply the economic concept of negative externalities to agricultural and public health impacts."
      }
    ],
    "examMappings": []
  },
  {
    "id": "CON-FOOD-05",
    "topicOrder": 1,
    "topicSlug": "food-systems-appetite-neurobiology-and-public-policy",
    "topicTitle": "Evolutionary Appetite, Neurobiology of Satiety, Food Industry Economics & Global Nutrition Policy",
    "topicDescription": "First-principles understanding of food across human evolution, metabolic physiology, neurobiology of appetite, industrial agricultural economics, and systemic public health policy.",
    "slug": "food-politics-corporate-disinformation-and-public-health-taxes",
    "title": "Food Politics, The Big Tobacco Playbook & Public Health Taxes",
    "shortDefinition": "The political battles, corporate public relations strategies, and systemic policy interventions surrounding the global food supply. When modern epidemiological research linked ultra-processed foods and sugar-sweetened beverages (SSBs) to metabolic disease, the food industry adopted the historic 'Big Tobacco Playbook' (developed by cigarette conglomerates in the 1950s): manufacturing scientific doubt by funding co-opted academic research, aggressive lobbying against regulation, and framing the crisis exclusively around 'Personal Responsibility' and exercise ('Energy Balance') to deflect attention from dietary composition. In response, public health leaders—pioneered by Professor Kelly Brownell—developed systemic regulatory countermeasures: targeted excise taxes on Sugar-Sweetened Beverages (Soda Taxes; proven in Mexico, Berkeley, and the UK to reduce purchase volumes while funding community health programs), mandatory Front-of-Package nutritional warning labels (such as Chile's iconic black stop-sign octagons), and strict restrictions on school marketing and retail placement.",
    "difficulty": "INTERMEDIATE",
    "claims": [
      {
        "id": "CLM-FOOD-05-01",
        "statement": "The ultra-processed food and beverage industry systematically deployed public relations and political strategies modeled directly on the tobacco industry, including funding biased industry-friendly scientific research, creating front groups, and lobbying aggressively against public health regulations.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Brownell & Warner, The Perils of Ignoring History: Big Tobacco Played Dirty and Millions Died. How Similar Is Big Food?, Milbank Quarterly (2009)",
        "excerpt": "The food industry has borrowed heavily from the tobacco playbook: denying health harms, casting doubt on independent science, funding co-opted researchers, and blaming consumer willpower."
      },
      {
        "id": "CLM-FOOD-05-02",
        "statement": "Excise taxes on Sugar-Sweetened Beverages (SSBs), such as a 1-cent-per-ounce soda tax, demonstrate significant price elasticity: reducing retail purchasing volumes of sugary drinks by 10% to 20% while generating municipal revenues for chronic disease prevention.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Brownell et al., The Public Health and Economic Benefits of Taxing Sugar-Sweetened Beverages, NEJM (2009)",
        "excerpt": "A penny-per-ounce excise tax on sugar-sweetened beverages would reduce consumption by more than 10%, generate substantial revenue for health programs, and curb escalating healthcare costs."
      },
      {
        "id": "CLM-FOOD-05-03",
        "statement": "Mandatory Front-of-Package warning labels—notably Chile's Law of Food Labeling and Advertising utilizing black stop-sign octagons for excess sugar, sodium, saturated fat, and calories—significantly alter consumer purchasing habits and incentivize corporate food reformulation.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Taillie et al., An evaluation of Chile's Law of Food Labeling and Advertising on sugar-sweetened beverage purchases from 2015 to 2017: A before-and-after study, PLOS Medicine (2020)",
        "excerpt": "Following the implementation of Chile's comprehensive front-of-package black octagon warning labels, household beverage purchases with warning labels declined by 23.7%, demonstrating substantial public health efficacy."
      },
      {
        "id": "CLM-FOOD-05-04",
        "statement": "Industry-funded scientific nutrition studies are four to eight times more likely to reach conclusions favorable to the commercial sponsor compared to independently funded studies, systematically distorting the medical literature on sugar and metabolic disease.",
        "claimType": "CORE_PRINCIPLE",
        "epistemicLevel": "ESTABLISHED_FACT",
        "confidence": "HIGH",
        "locator": "Lesser, Ebbeling, Goozner, Wypij, & Ludwig, Relationship between Funding Source and Conclusion among Nutrition-Related Scientific Articles, PLOS Medicine (2007)",
        "excerpt": "Articles sponsored entirely by food and beverage companies were four to eight times more likely to conclude that the sponsor's product was not harmful compared to non-industry funded articles."
      }
    ],
    "contentBlocks": [
      {
        "type": "INTUITION",
        "title": "The Tobacco Playbook Replayed with Sugar",
        "body": "In the 1950s, medical doctors began publishing clear, terrifying evidence: smoking cigarettes causes lung cancer.\n\nWhat did the executives at the giant tobacco companies do? Did they say, 'Oh dear, our product is killing people, let us shut down our factories'?\n\nNo. They hired public relations geniuses and created a strategy so effective it is now known in history as 'The Playbook':\n1. Playbook Rule 1: Manufacture Doubt. ('The science isn't settled yet! We need more studies! More research is needed!')\n2. Playbook Rule 2: Fund Your Own Scientists. Pay universities and friendly researchers millions of dollars to publish papers claiming that stress, genetics, or pollution cause cancer—anything except cigarettes.\n3. Playbook Rule 3: Blame Personal Responsibility. ('Nobody forces you to smoke! It's a free country! It's about personal choice and freedom!')\n\nIn the 1980s and 1990s, the world's largest tobacco companies (R.J. Reynolds and Philip Morris) actually BOUGHT the world's largest food companies (Kraft, General Foods, and Nabisco). They took the exact same scientists, the exact same marketing executives, and the exact same political playbook, and applied it to sugary sodas, snack foods, and cereals. When health advocates warn about obesity and type 2 diabetes, the food industry responds with the exact same lines: 'There are no bad foods, only bad diets! The science isn't settled! It's personal responsibility!'",
        "order": 1
      },
      {
        "type": "CORE_IDEA",
        "title": "The Science of Soda Taxes & The Chilean Black Octagon Revolution",
        "body": "To counter the corporate food environment, public health policy has evolved beyond polite educational brochures toward structural regulatory interventions:\n\n1. Kelly Brownell's Pioneering 'Soda Tax' (Sugar-Sweetened Beverage Tax):\n   - Why focus specifically on soda? Liquid sugar is metabolically unique: it does not trigger gastrointestinal satiety signals, resulting in pure surplus calories. A single 20-ounce bottle of soda contains 16 teaspoons of sugar.\n   - Price Elasticity: Economists established that sugary drinks have an elasticity of approximately -0.8 to -1.2. A 10% increase in price leads to an 8% to 12% drop in consumption.\n   - Real-World Proof: In 2014, Mexico passed a 1-peso-per-liter soda tax; purchases dropped by 10% in the second year, while water purchases rose. Similar successes followed in Berkeley, Philadelphia, and the United Kingdom (where the UK Soft Drinks Industry Levy prompted manufacturers to reformulate products, slashing sugar content by 30% before the tax even took effect).\n\n2. The Chilean Warning Label Revolution (2016):\n   - Traditional 'Nutrition Facts' panels on the back of boxes are tiny, confusing, and require a PhD in mathematics to interpret.\n   - Chile transformed global food policy by mandating massive, high-contrast BLACK STOP-SIGN OCTAGONS on the FRONT of any package exceeding thresholds for added sugar, sodium, saturated fat, or calories: 'HIGH IN SUGAR', 'HIGH IN CALORIES'.\n   - Packages with black octagons are legally banned from television advertising, prohibited from using cartoon characters, and forbidden from being sold inside or near schools.\n   - Impact: Soda purchases dropped by 24%, and multinational food companies scrambled to reformulate thousands of products to avoid having the black warning label on their boxes.",
        "order": 2
      },
      {
        "type": "MECHANISM",
        "title": "The Big Food Playbook vs. Modern Public Health Regulatory Levers",
        "body": "Corporate defensive strategies versus evidence-based public health interventions:\n\n```\n+-------------------------------------------------------------------------+\n|               THE BIG FOOD DEFENSIVE PLAYBOOK (TOBACCO ROOTS)           |\n+-------------------------------------------------------------------------+\n\n   1. MANUFACTURE DOUBT    : Fund friendly academic research to dispute harm\n   2. ENERGY BALANCE MYTH  : \"Exercise more, don't worry about sugar!\"\n   3. BLAME CONSUMER       : \"It's about personal choice and freedom!\"\n   4. LOBBYING & PREEMPTION: Block local soda taxes via state-level preemption\n             |\n             v\n   [METABOLIC HEALTH CRISIS CONTINUES EXPANDING UNCHECKED]\n\n===========================================================================\n                 EVIDENCE-BASED PUBLIC HEALTH REGULATORY LEVERS            \n===========================================================================\n\n   [ EXCISE SODA TAXES ]  ---> Raises Price 10-20% -> Slashes Consumption\n                               Generates revenue for community health clinics!\n\n   [ FRONT LABELS ]       ---> Chilean Black Octagons ('HIGH IN SUGAR')\n                               Bypasses industry obfuscation; instant warning!\n\n   [ MARKETING BANS ]     ---> Outlaws cartoon mascots and child-targeted ads\n                               Removes commercial exploitation from schools!\n```",
        "order": 3
      },
      {
        "type": "EXAM_APPLICATION",
        "title": "Universal Mental Model: Institutional Capture & The Tools of Systemic Change",
        "body": "Food politics offers profound mental models for navigating corporate capture, public health, and societal systems:\n\n1. Institutional Funding Bias (Follow the Money):\n   - When you read a news headline claiming 'New Study Finds Sugar Does Not Cause Diabetes' or 'Moderate Soda Consumption Is Harmless', flip immediately to the Conflict of Interest section. If the study was funded by Coca-Cola or the American Beverage Association, research proves it is up to 8 times more likely to show positive results. Always audit scientific funding sources.\n\n2. Regulatory Preemption Tactics:\n   - When cities (like Berkeley or Philadelphia) succeed in passing local public health taxes, food industry lobbyists run to state legislatures to pass 'Preemption Bills'—statewide laws that forbid any local city from ever enacting soda taxes or bag bans. Recognizing preemption tactics is essential for anyone engaged in civic advocacy.\n\n3. The Shift from Personal Guilt to Civic Reform:\n   - Just as sanitation, clean municipal water, clean air laws, and seatbelts solved historical infectious and automotive crises, the metabolic crisis will only be solved when we treat nutrition as a collective environmental infrastructure challenge rather than an isolated private moral struggle.",
        "order": 4
      }
    ],
    "revisionUnits": [
      {
        "type": "FLASH_30S",
        "content": "Big Food uses the Big Tobacco Playbook: blame personal willpower, claim 'exercise more', and fund co-opted science! Real public health solutions are structural: Soda taxes cut consumption by 10-20%, and Chilean black warning labels force corporate reformulation!"
      },
      {
        "type": "SUMMARY_2M",
        "content": "Food Politics, detailed by Professor Kelly Brownell in Yale PSYC 123, exposes how the ultra-processed food and beverage industry borrowed defensive strategies from Big Tobacco: manufacturing scientific doubt, funding biased academic research (which is 4 to 8 times more likely to favor sponsors), and aggressively lobbying against regulation under the banner of 'personal responsibility'. To combat this systemic crisis, public health experts developed evidence-based regulatory interventions. Targeted excise taxes on Sugar-Sweetened Beverages (Soda Taxes; e.g. Mexico, Berkeley, UK) demonstrate strong price elasticity, slashing consumption while funding health initiatives. Concurrently, Chile's mandatory front-of-package black stop-sign octagons ('HIGH IN SUGAR') and bans on cartoon marketing to children have become the global gold standard for transparent consumer labeling and product reformulation."
      },
      {
        "type": "ARCHITECTURE_5M",
        "content": "Core Architecture: Food Politics & Public Health Interventions:\n1. The Tobacco Analogy (Brownell & Warner): Historical synthesis showing identical corporate strategies: denial of physiological harm, diversion toward physical inactivity ('Energy Balance'), and political lobbying capture.\n2. Industry Funding Distortion: Systematic bias in sponsored nutrition literature (Lesser et al.), necessitating strict conflict-of-interest disclosure and non-industry funded Cochrane reviews.\n3. Sugar-Sweetened Beverage (SSB) Taxation: Price elasticity of demand (approx. -1.0). Excise taxes shift consumer purchase patterns toward unsweetened alternatives and incentivize voluntary manufacturer sugar reduction.\n4. Front-of-Package (FOP) Warning Label Systems: Comparison between voluntary confusing Guideline Daily Amount (GDA) labeling and mandatory high-contrast interpretive warning octagons (Chilean Model).\n5. Structural Public Health Doctrine: Shifting societal focus from individual moral lecturing to upstream environmental interventions: fiscal disincentives, marketing bans, and institutional procurement standards."
      }
    ],
    "questions": [
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "MEDIUM",
        "stem": "When researchers analyzed published scientific studies on the health effects of sugar-sweetened beverages (Lesser et al., PLOS Medicine 2007), what was the measured impact of industry funding on study conclusions?",
        "options": [
          "Industry-funded studies were four to eight times more likely to conclude that the sponsor's product was harmless compared to independently funded studies",
          "Industry funding had zero statistical effect on scientific conclusions",
          "Industry-funded studies were twice as likely to recommend banning the sponsor's product",
          "Independent studies were completely banned from medical journals"
        ],
        "correctAnswer": "Industry-funded studies were four to eight times more likely to conclude that the sponsor's product was harmless compared to independently funded studies",
        "explanation": "The study conclusively proved profound financial conflict-of-interest bias: research funded entirely by food and beverage companies was 4 to 8 times more likely to conclude that sugary drinks did not cause harm compared to studies funded by independent government or academic sources.",
        "trapExplanation": "Industry funding significantly biased results (eliminating B). Industry studies did not recommend banning products (eliminating C). Independent studies were not banned (eliminating D).",
        "examinerTrapPattern": "Assuming academic peer review automatically eliminates financial conflict-of-interest bias in industry-funded nutrition science."
      },
      {
        "type": "CONCEPT_CHECK",
        "difficulty": "EASY",
        "stem": "What innovative front-of-package nutritional labeling system, introduced by Chile in 2016, has become a global gold standard for warning consumers about ultra-processed foods?",
        "options": [
          "Tiny black-and-white text hidden inside the bottom folding flap of the box",
          "Prominent black stop-sign octagons on the front of packages warning 'HIGH IN SUGAR', 'HIGH IN SODIUM', or 'HIGH IN SATURATED FAT'",
          "Pictures of smiling farm animals eating grass",
          "Golden stars awarded to any food with added synthetic vitamins"
        ],
        "correctAnswer": "Prominent black stop-sign octagons on the front of packages warning 'HIGH IN SUGAR', 'HIGH IN SODIUM', or 'HIGH IN SATURATED FAT'",
        "explanation": "Chile's 2016 Law of Food Labeling mandated clear, stark black stop-sign octagons on the front of any product exceeding limits for added sugar, sodium, saturated fat, or calories, making unhealthy foods instantly recognizable even to young children.",
        "trapExplanation": "Hiding tiny text is the old industry strategy (A). Smiling animals (C) and golden stars (D) are promotional marketing tricks.",
        "examinerTrapPattern": "Confusing confusing, industry-friendly back-of-pack labels with mandatory, stark front-of-pack warning octagons."
      },
      {
        "type": "APPLIED_SCENARIO",
        "difficulty": "HARD",
        "stem": "A city council proposes a 1-cent-per-ounce excise tax on sugar-sweetened beverages to fund early childhood health programs. The beverage lobby launches an expensive campaign arguing that the tax is 'an attack on poor people's freedom' and insists that the city should focus instead on funding school running tracks. Based on public health economics (Brownell et al., NEJM), how should this policy debate be evaluated?",
        "options": [
          "The beverage lobby's argument follows the classic Big Tobacco playbook: deflecting from dietary harm by blaming lack of exercise, while empirical evidence proves soda taxes reduce consumption by 10-20% and generate revenue for the communities most harmed by diabetes",
          "The beverage lobby is correct, because liquid sugar has no relationship to type 2 diabetes",
          "The city council should cancel the tax and mandate that children drink 3 cans of soda daily",
          "Soda taxes are physically impossible to collect under modern banking laws"
        ],
        "correctAnswer": "The beverage lobby's argument follows the classic Big Tobacco playbook: deflecting from dietary harm by blaming lack of exercise, while empirical evidence proves soda taxes reduce consumption by 10-20% and generate revenue for the communities most harmed by diabetes",
        "explanation": "Brownell's research shows that the 'energy balance / exercise more' defense is a coordinated public relations distraction. Liquid sugar is the single largest dietary contributor to diabetes and obesity. Empirical data from Mexico, Berkeley, and the UK prove that soda taxes reduce purchasing volumes by 10% to 20% while providing vital municipal revenue to improve health infrastructure in low-income neighborhoods.",
        "trapExplanation": "Liquid sugar is directly causally linked to diabetes (B). Forcing soda drinking is absurd (C). Soda taxes are routine excise taxes easily collected at wholesale distribution (D).",
        "examinerTrapPattern": "Falling for corporate framing that pits public health taxation against individual freedom while deflecting from dietary composition to physical exercise."
      }
    ],
    "examMappings": []
  }
];

export async function seedModuleU5FoodSystems(): Promise<void> {
  console.log('[Module U5] Seeding Universal Knowledge: The Biology, Psychology & Global Politics of Food...');

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
  let subject = await db.subject.findFirst({ where: { slug: 'biology-psychology-and-politics-of-food' } });
  if (!subject) {
    subject = await db.subject.create({
      data: {
        slug: 'biology-psychology-and-politics-of-food',
        name: 'The Biology, Psychology & Global Politics of Food: From Evolutionary Appetite to Agricultural Policy',
        description: 'First-principles synthesis of human metabolic evolution, gut-brain appetite neurobiology, food marketing psychology, industrial monoculture economics, and systemic public health nutrition policy.',
        scopeStatement: 'Comprehensive universal curriculum derived from Yale University (Prof. Kelly D. Brownell, PSYC 123) covering evolutionary mismatch, leptin resistance, food addiction, agricultural subsidies, and soda tax public policy.',
        domainId: domain.id,
        order: 5,
      },
    });
  }

  // 3. Ensure Source Exists
  const sourceFood = await db.source.upsert({
    where: { id: 'SRC-YALE-FOOD-PSYCHOLOGY-POLITICS' },
    update: {},
    create: {
      id: 'SRC-YALE-FOOD-PSYCHOLOGY-POLITICS',
      title: 'The Psychology, Biology and Politics of Food (Yale University, Prof. Kelly D. Brownell)',
      sourceType: 'ACADEMIC_CANONICAL_SYNTHESIS',
      authorityTier: 'PEER_REVIEWED_ACADEMIC_REFERENCE',
      description: 'Authoritative interdisciplinary curriculum developed by Professor Kelly D. Brownell, Rudd Center for Food Policy and Obesity, Yale University.',
    },
  });

  // 4. Ensure Topic Exists
  let topic = await db.topic.findFirst({ where: { slug: 'food-systems-appetite-neurobiology-and-public-policy' } });
  if (!topic) {
    topic = await db.topic.create({
      data: {
        slug: 'food-systems-appetite-neurobiology-and-public-policy',
        title: 'Evolutionary Appetite, Neurobiology of Satiety, Food Industry Economics & Global Nutrition Policy',
        description: 'First-principles understanding of food across human evolution, metabolic physiology, neurobiology of appetite, industrial agricultural economics, and systemic public health policy.',
        subjectId: subject.id,
        order: 1,
      },
    });
  } else {
    topic = await db.topic.update({
      where: { id: topic.id },
      data: {
        title: 'Evolutionary Appetite, Neurobiology of Satiety, Food Industry Economics & Global Nutrition Policy',
        description: 'First-principles understanding of food across human evolution, metabolic physiology, neurobiology of appetite, industrial agricultural economics, and systemic public health policy.',
        order: 1,
      },
    });
  }

  for (let i = 0; i < MODULE_U5_CONCEPTS.length; i++) {
    const cDef = MODULE_U5_CONCEPTS[i];
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
          sourceId: sourceFood.id,
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

  console.log('[Module U5] Successfully seeded ' + MODULE_U5_CONCEPTS.length + ' Universal Knowledge Food Systems Canonical Concepts.');
}
