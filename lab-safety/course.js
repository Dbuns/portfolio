window.COURSE = {
  "version": "0.6-review",
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
          "text": "Recognize what could cause harm. Assess how harm could occur in this task. Minimize the risk with suitable controls. Prepare for a failure or emergency. Repeat this check when the procedure, quantities, equipment or conditions change."
        },
        {
          "title": "Speak up and pause",
          "text": "If instructions are missing, equipment behaves unexpectedly or a control is unavailable, pause and contact the supervisor or technician. Do not improvise a substitute procedure. Report incidents and near misses so the group can prevent recurrence. Report unusual odors, unexpected noise, damaged equipment and missing safety controls. Do not investigate a suspected hazardous release by deliberately smelling it.",
          "imsChapter": "1"
        },
        {
          "title": "Everyday behavior",
          "text": "Keep food and drinks outside the laboratory. Never mouth-pipette or deliberately smell chemicals. Keep benches and exits clear. Remove contaminated gloves before touching phones, door handles or shared computers, and wash hands before leaving."
        },
        {
          "title": "Jewelry and personal items",
          "text": "Remove or secure jewelry and loose accessories where they may snag, trap contamination or interfere with gloves. Keep personal items outside chemical work areas. Follow the local clothing and jewelry rules."
        },
        {
          "title": "Supervision and visitors",
          "text": "Use only your own authorized access; do not lend keys or access credentials or admit an unapproved visitor. Visitors need permission, suitable protection and supervision. Working alone or outside normal hours requires the local approval, risk assessment and contact arrangements for that task; access to the building is not permission to perform an experiment. Obtain training and authorization for equipment before using it.",
          "imsChapter": "1"
        },
        {
          "title": "Permission to enter, permission to work",
          "text": "A general course certificate is one part of preparation. Before independent work, complete the group’s safety introduction and required responsibility record with the authorized lab manager. Equipment instruction and approval for the intended process are separate steps. Visitors doing occasional measurements stay with their trained host; a visiting researcher who will work independently needs the required local introduction and authorization first. Book equipment only after training, keep other users informed, and leave lighting on while the room is occupied.",
          "imsChapter": "1"
        },
        {
          "title": "Working outside normal hours",
          "text": "Laboratory activities outside office hours must always be registered through the S&T Register lab work form. Follow the current HSE procedure and obtain the required task approval and risk assessment before starting. Registration records the activity; it does not by itself authorize an untrained person, an unapproved task or working alone. Building access, this course certificate or having a friend nearby does not establish permission. Confirm the permitted task, supervision or buddy arrangements and schedule with the supervisor or lab manager using the current procedure.",
          "imsChapter": "1",
          "scope": "ut",
          "sourceUrl": "https://www.utwente.nl/en/tnw/intranet/services-and-support/hse/arbo-milieu/booking-laboratory-work-outside-normal-working-hours/",
          "sourceLabel": "Register laboratory work outside normal working hours (UT login required).",
          "after": "S&T’s October 2026 notice makes registration mandatory. Use the current HSE page for procedures and forms; do not rely on older IMS exceptions or email-only arrangements."
        }
      ],
      "practice": {
        "id": "q1",
        "module": 0,
        "prompt": "You are asked to start an unfamiliar procedure after completing this course. What should you do?",
        "options": [
          "Read the procedure and begin with a smaller quantity to gain experience.",
          "Obtain task-specific training and authorization before starting the work.",
          "Observe a colleague once and repeat the method without checking sign-off."
        ],
        "answer": 1,
        "explanation": "General knowledge does not replace training for the actual procedure.",
        "critical": true
      },
      "reference": "1 (pp. 10–13) and 2 (pp. 14–25)",
      "figure": "ramp.svg",
      "figureAlt": "RAMP cycle: recognize, assess, minimize and prepare",
      "imagePlaceholder": "Insert image: A trained researcher wearing the required clothing and protection (ACS chapter 2, pp. 16–18)."
    },
    {
      "title": "Labels and safety information",
      "objective": "Use a label and a safety data sheet to prepare for a task.",
      "sections": [
        {
          "title": "Read the complete label",
          "text": "Check the chemical identity, concentration, hazard statements and precautionary statements. Hazard pictograms flag types of danger; they do not describe every risk or provide a complete procedure. An unlabeled bottle is an unknown substance until an authorized person resolves its identity.",
          "image": "ims-ghs-pictograms.png",
          "imageAlt": "Nine GHS codes with the red-diamond pictogram, name and black symbol for each hazard.",
          "imageCaption": "Hazard-pictogram figure from Appendix C of the supplied IMS protocol. Symbols flag hazard classes; the complete label and SDS determine precautions."
        },
        {
          "title": "Safety data sheets",
          "text": "An SDS is a safety data sheet for a substance or mixture. Look up the product you actually have. Useful sections include hazards (2), first aid (4), firefighting (5), accidental release (6), handling and storage (7), exposure controls and PPE (8), and stability and reactivity (10). Ask for help with unfamiliar terms."
        },
        {
          "title": "Turn information into a plan",
          "text": "Identify exposure routes, ventilation, compatible protection, storage restrictions and emergency needs. The SDS supports your assessment; it cannot account for every reaction, apparatus or operating condition. Combine it with the approved procedure and local guidance."
        },
        {
          "title": "Signal words and hazard categories",
          "text": "Danger and Warning are signal words indicating different levels of hazard within the labeling system. A lower category number generally indicates a more severe hazard within a given hazard class; do not compare category numbers across different classes. Read hazard and precautionary statements as well as pictograms. Follow the local standard for labeling working solutions with identity and hazard information."
        },
        {
          "title": "Make a working mixture identifiable",
          "text": "Before preparing a mixture, confirm the approved combination and a chemically compatible container. The label must allow another trained person to identify the contents: composition and concentration, the responsible user, preparation date, and the required hazard information. Include product identifiers such as CAS numbers where the local system requires them. Keep the original bottle label readable during pouring; liquid running across it can remove essential safety information. An experiment card identifies the setup but does not replace labels on individual containers.",
          "imsChapter": "2"
        }
      ],
      "practice": {
        "id": "q2",
        "module": 1,
        "prompt": "You find an unlabeled bottle of clear liquid. What should you do?",
        "options": [
          "Use the usual stock location to infer its identity before transferring it.",
          "Compare its smell with a known solvent before deciding whether to use it.",
          "Keep it out of use and ask the responsible person to establish its identity."
        ],
        "answer": 2,
        "explanation": "Appearance and location cannot establish chemical identity.",
        "critical": true
      },
      "reference": "3 (pp. 40–44)",
      "figure": "sds.svg",
      "figureAlt": "Safety data sheet sections that support planning",
      "imagePlaceholder": "Insert image: A readable product label beside the relevant SDS (ACS chapter 3)."
    },
    {
      "title": "Health and physical hazards",
      "objective": "Recognize common ways chemicals and equipment can cause harm.",
      "sections": [
        {
          "title": "Exposure and effects",
          "text": "Chemicals can enter through inhalation, ingestion, skin absorption or injection through a puncture. Effects can be immediate or delayed. Risk depends on the substance, dose, exposure route and duration. Lack of smell or symptoms does not establish safety."
        },
        {
          "title": "Common chemical hazards",
          "text": "Corrosive substances can damage tissue. Flammable liquids may release vapors that ignite away from the container. Oxidizers can intensify combustion. Toxic and sensitizing substances need controls appropriate to their specific hazards. Read the actual product information rather than assuming all chemicals in a category behave alike."
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
        },
        {
          "title": "Health effects beyond an immediate burn",
          "text": "Some substances can cause cancer, genetic damage or reproductive harm; others damage particular organs or cause allergic sensitization. Repeated exposure can matter even when each individual exposure seems small. A sensitized person may react to very low exposure. Assess the actual substance, route and exposure pattern, and seek occupational-health advice about individual concerns without relying on symptoms to judge safety."
        },
        {
          "title": "Chemical families used in IMS work",
          "text": "Flammable solvents such as acetone, IPA and ethanol can ignite from hot surfaces or electrical components. Chlorinated solvents can create serious health hazards and have a separate approved waste route. Oxidizing reagents and peroxide-containing cleaning mixtures can react violently with organic material. HF and reactive cleaning mixtures require their own approved procedures and emergency arrangements. Learn these distinctions before handling a bottle; familiar use in another group is not clearance to use it here.",
          "imsChapter": "2"
        },
        {
          "title": "Cryogenic liquids: cold injury and oxygen displacement",
          "text": "Liquid nitrogen and liquid helium can injure skin and eyes through extreme cold, and skin can stick to cold surfaces. Their evaporation produces large volumes of gas that can displace oxygen, even though the gases are nonflammable and chemically inert. A person can become incapacitated without a useful warning smell. Adequate ventilation and the required oxygen monitoring must be established by the assessment. Never enter an oxygen-deficient area to rescue someone; withdraw, warn others and summon trained emergency responders.",
          "imsChapter": "5"
        }
      ],
      "practice": {
        "id": "q3",
        "module": 2,
        "prompt": "A volatile chemical has little noticeable smell. Is ventilation unnecessary?",
        "options": [
          "Check the substance, exposure routes and controls before starting the task.",
          "Use the chemical odor to judge whether significant exposure is occurring.",
          "Wait for irritation before deciding that additional protection is necessary."
        ],
        "answer": 0,
        "explanation": "Odour is not a reliable measure of exposure or safety.",
        "critical": false
      },
      "reference": "3 (pp. 26–39)",
      "figure": "exposure.svg",
      "figureAlt": "Exposure routes: breathing, skin, mouth and puncture",
      "imagePlaceholder": "Insert image: A photograph illustrating an exposure route or incompatible storage (ACS chapters 2–3)."
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
        },
        {
          "title": "Before a new chemical arrives",
          "text": "Obtain the required approval before ordering or bringing chemicals into the laboratory, including material from another group. Check the SDS, intended quantities, suitable storage, handling controls and waste route in advance. Make sure the responsible person can register and manage the material; an available supplier or bottle does not establish that it is approved for use.",
          "imsChapter": "2 / Appendix F"
        },
        {
          "title": "Additional S&T requirements for hazardous substances",
          "scope": "ut",
          "text": "The October 2026 S&T notice identifies substances carrying hazard statements including H310 or H330 as activities requiring additional procedures. Before planning work with such substances, consult HSE-TNW and follow the applicable assessment, approval and precautionary requirements. The notice also provides a route to submit urgent experiments to TNW-HSE with an explanation of their necessity; urgency does not establish permission to bypass safety controls.",
          "sourceUrl": "https://www.utwente.nl/en/tnw/intranet/services-and-support/hse/arbo-milieu/",
          "sourceLabel": "TNW HSE: current procedures, forms and safety guidance (UT login required).",
          "imsChapter": "1–2; updated by October 2026 S&T notice"
        }
      ],
      "practice": {
        "id": "q4",
        "module": 3,
        "prompt": "You plan to use ten times the quantity in an approved procedure. What next?",
        "options": [
          "Repeat the previous risk assessment because the reaction remains the same.",
          "Review the changed scale, heat removal and other risks before proceeding.",
          "Retain the previous controls and reduce the heating rate during the run."
        ],
        "answer": 1,
        "explanation": "Scaling can change heat removal, gas generation and the controls required.",
        "critical": false
      },
      "reference": "1 (pp. 10–13) and 4 (pp. 46–48)",
      "figure": "risk.svg",
      "figureAlt": "Risk depends on task conditions and controls",
      "imagePlaceholder": "Insert image: An actual setup with its risk assessment and controls identified (ACS chapters 1 and 4)."
    },
    {
      "title": "Protection and fume hoods",
      "objective": "Choose controls for the hazard and recognize their limits.",
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
          "text": "No glove protects against every chemical. Check compatibility, thickness and expected contact time using approved selection guidance. Inspect gloves and replace them when damaged or contaminated. Avoid transferring contamination to clean surfaces. Thin disposable nitrile gloves are not suitable for every solvent or prolonged contact. Consult the manufacturer’s compatibility and breakthrough guidance for the actual chemicals and glove model. Reusable or multilayer gloves require their own inspection, removal and decontamination procedure; a visibly clean glove is not proof of chemical protection.",
          "imsChapter": "2"
        },
        {
          "title": "Remove disposable gloves without spreading contamination",
          "text": "Treat the outer glove surfaces as contaminated. For ordinary single-layer disposable gloves, use this sequence; specialized gloves, double gloves or unusual contamination require the approved task-specific method. Work over the designated waste area and keep your hands away from your face, clothing, phone and door handles.",
          "steps": [
            "With one still-gloved hand, pinch the outside of the opposite glove near the wrist. Avoid touching bare skin.",
            "Peel that glove away from the hand, turning it inside out as you remove it.",
            "Keep the removed glove in the hand that is still wearing a glove.",
            "Slide the fingers of your bare hand under the inside cuff of the remaining glove. Do not grasp its contaminated outside.",
            "Peel the second glove off from the inside, turning it inside out around the first glove.",
            "Place both gloves in the waste stream required for their chemical contamination. Wash your hands with soap and water; do not reuse disposable gloves."
          ],
          "after": "The principle is gloved hand to contaminated outside, then bare hand to the inside cuff. Glove removal can still contaminate skin, which is why handwashing matters. If a chemical reaches your skin, start the appropriate exposure response rather than treating handwashing as sufficient first aid.",
          "sourceUrl": "https://www.cdc.gov/ebola/hcp/communication-resources/how-to-remove-gloves-safely.html",
          "sourceLabel": "See the CDC glove-removal illustrations (hand technique; chemical waste rules remain local)."
        },
        {
          "title": "A fume hood must function",
          "text": "Check the operating indicator and use the specified sash position. Keep the face and body outside the opening, avoid obstructing airflow and arrange work according to local instructions. A hood is not a general storage cupboard or a guarantee against explosion. If an alarm or ventilation failure occurs, stop safely and notify the responsible person."
        },
        {
          "title": "Clothing, glasses and clean hands",
          "text": "Cover legs and wear closed shoes as required by the laboratory rules; shorts and open footwear leave skin exposed. Ordinary prescription glasses and contact lenses do not replace required chemical splash goggles. Do not adjust contact lenses with contaminated hands. Remove gloves without transferring contamination to the skin, and wash your hands after removing them and before leaving."
        },
        {
          "title": "Shared UT fume hoods: a check before each use",
          "scope": "ut",
          "text": "Learn the controls and markings on the hood model used in your group. Before each task, check its airflow/status indicator and put the sash at the marked operating position. Keep your head outside and leave airflow openings clear. The hood removes hazardous airborne releases; it does not make an incompatible reaction safe. If the indicator is abnormal or an alarm sounds, stop safely and contact the responsible staff. Matching hood models still need an individual check before use.",
          "after": "The technician will confirm the actual indicator, sash mark and approved setup with a photo or demonstration. Do not infer a numerical sash height from this general course."
        },
        {
          "title": "Chemical protection and glove layers",
          "text": "The IMS protocol specifies extra protective layers for certain hazardous wet-chemical tasks. Learn the actual approved glove model, apron/coat combination and eye protection with the technician; glove color alone does not establish compatibility. Reusable gloves need an approved inspection, cleaning and removal procedure, while disposable gloves have the removal sequence above. Some glove materials contain natural rubber latex: tell the responsible person about an allergy so suitable alternatives can be selected. Respiratory protection requires a separate approved program and training; do not select a mask as an improvised substitute for ventilation.",
          "imsChapter": "2"
        },
        {
          "title": "A clean bench is not necessarily a chemical fume hood",
          "text": "A chemical fume hood is selected to capture hazardous airborne releases. A clean bench may primarily protect a sample from particles and may direct air toward the user. Do not handle hazardous chemicals in a clean bench merely because it looks similar or has airflow. The IMS hood guidance places work at least 15 cm back from the opening; have the technician show this working zone, the sash mark and the indicator on your hood. Keep your head outside and do not obstruct airflow.",
          "imsChapter": "2",
          "scope": "ut"
        }
      ],
      "practice": {
        "id": "practice-gloves",
        "module": 4,
        "prompt": "After removing the first glove, where should your bare fingers touch the remaining glove?",
        "options": [
          "The outer surface near the wrist, after wiping it with a paper towel.",
          "The fingertips, where there is usually less contamination than at the wrist.",
          "The inside cuff, avoiding contact with the contaminated outer surface."
        ],
        "answer": 2,
        "explanation": "Use bare fingers inside the cuff to peel the second glove inside out. Discard the gloves in the appropriate waste stream, then wash your hands.",
        "critical": true
      },
      "reference": "2 (pp. 16–18) and 4 (pp. 47, 50)",
      "figure": "controls.svg",
      "figureAlt": "Controls from eliminating the hazard to personal protection",
      "imagePlaceholder": "Insert image: Correct fume-hood working zone, sash position and airflow indicator (ACS chapter 4, p. 50)."
    },
    {
      "title": "Safe laboratory work",
      "objective": "Recognize unsafe setup, transfer and housekeeping practices.",
      "sections": [
        {
          "title": "Display the experiment information card",
          "scope": "ut",
          "text": "The group uses an experiment information card placed beside the setup so other users and responders can identify ongoing work and contact the experimenter. It records experiment information, name and phone number, start date/time, end date/time, chemicals used, and hazard-symbol checkboxes. Complete it alongside the approved procedure and risk assessment before starting.",
          "steps": [
            "Describe the work in Experiment information so another trained person can understand what is taking place.",
            "Enter your name and phone number so the responsible experimenter can be contacted.",
            "Complete the start date/time and end date/time fields following the group instructions. Keep the record accurate when the schedule or status changes.",
            "List the chemicals used. Use their actual labels and SDSs, together with the task assessment, to identify the relevant hazards.",
            "Select the applicable hazard-symbol checkboxes. Do not treat the symbols alone as a complete description of reaction, equipment or process hazards.",
            "Keep the card visible beside the setup and update it when the schedule, chemicals or status changes. Follow the group’s handover instructions; a completed card does not itself authorize unattended work."
          ],
          "after": "The card communicates who is responsible, the recorded schedule and relevant chemical hazards. It does not replace the SDS, risk assessment, equipment training or emergency instructions.",
          "imagePlaceholder": "Insert image: a high-resolution photo of the blank experiment information card beside a correctly arranged setup."
        },
        {
          "title": "Prepare the workspace",
          "text": "Inspect glassware for damage and use equipment appropriate to the task. Secure apparatus and keep cables and tubing away from walkways and heat. Know the shutdown procedure. Do not use damaged electrical equipment; report it."
        },
        {
          "title": "Transfers and heating",
          "text": "Use suitable transfer tools, container support and secondary containment according to the procedure. Keep ignition sources away from flammables and their vapors. Never mouth-pipette. Hot glass can look like cold glass: use the prescribed handling tools and allow controlled cooling."
        },
        {
          "title": "Prevent contamination",
          "text": "Keep containers closed when not in use. Label working solutions according to local rules and avoid returning excess material to stock containers. Keep clean items separate from contaminated equipment. Do not carry chemicals in your pockets. Identify working mixtures with the actual chemical composition and concentration, preparation date and hazards as required by the local labeling system. Washing with water or wiping with ethanol does not establish that an item is free of every chemical contaminant.",
          "imsChapter": "2"
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
          "text": "Carry closed, labeled containers in suitable secondary containment or an approved carrier. Plan the route and keep a clean method of opening doors. Never touch shared handles with potentially contaminated gloves. The local procedure may prescribe one clean hand or assistance; do not compromise a secure grip or protection to follow a slogan."
        },
        {
          "title": "Flammable vapor near heat",
          "text": "Acetone is a flammable solvent. A spill can release vapor, and a hot plate or its electrical components can provide an ignition source. Keep flammable liquids and vapors away from ignition sources; do not assume a heater is suitable merely because it has no open flame."
        },
        {
          "title": "Shutdown is procedure-specific",
          "text": "Leave equipment in its prescribed safe state. Many tasks require shutdown, but approved continuing operations may have different instructions. Never switch off safety-critical ventilation or another ongoing experiment simply because you are leaving. Ask when the handover or shutdown arrangement is unclear."
        },
        {
          "title": "Glassware, tubing and cleaning",
          "text": "Reject cracked or chipped glassware and use glass rated for the intended heating, vacuum or pressure. Glass tubing can break when forced into a stopper and cause deep cuts: obtain a demonstration of the approved tools and technique rather than forcing it. Put broken glass in its designated container, never pick it up with bare hands. Use the approved glassware-cleaning method; aggressive cleaning chemicals require their own assessment and training."
        },
        {
          "title": "Distillation and solvent extraction",
          "text": "Distillation can involve flammable vapor, pressure buildup, sudden boiling and hazardous residues. Follow the approved heating, stirring, cooling and shutdown method; do not improvise a sealed system or distill to dryness. A separatory funnel can build pressure: obtain a practical demonstration, support the stopper and stopcock, and vent as instructed into the hood with the outlet directed away from people and ignition sources."
        },
        {
          "title": "Centrifuges",
          "text": "Use the correct rotor, tubes and loading arrangement; balance opposing loads as specified by the manufacturer and local procedure. Inspect components before use and keep the lid closed while the rotor moves. Wait for a complete stop before opening; never stop a rotor with your hand. Unexpected vibration or noise requires the prescribed safe stop and a check by the responsible person."
        },
        {
          "title": "Vacuum, pressure and compressed air",
          "text": "Vacuum glassware can implode, and pressurized systems can release stored energy or eject parts. Use equipment rated for the intended conditions, required shielding and approved traps or pressure controls. Secure gas cylinders and use the correct regulator only after specific training. Never direct compressed air at yourself or another person, and do not use it to clean clothing or skin."
        },
        {
          "title": "Heat, cooling baths and flames",
          "text": "Plan temperature control before adding reagents: an exothermic reaction can accelerate beyond the available cooling. Never add boiling chips to an already hot liquid; follow the approved method to prevent sudden boiling. Point a heated test tube away from everyone and use the specified holder and heating method. Open flames need specific authorization and sound gas connections. Dry ice and liquid nitrogen can cause cold injury, oxygen displacement and pressure in sealed containers; use approved ventilation, protection and containers after training."
        },
        {
          "title": "Electrical equipment and UV",
          "text": "Keep electrical equipment and connections dry, inspect cords and plugs, and report damage or overheating. Know the controls: a stirrer dial and a heater dial may look similar. Disconnect or isolate equipment only as instructed, and do not improvise electrical repairs. UV lamps can injure eyes and skin; use the required enclosure and shielding, and task-specific protection. Ordinary safety glasses are not a guarantee of UV protection."
        },
        {
          "title": "Shared labware and samples",
          "text": "Keep glassware used for clean samples separate from ware used for dirty or contaminated work. Choose containers compatible with the chemicals and process; a clean-looking beaker may be unsuitable for a particular material. The user is responsible for the approved cleaning, collecting contaminated rinses and returning equipment to its designated area. Mark personal samples and labware with their identity and responsible user; store them only in assigned locations and remove them when the task is finished. Do not transfer a chemical preparation into a measurement room that lacks the controls required for it.",
          "imsChapter": "2–3"
        },
        {
          "title": "Gas cylinders, lines and alarms",
          "text": "Secure cylinders against falling and leave cylinder connection, regulator selection and changes to gas lines to authorized people. Do not alter a line because the gas is described as inert: nitrogen, argon and helium can displace oxygen, and every pressurized system stores energy. Know the gas alarm and the local evacuation response before work. Leave on the instructed alarm, do not silence or bypass it, and do not assume an automatic gas shutoff makes the room safe to re-enter.",
          "imsChapter": "2–3"
        },
        {
          "title": "Furnaces and heated materials",
          "text": "Obtain instruction before loading or operating a furnace. Hot components can burn, and heating a sample can release hazardous decomposition products or damage the equipment. Confirm that the sample, temperature program, containment and ventilation are approved. Protect yourself from exposed hot or energized components and use the prescribed handling tools and cooling period. Repairs and servicing belong to authorized staff; do not open or service equipment because the display has been switched off.",
          "imsChapter": "2"
        },
        {
          "title": "Dust, grinding and contaminated residues",
          "text": "Grinding or cleaning a solid can release hazardous dust even when the original sample seems easy to handle. Assess the material and residues before disturbing them, use the designated enclosure or approved controlled method, and collect debris and cleaning materials in the specified waste stream. Do not grind openly, dry-brush contaminated surfaces or blow dust away with compressed gas. The target-grinding glovebox and room-specific wet-cleaning method require practical training rather than instructions in this general course.",
          "imsChapter": "2"
        },
        {
          "title": "Thin-film and characterization equipment: common boundaries",
          "text": "These instruments may combine radiation, high voltage, vacuum or pressure, moving parts, gases and high temperatures. Do not bypass covers, shielding, interlocks or warning lights. Laser eyewear must match the actual wavelength and required protection; ordinary glasses, a familiar lens color or this chemical-safety course do not qualify someone for laser work. X-ray equipment needs its own instruction and radiation controls. Observe access restrictions, report suspected exposure immediately and leave maintenance to authorized staff.",
          "imsChapter": "3"
        },
        {
          "title": "Cleanrooms: cleanliness does not replace safety",
          "text": "A cleanroom controls contamination of samples and processes; that does not make its chemicals or equipment harmless. Separate cleanroom access and equipment training are required. Follow its gowning, material-entry and contamination-control rules, and use only approved work areas and methods. In an emergency, evacuate immediately by the prescribed route rather than delaying to change out of cleanroom clothing. Detailed gowning, cleaning and room-specific processes belong in the local cleanroom training.",
          "imsChapter": "4"
        },
        {
          "title": "Handling cryogens requires practical instruction",
          "text": "Use the approved vessel, transfer equipment, ventilation and protection for the task. Cryogenic liquid must not be trapped in a sealed container; evaporation can create dangerous pressure. Wear the required eye protection and face shield, covered clothing and suitable footwear. Loose-fitting cryogenic gloves provide limited splash/contact protection so they can be removed quickly; they do not permit immersing hands in liquid nitrogen or helium. Keep exposed skin away from cold surfaces and arrange a trained demonstration before transferring cryogens.",
          "imsChapter": "5"
        }
      ],
      "practice": {
        "id": "q6",
        "module": 5,
        "prompt": "A glass flask has a crack but holds liquid. What should you do?",
        "options": [
          "Use it at room temperature and avoid moving it during the experiment.",
          "Remove it from use and follow the approved reporting and disposal route.",
          "Wrap it for support and keep it away from heating or vacuum equipment."
        ],
        "answer": 1,
        "explanation": "Cracks can lead to failure during handling, heating or pressure changes.",
        "critical": false
      },
      "reference": "4 (pp. 48–57)",
      "figure": "transport.svg",
      "figureAlt": "Closed container, secondary containment and clean door contact",
      "imagePlaceholder": "Insert image: Safe glassware and chemical transport in secondary containment (ACS chapter 4, pp. 48–53)."
    },
    {
      "title": "Storage and chemical waste",
      "objective": "Choose the correct route for storage and waste without guessing.",
      "sections": [
        {
          "title": "Store by compatibility",
          "text": "Use designated storage based on hazards and compatibility. Alphabetical order alone can place incompatible chemicals together. Keep containers identifiable, closed and in suitable containment. Follow specific requirements for flammables, corrosives and oxidizers."
        },
        {
          "title": "Plan waste before starting",
          "text": "Identify the waste stream before generating it. Use designated compatible containers and required labels. Do not add material when the contents or compatibility are uncertain. Ask the technician. Follow the approved container closure and venting instructions for the actual waste; do not loosen caps or improvise venting to manage an unexpected reaction or pressure buildup. Stop and obtain help if the safe collection method is unclear.",
          "imsChapter": "2 / Appendices E–F"
        },
        {
          "title": "Avoid hazardous mixtures",
          "text": "Mixing waste can cause reaction, pressure or fire. Keep incompatible wastes separate according to the approved local system. Do not pour chemicals into drains or put them in ordinary trash unless the authorized local procedure explicitly permits that material."
        },
        {
          "title": "Special waste",
          "text": "Sharps, broken glass, contaminated solids and chemical packaging may have different routes. An empty-looking container may still be contaminated. Follow instructions for closure, filling limits and collection. Contaminated rinse water is also waste: do not assume dilution makes it suitable for the drain. Collect it by the approved route unless that specific discharge has been authorized. Chemical-contaminated packaging is not automatically clean recycling. Confirm the local separation of halogenated and nonhalogenated solvent waste; do not copy another laboratory’s concentration thresholds or container colors.",
          "imsChapter": "2"
        },
        {
          "title": "Refrigerated chemical storage",
          "text": "Use a refrigerator or freezer approved for the material. Flammable liquids must not be stored in an ordinary household refrigerator; the unit must be explicitly rated for flammable-material storage. Label containers, provide suitable spill containment and keep incompatible chemicals separated. Never store food or drinks for consumption in a chemical refrigerator."
        },
        {
          "title": "From purchase to disposal",
          "text": "Plan the full chemical lifecycle: approval and SDS before acquisition; registration and compatible storage when received; controlled use and clear labels during work; then a confirmed waste stream and collection route. Return stock chemicals to their designated storage after use rather than leaving them on a bench or in an arbitrary drawer. Tell the responsible person when stock is running low instead of ordering an unreviewed substitute. Confirm the container fill mark and collection trigger locally; stop filling before exceeding that mark.",
          "imsChapter": "2 / Appendices D–F"
        }
      ],
      "practice": {
        "id": "q7",
        "module": 6,
        "prompt": "You are unsure whether waste belongs in a nearby waste bottle. What should you do?",
        "options": [
          "Use the label on the nearest waste container to infer the right stream.",
          "Confirm the waste identity and approved compatible route before adding it.",
          "Dilute the waste so it can be added to the most convenient container."
        ],
        "answer": 1,
        "explanation": "Confirm compatibility before mixing any waste.",
        "critical": true
      },
      "reference": "2 (pp. 20–22) and 3 (pp. 37–39), with 4 (p. 53)",
      "figure": "waste.svg",
      "figureAlt": "Check waste identity and compatibility before choosing a stream",
      "imagePlaceholder": "Insert image: Approved compatible storage and correctly labeled waste containers (ACS chapters 2–3)."
    },
    {
      "title": "Prepare for emergencies",
      "objective": "Choose a first response and recognize your limits.",
      "sections": [
        {
          "title": "Know the arrangements",
          "text": "Before work, locate exits, alarms, eyewash, safety shower and the means of calling assistance. Keep access clear. Learn the local emergency number, meeting point and reporting procedure during orientation; do not assume they match your previous institution."
        },
        {
          "title": "Chemical exposure",
          "text": "Alert others and obtain assistance promptly. For an eye or skin splash, begin the prescribed emergency flushing immediately and obtain medical advice; do not delay while searching for paperwork. Follow the local emergency procedure and chemical-specific guidance. Do not attempt chemical neutralization on the body."
        },
        {
          "title": "Spills and fire",
          "text": "Warn people nearby and keep others away. Assess from a safe location. If the substance, risk or response is uncertain, withdraw and summon trained help. Only undertake cleanup or firefighting within your training and the authorized procedure. Protect an escape route and follow evacuation instructions."
        },
        {
          "title": "Report and learn",
          "text": "Report exposures, injuries, spills and near misses even when no injury is obvious. Provide chemical and task information to responders when safe. Resuming work requires appropriate clearance, not simply the disappearance of an alarm."
        },
        {
          "title": "University of Twente emergency contact",
          "text": "In the Netherlands, 112 is the national emergency number for urgent police, fire or ambulance assistance. UT publishes 053 489 2222 (+31 53 489 2222) as its campus emergency number, or 2222 internally. Know both numbers and follow the campus emergency instructions. Give your building, room, incident and any injuries when calling. During orientation, verify how to call from your phone. On a building alarm, follow the evacuation route to the designated assembly point and do not re-enter until authorized. Use the designated evacuation stairs rather than elevators. Never delay evacuation to shut down equipment or fight a fire; take an action only when the emergency procedure permits it and it is safe.",
          "scope": "ut",
          "imsChapter": "1",
          "imagePlaceholder": "Insert image: a high-resolution current UT emergency sign. Use a sign applicable to the learner’s building."
        },
        {
          "title": "Use the eyewash and safety shower",
          "text": "Learn how to activate the actual equipment before an incident. For an ordinary liquid chemical splash in the eyes, start flushing immediately, hold the eyelids open and obtain help. Remove contact lenses if readily possible without delaying flushing. For substantial skin or clothing contamination, use the safety shower and remove contaminated clothing while rinsing. General first aid commonly requires at least 15 minutes of flushing, and some chemicals require longer or specific treatment: follow the emergency procedure, SDS and responder instructions. Suspected HF exposure requires immediate specialist emergency care; a routine rinse alone is not sufficient treatment."
        },
        {
          "title": "Clothing fires and other injuries",
          "text": "If clothing catches fire, do not run. Use the practiced emergency response: stop, drop and roll, or use an immediately accessible safety shower, while someone summons help. Never wrap a standing person in a fire blanket. For electrical shock, do not touch a person who may still be connected to live power; obtain emergency help and safe isolation. Move someone from fumes only if you can do so without entering a hazardous atmosphere. Do not induce vomiting after chemical ingestion; obtain emergency medical advice."
        },
        {
          "title": "Recognize fire equipment and know your limits",
          "scope": "ut",
          "text": "Find the alarm point and fire extinguishers near your work area before starting. Learn the extinguisher type and its label with the technician; one type is not suitable for every fire. Raising the alarm, calling for help and maintaining a safe escape route come first. Only attempt a small developing fire when trained, authorized and equipped for that fire, with a clear exit behind you. If any condition is uncertain, evacuate.",
          "steps": [
            "For an extinguisher that uses the PASS method, remember Pull the pin, Aim at the base, Squeeze the handle and Sweep across the base.",
            "Follow the actual unit label and training for its effective distance and operation. Do not hold the discharge horn of a CO2 extinguisher; it can become dangerously cold.",
            "Withdraw if smoke, heat or the fire threatens your escape route, if the fire grows, or if the extinguisher is exhausted. Follow BHV instructions and do not re-enter without clearance."
          ],
          "after": "This is recognition and awareness, not hands-on firefighting qualification. The technician must confirm the types available and demonstrate the local emergency arrangements. OSHA is used as a technique reference, not as Dutch regulatory guidance.",
          "sourceUrl": "https://www.osha.gov/etools/evacuation-plans-procedures/emergency-standards/portable-extinguishers/use",
          "sourceLabel": "Extinguisher technique and limits: OSHA training reference."
        },
        {
          "title": "A spill at the bench and a release beyond it",
          "text": "Report spills immediately and warn people who could be exposed. Clean only a known, assessed small spill when you have the required training, procedure and materials. The IMS protocol directs users to warn staff when a release spreads beyond the working station; do not improvise cleanup in the room. Provide responders with the chemical identity and available SDS when safe. Protecting the victim never means exposing yourself to fumes, live electricity or another uncontrolled hazard.",
          "imsChapter": "1–2"
        },
        {
          "title": "Current S&T incident and near-miss procedure",
          "scope": "ut",
          "text": "Safety comes first. Stop work without exposing yourself to further danger and ensure that everyone involved is safe. Alert BHV through the campus emergency number 053 489 2222. In an acute medical emergency, also call 112. Inform your manager and HSE as soon as possible, and report near misses as well. Incidents involving hazardous substances are treated as serious or potentially serious and follow the applicable escalation procedure. Do not resume work without the appropriate clearance.",
          "steps": [
            "Stop work and protect people, without becoming another casualty.",
            "Alert BHV: 053 489 2222. For an acute medical emergency, also call 112.",
            "Inform your manager and HSE as soon as possible.",
            "Report the incident or near miss through the applicable procedure and preserve relevant chemical/task information when safe."
          ],
          "sourceUrl": "https://www.utwente.nl/en/service-portal/news-events/news/2026/10/1198630/safety-at-st-what-you-need-to-know?lang=en",
          "sourceLabel": "Source: October 2026 S&T safety notice (UT employee login required).",
          "imsChapter": "1; updated by October 2026 S&T notice"
        }
      ],
      "practice": {
        "id": "q8",
        "module": 7,
        "prompt": "An unknown chemical spills and you lack spill-response training. What should you do?",
        "options": [
          "Choose a general spill absorbent and clean up while wearing fresh gloves.",
          "Warn others, withdraw safely and arrange assessment by trained staff.",
          "Dilute the spill with water and ask the technician to check it afterward."
        ],
        "answer": 1,
        "explanation": "An unknown spill needs trained assessment, not improvised cleanup.",
        "critical": true
      },
      "reference": "5 (pp. 58–69)",
      "figure": "emergency.svg",
      "figureAlt": "Warn others, move away from danger and call for help",
      "imagePlaceholder": "Insert image: The actual eyewash, safety shower and alarm point (ACS chapter 5)."
    }
  ],
  "questions": [
    {
      "id": "q1",
      "sourceQuestion": 1,
      "module": 7,
      "prompt": "An unknown or hazardous spill may expose people, and you are not trained to respond. What should you do?",
      "options": [
        "Isolate nearby equipment, then clean with the available spill kit.",
        "Warn others, withdraw safely and call for emergency assistance.",
        "Lower the hood sash, then stay nearby to monitor the fumes.",
        "Check the SDS at the bench, then decide whether to evacuate."
      ],
      "answer": 1,
      "explanation": "Warn others, avoid exposure, withdraw safely and summon trained assistance through the emergency arrangements. Unknown substances or hazardous fumes must not be cleaned up by an untrained user.",
      "critical": true
    },
    {
      "id": "q2",
      "sourceQuestion": 2,
      "module": 0,
      "prompt": "Which behavior conflicts with safe laboratory work?",
      "options": [
        "Keeping a secured watch beneath the required protective clothing.",
        "Tying back long hair before handling chemicals or hot equipment.",
        "Keeping a lab coat fastened while performing chemical transfers.",
        "Leaving loose jewelry exposed beside rotating or hot equipment."
      ],
      "answer": 3,
      "explanation": "Loose or unsuitable accessories can create mechanical and contamination hazards. Follow local jewelry rules.",
      "critical": false
    },
    {
      "id": "q3",
      "sourceQuestion": 3,
      "module": 7,
      "prompt": "The building fire alarm sounds. What is the appropriate response?",
      "options": [
        "Evacuate by a safe route and report to the assembly point.",
        "Finish putting equipment away, then check the alarm source.",
        "Stay in the lab until a supervisor confirms there is a fire.",
        "Wait outside the room so you can return when it is quiet."
      ],
      "answer": 0,
      "explanation": "Follow evacuation instructions. Do not wait for visible fire or re-enter without authorization.",
      "critical": true
    },
    {
      "id": "q4",
      "sourceQuestion": 4,
      "module": 0,
      "prompt": "You are unsure how to use laboratory equipment. What should you do?",
      "options": [
        "Read the quick-start guide, then learn the controls using a low setting.",
        "Ask an experienced user for tips, then proceed without formal sign-off.",
        "Get authorized training and permission before operating the equipment.",
        "Repeat a colleague's settings, then arrange training after your first use."
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
        "Handling a toxic liquid while the assessed exposure controls work.",
        "Breathing toxic vapor released by a task with failed ventilation.",
        "Moving a toxic substance inside its intact secondary containment.",
        "Reading the label of a toxic substance in a closed stock container."
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
        "Wipe away the liquid, then rinse if irritation develops.",
        "Neutralize the splash, then rinse away the reaction products.",
        "Start emergency flushing and have someone summon help.",
        "Find the SDS first, then choose the correct rinsing procedure."
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
        "Switch off all equipment, including controls for continuing experiments.",
        "Check the required safe state and handover for any continuing operation.",
        "Leave equipment as it is if another trained person remains in the room.",
        "Check the bench and lights, then assume automated systems can continue."
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
        "053 489 2222 — campus emergency response",
        "053 489 2134 — campus emergency response",
        "112 — internal UT campus emergency number",
        "0900 8844 — campus emergency response"
      ],
      "answer": 0,
      "explanation": "UT publishes 053 489 2222 as its campus emergency number (2222 internally). The national Dutch emergency number is 112. These are different services; follow campus emergency instructions and know both numbers.",
      "critical": true
    },
    {
      "id": "q9",
      "sourceQuestion": 9,
      "module": 4,
      "prompt": "An approved procedure requires a fume hood for a volatile hazardous chemical. What must you establish before starting?",
      "options": [
        "The hood works and the task can follow its operating instructions.",
        "The sash closes and there is enough space to store the stock bottles.",
        "The exhaust makes noise and no strong odor is detected at the sash.",
        "The room is ventilated and compatible gloves are available for spills."
      ],
      "answer": 0,
      "explanation": "A functioning chemical fume hood captures hazardous airborne releases before they enter the room. Check its indicator, use the required sash position and follow the operating instructions. Gloves or lack of odor do not replace required ventilation.",
      "critical": true
    },
    {
      "id": "q10",
      "module": 4,
      "prompt": "You have removed one disposable glove and hold it in your other gloved hand. How should you remove the second glove?",
      "options": [
        "Pinch its outer wrist surface with bare fingers and peel it slowly over your hand.",
        "Slide bare fingers under its inside cuff and peel it over the first glove.",
        "Pull at its fingertips with the bare hand and keep both gloves upright.",
        "Wipe its outer wrist surface, then pinch it with bare fingers to remove."
      ],
      "answer": 1,
      "explanation": "Bare fingers contact the inside cuff, not the contaminated outside. Peel the second glove inside out around the first, discard both in the correct chemical waste stream and wash hands. Do not reuse disposable gloves.",
      "critical": true
    },
    {
      "id": "q11",
      "sourceQuestion": 11,
      "module": 5,
      "prompt": "Why does an approved concentrated-acid dilution procedure add acid to water?",
      "options": [
        "It makes the final acid concentration easier to calculate.",
        "It helps control heat release and reduce violent splashing.",
        "It prevents the diluted acid from retaining corrosive properties.",
        "It removes the need for cooling during the addition step."
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
        "The solvent converts residual peroxide into a nonreactive dilution.",
        "The mixture mainly creates a labeling problem for waste collection.",
        "The combination may react violently, ignite or generate pressure.",
        "The solvent container provides enough volume to absorb the reaction."
      ],
      "answer": 2,
      "explanation": "Strong oxidising mixtures can react dangerously with organic material. Keep incompatible wastes separate.",
      "critical": true
    },
    {
      "id": "q13",
      "module": 1,
      "prompt": "You will use a new chemical product in an approved task. What should you check before selecting protection?",
      "options": [
        "The SDS for a similar chemical product and gloves normally stocked at the bench.",
        "The container pictograms and the protection available from the cupboard.",
        "The actual product SDS and task assessment, including glove compatibility.",
        "The product hazard name and the thickest glove material kept in stock."
      ],
      "answer": 2,
      "explanation": "Use the SDS for the actual substance or mixture, together with the task assessment and approved glove-selection guidance. A pictogram or glove thickness alone cannot establish suitable protection.",
      "critical": false
    },
    {
      "id": "q14",
      "sourceQuestion": 14,
      "module": 4,
      "prompt": "For work with a chemical splash risk, how should protection be selected?",
      "options": [
        "Use splash goggles and the gloves already available at the workbench.",
        "Select eye, glove and clothing protection for the assessed splash risk.",
        "Use a face shield and gloves, with ordinary glasses beneath the shield.",
        "Choose the thickest gloves and coat without checking compatibility."
      ],
      "answer": 1,
      "explanation": "Select chemical splash eye protection, chemically compatible gloves, protective clothing and closed footwear for the task. A face shield supplements the required eye protection. Glove thickness alone does not establish chemical compatibility.",
      "critical": true
    },
    {
      "id": "q15",
      "sourceQuestion": 15,
      "module": 6,
      "prompt": "Which storage practice is unsafe?",
      "options": [
        "Keeping each container labeled and using the assigned storage area.",
        "Separating chemicals according to the approved compatibility groups.",
        "Using compatible secondary containment for stored liquid chemicals.",
        "Grouping chemicals alphabetically before checking incompatibilities."
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
        "The main risk is a visible surface burn that immediately becomes painful.",
        "The main risk ends after dilution because tissue penetration then stops.",
        "Tissue penetration can disrupt calcium balance and harm the whole body.",
        "Delayed pain indicates a superficial injury that can wait for routine care."
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
        "Check whether symptoms persist before requesting emergency assistance.",
        "Summon help and provide trained assistance without exposing yourself.",
        "Complete the incident report before interrupting anyone else's work.",
        "Move the person through the affected area to retrieve their belongings."
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
        "Acetone reacts with the hot plate surface to produce corrosive vapor.",
        "Heat suppresses acetone vapor once the liquid has evaporated fully.",
        "Acetone vapor can ignite at the heater or its electrical components.",
        "An electric heater is safe here because it does not have an open flame."
      ],
      "answer": 2,
      "explanation": "A hot surface or electrical component can ignite flammable vapor. An absence of open flame does not establish safety.",
      "critical": false
    },
    {
      "id": "q19",
      "sourceQuestion": 19,
      "module": 5,
      "prompt": "When moving chemicals through doors, what should you ensure?",
      "options": [
        "Use closed contained bottles, a secure grip and clean door contact.",
        "Remove both gloves and carry the closed stock bottle by its neck.",
        "Keep both gloves on and wipe the door handle after the transfer.",
        "Carry the closed bottle against your coat to keep one hand free."
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
        "Its main hazard is acidity, so dilution makes solvent-waste mixing safe.",
        "Its released gases are the concern, so a hood removes the waste hazard.",
        "Corrosion, harmful gases and organic incompatibility all need control.",
        "Cooling stops its reactivity, so cooled residues use ordinary acid waste."
      ],
      "answer": 2,
      "explanation": "The combined corrosive, gas and reactivity hazards require dedicated assessment, training and controls.",
      "critical": true
    }
  ],
  "source": "https://www.acs.org/content/dam/acsorg/about/governance/committees/chemicalsafety/publications/safety-in-academic-chemistry-laboratories-students.pdf",
  "examMinutes": 15,
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
      "title": "Netherlands national emergency number: 112",
      "url": "https://www.government.nl/themes/justice-security-and-defence/emergency-number-112"
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
    },
    {
      "title": "CDC: glove-removal hand technique (adapted for chemical glove disposal)",
      "url": "https://www.cdc.gov/ebola/hcp/communication-resources/how-to-remove-gloves-safely.html"
    },
    {
      "title": "OSHA: extinguisher awareness and technique (not Dutch regulatory guidance)",
      "url": "https://www.osha.gov/etools/evacuation-plans-procedures/emergency-standards/portable-extinguishers/use"
    },
    {
      "title": "Glove selection and chemical compatibility — Princeton Environmental Health and Safety",
      "url": "https://ehs.princeton.edu/laboratory-research/laboratory-safety/ppe-the-lab/gloves"
    },
    {
      "title": "S&T outside-hours registration (UT login required)",
      "url": "https://www.utwente.nl/en/tnw/intranet/services-and-support/hse/arbo-milieu/booking-laboratory-work-outside-normal-working-hours/"
    },
    {
      "title": "TNW HSE procedures and support (UT login required)",
      "url": "https://www.utwente.nl/en/tnw/intranet/services-and-support/hse/arbo-milieu/"
    }
  ]
};
