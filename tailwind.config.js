/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Syne': ['Syne'],
        'Open Sans':['Open Sans']
        },

        screens: {
          '700': '700px',
          '1180':'1180px',
           '980':'980px'
          },

    },
    
  },
  plugins: [],
}

