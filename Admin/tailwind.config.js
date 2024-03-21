/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "custom-gray" : "#737791",
      "custom-black" : "#151D48",

      fontFamily:{
        Heading:'"Inter", sans-serif',
        Para:'"Poppins", sans-serif',
        indexs:"Limelight",
        head:'"Bebas Neue", sans-serif'
      }
    }
    
  },
  plugins: [],
}

