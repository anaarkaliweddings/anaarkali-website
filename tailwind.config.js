/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'luxury-primary': '#4F0D0E',
        'luxury-secondary': '#3C2E23',
        'luxury-accent': '#ECEBE1',
      },
      fontFamily: {
        'primary': ['ITC Garamond STD', 'Garamond', 'Times New Roman', 'serif'],
        'interface': ['Arial Unicode MS', 'Arial', 'Helvetica', 'sans-serif'],
        'technical': ['Roboto Mono', 'Courier New', 'monospace'],
      },
      animation: {
        'luxury-fade-in': 'luxury-fade-in 0.8s ease-out',
        'luxury-slide-up': 'luxury-slide-up 1s ease-out',
        'emblem-glow': 'emblem-glow 3s ease-in-out infinite',
      },
      keyframes: {
        'luxury-fade-in': {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'luxury-slide-up': {
          'from': {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'emblem-glow': {
          '0%, 100%': { filter: 'drop-shadow(0 0 8px rgba(79, 13, 14, 0.3))' },
          '50%': { filter: 'drop-shadow(0 0 16px rgba(79, 13, 14, 0.6))' },
        },
      },
    },
  },
  plugins: [],
}
