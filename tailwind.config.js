const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/**/**/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#a13259',
          DEFAULT: '#a13259',
          dark: '#4e1929',
        },
        gray: {
          light: '#d1d1d1',
          DEFAULT: '#707070',
          dark: '#707070',

          snow: '#fbf9f8',
          filter: '#f4f3ee',
        },
      },
      fontFamily: {
        'proxima-nova': ['ProximaNova', ...defaultTheme.fontFamily.sans],
        journalism: ['Journalism', ...defaultTheme.fontFamily.sans],
      },
    },
  }
};
