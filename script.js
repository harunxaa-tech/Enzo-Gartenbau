(() => {
  const body = document.body;
  const menu = document.querySelector('.main-nav');
  const toggle = document.querySelector('.menu-toggle');

  const setMenu = (open) => {
    menu.classList.toggle('open', open);
    toggle.classList.toggle('active', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    body.classList.toggle('nav-open', open);
  };

  toggle?.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));

  document.getElementById('year').textContent = new Date().getFullYear();

  document.querySelectorAll('[data-open-details]').forEach(link => {
    link.addEventListener('click', () => {
      const target = document.getElementById(link.dataset.openDetails);
      if (target) target.open = true;
    });
  });

  const form = document.getElementById('contact-form');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const subject = `Anfrage über enzogiardino.de – ${data.get('topic') || 'Gartengestaltung'}`;
    const bodyText = [
      'Guten Tag Herr Giardino,',
      '',
      data.get('message') || '',
      '',
      'Kontaktdaten:',
      `Name: ${data.get('name') || ''}`,
      `E-Mail: ${data.get('email') || ''}`,
      `Telefon: ${data.get('phone') || '-'}`,
      `Thema: ${data.get('topic') || ''}`,
      '',
      'Viele Grüße'
    ].join('\n');

    window.location.href = `mailto:enzo_giardino@web.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
  });

  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
      img.closest('figure, .about-image-wrap')?.classList.add('image-missing');
      img.style.visibility = 'hidden';
    }, { once: true });
  });
})();
