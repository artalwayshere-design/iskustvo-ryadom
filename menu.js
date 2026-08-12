document.querySelectorAll('.nav').forEach((nav) => {
  const button = nav.querySelector('.nav__toggle');
  const links = nav.querySelector('.nav__links');
  if (!button || !links) return;

  const close = () => {
    nav.classList.remove('nav--open');
    button.setAttribute('aria-expanded', 'false');
  };

  button.addEventListener('click', () => {
    const open = nav.classList.toggle('nav--open');
    button.setAttribute('aria-expanded', String(open));
  });
  links.addEventListener('click', (event) => {
    if (event.target.closest('a')) close();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });
});
