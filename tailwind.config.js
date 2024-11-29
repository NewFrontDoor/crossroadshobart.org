/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    fontWeight: {
      normal: '400',
      bold: '500'
    },
    fontFamily: {
      sans: ['Abordage', 'sans-serif'],
      display: ['Basteleur', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
};
