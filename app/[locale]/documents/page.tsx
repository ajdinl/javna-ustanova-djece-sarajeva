import { getTranslations, setRequestLocale } from 'next-intl/server';
import PageHeader from '@/components/PageHeader';
import { Star, Squiggle } from '@/components/Doodles';
import {
  HiOutlineDocumentArrowDown,
  HiOutlineShieldCheck,
  HiOutlineScale,
  HiOutlineBuildingLibrary,
  HiOutlineDocumentChartBar,
} from 'react-icons/hi2';

const sectionIcons = [HiOutlineShieldCheck, HiOutlineScale, HiOutlineBuildingLibrary, HiOutlineDocumentChartBar];

type Doc = { title: string; year: number; size: string; format: 'PDF' | 'DOCX' };
type Section = { id: string; label: string; docs: Doc[] };

export default async function DokumentiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('documents');
  const sections = t.raw('sections') as Section[];

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

      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 mb-12">
        <div className="flex flex-wrap gap-3">
          {sections.map((s, i) => {
            const Icon = sectionIcons[i] ?? HiOutlineShieldCheck;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-paper-2 border border-ink/10 hover:border-ink hover:bg-paper text-sm transition"
              >
                <Icon className="h-4 w-4 text-clay" />
                {s.label}
              </a>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 pb-24 space-y-16">
        {sections.map((s, sIdx) => {
          const Icon = sectionIcons[sIdx] ?? HiOutlineShieldCheck;
          return (
            <article key={s.id} id={s.id} className="scroll-mt-32">
              <header className="flex items-end justify-between gap-5 flex-wrap mb-8">
                <div>
                  <div className="flex items-center gap-3 text-ink/65 mb-3">
                    <span className="eyebrow text-clay">
                      <Star className="h-3 w-3" color="#C9533A" />
                      {t('sectionLabel', { n: sIdx + 1 })}
                    </span>
                    <Squiggle className="h-3 w-10 text-ink/35" />
                  </div>
                  <h2 className="font-display font-black tracking-tightest text-4xl md:text-5xl leading-[1] flex items-center gap-4">
                    <Icon className="h-9 w-9 text-clay" />
                    {s.label}
                  </h2>
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55">
                  {t('docCount', { count: s.docs.length })}
                </span>
              </header>

              <div className="bg-paper rounded-[24px] border border-ink/8 overflow-hidden shadow-paper-sm divide-y divide-ink/8">
                {s.docs.map((d) => (
                  <a
                    key={d.title}
                    href="#"
                    className="grid md:grid-cols-12 gap-3 md:gap-5 items-center px-6 md:px-8 py-5 hover:bg-paper-2 transition-colors group"
                  >
                    <div className="md:col-span-7 flex items-center gap-4">
                      <span className="h-10 w-10 rounded-xl bg-ink/5 grid place-items-center group-hover:bg-clay group-hover:text-paper transition-colors">
                        <HiOutlineDocumentArrowDown className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="font-display text-lg md:text-xl tracking-tightest leading-snug">
                          {d.title}
                        </div>
                        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55 mt-1">
                          {t('publishedIn', { year: d.year })}
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2 font-mono text-xs text-ink/55">{d.size}</div>
                    <div className="md:col-span-2">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] border ${
                          d.format === 'PDF'
                            ? 'border-clay/30 text-clay bg-clay/5'
                            : 'border-sky/30 text-sky-deep bg-sky/8'
                        }`}
                      >
                        {d.format}
                      </span>
                    </div>
                    <div className="md:col-span-1 md:text-right">
                      <span className="text-sm font-medium text-ink/70 group-hover:text-clay transition">
                        {t('download')}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
