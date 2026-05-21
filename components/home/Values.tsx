import { useTranslations } from 'next-intl';
import {
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineAcademicCap,
} from 'react-icons/hi2';
import { Squiggle, Star, Arrow } from '@/components/Doodles';

const icons = [HiOutlineHeart, HiOutlineSparkles, HiOutlineUserGroup, HiOutlineAcademicCap];
const accents = ['clay', 'sun', 'sage', 'sky'] as const;

const accentMap: Record<string, { bg: string; text: string; ring: string; dot: string }> = {
  clay: { bg: 'bg-clay/8', text: 'text-clay', ring: 'ring-clay/20', dot: 'bg-clay' },
  sun: { bg: 'bg-sun/15', text: 'text-sun-deep', ring: 'ring-sun/30', dot: 'bg-sun' },
  sage: { bg: 'bg-sage/10', text: 'text-sage-deep', ring: 'ring-sage/25', dot: 'bg-sage' },
  sky: { bg: 'bg-sky/10', text: 'text-sky-deep', ring: 'ring-sky/25', dot: 'bg-sky' },
};

export default function Values() {
  const t = useTranslations('home.values');
  const items = t.raw('items') as { title: string; body: string }[];

  return (
    <section className="relative mx-auto max-w-[1380px] px-5 lg:px-8 py-20 md:py-28">
      <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 text-ink/65">
            <span className="eyebrow text-sage-deep">
              <Star className="h-3 w-3" color="#5F7F4F" />
              {t('eyebrow')}
            </span>
            <Squiggle className="h-3 w-14 text-ink/35" />
          </div>
          <h2 className="mt-5 font-display font-black tracking-tightest text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
            {t('titleLine1')}
            <br />
            {t('titleLine2')} <span className="italic font-light text-sage">{t('titleAccent')}</span>.
          </h2>
        </div>
        <div className="lg:col-span-5">
          <p className="text-ink/70 text-lg leading-relaxed">{t('intro')}</p>
          <div className="mt-6 flex items-center gap-3 text-ink/55 font-mono uppercase tracking-[0.18em] text-xs">
            <Arrow className="h-3 w-12 text-ink/40" />
            {t('more')}
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((v, i) => {
          const Icon = icons[i];
          const a = accentMap[accents[i]];
          const num = `0${i + 1}`;
          return (
            <article
              key={v.title}
              className="group relative rounded-[24px] border border-ink/8 bg-paper p-7 hover:-translate-y-1 transition-transform shadow-paper-sm hover:shadow-paper"
            >
              <div className="flex items-start justify-between">
                <div className={`h-12 w-12 rounded-2xl ${a.bg} ${a.text} ring-1 ${a.ring} grid place-items-center`}>
                  <Icon className="h-6 w-6" />
                </div>
                <span className={`font-mono text-xs ${a.text}`}>{num}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl tracking-tightest leading-tight">{v.title}</h3>
              <p className="mt-2 text-ink/65 text-[15px] leading-relaxed">{v.body}</p>
              <span className={`absolute bottom-6 right-6 h-2 w-2 rounded-full ${a.dot} opacity-60`} />
            </article>
          );
        })}
      </div>
    </section>
  );
}
