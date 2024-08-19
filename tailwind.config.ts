import type { Config } from 'tailwindcss';

const colors = require('tailwindcss/colors');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  //darkMode: "class",
  theme: {
    fontFamily: {},
    colors: {
      zinc: colors.zinc,
      purple: {
        800: '#3F2070',
        700: '#5D22AA',
        600: '#6B24BF',
        500: '#7158EF',
        400: '#8358F4',
        300: '#955BEC',
        200: '#B081FD',
      },
      blue: {
        DEFAULT: '#6992ED',
        300: '#2EAEF6',
      },
      pink: {
        DEFAULT: '#FB7E8F',
        500: '#FC6A84',
        600: '#FF717D',
      },
      yellow: {
        DEFAULT: '#F2F1D3',
      },
      green: {
        DEFAULT: '#63cf96',
        400: '#A6D25F',
        600: '#4EAF7C',
      },
      red: {
        200: '#F5CDC5',
        400: '#BD0000',
      },
      white: colors.white,
    },
    extend: {
      colors: {
        textColor: '#3f3f46',
      },
      fontSize: {
        //[fontSize, lineHeight]
        xs: ['0.55rem', '1rem'],
        s: ['0.8rem', '1rem'],
        h5: ['0.7rem', '1.3rem'],
        h4: ['0.8rem', '1.5rem'],
        h3: ['1rem', '1.3rem'],
        h2: ['1.5rem', '1.5rem'],
        h1: ['2.5rem', '2rem'],
      },
      borderWidth: {
        '1': '1px',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '120ch', // add required value here
          },
        },
      },
    },
  },
  plugins: [
    //require("@tailwindcss/typography"),
    // ...
  ],
};
export default config;
