/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2c2622',
          darker: '#1a1714',
        },
        secondary: '#faf8f5',
        accent: {
          DEFAULT: '#a67c52',
          dark: '#8b6914',
        },
        sandstone: {
          DEFAULT: '#d4c4a8',
          light: '#e8dcc8',
          dark: '#b8a88c',
        },
        clay: {
          DEFAULT: '#c4846a',
          light: '#d9a08a',
        },
        sage: {
          DEFAULT: '#8a9a7a',
          light: '#a8b89a',
          dark: '#6b7a5a',
        },
        terracotta: {
          DEFAULT: '#d4613a',
          light: '#e67e50',
          dark: '#b84e2a',
        },
        coral: {
          DEFAULT: '#e8927c',
          light: '#f0a898',
        },
        warmwhite: '#fdfcfa',
        desert: '#f5f0e8',
        charcoal: {
          DEFAULT: '#3d3631',
          light: '#5a534d',
        },
        gold: '#d4af37',
        'gold-light': '#e4c459',
        'gold-dark': '#b8972e',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        mono: ['var(--font-roboto-mono)', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px -4px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.12)',
        'soft-xl': '0 20px 60px -15px rgba(0, 0, 0, 0.15)',
        'warm': '0 4px 20px -4px rgba(166, 124, 82, 0.15)',
        'warm-lg': '0 10px 40px -10px rgba(166, 124, 82, 0.2)',
      },
      backgroundImage: {
        'gradient-desert': 'linear-gradient(180deg, #faf8f5 0%, #f5f0e8 50%, #ebe4d8 100%)',
        'gradient-sand': 'linear-gradient(135deg, #f5f0e8 0%, #ebe4d8 100%)',
        'gradient-warm': 'linear-gradient(135deg, #a67c52 0%, #8b6914 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(250,248,245,0) 0%, rgba(250,248,245,1) 100%)',
        'gradient-sunset': 'linear-gradient(180deg, #f4d4c0 0%, #d4a574 100%)',
        'gradient-sunrise': 'linear-gradient(180deg, #faf8f5 0%, #f4d4c0 50%, #e8c4a8 100%)',
        'gradient-cta': 'linear-gradient(135deg, #d4613a 0%, #e67e50 100%)',
        'gradient-cta-hover': 'linear-gradient(135deg, #b84e2a 0%, #d4613a 100%)',
        'mountain-fade': 'linear-gradient(180deg, transparent 0%, rgba(245,240,232,0.8) 100%)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
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
      },
    },
  },
  plugins: [],
}
