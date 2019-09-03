const rules = require('./rules.js');

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
	},
	plugins: ['react', 'array-plural', 'private-props', 'mysticatea', 'node'],
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	rules,
};
