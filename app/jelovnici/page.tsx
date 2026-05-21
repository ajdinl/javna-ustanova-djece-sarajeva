import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import { Bee, Star, Squiggle, Sparkle } from '@/components/Doodles';
import { HiOutlineDocumentArrowDown, HiOutlineExclamationTriangle } from 'react-icons/hi2';

const week = [
  {
    day: 'Ponedjeljak',
    breakfast: 'Mlijeko, hljeb od integralnog brašna, domaća marmelada od šljiva',
    snack: 'Sezonska voćka (jabuka, kruška)',
    lunch: 'Bosanski lonac, salata od kupusa',
    dessert: 'Domaći kolač od jabuka',
  },
  {
    day: 'Utorak',
    breakfast: 'Kakao, integralna kifla sa sirom',
    snack: 'Šargarepa i kraastavci u štapićima sa humusom',
    lunch: 'Pileći paprikaš sa kuhanim povrćem',
    dessert: 'Jogurt sa sušenim voćem',
  },
  {
    day: 'Srijeda',
    breakfast: 'Mlijeko sa zobenim pahuljicama i medom',
    snack: 'Banana',
    lunch: 'Riba u tijestu, krompir-pire, salata od cikle',
    dessert: 'Voćna salata',
  },
  {
    day: 'Četvrtak',
    breakfast: 'Topli sendvič sa kajganom i povrćem, čaj',
    snack: 'Pšenični mafin bez šećera',
    lunch: 'Mahune sa govedinom, kuhani krompir',
    dessert: 'Kompot od sušene šljive',
  },
  {
    day: 'Petak',
    breakfast: 'Pita sa sirom i špinatom, jogurt',
    snack: 'Grožđe ili lubenica (sezonski)',
    lunch: 'Domaća sarma, integralni hljeb',
    dessert: 'Kuglica domaće halve',
  },
];

const diets = [
  { tag: 'Bez glutena', body: 'Pripremamo zamjenske obroke; obavezna ljekarska potvrda.' },
  { tag: 'Bez laktoze', body: 'Biljna mlijeka i alternativni desert.' },
  { tag: 'Vegetarijanska', body: 'Po želji roditelja, garantirana raznolikost.' },
  { tag: 'Halal', body: 'Sva mesna i pekarska roba je halal-certificirana.' },
  { tag: 'Bez orašastih plodova', body: 'Striktan protokol u kuhinji; alergeni odvojeni.' },
];

export default function JelovniciPage() {
  return (
    <>
      <PageHeader
        eyebrow="Šta jedu naši mališani"
        accent="sun"
        title={
          <>
            Domaća kuhinja
            <br />
            <em className="not-italic italic font-light text-sun-deep">svaki dan</em>.
          </>
        }
        intro="Naših šest kuhinja priprema oko 8.500 obroka sedmično, isključivo od svježih namirnica. Jelovnik kreira nutricionista u saradnji sa pedijatrima."
      />

      {/* Sedmični jelovnik */}
      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 mb-20">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <span className="eyebrow text-clay">
              <Star className="h-3 w-3" color="#C9533A" /> Sedmica 21
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tightest">
              Sedmični jelovnik · 19—23. maj
            </h2>
          </div>
          <a
            href="#"
            className="stamp-btn stamp-btn-ink !py-2.5 !px-5 text-sm"
            aria-label="Preuzmi sedmični jelovnik kao PDF"
          >
            <HiOutlineDocumentArrowDown className="h-4 w-4" />
            Preuzmi PDF (sedmica 21)
          </a>
        </div>

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-4">
          {week.map((d, i) => (
            <article
              key={d.day}
              className={`relative bg-paper rounded-[24px] border border-ink/8 p-6 shadow-paper-sm ${
                i === 2 ? 'lg:-translate-y-2' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-clay">
                  Dan {i + 1}
                </div>
                <Sparkle className="h-3 w-3 text-sun-deep" />
              </div>
              <h3 className="font-display text-2xl tracking-tightest leading-tight">{d.day}</h3>
              <div className="mt-5 space-y-4 text-sm">
                <Meal label="Doručak" body={d.breakfast} />
                <Meal label="Užina" body={d.snack} />
                <Meal label="Ručak" body={d.lunch} />
                <Meal label="Desert" body={d.dessert} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Dijete i alergije */}
      <section className="bg-paper-2 py-20 md:py-24 relative overflow-hidden">
        <Bee className="absolute top-10 right-[8%] h-14 hidden md:block animate-float-y" />
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-ink/65 mb-5">
              <span className="eyebrow text-clay">
                <HiOutlineExclamationTriangle className="h-3.5 w-3.5" /> Posebne dijete
              </span>
              <Squiggle className="h-3 w-12 text-ink/35" />
            </div>
            <h2 className="font-display font-black tracking-tightest text-5xl md:text-6xl leading-[0.95]">
              Alergije ne preskačemo.
            </h2>
            <p className="mt-6 text-ink/70 text-lg leading-relaxed">
              Za svako dijete sa medicinskom indikacijom kuhinja vodi zaseban kuvarski karton i pripremni
              protokol. Roditelj dostavlja ljekarsko uvjerenje, mi radimo ostalo.
            </p>
            <Image
              src="/images/motor.jpg"
              alt="Dijete u vrtiću"
              width={500}
              height={400}
              className="mt-10 rounded-[28px] object-cover w-full shadow-paper-lg"
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-3">
              {diets.map((d, i) => (
                <li
                  key={d.tag}
                  className="bg-paper rounded-[20px] border border-ink/8 p-6 flex items-start gap-5"
                >
                  <span className="font-mono text-xs text-ink/55 w-8 shrink-0">0{i + 1}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1.5">
                      <h3 className="font-display text-xl tracking-tightest">{d.tag}</h3>
                      <span className="h-px flex-1 bg-ink/10" />
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-sage-deep bg-sage/10 px-2 py-1 rounded-full">
                        dostupno
                      </span>
                    </div>
                    <p className="text-sm text-ink/65 leading-relaxed">{d.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Nutritivne informacije */}
      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 py-20 md:py-24">
        <span className="eyebrow text-sage-deep">
          <Star className="h-3 w-3" color="#5F7F4F" /> Nutricija
        </span>
        <h2 className="mt-4 font-display font-black tracking-tightest text-5xl md:text-6xl leading-[0.95] max-w-2xl">
          Svaki obrok je <em className="not-italic italic font-light text-sage-deep">izvagan</em>.
        </h2>
        <div className="mt-12 grid md:grid-cols-4 gap-5">
          {[
            { n: '1.450 kcal', l: 'Prosječan dnevni unos' },
            { n: '5×', l: 'Obroka dnevno' },
            { n: '7+', l: 'Vrsta voća i povrća sedmično' },
            { n: '< 6g', l: 'Soli po obroku' },
          ].map((s) => (
            <div key={s.l} className="bg-paper rounded-[24px] border border-ink/8 p-7 shadow-paper-sm">
              <div className="font-display text-4xl md:text-5xl tracking-tightest font-black text-clay">
                {s.n}
              </div>
              <div className="mt-2 text-ink/65 text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Meal({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/45">{label}</div>
      <div className="mt-0.5 text-ink/85 leading-snug">{body}</div>
    </div>
  );
}
