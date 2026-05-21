'use client';

import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { HiArrowLongRight } from 'react-icons/hi2';
import { Bee, Cloud, Star, Sparkle, Squiggle } from '@/components/Doodles';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  const t = useTranslations('home.hero');
  return (
    <section className="relative overflow-hidden pt-8 md:pt-12 pb-20 md:pb-28">
      {/* Decorative organic blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-32 h-[28rem] w-[28rem] rounded-full bg-sun/30 blur-3xl" />
        <div className="absolute top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-sage/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-clay/15 blur-3xl" />
      </div>

      {/* Floating doodles */}
      <Cloud className="absolute top-10 left-[6%] h-12 text-paper-2 opacity-90 animate-float-y-slow hidden md:block" color="#FBF8F1" />
      <Cloud className="absolute top-32 right-[12%] h-9 text-paper-2 opacity-90 animate-float-y hidden md:block" color="#FBF8F1" />
      <Bee className="absolute top-[18%] right-[6%] h-12 animate-float-y hidden lg:block" />

      <div className="relative mx-auto max-w-[1380px] px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left content */}
          <div className="lg:col-span-6 lg:col-start-1">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 text-ink/70"
            >
              <span className="eyebrow text-clay">
                <Star className="h-3 w-3" color="#C9533A" />
                {t('eyebrow')}
              </span>
              <Squiggle className="h-3 w-14 text-ink/35" />
            </motion.div>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-6 font-display font-black tracking-tightest text-[11.5vw] sm:text-[10vw] md:text-[8.5vw] lg:text-[6.6vw] xl:text-[96px] leading-[0.88]"
            >
              {t('titleLine1')}
              <br />
              <span className="text-clay italic font-light">{t('titleAccent')}</span> {t('titleLine2Rest')}
              <br />
              {t('titleLine3')}{' '}
              <span className="relative inline-block">
                <span className="handline handline-sun">{t('titleUnderline')}</span>
              </span>
              {t('titleEnd')}
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-7 max-w-xl text-lg md:text-xl text-ink/75 leading-relaxed"
            >
              {t('intro')}
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link href="/enrollment" className="stamp-btn stamp-btn-clay">
                {t('ctaEnroll')}
                <HiArrowLongRight className="h-5 w-5" />
              </Link>
              <Link href="/kindergartens" className="stamp-btn stamp-btn-sage">
                {t('ctaKindergartens')}
              </Link>
              <Link href="/menus" className="stamp-btn">
                {t('ctaMenus')}
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.36 }}
              className="mt-12 grid grid-cols-3 gap-4 max-w-md"
            >
              {[
                { num: '14', label: t('statKindergartens') },
                { num: '3.200+', label: t('statChildren') },
                { num: '45', label: t('statYears') },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl md:text-4xl font-black tracking-tightest text-ink">
                    {s.num}
                  </div>
                  <div className="text-xs mt-1 text-ink/60 leading-snug">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: photo collage */}
          <div className="lg:col-span-6 relative h-[640px] md:h-[720px]">
            {/* Big photo */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="polaroid absolute top-4 left-2 md:left-6 w-[68%] max-w-[420px] rotate-[-3deg]"
            >
              <span className="tape -top-3 left-1/2 -translate-x-1/2 rotate-[-2deg]" />
              <Image
                src="/images/yard.jpg"
                alt={t('altYard')}
                width={800}
                height={600}
                className="w-full h-[300px] md:h-[340px] object-cover"
                priority
              />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-ink/55">
                <span>{t('photo1Caption1')}</span>
                <span>{t('photo1Caption2')}</span>
              </div>
            </motion.div>

            {/* Medium photo */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 5 }}
              animate={{ opacity: 1, y: 0, rotate: 4 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="polaroid absolute top-[42%] right-2 md:right-0 w-[54%] max-w-[320px] rotate-[4deg]"
            >
              <span className="tape -top-3 right-6 rotate-[6deg]" style={{ background: 'rgba(95,127,79,0.55)' }} />
              <Image
                src="/images/bees.jpg"
                alt={t('altBees')}
                width={600}
                height={800}
                className="w-full h-[260px] object-cover"
              />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-ink/55">
                <span>{t('photo2Caption')}</span>
                <Sparkle className="h-3 w-3" color="#E8A93B" />
              </div>
            </motion.div>

            {/* Small accent photo */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -8 }}
              animate={{ opacity: 1, y: 0, rotate: -6 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="polaroid absolute bottom-6 left-8 w-[40%] max-w-[220px] rotate-[-6deg] z-10"
            >
              <Image
                src="/images/puzzle.jpg"
                alt={t('altPuzzle')}
                width={600}
                height={500}
                className="w-full h-[150px] object-cover"
              />
              <div className="absolute bottom-2 left-3 right-3 font-mono text-[10px] uppercase tracking-widest text-ink/55 text-center">
                {t('photo3Caption')}
              </div>
            </motion.div>

            {/* Floating sticker badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 12 }}
              transition={{ duration: 0.6, delay: 0.5, type: 'spring', stiffness: 120 }}
              className="absolute top-[8%] right-[10%] z-20"
            >
              <div className="relative h-28 w-28 md:h-32 md:w-32">
                <svg viewBox="0 0 200 200" className="absolute inset-0 animate-spin-slow" aria-hidden>
                  <defs>
                    <path id="circle" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
                  </defs>
                  <text className="fill-ink font-mono text-[15px] uppercase tracking-[0.32em]">
                    <textPath href="#circle">{t('stickerText')}</textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-clay text-paper h-14 w-14 rounded-full flex items-center justify-center font-display font-black text-xl rotate-[-12deg] shadow-stamp-sm border-2 border-ink">
                    {t('stickerBadge')}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
