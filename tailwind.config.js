/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      'gray-100': '#e1e1e6',
      'gray-300': '#c4c4cc',
      'gray-400': '#8d8d99',
      'gray-600': '#323238',
      'gray-700': '#29292e',
      'gray-800': '#202024',
      'gray-900': '#121214',
      'green-300': '#00B37E',
      'green-500': '#00875f',
      'red-500': '#f75a68',
      white: '#ffffff',
    },
  },
  plugins: [],
}
