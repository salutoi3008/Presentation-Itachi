/* ============================================================
   script.js — Itachi Uchiwa
   ============================================================ */
// ---- Zoom sur les images ----
const overlay    = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');

document.querySelectorAll('.zoomable').forEach(img => {
  img.addEventListener('click', () => {
    overlayImg.src = img.src;
    overlay.classList.add('show');
  });
});

overlay.addEventListener('click', () => {
  overlay.classList.remove('show');
});




// ---- Bouton retour en haut ----
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 600) {
    backToTop.style.display = 'flex';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});




// ---- Toggle thème clair / sombre ----
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  themeToggle.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
});




// ---- Animation d'entrée des sections au scroll ----
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // une seule fois
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});
