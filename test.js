const eslint = require('eslint');

const arrayPlural = require('eslint-plugin-array-plural');
const importPlugin = require('eslint-plugin-import');
const mysticatea = require('eslint-plugin-mysticatea');
const node = require('eslint-plugin-node');
const privateProps = require('eslint-plugin-private-props');
const react = require('eslint-plugin-react');
const vue = require('eslint-plugin-vue');

const config = require('./');

const linter = new eslint.Linter();

const rules = [
	...linter.getRules().entries(),
	...Object.entries(react.rules).map(([name, rule]) => [`react/${name}`, rule]),
	...Object.entries(arrayPlural.rules).map(([name, rule]) => [`array-plural/${name}`, rule]),
	...Object.entries(privateProps.rules).map(([name, rule]) => [`private-props/${name}`, rule]),
	...Object.entries(mysticatea.rules).map(([name, rule]) => [`mysticatea/${name}`, rule]),
	...Object.entries(node.rules).map(([name, rule]) => [`node/${name}`, rule]),
	...Object.entries(vue.rules).map(([name, rule]) => [`vue/${name}`, rule]),
	...Object.entries(importPlugin.rules).map(([name, rule]) => [`import/${name}`, rule]),
];

let isError = false;

for (const [name, rule] of rules) {
	if (config.rules[name] === undefined) {
		process.stdout.write(`ERROR: Config for the rule ${name} is missing. Doc: ${rule.meta.docs.url}\n`);
		isError = true;
	}
}

for (const rule of Object.keys(config.rules)) {
	if (!rules.some(([name]) => name === rule)) {
		process.stdout.write(`ERROR: Config for the rule ${rule} is extraneous.\n`);
		isError = true;
	}
}

if (isError) {
	throw new Error('One or more errors found');
}
