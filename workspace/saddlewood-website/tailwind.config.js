/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark base palette
        obsidian: '#0B0D0F',
        surface: {
          DEFAULT: '#141619',
          light: '#1C1F24',
          raised: '#24282E',
        },
        // Brand accent – retained gold
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E4C459',
          dark: '#B89930',
          muted: '#8B7B3A',
        },
        // Silver text system
        silver: {
          DEFAULT: '#A8B2C1',
          light: '#C8D0DC',
          dark: '#7A8494',
        },
        // Semantic text tokens
        'text-primary': '#F0F2F5',
        'text-secondary': '#A8B2C1',
        'text-muted': '#6B7280',
        'text-inverse': '#0B0D0F',
        // Border tokens
        'border-default': '#2A2E35',
        'border-hover': '#3A3F48',
        // Legacy aliases for compatibility
        primary: {
          DEFAULT: '#0B0D0F',
          light: '#141619',
        },
        charcoal: {
          DEFAULT: '#0B0D0F',
          light: '#141619',
        },
        ivory: '#141619',
        warmwhite: '#0B0D0F',
        sandstone: {
          DEFAULT: '#1C1F24',
          light: '#24282E',
          dark: '#141619',
        },
        taupe: {
          DEFAULT: '#7A8494',
          light: '#A8B2C1',
          dark: '#6B7280',
        },
        sage: {
          DEFAULT: '#7A8494',
          light: '#A8B2C1',
          dark: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px -4px rgba(0, 0, 0, 0.3)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.4)',
        'soft-xl': '0 20px 60px -15px rgba(0, 0, 0, 0.5)',
        'gold': '0 4px 20px -4px rgba(212, 175, 55, 0.25)',
        'gold-lg': '0 10px 40px -10px rgba(212, 175, 55, 0.35)',
        'lift': '0 12px 40px -8px rgba(0, 0, 0, 0.5)',
        'inner-soft': 'inset 0 2px 6px 0 rgba(0, 0, 0, 0.2)',
        'glow-gold': '0 0 30px rgba(212, 175, 55, 0.15)',
      },
      backgroundImage: {
        'gradient-ivory': 'linear-gradient(180deg, #141619 0%, #1C1F24 100%)',
        'gradient-subtle': 'linear-gradient(180deg, #0B0D0F 0%, #141619 50%, #1C1F24 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #E4C459 100%)',
        'gradient-gold-hover': 'linear-gradient(135deg, #B89930 0%, #D4AF37 100%)',
        'gradient-luxury': 'linear-gradient(180deg, #0B0D0F 0%, #141619 30%, #1C1F24 70%, #24282E 100%)',
        'gradient-warm': 'linear-gradient(135deg, #141619 0%, #1C1F24 50%, #24282E 100%)',
        'gradient-hero': 'radial-gradient(ellipse at top, #141619 0%, #0B0D0F 50%, #0B0D0F 100%)',
        'noise-texture': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        'linen-texture': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
