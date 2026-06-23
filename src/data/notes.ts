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

// ---------------------------------------------------------------------------
// SSS flashcard havuzu (TR) — hasta odaklı, 2022-2026 literatürüne dayalı.
// Hekim (Uzm. Dr. Birkan Alaycı) tarafından hazırlanıp onaylanmıştır.
// Genel bilgilendirme amaçlıdır; kişisel tıbbi tavsiye değildir.
// ---------------------------------------------------------------------------
export type FaqCard = {
  id: string;
  kategori: string;
  soru: string;
  cevap: string;
  anahtar: string[];
  kaynaklar: string[];
};

export const FAQ_CARDS: FaqCard[] = [
  {
    id: 'vitd-01',
    kategori: 'Vitamin D',
    soru: 'Sağlıklı biriysem rutin vitamin D düzeyime baktırmam gerekir mi?',
    cevap: `Güncel kılavuzlar, belirtisi ve risk faktörü olmayan sağlıklı erişkinlerde rutin vitamin D (25-OH D) taramasını önermiyor. Test; kemik hastalığı, emilim bozukluğu, ileri yaş veya belirli ilaç kullanımı gibi riskli durumlarda anlamlı oluyor. Ölçümün gerekip gerekmediği kişisel duruma göre değerlendirilir.`,
    anahtar: ['vitamin D testi', 'vitamin D taraması', 'vitamin D kime baktırılır'],
    kaynaklar: ['Endocrine Society Klinik Uygulama Kılavuzu (Demay ve ark., JCEM, 2024)', 'Zemp ve ark., 31 kılavuzun sistematik derlemesi (Arch Public Health, 2025)'],
  },
  {
    id: 'vitd-02',
    kategori: 'Vitamin D',
    soru: "Vitamin D değeri kaçın altında 'eksik' sayılır?",
    cevap: `Çoğu kılavuz 20 ng/mL (50 nmol/L) altını eksiklik, 30 ng/mL üzerini yeterli kabul eder. Ancak 'ideal hedef düzey' konusunda tam bir uzlaşı yoktur ve eşikler tartışmalıdır. Sonucun yorumu yaşa, kemik sağlığına ve eşlik eden duruma göre değişir.`,
    anahtar: ['vitamin D normal değer', 'vitamin D kaç olmalı', '25 OH D düzeyi'],
    kaynaklar: ['Uluslararası vitamin D kılavuz derlemeleri (2023-2025)', 'Endocrine Society Kılavuzu (JCEM, 2024)'],
  },
  {
    id: 'vitd-03',
    kategori: 'Vitamin D',
    soru: 'Vitamin D takviyesini kendi başıma kullanabilir miyim?',
    cevap: `Düşük-orta dozlar genellikle güvenlidir; ancak yüksek dozların aşırı ve uzun süreli kullanımı toksisiteye yol açabilir. Takviye gerektiğinde kılavuzlar, tek seferlik çok yüksek dozlar yerine günlük düzenli alımı tercih eder. Doz ve süre kişiye göre planlanmalıdır.`,
    anahtar: ['vitamin D takviyesi', 'vitamin D dozu', 'vitamin D zararlı mı'],
    kaynaklar: ['Endocrine Society Kılavuzu (Demay ve ark., JCEM, 2024)'],
  },
  {
    id: 'vitd-04',
    kategori: 'Vitamin D',
    soru: 'Vitamin D her hastalığa iyi gelir mi (kalp, bağışıklık, kanser)?',
    cevap: `Vitamin D düşüklüğü birçok hastalıkla ilişkilendirilmiş olsa da, sağlıklı erişkinlerde ek takviyenin bu hastalıkları önlediği randomize çalışmalarda net olarak gösterilememiştir. Kanıtın en güçlü olduğu alan kemik ve kas sağlığıdır.`,
    anahtar: ['vitamin D faydaları', 'vitamin D bağışıklık', 'vitamin D kalp'],
    kaynaklar: ['Endocrine Society Kılavuzu (JCEM, 2024)'],
  },
  {
    id: 'vitd-05',
    kategori: 'Vitamin D',
    soru: 'Kimler vitamin D takviyesinden fayda görür?',
    cevap: `Kılavuzlar özellikle çocuk ve adölesanlarda, 75 yaş üstü bireylerde, gebelerde ve yüksek riskli prediyabeti olanlarda ölçüm yapmadan takviyeyi destekliyor. 75 yaş altı sağlıklı erişkinlerde rutin yüksek doz takviye önerilmiyor.`,
    anahtar: ['vitamin D kimler kullanmalı', 'gebelikte vitamin D', 'yaşlılarda vitamin D'],
    kaynaklar: ['Endocrine Society Kılavuzu (JCEM, 2024)'],
  },
  {
    id: 'vitd-06',
    kategori: 'Vitamin D',
    soru: 'Ampul (tek seferlik yüksek doz) mü, günlük damla/tablet mi daha iyi?',
    cevap: `Takviye gerektiğinde, özellikle 50 yaş üzerinde, günlük düzenli alım aralıklı yüksek dozlara tercih edilir. Hangi formun uygun olduğu kişisel duruma göre belirlenir.`,
    anahtar: ['vitamin D ampul', 'vitamin D damla', 'vitamin D günlük doz'],
    kaynaklar: ['Endocrine Society Kılavuzu (JCEM, 2024)'],
  },
  {
    id: 'b12-01',
    kategori: 'Vitamin B12',
    soru: 'B12 eksikliği en çok kimde görülür?',
    cevap: `Vegan/vejetaryen beslenenlerde, ileri yaşta, mide-bağırsak emilim sorunu olanlarda ve uzun süre metformin veya mide koruyucu (PPI) kullananlarda risk artar. Erişkinlerin yaklaşık %2-3'ünde görülür.`,
    anahtar: ['B12 eksikliği nedenleri', 'B12 kimde görülür', 'B12 risk'],
    kaynaklar: ['Patel ve ark., Vitamin B12 Deficiency: Common Questions and Answers (Am Fam Physician, 2025)'],
  },
  {
    id: 'b12-02',
    kategori: 'Vitamin B12',
    soru: 'B12 düşükse mutlaka iğne mi yapılmalı, hap yetmez mi?',
    cevap: `Çoğu hastada ağızdan B12 tedavisi iğne kadar etkilidir. İğne özellikle ağır eksiklik, sinir sistemi belirtileri veya belirgin emilim bozukluğu olanlarda tercih edilir.`,
    anahtar: ['B12 iğne mi hap mı', 'B12 ağızdan tedavi', 'B12 enjeksiyon'],
    kaynaklar: ['Patel ve ark. (Am Fam Physician, 2025)', 'Mazur ve ark., sistematik derleme ve meta-analiz (Front Pharmacol, 2025)'],
  },
  {
    id: 'b12-03',
    kategori: 'Vitamin B12',
    soru: 'B12 eksikliğinin belirtileri neler?',
    cevap: `Yorgunluk, dikkat ve odak güçlüğü ('beyin sisi'), el ve ayaklarda uyuşma-karıncalanma görülebilir. Belirtiler özgül olmadığı için tanı kan testiyle doğrulanır.`,
    anahtar: ['B12 eksikliği belirtileri', 'B12 yorgunluk', 'B12 uyuşma'],
    kaynaklar: ['Patel ve ark. (Am Fam Physician, 2025)'],
  },
  {
    id: 'b12-04',
    kategori: 'Vitamin B12',
    soru: 'B12 kaçın altı düşük kabul edilir?',
    cevap: `Genel olarak 180 pg/mL altı eksiklik sayılır. 180-350 pg/mL 'sınırda' kabul edilip gerekirse metilmalonik asit (MMA) gibi ek testlerle değerlendirilir.`,
    anahtar: ['B12 normal değer', 'B12 kaç olmalı', 'B12 sınır değer'],
    kaynaklar: ['Patel ve ark. (Am Fam Physician, 2025)'],
  },
  {
    id: 'b12-05',
    kategori: 'Vitamin B12',
    soru: 'Metformin veya mide ilacı kullanıyorum, B12\'me dikkat etmeli miyim?',
    cevap: `Evet. Uzun süreli metformin ve mide koruyucu (PPI) kullanımı B12 emilimini azaltarak eksikliğe zemin hazırlayabilir. Bu kişilerde belirti varlığında B12 kontrolü uygundur.`,
    anahtar: ['metformin B12', 'mide ilacı B12', 'PPI B12 eksikliği'],
    kaynaklar: ['Patel ve ark. (Am Fam Physician, 2025)'],
  },
  {
    id: 'b12-06',
    kategori: 'Vitamin B12',
    soru: 'B12 yüksekliği zararlı mı?',
    cevap: `İki ölçümde kalıcı olarak çok yüksek B12 (genelde 1000 pg/mL üzeri) bazı durumlarda altta yatan hastalıklarla ilişkili olabilir ve değerlendirme gerektirebilir. Takviyeye bağlı geçici yükseklik genelde sorun değildir.`,
    anahtar: ['B12 yüksekliği', 'B12 yüksek tehlikeli mi'],
    kaynaklar: ['Patel ve ark. (Am Fam Physician, 2025)'],
  },
  {
    id: 'fe-01',
    kategori: 'Demir Eksikliği ve Yorgunluk',
    soru: 'Kansızlığım yok ama sürekli yorgunum; demir eksikliği olabilir mi?',
    cevap: `Evet. Hemoglobin normalken bile demir depoları (ferritin) düşük olabilir; bu 'anemisiz demir eksikliği' yorgunluk, halsizlik ve dikkat dağınıklığı yapabilir. Yüksek gelirli ülkelerde üreme çağındaki kadınların yaklaşık üçte birinde görülür.`,
    anahtar: ['anemisiz demir eksikliği', 'ferritin düşüklüğü yorgunluk', 'demir eksikliği halsizlik'],
    kaynaklar: ['Auerbach ve ark., Iron Deficiency in Adults: A Review (JAMA, 2025)', 'Moisidis-Tesch ve ark. (Adv Ther, 2022)'],
  },
  {
    id: 'fe-02',
    kategori: 'Demir Eksikliği ve Yorgunluk',
    soru: 'Demir depomun düşük olduğunu hangi test gösterir?',
    cevap: `En kullanışlı test ferritindir; iltihabi bir durum yoksa genelde 30 ng/mL altı demir eksikliği lehinedir. Bazı durumlarda transferrin satürasyonu da değerlendirilir.`,
    anahtar: ['ferritin değeri', 'demir eksikliği testi', 'ferritin kaç olmalı'],
    kaynaklar: ['Auerbach ve ark. (JAMA, 2025)'],
  },
  {
    id: 'fe-03',
    kategori: 'Demir Eksikliği ve Yorgunluk',
    soru: 'Demir hapını her gün mü almalıyım?',
    cevap: `Güncel veriler, demiri her gün yerine gün aşırı almanın emilimi artırabileceğini ve mide-bağırsak yan etkilerini azaltabileceğini gösteriyor. Uygun doz ve sıklık kişiye göre planlanır.`,
    anahtar: ['demir hapı nasıl alınır', 'gün aşırı demir', 'demir emilimi'],
    kaynaklar: ['Auerbach ve ark. (JAMA, 2025)', 'Pantopoulos (Haematologica, 2024)'],
  },
  {
    id: 'fe-04',
    kategori: 'Demir Eksikliği ve Yorgunluk',
    soru: 'Demir hapı midemi bozuyor, ne yapabilirim?',
    cevap: `Daha düşük doz, gün aşırı alım veya farklı bir preparat yan etkileri azaltabilir. Ağızdan tedaviyi tolere edemeyen ya da emilimi bozuk olanlarda damardan demir bir seçenektir.`,
    anahtar: ['demir hapı yan etki', 'demir hapı mide', 'demir intoleransı'],
    kaynaklar: ['Auerbach ve ark. (JAMA, 2025)', 'Pantopoulos (Haematologica, 2024)'],
  },
  {
    id: 'fe-05',
    kategori: 'Demir Eksikliği ve Yorgunluk',
    soru: 'Demir eksikliğinin nedeni araştırılmalı mı?',
    cevap: `Evet. Özellikle adet kanamaları ve sindirim sistemi kaynaklı gizli kan kaybı en sık nedenlerdendir; eksikliğin nedeni bulunmadan yalnızca hap vermek yeterli olmayabilir.`,
    anahtar: ['demir eksikliği nedeni', 'demir eksikliği araştırma', 'gizli kanama'],
    kaynaklar: ['Auerbach ve ark. (JAMA, 2025)'],
  },
  {
    id: 'fe-06',
    kategori: 'Demir Eksikliği ve Yorgunluk',
    soru: 'Damardan (serum) demir kimlere gerekir?',
    cevap: `Ağızdan demiri tolere edemeyenler, emilimi bozuk olanlar (örneğin çölyak, mide ameliyatı geçirenler), sürekli kan kaybı olanlar ve gebeliğin ileri dönemlerinde damardan demir tercih edilebilir.`,
    anahtar: ['damardan demir', 'serum demir tedavisi', 'IV demir kime'],
    kaynaklar: ['Auerbach ve ark. (JAMA, 2025)'],
  },
  {
    id: 'pre-01',
    kategori: 'Prediyabet ve Diyabet',
    soru: 'Prediyabet nedir, şeker hastası mı oldum?',
    cevap: `Prediyabet, kan şekerinin normalin üstünde ama diyabet eşiğinin altında olduğu (açlık şekeri 100-125 mg/dL veya HbA1c %5.7-6.4) bir uyarı dönemidir. Henüz diyabet değildir ve doğru adımlarla geri çevrilebilir veya geciktirilebilir.`,
    anahtar: ['prediyabet nedir', 'gizli şeker', 'açlık şekeri sınırda'],
    kaynaklar: ['ADA tanı ölçütleri', 'Diabetes Prevention Program (DPP) çalışmaları'],
  },
  {
    id: 'pre-02',
    kategori: 'Prediyabet ve Diyabet',
    soru: 'Prediyabette doğrudan ilaç mı başlanır, yoksa yaşam tarzı mı?',
    cevap: `Birincil yaklaşım yaşam tarzı değişikliğidir. Büyük Diyabet Önleme Programı'nda yoğun yaşam tarzı değişikliği diyabete ilerlemeyi yaklaşık %58, metformin ise %31 azaltmıştır. İlaç, seçilmiş yüksek riskli kişilerde eklenebilir.`,
    anahtar: ['prediyabet tedavi', 'prediyabet metformin', 'diyabet önleme'],
    kaynaklar: ['Knowler ve ark., DPP 21 yıllık takip (Lancet Diabetes Endocrinol, 2025)', 'Crandall ve ark. (Diabetes Care, 2025)'],
  },
  {
    id: 'pre-03',
    kategori: 'Prediyabet ve Diyabet',
    soru: 'Ne kadar kilo vermem ve ne kadar hareket etmem gerekir?',
    cevap: `Çalışmalarda yaklaşık %7 kilo kaybı ve haftada 150 dakika orta tempolu aktivite hedeflenmiştir; bu hedefler diyabet riskini belirgin azaltır. Hedefler kişiye göre uyarlanır.`,
    anahtar: ['prediyabet kilo verme', 'prediyabet egzersiz', 'diyabet önleme yaşam tarzı'],
    kaynaklar: ['Knowler ve ark. (Lancet Diabetes Endocrinol, 2025)', 'Crandall ve ark. (Diabetes Care, 2025)'],
  },
  {
    id: 'pre-04',
    kategori: 'Prediyabet ve Diyabet',
    soru: 'Metformin herkese verilir mi?',
    cevap: `Hayır. Metformin özellikle daha genç, kilolu ve yüksek riskli kişilerde fayda sağlar; etkisi ilaç bırakılınca zayıflar. Kimin fayda göreceği değerlendirmeyle belirlenir.`,
    anahtar: ['metformin kime', 'prediyabet ilaç', 'metformin fayda'],
    kaynaklar: ['Knowler ve ark. (Lancet Diabetes Endocrinol, 2025)', 'Stafford ve ark., prediyabet alt grupları (JCEM, 2025)'],
  },
  {
    id: 'pre-05',
    kategori: 'Prediyabet ve Diyabet',
    soru: 'Prediyabetin etkisi kalıcı mı, koruma uzun sürer mi?',
    cevap: `Diyabet Önleme Programı'nın 21 yıllık takibinde hem yaşam tarzı hem metforminin diyabete ilerlemeyi yıllarca geciktirdiği görülmüştür; en güçlü ve kalıcı etki yaşam tarzı değişikliğindedir.`,
    anahtar: ['prediyabet uzun vadeli', 'diyabet önleme kalıcı', 'diyabet geciktirme'],
    kaynaklar: ['Knowler ve ark., DPP 21 yıllık takip (Lancet Diabetes Endocrinol, 2025)'],
  },
  {
    id: 'pre-06',
    kategori: 'Prediyabet ve Diyabet',
    soru: 'Açlık şekerim sınırda; ne sıklıkta kontrol etmeliyim?',
    cevap: `Prediyabette düzenli takip önemlidir; kontrol sıklığı risk düzeyine ve HbA1c seyrine göre belirlenir. Takip planı kişiye özel yapılır.`,
    anahtar: ['prediyabet takip', 'açlık şekeri kontrol', 'HbA1c takip'],
    kaynaklar: ['ADA bakım standartları (genel yaklaşım)'],
  },
  {
    id: 'tsh-01',
    kategori: 'Tiroid',
    soru: "TSH'm yüksek çıktı, hemen tiroid ilacı başlamalı mıyım?",
    cevap: `Mutlaka değil. fT4 normalken yalnızca TSH'nin hafif yüksek olması 'subklinik hipotiroidi'dir ve hafif vakalarda genellikle tedavi yerine izlem önerilir. Karar; TSH düzeyine, yaşa, gebelik durumuna ve kalp hastalığı gibi eşlik eden durumlara göre verilir.`,
    anahtar: ['TSH yüksek', 'subklinik hipotiroidi', 'tiroid ilacı başlamak'],
    kaynaklar: ['Jasim ve ark., yaşlılarda tiroid (Thyroid, 2025)', 'Kore Tiroid Derneği Kılavuzu (Ku ve ark., Endocrinol Metab, 2023)'],
  },
  {
    id: 'tsh-02',
    kategori: 'Tiroid',
    soru: 'Hangi TSH düzeyinde tedavi düşünülür?',
    cevap: `Genel yaklaşımda TSH 7'nin altındaysa çoğu kişide tedavi gerekmez; 7-10 arası kalp-damar riski olanlarda değerlendirilir; 10'un üzerindeyse tedavi genelde uygundur. Eşikler kişiye göre yorumlanır.`,
    anahtar: ['TSH tedavi eşiği', 'TSH kaç olmalı', 'subklinik hipotiroidi tedavi'],
    kaynaklar: ['Jasim ve ark. (Thyroid, 2025)', 'Kore Tiroid Derneği Kılavuzu (2023)'],
  },
  {
    id: 'tsh-03',
    kategori: 'Tiroid',
    soru: 'Halsizliğimin sebebi tiroid mi? İlaç düzeltir mi?',
    cevap: `Hafif subklinik hipotiroidide yorgunluk ve benzeri belirtilerin tiroid ilacıyla düzeldiği randomize çalışmalarda net olarak gösterilememiştir. Belirtiler özgül olmadığından başka nedenler de araştırılmalıdır.`,
    anahtar: ['tiroid halsizlik', 'tiroid yorgunluk', 'levotiroksin belirti'],
    kaynaklar: ['Jasim ve ark. (Thyroid, 2025)', 'Jansen ve ark. (Front Endocrinol, 2023)'],
  },
  {
    id: 'tsh-04',
    kategori: 'Tiroid',
    soru: 'Tek bir yüksek TSH tanı için yeterli mi?',
    cevap: `Hayır. Tek ölçümle karar verilmez; genelde 2-3 ay sonra tekrar ölçüm ve TPO antikoru ile birlikte değerlendirme önerilir.`,
    anahtar: ['TSH tekrar', 'TPO antikoru', 'tiroid tanı'],
    kaynaklar: ['Kore Tiroid Derneği Kılavuzu (2023)'],
  },
  {
    id: 'tsh-05',
    kategori: 'Tiroid',
    soru: 'Tiroid ilacı ömür boyu mu kullanılır?',
    cevap: `Her zaman değil. Özellikle hafif vakalarda bazı hastalarda ilaç kesildiğinde tiroid normal seyredebilir. Ayrıca aşırı doz da zararlı olabileceğinden doz düzenli takip edilir.`,
    anahtar: ['tiroid ilacı ömür boyu', 'levotiroksin bırakma', 'tiroid doz'],
    kaynaklar: ['Jansen ve ark. (Front Endocrinol, 2023)', 'Maraka ve ark., levotiroksin kesme (Endocrine, 2025)'],
  },
  {
    id: 'tsh-06',
    kategori: 'Tiroid',
    soru: 'Gebeyim veya gebelik planlıyorum; tiroid eşiği farklı mı?',
    cevap: `Evet. Gebelik ve gebelik planında eşikler daha sıkıdır ve tedavi kararı farklı verilir; bu dönemde tiroid takibi ayrı bir öneme sahiptir.`,
    anahtar: ['gebelikte tiroid', 'gebelik TSH', 'gebelik tiroid tedavi'],
    kaynaklar: ['Sankoda ve ark., gebelikte subklinik hipotiroidi meta-analizi (Thyroid, 2024)'],
  },
  {
    id: 'glp-01',
    kategori: 'Obezite ve Kilo İlaçları',
    soru: 'Zayıflama iğneleri (semaglutid/tirzepatid) ne kadar kilo verdirir?',
    cevap: `Çalışmalarda semaglutid ortalama yaklaşık %15, tirzepatid yaklaşık %20 kilo kaybı sağlamıştır. Doğrudan karşılaştırmada tirzepatid semaglutide göre daha fazla verdirmiştir (yaklaşık %20'ye %14). Sonuçlar kişiye göre değişir.`,
    anahtar: ['zayıflama iğnesi', 'semaglutid kilo', 'tirzepatid kilo', 'Ozempic Mounjaro'],
    kaynaklar: ['Aronne ve ark., SURMOUNT-5 başa baş çalışma (NEJM, 2025)', 'Garvey ve ark., STEP 5 (Nat Med, 2022)'],
  },
  {
    id: 'glp-02',
    kategori: 'Obezite ve Kilo İlaçları',
    soru: 'İlacı bırakınca kilolar geri gelir mi?',
    cevap: `Genellikle evet. Tedavi kesildiğinde verilen kilonun önemli bölümü geri alınabilir; bu nedenle kilo yönetimi uzun vadeli bir süreç olarak ele alınır.`,
    anahtar: ['kilo ilacı bırakınca', 'zayıflama iğnesi geri alım', 'kilo geri gelir mi'],
    kaynaklar: ['Aronne ve ark., SURMOUNT-4 (JAMA, 2023)'],
  },
  {
    id: 'glp-03',
    kategori: 'Obezite ve Kilo İlaçları',
    soru: 'Bu ilaçların yan etkileri neler?',
    cevap: `En sık yan etkiler bulantı, kusma, ishal ve kabızlık gibi sindirim sistemiyle ilgilidir; çoğu hafif-orta şiddette olup özellikle doz artışı döneminde görülür. Uygunluk ve doz artışı hekim takibiyle yapılır.`,
    anahtar: ['zayıflama iğnesi yan etki', 'semaglutid yan etki', 'tirzepatid yan etki'],
    kaynaklar: ['Moiz ve ark., GLP-1 RA derlemesi (Ann Intern Med, 2025)', 'SURMOUNT ve STEP çalışmaları'],
  },
  {
    id: 'glp-04',
    kategori: 'Obezite ve Kilo İlaçları',
    soru: 'Diyabetim yok, bu ilaçları kilo için kullanabilir miyim?',
    cevap: `Bu ilaçlar diyabeti olmayan obez veya fazla kilolu kişilerde de kilo yönetimi için onaylıdır. Uygunluk; kilo, eşlik eden hastalıklar ve genel sağlık durumuna göre değerlendirilir.`,
    anahtar: ['diyabetsiz zayıflama iğnesi', 'obezite ilacı', 'kilo ilacı uygunluk'],
    kaynaklar: ['Moiz ve ark. (Ann Intern Med, 2025)'],
  },
  {
    id: 'glp-05',
    kategori: 'Obezite ve Kilo İlaçları',
    soru: 'Sadece iğne yeterli mi, diyet ve egzersiz gerekmez mi?',
    cevap: `İlaçlar en iyi sonucu beslenme ve fiziksel aktivite değişiklikleriyle birlikte verir; çalışmalardaki kilo kayıpları yaşam tarzı desteğiyle birlikte elde edilmiştir.`,
    anahtar: ['zayıflama iğnesi diyet', 'kilo ilacı egzersiz', 'yaşam tarzı'],
    kaynaklar: ['SURMOUNT ve STEP çalışmaları'],
  },
  {
    id: 'glp-06',
    kategori: 'Obezite ve Kilo İlaçları',
    soru: 'Semaglutid mi tirzepatid mi daha etkili?',
    cevap: `Doğrudan karşılaştıran çalışmada tirzepatid daha fazla kilo kaybı sağlamıştır; ancak iki ilaç da etkilidir ve seçim yan etki toleransı, eşlik eden hastalıklar ve hedeflere göre yapılır.`,
    anahtar: ['semaglutid mi tirzepatid mi', 'Ozempic Mounjaro karşılaştırma', 'hangi zayıflama iğnesi'],
    kaynaklar: ['Aronne ve ark., SURMOUNT-5 (NEJM, 2025)'],
  },
  {
    id: 'ht-01',
    kategori: 'Hipertansiyon (Tansiyon)',
    soru: 'Tansiyonumu evde nasıl ölçmeliyim?',
    cevap: `Ev ölçümü tanı ve takipte çok değerlidir; dinlenmiş halde, oturarak, kol kalp hizasındayken ve günün belirli saatlerinde birkaç gün ölçmek önerilir. Ev veya ambulatuvar ölçüm, tek seferlik muayene ölçümünden daha güvenilirdir.`,
    anahtar: ['evde tansiyon ölçümü', 'doğru tansiyon ölçme', 'ambulatuvar tansiyon'],
    kaynaklar: ['2024 ESC Hipertansiyon Kılavuzu (Burlacu ve ark. özeti, Medicina, 2025)'],
  },
  {
    id: 'ht-02',
    kategori: 'Hipertansiyon (Tansiyon)',
    soru: 'Muayenede tansiyonum yüksek çıktı; hipertansiyon hastası mıyım?',
    cevap: `Tek yüksek ölçüm tanı koydurmaz. Bazı kişilerde tansiyon yalnızca klinikte yükselir ('beyaz önlük'); bu nedenle tanı için ev ve/veya ambulatuvar ölçümlerle doğrulama önerilir.`,
    anahtar: ['beyaz önlük hipertansiyonu', 'tansiyon tek ölçüm', 'hipertansiyon tanı'],
    kaynaklar: ['2024 ESC Hipertansiyon Kılavuzu', 'Clarke (Am Fam Physician, 2023)'],
  },
  {
    id: 'ht-03',
    kategori: 'Hipertansiyon (Tansiyon)',
    soru: 'İlaçsız, yaşam tarzıyla tansiyonumu düşürebilir miyim?',
    cevap: `Hafif yükseklikte yaşam tarzı önemli fark yaratır: tuzu azaltmak, potasyumdan zengin beslenmek (DASH), düzenli egzersiz, kilo vermek ve alkolü sınırlamak tansiyonu düşürür. İlaç gerekip gerekmediği toplam riske göre belirlenir.`,
    anahtar: ['ilaçsız tansiyon', 'DASH diyeti', 'tansiyon yaşam tarzı'],
    kaynaklar: ['2024 ESC Hipertansiyon Kılavuzu', 'Clarke (Am Fam Physician, 2023)'],
  },
  {
    id: 'ht-04',
    kategori: 'Hipertansiyon (Tansiyon)',
    soru: 'Hedef tansiyon kaç olmalı?',
    cevap: `2024 ESC kılavuzu, tolere edebilen çoğu hastada 130/80 mmHg altı hedefini önerir; ancak hedef yaşa ve eşlik eden duruma göre kişiselleştirilir.`,
    anahtar: ['hedef tansiyon', 'tansiyon kaç olmalı', 'ESC tansiyon hedef'],
    kaynaklar: ['2024 ESC Hipertansiyon Kılavuzu'],
  },
  {
    id: 'ht-05',
    kategori: 'Hipertansiyon (Tansiyon)',
    soru: 'Tuzu ne kadar azaltmalıyım, tuz yerine ne kullanabilirim?',
    cevap: `Tuz (sodyum) kısıtlaması tansiyonu düşürür; potasyumdan zengin tuz alternatifleri çalışmalarda anlamlı düşüş sağlamıştır. Böbrek hastalığı gibi durumlarda potasyumlu ürünler dikkat gerektirir.`,
    anahtar: ['tuz azaltma tansiyon', 'tuz alternatifi', 'potasyumlu tuz'],
    kaynaklar: ['2024 ESC Hipertansiyon Kılavuzu', 'sodyum azaltma ağ meta-analizleri (2026)'],
  },
  {
    id: 'ht-06',
    kategori: 'Hipertansiyon (Tansiyon)',
    soru: 'Tansiyon ilacı ömür boyu mu kullanılır?',
    cevap: `Çoğu hastada uzun süreli kullanım gerekir; ancak kilo verme ve yaşam tarzı düzelmesiyle bazı kişilerde doz azaltılabilir. Tek hap içinde birden çok etken madde (tek-hap kombinasyon) tedaviye uyumu artırır.`,
    anahtar: ['tansiyon ilacı ömür boyu', 'tek hap kombinasyon', 'tansiyon ilaç bırakma'],
    kaynaklar: ['2024 ESC Hipertansiyon Kılavuzu'],
  },
  {
    id: 'lip-01',
    kategori: 'Kolesterol ve Statinler',
    soru: 'Kolesterolüm yüksek; statin başlamalı mıyım?',
    cevap: `Karar yalnızca kolesterol rakamına değil, genel kalp-damar riskine bağlıdır. 40-75 yaş arası, risk faktörü olan ve 10 yıllık kalp-damar riski yeterince yüksek kişilerde statin önerilir.`,
    anahtar: ['statin başlamalı mıyım', 'kolesterol yüksek', 'statin kime'],
    kaynaklar: ['USPSTF Öneri Bildirimi (Mangione ve ark., JAMA, 2022)'],
  },
  {
    id: 'lip-02',
    kategori: 'Kolesterol ve Statinler',
    soru: 'Statinler kas ağrısı yapar mı?',
    cevap: `Büyük randomize çalışmaların birleşik analizinde, statin kullananların bildirdiği kas ağrılarının %90'dan fazlasının aslında ilaca bağlı olmadığı gösterilmiştir. Gerçek kas yan etkisi vardır ama nadirdir ve kalp-damar faydalarının çok altındadır.`,
    anahtar: ['statin kas ağrısı', 'kolesterol ilacı kas', 'statin yan etki'],
    kaynaklar: ['Reith ve ark., bireysel hasta verisi meta-analizi (Lancet, 2022)'],
  },
  {
    id: 'lip-03',
    kategori: 'Kolesterol ve Statinler',
    soru: 'Statin şeker hastalığı veya karaciğer hasarı yapar mı?',
    cevap: `Yüksek doz statinlerle küçük bir diyabet riski artışı ve hafif karaciğer enzim yükselmesi olabilir; ancak ciddi karaciğer hasarı nadirdir ve genel fayda riskten fazladır. Gerekli durumlarda takip yapılır.`,
    anahtar: ['statin şeker yapar mı', 'statin karaciğer', 'statin güvenli mi'],
    kaynaklar: ['USPSTF Kanıt Raporu (Chou ve ark., JAMA, 2022)', 'Ruscica ve ark. (Cardiovasc Res, 2022)'],
  },
  {
    id: 'lip-04',
    kategori: 'Kolesterol ve Statinler',
    soru: 'Statini ömür boyu mu kullanacağım?',
    cevap: `Statin genellikle uzun süreli kullanılır çünkü koruyucu etkisi kullanım sürdükçe devam eder. Kas yakınması olanlarda doz değişimi veya farklı bir statin denenebilir.`,
    anahtar: ['statin ömür boyu', 'statin bırakma', 'kolesterol ilacı süre'],
    kaynaklar: ['USPSTF (JAMA, 2022)', 'statin kas semptomları derlemeleri (2024)'],
  },
  {
    id: 'lip-05',
    kategori: 'Kolesterol ve Statinler',
    soru: 'Diyetle kolesterol düşer mi, ilaç şart mı?',
    cevap: `Beslenme ve yaşam tarzı kolesterolü ve riski düşürmede önemlidir; ancak yüksek riskli kişilerde tek başına yeterli olmayabilir. İlaç gerekip gerekmediği toplam riske göre belirlenir.`,
    anahtar: ['diyetle kolesterol', 'kolesterol düşürme', 'statin şart mı'],
    kaynaklar: ['USPSTF (JAMA, 2022)'],
  },
  {
    id: 'lip-06',
    kategori: 'Kolesterol ve Statinler',
    soru: 'Kimler statinden en çok fayda görür?',
    cevap: `40-75 yaş arası, şeker hastalığı, hipertansiyon, sigara veya yüksek kolesterol gibi risk faktörü olan ve hesaplanan 10 yıllık kalp-damar riski yüksek kişiler en çok fayda görür.`,
    anahtar: ['statin fayda', 'kalp damar risk', 'statin kimler'],
    kaynaklar: ['USPSTF Öneri Bildirimi (Mangione ve ark., JAMA, 2022)'],
  },
  {
    id: 'gen-01',
    kategori: 'Genel / Check-up ve Tahlil',
    soru: 'Her yıl her şeyi kapsayan bir check-up yaptırmalı mıyım?',
    cevap: `Daha çok test her zaman daha iyi değildir. Tarama testleri yaş, cinsiyet ve risk faktörlerine göre kişiye özel seçilmelidir; gereksiz testler yanlış pozitif sonuçlara ve gereksiz ileri tetkik zincirine yol açabilir.`,
    anahtar: ['check-up gerekli mi', 'yıllık tahlil', 'tarama testleri'],
    kaynaklar: ['Tarama kılavuzlarının genel ilkeleri', 'Endocrine Society Kılavuzu (rutin tarama önerilmemesi örneği, 2024)'],
  },
  {
    id: 'gen-02',
    kategori: 'Genel / Check-up ve Tahlil',
    soru: 'Vitamin D, B12 gibi vitaminlere herkesin baktırması gerekir mi?',
    cevap: `Hayır. Belirtisi ve risk faktörü olmayan sağlıklı kişilerde rutin vitamin D veya B12 taraması önerilmez; test, risk faktörü ve/veya belirti varlığında anlamlıdır.`,
    anahtar: ['vitamin taraması', 'herkes vitamin baktırmalı mı', 'rutin vitamin testi'],
    kaynaklar: ['Endocrine Society Kılavuzu (vitamin D, 2024)', 'Patel ve ark. (B12, Am Fam Physician, 2025)'],
  },
  {
    id: 'gen-03',
    kategori: 'Genel / Check-up ve Tahlil',
    soru: 'Halsizlik/yorgunluk şikayetimde hangi temel durumlara bakılır?',
    cevap: `Yorgunluğun sık nedenleri arasında demir eksikliği, B12 eksikliği ve tiroid işlev bozukluğu yer alır; bu nedenle değerlendirmede genellikle bu yönler gözden geçirilir. Hangi testlerin gerektiği öykü ve muayeneyle belirlenir.`,
    anahtar: ['yorgunluk nedenleri', 'halsizlik tahlil', 'sürekli yorgunluk'],
    kaynaklar: ['Auerbach ve ark. (demir, JAMA, 2025)', 'Patel ve ark. (B12, Am Fam Physician, 2025)', 'Jasim ve ark. (tiroid, Thyroid, 2025)'],
  },
];
