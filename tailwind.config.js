/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#0A192F',
        'medical-blue': '#0057FF',
      },
      fontFamily: {
        sans: ['"Pretendard"', '"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
