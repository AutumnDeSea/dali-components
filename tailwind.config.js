// 排版插件
const typography = require("@tailwindcss/typography")
module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.html', './public/index.html'],
  important: '#root',
  theme: {
    extend: {},
  },
  plugins: [typography, require('./plugin')],
}
