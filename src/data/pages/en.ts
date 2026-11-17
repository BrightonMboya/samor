import type { InfoPage } from './types';

/*
 * English copy for the info pages linked from the footer and the About Us menu.
 * Adapted from the Polecat Safaris site (../polycate) and rewritten for Samur:
 * Tanzania and Zanzibar only, private trips planned on WhatsApp, Saudi families
 * and couples. No Kilimanjaro, no prices we have not been given, nothing with alcohol.
 *
 * TODO(client): confirm the prayer-time and halal notes, the child age limits and the
 * visa advice for Saudi passports before launch.
 */
export const en: Record<string, InfoPage> = {
  about: {
    slug: 'about',
    eyebrow: 'About us',
    title: 'Private safaris, planned in Arusha by the people who guide them',
    lead: [
      'Samur plans private journeys through northern Tanzania and Zanzibar. We work from Njiro, in Arusha, the town every northern safari starts from, and we arrange every detail ourselves: the lodges, the guide, the vehicle and the pace of each day.',
      'You plan with one person, in Arabic or English, on WhatsApp. The same planner stays with you from the first message to the last airstrip.',
    ],
    image: 'our-story',
    sections: [
      {
        id: 'story',
        jump: 'Our story',
        eyebrow: 'Our story',
        heading: 'Our story starts in Arusha, not in a brochure',
        blocks: [
          {
            type: 'text',
            body: [
              'Being in Arusha means we know the circuit as it is this week, not as it was described in last season’s brochure: which gates open earliest, how the crater roads are running, where the herds have moved and which lodges are at their best. That knowledge shapes every day we write for you.',
              'Our trips are paced the way a safari ought to be. Tarangire in the soft early light. A full day on the crater floor rather than a hurried morning. Three nights in the Serengeti, so there is time to watch rather than simply pass through. Then the coast, and nothing planned at all.',
              'Every trip is private: your own guide, your own vehicle, your own rhythm. It is the only way a guide can stay two hours at a leopard sighting because your children asked to, or start late on the morning everyone needed to sleep.',
            ],
          },
        ],
      },
      {
        id: 'how',
        jump: 'How we work',
        eyebrow: 'How we work',
        heading: 'How we work: three things we hold to on every trip',
        blocks: [
          {
            type: 'cards',
            items: [
              {
                heading: 'Only private',
                body: 'One vehicle, one guide and your family. The days, the lodges and the pace are shaped around you, before you travel and on the morning itself.',
              },
              {
                heading: 'Deep, not wide',
                body: 'Northern Tanzania and Zanzibar, and nowhere else. Every park, camp and lodge on our trips is one our team works in week after week.',
              },
              {
                heading: 'Our own guides',
                body: 'Guides are the heart of a safari, and guests remember them by name. Ours are chosen for their knowledge, their warmth and their patience with children, and never subcontracted.',
              },
            ],
          },
        ],
      },
      {
        id: 'conservation',
        jump: 'Conservation',
        eyebrow: 'Conservation',
        heading: 'Conservation: every trip pays for the land it crosses',
        image: 'rangers',
        blocks: [
          {
            type: 'text',
            body: [
              'The parks and conservancies you drive through are kept wild by the fees visitors pay. Every trip carries a conservation fee that we do not mark up, paid straight to the conservancy.',
              'If you would like to see the work for yourself, we can add a day with the rangers to any trip: out on patrol in the morning, and time to ask them anything in the afternoon.',
            ],
          },
        ],
      },
    ],
    closing: {
      heading: 'Tell us the month, and roughly what you’re hoping for.',
      body: 'That is all we need to start. Your planner replies within twelve hours.',
    },
  },

  'travel-information': {
    slug: 'travel-information',
    eyebrow: 'Travel information',
    title: 'Everything to know before you travel',
    lead: [
      'A safari should feel effortless. This guide covers the practical side of a trip with us: when to go, visas and health, what to pack, travelling with children, and the questions families ask us first.',
      'Anything it does not answer, ask your planner on WhatsApp.',
    ],
    image: 'crater-plains',
    sections: [
      {
        id: 'seasons',
        jump: 'When to travel',
        eyebrow: 'When to travel',
        heading: 'When to travel, season by season',
        standfirst:
          'Tanzania is a year-round safari destination. The season you choose changes the trip more than anything else you will decide.',
        blocks: [
          {
            type: 'cards',
            items: [
              {
                heading: 'December – March',
                body: 'Warm and green, with excellent wildlife viewing. It includes the calving season in the southern Serengeti, when thousands of young are born in a few weeks.',
              },
              {
                heading: 'April – May',
                body: 'The long rains. The landscape is at its most lush and there are far fewer visitors. Rainfall varies a lot from year to year, and some camps close.',
              },
              {
                heading: 'June – October',
                body: 'The main dry season: clear skies, short grass and the animals gathered near water. It is also the peak for the migration in the northern Serengeti, and the busiest time to book.',
              },
              {
                heading: 'November – early December',
                body: 'The short rains refresh the landscape. Wildlife stays, visitor numbers fall, and the skies are some of the best of the year.',
              },
            ],
          },
          {
            type: 'table',
            label: 'Average temperatures',
            columns: ['Months', 'Daytime', 'Night'],
            rows: [
              ['January – March', 'Around 28°C', 'Around 14°C'],
              ['April – June', 'Around 23°C', 'Around 12–14°C'],
              ['July – September', 'Around 25°C', 'Around 12°C'],
              ['October – December', 'Around 27°C', 'Around 14°C'],
            ],
          },
          {
            type: 'note',
            label: 'Summer holidays',
            body: 'June to August is dry season in Tanzania, so school summer holidays are an excellent time for a family safari. Mornings on the crater rim are cold, around 8°C, so pack a warm layer for everyone.',
          },
        ],
      },
      {
        id: 'visas',
        jump: 'Visas & health',
        eyebrow: 'Visas & health',
        heading: 'Visas, vaccines and insurance',
        standfirst:
          'Where an answer depends on your nationality or your doctor, we say so rather than answer for them.',
        blocks: [
          {
            type: 'faq',
            items: [
              {
                q: 'Do I need a visa?',
                a: [
                  'Most nationalities, including Saudi citizens, need a visa for Tanzania. We recommend applying online through the official Tanzania immigration e-visa site before you travel, as early as possible.',
                  'Your passport needs at least six months’ validity and blank pages for immigration. We can guide you through the process, but approval and entry are decisions for the Tanzanian authorities.',
                ],
              },
              {
                q: 'Will I need a yellow fever certificate?',
                a: [
                  'It depends on your route. If you are travelling from, or have transited for some time through, a country with yellow fever transmission, you may be asked for a valid certificate on arrival. Requirements change, so check the latest official guidance before you fly.',
                ],
              },
              {
                q: 'Do we need to take anything for malaria?',
                a: [
                  'Malaria occurs in Tanzania, and the right prevention depends on each person, especially for children. Speak to a travel-health clinic well before you fly, and keep any medication in your hand luggage.',
                ],
              },
              {
                q: 'What should our travel insurance cover?',
                a: [
                  'We ask every guest to hold comprehensive cover from the day they book. Check that it includes the activities on your trip, such as balloon flights and walking safaris.',
                ],
                list: [
                  'Medical treatment',
                  'Emergency evacuation',
                  'Trip cancellation or interruption',
                  'Lost or delayed luggage',
                ],
              },
              {
                q: 'Is there a separate insurance rule for Zanzibar?',
                a: [
                  'Zanzibar has its own entry insurance requirement, and the rules have changed more than once. We tell you what applies to your trip in your final travel documents.',
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'what-to-pack',
        jump: 'What to pack',
        eyebrow: 'What to pack',
        heading: 'What to pack, and why less is better',
        standfirst: 'Most lodges do laundry, so a small, well-chosen wardrobe is all you need.',
        blocks: [
          {
            type: 'list',
            label: 'Luggage',
            items: [
              'One soft-sided bag per person. Hard suitcases do not fit light aircraft or safari vehicles.',
              'Around 15 kg per person, including hand luggage, on the flight between the Serengeti and Zanzibar.',
              'A small daypack for the vehicle: passport, medication, sunglasses, camera, water bottle and a warm layer.',
            ],
          },
          {
            type: 'list',
            label: 'Clothing',
            columns: 2,
            items: [
              'Light trousers and long-sleeved shirts',
              'A fleece or sweater for early mornings',
              'A light rain jacket',
              'Comfortable closed walking shoes',
              'Sandals for the lodge and the beach',
              'A wide-brimmed hat for everyone',
              'Swimwear for the pool and the sea',
              'A scarf or shawl',
            ],
          },
          {
            type: 'text',
            body: [
              'Khaki, beige, olive, brown and soft grey work best in the bush. Avoid very bright colours, and leave camouflage-pattern clothing at home: it is associated with the military in Tanzania.',
            ],
          },
          {
            type: 'note',
            label: 'In Zanzibar',
            body: 'Zanzibar is a predominantly Muslim island. In Stone Town and the villages, shoulders and knees are covered, and swimwear is kept to the beach and the pool.',
          },
          {
            type: 'list',
            label: 'Worth bringing',
            columns: 2,
            items: [
              'Binoculars, one pair per person if you can',
              'Sunscreen and lip balm with SPF',
              'Insect repellent',
              'Camera, spare batteries and memory cards',
              'Power bank and universal adapter',
              'A refillable water bottle',
              'Prescription medication, in your hand luggage',
              'A small first-aid kit',
            ],
          },
        ],
      },
      {
        id: 'kids',
        jump: 'Travelling with kids',
        eyebrow: 'Travelling with kids',
        heading: 'Travelling with kids, at their pace',
        image: 'family-guide',
        standfirst:
          'Most of the families we plan for travel with children. A private trip is the easiest way to do it, because nothing runs to anyone else’s timetable.',
        blocks: [
          {
            type: 'text',
            body: [
              'With your own vehicle and guide, you stop when someone needs to, go back to the lodge for a rest in the middle of the day, and stay with the elephants for as long as the children want to watch them. Our Slow Safari is written for families: fewer moves, shorter drives, and more nights in each place.',
            ],
          },
          {
            type: 'list',
            label: 'Good to know',
            items: [
              'We choose family rooms or connecting tents, and lodges with a pool where we can.',
              'Most balloon operators take children from about seven years old.',
              'Walking safaris in big-game areas are usually for ages eight and up; gentler nature walks can take younger children.',
              'Long drives are broken up with picnic stops, and your guide carries snacks and water.',
              'Tell us about meals, including halal and children’s food, and we confirm each lodge in writing.',
            ],
          },
          {
            type: 'note',
            label: 'Health',
            body: 'Ask your travel-health clinic about malaria prevention and vaccines for each child, well before you fly.',
          },
        ],
      },
      {
        id: 'faqs',
        jump: 'FAQs',
        eyebrow: 'FAQs',
        heading: 'FAQs: what families ask us first',
        blocks: [
          {
            type: 'faq',
            items: [
              {
                q: 'Can the days be planned around prayer times?',
                a: [
                  'Yes. Tell your planner, and your guide will plan stops around prayer times. Many lodges can also set aside a quiet space.',
                ],
              },
              {
                q: 'Is halal food available?',
                a: [
                  'Many lodges can prepare halal meals with notice. Tell us when you plan, and we confirm it with each lodge in writing before you book.',
                ],
              },
              {
                q: 'What money should we bring?',
                a: [
                  'The currency is the Tanzanian shilling, and US dollars are widely used in tourism. Cards work at most lodges. Bring some recent, undamaged small US dollar notes for tips and small purchases; old or torn notes are often refused.',
                ],
              },
              {
                q: 'How does tipping work?',
                a: [
                  'Tipping is not compulsory, but it is customary for good service. Your planner can give you current guidance for your guide and the lodge teams.',
                ],
              },
              {
                q: 'Can I bring a drone?',
                a: [
                  'Not without the right permits. Drone rules in Tanzania are strict, so ask us before you pack one.',
                ],
              },
              {
                q: 'Will we have phone signal and Wi-Fi?',
                a: [
                  'Often, but not everywhere. Most lodges have Wi-Fi, and coverage is patchy in remote areas. Your planner can always be reached through your guide.',
                ],
              },
              {
                q: 'How do we get over the jet lag?',
                a: [
                  'Tanzania is on East Africa Time (GMT+3), the same as Riyadh, so for most of our guests there is none. From further away, drink plenty of water on the flight, get outside in daylight when you land, and keep the first afternoon free.',
                ],
              },
            ],
          },
        ],
      },
    ],
    closing: {
      heading: 'Travel light. Travel comfortably. Leave room for Tanzania.',
      body: 'Anything this page did not answer, your planner will, usually within the hour.',
    },
  },

  'cost-breakdown': {
    slug: 'cost-breakdown',
    eyebrow: 'Cost breakdown',
    title: 'What your trip costs, and what it covers',
    lead: [
      'Every Samur trip is private and priced per person sharing: your own vehicle, your own guide and your own pace. Park fees, lodges, meals on safari and transfers are already in the figure, so the price you plan around is the price you pay.',
      'Rates move with the season and with which lodges have space on your dates, so we quote each trip in writing for your dates and your family. You pay nothing to see a plan.',
    ],
    image: 'lantern-dinner',
    sections: [
      {
        id: 'pricing',
        jump: 'How pricing works',
        eyebrow: 'How pricing works',
        heading: 'How pricing works, and what moves it',
        blocks: [
          {
            type: 'cards',
            items: [
              {
                heading: 'The season',
                body: 'June to October and the December holidays are peak season. April and May are the quietest and the best value.',
              },
              {
                heading: 'The lodges',
                body: 'Accommodation is the largest part of the cost. We can suggest a lodge one step up or down at every stop.',
              },
              {
                heading: 'Your group',
                body: 'A private vehicle costs the same for two people or six, so the price per person falls as your group grows.',
              },
            ],
          },
          {
            type: 'note',
            label: 'Before you pay',
            body: 'Your final price is confirmed in writing with your itinerary. Nothing is booked until you say yes.',
          },
        ],
      },
    ],
    closing: {
      heading: 'Want a figure for your dates?',
      body: 'Send us the month and who is travelling. Your planner replies with a written quote within twelve hours.',
    },
  },

  'safari-add-ons': {
    slug: 'safari-add-ons',
    eyebrow: 'Safari add-ons',
    title: 'The extras worth adding',
    lead: [
      'Each of these fits into a day already on our itineraries. Add any of them when you ask for your quote, and your planner will tell you which day suits it best.',
    ],
    image: 'tree-lion-vehicle',
    sections: [
      {
        id: 'balloon',
        jump: 'Balloon safari',
        heading: 'Sunrise balloon safari',
        standfirst: 'An hour over the Serengeti at dawn, then breakfast in the bush.',
        image: 'migration-walk',
        blocks: [
          {
            type: 'text',
            body: [
              'You are collected from your lodge before five and driven to the launch site, where the balloon is filled in the dark. You lift off around half past six and fly for 45 to 60 minutes: low over the treetops for the animals, then high for the scale of the plains. You land somewhere in the open and are driven to a breakfast laid out under the trees.',
              'Baskets are shared, usually by eight to sixteen people. Peak-season flights sell out, so it is the one extra worth booking early.',
            ],
          },
          {
            type: 'meta',
            items: [
              ['Where', 'Central Serengeti, or Ndutu in the calving season'],
              ['Best time', 'June – October, and December – March'],
              ['Ages', 'Usually from seven years old'],
              ['Price', 'On request'],
            ],
          },
        ],
      },
      {
        id: 'walking',
        jump: 'Walking safari',
        heading: 'Walking safari',
        standfirst: 'The same ground as the animals, on foot, with an armed ranger.',
        blocks: [
          {
            type: 'text',
            body: [
              'A walking safari is slow on purpose. You stop for tracks, for a medicinal plant, for the small things nobody sees from a vehicle, and you watch the big animals from a distance the ranger chooses. Expect two to three hours on uneven ground.',
            ],
          },
          {
            type: 'meta',
            items: [
              ['Where', 'Arusha National Park, Ngorongoro highlands, Tarangire'],
              ['Best time', 'Dry season, when the grass is short'],
              ['Ages', 'Usually eight and up in big-game areas'],
              ['Price', 'On request'],
            ],
          },
        ],
      },
      {
        id: 'bush-breakfast',
        jump: 'Bush breakfast',
        heading: 'Bush breakfast',
        standfirst: 'A table laid in the open, found at the end of an early game drive.',
        blocks: [
          {
            type: 'text',
            body: [
              'You go out for the early drive, round a corner, and find a table set above a river or on a ridge over the plains. A cook makes eggs to order, with fruit, pastries, Tanzanian honey and coffee. Your guide stays with you, which is what lets you sit and eat slowly in the middle of a national park.',
            ],
          },
          {
            type: 'meta',
            items: [
              ['Where', 'Serengeti, Tarangire, the Ngorongoro crater rim'],
              ['Price', 'On request'],
            ],
          },
        ],
      },
      {
        id: 'sunset',
        jump: 'Sunset in the bush',
        heading: 'Sunset in the bush',
        standfirst: 'Chairs, a small fire and something to eat, at a spot your guide has picked.',
        image: 'cta-campfire',
        blocks: [
          {
            type: 'text',
            body: [
              'The afternoon drive ends somewhere chosen rather than convenient: a rocky kopje in the Serengeti, a bend in the Tarangire river, the crater rim as the floor falls into shadow. Waiting there are safari chairs, a small fire, fresh juices, tea and snacks. Ask us ahead and the same setting works for a birthday or an anniversary.',
            ],
          },
          {
            type: 'meta',
            items: [
              ['Where', 'Serengeti, Tarangire, the Ngorongoro crater rim'],
              ['Price', 'On request'],
            ],
          },
        ],
      },
      {
        id: 'olduvai',
        jump: 'Olduvai Gorge',
        heading: 'Olduvai Gorge',
        standfirst: 'One of the most important archaeological sites in the world, on the road you are already driving.',
        blocks: [
          {
            type: 'text',
            body: [
              'The road between Ngorongoro and the Serengeti passes the gorge where Louis and Mary Leakey worked for decades. The museum on the rim has real fossils and stone tools, and a short talk looking out over the gorge. It costs you about an hour, and it changes the scale of the landscape you spend the next week in.',
            ],
          },
          {
            type: 'meta',
            items: [
              ['Where', 'Between Ngorongoro and the Serengeti'],
              ['Price', 'Entry fee, on request'],
            ],
          },
        ],
      },
      {
        id: 'spice-farm',
        jump: 'Spice farm',
        heading: 'Spice farm visit with a cooking class',
        standfirst: 'Cloves, cinnamon and nutmeg straight from the tree, then lunch you cook yourselves.',
        blocks: [
          {
            type: 'text',
            body: [
              'Zanzibar’s spice farms grew the island’s fortune. A guide walks you through the plantation, cutting bark and fruit for you to smell and taste, and children are usually given woven hats and rings made from palm leaves. Afterwards a local cook shows you how to make a Zanzibari lunch with what you have picked.',
            ],
          },
          {
            type: 'meta',
            items: [
              ['Where', 'Zanzibar, inland from Stone Town'],
              ['Duration', 'Half day'],
              ['Price', 'On request'],
            ],
          },
        ],
      },
      {
        id: 'stone-town',
        jump: 'Stone Town',
        heading: 'Half day in Stone Town with a guide',
        standfirst: 'Carved doors, Omani palaces and the old market, with someone who grew up in the lanes.',
        image: 'dhow',
        blocks: [
          {
            type: 'text',
            body: [
              'Stone Town is a UNESCO World Heritage Site, and much of its history is shared with Oman and the Gulf. Your guide takes you through the narrow streets to the carved doors, the old palaces, the Darajani market and the waterfront, at a pace that suits the family.',
            ],
          },
          {
            type: 'meta',
            items: [
              ['Where', 'Stone Town, Zanzibar'],
              ['Duration', 'Morning or afternoon'],
              ['Price', 'On request'],
            ],
          },
        ],
      },
      {
        id: 'mnemba',
        jump: 'Mnemba Atoll',
        heading: 'Snorkelling at Mnemba Atoll',
        standfirst: 'Clear water, reef fish, and dolphins often seen on the way out.',
        blocks: [
          {
            type: 'text',
            body: [
              'A morning boat trip from the beach on the north-east coast to the reef around Mnemba Atoll. Masks, fins and life jackets are provided for all ages, and the crew stays with children in the water.',
            ],
          },
          {
            type: 'meta',
            items: [
              ['Where', 'North-east coast, Zanzibar'],
              ['Duration', 'Half day'],
              ['Price', 'On request'],
            ],
          },
        ],
      },
    ],
    closing: {
      heading: 'Not sure which to add?',
      body: 'Tell your planner who is travelling and what they love. They will suggest the two or three that fit.',
    },
  },
};

/** Labels the template and the cost page use. */
export const enUi = {
  onThisPage: 'On this page',
  plan: 'Plan my safari',
  whatsapp: 'WhatsApp a planner',
  includedIn: 'Included in',
  notIncluded: 'Not included',
  coversEyebrow: 'What the price covers',
  coversHeading: 'What every trip includes',
  coversJump: 'What’s included',
  extrasEyebrow: 'Optional extras',
  extrasHeading: 'Optional extras, added to days already on the itinerary',
  extrasJump: 'Optional extras',
  extrasLink: 'See all the add-ons',
  priceOnRequest: 'Price on request',
};
