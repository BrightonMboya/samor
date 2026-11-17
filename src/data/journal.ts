import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/ui';

export type Post = CollectionEntry<'journal'>;

/** The slug a post is published under: its filename, the same in both locales. */
export const postSlug = (post: Post) => post.id.split('/').pop()!;

/** Posts for one locale, newest first. */
export async function getPosts(locale: Locale): Promise<Post[]> {
  const posts = await getCollection('journal', (e) => e.id.startsWith(`${locale}/`));
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatDate(date: Date, locale: Locale) {
  return new Intl.DateTimeFormat(locale === 'ar' ? 'ar-SA-u-nu-latn-ca-gregory' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export const journalUi = {
  en: {
    title: 'Journal',
    heading: 'Straight answers before you book.',
    lead: 'What a safari costs, when to go, the visa from Saudi Arabia, and how we handle halal food and prayer on the road. Written by the people who plan your trip.',
    read: (n: number) => `${n} min read`,
    allPosts: 'All journal posts',
    more: 'Keep reading',
    ctaHeading: 'Have a question this didn’t answer?',
    ctaBody: 'Send it to us. A planner replies within the day, in Arabic or English.',
    plan: 'Plan my safari',
  },
  ar: {
    title: 'المدوّنة',
    heading: 'إجابات واضحة قبل أن تحجز.',
    lead: 'كم تكلّف رحلة السفاري، ومتى تسافر، وتأشيرة تنزانيا للمسافرين من السعودية، وكيف نرتّب الطعام الحلال والصلاة طوال الرحلة. يكتبها من يخطّطون رحلتك بأنفسهم.',
    read: (n: number) => `${n} ${n >= 3 && n <= 10 ? 'دقائق' : 'دقيقة'} للقراءة`,
    allPosts: 'كل مقالات المدوّنة',
    more: 'تابع القراءة',
    ctaHeading: 'لديك سؤال لم نجب عنه هنا؟',
    ctaBody: 'أرسله إلينا، ويردّ عليك أحد مخطّطي الرحلات في اليوم نفسه، بالعربية أو الإنجليزية.',
    plan: 'خطّط رحلتي',
  },
} as const;
