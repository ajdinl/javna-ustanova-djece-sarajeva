import Link from 'next/link';
import { HiArrowLongRight, HiOutlineMapPin } from 'react-icons/hi2';
import { Star, Squiggle } from '@/components/Doodles';

const vrtici = [
  { name: 'Vrtić „Sunce"', area: 'Centar', capacity: 280, programs: 'Inkluzivni program' },
  { name: 'Vrtić „Bambi"', area: 'Novo Sarajevo', capacity: 210, programs: 'Engleski jezik' },
  { name: 'Vrtić „Pčelica"', area: 'Stari Grad', capacity: 180, programs: 'Mali sportaši' },
  { name: 'Vrtić „Maslačak"', area: 'Ilidža', capacity: 240, programs: 'Muzička radionica' },
  { name: 'Vrtić „Dukat"', area: 'Vogošća', capacity: 160, programs: 'Engleski jezik' },
  { name: 'Vrtić „Iskrica"', area: 'Novi Grad', capacity: 320, programs: 'Inkluzivni program' },
];

export default function Locations() {
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
              Naših 14 adresa
            </span>
            <Squiggle className="h-3 w-12 text-paper/35" />
          </div>
          <h2 className="mt-5 font-display font-black tracking-tightest text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
            Vrtići širom
            <br />
            <span className="text-sun italic font-light">Sarajeva</span>.
          </h2>
          <p className="mt-6 text-paper/75 text-lg leading-relaxed max-w-md">
            Od Stupa do Bistrika, od Otoke do Vogošće — 14 objekata sa kapacitetom za više od 3.200 djece.
            Pronađite najbliži vrtić svojoj porodici.
          </p>
          <Link
            href="/vrtici"
            className="mt-9 inline-flex items-center gap-3 bg-sun text-ink px-6 py-3.5 rounded-full font-semibold hover:bg-sun-deep transition-colors"
          >
            Otvori interaktivnu mapu
            <HiArrowLongRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="lg:col-span-7">
          <ul className="divide-y divide-paper/15">
            {vrtici.map((v, i) => (
              <li key={v.name}>
                <Link
                  href="/vrtici"
                  className="group flex items-center gap-5 py-5 hover:bg-paper/5 -mx-3 px-3 rounded-2xl transition-colors"
                >
                  <span className="font-mono text-xs text-paper/45 w-8 shrink-0">
                    0{i + 1}
                  </span>
                  <div className="flex-1 grid md:grid-cols-12 gap-2 md:gap-5 items-center">
                    <h3 className="md:col-span-4 font-display text-2xl md:text-[26px] tracking-tightest leading-tight group-hover:text-sun transition-colors">
                      {v.name}
                    </h3>
                    <div className="md:col-span-3 flex items-center gap-1.5 text-paper/75 text-sm">
                      <HiOutlineMapPin className="h-3.5 w-3.5" />
                      {v.area}
                    </div>
                    <div className="md:col-span-2 font-mono text-xs uppercase tracking-[0.18em] text-paper/55">
                      {v.capacity} mjesta
                    </div>
                    <div className="md:col-span-3 text-sm text-paper/70">{v.programs}</div>
                  </div>
                  <HiArrowLongRight className="h-5 w-5 text-paper/45 group-hover:text-sun group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-sm text-paper/55 flex items-center gap-3">
            <span>+ još 8 vrtića</span>
            <span className="h-px flex-1 bg-paper/15" />
            <Link href="/vrtici" className="text-sun hover:underline">
              Vidi sve
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
