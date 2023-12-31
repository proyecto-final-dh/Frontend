import { screens } from 'tailwindcss/defaultTheme';

export const mode = 'jit';
export const content = ['./src/**/*.{ts,tsx}'];
export const theme = {
  screens,
  colors: {
    primary: '#D8A868',
    orange: '#FFAE12',
    black: '#000000',
    white: '#FFFFFF',
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
};
export const plugins = [];
