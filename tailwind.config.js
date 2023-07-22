/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      bg: 'white',
      darkBlue: '#1a3248',
      lightBlue: '#04b5aa'
    },
    spacing: {
      // Theme spacing
      0: '0rem',
      1: '.25rem',
      2: '.5rem',
      3: '1rem',
      4: '2rem',
      5: '4rem',

      // Specific widths
      '5rem': '5rem'
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif']
    }
  },
  plugins: []
};
