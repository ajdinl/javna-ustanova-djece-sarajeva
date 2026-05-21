import { getTranslations, setRequestLocale } from 'next-intl/server';
import PageHeader from '@/components/PageHeader';
import { Star, Squiggle, Heart } from '@/components/Doodles';
import {
  HiOutlineDocumentArrowDown,
  HiOutlineEnvelope,
  HiOutlineUserCircle,
} from 'react-icons/hi2';

export default async function VijeceRoditeljaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('parentCouncil');

  const members = t.raw('members') as { name: string; role: string; vrtic: string }[];
  const duties = t.raw('duties.items') as string[];
  const minutes = t.raw('minutes.items') as { date: string; title: string; size: string }[];

  return (
    <>
      <PageHeader
        eyebrow={t('header.eyebrow')}
        accent="sky"
        title={
          <>
            {t('header.titleLine1')}
            <br />
            <em className="not-italic italic font-light text-sky-deep">{t('header.titleAccent')}</em>.
          </>
        }
        intro={t('header.intro')}
      />

      {/* Members */}
      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 mb-20">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <h2 className="font-display font-black tracking-tightest text-4xl md:text-5xl leading-[1]">
            {t('membersTitle')}
          </h2>
          <div className="flex items-center gap-3 text-ink/55 text-xs font-mono uppercase tracking-[0.2em]">
            <Squiggle className="h-3 w-12 text-ink/35" />
            {t('mandate')}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {members.map((m, i) => (
            <article
              key={m.name}
              className={`relative bg-paper rounded-[24px] border border-ink/8 p-6 shadow-paper-sm hover:shadow-paper transition-shadow ${
                i === 0 ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              }`}
            >
              {i === 0 && (
                <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-clay text-paper text-[10px] font-mono uppercase tracking-[0.2em] shadow-stamp-sm">
                  {t('presidentBadge')}
                </span>
              )}
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-2xl bg-sky/10 text-sky-deep grid place-items-center">
                  <HiOutlineUserCircle className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl tracking-tightest leading-tight">{m.name}</h3>
                  <div className="mt-1 text-sm text-sky-deep">{m.role}</div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">
                    {m.vrtic}
                  </div>
                </div>
              </div>
              {i === 0 && (
                <p className="mt-6 text-ink/65 leading-relaxed text-[15px]">{t('presidentQuote')}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Duties */}
      <section className="bg-paper-2 py-20 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-ink/65 mb-4">
              <span className="eyebrow text-sage-deep">
                <Star className="h-3 w-3" color="#5F7F4F" /> {t('duties.eyebrow')}
              </span>
              <Squiggle className="h-3 w-12 text-ink/35" />
            </div>
            <h2 className="font-display font-black tracking-tightest text-5xl md:text-6xl leading-[0.95]">
              {t('duties.titleLine1')} <em className="not-italic italic font-light text-sage-deep">{t('duties.titleAccent')}</em>.
            </h2>
            <Heart className="mt-8 h-10 w-10 text-clay/40" />
          </div>
          <ol className="lg:col-span-7 space-y-3">
            {duties.map((r, i) => (
              <li
                key={i}
                className="bg-paper rounded-[20px] p-6 border border-ink/8 flex items-start gap-4 shadow-paper-sm"
              >
                <span className="font-display text-3xl font-black text-clay leading-none">{i + 1}.</span>
                <span className="text-ink/75 leading-relaxed pt-1">{r}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Minutes */}
      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 py-20 md:py-24">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <h2 className="font-display font-black tracking-tightest text-4xl md:text-5xl leading-[1]">
            {t('minutes.title')}
          </h2>
          <a
            href="#"
            className="text-sm font-medium border-b border-ink/30 hover:border-clay hover:text-clay transition pb-1"
          >
            {t('minutes.archive')}
          </a>
        </div>

        <div className="bg-paper rounded-[24px] border border-ink/8 overflow-hidden shadow-paper-sm divide-y divide-ink/8">
          {minutes.map((m) => (
            <a
              key={m.title}
              href="#"
              className="grid md:grid-cols-12 gap-3 md:gap-5 items-center px-6 md:px-8 py-5 hover:bg-paper-2 transition-colors group"
            >
              <div className="md:col-span-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">
                {m.date}
              </div>
              <div className="md:col-span-8 font-display text-lg md:text-xl tracking-tightest leading-snug group-hover:text-clay transition">
                {m.title}
              </div>
              <div className="md:col-span-1 font-mono text-xs text-ink/55">{m.size}</div>
              <div className="md:col-span-1 md:text-right">
                <HiOutlineDocumentArrowDown className="inline h-5 w-5 text-ink/70 group-hover:text-clay transition" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 pb-20">
        <div className="bg-sky text-paper rounded-[28px] p-8 md:p-12 grid md:grid-cols-12 gap-8 items-center shadow-paper">
          <div className="md:col-span-8">
            <span className="eyebrow border-paper/40 text-paper">
              <HiOutlineEnvelope className="h-3.5 w-3.5" /> {t('ctaCard.eyebrow')}
            </span>
            <h3 className="mt-4 font-display text-3xl md:text-4xl tracking-tightest leading-tight">
              {t('ctaCard.title1')}
              <br />
              <em className="not-italic italic font-light">{t('ctaCard.title2')}</em>
            </h3>
          </div>
          <a
            href="mailto:vijece@djecasarajeva.ba"
            className="md:col-span-4 inline-flex items-center justify-center gap-3 bg-paper text-sky-deep px-6 py-4 rounded-full font-semibold hover:bg-sun hover:text-ink transition-colors"
          >
            vijece@djecasarajeva.ba
            <HiOutlineEnvelope className="h-5 w-5" />
          </a>
        </div>
      </section>
    </>
  );
}
