// ---------------------------------------------------------------------------
// Kılavuz özet kartları — SAĞLIK PROFESYONELLERİ için klinisyen destesi.
// Eğitim amaçlıdır; klinik kararlar için tam kılavuz metni esas alınmalıdır.
// ---------------------------------------------------------------------------

export type GuidelineCard = {
  id: string;
  category: string;
  front: string;
  back: string;
  tags: string[];
};

export type GuidelineDeck = {
  slug: string;
  title: string;
  source: { citation: string; doi: string; url: string };
  disclaimer: string;
  categories: string[];
  cards: GuidelineCard[];
};

export const ATA2026: GuidelineDeck = {
  slug: 'ata-2026-tiroid-gebelik',
  title:
    'ATA 2026 — Prekonsepsiyon, Gebelik ve Postpartumda Tiroid Hastalıkları',
  source: {
    citation:
      'Korevaar TIM, Leung AM, Alexander EK, et al. American Thyroid Association 2026 Guidelines for Thyroid Disease in Preconception, Pregnancy, and Postpartum. Thyroid. 2026;36(5):481-544.',
    doi: '10.1177/10507256261445624',
    url: 'https://journals.sagepub.com/doi/10.1177/10507256261445624',
  },
  disclaimer:
    'Eğitim amaçlıdır; her kart kılavuz metnine dayanır ancak klinik kararlar için tam kılavuz metni esas alınmalıdır.',
  categories: [
    'Tarama ve Risk Faktörleri',
    'Tiroid Fonksiyon Testleri',
    'İyot',
    'Tiroid Otoimmünitesi',
    'Hipotiroidi',
    'İzole Hipotiroksinemi',
    'Hipertiroidi / Graves',
    'Tiroid Nodülü ve Kanseri',
    'Postpartum Tiroid Disfonksiyonu',
  ],
  cards: [
    {
      id: 'ata2026-001',
      category: 'Tarama ve Risk Faktörleri',
      front: 'Gebelik planlayan, gebe veya postpartum kadınlarda universal tiroid taraması öneriliyor mu?',
      back: 'Hayır. Rutin tiroid fonksiyon testi (universal tarama) için yeterli kanıt yoktur; risk faktörleri genel klinik muhakemeyi desteklemek üzere kullanılır (hedefe yönelik vaka bulma).',
      tags: ['tarama', 'vaka-bulma'],
    },
    {
      id: 'ata2026-002',
      category: 'Tarama ve Risk Faktörleri',
      front: '2026 güncellemesinde tiroid testi endikasyonu için risk faktörü olmaktan çıkarılanlar nelerdir?',
      back: 'Parite, maternal yaş ve BMI; sonuçları ayırt etme potansiyeli sınırlı bulunduğu için çıkarıldı.',
      tags: ['risk-faktörü', 'BMI', 'yaş', 'parite'],
    },
    {
      id: 'ata2026-003',
      category: 'Tiroid Fonksiyon Testleri',
      front: 'Laboratuvar ve trimester-spesifik TSH referans aralığı yoksa 1. trimesterde hangi TSH aralığı kullanılabilir?',
      back: 'Tipik hasta için 0.1–4.0 mU/L (üst sınır, gebe olmayan üst sınırdan yaklaşık 0.5 mU/L düşük). Sonraki trimesterlerde gebe olmayan aralığa kademeli dönüş yapılır. Bu 0.1–4.0 spesifik olarak 1. trimester karşılığıdır.',
      tags: ['TSH', 'referans-aralığı', 'trimester'],
    },
    {
      id: 'ata2026-004',
      category: 'Tiroid Fonksiyon Testleri',
      front: "Gebe olmayan TSH üst sınırı 4.5 mU/L'nin belirgin üzerindeyse alternatif yaklaşım nedir?",
      back: 'Sabit 4.0 yerine, mevcut gebe olmayan üst sınırdan 0.5 mU/L düşülmesi makuldür.',
      tags: ['TSH', 'referans-aralığı'],
    },
    {
      id: 'ata2026-005',
      category: 'Tiroid Fonksiyon Testleri',
      front: 'Sabit 0.1–4.0 mU/L yaklaşımının kısıtlılığı nedir?',
      back: "Hastaların önemli bir kısmını yanlış sınıflar; örneğin 1. trimester overt hipotiroidide sabit 4.0 üst sınır olguların yalnızca ~%46'sını yakalar. Bu nedenle trimester/lab-spesifik aralıkların yerine geçen bir fallback'tir, tercih edilen yöntem değildir.",
      tags: ['TSH', 'yanlış-sınıflama'],
    },
    {
      id: 'ata2026-006',
      category: 'İyot',
      front: 'Gebe ve laktasyondaki kadınlarda önerilen toplam günlük iyot alımı nedir?',
      back: '250 mcg/gün (suplement ve/veya diyet kaynaklı).',
      tags: ['iyot', 'doz'],
    },
    {
      id: 'ata2026-007',
      category: 'İyot',
      front: 'Önerilen iyot suplement dozu ve başlama zamanı nedir?',
      back: '150 mcg/gün; tüm kadınlara prekonsepsiyon, gebelik ve laktasyonda önerilir (geleneksel diyetle yüksek iyot alımı belirgin değilse) ve ideal olarak konsepsiyondan en az 3 ay önce başlanır.',
      tags: ['iyot', 'suplement', 'prekonsepsiyon'],
    },
    {
      id: 'ata2026-008',
      category: 'İyot',
      front: 'Gebelikte kaçınılması gereken iyot üst sınırı nedir?',
      back: 'Sürekli aşırı diyet + suplement alımı, >500 mcg/gün düzeyinde fetal/neonatal endişeler nedeniyle kaçınılmalıdır.',
      tags: ['iyot', 'üst-sınır'],
    },
    {
      id: 'ata2026-009',
      category: 'İyot',
      front: 'Bireyde uzun dönem iyot durumunu ölçen geçerli bir biyobelirteç var mı?',
      back: 'Hayır. Geçerli bir bireysel biyobelirteç yoktur; uygun olduğunda iyot eksikliği risk faktörleri değerlendirilmelidir.',
      tags: ['iyot', 'biyobelirteç'],
    },
    {
      id: 'ata2026-010',
      category: 'Tiroid Otoimmünitesi',
      front: 'Ötiroid ama TPOAb pozitif kadında levotiroksin endikasyonu var mıdır?',
      back: 'Hayır. İnfertilite, fertilite tedavisi planı veya tekrarlayan düşük öyküsü olanlarda dahi levotiroksin önerilmez.',
      tags: ['TPOAb', 'levotiroksin', 'ötiroid'],
    },
    {
      id: 'ata2026-011',
      category: 'Tiroid Otoimmünitesi',
      front: 'Ötiroid TPOAb pozitif kadında prekonsepsiyon takip nasıl olmalıdır?',
      back: 'Prekonsepsiyon/gebelikte subklinik veya overt hipotiroidi gelişme riski %7–9 olduğundan, tiroid fonksiyonu her 3–6 ayda bir kontrol edilebilir.',
      tags: ['TPOAb', 'takip'],
    },
    {
      id: 'ata2026-012',
      category: 'Tiroid Otoimmünitesi',
      front: 'Subklinik hipotiroidide TPOAb durumu levotiroksin tedavi kararını belirler mi?',
      back: 'Artık belirlemez. Levotiroksin endikasyonu/değerlendirmesi, subklinik hipotiroidi tanısının zamanlamasına göre yapılır.',
      tags: ['TPOAb', 'subklinik-hipotiroidi'],
    },
    {
      id: 'ata2026-013',
      category: 'Tiroid Otoimmünitesi',
      front: 'Antikor önerileri TgAb (tiroglobulin antikoru) pozitif kadınlara da aynen uygulanır mı?',
      back: "Öncelikle TPOAb temel alınır; TPOAb'nin hipotiroidi için tanısal doğruluğu TgAb'den daha iyidir ve advers fertilite/gebelik sonuçlarıyla ilişkilidir. TgAb değerlendirmesi hekim takdirindedir; bu grup için kanıt sınırlıdır.",
      tags: ['TgAb', 'TPOAb'],
    },
    {
      id: 'ata2026-014',
      category: 'Hipotiroidi',
      front: 'Mild (hafif) TSH yüksekliğinde tedaviye başlamadan önce önerilen ilk adım nedir?',
      back: 'Tekrar test ile doğrulama. Özellikle TSH <6 mU/L ise yarıya yakını kendiliğinden normalleşir; kalıcılık 3. trimesterde daha da azalır.',
      tags: ['subklinik-hipotiroidi', 'tekrar-test'],
    },
    {
      id: 'ata2026-015',
      category: 'Hipotiroidi',
      front: "Gebelikte 'hafif overt hipotiroidi' nasıl tanımlanır ve yaklaşım nedir?",
      back: 'TSH gebelik üst sınırının üzerinde ancak <6 mU/L. Tedavi edilmeyen olguların yarıdan azı tekrar testte kalıcı olduğundan, paylaşılan karar yaklaşımıyla tedavi öncesi yeniden değerlendirme düşünülebilir.',
      tags: ['overt-hipotiroidi', 'hafif'],
    },
    {
      id: 'ata2026-016',
      category: 'Hipotiroidi',
      front: 'Gebelikte hangi TSH düzeyi overt hipotiroidide levotiroksin endikasyonudur?',
      back: 'TSH ≥6 mU/L (gebelik sırasında overt hipotiroidi için LT4 endikasyonu).',
      tags: ['overt-hipotiroidi', 'TSH', 'eşik'],
    },
    {
      id: 'ata2026-017',
      category: 'Hipotiroidi',
      front: 'Gebelikte yeni tanı overt hipotiroidide levotiroksin doz tahmini nasıl yapılır?',
      back: 'Tam replasman dozu (1.5–1.7 mcg/kg/gün) + gebelik için gerekli ~%20–30 ek doz artışı.',
      tags: ['levotiroksin', 'doz', 'overt-hipotiroidi'],
    },
    {
      id: 'ata2026-018',
      category: 'Hipotiroidi',
      front: 'Subklinik/overt hipotiroidi tedavisinde gebelikte TSH hedefi nedir?',
      back: 'Referans aralığında, ancak yetersiz tedaviye karşı güvenlik marjı oluşturmak için <2.5 mU/L. (Bu, blanket bir hedef değil; güvenlik marjı çerçevesinde tanımlanır.)',
      tags: ['TSH-hedefi', 'levotiroksin'],
    },
    {
      id: 'ata2026-019',
      category: 'Hipotiroidi',
      front: 'Levotiroksin alan ve konsepsiyon isteyen kadında prekonsepsiyon TSH hedefi nedir?',
      back: 'TSH 0.5–2.5 mU/L (referans aralığında ama güvenlik marjı için <2.5).',
      tags: ['TSH-hedefi', 'prekonsepsiyon'],
    },
    {
      id: 'ata2026-020',
      category: 'İzole Hipotiroksinemi',
      front: 'İzole hipotiroksinemi (düşük fT4, normal TSH) levotiroksin ile tedavi edilmeli midir?',
      back: "Hayır. 2. trimesterde başlanan LT4'ün obstetrik veya nörobilişsel sonuçları iyileştirmediği iki RCT'de gösterildi (TPOAb durumu ve iyot alımından bağımsız). Erken gebelikte LT4 için RCT verisi yoktur.",
      tags: ['izole-hipotiroksinemi', 'levotiroksin'],
    },
    {
      id: 'ata2026-021',
      category: 'İzole Hipotiroksinemi',
      front: 'Erken gebelikte saptanan izole hipotiroksinemide ne yapılmalıdır?',
      back: '2–6 hafta sonra tekrar test ile hipotiroidiye ilerleme dışlanabilir (erken izole hipotiroksinemi yalnızca ~%18 kalıcıdır). Demir durumu ve iyot eksikliği risk faktörleri değerlendirilmelidir.',
      tags: ['izole-hipotiroksinemi', 'demir', 'iyot'],
    },
    {
      id: 'ata2026-022',
      category: 'Hipertiroidi / Graves',
      front: "Graves'te gebelik planlanırken/saptandığında MMI yerine hangi ilaç tercih edilir ve ne zamana kadar?",
      back: 'Propylthiouracil (PTU); ilk trimesterde, cilt kapanmasının olduğu ~16. gebelik haftasına kadar tercih edilir.',
      tags: ['Graves', 'PTU', 'MMI'],
    },
    {
      id: 'ata2026-023',
      category: 'Hipertiroidi / Graves',
      front: "MMI'den PTU'ya geçişte yaklaşık doz oranı nedir?",
      back: 'Yaklaşık 1:20 (örn. MMI 5 mg/gün ≈ PTU 50 mg ×2/gün).',
      tags: ['Graves', 'doz-oranı', 'MMI', 'PTU'],
    },
    {
      id: 'ata2026-024',
      category: 'Hipertiroidi / Graves',
      front: '16. gebelik haftasından (cilt kapanması) sonra PTU mu MMI mi tercih edilmeli?',
      back: 'Net öneri yoktur. Her iki ilacın da advers etki potansiyeli ve geçiş sırasında suboptimal kontrol riski nedeniyle, 16. haftadan sonra tercih edilen ATD belirtilmemiştir.',
      tags: ['Graves', 'ATD-seçimi'],
    },
    {
      id: 'ata2026-025',
      category: 'Hipertiroidi / Graves',
      front: "Gebelik doğrulandığında ATD'nin kesilmesinde en yüksek remisyon şansını hangi koşullar sağlar?",
      back: "Düşük doz ATD kullanımı + gebelik öncesi >6 ay stabil tiroid fonksiyonu (tercihen TSH >0.35) + negatif TRAb/TSI. (Spesifik mg eşikleri metinde 'düşük doz' olarak geçer.)",
      tags: ['Graves', 'ATD-kesme', 'TRAb'],
    },
    {
      id: 'ata2026-026',
      category: 'Hipertiroidi / Graves',
      front: 'ATD kesildiğinde Graves nüks riski ve zamanlaması nedir?',
      back: "Nüks riski %30–70 (tedavi süresi ve başlangıç şiddetine bağlı). Ortalama nüks süresi ~3 ay olduğundan, ATD'yi yeniden başlatmak gerektiğinde teratojen pencere genellikle geçmiştir.",
      tags: ['Graves', 'nüks'],
    },
    {
      id: 'ata2026-027',
      category: 'Hipertiroidi / Graves',
      front: 'Fetal/neonatal hipertiroidi riski hangi TRAb/TSI düzeyinde ihmal edilebilir kabul edilir?',
      back: 'Serum TRAb ve/veya TSI üst sınırın <3 katı olduğunda fetal ve neonatal hipertiroidi riski ihmal edilebilir.',
      tags: ['TRAb', 'TSI', 'fetal-hipertiroidi'],
    },
    {
      id: 'ata2026-028',
      category: 'Hipertiroidi / Graves',
      front: 'Gebede acil tiroid cerrahisi ne zaman yapılmalıdır?',
      back: 'Gerekli olduğu zaman yapılır; mümkünse 2. trimesterde gerçekleştirilir.',
      tags: ['cerrahi', 'trimester'],
    },
    {
      id: 'ata2026-029',
      category: 'Hipertiroidi / Graves',
      front: 'Tiroidektomi sonrası emzirmeye ne zaman başlanabilir?',
      back: 'Anne bebeği tutacak kadar uyanır uyanmaz emzirmeye başlayabilir.',
      tags: ['cerrahi', 'emzirme'],
    },
    {
      id: 'ata2026-030',
      category: 'Tiroid Nodülü ve Kanseri',
      front: 'Gebelikte diferansiye tiroid kanseri (DTK) nasıl yönetilir?',
      back: 'Çoğu tiroid kanseri düşük riskli olduğundan, gebelikteki yönetimde gebelik dışındaki ile aynı değerlendirmeler uygulanır.',
      tags: ['DTK', 'tiroid-kanseri'],
    },
    {
      id: 'ata2026-031',
      category: 'Postpartum Tiroid Disfonksiyonu',
      front: 'Postpartum tiroiditin (PPT) tirotoksik fazında antitiroid ilaç kullanılır mı?',
      back: 'Hayır. Altta yatan mekanizma artmış hormon üretimi değil, yıkıma bağlı önceden depolanmış hormonun salınımıdır; bu nedenle ATD endike değildir.',
      tags: ['PPT', 'tirotoksik-faz', 'ATD'],
    },
    {
      id: 'ata2026-032',
      category: 'Postpartum Tiroid Disfonksiyonu',
      front: 'PPT tirotoksik fazda semptomatik tedavi nasıl yapılır?',
      back: 'Hipertiroid semptomları için en düşük etkili dozda beta-bloker (genellikle birkaç hafta gerekir). Laktasyonda propranolol ve metoprolol güvenli kabul edilir.',
      tags: ['PPT', 'beta-bloker', 'laktasyon'],
    },
    {
      id: 'ata2026-033',
      category: 'Postpartum Tiroid Disfonksiyonu',
      front: "PPT'nin hipotiroid fazında levotiroksin ne zaman verilir?",
      back: 'Kadında hipotiroid semptomları varsa, emziriyorsa veya aktif olarak yeni gebelik deniyorsa LT4 verilir.',
      tags: ['PPT', 'hipotiroid-faz', 'levotiroksin'],
    },
    {
      id: 'ata2026-034',
      category: 'Postpartum Tiroid Disfonksiyonu',
      front: "PPT'nin tirotoksik fazını Graves'ten ayırmada ipuçları nelerdir?",
      back: 'Graves lehine: TRAb/TSI pozitifliği ve total T3:T4 oranı >20. PPT lehine: doğumdan sonraki ilk 6 ayda başlangıç, daha kısa süre ve daha hafif tirotoksikoz bulguları.',
      tags: ['PPT', 'Graves', 'ayırıcı-tanı'],
    },
  ],
};
