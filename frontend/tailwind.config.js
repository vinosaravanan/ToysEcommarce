/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '750px': '750px',   
        '1020px': '1020px', 
      },
      fontFamily:{
         custom:["Bowlby One", 'sans-serif']
      }

    },
  },
  plugins: [],
}

