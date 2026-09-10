// ---------------------------------------------------------------------------
// Merkezi site verisi. Tüm sayfalar buradan beslenir.
// Yalnızca doğrulanmış bilgi ve gerçek linkler — uydurma YOK.
// ---------------------------------------------------------------------------

export const SITE = {
  domain: 'https://birkanalayci.online',
  nameTr: 'Dr. Birkan Alaycı',
  nameEn: 'Birkan Alaycı, MD',
  // İsim + kurum satırı (hero, footer, meta açıklamaları).
  affiliationTr: 'Koç Üniversitesi, Clinical Trials Unit',
  affiliationEn: 'Clinical Trials Unit, Koç University',
  unitShort: 'Clinical Trials Unit',
  phdTr: 'Moleküler Onkoloji Doktora Programı, İstinye Üniversitesi',
  phdEn: 'PhD Programme in Molecular Oncology, İstinye University',
  cityTr: 'İstanbul',
  cityEn: 'Istanbul',
};

// Doğrulanmış gerçek linkler.
export const LINKS = {
  scholar: 'https://scholar.google.com/citations?user=vLrCaIsAAAAJ&hl=tr',
  orcid: 'https://orcid.org/0000-0002-8244-0987',
  researchgate: 'https://www.researchgate.net/profile/Birkan-Alayci',
  github: 'https://github.com/birkanalayci-dev',
  linkedin: 'https://www.linkedin.com/in/birkan-alayc%C4%B1-0a165056/',
  // Kişisel / akademik dışı (Velo sayfasında toplanır):
  instagram: 'https://instagram.com/birkanalayci',
  soundcloud: 'https://soundcloud.com/birkanalayci',
  spotifyArtist: 'https://open.spotify.com/intl-tr/artist/2aB0cuIhiT5cd4olC6VBQq',
  spotifyUser: 'https://open.spotify.com/user/birkanalayci',
};

// Velo (sanatçı) Spotify gömülü oynatıcı kimliği.
export const VELO_SPOTIFY_ARTIST_ID = '2aB0cuIhiT5cd4olC6VBQq';

// Açık kaynak araştırma projeleri (GitHub — gerçek depolar).
export type Repo = {
  name: string;
  url: string;
  desc: { tr: string; en: string };
  tags: string[];
};

export const REPOS: Repo[] = [
  {
    name: 'glp1-lbm-dxa-meta-analysis',
    url: 'https://github.com/birkanalayci-dev/glp1-lbm-dxa-meta-analysis',
    desc: {
      tr: 'GLP-1 ve ikili GIP/GLP-1 reseptör agonistlerinin DXA ile ölçülen yağsız ve yağ kütlesi üzerindeki etkilerine dair meta-analizin verisi ve R kodu (faz 3 RKÇ’ler; PROSPERO CRD420261323497).',
      en: 'Data and R code for the meta-analysis of DXA-measured lean and fat mass with GLP-1 and dual GIP/GLP-1 receptor agonists (phase 3 RCTs; PROSPERO CRD420261323497).',
    },
    tags: ['meta-analysis', 'DXA', 'GLP-1', 'R'],
  },
  {
    name: 'meta-analysis-automation-engine',
    url: 'https://github.com/birkanalayci-dev/meta-analysis-automation-engine',
    desc: {
      tr: 'Bilimsel meta-analiz otomasyonu: PubMed API, NLP, PDF ayrıştırma, halüsinasyon kontrolü ve yeniden üretilebilir araştırma altyapısı.',
      en: 'Automation for scientific meta-analysis: PubMed API, NLP, PDF parsing, hallucination checks and reproducible-research infrastructure.',
    },
    tags: ['automation', 'NLP', 'reproducible research'],
  },
];

// Hero'da portre gösterilsin mi? (public/portrait.webp)
export const HAS_PORTRAIT = true;

// Velo (kişisel) sayfası ana menüde değil; footer'dan diskret bir bağlantıyla erişilir.
export const SHOW_PERSONAL_PAGE = true;

// JSON-LD sameAs — yalnızca doğrulanmış gerçek URL'ler.
export const SAME_AS = [LINKS.linkedin, LINKS.scholar, LINKS.orcid, LINKS.researchgate, LINKS.github];

// ---------------------------------------------------------------------------
// Diller, navigasyon ve TR<->EN sayfa eşlemesi (hreflang için kritik).
// ---------------------------------------------------------------------------
export type Lang = 'tr' | 'en';

export const LANGS: { code: Lang; label: string; native: string; home: string }[] = [
  { code: 'tr', label: 'TR', native: 'Türkçe', home: '/' },
  { code: 'en', label: 'EN', native: 'English', home: '/en/' },
];

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
    tr: { label: 'Araştırma', href: '/arastirma/' },
    en: { label: 'Research', href: '/en/research/' },
  },
  {
    tr: { label: 'İletişim', href: '/iletisim/' },
    en: { label: 'Contact', href: '/en/contact/' },
  },
];

// Paylaşılan bileşenlerde kullanılan UI metinleri.
export type UIStrings = {
  name: string;
  affiliation: string;
  menu: string;
  mainMenu: string;
  langAria: string;
  rights: string;
  city: string;
};

export const UI: Record<Lang, UIStrings> = {
  tr: {
    name: SITE.nameTr,
    affiliation: SITE.affiliationTr,
    menu: 'Menü',
    mainMenu: 'Ana menü',
    langAria: 'Dil seçimi',
    rights: 'Tüm hakları saklıdır.',
    city: SITE.cityTr,
  },
  en: {
    name: SITE.nameEn,
    affiliation: SITE.affiliationEn,
    menu: 'Menu',
    mainMenu: 'Main menu',
    langAria: 'Language',
    rights: 'All rights reserved.',
    city: SITE.cityEn,
  },
};
