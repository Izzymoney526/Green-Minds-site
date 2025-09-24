// Dark theme toggle
const darkToggle = document.getElementById('darkToggle');
function setTheme(mode) {
  if (mode === 'dark') {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    if (darkToggle) darkToggle.textContent = '☀️';
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    if (darkToggle) darkToggle.textContent = '🌙';
  }
}
// Initial theme
if (localStorage.getItem('theme') === 'dark') setTheme('dark');
else setTheme('light');
// Toggle event
if (darkToggle) {
  darkToggle.onclick = () => {
    setTheme(document.body.classList.contains('dark') ? 'light' : 'dark');
  };
}

// Scroll reveal animation
const revealEls = document.querySelectorAll('.scroll-reveal');
const revealOnScroll = () => {
  revealEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// News & Gallery auto-fetch placeholders
// Replace with real API/social media integration as needed
const newsFeed = document.getElementById('news-feed');
if (newsFeed) {
  newsFeed.innerHTML = `
    <div class="card">
      <img src="news-placeholder.png" alt="News" style="width:100%; border-radius:1rem; margin-bottom:1rem;">
      <h3>GreenMinds Launches New Sustainability Project</h3>
      <p>Stay tuned for updates from our official social media channels.</p>
      <a href="#" style="color:var(--emerald); font-weight:bold;">Read More</a>
    </div>
    <div class="card">
      <img src="news-placeholder.png" alt="News" style="width:100%; border-radius:1rem; margin-bottom:1rem;">
      <h3>GreenMinds Partners with Local Communities</h3>
      <p>Follow us on Facebook, Twitter, and LinkedIn for the latest news.</p>
      <a href="#" style="color:var(--emerald); font-weight:bold;">Read More</a>
    </div>
  `;
}
const galleryGrid = document.getElementById('gallery-grid');
if (galleryGrid) {
  galleryGrid.innerHTML = `
    <div class="card" style="padding:0; overflow:hidden;">
      <img src="gallery-placeholder.png" alt="Gallery" style="width:100%; display:block; transition:transform 0.3s;">
    </div>
    <div class="card" style="padding:0; overflow:hidden;">
      <img src="gallery-placeholder.png" alt="Gallery" style="width:100%; display:block; transition:transform 0.3s;">
    </div>
    <div class="card" style="padding:0; overflow:hidden;">
      <img src="gallery-placeholder.png" alt="Gallery" style="width:100%; display:block; transition:transform 0.3s;">
    </div>
  `;
  galleryGrid.querySelectorAll('img').forEach(img => {
    img.addEventListener('mouseover', () => img.style.transform = 'scale(1.08)');
    img.addEventListener('mouseout', () => img.style.transform = 'scale(1)');
  });
}
