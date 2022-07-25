/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'bebasNeue': 'Bebas Neue',
      },
      colors: {
        'main-gray': '#282828',
        'main-green': '#39BA46',
        'main-blue': '#2E6FE6',
      },
    },
  },
  plugins: [],
}
