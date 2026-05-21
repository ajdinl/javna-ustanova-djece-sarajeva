import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import PageHeader from '@/components/PageHeader';
import { Bee, Star, Squiggle, Sparkle } from '@/components/Doodles';
import { HiOutlineDocumentArrowDown, HiOutlineExclamationTriangle } from 'react-icons/hi2';

export default async function JelovniciPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('menus');

  const week = t.raw('week') as { day: string; breakfast: string; snack: string; lunch: string; dessert: string }[];
  const diets = t.raw('diets.items') as { tag: string; body: string }[];
  const nutrition = t.raw('nutrition.items') as { n: string; l: string }[];

  return (
    <>
      <PageHeader
        eyebrow={t('header.eyebrow')}
        accent="sun"
        title={
          <>
            {t('header.titleLine1')}
            <br />
            <em className="not-italic italic font-light text-sun-deep">{t('header.titleAccent')}</em>.
          </>
        }
        intro={t('header.intro')}
      />

      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 mb-20">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <span className="eyebrow text-clay">
              <Star className="h-3 w-3" color="#C9533A" /> {t('weekTitle')}
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tightest">{t('weekHeading')}</h2>
          </div>
          <a href="#" className="stamp-btn stamp-btn-ink !py-2.5 !px-5 text-sm">
            <HiOutlineDocumentArrowDown className="h-4 w-4" />
            {t('weekDownload')}
          </a>
        </div>

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-4">
          {week.map((d, i) => (
            <article
              key={d.day}
              className={`relative bg-paper rounded-[24px] border border-ink/8 p-6 shadow-paper-sm ${
                i === 2 ? 'lg:-translate-y-2' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-clay">
                  {t('dayLabel', { n: i + 1 })}
                </div>
                <Sparkle className="h-3 w-3 text-sun-deep" />
              </div>
              <h3 className="font-display text-2xl tracking-tightest leading-tight">{d.day}</h3>
              <div className="mt-5 space-y-4 text-sm">
                <Meal label={t('labels.breakfast')} body={d.breakfast} />
                <Meal label={t('labels.snack')} body={d.snack} />
                <Meal label={t('labels.lunch')} body={d.lunch} />
                <Meal label={t('labels.dessert')} body={d.dessert} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper-2 py-20 md:py-24 relative overflow-hidden">
        <Bee className="absolute top-10 right-[8%] h-14 hidden md:block animate-float-y" />
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-ink/65 mb-5">
              <span className="eyebrow text-clay">
                <HiOutlineExclamationTriangle className="h-3.5 w-3.5" /> {t('diets.eyebrow')}
              </span>
              <Squiggle className="h-3 w-12 text-ink/35" />
            </div>
            <h2 className="font-display font-black tracking-tightest text-5xl md:text-6xl leading-[0.95]">
              {t('diets.title')}
            </h2>
            <p className="mt-6 text-ink/70 text-lg leading-relaxed">{t('diets.intro')}</p>
            <Image
              src="/images/motor.jpg"
              alt={t('diets.altPhoto')}
              width={500}
              height={400}
              className="mt-10 rounded-[28px] object-cover w-full shadow-paper-lg"
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-3">
              {diets.map((d, i) => (
                <li
                  key={d.tag}
                  className="bg-paper rounded-[20px] border border-ink/8 p-6 flex items-start gap-5"
                >
                  <span className="font-mono text-xs text-ink/55 w-8 shrink-0">0{i + 1}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1.5">
                      <h3 className="font-display text-xl tracking-tightest">{d.tag}</h3>
                      <span className="h-px flex-1 bg-ink/10" />
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-sage-deep bg-sage/10 px-2 py-1 rounded-full">
                        {t('diets.available')}
                      </span>
                    </div>
                    <p className="text-sm text-ink/65 leading-relaxed">{d.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 py-20 md:py-24">
        <span className="eyebrow text-sage-deep">
          <Star className="h-3 w-3" color="#5F7F4F" /> {t('nutrition.eyebrow')}
        </span>
        <h2 className="mt-4 font-display font-black tracking-tightest text-5xl md:text-6xl leading-[0.95] max-w-2xl">
          {t('nutrition.title')} <em className="not-italic italic font-light text-sage-deep">{t('nutrition.titleAccent')}</em>.
        </h2>
        <div className="mt-12 grid md:grid-cols-4 gap-5">
          {nutrition.map((s) => (
            <div key={s.l} className="bg-paper rounded-[24px] border border-ink/8 p-7 shadow-paper-sm">
              <div className="font-display text-4xl md:text-5xl tracking-tightest font-black text-clay">
                {s.n}
              </div>
              <div className="mt-2 text-ink/65 text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Meal({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/45">{label}</div>
      <div className="mt-0.5 text-ink/85 leading-snug">{body}</div>
    </div>
  );
}
