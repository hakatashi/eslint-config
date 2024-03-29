const rules = require('./rules.js');

module.exports = {
	parser: 'vue-eslint-parser',
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 'latest',
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: 'module',
	},
	plugins: ['react', 'array-plural', 'private-props', 'node', 'vue', 'import', 'sort-keys-fix'],
	extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:vue/recommended'],
	rules,
};
