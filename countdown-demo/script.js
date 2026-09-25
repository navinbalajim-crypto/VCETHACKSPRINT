/**
 * HACKSPRINT '26 — STANDALONE DEMO ENGINE
 * Complete Countdown -> Celebration -> Problem Statement Reveal State Machine
 * Vanilla JavaScript (No Frameworks, Zero Dependencies)
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. STATE & CONSTANTS
  // --------------------------------------------------------------------------
  const APP_PHASES = {
    COUNTDOWN: 'countdown',
    CELEBRATING: 'celebrating',
    LIVE: 'live',
    PROBLEM_REVEAL: 'problem-reveal',
    BROWSING: 'browsing'
  };

  let currentPhase = APP_PHASES.COUNTDOWN;
  let countdownTimerId = null;
  let isCountdownFrozen = false;
  let celebrationTimeouts = [];
  let currentActiveDomain = 'ALL';
  let activeModalIndex = 0;
  let filteredProblems = [];

  // Countdown Target: September 30, 2026 at 10:00 AM IST (+05:30)
  const targetDate = new Date("2026-09-30T10:00:00+05:30");

  // DOM Elements Cache
  const body = document.body;
  const countdownWrapper = document.getElementById('countdown-section-wrapper');
  const countdownInner = document.getElementById('countdown-inner');
  const flipClockGrid = document.getElementById('flip-clock');
  const daysEl = document.getElementById('digit-days');
  const hoursEl = document.getElementById('digit-hours');
  const minutesEl = document.getElementById('digit-minutes');
  const secondsEl = document.getElementById('digit-seconds');

  const celebrationWrapper = document.getElementById('celebration-wrapper');
  const flashOverlay = document.getElementById('celebration-flash-overlay');
  const shockwaveRing1 = document.getElementById('shockwave-ring-1');
  const shockwaveRing2 = document.getElementById('shockwave-ring-2');
  const celebrationCanvas = document.getElementById('celebration-canvas');
  const btnProceedReveal = document.getElementById('btn-proceed-reveal');

  const psSection = document.getElementById('ps-reveal-section');
  const psCounterEl = document.getElementById('ps-counter');
  const domainFilterBar = document.getElementById('domain-filter-bar');
  const activeDomainBadge = document.getElementById('active-domain-badge');
  const activeDomainName = document.getElementById('active-domain-name');
  const activeDomainCount = document.getElementById('active-domain-count');
  const activeDomainBanner = document.getElementById('active-domain-banner');
  const psCardsGrid = document.getElementById('ps-cards-grid');

  const psModal = document.getElementById('ps-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalIdBadge = document.getElementById('modal-id-badge');
  const modalDomainTag = document.getElementById('modal-domain-tag');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalPrevBtn = document.getElementById('modal-prev-btn');
  const modalNextBtn = document.getElementById('modal-next-btn');

  const btnTestReveal = document.getElementById('btn-test-reveal');
  const btnResetDemo = document.getElementById('btn-reset-demo');
  const btnSkipCeleb = document.getElementById('btn-skip-celeb');
  const demoStatusText = document.getElementById('demo-status-text');

  // Track previous digits to trigger 3D mechanical card flip
  let prevDigits = { days: '', hours: '', minutes: '', seconds: '' };

  // --------------------------------------------------------------------------
  // 2. MECHANICAL 3D FLIP CLOCK LOGIC
  // --------------------------------------------------------------------------
  function formatTwoDigits(num) {
    return String(Math.max(0, num)).padStart(2, '0');
  }

  function updateFlipDigit(unitName, containerEl, newValue) {
    if (!containerEl) return;
    const currentVal = prevDigits[unitName];
    if (currentVal === newValue) return;

    prevDigits[unitName] = newValue;
    const viewport = containerEl.querySelector('.digit-roll-viewport');
    if (!viewport) {
      containerEl.textContent = newValue;
      return;
    }

    const currentSlide = viewport.querySelector('.digit-slide.slide-current');
    if (!currentSlide) {
      viewport.innerHTML = `
        <div class="digit-slide slide-current">
          <span class="digit-text">${newValue}</span>
        </div>
      `;
      return;
    }

    // Perform smooth 3D mechanical flip: current rotates out, incoming rotates in
    currentSlide.classList.remove('slide-current');
    currentSlide.classList.add('slide-flip-out');

    const incomingSlide = document.createElement('div');
    incomingSlide.className = 'digit-slide slide-flip-in';
    incomingSlide.innerHTML = `<span class="digit-text">${newValue}</span>`;
    viewport.appendChild(incomingSlide);

    // Settle into steady state
    setTimeout(() => {
      incomingSlide.classList.remove('slide-flip-in');
      incomingSlide.classList.add('slide-current');
      if (currentSlide.parentNode) {
        currentSlide.parentNode.removeChild(currentSlide);
      }
    }, 450);
  }

  function updateCountdown() {
    if (isCountdownFrozen) return;

    const now = new Date().getTime();
    const target = targetDate.getTime();
    const distance = target - now;

    if (distance <= 0) {
      // Countdown reached zero naturally!
      updateFlipDigit('days', daysEl, '00');
      updateFlipDigit('hours', hoursEl, '00');
      updateFlipDigit('minutes', minutesEl, '00');
      updateFlipDigit('seconds', secondsEl, '00');
      handleCountdownComplete();
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    updateFlipDigit('days', daysEl, formatTwoDigits(days));
    updateFlipDigit('hours', hoursEl, formatTwoDigits(hours));
    updateFlipDigit('minutes', minutesEl, formatTwoDigits(minutes));
    updateFlipDigit('seconds', secondsEl, formatTwoDigits(seconds));
  }

  function startCountdownTimer() {
    if (countdownTimerId) clearInterval(countdownTimerId);
    isCountdownFrozen = false;
    updateCountdown();
    countdownTimerId = setInterval(updateCountdown, 1000);
  }

  // --------------------------------------------------------------------------
  // 3. UNIFIED COUNTDOWN ZERO & CELEBRATION SEQUENCE
  // Both countdown hitting zero and "TEST REVEAL NOW" invoke this exact function!
  // --------------------------------------------------------------------------
  function handleCountdownComplete() {
    if (currentPhase !== APP_PHASES.COUNTDOWN) return;
    currentPhase = APP_PHASES.CELEBRATING;
    isCountdownFrozen = true;
    if (countdownTimerId) clearInterval(countdownTimerId);

    // Force display of 00 : 00 : 00 : 00
    updateFlipDigit('days', daysEl, '00');
    updateFlipDigit('hours', hoursEl, '00');
    updateFlipDigit('minutes', minutesEl, '00');
    updateFlipDigit('seconds', secondsEl, '00');

    updateDemoStatus('CELEBRATING');
    startCelebration();
  }

  function startCelebration() {
    // 0.00s: Freeze countdown numbers
    // 0.08s: All countdown numbers briefly brighten with neon glow
    celebrationTimeouts.push(setTimeout(() => {
      if (flipClockGrid) flipClockGrid.classList.add('brighten');
    }, 80));

    // 0.18s: Light panel receives smooth radial breakout flash
    celebrationTimeouts.push(setTimeout(() => {
      if (flashOverlay) flashOverlay.classList.add('trigger-flash');
    }, 180));

    // 0.25s: Neon cyan & purple energy shockwaves expand with smooth ease-out
    celebrationTimeouts.push(setTimeout(() => {
      if (shockwaveRing1) shockwaveRing1.classList.add('trigger-shockwave');
      if (shockwaveRing2) shockwaveRing2.classList.add('trigger-shockwave');
    }, 250));

    // 0.30s: Fullscreen celebration wrapper activates, crossfading softly
    celebrationTimeouts.push(setTimeout(() => {
      if (celebrationWrapper) celebrationWrapper.classList.add('active');
    }, 300));

    // 0.35s: Particle burst begins on Canvas
    celebrationTimeouts.push(setTimeout(() => {
      startParticleBurst();
    }, 350));

    // 0.55s: Background transitions from light panel to deep cosmic navy (~350ms smooth crossfade)
    celebrationTimeouts.push(setTimeout(() => {
      if (countdownWrapper) countdownWrapper.classList.add('cosmic-active');
      body.classList.add('phase-celebrating');
    }, 550));

    // 0.70s: Countdown cards scale down, dissolve, and recede smoothly
    celebrationTimeouts.push(setTimeout(() => {
      if (countdownInner) countdownInner.classList.add('cards-dissolving');
    }, 700));

    // 1.35s: Horizontal neon streaks accelerate outward across settled background
    celebrationTimeouts.push(setTimeout(() => {
      if (celebrationWrapper) celebrationWrapper.classList.add('trigger-streaks');
    }, 1350));

    // 1.60s: Keynote card appears cleanly on calm background (particles have receded!)
    celebrationTimeouts.push(setTimeout(() => {
      currentPhase = APP_PHASES.LIVE;
      body.classList.add('phase-live');
      updateDemoStatus('LIVE ANNOUNCEMENT');
    }, 1600));

    // 6.50s: Automatically transition to Problem Statement Reveal (or click CTA to proceed sooner)
    celebrationTimeouts.push(setTimeout(() => {
      revealProblemStatements();
    }, 6500));
  }

  // --------------------------------------------------------------------------
  // 4. HIGH-PERFORMANCE 60FPS CANVAS PARTICLE ENGINE (DELTA-TIME EASING)
  // --------------------------------------------------------------------------
  let particleReqId = null;
  let particlesList = [];

  function startParticleBurst() {
    if (!celebrationCanvas) return;
    const ctx = celebrationCanvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let width = (celebrationCanvas.width = window.innerWidth);
    let height = (celebrationCanvas.height = window.innerHeight);

    const colors = [
      '#00f0ff', '#00f0ff', '#d946ef', '#ff007a', '#fbbf24', '#f59e0b', '#ffffff'
    ];

    particlesList = [];
    const count = 160;
    const cx = width / 2;
    const cy = height / 2;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 13 + 3.5;
      particlesList.push({
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

    function renderParticles(timestamp) {
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
          particlesList.push({
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
          particlesList.push({
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

      for (let i = particlesList.length - 1; i >= 0; i--) {
        const p = particlesList[i];

        p.vx *= Math.pow(p.drag, dt);
        p.vy = p.vy * Math.pow(p.drag, dt) + p.gravity * dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.alpha -= p.decay * dt;

        if (p.alpha <= 0 || p.y > height + 30) {
          particlesList.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.6, p.size * p.alpha), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));
        ctx.fill();

        if (p.isSpark && p.alpha > 0.35) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 1.8 * p.alpha, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha * 0.22;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;

      if (particlesList.length > 0) {
        particleReqId = requestAnimationFrame(renderParticles);
      }
    }

    particleReqId = requestAnimationFrame(renderParticles);
  }

  function stopParticleBurst() {
    if (particleReqId) {
      cancelAnimationFrame(particleReqId);
      particleReqId = null;
    }
    particlesList = [];
    if (celebrationCanvas) {
      const ctx = celebrationCanvas.getContext('2d');
      if (ctx) ctx.clearRect(0, 0, celebrationCanvas.width, celebrationCanvas.height);
    }
  }

  // --------------------------------------------------------------------------
  // 5. PROBLEM STATEMENT REVEAL & EXPLORER
  // --------------------------------------------------------------------------
  function revealProblemStatements() {
    currentPhase = APP_PHASES.PROBLEM_REVEAL;
    updateDemoStatus('PROBLEM STATEMENTS REVEALED');

    // Hide countdown and celebration overlays softly
    if (countdownWrapper) countdownWrapper.style.display = 'none';
    if (celebrationWrapper) {
      celebrationWrapper.style.opacity = '0';
      setTimeout(() => {
        celebrationWrapper.classList.remove('active');
        stopParticleBurst();
      }, 600);
    }

    // Display Problem Statement Reveal Section
    if (psSection) {
      psSection.classList.add('visible');
      psSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Animate 0 -> 60 counter
    animateCounter(0, 60, 1400);

    // Render Domain Navigation and initial Problem Cards
    renderDomainFilter();
    filterAndRenderProblems('ALL');
    currentPhase = APP_PHASES.BROWSING;
  }

  function animateCounter(start, end, duration) {
    if (!psCounterEl) return;
    let startTime = null;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = Math.floor(easeProgress * (end - start) + start);
      psCounterEl.textContent = String(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        psCounterEl.textContent = String(end);
      }
    }
    requestAnimationFrame(step);
  }

  function renderDomainFilter() {
    if (!domainFilterBar) return;
    domainFilterBar.innerHTML = '';

    // "ALL" Filter Button
    const allBtn = document.createElement('button');
    allBtn.className = `domain-btn ${currentActiveDomain === 'ALL' ? 'active' : ''}`;
    allBtn.innerHTML = `<span>ALL DOMAINS</span><span class="btn-count">60</span>`;
    allBtn.addEventListener('click', () => filterAndRenderProblems('ALL'));
    domainFilterBar.appendChild(allBtn);

    // 12 Domain Filter Buttons
    window.DOMAINS_DATA.forEach(dom => {
      const btn = document.createElement('button');
      btn.className = `domain-btn ${currentActiveDomain === dom.code ? 'active' : ''}`;
      btn.innerHTML = `<span>${dom.code}</span><span class="btn-count">${dom.count}</span>`;
      btn.title = dom.name;
      btn.addEventListener('click', () => filterAndRenderProblems(dom.code));
      domainFilterBar.appendChild(btn);
    });
  }

  function filterAndRenderProblems(domainCode) {
    currentActiveDomain = domainCode;
    renderDomainFilter();

    const allProblems = window.PROBLEM_STATEMENTS_DATA || [];
    filteredProblems = domainCode === 'ALL'
      ? allProblems
      : allProblems.filter(p => p.domainCode === domainCode);

    // Update Domain Header Banner
    if (activeDomainBanner) {
      if (domainCode === 'ALL') {
        activeDomainBanner.style.setProperty('--domain-accent', '#00f0ff');
        activeDomainBadge.textContent = 'ALL';
        activeDomainName.textContent = 'ALL DOMAINS · COMPLETE CHALLENGE SET';
        activeDomainCount.textContent = '60 PROBLEM STATEMENTS';
      } else {
        const domInfo = window.DOMAINS_DATA.find(d => d.code === domainCode);
        const accent = domInfo ? domInfo.color : '#00f0ff';
        activeDomainBanner.style.setProperty('--domain-accent', accent);
        activeDomainBadge.textContent = domainCode;
        activeDomainName.textContent = domInfo ? `${domInfo.name}` : domainCode;
        activeDomainCount.textContent = '5 PROBLEM STATEMENTS';
      }
    }

    // Render Cards Grid
    if (!psCardsGrid) return;
    psCardsGrid.innerHTML = '';

    filteredProblems.forEach((problem, index) => {
      const domInfo = window.DOMAINS_DATA.find(d => d.code === problem.domainCode);
      const accent = domInfo ? domInfo.color : '#00f0ff';

      const card = document.createElement('article');
      card.className = 'ps-card';
      card.style.setProperty('--card-accent', accent);
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View details for challenge ${problem.id}: ${problem.title}`);

      card.innerHTML = `
        <div>
          <div class="card-header">
            <span class="card-id-badge">${problem.id}</span>
            <span class="card-domain-label">${problem.domain}</span>
          </div>
          <h3 class="card-title">${problem.title}</h3>
          <p class="card-desc-preview">${problem.description}</p>
        </div>
        <div class="card-footer">
          <span class="card-action-text">EXPLORE CHALLENGE &rarr;</span>
          <span style="font-size: 1.1rem;">${domInfo ? domInfo.icon : '⚡'}</span>
        </div>
      `;

      card.addEventListener('click', () => openModal(index));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(index);
        }
      });

      psCardsGrid.appendChild(card);
    });
  }

  // --------------------------------------------------------------------------
  // 6. ACCESSIBLE PROBLEM STATEMENT MODAL
  // --------------------------------------------------------------------------
  function openModal(index) {
    if (!filteredProblems || !filteredProblems[index]) return;
    activeModalIndex = index;
    const problem = filteredProblems[index];
    const domInfo = window.DOMAINS_DATA.find(d => d.code === problem.domainCode);
    const accent = domInfo ? domInfo.color : '#00f0ff';

    if (psModal) {
      psModal.style.setProperty('--modal-accent', accent);
      modalIdBadge.textContent = problem.id;
      modalDomainTag.textContent = `${domInfo ? domInfo.icon : ''} ${problem.domain}`;
      modalTitle.textContent = problem.title;
      modalDescription.textContent = problem.description;

      modalPrevBtn.disabled = index === 0;
      modalNextBtn.disabled = index === filteredProblems.length - 1;

      psModal.classList.add('open');
      psModal.setAttribute('aria-hidden', 'false');
      modalCloseBtn.focus();
    }
  }

  function closeModal() {
    if (psModal) {
      psModal.classList.remove('open');
      psModal.setAttribute('aria-hidden', 'true');
    }
  }

  function navigateModal(direction) {
    const newIndex = activeModalIndex + direction;
    if (newIndex >= 0 && newIndex < filteredProblems.length) {
      openModal(newIndex);
    }
  }

  // --------------------------------------------------------------------------
  // 7. DEVELOPER DEMO CONTROLS & RESET ENGINE
  // --------------------------------------------------------------------------
  function resetDemo() {
    // Clear all scheduled timeouts
    celebrationTimeouts.forEach(t => clearTimeout(t));
    celebrationTimeouts = [];

    // Stop particle system
    stopParticleBurst();

    // Reset state flags
    currentPhase = APP_PHASES.COUNTDOWN;
    isCountdownFrozen = false;
    body.classList.remove('phase-celebrating', 'phase-live');

    // Restore countdown section
    if (countdownWrapper) {
      countdownWrapper.style.display = 'flex';
      countdownWrapper.classList.remove('cosmic-active');
    }
    if (countdownInner) {
      countdownInner.classList.remove('cards-dissolving');
    }
    if (flipClockGrid) {
      flipClockGrid.classList.remove('brighten');
    }

    // Reset celebration elements
    if (celebrationWrapper) {
      celebrationWrapper.classList.remove('active', 'trigger-streaks');
      celebrationWrapper.style.opacity = '1';
    }
    if (flashOverlay) {
      flashOverlay.classList.remove('trigger-flash');
    }
    if (shockwaveRing1) {
      shockwaveRing1.classList.remove('trigger-shockwave');
    }
    if (shockwaveRing2) {
      shockwaveRing2.classList.remove('trigger-shockwave');
    }

    // Hide Problem Statement section & modal
    if (psSection) {
      psSection.classList.remove('visible');
    }
    closeModal();

    // Restart timer
    prevDigits = { days: '', hours: '', minutes: '', seconds: '' };
    startCountdownTimer();
    updateDemoStatus('COUNTDOWN ACTIVE');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function updateDemoStatus(statusText) {
    if (demoStatusText) demoStatusText.textContent = statusText;
  }

  // --------------------------------------------------------------------------
  // 8. EVENT LISTENERS SETUP
  // --------------------------------------------------------------------------
  function initEvents() {
    // Test Reveal Now Button (Simulate Zero Event)
    if (btnTestReveal) {
      btnTestReveal.addEventListener('click', handleCountdownComplete);
    }

    // Reset Demo Button
    if (btnResetDemo) {
      btnResetDemo.addEventListener('click', resetDemo);
    }

    // Skip Celebration Button
    if (btnSkipCeleb) {
      btnSkipCeleb.addEventListener('click', () => {
        celebrationTimeouts.forEach(t => clearTimeout(t));
        celebrationTimeouts = [];
        revealProblemStatements();
      });
    }

    // Immediate Proceed from Celebration Button
    if (btnProceedReveal) {
      btnProceedReveal.addEventListener('click', revealProblemStatements);
    }

    // Modal Events
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalPrevBtn) modalPrevBtn.addEventListener('click', () => navigateModal(-1));
    if (modalNextBtn) modalNextBtn.addEventListener('click', () => navigateModal(1));

    if (psModal) {
      psModal.addEventListener('click', (e) => {
        if (e.target === psModal) closeModal();
      });
    }

    // Keyboard Shortcuts (ESC to close modal, Arrow keys for modal navigation)
    window.addEventListener('keydown', (e) => {
      if (psModal && psModal.classList.contains('open')) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') navigateModal(-1);
        if (e.key === 'ArrowRight') navigateModal(1);
      }
    });

    // Window Resize Handler for Particle Canvas
    window.addEventListener('resize', () => {
      if (celebrationCanvas) {
        celebrationCanvas.width = window.innerWidth;
        celebrationCanvas.height = window.innerHeight;
      }
    });
  }

  // --------------------------------------------------------------------------
  // 9. INITIALIZATION
  // --------------------------------------------------------------------------
  function init() {
    initEvents();
    startCountdownTimer();
    updateDemoStatus('COUNTDOWN ACTIVE');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
