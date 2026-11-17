import type { Locale } from '../../i18n/ui';
import { itineraries } from '../itineraries';
import { en, enUi } from './en';
import { ar, arUi } from './ar';
import type { InfoPage, InfoSection } from './types';

export type { InfoPage, InfoSection, Block, ImageKey } from './types';

const copy = { en, ar } as const;
export const infoUi = { en: enUi, ar: arUi } as const;

/** Slugs of the info pages, served at /<slug> (Arabic) and /en/<slug>. */
export const infoSlugs = Object.keys(en);

/**
 * The page for a slug. The cost breakdown also lists what each itinerary includes and
 * its optional extras, read from src/data/itineraries.ts so the two never disagree.
 */
export function getInfoPage(locale: Locale, slug: string): InfoPage {
  const page = copy[locale][slug];
  if (slug !== 'cost-breakdown') return page;

  const ui = infoUi[locale];
  const trips = itineraries[locale];
  const covers: InfoSection = {
    id: 'included',
    jump: ui.coversJump,
    eyebrow: ui.coversEyebrow,
    heading: ui.coversHeading,
    blocks: [
      ...trips.map((it) => ({ type: 'list' as const, label: `${ui.includedIn} ${it.name}`, items: it.included })),
      // Both trips exclude the same things; the last line of each is its optional extras,
      // which get their own section below.
      { type: 'list', label: ui.notIncluded, items: trips[0].excluded.slice(0, -1) },
    ],
  };
  const extraTitles = [...new Set(trips.flatMap((it) => it.extras.map((x) => x.title)))];
  const extras: InfoSection = {
    id: 'extras',
    jump: ui.extrasJump,
    eyebrow: ui.extrasEyebrow,
    heading: ui.extrasHeading,
    blocks: [
      { type: 'list', items: extraTitles },
      { type: 'link', label: ui.extrasLink, path: '/safari-add-ons' },
    ],
  };
  return { ...page, sections: [...page.sections, covers, extras] };
}
