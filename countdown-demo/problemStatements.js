/**
 * HACKSPRINT '26 — OFFICIAL PROBLEM STATEMENTS DATASET
 * 12 Domains x 5 Problem Statements = 60 Total
 * Pure JavaScript Dataset (Browser & Vanilla JS compatible)
 * Verbatim copy of the official challenge statements.
 */

const DOMAINS_DATA = [
  { code: "HC", name: "Healthcare", color: "#00f0ff", count: 5, icon: "🏥" },
  { code: "DM", name: "Disaster Management", color: "#ef4444", count: 5, icon: "🚨" },
  { code: "CS", name: "Cybersecurity", color: "#d946ef", count: 5, icon: "🛡️" },
  { code: "SC", name: "Smart City", color: "#06b6d4", count: 5, icon: "🏙️" },
  { code: "AG", name: "Agriculture", color: "#10b981", count: 5, icon: "🌱" },
  { code: "LC", name: "Legal & Compliance", color: "#a855f7", count: 5, icon: "⚖️" },
  { code: "SE", name: "Software Engineering", color: "#38bdf8", count: 5, icon: "💻" },
  { code: "EN", name: "Environment", color: "#22c55e", count: 5, icon: "🌿" },
  { code: "TR", name: "Transportation", color: "#f97316", count: 5, icon: "🚆" },
  { code: "BO", name: "Business / Operations", color: "#f59e0b", count: 5, icon: "💼" },
  { code: "ED", name: "Education", color: "#ec4899", count: 5, icon: "🎓" },
  { code: "FI", name: "Finance", color: "#fbbf24", count: 5, icon: "🪙" }
];

const PROBLEM_STATEMENTS_DATA = [
  // --------------------------------------------------
  // HEALTHCARE — HC
  // --------------------------------------------------
  {
    id: "HC-01",
    domainCode: "HC",
    domain: "Healthcare",
    title: "Autonomous Clinical Triage & Emergency Response",
    description: "Emergency rooms and telehealth queues routinely misjudge patient severity, causing critical delays for high-risk cases while low-risk cases consume scarce resources — and when a planned resource like an ICU bed unexpectedly becomes unavailable mid-response, care plans are rarely adjusted in time, turning a scheduling gap into a life-threatening delay. What's needed is a system that can accurately triage patients and recognize the moment its own plan becomes unworkable, adjusting course before the delay compounds."
  },
  {
    id: "HC-02",
    domainCode: "HC",
    domain: "Healthcare",
    title: "Autonomous Insurance Claim Adjudication",
    description: "Manual claim review is slow, and patients often wait weeks only to be rejected over a fixable documentation gap, even though many claims are actually straightforward. What's needed is a system that can adjudicate claims against policy rules, request missing documentation on its own, and draw a defensible line between what it can safely approve or deny and what genuinely needs a human adjudicator — with a full audit trail justifying every outcome, since an opaque denial is a real compliance liability in this space."
  },
  {
    id: "HC-03",
    domainCode: "HC",
    domain: "Healthcare",
    title: "Autonomous Medication Adherence Coach",
    description: "Non-adherence to prescriptions is one of the leading causes of hospital readmission, especially among chronic-illness patients, yet most reminder systems simply repeat the same nudge regardless of whether it's actually working. What's needed is a system that can detect missed-dose patterns and recognize when its own intervention isn't improving adherence — switching to a different strategy, such as time-shifted reminders, caregiver involvement, or clinician escalation, rather than repeating a failed approach indefinitely."
  },
  {
    id: "HC-04",
    domainCode: "HC",
    domain: "Healthcare",
    title: "Autonomous Mental Health Check-in & Escalation",
    description: "Mental health platforms often fail to catch a user deteriorating between scheduled sessions, since check-ins happen on a fixed calendar regardless of how someone is actually doing. What's needed is a system that can track sentiment signals over time, adjust how often it checks in based on what it observes, and escalate to a human counselor the moment risk signals cross a defined threshold — with a transparent, auditable reasoning trail throughout, since full automation of the actual crisis response is inappropriate here and the system's role is escalation, not treatment."
  },
  {
    id: "HC-05",
    domainCode: "HC",
    domain: "Healthcare",
    title: "Autonomous Hospital Bed & Staff Allocation",
    description: "Hospitals frequently over- or under-allocate beds and staff across departments during demand surges, leading to both bottlenecks in one ward and idle capacity in another. What's needed is a system that can plan bed and staffing allocation across departments and recognize when a single disruption — a delayed discharge, an unplanned surge — invalidates several downstream decisions at once, revising the broader allocation rather than patching just the one affected department."
  },

  // --------------------------------------------------
  // DISASTER MANAGEMENT — DM
  // --------------------------------------------------
  {
    id: "DM-01",
    domainCode: "DM",
    domain: "Disaster Management",
    title: "Autonomous Multi-Agent Disaster Response Coordination",
    description: "During a disaster, coordination between evacuation, resource-dispatch, and shelter teams is largely manual, and every hour of delay costs lives. What's needed is a coordination system spanning these three functions that can detect an execution failure as it happens — a blocked route, a shelter reaching capacity — and re-plan across all three together, rather than requiring a human operator to notice the failure and manually redirect each team in turn."
  },
  {
    id: "DM-02",
    domainCode: "DM",
    domain: "Disaster Management",
    title: "Autonomous Crowd-Sourced Disaster Report Verification",
    description: "During floods or earthquakes, social media floods with reports of wildly varying reliability, making it hard for responders to know what to trust and prioritize — and a system that forwards every report is as useless as one that discards the uncertain ones outright. What's needed is a system that can cross-check incoming reports against each other and any available secondary source, revise its confidence as corroborating or contradicting information arrives, and surface only high-confidence, high-severity cases for dispatch while still preserving the lower-confidence ones instead of silently discarding them."
  },
  {
    id: "DM-03",
    domainCode: "DM",
    domain: "Disaster Management",
    title: "Autonomous Relief Resource Allocation",
    description: "Relief supplies like food, water, and medical kits are frequently misallocated across affected zones simply because no one has real-time visibility into shifting need, and a distribution plan made at the start of a disaster is rarely still the right one hours later. What's needed is a system that can plan an initial distribution from zone-level need and supply data, and re-optimize the moment a new urgent need or supply shortfall is reported — with each revised plan measurably better justified than the naive redistribution that came before it."
  },
  {
    id: "DM-04",
    domainCode: "DM",
    domain: "Disaster Management",
    title: "Autonomous Post-Disaster Damage Assessment",
    description: "Damage assessment for insurance payouts and government aid is slow because someone has to manually review every report and image before aid can be released, even when many cases are actually straightforward. What's needed is a system that can classify damage reports and images by severity and cross-reference them against claim or aid records, while drawing a responsible line between cases it can safely auto-process and cases that genuinely need a human reviewer — the real difficulty is drawing that line well, not automating everything."
  },
  {
    id: "DM-05",
    domainCode: "DM",
    domain: "Disaster Management",
    title: "Autonomous Search & Rescue Task Prioritization",
    description: "Search-and-rescue teams often work off static priority lists that don't reflect how a disaster zone changes hour to hour, wasting effort on already-cleared areas while a newly hazardous one goes unranked. What's needed is a system that can rank search zones by survivor-signal and terrain-hazard data, and re-rank the entire queue the instant a zone is cleared or a new hazard is reported — showing its reasoning for every re-prioritization rather than freezing the list at the first pass."
  },

  // --------------------------------------------------
  // CYBERSECURITY — CS
  // --------------------------------------------------
  {
    id: "CS-01",
    domainCode: "CS",
    domain: "Cybersecurity",
    title: "Self-Healing Autonomous Threat Response",
    description: "Security teams are drowning in alert volume, and manual containment is far too slow to stop a fast-spreading threat — and worse, even when containment action is taken, there's rarely any verification that it actually worked, letting a threat persist quietly after a ticket is marked resolved. What's needed is a response system that can act on a detected threat, inspect the outcome of its own action rather than assuming success, and attempt an alternate remediation if the first one didn't actually stop the threat."
  },
  {
    id: "CS-02",
    domainCode: "CS",
    domain: "Cybersecurity",
    title: "Autonomous Phishing Email Triage",
    description: "Employees report hundreds of suspicious emails a day, far more than a security team can manually triage, and treating every borderline case with a coin-flip decision either misses real threats or buries inboxes in false alarms. What's needed is a system that can classify reported emails with confidence, auto-handle the clear-cut cases, and give borderline cases a second, different kind of scrutiny — such as a URL-reputation check — before making a final call, rather than treating every ambiguous case the same as a confident one."
  },
  {
    id: "CS-03",
    domainCode: "CS",
    domain: "Cybersecurity",
    title: "Autonomous Credential Leak Response",
    description: "Leaked credential dumps surface online constantly, and companies are often slow to figure out whether their own users are affected, let alone confirm that a remediation actually happened. What's needed is a system that can check a leaked credential feed against an internal user base, trigger a forced password reset, and verify that the reset actually completed before closing the incident — retrying if the first attempt silently failed instead of assuming it worked."
  },
  {
    id: "CS-04",
    domainCode: "CS",
    domain: "Cybersecurity",
    title: "Autonomous Access Review & Least-Privilege Enforcement",
    description: "Over-privileged accounts are one of the top factors that turn a minor breach into a catastrophic one, yet manual access reviews happen far too infrequently to catch privilege creep before it becomes a liability. What's needed is a system that can audit user-role-permission data, flag accounts holding more access than their role or activity justifies, propose specific revocations, and re-verify compliance after those changes are applied — producing a clear before-and-after picture of the organization's privilege footprint."
  },
  {
    id: "CS-05",
    domainCode: "CS",
    domain: "Cybersecurity",
    title: "Autonomous Vulnerability Patch Prioritization",
    description: "Security teams face thousands of CVEs and cannot patch everything at once, so prioritization is often inconsistent and reactive rather than driven by real exploitability. What's needed is a system that can score real-world exploitability from CVE and asset context, plan a patch order, and re-prioritize the entire queue the moment a new critical CVE is discovered mid-cycle — treating yesterday's plan as provisional rather than fixed once new information arrives."
  },

  // --------------------------------------------------
  // SMART CITY — SC
  // --------------------------------------------------
  {
    id: "SC-01",
    domainCode: "SC",
    domain: "Smart City",
    title: "Autonomous Multi-Agent Urban Systems Orchestration",
    description: "City subsystems like traffic, energy, and water typically operate in silos, which is exactly what causes cascading inefficiency during peak demand or a subsystem failure. What's needed is a system spanning these subsystems that can negotiate resource allocation across them — such as traffic requesting priority power for signals during peak load — and self-correct when a sensor or subsystem failure occurs, without relying on hardcoded fallback rules that only cover the failures someone thought to anticipate."
  },
  {
    id: "SC-02",
    domainCode: "SC",
    domain: "Smart City",
    title: "Autonomous Traffic Signal Optimization",
    description: "Fixed-timing traffic signals cause avoidable congestion, but fully adaptive citywide systems are expensive to deploy, leaving most cities stuck with a rigid schedule that ignores real conditions. What's needed is a system that can dynamically adjust signal timing across a small network of intersections based on real-time flow, and re-optimize the whole network — not just the one affected intersection — the moment an accident or road closure disrupts the pattern."
  },
  {
    id: "SC-03",
    domainCode: "SC",
    domain: "Smart City",
    title: "Autonomous Public Grievance Routing & Escalation",
    description: "Citizen complaints about potholes, garbage, or streetlights routinely get lost or misrouted between city departments, and the process currently depends on a citizen calling back a second time before anything moves. What's needed is a system that can classify incoming complaints, route each to the correct department, track a resolution deadline per ticket, and automatically escalate any ticket that goes unresolved past that deadline — closing the loop without requiring the citizen to follow up themselves."
  },
  {
    id: "SC-04",
    domainCode: "SC",
    domain: "Smart City",
    title: "Autonomous Utility Outage Prediction & Response",
    description: "Utility companies are usually reactive to outages rather than predictive, which means preventable outages still happen regularly, and a forecast made once at the start of a shift quickly goes stale. What's needed is a system that can predict outage-risk zones from grid-load and weather data, recommend preventive action in the highest-risk areas, and revise that risk map as fresh weather data arrives — rather than freezing its assessment at the first prediction."
  },
  {
    id: "SC-05",
    domainCode: "SC",
    domain: "Smart City",
    title: "Autonomous Smart Waste Collection Route Optimization",
    description: "City waste-collection routes are usually fixed schedules that ignore actual bin fill-levels, wasting fuel on near-empty bins while others overflow — and a route planned at the start of the day rarely survives a truck breakdown or an unexpectedly full bin. What's needed is a system that can plan an optimized collection route from fill-level data, and re-plan the remainder of the route mid-day when a disruption occurs, rather than treating the day's route as fixed once generated."
  },

  // --------------------------------------------------
  // AGRICULTURE — AG
  // --------------------------------------------------
  {
    id: "AG-01",
    domainCode: "AG",
    domain: "Agriculture",
    title: "Autonomous Farm Monitoring & Intervention",
    description: "Smallholder farmers usually lack timely, actionable guidance on irrigation and treatment, and that gap alone accounts for significant yield loss every season — made worse when a schedule set once at planting time doesn't account for what actually happens in the field. What's needed is a system that can plan an irrigation and treatment schedule from soil, weather, and imagery data, and revise that schedule when unexpected rainfall or equipment failure occurs — explained in plain language a non-technical farmer could actually act on."
  },
  {
    id: "AG-02",
    domainCode: "AG",
    domain: "Agriculture",
    title: "Autonomous Crop Disease Early-Warning",
    description: "Crop diseases frequently spread undetected until visible damage has already set in, by which point the yield is already compromised, and not every flagged case deserves the same urgency. What's needed is a system that can classify leaf image symptoms for disease, cross-reference a detection against regional outbreak data to judge whether it's part of a wider spread, and escalate only the cases with both high confidence and high spread-risk — with a recommended treatment attached."
  },
  {
    id: "AG-03",
    domainCode: "AG",
    domain: "Agriculture",
    title: "Autonomous Market Price & Sell-Timing Advisory",
    description: "Farmers often sell their crop at the worst possible time simply because they have no visibility into short-term market trends, and a single price forecast made at the start of the season is of little use days or weeks later. What's needed is a system that can track a commodity price feed, predict short-term movement, and revise its sell-or-hold recommendation as new price data comes in — rather than issuing one static verdict and leaving the farmer to guess when the market shifts."
  },
  {
    id: "AG-04",
    domainCode: "AG",
    domain: "Agriculture",
    title: "Autonomous Supply Chain Traceability",
    description: "Buyers and consumers currently have no reliable way to verify a crop batch's origin, treatment history, or handling conditions, which undermines both trust and any premium pricing a farmer might otherwise earn. What's needed is a system that can compile a verifiable traceability record from events across harvest, treatment, transport, and storage, and flag anomalies — such as a temperature excursion during transport — that could compromise the batch, rather than simply logging events without interpreting them."
  },
  {
    id: "AG-05",
    domainCode: "AG",
    domain: "Agriculture",
    title: "Autonomous Crop Insurance Claim Verification",
    description: "Farmers filing crop-damage insurance claims often wait weeks because manual verification against weather and yield records is slow and inconsistent, even when many claims clearly match a covered event. What's needed is a system that can cross-reference a submitted claim against weather data, satellite yield estimates, and policy terms, fast-track claims that clearly match a covered event, and escalate only the genuinely ambiguous cases to a human adjudicator — with a plain-language justification attached to every decision."
  },

  // --------------------------------------------------
  // LEGAL & COMPLIANCE — LC
  // --------------------------------------------------
  {
    id: "LC-01",
    domainCode: "LC",
    domain: "Legal & Compliance",
    title: "Autonomous Contract Compliance Review",
    description: "Legal teams spend hours manually checking contracts against internal policy and regulatory rule sets, and that review time directly delays deal closing — worse, a flagged clause that's cleared after a contract amendment is rarely re-checked, so a \"resolved\" review can quietly go stale. What's needed is a system that can decompose a contract into clauses, check each against a defined rule set, flag ambiguous ones for human review instead of guessing, and re-check any previously cleared clause if a related section of the contract is later amended — rather than treating its first pass as final."
  },
  {
    id: "LC-02",
    domainCode: "LC",
    domain: "Legal & Compliance",
    title: "Autonomous Contract Negotiation Position Tracker",
    description: "Legal teams negotiating a contract over multiple rounds often lose track of which terms have already been conceded, which are still open, and how far a position has drifted from the original ask — especially when several people touch the redlines across rounds. What's needed is a system that can track a contract's terms across successive drafts, identify exactly what changed between versions, and flag when a new redline contradicts a position already agreed to earlier in the negotiation."
  },
  {
    id: "LC-03",
    domainCode: "LC",
    domain: "Legal & Compliance",
    title: "Autonomous Litigation Precedent Relevance Ranker",
    description: "Lawyers preparing a case need to find relevant prior rulings among thousands of precedents, and keyword search surfaces too much noise while missing rulings that are relevant in substance but different in wording. What's needed is a system that can rank precedents by genuine relevance to a case's facts, and revise its ranking as the lawyer narrows the case's legal theory — since a precedent central under one theory may become irrelevant under another."
  },
  {
    id: "LC-04",
    domainCode: "LC",
    domain: "Legal & Compliance",
    title: "Autonomous Whistleblower Report Triage",
    description: "Internal ethics hotlines receive reports of wildly different severity and credibility, and treating a minor policy complaint with the same urgency as a fraud allegation wastes investigative resources while genuine misconduct risks being buried in volume. What's needed is a system that can assess the credibility and severity of an incoming report, route it to the right level of review, and escalate its urgency if a related report corroborates it later."
  },
  {
    id: "LC-05",
    domainCode: "LC",
    domain: "Legal & Compliance",
    title: "Autonomous Trademark & IP Conflict Screening",
    description: "Startups and brand teams frequently file trademark applications that collide with existing marks, discovering the conflict only after months of costly review. What's needed is a system that can screen a proposed trademark against a registry for name, class, and phonetic similarity conflicts, score the likelihood of an office action or opposition, and re-screen automatically if the applicant tweaks the mark or its classification — closing the loop before filing rather than after."
  },

  // --------------------------------------------------
  // SOFTWARE ENGINEERING — SE
  // --------------------------------------------------
  {
    id: "SE-01",
    domainCode: "SE",
    domain: "Software Engineering",
    title: "Self-Healing Autonomous DevOps",
    description: "CI/CD failures usually require manual diagnosis, which slows down release cycles far more than it should, and a fix that isn't actually verified can quietly ship a new problem in place of the old one. What's needed is a system that can diagnose a failed build or test, apply a corrective change, verify that its own fix actually worked by re-running the tests, and attempt an alternate correction if the fix failed or introduced a new regression — rather than finalizing a change on faith."
  },
  {
    id: "SE-02",
    domainCode: "SE",
    domain: "Software Engineering",
    title: "Autonomous Dependency Vulnerability Patching",
    description: "Outdated or vulnerable dependencies remain a top attack vector, but manual patching is slow and carries a real risk of breaking the build, which is often exactly why patches get delayed. What's needed is a system that can identify vulnerable dependencies, plan a safe upgrade path, apply it, and roll the change back automatically if the upgrade breaks something — rather than leaving a broken build for a human to discover later."
  },
  {
    id: "SE-03",
    domainCode: "SE",
    domain: "Software Engineering",
    title: "Autonomous Code Review Assistance",
    description: "Code review backlogs slow down shipping, and reviewers under time pressure often miss style or security issues they'd normally catch. What's needed is a system that can review pull requests against a defined rulebook, flag issues with a clear explanation of why each matters, and re-evaluate a PR after the author pushes a fix to confirm the specific issue was actually resolved — not just touched."
  },
  {
    id: "SE-04",
    domainCode: "SE",
    domain: "Software Engineering",
    title: "Autonomous API Contract Drift Detection",
    description: "Breaking API changes often go unnoticed until they've already caused a downstream production failure, and a single notification doesn't guarantee anyone actually acted on it. What's needed is a system that can detect a breaking schema change the moment it appears, notify dependent services, and verify whether those consumers actually adapted successfully — rather than assuming the notification alone solved the problem."
  },
  {
    id: "SE-05",
    domainCode: "SE",
    domain: "Software Engineering",
    title: "Autonomous Test Coverage Improvement",
    description: "Codebases frequently have critical, under-tested modules that quietly increase regression risk with every release, and a generated test that doesn't actually run is worse than no test at all. What's needed is a system that can find undertested modules from a coverage report, generate new test cases for them, and revise its approach if the generated tests fail to compile or don't meaningfully move the coverage number — rather than reporting success on tests that don't actually work."
  },

  // --------------------------------------------------
  // ENVIRONMENT — EN
  // --------------------------------------------------
  {
    id: "EN-01",
    domainCode: "EN",
    domain: "Environment",
    title: "Autonomous Environmental Hazard Response",
    description: "Pollution events like a chemical spill or illegal dumping are often detected far too late, mainly because nobody is actively analyzing the monitoring data in real time. What's needed is a system that can detect anomalies in sensor feeds, investigate to identify the likely source and severity, and revise its own hypothesis if new incoming data contradicts its initial assessment — with a full reasoning trail explaining the course correction, not just the final answer."
  },
  {
    id: "EN-02",
    domainCode: "EN",
    domain: "Environment",
    title: "Autonomous Carbon Footprint Tracking & Reduction Advisory",
    description: "Companies routinely struggle to accurately track their Scope 1–3 emissions and to identify which reduction actions would actually move the needle, and a recommendation list generated once quickly falls out of date. What's needed is a system that can calculate an emissions footprint from operational data and recommend prioritized reduction actions, adjusting that ranking as new operational data comes in — rather than issuing one static list and leaving it unchanged."
  },
  {
    id: "EN-03",
    domainCode: "EN",
    domain: "Environment",
    title: "Autonomous Wildfire Spread Risk & Resource Pre-Positioning",
    description: "Wildfire response teams often position suppression resources based on a static risk map, but wind and terrain conditions shift fast enough that yesterday's high-risk zone isn't today's. What's needed is a system that can predict a fire's likely spread direction from live weather and terrain data, recommend where to pre-position resources, and revise that prediction as wind conditions change — showing exactly what changed in the forecast and why the recommendation shifted."
  },
  {
    id: "EN-04",
    domainCode: "EN",
    domain: "Environment",
    title: "Autonomous Recycling Contamination Detection",
    description: "Recycling facilities lose entire batches to contamination (food waste, wrong materials mixed in) that isn't caught until it's already at the sorting line, by which point the whole load may need to be landfilled instead. What's needed is a system that can flag a contaminated batch before it reaches the sorting line, and — when a flagged batch turns out to be a false alarm on inspection — adjust its detection threshold so it doesn't keep flagging the same harmless pattern."
  },
  {
    id: "EN-05",
    domainCode: "EN",
    domain: "Environment",
    title: "Autonomous Noise Pollution Source Attribution",
    description: "Urban noise complaints are hard to act on because a single sensor reading doesn't reveal which of several possible sources (construction, traffic, a specific venue) is actually responsible, and issuing a warning to the wrong source damages trust in the system. What's needed is a system that can triangulate a noise event's likely source from multi-sensor data, and revise its attribution as sensor readings from different locations come in — rather than committing to a single source guess from one reading alone."
  },

  // --------------------------------------------------
  // TRANSPORTATION — TR
  // --------------------------------------------------
  {
    id: "TR-01",
    domainCode: "TR",
    domain: "Transportation",
    title: "Autonomous Multi-Modal Commute Planning Agent",
    description: "Commuters juggling multiple transport options (bus, train, rideshare, bike-share) have no single system that adapts a planned route when one leg fails partway through the trip — a missed connection or a cancelled service usually means figuring out the rest of the journey from scratch. What's needed is a system that can plan a multi-leg commute across different transport modes, and re-plan the remaining legs the moment one leg is disrupted mid-journey, accounting for how much time has already elapsed."
  },
  {
    id: "TR-02",
    domainCode: "TR",
    domain: "Transportation",
    title: "Autonomous Public Transit Delay Prediction & Rider Notification",
    description: "Riders regularly experience unannounced delays with zero proactive communication from the transit operator, and a single warning sent early in a delay is often wrong by the time the rider actually needs it. What's needed is a system that can predict delay likelihood from transit and traffic data, proactively notify affected riders, and update that prediction as real-time conditions change — so a rider gets a corrected ETA rather than one stale warning."
  },
  {
    id: "TR-03",
    domainCode: "TR",
    domain: "Transportation",
    title: "Autonomous EV Charging Network Load Balancing",
    description: "EV charging stations face wildly uneven demand, leaving long queues at some stations while others sit completely idle nearby, and a load-balancing plan made once in the morning won't hold as demand shifts through the day. What's needed is a system that can monitor station occupancy and demand, recommend load-balancing actions such as dynamic pricing or rerouting, and adjust those recommendations as demand shifts across the network over time."
  },
  {
    id: "TR-04",
    domainCode: "TR",
    domain: "Transportation",
    title: "Autonomous Vehicle Maintenance Risk Predictor",
    description: "Fleet vehicles are usually serviced on a fixed schedule regardless of actual wear, which means some vehicles get serviced too early (wasting cost) while others fail unexpectedly between services (causing costly downtime). What's needed is a system that can predict a vehicle's failure risk from usage and sensor data, recommend a service window, and revise that recommendation as new usage data comes in — bringing a scheduled service forward if risk signals worsen faster than expected, or pushing it back if they don't."
  },
  {
    id: "TR-05",
    domainCode: "TR",
    domain: "Transportation",
    title: "Autonomous Freight Consolidation & Load Matching",
    description: "Shippers with partial loads and carriers with spare capacity rarely find each other efficiently, leaving trucks running under-capacity while shippers pay more than necessary for dedicated transport. What's needed is a system that can match partial shipments to available carrier capacity across multiple routes, and re-match a shipment if its originally assigned carrier falls through — without leaving the shipment stranded."
  },

  // --------------------------------------------------
  // BUSINESS / OPERATIONS — BO
  // --------------------------------------------------
  {
    id: "BO-01",
    domainCode: "BO",
    domain: "Business / Operations",
    title: "Autonomous Workflow Monitoring & Self-Correcting Operations",
    description: "Business workflows like order processing or inventory management frequently develop silent bottlenecks that nobody notices until they've already caused major delays, and repeating the same fix when it isn't working just wastes more time. What's needed is a system that can detect a bottleneck or shortage in a workflow, execute a corrective action, and try a different corrective action if the first fix doesn't actually resolve the issue — rather than repeating a failed approach."
  },
  {
    id: "BO-02",
    domainCode: "BO",
    domain: "Business / Operations",
    title: "Autonomous Vendor Performance & Risk Monitoring",
    description: "Procurement teams often only discover a vendor's reliability problem, such as late deliveries or a quality drop, after real damage has already been done — and even when a mitigation like activating a backup vendor is triggered, nobody circles back to confirm it actually stabilized things. What's needed is a system that can track vendor performance metrics, flag a declining trend, recommend a mitigation, and reassess the vendor's metrics afterward to confirm the mitigation actually worked — escalating further if the decline continues despite the first intervention."
  },
  {
    id: "BO-03",
    domainCode: "BO",
    domain: "Business / Operations",
    title: "Autonomous Employee Attrition Prediction & Retention Planning",
    description: "Companies typically only recognize an attrition risk after the employee has already resigned, at which point it's too late to intervene. What's needed is a system that can predict attrition risk from engagement signals, plan a retention intervention for high-risk cases, and re-assess the risk score after that intervention to see if it actually worked — rather than assuming an intervention succeeded just because it was attempted."
  },
  {
    id: "BO-04",
    domainCode: "BO",
    domain: "Business / Operations",
    title: "Autonomous Meeting Follow-Up & Accountability",
    description: "Action items from meetings are frequently forgotten or never properly tracked, which quietly costs a team real execution speed, and a task that silently expires past its deadline helps no one. What's needed is a system that can extract action items from a meeting transcript, assign each one, and follow up autonomously — escalating to the assignee's manager when a deadline is missed rather than letting the task quietly expire."
  },
  {
    id: "BO-05",
    domainCode: "BO",
    domain: "Business / Operations",
    title: "Autonomous Invoice-to-Cash Reconciliation",
    description: "Finance and operations teams spend hours manually matching invoices, purchase orders, and payments, and errors in this process directly delay cash flow. What's needed is a system that can match incoming invoices against POs and payment records, flag mismatches, attempt an automated correction for simple issues like a rounding or currency mismatch, and escalate only the genuinely unresolved discrepancies to a human."
  },

  // --------------------------------------------------
  // EDUCATION — ED
  // --------------------------------------------------
  {
    id: "ED-01",
    domainCode: "ED",
    domain: "Education",
    title: "Autonomous Adaptive Tutoring",
    description: "One-size-fits-all coursework fails students who learn at different paces or have different knowledge gaps, and human tutors simply don't scale to every student. What's needed is a system that can plan a learning path, diagnose specific knowledge gaps from a student's pattern of errors, and switch teaching strategy — and explain why — when its current approach clearly isn't improving performance, rather than continuing down a path that isn't working."
  },
  {
    id: "ED-02",
    domainCode: "ED",
    domain: "Education",
    title: "Autonomous Plagiarism & Originality Review",
    description: "Educators need fast, reliable plagiarism detection, but most current tools produce enough false positives that a human still has to manually recheck flagged cases. What's needed is a system that can flag borderline similarity cases and reanalyze those specific cases with a second, different method — such as paraphrase detection — before finalizing an originality verdict, reducing false accusations without missing real copying."
  },
  {
    id: "ED-03",
    domainCode: "ED",
    domain: "Education",
    title: "Autonomous Curriculum Gap Analysis",
    description: "Schools and institutions often struggle to identify systemic curriculum gaps hiding inside aggregate student performance data, and a fix that doesn't work should prompt a different one, not silence. What's needed is a system that can identify consistently weak topics from cohort performance against curriculum standards, and re-sequence the upcoming lesson plan if a prior adjustment failed to close the gap — treating the curriculum itself as something that should adapt, not just the individual student."
  },
  {
    id: "ED-04",
    domainCode: "ED",
    domain: "Education",
    title: "Autonomous Scholarship & Financial Aid Matching",
    description: "Students routinely miss scholarships they actually qualify for simply because eligibility criteria are scattered across many sources and change frequently. What's needed is a system that can match a student profile against scholarship criteria, track changes to those criteria over time, and re-match the student the moment a scholarship's terms change mid-cycle — so a student isn't relying on manually re-checking every listing themselves."
  },
  {
    id: "ED-05",
    domainCode: "ED",
    domain: "Education",
    title: "Autonomous Classroom Engagement & Early Warning",
    description: "Disengaged or struggling students are often identified far too late for an intervention to actually help, and a teacher acting on a flagged student has no easy way to know if the suggested intervention is actually landing. What's needed is a system that can flag at-risk students early from engagement signals, recommend a tailored intervention, and re-check the student's engagement pattern afterward to see whether it's actually improving — flagging the case for a different kind of intervention if the first one isn't working."
  },

  // --------------------------------------------------
  // FINANCE — FI
  // --------------------------------------------------
  {
    id: "FI-01",
    domainCode: "FI",
    domain: "Finance",
    title: "Autonomous Fraud Investigation",
    description: "Fraud analysts are overwhelmed by the sheer number of flagged transactions and cannot thoroughly investigate every single alert. What's needed is a system that can plan an investigation strategy for a flagged anomaly, gather supporting evidence from multiple sources, and decide autonomously when the evidence is strong enough to escalate a case — with the full evidence trail attached for a human reviewer."
  },
  {
    id: "FI-02",
    domainCode: "FI",
    domain: "Finance",
    title: "Autonomous Personal Budget Rebalancing",
    description: "Consumers routinely struggle to stick to a budget, and most finance apps only tell them after the fact that they've overspent, by which point the money is already gone. What's needed is a system that can detect an overspend pattern early, suggest a correction such as a transfer or category rebalancing, and revise its approach if the overspending continues despite that first suggestion — rather than repeating advice that clearly isn't working."
  },
  {
    id: "FI-03",
    domainCode: "FI",
    domain: "Finance",
    title: "Autonomous Credit Risk Re-Assessment",
    description: "Static, point-in-time credit scoring misses evolving borrower risk, meaning a default can be building for weeks before anyone notices. What's needed is a system that can continuously re-score risk on a rolling basis, decide autonomously when to alert an underwriter, and adjust its own model when its predictions don't match what actually happens — rather than trusting a score that keeps turning out to be wrong."
  },
  {
    id: "FI-04",
    domainCode: "FI",
    domain: "Finance",
    title: "Autonomous Subscription & Recurring Charge Auditing",
    description: "Consumers and businesses alike quietly lose money every month on forgotten or effectively unused subscriptions. What's needed is a system that can identify subscriptions that look unused, plan a cancellation, and confirm the cancellation actually took effect at the next billing cycle — rather than assuming the request alone solved the problem."
  },
  {
    id: "FI-05",
    domainCode: "FI",
    domain: "Finance",
    title: "Autonomous Tax Deduction Finder & Categorization",
    description: "Individuals and small businesses regularly miss legitimate tax deductions simply because their transaction records are messy and uncategorized, and a category assigned once on a first guess is rarely revisited even when later transactions reveal it was wrong. What's needed is a system that can categorize potentially deductible expenses, flag genuinely ambiguous ones for the user to confirm, and revise its earlier categorizations when a pattern emerging from new transactions contradicts an assumption it made earlier in the year."
  }
];

/**
 * Startup Validation for Problem Statements Dataset
 * Verifies exact 60 count and 5 statements per domain.
 */
function validateProblemStatements() {
  const expectedDomains = ['HC', 'DM', 'CS', 'SC', 'AG', 'LC', 'SE', 'EN', 'TR', 'BO', 'ED', 'FI'];
  const domainCounts = {};
  expectedDomains.forEach(code => { domainCounts[code] = 0; });

  PROBLEM_STATEMENTS_DATA.forEach(ps => {
    if (domainCounts[ps.domainCode] !== undefined) {
      domainCounts[ps.domainCode]++;
    } else {
      console.error(`[HackSprint Data Error] Unknown domainCode: ${ps.domainCode} in statement ${ps.id}`);
    }
  });

  let hasError = false;
  if (PROBLEM_STATEMENTS_DATA.length !== 60) {
    console.error(`[HackSprint Data Error] Total problem statements must be 60, but found ${PROBLEM_STATEMENTS_DATA.length}`);
    hasError = true;
  }

  expectedDomains.forEach(code => {
    if (domainCounts[code] !== 5) {
      console.error(`[HackSprint Data Error] Domain ${code} expected 5 statements, but found ${domainCounts[code]}`);
      hasError = true;
    }
  });

  if (!hasError) {
    console.log(`%c[HackSprint '26] Data Validation Passed: 60 Problem Statements loaded across 12 Domains (5 each).`, 'color: #00f0ff; font-weight: bold; font-size: 13px;');
  }
  return !hasError;
}

// Auto-run validation
validateProblemStatements();

// Make available globally
window.DOMAINS_DATA = DOMAINS_DATA;
window.PROBLEM_STATEMENTS_DATA = PROBLEM_STATEMENTS_DATA;
window.validateProblemStatements = validateProblemStatements;
