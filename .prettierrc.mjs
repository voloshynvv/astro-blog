/** @type {import("prettier").Config} */
export default {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  useTabs: false,
  printWidth: 120,

  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
