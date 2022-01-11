module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#2996cc',
        },
        secondary: {
          100: '#121212',
          200: '#222',
          300: '#383838',
          400: '#d3d3d3',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(290px, 290px))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
