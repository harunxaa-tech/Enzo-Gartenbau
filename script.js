const body = document.body;
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.getElementById('main-nav');
const modal = document.getElementById('detail-modal');
const closeTargets = document.querySelectorAll('[data-modal-close]');
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const detailImage = document.getElementById('detail-image');
const detailKicker = document.getElementById('detail-kicker');
const detailTitle = document.getElementById('detail-title');
const detailText = document.getElementById('detail-text');
const detailList = document.getElementById('detail-list');
const detailNote = document.getElementById('detail-note');
const detailPrimary = document.getElementById('detail-primary');
const detailSecondary = document.getElementById('detail-secondary');

const DETAIL_DATA = {
  'service-plan': {
    kicker: 'Leistungen',
    title: 'Gartenplanung & Umgestaltung',
    text: 'Von der ersten Idee bis zur stimmigen Gesamtlösung begleitet Enzo Giardino Ihr Projekt mit Erfahrung, Gespür und einem klaren Blick für Proportionen.',
    items: ['Persönliche Beratung vor Ort', 'Planung passend zu Grundstück und Haus', 'Umgestaltung bestehender Gartenbereiche', 'Material und Pflanzkonzepte aus einer Hand'],
    note: 'Gerne besprechen wir Wünsche, Stilrichtung und Budget in einem ersten Gespräch.',
    image: 'garten-detail-08.jpg',
    primary: { label: 'Projekt anfragen', href: '#kontakt' },
    secondary: { label: 'Jetzt anrufen', href: 'tel:+49896134421' }
  },
  'service-pflaster': {
    kicker: 'Leistungen',
    title: 'Pflaster, Wege & Terrassen',
    text: 'Wege, Plätze und Terrassen schaffen Struktur und Aufenthaltsqualität. Entscheidend sind Materialauswahl, Verlegung und ein harmonisches Gesamtbild.',
    items: ['Pflasterflächen und Eingänge', 'Terrassen aus Naturstein oder Betonstein', 'Randabschlüsse und Einfassungen', 'Stimmige Verbindung von Haus und Garten'],
    note: 'Wir helfen bei der Auswahl von Oberflächen, Formaten und Farben.',
    image: 'steine-09.jpg',
    primary: { label: 'Projekt anfragen', href: '#kontakt' },
    secondary: { label: 'Jetzt anrufen', href: 'tel:+49896134421' }
  },
  'service-gruen': {
    kicker: 'Leistungen',
    title: 'Bepflanzung & Rasen',
    text: 'Pflanzen bringen Charakter, Farbe und Jahreszeiten in den Garten. Bepflanzung und Rasen werden dabei immer passend zum Standort geplant.',
    items: ['Stauden, Gräser und Gehölze', 'Rasenflächen und grüne Ruhebereiche', 'Blühende Akzente und Strukturpflanzen', 'Pflegeleichte und langlebige Konzepte'],
    note: 'Auch bestehende Beete können neu gedacht und aufgewertet werden.',
    image: 'https://enzogiardino.de/wp-content/uploads/2023/01/enzo_giardino_-_ausstellung_-_verkauf_-_pflanzen_und_baeume_14.jpg',
    primary: { label: 'Projekt anfragen', href: '#kontakt' },
    secondary: { label: 'Jetzt anrufen', href: 'tel:+49896134421' }
  },
  'service-sichtschutz': {
    kicker: 'Leistungen',
    title: 'Mauern, Zäune & Sichtschutz',
    text: 'Grenzen, Höhen und Blickbeziehungen lassen sich durch Mauern, Zäune und Sichtschutz elegant ordnen, ohne dass der Garten an Leichtigkeit verliert.',
    items: ['Mauern zur Gliederung von Gartenräumen', 'Zäune passend zum Stil des Hauses', 'Sichtschutz für mehr Privatsphäre', 'Stimmige Einbindung in die Bepflanzung'],
    note: 'So entstehen geschützte Bereiche mit klarer Struktur.',
    image: 'gartenraeume-10.jpg',
    primary: { label: 'Projekt anfragen', href: '#kontakt' },
    secondary: { label: 'Jetzt anrufen', href: 'tel:+49896134421' }
  },
  'service-wasser': {
    kicker: 'Leistungen',
    title: 'Wasser im Garten',
    text: 'Wasser belebt den Garten und schafft Atmosphäre. Brunnen, Wasserspiele oder kleine Becken setzen ruhige und charaktervolle Akzente.',
    items: ['Brunnen und Quellsteine', 'Wasserspiele als Blickfang', 'Einbindung in Pflaster und Bepflanzung', 'Auswahl passender Formen und Materialien'],
    note: 'Je nach Stil kann Wasser modern, mediterran oder ganz natürlich wirken.',
    image: 'https://enzogiardino.de/wp-content/uploads/2023/01/enzo_giardino_-_wasser_im_garten_-_brunnen_und_quellsteine_1.jpg',
    primary: { label: 'Projekt anfragen', href: '#kontakt' },
    secondary: { label: 'Jetzt anrufen', href: 'tel:+49896134421' }
  },
  'service-licht': {
    kicker: 'Leistungen',
    title: 'Licht im Garten',
    text: 'Gezielt eingesetztes Licht schafft Orientierung und Stimmung. Es betont Wege, Pflanzen und Lieblingsplätze, ohne den Garten zu überladen.',
    items: ['Licht für Wege und Eingänge', 'Inszenierung von Pflanzen und Mauern', 'Atmosphäre für Terrassen und Sitzplätze', 'Zurückhaltende, elegante Lichtwirkung'],
    note: 'Gutes Licht macht den Garten auch am Abend erlebbar.',
    image: 'hero-garten-08.jpg',
    primary: { label: 'Projekt anfragen', href: '#kontakt' },
    secondary: { label: 'Jetzt anrufen', href: 'tel:+49896134421' }
  },
  'collection-plants': {
    kicker: 'Ausstellung & Verkauf',
    title: 'Pflanzen & Bäume',
    text: 'In der Ausstellung finden Sie eine vielseitige Auswahl für unterschiedliche Gartenstile und Standorte.',
    items: ['Laub und Nadelgehölze', 'Obstbäume und Bambus', 'Rosen, Stauden und Gräser', 'Farne und Kletterpflanzen'],
    note: 'Die Verfügbarkeit einzelner Pflanzen kann saisonal variieren. Gerne vorher kurz anrufen.',
    image: 'https://enzogiardino.de/wp-content/uploads/2023/01/enzo_giardino_-_ausstellung_-_verkauf_-_pflanzen_und_baeume_14.jpg',
    primary: { label: 'Ausstellung besuchen', href: 'https://www.google.com/maps/search/?api=1&query=Lanzenhaarer+Str.+49+82041+Oberhaching' },
    secondary: { label: 'Jetzt anrufen', href: 'tel:+49896134421' }
  },
  'collection-water': {
    kicker: 'Ausstellung & Verkauf',
    title: 'Brunnen & Figuren',
    text: 'Besondere Objekte setzen Blickpunkte und geben Terrassen und Gärten einen individuellen Charakter.',
    items: ['Garten und Springbrunnen', 'Quellsteine und Wasserspiele', 'Dekorative Figuren', 'Ausgewählte Skulpturen'],
    note: 'Vor Ort lassen sich Wirkung, Material und Größe am besten vergleichen.',
    image: 'https://enzogiardino.de/wp-content/uploads/2023/01/enzo_giardino_-_wasser_im_garten_-_brunnen_und_quellsteine_1.jpg',
    primary: { label: 'Ausstellung besuchen', href: 'https://www.google.com/maps/search/?api=1&query=Lanzenhaarer+Str.+49+82041+Oberhaching' },
    secondary: { label: 'Jetzt anrufen', href: 'tel:+49896134421' }
  },
  'gallery-gardenrooms': {
    kicker: 'Einblicke',
    title: 'Gartenräume',
    text: 'Gut gestaltete Gartenräume verbinden Pflanzen, Naturstein und klare Linien zu einem ruhigen Gesamtbild. So entstehen Bereiche, die sich offen anfühlen und trotzdem Struktur geben.',
    items: [],
    note: '',
    image: 'gartenraeume-10.jpg',
    primary: { label: 'Projekt anfragen', href: '#kontakt' },
    secondary: { label: 'Jetzt anrufen', href: 'tel:+49896134421' }
  },
  'gallery-terrace': {
    kicker: 'Einblicke',
    title: 'Terrassen & Mauern',
    text: 'Terrassen und Mauern geben dem Garten Form und schaffen geschützte Lieblingsplätze. Material, Farbe und Proportion werden passend zum Haus und zur Umgebung gewählt.',
    items: [],
    note: '',
    image: 'garten-detail-08.jpg',
    primary: { label: 'Projekt anfragen', href: '#kontakt' },
    secondary: { label: 'Jetzt anrufen', href: 'tel:+49896134421' }
  },
  'gallery-paving': {
    kicker: 'Einblicke',
    title: 'Pflasterarbeiten',
    text: 'Pflasterflächen verbinden Wege, Eingänge und Sitzplätze. Eine saubere Ausführung und die passende Materialwahl sorgen für ein dauerhaft stimmiges Ergebnis.',
    items: [],
    note: '',
    image: 'steine-09.jpg',
    primary: { label: 'Projekt anfragen', href: '#kontakt' },
    secondary: { label: 'Jetzt anrufen', href: 'tel:+49896134421' }
  },
  'gallery-planting': {
    kicker: 'Einblicke',
    title: 'Bepflanzung',
    text: 'Eine ausgewogene Bepflanzung bringt Farbe, Struktur und Jahreszeiten in den Garten. Pflanzen werden passend zum Standort und zum gewünschten Pflegeaufwand zusammengestellt.',
    items: [],
    note: '',
    image: 'https://enzogiardino.de/wp-content/uploads/2023/01/enzo_giardino_-_ausstellung_-_verkauf_-_pflanzen_und_baeume_14.jpg',
    primary: { label: 'Projekt anfragen', href: '#kontakt' },
    secondary: { label: 'Jetzt anrufen', href: 'tel:+49896134421' }
  },
  'gallery-water': {
    kicker: 'Einblicke',
    title: 'Wasser im Garten',
    text: 'Brunnen und Wasserspiele schaffen Bewegung und Ruhe zugleich. Sie können dezent integriert oder gezielt als Blickfang eingesetzt werden.',
    items: [],
    note: '',
    image: 'https://enzogiardino.de/wp-content/uploads/2023/01/enzo_giardino_-_wasser_im_garten_-_brunnen_und_quellsteine_1.jpg',
    primary: { label: 'Projekt anfragen', href: '#kontakt' },
    secondary: { label: 'Jetzt anrufen', href: 'tel:+49896134421' }
  },
  'gallery-objects': {
    kicker: 'Einblicke',
    title: 'Amphoren & Objekte',
    text: 'Ausgewählte Gartenobjekte setzen persönliche Akzente und geben einer Gestaltung zusätzlichen Charakter. Besonders gut wirken sie, wenn Material und Umgebung aufeinander abgestimmt sind.',
    items: [],
    note: '',
    image: 'amphoren-09.jpg',
    primary: { label: 'Projekt anfragen', href: '#kontakt' },
    secondary: { label: 'Jetzt anrufen', href: 'tel:+49896134421' }
  },
  'verein': {
    kicker: 'Engagement',
    title: 'Azioni Niños Felices e.V.',
    text: 'Seit vielen Jahren engagiert sich Enzo Giardino nicht nur für hochwertige Gärten, sondern auch sozial. Der Verein unterstützt benachteiligte Kinder in der Dominikanischen Republik mit langfristiger Hilfe und konkreten Projekten.',
    items: ['Gegründet im Jahr 2001', 'Unterstützung für Kinder und Familien', 'Nachhaltige Hilfe mit persönlichem Einsatz', 'Weitere Informationen direkt beim Verein'],
    note: 'Mehr zur Vereinsarbeit und zu aktuellen Projekten finden Sie über den folgenden Link.',
    image: 'enzo-portrait.jpg',
    primary: { label: 'Verein ansehen', href: 'https://www.azioni-ninos-felices.de/' },
    secondary: { label: 'Kontakt aufnehmen', href: '#kontakt' }
  }
};

function openModal(key) {
  const data = DETAIL_DATA[key];
  if (!data || !modal) return;
  detailImage.src = data.image;
  detailImage.alt = data.title;
  detailKicker.textContent = data.kicker || '';
  detailTitle.textContent = data.title || '';
  detailText.textContent = data.text || '';
  detailNote.textContent = data.note || '';
  detailList.innerHTML = '';
  (data.items || []).forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    detailList.appendChild(li);
  });
  detailPrimary.textContent = data.primary?.label || 'Mehr erfahren';
  detailPrimary.href = data.primary?.href || '#kontakt';
  detailPrimary.target = data.primary?.href?.startsWith('http') ? '_blank' : '';
  detailPrimary.rel = data.primary?.href?.startsWith('http') ? 'noopener' : '';
  detailSecondary.textContent = data.secondary?.label || 'Jetzt anrufen';
  detailSecondary.href = data.secondary?.href || 'tel:+49896134421';
  detailSecondary.target = data.secondary?.href?.startsWith('http') ? '_blank' : '';
  detailSecondary.rel = data.secondary?.href?.startsWith('http') ? 'noopener' : '';
  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modal) return;
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
  detailImage.removeAttribute('src');
  body.style.overflow = body.classList.contains('menu-open') ? 'hidden' : '';
}

document.querySelectorAll('[data-detail]').forEach(button => {
  button.addEventListener('click', () => openModal(button.dataset.detail));
});

closeTargets.forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
    if (body.classList.contains('menu-open')) toggleMenu(false);
  }
});

function toggleMenu(force) {
  const shouldOpen = typeof force === 'boolean' ? force : !body.classList.contains('menu-open');
  body.classList.toggle('menu-open', shouldOpen);
  menuToggle?.setAttribute('aria-expanded', String(shouldOpen));
  body.style.overflow = shouldOpen ? 'hidden' : '';
}

menuToggle?.addEventListener('click', () => toggleMenu());
mainNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 860) toggleMenu(false);
  });
});

document.querySelectorAll('[data-open-details]').forEach(link => {
  link.addEventListener('click', (event) => {
    const id = link.getAttribute('data-open-details');
    const detail = document.getElementById(id);
    if (!detail) return;
    event.preventDefault();
    detail.open = true;
    toggleMenu(false);
    detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const form = document.getElementById('contact-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = (formData.get('name') || '').toString().trim();
  const email = (formData.get('email') || '').toString().trim();
  const phone = (formData.get('phone') || '').toString().trim();
  const topic = (formData.get('topic') || '').toString().trim();
  const message = (formData.get('message') || '').toString().trim();

  const subject = encodeURIComponent(`Anfrage Website: ${topic}`);
  const bodyText = [
    'Guten Tag,',
    '',
    'ich möchte eine Anfrage stellen.',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Telefon: ${phone}` : 'Telefon:',
    `Thema: ${topic}`,
    '',
    'Nachricht:',
    message,
    '',
    'Mit freundlichen Grüßen',
    name
  ].join('\n');

  window.location.href = `mailto:enzo_giardino@web.de?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
});
