/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        backgroundGreen: "#317849",
        borderGreen: "#009B35",
        inputBackgroundGreen: "#D8EAE1",

      },
      boxShadow:{
        '1xl': "-2px 20px 28px 18px #0E4224C2",
      },
      fontFamily:{
        'mulish': ["Mulish"],
      }
    },
  },
  plugins: [],
}

