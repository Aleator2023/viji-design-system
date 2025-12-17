import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.stories.@(ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  async viteFinal(config) {
    config.plugins = config.plugins || [];

    
    config.plugins.push(
      svgr({
        
        include: "**/*.svg?react",
      })
    );

    config.plugins.push(tailwindcss());
    return config;
  },
};

export default config;