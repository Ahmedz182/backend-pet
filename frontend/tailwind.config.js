/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    colors: {
      transparent: 'transparent',
      darkGreen: '#2CD52B',
      green: '#3CDA5F',
      lightGreen: '#B1F9C6',
      darkBlue: '#0A2640',
      white: '#ffff',
      black: '#000',
      red: '#FD273B',
      purple: '#A020F0'

    },
    screens: {
      'sm': { 'max': '576px' },
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

