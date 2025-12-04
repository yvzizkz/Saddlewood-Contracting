/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-darker': 'var(--color-primary-darker)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        'accent-dark': 'var(--color-accent-dark)',
        gold: 'var(--color-gold)',
        'gold-light': 'var(--color-gold-light)',
        'gold-dark': 'var(--color-gold-dark)',
        charcoal: 'var(--color-charcoal)',
        'charcoal-light': 'var(--color-charcoal-light)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
        mono: ['var(--font-roboto-mono)', 'monospace'],
      },
      boxShadow: {
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.3)',
      },
      backgroundImage: {
        'gradient-premium': 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
        'gradient-gold': 'linear-gradient(135deg, #d4af37 0%, #c9a227 50%, #b8960f 100%)',
      },
    },
  },
  plugins: [],
}
