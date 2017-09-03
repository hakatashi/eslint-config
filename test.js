const config = require('./');
const eslint = require('eslint');

const react = require('eslint-plugin-react');
const arrayPlural = require('eslint-plugin-array-plural');

const linter = new eslint.Linter();

const rules = [
	...linter.getRules().keys(),
	...Object.keys(react.rules).map((rule) => `react/${rule}`),
	...Object.keys(arrayPlural.rules).map((rule) => `array-plural/${rule}`),
];

let isError = false;

for (const rule of rules) {
	if (config.rules[rule] === undefined) {
		process.stdout.write(`ERROR: Config for the rule ${rule} is missing.\n`);
		isError = true;
	}
}

if (isError) {
	throw new Error('One or more errors found');
}
