/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor :{
        'primary' :'rgb(85, 74, 210)',
        'secondary':'#2b2d77',
      }
    },
  },
  plugins: [],
}

