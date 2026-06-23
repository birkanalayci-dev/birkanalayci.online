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
  // Kişisel / klinik dışı (footer'da diskret, varsayılan KAPALI):
  instagram: 'https://instagram.com/birkanalayci',
  soundcloud: 'https://soundcloud.com/birkanalayci',
};

// Henüz doğrulanmamış / Birkan'ın vereceği placeholder linkler.
// JSON-LD sameAs ve ilgili butonlar bunlar doldurulunca aktif olacak.
export const PLACEHOLDER_LINKS = {
  linkedin: '#', // [BİRKAN DOLDURACAK] LinkedIn profil URL'si
  pubmed: '#', // [BİRKAN DOLDURACAK] PubMed yazar/koleksiyon URL'si
  doktorsitesi: '#', // [BİRKAN DOLDURACAK] doktorsitesi.com profil URL'si
  livAppointment: '#', // [ONAY BEKLİYOR] Liv online randevu sayfası URL'si
  kvkk: '#', // [BİRKAN DOLDURACAK] KVKK aydınlatma metni linki
  mapEmbed: '', // [BİRKAN DOLDURACAK] Google Maps embed URL'si (opsiyonel)
};

// Footer'daki kişisel/diğer linkleri göster/gizle. Brief gereği KAPALI başlar.
export const SHOW_PERSONAL_LINKS = false;

// JSON-LD sameAs — yalnızca doğrulanmış gerçek URL'ler.
// [BİRKAN DOLDURACAK]: linkedin, pubmed, doktorsitesi doldurulunca buraya eklenecek.
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
