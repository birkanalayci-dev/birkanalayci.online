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
  email: 'mailto:birkanalayci@gmail.com',
  liv: 'https://www.livhospital.com/uzm-dr-birkan-alayci',
  scholar: 'https://scholar.google.com/citations?user=vLrCaIsAAAAJ&hl=tr',
  orcid: 'https://orcid.org/0000-0002-8244-0987',
  researchgate: 'https://www.researchgate.net/profile/Birkan-Alayci',
  github: 'https://github.com/birkanalayci-dev',
  // Kişisel / klinik dışı (ayrı "Kişisel" sayfasında toplanır):
  instagram: 'https://instagram.com/birkanalayci',
  soundcloud: 'https://soundcloud.com/birkanalayci',
};

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

// Birkan'ın doldurması/onaylaması gereken kalan placeholder linkler.
export const PLACEHOLDER_LINKS = {
  livAppointment: '#', // [ONAY BEKLİYOR] Liv online randevu sayfası URL'si (boşsa Liv profili kullanılır)
  kvkk: '#', // [BİRKAN DOLDURACAK] KVKK aydınlatma metni linki
};

// Hero'da profesyonel portre gösterilsin mi?
// public/portrait.jpg eklenince true yapın.
export const HAS_PORTRAIT = false;

// Ayrı "Kişisel / Diğer" sayfası (Instagram, SoundCloud) — footer'dan diskret link.
export const SHOW_PERSONAL_PAGE = true;

// JSON-LD sameAs — yalnızca doğrulanmış gerçek URL'ler.
export const SAME_AS = [
  LINKS.liv,
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
    tr: { label: 'İlgi & Hizmet Alanları', href: '/ilgi-alanlari/' },
    en: { label: 'Focus & Services', href: '/en/focus-areas/' },
  },
  {
    tr: { label: 'Araştırma & Yayınlar', href: '/arastirma/' },
    en: { label: 'Research', href: '/en/research/' },
  },
  {
    tr: { label: 'İletişim & Randevu', href: '/iletisim/' },
    en: { label: 'Contact', href: '/en/contact/' },
  },
  {
    tr: { label: 'Yazılar', href: '/yazilar/' },
    en: { label: 'Writing', href: '/en/writing/' },
  },
];
