// Set a verified public business email here when the contact channel is ready.
const CONTACT_EMAIL = 'raven@blackmap.kr';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
  navigation.classList.remove('open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 641px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = String(new Date().getFullYear());
if (CONTACT_EMAIL) {
  const link = document.querySelector('#contact-link');
  const subject = encodeURIComponent('[BlackMAP] Let’s work together');
  const body = encodeURIComponent('Company: \nName: \n\nInterested in: Marketing automation / MAP consulting / Software development\n\nOur challenge:\n');
  link.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  link.hidden = false;
  document.querySelector('#contact-description').textContent = CONTACT_EMAIL;
}
