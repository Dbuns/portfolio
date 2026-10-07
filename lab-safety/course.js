window.COURSE = {
  "version": "0.2-review",
  "title": "Chemical Laboratory Safety Foundations",
  "passPercent": 80,
  "modules": [
    {
      "title": "Your role in a safe laboratory",
      "objective": "Decide when you are ready to begin and when to ask for help.",
      "sections": [
        {
          "title": "A shared starting point",
          "text": "People enter laboratories with different experience. A degree or job title does not establish training for a particular procedure. Before starting, understand the approved method, its hazards, required controls, supervision and emergency arrangements."
        },
        {
          "title": "RAMP before you start",
          "text": "Recognise what could cause harm. Assess how harm could occur in this task. Minimise the risk with suitable controls. Prepare for a failure or emergency. Repeat this check when the procedure, quantities, equipment or conditions change."
        },
        {
          "title": "Speak up and pause",
          "text": "If instructions are missing, equipment behaves unexpectedly or a control is unavailable, pause and contact the supervisor or technician. Do not improvise a substitute procedure. Report incidents and near misses so the group can prevent recurrence."
        },
        {
          "title": "Everyday behaviour",
          "text": "Keep food and drinks outside the laboratory. Never mouth-pipette or deliberately smell chemicals. Keep benches and exits clear. Remove contaminated gloves before touching phones, door handles or shared computers, and wash hands before leaving."
        },
        {
          "title": "Jewellery and personal items",
          "text": "Remove or secure jewellery and loose accessories where they may snag, trap contamination or interfere with gloves. Keep personal items outside chemical work areas. Follow the local clothing and jewellery rules."
        }
      ],
      "local": "Identify the supervisor, technician, reporting route, access rules and policy on working alone.",
      "practice": {
        "id": "q1",
        "module": 0,
        "prompt": "You are asked to start an unfamiliar procedure after completing this course. What should you do?",
        "options": [
          "Start because the certificate covers all tasks",
          "Confirm task instructions, training and supervision",
          "Copy someone nearby without asking"
        ],
        "answer": 1,
        "explanation": "General knowledge does not replace training for the actual procedure.",
        "critical": true
      },
      "reference": "1: Safety culture",
      "figure": "ramp.svg",
      "figureAlt": "RAMP cycle: recognise, assess, minimise and prepare"
    },
    {
      "title": "Labels and safety information",
      "objective": "Use a label and a safety data sheet to prepare for a task.",
      "sections": [
        {
          "title": "Read the complete label",
          "text": "Check the chemical identity, concentration, hazard statements and precautionary statements. Hazard pictograms flag types of danger; they do not describe every risk or provide a complete procedure. An unlabelled bottle is an unknown substance until an authorised person resolves its identity."
        },
        {
          "title": "Safety data sheets",
          "text": "An SDS is a safety data sheet for a substance or mixture. Look up the product you actually have. Useful sections include hazards (2), first aid (4), firefighting (5), accidental release (6), handling and storage (7), exposure controls and PPE (8), and stability and reactivity (10). Ask for help with unfamiliar terms."
        },
        {
          "title": "Turn information into a plan",
          "text": "Identify exposure routes, ventilation, compatible protection, storage restrictions and emergency needs. The SDS supports your assessment; it cannot account for every reaction, apparatus or operating condition. Combine it with the approved procedure and local guidance."
        }
      ],
      "local": "Add your SDS access method, container labelling standard and unknown-container reporting procedure.",
      "practice": {
        "id": "q2",
        "module": 1,
        "prompt": "You find an unlabelled bottle of clear liquid. What should you do?",
        "options": [
          "Assume it is the usual solvent",
          "Identify it by smelling it",
          "Do not use it; notify the responsible person"
        ],
        "answer": 2,
        "explanation": "Appearance and location cannot establish chemical identity.",
        "critical": true
      },
      "reference": "2: Information resources",
      "figure": "sds.svg",
      "figureAlt": "Safety data sheet sections that support planning"
    },
    {
      "title": "Health and physical hazards",
      "objective": "Recognise common ways chemicals and equipment can cause harm.",
      "sections": [
        {
          "title": "Exposure and effects",
          "text": "Chemicals can enter through inhalation, ingestion, skin absorption or injection through a puncture. Effects can be immediate or delayed. Risk depends on the substance, dose, exposure route and duration. Lack of smell or symptoms does not establish safety."
        },
        {
          "title": "Common chemical hazards",
          "text": "Corrosive substances can damage tissue. Flammable liquids may release vapours that ignite away from the container. Oxidisers can intensify combustion. Toxic and sensitising substances need controls appropriate to their specific hazards. Read the actual product information rather than assuming all chemicals in a category behave alike."
        },
        {
          "title": "Reactivity and stored energy",
          "text": "Mixing incompatible chemicals can generate heat, gas or hazardous products. Heated liquids, pressure systems, vacuum glassware and rotating equipment introduce physical hazards. Inspect apparatus and follow its operating instructions. Never heat a closed system unless the approved equipment and procedure are designed for it."
        },
        {
          "title": "Extra training",
          "text": "Compressed gases, cryogens, peroxide-forming chemicals, highly toxic substances and materials that react strongly with air or water require specific assessment and training. This introductory lesson does not provide operating procedures for them."
        },
        {
          "title": "HF needs specific training",
          "text": "Hydrofluoric acid (HF) can cause deep tissue injury and systemic toxicity by disrupting calcium and magnesium balance. Pain may be delayed; a minor-looking exposure must not be dismissed. HF work requires an approved specific procedure, trained supervision and an established emergency plan. Suspected exposure requires immediate emergency assistance and urgent medical evaluation. This course does not teach HF use or treatment."
        },
        {
          "title": "Reactive cleaning mixtures",
          "text": "Aqua regia is strongly corrosive, can release harmful gases and can react violently with organic material. It needs a specific approved procedure and waste route. Peroxide-containing oxidising cleaning mixtures, such as piranha solution, can react dangerously with organic solvents. Never combine them with solvent waste. These examples teach hazard recognition, not preparation recipes."
        },
        {
          "title": "Peroxide formation is a different hazard",
          "text": "Some solvents can form hazardous peroxides during storage. Follow the local dating, inspection and disposal procedure. If an aged container shows unusual crystals or you suspect instability, do not open or move it: keep people away and ask the responsible safety staff to assess it. This differs from mixing an oxidising cleaning solution with solvent waste."
        }
      ],
      "local": "List the hazards actually present and the activities needing additional training.",
      "practice": {
        "id": "q3",
        "module": 2,
        "prompt": "A volatile chemical has little noticeable smell. Is ventilation unnecessary?",
        "options": [
          "No; determine controls from the hazards and assessment",
          "Yes; smell is a reliable exposure monitor",
          "Yes, if the bottle is small"
        ],
        "answer": 0,
        "explanation": "Odour is not a reliable measure of exposure or safety.",
        "critical": false
      },
      "reference": "3–4: Health and physical hazards",
      "figure": "exposure.svg",
      "figureAlt": "Exposure routes: breathing, skin, mouth and puncture"
    },
    {
      "title": "Assess the task before starting",
      "objective": "Explain why changing an experiment requires a fresh risk check.",
      "sections": [
        {
          "title": "Hazard and risk",
          "text": "A hazard is a potential source of harm. Risk concerns how likely harm is and how serious it could be under the conditions of your work. Controls can reduce risk without removing the underlying hazard."
        },
        {
          "title": "Consider the complete task",
          "text": "Review quantities, concentrations, temperature, pressure, exposure opportunities, reaction products, equipment, people nearby and disposal. Include setup, transfers, cleaning and shutdown. Think about spills, power loss and control failures before they happen."
        },
        {
          "title": "Changes need review",
          "text": "A procedure that worked at a small scale is not automatically suitable at a larger scale. Heat removal, mixing and gas generation may change. Obtain the required review before changing amounts, substituting chemicals or altering conditions."
        },
        {
          "title": "Pre-start check",
          "text": "Can you explain the main hazards? Are the controls available and working? Do you have the right equipment and training? Do you know how to stop safely and summon help? Resolve any gap before beginning."
        }
      ],
      "local": "Insert the group risk-assessment template, approval route and change-review requirements.",
      "practice": {
        "id": "q4",
        "module": 3,
        "prompt": "You plan to use ten times the quantity in an approved procedure. What next?",
        "options": [
          "Use a larger beaker",
          "Review changed risks and obtain approval",
          "Wear extra gloves"
        ],
        "answer": 1,
        "explanation": "Scaling can change heat removal, gas generation and the controls required.",
        "critical": false
      },
      "reference": "5: Assessing risk",
      "figure": "risk.svg",
      "figureAlt": "Risk depends on task conditions and controls"
    },
    {
      "title": "Protection and fume hoods",
      "objective": "Choose controls for the hazard and recognise their limits.",
      "sections": [
        {
          "title": "Control the source",
          "text": "First consider removing the hazard or using a safer alternative where the approved method permits it. Suitable enclosure and ventilation reduce exposure. Procedures and training support these controls. PPE provides an additional barrier; it does not make an uncontrolled procedure safe."
        },
        {
          "title": "Dress and protect appropriately",
          "text": "Wear the required eye protection and suitable laboratory clothing and footwear. Secure long hair and loose items. Chemical splash risks generally call for splash goggles; select protection according to the assessment. A face shield supplements required eye protection rather than replacing it."
        },
        {
          "title": "Gloves are chemical-specific",
          "text": "No glove protects against every chemical. Check compatibility, thickness and expected contact time using approved selection guidance. Inspect gloves and replace them when damaged or contaminated. Avoid transferring contamination to clean surfaces."
        },
        {
          "title": "A fume hood must function",
          "text": "Check the operating indicator and use the specified sash position. Keep the face and body outside the opening, avoid obstructing airflow and arrange work according to local instructions. A hood is not a general storage cupboard or a guarantee against explosion. If an alarm or ventilation failure occurs, stop safely and notify the responsible person."
        }
      ],
      "local": "Confirm eye protection, lab-coat and glove requirements; add photographs and operating instructions for your hoods.",
      "practice": {
        "id": "q5",
        "module": 4,
        "prompt": "The fume hood alarm sounds during preparation. What should you do?",
        "options": [
          "Continue with extra PPE",
          "Silence the alarm and continue",
          "Stop safely and report the problem"
        ],
        "answer": 2,
        "explanation": "Required ventilation must function; additional PPE is not a substitute.",
        "critical": true
      },
      "reference": "6: Laboratory operations",
      "figure": "controls.svg",
      "figureAlt": "Controls from eliminating the hazard to personal protection",
      "extraFigure": "fume-hood.svg",
      "extraAlt": "Fume hood schematic showing airflow, operating indicator and sash"
    },
    {
      "title": "Safe laboratory work",
      "objective": "Recognise unsafe setup, transfer and housekeeping practices.",
      "sections": [
        {
          "title": "Prepare the workspace",
          "text": "Inspect glassware for damage and use equipment appropriate to the task. Secure apparatus and keep cables and tubing away from walkways and heat. Know the shutdown procedure. Do not use damaged electrical equipment; report it."
        },
        {
          "title": "Transfers and heating",
          "text": "Use suitable transfer tools, container support and secondary containment according to the procedure. Keep ignition sources away from flammables and their vapours. Never mouth-pipette. Hot glass can look like cold glass: use the prescribed handling tools and allow controlled cooling."
        },
        {
          "title": "Prevent contamination",
          "text": "Keep containers closed when not in use. Label working solutions according to local rules and avoid returning excess material to stock containers. Keep clean items separate from contaminated equipment. Do not carry chemicals in your pockets."
        },
        {
          "title": "Finish the task",
          "text": "Follow shutdown and cleaning instructions, segregate waste and leave the area ready for the next person. Only leave an operation unattended when the local procedure explicitly permits it and the required controls and contact arrangements are in place."
        },
        {
          "title": "Acid dilution and heat",
          "text": "Diluting a concentrated acid with water can release substantial heat. In an approved acid-dilution procedure, acid is added to water, rather than pouring water into concentrated acid, to reduce local overheating and splashing. The required addition rate, cooling, equipment and protection belong in the procedure. Do not apply this rule to arbitrary reactive mixtures."
        },
        {
          "title": "Chemicals through doors",
          "text": "Carry closed, labelled containers in suitable secondary containment or an approved carrier. Plan the route and keep a clean method of opening doors. Never touch shared handles with potentially contaminated gloves. The local procedure may prescribe one clean hand or assistance; do not compromise a secure grip or protection to follow a slogan."
        },
        {
          "title": "Flammable vapour near heat",
          "text": "Acetone is a flammable solvent. A spill can release vapour, and a hot plate or its electrical components can provide an ignition source. Keep flammable liquids and vapours away from ignition sources; do not assume a heater is suitable merely because it has no open flame."
        },
        {
          "title": "Shutdown is procedure-specific",
          "text": "Leave equipment in its prescribed safe state. Many tasks require shutdown, but approved continuing operations may have different instructions. Never switch off safety-critical ventilation or another ongoing experiment simply because you are leaving. Ask when the handover or shutdown arrangement is unclear."
        }
      ],
      "local": "Add equipment demonstrations, transfer routes, unattended-operation rules and broken-glass arrangements.",
      "practice": {
        "id": "q6",
        "module": 5,
        "prompt": "A glass flask has a crack but holds liquid. What should you do?",
        "options": [
          "Use it briefly",
          "Remove it from use and follow the damaged-glass procedure",
          "Cover the crack with tape"
        ],
        "answer": 1,
        "explanation": "Cracks can lead to failure during handling, heating or pressure changes.",
        "critical": false
      },
      "reference": "6: Laboratory operations",
      "figure": "transport.svg",
      "figureAlt": "Closed container, secondary containment and clean door contact",
      "extraFigure": "contained-transfer.svg",
      "extraAlt": "Closed labelled bottle in containment and a separate clean door contact"
    },
    {
      "title": "Storage and chemical waste",
      "objective": "Choose the correct route for storage and waste without guessing.",
      "sections": [
        {
          "title": "Store by compatibility",
          "text": "Use designated storage based on hazards and compatibility. Alphabetical order alone can place incompatible chemicals together. Keep containers identifiable, closed and in suitable containment. Follow specific requirements for flammables, corrosives and oxidisers."
        },
        {
          "title": "Plan waste before starting",
          "text": "Identify the waste stream before generating it. Use designated compatible containers and required labels. Do not add material when the contents or compatibility are uncertain. Ask the technician."
        },
        {
          "title": "Avoid hazardous mixtures",
          "text": "Mixing waste can cause reaction, pressure or fire. Keep incompatible wastes separate according to the approved local system. Do not pour chemicals into drains or put them in ordinary rubbish unless the authorised local procedure explicitly permits that material."
        },
        {
          "title": "Special waste",
          "text": "Sharps, broken glass, contaminated solids and chemical packaging may have different routes. An empty-looking container may still be contaminated. Follow instructions for closure, filling limits and collection."
        }
      ],
      "local": "Provide actual waste categories, label examples, storage locations and collection contacts.",
      "practice": {
        "id": "q7",
        "module": 6,
        "prompt": "You are unsure whether waste belongs in a nearby waste bottle. What should you do?",
        "options": [
          "Add it slowly",
          "Confirm the correct compatible waste stream",
          "Dilute it and use the sink"
        ],
        "answer": 1,
        "explanation": "Confirm compatibility before mixing any waste.",
        "critical": true
      },
      "reference": "7: Waste and storage",
      "figure": "waste.svg",
      "figureAlt": "Check waste identity and compatibility before choosing a stream"
    },
    {
      "title": "Prepare for emergencies",
      "objective": "Choose a first response and recognise your limits.",
      "sections": [
        {
          "title": "Know the arrangements",
          "text": "Before work, locate exits, alarms, eyewash, safety shower and the means of calling assistance. Keep access clear. Learn the local emergency number, meeting point and reporting procedure during induction; do not assume they match your previous institution."
        },
        {
          "title": "Chemical exposure",
          "text": "Alert others and obtain assistance promptly. For an eye or skin splash, begin the prescribed emergency flushing immediately and obtain medical advice; do not delay while searching for paperwork. Follow the local emergency procedure and chemical-specific guidance. Do not attempt chemical neutralisation on the body."
        },
        {
          "title": "Spills and fire",
          "text": "Warn people nearby and keep others away. Assess from a safe location. If the substance, risk or response is uncertain, withdraw and summon trained help. Only undertake cleanup or firefighting within your training and the authorised procedure. Protect an escape route and follow evacuation instructions."
        },
        {
          "title": "Report and learn",
          "text": "Report exposures, injuries, spills and near misses even when no injury is obvious. Provide chemical and task information to responders when safe. Resuming work requires appropriate clearance, not simply the disappearance of an alarm."
        },
        {
          "title": "University of Twente emergency contact",
          "text": "UT publishes its campus emergency number as 053 489 2222 (+31 53 489 2222). Know your building, room and the nature of the incident when calling. During induction, verify how to call from your phone and the local emergency instructions. Follow the building alarm and evacuation procedure; go to the designated assembly point and do not re-enter until authorised."
        }
      ],
      "local": "Verify emergency contacts, exposure instructions, evacuation route, meeting point and spill-response responsibilities.",
      "practice": {
        "id": "q8",
        "module": 7,
        "prompt": "An unknown chemical spills and you lack spill-response training. What should you do?",
        "options": [
          "Clean it quickly",
          "Warn others, withdraw from danger and summon trained help",
          "Mix in a neutraliser"
        ],
        "answer": 1,
        "explanation": "An unknown spill needs trained assessment, not improvised cleanup.",
        "critical": true
      },
      "reference": "8: Emergencies",
      "figure": "emergency.svg",
      "figureAlt": "Warn others, move away from danger and call for help"
    }
  ],
  "questions": [
    {
      "id": "q1",
      "sourceQuestion": 1,
      "module": 7,
      "prompt": "A hazardous spill produces fumes and you are not trained to respond. What should you do?",
      "options": [
        "Cover it with towels",
        "Warn others, leave the affected area and summon emergency assistance",
        "Keep working with gloves",
        "Wait beside the spill"
      ],
      "answer": 1,
      "explanation": "Withdraw from danger, warn others and follow local alarm and reporting procedures. Cleanup requires appropriate training.",
      "critical": true
    },
    {
      "id": "q2",
      "sourceQuestion": 2,
      "module": 0,
      "prompt": "Which behaviour conflicts with safe laboratory work?",
      "options": [
        "Using required protection",
        "Checking chemical hazards",
        "Knowing emergency arrangements",
        "Wearing loose accessories that can snag or become contaminated"
      ],
      "answer": 3,
      "explanation": "Loose or unsuitable accessories can create mechanical and contamination hazards. Follow local jewellery rules.",
      "critical": false
    },
    {
      "id": "q3",
      "sourceQuestion": 3,
      "module": 7,
      "prompt": "The building fire alarm sounds. What is the appropriate response?",
      "options": [
        "Leave by a safe route and go to the designated assembly point",
        "Wait to see flames",
        "Continue with more PPE",
        "Return for your belongings"
      ],
      "answer": 0,
      "explanation": "Follow evacuation instructions. Do not wait for visible fire or re-enter without authorisation.",
      "critical": true
    },
    {
      "id": "q4",
      "sourceQuestion": 4,
      "module": 0,
      "prompt": "You are unsure how to use laboratory equipment. What should you do?",
      "options": [
        "Try it cautiously",
        "Ask any colleague, then start",
        "Obtain training from an authorised competent person before use",
        "Skip the instructions"
      ],
      "answer": 2,
      "explanation": "Training must match the equipment and procedure. An informal demonstration by an unqualified person is insufficient.",
      "critical": true
    },
    {
      "id": "q5",
      "sourceQuestion": 5,
      "module": 2,
      "prompt": "Which situation can expose you to a health hazard?",
      "options": [
        "Following a reviewed procedure",
        "Breathing toxic fumes from an uncontrolled task",
        "Using intact approved equipment",
        "Working with functioning controls"
      ],
      "answer": 1,
      "explanation": "Inhalation is an exposure route. Required ventilation and other controls must be established before work.",
      "critical": false
    },
    {
      "id": "q6",
      "sourceQuestion": 6,
      "module": 7,
      "prompt": "A corrosive liquid splashes onto your skin. What is the priority?",
      "options": [
        "Wait for symptoms",
        "Apply a neutraliser",
        "Begin the prescribed emergency flushing and summon help immediately",
        "Finish the experiment"
      ],
      "answer": 2,
      "explanation": "For this specified splash, act immediately under the emergency procedure and obtain medical guidance. Do not neutralise chemicals on the body.",
      "critical": true
    },
    {
      "id": "q7",
      "sourceQuestion": 7,
      "module": 5,
      "prompt": "Before leaving the lab, what should you check?",
      "options": [
        "That every device is off, including ventilation",
        "That equipment is in the prescribed safe state and continuing work has an approved handover",
        "Only that lights are off",
        "Nothing if a colleague remains"
      ],
      "answer": 1,
      "explanation": "Shutdown and continuing operations must follow their specific instructions; do not disable safety controls or other experiments.",
      "critical": false
    },
    {
      "id": "q8",
      "sourceQuestion": 8,
      "module": 7,
      "prompt": "What campus emergency number does the University of Twente publish?",
      "options": [
        "053 489 2222",
        "053 489 2134",
        "911",
        "A number chosen by each student"
      ],
      "answer": 0,
      "explanation": "UT publishes 053 489 2222 as its campus emergency number. The 2134 number is for non-emergencies. Verify local calling arrangements during induction.",
      "critical": true
    },
    {
      "id": "q9",
      "sourceQuestion": 9,
      "module": 4,
      "prompt": "An approved procedure requires a fume hood for a volatile hazardous chemical. What must you establish before starting?",
      "options": [
        "The hood is functioning and you can follow its operating instructions",
        "Gloves alone are sufficient",
        "There is a window nearby",
        "The chemical has little smell"
      ],
      "answer": 0,
      "explanation": "A required engineering control must function. Odour and additional PPE cannot substitute for it.",
      "critical": true
    },
    {
      "id": "q10",
      "sourceQuestion": 10,
      "module": 7,
      "prompt": "You find a chemical spill but do not know the substance or whether you are trained to clean it. What should you do first?",
      "options": [
        "Use the nearest spill kit",
        "Warn others, avoid exposure and obtain trained assessment",
        "Mix in water",
        "Ask the cleaning crew and continue"
      ],
      "answer": 1,
      "explanation": "A spill kit is not blanket authorisation to clean up. Identify the hazard and the authorised response from safety.",
      "critical": true
    },
    {
      "id": "q11",
      "sourceQuestion": 11,
      "module": 5,
      "prompt": "Why does an approved concentrated-acid dilution procedure add acid to water?",
      "options": [
        "To increase acidity",
        "To reduce local overheating and splashing from released heat",
        "To avoid needing PPE",
        "To make every chemical mixture safe"
      ],
      "answer": 1,
      "explanation": "Dilution releases heat. Follow the approved procedure for addition, cooling and protection; this is not a rule for every reactive mixture.",
      "critical": false
    },
    {
      "id": "q12",
      "sourceQuestion": 12,
      "module": 2,
      "prompt": "Why must peroxide-containing oxidising cleaning waste be kept out of organic solvent waste?",
      "options": [
        "Organic solvent makes it harmless",
        "It only changes colour",
        "Mixing can cause a violent reaction, fire or explosion",
        "All liquids belong in the same waste bottle"
      ],
      "answer": 2,
      "explanation": "Strong oxidising mixtures can react dangerously with organic material. Keep incompatible wastes separate.",
      "critical": true
    },
    {
      "id": "q13",
      "sourceQuestion": 13,
      "module": 4,
      "prompt": "What is the main protective purpose of a functioning chemical fume hood?",
      "options": [
        "Store all chemicals",
        "Heat samples",
        "Control release of hazardous airborne contaminants into the room",
        "Replace eye protection"
      ],
      "answer": 2,
      "explanation": "A hood is an engineering control for airborne exposure, used with the other prescribed measures.",
      "critical": false
    },
    {
      "id": "q14",
      "sourceQuestion": 14,
      "module": 4,
      "prompt": "For work with a chemical splash risk, how should protection be selected?",
      "options": [
        "Any gloves and ordinary glasses",
        "Task-appropriate eye protection, compatible gloves, protective clothing and closed footwear",
        "Only a face mask",
        "By what feels comfortable"
      ],
      "answer": 1,
      "explanation": "Protection must match the assessed hazard. Splash goggles and further face or body protection may be required; a face shield does not replace eye protection.",
      "critical": true
    },
    {
      "id": "q15",
      "sourceQuestion": 15,
      "module": 6,
      "prompt": "Which storage practice is unsafe?",
      "options": [
        "Keeping containers identified",
        "Separating incompatibles",
        "Using designated storage",
        "Putting all chemicals together without checking compatibility"
      ],
      "answer": 3,
      "explanation": "Compatibility determines segregation. Neither alphabetical order nor convenience is sufficient.",
      "critical": false
    },
    {
      "id": "q16",
      "sourceQuestion": 16,
      "module": 2,
      "prompt": "What makes HF exposure especially dangerous?",
      "options": [
        "It affects only the skin surface",
        "It is harmless without pain",
        "It can penetrate tissue and disturb calcium balance, causing systemic toxicity",
        "It becomes harmless when dilute"
      ],
      "answer": 2,
      "explanation": "HF can cause severe systemic injury and delayed pain. Suspected exposure needs immediate emergency assistance.",
      "critical": true
    },
    {
      "id": "q17",
      "sourceQuestion": 17,
      "module": 7,
      "prompt": "A colleague has a suspected hazardous chemical exposure. How should you respond?",
      "options": [
        "Wait for obvious symptoms",
        "Alert emergency help and assist within your training without exposing yourself",
        "Let them manage alone",
        "Report only at the end of the day"
      ],
      "answer": 1,
      "explanation": "Prompt assistance matters. Follow the exposure-specific emergency procedure and avoid becoming another casualty.",
      "critical": true
    },
    {
      "id": "q18",
      "sourceQuestion": 18,
      "module": 5,
      "prompt": "Why is an acetone spill near an operating hot plate hazardous?",
      "options": [
        "It is only corrosive",
        "The plate neutralises acetone",
        "Flammable vapour may encounter an ignition source",
        "Acetone cannot burn without a flame"
      ],
      "answer": 2,
      "explanation": "A hot surface or electrical component can ignite flammable vapour. An absence of open flame does not establish safety.",
      "critical": false
    },
    {
      "id": "q19",
      "sourceQuestion": 19,
      "module": 5,
      "prompt": "When moving chemicals through doors, what should you ensure?",
      "options": [
        "Closed containers in suitable containment, a secure grip and clean door contact",
        "Both contaminated gloves touch handles",
        "Carry open bottles to see the contents",
        "Remove all protection regardless of the task"
      ],
      "answer": 0,
      "explanation": "Avoid contaminating shared handles while retaining safe containment and grip. Use the approved local method.",
      "critical": true
    },
    {
      "id": "q20",
      "sourceQuestion": 20,
      "module": 2,
      "prompt": "Why does aqua regia require a specific approved procedure and waste route?",
      "options": [
        "It is harmless once cooled",
        "Only its colour matters",
        "It is corrosive, can release harmful gases and can react violently with organic material",
        "It can be added to any solvent waste"
      ],
      "answer": 2,
      "explanation": "The combined corrosive, gas and reactivity hazards require dedicated assessment, training and controls.",
      "critical": true
    }
  ],
  "source": "https://institute.acs.org/acs-center/lab-safety/education-training/college-univ-guidelines/laboratory-safety-for-chemistry-students-etextbook.html",
  "examMinutes": 30,
  "supplement": [
    {
      "title": "Cryogenic liquids",
      "text": "Cryogens can cause cold injury, and released gas can displace oxygen. Appropriate ventilation, protective equipment and containers must be specified by the task procedure. Never assume an evaporating spill is harmless or enter an area suspected of oxygen deficiency."
    },
    {
      "title": "Deposition equipment",
      "text": "Thin-film systems can involve vacuum, pressure, heat, electricity and process gases. Only trained authorised users may operate or maintain them. Follow the equipment procedure, interlocks and approved isolation arrangements; never improvise maintenance on an energised system."
    },
    {
      "title": "Excimer lasers",
      "text": "Laser beam and reflected exposure can injure eyes and skin; excimer systems can also involve UV, high voltage and hazardous gases. Use the existing laser safety course and setup-specific training. Eyewear must match the actual laser and is one part of the control system."
    },
    {
      "title": "Dust, nanomaterials and used abrasives",
      "text": "Sanding or grinding can generate hazardous dust. Some nanomaterial forms can become airborne. Risk depends on the material, its form and the process; not every thin film is an airborne hazard. Follow the containment and waste instructions. Used abrasives may retain hazardous material."
    },
    {
      "title": "Grinding and face protection",
      "text": "Grinding can create flying fragments and dust. Follow the task assessment for impact-rated eye protection, guarding, extraction and supplementary face protection. A face shield supplements the required eye protection."
    },
    {
      "title": "Local sign-off",
      "text": "These topics are an awareness introduction. Your technician must identify which equipment, materials and additional courses apply, then provide practical training. This supplement is outside the core chemical-lab exam."
    }
  ],
  "references": [
    {
      "title": "Free ACS third-edition textbook access",
      "url": "https://institute.acs.org/acs-center/lab-safety/education-training/college-univ-guidelines/laboratory-safety-for-chemistry-students-etextbook.html"
    },
    {
      "title": "ACS Safety in Academic Chemistry Laboratories, eighth edition",
      "url": "https://www.acs.org/content/dam/acsorg/about/governance/committees/chemicalsafety/publications/safety-in-academic-chemistry-laboratories-students.pdf"
    },
    {
      "title": "University of Twente emergency number",
      "url": "https://www.utwente.nl/en/about-us/campus/contact-route/alarmnumber/"
    },
    {
      "title": "Princeton EHS: hydrofluoric acid hazards",
      "url": "https://ehs.princeton.edu/laboratory-research/chemical-safety/chemical-specific-protocols/hydrofluoric-acid"
    },
    {
      "title": "Princeton EHS: aqua regia hazards",
      "url": "https://ehs.princeton.edu/laboratory-research/chemical-safety/chemical-specific-protocols/aqua-regia"
    },
    {
      "title": "Princeton EHS: corrosive materials and acid dilution",
      "url": "https://ehs.princeton.edu/laboratory-research/chemical-safety/corrosive-materials"
    },
    {
      "title": "Princeton EHS: piranha solution incompatibilities",
      "url": "https://ehs.princeton.edu/laboratory-research/chemical-safety/chemical-specific-protocols/piranha-solutions"
    },
    {
      "title": "Princeton EHS: peroxide-forming compounds",
      "url": "https://ehs.princeton.edu/laboratory-research/laboratory-safety/laboratory-safety-manual/sec7c"
    },
    {
      "title": "CDC/NIOSH: hierarchy of controls",
      "url": "https://www.cdc.gov/niosh/topics/hierarchy/default.html"
    },
    {
      "title": "OSHA: public-domain hazard pictograms",
      "url": "https://www.osha.gov/hazcom/pictograms"
    },
    {
      "title": "NIH PubChem GHS pictogram image service",
      "url": "https://pubchem.ncbi.nlm.nih.gov/pcfe/docs/markdown/imaging-services.md"
    }
  ]
};