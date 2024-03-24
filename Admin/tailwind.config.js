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
      textColor:{
        primary:"black",
        secondary:"White",
        accence:"#ADFC32",  //green
        darkgray:"#C6C3C3",
        red:"#B63333"
      },
      backgroundColor:{
        yellow: "#F7C74C"
      },
      boxShadow:{
        boxshade: "1px 0px 11.5px 0px #00000040"
      },
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

