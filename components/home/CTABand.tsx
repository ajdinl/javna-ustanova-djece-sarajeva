import Link from 'next/link';
import Image from 'next/image';
import { HiArrowLongRight } from 'react-icons/hi2';
import { Sparkle, Sun, Heart } from '@/components/Doodles';

export default function CTABand() {
  return (
    <section className="relative mx-auto max-w-[1380px] px-5 lg:px-8 py-20 md:py-28">
      <div className="relative overflow-hidden rounded-[36px] bg-clay text-paper p-8 md:p-16 lg:p-20">
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-noise" />
        <Sun className="absolute -top-10 -right-10 h-44 w-44 text-sun opacity-90" color="#E8A93B" />
        <Sparkle className="absolute top-12 left-10 h-6 w-6 text-paper/40" />
        <Sparkle className="absolute bottom-16 right-1/4 h-4 w-4 text-paper/40" />
        <Heart className="absolute bottom-10 left-1/3 h-7 w-7 text-paper/30 animate-float-y-slow" />

        <div className="relative grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow border-paper/40 text-paper">
              <Sparkle className="h-3 w-3" color="currentColor" />
              Upis 2026/27 otvoren
            </span>
            <h2 className="mt-5 font-display font-black tracking-tightest text-5xl md:text-6xl lg:text-[80px] leading-[0.92]">
              Vaše dijete bi
              <br />
              ovdje moglo
              <br />
              <em className="not-italic italic font-light">naći prijatelja</em>.
            </h2>
            <p className="mt-6 text-paper/80 text-lg max-w-md leading-relaxed">
              Prijavite se elektronski, donesite dokumentaciju, upoznajte naš tim. Cijeli postupak traje koliko i
              tri popodneva.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/enrollment"
                className="inline-flex items-center gap-3 bg-paper text-clay px-6 py-3.5 rounded-full font-semibold hover:bg-sun hover:text-ink transition-colors"
              >
                Prijavi dijete
                <HiArrowLongRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-paper/90 hover:text-sun px-2 py-3.5 font-medium border-b border-paper/40 hover:border-sun transition"
              >
                Posjeti vrtić
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[300px] md:h-[400px]">
            <div className="absolute top-0 right-4 polaroid rotate-[6deg] w-[78%]">
              <Image src="/images/seesaw.jpg" alt="Djeca na ljuljaški" width={500} height={400} className="w-full h-[200px] md:h-[260px] object-cover" />
              <div className="absolute bottom-2 left-3 right-3 font-mono text-[10px] uppercase tracking-widest text-ink/55 text-center">
                Svaki dan zaslužuje smijeh
              </div>
            </div>
            <div className="absolute bottom-0 left-0 polaroid -rotate-[5deg] w-[60%] z-10">
              <Image src="/images/bees.jpg" alt="Kreativna radionica" width={500} height={400} className="w-full h-[150px] md:h-[180px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
