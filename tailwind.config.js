/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary': '#0a2cdc',
      'secondary': '#556ff7',
      'light': '#e6e9fd',
      'highdiscount': '#fa0f1b',
      'lowdiscount': '#42B029',
      'yellow': '#ffc82c',
      'white': '#FFFFFF',
      'black': '#000000',
      'gray': '#CCCDD3',
      'lightgray' : '#eeeeee',
      'orange' : '#FDA058'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      iransans : ["iransans", 'sans-serif'],
      iransansb : ["iransansbold", 'sans-serif'],
      iransansl : ["iransanslight", 'sans-serif'],

    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    }
  },
  plugins: [],
}