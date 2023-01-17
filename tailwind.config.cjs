/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {
      colors: { 
        white: '#ffffff',
        blue: '#091e42',
        orange: '#f55800',
        background: '#1c1a19',
        navbar: '#3e3c3c',
        text: '#1c1a19',
        bgtext: '#ff6b00',
        bordertech: '#8993a4',
        outro: '#172b4d',

      }
    },
    fontFamily: { 
      'title': ['Crete Round', 'serif'],
      'header': ['Roboto', 'sans-serif'],
      'text': ['Poppins', 'sans-serif'],
      'inter': ['inter', 'serif'],
    },
  },
  plugins: [],
}
