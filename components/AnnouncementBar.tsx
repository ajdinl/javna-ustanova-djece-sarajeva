import { HiArrowLongRight } from 'react-icons/hi2';
import { Star } from './Doodles';

export default function AnnouncementBar() {
  const items = [
    'Upis za pedagošku 2026/27 otvoren do 15. juna',
    'Novi inkluzivni program u vrtiću Sunce',
    'Radionica „Mali kuhar" — 28. maj',
    'Slobodna mjesta u vrtiću Bambi',
    'Vijeće roditelja zasjeda 30. maja',
  ];
  return (
    <div className="relative z-30 overflow-hidden border-b border-ink/10 bg-ink text-paper">
      <div className="marquee-track py-2.5">
        {[...items, ...items, ...items].map((t, i) => (
          <span
            key={i}
            className="mx-6 inline-flex shrink-0 items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em]"
          >
            <Star className="h-3 w-3" color="#E8A93B" />
            {t}
            <HiArrowLongRight className="opacity-50" />
          </span>
        ))}
      </div>
    </div>
  );
}
