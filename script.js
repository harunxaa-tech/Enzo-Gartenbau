(() => {
  const body = document.body;
  const menu = document.querySelector('.main-nav');
  const toggle = document.querySelector('.menu-toggle');

  const setMenu = (open) => {
    if (!menu || !toggle) return;
    menu.classList.toggle('open', open);
    toggle.classList.toggle('active', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    body.classList.toggle('nav-open', open);
  };

  toggle?.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll('[data-open-details]').forEach(link => {
    link.addEventListener('click', () => {
      const target = document.getElementById(link.dataset.openDetails);
      if (target) target.open = true;
    });
  });

  const details = {
    'service-plan': {
      kicker: 'Leistung',
      title: 'Gartenplanung & Umgestaltung',
      text: 'Vom ersten Gedanken bis zum stimmigen Gesamtkonzept: bestehende Flächen werden neu gedacht und neue Gärten passend zu Haus, Grundstück und persönlichem Stil geplant.',
      bullets: ['Persönliche Beratung & Bestandsaufnahme', 'Konzept für klassische, moderne, mediterrane oder naturnahe Gärten', 'Neu- und Umgestaltung bestehender Außenanlagen'],
      image: 'https://enzogiardino.de/wp-content/uploads/2023/01/P1030004.jpg',
      imageAlt: 'Individuell gestalteter Garten',
      primary: ['Projekt anfragen', '#kontakt'],
      secondary: ['Jetzt anrufen', 'tel:+49896134421']
    },
    'service-pflaster': {
      kicker: 'Leistung',
      title: 'Pflaster, Wege & Terrassen',
      text: 'Flächen, Wege und Sitzplätze werden so geplant, dass Material, Linienführung und Nutzung dauerhaft zusammenpassen.',
      bullets: ['Naturstein, Betonplatten und Keramik', 'Terrassen, Wege und Sitzflächen', 'Pflaster, Kies und Splitt für individuelle Übergänge'],
      image: 'steine-06.jpg',
      imageAlt: 'Pflasterarbeiten in einem Garten',
      primary: ['Projekt anfragen', '#kontakt'],
      secondary: ['Jetzt anrufen', 'tel:+49896134421']
    },
    'service-gruen': {
      kicker: 'Leistung',
      title: 'Bepflanzung & Rasen',
      text: 'Die Bepflanzung gibt einem Garten Atmosphäre. Ausgewählt werden Pflanzen, die zu Standort, Pflegeaufwand und gewünschtem Gartenbild passen.',
      bullets: ['Bäume, Sträucher und Hecken', 'Stauden, Rosen, Gräser und weitere Pflanzungen', 'Rollrasen und passende Rasenlösungen'],
      image: 'https://enzogiardino.de/wp-content/uploads/2023/01/enzo_giardino_-_garten_-_bepflanzung_4.jpg',
      imageAlt: 'Bepflanzter Garten mit Rasen',
      primary: ['Projekt anfragen', '#kontakt'],
      secondary: ['Jetzt anrufen', 'tel:+49896134421']
    },
    'service-sichtschutz': {
      kicker: 'Leistung',
      title: 'Mauern, Zäune & Sichtschutz',
      text: 'Struktur schafft Ruhe: Mauern, Höhenunterschiede und Sichtschutz gliedern den Garten und schaffen geschützte Bereiche.',
      bullets: ['Mauern und Einfassungen', 'Zäune und Sichtschutzlösungen', 'Treppen, Sitzplätze und räumliche Gliederung'],
      image: 'https://enzogiardino.de/wp-content/uploads/2023/01/P1030650.jpg',
      imageAlt: 'Garten mit Mauern und gestalteten Bereichen',
      primary: ['Projekt anfragen', '#kontakt'],
      secondary: ['Jetzt anrufen', 'tel:+49896134421']
    },
    'service-wasser': {
      kicker: 'Leistung',
      title: 'Wasser im Garten',
      text: 'Wasser bringt Bewegung, Ruhe und Atmosphäre in den Garten und kann dezent oder als bewusstes Gestaltungselement eingesetzt werden.',
      bullets: ['Garten- und Springbrunnen', 'Quellsteine und Wasserspiele', 'Teiche und naturnahe Wasserbereiche'],
      image: 'brunnen-06.jpg',
      imageAlt: 'Brunnen und Wasser im Garten',
      primary: ['Projekt anfragen', '#kontakt'],
      secondary: ['Jetzt anrufen', 'tel:+49896134421']
    },
    'service-licht': {
      kicker: 'Leistung',
      title: 'Licht im Garten',
      text: 'Gezielt eingesetztes Licht macht Wege sicherer und setzt Pflanzen, Wasserflächen und besondere Gartenobjekte auch am Abend in Szene.',
      bullets: ['Beleuchtung von Wegen und Terrassen', 'Akzentlicht für Pflanzen und Skulpturen', 'Stimmungsvolle Inszenierung von Wasser und Gartenräumen'],
      image: 'https://enzogiardino.de/wp-content/uploads/2023/01/P1030004.jpg',
      imageAlt: 'Professionell gestalteter Garten',
      primary: ['Projekt anfragen', '#kontakt'],
      secondary: ['Jetzt anrufen', 'tel:+49896134421']
    },
    'collection-plants': {
      kicker: 'Ausstellung & Verkauf',
      title: 'Pflanzen & Bäume',
      text: 'In der Ausstellung finden Sie eine vielseitige Auswahl für unterschiedliche Gartenstile und Standorte.',
      bullets: ['Laub- und Nadelgehölze', 'Obstbäume und Bambus', 'Rosen, Stauden und Gräser', 'Farne und Kletterpflanzen'],
      image: 'pflanzen-06.jpg',
      imageAlt: 'Pflanzen und Bäume in der Ausstellung',
      note: 'Die Verfügbarkeit einzelner Pflanzen kann saisonal variieren. Gerne vorher kurz anrufen.',
      primary: ['Route öffnen', 'https://www.google.com/maps/search/?api=1&query=Lanzenhaarer+Str.+49+82041+Oberhaching'],
      secondary: ['Jetzt anrufen', 'tel:+49896134421']
    },
    'collection-water': {
      kicker: 'Ausstellung & Verkauf',
      title: 'Brunnen & Figuren',
      text: 'Besondere Objekte setzen Blickpunkte und geben Terrassen und Gärten einen individuellen Charakter.',
      bullets: ['Garten- und Springbrunnen', 'Quellsteine und Wasserspiele', 'Dekorative Figuren', 'Ausgewählte Skulpturen'],
      image: 'brunnen-06.jpg',
      imageAlt: 'Brunnen in einem gestalteten Garten',
      primary: ['Ausstellung besuchen', 'https://www.google.com/maps/search/?api=1&query=Lanzenhaarer+Str.+49+82041+Oberhaching'],
      secondary: ['Jetzt anrufen', 'tel:+49896134421']
    },
    'collection-amphora': {
      kicker: 'Ausstellung & Verkauf',
      title: 'Vasen & Amphoren',
      text: 'Terracotta und charaktervolle Gefäße bringen mediterrane Wärme in Garten, Eingangsbereich und Terrasse.',
      bullets: ['Original Impruneta-Terracotta', 'Neue und antike Amphoren', 'Vasen und Pflanzgefäße', 'Einzelstücke mit besonderer Patina'],
      image: 'amphoren-06.jpg',
      imageAlt: 'Neue und antike Amphoren',
      primary: ['Ausstellung besuchen', 'https://www.google.com/maps/search/?api=1&query=Lanzenhaarer+Str.+49+82041+Oberhaching'],
      secondary: ['Jetzt anrufen', 'tel:+49896134421']
    },
    'collection-stone': {
      kicker: 'Ausstellung & Verkauf',
      title: 'Steine & Accessoires',
      text: 'Materialien und Gartenobjekte können vor Ort angesehen und passend zur geplanten Gestaltung ausgewählt werden.',
      bullets: ['Findlinge, Mauer- und Randsteine', 'Terrassenplatten und Pflaster', 'Kies und Splitt', 'Ausgewählte Gartenaccessoires'],
      image: 'steine-06.jpg',
      imageAlt: 'Naturstein und Pflaster in der Gartengestaltung',
      primary: ['Ausstellung besuchen', 'https://www.google.com/maps/search/?api=1&query=Lanzenhaarer+Str.+49+82041+Oberhaching'],
      secondary: ['Jetzt anrufen', 'tel:+49896134421']
    },
    'verein': {
      kicker: 'Soziales Engagement',
      title: 'Azioni Niños Felices e.V.',
      text: 'Enzo Giardino gründete den gemeinnützigen Verein 2001 nach persönlichen Erfahrungen mit Kinderarmut in der Dominikanischen Republik. Ziel ist es, benachteiligten Kindern langfristig Sicherheit, Bildung und medizinische Unterstützung zu ermöglichen.',
      bullets: ['Kinderheim Casa Niños Felices in Sosúa', 'Kinderpatenschaften und persönliche Begleitung', 'Unterstützung von Schule und Bildung', 'Medizinische Nothilfe für bedürftige Kinder', 'Persönliches Engagement und Projektbetreuung vor Ort'],
      image: 'enzo-portrait.jpg',
      imageAlt: 'Enzo Giardino im Garten',
      note: 'Weitere Informationen zu den Projekten und Möglichkeiten zur Unterstützung finden Sie direkt auf der offiziellen Vereinswebsite.',
      primary: ['Zum Verein', 'https://www.azionininosfelices.de/'],
      secondary: ['Schließen', '#close']
    }
  };

  const modal = document.getElementById('detail-modal');
  const modalPanel = modal?.querySelector('.detail-panel');
  const modalImageWrap = document.getElementById('detail-image-wrap');
  const modalImage = document.getElementById('detail-image');
  const modalKicker = document.getElementById('detail-kicker');
  const modalTitle = document.getElementById('detail-title');
  const modalText = document.getElementById('detail-text');
  const modalList = document.getElementById('detail-list');
  const modalNote = document.getElementById('detail-note');
  const modalPrimary = document.getElementById('detail-primary');
  const modalSecondary = document.getElementById('detail-secondary');
  let lastFocus = null;

  const setAction = (element, action) => {
    if (!element || !action) return;
    const [label, href] = action;
    element.firstChild.textContent = `${label} `;
    element.href = href;
    const external = href.startsWith('http');
    if (external) {
      element.target = '_blank';
      element.rel = 'noopener';
    } else {
      element.removeAttribute('target');
      element.removeAttribute('rel');
    }
  };

  const openDetail = (key, trigger) => {
    const data = details[key];
    if (!data || !modal) return;
    lastFocus = trigger || document.activeElement;

    modalKicker.textContent = data.kicker || '';
    modalTitle.textContent = data.title;
    modalText.textContent = data.text;

    modalList.innerHTML = '';
    (data.bullets || []).forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      modalList.appendChild(li);
    });
    modalList.hidden = !(data.bullets || []).length;

    if (data.note) {
      modalNote.textContent = data.note;
      modalNote.hidden = false;
    } else {
      modalNote.textContent = '';
      modalNote.hidden = true;
    }

    if (data.image) {
      modalImage.src = data.image;
      modalImage.alt = data.imageAlt || '';
      modalImageWrap.hidden = false;
    } else {
      modalImage.removeAttribute('src');
      modalImage.alt = '';
      modalImageWrap.hidden = true;
    }

    setAction(modalPrimary, data.primary);
    setAction(modalSecondary, data.secondary);

    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    body.classList.add('modal-open');
    requestAnimationFrame(() => modal.querySelector('.detail-close')?.focus());
  };

  const closeDetail = () => {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    body.classList.remove('modal-open');
    if (lastFocus instanceof HTMLElement) lastFocus.focus({ preventScroll: true });
  };

  document.querySelectorAll('[data-detail]').forEach(trigger => {
    trigger.addEventListener('click', () => openDetail(trigger.dataset.detail, trigger));
  });
  modal?.querySelectorAll('[data-modal-close]').forEach(el => el.addEventListener('click', closeDetail));

  modalPrimary?.addEventListener('click', () => {
    if (modalPrimary.getAttribute('href')?.startsWith('#')) closeDetail();
  });
  modalSecondary?.addEventListener('click', (event) => {
    const href = modalSecondary.getAttribute('href') || '';
    if (href === '#close') {
      event.preventDefault();
      closeDetail();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (modal && !modal.hidden) closeDetail();
      else if (menu?.classList.contains('open')) setMenu(false);
    }

    if (event.key === 'Tab' && modal && !modal.hidden && modalPanel) {
      const focusable = [...modalPanel.querySelectorAll('a[href],button:not([disabled])')].filter(el => !el.hidden);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
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
      if (img === modalImage) {
        modalImageWrap.hidden = true;
        return;
      }
      img.closest('figure, .about-image-wrap')?.classList.add('image-missing');
      img.style.visibility = 'hidden';
    });
  });
})();
