/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primaryColor: '#39015e',
        primaryColorLight:'#45015e',
        secondaryColor:'#ffcc00',
        paragraphColor:'#c0c0c0',
        whiteColor:'#fff',
        blackColor:'#000',
        greenColor:'#007936',
        redColor:'#cc3433',
        darkColor:'#000',
        darkColorLight:'#171717',
      },
      keyframes: {
        move: {
          "50%": {transform: 'translateY(-1rem)'}
        }
      },
      animation: {
        'movingY': 'move 2s linear infinite'
      }

      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
        },
    },
    fontFamily: {
      oswald:['Oswald','sans-serif'],
      dmsans:['DM Sans', 'sans-serif'],
      nunito:['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}

