const js = require('@eslint/js');
const stylisticJsPlugin = require('@stylistic/eslint-plugin-js');
const arrayPlural = require('eslint-plugin-array-plural');
const importPlugin = require('eslint-plugin-import');
const node = require('eslint-plugin-n');
const privateProps = require('eslint-plugin-private-props');
const react = require('eslint-plugin-react');
const sortKeysFix = require('eslint-plugin-sort-keys-fix');
const vue = require('eslint-plugin-vue');

const rules = require('./rules.js');

const definedRules = [
	...Object.entries(js.configs.all.rules).map(([name, rule]) => [name, rule]),
	...Object.entries(react.rules).map(([name, rule]) => [`react/${name}`, rule]),
	...Object.entries(arrayPlural.rules).map(([name, rule]) => [`array-plural/${name}`, rule]),
	...Object.entries(privateProps.rules).map(([name, rule]) => [`private-props/${name}`, rule]),
	...Object.entries(node.rules).map(([name, rule]) => [`n/${name}`, rule]),
	...Object.entries(vue.rules).map(([name, rule]) => [`vue/${name}`, rule]),
	...Object.entries(importPlugin.rules).map(([name, rule]) => [`import/${name}`, rule]),
	...Object.entries(sortKeysFix.rules).map(([name, rule]) => [`sort-keys-fix/${name}`, rule]),
	...Object.entries(stylisticJsPlugin.rules).map(([name, rule]) => [`@stylistic/js/${name}`, rule]),
];

let isError = false;
const missingRules = [];

for (const [name, rule] of definedRules) {
	if (rules[name] === undefined) {
		missingRules.push(name);
		process.stdout.write(`ERROR: Config for the rule ${name} is missing. Doc: ${rule?.meta?.docs?.url}\n`);
		isError = true;
	}
}

for (const rule of Object.keys(rules)) {
	if (!definedRules.some(([name]) => name === rule)) {
		process.stdout.write(`ERROR: Config for the rule ${rule} is extraneous.\n`);
		isError = true;
	}
}

if (missingRules.length > 0) {
	console.log('Configuration for missing rules:');
	console.log('{');
	for (const rule of missingRules) {
		console.log(`\t'${rule}': 'error',`);
	}
	console.log('}');
}

if (isError) {
	throw new Error('One or more errors found');
}
