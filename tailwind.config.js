/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-NL' : '#DA4949',
      },
      boxShadow: {
        '3xl': '0 15px 60px  rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
