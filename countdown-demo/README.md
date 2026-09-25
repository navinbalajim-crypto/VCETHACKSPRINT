# HACKSPRINT '26 — Countdown to Problem Statement Reveal (Demo)

> **Official Standalone Demo** for validating the seamless transition from countdown finish to full cinematic celebration and 60-problem-statement reveal.
> **Tech Stack**: Pure HTML, Vanilla CSS, and Modern Vanilla JavaScript (Zero frameworks, Zero build tools, Zero dependencies).

---

## 1. Quick Start & How to Run

Because this project is built in pure **HTML, CSS, and Vanilla JavaScript**, you can run it immediately with any method below:

### Option A: VS Code / IDE Live Server (Recommended)
1. Right-click [`index.html`](file:///c:/Users/navin/OneDrive/Desktop/NAVIN/VCET%20HACKSPRINT/page%202/countdown-demo/index.html).
2. Select **"Open with Live Server"**.

### Option B: Built-in Python Server
Run in PowerShell / Terminal:
```powershell
cd "c:\Users\navin\OneDrive\Desktop\NAVIN\VCET HACKSPRINT\page 2\countdown-demo"
python -m http.server 8080
```
Open [http://localhost:8080](http://localhost:8080) in your browser.

### Option C: Built-in Node.js / npx serve
```powershell
cd "c:\Users\navin\OneDrive\Desktop\NAVIN\VCET HACKSPRINT\page 2\countdown-demo"
npx serve .
```

---

## 2. Interactive Experience & State Flow

The demo implements a deterministic, robust 5-phase finite state machine:

```
[ PHASE 1: COUNTDOWN ]
  │ Dynamic Target: 22.09.2026, 11:50 PM IST
  │ Clean Light-Panel Breakout (#f8fafc), 3D Mechanical Flip Cards
  ▼
[ COUNTDOWN REACHES ZERO / CLICK "TEST REVEAL NOW" ]
  │ Both trigger the identical handleCountdownComplete() function
  ▼
[ PHASE 2: CELEBRATION (0.00s – 7.50s) ]
  ├─ 0.00s: Countdown numbers freeze at 00:00:00:00
  ├─ 0.10s: Numerals brighten with electric cyan glow
  ├─ 0.20s: Light panel receives crisp white screen flash
  ├─ 0.35s: Neon cyan & magenta expanding shockwave rings explode outward
  ├─ 0.50s: 60fps Canvas Particle Burst launches (cyan, purple, pink, gold, white sparks)
  ├─ 0.70s: Countdown cards scale down, tilt, and dissolve into the distance
  ├─ 1.00s: Background transitions seamlessly into deep cosmic navy (#030511)
  ├─ 1.20s: Horizontal neon streaks blast across viewport
  ├─ 1.50s: "HACKSPRINT '26" emerges with chromatic aberration RGB glitch
  ├─ 2.30s: "IS NOW LIVE" staggered letter-by-letter reveal with electric cyan glow
  ├─ 3.30s: "THE PROBLEM STATEMENTS HAVE BEEN REVEALED" badge with pulsing beacon dot
  └─ 4.20s: "EXPLORE 60 PROBLEM STATEMENTS →" gold shimmer button appears
  ▼
[ PHASE 3: PROBLEM STATEMENT REVEAL (7.50s or instant click) ]
  ├─ Animated 0 → 60 counter with gold glow
  ├─ Manifesto: "60 CHALLENGES · 12 DOMAINS · ONE 24-HOUR AGENTIC AI SPRINT"
  ├─ 4 Metric stats pills
  ├─ Sticky 13-pill Domain Filter bar: [ ALL ] [ HC ] [ DM ] [ CS ] [ SC ] [ AG ] [ LC ] [ SE ] [ EN ] [ TR ] [ BO ] [ ED ] [ FI ]
  ├─ Cyberpunk glass problem cards with domain color-coded top accent, ID badges, and hover lift
  └─ Accessible Problem Modal: Full verbatim description, keyboard navigation (ESC, Arrow keys), and Prev/Next browsing
```

---

## 3. Developer Demo Controls (Bottom-Right Floating Panel)

| Button | Action |
|---|---|
| **⚡ TEST REVEAL NOW** | Instantly executes `handleCountdownComplete()`, running the exact zero-countdown celebration sequence. |
| **↺ RESET DEMO** | Restores the countdown state, clears particles, resets all animations and timers back to active countdown. |
| **⏩ SKIP** | Bypasses celebration and jumps directly to the 60 problem statements directory. |

---

## 4. Problem Statement Dataset & Startup Validation

The dataset is located in [`problemStatements.js`](file:///c:/Users/navin/OneDrive/Desktop/NAVIN/VCET%20HACKSPRINT/page%202/countdown-demo/problemStatements.js).

It contains the **verbatim, unaltered 60 problem statements** across all 12 official domains:
1. **HC** — Healthcare (HC-01 to HC-05)
2. **DM** — Disaster Management (DM-01 to DM-05)
3. **CS** — Cybersecurity (CS-01 to CS-05)
4. **SC** — Smart City (SC-01 to SC-05)
5. **AG** — Agriculture (AG-01 to AG-05)
6. **LC** — Legal & Compliance (LC-01 to LC-05)
7. **SE** — Software Engineering (SE-01 to SE-05)
8. **EN** — Environment (EN-01 to EN-05)
9. **TR** — Transportation (TR-01 to TR-05)
10. **BO** — Business / Operations (BO-01 to BO-05)
11. **ED** — Education (ED-01 to ED-05)
12. **FI** — Finance (FI-01 to FI-05)

### Built-in Data Validation
On startup, `validateProblemStatements()` runs automatically and asserts:
- Total problem statements === 60
- Exactly 12 domains present
- Exactly 5 problem statements per domain
Logs confirmation to browser developer console:
`%c[HackSprint '26] Data Validation Passed: 60 Problem Statements loaded across 12 Domains (5 each).`

---

## 5. Production Integration Guide (How to Drop into Existing Site)

When you are ready to apply this to your original HackSprint website, follow these exact 4 steps:

### Step 1: Copy Data File
Copy `problemStatements.js` into your production root folder:
```html
<!-- Add before your main script.js in index.html -->
<script src="problemStatements.js"></script>
```

### Step 2: Overlay Structure in `index.html`
In your existing `index.html`, inside `<section id="countdown">`, ensure the celebration overlay and canvas are present:
```html
<div id="celebration-flash-overlay" class="celebration-flash-overlay" aria-hidden="true"></div>
<div id="shockwave-ring-1" class="celebration-shockwave-ring" aria-hidden="true"></div>
<div id="shockwave-ring-2" class="celebration-shockwave-ring secondary" aria-hidden="true"></div>

<div id="celebration-wrapper" class="celebration-wrapper" aria-hidden="true">
  <canvas id="celebration-canvas" class="celebration-canvas"></canvas>
  <div class="celebration-content">
    <div class="celebration-eyebrow"><span>THE WAIT IS OVER</span></div>
    <div class="celebration-hero-title-wrap">
      <h2 class="celebration-hero-title">HACKSPRINT <span class="gold-accent">'26</span></h2>
      <span class="glitch-layer glitch-cyan" aria-hidden="true">HACKSPRINT '26</span>
      <span class="glitch-layer glitch-pink" aria-hidden="true">HACKSPRINT '26</span>
    </div>
    <div class="stagger-letters-wrap">
      <!-- Staggered letters from demo index.html -->
    </div>
    <p class="celebration-live-tag">
      <span class="pulse-cyan-dot"></span>
      <span>THE PROBLEM STATEMENTS HAVE BEEN REVEALED</span>
    </p>
  </div>
</div>
```

Directly below your countdown section, paste `<section id="ps-reveal-section">` and the accessible modal `<div id="ps-modal">` from `countdown-demo/index.html`.

### Step 3: Append Styles to `style.css`
Append sections 4, 5, 6 from `countdown-demo/style.css` into your existing `style.css`.
All class names are prefixed and scoped (`.celebration-*`, `.ps-*`, `.modal-*`) so they will **not overwrite** any existing styles.

### Step 4: Plug State Function into `script.js`
In your existing `script.js`, locate where `countdownFinished` is triggered when `distance <= 0`. Replace the simple banner alert with `handleCountdownComplete()` from `countdown-demo/script.js`.
That's it!
