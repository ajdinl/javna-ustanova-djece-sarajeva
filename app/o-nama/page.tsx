import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import { Squiggle, Star, Sparkle, Heart } from '@/components/Doodles';
import { HiOutlineUser, HiOutlineUserGroup, HiOutlineBriefcase } from 'react-icons/hi2';

const timeline = [
  { y: '1979', t: 'Osnivanje', b: 'Skupština grada Sarajeva osniva jedinstvenu predškolsku ustanovu sa 8 vrtića.' },
  { y: '1992–95', t: 'Rad pod opsadom', b: 'Tokom opsade rad ne prestaje — improvizovani prostori, hrana iz humanitarne pomoći.' },
  { y: '2003', t: 'Reforma kurikuluma', b: 'Uvođenje integriranog programa razvoja djeteta po modelu „Reggio Emilia".' },
  { y: '2014', t: 'Inkluzivni program', b: 'Pokretanje mreže defektologa i logopeda u svim objektima.' },
  { y: '2026', t: '14 vrtića · 3.200 djece', b: 'Danas brinemo o više od 3.200 djece u 14 objekata širom Sarajeva.' },
];

const leadership = [
  { name: 'Lejla Hodžić', role: 'Direktorica', period: '2021 — danas', Icon: HiOutlineUser },
  { name: 'prof. dr. Adi Selman', role: 'Predsjednik Upravnog odbora', period: '2024 — danas', Icon: HiOutlineBriefcase },
  { name: 'mr. Amra Šabanović', role: 'Pomoćnica za odgojno-obrazovni rad', period: '2019 — danas', Icon: HiOutlineUser },
  { name: 'Edin Hadžić', role: 'Pomoćnik za zajedničke poslove', period: '2022 — danas', Icon: HiOutlineBriefcase },
  { name: 'Tarik Mušić', role: 'Predsjednik Vijeća roditelja', period: '2025 — danas', Icon: HiOutlineUserGroup },
];

export default function ONamaPage() {
  return (
    <>
      <PageHeader
        eyebrow="O ustanovi"
        accent="sage"
        title={
          <>
            Četrdeset i šest godina
            <br />
            <em className="not-italic italic font-light text-sage">istog cilja</em>.
          </>
        }
        intro="Brinemo o najmlađim građanima Sarajeva otkako pamtimo. Mijenjamo metode, ali ne i osnovni princip — dijete je centar svega što radimo."
      />

      {/* Mission + Vision */}
      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 grid lg:grid-cols-2 gap-5 mb-20">
        <article className="bg-paper rounded-[28px] border border-ink/8 p-8 md:p-12 relative overflow-hidden shadow-paper-sm">
          <Heart className="absolute -top-2 -right-2 h-20 w-20 text-clay/15" />
          <span className="eyebrow text-clay">
            <Star className="h-3 w-3" color="#C9533A" /> Misija
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl tracking-tightest leading-[1.02]">
            Stvoriti najsigurnije, najpravednije i najradoznalije okruženje za djecu predškolskog uzrasta u Kantonu Sarajevo.
          </h2>
          <p className="mt-5 text-ink/65 text-[15px] leading-relaxed">
            Naša obaveza nije samo čuvanje djece — naša obaveza je da svako dijete ode iz naših vrtića spremno
            za osnovnu školu i, što je važnije, za svijet.
          </p>
        </article>

        <article className="bg-sage text-paper rounded-[28px] p-8 md:p-12 relative overflow-hidden shadow-paper">
          <Sparkle className="absolute top-6 right-8 h-5 w-5 text-paper/30" />
          <span className="eyebrow border-paper/40 text-paper">
            <Star className="h-3 w-3" color="#F4ECDE" /> Vizija
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl tracking-tightest leading-[1.02]">
            Biti mjesto gdje svako dijete pronađe svoj glas, prijatelja i prvi razlog da voli učenje.
          </h2>
          <p className="mt-5 text-paper/80 text-[15px] leading-relaxed">
            Vidimo Sarajevo u kome su predškolske godine najsretnije godine djetinjstva — i u kome svaki roditelj
            ima povjerenje u javnu ustanovu.
          </p>
        </article>
      </section>

      {/* Historija — timeline */}
      <section className="bg-paper-2 py-20 md:py-28 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-sun/10 blur-3xl" />
        <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8">
          <div className="flex items-center gap-3 text-ink/65 mb-10">
            <span className="eyebrow text-sun-deep">
              <Star className="h-3 w-3" color="#E8A93B" /> Historija
            </span>
            <Squiggle className="h-3 w-14 text-ink/35" />
          </div>
          <h2 className="font-display font-black tracking-tightest text-5xl md:text-6xl leading-[0.95] max-w-3xl">
            Od jedne adrese do <em className="not-italic italic font-light text-clay">četrnaest</em>.
          </h2>

          <div className="mt-14 relative">
            <span className="absolute left-[14px] md:left-[26px] top-0 bottom-0 w-px bg-ink/15" aria-hidden />
            <ol className="space-y-10">
              {timeline.map((t) => (
                <li key={t.y} className="relative pl-12 md:pl-20">
                  <span className="absolute left-0 md:left-[14px] top-1 h-7 w-7 rounded-full bg-clay text-paper grid place-items-center text-xs font-mono shadow-paper-sm border-2 border-paper">
                    <span className="h-2 w-2 rounded-full bg-paper" />
                  </span>
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-ink/55">{t.y}</div>
                  <h3 className="mt-2 font-display text-3xl md:text-4xl tracking-tightest leading-tight">
                    {t.t}
                  </h3>
                  <p className="mt-2 text-ink/65 text-[15px] leading-relaxed max-w-2xl">{t.b}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Organizacija */}
      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 mb-12 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow text-sky-deep">
              <Star className="h-3 w-3" color="#3F6A9C" /> Organizacija
            </span>
            <h2 className="mt-5 font-display font-black tracking-tightest text-5xl md:text-6xl leading-[0.95]">
              Tim koji <em className="not-italic italic font-light text-sky-deep">odgovara</em>.
            </h2>
          </div>
          <p className="lg:col-span-5 text-ink/70 text-lg leading-relaxed">
            Naša ustanova zapošljava 412 osoba — od odgajatelja i defektologa, do kuhara i domara. Svaki ima
            ulogu u dnevnom ritmu vrtića.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {leadership.map((p) => (
            <article
              key={p.name}
              className="bg-paper rounded-[20px] border border-ink/8 p-6 shadow-paper-sm hover:shadow-paper transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-2xl bg-ink/5 grid place-items-center">
                  <p.Icon className="h-6 w-6 text-ink/65" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl tracking-tightest leading-tight">{p.name}</h3>
                  <div className="mt-1 text-sm text-clay">{p.role}</div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">
                    {p.period}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Gallery strip */}
      <section className="relative">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            '/images/yard.jpg',
            '/images/puzzle.jpg',
            '/images/bees.jpg',
            '/images/motor.jpg',
          ].map((src, i) => (
            <div key={src} className="relative aspect-square overflow-hidden group">
              <Image
                src={src}
                alt=""
                fill
                sizes="25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 ring-1 ring-paper/30 mix-blend-overlay" />
              <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] text-paper bg-ink/40 backdrop-blur px-2 py-1 rounded-full">
                Foto · 0{i + 1}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
