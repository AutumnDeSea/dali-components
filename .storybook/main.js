const { resolve } = require('path')
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    // {
    //   name: '@storybook/addon-postcss', // 支持css，所以针对preview.js中import css并不支持
    //   options: {
    //     postcssLoaderOptions: {
    //       implementation: require('postcss'),
    //     },
    //   },
    // },
  ],
  "framework": "@storybook/react",
  "core": {
    builder: "@storybook/builder-webpack5"
  },
  webpackFinal: (config, { presets }) => {
    // const version = await presets.apply('webpackVersion');
    config.resolve.alias = {
      ...config.resolve?.alias,
      '@': [resolve(__dirname, "../src/")]
    }
    // const instance = (await presets.apply('webpackInstance'))?.default;
  
    // logger.info(`=> Running in webpack ${version}: ${instance}`);
    return config;
  }
}