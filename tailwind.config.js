/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xxs': {'max':'320px'},
      'xs': {'max':'370px'},
      'sm': {'max':'576px'},
      'md': {'max':'768px'},
      'lg': {'max':'1024px'},
      'xl': {'max':'1280px'},
      '2xl': {'max':'1536px'},
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blue': '#7854F7',
      'sky': '#299EF3',
      'green': '#70C217',
      'black': '#272D4E',
      'gray': '#94A2B3',
      'white': '#ffffff'
    },
    fontFamily: {
      'poppins': 'poppins'
    }
},
  plugins: []
}