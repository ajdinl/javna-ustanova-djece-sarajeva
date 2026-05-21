import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import {
  HiOutlineClock,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMegaphone,
  HiArrowLongRight,
} from 'react-icons/hi2';
import { Star } from '@/components/Doodles';

export default function QuickInfo() {
  const t = useTranslations('home.quickInfo');
  return (
    <section className="relative mx-auto max-w-[1380px] px-5 lg:px-8 -mt-8 md:-mt-12 mb-20">
      <div className="grid lg:grid-cols-12 gap-5">
        {/* Announcement card */}
        <article className="lg:col-span-6 group bg-ink text-paper rounded-[28px] p-7 md:p-10 relative overflow-hidden shadow-paper-lg">
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-noise" />
          <div className="flex items-start justify-between">
            <span className="eyebrow border-sun/40 text-sun">
              <HiOutlineMegaphone className="h-3.5 w-3.5" />
              {t('announcementEyebrow')}
            </span>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/55">
              {t('announcementDate')}
            </div>
          </div>
          <h3 className="mt-5 font-display text-3xl md:text-4xl leading-tight tracking-tightest max-w-md">
            {t('announcementTitlePart1')}{' '}
            <span className="text-sun italic font-light">{t('announcementTitleAccent')}</span>.
          </h3>
          <p className="mt-4 text-paper/75 max-w-md">{t('announcementBody')}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/enrollment"
              className="inline-flex items-center gap-2 bg-sun text-ink px-5 py-3 rounded-full font-semibold hover:bg-sun-deep transition-colors"
            >
              {t('ctaDetails')}
              <HiArrowLongRight className="h-4 w-4" />
            </Link>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-paper/85 hover:text-sun px-2 py-3 font-medium border-b border-paper/30 hover:border-sun transition"
            >
              {t('ctaAll')}
            </Link>
          </div>

          <div className="pointer-events-none absolute -bottom-8 -right-8 h-44 w-44 rounded-full bg-clay/30 blur-2xl" />
          <Star className="absolute top-5 right-7 h-4 w-4 opacity-30" color="#E8A93B" />
        </article>

        {/* Hours */}
        <article className="lg:col-span-3 bg-sage text-paper rounded-[28px] p-7 md:p-8 relative overflow-hidden shadow-paper">
          <span className="eyebrow border-paper/40 text-paper">
            <HiOutlineClock className="h-3.5 w-3.5" />
            {t('hoursEyebrow')}
          </span>
          <div className="mt-5 font-display text-3xl md:text-[34px] leading-[1.05] tracking-tightest">
            06:30 — 17:00
          </div>
          <div className="mt-1 text-paper/85 text-sm">{t('hoursWeekdays')}</div>
          <div className="mt-5 pt-5 border-t border-paper/20 text-sm space-y-1">
            <p className="flex justify-between"><span className="text-paper/75">{t('hoursWeekend')}</span><span>{t('hoursClosed')}</span></p>
            <p className="flex justify-between"><span className="text-paper/75">{t('hoursHolidays')}</span><span>{t('hoursClosed')}</span></p>
          </div>
        </article>

        {/* Contact */}
        <article className="lg:col-span-3 bg-paper-2 rounded-[28px] p-7 md:p-8 relative overflow-hidden shadow-paper border border-ink/5">
          <span className="eyebrow text-clay">
            <HiOutlinePhone className="h-3.5 w-3.5" />
            {t('contactEyebrow')}
          </span>
          <a
            href="tel:+38733444555"
            className="mt-5 block font-display text-3xl md:text-[30px] tracking-tightest leading-tight hover:text-clay transition-colors"
          >
            +387 33 444 555
          </a>
          <a
            href="mailto:info@djecasarajeva.ba"
            className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-ink/80 hover:text-clay transition"
          >
            <HiOutlineEnvelope className="h-4 w-4" />
            info@djecasarajeva.ba
          </a>
          <div className="mt-5 pt-5 border-t border-ink/10 text-sm text-ink/65 whitespace-pre-line">
            {t('contactAddress')}
          </div>
        </article>
      </div>
    </section>
  );
}
