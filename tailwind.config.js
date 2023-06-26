/** @type {import('tailwindcss').Config} */
const { createThemes } = require('tw-colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    createThemes({
      light: {
        primary: 'steelblue',
        secondary: 'darkblue',
        brand: '#F3F3F3',
        text: 'black',
      },
      dark: {
        primary: 'turquoise',
        secondary: 'tomato',
        brand: '#4A4A4A',
        text: 'white',
      },
      forest: { primary: '#2A9D8F', secondary: '#E9C46A', brand: '#264653' },
    }),
  ],
  darkMode: ['class', '.theme-dark'],
}
