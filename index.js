const rules = require('./rules.js');

module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['react', 'array-plural'],
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	rules,
};
