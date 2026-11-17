/** Photographs the info pages can use, by file name in src/assets/images. */
export type ImageKey =
  | 'our-story'
  | 'guide-travellers'
  | 'rangers'
  | 'crater-plains'
  | 'family-guide'
  | 'lantern-dinner'
  | 'tree-lion-vehicle'
  | 'migration-walk'
  | 'cta-campfire'
  | 'dhow';

export type Block =
  | { type: 'text'; body: string[] }
  | { type: 'list'; label?: string; items: string[]; columns?: 1 | 2 }
  | { type: 'cards'; items: { heading: string; body: string }[] }
  | { type: 'note'; label: string; body: string }
  | { type: 'faq'; items: { q: string; a: string[]; list?: string[] }[] }
  | { type: 'table'; label: string; columns: string[]; rows: string[][] }
  /** Short label/value facts, e.g. Where · Best time · Price. */
  | { type: 'meta'; items: [string, string][] }
  /** An internal link under a section, e.g. to the add-ons page. */
  | { type: 'link'; label: string; path: string };

export interface InfoSection {
  /** Anchor id. Links from the footer and the menus point at these, so keep them stable. */
  id: string;
  /** Label in the "On this page" bar. Omit to leave the section out of it. */
  jump?: string;
  eyebrow?: string;
  heading: string;
  standfirst?: string;
  image?: ImageKey;
  blocks: Block[];
}

export interface InfoPage {
  slug: string;
  eyebrow: string;
  title: string;
  lead: string[];
  image: ImageKey;
  sections: InfoSection[];
  closing: { heading: string; body: string };
}
