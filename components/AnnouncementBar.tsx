import { useTranslations } from 'next-intl';
import { HiArrowLongRight } from 'react-icons/hi2';
import { Star } from './Doodles';

export default function AnnouncementBar() {
  const t = useTranslations('announcement');
  const items = t.raw('items') as string[];
  return (
    <div className="relative z-30 overflow-hidden border-b border-ink/10 bg-ink text-paper">
      <div className="marquee-track py-2.5">
        {[...items, ...items, ...items].map((label, i) => (
          <span
            key={i}
            className="mx-6 inline-flex shrink-0 items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em]"
          >
            <Star className="h-3 w-3" color="#E8A93B" />
            {label}
            <HiArrowLongRight className="opacity-50" />
          </span>
        ))}
      </div>
    </div>
  );
}
