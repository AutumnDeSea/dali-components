import { addons } from '@storybook/addons';
import theme from './ydTheme';

addons.setConfig({
  sidebar: {
    showRoots: false,
  },
  toolbar: {
    'storybook/background': { hidden: true },
  },
  theme,
});
