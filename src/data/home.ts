import type { Locale } from '../i18n/ui';

/**
 * Home page copy. Structure follows the v3 Home artboard in Paper
 * ("Home — v3 (v2 + client colours & fonts)").
 *
 * TODO(client): the stats and licence number are carried over from the v2 design and
 * still need to be confirmed. The testimonial is a PLACEHOLDER showing the shape of a
 * Saudi family's review: replace it with a real guest's words (and their permission)
 * before launch, never publish it as it stands.
 */
export const home = {
  en: {
    hero: {
      title: ['Pick your safari.', "We'll handle Tanzania."],
      body: "Two 12-day journeys through northern Tanzania and Zanzibar, every day written out. Pick one and we'll shape it around your family, or tell us the month.",
      cta: 'Plan my safari',
    },
    picker: {
      heading: 'What kind of safari are you dreaming of?',
      body: "Pick a starting point. Every trip is private and we'll shape it around your dates and your family.",
      link: 'Not sure yet? Talk to a planner',
      tiles: [
        { title: 'Great Migration', meta: '12 days · three nights in the Serengeti', href: '/itineraries/classic-tanzania' },
        { title: 'Family Safari', meta: '12 days · four bases, four moves', href: '/itineraries/slow-safari' },
        { title: 'Honeymoon', meta: '12 days · safari, then the sea', href: '/itineraries/classic-tanzania' },
        { title: 'Tailor-made', meta: 'Your dates · your pace', href: '/plan-your-trip' },
      ],
    },
    itineraries: {
      heading: 'Starting points, not packages.',
      body: 'Every day is written out before you pay anything. Change a lodge, add a night on the coast, drop the balloon — we send the new version back the same day.',
    },
    spotlight: {
      sub: 'Twelve days, written out in full. This is the page you would get by email, except you can read it now, before you talk to anyone.',
      priceNote: 'Private departure · your dates',
      coversTitle: 'What the price covers',
      quote: 'Get this as a quote',
      change: 'Change something',
      plannerQuote: 'Every lodge on this route, one of us has slept in. Ask me why Day 7 has nothing fixed in it.',
      plannerName: 'Noura — your planner for this trip',
      ask: 'Ask a question',
    },
    testimonial: {
      quote:
        'We travelled with three children and my parents, and we never once had to ask about halal food or where to pray. Our guide stopped for every prayer without being reminded, and by the third morning the children were spotting animals before he did.',
      name: 'A family from Riyadh',
      meta: 'Twelve days, Tanzania & Zanzibar · Summer 2026',
    },
    how: {
      heading: 'One planner. One guide. First call to last airstrip.',
      stats: [
        ['15', 'Planners'],
        ['12h', 'First reply'],
        ['85%', 'Come back'],
      ],
      steps: [
        ['You send a month and a rough idea', 'Two lines is enough. No form with nineteen fields, no budget slider you have to guess at.'],
        ['One planner writes you the days', 'Named, priced, lodge by lodge, inside twelve hours. The same person stays with you to the end.'],
        ["You move things until it's right", "Swap a lodge, add the coast, cut a day. Most trips go through four or five versions. That's normal."],
        ['One guide meets you at the plane', 'Not a driver at each park. One person, the whole way, who knows why you booked it.'],
      ],
    },
    conservation: {
      heading: 'The land pays for itself, or it stops being land.',
      body: "Every trip carries a conservation fee we don't mark up, paid straight to the conservancy you drive through.",
      cta: 'Be part of the effort',
      link: 'Add a ranger day to any trip',
    },
    journal: {
      heading: 'Worth reading before you book.',
    },
    credentials: [
      ['Licensed in Tanzania', 'TATO member · licence 0418'],
      ['No deposit to see a plan', 'Pay nothing until you say yes'],
      ['On the phone in Arusha', 'Reachable through your whole trip'],
    ],
    cta: {
      heading: "Tell us the month, and roughly what you're hoping for.",
      body: "That's genuinely all we need to start. First response inside twelve hours, from the planner who'll stay with you the whole way.",
      primary: 'Start my itinerary',
      note: 'No deposit, no call required, and nobody chases you afterwards.',
    },
  },
  ar: {
    hero: {
      title: ['اختر رحلتك.', 'وتنزانيا علينا.'],
      body: 'رحلتان في شمال تنزانيا وزنجبار، مدة كل منهما 12 يومًا، وكل يوم فيهما مكتوب بالتفصيل. اختر إحداهما ونفصّلها على مقاس عائلتك، أو أخبرنا بالشهر فقط.',
      cta: 'خطّط رحلتي',
    },
    picker: {
      heading: 'ما رحلة السفاري التي تحلم بها؟',
      body: 'اختر نقطة البداية. كل رحلاتنا خاصة، ونفصّلها على مواعيدك وعلى مقاس عائلتك.',
      link: 'لم تحسم أمرك بعد؟ تحدّث مع أحد مخطّطي الرحلات',
      tiles: [
        { title: 'الهجرة الكبرى', meta: '12 يومًا · ثلاث ليالٍ في السيرينغيتي', href: '/itineraries/classic-tanzania' },
        { title: 'سفاري العائلة', meta: '12 يومًا · أربع محطات، أربعة تنقّلات', href: '/itineraries/slow-safari' },
        { title: 'شهر العسل', meta: '12 يومًا · سفاري ثم البحر', href: '/itineraries/classic-tanzania' },
        { title: 'رحلة مصمّمة لك', meta: 'مواعيدك · إيقاعك', href: '/plan-your-trip' },
      ],
    },
    itineraries: {
      heading: 'نقاط انطلاق، لا باقات جاهزة.',
      body: 'كل يوم مكتوب بالتفصيل قبل أن تدفع أي مبلغ. غيّر نُزلًا، أو أضف ليلة على الساحل، أو استغنِ عن رحلة المنطاد، ونرسل لك النسخة المعدّلة في اليوم نفسه.',
    },
    spotlight: {
      sub: 'اثنا عشر يومًا مكتوبة بالتفصيل. هذه هي الصفحة نفسها التي تصلك بالبريد الإلكتروني، لكن بإمكانك قراءتها الآن قبل أن تتحدث مع أحد.',
      priceNote: 'رحلة خاصة · حسب مواعيدك',
      coversTitle: 'ما يشمله السعر',
      quote: 'اطلب عرض سعر',
      change: 'اطلب تعديلًا',
      plannerQuote: 'ما من نُزل في هذا المسار إلا وأقام فيه أحدنا بنفسه. اسألني لماذا تركنا اليوم السابع بلا برنامج ثابت.',
      plannerName: 'نورة — مخطّطة رحلتك',
      ask: 'اطرح سؤالًا',
    },
    testimonial: {
      quote:
        'سافرنا مع أطفالنا الثلاثة ووالديّ، ولم نحتج ولو مرة إلى السؤال عن الطعام الحلال أو مكان الصلاة. كان مرشدنا يتوقف لكل صلاة دون أن نذكّره، ومن الصباح الثالث صار الأطفال يلمحون الحيوانات قبله.',
      name: 'عائلة من الرياض',
      meta: 'اثنا عشر يومًا في تنزانيا وزنجبار · صيف 2026',
    },
    how: {
      heading: 'مخطّط واحد ومرشد واحد، من أول اتصال حتى آخر رحلة طيران.',
      stats: [
        ['15', 'مخطّط رحلات'],
        ['12 ساعة', 'للرد الأول'],
        ['85%', 'يعودون للسفر معنا'],
      ],
      steps: [
        ['ترسل لنا الشهر وفكرة عامة', 'سطران يكفيان. لا استمارة من تسعة عشر حقلًا، ولا خانة ميزانية تضطر إلى تخمينها.'],
        ['يكتب لك مخطّط واحد برنامج الأيام', 'بأسماء النُّزل وأسعارها، نُزلًا بنُزل، خلال اثنتي عشرة ساعة. والشخص نفسه يبقى معك حتى النهاية.'],
        ['تعدّل حتى تصبح الرحلة كما تريد', 'بدّل نُزلًا، أو أضف أيامًا على الساحل، أو اختصر يومًا. تمرّ معظم الرحلات بأربع أو خمس نسخ، وهذا أمر طبيعي.'],
        ['مرشد واحد يستقبلك عند الطائرة', 'لا سائق جديد في كل محمية، بل شخص واحد يرافقك طوال الرحلة ويعرف ما الذي جئت من أجله.'],
      ],
    },
    conservation: {
      heading: 'البرّية التي لا تموّل نفسها، لا تبقى برّية.',
      body: 'تشمل كل رحلة رسوم حماية لا نضيف إليها أي هامش، وتُدفع مباشرة إلى المحمية التي تمرّ بها.',
      cta: 'شارك في حماية البرّية',
      link: 'أضف إلى أي رحلة يومًا مع حرّاس المحمية',
    },
    journal: {
      heading: 'مقالات تستحق القراءة قبل الحجز.',
    },
    credentials: [
      ['مرخّصون في تنزانيا', 'أعضاء في TATO · ترخيص 0418'],
      ['اطّلع على الخطة دون عربون', 'لا تدفع شيئًا قبل موافقتك'],
      ['فريقنا في أروشا على الهاتف', 'نبقى على تواصل معك طوال رحلتك'],
    ],
    cta: {
      heading: 'أخبرنا بالشهر الذي يناسبك، وبفكرة عامة عمّا تتمنّاه.',
      body: 'هذا كل ما نحتاجه فعلًا لنبدأ. يصلك الرد الأول خلال اثنتي عشرة ساعة، من المخطّط الذي سيرافقك حتى نهاية رحلتك.',
      primary: 'ابدأ تخطيط رحلتي',
      note: 'لا عربون، ولا مكالمة مطلوبة، ولن نلحّ عليك بعدها.',
    },
  },
} satisfies Record<Locale, unknown>;
