// ---------------------------------------------------------------------------
// Genişletilmiş diller (AR, RU, FA, DE, FR, ES) için tek sayfa iniş içeriği.
// Hasta odaklı; profesyonel redaksiyon önerilir. Özel adlar çevrilmez.
// ---------------------------------------------------------------------------

export type LandingContent = {
  heroLead: string;
  focusHeading: string;
  contactHeading: string;
  callLabel: string;
  addressLabel: string;
  emailLabel: string;
  hospitalLabel: string;
  note: string;
  moreCta: string;
  metaTitle: string;
  metaDesc: string;
};

export const LANDING: Record<'ar' | 'ru' | 'fa' | 'de' | 'fr' | 'es', LandingContent> = {
  ar: {
    heroLead:
      'أخصائي الطب الباطني في إسطنبول — رعاية قائمة على الأدلة مع تركيز على الصحة الأيضية والسكري والغدة الدرقية والفحوصات الشاملة.',
    focusHeading: 'مجالات الاهتمام',
    contactHeading: 'الحجز والتواصل',
    callLabel: 'مركز الاتصال',
    addressLabel: 'العنوان',
    emailLabel: 'البريد الإلكتروني',
    hospitalLabel: 'المستشفى',
    note: 'هذه صفحة موجزة. لمزيد من المعلومات، يُرجى زيارة الموقع بالإنجليزية.',
    moreCta: 'الموقع بالإنجليزية',
    metaTitle: 'د. بيركان آلايجي — الطب الباطني، إسطنبول',
    metaDesc:
      'أخصائي الطب الباطني في مستشفى ليف فاديستانبول، إسطنبول. الصحة الأيضية والسكري والغدة الدرقية والفحص الشامل.',
  },
  ru: {
    heroLead:
      'Врач-терапевт в Стамбуле — доказательная помощь с акцентом на метаболическое здоровье, диабет, щитовидную железу и комплексные чек-апы.',
    focusHeading: 'Направления',
    contactHeading: 'Запись и контакты',
    callLabel: 'Колл-центр',
    addressLabel: 'Адрес',
    emailLabel: 'Эл. почта',
    hospitalLabel: 'Больница',
    note: 'Это краткая страница. Полная информация доступна на сайте на английском языке.',
    moreCta: 'Сайт на английском',
    metaTitle: 'Д-р Биркан Алайджы — терапевт, Стамбул',
    metaDesc:
      'Врач-терапевт, Liv Hospital Vadistanbul, Стамбул. Метаболическое здоровье, диабет, щитовидная железа, чек-ап.',
  },
  fa: {
    heroLead:
      'متخصص طب داخلی در استانبول — مراقبت مبتنی بر شواهد با تمرکز بر سلامت متابولیک، دیابت، تیروئید و چکاپ جامع.',
    focusHeading: 'زمینه‌های تخصص',
    contactHeading: 'نوبت‌دهی و تماس',
    callLabel: 'مرکز تماس',
    addressLabel: 'آدرس',
    emailLabel: 'ایمیل',
    hospitalLabel: 'بیمارستان',
    note: 'این یک صفحهٔ خلاصه است. برای اطلاعات کامل، از وب‌سایت انگلیسی دیدن کنید.',
    moreCta: 'وب‌سایت انگلیسی',
    metaTitle: 'دکتر بیرکان آلایجی — طب داخلی، استانبول',
    metaDesc:
      'متخصص طب داخلی، Liv Hospital Vadistanbul، استانبول. سلامت متابولیک، دیابت، تیروئید و چکاپ.',
  },
  de: {
    heroLead:
      'Facharzt für Innere Medizin in Istanbul — evidenzbasierte Betreuung mit Schwerpunkt auf metabolischer Gesundheit, Diabetes, Schilddrüse und umfassenden Check-ups.',
    focusHeading: 'Schwerpunkte',
    contactHeading: 'Termine & Kontakt',
    callLabel: 'Callcenter',
    addressLabel: 'Adresse',
    emailLabel: 'E-Mail',
    hospitalLabel: 'Krankenhaus',
    note: 'Dies ist eine Kurzseite. Ausführliche Informationen finden Sie auf der englischen Website.',
    moreCta: 'Englische Website',
    metaTitle: 'Dr. Birkan Alaycı — Innere Medizin, Istanbul',
    metaDesc:
      'Facharzt für Innere Medizin, Liv Hospital Vadistanbul, Istanbul. Metabolische Gesundheit, Diabetes, Schilddrüse, Check-up.',
  },
  fr: {
    heroLead:
      'Spécialiste en médecine interne à Istanbul — une prise en charge fondée sur les preuves, axée sur la santé métabolique, le diabète, la thyroïde et les bilans de santé.',
    focusHeading: 'Domaines d’intérêt',
    contactHeading: 'Rendez-vous & contact',
    callLabel: 'Centre d’appel',
    addressLabel: 'Adresse',
    emailLabel: 'E-mail',
    hospitalLabel: 'Hôpital',
    note: 'Ceci est une page résumée. Pour plus d’informations, consultez le site en anglais.',
    moreCta: 'Site en anglais',
    metaTitle: 'Dr Birkan Alaycı — Médecine interne, Istanbul',
    metaDesc:
      'Spécialiste en médecine interne, Liv Hospital Vadistanbul, Istanbul. Santé métabolique, diabète, thyroïde, bilan.',
  },
  es: {
    heroLead:
      'Especialista en medicina interna en Estambul — atención basada en la evidencia centrada en la salud metabólica, la diabetes, la tiroides y los chequeos integrales.',
    focusHeading: 'Áreas de interés',
    contactHeading: 'Citas y contacto',
    callLabel: 'Centro de llamadas',
    addressLabel: 'Dirección',
    emailLabel: 'Correo electrónico',
    hospitalLabel: 'Hospital',
    note: 'Esta es una página resumida. Para más información, visite el sitio en inglés.',
    moreCta: 'Sitio en inglés',
    metaTitle: 'Dr. Birkan Alaycı — Medicina interna, Estambul',
    metaDesc:
      'Especialista en medicina interna, Liv Hospital Vadistanbul, Estambul. Salud metabólica, diabetes, tiroides, chequeo.',
  },
};
