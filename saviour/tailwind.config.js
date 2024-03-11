/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        shojumaru: ['Shojumaru', 'system-ui'],
        ZCOOLKuaiLe:['ZCOOL KuaiLe', 'sans-serif']
      }
    },
  },
  plugins: [],
}