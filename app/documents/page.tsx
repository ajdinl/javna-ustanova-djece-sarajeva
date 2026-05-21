import PageHeader from '@/components/PageHeader';
import { Star, Squiggle } from '@/components/Doodles';
import {
  HiOutlineDocumentArrowDown,
  HiOutlineShieldCheck,
  HiOutlineScale,
  HiOutlineBuildingLibrary,
  HiOutlineDocumentChartBar,
} from 'react-icons/hi2';

type Doc = { title: string; year: number; size: string; format: 'PDF' | 'DOCX' };

const sections: { id: string; label: string; Icon: typeof HiOutlineShieldCheck; docs: Doc[] }[] = [
  {
    id: 'statut',
    label: 'Statut i osnovni akti',
    Icon: HiOutlineShieldCheck,
    docs: [
      { title: 'Statut JU „Djeca Sarajeva"', year: 2024, size: '2.1 MB', format: 'PDF' },
      { title: 'Etički kodeks zaposlenih', year: 2023, size: '480 KB', format: 'PDF' },
      { title: 'Politika privatnosti', year: 2025, size: '320 KB', format: 'PDF' },
    ],
  },
  {
    id: 'pravilnici',
    label: 'Pravilnici',
    Icon: HiOutlineScale,
    docs: [
      { title: 'Pravilnik o upisu djece', year: 2025, size: '1.4 MB', format: 'PDF' },
      { title: 'Pravilnik o radu', year: 2024, size: '1.8 MB', format: 'PDF' },
      { title: 'Pravilnik o sistematizaciji radnih mjesta', year: 2023, size: '2.6 MB', format: 'PDF' },
      { title: 'Pravilnik o nabavkama male vrijednosti', year: 2024, size: '740 KB', format: 'PDF' },
    ],
  },
  {
    id: 'nabavke',
    label: 'Javne nabavke',
    Icon: HiOutlineBuildingLibrary,
    docs: [
      { title: 'Plan nabavki za 2026. godinu', year: 2026, size: '3.2 MB', format: 'PDF' },
      { title: 'Izvještaj o izvršenju nabavki 2025.', year: 2025, size: '4.1 MB', format: 'PDF' },
      { title: 'Otvoreni tenderi — opremanje dvorišta', year: 2026, size: '1.1 MB', format: 'PDF' },
      { title: 'Tipski ugovor o uslugama', year: 2024, size: '210 KB', format: 'DOCX' },
    ],
  },
  {
    id: 'izvjestaji',
    label: 'Izvještaji o radu',
    Icon: HiOutlineDocumentChartBar,
    docs: [
      { title: 'Godišnji izvještaj o radu 2025.', year: 2025, size: '6.4 MB', format: 'PDF' },
      { title: 'Finansijski izvještaj 2025.', year: 2025, size: '2.9 MB', format: 'PDF' },
      { title: 'Izvještaj o stručnom usavršavanju kadra', year: 2024, size: '1.5 MB', format: 'PDF' },
      { title: 'Polugodišnji finansijski rezime 2026.', year: 2026, size: '1.2 MB', format: 'PDF' },
    ],
  },
];

export default function DokumentiPage() {
  return (
    <>
      <PageHeader
        eyebrow="Transparentnost"
        accent="sage"
        title={
          <>
            Sve odluke,
            <br />
            <em className="not-italic italic font-light text-sage">na vidiku</em>.
          </>
        }
        intro="Kao javna ustanova, sve odluke, izvještaje, statute i pravilnike objavljujemo otvoreno. Slobodno preuzimajte i čitajte."
      />

      {/* Quick nav */}
      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 mb-12">
        <div className="flex flex-wrap gap-3">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-paper-2 border border-ink/10 hover:border-ink hover:bg-paper text-sm transition"
            >
              <s.Icon className="h-4 w-4 text-clay" />
              {s.label}
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 pb-24 space-y-16">
        {sections.map((s, sIdx) => (
          <article key={s.id} id={s.id} className="scroll-mt-32">
            <header className="flex items-end justify-between gap-5 flex-wrap mb-8">
              <div>
                <div className="flex items-center gap-3 text-ink/65 mb-3">
                  <span className="eyebrow text-clay">
                    <Star className="h-3 w-3" color="#C9533A" />
                    Sekcija 0{sIdx + 1}
                  </span>
                  <Squiggle className="h-3 w-10 text-ink/35" />
                </div>
                <h2 className="font-display font-black tracking-tightest text-4xl md:text-5xl leading-[1] flex items-center gap-4">
                  <s.Icon className="h-9 w-9 text-clay" />
                  {s.label}
                </h2>
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55">
                {s.docs.length} dokumenata
              </span>
            </header>

            <div className="bg-paper rounded-[24px] border border-ink/8 overflow-hidden shadow-paper-sm divide-y divide-ink/8">
              {s.docs.map((d) => (
                <a
                  key={d.title}
                  href="#"
                  className="grid md:grid-cols-12 gap-3 md:gap-5 items-center px-6 md:px-8 py-5 hover:bg-paper-2 transition-colors group"
                >
                  <div className="md:col-span-7 flex items-center gap-4">
                    <span className="h-10 w-10 rounded-xl bg-ink/5 grid place-items-center group-hover:bg-clay group-hover:text-paper transition-colors">
                      <HiOutlineDocumentArrowDown className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-display text-lg md:text-xl tracking-tightest leading-snug">
                        {d.title}
                      </div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55 mt-1">
                        Objavljeno {d.year}.
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2 font-mono text-xs text-ink/55">{d.size}</div>
                  <div className="md:col-span-2">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] border ${
                        d.format === 'PDF'
                          ? 'border-clay/30 text-clay bg-clay/5'
                          : 'border-sky/30 text-sky-deep bg-sky/8'
                      }`}
                    >
                      {d.format}
                    </span>
                  </div>
                  <div className="md:col-span-1 md:text-right">
                    <span className="text-sm font-medium text-ink/70 group-hover:text-clay transition">
                      Preuzmi
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
