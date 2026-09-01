document.addEventListener('DOMContentLoaded', () => {

  /* -----------------------------------------------------------
     Menu mobile
  ----------------------------------------------------------- */
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      menuToggle.classList.toggle('is-open', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        menuToggle.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* -----------------------------------------------------------
     Header: sombra leve ao rolar
  ----------------------------------------------------------- */
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (!header) return;
    header.style.boxShadow = window.scrollY > 8 ? '0 1px 0 rgba(36,30,25,.05)' : 'none';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* -----------------------------------------------------------
     Placeholders de imagem: se o arquivo real existir em /images,
     carrega a foto; caso contrário, mantém o placeholder elegante.
     Basta colocar os arquivos com os nomes indicados na pasta
     /images para que eles apareçam automaticamente aqui.
  ----------------------------------------------------------- */
  document.querySelectorAll('.img-placeholder[data-src]').forEach(el => {
    const src = el.getAttribute('data-src');
    const label = el.getAttribute('data-label') || '';
    const probe = new Image();

    probe.onload = () => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = label;
      img.className = 'loaded-photo';
      el.appendChild(img);
      el.classList.add('is-loaded');
    };
    probe.onerror = () => {
      /* mantém o placeholder — nenhuma ação necessária */
    };
    probe.src = src;
  });

  /* -----------------------------------------------------------
     Ano automático no footer
  ----------------------------------------------------------- */
  const anoEl = document.getElementById('ano');
  if (anoEl) anoEl.textContent = new Date().getFullYear();

});
