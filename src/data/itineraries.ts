import type { ImageMetadata } from 'astro';
import type { StayGallery } from './stays';
import type { Locale } from '../i18n/ui';

import zanzibarDeck from '../assets/images/zanzibar-deck.jpg';
import familyGuide from '../assets/images/family-guide.jpg';
import beachBanda from '../assets/images/beach-banda.jpg';
import stayGarden from '../assets/images/stay-garden.jpg';
import stayTarangire from '../assets/images/stay-tarangire.jpg';
import stayFarmhouse from '../assets/images/stay-farmhouse.jpg';
import lanternDinner from '../assets/images/lantern-dinner.jpg';
import seaViewRoom from '../assets/images/sea-view-room.jpg';
import sundowners from '../assets/images/sundowners.jpg';
import gardenLunch from '../assets/images/garden-lunch.jpg';

export type ItinerarySlug = 'classic-tanzania' | 'slow-safari';

export interface Stay {
  label: string;
  name: string;
  description: string;
  /** Fallback photo, used when the lodge has no gallery. */
  photo: ImageMetadata;
  /** Folder in src/assets/images/stays with the lodge's photos, shown as a carousel. */
  gallery?: StayGallery;
}

export interface Day {
  title: string;
  body: string;
  meals: string;
  road: string;
  /** "Highlight" or "Optional" */
  highlightLabel: string;
  highlight: string;
  stay?: Stay;
  /** e.g. "Second night at …" */
  note?: string;
}

export interface Itinerary {
  slug: ItinerarySlug;
  name: string;
  heroImage: ImageMetadata;
  cardImage: ImageMetadata;
  card: { eyebrow: string; meta: string; description: string };
  heroLine: string;
  overview: { heading: string; paragraphs: string[]; facts: [string, string][] };
  rail: [string, string][];
  route: { intro: string; stops: { days: string; place: string; note: string }[] };
  days: Day[];
  coversIntro: string;
  included: string[];
  excluded: string[];
  know: { title: string; sub: string; body: string }[];
  extras: { day: string; title: string; duration: string }[];
}

/* Shared labels used by the itinerary page template */
export const itineraryUi: Record<Locale, Record<string, string>> = {
  en: {
    duration: 'Duration',
    perPerson: 'Per person',
    tabOverview: 'Overview',
    tabDays: 'Day by day',
    tabIncluded: "What's included",
    tabKnow: 'Good to know',
    tabExtras: 'Extras',
    railPrice: 'Per person, private departure',
    railExcl: 'excl. international flights',
    quote: 'Get this as a quote',
    talk: 'Or talk to Noura, your planner',
    talkSub: 'On WhatsApp, in Arabic or English',
    routeHeading: 'Where the twelve days go',
    daysHeading: 'Day by day',
    daysIntro: "Every day written out in full, with the lodge you'll sleep in and how long you'll be on the road.",
    meals: 'Meals',
    road: 'Getting around',
    coversHeading: 'What the trip covers',
    included: 'Included',
    excluded: 'Not included',
    knowHeading: 'Good to know',
    knowIntro: 'The practical things families ask us first. Anything else, ask your planner on WhatsApp.',
    extrasHeading: 'Optional extras',
    extrasIntro: 'Each one fits into a day already on the itinerary. Add it when you ask for your quote.',
    enquireHeading: 'Plan this trip with us',
    enquireBody:
      'Tell us your dates and who is travelling. We reply on WhatsApp with a quote built around you, and adjust lodges, pace and length until it fits.',
    fName: 'Your name',
    fNamePh: 'Sara Al-Harbi',
    fPhone: 'WhatsApp number',
    fPhonePh: '+966 5X XXX XXXX',
    fMonth: "Month you'd travel",
    fMonthPh: 'July 2026',
    fWho: "Who's travelling",
    fWhoPh: '2 adults, 2 children',
    fSend: 'Send on WhatsApp',
    fNote: 'First reply inside twelve hours, from the planner who stays with you the whole trip.',
    waIntro: "Hello Samur, I'd like a quote for",
  },
  ar: {
    duration: 'المدة',
    perPerson: 'للشخص',
    tabOverview: 'نظرة عامة',
    tabDays: 'يومًا بيوم',
    tabIncluded: 'ما يشمله السعر',
    tabKnow: 'معلومات مهمة',
    tabExtras: 'الإضافات',
    railPrice: 'للشخص، رحلة خاصة',
    railExcl: 'لا يشمل الطيران الدولي',
    quote: 'اطلب عرض سعر لهذه الرحلة',
    talk: 'أو تحدّث مع نورة، مخطّطة رحلتك',
    talkSub: 'عبر واتساب، بالعربية أو الإنجليزية',
    routeHeading: 'أين تقضي أيامك الاثني عشر',
    daysHeading: 'يومًا بيوم',
    daysIntro: 'كل يوم مكتوب بالتفصيل، مع النُّزل الذي تبيت فيه ومدة الطريق.',
    meals: 'الوجبات',
    road: 'التنقّل',
    coversHeading: 'ما تشمله الرحلة',
    included: 'مشمول',
    excluded: 'غير مشمول',
    knowHeading: 'معلومات مهمة',
    knowIntro: 'أكثر ما تسألنا عنه العائلات. ولأي سؤال آخر، راسل مخطّط رحلتك عبر واتساب.',
    extrasHeading: 'إضافات اختيارية',
    extrasIntro: 'كل إضافة تناسب يومًا موجودًا في برنامج الرحلة. أضفها عند طلب عرض السعر.',
    enquireHeading: 'خطّط هذه الرحلة معنا',
    enquireBody:
      'أخبرنا بمواعيدك ومن سيرافقك. نردّ عليك عبر واتساب بعرض سعر مفصّل لك، ونعدّل النُّزل والإيقاع والمدة حتى تناسبك.',
    fName: 'الاسم',
    fNamePh: 'سارة الحربي',
    fPhone: 'رقم واتساب',
    fPhonePh: '+966 5X XXX XXXX',
    fMonth: 'شهر السفر',
    fMonthPh: 'يوليو 2026',
    fWho: 'المسافرون',
    fWhoPh: 'بالغان وطفلان',
    fSend: 'أرسل عبر واتساب',
    fNote: 'يصلك الرد الأول خلال اثنتي عشرة ساعة، من المخطّط الذي يرافقك طوال الرحلة.',
    waIntro: 'مرحبًا سَمُر، أرغب في عرض سعر لرحلة',
  },
};

/* ---------------------------------------------------------------- English */

const classicEn: Itinerary = {
  slug: 'classic-tanzania',
  name: 'The Classic Tanzania',
  heroImage: gardenLunch,
  cardImage: sundowners,
  card: {
    eyebrow: 'Tanzania & Zanzibar · First safari',
    meta: 'The full northern circuit',
    description:
      'Arusha to the Indian Ocean. Tarangire, Lake Manyara, Ngorongoro Crater and three nights in the Serengeti, then Stone Town and the beach.',
  },
  heroLine:
    'Arusha to the Indian Ocean in twelve days. Tarangire, Lake Manyara, Ngorongoro Crater and three nights in the Serengeti, then Stone Town and the beach.',
  overview: {
    heading: 'Every major park in the north, then three nights on the sand.',
    paragraphs: [
      'A night in Arusha to land, then Tarangire for the elephants, Lake Manyara under the Rift Valley wall, a full day on the Ngorongoro Crater floor and three nights in the central Serengeti. A light aircraft takes you to Stone Town, and you finish with three nights facing Mnemba Atoll.',
      'Private from start to finish: your own 4x4 and guide, halal dining briefed to every lodge kitchen, and game drives timed so midday is free for prayer and rest.',
    ],
    facts: [
      ['Route', 'Arusha · Tarangire · Manyara · Ngorongoro · Serengeti · Zanzibar'],
      ['Best months', 'June to October, January and February'],
      ['Travel style', 'Private vehicle and guide, full circuit by road'],
      ['Getting there', 'Kilimanjaro (JRO) in, Zanzibar (ZNZ) out'],
      ['Best for', 'A first safari that covers every major park'],
    ],
  },
  rail: [
    ['Length', '12 days, 11 nights'],
    ['Departs', 'Any day, on your dates'],
    ['Group', 'Private, your party only'],
    ['Your quote', 'Lodges and price confirmed on WhatsApp'],
  ],
  route: {
    intro: 'Six bases, road transfers broken up with game drives, and one light-aircraft hop to the coast.',
    stops: [
      { days: 'Day 1', place: 'Arusha', note: 'Land and rest' },
      { days: 'Day 2', place: 'Tarangire', note: 'Elephants and baobabs' },
      { days: 'Day 3–4', place: 'Karatu', note: 'Manyara, then the crater' },
      { days: 'Day 5–7', place: 'Serengeti', note: 'Three nights on the plains' },
      { days: 'Day 8', place: 'Stone Town', note: 'Fly to the coast' },
      { days: 'Day 9–12', place: 'Matemwe', note: 'Mnemba, then the beach' },
    ],
  },
  days: [
    {
      title: 'Arrival in Tanzania',
      body: 'Your guide meets you in the arrivals hall at Kilimanjaro Airport and drives you to Arusha. The rest of the day is yours to settle in and recover from the flight.',
      meals: 'Dinner',
      road: 'About 1 hr 20 min',
      highlightLabel: 'Highlight',
      highlight: 'Meeting your guide at the airport',
      stay: {
        label: 'Where you sleep',
        name: 'Mount Meru Hotel',
        gallery: 'mount-meru-hotel',
        description: 'A full-service hotel in gardens at the foot of Mount Meru. An easy first night after the flight.',
        photo: stayGarden,
      },
    },
    {
      title: 'Elephants and baobabs in Tarangire',
      body: 'A morning drive to Tarangire, home to some of the largest elephant herds in Africa and baobabs that are centuries old. Afternoon game drive, then a night inside the park, so the evening and next morning are spent among the animals.',
      meals: 'Breakfast, picnic lunch, dinner',
      road: 'About 2 hrs, then game drives',
      highlightLabel: 'Highlight',
      highlight: 'Elephant herds on the Tarangire River',
      stay: {
        label: 'Where you sleep',
        name: 'Tarangire Safari Lodge',
        gallery: 'tarangire-safari-lodge',
        description: 'Tented suites with private bathrooms, inside the park.',
        photo: stayTarangire,
      },
    },
    {
      title: 'Lake Manyara',
      body: 'An early drive in Tarangire, then on to Lake Manyara at the foot of the Rift Valley escarpment: groundwater forest, hippo pools and lake shore. In the late afternoon you climb up to the cooler coffee country around Karatu.',
      meals: 'Breakfast, picnic lunch, dinner',
      road: 'About 2 hrs in total',
      highlightLabel: 'Highlight',
      highlight: 'Hippo pools under the escarpment',
      stay: {
        label: 'Where you sleep · two nights',
        name: 'Ngorongoro Farm House',
        gallery: 'ngorongoro-farm-house',
        description: 'A suite on a working coffee farm, a short drive from the crater gate.',
        photo: stayFarmhouse,
      },
    },
    {
      title: 'Ngorongoro Crater',
      body: 'An early start to the crater rim, then a 600 metre descent to the floor. Lion, elephant, buffalo and black rhino in an area small enough to cover in one visit, with up to six hours on the floor. Back at the lodge by late afternoon.',
      meals: 'Breakfast, picnic lunch, dinner',
      road: 'About 1 hr each way',
      highlightLabel: 'Highlight',
      highlight: 'Black rhino on the crater floor',
      note: 'Second night at Ngorongoro Farm House.',
    },
    {
      title: 'Into the Serengeti',
      body: 'Across the Ngorongoro highlands and through Naabi Hill Gate, with lunch overlooking the plains. The afternoon is a game drive through the central Seronera area on the way to your lodge.',
      meals: 'Breakfast, picnic lunch, dinner',
      road: 'About 4.5 hrs, game viewing',
      highlightLabel: 'Highlight',
      highlight: 'Lunch overlooking the plains',
      stay: {
        label: 'Where you sleep · three nights',
        name: 'Kubu Kubu Tented Lodge',
        gallery: 'kubu-kubu-tented-lodge',
        description: 'A tented lodge inside the park, looking out over the plains.',
        photo: lanternDinner,
      },
    },
    {
      title: 'A full day in the Serengeti',
      body: 'Two game drives at the hours when the animals are most active, 6:00 to 12:00 and 16:00 to 18:00. Lions, cheetahs and leopards are the focus. In between, a hot lunch and a rest at the lodge.',
      meals: 'Breakfast, lunch, dinner',
      road: 'Game drives only',
      highlightLabel: 'Optional',
      highlight: 'Sunrise balloon flight over the plains',
      note: 'Second night at Kubu Kubu Tented Lodge.',
    },
    {
      title: 'Following the herds',
      body: 'A longer drive with a picnic lunch, going wherever your guide expects the best sightings that week: the migration herds, a kopje with resting lions, or the river crossings in the right season. Third night at Kubu Kubu.',
      meals: 'Breakfast, picnic lunch, dinner',
      road: 'Game drives only',
      highlightLabel: 'Highlight',
      highlight: 'Wherever the herds are that week',
    },
    {
      title: 'Fly to Zanzibar',
      body: 'A short drive to the Seronera airstrip and a light-aircraft flight to Zanzibar, the plains giving way to the coast below you. A driver takes you into Stone Town, where the evening is free to walk the old streets and the waterfront.',
      meals: 'Breakfast',
      road: '2.5 hr flight, 20 min drive',
      highlightLabel: 'Highlight',
      highlight: 'The Serengeti from the air',
      stay: {
        label: 'Where you sleep',
        name: 'Boutique hotel, Stone Town',
        gallery: 'spice-tree',
        description: 'A restored house in the old town, such as Spice Tree by Turaco.',
        photo: beachBanda,
      },
    },
    {
      title: 'Stone Town, then the coast',
      body: 'A guided morning walk through Stone Town: carved doors, the old Omani palaces, spice stalls and the narrow lanes between them. After lunch you drive to Matemwe on the quiet north-east coast.',
      meals: 'Breakfast',
      road: 'About 1 hr 15 min',
      highlightLabel: 'Highlight',
      highlight: 'The Omani palaces and carved doors',
      stay: {
        label: 'Where you sleep · three nights',
        name: 'Sunrise at Bandas',
        description: 'A beach stay on the north-east coast of Zanzibar, facing Mnemba Atoll.',
        photo: seaViewRoom,
      },
    },
    {
      title: 'Mnemba Atoll',
      body: 'A morning boat trip from the beach to snorkel the reef around Mnemba Atoll, known for its clear water and reef fish, with dolphins often seen on the way. The rest of the day is yours.',
      meals: 'Breakfast',
      road: 'Boat trip only',
      highlightLabel: 'Highlight',
      highlight: 'Dolphins on the way out to the reef',
      note: 'Second night at Sunrise at Bandas.',
    },
    {
      title: 'A day by the sea',
      body: 'Nothing planned. The beach, the pool and the tides are yours for the day.',
      meals: 'Breakfast',
      road: 'None',
      highlightLabel: 'Optional',
      highlight: 'Spice farm visit with a cooking class',
    },
    {
      title: 'Departure',
      body: 'A last morning by the sea before your private transfer to Zanzibar Airport.',
      meals: 'Breakfast',
      road: 'About 1 hr 15 min',
      highlightLabel: 'Highlight',
      highlight: 'One last swim before the car comes',
    },
  ],
  coversIntro:
    'Vehicle, guide, park fees and full board on safari sit in one figure, so the price you plan around is the price you pay.',
  included: [
    'Private 4x4 vehicle and driver-guide for all seven safari days',
    'All park and conservation fees, including the Ngorongoro Crater descent',
    '11 nights in the lodges listed, or similar',
    'Full board on safari, and breakfast daily on Zanzibar',
    'Light-aircraft flight to Zanzibar, and all private transfers',
    'Stone Town walking tour and Mnemba Atoll snorkelling',
    'Drinking water in the vehicle and a reusable bottle each',
    'Flying Doctors evacuation cover, and WhatsApp support throughout',
  ],
  excluded: [
    'International flights and your Tanzania visa',
    'Travel and cancellation insurance',
    'Lunches and dinners on Zanzibar',
    'Soft drinks and personal extras at the lodges',
    'Tips: about USD 10–15 a day for your guide, USD 5 for lodge staff',
    'Optional balloon flight and spice farm visit',
  ],
  know: [
    {
      title: 'Best time to go',
      sub: 'June–October · January–February',
      body: "Dry on the mainland and the island, and lined up with the summer school break. Zanzibar's long rains run March to May.",
    },
    {
      title: 'Weather',
      sub: '17–22°C on safari · 25–28°C on Zanzibar',
      body: 'Cooler at dawn on the safari circuit, so pack a warm layer for early game drives.',
    },
    {
      title: 'On the road',
      sub: 'The full circuit by road',
      body: 'Five safari days include a transfer. We break them with game viewing and stops, and the vehicle is yours alone.',
    },
    {
      title: 'Light aircraft',
      sub: 'Soft bags, around 15 kg each',
      body: 'The Serengeti to Zanzibar flight takes soft bags only. We confirm the exact limit when we book.',
    },
    {
      title: 'Flights and visa',
      sub: 'Kilimanjaro in, Zanzibar out',
      body: 'International flights are not included. A Tanzania visa covers Zanzibar too, and we guide you through it.',
    },
    {
      title: 'Health',
      sub: 'No mandatory vaccines for most travellers',
      body: 'Unless you arrive from a yellow fever country. Ask a travel clinic about malaria prevention before you fly.',
    },
  ],
  extras: [
    { day: 'Day 6', title: 'Sunrise balloon flight over the Serengeti', duration: 'One hour, at dawn' },
    { day: 'Day 11', title: 'Spice farm visit with a cooking class', duration: 'Half day' },
  ],
};

const slowEn: Itinerary = {
  slug: 'slow-safari',
  name: 'The Slow Safari',
  heroImage: familyGuide,
  cardImage: zanzibarDeck,
  card: {
    eyebrow: 'Tanzania & Zanzibar · Families',
    meta: 'Four bases, four moves',
    description:
      'Land, rest, and start from the lodge door. Arusha National Park, Ngorongoro from Karatu, three nights in the Serengeti, then four on the beach.',
  },
  heroLine:
    'Land, rest, and start your safari from the lodge door. Four bases and only four moves in twelve days, ending with the longest stay of all on the beach.',
  overview: {
    heading: 'Four bases, four moves, and the longest stay on the beach.',
    paragraphs: [
      'Two nights inside Arusha National Park an hour from the airport, two in Karatu for Ngorongoro Crater, three in the central Serengeti, then four at one beach lodge on Zanzibar. Every other day you wake up where you went to sleep.',
      'Built for families: activities start at the lodge door, halal dining is briefed to every kitchen before you arrive, and game drives leave midday free for prayer and rest.',
    ],
    facts: [
      ['Route', 'Arusha NP · Karatu · Ngorongoro · Serengeti · Zanzibar'],
      ['Best months', 'June to October, January and February'],
      ['Travel style', 'Four bases, only four moves in total'],
      ['Getting there', 'Kilimanjaro (JRO) in, Zanzibar (ZNZ) out'],
      ['Best for', 'Families who want to stay put and rest'],
    ],
  },
  rail: classicEn.rail,
  route: {
    intro: 'Four moves in total: about an hour, about four hours, a long game drive into the Serengeti, and one flight.',
    stops: [
      { days: 'Day 1–2', place: 'Arusha NP', note: 'Rest, then the lodge door' },
      { days: 'Day 3–4', place: 'Karatu', note: 'Village walk, then the crater' },
      { days: 'Day 5–7', place: 'Serengeti', note: 'Three nights on the plains' },
      { days: 'Day 8–12', place: 'Matemwe', note: 'Four nights on the beach' },
    ],
  },
  days: [
    {
      title: 'Arrive and rest',
      body: 'Your guide meets you at Kilimanjaro Airport and drives you about an hour to a lodge inside Arusha National Park, at the foot of Mount Meru. Nothing else is planned. Eat, sleep and recover from the flight.',
      meals: 'Lunch, dinner',
      road: 'Move 1 of 4: about 1 hr',
      highlightLabel: 'Highlight',
      highlight: 'Nothing planned but rest',
      stay: {
        label: 'Where you sleep · two nights',
        name: 'Hatari Lodge',
        gallery: 'hatari-lodge',
        description: 'One of very few lodges inside Arusha National Park. Suites combine into private villas for families.',
        photo: stayGarden,
      },
    },
    {
      title: 'Your first safari, from the door',
      body: 'A morning game drive among giraffe, buffalo, zebra and black-and-white colobus monkeys, with flamingos on the Momella Lakes when they are in. Back for lunch and a rest, then a canoe trip on the lakes or a walk with a park ranger.',
      meals: 'Breakfast, lunch, dinner',
      road: 'Game drive only',
      highlightLabel: 'Highlight',
      highlight: 'Canoeing on the Momella Lakes',
      note: 'Second night at Hatari Lodge.',
    },
    {
      title: 'To Karatu, with a village stop',
      body: 'After breakfast you drive west to the highlands around Karatu. Halfway, in Mto wa Mbu, you walk through the banana plantations with a local farmer and stop for lunch. You reach the lodge by mid-afternoon with time to rest.',
      meals: 'Breakfast, lunch, dinner',
      road: 'Move 2 of 4: about 4 hrs',
      highlightLabel: 'Highlight',
      highlight: 'Banana plantation walk in Mto wa Mbu',
      stay: {
        label: 'Where you sleep · two nights',
        name: 'Ngorongoro Farm House',
        gallery: 'ngorongoro-farm-house',
        description: 'A suite on a working coffee farm, a short drive from the crater gate.',
        photo: stayFarmhouse,
      },
    },
    {
      title: 'Ngorongoro Crater',
      body: 'A day trip from the lodge. You drive up to the crater rim and down 600 metres to the floor, where lion, elephant, buffalo and black rhino share an area small enough to cover in one visit. Up to six hours on the floor, then back to the same lodge.',
      meals: 'Breakfast, picnic lunch, dinner',
      road: 'Day trip, about 1 hr each way',
      highlightLabel: 'Highlight',
      highlight: 'Black rhino on the crater floor',
      note: 'Second night at Ngorongoro Farm House.',
    },
    {
      title: 'Into the Serengeti',
      body: 'The one long day on the road, and most of it is a game drive. You cross the Ngorongoro highlands, enter at Naabi Hill Gate with lunch overlooking the plains, and game drive to your lodge in the middle of the park.',
      meals: 'Breakfast, picnic lunch, dinner',
      road: 'Move 3 of 4: about 4.5 hrs',
      highlightLabel: 'Highlight',
      highlight: 'Lunch overlooking the plains',
      stay: {
        label: 'Where you sleep · three nights',
        name: 'Kubu Kubu Tented Lodge',
        gallery: 'kubu-kubu-tented-lodge',
        description: 'A tented lodge inside the park, looking out over the plains.',
        photo: lanternDinner,
      },
    },
    {
      title: 'A full day in the Serengeti',
      body: 'Two game drives from the lodge at the hours when the animals are most active, 6:00 to 12:00 and 16:00 to 18:00. Lions, cheetahs and leopards are the focus. Lunch and a rest at the lodge in between.',
      meals: 'Breakfast, lunch, dinner',
      road: 'Game drives only',
      highlightLabel: 'Highlight',
      highlight: 'Lions, cheetahs and leopards',
      note: 'Second night at Kubu Kubu Tented Lodge.',
    },
    {
      title: 'The Serengeti at your own pace',
      body: 'No packing today. Choose a long picnic drive to wherever the herds are, or one morning drive and a quiet afternoon at the lodge. Third night at Kubu Kubu.',
      meals: 'Breakfast, lunch, dinner',
      road: 'Game drives only',
      highlightLabel: 'Optional',
      highlight: 'Sunrise balloon flight over the plains',
    },
    {
      title: 'Fly to the beach',
      body: 'A short drive to the Seronera airstrip and a light-aircraft flight to Zanzibar. A driver takes you straight to Matemwe on the quiet north-east coast, where you stay until you fly home.',
      meals: 'Breakfast',
      road: 'Move 4 of 4: flight, then 1 hr 15',
      highlightLabel: 'Highlight',
      highlight: 'The Serengeti from the air',
      stay: {
        label: 'Where you sleep · four nights',
        name: 'Sunrise at Bandas',
        description: 'A beach stay on the north-east coast of Zanzibar, facing Mnemba Atoll.',
        photo: seaViewRoom,
      },
    },
    {
      title: 'Mnemba Atoll',
      body: 'A morning boat trip from the beach to snorkel the reef around Mnemba Atoll, known for its clear water and reef fish, with dolphins often seen on the way. The rest of the day is yours.',
      meals: 'Breakfast',
      road: 'Boat trip from the beach',
      highlightLabel: 'Highlight',
      highlight: 'Dolphins on the way out to the reef',
      note: 'Second night at Sunrise at Bandas.',
    },
    {
      title: 'A day by the sea',
      body: 'Nothing planned. The beach, the pool and the tides are yours for the day.',
      meals: 'Breakfast',
      road: 'None',
      highlightLabel: 'Optional',
      highlight: 'Spice farm visit with a cooking class',
    },
    {
      title: 'Another day by the sea',
      body: 'A second free day at the same lodge, to rest before the flight home.',
      meals: 'Breakfast',
      road: 'None',
      highlightLabel: 'Optional',
      highlight: 'Half day in Stone Town with a guide',
    },
    {
      title: 'Departure',
      body: 'A last morning by the sea before your private transfer to Zanzibar Airport.',
      meals: 'Breakfast',
      road: 'About 1 hr 15 min',
      highlightLabel: 'Highlight',
      highlight: 'One last swim before the car comes',
    },
  ],
  coversIntro: classicEn.coversIntro,
  included: [
    'Private 4x4 vehicle and driver-guide for all seven safari days',
    'All park and conservation fees, including the Ngorongoro Crater descent',
    '11 nights in the lodges listed, or similar',
    'Full board on safari, and breakfast daily on Zanzibar',
    'Light-aircraft flight to Zanzibar, and airport and beach transfers',
    'Canoeing or a ranger walk in Arusha National Park',
    'Banana plantation walk in Mto wa Mbu, and Mnemba Atoll snorkelling',
    'Flying Doctors evacuation cover, and WhatsApp support throughout',
  ],
  excluded: [
    'International flights and your Tanzania visa',
    'Travel and cancellation insurance',
    'Lunches and dinners on Zanzibar',
    'Soft drinks and personal extras at the lodges',
    'Tips: about USD 10–15 a day for your guide, USD 5 for lodge staff',
    'Optional balloon flight, spice farm visit and Stone Town half day',
  ],
  know: [
    {
      title: 'How much moving',
      sub: 'Four moves in twelve days',
      body: 'About 1 hour, about 4 hours, about 4.5 hours of mostly game driving, and one flight. The Classic has six.',
    },
    {
      title: 'Rather not drive the long day?',
      sub: 'Fly from Lake Manyara instead',
      body: 'The Karatu to Serengeti drive can be swapped for a light-aircraft flight, at extra cost. Ask when you request a quote.',
    },
    {
      title: 'Best time to go',
      sub: 'June–October · January–February',
      body: 'Dry on the mainland and the island, and lined up with the summer school break. January and February are a second good window.',
    },
    {
      title: 'Light aircraft',
      sub: 'Soft bags, around 15 kg each',
      body: 'The Zanzibar flight takes soft bags only. We confirm the exact limit when we book.',
    },
    classicEn.know[4],
    classicEn.know[5],
  ],
  extras: [
    { day: 'Day 7', title: 'Sunrise balloon flight over the Serengeti', duration: 'One hour, at dawn' },
    { day: 'Day 10', title: 'Spice farm visit with a cooking class', duration: 'Half day' },
    { day: 'Day 11', title: 'Half day in Stone Town with a guide', duration: 'Morning or afternoon' },
  ],
};

/* ---------------------------------------------------------------- Arabic */

const railAr: [string, string][] = [
  ['المدة', '12 يومًا، 11 ليلة'],
  ['الانطلاق', 'أي يوم، حسب مواعيدك'],
  ['المجموعة', 'رحلة خاصة لك ولمن معك فقط'],
  ['عرض السعر', 'نؤكّد النُّزل والسعر عبر واتساب'],
];

const knowFlightsAr = {
  title: 'الطيران والتأشيرة',
  sub: 'الوصول إلى كليمنجارو، والمغادرة من زنجبار',
  body: 'الطيران الدولي غير مشمول. تأشيرة تنزانيا تشمل زنجبار أيضًا، ونرشدك في إجراءاتها خطوة بخطوة.',
};
const knowHealthAr = {
  title: 'الصحة',
  sub: 'لا لقاحات إلزامية لمعظم المسافرين',
  body: 'إلا إذا كنت قادمًا من بلد تنتشر فيه الحمّى الصفراء. استشر عيادة السفر بشأن الوقاية من الملاريا قبل السفر.',
};

const classicAr: Itinerary = {
  slug: 'classic-tanzania',
  name: 'تنزانيا الكلاسيكية',
  heroImage: gardenLunch,
  cardImage: sundowners,
  card: {
    eyebrow: 'تنزانيا وزنجبار · أول رحلة سفاري',
    meta: 'المسار الشمالي كاملًا',
    description:
      'من أروشا إلى المحيط الهندي. تارانجيري وبحيرة مانيارا وفوهة نغورونغورو وثلاث ليالٍ في السيرينغيتي، ثم ستون تاون والشاطئ.',
  },
  heroLine:
    'من أروشا إلى المحيط الهندي في اثني عشر يومًا. تارانجيري وبحيرة مانيارا وفوهة نغورونغورو وثلاث ليالٍ في السيرينغيتي، ثم ستون تاون والشاطئ.',
  overview: {
    heading: 'كل المحميات الكبرى في الشمال، ثم ثلاث ليالٍ على الشاطئ.',
    paragraphs: [
      'ليلة في أروشا بعد الوصول، ثم تارانجيري حيث قطعان الفيلة، وبحيرة مانيارا تحت جدار الوادي المتصدّع، ويوم كامل في قاع فوهة نغورونغورو، وثلاث ليالٍ في وسط السيرينغيتي. تنقلك طائرة صغيرة إلى ستون تاون، وتختم رحلتك بثلاث ليالٍ أمام جزيرة منيمبا.',
      'رحلة خاصة من البداية إلى النهاية: سيارة دفع رباعي ومرشد لك وحدك، وطعام حلال نتّفق عليه مسبقًا مع مطبخ كل نُزل، وجولات مشاهدة في أوقات تترك منتصف النهار حرًّا للصلاة والراحة.',
    ],
    facts: [
      ['المسار', 'أروشا · تارانجيري · مانيارا · نغورونغورو · السيرينغيتي · زنجبار'],
      ['أفضل الأشهر', 'من يونيو إلى أكتوبر، ويناير وفبراير'],
      ['أسلوب الرحلة', 'سيارة ومرشد خاصّان، والمسار كله برًّا'],
      ['الوصول', 'الوصول إلى كليمنجارو (JRO) والمغادرة من زنجبار (ZNZ)'],
      ['تناسب', 'من يخوض السفاري للمرة الأولى ويريد زيارة كل المحميات الكبرى'],
    ],
  },
  rail: railAr,
  route: {
    intro: 'ست محطات، وتنقّلات برية تتخلّلها جولات مشاهدة، ورحلة طيران قصيرة إلى الساحل.',
    stops: [
      { days: 'اليوم 1', place: 'أروشا', note: 'الوصول والراحة' },
      { days: 'اليوم 2', place: 'تارانجيري', note: 'الفيلة وأشجار الباوباب' },
      { days: 'اليوم 3–4', place: 'كاراتو', note: 'مانيارا، ثم الفوهة' },
      { days: 'اليوم 5–7', place: 'السيرينغيتي', note: 'ثلاث ليالٍ في السهول' },
      { days: 'اليوم 8', place: 'ستون تاون', note: 'الطيران إلى الساحل' },
      { days: 'اليوم 9–12', place: 'ماتيموي', note: 'منيمبا، ثم الشاطئ' },
    ],
  },
  days: [
    {
      title: 'الوصول إلى تنزانيا',
      body: 'يستقبلك مرشدك في صالة الوصول بمطار كليمنجارو ويوصلك إلى أروشا. وبقية اليوم لك، لتستقرّ وترتاح من عناء السفر.',
      meals: 'العشاء',
      road: 'نحو ساعة و20 دقيقة',
      highlightLabel: 'أبرز ما في اليوم',
      highlight: 'لقاء مرشدك في المطار',
      stay: {
        label: 'مكان الإقامة',
        name: 'فندق ماونت ميرو',
        gallery: 'mount-meru-hotel',
        description: 'فندق متكامل الخدمات وسط حدائق عند سفح جبل ميرو. ليلة أولى مريحة بعد الطيران.',
        photo: stayGarden,
      },
    },
    {
      title: 'الفيلة والباوباب في تارانجيري',
      body: 'تنطلق صباحًا إلى تارانجيري، موطن بعض أكبر قطعان الفيلة في أفريقيا وأشجار باوباب معمّرة منذ قرون. جولة مشاهدة بعد الظهر، ثم مبيت داخل المحمية، فتقضي المساء وصباح اليوم التالي بين الحيوانات.',
      meals: 'الفطور، غداء خفيف في الطريق، العشاء',
      road: 'نحو ساعتين، ثم جولات مشاهدة',
      highlightLabel: 'أبرز ما في اليوم',
      highlight: 'قطعان الفيلة على نهر تارانجيري',
      stay: {
        label: 'مكان الإقامة',
        name: 'تارانجيري سفاري لودج',
        gallery: 'tarangire-safari-lodge',
        description: 'أجنحة خيمية بحمّامات خاصة داخل المحمية.',
        photo: stayTarangire,
      },
    },
    {
      title: 'بحيرة مانيارا',
      body: 'جولة مشاهدة مبكرة في تارانجيري، ثم إلى بحيرة مانيارا عند سفح جرف الوادي المتصدّع: غابة المياه الجوفية وبرك أفراس النهر وشاطئ البحيرة. وفي آخر النهار تصعد إلى مرتفعات كاراتو الأبرد حيث مزارع البن.',
      meals: 'الفطور، غداء خفيف في الطريق، العشاء',
      road: 'نحو ساعتين إجمالًا',
      highlightLabel: 'أبرز ما في اليوم',
      highlight: 'برك أفراس النهر تحت الجرف',
      stay: {
        label: 'مكان الإقامة · ليلتان',
        name: 'نغورونغورو فارم هاوس',
        gallery: 'ngorongoro-farm-house',
        description: 'جناح في مزرعة بن منتجة، على مسافة قصيرة من بوابة الفوهة.',
        photo: stayFarmhouse,
      },
    },
    {
      title: 'فوهة نغورونغورو',
      body: 'تنطلق مبكرًا إلى حافة الفوهة، ثم تنزل 600 متر إلى قاعها، حيث تجتمع الأسود والفيلة والجواميس ووحيد القرن الأسود في مساحة محدودة تكفيك زيارة واحدة لاستكشافها. تقضي في القاع ما يصل إلى ست ساعات، وتعود إلى النُّزل قبل الغروب.',
      meals: 'الفطور، غداء خفيف في الطريق، العشاء',
      road: 'نحو ساعة في كل اتجاه',
      highlightLabel: 'أبرز ما في اليوم',
      highlight: 'وحيد القرن الأسود في قاع الفوهة',
      note: 'الليلة الثانية في نغورونغورو فارم هاوس.',
    },
    {
      title: 'إلى السيرينغيتي',
      body: 'تعبر مرتفعات نغورونغورو وتدخل من بوابة نابي هيل، مع غداء يطلّ على السهول. وبعد الظهر جولة مشاهدة في منطقة سيرونيرا الوسطى وأنت في طريقك إلى النُّزل.',
      meals: 'الفطور، غداء خفيف في الطريق، العشاء',
      road: 'نحو 4.5 ساعات مع المشاهدة',
      highlightLabel: 'أبرز ما في اليوم',
      highlight: 'غداء يطلّ على السهول',
      stay: {
        label: 'مكان الإقامة · ثلاث ليالٍ',
        name: 'كوبو كوبو تنتد لودج',
        gallery: 'kubu-kubu-tented-lodge',
        description: 'نُزل خيمي داخل المحمية يطلّ على السهول.',
        photo: lanternDinner,
      },
    },
    {
      title: 'يوم كامل في السيرينغيتي',
      body: 'جولتا مشاهدة في الساعات التي تنشط فيها الحيوانات، من 6:00 إلى 12:00 ومن 16:00 إلى 18:00، والتركيز فيهما على الأسود والفهود والنمور. وبينهما غداء ساخن وراحة في النُّزل.',
      meals: 'الفطور، الغداء، العشاء',
      road: 'جولات مشاهدة فقط',
      highlightLabel: 'اختياري',
      highlight: 'رحلة منطاد عند الشروق فوق السهول',
      note: 'الليلة الثانية في كوبو كوبو تنتد لودج.',
    },
    {
      title: 'في أثر القطعان',
      body: 'جولة أطول مع غداء في البرية، إلى حيث يتوقّع مرشدك أفضل المشاهدات ذلك الأسبوع: قطعان الهجرة، أو صخرة تستريح عليها الأسود، أو عبور الأنهار في موسمه. الليلة الثالثة في كوبو كوبو.',
      meals: 'الفطور، غداء خفيف في الطريق، العشاء',
      road: 'جولات مشاهدة فقط',
      highlightLabel: 'أبرز ما في اليوم',
      highlight: 'حيثما تكون القطعان ذلك الأسبوع',
    },
    {
      title: 'الطيران إلى زنجبار',
      body: 'مسافة قصيرة إلى مدرج سيرونيرا ورحلة بطائرة صغيرة إلى زنجبار، والسهول تتحوّل تحتك إلى ساحل. يأخذك سائق إلى ستون تاون، والمساء لك لتتجوّل في أزقّتها القديمة وعلى واجهتها البحرية.',
      meals: 'الفطور',
      road: 'طيران 2.5 ساعة، و20 دقيقة بالسيارة',
      highlightLabel: 'أبرز ما في اليوم',
      highlight: 'السيرينغيتي من الجو',
      stay: {
        label: 'مكان الإقامة',
        name: 'فندق بوتيك، ستون تاون',
        gallery: 'spice-tree',
        description: 'بيت قديم مرمّم في المدينة القديمة، مثل سبايس تري باي توراكو.',
        photo: beachBanda,
      },
    },
    {
      title: 'ستون تاون، ثم الساحل',
      body: 'جولة صباحية مع مرشد في ستون تاون: الأبواب المنحوتة، والقصور العُمانية القديمة، وأكشاك التوابل والأزقة الضيقة بينها. بعد الغداء تتجه إلى ماتيموي على الساحل الشمالي الشرقي الهادئ.',
      meals: 'الفطور',
      road: 'نحو ساعة و15 دقيقة',
      highlightLabel: 'أبرز ما في اليوم',
      highlight: 'القصور العُمانية والأبواب المنحوتة',
      stay: {
        label: 'مكان الإقامة · ثلاث ليالٍ',
        name: 'صن رايز آت باندَس',
        description: 'إقامة على شاطئ الساحل الشمالي الشرقي لزنجبار، مقابل جزيرة منيمبا.',
        photo: seaViewRoom,
      },
    },
    {
      title: 'جزيرة منيمبا',
      body: 'رحلة قارب صباحية من الشاطئ للغطس السطحي حول شعاب منيمبا، المعروفة بمياهها الصافية وأسماكها الملوّنة، وكثيرًا ما تُرى الدلافين في الطريق. وبقية اليوم لك.',
      meals: 'الفطور',
      road: 'رحلة القارب فقط',
      highlightLabel: 'أبرز ما في اليوم',
      highlight: 'الدلافين في الطريق إلى الشعاب',
      note: 'الليلة الثانية في صن رايز آت باندَس.',
    },
    {
      title: 'يوم على البحر',
      body: 'يوم بلا برنامج. الشاطئ والمسبح والبحر لك طوال اليوم.',
      meals: 'الفطور',
      road: 'لا تنقّل',
      highlightLabel: 'اختياري',
      highlight: 'زيارة مزرعة توابل مع درس طبخ',
    },
    {
      title: 'المغادرة',
      body: 'صباح أخير على البحر قبل توصيلك الخاص إلى مطار زنجبار.',
      meals: 'الفطور',
      road: 'نحو ساعة و15 دقيقة',
      highlightLabel: 'أبرز ما في اليوم',
      highlight: 'سباحة أخيرة قبل وصول السيارة',
    },
  ],
  coversIntro:
    'السيارة والمرشد ورسوم المحميات والوجبات الكاملة في السفاري، كلها في سعر واحد، فما تخطّط له هو ما تدفعه.',
  included: [
    'سيارة دفع رباعي خاصة مع مرشد يتولّى القيادة، طوال أيام السفاري السبعة',
    'جميع رسوم المحميات ومناطق الحماية، بما فيها النزول إلى فوهة نغورونغورو',
    '11 ليلة في النُّزل المذكورة أو ما يماثلها مستوى',
    'وجبات كاملة في السفاري، وفطور يومي في زنجبار',
    'رحلة الطيران الصغيرة إلى زنجبار، وجميع التنقّلات الخاصة',
    'جولة مشي في ستون تاون، وغطس سطحي في جزيرة منيمبا',
    'مياه شرب في السيارة، وقارورة قابلة لإعادة الاستخدام لكل مسافر',
    'تغطية الإخلاء الطبي من Flying Doctors، ودعم عبر واتساب طوال الرحلة',
  ],
  excluded: [
    'الطيران الدولي وتأشيرة تنزانيا',
    'تأمين السفر والإلغاء',
    'الغداء والعشاء في زنجبار',
    'المشروبات الغازية والمصاريف الشخصية في النُّزل',
    'الإكراميات: نحو 10–15 دولارًا يوميًا للمرشد، و5 دولارات لطاقم النُّزل',
    'رحلة المنطاد وزيارة مزرعة التوابل، وكلتاهما اختيارية',
  ],
  know: [
    {
      title: 'أفضل وقت للسفر',
      sub: 'يونيو–أكتوبر · يناير–فبراير',
      body: 'موسم جاف في البرّ والجزيرة، ويتزامن مع الإجازة الصيفية. أما موسم الأمطار الطويلة في زنجبار فمن مارس إلى مايو.',
    },
    {
      title: 'الطقس',
      sub: '17–22°م في السفاري · 25–28°م في زنجبار',
      body: 'الصباح الباكر بارد في السفاري، فخذ معك طبقة دافئة لجولات المشاهدة المبكرة.',
    },
    {
      title: 'على الطريق',
      sub: 'المسار كله برًّا',
      body: 'خمسة من أيام السفاري فيها تنقّل بالسيارة، نقسّمها بالمشاهدات والتوقّفات، والسيارة لك وحدك.',
    },
    {
      title: 'الطائرة الصغيرة',
      sub: 'حقائب ليّنة، نحو 15 كغ للشخص',
      body: 'رحلة السيرينغيتي إلى زنجبار تقبل الحقائب الليّنة فقط. نؤكّد الوزن المسموح عند الحجز.',
    },
    knowFlightsAr,
    knowHealthAr,
  ],
  extras: [
    { day: 'اليوم 6', title: 'رحلة منطاد عند الشروق فوق السيرينغيتي', duration: 'ساعة واحدة، فجرًا' },
    { day: 'اليوم 11', title: 'زيارة مزرعة توابل مع درس طبخ', duration: 'نصف يوم' },
  ],
};

const slowAr: Itinerary = {
  slug: 'slow-safari',
  name: 'السفاري الهادئة',
  heroImage: familyGuide,
  cardImage: zanzibarDeck,
  card: {
    eyebrow: 'تنزانيا وزنجبار · للعائلات',
    meta: 'أربع محطات، أربعة تنقّلات',
    description:
      'تصل وترتاح، ثم تبدأ السفاري من باب النُّزل. منتزه أروشا الوطني، ونغورونغورو من كاراتو، وثلاث ليالٍ في السيرينغيتي، ثم أربع على الشاطئ.',
  },
  heroLine:
    'تصل وترتاح، ثم تبدأ السفاري من باب النُّزل. أربع محطات وأربعة تنقّلات فقط في اثني عشر يومًا، وأطول إقامة في النهاية على الشاطئ.',
  overview: {
    heading: 'أربع محطات، أربعة تنقّلات، وأطول إقامة على الشاطئ.',
    paragraphs: [
      'ليلتان داخل منتزه أروشا الوطني على بُعد ساعة من المطار، وليلتان في كاراتو لزيارة فوهة نغورونغورو، وثلاث في وسط السيرينغيتي، ثم أربع في نُزل واحد على شاطئ زنجبار. وفي معظم الأيام تستيقظ في المكان الذي بتّ فيه.',
      'صُمّمت للعائلات: الأنشطة تبدأ من باب النُّزل، والطعام الحلال متّفق عليه مسبقًا مع كل مطبخ، وجولات المشاهدة تترك منتصف النهار حرًّا للصلاة والراحة.',
    ],
    facts: [
      ['المسار', 'منتزه أروشا · كاراتو · نغورونغورو · السيرينغيتي · زنجبار'],
      ['أفضل الأشهر', 'من يونيو إلى أكتوبر، ويناير وفبراير'],
      ['أسلوب الرحلة', 'أربع محطات، وأربعة تنقّلات فقط'],
      ['الوصول', 'الوصول إلى كليمنجارو (JRO) والمغادرة من زنجبار (ZNZ)'],
      ['تناسب', 'العائلات التي تفضّل الاستقرار والراحة'],
    ],
  },
  rail: railAr,
  route: {
    intro: 'أربعة تنقّلات فقط: نحو ساعة، ونحو أربع ساعات، وجولة مشاهدة طويلة إلى السيرينغيتي، ورحلة طيران واحدة.',
    stops: [
      { days: 'اليوم 1–2', place: 'منتزه أروشا', note: 'راحة، ثم السفاري من باب النُّزل' },
      { days: 'اليوم 3–4', place: 'كاراتو', note: 'جولة في القرية، ثم الفوهة' },
      { days: 'اليوم 5–7', place: 'السيرينغيتي', note: 'ثلاث ليالٍ في السهول' },
      { days: 'اليوم 8–12', place: 'ماتيموي', note: 'أربع ليالٍ على الشاطئ' },
    ],
  },
  days: [
    {
      title: 'الوصول والراحة',
      body: 'يستقبلك مرشدك في مطار كليمنجارو ويوصلك في نحو ساعة إلى نُزل داخل منتزه أروشا الوطني عند سفح جبل ميرو. لا شيء آخر في البرنامج: طعام طيب ونوم هانئ وراحة من عناء السفر.',
      meals: 'الغداء، العشاء',
      road: 'التنقّل 1 من 4: نحو ساعة',
      highlightLabel: 'أبرز ما في اليوم',
      highlight: 'لا شيء سوى الراحة',
      stay: {
        label: 'مكان الإقامة · ليلتان',
        name: 'هاتاري لودج',
        gallery: 'hatari-lodge',
        description: 'من النُّزل القليلة داخل منتزه أروشا الوطني. ويمكن وصل الأجنحة لتصبح فللًا خاصة للعائلات.',
        photo: stayGarden,
      },
    },
    {
      title: 'أول سفاري، من باب النُّزل',
      body: 'جولة مشاهدة صباحية بين الزرافات والجواميس والحمر الوحشية وقرود الكولوبس، مع طيور النحام على بحيرات موميلا في موسمها. ثم عودة للغداء والراحة، وبعدها تجديف على البحيرات أو مشي مع حارس المنتزه.',
      meals: 'الفطور، الغداء، العشاء',
      road: 'جولة مشاهدة فقط',
      highlightLabel: 'أبرز ما في اليوم',
      highlight: 'التجديف على بحيرات موميلا',
      note: 'الليلة الثانية في هاتاري لودج.',
    },
    {
      title: 'إلى كاراتو، مع توقّف في القرية',
      body: 'بعد الفطور تتجه غربًا إلى مرتفعات كاراتو. في منتصف الطريق، في مْتو وا مْبو، تتجوّل بين مزارع الموز برفقة مزارع من أهل المنطقة، وتتوقّف للغداء. تصل إلى النُّزل بعد الظهر ولديك وقت للراحة.',
      meals: 'الفطور، الغداء، العشاء',
      road: 'التنقّل 2 من 4: نحو 4 ساعات',
      highlightLabel: 'أبرز ما في اليوم',
      highlight: 'جولة في مزارع الموز في مْتو وا مْبو',
      stay: {
        label: 'مكان الإقامة · ليلتان',
        name: 'نغورونغورو فارم هاوس',
        gallery: 'ngorongoro-farm-house',
        description: 'جناح في مزرعة بن منتجة، على مسافة قصيرة من بوابة الفوهة.',
        photo: stayFarmhouse,
      },
    },
    {
      title: 'فوهة نغورونغورو',
      body: 'رحلة ليوم واحد تنطلق من النُّزل. تصعد إلى حافة الفوهة وتنزل 600 متر إلى قاعها، حيث تعيش الأسود والفيلة والجواميس ووحيد القرن الأسود في مساحة محدودة تكفيك زيارة واحدة لاستكشافها. تقضي في القاع ما يصل إلى ست ساعات، ثم تعود إلى النُّزل نفسه.',
      meals: 'الفطور، غداء خفيف في الطريق، العشاء',
      road: 'رحلة يوم، نحو ساعة في كل اتجاه',
      highlightLabel: 'أبرز ما في اليوم',
      highlight: 'وحيد القرن الأسود في قاع الفوهة',
      note: 'الليلة الثانية في نغورونغورو فارم هاوس.',
    },
    {
      title: 'إلى السيرينغيتي',
      body: 'اليوم الطويل الوحيد على الطريق، ومعظمه جولة مشاهدة. تعبر مرتفعات نغورونغورو وتدخل من بوابة نابي هيل مع غداء يطلّ على السهول، ثم تشاهد الحيوانات في الطريق إلى نُزلك في قلب المحمية.',
      meals: 'الفطور، غداء خفيف في الطريق، العشاء',
      road: 'التنقّل 3 من 4: نحو 4.5 ساعات',
      highlightLabel: 'أبرز ما في اليوم',
      highlight: 'غداء يطلّ على السهول',
      stay: {
        label: 'مكان الإقامة · ثلاث ليالٍ',
        name: 'كوبو كوبو تنتد لودج',
        gallery: 'kubu-kubu-tented-lodge',
        description: 'نُزل خيمي داخل المحمية يطلّ على السهول.',
        photo: lanternDinner,
      },
    },
    {
      title: 'يوم كامل في السيرينغيتي',
      body: 'جولتا مشاهدة من النُّزل في الساعات التي تنشط فيها الحيوانات، من 6:00 إلى 12:00 ومن 16:00 إلى 18:00، والتركيز فيهما على الأسود والفهود والنمور. وبينهما غداء وراحة في النُّزل.',
      meals: 'الفطور، الغداء، العشاء',
      road: 'جولات مشاهدة فقط',
      highlightLabel: 'أبرز ما في اليوم',
      highlight: 'الأسود والفهود والنمور',
      note: 'الليلة الثانية في كوبو كوبو تنتد لودج.',
    },
    {
      title: 'السيرينغيتي على راحتك',
      body: 'لا حاجة إلى حزم الحقائب اليوم. اختر جولة طويلة مع غداء في البرية حيث تكون القطعان، أو جولة صباحية واحدة ثم عصرًا هادئًا في النُّزل. الليلة الثالثة في كوبو كوبو.',
      meals: 'الفطور، الغداء، العشاء',
      road: 'جولات مشاهدة فقط',
      highlightLabel: 'اختياري',
      highlight: 'رحلة منطاد عند الشروق فوق السهول',
    },
    {
      title: 'الطيران إلى الشاطئ',
      body: 'مسافة قصيرة إلى مدرج سيرونيرا ورحلة بطائرة صغيرة إلى زنجبار. يأخذك سائق مباشرة إلى ماتيموي على الساحل الشمالي الشرقي الهادئ، حيث تبقى حتى موعد عودتك.',
      meals: 'الفطور',
      road: 'التنقّل 4 من 4: طيران، ثم ساعة و15 دقيقة',
      highlightLabel: 'أبرز ما في اليوم',
      highlight: 'السيرينغيتي من الجو',
      stay: {
        label: 'مكان الإقامة · أربع ليالٍ',
        name: 'صن رايز آت باندَس',
        description: 'إقامة على شاطئ الساحل الشمالي الشرقي لزنجبار، مقابل جزيرة منيمبا.',
        photo: seaViewRoom,
      },
    },
    {
      title: 'جزيرة منيمبا',
      body: 'رحلة قارب صباحية من الشاطئ للغطس السطحي حول شعاب منيمبا، المعروفة بمياهها الصافية وأسماكها الملوّنة، وكثيرًا ما تُرى الدلافين في الطريق. وبقية اليوم لك.',
      meals: 'الفطور',
      road: 'رحلة قارب من الشاطئ',
      highlightLabel: 'أبرز ما في اليوم',
      highlight: 'الدلافين في الطريق إلى الشعاب',
      note: 'الليلة الثانية في صن رايز آت باندَس.',
    },
    {
      title: 'يوم على البحر',
      body: 'يوم بلا برنامج. الشاطئ والمسبح والبحر لك طوال اليوم.',
      meals: 'الفطور',
      road: 'لا تنقّل',
      highlightLabel: 'اختياري',
      highlight: 'زيارة مزرعة توابل مع درس طبخ',
    },
    {
      title: 'يوم آخر على البحر',
      body: 'يوم ثانٍ بلا برنامج في النُّزل نفسه، لترتاح قبل رحلة العودة.',
      meals: 'الفطور',
      road: 'لا تنقّل',
      highlightLabel: 'اختياري',
      highlight: 'نصف يوم في ستون تاون مع مرشد',
    },
    {
      title: 'المغادرة',
      body: 'صباح أخير على البحر قبل توصيلك الخاص إلى مطار زنجبار.',
      meals: 'الفطور',
      road: 'نحو ساعة و15 دقيقة',
      highlightLabel: 'أبرز ما في اليوم',
      highlight: 'سباحة أخيرة قبل وصول السيارة',
    },
  ],
  coversIntro: classicAr.coversIntro,
  included: [
    'سيارة دفع رباعي خاصة مع مرشد يتولّى القيادة، طوال أيام السفاري السبعة',
    'جميع رسوم المحميات ومناطق الحماية، بما فيها النزول إلى فوهة نغورونغورو',
    '11 ليلة في النُّزل المذكورة أو ما يماثلها مستوى',
    'وجبات كاملة في السفاري، وفطور يومي في زنجبار',
    'رحلة الطيران الصغيرة إلى زنجبار، والتوصيل من المطار إلى الشاطئ',
    'التجديف أو المشي مع حارس في منتزه أروشا الوطني',
    'جولة مزارع الموز في مْتو وا مْبو، وغطس سطحي في جزيرة منيمبا',
    'تغطية الإخلاء الطبي من Flying Doctors، ودعم عبر واتساب طوال الرحلة',
  ],
  excluded: [
    'الطيران الدولي وتأشيرة تنزانيا',
    'تأمين السفر والإلغاء',
    'الغداء والعشاء في زنجبار',
    'المشروبات الغازية والمصاريف الشخصية في النُّزل',
    'الإكراميات: نحو 10–15 دولارًا يوميًا للمرشد، و5 دولارات لطاقم النُّزل',
    'رحلة المنطاد ومزرعة التوابل ونصف يوم في ستون تاون، وكلها اختيارية',
  ],
  know: [
    {
      title: 'كم ستتنقّل',
      sub: 'أربعة تنقّلات في اثني عشر يومًا',
      body: 'نحو ساعة، ونحو 4 ساعات، ونحو 4.5 ساعات معظمها مشاهدة، ورحلة طيران واحدة. أما رحلة تنزانيا الكلاسيكية ففيها ستة تنقّلات.',
    },
    {
      title: 'لا تحبّذ يومًا طويلًا في السيارة؟',
      sub: 'سافر جوًّا من بحيرة مانيارا',
      body: 'يمكن استبدال الطريق من كاراتو إلى السيرينغيتي برحلة طيران صغيرة بتكلفة إضافية. اسألنا عند طلب عرض السعر.',
    },
    {
      title: 'أفضل وقت للسفر',
      sub: 'يونيو–أكتوبر · يناير–فبراير',
      body: 'موسم جاف في البرّ والجزيرة، ويتزامن مع الإجازة الصيفية. ويناير وفبراير خيار جيد آخر.',
    },
    {
      title: 'الطائرة الصغيرة',
      sub: 'حقائب ليّنة، نحو 15 كغ للشخص',
      body: 'رحلة زنجبار تقبل الحقائب الليّنة فقط. نؤكّد الوزن المسموح عند الحجز.',
    },
    knowFlightsAr,
    knowHealthAr,
  ],
  extras: [
    { day: 'اليوم 7', title: 'رحلة منطاد عند الشروق فوق السيرينغيتي', duration: 'ساعة واحدة، فجرًا' },
    { day: 'اليوم 10', title: 'زيارة مزرعة توابل مع درس طبخ', duration: 'نصف يوم' },
    { day: 'اليوم 11', title: 'نصف يوم في ستون تاون مع مرشد', duration: 'صباحًا أو مساءً' },
  ],
};

export const itineraries: Record<Locale, Itinerary[]> = {
  en: [classicEn, slowEn],
  ar: [classicAr, slowAr],
};

export const getItinerary = (locale: Locale, slug: ItinerarySlug) =>
  itineraries[locale].find((i) => i.slug === slug)!;
