window.COURSE = {
  "version": "0.10",
  "title": "IMS Lab Safety & Good Practice",
  "passPercent": 80,
  "modules": [
    {
      "title": "Your role in a safe laboratory",
      "objective": "Decide when you are ready to begin and when to ask for help.",
      "sections": [
        {
          "title": "A shared starting point",
          "text": "Everyone entering a chemical laboratory needs to understand its safety rules and good working practices. Previous qualifications do not replace preparation for the actual work."
        },
        {
          "title": "RAMP before you start",
          "text": "Use RAMP to plan your work:",
          "steps": [
            "Recognize the hazards: identify what could cause harm.",
            "Assess the risks: consider how harm could occur during this task.",
            "Minimize the risks: choose suitable controls.",
            "Prepare for emergencies: know what to do if something goes wrong."
          ],
          "after": "Repeat this check when the procedure, quantities, equipment or conditions change."
        },
        {
          "title": "Speak up and pause",
          "text": "Pause when instructions are missing, equipment behaves unexpectedly or a control is unavailable. Contact the supervisor or technician instead of improvising. Immediately report damaged equipment, unusual sounds or odors, unsafe behavior, accidents and near misses. If someone lacks required protection, alert them and inform staff. Do not investigate a suspected release by deliberately smelling it.",
          "imsChapter": "1"
        },
        {
          "title": "Everyday behavior",
          "text": "Keep food, drinks, smoking, chewing gum and cosmetics outside the laboratory. Never mouth-pipette or deliberately smell chemicals. Keep benches and exits clear. Store coats, bags, books and other personal items in their assigned areas outside chemical work areas. Label your samples with your name and contents, identify your logbook and belongings, and do not leave samples or personal items unattended. Keep colleagues informed about your work."
        },
        {
          "title": "Supervision and visitors",
          "text": "Use only your own authorized access; do not lend keys or access credentials. Visitors need permission, suitable protection and supervision. Occasional measurements must remain under a trained host’s supervision; independent work requires reading the current IMS protocol, completing the local safety introduction and responsibility record, and equipment/task authorization. Book equipment only after training, keep other users informed and leave lighting on while the room is occupied. Building access does not authorize laboratory work.",
          "imsChapter": "1"
        },
        {
          "title": "Working outside normal hours",
          "text": "Outside-hours requirements apply to every laboratory. Normal laboratory hours are 08:00–18:00 on working days. Work in the laboratory during evenings, nights, weekends or official holidays requires all of the following:",
          "imsChapter": "1",
          "scope": "ut",
          "sourceUrl": "https://www.utwente.nl/en/tnw/intranet/services-and-support/hse/arbo-milieu/booking-laboratory-work-outside-normal-working-hours/",
          "sourceLabel": "Register laboratory work outside normal working hours (UT login required).",
          "after": "Current S&T/HSE requirements take precedence over older manual rules. Office work outside the laboratory is allowed. Acetone, ethanol and IPA are not exceptions to the laboratory requirements.",
          "steps": [
            "Obtain supervisor approval based on a risk assessment for the planned task.",
            "Arrange a trained and authorized buddy. The buddy must meet current HSE eligibility requirements; friends, family, untrained visitors and bachelor’s/master’s students do not qualify as the required second person.",
            "Notify HSE through the required email route, giving both people’s names, roles and planned schedule, and register the work using the HSE form. Registration alone is not permission.",
            "Confirm that the task is permitted. Outside-hours repairs and maintenance, experiments with strong acids or bases, and use of H310/H330 chemicals are prohibited."
          ]
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
      "imsReference": "1.1 and Appendix H",
      "videos": [
        {
          "title": "Behavior",
          "url": "https://www.youtube.com/watch?v=e7VkIuiT1kU",
          "duration": "1:58",
          "producer": "BioNetwork"
        }
      ],
      "image": "marmot-ppe-labeled.jpg",
      "imageAlt": "Safety marmot with leader lines identifying splash goggles, task-appropriate gloves, fastened lab coat, long trousers and closed shoes.",
      "imageCaption": "Choose the required eye, hand and clothing protection for the task."
    },
    {
      "title": "Labels and safety information",
      "objective": "Use a label and a safety data sheet to prepare for a task.",
      "sections": [
        {
          "title": "Read the complete label",
          "text": "Check the chemical identity, concentration, hazard statements and precautionary statements. Hazard pictograms flag types of danger; they do not describe every risk or provide a complete procedure. An unlabeled bottle is an unknown substance until an authorized person resolves its identity. Chemicals can have physical, health and environmental hazards; more than one pictogram may apply to the same product.",
          "pictograms": true
        },
        {
          "title": "Safety data sheets",
          "text": "An SDS is a safety data sheet for a substance or mixture. Check the SDS for every chemical you use or plan to use, matching the actual product and concentration. Useful sections include hazards (2), first aid (4), firefighting (5), accidental release (6), handling and storage (7), exposure controls and PPE (8), and stability and reactivity (10). Ask for help with unfamiliar terms.",
          "image": "label-sds-example.svg",
          "imageAlt": "Training label for hydrochloric acid beside selected safety data sheet sections.",
          "imageCaption": "Training example: connect the product label with the matching SDS. These extracts are not a complete supplier label or SDS."
        },
        {
          "title": "Turn information into a plan",
          "text": "Use the SDS to identify the required protection and emergency information. It supports the task assessment explained in the next lessons but cannot account for every reaction, apparatus or operating condition."
        },
        {
          "title": "Signal words and hazard categories",
          "text": "Danger and Warning are signal words indicating different levels of hazard within the labeling system. A lower category number generally indicates a more severe hazard within a given hazard class; do not compare category numbers across different classes. Read hazard and precautionary statements as well as pictograms.",
          "after": "For example, within acute oral toxicity, Category 1 is more severe than Category 4: their hazard statements are “Fatal if swallowed” and “Harmful if swallowed,” respectively. This comparison applies within the same hazard class and exposure route."
        },
        {
          "title": "Make a working mixture identifiable",
          "text": "Every working container must identify its composition and concentration, responsible user, preparation date and required hazards. Include CAS numbers and warning/information stickers where the local labeling system requires them. An experiment card identifies the setup; it does not replace individual container labels.",
          "imsChapter": "2"
        },
        {
          "title": "Hazard and precautionary statements",
          "text": "Hazard (H) statements describe the nature and severity of a chemical’s hazards. Precautionary (P) statements describe prevention and response measures. GHS is implemented in the EU through CLP; H/P statements replaced the old R/S phrases. Read their full wording alongside the pictograms, not only their codes.",
          "imsChapter": "Appendices B–C",
          "example": {
            "title": "Example: hydrochloric acid, 37%",
            "text": "For hydrochloric acid, 37%: H290 means corrosive to metals; H314 means severe skin burns and eye damage; H335 means respiratory irritation. Examples of P statements include P260 (do not breathe vapors/mist), P280 (wear the specified protection), P301+P330+P331 (if swallowed, rinse the mouth and do not induce vomiting), P303+P361+P353 (remove contaminated clothing and rinse skin), P304+P340 (fresh air), P305+P351+P338 (rinse eyes, remove lenses if easy, continue rinsing), and P310 (immediate poison-center/doctor contact). Use the actual supplier wording and the exposure-specific emergency procedure; never enter hazardous air to assist someone."
          }
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
      "imsReference": "2.2 and Appendices B–C",
      "videos": [
        {
          "title": "Chemical Hazards",
          "url": "https://www.youtube.com/watch?v=8queMM7VVfw",
          "duration": "3:54",
          "producer": "BioNetwork"
        }
      ]
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
          "text": "Corrosive substances can damage tissue. Flammable solvents such as acetone, IPA and ethanol release vapors that can ignite away from the container, including at hot surfaces or electrical equipment. Oxidizers can intensify combustion and react violently with organic material. Chlorinated solvents can cause serious health effects and require their separate approved waste route. Toxic and sensitizing substances need controls appropriate to the actual product. Check its label and SDS rather than assuming every chemical in a family behaves alike."
        },
        {
          "title": "Reactivity and stored energy",
          "text": "Mixing incompatible chemicals can generate heat, gas or hazardous products. Heated liquids, pressure systems, vacuum glassware and rotating equipment introduce physical hazards. Inspect apparatus and follow its operating instructions. Never heat a closed system unless the approved equipment and procedure are designed for it."
        },
        {
          "title": "HF needs specific training",
          "text": "Hydrofluoric acid (HF) can cause deep tissue injury and systemic toxicity by disrupting calcium and magnesium balance. Pain may be delayed; a minor-looking exposure must not be dismissed. HF work requires an approved specific procedure, trained supervision and an established emergency plan. Suspected exposure requires immediate emergency assistance and urgent medical evaluation. The same precautions apply to buffered oxide etch (BOE), an HF-containing product. Read the dedicated HF emergency protocol before authorized work. HF attacks glass: only use the approved compatible labware and waste route in the chemical hood."
        },
        {
          "title": "Reactive cleaning mixtures",
          "text": "Aqua regia and piranha solutions are highly hazardous reactive mixtures. They may release heat and harmful gases, react dangerously with organic material and continue reacting in waste containers. Before planning any piranha work, always inform the person responsible for the laboratory and obtain the required approval, training and procedure.",
          "after": "Contact the responsible technician for piranha and aqua regia disposal arrangements. Students must not improvise neutralization, dilution, venting or mixing into routine waste."
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
          "title": "Cryogenic liquids: cold injury and oxygen displacement",
          "text": "Liquid nitrogen and liquid helium can injure skin and eyes through extreme cold, and skin can stick to cold surfaces. Their evaporation produces large volumes of gas that can displace oxygen, even though the gases are nonflammable and chemically inert. A person can become incapacitated without a useful warning smell. Adequate ventilation and the required oxygen monitoring must be established by the assessment. Never enter an oxygen-deficient area to rescue someone; withdraw, warn others and summon trained emergency responders. Cold vapors can also injure eyes and lungs; rapidly expanding gas must never be trapped in a sealed container.",
          "imsChapter": "5"
        },
        {
          "title": "Airborne nanomaterials depend on the material and task",
          "imsChapter": "2–3",
          "text": "A nanomaterial is not automatically airborne just because it is small. Dry powders, loose particles and dust released by scraping, sanding or grinding can create an inhalation exposure; particles bound in an intact coating or solid usually have a different release potential. A suspension can also generate exposure if a process creates droplets or aerosols. Consider the material, its physical form and the actual operation, including cleaning and waste handling. Do not use visible dust, smell or the absence of symptoms to judge safety.",
          "after": "Use the approved enclosure or extraction and handling method established by the assessment. Cleaning and grinding precautions are explained in Safe laboratory work; respiratory protection requires separate selection and training.",
          "sourceUrl": "https://www.cdc.gov/niosh/docs/2012-147/",
          "sourceLabel": "NIOSH: safe laboratory practices for engineered nanomaterials (technical reference). "
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
      "imsReference": "2.2, 2.6 and 5",
      "videos": []
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
          "text": "Can you explain the main hazards? Are the controls available and working? Do you have the right equipment and training? Do you know how to stop safely and summon help? Resolve any gap before beginning.",
          "example": {
            "title": "Example: transferring a flammable solvent",
            "text": "Before an approved transfer, identify the solvent and amount, remove ignition sources, check the required ventilation and compatible container, arrange secondary containment, and know the spill response."
          }
        },
        {
          "title": "Before a new chemical arrives",
          "text": "Before ordering or bringing chemicals or materials from another group, consult the lab manager, supply the SDS, and confirm hazards, quantities, compatible storage, controls and waste arrangements. Only mix chemicals after staff training and approval of the specific combination; select the compatible container before preparation. General solvent-cleaning practice does not authorize another process.",
          "imsChapter": "2.2"
        },
        {
          "title": "Additional S&T requirements for hazardous substances",
          "scope": "ut",
          "text": "The October 2026 S&T notice identifies substances carrying hazard statements including H310 or H330 as activities requiring additional procedures. Before planning work with such substances, consult HSE-TNW and follow the applicable assessment, approval and precautionary requirements. The notice also provides a route to submit urgent experiments to TNW-HSE with an explanation of their necessity; urgency does not establish permission to bypass safety controls.",
          "sourceUrl": "https://www.utwente.nl/en/tnw/intranet/services-and-support/hse/arbo-milieu/",
          "sourceLabel": "TNW HSE: current procedures, forms and safety guidance (UT login required).",
          "imsChapter": "1–2; updated by October 2026 S&T notice"
        },
        {
          "title": "Restricted chemicals and substitution",
          "text": "On the local chemical list, avoid orange-highlighted materials where possible. Red-highlighted materials require reporting to and clearance from the lab manager before use. Avoid carbon tetrachloride where possible. Ask staff to check the current list before planning a restricted material.",
          "imsChapter": "2.2, paragraphs 184–186"
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
      "imsReference": "1.1 and 2.2 (including restricted materials); current S&T/HSE requirements",
      "videos": [
        {
          "title": "Experimenting with Danger",
          "url": "https://www.youtube.com/watch?v=ALBWxGik64A",
          "duration": "First 15 minutes: 0:00–15:00",
          "producer": "US Chemical Safety Board"
        }
      ]
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
          "text": "Wear required laboratory eye protection at all times in IMS chemical laboratories. Use the required side protection, and chemical splash goggles for splash hazards. Prescription glasses require suitable protective overglasses or prescription safety protection. A face shield supplements eye protection. Wear covered legs, closed suitable footwear and required laboratory clothing; shorts, open footwear and high heels are not permitted. Secure long hair and loose items. Contact lenses do not replace eye protection; never adjust them with contaminated hands. Remove or secure jewelry and loose accessories that could snag, trap chemicals or interfere with gloves. Select chemical-resistant clothing for the concentration and quantity handled, using approved supplier compatibility information.",
          "emphasis": "shorts, open footwear and high heels are not permitted"
        },
        {
          "title": "Gloves are chemical-specific",
          "text": "No glove protects against every chemical. Select the actual model, material, thickness and contact time using approved compatibility guidance; color alone does not establish protection. Thin nitrile may be unsuitable for a chemical or prolonged solvent contact. Inspect gloves and replace damaged or contaminated disposable gloves.",
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
            "Place both gloves in the waste stream required for their chemical contamination. Do not reuse disposable gloves.",
            "Wash your hands thoroughly with soap and water after glove removal and before leaving the laboratory."
          ],
          "after": "The principle is gloved hand to contaminated outside, then bare hand to the inside cuff. Glove removal can still contaminate skin, which is why handwashing matters. If a chemical reaches your skin, start the appropriate exposure response rather than treating handwashing as sufficient first aid.",
          "sourceUrl": "https://www.cdc.gov/ebola/hcp/communication-resources/how-to-remove-gloves-safely.html",
          "sourceLabel": "See the CDC glove-removal illustrations (hand technique; chemical waste rules remain local).",
          "stepImages": [
            "glove-removal-1.jpg",
            "glove-removal-2-v2.jpg",
            "glove-removal-3.jpg",
            "glove-removal-4-v2.jpg",
            "glove-removal-5-v2.jpg",
            "glove-removal-6-v2.jpg",
            "glove-removal-7.jpg"
          ]
        },
        {
          "title": "Check and use the fume hood",
          "scope": "ut",
          "text": "Learn the controls and markings on your hood before use. A hood captures hazardous airborne releases; it is not a storage cupboard or protection against an uncontrolled reaction or explosion.",
          "after": "Have the technician demonstrate the actual sash mark, indicator and controls before your first use.",
          "steps": [
            "Check the airflow/status indicator before each use and set the sash at its marked operating position.",
            "Keep your head and body outside the opening. Position work at least 15 cm back from the front opening, following the approved setup. Keep airflow openings clear and avoid overcrowding.",
            "If the indicator is abnormal, an alarm sounds or ventilation fails, stop safely and notify the responsible person."
          ],
          "image": "marmot-fume-hood-v2.jpg",
          "imageAlt": "Safety marmot working at a chemical fume hood with head outside, sash at the marked position, apparatus inside and airflow openings clear.",
          "imageCaption": "Positioning principles. Use the sash marking and approved working zone on your actual hood."
        },
        {
          "title": "Chemical protection and glove layers",
          "text": "In our IMS laboratories, for the chemicals and tasks approved here, the local wet-chemical rule is the designated orange/yellow tri-polymer gloves over nitrile gloves, with the required apron, laboratory overcoat and eye protection. Confirm the approved glove model and compatibility. Tri-polymer gloves may contain natural rubber latex: arrange an approved alternative with the responsible person if you have an allergy. Use the designated outer gloves when handling pure chemicals or strong solutions.",
          "imsChapter": "2",
          "after": "Before use, follow the technician’s demonstrated inspection: use the designated nitrogen-gun setup to gently inflate the reusable glove like a balloon and check for holes or leaks. Do not improvise a high-pressure test or settings. Mark the gloves with your name and date. Replacement every two weeks is recommended; replace earlier for damage, contamination or a task-specific limit. Follow the demonstrated compatible washing/decontamination method before removing reusable gloves, check that all glove fingers have been withdrawn, and keep contaminated rinses in the approved waste route. Do not apply the disposable-glove sequence to reusable outer gloves."
        },
        {
          "title": "A clean bench is not necessarily a chemical fume hood",
          "text": "A clean bench may protect a sample from particles while directing air toward the user. Do not handle hazardous chemicals in it merely because it resembles a fume hood or has airflow. Confirm that the equipment is approved to control the chemical hazards of your task.",
          "imsChapter": "2",
          "scope": "ut"
        },
        {
          "title": "Eye and face protection for grinding",
          "imsChapter": "2–3",
          "text": "Grinding, sanding and abrasive cutting can eject particles or fragments toward the eyes and face. Select impact-rated eye protection appropriate to the task, including the required side protection or goggles. Ordinary prescription glasses and chemical splash protection without a suitable impact rating are not substitutes. When the assessment, equipment instructions or local procedure identifies a face-impact or splash risk, wear a suitable supplementary face shield over the required eye protection; a face shield alone is not sufficient.",
          "after": "Protection does not replace guards, the designated enclosure, dust extraction or training. Confirm the approved tools, material, eye/face protection and containment before starting. A glovebox or an enclosure must be assessed for the actual grinding operation rather than assumed to make every task safe.",
          "sourceUrl": "https://www.osha.gov/training/library/personal-protective-equipment/assessment",
          "sourceLabel": "OSHA eye/face PPE assessment: technical reference, not Dutch regulatory guidance."
        },
        {
          "title": "Door handles are always a no-glove surface",
          "text": "Always remove gloves before touching a door handle, even if they appear clean or have only been used with water, ethanol or acetone. A touched bottle or surface may already be contaminated, so solvent use does not establish cleanliness. This consistent habit prevents transfer to shared surfaces. Follow the approved decontamination and removal method for reusable gloves before touching clean objects.",
          "imsChapter": "2.1 and 2.4"
        },
        {
          "title": "Protection for cryogenic liquids",
          "text": "Cryogen handling requires specific training, suitable eye protection with a supplementary face shield where required, and loose-fitting insulated gloves that can be removed quickly after a spill. Such gloves protect against accidental contact; never immerse your hands in cryogenic liquid. Wear suitable long sleeves, trousers without turn-up cuffs and appropriate footwear. Confirm the actual equipment and protection with the technician before work.",
          "imsChapter": "5, paragraphs 357–360"
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
      "imsReference": "2.1 and 2.4; chapter 5 cryogenic protection",
      "videos": [
        {
          "title": "Proper Dress and PPE",
          "url": "https://www.youtube.com/watch?v=GjAD83B4JaY",
          "duration": "3:08",
          "producer": "BioNetwork"
        }
      ]
    },
    {
      "title": "Safe laboratory work",
      "objective": "Recognize unsafe setup, transfer and housekeeping practices.",
      "sections": [
        {
          "title": "Display the experiment information card",
          "scope": "ut",
          "text": "Display the experiment information card beside the setup so other users and responders can identify ongoing work and contact the experimenter. Complete it before starting:",
          "steps": [
            "Describe the work in Experiment information so another trained person can understand what is taking place.",
            "Enter your name and phone number so the responsible experimenter can be contacted.",
            "Enter the start and end date/time following the group instructions.",
            "List the chemicals used. Use their actual labels and SDSs, together with the task assessment, to identify the relevant hazards.",
            "Select the applicable hazard-symbol checkboxes. Do not treat the symbols alone as a complete description of reaction, equipment or process hazards.",
            "Keep the card visible and update it when the schedule, chemicals or status changes. Follow the group’s handover instructions."
          ],
          "after": "The card does not replace container labels, the SDS, risk assessment or equipment training, and does not authorize unattended work.",
          "image": "experiment-card-hires.jpg",
          "imageAlt": "An IMS experiment card with experiment information, name/phone, start/end times, chemicals and hazard checkboxes.",
          "imageCaption": "Complete the card and display it beside the setup, where other users can read it.",
          "fullSize": true
        },
        {
          "title": "Prepare the workspace",
          "text": "Secure apparatus and keep cables and tubing clear of walkways and heat. Confirm that required controls and the approved shutdown arrangements are available before starting."
        },
        {
          "title": "Prevent contamination",
          "text": "Keep containers closed when not in use, avoid returning excess material to stock, and separate clean items from contaminated equipment. Use the container labels explained in Labels and safety information. Wiping with ethanol or rinsing with water does not establish freedom from every chemical contaminant.",
          "imsChapter": "2"
        },
        {
          "title": "Transport and transfer chemicals",
          "text": "Use suitable transfer tools and stable container support. Carry one hazardous material per hand-carried trip in a closed, labeled compatible container with secondary containment; never put chemicals in your pockets. Plan a secure grip and clear route before lifting. Use the required gloved hand for carrying and a bare hand for door handles. Arrange an approved carrier or trained assistance when needed so protection, grip and containment remain secure. Keep the bottle label upward while pouring so drips do not obscure it."
        },
        {
          "title": "Glassware, tubing and cleaning",
          "text": "Reject cracked or chipped glassware and use glass rated for the intended heating, vacuum or pressure. Glass tubing can break when forced into a stopper and cause deep cuts: obtain a demonstration of the approved tools and technique rather than forcing it. Put broken glass in its designated container, never pick it up with bare hands. Use the approved glassware-cleaning method; aggressive cleaning chemicals require their own assessment and training."
        },
        {
          "title": "Select, clean and return labware",
          "text": "Use the assigned separate sets for clean substrates and dirty samples; never use clean-substrate beakers for etching. The person using labware must clean it and return it to the correct set. Label personal sets and keep their storage boxes outside the chemical laboratory. Rinse bottles and containers in the designated wet bench or fume hood using the approved method for the contents. Where the IMS labware procedure specifies it, thoroughly empty the vessel, rinse with DI water three times, collect contaminated rinses as waste and dry by the demonstrated method before returning it. Do not apply a water rinse to water-incompatible material. Use compatible cleaning agents, preferably water and soap where suitable. Follow the demonstrated tissue/nitrogen drying method and return ware upside down to its assigned place.",
          "imsChapter": "2.2–2.3"
        },
        {
          "title": "Acid dilution and heat",
          "text": "Diluting a concentrated acid with water can release substantial heat. In an approved acid-dilution procedure, acid is added to water, rather than pouring water into concentrated acid, to reduce local overheating and splashing. The required addition rate, cooling, equipment and protection belong in the procedure. Do not apply this rule to arbitrary reactive mixtures."
        },
        {
          "title": "Heat, cooling baths and flames",
          "text": "Keep flammable liquids and vapors away from hot plates, electrical ignition sources and flames; a heater is not safe for a solvent merely because it has no open flame. Hot glass can look cold: use prescribed tools and allow controlled cooling. Plan temperature control before adding reagents: an exothermic reaction can accelerate beyond the available cooling. Never add boiling chips to an already hot liquid; follow the approved method to prevent sudden boiling. Point a heated test tube away from everyone and use the specified holder and heating method. Open flames need specific authorization and sound gas connections. Cryogenic cooling requires the controls and training explained in the hazards and protection lessons."
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
          "text": "Vacuum glassware can implode, and pressurized systems can release stored energy or eject parts. Use equipment rated for the intended conditions, required shielding and approved traps or pressure controls. Never direct compressed air at yourself or another person, and do not use it to clean clothing or skin."
        },
        {
          "title": "Gas cylinders, lines and alarms",
          "text": "Secure cylinders against falling and leave cylinder connection, regulator selection and changes to gas lines to authorized people. Do not alter a line because the gas is described as inert: nitrogen, argon and helium can displace oxygen, and every pressurized system stores energy. Know the gas alarm and the local evacuation response before work. Leave on the instructed alarm, do not silence or bypass it, and do not assume an automatic gas shutoff makes the room safe to re-enter. Follow the designated ventilated storage for local Type II gas cylinders. The local Type I examples include air, nitrogen and noble gases; this classification does not remove their pressure or oxygen-displacement hazards.",
          "imsChapter": "2–3"
        },
        {
          "title": "Electrical equipment and UV",
          "text": "Keep electrical equipment and connections dry, inspect cords and plugs, and report damage or overheating. Know the controls: a stirrer dial and a heater dial may look similar. Disconnect or isolate equipment only as instructed, and do not improvise electrical repairs. UV lamps can injure eyes and skin; use the required enclosure and shielding, and task-specific protection. Ordinary safety glasses are not a guarantee of UV protection."
        },
        {
          "title": "Furnaces and heated materials",
          "text": "Obtain instruction before loading or operating a furnace. Hot components can burn, and heating a sample can release hazardous decomposition products or damage the equipment. Confirm that the sample, temperature program, containment and ventilation are approved. Protect yourself from exposed hot or energized components and use the prescribed handling tools and cooling period. Repairs and servicing belong to authorized staff; do not open or service equipment because the display has been switched off. Use the supplied hearth plate and avoid striking or scraping exposed furnace elements.",
          "imsChapter": "2"
        },
        {
          "title": "Dust, grinding and contaminated residues",
          "text": "Grinding or cleaning a solid can release hazardous dust even when the original sample seems easy to handle. Assess the material and residues before disturbing them, use the designated enclosure or approved controlled method, and collect debris and cleaning materials in the specified waste stream. Do not grind openly, dry-brush contaminated surfaces or blow dust away with compressed gas. Obtain practical instruction in the designated grinding enclosure and cleaning method before use.",
          "imsChapter": "2"
        },
        {
          "title": "Finish the task and leave a safe state",
          "text": "Leave equipment in its prescribed safe state. Many tasks require shutdown, but approved continuing operations may have different instructions. Never switch off safety-critical ventilation or another ongoing experiment simply because you are leaving. Ask when the handover or shutdown arrangement is unclear. Clean the work area, segregate waste, return chemicals and leave equipment ready for the next user. Only leave an operation unattended when the approved procedure permits it and its controls, contact details and handover arrangements are in place."
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
      "imsReference": "2.2–2.3 and 2.7–2.9",
      "videos": [
        {
          "title": "Safe Chemical Handling",
          "url": "https://www.youtube.com/watch?v=uiB8qnlZTAM",
          "duration": "3:44",
          "producer": "BioNetwork"
        },
        {
          "title": "Other General Hazards",
          "url": "https://www.youtube.com/watch?v=q8UiamEWz4Q",
          "duration": "2:38",
          "producer": "BioNetwork"
        }
      ]
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
          "text": "Identify the waste and its designated compatible container before work. Keep incompatible streams separate and use the required label. Close the container cap securely by hand; do not overtighten or force it. Ask the responsible technician if the correct closure or collection container is uncertain. Store chemical-waste canisters in the designated ventilated location.",
          "imsChapter": "2.5 and Appendix E",
          "after": "Reactive or gas-generating waste needs its dedicated technician-approved procedure; do not add it to an ordinary canister or loosen a cap to manage pressure. Unexpected heat, gas or pressure requires stopping work, warning others and obtaining help. Mixing incompatible waste can cause reaction, pressure or fire. Never pour chemical waste into the sink, including small quantities, or ordinary trash."
        },
        {
          "title": "Special waste",
          "text": "Use the designated routes for sharps, broken glass, contaminated solids and chemical packaging. An empty-looking container may still be contaminated and must not enter clean recycling. Put empty chemical packaging in the designated fume-hood collection area, not the storage pantry. Only rinse containers by the approved compatible procedure; collect contaminated rinse water as chemical waste. For unknown residues or unusual items, ask the technician before disposal.",
          "imsChapter": "2"
        },
        {
          "title": "Refrigerated chemical storage",
          "text": "Use a refrigerator or freezer approved for the material. Flammable liquids must not be stored in an ordinary household refrigerator; the unit must be explicitly rated for flammable-material storage. Label containers, provide suitable spill containment and keep incompatible chemicals separated. Never store food or drinks for consumption in a chemical refrigerator."
        },
        {
          "title": "Manage stock after use",
          "text": "Return stock to assigned storage after use; do not leave solvents open or store chemicals in arbitrary drawers. Use designated secondary-containment bins for solvents outside the hood. Tell the responsible technician when supplies are low or finished. Obtain approval before ordering or bringing in replacements, as explained in the pre-start assessment lesson.",
          "imsChapter": "2 and Appendix D"
        },
        {
          "title": "At 90% full, inform the technician",
          "text": "When any chemical-waste container reaches 90% of its capacity, stop adding waste and inform the technician responsible for the laboratory. Do not use the remaining space. Follow a lower marked limit if one applies. Students notify the technician; they do not arrange collection themselves. The technician handles collection and specialized disposal. Confirm the identity and compatibility of an approved alternative container before using it.",
          "imsChapter": "2.5",
          "scope": "ut"
        },
        {
          "title": "Recognize the local waste categories",
          "text": "Use the assigned label and technician-approved route for these six collection categories. Materials within one category may still be incompatible:",
          "imsChapter": "2.5 and Appendix E",
          "steps": [
            "I: acidic/neutral inorganic solutions.",
            "II: alkaline inorganic solutions.",
            "III: halogen-poor organic waste (source chart: less than 0.1% halogens).",
            "IV: halogen-rich organic waste (source chart: more than 0.1% halogens).",
            "V: special waste, including specified contaminated packaging, batteries and mercury-containing items.",
            "VI: extraordinary-risk waste, including specified reactive peroxides and compressed gases; contact the technician for handling and disposal."
          ],
          "after": "Do not guess concentrations, classify an unknown mixture, or use dilution to change its route. The chart does not specify the exact 0.1% boundary: ask the technician. Confirm compatibility and the current collection instructions before adding anything."
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
      "imsReference": "2.2, 2.5 and Appendices D–E",
      "videos": []
    },
    {
      "title": "Prepare for emergencies",
      "objective": "Choose a first response and recognize your limits.",
      "sections": [
        {
          "title": "Know the arrangements",
          "text": "Before work, locate emergency exits, alarm points, extinguishers, first-aid kits, eyewash and safety showers. Know your building and room so responders can find you. Keep routes and emergency equipment accessible."
        },
        {
          "title": "Chemical exposure",
          "text": "For hazardous chemical exposure or suspected hazardous exposure, follow the immediate chemical-specific response and contact a doctor or the appropriate medical service. Start prescribed flushing for a corrosive eye/skin splash without waiting for pain or searching for paperwork. Follow the SDS and responder guidance. Suspected HF exposure needs immediate specialist emergency care even if it seems minor. Do not neutralize chemicals on the body.",
          "after": "Not every contact with a known nonhazardous material requires a doctor. Use the material, exposure route and circumstances to assess it, not symptoms alone. If the substance or hazard is uncertain, promptly seek competent advice and take suspected hazardous exposure seriously; do not dismiss it because it does not hurt."
        },
        {
          "title": "University of Twente emergency contact",
          "text": "In the Netherlands, 112 is the national emergency number for urgent police, fire or ambulance assistance. UT publishes 053 489 2222 (+31 53 489 2222) as its campus emergency number, or 2222 internally. Know both numbers and follow the campus emergency instructions. Give your name, building, room, what happened and any injuries when calling. During orientation, verify how to call from your phone. On a building alarm, follow the evacuation route to the designated assembly point and do not re-enter until authorized. Use the designated evacuation stairs rather than elevators. Close doors/windows only if safe without delay, and check in with the instructor or assembly leader at the assigned meeting point. Never delay evacuation to shut down equipment or fight a fire; take an action only when the emergency procedure permits it and it is safe.",
          "scope": "ut",
          "imsChapter": "1",
          "image": "ut-emergency-sign-current.jpg",
          "imageAlt": "Posted UT emergency sign showing campus emergency number 053-4892222.",
          "imageCaption": "Example of a posted UT emergency sign. Follow the assembly point and instructions posted for your current location.",
          "fullSize": true
        },
        {
          "title": "Use the eyewash and safety shower",
          "text": "Learn how to activate the actual equipment before an incident. For an ordinary liquid chemical splash in the eyes, start flushing immediately, hold the eyelids open and obtain help. Remove contact lenses if readily possible without delaying flushing. For substantial skin or clothing contamination, use the safety shower and remove contaminated clothing while rinsing. General first aid commonly requires at least 15 minutes of flushing, and some chemicals require longer or specific treatment: follow the emergency procedure, SDS and responder instructions.",
          "image": "carre-third-floor-safety-shower.jpg",
          "imageAlt": "Safety shower and pull handle in the third-floor corridor of the Carré building.",
          "imageCaption": "Example: safety shower in the third-floor corridor of the Carré building. Locate and learn to operate the equipment serving your own work area.",
          "fullSize": true
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
          "after": "If smoke blocks your route, stay low and leave by the safe escape route. Never let smoke, heat or firefighting cut off your exit. Practical extinguisher training and the actual unit instructions remain required.",
          "sourceUrl": "https://www.osha.gov/etools/evacuation-plans-procedures/emergency-standards/portable-extinguishers/use",
          "sourceLabel": "Extinguisher technique and limits: OSHA training reference."
        },
        {
          "title": "A spill at the bench and a release beyond it",
          "text": "For a chemical spill outside the workstation, including onto the floor, warn others, keep people clear, withdraw safely if needed and immediately notify the responsible laboratory staff. Do not clean it yourself or assume that a spill kit makes you authorized. For hazardous fumes, unknown material or an emergency, follow the alarm and emergency-help procedure.",
          "imsChapter": "1–2",
          "after": "Only clean a known, assessed small release inside the workstation when you have the required training, instructions and materials. Provide chemical identity and SDS information to responders when safe. Never enter a hazardous area to retrieve belongings or assist beyond your training."
        },
        {
          "title": "Current S&T incident and near-miss procedure",
          "scope": "ut",
          "text": "Report exposures, injuries, spills and near misses, even when no injury is obvious. Hazardous-substance incidents are treated as serious or potentially serious and follow the applicable escalation procedure. Do not resume work without appropriate clearance.",
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
      "imsReference": "1.2–1.3 and current S&T incident instructions",
      "videos": [
        {
          "title": "Safety Equipment",
          "url": "https://www.youtube.com/watch?v=IiHEYtnKfF0",
          "duration": "3:49",
          "producer": "BioNetwork"
        }
      ]
    }
  ],
  "questions": [
    {
      "id": "q1",
      "sourceQuestion": 1,
      "module": 7,
      "prompt": "A hazardous chemical spills onto the floor outside your workstation. You are not a trained spill responder. What should you do?",
      "options": [
        "Use the available spill kit and start cleanup before the liquid spreads.",
        "Warn others, keep clear and immediately notify the responsible lab staff.",
        "Cover the spill with paper towels and report it after the area is dry.",
        "Ask a nearby student to start cleaning while you identify the chemical."
      ],
      "answer": 1,
      "explanation": "Source questions 1 and 10 are combined. Students must not clean a spill outside the workstation. Warn others, avoid exposure and notify responsible staff immediately; use the alarm/emergency-help route when required.",
      "critical": true,
      "sourceQuestions": [
        1,
        10
      ]
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
      "explanation": "This is a hazardous corrosive splash: start emergency flushing immediately and obtain medical assistance. Do not wait for symptoms or neutralize chemicals on the body. The response depends on the substance and route; known nonhazardous contact does not automatically require a doctor.",
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
      "explanation": "Check the procedure-specific safe state, storage and handover. An authorized continuing experiment may need ventilation or cooling left on. Do not switch off safety controls or somebody else’s experiment merely because you are leaving.",
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
        "Use contained bottles, a secure grip and a bare hand on door handles.",
        "Keep apparently clean gloves on both hands when opening the doors.",
        "Carry closed stock bottles by their neck so one hand can open doors.",
        "Hold the bottle against your coat while using one gloved hand at doors."
      ],
      "answer": 0,
      "explanation": "Always remove gloves before touching door handles, even when they appear clean. Retain containment and a secure grip; use an approved carrier or assistance when needed. Familiar solvent use does not establish that bottles or gloves are uncontaminated.",
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
      "explanation": "Aqua regia combines corrosion, harmful gas and reactivity hazards. Obtain the required approval/training and contact the responsible technician for disposal. Always tell the person responsible for the lab before planned piranha work. Do not improvise neutralization or a waste recipe.",
      "critical": true
    }
  ],
  "source": "https://www.acs.org/content/dam/acsorg/about/governance/committees/chemicalsafety/publications/safety-in-academic-chemistry-laboratories-students.pdf",
  "examMinutes": 15,
  "references": [
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
    },
    {
      "title": "NIOSH: engineered nanomaterials in research laboratories",
      "url": "https://www.cdc.gov/niosh/docs/2012-147/"
    },
    {
      "title": "OSHA: eye and face protection assessment (technical reference)",
      "url": "https://www.osha.gov/training/library/personal-protective-equipment/assessment"
    },
    {
      "title": "OSHA: acute toxicity categories and label statements",
      "url": "https://www.osha.gov/hazcom/appendix-c"
    },
    {
      "title": "OSHA: buffered oxide etch terminology",
      "url": "https://www.osha.gov/semiconductors/tables/table2"
    }
  ],
  "primaryManual": "IMS Safety and Lab Usage Protocol"
};
