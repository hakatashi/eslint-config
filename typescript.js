const rules = require('./rules.js');

const plugins = ['react', 'array-plural', 'private-props', 'node', 'import', '@typescript-eslint'];

module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		extraFileExtensions: ['.vue'],
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins,
	extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
	rules: {
		...Object.assign({}, ...Object.keys(rules).filter((rule) => (
			!rule.includes('/') || plugins.includes(rule.split('/')[0])
		)).map((key) => ({[key]: rules[key]}))),
		'node/file-extension-in-import': 'off',
		'import/named': 'off',
		'import/extensions': 'off',
		'no-restricted-imports': 'off',

		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': 'typescript',
	},
};
