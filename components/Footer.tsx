import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6';
import { HiArrowLongRight } from 'react-icons/hi2';
import { Star, Squiggle } from './Doodles';

export default function Footer() {
  const cols = [
    {
      title: 'Ustanova',
      links: [
        ['O nama', '/about'],
        ['Vrtići', '/kindergartens'],
        ['Vijeće roditelja', '/parent-council'],
        ['Karijera', '/karijera'],
      ],
    },
    {
      title: 'Roditelji',
      links: [
        ['Upis djece', '/enrollment'],
        ['Jelovnici', '/menus'],
        ['Obavještenja', '/news'],
        ['Često postavljana pitanja', '/enrollment#faq'],
      ],
    },
    {
      title: 'Transparentnost',
      links: [
        ['Dokumenti', '/documents'],
        ['Javne nabavke', '/documents#nabavke'],
        ['Izvještaji', '/documents#izvjestaji'],
        ['Politika privatnosti', '/privatnost'],
      ],
    },
  ];

  return (
    <footer className="relative z-10 mt-24 bg-ink text-paper">
      {/* Newsletter strip */}
      <section className="relative overflow-hidden border-b border-paper/10">
        <div className="absolute inset-0 opacity-[0.06] bg-noise pointer-events-none" />
        <div className="mx-auto max-w-[1380px] grid lg:grid-cols-12 gap-8 px-5 lg:px-8 py-14">
          <div className="lg:col-span-5">
            <span className="eyebrow text-sun/90 border-sun/40">
              <Star className="h-3 w-3" color="#E8A93B" />
              Bilten ustanove
            </span>
            <h3 className="mt-5 font-display text-4xl md:text-5xl leading-[0.95] tracking-tightest">
              Mali <em className="not-italic text-sun">listovi</em> u vašem
              <br /> inboxu, jednom mjesečno.
            </h3>
            <p className="mt-4 text-paper/70 max-w-md">
              Sažetak događaja, novih jelovnika, fotografija iz radionica i konkursa — bez spama, bez praznih
              riječi.
            </p>
          </div>
          <form className="lg:col-span-7 flex flex-col justify-end gap-3">
            <label htmlFor="nl-email" className="text-xs font-mono uppercase tracking-[0.2em] text-paper/60">
              E-mail adresa
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="nl-email"
                type="email"
                required
                placeholder="vase.ime@email.ba"
                className="flex-1 bg-transparent border-b-2 border-paper/30 focus:border-sun text-2xl md:text-3xl font-display py-3 outline-none placeholder:text-paper/30"
              />
              <button
                type="submit"
                className="self-start sm:self-auto inline-flex items-center gap-3 bg-sun text-ink px-6 py-4 rounded-full font-semibold hover:bg-sun-deep transition-colors"
              >
                Prijavi se
                <HiArrowLongRight className="h-5 w-5" />
              </button>
            </div>
            <p className="text-xs text-paper/45">
              Prijavom prihvatate Politiku privatnosti. Odjava jednim klikom u bilo kom trenutku.
            </p>
          </form>
        </div>
      </section>

      {/* Main grid */}
      <div className="mx-auto max-w-[1380px] grid lg:grid-cols-12 gap-12 px-5 lg:px-8 py-16">
        <div className="lg:col-span-4">
          <div className="font-display text-3xl tracking-tightest leading-tight">
            Javna ustanova
            <br />
            <span className="text-sun">„Djeca Sarajeva"</span>
          </div>
          <p className="mt-4 text-paper/70 text-sm leading-relaxed max-w-xs">
            Predškolski odgoj i obrazovanje za djecu Kantona Sarajevo. Sigurno, toplo, pravedno.
          </p>
          <div className="mt-6 space-y-1 text-sm text-paper/75">
            <p>La Benevolencije 4, 71000 Sarajevo</p>
            <p>+387 33 444 555</p>
            <p>info@djecasarajeva.ba</p>
          </div>
          <div className="mt-6 flex gap-2">
            {[
              { Icon: FaFacebookF, href: '#', label: 'Facebook' },
              { Icon: FaInstagram, href: '#', label: 'Instagram' },
              { Icon: FaYoutube, href: '#', label: 'YouTube' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-paper/20 hover:bg-paper hover:text-ink transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {cols.map((col) => (
          <div key={col.title} className="lg:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50 mb-4">
              {col.title}
            </div>
            <ul className="space-y-2.5">
              {col.links.map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[15px] text-paper/85 hover:text-sun transition-colors inline-flex items-center gap-2 group"
                  >
                    {label}
                    <HiArrowLongRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-2">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50 mb-4">
            Radno vrijeme
          </div>
          <div className="text-sm text-paper/85 space-y-1">
            <p>
              <strong className="font-semibold text-paper">Pon–Pet</strong>
              <br />
              06:30 — 17:00
            </p>
            <p className="mt-3">
              <strong className="font-semibold text-paper">Sub, Ned</strong>
              <br />
              Zatvoreno
            </p>
            <p className="mt-3 text-paper/55 text-xs">Hitan kontakt 24/7: 112</p>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto max-w-[1380px] flex flex-col md:flex-row md:items-center justify-between gap-4 px-5 lg:px-8 py-6 text-xs text-paper/55">
          <p className="flex items-center gap-2">
            <Squiggle className="h-3 w-12 text-paper/30" />
            © {new Date().getFullYear()} JU „Djeca Sarajeva". Sva prava zadržana.
          </p>
          <p className="font-mono uppercase tracking-[0.18em]">
            Napravljeno s ljubavlju u Sarajevu
          </p>
        </div>
      </div>
    </footer>
  );
}
