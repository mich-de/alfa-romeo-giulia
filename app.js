/* =============================================
   APP.JS — Alfa Romeo Giulia 2020 Site
   ============================================= */

// ---- NAVBAR SCROLL ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ---- BURGER MENU ----
const burger = document.getElementById('navBurger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = burger.querySelectorAll('span');
  burger.classList.toggle('open');
});
// Close on link click
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ---- ACTIVE NAV LINK ON SCROLL ----
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');
const observerNav = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinkEls.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => observerNav.observe(s));

// ---- REVEAL ON SCROLL ----
const revealEls = document.querySelectorAll('.glass-card, .review-item, .section-header, .upgrade-card');
revealEls.forEach(el => el.classList.add('reveal'));
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
revealEls.forEach(el => revealObserver.observe(el));

// ---- STATS RIBBON COUNTER ANIMATION ----
const statItems = document.querySelectorAll('.stat-item');
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 90);
    }
  });
}, { threshold: 0.4 });
statItems.forEach(el => statsObserver.observe(el));

// ---- GALLERY LIGHTBOX ----
const galleryImages = [
  'images/giulia (1).png',
  'images/giulia (7).png',
  'images/giulia (8).png',
  'images/giulia (9).png',
  'images/giulia (10).png',
  'images/giulia (11).png',
  'images/giulia (12).png',
  'images/giulia (13).png',
  'images/giulia (14).png',
  'images/giulia (15).png',
  'images/giulia (16).png',
  'images/giulia___ (1).png',
  'images/giulia___ (2).png',
  'images/giulia___ (3).png',
  'images/giulia___ (4).png',
  'images/hero_2.png',
  'images/volante.png',
  'images/volante2.png',
  'images/volante3.png',
  'images/volante4.png',
];
const galleryAlts = [
  'Alfa Romeo Giulia – Frontale Dinamico',
  'Alfa Romeo Giulia – Vista Laterale',
  'Alfa Romeo Giulia – Dettaglio Cerchi',
  'Alfa Romeo Giulia – Tre Quarti Posteriore',
  'Alfa Romeo Giulia – Interni Premium',
  'Alfa Romeo Giulia – Posteriore Notturno',
  'Alfa Romeo Giulia – Dettaglio Fari',
  'Alfa Romeo Giulia – Vano Motore 2.2 Turbo',
  'Alfa Romeo Giulia – Profilo Aerodinamico',
  'Alfa Romeo Giulia – Dettaglio Volante',
  'Alfa Romeo Giulia – Vista Stradale',
  'Abitacolo e Sedili in Pelle Nera',
  'Comfort Posteriori e Illuminazione Soft',
  'Console Centrale, Cambio ZF e Selettore DNA',
  'Desktop Panoramico e Plancia di Comando',
  "Scudetto Alfa Romeo e Griglia a Nido d'Ape",
  'POV Guida – Panorama sulla Costiera Amalfitana',
  'Volante Sportivo Alfa Romeo – Studio Detail',
  'Dettaglio Logo e Pulsante Accensione',
  'Finiture Interne e Comandi al Volante',
];

const lightbox     = document.getElementById('lightbox');
const lightboxImg  = document.getElementById('lightboxImg');
const lightboxClose= document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const lightboxCtr  = document.getElementById('lightboxCounter');
let   currentIndex = 0;

function openLightbox(idx) {
  currentIndex = idx;
  updateLightbox();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}
function updateLightbox() {
  lightboxImg.src = galleryImages[currentIndex];
  lightboxImg.alt = galleryAlts[currentIndex];
  lightboxCtr.textContent = `${currentIndex + 1} / ${galleryImages.length}`;
}

document.querySelectorAll('.gallery-item').forEach((item, i) => {
  item.addEventListener('click', () => openLightbox(i));
});
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  updateLightbox();
});
lightboxNext.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  updateLightbox();
});
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft')  { currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length; updateLightbox(); }
  if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % galleryImages.length; updateLightbox(); }
});

// ---- MAINTENANCE FILTERS ----
const filterBtns      = document.querySelectorAll('.filter-btn');
const maintCards      = document.querySelectorAll('.maint-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    maintCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !match);
    });
  });
});

// ---- PARTICLE EFFECT IN HERO ----
(function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const count = 28;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    const size = Math.random() * 3 + 1;
    const x    = Math.random() * 100;
    const y    = Math.random() * 100;
    const dur  = Math.random() * 8 + 6;
    const del  = Math.random() * 6;
    p.style.cssText = `
      position: absolute;
      left: ${x}%;
      top: ${y}%;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: hsla(4, 85%, 60%, ${Math.random() * 0.5 + 0.2});
      animation: particleDrift ${dur}s ${del}s ease-in-out infinite alternate;
      pointer-events: none;
    `;
    container.appendChild(p);
  }
  // Inject keyframe
  const style = document.createElement('style');
  style.textContent = `
    @keyframes particleDrift {
      from { transform: translateY(0) scale(1); opacity: 0.4; }
      to   { transform: translateY(-${20 + Math.random()*30}px) scale(1.4); opacity: 0.8; }
    }
  `;
  document.head.appendChild(style);
})();

// ---- SMOOTH SCROLL OFFSET FOR FIXED NAV ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = navbar.offsetHeight + 16;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  });
});

// ---- TILT EFFECT ON MAINT CARDS ----
document.querySelectorAll('.maint-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 8;
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 8;
    card.style.transform = `perspective(800px) rotateX(${-y}deg) rotateY(${x}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ---- HERO CAROUSEL ----
const heroCarousel = {
  slides: document.querySelectorAll('.hero-slide'),
  dots: document.querySelectorAll('.hero-dot'),
  prevBtn: document.getElementById('heroPrev'),
  nextBtn: document.getElementById('heroNext'),
  currentLabel: document.getElementById('heroCurrentSlide'),
  progressFill: document.getElementById('heroProgressFill'),
  currentIndex: 0,
  intervalId: null,
  duration: 6000,

  init() {
    if (!this.slides.length) return;
    this.addEventListeners();
    this.startTimer();
    this.updateUI();
  },

  addEventListeners() {
    this.prevBtn?.addEventListener('click', () => this.prev());
    this.nextBtn?.addEventListener('click', () => this.next());
    this.dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => this.goTo(idx));
    });
  },

  startTimer() {
    this.stopTimer();
    if (this.progressFill) {
      this.progressFill.style.transition = 'none';
      this.progressFill.style.width = '0%';
      // Force reflow
      this.progressFill.offsetHeight;
      this.progressFill.style.transition = `width ${this.duration}ms linear`;
      this.progressFill.style.width = '100%';
    }
    this.intervalId = setInterval(() => this.next(), this.duration);
  },

  stopTimer() {
    if (this.intervalId) clearInterval(this.intervalId);
  },

  updateUI() {
    this.slides.forEach((s, i) => s.classList.toggle('active', i === this.currentIndex));
    this.dots.forEach((d, i) => d.classList.toggle('active', i === this.currentIndex));
    if (this.currentLabel) {
      this.currentLabel.textContent = (this.currentIndex + 1).toString().padStart(2, '0');
    }
  },

  goTo(index) {
    this.currentIndex = index;
    this.updateUI();
    this.startTimer();
  },

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.goTo(this.currentIndex);
  },

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.goTo(this.currentIndex);
  }
};
heroCarousel.init();

// ---- CHECKLIST PERSISTENCE ----
const checklistInputs = document.querySelectorAll('.checklist-item input[type="checkbox"]');
const checklistFill = document.getElementById('checklistFill');
const checklistLabel = document.getElementById('checklistLabel');
const checklistReset = document.getElementById('checklistReset');

function updateChecklistProgress() {
  if (!checklistInputs.length) return;
  const total = checklistInputs.length;
  const checked = document.querySelectorAll('.checklist-item input[type="checkbox"]:checked').length;
  const percentage = (checked / total) * 100;
  if(checklistFill) checklistFill.style.width = percentage + '%';
  if(checklistLabel) checklistLabel.textContent = `${checked} / ${total} completati`;
}

checklistInputs.forEach(input => {
  const savedState = localStorage.getItem('giulia_checklist_' + input.dataset.id);
  if (savedState === 'true') input.checked = true;

  input.addEventListener('change', () => {
    localStorage.setItem('giulia_checklist_' + input.dataset.id, input.checked);
    updateChecklistProgress();
  });
});

if (checklistReset) {
  checklistReset.addEventListener('click', () => {
    if(confirm('Vuoi davvero resettare la tua checklist?')) {
      checklistInputs.forEach(input => {
        input.checked = false;
        localStorage.removeItem('giulia_checklist_' + input.dataset.id);
      });
      updateChecklistProgress();
    }
  });
}

updateChecklistProgress();
