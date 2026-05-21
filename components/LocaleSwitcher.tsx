'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useTransition } from 'react';
import clsx from 'clsx';
import type { Locale } from '@/i18n/routing';

const labels: Record<Locale, string> = { bs: 'BHS', en: 'EN' };

export default function LocaleSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  const switchTo = (target: Locale) => {
    if (target === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: target });
    });
  };

  return (
    <div className="hidden sm:flex items-center text-[11px] font-mono uppercase tracking-[0.18em] border border-ink/15 rounded-full overflow-hidden">
      {(['bs', 'en'] as Locale[]).map((l) => (
        <button
          key={l}
          onClick={() => switchTo(l)}
          className={clsx('px-2.5 py-1.5', locale === l ? 'bg-ink text-paper' : 'text-ink/70')}
          aria-pressed={locale === l}
          aria-label={`Switch to ${labels[l]}`}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  );
}
