/** @type { import('@storybook/sveltekit').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|ts|svelte)"],

  addons: [
    "@storybook/addon-svelte-csf",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@storybook/addon-mdx-gfm"
  ],

  framework: {
    name: "@storybook/sveltekit",
    options: {},
  },

  docs: {}
};
export default config;
