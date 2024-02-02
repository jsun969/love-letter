/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions & import('@trivago/prettier-plugin-sort-imports').PluginConfig} */
module.exports = {
	singleQuote: true,
	trailingComma: 'all',
	useTabs: true,
	plugins: [
		'@trivago/prettier-plugin-sort-imports',
		'prettier-plugin-astro',
		'prettier-plugin-tailwindcss',
	],
	importOrder: ['<THIRD_PARTY_MODULES>', '^[./]'],
	importOrderSeparation: true,
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
