const js = require('@eslint/js');
const stylisticJsPlugin = require('@stylistic/eslint-plugin-js');
const importPlugin = require('eslint-plugin-import');
const nodePlugin = require('eslint-plugin-n');
const privatePropsPlugin = require('eslint-plugin-private-props');
const reactPlugin = require('eslint-plugin-react');
const sortKeysFixPlugin = require('eslint-plugin-sort-keys-fix');
const vuePlugin = require('eslint-plugin-vue');
const globals = require('globals');
const vueEslintParser = require('vue-eslint-parser');
const rules = require('./rules.js');

/** @type {import('eslint').Linter.Config[]} */
const configs = [
	js.configs.recommended,
	reactPlugin.configs.flat.recommended,
	...vuePlugin.configs['flat/recommended'],
	{
		languageOptions: {
			parser: vueEslintParser,
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es6,
				...globals.node,
			},
		},
		plugins: {
			react: reactPlugin,
			'private-props': privatePropsPlugin,
			n: nodePlugin,
			vue: vuePlugin,
			import: importPlugin,
			'sort-keys-fix': sortKeysFixPlugin,
			'@stylistic/js': stylisticJsPlugin,
		},
		rules,
	},
];

module.exports = configs;
module.exports.default = configs;
