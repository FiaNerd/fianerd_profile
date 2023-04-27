/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        golden: '#facd8a',
        'golden-for-white': '#daae19',
        black: '#000',
        dark: '#18181b',
        white: '#fdfdf9',
        'light-gray': '#87928b',
        'gray': '#27272b',
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'main-size': '1rem',
        logo: '3.5rem',
        'sub-title': '1.36rem',
        'title-mobile': '1.2rem',
        'title-xs': '1.4rem',
        'title-sm': '1.8rem',
        'title-md': '2rem',
        'title-lg': '3rem',
        'xl-large': '3.2rem',
      },
      fontWeight: {
        thin: 100,
        'thin-italic': 100,
        'extra-light-italix': 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        'extra-bold': 800,
        black: 900,
      },
      borderWidth:{
        'sm-bt': '0.2px',
        'm-b': '1px',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '90em',
        '16': '4rem',
      },
    extend: {
        backgroundImage: theme => ({
            'hero': "url('/images/hero-img_mobile.jpg')",
            'hero-md': "url('/images/hero-img_desktop.jpg')",
            'hero-lg': "url('/images/hero-img_desktop.jpg')",
            'hero-xl': "url('/images/hero_img_xl.jpg')",
        }),
          height: {
            '480': '30rem',
            '640': '40rem',
            '768': '45rem',
          },
          maxWidth: {
            '920': '920px',
            '1070': '1070px',
          },
    },
  },
  plugins: [],
}
