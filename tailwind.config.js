/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
        colors: {
            'navy': '#304463',
            'background': '#F0EBE3',
           },
          fontSize: {
            sm: '0.600rem',
            base: '0.8rem',
            xl: '1.066rem',
            '2xl': '1.421rem',
            '3xl': '1.894rem',
            '4xl': '2.525rem',
            '5xl': '3.366rem',
          },
          fontFamily: {
            metro: ['Metrophobic', 'sans-serif'],
            pacifico: ['Pacifico', 'cursive'],
          },
          fontWeight: {
            normal: '400',
            bold: '700',
          },
          width: {
            '1/10': '10%',
            '1/9': '11.1%',
            '1/8': '12.5%',
            '1/7': '14.2%',
            '1/6': '16.6%',
            '1/5': '20%',
            '1/4': '25%',
            '1/3': '33.3%',
            '2/5': '40%',
            '1/2': '50%',
            '3/5': '60%',
            '2/3': '66.6%',
            '3/4': '75%',
            '4/5': '80%',
            '5/6': '83.3%',
            '6/7': '85.7%',
            '7/8': '87.5%',
            '8/9': '88.8%',
            '9/10': '90%',
          },
    },
  },
  plugins: [],
}

