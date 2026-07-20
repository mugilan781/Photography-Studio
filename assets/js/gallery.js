/* ============================================================
   LUMIÈRE STUDIO — Gallery (Masonry + Filter + Lightbox)
   ============================================================ */

'use strict';

// ── Gallery Filter ─────────────────────────────────────────
class GalleryFilter {
  constructor(container) {
    this.container = container;
    this.items = [...container.querySelectorAll('.gallery-item')];
    this.tabs = [...document.querySelectorAll('.filter-tab')];
    this.activeFilter = 'all';

    this.init();
  }

  init() {
    this.tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.filter(tab.dataset.filter);
      });
    });

    // Set first tab active
    this.tabs[0]?.classList.add('active');
  }

  filter(category) {
    this.activeFilter = category;
    this.items.forEach((item, i) => {
      const itemCat = item.dataset.category;
      const show = category === 'all' || itemCat === category;

      if (show) {
        item.style.display = '';
        item.style.animation = 'none';
        item.offsetHeight; // force reflow
        item.style.animation = `fadeInUp 0.5s ease ${i * 0.04}s both`;
      } else {
        item.style.display = 'none';
      }
    });
  }
}

// ── Lightbox ───────────────────────────────────────────────
class Lightbox {
  constructor() {
    this.el = document.getElementById('lightbox');
    this.imgEl = this.el?.querySelector('.lightbox-img');
    this.closeBtn = this.el?.querySelector('.lightbox-close');
    this.prevBtn = this.el?.querySelector('.lightbox-prev');
    this.nextBtn = this.el?.querySelector('.lightbox-next');
    this.counter = this.el?.querySelector('.lightbox-counter');
    this.captionEl = this.el?.querySelector('.lightbox-caption');
    this.items = [];
    this.currentIndex = 0;

    if (!this.el) return;
    this.init();
  }

  init() {
    // Bind gallery items
    this.bindItems();

    // Controls
    this.closeBtn?.addEventListener('click', () => this.close());
    this.prevBtn?.addEventListener('click', () => this.navigate(-1));
    this.nextBtn?.addEventListener('click', () => this.navigate(1));

    // Close on backdrop
    this.el.addEventListener('click', e => {
      if (e.target === this.el) this.close();
    });

    // Keyboard
    document.addEventListener('keydown', e => {
      if (!this.el.classList.contains('open')) return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.navigate(-1);
      if (e.key === 'ArrowRight') this.navigate(1);
    });

    // Touch swipe
    let startX = 0;
    this.el.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    this.el.addEventListener('touchend', e => {
      const delta = e.changedTouches[0].clientX - startX;
      if (Math.abs(delta) > 50) delta < 0 ? this.navigate(1) : this.navigate(-1);
    });
  }

  bindItems() {
    document.querySelectorAll('[data-lightbox]').forEach((item, index) => {
      item.addEventListener('click', () => {
        this.items = [...document.querySelectorAll('[data-lightbox]')].map(el => ({
          src: el.dataset.lightbox || el.querySelector('img')?.src,
          caption: el.dataset.caption || el.querySelector('img')?.alt || ''
        }));
        this.open(index);
      });
    });
  }

  open(index) {
    if (!this.el) return;
    this.currentIndex = index;
    this.show();
    this.el.classList.add('open');
    document.body.style.overflow = 'hidden';
    this.el.focus();
  }

  close() {
    this.el.classList.remove('open');
    document.body.style.overflow = '';
  }

  navigate(dir) {
    const len = this.items.length;
    this.currentIndex = ((this.currentIndex + dir) % len + len) % len;
    this.show();
  }

  show() {
    const item = this.items[this.currentIndex];
    if (!item || !this.imgEl) return;

    // Fade out
    this.imgEl.style.opacity = '0';
    this.imgEl.style.transform = 'scale(0.95)';

    setTimeout(() => {
      this.imgEl.src = item.src;
      this.imgEl.alt = item.caption;
      if (this.captionEl) this.captionEl.textContent = item.caption;
      if (this.counter) {
        this.counter.textContent = `${this.currentIndex + 1} / ${this.items.length}`;
      }
      this.imgEl.onload = () => {
        this.imgEl.style.opacity = '1';
        this.imgEl.style.transform = 'scale(1)';
      };
      // Handle already-cached images
      if (this.imgEl.complete) {
        this.imgEl.style.opacity = '1';
        this.imgEl.style.transform = 'scale(1)';
      }
    }, 180);
  }
}

// ── Portfolio Tabs (Home page) ─────────────────────────────
class PortfolioTabs {
  constructor(container) {
    this.container = container;
    this.tabs = [...container.querySelectorAll('[data-tab]')];
    this.panels = [...container.querySelectorAll('[data-panel]')];
    this.activeTab = 0;

    if (this.tabs.length === 0) return;
    this.init();
  }

  init() {
    this.tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => this.activate(i));
    });
    this.activate(0);
  }

  activate(index) {
    this.tabs.forEach(t => t.classList.remove('active'));
    this.panels.forEach(p => {
      p.style.opacity = '0';
      p.style.display = 'none';
    });

    this.tabs[index]?.classList.add('active');
    const panel = this.panels[index];
    if (panel) {
      panel.style.display = '';
      requestAnimationFrame(() => {
        panel.style.transition = 'opacity 0.4s ease';
        panel.style.opacity = '1';
      });
    }

    this.activeTab = index;
  }
}

// ── Initialize on DOM ready ────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Gallery filter
  const galleryContainer = document.querySelector('.gallery-masonry');
  if (galleryContainer) new GalleryFilter(galleryContainer);

  // Lightbox (global singleton)
  new Lightbox();

  // Portfolio tabs
  const portfolioTabsContainer = document.querySelector('.portfolio-tabs');
  if (portfolioTabsContainer) new PortfolioTabs(portfolioTabsContainer);
});
