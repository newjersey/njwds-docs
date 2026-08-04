import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";
import { defineConfig } from "eslint/config";
import * as astroParser from "astro-eslint-parser";

export default defineConfig(
  // 1. Global Ignores (Stand-alone object)
  {
    ignores: [
      "**/*.d.ts",
      "node_modules/",
      "dist/",
      "public/dist/",
      "build/",
      "packages/**/dist/",
      "packages/**/node_modules/",
      "*.config.js",
    ],
  },

  // 2. Base Recommendations
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  // 3. Documentation logic for Astro files
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".astro"],
      },
      globals: {
        ...globals.browser,
      },
    },
  },

  // 4. Formatting (Always last)
  prettierConfig,
);
