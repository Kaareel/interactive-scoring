/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        iconColor:'hsla(217deg, 12%, 63%, 0.075)', cardColor1:'#222933', cardColor2:'#161e29'
      }
    },
  },
  plugins: [],
}

