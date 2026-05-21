import { Squiggle, Star } from './Doodles';

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  accent?: 'clay' | 'sage' | 'sun' | 'sky';
};

const accentMap = {
  clay: 'text-clay',
  sage: 'text-sage',
  sun: 'text-sun-deep',
  sky: 'text-sky-deep',
};

export default function PageHeader({ eyebrow, title, intro, accent = 'clay' }: Props) {
  return (
    <section className="relative pt-14 pb-14 md:pt-20 md:pb-16 overflow-hidden">
      <div className="pointer-events-none absolute -top-10 -right-10 w-72 h-72 rounded-full bg-sun/15 blur-3xl" />
      <div className="pointer-events-none absolute -top-20 left-10 w-56 h-56 rounded-full bg-sage/10 blur-3xl" />
      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="flex items-center gap-3 text-ink/65">
          <span className={`eyebrow ${accentMap[accent]}`}>
            <Star className="h-3 w-3" color="currentColor" />
            {eyebrow}
          </span>
          <Squiggle className="h-3 w-16 text-ink/30" />
        </div>
        <h1 className="mt-5 font-display font-black tracking-tightest text-5xl md:text-7xl lg:text-[88px] leading-[0.92]">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-ink/70 leading-relaxed">{intro}</p>
        )}
      </div>
    </section>
  );
}
