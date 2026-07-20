/* ============================================================
   LUMIÈRE STUDIO — Booking System
   Date Availability + Time Slots + Form Validation
   ============================================================ */

'use strict';

class BookingSystem {
  constructor(container) {
    this.container = container;
    this.dateInput = container.querySelector('#booking-date');
    this.sessionSelect = container.querySelector('#booking-session');
    this.timeSlotsContainer = container.querySelector('#time-slots');
    this.selectedTimeEl = container.querySelector('#selected-time');
    this.form = container.querySelector('#booking-form') || container.closest('form');
    this.submitBtn = container.querySelector('#booking-submit');
    this.confirmEl = container.querySelector('#booking-confirm');
    this.selectedSlot = null;

    // Simulate unavailable dates (e.g., weekends fully booked)
    this.unavailableDates = this.generateUnavailableDates();

    // Available time slots per session type
    this.timeSlotsBySession = {
      portrait: ['9:00 AM', '10:30 AM', '12:00 PM', '2:00 PM', '3:30 PM', '5:00 PM'],
      family:   ['10:00 AM', '11:30 AM', '1:00 PM', '3:00 PM', '4:30 PM'],
      newborn:  ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'],
      graduation:['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '5:30 PM'],
      outdoor:  ['7:00 AM', '8:00 AM', '5:30 PM', '6:30 PM', '7:00 PM'],
      default:  ['9:00 AM', '10:30 AM', '12:00 PM', '2:00 PM', '3:30 PM', '5:00 PM']
    };

    // Randomly mark some slots as unavailable per date
    this.bookedSlots = {};

    this.init();
  }

  generateUnavailableDates() {
    const dates = new Set();
    const today = new Date();
    // Random busy dates in next 2 months
    for (let i = 0; i < 10; i++) {
      const d = new Date(today);
      d.setDate(d.getDate() + Math.floor(Math.random() * 60) + 1);
      dates.add(d.toISOString().split('T')[0]);
    }
    return dates;
  }

  getBookedSlotsForDate(date) {
    if (!this.bookedSlots[date]) {
      // Generate random booked slots for this date
      const allSlots = ['9:00 AM','10:30 AM','12:00 PM','2:00 PM','3:30 PM','5:00 PM',
                        '10:00 AM','11:30 AM','1:00 PM','3:00 PM','4:30 PM','7:00 AM'];
      const numBooked = Math.floor(Math.random() * 3);
      const shuffled = [...allSlots].sort(() => Math.random() - 0.5);
      this.bookedSlots[date] = new Set(shuffled.slice(0, numBooked));
    }
    return this.bookedSlots[date];
  }

  init() {
    // Set min date to today
    const today = new Date().toISOString().split('T')[0];
    if (this.dateInput) {
      this.dateInput.min = today;
      this.dateInput.addEventListener('change', () => this.onDateChange());
    }

    if (this.sessionSelect) {
      this.sessionSelect.addEventListener('change', () => this.onDateChange());
    }

    // Form submit
    if (this.form) {
      this.form.addEventListener('submit', (e) => this.onSubmit(e));
    }

    // Real-time validation
    this.form?.querySelectorAll('.form-control').forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => {
        if (input.classList.contains('error')) this.validateField(input);
      });
    });
  }

  onDateChange() {
    const date = this.dateInput?.value;
    if (!date) return;

    const sessionType = this.sessionSelect?.value || 'default';
    const slots = this.timeSlotsBySession[sessionType] || this.timeSlotsBySession.default;
    const booked = this.getBookedSlotsForDate(date);
    const isUnavailable = this.unavailableDates.has(date);

    this.selectedSlot = null;
    if (this.selectedTimeEl) this.selectedTimeEl.value = '';

    if (!this.timeSlotsContainer) return;

    if (isUnavailable) {
      this.timeSlotsContainer.innerHTML = `
        <p style="color:var(--text-muted);font-size:0.875rem;padding:1rem 0;">
          ⚠ This date is fully booked. Please choose another.
        </p>`;
      return;
    }

    // Render slots
    this.timeSlotsContainer.innerHTML = slots.map(slot => {
      const unavail = booked.has(slot);
      return `<button
        type="button"
        class="time-slot${unavail ? ' unavailable' : ''}"
        data-time="${slot}"
        ${unavail ? 'disabled aria-disabled="true"' : ''}
      >${slot}</button>`;
    }).join('');

    // Bind slot clicks
    this.timeSlotsContainer.querySelectorAll('.time-slot:not(.unavailable)').forEach(btn => {
      btn.addEventListener('click', () => this.selectSlot(btn));
    });

    // Availability label
    const available = slots.length - booked.size;
    const label = this.container.querySelector('#slots-label');
    if (label) {
      label.textContent = `${available} slot${available !== 1 ? 's' : ''} available`;
      label.style.color = available < 3 ? 'var(--rose)' : 'var(--gold)';
    }
  }

  selectSlot(btn) {
    this.timeSlotsContainer.querySelectorAll('.time-slot').forEach(b => {
      b.classList.remove('selected');
    });
    btn.classList.add('selected');
    this.selectedSlot = btn.dataset.time;
    if (this.selectedTimeEl) this.selectedTimeEl.value = this.selectedSlot;
  }

  validateField(input) {
    const value = input.value.trim();
    let error = '';

    if (input.required && !value) {
      error = 'This field is required.';
    } else if (input.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Please enter a valid email address.';
    } else if (input.type === 'tel' && value && !/^[\d\s\+\-\(\)]{7,15}$/.test(value)) {
      error = 'Please enter a valid phone number.';
    }

    this.setFieldError(input, error);
    return !error;
  }

  setFieldError(input, message) {
    const group = input.closest('.form-group');
    let errorEl = group?.querySelector('.field-error');

    input.classList.toggle('error', !!message);

    if (message) {
      if (!errorEl) {
        errorEl = document.createElement('span');
        errorEl.className = 'field-error';
        errorEl.style.cssText = 'color:var(--rose);font-size:0.75rem;margin-top:0.25rem;display:block;';
        group?.appendChild(errorEl);
      }
      errorEl.textContent = message;
    } else if (errorEl) {
      errorEl.remove();
    }
  }

  onSubmit(e) {
    e.preventDefault();

    // Validate all fields
    const fields = this.form.querySelectorAll('.form-control[required]');
    let isValid = true;
    fields.forEach(field => {
      if (!this.validateField(field)) isValid = false;
    });

    if (!isValid) return;

    // Check time slot selected
    if (this.timeSlotsContainer && !this.selectedSlot) {
      const notice = document.createElement('p');
      notice.style.cssText = 'color:var(--rose);font-size:0.8125rem;margin-top:0.5rem;';
      notice.textContent = 'Please select a time slot.';
      this.timeSlotsContainer.parentNode.appendChild(notice);
      setTimeout(() => notice.remove(), 3000);
      return;
    }

    // Submit state
    const btn = this.submitBtn;
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Sending…';
    }

    // Simulate API call
    setTimeout(() => {
      this.form.style.display = 'none';
      if (this.confirmEl) {
        this.confirmEl.style.display = '';
        this.confirmEl.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Fill in confirmation details
        const dateEl = this.confirmEl.querySelector('[data-confirm="date"]');
        const timeEl = this.confirmEl.querySelector('[data-confirm="time"]');
        const nameEl = this.confirmEl.querySelector('[data-confirm="name"]');
        if (dateEl && this.dateInput) dateEl.textContent = new Date(this.dateInput.value + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        if (timeEl) timeEl.textContent = this.selectedSlot || '';
        if (nameEl) nameEl.textContent = this.form.querySelector('[name="name"]')?.value || 'Valued Client';
      }
    }, 1800);
  }
}

// ── Contact Form (no booking) ──────────────────────────────
class ContactForm {
  constructor(form) {
    this.form = form;
    this.submitBtn = form.querySelector('[type="submit"]');
    this.init();
  }

  init() {
    this.form.addEventListener('submit', (e) => this.onSubmit(e));
  }

  validate(input) {
    const val = input.value.trim();
    if (input.required && !val) return false;
    if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return false;
    return true;
  }

  onSubmit(e) {
    e.preventDefault();
    let valid = true;
    this.form.querySelectorAll('.form-control').forEach(field => {
      if (!this.validate(field)) {
        field.classList.add('error');
        valid = false;
      } else {
        field.classList.remove('error');
      }
    });

    if (!valid) return;

    const btn = this.submitBtn;
    if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

    setTimeout(() => {
      const success = document.createElement('div');
      success.style.cssText = `
        background: rgba(212,175,55,0.1); border: 1px solid var(--gold);
        border-radius: var(--radius-md); padding: 1.5rem; text-align: center;
        color: var(--text-primary); font-family: var(--font-serif); font-size: 1.1rem;
      `;
      success.innerHTML = `<div style="font-size:2rem;margin-bottom:0.5rem;">✓</div>
        Your message has been sent! We'll be in touch soon.`;
      this.form.parentNode.insertBefore(success, this.form);
      this.form.style.display = 'none';
    }, 1600);
  }
}

// ── Initialize ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const bookingContainer = document.querySelector('.booking-widget');
  if (bookingContainer) new BookingSystem(bookingContainer);

  document.querySelectorAll('.contact-form:not(.booking-widget)').forEach(form => {
    new ContactForm(form);
  });
});
