const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');

document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', () => {
        overlayImg.src = img.src;
        overlay.classList.add('show');
    });
});

// Fermer l'overlay au clic
overlay.addEventListener('click', () => {
    overlay.classList.remove('show');
});

const button = document.getElementById('backToTop');

  // affiche le bouton quand on descend
  window.addEventListener('scroll', () => {
    if (window.scrollY > 700) { 
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  });

  // remonter en haut 
  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,           
      behavior: 'smooth' 
    });
  });

  const toggleButton = document.getElementById('themeToggle');
  const body = document.body;

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); // ajoute ou retire la classe dark-mode

    // On change l’icône du bouton
    if (body.classList.contains('dark-mode')) {
      toggleButton.textContent = '☀️'; // soleil pour mode clair
    } else {
      toggleButton.textContent = '🌙'; // lune pour mode sombre
    }
  });