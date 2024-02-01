module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['./tsconfig.json'],
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'plugin:astro/recommended',
	],
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
			rules: {},
		},
	],
	ignorePatterns: ['*.cjs', '*.mjs'],
	rules: {
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
		'@typescript-eslint/consistent-type-imports': [
			'warn',
			{ disallowTypeAnnotations: false },
		],
		'no-console': 'warn',
	},
};
