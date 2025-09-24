// GreenMinds unified site script
// Theme handling: use html.dark and persist as gmTheme
(function() {
  const root = document.documentElement;
  // Enable progressive enhancement for animations only when JS is available
  root.classList.add('js-anim');
  const STORAGE_KEY = 'gmTheme';
  function applyTheme(theme) {
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem(STORAGE_KEY, theme);
    updateThemeIcons();
  }
  function currentTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }
  function updateThemeIcons() {
    document.querySelectorAll('[data-theme-icon]')
      .forEach(el => { el.textContent = root.classList.contains('dark') ? '🌙' : '☀️'; });
  }
  function initThemeToggle() {
    applyTheme(currentTheme());
    document.querySelectorAll('[data-theme-toggle]')
      .forEach(btn => btn.addEventListener('click', () => {
        const dark = root.classList.contains('dark');
        applyTheme(dark ? 'light' : 'dark');
      }));
  }

  // Mobile menu
  function initMobileMenu() {
    const hamburger = document.querySelector('[data-hamburger]');
    const menu = document.querySelector('[data-mobile-menu]');
    if (!hamburger || !menu) return;
    hamburger.addEventListener('click', () => menu.classList.toggle('open'));
    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.remove('open');
      }
    });
  }

  // Fade-in on load for elements with .fade-in
  function initFadeIn() {
    const els = Array.from(document.querySelectorAll('.fade-in'));
    els.forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 150 + i * 120);
    });
  }

  // Sticky header style on scroll (optional subtle shadow handled by CSS)

  // Flutterwave donation integration
  function initFlutterwaveDonation() {
    const donateBtn = document.getElementById('donateBtn');
    if (!donateBtn) return;
    
    donateBtn.addEventListener('click', function () {
      FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-xxxxxxxxxxxxxxxxxxxxx-X", // Replace with actual public key
        tx_ref: "greenminds_" + Date.now(),
        amount: 50,
        currency: "NGN",
        payment_options: "card, banktransfer, ussd, mobilemoneyghana",
        redirect_url: "https://greenminds.org/thank-you",
        customer: { 
          email: "donations@greenminds.org", 
          phone_number: "08085708257", 
          name: "Green Minds Supporter" 
        },
        customizations: { 
          title: "Green Minds Initiative", 
          description: "Donation to support our projects", 
          logo: "https://greenminds.org/logo.png" 
        },
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initMobileMenu();
    initFadeIn();
    initFlutterwaveDonation();
  });
})();
