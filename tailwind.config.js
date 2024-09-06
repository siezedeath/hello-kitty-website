/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'hello-kitty-pink': '#c493e9',
        'hello-kitty-red': '#ff6b6b',
        'hello-kitty-blue': '#add8e6',
        'hello-kitty-yellow': '#fffacd',
        'hello-kitty-gray': '#4a4a4a',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
