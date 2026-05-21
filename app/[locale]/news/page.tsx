'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import PageHeader from '@/components/PageHeader';
import { Star, Squiggle } from '@/components/Doodles';
import { HiArrowLongRight } from 'react-icons/hi2';
import clsx from 'clsx';

const images = [
  '/images/yard.jpg',
  '/images/puzzle.jpg',
  '/images/seesaw.jpg',
  '/images/motor.jpg',
  '/images/bees.jpg',
  '/images/yard.jpg',
  '/images/puzzle.jpg',
];

// We key categories by index (0 = all, 1+ = real cats) to remain locale-stable.
const CAT_STYLE = [
  '', // unused
  'text-clay border-clay/30 bg-clay/5',
  'text-sun-deep border-sun/40 bg-sun/10',
  'text-sage-deep border-sage/30 bg-sage/8',
  'text-sky-deep border-sky/30 bg-sky/8',
] as const;

const ITEM_CAT_INDEX = [1, 3, 2, 4, 1, 4, 3];

type Item = { cat: string; date: string; title: string; body: string };

export default function ObavjestenjaPage() {
  const t = useTranslations('news');
  const categories = t.raw('categories') as [string, string, string, string, string];
  const items = t.raw('items') as Item[];

  const [filterIdx, setFilterIdx] = useState(0);
  const filtered = useMemo(() => {
    if (filterIdx === 0) return items.map((it, i) => ({ ...it, _origIdx: i }));
    return items
      .map((it, i) => ({ ...it, _origIdx: i }))
      .filter((it) => ITEM_CAT_INDEX[it._origIdx] === filterIdx);
  }, [filterIdx, items]);

  return (
    <>
      <PageHeader
        eyebrow={t('header.eyebrow')}
        accent="clay"
        title={
          <>
            {t('header.titleLine1')}
            <br />
            <em className="not-italic italic font-light text-clay">{t('header.titleAccent')}</em>{' '}
            {t('header.titleLine2')}
          </>
        }
        intro={t('header.intro')}
      />

      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 pb-24">
        <div className="flex items-center gap-3 flex-wrap mb-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/55">
            Filter:
          </span>
          {categories.map((c, i) => {
            const count =
              i === 0 ? items.length : items.filter((_, idx) => ITEM_CAT_INDEX[idx] === i).length;
            return (
              <button
                key={c}
                onClick={() => setFilterIdx(i)}
                className={clsx(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all border',
                  filterIdx === i
                    ? 'bg-ink text-paper border-ink shadow-stamp-sm'
                    : 'bg-paper text-ink/70 border-ink/15 hover:border-ink hover:text-ink'
                )}
              >
                {c}
                <span className="ml-2 font-mono text-[10px] opacity-60">{count}</span>
              </button>
            );
          })}
          <div className="ml-auto flex items-center gap-3 text-ink/55 text-xs">
            <Squiggle className="h-3 w-12 text-ink/35" />
          </div>
        </div>

        {filtered.length > 0 && (
          <Link
            href="/news"
            className="group block bg-paper rounded-[28px] border border-ink/8 overflow-hidden shadow-paper-sm hover:shadow-paper-lg transition-all mb-8"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[360px] overflow-hidden">
                <Image
                  src={images[filtered[0]._origIdx]}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-mono uppercase tracking-[0.2em] ${CAT_STYLE[ITEM_CAT_INDEX[filtered[0]._origIdx]]}`}
                  >
                    <Star className="h-2.5 w-2.5" color="currentColor" />
                    {filtered[0].cat} · {t('featuredSuffix')}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">
                    {filtered[0].date}
                  </span>
                </div>
                <h3 className="font-display text-3xl md:text-5xl tracking-tightest leading-[1.02] group-hover:text-clay transition-colors">
                  {filtered[0].title}
                </h3>
                <p className="mt-4 text-ink/65 leading-relaxed max-w-lg">{filtered[0].body}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-medium text-clay">
                  {/* shared "read more" reused from common */}
                  <ReadMore />
                  <HiArrowLongRight className="h-5 w-5" />
                </span>
              </div>
            </div>
          </Link>
        )}

        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {filtered.slice(1).map((it) => (
            <li key={it.title}>
              <Link href="/news" className="grid md:grid-cols-12 gap-5 py-6 group items-center">
                <div className="md:col-span-2 flex items-center gap-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] border ${CAT_STYLE[ITEM_CAT_INDEX[it._origIdx]]}`}
                  >
                    {it.cat}
                  </span>
                </div>
                <div className="md:col-span-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">
                  {it.date}
                </div>
                <div className="md:col-span-7">
                  <h3 className="font-display text-xl md:text-2xl tracking-tightest leading-snug group-hover:text-clay transition-colors">
                    {it.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink/60 leading-relaxed">{it.body}</p>
                </div>
                <div className="md:col-span-1 flex md:justify-end">
                  <span className="h-10 w-10 rounded-full border border-ink/15 grid place-items-center group-hover:border-clay group-hover:text-clay transition">
                    <HiArrowLongRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex items-center justify-center gap-2">
          {[1, 2, 3, '...', 9].map((p) => (
            <button
              key={p}
              className={clsx(
                'h-10 w-10 rounded-full font-mono text-sm border',
                p === 1
                  ? 'bg-ink text-paper border-ink'
                  : 'bg-paper text-ink border-ink/15 hover:border-ink'
              )}
            >
              {p}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

function ReadMore() {
  const c = useTranslations('common');
  return <>{c('readMore')}</>;
}
