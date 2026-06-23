// ---------------------------------------------------------------------------
// İlgi & hizmet alanları. Çok dilli.
// title: tüm dillerde başlık. desc: ayrıntılı açıklama (TR/EN/AR/RU).
// Açıklamalar hasta dilinde, nötr; tıbbi iddia/garanti YOK.
// Çeviriler hasta bilgilendirmesi içindir; profesyonel redaksiyon önerilir.
// ---------------------------------------------------------------------------

import type { Lang } from './site';

export type FocusArea = {
  id: string;
  title: Record<Lang, string>;
  desc: { tr: string; en: string; ar: string; ru: string };
};

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: 'genel-dahiliye',
    title: {
      tr: 'Genel dahiliye & kapsamlı check-up / tahlil yorumlama',
      en: 'General internal medicine & check-up / lab interpretation',
      ar: 'الطب الباطني العام والفحص الشامل وتفسير التحاليل',
      ru: 'Общая терапия, комплексный чек-ап и расшифровка анализов',
      fa: 'طب داخلی عمومی، چکاپ جامع و تفسیر آزمایش‌ها',
      de: 'Allgemeine Innere Medizin, Check-up & Befundinterpretation',
      fr: 'Médecine interne générale, bilan de santé & interprétation des analyses',
      es: 'Medicina interna general, chequeo y lectura de análisis',
    },
    desc: {
      tr: 'Genel sağlık değerlendirmesi, kapsamlı check-up planlaması ve mevcut tahlil sonuçlarının bütüncül olarak yorumlanması. Birden fazla şikâyeti olan kişilerde tablonun tek bir çerçevede ele alınması.',
      en: 'General health assessment, comprehensive check-up planning, and holistic interpretation of existing lab results, bringing multiple complaints together within a single clinical picture.',
      ar: 'تقييم عام للصحة وتخطيط فحص شامل وتفسير متكامل لنتائج التحاليل، مع جمع الشكاوى المتعددة ضمن صورة سريرية واحدة.',
      ru: 'Общая оценка здоровья, планирование комплексного чек-апа и целостная интерпретация анализов, объединение нескольких жалоб в единую клиническую картину.',
    },
  },
  {
    id: 'metabolik-sendrom-obezite',
    title: {
      tr: 'Metabolik sendrom, obezite ve kilo yönetimi',
      en: 'Metabolic syndrome, obesity & weight management',
      ar: 'المتلازمة الأيضية والسمنة وإدارة الوزن',
      ru: 'Метаболический синдром, ожирение и контроль веса',
      fa: 'سندرم متابولیک، چاقی و مدیریت وزن',
      de: 'Metabolisches Syndrom, Adipositas & Gewichtsmanagement',
      fr: 'Syndrome métabolique, obésité & gestion du poids',
      es: 'Síndrome metabólico, obesidad y control de peso',
    },
    desc: {
      tr: 'Bel çevresi, kan şekeri, kan basıncı ve lipid değerlerinin birlikte değerlendirildiği metabolik risk yaklaşımı. Kilo yönetiminin tıbbi takip çerçevesinde ele alınması.',
      en: 'A metabolic-risk approach evaluating waist circumference, blood glucose, blood pressure and lipids together, with weight management within a medical follow-up framework.',
      ar: 'نهج لتقييم المخاطر الأيضية يراعي محيط الخصر وسكر الدم وضغط الدم والدهون معًا، مع إدارة الوزن ضمن إطار المتابعة الطبية.',
      ru: 'Оценка метаболического риска с учётом окружности талии, глюкозы, давления и липидов; контроль веса в рамках медицинского наблюдения.',
    },
  },
  {
    id: 'diyabet-prediyabet',
    title: {
      tr: 'Diyabet ve prediyabet takibi',
      en: 'Diabetes & prediabetes follow-up',
      ar: 'متابعة السكري وما قبل السكري',
      ru: 'Наблюдение при диабете и преддиабете',
      fa: 'دیابت و پیش‌دیابت',
      de: 'Diabetes & Prädiabetes',
      fr: 'Diabète & prédiabète',
      es: 'Diabetes y prediabetes',
    },
    desc: {
      tr: 'Kan şekeri yüksekliği ve prediyabet bulgularının değerlendirilmesi, düzenli takip ve laboratuvar izlemi.',
      en: 'Evaluation of elevated blood glucose and prediabetes findings, with regular follow-up and laboratory monitoring.',
      ar: 'تقييم ارتفاع سكر الدم وعلامات ما قبل السكري مع متابعة منتظمة ومراقبة مخبرية.',
      ru: 'Оценка повышенного сахара и признаков преддиабета с регулярным наблюдением и лабораторным контролем.',
    },
  },
  {
    id: 'tiroid',
    title: {
      tr: 'Tiroid hastalıkları',
      en: 'Thyroid disorders',
      ar: 'أمراض الغدة الدرقية',
      ru: 'Заболевания щитовидной железы',
      fa: 'بیماری‌های تیروئید',
      de: 'Schilddrüsenerkrankungen',
      fr: 'Maladies thyroïdiennes',
      es: 'Enfermedades de la tiroides',
    },
    desc: {
      tr: 'Tiroid fonksiyon testlerinin yorumlanması ve tiroidle ilişkili şikâyetlerin genel iç hastalıkları çerçevesinde değerlendirilmesi.',
      en: 'Interpretation of thyroid function tests and evaluation of thyroid-related complaints within the broader internal-medicine context.',
      ar: 'تفسير اختبارات وظائف الغدة الدرقية وتقييم الشكاوى المرتبطة بها ضمن السياق الباطني العام.',
      ru: 'Интерпретация тестов щитовидной железы и оценка связанных жалоб в общем терапевтическом контексте.',
    },
  },
  {
    id: 'vitamin-eksiklik-yorgunluk',
    title: {
      tr: 'Vitamin D, B12, demir eksikliği ve halsizlik/yorgunluk ayırıcı tanısı',
      en: 'Vitamin D, B12, iron deficiency & fatigue differential',
      ar: 'نقص فيتامين د وب12 والحديد والتشخيص التفريقي للتعب',
      ru: 'Дефицит витамина D, B12, железа и диагностика причин усталости',
      fa: 'کمبود ویتامین D، B12، آهن و بررسی خستگی',
      de: 'Vitamin-D-, B12-, Eisenmangel & Müdigkeitsabklärung',
      fr: 'Carences en vitamine D, B12, fer & bilan de fatigue',
      es: 'Déficit de vitamina D, B12, hierro y estudio de la fatiga',
    },
    desc: {
      tr: 'Yaygın halsizlik ve yorgunluk şikâyetlerinde vitamin/mineral düzeylerinin değerlendirilmesi ve olası nedenlerin ayırıcı tanıyla taranması.',
      en: 'Assessment of vitamin and mineral levels in common fatigue complaints, screening possible causes with a differential-diagnosis approach.',
      ar: 'تقييم مستويات الفيتامينات والمعادن في حالات التعب الشائعة، وفحص الأسباب المحتملة بنهج تشخيصي تفريقي.',
      ru: 'Оценка уровня витаминов и минералов при жалобах на усталость и поиск причин с дифференциальной диагностикой.',
    },
  },
  {
    id: 'hipertansiyon-kardiyometabolik',
    title: {
      tr: 'Hipertansiyon ve kardiyometabolik risk',
      en: 'Hypertension & cardiometabolic risk',
      ar: 'ارتفاع ضغط الدم والمخاطر القلبية الأيضية',
      ru: 'Гипертония и кардиометаболический риск',
      fa: 'فشار خون بالا و خطر قلبی‑متابولیک',
      de: 'Bluthochdruck & kardiometabolisches Risiko',
      fr: 'Hypertension & risque cardiométabolique',
      es: 'Hipertensión y riesgo cardiometabólico',
    },
    desc: {
      tr: 'Kan basıncı takibi ve kardiyometabolik risk faktörlerinin diğer metabolik parametrelerle birlikte bütüncül değerlendirilmesi.',
      en: 'Blood pressure monitoring and holistic evaluation of cardiometabolic risk factors alongside other metabolic parameters.',
      ar: 'متابعة ضغط الدم والتقييم الشامل لعوامل الخطر القلبية الأيضية مع بقية المؤشرات الأيضية.',
      ru: 'Контроль артериального давления и комплексная оценка кардиометаболических факторов риска.',
    },
  },
  {
    id: 'lipid',
    title: {
      tr: 'Lipid bozuklukları',
      en: 'Lipid disorders',
      ar: 'اضطرابات الدهون (الكوليسترول)',
      ru: 'Нарушения липидного обмена',
      fa: 'اختلالات چربی خون',
      de: 'Fettstoffwechselstörungen',
      fr: 'Troubles lipidiques',
      es: 'Trastornos lipídicos',
    },
    desc: {
      tr: 'Kolesterol ve trigliserit değerlerinin değerlendirilmesi ve genel kardiyometabolik risk çerçevesinde düzenli izlem.',
      en: 'Evaluation and regular monitoring of cholesterol and triglycerides within the broader cardiometabolic risk framework.',
      ar: 'تقييم ومتابعة منتظمة لمستويات الكوليسترول والدهون الثلاثية ضمن إطار المخاطر القلبية الأيضية.',
      ru: 'Оценка и регулярный контроль холестерина и триглицеридов в рамках кардиометаболического риска.',
    },
  },
];
