/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#006EE9',
        ascent:'#FF8A00',
        neutral: '#1c1243',
        neutral1:'#A29EB6',
        neutral2:'#A29EB6',
        neutral3:'#EFF1F3',
        semantic:'#FF6A5D',
        semantic2:'#47C272',
        text:'#4A4646'
      },
      boxShadow:{
        'basic': 'box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.04);'
      }
    },
  },
  plugins: [],
}