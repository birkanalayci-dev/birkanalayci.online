// ---------------------------------------------------------------------------
// Mesleki üyelikler ile yeterlilik ve sertifikalar — TEK kaynak.
// /uyelikler ve /en/memberships sayfaları buradan beslenir.
// Yalnızca doğrulanmış ve yürürlükteki kayıtlar — uydurma YOK.
// ---------------------------------------------------------------------------

export type Logo = { src: string; width: number; height: number };

export type Membership = {
  /** Kısaltma. Logo yoksa satırın işareti olarak basılır. */
  abbr: string;
  name: string;
  /** Üyelik kategorisi ya da alt grup (varsa). */
  note?: { tr: string; en: string };
  /**
   * İsteğe bağlı kurum logosu (public/ altındaki dosya). Yalnızca kurumun
   * kendi verdiği dosya ve kullanım izni varsa doldurun; yoksa boş bırakın,
   * satır kısaltmayla basılır.
   */
  logo?: Logo;
};

export const MEMBERSHIPS: Membership[] = [
  { abbr: 'ACP', name: 'American College of Physicians' },
  { abbr: 'ACRP', name: 'Association of Clinical Research Professionals' },
  {
    abbr: 'AACR',
    name: 'American Association for Cancer Research',
    note: { tr: 'Associate Member', en: 'Associate Member' },
  },
  {
    abbr: 'EORTC',
    name: 'European Organisation for Research and Treatment of Cancer',
    note: { tr: 'Affiliate Member', en: 'Affiliate Member' },
  },
  { abbr: 'ESE', name: 'European Society of Endocrinology' },
  {
    abbr: 'TİHUD',
    name: 'Türk İç Hastalıkları Uzmanlık Derneği',
    note: {
      tr: 'Genç Dahiliyeciler Grubu',
      en: 'Genç Dahiliyeciler Grubu (Young Internists)',
    },
  },
  { abbr: 'DAHUDER', name: 'Dahiliye Uzmanları Derneği' },
];

export type Certificate = {
  /** Belgeyi veren kurumun kısaltması (satır işareti). */
  abbr: string;
  title: { tr: string; en: string };
  issuer: string;
  year: number;
};

export const CERTIFICATES: Certificate[] = [
  {
    abbr: 'TİHUD',
    title: {
      tr: 'İç Hastalıkları Uzmanlık Yeterlilik Sınavı başarı sertifikası',
      en: 'Internal Medicine Proficiency Examination (Yeterlilik), passed',
    },
    issuer: 'Türk İç Hastalıkları Uzmanlık Derneği',
    year: 2026,
  },
  {
    abbr: 'ACRP',
    title: {
      tr: 'İyi Klinik Uygulamalar (GCP), ICH E6(R3)',
      en: 'Good Clinical Practice (GCP), ICH E6(R3)',
    },
    issuer: 'Association of Clinical Research Professionals',
    year: 2026,
  },
  {
    abbr: 'ESO',
    title: {
      tr: 'Basics of Clinical Research and Biostatistics',
      en: 'Basics of Clinical Research and Biostatistics',
    },
    issuer: 'European School of Oncology',
    year: 2026,
  },
  {
    abbr: 'CABI',
    title: {
      tr: 'Primer on Evidence Synthesis',
      en: 'Primer on Evidence Synthesis',
    },
    issuer: 'CABI Academy',
    year: 2026,
  },
];
