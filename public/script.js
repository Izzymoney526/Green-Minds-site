
// Theme toggle logic
function setTheme(mode) {
  document.body.classList.toggle('dark', mode === 'dark');
  localStorage.setItem('theme', mode);
}

function getTheme() {
  return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
}

function updateThemeToggleIcon() {
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.querySelector('.icon-sun').style.display = document.body.classList.contains('dark') ? 'inline' : 'none';
    btn.querySelector('.icon-moon').style.display = document.body.classList.contains('dark') ? 'none' : 'inline';
  });
}

function initThemeToggle() {
  const mode = getTheme();
  setTheme(mode);
  updateThemeToggleIcon();
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.onclick = () => {
      const newMode = document.body.classList.contains('dark') ? 'light' : 'dark';
      setTheme(newMode);
      updateThemeToggleIcon();
    };
  });
}

// Hamburger menu logic
function initHamburgerMenu() {
  const nav = document.querySelector('.navbar');
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.navbar-links');
  if (hamburger && nav && navLinks) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) {
        nav.classList.remove('open');
      }
    });
  }
}

// Dropdowns for desktop
function initDropdowns() {
  document.querySelectorAll('.dropdown').forEach(drop => {
    drop.addEventListener('mouseenter', () => {
      if (window.innerWidth > 768) {
        drop.classList.add('open');
      }
    });
    drop.addEventListener('mouseleave', () => {
      if (window.innerWidth > 768) {
        drop.classList.remove('open');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initHamburgerMenu();
  initDropdowns();
});
