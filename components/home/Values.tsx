import {
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineAcademicCap,
} from 'react-icons/hi2';
import { Squiggle, Star, Arrow } from '@/components/Doodles';

const values = [
  {
    n: '01',
    title: 'Sigurnost',
    body:
      'Svaki vrtić zadovoljava najviše standarde fizičke i emocionalne sigurnosti — od certificiranih prostorija do osposobljenog osoblja.',
    Icon: HiOutlineHeart,
    accent: 'clay',
  },
  {
    n: '02',
    title: 'Razvoj',
    body:
      'Igra i kurikulum prilagođen uzrastu. Program prati djetetove jake strane umjesto da ih svrstava u kalupe.',
    Icon: HiOutlineSparkles,
    accent: 'sun',
  },
  {
    n: '03',
    title: 'Inkluzija',
    body:
      'Djeca različitih sposobnosti, jezika i porijekla rastu zajedno. Mreža defektologa, logopeda i pedagoga dostupna je svakoj porodici.',
    Icon: HiOutlineUserGroup,
    accent: 'sage',
  },
  {
    n: '04',
    title: 'Učenje',
    body:
      'Sarađujemo sa fakultetima Univerziteta u Sarajevu. Naši pedagozi neprestano se obrazuju da bi djeca dobila najbolje.',
    Icon: HiOutlineAcademicCap,
    accent: 'sky',
  },
];

const accentMap: Record<string, { bg: string; text: string; ring: string; dot: string }> = {
  clay: { bg: 'bg-clay/8', text: 'text-clay', ring: 'ring-clay/20', dot: 'bg-clay' },
  sun: { bg: 'bg-sun/15', text: 'text-sun-deep', ring: 'ring-sun/30', dot: 'bg-sun' },
  sage: { bg: 'bg-sage/10', text: 'text-sage-deep', ring: 'ring-sage/25', dot: 'bg-sage' },
  sky: { bg: 'bg-sky/10', text: 'text-sky-deep', ring: 'ring-sky/25', dot: 'bg-sky' },
};

export default function Values() {
  return (
    <section className="relative mx-auto max-w-[1380px] px-5 lg:px-8 py-20 md:py-28">
      <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 text-ink/65">
            <span className="eyebrow text-sage-deep">
              <Star className="h-3 w-3" color="#5F7F4F" />
              Naše vrijednosti
            </span>
            <Squiggle className="h-3 w-14 text-ink/35" />
          </div>
          <h2 className="mt-5 font-display font-black tracking-tightest text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
            Četiri ideje koje
            <br />
            nose <span className="italic font-light text-sage">naših 45 godina</span>.
          </h2>
        </div>
        <div className="lg:col-span-5">
          <p className="text-ink/70 text-lg leading-relaxed">
            Nismo samo čuvalište. Mi smo prvi javni prostor u kome dijete uči da je dobrodošlo onakvo kakvo
            jeste — i to definiše sve što radimo.
          </p>
          <div className="mt-6 flex items-center gap-3 text-ink/55 font-mono uppercase tracking-[0.18em] text-xs">
            <Arrow className="h-3 w-12 text-ink/40" />
            Pročitaj više o nama
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {values.map((v) => {
          const a = accentMap[v.accent];
          return (
            <article
              key={v.n}
              className={`group relative rounded-[24px] border border-ink/8 bg-paper p-7 hover:-translate-y-1 transition-transform shadow-paper-sm hover:shadow-paper`}
            >
              <div className="flex items-start justify-between">
                <div className={`h-12 w-12 rounded-2xl ${a.bg} ${a.text} ring-1 ${a.ring} grid place-items-center`}>
                  <v.Icon className="h-6 w-6" />
                </div>
                <span className={`font-mono text-xs ${a.text}`}>{v.n}</span>
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
