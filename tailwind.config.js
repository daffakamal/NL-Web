/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-NL' : '#DA4949',
        'black-NL' : '#434343',
        'pink-NL' : '#FE8F75'
      },
      boxShadow: {
        '3xl': '0 15px 60px  rgba(0, 0, 0, 0.5)',
        'custom': '10px 10px 15px rgba(0, 0, 0, 0.3)',
      },
      height: {
        '100': '25em',
        '200': '120rem',
      },
      fontSize: {
        '4.5xl' : '2.65rem'
      },
      borderRadius: {
        '10xl': '45px',
        '180px': '180px',
      }
    },
  },
  plugins: [],
}
