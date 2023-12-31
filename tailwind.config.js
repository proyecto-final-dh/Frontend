const { screens } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    screens,
    colors: {
      primary: '#D8A868',
      'primary-light': '#F3C58E',
      orange: '#FFAE12',
      'orange-dark': '#B76435',
      'orange-light': '#F7D8B2',
      'orange-gray': '#f7ede0',
      black: '#000000',
      white: '#FFFFFF',
      gray: '#B9B9B9',
      'mid-gray': '#F4F3F3',
      'light-gray': '#F0F0F0',
      'mui-gray': '#BDBDBD',
    },
    fontSize: {
      h1: ['36px'],
      h2: ['28px'],
      h3: ['24px'],
      'body-m': ['22px'],
      'body-s': ['20px'],
      'detail-s': ['18px'],
      'detail-xs': ['14px'],
    },
    fontFamily: {
      regular: ['Open Sans'],
      medium: ['Open Sans'],
      bold: ['Open Sans'],
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  plugins: [],
};
