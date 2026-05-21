import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F4ECDE',
        'paper-2': '#EFE4D1',
        ink: '#1C1814',
        'ink-soft': '#3A322A',
        clay: '#C9533A',
        'clay-deep': '#A53D26',
        sage: '#5F7F4F',
        'sage-deep': '#3F5A33',
        sun: '#E8A93B',
        'sun-deep': '#C68820',
        sky: '#6B98C9',
        'sky-deep': '#3F6A9C',
        blush: '#E8B4A0',
        plum: '#6B3A52',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.05em',
        'super-tight': '-0.03em',
      },
      animation: {
        'spin-slow': 'spin 22s linear infinite',
        'spin-slower': 'spin 42s linear infinite',
        'float-y': 'float-y 6s ease-in-out infinite',
        'float-y-slow': 'float-y 9s ease-in-out infinite',
        wiggle: 'wiggle 4s ease-in-out infinite',
        marquee: 'marquee 38s linear infinite',
      },
      keyframes: {
        'float-y': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'paper-sm': '0 1px 0 rgba(28, 24, 20, 0.06), 0 1px 3px rgba(28, 24, 20, 0.06)',
        paper: '0 2px 0 rgba(28, 24, 20, 0.08), 0 8px 24px -8px rgba(28, 24, 20, 0.18)',
        'paper-lg': '0 4px 0 rgba(28, 24, 20, 0.1), 0 24px 60px -20px rgba(28, 24, 20, 0.25)',
        stamp: '4px 4px 0 0 rgba(28, 24, 20, 1)',
        'stamp-sm': '2px 2px 0 0 rgba(28, 24, 20, 1)',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
