import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Accordion from '@/components/Accordion';
import { Star, Squiggle, Sparkle, Sun } from '@/components/Doodles';
import {
  HiOutlineCheckCircle,
  HiOutlineDocumentText,
  HiOutlineCalendarDays,
  HiArrowLongRight,
} from 'react-icons/hi2';

const conditions = [
  'Dijete uzrasta od 6 mjeseci do polaska u školu (do 6. godine).',
  'Prebivalište jednog ili oba roditelja na području Kantona Sarajevo.',
  'Dijete bez akutnih infekcija u trenutku početka pohađanja.',
  'Saglasnost oba roditelja, ili staratelja, na uslove ustanove.',
];

const docs = [
  'Izvod iz matične knjige rođenih (original ili kopija ovjerena u Općini).',
  'CIPS prijava prebivališta roditelja (ne starija od 6 mjeseci).',
  'Potvrda o zaposlenju oba roditelja, ili odgovarajući zamjenski dokument.',
  'Ljekarsko uvjerenje pedijatra (ne starije od 7 dana prije početka pohađanja).',
  'Dokaz o specifičnim potrebama, ako postoje (medicinska, pedagoška).',
];

const deadlines = [
  { d: '01. mart 2026.', l: 'Otvaranje prijave za pedagošku 2026/27.' },
  { d: '15. juni 2026.', l: 'Krajnji rok za podnošenje aplikacija.' },
  { d: '30. juni 2026.', l: 'Objavljivanje preliminarne rang-liste.' },
  { d: '15. juli 2026.', l: 'Rok za žalbe i konačna rang-lista.' },
  { d: '01. septembar 2026.', l: 'Početak pohađanja.' },
];

const faq = [
  {
    q: 'Mogu li prijaviti dijete elektronski?',
    a: 'Da. Elektronska prijava je dostupna preko ovog sajta. Nakon online prijave, original dokumentaciju je potrebno donijeti u upravu ustanove u roku od 7 dana.',
  },
  {
    q: 'Kako se boduju prijave kada ima više djece nego mjesta?',
    a: 'Bodovni sistem propisan Pravilnikom uključuje radni status roditelja, broj djece u porodici, prebivalište, specifične potrebe djeteta i postojeću upisanu braću/sestre u ustanovi. Tabela je dostupna u sekciji Dokumenti.',
  },
  {
    q: 'Plaća li se boravak djeteta u vrtiću?',
    a: 'Da, postoji mjesečna participacija u skladu sa Odlukom Vlade Kantona Sarajevo. Iznos zavisi od prihoda porodice i broja djece u istom vrtiću; subvencije se mogu ostvariti.',
  },
  {
    q: 'Šta ako dijete ima alergiju ili posebnu dijetu?',
    a: 'Naše kuhinje pripremaju dijetalne obroke. Pri upisu se prilaže ljekarsko uvjerenje pedijatra sa preciznim instrukcijama, a osoblje vrtića individualno prati svaki slučaj.',
  },
  {
    q: 'Da li dijete može pohađati pola dana?',
    a: 'Da. Nudimo poludnevni boravak (4 sata) i cjelodnevni boravak (do 10,5 sati). Pri prijavi se opredjeljujete za jedan od režima.',
  },
];

export default function UpisPage() {
  return (
    <>
      <PageHeader
        eyebrow="Upis 2026/27 otvoren"
        accent="clay"
        title={
          <>
            Tri papira, jedna
            <br />
            <em className="not-italic italic font-light text-clay">odluka</em> za cijelu godinu.
          </>
        }
        intro="Pripremili smo postupak koji se završi za jedno popodne. Pročitajte uslove, prikupite dokumentaciju i prijavite dijete — ostalo je na nama."
      />

      {/* Big CTA */}
      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 -mt-6 mb-20">
        <div className="relative overflow-hidden rounded-[28px] bg-clay text-paper p-8 md:p-12 grid md:grid-cols-12 gap-8 items-center shadow-paper-lg">
          <Sun className="absolute -top-12 -right-12 h-44 w-44 text-sun opacity-80" color="#E8A93B" />
          <div className="md:col-span-8 relative">
            <span className="eyebrow border-paper/40 text-paper">
              <Sparkle className="h-3 w-3" color="currentColor" />
              Najbrži put
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tightest leading-[1.02]">
              Prijavi dijete elektronski — gotovo za 6 minuta.
            </h2>
          </div>
          <div className="md:col-span-4 relative">
            <Link
              href="#prijava"
              className="inline-flex items-center gap-3 bg-paper text-clay px-6 py-4 rounded-full font-semibold hover:bg-sun hover:text-ink transition-colors w-full justify-center text-base"
            >
              PRIJAVI DIJETE
              <HiArrowLongRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Uslovi + Dokumentacija */}
      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 grid lg:grid-cols-2 gap-8 mb-20">
        <article>
          <span className="eyebrow text-sage-deep">
            <Star className="h-3 w-3" color="#5F7F4F" /> Uslovi upisa
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tightest leading-[1.02]">
            Kratko i jasno.
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
            <Star className="h-3 w-3" color="#C9533A" /> Potrebna dokumentacija
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tightest leading-[1.02]">
            Pet papira.
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

      {/* Rokovi */}
      <section className="bg-paper-2 py-20 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
          <div className="flex items-center gap-3 text-ink/65 mb-8">
            <span className="eyebrow text-sun-deep">
              <HiOutlineCalendarDays className="h-3.5 w-3.5" /> Rokovi
            </span>
            <Squiggle className="h-3 w-12 text-ink/35" />
          </div>
          <h2 className="font-display font-black tracking-tightest text-5xl md:text-6xl leading-[0.95] max-w-2xl">
            Šest mjeseci, pet datuma.
          </h2>
          <div className="mt-12 grid md:grid-cols-5 gap-3">
            {deadlines.map((d, i) => (
              <div
                key={d.d}
                className="relative bg-paper rounded-[20px] p-5 border border-ink/8 shadow-paper-sm"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-clay">Korak {i + 1}</div>
                <div className="mt-2 font-display text-lg tracking-tightest leading-tight">{d.d}</div>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">{d.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forma */}
      <section id="prijava" className="mx-auto max-w-[1280px] px-5 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow text-clay">
              <HiOutlineDocumentText className="h-3.5 w-3.5" /> Elektronska prijava
            </span>
            <h2 className="mt-4 font-display font-black tracking-tightest text-5xl md:text-6xl leading-[0.95]">
              Popuni formu.
              <br />
              <em className="not-italic italic font-light text-clay">Dišemo kratko</em> uz tebe.
            </h2>
            <p className="mt-6 text-ink/70 text-lg leading-relaxed">
              Svi podaci ostaju isključivo unutar ustanove i obrađuju se u skladu sa Zakonom o zaštiti ličnih
              podataka BiH. Potrebno je oko 6 minuta.
            </p>
            <div className="mt-8 bg-paper-2 rounded-[20px] p-5 text-sm text-ink/70 leading-relaxed border border-ink/8">
              <strong className="block font-semibold text-ink mb-1">Trebate pomoć?</strong>
              Pozovite +387 33 444 555 svakim radnim danom od 08:00 do 15:00. Pomažemo i bosanski, engleski i
              znakovni jezik.
            </div>
          </div>

          <form className="lg:col-span-7 bg-paper rounded-[28px] border border-ink/10 p-7 md:p-10 shadow-paper-sm space-y-6">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field id="ime" label="Ime djeteta" placeholder="npr. Adna" />
              <Field id="prezime" label="Prezime djeteta" placeholder="npr. Hadžić" />
              <Field id="rodjenje" label="Datum rođenja" type="date" />
              <Field id="jmb" label="JMBG djeteta" placeholder="13 cifara" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field id="roditelj" label="Ime i prezime roditelja" placeholder="Vaše ime" />
              <Field id="telefon" label="Telefon" type="tel" placeholder="+387 6X XXX XXX" />
            </div>
            <Field id="email" label="E-mail" type="email" placeholder="ime@email.ba" />

            <div>
              <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-ink/65 mb-2">
                Željeni vrtić
              </label>
              <select className="w-full bg-paper-2 border border-ink/10 rounded-2xl px-4 py-3.5 text-[15px] focus:outline-none focus:border-clay">
                <option>Vrtić „Sunce" — Centar</option>
                <option>Vrtić „Bambi" — Novo Sarajevo</option>
                <option>Vrtić „Pčelica" — Stari Grad</option>
                <option>Vrtić „Maslačak" — Ilidža</option>
                <option>Vrtić „Dukat" — Vogošća</option>
                <option>Vrtić „Iskrica" — Novi Grad</option>
              </select>
            </div>

            <div>
              <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-ink/65 mb-2">
                Posebne potrebe ili napomena
              </label>
              <textarea
                rows={4}
                placeholder="Alergije, govorne specifičnosti, terapeutske preporuke…"
                className="w-full bg-paper-2 border border-ink/10 rounded-2xl px-4 py-3.5 text-[15px] focus:outline-none focus:border-clay resize-none"
              />
            </div>

            <label className="flex items-start gap-3 text-sm text-ink/70">
              <input type="checkbox" className="mt-1 h-5 w-5 accent-clay" />
              <span>
                Saglasan/saglasna sam sa obradom ličnih podataka i upoznat/a sa Politikom privatnosti JU „Djeca
                Sarajeva".
              </span>
            </label>

            <button
              type="submit"
              className="stamp-btn stamp-btn-clay w-full justify-center text-base !py-4"
            >
              POŠALJI PRIJAVU
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
              <Star className="h-3 w-3" color="#5F7F4F" /> Često pitano
            </span>
            <Squiggle className="h-3 w-14 text-ink/35" />
          </div>
          <h2 className="font-display font-black tracking-tightest text-5xl md:text-6xl leading-[0.95] mb-10">
            Pitanja koja roditelji
            <br />
            <em className="not-italic italic font-light text-sage-deep">najčešće postave</em>.
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
