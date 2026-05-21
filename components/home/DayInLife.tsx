import Image from 'next/image';
import { Star, Sparkle, Squiggle, Bee } from '@/components/Doodles';

const schedule = [
  { time: '06:30', label: 'Dolazak', body: 'Topli doček, šolja čaja za roditelje koji to žele.' },
  { time: '08:00', label: 'Doručak', body: 'Sezonski meni iz vlastite kuhinje, prilagođen alergijama.' },
  { time: '09:00', label: 'Radionica', body: 'Tematske aktivnosti — likovne, muzičke, govorne.' },
  { time: '10:30', label: 'Vrijeme u dvorištu', body: 'Svjež zrak svaki dan, igralište, vrtni alat.' },
  { time: '12:00', label: 'Ručak i odmor', body: 'Tih obrok, priča prije popodnevnog odmora.' },
  { time: '15:00', label: 'Slobodna igra', body: 'Dijete bira aktivnost. Sloboda je dio razvoja.' },
  { time: '17:00', label: 'Odlazak', body: 'Predaja roditeljima uz kratki dnevni rezime.' },
];

export default function DayInLife() {
  return (
    <section className="relative bg-paper-2 py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-clay/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-sky/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1380px] px-5 lg:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 text-ink/65">
            <span className="eyebrow text-clay">
              <Star className="h-3 w-3" color="#C9533A" />
              Jedan dan u našem vrtiću
            </span>
            <Squiggle className="h-3 w-12 text-ink/35" />
          </div>
          <h2 className="mt-5 font-display font-black tracking-tightest text-5xl md:text-6xl leading-[0.95]">
            Ritam koji <em className="not-italic text-clay">smiruje</em> i
            <br />vrijeme koje <em className="not-italic italic font-light text-sage">vrijedi</em>.
          </h2>
          <p className="mt-6 text-ink/70 text-lg leading-relaxed max-w-md">
            Predvidljiv ritam pomaže djetetu da se osjeća sigurnim. Naš plan dana ostavlja prostor za znatiželju,
            ali i za odmor — jer male glave trebaju oba.
          </p>

          <div className="mt-10 relative">
            <Image
              src="/images/motor.jpg"
              alt="Djevojčica radi sa motoričkim igračkama"
              width={500}
              height={620}
              className="rounded-[28px] object-cover w-full max-w-sm shadow-paper-lg"
            />
            <Bee className="absolute -top-5 -right-3 h-14 rotate-12 hidden md:block" />
            <div className="absolute -bottom-6 -left-4 bg-paper rounded-2xl border border-ink/10 px-4 py-3 shadow-paper-sm rotate-[-3deg]">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55">Aktivnost</div>
              <div className="font-display text-lg tracking-tight">Razvoj fine motorike</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 relative">
          <ol className="space-y-2">
            {schedule.map((s, i) => (
              <li
                key={s.time}
                className="group flex items-start gap-5 py-5 border-t border-ink/10 first:border-t-0 first:pt-0 last:pb-0 hover:bg-paper/60 -mx-3 px-3 rounded-2xl transition-colors"
              >
                <div className="font-mono text-sm md:text-base text-ink/55 pt-1 w-16 shrink-0">{s.time}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-2xl md:text-[28px] tracking-tightest leading-none">
                      {s.label}
                    </h3>
                    <span className="h-1 flex-1 bg-ink/8 rounded-full overflow-hidden">
                      <span
                        className="block h-full bg-clay/60 transition-all duration-700"
                        style={{ width: `${15 + i * 12}%` }}
                      />
                    </span>
                    <Sparkle className="h-3 w-3 text-ink/30 group-hover:text-clay transition-colors" />
                  </div>
                  <p className="mt-2 text-ink/65 text-[15px] leading-relaxed max-w-lg">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
