'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { Star, Squiggle } from '@/components/Doodles';
import { HiArrowLongRight } from 'react-icons/hi2';
import clsx from 'clsx';

const items = [
  {
    cat: 'Konkurs',
    date: '20.05.2026',
    title: 'Javni konkurs za prijem 18 odgajatelja u stalni radni odnos',
    body:
      'Konkurs je objavljen u dnevnim novinama „Oslobođenje" i ostaje otvoren 14 dana od dana objavljivanja.',
    img: '/images/yard.jpg',
  },
  {
    cat: 'Događaj',
    date: '18.05.2026',
    title: 'Završna priredba pripremnog programa — Narodno pozorište',
    body:
      'Mali umjetnici naših vrtića pripremili su program u trajanju od 45 minuta. Ulaz besplatan, mjesta ograničena.',
    img: '/images/puzzle.jpg',
  },
  {
    cat: 'Odluka',
    date: '12.05.2026',
    title: 'Odluka Upravnog odbora o usvajanju izvještaja za 2025. godinu',
    body: 'Kompletan izvještaj o radu i finansijama dostupan je u sekciji Dokumenti.',
    img: '/images/seesaw.jpg',
  },
  {
    cat: 'Novost',
    date: '08.05.2026',
    title: 'Pokrenuta logopedska kabinet u vrtiću „Iskrica"',
    body: 'Novi kabinet omogućava ranu detekciju i terapiju govornih poteškoća za djecu uzrasta 3—6 godina.',
    img: '/images/motor.jpg',
  },
  {
    cat: 'Konkurs',
    date: '02.05.2026',
    title: 'Javna nabavka opreme za dvorišta — poziv za dostavu ponuda',
    body: 'Tenderska dokumentacija dostupna je na portalu Agencije za javne nabavke BiH.',
    img: '/images/bees.jpg',
  },
  {
    cat: 'Novost',
    date: '28.04.2026',
    title: 'Saradnja sa Filozofskim fakultetom — praksa za studente pedagogije',
    body:
      'Studenti će kroz dva semestra raditi u 6 odabranih vrtića sa mentorstvom iskusnih odgajatelja.',
    img: '/images/yard.jpg',
  },
  {
    cat: 'Događaj',
    date: '15.04.2026',
    title: 'Dan otvorenih vrata — 25. maj, svi naši vrtići',
    body: 'Roditelji i djeca mogu posjetiti vrtiće, upoznati timove i pogledati učionice. Bez najave.',
    img: '/images/puzzle.jpg',
  },
];

const categories = ['Sve', 'Konkurs', 'Odluka', 'Događaj', 'Novost'] as const;

const catColor: Record<string, string> = {
  Konkurs: 'text-clay border-clay/30 bg-clay/5',
  Odluka: 'text-sun-deep border-sun/40 bg-sun/10',
  Događaj: 'text-sage-deep border-sage/30 bg-sage/8',
  Novost: 'text-sky-deep border-sky/30 bg-sky/8',
};

export default function ObavjestenjaPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('Sve');
  const filtered = useMemo(
    () => (filter === 'Sve' ? items : items.filter((i) => i.cat === filter)),
    [filter]
  );

  return (
    <>
      <PageHeader
        eyebrow="Iz ustanove"
        accent="clay"
        title={
          <>
            Obavještenja, konkursi i
            <br />
            <em className="not-italic italic font-light text-clay">vijesti</em> iz vrtića.
          </>
        }
        intro="Sve odluke Upravnog odbora, javni konkursi, najave događaja i kratke priče iz svakodnevice naših 14 objekata — na jednom mjestu."
      />

      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 pb-24">
        <div className="flex items-center gap-3 flex-wrap mb-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/55">
            Filter:
          </span>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={clsx(
                'px-4 py-2 rounded-full text-sm font-medium transition-all border',
                filter === c
                  ? 'bg-ink text-paper border-ink shadow-stamp-sm'
                  : 'bg-paper text-ink/70 border-ink/15 hover:border-ink hover:text-ink'
              )}
            >
              {c}
              <span className="ml-2 font-mono text-[10px] opacity-60">
                {c === 'Sve' ? items.length : items.filter((i) => i.cat === c).length}
              </span>
            </button>
          ))}
          <div className="ml-auto flex items-center gap-3 text-ink/55 text-xs">
            <Squiggle className="h-3 w-12 text-ink/35" />
            sortirano po datumu
          </div>
        </div>

        {/* Featured */}
        {filtered.length > 0 && (
          <Link
            href="#"
            className="group block bg-paper rounded-[28px] border border-ink/8 overflow-hidden shadow-paper-sm hover:shadow-paper-lg transition-all mb-8"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[360px] overflow-hidden">
                <Image
                  src={filtered[0].img}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-mono uppercase tracking-[0.2em] ${catColor[filtered[0].cat]}`}
                  >
                    <Star className="h-2.5 w-2.5" color="currentColor" />
                    {filtered[0].cat} · Istaknuto
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">
                    {filtered[0].date}
                  </span>
                </div>
                <h3 className="font-display text-3xl md:text-5xl tracking-tightest leading-[1.02] group-hover:text-clay transition-colors">
                  {filtered[0].title}
                </h3>
                <p className="mt-4 text-ink/65 leading-relaxed max-w-lg">{filtered[0].body}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-medium text-clay">
                  Pročitaj više <HiArrowLongRight className="h-5 w-5" />
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Rest as list */}
        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {filtered.slice(1).map((it) => (
            <li key={it.title}>
              <Link href="#" className="grid md:grid-cols-12 gap-5 py-6 group items-center">
                <div className="md:col-span-2 flex items-center gap-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] border ${catColor[it.cat]}`}
                  >
                    {it.cat}
                  </span>
                </div>
                <div className="md:col-span-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">
                  {it.date}
                </div>
                <div className="md:col-span-7">
                  <h3 className="font-display text-xl md:text-2xl tracking-tightest leading-snug group-hover:text-clay transition-colors">
                    {it.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink/60 leading-relaxed">{it.body}</p>
                </div>
                <div className="md:col-span-1 flex md:justify-end">
                  <span className="h-10 w-10 rounded-full border border-ink/15 grid place-items-center group-hover:border-clay group-hover:text-clay transition">
                    <HiArrowLongRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex items-center justify-center gap-2">
          {[1, 2, 3, '...', 9].map((p) => (
            <button
              key={p}
              className={clsx(
                'h-10 w-10 rounded-full font-mono text-sm border',
                p === 1
                  ? 'bg-ink text-paper border-ink'
                  : 'bg-paper text-ink border-ink/15 hover:border-ink'
              )}
            >
              {p}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
