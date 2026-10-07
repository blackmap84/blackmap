// Set a verified public business email here when the contact channel is ready.
const CONTACT_EMAIL = 'raven@blackmap.kr';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', '메뉴 열기');
  navigation.classList.remove('open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
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
  const subject = encodeURIComponent('[블랙맵] 경영 컨설팅 상담 문의');
  const body = encodeURIComponent('회사명: \n담당자: \n연락처: \n\n상담하고 싶은 경영 과제:\n');
  link.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  link.hidden = false;
  document.querySelector('#contact-description').textContent = `김정휴 · 블랙맵 대표 / ${CONTACT_EMAIL}`;
  document.querySelector('#contact-status').hidden = true;
}
