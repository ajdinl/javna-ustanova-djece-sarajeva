import Link from 'next/link';
import Image from 'next/image';
import { HiArrowLongRight } from 'react-icons/hi2';
import { Star, Squiggle } from '@/components/Doodles';

const news = [
  {
    cat: 'Konkurs',
    date: '20.05.2026',
    title: 'Javni konkurs za prijem 18 odgajatelja u stalni radni odnos',
    body: 'Konkurs je objavljen u dnevnim novinama „Oslobođenje" i ostaje otvoren 14 dana.',
    href: '/obavjestenja/konkurs-2026-05',
    img: '/images/yard.jpg',
    accent: 'clay',
  },
  {
    cat: 'Događaj',
    date: '18.05.2026',
    title: 'Završna priredba pripremnog programa — Narodno pozorište',
    body: 'Mali umjetnici naših vrtića pripremili su program u trajanju od 45 minuta.',
    href: '/obavjestenja/priredba',
    img: '/images/puzzle.jpg',
    accent: 'sage',
  },
  {
    cat: 'Odluka',
    date: '12.05.2026',
    title: 'Odluka Upravnog odbora o usvajanju izvještaja za 2025. godinu',
    body: 'Kompletan izvještaj o radu i finansijama dostupan je u sekciji Dokumenti.',
    href: '/obavjestenja/odluka-uo-2025',
    img: '/images/seesaw.jpg',
    accent: 'sun',
  },
];

const accentMap: Record<string, string> = {
  clay: 'text-clay border-clay/30',
  sage: 'text-sage-deep border-sage/30',
  sun: 'text-sun-deep border-sun/40',
};

export default function NewsPreview() {
  return (
    <section className="relative mx-auto max-w-[1380px] px-5 lg:px-8 py-20 md:py-28">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-3 text-ink/65">
            <span className="eyebrow text-clay">
              <Star className="h-3 w-3" color="#C9533A" />
              Iz ustanove
            </span>
            <Squiggle className="h-3 w-14 text-ink/35" />
          </div>
          <h2 className="mt-5 font-display font-black tracking-tightest text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
            Najnovija <em className="not-italic italic font-light text-clay">obavještenja</em>
          </h2>
        </div>
        <Link
          href="/obavjestenja"
          className="inline-flex items-center gap-2 self-start md:self-auto stamp-btn !py-2 !px-5 text-sm"
        >
          Sva obavještenja
          <HiArrowLongRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {news.map((n) => (
          <Link
            key={n.title}
            href={n.href}
            className="group block bg-paper rounded-[24px] overflow-hidden border border-ink/8 shadow-paper-sm hover:shadow-paper transition-all hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={n.img}
                alt=""
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span
                className={`absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-paper/95 backdrop-blur ${accentMap[n.accent]} text-[10px] font-mono uppercase tracking-[0.2em] border`}
              >
                {n.cat}
              </span>
            </div>
            <div className="p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">{n.date}</div>
              <h3 className="mt-3 font-display text-xl md:text-2xl tracking-tightest leading-snug group-hover:text-clay transition-colors">
                {n.title}
              </h3>
              <p className="mt-3 text-ink/65 text-sm leading-relaxed">{n.body}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink/80 group-hover:text-clay group-hover:gap-3 transition-all">
                Pročitaj više
                <HiArrowLongRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
