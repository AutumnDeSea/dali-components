import '../src/App.css';
import { themes, addDecorator } from '@storybook/theming';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming';

const defaultTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  themes: {
    default: 'yddark',
    disabled: true,
    list: [
      { name: 'yddark', class: '', color: '#1b1b24' },
      { name: 'ydlight', class: 'theme-light', color: '#ffff' },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
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

export const decorators = [withThemeProvider];
