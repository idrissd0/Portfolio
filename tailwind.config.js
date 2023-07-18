/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./dist/*.html","./javascrit/*.js"],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },

      screens:{
        // "sm":"0px",
        // "xs":"40px",
        // 'max-xs': {'max': '580px'},
        
      },

      colors:{
        custom1: '#0F1726',
        custom2: 'rgb(23, 37, 50)',
        whiteopacity9: 'rgb(230, 230, 230)',
        whiteopacity5: 'rgb(146, 154, 166)'
      },
    },
    fontFamily:{
      nunito: ['Nunito', 'sans-serif']
    },
    height:{
      calc100: 'calc(100vh - 120px)'
    }
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

