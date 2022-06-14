const plugin = require('tailwindcss/plugin');
const ydStylesComponents = require('./yd-styles');
const ydComponents = plugin(
  ({ addBase, addComponents, theme }) => {
    console.log(
      '🍺 kk-custom-tailwind-plugin启动成功 🍺',
      addBase,
      addComponents,
      theme
    );
    addComponents(ydStylesComponents);
  },
  {
    theme: {
      colors: {
        // <div class="text-yc-select-hover"></div>
        'yc-select-hover': 'var(--sc-bgcolor)',
      },
    },
  }
);
module.exports = ydComponents;
