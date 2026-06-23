// ---------------------------------------------------------------------------
// Merkezi site verisi. Tüm sayfalar buradan beslenir.
// Gerçek, doğrulanmış linkler aşağıda. "[ONAY BEKLİYOR]" / "[BİRKAN DOLDURACAK]"
// işaretli alanlar Birkan tarafından doldurulacak — uydurma YOK.
// ---------------------------------------------------------------------------

export const SITE = {
  domain: 'https://birkanalayci.online',
  name: 'Uzm. Dr. Birkan Alaycı',
  title: 'Uzm. Dr. Birkan Alaycı',
  specialtyTr: 'İç Hastalıkları Uzmanı',
  specialtyEn: 'Internal Medicine Specialist',
  hospitalTr: 'Liv Hospital Vadistanbul',
  hospitalEn: 'Liv Hospital Vadistanbul',
  cityTr: 'İstanbul',
  cityEn: 'Istanbul',
};

// Doğrulanmış gerçek linkler (mevcut siteden taşındı).
export const LINKS = {
  email: 'mailto:birkan.alayci@livhospital.com.tr',
  liv: 'https://www.livhospital.com/uzm-dr-birkan-alayci',
  scholar: 'https://scholar.google.com/citations?user=vLrCaIsAAAAJ&hl=tr',
  orcid: 'https://orcid.org/0000-0002-8244-0987',
  researchgate: 'https://www.researchgate.net/profile/Birkan-Alayci',
  github: 'https://github.com/birkanalayci-dev',
  linkedin: 'https://www.linkedin.com/in/birkan-alayc%C4%B1-0a165056/',
  // Kişisel / klinik dışı (ayrı "Kişisel" sayfasında toplanır):
  instagram: 'https://instagram.com/birkanalayci',
  soundcloud: 'https://soundcloud.com/birkanalayci',
  spotifyArtist: 'https://open.spotify.com/intl-tr/artist/2aB0cuIhiT5cd4olC6VBQq',
  spotifyUser: 'https://open.spotify.com/user/birkanalayci',
};

// Velo (sanatçı) Spotify gömülü oynatıcı kimliği.
export const VELO_SPOTIFY_ARTIST_ID = '2aB0cuIhiT5cd4olC6VBQq';

// Liv Hospital Vadistanbul iletişim — kamuya açık, doğrulanmış bilgiler.
export const CLINIC = {
  callCenter: '444 45 48', // Liv Hospital çağrı merkezi
  callCenterTel: 'tel:+908502220548',
  phone: '+90 212 919 60 00', // Liv Vadistanbul santral
  phoneTel: 'tel:+902129196000',
  addressTr:
    'Ayazağa Mah., Kemerburgaz Cad., Vadistanbul Park Etabı, 7F Blok, 34396 Sarıyer / İstanbul',
  addressEn:
    'Ayazağa Mah., Kemerburgaz Cad., Vadistanbul Park Etabı, 7F Blok, 34396 Sarıyer / Istanbul',
  // API anahtarı gerektirmeyen Google Maps embed.
  mapEmbed: 'https://maps.google.com/maps?q=Liv%20Hospital%20Vadistanbul&output=embed',
};

// Kalan opsiyonel link.
export const PLACEHOLDER_LINKS = {
  livAppointment: '#', // [ONAY BEKLİYOR] Liv online randevu sayfası URL'si (boşsa Liv profili kullanılır)
};

// Hero'da profesyonel portre gösterilsin mi? (public/portrait.webp)
export const HAS_PORTRAIT = true;

// Velo (kişisel) sayfası klinik vitrin odağını dağıtmamak için ana menüde
// değil; footer'dan diskret bir bağlantıyla erişilir.
export const SHOW_PERSONAL_PAGE = true;

// JSON-LD sameAs — yalnızca doğrulanmış gerçek URL'ler.
export const SAME_AS = [
  LINKS.liv,
  LINKS.linkedin,
  LINKS.scholar,
  LINKS.orcid,
  LINKS.researchgate,
  LINKS.github,
];

// ---------------------------------------------------------------------------
// Navigasyon ve TR<->EN sayfa eşlemesi (hreflang için kritik).
// ---------------------------------------------------------------------------
export type NavItem = {
  tr: { label: string; href: string };
  en: { label: string; href: string };
};

export type Lang = 'tr' | 'en' | 'ar' | 'ru' | 'fa' | 'de' | 'fr' | 'es';

// Kök = TR, /en elle yazılmış tam set. Diğerleri dinamik [lang] rotasıyla üretilir.
export const EXTRA_LANGS: Exclude<Lang, 'tr' | 'en'>[] = ['ar', 'ru', 'fa', 'de', 'fr', 'es'];

export const LANGS: { code: Lang; label: string; native: string; home: string }[] = [
  { code: 'tr', label: 'TR', native: 'Türkçe', home: '/' },
  { code: 'en', label: 'EN', native: 'English', home: '/en/' },
  { code: 'ar', label: 'AR', native: 'العربية', home: '/ar/' },
  { code: 'ru', label: 'RU', native: 'Русский', home: '/ru/' },
  { code: 'fa', label: 'FA', native: 'فارسی', home: '/fa/' },
  { code: 'de', label: 'DE', native: 'Deutsch', home: '/de/' },
  { code: 'fr', label: 'FR', native: 'Français', home: '/fr/' },
  { code: 'es', label: 'ES', native: 'Español', home: '/es/' },
];

export const RTL_LANGS: Lang[] = ['ar', 'fa'];

// Genişletilmiş diller tek sayfa iniş; menü = bölüm bağlantıları.
const navMin = (focus: string, contact: string) => [
  { label: focus, href: '#focus' },
  { label: contact, href: '#contact' },
];

export const NAV_MIN: Record<string, { label: string; href: string }[]> = {
  ar: navMin('مجالات الاهتمام', 'التواصل'),
  ru: navMin('Направления', 'Контакты'),
  fa: navMin('زمینه‌های تخصص', 'تماس'),
  de: navMin('Schwerpunkte', 'Kontakt'),
  fr: navMin('Domaines', 'Contact'),
  es: navMin('Áreas', 'Contacto'),
};

// Paylaşılan bileşenlerde kullanılan UI metinleri.
export type UIStrings = {
  specialty: string; cta: string; menu: string; mainMenu: string; langAria: string;
  bannerTitle: string; bannerBody: string; bannerPrimary: string; bannerSecondary: string;
  contactHref: string; rights: string; city: string;
};

export const UI: Record<Lang, UIStrings> = {
  tr: {
    specialty: 'İç Hastalıkları', cta: 'Randevu Al', menu: 'Menü', mainMenu: 'Ana menü',
    langAria: 'Dil seçimi', bannerTitle: 'Randevu ve değerlendirme',
    bannerBody: 'Muayene ve randevu talepleri Liv Hospital Vadistanbul resmi kanalları üzerinden alınmaktadır.',
    bannerPrimary: 'Liv üzerinden randevu', bannerSecondary: 'İletişim sayfası',
    contactHref: '/iletisim/', rights: 'Tüm hakları saklıdır.', city: 'Sarıyer, İstanbul',
  },
  en: {
    specialty: 'Internal Medicine', cta: 'Book Appointment', menu: 'Menu', mainMenu: 'Main menu',
    langAria: 'Language', bannerTitle: 'Appointments & evaluation',
    bannerBody: 'Appointment requests are handled through the official Liv Hospital Vadistanbul channels.',
    bannerPrimary: 'Book via Liv', bannerSecondary: 'Contact page',
    contactHref: '/en/contact/', rights: 'All rights reserved.', city: 'Sarıyer, Istanbul',
  },
  ar: {
    specialty: 'الطب الباطني', cta: 'احجز موعدًا', menu: 'القائمة', mainMenu: 'القائمة الرئيسية',
    langAria: 'اللغة', bannerTitle: 'الحجز والتقييم',
    bannerBody: 'تتم طلبات الحجز والمعاينة عبر القنوات الرسمية لمستشفى Liv Hospital Vadistanbul.',
    bannerPrimary: 'الحجز عبر Liv', bannerSecondary: 'صفحة التواصل',
    contactHref: '#contact', rights: 'جميع الحقوق محفوظة.', city: 'ساريير، إسطنبول',
  },
  ru: {
    specialty: 'Терапия', cta: 'Записаться', menu: 'Меню', mainMenu: 'Главное меню',
    langAria: 'Язык', bannerTitle: 'Запись и консультация',
    bannerBody: 'Запись на приём осуществляется через официальные каналы Liv Hospital Vadistanbul.',
    bannerPrimary: 'Запись через Liv', bannerSecondary: 'Контакты',
    contactHref: '#contact', rights: 'Все права защищены.', city: 'Сарыер, Стамбул',
  },
  fa: {
    specialty: 'طب داخلی', cta: 'رزرو نوبت', menu: 'منو', mainMenu: 'منوی اصلی',
    langAria: 'زبان', bannerTitle: 'نوبت‌دهی و ارزیابی',
    bannerBody: 'درخواست‌های نوبت از طریق کانال‌های رسمی Liv Hospital Vadistanbul انجام می‌شود.',
    bannerPrimary: 'رزرو از طریق Liv', bannerSecondary: 'صفحه تماس',
    contactHref: '#contact', rights: 'کلیه حقوق محفوظ است.', city: 'ساری‌یر، استانبول',
  },
  de: {
    specialty: 'Innere Medizin', cta: 'Termin buchen', menu: 'Menü', mainMenu: 'Hauptmenü',
    langAria: 'Sprache', bannerTitle: 'Termine & Beurteilung',
    bannerBody: 'Terminanfragen werden über die offiziellen Kanäle des Liv Hospital Vadistanbul bearbeitet.',
    bannerPrimary: 'Über Liv buchen', bannerSecondary: 'Kontaktseite',
    contactHref: '#contact', rights: 'Alle Rechte vorbehalten.', city: 'Sarıyer, Istanbul',
  },
  fr: {
    specialty: 'Médecine interne', cta: 'Prendre rendez-vous', menu: 'Menu', mainMenu: 'Menu principal',
    langAria: 'Langue', bannerTitle: 'Rendez-vous & évaluation',
    bannerBody: 'Les demandes de rendez-vous sont traitées via les canaux officiels du Liv Hospital Vadistanbul.',
    bannerPrimary: 'Réserver via Liv', bannerSecondary: 'Page de contact',
    contactHref: '#contact', rights: 'Tous droits réservés.', city: 'Sarıyer, Istanbul',
  },
  es: {
    specialty: 'Medicina interna', cta: 'Reservar cita', menu: 'Menú', mainMenu: 'Menú principal',
    langAria: 'Idioma', bannerTitle: 'Citas y evaluación',
    bannerBody: 'Las solicitudes de cita se gestionan a través de los canales oficiales del Liv Hospital Vadistanbul.',
    bannerPrimary: 'Reservar vía Liv', bannerSecondary: 'Página de contacto',
    contactHref: '#contact', rights: 'Todos los derechos reservados.', city: 'Sarıyer, Estambul',
  },
};

export const NAV: NavItem[] = [
  {
    tr: { label: 'Ana Sayfa', href: '/' },
    en: { label: 'Home', href: '/en/' },
  },
  {
    tr: { label: 'Hakkımda', href: '/hakkimda/' },
    en: { label: 'About', href: '/en/about/' },
  },
  {
    tr: { label: 'İlgi Alanları', href: '/ilgi-alanlari/' },
    en: { label: 'Focus Areas', href: '/en/focus-areas/' },
  },
  {
    tr: { label: 'Araştırma', href: '/arastirma/' },
    en: { label: 'Research', href: '/en/research/' },
  },
  {
    tr: { label: 'İletişim', href: '/iletisim/' },
    en: { label: 'Contact', href: '/en/contact/' },
  },
  {
    tr: { label: 'Sağlık Notları', href: '/yazilar/' },
    en: { label: 'Health Notes', href: '/en/writing/' },
  },
];
