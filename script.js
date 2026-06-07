/* =========================================================
   Portfolio — System Architecture Engine Script File
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const burger = document.querySelector(".nav__burger");

  /* Anchor navigation controls with dynamic scroll injection */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      nav?.classList.remove("is-open");
    });
  });

  /* Hamburger layout toggle switches */
  burger?.addEventListener("click", () => nav.classList.toggle("is-open"));

  /* Reveal About Section + Progress bars animation loops */
  const aboutSection = document.querySelector(".about");
  const bars = document.querySelectorAll(".progress span");
  const targets = [];
  bars.forEach((bar) => {
    targets.push(bar.style.width || "0%");
    bar.style.width = "0%";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          bars.forEach((bar, i) => {
            setTimeout(() => { bar.style.width = targets[i]; }, 200 + i * 120);
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  if (aboutSection) observer.observe(aboutSection);

  /* ---------- Integrated: Tech Stack Scroll Intersection Reveal ---------- */
  const techStackSection = document.querySelector(".tech-stack");
  if (techStackSection) {
    const techObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            techObserver.unobserve(entry.target); // Trigger logic exactly once
          }
        });
      },
      { threshold: 0.15 }
    );
    techObserver.observe(techStackSection);
  }

  /* Reveal Experience Journey Section + Timeline track line ignition */
  const expSection = document.querySelector(".experience");
  const timeline = document.querySelector(".timeline");
  if (expSection) {
    const expObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            expSection.classList.add("is-visible");
            setTimeout(() => timeline && timeline.classList.add("is-active"), 600);
            expObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    expObserver.observe(expSection);
  }

  /* Projects section background tracking observer reveal initialization */
  const projectsSection = document.querySelector(".projects");
  if (projectsSection) {
    const projObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            projectsSection.classList.add("is-visible");
            projObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    projObserver.observe(projectsSection);
  }

  /* ---------- Scroll Spy Active State Tracker Synchronizer ---------- */
  const sectionIds = ["home", "about", "tech-stack", "experience", "projects", "social"];
  const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
  const navLinks = document.querySelectorAll(".nav__link");
  
  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
  );
  sections.forEach((s) => spyObserver.observe(s));

  /* =========================================================
     PROJECT CASE REPOSITORY SCHEMATICS DATA MATRIX
  ========================================================= */
  const PROJECT_DATA = {
    "1": {
      title: "AI CHATBOT",
      overview: "An intelligent conversational assistant designed to perform multi-turn contextually aware dialogues smoothly using natural language processing chains.",
      problem: "Standard rule-based response architectures collapse during open-ended human prompts, requiring a decoupled vector mapping database layer.",
      goals: "Create an adaptive messaging dashboard handling continuous context parsing parameters below 200ms processing times natively.",
      features: ["Tokenized context buffer queues", "Dynamic prompt structuring optimization", "Streaming API text delivery pipelines"],
      tech: ["Python", "NLP Pipeline", "OpenCV Core", "Django REST Framework", "Machine Learning"],
      sourceUrl: "https://github.com/Ayesha-decodes/AI-Chatbot",
      modalImg: "bot12x5.png"
    },
    "2": {
      title: "BITCOIN PRICE PREDICTOR",
      overview: "A time-series analytical engine deploying regression architectures to model and forecast historical value variations across decentralized crypto structures.",
      problem: "High volatile financial noise patterns cause sudden gradient dispersion issues across classic linear evaluation formulas.",
      goals: "Isolate structural volume trends from chaotic market noises to generate micro-trend movement directional predictions.",
      features: ["Rolling window algorithmic models", "Feature scaling data filters", "Live streaming metric visualizations"],
      tech: ["Python", "Pandas Engine", "Scikit-Learn Tools", "TensorFlow Layers", "Data Architecture"],
      sourceUrl: "https://github.com/Ayesha-decodes/Bitcoin-Price-Predictor",
      modalImg: "bit12x5.png"
    },
    "3": {
      title: "YOUTUBE VIDEO SUMMARIZER",
      overview: "A browser application framework that interfaces with real-time video speech streams to generate rapid readable analytical overview abstracts.",
      problem: "Users face long duration learning bottlenecks scanning video content blocks manually for target technical data points.",
      goals: "Condense long technical logs into contextual bulleted maps with custom temporal timestamps dynamically synchronized.",
      features: ["Automated transcript scraper arrays", "Semantic clustering processing text blocks", "Asynchronous API integration links"],
      tech: ["JavaScript Core", "HTML5 Layouts", "CSS3 Canvas", "Express Engines", "API Gateway Channels"],
      sourceUrl: "https://github.com/Ayesha-decodes/YouTube-Video-Summarizer",
      modalImg: "yt12x5.png"
    },
    "4": {
      title: "STOCK PRICE PREDICTOR",
      overview: "A data orchestration terminal generating probability matrices mapping structural market variance thresholds against standard corporate indexes.",
      problem: "Fragmented historical equity variables lead to standard model over-fitting when processed across simple datasets nodes.",
      goals: "Enforce rigorous cross-validation layers balancing variance indices to match current moving standard variations trends.",
      features: ["Multi-variate predictive processing pipelines", "Live database sync arrays", "Optimized algorithmic risk calculations"],
      tech: ["Python Core", "NumPy Analytics", "Matplotlib Systems", "Machine Learning", "Predictive Analytics"],
      sourceUrl: "https://github.com/Ayesha-decodes/Stock-Price-Predictor",
      modalImg: "stock12x5.png"
    }
  };

  /* =========================================================
     MODAL LAYOUT OVERLAY DISPATCH CONTROLLERS
  ========================================================= */
  const modal = document.getElementById("projectModal");
  const titleEl = document.getElementById("modalTitle");
  const overviewEl = document.getElementById("modalOverview");
  const problemEl = document.getElementById("modalProblem");
  const goalsEl = document.getElementById("modalGoals");
  const featuresEl = document.getElementById("modalFeatures");
  const techEl = document.getElementById("modalTech");
  const modalImgEl = document.getElementById("modalImage");
  const viewSourceBtn = document.getElementById("modalViewSource");

  function openModal(id) {
    const data = PROJECT_DATA[id];
    if (!data) return;

    titleEl.textContent = data.title;
    overviewEl.textContent = data.overview;
    problemEl.textContent = data.problem;
    goalsEl.textContent = data.goals;

    featuresEl.innerHTML = data.features.map((f) => `<li>${f}</li>`).join("");
    techEl.innerHTML = data.tech.map((t) => `<span class="badge">${t}</span>`).join("");

    if (modalImgEl) modalImgEl.src = data.modalImg;
    if (viewSourceBtn) viewSourceBtn.href = data.sourceUrl;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-view]").forEach((btn) => {
    btn.addEventListener("click", () => openModal(btn.getAttribute("data-view")));
  });

  modal.querySelectorAll("[data-close]").forEach((el) => {
    el.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });
});
(() => {
  const section = document.getElementById('contact');
  if (!section) return;

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        section.classList.add('is-visible');
        io.unobserve(section);
      }
    });
  }, { threshold: 0.18 });
  io.observe(section);

  // Active nav state
  const navLinks = document.querySelectorAll('.nav-link');
  const navIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        navLinks.forEach((l) => l.classList.toggle('is-active', l.dataset.nav === 'contact'));
      }
    });
  }, { threshold: 0.5 });
  navIO.observe(section);

  // Smooth scroll (works for all anchor links)
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (ev) => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      ev.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Ripple effect on submit
  const btn = section.querySelector('.contact__submit');
  btn?.addEventListener('click', (ev) => {
    const r = document.createElement('span');
    r.className = 'ripple';
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    r.style.width = r.style.height = size + 'px';
    r.style.left = (ev.clientX - rect.left - size / 2) + 'px';
    r.style.top  = (ev.clientY - rect.top  - size / 2) + 'px';
    btn.appendChild(r);
    setTimeout(() => r.remove(), 600);
  });

  // Form submit (replace with your endpoint)
  const form = section.querySelector('.contact__card');
  form?.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    console.log('Contact submission:', data);
    form.reset();
  });
})();
