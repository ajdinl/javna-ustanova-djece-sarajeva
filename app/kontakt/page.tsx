import PageHeader from '@/components/PageHeader';
import { Star, Squiggle, Sparkle } from '@/components/Doodles';
import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineClock,
  HiArrowLongRight,
} from 'react-icons/hi2';

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontaktirajte nas"
        accent="clay"
        title={
          <>
            Tu smo svakog
            <br />
            <em className="not-italic italic font-light text-clay">radnog dana</em>.
          </>
        }
        intro="Birajte kanal koji vam odgovara — telefon, e-mail ili dolazak u kancelariju. Trudimo se da odgovorimo u istom radnom danu."
      />

      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              Icon: HiOutlineMapPin,
              label: 'Adresa',
              v: 'La Benevolencije 4\n71000 Sarajevo',
              accent: 'clay',
            },
            {
              Icon: HiOutlinePhone,
              label: 'Telefon',
              v: '+387 33 444 555\n+387 33 444 556 (sekretarijat)',
              accent: 'sage',
            },
            {
              Icon: HiOutlineEnvelope,
              label: 'E-mail',
              v: 'info@djecasarajeva.ba\nuprava@djecasarajeva.ba',
              accent: 'sky',
            },
            {
              Icon: HiOutlineClock,
              label: 'Radno vrijeme',
              v: 'Pon — Pet: 07:30 — 15:30\nSub, Ned: zatvoreno',
              accent: 'sun',
            },
          ].map((c) => (
            <article
              key={c.label}
              className="bg-paper rounded-[24px] border border-ink/8 p-7 shadow-paper-sm relative overflow-hidden"
            >
              <c.Icon className={`h-7 w-7 mb-5 ${
                c.accent === 'clay' ? 'text-clay' :
                c.accent === 'sage' ? 'text-sage-deep' :
                c.accent === 'sky' ? 'text-sky-deep' : 'text-sun-deep'
              }`} />
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55">{c.label}</div>
              <div className="mt-2 font-display text-lg tracking-tightest leading-snug whitespace-pre-line">
                {c.v}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Forma + Mapa */}
      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 pb-20 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 text-ink/65 mb-4">
            <span className="eyebrow text-clay">
              <Star className="h-3 w-3" color="#C9533A" /> Pišite nam
            </span>
            <Squiggle className="h-3 w-12 text-ink/35" />
          </div>
          <h2 className="font-display font-black tracking-tightest text-4xl md:text-5xl leading-[1] mb-8">
            Pošaljite poruku.
          </h2>
          <form className="bg-paper rounded-[28px] border border-ink/10 p-7 md:p-10 shadow-paper-sm space-y-6">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-ink/65 mb-2">
                  Ime i prezime
                </label>
                <input
                  type="text"
                  className="w-full bg-paper-2 border border-ink/10 rounded-2xl px-4 py-3.5 focus:outline-none focus:border-clay"
                  placeholder="Vaše ime"
                />
              </div>
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-ink/65 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  className="w-full bg-paper-2 border border-ink/10 rounded-2xl px-4 py-3.5 focus:outline-none focus:border-clay"
                  placeholder="ime@email.ba"
                />
              </div>
            </div>
            <div>
              <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-ink/65 mb-2">
                Tema
              </label>
              <select className="w-full bg-paper-2 border border-ink/10 rounded-2xl px-4 py-3.5 focus:outline-none focus:border-clay">
                <option>Opšti upit</option>
                <option>Upis djeteta</option>
                <option>Prijedlog za Vijeće roditelja</option>
                <option>Pohvala</option>
                <option>Žalba</option>
                <option>Medijski upit</option>
              </select>
            </div>
            <div>
              <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-ink/65 mb-2">
                Poruka
              </label>
              <textarea
                rows={6}
                className="w-full bg-paper-2 border border-ink/10 rounded-2xl px-4 py-3.5 focus:outline-none focus:border-clay resize-none"
                placeholder="Napišite nam..."
              />
            </div>
            <label className="flex items-start gap-3 text-sm text-ink/70">
              <input type="checkbox" className="mt-1 h-5 w-5 accent-clay" />
              <span>Saglasan/saglasna sam sa Politikom privatnosti.</span>
            </label>
            <button type="submit" className="stamp-btn stamp-btn-clay text-base">
              POŠALJI PORUKU
              <HiArrowLongRight className="h-5 w-5" />
            </button>
          </form>
        </div>

        <aside className="lg:col-span-5 space-y-5">
          <div className="bg-ink text-paper rounded-[28px] p-7 md:p-9 relative overflow-hidden shadow-paper">
            <Sparkle className="absolute top-4 right-5 h-4 w-4 text-sun" color="#E8A93B" />
            <span className="eyebrow border-sun/40 text-sun">
              <Star className="h-3 w-3" color="#E8A93B" /> Brza linija
            </span>
            <h3 className="mt-4 font-display text-3xl tracking-tightest leading-tight">
              Za roditelje već upisane djece
            </h3>
            <p className="mt-3 text-paper/70 text-sm leading-relaxed">
              Sva pitanja o trenutnom boravku, jelovniku ili odsustvu — pošaljite direktno odgajatelju ili u
              upravu vašeg vrtića.
            </p>
            <a
              href="tel:+38733444560"
              className="mt-5 inline-flex items-center gap-3 bg-sun text-ink px-5 py-3 rounded-full font-semibold hover:bg-sun-deep transition-colors"
            >
              +387 33 444 560
              <HiOutlinePhone className="h-4 w-4" />
            </a>
          </div>

          <div className="relative h-[320px] rounded-[28px] overflow-hidden border border-ink/10 shadow-paper-sm">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=18.40%2C43.85%2C18.44%2C43.87&amp;layer=mapnik&amp;marker=43.86%2C18.42"
              className="absolute inset-0 h-full w-full"
              title="Mapa uprave"
              loading="lazy"
            />
          </div>
        </aside>
      </section>
    </>
  );
}
