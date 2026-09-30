/**
 * HACKSPRINTS'26 - 60 PROBLEM STATEMENTS DATASET
 * 12 Domains x 5 Problem Statements = 60 Total
 * Verbatim copy of the official challenge statements.
 */

const PROBLEM_STATEMENTS = [
  {
    "id": "HC-01",
    "domainCode": "HC",
    "domain": "Healthcare",
    "title": "Pre-Surgical Readiness & Schedule Protection",
    "description": "Elective surgeries are routinely delayed or cancelled on the day because a lab result, anesthesia clearance, consent form, or fasting instruction slipped through the cracks between departments — and when one prerequisite fails, the rest of the day's operating list is rarely rearranged in time, so theatre hours that other patients were waiting for are simply lost. What's needed is a system that can keep track of what each patient still needs before surgery, act on gaps on its own, and recognize when a failed prerequisite makes the current schedule unworkable, adjusting it before the delay reaches the operating room.",
    "tags": [
      "Pre-Surgical Readiness",
      "Schedule Protection",
      "OR Optimization",
      "Autonomous Healthcare"
    ]
  },
  {
    "id": "HC-02",
    "domainCode": "HC",
    "domain": "Healthcare",
    "title": "Clinical Trial Patient Matching",
    "description": "Clinical trials frequently miss enrollment targets because eligible patients are buried in unstructured clinical notes, while coordinators manually screen charts against long inclusion and exclusion criteria — and when a protocol is amended, earlier screening decisions are almost never revisited. What's needed is a system that can match patients to trials, be honest about the criteria it cannot confidently judge instead of guessing, and revisit its earlier matches whenever the protocol or the patient's record changes.",
    "tags": [
      "Clinical Trials",
      "Patient Matching",
      "Protocol Analysis",
      "Clinical Notes"
    ]
  },
  {
    "id": "HC-03",
    "domainCode": "HC",
    "domain": "Healthcare",
    "title": "Post-Discharge Care Coordination",
    "description": "Patients are often sent home without confirmed follow-up appointments, medication supply, or home-care support, and the gaps surface only when they return to the emergency room days later — a request being sent is routinely mistaken for a task being done. What's needed is a system that can arrange the services a patient needs after discharge, verify that each one actually happened rather than assuming it did, and step in or escalate to a care coordinator when a step fails or a follow-up is missed.",
    "tags": [
      "Post-Discharge",
      "Care Coordination",
      "Readmission Prevention",
      "Follow-up Tracking"
    ]
  },
  {
    "id": "HC-04",
    "domainCode": "HC",
    "domain": "Healthcare",
    "title": "Prescription Safety & Interaction Screening",
    "description": "A new prescription can interact dangerously with a patient's existing medications, allergies, or lab values, yet busy clinicians and pharmacists cannot cross-check every combination in real time — and a prescription that was safe when written can become unsafe when the patient's record changes afterwards. What's needed is a system that can screen prescriptions against the full patient picture, explain its concerns and suggest safer options, reserve pharmacist attention for genuinely high-risk cases, and keep watching open prescriptions as new information arrives.",
    "tags": [
      "Prescription Safety",
      "Drug Interactions",
      "Pharmacovigilance",
      "Clinical Decision Support"
    ]
  },
  {
    "id": "HC-05",
    "domainCode": "HC",
    "domain": "Healthcare",
    "title": "Hospital Pharmacy Inventory Replenishment",
    "description": "Hospital pharmacies run out of critical drugs while other stock expires unused, and a well-timed purchase order is no guarantee that the supplier will actually deliver — the shortage is often discovered only when a shelf is already empty. What's needed is a system that can anticipate what will be needed, place and follow up on replenishment orders, and adapt when an order is delayed or backordered, so that a supply failure is handled well before it becomes a clinical one.",
    "tags": [
      "Pharmacy Inventory",
      "Supply Chain",
      "Drug Shortage Prevention",
      "Automated Replenishment"
    ]
  },
  {
    "id": "DM-01",
    "domainCode": "DM",
    "domain": "Disaster Management",
    "title": "Early-Warning Alert Dissemination",
    "description": "Disaster warnings are often issued on time yet never reach remote, low-connectivity, or non-smartphone communities, and authorities rarely know who was left uninformed until it is too late. What's needed is a system that can get warnings to people through whatever channels are available, find out whether they really arrived in each area, and change its approach for the places where they did not instead of treating a sent alert as a received one.",
    "tags": [
      "Early-Warning",
      "Alert Dissemination",
      "Low-Connectivity",
      "Emergency Comms"
    ]
  },
  {
    "id": "DM-02",
    "domainCode": "DM",
    "domain": "Disaster Management",
    "title": "Emergency Communications Restoration",
    "description": "When a disaster destroys cell towers and power, responders and residents lose connectivity exactly when coordination matters most, and restoration is often sequenced by urgency of complaints rather than by need — a plan that then breaks when a route is blocked or equipment fails in transit. What's needed is a system that can decide where temporary communication capacity should go first and keep that plan workable as access and conditions on the ground change.",
    "tags": [
      "Comms Restoration",
      "Mesh Networks",
      "Disaster Relief",
      "Resource Dispatch"
    ]
  },
  {
    "id": "DM-03",
    "domainCode": "DM",
    "domain": "Disaster Management",
    "title": "Volunteer & Skills Deployment",
    "description": "Disasters draw large numbers of willing volunteers, but without structure, medical and technical skills sit idle in one place while critical tasks go uncovered in another, and no-shows quietly leave gaps nobody notices until later. What's needed is a system that can match people to tasks in a way that reflects both need and skill, absorb changes such as no-shows without manual reshuffling, and keep volunteers from being overworked to the point of becoming a safety risk.",
    "tags": [
      "Volunteer Deployment",
      "Skills Matching",
      "Workforce Optimization",
      "Disaster Operations"
    ]
  },
  {
    "id": "DM-04",
    "domainCode": "DM",
    "domain": "Disaster Management",
    "title": "Critical Infrastructure Dependency Analysis",
    "description": "A hospital can be structurally intact and still fail because the substation, water plant, or road it depends on is down, and these hidden dependencies are rarely visible to the teams deciding what to restore first — so repairs are made in an order that looks reasonable but leaves essential services offline. What's needed is a system that can understand how critical services depend on one another, identify which failure will cascade furthest, and revise the restoration priorities as repairs are completed or new failures are reported.",
    "tags": [
      "Infrastructure Dependencies",
      "Cascading Failure",
      "Grid Restoration",
      "Service Resilience"
    ]
  },
  {
    "id": "DM-05",
    "domainCode": "DM",
    "domain": "Disaster Management",
    "title": "Missing Persons & Family Reunification",
    "description": "After a disaster, missing-person information is scattered across shelters, hospitals, helplines, and social media, and families spend days searching because no one is reconciling these records against each other — while a wrong match announced too early causes real harm. What's needed is a system that can connect fragmentary records with an honest sense of confidence, refine its matches as more details arrive, and keep a human in the loop before any reunification is confirmed, with personal data handled responsibly throughout.",
    "tags": [
      "Missing Persons",
      "Family Reunification",
      "Record Reconciliation",
      "Human-in-the-Loop"
    ]
  },
  {
    "id": "CS-01",
    "domainCode": "CS",
    "domain": "Cybersecurity",
    "title": "Insider Threat Investigation",
    "description": "Malicious or careless insiders cause some of the most damaging breaches, but behavioral alerts arrive without context, and acting on them carelessly can wrongly accuse an innocent employee — leaving analysts caught between ignoring real risk and creating real harm. What's needed is a system that can investigate a flagged behavior by gathering relevant context, decide whether the evidence justifies escalation, and give a human reviewer a balanced evidence trail, without ever taking punitive action on its own.",
    "tags": [
      "Insider Threat",
      "Behavioral Context",
      "Evidence Trail",
      "Fair Investigation"
    ]
  },
  {
    "id": "CS-02",
    "domainCode": "CS",
    "domain": "Cybersecurity",
    "title": "Cloud Misconfiguration Remediation",
    "description": "Exposed storage buckets, open network rules, and unencrypted databases cause many cloud data leaks, and they linger unfixed because changing a live configuration by hand risks breaking a service that someone depends on. What's needed is a system that can detect a risky configuration, fix it, confirm that both the exposure is closed and the service still works, and undo and try a safer alternative if its change caused harm.",
    "tags": [
      "Cloud Security",
      "Auto-Remediation",
      "Config Drift",
      "Safe Rollback"
    ]
  },
  {
    "id": "CS-03",
    "domainCode": "CS",
    "domain": "Cybersecurity",
    "title": "Threat Intelligence to Detection Engineering",
    "description": "New attacker techniques are reported every day, but turning that intelligence into working detections is slow manual work, and a rushed detection either misses the technique or buries analysts in false alarms that are then ignored. What's needed is a system that can turn threat reports into detections defenders can trust, measure how well each one actually performs, and keep improving it rather than shipping a first draft and moving on.",
    "tags": [
      "Threat Intelligence",
      "Detection Engineering",
      "Sigma/YARA Rules",
      "False Positive Reduction"
    ]
  },
  {
    "id": "CS-04",
    "domainCode": "CS",
    "domain": "Cybersecurity",
    "title": "Incident Forensics Reconstruction",
    "description": "After a breach, investigators spend days stitching together logs from endpoints, networks, and cloud services to work out what the attacker did, and early conclusions often turn out wrong once more evidence surfaces — by which point decisions have already been made on them. What's needed is a system that can reconstruct the story of an incident from scattered evidence, be clear about how confident it is in each part, and openly revise its account when new evidence contradicts an earlier conclusion.",
    "tags": [
      "Incident Forensics",
      "Timeline Reconstruction",
      "Multi-Source Logs",
      "Evidence Graph"
    ]
  },
  {
    "id": "CS-05",
    "domainCode": "CS",
    "domain": "Cybersecurity",
    "title": "Third-Party Security Assessment",
    "description": "Organizations send lengthy security questionnaires to vendors but have little capacity to check whether the answers are true, so a vendor's self-reported security posture is often accepted on faith — and a supplier breach then becomes the organization's own. What's needed is a system that can test what vendors claim against available evidence, follow up on answers that are inconsistent or unsupported, and give a risk picture that clearly separates what has been verified from what has merely been stated.",
    "tags": [
      "Third-Party Risk",
      "Vendor Assessment",
      "Evidence Verification",
      "Supply Chain Security"
    ]
  },
  {
    "id": "SC-01",
    "domainCode": "SC",
    "domain": "Smart City",
    "title": "Public Event Crowd & Mobility Management",
    "description": "Large festivals, matches, and processions strain crowd safety, transit, roads, and emergency access all at once, yet the teams involved usually work from a plan written days earlier — and a single blocked gate or overcrowded platform can undo it within minutes. What's needed is a system that can follow how an event is unfolding, coordinate the responses of the different teams involved, and adjust crowd and transport plans as conditions change rather than sticking to the original script.",
    "tags": [
      "Crowd Management",
      "Mobility Planning",
      "Public Safety",
      "Transit Coordination"
    ]
  },
  {
    "id": "SC-02",
    "domainCode": "SC",
    "domain": "Smart City",
    "title": "Water Network Leak Management",
    "description": "Municipal water networks lose a large share of supply to leaks that run for weeks because pressure anomalies are noticed late and their exact location is unclear — and a repair that does not fix the problem often goes unnoticed. What's needed is a system that can work out where a leak probably is, get it fixed, check that the network actually recovered afterwards, and look again somewhere else if it did not.",
    "tags": [
      "Water Network",
      "Leak Detection",
      "Pressure Monitoring",
      "Municipal Utilities"
    ]
  },
  {
    "id": "SC-03",
    "domainCode": "SC",
    "domain": "Smart City",
    "title": "Permit & Licence Application Processing",
    "description": "Citizens and small businesses wait weeks for building permits and trade licences, largely because incomplete applications bounce between departments and each reviewer repeats the same checks — and applicants only learn what was missing after long silences. What's needed is a system that can move applications along by checking them, getting missing information from applicants directly, and knowing which cases it can fast-track and which genuinely need an official's judgment.",
    "tags": [
      "Permit Processing",
      "Civic Services",
      "Document Verification",
      "Smart Governance"
    ]
  },
  {
    "id": "SC-04",
    "domainCode": "SC",
    "domain": "Smart City",
    "title": "Stormwater Drain Maintenance Planning",
    "description": "Urban flooding is often caused by clogged drains that could have been cleared beforehand, but maintenance follows a fixed calendar rather than where blockages are really building up — and a plan made before a forecast changes is soon out of date. What's needed is a system that can work out which drains are most at risk, plan cleaning accordingly, and re-plan as rainfall forecasts, complaints, or crew availability change.",
    "tags": [
      "Stormwater Drainage",
      "Flood Prevention",
      "Predictive Maintenance",
      "Urban Infrastructure"
    ]
  },
  {
    "id": "SC-05",
    "domainCode": "SC",
    "domain": "Smart City",
    "title": "City Scenario Planning & Impact Testing",
    "description": "Planners decide to close a road, change a bus route, or rezone an area without a reliable way to test the consequences first, so side effects are discovered only after residents feel them — and the lessons from what actually happened rarely make it back into the next decision. What's needed is a system that can explore what-if options for decision-makers, recommend among them with clear trade-offs, and compare real outcomes against its own predictions so that it improves with each decision.",
    "tags": [
      "Scenario Planning",
      "Digital Twin",
      "Urban Impact Analysis",
      "Policy Simulation"
    ]
  },
  {
    "id": "AG-01",
    "domainCode": "AG",
    "domain": "Agriculture",
    "title": "Livestock Health Monitoring & Vet Dispatch",
    "description": "Smallholder dairy and livestock farmers often notice illness only after an animal is visibly sick, by which point milk yield is lost and the infection may have spread through the herd — and rural veterinarians cannot visit every farm quickly. What's needed is a system that can spot early signs of trouble from the signals available on a farm, decide which cases are urgent, coordinate a vet visit or guidance, and follow up to see whether the animal actually recovered.",
    "tags": [
      "Livestock Health",
      "Veterinary Triage",
      "Dairy Yield Protection",
      "Animal Welfare"
    ]
  },
  {
    "id": "AG-02",
    "domainCode": "AG",
    "domain": "Agriculture",
    "title": "Drone-Based Field Scouting",
    "description": "Scouting large fields on foot is slow, and drone flights flown on a fixed pattern miss the areas that matter most — while a mission that runs into wind, low battery, or unclear imagery usually just ends. What's needed is a system that can decide where to look and what it is seeing, and adapt the mission as it goes, so that suspicious patches get a closer look rather than being left to the next scheduled pass.",
    "tags": [
      "Drone Scouting",
      "Precision Agriculture",
      "Adaptive Flight Path",
      "Crop Health Analysis"
    ]
  },
  {
    "id": "AG-03",
    "domainCode": "AG",
    "domain": "Agriculture",
    "title": "Farm Input Procurement & Group Buying",
    "description": "Smallholder farmers pay more for seeds, fertilizer, and pesticides because they buy in small quantities at the worst times, and a stock-out during planting season can derail an entire crop cycle — with no time left to recover once it is discovered. What's needed is a system that can pool farmers' needs, obtain and compare offers, place orders, and find another route when a supplier delays or cannot deliver.",
    "tags": [
      "Input Procurement",
      "Group Buying",
      "Supply Aggregation",
      "Farmer Economics"
    ]
  },
  {
    "id": "AG-04",
    "domainCode": "AG",
    "domain": "Agriculture",
    "title": "Harvest Labor & Machinery Scheduling",
    "description": "Harvest windows are short, and crops are lost when labor gangs and machines are double-booked, arrive late, or are stopped by rain — while a change to one booking quietly breaks several others. What's needed is a system that can coordinate people and equipment across many farms according to when crops are actually ready, and repair the whole plan, not just one booking, when weather or a breakdown intervenes.",
    "tags": [
      "Harvest Scheduling",
      "Machinery Sharing",
      "Labor Coordination",
      "Weather Adaptation"
    ]
  },
  {
    "id": "AG-05",
    "domainCode": "AG",
    "domain": "Agriculture",
    "title": "Crop Rotation & Soil Health Planning",
    "description": "Repeating the same crop depletes soil and builds up disease, yet farmers rarely have a multi-season plan, and soil test results tend to be filed away rather than acted upon. What's needed is a system that can build a long-term plan for a field, keep it honest as new soil, weather, or market information arrives, and explain each change in terms a farmer can act on.",
    "tags": [
      "Crop Rotation",
      "Soil Health",
      "Nutrient Management",
      "Sustainable Farming"
    ]
  },
  {
    "id": "LC-01",
    "domainCode": "LC",
    "domain": "Legal & Compliance",
    "title": "Regulatory Change Impact Analysis",
    "description": "Regulations change constantly, and compliance teams often learn of a relevant amendment late, then spend weeks working out which policies, processes, and contracts it touches — and an interpretation made in a hurry may quietly turn out to be wrong. What's needed is a system that can track regulatory changes, work out what they mean for the organization, propose the updates required, and hand genuinely ambiguous interpretations to counsel rather than picking one silently.",
    "tags": [
      "Regulatory Change",
      "Impact Analysis",
      "Policy Tracking",
      "Compliance Mapping"
    ]
  },
  {
    "id": "LC-02",
    "domainCode": "LC",
    "domain": "Legal & Compliance",
    "title": "E-Discovery Document Review",
    "description": "Litigation review means sorting hundreds of thousands of documents into responsive, non-responsive, and privileged, and mistakes in either direction are costly — missed evidence on one side, accidentally disclosed privileged material on the other. What's needed is a system that can classify documents at scale, know which calls it is unsure of and route those to human reviewers, and learn from reviewer corrections instead of repeating the same errors.",
    "tags": [
      "E-Discovery",
      "Document Review",
      "Privilege Identification",
      "Litigation Support"
    ]
  },
  {
    "id": "LC-03",
    "domainCode": "LC",
    "domain": "Legal & Compliance",
    "title": "Data Subject Access Request Fulfilment",
    "description": "Companies must respond to data access and deletion requests within a legal deadline, yet a person's data is scattered across many systems and nobody can be sure the search was complete — a gap that is discovered only after the deadline has passed. What's needed is a system that can carry a request from verification through to response, check that it found everything it should have, protect other people's information along the way, and raise the alarm early when a deadline is at risk.",
    "tags": [
      "DSAR Fulfilment",
      "Privacy Compliance",
      "Data Discovery",
      "PII Redaction"
    ]
  },
  {
    "id": "LC-04",
    "domainCode": "LC",
    "domain": "Legal & Compliance",
    "title": "Compliance Filing & Deadline Management",
    "description": "Businesses operating across jurisdictions face a maze of recurring filings, renewals, and reporting deadlines, and a single missed or rejected filing can mean penalties or loss of a licence — yet \"submitted\" is often mistaken for \"accepted.\" What's needed is a system that can keep track of what is due, prepare what is needed, confirm that each filing was actually accepted, and escalate to a responsible person when something is at risk.",
    "tags": [
      "Filing Management",
      "Statutory Deadlines",
      "Jurisdictional Compliance",
      "Automated Auditing"
    ]
  },
  {
    "id": "LC-05",
    "domainCode": "LC",
    "domain": "Legal & Compliance",
    "title": "Legal Citation & Draft Verification",
    "description": "Legal drafts and briefs can contain misquoted passages, citations to overruled cases, or authorities that do not say what the draft claims, and checking every reference by hand is slow enough that some slip through — and every later edit can silently reintroduce the problem. What's needed is a system that can verify the authorities a draft relies on, flag those that are missing, misrepresented, or no longer good law, and re-verify as the draft changes.",
    "tags": [
      "Citation Verification",
      "Draft Integrity",
      "Shepardizing/KeyCiting",
      "Legal Brief Review"
    ]
  },
  {
    "id": "SE-01",
    "domainCode": "SE",
    "domain": "Software Engineering",
    "title": "Legacy Code Migration",
    "description": "Migrating old modules to a new language or framework is slow and risky, because behavior that nobody documented can silently change during translation — and a migration that passes a quick review may still break in production. What's needed is a system that can migrate code while preserving what it actually does, gain and demonstrate confidence in its own work, and report honestly which parts it could not migrate reliably.",
    "tags": [
      "Code Migration",
      "Legacy Modernization",
      "Behavior Preservation",
      "Automated Refactoring"
    ]
  },
  {
    "id": "SE-02",
    "domainCode": "SE",
    "domain": "Software Engineering",
    "title": "Bug Report Triage & Reproduction",
    "description": "Bug trackers fill with duplicate, vague, and unreproducible reports, and engineers lose hours working out what a report even means — while genuinely serious defects wait in the same queue as trivial ones. What's needed is a system that can make sense of incoming reports, try to reproduce them, group related ones, and route each to the right owner with a justified priority, revising its judgment when new evidence about a bug arrives.",
    "tags": [
      "Bug Triage",
      "Reproduction Synthesis",
      "Issue Routing",
      "Deduplication"
    ]
  },
  {
    "id": "SE-03",
    "domainCode": "SE",
    "domain": "Software Engineering",
    "title": "Documentation Synchronization",
    "description": "Documentation quietly drifts away from the code it describes, and developers lose time following instructions and examples that no longer work — a problem that grows with every release. What's needed is a system that can notice when a change makes documentation stale, update it, check that the documented examples still behave as described, and flag places where the intended behavior is unclear rather than guessing.",
    "tags": [
      "Documentation Drift",
      "Code-Doc Sync",
      "Example Verification",
      "API Docs"
    ]
  },
  {
    "id": "SE-04",
    "domainCode": "SE",
    "domain": "Software Engineering",
    "title": "Merge Conflict Resolution",
    "description": "Merge conflicts in long-lived branches consume developer time, and a conflict resolved incorrectly can compile cleanly while silently breaking behavior — a mistake that surfaces only later, far from its cause. What's needed is a system that can resolve conflicts by understanding what each side was trying to achieve, verify that the merged result still behaves correctly, and hand back the conflicts it cannot resolve with confidence.",
    "tags": [
      "Merge Conflicts",
      "Semantic Resolution",
      "Git Automation",
      "AST Validation"
    ]
  },
  {
    "id": "SE-05",
    "domainCode": "SE",
    "domain": "Software Engineering",
    "title": "Progressive Release Safety",
    "description": "New releases are increasingly rolled out gradually, but deciding whether to widen, pause, or reverse a rollout depends on someone watching the right signal at the right moment — and a regression noticed hours late has already reached many users. What's needed is a system that can watch a staged rollout, decide when it is safe to expand or necessary to halt, and explain which evidence drove each decision.",
    "tags": [
      "Canary Releases",
      "Rollout Safety",
      "Telemetry Monitoring",
      "Automated Rollback"
    ]
  },
  {
    "id": "EN-01",
    "domainCode": "EN",
    "domain": "Environment",
    "title": "Ecological Restoration Planting Planner",
    "description": "Tree-planting and restoration drives often report how many saplings were planted but not how many survived, because species were poorly matched to sites and nobody followed up after the ceremony — and a failed planting is repeated the following year. What's needed is a system that can plan what to plant where, track how the plantings are actually doing, and change species, sites, or care when the evidence shows the original plan is not working.",
    "tags": [
      "Ecological Restoration",
      "Reforestation",
      "Survival Tracking",
      "Habitat Matching"
    ]
  },
  {
    "id": "EN-02",
    "domainCode": "EN",
    "domain": "Environment",
    "title": "Microgrid Energy Management",
    "description": "Community microgrids combining solar, storage, and grid supply waste energy or suffer outages because their plans rest on forecasts that are often wrong by afternoon, and a single equipment fault can upset the whole schedule. What's needed is a system that can decide how generation, storage, and demand should be balanced, and re-plan as weather, demand, or equipment conditions change while protecting essential loads.",
    "tags": [
      "Microgrid",
      "Renewable Energy",
      "Battery Dispatch",
      "Load Balancing"
    ]
  },
  {
    "id": "EN-03",
    "domainCode": "EN",
    "domain": "Environment",
    "title": "Wildlife Poaching Monitoring",
    "description": "Rangers cannot watch every boundary of a large reserve, and the camera and acoustic data that might reveal poaching is reviewed too late or not at all — while a single false alarm can send a patrol far from where it is really needed. What's needed is a system that can recognize likely poaching activity, prioritize what rangers should respond to, and adjust patrols as new detections arrive, with humans always making the field decisions.",
    "tags": [
      "Wildlife Conservation",
      "Anti-Poaching",
      "Acoustic Sensors",
      "Patrol Optimization"
    ]
  },
  {
    "id": "EN-04",
    "domainCode": "EN",
    "domain": "Environment",
    "title": "Illegal Land-Use Change Detection",
    "description": "Illegal clearing of forests, wetlands, and protected land is usually discovered long after the damage is done, because nobody can inspect every area regularly — and an alarm raised on weak evidence quickly loses the trust of the officials who must act on it. What's needed is a system that can find suspicious change early, confirm it before raising a flag, and pass along only well-supported cases with the evidence attached.",
    "tags": [
      "Land-Use Monitoring",
      "Satellite Remote Sensing",
      "Deforestation Prevention",
      "Wetland Protection"
    ]
  },
  {
    "id": "EN-05",
    "domainCode": "EN",
    "domain": "Environment",
    "title": "Environmental Clearance Application Review",
    "description": "Environmental clearance applications arrive as long technical reports, and reviewers under time pressure can miss missing studies, inconsistent figures, or claims that contradict the project's own data — with consequences that only appear once construction begins. What's needed is a system that can examine an application for completeness and internal consistency, follow up with applicants on gaps, and direct reviewers to the issues that genuinely deserve their attention.",
    "tags": [
      "Environmental Clearance",
      "EIA Review",
      "Report Consistency",
      "Regulatory Audit"
    ]
  },
  {
    "id": "TR-01",
    "domainCode": "TR",
    "domain": "Transportation",
    "title": "Airline Disruption Recovery",
    "description": "A single delayed aircraft or crew member can cascade across an airline's network, stranding passengers and breaking crew-duty limits, while recovery decisions are still made by hand under intense time pressure — and a fix for one flight often creates problems for the next. What's needed is a system that can recover aircraft, crew, and passenger plans after a disruption within the rules, and keep revising the recovery as further delays are reported.",
    "tags": [
      "Airline Recovery",
      "Crew Scheduling",
      "Disruption Management",
      "Fleet Rescheduling"
    ]
  },
  {
    "id": "TR-02",
    "domainCode": "TR",
    "domain": "Transportation",
    "title": "Employee Shuttle & School Bus Routing",
    "description": "Fixed shuttle and school bus routes waste time and fuel, and they fall apart whenever riders are absent, a vehicle is unavailable, or a road is blocked — leaving riders waiting without knowing what changed. What's needed is a system that can plan pickups around who is actually travelling that day, adapt the remaining route when something goes wrong, and keep riders informed of new pickup times.",
    "tags": [
      "Dynamic Routing",
      "Fleet Optimization",
      "Commute Coordination",
      "Real-Time ETA"
    ]
  },
  {
    "id": "TR-03",
    "domainCode": "TR",
    "domain": "Transportation",
    "title": "Last-Mile Delivery Exception Handling",
    "description": "Failed deliveries caused by wrong addresses, absent recipients, or inaccessible locations drive up cost and frustrate customers, and most are handled by a rider's on-the-spot guess — with the same parcel often failing a second and third time. What's needed is a system that can anticipate and resolve delivery problems by reaching the recipient, offering workable alternatives, and trying a different approach when the first one does not succeed.",
    "tags": [
      "Last-Mile Delivery",
      "Delivery Exceptions",
      "Address Resolution",
      "Customer Coordination"
    ]
  },
  {
    "id": "TR-04",
    "domainCode": "TR",
    "domain": "Transportation",
    "title": "Driver Fatigue & Trip Safety Management",
    "description": "Fatigue is a leading contributor to serious road accidents in long-haul and night driving, yet fleet managers usually learn about it only after an incident, and generic reminders to take a break are routinely ignored. What's needed is a system that can recognize rising fatigue risk from what is known about a trip and a driver, intervene in a way that actually changes what happens, and escalate to a dispatcher when its first intervention does not help.",
    "tags": [
      "Driver Fatigue",
      "Fleet Safety",
      "Telematics Risk Scoring",
      "Active Intervention"
    ]
  },
  {
    "id": "TR-05",
    "domainCode": "TR",
    "domain": "Transportation",
    "title": "Port Berth & Container Scheduling",
    "description": "Ports lose efficiency when vessel arrivals shift and berths, cranes, and yard space were planned around a schedule that no longer holds, causing long waits at sea and congestion on land — and one delayed ship can ripple through the days that follow. What's needed is a system that can allocate port resources to arriving vessels and revise the affected allocations across the port, not just for one ship, when an arrival time changes or equipment goes down.",
    "tags": [
      "Port Logistics",
      "Berth Allocation",
      "Container Yard",
      "Maritime Supply Chain"
    ]
  },
  {
    "id": "BO-01",
    "domainCode": "BO",
    "domain": "Business / Operations",
    "title": "Customer Support Resolution",
    "description": "Support teams spend most of their time on repetitive issues while customers wait for answers that could be found in seconds — and an automated answer that is confidently wrong is worse than no answer at all. What's needed is a system that can actually resolve routine customer problems using the company's own tools, recognize when it is unsure and pass the case to a person with full context, and learn from tickets that get reopened.",
    "tags": [
      "Customer Support",
      "Autonomous Resolution",
      "Agent Handoff",
      "Feedback Learning"
    ]
  },
  {
    "id": "BO-02",
    "domainCode": "BO",
    "domain": "Business / Operations",
    "title": "Purchase Requisition Approval & Policy Enforcement",
    "description": "Purchase requests bounce between approvers, get stuck waiting for missing quotes or budget codes, and sometimes slip through without meeting company policy — so employees wait for weeks while finance discovers the violations later. What's needed is a system that can move requests through approval, chase what is missing, check them against policy and budget, and separate routine approvals from the cases that need a person's judgment.",
    "tags": [
      "Purchase Requisitions",
      "Policy Compliance",
      "Procurement Workflow",
      "Budget Auditing"
    ]
  },
  {
    "id": "BO-03",
    "domainCode": "BO",
    "domain": "Business / Operations",
    "title": "Employee Onboarding Orchestration",
    "description": "New hires often lose their first days waiting for accounts, equipment, and access that were requested from separate teams and never confirmed, and no one has a complete picture of what is still outstanding. What's needed is a system that can coordinate onboarding across IT, HR, and facilities, verify that each task was truly completed, and chase or escalate anything blocked before the start date arrives.",
    "tags": [
      "Onboarding Orchestration",
      "Cross-Department Workflows",
      "Access Provisioning",
      "HR Operations"
    ]
  },
  {
    "id": "BO-04",
    "domainCode": "BO",
    "domain": "Business / Operations",
    "title": "Sales Lead Qualification & Follow-Up",
    "description": "Sales teams waste time on unqualified leads while promising ones go cold because follow-up is inconsistent, and a lead that does not reply to the first message is usually treated the same way as one that never opened it. What's needed is a system that can research and qualify leads, engage them in a personalized way, change its approach when a lead is unresponsive, and hand over to a salesperson at the right moment with a clear summary.",
    "tags": [
      "Lead Qualification",
      "Adaptive Follow-up",
      "B2B Sales",
      "Sales Handoff"
    ]
  },
  {
    "id": "BO-05",
    "domainCode": "BO",
    "domain": "Business / Operations",
    "title": "KPI Anomaly & Data Quality Investigation",
    "description": "When a dashboard metric suddenly jumps or drops, teams cannot tell whether the business really changed or a data pipeline broke, and decisions get made on numbers that later prove wrong. What's needed is a system that can investigate an unusual metric, work out whether the cause is real or technical, and make its reasoning and confidence visible to the people relying on the number.",
    "tags": [
      "KPI Anomalies",
      "Data Quality",
      "Root Cause Analysis",
      "Pipeline Diagnostics"
    ]
  },
  {
    "id": "ED-01",
    "domainCode": "ED",
    "domain": "Education",
    "title": "Exam Timetabling & Invigilation Scheduling",
    "description": "Exam schedules must balance student clashes, room capacities, and invigilator availability, and a single late change — a room becoming unavailable, an invigilator dropping out — can unravel large parts of a carefully built timetable. What's needed is a system that can produce a workable schedule under these constraints and repair it with minimal disruption when something changes, explaining exactly what moved and why.",
    "tags": [
      "Exam Timetabling",
      "Constraint Satisfaction",
      "Invigilator Scheduling",
      "Schedule Repair"
    ]
  },
  {
    "id": "ED-02",
    "domainCode": "ED",
    "domain": "Education",
    "title": "Assignment Feedback & Grading Support",
    "description": "Teachers spend hours writing feedback on similar mistakes, and the feedback students receive is often too slow to help them improve — while automated grading that is wrong without saying so erodes trust quickly. What's needed is a system that can assess work against a rubric and give useful feedback, recognize the cases it is unsure about and pass them to the teacher, and align itself with the teacher's corrections over time.",
    "tags": [
      "Grading Support",
      "Formative Feedback",
      "Rubric Evaluation",
      "Teacher Alignment"
    ]
  },
  {
    "id": "ED-03",
    "domainCode": "ED",
    "domain": "Education",
    "title": "Career Pathway & Skill Roadmapping",
    "description": "Students choose courses and projects without a clear picture of which skills their target careers demand, generic advice ignores what they already know, and any plan made once goes out of date as the job market shifts. What's needed is a system that can guide a student toward a realistic path from their current skills and goals, and keep that path relevant as the student progresses and demand changes.",
    "tags": [
      "Career Roadmapping",
      "Skill Gap Analysis",
      "Personalized Learning",
      "Labor Market Trends"
    ]
  },
  {
    "id": "ED-04",
    "domainCode": "ED",
    "domain": "Education",
    "title": "Research Literature Review Assistance",
    "description": "Students and early researchers spend weeks searching for relevant papers, and a review built on the first few results can miss key work or rest on claims that later research contradicts. What's needed is a system that can search for and organize the relevant literature, check that what it reports is actually supported by the sources, and widen or refocus its search as the research question becomes clearer.",
    "tags": [
      "Literature Review",
      "Citation Discovery",
      "Source Verification",
      "Academic Research"
    ]
  },
  {
    "id": "ED-05",
    "domainCode": "ED",
    "domain": "Education",
    "title": "Accessible Learning Content Adaptation",
    "description": "Learners with visual, hearing, or reading difficulties are often handed materials that were never designed for them, and manual conversion into accessible formats does not scale — while an automatic conversion that distorts the meaning can be worse than none. What's needed is a system that can adapt learning material into accessible forms, check the quality of its own output, and flag content where a specialist should decide.",
    "tags": [
      "Accessible Learning",
      "Content Adaptation",
      "Special Needs Education",
      "Semantic Quality Check"
    ]
  },
  {
    "id": "FI-01",
    "domainCode": "FI",
    "domain": "Finance",
    "title": "KYC Onboarding & Periodic Refresh",
    "description": "Customer onboarding stalls when document checks are manual and customers are asked repeatedly for the same missing item, and periodic KYC refreshes are often missed altogether — leaving the institution exposed long after the original check. What's needed is a system that can verify customers smoothly, request only what is truly missing, distinguish straightforward cases from those that need a compliance officer, and trigger fresh verification when a customer's situation changes.",
    "tags": [
      "KYC Verification",
      "Customer Onboarding",
      "Periodic Refresh",
      "Regulatory AML"
    ]
  },
  {
    "id": "FI-02",
    "domainCode": "FI",
    "domain": "Finance",
    "title": "Investment Portfolio Rebalancing Advisory",
    "description": "Retail investors' portfolios drift away from their intended risk level as markets move, but most people rebalance only after a sharp loss, and advice given in calm markets rarely survives a shock. What's needed is a system that can notice when a portfolio has drifted from an investor's goals, propose sensible actions with clear reasoning, and re-evaluate when conditions or circumstances change, leaving the final decision with the investor.",
    "tags": [
      "Portfolio Rebalancing",
      "Risk Tolerance",
      "Asset Allocation",
      "Robo-Advisory"
    ]
  },
  {
    "id": "FI-03",
    "domainCode": "FI",
    "domain": "Finance",
    "title": "SME Cash-Flow Forecasting & Working Capital Advisory",
    "description": "Small businesses often run into cash shortfalls that were foreseeable weeks earlier, because receivables, payables, and seasonal swings are tracked in different places and a forecast made at the start of the month is soon wrong. What's needed is a system that can forecast a business's cash position, recommend actions to avoid a shortfall, and revise its outlook as invoices, payments, and sales come in.",
    "tags": [
      "Cash-Flow Forecasting",
      "Working Capital",
      "SME Advisory",
      "Liquidity Management"
    ]
  },
  {
    "id": "FI-04",
    "domainCode": "FI",
    "domain": "Finance",
    "title": "Payment Failure Recovery",
    "description": "Merchants lose sales when legitimate payments fail because of bank errors, timeouts, or abandoned checkouts, and retrying blindly can cause double charges — so many failures are simply written off. What's needed is a system that can work out why a payment failed, choose a safe way to recover it, confirm the outcome, and know when to stop and involve a person, particularly when there is a risk of duplicate charges or fraud.",
    "tags": [
      "Payment Recovery",
      "Transaction Retries",
      "Fraud Safeguards",
      "Checkout Conversion"
    ]
  },
  {
    "id": "FI-05",
    "domainCode": "FI",
    "domain": "Finance",
    "title": "Financial Statement Consistency Review",
    "description": "Analysts reviewing a company's filings must reconcile figures across statements, notes, and management commentary, and inconsistencies that hint at errors or aggressive accounting are easy to miss — especially when they only become visible by comparing documents. What's needed is a system that can cross-check figures within and across filings, point to real discrepancies with evidence, tell them apart from benign differences, and update its findings as more documents are provided.",
    "tags": [
      "Financial Statement Review",
      "Cross-Statement Reconciliation",
      "Audit Quality",
      "SEC/MCA Filings"
    ]
  }
];

// Normalize tags for all problem statements
PROBLEM_STATEMENTS.forEach(ps => {
  if (!ps.tags || !Array.isArray(ps.tags)) {
    ps.tags = ["Autonomous", "Agentic AI", ps.domain];
  }
});

/**
 * Startup Validation for Problem Statements Dataset
 * Validates total = 60 and each of the 12 domains has exactly 5 statements.
 */
function validateProblemStatements() {
  const expectedDomains = ['HC', 'DM', 'CS', 'SC', 'AG', 'LC', 'SE', 'EN', 'TR', 'BO', 'ED', 'FI'];
  const domainCounts = {};
  
  expectedDomains.forEach(code => { domainCounts[code] = 0; });

  PROBLEM_STATEMENTS.forEach(ps => {
    if (domainCounts[ps.domainCode] !== undefined) {
      domainCounts[ps.domainCode]++;
    } else {
      console.error(`[HackSprint Data Error] Unknown domainCode: ${ps.domainCode} in statement ${ps.id}`);
    }
  });

  let hasError = false;
  if (PROBLEM_STATEMENTS.length !== 60) {
    console.error(`[HackSprint Data Error] Total problem statements must be 60, but found ${PROBLEM_STATEMENTS.length}`);
    hasError = true;
  }

  expectedDomains.forEach(code => {
    if (domainCounts[code] !== 5) {
      console.error(`[HackSprint Data Error] Domain ${code} expected 5 statements, but found ${domainCounts[code]}`);
      hasError = true;
    }
  });

  return !hasError;
}

// Browser and Node.js exports
if (typeof window !== 'undefined') {
  window.PROBLEM_STATEMENTS = PROBLEM_STATEMENTS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PROBLEM_STATEMENTS, validateProblemStatements };
}
