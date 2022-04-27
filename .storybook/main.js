const { mergeConfig } = require("vite")

module.exports = {
  stories: ["../src/**/*.stories.@tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: { builder: "@storybook/builder-vite" },
  async viteFinal(config, { _configType }) {
    return mergeConfig(config, {})
  },
}
