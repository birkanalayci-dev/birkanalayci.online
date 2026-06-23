// ---------------------------------------------------------------------------
// İlgi & hizmet alanları.
// Brief gereği: HER başlık "[ONAY BEKLİYOR]" — başlıklar Birkan tarafından
// kesinleştirilecek. Açıklamalar hasta dilinde, nötr; tıbbi iddia/garanti YOK.
// ---------------------------------------------------------------------------

export type FocusArea = {
  id: string;
  titleTr: string;
  titleEn: string;
  descTr: string;
  descEn: string;
};

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: 'genel-dahiliye',
    titleTr: 'Genel dahiliye & kapsamlı check-up / tahlil yorumlama',
    titleEn: 'General internal medicine & check-up / lab interpretation',
    descTr:
      'Genel sağlık değerlendirmesi, kapsamlı check-up planlaması ve mevcut tahlil sonuçlarının bütüncül olarak yorumlanması. Birden fazla şikâyeti veya bulgusu olan kişilerde tablonun tek bir çerçevede ele alınması.',
    descEn:
      'General health assessment, comprehensive check-up planning, and holistic interpretation of existing lab results. Bringing together multiple complaints or findings within a single clinical picture.',
  },
  {
    id: 'metabolik-sendrom-obezite',
    titleTr: 'Metabolik sendrom, obezite ve kilo yönetimi',
    titleEn: 'Metabolic syndrome, obesity & weight management',
    descTr:
      'Bel çevresi, kan şekeri, kan basıncı ve lipid değerlerinin birlikte değerlendirildiği metabolik risk yaklaşımı. Kilo yönetimi sürecinin tıbbi takip çerçevesinde ele alınması.',
    descEn:
      'A metabolic-risk approach that evaluates waist circumference, blood glucose, blood pressure, and lipid values together. Weight management addressed within a medical follow-up framework.',
  },
  {
    id: 'diyabet-prediyabet',
    titleTr: 'Diyabet ve prediyabet takibi',
    titleEn: 'Diabetes & prediabetes follow-up',
    descTr:
      'Kan şekeri yüksekliği ve prediyabet bulgularının değerlendirilmesi, düzenli takip ve laboratuvar izlemi. Bireyin genel metabolik durumuyla birlikte ele alınması.',
    descEn:
      'Evaluation of elevated blood glucose and prediabetes findings, with regular follow-up and laboratory monitoring, considered alongside the individual’s overall metabolic status.',
  },
  {
    id: 'tiroid',
    titleTr: 'Tiroid hastalıkları',
    titleEn: 'Thyroid disorders',
    descTr:
      'Tiroid fonksiyon testlerinin yorumlanması ve tiroidle ilişkili şikâyetlerin değerlendirilmesi. Tablonun kişinin genel iç hastalıkları durumu içinde ele alınması.',
    descEn:
      'Interpretation of thyroid function tests and evaluation of thyroid-related complaints, considered within the person’s broader internal-medicine context.',
  },
  {
    id: 'vitamin-eksiklik-yorgunluk',
    titleTr: 'Vitamin D, B12, demir eksikliği ve halsizlik/yorgunluk ayırıcı tanısı',
    titleEn: 'Vitamin D, B12, iron deficiency & fatigue differential',
    descTr:
      'Yaygın halsizlik ve yorgunluk şikâyetlerinde vitamin ve mineral düzeylerinin değerlendirilmesi. Altta yatabilecek nedenlerin ayırıcı tanı yaklaşımıyla taranması.',
    descEn:
      'Assessment of vitamin and mineral levels in common fatigue and tiredness complaints, screening possible underlying causes with a differential-diagnosis approach.',
  },
  {
    id: 'hipertansiyon-kardiyometabolik',
    titleTr: 'Hipertansiyon ve kardiyometabolik risk',
    titleEn: 'Hypertension & cardiometabolic risk',
    descTr:
      'Kan basıncı takibi ve kardiyometabolik risk faktörlerinin bütüncül değerlendirilmesi. Diğer metabolik parametrelerle birlikte ele alınan bir izlem.',
    descEn:
      'Blood pressure monitoring and holistic evaluation of cardiometabolic risk factors, followed together with other metabolic parameters.',
  },
  {
    id: 'lipid',
    titleTr: 'Lipid bozuklukları',
    titleEn: 'Lipid disorders',
    descTr:
      'Kolesterol ve trigliserit değerlerinin değerlendirilmesi ve düzenli izlem. Genel kardiyometabolik risk çerçevesinde ele alınması.',
    descEn:
      'Evaluation and regular monitoring of cholesterol and triglyceride values within the broader cardiometabolic risk framework.',
  },
];
