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
        barber: {
          'purple-dark': '#2A0845',
          'purple-medium': '#4A148C',
          'purple-light': '#7B1FA2',
          'accent': '#CE93D8',
          'accent-light': '#E1BEE7',
          'metal': '#9E9E9E',
          'metal-light': '#E0E0E0',
        }
      },
      animation: {
        blob: 'blob 7s infinite',
        shine: 'shine 2s linear infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        shine: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        glow: {
          '0%': { textShadow: '0 0 5px rgba(206, 147, 216, 0.5)' },
          '100%': { textShadow: '0 0 20px rgba(206, 147, 216, 0.8), 0 0 30px rgba(123, 31, 162, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'purple-gradient': 'linear-gradient(135deg, #4A148C, #7B1FA2, #6A1B9A)',
        'accent-gradient': 'linear-gradient(to right, #CE93D8, #E1BEE7, #CE93D8)',
        'metal-gradient': 'linear-gradient(to right, #E0E0E0, #FFFFFF, #BDBDBD, #9E9E9E)',
        'diagonal-lines': 'repeating-linear-gradient(45deg, #7B1FA2 0, #7B1FA2 1px, transparent 0, transparent 10px)',
      },
    },
  },
  plugins: [],
} 