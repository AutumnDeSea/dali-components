const plugin = require('tailwindcss/plugin');
const ydStylesComponents = require('./yd-styles');
const ydComponents = plugin(
  ({ addBase, addComponents, theme }) => {
    console.log(
      '🍺 solv-custom-tailwind-plugin启动成功 🍺',
      addBase,
      addComponents,
      theme
    );
    // 注入都全局的css
    addComponents(ydStylesComponents);
  },
  {
    //   主题的扩展
    theme: {
      colors: {
        // <div class='text-yd-slecet-hover'></div>
        // 可以用-连接而不用像官网
        // 'yd-slecet-hover': "var(--sc-bgcolor)"
      },
      extend: {},
    },
  }
);

module.exports = ydComponents;
