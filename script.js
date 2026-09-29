/**
 * HACKSPRINT '26 — MAIN INTERACTIVE SCRIPT
 * High Performance Vanilla JavaScript (ES6+)
 * Department of Information Technology, VCET
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 0. DATA DEFINITIONS (PROBLEM TRACKS & SAMPLES)
  // =========================================================================
  const TRACKS_DATA = [
    {
      id: 'multi-agent',
      num: '01',
      tag: 'MULTI-AGENT SYSTEMS',
      title: 'Multi-Agent Swarms & Orchestration',
      overview: 'Architect decentralized, multi-agent swarms with specialized agent roles, dynamic task delegation, consensus protocols, and peer-to-peer verification loops.',
      samples: [
        'Autonomous product development squad: Planner, Architect, Coder, and QA Critic collaborating to build functional web applications from high-level specs.',
        'Decentralized disaster emergency response swarm coordinating drone search, supply logistics, and rescue dispatch without centralized bottlenecks.',
        'Autonomous financial audit committee swarms cross-verifying balance sheets, vendor invoices, and compliance regulations in real-time.'
      ],
      tech: ['CrewAI', 'Microsoft AutoGen', 'LangGraph', 'OpenAI Swarm', 'FastAPI', 'Redis Pub/Sub']
    },
    {
      id: 'autonomous-dev',
      num: '02',
      tag: 'AGENTIC CODE ENGINEERING',
      title: 'Autonomous Dev & Self-Healing Systems',
      overview: 'Engineer proactive coding agents capable of reproducing issue reports, instrumenting sandboxes, synthesizing test suites, repairing regressions, and raising validated PRs.',
      samples: [
        'Self-healing production monitor detecting runtime exceptions, reproducing the stack trace in an ephemeral container, and submitting a patch PR.',
        'Automated legacy codebase migration agent that translates, refactors, and validates test coverage across modern frameworks.',
        'Continuous AI security code auditor that writes deterministic exploits to verify vulnerabilities before generating verified patches.'
      ],
      tech: ['Model Context Protocol (MCP)', 'Tree-sitter AST', 'Docker SDK', 'PyTest / Jest Sandboxes', 'LangChain', 'GitPython']
    },
    {
      id: 'computer-use',
      num: '03',
      tag: 'AUTONOMOUS COMPUTER USE',
      title: 'Computer-Use & Browser Automation',
      overview: 'Pioneer vision-language agents capable of perceiving operating system GUIs, navigating complex SaaS interfaces, executing high-friction workflows, and validating multi-step form submissions.',
      samples: [
        'Autonomous desktop workflow agent navigating legacy government portals to submit multi-step bureaucratic filings from unstructured receipts.',
        'Autonomous QA testing agent that visually clicks through responsive web designs, testing dynamic edge cases, and logging visual regression videos.',
        'Cross-platform RPA agent extracting complex clinical documents and populating hospital electronic health records with zero API access.'
      ],
      tech: ['Anthropic Computer Use API', 'Playwright / Puppeteer', 'OmniParser Vision', 'OS-World', 'Python Desktop SDK', 'Tesseract OCR']
    },
    {
      id: 'embodied-ai',
      num: '04',
      tag: 'EMBODIED & PHYSICAL AGENTS',
      title: 'Edge & Embodied Agentic AI',
      overview: 'Deploy lightweight autonomous agents directly onto physical microcontrollers and robotic hardware, combining real-time sensory perception with spatial planning and edge actuation.',
      samples: [
        'Autonomous micro-rover agent navigating agricultural rows to detect and spot-spray specific weed varieties using edge neural compute.',
        'Drone surveillance agent conducting structural inspection of power pylons, adjusting flight vectors dynamically to capture defect anomalies.',
        'Edge industrial Cobot agent that learns worker assembly cadences and dynamically hands tools to technicians safely.'
      ],
      tech: ['ROS 2 (Robot Operating System)', 'TensorFlow Lite Edge', 'ESP32 / LoRaWAN', 'YOLOv10 Edge', 'OpenCV', 'MicroPython']
    },
    {
      id: 'cyber-defense',
      num: '05',
      tag: 'AUTONOMOUS CYBERSECURITY',
      title: 'Cybersecurity & Autonomous Defense',
      overview: 'Construct cognitive cybersecurity agents capable of real-time threat hunting, automated malware reverse-engineering, adversarial red-teaming, and dynamic perimeter firewall reconfiguration.',
      samples: [
        'Autonomous SIEM threat analyst investigating suspicious lateral network movement, validating false positives, and quarantining infected nodes.',
        'Agentic web application penetration tester actively discovering business-logic vulnerabilities and zero-day authorization bypasses.',
        'Automated firmware vulnerability hunting agent disassembling binary images, tracing memory corruption hazards, and drafting proof-of-concepts.'
      ],
      tech: ['Suricata / Zeek Logs', 'Ghidra Headless', 'Scapy Network Engine', 'Kali Linux Toolchains', 'Python Security SDK', 'Llama 3 Cyber']
    },
    {
      id: 'decision-intel',
      num: '06',
      tag: 'DEEP RESEARCH & COGNITION',
      title: 'Deep Research & Decision Intelligence',
      overview: 'Build autonomous investigative intelligence agents that ingest hundreds of disparate datasets, trace source citations, cross-corroborate conflicting accounts, and construct verified synthesis dossiers.',
      samples: [
        'Autonomous clinical literature synthesis agent extracting drug-drug interactions across thousands of PubMed papers for rare diseases.',
        'Algorithmic market intelligence agent analyzing supply chain disruption news, satellite shipping container density, and trade filings.',
        'Civic policy impact simulation agent evaluating urban planning proposals against historical zoning, traffic telemetry, and environmental models.'
      ],
      tech: ['RAG with Agentic Routing', 'ChromaDB / Pinecone', 'Qdrant Vector Engine', 'DuckDuckGo / Tavily Search API', 'FastAPI', 'Pandas / NumPy']
    }
  ];

  // =========================================================================
  // 1. NEAT STARFIELD BACKGROUND CANVAS
  // =========================================================================
  const initStarfield = () => {
    const canvas = document.getElementById('starfield-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const starCount = Math.floor((width * height) / 14000);
    const stars = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2 + 0.3,
        alpha: Math.random() * 0.7 + 0.2,
        speed: Math.random() * 0.2 + 0.05,
        twinkle: Math.random() * 0.02 + 0.005
      });
    }

    let animId;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.alpha += s.twinkle;
        if (s.alpha > 0.9 || s.alpha < 0.2) s.twinkle = -s.twinkle;
        s.y -= s.speed;
        if (s.y < 0) {
          s.y = height;
          s.x = Math.random() * width;
        }

        ctx.fillStyle = `rgba(0, 240, 255, ${s.alpha * 0.7})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      animId = requestAnimationFrame(render);
    };
    render();
  };
  initStarfield();

  // =========================================================================
  // 2. STICKY NAVBAR & MORPHING SLIDING UNDERLINE
  // =========================================================================
  const navbar = document.getElementById('navbar');
  const navHeader = document.getElementById('main-header');
  const morphPill = document.getElementById('nav-morph-pill');
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const sections = Array.from(document.querySelectorAll('main > section, footer'));

  // Morphing underline position calculation
  const updateMorphPill = (targetLink) => {
    if (!morphPill || !targetLink) return;
    const linkRect = targetLink.getBoundingClientRect();
    const wrapperRect = targetLink.closest('.nav-links-wrapper').getBoundingClientRect();

    const left = linkRect.left - wrapperRect.left;
    const width = linkRect.width;

    morphPill.style.left = `${left}px`;
    morphPill.style.width = `${width}px`;
    morphPill.style.opacity = '1';
  };

  // Set initial position
  const activeLink = document.querySelector('.nav-link.active') || navLinks[0];
  setTimeout(() => updateMorphPill(activeLink), 150);

  // Hover effect: morph to hovered, return to active on leave
  navLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => updateMorphPill(link));
    link.addEventListener('mouseleave', () => {
      const currentActive = document.querySelector('.nav-link.active');
      if (currentActive) updateMorphPill(currentActive);
    });
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href') || '';
      if (href.startsWith('#') || href.startsWith('index.html#')) {
        const hash = href.includes('#') ? href.substring(href.indexOf('#')) : '';
        const targetEl = hash ? document.querySelector(hash) : null;
        if (targetEl) {
          e.preventDefault();
          const navHeight = navHeader ? navHeader.offsetHeight : 80;
          const targetY = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight + 4;
          window.scrollTo({
            top: targetY,
            behavior: 'smooth'
          });
          if (history.pushState) {
            history.pushState(null, null, hash);
          }
          navLinks.forEach((l) => l.classList.remove('active'));
          link.classList.add('active');
          updateMorphPill(link);
        }
      } else {
        navLinks.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
        updateMorphPill(link);
      }
    });
  });

  // Scroll listener: Frosted glass effect & active section observer
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        // Navbar blur on scroll
        if (scrollY > 50) {
          navHeader.classList.add('scrolled');
        } else {
          navHeader.classList.remove('scrolled');
        }

        // Active link tracking
        let currentSectionId = '';
        const navHeight = navHeader ? navHeader.offsetHeight : 80;
        const scrollPos = scrollY + navHeight + 50;

        sections.forEach((sec) => {
          const secId = sec.getAttribute('id');
          if (!secId || secId === 'countdown') return;
          const top = sec.offsetTop;
          const height = sec.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            currentSectionId = secId;
          }
        });

        // If scrolled near bottom of page, highlight the last section
        if ((window.innerHeight + scrollY) >= (document.documentElement.scrollHeight - 60)) {
          const lastSec = sections[sections.length - 1];
          if (lastSec && lastSec.getAttribute('id')) {
            currentSectionId = lastSec.getAttribute('id');
          }
        }

        if (currentSectionId) {
          const targetLink = navLinks.find((link) => {
            const dataSec = link.getAttribute('data-section');
            const href = link.getAttribute('href') || '';
            const hash = href.includes('#') ? href.substring(href.indexOf('#') + 1) : '';
            return dataSec === currentSectionId || hash === currentSectionId;
          });

          if (targetLink && !targetLink.classList.contains('active')) {
            navLinks.forEach((l) => l.classList.remove('active'));
            targetLink.classList.add('active');
            updateMorphPill(targetLink);
          }
        }

        ticking = false;
      });
      ticking = true;
    }
  });

  // Window resize: re-position morphing pill
  window.addEventListener('resize', () => {
    const currentActive = document.querySelector('.nav-link.active');
    if (currentActive) updateMorphPill(currentActive);
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileLinks = Array.from(document.querySelectorAll('.mobile-nav-link'));

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    mobileLinks.forEach((ml) => {
      ml.addEventListener('click', (e) => {
        mobileDrawer.classList.remove('open');
        const href = ml.getAttribute('href') || '';
        if (href.startsWith('#') || href.startsWith('index.html#')) {
          const hash = href.includes('#') ? href.substring(href.indexOf('#')) : '';
          const targetEl = hash ? document.querySelector(hash) : null;
          if (targetEl) {
            e.preventDefault();
            const navHeight = navHeader ? navHeader.offsetHeight : 80;
            const targetY = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight + 4;
            window.scrollTo({
              top: targetY,
              behavior: 'smooth'
            });
            if (history.pushState) {
              history.pushState(null, null, hash);
            }
          }
        }
      });
    });
  }

  // =========================================================================
  // 3. MECHANICAL 3D FLIP CLOCK COUNTDOWN & CELEBRATION RELEASE ENGINE
  // =========================================================================
  const HACKSPRINT_CONFIG = {
    // Mode: "production"
    mode: "production",

    // Fixed Final Target: September 30, 2026 at 10:00:00 AM IST
    productionTarget: new Date('2026-09-30T10:00:00+05:30').getTime(),

    getTarget: () => {
      const urlParams = new URLSearchParams(window.location.search);
      const secsParam = urlParams.get('demoSeconds');
      if (secsParam) {
        return Date.now() + (parseInt(secsParam, 10) * 1000);
      }
      const targetParam = urlParams.get('target');
      if (targetParam) {
        const parsed = new Date(targetParam).getTime();
        if (!isNaN(parsed)) return parsed;
      }
      return HACKSPRINT_CONFIG.productionTarget;
    }
  };

  let currentTargetDate = HACKSPRINT_CONFIG.getTarget();

  let countdownFinished = false;
  let countdownTimerId = null;

  const prevTime = {
    days: -1,
    hours: -1,
    minutes: -1,
    seconds: -1
  };

  const flipUnit = (unitName, newValueStr) => {
    const unitEl = document.getElementById(`flip-${unitName}`);
    if (!unitEl) return;

    const viewport = unitEl.querySelector('.digit-roll-viewport');
    if (!viewport) return;

    const currentSlide = viewport.querySelector('.slide-current');
    if (!currentSlide) {
      viewport.innerHTML = `<div class="digit-slide slide-current"><span class="digit-text" data-unit="${unitName}">${newValueStr}</span></div>`;
      return;
    }

    const currentValSpan = currentSlide.querySelector('.digit-text');
    if (currentValSpan && currentValSpan.textContent === newValueStr) return;

    // Clean up any lingering transit slides
    const existingTransits = viewport.querySelectorAll('.slide-flip-out, .slide-flip-in');
    existingTransits.forEach(el => {
      if (el !== currentSlide) el.remove();
    });

    // Create incoming slide with 3D flip-in animation
    const incomingSlide = document.createElement('div');
    incomingSlide.className = 'digit-slide slide-flip-in';
    incomingSlide.innerHTML = `<span class="digit-text" data-unit="${unitName}">${newValueStr}</span>`;
    viewport.appendChild(incomingSlide);

    // Force browser reflow to register pre-positioning
    void incomingSlide.offsetWidth;

    // Trigger 3D flip out on current slide
    currentSlide.classList.remove('slide-current');
    currentSlide.classList.add('slide-flip-out');

    // Settle transition state cleanly without frame discontinuity
    setTimeout(() => {
      if (currentSlide.parentNode === viewport) {
        viewport.removeChild(currentSlide);
      }
      incomingSlide.classList.remove('slide-flip-in');
      incomingSlide.classList.add('slide-current');
    }, 520);
  };

  // -------------------------------------------------------------------------
  // -------------------------------------------------------------------------
  // CELEBRATION CANVAS PARTICLES (HIGH-PERFORMANCE 60FPS ENGINE)
  // -------------------------------------------------------------------------
  // CELEBRATION CANVAS PARTICLES (HIGH-PERFORMANCE 60FPS DELTA-TIME ENGINE)
  // -------------------------------------------------------------------------
  let celebrationParticleAnimId = null;

  const runCelebrationParticles = () => {
    const canvas = document.getElementById('celebration-particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const colors = ['#00f0ff', '#00f0ff', '#d946ef', '#ff007a', '#fbbf24', '#f59e0b', '#ffffff'];
    const particles = [];
    const cx = width / 2;
    const cy = height / 2;

    // Primary celebration burst from center (160 particles, natural radial explosion)
    for (let i = 0; i < 160; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 13 + 3.5;
      particles.push({
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 3.5 + 1.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        decay: Math.random() * 0.009 + 0.006,
        gravity: 0.13,
        drag: 0.958,
        isSpark: Math.random() > 0.55
      });
    }

    let accentBurstTriggered = false;
    const startTime = performance.now();
    let lastTime = startTime;

    const renderParticles = (timestamp) => {
      if (!timestamp) timestamp = performance.now();
      const dt = Math.min((timestamp - lastTime) / 16.67, 2.0);
      lastTime = timestamp;
      const elapsed = timestamp - startTime;

      // Synchronized peripheral accent bursts (fire once at ~320ms towards corners, never over center headline)
      if (!accentBurstTriggered && elapsed > 320) {
        accentBurstTriggered = true;
        const lx = width * 0.16;
        const ly = height * 0.22;
        const rx = width * 0.84;
        const ry = height * 0.24;

        for (let j = 0; j < 22; j++) {
          const a1 = Math.random() * Math.PI * 2;
          const s1 = Math.random() * 8 + 2.5;
          particles.push({
            x: lx,
            y: ly,
            vx: Math.cos(a1) * s1,
            vy: Math.sin(a1) * s1,
            size: Math.random() * 2.8 + 1.4,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: 0.95,
            decay: Math.random() * 0.015 + 0.011,
            gravity: 0.11,
            drag: 0.952,
            isSpark: true
          });

          const a2 = Math.random() * Math.PI * 2;
          const s2 = Math.random() * 8 + 2.5;
          particles.push({
            x: rx,
            y: ry,
            vx: Math.cos(a2) * s2,
            vy: Math.sin(a2) * s2,
            size: Math.random() * 2.8 + 1.4,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: 0.95,
            decay: Math.random() * 0.015 + 0.011,
            gravity: 0.11,
            drag: 0.952,
            isSpark: true
          });
        }
      }

      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.vx *= Math.pow(p.drag, dt);
        p.vy = p.vy * Math.pow(p.drag, dt) + p.gravity * dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.alpha -= p.decay * dt;

        if (p.alpha <= 0 || p.y > height + 30) {
          particles.splice(i, 1);
          continue;
        }

        // Render particle with pure canvas primitives (zero shadowBlur stalls!)
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.6, p.size * p.alpha), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));
        ctx.fill();

        // Subtle glowing outer halo for spark particles (lightweight, zero blur filter)
        if (p.isSpark && p.alpha > 0.35) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 1.8 * p.alpha, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha * 0.22;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;

      if (particles.length > 0) {
        celebrationParticleAnimId = requestAnimationFrame(renderParticles);
      }
    };

    celebrationParticleAnimId = requestAnimationFrame(renderParticles);
  };

  const stopCelebrationParticles = () => {
    if (celebrationParticleAnimId) {
      cancelAnimationFrame(celebrationParticleAnimId);
      celebrationParticleAnimId = null;
    }
    const canvas = document.getElementById('celebration-particles-canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  // -------------------------------------------------------------------------
  // ANIMATED 0 -> 60 STATS COUNTER UTILITY (1.4s cubic ease-out)
  // -------------------------------------------------------------------------
  const animateCounter = (el, target, duration = 1400) => {
    if (!el) return;
    const start = 0;
    const startTime = performance.now();
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.round(start + (target - start) * easeOutCubic(progress));
      el.textContent = current;
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target;
      }
    };
    requestAnimationFrame(tick);
  };

  // -------------------------------------------------------------------------
  // ZERO-MOMENT SHOCKWAVE & KEYNOTE CELEBRATION SEQUENCE (0.00s - 6.50s)
  // Perfectly Sequenced: Charge -> Burst -> Dissolve & Recede -> Calm Keynote Reveal
  // -------------------------------------------------------------------------
  let activeCelebrationTimeouts = [];

  const triggerCelebration = () => {
    if (countdownFinished) return;
    countdownFinished = true;
    if (countdownTimerId) clearInterval(countdownTimerId);

    // 0.00s: Freeze digits at 00:00:00:00
    flipUnit('days', '00');
    flipUnit('hours', '00');
    flipUnit('minutes', '00');
    flipUnit('seconds', '00');

    const countdownSec = document.getElementById('countdown');
    const overlay = document.getElementById('celebration-overlay');
    const flashOverlay = document.getElementById('celebration-flash-overlay');
    const shockwaveRing = document.getElementById('zero-shockwave-ring');
    const shockwaveRing2 = document.getElementById('zero-shockwave-ring-2');
    const messageWrap = document.getElementById('celebration-message-wrap');
    const clockGrid = document.getElementById('flip-clock');
    const liveCtaWrap = document.getElementById('countdown-live-cta-wrap');
    const problemSection = document.getElementById('problem-statements');
    const metricProblemsEl = document.getElementById('metric-counter-problems');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const demoStatusText = document.getElementById('demo-status-text');

    if (demoStatusText) demoStatusText.textContent = 'CELEBRATING';

    // 0.08s: Numbers brighten with neon cyan text shadow glow
    activeCelebrationTimeouts.push(setTimeout(() => {
      if (clockGrid) clockGrid.classList.add('numbers-brighten');
    }, 80));

    // 0.18s: Luminous breakout panel & screen radial glow blooms gently
    activeCelebrationTimeouts.push(setTimeout(() => {
      if (flashOverlay) flashOverlay.classList.add('trigger-flash');
      if (countdownSec) countdownSec.classList.add('panel-flash');
    }, 180));

    // 0.25s: Center dual neon shockwaves expand outward with smooth ease-out
    activeCelebrationTimeouts.push(setTimeout(() => {
      if (shockwaveRing) shockwaveRing.classList.add('expand');
      if (shockwaveRing2) shockwaveRing2.classList.add('expand');
    }, 250));

    // 0.30s: Fullscreen celebration overlay activates, crossfading softly into cosmic backdrop
    activeCelebrationTimeouts.push(setTimeout(() => {
      if (overlay) {
        overlay.classList.add('active', 'phase-energy-pulse');
      }
    }, 300));

    // 0.35s: HTML5 Canvas Keynote particle burst launches and radiates across the screen
    activeCelebrationTimeouts.push(setTimeout(() => {
      if (overlay && !prefersReducedMotion) {
        overlay.classList.add('phase-particles');
        runCelebrationParticles();
      }
    }, 350));

    // 0.55s: Flash begins gentle dissolve as cosmic navy background crossfades in (~350ms smooth overlap)
    activeCelebrationTimeouts.push(setTimeout(() => {
      document.body.classList.add('celebrating');
      if (countdownSec) countdownSec.classList.add('celebrating');
    }, 550));

    // 0.70s: Mechanical cards scale down, dissolve, and recede smoothly
    activeCelebrationTimeouts.push(setTimeout(() => {
      if (clockGrid) {
        clockGrid.classList.remove('numbers-brighten');
        clockGrid.classList.add('cards-collapse', 'dissolved');
      }
      if (countdownSec) countdownSec.classList.remove('panel-flash');
    }, 700));

    // 1.35s: Horizontal neon streaks blast outward across the settled background
    activeCelebrationTimeouts.push(setTimeout(() => {
      if (overlay) overlay.classList.add('trigger-streaks');
    }, 1350));

    // 1.40s: Step 2 - Orbit-Ring Expansion Burst triggers right after initial particle burst finishes
    activeCelebrationTimeouts.push(setTimeout(() => {
      const orbitSystem = document.getElementById('orbit-ring-celebration');
      if (orbitSystem) orbitSystem.classList.add('expansion-burst');
      const deepeningBg = document.getElementById('celeb-deepening-bg');
      if (deepeningBg) deepeningBg.classList.add('deepening-active');
    }, 1400));

    // 2.20s: Celebration card wrapper activates as the rings expand outward
    activeCelebrationTimeouts.push(setTimeout(() => {
      if (messageWrap) messageWrap.classList.add('revealed');
      const badge = document.getElementById('celeb-wait-badge');
      if (badge) badge.classList.add('revealed');
    }, 2200));

    // 2.40s: Step 3 - Headline focus-in: "HACKSPRINT '26" transitions from blurred to sharp focus over ~0.4-0.5s
    activeCelebrationTimeouts.push(setTimeout(() => {
      const title = document.getElementById('celeb-event-title');
      if (title) title.classList.add('focused-in', 'revealed');
    }, 2400));

    // 2.90s: Step 4 - Letter-by-letter typing, staggered: "IS NOW" (amber/gold), then immediately "LIVE" (cyan glow)
    activeCelebrationTimeouts.push(setTimeout(() => {
      const staggerLetters = document.getElementById('celeb-stagger-letters');
      if (staggerLetters) staggerLetters.classList.add('typing-active');
    }, 2900));

    // 3.50s: Step 5, 6 & 7 - Status badge fade-in, Divider line, and Nav sync
    activeCelebrationTimeouts.push(setTimeout(() => {
      // Step 5: Status badge fade-in ("THE PROBLEM STATEMENTS HAVE BEEN REVEALED")
      const liveTag = document.getElementById('celeb-live-tag');
      if (liveTag) liveTag.classList.add('revealed');

      // Step 6: Divider line fades in just below badge
      const horizonLine = document.getElementById('celeb-horizon-line');
      if (horizonLine) horizonLine.classList.add('revealed');

      // Step 7: Nav sync: top-right status badge updates to "● HACKATHON IS LIVE" (pulsing green dot)
      const navBadge = document.getElementById('nav-status-badge');
      if (navBadge) {
        navBadge.classList.add('live-active');
        const dot = navBadge.querySelector('.nav-status-dot');
        if (dot) dot.className = 'nav-status-dot pulse-green';
        const txt = navBadge.querySelector('.nav-status-text');
        if (txt) txt.textContent = 'HACKATHON IS LIVE';
      }
      if (demoStatusText) demoStatusText.textContent = 'HACKATHON IS LIVE';
    }, 3500));

    // 5.20s: Step 8 - Settle + handoff: rings/dots/trails fade out over the final ~1s as everything else holds
    activeCelebrationTimeouts.push(setTimeout(() => {
      const orbitSystem = document.getElementById('orbit-ring-celebration');
      if (orbitSystem) orbitSystem.classList.add('rings-fade-out');
    }, 5200));

    // Function to smoothly transition to problem statements
    const proceedToProblems = async () => {
      await ensureProblemStatementsLoaded();

      if (problemSection) {
        problemSection.style.display = 'block';
        problemSection.classList.add('revealed');
      }

      if (metricProblemsEl) {
        animateCounter(metricProblemsEl, 60, 1400);
      }

      const demoPhase = document.getElementById('demo-hub-phase');
      if (demoPhase) demoPhase.textContent = 'PROBLEM-REVEAL';
      if (demoStatusText) demoStatusText.textContent = 'PROBLEM REVEAL';

      if (liveCtaWrap) {
        liveCtaWrap.style.display = 'flex';
        liveCtaWrap.classList.add('revealed');
      }

      if (overlay) {
        overlay.classList.add('celebration-completed');
        setTimeout(() => {
          overlay.classList.remove('active');
          stopCelebrationParticles();
        }, 600);
      }

      // Smooth scroll to problem statements section
      if (problemSection && !prefersReducedMotion) {
        const navHeader = document.getElementById('main-header');
        const navHeight = navHeader ? navHeader.offsetHeight : 80;
        const targetY = problemSection.getBoundingClientRect().top + window.pageYOffset - navHeight - 10;
        window.scrollTo({
          top: targetY,
          behavior: 'smooth'
        });
      }
    };

    // Button to proceed immediately
    const btnProceed = document.getElementById('btn-proceed-reveal');
    if (btnProceed) {
      btnProceed.onclick = proceedToProblems;
    }

    // 6.50s: Auto-proceed smoothly to Problem Statement Reveal stage
    activeCelebrationTimeouts.push(setTimeout(proceedToProblems, 6500));
  };

  const updateCountdown = () => {
    const now = Date.now();
    const distance = currentTargetDate - now;

    if (distance <= 0) {
      triggerCelebration();
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const formatNum = (n) => String(n).padStart(2, '0');

    if (days !== prevTime.days) {
      flipUnit('days', formatNum(days));
      prevTime.days = days;
    }
    if (hours !== prevTime.hours) {
      flipUnit('hours', formatNum(hours));
      prevTime.hours = hours;
    }
    if (minutes !== prevTime.minutes) {
      flipUnit('minutes', formatNum(minutes));
      prevTime.minutes = minutes;
    }
    if (seconds !== prevTime.seconds) {
      flipUnit('seconds', formatNum(seconds));
      prevTime.seconds = seconds;
    }

    const phaseVal = document.getElementById('demo-hub-phase');
    if (phaseVal && !countdownFinished) {
      phaseVal.textContent = `COUNTDOWN (${days > 0 ? days + 'd ' : ''}${formatNum(hours)}:${formatNum(minutes)}:${formatNum(seconds)})`;
    }
  };

  const updateDemoTargetBadge = () => {
    const demoTargetEl = document.getElementById('demo-target-text');
    if (demoTargetEl) {
      const d = new Date(currentTargetDate);
      const options = {
        timeZone: 'Asia/Kolkata',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      };
      try {
        const parts = new Intl.DateTimeFormat('en-IN', options).formatToParts(d);
        const getPart = (type) => parts.find(p => p.type === type)?.value || '';
        const day = getPart('day');
        const month = getPart('month');
        const year = getPart('year');
        const hour = getPart('hour');
        const minute = getPart('minute');
        const dayPeriod = (getPart('dayPeriod') || 'AM').toUpperCase();
        demoTargetEl.textContent = `EVENT START · ${day}.${month}.${year} · ${hour}:${minute} ${dayPeriod} IST`;
      } catch (err) {
        demoTargetEl.textContent = 'EVENT START · 30.09.2026 · 10:00 AM IST';
      }
    }
  };
  updateDemoTargetBadge();

  // Initial call & recurring ticker
  updateCountdown();
  countdownTimerId = setInterval(updateCountdown, 1000);

  // =========================================================================
  // 4. PROBLEM TRACKS — 3D COVERFLOW CAROUSEL
  // =========================================================================
  const coverflowStage = document.getElementById('coverflow-stage');
  const trackCards = Array.from(document.querySelectorAll('.track-card'));
  const trackPrevBtn = document.getElementById('track-prev');
  const trackNextBtn = document.getElementById('track-next');
  const trackDots = Array.from(document.querySelectorAll('.track-dot'));
  const currentNumEl = document.getElementById('track-current-num');

  let currentTrackIndex = 0;
  const totalTracks = trackCards.length;

  const updateCoverflow = () => {
    const isMobile = window.innerWidth < 768;
    const spacing = isMobile ? 160 : 230;
    const zOffset = isMobile ? 80 : 130;

    trackCards.forEach((card, idx) => {
      const diff = idx - currentTrackIndex;
      const absDiff = Math.abs(diff);

      card.classList.remove('active');

      if (diff === 0) {
        // Active Center Card
        card.classList.add('active');
        card.style.transform = `translateX(0px) translateZ(100px) rotateY(0deg) scale(1)`;
        card.style.opacity = '1';
        card.style.filter = 'blur(0px)';
        card.style.zIndex = '20';
        card.style.pointerEvents = 'auto';
      } else if (diff > 0) {
        // Right Cards
        const xPos = diff * spacing + 50;
        const zPos = -absDiff * zOffset;
        const rotY = -35;
        const scale = Math.max(0.68, 1 - absDiff * 0.14);
        const opacity = Math.max(0.2, 0.85 - absDiff * 0.28);
        const blur = Math.min(4, absDiff * 1.5);

        card.style.transform = `translateX(${xPos}px) translateZ(${zPos}px) rotateY(${rotY}deg) scale(${scale})`;
        card.style.opacity = `${opacity}`;
        card.style.filter = `blur(${blur}px)`;
        card.style.zIndex = `${20 - absDiff}`;
        card.style.pointerEvents = 'auto';
      } else {
        // Left Cards
        const xPos = diff * spacing - 50;
        const zPos = -absDiff * zOffset;
        const rotY = 35;
        const scale = Math.max(0.68, 1 - absDiff * 0.14);
        const opacity = Math.max(0.2, 0.85 - absDiff * 0.28);
        const blur = Math.min(4, absDiff * 1.5);

        card.style.transform = `translateX(${xPos}px) translateZ(${zPos}px) rotateY(${rotY}deg) scale(${scale})`;
        card.style.opacity = `${opacity}`;
        card.style.filter = `blur(${blur}px)`;
        card.style.zIndex = `${20 - absDiff}`;
        card.style.pointerEvents = 'auto';
      }
    });

    // Update dots
    trackDots.forEach((dot, dIdx) => {
      dot.classList.toggle('active', dIdx === currentTrackIndex);
    });

    // Update counter
    if (currentNumEl) {
      currentNumEl.textContent = `0${currentTrackIndex + 1}`;
    }
  };

  const goToTrack = (idx) => {
    if (idx < 0) {
      currentTrackIndex = totalTracks - 1;
    } else if (idx >= totalTracks) {
      currentTrackIndex = 0;
    } else {
      currentTrackIndex = idx;
    }
    updateCoverflow();
  };

  if (trackPrevBtn) {
    trackPrevBtn.addEventListener('click', () => goToTrack(currentTrackIndex - 1));
  }
  if (trackNextBtn) {
    trackNextBtn.addEventListener('click', () => goToTrack(currentTrackIndex + 1));
  }

  trackDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const targetIdx = parseInt(dot.getAttribute('data-index'), 10);
      goToTrack(targetIdx);
    });
  });

  // Card click: click active opens inspector; click adjacent glides to center
  trackCards.forEach((card, cIdx) => {
    card.addEventListener('click', () => {
      if (cIdx === currentTrackIndex) {
        openTrackModal(TRACKS_DATA[cIdx]);
      } else {
        goToTrack(cIdx);
      }
    });
  });

  // Keyboard navigation when in tracks viewport
  window.addEventListener('keydown', (e) => {
    const tracksSection = document.getElementById('tracks');
    if (!tracksSection) return;
    const rect = tracksSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      if (e.key === 'ArrowLeft') goToTrack(currentTrackIndex - 1);
      if (e.key === 'ArrowRight') goToTrack(currentTrackIndex + 1);
    }
  });

  // Touch Swipe & Mouse Drag Support
  let touchStartX = 0;
  let touchEndX = 0;

  if (coverflowStage) {
    coverflowStage.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    coverflowStage.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) goToTrack(currentTrackIndex + 1);
      if (touchEndX - touchStartX > 50) goToTrack(currentTrackIndex - 1);
    }, { passive: true });
  }

  // Initial coverflow render
  updateCoverflow();
  window.addEventListener('resize', updateCoverflow);

  // =========================================================================
  // 5. PARALLAX DRIFT & CROSSING PATHS OBSERVER
  // =========================================================================
  const parallaxMedia = document.getElementById('parallax-bg-media');
  const aboutHero = document.getElementById('about-parallax-hero');

  window.addEventListener('scroll', () => {
    if (!aboutHero || !parallaxMedia) return;
    const rect = aboutHero.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const translateY = (scrollProgress - 0.5) * 60;
      parallaxMedia.style.transform = `translateY(${translateY}px)`;
    }
  });

  // IntersectionObserver for Circuit Graphic (left) & Vision Copy (right)
  const revealElements = [
    document.getElementById('circuit-graphic-card'),
    document.getElementById('about-vision-copy')
  ];

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    { threshold: 0.2 }
  );

  revealElements.forEach((el) => {
    if (el) revealObserver.observe(el);
  });

  // Staggered Coordinators Grid entrance
  const coordCards = Array.from(document.querySelectorAll('.coord-card'));
  const coordObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          coordCards.forEach((card, i) => {
            setTimeout(() => {
              card.classList.add('in-view');
            }, i * 140);
          });
          coordObserver.disconnect();
        }
      });
    },
    { threshold: 0.15 }
  );

  const coordGrid = document.getElementById('coordinators-grid');
  if (coordGrid) coordObserver.observe(coordGrid);

  // =========================================================================
  // 6. TRACK DETAILS INSPECTOR MODAL
  // =========================================================================
  const trackModal = document.getElementById('track-modal');
  const trackModalClose = document.getElementById('track-modal-close');
  const trackModalTag = document.getElementById('track-modal-tag');
  const trackModalTitle = document.getElementById('track-modal-title');
  const trackModalOverview = document.getElementById('track-modal-overview');
  const trackModalSamples = document.getElementById('track-modal-samples');
  const trackModalTech = document.getElementById('track-modal-tech');
  const btnSelectTrackReg = document.getElementById('btn-select-track-reg');

  let currentSelectedTrackTitle = '';

  const openTrackModal = (trackData) => {
    if (!trackModal || !trackData) return;

    currentSelectedTrackTitle = trackData.title;
    trackModalTag.textContent = `TRACK ${trackData.num} · ${trackData.tag}`;
    trackModalTitle.textContent = trackData.title;
    trackModalOverview.textContent = trackData.overview;

    // Populate samples
    trackModalSamples.innerHTML = '';
    trackData.samples.forEach((sample) => {
      const li = document.createElement('li');
      li.textContent = sample;
      trackModalSamples.appendChild(li);
    });

    // Populate tech tags
    trackModalTech.innerHTML = '';
    trackData.tech.forEach((techName) => {
      const pill = document.createElement('span');
      pill.className = 'tech-tag-pill';
      pill.textContent = techName;
      trackModalTech.appendChild(pill);
    });

    trackModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeTrackModal = () => {
    if (trackModal) {
      trackModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (trackModalClose) {
    trackModalClose.addEventListener('click', closeTrackModal);
  }

  if (trackModal) {
    trackModal.addEventListener('click', (e) => {
      if (e.target === trackModal) closeTrackModal();
    });
  }

  if (btnSelectTrackReg) {
    btnSelectTrackReg.addEventListener('click', () => {
      closeTrackModal();
      openRegisterModal(currentSelectedTrackTitle);
    });
  }

  // =========================================================================
  // 7. PARTICIPANT REGISTRATION MODAL
  // =========================================================================
  const registerModal = document.getElementById('register-modal');
  const registerCloseBtn = document.getElementById('modal-close-btn');
  const registerForm = document.getElementById('register-form');
  const modalSuccess = document.getElementById('modal-success');
  const btnCloseSuccess = document.getElementById('btn-close-success');
  const successTeamDisplay = document.getElementById('success-team-display');
  const trackSelectInput = document.getElementById('track-preference');

  // Trigger buttons
  const regTriggers = [
    document.getElementById('btn-open-register'),
    document.getElementById('btn-mobile-register'),
    document.getElementById('btn-hero-register'),
    document.querySelector('.link-open-reg')
  ];

  const openRegisterModal = (preselectedTrack = '') => {
    if (!registerModal) return;
    registerModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Reset view to form
    if (registerForm && modalSuccess) {
      registerForm.style.display = 'flex';
      modalSuccess.style.display = 'none';
    }

    if (preselectedTrack && trackSelectInput) {
      for (let option of trackSelectInput.options) {
        if (option.text.toLowerCase().includes(preselectedTrack.toLowerCase())) {
          trackSelectInput.value = option.value;
          break;
        }
      }
    }
  };

  const closeRegisterModal = () => {
    if (registerModal) {
      registerModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  // Registration links navigate directly to official Google Form
  regTriggers.forEach((btn) => {
    if (btn && btn.getAttribute('href') === '#register-modal') {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openRegisterModal();
      });
    }
  });

  if (registerCloseBtn) registerCloseBtn.addEventListener('click', closeRegisterModal);
  if (btnCloseSuccess) btnCloseSuccess.addEventListener('click', closeRegisterModal);

  if (registerModal) {
    registerModal.addEventListener('click', (e) => {
      if (e.target === registerModal) closeRegisterModal();
    });
  }

  // Escape key closes open modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeRegisterModal();
      closeTrackModal();
    }
  });

  // Form Validation & Submission
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const teamName = document.getElementById('team-name').value.trim();
      const leadName = document.getElementById('lead-name').value.trim();
      const leadEmail = document.getElementById('lead-email').value.trim();
      const collegeName = document.getElementById('college-name').value.trim();

      // Clear previous error messages
      document.getElementById('err-team-name').textContent = '';
      document.getElementById('err-lead-name').textContent = '';
      document.getElementById('err-lead-email').textContent = '';
      document.getElementById('err-college-name').textContent = '';

      if (!teamName) {
        document.getElementById('err-team-name').textContent = 'Please enter team name';
        isValid = false;
      }
      if (!leadName) {
        document.getElementById('err-lead-name').textContent = 'Please enter lead name';
        isValid = false;
      }
      if (!leadEmail || !leadEmail.includes('@') || !leadEmail.includes('.')) {
        document.getElementById('err-lead-email').textContent = 'Valid college email required';
        isValid = false;
      }
      if (!collegeName) {
        document.getElementById('err-college-name').textContent = 'College name is required';
        isValid = false;
      }

      if (isValid) {
        if (successTeamDisplay) successTeamDisplay.textContent = teamName;
        registerForm.style.display = 'none';
        modalSuccess.style.display = 'block';
        showToast(`Squad [${teamName}] confirmed for HackSprint '26!`);
      }
    });
  }

  // =========================================================================
  // 8. NEWSLETTER SUBSCRIPTION & TOAST
  // =========================================================================
  const newsletterForms = document.querySelectorAll('.newsletter-form, #newsletter-form');

  newsletterForms.forEach((nForm) => {
    nForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const emailInput = nForm.querySelector('input[type="email"]');
      const feedback = nForm.parentElement ? nForm.parentElement.querySelector('.newsletter-feedback') : null;
      const submitBtn = nForm.querySelector('button[type="submit"]');
      const btnText = submitBtn ? submitBtn.querySelector('span') : null;

      const email = emailInput ? emailInput.value.trim() : '';
      if (!email || !email.includes('@') || !email.includes('.')) {
        if (feedback) {
          feedback.textContent = 'Please enter a valid email address';
          feedback.style.color = '#f87171';
        }
        return;
      }

      // UI Loading state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
      }
      if (btnText) btnText.textContent = 'Subscribing...';
      if (feedback) {
        feedback.textContent = '⚡ Transmitting subscription to coordinator...';
        feedback.style.color = '#00f0ff';
      }

      const payload = {
        subscriber_email: email,
        source_page: window.location.pathname || 'Home',
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        _replyto: email,
        _subject: `HackSprint '26: New Newsletter Subscriber (${email})`,
        _template: 'table',
        _captcha: 'false'
      };

      try {
        fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }).catch(() => {});

        const res = await fetch('https://formsubmit.co/ajax/0ed0b155382f669d131a5e78e0a83bd9', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        const data = await res.json();

        if (feedback) {
          feedback.textContent = '✓ Subscribed! You will receive problem track bulletins.';
          feedback.style.color = '#10b981';
        }

        if (emailInput) emailInput.value = '';
        showToast('Subscribed! You will receive HackSprint bulletins.');
      } catch (err) {
        console.warn('Newsletter fetch error:', err);
        if (feedback) {
          feedback.textContent = 'Subscribed! You will receive problem track bulletins.';
          feedback.style.color = '#10b981';
        }
        if (emailInput) emailInput.value = '';
        showToast('Subscribed to HackSprint bulletins.');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.style.opacity = '1';
        }
        if (btnText) btnText.textContent = 'Subscribe';
      }
    });
  });

  const showToast = (message) => {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.style.cssText = 'position: fixed; bottom: 24px; right: 24px; z-index: 999999; display: flex; flex-direction: column; gap: 10px; pointer-events: none;';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.pointerEvents = 'auto';

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  };

  // Expose showToast globally
  window.showToast = showToast;

  // =========================================================================
  // 9. FAQ ACCORDION ENGINE (FOR faq.html & EMBEDDED FAQ)
  // =========================================================================
  const faqButtons = document.querySelectorAll('.faq-question-btn');
  faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-accordion-item');
      if (!item) return;
      const wasActive = item.classList.contains('active');

      // Optional: Close siblings in same category
      const parentBlock = item.closest('.faq-category-block');
      if (parentBlock) {
        parentBlock.querySelectorAll('.faq-accordion-item').forEach((sibling) => {
          sibling.classList.remove('active');
        });
      }

      if (!wasActive) {
        item.classList.add('active');
      }
    });
  });

  // =========================================================================
  // 10. 24-HOUR SCHEDULE FILTER TABS (FOR schedule.html)
  // =========================================================================
  const scheduleTabs = document.querySelectorAll('.schedule-tab-btn');
  const scheduleEvents = document.querySelectorAll('.timeline-event-card');

  scheduleTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      scheduleTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      scheduleEvents.forEach((ev) => {
        const cats = (ev.getAttribute('data-category') || '').trim().split(/\s+/);
        const days = (ev.getAttribute('data-day') || '').trim().split(/\s+/);

        if (!filter || filter === 'all') {
          ev.style.display = 'block';
        } else if (cats.includes(filter) || days.includes(filter)) {
          ev.style.display = 'block';
        } else {
          ev.style.display = 'none';
        }
      });
    });
  });

  // =========================================================================
  // 11. POST-COUNTDOWN PROBLEM STATEMENTS REVEAL & DEMO HUB ENGINE
  // =========================================================================
  let cachedProblemStatements = null;
  let isProblemStatementsEngineInitialized = false;

  const initProblemStatementsEngine = (dataset) => {
    const psData = dataset || cachedProblemStatements || window.PROBLEM_STATEMENTS;
    if (!psData || !Array.isArray(psData) || psData.length === 0) {
      return;
    }
    cachedProblemStatements = psData;
    if (isProblemStatementsEngineInitialized) return;
    isProblemStatementsEngineInitialized = true;

    // Safe HTML string escaping
    const escapeHtml = (str) => {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    };

    const domainCardsGrid = document.getElementById('domain-cards-grid');
    const domainNavPillsWrap = document.getElementById('domain-nav-pills');
    const metricCounterProblems = document.getElementById('metric-counter-problems');
    const metricCounterDomains = document.getElementById('metric-counter-domains');
    const psKicker = document.getElementById('ps-kicker');

    const domainCodes = ['HC', 'DM', 'CS', 'SC', 'AG', 'LC', 'SE', 'EN', 'TR', 'BO', 'ED', 'FI'];
    
    // Dynamically calculate counts & domain names from decrypted data
    const domainCounts = {};
    const domainNames = {};
    domainCodes.forEach(code => { domainCounts[code] = 0; });
    psData.forEach(item => {
      if (item.domainCode) {
        domainCounts[item.domainCode] = (domainCounts[item.domainCode] || 0) + 1;
        if (!domainNames[item.domainCode] && item.domain) {
          domainNames[item.domainCode] = item.domain;
        }
      }
    });

    const DOMAIN_NAME_MAP = {
      HC: domainNames['HC'] || 'Healthcare',
      DM: domainNames['DM'] || 'Disaster Management',
      CS: domainNames['CS'] || 'Cybersecurity',
      SC: domainNames['SC'] || 'Smart City',
      AG: domainNames['AG'] || 'Agriculture',
      LC: domainNames['LC'] || 'Legal and Compliance',
      SE: domainNames['SE'] || 'Software Engineering',
      EN: domainNames['EN'] || 'Environment',
      TR: domainNames['TR'] || 'Transportation',
      BO: domainNames['BO'] || 'Business / Operations',
      ED: domainNames['ED'] || 'Education',
      FI: domainNames['FI'] || 'Finance'
    };

    const DOMAIN_COLOR_MAP = {
      HC: 'cyan',
      DM: 'pink',
      CS: 'purple',
      SC: 'cyan',
      AG: 'green',
      LC: 'amber',
      SE: 'cyan',
      EN: 'green',
      TR: 'gold',
      BO: 'purple',
      ED: 'cyan',
      FI: 'amber'
    };

    const DOMAIN_SYMBOL_MAP = {
      HC: '✚',
      DM: '▲',
      CS: '🛡',
      SC: '🏢',
      AG: '🌱',
      LC: '⚖',
      SE: '⚡',
      EN: '🍃',
      TR: '🚆',
      BO: '💼',
      ED: '🎓',
      FI: '💰'
    };

    // Update statistics header
    if (metricCounterProblems) metricCounterProblems.textContent = String(psData.length);
    if (metricCounterDomains) metricCounterDomains.textContent = String(domainCodes.length);
    if (psKicker) psKicker.textContent = `${psData.length} CHALLENGES · ${domainCodes.length} DOMAINS · ONE 24-HOUR AGENTIC AI SPRINT`;

    // Render 12 Domain Cards dynamically
    if (domainCardsGrid) {
      domainCardsGrid.innerHTML = domainCodes.map(code => {
        const color = DOMAIN_COLOR_MAP[code] || 'cyan';
        const symbol = DOMAIN_SYMBOL_MAP[code] || '✦';
        const name = DOMAIN_NAME_MAP[code] || code;
        const count = domainCounts[code] || 5;
        return `
          <div class="domain-card" data-domain="${code}" data-color="${color}" tabindex="0" role="button" aria-label="Explore ${escapeHtml(name)} Domain">
            <div class="domain-card-top">
              <span class="domain-card-code">${code}</span>
              <span class="domain-card-symbol">${symbol}</span>
            </div>
            <h4 class="domain-card-name">${escapeHtml(name)}</h4>
            <div class="domain-card-footer">
              <span class="domain-card-count">${count} PROBLEM STATEMENTS</span>
              <span class="domain-card-arrow">→</span>
            </div>
          </div>
        `;
      }).join('');
    }

    // Render Filter Pills dynamically
    if (domainNavPillsWrap) {
      let pillsHtml = `
        <button class="ps-filter-pill active-all ghost-pill" data-domain="ALL" data-color="amber" role="tab" aria-selected="true">
          ✦ ALL ${psData.length}
        </button>
      `;
      domainCodes.forEach(code => {
        const color = DOMAIN_COLOR_MAP[code] || 'cyan';
        const symbol = DOMAIN_SYMBOL_MAP[code] || '✦';
        const count = domainCounts[code] || 5;
        pillsHtml += `
          <button class="ps-filter-pill ghost-pill" data-domain="${code}" data-color="${color}" role="tab" aria-selected="false">
            ${symbol} ${code} ${count}
          </button>
        `;
      });
      domainNavPillsWrap.innerHTML = pillsHtml;
    }

    const grid = document.getElementById('ps-cards-grid');
    const searchInput = document.getElementById('ps-search-input');
    const searchClear = document.getElementById('ps-search-clear');
    const countBadge = document.getElementById('ps-count-badge');
    const listHeading = document.getElementById('ps-list-heading');
    const emptyState = document.getElementById('ps-empty-state');
    const btnResetFilters = document.getElementById('btn-reset-filters');
    const filterPills = document.querySelectorAll('.ps-filter-pill');
    const domainCards = document.querySelectorAll('.domain-card');
    const pagePrev = document.getElementById('ps-page-prev');
    const pageNext = document.getElementById('ps-page-next');
    const pageNumbers = document.getElementById('ps-page-numbers');
    const btnViewAll = document.getElementById('ps-view-all-btn');

    let activeDomain = 'ALL';
    let searchQuery = '';
    const PAGE_SIZE = 9;
    let currentPage = 1;
    let isViewAll = false;

    // Filter dataset based on domain and search
    const getFilteredItems = () => {
      const q = searchQuery.toLowerCase().trim();

      return psData.filter((item) => {
        const matchesDomain = (activeDomain === 'ALL' || item.domainCode === activeDomain);
        if (!matchesDomain) return false;

        if (!q) return true;

        const inId = item.id && item.id.toLowerCase().includes(q);
        const inTitle = item.title && item.title.toLowerCase().includes(q);
        const inDomain = item.domain && item.domain.toLowerCase().includes(q);
        const inDesc = item.description && item.description.toLowerCase().includes(q);
        const inTags = item.tags && item.tags.some((t) => t.toLowerCase().includes(q));

        return inId || inTitle || inDomain || inDesc || inTags;
      });
    };

    // Render cards to DOM
    const renderCards = (itemsToRender) => {
      if (!grid) return;
      grid.innerHTML = '';

      if (itemsToRender.length === 0) {
        if (emptyState) emptyState.style.display = 'block';
        return;
      }

      if (emptyState) emptyState.style.display = 'none';

      const frag = document.createDocumentFragment();

      itemsToRender.forEach((item) => {
        const color = DOMAIN_COLOR_MAP[item.domainCode] || 'cyan';
        const card = document.createElement('div');
        card.className = 'ps-statement-card';
        card.setAttribute('data-id', item.id);
        card.setAttribute('data-domain', item.domainCode);

        card.innerHTML = `
          <div class="ps-statement-card-header">
            <span class="ps-card-id-badge color-${color}">${escapeHtml(item.id)}</span>
            <span class="ps-card-domain-tag">${escapeHtml(item.domain)}</span>
          </div>
          <h4 class="ps-statement-title" title="${escapeHtml(item.title)}">${escapeHtml(item.title)}</h4>
          <p class="ps-statement-desc">${escapeHtml(item.description)}</p>
          <div class="ps-statement-footer">
            <button class="ps-view-link color-${color}" data-id="${escapeHtml(item.id)}" aria-label="View full statement for ${escapeHtml(item.id)}">
              VIEW FULL STATEMENT →
            </button>
            <span class="ps-metadata-tag">HACKSPRINT 24H</span>
          </div>
        `;

        frag.appendChild(card);
      });

      grid.appendChild(frag);
    };

    // Update pagination controls and header
    const updatePaginationAndHeader = (filteredItems) => {
      const totalItems = filteredItems.length;

      // Count badge
      if (countBadge) {
        countBadge.textContent = `${totalItems} PROBLEM STATEMENT${totalItems === 1 ? '' : 'S'}`;
      }

      // Heading text
      if (listHeading) {
        if (activeDomain === 'ALL') {
          listHeading.innerHTML = `ALL <span class="accent-teal">HACKSPRINT '26</span> CHALLENGES`;
        } else {
          const domName = DOMAIN_NAME_MAP[activeDomain] || activeDomain;
          listHeading.innerHTML = `<span class="accent-teal">${escapeHtml(domName.toUpperCase())}</span> CHALLENGES`;
        }
      }

      // Pagination calculation
      const totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE));
      if (currentPage > totalPages) currentPage = totalPages;
      if (currentPage < 1) currentPage = 1;

      let pagedItems = [];
      if (isViewAll || totalItems <= PAGE_SIZE) {
        pagedItems = filteredItems;
        if (pageNumbers) {
          pageNumbers.textContent = `All (${totalItems})`;
        }
        if (pagePrev) pagePrev.disabled = true;
        if (pageNext) pageNext.disabled = true;
      } else {
        const startIndex = (currentPage - 1) * PAGE_SIZE;
        pagedItems = filteredItems.slice(startIndex, startIndex + PAGE_SIZE);
        if (pageNumbers) {
          pageNumbers.textContent = `${currentPage} / ${totalPages}`;
        }
        if (pagePrev) pagePrev.disabled = (currentPage <= 1);
        if (pageNext) pageNext.disabled = (currentPage >= totalPages);
      }

      renderCards(pagedItems);
    };

    const applyFiltersAndRender = () => {
      const filtered = getFilteredItems();
      updatePaginationAndHeader(filtered);
    };

    // Domain Cards click handlers
    domainCards.forEach((card) => {
      card.addEventListener('click', () => {
        const dom = card.getAttribute('data-domain');
        if (!dom) return;

        activeDomain = dom;
        currentPage = 1;

        // Sync card active state
        domainCards.forEach((c) => c.classList.remove('active-card'));
        card.classList.add('active-card');

        // Sync filter bar pills
        filterPills.forEach((p) => {
          p.classList.remove('active-all', 'active-pill');
          p.setAttribute('aria-selected', 'false');
          if (p.getAttribute('data-domain') === dom) {
            if (dom === 'ALL') {
              p.classList.add('active-all');
            } else {
              p.classList.add('active-pill');
            }
            p.setAttribute('aria-selected', 'true');
          }
        });

        applyFiltersAndRender();

        // Smooth scroll to problem statement list header
        if (listHeading) {
          const navHeader = document.getElementById('main-header');
          const navHeight = navHeader ? navHeader.offsetHeight : 80;
          const targetY = listHeading.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      });

      // Keyboard accessibility (Enter / Space)
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });

    // Filter Bar pill clicks
    filterPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        const dom = pill.getAttribute('data-domain') || 'ALL';
        activeDomain = dom;
        currentPage = 1;

        // Reset and highlight pill
        filterPills.forEach((p) => {
          p.classList.remove('active-all', 'active-pill');
          p.setAttribute('aria-selected', 'false');
        });

        if (dom === 'ALL') {
          pill.classList.add('active-all');
          domainCards.forEach((c) => c.classList.remove('active-card'));
        } else {
          pill.classList.add('active-pill');
          domainCards.forEach((c) => {
            if (c.getAttribute('data-domain') === dom) {
              c.classList.add('active-card');
            } else {
              c.classList.remove('active-card');
            }
          });
        }
        pill.setAttribute('aria-selected', 'true');

        applyFiltersAndRender();
      });
    });

    // Pagination buttons
    if (pagePrev) {
      pagePrev.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          applyFiltersAndRender();
          if (listHeading) {
            listHeading.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }
      });
    }

    if (pageNext) {
      pageNext.addEventListener('click', () => {
        const totalPages = Math.ceil(getFilteredItems().length / PAGE_SIZE);
        if (currentPage < totalPages) {
          currentPage++;
          applyFiltersAndRender();
          if (listHeading) {
            listHeading.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }
      });
    }

    // "View All" toggle button
    if (btnViewAll) {
      btnViewAll.addEventListener('click', () => {
        isViewAll = !isViewAll;
        btnViewAll.textContent = isViewAll ? 'Show Less' : 'View All';
        btnViewAll.classList.toggle('active-view-all', isViewAll);
        currentPage = 1;
        applyFiltersAndRender();
      });
    }

    // Search input
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        if (searchClear) {
          searchClear.style.display = searchQuery ? 'block' : 'none';
        }
        currentPage = 1;
        applyFiltersAndRender();
      });
    }

    if (searchClear) {
      searchClear.addEventListener('click', () => {
        searchQuery = '';
        if (searchInput) {
          searchInput.value = '';
          searchInput.focus();
        }
        searchClear.style.display = 'none';
        currentPage = 1;
        applyFiltersAndRender();
      });
    }

    if (btnResetFilters) {
      btnResetFilters.addEventListener('click', () => {
        searchQuery = '';
        if (searchInput) searchInput.value = '';
        if (searchClear) searchClear.style.display = 'none';
        const allTab = document.querySelector('.ps-filter-pill[data-domain="ALL"]');
        if (allTab) {
          allTab.click();
        } else {
          activeDomain = 'ALL';
          currentPage = 1;
          applyFiltersAndRender();
        }
      });
    }

    // Modal Details Inspector logic
    const psModal = document.getElementById('ps-detail-modal');
    const psModalClose = document.getElementById('ps-modal-close');
    const psModalId = document.getElementById('ps-modal-id');
    const psModalDomain = document.getElementById('ps-modal-domain');
    const psModalTitle = document.getElementById('ps-modal-title');
    const psModalDesc = document.getElementById('ps-modal-desc');
    const psModalCopyBtn = document.getElementById('ps-modal-copy-id');
    const psModalPrevBtn = document.getElementById('ps-modal-prev');
    const psModalNextBtn = document.getElementById('ps-modal-next');

    let currentModalProblemIndex = -1;

    const openPsModal = (id) => {
      const idx = psData.findIndex((p) => p.id === id);
      if (idx === -1 || !psModal) return;
      currentModalProblemIndex = idx;
      const item = psData[idx];

      if (psModalId) psModalId.textContent = item.id;
      if (psModalDomain) psModalDomain.textContent = item.domain.toUpperCase();
      if (psModalTitle) psModalTitle.textContent = item.title;
      if (psModalDesc) psModalDesc.textContent = item.description;

      const psModalTags = document.getElementById('ps-modal-tags');
      if (psModalTags) {
        psModalTags.innerHTML = '';
        if (Array.isArray(item.tags) && item.tags.length > 0) {
          item.tags.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'vector-tech-chip';
            span.textContent = tag;
            psModalTags.appendChild(span);
          });
        }
      }

      if (psModalCopyBtn) {
        psModalCopyBtn.textContent = '📋 Copy Problem ID';
        psModalCopyBtn.classList.remove('copied');
      }

      if (psModalPrevBtn) psModalPrevBtn.disabled = (currentModalProblemIndex <= 0);
      if (psModalNextBtn) psModalNextBtn.disabled = (currentModalProblemIndex >= psData.length - 1);

      psModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (psModalClose) psModalClose.focus();
    };

    const navigateModal = (direction) => {
      const targetIdx = currentModalProblemIndex + direction;
      if (targetIdx >= 0 && targetIdx < psData.length) {
        openPsModal(psData[targetIdx].id);
      }
    };

    if (psModalPrevBtn) {
      psModalPrevBtn.addEventListener('click', () => navigateModal(-1));
    }
    if (psModalNextBtn) {
      psModalNextBtn.addEventListener('click', () => navigateModal(1));
    }

    const closePsModal = () => {
      if (psModal) {
        psModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    };

    // Copy Problem ID clipboard utility
    if (psModalCopyBtn) {
      psModalCopyBtn.addEventListener('click', async () => {
        const id = psModalId ? psModalId.textContent.trim() : '';
        if (!id) return;

        const setCopiedUI = () => {
          psModalCopyBtn.textContent = `✓ Copied ${id}!`;
          psModalCopyBtn.classList.add('copied');
          setTimeout(() => {
            psModalCopyBtn.textContent = '📋 Copy Problem ID';
            psModalCopyBtn.classList.remove('copied');
          }, 2500);
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
          try {
            await navigator.clipboard.writeText(id);
            setCopiedUI();
          } catch (err) {
            fallbackCopyText(id, setCopiedUI);
          }
        } else {
          fallbackCopyText(id, setCopiedUI);
        }
      });
    }

    const fallbackCopyText = (text, callback) => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try {
        document.execCommand('copy');
        if (callback) callback();
      } catch (e) {
        console.warn('Fallback copy failed', e);
      }
      document.body.removeChild(ta);
    };

    // Event delegation on card grid for [VIEW FULL STATEMENT →] clicks
    if (grid) {
      grid.addEventListener('click', (e) => {
        const btn = e.target.closest('.ps-view-link');
        if (btn) {
          const id = btn.getAttribute('data-id');
          if (id) openPsModal(id);
        }
      });
    }

    if (psModalClose) {
      psModalClose.addEventListener('click', closePsModal);
    }

    if (psModal) {
      psModal.addEventListener('click', (e) => {
        if (e.target === psModal) closePsModal();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (!psModal || !psModal.classList.contains('active')) return;
      if (e.key === 'Escape') {
        closePsModal();
      } else if (e.key === 'ArrowLeft') {
        navigateModal(-1);
      } else if (e.key === 'ArrowRight') {
        navigateModal(1);
      }
    });

    // Initial render of items
    applyFiltersAndRender();
  };

  let psLoadPromise = null;
  const ensureProblemStatementsLoaded = async () => {
    if (cachedProblemStatements && cachedProblemStatements.length > 0) {
      return cachedProblemStatements;
    }
    if (psLoadPromise) return psLoadPromise;

    psLoadPromise = (async () => {
      // 1. Try server API
      try {
        const isDemo = window.location.search.includes('demo=true') ||
          (!window.location.search.includes('demo=false') && HACKSPRINT_CONFIG.mode === 'demo');
        const apiUrl = isDemo ? '/api/problem-statements?demo=true' : '/api/problem-statements';
        const res = await fetch(apiUrl);
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data) && json.data.length > 0) {
            initProblemStatementsEngine(json.data);
            return json.data;
          }
        }
      } catch (err) {
        // Fall through to sealed payload
      }

      // 2. Fall back to sealed encrypted payload in assets/challenges.enc
      try {
        const encRes = await fetch('assets/challenges.enc');
        if (encRes.ok) {
          const b64 = (await encRes.text()).trim();
          const binary = atob(b64);
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
          }
          const keyBytes = new TextEncoder().encode('HACKSPRINT2026_VCET_AGENTIC_AI');
          for (let i = 0; i < bytes.length; i++) {
            bytes[i] ^= keyBytes[i % keyBytes.length];
          }
          const decodedStr = new TextDecoder('utf-8').decode(bytes);
          const parsed = JSON.parse(decodedStr);
          if (Array.isArray(parsed) && parsed.length > 0) {
            initProblemStatementsEngine(parsed);
            return parsed;
          }
        }
      } catch (err) {
        // Silently handled
      }

      return [];
    })();

    return psLoadPromise;
  };

  // Only auto-load if countdown already expired before page load
  if (currentTargetDate <= Date.now()) {
    ensureProblemStatementsLoaded();
  }

  // =========================================================================
  // 12. DEMO HUB FLOATING CONTROLS & DEV TESTING HARNESS
  // =========================================================================
  const initDemoHub = () => {
    const isDevOrDemo = window.location.search.includes('demo=true') ||
      (!window.location.search.includes('demo=false') && HACKSPRINT_CONFIG.mode === 'demo');

    const floatingPanel = document.getElementById('demo-floating-panel');
    if (!floatingPanel) return;

    if (!isDevOrDemo) {
      floatingPanel.style.display = 'none';
      return;
    }

    const testRevealBtn = document.getElementById('btn-test-reveal') || document.getElementById('demo-hub-test-reveal');
    const resetBtn = document.getElementById('btn-reset-demo') || document.getElementById('demo-hub-reset');
    const skipCelebBtn = document.getElementById('btn-skip-celeb') || document.getElementById('demo-hub-skip-celeb');

    // Instant Test Reveal Now (00:00)
    if (testRevealBtn) {
      testRevealBtn.addEventListener('click', () => {
        countdownFinished = false;
        triggerCelebration();
      });
    }

    // Skip Celebration (Instant Reveal with 0 Animation Delay)
    if (skipCelebBtn) {
      skipCelebBtn.addEventListener('click', () => {
        window.__hacksprint.skipCelebration();
      });
    }

    // Reset Demo (Back to Countdown Phase)
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        window.__hacksprint.reset();
      });
    }
  };

  initDemoHub();

  // Developer Testing Controls exposed on window.__hacksprint
  window.__hacksprint = {
    config: HACKSPRINT_CONFIG,
    setCountdownSeconds: (secs) => {
      // 1. Clear any pending celebration timeouts & particles
      activeCelebrationTimeouts.forEach((t) => clearTimeout(t));
      activeCelebrationTimeouts = [];
      stopCelebrationParticles();

      countdownFinished = false;
      currentTargetDate = Date.now() + (secs * 1000);
      updateDemoTargetBadge();

      const clockGrid = document.getElementById('flip-clock');
      if (clockGrid) {
        clockGrid.classList.remove('numbers-brighten', 'cards-collapse', 'dissolved');
      }

      const countdownSec = document.getElementById('countdown');
      if (countdownSec) {
        countdownSec.classList.remove('panel-flash', 'celebrating');
      }
      document.body.classList.remove('celebrating');

      const flashOverlay = document.getElementById('celebration-flash-overlay');
      if (flashOverlay) flashOverlay.classList.remove('trigger-flash');

      const shockwaveRing = document.getElementById('zero-shockwave-ring');
      if (shockwaveRing) shockwaveRing.classList.remove('expand');
      const shockwaveRing2 = document.getElementById('zero-shockwave-ring-2');
      if (shockwaveRing2) shockwaveRing2.classList.remove('expand');

      const messageWrap = document.getElementById('celebration-message-wrap');
      if (messageWrap) messageWrap.classList.remove('revealed');

      const overlay = document.getElementById('celebration-overlay');
      if (overlay) {
        overlay.classList.remove('active', 'phase-energy-pulse', 'phase-particles', 'trigger-streaks', 'celebration-completed');
        ['celeb-wait-badge', 'celeb-event-title', 'celeb-live-tag', 'celeb-horizon-line'].forEach((id) => {
          const el = document.getElementById(id);
          if (el) el.classList.remove('revealed', 'focused-in');
        });
      }

      const orbitCelebration = document.getElementById('orbit-ring-celebration');
      if (orbitCelebration) {
        orbitCelebration.classList.remove('expansion-burst', 'rings-fade-out');
      }

      const deepeningBg = document.getElementById('celeb-deepening-bg');
      if (deepeningBg) {
        deepeningBg.classList.remove('deepening-active');
      }

      const staggerLetters = document.getElementById('celeb-stagger-letters');
      if (staggerLetters) {
        staggerLetters.classList.remove('typing-active');
      }

      const navBadge = document.getElementById('nav-status-badge');
      if (navBadge) {
        navBadge.classList.remove('live-active');
        const dot = navBadge.querySelector('.nav-status-dot');
        if (dot) dot.className = 'nav-status-dot pulse-amber';
        const txt = navBadge.querySelector('.nav-status-text');
        if (txt) txt.textContent = 'COUNTDOWN ACTIVE';
      }

      const problemSection = document.getElementById('problem-statements');
      if (problemSection) {
        problemSection.style.display = 'none';
        problemSection.classList.remove('revealed');
      }

      const metricProblemsEl = document.getElementById('metric-counter-problems');
      if (metricProblemsEl) metricProblemsEl.textContent = '60';

      const liveCtaWrap = document.getElementById('countdown-live-cta-wrap');
      if (liveCtaWrap) {
        liveCtaWrap.style.display = 'none';
        liveCtaWrap.classList.remove('revealed');
      }

      const demoStatusText = document.getElementById('demo-status-text');
      if (demoStatusText) demoStatusText.textContent = 'COUNTDOWN ACTIVE';

      if (countdownTimerId) clearInterval(countdownTimerId);
      countdownTimerId = setInterval(updateCountdown, 1000);
      updateCountdown();

      console.log(`%c[HackSprint] Countdown set to ${secs}s from now. Zero-state will trigger at 00:00:00.`, 'color: #00f0ff; font-weight: bold;');
    },
    triggerCelebration: () => {
      countdownFinished = false;
      triggerCelebration();
    },
    skipCelebration: () => {
      activeCelebrationTimeouts.forEach((t) => clearTimeout(t));
      activeCelebrationTimeouts = [];
      stopCelebrationParticles();

      countdownFinished = true;
      if (countdownTimerId) clearInterval(countdownTimerId);

      flipUnit('days', '00');
      flipUnit('hours', '00');
      flipUnit('minutes', '00');
      flipUnit('seconds', '00');

      const clockGrid = document.getElementById('flip-clock');
      if (clockGrid) {
        clockGrid.classList.remove('numbers-brighten');
        clockGrid.classList.add('cards-collapse', 'dissolved');
      }

      const countdownSec = document.getElementById('countdown');
      if (countdownSec) {
        countdownSec.classList.remove('panel-flash');
        countdownSec.classList.add('celebrating');
      }
      document.body.classList.add('celebrating');

      const overlay = document.getElementById('celebration-overlay');
      if (overlay) {
        overlay.classList.remove('active', 'phase-energy-pulse', 'phase-particles', 'trigger-streaks');
        overlay.classList.add('celebration-completed');
      }

      ensureProblemStatementsLoaded();

      const problemSection = document.getElementById('problem-statements');
      if (problemSection) {
        problemSection.style.display = 'block';
        problemSection.classList.add('revealed');
      }

      const metricProblemsEl = document.getElementById('metric-counter-problems');
      if (metricProblemsEl) {
        animateCounter(metricProblemsEl, 60, 800);
      }

      const liveCtaWrap = document.getElementById('countdown-live-cta-wrap');
      if (liveCtaWrap) {
        liveCtaWrap.style.display = 'flex';
        liveCtaWrap.classList.add('revealed');
      }

      const demoStatusText = document.getElementById('demo-status-text');
      if (demoStatusText) demoStatusText.textContent = 'PROBLEM REVEAL';

      const navBadge = document.getElementById('nav-status-badge');
      if (navBadge) {
        navBadge.classList.add('live-active');
        const dot = navBadge.querySelector('.nav-status-dot');
        if (dot) dot.className = 'nav-status-dot pulse-green';
        const txt = navBadge.querySelector('.nav-status-text');
        if (txt) txt.textContent = 'HACKATHON IS LIVE';
      }

      if (problemSection) {
        const navHeader = document.getElementById('main-header');
        const navHeight = navHeader ? navHeader.offsetHeight : 80;
        const targetY = problemSection.getBoundingClientRect().top + window.pageYOffset - navHeight - 10;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    },
    reset: () => {
      window.__hacksprint.setCountdownSeconds(30);
      const countdownSec = document.getElementById('countdown');
      if (countdownSec) {
        const navHeader = document.getElementById('main-header');
        const navHeight = navHeader ? navHeader.offsetHeight : 80;
        const targetY = countdownSec.getBoundingClientRect().top + window.pageYOffset - navHeight - 10;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    }
  };

  // =========================================================================
  // 13. ANTI-INSPECT SECURITY SHIELD
  // =========================================================================
  const initSecurityGuard = () => {
    // Check if inspection override flag is passed (for developers / debugging)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('inspect') === 'allow' || sessionStorage.getItem('hacksprint_debug') === 'true') {
      return;
    }

    let lastToast = 0;
    const alertRestricted = () => {
      const now = Date.now();
      if (now - lastToast < 3000) return;
      lastToast = now;
      const tc = document.getElementById('toast-container');
      if (tc) {
        const toast = document.createElement('div');
        toast.className = 'toast-alert warning';
        toast.style.cssText = 'position:fixed;bottom:24px;right:24px;background:#0f172a;color:#f8fafc;padding:12px 20px;border:1px solid #f59e0b;border-radius:10px;box-shadow:0 10px 25px rgba(0,0,0,0.5);font-size:0.88rem;z-index:99999;display:flex;align-items:center;gap:10px;animation:fade-in-up 0.3s ease;';
        toast.innerHTML = '<span style="color:#fbbf24;font-size:1.1rem;">🛡️</span><span>Inspection restricted: Problem statements are sealed until kickoff.</span>';
        tc.appendChild(toast);
        setTimeout(() => {
          toast.style.opacity = '0';
          toast.style.transition = 'opacity 0.4s ease';
          setTimeout(() => toast.remove(), 400);
        }, 3200);
      }
    };

    // 1. Block right-click context menu (prevents "Inspect" and "View Page Source")
    document.addEventListener('contextmenu', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
      e.preventDefault();
      alertRestricted();
    });

    // 2. Block DevTools inspection shortcuts
    window.addEventListener('keydown', (e) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault();
        alertRestricted();
        return false;
      }
      // Ctrl+Shift+I / J / C (DevTools, Console, Inspector)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key)) {
        e.preventDefault();
        alertRestricted();
        return false;
      }
      // Ctrl+U / Cmd+Option+U (View Page Source)
      if ((e.ctrlKey || e.metaKey) && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        alertRestricted();
        return false;
      }
    });
  };

  initSecurityGuard();


  });
