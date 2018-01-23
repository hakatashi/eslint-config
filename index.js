const rules = require('./rules.js');

module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2017,
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true,
		},
		sourceType: 'module',
	},
	plugins: ['react', 'array-plural', 'private-props', 'mysticatea'],
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	rules,
};
