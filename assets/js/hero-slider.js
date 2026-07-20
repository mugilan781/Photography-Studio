/* ============================================================
   LUMIÈRE STUDIO — Hero Slider
   ============================================================ */

'use strict';

class HeroSlider {
  constructor(container) {
    this.container = container;
    this.slides = [...container.querySelectorAll('.hero-slide')];
    this.dots = [...container.querySelectorAll('.slider-dot')];
    this.prevBtn = container.querySelector('.slider-prev');
    this.nextBtn = container.querySelector('.slider-next');
    this.progress = container.querySelector('.slider-progress');
    this.currentIndex = 0;
    this.total = this.slides.length;
    this.autoplayDuration = 6000;
    this.autoplayTimer = null;
    this.progressTimer = null;
    this.isPaused = false;

    if (this.total === 0) return;
    this.init();
  }

  init() {
    // Set first slide active
    this.goTo(0, false);

    // Dots
    this.dots.forEach((dot, i) => {
      dot.addEventListener('click', () => this.goTo(i));
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
    });

    // Arrows
    this.prevBtn?.addEventListener('click', () => this.prev());
    this.nextBtn?.addEventListener('click', () => this.next());

    // Keyboard
    document.addEventListener('keydown', e => {
      if (!this.container.closest('.hero-slider')) return;
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });

    // Touch / Swipe
    this.initSwipe();

    // Pause on hover
    this.container.addEventListener('mouseenter', () => {
      this.isPaused = true;
      this.stopProgress();
    });
    this.container.addEventListener('mouseleave', () => {
      this.isPaused = false;
      this.startAutoplay();
    });

    // Start autoplay
    this.startAutoplay();
  }

  goTo(index, animate = true) {
    // Remove active
    this.slides[this.currentIndex]?.classList.remove('active');
    this.dots[this.currentIndex]?.classList.remove('active');

    // Clamp index
    this.currentIndex = ((index % this.total) + this.total) % this.total;

    // Add active
    this.slides[this.currentIndex].classList.add('active');
    this.dots[this.currentIndex]?.classList.add('active');

    // Update ARIA
    this.container.setAttribute('aria-label', `Slide ${this.currentIndex + 1} of ${this.total}`);

    // Restart progress
    if (animate) {
      this.stopProgress();
      this.startProgress();
    }
  }

  next() {
    this.goTo(this.currentIndex + 1);
    this.resetAutoplay();
  }

  prev() {
    this.goTo(this.currentIndex - 1);
    this.resetAutoplay();
  }

  startAutoplay() {
    this.stopAutoplay();
    this.startProgress();
    this.autoplayTimer = setInterval(() => {
      if (!this.isPaused) this.next();
    }, this.autoplayDuration);
  }

  stopAutoplay() {
    clearInterval(this.autoplayTimer);
    this.stopProgress();
  }

  resetAutoplay() {
    this.stopAutoplay();
    if (!this.isPaused) this.startAutoplay();
  }

  startProgress() {
    if (!this.progress) return;
    this.progress.style.transition = 'none';
    this.progress.style.width = '0';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.progress.style.transition = `width ${this.autoplayDuration}ms linear`;
        this.progress.style.width = '100%';
      });
    });
  }

  stopProgress() {
    if (!this.progress) return;
    const computed = getComputedStyle(this.progress).width;
    this.progress.style.transition = 'none';
    this.progress.style.width = computed;
  }

  initSwipe() {
    let startX = 0;
    let startY = 0;
    let isDragging = false;
    const SWIPE_THRESHOLD = 50;

    this.container.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isDragging = true;
    }, { passive: true });

    this.container.addEventListener('touchmove', e => {
      if (!isDragging) return;
      const deltaX = Math.abs(e.touches[0].clientX - startX);
      const deltaY = Math.abs(e.touches[0].clientY - startY);
      if (deltaX > deltaY) e.preventDefault();
    }, { passive: false });

    this.container.addEventListener('touchend', e => {
      if (!isDragging) return;
      const deltaX = e.changedTouches[0].clientX - startX;
      if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
        deltaX < 0 ? this.next() : this.prev();
      }
      isDragging = false;
    });
  }
}

// ── Initialize all sliders on page ────────────────────────
document.querySelectorAll('.hero-slider').forEach(el => new HeroSlider(el));
