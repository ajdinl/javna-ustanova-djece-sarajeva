'use client';

import { useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi2';
import clsx from 'clsx';

export type FaqItem = { q: string; a: string };

export default function Accordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <li key={it.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-start gap-5 py-5 text-left group"
            >
              <span className="font-mono text-xs text-ink/55 pt-2 w-10 shrink-0">
                0{i + 1}
              </span>
              <span className="flex-1 font-display text-xl md:text-2xl tracking-tightest leading-snug">
                {it.q}
              </span>
              <span
                className={clsx(
                  'h-10 w-10 shrink-0 rounded-full grid place-items-center border-2 transition-all',
                  isOpen ? 'bg-clay text-paper border-clay' : 'border-ink/15 text-ink/70 group-hover:border-ink'
                )}
              >
                {isOpen ? <HiMinus className="h-4 w-4" /> : <HiPlus className="h-4 w-4" />}
              </span>
            </button>
            <div
              className={clsx(
                'overflow-hidden transition-[max-height,opacity] duration-300',
                isOpen ? 'max-h-[400px] opacity-100 pb-6' : 'max-h-0 opacity-0'
              )}
            >
              <div className="pl-[60px] pr-12 text-ink/70 leading-relaxed max-w-3xl">{it.a}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
