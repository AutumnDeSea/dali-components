const { resolve } = require('path')
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    'storybook-addon-themes',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
    {
      name: '@storybook/addon-postcss', // 支持css，所以针对preview.js中import css并不支持
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  "framework": "@storybook/react",
  "core": {
    builder: "@storybook/builder-webpack5"
  },
  //  分包编译
  features: {
    storyStoreV7: true,
  },
  webpackFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve?.alias,
      '@': [resolve(__dirname, "../src/")]
    }
    // config.resolve.extensions = ['.js', '.ts', '.tsx', 'jsx', '.css']
    return config;
  },
  reactOptions: { 
    legacyRootApi: true,
    fastRefresh: true
  }
}