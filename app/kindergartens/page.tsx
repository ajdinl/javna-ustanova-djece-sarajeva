import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { Star, Squiggle, Sparkle } from '@/components/Doodles';
import {
  HiOutlineMapPin,
  HiOutlineUsers,
  HiOutlinePhone,
  HiOutlineSparkles,
  HiArrowLongRight,
} from 'react-icons/hi2';

const vrtici = [
  {
    name: 'Sunce',
    area: 'Centar',
    address: 'La Benevolencije 4',
    capacity: 280,
    phone: '+387 33 444 100',
    programs: ['Inkluzivni program', 'Govorna terapija'],
    img: '/images/yard.jpg',
    accent: 'clay',
  },
  {
    name: 'Bambi',
    area: 'Novo Sarajevo',
    address: 'Kolodvorska 12',
    capacity: 210,
    phone: '+387 33 444 110',
    programs: ['Engleski jezik', 'Mala likovna škola'],
    img: '/images/puzzle.jpg',
    accent: 'sage',
  },
  {
    name: 'Pčelica',
    area: 'Stari Grad',
    address: 'Bistrik 23',
    capacity: 180,
    phone: '+387 33 444 120',
    programs: ['Mali sportaši', 'Tradicija i baština'],
    img: '/images/bees.jpg',
    accent: 'sun',
  },
  {
    name: 'Maslačak',
    area: 'Ilidža',
    address: 'Mala Aleja 41',
    capacity: 240,
    phone: '+387 33 444 130',
    programs: ['Muzička radionica', 'Eko-vrtić'],
    img: '/images/motor.jpg',
    accent: 'sky',
  },
  {
    name: 'Dukat',
    area: 'Vogošća',
    address: 'Igmanska 7',
    capacity: 160,
    phone: '+387 33 444 140',
    programs: ['Engleski jezik', 'Inkluzivni program'],
    img: '/images/seesaw.jpg',
    accent: 'clay',
  },
  {
    name: 'Iskrica',
    area: 'Novi Grad',
    address: 'Trg djece Dobrinje 12',
    capacity: 320,
    phone: '+387 33 444 150',
    programs: ['Najveći kapacitet', 'STEM kutak'],
    img: '/images/yard.jpg',
    accent: 'sage',
  },
];

const accentBg: Record<string, string> = {
  clay: 'bg-clay/8 text-clay',
  sage: 'bg-sage/10 text-sage-deep',
  sun: 'bg-sun/15 text-sun-deep',
  sky: 'bg-sky/10 text-sky-deep',
};

export default function VrticiPage() {
  return (
    <>
      <PageHeader
        eyebrow="14 lokacija u Sarajevu"
        accent="sky"
        title={
          <>
            Pronađi <em className="not-italic italic font-light text-sky-deep">najbliži</em>
            <br />
            vrtić svojoj porodici.
          </>
        }
        intro="Svaki naš vrtić ima svoju ličnost — dvorište, tim, omiljenu pjesmu. Pogledajte detalje, kontakte i specifične programe ispod."
      />

      {/* Map placeholder */}
      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 mb-16">
        <div className="relative h-[360px] md:h-[480px] rounded-[28px] overflow-hidden border border-ink/10 shadow-paper">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=18.30%2C43.83%2C18.50%2C43.89&amp;layer=mapnik"
            className="h-full w-full"
            title="Mapa vrtića"
            loading="lazy"
          />
          <div className="absolute top-5 left-5 bg-paper rounded-full px-4 py-2 shadow-paper-sm border border-ink/10 font-mono text-[11px] uppercase tracking-[0.2em]">
            <Star className="inline-block h-3 w-3 mr-2" color="#C9533A" />
            Interaktivna mapa
          </div>
        </div>
      </section>

      {/* List */}
      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 pb-24">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-display text-3xl md:text-4xl tracking-tightest">
            Šest istaknutih objekata
          </h2>
          <div className="hidden sm:flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/55">
            <Squiggle className="h-3 w-12 text-ink/35" />
            sortirano po području
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {vrtici.map((v) => (
            <article
              key={v.name}
              className="group bg-paper rounded-[28px] border border-ink/8 overflow-hidden shadow-paper-sm hover:shadow-paper-lg hover:-translate-y-1 transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={v.img}
                  alt={`Vrtić ${v.name}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="bg-paper/95 backdrop-blur rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] border border-ink/10">
                    {v.area}
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-ink/80 to-transparent">
                  <h3 className="font-display text-4xl md:text-5xl tracking-tightest text-paper">
                    Vrtić „{v.name}"
                  </h3>
                </div>
              </div>
              <div className="p-6 md:p-7 grid grid-cols-3 gap-4">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55">
                    Adresa
                  </div>
                  <div className="mt-1.5 text-sm flex items-start gap-1.5">
                    <HiOutlineMapPin className="h-4 w-4 text-clay shrink-0 mt-0.5" />
                    {v.address}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55">
                    Kapacitet
                  </div>
                  <div className="mt-1.5 text-sm flex items-center gap-1.5">
                    <HiOutlineUsers className="h-4 w-4 text-clay shrink-0" />
                    {v.capacity}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55">
                    Kontakt
                  </div>
                  <a href={`tel:${v.phone.replace(/\s/g, '')}`} className="mt-1.5 text-sm flex items-center gap-1.5 hover:text-clay">
                    <HiOutlinePhone className="h-4 w-4 text-clay shrink-0" />
                    {v.phone}
                  </a>
                </div>
              </div>
              <div className="px-6 md:px-7 pb-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55 mb-2">
                  Programi
                </div>
                <div className="flex flex-wrap gap-2">
                  {v.programs.map((p) => (
                    <span
                      key={p}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs ${accentBg[v.accent]}`}
                    >
                      <HiOutlineSparkles className="h-3 w-3" />
                      {p}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium border-b border-ink/30 hover:border-clay hover:text-clay transition pb-1"
                >
                  Zakaži posjetu <HiArrowLongRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-paper-2 rounded-[28px] p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <Sparkle className="inline h-4 w-4 text-clay mr-2" color="#C9533A" />
            <span className="font-display text-2xl md:text-3xl tracking-tightest">
              I još 8 vrtića u izradi profila — uskoro dostupno.
            </span>
          </div>
          <Link href="/contact" className="stamp-btn stamp-btn-clay self-start md:self-auto">
            Pitaj nas o lokacijama
          </Link>
        </div>
      </section>
    </>
  );
}
