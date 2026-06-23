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
  type: 'preprint' | 'article';
  url: string;
  doi?: string;
};

export const PUBLICATIONS: Publication[] = [
  {
    title:
      'DXA-Measured Body Composition Effects of GLP-1 and Dual GIP/GLP-1 Receptor Agonists in Adults with Obesity or Type 2 Diabetes: A Systematic Review and Meta-Analysis of Phase 3 Randomized Trials',
    authors: [
      { name: 'Birkan Alaycı', self: true },
      { name: 'Öykü Zeynep Gerçek' },
    ],
    venue: 'Research Square (preprint)',
    year: 2026,
    type: 'preprint',
    url: 'https://www.researchsquare.com/article/rs-9973131/v1',
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
