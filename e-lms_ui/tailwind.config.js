module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize:{
        'calc-1':'13px',
        'calc-2':'19px',
        'calc-3':'14px',
        'calc-4':'11px',
        'calc-5':'12px',
        'calc-6':'15px',
      },
      fontFamily:{
        poppins:'Poppins',
        lobster:'Lobster',
      },
      height:{
        'calc-1':'65vh',
        'calc-2':'50vh',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
