const rules = require('./rules.js');

const plugins = ['react', 'array-plural', 'private-props', 'mysticatea', 'node', 'import'];

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
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	rules: {
		...Object.assign({}, ...Object.keys(rules).filter((rule) => (
			!rule.includes('/') || plugins.includes(rule.split('/')[0])
		)).map((key) => ({[key]: rules[key]}))),
		'node/file-extension-in-import': 'off',
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': 'typescript',
	},
};
