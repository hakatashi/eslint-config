const js = require('@eslint/js');
const stylisticJsPlugin = require('@stylistic/eslint-plugin-js');
const importPlugin = require('eslint-plugin-import');
const nodePlugin = require('eslint-plugin-n');
const privatePropsPlugin = require('eslint-plugin-private-props');
const reactPlugin = require('eslint-plugin-react');
const globals = require('globals');
const typescriptEslint = require('typescript-eslint');
const rules = require('./rules.js');

const plugins = ['react', 'private-props', 'n', 'import', '@typescript-eslint', '@stylistic'];

/** @type {import('eslint').Linter.Config[]} */
const configs = typescriptEslint.config(
	js.configs.recommended,
	reactPlugin.configs.flat.recommended,
	...typescriptEslint.configs.strict,
	...typescriptEslint.configs.stylistic,
	{
		languageOptions: {
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
			import: importPlugin,
			'@stylistic/js': stylisticJsPlugin,
		},
		rules: {
			...Object.assign({}, ...Object.keys(rules).filter((rule) => (
				!rule.includes('/') || plugins.includes(rule.split('/')[0])
			)).map((key) => ({[key]: rules[key]}))),
			'node/file-extension-in-import': 'off',
			'import/named': 'off',
			'no-restricted-imports': 'off',

			// https://typescript-eslint.io/rules/no-use-before-define#how-to-use
			'no-use-before-define': 'off',
			'@typescript-eslint/no-use-before-define': 'error',

			// https://typescript-eslint.io/rules/no-unused-vars/#options
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],

			'@typescript-eslint/no-non-null-assertion': 'warn',
		},
		settings: {
			'import/parsers': {
				'@typescript-eslint/parser': ['.ts', '.tsx'],
			},
			'import/resolver': 'typescript',
		},
	},
);

module.exports = configs;
module.exports.default = configs;
