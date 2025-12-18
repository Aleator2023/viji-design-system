/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";

import dts from "vite-plugin-dts";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ command }) => {
  const isBuild = command === "build";

  return {
    plugins: [
      react(),
      tailwindcss(),

     
      isBuild
        ? dts({
            entryRoot: "src",
            insertTypesEntry: true,
            tsconfigPath: "./tsconfig.json",
            include: ["src"],
          })
        : undefined,
    ].filter(Boolean),

    // Library build только при vite build
    ...(isBuild
      ? {
          build: {
            lib: {
              entry: "src/index.ts",
              name: "VijiDesignSystem",
              fileName: "index",
              formats: ["es"],
            },
            rollupOptions: {
              external: ["react", "react-dom"],
            },
          },
        }
      : {}),

    test: {
      projects: [
        {
          extends: true,
          plugins: [
            storybookTest({
              configDir: path.join(dirname, ".storybook"),
            }),
          ],
          test: {
            name: "storybook",
            browser: {
              enabled: true,
              headless: true,
              provider: playwright({}),
              instances: [{ browser: "chromium" }],
            },
            setupFiles: [".storybook/vitest.setup.ts"],
          },
        },
      ],
    },
  };
});