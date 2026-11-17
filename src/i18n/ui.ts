export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];
/** Arabic is the default: it lives at `/`, English under `/en/`. */
export const defaultLocale: Locale = 'ar';

export const dir = (locale: Locale) => (locale === 'ar' ? 'rtl' : 'ltr');

/** Build a locale-aware path. `path` is the page path without a locale prefix, e.g. "/plan-your-trip". */
export function localePath(locale: Locale, path = '/') {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  return clean === '/' ? `/${locale}/` : `/${locale}${clean}`;
}

/** Contact details shown across the site. Placeholders until the client confirms. */
export const contact = {
  email: 'hello@samursafaris.com',
  phoneDisplay: '+254 711 082 730',
  // TODO(client): confirm the WhatsApp number. Digits only, with country code.
  whatsapp: '254711082730',
};

export const whatsappLink = (text: string) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;

type Dict = Record<string, string>;

export const ui: Record<Locale, Dict> = {
  en: {
    'site.title': 'Samur — Private safaris in Tanzania and Zanzibar',
    'site.description':
      'Two private 12-day safaris through northern Tanzania and Zanzibar, planned with you on WhatsApp in Arabic or English.',
    'nav.journeys': 'Our Journeys',
    'nav.about': 'About Us',
    'nav.journal': 'Journal',
    'nav.plan': 'Plan my safari',
    'nav.switch': 'العربية',
    'nav.switchLabel': 'اقرأ هذه الصفحة بالعربية',
    'nav.menu': 'Menu',
    'nav.menuLabel': 'Main',
    'nav.classic': 'The Classic Tanzania',
    'nav.slow': 'The Slow Safari',
    'nav.tailor': 'Tailor-made',
    'nav.classicSub': '12 days. Every major park in the north, then the beach.',
    'nav.slowSub': '12 days. Four bases, made for families.',
    'nav.tailorSub': 'Your dates and pace, planned on WhatsApp.',
    'nav.storyTitle': 'Our story',
    'nav.storySub': 'Private safaris, planned in Arusha by our own guides.',
    'nav.aboutUs': 'About Us',
    'nav.aboutUsSub': 'Who we are and how we work.',
    'nav.travelInfo': 'Travel Information',
    'nav.travelInfoSub': 'Visas, packing and what to expect.',
    'nav.cost': 'Cost Breakdown',
    'nav.costSub': 'What each journey costs and covers.',
    'nav.bestTime': 'Best Time to Visit',
    'nav.bestTimeSub': 'The seasons, month by month.',
    'nav.addons': 'Safari Add-ons',
    'nav.addonsSub': 'Balloons, spice farms and more.',
    'footer.blurb':
      'Njiro, Arusha, Tanzania. We share an office with Elototo Tanzania, and somebody is in it right now.',
    'footer.before': 'Before you go',
    'footer.when': 'When to travel',
    'footer.cost': 'What things cost',
    'footer.visas': 'Visas & vaccines',
    'footer.pack': 'What to pack',
    'footer.kids': 'Travelling with kids',
    'footer.company': 'Samur',
    'footer.story': 'Our story',
    'footer.conservation': 'Conservation',
    'footer.journal': 'Journal',
    'footer.reviews': 'Reviews',
    'footer.copyright': '© 2026 Samur Safaris Ltd · Arusha',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms & booking conditions',
    'footer.protection': 'Financial protection',
    'common.days': 'days',
    'common.priceOnRequest': 'Price on request',
    'common.onRequest': 'On request',
    'common.included': 'Park fees, full board, guide included',
    'common.viewDays': 'View day by day',
    'common.day': 'Day',
    'common.whatsappPlanner': 'WhatsApp a planner',
  },
  ar: {
    'site.title': 'سَمُر — رحلات سفاري خاصة في تنزانيا وزنجبار',
    'site.description':
      'رحلتا سفاري خاصتان في شمال تنزانيا وزنجبار، مدة كل منهما 12 يومًا، نخطّطهما معك عبر واتساب بالعربية أو الإنجليزية.',
    'nav.journeys': 'رحلاتنا',
    'nav.about': 'من نحن',
    'nav.journal': 'المدوّنة',
    'nav.plan': 'خطّط رحلتي',
    'nav.switch': 'English',
    'nav.switchLabel': 'Read this page in English',
    'nav.menu': 'القائمة',
    'nav.menuLabel': 'القائمة الرئيسية',
    'nav.classic': 'تنزانيا الكلاسيكية',
    'nav.slow': 'السفاري الهادئة',
    'nav.tailor': 'رحلة مصمّمة لك',
    'nav.classicSub': '12 يومًا: كل المحميات الكبرى في الشمال، ثم الشاطئ.',
    'nav.slowSub': '12 يومًا: أربع محطات بإيقاع هادئ يناسب العائلات.',
    'nav.tailorSub': 'بمواعيدك وعلى إيقاعك، نخطّطها معك عبر واتساب.',
    'nav.storyTitle': 'قصتنا',
    'nav.storySub': 'رحلات سفاري خاصة، يخطّطها مرشدونا في أروشا.',
    'nav.aboutUs': 'من نحن',
    'nav.aboutUsSub': 'من نحن وكيف نعمل.',
    'nav.travelInfo': 'معلومات السفر',
    'nav.travelInfoSub': 'التأشيرات، وما تأخذه معك، وما ينتظرك هناك.',
    'nav.cost': 'تفاصيل التكلفة',
    'nav.costSub': 'تكلفة كل رحلة وما تشمله.',
    'nav.bestTime': 'أفضل وقت للزيارة',
    'nav.bestTimeSub': 'المواسم شهرًا بشهر.',
    'nav.addons': 'إضافات السفاري',
    'nav.addonsSub': 'رحلات المنطاد ومزارع التوابل وغيرها.',
    'footer.blurb':
      'نجيرو، أروشا، تنزانيا. مكتبنا مشترك مع إيلوتوتو تنزانيا، وفيه الآن من يردّ عليك.',
    'footer.before': 'قبل السفر',
    'footer.when': 'متى تسافر',
    'footer.cost': 'التكاليف والأسعار',
    'footer.visas': 'التأشيرات واللقاحات',
    'footer.pack': 'ماذا تأخذ معك',
    'footer.kids': 'السفر مع الأطفال',
    'footer.company': 'سَمُر',
    'footer.story': 'قصتنا',
    'footer.conservation': 'حماية الطبيعة',
    'footer.journal': 'المدوّنة',
    'footer.reviews': 'آراء الضيوف',
    'footer.copyright': '© 2026 سَمُر سفاري المحدودة · أروشا',
    'footer.privacy': 'الخصوصية',
    'footer.terms': 'الشروط وأحكام الحجز',
    'footer.protection': 'الحماية المالية',
    'common.days': 'يومًا',
    'common.priceOnRequest': 'السعر عند الطلب',
    'common.onRequest': 'عند الطلب',
    'common.included': 'شاملة رسوم المحميات والوجبات كاملة والمرشد',
    'common.viewDays': 'البرنامج يومًا بيوم',
    'common.day': 'اليوم',
    'common.whatsappPlanner': 'تواصل مع مخطّط رحلتك عبر واتساب',
  },
};

export function useTranslations(locale: Locale) {
  return (key: string) => ui[locale][key] ?? ui.en[key] ?? key;
}
