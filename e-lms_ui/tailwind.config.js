module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: '#213159',
        secondary: '#3D6098',
        lightRed: '#F04B4C',
        darkRed:'#B50F0F',
        lightGray: '#E7E7E7'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
