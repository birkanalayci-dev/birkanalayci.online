// ---------------------------------------------------------------------------
// Sağlık Notları — kısa "akıl kartları" ve mini videolar.
// Uzun akademik metin yerine tek bakışta okunan, kanıta dayalı notlar.
// İçerik genel bilgilendirme amaçlıdır; kişisel tıbbi tavsiye değildir.
// ---------------------------------------------------------------------------

export type Bi = { tr: string; en: string };

export type HealthCard = {
  id: string;
  tag: Bi;
  title: Bi;
  body: Bi;
};

export const HEALTH_CARDS: HealthCard[] = [
  {
    id: 'check-up',
    tag: { tr: 'Check-up', en: 'Check-up' },
    title: {
      tr: 'İyi hissetmek, sağlıklı olmak demek değil',
      en: 'Feeling fine isn’t the same as being healthy',
    },
    body: {
      tr: 'Tansiyon, kan şekeri ve kolesterol gibi değerler çoğu zaman belirti vermeden değişir. Düzenli kontrol, sorunları erken yakalayarak tedaviyi kolaylaştırır.',
      en: 'Blood pressure, blood sugar and cholesterol often change without any symptoms. Regular check-ups catch problems early and make management easier.',
    },
  },
  {
    id: 'diyabet',
    tag: { tr: 'Diyabet', en: 'Diabetes' },
    title: {
      tr: 'Tip 2 diyabet sessiz ilerler',
      en: 'Type 2 diabetes progresses quietly',
    },
    body: {
      tr: 'Aşırı susama, sık idrara çıkma ve açıklanamayan yorgunluk uyarıcı olabilir. Risk taşıyanlarda açlık kan şekeri ve HbA1c ile değerlendirme yararlıdır.',
      en: 'Excessive thirst, frequent urination and unexplained fatigue can be warning signs. In at-risk people, fasting glucose and HbA1c help with assessment.',
    },
  },
  {
    id: 'tiroid',
    tag: { tr: 'Tiroid', en: 'Thyroid' },
    title: {
      tr: 'Yorgunluğun arkasında tiroid olabilir',
      en: 'Fatigue can hide a thyroid issue',
    },
    body: {
      tr: 'Tiroid hormonundaki değişiklikler yorgunluk, kilo değişimi, çarpıntı veya üşüme gibi çeşitli belirtilere yol açabilir. Basit bir kan testi (TSH) çoğu zaman ilk değerlendirme için yeterlidir.',
      en: 'Thyroid hormone changes can cause varied symptoms — fatigue, weight change, palpitations or feeling cold. A simple blood test (TSH) is often enough for an initial assessment.',
    },
  },
  {
    id: 'tansiyon',
    tag: { tr: 'Tansiyon', en: 'Blood Pressure' },
    title: {
      tr: 'Yüksek tansiyon belirti vermeden zarar verir',
      en: 'High blood pressure harms silently',
    },
    body: {
      tr: 'Yüksek tansiyon çoğu zaman belirti vermez ama kalp, böbrek ve damarları sessizce etkiler. Evde düzenli ve doğru teknikle ölçüm, tabloyu izlemenin en pratik yollarından biridir.',
      en: 'High blood pressure usually has no symptoms but quietly affects the heart, kidneys and vessels. Measuring regularly at home with proper technique is one of the most practical ways to track it.',
    },
  },
  {
    id: 'metabolik',
    tag: { tr: 'Metabolik Sağlık', en: 'Metabolic Health' },
    title: {
      tr: 'Değerlere tek tek değil, birlikte bakın',
      en: 'Look at the numbers together, not one by one',
    },
    body: {
      tr: 'Bel çevresi, kan şekeri, tansiyon ve kan yağları birlikte değerlendirildiğinde metabolik riski daha iyi gösterir. Küçük ama sürekli yaşam tarzı değişiklikleri bu değerlerin hepsini olumlu etkileyebilir.',
      en: 'Waist circumference, blood sugar, blood pressure and blood lipids reveal metabolic risk better when viewed together. Small but consistent lifestyle changes can improve all of them.',
    },
  },
  {
    id: 'd-vitamini',
    tag: { tr: 'D Vitamini', en: 'Vitamin D' },
    title: {
      tr: 'D vitamininde “herkese yüksek doz” doğru değil',
      en: '“High dose for everyone” is the wrong approach to vitamin D',
    },
    body: {
      tr: 'D vitamini eksikliği sıktır ve yorgunluk, kas-iskelet ağrılarıyla ilişkili olabilir. Takviye kararı kan düzeyine ve kişisel duruma göre verilmelidir; rutin yüksek doz herkes için gerekli değildir.',
      en: 'Vitamin D deficiency is common and can be linked to fatigue and musculoskeletal aches. Supplementation should be based on blood levels and individual circumstances; routine high doses aren’t necessary for everyone.',
    },
  },
];

// Mini videolar — YouTube video/Short kimliği (id) ya da harici link verin.
// Birkan video linklerini paylaşınca buraya eklenir; boşken bölüm "yakında" gösterir.
export type MiniVideo = {
  id: string;
  youtube?: string; // örn. 'dQw4w9WgXcQ'
  url?: string; // YouTube dışı platform linki (opsiyonel)
  title: Bi;
};

export const VIDEOS: MiniVideo[] = [];
