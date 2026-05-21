import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import PageHeader from '@/components/PageHeader';
import Accordion from '@/components/Accordion';
import { Star, Squiggle, Sparkle, Sun } from '@/components/Doodles';
import {
  HiOutlineCheckCircle,
  HiOutlineDocumentText,
  HiOutlineCalendarDays,
  HiArrowLongRight,
} from 'react-icons/hi2';

export default async function UpisPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('enrollment');

  const conditions = t.raw('conditions.items') as string[];
  const docs = t.raw('docs.items') as string[];
  const deadlines = t.raw('deadlines.items') as { d: string; l: string }[];
  const faq = t.raw('faq.items') as { q: string; a: string }[];

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

      {/* Big CTA */}
      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 -mt-6 mb-20">
        <div className="relative overflow-hidden rounded-[28px] bg-clay text-paper p-8 md:p-12 grid md:grid-cols-12 gap-8 items-center shadow-paper-lg">
          <Sun className="absolute -top-12 -right-12 h-44 w-44 text-sun opacity-80" color="#E8A93B" />
          <div className="md:col-span-8 relative">
            <span className="eyebrow border-paper/40 text-paper">
              <Sparkle className="h-3 w-3" color="currentColor" />
              {t('bigCta.eyebrow')}
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tightest leading-[1.02]">
              {t('bigCta.title')}
            </h2>
          </div>
          <div className="md:col-span-4 relative">
            <Link
              href="/enrollment#prijava"
              className="inline-flex items-center gap-3 bg-paper text-clay px-6 py-4 rounded-full font-semibold hover:bg-sun hover:text-ink transition-colors w-full justify-center text-base"
            >
              {t('bigCta.button')}
              <HiArrowLongRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Conditions + Docs */}
      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 grid lg:grid-cols-2 gap-8 mb-20">
        <article>
          <span className="eyebrow text-sage-deep">
            <Star className="h-3 w-3" color="#5F7F4F" /> {t('conditions.eyebrow')}
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tightest leading-[1.02]">
            {t('conditions.title')}
          </h2>
          <ul className="mt-8 space-y-4">
            {conditions.map((c, i) => (
              <li key={i} className="flex items-start gap-4 pb-4 border-b border-ink/10">
                <span className="h-8 w-8 rounded-full bg-sage/10 text-sage-deep grid place-items-center shrink-0 mt-0.5">
                  <HiOutlineCheckCircle className="h-5 w-5" />
                </span>
                <span className="text-ink/80 leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>
        </article>

        <article>
          <span className="eyebrow text-clay">
            <Star className="h-3 w-3" color="#C9533A" /> {t('docs.eyebrow')}
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tightest leading-[1.02]">
            {t('docs.title')}
          </h2>
          <ol className="mt-8 space-y-4">
            {docs.map((d, i) => (
              <li key={i} className="flex items-start gap-4 pb-4 border-b border-ink/10">
                <span className="h-8 w-8 rounded-full bg-clay/10 text-clay grid place-items-center shrink-0 mt-0.5 font-mono text-xs font-bold">
                  {i + 1}
                </span>
                <span className="text-ink/80 leading-relaxed">{d}</span>
              </li>
            ))}
          </ol>
        </article>
      </section>

      {/* Deadlines */}
      <section className="bg-paper-2 py-20 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
          <div className="flex items-center gap-3 text-ink/65 mb-8">
            <span className="eyebrow text-sun-deep">
              <HiOutlineCalendarDays className="h-3.5 w-3.5" /> {t('deadlines.eyebrow')}
            </span>
            <Squiggle className="h-3 w-12 text-ink/35" />
          </div>
          <h2 className="font-display font-black tracking-tightest text-5xl md:text-6xl leading-[0.95] max-w-2xl">
            {t('deadlines.title')}
          </h2>
          <div className="mt-12 grid md:grid-cols-5 gap-3">
            {deadlines.map((d, i) => (
              <div
                key={d.d}
                className="relative bg-paper rounded-[20px] p-5 border border-ink/8 shadow-paper-sm"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-clay">
                  {t('deadlines.stepLabel', { n: i + 1 })}
                </div>
                <div className="mt-2 font-display text-lg tracking-tightest leading-tight">{d.d}</div>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">{d.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="prijava" className="mx-auto max-w-[1280px] px-5 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow text-clay">
              <HiOutlineDocumentText className="h-3.5 w-3.5" /> {t('form.eyebrow')}
            </span>
            <h2 className="mt-4 font-display font-black tracking-tightest text-5xl md:text-6xl leading-[0.95]">
              {t('form.titleLine1')}
              <br />
              <em className="not-italic italic font-light text-clay">{t('form.titleAccent')}</em>{' '}
              {t('form.titleLine2')}
            </h2>
            <p className="mt-6 text-ink/70 text-lg leading-relaxed">{t('form.intro')}</p>
            <div className="mt-8 bg-paper-2 rounded-[20px] p-5 text-sm text-ink/70 leading-relaxed border border-ink/8">
              <strong className="block font-semibold text-ink mb-1">{t('form.helpTitle')}</strong>
              {t('form.helpBody')}
            </div>
          </div>

          <form className="lg:col-span-7 bg-paper rounded-[28px] border border-ink/10 p-7 md:p-10 shadow-paper-sm space-y-6">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field id="ime" label={t('form.fields.firstName')} placeholder={t('form.fields.firstNamePh')} />
              <Field id="prezime" label={t('form.fields.lastName')} placeholder={t('form.fields.lastNamePh')} />
              <Field id="rodjenje" label={t('form.fields.birthDate')} type="date" />
              <Field id="jmb" label={t('form.fields.jmbg')} placeholder={t('form.fields.jmbgPh')} />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field id="roditelj" label={t('form.fields.parent')} placeholder={t('form.fields.parentPh')} />
              <Field id="telefon" label={t('form.fields.phone')} type="tel" placeholder={t('form.fields.phonePh')} />
            </div>
            <Field id="email" label={t('form.fields.email')} type="email" placeholder={t('form.fields.emailPh')} />

            <div>
              <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-ink/65 mb-2">
                {t('form.fields.kindergarten')}
              </label>
              <select className="w-full bg-paper-2 border border-ink/10 rounded-2xl px-4 py-3.5 text-[15px] focus:outline-none focus:border-clay">
                <option>Sunce — Centar</option>
                <option>Bambi — Novo Sarajevo</option>
                <option>Pčelica — Stari Grad</option>
                <option>Maslačak — Ilidža</option>
                <option>Dukat — Vogošća</option>
                <option>Iskrica — Novi Grad</option>
              </select>
            </div>

            <div>
              <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-ink/65 mb-2">
                {t('form.fields.notes')}
              </label>
              <textarea
                rows={4}
                placeholder={t('form.fields.notesPh')}
                className="w-full bg-paper-2 border border-ink/10 rounded-2xl px-4 py-3.5 text-[15px] focus:outline-none focus:border-clay resize-none"
              />
            </div>

            <label className="flex items-start gap-3 text-sm text-ink/70">
              <input type="checkbox" className="mt-1 h-5 w-5 accent-clay" />
              <span>{t('form.consent')}</span>
            </label>

            <button
              type="submit"
              className="stamp-btn stamp-btn-clay w-full justify-center text-base !py-4"
            >
              {t('form.submit')}
              <HiArrowLongRight className="h-5 w-5" />
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-paper-2 py-20 md:py-28">
        <div className="mx-auto max-w-[1100px] px-5 lg:px-8">
          <div className="flex items-center gap-3 text-ink/65 mb-8">
            <span className="eyebrow text-sage-deep">
              <Star className="h-3 w-3" color="#5F7F4F" /> {t('faq.eyebrow')}
            </span>
            <Squiggle className="h-3 w-14 text-ink/35" />
          </div>
          <h2 className="font-display font-black tracking-tightest text-5xl md:text-6xl leading-[0.95] mb-10">
            {t('faq.titleLine1')}
            <br />
            <em className="not-italic italic font-light text-sage-deep">{t('faq.titleAccent')}</em>.
          </h2>
          <Accordion items={faq} />
        </div>
      </section>
    </>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = 'text',
}: {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block font-mono text-[11px] uppercase tracking-[0.18em] text-ink/65 mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full bg-paper-2 border border-ink/10 rounded-2xl px-4 py-3.5 text-[15px] focus:outline-none focus:border-clay placeholder:text-ink/35"
      />
    </div>
  );
}
