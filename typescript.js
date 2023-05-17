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
		ecmaVersion: 'latest',
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

		// https://typescript-eslint.io/rules/no-use-before-define#how-to-use
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': 'error',

		// https://typescript-eslint.io/rules/no-unused-vars/#options
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': 'typescript',
	},
};
