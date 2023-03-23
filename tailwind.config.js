/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#5F33E1'
      },
      boxShadow:{
        'basic': 'box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.04);'
      }
    },
  },
  plugins: [],
}