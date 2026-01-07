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
          DEFAULT: '#3D3529',
          light: '#5a5040',
        },
        ivory: '#F5F1E8',
        sandstone: {
          DEFAULT: '#E8DFD0',
          light: '#F0E9DD',
          dark: '#D5C8B5',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E4C459',
          dark: '#B89930',
        },
        taupe: {
          DEFAULT: '#B39F8D',
          light: '#C8B8A8',
          dark: '#9A8775',
        },
        sage: {
          DEFAULT: '#9B9F8F',
          light: '#B5B9AB',
          dark: '#7A7E70',
        },
        warmwhite: '#FDFCFA',
        charcoal: {
          DEFAULT: '#3D3529',
          light: '#5a5040',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        mono: ['var(--font-roboto-mono)', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px -4px rgba(61, 53, 41, 0.08)',
        'soft-lg': '0 10px 40px -10px rgba(61, 53, 41, 0.12)',
        'soft-xl': '0 20px 60px -15px rgba(61, 53, 41, 0.15)',
        'gold': '0 4px 20px -4px rgba(212, 175, 55, 0.2)',
        'gold-lg': '0 10px 40px -10px rgba(212, 175, 55, 0.25)',
        'lift': '0 8px 30px -8px rgba(61, 53, 41, 0.15)',
      },
      backgroundImage: {
        'gradient-ivory': 'linear-gradient(180deg, #F5F1E8 0%, #E8DFD0 100%)',
        'gradient-subtle': 'linear-gradient(180deg, #FDFCFA 0%, #F5F1E8 50%, #E8DFD0 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #E4C459 100%)',
        'gradient-gold-hover': 'linear-gradient(135deg, #B89930 0%, #D4AF37 100%)',
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
