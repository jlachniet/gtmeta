/** @type {import("@typescript-eslint/utils").TSESLint.Linter.ConfigType} */
const config = {
	root: true,
	ignorePatterns: ['dist'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: true,
	},
	env: {
		es2024: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/strict-type-checked',
		'prettier',
	],
	plugins: ['tsdoc', '@stylistic'],
	settings: {
		'import/resolver': {
			typescript: true,
			node: true,
		},
	},
	rules: {
		'eqeqeq': 'error',
		'no-console': [
			'error',
			{
				allow: ['info', 'warn', 'error'],
			},
		],
		'no-empty': [
			'error',
			{
				allowEmptyCatch: true,
			},
		],
		'import/no-unused-modules': [
			'error',
			{
				unusedExports: true,
				src: ['src/**/*.ts'],
			},
		],
		'@typescript-eslint/explicit-member-accessibility': 'error',
		'@typescript-eslint/no-confusing-void-expression': [
			'error',
			{
				ignoreArrowShorthand: true,
			},
		],
		'@typescript-eslint/no-empty-object-type': [
			'error',
			{
				allowObjectTypes: 'always',
			},
		],
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/no-misused-promises': [
			'error',
			{
				checksVoidReturn: false,
			},
		],
		'@typescript-eslint/no-namespace': [
			'error',
			{
				allowDeclarations: true,
			},
		],
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/restrict-template-expressions': [
			'error',
			{
				allowNumber: true,
			},
		],
		'@typescript-eslint/switch-exhaustiveness-check': 'error',
		'tsdoc/syntax': 'error',
		'@stylistic/max-len': [
			'error',
			{
				code: 120,
				comments: 80,
				ignorePattern: 'eslint-disable-next-line',
			},
		],
	},
	overrides: [
		{
			files: ['*.js', '*.cjs'],
			rules: {
				'tsdoc/syntax': 'off',
			},
		},
	],
};

module.exports = config;
