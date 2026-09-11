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
      id: 'edtech',
      num: '01',
      tag: 'EDTECH & SKILLING',
      title: 'Education & Adaptive Learning',
      overview: 'Transform traditional pedagogies into hyper-personalized, multimodal learning journeys. Focus on vernacular AI comprehension, neurodiverse accessibility, and automated conceptual assessment.',
      samples: [
        'Multimodal AI tutor capable of explaining complex STEM theorems in regional Indian dialects with interactive visualizations.',
        'Inclusive examination and workspace interface tailored for neurodiverse, visually impaired, or hearing-impaired students.',
        'Decentralized skill verification registry linking continuous micro-credentials to verified GitHub/Kaggle project repositories.'
      ],
      tech: ['Gemini / LLaMA 3', 'WebRTC Audio Stream', 'Whisper ASR', 'IndexedDB Offline Cache', 'Next.js / Svelte']
    },
    {
      id: 'open-innovation',
      num: '02',
      tag: 'DISRUPTIVE TECH',
      title: 'Open Innovation & Web3',
      overview: 'Unleash unconstrained engineering creativity. Build novel autonomous AI agents, privacy-first zero-knowledge protocols, decentralized physical infrastructure networks (DePIN), or developer productivity tooling.',
      samples: [
        'Autonomous multi-agent swarms for proactive software bug hunting and self-healing pull request generation.',
        'Zero-knowledge proof identity verification for privacy-preserving civic credential validation.',
        'Decentralized mesh networking for low-latency emergency communications when cellular infrastructure fails.'
      ],
      tech: ['LangChain / AutoGen', 'Rust / WebAssembly', 'ZK-SNARKs', 'Libp2p', 'FastAPI']
    },
    {
      id: 'agritech',
      num: '03',
      tag: 'AGRITECH & SUSTAINABILITY',
      title: 'Agriculture & Smart Farming',
      overview: 'Harness edge AI, computer vision, and IoT telemetry to optimize crop yields, eliminate pesticide overuse, predict weather volatility, and streamline agricultural supply chain equity.',
      samples: [
        'Edge AI smartphone scanner for sub-millimeter early detection of crop leaf pathogens without requiring cellular connectivity.',
        'Automated solar-powered drip irrigation controller adjusting water volume dynamically based on soil moisture and hyperlocal satellite rainfall forecasts.',
        'Direct-to-consumer decentralized mandi pricing intelligence engine cutting out exploitative middlemen.'
      ],
      tech: ['TensorFlow Lite', 'ESP32 / LoRaWAN', 'Sentinel Satellite APIs', 'Python Edge', 'OpenCV']
    },
    {
      id: 'industry',
      num: '04',
      tag: 'MANUFACTURING & ROBOTICS',
      title: 'Industry 4.0 & 5.0',
      overview: 'Bridge cyber-physical domains in smart manufacturing, autonomous robotic warehouse management, digital twins, and safety monitoring in hazardous industrial plants.',
      samples: [
        'Acoustic vibration predictive maintenance model forecasting turbine failure hours before physical anomalies occur.',
        'Autonomous indoor navigation and obstacle avoidance firmware for small warehouse automated guided vehicles (AGVs).',
        'Computer vision PPE and ergonomics compliance monitor protecting factory floor technicians from injuries in real-time.'
      ],
      tech: ['ROS 2 (Robot OS)', 'PyTorch Acoustic Models', 'MQTT / OPC UA', 'Three.js Digital Twin', 'YOLOv10']
    },
    {
      id: 'healthcare',
      num: '05',
      tag: 'MEDTECH & LIFE SCIENCES',
      title: 'Healthcare & Telemedicine',
      overview: 'Democratize clinical diagnostics, accelerate emergency response triage, enable continuous remote patient telemetry, and secure patient records via federated learning architectures.',
      samples: [
        'Rural clinic edge diagnostic assistant scanning smartphone retinal/skin imagery for early retinopathy and melanoma screening.',
        'Continuous remote cardiac anomaly alert system utilizing commercial BLE smartwatches and edge ECG classification.',
        'Voice-guided emergency triage assistant for dispatchers providing step-by-step CPR guidance while tracking emergency ambulance ETA.'
      ],
      tech: ['DICOM Processing', 'CoreML / TFLite', 'Federated Learning', 'WebSockets', 'HIPAA compliant schemas']
    },
    {
      id: 'governance',
      num: '06',
      tag: 'CIVIC TECH & SECURITY',
      title: 'Smart Governance & AI',
      overview: 'Empower municipal operations, citizen grievance workflows, disaster management logistics, and cybersecurity defence mechanisms across public digital infrastructure.',
      samples: [
        'AI-driven municipal issue tracker automatically geolocating and routing road potholes, water leaks, and streetlight outages to field engineers.',
        'Multi-agency flood and disaster relief logistics portal coordinating real-time boat deployments and food distribution during monsoons.',
        'Automated deepfake and coordinated disinformation detection pipeline for municipal public notices.'
      ],
      tech: ['GeoJSON / Leaflet', 'NLP Intent Classification', 'PostGIS', 'Docker', 'FastAPI']
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

  regTriggers.forEach((btn) => {
    if (btn) btn.addEventListener('click', () => openRegisterModal());
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
});
