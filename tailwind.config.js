/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  backgroundImage: {
      "hero-bg-img": "url('./images/hero/rollabg.png')",
      "detail-bg-img": "url('./images/detail/rollaclub.png')"
    },},
  },
  plugins: [],
}
