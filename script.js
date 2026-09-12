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
      navLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
      updateMorphPill(link);
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
        sections.forEach((sec) => {
          const top = sec.offsetTop - 160;
          const height = sec.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            currentSectionId = sec.getAttribute('id');
          }
        });

        if (currentSectionId) {
          navLinks.forEach((link) => {
            if (link.getAttribute('data-section') === currentSectionId) {
              if (!link.classList.contains('active')) {
                navLinks.forEach((l) => l.classList.remove('active'));
                link.classList.add('active');
                updateMorphPill(link);
              }
            }
          });
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
      ml.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // =========================================================================
  // 3. MECHANICAL 3D FLIP CLOCK COUNTDOWN
  // =========================================================================
  // Target: September 30, 2026 · 10:00 AM IST
  const targetDate = new Date('2026-09-30T10:00:00+05:30').getTime();

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
    const existingTransits = viewport.querySelectorAll('.slide-enter-prepare, .slide-enter-active, .slide-exit');
    existingTransits.forEach(el => {
      if (el !== currentSlide) el.remove();
    });

    // Create incoming slide positioned directly above
    const incomingSlide = document.createElement('div');
    incomingSlide.className = 'digit-slide slide-enter-prepare';
    incomingSlide.innerHTML = `<span class="digit-text" data-unit="${unitName}">${newValueStr}</span>`;
    viewport.appendChild(incomingSlide);

    // Force browser reflow to register pre-positioning
    void incomingSlide.offsetWidth;

    // Trigger seamless, natural lockstep roll
    currentSlide.classList.remove('slide-current');
    currentSlide.classList.add('slide-exit');

    incomingSlide.classList.remove('slide-enter-prepare');
    incomingSlide.classList.add('slide-enter-active');

    // Settle transition state cleanly without frame discontinuity
    setTimeout(() => {
      if (currentSlide.parentNode === viewport) {
        viewport.removeChild(currentSlide);
      }
      incomingSlide.classList.remove('slide-enter-active');
      incomingSlide.classList.add('slide-current');
    }, 490);
  };

  const updateCountdown = () => {
    const now = Date.now();
    const distance = Math.max(0, targetDate - now);

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
  };

  // Initial call & recurring ticker
  updateCountdown();
  setInterval(updateCountdown, 1000);

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
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterEmail = document.getElementById('newsletter-email');
  const newsletterFeedback = document.getElementById('newsletter-feedback');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', () => {
      const email = newsletterEmail ? newsletterEmail.value.trim() : '';
      if (!email || !email.includes('@')) {
        newsletterFeedback.textContent = 'Please enter a valid email address';
        newsletterFeedback.style.color = '#f87171';
        return;
      }

      newsletterFeedback.textContent = 'Subscribed! You will receive problem track alerts.';
      newsletterFeedback.style.color = '#10b981';
      newsletterEmail.value = '';
      showToast('Transmission received: Subscribed to HackSprint bulletins.');
    });
  }

  const showToast = (message) => {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  };

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
        if (!filter || filter === 'all') {
          ev.style.display = 'block';
        } else if (ev.getAttribute('data-category') === filter || ev.getAttribute('data-day') === filter) {
          ev.style.display = 'block';
        } else {
          ev.style.display = 'none';
        }
      });
    });
  });

  });
