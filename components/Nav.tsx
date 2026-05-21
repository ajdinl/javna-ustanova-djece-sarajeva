'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiBars3, HiXMark, HiMagnifyingGlass } from 'react-icons/hi2';
import Logo from './Logo';
import clsx from 'clsx';

const links = [
  { href: '/', label: 'Početna' },
  { href: '/o-nama', label: 'O nama' },
  { href: '/vrtici', label: 'Vrtići' },
  { href: '/upis', label: 'Upis' },
  { href: '/jelovnici', label: 'Jelovnici' },
  { href: '/obavjestenja', label: 'Obavještenja' },
  { href: '/dokumenti', label: 'Dokumenti' },
  { href: '/vijece-roditelja', label: 'Vijeće roditelja' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'BHS' | 'ENG'>('BHS');

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        'sticky top-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-paper/85 backdrop-blur-md border-b border-ink/10 shadow-paper-sm'
          : 'bg-paper border-b border-transparent'
      )}
    >
      <div className="mx-auto flex max-w-[1380px] items-center justify-between gap-6 px-5 py-3 lg:px-8">
        <Logo size={42} />

        <nav aria-label="Glavna navigacija" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href));
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={clsx(
                      'relative px-3.5 py-2 text-[14px] font-medium transition-colors',
                      active ? 'text-clay' : 'text-ink/75 hover:text-ink'
                    )}
                  >
                    {l.label}
                    {active && (
                      <span
                        className="absolute -bottom-0.5 left-3 right-3 h-[6px]"
                        style={{
                          background:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 8' preserveAspectRatio='none'%3E%3Cpath d='M2,5 Q25,1 50,4 T98,5' stroke='%23C9533A' stroke-width='2.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\") center/100% 100% no-repeat",
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Pretraga"
            className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 hover:bg-ink/5 transition"
          >
            <HiMagnifyingGlass className="h-4 w-4" />
          </button>
          <div className="hidden sm:flex items-center text-[11px] font-mono uppercase tracking-[0.18em] border border-ink/15 rounded-full overflow-hidden">
            <button
              onClick={() => setLang('BHS')}
              className={clsx('px-2.5 py-1.5', lang === 'BHS' ? 'bg-ink text-paper' : 'text-ink/70')}
              aria-pressed={lang === 'BHS'}
            >
              BHS
            </button>
            <button
              onClick={() => setLang('ENG')}
              className={clsx('px-2.5 py-1.5', lang === 'ENG' ? 'bg-ink text-paper' : 'text-ink/70')}
              aria-pressed={lang === 'ENG'}
            >
              EN
            </button>
          </div>
          <Link
            href="/upis"
            className="hidden md:inline-flex stamp-btn stamp-btn-clay text-sm !py-2 !px-4"
          >
            Prijavi dijete
          </Link>
          <button
            aria-label={open ? 'Zatvori meni' : 'Otvori meni'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="xl:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink"
          >
            {open ? <HiXMark className="h-5 w-5" /> : <HiBars3 className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={clsx(
          'xl:hidden overflow-hidden transition-[max-height,opacity] duration-300 border-t border-ink/10',
          open ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav aria-label="Mobilna navigacija" className="px-5 py-4 bg-paper">
          <ul className="flex flex-col">
            {links.map((l) => {
              const active = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href));
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={clsx(
                      'flex items-center justify-between py-3 border-b border-ink/10 text-base font-medium',
                      active ? 'text-clay' : 'text-ink'
                    )}
                  >
                    <span>{l.label}</span>
                    {active && <span className="text-xs font-mono uppercase tracking-widest text-clay">trenutno</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-5 flex items-center gap-3">
            <Link href="/upis" className="stamp-btn stamp-btn-clay flex-1 justify-center">
              Prijavi dijete
            </Link>
            <button className="stamp-btn !px-4" aria-label="Pretraga">
              <HiMagnifyingGlass className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
