/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions & import('@trivago/prettier-plugin-sort-imports').PluginConfig} */
module.exports = {
  singleQuote: true,
  trailingComma: "all",
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-astro",
  ],
  importOrder: ["<THIRD_PARTY_MODULES>", "^[./]"],
  importOrderSeparation: true,
  useTabs: true,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
