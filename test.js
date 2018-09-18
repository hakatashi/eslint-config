const config = require('./');
const eslint = require('eslint');

const react = require('eslint-plugin-react');
const arrayPlural = require('eslint-plugin-array-plural');
const privateProps = require('eslint-plugin-private-props');
const mysticatea = require('eslint-plugin-mysticatea');
const node = require('eslint-plugin-node');
const vue = require('eslint-plugin-vue');

const linter = new eslint.Linter();

const rules = [
	...linter.getRules().keys(),
	...Object.keys(react.rules).map((rule) => `react/${rule}`),
	...Object.keys(arrayPlural.rules).map((rule) => `array-plural/${rule}`),
	...Object.keys(privateProps.rules).map((rule) => `private-props/${rule}`),
	...Object.keys(mysticatea.rules).map((rule) => `mysticatea/${rule}`),
	...Object.keys(node.rules).map((rule) => `node/${rule}`),
	...Object.keys(vue.rules).map((rule) => `vue/${rule}`),
];

let isError = false;

for (const rule of rules) {
	if (config.rules[rule] === undefined) {
		process.stdout.write(`ERROR: Config for the rule ${rule} is missing.\n`);
		isError = true;
	}
}

for (const rule of Object.keys(config.rules)) {
	if (!rules.includes(rule)) {
		process.stdout.write(`ERROR: Config for the rule ${rule} is extraneous.\n`);
		isError = true;
	}
}

if (isError) {
	throw new Error('One or more errors found');
}
