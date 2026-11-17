import type { ImageMetadata } from 'astro';

/*
 * Lodge photos for the "Where you sleep" carousels on the itinerary pages.
 * One folder per lodge in src/assets/images/stays; files are shown in name order,
 * so 01 is the cover. Sourced from the Makisala accommodation library (Nov 2026).
 * Removed: Mount Meru "gazebo dining" (wine glasses on the table — Saudi audience).
 * Sunrise at Bandas has no gallery yet and falls back to its single photo.
 */
export type StayGallery =
  | 'mount-meru-hotel'
  | 'hatari-lodge'
  | 'tarangire-safari-lodge'
  | 'ngorongoro-farm-house'
  | 'kubu-kubu-tented-lodge'
  | 'spice-tree';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/images/stays/*/*.{jpg,jpeg,png,webp}', {
  eager: true,
});

export function stayPhotos(gallery: StayGallery): ImageMetadata[] {
  return Object.entries(files)
    .filter(([path]) => path.includes(`/stays/${gallery}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod]) => mod.default);
}
