/* ============================================================
   LUMIÈRE STUDIO — Main JavaScript
   Handles: Preloader, Navbar, Theme, RTL, Scroll Reveal,
            Counters, Back-to-Top, Cookie Banner, Mobile Menu
   ============================================================ */

'use strict';

// ── Preloader ─────────────────────────────────────────────
const preloader = document.getElementById('preloader');
if (preloader) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('hidden');
      document.body.style.overflow = '';
    }, 600);
  });
  document.body.style.overflow = 'hidden';
}

// ── Navbar ────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
const SCROLL_THRESHOLD = 80;

function updateNavbar() {
  if (!navbar) return;
  const isHero = document.querySelector('.hero-slider, .hero, .page-hero');
  if (isHero) {
    if (window.scrollY > SCROLL_THRESHOLD) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('transparent');
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.add('transparent');
    }
  } else {
    navbar.classList.add('scrolled');
    navbar.classList.remove('transparent');
  }
}

if (navbar) {
  const isHero = document.querySelector('.hero-slider, .hero');
  if (isHero) navbar.classList.add('transparent');
  else navbar.classList.add('scrolled');
  window.addEventListener('scroll', updateNavbar, { passive: true });
}

// Active nav link
const navLinks = document.querySelectorAll('.nav-menu a');
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach(link => {
  const linkPath = link.getAttribute('href').split('/').pop();
  if (linkPath === currentPath) link.classList.add('active');
});

// ── Mobile Menu ───────────────────────────────────────────
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');

function toggleMobileMenu(open) {
  if (!hamburger || !mobileMenu) return;
  const isOpen = open !== undefined ? open : !mobileMenu.classList.contains('open');
  hamburger.classList.toggle('open', isOpen);
  mobileMenu.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
  hamburger.setAttribute('aria-expanded', isOpen);
}

if (hamburger) hamburger.addEventListener('click', () => toggleMobileMenu());
if (mobileMenuClose) mobileMenuClose.addEventListener('click', () => toggleMobileMenu(false));

// Close mobile menu on link click
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => toggleMobileMenu(false));
});

// ── Theme (Light / Dark) ──────────────────────────────────
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('lumiere-theme', theme);
  if (themeIcon) {
    themeIcon.textContent = theme === 'dark' ? '☀' : '◑';
    themeToggle?.classList.toggle('active', theme === 'dark');
  }
}

function initTheme() {
  const saved = localStorage.getItem('lumiere-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));
}

initTheme();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

// ── RTL Toggle ────────────────────────────────────────────
const rtlToggle = document.getElementById('rtl-toggle');

function applyDir(dir) {
  document.documentElement.dir = dir;
  localStorage.setItem('lumiere-dir', dir);
  if (rtlToggle) {
    rtlToggle.classList.toggle('active', dir === 'rtl');
    rtlToggle.title = dir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL';
  }
}

function initDir() {
  const saved = localStorage.getItem('lumiere-dir') || 'ltr';
  applyDir(saved);
}

initDir();

if (rtlToggle) {
  rtlToggle.addEventListener('click', () => {
    const current = document.documentElement.dir;
    applyDir(current === 'rtl' ? 'ltr' : 'rtl');
  });
}

// ── Scroll Reveal (IntersectionObserver) ──────────────────
const srElements = document.querySelectorAll('.sr');

const srObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      srObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

srElements.forEach(el => srObserver.observe(el));

// ── Animated Counter ──────────────────────────────────────
function animateCounter(el, target, duration = 2000, suffix = '') {
  const start = performance.now();
  const startVal = 0;

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    const current = Math.round(startVal + (target - startVal) * eased);
    el.textContent = current.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

const counters = document.querySelectorAll('[data-counter]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.counter, 10);
      const suffix = el.dataset.suffix || '';
      animateCounter(el, target, 2200, suffix);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

counters.forEach(el => counterObserver.observe(el));

// ── Back to Top ───────────────────────────────────────────
const backToTop = document.getElementById('back-to-top');

if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 500);
  }, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Cookie Banner ─────────────────────────────────────────
const cookieBanner = document.getElementById('cookie-banner');
const cookieAccept = document.getElementById('cookie-accept');
const cookieDecline = document.getElementById('cookie-decline');

function initCookieBanner() {
  if (!cookieBanner) return;
  if (!localStorage.getItem('lumiere-cookies')) {
    setTimeout(() => cookieBanner.classList.add('show'), 2000);
  }
}

if (cookieAccept) {
  cookieAccept.addEventListener('click', () => {
    localStorage.setItem('lumiere-cookies', 'accepted');
    cookieBanner.classList.remove('show');
  });
}

if (cookieDecline) {
  cookieDecline.addEventListener('click', () => {
    localStorage.setItem('lumiere-cookies', 'declined');
    cookieBanner.classList.remove('show');
  });
}

initCookieBanner();

// ── Smooth internal links ─────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = navbar ? navbar.offsetHeight + 20 : 20;
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  });
});

// ── Image reveal on load ──────────────────────────────────
document.querySelectorAll('.img-reveal').forEach(el => {
  const img = el.querySelector('img');
  if (img?.complete) {
    el.classList.add('revealed');
  } else if (img) {
    img.addEventListener('load', () => el.classList.add('revealed'));
  }
});

// ── Parallax (subtle) ─────────────────────────────────────
const parallaxEls = document.querySelectorAll('[data-parallax]');

if (parallaxEls.length && window.innerWidth > 768) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    parallaxEls.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.3;
      const rect = el.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        el.style.transform = `translateY(${scrollY * speed}px)`;
      }
    });
  }, { passive: true });
}

// ── Cursor Effect (desktop only) ─────────────────────────
if (window.innerWidth > 1024 && !window.matchMedia('(pointer: coarse)').matches) {
  const cursor = document.createElement('div');
  cursor.id = 'custom-cursor';
  cursor.style.cssText = `
    position: fixed; z-index: 9998; pointer-events: none;
    width: 8px; height: 8px; border-radius: 50%;
    background: var(--gold); top: 0; left: 0;
    transition: transform 0.15s ease, opacity 0.3s ease, width 0.3s ease, height 0.3s ease;
    mix-blend-mode: difference;
  `;
  document.body.appendChild(cursor);

  const cursorRing = document.createElement('div');
  cursorRing.id = 'cursor-ring';
  cursorRing.style.cssText = `
    position: fixed; z-index: 9997; pointer-events: none;
    width: 36px; height: 36px; border-radius: 50%;
    border: 1px solid rgba(212,175,55,0.5);
    top: 0; left: 0;
    transition: transform 0.4s ease, opacity 0.3s ease;
    transform: translate(-50%, -50%);
  `;
  document.body.appendChild(cursorRing);

  let cx = 0, cy = 0;
  document.addEventListener('mousemove', e => {
    cx = e.clientX; cy = e.clientY;
    cursor.style.transform = `translate(${cx - 4}px, ${cy - 4}px)`;
    cursorRing.style.transform = `translate(${cx - 18}px, ${cy - 18}px)`;
  });

  document.querySelectorAll('a, button, [role="button"]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '16px';
      cursor.style.height = '16px';
      cursorRing.style.opacity = '0.5';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '8px';
      cursor.style.height = '8px';
      cursorRing.style.opacity = '1';
    });
  });
}

// ── Newsletter Form ───────────────────────────────────────
document.querySelectorAll('.newsletter-form').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const input = this.querySelector('input[type="email"]');
    const btn = this.querySelector('button');
    if (!input?.value || !input.checkValidity()) return;

    const originalText = btn?.textContent;
    if (btn) {
      btn.textContent = '✓ Subscribed!';
      btn.disabled = true;
      btn.style.background = '#22c55e';
    }
    input.value = '';

    setTimeout(() => {
      if (btn) {
        btn.textContent = originalText;
        btn.disabled = false;
        btn.style.background = '';
      }
    }, 3500);
  });
});


// ── Animated Counters ─────────────────────────────────────
function animateCounter(el, target, suffix = '', duration = 2000) {
  const start = performance.now();
  const from = 0;

  function step(timestamp) {
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(from + (target - from) * eased);
    el.textContent = current.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// Trigger counters when they enter the viewport
const counterEls = document.querySelectorAll('[data-counter]');
if (counterEls.length) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-counter'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        animateCounter(el, target, suffix);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.4 });
  counterEls.forEach(el => counterObserver.observe(el));
}

// ── Gallery Filter Tabs ───────────────────────────────────
const filterTabs = document.querySelectorAll('.filter-tab');
if (filterTabs.length) {
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active tab
      filterTabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filter = tab.getAttribute('data-filter');
      const items = document.querySelectorAll('[data-category]');

      items.forEach(item => {
        const match = filter === 'all' || item.getAttribute('data-category') === filter;
        item.classList.toggle('hidden', !match);
        item.style.animation = match ? 'fadeIn 0.4s ease' : '';
      });
    });
  });
}

// ── Contact Form submission ───────────────────────────────
document.querySelectorAll('.contact-form').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    if (btn) {
      btn.textContent = '✓ Message Sent!';
      btn.disabled = true;
      btn.style.background = '#22c55e';
      btn.style.borderColor = '#22c55e';
    }
  });
});

// ── Utility: debounce ─────────────────────────────────────
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

window.LumiereUtils = { debounce, animateCounter };

