/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor:{
        primary:"black",
        secondary:"White",
        accence:"#ADFC32",
        darkgray:"#C6C3C3"
      },
      backgroundColor:{
        primary:"black",
        secondary:"White",
        accence:"#ADFC32",
        darkgray:"#C6C3C3"
      },
    },
  },
  plugins: [],
}
