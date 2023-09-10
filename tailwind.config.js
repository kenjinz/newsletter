/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tomato: '#FF6257',
        'dark-slate-grey': '#242742',
        'charcoal-grey': '#36384E',
        grey: '#9294A0',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        desktop: '1440px',
        mobile: '375px',
      },
    },
  },
  plugins: [],
};
