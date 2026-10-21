// ---------------------------------------------------------------------------
// Yayınlar — yalnızca DOĞRULANMIŞ, Birkan'ın yazar olduğu çalışmalar.
// Künyeler yayıncı/DOI kayıtlarından teyit edilmiştir. Yeni yayın eklerken
// aynı yapıyı kullanın; "self: true" Birkan'ın adını vurgular.
// ---------------------------------------------------------------------------

export type Author = { name: string; self?: boolean };

export type Publication = {
  title: string;
  authors: Author[];
  venue: string;
  year: number;
  type: 'preprint' | 'article' | 'poster';
  url?: string;
  doi?: string;
  status?: { tr: string; en: string };
};

export const PUBLICATIONS: Publication[] = [
  // Research Square ön baskısının (rs-9973131) hakemli sürümü; ön baskı bu
  // kayıtla değiştirildi. Article in Press, 21 Ekim 2026. Version of Record
  // yayımlanınca status kaldırılacak, venue'ye cilt ve makale numarası eklenecek.
  {
    title:
      'DXA-measured lean and fat mass differences with incretin-based therapy versus comparators: a meta-analysis of phase 3 trials',
    authors: [
      { name: 'Birkan Alaycı', self: true },
      { name: 'Öykü Zeynep Gerçek' },
    ],
    venue: 'BMC Endocrine Disorders',
    year: 2026,
    type: 'article',
    url: 'https://doi.org/10.1186/s12902-026-02679-z',
    doi: '10.1186/s12902-026-02679-z',
    status: { tr: 'Erken erişim', en: 'Article in Press' },
  },
  // COSTEM 2026 bildirileri. Kongre sonrası (Ekim 2026) status alanı
  // { tr: 'Sunuldu', en: 'Presented' } olarak güncellenecek. Özet kitabı
  // yayımlanırsa venue'ye künye ve varsa DOI eklenecek.
  {
    title:
      'Outcomes and Prognostic Factors of Allogeneic Hematopoietic Stem Cell Transplantation in Patients Aged ≥65 Years with Acute Myeloid Leukemia: A Single-Center Retrospective Analysis',
    authors: [
      { name: 'Gülkan Özkan' },
      { name: 'Deniz Gören' },
      { name: 'Nurcan Özçelik' },
      { name: 'Birkan Alaycı', self: true },
      { name: 'Mutlu Arat' },
    ],
    venue:
      '11th Congress on Controversies in Stem Cell Transplantation and Cellular Therapies (COSTEM 2026), Berlin, Germany · 1–4 October 2026',
    year: 2026,
    type: 'poster',
    status: { tr: 'Kabul edildi', en: 'Accepted' },
  },
  {
    title:
      'Allogeneic Hematopoietic Stem Cell Transplantation in Myelofibrosis: Risk Stratification Using MTSS and EBMT Score — A Single-Center Experience',
    authors: [
      { name: 'Gülkan Özkan' },
      { name: 'Birkan Alaycı', self: true },
      { name: 'Nurcan Özçelik' },
      { name: 'Deniz Gören' },
      { name: 'Mutlu Arat' },
    ],
    venue:
      '11th Congress on Controversies in Stem Cell Transplantation and Cellular Therapies (COSTEM 2026), Berlin, Germany · 1–4 October 2026',
    year: 2026,
    type: 'poster',
    status: { tr: 'Kabul edildi', en: 'Accepted' },
  },
  {
    title:
      'Outcomes of Second Allogeneic Hematopoietic Stem Cell Transplantation in Patients with Acute Leukemia: A Single-Center Retrospective Analysis',
    authors: [
      { name: 'Gülkan Özkan' },
      { name: 'Deniz Gören' },
      { name: 'Nurcan Özçelik' },
      { name: 'Birkan Alaycı', self: true },
      { name: 'Mutlu Arat' },
    ],
    venue:
      '11th Congress on Controversies in Stem Cell Transplantation and Cellular Therapies (COSTEM 2026), Berlin, Germany · 1–4 October 2026',
    year: 2026,
    type: 'poster',
    status: { tr: 'Kabul edildi', en: 'Accepted' },
  },
  {
    title:
      'When Trimethoprim-Sulfamethoxazole Turns Pernicious: Type 4 Renal Tubular Acidosis in a Diabetic Patient With Sjögren’s Syndrome',
    authors: [
      { name: 'Öykü Zeynep Gerçek' },
      { name: 'Birkan Alaycı', self: true },
      { name: 'Fatih Borlu' },
    ],
    venue: 'Cureus',
    year: 2025,
    type: 'article',
    url: 'https://doi.org/10.7759/cureus.91588',
    doi: '10.7759/cureus.91588',
  },
  {
    title: 'Frequency of Metabolic Syndrome in Paget’s Disease of Bone',
    authors: [
      { name: 'Rumeysa Selvinaz Erol' },
      { name: 'Esra Çil Şen' },
      { name: 'Feyza Yener Öztürk' },
      { name: 'Birkan Alaycı', self: true },
      { name: 'Yüksel Altuntaş' },
    ],
    venue: 'Med Bull Sisli Etfal Hosp 2022;56(3):360–364',
    year: 2022,
    type: 'article',
    url: 'https://doi.org/10.14744/SEMB.2021.78861',
    doi: '10.14744/SEMB.2021.78861',
  },
  {
    title:
      'İnciraltı Yerleşkesinde Biyoistatistik ve Biyoinformatik Program Kullanım Sıklığı ve Farkındalığı',
    authors: [
      { name: 'Çalıbaşı G' },
      { name: 'Kaçar G' },
      { name: 'Doğan Y' },
      { name: 'Tarı M' },
      { name: 'Sarı B' },
      { name: 'Tonç S' },
      { name: 'Başaran B' },
      { name: 'Alizade N' },
      { name: 'Alaycı B', self: true },
      { name: 'Engin OT' },
      { name: 'Canbeldek M' },
      { name: 'Alashqar A' },
      { name: 'Amırfalla A' },
      { name: 'Dağdeviren K' },
      { name: 'Akbarpour M' },
      { name: 'Uysal T' },
      { name: 'Çakıroğlu E' },
      { name: 'Baskın Y' },
      { name: 'Ellidokuz H' },
    ],
    venue: 'Dokuz Eylül Üniversitesi Tıp Fakültesi Dergisi 2014;28(2):45–50',
    year: 2014,
    type: 'article',
    url: 'https://search.trdizin.gov.tr/tr/yayin/detay/230765',
  },
];
