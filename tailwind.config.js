/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}'],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

