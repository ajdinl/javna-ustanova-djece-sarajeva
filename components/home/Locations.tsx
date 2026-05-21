import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { HiArrowLongRight, HiOutlineMapPin } from 'react-icons/hi2';
import { Star, Squiggle } from '@/components/Doodles';

const capacities = [280, 210, 180, 240, 160, 320];

export default function Locations() {
  const t = useTranslations('home.locations');
  const items = t.raw('items') as { name: string; area: string; programs: string }[];

  return (
    <section className="relative bg-ink text-paper py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-noise" />
      <div className="pointer-events-none absolute -top-32 right-10 h-96 w-96 rounded-full bg-clay/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-sage/20 blur-3xl" />

      <div className="relative mx-auto max-w-[1380px] px-5 lg:px-8 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 text-paper/65">
            <span className="eyebrow text-sun border-sun/40">
              <Star className="h-3 w-3" color="#E8A93B" />
              {t('eyebrow')}
            </span>
            <Squiggle className="h-3 w-12 text-paper/35" />
          </div>
          <h2 className="mt-5 font-display font-black tracking-tightest text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
            {t('titleLine1')}
            <br />
            <span className="text-sun italic font-light">{t('titleAccent')}</span>{t('titleEnd')}
          </h2>
          <p className="mt-6 text-paper/75 text-lg leading-relaxed max-w-md">{t('intro')}</p>
          <Link
            href="/kindergartens"
            className="mt-9 inline-flex items-center gap-3 bg-sun text-ink px-6 py-3.5 rounded-full font-semibold hover:bg-sun-deep transition-colors"
          >
            {t('cta')}
            <HiArrowLongRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="lg:col-span-7">
          <ul className="divide-y divide-paper/15">
            {items.map((v, i) => (
              <li key={v.name}>
                <Link
                  href="/kindergartens"
                  className="group flex items-center gap-5 py-5 hover:bg-paper/5 -mx-3 px-3 rounded-2xl transition-colors"
                >
                  <span className="font-mono text-xs text-paper/45 w-8 shrink-0">0{i + 1}</span>
                  <div className="flex-1 grid md:grid-cols-12 gap-2 md:gap-5 items-center">
                    <h3 className="md:col-span-4 font-display text-2xl md:text-[26px] tracking-tightest leading-tight group-hover:text-sun transition-colors">
                      {v.name}
                    </h3>
                    <div className="md:col-span-3 flex items-center gap-1.5 text-paper/75 text-sm">
                      <HiOutlineMapPin className="h-3.5 w-3.5" />
                      {v.area}
                    </div>
                    <div className="md:col-span-2 font-mono text-xs uppercase tracking-[0.18em] text-paper/55">
                      {t('capacityLabel', { count: capacities[i] })}
                    </div>
                    <div className="md:col-span-3 text-sm text-paper/70">{v.programs}</div>
                  </div>
                  <HiArrowLongRight className="h-5 w-5 text-paper/45 group-hover:text-sun group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-sm text-paper/55 flex items-center gap-3">
            <span>{t('moreCount')}</span>
            <span className="h-px flex-1 bg-paper/15" />
            <Link href="/kindergartens" className="text-sun hover:underline">
              {t('moreLink')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
