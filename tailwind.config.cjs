/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: { 
        white: '#ffffff',
        blue: '#091e42',
        orange: '#f55800',
        background: '#1c1a19',
        navbar: '#3e3c3c',
      }
    },
    fontFamily: { 
      'title': ['Crete Round', 'serif'],
      'header': ['Roboto', 'sans-serif'],
      'text': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
