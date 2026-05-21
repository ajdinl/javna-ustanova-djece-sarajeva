'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { HiBars3, HiXMark, HiMagnifyingGlass } from 'react-icons/hi2';
import { Link, usePathname } from '@/i18n/navigation';
import Logo from './Logo';
import LocaleSwitcher from './LocaleSwitcher';
import clsx from 'clsx';

const links = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/kindergartens', key: 'kindergartens' },
  { href: '/enrollment', key: 'enrollment' },
  { href: '/menus', key: 'menus' },
  { href: '/news', key: 'news' },
  { href: '/documents', key: 'documents' },
  { href: '/parent-council', key: 'parentCouncil' },
  { href: '/contact', key: 'contact' },
] as const;

export default function Nav() {
  const t = useTranslations('nav');
  const tA11y = useTranslations('a11y');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

        <nav aria-label={tA11y('mainNav')} className="hidden xl:block">
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
                    {t(l.key)}
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
            aria-label={tA11y('search')}
            className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 hover:bg-ink/5 transition"
          >
            <HiMagnifyingGlass className="h-4 w-4" />
          </button>
          <LocaleSwitcher />
          <Link
            href="/enrollment"
            className="hidden md:inline-flex stamp-btn stamp-btn-clay text-sm !py-2 !px-4"
          >
            {t('enrollChild')}
          </Link>
          <button
            aria-label={open ? tA11y('closeMenu') : tA11y('openMenu')}
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
        <nav aria-label={tA11y('mobileNav')} className="px-5 py-4 bg-paper">
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
                    <span>{t(l.key)}</span>
                    {active && <span className="text-xs font-mono uppercase tracking-widest text-clay">{t('current')}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-5 flex items-center gap-3">
            <Link href="/enrollment" className="stamp-btn stamp-btn-clay flex-1 justify-center">
              {t('enrollChild')}
            </Link>
            <button className="stamp-btn !px-4" aria-label={tA11y('search')}>
              <HiMagnifyingGlass className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
