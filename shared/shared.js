function toggleMenu() {
  const nav = document.getElementById('nav-links');
  const button = document.querySelector('.hamburger');
  const expanded = button.getAttribute('aria-expanded') === 'true';

  nav.classList.toggle('active');
  button.setAttribute('aria-expanded', String(!expanded));
}
