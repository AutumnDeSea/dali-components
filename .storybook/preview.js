import '../src/App.css';
import { themes, addDecorator } from '@storybook/theming';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider as Emotion10ThemeProvider } from '@emotion/react';

const defaultTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
//parameters 功能和插件的行为。
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  themes: {
    default: 'dark',
    disabled: true,
    list: [
      { name: 'dark', class: 'theme-dark', color: '#1b1b24' },
      { name: 'light', class: 'theme-light', color: '#ffff' },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    }
  },
  docs: {
    theme: {
      ...themes.dark, // UI
      appBg: '#1b1b24',
      appContentBg: '#1b1b24',
      // appBorderColor: 'grey',
      appBorderRadius: 4,
      // Toolbar default and active colors
      barTextColor: 'white',
      // barSelectedColor: 'white',
      barBg: '#1b1b24',
      appBorderRadius: 4,
      inputBorderRadius: 4,
    },
  },
};

const withThemeProvider = (Story, context) => {
  return (
    // 插入样式
    <Emotion10ThemeProvider theme={defaultTheme}>
    {/* mui */}
      <ThemeProvider theme={defaultTheme}>
        <Story {...context} />
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
};
// 全局的装饰器
export const decorators = [withThemeProvider];
