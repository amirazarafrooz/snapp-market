/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
   
 
    extend: {
      colors: {
        'snp-primary': '#0a2cdc',
        'snp-secondary': '#556ff7',
        'snp-light': '#e6e9fd',
        'snp-highdiscount': '#fa0f1b',
        'snp-lowdiscount': '#42B029',
        'snp-yellow': '#ffc82c',
        'snp-white': '#FFFFFF',
        'snp-black': '#000000',
        'snp-gray': '#CCCDD3',
        'snp-lightgray' : '#eeeeee',
        'snp-orange' : '#FDA058',
        'snp-lightblack' : '#1a1c23',
        'snp-bg-body' : '#FAFAFA'
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        iransans : ["iransans", 'sans-serif'],
        iransansb : ["iransansbold", 'sans-serif'],
        iransansl : ["iransanslight", 'sans-serif'],
  
      },
      brightness: {
        25: '.25',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      width: {
        '144' : '32rem', //576px
        '192' : '48rem', //768px
        '248' : '62rem', //992px
        '300' : '75rem'  //1200px
      },
      screens: {
        'mobile': '576px',
        // => @media (min-width: 560px) { ... }

        'tablet': '768px',
        // => @media (min-width: 768px) { ... }
  
        'laptop': '992px',
        // => @media (min-width: 992px) { ... }
  
        'desktop': '1200px',
        // => @media (min-width: 1200px) { ... }
      },
  }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}