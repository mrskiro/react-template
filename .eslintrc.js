module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "import", "unused-imports"],
  rules: {
    "@typescript-eslint/no-unused-vars": ["off"],
    "@typescript-eslint/ban-types": ["off"],
    "@typescript-eslint/no-empty-function": ["off"],
    "react/prop-types": ["off"],
    "unused-imports/no-unused-imports": ["warn"],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
        alphabetize: { order: "asc", caseInsensitive: true },
        pathGroupsExcludedImportTypes: ["react", "styled-components"],
        pathGroups: [
          {
            pattern: "styled-components",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
          { pattern: "@/lib/**", group: "internal", position: "before" },
          { pattern: "@/components/**", group: "internal", position: "before" },
          { pattern: "@/**", group: "internal", position: "before" },
        ],
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
