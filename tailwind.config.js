const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
     // ...
     flowbite.content(),
      "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors : {
      'shar' : '#FFBD59',
      'prp'  : '#5E17EB',
      'har' : '#373737',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [ 
    require('flowbite/plugin'),
    // ...
    flowbite.plugin(),
  ],

};
