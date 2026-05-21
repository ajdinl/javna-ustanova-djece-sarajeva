/* Hand-drawn SVG decorative elements. All inherit currentColor where useful. */

export function Squiggle({ className = '', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 120 24" className={className} fill="none" aria-hidden>
      <path
        d="M2 12 Q15 2, 30 12 T58 12 T86 12 T118 12"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Star({ className = '', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden>
      <path
        d="M20 3 L23 17 L37 20 L23 23 L20 37 L17 23 L3 20 L17 17 Z"
        fill={color}
      />
    </svg>
  );
}

export function Sun({ className = '', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden>
      <circle cx="40" cy="40" r="14" fill={color} />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 12;
        const x1 = 40 + Math.cos(a) * 22;
        const y1 = 40 + Math.sin(a) * 22;
        const x2 = 40 + Math.cos(a) * 32;
        const y2 = 40 + Math.sin(a) * 32;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export function Cloud({ className = '', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 120 60" className={className} fill="none" aria-hidden>
      <path
        d="M20 50 Q5 50 5 38 Q5 26 18 26 Q22 12 38 12 Q52 12 56 24 Q70 14 84 24 Q100 22 104 38 Q116 38 115 50 Z"
        fill={color}
      />
    </svg>
  );
}

export function Bee({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 60" className={className} fill="none" aria-hidden>
      {/* wings */}
      <ellipse cx="32" cy="18" rx="14" ry="10" fill="#FBF8F1" stroke="#1C1814" strokeWidth="2" />
      <ellipse cx="50" cy="18" rx="14" ry="10" fill="#FBF8F1" stroke="#1C1814" strokeWidth="2" />
      {/* body */}
      <ellipse cx="40" cy="36" rx="22" ry="14" fill="#E8A93B" stroke="#1C1814" strokeWidth="2" />
      <path d="M30 28 L34 44" stroke="#1C1814" strokeWidth="3" />
      <path d="M40 26 L42 46" stroke="#1C1814" strokeWidth="3" />
      <path d="M50 28 L46 44" stroke="#1C1814" strokeWidth="3" />
      <circle cx="22" cy="34" r="2" fill="#1C1814" />
      <path d="M16 30 Q14 22 22 22" stroke="#1C1814" strokeWidth="2" fill="none" />
      <circle cx="22" cy="22" r="2" fill="#1C1814" />
    </svg>
  );
}

export function Balloon({ className = '', color = '#C9533A' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 60 100" className={className} fill="none" aria-hidden>
      <ellipse cx="30" cy="34" rx="24" ry="30" fill={color} />
      <path d="M30 64 L26 70 L34 70 Z" fill={color} />
      <path d="M30 70 Q34 78 28 86 Q32 94 28 98" stroke="#1C1814" strokeWidth="1.5" fill="none" />
      <ellipse cx="20" cy="24" rx="5" ry="8" fill="rgba(255,255,255,0.4)" transform="rotate(-20 20 24)" />
    </svg>
  );
}

export function Blob({ className = '', color = '#E8A93B' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <path
        fill={color}
        d="M44.7,-58.9C57.8,-49.4,68.4,-35.8,72.9,-20.2C77.4,-4.6,75.6,12.9,68.2,27.4C60.7,41.8,47.4,53.1,32.6,60.8C17.9,68.5,1.6,72.6,-14.9,71.4C-31.5,70.2,-48.2,63.7,-58.1,51.5C-67.9,39.4,-70.9,21.6,-71.1,4C-71.4,-13.7,-68.9,-31,-58.9,-41.7C-48.9,-52.4,-31.4,-56.4,-15.3,-58.9C0.8,-61.4,15.6,-62.4,30.7,-65.4C45.7,-68.4,60.9,-73.4,44.7,-58.9Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function Arrow({ className = '', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 80 40" className={className} fill="none" aria-hidden>
      <path
        d="M4 22 Q24 8, 44 22 T74 22"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M64 14 L74 22 L66 30"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function Dots({ className = '', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      {Array.from({ length: 7 }).map((_, r) =>
        Array.from({ length: 7 }).map((__, c) => (
          <circle key={`${r}-${c}`} cx={10 + c * 14} cy={10 + r * 14} r="2" fill={color} />
        ))
      )}
    </svg>
  );
}

export function Sparkle({ className = '', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"
        fill={color}
      />
    </svg>
  );
}

export function Heart({ className = '', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 21s-7-4.5-9.5-9.5C.5 7 3.5 3 7 3c2 0 3.5 1 5 3 1.5-2 3-3 5-3 3.5 0 6.5 4 4.5 8.5C19 16.5 12 21 12 21z"
        fill={color}
      />
    </svg>
  );
}
