module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Primary-color':'#F36630',
        'hover-primary':'#dd5e2c',
        'Secondary-color':'#07294d',
        'hover-secondary':'#071f3a',
        'text-color':'#202020',  
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'max-xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'max-lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'max-md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'max-sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
    },
    
  },
  plugins: [],
}

