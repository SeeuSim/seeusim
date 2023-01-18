/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        vermillion: "#ff3e00"
      }
    },
    screens: {
      "mini": '480px'
    },

  },
  darkMode: 'class',
  plugins: [],
}
