function toggleMenu() {
  const menu = document.querySelector('.navbar .menu');
  menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}

// Close menu when clicking outside
window.addEventListener('click', function(e) {
  const menu = document.querySelector('.navbar .menu');
  const hamburger = document.querySelector('.navbar .hamburger');
  if (!menu.contains(e.target) && !hamburger.contains(e.target) && window.innerWidth <= 768) {
      menu.style.display = 'none';
  }
});
