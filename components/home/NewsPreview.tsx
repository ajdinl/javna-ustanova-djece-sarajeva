import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { HiArrowLongRight } from 'react-icons/hi2';
import { Star, Squiggle } from '@/components/Doodles';

const images = ['/images/yard.jpg', '/images/puzzle.jpg', '/images/seesaw.jpg'];
const accents = ['clay', 'sage', 'sun'] as const;
const hrefs = ['/news/konkurs-2026-05', '/news/priredba', '/news/odluka-uo-2025'];
const tCommon = { common: 'common' } as const;

const accentMap: Record<string, string> = {
  clay: 'text-clay border-clay/30',
  sage: 'text-sage-deep border-sage/30',
  sun: 'text-sun-deep border-sun/40',
};

export default function NewsPreview() {
  const t = useTranslations('home.news');
  const c = useTranslations('common');
  const items = t.raw('items') as { cat: string; date: string; title: string; body: string }[];

  return (
    <section className="relative mx-auto max-w-[1380px] px-5 lg:px-8 py-20 md:py-28">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-3 text-ink/65">
            <span className="eyebrow text-clay">
              <Star className="h-3 w-3" color="#C9533A" />
              {t('eyebrow')}
            </span>
            <Squiggle className="h-3 w-14 text-ink/35" />
          </div>
          <h2 className="mt-5 font-display font-black tracking-tightest text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
            {t('title')} <em className="not-italic italic font-light text-clay">{t('titleAccent')}</em>
          </h2>
        </div>
        <Link
          href="/news"
          className="inline-flex items-center gap-2 self-start md:self-auto stamp-btn !py-2 !px-5 text-sm"
        >
          {t('allLink')}
          <HiArrowLongRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {items.map((n, i) => (
          <Link
            key={n.title}
            href={hrefs[i]}
            className="group block bg-paper rounded-[24px] overflow-hidden border border-ink/8 shadow-paper-sm hover:shadow-paper transition-all hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images[i]}
                alt=""
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span
                className={`absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-paper/95 backdrop-blur ${accentMap[accents[i]]} text-[10px] font-mono uppercase tracking-[0.2em] border`}
              >
                {n.cat}
              </span>
            </div>
            <div className="p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">{n.date}</div>
              <h3 className="mt-3 font-display text-xl md:text-2xl tracking-tightest leading-snug group-hover:text-clay transition-colors">
                {n.title}
              </h3>
              <p className="mt-3 text-ink/65 text-sm leading-relaxed">{n.body}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink/80 group-hover:text-clay group-hover:gap-3 transition-all">
                {c('readMore')}
                <HiArrowLongRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
