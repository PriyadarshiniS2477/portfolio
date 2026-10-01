/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: '#000000',
        surface: {
          DEFAULT: '#0d0d0d',
          card:    '#111111',
          hover:   '#181818',
          border:  '#222222',
          subtle:  '#1a1a1a',
        },
        accent: {
          green:   '#00e5a0',   // primary CTA / active
          teal:    '#14b8a6',
          amber:   '#f59e0b',
          purple:  '#a78bfa',
          rose:    '#fb7185',
          cyan:    '#22d3ee',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'monospace'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter:  '-0.03em',
        tight:    '-0.02em',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink':      'blink 1.2s step-end infinite',
        'glow':       'glow 2s ease-in-out infinite alternate',
        'fade-up':    'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        glow: {
          '0%':   { boxShadow: '0 0 8px rgba(0,229,160,0.15)' },
          '100%': { boxShadow: '0 0 24px rgba(0,229,160,0.35)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
        'noise':    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      backgroundSize: {
        'dot-size': '28px 28px',
      },
    },
  },
  plugins: [],
}
