/* ============================================================
   LUMIÈRE STUDIO — FAQ Accordion
   ============================================================ */

'use strict';

class FAQAccordion {
  constructor(container, options = {}) {
    this.container = container;
    this.items = [...container.querySelectorAll('.faq-item')];
    this.options = {
      allowMultiple: false,
      ...options
    };

    this.init();
  }

  init() {
    this.items.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');

      if (!question || !answer) return;

      // ARIA
      const id = `faq-answer-${Math.random().toString(36).substr(2, 9)}`;
      answer.id = id;
      question.setAttribute('aria-expanded', 'false');
      question.setAttribute('aria-controls', id);
      answer.setAttribute('role', 'region');

      question.addEventListener('click', () => this.toggle(item));

      // Keyboard support
      question.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggle(item);
        }
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          this.focusNext(item);
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          this.focusPrev(item);
        }
        if (e.key === 'Home') {
          e.preventDefault();
          this.items[0]?.querySelector('.faq-question')?.focus();
        }
        if (e.key === 'End') {
          e.preventDefault();
          this.items[this.items.length - 1]?.querySelector('.faq-question')?.focus();
        }
      });
    });
  }

  toggle(item) {
    const isOpen = item.classList.contains('open');

    // Close all if single mode
    if (!this.options.allowMultiple) {
      this.items.forEach(i => {
        if (i !== item) this.close(i);
      });
    }

    isOpen ? this.close(item) : this.open(item);
  }

  open(item) {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const inner = answer?.querySelector('.faq-answer-inner');

    item.classList.add('open');
    question?.setAttribute('aria-expanded', 'true');

    if (answer && inner) {
      answer.style.maxHeight = inner.offsetHeight + 'px';
    }
  }

  close(item) {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    item.classList.remove('open');
    question?.setAttribute('aria-expanded', 'false');

    if (answer) {
      answer.style.maxHeight = '0';
    }
  }

  focusNext(item) {
    const index = this.items.indexOf(item);
    const next = this.items[index + 1];
    next?.querySelector('.faq-question')?.focus();
  }

  focusPrev(item) {
    const index = this.items.indexOf(item);
    const prev = this.items[index - 1];
    prev?.querySelector('.faq-question')?.focus();
  }

  openAll() {
    this.items.forEach(item => this.open(item));
  }

  closeAll() {
    this.items.forEach(item => this.close(item));
  }
}

// ── Testimonials Carousel ──────────────────────────────────
class TestimonialsCarousel {
  constructor(container) {
    this.container = container;
    this.track = container.querySelector('.testimonials-track');
    this.cards = [...(this.track?.querySelectorAll('.testimonial-card') || [])];
    this.prevBtn = container.querySelector('.testi-prev');
    this.nextBtn = container.querySelector('.testi-next');
    this.dots = [...container.querySelectorAll('.testi-dot')];
    this.currentIndex = 0;
    this.autoplayTimer = null;
    this.visibleCount = this.getVisibleCount();

    if (this.cards.length === 0) return;
    this.init();
  }

  getVisibleCount() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  }

  init() {
    this.prevBtn?.addEventListener('click', () => this.navigate(-1));
    this.nextBtn?.addEventListener('click', () => this.navigate(1));

    this.dots.forEach((dot, i) => {
      dot.addEventListener('click', () => this.goTo(i));
    });

    // Touch swipe
    let startX = 0;
    this.container.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    this.container.addEventListener('touchend', e => {
      const delta = e.changedTouches[0].clientX - startX;
      if (Math.abs(delta) > 50) delta < 0 ? this.navigate(1) : this.navigate(-1);
    });

    // Resize
    window.addEventListener('resize', () => {
      this.visibleCount = this.getVisibleCount();
      this.updateTrack();
    });

    // Autoplay
    this.startAutoplay();
    this.container.addEventListener('mouseenter', () => this.stopAutoplay());
    this.container.addEventListener('mouseleave', () => this.startAutoplay());

    this.updateTrack();
  }

  navigate(dir) {
    const max = Math.max(0, this.cards.length - this.visibleCount);
    this.currentIndex = Math.max(0, Math.min(this.currentIndex + dir, max));
    this.updateTrack();
    this.resetAutoplay();
  }

  goTo(index) {
    const max = Math.max(0, this.cards.length - this.visibleCount);
    this.currentIndex = Math.max(0, Math.min(index, max));
    this.updateTrack();
  }

  updateTrack() {
    if (!this.track) return;
    const cardWidth = this.track.offsetWidth / this.visibleCount;
    const offset = this.currentIndex * cardWidth;
    this.track.style.transform = `translateX(-${offset}px)`;

    this.dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === this.currentIndex);
    });

    if (this.prevBtn) this.prevBtn.disabled = this.currentIndex === 0;
    if (this.nextBtn) this.nextBtn.disabled = this.currentIndex >= this.cards.length - this.visibleCount;
  }

  startAutoplay() {
    this.autoplayTimer = setInterval(() => {
      const max = this.cards.length - this.visibleCount;
      if (this.currentIndex >= max) this.currentIndex = -1;
      this.navigate(1);
    }, 5000);
  }

  stopAutoplay() {
    clearInterval(this.autoplayTimer);
  }

  resetAutoplay() {
    this.stopAutoplay();
    this.startAutoplay();
  }
}

// ── Initialize ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // FAQ Accordions
  document.querySelectorAll('.faq-container').forEach(container => {
    new FAQAccordion(container, { allowMultiple: false });
  });

  // Testimonials
  document.querySelectorAll('.testimonials-carousel').forEach(container => {
    new TestimonialsCarousel(container);
  });
});

window.FAQAccordion = FAQAccordion;
window.TestimonialsCarousel = TestimonialsCarousel;
