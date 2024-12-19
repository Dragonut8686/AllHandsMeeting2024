import globals from "globals";
import jsConfig from "@eslint/js";
import tsConfig from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactConfig from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json",
      },
      globals: globals.browser,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
  jsConfig.configs.recommended,
  tsConfig.configs["recommended-type-checked"],
  reactConfig.configs.flat.recommended,
];
