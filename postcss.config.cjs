// ✅ Korrekte PostCSS-Konfiguration für Tailwind v4
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    tailwindcss(),
    autoprefixer()
  ]
};
