import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Star, Sparkle, Squiggle, Bee } from '@/components/Doodles';

export default function DayInLife() {
  const t = useTranslations('home.day');
  const schedule = t.raw('schedule') as { time: string; label: string; body: string }[];

  return (
    <section className="relative bg-paper-2 py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-clay/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-sky/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1380px] px-5 lg:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 text-ink/65">
            <span className="eyebrow text-clay">
              <Star className="h-3 w-3" color="#C9533A" />
              {t('eyebrow')}
            </span>
            <Squiggle className="h-3 w-12 text-ink/35" />
          </div>
          <h2 className="mt-5 font-display font-black tracking-tightest text-5xl md:text-6xl leading-[0.95]">
            {t('titleLine1Part1')} <em className="not-italic text-clay">{t('titleLine1Accent')}</em> {t('titleLine1End')}
            <br />{t('titleLine2Part1')} <em className="not-italic italic font-light text-sage">{t('titleLine2Accent')}</em>.
          </h2>
          <p className="mt-6 text-ink/70 text-lg leading-relaxed max-w-md">{t('intro')}</p>

          <div className="mt-10 relative">
            <Image
              src="/images/motor.jpg"
              alt={t('altPhoto')}
              width={500}
              height={620}
              className="rounded-[28px] object-cover w-full max-w-sm shadow-paper-lg"
            />
            <Bee className="absolute -top-5 -right-3 h-14 rotate-12 hidden md:block" />
            <div className="absolute -bottom-6 -left-4 bg-paper rounded-2xl border border-ink/10 px-4 py-3 shadow-paper-sm rotate-[-3deg]">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55">{t('stickerLabel')}</div>
              <div className="font-display text-lg tracking-tight">{t('stickerActivity')}</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 relative">
          <ol className="space-y-2">
            {schedule.map((s, i) => (
              <li
                key={s.time}
                className="group flex items-start gap-5 py-5 border-t border-ink/10 first:border-t-0 first:pt-0 last:pb-0 hover:bg-paper/60 -mx-3 px-3 rounded-2xl transition-colors"
              >
                <div className="font-mono text-sm md:text-base text-ink/55 pt-1 w-16 shrink-0">{s.time}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-2xl md:text-[28px] tracking-tightest leading-none">
                      {s.label}
                    </h3>
                    <span className="h-1 flex-1 bg-ink/8 rounded-full overflow-hidden">
                      <span
                        className="block h-full bg-clay/60 transition-all duration-700"
                        style={{ width: `${15 + i * 12}%` }}
                      />
                    </span>
                    <Sparkle className="h-3 w-3 text-ink/30 group-hover:text-clay transition-colors" />
                  </div>
                  <p className="mt-2 text-ink/65 text-[15px] leading-relaxed max-w-lg">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
