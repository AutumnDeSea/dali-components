module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss/nesting",
    "tailwindcss",
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env", // 允许你使用未来的 CSS 特性
      { 
        autoprefixer: {
          flexbox:"no-2009"
        },
        // feature: {
        //   "nesting-rules": true
        // },
        stage: 3
      }
    ]
  ]
}
// 去除了post-preset-env 的嵌套规则， 使用tailwindcss/nesting规则，因为tailwindcss/nesting和mui的设置css相同
