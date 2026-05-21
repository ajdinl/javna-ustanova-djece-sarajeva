import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import PageHeader from '@/components/PageHeader';
import { Squiggle, Star, Sparkle, Heart } from '@/components/Doodles';
import { HiOutlineUser, HiOutlineUserGroup, HiOutlineBriefcase } from 'react-icons/hi2';

const memberIcons = [HiOutlineUser, HiOutlineBriefcase, HiOutlineUser, HiOutlineBriefcase, HiOutlineUserGroup];

export default async function ONamaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');

  const timeline = t.raw('history.items') as { y: string; t: string; b: string }[];
  const leadership = t.raw('org.members') as { name: string; role: string; period: string }[];

  return (
    <>
      <PageHeader
        eyebrow={t('header.eyebrow')}
        accent="sage"
        title={
          <>
            {t('header.titleLine1')}
            <br />
            <em className="not-italic italic font-light text-sage">{t('header.titleAccent')}</em>.
          </>
        }
        intro={t('header.intro')}
      />

      {/* Mission + Vision */}
      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 grid lg:grid-cols-2 gap-5 mb-20">
        <article className="bg-paper rounded-[28px] border border-ink/8 p-8 md:p-12 relative overflow-hidden shadow-paper-sm">
          <Heart className="absolute -top-2 -right-2 h-20 w-20 text-clay/15" />
          <span className="eyebrow text-clay">
            <Star className="h-3 w-3" color="#C9533A" /> {t('mission.eyebrow')}
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl tracking-tightest leading-[1.02]">
            {t('mission.title')}
          </h2>
          <p className="mt-5 text-ink/65 text-[15px] leading-relaxed">{t('mission.body')}</p>
        </article>

        <article className="bg-sage text-paper rounded-[28px] p-8 md:p-12 relative overflow-hidden shadow-paper">
          <Sparkle className="absolute top-6 right-8 h-5 w-5 text-paper/30" />
          <span className="eyebrow border-paper/40 text-paper">
            <Star className="h-3 w-3" color="#F4ECDE" /> {t('vision.eyebrow')}
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl tracking-tightest leading-[1.02]">
            {t('vision.title')}
          </h2>
          <p className="mt-5 text-paper/80 text-[15px] leading-relaxed">{t('vision.body')}</p>
        </article>
      </section>

      {/* History — timeline */}
      <section className="bg-paper-2 py-20 md:py-28 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-sun/10 blur-3xl" />
        <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8">
          <div className="flex items-center gap-3 text-ink/65 mb-10">
            <span className="eyebrow text-sun-deep">
              <Star className="h-3 w-3" color="#E8A93B" /> {t('history.eyebrow')}
            </span>
            <Squiggle className="h-3 w-14 text-ink/35" />
          </div>
          <h2 className="font-display font-black tracking-tightest text-5xl md:text-6xl leading-[0.95] max-w-3xl">
            {t('history.title')} <em className="not-italic italic font-light text-clay">{t('history.titleAccent')}</em>.
          </h2>

          <div className="mt-14 relative">
            <span className="absolute left-[14px] md:left-[26px] top-0 bottom-0 w-px bg-ink/15" aria-hidden />
            <ol className="space-y-10">
              {timeline.map((item) => (
                <li key={item.y} className="relative pl-12 md:pl-20">
                  <span className="absolute left-0 md:left-[14px] top-1 h-7 w-7 rounded-full bg-clay text-paper grid place-items-center text-xs font-mono shadow-paper-sm border-2 border-paper">
                    <span className="h-2 w-2 rounded-full bg-paper" />
                  </span>
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-ink/55">{item.y}</div>
                  <h3 className="mt-2 font-display text-3xl md:text-4xl tracking-tightest leading-tight">
                    {item.t}
                  </h3>
                  <p className="mt-2 text-ink/65 text-[15px] leading-relaxed max-w-2xl">{item.b}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Organization */}
      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 mb-12 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow text-sky-deep">
              <Star className="h-3 w-3" color="#3F6A9C" /> {t('org.eyebrow')}
            </span>
            <h2 className="mt-5 font-display font-black tracking-tightest text-5xl md:text-6xl leading-[0.95]">
              {t('org.titleLine1')} <em className="not-italic italic font-light text-sky-deep">{t('org.titleAccent')}</em>.
            </h2>
          </div>
          <p className="lg:col-span-5 text-ink/70 text-lg leading-relaxed">{t('org.intro')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {leadership.map((p, i) => {
            const Icon = memberIcons[i] ?? HiOutlineUser;
            return (
              <article
                key={p.name}
                className="bg-paper rounded-[20px] border border-ink/8 p-6 shadow-paper-sm hover:shadow-paper transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-ink/5 grid place-items-center">
                    <Icon className="h-6 w-6 text-ink/65" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl tracking-tightest leading-tight">{p.name}</h3>
                    <div className="mt-1 text-sm text-clay">{p.role}</div>
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">
                      {p.period}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Gallery strip */}
      <section className="relative">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {['/images/yard.jpg', '/images/puzzle.jpg', '/images/bees.jpg', '/images/motor.jpg'].map((src, i) => (
            <div key={src} className="relative aspect-square overflow-hidden group">
              <Image
                src={src}
                alt=""
                fill
                sizes="25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 ring-1 ring-paper/30 mix-blend-overlay" />
              <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] text-paper bg-ink/40 backdrop-blur px-2 py-1 rounded-full">
                {t('galleryPrefix')} · 0{i + 1}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
